(async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);
        new MutationObserver((o)=>{
            for (const f of o)if (f.type === "childList") for (const d of f.addedNodes)d.tagName === "LINK" && d.rel === "modulepreload" && u(d);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function i(o) {
            const f = {};
            return o.integrity && (f.integrity = o.integrity), o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? f.credentials = "include" : o.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
        }
        function u(o) {
            if (o.ep) return;
            o.ep = !0;
            const f = i(o);
            fetch(o.href, f);
        }
    })();
    function wc(l) {
        return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
    }
    var Yo = {
        exports: {}
    }, wl = {};
    var Pp;
    function fv() {
        if (Pp) return wl;
        Pp = 1;
        var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function i(u, o, f) {
            var d = null;
            if (f !== void 0 && (d = "" + f), o.key !== void 0 && (d = "" + o.key), "key" in o) {
                f = {};
                for(var h in o)h !== "key" && (f[h] = o[h]);
            } else f = o;
            return o = f.ref, {
                $$typeof: l,
                type: u,
                key: d,
                ref: o !== void 0 ? o : null,
                props: f
            };
        }
        return wl.Fragment = r, wl.jsx = i, wl.jsxs = i, wl;
    }
    var Lp;
    function dv() {
        return Lp || (Lp = 1, Yo.exports = fv()), Yo.exports;
    }
    var y = dv(), Io = {
        exports: {}
    }, oe = {};
    var kp;
    function hv() {
        if (kp) return oe;
        kp = 1;
        var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.iterator;
        function S(x) {
            return x === null || typeof x != "object" ? null : (x = E && x[E] || x["@@iterator"], typeof x == "function" ? x : null);
        }
        var D = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, T = Object.assign, R = {};
        function M(x, H, X) {
            this.props = x, this.context = H, this.refs = R, this.updater = X || D;
        }
        M.prototype.isReactComponent = {}, M.prototype.setState = function(x, H) {
            if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, x, H, "setState");
        }, M.prototype.forceUpdate = function(x) {
            this.updater.enqueueForceUpdate(this, x, "forceUpdate");
        };
        function w() {}
        w.prototype = M.prototype;
        function k(x, H, X) {
            this.props = x, this.context = H, this.refs = R, this.updater = X || D;
        }
        var V = k.prototype = new w;
        V.constructor = k, T(V, M.prototype), V.isPureReactComponent = !0;
        var Q = Array.isArray, G = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, Y = Object.prototype.hasOwnProperty;
        function le(x, H, X, I, J, ge) {
            return X = ge.ref, {
                $$typeof: l,
                type: x,
                key: H,
                ref: X !== void 0 ? X : null,
                props: ge
            };
        }
        function se(x, H) {
            return le(x.type, H, void 0, void 0, void 0, x.props);
        }
        function ae(x) {
            return typeof x == "object" && x !== null && x.$$typeof === l;
        }
        function Le(x) {
            var H = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + x.replace(/[=:]/g, function(X) {
                return H[X];
            });
        }
        var Qe = /\/+/g;
        function ye(x, H) {
            return typeof x == "object" && x !== null && x.key != null ? Le("" + x.key) : H.toString(36);
        }
        function Ue() {}
        function gt(x) {
            switch(x.status){
                case "fulfilled":
                    return x.value;
                case "rejected":
                    throw x.reason;
                default:
                    switch(typeof x.status == "string" ? x.then(Ue, Ue) : (x.status = "pending", x.then(function(H) {
                        x.status === "pending" && (x.status = "fulfilled", x.value = H);
                    }, function(H) {
                        x.status === "pending" && (x.status = "rejected", x.reason = H);
                    })), x.status){
                        case "fulfilled":
                            return x.value;
                        case "rejected":
                            throw x.reason;
                    }
            }
            throw x;
        }
        function _e(x, H, X, I, J) {
            var ge = typeof x;
            (ge === "undefined" || ge === "boolean") && (x = null);
            var ee = !1;
            if (x === null) ee = !0;
            else switch(ge){
                case "bigint":
                case "string":
                case "number":
                    ee = !0;
                    break;
                case "object":
                    switch(x.$$typeof){
                        case l:
                        case r:
                            ee = !0;
                            break;
                        case b:
                            return ee = x._init, _e(ee(x._payload), H, X, I, J);
                    }
            }
            if (ee) return J = J(x), ee = I === "" ? "." + ye(x, 0) : I, Q(J) ? (X = "", ee != null && (X = ee.replace(Qe, "$&/") + "/"), _e(J, H, X, "", function(mt) {
                return mt;
            })) : J != null && (ae(J) && (J = se(J, X + (J.key == null || x && x.key === J.key ? "" : ("" + J.key).replace(Qe, "$&/") + "/") + ee)), H.push(J)), 1;
            ee = 0;
            var ne = I === "" ? "." : I + ":";
            if (Q(x)) for(var me = 0; me < x.length; me++)I = x[me], ge = ne + ye(I, me), ee += _e(I, H, X, ge, J);
            else if (me = S(x), typeof me == "function") for(x = me.call(x), me = 0; !(I = x.next()).done;)I = I.value, ge = ne + ye(I, me++), ee += _e(I, H, X, ge, J);
            else if (ge === "object") {
                if (typeof x.then == "function") return _e(gt(x), H, X, I, J);
                throw H = String(x), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ee;
        }
        function B(x, H, X) {
            if (x == null) return x;
            var I = [], J = 0;
            return _e(x, I, "", "", function(ge) {
                return H.call(X, ge, J++);
            }), I;
        }
        function K(x) {
            if (x._status === -1) {
                var H = x._result;
                H = H(), H.then(function(X) {
                    (x._status === 0 || x._status === -1) && (x._status = 1, x._result = X);
                }, function(X) {
                    (x._status === 0 || x._status === -1) && (x._status = 2, x._result = X);
                }), x._status === -1 && (x._status = 0, x._result = H);
            }
            if (x._status === 1) return x._result.default;
            throw x._result;
        }
        var W = typeof reportError == "function" ? reportError : function(x) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var H = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
                    error: x
                });
                if (!window.dispatchEvent(H)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", x);
                return;
            }
            console.error(x);
        };
        function Se() {}
        return oe.Children = {
            map: B,
            forEach: function(x, H, X) {
                B(x, function() {
                    H.apply(this, arguments);
                }, X);
            },
            count: function(x) {
                var H = 0;
                return B(x, function() {
                    H++;
                }), H;
            },
            toArray: function(x) {
                return B(x, function(H) {
                    return H;
                }) || [];
            },
            only: function(x) {
                if (!ae(x)) throw Error("React.Children.only expected to receive a single React element child.");
                return x;
            }
        }, oe.Component = M, oe.Fragment = i, oe.Profiler = o, oe.PureComponent = k, oe.StrictMode = u, oe.Suspense = p, oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, oe.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(x) {
                return G.H.useMemoCache(x);
            }
        }, oe.cache = function(x) {
            return function() {
                return x.apply(null, arguments);
            };
        }, oe.cloneElement = function(x, H, X) {
            if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
            var I = T({}, x.props), J = x.key, ge = void 0;
            if (H != null) for(ee in H.ref !== void 0 && (ge = void 0), H.key !== void 0 && (J = "" + H.key), H)!Y.call(H, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && H.ref === void 0 || (I[ee] = H[ee]);
            var ee = arguments.length - 2;
            if (ee === 1) I.children = X;
            else if (1 < ee) {
                for(var ne = Array(ee), me = 0; me < ee; me++)ne[me] = arguments[me + 2];
                I.children = ne;
            }
            return le(x.type, J, void 0, void 0, ge, I);
        }, oe.createContext = function(x) {
            return x = {
                $$typeof: d,
                _currentValue: x,
                _currentValue2: x,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, x.Provider = x, x.Consumer = {
                $$typeof: f,
                _context: x
            }, x;
        }, oe.createElement = function(x, H, X) {
            var I, J = {}, ge = null;
            if (H != null) for(I in H.key !== void 0 && (ge = "" + H.key), H)Y.call(H, I) && I !== "key" && I !== "__self" && I !== "__source" && (J[I] = H[I]);
            var ee = arguments.length - 2;
            if (ee === 1) J.children = X;
            else if (1 < ee) {
                for(var ne = Array(ee), me = 0; me < ee; me++)ne[me] = arguments[me + 2];
                J.children = ne;
            }
            if (x && x.defaultProps) for(I in ee = x.defaultProps, ee)J[I] === void 0 && (J[I] = ee[I]);
            return le(x, ge, void 0, void 0, null, J);
        }, oe.createRef = function() {
            return {
                current: null
            };
        }, oe.forwardRef = function(x) {
            return {
                $$typeof: h,
                render: x
            };
        }, oe.isValidElement = ae, oe.lazy = function(x) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: x
                },
                _init: K
            };
        }, oe.memo = function(x, H) {
            return {
                $$typeof: m,
                type: x,
                compare: H === void 0 ? null : H
            };
        }, oe.startTransition = function(x) {
            var H = G.T, X = {};
            G.T = X;
            try {
                var I = x(), J = G.S;
                J !== null && J(X, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(Se, W);
            } catch (ge) {
                W(ge);
            } finally{
                G.T = H;
            }
        }, oe.unstable_useCacheRefresh = function() {
            return G.H.useCacheRefresh();
        }, oe.use = function(x) {
            return G.H.use(x);
        }, oe.useActionState = function(x, H, X) {
            return G.H.useActionState(x, H, X);
        }, oe.useCallback = function(x, H) {
            return G.H.useCallback(x, H);
        }, oe.useContext = function(x) {
            return G.H.useContext(x);
        }, oe.useDebugValue = function() {}, oe.useDeferredValue = function(x, H) {
            return G.H.useDeferredValue(x, H);
        }, oe.useEffect = function(x, H, X) {
            var I = G.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return I.useEffect(x, H);
        }, oe.useId = function() {
            return G.H.useId();
        }, oe.useImperativeHandle = function(x, H, X) {
            return G.H.useImperativeHandle(x, H, X);
        }, oe.useInsertionEffect = function(x, H) {
            return G.H.useInsertionEffect(x, H);
        }, oe.useLayoutEffect = function(x, H) {
            return G.H.useLayoutEffect(x, H);
        }, oe.useMemo = function(x, H) {
            return G.H.useMemo(x, H);
        }, oe.useOptimistic = function(x, H) {
            return G.H.useOptimistic(x, H);
        }, oe.useReducer = function(x, H, X) {
            return G.H.useReducer(x, H, X);
        }, oe.useRef = function(x) {
            return G.H.useRef(x);
        }, oe.useState = function(x) {
            return G.H.useState(x);
        }, oe.useSyncExternalStore = function(x, H, X) {
            return G.H.useSyncExternalStore(x, H, X);
        }, oe.useTransition = function() {
            return G.H.useTransition();
        }, oe.version = "19.1.0", oe;
    }
    var Vp;
    function Ru() {
        return Vp || (Vp = 1, Io.exports = hv()), Io.exports;
    }
    var O = Ru();
    const pv = wc(O);
    var Xo = {
        exports: {}
    }, Ml = {}, Zo = {
        exports: {}
    }, Jo = {};
    var Bp;
    function gv() {
        return Bp || (Bp = 1, function(l) {
            function r(B, K) {
                var W = B.length;
                B.push(K);
                e: for(; 0 < W;){
                    var Se = W - 1 >>> 1, x = B[Se];
                    if (0 < o(x, K)) B[Se] = K, B[W] = x, W = Se;
                    else break e;
                }
            }
            function i(B) {
                return B.length === 0 ? null : B[0];
            }
            function u(B) {
                if (B.length === 0) return null;
                var K = B[0], W = B.pop();
                if (W !== K) {
                    B[0] = W;
                    e: for(var Se = 0, x = B.length, H = x >>> 1; Se < H;){
                        var X = 2 * (Se + 1) - 1, I = B[X], J = X + 1, ge = B[J];
                        if (0 > o(I, W)) J < x && 0 > o(ge, I) ? (B[Se] = ge, B[J] = W, Se = J) : (B[Se] = I, B[X] = W, Se = X);
                        else if (J < x && 0 > o(ge, W)) B[Se] = ge, B[J] = W, Se = J;
                        else break e;
                    }
                }
                return K;
            }
            function o(B, K) {
                var W = B.sortIndex - K.sortIndex;
                return W !== 0 ? W : B.id - K.id;
            }
            if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var f = performance;
                l.unstable_now = function() {
                    return f.now();
                };
            } else {
                var d = Date, h = d.now();
                l.unstable_now = function() {
                    return d.now() - h;
                };
            }
            var p = [], m = [], b = 1, E = null, S = 3, D = !1, T = !1, R = !1, M = !1, w = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
            function Q(B) {
                for(var K = i(m); K !== null;){
                    if (K.callback === null) u(m);
                    else if (K.startTime <= B) u(m), K.sortIndex = K.expirationTime, r(p, K);
                    else break;
                    K = i(m);
                }
            }
            function G(B) {
                if (R = !1, Q(B), !T) if (i(p) !== null) T = !0, Y || (Y = !0, ye());
                else {
                    var K = i(m);
                    K !== null && _e(G, K.startTime - B);
                }
            }
            var Y = !1, le = -1, se = 5, ae = -1;
            function Le() {
                return M ? !0 : !(l.unstable_now() - ae < se);
            }
            function Qe() {
                if (M = !1, Y) {
                    var B = l.unstable_now();
                    ae = B;
                    var K = !0;
                    try {
                        e: {
                            T = !1, R && (R = !1, k(le), le = -1), D = !0;
                            var W = S;
                            try {
                                t: {
                                    for(Q(B), E = i(p); E !== null && !(E.expirationTime > B && Le());){
                                        var Se = E.callback;
                                        if (typeof Se == "function") {
                                            E.callback = null, S = E.priorityLevel;
                                            var x = Se(E.expirationTime <= B);
                                            if (B = l.unstable_now(), typeof x == "function") {
                                                E.callback = x, Q(B), K = !0;
                                                break t;
                                            }
                                            E === i(p) && u(p), Q(B);
                                        } else u(p);
                                        E = i(p);
                                    }
                                    if (E !== null) K = !0;
                                    else {
                                        var H = i(m);
                                        H !== null && _e(G, H.startTime - B), K = !1;
                                    }
                                }
                                break e;
                            } finally{
                                E = null, S = W, D = !1;
                            }
                            K = void 0;
                        }
                    } finally{
                        K ? ye() : Y = !1;
                    }
                }
            }
            var ye;
            if (typeof V == "function") ye = function() {
                V(Qe);
            };
            else if (typeof MessageChannel < "u") {
                var Ue = new MessageChannel, gt = Ue.port2;
                Ue.port1.onmessage = Qe, ye = function() {
                    gt.postMessage(null);
                };
            } else ye = function() {
                w(Qe, 0);
            };
            function _e(B, K) {
                le = w(function() {
                    B(l.unstable_now());
                }, K);
            }
            l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
                B.callback = null;
            }, l.unstable_forceFrameRate = function(B) {
                0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < B ? Math.floor(1e3 / B) : 5;
            }, l.unstable_getCurrentPriorityLevel = function() {
                return S;
            }, l.unstable_next = function(B) {
                switch(S){
                    case 1:
                    case 2:
                    case 3:
                        var K = 3;
                        break;
                    default:
                        K = S;
                }
                var W = S;
                S = K;
                try {
                    return B();
                } finally{
                    S = W;
                }
            }, l.unstable_requestPaint = function() {
                M = !0;
            }, l.unstable_runWithPriority = function(B, K) {
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
                var W = S;
                S = B;
                try {
                    return K();
                } finally{
                    S = W;
                }
            }, l.unstable_scheduleCallback = function(B, K, W) {
                var Se = l.unstable_now();
                switch(typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? Se + W : Se) : W = Se, B){
                    case 1:
                        var x = -1;
                        break;
                    case 2:
                        x = 250;
                        break;
                    case 5:
                        x = 1073741823;
                        break;
                    case 4:
                        x = 1e4;
                        break;
                    default:
                        x = 5e3;
                }
                return x = W + x, B = {
                    id: b++,
                    callback: K,
                    priorityLevel: B,
                    startTime: W,
                    expirationTime: x,
                    sortIndex: -1
                }, W > Se ? (B.sortIndex = W, r(m, B), i(p) === null && B === i(m) && (R ? (k(le), le = -1) : R = !0, _e(G, W - Se))) : (B.sortIndex = x, r(p, B), T || D || (T = !0, Y || (Y = !0, ye()))), B;
            }, l.unstable_shouldYield = Le, l.unstable_wrapCallback = function(B) {
                var K = S;
                return function() {
                    var W = S;
                    S = K;
                    try {
                        return B.apply(this, arguments);
                    } finally{
                        S = W;
                    }
                };
            };
        }(Jo)), Jo;
    }
    var zp;
    function mv() {
        return zp || (zp = 1, Zo.exports = gv()), Zo.exports;
    }
    var Fo = {
        exports: {}
    }, ht = {};
    var Up;
    function vv() {
        if (Up) return ht;
        Up = 1;
        var l = Ru();
        function r(p) {
            var m = "https://react.dev/errors/" + p;
            if (1 < arguments.length) {
                m += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)m += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function i() {}
        var u = {
            d: {
                f: i,
                r: function() {
                    throw Error(r(522));
                },
                D: i,
                C: i,
                L: i,
                m: i,
                X: i,
                S: i,
                M: i
            },
            p: 0,
            findDOMNode: null
        }, o = Symbol.for("react.portal");
        function f(p, m, b) {
            var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: E == null ? null : "" + E,
                children: p,
                containerInfo: m,
                implementation: b
            };
        }
        var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function h(p, m) {
            if (p === "font") return "";
            if (typeof m == "string") return m === "use-credentials" ? m : "";
        }
        return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, ht.createPortal = function(p, m) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
            return f(p, m, null, b);
        }, ht.flushSync = function(p) {
            var m = d.T, b = u.p;
            try {
                if (d.T = null, u.p = 2, p) return p();
            } finally{
                d.T = m, u.p = b, u.d.f();
            }
        }, ht.preconnect = function(p, m) {
            typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, u.d.C(p, m));
        }, ht.prefetchDNS = function(p) {
            typeof p == "string" && u.d.D(p);
        }, ht.preinit = function(p, m) {
            if (typeof p == "string" && m && typeof m.as == "string") {
                var b = m.as, E = h(b, m.crossOrigin), S = typeof m.integrity == "string" ? m.integrity : void 0, D = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
                b === "style" ? u.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                    crossOrigin: E,
                    integrity: S,
                    fetchPriority: D
                }) : b === "script" && u.d.X(p, {
                    crossOrigin: E,
                    integrity: S,
                    fetchPriority: D,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0
                });
            }
        }, ht.preinitModule = function(p, m) {
            if (typeof p == "string") if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var b = h(m.as, m.crossOrigin);
                    u.d.M(p, {
                        crossOrigin: b,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    });
                }
            } else m == null && u.d.M(p);
        }, ht.preload = function(p, m) {
            if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
                var b = m.as, E = h(b, m.crossOrigin);
                u.d.L(p, b, {
                    crossOrigin: E,
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
        }, ht.preloadModule = function(p, m) {
            if (typeof p == "string") if (m) {
                var b = h(m.as, m.crossOrigin);
                u.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: b,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                });
            } else u.d.m(p);
        }, ht.requestFormReset = function(p) {
            u.d.r(p);
        }, ht.unstable_batchedUpdates = function(p, m) {
            return p(m);
        }, ht.useFormState = function(p, m, b) {
            return d.H.useFormState(p, m, b);
        }, ht.useFormStatus = function() {
            return d.H.useHostTransitionStatus();
        }, ht.version = "19.1.0", ht;
    }
    var qp;
    function yv() {
        if (qp) return Fo.exports;
        qp = 1;
        function l() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (r) {
                console.error(r);
            }
        }
        return l(), Fo.exports = vv(), Fo.exports;
    }
    var Hp;
    function bv() {
        if (Hp) return Ml;
        Hp = 1;
        var l = mv(), r = Ru(), i = yv();
        function u(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var n = 2; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function o(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
        }
        function f(e) {
            var t = e, n = e;
            if (e.alternate) for(; t.return;)t = t.return;
            else {
                e = t;
                do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
                while (e);
            }
            return t.tag === 3 ? n : null;
        }
        function d(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function h(e) {
            if (f(e) !== e) throw Error(u(188));
        }
        function p(e) {
            var t = e.alternate;
            if (!t) {
                if (t = f(e), t === null) throw Error(u(188));
                return t !== e ? null : e;
            }
            for(var n = e, a = t;;){
                var s = n.return;
                if (s === null) break;
                var c = s.alternate;
                if (c === null) {
                    if (a = s.return, a !== null) {
                        n = a;
                        continue;
                    }
                    break;
                }
                if (s.child === c.child) {
                    for(c = s.child; c;){
                        if (c === n) return h(s), e;
                        if (c === a) return h(s), t;
                        c = c.sibling;
                    }
                    throw Error(u(188));
                }
                if (n.return !== a.return) n = s, a = c;
                else {
                    for(var g = !1, v = s.child; v;){
                        if (v === n) {
                            g = !0, n = s, a = c;
                            break;
                        }
                        if (v === a) {
                            g = !0, a = s, n = c;
                            break;
                        }
                        v = v.sibling;
                    }
                    if (!g) {
                        for(v = c.child; v;){
                            if (v === n) {
                                g = !0, n = c, a = s;
                                break;
                            }
                            if (v === a) {
                                g = !0, a = c, n = s;
                                break;
                            }
                            v = v.sibling;
                        }
                        if (!g) throw Error(u(189));
                    }
                }
                if (n.alternate !== a) throw Error(u(190));
            }
            if (n.tag !== 3) throw Error(u(188));
            return n.stateNode.current === n ? e : t;
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
        var b = Object.assign, E = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), k = Symbol.for("react.consumer"), V = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), Le = Symbol.for("react.memo_cache_sentinel"), Qe = Symbol.iterator;
        function ye(e) {
            return e === null || typeof e != "object" ? null : (e = Qe && e[Qe] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Ue = Symbol.for("react.client.reference");
        function gt(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Ue ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case T:
                    return "Fragment";
                case M:
                    return "Profiler";
                case R:
                    return "StrictMode";
                case G:
                    return "Suspense";
                case Y:
                    return "SuspenseList";
                case ae:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case D:
                    return "Portal";
                case V:
                    return (e.displayName || "Context") + ".Provider";
                case k:
                    return (e._context.displayName || "Context") + ".Consumer";
                case Q:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case le:
                    return t = e.displayName || null, t !== null ? t : gt(e.type) || "Memo";
                case se:
                    t = e._payload, e = e._init;
                    try {
                        return gt(e(t));
                    } catch  {}
            }
            return null;
        }
        var _e = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Se = [], x = -1;
        function H(e) {
            return {
                current: e
            };
        }
        function X(e) {
            0 > x || (e.current = Se[x], Se[x] = null, x--);
        }
        function I(e, t) {
            x++, Se[x] = e.current, e.current = t;
        }
        var J = H(null), ge = H(null), ee = H(null), ne = H(null);
        function me(e, t) {
            switch(I(ee, t), I(ge, e), I(J, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? sp(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = sp(t), e = op(t, e);
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
            X(J), I(J, e);
        }
        function mt() {
            X(J), X(ge), X(ee);
        }
        function sn(e) {
            e.memoizedState !== null && I(ne, e);
            var t = J.current, n = op(t, e.type);
            t !== n && (I(ge, e), I(J, n));
        }
        function Ge(e) {
            ge.current === e && (X(J), X(ge)), ne.current === e && (X(ne), Cl._currentValue = W);
        }
        var ct = Object.prototype.hasOwnProperty, Mn = l.unstable_scheduleCallback, xa = l.unstable_cancelCallback, Ra = l.unstable_shouldYield, Nn = l.unstable_requestPaint, jt = l.unstable_now, Aa = l.unstable_getCurrentPriorityLevel, Zl = l.unstable_ImmediatePriority, _a = l.unstable_UserBlockingPriority, Nr = l.unstable_NormalPriority, wa = l.unstable_LowPriority, Ma = l.unstable_IdlePriority, Na = l.log, Ft = l.unstable_setDisableYieldValue, on = null, Je = null;
        function Wt(e) {
            if (typeof Na == "function" && Ft(e), Je && typeof Je.setStrictMode == "function") try {
                Je.setStrictMode(on, e);
            } catch  {}
        }
        var vt = Math.clz32 ? Math.clz32 : ja, Lu = Math.log, jr = Math.LN2;
        function ja(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Lu(e) / jr | 0) | 0;
        }
        var Pr = 256, cn = 4194304;
        function Pt(e) {
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
        function Lr(e, t, n) {
            var a = e.pendingLanes;
            if (a === 0) return 0;
            var s = 0, c = e.suspendedLanes, g = e.pingedLanes;
            e = e.warmLanes;
            var v = a & 134217727;
            return v !== 0 ? (a = v & ~c, a !== 0 ? s = Pt(a) : (g &= v, g !== 0 ? s = Pt(g) : n || (n = v & ~e, n !== 0 && (s = Pt(n))))) : (v = a & ~c, v !== 0 ? s = Pt(v) : g !== 0 ? s = Pt(g) : n || (n = a & ~e, n !== 0 && (s = Pt(n)))), s === 0 ? 0 : t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : s;
        }
        function sr(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function ku(e, t) {
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
        function Jl() {
            var e = Pr;
            return Pr <<= 1, (Pr & 4194048) === 0 && (Pr = 256), e;
        }
        function kr() {
            var e = cn;
            return cn <<= 1, (cn & 62914560) === 0 && (cn = 4194304), e;
        }
        function Pa(e) {
            for(var t = [], n = 0; 31 > n; n++)t.push(e);
            return t;
        }
        function or(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Vu(e, t, n, a, s, c) {
            var g = e.pendingLanes;
            e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
            var v = e.entanglements, C = e.expirationTimes, j = e.hiddenUpdates;
            for(n = g & ~n; 0 < n;){
                var z = 31 - vt(n), q = 1 << z;
                v[z] = 0, C[z] = -1;
                var P = j[z];
                if (P !== null) for(j[z] = null, z = 0; z < P.length; z++){
                    var L = P[z];
                    L !== null && (L.lane &= -536870913);
                }
                n &= ~q;
            }
            a !== 0 && Fl(e, a, 0), c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(g & ~t));
        }
        function Fl(e, t, n) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var a = 31 - vt(t);
            e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 4194090;
        }
        function Vr(e, t) {
            var n = e.entangledLanes |= t;
            for(e = e.entanglements; n;){
                var a = 31 - vt(n), s = 1 << a;
                s & t | e[a] & t && (e[a] |= t), n &= ~s;
            }
        }
        function La(e) {
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
        function jn(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Br() {
            var e = K.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ap(e.type));
        }
        function Bu(e, t) {
            var n = K.p;
            try {
                return K.p = e, t();
            } finally{
                K.p = n;
            }
        }
        var $t = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + $t, ft = "__reactProps$" + $t, Ee = "__reactContainer$" + $t, we = "__reactEvents$" + $t, bt = "__reactListeners$" + $t, Ke = "__reactHandles$" + $t, It = "__reactResources$" + $t, rt = "__reactMarker$" + $t;
        function ka(e) {
            delete e[Fe], delete e[ft], delete e[we], delete e[bt], delete e[Ke];
        }
        function zr(e) {
            var t = e[Fe];
            if (t) return t;
            for(var n = e.parentNode; n;){
                if (t = n[Ee] || n[Fe]) {
                    if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = hp(e); e !== null;){
                        if (n = e[Fe]) return n;
                        e = hp(e);
                    }
                    return t;
                }
                e = n, n = e.parentNode;
            }
            return null;
        }
        function Ur(e) {
            if (e = e[Fe] || e[Ee]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function Va(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(u(33));
        }
        function qr(e) {
            var t = e[It];
            return t || (t = e[It] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function We(e) {
            e[rt] = !0;
        }
        var Jc = new Set, Fc = {};
        function cr(e, t) {
            Hr(e, t), Hr(e + "Capture", t);
        }
        function Hr(e, t) {
            for(Fc[e] = t, e = 0; e < t.length; e++)Jc.add(t[e]);
        }
        var r1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wc = {}, $c = {};
        function a1(e) {
            return ct.call($c, e) ? !0 : ct.call(Wc, e) ? !1 : r1.test(e) ? $c[e] = !0 : (Wc[e] = !0, !1);
        }
        function Wl(e, t, n) {
            if (a1(t)) if (n === null) e.removeAttribute(t);
            else {
                switch(typeof n){
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            e.removeAttribute(t);
                            return;
                        }
                }
                e.setAttribute(t, "" + n);
            }
        }
        function $l(e, t, n) {
            if (n === null) e.removeAttribute(t);
            else {
                switch(typeof n){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(t);
                        return;
                }
                e.setAttribute(t, "" + n);
            }
        }
        function fn(e, t, n, a) {
            if (a === null) e.removeAttribute(n);
            else {
                switch(typeof a){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(n);
                        return;
                }
                e.setAttributeNS(t, n, "" + a);
            }
        }
        var zu, ef;
        function Qr(e) {
            if (zu === void 0) try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                zu = t && t[1] || "", ef = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + zu + e + ef;
        }
        var Uu = !1;
        function qu(e, t) {
            if (!e || Uu) return "";
            Uu = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var a = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var q = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(q.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(q, []);
                                    } catch (L) {
                                        var P = L;
                                    }
                                    Reflect.construct(e, [], q);
                                } else {
                                    try {
                                        q.call();
                                    } catch (L) {
                                        P = L;
                                    }
                                    e.call(q.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (L) {
                                    P = L;
                                }
                                (q = e()) && typeof q.catch == "function" && q.catch(function() {});
                            }
                        } catch (L) {
                            if (L && P && typeof L.stack == "string") return [
                                L.stack,
                                P.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var s = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                s && s.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var c = a.DetermineComponentFrameRoot(), g = c[0], v = c[1];
                if (g && v) {
                    var C = g.split(`
`), j = v.split(`
`);
                    for(s = a = 0; a < C.length && !C[a].includes("DetermineComponentFrameRoot");)a++;
                    for(; s < j.length && !j[s].includes("DetermineComponentFrameRoot");)s++;
                    if (a === C.length || s === j.length) for(a = C.length - 1, s = j.length - 1; 1 <= a && 0 <= s && C[a] !== j[s];)s--;
                    for(; 1 <= a && 0 <= s; a--, s--)if (C[a] !== j[s]) {
                        if (a !== 1 || s !== 1) do if (a--, s--, 0 > s || C[a] !== j[s]) {
                            var z = `
` + C[a].replace(" at new ", " at ");
                            return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                        }
                        while (1 <= a && 0 <= s);
                        break;
                    }
                }
            } finally{
                Uu = !1, Error.prepareStackTrace = n;
            }
            return (n = e ? e.displayName || e.name : "") ? Qr(n) : "";
        }
        function l1(e) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return Qr(e.type);
                case 16:
                    return Qr("Lazy");
                case 13:
                    return Qr("Suspense");
                case 19:
                    return Qr("SuspenseList");
                case 0:
                case 15:
                    return qu(e.type, !1);
                case 11:
                    return qu(e.type.render, !1);
                case 1:
                    return qu(e.type, !0);
                case 31:
                    return Qr("Activity");
                default:
                    return "";
            }
        }
        function tf(e) {
            try {
                var t = "";
                do t += l1(e), e = e.return;
                while (e);
                return t;
            } catch (n) {
                return `
Error generating stack: ` + n.message + `
` + n.stack;
            }
        }
        function Lt(e) {
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
        function nf(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function i1(e) {
            var t = nf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
                var s = n.get, c = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return s.call(this);
                    },
                    set: function(g) {
                        a = "" + g, c.call(this, g);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(g) {
                        a = "" + g;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function ei(e) {
            e._valueTracker || (e._valueTracker = i1(e));
        }
        function rf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(), a = "";
            return e && (a = nf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
        }
        function ti(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var u1 = /[\n"\\]/g;
        function kt(e) {
            return e.replace(u1, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Hu(e, t, n, a, s, c, g, v) {
            e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Lt(t)) : e.value !== "" + Lt(t) && (e.value = "" + Lt(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? Qu(e, g, Lt(t)) : n != null ? Qu(e, g, Lt(n)) : a != null && e.removeAttribute("value"), s == null && c != null && (e.defaultChecked = !!c), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Lt(v) : e.removeAttribute("name");
        }
        function af(e, t, n, a, s, c, g, v) {
            if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
                if (!(c !== "submit" && c !== "reset" || t != null)) return;
                n = n != null ? "" + Lt(n) : "", t = t != null ? "" + Lt(t) : n, v || t === e.value || (e.value = t), e.defaultValue = t;
            }
            a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = v ? e.checked : !!a, e.defaultChecked = !!a, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g);
        }
        function Qu(e, t, n) {
            t === "number" && ti(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
        }
        function Gr(e, t, n, a) {
            if (e = e.options, t) {
                t = {};
                for(var s = 0; s < n.length; s++)t["$" + n[s]] = !0;
                for(n = 0; n < e.length; n++)s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && a && (e[n].defaultSelected = !0);
            } else {
                for(n = "" + Lt(n), t = null, s = 0; s < e.length; s++){
                    if (e[s].value === n) {
                        e[s].selected = !0, a && (e[s].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[s].disabled || (t = e[s]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function lf(e, t, n) {
            if (t != null && (t = "" + Lt(t), t !== e.value && (e.value = t), n == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = n != null ? "" + Lt(n) : "";
        }
        function uf(e, t, n, a) {
            if (t == null) {
                if (a != null) {
                    if (n != null) throw Error(u(92));
                    if (_e(a)) {
                        if (1 < a.length) throw Error(u(93));
                        a = a[0];
                    }
                    n = a;
                }
                n == null && (n = ""), t = n;
            }
            n = Lt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a);
        }
        function Kr(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && n.nodeType === 3) {
                    n.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var s1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function sf(e, t, n) {
            var a = t.indexOf("--") === 0;
            n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || s1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
        }
        function of(e, t, n) {
            if (t != null && typeof t != "object") throw Error(u(62));
            if (e = e.style, n != null) {
                for(var a in n)!n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
                for(var s in t)a = t[s], t.hasOwnProperty(s) && n[s] !== a && sf(e, s, a);
            } else for(var c in t)t.hasOwnProperty(c) && sf(e, c, t[c]);
        }
        function Gu(e) {
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
        var o1 = new Map([
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
        ]), c1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function ni(e) {
            return c1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Ku = null;
        function Yu(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var Yr = null, Ir = null;
        function cf(e) {
            var t = Ur(e);
            if (t && (e = t.stateNode)) {
                var n = e[ft] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Hu(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                            for(n = e; n.parentNode;)n = n.parentNode;
                            for(n = n.querySelectorAll('input[name="' + kt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++){
                                var a = n[t];
                                if (a !== e && a.form === e.form) {
                                    var s = a[ft] || null;
                                    if (!s) throw Error(u(90));
                                    Hu(a, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
                                }
                            }
                            for(t = 0; t < n.length; t++)a = n[t], a.form === e.form && rf(a);
                        }
                        break e;
                    case "textarea":
                        lf(e, n.value, n.defaultValue);
                        break e;
                    case "select":
                        t = n.value, t != null && Gr(e, !!n.multiple, t, !1);
                }
            }
        }
        var Iu = !1;
        function ff(e, t, n) {
            if (Iu) return e(t, n);
            Iu = !0;
            try {
                var a = e(t);
                return a;
            } finally{
                if (Iu = !1, (Yr !== null || Ir !== null) && (qi(), Yr && (t = Yr, e = Ir, Ir = Yr = null, cf(t), e))) for(t = 0; t < e.length; t++)cf(e[t]);
            }
        }
        function Ba(e, t) {
            var n = e.stateNode;
            if (n === null) return null;
            var a = n[ft] || null;
            if (a === null) return null;
            n = a[t];
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
                    (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (n && typeof n != "function") throw Error(u(231, t, typeof n));
            return n;
        }
        var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
        if (dn) try {
            var za = {};
            Object.defineProperty(za, "passive", {
                get: function() {
                    Xu = !0;
                }
            }), window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
        } catch  {
            Xu = !1;
        }
        var Pn = null, Zu = null, ri = null;
        function df() {
            if (ri) return ri;
            var e, t = Zu, n = t.length, a, s = "value" in Pn ? Pn.value : Pn.textContent, c = s.length;
            for(e = 0; e < n && t[e] === s[e]; e++);
            var g = n - e;
            for(a = 1; a <= g && t[n - a] === s[c - a]; a++);
            return ri = s.slice(e, 1 < a ? 1 - a : void 0);
        }
        function ai(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function li() {
            return !0;
        }
        function hf() {
            return !1;
        }
        function St(e) {
            function t(n, a, s, c, g) {
                this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = c, this.target = g, this.currentTarget = null;
                for(var v in e)e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(c) : c[v]);
                return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? li : hf, this.isPropagationStopped = hf, this;
            }
            return b(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = li);
                },
                stopPropagation: function() {
                    var n = this.nativeEvent;
                    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = li);
                },
                persist: function() {},
                isPersistent: li
            }), t;
        }
        var fr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, ii = St(fr), Ua = b({}, fr, {
            view: 0,
            detail: 0
        }), f1 = St(Ua), Ju, Fu, qa, ui = b({}, Ua, {
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
            getModifierState: $u,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== qa && (qa && e.type === "mousemove" ? (Ju = e.screenX - qa.screenX, Fu = e.screenY - qa.screenY) : Fu = Ju = 0, qa = e), Ju);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Fu;
            }
        }), pf = St(ui), d1 = b({}, ui, {
            dataTransfer: 0
        }), h1 = St(d1), p1 = b({}, Ua, {
            relatedTarget: 0
        }), Wu = St(p1), g1 = b({}, fr, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), m1 = St(g1), v1 = b({}, fr, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), y1 = St(v1), b1 = b({}, fr, {
            data: 0
        }), gf = St(b1), S1 = {
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
        }, E1 = {
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
        }, O1 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function T1(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = O1[e]) ? !!t[e] : !1;
        }
        function $u() {
            return T1;
        }
        var D1 = b({}, Ua, {
            key: function(e) {
                if (e.key) {
                    var t = S1[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? E1[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: $u,
            charCode: function(e) {
                return e.type === "keypress" ? ai(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), C1 = St(D1), x1 = b({}, ui, {
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
        }), mf = St(x1), R1 = b({}, Ua, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: $u
        }), A1 = St(R1), _1 = b({}, fr, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), w1 = St(_1), M1 = b({}, ui, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), N1 = St(M1), j1 = b({}, fr, {
            newState: 0,
            oldState: 0
        }), P1 = St(j1), L1 = [
            9,
            13,
            27,
            32
        ], es = dn && "CompositionEvent" in window, Ha = null;
        dn && "documentMode" in document && (Ha = document.documentMode);
        var k1 = dn && "TextEvent" in window && !Ha, vf = dn && (!es || Ha && 8 < Ha && 11 >= Ha), yf = " ", bf = !1;
        function Sf(e, t) {
            switch(e){
                case "keyup":
                    return L1.indexOf(t.keyCode) !== -1;
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
        function Ef(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var Xr = !1;
        function V1(e, t) {
            switch(e){
                case "compositionend":
                    return Ef(t);
                case "keypress":
                    return t.which !== 32 ? null : (bf = !0, yf);
                case "textInput":
                    return e = t.data, e === yf && bf ? null : e;
                default:
                    return null;
            }
        }
        function B1(e, t) {
            if (Xr) return e === "compositionend" || !es && Sf(e, t) ? (e = df(), ri = Zu = Pn = null, Xr = !1, e) : null;
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
                    return vf && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var z1 = {
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
        function Of(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!z1[e.type] : t === "textarea";
        }
        function Tf(e, t, n, a) {
            Yr ? Ir ? Ir.push(a) : Ir = [
                a
            ] : Yr = a, t = Ii(t, "onChange"), 0 < t.length && (n = new ii("onChange", "change", null, n, a), e.push({
                event: n,
                listeners: t
            }));
        }
        var Qa = null, Ga = null;
        function U1(e) {
            rp(e, 0);
        }
        function si(e) {
            var t = Va(e);
            if (rf(t)) return e;
        }
        function Df(e, t) {
            if (e === "change") return t;
        }
        var Cf = !1;
        if (dn) {
            var ts;
            if (dn) {
                var ns = "oninput" in document;
                if (!ns) {
                    var xf = document.createElement("div");
                    xf.setAttribute("oninput", "return;"), ns = typeof xf.oninput == "function";
                }
                ts = ns;
            } else ts = !1;
            Cf = ts && (!document.documentMode || 9 < document.documentMode);
        }
        function Rf() {
            Qa && (Qa.detachEvent("onpropertychange", Af), Ga = Qa = null);
        }
        function Af(e) {
            if (e.propertyName === "value" && si(Ga)) {
                var t = [];
                Tf(t, Ga, e, Yu(e)), ff(U1, t);
            }
        }
        function q1(e, t, n) {
            e === "focusin" ? (Rf(), Qa = t, Ga = n, Qa.attachEvent("onpropertychange", Af)) : e === "focusout" && Rf();
        }
        function H1(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return si(Ga);
        }
        function Q1(e, t) {
            if (e === "click") return si(t);
        }
        function G1(e, t) {
            if (e === "input" || e === "change") return si(t);
        }
        function K1(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var Ct = typeof Object.is == "function" ? Object.is : K1;
        function Ka(e, t) {
            if (Ct(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var n = Object.keys(e), a = Object.keys(t);
            if (n.length !== a.length) return !1;
            for(a = 0; a < n.length; a++){
                var s = n[a];
                if (!ct.call(t, s) || !Ct(e[s], t[s])) return !1;
            }
            return !0;
        }
        function _f(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function wf(e, t) {
            var n = _f(e);
            e = 0;
            for(var a; n;){
                if (n.nodeType === 3) {
                    if (a = e + n.textContent.length, e <= t && a >= t) return {
                        node: n,
                        offset: t - e
                    };
                    e = a;
                }
                e: {
                    for(; n;){
                        if (n.nextSibling) {
                            n = n.nextSibling;
                            break e;
                        }
                        n = n.parentNode;
                    }
                    n = void 0;
                }
                n = _f(n);
            }
        }
        function Mf(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function Nf(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = ti(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var n = typeof t.contentWindow.location.href == "string";
                } catch  {
                    n = !1;
                }
                if (n) e = t.contentWindow;
                else break;
                t = ti(e.document);
            }
            return t;
        }
        function rs(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var Y1 = dn && "documentMode" in document && 11 >= document.documentMode, Zr = null, as = null, Ya = null, ls = !1;
        function jf(e, t, n) {
            var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
            ls || Zr == null || Zr !== ti(a) || (a = Zr, "selectionStart" in a && rs(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset
            }), Ya && Ka(Ya, a) || (Ya = a, a = Ii(as, "onSelect"), 0 < a.length && (t = new ii("onSelect", "select", null, t, n), e.push({
                event: t,
                listeners: a
            }), t.target = Zr)));
        }
        function dr(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }
        var Jr = {
            animationend: dr("Animation", "AnimationEnd"),
            animationiteration: dr("Animation", "AnimationIteration"),
            animationstart: dr("Animation", "AnimationStart"),
            transitionrun: dr("Transition", "TransitionRun"),
            transitionstart: dr("Transition", "TransitionStart"),
            transitioncancel: dr("Transition", "TransitionCancel"),
            transitionend: dr("Transition", "TransitionEnd")
        }, is = {}, Pf = {};
        dn && (Pf = document.createElement("div").style, "AnimationEvent" in window || (delete Jr.animationend.animation, delete Jr.animationiteration.animation, delete Jr.animationstart.animation), "TransitionEvent" in window || delete Jr.transitionend.transition);
        function hr(e) {
            if (is[e]) return is[e];
            if (!Jr[e]) return e;
            var t = Jr[e], n;
            for(n in t)if (t.hasOwnProperty(n) && n in Pf) return is[e] = t[n];
            return e;
        }
        var Lf = hr("animationend"), kf = hr("animationiteration"), Vf = hr("animationstart"), I1 = hr("transitionrun"), X1 = hr("transitionstart"), Z1 = hr("transitioncancel"), Bf = hr("transitionend"), zf = new Map, us = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        us.push("scrollEnd");
        function Xt(e, t) {
            zf.set(e, t), cr(t, [
                e
            ]);
        }
        var Uf = new WeakMap;
        function Vt(e, t) {
            if (typeof e == "object" && e !== null) {
                var n = Uf.get(e);
                return n !== void 0 ? n : (t = {
                    value: e,
                    source: t,
                    stack: tf(t)
                }, Uf.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: tf(t)
            };
        }
        var Bt = [], Fr = 0, ss = 0;
        function oi() {
            for(var e = Fr, t = ss = Fr = 0; t < e;){
                var n = Bt[t];
                Bt[t++] = null;
                var a = Bt[t];
                Bt[t++] = null;
                var s = Bt[t];
                Bt[t++] = null;
                var c = Bt[t];
                if (Bt[t++] = null, a !== null && s !== null) {
                    var g = a.pending;
                    g === null ? s.next = s : (s.next = g.next, g.next = s), a.pending = s;
                }
                c !== 0 && qf(n, s, c);
            }
        }
        function ci(e, t, n, a) {
            Bt[Fr++] = e, Bt[Fr++] = t, Bt[Fr++] = n, Bt[Fr++] = a, ss |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function os(e, t, n, a) {
            return ci(e, t, n, a), fi(e);
        }
        function Wr(e, t) {
            return ci(e, null, null, t), fi(e);
        }
        function qf(e, t, n) {
            e.lanes |= n;
            var a = e.alternate;
            a !== null && (a.lanes |= n);
            for(var s = !1, c = e.return; c !== null;)c.childLanes |= n, a = c.alternate, a !== null && (a.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (s = !0)), e = c, c = c.return;
            return e.tag === 3 ? (c = e.stateNode, s && t !== null && (s = 31 - vt(n), e = c.hiddenUpdates, a = e[s], a === null ? e[s] = [
                t
            ] : a.push(t), t.lane = n | 536870912), c) : null;
        }
        function fi(e) {
            if (50 < vl) throw vl = 0, mo = null, Error(u(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var $r = {};
        function J1(e, t, n, a) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function xt(e, t, n, a) {
            return new J1(e, t, n, a);
        }
        function cs(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function hn(e, t) {
            var n = e.alternate;
            return n === null ? (n = xt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
        }
        function Hf(e, t) {
            e.flags &= 65011714;
            var n = e.alternate;
            return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function di(e, t, n, a, s, c) {
            var g = 0;
            if (a = e, typeof e == "function") cs(e) && (g = 1);
            else if (typeof e == "string") g = Wm(e, n, J.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ae:
                    return e = xt(31, n, t, s), e.elementType = ae, e.lanes = c, e;
                case T:
                    return pr(n.children, s, c, t);
                case R:
                    g = 8, s |= 24;
                    break;
                case M:
                    return e = xt(12, n, t, s | 2), e.elementType = M, e.lanes = c, e;
                case G:
                    return e = xt(13, n, t, s), e.elementType = G, e.lanes = c, e;
                case Y:
                    return e = xt(19, n, t, s), e.elementType = Y, e.lanes = c, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case w:
                        case V:
                            g = 10;
                            break e;
                        case k:
                            g = 9;
                            break e;
                        case Q:
                            g = 11;
                            break e;
                        case le:
                            g = 14;
                            break e;
                        case se:
                            g = 16, a = null;
                            break e;
                    }
                    g = 29, n = Error(u(130, e === null ? "null" : typeof e, "")), a = null;
            }
            return t = xt(g, n, t, s), t.elementType = e, t.type = a, t.lanes = c, t;
        }
        function pr(e, t, n, a) {
            return e = xt(7, e, a, t), e.lanes = n, e;
        }
        function fs(e, t, n) {
            return e = xt(6, e, null, t), e.lanes = n, e;
        }
        function ds(e, t, n) {
            return t = xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var ea = [], ta = 0, hi = null, pi = 0, zt = [], Ut = 0, gr = null, pn = 1, gn = "";
        function mr(e, t) {
            ea[ta++] = pi, ea[ta++] = hi, hi = e, pi = t;
        }
        function Qf(e, t, n) {
            zt[Ut++] = pn, zt[Ut++] = gn, zt[Ut++] = gr, gr = e;
            var a = pn;
            e = gn;
            var s = 32 - vt(a) - 1;
            a &= ~(1 << s), n += 1;
            var c = 32 - vt(t) + s;
            if (30 < c) {
                var g = s - s % 5;
                c = (a & (1 << g) - 1).toString(32), a >>= g, s -= g, pn = 1 << 32 - vt(t) + s | n << s | a, gn = c + e;
            } else pn = 1 << c | n << s | a, gn = e;
        }
        function hs(e) {
            e.return !== null && (mr(e, 1), Qf(e, 1, 0));
        }
        function ps(e) {
            for(; e === hi;)hi = ea[--ta], ea[ta] = null, pi = ea[--ta], ea[ta] = null;
            for(; e === gr;)gr = zt[--Ut], zt[Ut] = null, gn = zt[--Ut], zt[Ut] = null, pn = zt[--Ut], zt[Ut] = null;
        }
        var yt = null, ke = null, Oe = !1, vr = null, en = !1, gs = Error(u(519));
        function yr(e) {
            var t = Error(u(418, ""));
            throw Za(Vt(t, e)), gs;
        }
        function Gf(e) {
            var t = e.stateNode, n = e.type, a = e.memoizedProps;
            switch(t[Fe] = e, t[ft] = a, n){
                case "dialog":
                    pe("cancel", t), pe("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    pe("load", t);
                    break;
                case "video":
                case "audio":
                    for(n = 0; n < bl.length; n++)pe(bl[n], t);
                    break;
                case "source":
                    pe("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    pe("error", t), pe("load", t);
                    break;
                case "details":
                    pe("toggle", t);
                    break;
                case "input":
                    pe("invalid", t), af(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), ei(t);
                    break;
                case "select":
                    pe("invalid", t);
                    break;
                case "textarea":
                    pe("invalid", t), uf(t, a.value, a.defaultValue, a.children), ei(t);
            }
            n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || up(t.textContent, n) ? (a.popover != null && (pe("beforetoggle", t), pe("toggle", t)), a.onScroll != null && pe("scroll", t), a.onScrollEnd != null && pe("scrollend", t), a.onClick != null && (t.onclick = Xi), t = !0) : t = !1, t || yr(e);
        }
        function Kf(e) {
            for(yt = e.return; yt;)switch(yt.tag){
                case 5:
                case 13:
                    en = !1;
                    return;
                case 27:
                case 3:
                    en = !0;
                    return;
                default:
                    yt = yt.return;
            }
        }
        function Ia(e) {
            if (e !== yt) return !1;
            if (!Oe) return Kf(e), Oe = !0, !1;
            var t = e.tag, n;
            if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || No(e.type, e.memoizedProps)), n = !n), n && ke && yr(e), Kf(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (n = e.data, n === "/$") {
                            if (t === 0) {
                                ke = Jt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    ke = null;
                }
            } else t === 27 ? (t = ke, Jn(e.type) ? (e = ko, ko = null, ke = e) : ke = t) : ke = yt ? Jt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Xa() {
            ke = yt = null, Oe = !1;
        }
        function Yf() {
            var e = vr;
            return e !== null && (Tt === null ? Tt = e : Tt.push.apply(Tt, e), vr = null), e;
        }
        function Za(e) {
            vr === null ? vr = [
                e
            ] : vr.push(e);
        }
        var ms = H(null), br = null, mn = null;
        function Ln(e, t, n) {
            I(ms, t._currentValue), t._currentValue = n;
        }
        function vn(e) {
            e._currentValue = ms.current, X(ms);
        }
        function vs(e, t, n) {
            for(; e !== null;){
                var a = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
                e = e.return;
            }
        }
        function ys(e, t, n, a) {
            var s = e.child;
            for(s !== null && (s.return = e); s !== null;){
                var c = s.dependencies;
                if (c !== null) {
                    var g = s.child;
                    c = c.firstContext;
                    e: for(; c !== null;){
                        var v = c;
                        c = s;
                        for(var C = 0; C < t.length; C++)if (v.context === t[C]) {
                            c.lanes |= n, v = c.alternate, v !== null && (v.lanes |= n), vs(c.return, n, e), a || (g = null);
                            break e;
                        }
                        c = v.next;
                    }
                } else if (s.tag === 18) {
                    if (g = s.return, g === null) throw Error(u(341));
                    g.lanes |= n, c = g.alternate, c !== null && (c.lanes |= n), vs(g, n, e), g = null;
                } else g = s.child;
                if (g !== null) g.return = s;
                else for(g = s; g !== null;){
                    if (g === e) {
                        g = null;
                        break;
                    }
                    if (s = g.sibling, s !== null) {
                        s.return = g.return, g = s;
                        break;
                    }
                    g = g.return;
                }
                s = g;
            }
        }
        function Ja(e, t, n, a) {
            e = null;
            for(var s = t, c = !1; s !== null;){
                if (!c) {
                    if ((s.flags & 524288) !== 0) c = !0;
                    else if ((s.flags & 262144) !== 0) break;
                }
                if (s.tag === 10) {
                    var g = s.alternate;
                    if (g === null) throw Error(u(387));
                    if (g = g.memoizedProps, g !== null) {
                        var v = s.type;
                        Ct(s.pendingProps.value, g.value) || (e !== null ? e.push(v) : e = [
                            v
                        ]);
                    }
                } else if (s === ne.current) {
                    if (g = s.alternate, g === null) throw Error(u(387));
                    g.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Cl) : e = [
                        Cl
                    ]);
                }
                s = s.return;
            }
            e !== null && ys(t, e, n, a), t.flags |= 262144;
        }
        function gi(e) {
            for(e = e.firstContext; e !== null;){
                if (!Ct(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function Sr(e) {
            br = e, mn = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function dt(e) {
            return If(br, e);
        }
        function mi(e, t) {
            return br === null && Sr(e), If(e, t);
        }
        function If(e, t) {
            var n = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, mn === null) {
                if (e === null) throw Error(u(308));
                mn = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else mn = mn.next = t;
            return n;
        }
        var F1 = typeof AbortController < "u" ? AbortController : function() {
            var e = [], t = this.signal = {
                aborted: !1,
                addEventListener: function(n, a) {
                    e.push(a);
                }
            };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(n) {
                    return n();
                });
            };
        }, W1 = l.unstable_scheduleCallback, $1 = l.unstable_NormalPriority, Ye = {
            $$typeof: V,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function bs() {
            return {
                controller: new F1,
                data: new Map,
                refCount: 0
            };
        }
        function Fa(e) {
            e.refCount--, e.refCount === 0 && W1($1, function() {
                e.controller.abort();
            });
        }
        var Wa = null, Ss = 0, na = 0, ra = null;
        function em(e, t) {
            if (Wa === null) {
                var n = Wa = [];
                Ss = 0, na = To(), ra = {
                    status: "pending",
                    value: void 0,
                    then: function(a) {
                        n.push(a);
                    }
                };
            }
            return Ss++, t.then(Xf, Xf), t;
        }
        function Xf() {
            if (--Ss === 0 && Wa !== null) {
                ra !== null && (ra.status = "fulfilled");
                var e = Wa;
                Wa = null, na = 0, ra = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function tm(e, t) {
            var n = [], a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(s) {
                    n.push(s);
                }
            };
            return e.then(function() {
                a.status = "fulfilled", a.value = t;
                for(var s = 0; s < n.length; s++)(0, n[s])(t);
            }, function(s) {
                for(a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)(0, n[s])(void 0);
            }), a;
        }
        var Zf = B.S;
        B.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && em(e, t), Zf !== null && Zf(e, t);
        };
        var Er = H(null);
        function Es() {
            var e = Er.current;
            return e !== null ? e : Me.pooledCache;
        }
        function vi(e, t) {
            t === null ? I(Er, Er.current) : I(Er, t.pool);
        }
        function Jf() {
            var e = Es();
            return e === null ? null : {
                parent: Ye._currentValue,
                pool: e
            };
        }
        var $a = Error(u(460)), Ff = Error(u(474)), yi = Error(u(542)), Os = {
            then: function() {}
        };
        function Wf(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function bi() {}
        function $f(e, t, n) {
            switch(n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(bi, bi), t = n), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, td(e), e;
                default:
                    if (typeof t.status == "string") t.then(bi, bi);
                    else {
                        if (e = Me, e !== null && 100 < e.shellSuspendCounter) throw Error(u(482));
                        e = t, e.status = "pending", e.then(function(a) {
                            if (t.status === "pending") {
                                var s = t;
                                s.status = "fulfilled", s.value = a;
                            }
                        }, function(a) {
                            if (t.status === "pending") {
                                var s = t;
                                s.status = "rejected", s.reason = a;
                            }
                        });
                    }
                    switch(t.status){
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw e = t.reason, td(e), e;
                    }
                    throw el = t, $a;
            }
        }
        var el = null;
        function ed() {
            if (el === null) throw Error(u(459));
            var e = el;
            return el = null, e;
        }
        function td(e) {
            if (e === $a || e === yi) throw Error(u(483));
        }
        var kn = !1;
        function Ts(e) {
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
        function Ds(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function Vn(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function Bn(e, t, n) {
            var a = e.updateQueue;
            if (a === null) return null;
            if (a = a.shared, (Te & 2) !== 0) {
                var s = a.pending;
                return s === null ? t.next = t : (t.next = s.next, s.next = t), a.pending = t, t = fi(e), qf(e, null, n), t;
            }
            return ci(e, a, t, n), fi(e);
        }
        function tl(e, t, n) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
                var a = t.lanes;
                a &= e.pendingLanes, n |= a, t.lanes = n, Vr(e, n);
            }
        }
        function Cs(e, t) {
            var n = e.updateQueue, a = e.alternate;
            if (a !== null && (a = a.updateQueue, n === a)) {
                var s = null, c = null;
                if (n = n.firstBaseUpdate, n !== null) {
                    do {
                        var g = {
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: null,
                            next: null
                        };
                        c === null ? s = c = g : c = c.next = g, n = n.next;
                    }while (n !== null);
                    c === null ? s = c = t : c = c.next = t;
                } else s = c = t;
                n = {
                    baseState: a.baseState,
                    firstBaseUpdate: s,
                    lastBaseUpdate: c,
                    shared: a.shared,
                    callbacks: a.callbacks
                }, e.updateQueue = n;
                return;
            }
            e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
        }
        var xs = !1;
        function nl() {
            if (xs) {
                var e = ra;
                if (e !== null) throw e;
            }
        }
        function rl(e, t, n, a) {
            xs = !1;
            var s = e.updateQueue;
            kn = !1;
            var c = s.firstBaseUpdate, g = s.lastBaseUpdate, v = s.shared.pending;
            if (v !== null) {
                s.shared.pending = null;
                var C = v, j = C.next;
                C.next = null, g === null ? c = j : g.next = j, g = C;
                var z = e.alternate;
                z !== null && (z = z.updateQueue, v = z.lastBaseUpdate, v !== g && (v === null ? z.firstBaseUpdate = j : v.next = j, z.lastBaseUpdate = C));
            }
            if (c !== null) {
                var q = s.baseState;
                g = 0, z = j = C = null, v = c;
                do {
                    var P = v.lane & -536870913, L = P !== v.lane;
                    if (L ? (ve & P) === P : (a & P) === P) {
                        P !== 0 && P === na && (xs = !0), z !== null && (z = z.next = {
                            lane: 0,
                            tag: v.tag,
                            payload: v.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var re = e, $ = v;
                            P = t;
                            var Re = n;
                            switch($.tag){
                                case 1:
                                    if (re = $.payload, typeof re == "function") {
                                        q = re.call(Re, q, P);
                                        break e;
                                    }
                                    q = re;
                                    break e;
                                case 3:
                                    re.flags = re.flags & -65537 | 128;
                                case 0:
                                    if (re = $.payload, P = typeof re == "function" ? re.call(Re, q, P) : re, P == null) break e;
                                    q = b({}, q, P);
                                    break e;
                                case 2:
                                    kn = !0;
                            }
                        }
                        P = v.callback, P !== null && (e.flags |= 64, L && (e.flags |= 8192), L = s.callbacks, L === null ? s.callbacks = [
                            P
                        ] : L.push(P));
                    } else L = {
                        lane: P,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    }, z === null ? (j = z = L, C = q) : z = z.next = L, g |= P;
                    if (v = v.next, v === null) {
                        if (v = s.shared.pending, v === null) break;
                        L = v, v = L.next, L.next = null, s.lastBaseUpdate = L, s.shared.pending = null;
                    }
                }while (!0);
                z === null && (C = q), s.baseState = C, s.firstBaseUpdate = j, s.lastBaseUpdate = z, c === null && (s.shared.lanes = 0), Yn |= g, e.lanes = g, e.memoizedState = q;
            }
        }
        function nd(e, t) {
            if (typeof e != "function") throw Error(u(191, e));
            e.call(t);
        }
        function rd(e, t) {
            var n = e.callbacks;
            if (n !== null) for(e.callbacks = null, e = 0; e < n.length; e++)nd(n[e], t);
        }
        var aa = H(null), Si = H(0);
        function ad(e, t) {
            e = Dn, I(Si, e), I(aa, t), Dn = e | t.baseLanes;
        }
        function Rs() {
            I(Si, Dn), I(aa, aa.current);
        }
        function As() {
            Dn = Si.current, X(aa), X(Si);
        }
        var zn = 0, fe = null, Ce = null, qe = null, Ei = !1, la = !1, Or = !1, Oi = 0, al = 0, ia = null, nm = 0;
        function Be() {
            throw Error(u(321));
        }
        function _s(e, t) {
            if (t === null) return !1;
            for(var n = 0; n < t.length && n < e.length; n++)if (!Ct(e[n], t[n])) return !1;
            return !0;
        }
        function ws(e, t, n, a, s, c) {
            return zn = c, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? qd : Hd, Or = !1, c = n(a, s), Or = !1, la && (c = id(t, n, a, s)), ld(e), c;
        }
        function ld(e) {
            B.H = Ai;
            var t = Ce !== null && Ce.next !== null;
            if (zn = 0, qe = Ce = fe = null, Ei = !1, al = 0, ia = null, t) throw Error(u(300));
            e === null || $e || (e = e.dependencies, e !== null && gi(e) && ($e = !0));
        }
        function id(e, t, n, a) {
            fe = e;
            var s = 0;
            do {
                if (la && (ia = null), al = 0, la = !1, 25 <= s) throw Error(u(301));
                if (s += 1, qe = Ce = null, e.updateQueue != null) {
                    var c = e.updateQueue;
                    c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
                }
                B.H = om, c = t(n, a);
            }while (la);
            return c;
        }
        function rm() {
            var e = B.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? ll(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (fe.flags |= 1024), t;
        }
        function Ms() {
            var e = Oi !== 0;
            return Oi = 0, e;
        }
        function Ns(e, t, n) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function js(e) {
            if (Ei) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                Ei = !1;
            }
            zn = 0, qe = Ce = fe = null, la = !1, al = Oi = 0, ia = null;
        }
        function Et() {
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
            if (Ce === null) {
                var e = fe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Ce.next;
            var t = qe === null ? fe.memoizedState : qe.next;
            if (t !== null) qe = t, Ce = e;
            else {
                if (e === null) throw fe.alternate === null ? Error(u(467)) : Error(u(310));
                Ce = e, e = {
                    memoizedState: Ce.memoizedState,
                    baseState: Ce.baseState,
                    baseQueue: Ce.baseQueue,
                    queue: Ce.queue,
                    next: null
                }, qe === null ? fe.memoizedState = qe = e : qe = qe.next = e;
            }
            return qe;
        }
        function Ps() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function ll(e) {
            var t = al;
            return al += 1, ia === null && (ia = []), e = $f(ia, e, t), t = fe, (qe === null ? t.memoizedState : qe.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? qd : Hd), e;
        }
        function Ti(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return ll(e);
                if (e.$$typeof === V) return dt(e);
            }
            throw Error(u(438, String(e)));
        }
        function Ls(e) {
            var t = null, n = fe.updateQueue;
            if (n !== null && (t = n.memoCache), t == null) {
                var a = fe.alternate;
                a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                    data: a.data.map(function(s) {
                        return s.slice();
                    }),
                    index: 0
                })));
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }), n === null && (n = Ps(), fe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for(n = t.data[t.index] = Array(e), a = 0; a < e; a++)n[a] = Le;
            return t.index++, n;
        }
        function yn(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Di(e) {
            var t = He();
            return ks(t, Ce, e);
        }
        function ks(e, t, n) {
            var a = e.queue;
            if (a === null) throw Error(u(311));
            a.lastRenderedReducer = n;
            var s = e.baseQueue, c = a.pending;
            if (c !== null) {
                if (s !== null) {
                    var g = s.next;
                    s.next = c.next, c.next = g;
                }
                t.baseQueue = s = c, a.pending = null;
            }
            if (c = e.baseState, s === null) e.memoizedState = c;
            else {
                t = s.next;
                var v = g = null, C = null, j = t, z = !1;
                do {
                    var q = j.lane & -536870913;
                    if (q !== j.lane ? (ve & q) === q : (zn & q) === q) {
                        var P = j.revertLane;
                        if (P === 0) C !== null && (C = C.next = {
                            lane: 0,
                            revertLane: 0,
                            action: j.action,
                            hasEagerState: j.hasEagerState,
                            eagerState: j.eagerState,
                            next: null
                        }), q === na && (z = !0);
                        else if ((zn & P) === P) {
                            j = j.next, P === na && (z = !0);
                            continue;
                        } else q = {
                            lane: 0,
                            revertLane: j.revertLane,
                            action: j.action,
                            hasEagerState: j.hasEagerState,
                            eagerState: j.eagerState,
                            next: null
                        }, C === null ? (v = C = q, g = c) : C = C.next = q, fe.lanes |= P, Yn |= P;
                        q = j.action, Or && n(c, q), c = j.hasEagerState ? j.eagerState : n(c, q);
                    } else P = {
                        lane: q,
                        revertLane: j.revertLane,
                        action: j.action,
                        hasEagerState: j.hasEagerState,
                        eagerState: j.eagerState,
                        next: null
                    }, C === null ? (v = C = P, g = c) : C = C.next = P, fe.lanes |= q, Yn |= q;
                    j = j.next;
                }while (j !== null && j !== t);
                if (C === null ? g = c : C.next = v, !Ct(c, e.memoizedState) && ($e = !0, z && (n = ra, n !== null))) throw n;
                e.memoizedState = c, e.baseState = g, e.baseQueue = C, a.lastRenderedState = c;
            }
            return s === null && (a.lanes = 0), [
                e.memoizedState,
                a.dispatch
            ];
        }
        function Vs(e) {
            var t = He(), n = t.queue;
            if (n === null) throw Error(u(311));
            n.lastRenderedReducer = e;
            var a = n.dispatch, s = n.pending, c = t.memoizedState;
            if (s !== null) {
                n.pending = null;
                var g = s = s.next;
                do c = e(c, g.action), g = g.next;
                while (g !== s);
                Ct(c, t.memoizedState) || ($e = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
            }
            return [
                c,
                a
            ];
        }
        function ud(e, t, n) {
            var a = fe, s = He(), c = Oe;
            if (c) {
                if (n === void 0) throw Error(u(407));
                n = n();
            } else n = t();
            var g = !Ct((Ce || s).memoizedState, n);
            g && (s.memoizedState = n, $e = !0), s = s.queue;
            var v = cd.bind(null, a, s, e);
            if (il(2048, 8, v, [
                e
            ]), s.getSnapshot !== t || g || qe !== null && qe.memoizedState.tag & 1) {
                if (a.flags |= 2048, ua(9, Ci(), od.bind(null, a, s, n, t), null), Me === null) throw Error(u(349));
                c || (zn & 124) !== 0 || sd(a, t, n);
            }
            return n;
        }
        function sd(e, t, n) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: n
            }, t = fe.updateQueue, t === null ? (t = Ps(), fe.updateQueue = t, t.stores = [
                e
            ]) : (n = t.stores, n === null ? t.stores = [
                e
            ] : n.push(e));
        }
        function od(e, t, n, a) {
            t.value = n, t.getSnapshot = a, fd(t) && dd(e);
        }
        function cd(e, t, n) {
            return n(function() {
                fd(t) && dd(e);
            });
        }
        function fd(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !Ct(e, n);
            } catch  {
                return !0;
            }
        }
        function dd(e) {
            var t = Wr(e, 2);
            t !== null && Mt(t, e, 2);
        }
        function Bs(e) {
            var t = Et();
            if (typeof e == "function") {
                var n = e;
                if (e = n(), Or) {
                    Wt(!0);
                    try {
                        n();
                    } finally{
                        Wt(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: yn,
                lastRenderedState: e
            }, t;
        }
        function hd(e, t, n, a) {
            return e.baseState = n, ks(e, Ce, typeof a == "function" ? a : yn);
        }
        function am(e, t, n, a, s) {
            if (Ri(e)) throw Error(u(485));
            if (e = t.action, e !== null) {
                var c = {
                    payload: s,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(g) {
                        c.listeners.push(g);
                    }
                };
                B.T !== null ? n(!0) : c.isTransition = !1, a(c), n = t.pending, n === null ? (c.next = t.pending = c, pd(t, c)) : (c.next = n.next, t.pending = n.next = c);
            }
        }
        function pd(e, t) {
            var n = t.action, a = t.payload, s = e.state;
            if (t.isTransition) {
                var c = B.T, g = {};
                B.T = g;
                try {
                    var v = n(s, a), C = B.S;
                    C !== null && C(g, v), gd(e, t, v);
                } catch (j) {
                    zs(e, t, j);
                } finally{
                    B.T = c;
                }
            } else try {
                c = n(s, a), gd(e, t, c);
            } catch (j) {
                zs(e, t, j);
            }
        }
        function gd(e, t, n) {
            n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
                md(e, t, a);
            }, function(a) {
                return zs(e, t, a);
            }) : md(e, t, n);
        }
        function md(e, t, n) {
            t.status = "fulfilled", t.value = n, vd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, pd(e, n)));
        }
        function zs(e, t, n) {
            var a = e.pending;
            if (e.pending = null, a !== null) {
                a = a.next;
                do t.status = "rejected", t.reason = n, vd(t), t = t.next;
                while (t !== a);
            }
            e.action = null;
        }
        function vd(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function yd(e, t) {
            return t;
        }
        function bd(e, t) {
            if (Oe) {
                var n = Me.formState;
                if (n !== null) {
                    e: {
                        var a = fe;
                        if (Oe) {
                            if (ke) {
                                t: {
                                    for(var s = ke, c = en; s.nodeType !== 8;){
                                        if (!c) {
                                            s = null;
                                            break t;
                                        }
                                        if (s = Jt(s.nextSibling), s === null) {
                                            s = null;
                                            break t;
                                        }
                                    }
                                    c = s.data, s = c === "F!" || c === "F" ? s : null;
                                }
                                if (s) {
                                    ke = Jt(s.nextSibling), a = s.data === "F!";
                                    break e;
                                }
                            }
                            yr(a);
                        }
                        a = !1;
                    }
                    a && (t = n[0]);
                }
            }
            return n = Et(), n.memoizedState = n.baseState = t, a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: yd,
                lastRenderedState: t
            }, n.queue = a, n = Bd.bind(null, fe, a), a.dispatch = n, a = Bs(!1), c = Gs.bind(null, fe, !1, a.queue), a = Et(), s = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, a.queue = s, n = am.bind(null, fe, s, c, n), s.dispatch = n, a.memoizedState = e, [
                t,
                n,
                !1
            ];
        }
        function Sd(e) {
            var t = He();
            return Ed(t, Ce, e);
        }
        function Ed(e, t, n) {
            if (t = ks(e, t, yd)[0], e = Di(yn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var a = ll(t);
            } catch (g) {
                throw g === $a ? yi : g;
            }
            else a = t;
            t = He();
            var s = t.queue, c = s.dispatch;
            return n !== t.memoizedState && (fe.flags |= 2048, ua(9, Ci(), lm.bind(null, s, n), null)), [
                a,
                c,
                e
            ];
        }
        function lm(e, t) {
            e.action = t;
        }
        function Od(e) {
            var t = He(), n = Ce;
            if (n !== null) return Ed(t, n, e);
            He(), t = t.memoizedState, n = He();
            var a = n.queue.dispatch;
            return n.memoizedState = e, [
                t,
                a,
                !1
            ];
        }
        function ua(e, t, n, a) {
            return e = {
                tag: e,
                create: n,
                deps: a,
                inst: t,
                next: null
            }, t = fe.updateQueue, t === null && (t = Ps(), fe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function Ci() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function Td() {
            return He().memoizedState;
        }
        function xi(e, t, n, a) {
            var s = Et();
            a = a === void 0 ? null : a, fe.flags |= e, s.memoizedState = ua(1 | t, Ci(), n, a);
        }
        function il(e, t, n, a) {
            var s = He();
            a = a === void 0 ? null : a;
            var c = s.memoizedState.inst;
            Ce !== null && a !== null && _s(a, Ce.memoizedState.deps) ? s.memoizedState = ua(t, c, n, a) : (fe.flags |= e, s.memoizedState = ua(1 | t, c, n, a));
        }
        function Dd(e, t) {
            xi(8390656, 8, e, t);
        }
        function Cd(e, t) {
            il(2048, 8, e, t);
        }
        function xd(e, t) {
            return il(4, 2, e, t);
        }
        function Rd(e, t) {
            return il(4, 4, e, t);
        }
        function Ad(e, t) {
            if (typeof t == "function") {
                e = e();
                var n = t(e);
                return function() {
                    typeof n == "function" ? n() : t(null);
                };
            }
            if (t != null) return e = e(), t.current = e, function() {
                t.current = null;
            };
        }
        function _d(e, t, n) {
            n = n != null ? n.concat([
                e
            ]) : null, il(4, 4, Ad.bind(null, t, e), n);
        }
        function Us() {}
        function wd(e, t) {
            var n = He();
            t = t === void 0 ? null : t;
            var a = n.memoizedState;
            return t !== null && _s(t, a[1]) ? a[0] : (n.memoizedState = [
                e,
                t
            ], e);
        }
        function Md(e, t) {
            var n = He();
            t = t === void 0 ? null : t;
            var a = n.memoizedState;
            if (t !== null && _s(t, a[1])) return a[0];
            if (a = e(), Or) {
                Wt(!0);
                try {
                    e();
                } finally{
                    Wt(!1);
                }
            }
            return n.memoizedState = [
                a,
                t
            ], a;
        }
        function qs(e, t, n) {
            return n === void 0 || (zn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ph(), fe.lanes |= e, Yn |= e, n);
        }
        function Nd(e, t, n, a) {
            return Ct(n, t) ? n : aa.current !== null ? (e = qs(e, n, a), Ct(e, t) || ($e = !0), e) : (zn & 42) === 0 ? ($e = !0, e.memoizedState = n) : (e = Ph(), fe.lanes |= e, Yn |= e, t);
        }
        function jd(e, t, n, a, s) {
            var c = K.p;
            K.p = c !== 0 && 8 > c ? c : 8;
            var g = B.T, v = {};
            B.T = v, Gs(e, !1, t, n);
            try {
                var C = s(), j = B.S;
                if (j !== null && j(v, C), C !== null && typeof C == "object" && typeof C.then == "function") {
                    var z = tm(C, a);
                    ul(e, t, z, wt(e));
                } else ul(e, t, a, wt(e));
            } catch (q) {
                ul(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: q
                }, wt());
            } finally{
                K.p = c, B.T = g;
            }
        }
        function im() {}
        function Hs(e, t, n, a) {
            if (e.tag !== 5) throw Error(u(476));
            var s = Pd(e).queue;
            jd(e, s, t, W, n === null ? im : function() {
                return Ld(e), n(a);
            });
        }
        function Pd(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: W,
                baseState: W,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: yn,
                    lastRenderedState: W
                },
                next: null
            };
            var n = {};
            return t.next = {
                memoizedState: n,
                baseState: n,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: yn,
                    lastRenderedState: n
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Ld(e) {
            var t = Pd(e).next.queue;
            ul(e, t, {}, wt());
        }
        function Qs() {
            return dt(Cl);
        }
        function kd() {
            return He().memoizedState;
        }
        function Vd() {
            return He().memoizedState;
        }
        function um(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var n = wt();
                        e = Vn(n);
                        var a = Bn(t, e, n);
                        a !== null && (Mt(a, t, n), tl(a, t, n)), t = {
                            cache: bs()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function sm(e, t, n) {
            var a = wt();
            n = {
                lane: a,
                revertLane: 0,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ri(e) ? zd(t, n) : (n = os(e, t, n, a), n !== null && (Mt(n, e, a), Ud(n, t, a)));
        }
        function Bd(e, t, n) {
            var a = wt();
            ul(e, t, n, a);
        }
        function ul(e, t, n, a) {
            var s = {
                lane: a,
                revertLane: 0,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Ri(e)) zd(t, s);
            else {
                var c = e.alternate;
                if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                    var g = t.lastRenderedState, v = c(g, n);
                    if (s.hasEagerState = !0, s.eagerState = v, Ct(v, g)) return ci(e, t, s, 0), Me === null && oi(), !1;
                } catch  {} finally{}
                if (n = os(e, t, s, a), n !== null) return Mt(n, e, a), Ud(n, t, a), !0;
            }
            return !1;
        }
        function Gs(e, t, n, a) {
            if (a = {
                lane: 2,
                revertLane: To(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ri(e)) {
                if (t) throw Error(u(479));
            } else t = os(e, n, a, 2), t !== null && Mt(t, e, 2);
        }
        function Ri(e) {
            var t = e.alternate;
            return e === fe || t !== null && t === fe;
        }
        function zd(e, t) {
            la = Ei = !0;
            var n = e.pending;
            n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        }
        function Ud(e, t, n) {
            if ((n & 4194048) !== 0) {
                var a = t.lanes;
                a &= e.pendingLanes, n |= a, t.lanes = n, Vr(e, n);
            }
        }
        var Ai = {
            readContext: dt,
            use: Ti,
            useCallback: Be,
            useContext: Be,
            useEffect: Be,
            useImperativeHandle: Be,
            useLayoutEffect: Be,
            useInsertionEffect: Be,
            useMemo: Be,
            useReducer: Be,
            useRef: Be,
            useState: Be,
            useDebugValue: Be,
            useDeferredValue: Be,
            useTransition: Be,
            useSyncExternalStore: Be,
            useId: Be,
            useHostTransitionStatus: Be,
            useFormState: Be,
            useActionState: Be,
            useOptimistic: Be,
            useMemoCache: Be,
            useCacheRefresh: Be
        }, qd = {
            readContext: dt,
            use: Ti,
            useCallback: function(e, t) {
                return Et().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: dt,
            useEffect: Dd,
            useImperativeHandle: function(e, t, n) {
                n = n != null ? n.concat([
                    e
                ]) : null, xi(4194308, 4, Ad.bind(null, t, e), n);
            },
            useLayoutEffect: function(e, t) {
                return xi(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                xi(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var n = Et();
                t = t === void 0 ? null : t;
                var a = e();
                if (Or) {
                    Wt(!0);
                    try {
                        e();
                    } finally{
                        Wt(!1);
                    }
                }
                return n.memoizedState = [
                    a,
                    t
                ], a;
            },
            useReducer: function(e, t, n) {
                var a = Et();
                if (n !== void 0) {
                    var s = n(t);
                    if (Or) {
                        Wt(!0);
                        try {
                            n(t);
                        } finally{
                            Wt(!1);
                        }
                    }
                } else s = t;
                return a.memoizedState = a.baseState = s, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: s
                }, a.queue = e, e = e.dispatch = sm.bind(null, fe, e), [
                    a.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = Et();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = Bs(e);
                var t = e.queue, n = Bd.bind(null, fe, t);
                return t.dispatch = n, [
                    e.memoizedState,
                    n
                ];
            },
            useDebugValue: Us,
            useDeferredValue: function(e, t) {
                var n = Et();
                return qs(n, e, t);
            },
            useTransition: function() {
                var e = Bs(!1);
                return e = jd.bind(null, fe, e.queue, !0, !1), Et().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, n) {
                var a = fe, s = Et();
                if (Oe) {
                    if (n === void 0) throw Error(u(407));
                    n = n();
                } else {
                    if (n = t(), Me === null) throw Error(u(349));
                    (ve & 124) !== 0 || sd(a, t, n);
                }
                s.memoizedState = n;
                var c = {
                    value: n,
                    getSnapshot: t
                };
                return s.queue = c, Dd(cd.bind(null, a, c, e), [
                    e
                ]), a.flags |= 2048, ua(9, Ci(), od.bind(null, a, c, n, t), null), n;
            },
            useId: function() {
                var e = Et(), t = Me.identifierPrefix;
                if (Oe) {
                    var n = gn, a = pn;
                    n = (a & ~(1 << 32 - vt(a) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Oi++, 0 < n && (t += "H" + n.toString(32)), t += "»";
                } else n = nm++, t = "«" + t + "r" + n.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Qs,
            useFormState: bd,
            useActionState: bd,
            useOptimistic: function(e) {
                var t = Et();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = Gs.bind(null, fe, !0, n), n.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Ls,
            useCacheRefresh: function() {
                return Et().memoizedState = um.bind(null, fe);
            }
        }, Hd = {
            readContext: dt,
            use: Ti,
            useCallback: wd,
            useContext: dt,
            useEffect: Cd,
            useImperativeHandle: _d,
            useInsertionEffect: xd,
            useLayoutEffect: Rd,
            useMemo: Md,
            useReducer: Di,
            useRef: Td,
            useState: function() {
                return Di(yn);
            },
            useDebugValue: Us,
            useDeferredValue: function(e, t) {
                var n = He();
                return Nd(n, Ce.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Di(yn)[0], t = He().memoizedState;
                return [
                    typeof e == "boolean" ? e : ll(e),
                    t
                ];
            },
            useSyncExternalStore: ud,
            useId: kd,
            useHostTransitionStatus: Qs,
            useFormState: Sd,
            useActionState: Sd,
            useOptimistic: function(e, t) {
                var n = He();
                return hd(n, Ce, e, t);
            },
            useMemoCache: Ls,
            useCacheRefresh: Vd
        }, om = {
            readContext: dt,
            use: Ti,
            useCallback: wd,
            useContext: dt,
            useEffect: Cd,
            useImperativeHandle: _d,
            useInsertionEffect: xd,
            useLayoutEffect: Rd,
            useMemo: Md,
            useReducer: Vs,
            useRef: Td,
            useState: function() {
                return Vs(yn);
            },
            useDebugValue: Us,
            useDeferredValue: function(e, t) {
                var n = He();
                return Ce === null ? qs(n, e, t) : Nd(n, Ce.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Vs(yn)[0], t = He().memoizedState;
                return [
                    typeof e == "boolean" ? e : ll(e),
                    t
                ];
            },
            useSyncExternalStore: ud,
            useId: kd,
            useHostTransitionStatus: Qs,
            useFormState: Od,
            useActionState: Od,
            useOptimistic: function(e, t) {
                var n = He();
                return Ce !== null ? hd(n, Ce, e, t) : (n.baseState = e, [
                    e,
                    n.queue.dispatch
                ]);
            },
            useMemoCache: Ls,
            useCacheRefresh: Vd
        }, sa = null, sl = 0;
        function _i(e) {
            var t = sl;
            return sl += 1, sa === null && (sa = []), $f(sa, e, t);
        }
        function ol(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function wi(e, t) {
            throw t.$$typeof === E ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Qd(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Gd(e) {
            function t(_, A) {
                if (e) {
                    var N = _.deletions;
                    N === null ? (_.deletions = [
                        A
                    ], _.flags |= 16) : N.push(A);
                }
            }
            function n(_, A) {
                if (!e) return null;
                for(; A !== null;)t(_, A), A = A.sibling;
                return null;
            }
            function a(_) {
                for(var A = new Map; _ !== null;)_.key !== null ? A.set(_.key, _) : A.set(_.index, _), _ = _.sibling;
                return A;
            }
            function s(_, A) {
                return _ = hn(_, A), _.index = 0, _.sibling = null, _;
            }
            function c(_, A, N) {
                return _.index = N, e ? (N = _.alternate, N !== null ? (N = N.index, N < A ? (_.flags |= 67108866, A) : N) : (_.flags |= 67108866, A)) : (_.flags |= 1048576, A);
            }
            function g(_) {
                return e && _.alternate === null && (_.flags |= 67108866), _;
            }
            function v(_, A, N, U) {
                return A === null || A.tag !== 6 ? (A = fs(N, _.mode, U), A.return = _, A) : (A = s(A, N), A.return = _, A);
            }
            function C(_, A, N, U) {
                var Z = N.type;
                return Z === T ? z(_, A, N.props.children, U, N.key) : A !== null && (A.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === se && Qd(Z) === A.type) ? (A = s(A, N.props), ol(A, N), A.return = _, A) : (A = di(N.type, N.key, N.props, null, _.mode, U), ol(A, N), A.return = _, A);
            }
            function j(_, A, N, U) {
                return A === null || A.tag !== 4 || A.stateNode.containerInfo !== N.containerInfo || A.stateNode.implementation !== N.implementation ? (A = ds(N, _.mode, U), A.return = _, A) : (A = s(A, N.children || []), A.return = _, A);
            }
            function z(_, A, N, U, Z) {
                return A === null || A.tag !== 7 ? (A = pr(N, _.mode, U, Z), A.return = _, A) : (A = s(A, N), A.return = _, A);
            }
            function q(_, A, N) {
                if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = fs("" + A, _.mode, N), A.return = _, A;
                if (typeof A == "object" && A !== null) {
                    switch(A.$$typeof){
                        case S:
                            return N = di(A.type, A.key, A.props, null, _.mode, N), ol(N, A), N.return = _, N;
                        case D:
                            return A = ds(A, _.mode, N), A.return = _, A;
                        case se:
                            var U = A._init;
                            return A = U(A._payload), q(_, A, N);
                    }
                    if (_e(A) || ye(A)) return A = pr(A, _.mode, N, null), A.return = _, A;
                    if (typeof A.then == "function") return q(_, _i(A), N);
                    if (A.$$typeof === V) return q(_, mi(_, A), N);
                    wi(_, A);
                }
                return null;
            }
            function P(_, A, N, U) {
                var Z = A !== null ? A.key : null;
                if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return Z !== null ? null : v(_, A, "" + N, U);
                if (typeof N == "object" && N !== null) {
                    switch(N.$$typeof){
                        case S:
                            return N.key === Z ? C(_, A, N, U) : null;
                        case D:
                            return N.key === Z ? j(_, A, N, U) : null;
                        case se:
                            return Z = N._init, N = Z(N._payload), P(_, A, N, U);
                    }
                    if (_e(N) || ye(N)) return Z !== null ? null : z(_, A, N, U, null);
                    if (typeof N.then == "function") return P(_, A, _i(N), U);
                    if (N.$$typeof === V) return P(_, A, mi(_, N), U);
                    wi(_, N);
                }
                return null;
            }
            function L(_, A, N, U, Z) {
                if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return _ = _.get(N) || null, v(A, _, "" + U, Z);
                if (typeof U == "object" && U !== null) {
                    switch(U.$$typeof){
                        case S:
                            return _ = _.get(U.key === null ? N : U.key) || null, C(A, _, U, Z);
                        case D:
                            return _ = _.get(U.key === null ? N : U.key) || null, j(A, _, U, Z);
                        case se:
                            var de = U._init;
                            return U = de(U._payload), L(_, A, N, U, Z);
                    }
                    if (_e(U) || ye(U)) return _ = _.get(N) || null, z(A, _, U, Z, null);
                    if (typeof U.then == "function") return L(_, A, N, _i(U), Z);
                    if (U.$$typeof === V) return L(_, A, N, mi(A, U), Z);
                    wi(A, U);
                }
                return null;
            }
            function re(_, A, N, U) {
                for(var Z = null, de = null, F = A, te = A = 0, tt = null; F !== null && te < N.length; te++){
                    F.index > te ? (tt = F, F = null) : tt = F.sibling;
                    var be = P(_, F, N[te], U);
                    if (be === null) {
                        F === null && (F = tt);
                        break;
                    }
                    e && F && be.alternate === null && t(_, F), A = c(be, A, te), de === null ? Z = be : de.sibling = be, de = be, F = tt;
                }
                if (te === N.length) return n(_, F), Oe && mr(_, te), Z;
                if (F === null) {
                    for(; te < N.length; te++)F = q(_, N[te], U), F !== null && (A = c(F, A, te), de === null ? Z = F : de.sibling = F, de = F);
                    return Oe && mr(_, te), Z;
                }
                for(F = a(F); te < N.length; te++)tt = L(F, _, te, N[te], U), tt !== null && (e && tt.alternate !== null && F.delete(tt.key === null ? te : tt.key), A = c(tt, A, te), de === null ? Z = tt : de.sibling = tt, de = tt);
                return e && F.forEach(function(tr) {
                    return t(_, tr);
                }), Oe && mr(_, te), Z;
            }
            function $(_, A, N, U) {
                if (N == null) throw Error(u(151));
                for(var Z = null, de = null, F = A, te = A = 0, tt = null, be = N.next(); F !== null && !be.done; te++, be = N.next()){
                    F.index > te ? (tt = F, F = null) : tt = F.sibling;
                    var tr = P(_, F, be.value, U);
                    if (tr === null) {
                        F === null && (F = tt);
                        break;
                    }
                    e && F && tr.alternate === null && t(_, F), A = c(tr, A, te), de === null ? Z = tr : de.sibling = tr, de = tr, F = tt;
                }
                if (be.done) return n(_, F), Oe && mr(_, te), Z;
                if (F === null) {
                    for(; !be.done; te++, be = N.next())be = q(_, be.value, U), be !== null && (A = c(be, A, te), de === null ? Z = be : de.sibling = be, de = be);
                    return Oe && mr(_, te), Z;
                }
                for(F = a(F); !be.done; te++, be = N.next())be = L(F, _, te, be.value, U), be !== null && (e && be.alternate !== null && F.delete(be.key === null ? te : be.key), A = c(be, A, te), de === null ? Z = be : de.sibling = be, de = be);
                return e && F.forEach(function(cv) {
                    return t(_, cv);
                }), Oe && mr(_, te), Z;
            }
            function Re(_, A, N, U) {
                if (typeof N == "object" && N !== null && N.type === T && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
                    switch(N.$$typeof){
                        case S:
                            e: {
                                for(var Z = N.key; A !== null;){
                                    if (A.key === Z) {
                                        if (Z = N.type, Z === T) {
                                            if (A.tag === 7) {
                                                n(_, A.sibling), U = s(A, N.props.children), U.return = _, _ = U;
                                                break e;
                                            }
                                        } else if (A.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === se && Qd(Z) === A.type) {
                                            n(_, A.sibling), U = s(A, N.props), ol(U, N), U.return = _, _ = U;
                                            break e;
                                        }
                                        n(_, A);
                                        break;
                                    } else t(_, A);
                                    A = A.sibling;
                                }
                                N.type === T ? (U = pr(N.props.children, _.mode, U, N.key), U.return = _, _ = U) : (U = di(N.type, N.key, N.props, null, _.mode, U), ol(U, N), U.return = _, _ = U);
                            }
                            return g(_);
                        case D:
                            e: {
                                for(Z = N.key; A !== null;){
                                    if (A.key === Z) if (A.tag === 4 && A.stateNode.containerInfo === N.containerInfo && A.stateNode.implementation === N.implementation) {
                                        n(_, A.sibling), U = s(A, N.children || []), U.return = _, _ = U;
                                        break e;
                                    } else {
                                        n(_, A);
                                        break;
                                    }
                                    else t(_, A);
                                    A = A.sibling;
                                }
                                U = ds(N, _.mode, U), U.return = _, _ = U;
                            }
                            return g(_);
                        case se:
                            return Z = N._init, N = Z(N._payload), Re(_, A, N, U);
                    }
                    if (_e(N)) return re(_, A, N, U);
                    if (ye(N)) {
                        if (Z = ye(N), typeof Z != "function") throw Error(u(150));
                        return N = Z.call(N), $(_, A, N, U);
                    }
                    if (typeof N.then == "function") return Re(_, A, _i(N), U);
                    if (N.$$typeof === V) return Re(_, A, mi(_, N), U);
                    wi(_, N);
                }
                return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, A !== null && A.tag === 6 ? (n(_, A.sibling), U = s(A, N), U.return = _, _ = U) : (n(_, A), U = fs(N, _.mode, U), U.return = _, _ = U), g(_)) : n(_, A);
            }
            return function(_, A, N, U) {
                try {
                    sl = 0;
                    var Z = Re(_, A, N, U);
                    return sa = null, Z;
                } catch (F) {
                    if (F === $a || F === yi) throw F;
                    var de = xt(29, F, null, _.mode);
                    return de.lanes = U, de.return = _, de;
                } finally{}
            };
        }
        var oa = Gd(!0), Kd = Gd(!1), qt = H(null), tn = null;
        function Un(e) {
            var t = e.alternate;
            I(Ie, Ie.current & 1), I(qt, e), tn === null && (t === null || aa.current !== null || t.memoizedState !== null) && (tn = e);
        }
        function Yd(e) {
            if (e.tag === 22) {
                if (I(Ie, Ie.current), I(qt, e), tn === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (tn = e);
                }
            } else qn();
        }
        function qn() {
            I(Ie, Ie.current), I(qt, qt.current);
        }
        function bn(e) {
            X(qt), tn === e && (tn = null), X(Ie);
        }
        var Ie = H(0);
        function Mi(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var n = t.memoizedState;
                    if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Lo(n))) return t;
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
        function Ks(e, t, n, a) {
            t = e.memoizedState, n = n(a, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var Ys = {
            enqueueSetState: function(e, t, n) {
                e = e._reactInternals;
                var a = wt(), s = Vn(a);
                s.payload = t, n != null && (s.callback = n), t = Bn(e, s, a), t !== null && (Mt(t, e, a), tl(t, e, a));
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternals;
                var a = wt(), s = Vn(a);
                s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Bn(e, s, a), t !== null && (Mt(t, e, a), tl(t, e, a));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var n = wt(), a = Vn(n);
                a.tag = 2, t != null && (a.callback = t), t = Bn(e, a, n), t !== null && (Mt(t, e, n), tl(t, e, n));
            }
        };
        function Id(e, t, n, a, s, c, g) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, g) : t.prototype && t.prototype.isPureReactComponent ? !Ka(n, a) || !Ka(s, c) : !0;
        }
        function Xd(e, t, n, a) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ys.enqueueReplaceState(t, t.state, null);
        }
        function Tr(e, t) {
            var n = t;
            if ("ref" in t) {
                n = {};
                for(var a in t)a !== "ref" && (n[a] = t[a]);
            }
            if (e = e.defaultProps) {
                n === t && (n = b({}, n));
                for(var s in e)n[s] === void 0 && (n[s] = e[s]);
            }
            return n;
        }
        var Ni = typeof reportError == "function" ? reportError : function(e) {
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
        function Zd(e) {
            Ni(e);
        }
        function Jd(e) {
            console.error(e);
        }
        function Fd(e) {
            Ni(e);
        }
        function ji(e, t) {
            try {
                var n = e.onUncaughtError;
                n(t.value, {
                    componentStack: t.stack
                });
            } catch (a) {
                setTimeout(function() {
                    throw a;
                });
            }
        }
        function Wd(e, t, n) {
            try {
                var a = e.onCaughtError;
                a(n.value, {
                    componentStack: n.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                });
            } catch (s) {
                setTimeout(function() {
                    throw s;
                });
            }
        }
        function Is(e, t, n) {
            return n = Vn(n), n.tag = 3, n.payload = {
                element: null
            }, n.callback = function() {
                ji(e, t);
            }, n;
        }
        function $d(e) {
            return e = Vn(e), e.tag = 3, e;
        }
        function eh(e, t, n, a) {
            var s = n.type.getDerivedStateFromError;
            if (typeof s == "function") {
                var c = a.value;
                e.payload = function() {
                    return s(c);
                }, e.callback = function() {
                    Wd(t, n, a);
                };
            }
            var g = n.stateNode;
            g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
                Wd(t, n, a), typeof s != "function" && (In === null ? In = new Set([
                    this
                ]) : In.add(this));
                var v = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: v !== null ? v : ""
                });
            });
        }
        function cm(e, t, n, a, s) {
            if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (t = n.alternate, t !== null && Ja(t, n, s, !0), n = qt.current, n !== null) {
                    switch(n.tag){
                        case 13:
                            return tn === null ? yo() : n.alternate === null && Ve === 0 && (Ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === Os ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([
                                a
                            ]) : t.add(a), So(e, a, s)), !1;
                        case 22:
                            return n.flags |= 65536, a === Os ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    a
                                ])
                            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([
                                a
                            ]) : n.add(a)), So(e, a, s)), !1;
                    }
                    throw Error(u(435, n.tag));
                }
                return So(e, a, s), yo(), !1;
            }
            if (Oe) return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, a !== gs && (e = Error(u(422), {
                cause: a
            }), Za(Vt(e, n)))) : (a !== gs && (t = Error(u(423), {
                cause: a
            }), Za(Vt(t, n))), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, a = Vt(a, n), s = Is(e.stateNode, a, s), Cs(e, s), Ve !== 4 && (Ve = 2)), !1;
            var c = Error(u(520), {
                cause: a
            });
            if (c = Vt(c, n), ml === null ? ml = [
                c
            ] : ml.push(c), Ve !== 4 && (Ve = 2), t === null) return !0;
            a = Vt(a, n), n = t;
            do {
                switch(n.tag){
                    case 3:
                        return n.flags |= 65536, e = s & -s, n.lanes |= e, e = Is(n.stateNode, a, e), Cs(n, e), !1;
                    case 1:
                        if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (In === null || !In.has(c)))) return n.flags |= 65536, s &= -s, n.lanes |= s, s = $d(s), eh(s, e, n, a), Cs(n, s), !1;
                }
                n = n.return;
            }while (n !== null);
            return !1;
        }
        var th = Error(u(461)), $e = !1;
        function at(e, t, n, a) {
            t.child = e === null ? Kd(t, null, n, a) : oa(t, e.child, n, a);
        }
        function nh(e, t, n, a, s) {
            n = n.render;
            var c = t.ref;
            if ("ref" in a) {
                var g = {};
                for(var v in a)v !== "ref" && (g[v] = a[v]);
            } else g = a;
            return Sr(t), a = ws(e, t, n, g, c, s), v = Ms(), e !== null && !$e ? (Ns(e, t, s), Sn(e, t, s)) : (Oe && v && hs(t), t.flags |= 1, at(e, t, a, s), t.child);
        }
        function rh(e, t, n, a, s) {
            if (e === null) {
                var c = n.type;
                return typeof c == "function" && !cs(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, ah(e, t, c, a, s)) : (e = di(n.type, null, a, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (c = e.child, !to(e, s)) {
                var g = c.memoizedProps;
                if (n = n.compare, n = n !== null ? n : Ka, n(g, a) && e.ref === t.ref) return Sn(e, t, s);
            }
            return t.flags |= 1, e = hn(c, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function ah(e, t, n, a, s) {
            if (e !== null) {
                var c = e.memoizedProps;
                if (Ka(c, a) && e.ref === t.ref) if ($e = !1, t.pendingProps = a = c, to(e, s)) (e.flags & 131072) !== 0 && ($e = !0);
                else return t.lanes = e.lanes, Sn(e, t, s);
            }
            return Xs(e, t, n, a, s);
        }
        function lh(e, t, n) {
            var a = t.pendingProps, s = a.children, c = e !== null ? e.memoizedState : null;
            if (a.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (a = c !== null ? c.baseLanes | n : n, e !== null) {
                        for(s = t.child = e.child, c = 0; s !== null;)c = c | s.lanes | s.childLanes, s = s.sibling;
                        t.childLanes = c & ~a;
                    } else t.childLanes = 0, t.child = null;
                    return ih(e, t, a, n);
                }
                if ((n & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && vi(t, c !== null ? c.cachePool : null), c !== null ? ad(t, c) : Rs(), Yd(t);
                else return t.lanes = t.childLanes = 536870912, ih(e, t, c !== null ? c.baseLanes | n : n, n);
            } else c !== null ? (vi(t, c.cachePool), ad(t, c), qn(), t.memoizedState = null) : (e !== null && vi(t, null), Rs(), qn());
            return at(e, t, s, n), t.child;
        }
        function ih(e, t, n, a) {
            var s = Es();
            return s = s === null ? null : {
                parent: Ye._currentValue,
                pool: s
            }, t.memoizedState = {
                baseLanes: n,
                cachePool: s
            }, e !== null && vi(t, null), Rs(), Yd(t), e !== null && Ja(e, t, a, !0), null;
        }
        function Pi(e, t) {
            var n = t.ref;
            if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof n != "function" && typeof n != "object") throw Error(u(284));
                (e === null || e.ref !== n) && (t.flags |= 4194816);
            }
        }
        function Xs(e, t, n, a, s) {
            return Sr(t), n = ws(e, t, n, a, void 0, s), a = Ms(), e !== null && !$e ? (Ns(e, t, s), Sn(e, t, s)) : (Oe && a && hs(t), t.flags |= 1, at(e, t, n, s), t.child);
        }
        function uh(e, t, n, a, s, c) {
            return Sr(t), t.updateQueue = null, n = id(t, a, n, s), ld(e), a = Ms(), e !== null && !$e ? (Ns(e, t, c), Sn(e, t, c)) : (Oe && a && hs(t), t.flags |= 1, at(e, t, n, c), t.child);
        }
        function sh(e, t, n, a, s) {
            if (Sr(t), t.stateNode === null) {
                var c = $r, g = n.contextType;
                typeof g == "object" && g !== null && (c = dt(g)), c = new n(a, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Ys, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = a, c.state = t.memoizedState, c.refs = {}, Ts(t), g = n.contextType, c.context = typeof g == "object" && g !== null ? dt(g) : $r, c.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (Ks(t, n, g, a), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (g = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), g !== c.state && Ys.enqueueReplaceState(c, c.state, null), rl(t, a, c, s), nl(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
            } else if (e === null) {
                c = t.stateNode;
                var v = t.memoizedProps, C = Tr(n, v);
                c.props = C;
                var j = c.context, z = n.contextType;
                g = $r, typeof z == "object" && z !== null && (g = dt(z));
                var q = n.getDerivedStateFromProps;
                z = typeof q == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, z || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || j !== g) && Xd(t, c, a, g), kn = !1;
                var P = t.memoizedState;
                c.state = P, rl(t, a, c, s), nl(), j = t.memoizedState, v || P !== j || kn ? (typeof q == "function" && (Ks(t, n, q, a), j = t.memoizedState), (C = kn || Id(t, n, C, a, P, j, g)) ? (z || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = j), c.props = a, c.state = j, c.context = g, a = C) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
            } else {
                c = t.stateNode, Ds(e, t), g = t.memoizedProps, z = Tr(n, g), c.props = z, q = t.pendingProps, P = c.context, j = n.contextType, C = $r, typeof j == "object" && j !== null && (C = dt(j)), v = n.getDerivedStateFromProps, (j = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g !== q || P !== C) && Xd(t, c, a, C), kn = !1, P = t.memoizedState, c.state = P, rl(t, a, c, s), nl();
                var L = t.memoizedState;
                g !== q || P !== L || kn || e !== null && e.dependencies !== null && gi(e.dependencies) ? (typeof v == "function" && (Ks(t, n, v, a), L = t.memoizedState), (z = kn || Id(t, n, z, a, P, L, C) || e !== null && e.dependencies !== null && gi(e.dependencies)) ? (j || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, L, C), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(a, L, C)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), c.props = a, c.state = L, c.context = C, a = z) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), a = !1);
            }
            return c = a, Pi(e, t), a = (t.flags & 128) !== 0, c || a ? (c = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && a ? (t.child = oa(t, e.child, null, s), t.child = oa(t, null, n, s)) : at(e, t, n, s), t.memoizedState = c.state, e = t.child) : e = Sn(e, t, s), e;
        }
        function oh(e, t, n, a) {
            return Xa(), t.flags |= 256, at(e, t, n, a), t.child;
        }
        var Zs = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Js(e) {
            return {
                baseLanes: e,
                cachePool: Jf()
            };
        }
        function Fs(e, t, n) {
            return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ht), e;
        }
        function ch(e, t, n) {
            var a = t.pendingProps, s = !1, c = (t.flags & 128) !== 0, g;
            if ((g = c) || (g = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0), g && (s = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (Oe) {
                    if (s ? Un(t) : qn(), Oe) {
                        var v = ke, C;
                        if (C = v) {
                            e: {
                                for(C = v, v = en; C.nodeType !== 8;){
                                    if (!v) {
                                        v = null;
                                        break e;
                                    }
                                    if (C = Jt(C.nextSibling), C === null) {
                                        v = null;
                                        break e;
                                    }
                                }
                                v = C;
                            }
                            v !== null ? (t.memoizedState = {
                                dehydrated: v,
                                treeContext: gr !== null ? {
                                    id: pn,
                                    overflow: gn
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, C = xt(18, null, null, 0), C.stateNode = v, C.return = t, t.child = C, yt = t, ke = null, C = !0) : C = !1;
                        }
                        C || yr(t);
                    }
                    if (v = t.memoizedState, v !== null && (v = v.dehydrated, v !== null)) return Lo(v) ? t.lanes = 32 : t.lanes = 536870912, null;
                    bn(t);
                }
                return v = a.children, a = a.fallback, s ? (qn(), s = t.mode, v = Li({
                    mode: "hidden",
                    children: v
                }, s), a = pr(a, s, n, null), v.return = t, a.return = t, v.sibling = a, t.child = v, s = t.child, s.memoizedState = Js(n), s.childLanes = Fs(e, g, n), t.memoizedState = Zs, a) : (Un(t), Ws(t, v));
            }
            if (C = e.memoizedState, C !== null && (v = C.dehydrated, v !== null)) {
                if (c) t.flags & 256 ? (Un(t), t.flags &= -257, t = $s(e, t, n)) : t.memoizedState !== null ? (qn(), t.child = e.child, t.flags |= 128, t = null) : (qn(), s = a.fallback, v = t.mode, a = Li({
                    mode: "visible",
                    children: a.children
                }, v), s = pr(s, v, n, null), s.flags |= 2, a.return = t, s.return = t, a.sibling = s, t.child = a, oa(t, e.child, null, n), a = t.child, a.memoizedState = Js(n), a.childLanes = Fs(e, g, n), t.memoizedState = Zs, t = s);
                else if (Un(t), Lo(v)) {
                    if (g = v.nextSibling && v.nextSibling.dataset, g) var j = g.dgst;
                    g = j, a = Error(u(419)), a.stack = "", a.digest = g, Za({
                        value: a,
                        source: null,
                        stack: null
                    }), t = $s(e, t, n);
                } else if ($e || Ja(e, t, n, !1), g = (n & e.childLanes) !== 0, $e || g) {
                    if (g = Me, g !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : La(a), a = (a & (g.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== C.retryLane)) throw C.retryLane = a, Wr(e, a), Mt(g, e, a), th;
                    v.data === "$?" || yo(), t = $s(e, t, n);
                } else v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, ke = Jt(v.nextSibling), yt = t, Oe = !0, vr = null, en = !1, e !== null && (zt[Ut++] = pn, zt[Ut++] = gn, zt[Ut++] = gr, pn = e.id, gn = e.overflow, gr = t), t = Ws(t, a.children), t.flags |= 4096);
                return t;
            }
            return s ? (qn(), s = a.fallback, v = t.mode, C = e.child, j = C.sibling, a = hn(C, {
                mode: "hidden",
                children: a.children
            }), a.subtreeFlags = C.subtreeFlags & 65011712, j !== null ? s = hn(j, s) : (s = pr(s, v, n, null), s.flags |= 2), s.return = t, a.return = t, a.sibling = s, t.child = a, a = s, s = t.child, v = e.child.memoizedState, v === null ? v = Js(n) : (C = v.cachePool, C !== null ? (j = Ye._currentValue, C = C.parent !== j ? {
                parent: j,
                pool: j
            } : C) : C = Jf(), v = {
                baseLanes: v.baseLanes | n,
                cachePool: C
            }), s.memoizedState = v, s.childLanes = Fs(e, g, n), t.memoizedState = Zs, a) : (Un(t), n = e.child, e = n.sibling, n = hn(n, {
                mode: "visible",
                children: a.children
            }), n.return = t, n.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [
                e
            ], t.flags |= 16) : g.push(e)), t.child = n, t.memoizedState = null, n);
        }
        function Ws(e, t) {
            return t = Li({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Li(e, t) {
            return e = xt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function $s(e, t, n) {
            return oa(t, e.child, null, n), e = Ws(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function fh(e, t, n) {
            e.lanes |= t;
            var a = e.alternate;
            a !== null && (a.lanes |= t), vs(e.return, t, n);
        }
        function eo(e, t, n, a, s) {
            var c = e.memoizedState;
            c === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: n,
                tailMode: s
            } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = s);
        }
        function dh(e, t, n) {
            var a = t.pendingProps, s = a.revealOrder, c = a.tail;
            if (at(e, t, a.children, n), a = Ie.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && fh(e, n, t);
                    else if (e.tag === 19) fh(e, n, t);
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
                a &= 1;
            }
            switch(I(Ie, a), s){
                case "forwards":
                    for(n = t.child, s = null; n !== null;)e = n.alternate, e !== null && Mi(e) === null && (s = n), n = n.sibling;
                    n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), eo(t, !1, s, n, c);
                    break;
                case "backwards":
                    for(n = null, s = t.child, t.child = null; s !== null;){
                        if (e = s.alternate, e !== null && Mi(e) === null) {
                            t.child = s;
                            break;
                        }
                        e = s.sibling, s.sibling = n, n = s, s = e;
                    }
                    eo(t, !0, n, null, c);
                    break;
                case "together":
                    eo(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function Sn(e, t, n) {
            if (e !== null && (t.dependencies = e.dependencies), Yn |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
                if (Ja(e, t, n, !1), (n & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(u(153));
            if (t.child !== null) {
                for(e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = hn(e, e.pendingProps), n.return = t;
                n.sibling = null;
            }
            return t.child;
        }
        function to(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && gi(e)));
        }
        function fm(e, t, n) {
            switch(t.tag){
                case 3:
                    me(t, t.stateNode.containerInfo), Ln(t, Ye, e.memoizedState.cache), Xa();
                    break;
                case 27:
                case 5:
                    sn(t);
                    break;
                case 4:
                    me(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    Ln(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var a = t.memoizedState;
                    if (a !== null) return a.dehydrated !== null ? (Un(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ch(e, t, n) : (Un(t), e = Sn(e, t, n), e !== null ? e.sibling : null);
                    Un(t);
                    break;
                case 19:
                    var s = (e.flags & 128) !== 0;
                    if (a = (n & t.childLanes) !== 0, a || (Ja(e, t, n, !1), a = (n & t.childLanes) !== 0), s) {
                        if (a) return dh(e, t, n);
                        t.flags |= 128;
                    }
                    if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), I(Ie, Ie.current), a) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, lh(e, t, n);
                case 24:
                    Ln(t, Ye, e.memoizedState.cache);
            }
            return Sn(e, t, n);
        }
        function hh(e, t, n) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) $e = !0;
            else {
                if (!to(e, n) && (t.flags & 128) === 0) return $e = !1, fm(e, t, n);
                $e = (e.flags & 131072) !== 0;
            }
            else $e = !1, Oe && (t.flags & 1048576) !== 0 && Qf(t, pi, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var a = t.elementType, s = a._init;
                        if (a = s(a._payload), t.type = a, typeof a == "function") cs(a) ? (e = Tr(a, e), t.tag = 1, t = sh(null, t, a, e, n)) : (t.tag = 0, t = Xs(null, t, a, e, n));
                        else {
                            if (a != null) {
                                if (s = a.$$typeof, s === Q) {
                                    t.tag = 11, t = nh(null, t, a, e, n);
                                    break e;
                                } else if (s === le) {
                                    t.tag = 14, t = rh(null, t, a, e, n);
                                    break e;
                                }
                            }
                            throw t = gt(a) || a, Error(u(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return Xs(e, t, t.type, t.pendingProps, n);
                case 1:
                    return a = t.type, s = Tr(a, t.pendingProps), sh(e, t, a, s, n);
                case 3:
                    e: {
                        if (me(t, t.stateNode.containerInfo), e === null) throw Error(u(387));
                        a = t.pendingProps;
                        var c = t.memoizedState;
                        s = c.element, Ds(e, t), rl(t, a, null, n);
                        var g = t.memoizedState;
                        if (a = g.cache, Ln(t, Ye, a), a !== c.cache && ys(t, [
                            Ye
                        ], n, !0), nl(), a = g.element, c.isDehydrated) if (c = {
                            element: a,
                            isDehydrated: !1,
                            cache: g.cache
                        }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                            t = oh(e, t, a, n);
                            break e;
                        } else if (a !== s) {
                            s = Vt(Error(u(424)), t), Za(s), t = oh(e, t, a, n);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(ke = Jt(e.firstChild), yt = t, Oe = !0, vr = null, en = !0, n = Kd(t, null, a, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                        }
                        else {
                            if (Xa(), a === s) {
                                t = Sn(e, t, n);
                                break e;
                            }
                            at(e, t, a, n);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Pi(e, t), e === null ? (n = vp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Oe || (n = t.type, e = t.pendingProps, a = Zi(ee.current).createElement(n), a[Fe] = t, a[ft] = e, it(a, n, e), We(a), t.stateNode = a) : t.memoizedState = vp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return sn(t), e === null && Oe && (a = t.stateNode = pp(t.type, t.pendingProps, ee.current), yt = t, en = !0, s = ke, Jn(t.type) ? (ko = s, ke = Jt(a.firstChild)) : ke = s), at(e, t, t.pendingProps.children, n), Pi(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && Oe && ((s = a = ke) && (a = zm(a, t.type, t.pendingProps, en), a !== null ? (t.stateNode = a, yt = t, ke = Jt(a.firstChild), en = !1, s = !0) : s = !1), s || yr(t)), sn(t), s = t.type, c = t.pendingProps, g = e !== null ? e.memoizedProps : null, a = c.children, No(s, c) ? a = null : g !== null && No(s, g) && (t.flags |= 32), t.memoizedState !== null && (s = ws(e, t, rm, null, null, n), Cl._currentValue = s), Pi(e, t), at(e, t, a, n), t.child;
                case 6:
                    return e === null && Oe && ((e = n = ke) && (n = Um(n, t.pendingProps, en), n !== null ? (t.stateNode = n, yt = t, ke = null, e = !0) : e = !1), e || yr(t)), null;
                case 13:
                    return ch(e, t, n);
                case 4:
                    return me(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = oa(t, null, a, n) : at(e, t, a, n), t.child;
                case 11:
                    return nh(e, t, t.type, t.pendingProps, n);
                case 7:
                    return at(e, t, t.pendingProps, n), t.child;
                case 8:
                    return at(e, t, t.pendingProps.children, n), t.child;
                case 12:
                    return at(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    return a = t.pendingProps, Ln(t, t.type, a.value), at(e, t, a.children, n), t.child;
                case 9:
                    return s = t.type._context, a = t.pendingProps.children, Sr(t), s = dt(s), a = a(s), t.flags |= 1, at(e, t, a, n), t.child;
                case 14:
                    return rh(e, t, t.type, t.pendingProps, n);
                case 15:
                    return ah(e, t, t.type, t.pendingProps, n);
                case 19:
                    return dh(e, t, n);
                case 31:
                    return a = t.pendingProps, n = t.mode, a = {
                        mode: a.mode,
                        children: a.children
                    }, e === null ? (n = Li(a, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = hn(e.child, a), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
                case 22:
                    return lh(e, t, n);
                case 24:
                    return Sr(t), a = dt(Ye), e === null ? (s = Es(), s === null && (s = Me, c = bs(), s.pooledCache = c, c.refCount++, c !== null && (s.pooledCacheLanes |= n), s = c), t.memoizedState = {
                        parent: a,
                        cache: s
                    }, Ts(t), Ln(t, Ye, s)) : ((e.lanes & n) !== 0 && (Ds(e, t), rl(t, null, null, n), nl()), s = e.memoizedState, c = t.memoizedState, s.parent !== a ? (s = {
                        parent: a,
                        cache: a
                    }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), Ln(t, Ye, a)) : (a = c.cache, Ln(t, Ye, a), a !== s.cache && ys(t, [
                        Ye
                    ], n, !0))), at(e, t, t.pendingProps.children, n), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(u(156, t.tag));
        }
        function En(e) {
            e.flags |= 4;
        }
        function ph(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !Op(t)) {
                if (t = qt.current, t !== null && ((ve & 4194048) === ve ? tn !== null : (ve & 62914560) !== ve && (ve & 536870912) === 0 || t !== tn)) throw el = Os, Ff;
                e.flags |= 8192;
            }
        }
        function ki(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? kr() : 536870912, e.lanes |= t, ha |= t);
        }
        function cl(e, t) {
            if (!Oe) switch(e.tailMode){
                case "hidden":
                    t = e.tail;
                    for(var n = null; t !== null;)t.alternate !== null && (n = t), t = t.sibling;
                    n === null ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for(var a = null; n !== null;)n.alternate !== null && (a = n), n = n.sibling;
                    a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
            }
        }
        function je(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
            if (t) for(var s = e.child; s !== null;)n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 65011712, a |= s.flags & 65011712, s.return = e, s = s.sibling;
            else for(s = e.child; s !== null;)n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = e, s = s.sibling;
            return e.subtreeFlags |= a, e.childLanes = n, t;
        }
        function dm(e, t, n) {
            var a = t.pendingProps;
            switch(ps(t), t.tag){
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
                    return je(t), null;
                case 1:
                    return je(t), null;
                case 3:
                    return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), vn(Ye), mt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ia(t) ? En(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yf())), je(t), null;
                case 26:
                    return n = t.memoizedState, e === null ? (En(t), n !== null ? (je(t), ph(t, n)) : (je(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (En(t), je(t), ph(t, n)) : (je(t), t.flags &= -16777217) : (e.memoizedProps !== a && En(t), je(t), t.flags &= -16777217), null;
                case 27:
                    Ge(t), n = ee.current;
                    var s = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== a && En(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(u(166));
                            return je(t), null;
                        }
                        e = J.current, Ia(t) ? Gf(t) : (e = pp(s, a, n), t.stateNode = e, En(t));
                    }
                    return je(t), null;
                case 5:
                    if (Ge(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && En(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(u(166));
                            return je(t), null;
                        }
                        if (e = J.current, Ia(t)) Gf(t);
                        else {
                            switch(s = Zi(ee.current), e){
                                case 1:
                                    e = s.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case 2:
                                    e = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                default:
                                    switch(n){
                                        case "svg":
                                            e = s.createElementNS("http://www.w3.org/2000/svg", n);
                                            break;
                                        case "math":
                                            e = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                            break;
                                        case "script":
                                            e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                            break;
                                        case "select":
                                            e = typeof a.is == "string" ? s.createElement("select", {
                                                is: a.is
                                            }) : s.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                                            break;
                                        default:
                                            e = typeof a.is == "string" ? s.createElement(n, {
                                                is: a.is
                                            }) : s.createElement(n);
                                    }
                            }
                            e[Fe] = t, e[ft] = a;
                            e: for(s = t.child; s !== null;){
                                if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
                                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                                    s.child.return = s, s = s.child;
                                    continue;
                                }
                                if (s === t) break e;
                                for(; s.sibling === null;){
                                    if (s.return === null || s.return === t) break e;
                                    s = s.return;
                                }
                                s.sibling.return = s.return, s = s.sibling;
                            }
                            t.stateNode = e;
                            e: switch(it(e, n, a), n){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    e = !!a.autoFocus;
                                    break e;
                                case "img":
                                    e = !0;
                                    break e;
                                default:
                                    e = !1;
                            }
                            e && En(t);
                        }
                    }
                    return je(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== a && En(t);
                    else {
                        if (typeof a != "string" && t.stateNode === null) throw Error(u(166));
                        if (e = ee.current, Ia(t)) {
                            if (e = t.stateNode, n = t.memoizedProps, a = null, s = yt, s !== null) switch(s.tag){
                                case 27:
                                case 5:
                                    a = s.memoizedProps;
                            }
                            e[Fe] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || up(e.nodeValue, n)), e || yr(t);
                        } else e = Zi(e).createTextNode(a), e[Fe] = t, t.stateNode = e;
                    }
                    return je(t), null;
                case 13:
                    if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (s = Ia(t), a !== null && a.dehydrated !== null) {
                            if (e === null) {
                                if (!s) throw Error(u(318));
                                if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
                                s[Fe] = t;
                            } else Xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            je(t), s = !1;
                        } else s = Yf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
                        if (!s) return t.flags & 256 ? (bn(t), t) : (bn(t), null);
                    }
                    if (bn(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                    if (n = a !== null, e = e !== null && e.memoizedState !== null, n) {
                        a = t.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool);
                        var c = null;
                        a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== s && (a.flags |= 2048);
                    }
                    return n !== e && n && (t.child.flags |= 8192), ki(t, t.updateQueue), je(t), null;
                case 4:
                    return mt(), e === null && Ro(t.stateNode.containerInfo), je(t), null;
                case 10:
                    return vn(t.type), je(t), null;
                case 19:
                    if (X(Ie), s = t.memoizedState, s === null) return je(t), null;
                    if (a = (t.flags & 128) !== 0, c = s.rendering, c === null) if (a) cl(s, !1);
                    else {
                        if (Ve !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (c = Mi(e), c !== null) {
                                for(t.flags |= 128, cl(s, !1), e = c.updateQueue, t.updateQueue = e, ki(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;)Hf(n, e), n = n.sibling;
                                return I(Ie, Ie.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        s.tail !== null && jt() > zi && (t.flags |= 128, a = !0, cl(s, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!a) if (e = Mi(c), e !== null) {
                            if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ki(t, e), cl(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !Oe) return je(t), null;
                        } else 2 * jt() - s.renderingStartTime > zi && n !== 536870912 && (t.flags |= 128, a = !0, cl(s, !1), t.lanes = 4194304);
                        s.isBackwards ? (c.sibling = t.child, t.child = c) : (e = s.last, e !== null ? e.sibling = c : t.child = c, s.last = c);
                    }
                    return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = jt(), t.sibling = null, e = Ie.current, I(Ie, a ? e & 1 | 2 : e & 1), t) : (je(t), null);
                case 22:
                case 23:
                    return bn(t), As(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), n = t.updateQueue, n !== null && ki(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && X(Er), null;
                case 24:
                    return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), vn(Ye), je(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(u(156, t.tag));
        }
        function hm(e, t) {
            switch(ps(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return vn(Ye), mt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return Ge(t), null;
                case 13:
                    if (bn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(u(340));
                        Xa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return X(Ie), null;
                case 4:
                    return mt(), null;
                case 10:
                    return vn(t.type), null;
                case 22:
                case 23:
                    return bn(t), As(), e !== null && X(Er), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return vn(Ye), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function gh(e, t) {
            switch(ps(t), t.tag){
                case 3:
                    vn(Ye), mt();
                    break;
                case 26:
                case 27:
                case 5:
                    Ge(t);
                    break;
                case 4:
                    mt();
                    break;
                case 13:
                    bn(t);
                    break;
                case 19:
                    X(Ie);
                    break;
                case 10:
                    vn(t.type);
                    break;
                case 22:
                case 23:
                    bn(t), As(), e !== null && X(Er);
                    break;
                case 24:
                    vn(Ye);
            }
        }
        function fl(e, t) {
            try {
                var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
                if (a !== null) {
                    var s = a.next;
                    n = s;
                    do {
                        if ((n.tag & e) === e) {
                            a = void 0;
                            var c = n.create, g = n.inst;
                            a = c(), g.destroy = a;
                        }
                        n = n.next;
                    }while (n !== s);
                }
            } catch (v) {
                Ae(t, t.return, v);
            }
        }
        function Hn(e, t, n) {
            try {
                var a = t.updateQueue, s = a !== null ? a.lastEffect : null;
                if (s !== null) {
                    var c = s.next;
                    a = c;
                    do {
                        if ((a.tag & e) === e) {
                            var g = a.inst, v = g.destroy;
                            if (v !== void 0) {
                                g.destroy = void 0, s = t;
                                var C = n, j = v;
                                try {
                                    j();
                                } catch (z) {
                                    Ae(s, C, z);
                                }
                            }
                        }
                        a = a.next;
                    }while (a !== c);
                }
            } catch (z) {
                Ae(t, t.return, z);
            }
        }
        function mh(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var n = e.stateNode;
                try {
                    rd(t, n);
                } catch (a) {
                    Ae(e, e.return, a);
                }
            }
        }
        function vh(e, t, n) {
            n.props = Tr(e.type, e.memoizedProps), n.state = e.memoizedState;
            try {
                n.componentWillUnmount();
            } catch (a) {
                Ae(e, t, a);
            }
        }
        function dl(e, t) {
            try {
                var n = e.ref;
                if (n !== null) {
                    switch(e.tag){
                        case 26:
                        case 27:
                        case 5:
                            var a = e.stateNode;
                            break;
                        case 30:
                            a = e.stateNode;
                            break;
                        default:
                            a = e.stateNode;
                    }
                    typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
                }
            } catch (s) {
                Ae(e, t, s);
            }
        }
        function nn(e, t) {
            var n = e.ref, a = e.refCleanup;
            if (n !== null) if (typeof a == "function") try {
                a();
            } catch (s) {
                Ae(e, t, s);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof n == "function") try {
                n(null);
            } catch (s) {
                Ae(e, t, s);
            }
            else n.current = null;
        }
        function yh(e) {
            var t = e.type, n = e.memoizedProps, a = e.stateNode;
            try {
                e: switch(t){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n.autoFocus && a.focus();
                        break e;
                    case "img":
                        n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
                }
            } catch (s) {
                Ae(e, e.return, s);
            }
        }
        function no(e, t, n) {
            try {
                var a = e.stateNode;
                Pm(a, e.type, n, t), a[ft] = t;
            } catch (s) {
                Ae(e, e.return, s);
            }
        }
        function bh(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jn(e.type) || e.tag === 4;
        }
        function ro(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || bh(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function ao(e, t, n) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xi));
            else if (a !== 4 && (a === 27 && Jn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for(ao(e, t, n), e = e.sibling; e !== null;)ao(e, t, n), e = e.sibling;
        }
        function Vi(e, t, n) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (a !== 4 && (a === 27 && Jn(e.type) && (n = e.stateNode), e = e.child, e !== null)) for(Vi(e, t, n), e = e.sibling; e !== null;)Vi(e, t, n), e = e.sibling;
        }
        function Sh(e) {
            var t = e.stateNode, n = e.memoizedProps;
            try {
                for(var a = e.type, s = t.attributes; s.length;)t.removeAttributeNode(s[0]);
                it(t, a, n), t[Fe] = e, t[ft] = n;
            } catch (c) {
                Ae(e, e.return, c);
            }
        }
        var On = !1, ze = !1, lo = !1, Eh = typeof WeakSet == "function" ? WeakSet : Set, et = null;
        function pm(e, t) {
            if (e = e.containerInfo, wo = tu, e = Nf(e), rs(e)) {
                if ("selectionStart" in e) var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var s = a.anchorOffset, c = a.focusNode;
                        a = a.focusOffset;
                        try {
                            n.nodeType, c.nodeType;
                        } catch  {
                            n = null;
                            break e;
                        }
                        var g = 0, v = -1, C = -1, j = 0, z = 0, q = e, P = null;
                        t: for(;;){
                            for(var L; q !== n || s !== 0 && q.nodeType !== 3 || (v = g + s), q !== c || a !== 0 && q.nodeType !== 3 || (C = g + a), q.nodeType === 3 && (g += q.nodeValue.length), (L = q.firstChild) !== null;)P = q, q = L;
                            for(;;){
                                if (q === e) break t;
                                if (P === n && ++j === s && (v = g), P === c && ++z === a && (C = g), (L = q.nextSibling) !== null) break;
                                q = P, P = q.parentNode;
                            }
                            q = L;
                        }
                        n = v === -1 || C === -1 ? null : {
                            start: v,
                            end: C
                        };
                    } else n = null;
                }
                n = n || {
                    start: 0,
                    end: 0
                };
            } else n = null;
            for(Mo = {
                focusedElem: e,
                selectionRange: n
            }, tu = !1, et = t; et !== null;)if (t = et, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, et = e;
            else for(; et !== null;){
                switch(t = et, c = t.alternate, e = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0, n = t, s = c.memoizedProps, c = c.memoizedState, a = n.stateNode;
                            try {
                                var re = Tr(n.type, s, n.elementType === n.type);
                                e = a.getSnapshotBeforeUpdate(re, c), a.__reactInternalSnapshotBeforeUpdate = e;
                            } catch ($) {
                                Ae(n, n.return, $);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Po(e);
                            else if (n === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Po(e);
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
                        if ((e & 1024) !== 0) throw Error(u(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, et = e;
                    break;
                }
                et = t.return;
            }
        }
        function Oh(e, t, n) {
            var a = n.flags;
            switch(n.tag){
                case 0:
                case 11:
                case 15:
                    Qn(e, n), a & 4 && fl(5, n);
                    break;
                case 1:
                    if (Qn(e, n), a & 4) if (e = n.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (g) {
                        Ae(n, n.return, g);
                    }
                    else {
                        var s = Tr(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (g) {
                            Ae(n, n.return, g);
                        }
                    }
                    a & 64 && mh(n), a & 512 && dl(n, n.return);
                    break;
                case 3:
                    if (Qn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
                        if (t = null, n.child !== null) switch(n.child.tag){
                            case 27:
                            case 5:
                                t = n.child.stateNode;
                                break;
                            case 1:
                                t = n.child.stateNode;
                        }
                        try {
                            rd(e, t);
                        } catch (g) {
                            Ae(n, n.return, g);
                        }
                    }
                    break;
                case 27:
                    t === null && a & 4 && Sh(n);
                case 26:
                case 5:
                    Qn(e, n), t === null && a & 4 && yh(n), a & 512 && dl(n, n.return);
                    break;
                case 12:
                    Qn(e, n);
                    break;
                case 13:
                    Qn(e, n), a & 4 && Ch(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Tm.bind(null, n), qm(e, n))));
                    break;
                case 22:
                    if (a = n.memoizedState !== null || On, !a) {
                        t = t !== null && t.memoizedState !== null || ze, s = On;
                        var c = ze;
                        On = a, (ze = t) && !c ? Gn(e, n, (n.subtreeFlags & 8772) !== 0) : Qn(e, n), On = s, ze = c;
                    }
                    break;
                case 30:
                    break;
                default:
                    Qn(e, n);
            }
        }
        function Th(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, Th(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ka(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ne = null, Ot = !1;
        function Tn(e, t, n) {
            for(n = n.child; n !== null;)Dh(e, t, n), n = n.sibling;
        }
        function Dh(e, t, n) {
            if (Je && typeof Je.onCommitFiberUnmount == "function") try {
                Je.onCommitFiberUnmount(on, n);
            } catch  {}
            switch(n.tag){
                case 26:
                    ze || nn(n, t), Tn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                    break;
                case 27:
                    ze || nn(n, t);
                    var a = Ne, s = Ot;
                    Jn(n.type) && (Ne = n.stateNode, Ot = !1), Tn(e, t, n), El(n.stateNode), Ne = a, Ot = s;
                    break;
                case 5:
                    ze || nn(n, t);
                case 6:
                    if (a = Ne, s = Ot, Ne = null, Tn(e, t, n), Ne = a, Ot = s, Ne !== null) if (Ot) try {
                        (Ne.nodeType === 9 ? Ne.body : Ne.nodeName === "HTML" ? Ne.ownerDocument.body : Ne).removeChild(n.stateNode);
                    } catch (c) {
                        Ae(n, t, c);
                    }
                    else try {
                        Ne.removeChild(n.stateNode);
                    } catch (c) {
                        Ae(n, t, c);
                    }
                    break;
                case 18:
                    Ne !== null && (Ot ? (e = Ne, dp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), _l(e)) : dp(Ne, n.stateNode));
                    break;
                case 4:
                    a = Ne, s = Ot, Ne = n.stateNode.containerInfo, Ot = !0, Tn(e, t, n), Ne = a, Ot = s;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    ze || Hn(2, n, t), ze || Hn(4, n, t), Tn(e, t, n);
                    break;
                case 1:
                    ze || (nn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && vh(n, t, a)), Tn(e, t, n);
                    break;
                case 21:
                    Tn(e, t, n);
                    break;
                case 22:
                    ze = (a = ze) || n.memoizedState !== null, Tn(e, t, n), ze = a;
                    break;
                default:
                    Tn(e, t, n);
            }
        }
        function Ch(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                _l(e);
            } catch (n) {
                Ae(t, t.return, n);
            }
        }
        function gm(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new Eh), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Eh), t;
                default:
                    throw Error(u(435, e.tag));
            }
        }
        function io(e, t) {
            var n = gm(e);
            t.forEach(function(a) {
                var s = Dm.bind(null, e, a);
                n.has(a) || (n.add(a), a.then(s, s));
            });
        }
        function Rt(e, t) {
            var n = t.deletions;
            if (n !== null) for(var a = 0; a < n.length; a++){
                var s = n[a], c = e, g = t, v = g;
                e: for(; v !== null;){
                    switch(v.tag){
                        case 27:
                            if (Jn(v.type)) {
                                Ne = v.stateNode, Ot = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Ne = v.stateNode, Ot = !1;
                            break e;
                        case 3:
                        case 4:
                            Ne = v.stateNode.containerInfo, Ot = !0;
                            break e;
                    }
                    v = v.return;
                }
                if (Ne === null) throw Error(u(160));
                Dh(c, g, s), Ne = null, Ot = !1, c = s.alternate, c !== null && (c.return = null), s.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)xh(t, e), t = t.sibling;
        }
        var Zt = null;
        function xh(e, t) {
            var n = e.alternate, a = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    Rt(t, e), At(e), a & 4 && (Hn(3, e, e.return), fl(3, e), Hn(5, e, e.return));
                    break;
                case 1:
                    Rt(t, e), At(e), a & 512 && (ze || n === null || nn(n, n.return)), a & 64 && On && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
                    break;
                case 26:
                    var s = Zt;
                    if (Rt(t, e), At(e), a & 512 && (ze || n === null || nn(n, n.return)), a & 4) {
                        var c = n !== null ? n.memoizedState : null;
                        if (a = e.memoizedState, n === null) if (a === null) if (e.stateNode === null) {
                            e: {
                                a = e.type, n = e.memoizedProps, s = s.ownerDocument || s;
                                t: switch(a){
                                    case "title":
                                        c = s.getElementsByTagName("title")[0], (!c || c[rt] || c[Fe] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = s.createElement(a), s.head.insertBefore(c, s.querySelector("head > title"))), it(c, a, n), c[Fe] = e, We(c), a = c;
                                        break e;
                                    case "link":
                                        var g = Sp("link", "href", s).get(a + (n.href || ""));
                                        if (g) {
                                            for(var v = 0; v < g.length; v++)if (c = g[v], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                g.splice(v, 1);
                                                break t;
                                            }
                                        }
                                        c = s.createElement(a), it(c, a, n), s.head.appendChild(c);
                                        break;
                                    case "meta":
                                        if (g = Sp("meta", "content", s).get(a + (n.content || ""))) {
                                            for(v = 0; v < g.length; v++)if (c = g[v], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                g.splice(v, 1);
                                                break t;
                                            }
                                        }
                                        c = s.createElement(a), it(c, a, n), s.head.appendChild(c);
                                        break;
                                    default:
                                        throw Error(u(468, a));
                                }
                                c[Fe] = e, We(c), a = c;
                            }
                            e.stateNode = a;
                        } else Ep(s, e.type, e.stateNode);
                        else e.stateNode = bp(s, a, e.memoizedProps);
                        else c !== a ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, a === null ? Ep(s, e.type, e.stateNode) : bp(s, a, e.memoizedProps)) : a === null && e.stateNode !== null && no(e, e.memoizedProps, n.memoizedProps);
                    }
                    break;
                case 27:
                    Rt(t, e), At(e), a & 512 && (ze || n === null || nn(n, n.return)), n !== null && a & 4 && no(e, e.memoizedProps, n.memoizedProps);
                    break;
                case 5:
                    if (Rt(t, e), At(e), a & 512 && (ze || n === null || nn(n, n.return)), e.flags & 32) {
                        s = e.stateNode;
                        try {
                            Kr(s, "");
                        } catch (L) {
                            Ae(e, e.return, L);
                        }
                    }
                    a & 4 && e.stateNode != null && (s = e.memoizedProps, no(e, s, n !== null ? n.memoizedProps : s)), a & 1024 && (lo = !0);
                    break;
                case 6:
                    if (Rt(t, e), At(e), a & 4) {
                        if (e.stateNode === null) throw Error(u(162));
                        a = e.memoizedProps, n = e.stateNode;
                        try {
                            n.nodeValue = a;
                        } catch (L) {
                            Ae(e, e.return, L);
                        }
                    }
                    break;
                case 3:
                    if (Wi = null, s = Zt, Zt = Ji(t.containerInfo), Rt(t, e), Zt = s, At(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
                        _l(t.containerInfo);
                    } catch (L) {
                        Ae(e, e.return, L);
                    }
                    lo && (lo = !1, Rh(e));
                    break;
                case 4:
                    a = Zt, Zt = Ji(e.stateNode.containerInfo), Rt(t, e), At(e), Zt = a;
                    break;
                case 12:
                    Rt(t, e), At(e);
                    break;
                case 13:
                    Rt(t, e), At(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ho = jt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, io(e, a)));
                    break;
                case 22:
                    s = e.memoizedState !== null;
                    var C = n !== null && n.memoizedState !== null, j = On, z = ze;
                    if (On = j || s, ze = z || C, Rt(t, e), ze = z, On = j, At(e), a & 8192) e: for(t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (n === null || C || On || ze || Dr(e)), n = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (n === null) {
                                C = n = t;
                                try {
                                    if (c = C.stateNode, s) g = c.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                    else {
                                        v = C.stateNode;
                                        var q = C.memoizedProps.style, P = q != null && q.hasOwnProperty("display") ? q.display : null;
                                        v.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                                    }
                                } catch (L) {
                                    Ae(C, C.return, L);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (n === null) {
                                C = t;
                                try {
                                    C.stateNode.nodeValue = s ? "" : C.memoizedProps;
                                } catch (L) {
                                    Ae(C, C.return, L);
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue;
                        }
                        if (t === e) break e;
                        for(; t.sibling === null;){
                            if (t.return === null || t.return === e) break e;
                            n === t && (n = null), t = t.return;
                        }
                        n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
                    }
                    a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, io(e, n))));
                    break;
                case 19:
                    Rt(t, e), At(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, io(e, a)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    Rt(t, e), At(e);
            }
        }
        function At(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var n, a = e.return; a !== null;){
                        if (bh(a)) {
                            n = a;
                            break;
                        }
                        a = a.return;
                    }
                    if (n == null) throw Error(u(160));
                    switch(n.tag){
                        case 27:
                            var s = n.stateNode, c = ro(e);
                            Vi(e, c, s);
                            break;
                        case 5:
                            var g = n.stateNode;
                            n.flags & 32 && (Kr(g, ""), n.flags &= -33);
                            var v = ro(e);
                            Vi(e, v, g);
                            break;
                        case 3:
                        case 4:
                            var C = n.stateNode.containerInfo, j = ro(e);
                            ao(e, j, C);
                            break;
                        default:
                            throw Error(u(161));
                    }
                } catch (z) {
                    Ae(e, e.return, z);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Rh(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Rh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function Qn(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)Oh(e, t.alternate, t), t = t.sibling;
        }
        function Dr(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Hn(4, t, t.return), Dr(t);
                        break;
                    case 1:
                        nn(t, t.return);
                        var n = t.stateNode;
                        typeof n.componentWillUnmount == "function" && vh(t, t.return, n), Dr(t);
                        break;
                    case 27:
                        El(t.stateNode);
                    case 26:
                    case 5:
                        nn(t, t.return), Dr(t);
                        break;
                    case 22:
                        t.memoizedState === null && Dr(t);
                        break;
                    case 30:
                        Dr(t);
                        break;
                    default:
                        Dr(t);
                }
                e = e.sibling;
            }
        }
        function Gn(e, t, n) {
            for(n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var a = t.alternate, s = e, c = t, g = c.flags;
                switch(c.tag){
                    case 0:
                    case 11:
                    case 15:
                        Gn(s, c, n), fl(4, c);
                        break;
                    case 1:
                        if (Gn(s, c, n), a = c, s = a.stateNode, typeof s.componentDidMount == "function") try {
                            s.componentDidMount();
                        } catch (j) {
                            Ae(a, a.return, j);
                        }
                        if (a = c, s = a.updateQueue, s !== null) {
                            var v = a.stateNode;
                            try {
                                var C = s.shared.hiddenCallbacks;
                                if (C !== null) for(s.shared.hiddenCallbacks = null, s = 0; s < C.length; s++)nd(C[s], v);
                            } catch (j) {
                                Ae(a, a.return, j);
                            }
                        }
                        n && g & 64 && mh(c), dl(c, c.return);
                        break;
                    case 27:
                        Sh(c);
                    case 26:
                    case 5:
                        Gn(s, c, n), n && a === null && g & 4 && yh(c), dl(c, c.return);
                        break;
                    case 12:
                        Gn(s, c, n);
                        break;
                    case 13:
                        Gn(s, c, n), n && g & 4 && Ch(s, c);
                        break;
                    case 22:
                        c.memoizedState === null && Gn(s, c, n), dl(c, c.return);
                        break;
                    case 30:
                        break;
                    default:
                        Gn(s, c, n);
                }
                t = t.sibling;
            }
        }
        function uo(e, t) {
            var n = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fa(n));
        }
        function so(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fa(e));
        }
        function rn(e, t, n, a) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Ah(e, t, n, a), t = t.sibling;
        }
        function Ah(e, t, n, a) {
            var s = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    rn(e, t, n, a), s & 2048 && fl(9, t);
                    break;
                case 1:
                    rn(e, t, n, a);
                    break;
                case 3:
                    rn(e, t, n, a), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fa(e)));
                    break;
                case 12:
                    if (s & 2048) {
                        rn(e, t, n, a), e = t.stateNode;
                        try {
                            var c = t.memoizedProps, g = c.id, v = c.onPostCommit;
                            typeof v == "function" && v(g, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (C) {
                            Ae(t, t.return, C);
                        }
                    } else rn(e, t, n, a);
                    break;
                case 13:
                    rn(e, t, n, a);
                    break;
                case 23:
                    break;
                case 22:
                    c = t.stateNode, g = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? rn(e, t, n, a) : hl(e, t) : c._visibility & 2 ? rn(e, t, n, a) : (c._visibility |= 2, ca(e, t, n, a, (t.subtreeFlags & 10256) !== 0)), s & 2048 && uo(g, t);
                    break;
                case 24:
                    rn(e, t, n, a), s & 2048 && so(t.alternate, t);
                    break;
                default:
                    rn(e, t, n, a);
            }
        }
        function ca(e, t, n, a, s) {
            for(s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var c = e, g = t, v = n, C = a, j = g.flags;
                switch(g.tag){
                    case 0:
                    case 11:
                    case 15:
                        ca(c, g, v, C, s), fl(8, g);
                        break;
                    case 23:
                        break;
                    case 22:
                        var z = g.stateNode;
                        g.memoizedState !== null ? z._visibility & 2 ? ca(c, g, v, C, s) : hl(c, g) : (z._visibility |= 2, ca(c, g, v, C, s)), s && j & 2048 && uo(g.alternate, g);
                        break;
                    case 24:
                        ca(c, g, v, C, s), s && j & 2048 && so(g.alternate, g);
                        break;
                    default:
                        ca(c, g, v, C, s);
                }
                t = t.sibling;
            }
        }
        function hl(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var n = e, a = t, s = a.flags;
                switch(a.tag){
                    case 22:
                        hl(n, a), s & 2048 && uo(a.alternate, a);
                        break;
                    case 24:
                        hl(n, a), s & 2048 && so(a.alternate, a);
                        break;
                    default:
                        hl(n, a);
                }
                t = t.sibling;
            }
        }
        var pl = 8192;
        function fa(e) {
            if (e.subtreeFlags & pl) for(e = e.child; e !== null;)_h(e), e = e.sibling;
        }
        function _h(e) {
            switch(e.tag){
                case 26:
                    fa(e), e.flags & pl && e.memoizedState !== null && ev(Zt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    fa(e);
                    break;
                case 3:
                case 4:
                    var t = Zt;
                    Zt = Ji(e.stateNode.containerInfo), fa(e), Zt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = pl, pl = 16777216, fa(e), pl = t) : fa(e));
                    break;
                default:
                    fa(e);
            }
        }
        function wh(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function gl(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var n = 0; n < t.length; n++){
                    var a = t[n];
                    et = a, Nh(a, e);
                }
                wh(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Mh(e), e = e.sibling;
        }
        function Mh(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    gl(e), e.flags & 2048 && Hn(9, e, e.return);
                    break;
                case 3:
                    gl(e);
                    break;
                case 12:
                    gl(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Bi(e)) : gl(e);
                    break;
                default:
                    gl(e);
            }
        }
        function Bi(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var n = 0; n < t.length; n++){
                    var a = t[n];
                    et = a, Nh(a, e);
                }
                wh(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        Hn(8, t, t.return), Bi(t);
                        break;
                    case 22:
                        n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Bi(t));
                        break;
                    default:
                        Bi(t);
                }
                e = e.sibling;
            }
        }
        function Nh(e, t) {
            for(; et !== null;){
                var n = et;
                switch(n.tag){
                    case 0:
                    case 11:
                    case 15:
                        Hn(8, n, t);
                        break;
                    case 23:
                    case 22:
                        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                            var a = n.memoizedState.cachePool.pool;
                            a != null && a.refCount++;
                        }
                        break;
                    case 24:
                        Fa(n.memoizedState.cache);
                }
                if (a = n.child, a !== null) a.return = n, et = a;
                else e: for(n = e; et !== null;){
                    a = et;
                    var s = a.sibling, c = a.return;
                    if (Th(a), a === n) {
                        et = null;
                        break e;
                    }
                    if (s !== null) {
                        s.return = c, et = s;
                        break e;
                    }
                    et = c;
                }
            }
        }
        var mm = {
            getCacheForType: function(e) {
                var t = dt(Ye), n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n;
            }
        }, vm = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Me = null, he = null, ve = 0, De = 0, _t = null, Kn = !1, da = !1, oo = !1, Dn = 0, Ve = 0, Yn = 0, Cr = 0, co = 0, Ht = 0, ha = 0, ml = null, Tt = null, fo = !1, ho = 0, zi = 1 / 0, Ui = null, In = null, lt = 0, Xn = null, pa = null, ga = 0, po = 0, go = null, jh = null, vl = 0, mo = null;
        function wt() {
            if ((Te & 2) !== 0 && ve !== 0) return ve & -ve;
            if (B.T !== null) {
                var e = na;
                return e !== 0 ? e : To();
            }
            return Br();
        }
        function Ph() {
            Ht === 0 && (Ht = (ve & 536870912) === 0 || Oe ? Jl() : 536870912);
            var e = qt.current;
            return e !== null && (e.flags |= 32), Ht;
        }
        function Mt(e, t, n) {
            (e === Me && (De === 2 || De === 9) || e.cancelPendingCommit !== null) && (ma(e, 0), Zn(e, ve, Ht, !1)), or(e, n), ((Te & 2) === 0 || e !== Me) && (e === Me && ((Te & 2) === 0 && (Cr |= n), Ve === 4 && Zn(e, ve, Ht, !1)), an(e));
        }
        function Lh(e, t, n) {
            if ((Te & 6) !== 0) throw Error(u(327));
            var a = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || sr(e, t), s = a ? Sm(e, t) : bo(e, t, !0), c = a;
            do {
                if (s === 0) {
                    da && !a && Zn(e, t, 0, !1);
                    break;
                } else {
                    if (n = e.current.alternate, c && !ym(n)) {
                        s = bo(e, t, !1), c = !1;
                        continue;
                    }
                    if (s === 2) {
                        if (c = t, e.errorRecoveryDisabledLanes & c) var g = 0;
                        else g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                        if (g !== 0) {
                            t = g;
                            e: {
                                var v = e;
                                s = ml;
                                var C = v.current.memoizedState.isDehydrated;
                                if (C && (ma(v, g).flags |= 256), g = bo(v, g, !1), g !== 2) {
                                    if (oo && !C) {
                                        v.errorRecoveryDisabledLanes |= c, Cr |= c, s = 4;
                                        break e;
                                    }
                                    c = Tt, Tt = s, c !== null && (Tt === null ? Tt = c : Tt.push.apply(Tt, c));
                                }
                                s = g;
                            }
                            if (c = !1, s !== 2) continue;
                        }
                    }
                    if (s === 1) {
                        ma(e, 0), Zn(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(a = e, c = s, c){
                            case 0:
                            case 1:
                                throw Error(u(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                Zn(a, t, Ht, !Kn);
                                break e;
                            case 2:
                                Tt = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(u(329));
                        }
                        if ((t & 62914560) === t && (s = ho + 300 - jt(), 10 < s)) {
                            if (Zn(a, t, Ht, !Kn), Lr(a, 0, !0) !== 0) break e;
                            a.timeoutHandle = cp(kh.bind(null, a, n, Tt, Ui, fo, t, Ht, Cr, ha, Kn, c, 2, -0, 0), s);
                            break e;
                        }
                        kh(a, n, Tt, Ui, fo, t, Ht, Cr, ha, Kn, c, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            an(e);
        }
        function kh(e, t, n, a, s, c, g, v, C, j, z, q, P, L) {
            if (e.timeoutHandle = -1, q = t.subtreeFlags, (q & 8192 || (q & 16785408) === 16785408) && (Dl = {
                stylesheets: null,
                count: 0,
                unsuspend: $m
            }, _h(t), q = tv(), q !== null)) {
                e.cancelPendingCommit = q(Qh.bind(null, e, t, c, n, a, s, g, v, C, z, 1, P, L)), Zn(e, c, g, !j);
                return;
            }
            Qh(e, t, c, n, a, s, g, v, C);
        }
        function ym(e) {
            for(var t = e;;){
                var n = t.tag;
                if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for(var a = 0; a < n.length; a++){
                    var s = n[a], c = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ct(c(), s)) return !1;
                    } catch  {
                        return !1;
                    }
                }
                if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
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
        function Zn(e, t, n, a) {
            t &= ~co, t &= ~Cr, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
            for(var s = t; 0 < s;){
                var c = 31 - vt(s), g = 1 << c;
                a[c] = -1, s &= ~g;
            }
            n !== 0 && Fl(e, n, t);
        }
        function qi() {
            return (Te & 6) === 0 ? (yl(0), !1) : !0;
        }
        function vo() {
            if (he !== null) {
                if (De === 0) var e = he.return;
                else e = he, mn = br = null, js(e), sa = null, sl = 0, e = he;
                for(; e !== null;)gh(e.alternate, e), e = e.return;
                he = null;
            }
        }
        function ma(e, t) {
            var n = e.timeoutHandle;
            n !== -1 && (e.timeoutHandle = -1, km(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), vo(), Me = e, he = n = hn(e.current, null), ve = t, De = 0, _t = null, Kn = !1, da = sr(e, t), oo = !1, ha = Ht = co = Cr = Yn = Ve = 0, Tt = ml = null, fo = !1, (t & 8) !== 0 && (t |= t & 32);
            var a = e.entangledLanes;
            if (a !== 0) for(e = e.entanglements, a &= t; 0 < a;){
                var s = 31 - vt(a), c = 1 << s;
                t |= e[s], a &= ~c;
            }
            return Dn = t, oi(), n;
        }
        function Vh(e, t) {
            fe = null, B.H = Ai, t === $a || t === yi ? (t = ed(), De = 3) : t === Ff ? (t = ed(), De = 4) : De = t === th ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, _t = t, he === null && (Ve = 1, ji(e, Vt(t, e.current)));
        }
        function Bh() {
            var e = B.H;
            return B.H = Ai, e === null ? Ai : e;
        }
        function zh() {
            var e = B.A;
            return B.A = mm, e;
        }
        function yo() {
            Ve = 4, Kn || (ve & 4194048) !== ve && qt.current !== null || (da = !0), (Yn & 134217727) === 0 && (Cr & 134217727) === 0 || Me === null || Zn(Me, ve, Ht, !1);
        }
        function bo(e, t, n) {
            var a = Te;
            Te |= 2;
            var s = Bh(), c = zh();
            (Me !== e || ve !== t) && (Ui = null, ma(e, t)), t = !1;
            var g = Ve;
            e: do try {
                if (De !== 0 && he !== null) {
                    var v = he, C = _t;
                    switch(De){
                        case 8:
                            vo(), g = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            qt.current === null && (t = !0);
                            var j = De;
                            if (De = 0, _t = null, va(e, v, C, j), n && da) {
                                g = 0;
                                break e;
                            }
                            break;
                        default:
                            j = De, De = 0, _t = null, va(e, v, C, j);
                    }
                }
                bm(), g = Ve;
                break;
            } catch (z) {
                Vh(e, z);
            }
            while (!0);
            return t && e.shellSuspendCounter++, mn = br = null, Te = a, B.H = s, B.A = c, he === null && (Me = null, ve = 0, oi()), g;
        }
        function bm() {
            for(; he !== null;)Uh(he);
        }
        function Sm(e, t) {
            var n = Te;
            Te |= 2;
            var a = Bh(), s = zh();
            Me !== e || ve !== t ? (Ui = null, zi = jt() + 500, ma(e, t)) : da = sr(e, t);
            e: do try {
                if (De !== 0 && he !== null) {
                    t = he;
                    var c = _t;
                    t: switch(De){
                        case 1:
                            De = 0, _t = null, va(e, t, c, 1);
                            break;
                        case 2:
                        case 9:
                            if (Wf(c)) {
                                De = 0, _t = null, qh(t);
                                break;
                            }
                            t = function() {
                                De !== 2 && De !== 9 || Me !== e || (De = 7), an(e);
                            }, c.then(t, t);
                            break e;
                        case 3:
                            De = 7;
                            break e;
                        case 4:
                            De = 5;
                            break e;
                        case 7:
                            Wf(c) ? (De = 0, _t = null, qh(t)) : (De = 0, _t = null, va(e, t, c, 7));
                            break;
                        case 5:
                            var g = null;
                            switch(he.tag){
                                case 26:
                                    g = he.memoizedState;
                                case 5:
                                case 27:
                                    var v = he;
                                    if (!g || Op(g)) {
                                        De = 0, _t = null;
                                        var C = v.sibling;
                                        if (C !== null) he = C;
                                        else {
                                            var j = v.return;
                                            j !== null ? (he = j, Hi(j)) : he = null;
                                        }
                                        break t;
                                    }
                            }
                            De = 0, _t = null, va(e, t, c, 5);
                            break;
                        case 6:
                            De = 0, _t = null, va(e, t, c, 6);
                            break;
                        case 8:
                            vo(), Ve = 6;
                            break e;
                        default:
                            throw Error(u(462));
                    }
                }
                Em();
                break;
            } catch (z) {
                Vh(e, z);
            }
            while (!0);
            return mn = br = null, B.H = a, B.A = s, Te = n, he !== null ? 0 : (Me = null, ve = 0, oi(), Ve);
        }
        function Em() {
            for(; he !== null && !Ra();)Uh(he);
        }
        function Uh(e) {
            var t = hh(e.alternate, e, Dn);
            e.memoizedProps = e.pendingProps, t === null ? Hi(e) : he = t;
        }
        function qh(e) {
            var t = e, n = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = uh(n, t, t.pendingProps, t.type, void 0, ve);
                    break;
                case 11:
                    t = uh(n, t, t.pendingProps, t.type.render, t.ref, ve);
                    break;
                case 5:
                    js(t);
                default:
                    gh(n, t), t = he = Hf(t, Dn), t = hh(n, t, Dn);
            }
            e.memoizedProps = e.pendingProps, t === null ? Hi(e) : he = t;
        }
        function va(e, t, n, a) {
            mn = br = null, js(t), sa = null, sl = 0;
            var s = t.return;
            try {
                if (cm(e, s, t, n, ve)) {
                    Ve = 1, ji(e, Vt(n, e.current)), he = null;
                    return;
                }
            } catch (c) {
                if (s !== null) throw he = s, c;
                Ve = 1, ji(e, Vt(n, e.current)), he = null;
                return;
            }
            t.flags & 32768 ? (Oe || a === 1 ? e = !0 : da || (ve & 536870912) !== 0 ? e = !1 : (Kn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = qt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Hh(t, e)) : Hi(t);
        }
        function Hi(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Hh(t, Kn);
                    return;
                }
                e = t.return;
                var n = dm(t.alternate, t, Dn);
                if (n !== null) {
                    he = n;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    he = t;
                    return;
                }
                he = t = e;
            }while (t !== null);
            Ve === 0 && (Ve = 5);
        }
        function Hh(e, t) {
            do {
                var n = hm(e.alternate, e);
                if (n !== null) {
                    n.flags &= 32767, he = n;
                    return;
                }
                if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                    he = e;
                    return;
                }
                he = e = n;
            }while (e !== null);
            Ve = 6, he = null;
        }
        function Qh(e, t, n, a, s, c, g, v, C) {
            e.cancelPendingCommit = null;
            do Qi();
            while (lt !== 0);
            if ((Te & 6) !== 0) throw Error(u(327));
            if (t !== null) {
                if (t === e.current) throw Error(u(177));
                if (c = t.lanes | t.childLanes, c |= ss, Vu(e, n, c, g, v, C), e === Me && (he = Me = null, ve = 0), pa = t, Xn = e, ga = n, po = c, go = s, jh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Cm(Nr, function() {
                    return Xh(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                    a = B.T, B.T = null, s = K.p, K.p = 2, g = Te, Te |= 4;
                    try {
                        pm(e, t, n);
                    } finally{
                        Te = g, K.p = s, B.T = a;
                    }
                }
                lt = 1, Gh(), Kh(), Yh();
            }
        }
        function Gh() {
            if (lt === 1) {
                lt = 0;
                var e = Xn, t = pa, n = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || n) {
                    n = B.T, B.T = null;
                    var a = K.p;
                    K.p = 2;
                    var s = Te;
                    Te |= 4;
                    try {
                        xh(t, e);
                        var c = Mo, g = Nf(e.containerInfo), v = c.focusedElem, C = c.selectionRange;
                        if (g !== v && v && v.ownerDocument && Mf(v.ownerDocument.documentElement, v)) {
                            if (C !== null && rs(v)) {
                                var j = C.start, z = C.end;
                                if (z === void 0 && (z = j), "selectionStart" in v) v.selectionStart = j, v.selectionEnd = Math.min(z, v.value.length);
                                else {
                                    var q = v.ownerDocument || document, P = q && q.defaultView || window;
                                    if (P.getSelection) {
                                        var L = P.getSelection(), re = v.textContent.length, $ = Math.min(C.start, re), Re = C.end === void 0 ? $ : Math.min(C.end, re);
                                        !L.extend && $ > Re && (g = Re, Re = $, $ = g);
                                        var _ = wf(v, $), A = wf(v, Re);
                                        if (_ && A && (L.rangeCount !== 1 || L.anchorNode !== _.node || L.anchorOffset !== _.offset || L.focusNode !== A.node || L.focusOffset !== A.offset)) {
                                            var N = q.createRange();
                                            N.setStart(_.node, _.offset), L.removeAllRanges(), $ > Re ? (L.addRange(N), L.extend(A.node, A.offset)) : (N.setEnd(A.node, A.offset), L.addRange(N));
                                        }
                                    }
                                }
                            }
                            for(q = [], L = v; L = L.parentNode;)L.nodeType === 1 && q.push({
                                element: L,
                                left: L.scrollLeft,
                                top: L.scrollTop
                            });
                            for(typeof v.focus == "function" && v.focus(), v = 0; v < q.length; v++){
                                var U = q[v];
                                U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
                            }
                        }
                        tu = !!wo, Mo = wo = null;
                    } finally{
                        Te = s, K.p = a, B.T = n;
                    }
                }
                e.current = t, lt = 2;
            }
        }
        function Kh() {
            if (lt === 2) {
                lt = 0;
                var e = Xn, t = pa, n = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || n) {
                    n = B.T, B.T = null;
                    var a = K.p;
                    K.p = 2;
                    var s = Te;
                    Te |= 4;
                    try {
                        Oh(e, t.alternate, t);
                    } finally{
                        Te = s, K.p = a, B.T = n;
                    }
                }
                lt = 3;
            }
        }
        function Yh() {
            if (lt === 4 || lt === 3) {
                lt = 0, Nn();
                var e = Xn, t = pa, n = ga, a = jh;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, pa = Xn = null, Ih(e, e.pendingLanes));
                var s = e.pendingLanes;
                if (s === 0 && (In = null), jn(n), t = t.stateNode, Je && typeof Je.onCommitFiberRoot == "function") try {
                    Je.onCommitFiberRoot(on, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (a !== null) {
                    t = B.T, s = K.p, K.p = 2, B.T = null;
                    try {
                        for(var c = e.onRecoverableError, g = 0; g < a.length; g++){
                            var v = a[g];
                            c(v.value, {
                                componentStack: v.stack
                            });
                        }
                    } finally{
                        B.T = t, K.p = s;
                    }
                }
                (ga & 3) !== 0 && Qi(), an(e), s = e.pendingLanes, (n & 4194090) !== 0 && (s & 42) !== 0 ? e === mo ? vl++ : (vl = 0, mo = e) : vl = 0, yl(0);
            }
        }
        function Ih(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fa(t)));
        }
        function Qi(e) {
            return Gh(), Kh(), Yh(), Xh();
        }
        function Xh() {
            if (lt !== 5) return !1;
            var e = Xn, t = po;
            po = 0;
            var n = jn(ga), a = B.T, s = K.p;
            try {
                K.p = 32 > n ? 32 : n, B.T = null, n = go, go = null;
                var c = Xn, g = ga;
                if (lt = 0, pa = Xn = null, ga = 0, (Te & 6) !== 0) throw Error(u(331));
                var v = Te;
                if (Te |= 4, Mh(c.current), Ah(c, c.current, g, n), Te = v, yl(0, !1), Je && typeof Je.onPostCommitFiberRoot == "function") try {
                    Je.onPostCommitFiberRoot(on, c);
                } catch  {}
                return !0;
            } finally{
                K.p = s, B.T = a, Ih(e, t);
            }
        }
        function Zh(e, t, n) {
            t = Vt(n, t), t = Is(e.stateNode, t, 2), e = Bn(e, t, 2), e !== null && (or(e, 2), an(e));
        }
        function Ae(e, t, n) {
            if (e.tag === 3) Zh(e, e, n);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Zh(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (In === null || !In.has(a))) {
                        e = Vt(n, e), n = $d(2), a = Bn(t, n, 2), a !== null && (eh(n, a, t, e), or(a, 2), an(a));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function So(e, t, n) {
            var a = e.pingCache;
            if (a === null) {
                a = e.pingCache = new vm;
                var s = new Set;
                a.set(t, s);
            } else s = a.get(t), s === void 0 && (s = new Set, a.set(t, s));
            s.has(n) || (oo = !0, s.add(n), e = Om.bind(null, e, t, n), t.then(e, e));
        }
        function Om(e, t, n) {
            var a = e.pingCache;
            a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Me === e && (ve & n) === n && (Ve === 4 || Ve === 3 && (ve & 62914560) === ve && 300 > jt() - ho ? (Te & 2) === 0 && ma(e, 0) : co |= n, ha === ve && (ha = 0)), an(e);
        }
        function Jh(e, t) {
            t === 0 && (t = kr()), e = Wr(e, t), e !== null && (or(e, t), an(e));
        }
        function Tm(e) {
            var t = e.memoizedState, n = 0;
            t !== null && (n = t.retryLane), Jh(e, n);
        }
        function Dm(e, t) {
            var n = 0;
            switch(e.tag){
                case 13:
                    var a = e.stateNode, s = e.memoizedState;
                    s !== null && (n = s.retryLane);
                    break;
                case 19:
                    a = e.stateNode;
                    break;
                case 22:
                    a = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(u(314));
            }
            a !== null && a.delete(t), Jh(e, n);
        }
        function Cm(e, t) {
            return Mn(e, t);
        }
        var Gi = null, ya = null, Eo = !1, Ki = !1, Oo = !1, xr = 0;
        function an(e) {
            e !== ya && e.next === null && (ya === null ? Gi = ya = e : ya = ya.next = e), Ki = !0, Eo || (Eo = !0, Rm());
        }
        function yl(e, t) {
            if (!Oo && Ki) {
                Oo = !0;
                do for(var n = !1, a = Gi; a !== null;){
                    if (e !== 0) {
                        var s = a.pendingLanes;
                        if (s === 0) var c = 0;
                        else {
                            var g = a.suspendedLanes, v = a.pingedLanes;
                            c = (1 << 31 - vt(42 | e) + 1) - 1, c &= s & ~(g & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
                        }
                        c !== 0 && (n = !0, ep(a, c));
                    } else c = ve, c = Lr(a, a === Me ? c : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (c & 3) === 0 || sr(a, c) || (n = !0, ep(a, c));
                    a = a.next;
                }
                while (n);
                Oo = !1;
            }
        }
        function xm() {
            Fh();
        }
        function Fh() {
            Ki = Eo = !1;
            var e = 0;
            xr !== 0 && (Lm() && (e = xr), xr = 0);
            for(var t = jt(), n = null, a = Gi; a !== null;){
                var s = a.next, c = Wh(a, t);
                c === 0 ? (a.next = null, n === null ? Gi = s : n.next = s, s === null && (ya = n)) : (n = a, (e !== 0 || (c & 3) !== 0) && (Ki = !0)), a = s;
            }
            yl(e);
        }
        function Wh(e, t) {
            for(var n = e.suspendedLanes, a = e.pingedLanes, s = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c;){
                var g = 31 - vt(c), v = 1 << g, C = s[g];
                C === -1 ? ((v & n) === 0 || (v & a) !== 0) && (s[g] = ku(v, t)) : C <= t && (e.expiredLanes |= v), c &= ~v;
            }
            if (t = Me, n = ve, n = Lr(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (De === 2 || De === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && xa(a), e.callbackNode = null, e.callbackPriority = 0;
            if ((n & 3) === 0 || sr(e, n)) {
                if (t = n & -n, t === e.callbackPriority) return t;
                switch(a !== null && xa(a), jn(n)){
                    case 2:
                    case 8:
                        n = _a;
                        break;
                    case 32:
                        n = Nr;
                        break;
                    case 268435456:
                        n = Ma;
                        break;
                    default:
                        n = Nr;
                }
                return a = $h.bind(null, e), n = Mn(n, a), e.callbackPriority = t, e.callbackNode = n, t;
            }
            return a !== null && a !== null && xa(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function $h(e, t) {
            if (lt !== 0 && lt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var n = e.callbackNode;
            if (Qi() && e.callbackNode !== n) return null;
            var a = ve;
            return a = Lr(e, e === Me ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Lh(e, a, t), Wh(e, jt()), e.callbackNode != null && e.callbackNode === n ? $h.bind(null, e) : null);
        }
        function ep(e, t) {
            if (Qi()) return null;
            Lh(e, t, !0);
        }
        function Rm() {
            Vm(function() {
                (Te & 6) !== 0 ? Mn(Zl, xm) : Fh();
            });
        }
        function To() {
            return xr === 0 && (xr = Jl()), xr;
        }
        function tp(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ni("" + e);
        }
        function np(e, t) {
            var n = t.ownerDocument.createElement("input");
            return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
        }
        function Am(e, t, n, a, s) {
            if (t === "submit" && n && n.stateNode === s) {
                var c = tp((s[ft] || null).action), g = a.submitter;
                g && (t = (t = g[ft] || null) ? tp(t.formAction) : g.getAttribute("formAction"), t !== null && (c = t, g = null));
                var v = new ii("action", "action", null, a, s);
                e.push({
                    event: v,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (a.defaultPrevented) {
                                    if (xr !== 0) {
                                        var C = g ? np(s, g) : new FormData(s);
                                        Hs(n, {
                                            pending: !0,
                                            data: C,
                                            method: s.method,
                                            action: c
                                        }, null, C);
                                    }
                                } else typeof c == "function" && (v.preventDefault(), C = g ? np(s, g) : new FormData(s), Hs(n, {
                                    pending: !0,
                                    data: C,
                                    method: s.method,
                                    action: c
                                }, c, C));
                            },
                            currentTarget: s
                        }
                    ]
                });
            }
        }
        for(var Do = 0; Do < us.length; Do++){
            var Co = us[Do], _m = Co.toLowerCase(), wm = Co[0].toUpperCase() + Co.slice(1);
            Xt(_m, "on" + wm);
        }
        Xt(Lf, "onAnimationEnd"), Xt(kf, "onAnimationIteration"), Xt(Vf, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(I1, "onTransitionRun"), Xt(X1, "onTransitionStart"), Xt(Z1, "onTransitionCancel"), Xt(Bf, "onTransitionEnd"), Hr("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), Hr("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), Hr("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), Hr("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), cr("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));
        function rp(e, t) {
            t = (t & 4) !== 0;
            for(var n = 0; n < e.length; n++){
                var a = e[n], s = a.event;
                a = a.listeners;
                e: {
                    var c = void 0;
                    if (t) for(var g = a.length - 1; 0 <= g; g--){
                        var v = a[g], C = v.instance, j = v.currentTarget;
                        if (v = v.listener, C !== c && s.isPropagationStopped()) break e;
                        c = v, s.currentTarget = j;
                        try {
                            c(s);
                        } catch (z) {
                            Ni(z);
                        }
                        s.currentTarget = null, c = C;
                    }
                    else for(g = 0; g < a.length; g++){
                        if (v = a[g], C = v.instance, j = v.currentTarget, v = v.listener, C !== c && s.isPropagationStopped()) break e;
                        c = v, s.currentTarget = j;
                        try {
                            c(s);
                        } catch (z) {
                            Ni(z);
                        }
                        s.currentTarget = null, c = C;
                    }
                }
            }
        }
        function pe(e, t) {
            var n = t[we];
            n === void 0 && (n = t[we] = new Set);
            var a = e + "__bubble";
            n.has(a) || (ap(t, e, 2, !1), n.add(a));
        }
        function xo(e, t, n) {
            var a = 0;
            t && (a |= 4), ap(n, e, a, t);
        }
        var Yi = "_reactListening" + Math.random().toString(36).slice(2);
        function Ro(e) {
            if (!e[Yi]) {
                e[Yi] = !0, Jc.forEach(function(n) {
                    n !== "selectionchange" && (Mm.has(n) || xo(n, !1, e), xo(n, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Yi] || (t[Yi] = !0, xo("selectionchange", !1, t));
            }
        }
        function ap(e, t, n, a) {
            switch(Ap(t)){
                case 2:
                    var s = av;
                    break;
                case 8:
                    s = lv;
                    break;
                default:
                    s = qo;
            }
            n = s.bind(null, t, n, e), s = void 0, !Xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), a ? s !== void 0 ? e.addEventListener(t, n, {
                capture: !0,
                passive: s
            }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
                passive: s
            }) : e.addEventListener(t, n, !1);
        }
        function Ao(e, t, n, a, s) {
            var c = a;
            if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for(;;){
                if (a === null) return;
                var g = a.tag;
                if (g === 3 || g === 4) {
                    var v = a.stateNode.containerInfo;
                    if (v === s) break;
                    if (g === 4) for(g = a.return; g !== null;){
                        var C = g.tag;
                        if ((C === 3 || C === 4) && g.stateNode.containerInfo === s) return;
                        g = g.return;
                    }
                    for(; v !== null;){
                        if (g = zr(v), g === null) return;
                        if (C = g.tag, C === 5 || C === 6 || C === 26 || C === 27) {
                            a = c = g;
                            continue e;
                        }
                        v = v.parentNode;
                    }
                }
                a = a.return;
            }
            ff(function() {
                var j = c, z = Yu(n), q = [];
                e: {
                    var P = zf.get(e);
                    if (P !== void 0) {
                        var L = ii, re = e;
                        switch(e){
                            case "keypress":
                                if (ai(n) === 0) break e;
                            case "keydown":
                            case "keyup":
                                L = C1;
                                break;
                            case "focusin":
                                re = "focus", L = Wu;
                                break;
                            case "focusout":
                                re = "blur", L = Wu;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                L = Wu;
                                break;
                            case "click":
                                if (n.button === 2) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                L = pf;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                L = h1;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                L = A1;
                                break;
                            case Lf:
                            case kf:
                            case Vf:
                                L = m1;
                                break;
                            case Bf:
                                L = w1;
                                break;
                            case "scroll":
                            case "scrollend":
                                L = f1;
                                break;
                            case "wheel":
                                L = N1;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                L = y1;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                L = mf;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                L = P1;
                        }
                        var $ = (t & 4) !== 0, Re = !$ && (e === "scroll" || e === "scrollend"), _ = $ ? P !== null ? P + "Capture" : null : P;
                        $ = [];
                        for(var A = j, N; A !== null;){
                            var U = A;
                            if (N = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || N === null || _ === null || (U = Ba(A, _), U != null && $.push(Sl(A, U, N))), Re) break;
                            A = A.return;
                        }
                        0 < $.length && (P = new L(P, re, null, n, z), q.push({
                            event: P,
                            listeners: $
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (P = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", P && n !== Ku && (re = n.relatedTarget || n.fromElement) && (zr(re) || re[Ee])) break e;
                        if ((L || P) && (P = z.window === z ? z : (P = z.ownerDocument) ? P.defaultView || P.parentWindow : window, L ? (re = n.relatedTarget || n.toElement, L = j, re = re ? zr(re) : null, re !== null && (Re = f(re), $ = re.tag, re !== Re || $ !== 5 && $ !== 27 && $ !== 6) && (re = null)) : (L = null, re = j), L !== re)) {
                            if ($ = pf, U = "onMouseLeave", _ = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && ($ = mf, U = "onPointerLeave", _ = "onPointerEnter", A = "pointer"), Re = L == null ? P : Va(L), N = re == null ? P : Va(re), P = new $(U, A + "leave", L, n, z), P.target = Re, P.relatedTarget = N, U = null, zr(z) === j && ($ = new $(_, A + "enter", re, n, z), $.target = N, $.relatedTarget = Re, U = $), Re = U, L && re) t: {
                                for($ = L, _ = re, A = 0, N = $; N; N = ba(N))A++;
                                for(N = 0, U = _; U; U = ba(U))N++;
                                for(; 0 < A - N;)$ = ba($), A--;
                                for(; 0 < N - A;)_ = ba(_), N--;
                                for(; A--;){
                                    if ($ === _ || _ !== null && $ === _.alternate) break t;
                                    $ = ba($), _ = ba(_);
                                }
                                $ = null;
                            }
                            else $ = null;
                            L !== null && lp(q, P, L, $, !1), re !== null && Re !== null && lp(q, Re, re, $, !0);
                        }
                    }
                    e: {
                        if (P = j ? Va(j) : window, L = P.nodeName && P.nodeName.toLowerCase(), L === "select" || L === "input" && P.type === "file") var Z = Df;
                        else if (Of(P)) if (Cf) Z = G1;
                        else {
                            Z = H1;
                            var de = q1;
                        }
                        else L = P.nodeName, !L || L.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? j && Gu(j.elementType) && (Z = Df) : Z = Q1;
                        if (Z && (Z = Z(e, j))) {
                            Tf(q, Z, n, z);
                            break e;
                        }
                        de && de(e, P, j), e === "focusout" && j && P.type === "number" && j.memoizedProps.value != null && Qu(P, "number", P.value);
                    }
                    switch(de = j ? Va(j) : window, e){
                        case "focusin":
                            (Of(de) || de.contentEditable === "true") && (Zr = de, as = j, Ya = null);
                            break;
                        case "focusout":
                            Ya = as = Zr = null;
                            break;
                        case "mousedown":
                            ls = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            ls = !1, jf(q, n, z);
                            break;
                        case "selectionchange":
                            if (Y1) break;
                        case "keydown":
                        case "keyup":
                            jf(q, n, z);
                    }
                    var F;
                    if (es) e: {
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
                    else Xr ? Sf(e, n) && (te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (te = "onCompositionStart");
                    te && (vf && n.locale !== "ko" && (Xr || te !== "onCompositionStart" ? te === "onCompositionEnd" && Xr && (F = df()) : (Pn = z, Zu = "value" in Pn ? Pn.value : Pn.textContent, Xr = !0)), de = Ii(j, te), 0 < de.length && (te = new gf(te, e, null, n, z), q.push({
                        event: te,
                        listeners: de
                    }), F ? te.data = F : (F = Ef(n), F !== null && (te.data = F)))), (F = k1 ? V1(e, n) : B1(e, n)) && (te = Ii(j, "onBeforeInput"), 0 < te.length && (de = new gf("onBeforeInput", "beforeinput", null, n, z), q.push({
                        event: de,
                        listeners: te
                    }), de.data = F)), Am(q, e, j, n, z);
                }
                rp(q, t);
            });
        }
        function Sl(e, t, n) {
            return {
                instance: e,
                listener: t,
                currentTarget: n
            };
        }
        function Ii(e, t) {
            for(var n = t + "Capture", a = []; e !== null;){
                var s = e, c = s.stateNode;
                if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || c === null || (s = Ba(e, n), s != null && a.unshift(Sl(e, s, c)), s = Ba(e, t), s != null && a.push(Sl(e, s, c))), e.tag === 3) return a;
                e = e.return;
            }
            return [];
        }
        function ba(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function lp(e, t, n, a, s) {
            for(var c = t._reactName, g = []; n !== null && n !== a;){
                var v = n, C = v.alternate, j = v.stateNode;
                if (v = v.tag, C !== null && C === a) break;
                v !== 5 && v !== 26 && v !== 27 || j === null || (C = j, s ? (j = Ba(n, c), j != null && g.unshift(Sl(n, j, C))) : s || (j = Ba(n, c), j != null && g.push(Sl(n, j, C)))), n = n.return;
            }
            g.length !== 0 && e.push({
                event: t,
                listeners: g
            });
        }
        var Nm = /\r\n?/g, jm = /\u0000|\uFFFD/g;
        function ip(e) {
            return (typeof e == "string" ? e : "" + e).replace(Nm, `
`).replace(jm, "");
        }
        function up(e, t) {
            return t = ip(t), ip(e) === t;
        }
        function Xi() {}
        function xe(e, t, n, a, s, c) {
            switch(n){
                case "children":
                    typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Kr(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Kr(e, "" + a);
                    break;
                case "className":
                    $l(e, "class", a);
                    break;
                case "tabIndex":
                    $l(e, "tabindex", a);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    $l(e, n, a);
                    break;
                case "style":
                    of(e, a, c);
                    break;
                case "data":
                    if (t !== "object") {
                        $l(e, "data", a);
                        break;
                    }
                case "src":
                case "href":
                    if (a === "" && (t !== "a" || n !== "href")) {
                        e.removeAttribute(n);
                        break;
                    }
                    if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                        e.removeAttribute(n);
                        break;
                    }
                    a = ni("" + a), e.setAttribute(n, a);
                    break;
                case "action":
                case "formAction":
                    if (typeof a == "function") {
                        e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof c == "function" && (n === "formAction" ? (t !== "input" && xe(e, t, "name", s.name, s, null), xe(e, t, "formEncType", s.formEncType, s, null), xe(e, t, "formMethod", s.formMethod, s, null), xe(e, t, "formTarget", s.formTarget, s, null)) : (xe(e, t, "encType", s.encType, s, null), xe(e, t, "method", s.method, s, null), xe(e, t, "target", s.target, s, null)));
                    if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                        e.removeAttribute(n);
                        break;
                    }
                    a = ni("" + a), e.setAttribute(n, a);
                    break;
                case "onClick":
                    a != null && (e.onclick = Xi);
                    break;
                case "onScroll":
                    a != null && pe("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && pe("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
                        if (n = a.__html, n != null) {
                            if (s.children != null) throw Error(u(60));
                            e.innerHTML = n;
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "muted":
                    e.muted = a && typeof a != "function" && typeof a != "symbol";
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
                        e.removeAttribute("xlink:href");
                        break;
                    }
                    n = ni("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
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
                    a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
                    break;
                case "capture":
                case "download":
                    a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
                    break;
                case "rowSpan":
                case "start":
                    a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
                    break;
                case "popover":
                    pe("beforetoggle", e), pe("toggle", e), Wl(e, "popover", a);
                    break;
                case "xlinkActuate":
                    fn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                    break;
                case "xlinkArcrole":
                    fn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                    break;
                case "xlinkRole":
                    fn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                    break;
                case "xlinkShow":
                    fn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                    break;
                case "xlinkTitle":
                    fn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                    break;
                case "xlinkType":
                    fn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                    break;
                case "xmlBase":
                    fn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                    break;
                case "xmlLang":
                    fn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                    break;
                case "xmlSpace":
                    fn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                    break;
                case "is":
                    Wl(e, "is", a);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = o1.get(n) || n, Wl(e, n, a));
            }
        }
        function _o(e, t, n, a, s, c) {
            switch(n){
                case "style":
                    of(e, a, c);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
                        if (n = a.__html, n != null) {
                            if (s.children != null) throw Error(u(60));
                            e.innerHTML = n;
                        }
                    }
                    break;
                case "children":
                    typeof a == "string" ? Kr(e, a) : (typeof a == "number" || typeof a == "bigint") && Kr(e, "" + a);
                    break;
                case "onScroll":
                    a != null && pe("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && pe("scrollend", e);
                    break;
                case "onClick":
                    a != null && (e.onclick = Xi);
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
                    if (!Fc.hasOwnProperty(n)) e: {
                        if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), t = n.slice(2, s ? n.length - 7 : void 0), c = e[ft] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, s), typeof a == "function")) {
                            typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, s);
                            break e;
                        }
                        n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Wl(e, n, a);
                    }
            }
        }
        function it(e, t, n) {
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
                    pe("error", e), pe("load", e);
                    var a = !1, s = !1, c;
                    for(c in n)if (n.hasOwnProperty(c)) {
                        var g = n[c];
                        if (g != null) switch(c){
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                s = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(u(137, t));
                            default:
                                xe(e, t, c, g, n, null);
                        }
                    }
                    s && xe(e, t, "srcSet", n.srcSet, n, null), a && xe(e, t, "src", n.src, n, null);
                    return;
                case "input":
                    pe("invalid", e);
                    var v = c = g = s = null, C = null, j = null;
                    for(a in n)if (n.hasOwnProperty(a)) {
                        var z = n[a];
                        if (z != null) switch(a){
                            case "name":
                                s = z;
                                break;
                            case "type":
                                g = z;
                                break;
                            case "checked":
                                C = z;
                                break;
                            case "defaultChecked":
                                j = z;
                                break;
                            case "value":
                                c = z;
                                break;
                            case "defaultValue":
                                v = z;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (z != null) throw Error(u(137, t));
                                break;
                            default:
                                xe(e, t, a, z, n, null);
                        }
                    }
                    af(e, c, v, C, j, g, s, !1), ei(e);
                    return;
                case "select":
                    pe("invalid", e), a = g = c = null;
                    for(s in n)if (n.hasOwnProperty(s) && (v = n[s], v != null)) switch(s){
                        case "value":
                            c = v;
                            break;
                        case "defaultValue":
                            g = v;
                            break;
                        case "multiple":
                            a = v;
                        default:
                            xe(e, t, s, v, n, null);
                    }
                    t = c, n = g, e.multiple = !!a, t != null ? Gr(e, !!a, t, !1) : n != null && Gr(e, !!a, n, !0);
                    return;
                case "textarea":
                    pe("invalid", e), c = s = a = null;
                    for(g in n)if (n.hasOwnProperty(g) && (v = n[g], v != null)) switch(g){
                        case "value":
                            a = v;
                            break;
                        case "defaultValue":
                            s = v;
                            break;
                        case "children":
                            c = v;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (v != null) throw Error(u(91));
                            break;
                        default:
                            xe(e, t, g, v, n, null);
                    }
                    uf(e, a, s, c), ei(e);
                    return;
                case "option":
                    for(C in n)if (n.hasOwnProperty(C) && (a = n[C], a != null)) switch(C){
                        case "selected":
                            e.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            xe(e, t, C, a, n, null);
                    }
                    return;
                case "dialog":
                    pe("beforetoggle", e), pe("toggle", e), pe("cancel", e), pe("close", e);
                    break;
                case "iframe":
                case "object":
                    pe("load", e);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < bl.length; a++)pe(bl[a], e);
                    break;
                case "image":
                    pe("error", e), pe("load", e);
                    break;
                case "details":
                    pe("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    pe("error", e), pe("load", e);
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
                    for(j in n)if (n.hasOwnProperty(j) && (a = n[j], a != null)) switch(j){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(u(137, t));
                        default:
                            xe(e, t, j, a, n, null);
                    }
                    return;
                default:
                    if (Gu(t)) {
                        for(z in n)n.hasOwnProperty(z) && (a = n[z], a !== void 0 && _o(e, t, z, a, n, void 0));
                        return;
                    }
            }
            for(v in n)n.hasOwnProperty(v) && (a = n[v], a != null && xe(e, t, v, a, n, null));
        }
        function Pm(e, t, n, a) {
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
                    var s = null, c = null, g = null, v = null, C = null, j = null, z = null;
                    for(L in n){
                        var q = n[L];
                        if (n.hasOwnProperty(L) && q != null) switch(L){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                C = q;
                            default:
                                a.hasOwnProperty(L) || xe(e, t, L, null, a, q);
                        }
                    }
                    for(var P in a){
                        var L = a[P];
                        if (q = n[P], a.hasOwnProperty(P) && (L != null || q != null)) switch(P){
                            case "type":
                                c = L;
                                break;
                            case "name":
                                s = L;
                                break;
                            case "checked":
                                j = L;
                                break;
                            case "defaultChecked":
                                z = L;
                                break;
                            case "value":
                                g = L;
                                break;
                            case "defaultValue":
                                v = L;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (L != null) throw Error(u(137, t));
                                break;
                            default:
                                L !== q && xe(e, t, P, L, a, q);
                        }
                    }
                    Hu(e, g, v, C, j, z, c, s);
                    return;
                case "select":
                    L = g = v = P = null;
                    for(c in n)if (C = n[c], n.hasOwnProperty(c) && C != null) switch(c){
                        case "value":
                            break;
                        case "multiple":
                            L = C;
                        default:
                            a.hasOwnProperty(c) || xe(e, t, c, null, a, C);
                    }
                    for(s in a)if (c = a[s], C = n[s], a.hasOwnProperty(s) && (c != null || C != null)) switch(s){
                        case "value":
                            P = c;
                            break;
                        case "defaultValue":
                            v = c;
                            break;
                        case "multiple":
                            g = c;
                        default:
                            c !== C && xe(e, t, s, c, a, C);
                    }
                    t = v, n = g, a = L, P != null ? Gr(e, !!n, P, !1) : !!a != !!n && (t != null ? Gr(e, !!n, t, !0) : Gr(e, !!n, n ? [] : "", !1));
                    return;
                case "textarea":
                    L = P = null;
                    for(v in n)if (s = n[v], n.hasOwnProperty(v) && s != null && !a.hasOwnProperty(v)) switch(v){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            xe(e, t, v, null, a, s);
                    }
                    for(g in a)if (s = a[g], c = n[g], a.hasOwnProperty(g) && (s != null || c != null)) switch(g){
                        case "value":
                            P = s;
                            break;
                        case "defaultValue":
                            L = s;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (s != null) throw Error(u(91));
                            break;
                        default:
                            s !== c && xe(e, t, g, s, a, c);
                    }
                    lf(e, P, L);
                    return;
                case "option":
                    for(var re in n)if (P = n[re], n.hasOwnProperty(re) && P != null && !a.hasOwnProperty(re)) switch(re){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            xe(e, t, re, null, a, P);
                    }
                    for(C in a)if (P = a[C], L = n[C], a.hasOwnProperty(C) && P !== L && (P != null || L != null)) switch(C){
                        case "selected":
                            e.selected = P && typeof P != "function" && typeof P != "symbol";
                            break;
                        default:
                            xe(e, t, C, P, a, L);
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
                    for(var $ in n)P = n[$], n.hasOwnProperty($) && P != null && !a.hasOwnProperty($) && xe(e, t, $, null, a, P);
                    for(j in a)if (P = a[j], L = n[j], a.hasOwnProperty(j) && P !== L && (P != null || L != null)) switch(j){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (P != null) throw Error(u(137, t));
                            break;
                        default:
                            xe(e, t, j, P, a, L);
                    }
                    return;
                default:
                    if (Gu(t)) {
                        for(var Re in n)P = n[Re], n.hasOwnProperty(Re) && P !== void 0 && !a.hasOwnProperty(Re) && _o(e, t, Re, void 0, a, P);
                        for(z in a)P = a[z], L = n[z], !a.hasOwnProperty(z) || P === L || P === void 0 && L === void 0 || _o(e, t, z, P, a, L);
                        return;
                    }
            }
            for(var _ in n)P = n[_], n.hasOwnProperty(_) && P != null && !a.hasOwnProperty(_) && xe(e, t, _, null, a, P);
            for(q in a)P = a[q], L = n[q], !a.hasOwnProperty(q) || P === L || P == null && L == null || xe(e, t, q, P, a, L);
        }
        var wo = null, Mo = null;
        function Zi(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function sp(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function op(e, t) {
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
        function No(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var jo = null;
        function Lm() {
            var e = window.event;
            return e && e.type === "popstate" ? e === jo ? !1 : (jo = e, !0) : (jo = null, !1);
        }
        var cp = typeof setTimeout == "function" ? setTimeout : void 0, km = typeof clearTimeout == "function" ? clearTimeout : void 0, fp = typeof Promise == "function" ? Promise : void 0, Vm = typeof queueMicrotask == "function" ? queueMicrotask : typeof fp < "u" ? function(e) {
            return fp.resolve(null).then(e).catch(Bm);
        } : cp;
        function Bm(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Jn(e) {
            return e === "head";
        }
        function dp(e, t) {
            var n = t, a = 0, s = 0;
            do {
                var c = n.nextSibling;
                if (e.removeChild(n), c && c.nodeType === 8) if (n = c.data, n === "/$") {
                    if (0 < a && 8 > a) {
                        n = a;
                        var g = e.ownerDocument;
                        if (n & 1 && El(g.documentElement), n & 2 && El(g.body), n & 4) for(n = g.head, El(n), g = n.firstChild; g;){
                            var v = g.nextSibling, C = g.nodeName;
                            g[rt] || C === "SCRIPT" || C === "STYLE" || C === "LINK" && g.rel.toLowerCase() === "stylesheet" || n.removeChild(g), g = v;
                        }
                    }
                    if (s === 0) {
                        e.removeChild(c), _l(t);
                        return;
                    }
                    s--;
                } else n === "$" || n === "$?" || n === "$!" ? s++ : a = n.charCodeAt(0) - 48;
                else a = 0;
                n = c;
            }while (n);
            _l(t);
        }
        function Po(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var n = t;
                switch(t = t.nextSibling, n.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Po(n), ka(n);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (n.rel.toLowerCase() === "stylesheet") continue;
                }
                e.removeChild(n);
            }
        }
        function zm(e, t, n, a) {
            for(; e.nodeType === 1;){
                var s = n;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (a) {
                    if (!e[rt]) switch(t){
                        case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                        case "link":
                            if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (c !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (c = e.getAttribute("src"), (c !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var c = s.name == null ? null : "" + s.name;
                    if (s.type === "hidden" && e.getAttribute("name") === c) return e;
                } else return e;
                if (e = Jt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function Um(e, t, n) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Jt(e.nextSibling), e === null)) return null;
            return e;
        }
        function Lo(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function qm(e, t) {
            var n = e.ownerDocument;
            if (e.data !== "$?" || n.readyState === "complete") t();
            else {
                var a = function() {
                    t(), n.removeEventListener("DOMContentLoaded", a);
                };
                n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
            }
        }
        function Jt(e) {
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
        var ko = null;
        function hp(e) {
            e = e.previousSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "$" || n === "$!" || n === "$?") {
                        if (t === 0) return e;
                        t--;
                    } else n === "/$" && t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        function pp(e, t, n) {
            switch(t = Zi(n), e){
                case "html":
                    if (e = t.documentElement, !e) throw Error(u(452));
                    return e;
                case "head":
                    if (e = t.head, !e) throw Error(u(453));
                    return e;
                case "body":
                    if (e = t.body, !e) throw Error(u(454));
                    return e;
                default:
                    throw Error(u(451));
            }
        }
        function El(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            ka(e);
        }
        var Qt = new Map, gp = new Set;
        function Ji(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var Cn = K.d;
        K.d = {
            f: Hm,
            r: Qm,
            D: Gm,
            C: Km,
            L: Ym,
            m: Im,
            X: Zm,
            S: Xm,
            M: Jm
        };
        function Hm() {
            var e = Cn.f(), t = qi();
            return e || t;
        }
        function Qm(e) {
            var t = Ur(e);
            t !== null && t.tag === 5 && t.type === "form" ? Ld(t) : Cn.r(e);
        }
        var Sa = typeof document > "u" ? null : document;
        function mp(e, t, n) {
            var a = Sa;
            if (a && typeof t == "string" && t) {
                var s = kt(t);
                s = 'link[rel="' + e + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), gp.has(s) || (gp.add(s), e = {
                    rel: e,
                    crossOrigin: n,
                    href: t
                }, a.querySelector(s) === null && (t = a.createElement("link"), it(t, "link", e), We(t), a.head.appendChild(t)));
            }
        }
        function Gm(e) {
            Cn.D(e), mp("dns-prefetch", e, null);
        }
        function Km(e, t) {
            Cn.C(e, t), mp("preconnect", e, t);
        }
        function Ym(e, t, n) {
            Cn.L(e, t, n);
            var a = Sa;
            if (a && e && t) {
                var s = 'link[rel="preload"][as="' + kt(t) + '"]';
                t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + kt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + kt(n.imageSizes) + '"]')) : s += '[href="' + kt(e) + '"]';
                var c = s;
                switch(t){
                    case "style":
                        c = Ea(e);
                        break;
                    case "script":
                        c = Oa(e);
                }
                Qt.has(c) || (e = b({
                    rel: "preload",
                    href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                    as: t
                }, n), Qt.set(c, e), a.querySelector(s) !== null || t === "style" && a.querySelector(Ol(c)) || t === "script" && a.querySelector(Tl(c)) || (t = a.createElement("link"), it(t, "link", e), We(t), a.head.appendChild(t)));
            }
        }
        function Im(e, t) {
            Cn.m(e, t);
            var n = Sa;
            if (n && e) {
                var a = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + kt(a) + '"][href="' + kt(e) + '"]', c = s;
                switch(a){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        c = Oa(e);
                }
                if (!Qt.has(c) && (e = b({
                    rel: "modulepreload",
                    href: e
                }, t), Qt.set(c, e), n.querySelector(s) === null)) {
                    switch(a){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (n.querySelector(Tl(c))) return;
                    }
                    a = n.createElement("link"), it(a, "link", e), We(a), n.head.appendChild(a);
                }
            }
        }
        function Xm(e, t, n) {
            Cn.S(e, t, n);
            var a = Sa;
            if (a && e) {
                var s = qr(a).hoistableStyles, c = Ea(e);
                t = t || "default";
                var g = s.get(c);
                if (!g) {
                    var v = {
                        loading: 0,
                        preload: null
                    };
                    if (g = a.querySelector(Ol(c))) v.loading = 5;
                    else {
                        e = b({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, n), (n = Qt.get(c)) && Vo(e, n);
                        var C = g = a.createElement("link");
                        We(C), it(C, "link", e), C._p = new Promise(function(j, z) {
                            C.onload = j, C.onerror = z;
                        }), C.addEventListener("load", function() {
                            v.loading |= 1;
                        }), C.addEventListener("error", function() {
                            v.loading |= 2;
                        }), v.loading |= 4, Fi(g, t, a);
                    }
                    g = {
                        type: "stylesheet",
                        instance: g,
                        count: 1,
                        state: v
                    }, s.set(c, g);
                }
            }
        }
        function Zm(e, t) {
            Cn.X(e, t);
            var n = Sa;
            if (n && e) {
                var a = qr(n).hoistableScripts, s = Oa(e), c = a.get(s);
                c || (c = n.querySelector(Tl(s)), c || (e = b({
                    src: e,
                    async: !0
                }, t), (t = Qt.get(s)) && Bo(e, t), c = n.createElement("script"), We(c), it(c, "link", e), n.head.appendChild(c)), c = {
                    type: "script",
                    instance: c,
                    count: 1,
                    state: null
                }, a.set(s, c));
            }
        }
        function Jm(e, t) {
            Cn.M(e, t);
            var n = Sa;
            if (n && e) {
                var a = qr(n).hoistableScripts, s = Oa(e), c = a.get(s);
                c || (c = n.querySelector(Tl(s)), c || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Qt.get(s)) && Bo(e, t), c = n.createElement("script"), We(c), it(c, "link", e), n.head.appendChild(c)), c = {
                    type: "script",
                    instance: c,
                    count: 1,
                    state: null
                }, a.set(s, c));
            }
        }
        function vp(e, t, n, a) {
            var s = (s = ee.current) ? Ji(s) : null;
            if (!s) throw Error(u(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ea(n.href), n = qr(s).hoistableStyles, a = n.get(t), a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, n.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                        e = Ea(n.href);
                        var c = qr(s).hoistableStyles, g = c.get(e);
                        if (g || (s = s.ownerDocument || s, g = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, c.set(e, g), (c = s.querySelector(Ol(e))) && !c._p && (g.instance = c, g.state.loading = 5), Qt.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Qt.set(e, n), c || Fm(s, e, n, g.state))), t && a === null) throw Error(u(528, ""));
                        return g;
                    }
                    if (t && a !== null) throw Error(u(529, ""));
                    return null;
                case "script":
                    return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oa(n), n = qr(s).hoistableScripts, a = n.get(t), a || (a = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, n.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(u(444, e));
            }
        }
        function Ea(e) {
            return 'href="' + kt(e) + '"';
        }
        function Ol(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function yp(e) {
            return b({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function Fm(e, t, n, a) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
                return a.loading |= 1;
            }), t.addEventListener("error", function() {
                return a.loading |= 2;
            }), it(t, "link", n), We(t), e.head.appendChild(t));
        }
        function Oa(e) {
            return '[src="' + kt(e) + '"]';
        }
        function Tl(e) {
            return "script[async]" + e;
        }
        function bp(e, t, n) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var a = e.querySelector('style[data-href~="' + kt(n.href) + '"]');
                    if (a) return t.instance = a, We(a), a;
                    var s = b({}, n, {
                        "data-href": n.href,
                        "data-precedence": n.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (e.ownerDocument || e).createElement("style"), We(a), it(a, "style", s), Fi(a, n.precedence, e), t.instance = a;
                case "stylesheet":
                    s = Ea(n.href);
                    var c = e.querySelector(Ol(s));
                    if (c) return t.state.loading |= 4, t.instance = c, We(c), c;
                    a = yp(n), (s = Qt.get(s)) && Vo(a, s), c = (e.ownerDocument || e).createElement("link"), We(c);
                    var g = c;
                    return g._p = new Promise(function(v, C) {
                        g.onload = v, g.onerror = C;
                    }), it(c, "link", a), t.state.loading |= 4, Fi(c, n.precedence, e), t.instance = c;
                case "script":
                    return c = Oa(n.src), (s = e.querySelector(Tl(c))) ? (t.instance = s, We(s), s) : (a = n, (s = Qt.get(c)) && (a = b({}, n), Bo(a, s)), e = e.ownerDocument || e, s = e.createElement("script"), We(s), it(s, "link", a), e.head.appendChild(s), t.instance = s);
                case "void":
                    return null;
                default:
                    throw Error(u(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Fi(a, n.precedence, e));
            return t.instance;
        }
        function Fi(e, t, n) {
            for(var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = a.length ? a[a.length - 1] : null, c = s, g = 0; g < a.length; g++){
                var v = a[g];
                if (v.dataset.precedence === t) c = v;
                else if (c !== s) break;
            }
            c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
        }
        function Vo(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Bo(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var Wi = null;
        function Sp(e, t, n) {
            if (Wi === null) {
                var a = new Map, s = Wi = new Map;
                s.set(n, a);
            } else s = Wi, a = s.get(n), a || (a = new Map, s.set(n, a));
            if (a.has(e)) return a;
            for(a.set(e, null), n = n.getElementsByTagName(e), s = 0; s < n.length; s++){
                var c = n[s];
                if (!(c[rt] || c[Fe] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var g = c.getAttribute(t) || "";
                    g = e + g;
                    var v = a.get(g);
                    v ? v.push(c) : a.set(g, [
                        c
                    ]);
                }
            }
            return a;
        }
        function Ep(e, t, n) {
            e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
        }
        function Wm(e, t, n) {
            if (n === 1 || t.itemProp != null) return !1;
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
        function Op(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var Dl = null;
        function $m() {}
        function ev(e, t, n) {
            if (Dl === null) throw Error(u(475));
            var a = Dl;
            if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var s = Ea(n.href), c = e.querySelector(Ol(s));
                    if (c) {
                        e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = $i.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = c, We(c);
                        return;
                    }
                    c = e.ownerDocument || e, n = yp(n), (s = Qt.get(s)) && Vo(n, s), c = c.createElement("link"), We(c);
                    var g = c;
                    g._p = new Promise(function(v, C) {
                        g.onload = v, g.onerror = C;
                    }), it(c, "link", n), t.instance = c;
                }
                a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = $i.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function tv() {
            if (Dl === null) throw Error(u(475));
            var e = Dl;
            return e.stylesheets && e.count === 0 && zo(e, e.stylesheets), 0 < e.count ? function(t) {
                var n = setTimeout(function() {
                    if (e.stylesheets && zo(e, e.stylesheets), e.unsuspend) {
                        var a = e.unsuspend;
                        e.unsuspend = null, a();
                    }
                }, 6e4);
                return e.unsuspend = t, function() {
                    e.unsuspend = null, clearTimeout(n);
                };
            } : null;
        }
        function $i() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) zo(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var eu = null;
        function zo(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, eu = new Map, t.forEach(nv, e), eu = null, $i.call(e));
        }
        function nv(e, t) {
            if (!(t.state.loading & 4)) {
                var n = eu.get(e);
                if (n) var a = n.get(null);
                else {
                    n = new Map, eu.set(e, n);
                    for(var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < s.length; c++){
                        var g = s[c];
                        (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (n.set(g.dataset.precedence, g), a = g);
                    }
                    a && n.set(null, a);
                }
                s = t.instance, g = s.getAttribute("data-precedence"), c = n.get(g) || a, c === a && n.set(null, s), n.set(g, s), this.count++, a = $i.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), c ? c.parentNode.insertBefore(s, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
            }
        }
        var Cl = {
            $$typeof: V,
            Provider: null,
            Consumer: null,
            _currentValue: W,
            _currentValue2: W,
            _threadCount: 0
        };
        function rv(e, t, n, a, s, c, g, v) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pa(0), this.hiddenUpdates = Pa(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = c, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = new Map;
        }
        function Tp(e, t, n, a, s, c, g, v, C, j, z, q) {
            return e = new rv(e, t, n, g, v, C, j, q), t = 1, c === !0 && (t |= 24), c = xt(3, null, null, t), e.current = c, c.stateNode = e, t = bs(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
                element: a,
                isDehydrated: n,
                cache: t
            }, Ts(c), e;
        }
        function Dp(e) {
            return e ? (e = $r, e) : $r;
        }
        function Cp(e, t, n, a, s, c) {
            s = Dp(s), a.context === null ? a.context = s : a.pendingContext = s, a = Vn(t), a.payload = {
                element: n
            }, c = c === void 0 ? null : c, c !== null && (a.callback = c), n = Bn(e, a, t), n !== null && (Mt(n, e, t), tl(n, e, t));
        }
        function xp(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var n = e.retryLane;
                e.retryLane = n !== 0 && n < t ? n : t;
            }
        }
        function Uo(e, t) {
            xp(e, t), (e = e.alternate) && xp(e, t);
        }
        function Rp(e) {
            if (e.tag === 13) {
                var t = Wr(e, 67108864);
                t !== null && Mt(t, e, 67108864), Uo(e, 67108864);
            }
        }
        var tu = !0;
        function av(e, t, n, a) {
            var s = B.T;
            B.T = null;
            var c = K.p;
            try {
                K.p = 2, qo(e, t, n, a);
            } finally{
                K.p = c, B.T = s;
            }
        }
        function lv(e, t, n, a) {
            var s = B.T;
            B.T = null;
            var c = K.p;
            try {
                K.p = 8, qo(e, t, n, a);
            } finally{
                K.p = c, B.T = s;
            }
        }
        function qo(e, t, n, a) {
            if (tu) {
                var s = Ho(a);
                if (s === null) Ao(e, t, a, nu, n), _p(e, a);
                else if (uv(s, e, t, n, a)) a.stopPropagation();
                else if (_p(e, a), t & 4 && -1 < iv.indexOf(e)) {
                    for(; s !== null;){
                        var c = Ur(s);
                        if (c !== null) switch(c.tag){
                            case 3:
                                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                                    var g = Pt(c.pendingLanes);
                                    if (g !== 0) {
                                        var v = c;
                                        for(v.pendingLanes |= 2, v.entangledLanes |= 2; g;){
                                            var C = 1 << 31 - vt(g);
                                            v.entanglements[1] |= C, g &= ~C;
                                        }
                                        an(c), (Te & 6) === 0 && (zi = jt() + 500, yl(0));
                                    }
                                }
                                break;
                            case 13:
                                v = Wr(c, 2), v !== null && Mt(v, c, 2), qi(), Uo(c, 2);
                        }
                        if (c = Ho(a), c === null && Ao(e, t, a, nu, n), c === s) break;
                        s = c;
                    }
                    s !== null && a.stopPropagation();
                } else Ao(e, t, a, null, n);
            }
        }
        function Ho(e) {
            return e = Yu(e), Qo(e);
        }
        var nu = null;
        function Qo(e) {
            if (nu = null, e = zr(e), e !== null) {
                var t = f(e);
                if (t === null) e = null;
                else {
                    var n = t.tag;
                    if (n === 13) {
                        if (e = d(t), e !== null) return e;
                        e = null;
                    } else if (n === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return nu = e, null;
        }
        function Ap(e) {
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
                    switch(Aa()){
                        case Zl:
                            return 2;
                        case _a:
                            return 8;
                        case Nr:
                        case wa:
                            return 32;
                        case Ma:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Go = !1, Fn = null, Wn = null, $n = null, xl = new Map, Rl = new Map, er = [], iv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function _p(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Fn = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Wn = null;
                    break;
                case "mouseover":
                case "mouseout":
                    $n = null;
                    break;
                case "pointerover":
                case "pointerout":
                    xl.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Rl.delete(t.pointerId);
            }
        }
        function Al(e, t, n, a, s, c) {
            return e === null || e.nativeEvent !== c ? (e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: a,
                nativeEvent: c,
                targetContainers: [
                    s
                ]
            }, t !== null && (t = Ur(t), t !== null && Rp(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
        }
        function uv(e, t, n, a, s) {
            switch(t){
                case "focusin":
                    return Fn = Al(Fn, e, t, n, a, s), !0;
                case "dragenter":
                    return Wn = Al(Wn, e, t, n, a, s), !0;
                case "mouseover":
                    return $n = Al($n, e, t, n, a, s), !0;
                case "pointerover":
                    var c = s.pointerId;
                    return xl.set(c, Al(xl.get(c) || null, e, t, n, a, s)), !0;
                case "gotpointercapture":
                    return c = s.pointerId, Rl.set(c, Al(Rl.get(c) || null, e, t, n, a, s)), !0;
            }
            return !1;
        }
        function wp(e) {
            var t = zr(e.target);
            if (t !== null) {
                var n = f(t);
                if (n !== null) {
                    if (t = n.tag, t === 13) {
                        if (t = d(n), t !== null) {
                            e.blockedOn = t, Bu(e.priority, function() {
                                if (n.tag === 13) {
                                    var a = wt();
                                    a = La(a);
                                    var s = Wr(n, a);
                                    s !== null && Mt(s, n, a), Uo(n, a);
                                }
                            });
                            return;
                        }
                    } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function ru(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var n = Ho(e.nativeEvent);
                if (n === null) {
                    n = e.nativeEvent;
                    var a = new n.constructor(n.type, n);
                    Ku = a, n.target.dispatchEvent(a), Ku = null;
                } else return t = Ur(n), t !== null && Rp(t), e.blockedOn = n, !1;
                t.shift();
            }
            return !0;
        }
        function Mp(e, t, n) {
            ru(e) && n.delete(t);
        }
        function sv() {
            Go = !1, Fn !== null && ru(Fn) && (Fn = null), Wn !== null && ru(Wn) && (Wn = null), $n !== null && ru($n) && ($n = null), xl.forEach(Mp), Rl.forEach(Mp);
        }
        function au(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Go || (Go = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, sv)));
        }
        var lu = null;
        function Np(e) {
            lu !== e && (lu = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
                lu === e && (lu = null);
                for(var t = 0; t < e.length; t += 3){
                    var n = e[t], a = e[t + 1], s = e[t + 2];
                    if (typeof a != "function") {
                        if (Qo(a || n) === null) continue;
                        break;
                    }
                    var c = Ur(n);
                    c !== null && (e.splice(t, 3), t -= 3, Hs(c, {
                        pending: !0,
                        data: s,
                        method: n.method,
                        action: a
                    }, a, s));
                }
            }));
        }
        function _l(e) {
            function t(C) {
                return au(C, e);
            }
            Fn !== null && au(Fn, e), Wn !== null && au(Wn, e), $n !== null && au($n, e), xl.forEach(t), Rl.forEach(t);
            for(var n = 0; n < er.length; n++){
                var a = er[n];
                a.blockedOn === e && (a.blockedOn = null);
            }
            for(; 0 < er.length && (n = er[0], n.blockedOn === null);)wp(n), n.blockedOn === null && er.shift();
            if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for(a = 0; a < n.length; a += 3){
                var s = n[a], c = n[a + 1], g = s[ft] || null;
                if (typeof c == "function") g || Np(n);
                else if (g) {
                    var v = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (s = c, g = c[ft] || null) v = g.formAction;
                        else if (Qo(s) !== null) continue;
                    } else v = g.action;
                    typeof v == "function" ? n[a + 1] = v : (n.splice(a, 3), a -= 3), Np(n);
                }
            }
        }
        function Ko(e) {
            this._internalRoot = e;
        }
        iu.prototype.render = Ko.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(u(409));
            var n = t.current, a = wt();
            Cp(n, a, e, t, null, null);
        }, iu.prototype.unmount = Ko.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Cp(e.current, 2, null, e, null, null), qi(), t[Ee] = null;
            }
        };
        function iu(e) {
            this._internalRoot = e;
        }
        iu.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Br();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var n = 0; n < er.length && t !== 0 && t < er[n].priority; n++);
                er.splice(n, 0, e), n === 0 && wp(e);
            }
        };
        var jp = r.version;
        if (jp !== "19.1.0") throw Error(u(527, jp, "19.1.0"));
        K.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
            return e = p(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var ov = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: B,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!uu.isDisabled && uu.supportsFiber) try {
                on = uu.inject(ov), Je = uu;
            } catch  {}
        }
        return Ml.createRoot = function(e, t) {
            if (!o(e)) throw Error(u(299));
            var n = !1, a = "", s = Zd, c = Jd, g = Fd, v = null;
            return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = Tp(e, 1, !1, null, null, n, a, s, c, g, v, null), e[Ee] = t.current, Ro(e), new Ko(t);
        }, Ml.hydrateRoot = function(e, t, n) {
            if (!o(e)) throw Error(u(299));
            var a = !1, s = "", c = Zd, g = Jd, v = Fd, C = null, j = null;
            return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (C = n.unstable_transitionCallbacks), n.formState !== void 0 && (j = n.formState)), t = Tp(e, 1, !0, t, n ?? null, a, s, c, g, v, C, j), t.context = Dp(null), n = t.current, a = wt(), a = La(a), s = Vn(a), s.callback = null, Bn(n, s, a), n = a, t.current.lanes = n, or(t, n), an(t), e[Ee] = t.current, Ro(e), new iu(t);
        }, Ml.version = "19.1.0", Ml;
    }
    var Qp;
    function Sv() {
        if (Qp) return Xo.exports;
        Qp = 1;
        function l() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (r) {
                console.error(r);
            }
        }
        return l(), Xo.exports = bv(), Xo.exports;
    }
    var Ev = Sv(), Wo = {
        exports: {}
    }, $o = {};
    var Gp;
    function Ov() {
        if (Gp) return $o;
        Gp = 1;
        var l = Ru();
        function r(p, m) {
            return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
        }
        var i = typeof Object.is == "function" ? Object.is : r, u = l.useSyncExternalStore, o = l.useRef, f = l.useEffect, d = l.useMemo, h = l.useDebugValue;
        return $o.useSyncExternalStoreWithSelector = function(p, m, b, E, S) {
            var D = o(null);
            if (D.current === null) {
                var T = {
                    hasValue: !1,
                    value: null
                };
                D.current = T;
            } else T = D.current;
            D = d(function() {
                function M(G) {
                    if (!w) {
                        if (w = !0, k = G, G = E(G), S !== void 0 && T.hasValue) {
                            var Y = T.value;
                            if (S(Y, G)) return V = Y;
                        }
                        return V = G;
                    }
                    if (Y = V, i(k, G)) return Y;
                    var le = E(G);
                    return S !== void 0 && S(Y, le) ? (k = G, Y) : (k = G, V = le);
                }
                var w = !1, k, V, Q = b === void 0 ? null : b;
                return [
                    function() {
                        return M(m());
                    },
                    Q === null ? void 0 : function() {
                        return M(Q());
                    }
                ];
            }, [
                m,
                b,
                E,
                S
            ]);
            var R = u(p, D[0], D[1]);
            return f(function() {
                T.hasValue = !0, T.value = R;
            }, [
                R
            ]), h(R), R;
        }, $o;
    }
    var Kp;
    function Tv() {
        return Kp || (Kp = 1, Wo.exports = Ov()), Wo.exports;
    }
    var Dv = Tv();
    function Cv(l) {
        l();
    }
    function xv() {
        let l = null, r = null;
        return {
            clear () {
                l = null, r = null;
            },
            notify () {
                Cv(()=>{
                    let i = l;
                    for(; i;)i.callback(), i = i.next;
                });
            },
            get () {
                const i = [];
                let u = l;
                for(; u;)i.push(u), u = u.next;
                return i;
            },
            subscribe (i) {
                let u = !0;
                const o = r = {
                    callback: i,
                    next: null,
                    prev: r
                };
                return o.prev ? o.prev.next = o : l = o, function() {
                    !u || l === null || (u = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : l = o.next);
                };
            }
        };
    }
    var Yp = {
        notify () {},
        get: ()=>[]
    };
    function Rv(l, r) {
        let i, u = Yp, o = 0, f = !1;
        function d(R) {
            b();
            const M = u.subscribe(R);
            let w = !1;
            return ()=>{
                w || (w = !0, M(), E());
            };
        }
        function h() {
            u.notify();
        }
        function p() {
            T.onStateChange && T.onStateChange();
        }
        function m() {
            return f;
        }
        function b() {
            o++, i || (i = l.subscribe(p), u = xv());
        }
        function E() {
            o--, i && o === 0 && (i(), i = void 0, u.clear(), u = Yp);
        }
        function S() {
            f || (f = !0, b());
        }
        function D() {
            f && (f = !1, E());
        }
        const T = {
            addNestedSub: d,
            notifyNestedSubs: h,
            handleChangeWrapper: p,
            isSubscribed: m,
            trySubscribe: S,
            tryUnsubscribe: D,
            getListeners: ()=>u
        };
        return T;
    }
    var Av = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _v = Av(), wv = ()=>typeof navigator < "u" && navigator.product === "ReactNative", Mv = wv(), Nv = ()=>_v || Mv ? O.useLayoutEffect : O.useEffect, jv = Nv(), Pv = Symbol.for("react-redux-context"), Lv = typeof globalThis < "u" ? globalThis : {};
    function kv() {
        if (!O.createContext) return {};
        const l = Lv[Pv] ??= new Map;
        let r = l.get(O.createContext);
        return r || (r = O.createContext(null), l.set(O.createContext, r)), r;
    }
    var ir = kv();
    function Vv(l) {
        const { children: r, context: i, serverState: u, store: o } = l, f = O.useMemo(()=>{
            const p = Rv(o);
            return {
                store: o,
                subscription: p,
                getServerState: u ? ()=>u : void 0
            };
        }, [
            o,
            u
        ]), d = O.useMemo(()=>o.getState(), [
            o
        ]);
        jv(()=>{
            const { subscription: p } = f;
            return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), d !== o.getState() && p.notifyNestedSubs(), ()=>{
                p.tryUnsubscribe(), p.onStateChange = void 0;
            };
        }, [
            f,
            d
        ]);
        const h = i || ir;
        return O.createElement(h.Provider, {
            value: f
        }, r);
    }
    var Bv = Vv;
    function Mc(l = ir) {
        return function() {
            return O.useContext(l);
        };
    }
    var Bg = Mc();
    function zg(l = ir) {
        const r = l === ir ? Bg : Mc(l), i = ()=>{
            const { store: u } = r();
            return u;
        };
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    var zv = zg();
    function Uv(l = ir) {
        const r = l === ir ? zv : zg(l), i = ()=>r().dispatch;
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    var ur = Uv(), qv = (l, r)=>l === r;
    function Hv(l = ir) {
        const r = l === ir ? Bg : Mc(l), i = (u, o = {})=>{
            const { equalityFn: f = qv } = typeof o == "function" ? {
                equalityFn: o
            } : o, d = r(), { store: h, subscription: p, getServerState: m } = d;
            O.useRef(!0);
            const b = O.useCallback({
                [u.name] (S) {
                    return u(S);
                }
            }[u.name], [
                u
            ]), E = Dv.useSyncExternalStoreWithSelector(p.addNestedSub, h.getState, m || h.getState, b, f);
            return O.useDebugValue(E), E;
        };
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    var Nt = Hv();
    function ut(l) {
        return `Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Qv = typeof Symbol == "function" && Symbol.observable || "@@observable", Ip = Qv, ec = ()=>Math.random().toString(36).substring(7).split("").join("."), Gv = {
        INIT: `@@redux/INIT${ec()}`,
        REPLACE: `@@redux/REPLACE${ec()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${ec()}`
    }, Tu = Gv;
    function Ug(l) {
        if (typeof l != "object" || l === null) return !1;
        let r = l;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(l) === r || Object.getPrototypeOf(l) === null;
    }
    function Nc(l, r, i) {
        if (typeof l != "function") throw new Error(ut(2));
        if (typeof r == "function" && typeof i == "function" || typeof i == "function" && typeof arguments[3] == "function") throw new Error(ut(0));
        if (typeof r == "function" && typeof i > "u" && (i = r, r = void 0), typeof i < "u") {
            if (typeof i != "function") throw new Error(ut(1));
            return i(Nc)(l, r);
        }
        let u = l, o = r, f = new Map, d = f, h = 0, p = !1;
        function m() {
            d === f && (d = new Map, f.forEach((M, w)=>{
                d.set(w, M);
            }));
        }
        function b() {
            if (p) throw new Error(ut(3));
            return o;
        }
        function E(M) {
            if (typeof M != "function") throw new Error(ut(4));
            if (p) throw new Error(ut(5));
            let w = !0;
            m();
            const k = h++;
            return d.set(k, M), function() {
                if (w) {
                    if (p) throw new Error(ut(6));
                    w = !1, m(), d.delete(k), f = null;
                }
            };
        }
        function S(M) {
            if (!Ug(M)) throw new Error(ut(7));
            if (typeof M.type > "u") throw new Error(ut(8));
            if (typeof M.type != "string") throw new Error(ut(17));
            if (p) throw new Error(ut(9));
            try {
                p = !0, o = u(o, M);
            } finally{
                p = !1;
            }
            return (f = d).forEach((k)=>{
                k();
            }), M;
        }
        function D(M) {
            if (typeof M != "function") throw new Error(ut(10));
            u = M, S({
                type: Tu.REPLACE
            });
        }
        function T() {
            const M = E;
            return {
                subscribe (w) {
                    if (typeof w != "object" || w === null) throw new Error(ut(11));
                    function k() {
                        const Q = w;
                        Q.next && Q.next(b());
                    }
                    return k(), {
                        unsubscribe: M(k)
                    };
                },
                [Ip] () {
                    return this;
                }
            };
        }
        return S({
            type: Tu.INIT
        }), {
            dispatch: S,
            subscribe: E,
            getState: b,
            replaceReducer: D,
            [Ip]: T
        };
    }
    function Kv(l) {
        Object.keys(l).forEach((r)=>{
            const i = l[r];
            if (typeof i(void 0, {
                type: Tu.INIT
            }) > "u") throw new Error(ut(12));
            if (typeof i(void 0, {
                type: Tu.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(ut(13));
        });
    }
    function qg(l) {
        const r = Object.keys(l), i = {};
        for(let f = 0; f < r.length; f++){
            const d = r[f];
            typeof l[d] == "function" && (i[d] = l[d]);
        }
        const u = Object.keys(i);
        let o;
        try {
            Kv(i);
        } catch (f) {
            o = f;
        }
        return function(d = {}, h) {
            if (o) throw o;
            let p = !1;
            const m = {};
            for(let b = 0; b < u.length; b++){
                const E = u[b], S = i[E], D = d[E], T = S(D, h);
                if (typeof T > "u") throw h && h.type, new Error(ut(14));
                m[E] = T, p = p || T !== D;
            }
            return p = p || u.length !== Object.keys(d).length, p ? m : d;
        };
    }
    function Du(...l) {
        return l.length === 0 ? (r)=>r : l.length === 1 ? l[0] : l.reduce((r, i)=>(...u)=>r(i(...u)));
    }
    function Yv(...l) {
        return (r)=>(i, u)=>{
                const o = r(i, u);
                let f = ()=>{
                    throw new Error(ut(15));
                };
                const d = {
                    getState: o.getState,
                    dispatch: (p, ...m)=>f(p, ...m)
                }, h = l.map((p)=>p(d));
                return f = Du(...h)(o.dispatch), {
                    ...o,
                    dispatch: f
                };
            };
    }
    function Hg(l) {
        return ({ dispatch: i, getState: u })=>(o)=>(f)=>typeof f == "function" ? f(i, u, l) : o(f);
    }
    var Iv = Hg(), Xv = Hg, Zv = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Du : Du.apply(null, arguments);
    }, Qg = class Vl extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, Vl.prototype);
        }
        static get [Symbol.species]() {
            return Vl;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new Vl(...r[0].concat(this)) : new Vl(...r.concat(this));
        }
    };
    function Jv(l) {
        return typeof l == "boolean";
    }
    var Fv = ()=>function(r) {
            const { thunk: i = !0, immutableCheck: u = !0, serializableCheck: o = !0, actionCreatorCheck: f = !0 } = r ?? {};
            let d = new Qg;
            return i && (Jv(i) ? d.push(Iv) : d.push(Xv(i.extraArgument))), d;
        }, Wv = "RTK_autoBatch", Xp = (l)=>(r)=>{
            setTimeout(r, l);
        }, $v = (l = {
        type: "raf"
    })=>(r)=>(...i)=>{
                const u = r(...i);
                let o = !0, f = !1, d = !1;
                const h = new Set, p = l.type === "tick" ? queueMicrotask : l.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Xp(10) : l.type === "callback" ? l.queueNotification : Xp(l.timeout), m = ()=>{
                    d = !1, f && (f = !1, h.forEach((b)=>b()));
                };
                return Object.assign({}, u, {
                    subscribe (b) {
                        const E = ()=>o && b(), S = u.subscribe(E);
                        return h.add(b), ()=>{
                            S(), h.delete(b);
                        };
                    },
                    dispatch (b) {
                        try {
                            return o = !b?.meta?.[Wv], f = !o, f && (d || (d = !0, p(m))), u.dispatch(b);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, ey = (l)=>function(i) {
            const { autoBatch: u = !0 } = i ?? {};
            let o = new Qg(l);
            return u && o.push($v(typeof u == "object" ? u : void 0)), o;
        };
    function ty(l) {
        const r = Fv(), { reducer: i = void 0, middleware: u, devTools: o = !0, preloadedState: f = void 0, enhancers: d = void 0 } = l || {};
        let h;
        if (typeof i == "function") h = i;
        else if (Ug(i)) h = qg(i);
        else throw new Error(ny(1));
        let p;
        typeof u == "function" ? p = u(r) : p = r();
        let m = Du;
        o && (m = Zv({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const b = Yv(...p), E = ey(b);
        let S = typeof d == "function" ? d(E) : E();
        const D = m(...S);
        return Nc(h, f, D);
    }
    function ny(l) {
        return `Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
    }
    var jc = "persist:", Gg = "persist/FLUSH", Pc = "persist/REHYDRATE", Kg = "persist/PAUSE", Yg = "persist/PERSIST", Ig = "persist/PURGE", Xg = "persist/REGISTER", ry = -1;
    function mu(l) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mu = function(i) {
            return typeof i;
        } : mu = function(i) {
            return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
        }, mu(l);
    }
    function Zp(l, r) {
        var i = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(l);
            r && (u = u.filter(function(o) {
                return Object.getOwnPropertyDescriptor(l, o).enumerable;
            })), i.push.apply(i, u);
        }
        return i;
    }
    function ay(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Zp(i, !0).forEach(function(u) {
                ly(l, u, i[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Zp(i).forEach(function(u) {
                Object.defineProperty(l, u, Object.getOwnPropertyDescriptor(i, u));
            });
        }
        return l;
    }
    function ly(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function iy(l, r, i, u) {
        u.debug;
        var o = ay({}, i);
        return l && mu(l) === "object" && Object.keys(l).forEach(function(f) {
            f !== "_persist" && r[f] === i[f] && (o[f] = l[f]);
        }), o;
    }
    function uy(l) {
        var r = l.blacklist || null, i = l.whitelist || null, u = l.transforms || [], o = l.throttle || 0, f = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : jc).concat(l.key), d = l.storage, h;
        l.serialize === !1 ? h = function(G) {
            return G;
        } : typeof l.serialize == "function" ? h = l.serialize : h = sy;
        var p = l.writeFailHandler || null, m = {}, b = {}, E = [], S = null, D = null, T = function(G) {
            Object.keys(G).forEach(function(Y) {
                w(Y) && m[Y] !== G[Y] && E.indexOf(Y) === -1 && E.push(Y);
            }), Object.keys(m).forEach(function(Y) {
                G[Y] === void 0 && w(Y) && E.indexOf(Y) === -1 && m[Y] !== void 0 && E.push(Y);
            }), S === null && (S = setInterval(R, o)), m = G;
        };
        function R() {
            if (E.length === 0) {
                S && clearInterval(S), S = null;
                return;
            }
            var Q = E.shift(), G = u.reduce(function(Y, le) {
                return le.in(Y, Q, m);
            }, m[Q]);
            if (G !== void 0) try {
                b[Q] = h(G);
            } catch (Y) {
                console.error("redux-persist/createPersistoid: error serializing state", Y);
            }
            else delete b[Q];
            E.length === 0 && M();
        }
        function M() {
            Object.keys(b).forEach(function(Q) {
                m[Q] === void 0 && delete b[Q];
            }), D = d.setItem(f, h(b)).catch(k);
        }
        function w(Q) {
            return !(i && i.indexOf(Q) === -1 && Q !== "_persist" || r && r.indexOf(Q) !== -1);
        }
        function k(Q) {
            p && p(Q);
        }
        var V = function() {
            for(; E.length !== 0;)R();
            return D || Promise.resolve();
        };
        return {
            update: T,
            flush: V
        };
    }
    function sy(l) {
        return JSON.stringify(l);
    }
    function oy(l) {
        var r = l.transforms || [], i = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : jc).concat(l.key), u = l.storage;
        l.debug;
        var o;
        return l.deserialize === !1 ? o = function(d) {
            return d;
        } : typeof l.deserialize == "function" ? o = l.deserialize : o = cy, u.getItem(i).then(function(f) {
            if (f) try {
                var d = {}, h = o(f);
                return Object.keys(h).forEach(function(p) {
                    d[p] = r.reduceRight(function(m, b) {
                        return b.out(m, p, h);
                    }, o(h[p]));
                }), d;
            } catch (p) {
                throw p;
            }
            else return;
        });
    }
    function cy(l) {
        return JSON.parse(l);
    }
    function fy(l) {
        var r = l.storage, i = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : jc).concat(l.key);
        return r.removeItem(i, dy);
    }
    function dy(l) {}
    function Jp(l, r) {
        var i = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(l);
            r && (u = u.filter(function(o) {
                return Object.getOwnPropertyDescriptor(l, o).enumerable;
            })), i.push.apply(i, u);
        }
        return i;
    }
    function xn(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Jp(i, !0).forEach(function(u) {
                hy(l, u, i[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Jp(i).forEach(function(u) {
                Object.defineProperty(l, u, Object.getOwnPropertyDescriptor(i, u));
            });
        }
        return l;
    }
    function hy(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function py(l, r) {
        if (l == null) return {};
        var i = gy(l, r), u, o;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            for(o = 0; o < f.length; o++)u = f[o], !(r.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(l, u) && (i[u] = l[u]);
        }
        return i;
    }
    function gy(l, r) {
        if (l == null) return {};
        var i = {}, u = Object.keys(l), o, f;
        for(f = 0; f < u.length; f++)o = u[f], !(r.indexOf(o) >= 0) && (i[o] = l[o]);
        return i;
    }
    var my = 5e3;
    function vy(l, r) {
        var i = l.version !== void 0 ? l.version : ry;
        l.debug;
        var u = l.stateReconciler === void 0 ? iy : l.stateReconciler, o = l.getStoredState || oy, f = l.timeout !== void 0 ? l.timeout : my, d = null, h = !1, p = !0, m = function(E) {
            return E._persist.rehydrated && d && !p && d.update(E), E;
        };
        return function(b, E) {
            var S = b || {}, D = S._persist, T = py(S, [
                "_persist"
            ]), R = T;
            if (E.type === Yg) {
                var M = !1, w = function(se, ae) {
                    M || (E.rehydrate(l.key, se, ae), M = !0);
                };
                if (f && setTimeout(function() {
                    !M && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(l.key, '"')));
                }, f), p = !1, d || (d = uy(l)), D) return xn({}, r(R, E), {
                    _persist: D
                });
                if (typeof E.rehydrate != "function" || typeof E.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return E.register(l.key), o(l).then(function(le) {
                    var se = l.migrate || function(ae, Le) {
                        return Promise.resolve(ae);
                    };
                    se(le, i).then(function(ae) {
                        w(ae);
                    }, function(ae) {
                        w(void 0, ae);
                    });
                }, function(le) {
                    w(void 0, le);
                }), xn({}, r(R, E), {
                    _persist: {
                        version: i,
                        rehydrated: !1
                    }
                });
            } else {
                if (E.type === Ig) return h = !0, E.result(fy(l)), xn({}, r(R, E), {
                    _persist: D
                });
                if (E.type === Gg) return E.result(d && d.flush()), xn({}, r(R, E), {
                    _persist: D
                });
                if (E.type === Kg) p = !0;
                else if (E.type === Pc) {
                    if (h) return xn({}, R, {
                        _persist: xn({}, D, {
                            rehydrated: !0
                        })
                    });
                    if (E.key === l.key) {
                        var k = r(R, E), V = E.payload, Q = u !== !1 && V !== void 0 ? u(V, b, k, l) : k, G = xn({}, Q, {
                            _persist: xn({}, D, {
                                rehydrated: !0
                            })
                        });
                        return m(G);
                    }
                }
            }
            if (!D) return r(b, E);
            var Y = r(R, E);
            return Y === R ? b : m(xn({}, Y, {
                _persist: D
            }));
        };
    }
    function Fp(l) {
        return Sy(l) || by(l) || yy();
    }
    function yy() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function by(l) {
        if (Symbol.iterator in Object(l) || Object.prototype.toString.call(l) === "[object Arguments]") return Array.from(l);
    }
    function Sy(l) {
        if (Array.isArray(l)) {
            for(var r = 0, i = new Array(l.length); r < l.length; r++)i[r] = l[r];
            return i;
        }
    }
    function Wp(l, r) {
        var i = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(l);
            r && (u = u.filter(function(o) {
                return Object.getOwnPropertyDescriptor(l, o).enumerable;
            })), i.push.apply(i, u);
        }
        return i;
    }
    function mc(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Wp(i, !0).forEach(function(u) {
                Ey(l, u, i[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Wp(i).forEach(function(u) {
                Object.defineProperty(l, u, Object.getOwnPropertyDescriptor(i, u));
            });
        }
        return l;
    }
    function Ey(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    var Zg = {
        registry: [],
        bootstrapped: !1
    }, Oy = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zg, i = arguments.length > 1 ? arguments[1] : void 0;
        switch(i.type){
            case Xg:
                return mc({}, r, {
                    registry: [].concat(Fp(r.registry), [
                        i.key
                    ])
                });
            case Pc:
                var u = r.registry.indexOf(i.key), o = Fp(r.registry);
                return o.splice(u, 1), mc({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function Ty(l, r, i) {
        var u = Nc(Oy, Zg, void 0), o = function(p) {
            u.dispatch({
                type: Xg,
                key: p
            });
        }, f = function(p, m, b) {
            var E = {
                type: Pc,
                payload: m,
                err: b,
                key: p
            };
            l.dispatch(E), u.dispatch(E);
        }, d = mc({}, u, {
            purge: function() {
                var p = [];
                return l.dispatch({
                    type: Ig,
                    result: function(b) {
                        p.push(b);
                    }
                }), Promise.all(p);
            },
            flush: function() {
                var p = [];
                return l.dispatch({
                    type: Gg,
                    result: function(b) {
                        p.push(b);
                    }
                }), Promise.all(p);
            },
            pause: function() {
                l.dispatch({
                    type: Kg
                });
            },
            persist: function() {
                l.dispatch({
                    type: Yg,
                    register: o,
                    rehydrate: f
                });
            }
        });
        return d.persist(), d;
    }
    var Nl = {}, su = {}, ou = {}, $p;
    function Dy() {
        if ($p) return ou;
        $p = 1, ou.__esModule = !0, ou.default = o;
        function l(f) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? l = function(h) {
                return typeof h;
            } : l = function(h) {
                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
            }, l(f);
        }
        function r() {}
        var i = {
            getItem: r,
            setItem: r,
            removeItem: r
        };
        function u(f) {
            if ((typeof self > "u" ? "undefined" : l(self)) !== "object" || !(f in self)) return !1;
            try {
                var d = self[f], h = "redux-persist ".concat(f, " test");
                d.setItem(h, "test"), d.getItem(h), d.removeItem(h);
            } catch  {
                return !1;
            }
            return !0;
        }
        function o(f) {
            var d = "".concat(f, "Storage");
            return u(d) ? self[d] : i;
        }
        return ou;
    }
    var eg;
    function Cy() {
        if (eg) return su;
        eg = 1, su.__esModule = !0, su.default = i;
        var l = r(Dy());
        function r(u) {
            return u && u.__esModule ? u : {
                default: u
            };
        }
        function i(u) {
            var o = (0, l.default)(u);
            return {
                getItem: function(d) {
                    return new Promise(function(h, p) {
                        h(o.getItem(d));
                    });
                },
                setItem: function(d, h) {
                    return new Promise(function(p, m) {
                        p(o.setItem(d, h));
                    });
                },
                removeItem: function(d) {
                    return new Promise(function(h, p) {
                        h(o.removeItem(d));
                    });
                }
            };
        }
        return su;
    }
    var tg;
    function xy() {
        if (tg) return Nl;
        tg = 1, Nl.__esModule = !0, Nl.default = void 0;
        var l = r(Cy());
        function r(u) {
            return u && u.__esModule ? u : {
                default: u
            };
        }
        var i = (0, l.default)("local");
        return Nl.default = i, Nl;
    }
    var Ry = xy();
    const Ay = wc(Ry);
    const pt = "w", Kt = "b", nt = "p", vc = "n", vu = "b", Bl = "r", ar = "q", Xe = "k", tc = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class cu {
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
        constructor(r, i){
            const { color: u, piece: o, from: f, to: d, flags: h, captured: p, promotion: m } = i, b = st(f), E = st(d);
            this.color = u, this.piece = o, this.from = b, this.to = E, this.san = r._moveToSan(i, r._moves({
                legal: !0
            })), this.lan = b + E, this.before = r.fen(), r._makeMove(i), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const S in ce)ce[S] & h && (this.flags += Rr[S]);
            p && (this.captured = p), m && (this.promotion = m, this.lan += m);
        }
        isCapture() {
            return this.flags.indexOf(Rr.CAPTURE) > -1;
        }
        isPromotion() {
            return this.flags.indexOf(Rr.PROMOTION) > -1;
        }
        isEnPassant() {
            return this.flags.indexOf(Rr.EP_CAPTURE) > -1;
        }
        isKingsideCastle() {
            return this.flags.indexOf(Rr.KSIDE_CASTLE) > -1;
        }
        isQueensideCastle() {
            return this.flags.indexOf(Rr.QSIDE_CASTLE) > -1;
        }
        isBigPawn() {
            return this.flags.indexOf(Rr.BIG_PAWN) > -1;
        }
    }
    const Dt = -1, Rr = {
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
    }, yc = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, _y = {
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
    }, wy = {
        ...yc,
        ..._y
    }, ie = {
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
    }, nc = {
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
    }, ng = {
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
    }, My = [
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
    ], Ny = [
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
    }, Py = "pnbrqkPNBRQK", rg = [
        vc,
        vu,
        Bl,
        ar
    ], Ly = 7, ky = 6, Vy = 1, By = 0, fu = {
        [Xe]: ce.KSIDE_CASTLE,
        [ar]: ce.QSIDE_CASTLE
    }, nr = {
        w: [
            {
                square: ie.a1,
                flag: ce.QSIDE_CASTLE
            },
            {
                square: ie.h1,
                flag: ce.KSIDE_CASTLE
            }
        ],
        b: [
            {
                square: ie.a8,
                flag: ce.QSIDE_CASTLE
            },
            {
                square: ie.h8,
                flag: ce.KSIDE_CASTLE
            }
        ]
    }, zy = {
        b: Vy,
        w: ky
    }, Uy = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function Ar(l) {
        return l >> 4;
    }
    function Hl(l) {
        return l & 15;
    }
    function Jg(l) {
        return "0123456789".indexOf(l) !== -1;
    }
    function st(l) {
        const r = Hl(l), i = Ar(l);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(i, i + 1);
    }
    function jl(l) {
        return l === pt ? Kt : pt;
    }
    function qy(l) {
        const r = l.split(/\s+/);
        if (r.length !== 6) return {
            ok: !1,
            error: "Invalid FEN: must contain six space-delimited fields"
        };
        const i = parseInt(r[5], 10);
        if (isNaN(i) || i <= 0) return {
            ok: !1,
            error: "Invalid FEN: move number must be a positive integer"
        };
        const u = parseInt(r[4], 10);
        if (isNaN(u) || u < 0) return {
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
        for(let d = 0; d < o.length; d++){
            let h = 0, p = !1;
            for(let m = 0; m < o[d].length; m++)if (Jg(o[d][m])) {
                if (p) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                h += parseInt(o[d][m], 10), p = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[d][m])) return {
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
        for (const { color: d, regex: h } of f){
            if (!h.test(r[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${d} king`
            };
            if ((r[0].match(h) || []).length > 1) return {
                ok: !1,
                error: `Invalid FEN: too many ${d} kings`
            };
        }
        return Array.from(o[0] + o[7]).some((d)=>d.toUpperCase() === "P") ? {
            ok: !1,
            error: "Invalid FEN: some pawns are on the edge rows"
        } : {
            ok: !0
        };
    }
    function Hy(l, r) {
        const i = l.from, u = l.to, o = l.piece;
        let f = 0, d = 0, h = 0;
        for(let p = 0, m = r.length; p < m; p++){
            const b = r[p].from, E = r[p].to, S = r[p].piece;
            o === S && i !== b && u === E && (f++, Ar(i) === Ar(b) && d++, Hl(i) === Hl(b) && h++);
        }
        return f > 0 ? d > 0 && h > 0 ? st(i) : h > 0 ? st(i).charAt(1) : st(i).charAt(0) : "";
    }
    function rr(l, r, i, u, o, f = void 0, d = ce.NORMAL) {
        const h = Ar(u);
        if (o === nt && (h === Ly || h === By)) for(let p = 0; p < rg.length; p++){
            const m = rg[p];
            l.push({
                color: r,
                from: i,
                to: u,
                piece: o,
                captured: f,
                promotion: m,
                flags: d | ce.PROMOTION
            });
        }
        else l.push({
            color: r,
            from: i,
            to: u,
            piece: o,
            captured: f,
            flags: d
        });
    }
    function ag(l) {
        let r = l.charAt(0);
        return r >= "a" && r <= "h" ? l.match(/[a-h]\d.*[a-h]\d/) ? void 0 : nt : (r = r.toLowerCase(), r === "o" ? Xe : r);
    }
    function rc(l) {
        return l.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function ac(l) {
        return l.split(" ").slice(0, 4).join(" ");
    }
    class Kl {
        _board = new Array(128);
        _turn = pt;
        _header = {};
        _kings = {
            w: Dt,
            b: Dt
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
        constructor(r = tc, { skipValidation: i = !1 } = {}){
            this.load(r, {
                skipValidation: i
            });
        }
        clear({ preserveHeaders: r = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: Dt,
                b: Dt
            }, this._turn = pt, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = Dt, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = r ? this._header : {
                ...wy
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(r, { skipValidation: i = !1, preserveHeaders: u = !1 } = {}) {
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
            if (o = r.split(/\s+/), !i) {
                const { ok: h, error: p } = qy(r);
                if (!h) throw new Error(p);
            }
            const f = o[0];
            let d = 0;
            this.clear({
                preserveHeaders: u
            });
            for(let h = 0; h < f.length; h++){
                const p = f.charAt(h);
                if (p === "/") d += 8;
                else if (Jg(p)) d += parseInt(p, 10);
                else {
                    const m = p < "a" ? pt : Kt;
                    this._put({
                        type: p.toLowerCase(),
                        color: m
                    }, st(d)), d++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? Dt : ie[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, i = "";
            for(let f = ie.a8; f <= ie.h1; f++){
                if (this._board[f]) {
                    r > 0 && (i += r, r = 0);
                    const { color: d, type: h } = this._board[f];
                    i += d === pt ? h.toUpperCase() : h.toLowerCase();
                } else r++;
                f + 1 & 136 && (r > 0 && (i += r), f !== ie.h1 && (i += "/"), r = 0, f += 8);
            }
            let u = "";
            this._castling[pt] & ce.KSIDE_CASTLE && (u += "K"), this._castling[pt] & ce.QSIDE_CASTLE && (u += "Q"), this._castling[Kt] & ce.KSIDE_CASTLE && (u += "k"), this._castling[Kt] & ce.QSIDE_CASTLE && (u += "q"), u = u || "-";
            let o = "-";
            if (this._epSquare !== Dt) {
                const f = this._epSquare + (this._turn === pt ? 16 : -16), d = [
                    f + 1,
                    f - 1
                ];
                for (const h of d){
                    if (h & 136) continue;
                    const p = this._turn;
                    if (this._board[h]?.color === p && this._board[h]?.type === nt) {
                        this._makeMove({
                            color: p,
                            from: h,
                            to: this._epSquare,
                            piece: nt,
                            captured: nt,
                            flags: ce.EP_CAPTURE
                        });
                        const m = !this._isKingAttacked(p);
                        if (this._undoMove(), m) {
                            o = st(this._epSquare);
                            break;
                        }
                    }
                }
            }
            return [
                i,
                this._turn,
                u,
                o,
                this._halfMoves,
                this._moveNumber
            ].join(" ");
        }
        _updateSetup(r) {
            this._history.length > 0 || (r !== tc ? (this._header.SetUp = "1", this._header.FEN = r) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(tc);
        }
        get(r) {
            return this._board[ie[r]];
        }
        findPiece(r) {
            const i = [];
            for(let u = ie.a8; u <= ie.h1; u++){
                if (u & 136) {
                    u += 7;
                    continue;
                }
                !this._board[u] || this._board[u]?.color !== r.color || this._board[u].color === r.color && this._board[u].type === r.type && i.push(st(u));
            }
            return i;
        }
        put({ type: r, color: i }, u) {
            return this._put({
                type: r,
                color: i
            }, u) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1;
        }
        _put({ type: r, color: i }, u) {
            if (Py.indexOf(r.toLowerCase()) === -1 || !(u in ie)) return !1;
            const o = ie[u];
            if (r == Xe && !(this._kings[i] == Dt || this._kings[i] == o)) return !1;
            const f = this._board[o];
            return f && f.type === Xe && (this._kings[f.color] = Dt), this._board[o] = {
                type: r,
                color: i
            }, r === Xe && (this._kings[i] = o), !0;
        }
        remove(r) {
            const i = this.get(r);
            return delete this._board[ie[r]], i && i.type === Xe && (this._kings[i.color] = Dt), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), i;
        }
        _updateCastlingRights() {
            const r = this._board[ie.e1]?.type === Xe && this._board[ie.e1]?.color === pt, i = this._board[ie.e8]?.type === Xe && this._board[ie.e8]?.color === Kt;
            (!r || this._board[ie.a1]?.type !== Bl || this._board[ie.a1]?.color !== pt) && (this._castling.w &= -65), (!r || this._board[ie.h1]?.type !== Bl || this._board[ie.h1]?.color !== pt) && (this._castling.w &= -33), (!i || this._board[ie.a8]?.type !== Bl || this._board[ie.a8]?.color !== Kt) && (this._castling.b &= -65), (!i || this._board[ie.h8]?.type !== Bl || this._board[ie.h8]?.color !== Kt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === Dt) return;
            const r = this._epSquare + (this._turn === pt ? -16 : 16), i = this._epSquare + (this._turn === pt ? 16 : -16), u = [
                i + 1,
                i - 1
            ];
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[i]?.color !== jl(this._turn) || this._board[i]?.type !== nt) {
                this._epSquare = Dt;
                return;
            }
            const o = (f)=>!(f & 136) && this._board[f]?.color === this._turn && this._board[f]?.type === nt;
            u.some(o) || (this._epSquare = Dt);
        }
        _attacked(r, i, u) {
            const o = [];
            for(let f = ie.a8; f <= ie.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                if (this._board[f] === void 0 || this._board[f].color !== r) continue;
                const d = this._board[f], h = f - i;
                if (h === 0) continue;
                const p = h + 119;
                if (My[p] & jy[d.type]) {
                    if (d.type === nt) {
                        if (h > 0 && d.color === pt || h <= 0 && d.color === Kt) if (u) o.push(st(f));
                        else return !0;
                        continue;
                    }
                    if (d.type === "n" || d.type === "k") if (u) {
                        o.push(st(f));
                        continue;
                    } else return !0;
                    const m = Ny[p];
                    let b = f + m, E = !1;
                    for(; b !== i;){
                        if (this._board[b] != null) {
                            E = !0;
                            break;
                        }
                        b += m;
                    }
                    if (!E) if (u) {
                        o.push(st(f));
                        continue;
                    } else return !0;
                }
            }
            return u ? o : !1;
        }
        attackers(r, i) {
            return i ? this._attacked(i, ie[r], !0) : this._attacked(this._turn, ie[r], !0);
        }
        _isKingAttacked(r) {
            const i = this._kings[r];
            return i === -1 ? !1 : this._attacked(jl(r), i);
        }
        isAttacked(r, i) {
            return this._attacked(i, ie[r]);
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
            }, i = [];
            let u = 0, o = 0;
            for(let f = ie.a8; f <= ie.h1; f++){
                if (o = (o + 1) % 2, f & 136) {
                    f += 7;
                    continue;
                }
                const d = this._board[f];
                d && (r[d.type] = d.type in r ? r[d.type] + 1 : 1, d.type === vu && i.push(o), u++);
            }
            if (u === 2) return !0;
            if (u === 3 && (r[vu] === 1 || r[vc] === 1)) return !0;
            if (u === r[vu] + 2) {
                let f = 0;
                const d = i.length;
                for(let h = 0; h < d; h++)f += i[h];
                if (f === 0 || f === d) return !0;
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
        moves({ verbose: r = !1, square: i = void 0, piece: u = void 0 } = {}) {
            const o = this._moves({
                square: i,
                piece: u
            });
            return r ? o.map((f)=>new cu(this, f)) : o.map((f)=>this._moveToSan(f, o));
        }
        _moves({ legal: r = !0, piece: i = void 0, square: u = void 0 } = {}) {
            const o = u ? u.toLowerCase() : void 0, f = i?.toLowerCase(), d = [], h = this._turn, p = jl(h);
            let m = ie.a8, b = ie.h1, E = !1;
            if (o) if (o in ie) m = b = ie[o], E = !0;
            else return [];
            for(let D = m; D <= b; D++){
                if (D & 136) {
                    D += 7;
                    continue;
                }
                if (!this._board[D] || this._board[D].color === p) continue;
                const { type: T } = this._board[D];
                let R;
                if (T === nt) {
                    if (f && f !== T) continue;
                    R = D + nc[h][0], this._board[R] || (rr(d, h, D, R, nt), R = D + nc[h][1], zy[h] === Ar(D) && !this._board[R] && rr(d, h, D, R, nt, void 0, ce.BIG_PAWN));
                    for(let M = 2; M < 4; M++)R = D + nc[h][M], !(R & 136) && (this._board[R]?.color === p ? rr(d, h, D, R, nt, this._board[R].type, ce.CAPTURE) : R === this._epSquare && rr(d, h, D, R, nt, nt, ce.EP_CAPTURE));
                } else {
                    if (f && f !== T) continue;
                    for(let M = 0, w = ng[T].length; M < w; M++){
                        const k = ng[T][M];
                        for(R = D; R += k, !(R & 136);){
                            if (!this._board[R]) rr(d, h, D, R, T);
                            else {
                                if (this._board[R].color === h) break;
                                rr(d, h, D, R, T, this._board[R].type, ce.CAPTURE);
                                break;
                            }
                            if (T === vc || T === Xe) break;
                        }
                    }
                }
            }
            if ((f === void 0 || f === Xe) && (!E || b === this._kings[h])) {
                if (this._castling[h] & ce.KSIDE_CASTLE) {
                    const D = this._kings[h], T = D + 2;
                    !this._board[D + 1] && !this._board[T] && !this._attacked(p, this._kings[h]) && !this._attacked(p, D + 1) && !this._attacked(p, T) && rr(d, h, this._kings[h], T, Xe, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[h] & ce.QSIDE_CASTLE) {
                    const D = this._kings[h], T = D - 2;
                    !this._board[D - 1] && !this._board[D - 2] && !this._board[D - 3] && !this._attacked(p, this._kings[h]) && !this._attacked(p, D - 1) && !this._attacked(p, T) && rr(d, h, this._kings[h], T, Xe, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[h] === -1) return d;
            const S = [];
            for(let D = 0, T = d.length; D < T; D++)this._makeMove(d[D]), this._isKingAttacked(h) || S.push(d[D]), this._undoMove();
            return S;
        }
        move(r, { strict: i = !1 } = {}) {
            let u = null;
            if (typeof r == "string") u = this._moveFromSan(r, i);
            else if (typeof r == "object") {
                const f = this._moves();
                for(let d = 0, h = f.length; d < h; d++)if (r.from === st(f[d].from) && r.to === st(f[d].to) && (!("promotion" in f[d]) || r.promotion === f[d].promotion)) {
                    u = f[d];
                    break;
                }
            }
            if (!u) throw typeof r == "string" ? new Error(`Invalid move: ${r}`) : new Error(`Invalid move: ${JSON.stringify(r)}`);
            const o = new cu(this, u);
            return this._makeMove(u), this._incPositionCount(o.after), o;
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
            const i = this._turn, u = jl(i);
            if (this._push(r), this._board[r.to] = this._board[r.from], delete this._board[r.from], r.flags & ce.EP_CAPTURE && (this._turn === Kt ? delete this._board[r.to - 16] : delete this._board[r.to + 16]), r.promotion && (this._board[r.to] = {
                type: r.promotion,
                color: i
            }), this._board[r.to].type === Xe) {
                if (this._kings[i] = r.to, r.flags & ce.KSIDE_CASTLE) {
                    const o = r.to - 1, f = r.to + 1;
                    this._board[o] = this._board[f], delete this._board[f];
                } else if (r.flags & ce.QSIDE_CASTLE) {
                    const o = r.to + 1, f = r.to - 2;
                    this._board[o] = this._board[f], delete this._board[f];
                }
                this._castling[i] = 0;
            }
            if (this._castling[i]) {
                for(let o = 0, f = nr[i].length; o < f; o++)if (r.from === nr[i][o].square && this._castling[i] & nr[i][o].flag) {
                    this._castling[i] ^= nr[i][o].flag;
                    break;
                }
            }
            if (this._castling[u]) {
                for(let o = 0, f = nr[u].length; o < f; o++)if (r.to === nr[u][o].square && this._castling[u] & nr[u][o].flag) {
                    this._castling[u] ^= nr[u][o].flag;
                    break;
                }
            }
            r.flags & ce.BIG_PAWN ? i === Kt ? this._epSquare = r.to - 16 : this._epSquare = r.to + 16 : this._epSquare = Dt, r.piece === nt ? this._halfMoves = 0 : r.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, i === Kt && this._moveNumber++, this._turn = u;
        }
        undo() {
            const r = this._undoMove();
            if (r) {
                const i = new cu(this, r);
                return this._decPositionCount(i.after), i;
            }
            return null;
        }
        _undoMove() {
            const r = this._history.pop();
            if (r === void 0) return null;
            const i = r.move;
            this._kings = r.kings, this._turn = r.turn, this._castling = r.castling, this._epSquare = r.epSquare, this._halfMoves = r.halfMoves, this._moveNumber = r.moveNumber;
            const u = this._turn, o = jl(u);
            if (this._board[i.from] = this._board[i.to], this._board[i.from].type = i.piece, delete this._board[i.to], i.captured) if (i.flags & ce.EP_CAPTURE) {
                let f;
                u === Kt ? f = i.to - 16 : f = i.to + 16, this._board[f] = {
                    type: nt,
                    color: o
                };
            } else this._board[i.to] = {
                type: i.captured,
                color: o
            };
            if (i.flags & (ce.KSIDE_CASTLE | ce.QSIDE_CASTLE)) {
                let f, d;
                i.flags & ce.KSIDE_CASTLE ? (f = i.to + 1, d = i.to - 1) : (f = i.to - 2, d = i.to + 1), this._board[f] = this._board[d], delete this._board[d];
            }
            return i;
        }
        pgn({ newline: r = `
`, maxWidth: i = 0 } = {}) {
            const u = [];
            let o = !1;
            for(const S in this._header)this._header[S] && u.push(`[${S} "${this._header[S]}"]` + r), o = !0;
            o && this._history.length && u.push(r);
            const f = (S)=>{
                const D = this._comments[this.fen()];
                if (typeof D < "u") {
                    const T = S.length > 0 ? " " : "";
                    S = `${S}${T}{${D}}`;
                }
                return S;
            }, d = [];
            for(; this._history.length > 0;)d.push(this._undoMove());
            const h = [];
            let p = "";
            for(d.length === 0 && h.push(f("")); d.length > 0;){
                p = f(p);
                const S = d.pop();
                if (!S) break;
                if (!this._history.length && S.color === "b") {
                    const D = `${this._moveNumber}. ...`;
                    p = p ? `${p} ${D}` : D;
                } else S.color === "w" && (p.length && h.push(p), p = this._moveNumber + ".");
                p = p + " " + this._moveToSan(S, this._moves({
                    legal: !0
                })), this._makeMove(S);
            }
            if (p.length && h.push(f(p)), h.push(this._header.Result || "*"), i === 0) return u.join("") + h.join(" ");
            const m = function() {
                return u.length > 0 && u[u.length - 1] === " " ? (u.pop(), !0) : !1;
            }, b = function(S, D) {
                for (const T of D.split(" "))if (T) {
                    if (S + T.length > i) {
                        for(; m();)S--;
                        u.push(r), S = 0;
                    }
                    u.push(T), S += T.length, u.push(" "), S++;
                }
                return m() && S--, S;
            };
            let E = 0;
            for(let S = 0; S < h.length; S++){
                if (E + h[S].length > i && h[S].includes("{")) {
                    E = b(E, h[S]);
                    continue;
                }
                E + h[S].length > i && S !== 0 ? (u[u.length - 1] === " " && u.pop(), u.push(r), E = 0) : S !== 0 && (u.push(" "), E++), u.push(h[S]), E += h[S].length;
            }
            return u.join("");
        }
        header(...r) {
            for(let i = 0; i < r.length; i += 2)typeof r[i] == "string" && typeof r[i + 1] == "string" && (this._header[r[i]] = r[i + 1]);
            return this._header;
        }
        setHeader(r, i) {
            return this._header[r] = i ?? yc[r] ?? null, this.getHeaders();
        }
        removeHeader(r) {
            return r in this._header ? (this._header[r] = yc[r] || null, !0) : !1;
        }
        getHeaders() {
            const r = {};
            for (const [i, u] of Object.entries(this._header))u !== null && (r[i] = u);
            return r;
        }
        loadPgn(r, { strict: i = !1, newlineChar: u = `\r?
` } = {}) {
            function o(V) {
                return V.replace(/\\/g, "\\");
            }
            function f(V) {
                const Q = {}, G = V.split(new RegExp(o(u)));
                let Y = "", le = "";
                for(let se = 0; se < G.length; se++){
                    const ae = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    Y = G[se].replace(ae, "$1"), le = G[se].replace(ae, "$2"), Y.trim().length > 0 && (Q[Y] = le);
                }
                return Q;
            }
            r = r.trim();
            const h = new RegExp("^(\\[((?:" + o(u) + ")|.)*\\])((?:\\s*" + o(u) + "){2}|(?:\\s*" + o(u) + ")*$)").exec(r), p = h && h.length >= 2 ? h[1] : "";
            this.reset();
            const m = f(p);
            let b = "";
            for(const V in m)V.toLowerCase() === "fen" && (b = m[V]), this.header(V, m[V]);
            if (!i) b && this.load(b, {
                preserveHeaders: !0
            });
            else if (m.SetUp === "1") {
                if (!("FEN" in m)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(m.FEN, {
                    preserveHeaders: !0
                });
            }
            function E(V) {
                return Array.from(V).map(function(Q) {
                    return Q.charCodeAt(0) < 128 ? Q.charCodeAt(0).toString(16) : encodeURIComponent(Q).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function S(V) {
                return V.length == 0 ? "" : decodeURIComponent("%" + (V.match(/.{1,2}/g) || []).join("%"));
            }
            const D = function(V) {
                return V = V.replace(new RegExp(o(u), "g"), " "), `{${E(V.slice(1, V.length - 1))}}`;
            }, T = function(V) {
                if (V.startsWith("{") && V.endsWith("}")) return S(V.slice(1, V.length - 1));
            };
            let R = r.replace(p, "").replace(new RegExp(`({[^}]*})+?|;([^${o(u)}]*)`, "g"), function(V, Q, G) {
                return Q !== void 0 ? D(Q) : " " + D(`{${G.slice(1)}}`);
            }).replace(new RegExp(o(u), "g"), " ");
            const M = /(\([^()]+\))+?/g;
            for(; M.test(R);)R = R.replace(M, "");
            R = R.replace(/\d+\.(\.\.)?/g, ""), R = R.replace(/\.\.\./g, ""), R = R.replace(/\$\d+/g, "");
            let w = R.trim().split(new RegExp(/\s+/));
            w = w.filter((V)=>V !== "");
            let k = "";
            for(let V = 0; V < w.length; V++){
                const Q = T(w[V]);
                if (Q !== void 0) {
                    this._comments[this.fen()] = Q;
                    continue;
                }
                const G = this._moveFromSan(w[V], i);
                if (G == null) if (Uy.indexOf(w[V]) > -1) k = w[V];
                else throw new Error(`Invalid move in PGN: ${w[V]}`);
                else k = "", this._makeMove(G), this._incPositionCount(this.fen());
            }
            k && Object.keys(this._header).length && this._header.Result !== k && this.setHeader("Result", k);
        }
        _moveToSan(r, i) {
            let u = "";
            if (r.flags & ce.KSIDE_CASTLE) u = "O-O";
            else if (r.flags & ce.QSIDE_CASTLE) u = "O-O-O";
            else {
                if (r.piece !== nt) {
                    const o = Hy(r, i);
                    u += r.piece.toUpperCase() + o;
                }
                r.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (r.piece === nt && (u += st(r.from)[0]), u += "x"), u += st(r.to), r.promotion && (u += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? u += "#" : u += "+"), this._undoMove(), u;
        }
        _moveFromSan(r, i = !1) {
            const u = rc(r);
            let o = ag(u), f = this._moves({
                legal: !0,
                piece: o
            });
            for(let S = 0, D = f.length; S < D; S++)if (u === rc(this._moveToSan(f[S], f))) return f[S];
            if (i) return null;
            let d, h, p, m, b, E = !1;
            if (h = u.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), h ? (d = h[1], p = h[2], m = h[3], b = h[4], p.length == 1 && (E = !0)) : (h = u.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), h && (d = h[1], p = h[2], m = h[3], b = h[4], p.length == 1 && (E = !0))), o = ag(u), f = this._moves({
                legal: !0,
                piece: d || o
            }), !m) return null;
            for(let S = 0, D = f.length; S < D; S++)if (p) {
                if ((!d || d.toLowerCase() == f[S].piece) && ie[p] == f[S].from && ie[m] == f[S].to && (!b || b.toLowerCase() == f[S].promotion)) return f[S];
                if (E) {
                    const T = st(f[S].from);
                    if ((!d || d.toLowerCase() == f[S].piece) && ie[m] == f[S].to && (p == T[0] || p == T[1]) && (!b || b.toLowerCase() == f[S].promotion)) return f[S];
                }
            } else if (u === rc(this._moveToSan(f[S], f)).replace("x", "")) return f[S];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let i = ie.a8; i <= ie.h1; i++){
                if (Hl(i) === 0 && (r += " " + "87654321"[Ar(i)] + " |"), this._board[i]) {
                    const u = this._board[i].type, f = this._board[i].color === pt ? u.toUpperCase() : u.toLowerCase();
                    r += " " + f + " ";
                } else r += " . ";
                i + 1 & 136 && (r += `|
`, i += 8);
            }
            return r += `   +------------------------+
`, r += "     a  b  c  d  e  f  g  h", r;
        }
        perft(r) {
            const i = this._moves({
                legal: !1
            });
            let u = 0;
            const o = this._turn;
            for(let f = 0, d = i.length; f < d; f++)this._makeMove(i[f]), this._isKingAttacked(o) || (r - 1 > 0 ? u += this.perft(r - 1) : u++), this._undoMove();
            return u;
        }
        turn() {
            return this._turn;
        }
        board() {
            const r = [];
            let i = [];
            for(let u = ie.a8; u <= ie.h1; u++)this._board[u] == null ? i.push(null) : i.push({
                square: st(u),
                type: this._board[u].type,
                color: this._board[u].color
            }), u + 1 & 136 && (r.push(i), i = [], u += 8);
            return r;
        }
        squareColor(r) {
            if (r in ie) {
                const i = ie[r];
                return (Ar(i) + Hl(i)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: r = !1 } = {}) {
            const i = [], u = [];
            for(; this._history.length > 0;)i.push(this._undoMove());
            for(;;){
                const o = i.pop();
                if (!o) break;
                r ? u.push(new cu(this, o)) : u.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return u;
        }
        _getPositionCount(r) {
            const i = ac(r);
            return this._positionCount[i] || 0;
        }
        _incPositionCount(r) {
            const i = ac(r);
            this._positionCount[i] === void 0 && (this._positionCount[i] = 0), this._positionCount[i] += 1;
        }
        _decPositionCount(r) {
            const i = ac(r);
            this._positionCount[i] === 1 ? delete this._positionCount[i] : this._positionCount[i] -= 1;
        }
        _pruneComments() {
            const r = [], i = {}, u = (o)=>{
                o in this._comments && (i[o] = this._comments[o]);
            };
            for(; this._history.length > 0;)r.push(this._undoMove());
            for(u(this.fen());;){
                const o = r.pop();
                if (!o) break;
                this._makeMove(o), u(this.fen());
            }
            this._comments = i;
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
                const i = this._comments[r];
                return delete this._comments[r], {
                    fen: r,
                    comment: i
                };
            });
        }
        setCastlingRights(r, i) {
            for (const o of [
                Xe,
                ar
            ])i[o] !== void 0 && (i[o] ? this._castling[r] |= fu[o] : this._castling[r] &= ~fu[o]);
            this._updateCastlingRights();
            const u = this.getCastlingRights(r);
            return (i[Xe] === void 0 || i[Xe] === u[Xe]) && (i[ar] === void 0 || i[ar] === u[ar]);
        }
        getCastlingRights(r) {
            return {
                [Xe]: (this._castling[r] & fu[Xe]) !== 0,
                [ar]: (this._castling[r] & fu[ar]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    }
    const Fg = "MOVE_PIECE", Wg = "RESET_GAME", Qy = "LOAD_GAME", $g = "SET_GAME_OVER", Gy = "SET_TIMER_DURATION", Ky = (l)=>({
            type: Fg,
            payload: l
        }), e0 = (l)=>({
            type: Wg,
            payload: l
        }), bc = (l, r)=>({
            type: $g,
            payload: {
                isGameOver: l,
                gameResult: r
            }
        }), ot = {
        TIMER_DURATION: 60 * 3,
        THEME: "classic",
        ENABLE_SOUND: !0,
        IS_FLIPPED: !1,
        THEME_KEY: "theme",
        ENABLE_SOUND_KEY: "enableSound",
        TIMER_DURATION_KEY: "timerDuration",
        IS_FLIPPED_KEY: "isFlipped",
        START_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        CHECKMATE_MESSAGE: "Wins by Checkmate!"
    }, lg = {
        fen: ot.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: ot.TIMER_DURATION
    }, Yy = (l = lg, r)=>{
        switch(r.type){
            case Fg:
                try {
                    const i = new Kl(l.fen), u = i.move({
                        from: r.payload.from,
                        to: r.payload.to,
                        promotion: r.payload.promotionPiece
                    });
                    if (!u) return l;
                    const o = [
                        ...l.moveHistory,
                        u.san
                    ];
                    return {
                        ...l,
                        fen: i.fen(),
                        isWhiteTurn: !l.isWhiteTurn,
                        moveHistory: o,
                        lastMove: {
                            from: r.payload.from,
                            to: r.payload.to
                        }
                    };
                } catch (i) {
                    return console.warn("Invalid move:", i), l;
                }
            case Wg:
                return {
                    ...lg,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case Qy:
                return {
                    ...l,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case $g:
                return {
                    ...l,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case Gy:
                return {
                    ...l,
                    timerDuration: r.payload
                };
            default:
                return l;
        }
    }, t0 = "FLIP_BOARD", n0 = "SET_THEME", r0 = "SET_SOUND", a0 = ()=>({
            type: t0
        }), Iy = (l)=>({
            type: n0,
            payload: l
        }), Xy = (l)=>({
            type: r0,
            payload: l
        }), Zy = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    }, Jy = (l = Zy, r)=>{
        switch(r.type){
            case t0:
                return {
                    ...l,
                    isFlipped: !l.isFlipped
                };
            case n0:
                return {
                    ...l,
                    theme: r.payload
                };
            case r0:
                return {
                    ...l,
                    enableSound: r.payload
                };
            default:
                return l;
        }
    }, l0 = "NEXT", i0 = "PREV", u0 = "START_POS", s0 = "FINAL_POS", Lc = "LOAD_PGN", o0 = "JUMP_TO_MOVE", Fy = ()=>({
            type: u0
        }), Wy = ()=>({
            type: i0
        }), $y = ()=>({
            type: l0
        }), eb = ()=>({
            type: s0
        }), tb = ({ finalPos: l, moves: r, fens: i, fromToSquares: u, termination: o, result: f, blackPlayerName: d, whitePlayerName: h })=>({
            type: Lc,
            payload: {
                finalPos: l,
                moves: r,
                fens: i,
                fromToSquares: u,
                termination: o,
                result: f,
                blackPlayerName: d,
                whitePlayerName: h
            }
        }), nb = (l)=>({
            type: o0,
            payload: l
        }), rb = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0
    }, ab = (l = rb, r)=>{
        switch(r.type){
            case l0:
                return l.currentMoveIndex === l.fenLength - 1 ? l : {
                    ...l,
                    currentMoveIndex: l.currentMoveIndex + 1
                };
            case i0:
                return l.currentMoveIndex === 0 ? l : {
                    ...l,
                    currentMoveIndex: l.currentMoveIndex - 1
                };
            case u0:
                return {
                    ...l,
                    currentMoveIndex: 0
                };
            case s0:
                return {
                    ...l,
                    currentMoveIndex: l.fenLength - 1
                };
            case o0:
                return {
                    ...l,
                    currentMoveIndex: r.payload
                };
            case Lc:
                return {
                    ...l,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            default:
                return l;
        }
    }, lb = {
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
    }, ib = (l = lb, r)=>{
        switch(r.type){
            case Lc:
                return {
                    ...l,
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
                return l;
        }
    }, ub = qg({
        game: Yy,
        settings: Jy,
        analysis: ab,
        pgn: ib
    }), sb = {
        key: "root",
        storage: Ay,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    }, ob = vy(sb, ub), kc = ty({
        reducer: ob,
        middleware: (l)=>l({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    Ty(kc);
    var Pl = {}, ig;
    function cb() {
        if (ig) return Pl;
        ig = 1, Object.defineProperty(Pl, "__esModule", {
            value: !0
        }), Pl.parse = d, Pl.serialize = m;
        const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, u = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, f = (()=>{
            const S = function() {};
            return S.prototype = Object.create(null), S;
        })();
        function d(S, D) {
            const T = new f, R = S.length;
            if (R < 2) return T;
            const M = D?.decode || b;
            let w = 0;
            do {
                const k = S.indexOf("=", w);
                if (k === -1) break;
                const V = S.indexOf(";", w), Q = V === -1 ? R : V;
                if (k > Q) {
                    w = S.lastIndexOf(";", k - 1) + 1;
                    continue;
                }
                const G = h(S, w, k), Y = p(S, k, G), le = S.slice(G, Y);
                if (T[le] === void 0) {
                    let se = h(S, k + 1, Q), ae = p(S, Q, se);
                    const Le = M(S.slice(se, ae));
                    T[le] = Le;
                }
                w = Q + 1;
            }while (w < R);
            return T;
        }
        function h(S, D, T) {
            do {
                const R = S.charCodeAt(D);
                if (R !== 32 && R !== 9) return D;
            }while (++D < T);
            return T;
        }
        function p(S, D, T) {
            for(; D > T;){
                const R = S.charCodeAt(--D);
                if (R !== 32 && R !== 9) return D + 1;
            }
            return T;
        }
        function m(S, D, T) {
            const R = T?.encode || encodeURIComponent;
            if (!l.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
            const M = R(D);
            if (!r.test(M)) throw new TypeError(`argument val is invalid: ${D}`);
            let w = S + "=" + M;
            if (!T) return w;
            if (T.maxAge !== void 0) {
                if (!Number.isInteger(T.maxAge)) throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
                w += "; Max-Age=" + T.maxAge;
            }
            if (T.domain) {
                if (!i.test(T.domain)) throw new TypeError(`option domain is invalid: ${T.domain}`);
                w += "; Domain=" + T.domain;
            }
            if (T.path) {
                if (!u.test(T.path)) throw new TypeError(`option path is invalid: ${T.path}`);
                w += "; Path=" + T.path;
            }
            if (T.expires) {
                if (!E(T.expires) || !Number.isFinite(T.expires.valueOf())) throw new TypeError(`option expires is invalid: ${T.expires}`);
                w += "; Expires=" + T.expires.toUTCString();
            }
            if (T.httpOnly && (w += "; HttpOnly"), T.secure && (w += "; Secure"), T.partitioned && (w += "; Partitioned"), T.priority) switch(typeof T.priority == "string" ? T.priority.toLowerCase() : void 0){
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
                    throw new TypeError(`option priority is invalid: ${T.priority}`);
            }
            if (T.sameSite) switch(typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite){
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
                    throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
            }
            return w;
        }
        function b(S) {
            if (S.indexOf("%") === -1) return S;
            try {
                return decodeURIComponent(S);
            } catch  {
                return S;
            }
        }
        function E(S) {
            return o.call(S) === "[object Date]";
        }
        return Pl;
    }
    cb();
    var ug = "popstate";
    function fb(l = {}) {
        function r(u, o) {
            let { pathname: f, search: d, hash: h } = u.location;
            return Sc("", {
                pathname: f,
                search: d,
                hash: h
            }, o.state && o.state.usr || null, o.state && o.state.key || "default");
        }
        function i(u, o) {
            return typeof o == "string" ? o : Ql(o);
        }
        return hb(r, i, null, l);
    }
    function Pe(l, r) {
        if (l === !1 || l === null || typeof l > "u") throw new Error(r);
    }
    function ln(l, r) {
        if (!l) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function db() {
        return Math.random().toString(36).substring(2, 10);
    }
    function sg(l, r) {
        return {
            usr: l.state,
            key: l.key,
            idx: r
        };
    }
    function Sc(l, r, i = null, u) {
        return {
            pathname: typeof l == "string" ? l : l.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? Da(r) : r,
            state: i,
            key: r && r.key || u || db()
        };
    }
    function Ql({ pathname: l = "/", search: r = "", hash: i = "" }) {
        return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (l += i.charAt(0) === "#" ? i : "#" + i), l;
    }
    function Da(l) {
        let r = {};
        if (l) {
            let i = l.indexOf("#");
            i >= 0 && (r.hash = l.substring(i), l = l.substring(0, i));
            let u = l.indexOf("?");
            u >= 0 && (r.search = l.substring(u), l = l.substring(0, u)), l && (r.pathname = l);
        }
        return r;
    }
    function hb(l, r, i, u = {}) {
        let { window: o = document.defaultView, v5Compat: f = !1 } = u, d = o.history, h = "POP", p = null, m = b();
        m == null && (m = 0, d.replaceState({
            ...d.state,
            idx: m
        }, ""));
        function b() {
            return (d.state || {
                idx: null
            }).idx;
        }
        function E() {
            h = "POP";
            let M = b(), w = M == null ? null : M - m;
            m = M, p && p({
                action: h,
                location: R.location,
                delta: w
            });
        }
        function S(M, w) {
            h = "PUSH";
            let k = Sc(R.location, M, w);
            m = b() + 1;
            let V = sg(k, m), Q = R.createHref(k);
            try {
                d.pushState(V, "", Q);
            } catch (G) {
                if (G instanceof DOMException && G.name === "DataCloneError") throw G;
                o.location.assign(Q);
            }
            f && p && p({
                action: h,
                location: R.location,
                delta: 1
            });
        }
        function D(M, w) {
            h = "REPLACE";
            let k = Sc(R.location, M, w);
            m = b();
            let V = sg(k, m), Q = R.createHref(k);
            d.replaceState(V, "", Q), f && p && p({
                action: h,
                location: R.location,
                delta: 0
            });
        }
        function T(M) {
            let w = o.location.origin !== "null" ? o.location.origin : o.location.href, k = typeof M == "string" ? M : Ql(M);
            return k = k.replace(/ $/, "%20"), Pe(w, `No window.location.(origin|href) available to create URL for href: ${k}`), new URL(k, w);
        }
        let R = {
            get action () {
                return h;
            },
            get location () {
                return l(o, d);
            },
            listen (M) {
                if (p) throw new Error("A history only accepts one active listener");
                return o.addEventListener(ug, E), p = M, ()=>{
                    o.removeEventListener(ug, E), p = null;
                };
            },
            createHref (M) {
                return r(o, M);
            },
            createURL: T,
            encodeLocation (M) {
                let w = T(M);
                return {
                    pathname: w.pathname,
                    search: w.search,
                    hash: w.hash
                };
            },
            push: S,
            replace: D,
            go (M) {
                return d.go(M);
            }
        };
        return R;
    }
    function c0(l, r, i = "/") {
        return pb(l, r, i, !1);
    }
    function pb(l, r, i, u) {
        let o = typeof r == "string" ? Da(r) : r, f = An(o.pathname || "/", i);
        if (f == null) return null;
        let d = f0(l);
        gb(d);
        let h = null;
        for(let p = 0; h == null && p < d.length; ++p){
            let m = xb(f);
            h = Db(d[p], m, u);
        }
        return h;
    }
    function f0(l, r = [], i = [], u = "") {
        let o = (f, d, h)=>{
            let p = {
                relativePath: h === void 0 ? f.path || "" : h,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: d,
                route: f
            };
            p.relativePath.startsWith("/") && (Pe(p.relativePath.startsWith(u), `Absolute route path "${p.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(u.length));
            let m = Rn([
                u,
                p.relativePath
            ]), b = i.concat(p);
            f.children && f.children.length > 0 && (Pe(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`), f0(f.children, r, b, m)), !(f.path == null && !f.index) && r.push({
                path: m,
                score: Ob(m, f.index),
                routesMeta: b
            });
        };
        return l.forEach((f, d)=>{
            if (f.path === "" || !f.path?.includes("?")) o(f, d);
            else for (let h of d0(f.path))o(f, d, h);
        }), r;
    }
    function d0(l) {
        let r = l.split("/");
        if (r.length === 0) return [];
        let [i, ...u] = r, o = i.endsWith("?"), f = i.replace(/\?$/, "");
        if (u.length === 0) return o ? [
            f,
            ""
        ] : [
            f
        ];
        let d = d0(u.join("/")), h = [];
        return h.push(...d.map((p)=>p === "" ? f : [
                f,
                p
            ].join("/"))), o && h.push(...d), h.map((p)=>l.startsWith("/") && p === "" ? "/" : p);
    }
    function gb(l) {
        l.sort((r, i)=>r.score !== i.score ? i.score - r.score : Tb(r.routesMeta.map((u)=>u.childrenIndex), i.routesMeta.map((u)=>u.childrenIndex)));
    }
    var mb = /^:[\w-]+$/, vb = 3, yb = 2, bb = 1, Sb = 10, Eb = -2, og = (l)=>l === "*";
    function Ob(l, r) {
        let i = l.split("/"), u = i.length;
        return i.some(og) && (u += Eb), r && (u += yb), i.filter((o)=>!og(o)).reduce((o, f)=>o + (mb.test(f) ? vb : f === "" ? bb : Sb), u);
    }
    function Tb(l, r) {
        return l.length === r.length && l.slice(0, -1).every((u, o)=>u === r[o]) ? l[l.length - 1] - r[r.length - 1] : 0;
    }
    function Db(l, r, i = !1) {
        let { routesMeta: u } = l, o = {}, f = "/", d = [];
        for(let h = 0; h < u.length; ++h){
            let p = u[h], m = h === u.length - 1, b = f === "/" ? r : r.slice(f.length) || "/", E = Cu({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: m
            }, b), S = p.route;
            if (!E && m && i && !u[u.length - 1].route.index && (E = Cu({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, b)), !E) return null;
            Object.assign(o, E.params), d.push({
                params: o,
                pathname: Rn([
                    f,
                    E.pathname
                ]),
                pathnameBase: wb(Rn([
                    f,
                    E.pathnameBase
                ])),
                route: S
            }), E.pathnameBase !== "/" && (f = Rn([
                f,
                E.pathnameBase
            ]));
        }
        return d;
    }
    function Cu(l, r) {
        typeof l == "string" && (l = {
            path: l,
            caseSensitive: !1,
            end: !0
        });
        let [i, u] = Cb(l.path, l.caseSensitive, l.end), o = r.match(i);
        if (!o) return null;
        let f = o[0], d = f.replace(/(.)\/+$/, "$1"), h = o.slice(1);
        return {
            params: u.reduce((m, { paramName: b, isOptional: E }, S)=>{
                if (b === "*") {
                    let T = h[S] || "";
                    d = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1");
                }
                const D = h[S];
                return E && !D ? m[b] = void 0 : m[b] = (D || "").replace(/%2F/g, "/"), m;
            }, {}),
            pathname: f,
            pathnameBase: d,
            pattern: l
        };
    }
    function Cb(l, r = !1, i = !0) {
        ln(l === "*" || !l.endsWith("*") || l.endsWith("/*"), `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`);
        let u = [], o = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, h, p)=>(u.push({
                paramName: h,
                isOptional: p != null
            }), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return l.endsWith("*") ? (u.push({
            paramName: "*"
        }), o += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? o += "\\/*$" : l !== "" && l !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, r ? void 0 : "i"),
            u
        ];
    }
    function xb(l) {
        try {
            return l.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return ln(!1, `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), l;
        }
    }
    function An(l, r) {
        if (r === "/") return l;
        if (!l.toLowerCase().startsWith(r.toLowerCase())) return null;
        let i = r.endsWith("/") ? r.length - 1 : r.length, u = l.charAt(i);
        return u && u !== "/" ? null : l.slice(i) || "/";
    }
    function Rb(l, r = "/") {
        let { pathname: i, search: u = "", hash: o = "" } = typeof l == "string" ? Da(l) : l;
        return {
            pathname: i ? i.startsWith("/") ? i : Ab(i, r) : r,
            search: Mb(u),
            hash: Nb(o)
        };
    }
    function Ab(l, r) {
        let i = r.replace(/\/+$/, "").split("/");
        return l.split("/").forEach((o)=>{
            o === ".." ? i.length > 1 && i.pop() : o !== "." && i.push(o);
        }), i.length > 1 ? i.join("/") : "/";
    }
    function lc(l, r, i, u) {
        return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function _b(l) {
        return l.filter((r, i)=>i === 0 || r.route.path && r.route.path.length > 0);
    }
    function h0(l) {
        let r = _b(l);
        return r.map((i, u)=>u === r.length - 1 ? i.pathname : i.pathnameBase);
    }
    function p0(l, r, i, u = !1) {
        let o;
        typeof l == "string" ? o = Da(l) : (o = {
            ...l
        }, Pe(!o.pathname || !o.pathname.includes("?"), lc("?", "pathname", "search", o)), Pe(!o.pathname || !o.pathname.includes("#"), lc("#", "pathname", "hash", o)), Pe(!o.search || !o.search.includes("#"), lc("#", "search", "hash", o)));
        let f = l === "" || o.pathname === "", d = f ? "/" : o.pathname, h;
        if (d == null) h = i;
        else {
            let E = r.length - 1;
            if (!u && d.startsWith("..")) {
                let S = d.split("/");
                for(; S[0] === "..";)S.shift(), E -= 1;
                o.pathname = S.join("/");
            }
            h = E >= 0 ? r[E] : "/";
        }
        let p = Rb(o, h), m = d && d !== "/" && d.endsWith("/"), b = (f || d === ".") && i.endsWith("/");
        return !p.pathname.endsWith("/") && (m || b) && (p.pathname += "/"), p;
    }
    var Rn = (l)=>l.join("/").replace(/\/\/+/g, "/"), wb = (l)=>l.replace(/\/+$/, "").replace(/^\/*/, "/"), Mb = (l)=>!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Nb = (l)=>!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l;
    function jb(l) {
        return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
    }
    var g0 = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(g0);
    var Pb = [
        "GET",
        ...g0
    ];
    new Set(Pb);
    var Ca = O.createContext(null);
    Ca.displayName = "DataRouter";
    var Au = O.createContext(null);
    Au.displayName = "DataRouterState";
    var m0 = O.createContext({
        isTransitioning: !1
    });
    m0.displayName = "ViewTransition";
    var Lb = O.createContext(new Map);
    Lb.displayName = "Fetchers";
    var kb = O.createContext(null);
    kb.displayName = "Await";
    var un = O.createContext(null);
    un.displayName = "Navigation";
    var Yl = O.createContext(null);
    Yl.displayName = "Location";
    var _n = O.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    _n.displayName = "Route";
    var Vc = O.createContext(null);
    Vc.displayName = "RouteError";
    function Vb(l, { relative: r } = {}) {
        Pe(Il(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: i, navigator: u } = O.useContext(un), { hash: o, pathname: f, search: d } = Xl(l, {
            relative: r
        }), h = f;
        return i !== "/" && (h = f === "/" ? i : Rn([
            i,
            f
        ])), u.createHref({
            pathname: h,
            search: d,
            hash: o
        });
    }
    function Il() {
        return O.useContext(Yl) != null;
    }
    function wr() {
        return Pe(Il(), "useLocation() may be used only in the context of a <Router> component."), O.useContext(Yl).location;
    }
    var v0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function y0(l) {
        O.useContext(un).static || O.useLayoutEffect(l);
    }
    function Bb() {
        let { isDataRoute: l } = O.useContext(_n);
        return l ? Fb() : zb();
    }
    function zb() {
        Pe(Il(), "useNavigate() may be used only in the context of a <Router> component.");
        let l = O.useContext(Ca), { basename: r, navigator: i } = O.useContext(un), { matches: u } = O.useContext(_n), { pathname: o } = wr(), f = JSON.stringify(h0(u)), d = O.useRef(!1);
        return y0(()=>{
            d.current = !0;
        }), O.useCallback((p, m = {})=>{
            if (ln(d.current, v0), !d.current) return;
            if (typeof p == "number") {
                i.go(p);
                return;
            }
            let b = p0(p, JSON.parse(f), o, m.relative === "path");
            l == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : Rn([
                r,
                b.pathname
            ])), (m.replace ? i.replace : i.push)(b, m.state, m);
        }, [
            r,
            i,
            f,
            o,
            l
        ]);
    }
    O.createContext(null);
    function Xl(l, { relative: r } = {}) {
        let { matches: i } = O.useContext(_n), { pathname: u } = wr(), o = JSON.stringify(h0(i));
        return O.useMemo(()=>p0(l, JSON.parse(o), u, r === "path"), [
            l,
            o,
            u,
            r
        ]);
    }
    function Ub(l, r) {
        return b0(l, r);
    }
    function b0(l, r, i, u) {
        Pe(Il(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: f } = O.useContext(un), { matches: d } = O.useContext(_n), h = d[d.length - 1], p = h ? h.params : {}, m = h ? h.pathname : "/", b = h ? h.pathnameBase : "/", E = h && h.route;
        {
            let k = E && E.path || "";
            S0(m, !E || k.endsWith("*") || k.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === "/" ? "*" : `${k}/*`}">.`);
        }
        let S = wr(), D;
        if (r) {
            let k = typeof r == "string" ? Da(r) : r;
            Pe(b === "/" || k.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${k.pathname}" was given in the \`location\` prop.`), D = k;
        } else D = S;
        let T = D.pathname || "/", R = T;
        if (b !== "/") {
            let k = b.replace(/^\//, "").split("/");
            R = "/" + T.replace(/^\//, "").split("/").slice(k.length).join("/");
        }
        let M = !f && i && i.matches && i.matches.length > 0 ? i.matches : c0(l, {
            pathname: R
        });
        ln(E || M != null, `No routes matched location "${D.pathname}${D.search}${D.hash}" `), ln(M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0, `Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let w = Kb(M && M.map((k)=>Object.assign({}, k, {
                params: Object.assign({}, p, k.params),
                pathname: Rn([
                    b,
                    o.encodeLocation ? o.encodeLocation(k.pathname).pathname : k.pathname
                ]),
                pathnameBase: k.pathnameBase === "/" ? b : Rn([
                    b,
                    o.encodeLocation ? o.encodeLocation(k.pathnameBase).pathname : k.pathnameBase
                ])
            })), d, i, u);
        return r && w ? O.createElement(Yl.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...D
                },
                navigationType: "POP"
            }
        }, w) : w;
    }
    function qb() {
        let l = Jb(), r = jb(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), i = l instanceof Error ? l.stack : null, u = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: u
        }, f = {
            padding: "2px 4px",
            backgroundColor: u
        }, d = null;
        return console.error("Error handled by React Router default ErrorBoundary:", l), d = O.createElement(O.Fragment, null, O.createElement("p", null, "💿 Hey developer 👋"), O.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", O.createElement("code", {
            style: f
        }, "ErrorBoundary"), " or", " ", O.createElement("code", {
            style: f
        }, "errorElement"), " prop on your route.")), O.createElement(O.Fragment, null, O.createElement("h2", null, "Unexpected Application Error!"), O.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), i ? O.createElement("pre", {
            style: o
        }, i) : null, d);
    }
    var Hb = O.createElement(qb, null), Qb = class extends O.Component {
        constructor(l){
            super(l), this.state = {
                location: l.location,
                revalidation: l.revalidation,
                error: l.error
            };
        }
        static getDerivedStateFromError(l) {
            return {
                error: l
            };
        }
        static getDerivedStateFromProps(l, r) {
            return r.location !== l.location || r.revalidation !== "idle" && l.revalidation === "idle" ? {
                error: l.error,
                location: l.location,
                revalidation: l.revalidation
            } : {
                error: l.error !== void 0 ? l.error : r.error,
                location: r.location,
                revalidation: l.revalidation || r.revalidation
            };
        }
        componentDidCatch(l, r) {
            console.error("React Router caught the following error during render", l, r);
        }
        render() {
            return this.state.error !== void 0 ? O.createElement(_n.Provider, {
                value: this.props.routeContext
            }, O.createElement(Vc.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Gb({ routeContext: l, match: r, children: i }) {
        let u = O.useContext(Ca);
        return u && u.static && u.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = r.route.id), O.createElement(_n.Provider, {
            value: l
        }, i);
    }
    function Kb(l, r = [], i = null, u = null) {
        if (l == null) {
            if (!i) return null;
            if (i.errors) l = i.matches;
            else if (r.length === 0 && !i.initialized && i.matches.length > 0) l = i.matches;
            else return null;
        }
        let o = l, f = i?.errors;
        if (f != null) {
            let p = o.findIndex((m)=>m.route.id && f?.[m.route.id] !== void 0);
            Pe(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), o = o.slice(0, Math.min(o.length, p + 1));
        }
        let d = !1, h = -1;
        if (i) for(let p = 0; p < o.length; p++){
            let m = o[p];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = p), m.route.id) {
                let { loaderData: b, errors: E } = i, S = m.route.loader && !b.hasOwnProperty(m.route.id) && (!E || E[m.route.id] === void 0);
                if (m.route.lazy || S) {
                    d = !0, h >= 0 ? o = o.slice(0, h + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((p, m, b)=>{
            let E, S = !1, D = null, T = null;
            i && (E = f && m.route.id ? f[m.route.id] : void 0, D = m.route.errorElement || Hb, d && (h < 0 && b === 0 ? (S0("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), S = !0, T = null) : h === b && (S = !0, T = m.route.hydrateFallbackElement || null)));
            let R = r.concat(o.slice(0, b + 1)), M = ()=>{
                let w;
                return E ? w = D : S ? w = T : m.route.Component ? w = O.createElement(m.route.Component, null) : m.route.element ? w = m.route.element : w = p, O.createElement(Gb, {
                    match: m,
                    routeContext: {
                        outlet: p,
                        matches: R,
                        isDataRoute: i != null
                    },
                    children: w
                });
            };
            return i && (m.route.ErrorBoundary || m.route.errorElement || b === 0) ? O.createElement(Qb, {
                location: i.location,
                revalidation: i.revalidation,
                component: D,
                error: E,
                children: M(),
                routeContext: {
                    outlet: null,
                    matches: R,
                    isDataRoute: !0
                }
            }) : M();
        }, null);
    }
    function Bc(l) {
        return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Yb(l) {
        let r = O.useContext(Ca);
        return Pe(r, Bc(l)), r;
    }
    function Ib(l) {
        let r = O.useContext(Au);
        return Pe(r, Bc(l)), r;
    }
    function Xb(l) {
        let r = O.useContext(_n);
        return Pe(r, Bc(l)), r;
    }
    function zc(l) {
        let r = Xb(l), i = r.matches[r.matches.length - 1];
        return Pe(i.route.id, `${l} can only be used on routes that contain a unique "id"`), i.route.id;
    }
    function Zb() {
        return zc("useRouteId");
    }
    function Jb() {
        let l = O.useContext(Vc), r = Ib("useRouteError"), i = zc("useRouteError");
        return l !== void 0 ? l : r.errors?.[i];
    }
    function Fb() {
        let { router: l } = Yb("useNavigate"), r = zc("useNavigate"), i = O.useRef(!1);
        return y0(()=>{
            i.current = !0;
        }), O.useCallback(async (o, f = {})=>{
            ln(i.current, v0), i.current && (typeof o == "number" ? l.navigate(o) : await l.navigate(o, {
                fromRouteId: r,
                ...f
            }));
        }, [
            l,
            r
        ]);
    }
    var cg = {};
    function S0(l, r, i) {
        !r && !cg[l] && (cg[l] = !0, ln(!1, i));
    }
    O.memo(Wb);
    function Wb({ routes: l, future: r, state: i }) {
        return b0(l, void 0, i, r);
    }
    function yu(l) {
        Pe(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function $b({ basename: l = "/", children: r = null, location: i, navigationType: u = "POP", navigator: o, static: f = !1 }) {
        Pe(!Il(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let d = l.replace(/^\/*/, "/"), h = O.useMemo(()=>({
                basename: d,
                navigator: o,
                static: f,
                future: {}
            }), [
            d,
            o,
            f
        ]);
        typeof i == "string" && (i = Da(i));
        let { pathname: p = "/", search: m = "", hash: b = "", state: E = null, key: S = "default" } = i, D = O.useMemo(()=>{
            let T = An(p, d);
            return T == null ? null : {
                location: {
                    pathname: T,
                    search: m,
                    hash: b,
                    state: E,
                    key: S
                },
                navigationType: u
            };
        }, [
            d,
            p,
            m,
            b,
            E,
            S,
            u
        ]);
        return ln(D != null, `<Router basename="${d}"> is not able to match the URL "${p}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`), D == null ? null : O.createElement(un.Provider, {
            value: h
        }, O.createElement(Yl.Provider, {
            children: r,
            value: D
        }));
    }
    function e2({ children: l, location: r }) {
        return Ub(Ec(l), r);
    }
    function Ec(l, r = []) {
        let i = [];
        return O.Children.forEach(l, (u, o)=>{
            if (!O.isValidElement(u)) return;
            let f = [
                ...r,
                o
            ];
            if (u.type === O.Fragment) {
                i.push.apply(i, Ec(u.props.children, f));
                return;
            }
            Pe(u.type === yu, `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Pe(!u.props.index || !u.props.children, "An index route cannot have child routes.");
            let d = {
                id: u.props.id || f.join("-"),
                caseSensitive: u.props.caseSensitive,
                element: u.props.element,
                Component: u.props.Component,
                index: u.props.index,
                path: u.props.path,
                loader: u.props.loader,
                action: u.props.action,
                hydrateFallbackElement: u.props.hydrateFallbackElement,
                HydrateFallback: u.props.HydrateFallback,
                errorElement: u.props.errorElement,
                ErrorBoundary: u.props.ErrorBoundary,
                hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
                shouldRevalidate: u.props.shouldRevalidate,
                handle: u.props.handle,
                lazy: u.props.lazy
            };
            u.props.children && (d.children = Ec(u.props.children, f)), i.push(d);
        }), i;
    }
    var bu = "get", Su = "application/x-www-form-urlencoded";
    function _u(l) {
        return l != null && typeof l.tagName == "string";
    }
    function t2(l) {
        return _u(l) && l.tagName.toLowerCase() === "button";
    }
    function n2(l) {
        return _u(l) && l.tagName.toLowerCase() === "form";
    }
    function r2(l) {
        return _u(l) && l.tagName.toLowerCase() === "input";
    }
    function a2(l) {
        return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
    }
    function l2(l, r) {
        return l.button === 0 && (!r || r === "_self") && !a2(l);
    }
    var du = null;
    function i2() {
        if (du === null) try {
            new FormData(document.createElement("form"), 0), du = !1;
        } catch  {
            du = !0;
        }
        return du;
    }
    var u2 = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function ic(l) {
        return l != null && !u2.has(l) ? (ln(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Su}"`), null) : l;
    }
    function s2(l, r) {
        let i, u, o, f, d;
        if (n2(l)) {
            let h = l.getAttribute("action");
            u = h ? An(h, r) : null, i = l.getAttribute("method") || bu, o = ic(l.getAttribute("enctype")) || Su, f = new FormData(l);
        } else if (t2(l) || r2(l) && (l.type === "submit" || l.type === "image")) {
            let h = l.form;
            if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = l.getAttribute("formaction") || h.getAttribute("action");
            if (u = p ? An(p, r) : null, i = l.getAttribute("formmethod") || h.getAttribute("method") || bu, o = ic(l.getAttribute("formenctype")) || ic(h.getAttribute("enctype")) || Su, f = new FormData(h, l), !i2()) {
                let { name: m, type: b, value: E } = l;
                if (b === "image") {
                    let S = m ? `${m}.` : "";
                    f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
                } else m && f.append(m, E);
            }
        } else {
            if (_u(l)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            i = bu, u = null, o = Su, d = l;
        }
        return f && o === "text/plain" && (d = f, f = void 0), {
            action: u,
            method: i.toLowerCase(),
            encType: o,
            formData: f,
            body: d
        };
    }
    function Uc(l, r) {
        if (l === !1 || l === null || typeof l > "u") throw new Error(r);
    }
    async function o2(l, r) {
        if (l.id in r) return r[l.id];
        try {
            let i = await import(l.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return r[l.id] = i, i;
        } catch (i) {
            return console.error(`Error loading route module \`${l.module}\`, reloading page...`), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function c2(l) {
        return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
    }
    async function f2(l, r, i) {
        let u = await Promise.all(l.map(async (o)=>{
            let f = r.routes[o.route.id];
            if (f) {
                let d = await o2(f, i);
                return d.links ? d.links() : [];
            }
            return [];
        }));
        return g2(u.flat(1).filter(c2).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function fg(l, r, i, u, o, f) {
        let d = (p, m)=>i[m] ? p.route.id !== i[m].route.id : !0, h = (p, m)=>i[m].pathname !== p.pathname || i[m].route.path?.endsWith("*") && i[m].params["*"] !== p.params["*"];
        return f === "assets" ? r.filter((p, m)=>d(p, m) || h(p, m)) : f === "data" ? r.filter((p, m)=>{
            let b = u.routes[p.route.id];
            if (!b || !b.hasLoader) return !1;
            if (d(p, m) || h(p, m)) return !0;
            if (p.route.shouldRevalidate) {
                let E = p.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: i[0]?.params || {},
                    nextUrl: new URL(l, window.origin),
                    nextParams: p.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof E == "boolean") return E;
            }
            return !0;
        }) : [];
    }
    function d2(l, r, { includeHydrateFallback: i } = {}) {
        return h2(l.map((u)=>{
            let o = r.routes[u.route.id];
            if (!o) return [];
            let f = [
                o.module
            ];
            return o.clientActionModule && (f = f.concat(o.clientActionModule)), o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)), i && o.hydrateFallbackModule && (f = f.concat(o.hydrateFallbackModule)), o.imports && (f = f.concat(o.imports)), f;
        }).flat(1));
    }
    function h2(l) {
        return [
            ...new Set(l)
        ];
    }
    function p2(l) {
        let r = {}, i = Object.keys(l).sort();
        for (let u of i)r[u] = l[u];
        return r;
    }
    function g2(l, r) {
        let i = new Set;
        return new Set(r), l.reduce((u, o)=>{
            let f = JSON.stringify(p2(o));
            return i.has(f) || (i.add(f), u.push({
                key: f,
                link: o
            })), u;
        }, []);
    }
    function m2(l, r) {
        let i = typeof l == "string" ? new URL(l, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : l;
        return i.pathname === "/" ? i.pathname = "_root.data" : r && An(i.pathname, r) === "/" ? i.pathname = `${r.replace(/\/$/, "")}/_root.data` : i.pathname = `${i.pathname.replace(/\/$/, "")}.data`, i;
    }
    function E0() {
        let l = O.useContext(Ca);
        return Uc(l, "You must render this element inside a <DataRouterContext.Provider> element"), l;
    }
    function v2() {
        let l = O.useContext(Au);
        return Uc(l, "You must render this element inside a <DataRouterStateContext.Provider> element"), l;
    }
    var qc = O.createContext(void 0);
    qc.displayName = "FrameworkContext";
    function O0() {
        let l = O.useContext(qc);
        return Uc(l, "You must render this element inside a <HydratedRouter> element"), l;
    }
    function y2(l, r) {
        let i = O.useContext(qc), [u, o] = O.useState(!1), [f, d] = O.useState(!1), { onFocus: h, onBlur: p, onMouseEnter: m, onMouseLeave: b, onTouchStart: E } = r, S = O.useRef(null);
        O.useEffect(()=>{
            if (l === "render" && d(!0), l === "viewport") {
                let R = (w)=>{
                    w.forEach((k)=>{
                        d(k.isIntersecting);
                    });
                }, M = new IntersectionObserver(R, {
                    threshold: .5
                });
                return S.current && M.observe(S.current), ()=>{
                    M.disconnect();
                };
            }
        }, [
            l
        ]), O.useEffect(()=>{
            if (u) {
                let R = setTimeout(()=>{
                    d(!0);
                }, 100);
                return ()=>{
                    clearTimeout(R);
                };
            }
        }, [
            u
        ]);
        let D = ()=>{
            o(!0);
        }, T = ()=>{
            o(!1), d(!1);
        };
        return i ? l !== "intent" ? [
            f,
            S,
            {}
        ] : [
            f,
            S,
            {
                onFocus: Ll(h, D),
                onBlur: Ll(p, T),
                onMouseEnter: Ll(m, D),
                onMouseLeave: Ll(b, T),
                onTouchStart: Ll(E, D)
            }
        ] : [
            !1,
            S,
            {}
        ];
    }
    function Ll(l, r) {
        return (i)=>{
            l && l(i), i.defaultPrevented || r(i);
        };
    }
    function b2({ page: l, ...r }) {
        let { router: i } = E0(), u = O.useMemo(()=>c0(i.routes, l, i.basename), [
            i.routes,
            l,
            i.basename
        ]);
        return u ? O.createElement(E2, {
            page: l,
            matches: u,
            ...r
        }) : null;
    }
    function S2(l) {
        let { manifest: r, routeModules: i } = O0(), [u, o] = O.useState([]);
        return O.useEffect(()=>{
            let f = !1;
            return f2(l, r, i).then((d)=>{
                f || o(d);
            }), ()=>{
                f = !0;
            };
        }, [
            l,
            r,
            i
        ]), u;
    }
    function E2({ page: l, matches: r, ...i }) {
        let u = wr(), { manifest: o, routeModules: f } = O0(), { basename: d } = E0(), { loaderData: h, matches: p } = v2(), m = O.useMemo(()=>fg(l, r, p, o, u, "data"), [
            l,
            r,
            p,
            o,
            u
        ]), b = O.useMemo(()=>fg(l, r, p, o, u, "assets"), [
            l,
            r,
            p,
            o,
            u
        ]), E = O.useMemo(()=>{
            if (l === u.pathname + u.search + u.hash) return [];
            let T = new Set, R = !1;
            if (r.forEach((w)=>{
                let k = o.routes[w.route.id];
                !k || !k.hasLoader || (!m.some((V)=>V.route.id === w.route.id) && w.route.id in h && f[w.route.id]?.shouldRevalidate || k.hasClientLoader ? R = !0 : T.add(w.route.id));
            }), T.size === 0) return [];
            let M = m2(l, d);
            return R && T.size > 0 && M.searchParams.set("_routes", r.filter((w)=>T.has(w.route.id)).map((w)=>w.route.id).join(",")), [
                M.pathname + M.search
            ];
        }, [
            d,
            h,
            u,
            o,
            m,
            r,
            l,
            f
        ]), S = O.useMemo(()=>d2(b, o), [
            b,
            o
        ]), D = S2(b);
        return O.createElement(O.Fragment, null, E.map((T)=>O.createElement("link", {
                key: T,
                rel: "prefetch",
                as: "fetch",
                href: T,
                ...i
            })), S.map((T)=>O.createElement("link", {
                key: T,
                rel: "modulepreload",
                href: T,
                ...i
            })), D.map(({ key: T, link: R })=>O.createElement("link", {
                key: T,
                ...R
            })));
    }
    function O2(...l) {
        return (r)=>{
            l.forEach((i)=>{
                typeof i == "function" ? i(r) : i != null && (i.current = r);
            });
        };
    }
    var T0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        T0 && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function T2({ basename: l, children: r, window: i }) {
        let u = O.useRef();
        u.current == null && (u.current = fb({
            window: i,
            v5Compat: !0
        }));
        let o = u.current, [f, d] = O.useState({
            action: o.action,
            location: o.location
        }), h = O.useCallback((p)=>{
            O.startTransition(()=>d(p));
        }, [
            d
        ]);
        return O.useLayoutEffect(()=>o.listen(h), [
            o,
            h
        ]), O.createElement($b, {
            basename: l,
            children: r,
            location: f.location,
            navigationType: f.action,
            navigator: o
        });
    }
    var D0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, zl = O.forwardRef(function({ onClick: r, discover: i = "render", prefetch: u = "none", relative: o, reloadDocument: f, replace: d, state: h, target: p, to: m, preventScrollReset: b, viewTransition: E, ...S }, D) {
        let { basename: T } = O.useContext(un), R = typeof m == "string" && D0.test(m), M, w = !1;
        if (typeof m == "string" && R && (M = m, T0)) try {
            let ae = new URL(window.location.href), Le = m.startsWith("//") ? new URL(ae.protocol + m) : new URL(m), Qe = An(Le.pathname, T);
            Le.origin === ae.origin && Qe != null ? m = Qe + Le.search + Le.hash : w = !0;
        } catch  {
            ln(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let k = Vb(m, {
            relative: o
        }), [V, Q, G] = y2(u, S), Y = R2(m, {
            replace: d,
            state: h,
            target: p,
            preventScrollReset: b,
            relative: o,
            viewTransition: E
        });
        function le(ae) {
            r && r(ae), ae.defaultPrevented || Y(ae);
        }
        let se = O.createElement("a", {
            ...S,
            ...G,
            href: M || k,
            onClick: w || f ? r : le,
            ref: O2(D, Q),
            target: p,
            "data-discover": !R && i === "render" ? "true" : void 0
        });
        return V && !R ? O.createElement(O.Fragment, null, se, O.createElement(b2, {
            page: k
        })) : se;
    });
    zl.displayName = "Link";
    var D2 = O.forwardRef(function({ "aria-current": r = "page", caseSensitive: i = !1, className: u = "", end: o = !1, style: f, to: d, viewTransition: h, children: p, ...m }, b) {
        let E = Xl(d, {
            relative: m.relative
        }), S = wr(), D = O.useContext(Au), { navigator: T, basename: R } = O.useContext(un), M = D != null && N2(E) && h === !0, w = T.encodeLocation ? T.encodeLocation(E).pathname : E.pathname, k = S.pathname, V = D && D.navigation && D.navigation.location ? D.navigation.location.pathname : null;
        i || (k = k.toLowerCase(), V = V ? V.toLowerCase() : null, w = w.toLowerCase()), V && R && (V = An(V, R) || V);
        const Q = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
        let G = k === w || !o && k.startsWith(w) && k.charAt(Q) === "/", Y = V != null && (V === w || !o && V.startsWith(w) && V.charAt(w.length) === "/"), le = {
            isActive: G,
            isPending: Y,
            isTransitioning: M
        }, se = G ? r : void 0, ae;
        typeof u == "function" ? ae = u(le) : ae = [
            u,
            G ? "active" : null,
            Y ? "pending" : null,
            M ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Le = typeof f == "function" ? f(le) : f;
        return O.createElement(zl, {
            ...m,
            "aria-current": se,
            className: ae,
            ref: b,
            style: Le,
            to: d,
            viewTransition: h
        }, typeof p == "function" ? p(le) : p);
    });
    D2.displayName = "NavLink";
    var C2 = O.forwardRef(({ discover: l = "render", fetcherKey: r, navigate: i, reloadDocument: u, replace: o, state: f, method: d = bu, action: h, onSubmit: p, relative: m, preventScrollReset: b, viewTransition: E, ...S }, D)=>{
        let T = w2(), R = M2(h, {
            relative: m
        }), M = d.toLowerCase() === "get" ? "get" : "post", w = typeof h == "string" && D0.test(h), k = (V)=>{
            if (p && p(V), V.defaultPrevented) return;
            V.preventDefault();
            let Q = V.nativeEvent.submitter, G = Q?.getAttribute("formmethod") || d;
            T(Q || V.currentTarget, {
                fetcherKey: r,
                method: G,
                navigate: i,
                replace: o,
                state: f,
                relative: m,
                preventScrollReset: b,
                viewTransition: E
            });
        };
        return O.createElement("form", {
            ref: D,
            method: M,
            action: R,
            onSubmit: u ? p : k,
            ...S,
            "data-discover": !w && l === "render" ? "true" : void 0
        });
    });
    C2.displayName = "Form";
    function x2(l) {
        return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function C0(l) {
        let r = O.useContext(Ca);
        return Pe(r, x2(l)), r;
    }
    function R2(l, { target: r, replace: i, state: u, preventScrollReset: o, relative: f, viewTransition: d } = {}) {
        let h = Bb(), p = wr(), m = Xl(l, {
            relative: f
        });
        return O.useCallback((b)=>{
            if (l2(b, r)) {
                b.preventDefault();
                let E = i !== void 0 ? i : Ql(p) === Ql(m);
                h(l, {
                    replace: E,
                    state: u,
                    preventScrollReset: o,
                    relative: f,
                    viewTransition: d
                });
            }
        }, [
            p,
            h,
            m,
            i,
            u,
            r,
            l,
            o,
            f,
            d
        ]);
    }
    var A2 = 0, _2 = ()=>`__${String(++A2)}__`;
    function w2() {
        let { router: l } = C0("useSubmit"), { basename: r } = O.useContext(un), i = Zb();
        return O.useCallback(async (u, o = {})=>{
            let { action: f, method: d, encType: h, formData: p, body: m } = s2(u, r);
            if (o.navigate === !1) {
                let b = o.fetcherKey || _2();
                await l.fetch(b, i, o.action || f, {
                    preventScrollReset: o.preventScrollReset,
                    formData: p,
                    body: m,
                    formMethod: o.method || d,
                    formEncType: o.encType || h,
                    flushSync: o.flushSync
                });
            } else await l.navigate(o.action || f, {
                preventScrollReset: o.preventScrollReset,
                formData: p,
                body: m,
                formMethod: o.method || d,
                formEncType: o.encType || h,
                replace: o.replace,
                state: o.state,
                fromRouteId: i,
                flushSync: o.flushSync,
                viewTransition: o.viewTransition
            });
        }, [
            l,
            r,
            i
        ]);
    }
    function M2(l, { relative: r } = {}) {
        let { basename: i } = O.useContext(un), u = O.useContext(_n);
        Pe(u, "useFormAction must be used inside a RouteContext");
        let [o] = u.matches.slice(-1), f = {
            ...Xl(l || ".", {
                relative: r
            })
        }, d = wr();
        if (l == null) {
            f.search = d.search;
            let h = new URLSearchParams(f.search), p = h.getAll("index");
            if (p.some((b)=>b === "")) {
                h.delete("index"), p.filter((E)=>E).forEach((E)=>h.append("index", E));
                let b = h.toString();
                f.search = b ? `?${b}` : "";
            }
        }
        return (!l || l === ".") && o.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Rn([
            i,
            f.pathname
        ])), Ql(f);
    }
    function N2(l, r = {}) {
        let i = O.useContext(m0);
        Pe(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: u } = C0("useViewTransitionState"), o = Xl(l, {
            relative: r.relative
        });
        if (!i.isTransitioning) return !1;
        let f = An(i.currentLocation.pathname, u) || i.currentLocation.pathname, d = An(i.nextLocation.pathname, u) || i.nextLocation.pathname;
        return Cu(o.pathname, d) != null || Cu(o.pathname, f) != null;
    }
    new TextEncoder;
    var uc = {
        exports: {}
    }, sc, dg;
    function j2() {
        if (dg) return sc;
        dg = 1;
        var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        return sc = l, sc;
    }
    var oc, hg;
    function P2() {
        if (hg) return oc;
        hg = 1;
        var l = j2();
        function r() {}
        function i() {}
        return i.resetWarningCache = r, oc = function() {
            function u(d, h, p, m, b, E) {
                if (E !== l) {
                    var S = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw S.name = "Invariant Violation", S;
                }
            }
            u.isRequired = u;
            function o() {
                return u;
            }
            var f = {
                array: u,
                bigint: u,
                bool: u,
                func: u,
                number: u,
                object: u,
                string: u,
                symbol: u,
                any: u,
                arrayOf: o,
                element: u,
                elementType: u,
                instanceOf: o,
                node: u,
                objectOf: o,
                oneOf: o,
                oneOfType: o,
                shape: o,
                exact: o,
                checkPropTypes: i,
                resetWarningCache: r
            };
            return f.PropTypes = f, f;
        }, oc;
    }
    var pg;
    function L2() {
        return pg || (pg = 1, uc.exports = P2()()), uc.exports;
    }
    var k2 = L2();
    const Ze = wc(k2), x0 = pv.memo(({ hasGameStarted: l, isGameOver: r, isWhiteTurn: i, isFlipped: u, timerDuration: o })=>{
        const f = ur(), [d, h] = O.useState(o), [p, m] = O.useState(o), b = O.useRef(null);
        O.useEffect(()=>{
            l && (h(o), m(o));
        }, [
            l,
            r,
            o
        ]), O.useEffect(()=>{
            r || (d === 0 ? f(bc(!0, "Black Won by Time")) : p === 0 && f(bc(!0, "White Won by Time")));
        }, [
            d,
            p,
            r,
            f
        ]), O.useEffect(()=>{
            if (!l || r) {
                b.current && (clearInterval(b.current), b.current = null), h(o), m(o);
                return;
            }
            if (!b.current) return b.current = setInterval(()=>{
                i ? h((D)=>D <= 1 ? (clearInterval(b.current), b.current = null, 0) : D - 1) : m((D)=>D <= 1 ? (clearInterval(b.current), b.current = null, 0) : D - 1);
            }, 1e3), ()=>{
                clearInterval(b.current), b.current = null;
            };
        }, [
            l,
            r,
            o,
            f,
            i
        ]);
        const E = i ? "active-turn" : "", S = i ? "" : "active-turn";
        return y.jsx("div", {
            className: "left-panel",
            children: y.jsx("div", {
                className: "clocks-container",
                children: u ? y.jsxs(y.Fragment, {
                    children: [
                        y.jsxs("div", {
                            className: `clock ${E}`,
                            children: [
                                y.jsx("span", {
                                    role: "img",
                                    "aria-label": "whitesymbol",
                                    children: "⚪"
                                }),
                                " ",
                                d
                            ]
                        }),
                        y.jsxs("div", {
                            className: `clock ${S}`,
                            children: [
                                y.jsx("span", {
                                    role: "img",
                                    "aria-label": "blacksymbol",
                                    children: "⚫"
                                }),
                                " ",
                                p
                            ]
                        })
                    ]
                }) : y.jsxs(y.Fragment, {
                    children: [
                        y.jsxs("div", {
                            className: `clock ${S}`,
                            children: [
                                y.jsx("span", {
                                    role: "img",
                                    "aria-label": "blacksymbol",
                                    children: "⚫"
                                }),
                                " ",
                                p
                            ]
                        }),
                        y.jsxs("div", {
                            className: `clock ${E}`,
                            children: [
                                y.jsx("span", {
                                    role: "img",
                                    "aria-label": "whitesymbol",
                                    children: "⚪"
                                }),
                                " ",
                                d
                            ]
                        })
                    ]
                })
            })
        });
    });
    x0.propTypes = {
        hasGameStarted: Ze.bool.isRequired,
        isWhiteTurn: Ze.bool.isRequired,
        isGameOver: Ze.bool.isRequired,
        isFlipped: Ze.bool.isRequired,
        timerDuration: Ze.number.isRequired
    };
    const V2 = ({ moveHistory: l })=>{
        const r = O.useRef(null);
        return O.useEffect(()=>{
            r.current && (r.current.scrollTop = r.current.scrollHeight);
        }, [
            l
        ]), y.jsxs("div", {
            className: "move-history",
            children: [
                y.jsx("h3", {
                    children: "Move History"
                }),
                y.jsxs("table", {
                    children: [
                        y.jsx("thead", {
                            children: y.jsxs("tr", {
                                children: [
                                    y.jsx("th", {
                                        children: "#"
                                    }),
                                    y.jsx("th", {
                                        children: "White"
                                    }),
                                    y.jsx("th", {
                                        children: "Black"
                                    })
                                ]
                            })
                        }),
                        y.jsx("tbody", {
                            ref: r,
                            children: l && l.map((i, u)=>u % 2 === 0 ? y.jsxs("tr", {
                                    children: [
                                        y.jsxs("td", {
                                            children: [
                                                Math.floor(u / 2) + 1,
                                                "."
                                            ]
                                        }),
                                        y.jsx("td", {
                                            children: i
                                        }),
                                        y.jsx("td", {
                                            children: l[u + 1] || ""
                                        })
                                    ]
                                }, u / 2) : null)
                        })
                    ]
                })
            ]
        });
    }, B2 = "data:audio/mpeg;base64,SUQzBAAAAAABH1RFTkMAAAALAAADUHJvIFRvb2xzAFRYWFgAAAAjAAADb3JpZ2luYXRvcl9yZWZlcmVuY2UAYWFPNEt0IUJLdlNrAFREUkMAAAAMAAADMjAxOS0wNC0yMQBUWFhYAAAAGgAAA3RpbWVfcmVmZXJlbmNlADE3MjgwMDAwMABUU1NFAAAADwAAA0xhdmY1OC4yOS4xMDAAAAAAAAAAAAAAAP/7VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEluZm8AAAAPAAAACAAADMAALS0tLS0tLS0tLS0tS0tLS0tLS0tLS0tLaWlpaWlpaWlpaWlpaYeHh4eHh4eHh4eHh6WlpaWlpaWlpaWlpaXDw8PDw8PDw8PDw8Ph4eHh4eHh4eHh4eHh////////////////AAAAAExhdmM1OC41NAAAAAAAAAAAAAAAACQE5gAAAAAAAAzAei0vIf/7lGQAAAMuHciFc0ACKuFWcqGYABC8uU9ZrIAQvopiQzUgADDQIHQuY1I5kkbmEQMZCOBo5LGfhoY3Q5wCCG7FcZeABikmmUyCEDYxYSDJgwFBCeTceaYaoQlKYUGq8uYBgjTQICBQBgl7O5DEOXqSxunjcvp8+///nXp6enpKSkpMGQ8AAAAAVASoEJwMWaIIFnEIOBiwgDC0xA4+sH1AgUBA4XeD/KHP/KOBB2Iz/8oc4PgAAAV9uRSW0SBsALDmsjFUiIVimojFGpsmc0mEHFEgmImJJGdXBQmCU7d1xiRADooPLkDg3Tlo1aDtFMBZFBHFy8KHqaa4WEtu/DhbYDWszG5ukhTXYo8butg1ayrU0pl/f/3Wgvdbk5SZ3O1cr+W98/79S93//LKmEAY9bwE5c274qni5H6i+zFmyQGVb9iwZ0OLDTNIQtIz9JN/B44YsS8DsQxmDdxty3QJkkDLoPRNX/t/KqgA/AQBAxudAcqzBpfMoGwyjGTUw1P/7lGQKjNP7PEoXciAAMKIIwuy8AA40mRItpHRAvgnjjPSKCMvrY0aVAMPiIWG3ouayUpjwZmEhIIwqYgDJigBC2gLABTENAWoLgckQqLhHCQIMjBYcIJGJAiDJF01GVNT02U5w6Ymqkkq1o2RZToLqSUtSSWu3mJrRpLqW1J/3WrutaKKLTM9mwMnW54TBIAGFVQwoBg8EHKXCBUOHL9KRM69DVlqA5E1S5NUpxHiEnmW4ucVtnVdo/gj6n/RrCIeMjIUgxXINrUzbAEyO4OajQEgBVIMREDMUw3IcNDWTru83qTNagzJCciABx9FmgqgQNEgUFMWrKzNaZW77AQ0wAJsgbBUUAkiSRY4CjAJEG/tUL0goDpAuD7n0KNdIodOvt29UXOgUNVm1Xu+z+ixQcg53hkEpCFI8eoMUHKeQUgQEE6BpMpOCCDHKVHHAfXCFxiNQbqBdFFRRHGsgUjbVBCADEgMKGps3iDRM0aBOSPgcfGbNBjqeY45m9Uxgif/7lGQPjNNfIsMTeCtANMJ4kWMpOguUTwwtZYzA/InhQawhmKXTNCmRp5MVDOU1/A3D4dVADBS8Vgh54GUt0FgsCkLuOpTUciUDuFmhr2R5aCScrDJHGOjw66jPSLou5cks/9C9hKt65fbxCGR12hUqwEw5IgHIQUIpsF3EyB3sSWMNwxgDIjKkoDEJCkU5YqdqzP3kiKhkneX0NGrTjtZSzCLdP2oAvMgcm5DmDHnTqnTWgKIZwydHMZpYcXMG3Bt2YmmGDjFGj4raZzajqdEAqPzLvQY5a44rs5OAqNDz21SsJBpx2pinhsBHHrW6/1ertWxdFC6kMRXqeq2l96eK5CnRDHlY0HNg1NPRF9R0w4mMNcRMn+KTIFYmDImSMBQgecB/CuAHYZKokKsCz36tsNXiyaeNwksVdC/8AWiwSWpCUIAsSwTGQoGE5hscCkptEJssKg5g0Z4VZyyhxHhwBZka4OGGSIGtSk0ZRZGMcFkRqGWmOqxCsj40bgcsg//7lGQfDtL/IEKDellwSQKIMGd4Ggx4TwYtc0aQ9YjhxbxoiEeWJ246o3+K9t3wx/VytFNdclWyUV6+1Ewr6jWhvrdlvy7wBZExnztBL8DMEbOFGyERtxgBEo3SGNxVTKjcRm5goKBAZYM1YvPWgqY0vRfEJQYKCmjsZVFld0+7h4ZWtQ7INGw/RkkC4uXSEQASUYVRANQMqMZhOkDBSQBXoyqRgwynKh+YKFAOjRgYHGFinQIGNAGJiCxhMkeBpgsjas4THpuGIRFo9NXbv3KaRCRxwqNLAit5UBKeWi307S2//I2KJEsq76Nt/4yVZ5uowi25CHEwEGMPDjNogxGOkjbc0CMEoJ5YcfMmRAyV/VhDJiCyQVAQQlsvFb87ZgZrzKqCpZj33R4SVdrRuYprI0BmkhpQXnap5yP+ZKqm3zZoTMZ/CmI8x4x0UOBzKYbeIobmZZnPGnjEiqIxKMmVoPGMFvHCFY0ZCIG9y4BQc8VVaYkmvvbDXrbOXaenpf/7lGQoD/LbH7+DemMwTSPIEG8naExogvgObYlBTY8fwb0lmG8tWwfjGz//yvZ9DkAYHAycYyUNTOTEjXGAw93MsfQSemCox1SgYKamTuhACElghTDoSIA01gsyEMAQVAGwRiDsIeuwhTFYKi8s1AzCwOaim284yvHVLQpWNhUnmREkJOALFU5M6DY6jOKQg5wPTn6uNFagMsH4gRybSBkMxAAK2U6onMOOzPyQxolMHAAQPD0WAQhHNO0OS1Fl9LggA2EY4m68tDf4XfhirsVuZi09Z1pL3R5AzknH//5ZsRAhmPAprSYnqbRmmHpgBwDVDA4kfNdWThk0ws5PiQTJFsylw4pAQHjwZTABS3LZwqgGRzdV9MuZ6mgtQRAECyM45NEvStZXzx+ZDLxXpzYYF/TVjAIHzBxIwIbM7FDG1QARhqB+dPJg6bOtfTyVY5NBOCcDBjsxsOMtNjGFk+4TM3NCI2BTHbFVlWoy3gIyABx4io7bFXutzXJA8+c1Z//7lGQmD/LYID6DeTPAVgQH0G8GhAuUgPYOaStBNI5fgbyVoQtTT/eYX/qrSCTKRW1TaF9Eo2ckRFDeLgZlGodSREXAO5JprwOmJjBgdOpmDFpgRAZHHArOMiGTUhswQCDB4vsYTDB0+4Id8yjW4509JXslUzGzSylk0HbW/di7Kmi9cC2LF6nrVOIAYZ5NRnwWjKgNKL4xsDjRsrM1EQBU8xIyQRJCNGexCePiaCuCQZuUpkFZi05gnIhQJfGfTrmeZ2RIc4Sb87CHCkDGZC2OhaKsZ3tXO6yFwpH46V1YhPrzT2d8SVVVgQFGNFxltsaWxHmtAEXCagNShSFHCRo1IVMXMwRicYxvGnBCBBTfVdAVGGS1gplphc5orBJt93mg+/NOKgdzXJ21IPMQRVAHJ211RoSJjscXTKEAS9TSRI3dZPKOTVyQzsxBcYmEb8SGJqZk4OaeDmHXp7+i4giUIFAEe/zhP+glTdbmyd35Q1vCW7BxY8gc7PsyvK9Jqf/7lGQmj/KeID2DeTOwVEPH0HNoPgoQUPYMbyGJVA8egc0Nce6rSTHaP6X/GAYJDUWIBggPmP4cZ2HoVCgQ2GgDppP+bPLmsmh1LMZoWGFBRNGFwS9AyRCgYFwUDAosBtEwaECgJNK9bmWWapqtCGGGVVnvt9yzd4hzBHBtDuoCGEETSxADNAKJThz4zIDMPPDTUoyI5OINzb0gy8sNQgTOCYyNTNOGzSjUyZgsSJHGIKZCKACRqbNacVmzgSOJtN+rqZjk/pNV7tqigVI2yiT5MEggw0NRYTmPkYaBdpuogGWwWYPA5FKzcg6OTpI8uQ2yEyI8w+g2uc9VApSEo4HVyyCcZqmaQCtrpMPZIw3sSZDIL2dZ62a73yt3lIubUMfRLMwVMCeNOSMA/Hxp18xg7J6iJxZAoVNJFMVgDUUE/zU1cQeZCgs1Bsx8IywQ1ZwVDgoq8S7nGglUrxqavVA0t1vVXdmta2bz/+YYVVJJdGFVFF83z0w841aMFgTShP/7lEQtj/JfFLiDW9ICSeJ3AGssWEAAAaQAAAAgAAA0gAAABDSGTXyjF3DZrwOZO9wyHRWAyzQOCZKSCAoKLog0RDMMJROf90k9mHq9BI7ULmz05WPEhs0x27/3fUSJTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==", z2 = "/assets/capture-ZghC9U6S.mp3", U2 = "/assets/board-start-D1dzlFLG.mp3", R0 = ()=>{
        const { enableSound: l } = kc.getState().settings;
        return l;
    }, Oc = (l)=>{
        if (!R0()) return;
        let r;
        switch(l){
            case "move":
                r = new Audio(B2);
                break;
            case "capture":
                r = new Audio(z2);
                break;
            default:
                return;
        }
        r.play();
    }, Tc = ()=>{
        if (!R0()) return;
        new Audio(U2).play();
    };
    function q2(l, r) {
        var i = {};
        for(var u in l)Object.prototype.hasOwnProperty.call(l, u) && r.indexOf(u) < 0 && (i[u] = l[u]);
        if (l != null && typeof Object.getOwnPropertySymbols == "function") for(var o = 0, u = Object.getOwnPropertySymbols(l); o < u.length; o++)r.indexOf(u[o]) < 0 && Object.prototype.propertyIsEnumerable.call(l, u[o]) && (i[u[o]] = l[u[o]]);
        return i;
    }
    const Gl = "abcdefgh".split(""), Eu = {
        a8: "bR",
        b8: "bN",
        c8: "bB",
        d8: "bQ",
        e8: "bK",
        f8: "bB",
        g8: "bN",
        h8: "bR",
        a7: "bP",
        b7: "bP",
        c7: "bP",
        d7: "bP",
        e7: "bP",
        f7: "bP",
        g7: "bP",
        h7: "bP",
        a2: "wP",
        b2: "wP",
        c2: "wP",
        d2: "wP",
        e2: "wP",
        f2: "wP",
        g2: "wP",
        h2: "wP",
        a1: "wR",
        b1: "wN",
        c1: "wB",
        d1: "wQ",
        e1: "wK",
        f1: "wB",
        g1: "wN",
        h1: "wR"
    }, H2 = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7
    }, Q2 = {
        a: 7,
        b: 6,
        c: 5,
        d: 4,
        e: 3,
        f: 2,
        g: 1,
        h: 0
    }, G2 = [
        7,
        6,
        5,
        4,
        3,
        2,
        1,
        0
    ], K2 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ], gg = {
        wP: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsx("path", {
                d: "m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z",
                style: {
                    opacity: "1",
                    fill: "#ffffff",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            })
        })),
        wR: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    opacity: "1",
                    fill: "#ffffff",
                    fillOpacity: "1",
                    fillRule: "evenodd",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 34,14 L 31,17 L 14,17 L 11,14"
                    }),
                    y.jsx("path", {
                        d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17",
                        style: {
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"
                    }),
                    y.jsx("path", {
                        d: "M 11,14 L 34,14",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    })
                ]
            }))
        })),
        wN: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    opacity: "1",
                    fill: "none",
                    fillOpacity: "1",
                    fillRule: "evenodd",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
                        transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    })
                ]
            }))
        })),
        wB: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    opacity: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    fillOpacity: "1",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsxs("g", Object.assign({
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000",
                            strokeLinecap: "butt"
                        }
                    }, {
                        children: [
                            y.jsx("path", {
                                d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"
                            }),
                            y.jsx("path", {
                                d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
                            }),
                            y.jsx("path", {
                                d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
                            })
                        ]
                    })),
                    y.jsx("path", {
                        d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    })
                ]
            }))
        })),
        wQ: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    fill: "#ffffff",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
                    }),
                    y.jsx("path", {
                        d: "M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
                    }),
                    y.jsx("path", {
                        d: "M 11.5,30 C 15,29 30,29 33.5,30",
                        style: {
                            fill: "none"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12,33.5 C 18,32.5 27,32.5 33,33.5",
                        style: {
                            fill: "none"
                        }
                    }),
                    y.jsx("circle", {
                        cx: "6",
                        cy: "12",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "14",
                        cy: "9",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "22.5",
                        cy: "8",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "31",
                        cy: "9",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "39",
                        cy: "12",
                        r: "2"
                    })
                ]
            }))
        })),
        wK: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    fill: "none",
                    fillOpacity: "1",
                    fillRule: "evenodd",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 22.5,11.63 L 22.5,6",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 20,8 L 25,8",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12.5,30 C 18,27 27,27 32.5,30",
                        style: {
                            fill: "none",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5",
                        style: {
                            fill: "none",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12.5,37 C 18,34 27,34 32.5,37",
                        style: {
                            fill: "none",
                            stroke: "#000000"
                        }
                    })
                ]
            }))
        })),
        bP: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsx("path", {
                d: "m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z",
                style: {
                    opacity: "1",
                    fill: "#000000",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            })
        })),
        bR: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    opacity: "1",
                    fill: "#000000",
                    fillOpacity: "1",
                    fillRule: "evenodd",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ",
                        style: {
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12,35.5 L 33,35.5 L 33,35.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 13,31.5 L 32,31.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 14,29.5 L 31,29.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 14,16.5 L 31,16.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 11,14 L 34,14",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    })
                ]
            }))
        })),
        bN: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    opacity: "1",
                    fill: "none",
                    fillOpacity: "1",
                    fillRule: "evenodd",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
                        style: {
                            fill: "#ffffff",
                            stroke: "#ffffff"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
                        transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
                        style: {
                            fill: "#ffffff",
                            stroke: "#ffffff"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ",
                        style: {
                            fill: "#ffffff",
                            stroke: "none"
                        }
                    })
                ]
            }))
        })),
        bB: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    opacity: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    fillOpacity: "1",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsxs("g", Object.assign({
                        style: {
                            fill: "#000000",
                            stroke: "#000000",
                            strokeLinecap: "butt"
                        }
                    }, {
                        children: [
                            y.jsx("path", {
                                d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"
                            }),
                            y.jsx("path", {
                                d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
                            }),
                            y.jsx("path", {
                                d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
                            })
                        ]
                    })),
                    y.jsx("path", {
                        d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeLinejoin: "miter"
                        }
                    })
                ]
            }))
        })),
        bQ: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    fill: "#000000",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z",
                        style: {
                            strokeLinecap: "butt",
                            fill: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z"
                    }),
                    y.jsx("path", {
                        d: "M 11.5,30 C 15,29 30,29 33.5,30"
                    }),
                    y.jsx("path", {
                        d: "m 12,33.5 c 6,-1 15,-1 21,0"
                    }),
                    y.jsx("circle", {
                        cx: "6",
                        cy: "12",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "14",
                        cy: "9",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "22.5",
                        cy: "8",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "31",
                        cy: "9",
                        r: "2"
                    }),
                    y.jsx("circle", {
                        cx: "39",
                        cy: "12",
                        r: "2"
                    }),
                    y.jsx("path", {
                        d: "M 11,38.5 A 35,35 1 0 0 34,38.5",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "butt"
                        }
                    }),
                    y.jsxs("g", Object.assign({
                        style: {
                            fill: "none",
                            stroke: "#ffffff"
                        }
                    }, {
                        children: [
                            y.jsx("path", {
                                d: "M 11,29 A 35,35 1 0 1 34,29"
                            }),
                            y.jsx("path", {
                                d: "M 12.5,31.5 L 32.5,31.5"
                            }),
                            y.jsx("path", {
                                d: "M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
                            }),
                            y.jsx("path", {
                                d: "M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
                            })
                        ]
                    }))
                ]
            }))
        })),
        bK: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: y.jsxs("g", Object.assign({
                style: {
                    fill: "none",
                    fillOpacity: "1",
                    fillRule: "evenodd",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "4",
                    strokeDasharray: "none",
                    strokeOpacity: "1"
                }
            }, {
                children: [
                    y.jsx("path", {
                        d: "M 22.5,11.63 L 22.5,6",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        },
                        id: "path6570"
                    }),
                    y.jsx("path", {
                        d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",
                        style: {
                            fill: "#000000",
                            fillOpacity: "1",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 20,8 L 25,8",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff"
                        }
                    }),
                    y.jsx("path", {
                        d: "M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37",
                        style: {
                            fill: "none",
                            stroke: "#ffffff"
                        }
                    })
                ]
            }))
        }))
    };
    function Dc(l, r, i) {
        const u = r / 8, o = l === "white" ? H2 : Q2, f = l === "white" ? G2 : K2, d = o[i[0]] * u + u / 2, h = f[parseInt(i[1], 10) - 1] * u + u / 2;
        return {
            x: d,
            y: h
        };
    }
    function mg(l) {
        let r = !1;
        return Object.keys(Eu).forEach((i)=>{
            l[i] !== Eu[i] && (r = !0);
        }), Object.keys(l).forEach((i)=>{
            Eu[i] !== l[i] && (r = !0);
        }), r;
    }
    function Y2(l, r) {
        const i = {
            removed: {},
            added: {}
        };
        return Object.keys(l).forEach((u)=>{
            r[u] !== l[u] && (i.removed[u] = l[u]);
        }), Object.keys(r).forEach((u)=>{
            l[u] !== r[u] && (i.added[u] = r[u]);
        }), i;
    }
    function vg(l) {
        return l === "start" ? Eu : typeof l == "string" ? I2(l) : l;
    }
    function I2(l) {
        if (!X2(l)) return {};
        l = l.replace(/ .+$/, "");
        const r = l.split("/"), i = {};
        let u = 8;
        for(let o = 0; o < 8; o++){
            const f = r[o].split("");
            let d = 0;
            for(let h = 0; h < f.length; h++)if (f[h].search(/[1-8]/) !== -1) {
                const p = parseInt(f[h], 10);
                d = d + p;
            } else {
                const p = Gl[d] + u;
                i[p] = J2(f[h]), d = d + 1;
            }
            u = u - 1;
        }
        return i;
    }
    function X2(l) {
        l = l.replace(/ .+$/, ""), l = Z2(l);
        const r = l.split("/");
        if (r.length !== 8) return !1;
        for(let i = 0; i < 8; i++)if (r[i].length !== 8 || r[i].search(/[^kqrnbpKQRNBP1]/) !== -1) return !1;
        return !0;
    }
    function Z2(l) {
        return l.replace(/8/g, "11111111").replace(/7/g, "1111111").replace(/6/g, "111111").replace(/5/g, "11111").replace(/4/g, "1111").replace(/3/g, "111").replace(/2/g, "11");
    }
    function J2(l) {
        return l.toLowerCase() === l ? "b" + l.toUpperCase() : "w" + l.toUpperCase();
    }
    const F2 = (l, r = !0, i, u)=>{
        const [o, f] = O.useState([]), [d, h] = O.useState([]), [p, m] = O.useState();
        O.useEffect(()=>{
            Array.isArray(l) && (b(), f(l?.filter((T)=>T[0] !== T[1])));
        }, [
            l
        ]), O.useEffect(()=>{
            i?.(d);
        }, [
            d
        ]);
        function b() {
            h([]), m(void 0);
        }
        const E = (T, R)=>{
            r && m([
                T,
                R,
                u
            ]);
        }, S = [
            ...d,
            ...o
        ];
        return {
            arrows: S,
            newArrow: p,
            clearArrows: b,
            drawNewArrow: E,
            setArrows: h,
            onArrowDrawEnd: (T, R)=>{
                if (T === R || !r) return;
                let M;
                const w = [
                    T,
                    R,
                    u
                ];
                S.every(([V, Q])=>!(V === T && Q === R)) ? M = [
                    ...d,
                    w
                ] : M = d.filter(([V, Q])=>!(V === T && Q === R)), m(void 0), h(M);
            }
        };
    }, A0 = O.createContext({}), wn = ()=>O.useContext(A0), W2 = O.forwardRef(({ allowDragOutsideBoard: l = !0, animationDuration: r = 300, areArrowsAllowed: i = !0, arePiecesDraggable: u = !0, arePremovesAllowed: o = !1, autoPromoteToQueen: f = !1, boardOrientation: d = "white", boardWidth: h, children: p, clearPremovesOnRightClick: m = !0, customArrows: b, customArrowColor: E = "rgb(255,170,0)", customBoardStyle: S, customNotationStyle: D, customDarkSquareStyle: T = {
        backgroundColor: "#B58863"
    }, customDropSquareStyle: R = {
        boxShadow: "inset 0 0 1px 6px rgba(255,255,255,0.75)"
    }, customLightSquareStyle: M = {
        backgroundColor: "#F0D9B5"
    }, customPieces: w, customPremoveDarkSquareStyle: k = {
        backgroundColor: "#A42323"
    }, customPremoveLightSquareStyle: V = {
        backgroundColor: "#BD2828"
    }, customSquare: Q = "div", customSquareStyles: G, dropOffBoardAction: Y = "snapback", id: le = 0, isDraggablePiece: se = ()=>!0, getPositionObject: ae = ()=>{}, onArrowsChange: Le = ()=>{}, onDragOverSquare: Qe = ()=>{}, onMouseOutSquare: ye = ()=>{}, onMouseOverSquare: Ue = ()=>{}, onPieceClick: gt = ()=>{}, onPieceDragBegin: _e = ()=>{}, onPieceDragEnd: B = ()=>{}, onPieceDrop: K = ()=>!0, onPieceDropOffBoard: W = ()=>{}, onPromotionCheck: Se = (Ge, ct, Mn)=>(Mn === "wP" && Ge[1] === "7" && ct[1] === "8" || Mn === "bP" && Ge[1] === "2" && ct[1] === "1") && Math.abs(Ge.charCodeAt(0) - ct.charCodeAt(0)) <= 1, onPromotionPieceSelect: x = ()=>!0, onSparePieceDrop: H = ()=>!0, onSquareClick: X = ()=>{}, onSquareRightClick: I = ()=>{}, position: J = "start", promotionDialogVariant: ge = "default", promotionToSquare: ee = null, showBoardNotation: ne = !0, showPromotionDialog: me = !1, snapToCursor: mt = !0 }, sn)=>{
        const [Ge, ct] = O.useState(vg(J)), [Mn, xa] = O.useState({
            removed: {},
            added: {}
        }), [Ra, Nn] = O.useState(void 0), [jt, Aa] = O.useState(me && !f), [Zl, _a] = O.useState(null), [Nr, wa] = O.useState(ee), [Ma, Na] = O.useState([]), Ft = O.useRef(Ma), [on, Je] = O.useState(), [Wt, vt] = O.useState(Object.assign(Object.assign({}, gg), w)), [Lu, jr] = O.useState(!1), [ja, Pr] = O.useState(), [cn, Pt] = O.useState(!1), [Lr, sr] = O.useState(null);
        O.useImperativeHandle(sn, ()=>({
                clearPremoves (Ee = !0) {
                    jn(Ee);
                }
            })), O.useEffect(()=>{
            vt(Object.assign(Object.assign({}, gg), w));
        }, [
            w
        ]), O.useEffect(()=>{
            Aa(me), wa(ee);
        }, [
            ee,
            me
        ]), O.useEffect(()=>{
            var Ee, we, bt;
            Br();
            const Ke = vg(J), It = Y2(Ge, Ke), rt = ((Ee = Object.keys(It.added)) === null || Ee === void 0 ? void 0 : Ee.length) <= 2 ? (bt = (we = Object.entries(It.added)) === null || we === void 0 ? void 0 : we[0]) === null || bt === void 0 ? void 0 : bt[1][0] : void 0;
            if (cn) ct(Ke), Pt(!1), o && Vr(rt), ja && clearTimeout(ja);
            else if (Lu) ct(Ke), Pt(!1), o && Vr(rt);
            else {
                mg(Ke) && Ra !== void 0 ? Nn(rt) : mg(Ke) ? Nn(void 0) : Nn("b"), xa(It), Pt(!0);
                const ka = setTimeout(()=>{
                    ct(Ke), Pt(!1), o && Vr(rt);
                }, r);
                Pr(ka);
            }
            return jr(!1), ae(Ke), kr(), ()=>{
                clearTimeout(ja);
            };
        }, [
            J
        ]);
        const { arrows: ku, newArrow: Jl, clearArrows: kr, drawNewArrow: Pa, onArrowDrawEnd: or } = F2(b, i, Le, E);
        function Vu(Ee, we, bt, Ke) {
            if (Ee === we) return;
            if (kr(), o && cn || o && (Ra === bt[0] || Ft.current.filter((rt)=>rt.piece[0] === bt[0]).length > 0)) {
                const rt = [
                    ...Ft.current
                ];
                rt.push({
                    sourceSq: Ee,
                    targetSq: we,
                    piece: bt
                }), Ft.current = rt, Na([
                    ...rt
                ]), Br();
                return;
            }
            if (!o && cn) return;
            const It = Object.assign({}, Ge);
            jr(!!Ke), Nn(bt[0]), K.length ? K(Ee, we, bt) || (jn(), jr(!1)) : (delete It[Ee], It[we] = bt, ct(It)), Br(), ae(It);
        }
        function Fl(Ee) {
            const we = Object.assign({}, Ge);
            delete we[Ee], ct(we), ae(we);
        }
        function Vr(Ee) {
            if (Ft.current.length === 0) return;
            const we = Ft.current[0];
            if (we.piece[0] !== void 0 && we.piece[0] !== Ee && K.length) if (Nn(we.piece[0]), jr(!0), K(we.sourceSq, we.targetSq, we.piece)) {
                const Ke = [
                    ...Ft.current
                ];
                Ke.shift(), Ft.current = Ke, Na([
                    ...Ke
                ]);
            } else jn();
        }
        function La(Ee, we) {
            if (!H(Ee, we)) return;
            const Ke = Object.assign({}, Ge);
            Ke[we] = Ee, ct(Ke), ae(Ke);
        }
        function jn(Ee = !0) {
            Ee && Nn(void 0), Ft.current = [], Na([]);
        }
        function Br() {
            _a(null), wa(null), Aa(!1);
        }
        function Bu(Ee) {
            Je(Ee);
        }
        function $t(Ee) {
            if (on) {
                if (on === Ee) {
                    Je(void 0), m && jn(!1), I(Ee);
                    return;
                }
            } else Je(void 0);
        }
        function Fe() {
            Je(void 0);
        }
        const ft = {
            allowDragOutsideBoard: l,
            animationDuration: r,
            arePiecesDraggable: u,
            arePremovesAllowed: o,
            arrows: ku,
            autoPromoteToQueen: f,
            boardOrientation: d,
            boardWidth: h,
            chessPieces: Wt,
            clearArrows: kr,
            clearCurrentRightClickDown: Fe,
            currentPosition: Ge,
            currentRightClickDown: on,
            customArrowColor: E,
            customBoardStyle: S,
            customDarkSquareStyle: T,
            customDropSquareStyle: R,
            customLightSquareStyle: M,
            customNotationStyle: D,
            customPremoveDarkSquareStyle: k,
            customPremoveLightSquareStyle: V,
            customSquare: Q,
            customSquareStyles: G,
            deletePieceFromSquare: Fl,
            drawNewArrow: Pa,
            dropOffBoardAction: Y,
            handleSetPosition: Vu,
            handleSparePieceDrop: La,
            id: le,
            isDraggablePiece: se,
            isWaitingForAnimation: cn,
            lastPieceColour: Ra,
            lastSquareDraggedOver: Lr,
            newArrow: Jl,
            onArrowDrawEnd: or,
            onDragOverSquare: Qe,
            onMouseOutSquare: ye,
            onMouseOverSquare: Ue,
            onPieceClick: gt,
            onPieceDragBegin: _e,
            onPieceDragEnd: B,
            onPieceDrop: K,
            onPieceDropOffBoard: W,
            onPromotionCheck: Se,
            onPromotionPieceSelect: x,
            onRightClickDown: Bu,
            onRightClickUp: $t,
            onSparePieceDrop: H,
            onSquareClick: X,
            positionDifferences: Mn,
            premoves: Ma,
            promoteFromSquare: Zl,
            promoteToSquare: Nr,
            promotionDialogVariant: ge,
            setLastSquareDraggedOver: sr,
            setPromoteFromSquare: _a,
            setPromoteToSquare: wa,
            setShowPromoteDialog: Aa,
            showBoardNotation: ne,
            showPromoteDialog: jt,
            snapToCursor: mt
        };
        return y.jsx(A0.Provider, Object.assign({
            value: ft
        }, {
            children: p
        }));
    });
    function $2({ row: l, col: r }) {
        const { boardOrientation: i, boardWidth: u, customDarkSquareStyle: o, customLightSquareStyle: f, customNotationStyle: d } = wn(), h = f.backgroundColor, p = o.backgroundColor, m = r === 0, b = l === 7, E = m && b;
        function S() {
            return i === "white" ? 8 - l : l + 1;
        }
        function D() {
            return i === "black" ? Gl[7 - r] : Gl[r];
        }
        function T() {
            return y.jsxs(y.Fragment, {
                children: [
                    y.jsx("div", Object.assign({
                        style: Object.assign(Object.assign({
                            zIndex: 3,
                            position: "absolute"
                        }, {
                            color: h
                        }), bg(u, d))
                    }, {
                        children: S()
                    })),
                    y.jsx("div", Object.assign({
                        style: Object.assign(Object.assign({
                            zIndex: 3,
                            position: "absolute"
                        }, {
                            color: h
                        }), yg(u, d))
                    }, {
                        children: D()
                    }))
                ]
            });
        }
        function R() {
            return y.jsx("div", Object.assign({
                style: Object.assign(Object.assign({
                    userSelect: "none",
                    zIndex: 3,
                    position: "absolute"
                }, {
                    color: r % 2 !== 0 ? p : h
                }), yg(u, d))
            }, {
                children: D()
            }));
        }
        function M() {
            return y.jsx("div", Object.assign({
                style: Object.assign(Object.assign({
                    userSelect: "none",
                    zIndex: 3,
                    position: "absolute"
                }, i === "black" ? {
                    color: l % 2 === 0 ? p : h
                } : {
                    color: l % 2 === 0 ? p : h
                }), bg(u, d))
            }, {
                children: S()
            }));
        }
        return E ? T() : b ? R() : m ? M() : null;
    }
    const yg = (l, r)=>Object.assign({
            alignSelf: "flex-end",
            paddingLeft: l / 8 - l / 48,
            fontSize: l / 48
        }, r), bg = (l, r)=>Object.assign({
            alignSelf: "flex-start",
            paddingRight: l / 8 - l / 48,
            fontSize: l / 48
        }, r), _0 = O.createContext({
        dragDropManager: void 0
    });
    function Gt(l) {
        return "Minified Redux error #" + l + "; visit https://redux.js.org/Errors?code=" + l + " for the full message or use the non-minified dev environment for full errors. ";
    }
    var Sg = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable";
    }(), Eg = function() {
        return Math.random().toString(36).substring(7).split("").join(".");
    }, Og = {
        INIT: "@@redux/INIT" + Eg(),
        REPLACE: "@@redux/REPLACE" + Eg()
    };
    function eS(l) {
        if (typeof l != "object" || l === null) return !1;
        for(var r = l; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(l) === r;
    }
    function w0(l, r, i) {
        var u;
        if (typeof r == "function" && typeof i == "function" || typeof i == "function" && typeof arguments[3] == "function") throw new Error(Gt(0));
        if (typeof r == "function" && typeof i > "u" && (i = r, r = void 0), typeof i < "u") {
            if (typeof i != "function") throw new Error(Gt(1));
            return i(w0)(l, r);
        }
        if (typeof l != "function") throw new Error(Gt(2));
        var o = l, f = r, d = [], h = d, p = !1;
        function m() {
            h === d && (h = d.slice());
        }
        function b() {
            if (p) throw new Error(Gt(3));
            return f;
        }
        function E(R) {
            if (typeof R != "function") throw new Error(Gt(4));
            if (p) throw new Error(Gt(5));
            var M = !0;
            return m(), h.push(R), function() {
                if (M) {
                    if (p) throw new Error(Gt(6));
                    M = !1, m();
                    var k = h.indexOf(R);
                    h.splice(k, 1), d = null;
                }
            };
        }
        function S(R) {
            if (!eS(R)) throw new Error(Gt(7));
            if (typeof R.type > "u") throw new Error(Gt(8));
            if (p) throw new Error(Gt(9));
            try {
                p = !0, f = o(f, R);
            } finally{
                p = !1;
            }
            for(var M = d = h, w = 0; w < M.length; w++){
                var k = M[w];
                k();
            }
            return R;
        }
        function D(R) {
            if (typeof R != "function") throw new Error(Gt(10));
            o = R, S({
                type: Og.REPLACE
            });
        }
        function T() {
            var R, M = E;
            return R = {
                subscribe: function(k) {
                    if (typeof k != "object" || k === null) throw new Error(Gt(11));
                    function V() {
                        k.next && k.next(b());
                    }
                    V();
                    var Q = M(V);
                    return {
                        unsubscribe: Q
                    };
                }
            }, R[Sg] = function() {
                return this;
            }, R;
        }
        return S({
            type: Og.INIT
        }), u = {
            dispatch: S,
            subscribe: E,
            getState: b,
            replaceReducer: D
        }, u[Sg] = T, u;
    }
    function ue(l, r, ...i) {
        if (tS() && r === void 0) throw new Error("invariant requires an error message argument");
        if (!l) {
            let u;
            if (r === void 0) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                let o = 0;
                u = new Error(r.replace(/%s/g, function() {
                    return i[o++];
                })), u.name = "Invariant Violation";
            }
            throw u.framesToPop = 1, u;
        }
    }
    function tS() {
        return typeof process < "u" && !0;
    }
    function nS(l, r, i) {
        return r.split(".").reduce((u, o)=>u && u[o] ? u[o] : i || null, l);
    }
    function rS(l, r) {
        return l.filter((i)=>i !== r);
    }
    function M0(l) {
        return typeof l == "object";
    }
    function aS(l, r) {
        const i = new Map, u = (f)=>{
            i.set(f, i.has(f) ? i.get(f) + 1 : 1);
        };
        l.forEach(u), r.forEach(u);
        const o = [];
        return i.forEach((f, d)=>{
            f === 1 && o.push(d);
        }), o;
    }
    function lS(l, r) {
        return l.filter((i)=>r.indexOf(i) > -1);
    }
    const Hc = "dnd-core/INIT_COORDS", wu = "dnd-core/BEGIN_DRAG", Qc = "dnd-core/PUBLISH_DRAG_SOURCE", Mu = "dnd-core/HOVER", Nu = "dnd-core/DROP", ju = "dnd-core/END_DRAG";
    function Tg(l, r) {
        return {
            type: Hc,
            payload: {
                sourceClientOffset: r || null,
                clientOffset: l || null
            }
        };
    }
    const iS = {
        type: Hc,
        payload: {
            clientOffset: null,
            sourceClientOffset: null
        }
    };
    function uS(l) {
        return function(i = [], u = {
            publishSource: !0
        }) {
            const { publishSource: o = !0, clientOffset: f, getSourceClientOffset: d } = u, h = l.getMonitor(), p = l.getRegistry();
            l.dispatch(Tg(f)), sS(i, h, p);
            const m = fS(i, h);
            if (m == null) {
                l.dispatch(iS);
                return;
            }
            let b = null;
            if (f) {
                if (!d) throw new Error("getSourceClientOffset must be defined");
                oS(d), b = d(m);
            }
            l.dispatch(Tg(f, b));
            const S = p.getSource(m).beginDrag(h, m);
            if (S == null) return;
            cS(S), p.pinSource(m);
            const D = p.getSourceType(m);
            return {
                type: wu,
                payload: {
                    itemType: D,
                    item: S,
                    sourceId: m,
                    clientOffset: f || null,
                    sourceClientOffset: b || null,
                    isSourcePublic: !!o
                }
            };
        };
    }
    function sS(l, r, i) {
        ue(!r.isDragging(), "Cannot call beginDrag while dragging."), l.forEach(function(u) {
            ue(i.getSource(u), "Expected sourceIds to be registered.");
        });
    }
    function oS(l) {
        ue(typeof l == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
    }
    function cS(l) {
        ue(M0(l), "Item must be an object.");
    }
    function fS(l, r) {
        let i = null;
        for(let u = l.length - 1; u >= 0; u--)if (r.canDragSource(l[u])) {
            i = l[u];
            break;
        }
        return i;
    }
    function dS(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function hS(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                dS(l, o, i[o]);
            });
        }
        return l;
    }
    function pS(l) {
        return function(i = {}) {
            const u = l.getMonitor(), o = l.getRegistry();
            gS(u), yS(u).forEach((d, h)=>{
                const p = mS(d, h, o, u), m = {
                    type: Nu,
                    payload: {
                        dropResult: hS({}, i, p)
                    }
                };
                l.dispatch(m);
            });
        };
    }
    function gS(l) {
        ue(l.isDragging(), "Cannot call drop while not dragging."), ue(!l.didDrop(), "Cannot call drop twice during one drag operation.");
    }
    function mS(l, r, i, u) {
        const o = i.getTarget(l);
        let f = o ? o.drop(u, l) : void 0;
        return vS(f), typeof f > "u" && (f = r === 0 ? {} : u.getDropResult()), f;
    }
    function vS(l) {
        ue(typeof l > "u" || M0(l), "Drop result must either be an object or undefined.");
    }
    function yS(l) {
        const r = l.getTargetIds().filter(l.canDropOnTarget, l);
        return r.reverse(), r;
    }
    function bS(l) {
        return function() {
            const i = l.getMonitor(), u = l.getRegistry();
            SS(i);
            const o = i.getSourceId();
            return o != null && (u.getSource(o, !0).endDrag(i, o), u.unpinSource()), {
                type: ju
            };
        };
    }
    function SS(l) {
        ue(l.isDragging(), "Cannot call endDrag while not dragging.");
    }
    function Cc(l, r) {
        return r === null ? l === null : Array.isArray(l) ? l.some((i)=>i === r) : l === r;
    }
    function ES(l) {
        return function(i, { clientOffset: u } = {}) {
            OS(i);
            const o = i.slice(0), f = l.getMonitor(), d = l.getRegistry(), h = f.getItemType();
            return DS(o, d, h), TS(o, f, d), CS(o, f, d), {
                type: Mu,
                payload: {
                    targetIds: o,
                    clientOffset: u || null
                }
            };
        };
    }
    function OS(l) {
        ue(Array.isArray(l), "Expected targetIds to be an array.");
    }
    function TS(l, r, i) {
        ue(r.isDragging(), "Cannot call hover while not dragging."), ue(!r.didDrop(), "Cannot call hover after drop.");
        for(let u = 0; u < l.length; u++){
            const o = l[u];
            ue(l.lastIndexOf(o) === u, "Expected targetIds to be unique in the passed array.");
            const f = i.getTarget(o);
            ue(f, "Expected targetIds to be registered.");
        }
    }
    function DS(l, r, i) {
        for(let u = l.length - 1; u >= 0; u--){
            const o = l[u], f = r.getTargetType(o);
            Cc(f, i) || l.splice(u, 1);
        }
    }
    function CS(l, r, i) {
        l.forEach(function(u) {
            i.getTarget(u).hover(r, u);
        });
    }
    function xS(l) {
        return function() {
            if (l.getMonitor().isDragging()) return {
                type: Qc
            };
        };
    }
    function RS(l) {
        return {
            beginDrag: uS(l),
            publishDragSource: xS(l),
            hover: ES(l),
            drop: pS(l),
            endDrag: bS(l)
        };
    }
    class AS {
        receiveBackend(r) {
            this.backend = r;
        }
        getMonitor() {
            return this.monitor;
        }
        getBackend() {
            return this.backend;
        }
        getRegistry() {
            return this.monitor.registry;
        }
        getActions() {
            const r = this, { dispatch: i } = this.store;
            function u(f) {
                return (...d)=>{
                    const h = f.apply(r, d);
                    typeof h < "u" && i(h);
                };
            }
            const o = RS(this);
            return Object.keys(o).reduce((f, d)=>{
                const h = o[d];
                return f[d] = u(h), f;
            }, {});
        }
        dispatch(r) {
            this.store.dispatch(r);
        }
        constructor(r, i){
            this.isSetUp = !1, this.handleRefCountChange = ()=>{
                const u = this.store.getState().refCount > 0;
                this.backend && (u && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !u && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
            }, this.store = r, this.monitor = i, r.subscribe(this.handleRefCountChange);
        }
    }
    function _S(l, r) {
        return {
            x: l.x + r.x,
            y: l.y + r.y
        };
    }
    function N0(l, r) {
        return {
            x: l.x - r.x,
            y: l.y - r.y
        };
    }
    function wS(l) {
        const { clientOffset: r, initialClientOffset: i, initialSourceClientOffset: u } = l;
        return !r || !i || !u ? null : N0(_S(r, u), i);
    }
    function MS(l) {
        const { clientOffset: r, initialClientOffset: i } = l;
        return !r || !i ? null : N0(r, i);
    }
    const Ul = [], Gc = [];
    Ul.__IS_NONE__ = !0;
    Gc.__IS_ALL__ = !0;
    function NS(l, r) {
        return l === Ul ? !1 : l === Gc || typeof r > "u" ? !0 : lS(r, l).length > 0;
    }
    class jS {
        subscribeToStateChange(r, i = {}) {
            const { handlerIds: u } = i;
            ue(typeof r == "function", "listener must be a function."), ue(typeof u > "u" || Array.isArray(u), "handlerIds, when specified, must be an array of strings.");
            let o = this.store.getState().stateId;
            const f = ()=>{
                const d = this.store.getState(), h = d.stateId;
                try {
                    h === o || h === o + 1 && !NS(d.dirtyHandlerIds, u) || r();
                } finally{
                    o = h;
                }
            };
            return this.store.subscribe(f);
        }
        subscribeToOffsetChange(r) {
            ue(typeof r == "function", "listener must be a function.");
            let i = this.store.getState().dragOffset;
            const u = ()=>{
                const o = this.store.getState().dragOffset;
                o !== i && (i = o, r());
            };
            return this.store.subscribe(u);
        }
        canDragSource(r) {
            if (!r) return !1;
            const i = this.registry.getSource(r);
            return ue(i, `Expected to find a valid source. sourceId=${r}`), this.isDragging() ? !1 : i.canDrag(this, r);
        }
        canDropOnTarget(r) {
            if (!r) return !1;
            const i = this.registry.getTarget(r);
            if (ue(i, `Expected to find a valid target. targetId=${r}`), !this.isDragging() || this.didDrop()) return !1;
            const u = this.registry.getTargetType(r), o = this.getItemType();
            return Cc(u, o) && i.canDrop(this, r);
        }
        isDragging() {
            return !!this.getItemType();
        }
        isDraggingSource(r) {
            if (!r) return !1;
            const i = this.registry.getSource(r, !0);
            if (ue(i, `Expected to find a valid source. sourceId=${r}`), !this.isDragging() || !this.isSourcePublic()) return !1;
            const u = this.registry.getSourceType(r), o = this.getItemType();
            return u !== o ? !1 : i.isDragging(this, r);
        }
        isOverTarget(r, i = {
            shallow: !1
        }) {
            if (!r) return !1;
            const { shallow: u } = i;
            if (!this.isDragging()) return !1;
            const o = this.registry.getTargetType(r), f = this.getItemType();
            if (f && !Cc(o, f)) return !1;
            const d = this.getTargetIds();
            if (!d.length) return !1;
            const h = d.indexOf(r);
            return u ? h === d.length - 1 : h > -1;
        }
        getItemType() {
            return this.store.getState().dragOperation.itemType;
        }
        getItem() {
            return this.store.getState().dragOperation.item;
        }
        getSourceId() {
            return this.store.getState().dragOperation.sourceId;
        }
        getTargetIds() {
            return this.store.getState().dragOperation.targetIds;
        }
        getDropResult() {
            return this.store.getState().dragOperation.dropResult;
        }
        didDrop() {
            return this.store.getState().dragOperation.didDrop;
        }
        isSourcePublic() {
            return !!this.store.getState().dragOperation.isSourcePublic;
        }
        getInitialClientOffset() {
            return this.store.getState().dragOffset.initialClientOffset;
        }
        getInitialSourceClientOffset() {
            return this.store.getState().dragOffset.initialSourceClientOffset;
        }
        getClientOffset() {
            return this.store.getState().dragOffset.clientOffset;
        }
        getSourceClientOffset() {
            return wS(this.store.getState().dragOffset);
        }
        getDifferenceFromInitialOffset() {
            return MS(this.store.getState().dragOffset);
        }
        constructor(r, i){
            this.store = r, this.registry = i;
        }
    }
    const Dg = typeof global < "u" ? global : self, j0 = Dg.MutationObserver || Dg.WebKitMutationObserver;
    function P0(l) {
        return function() {
            const i = setTimeout(o, 0), u = setInterval(o, 50);
            function o() {
                clearTimeout(i), clearInterval(u), l();
            }
        };
    }
    function PS(l) {
        let r = 1;
        const i = new j0(l), u = document.createTextNode("");
        return i.observe(u, {
            characterData: !0
        }), function() {
            r = -r, u.data = r;
        };
    }
    const LS = typeof j0 == "function" ? PS : P0;
    class kS {
        enqueueTask(r) {
            const { queue: i, requestFlush: u } = this;
            i.length || (u(), this.flushing = !0), i[i.length] = r;
        }
        constructor(){
            this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = ()=>{
                const { queue: r } = this;
                for(; this.index < r.length;){
                    const i = this.index;
                    if (this.index++, r[i].call(), this.index > this.capacity) {
                        for(let u = 0, o = r.length - this.index; u < o; u++)r[u] = r[u + this.index];
                        r.length -= this.index, this.index = 0;
                    }
                }
                r.length = 0, this.index = 0, this.flushing = !1;
            }, this.registerPendingError = (r)=>{
                this.pendingErrors.push(r), this.requestErrorThrow();
            }, this.requestFlush = LS(this.flush), this.requestErrorThrow = P0(()=>{
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
            });
        }
    }
    class VS {
        call() {
            try {
                this.task && this.task();
            } catch (r) {
                this.onError(r);
            } finally{
                this.task = null, this.release(this);
            }
        }
        constructor(r, i){
            this.onError = r, this.release = i, this.task = null;
        }
    }
    class BS {
        create(r) {
            const i = this.freeTasks, u = i.length ? i.pop() : new VS(this.onError, (o)=>i[i.length] = o);
            return u.task = r, u;
        }
        constructor(r){
            this.onError = r, this.freeTasks = [];
        }
    }
    const L0 = new kS, zS = new BS(L0.registerPendingError);
    function US(l) {
        L0.enqueueTask(zS.create(l));
    }
    const Kc = "dnd-core/ADD_SOURCE", Yc = "dnd-core/ADD_TARGET", Ic = "dnd-core/REMOVE_SOURCE", Pu = "dnd-core/REMOVE_TARGET";
    function qS(l) {
        return {
            type: Kc,
            payload: {
                sourceId: l
            }
        };
    }
    function HS(l) {
        return {
            type: Yc,
            payload: {
                targetId: l
            }
        };
    }
    function QS(l) {
        return {
            type: Ic,
            payload: {
                sourceId: l
            }
        };
    }
    function GS(l) {
        return {
            type: Pu,
            payload: {
                targetId: l
            }
        };
    }
    function KS(l) {
        ue(typeof l.canDrag == "function", "Expected canDrag to be a function."), ue(typeof l.beginDrag == "function", "Expected beginDrag to be a function."), ue(typeof l.endDrag == "function", "Expected endDrag to be a function.");
    }
    function YS(l) {
        ue(typeof l.canDrop == "function", "Expected canDrop to be a function."), ue(typeof l.hover == "function", "Expected hover to be a function."), ue(typeof l.drop == "function", "Expected beginDrag to be a function.");
    }
    function xc(l, r) {
        if (r && Array.isArray(l)) {
            l.forEach((i)=>xc(i, !1));
            return;
        }
        ue(typeof l == "string" || typeof l == "symbol", r ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
    }
    var Yt;
    (function(l) {
        l.SOURCE = "SOURCE", l.TARGET = "TARGET";
    })(Yt || (Yt = {}));
    let IS = 0;
    function XS() {
        return IS++;
    }
    function ZS(l) {
        const r = XS().toString();
        switch(l){
            case Yt.SOURCE:
                return `S${r}`;
            case Yt.TARGET:
                return `T${r}`;
            default:
                throw new Error(`Unknown Handler Role: ${l}`);
        }
    }
    function Cg(l) {
        switch(l[0]){
            case "S":
                return Yt.SOURCE;
            case "T":
                return Yt.TARGET;
            default:
                throw new Error(`Cannot parse handler ID: ${l}`);
        }
    }
    function xg(l, r) {
        const i = l.entries();
        let u = !1;
        do {
            const { done: o, value: [, f] } = i.next();
            if (f === r) return !0;
            u = !!o;
        }while (!u);
        return !1;
    }
    class JS {
        addSource(r, i) {
            xc(r), KS(i);
            const u = this.addHandler(Yt.SOURCE, r, i);
            return this.store.dispatch(qS(u)), u;
        }
        addTarget(r, i) {
            xc(r, !0), YS(i);
            const u = this.addHandler(Yt.TARGET, r, i);
            return this.store.dispatch(HS(u)), u;
        }
        containsHandler(r) {
            return xg(this.dragSources, r) || xg(this.dropTargets, r);
        }
        getSource(r, i = !1) {
            return ue(this.isSourceId(r), "Expected a valid source ID."), i && r === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(r);
        }
        getTarget(r) {
            return ue(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
        }
        getSourceType(r) {
            return ue(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
        }
        getTargetType(r) {
            return ue(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
        }
        isSourceId(r) {
            return Cg(r) === Yt.SOURCE;
        }
        isTargetId(r) {
            return Cg(r) === Yt.TARGET;
        }
        removeSource(r) {
            ue(this.getSource(r), "Expected an existing source."), this.store.dispatch(QS(r)), US(()=>{
                this.dragSources.delete(r), this.types.delete(r);
            });
        }
        removeTarget(r) {
            ue(this.getTarget(r), "Expected an existing target."), this.store.dispatch(GS(r)), this.dropTargets.delete(r), this.types.delete(r);
        }
        pinSource(r) {
            const i = this.getSource(r);
            ue(i, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = i;
        }
        unpinSource() {
            ue(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
        }
        addHandler(r, i, u) {
            const o = ZS(r);
            return this.types.set(o, i), r === Yt.SOURCE ? this.dragSources.set(o, u) : r === Yt.TARGET && this.dropTargets.set(o, u), o;
        }
        constructor(r){
            this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = r;
        }
    }
    const FS = (l, r)=>l === r;
    function WS(l, r) {
        return !l && !r ? !0 : !l || !r ? !1 : l.x === r.x && l.y === r.y;
    }
    function $S(l, r, i = FS) {
        if (l.length !== r.length) return !1;
        for(let u = 0; u < l.length; ++u)if (!i(l[u], r[u])) return !1;
        return !0;
    }
    function e3(l = Ul, r) {
        switch(r.type){
            case Mu:
                break;
            case Kc:
            case Yc:
            case Pu:
            case Ic:
                return Ul;
            case wu:
            case Qc:
            case ju:
            case Nu:
            default:
                return Gc;
        }
        const { targetIds: i = [], prevTargetIds: u = [] } = r.payload, o = aS(i, u);
        if (!(o.length > 0 || !$S(i, u))) return Ul;
        const d = u[u.length - 1], h = i[i.length - 1];
        return d !== h && (d && o.push(d), h && o.push(h)), o;
    }
    function t3(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function n3(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                t3(l, o, i[o]);
            });
        }
        return l;
    }
    const Rg = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null
    };
    function r3(l = Rg, r) {
        const { payload: i } = r;
        switch(r.type){
            case Hc:
            case wu:
                return {
                    initialSourceClientOffset: i.sourceClientOffset,
                    initialClientOffset: i.clientOffset,
                    clientOffset: i.clientOffset
                };
            case Mu:
                return WS(l.clientOffset, i.clientOffset) ? l : n3({}, l, {
                    clientOffset: i.clientOffset
                });
            case ju:
            case Nu:
                return Rg;
            default:
                return l;
        }
    }
    function a3(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function Ta(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                a3(l, o, i[o]);
            });
        }
        return l;
    }
    const l3 = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null
    };
    function i3(l = l3, r) {
        const { payload: i } = r;
        switch(r.type){
            case wu:
                return Ta({}, l, {
                    itemType: i.itemType,
                    item: i.item,
                    sourceId: i.sourceId,
                    isSourcePublic: i.isSourcePublic,
                    dropResult: null,
                    didDrop: !1
                });
            case Qc:
                return Ta({}, l, {
                    isSourcePublic: !0
                });
            case Mu:
                return Ta({}, l, {
                    targetIds: i.targetIds
                });
            case Pu:
                return l.targetIds.indexOf(i.targetId) === -1 ? l : Ta({}, l, {
                    targetIds: rS(l.targetIds, i.targetId)
                });
            case Nu:
                return Ta({}, l, {
                    dropResult: i.dropResult,
                    didDrop: !0,
                    targetIds: []
                });
            case ju:
                return Ta({}, l, {
                    itemType: null,
                    item: null,
                    sourceId: null,
                    dropResult: null,
                    didDrop: !1,
                    isSourcePublic: null,
                    targetIds: []
                });
            default:
                return l;
        }
    }
    function u3(l = 0, r) {
        switch(r.type){
            case Kc:
            case Yc:
                return l + 1;
            case Ic:
            case Pu:
                return l - 1;
            default:
                return l;
        }
    }
    function s3(l = 0) {
        return l + 1;
    }
    function o3(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function c3(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                o3(l, o, i[o]);
            });
        }
        return l;
    }
    function f3(l = {}, r) {
        return {
            dirtyHandlerIds: e3(l.dirtyHandlerIds, {
                type: r.type,
                payload: c3({}, r.payload, {
                    prevTargetIds: nS(l, "dragOperation.targetIds", [])
                })
            }),
            dragOffset: r3(l.dragOffset, r),
            refCount: u3(l.refCount, r),
            dragOperation: i3(l.dragOperation, r),
            stateId: s3(l.stateId)
        };
    }
    function d3(l, r = void 0, i = {}, u = !1) {
        const o = h3(u), f = new jS(o, new JS(o)), d = new AS(o, f), h = l(d, r, i);
        return d.receiveBackend(h), d;
    }
    function h3(l) {
        const r = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
        return w0(f3, l && r && r({
            name: "dnd-core",
            instanceId: "dnd-core"
        }));
    }
    function p3(l, r) {
        if (l == null) return {};
        var i = g3(l, r), u, o;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            for(o = 0; o < f.length; o++)u = f[o], !(r.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(l, u) && (i[u] = l[u]);
        }
        return i;
    }
    function g3(l, r) {
        if (l == null) return {};
        var i = {}, u = Object.keys(l), o, f;
        for(f = 0; f < u.length; f++)o = u[f], !(r.indexOf(o) >= 0) && (i[o] = l[o]);
        return i;
    }
    let Ag = 0;
    const Ou = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
    var m3 = O.memo(function(r) {
        var { children: i } = r, u = p3(r, [
            "children"
        ]);
        const [o, f] = v3(u);
        return O.useEffect(()=>{
            if (f) {
                const d = k0();
                return ++Ag, ()=>{
                    --Ag === 0 && (d[Ou] = null);
                };
            }
        }, []), y.jsx(_0.Provider, {
            value: o,
            children: i
        });
    });
    function v3(l) {
        if ("manager" in l) return [
            {
                dragDropManager: l.manager
            },
            !1
        ];
        const r = y3(l.backend, l.context, l.options, l.debugMode), i = !l.context;
        return [
            r,
            i
        ];
    }
    function y3(l, r = k0(), i, u) {
        const o = r;
        return o[Ou] || (o[Ou] = {
            dragDropManager: d3(l, r, i, u)
        }), o[Ou];
    }
    function k0() {
        return typeof global < "u" ? global : window;
    }
    var b3 = function l(r, i) {
        if (r === i) return !0;
        if (r && i && typeof r == "object" && typeof i == "object") {
            if (r.constructor !== i.constructor) return !1;
            var u, o, f;
            if (Array.isArray(r)) {
                if (u = r.length, u != i.length) return !1;
                for(o = u; o-- !== 0;)if (!l(r[o], i[o])) return !1;
                return !0;
            }
            if (r.constructor === RegExp) return r.source === i.source && r.flags === i.flags;
            if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === i.valueOf();
            if (r.toString !== Object.prototype.toString) return r.toString() === i.toString();
            if (f = Object.keys(r), u = f.length, u !== Object.keys(i).length) return !1;
            for(o = u; o-- !== 0;)if (!Object.prototype.hasOwnProperty.call(i, f[o])) return !1;
            for(o = u; o-- !== 0;){
                var d = f[o];
                if (!l(r[d], i[d])) return !1;
            }
            return !0;
        }
        return r !== r && i !== i;
    };
    const _r = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
    function V0(l, r, i) {
        const [u, o] = O.useState(()=>r(l)), f = O.useCallback(()=>{
            const d = r(l);
            b3(u, d) || (o(d), i && i());
        }, [
            u,
            l,
            i
        ]);
        return _r(f), [
            u,
            f
        ];
    }
    function S3(l, r, i) {
        const [u, o] = V0(l, r, i);
        return _r(function() {
            const d = l.getHandlerId();
            if (d != null) return l.subscribeToStateChange(o, {
                handlerIds: [
                    d
                ]
            });
        }, [
            l,
            o
        ]), u;
    }
    function B0(l, r, i) {
        return S3(r, l || (()=>({})), ()=>i.reconnect());
    }
    function z0(l, r) {
        const i = [
            ...r || []
        ];
        return r == null && typeof l != "function" && i.push(l), O.useMemo(()=>typeof l == "function" ? l() : l, i);
    }
    function E3(l) {
        return O.useMemo(()=>l.hooks.dragSource(), [
            l
        ]);
    }
    function O3(l) {
        return O.useMemo(()=>l.hooks.dragPreview(), [
            l
        ]);
    }
    let cc = !1, fc = !1;
    class T3 {
        receiveHandlerId(r) {
            this.sourceId = r;
        }
        getHandlerId() {
            return this.sourceId;
        }
        canDrag() {
            ue(!cc, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
            try {
                return cc = !0, this.internalMonitor.canDragSource(this.sourceId);
            } finally{
                cc = !1;
            }
        }
        isDragging() {
            if (!this.sourceId) return !1;
            ue(!fc, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
            try {
                return fc = !0, this.internalMonitor.isDraggingSource(this.sourceId);
            } finally{
                fc = !1;
            }
        }
        subscribeToStateChange(r, i) {
            return this.internalMonitor.subscribeToStateChange(r, i);
        }
        isDraggingSource(r) {
            return this.internalMonitor.isDraggingSource(r);
        }
        isOverTarget(r, i) {
            return this.internalMonitor.isOverTarget(r, i);
        }
        getTargetIds() {
            return this.internalMonitor.getTargetIds();
        }
        isSourcePublic() {
            return this.internalMonitor.isSourcePublic();
        }
        getSourceId() {
            return this.internalMonitor.getSourceId();
        }
        subscribeToOffsetChange(r) {
            return this.internalMonitor.subscribeToOffsetChange(r);
        }
        canDragSource(r) {
            return this.internalMonitor.canDragSource(r);
        }
        canDropOnTarget(r) {
            return this.internalMonitor.canDropOnTarget(r);
        }
        getItemType() {
            return this.internalMonitor.getItemType();
        }
        getItem() {
            return this.internalMonitor.getItem();
        }
        getDropResult() {
            return this.internalMonitor.getDropResult();
        }
        didDrop() {
            return this.internalMonitor.didDrop();
        }
        getInitialClientOffset() {
            return this.internalMonitor.getInitialClientOffset();
        }
        getInitialSourceClientOffset() {
            return this.internalMonitor.getInitialSourceClientOffset();
        }
        getSourceClientOffset() {
            return this.internalMonitor.getSourceClientOffset();
        }
        getClientOffset() {
            return this.internalMonitor.getClientOffset();
        }
        getDifferenceFromInitialOffset() {
            return this.internalMonitor.getDifferenceFromInitialOffset();
        }
        constructor(r){
            this.sourceId = null, this.internalMonitor = r.getMonitor();
        }
    }
    let dc = !1;
    class D3 {
        receiveHandlerId(r) {
            this.targetId = r;
        }
        getHandlerId() {
            return this.targetId;
        }
        subscribeToStateChange(r, i) {
            return this.internalMonitor.subscribeToStateChange(r, i);
        }
        canDrop() {
            if (!this.targetId) return !1;
            ue(!dc, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
            try {
                return dc = !0, this.internalMonitor.canDropOnTarget(this.targetId);
            } finally{
                dc = !1;
            }
        }
        isOver(r) {
            return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, r) : !1;
        }
        getItemType() {
            return this.internalMonitor.getItemType();
        }
        getItem() {
            return this.internalMonitor.getItem();
        }
        getDropResult() {
            return this.internalMonitor.getDropResult();
        }
        didDrop() {
            return this.internalMonitor.didDrop();
        }
        getInitialClientOffset() {
            return this.internalMonitor.getInitialClientOffset();
        }
        getInitialSourceClientOffset() {
            return this.internalMonitor.getInitialSourceClientOffset();
        }
        getSourceClientOffset() {
            return this.internalMonitor.getSourceClientOffset();
        }
        getClientOffset() {
            return this.internalMonitor.getClientOffset();
        }
        getDifferenceFromInitialOffset() {
            return this.internalMonitor.getDifferenceFromInitialOffset();
        }
        constructor(r){
            this.targetId = null, this.internalMonitor = r.getMonitor();
        }
    }
    function C3(l, r, i) {
        const u = i.getRegistry(), o = u.addTarget(l, r);
        return [
            o,
            ()=>u.removeTarget(o)
        ];
    }
    function x3(l, r, i) {
        const u = i.getRegistry(), o = u.addSource(l, r);
        return [
            o,
            ()=>u.removeSource(o)
        ];
    }
    function Rc(l, r, i, u) {
        let o;
        if (o !== void 0) return !!o;
        if (l === r) return !0;
        if (typeof l != "object" || !l || typeof r != "object" || !r) return !1;
        const f = Object.keys(l), d = Object.keys(r);
        if (f.length !== d.length) return !1;
        const h = Object.prototype.hasOwnProperty.bind(r);
        for(let p = 0; p < f.length; p++){
            const m = f[p];
            if (!h(m)) return !1;
            const b = l[m], E = r[m];
            if (o = void 0, o === !1 || o === void 0 && b !== E) return !1;
        }
        return !0;
    }
    function Ac(l) {
        return l !== null && typeof l == "object" && Object.prototype.hasOwnProperty.call(l, "current");
    }
    function R3(l) {
        if (typeof l.type == "string") return;
        const r = l.type.displayName || l.type.name || "the component";
        throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${r} into a <div>, or turn it into a drag source or a drop target itself.`);
    }
    function A3(l) {
        return (r = null, i = null)=>{
            if (!O.isValidElement(r)) {
                const f = r;
                return l(f, i), f;
            }
            const u = r;
            return R3(u), _3(u, i ? (f)=>l(f, i) : l);
        };
    }
    function U0(l) {
        const r = {};
        return Object.keys(l).forEach((i)=>{
            const u = l[i];
            if (i.endsWith("Ref")) r[i] = l[i];
            else {
                const o = A3(u);
                r[i] = ()=>o;
            }
        }), r;
    }
    function _g(l, r) {
        typeof l == "function" ? l(r) : l.current = r;
    }
    function _3(l, r) {
        const i = l.ref;
        return ue(typeof i != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), i ? O.cloneElement(l, {
            ref: (u)=>{
                _g(i, u), _g(r, u);
            }
        }) : O.cloneElement(l, {
            ref: r
        });
    }
    class w3 {
        receiveHandlerId(r) {
            this.handlerId !== r && (this.handlerId = r, this.reconnect());
        }
        get connectTarget() {
            return this.dragSource;
        }
        get dragSourceOptions() {
            return this.dragSourceOptionsInternal;
        }
        set dragSourceOptions(r) {
            this.dragSourceOptionsInternal = r;
        }
        get dragPreviewOptions() {
            return this.dragPreviewOptionsInternal;
        }
        set dragPreviewOptions(r) {
            this.dragPreviewOptionsInternal = r;
        }
        reconnect() {
            const r = this.reconnectDragSource();
            this.reconnectDragPreview(r);
        }
        reconnectDragSource() {
            const r = this.dragSource, i = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
            return i && this.disconnectDragSource(), this.handlerId ? r ? (i && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = r, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, r, this.dragSourceOptions)), i) : (this.lastConnectedDragSource = r, i) : i;
        }
        reconnectDragPreview(r = !1) {
            const i = this.dragPreview, u = r || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
            if (u && this.disconnectDragPreview(), !!this.handlerId) {
                if (!i) {
                    this.lastConnectedDragPreview = i;
                    return;
                }
                u && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = i, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, i, this.dragPreviewOptions));
            }
        }
        didHandlerIdChange() {
            return this.lastConnectedHandlerId !== this.handlerId;
        }
        didConnectedDragSourceChange() {
            return this.lastConnectedDragSource !== this.dragSource;
        }
        didConnectedDragPreviewChange() {
            return this.lastConnectedDragPreview !== this.dragPreview;
        }
        didDragSourceOptionsChange() {
            return !Rc(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
        }
        didDragPreviewOptionsChange() {
            return !Rc(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
        }
        disconnectDragSource() {
            this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
        }
        disconnectDragPreview() {
            this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
        }
        get dragSource() {
            return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
        }
        get dragPreview() {
            return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
        }
        clearDragSource() {
            this.dragSourceNode = null, this.dragSourceRef = null;
        }
        clearDragPreview() {
            this.dragPreviewNode = null, this.dragPreviewRef = null;
        }
        constructor(r){
            this.hooks = U0({
                dragSource: (i, u)=>{
                    this.clearDragSource(), this.dragSourceOptions = u || null, Ac(i) ? this.dragSourceRef = i : this.dragSourceNode = i, this.reconnectDragSource();
                },
                dragPreview: (i, u)=>{
                    this.clearDragPreview(), this.dragPreviewOptions = u || null, Ac(i) ? this.dragPreviewRef = i : this.dragPreviewNode = i, this.reconnectDragPreview();
                }
            }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = r;
        }
    }
    class M3 {
        get connectTarget() {
            return this.dropTarget;
        }
        reconnect() {
            const r = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
            r && this.disconnectDropTarget();
            const i = this.dropTarget;
            if (this.handlerId) {
                if (!i) {
                    this.lastConnectedDropTarget = i;
                    return;
                }
                r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = i, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, i, this.dropTargetOptions));
            }
        }
        receiveHandlerId(r) {
            r !== this.handlerId && (this.handlerId = r, this.reconnect());
        }
        get dropTargetOptions() {
            return this.dropTargetOptionsInternal;
        }
        set dropTargetOptions(r) {
            this.dropTargetOptionsInternal = r;
        }
        didHandlerIdChange() {
            return this.lastConnectedHandlerId !== this.handlerId;
        }
        didDropTargetChange() {
            return this.lastConnectedDropTarget !== this.dropTarget;
        }
        didOptionsChange() {
            return !Rc(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
        }
        disconnectDropTarget() {
            this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
        }
        get dropTarget() {
            return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
        }
        clearDropTarget() {
            this.dropTargetRef = null, this.dropTargetNode = null;
        }
        constructor(r){
            this.hooks = U0({
                dropTarget: (i, u)=>{
                    this.clearDropTarget(), this.dropTargetOptions = u, Ac(i) ? this.dropTargetRef = i : this.dropTargetNode = i, this.reconnect();
                }
            }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = r;
        }
    }
    function Mr() {
        const { dragDropManager: l } = O.useContext(_0);
        return ue(l != null, "Expected drag drop context"), l;
    }
    function N3(l, r) {
        const i = Mr(), u = O.useMemo(()=>new w3(i.getBackend()), [
            i
        ]);
        return _r(()=>(u.dragSourceOptions = l || null, u.reconnect(), ()=>u.disconnectDragSource()), [
            u,
            l
        ]), _r(()=>(u.dragPreviewOptions = r || null, u.reconnect(), ()=>u.disconnectDragPreview()), [
            u,
            r
        ]), u;
    }
    function j3() {
        const l = Mr();
        return O.useMemo(()=>new T3(l), [
            l
        ]);
    }
    class P3 {
        beginDrag() {
            const r = this.spec, i = this.monitor;
            let u = null;
            return typeof r.item == "object" ? u = r.item : typeof r.item == "function" ? u = r.item(i) : u = {}, u ?? null;
        }
        canDrag() {
            const r = this.spec, i = this.monitor;
            return typeof r.canDrag == "boolean" ? r.canDrag : typeof r.canDrag == "function" ? r.canDrag(i) : !0;
        }
        isDragging(r, i) {
            const u = this.spec, o = this.monitor, { isDragging: f } = u;
            return f ? f(o) : i === r.getSourceId();
        }
        endDrag() {
            const r = this.spec, i = this.monitor, u = this.connector, { end: o } = r;
            o && o(i.getItem(), i), u.reconnect();
        }
        constructor(r, i, u){
            this.spec = r, this.monitor = i, this.connector = u;
        }
    }
    function L3(l, r, i) {
        const u = O.useMemo(()=>new P3(l, r, i), [
            r,
            i
        ]);
        return O.useEffect(()=>{
            u.spec = l;
        }, [
            l
        ]), u;
    }
    function k3(l) {
        return O.useMemo(()=>{
            const r = l.type;
            return ue(r != null, "spec.type must be defined"), r;
        }, [
            l
        ]);
    }
    function V3(l, r, i) {
        const u = Mr(), o = L3(l, r, i), f = k3(l);
        _r(function() {
            if (f != null) {
                const [h, p] = x3(f, o, u);
                return r.receiveHandlerId(h), i.receiveHandlerId(h), p;
            }
        }, [
            u,
            r,
            i,
            o,
            f
        ]);
    }
    function B3(l, r) {
        const i = z0(l, r);
        ue(!i.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
        const u = j3(), o = N3(i.options, i.previewOptions);
        return V3(i, u, o), [
            B0(i.collect, u, o),
            E3(o),
            O3(o)
        ];
    }
    function z3(l) {
        const i = Mr().getMonitor(), [u, o] = V0(i, l);
        return O.useEffect(()=>i.subscribeToOffsetChange(o)), O.useEffect(()=>i.subscribeToStateChange(o)), u;
    }
    function U3(l) {
        return O.useMemo(()=>l.hooks.dropTarget(), [
            l
        ]);
    }
    function q3(l) {
        const r = Mr(), i = O.useMemo(()=>new M3(r.getBackend()), [
            r
        ]);
        return _r(()=>(i.dropTargetOptions = l || null, i.reconnect(), ()=>i.disconnectDropTarget()), [
            l
        ]), i;
    }
    function H3() {
        const l = Mr();
        return O.useMemo(()=>new D3(l), [
            l
        ]);
    }
    function Q3(l) {
        const { accept: r } = l;
        return O.useMemo(()=>(ue(l.accept != null, "accept must be defined"), Array.isArray(r) ? r : [
                r
            ]), [
            r
        ]);
    }
    class G3 {
        canDrop() {
            const r = this.spec, i = this.monitor;
            return r.canDrop ? r.canDrop(i.getItem(), i) : !0;
        }
        hover() {
            const r = this.spec, i = this.monitor;
            r.hover && r.hover(i.getItem(), i);
        }
        drop() {
            const r = this.spec, i = this.monitor;
            if (r.drop) return r.drop(i.getItem(), i);
        }
        constructor(r, i){
            this.spec = r, this.monitor = i;
        }
    }
    function K3(l, r) {
        const i = O.useMemo(()=>new G3(l, r), [
            r
        ]);
        return O.useEffect(()=>{
            i.spec = l;
        }, [
            l
        ]), i;
    }
    function Y3(l, r, i) {
        const u = Mr(), o = K3(l, r), f = Q3(l);
        _r(function() {
            const [h, p] = C3(f, o, u);
            return r.receiveHandlerId(h), i.receiveHandlerId(h), p;
        }, [
            u,
            r,
            o,
            i,
            f.map((d)=>d.toString()).join("|")
        ]);
    }
    function I3(l, r) {
        const i = z0(l, r), u = H3(), o = q3(i.options);
        return Y3(i, u, o), [
            B0(i.collect, u, o),
            U3(o)
        ];
    }
    function q0(l) {
        let r = null;
        return ()=>(r == null && (r = l()), r);
    }
    function X3(l, r) {
        return l.filter((i)=>i !== r);
    }
    function Z3(l, r) {
        const i = new Set, u = (f)=>i.add(f);
        l.forEach(u), r.forEach(u);
        const o = [];
        return i.forEach((f)=>o.push(f)), o;
    }
    class J3 {
        enter(r) {
            const i = this.entered.length, u = (o)=>this.isNodeInDocument(o) && (!o.contains || o.contains(r));
            return this.entered = Z3(this.entered.filter(u), [
                r
            ]), i === 0 && this.entered.length > 0;
        }
        leave(r) {
            const i = this.entered.length;
            return this.entered = X3(this.entered.filter(this.isNodeInDocument), r), i > 0 && this.entered.length === 0;
        }
        reset() {
            this.entered = [];
        }
        constructor(r){
            this.entered = [], this.isNodeInDocument = r;
        }
    }
    class F3 {
        initializeExposedProperties() {
            Object.keys(this.config.exposeProperties).forEach((r)=>{
                Object.defineProperty(this.item, r, {
                    configurable: !0,
                    enumerable: !0,
                    get () {
                        return console.warn(`Browser doesn't allow reading "${r}" until the drop event.`), null;
                    }
                });
            });
        }
        loadDataTransfer(r) {
            if (r) {
                const i = {};
                Object.keys(this.config.exposeProperties).forEach((u)=>{
                    const o = this.config.exposeProperties[u];
                    o != null && (i[u] = {
                        value: o(r, this.config.matchesTypes),
                        configurable: !0,
                        enumerable: !0
                    });
                }), Object.defineProperties(this.item, i);
            }
        }
        canDrag() {
            return !0;
        }
        beginDrag() {
            return this.item;
        }
        isDragging(r, i) {
            return i === r.getSourceId();
        }
        endDrag() {}
        constructor(r){
            this.config = r, this.item = {}, this.initializeExposedProperties();
        }
    }
    const H0 = "__NATIVE_FILE__", Q0 = "__NATIVE_URL__", G0 = "__NATIVE_TEXT__", K0 = "__NATIVE_HTML__";
    var wg = Object.freeze({
        __proto__: null,
        FILE: H0,
        HTML: K0,
        TEXT: G0,
        URL: Q0
    });
    function hc(l, r, i) {
        const u = r.reduce((o, f)=>o || l.getData(f), "");
        return u ?? i;
    }
    const _c = {
        [H0]: {
            exposeProperties: {
                files: (l)=>Array.prototype.slice.call(l.files),
                items: (l)=>l.items,
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Files"
            ]
        },
        [K0]: {
            exposeProperties: {
                html: (l, r)=>hc(l, r, ""),
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Html",
                "text/html"
            ]
        },
        [Q0]: {
            exposeProperties: {
                urls: (l, r)=>hc(l, r, "").split(`
`),
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Url",
                "text/uri-list"
            ]
        },
        [G0]: {
            exposeProperties: {
                text: (l, r)=>hc(l, r, ""),
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Text",
                "text/plain"
            ]
        }
    };
    function W3(l, r) {
        const i = _c[l];
        if (!i) throw new Error(`native type ${l} has no configuration`);
        const u = new F3(i);
        return u.loadDataTransfer(r), u;
    }
    function pc(l) {
        if (!l) return null;
        const r = Array.prototype.slice.call(l.types || []);
        return Object.keys(_c).filter((i)=>{
            const u = _c[i];
            return u?.matchesTypes ? u.matchesTypes.some((o)=>r.indexOf(o) > -1) : !1;
        })[0] || null;
    }
    const $3 = q0(()=>/firefox/i.test(navigator.userAgent)), Y0 = q0(()=>!!window.safari);
    class Mg {
        interpolate(r) {
            const { xs: i, ys: u, c1s: o, c2s: f, c3s: d } = this;
            let h = i.length - 1;
            if (r === i[h]) return u[h];
            let p = 0, m = d.length - 1, b;
            for(; p <= m;){
                b = Math.floor(.5 * (p + m));
                const D = i[b];
                if (D < r) p = b + 1;
                else if (D > r) m = b - 1;
                else return u[b];
            }
            h = Math.max(0, m);
            const E = r - i[h], S = E * E;
            return u[h] + o[h] * E + f[h] * S + d[h] * E * S;
        }
        constructor(r, i){
            const { length: u } = r, o = [];
            for(let D = 0; D < u; D++)o.push(D);
            o.sort((D, T)=>r[D] < r[T] ? -1 : 1);
            const f = [], d = [];
            let h, p;
            for(let D = 0; D < u - 1; D++)h = r[D + 1] - r[D], p = i[D + 1] - i[D], f.push(h), d.push(p / h);
            const m = [
                d[0]
            ];
            for(let D = 0; D < f.length - 1; D++){
                const T = d[D], R = d[D + 1];
                if (T * R <= 0) m.push(0);
                else {
                    h = f[D];
                    const M = f[D + 1], w = h + M;
                    m.push(3 * w / ((w + M) / T + (w + h) / R));
                }
            }
            m.push(d[d.length - 1]);
            const b = [], E = [];
            let S;
            for(let D = 0; D < m.length - 1; D++){
                S = d[D];
                const T = m[D], R = 1 / f[D], M = T + m[D + 1] - S - S;
                b.push((S - T - M) * R), E.push(M * R * R);
            }
            this.xs = r, this.ys = i, this.c1s = m, this.c2s = b, this.c3s = E;
        }
    }
    const eE = 1;
    function I0(l) {
        const r = l.nodeType === eE ? l : l.parentElement;
        if (!r) return null;
        const { top: i, left: u } = r.getBoundingClientRect();
        return {
            x: u,
            y: i
        };
    }
    function hu(l) {
        return {
            x: l.clientX,
            y: l.clientY
        };
    }
    function tE(l) {
        var r;
        return l.nodeName === "IMG" && ($3() || !(!((r = document.documentElement) === null || r === void 0) && r.contains(l)));
    }
    function nE(l, r, i, u) {
        let o = l ? r.width : i, f = l ? r.height : u;
        return Y0() && l && (f /= window.devicePixelRatio, o /= window.devicePixelRatio), {
            dragPreviewWidth: o,
            dragPreviewHeight: f
        };
    }
    function rE(l, r, i, u, o) {
        const f = tE(r), h = I0(f ? l : r), p = {
            x: i.x - h.x,
            y: i.y - h.y
        }, { offsetWidth: m, offsetHeight: b } = l, { anchorX: E, anchorY: S } = u, { dragPreviewWidth: D, dragPreviewHeight: T } = nE(f, r, m, b), R = ()=>{
            let Y = new Mg([
                0,
                .5,
                1
            ], [
                p.y,
                p.y / b * T,
                p.y + T - b
            ]).interpolate(S);
            return Y0() && f && (Y += (window.devicePixelRatio - 1) * T), Y;
        }, M = ()=>new Mg([
                0,
                .5,
                1
            ], [
                p.x,
                p.x / m * D,
                p.x + D - m
            ]).interpolate(E), { offsetX: w, offsetY: k } = o, V = w === 0 || w, Q = k === 0 || k;
        return {
            x: V ? w : M(),
            y: Q ? k : R()
        };
    }
    let aE = class {
        get window() {
            if (this.globalContext) return this.globalContext;
            if (typeof window < "u") return window;
        }
        get document() {
            var r;
            return !((r = this.globalContext) === null || r === void 0) && r.document ? this.globalContext.document : this.window ? this.window.document : void 0;
        }
        get rootElement() {
            var r;
            return ((r = this.optionsArgs) === null || r === void 0 ? void 0 : r.rootElement) || this.window;
        }
        constructor(r, i){
            this.ownerDocument = null, this.globalContext = r, this.optionsArgs = i;
        }
    };
    function lE(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function Ng(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                lE(l, o, i[o]);
            });
        }
        return l;
    }
    class iE {
        profile() {
            var r, i;
            return {
                sourcePreviewNodes: this.sourcePreviewNodes.size,
                sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                sourceNodeOptions: this.sourceNodeOptions.size,
                sourceNodes: this.sourceNodes.size,
                dragStartSourceIds: ((r = this.dragStartSourceIds) === null || r === void 0 ? void 0 : r.length) || 0,
                dropTargetIds: this.dropTargetIds.length,
                dragEnterTargetIds: this.dragEnterTargetIds.length,
                dragOverTargetIds: ((i = this.dragOverTargetIds) === null || i === void 0 ? void 0 : i.length) || 0
            };
        }
        get window() {
            return this.options.window;
        }
        get document() {
            return this.options.document;
        }
        get rootElement() {
            return this.options.rootElement;
        }
        setup() {
            const r = this.rootElement;
            if (r !== void 0) {
                if (r.__isReactDndBackendSetUp) throw new Error("Cannot have two HTML5 backends at the same time.");
                r.__isReactDndBackendSetUp = !0, this.addEventListeners(r);
            }
        }
        teardown() {
            const r = this.rootElement;
            if (r !== void 0 && (r.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
                var i;
                (i = this.window) === null || i === void 0 || i.cancelAnimationFrame(this.asyncEndDragFrameId);
            }
        }
        connectDragPreview(r, i, u) {
            return this.sourcePreviewNodeOptions.set(r, u), this.sourcePreviewNodes.set(r, i), ()=>{
                this.sourcePreviewNodes.delete(r), this.sourcePreviewNodeOptions.delete(r);
            };
        }
        connectDragSource(r, i, u) {
            this.sourceNodes.set(r, i), this.sourceNodeOptions.set(r, u);
            const o = (d)=>this.handleDragStart(d, r), f = (d)=>this.handleSelectStart(d);
            return i.setAttribute("draggable", "true"), i.addEventListener("dragstart", o), i.addEventListener("selectstart", f), ()=>{
                this.sourceNodes.delete(r), this.sourceNodeOptions.delete(r), i.removeEventListener("dragstart", o), i.removeEventListener("selectstart", f), i.setAttribute("draggable", "false");
            };
        }
        connectDropTarget(r, i) {
            const u = (d)=>this.handleDragEnter(d, r), o = (d)=>this.handleDragOver(d, r), f = (d)=>this.handleDrop(d, r);
            return i.addEventListener("dragenter", u), i.addEventListener("dragover", o), i.addEventListener("drop", f), ()=>{
                i.removeEventListener("dragenter", u), i.removeEventListener("dragover", o), i.removeEventListener("drop", f);
            };
        }
        addEventListeners(r) {
            r.addEventListener && (r.addEventListener("dragstart", this.handleTopDragStart), r.addEventListener("dragstart", this.handleTopDragStartCapture, !0), r.addEventListener("dragend", this.handleTopDragEndCapture, !0), r.addEventListener("dragenter", this.handleTopDragEnter), r.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.addEventListener("dragover", this.handleTopDragOver), r.addEventListener("dragover", this.handleTopDragOverCapture, !0), r.addEventListener("drop", this.handleTopDrop), r.addEventListener("drop", this.handleTopDropCapture, !0));
        }
        removeEventListeners(r) {
            r.removeEventListener && (r.removeEventListener("dragstart", this.handleTopDragStart), r.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), r.removeEventListener("dragend", this.handleTopDragEndCapture, !0), r.removeEventListener("dragenter", this.handleTopDragEnter), r.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.removeEventListener("dragover", this.handleTopDragOver), r.removeEventListener("dragover", this.handleTopDragOverCapture, !0), r.removeEventListener("drop", this.handleTopDrop), r.removeEventListener("drop", this.handleTopDropCapture, !0));
        }
        getCurrentSourceNodeOptions() {
            const r = this.monitor.getSourceId(), i = this.sourceNodeOptions.get(r);
            return Ng({
                dropEffect: this.altKeyPressed ? "copy" : "move"
            }, i || {});
        }
        getCurrentDropEffect() {
            return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
        }
        getCurrentSourcePreviewNodeOptions() {
            const r = this.monitor.getSourceId(), i = this.sourcePreviewNodeOptions.get(r);
            return Ng({
                anchorX: .5,
                anchorY: .5,
                captureDraggingState: !1
            }, i || {});
        }
        isDraggingNativeItem() {
            const r = this.monitor.getItemType();
            return Object.keys(wg).some((i)=>wg[i] === r);
        }
        beginDragNativeItem(r, i) {
            this.clearCurrentDragSourceNode(), this.currentNativeSource = W3(r, i), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([
                this.currentNativeHandle
            ]);
        }
        setCurrentDragSourceNode(r) {
            this.clearCurrentDragSourceNode(), this.currentDragSourceNode = r;
            const i = 1e3;
            this.mouseMoveTimeoutTimer = setTimeout(()=>{
                var u;
                return (u = this.rootElement) === null || u === void 0 ? void 0 : u.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
            }, i);
        }
        clearCurrentDragSourceNode() {
            if (this.currentDragSourceNode) {
                if (this.currentDragSourceNode = null, this.rootElement) {
                    var r;
                    (r = this.window) === null || r === void 0 || r.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
                }
                return this.mouseMoveTimeoutTimer = null, !0;
            }
            return !1;
        }
        handleDragStart(r, i) {
            r.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(i));
        }
        handleDragEnter(r, i) {
            this.dragEnterTargetIds.unshift(i);
        }
        handleDragOver(r, i) {
            this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(i);
        }
        handleDrop(r, i) {
            this.dropTargetIds.unshift(i);
        }
        constructor(r, i, u){
            this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.sourceNodes = new Map, this.sourceNodeOptions = new Map, this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (o)=>{
                const f = this.sourceNodes.get(o);
                return f && I0(f) || null;
            }, this.endDragNativeItem = ()=>{
                this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
            }, this.isNodeInDocument = (o)=>!!(o && this.document && this.document.body && this.document.body.contains(o)), this.endDragIfSourceWasRemovedFromDOM = ()=>{
                const o = this.currentDragSourceNode;
                o == null || this.isNodeInDocument(o) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
            }, this.scheduleHover = (o)=>{
                this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(()=>{
                    this.monitor.isDragging() && this.actions.hover(o || [], {
                        clientOffset: this.lastClientOffset
                    }), this.hoverRafId = null;
                }));
            }, this.cancelHover = ()=>{
                this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
            }, this.handleTopDragStartCapture = ()=>{
                this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
            }, this.handleTopDragStart = (o)=>{
                if (o.defaultPrevented) return;
                const { dragStartSourceIds: f } = this;
                this.dragStartSourceIds = null;
                const d = hu(o);
                this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(f || [], {
                    publishSource: !1,
                    getSourceClientOffset: this.getSourceClientOffset,
                    clientOffset: d
                });
                const { dataTransfer: h } = o, p = pc(h);
                if (this.monitor.isDragging()) {
                    if (h && typeof h.setDragImage == "function") {
                        const b = this.monitor.getSourceId(), E = this.sourceNodes.get(b), S = this.sourcePreviewNodes.get(b) || E;
                        if (S) {
                            const { anchorX: D, anchorY: T, offsetX: R, offsetY: M } = this.getCurrentSourcePreviewNodeOptions(), V = rE(E, S, d, {
                                anchorX: D,
                                anchorY: T
                            }, {
                                offsetX: R,
                                offsetY: M
                            });
                            h.setDragImage(S, V.x, V.y);
                        }
                    }
                    try {
                        h?.setData("application/json", {});
                    } catch  {}
                    this.setCurrentDragSourceNode(o.target);
                    const { captureDraggingState: m } = this.getCurrentSourcePreviewNodeOptions();
                    m ? this.actions.publishDragSource() : setTimeout(()=>this.actions.publishDragSource(), 0);
                } else if (p) this.beginDragNativeItem(p);
                else {
                    if (h && !h.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable"))) return;
                    o.preventDefault();
                }
            }, this.handleTopDragEndCapture = ()=>{
                this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
            }, this.handleTopDragEnterCapture = (o)=>{
                if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
                    var f;
                    (f = this.currentNativeSource) === null || f === void 0 || f.loadDataTransfer(o.dataTransfer);
                }
                if (!this.enterLeaveCounter.enter(o.target) || this.monitor.isDragging()) return;
                const { dataTransfer: h } = o, p = pc(h);
                p && this.beginDragNativeItem(p, h);
            }, this.handleTopDragEnter = (o)=>{
                const { dragEnterTargetIds: f } = this;
                if (this.dragEnterTargetIds = [], !this.monitor.isDragging()) return;
                this.altKeyPressed = o.altKey, f.length > 0 && this.actions.hover(f, {
                    clientOffset: hu(o)
                }), f.some((h)=>this.monitor.canDropOnTarget(h)) && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = this.getCurrentDropEffect()));
            }, this.handleTopDragOverCapture = (o)=>{
                if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
                    var f;
                    (f = this.currentNativeSource) === null || f === void 0 || f.loadDataTransfer(o.dataTransfer);
                }
            }, this.handleTopDragOver = (o)=>{
                const { dragOverTargetIds: f } = this;
                if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
                    o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
                    return;
                }
                this.altKeyPressed = o.altKey, this.lastClientOffset = hu(o), this.scheduleHover(f), (f || []).some((h)=>this.monitor.canDropOnTarget(h)) ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
            }, this.handleTopDragLeaveCapture = (o)=>{
                this.isDraggingNativeItem() && o.preventDefault(), this.enterLeaveCounter.leave(o.target) && (this.isDraggingNativeItem() && setTimeout(()=>this.endDragNativeItem(), 0), this.cancelHover());
            }, this.handleTopDropCapture = (o)=>{
                if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
                    var f;
                    o.preventDefault(), (f = this.currentNativeSource) === null || f === void 0 || f.loadDataTransfer(o.dataTransfer);
                } else pc(o.dataTransfer) && o.preventDefault();
                this.enterLeaveCounter.reset();
            }, this.handleTopDrop = (o)=>{
                const { dropTargetIds: f } = this;
                this.dropTargetIds = [], this.actions.hover(f, {
                    clientOffset: hu(o)
                }), this.actions.drop({
                    dropEffect: this.getCurrentDropEffect()
                }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
            }, this.handleSelectStart = (o)=>{
                const f = o.target;
                typeof f.dragDrop == "function" && (f.tagName === "INPUT" || f.tagName === "SELECT" || f.tagName === "TEXTAREA" || f.isContentEditable || (o.preventDefault(), f.dragDrop()));
            }, this.options = new aE(i, u), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.registry = r.getRegistry(), this.enterLeaveCounter = new J3(this.isNodeInDocument);
        }
    }
    let pu;
    function uE() {
        return pu || (pu = new Image, pu.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), pu;
    }
    const sE = function(r, i, u) {
        return new iE(r, i, u);
    };
    function jg({ isPremovedPiece: l = !1, piece: r, square: i, squares: u }) {
        const { animationDuration: o, arePiecesDraggable: f, boardWidth: d, boardOrientation: h, chessPieces: p, currentPosition: m, deletePieceFromSquare: b, dropOffBoardAction: E, id: S, isDraggablePiece: D, isWaitingForAnimation: T, onPieceClick: R, onPieceDragBegin: M, onPieceDragEnd: w, onPieceDropOffBoard: k, onPromotionCheck: V, positionDifferences: Q } = wn(), [G, Y] = O.useState({
            opacity: 1,
            zIndex: 5,
            touchAction: "none",
            cursor: f && D({
                piece: r,
                sourceSquare: i
            }) ? "-webkit-grab" : "default"
        }), [{ canDrag: le, isDragging: se }, ae, Le] = B3(()=>({
                type: "piece",
                item: ()=>(M(r, i), {
                        piece: r,
                        square: i,
                        id: S
                    }),
                end: (ye, Ue)=>{
                    w(r, i), !Ue.didDrop() && (E === "trash" && b(i), k?.(i, r));
                },
                collect: (ye)=>({
                        canDrag: D({
                            piece: r,
                            sourceSquare: i
                        }),
                        isDragging: !!ye.isDragging()
                    })
            }), [
            r,
            i,
            m,
            S
        ]);
        Le(uE(), {
            captureDraggingState: !0
        }), O.useEffect(()=>{
            Y((ye)=>Object.assign(Object.assign({}, ye), {
                    opacity: se ? 0 : 1
                }));
        }, [
            se
        ]), O.useEffect(()=>{
            var ye;
            const Ue = (ye = Q.removed) === null || ye === void 0 ? void 0 : ye[i];
            if (!Q.added || !Ue) return;
            const gt = Object.entries(Q.added).find(([_e, B])=>B === Ue || V(i, _e, Ue));
            if (T && Ue && gt && !l) {
                const _e = i, B = gt[0];
                if (_e && B) {
                    const K = d / 8;
                    Y((W)=>Object.assign(Object.assign({}, W), {
                            transform: `translate(${(h === "black" ? -1 : 1) * (B.charCodeAt(0) - _e.charCodeAt(0)) * K}px, ${(h === "black" ? -1 : 1) * (Number(_e[1]) - Number(B[1])) * K}px)`,
                            transition: `transform ${o}ms`,
                            zIndex: 6
                        }));
                }
            }
        }, [
            Q
        ]), O.useEffect(()=>{
            const { sourceSq: ye } = Qe();
            ye && Y((Ue)=>Object.assign(Object.assign({}, Ue), {
                    transform: "translate(0px, 0px)",
                    transition: "transform 0ms"
                }));
        }, [
            m
        ]), O.useEffect(()=>{
            Y((ye)=>Object.assign(Object.assign({}, ye), {
                    cursor: f && D({
                        piece: r,
                        sourceSquare: i
                    }) ? "-webkit-grab" : "default"
                }));
        }, [
            i,
            m,
            f
        ]);
        function Qe() {
            return {
                sourceSq: u[i]
            };
        }
        return y.jsx("div", Object.assign({
            ref: f && le ? ae : null,
            onClick: ()=>R(r, i),
            "data-piece": r,
            style: G
        }, {
            children: typeof p[r] == "function" ? p[r]({
                squareWidth: d / 8,
                isDragging: se,
                square: i
            }) : y.jsx("svg", Object.assign({
                viewBox: "1 1 43 43",
                width: d / 8,
                height: d / 8,
                style: {
                    display: "block"
                }
            }, {
                children: y.jsx("g", {
                    children: p[r]
                })
            }))
        }));
    }
    function oE({ square: l, squareColor: r, setSquares: i, squareHasPremove: u, children: o }) {
        const f = O.useRef(null), { autoPromoteToQueen: d, boardWidth: h, boardOrientation: p, clearArrows: m, currentPosition: b, currentRightClickDown: E, customBoardStyle: S, customDarkSquareStyle: D, customDropSquareStyle: T, customLightSquareStyle: R, customPremoveDarkSquareStyle: M, customPremoveLightSquareStyle: w, customSquare: k, customSquareStyles: V, drawNewArrow: Q, handleSetPosition: G, handleSparePieceDrop: Y, isWaitingForAnimation: le, lastPieceColour: se, lastSquareDraggedOver: ae, onArrowDrawEnd: Le, onDragOverSquare: Qe, onMouseOutSquare: ye, onMouseOverSquare: Ue, onPieceDrop: gt, onPromotionCheck: _e, onRightClickDown: B, onRightClickUp: K, onSquareClick: W, setLastSquareDraggedOver: Se, setPromoteFromSquare: x, setPromoteToSquare: H, setShowPromoteDialog: X } = wn(), [{ isOver: I }, J] = I3(()=>({
                accept: "piece",
                drop: ge,
                collect: (ne)=>({
                        isOver: !!ne.isOver()
                    })
            }), [
            l,
            b,
            gt,
            le,
            se
        ]);
        function ge(ne) {
            if (ne.isSpare) {
                Y(ne.piece, l);
                return;
            }
            _e(ne.square, l, ne.piece) ? d ? G(ne.square, l, ne.piece[0] === "w" ? "wQ" : "bQ") : (x(ne.square), H(l), X(!0)) : G(ne.square, l, ne.piece, !0);
        }
        O.useEffect(()=>{
            if (f.current) {
                const { x: ne, y: me } = f.current.getBoundingClientRect();
                i((mt)=>Object.assign(Object.assign({}, mt), {
                        [l]: {
                            x: ne,
                            y: me
                        }
                    }));
            }
        }, [
            h,
            p
        ]);
        const ee = Object.assign(Object.assign(Object.assign(Object.assign({}, cE(l, p, S)), r === "black" ? D : R), u && (r === "black" ? M : w)), I && T);
        return y.jsx("div", Object.assign({
            ref: J,
            style: ee,
            "data-square-color": r,
            "data-square": l,
            onTouchMove: (ne)=>{
                var me;
                const mt = ne.touches[0], sn = document.elementsFromPoint(mt.clientX, mt.clientY), Ge = (me = sn?.find((ct)=>ct.getAttribute("data-square"))) === null || me === void 0 ? void 0 : me.getAttribute("data-square");
                Ge && Ge !== ae && (Se(Ge), Qe(Ge));
            },
            onMouseOver: (ne)=>{
                ne.buttons === 2 && E && Q(E, l), !(ne.relatedTarget && ne.currentTarget.contains(ne.relatedTarget)) && Ue(l);
            },
            onMouseOut: (ne)=>{
                ne.relatedTarget && ne.currentTarget.contains(ne.relatedTarget) || ye(l);
            },
            onMouseDown: (ne)=>{
                ne.button === 2 && B(l);
            },
            onMouseUp: (ne)=>{
                ne.button === 2 && (E && Le(E, l), K(l));
            },
            onDragEnter: ()=>Qe(l),
            onClick: ()=>{
                const ne = b[l];
                W(l, ne), m();
            },
            onContextMenu: (ne)=>{
                ne.preventDefault();
            }
        }, {
            children: typeof k == "string" ? y.jsx(k, Object.assign({
                ref: f,
                style: Object.assign(Object.assign(Object.assign({}, Lg(h)), Pg), !u && V?.[l])
            }, {
                children: o
            })) : y.jsx(k, Object.assign({
                ref: f,
                square: l,
                squareColor: r,
                style: Object.assign(Object.assign(Object.assign({}, Lg(h)), Pg), !u && V?.[l])
            }, {
                children: o
            }))
        }));
    }
    const Pg = {
        display: "flex",
        justifyContent: "center"
    }, Lg = (l)=>({
            width: l / 8,
            height: l / 8
        }), cE = (l, r, i)=>i?.borderRadius ? l === "a1" ? r === "white" ? {
            borderBottomLeftRadius: i.borderRadius
        } : {
            borderTopRightRadius: i.borderRadius
        } : l === "a8" ? r === "white" ? {
            borderTopLeftRadius: i.borderRadius
        } : {
            borderBottomRightRadius: i.borderRadius
        } : l === "h1" ? r === "white" ? {
            borderBottomRightRadius: i.borderRadius
        } : {
            borderTopLeftRadius: i.borderRadius
        } : l === "h8" ? r === "white" ? {
            borderTopRightRadius: i.borderRadius
        } : {
            borderBottomLeftRadius: i.borderRadius
        } : {} : {};
    function fE() {
        const [l, r] = O.useState({}), { arePremovesAllowed: i, boardOrientation: u, boardWidth: o, currentPosition: f, id: d, premoves: h, showBoardNotation: p } = wn(), m = O.useMemo(()=>{
            const b = [];
            return i ? (h.forEach((E, S)=>{
                const { sourceSq: D, targetSq: T, piece: R } = E, M = b.find((w)=>{
                    var k;
                    return w.piece === R && ((k = w.premovesRoute.at(-1)) === null || k === void 0 ? void 0 : k.targetSq) === D;
                });
                M ? M.premovesRoute.push({
                    sourceSq: D,
                    targetSq: T,
                    index: S
                }) : b.push({
                    piece: R,
                    premovesRoute: [
                        {
                            sourceSq: D,
                            targetSq: T,
                            index: S
                        }
                    ]
                });
            }), b) : [];
        }, [
            h
        ]);
        return y.jsx("div", Object.assign({
            "data-boardid": d
        }, {
            children: [
                ...Array(8)
            ].map((b, E)=>y.jsx("div", Object.assign({
                    style: {
                        display: "flex",
                        flexWrap: "nowrap",
                        width: o
                    }
                }, {
                    children: [
                        ...Array(8)
                    ].map((S, D)=>{
                        const T = u === "black" ? Gl[7 - D] + (E + 1) : Gl[D] + (8 - E), R = D % 2 === E % 2 ? "white" : "black", M = h.find((k)=>k.sourceSq === T || k.targetSq === T), w = m.filter(({ premovesRoute: k })=>{
                            var V;
                            return ((V = k.at(-1)) === null || V === void 0 ? void 0 : V.targetSq) === T;
                        }).sort((k, V)=>{
                            var Q, G;
                            return ((Q = V.premovesRoute.at(-1)) === null || Q === void 0 ? void 0 : Q.index) - ((G = k.premovesRoute.at(-1)) === null || G === void 0 ? void 0 : G.index);
                        }).at(0);
                        return y.jsxs(oE, Object.assign({
                            square: T,
                            squareColor: R,
                            setSquares: r,
                            squareHasPremove: !!M
                        }, {
                            children: [
                                !M && f[T] && y.jsx(jg, {
                                    piece: f[T],
                                    square: T,
                                    squares: l
                                }),
                                w && y.jsx(jg, {
                                    isPremovedPiece: !0,
                                    piece: w.piece,
                                    square: T,
                                    squares: l
                                }),
                                p && y.jsx($2, {
                                    row: E,
                                    col: D
                                })
                            ]
                        }), `${D}${E}`);
                    })
                }), E.toString()))
        }));
    }
    const dE = ()=>{
        const { arrows: l, newArrow: r, boardOrientation: i, boardWidth: u, customArrowColor: o } = wn(), f = [
            ...l,
            r
        ].filter(Boolean);
        return y.jsx("svg", Object.assign({
            width: u,
            height: u,
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                pointerEvents: "none",
                zIndex: "10"
            }
        }, {
            children: f.map((d, h)=>{
                const [p, m, b] = d;
                if (p === m) return null;
                const E = Dc(i, u, p), S = Dc(i, u, m);
                let D = u / 32;
                const T = h === l.length;
                l.some((V)=>V[0] !== p && V[1] === m) && !T && (D = u / 16);
                const R = S.x - E.x, M = S.y - E.y, w = Math.hypot(M, R), k = {
                    x: E.x + R * (w - D) / w,
                    y: E.y + M * (w - D) / w
                };
                return y.jsxs(O.Fragment, {
                    children: [
                        y.jsx("marker", Object.assign({
                            id: `arrowhead-${h}`,
                            markerWidth: "2",
                            markerHeight: "2.5",
                            refX: "1.25",
                            refY: "1.25",
                            orient: "auto"
                        }, {
                            children: y.jsx("polygon", {
                                points: "0.3 0, 2 1.25, 0.3 2.5",
                                fill: b ?? o
                            })
                        })),
                        y.jsx("line", {
                            x1: E.x,
                            y1: E.y,
                            x2: k.x,
                            y2: k.y,
                            opacity: T ? "0.5" : "0.65",
                            stroke: b ?? o,
                            strokeWidth: T ? .9 * u / 40 : u / 40,
                            markerEnd: `url(#arrowhead-${h})`
                        })
                    ]
                }, `${p}-${m}${T ? "-active" : ""}`);
            })
        }));
    };
    function hE({ option: l }) {
        const [r, i] = O.useState(!1), { boardWidth: u, chessPieces: o, customDarkSquareStyle: f, customLightSquareStyle: d, handleSetPosition: h, onPromotionPieceSelect: p, promoteFromSquare: m, promoteToSquare: b, promotionDialogVariant: E } = wn(), S = ()=>{
            switch(l[1]){
                case "Q":
                    return f.backgroundColor;
                case "R":
                    return d.backgroundColor;
                case "N":
                    return E === "default" ? d.backgroundColor : f.backgroundColor;
                case "B":
                    return E === "default" ? f.backgroundColor : d.backgroundColor;
            }
        };
        return y.jsx("div", Object.assign({
            onClick: ()=>{
                p(l, m ?? void 0, b ?? void 0) && h(m, b, l, !0);
            },
            onMouseOver: ()=>i(!0),
            onMouseOut: ()=>i(!1),
            "data-piece": l,
            style: {
                cursor: "pointer",
                backgroundColor: r ? S() : `${S()}aa`,
                borderRadius: "4px",
                transition: "all 0.1s ease-out"
            }
        }, {
            children: typeof o[l] == "function" ? y.jsx("div", Object.assign({
                style: {
                    transition: "all 0.1s ease-out",
                    transform: r ? "scale(1)" : "scale(0.85)"
                }
            }, {
                children: o[l]({
                    squareWidth: u / 8,
                    isDragging: !1
                })
            })) : y.jsx("svg", Object.assign({
                viewBox: "1 1 43 43",
                width: u / 8,
                height: u / 8,
                style: {
                    transition: "all 0.1s ease-out",
                    transform: r ? "scale(1)" : "scale(0.85)"
                }
            }, {
                children: y.jsx("g", {
                    children: o[l]
                })
            }))
        }));
    }
    function pE() {
        const { boardOrientation: l, boardWidth: r, promotionDialogVariant: i, promoteToSquare: u } = wn(), o = u?.[1] === "1" ? "b" : "w", f = [
            `${o ?? "w"}Q`,
            `${o ?? "w"}R`,
            `${o ?? "w"}N`,
            `${o ?? "w"}B`
        ], d = {
            default: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                transform: `translate(${-r / 8}px, ${-r / 8}px)`
            },
            vertical: {
                transform: `translate(${-r / 16}px, ${-r / 16}px)`
            },
            modal: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: `translate(0px, ${3 * r / 8}px)`,
                width: "100%",
                height: `${r / 4}px`,
                top: 0,
                backgroundColor: "white",
                left: 0
            }
        }, h = Dc(l, r, u || "a8");
        return y.jsx("div", Object.assign({
            style: Object.assign({
                position: "absolute",
                top: `${h?.y}px`,
                left: `${h?.x}px`,
                zIndex: 1e3
            }, d[i]),
            title: "Choose promotion piece"
        }, {
            children: f.map((p)=>y.jsx(hE, {
                    option: p
                }, p))
        }));
    }
    const gE = {
        whiteKing: y.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            style: {
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "crisp-edges"
            },
            viewBox: "0 0 4210 12970",
            x: "0px",
            y: "0px",
            fillRule: "evenodd",
            clipRule: "evenodd",
            width: "250",
            height: "250"
        }, {
            children: y.jsx("g", {
                children: y.jsx("path", {
                    style: {
                        fill: "black",
                        fillRule: "nonzero"
                    },
                    d: "M2105 0c169,0 286,160 249,315l200 0c-172,266 -231,479 -256,792 315,-24 530,-86 792,-255l0 897c-265,-171 -479,-231 -792,-256 18,234 75,495 185,682l339 0c233,0 369,269 225,456l545 0 -595 1916c130,94 158,275 59,402 465,0 416,568 51,568l-334 0 465 2867 332 0c250,0 381,306 199,485 162,63 273,220 273,399l0 633 168 0 0 475c-1403,0 -2807,0 -4210,0l0 -475 167 0 0 -633c0,-179 112,-336 274,-399 -181,-178 -52,-485 199,-485l332 0 465 -2867 -335 0c-353,0 -418,-568 51,-568 -98,-127 -70,-308 59,-402l-594 -1916c181,0 363,0 545,0 -144,-187 -9,-456 225,-456l339 0c110,-187 167,-448 185,-682 -315,25 -530,87 -793,256l0 -897c266,171 480,231 793,255 -25,-315 -87,-529 -256,-792l199 0c-36,-155 81,-315 250,-315zm-1994 10012l0 253 3988 0 0 -253c-1330,0 -2659,0 -3988,0zm484 -1060c-174,0 -316,142 -316,316l0 633 3652 0 0 -633c0,-174 -142,-316 -316,-316 -1007,0 -2013,0 -3020,0zm45 -457c-230,0 -225,345 0,345l2930 0c230,0 225,-345 0,-345 -977,0 -1953,0 -2930,0zm2020 -2978l-1111 0 -465 2867 2041 0 -465 -2867zm-1558 -456c-229,0 -224,345 0,345 669,0 1337,0 2005,0 230,0 225,-345 0,-345 -668,0 -1336,0 -2005,0zm1730 -457l-1454 0c-229,0 -224,345 0,345l1454 0c229,0 224,-345 0,-345zm-2064 -1862l544 1751c529,0 1057,0 1586,0l544 -1751c-892,0 -1783,0 -2674,0zm1085 -567l504 0c-126,-247 -163,-526 -177,-800 273,15 553,52 800,177l0 -504c-247,126 -527,163 -800,177 14,-273 51,-552 177,-799 -168,0 -336,0 -504,0 125,247 162,526 177,799 -274,-14 -553,-51 -800,-177l0 504c247,-125 527,-162 800,-177 -15,274 -52,553 -177,800zm969 111l-1434 0c-230,0 -225,345 0,345l1434 0c230,0 225,-345 0,-345zm-717 -2175c-105,0 -175,109 -133,204l266 0c42,-96 -30,-205 -133,-204z"
                })
            })
        }))
    };
    function mE({ children: l }) {
        try {
            return y.jsx(y.Fragment, {
                children: l
            });
        } catch (r) {
            return console.log(r), y.jsx(X0, {
                showError: !0
            });
        }
    }
    function X0({ showError: l = !1 }) {
        return y.jsxs("div", Object.assign({
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }
        }, {
            children: [
                y.jsx("div", Object.assign({
                    style: {
                        width: 250,
                        height: 250,
                        transform: "rotate(90deg)"
                    }
                }, {
                    children: gE.whiteKing
                })),
                l && y.jsx("h1", {
                    children: "Something went wrong"
                })
            ]
        }));
    }
    function vE() {
        const l = O.useRef(null), { boardWidth: r, clearCurrentRightClickDown: i, onPromotionPieceSelect: u, setShowPromoteDialog: o, showPromoteDialog: f, customBoardStyle: d } = wn();
        return O.useEffect(()=>{
            function h(p) {
                l.current && !l.current.contains(p.target) && i();
            }
            return document.addEventListener("mouseup", h), ()=>{
                document.removeEventListener("mouseup", h);
            };
        }, []), r ? y.jsx("div", Object.assign({
            style: {
                perspective: "1000px"
            }
        }, {
            children: y.jsxs("div", Object.assign({
                ref: l,
                style: Object.assign(Object.assign({
                    position: "relative"
                }, yE(r)), d)
            }, {
                children: [
                    y.jsx(fE, {}),
                    y.jsx(dE, {}),
                    f && y.jsxs(y.Fragment, {
                        children: [
                            y.jsx("div", {
                                onClick: ()=>{
                                    o(!1), u?.();
                                },
                                style: {
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    zIndex: "100",
                                    backgroundColor: "rgba(22,21,18,.7)",
                                    width: r,
                                    height: r
                                }
                            }),
                            y.jsx(pE, {})
                        ]
                    })
                ]
            }))
        })) : y.jsx(X0, {});
    }
    const yE = (l)=>({
            cursor: "default",
            height: l,
            width: l
        });
    var lr;
    (function(l) {
        l.mouse = "mouse", l.touch = "touch", l.keyboard = "keyboard";
    })(lr || (lr = {}));
    class bE {
        get delay() {
            var r;
            return (r = this.args.delay) !== null && r !== void 0 ? r : 0;
        }
        get scrollAngleRanges() {
            return this.args.scrollAngleRanges;
        }
        get getDropTargetElementsAtPoint() {
            return this.args.getDropTargetElementsAtPoint;
        }
        get ignoreContextMenu() {
            var r;
            return (r = this.args.ignoreContextMenu) !== null && r !== void 0 ? r : !1;
        }
        get enableHoverOutsideTarget() {
            var r;
            return (r = this.args.enableHoverOutsideTarget) !== null && r !== void 0 ? r : !1;
        }
        get enableKeyboardEvents() {
            var r;
            return (r = this.args.enableKeyboardEvents) !== null && r !== void 0 ? r : !1;
        }
        get enableMouseEvents() {
            var r;
            return (r = this.args.enableMouseEvents) !== null && r !== void 0 ? r : !1;
        }
        get enableTouchEvents() {
            var r;
            return (r = this.args.enableTouchEvents) !== null && r !== void 0 ? r : !0;
        }
        get touchSlop() {
            return this.args.touchSlop || 0;
        }
        get delayTouchStart() {
            var r, i, u, o;
            return (o = (u = (r = this.args) === null || r === void 0 ? void 0 : r.delayTouchStart) !== null && u !== void 0 ? u : (i = this.args) === null || i === void 0 ? void 0 : i.delay) !== null && o !== void 0 ? o : 0;
        }
        get delayMouseStart() {
            var r, i, u, o;
            return (o = (u = (r = this.args) === null || r === void 0 ? void 0 : r.delayMouseStart) !== null && u !== void 0 ? u : (i = this.args) === null || i === void 0 ? void 0 : i.delay) !== null && o !== void 0 ? o : 0;
        }
        get window() {
            if (this.context && this.context.window) return this.context.window;
            if (typeof window < "u") return window;
        }
        get document() {
            var r;
            if (!((r = this.context) === null || r === void 0) && r.document) return this.context.document;
            if (this.window) return this.window.document;
        }
        get rootElement() {
            var r;
            return ((r = this.args) === null || r === void 0 ? void 0 : r.rootElement) || this.document;
        }
        constructor(r, i){
            this.args = r, this.context = i;
        }
    }
    function SE(l, r, i, u) {
        return Math.sqrt(Math.pow(Math.abs(i - l), 2) + Math.pow(Math.abs(u - r), 2));
    }
    function EE(l, r, i, u, o) {
        if (!o) return !1;
        const f = Math.atan2(u - r, i - l) * 180 / Math.PI + 180;
        for(let d = 0; d < o.length; ++d){
            const h = o[d];
            if (h && (h.start == null || f >= h.start) && (h.end == null || f <= h.end)) return !0;
        }
        return !1;
    }
    const OE = {
        Left: 1
    }, TE = {
        Left: 0
    };
    function gc(l) {
        return l.button === void 0 || l.button === TE.Left;
    }
    function DE(l) {
        return l.buttons === void 0 || (l.buttons & OE.Left) === 0;
    }
    function Z0(l) {
        return !!l.targetTouches;
    }
    const CE = 1;
    function xE(l) {
        const r = l.nodeType === CE ? l : l.parentElement;
        if (!r) return;
        const { top: i, left: u } = r.getBoundingClientRect();
        return {
            x: u,
            y: i
        };
    }
    function RE(l, r) {
        if (l.targetTouches.length === 1) return xu(l.targetTouches[0]);
        if (r && l.touches.length === 1 && l.touches[0].target === r.target) return xu(l.touches[0]);
    }
    function xu(l, r) {
        return Z0(l) ? RE(l, r) : {
            x: l.clientX,
            y: l.clientY
        };
    }
    const kg = (()=>{
        let l = !1;
        try {
            addEventListener("test", ()=>{}, Object.defineProperty({}, "passive", {
                get () {
                    return l = !0, !0;
                }
            }));
        } catch  {}
        return l;
    })(), kl = {
        [lr.mouse]: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
            contextmenu: "contextmenu"
        },
        [lr.touch]: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend"
        },
        [lr.keyboard]: {
            keydown: "keydown"
        }
    };
    class ql {
        profile() {
            var r;
            return {
                sourceNodes: this.sourceNodes.size,
                sourcePreviewNodes: this.sourcePreviewNodes.size,
                sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                targetNodes: this.targetNodes.size,
                dragOverTargetIds: ((r = this.dragOverTargetIds) === null || r === void 0 ? void 0 : r.length) || 0
            };
        }
        get document() {
            return this.options.document;
        }
        setup() {
            const r = this.options.rootElement;
            r && (ue(!ql.isSetUp, "Cannot have two Touch backends at the same time."), ql.isSetUp = !0, this.addEventListener(r, "start", this.getTopMoveStartHandler()), this.addEventListener(r, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(r, "move", this.handleTopMove), this.addEventListener(r, "move", this.handleTopMoveCapture, !0), this.addEventListener(r, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(r, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(r, "keydown", this.handleCancelOnEscape, !0));
        }
        teardown() {
            const r = this.options.rootElement;
            r && (ql.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(r, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(r, "start", this.handleTopMoveStart), this.removeEventListener(r, "move", this.handleTopMoveCapture, !0), this.removeEventListener(r, "move", this.handleTopMove), this.removeEventListener(r, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(r, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(r, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver());
        }
        addEventListener(r, i, u, o = !1) {
            const f = kg ? {
                capture: o,
                passive: !1
            } : o;
            this.listenerTypes.forEach(function(d) {
                const h = kl[d][i];
                h && r.addEventListener(h, u, f);
            });
        }
        removeEventListener(r, i, u, o = !1) {
            const f = kg ? {
                capture: o,
                passive: !1
            } : o;
            this.listenerTypes.forEach(function(d) {
                const h = kl[d][i];
                h && r.removeEventListener(h, u, f);
            });
        }
        connectDragSource(r, i) {
            const u = this.handleMoveStart.bind(this, r);
            return this.sourceNodes.set(r, i), this.addEventListener(i, "start", u), ()=>{
                this.sourceNodes.delete(r), this.removeEventListener(i, "start", u);
            };
        }
        connectDragPreview(r, i, u) {
            return this.sourcePreviewNodeOptions.set(r, u), this.sourcePreviewNodes.set(r, i), ()=>{
                this.sourcePreviewNodes.delete(r), this.sourcePreviewNodeOptions.delete(r);
            };
        }
        connectDropTarget(r, i) {
            const u = this.options.rootElement;
            if (!this.document || !u) return ()=>{};
            const o = (f)=>{
                if (!this.document || !u || !this.monitor.isDragging()) return;
                let d;
                switch(f.type){
                    case kl.mouse.move:
                        d = {
                            x: f.clientX,
                            y: f.clientY
                        };
                        break;
                    case kl.touch.move:
                        var h, p;
                        d = {
                            x: ((h = f.touches[0]) === null || h === void 0 ? void 0 : h.clientX) || 0,
                            y: ((p = f.touches[0]) === null || p === void 0 ? void 0 : p.clientY) || 0
                        };
                        break;
                }
                const m = d != null ? this.document.elementFromPoint(d.x, d.y) : void 0, b = m && i.contains(m);
                if (m === i || b) return this.handleMove(f, r);
            };
            return this.addEventListener(this.document.body, "move", o), this.targetNodes.set(r, i), ()=>{
                this.document && (this.targetNodes.delete(r), this.removeEventListener(this.document.body, "move", o));
            };
        }
        getTopMoveStartHandler() {
            return !this.options.delayTouchStart && !this.options.delayMouseStart ? this.handleTopMoveStart : this.handleTopMoveStartDelay;
        }
        installSourceNodeRemovalObserver(r) {
            this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = r, this.draggedSourceNodeRemovalObserver = new MutationObserver(()=>{
                r && !r.parentElement && (this.resurrectSourceNode(), this.uninstallSourceNodeRemovalObserver());
            }), !(!r || !r.parentElement) && this.draggedSourceNodeRemovalObserver.observe(r.parentElement, {
                childList: !0
            });
        }
        resurrectSourceNode() {
            this.document && this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), this.document.body.appendChild(this.draggedSourceNode));
        }
        uninstallSourceNodeRemovalObserver() {
            this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = void 0, this.draggedSourceNode = void 0;
        }
        constructor(r, i, u){
            this.getSourceClientOffset = (o)=>{
                const f = this.sourceNodes.get(o);
                return f && xE(f);
            }, this.handleTopMoveStartCapture = (o)=>{
                gc(o) && (this.moveStartSourceIds = []);
            }, this.handleMoveStart = (o)=>{
                Array.isArray(this.moveStartSourceIds) && this.moveStartSourceIds.unshift(o);
            }, this.handleTopMoveStart = (o)=>{
                if (!gc(o)) return;
                const f = xu(o);
                f && (Z0(o) && (this.lastTargetTouchFallback = o.targetTouches[0]), this._mouseClientOffset = f), this.waitingForDelay = !1;
            }, this.handleTopMoveStartDelay = (o)=>{
                if (!gc(o)) return;
                const f = o.type === kl.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart;
                this.timeout = setTimeout(this.handleTopMoveStart.bind(this, o), f), this.waitingForDelay = !0;
            }, this.handleTopMoveCapture = ()=>{
                this.dragOverTargetIds = [];
            }, this.handleMove = (o, f)=>{
                this.dragOverTargetIds && this.dragOverTargetIds.unshift(f);
            }, this.handleTopMove = (o)=>{
                if (this.timeout && clearTimeout(this.timeout), !this.document || this.waitingForDelay) return;
                const { moveStartSourceIds: f, dragOverTargetIds: d } = this, h = this.options.enableHoverOutsideTarget, p = xu(o, this.lastTargetTouchFallback);
                if (!p) return;
                if (this._isScrolling || !this.monitor.isDragging() && EE(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, p.x, p.y, this.options.scrollAngleRanges)) {
                    this._isScrolling = !0;
                    return;
                }
                if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && f && SE(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, p.x, p.y) > (this.options.touchSlop ? this.options.touchSlop : 0) && (this.moveStartSourceIds = void 0, this.actions.beginDrag(f, {
                    clientOffset: this._mouseClientOffset,
                    getSourceClientOffset: this.getSourceClientOffset,
                    publishSource: !1
                })), !this.monitor.isDragging()) return;
                const m = this.sourceNodes.get(this.monitor.getSourceId());
                this.installSourceNodeRemovalObserver(m), this.actions.publishDragSource(), o.cancelable && o.preventDefault();
                const b = (d || []).map((T)=>this.targetNodes.get(T)).filter((T)=>!!T), E = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(p.x, p.y, b) : this.document.elementsFromPoint(p.x, p.y), S = [];
                for(const T in E){
                    if (!E.hasOwnProperty(T)) continue;
                    let R = E[T];
                    for(R != null && S.push(R); R;)R = R.parentElement, R && S.indexOf(R) === -1 && S.push(R);
                }
                const D = S.filter((T)=>b.indexOf(T) > -1).map((T)=>this._getDropTargetId(T)).filter((T)=>!!T).filter((T, R, M)=>M.indexOf(T) === R);
                if (h) for(const T in this.targetNodes){
                    const R = this.targetNodes.get(T);
                    if (m && R && R.contains(m) && D.indexOf(T) === -1) {
                        D.unshift(T);
                        break;
                    }
                }
                D.reverse(), this.actions.hover(D, {
                    clientOffset: p
                });
            }, this._getDropTargetId = (o)=>{
                const f = this.targetNodes.keys();
                let d = f.next();
                for(; d.done === !1;){
                    const h = d.value;
                    if (o === this.targetNodes.get(h)) return h;
                    d = f.next();
                }
            }, this.handleTopMoveEndCapture = (o)=>{
                if (this._isScrolling = !1, this.lastTargetTouchFallback = void 0, !!DE(o)) {
                    if (!this.monitor.isDragging() || this.monitor.didDrop()) {
                        this.moveStartSourceIds = void 0;
                        return;
                    }
                    o.cancelable && o.preventDefault(), this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag();
                }
            }, this.handleCancelOnEscape = (o)=>{
                o.key === "Escape" && this.monitor.isDragging() && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag());
            }, this.options = new bE(u, i), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(lr.mouse), this.options.enableTouchEvents && this.listenerTypes.push(lr.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(lr.keyboard);
        }
    }
    const AE = function(r, i = {}, u = {}) {
        return new ql(r, i, u);
    }, _E = O.createContext({
        isCustomDndProviderSet: !1
    }), wE = ({ children: l })=>y.jsx(y.Fragment, {
            children: l
        }), ME = ({ customDndBackend: l, customDndBackendOptions: r, children: i })=>{
        const [u, o] = O.useState(), [f, d] = O.useState(!1), [h, p] = O.useState(!1), { isCustomDndProviderSet: m } = O.useContext(_E);
        O.useEffect(()=>{
            p("ontouchstart" in window), d(!0), o(window);
        }, []);
        const b = m ? wE : m3;
        return f ? u ? y.jsx(b, Object.assign({
            backend: l || (h ? AE : sE),
            context: u,
            options: l ? r : void 0
        }, {
            children: i
        })) : y.jsx(y.Fragment, {
            children: i
        }) : null;
    };
    function NE({ boardContainer: l }) {
        const { boardWidth: r, chessPieces: i, id: u, snapToCursor: o, allowDragOutsideBoard: f } = wn(), d = z3((S)=>({
                item: S.getItem(),
                clientOffset: S.getClientOffset(),
                sourceClientOffset: S.getSourceClientOffset(),
                isDragging: S.isDragging()
            })), { isDragging: h, item: p, clientOffset: m, sourceClientOffset: b } = d, E = O.useCallback((S, D)=>{
            if (!S || !D) return {
                display: "none"
            };
            let { x: T, y: R } = o ? S : D;
            const M = r / 8 / 2;
            if (o && (T -= M, R -= M), !f) {
                const { left: k, top: V } = l, Q = k - M, G = V - M, Y = k + r - M, le = V + r - M;
                T = Math.max(Q, Math.min(T, Y)), R = Math.max(G, Math.min(R, le));
            }
            const w = `translate(${T}px, ${R}px)`;
            return {
                transform: w,
                WebkitTransform: w,
                touchAction: "none"
            };
        }, [
            r,
            f,
            o,
            l
        ]);
        return h && p.id === u ? y.jsx("div", Object.assign({
            style: {
                position: "fixed",
                pointerEvents: "none",
                zIndex: 10,
                left: 0,
                top: 0
            }
        }, {
            children: y.jsx("div", Object.assign({
                style: E(m, b)
            }, {
                children: typeof i[p.piece] == "function" ? i[p.piece]({
                    squareWidth: r / 8,
                    isDragging: !0
                }) : y.jsx("svg", Object.assign({
                    viewBox: "1 1 43 43",
                    width: r / 8,
                    height: r / 8
                }, {
                    children: y.jsx("g", {
                        children: i[p.piece]
                    })
                }))
            }))
        })) : null;
    }
    const J0 = O.forwardRef((l, r)=>{
        const { customDndBackend: i, customDndBackendOptions: u, onBoardWidthChange: o } = l, f = q2(l, [
            "customDndBackend",
            "customDndBackendOptions",
            "onBoardWidthChange"
        ]), [d, h] = O.useState(l.boardWidth), p = O.useRef(null), m = O.useRef(null), [b, E] = O.useState({
            left: 0,
            top: 0
        }), S = O.useMemo(()=>{
            var D;
            return (D = p.current) === null || D === void 0 ? void 0 : D.getBoundingClientRect();
        }, [
            p.current
        ]);
        return O.useEffect(()=>{
            d && o?.(d);
        }, [
            d
        ]), O.useEffect(()=>{
            E({
                left: S?.left ? S?.left : 0,
                top: S?.top ? S?.top : 0
            });
        }, [
            S
        ]), O.useEffect(()=>{
            var D;
            if (l.boardWidth === void 0 && (!((D = p.current) === null || D === void 0) && D.offsetWidth)) {
                const T = new ResizeObserver(()=>{
                    var R;
                    h((R = p.current) === null || R === void 0 ? void 0 : R.offsetWidth);
                });
                return T.observe(p.current), ()=>{
                    T.disconnect();
                };
            }
        }, [
            p.current
        ]), y.jsx(mE, {
            children: y.jsxs("div", Object.assign({
                ref: m,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%"
                }
            }, {
                children: [
                    y.jsx("div", {
                        ref: p,
                        style: {
                            width: "100%"
                        }
                    }),
                    y.jsx(ME, Object.assign({
                        customDndBackend: i,
                        customDndBackendOptions: u
                    }, {
                        children: d && y.jsxs(W2, Object.assign({
                            boardWidth: d
                        }, f, {
                            ref: r
                        }, {
                            children: [
                                y.jsx(NE, {
                                    boardContainer: b
                                }),
                                y.jsx(vE, {})
                            ]
                        }))
                    }))
                ]
            }))
        });
    }), jE = (l, r)=>l.flags.includes("c") ? "capture" : r.isCheckmate() ? "checkmate" : r.inCheck() ? "check" : "move", PE = (l)=>(l === "w" ? "Black" : "White") + " " + ot.CHECKMATE_MESSAGE, LE = (l)=>l.isCheckmate() ? {
            isGameOver: !0,
            gameResult: PE(l.turn())
        } : l.isDraw() ? {
            isGameOver: !0,
            gameResult: "Game Drawn!"
        } : {
            isGameOver: !1,
            gameResult: ""
        }, Vg = (l, r)=>{
        for(let i = 0; i < 8; i++)for(let u = 0; u < 8; u++){
            const o = l[i][u];
            if (o && o.type === "k" && o.color === r) return {
                rank: i,
                file: u
            };
        }
        return null;
    }, F0 = (l)=>l ? {
            [l.from]: {
                backgroundColor: "var(--last-move-from)"
            },
            [l.to]: {
                backgroundColor: "var(--last-move-to)"
            }
        } : null, Xc = ({ className: l, handleMove: r, fen: i, lastMove: u, isFlipped: o })=>{
        const f = (d, h)=>{
            r({
                from: d,
                to: h
            });
        };
        return y.jsx("div", {
            className: l,
            children: y.jsx(J0, {
                position: i,
                onPieceDrop: f,
                boardOrientation: o ? "black" : "white",
                customSquareStyles: F0(u),
                customDarkSquareStyle: {
                    backgroundColor: "var(--dark-square)"
                },
                customLightSquareStyle: {
                    backgroundColor: "var(--light-square)"
                }
            })
        });
    };
    Xc.defaultProps = {
        isFinalMove: !1,
        result: ""
    };
    Xc.prototype = {
        isAnalysis: Ze.bool.isRequired,
        handleMove: Ze.func.isRequired,
        fen: Ze.string.isRequired,
        lastMove: Ze.object.isRequired,
        isFlipped: Ze.bool.isRequired,
        isFinalMove: Ze.bool.isFinalMove
    };
    const W0 = ()=>{
        const l = ur(), { theme: r, enableSound: i } = Nt((m)=>m.settings), [u, o] = O.useState(!1), f = O.useRef(null), d = ()=>o((m)=>!m);
        O.useEffect(()=>{
            const m = (b)=>{
                f.current && !f.current.contains(b.target) && o(!1);
            };
            return document.addEventListener("mousedown", m), ()=>document.removeEventListener("mousedown", m);
        }, []);
        const h = (m)=>{
            l(Iy(m.target.value));
        }, p = (m)=>{
            l(Xy(m.target.checked));
        };
        return y.jsxs("div", {
            className: "settings-container",
            ref: f,
            children: [
                y.jsx("button", {
                    id: "settings-button",
                    className: "action-button",
                    onClick: d,
                    children: "⚙️ Settings"
                }),
                u && y.jsxs("div", {
                    className: "settings-dropdown",
                    children: [
                        y.jsxs("div", {
                            className: "dropdown-item",
                            children: [
                                y.jsx("label", {
                                    htmlFor: "themeSelect",
                                    children: "Theme"
                                }),
                                y.jsxs("select", {
                                    id: "themeSelect",
                                    value: r,
                                    onChange: h,
                                    children: [
                                        y.jsx("option", {
                                            value: "default",
                                            children: "Default"
                                        }),
                                        y.jsx("option", {
                                            value: "classic",
                                            children: "Green"
                                        }),
                                        y.jsx("option", {
                                            value: "marble",
                                            children: "Marble"
                                        }),
                                        y.jsx("option", {
                                            value: "wood",
                                            children: "Wood"
                                        }),
                                        y.jsx("option", {
                                            value: "dark",
                                            children: "Dark"
                                        })
                                    ]
                                })
                            ]
                        }),
                        y.jsxs("div", {
                            className: "checkbox-item",
                            children: [
                                y.jsx("label", {
                                    htmlFor: "soundToggle",
                                    children: "Sound"
                                }),
                                y.jsx("input", {
                                    type: "checkbox",
                                    id: "soundToggle",
                                    checked: i,
                                    onChange: p
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, kE = ()=>{
        const l = ur(), { isFlipped: r, timerDuration: i } = Nt((h)=>h.game), u = ()=>y.jsx("button", {
                onClick: ()=>l(e0(i)),
                className: "action-button",
                children: "Reset Board"
            }), o = ()=>y.jsx("button", {
                onClick: ()=>l(a0()),
                className: "action-button",
                children: r ? "Unflip Board" : "Flip Board"
            }), f = ()=>{
            console.log("downloadPGN TODO");
        }, d = ()=>y.jsx("button", {
                onClick: f,
                className: "action-button",
                children: "Download PGN"
            });
        return y.jsxs("nav", {
            className: "top-bar",
            children: [
                y.jsx(u, {}),
                y.jsx(o, {}),
                y.jsx(d, {})
            ]
        });
    }, VE = ()=>y.jsxs("div", {
            className: "top-container",
            children: [
                y.jsx(kE, {}),
                y.jsx(W0, {})
            ]
        }), BE = ({ resetGameHandler: l, timerDuration: r, gameResult: i })=>y.jsx("div", {
            className: "game-over-overlay",
            children: y.jsxs("div", {
                className: "game-over-message",
                children: [
                    y.jsx("p", {
                        children: i
                    }),
                    y.jsx("button", {
                        className: "restart-button",
                        onClick: ()=>l(r),
                        children: "Restart Game"
                    })
                ]
            })
        }), zE = ()=>{
        const l = ur(), { fen: r, moveHistory: i, lastMove: u, isGameOver: o, gameResult: f, timerDuration: d, isWhiteTurn: h } = Nt((S)=>S.game), { isFlipped: p, theme: m } = Nt((S)=>S.settings), b = O.useCallback(({ from: S, to: D })=>{
            if (o) return;
            const T = new Kl(r);
            try {
                const R = T.move({
                    from: S,
                    to: D,
                    promotion: "q"
                });
                if (!R) return;
                l(Ky({
                    from: S,
                    to: D,
                    promotionPiece: "q"
                })), Oc(jE(R, T));
                const { isGameOver: M, gameResult: w } = LE(T);
                M && l(bc(M, w));
            } catch (R) {
                console.error(R);
            }
        }, [
            o,
            l,
            r
        ]), E = (S)=>{
            l(e0(S));
        };
        return y.jsxs("div", {
            className: "main-container",
            children: [
                y.jsx(VE, {}),
                y.jsxs("div", {
                    className: "middle-container",
                    children: [
                        y.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        y.jsxs("div", {
                            className: `chess-container ${m}-theme`,
                            children: [
                                y.jsx("div", {
                                    className: "left-panel",
                                    children: y.jsx(x0, {
                                        hasGameStarted: r !== ot.START_FEN,
                                        isGameOver: o,
                                        isWhiteTurn: h,
                                        isFlipped: p,
                                        timerDuration: d
                                    })
                                }),
                                y.jsxs("div", {
                                    className: "centre-area",
                                    children: [
                                        y.jsx(Xc, {
                                            className: "chess-board",
                                            fen: r,
                                            handleMove: b,
                                            lastMove: u,
                                            isFlipped: p
                                        }),
                                        o && y.jsx(BE, {
                                            resetGameHandler: E,
                                            timerDuration: d,
                                            gameResult: f
                                        })
                                    ]
                                }),
                                y.jsx("div", {
                                    className: "right-panel",
                                    children: y.jsx(V2, {
                                        moveHistory: i
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    function $0(l, r = "lite", i = 8e3) {
        const u = O.useRef(null), o = O.useRef(null), f = O.useRef(null);
        let d = Date.now();
        const h = O.useCallback(()=>{
            u.current && u.current.terminate(), r === "lite" ? u.current = new Worker("/stockfish/stockfish-17-lite-single.js") : u.current = new Worker(new URL("/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), u.current.postMessage("uci"), console.log("Intialising worker ..."), u.current.onmessage = (T)=>{
                const R = T.data;
                if (l && l(R), typeof R == "string") {
                    if (R.startsWith("info") && R.includes("score")) {
                        const w = R.match(/score (cp|mate) (-?\d+)/);
                        if (w) {
                            const k = w[1], V = parseInt(w[2], 10), Q = k === "cp" ? V / 100 : V > 0 ? 10 : -10;
                            o.current && (o.current(Q), o.current = null);
                        }
                    }
                    const M = Date.now();
                    console.log(`Elapsed: ${M - d} ms`), console.log("onMsg :", R);
                }
            };
        }, [
            l,
            r
        ]), p = O.useCallback((T)=>{
            u.current && u.current.postMessage(T);
        }, []), m = O.useCallback((T)=>{
            T.forEach((R)=>{
                p(`setoption name ${R.name} value ${R.value}`);
            });
        }, [
            p
        ]), b = O.useCallback((T, R = [])=>{
            let M = `position fen ${T}`;
            if (R.length > 0) {
                const w = R.join(" ");
                M += ` moves ${w}`;
            }
            p(M);
        }, [
            p
        ]), E = O.useCallback((T)=>{
            u.current && (clearTimeout(f.current), S(), d = Date.now(), p(`position fen ${T}`), p("go infinite"), f.current = setTimeout(()=>{
                S();
            }, i));
        }, [
            p,
            i
        ]), S = O.useCallback(()=>{
            p("stop"), clearTimeout(f.current);
        }, [
            p
        ]), D = O.useCallback(()=>{
            u.current && (console.log("Terminating worker..."), u.current.terminate(), u.current = null), clearTimeout(f.current);
        }, []);
        return O.useEffect(()=>()=>{
                D();
            }, []), {
            initEngine: h,
            setOptions: m,
            setFen: b,
            startSearch: E,
            stopSearch: S,
            startSearch: E,
            terminateEngine: D
        };
    }
    const UE = (l)=>new Promise((r, i)=>{
            const u = new FileReader;
            u.onload = (o)=>{
                r(o.target.result);
            }, u.onerror = (o)=>{
                i(o);
            }, u.readAsText(l);
        }), e1 = ()=>{
        const l = ur(), r = (i)=>{
            const u = i.target.files[0];
            u && UE(u).then((o)=>{
                try {
                    const f = new Kl;
                    f.loadPgn(o);
                    const d = f.history(), h = [], p = f.header().Termination, m = f.header().Black || "-", b = f.header().White || "-", E = f.header().Result, S = [];
                    f.reset(), h.push(f.fen()), d.forEach((D)=>{
                        const T = f.move(D);
                        S.push({
                            from: T.from,
                            to: T.to
                        }), h.push(f.fen());
                    }), l(tb({
                        finalPos: h[h.length - 1],
                        moves: d,
                        fens: h,
                        fromToSquares: S,
                        termination: p,
                        result: E,
                        blackPlayerName: m,
                        whitePlayerName: b
                    }));
                } catch (f) {
                    console.error("Error parsing PGN:", f);
                }
            }).catch((o)=>{
                console.error("Error reading PGN file:", o);
            });
        };
        return y.jsxs("label", {
            className: "action-button",
            children: [
                "Upload PGN",
                y.jsx("input", {
                    type: "file",
                    accept: ".pgn",
                    onChange: r,
                    hidden: !0
                })
            ]
        });
    };
    e1.propTypes = {
        onLoadPGN: Ze.func.isRequired
    };
    const qE = ()=>{
        const l = ()=>{
            document.body.classList.toggle("dark-theme");
        };
        return y.jsx("button", {
            onClick: l,
            className: "theme-toggle-btn",
            children: "🌙"
        });
    }, HE = ()=>{
        const l = ur(), { isFlipped: r } = Nt((u)=>u.game), i = ()=>y.jsx("button", {
                onClick: ()=>l(a0()),
                className: "action-button",
                children: r ? "Unflip Board" : "Flip Board"
            });
        return y.jsxs("nav", {
            className: "top-bar",
            children: [
                y.jsx(i, {}),
                y.jsx(e1, {}),
                y.jsx(W0, {}),
                y.jsx(qE, {})
            ]
        });
    }, QE = ()=>y.jsx("div", {
            className: "top-container",
            children: y.jsx(HE, {})
        }), t1 = ({ setPosition: l })=>{
        const { fens: r } = Nt((p)=>p.pgn), { currentMoveIndex: i } = Nt((p)=>p.analysis), u = ur(), o = ()=>{
            Tc(), u(Fy()), l(r[0]);
        }, f = ()=>{
            i > 0 && (Oc("move"), u(Wy()), l(r[i - 1]));
        }, d = ()=>{
            i < r.length - 1 && (Oc("move"), u($y()), l(r[i + 1]));
        }, h = ()=>{
            Tc(), u(eb()), l(r[r.length - 1]);
        };
        return y.jsxs("div", {
            className: "move-navigation",
            children: [
                y.jsxs("button", {
                    onClick: o,
                    disabled: i === 0,
                    children: [
                        y.jsx("span", {
                            role: "img",
                            "aria-label": "gotostart",
                            children: "⏮️"
                        }),
                        " Start"
                    ]
                }),
                y.jsxs("button", {
                    onClick: f,
                    disabled: i === 0,
                    children: [
                        y.jsx("span", {
                            role: "img",
                            "aria-label": "previous",
                            children: "⬅️"
                        }),
                        " Prev"
                    ]
                }),
                y.jsxs("button", {
                    onClick: d,
                    disabled: i >= r.length - 1,
                    children: [
                        y.jsx("span", {
                            role: "img",
                            "aria-label": "next",
                            children: "➡️"
                        }),
                        " Next"
                    ]
                }),
                y.jsxs("button", {
                    onClick: h,
                    disabled: i === r.length - 1,
                    children: [
                        y.jsx("span", {
                            role: "img",
                            "aria-label": "last",
                            children: "⏭️"
                        }),
                        " Latest"
                    ]
                })
            ]
        });
    };
    t1.propTypes = {
        setPosition: Ze.func.isRequired
    };
    const GE = ()=>{
        const l = O.useRef(null), { moves: r, termination: i } = Nt((h)=>h.pgn), { currentMoveIndex: u, fenLength: o } = Nt((h)=>h.analysis), f = ur();
        O.useEffect(()=>{
            l.current && (l.current.scrollTop = l.current.scrollHeight);
        }, [
            r
        ]), O.useEffect(()=>{
            if (l.current) {
                const h = l.current.querySelector(`.move-row-${u}`);
                h && h.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }, [
            u
        ]);
        const d = (h)=>{
            Tc(), f(nb(h));
        };
        return y.jsxs("div", {
            className: "move-history-wrapper",
            children: [
                u == o - 1 && y.jsx("div", {
                    className: "termination-msg",
                    children: i
                }),
                y.jsx("div", {
                    className: "move-history",
                    children: y.jsxs("table", {
                        children: [
                            y.jsx("thead", {
                                children: y.jsxs("tr", {
                                    children: [
                                        y.jsx("th", {
                                            children: "#"
                                        }),
                                        y.jsx("th", {
                                            children: "White"
                                        }),
                                        y.jsx("th", {
                                            children: "Black"
                                        })
                                    ]
                                })
                            }),
                            y.jsx("tbody", {
                                ref: l,
                                children: r && r.map((h, p)=>p % 2 === 0 ? y.jsxs("tr", {
                                        className: `move-row-${p}`,
                                        children: [
                                            y.jsxs("td", {
                                                children: [
                                                    Math.floor(p / 2) + 1,
                                                    "."
                                                ]
                                            }),
                                            y.jsx("td", {
                                                className: "clickable",
                                                style: {
                                                    backgroundColor: p + 1 === u ? "lightblue" : "transparent"
                                                },
                                                onClick: ()=>d(p + 1),
                                                children: h
                                            }),
                                            y.jsx("td", {
                                                className: "clickable",
                                                style: {
                                                    backgroundColor: p + 2 === u ? "lightblue" : "transparent"
                                                },
                                                onClick: ()=>d(p + 2),
                                                children: r[p + 1] || ""
                                            })
                                        ]
                                    }, p / 2) : null)
                            })
                        ]
                    })
                })
            ]
        });
    }, Zc = ({ className: l, handleMove: r, fen: i, lastMove: u, isFlipped: o, isFinalMove: f, result: d })=>{
        const h = (m, b)=>{
            r({
                from: m,
                to: b
            });
        }, p = ()=>f ? KE(i, d) : F0(u);
        return y.jsx("div", {
            className: l,
            children: y.jsx(J0, {
                position: i,
                onPieceDrop: h,
                boardOrientation: o ? "black" : "white",
                customSquareStyles: p(),
                customDarkSquareStyle: {
                    backgroundColor: "var(--dark-square)"
                },
                customLightSquareStyle: {
                    backgroundColor: "var(--light-square)"
                }
            })
        });
    };
    Zc.defaultProps = {
        isFinalMove: !1,
        result: ""
    };
    Zc.prototype = {
        isAnalysis: Ze.bool.isRequired,
        handleMove: Ze.func.isRequired,
        fen: Ze.string.isRequired,
        lastMove: Ze.object.isRequired,
        isFlipped: Ze.bool.isRequired,
        isFinalMove: Ze.bool.isFinalMove
    };
    const KE = (l, r)=>{
        const i = new Kl(l), u = {}, o = i.board(), f = Vg(o, "w"), d = Vg(o, "b");
        return r === "1-0" && f && (u[gu(f.rank, f.file)] = {
            backgroundColor: "var(--winner-king-background)"
        }, u[gu(d.rank, d.file)] = {
            backgroundColor: "var(--loser-king-background)"
        }), r === "0-1" && d && (u[gu(f.rank, f.file)] = {
            backgroundColor: "var(--loser-king-background)"
        }, u[gu(d.rank, d.file)] = {
            backgroundColor: "var(--winner-king-background)"
        }), u;
    }, gu = (l, r)=>String.fromCharCode(r + 97) + (8 - l), n1 = ({ isFlipped: l, evalScore: r })=>{
        const i = (u)=>(Math.max(-10, Math.min(u, 10)) + 10) / (2 * 10) * 100;
        return y.jsx("div", {
            className: `eval-bar eval-container ${l ? "flipped" : ""}`,
            children: y.jsx("div", {
                className: "white-bar",
                style: {
                    height: `${i(r)}%`
                }
            })
        });
    }, YE = (l, r)=>r.split(" ")[1] === "w" ? l : -l, IE = (l, r, i, u)=>{
        if (typeof l == "string" && l.startsWith("info") && l.includes("score")) {
            const o = l.match(/score (cp|mate) (-?\d+)/);
            if (o) {
                const d = o[1], h = parseInt(o[2], 10);
                let p = 0;
                d === "cp" ? p = h / 100 : d === "mate" && (p = h > 0 ? 10 : -10);
                const m = YE(p, u);
                r(m);
            }
            const f = l.match(/ pv (.+)/);
            f && i(f[1]);
        }
    }, XE = ()=>{
        const { fens: l, fromToSquares: r, moves: i, blackPlayerName: u, whitePlayerName: o } = Nt((Y)=>Y.pgn), { currentMoveIndex: f } = Nt((Y)=>Y.analysis), { result: d } = Nt((Y)=>Y.pgn), [h, p] = O.useState(ot.START_FEN), { isFlipped: m, theme: b } = Nt((Y)=>Y.settings), [E, S] = O.useState(0), [D, T] = O.useState(""), R = [
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
        ], M = O.useCallback((Y)=>{
            IE(Y, S, T, h);
        }, [
            h
        ]), { initEngine: w, setOptions: k, startSearch: V, stopSearch: Q } = $0(M);
        O.useEffect(()=>{
            w(), k(R);
        }, [
            w,
            k
        ]), O.useEffect(()=>{
            if (h) return Q(), V(h), ()=>{
                Q();
            };
        }, [
            h,
            V,
            Q
        ]), O.useEffect(()=>{
            l && l.length > 0 && p(l[f]);
        }, [
            f,
            l,
            r
        ]);
        const G = O.useCallback(({ from: Y, to: le })=>{
            console.log("handleMove", Y, le);
            const se = new Kl(h);
            try {
                if (!se.move({
                    from: Y,
                    to: le,
                    promotion: "q"
                })) return;
                p(se.fen());
            } catch (ae) {
                console.error(ae);
            }
        }, [
            h
        ]);
        return y.jsxs("div", {
            children: [
                y.jsx(QE, {}),
                y.jsxs("div", {
                    className: "middle-container",
                    children: [
                        y.jsxs("div", {
                            className: "left-menu-bar",
                            children: [
                                y.jsxs("p", {
                                    style: {
                                        color: "black",
                                        marginTop: "0.5rem"
                                    },
                                    children: [
                                        "Eval: ",
                                        E
                                    ]
                                }),
                                y.jsxs("p", {
                                    style: {
                                        color: "black",
                                        marginTop: "0.5rem"
                                    },
                                    children: [
                                        "Best Line: ",
                                        D
                                    ]
                                })
                            ]
                        }),
                        y.jsxs("div", {
                            className: `analysis-container ${b}-theme `,
                            children: [
                                y.jsxs("div", {
                                    className: "main-area",
                                    children: [
                                        y.jsx("div", {
                                            className: "top-name",
                                            children: y.jsx("div", {
                                                className: "player-names-wrapper",
                                                children: y.jsx("div", {
                                                    className: `player-name ${m ? "white-player-name" : "black-player-name"}`,
                                                    children: m ? o : u
                                                })
                                            })
                                        }),
                                        y.jsxs("div", {
                                            className: "evalbar-board-container",
                                            children: [
                                                y.jsx(n1, {
                                                    isFlipped: m,
                                                    evalScore: E
                                                }),
                                                y.jsx("div", {
                                                    className: "board-wrapper",
                                                    children: y.jsx(Zc, {
                                                        className: "board",
                                                        fen: h,
                                                        isFlipped: m,
                                                        lastMove: f > 0 && f < l.length - 1 && r ? r[f - 1] : null,
                                                        handleMove: G,
                                                        isFinalMove: f === l.length - 1,
                                                        result: d
                                                    })
                                                })
                                            ]
                                        }),
                                        y.jsx("div", {
                                            className: "bottom-name",
                                            children: y.jsx("div", {
                                                className: "player-names-wrapper",
                                                children: y.jsx("div", {
                                                    className: `player-name ${m ? "black-player-name" : "white-player-name"}`,
                                                    children: m ? u : o
                                                })
                                            })
                                        })
                                    ]
                                }),
                                y.jsxs("div", {
                                    className: "sidebar right-panel",
                                    children: [
                                        y.jsx(GE, {
                                            moves: i
                                        }),
                                        y.jsx(t1, {
                                            setPosition: p
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, ZE = ()=>{
        const [l, r] = O.useState("rn1qkbnr/pp3ppp/2p1p3/3p4/3P4/2N1PN2/PPP2PPP/R1BQKB1R w KQkq - 0 1"), [i, u] = O.useState(null), [o, f] = O.useState(null), [d, h] = O.useState(!1), p = O.useRef(null), { sendCommand: m } = $0((E)=>{
            if (console.log("💬 Stockfish says:", E), typeof E == "string") {
                if (E.startsWith("info") && E.includes("score")) {
                    const S = E.match(/score (cp|mate) (-?\d+)/);
                    if (S) {
                        const D = S[1], T = parseInt(S[2], 10), R = D === "cp" ? `${(T / 100).toFixed(2)}` : `Mate in ${T}`;
                        p.current = R;
                    }
                }
                if (E.startsWith("bestmove")) {
                    const S = E.split(" ")[1];
                    u(S), f(p.current), h(!1);
                }
            }
        });
        O.useEffect(()=>{
            m("uci");
        }, [
            m
        ]);
        const b = ()=>{
            l.trim() && (u(null), f(null), p.current = null, h(!0), m(`position fen ${l}`), m("go depth 20"));
        };
        return y.jsxs("div", {
            className: "stockfish-container",
            children: [
                y.jsx("h2", {
                    children: "FEN Stockfish Analyzer"
                }),
                y.jsx(n1, {
                    isFlipped: !1,
                    evalScore: 0
                }),
                y.jsx("input", {
                    type: "text",
                    value: l,
                    onChange: (E)=>r(E.target.value),
                    placeholder: "Enter FEN string",
                    style: {
                        width: "90%",
                        maxWidth: "600px",
                        padding: "0.5rem",
                        marginTop: "1rem",
                        fontSize: "1rem",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }
                }),
                y.jsx("br", {}),
                y.jsx("button", {
                    onClick: b,
                    style: {
                        marginTop: "1rem",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        borderRadius: "4px",
                        cursor: "pointer"
                    },
                    children: "Analyze Position"
                }),
                d && y.jsx("p", {
                    style: {
                        marginTop: "1rem"
                    },
                    children: "🧠 Stockfish is thinking..."
                }),
                i && y.jsxs("p", {
                    style: {
                        fontSize: "1.2rem",
                        marginTop: "1rem"
                    },
                    children: [
                        y.jsx("strong", {
                            children: "Best Move:"
                        }),
                        " ",
                        i
                    ]
                }),
                o && y.jsxs("p", {
                    style: {
                        fontSize: "1.2rem",
                        marginTop: "0.5rem"
                    },
                    children: [
                        y.jsx("strong", {
                            children: "Evaluation:"
                        }),
                        " ",
                        o
                    ]
                })
            ]
        });
    }, JE = O.createContext(), FE = ({ children: l })=>{
        const r = (b, E)=>{
            const S = localStorage.getItem(b);
            return S !== null ? JSON.parse(S) : E;
        }, [i, u] = O.useState(()=>r(ot.THEME_KEY, ot.THEME)), [o, f] = O.useState(()=>r(ot.ENABLE_SOUND_KEY, ot.ENABLE_SOUND)), [d, h] = O.useState(()=>r(ot.TIMER_DURATION_KEY, ot.TIMER_DURATION)), [p, m] = O.useState(()=>r(ot.IS_FLIPPED_KEY, ot.IS_FLIPPED));
        return O.useEffect(()=>localStorage.setItem(ot.THEME_KEY, JSON.stringify(i)), [
            i
        ]), O.useEffect(()=>localStorage.setItem(ot.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), O.useEffect(()=>localStorage.setItem(ot.TIMER_DURATION_KEY, JSON.stringify(d)), [
            d
        ]), O.useEffect(()=>localStorage.setItem(ot.IS_FLIPPED_KEY, JSON.stringify(p)), [
            p
        ]), y.jsx(JE.Provider, {
            value: {
                theme: i,
                setTheme: u,
                enableSound: o,
                setEnableSound: f,
                timerDuration: d,
                setTimerDuration: h,
                isFlipped: p,
                setIsFlipped: m
            },
            children: l
        });
    }, WE = ()=>y.jsx(FE, {
            children: y.jsxs(T2, {
                children: [
                    y.jsxs("nav", {
                        className: "routes",
                        children: [
                            y.jsx(zl, {
                                to: "/",
                                className: "action-button no-decoration",
                                children: "Analysis"
                            }),
                            y.jsx(zl, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Gameplay"
                            }),
                            y.jsx(zl, {
                                to: "/engine",
                                className: "action-button no-decoration",
                                children: "StockfishHello"
                            })
                        ]
                    }),
                    y.jsxs(e2, {
                        children: [
                            y.jsx(yu, {
                                path: "/",
                                element: y.jsx(XE, {})
                            }),
                            y.jsx(yu, {
                                path: "/analysis",
                                element: y.jsx(zE, {})
                            }),
                            y.jsx(yu, {
                                path: "/engine",
                                element: y.jsx(ZE, {})
                            })
                        ]
                    })
                ]
            })
        });
    Ev.createRoot(document.getElementById("root")).render(y.jsx(O.StrictMode, {
        children: y.jsx(Bv, {
            store: kc,
            children: y.jsx(WE, {})
        })
    }));
})();
