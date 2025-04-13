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
    function dv() {
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
    function hv() {
        return Lp || (Lp = 1, Yo.exports = dv()), Yo.exports;
    }
    var y = hv(), Io = {
        exports: {}
    }, se = {};
    var kp;
    function pv() {
        if (kp) return se;
        kp = 1;
        var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), O = Symbol.iterator;
        function S(R) {
            return R === null || typeof R != "object" ? null : (R = O && R[O] || R["@@iterator"], typeof R == "function" ? R : null);
        }
        var T = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, D = Object.assign, x = {};
        function w(R, H, I) {
            this.props = R, this.context = H, this.refs = x, this.updater = I || T;
        }
        w.prototype.isReactComponent = {}, w.prototype.setState = function(R, H) {
            if (typeof R != "object" && typeof R != "function" && R != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, R, H, "setState");
        }, w.prototype.forceUpdate = function(R) {
            this.updater.enqueueForceUpdate(this, R, "forceUpdate");
        };
        function M() {}
        M.prototype = w.prototype;
        function k(R, H, I) {
            this.props = R, this.context = H, this.refs = x, this.updater = I || T;
        }
        var V = k.prototype = new M;
        V.constructor = k, D(V, w.prototype), V.isPureReactComponent = !0;
        var G = Array.isArray, Q = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, X = Object.prototype.hasOwnProperty;
        function ie(R, H, I, Y, J, me) {
            return I = me.ref, {
                $$typeof: l,
                type: R,
                key: H,
                ref: I !== void 0 ? I : null,
                props: me
            };
        }
        function ce(R, H) {
            return ie(R.type, H, void 0, void 0, void 0, R.props);
        }
        function ae(R) {
            return typeof R == "object" && R !== null && R.$$typeof === l;
        }
        function ve(R) {
            var H = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + R.replace(/[=:]/g, function(I) {
                return H[I];
            });
        }
        var Ve = /\/+/g;
        function he(R, H) {
            return typeof R == "object" && R !== null && R.key != null ? ve("" + R.key) : H.toString(36);
        }
        function Pe() {}
        function gt(R) {
            switch(R.status){
                case "fulfilled":
                    return R.value;
                case "rejected":
                    throw R.reason;
                default:
                    switch(typeof R.status == "string" ? R.then(Pe, Pe) : (R.status = "pending", R.then(function(H) {
                        R.status === "pending" && (R.status = "fulfilled", R.value = H);
                    }, function(H) {
                        R.status === "pending" && (R.status = "rejected", R.reason = H);
                    })), R.status){
                        case "fulfilled":
                            return R.value;
                        case "rejected":
                            throw R.reason;
                    }
            }
            throw R;
        }
        function we(R, H, I, Y, J) {
            var me = typeof R;
            (me === "undefined" || me === "boolean") && (R = null);
            var ee = !1;
            if (R === null) ee = !0;
            else switch(me){
                case "bigint":
                case "string":
                case "number":
                    ee = !0;
                    break;
                case "object":
                    switch(R.$$typeof){
                        case l:
                        case r:
                            ee = !0;
                            break;
                        case b:
                            return ee = R._init, we(ee(R._payload), H, I, Y, J);
                    }
            }
            if (ee) return J = J(R), ee = Y === "" ? "." + he(R, 0) : Y, G(J) ? (I = "", ee != null && (I = ee.replace(Ve, "$&/") + "/"), we(J, H, I, "", function(mt) {
                return mt;
            })) : J != null && (ae(J) && (J = ce(J, I + (J.key == null || R && R.key === J.key ? "" : ("" + J.key).replace(Ve, "$&/") + "/") + ee)), H.push(J)), 1;
            ee = 0;
            var ne = Y === "" ? "." : Y + ":";
            if (G(R)) for(var ye = 0; ye < R.length; ye++)Y = R[ye], me = ne + he(Y, ye), ee += we(Y, H, I, me, J);
            else if (ye = S(R), typeof ye == "function") for(R = ye.call(R), ye = 0; !(Y = R.next()).done;)Y = Y.value, me = ne + he(Y, ye++), ee += we(Y, H, I, me, J);
            else if (me === "object") {
                if (typeof R.then == "function") return we(gt(R), H, I, Y, J);
                throw H = String(R), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ee;
        }
        function B(R, H, I) {
            if (R == null) return R;
            var Y = [], J = 0;
            return we(R, Y, "", "", function(me) {
                return H.call(I, me, J++);
            }), Y;
        }
        function K(R) {
            if (R._status === -1) {
                var H = R._result;
                H = H(), H.then(function(I) {
                    (R._status === 0 || R._status === -1) && (R._status = 1, R._result = I);
                }, function(I) {
                    (R._status === 0 || R._status === -1) && (R._status = 2, R._result = I);
                }), R._status === -1 && (R._status = 0, R._result = H);
            }
            if (R._status === 1) return R._result.default;
            throw R._result;
        }
        var W = typeof reportError == "function" ? reportError : function(R) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var H = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
                    error: R
                });
                if (!window.dispatchEvent(H)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", R);
                return;
            }
            console.error(R);
        };
        function Ee() {}
        return se.Children = {
            map: B,
            forEach: function(R, H, I) {
                B(R, function() {
                    H.apply(this, arguments);
                }, I);
            },
            count: function(R) {
                var H = 0;
                return B(R, function() {
                    H++;
                }), H;
            },
            toArray: function(R) {
                return B(R, function(H) {
                    return H;
                }) || [];
            },
            only: function(R) {
                if (!ae(R)) throw Error("React.Children.only expected to receive a single React element child.");
                return R;
            }
        }, se.Component = w, se.Fragment = i, se.Profiler = o, se.PureComponent = k, se.StrictMode = u, se.Suspense = p, se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, se.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(R) {
                return Q.H.useMemoCache(R);
            }
        }, se.cache = function(R) {
            return function() {
                return R.apply(null, arguments);
            };
        }, se.cloneElement = function(R, H, I) {
            if (R == null) throw Error("The argument must be a React element, but you passed " + R + ".");
            var Y = D({}, R.props), J = R.key, me = void 0;
            if (H != null) for(ee in H.ref !== void 0 && (me = void 0), H.key !== void 0 && (J = "" + H.key), H)!X.call(H, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && H.ref === void 0 || (Y[ee] = H[ee]);
            var ee = arguments.length - 2;
            if (ee === 1) Y.children = I;
            else if (1 < ee) {
                for(var ne = Array(ee), ye = 0; ye < ee; ye++)ne[ye] = arguments[ye + 2];
                Y.children = ne;
            }
            return ie(R.type, J, void 0, void 0, me, Y);
        }, se.createContext = function(R) {
            return R = {
                $$typeof: d,
                _currentValue: R,
                _currentValue2: R,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, R.Provider = R, R.Consumer = {
                $$typeof: f,
                _context: R
            }, R;
        }, se.createElement = function(R, H, I) {
            var Y, J = {}, me = null;
            if (H != null) for(Y in H.key !== void 0 && (me = "" + H.key), H)X.call(H, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (J[Y] = H[Y]);
            var ee = arguments.length - 2;
            if (ee === 1) J.children = I;
            else if (1 < ee) {
                for(var ne = Array(ee), ye = 0; ye < ee; ye++)ne[ye] = arguments[ye + 2];
                J.children = ne;
            }
            if (R && R.defaultProps) for(Y in ee = R.defaultProps, ee)J[Y] === void 0 && (J[Y] = ee[Y]);
            return ie(R, me, void 0, void 0, null, J);
        }, se.createRef = function() {
            return {
                current: null
            };
        }, se.forwardRef = function(R) {
            return {
                $$typeof: h,
                render: R
            };
        }, se.isValidElement = ae, se.lazy = function(R) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: R
                },
                _init: K
            };
        }, se.memo = function(R, H) {
            return {
                $$typeof: m,
                type: R,
                compare: H === void 0 ? null : H
            };
        }, se.startTransition = function(R) {
            var H = Q.T, I = {};
            Q.T = I;
            try {
                var Y = R(), J = Q.S;
                J !== null && J(I, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Ee, W);
            } catch (me) {
                W(me);
            } finally{
                Q.T = H;
            }
        }, se.unstable_useCacheRefresh = function() {
            return Q.H.useCacheRefresh();
        }, se.use = function(R) {
            return Q.H.use(R);
        }, se.useActionState = function(R, H, I) {
            return Q.H.useActionState(R, H, I);
        }, se.useCallback = function(R, H) {
            return Q.H.useCallback(R, H);
        }, se.useContext = function(R) {
            return Q.H.useContext(R);
        }, se.useDebugValue = function() {}, se.useDeferredValue = function(R, H) {
            return Q.H.useDeferredValue(R, H);
        }, se.useEffect = function(R, H, I) {
            var Y = Q.H;
            if (typeof I == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return Y.useEffect(R, H);
        }, se.useId = function() {
            return Q.H.useId();
        }, se.useImperativeHandle = function(R, H, I) {
            return Q.H.useImperativeHandle(R, H, I);
        }, se.useInsertionEffect = function(R, H) {
            return Q.H.useInsertionEffect(R, H);
        }, se.useLayoutEffect = function(R, H) {
            return Q.H.useLayoutEffect(R, H);
        }, se.useMemo = function(R, H) {
            return Q.H.useMemo(R, H);
        }, se.useOptimistic = function(R, H) {
            return Q.H.useOptimistic(R, H);
        }, se.useReducer = function(R, H, I) {
            return Q.H.useReducer(R, H, I);
        }, se.useRef = function(R) {
            return Q.H.useRef(R);
        }, se.useState = function(R) {
            return Q.H.useState(R);
        }, se.useSyncExternalStore = function(R, H, I) {
            return Q.H.useSyncExternalStore(R, H, I);
        }, se.useTransition = function() {
            return Q.H.useTransition();
        }, se.version = "19.1.0", se;
    }
    var Vp;
    function Ru() {
        return Vp || (Vp = 1, Io.exports = pv()), Io.exports;
    }
    var E = Ru();
    const gv = wc(E);
    var Xo = {
        exports: {}
    }, Ml = {}, Zo = {
        exports: {}
    }, Jo = {};
    var Bp;
    function mv() {
        return Bp || (Bp = 1, function(l) {
            function r(B, K) {
                var W = B.length;
                B.push(K);
                e: for(; 0 < W;){
                    var Ee = W - 1 >>> 1, R = B[Ee];
                    if (0 < o(R, K)) B[Ee] = K, B[W] = R, W = Ee;
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
                    e: for(var Ee = 0, R = B.length, H = R >>> 1; Ee < H;){
                        var I = 2 * (Ee + 1) - 1, Y = B[I], J = I + 1, me = B[J];
                        if (0 > o(Y, W)) J < R && 0 > o(me, Y) ? (B[Ee] = me, B[J] = W, Ee = J) : (B[Ee] = Y, B[I] = W, Ee = I);
                        else if (J < R && 0 > o(me, W)) B[Ee] = me, B[J] = W, Ee = J;
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
            var p = [], m = [], b = 1, O = null, S = 3, T = !1, D = !1, x = !1, w = !1, M = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
            function G(B) {
                for(var K = i(m); K !== null;){
                    if (K.callback === null) u(m);
                    else if (K.startTime <= B) u(m), K.sortIndex = K.expirationTime, r(p, K);
                    else break;
                    K = i(m);
                }
            }
            function Q(B) {
                if (x = !1, G(B), !D) if (i(p) !== null) D = !0, X || (X = !0, he());
                else {
                    var K = i(m);
                    K !== null && we(Q, K.startTime - B);
                }
            }
            var X = !1, ie = -1, ce = 5, ae = -1;
            function ve() {
                return w ? !0 : !(l.unstable_now() - ae < ce);
            }
            function Ve() {
                if (w = !1, X) {
                    var B = l.unstable_now();
                    ae = B;
                    var K = !0;
                    try {
                        e: {
                            D = !1, x && (x = !1, k(ie), ie = -1), T = !0;
                            var W = S;
                            try {
                                t: {
                                    for(G(B), O = i(p); O !== null && !(O.expirationTime > B && ve());){
                                        var Ee = O.callback;
                                        if (typeof Ee == "function") {
                                            O.callback = null, S = O.priorityLevel;
                                            var R = Ee(O.expirationTime <= B);
                                            if (B = l.unstable_now(), typeof R == "function") {
                                                O.callback = R, G(B), K = !0;
                                                break t;
                                            }
                                            O === i(p) && u(p), G(B);
                                        } else u(p);
                                        O = i(p);
                                    }
                                    if (O !== null) K = !0;
                                    else {
                                        var H = i(m);
                                        H !== null && we(Q, H.startTime - B), K = !1;
                                    }
                                }
                                break e;
                            } finally{
                                O = null, S = W, T = !1;
                            }
                            K = void 0;
                        }
                    } finally{
                        K ? he() : X = !1;
                    }
                }
            }
            var he;
            if (typeof V == "function") he = function() {
                V(Ve);
            };
            else if (typeof MessageChannel < "u") {
                var Pe = new MessageChannel, gt = Pe.port2;
                Pe.port1.onmessage = Ve, he = function() {
                    gt.postMessage(null);
                };
            } else he = function() {
                M(Ve, 0);
            };
            function we(B, K) {
                ie = M(function() {
                    B(l.unstable_now());
                }, K);
            }
            l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
                B.callback = null;
            }, l.unstable_forceFrameRate = function(B) {
                0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ce = 0 < B ? Math.floor(1e3 / B) : 5;
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
                w = !0;
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
                var Ee = l.unstable_now();
                switch(typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? Ee + W : Ee) : W = Ee, B){
                    case 1:
                        var R = -1;
                        break;
                    case 2:
                        R = 250;
                        break;
                    case 5:
                        R = 1073741823;
                        break;
                    case 4:
                        R = 1e4;
                        break;
                    default:
                        R = 5e3;
                }
                return R = W + R, B = {
                    id: b++,
                    callback: K,
                    priorityLevel: B,
                    startTime: W,
                    expirationTime: R,
                    sortIndex: -1
                }, W > Ee ? (B.sortIndex = W, r(m, B), i(p) === null && B === i(m) && (x ? (k(ie), ie = -1) : x = !0, we(Q, W - Ee))) : (B.sortIndex = R, r(p, B), D || T || (D = !0, X || (X = !0, he()))), B;
            }, l.unstable_shouldYield = ve, l.unstable_wrapCallback = function(B) {
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
    function vv() {
        return zp || (zp = 1, Zo.exports = mv()), Zo.exports;
    }
    var Fo = {
        exports: {}
    }, ht = {};
    var Up;
    function yv() {
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
            var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: O == null ? null : "" + O,
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
                var b = m.as, O = h(b, m.crossOrigin), S = typeof m.integrity == "string" ? m.integrity : void 0, T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
                b === "style" ? u.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                    crossOrigin: O,
                    integrity: S,
                    fetchPriority: T
                }) : b === "script" && u.d.X(p, {
                    crossOrigin: O,
                    integrity: S,
                    fetchPriority: T,
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
                var b = m.as, O = h(b, m.crossOrigin);
                u.d.L(p, b, {
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
    function bv() {
        if (qp) return Fo.exports;
        qp = 1;
        function l() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (r) {
                console.error(r);
            }
        }
        return l(), Fo.exports = yv(), Fo.exports;
    }
    var Hp;
    function Sv() {
        if (Hp) return Ml;
        Hp = 1;
        var l = vv(), r = Ru(), i = bv();
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
        var b = Object.assign, O = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), k = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), ve = Symbol.for("react.memo_cache_sentinel"), Ve = Symbol.iterator;
        function he(e) {
            return e === null || typeof e != "object" ? null : (e = Ve && e[Ve] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Pe = Symbol.for("react.client.reference");
        function gt(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Pe ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case D:
                    return "Fragment";
                case w:
                    return "Profiler";
                case x:
                    return "StrictMode";
                case Q:
                    return "Suspense";
                case X:
                    return "SuspenseList";
                case ae:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case T:
                    return "Portal";
                case V:
                    return (e.displayName || "Context") + ".Provider";
                case k:
                    return (e._context.displayName || "Context") + ".Consumer";
                case G:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case ie:
                    return t = e.displayName || null, t !== null ? t : gt(e.type) || "Memo";
                case ce:
                    t = e._payload, e = e._init;
                    try {
                        return gt(e(t));
                    } catch  {}
            }
            return null;
        }
        var we = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Ee = [], R = -1;
        function H(e) {
            return {
                current: e
            };
        }
        function I(e) {
            0 > R || (e.current = Ee[R], Ee[R] = null, R--);
        }
        function Y(e, t) {
            R++, Ee[R] = e.current, e.current = t;
        }
        var J = H(null), me = H(null), ee = H(null), ne = H(null);
        function ye(e, t) {
            switch(Y(ee, t), Y(me, e), Y(J, null), t.nodeType){
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
            I(J), Y(J, e);
        }
        function mt() {
            I(J), I(me), I(ee);
        }
        function sn(e) {
            e.memoizedState !== null && Y(ne, e);
            var t = J.current, n = op(t, e.type);
            t !== n && (Y(me, e), Y(J, n));
        }
        function Ge(e) {
            me.current === e && (I(J), I(me)), ne.current === e && (I(ne), Cl._currentValue = W);
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
        var $t = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + $t, ft = "__reactProps$" + $t, Oe = "__reactContainer$" + $t, Me = "__reactEvents$" + $t, bt = "__reactListeners$" + $t, Ke = "__reactHandles$" + $t, It = "__reactResources$" + $t, rt = "__reactMarker$" + $t;
        function ka(e) {
            delete e[Fe], delete e[ft], delete e[Me], delete e[bt], delete e[Ke];
        }
        function zr(e) {
            var t = e[Fe];
            if (t) return t;
            for(var n = e.parentNode; n;){
                if (t = n[Oe] || n[Fe]) {
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
            if (e = e[Fe] || e[Oe]) {
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
        var a1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wc = {}, $c = {};
        function l1(e) {
            return ct.call($c, e) ? !0 : ct.call(Wc, e) ? !1 : a1.test(e) ? $c[e] = !0 : (Wc[e] = !0, !1);
        }
        function Wl(e, t, n) {
            if (l1(t)) if (n === null) e.removeAttribute(t);
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
        function i1(e) {
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
                do t += i1(e), e = e.return;
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
        function u1(e) {
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
            e._valueTracker || (e._valueTracker = u1(e));
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
        var s1 = /[\n"\\]/g;
        function kt(e) {
            return e.replace(s1, function(t) {
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
                    if (we(a)) {
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
        var o1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function sf(e, t, n) {
            var a = t.indexOf("--") === 0;
            n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || o1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
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
        var c1 = new Map([
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
        ]), f1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function ni(e) {
            return f1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
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
        }), d1 = St(Ua), Ju, Fu, qa, ui = b({}, Ua, {
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
        }), pf = St(ui), h1 = b({}, ui, {
            dataTransfer: 0
        }), p1 = St(h1), g1 = b({}, Ua, {
            relatedTarget: 0
        }), Wu = St(g1), m1 = b({}, fr, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), v1 = St(m1), y1 = b({}, fr, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), b1 = St(y1), S1 = b({}, fr, {
            data: 0
        }), gf = St(S1), E1 = {
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
        }, O1 = {
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
        }, T1 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function D1(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = T1[e]) ? !!t[e] : !1;
        }
        function $u() {
            return D1;
        }
        var C1 = b({}, Ua, {
            key: function(e) {
                if (e.key) {
                    var t = E1[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? O1[e.keyCode] || "Unidentified" : "";
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
        }), x1 = St(C1), R1 = b({}, ui, {
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
        }), mf = St(R1), A1 = b({}, Ua, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: $u
        }), _1 = St(A1), w1 = b({}, fr, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), M1 = St(w1), N1 = b({}, ui, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), j1 = St(N1), P1 = b({}, fr, {
            newState: 0,
            oldState: 0
        }), L1 = St(P1), k1 = [
            9,
            13,
            27,
            32
        ], es = dn && "CompositionEvent" in window, Ha = null;
        dn && "documentMode" in document && (Ha = document.documentMode);
        var V1 = dn && "TextEvent" in window && !Ha, vf = dn && (!es || Ha && 8 < Ha && 11 >= Ha), yf = " ", bf = !1;
        function Sf(e, t) {
            switch(e){
                case "keyup":
                    return k1.indexOf(t.keyCode) !== -1;
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
        function B1(e, t) {
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
        function z1(e, t) {
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
        var U1 = {
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
            return t === "input" ? !!U1[e.type] : t === "textarea";
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
        function q1(e) {
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
                Tf(t, Ga, e, Yu(e)), ff(q1, t);
            }
        }
        function H1(e, t, n) {
            e === "focusin" ? (Rf(), Qa = t, Ga = n, Qa.attachEvent("onpropertychange", Af)) : e === "focusout" && Rf();
        }
        function Q1(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return si(Ga);
        }
        function G1(e, t) {
            if (e === "click") return si(t);
        }
        function K1(e, t) {
            if (e === "input" || e === "change") return si(t);
        }
        function Y1(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var Ct = typeof Object.is == "function" ? Object.is : Y1;
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
        var I1 = dn && "documentMode" in document && 11 >= document.documentMode, Zr = null, as = null, Ya = null, ls = !1;
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
        var Lf = hr("animationend"), kf = hr("animationiteration"), Vf = hr("animationstart"), X1 = hr("transitionrun"), Z1 = hr("transitionstart"), J1 = hr("transitioncancel"), Bf = hr("transitionend"), zf = new Map, us = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
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
        function F1(e, t, n, a) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function xt(e, t, n, a) {
            return new F1(e, t, n, a);
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
            else if (typeof e == "string") g = $m(e, n, J.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ae:
                    return e = xt(31, n, t, s), e.elementType = ae, e.lanes = c, e;
                case D:
                    return pr(n.children, s, c, t);
                case x:
                    g = 8, s |= 24;
                    break;
                case w:
                    return e = xt(12, n, t, s | 2), e.elementType = w, e.lanes = c, e;
                case Q:
                    return e = xt(13, n, t, s), e.elementType = Q, e.lanes = c, e;
                case X:
                    return e = xt(19, n, t, s), e.elementType = X, e.lanes = c, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case M:
                        case V:
                            g = 10;
                            break e;
                        case k:
                            g = 9;
                            break e;
                        case G:
                            g = 11;
                            break e;
                        case ie:
                            g = 14;
                            break e;
                        case ce:
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
        var yt = null, Be = null, Te = !1, vr = null, en = !1, gs = Error(u(519));
        function yr(e) {
            var t = Error(u(418, ""));
            throw Za(Vt(t, e)), gs;
        }
        function Gf(e) {
            var t = e.stateNode, n = e.type, a = e.memoizedProps;
            switch(t[Fe] = e, t[ft] = a, n){
                case "dialog":
                    ge("cancel", t), ge("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ge("load", t);
                    break;
                case "video":
                case "audio":
                    for(n = 0; n < bl.length; n++)ge(bl[n], t);
                    break;
                case "source":
                    ge("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    ge("error", t), ge("load", t);
                    break;
                case "details":
                    ge("toggle", t);
                    break;
                case "input":
                    ge("invalid", t), af(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), ei(t);
                    break;
                case "select":
                    ge("invalid", t);
                    break;
                case "textarea":
                    ge("invalid", t), uf(t, a.value, a.defaultValue, a.children), ei(t);
            }
            n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || up(t.textContent, n) ? (a.popover != null && (ge("beforetoggle", t), ge("toggle", t)), a.onScroll != null && ge("scroll", t), a.onScrollEnd != null && ge("scrollend", t), a.onClick != null && (t.onclick = Xi), t = !0) : t = !1, t || yr(e);
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
            if (!Te) return Kf(e), Te = !0, !1;
            var t = e.tag, n;
            if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || No(e.type, e.memoizedProps)), n = !n), n && Be && yr(e), Kf(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (n = e.data, n === "/$") {
                            if (t === 0) {
                                Be = Jt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    Be = null;
                }
            } else t === 27 ? (t = Be, Jn(e.type) ? (e = ko, ko = null, Be = e) : Be = t) : Be = yt ? Jt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Xa() {
            Be = yt = null, Te = !1;
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
            Y(ms, t._currentValue), t._currentValue = n;
        }
        function vn(e) {
            e._currentValue = ms.current, I(ms);
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
        var W1 = typeof AbortController < "u" ? AbortController : function() {
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
        }, $1 = l.unstable_scheduleCallback, em = l.unstable_NormalPriority, Ye = {
            $$typeof: V,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function bs() {
            return {
                controller: new W1,
                data: new Map,
                refCount: 0
            };
        }
        function Fa(e) {
            e.refCount--, e.refCount === 0 && $1(em, function() {
                e.controller.abort();
            });
        }
        var Wa = null, Ss = 0, na = 0, ra = null;
        function tm(e, t) {
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
        function nm(e, t) {
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
            typeof t == "object" && t !== null && typeof t.then == "function" && tm(e, t), Zf !== null && Zf(e, t);
        };
        var Er = H(null);
        function Es() {
            var e = Er.current;
            return e !== null ? e : Ne.pooledCache;
        }
        function vi(e, t) {
            t === null ? Y(Er, Er.current) : Y(Er, t.pool);
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
                        if (e = Ne, e !== null && 100 < e.shellSuspendCounter) throw Error(u(482));
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
            if (a = a.shared, (De & 2) !== 0) {
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
                    if (L ? (be & P) === P : (a & P) === P) {
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
                            var Ae = n;
                            switch($.tag){
                                case 1:
                                    if (re = $.payload, typeof re == "function") {
                                        q = re.call(Ae, q, P);
                                        break e;
                                    }
                                    q = re;
                                    break e;
                                case 3:
                                    re.flags = re.flags & -65537 | 128;
                                case 0:
                                    if (re = $.payload, P = typeof re == "function" ? re.call(Ae, q, P) : re, P == null) break e;
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
            e = Dn, Y(Si, e), Y(aa, t), Dn = e | t.baseLanes;
        }
        function Rs() {
            Y(Si, Dn), Y(aa, aa.current);
        }
        function As() {
            Dn = Si.current, I(aa), I(Si);
        }
        var zn = 0, fe = null, xe = null, He = null, Ei = !1, la = !1, Or = !1, Oi = 0, al = 0, ia = null, rm = 0;
        function Ue() {
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
            var t = xe !== null && xe.next !== null;
            if (zn = 0, He = xe = fe = null, Ei = !1, al = 0, ia = null, t) throw Error(u(300));
            e === null || $e || (e = e.dependencies, e !== null && gi(e) && ($e = !0));
        }
        function id(e, t, n, a) {
            fe = e;
            var s = 0;
            do {
                if (la && (ia = null), al = 0, la = !1, 25 <= s) throw Error(u(301));
                if (s += 1, He = xe = null, e.updateQueue != null) {
                    var c = e.updateQueue;
                    c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
                }
                B.H = cm, c = t(n, a);
            }while (la);
            return c;
        }
        function am() {
            var e = B.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? ll(t) : t, e = e.useState()[0], (xe !== null ? xe.memoizedState : null) !== e && (fe.flags |= 1024), t;
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
            zn = 0, He = xe = fe = null, la = !1, al = Oi = 0, ia = null;
        }
        function Et() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return He === null ? fe.memoizedState = He = e : He = He.next = e, He;
        }
        function Qe() {
            if (xe === null) {
                var e = fe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = xe.next;
            var t = He === null ? fe.memoizedState : He.next;
            if (t !== null) He = t, xe = e;
            else {
                if (e === null) throw fe.alternate === null ? Error(u(467)) : Error(u(310));
                xe = e, e = {
                    memoizedState: xe.memoizedState,
                    baseState: xe.baseState,
                    baseQueue: xe.baseQueue,
                    queue: xe.queue,
                    next: null
                }, He === null ? fe.memoizedState = He = e : He = He.next = e;
            }
            return He;
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
            return al += 1, ia === null && (ia = []), e = $f(ia, e, t), t = fe, (He === null ? t.memoizedState : He.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? qd : Hd), e;
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
            }), n === null && (n = Ps(), fe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for(n = t.data[t.index] = Array(e), a = 0; a < e; a++)n[a] = ve;
            return t.index++, n;
        }
        function yn(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Di(e) {
            var t = Qe();
            return ks(t, xe, e);
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
                    if (q !== j.lane ? (be & q) === q : (zn & q) === q) {
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
            var t = Qe(), n = t.queue;
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
            var a = fe, s = Qe(), c = Te;
            if (c) {
                if (n === void 0) throw Error(u(407));
                n = n();
            } else n = t();
            var g = !Ct((xe || s).memoizedState, n);
            g && (s.memoizedState = n, $e = !0), s = s.queue;
            var v = cd.bind(null, a, s, e);
            if (il(2048, 8, v, [
                e
            ]), s.getSnapshot !== t || g || He !== null && He.memoizedState.tag & 1) {
                if (a.flags |= 2048, ua(9, Ci(), od.bind(null, a, s, n, t), null), Ne === null) throw Error(u(349));
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
            return e.baseState = n, ks(e, xe, typeof a == "function" ? a : yn);
        }
        function lm(e, t, n, a, s) {
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
            if (Te) {
                var n = Ne.formState;
                if (n !== null) {
                    e: {
                        var a = fe;
                        if (Te) {
                            if (Be) {
                                t: {
                                    for(var s = Be, c = en; s.nodeType !== 8;){
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
                                    Be = Jt(s.nextSibling), a = s.data === "F!";
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
            }, a.queue = s, n = lm.bind(null, fe, s, c, n), s.dispatch = n, a.memoizedState = e, [
                t,
                n,
                !1
            ];
        }
        function Sd(e) {
            var t = Qe();
            return Ed(t, xe, e);
        }
        function Ed(e, t, n) {
            if (t = ks(e, t, yd)[0], e = Di(yn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var a = ll(t);
            } catch (g) {
                throw g === $a ? yi : g;
            }
            else a = t;
            t = Qe();
            var s = t.queue, c = s.dispatch;
            return n !== t.memoizedState && (fe.flags |= 2048, ua(9, Ci(), im.bind(null, s, n), null)), [
                a,
                c,
                e
            ];
        }
        function im(e, t) {
            e.action = t;
        }
        function Od(e) {
            var t = Qe(), n = xe;
            if (n !== null) return Ed(t, n, e);
            Qe(), t = t.memoizedState, n = Qe();
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
            return Qe().memoizedState;
        }
        function xi(e, t, n, a) {
            var s = Et();
            a = a === void 0 ? null : a, fe.flags |= e, s.memoizedState = ua(1 | t, Ci(), n, a);
        }
        function il(e, t, n, a) {
            var s = Qe();
            a = a === void 0 ? null : a;
            var c = s.memoizedState.inst;
            xe !== null && a !== null && _s(a, xe.memoizedState.deps) ? s.memoizedState = ua(t, c, n, a) : (fe.flags |= e, s.memoizedState = ua(1 | t, c, n, a));
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
            var n = Qe();
            t = t === void 0 ? null : t;
            var a = n.memoizedState;
            return t !== null && _s(t, a[1]) ? a[0] : (n.memoizedState = [
                e,
                t
            ], e);
        }
        function Md(e, t) {
            var n = Qe();
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
                    var z = nm(C, a);
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
        function um() {}
        function Hs(e, t, n, a) {
            if (e.tag !== 5) throw Error(u(476));
            var s = Pd(e).queue;
            jd(e, s, t, W, n === null ? um : function() {
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
            return Qe().memoizedState;
        }
        function Vd() {
            return Qe().memoizedState;
        }
        function sm(e) {
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
        function om(e, t, n) {
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
                    if (s.hasEagerState = !0, s.eagerState = v, Ct(v, g)) return ci(e, t, s, 0), Ne === null && oi(), !1;
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
                }, a.queue = e, e = e.dispatch = om.bind(null, fe, e), [
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
                if (Te) {
                    if (n === void 0) throw Error(u(407));
                    n = n();
                } else {
                    if (n = t(), Ne === null) throw Error(u(349));
                    (be & 124) !== 0 || sd(a, t, n);
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
                var e = Et(), t = Ne.identifierPrefix;
                if (Te) {
                    var n = gn, a = pn;
                    n = (a & ~(1 << 32 - vt(a) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Oi++, 0 < n && (t += "H" + n.toString(32)), t += "»";
                } else n = rm++, t = "«" + t + "r" + n.toString(32) + "»";
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
                return Et().memoizedState = sm.bind(null, fe);
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
                var n = Qe();
                return Nd(n, xe.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Di(yn)[0], t = Qe().memoizedState;
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
                var n = Qe();
                return hd(n, xe, e, t);
            },
            useMemoCache: Ls,
            useCacheRefresh: Vd
        }, cm = {
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
                var n = Qe();
                return xe === null ? qs(n, e, t) : Nd(n, xe.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Vs(yn)[0], t = Qe().memoizedState;
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
                var n = Qe();
                return xe !== null ? hd(n, xe, e, t) : (n.baseState = e, [
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
            throw t.$$typeof === O ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
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
                return Z === D ? z(_, A, N.props.children, U, N.key) : A !== null && (A.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ce && Qd(Z) === A.type) ? (A = s(A, N.props), ol(A, N), A.return = _, A) : (A = di(N.type, N.key, N.props, null, _.mode, U), ol(A, N), A.return = _, A);
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
                        case T:
                            return A = ds(A, _.mode, N), A.return = _, A;
                        case ce:
                            var U = A._init;
                            return A = U(A._payload), q(_, A, N);
                    }
                    if (we(A) || he(A)) return A = pr(A, _.mode, N, null), A.return = _, A;
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
                        case T:
                            return N.key === Z ? j(_, A, N, U) : null;
                        case ce:
                            return Z = N._init, N = Z(N._payload), P(_, A, N, U);
                    }
                    if (we(N) || he(N)) return Z !== null ? null : z(_, A, N, U, null);
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
                        case T:
                            return _ = _.get(U.key === null ? N : U.key) || null, j(A, _, U, Z);
                        case ce:
                            var de = U._init;
                            return U = de(U._payload), L(_, A, N, U, Z);
                    }
                    if (we(U) || he(U)) return _ = _.get(N) || null, z(A, _, U, Z, null);
                    if (typeof U.then == "function") return L(_, A, N, _i(U), Z);
                    if (U.$$typeof === V) return L(_, A, N, mi(A, U), Z);
                    wi(A, U);
                }
                return null;
            }
            function re(_, A, N, U) {
                for(var Z = null, de = null, F = A, te = A = 0, tt = null; F !== null && te < N.length; te++){
                    F.index > te ? (tt = F, F = null) : tt = F.sibling;
                    var Se = P(_, F, N[te], U);
                    if (Se === null) {
                        F === null && (F = tt);
                        break;
                    }
                    e && F && Se.alternate === null && t(_, F), A = c(Se, A, te), de === null ? Z = Se : de.sibling = Se, de = Se, F = tt;
                }
                if (te === N.length) return n(_, F), Te && mr(_, te), Z;
                if (F === null) {
                    for(; te < N.length; te++)F = q(_, N[te], U), F !== null && (A = c(F, A, te), de === null ? Z = F : de.sibling = F, de = F);
                    return Te && mr(_, te), Z;
                }
                for(F = a(F); te < N.length; te++)tt = L(F, _, te, N[te], U), tt !== null && (e && tt.alternate !== null && F.delete(tt.key === null ? te : tt.key), A = c(tt, A, te), de === null ? Z = tt : de.sibling = tt, de = tt);
                return e && F.forEach(function(tr) {
                    return t(_, tr);
                }), Te && mr(_, te), Z;
            }
            function $(_, A, N, U) {
                if (N == null) throw Error(u(151));
                for(var Z = null, de = null, F = A, te = A = 0, tt = null, Se = N.next(); F !== null && !Se.done; te++, Se = N.next()){
                    F.index > te ? (tt = F, F = null) : tt = F.sibling;
                    var tr = P(_, F, Se.value, U);
                    if (tr === null) {
                        F === null && (F = tt);
                        break;
                    }
                    e && F && tr.alternate === null && t(_, F), A = c(tr, A, te), de === null ? Z = tr : de.sibling = tr, de = tr, F = tt;
                }
                if (Se.done) return n(_, F), Te && mr(_, te), Z;
                if (F === null) {
                    for(; !Se.done; te++, Se = N.next())Se = q(_, Se.value, U), Se !== null && (A = c(Se, A, te), de === null ? Z = Se : de.sibling = Se, de = Se);
                    return Te && mr(_, te), Z;
                }
                for(F = a(F); !Se.done; te++, Se = N.next())Se = L(F, _, te, Se.value, U), Se !== null && (e && Se.alternate !== null && F.delete(Se.key === null ? te : Se.key), A = c(Se, A, te), de === null ? Z = Se : de.sibling = Se, de = Se);
                return e && F.forEach(function(fv) {
                    return t(_, fv);
                }), Te && mr(_, te), Z;
            }
            function Ae(_, A, N, U) {
                if (typeof N == "object" && N !== null && N.type === D && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
                    switch(N.$$typeof){
                        case S:
                            e: {
                                for(var Z = N.key; A !== null;){
                                    if (A.key === Z) {
                                        if (Z = N.type, Z === D) {
                                            if (A.tag === 7) {
                                                n(_, A.sibling), U = s(A, N.props.children), U.return = _, _ = U;
                                                break e;
                                            }
                                        } else if (A.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ce && Qd(Z) === A.type) {
                                            n(_, A.sibling), U = s(A, N.props), ol(U, N), U.return = _, _ = U;
                                            break e;
                                        }
                                        n(_, A);
                                        break;
                                    } else t(_, A);
                                    A = A.sibling;
                                }
                                N.type === D ? (U = pr(N.props.children, _.mode, U, N.key), U.return = _, _ = U) : (U = di(N.type, N.key, N.props, null, _.mode, U), ol(U, N), U.return = _, _ = U);
                            }
                            return g(_);
                        case T:
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
                        case ce:
                            return Z = N._init, N = Z(N._payload), Ae(_, A, N, U);
                    }
                    if (we(N)) return re(_, A, N, U);
                    if (he(N)) {
                        if (Z = he(N), typeof Z != "function") throw Error(u(150));
                        return N = Z.call(N), $(_, A, N, U);
                    }
                    if (typeof N.then == "function") return Ae(_, A, _i(N), U);
                    if (N.$$typeof === V) return Ae(_, A, mi(_, N), U);
                    wi(_, N);
                }
                return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, A !== null && A.tag === 6 ? (n(_, A.sibling), U = s(A, N), U.return = _, _ = U) : (n(_, A), U = fs(N, _.mode, U), U.return = _, _ = U), g(_)) : n(_, A);
            }
            return function(_, A, N, U) {
                try {
                    sl = 0;
                    var Z = Ae(_, A, N, U);
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
            Y(Ie, Ie.current & 1), Y(qt, e), tn === null && (t === null || aa.current !== null || t.memoizedState !== null) && (tn = e);
        }
        function Yd(e) {
            if (e.tag === 22) {
                if (Y(Ie, Ie.current), Y(qt, e), tn === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (tn = e);
                }
            } else qn();
        }
        function qn() {
            Y(Ie, Ie.current), Y(qt, qt.current);
        }
        function bn(e) {
            I(qt), tn === e && (tn = null), I(Ie);
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
        function fm(e, t, n, a, s) {
            if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (t = n.alternate, t !== null && Ja(t, n, s, !0), n = qt.current, n !== null) {
                    switch(n.tag){
                        case 13:
                            return tn === null ? yo() : n.alternate === null && ze === 0 && (ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === Os ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([
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
            if (Te) return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, a !== gs && (e = Error(u(422), {
                cause: a
            }), Za(Vt(e, n)))) : (a !== gs && (t = Error(u(423), {
                cause: a
            }), Za(Vt(t, n))), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, a = Vt(a, n), s = Is(e.stateNode, a, s), Cs(e, s), ze !== 4 && (ze = 2)), !1;
            var c = Error(u(520), {
                cause: a
            });
            if (c = Vt(c, n), ml === null ? ml = [
                c
            ] : ml.push(c), ze !== 4 && (ze = 2), t === null) return !0;
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
            return Sr(t), a = ws(e, t, n, g, c, s), v = Ms(), e !== null && !$e ? (Ns(e, t, s), Sn(e, t, s)) : (Te && v && hs(t), t.flags |= 1, at(e, t, a, s), t.child);
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
            return Sr(t), n = ws(e, t, n, a, void 0, s), a = Ms(), e !== null && !$e ? (Ns(e, t, s), Sn(e, t, s)) : (Te && a && hs(t), t.flags |= 1, at(e, t, n, s), t.child);
        }
        function uh(e, t, n, a, s, c) {
            return Sr(t), t.updateQueue = null, n = id(t, a, n, s), ld(e), a = Ms(), e !== null && !$e ? (Ns(e, t, c), Sn(e, t, c)) : (Te && a && hs(t), t.flags |= 1, at(e, t, n, c), t.child);
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
                if (Te) {
                    if (s ? Un(t) : qn(), Te) {
                        var v = Be, C;
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
                            }, C = xt(18, null, null, 0), C.stateNode = v, C.return = t, t.child = C, yt = t, Be = null, C = !0) : C = !1;
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
                    if (g = Ne, g !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : La(a), a = (a & (g.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== C.retryLane)) throw C.retryLane = a, Wr(e, a), Mt(g, e, a), th;
                    v.data === "$?" || yo(), t = $s(e, t, n);
                } else v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, Be = Jt(v.nextSibling), yt = t, Te = !0, vr = null, en = !1, e !== null && (zt[Ut++] = pn, zt[Ut++] = gn, zt[Ut++] = gr, pn = e.id, gn = e.overflow, gr = t), t = Ws(t, a.children), t.flags |= 4096);
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
            switch(Y(Ie, a), s){
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
        function dm(e, t, n) {
            switch(t.tag){
                case 3:
                    ye(t, t.stateNode.containerInfo), Ln(t, Ye, e.memoizedState.cache), Xa();
                    break;
                case 27:
                case 5:
                    sn(t);
                    break;
                case 4:
                    ye(t, t.stateNode.containerInfo);
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
                    if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Y(Ie, Ie.current), a) break;
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
                if (!to(e, n) && (t.flags & 128) === 0) return $e = !1, dm(e, t, n);
                $e = (e.flags & 131072) !== 0;
            }
            else $e = !1, Te && (t.flags & 1048576) !== 0 && Qf(t, pi, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var a = t.elementType, s = a._init;
                        if (a = s(a._payload), t.type = a, typeof a == "function") cs(a) ? (e = Tr(a, e), t.tag = 1, t = sh(null, t, a, e, n)) : (t.tag = 0, t = Xs(null, t, a, e, n));
                        else {
                            if (a != null) {
                                if (s = a.$$typeof, s === G) {
                                    t.tag = 11, t = nh(null, t, a, e, n);
                                    break e;
                                } else if (s === ie) {
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
                        if (ye(t, t.stateNode.containerInfo), e === null) throw Error(u(387));
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
                            for(Be = Jt(e.firstChild), yt = t, Te = !0, vr = null, en = !0, n = Kd(t, null, a, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
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
                    return Pi(e, t), e === null ? (n = vp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Te || (n = t.type, e = t.pendingProps, a = Zi(ee.current).createElement(n), a[Fe] = t, a[ft] = e, it(a, n, e), We(a), t.stateNode = a) : t.memoizedState = vp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return sn(t), e === null && Te && (a = t.stateNode = pp(t.type, t.pendingProps, ee.current), yt = t, en = !0, s = Be, Jn(t.type) ? (ko = s, Be = Jt(a.firstChild)) : Be = s), at(e, t, t.pendingProps.children, n), Pi(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && Te && ((s = a = Be) && (a = Um(a, t.type, t.pendingProps, en), a !== null ? (t.stateNode = a, yt = t, Be = Jt(a.firstChild), en = !1, s = !0) : s = !1), s || yr(t)), sn(t), s = t.type, c = t.pendingProps, g = e !== null ? e.memoizedProps : null, a = c.children, No(s, c) ? a = null : g !== null && No(s, g) && (t.flags |= 32), t.memoizedState !== null && (s = ws(e, t, am, null, null, n), Cl._currentValue = s), Pi(e, t), at(e, t, a, n), t.child;
                case 6:
                    return e === null && Te && ((e = n = Be) && (n = qm(n, t.pendingProps, en), n !== null ? (t.stateNode = n, yt = t, Be = null, e = !0) : e = !1), e || yr(t)), null;
                case 13:
                    return ch(e, t, n);
                case 4:
                    return ye(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = oa(t, null, a, n) : at(e, t, a, n), t.child;
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
                    return Sr(t), a = dt(Ye), e === null ? (s = Es(), s === null && (s = Ne, c = bs(), s.pooledCache = c, c.refCount++, c !== null && (s.pooledCacheLanes |= n), s = c), t.memoizedState = {
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
                if (t = qt.current, t !== null && ((be & 4194048) === be ? tn !== null : (be & 62914560) !== be && (be & 536870912) === 0 || t !== tn)) throw el = Os, Ff;
                e.flags |= 8192;
            }
        }
        function ki(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? kr() : 536870912, e.lanes |= t, ha |= t);
        }
        function cl(e, t) {
            if (!Te) switch(e.tailMode){
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
        function Le(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
            if (t) for(var s = e.child; s !== null;)n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 65011712, a |= s.flags & 65011712, s.return = e, s = s.sibling;
            else for(s = e.child; s !== null;)n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = e, s = s.sibling;
            return e.subtreeFlags |= a, e.childLanes = n, t;
        }
        function hm(e, t, n) {
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
                    return Le(t), null;
                case 1:
                    return Le(t), null;
                case 3:
                    return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), vn(Ye), mt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ia(t) ? En(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yf())), Le(t), null;
                case 26:
                    return n = t.memoizedState, e === null ? (En(t), n !== null ? (Le(t), ph(t, n)) : (Le(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (En(t), Le(t), ph(t, n)) : (Le(t), t.flags &= -16777217) : (e.memoizedProps !== a && En(t), Le(t), t.flags &= -16777217), null;
                case 27:
                    Ge(t), n = ee.current;
                    var s = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== a && En(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(u(166));
                            return Le(t), null;
                        }
                        e = J.current, Ia(t) ? Gf(t) : (e = pp(s, a, n), t.stateNode = e, En(t));
                    }
                    return Le(t), null;
                case 5:
                    if (Ge(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && En(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(u(166));
                            return Le(t), null;
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
                    return Le(t), t.flags &= -16777217, null;
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
                    return Le(t), null;
                case 13:
                    if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (s = Ia(t), a !== null && a.dehydrated !== null) {
                            if (e === null) {
                                if (!s) throw Error(u(318));
                                if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
                                s[Fe] = t;
                            } else Xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Le(t), s = !1;
                        } else s = Yf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
                        if (!s) return t.flags & 256 ? (bn(t), t) : (bn(t), null);
                    }
                    if (bn(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                    if (n = a !== null, e = e !== null && e.memoizedState !== null, n) {
                        a = t.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool);
                        var c = null;
                        a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== s && (a.flags |= 2048);
                    }
                    return n !== e && n && (t.child.flags |= 8192), ki(t, t.updateQueue), Le(t), null;
                case 4:
                    return mt(), e === null && Ro(t.stateNode.containerInfo), Le(t), null;
                case 10:
                    return vn(t.type), Le(t), null;
                case 19:
                    if (I(Ie), s = t.memoizedState, s === null) return Le(t), null;
                    if (a = (t.flags & 128) !== 0, c = s.rendering, c === null) if (a) cl(s, !1);
                    else {
                        if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (c = Mi(e), c !== null) {
                                for(t.flags |= 128, cl(s, !1), e = c.updateQueue, t.updateQueue = e, ki(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;)Hf(n, e), n = n.sibling;
                                return Y(Ie, Ie.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        s.tail !== null && jt() > zi && (t.flags |= 128, a = !0, cl(s, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!a) if (e = Mi(c), e !== null) {
                            if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ki(t, e), cl(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !Te) return Le(t), null;
                        } else 2 * jt() - s.renderingStartTime > zi && n !== 536870912 && (t.flags |= 128, a = !0, cl(s, !1), t.lanes = 4194304);
                        s.isBackwards ? (c.sibling = t.child, t.child = c) : (e = s.last, e !== null ? e.sibling = c : t.child = c, s.last = c);
                    }
                    return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = jt(), t.sibling = null, e = Ie.current, Y(Ie, a ? e & 1 | 2 : e & 1), t) : (Le(t), null);
                case 22:
                case 23:
                    return bn(t), As(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), n = t.updateQueue, n !== null && ki(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && I(Er), null;
                case 24:
                    return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), vn(Ye), Le(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(u(156, t.tag));
        }
        function pm(e, t) {
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
                    return I(Ie), null;
                case 4:
                    return mt(), null;
                case 10:
                    return vn(t.type), null;
                case 22:
                case 23:
                    return bn(t), As(), e !== null && I(Er), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
                    I(Ie);
                    break;
                case 10:
                    vn(t.type);
                    break;
                case 22:
                case 23:
                    bn(t), As(), e !== null && I(Er);
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
                _e(t, t.return, v);
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
                                    _e(s, C, z);
                                }
                            }
                        }
                        a = a.next;
                    }while (a !== c);
                }
            } catch (z) {
                _e(t, t.return, z);
            }
        }
        function mh(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var n = e.stateNode;
                try {
                    rd(t, n);
                } catch (a) {
                    _e(e, e.return, a);
                }
            }
        }
        function vh(e, t, n) {
            n.props = Tr(e.type, e.memoizedProps), n.state = e.memoizedState;
            try {
                n.componentWillUnmount();
            } catch (a) {
                _e(e, t, a);
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
                _e(e, t, s);
            }
        }
        function nn(e, t) {
            var n = e.ref, a = e.refCleanup;
            if (n !== null) if (typeof a == "function") try {
                a();
            } catch (s) {
                _e(e, t, s);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof n == "function") try {
                n(null);
            } catch (s) {
                _e(e, t, s);
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
                _e(e, e.return, s);
            }
        }
        function no(e, t, n) {
            try {
                var a = e.stateNode;
                Lm(a, e.type, n, t), a[ft] = t;
            } catch (s) {
                _e(e, e.return, s);
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
                _e(e, e.return, c);
            }
        }
        var On = !1, qe = !1, lo = !1, Eh = typeof WeakSet == "function" ? WeakSet : Set, et = null;
        function gm(e, t) {
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
                                _e(n, n.return, $);
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
                        _e(n, n.return, g);
                    }
                    else {
                        var s = Tr(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (g) {
                            _e(n, n.return, g);
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
                            _e(n, n.return, g);
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
                    Qn(e, n), a & 4 && Ch(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Dm.bind(null, n), Hm(e, n))));
                    break;
                case 22:
                    if (a = n.memoizedState !== null || On, !a) {
                        t = t !== null && t.memoizedState !== null || qe, s = On;
                        var c = qe;
                        On = a, (qe = t) && !c ? Gn(e, n, (n.subtreeFlags & 8772) !== 0) : Qn(e, n), On = s, qe = c;
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
        var je = null, Ot = !1;
        function Tn(e, t, n) {
            for(n = n.child; n !== null;)Dh(e, t, n), n = n.sibling;
        }
        function Dh(e, t, n) {
            if (Je && typeof Je.onCommitFiberUnmount == "function") try {
                Je.onCommitFiberUnmount(on, n);
            } catch  {}
            switch(n.tag){
                case 26:
                    qe || nn(n, t), Tn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                    break;
                case 27:
                    qe || nn(n, t);
                    var a = je, s = Ot;
                    Jn(n.type) && (je = n.stateNode, Ot = !1), Tn(e, t, n), El(n.stateNode), je = a, Ot = s;
                    break;
                case 5:
                    qe || nn(n, t);
                case 6:
                    if (a = je, s = Ot, je = null, Tn(e, t, n), je = a, Ot = s, je !== null) if (Ot) try {
                        (je.nodeType === 9 ? je.body : je.nodeName === "HTML" ? je.ownerDocument.body : je).removeChild(n.stateNode);
                    } catch (c) {
                        _e(n, t, c);
                    }
                    else try {
                        je.removeChild(n.stateNode);
                    } catch (c) {
                        _e(n, t, c);
                    }
                    break;
                case 18:
                    je !== null && (Ot ? (e = je, dp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), _l(e)) : dp(je, n.stateNode));
                    break;
                case 4:
                    a = je, s = Ot, je = n.stateNode.containerInfo, Ot = !0, Tn(e, t, n), je = a, Ot = s;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    qe || Hn(2, n, t), qe || Hn(4, n, t), Tn(e, t, n);
                    break;
                case 1:
                    qe || (nn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && vh(n, t, a)), Tn(e, t, n);
                    break;
                case 21:
                    Tn(e, t, n);
                    break;
                case 22:
                    qe = (a = qe) || n.memoizedState !== null, Tn(e, t, n), qe = a;
                    break;
                default:
                    Tn(e, t, n);
            }
        }
        function Ch(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                _l(e);
            } catch (n) {
                _e(t, t.return, n);
            }
        }
        function mm(e) {
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
            var n = mm(e);
            t.forEach(function(a) {
                var s = Cm.bind(null, e, a);
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
                                je = v.stateNode, Ot = !1;
                                break e;
                            }
                            break;
                        case 5:
                            je = v.stateNode, Ot = !1;
                            break e;
                        case 3:
                        case 4:
                            je = v.stateNode.containerInfo, Ot = !0;
                            break e;
                    }
                    v = v.return;
                }
                if (je === null) throw Error(u(160));
                Dh(c, g, s), je = null, Ot = !1, c = s.alternate, c !== null && (c.return = null), s.return = null;
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
                    Rt(t, e), At(e), a & 512 && (qe || n === null || nn(n, n.return)), a & 64 && On && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
                    break;
                case 26:
                    var s = Zt;
                    if (Rt(t, e), At(e), a & 512 && (qe || n === null || nn(n, n.return)), a & 4) {
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
                    Rt(t, e), At(e), a & 512 && (qe || n === null || nn(n, n.return)), n !== null && a & 4 && no(e, e.memoizedProps, n.memoizedProps);
                    break;
                case 5:
                    if (Rt(t, e), At(e), a & 512 && (qe || n === null || nn(n, n.return)), e.flags & 32) {
                        s = e.stateNode;
                        try {
                            Kr(s, "");
                        } catch (L) {
                            _e(e, e.return, L);
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
                            _e(e, e.return, L);
                        }
                    }
                    break;
                case 3:
                    if (Wi = null, s = Zt, Zt = Ji(t.containerInfo), Rt(t, e), Zt = s, At(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
                        _l(t.containerInfo);
                    } catch (L) {
                        _e(e, e.return, L);
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
                    var C = n !== null && n.memoizedState !== null, j = On, z = qe;
                    if (On = j || s, qe = z || C, Rt(t, e), qe = z, On = j, At(e), a & 8192) e: for(t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (n === null || C || On || qe || Dr(e)), n = null, t = e;;){
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
                                    _e(C, C.return, L);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (n === null) {
                                C = t;
                                try {
                                    C.stateNode.nodeValue = s ? "" : C.memoizedProps;
                                } catch (L) {
                                    _e(C, C.return, L);
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
                    _e(e, e.return, z);
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
                            _e(a, a.return, j);
                        }
                        if (a = c, s = a.updateQueue, s !== null) {
                            var v = a.stateNode;
                            try {
                                var C = s.shared.hiddenCallbacks;
                                if (C !== null) for(s.shared.hiddenCallbacks = null, s = 0; s < C.length; s++)nd(C[s], v);
                            } catch (j) {
                                _e(a, a.return, j);
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
                            _e(t, t.return, C);
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
                    fa(e), e.flags & pl && e.memoizedState !== null && tv(Zt, e.memoizedState, e.memoizedProps);
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
        var vm = {
            getCacheForType: function(e) {
                var t = dt(Ye), n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n;
            }
        }, ym = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Ne = null, pe = null, be = 0, Ce = 0, _t = null, Kn = !1, da = !1, oo = !1, Dn = 0, ze = 0, Yn = 0, Cr = 0, co = 0, Ht = 0, ha = 0, ml = null, Tt = null, fo = !1, ho = 0, zi = 1 / 0, Ui = null, In = null, lt = 0, Xn = null, pa = null, ga = 0, po = 0, go = null, jh = null, vl = 0, mo = null;
        function wt() {
            if ((De & 2) !== 0 && be !== 0) return be & -be;
            if (B.T !== null) {
                var e = na;
                return e !== 0 ? e : To();
            }
            return Br();
        }
        function Ph() {
            Ht === 0 && (Ht = (be & 536870912) === 0 || Te ? Jl() : 536870912);
            var e = qt.current;
            return e !== null && (e.flags |= 32), Ht;
        }
        function Mt(e, t, n) {
            (e === Ne && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) && (ma(e, 0), Zn(e, be, Ht, !1)), or(e, n), ((De & 2) === 0 || e !== Ne) && (e === Ne && ((De & 2) === 0 && (Cr |= n), ze === 4 && Zn(e, be, Ht, !1)), an(e));
        }
        function Lh(e, t, n) {
            if ((De & 6) !== 0) throw Error(u(327));
            var a = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || sr(e, t), s = a ? Em(e, t) : bo(e, t, !0), c = a;
            do {
                if (s === 0) {
                    da && !a && Zn(e, t, 0, !1);
                    break;
                } else {
                    if (n = e.current.alternate, c && !bm(n)) {
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
                unsuspend: ev
            }, _h(t), q = nv(), q !== null)) {
                e.cancelPendingCommit = q(Qh.bind(null, e, t, c, n, a, s, g, v, C, z, 1, P, L)), Zn(e, c, g, !j);
                return;
            }
            Qh(e, t, c, n, a, s, g, v, C);
        }
        function bm(e) {
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
            return (De & 6) === 0 ? (yl(0), !1) : !0;
        }
        function vo() {
            if (pe !== null) {
                if (Ce === 0) var e = pe.return;
                else e = pe, mn = br = null, js(e), sa = null, sl = 0, e = pe;
                for(; e !== null;)gh(e.alternate, e), e = e.return;
                pe = null;
            }
        }
        function ma(e, t) {
            var n = e.timeoutHandle;
            n !== -1 && (e.timeoutHandle = -1, Vm(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), vo(), Ne = e, pe = n = hn(e.current, null), be = t, Ce = 0, _t = null, Kn = !1, da = sr(e, t), oo = !1, ha = Ht = co = Cr = Yn = ze = 0, Tt = ml = null, fo = !1, (t & 8) !== 0 && (t |= t & 32);
            var a = e.entangledLanes;
            if (a !== 0) for(e = e.entanglements, a &= t; 0 < a;){
                var s = 31 - vt(a), c = 1 << s;
                t |= e[s], a &= ~c;
            }
            return Dn = t, oi(), n;
        }
        function Vh(e, t) {
            fe = null, B.H = Ai, t === $a || t === yi ? (t = ed(), Ce = 3) : t === Ff ? (t = ed(), Ce = 4) : Ce = t === th ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, _t = t, pe === null && (ze = 1, ji(e, Vt(t, e.current)));
        }
        function Bh() {
            var e = B.H;
            return B.H = Ai, e === null ? Ai : e;
        }
        function zh() {
            var e = B.A;
            return B.A = vm, e;
        }
        function yo() {
            ze = 4, Kn || (be & 4194048) !== be && qt.current !== null || (da = !0), (Yn & 134217727) === 0 && (Cr & 134217727) === 0 || Ne === null || Zn(Ne, be, Ht, !1);
        }
        function bo(e, t, n) {
            var a = De;
            De |= 2;
            var s = Bh(), c = zh();
            (Ne !== e || be !== t) && (Ui = null, ma(e, t)), t = !1;
            var g = ze;
            e: do try {
                if (Ce !== 0 && pe !== null) {
                    var v = pe, C = _t;
                    switch(Ce){
                        case 8:
                            vo(), g = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            qt.current === null && (t = !0);
                            var j = Ce;
                            if (Ce = 0, _t = null, va(e, v, C, j), n && da) {
                                g = 0;
                                break e;
                            }
                            break;
                        default:
                            j = Ce, Ce = 0, _t = null, va(e, v, C, j);
                    }
                }
                Sm(), g = ze;
                break;
            } catch (z) {
                Vh(e, z);
            }
            while (!0);
            return t && e.shellSuspendCounter++, mn = br = null, De = a, B.H = s, B.A = c, pe === null && (Ne = null, be = 0, oi()), g;
        }
        function Sm() {
            for(; pe !== null;)Uh(pe);
        }
        function Em(e, t) {
            var n = De;
            De |= 2;
            var a = Bh(), s = zh();
            Ne !== e || be !== t ? (Ui = null, zi = jt() + 500, ma(e, t)) : da = sr(e, t);
            e: do try {
                if (Ce !== 0 && pe !== null) {
                    t = pe;
                    var c = _t;
                    t: switch(Ce){
                        case 1:
                            Ce = 0, _t = null, va(e, t, c, 1);
                            break;
                        case 2:
                        case 9:
                            if (Wf(c)) {
                                Ce = 0, _t = null, qh(t);
                                break;
                            }
                            t = function() {
                                Ce !== 2 && Ce !== 9 || Ne !== e || (Ce = 7), an(e);
                            }, c.then(t, t);
                            break e;
                        case 3:
                            Ce = 7;
                            break e;
                        case 4:
                            Ce = 5;
                            break e;
                        case 7:
                            Wf(c) ? (Ce = 0, _t = null, qh(t)) : (Ce = 0, _t = null, va(e, t, c, 7));
                            break;
                        case 5:
                            var g = null;
                            switch(pe.tag){
                                case 26:
                                    g = pe.memoizedState;
                                case 5:
                                case 27:
                                    var v = pe;
                                    if (!g || Op(g)) {
                                        Ce = 0, _t = null;
                                        var C = v.sibling;
                                        if (C !== null) pe = C;
                                        else {
                                            var j = v.return;
                                            j !== null ? (pe = j, Hi(j)) : pe = null;
                                        }
                                        break t;
                                    }
                            }
                            Ce = 0, _t = null, va(e, t, c, 5);
                            break;
                        case 6:
                            Ce = 0, _t = null, va(e, t, c, 6);
                            break;
                        case 8:
                            vo(), ze = 6;
                            break e;
                        default:
                            throw Error(u(462));
                    }
                }
                Om();
                break;
            } catch (z) {
                Vh(e, z);
            }
            while (!0);
            return mn = br = null, B.H = a, B.A = s, De = n, pe !== null ? 0 : (Ne = null, be = 0, oi(), ze);
        }
        function Om() {
            for(; pe !== null && !Ra();)Uh(pe);
        }
        function Uh(e) {
            var t = hh(e.alternate, e, Dn);
            e.memoizedProps = e.pendingProps, t === null ? Hi(e) : pe = t;
        }
        function qh(e) {
            var t = e, n = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = uh(n, t, t.pendingProps, t.type, void 0, be);
                    break;
                case 11:
                    t = uh(n, t, t.pendingProps, t.type.render, t.ref, be);
                    break;
                case 5:
                    js(t);
                default:
                    gh(n, t), t = pe = Hf(t, Dn), t = hh(n, t, Dn);
            }
            e.memoizedProps = e.pendingProps, t === null ? Hi(e) : pe = t;
        }
        function va(e, t, n, a) {
            mn = br = null, js(t), sa = null, sl = 0;
            var s = t.return;
            try {
                if (fm(e, s, t, n, be)) {
                    ze = 1, ji(e, Vt(n, e.current)), pe = null;
                    return;
                }
            } catch (c) {
                if (s !== null) throw pe = s, c;
                ze = 1, ji(e, Vt(n, e.current)), pe = null;
                return;
            }
            t.flags & 32768 ? (Te || a === 1 ? e = !0 : da || (be & 536870912) !== 0 ? e = !1 : (Kn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = qt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Hh(t, e)) : Hi(t);
        }
        function Hi(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Hh(t, Kn);
                    return;
                }
                e = t.return;
                var n = hm(t.alternate, t, Dn);
                if (n !== null) {
                    pe = n;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    pe = t;
                    return;
                }
                pe = t = e;
            }while (t !== null);
            ze === 0 && (ze = 5);
        }
        function Hh(e, t) {
            do {
                var n = pm(e.alternate, e);
                if (n !== null) {
                    n.flags &= 32767, pe = n;
                    return;
                }
                if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                    pe = e;
                    return;
                }
                pe = e = n;
            }while (e !== null);
            ze = 6, pe = null;
        }
        function Qh(e, t, n, a, s, c, g, v, C) {
            e.cancelPendingCommit = null;
            do Qi();
            while (lt !== 0);
            if ((De & 6) !== 0) throw Error(u(327));
            if (t !== null) {
                if (t === e.current) throw Error(u(177));
                if (c = t.lanes | t.childLanes, c |= ss, Vu(e, n, c, g, v, C), e === Ne && (pe = Ne = null, be = 0), pa = t, Xn = e, ga = n, po = c, go = s, jh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, xm(Nr, function() {
                    return Xh(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                    a = B.T, B.T = null, s = K.p, K.p = 2, g = De, De |= 4;
                    try {
                        gm(e, t, n);
                    } finally{
                        De = g, K.p = s, B.T = a;
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
                    var s = De;
                    De |= 4;
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
                                        var L = P.getSelection(), re = v.textContent.length, $ = Math.min(C.start, re), Ae = C.end === void 0 ? $ : Math.min(C.end, re);
                                        !L.extend && $ > Ae && (g = Ae, Ae = $, $ = g);
                                        var _ = wf(v, $), A = wf(v, Ae);
                                        if (_ && A && (L.rangeCount !== 1 || L.anchorNode !== _.node || L.anchorOffset !== _.offset || L.focusNode !== A.node || L.focusOffset !== A.offset)) {
                                            var N = q.createRange();
                                            N.setStart(_.node, _.offset), L.removeAllRanges(), $ > Ae ? (L.addRange(N), L.extend(A.node, A.offset)) : (N.setEnd(A.node, A.offset), L.addRange(N));
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
                        De = s, K.p = a, B.T = n;
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
                    var s = De;
                    De |= 4;
                    try {
                        Oh(e, t.alternate, t);
                    } finally{
                        De = s, K.p = a, B.T = n;
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
                if (lt = 0, pa = Xn = null, ga = 0, (De & 6) !== 0) throw Error(u(331));
                var v = De;
                if (De |= 4, Mh(c.current), Ah(c, c.current, g, n), De = v, yl(0, !1), Je && typeof Je.onPostCommitFiberRoot == "function") try {
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
        function _e(e, t, n) {
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
                a = e.pingCache = new ym;
                var s = new Set;
                a.set(t, s);
            } else s = a.get(t), s === void 0 && (s = new Set, a.set(t, s));
            s.has(n) || (oo = !0, s.add(n), e = Tm.bind(null, e, t, n), t.then(e, e));
        }
        function Tm(e, t, n) {
            var a = e.pingCache;
            a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ne === e && (be & n) === n && (ze === 4 || ze === 3 && (be & 62914560) === be && 300 > jt() - ho ? (De & 2) === 0 && ma(e, 0) : co |= n, ha === be && (ha = 0)), an(e);
        }
        function Jh(e, t) {
            t === 0 && (t = kr()), e = Wr(e, t), e !== null && (or(e, t), an(e));
        }
        function Dm(e) {
            var t = e.memoizedState, n = 0;
            t !== null && (n = t.retryLane), Jh(e, n);
        }
        function Cm(e, t) {
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
        function xm(e, t) {
            return Mn(e, t);
        }
        var Gi = null, ya = null, Eo = !1, Ki = !1, Oo = !1, xr = 0;
        function an(e) {
            e !== ya && e.next === null && (ya === null ? Gi = ya = e : ya = ya.next = e), Ki = !0, Eo || (Eo = !0, Am());
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
                    } else c = be, c = Lr(a, a === Ne ? c : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (c & 3) === 0 || sr(a, c) || (n = !0, ep(a, c));
                    a = a.next;
                }
                while (n);
                Oo = !1;
            }
        }
        function Rm() {
            Fh();
        }
        function Fh() {
            Ki = Eo = !1;
            var e = 0;
            xr !== 0 && (km() && (e = xr), xr = 0);
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
            if (t = Ne, n = be, n = Lr(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && xa(a), e.callbackNode = null, e.callbackPriority = 0;
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
            var a = be;
            return a = Lr(e, e === Ne ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Lh(e, a, t), Wh(e, jt()), e.callbackNode != null && e.callbackNode === n ? $h.bind(null, e) : null);
        }
        function ep(e, t) {
            if (Qi()) return null;
            Lh(e, t, !0);
        }
        function Am() {
            Bm(function() {
                (De & 6) !== 0 ? Mn(Zl, Rm) : Fh();
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
        function _m(e, t, n, a, s) {
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
            var Co = us[Do], wm = Co.toLowerCase(), Mm = Co[0].toUpperCase() + Co.slice(1);
            Xt(wm, "on" + Mm);
        }
        Xt(Lf, "onAnimationEnd"), Xt(kf, "onAnimationIteration"), Xt(Vf, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(X1, "onTransitionRun"), Xt(Z1, "onTransitionStart"), Xt(J1, "onTransitionCancel"), Xt(Bf, "onTransitionEnd"), Hr("onMouseEnter", [
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
        var bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));
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
        function ge(e, t) {
            var n = t[Me];
            n === void 0 && (n = t[Me] = new Set);
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
                    n !== "selectionchange" && (Nm.has(n) || xo(n, !1, e), xo(n, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Yi] || (t[Yi] = !0, xo("selectionchange", !1, t));
            }
        }
        function ap(e, t, n, a) {
            switch(Ap(t)){
                case 2:
                    var s = lv;
                    break;
                case 8:
                    s = iv;
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
                                L = x1;
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
                                L = p1;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                L = _1;
                                break;
                            case Lf:
                            case kf:
                            case Vf:
                                L = v1;
                                break;
                            case Bf:
                                L = M1;
                                break;
                            case "scroll":
                            case "scrollend":
                                L = d1;
                                break;
                            case "wheel":
                                L = j1;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                L = b1;
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
                                L = L1;
                        }
                        var $ = (t & 4) !== 0, Ae = !$ && (e === "scroll" || e === "scrollend"), _ = $ ? P !== null ? P + "Capture" : null : P;
                        $ = [];
                        for(var A = j, N; A !== null;){
                            var U = A;
                            if (N = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || N === null || _ === null || (U = Ba(A, _), U != null && $.push(Sl(A, U, N))), Ae) break;
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
                        if (P = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", P && n !== Ku && (re = n.relatedTarget || n.fromElement) && (zr(re) || re[Oe])) break e;
                        if ((L || P) && (P = z.window === z ? z : (P = z.ownerDocument) ? P.defaultView || P.parentWindow : window, L ? (re = n.relatedTarget || n.toElement, L = j, re = re ? zr(re) : null, re !== null && (Ae = f(re), $ = re.tag, re !== Ae || $ !== 5 && $ !== 27 && $ !== 6) && (re = null)) : (L = null, re = j), L !== re)) {
                            if ($ = pf, U = "onMouseLeave", _ = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && ($ = mf, U = "onPointerLeave", _ = "onPointerEnter", A = "pointer"), Ae = L == null ? P : Va(L), N = re == null ? P : Va(re), P = new $(U, A + "leave", L, n, z), P.target = Ae, P.relatedTarget = N, U = null, zr(z) === j && ($ = new $(_, A + "enter", re, n, z), $.target = N, $.relatedTarget = Ae, U = $), Ae = U, L && re) t: {
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
                            L !== null && lp(q, P, L, $, !1), re !== null && Ae !== null && lp(q, Ae, re, $, !0);
                        }
                    }
                    e: {
                        if (P = j ? Va(j) : window, L = P.nodeName && P.nodeName.toLowerCase(), L === "select" || L === "input" && P.type === "file") var Z = Df;
                        else if (Of(P)) if (Cf) Z = K1;
                        else {
                            Z = Q1;
                            var de = H1;
                        }
                        else L = P.nodeName, !L || L.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? j && Gu(j.elementType) && (Z = Df) : Z = G1;
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
                            if (I1) break;
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
                    }), F ? te.data = F : (F = Ef(n), F !== null && (te.data = F)))), (F = V1 ? B1(e, n) : z1(e, n)) && (te = Ii(j, "onBeforeInput"), 0 < te.length && (de = new gf("onBeforeInput", "beforeinput", null, n, z), q.push({
                        event: de,
                        listeners: te
                    }), de.data = F)), _m(q, e, j, n, z);
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
        var jm = /\r\n?/g, Pm = /\u0000|\uFFFD/g;
        function ip(e) {
            return (typeof e == "string" ? e : "" + e).replace(jm, `
`).replace(Pm, "");
        }
        function up(e, t) {
            return t = ip(t), ip(e) === t;
        }
        function Xi() {}
        function Re(e, t, n, a, s, c) {
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
                    } else typeof c == "function" && (n === "formAction" ? (t !== "input" && Re(e, t, "name", s.name, s, null), Re(e, t, "formEncType", s.formEncType, s, null), Re(e, t, "formMethod", s.formMethod, s, null), Re(e, t, "formTarget", s.formTarget, s, null)) : (Re(e, t, "encType", s.encType, s, null), Re(e, t, "method", s.method, s, null), Re(e, t, "target", s.target, s, null)));
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
                    a != null && ge("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && ge("scrollend", e);
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
                    ge("beforetoggle", e), ge("toggle", e), Wl(e, "popover", a);
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
                    (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = c1.get(n) || n, Wl(e, n, a));
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
                    a != null && ge("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && ge("scrollend", e);
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
                    ge("error", e), ge("load", e);
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
                                Re(e, t, c, g, n, null);
                        }
                    }
                    s && Re(e, t, "srcSet", n.srcSet, n, null), a && Re(e, t, "src", n.src, n, null);
                    return;
                case "input":
                    ge("invalid", e);
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
                                Re(e, t, a, z, n, null);
                        }
                    }
                    af(e, c, v, C, j, g, s, !1), ei(e);
                    return;
                case "select":
                    ge("invalid", e), a = g = c = null;
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
                            Re(e, t, s, v, n, null);
                    }
                    t = c, n = g, e.multiple = !!a, t != null ? Gr(e, !!a, t, !1) : n != null && Gr(e, !!a, n, !0);
                    return;
                case "textarea":
                    ge("invalid", e), c = s = a = null;
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
                            Re(e, t, g, v, n, null);
                    }
                    uf(e, a, s, c), ei(e);
                    return;
                case "option":
                    for(C in n)if (n.hasOwnProperty(C) && (a = n[C], a != null)) switch(C){
                        case "selected":
                            e.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            Re(e, t, C, a, n, null);
                    }
                    return;
                case "dialog":
                    ge("beforetoggle", e), ge("toggle", e), ge("cancel", e), ge("close", e);
                    break;
                case "iframe":
                case "object":
                    ge("load", e);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < bl.length; a++)ge(bl[a], e);
                    break;
                case "image":
                    ge("error", e), ge("load", e);
                    break;
                case "details":
                    ge("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    ge("error", e), ge("load", e);
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
                            Re(e, t, j, a, n, null);
                    }
                    return;
                default:
                    if (Gu(t)) {
                        for(z in n)n.hasOwnProperty(z) && (a = n[z], a !== void 0 && _o(e, t, z, a, n, void 0));
                        return;
                    }
            }
            for(v in n)n.hasOwnProperty(v) && (a = n[v], a != null && Re(e, t, v, a, n, null));
        }
        function Lm(e, t, n, a) {
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
                                a.hasOwnProperty(L) || Re(e, t, L, null, a, q);
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
                                L !== q && Re(e, t, P, L, a, q);
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
                            a.hasOwnProperty(c) || Re(e, t, c, null, a, C);
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
                            c !== C && Re(e, t, s, c, a, C);
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
                            Re(e, t, v, null, a, s);
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
                            s !== c && Re(e, t, g, s, a, c);
                    }
                    lf(e, P, L);
                    return;
                case "option":
                    for(var re in n)if (P = n[re], n.hasOwnProperty(re) && P != null && !a.hasOwnProperty(re)) switch(re){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Re(e, t, re, null, a, P);
                    }
                    for(C in a)if (P = a[C], L = n[C], a.hasOwnProperty(C) && P !== L && (P != null || L != null)) switch(C){
                        case "selected":
                            e.selected = P && typeof P != "function" && typeof P != "symbol";
                            break;
                        default:
                            Re(e, t, C, P, a, L);
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
                    for(var $ in n)P = n[$], n.hasOwnProperty($) && P != null && !a.hasOwnProperty($) && Re(e, t, $, null, a, P);
                    for(j in a)if (P = a[j], L = n[j], a.hasOwnProperty(j) && P !== L && (P != null || L != null)) switch(j){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (P != null) throw Error(u(137, t));
                            break;
                        default:
                            Re(e, t, j, P, a, L);
                    }
                    return;
                default:
                    if (Gu(t)) {
                        for(var Ae in n)P = n[Ae], n.hasOwnProperty(Ae) && P !== void 0 && !a.hasOwnProperty(Ae) && _o(e, t, Ae, void 0, a, P);
                        for(z in a)P = a[z], L = n[z], !a.hasOwnProperty(z) || P === L || P === void 0 && L === void 0 || _o(e, t, z, P, a, L);
                        return;
                    }
            }
            for(var _ in n)P = n[_], n.hasOwnProperty(_) && P != null && !a.hasOwnProperty(_) && Re(e, t, _, null, a, P);
            for(q in a)P = a[q], L = n[q], !a.hasOwnProperty(q) || P === L || P == null && L == null || Re(e, t, q, P, a, L);
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
        function km() {
            var e = window.event;
            return e && e.type === "popstate" ? e === jo ? !1 : (jo = e, !0) : (jo = null, !1);
        }
        var cp = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, fp = typeof Promise == "function" ? Promise : void 0, Bm = typeof queueMicrotask == "function" ? queueMicrotask : typeof fp < "u" ? function(e) {
            return fp.resolve(null).then(e).catch(zm);
        } : cp;
        function zm(e) {
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
        function Um(e, t, n, a) {
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
        function qm(e, t, n) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Jt(e.nextSibling), e === null)) return null;
            return e;
        }
        function Lo(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function Hm(e, t) {
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
            f: Qm,
            r: Gm,
            D: Km,
            C: Ym,
            L: Im,
            m: Xm,
            X: Jm,
            S: Zm,
            M: Fm
        };
        function Qm() {
            var e = Cn.f(), t = qi();
            return e || t;
        }
        function Gm(e) {
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
        function Km(e) {
            Cn.D(e), mp("dns-prefetch", e, null);
        }
        function Ym(e, t) {
            Cn.C(e, t), mp("preconnect", e, t);
        }
        function Im(e, t, n) {
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
        function Xm(e, t) {
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
        function Zm(e, t, n) {
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
        function Jm(e, t) {
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
        function Fm(e, t) {
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
                        }, Qt.set(e, n), c || Wm(s, e, n, g.state))), t && a === null) throw Error(u(528, ""));
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
        function Wm(e, t, n, a) {
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
        function $m(e, t, n) {
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
        function ev() {}
        function tv(e, t, n) {
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
        function nv() {
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
            e.stylesheets = null, e.unsuspend !== null && (e.count++, eu = new Map, t.forEach(rv, e), eu = null, $i.call(e));
        }
        function rv(e, t) {
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
        function av(e, t, n, a, s, c, g, v) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pa(0), this.hiddenUpdates = Pa(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = c, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = new Map;
        }
        function Tp(e, t, n, a, s, c, g, v, C, j, z, q) {
            return e = new av(e, t, n, g, v, C, j, q), t = 1, c === !0 && (t |= 24), c = xt(3, null, null, t), e.current = c, c.stateNode = e, t = bs(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
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
        function lv(e, t, n, a) {
            var s = B.T;
            B.T = null;
            var c = K.p;
            try {
                K.p = 2, qo(e, t, n, a);
            } finally{
                K.p = c, B.T = s;
            }
        }
        function iv(e, t, n, a) {
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
                else if (sv(s, e, t, n, a)) a.stopPropagation();
                else if (_p(e, a), t & 4 && -1 < uv.indexOf(e)) {
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
                                        an(c), (De & 6) === 0 && (zi = jt() + 500, yl(0));
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
        var Go = !1, Fn = null, Wn = null, $n = null, xl = new Map, Rl = new Map, er = [], uv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
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
        function sv(e, t, n, a, s) {
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
        function ov() {
            Go = !1, Fn !== null && ru(Fn) && (Fn = null), Wn !== null && ru(Wn) && (Wn = null), $n !== null && ru($n) && ($n = null), xl.forEach(Mp), Rl.forEach(Mp);
        }
        function au(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Go || (Go = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, ov)));
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
                Cp(e.current, 2, null, e, null, null), qi(), t[Oe] = null;
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
        var cv = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: B,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!uu.isDisabled && uu.supportsFiber) try {
                on = uu.inject(cv), Je = uu;
            } catch  {}
        }
        return Ml.createRoot = function(e, t) {
            if (!o(e)) throw Error(u(299));
            var n = !1, a = "", s = Zd, c = Jd, g = Fd, v = null;
            return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = Tp(e, 1, !1, null, null, n, a, s, c, g, v, null), e[Oe] = t.current, Ro(e), new Ko(t);
        }, Ml.hydrateRoot = function(e, t, n) {
            if (!o(e)) throw Error(u(299));
            var a = !1, s = "", c = Zd, g = Jd, v = Fd, C = null, j = null;
            return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (C = n.unstable_transitionCallbacks), n.formState !== void 0 && (j = n.formState)), t = Tp(e, 1, !0, t, n ?? null, a, s, c, g, v, C, j), t.context = Dp(null), n = t.current, a = wt(), a = La(a), s = Vn(a), s.callback = null, Bn(n, s, a), n = a, t.current.lanes = n, or(t, n), an(t), e[Oe] = t.current, Ro(e), new iu(t);
        }, Ml.version = "19.1.0", Ml;
    }
    var Qp;
    function Ev() {
        if (Qp) return Xo.exports;
        Qp = 1;
        function l() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (r) {
                console.error(r);
            }
        }
        return l(), Xo.exports = Sv(), Xo.exports;
    }
    var Ov = Ev(), Wo = {
        exports: {}
    }, $o = {};
    var Gp;
    function Tv() {
        if (Gp) return $o;
        Gp = 1;
        var l = Ru();
        function r(p, m) {
            return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
        }
        var i = typeof Object.is == "function" ? Object.is : r, u = l.useSyncExternalStore, o = l.useRef, f = l.useEffect, d = l.useMemo, h = l.useDebugValue;
        return $o.useSyncExternalStoreWithSelector = function(p, m, b, O, S) {
            var T = o(null);
            if (T.current === null) {
                var D = {
                    hasValue: !1,
                    value: null
                };
                T.current = D;
            } else D = T.current;
            T = d(function() {
                function w(Q) {
                    if (!M) {
                        if (M = !0, k = Q, Q = O(Q), S !== void 0 && D.hasValue) {
                            var X = D.value;
                            if (S(X, Q)) return V = X;
                        }
                        return V = Q;
                    }
                    if (X = V, i(k, Q)) return X;
                    var ie = O(Q);
                    return S !== void 0 && S(X, ie) ? (k = Q, X) : (k = Q, V = ie);
                }
                var M = !1, k, V, G = b === void 0 ? null : b;
                return [
                    function() {
                        return w(m());
                    },
                    G === null ? void 0 : function() {
                        return w(G());
                    }
                ];
            }, [
                m,
                b,
                O,
                S
            ]);
            var x = u(p, T[0], T[1]);
            return f(function() {
                D.hasValue = !0, D.value = x;
            }, [
                x
            ]), h(x), x;
        }, $o;
    }
    var Kp;
    function Dv() {
        return Kp || (Kp = 1, Wo.exports = Tv()), Wo.exports;
    }
    var Cv = Dv();
    function xv(l) {
        l();
    }
    function Rv() {
        let l = null, r = null;
        return {
            clear () {
                l = null, r = null;
            },
            notify () {
                xv(()=>{
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
    function Av(l, r) {
        let i, u = Yp, o = 0, f = !1;
        function d(x) {
            b();
            const w = u.subscribe(x);
            let M = !1;
            return ()=>{
                M || (M = !0, w(), O());
            };
        }
        function h() {
            u.notify();
        }
        function p() {
            D.onStateChange && D.onStateChange();
        }
        function m() {
            return f;
        }
        function b() {
            o++, i || (i = l.subscribe(p), u = Rv());
        }
        function O() {
            o--, i && o === 0 && (i(), i = void 0, u.clear(), u = Yp);
        }
        function S() {
            f || (f = !0, b());
        }
        function T() {
            f && (f = !1, O());
        }
        const D = {
            addNestedSub: d,
            notifyNestedSubs: h,
            handleChangeWrapper: p,
            isSubscribed: m,
            trySubscribe: S,
            tryUnsubscribe: T,
            getListeners: ()=>u
        };
        return D;
    }
    var _v = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wv = _v(), Mv = ()=>typeof navigator < "u" && navigator.product === "ReactNative", Nv = Mv(), jv = ()=>wv || Nv ? E.useLayoutEffect : E.useEffect, Pv = jv(), Lv = Symbol.for("react-redux-context"), kv = typeof globalThis < "u" ? globalThis : {};
    function Vv() {
        if (!E.createContext) return {};
        const l = kv[Lv] ??= new Map;
        let r = l.get(E.createContext);
        return r || (r = E.createContext(null), l.set(E.createContext, r)), r;
    }
    var ir = Vv();
    function Bv(l) {
        const { children: r, context: i, serverState: u, store: o } = l, f = E.useMemo(()=>{
            const p = Av(o);
            return {
                store: o,
                subscription: p,
                getServerState: u ? ()=>u : void 0
            };
        }, [
            o,
            u
        ]), d = E.useMemo(()=>o.getState(), [
            o
        ]);
        Pv(()=>{
            const { subscription: p } = f;
            return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), d !== o.getState() && p.notifyNestedSubs(), ()=>{
                p.tryUnsubscribe(), p.onStateChange = void 0;
            };
        }, [
            f,
            d
        ]);
        const h = i || ir;
        return E.createElement(h.Provider, {
            value: f
        }, r);
    }
    var zv = Bv;
    function Mc(l = ir) {
        return function() {
            return E.useContext(l);
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
    var Uv = zg();
    function qv(l = ir) {
        const r = l === ir ? Uv : zg(l), i = ()=>r().dispatch;
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    var ur = qv(), Hv = (l, r)=>l === r;
    function Qv(l = ir) {
        const r = l === ir ? Bg : Mc(l), i = (u, o = {})=>{
            const { equalityFn: f = Hv } = typeof o == "function" ? {
                equalityFn: o
            } : o, d = r(), { store: h, subscription: p, getServerState: m } = d;
            E.useRef(!0);
            const b = E.useCallback({
                [u.name] (S) {
                    return u(S);
                }
            }[u.name], [
                u
            ]), O = Cv.useSyncExternalStoreWithSelector(p.addNestedSub, h.getState, m || h.getState, b, f);
            return E.useDebugValue(O), O;
        };
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    var Nt = Qv();
    function ut(l) {
        return `Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Gv = typeof Symbol == "function" && Symbol.observable || "@@observable", Ip = Gv, ec = ()=>Math.random().toString(36).substring(7).split("").join("."), Kv = {
        INIT: `@@redux/INIT${ec()}`,
        REPLACE: `@@redux/REPLACE${ec()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${ec()}`
    }, Tu = Kv;
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
            d === f && (d = new Map, f.forEach((w, M)=>{
                d.set(M, w);
            }));
        }
        function b() {
            if (p) throw new Error(ut(3));
            return o;
        }
        function O(w) {
            if (typeof w != "function") throw new Error(ut(4));
            if (p) throw new Error(ut(5));
            let M = !0;
            m();
            const k = h++;
            return d.set(k, w), function() {
                if (M) {
                    if (p) throw new Error(ut(6));
                    M = !1, m(), d.delete(k), f = null;
                }
            };
        }
        function S(w) {
            if (!Ug(w)) throw new Error(ut(7));
            if (typeof w.type > "u") throw new Error(ut(8));
            if (typeof w.type != "string") throw new Error(ut(17));
            if (p) throw new Error(ut(9));
            try {
                p = !0, o = u(o, w);
            } finally{
                p = !1;
            }
            return (f = d).forEach((k)=>{
                k();
            }), w;
        }
        function T(w) {
            if (typeof w != "function") throw new Error(ut(10));
            u = w, S({
                type: Tu.REPLACE
            });
        }
        function D() {
            const w = O;
            return {
                subscribe (M) {
                    if (typeof M != "object" || M === null) throw new Error(ut(11));
                    function k() {
                        const G = M;
                        G.next && G.next(b());
                    }
                    return k(), {
                        unsubscribe: w(k)
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
            subscribe: O,
            getState: b,
            replaceReducer: T,
            [Ip]: D
        };
    }
    function Yv(l) {
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
            Yv(i);
        } catch (f) {
            o = f;
        }
        return function(d = {}, h) {
            if (o) throw o;
            let p = !1;
            const m = {};
            for(let b = 0; b < u.length; b++){
                const O = u[b], S = i[O], T = d[O], D = S(T, h);
                if (typeof D > "u") throw h && h.type, new Error(ut(14));
                m[O] = D, p = p || D !== T;
            }
            return p = p || u.length !== Object.keys(d).length, p ? m : d;
        };
    }
    function Du(...l) {
        return l.length === 0 ? (r)=>r : l.length === 1 ? l[0] : l.reduce((r, i)=>(...u)=>r(i(...u)));
    }
    function Iv(...l) {
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
    var Xv = Hg(), Zv = Hg, Jv = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
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
    function Fv(l) {
        return typeof l == "boolean";
    }
    var Wv = ()=>function(r) {
            const { thunk: i = !0, immutableCheck: u = !0, serializableCheck: o = !0, actionCreatorCheck: f = !0 } = r ?? {};
            let d = new Qg;
            return i && (Fv(i) ? d.push(Xv) : d.push(Zv(i.extraArgument))), d;
        }, $v = "RTK_autoBatch", Xp = (l)=>(r)=>{
            setTimeout(r, l);
        }, ey = (l = {
        type: "raf"
    })=>(r)=>(...i)=>{
                const u = r(...i);
                let o = !0, f = !1, d = !1;
                const h = new Set, p = l.type === "tick" ? queueMicrotask : l.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Xp(10) : l.type === "callback" ? l.queueNotification : Xp(l.timeout), m = ()=>{
                    d = !1, f && (f = !1, h.forEach((b)=>b()));
                };
                return Object.assign({}, u, {
                    subscribe (b) {
                        const O = ()=>o && b(), S = u.subscribe(O);
                        return h.add(b), ()=>{
                            S(), h.delete(b);
                        };
                    },
                    dispatch (b) {
                        try {
                            return o = !b?.meta?.[$v], f = !o, f && (d || (d = !0, p(m))), u.dispatch(b);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, ty = (l)=>function(i) {
            const { autoBatch: u = !0 } = i ?? {};
            let o = new Qg(l);
            return u && o.push(ey(typeof u == "object" ? u : void 0)), o;
        };
    function ny(l) {
        const r = Wv(), { reducer: i = void 0, middleware: u, devTools: o = !0, preloadedState: f = void 0, enhancers: d = void 0 } = l || {};
        let h;
        if (typeof i == "function") h = i;
        else if (Ug(i)) h = qg(i);
        else throw new Error(ry(1));
        let p;
        typeof u == "function" ? p = u(r) : p = r();
        let m = Du;
        o && (m = Jv({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const b = Iv(...p), O = ty(b);
        let S = typeof d == "function" ? d(O) : O();
        const T = m(...S);
        return Nc(h, f, T);
    }
    function ry(l) {
        return `Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
    }
    var jc = "persist:", Gg = "persist/FLUSH", Pc = "persist/REHYDRATE", Kg = "persist/PAUSE", Yg = "persist/PERSIST", Ig = "persist/PURGE", Xg = "persist/REGISTER", ay = -1;
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
    function ly(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Zp(i, !0).forEach(function(u) {
                iy(l, u, i[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Zp(i).forEach(function(u) {
                Object.defineProperty(l, u, Object.getOwnPropertyDescriptor(i, u));
            });
        }
        return l;
    }
    function iy(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function uy(l, r, i, u) {
        u.debug;
        var o = ly({}, i);
        return l && mu(l) === "object" && Object.keys(l).forEach(function(f) {
            f !== "_persist" && r[f] === i[f] && (o[f] = l[f]);
        }), o;
    }
    function sy(l) {
        var r = l.blacklist || null, i = l.whitelist || null, u = l.transforms || [], o = l.throttle || 0, f = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : jc).concat(l.key), d = l.storage, h;
        l.serialize === !1 ? h = function(Q) {
            return Q;
        } : typeof l.serialize == "function" ? h = l.serialize : h = oy;
        var p = l.writeFailHandler || null, m = {}, b = {}, O = [], S = null, T = null, D = function(Q) {
            Object.keys(Q).forEach(function(X) {
                M(X) && m[X] !== Q[X] && O.indexOf(X) === -1 && O.push(X);
            }), Object.keys(m).forEach(function(X) {
                Q[X] === void 0 && M(X) && O.indexOf(X) === -1 && m[X] !== void 0 && O.push(X);
            }), S === null && (S = setInterval(x, o)), m = Q;
        };
        function x() {
            if (O.length === 0) {
                S && clearInterval(S), S = null;
                return;
            }
            var G = O.shift(), Q = u.reduce(function(X, ie) {
                return ie.in(X, G, m);
            }, m[G]);
            if (Q !== void 0) try {
                b[G] = h(Q);
            } catch (X) {
                console.error("redux-persist/createPersistoid: error serializing state", X);
            }
            else delete b[G];
            O.length === 0 && w();
        }
        function w() {
            Object.keys(b).forEach(function(G) {
                m[G] === void 0 && delete b[G];
            }), T = d.setItem(f, h(b)).catch(k);
        }
        function M(G) {
            return !(i && i.indexOf(G) === -1 && G !== "_persist" || r && r.indexOf(G) !== -1);
        }
        function k(G) {
            p && p(G);
        }
        var V = function() {
            for(; O.length !== 0;)x();
            return T || Promise.resolve();
        };
        return {
            update: D,
            flush: V
        };
    }
    function oy(l) {
        return JSON.stringify(l);
    }
    function cy(l) {
        var r = l.transforms || [], i = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : jc).concat(l.key), u = l.storage;
        l.debug;
        var o;
        return l.deserialize === !1 ? o = function(d) {
            return d;
        } : typeof l.deserialize == "function" ? o = l.deserialize : o = fy, u.getItem(i).then(function(f) {
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
    function fy(l) {
        return JSON.parse(l);
    }
    function dy(l) {
        var r = l.storage, i = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : jc).concat(l.key);
        return r.removeItem(i, hy);
    }
    function hy(l) {}
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
                py(l, u, i[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Jp(i).forEach(function(u) {
                Object.defineProperty(l, u, Object.getOwnPropertyDescriptor(i, u));
            });
        }
        return l;
    }
    function py(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function gy(l, r) {
        if (l == null) return {};
        var i = my(l, r), u, o;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            for(o = 0; o < f.length; o++)u = f[o], !(r.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(l, u) && (i[u] = l[u]);
        }
        return i;
    }
    function my(l, r) {
        if (l == null) return {};
        var i = {}, u = Object.keys(l), o, f;
        for(f = 0; f < u.length; f++)o = u[f], !(r.indexOf(o) >= 0) && (i[o] = l[o]);
        return i;
    }
    var vy = 5e3;
    function yy(l, r) {
        var i = l.version !== void 0 ? l.version : ay;
        l.debug;
        var u = l.stateReconciler === void 0 ? uy : l.stateReconciler, o = l.getStoredState || cy, f = l.timeout !== void 0 ? l.timeout : vy, d = null, h = !1, p = !0, m = function(O) {
            return O._persist.rehydrated && d && !p && d.update(O), O;
        };
        return function(b, O) {
            var S = b || {}, T = S._persist, D = gy(S, [
                "_persist"
            ]), x = D;
            if (O.type === Yg) {
                var w = !1, M = function(ce, ae) {
                    w || (O.rehydrate(l.key, ce, ae), w = !0);
                };
                if (f && setTimeout(function() {
                    !w && M(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(l.key, '"')));
                }, f), p = !1, d || (d = sy(l)), T) return xn({}, r(x, O), {
                    _persist: T
                });
                if (typeof O.rehydrate != "function" || typeof O.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return O.register(l.key), o(l).then(function(ie) {
                    var ce = l.migrate || function(ae, ve) {
                        return Promise.resolve(ae);
                    };
                    ce(ie, i).then(function(ae) {
                        M(ae);
                    }, function(ae) {
                        M(void 0, ae);
                    });
                }, function(ie) {
                    M(void 0, ie);
                }), xn({}, r(x, O), {
                    _persist: {
                        version: i,
                        rehydrated: !1
                    }
                });
            } else {
                if (O.type === Ig) return h = !0, O.result(dy(l)), xn({}, r(x, O), {
                    _persist: T
                });
                if (O.type === Gg) return O.result(d && d.flush()), xn({}, r(x, O), {
                    _persist: T
                });
                if (O.type === Kg) p = !0;
                else if (O.type === Pc) {
                    if (h) return xn({}, x, {
                        _persist: xn({}, T, {
                            rehydrated: !0
                        })
                    });
                    if (O.key === l.key) {
                        var k = r(x, O), V = O.payload, G = u !== !1 && V !== void 0 ? u(V, b, k, l) : k, Q = xn({}, G, {
                            _persist: xn({}, T, {
                                rehydrated: !0
                            })
                        });
                        return m(Q);
                    }
                }
            }
            if (!T) return r(b, O);
            var X = r(x, O);
            return X === x ? b : m(xn({}, X, {
                _persist: T
            }));
        };
    }
    function Fp(l) {
        return Ey(l) || Sy(l) || by();
    }
    function by() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function Sy(l) {
        if (Symbol.iterator in Object(l) || Object.prototype.toString.call(l) === "[object Arguments]") return Array.from(l);
    }
    function Ey(l) {
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
                Oy(l, u, i[u]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Wp(i).forEach(function(u) {
                Object.defineProperty(l, u, Object.getOwnPropertyDescriptor(i, u));
            });
        }
        return l;
    }
    function Oy(l, r, i) {
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
    }, Ty = function() {
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
    function Dy(l, r, i) {
        var u = Nc(Ty, Zg, void 0), o = function(p) {
            u.dispatch({
                type: Xg,
                key: p
            });
        }, f = function(p, m, b) {
            var O = {
                type: Pc,
                payload: m,
                err: b,
                key: p
            };
            l.dispatch(O), u.dispatch(O);
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
    function Cy() {
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
    function xy() {
        if (eg) return su;
        eg = 1, su.__esModule = !0, su.default = i;
        var l = r(Cy());
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
    function Ry() {
        if (tg) return Nl;
        tg = 1, Nl.__esModule = !0, Nl.default = void 0;
        var l = r(xy());
        function r(u) {
            return u && u.__esModule ? u : {
                default: u
            };
        }
        var i = (0, l.default)("local");
        return Nl.default = i, Nl;
    }
    var Ay = Ry();
    const _y = wc(Ay);
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
            const { color: u, piece: o, from: f, to: d, flags: h, captured: p, promotion: m } = i, b = st(f), O = st(d);
            this.color = u, this.piece = o, this.from = b, this.to = O, this.san = r._moveToSan(i, r._moves({
                legal: !0
            })), this.lan = b + O, this.before = r.fen(), r._makeMove(i), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const S in oe)oe[S] & h && (this.flags += Rr[S]);
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
    }, oe = {
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
    }, wy = {
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
    }, My = {
        ...yc,
        ...wy
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
    }, Ny = [
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
    ], jy = [
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
    ], Py = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, Ly = "pnbrqkPNBRQK", rg = [
        vc,
        vu,
        Bl,
        ar
    ], ky = 7, Vy = 6, By = 1, zy = 0, fu = {
        [Xe]: oe.KSIDE_CASTLE,
        [ar]: oe.QSIDE_CASTLE
    }, nr = {
        w: [
            {
                square: le.a1,
                flag: oe.QSIDE_CASTLE
            },
            {
                square: le.h1,
                flag: oe.KSIDE_CASTLE
            }
        ],
        b: [
            {
                square: le.a8,
                flag: oe.QSIDE_CASTLE
            },
            {
                square: le.h8,
                flag: oe.KSIDE_CASTLE
            }
        ]
    }, Uy = {
        b: By,
        w: Vy
    }, qy = [
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
    function Hy(l) {
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
    function Qy(l, r) {
        const i = l.from, u = l.to, o = l.piece;
        let f = 0, d = 0, h = 0;
        for(let p = 0, m = r.length; p < m; p++){
            const b = r[p].from, O = r[p].to, S = r[p].piece;
            o === S && i !== b && u === O && (f++, Ar(i) === Ar(b) && d++, Hl(i) === Hl(b) && h++);
        }
        return f > 0 ? d > 0 && h > 0 ? st(i) : h > 0 ? st(i).charAt(1) : st(i).charAt(0) : "";
    }
    function rr(l, r, i, u, o, f = void 0, d = oe.NORMAL) {
        const h = Ar(u);
        if (o === nt && (h === ky || h === zy)) for(let p = 0; p < rg.length; p++){
            const m = rg[p];
            l.push({
                color: r,
                from: i,
                to: u,
                piece: o,
                captured: f,
                promotion: m,
                flags: d | oe.PROMOTION
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
                ...My
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
                const { ok: h, error: p } = Hy(r);
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
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= oe.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= oe.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= oe.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= oe.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? Dt : le[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, i = "";
            for(let f = le.a8; f <= le.h1; f++){
                if (this._board[f]) {
                    r > 0 && (i += r, r = 0);
                    const { color: d, type: h } = this._board[f];
                    i += d === pt ? h.toUpperCase() : h.toLowerCase();
                } else r++;
                f + 1 & 136 && (r > 0 && (i += r), f !== le.h1 && (i += "/"), r = 0, f += 8);
            }
            let u = "";
            this._castling[pt] & oe.KSIDE_CASTLE && (u += "K"), this._castling[pt] & oe.QSIDE_CASTLE && (u += "Q"), this._castling[Kt] & oe.KSIDE_CASTLE && (u += "k"), this._castling[Kt] & oe.QSIDE_CASTLE && (u += "q"), u = u || "-";
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
                            flags: oe.EP_CAPTURE
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
            return this._board[le[r]];
        }
        findPiece(r) {
            const i = [];
            for(let u = le.a8; u <= le.h1; u++){
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
            if (Ly.indexOf(r.toLowerCase()) === -1 || !(u in le)) return !1;
            const o = le[u];
            if (r == Xe && !(this._kings[i] == Dt || this._kings[i] == o)) return !1;
            const f = this._board[o];
            return f && f.type === Xe && (this._kings[f.color] = Dt), this._board[o] = {
                type: r,
                color: i
            }, r === Xe && (this._kings[i] = o), !0;
        }
        remove(r) {
            const i = this.get(r);
            return delete this._board[le[r]], i && i.type === Xe && (this._kings[i.color] = Dt), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), i;
        }
        _updateCastlingRights() {
            const r = this._board[le.e1]?.type === Xe && this._board[le.e1]?.color === pt, i = this._board[le.e8]?.type === Xe && this._board[le.e8]?.color === Kt;
            (!r || this._board[le.a1]?.type !== Bl || this._board[le.a1]?.color !== pt) && (this._castling.w &= -65), (!r || this._board[le.h1]?.type !== Bl || this._board[le.h1]?.color !== pt) && (this._castling.w &= -33), (!i || this._board[le.a8]?.type !== Bl || this._board[le.a8]?.color !== Kt) && (this._castling.b &= -65), (!i || this._board[le.h8]?.type !== Bl || this._board[le.h8]?.color !== Kt) && (this._castling.b &= -33);
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
            for(let f = le.a8; f <= le.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                if (this._board[f] === void 0 || this._board[f].color !== r) continue;
                const d = this._board[f], h = f - i;
                if (h === 0) continue;
                const p = h + 119;
                if (Ny[p] & Py[d.type]) {
                    if (d.type === nt) {
                        if (h > 0 && d.color === pt || h <= 0 && d.color === Kt) if (u) o.push(st(f));
                        else return !0;
                        continue;
                    }
                    if (d.type === "n" || d.type === "k") if (u) {
                        o.push(st(f));
                        continue;
                    } else return !0;
                    const m = jy[p];
                    let b = f + m, O = !1;
                    for(; b !== i;){
                        if (this._board[b] != null) {
                            O = !0;
                            break;
                        }
                        b += m;
                    }
                    if (!O) if (u) {
                        o.push(st(f));
                        continue;
                    } else return !0;
                }
            }
            return u ? o : !1;
        }
        attackers(r, i) {
            return i ? this._attacked(i, le[r], !0) : this._attacked(this._turn, le[r], !0);
        }
        _isKingAttacked(r) {
            const i = this._kings[r];
            return i === -1 ? !1 : this._attacked(jl(r), i);
        }
        isAttacked(r, i) {
            return this._attacked(i, le[r]);
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
            for(let f = le.a8; f <= le.h1; f++){
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
            let m = le.a8, b = le.h1, O = !1;
            if (o) if (o in le) m = b = le[o], O = !0;
            else return [];
            for(let T = m; T <= b; T++){
                if (T & 136) {
                    T += 7;
                    continue;
                }
                if (!this._board[T] || this._board[T].color === p) continue;
                const { type: D } = this._board[T];
                let x;
                if (D === nt) {
                    if (f && f !== D) continue;
                    x = T + nc[h][0], this._board[x] || (rr(d, h, T, x, nt), x = T + nc[h][1], Uy[h] === Ar(T) && !this._board[x] && rr(d, h, T, x, nt, void 0, oe.BIG_PAWN));
                    for(let w = 2; w < 4; w++)x = T + nc[h][w], !(x & 136) && (this._board[x]?.color === p ? rr(d, h, T, x, nt, this._board[x].type, oe.CAPTURE) : x === this._epSquare && rr(d, h, T, x, nt, nt, oe.EP_CAPTURE));
                } else {
                    if (f && f !== D) continue;
                    for(let w = 0, M = ng[D].length; w < M; w++){
                        const k = ng[D][w];
                        for(x = T; x += k, !(x & 136);){
                            if (!this._board[x]) rr(d, h, T, x, D);
                            else {
                                if (this._board[x].color === h) break;
                                rr(d, h, T, x, D, this._board[x].type, oe.CAPTURE);
                                break;
                            }
                            if (D === vc || D === Xe) break;
                        }
                    }
                }
            }
            if ((f === void 0 || f === Xe) && (!O || b === this._kings[h])) {
                if (this._castling[h] & oe.KSIDE_CASTLE) {
                    const T = this._kings[h], D = T + 2;
                    !this._board[T + 1] && !this._board[D] && !this._attacked(p, this._kings[h]) && !this._attacked(p, T + 1) && !this._attacked(p, D) && rr(d, h, this._kings[h], D, Xe, void 0, oe.KSIDE_CASTLE);
                }
                if (this._castling[h] & oe.QSIDE_CASTLE) {
                    const T = this._kings[h], D = T - 2;
                    !this._board[T - 1] && !this._board[T - 2] && !this._board[T - 3] && !this._attacked(p, this._kings[h]) && !this._attacked(p, T - 1) && !this._attacked(p, D) && rr(d, h, this._kings[h], D, Xe, void 0, oe.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[h] === -1) return d;
            const S = [];
            for(let T = 0, D = d.length; T < D; T++)this._makeMove(d[T]), this._isKingAttacked(h) || S.push(d[T]), this._undoMove();
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
            if (this._push(r), this._board[r.to] = this._board[r.from], delete this._board[r.from], r.flags & oe.EP_CAPTURE && (this._turn === Kt ? delete this._board[r.to - 16] : delete this._board[r.to + 16]), r.promotion && (this._board[r.to] = {
                type: r.promotion,
                color: i
            }), this._board[r.to].type === Xe) {
                if (this._kings[i] = r.to, r.flags & oe.KSIDE_CASTLE) {
                    const o = r.to - 1, f = r.to + 1;
                    this._board[o] = this._board[f], delete this._board[f];
                } else if (r.flags & oe.QSIDE_CASTLE) {
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
            r.flags & oe.BIG_PAWN ? i === Kt ? this._epSquare = r.to - 16 : this._epSquare = r.to + 16 : this._epSquare = Dt, r.piece === nt ? this._halfMoves = 0 : r.flags & (oe.CAPTURE | oe.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, i === Kt && this._moveNumber++, this._turn = u;
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
            if (this._board[i.from] = this._board[i.to], this._board[i.from].type = i.piece, delete this._board[i.to], i.captured) if (i.flags & oe.EP_CAPTURE) {
                let f;
                u === Kt ? f = i.to - 16 : f = i.to + 16, this._board[f] = {
                    type: nt,
                    color: o
                };
            } else this._board[i.to] = {
                type: i.captured,
                color: o
            };
            if (i.flags & (oe.KSIDE_CASTLE | oe.QSIDE_CASTLE)) {
                let f, d;
                i.flags & oe.KSIDE_CASTLE ? (f = i.to + 1, d = i.to - 1) : (f = i.to - 2, d = i.to + 1), this._board[f] = this._board[d], delete this._board[d];
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
                const T = this._comments[this.fen()];
                if (typeof T < "u") {
                    const D = S.length > 0 ? " " : "";
                    S = `${S}${D}{${T}}`;
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
                    const T = `${this._moveNumber}. ...`;
                    p = p ? `${p} ${T}` : T;
                } else S.color === "w" && (p.length && h.push(p), p = this._moveNumber + ".");
                p = p + " " + this._moveToSan(S, this._moves({
                    legal: !0
                })), this._makeMove(S);
            }
            if (p.length && h.push(f(p)), h.push(this._header.Result || "*"), i === 0) return u.join("") + h.join(" ");
            const m = function() {
                return u.length > 0 && u[u.length - 1] === " " ? (u.pop(), !0) : !1;
            }, b = function(S, T) {
                for (const D of T.split(" "))if (D) {
                    if (S + D.length > i) {
                        for(; m();)S--;
                        u.push(r), S = 0;
                    }
                    u.push(D), S += D.length, u.push(" "), S++;
                }
                return m() && S--, S;
            };
            let O = 0;
            for(let S = 0; S < h.length; S++){
                if (O + h[S].length > i && h[S].includes("{")) {
                    O = b(O, h[S]);
                    continue;
                }
                O + h[S].length > i && S !== 0 ? (u[u.length - 1] === " " && u.pop(), u.push(r), O = 0) : S !== 0 && (u.push(" "), O++), u.push(h[S]), O += h[S].length;
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
                const G = {}, Q = V.split(new RegExp(o(u)));
                let X = "", ie = "";
                for(let ce = 0; ce < Q.length; ce++){
                    const ae = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    X = Q[ce].replace(ae, "$1"), ie = Q[ce].replace(ae, "$2"), X.trim().length > 0 && (G[X] = ie);
                }
                return G;
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
            function O(V) {
                return Array.from(V).map(function(G) {
                    return G.charCodeAt(0) < 128 ? G.charCodeAt(0).toString(16) : encodeURIComponent(G).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function S(V) {
                return V.length == 0 ? "" : decodeURIComponent("%" + (V.match(/.{1,2}/g) || []).join("%"));
            }
            const T = function(V) {
                return V = V.replace(new RegExp(o(u), "g"), " "), `{${O(V.slice(1, V.length - 1))}}`;
            }, D = function(V) {
                if (V.startsWith("{") && V.endsWith("}")) return S(V.slice(1, V.length - 1));
            };
            let x = r.replace(p, "").replace(new RegExp(`({[^}]*})+?|;([^${o(u)}]*)`, "g"), function(V, G, Q) {
                return G !== void 0 ? T(G) : " " + T(`{${Q.slice(1)}}`);
            }).replace(new RegExp(o(u), "g"), " ");
            const w = /(\([^()]+\))+?/g;
            for(; w.test(x);)x = x.replace(w, "");
            x = x.replace(/\d+\.(\.\.)?/g, ""), x = x.replace(/\.\.\./g, ""), x = x.replace(/\$\d+/g, "");
            let M = x.trim().split(new RegExp(/\s+/));
            M = M.filter((V)=>V !== "");
            let k = "";
            for(let V = 0; V < M.length; V++){
                const G = D(M[V]);
                if (G !== void 0) {
                    this._comments[this.fen()] = G;
                    continue;
                }
                const Q = this._moveFromSan(M[V], i);
                if (Q == null) if (qy.indexOf(M[V]) > -1) k = M[V];
                else throw new Error(`Invalid move in PGN: ${M[V]}`);
                else k = "", this._makeMove(Q), this._incPositionCount(this.fen());
            }
            k && Object.keys(this._header).length && this._header.Result !== k && this.setHeader("Result", k);
        }
        _moveToSan(r, i) {
            let u = "";
            if (r.flags & oe.KSIDE_CASTLE) u = "O-O";
            else if (r.flags & oe.QSIDE_CASTLE) u = "O-O-O";
            else {
                if (r.piece !== nt) {
                    const o = Qy(r, i);
                    u += r.piece.toUpperCase() + o;
                }
                r.flags & (oe.CAPTURE | oe.EP_CAPTURE) && (r.piece === nt && (u += st(r.from)[0]), u += "x"), u += st(r.to), r.promotion && (u += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? u += "#" : u += "+"), this._undoMove(), u;
        }
        _moveFromSan(r, i = !1) {
            const u = rc(r);
            let o = ag(u), f = this._moves({
                legal: !0,
                piece: o
            });
            for(let S = 0, T = f.length; S < T; S++)if (u === rc(this._moveToSan(f[S], f))) return f[S];
            if (i) return null;
            let d, h, p, m, b, O = !1;
            if (h = u.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), h ? (d = h[1], p = h[2], m = h[3], b = h[4], p.length == 1 && (O = !0)) : (h = u.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), h && (d = h[1], p = h[2], m = h[3], b = h[4], p.length == 1 && (O = !0))), o = ag(u), f = this._moves({
                legal: !0,
                piece: d || o
            }), !m) return null;
            for(let S = 0, T = f.length; S < T; S++)if (p) {
                if ((!d || d.toLowerCase() == f[S].piece) && le[p] == f[S].from && le[m] == f[S].to && (!b || b.toLowerCase() == f[S].promotion)) return f[S];
                if (O) {
                    const D = st(f[S].from);
                    if ((!d || d.toLowerCase() == f[S].piece) && le[m] == f[S].to && (p == D[0] || p == D[1]) && (!b || b.toLowerCase() == f[S].promotion)) return f[S];
                }
            } else if (u === rc(this._moveToSan(f[S], f)).replace("x", "")) return f[S];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let i = le.a8; i <= le.h1; i++){
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
            for(let u = le.a8; u <= le.h1; u++)this._board[u] == null ? i.push(null) : i.push({
                square: st(u),
                type: this._board[u].type,
                color: this._board[u].color
            }), u + 1 & 136 && (r.push(i), i = [], u += 8);
            return r;
        }
        squareColor(r) {
            if (r in le) {
                const i = le[r];
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
    const Fg = "MOVE_PIECE", Wg = "RESET_GAME", Gy = "LOAD_GAME", $g = "SET_GAME_OVER", Ky = "SET_TIMER_DURATION", Yy = (l)=>({
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
    }, Iy = (l = lg, r)=>{
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
            case Gy:
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
            case Ky:
                return {
                    ...l,
                    timerDuration: r.payload
                };
            default:
                return l;
        }
    }, t0 = "FLIP_BOARD", n0 = "SET_THEME", r0 = "SET_SOUND", a0 = ()=>({
            type: t0
        }), Xy = (l)=>({
            type: n0,
            payload: l
        }), Zy = (l)=>({
            type: r0,
            payload: l
        }), Jy = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    }, Fy = (l = Jy, r)=>{
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
    }, l0 = "NEXT", i0 = "PREV", u0 = "START_POS", s0 = "FINAL_POS", Lc = "LOAD_PGN", o0 = "JUMP_TO_MOVE", Wy = ()=>({
            type: u0
        }), $y = ()=>({
            type: i0
        }), eb = ()=>({
            type: l0
        }), tb = ()=>({
            type: s0
        }), nb = ({ finalPos: l, moves: r, fens: i, fromToSquares: u, termination: o, result: f, blackPlayerName: d, whitePlayerName: h })=>({
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
        }), rb = (l)=>({
            type: o0,
            payload: l
        }), ab = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0
    }, lb = (l = ab, r)=>{
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
    }, ib = {
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
    }, ub = (l = ib, r)=>{
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
    }, sb = qg({
        game: Iy,
        settings: Fy,
        analysis: lb,
        pgn: ub
    }), ob = {
        key: "root",
        storage: _y,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    }, cb = yy(ob, sb), kc = ny({
        reducer: cb,
        middleware: (l)=>l({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    Dy(kc);
    var Pl = {}, ig;
    function fb() {
        if (ig) return Pl;
        ig = 1, Object.defineProperty(Pl, "__esModule", {
            value: !0
        }), Pl.parse = d, Pl.serialize = m;
        const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, u = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, f = (()=>{
            const S = function() {};
            return S.prototype = Object.create(null), S;
        })();
        function d(S, T) {
            const D = new f, x = S.length;
            if (x < 2) return D;
            const w = T?.decode || b;
            let M = 0;
            do {
                const k = S.indexOf("=", M);
                if (k === -1) break;
                const V = S.indexOf(";", M), G = V === -1 ? x : V;
                if (k > G) {
                    M = S.lastIndexOf(";", k - 1) + 1;
                    continue;
                }
                const Q = h(S, M, k), X = p(S, k, Q), ie = S.slice(Q, X);
                if (D[ie] === void 0) {
                    let ce = h(S, k + 1, G), ae = p(S, G, ce);
                    const ve = w(S.slice(ce, ae));
                    D[ie] = ve;
                }
                M = G + 1;
            }while (M < x);
            return D;
        }
        function h(S, T, D) {
            do {
                const x = S.charCodeAt(T);
                if (x !== 32 && x !== 9) return T;
            }while (++T < D);
            return D;
        }
        function p(S, T, D) {
            for(; T > D;){
                const x = S.charCodeAt(--T);
                if (x !== 32 && x !== 9) return T + 1;
            }
            return D;
        }
        function m(S, T, D) {
            const x = D?.encode || encodeURIComponent;
            if (!l.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
            const w = x(T);
            if (!r.test(w)) throw new TypeError(`argument val is invalid: ${T}`);
            let M = S + "=" + w;
            if (!D) return M;
            if (D.maxAge !== void 0) {
                if (!Number.isInteger(D.maxAge)) throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);
                M += "; Max-Age=" + D.maxAge;
            }
            if (D.domain) {
                if (!i.test(D.domain)) throw new TypeError(`option domain is invalid: ${D.domain}`);
                M += "; Domain=" + D.domain;
            }
            if (D.path) {
                if (!u.test(D.path)) throw new TypeError(`option path is invalid: ${D.path}`);
                M += "; Path=" + D.path;
            }
            if (D.expires) {
                if (!O(D.expires) || !Number.isFinite(D.expires.valueOf())) throw new TypeError(`option expires is invalid: ${D.expires}`);
                M += "; Expires=" + D.expires.toUTCString();
            }
            if (D.httpOnly && (M += "; HttpOnly"), D.secure && (M += "; Secure"), D.partitioned && (M += "; Partitioned"), D.priority) switch(typeof D.priority == "string" ? D.priority.toLowerCase() : void 0){
                case "low":
                    M += "; Priority=Low";
                    break;
                case "medium":
                    M += "; Priority=Medium";
                    break;
                case "high":
                    M += "; Priority=High";
                    break;
                default:
                    throw new TypeError(`option priority is invalid: ${D.priority}`);
            }
            if (D.sameSite) switch(typeof D.sameSite == "string" ? D.sameSite.toLowerCase() : D.sameSite){
                case !0:
                case "strict":
                    M += "; SameSite=Strict";
                    break;
                case "lax":
                    M += "; SameSite=Lax";
                    break;
                case "none":
                    M += "; SameSite=None";
                    break;
                default:
                    throw new TypeError(`option sameSite is invalid: ${D.sameSite}`);
            }
            return M;
        }
        function b(S) {
            if (S.indexOf("%") === -1) return S;
            try {
                return decodeURIComponent(S);
            } catch  {
                return S;
            }
        }
        function O(S) {
            return o.call(S) === "[object Date]";
        }
        return Pl;
    }
    fb();
    var ug = "popstate";
    function db(l = {}) {
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
        return pb(r, i, null, l);
    }
    function ke(l, r) {
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
    function hb() {
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
            key: r && r.key || u || hb()
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
    function pb(l, r, i, u = {}) {
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
        function O() {
            h = "POP";
            let w = b(), M = w == null ? null : w - m;
            m = w, p && p({
                action: h,
                location: x.location,
                delta: M
            });
        }
        function S(w, M) {
            h = "PUSH";
            let k = Sc(x.location, w, M);
            m = b() + 1;
            let V = sg(k, m), G = x.createHref(k);
            try {
                d.pushState(V, "", G);
            } catch (Q) {
                if (Q instanceof DOMException && Q.name === "DataCloneError") throw Q;
                o.location.assign(G);
            }
            f && p && p({
                action: h,
                location: x.location,
                delta: 1
            });
        }
        function T(w, M) {
            h = "REPLACE";
            let k = Sc(x.location, w, M);
            m = b();
            let V = sg(k, m), G = x.createHref(k);
            d.replaceState(V, "", G), f && p && p({
                action: h,
                location: x.location,
                delta: 0
            });
        }
        function D(w) {
            let M = o.location.origin !== "null" ? o.location.origin : o.location.href, k = typeof w == "string" ? w : Ql(w);
            return k = k.replace(/ $/, "%20"), ke(M, `No window.location.(origin|href) available to create URL for href: ${k}`), new URL(k, M);
        }
        let x = {
            get action () {
                return h;
            },
            get location () {
                return l(o, d);
            },
            listen (w) {
                if (p) throw new Error("A history only accepts one active listener");
                return o.addEventListener(ug, O), p = w, ()=>{
                    o.removeEventListener(ug, O), p = null;
                };
            },
            createHref (w) {
                return r(o, w);
            },
            createURL: D,
            encodeLocation (w) {
                let M = D(w);
                return {
                    pathname: M.pathname,
                    search: M.search,
                    hash: M.hash
                };
            },
            push: S,
            replace: T,
            go (w) {
                return d.go(w);
            }
        };
        return x;
    }
    function c0(l, r, i = "/") {
        return gb(l, r, i, !1);
    }
    function gb(l, r, i, u) {
        let o = typeof r == "string" ? Da(r) : r, f = An(o.pathname || "/", i);
        if (f == null) return null;
        let d = f0(l);
        mb(d);
        let h = null;
        for(let p = 0; h == null && p < d.length; ++p){
            let m = Rb(f);
            h = Cb(d[p], m, u);
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
            p.relativePath.startsWith("/") && (ke(p.relativePath.startsWith(u), `Absolute route path "${p.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(u.length));
            let m = Rn([
                u,
                p.relativePath
            ]), b = i.concat(p);
            f.children && f.children.length > 0 && (ke(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`), f0(f.children, r, b, m)), !(f.path == null && !f.index) && r.push({
                path: m,
                score: Tb(m, f.index),
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
    function mb(l) {
        l.sort((r, i)=>r.score !== i.score ? i.score - r.score : Db(r.routesMeta.map((u)=>u.childrenIndex), i.routesMeta.map((u)=>u.childrenIndex)));
    }
    var vb = /^:[\w-]+$/, yb = 3, bb = 2, Sb = 1, Eb = 10, Ob = -2, og = (l)=>l === "*";
    function Tb(l, r) {
        let i = l.split("/"), u = i.length;
        return i.some(og) && (u += Ob), r && (u += bb), i.filter((o)=>!og(o)).reduce((o, f)=>o + (vb.test(f) ? yb : f === "" ? Sb : Eb), u);
    }
    function Db(l, r) {
        return l.length === r.length && l.slice(0, -1).every((u, o)=>u === r[o]) ? l[l.length - 1] - r[r.length - 1] : 0;
    }
    function Cb(l, r, i = !1) {
        let { routesMeta: u } = l, o = {}, f = "/", d = [];
        for(let h = 0; h < u.length; ++h){
            let p = u[h], m = h === u.length - 1, b = f === "/" ? r : r.slice(f.length) || "/", O = Cu({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: m
            }, b), S = p.route;
            if (!O && m && i && !u[u.length - 1].route.index && (O = Cu({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, b)), !O) return null;
            Object.assign(o, O.params), d.push({
                params: o,
                pathname: Rn([
                    f,
                    O.pathname
                ]),
                pathnameBase: Mb(Rn([
                    f,
                    O.pathnameBase
                ])),
                route: S
            }), O.pathnameBase !== "/" && (f = Rn([
                f,
                O.pathnameBase
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
        let [i, u] = xb(l.path, l.caseSensitive, l.end), o = r.match(i);
        if (!o) return null;
        let f = o[0], d = f.replace(/(.)\/+$/, "$1"), h = o.slice(1);
        return {
            params: u.reduce((m, { paramName: b, isOptional: O }, S)=>{
                if (b === "*") {
                    let D = h[S] || "";
                    d = f.slice(0, f.length - D.length).replace(/(.)\/+$/, "$1");
                }
                const T = h[S];
                return O && !T ? m[b] = void 0 : m[b] = (T || "").replace(/%2F/g, "/"), m;
            }, {}),
            pathname: f,
            pathnameBase: d,
            pattern: l
        };
    }
    function xb(l, r = !1, i = !0) {
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
    function Rb(l) {
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
    function Ab(l, r = "/") {
        let { pathname: i, search: u = "", hash: o = "" } = typeof l == "string" ? Da(l) : l;
        return {
            pathname: i ? i.startsWith("/") ? i : _b(i, r) : r,
            search: Nb(u),
            hash: jb(o)
        };
    }
    function _b(l, r) {
        let i = r.replace(/\/+$/, "").split("/");
        return l.split("/").forEach((o)=>{
            o === ".." ? i.length > 1 && i.pop() : o !== "." && i.push(o);
        }), i.length > 1 ? i.join("/") : "/";
    }
    function lc(l, r, i, u) {
        return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function wb(l) {
        return l.filter((r, i)=>i === 0 || r.route.path && r.route.path.length > 0);
    }
    function h0(l) {
        let r = wb(l);
        return r.map((i, u)=>u === r.length - 1 ? i.pathname : i.pathnameBase);
    }
    function p0(l, r, i, u = !1) {
        let o;
        typeof l == "string" ? o = Da(l) : (o = {
            ...l
        }, ke(!o.pathname || !o.pathname.includes("?"), lc("?", "pathname", "search", o)), ke(!o.pathname || !o.pathname.includes("#"), lc("#", "pathname", "hash", o)), ke(!o.search || !o.search.includes("#"), lc("#", "search", "hash", o)));
        let f = l === "" || o.pathname === "", d = f ? "/" : o.pathname, h;
        if (d == null) h = i;
        else {
            let O = r.length - 1;
            if (!u && d.startsWith("..")) {
                let S = d.split("/");
                for(; S[0] === "..";)S.shift(), O -= 1;
                o.pathname = S.join("/");
            }
            h = O >= 0 ? r[O] : "/";
        }
        let p = Ab(o, h), m = d && d !== "/" && d.endsWith("/"), b = (f || d === ".") && i.endsWith("/");
        return !p.pathname.endsWith("/") && (m || b) && (p.pathname += "/"), p;
    }
    var Rn = (l)=>l.join("/").replace(/\/\/+/g, "/"), Mb = (l)=>l.replace(/\/+$/, "").replace(/^\/*/, "/"), Nb = (l)=>!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, jb = (l)=>!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l;
    function Pb(l) {
        return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
    }
    var g0 = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(g0);
    var Lb = [
        "GET",
        ...g0
    ];
    new Set(Lb);
    var Ca = E.createContext(null);
    Ca.displayName = "DataRouter";
    var Au = E.createContext(null);
    Au.displayName = "DataRouterState";
    var m0 = E.createContext({
        isTransitioning: !1
    });
    m0.displayName = "ViewTransition";
    var kb = E.createContext(new Map);
    kb.displayName = "Fetchers";
    var Vb = E.createContext(null);
    Vb.displayName = "Await";
    var un = E.createContext(null);
    un.displayName = "Navigation";
    var Yl = E.createContext(null);
    Yl.displayName = "Location";
    var _n = E.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    _n.displayName = "Route";
    var Vc = E.createContext(null);
    Vc.displayName = "RouteError";
    function Bb(l, { relative: r } = {}) {
        ke(Il(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: i, navigator: u } = E.useContext(un), { hash: o, pathname: f, search: d } = Xl(l, {
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
        return E.useContext(Yl) != null;
    }
    function wr() {
        return ke(Il(), "useLocation() may be used only in the context of a <Router> component."), E.useContext(Yl).location;
    }
    var v0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function y0(l) {
        E.useContext(un).static || E.useLayoutEffect(l);
    }
    function zb() {
        let { isDataRoute: l } = E.useContext(_n);
        return l ? Wb() : Ub();
    }
    function Ub() {
        ke(Il(), "useNavigate() may be used only in the context of a <Router> component.");
        let l = E.useContext(Ca), { basename: r, navigator: i } = E.useContext(un), { matches: u } = E.useContext(_n), { pathname: o } = wr(), f = JSON.stringify(h0(u)), d = E.useRef(!1);
        return y0(()=>{
            d.current = !0;
        }), E.useCallback((p, m = {})=>{
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
    E.createContext(null);
    function Xl(l, { relative: r } = {}) {
        let { matches: i } = E.useContext(_n), { pathname: u } = wr(), o = JSON.stringify(h0(i));
        return E.useMemo(()=>p0(l, JSON.parse(o), u, r === "path"), [
            l,
            o,
            u,
            r
        ]);
    }
    function qb(l, r) {
        return b0(l, r);
    }
    function b0(l, r, i, u) {
        ke(Il(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: f } = E.useContext(un), { matches: d } = E.useContext(_n), h = d[d.length - 1], p = h ? h.params : {}, m = h ? h.pathname : "/", b = h ? h.pathnameBase : "/", O = h && h.route;
        {
            let k = O && O.path || "";
            S0(m, !O || k.endsWith("*") || k.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === "/" ? "*" : `${k}/*`}">.`);
        }
        let S = wr(), T;
        if (r) {
            let k = typeof r == "string" ? Da(r) : r;
            ke(b === "/" || k.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${k.pathname}" was given in the \`location\` prop.`), T = k;
        } else T = S;
        let D = T.pathname || "/", x = D;
        if (b !== "/") {
            let k = b.replace(/^\//, "").split("/");
            x = "/" + D.replace(/^\//, "").split("/").slice(k.length).join("/");
        }
        let w = !f && i && i.matches && i.matches.length > 0 ? i.matches : c0(l, {
            pathname: x
        });
        ln(O || w != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `), ln(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let M = Yb(w && w.map((k)=>Object.assign({}, k, {
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
        return r && M ? E.createElement(Yl.Provider, {
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
        }, M) : M;
    }
    function Hb() {
        let l = Fb(), r = Pb(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), i = l instanceof Error ? l.stack : null, u = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: u
        }, f = {
            padding: "2px 4px",
            backgroundColor: u
        }, d = null;
        return console.error("Error handled by React Router default ErrorBoundary:", l), d = E.createElement(E.Fragment, null, E.createElement("p", null, "💿 Hey developer 👋"), E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", E.createElement("code", {
            style: f
        }, "ErrorBoundary"), " or", " ", E.createElement("code", {
            style: f
        }, "errorElement"), " prop on your route.")), E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), i ? E.createElement("pre", {
            style: o
        }, i) : null, d);
    }
    var Qb = E.createElement(Hb, null), Gb = class extends E.Component {
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
            return this.state.error !== void 0 ? E.createElement(_n.Provider, {
                value: this.props.routeContext
            }, E.createElement(Vc.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Kb({ routeContext: l, match: r, children: i }) {
        let u = E.useContext(Ca);
        return u && u.static && u.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = r.route.id), E.createElement(_n.Provider, {
            value: l
        }, i);
    }
    function Yb(l, r = [], i = null, u = null) {
        if (l == null) {
            if (!i) return null;
            if (i.errors) l = i.matches;
            else if (r.length === 0 && !i.initialized && i.matches.length > 0) l = i.matches;
            else return null;
        }
        let o = l, f = i?.errors;
        if (f != null) {
            let p = o.findIndex((m)=>m.route.id && f?.[m.route.id] !== void 0);
            ke(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), o = o.slice(0, Math.min(o.length, p + 1));
        }
        let d = !1, h = -1;
        if (i) for(let p = 0; p < o.length; p++){
            let m = o[p];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = p), m.route.id) {
                let { loaderData: b, errors: O } = i, S = m.route.loader && !b.hasOwnProperty(m.route.id) && (!O || O[m.route.id] === void 0);
                if (m.route.lazy || S) {
                    d = !0, h >= 0 ? o = o.slice(0, h + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((p, m, b)=>{
            let O, S = !1, T = null, D = null;
            i && (O = f && m.route.id ? f[m.route.id] : void 0, T = m.route.errorElement || Qb, d && (h < 0 && b === 0 ? (S0("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), S = !0, D = null) : h === b && (S = !0, D = m.route.hydrateFallbackElement || null)));
            let x = r.concat(o.slice(0, b + 1)), w = ()=>{
                let M;
                return O ? M = T : S ? M = D : m.route.Component ? M = E.createElement(m.route.Component, null) : m.route.element ? M = m.route.element : M = p, E.createElement(Kb, {
                    match: m,
                    routeContext: {
                        outlet: p,
                        matches: x,
                        isDataRoute: i != null
                    },
                    children: M
                });
            };
            return i && (m.route.ErrorBoundary || m.route.errorElement || b === 0) ? E.createElement(Gb, {
                location: i.location,
                revalidation: i.revalidation,
                component: T,
                error: O,
                children: w(),
                routeContext: {
                    outlet: null,
                    matches: x,
                    isDataRoute: !0
                }
            }) : w();
        }, null);
    }
    function Bc(l) {
        return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Ib(l) {
        let r = E.useContext(Ca);
        return ke(r, Bc(l)), r;
    }
    function Xb(l) {
        let r = E.useContext(Au);
        return ke(r, Bc(l)), r;
    }
    function Zb(l) {
        let r = E.useContext(_n);
        return ke(r, Bc(l)), r;
    }
    function zc(l) {
        let r = Zb(l), i = r.matches[r.matches.length - 1];
        return ke(i.route.id, `${l} can only be used on routes that contain a unique "id"`), i.route.id;
    }
    function Jb() {
        return zc("useRouteId");
    }
    function Fb() {
        let l = E.useContext(Vc), r = Xb("useRouteError"), i = zc("useRouteError");
        return l !== void 0 ? l : r.errors?.[i];
    }
    function Wb() {
        let { router: l } = Ib("useNavigate"), r = zc("useNavigate"), i = E.useRef(!1);
        return y0(()=>{
            i.current = !0;
        }), E.useCallback(async (o, f = {})=>{
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
    E.memo($b);
    function $b({ routes: l, future: r, state: i }) {
        return b0(l, void 0, i, r);
    }
    function yu(l) {
        ke(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function e2({ basename: l = "/", children: r = null, location: i, navigationType: u = "POP", navigator: o, static: f = !1 }) {
        ke(!Il(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let d = l.replace(/^\/*/, "/"), h = E.useMemo(()=>({
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
        let { pathname: p = "/", search: m = "", hash: b = "", state: O = null, key: S = "default" } = i, T = E.useMemo(()=>{
            let D = An(p, d);
            return D == null ? null : {
                location: {
                    pathname: D,
                    search: m,
                    hash: b,
                    state: O,
                    key: S
                },
                navigationType: u
            };
        }, [
            d,
            p,
            m,
            b,
            O,
            S,
            u
        ]);
        return ln(T != null, `<Router basename="${d}"> is not able to match the URL "${p}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`), T == null ? null : E.createElement(un.Provider, {
            value: h
        }, E.createElement(Yl.Provider, {
            children: r,
            value: T
        }));
    }
    function t2({ children: l, location: r }) {
        return qb(Ec(l), r);
    }
    function Ec(l, r = []) {
        let i = [];
        return E.Children.forEach(l, (u, o)=>{
            if (!E.isValidElement(u)) return;
            let f = [
                ...r,
                o
            ];
            if (u.type === E.Fragment) {
                i.push.apply(i, Ec(u.props.children, f));
                return;
            }
            ke(u.type === yu, `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), ke(!u.props.index || !u.props.children, "An index route cannot have child routes.");
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
    function n2(l) {
        return _u(l) && l.tagName.toLowerCase() === "button";
    }
    function r2(l) {
        return _u(l) && l.tagName.toLowerCase() === "form";
    }
    function a2(l) {
        return _u(l) && l.tagName.toLowerCase() === "input";
    }
    function l2(l) {
        return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
    }
    function i2(l, r) {
        return l.button === 0 && (!r || r === "_self") && !l2(l);
    }
    var du = null;
    function u2() {
        if (du === null) try {
            new FormData(document.createElement("form"), 0), du = !1;
        } catch  {
            du = !0;
        }
        return du;
    }
    var s2 = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function ic(l) {
        return l != null && !s2.has(l) ? (ln(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Su}"`), null) : l;
    }
    function o2(l, r) {
        let i, u, o, f, d;
        if (r2(l)) {
            let h = l.getAttribute("action");
            u = h ? An(h, r) : null, i = l.getAttribute("method") || bu, o = ic(l.getAttribute("enctype")) || Su, f = new FormData(l);
        } else if (n2(l) || a2(l) && (l.type === "submit" || l.type === "image")) {
            let h = l.form;
            if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = l.getAttribute("formaction") || h.getAttribute("action");
            if (u = p ? An(p, r) : null, i = l.getAttribute("formmethod") || h.getAttribute("method") || bu, o = ic(l.getAttribute("formenctype")) || ic(h.getAttribute("enctype")) || Su, f = new FormData(h, l), !u2()) {
                let { name: m, type: b, value: O } = l;
                if (b === "image") {
                    let S = m ? `${m}.` : "";
                    f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
                } else m && f.append(m, O);
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
    async function c2(l, r) {
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
    function f2(l) {
        return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
    }
    async function d2(l, r, i) {
        let u = await Promise.all(l.map(async (o)=>{
            let f = r.routes[o.route.id];
            if (f) {
                let d = await c2(f, i);
                return d.links ? d.links() : [];
            }
            return [];
        }));
        return m2(u.flat(1).filter(f2).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
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
                let O = p.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: i[0]?.params || {},
                    nextUrl: new URL(l, window.origin),
                    nextParams: p.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof O == "boolean") return O;
            }
            return !0;
        }) : [];
    }
    function h2(l, r, { includeHydrateFallback: i } = {}) {
        return p2(l.map((u)=>{
            let o = r.routes[u.route.id];
            if (!o) return [];
            let f = [
                o.module
            ];
            return o.clientActionModule && (f = f.concat(o.clientActionModule)), o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)), i && o.hydrateFallbackModule && (f = f.concat(o.hydrateFallbackModule)), o.imports && (f = f.concat(o.imports)), f;
        }).flat(1));
    }
    function p2(l) {
        return [
            ...new Set(l)
        ];
    }
    function g2(l) {
        let r = {}, i = Object.keys(l).sort();
        for (let u of i)r[u] = l[u];
        return r;
    }
    function m2(l, r) {
        let i = new Set;
        return new Set(r), l.reduce((u, o)=>{
            let f = JSON.stringify(g2(o));
            return i.has(f) || (i.add(f), u.push({
                key: f,
                link: o
            })), u;
        }, []);
    }
    function v2(l, r) {
        let i = typeof l == "string" ? new URL(l, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : l;
        return i.pathname === "/" ? i.pathname = "_root.data" : r && An(i.pathname, r) === "/" ? i.pathname = `${r.replace(/\/$/, "")}/_root.data` : i.pathname = `${i.pathname.replace(/\/$/, "")}.data`, i;
    }
    function E0() {
        let l = E.useContext(Ca);
        return Uc(l, "You must render this element inside a <DataRouterContext.Provider> element"), l;
    }
    function y2() {
        let l = E.useContext(Au);
        return Uc(l, "You must render this element inside a <DataRouterStateContext.Provider> element"), l;
    }
    var qc = E.createContext(void 0);
    qc.displayName = "FrameworkContext";
    function O0() {
        let l = E.useContext(qc);
        return Uc(l, "You must render this element inside a <HydratedRouter> element"), l;
    }
    function b2(l, r) {
        let i = E.useContext(qc), [u, o] = E.useState(!1), [f, d] = E.useState(!1), { onFocus: h, onBlur: p, onMouseEnter: m, onMouseLeave: b, onTouchStart: O } = r, S = E.useRef(null);
        E.useEffect(()=>{
            if (l === "render" && d(!0), l === "viewport") {
                let x = (M)=>{
                    M.forEach((k)=>{
                        d(k.isIntersecting);
                    });
                }, w = new IntersectionObserver(x, {
                    threshold: .5
                });
                return S.current && w.observe(S.current), ()=>{
                    w.disconnect();
                };
            }
        }, [
            l
        ]), E.useEffect(()=>{
            if (u) {
                let x = setTimeout(()=>{
                    d(!0);
                }, 100);
                return ()=>{
                    clearTimeout(x);
                };
            }
        }, [
            u
        ]);
        let T = ()=>{
            o(!0);
        }, D = ()=>{
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
                onFocus: Ll(h, T),
                onBlur: Ll(p, D),
                onMouseEnter: Ll(m, T),
                onMouseLeave: Ll(b, D),
                onTouchStart: Ll(O, T)
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
    function S2({ page: l, ...r }) {
        let { router: i } = E0(), u = E.useMemo(()=>c0(i.routes, l, i.basename), [
            i.routes,
            l,
            i.basename
        ]);
        return u ? E.createElement(O2, {
            page: l,
            matches: u,
            ...r
        }) : null;
    }
    function E2(l) {
        let { manifest: r, routeModules: i } = O0(), [u, o] = E.useState([]);
        return E.useEffect(()=>{
            let f = !1;
            return d2(l, r, i).then((d)=>{
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
    function O2({ page: l, matches: r, ...i }) {
        let u = wr(), { manifest: o, routeModules: f } = O0(), { basename: d } = E0(), { loaderData: h, matches: p } = y2(), m = E.useMemo(()=>fg(l, r, p, o, u, "data"), [
            l,
            r,
            p,
            o,
            u
        ]), b = E.useMemo(()=>fg(l, r, p, o, u, "assets"), [
            l,
            r,
            p,
            o,
            u
        ]), O = E.useMemo(()=>{
            if (l === u.pathname + u.search + u.hash) return [];
            let D = new Set, x = !1;
            if (r.forEach((M)=>{
                let k = o.routes[M.route.id];
                !k || !k.hasLoader || (!m.some((V)=>V.route.id === M.route.id) && M.route.id in h && f[M.route.id]?.shouldRevalidate || k.hasClientLoader ? x = !0 : D.add(M.route.id));
            }), D.size === 0) return [];
            let w = v2(l, d);
            return x && D.size > 0 && w.searchParams.set("_routes", r.filter((M)=>D.has(M.route.id)).map((M)=>M.route.id).join(",")), [
                w.pathname + w.search
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
        ]), S = E.useMemo(()=>h2(b, o), [
            b,
            o
        ]), T = E2(b);
        return E.createElement(E.Fragment, null, O.map((D)=>E.createElement("link", {
                key: D,
                rel: "prefetch",
                as: "fetch",
                href: D,
                ...i
            })), S.map((D)=>E.createElement("link", {
                key: D,
                rel: "modulepreload",
                href: D,
                ...i
            })), T.map(({ key: D, link: x })=>E.createElement("link", {
                key: D,
                ...x
            })));
    }
    function T2(...l) {
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
    function D2({ basename: l, children: r, window: i }) {
        let u = E.useRef();
        u.current == null && (u.current = db({
            window: i,
            v5Compat: !0
        }));
        let o = u.current, [f, d] = E.useState({
            action: o.action,
            location: o.location
        }), h = E.useCallback((p)=>{
            E.startTransition(()=>d(p));
        }, [
            d
        ]);
        return E.useLayoutEffect(()=>o.listen(h), [
            o,
            h
        ]), E.createElement(e2, {
            basename: l,
            children: r,
            location: f.location,
            navigationType: f.action,
            navigator: o
        });
    }
    var D0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, zl = E.forwardRef(function({ onClick: r, discover: i = "render", prefetch: u = "none", relative: o, reloadDocument: f, replace: d, state: h, target: p, to: m, preventScrollReset: b, viewTransition: O, ...S }, T) {
        let { basename: D } = E.useContext(un), x = typeof m == "string" && D0.test(m), w, M = !1;
        if (typeof m == "string" && x && (w = m, T0)) try {
            let ae = new URL(window.location.href), ve = m.startsWith("//") ? new URL(ae.protocol + m) : new URL(m), Ve = An(ve.pathname, D);
            ve.origin === ae.origin && Ve != null ? m = Ve + ve.search + ve.hash : M = !0;
        } catch  {
            ln(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let k = Bb(m, {
            relative: o
        }), [V, G, Q] = b2(u, S), X = A2(m, {
            replace: d,
            state: h,
            target: p,
            preventScrollReset: b,
            relative: o,
            viewTransition: O
        });
        function ie(ae) {
            r && r(ae), ae.defaultPrevented || X(ae);
        }
        let ce = E.createElement("a", {
            ...S,
            ...Q,
            href: w || k,
            onClick: M || f ? r : ie,
            ref: T2(T, G),
            target: p,
            "data-discover": !x && i === "render" ? "true" : void 0
        });
        return V && !x ? E.createElement(E.Fragment, null, ce, E.createElement(S2, {
            page: k
        })) : ce;
    });
    zl.displayName = "Link";
    var C2 = E.forwardRef(function({ "aria-current": r = "page", caseSensitive: i = !1, className: u = "", end: o = !1, style: f, to: d, viewTransition: h, children: p, ...m }, b) {
        let O = Xl(d, {
            relative: m.relative
        }), S = wr(), T = E.useContext(Au), { navigator: D, basename: x } = E.useContext(un), w = T != null && j2(O) && h === !0, M = D.encodeLocation ? D.encodeLocation(O).pathname : O.pathname, k = S.pathname, V = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
        i || (k = k.toLowerCase(), V = V ? V.toLowerCase() : null, M = M.toLowerCase()), V && x && (V = An(V, x) || V);
        const G = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
        let Q = k === M || !o && k.startsWith(M) && k.charAt(G) === "/", X = V != null && (V === M || !o && V.startsWith(M) && V.charAt(M.length) === "/"), ie = {
            isActive: Q,
            isPending: X,
            isTransitioning: w
        }, ce = Q ? r : void 0, ae;
        typeof u == "function" ? ae = u(ie) : ae = [
            u,
            Q ? "active" : null,
            X ? "pending" : null,
            w ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let ve = typeof f == "function" ? f(ie) : f;
        return E.createElement(zl, {
            ...m,
            "aria-current": ce,
            className: ae,
            ref: b,
            style: ve,
            to: d,
            viewTransition: h
        }, typeof p == "function" ? p(ie) : p);
    });
    C2.displayName = "NavLink";
    var x2 = E.forwardRef(({ discover: l = "render", fetcherKey: r, navigate: i, reloadDocument: u, replace: o, state: f, method: d = bu, action: h, onSubmit: p, relative: m, preventScrollReset: b, viewTransition: O, ...S }, T)=>{
        let D = M2(), x = N2(h, {
            relative: m
        }), w = d.toLowerCase() === "get" ? "get" : "post", M = typeof h == "string" && D0.test(h), k = (V)=>{
            if (p && p(V), V.defaultPrevented) return;
            V.preventDefault();
            let G = V.nativeEvent.submitter, Q = G?.getAttribute("formmethod") || d;
            D(G || V.currentTarget, {
                fetcherKey: r,
                method: Q,
                navigate: i,
                replace: o,
                state: f,
                relative: m,
                preventScrollReset: b,
                viewTransition: O
            });
        };
        return E.createElement("form", {
            ref: T,
            method: w,
            action: x,
            onSubmit: u ? p : k,
            ...S,
            "data-discover": !M && l === "render" ? "true" : void 0
        });
    });
    x2.displayName = "Form";
    function R2(l) {
        return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function C0(l) {
        let r = E.useContext(Ca);
        return ke(r, R2(l)), r;
    }
    function A2(l, { target: r, replace: i, state: u, preventScrollReset: o, relative: f, viewTransition: d } = {}) {
        let h = zb(), p = wr(), m = Xl(l, {
            relative: f
        });
        return E.useCallback((b)=>{
            if (i2(b, r)) {
                b.preventDefault();
                let O = i !== void 0 ? i : Ql(p) === Ql(m);
                h(l, {
                    replace: O,
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
    var _2 = 0, w2 = ()=>`__${String(++_2)}__`;
    function M2() {
        let { router: l } = C0("useSubmit"), { basename: r } = E.useContext(un), i = Jb();
        return E.useCallback(async (u, o = {})=>{
            let { action: f, method: d, encType: h, formData: p, body: m } = o2(u, r);
            if (o.navigate === !1) {
                let b = o.fetcherKey || w2();
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
    function N2(l, { relative: r } = {}) {
        let { basename: i } = E.useContext(un), u = E.useContext(_n);
        ke(u, "useFormAction must be used inside a RouteContext");
        let [o] = u.matches.slice(-1), f = {
            ...Xl(l || ".", {
                relative: r
            })
        }, d = wr();
        if (l == null) {
            f.search = d.search;
            let h = new URLSearchParams(f.search), p = h.getAll("index");
            if (p.some((b)=>b === "")) {
                h.delete("index"), p.filter((O)=>O).forEach((O)=>h.append("index", O));
                let b = h.toString();
                f.search = b ? `?${b}` : "";
            }
        }
        return (!l || l === ".") && o.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Rn([
            i,
            f.pathname
        ])), Ql(f);
    }
    function j2(l, r = {}) {
        let i = E.useContext(m0);
        ke(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
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
    function P2() {
        if (dg) return sc;
        dg = 1;
        var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        return sc = l, sc;
    }
    var oc, hg;
    function L2() {
        if (hg) return oc;
        hg = 1;
        var l = P2();
        function r() {}
        function i() {}
        return i.resetWarningCache = r, oc = function() {
            function u(d, h, p, m, b, O) {
                if (O !== l) {
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
    function k2() {
        return pg || (pg = 1, uc.exports = L2()()), uc.exports;
    }
    var V2 = k2();
    const Ze = wc(V2), x0 = gv.memo(({ hasGameStarted: l, isGameOver: r, isWhiteTurn: i, isFlipped: u, timerDuration: o })=>{
        const f = ur(), [d, h] = E.useState(o), [p, m] = E.useState(o), b = E.useRef(null);
        E.useEffect(()=>{
            l && (h(o), m(o));
        }, [
            l,
            r,
            o
        ]), E.useEffect(()=>{
            r || (d === 0 ? f(bc(!0, "Black Won by Time")) : p === 0 && f(bc(!0, "White Won by Time")));
        }, [
            d,
            p,
            r,
            f
        ]), E.useEffect(()=>{
            if (!l || r) {
                b.current && (clearInterval(b.current), b.current = null), h(o), m(o);
                return;
            }
            if (!b.current) return b.current = setInterval(()=>{
                i ? h((T)=>T <= 1 ? (clearInterval(b.current), b.current = null, 0) : T - 1) : m((T)=>T <= 1 ? (clearInterval(b.current), b.current = null, 0) : T - 1);
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
        const O = i ? "active-turn" : "", S = i ? "" : "active-turn";
        return y.jsx("div", {
            className: "left-panel",
            children: y.jsx("div", {
                className: "clocks-container",
                children: u ? y.jsxs(y.Fragment, {
                    children: [
                        y.jsxs("div", {
                            className: `clock ${O}`,
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
                            className: `clock ${O}`,
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
    const B2 = ({ moveHistory: l })=>{
        const r = E.useRef(null);
        return E.useEffect(()=>{
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
    }, z2 = "data:audio/mpeg;base64,SUQzBAAAAAABH1RFTkMAAAALAAADUHJvIFRvb2xzAFRYWFgAAAAjAAADb3JpZ2luYXRvcl9yZWZlcmVuY2UAYWFPNEt0IUJLdlNrAFREUkMAAAAMAAADMjAxOS0wNC0yMQBUWFhYAAAAGgAAA3RpbWVfcmVmZXJlbmNlADE3MjgwMDAwMABUU1NFAAAADwAAA0xhdmY1OC4yOS4xMDAAAAAAAAAAAAAAAP/7VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEluZm8AAAAPAAAACAAADMAALS0tLS0tLS0tLS0tS0tLS0tLS0tLS0tLaWlpaWlpaWlpaWlpaYeHh4eHh4eHh4eHh6WlpaWlpaWlpaWlpaXDw8PDw8PDw8PDw8Ph4eHh4eHh4eHh4eHh////////////////AAAAAExhdmM1OC41NAAAAAAAAAAAAAAAACQE5gAAAAAAAAzAei0vIf/7lGQAAAMuHciFc0ACKuFWcqGYABC8uU9ZrIAQvopiQzUgADDQIHQuY1I5kkbmEQMZCOBo5LGfhoY3Q5wCCG7FcZeABikmmUyCEDYxYSDJgwFBCeTceaYaoQlKYUGq8uYBgjTQICBQBgl7O5DEOXqSxunjcvp8+///nXp6enpKSkpMGQ8AAAAAVASoEJwMWaIIFnEIOBiwgDC0xA4+sH1AgUBA4XeD/KHP/KOBB2Iz/8oc4PgAAAV9uRSW0SBsALDmsjFUiIVimojFGpsmc0mEHFEgmImJJGdXBQmCU7d1xiRADooPLkDg3Tlo1aDtFMBZFBHFy8KHqaa4WEtu/DhbYDWszG5ukhTXYo8butg1ayrU0pl/f/3Wgvdbk5SZ3O1cr+W98/79S93//LKmEAY9bwE5c274qni5H6i+zFmyQGVb9iwZ0OLDTNIQtIz9JN/B44YsS8DsQxmDdxty3QJkkDLoPRNX/t/KqgA/AQBAxudAcqzBpfMoGwyjGTUw1P/7lGQKjNP7PEoXciAAMKIIwuy8AA40mRItpHRAvgnjjPSKCMvrY0aVAMPiIWG3ouayUpjwZmEhIIwqYgDJigBC2gLABTENAWoLgckQqLhHCQIMjBYcIJGJAiDJF01GVNT02U5w6Ymqkkq1o2RZToLqSUtSSWu3mJrRpLqW1J/3WrutaKKLTM9mwMnW54TBIAGFVQwoBg8EHKXCBUOHL9KRM69DVlqA5E1S5NUpxHiEnmW4ucVtnVdo/gj6n/RrCIeMjIUgxXINrUzbAEyO4OajQEgBVIMREDMUw3IcNDWTru83qTNagzJCciABx9FmgqgQNEgUFMWrKzNaZW77AQ0wAJsgbBUUAkiSRY4CjAJEG/tUL0goDpAuD7n0KNdIodOvt29UXOgUNVm1Xu+z+ixQcg53hkEpCFI8eoMUHKeQUgQEE6BpMpOCCDHKVHHAfXCFxiNQbqBdFFRRHGsgUjbVBCADEgMKGps3iDRM0aBOSPgcfGbNBjqeY45m9Uxgif/7lGQPjNNfIsMTeCtANMJ4kWMpOguUTwwtZYzA/InhQawhmKXTNCmRp5MVDOU1/A3D4dVADBS8Vgh54GUt0FgsCkLuOpTUciUDuFmhr2R5aCScrDJHGOjw66jPSLou5cks/9C9hKt65fbxCGR12hUqwEw5IgHIQUIpsF3EyB3sSWMNwxgDIjKkoDEJCkU5YqdqzP3kiKhkneX0NGrTjtZSzCLdP2oAvMgcm5DmDHnTqnTWgKIZwydHMZpYcXMG3Bt2YmmGDjFGj4raZzajqdEAqPzLvQY5a44rs5OAqNDz21SsJBpx2pinhsBHHrW6/1ertWxdFC6kMRXqeq2l96eK5CnRDHlY0HNg1NPRF9R0w4mMNcRMn+KTIFYmDImSMBQgecB/CuAHYZKokKsCz36tsNXiyaeNwksVdC/8AWiwSWpCUIAsSwTGQoGE5hscCkptEJssKg5g0Z4VZyyhxHhwBZka4OGGSIGtSk0ZRZGMcFkRqGWmOqxCsj40bgcsg//7lGQfDtL/IEKDellwSQKIMGd4Ggx4TwYtc0aQ9YjhxbxoiEeWJ246o3+K9t3wx/VytFNdclWyUV6+1Ewr6jWhvrdlvy7wBZExnztBL8DMEbOFGyERtxgBEo3SGNxVTKjcRm5goKBAZYM1YvPWgqY0vRfEJQYKCmjsZVFld0+7h4ZWtQ7INGw/RkkC4uXSEQASUYVRANQMqMZhOkDBSQBXoyqRgwynKh+YKFAOjRgYHGFinQIGNAGJiCxhMkeBpgsjas4THpuGIRFo9NXbv3KaRCRxwqNLAit5UBKeWi307S2//I2KJEsq76Nt/4yVZ5uowi25CHEwEGMPDjNogxGOkjbc0CMEoJ5YcfMmRAyV/VhDJiCyQVAQQlsvFb87ZgZrzKqCpZj33R4SVdrRuYprI0BmkhpQXnap5yP+ZKqm3zZoTMZ/CmI8x4x0UOBzKYbeIobmZZnPGnjEiqIxKMmVoPGMFvHCFY0ZCIG9y4BQc8VVaYkmvvbDXrbOXaenpf/7lGQoD/LbH7+DemMwTSPIEG8naExogvgObYlBTY8fwb0lmG8tWwfjGz//yvZ9DkAYHAycYyUNTOTEjXGAw93MsfQSemCox1SgYKamTuhACElghTDoSIA01gsyEMAQVAGwRiDsIeuwhTFYKi8s1AzCwOaim284yvHVLQpWNhUnmREkJOALFU5M6DY6jOKQg5wPTn6uNFagMsH4gRybSBkMxAAK2U6onMOOzPyQxolMHAAQPD0WAQhHNO0OS1Fl9LggA2EY4m68tDf4XfhirsVuZi09Z1pL3R5AzknH//5ZsRAhmPAprSYnqbRmmHpgBwDVDA4kfNdWThk0ws5PiQTJFsylw4pAQHjwZTABS3LZwqgGRzdV9MuZ6mgtQRAECyM45NEvStZXzx+ZDLxXpzYYF/TVjAIHzBxIwIbM7FDG1QARhqB+dPJg6bOtfTyVY5NBOCcDBjsxsOMtNjGFk+4TM3NCI2BTHbFVlWoy3gIyABx4io7bFXutzXJA8+c1Z//7lGQmD/LYID6DeTPAVgQH0G8GhAuUgPYOaStBNI5fgbyVoQtTT/eYX/qrSCTKRW1TaF9Eo2ckRFDeLgZlGodSREXAO5JprwOmJjBgdOpmDFpgRAZHHArOMiGTUhswQCDB4vsYTDB0+4Id8yjW4509JXslUzGzSylk0HbW/di7Kmi9cC2LF6nrVOIAYZ5NRnwWjKgNKL4xsDjRsrM1EQBU8xIyQRJCNGexCePiaCuCQZuUpkFZi05gnIhQJfGfTrmeZ2RIc4Sb87CHCkDGZC2OhaKsZ3tXO6yFwpH46V1YhPrzT2d8SVVVgQFGNFxltsaWxHmtAEXCagNShSFHCRo1IVMXMwRicYxvGnBCBBTfVdAVGGS1gplphc5orBJt93mg+/NOKgdzXJ21IPMQRVAHJ211RoSJjscXTKEAS9TSRI3dZPKOTVyQzsxBcYmEb8SGJqZk4OaeDmHXp7+i4giUIFAEe/zhP+glTdbmyd35Q1vCW7BxY8gc7PsyvK9Jqf/7lGQmj/KeID2DeTOwVEPH0HNoPgoQUPYMbyGJVA8egc0Nce6rSTHaP6X/GAYJDUWIBggPmP4cZ2HoVCgQ2GgDppP+bPLmsmh1LMZoWGFBRNGFwS9AyRCgYFwUDAosBtEwaECgJNK9bmWWapqtCGGGVVnvt9yzd4hzBHBtDuoCGEETSxADNAKJThz4zIDMPPDTUoyI5OINzb0gy8sNQgTOCYyNTNOGzSjUyZgsSJHGIKZCKACRqbNacVmzgSOJtN+rqZjk/pNV7tqigVI2yiT5MEggw0NRYTmPkYaBdpuogGWwWYPA5FKzcg6OTpI8uQ2yEyI8w+g2uc9VApSEo4HVyyCcZqmaQCtrpMPZIw3sSZDIL2dZ62a73yt3lIubUMfRLMwVMCeNOSMA/Hxp18xg7J6iJxZAoVNJFMVgDUUE/zU1cQeZCgs1Bsx8IywQ1ZwVDgoq8S7nGglUrxqavVA0t1vVXdmta2bz/+YYVVJJdGFVFF83z0w841aMFgTShP/7lEQtj/JfFLiDW9ICSeJ3AGssWEAAAaQAAAAgAAA0gAAABDSGTXyjF3DZrwOZO9wyHRWAyzQOCZKSCAoKLog0RDMMJROf90k9mHq9BI7ULmz05WPEhs0x27/3fUSJTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==", U2 = "/chess-frontend/assets/capture-ZghC9U6S.mp3", q2 = "/chess-frontend/assets/board-start-D1dzlFLG.mp3", R0 = ()=>{
        const { enableSound: l } = kc.getState().settings;
        return l;
    }, Oc = (l)=>{
        if (!R0()) return;
        let r;
        switch(l){
            case "move":
                r = new Audio(z2);
                break;
            case "capture":
                r = new Audio(U2);
                break;
            default:
                return;
        }
        r.play();
    }, Tc = ()=>{
        if (!R0()) return;
        new Audio(q2).play();
    };
    function H2(l, r) {
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
    }, Q2 = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7
    }, G2 = {
        a: 7,
        b: 6,
        c: 5,
        d: 4,
        e: 3,
        f: 2,
        g: 1,
        h: 0
    }, K2 = [
        7,
        6,
        5,
        4,
        3,
        2,
        1,
        0
    ], Y2 = [
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
        const u = r / 8, o = l === "white" ? Q2 : G2, f = l === "white" ? K2 : Y2, d = o[i[0]] * u + u / 2, h = f[parseInt(i[1], 10) - 1] * u + u / 2;
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
    function I2(l, r) {
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
        return l === "start" ? Eu : typeof l == "string" ? X2(l) : l;
    }
    function X2(l) {
        if (!Z2(l)) return {};
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
                i[p] = F2(f[h]), d = d + 1;
            }
            u = u - 1;
        }
        return i;
    }
    function Z2(l) {
        l = l.replace(/ .+$/, ""), l = J2(l);
        const r = l.split("/");
        if (r.length !== 8) return !1;
        for(let i = 0; i < 8; i++)if (r[i].length !== 8 || r[i].search(/[^kqrnbpKQRNBP1]/) !== -1) return !1;
        return !0;
    }
    function J2(l) {
        return l.replace(/8/g, "11111111").replace(/7/g, "1111111").replace(/6/g, "111111").replace(/5/g, "11111").replace(/4/g, "1111").replace(/3/g, "111").replace(/2/g, "11");
    }
    function F2(l) {
        return l.toLowerCase() === l ? "b" + l.toUpperCase() : "w" + l.toUpperCase();
    }
    const W2 = (l, r = !0, i, u)=>{
        const [o, f] = E.useState([]), [d, h] = E.useState([]), [p, m] = E.useState();
        E.useEffect(()=>{
            Array.isArray(l) && (b(), f(l?.filter((D)=>D[0] !== D[1])));
        }, [
            l
        ]), E.useEffect(()=>{
            i?.(d);
        }, [
            d
        ]);
        function b() {
            h([]), m(void 0);
        }
        const O = (D, x)=>{
            r && m([
                D,
                x,
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
            drawNewArrow: O,
            setArrows: h,
            onArrowDrawEnd: (D, x)=>{
                if (D === x || !r) return;
                let w;
                const M = [
                    D,
                    x,
                    u
                ];
                S.every(([V, G])=>!(V === D && G === x)) ? w = [
                    ...d,
                    M
                ] : w = d.filter(([V, G])=>!(V === D && G === x)), m(void 0), h(w);
            }
        };
    }, A0 = E.createContext({}), wn = ()=>E.useContext(A0), $2 = E.forwardRef(({ allowDragOutsideBoard: l = !0, animationDuration: r = 300, areArrowsAllowed: i = !0, arePiecesDraggable: u = !0, arePremovesAllowed: o = !1, autoPromoteToQueen: f = !1, boardOrientation: d = "white", boardWidth: h, children: p, clearPremovesOnRightClick: m = !0, customArrows: b, customArrowColor: O = "rgb(255,170,0)", customBoardStyle: S, customNotationStyle: T, customDarkSquareStyle: D = {
        backgroundColor: "#B58863"
    }, customDropSquareStyle: x = {
        boxShadow: "inset 0 0 1px 6px rgba(255,255,255,0.75)"
    }, customLightSquareStyle: w = {
        backgroundColor: "#F0D9B5"
    }, customPieces: M, customPremoveDarkSquareStyle: k = {
        backgroundColor: "#A42323"
    }, customPremoveLightSquareStyle: V = {
        backgroundColor: "#BD2828"
    }, customSquare: G = "div", customSquareStyles: Q, dropOffBoardAction: X = "snapback", id: ie = 0, isDraggablePiece: ce = ()=>!0, getPositionObject: ae = ()=>{}, onArrowsChange: ve = ()=>{}, onDragOverSquare: Ve = ()=>{}, onMouseOutSquare: he = ()=>{}, onMouseOverSquare: Pe = ()=>{}, onPieceClick: gt = ()=>{}, onPieceDragBegin: we = ()=>{}, onPieceDragEnd: B = ()=>{}, onPieceDrop: K = ()=>!0, onPieceDropOffBoard: W = ()=>{}, onPromotionCheck: Ee = (Ge, ct, Mn)=>(Mn === "wP" && Ge[1] === "7" && ct[1] === "8" || Mn === "bP" && Ge[1] === "2" && ct[1] === "1") && Math.abs(Ge.charCodeAt(0) - ct.charCodeAt(0)) <= 1, onPromotionPieceSelect: R = ()=>!0, onSparePieceDrop: H = ()=>!0, onSquareClick: I = ()=>{}, onSquareRightClick: Y = ()=>{}, position: J = "start", promotionDialogVariant: me = "default", promotionToSquare: ee = null, showBoardNotation: ne = !0, showPromotionDialog: ye = !1, snapToCursor: mt = !0 }, sn)=>{
        const [Ge, ct] = E.useState(vg(J)), [Mn, xa] = E.useState({
            removed: {},
            added: {}
        }), [Ra, Nn] = E.useState(void 0), [jt, Aa] = E.useState(ye && !f), [Zl, _a] = E.useState(null), [Nr, wa] = E.useState(ee), [Ma, Na] = E.useState([]), Ft = E.useRef(Ma), [on, Je] = E.useState(), [Wt, vt] = E.useState(Object.assign(Object.assign({}, gg), M)), [Lu, jr] = E.useState(!1), [ja, Pr] = E.useState(), [cn, Pt] = E.useState(!1), [Lr, sr] = E.useState(null);
        E.useImperativeHandle(sn, ()=>({
                clearPremoves (Oe = !0) {
                    jn(Oe);
                }
            })), E.useEffect(()=>{
            vt(Object.assign(Object.assign({}, gg), M));
        }, [
            M
        ]), E.useEffect(()=>{
            Aa(ye), wa(ee);
        }, [
            ee,
            ye
        ]), E.useEffect(()=>{
            var Oe, Me, bt;
            Br();
            const Ke = vg(J), It = I2(Ge, Ke), rt = ((Oe = Object.keys(It.added)) === null || Oe === void 0 ? void 0 : Oe.length) <= 2 ? (bt = (Me = Object.entries(It.added)) === null || Me === void 0 ? void 0 : Me[0]) === null || bt === void 0 ? void 0 : bt[1][0] : void 0;
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
        const { arrows: ku, newArrow: Jl, clearArrows: kr, drawNewArrow: Pa, onArrowDrawEnd: or } = W2(b, i, ve, O);
        function Vu(Oe, Me, bt, Ke) {
            if (Oe === Me) return;
            if (kr(), o && cn || o && (Ra === bt[0] || Ft.current.filter((rt)=>rt.piece[0] === bt[0]).length > 0)) {
                const rt = [
                    ...Ft.current
                ];
                rt.push({
                    sourceSq: Oe,
                    targetSq: Me,
                    piece: bt
                }), Ft.current = rt, Na([
                    ...rt
                ]), Br();
                return;
            }
            if (!o && cn) return;
            const It = Object.assign({}, Ge);
            jr(!!Ke), Nn(bt[0]), K.length ? K(Oe, Me, bt) || (jn(), jr(!1)) : (delete It[Oe], It[Me] = bt, ct(It)), Br(), ae(It);
        }
        function Fl(Oe) {
            const Me = Object.assign({}, Ge);
            delete Me[Oe], ct(Me), ae(Me);
        }
        function Vr(Oe) {
            if (Ft.current.length === 0) return;
            const Me = Ft.current[0];
            if (Me.piece[0] !== void 0 && Me.piece[0] !== Oe && K.length) if (Nn(Me.piece[0]), jr(!0), K(Me.sourceSq, Me.targetSq, Me.piece)) {
                const Ke = [
                    ...Ft.current
                ];
                Ke.shift(), Ft.current = Ke, Na([
                    ...Ke
                ]);
            } else jn();
        }
        function La(Oe, Me) {
            if (!H(Oe, Me)) return;
            const Ke = Object.assign({}, Ge);
            Ke[Me] = Oe, ct(Ke), ae(Ke);
        }
        function jn(Oe = !0) {
            Oe && Nn(void 0), Ft.current = [], Na([]);
        }
        function Br() {
            _a(null), wa(null), Aa(!1);
        }
        function Bu(Oe) {
            Je(Oe);
        }
        function $t(Oe) {
            if (on) {
                if (on === Oe) {
                    Je(void 0), m && jn(!1), Y(Oe);
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
            customArrowColor: O,
            customBoardStyle: S,
            customDarkSquareStyle: D,
            customDropSquareStyle: x,
            customLightSquareStyle: w,
            customNotationStyle: T,
            customPremoveDarkSquareStyle: k,
            customPremoveLightSquareStyle: V,
            customSquare: G,
            customSquareStyles: Q,
            deletePieceFromSquare: Fl,
            drawNewArrow: Pa,
            dropOffBoardAction: X,
            handleSetPosition: Vu,
            handleSparePieceDrop: La,
            id: ie,
            isDraggablePiece: ce,
            isWaitingForAnimation: cn,
            lastPieceColour: Ra,
            lastSquareDraggedOver: Lr,
            newArrow: Jl,
            onArrowDrawEnd: or,
            onDragOverSquare: Ve,
            onMouseOutSquare: he,
            onMouseOverSquare: Pe,
            onPieceClick: gt,
            onPieceDragBegin: we,
            onPieceDragEnd: B,
            onPieceDrop: K,
            onPieceDropOffBoard: W,
            onPromotionCheck: Ee,
            onPromotionPieceSelect: R,
            onRightClickDown: Bu,
            onRightClickUp: $t,
            onSparePieceDrop: H,
            onSquareClick: I,
            positionDifferences: Mn,
            premoves: Ma,
            promoteFromSquare: Zl,
            promoteToSquare: Nr,
            promotionDialogVariant: me,
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
    function eS({ row: l, col: r }) {
        const { boardOrientation: i, boardWidth: u, customDarkSquareStyle: o, customLightSquareStyle: f, customNotationStyle: d } = wn(), h = f.backgroundColor, p = o.backgroundColor, m = r === 0, b = l === 7, O = m && b;
        function S() {
            return i === "white" ? 8 - l : l + 1;
        }
        function T() {
            return i === "black" ? Gl[7 - r] : Gl[r];
        }
        function D() {
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
                        children: T()
                    }))
                ]
            });
        }
        function x() {
            return y.jsx("div", Object.assign({
                style: Object.assign(Object.assign({
                    userSelect: "none",
                    zIndex: 3,
                    position: "absolute"
                }, {
                    color: r % 2 !== 0 ? p : h
                }), yg(u, d))
            }, {
                children: T()
            }));
        }
        function w() {
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
        return O ? D() : b ? x() : m ? w() : null;
    }
    const yg = (l, r)=>Object.assign({
            alignSelf: "flex-end",
            paddingLeft: l / 8 - l / 48,
            fontSize: l / 48
        }, r), bg = (l, r)=>Object.assign({
            alignSelf: "flex-start",
            paddingRight: l / 8 - l / 48,
            fontSize: l / 48
        }, r), _0 = E.createContext({
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
    function tS(l) {
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
        function O(x) {
            if (typeof x != "function") throw new Error(Gt(4));
            if (p) throw new Error(Gt(5));
            var w = !0;
            return m(), h.push(x), function() {
                if (w) {
                    if (p) throw new Error(Gt(6));
                    w = !1, m();
                    var k = h.indexOf(x);
                    h.splice(k, 1), d = null;
                }
            };
        }
        function S(x) {
            if (!tS(x)) throw new Error(Gt(7));
            if (typeof x.type > "u") throw new Error(Gt(8));
            if (p) throw new Error(Gt(9));
            try {
                p = !0, f = o(f, x);
            } finally{
                p = !1;
            }
            for(var w = d = h, M = 0; M < w.length; M++){
                var k = w[M];
                k();
            }
            return x;
        }
        function T(x) {
            if (typeof x != "function") throw new Error(Gt(10));
            o = x, S({
                type: Og.REPLACE
            });
        }
        function D() {
            var x, w = O;
            return x = {
                subscribe: function(k) {
                    if (typeof k != "object" || k === null) throw new Error(Gt(11));
                    function V() {
                        k.next && k.next(b());
                    }
                    V();
                    var G = w(V);
                    return {
                        unsubscribe: G
                    };
                }
            }, x[Sg] = function() {
                return this;
            }, x;
        }
        return S({
            type: Og.INIT
        }), u = {
            dispatch: S,
            subscribe: O,
            getState: b,
            replaceReducer: T
        }, u[Sg] = D, u;
    }
    function ue(l, r, ...i) {
        if (nS() && r === void 0) throw new Error("invariant requires an error message argument");
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
    function nS() {
        return typeof process < "u" && !0;
    }
    function rS(l, r, i) {
        return r.split(".").reduce((u, o)=>u && u[o] ? u[o] : i || null, l);
    }
    function aS(l, r) {
        return l.filter((i)=>i !== r);
    }
    function M0(l) {
        return typeof l == "object";
    }
    function lS(l, r) {
        const i = new Map, u = (f)=>{
            i.set(f, i.has(f) ? i.get(f) + 1 : 1);
        };
        l.forEach(u), r.forEach(u);
        const o = [];
        return i.forEach((f, d)=>{
            f === 1 && o.push(d);
        }), o;
    }
    function iS(l, r) {
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
    const uS = {
        type: Hc,
        payload: {
            clientOffset: null,
            sourceClientOffset: null
        }
    };
    function sS(l) {
        return function(i = [], u = {
            publishSource: !0
        }) {
            const { publishSource: o = !0, clientOffset: f, getSourceClientOffset: d } = u, h = l.getMonitor(), p = l.getRegistry();
            l.dispatch(Tg(f)), oS(i, h, p);
            const m = dS(i, h);
            if (m == null) {
                l.dispatch(uS);
                return;
            }
            let b = null;
            if (f) {
                if (!d) throw new Error("getSourceClientOffset must be defined");
                cS(d), b = d(m);
            }
            l.dispatch(Tg(f, b));
            const S = p.getSource(m).beginDrag(h, m);
            if (S == null) return;
            fS(S), p.pinSource(m);
            const T = p.getSourceType(m);
            return {
                type: wu,
                payload: {
                    itemType: T,
                    item: S,
                    sourceId: m,
                    clientOffset: f || null,
                    sourceClientOffset: b || null,
                    isSourcePublic: !!o
                }
            };
        };
    }
    function oS(l, r, i) {
        ue(!r.isDragging(), "Cannot call beginDrag while dragging."), l.forEach(function(u) {
            ue(i.getSource(u), "Expected sourceIds to be registered.");
        });
    }
    function cS(l) {
        ue(typeof l == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
    }
    function fS(l) {
        ue(M0(l), "Item must be an object.");
    }
    function dS(l, r) {
        let i = null;
        for(let u = l.length - 1; u >= 0; u--)if (r.canDragSource(l[u])) {
            i = l[u];
            break;
        }
        return i;
    }
    function hS(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function pS(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                hS(l, o, i[o]);
            });
        }
        return l;
    }
    function gS(l) {
        return function(i = {}) {
            const u = l.getMonitor(), o = l.getRegistry();
            mS(u), bS(u).forEach((d, h)=>{
                const p = vS(d, h, o, u), m = {
                    type: Nu,
                    payload: {
                        dropResult: pS({}, i, p)
                    }
                };
                l.dispatch(m);
            });
        };
    }
    function mS(l) {
        ue(l.isDragging(), "Cannot call drop while not dragging."), ue(!l.didDrop(), "Cannot call drop twice during one drag operation.");
    }
    function vS(l, r, i, u) {
        const o = i.getTarget(l);
        let f = o ? o.drop(u, l) : void 0;
        return yS(f), typeof f > "u" && (f = r === 0 ? {} : u.getDropResult()), f;
    }
    function yS(l) {
        ue(typeof l > "u" || M0(l), "Drop result must either be an object or undefined.");
    }
    function bS(l) {
        const r = l.getTargetIds().filter(l.canDropOnTarget, l);
        return r.reverse(), r;
    }
    function SS(l) {
        return function() {
            const i = l.getMonitor(), u = l.getRegistry();
            ES(i);
            const o = i.getSourceId();
            return o != null && (u.getSource(o, !0).endDrag(i, o), u.unpinSource()), {
                type: ju
            };
        };
    }
    function ES(l) {
        ue(l.isDragging(), "Cannot call endDrag while not dragging.");
    }
    function Cc(l, r) {
        return r === null ? l === null : Array.isArray(l) ? l.some((i)=>i === r) : l === r;
    }
    function OS(l) {
        return function(i, { clientOffset: u } = {}) {
            TS(i);
            const o = i.slice(0), f = l.getMonitor(), d = l.getRegistry(), h = f.getItemType();
            return CS(o, d, h), DS(o, f, d), xS(o, f, d), {
                type: Mu,
                payload: {
                    targetIds: o,
                    clientOffset: u || null
                }
            };
        };
    }
    function TS(l) {
        ue(Array.isArray(l), "Expected targetIds to be an array.");
    }
    function DS(l, r, i) {
        ue(r.isDragging(), "Cannot call hover while not dragging."), ue(!r.didDrop(), "Cannot call hover after drop.");
        for(let u = 0; u < l.length; u++){
            const o = l[u];
            ue(l.lastIndexOf(o) === u, "Expected targetIds to be unique in the passed array.");
            const f = i.getTarget(o);
            ue(f, "Expected targetIds to be registered.");
        }
    }
    function CS(l, r, i) {
        for(let u = l.length - 1; u >= 0; u--){
            const o = l[u], f = r.getTargetType(o);
            Cc(f, i) || l.splice(u, 1);
        }
    }
    function xS(l, r, i) {
        l.forEach(function(u) {
            i.getTarget(u).hover(r, u);
        });
    }
    function RS(l) {
        return function() {
            if (l.getMonitor().isDragging()) return {
                type: Qc
            };
        };
    }
    function AS(l) {
        return {
            beginDrag: sS(l),
            publishDragSource: RS(l),
            hover: OS(l),
            drop: gS(l),
            endDrag: SS(l)
        };
    }
    class _S {
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
            const o = AS(this);
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
    function wS(l, r) {
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
    function MS(l) {
        const { clientOffset: r, initialClientOffset: i, initialSourceClientOffset: u } = l;
        return !r || !i || !u ? null : N0(wS(r, u), i);
    }
    function NS(l) {
        const { clientOffset: r, initialClientOffset: i } = l;
        return !r || !i ? null : N0(r, i);
    }
    const Ul = [], Gc = [];
    Ul.__IS_NONE__ = !0;
    Gc.__IS_ALL__ = !0;
    function jS(l, r) {
        return l === Ul ? !1 : l === Gc || typeof r > "u" ? !0 : iS(r, l).length > 0;
    }
    class PS {
        subscribeToStateChange(r, i = {}) {
            const { handlerIds: u } = i;
            ue(typeof r == "function", "listener must be a function."), ue(typeof u > "u" || Array.isArray(u), "handlerIds, when specified, must be an array of strings.");
            let o = this.store.getState().stateId;
            const f = ()=>{
                const d = this.store.getState(), h = d.stateId;
                try {
                    h === o || h === o + 1 && !jS(d.dirtyHandlerIds, u) || r();
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
            return MS(this.store.getState().dragOffset);
        }
        getDifferenceFromInitialOffset() {
            return NS(this.store.getState().dragOffset);
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
    function LS(l) {
        let r = 1;
        const i = new j0(l), u = document.createTextNode("");
        return i.observe(u, {
            characterData: !0
        }), function() {
            r = -r, u.data = r;
        };
    }
    const kS = typeof j0 == "function" ? LS : P0;
    class VS {
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
            }, this.requestFlush = kS(this.flush), this.requestErrorThrow = P0(()=>{
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
            });
        }
    }
    class BS {
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
    class zS {
        create(r) {
            const i = this.freeTasks, u = i.length ? i.pop() : new BS(this.onError, (o)=>i[i.length] = o);
            return u.task = r, u;
        }
        constructor(r){
            this.onError = r, this.freeTasks = [];
        }
    }
    const L0 = new VS, US = new zS(L0.registerPendingError);
    function qS(l) {
        L0.enqueueTask(US.create(l));
    }
    const Kc = "dnd-core/ADD_SOURCE", Yc = "dnd-core/ADD_TARGET", Ic = "dnd-core/REMOVE_SOURCE", Pu = "dnd-core/REMOVE_TARGET";
    function HS(l) {
        return {
            type: Kc,
            payload: {
                sourceId: l
            }
        };
    }
    function QS(l) {
        return {
            type: Yc,
            payload: {
                targetId: l
            }
        };
    }
    function GS(l) {
        return {
            type: Ic,
            payload: {
                sourceId: l
            }
        };
    }
    function KS(l) {
        return {
            type: Pu,
            payload: {
                targetId: l
            }
        };
    }
    function YS(l) {
        ue(typeof l.canDrag == "function", "Expected canDrag to be a function."), ue(typeof l.beginDrag == "function", "Expected beginDrag to be a function."), ue(typeof l.endDrag == "function", "Expected endDrag to be a function.");
    }
    function IS(l) {
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
    let XS = 0;
    function ZS() {
        return XS++;
    }
    function JS(l) {
        const r = ZS().toString();
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
    class FS {
        addSource(r, i) {
            xc(r), YS(i);
            const u = this.addHandler(Yt.SOURCE, r, i);
            return this.store.dispatch(HS(u)), u;
        }
        addTarget(r, i) {
            xc(r, !0), IS(i);
            const u = this.addHandler(Yt.TARGET, r, i);
            return this.store.dispatch(QS(u)), u;
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
            ue(this.getSource(r), "Expected an existing source."), this.store.dispatch(GS(r)), qS(()=>{
                this.dragSources.delete(r), this.types.delete(r);
            });
        }
        removeTarget(r) {
            ue(this.getTarget(r), "Expected an existing target."), this.store.dispatch(KS(r)), this.dropTargets.delete(r), this.types.delete(r);
        }
        pinSource(r) {
            const i = this.getSource(r);
            ue(i, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = i;
        }
        unpinSource() {
            ue(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
        }
        addHandler(r, i, u) {
            const o = JS(r);
            return this.types.set(o, i), r === Yt.SOURCE ? this.dragSources.set(o, u) : r === Yt.TARGET && this.dropTargets.set(o, u), o;
        }
        constructor(r){
            this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = r;
        }
    }
    const WS = (l, r)=>l === r;
    function $S(l, r) {
        return !l && !r ? !0 : !l || !r ? !1 : l.x === r.x && l.y === r.y;
    }
    function e3(l, r, i = WS) {
        if (l.length !== r.length) return !1;
        for(let u = 0; u < l.length; ++u)if (!i(l[u], r[u])) return !1;
        return !0;
    }
    function t3(l = Ul, r) {
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
        const { targetIds: i = [], prevTargetIds: u = [] } = r.payload, o = lS(i, u);
        if (!(o.length > 0 || !e3(i, u))) return Ul;
        const d = u[u.length - 1], h = i[i.length - 1];
        return d !== h && (d && o.push(d), h && o.push(h)), o;
    }
    function n3(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function r3(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                n3(l, o, i[o]);
            });
        }
        return l;
    }
    const Rg = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null
    };
    function a3(l = Rg, r) {
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
                return $S(l.clientOffset, i.clientOffset) ? l : r3({}, l, {
                    clientOffset: i.clientOffset
                });
            case ju:
            case Nu:
                return Rg;
            default:
                return l;
        }
    }
    function l3(l, r, i) {
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
                l3(l, o, i[o]);
            });
        }
        return l;
    }
    const i3 = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null
    };
    function u3(l = i3, r) {
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
                    targetIds: aS(l.targetIds, i.targetId)
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
    function s3(l = 0, r) {
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
    function o3(l = 0) {
        return l + 1;
    }
    function c3(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function f3(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, u = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(i).filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            }))), u.forEach(function(o) {
                c3(l, o, i[o]);
            });
        }
        return l;
    }
    function d3(l = {}, r) {
        return {
            dirtyHandlerIds: t3(l.dirtyHandlerIds, {
                type: r.type,
                payload: f3({}, r.payload, {
                    prevTargetIds: rS(l, "dragOperation.targetIds", [])
                })
            }),
            dragOffset: a3(l.dragOffset, r),
            refCount: s3(l.refCount, r),
            dragOperation: u3(l.dragOperation, r),
            stateId: o3(l.stateId)
        };
    }
    function h3(l, r = void 0, i = {}, u = !1) {
        const o = p3(u), f = new PS(o, new FS(o)), d = new _S(o, f), h = l(d, r, i);
        return d.receiveBackend(h), d;
    }
    function p3(l) {
        const r = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
        return w0(d3, l && r && r({
            name: "dnd-core",
            instanceId: "dnd-core"
        }));
    }
    function g3(l, r) {
        if (l == null) return {};
        var i = m3(l, r), u, o;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            for(o = 0; o < f.length; o++)u = f[o], !(r.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(l, u) && (i[u] = l[u]);
        }
        return i;
    }
    function m3(l, r) {
        if (l == null) return {};
        var i = {}, u = Object.keys(l), o, f;
        for(f = 0; f < u.length; f++)o = u[f], !(r.indexOf(o) >= 0) && (i[o] = l[o]);
        return i;
    }
    let Ag = 0;
    const Ou = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
    var v3 = E.memo(function(r) {
        var { children: i } = r, u = g3(r, [
            "children"
        ]);
        const [o, f] = y3(u);
        return E.useEffect(()=>{
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
    function y3(l) {
        if ("manager" in l) return [
            {
                dragDropManager: l.manager
            },
            !1
        ];
        const r = b3(l.backend, l.context, l.options, l.debugMode), i = !l.context;
        return [
            r,
            i
        ];
    }
    function b3(l, r = k0(), i, u) {
        const o = r;
        return o[Ou] || (o[Ou] = {
            dragDropManager: h3(l, r, i, u)
        }), o[Ou];
    }
    function k0() {
        return typeof global < "u" ? global : window;
    }
    var S3 = function l(r, i) {
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
    const _r = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
    function V0(l, r, i) {
        const [u, o] = E.useState(()=>r(l)), f = E.useCallback(()=>{
            const d = r(l);
            S3(u, d) || (o(d), i && i());
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
    function E3(l, r, i) {
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
        return E3(r, l || (()=>({})), ()=>i.reconnect());
    }
    function z0(l, r) {
        const i = [
            ...r || []
        ];
        return r == null && typeof l != "function" && i.push(l), E.useMemo(()=>typeof l == "function" ? l() : l, i);
    }
    function O3(l) {
        return E.useMemo(()=>l.hooks.dragSource(), [
            l
        ]);
    }
    function T3(l) {
        return E.useMemo(()=>l.hooks.dragPreview(), [
            l
        ]);
    }
    let cc = !1, fc = !1;
    class D3 {
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
    class C3 {
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
    function x3(l, r, i) {
        const u = i.getRegistry(), o = u.addTarget(l, r);
        return [
            o,
            ()=>u.removeTarget(o)
        ];
    }
    function R3(l, r, i) {
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
            const b = l[m], O = r[m];
            if (o = void 0, o === !1 || o === void 0 && b !== O) return !1;
        }
        return !0;
    }
    function Ac(l) {
        return l !== null && typeof l == "object" && Object.prototype.hasOwnProperty.call(l, "current");
    }
    function A3(l) {
        if (typeof l.type == "string") return;
        const r = l.type.displayName || l.type.name || "the component";
        throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${r} into a <div>, or turn it into a drag source or a drop target itself.`);
    }
    function _3(l) {
        return (r = null, i = null)=>{
            if (!E.isValidElement(r)) {
                const f = r;
                return l(f, i), f;
            }
            const u = r;
            return A3(u), w3(u, i ? (f)=>l(f, i) : l);
        };
    }
    function U0(l) {
        const r = {};
        return Object.keys(l).forEach((i)=>{
            const u = l[i];
            if (i.endsWith("Ref")) r[i] = l[i];
            else {
                const o = _3(u);
                r[i] = ()=>o;
            }
        }), r;
    }
    function _g(l, r) {
        typeof l == "function" ? l(r) : l.current = r;
    }
    function w3(l, r) {
        const i = l.ref;
        return ue(typeof i != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), i ? E.cloneElement(l, {
            ref: (u)=>{
                _g(i, u), _g(r, u);
            }
        }) : E.cloneElement(l, {
            ref: r
        });
    }
    class M3 {
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
    class N3 {
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
        const { dragDropManager: l } = E.useContext(_0);
        return ue(l != null, "Expected drag drop context"), l;
    }
    function j3(l, r) {
        const i = Mr(), u = E.useMemo(()=>new M3(i.getBackend()), [
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
    function P3() {
        const l = Mr();
        return E.useMemo(()=>new D3(l), [
            l
        ]);
    }
    class L3 {
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
    function k3(l, r, i) {
        const u = E.useMemo(()=>new L3(l, r, i), [
            r,
            i
        ]);
        return E.useEffect(()=>{
            u.spec = l;
        }, [
            l
        ]), u;
    }
    function V3(l) {
        return E.useMemo(()=>{
            const r = l.type;
            return ue(r != null, "spec.type must be defined"), r;
        }, [
            l
        ]);
    }
    function B3(l, r, i) {
        const u = Mr(), o = k3(l, r, i), f = V3(l);
        _r(function() {
            if (f != null) {
                const [h, p] = R3(f, o, u);
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
    function z3(l, r) {
        const i = z0(l, r);
        ue(!i.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
        const u = P3(), o = j3(i.options, i.previewOptions);
        return B3(i, u, o), [
            B0(i.collect, u, o),
            O3(o),
            T3(o)
        ];
    }
    function U3(l) {
        const i = Mr().getMonitor(), [u, o] = V0(i, l);
        return E.useEffect(()=>i.subscribeToOffsetChange(o)), E.useEffect(()=>i.subscribeToStateChange(o)), u;
    }
    function q3(l) {
        return E.useMemo(()=>l.hooks.dropTarget(), [
            l
        ]);
    }
    function H3(l) {
        const r = Mr(), i = E.useMemo(()=>new N3(r.getBackend()), [
            r
        ]);
        return _r(()=>(i.dropTargetOptions = l || null, i.reconnect(), ()=>i.disconnectDropTarget()), [
            l
        ]), i;
    }
    function Q3() {
        const l = Mr();
        return E.useMemo(()=>new C3(l), [
            l
        ]);
    }
    function G3(l) {
        const { accept: r } = l;
        return E.useMemo(()=>(ue(l.accept != null, "accept must be defined"), Array.isArray(r) ? r : [
                r
            ]), [
            r
        ]);
    }
    class K3 {
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
    function Y3(l, r) {
        const i = E.useMemo(()=>new K3(l, r), [
            r
        ]);
        return E.useEffect(()=>{
            i.spec = l;
        }, [
            l
        ]), i;
    }
    function I3(l, r, i) {
        const u = Mr(), o = Y3(l, r), f = G3(l);
        _r(function() {
            const [h, p] = x3(f, o, u);
            return r.receiveHandlerId(h), i.receiveHandlerId(h), p;
        }, [
            u,
            r,
            o,
            i,
            f.map((d)=>d.toString()).join("|")
        ]);
    }
    function X3(l, r) {
        const i = z0(l, r), u = Q3(), o = H3(i.options);
        return I3(i, u, o), [
            B0(i.collect, u, o),
            q3(o)
        ];
    }
    function q0(l) {
        let r = null;
        return ()=>(r == null && (r = l()), r);
    }
    function Z3(l, r) {
        return l.filter((i)=>i !== r);
    }
    function J3(l, r) {
        const i = new Set, u = (f)=>i.add(f);
        l.forEach(u), r.forEach(u);
        const o = [];
        return i.forEach((f)=>o.push(f)), o;
    }
    class F3 {
        enter(r) {
            const i = this.entered.length, u = (o)=>this.isNodeInDocument(o) && (!o.contains || o.contains(r));
            return this.entered = J3(this.entered.filter(u), [
                r
            ]), i === 0 && this.entered.length > 0;
        }
        leave(r) {
            const i = this.entered.length;
            return this.entered = Z3(this.entered.filter(this.isNodeInDocument), r), i > 0 && this.entered.length === 0;
        }
        reset() {
            this.entered = [];
        }
        constructor(r){
            this.entered = [], this.isNodeInDocument = r;
        }
    }
    class W3 {
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
    function $3(l, r) {
        const i = _c[l];
        if (!i) throw new Error(`native type ${l} has no configuration`);
        const u = new W3(i);
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
    const eE = q0(()=>/firefox/i.test(navigator.userAgent)), Y0 = q0(()=>!!window.safari);
    class Mg {
        interpolate(r) {
            const { xs: i, ys: u, c1s: o, c2s: f, c3s: d } = this;
            let h = i.length - 1;
            if (r === i[h]) return u[h];
            let p = 0, m = d.length - 1, b;
            for(; p <= m;){
                b = Math.floor(.5 * (p + m));
                const T = i[b];
                if (T < r) p = b + 1;
                else if (T > r) m = b - 1;
                else return u[b];
            }
            h = Math.max(0, m);
            const O = r - i[h], S = O * O;
            return u[h] + o[h] * O + f[h] * S + d[h] * O * S;
        }
        constructor(r, i){
            const { length: u } = r, o = [];
            for(let T = 0; T < u; T++)o.push(T);
            o.sort((T, D)=>r[T] < r[D] ? -1 : 1);
            const f = [], d = [];
            let h, p;
            for(let T = 0; T < u - 1; T++)h = r[T + 1] - r[T], p = i[T + 1] - i[T], f.push(h), d.push(p / h);
            const m = [
                d[0]
            ];
            for(let T = 0; T < f.length - 1; T++){
                const D = d[T], x = d[T + 1];
                if (D * x <= 0) m.push(0);
                else {
                    h = f[T];
                    const w = f[T + 1], M = h + w;
                    m.push(3 * M / ((M + w) / D + (M + h) / x));
                }
            }
            m.push(d[d.length - 1]);
            const b = [], O = [];
            let S;
            for(let T = 0; T < m.length - 1; T++){
                S = d[T];
                const D = m[T], x = 1 / f[T], w = D + m[T + 1] - S - S;
                b.push((S - D - w) * x), O.push(w * x * x);
            }
            this.xs = r, this.ys = i, this.c1s = m, this.c2s = b, this.c3s = O;
        }
    }
    const tE = 1;
    function I0(l) {
        const r = l.nodeType === tE ? l : l.parentElement;
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
    function nE(l) {
        var r;
        return l.nodeName === "IMG" && (eE() || !(!((r = document.documentElement) === null || r === void 0) && r.contains(l)));
    }
    function rE(l, r, i, u) {
        let o = l ? r.width : i, f = l ? r.height : u;
        return Y0() && l && (f /= window.devicePixelRatio, o /= window.devicePixelRatio), {
            dragPreviewWidth: o,
            dragPreviewHeight: f
        };
    }
    function aE(l, r, i, u, o) {
        const f = nE(r), h = I0(f ? l : r), p = {
            x: i.x - h.x,
            y: i.y - h.y
        }, { offsetWidth: m, offsetHeight: b } = l, { anchorX: O, anchorY: S } = u, { dragPreviewWidth: T, dragPreviewHeight: D } = rE(f, r, m, b), x = ()=>{
            let X = new Mg([
                0,
                .5,
                1
            ], [
                p.y,
                p.y / b * D,
                p.y + D - b
            ]).interpolate(S);
            return Y0() && f && (X += (window.devicePixelRatio - 1) * D), X;
        }, w = ()=>new Mg([
                0,
                .5,
                1
            ], [
                p.x,
                p.x / m * T,
                p.x + T - m
            ]).interpolate(O), { offsetX: M, offsetY: k } = o, V = M === 0 || M, G = k === 0 || k;
        return {
            x: V ? M : w(),
            y: G ? k : x()
        };
    }
    let lE = class {
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
    function iE(l, r, i) {
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
                iE(l, o, i[o]);
            });
        }
        return l;
    }
    class uE {
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
            this.clearCurrentDragSourceNode(), this.currentNativeSource = $3(r, i), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([
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
                        const b = this.monitor.getSourceId(), O = this.sourceNodes.get(b), S = this.sourcePreviewNodes.get(b) || O;
                        if (S) {
                            const { anchorX: T, anchorY: D, offsetX: x, offsetY: w } = this.getCurrentSourcePreviewNodeOptions(), V = aE(O, S, d, {
                                anchorX: T,
                                anchorY: D
                            }, {
                                offsetX: x,
                                offsetY: w
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
            }, this.options = new lE(i, u), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.registry = r.getRegistry(), this.enterLeaveCounter = new F3(this.isNodeInDocument);
        }
    }
    let pu;
    function sE() {
        return pu || (pu = new Image, pu.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), pu;
    }
    const oE = function(r, i, u) {
        return new uE(r, i, u);
    };
    function jg({ isPremovedPiece: l = !1, piece: r, square: i, squares: u }) {
        const { animationDuration: o, arePiecesDraggable: f, boardWidth: d, boardOrientation: h, chessPieces: p, currentPosition: m, deletePieceFromSquare: b, dropOffBoardAction: O, id: S, isDraggablePiece: T, isWaitingForAnimation: D, onPieceClick: x, onPieceDragBegin: w, onPieceDragEnd: M, onPieceDropOffBoard: k, onPromotionCheck: V, positionDifferences: G } = wn(), [Q, X] = E.useState({
            opacity: 1,
            zIndex: 5,
            touchAction: "none",
            cursor: f && T({
                piece: r,
                sourceSquare: i
            }) ? "-webkit-grab" : "default"
        }), [{ canDrag: ie, isDragging: ce }, ae, ve] = z3(()=>({
                type: "piece",
                item: ()=>(w(r, i), {
                        piece: r,
                        square: i,
                        id: S
                    }),
                end: (he, Pe)=>{
                    M(r, i), !Pe.didDrop() && (O === "trash" && b(i), k?.(i, r));
                },
                collect: (he)=>({
                        canDrag: T({
                            piece: r,
                            sourceSquare: i
                        }),
                        isDragging: !!he.isDragging()
                    })
            }), [
            r,
            i,
            m,
            S
        ]);
        ve(sE(), {
            captureDraggingState: !0
        }), E.useEffect(()=>{
            X((he)=>Object.assign(Object.assign({}, he), {
                    opacity: ce ? 0 : 1
                }));
        }, [
            ce
        ]), E.useEffect(()=>{
            var he;
            const Pe = (he = G.removed) === null || he === void 0 ? void 0 : he[i];
            if (!G.added || !Pe) return;
            const gt = Object.entries(G.added).find(([we, B])=>B === Pe || V(i, we, Pe));
            if (D && Pe && gt && !l) {
                const we = i, B = gt[0];
                if (we && B) {
                    const K = d / 8;
                    X((W)=>Object.assign(Object.assign({}, W), {
                            transform: `translate(${(h === "black" ? -1 : 1) * (B.charCodeAt(0) - we.charCodeAt(0)) * K}px, ${(h === "black" ? -1 : 1) * (Number(we[1]) - Number(B[1])) * K}px)`,
                            transition: `transform ${o}ms`,
                            zIndex: 6
                        }));
                }
            }
        }, [
            G
        ]), E.useEffect(()=>{
            const { sourceSq: he } = Ve();
            he && X((Pe)=>Object.assign(Object.assign({}, Pe), {
                    transform: "translate(0px, 0px)",
                    transition: "transform 0ms"
                }));
        }, [
            m
        ]), E.useEffect(()=>{
            X((he)=>Object.assign(Object.assign({}, he), {
                    cursor: f && T({
                        piece: r,
                        sourceSquare: i
                    }) ? "-webkit-grab" : "default"
                }));
        }, [
            i,
            m,
            f
        ]);
        function Ve() {
            return {
                sourceSq: u[i]
            };
        }
        return y.jsx("div", Object.assign({
            ref: f && ie ? ae : null,
            onClick: ()=>x(r, i),
            "data-piece": r,
            style: Q
        }, {
            children: typeof p[r] == "function" ? p[r]({
                squareWidth: d / 8,
                isDragging: ce,
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
    function cE({ square: l, squareColor: r, setSquares: i, squareHasPremove: u, children: o }) {
        const f = E.useRef(null), { autoPromoteToQueen: d, boardWidth: h, boardOrientation: p, clearArrows: m, currentPosition: b, currentRightClickDown: O, customBoardStyle: S, customDarkSquareStyle: T, customDropSquareStyle: D, customLightSquareStyle: x, customPremoveDarkSquareStyle: w, customPremoveLightSquareStyle: M, customSquare: k, customSquareStyles: V, drawNewArrow: G, handleSetPosition: Q, handleSparePieceDrop: X, isWaitingForAnimation: ie, lastPieceColour: ce, lastSquareDraggedOver: ae, onArrowDrawEnd: ve, onDragOverSquare: Ve, onMouseOutSquare: he, onMouseOverSquare: Pe, onPieceDrop: gt, onPromotionCheck: we, onRightClickDown: B, onRightClickUp: K, onSquareClick: W, setLastSquareDraggedOver: Ee, setPromoteFromSquare: R, setPromoteToSquare: H, setShowPromoteDialog: I } = wn(), [{ isOver: Y }, J] = X3(()=>({
                accept: "piece",
                drop: me,
                collect: (ne)=>({
                        isOver: !!ne.isOver()
                    })
            }), [
            l,
            b,
            gt,
            ie,
            ce
        ]);
        function me(ne) {
            if (ne.isSpare) {
                X(ne.piece, l);
                return;
            }
            we(ne.square, l, ne.piece) ? d ? Q(ne.square, l, ne.piece[0] === "w" ? "wQ" : "bQ") : (R(ne.square), H(l), I(!0)) : Q(ne.square, l, ne.piece, !0);
        }
        E.useEffect(()=>{
            if (f.current) {
                const { x: ne, y: ye } = f.current.getBoundingClientRect();
                i((mt)=>Object.assign(Object.assign({}, mt), {
                        [l]: {
                            x: ne,
                            y: ye
                        }
                    }));
            }
        }, [
            h,
            p
        ]);
        const ee = Object.assign(Object.assign(Object.assign(Object.assign({}, fE(l, p, S)), r === "black" ? T : x), u && (r === "black" ? w : M)), Y && D);
        return y.jsx("div", Object.assign({
            ref: J,
            style: ee,
            "data-square-color": r,
            "data-square": l,
            onTouchMove: (ne)=>{
                var ye;
                const mt = ne.touches[0], sn = document.elementsFromPoint(mt.clientX, mt.clientY), Ge = (ye = sn?.find((ct)=>ct.getAttribute("data-square"))) === null || ye === void 0 ? void 0 : ye.getAttribute("data-square");
                Ge && Ge !== ae && (Ee(Ge), Ve(Ge));
            },
            onMouseOver: (ne)=>{
                ne.buttons === 2 && O && G(O, l), !(ne.relatedTarget && ne.currentTarget.contains(ne.relatedTarget)) && Pe(l);
            },
            onMouseOut: (ne)=>{
                ne.relatedTarget && ne.currentTarget.contains(ne.relatedTarget) || he(l);
            },
            onMouseDown: (ne)=>{
                ne.button === 2 && B(l);
            },
            onMouseUp: (ne)=>{
                ne.button === 2 && (O && ve(O, l), K(l));
            },
            onDragEnter: ()=>Ve(l),
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
        }), fE = (l, r, i)=>i?.borderRadius ? l === "a1" ? r === "white" ? {
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
    function dE() {
        const [l, r] = E.useState({}), { arePremovesAllowed: i, boardOrientation: u, boardWidth: o, currentPosition: f, id: d, premoves: h, showBoardNotation: p } = wn(), m = E.useMemo(()=>{
            const b = [];
            return i ? (h.forEach((O, S)=>{
                const { sourceSq: T, targetSq: D, piece: x } = O, w = b.find((M)=>{
                    var k;
                    return M.piece === x && ((k = M.premovesRoute.at(-1)) === null || k === void 0 ? void 0 : k.targetSq) === T;
                });
                w ? w.premovesRoute.push({
                    sourceSq: T,
                    targetSq: D,
                    index: S
                }) : b.push({
                    piece: x,
                    premovesRoute: [
                        {
                            sourceSq: T,
                            targetSq: D,
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
            ].map((b, O)=>y.jsx("div", Object.assign({
                    style: {
                        display: "flex",
                        flexWrap: "nowrap",
                        width: o
                    }
                }, {
                    children: [
                        ...Array(8)
                    ].map((S, T)=>{
                        const D = u === "black" ? Gl[7 - T] + (O + 1) : Gl[T] + (8 - O), x = T % 2 === O % 2 ? "white" : "black", w = h.find((k)=>k.sourceSq === D || k.targetSq === D), M = m.filter(({ premovesRoute: k })=>{
                            var V;
                            return ((V = k.at(-1)) === null || V === void 0 ? void 0 : V.targetSq) === D;
                        }).sort((k, V)=>{
                            var G, Q;
                            return ((G = V.premovesRoute.at(-1)) === null || G === void 0 ? void 0 : G.index) - ((Q = k.premovesRoute.at(-1)) === null || Q === void 0 ? void 0 : Q.index);
                        }).at(0);
                        return y.jsxs(cE, Object.assign({
                            square: D,
                            squareColor: x,
                            setSquares: r,
                            squareHasPremove: !!w
                        }, {
                            children: [
                                !w && f[D] && y.jsx(jg, {
                                    piece: f[D],
                                    square: D,
                                    squares: l
                                }),
                                M && y.jsx(jg, {
                                    isPremovedPiece: !0,
                                    piece: M.piece,
                                    square: D,
                                    squares: l
                                }),
                                p && y.jsx(eS, {
                                    row: O,
                                    col: T
                                })
                            ]
                        }), `${T}${O}`);
                    })
                }), O.toString()))
        }));
    }
    const hE = ()=>{
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
                const O = Dc(i, u, p), S = Dc(i, u, m);
                let T = u / 32;
                const D = h === l.length;
                l.some((V)=>V[0] !== p && V[1] === m) && !D && (T = u / 16);
                const x = S.x - O.x, w = S.y - O.y, M = Math.hypot(w, x), k = {
                    x: O.x + x * (M - T) / M,
                    y: O.y + w * (M - T) / M
                };
                return y.jsxs(E.Fragment, {
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
                            x1: O.x,
                            y1: O.y,
                            x2: k.x,
                            y2: k.y,
                            opacity: D ? "0.5" : "0.65",
                            stroke: b ?? o,
                            strokeWidth: D ? .9 * u / 40 : u / 40,
                            markerEnd: `url(#arrowhead-${h})`
                        })
                    ]
                }, `${p}-${m}${D ? "-active" : ""}`);
            })
        }));
    };
    function pE({ option: l }) {
        const [r, i] = E.useState(!1), { boardWidth: u, chessPieces: o, customDarkSquareStyle: f, customLightSquareStyle: d, handleSetPosition: h, onPromotionPieceSelect: p, promoteFromSquare: m, promoteToSquare: b, promotionDialogVariant: O } = wn(), S = ()=>{
            switch(l[1]){
                case "Q":
                    return f.backgroundColor;
                case "R":
                    return d.backgroundColor;
                case "N":
                    return O === "default" ? d.backgroundColor : f.backgroundColor;
                case "B":
                    return O === "default" ? f.backgroundColor : d.backgroundColor;
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
    function gE() {
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
            children: f.map((p)=>y.jsx(pE, {
                    option: p
                }, p))
        }));
    }
    const mE = {
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
    function vE({ children: l }) {
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
                    children: mE.whiteKing
                })),
                l && y.jsx("h1", {
                    children: "Something went wrong"
                })
            ]
        }));
    }
    function yE() {
        const l = E.useRef(null), { boardWidth: r, clearCurrentRightClickDown: i, onPromotionPieceSelect: u, setShowPromoteDialog: o, showPromoteDialog: f, customBoardStyle: d } = wn();
        return E.useEffect(()=>{
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
                }, bE(r)), d)
            }, {
                children: [
                    y.jsx(dE, {}),
                    y.jsx(hE, {}),
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
                            y.jsx(gE, {})
                        ]
                    })
                ]
            }))
        })) : y.jsx(X0, {});
    }
    const bE = (l)=>({
            cursor: "default",
            height: l,
            width: l
        });
    var lr;
    (function(l) {
        l.mouse = "mouse", l.touch = "touch", l.keyboard = "keyboard";
    })(lr || (lr = {}));
    class SE {
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
    function EE(l, r, i, u) {
        return Math.sqrt(Math.pow(Math.abs(i - l), 2) + Math.pow(Math.abs(u - r), 2));
    }
    function OE(l, r, i, u, o) {
        if (!o) return !1;
        const f = Math.atan2(u - r, i - l) * 180 / Math.PI + 180;
        for(let d = 0; d < o.length; ++d){
            const h = o[d];
            if (h && (h.start == null || f >= h.start) && (h.end == null || f <= h.end)) return !0;
        }
        return !1;
    }
    const TE = {
        Left: 1
    }, DE = {
        Left: 0
    };
    function gc(l) {
        return l.button === void 0 || l.button === DE.Left;
    }
    function CE(l) {
        return l.buttons === void 0 || (l.buttons & TE.Left) === 0;
    }
    function Z0(l) {
        return !!l.targetTouches;
    }
    const xE = 1;
    function RE(l) {
        const r = l.nodeType === xE ? l : l.parentElement;
        if (!r) return;
        const { top: i, left: u } = r.getBoundingClientRect();
        return {
            x: u,
            y: i
        };
    }
    function AE(l, r) {
        if (l.targetTouches.length === 1) return xu(l.targetTouches[0]);
        if (r && l.touches.length === 1 && l.touches[0].target === r.target) return xu(l.touches[0]);
    }
    function xu(l, r) {
        return Z0(l) ? AE(l, r) : {
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
                return f && RE(f);
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
                if (this._isScrolling || !this.monitor.isDragging() && OE(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, p.x, p.y, this.options.scrollAngleRanges)) {
                    this._isScrolling = !0;
                    return;
                }
                if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && f && EE(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, p.x, p.y) > (this.options.touchSlop ? this.options.touchSlop : 0) && (this.moveStartSourceIds = void 0, this.actions.beginDrag(f, {
                    clientOffset: this._mouseClientOffset,
                    getSourceClientOffset: this.getSourceClientOffset,
                    publishSource: !1
                })), !this.monitor.isDragging()) return;
                const m = this.sourceNodes.get(this.monitor.getSourceId());
                this.installSourceNodeRemovalObserver(m), this.actions.publishDragSource(), o.cancelable && o.preventDefault();
                const b = (d || []).map((D)=>this.targetNodes.get(D)).filter((D)=>!!D), O = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(p.x, p.y, b) : this.document.elementsFromPoint(p.x, p.y), S = [];
                for(const D in O){
                    if (!O.hasOwnProperty(D)) continue;
                    let x = O[D];
                    for(x != null && S.push(x); x;)x = x.parentElement, x && S.indexOf(x) === -1 && S.push(x);
                }
                const T = S.filter((D)=>b.indexOf(D) > -1).map((D)=>this._getDropTargetId(D)).filter((D)=>!!D).filter((D, x, w)=>w.indexOf(D) === x);
                if (h) for(const D in this.targetNodes){
                    const x = this.targetNodes.get(D);
                    if (m && x && x.contains(m) && T.indexOf(D) === -1) {
                        T.unshift(D);
                        break;
                    }
                }
                T.reverse(), this.actions.hover(T, {
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
                if (this._isScrolling = !1, this.lastTargetTouchFallback = void 0, !!CE(o)) {
                    if (!this.monitor.isDragging() || this.monitor.didDrop()) {
                        this.moveStartSourceIds = void 0;
                        return;
                    }
                    o.cancelable && o.preventDefault(), this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag();
                }
            }, this.handleCancelOnEscape = (o)=>{
                o.key === "Escape" && this.monitor.isDragging() && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag());
            }, this.options = new SE(u, i), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(lr.mouse), this.options.enableTouchEvents && this.listenerTypes.push(lr.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(lr.keyboard);
        }
    }
    const _E = function(r, i = {}, u = {}) {
        return new ql(r, i, u);
    }, wE = E.createContext({
        isCustomDndProviderSet: !1
    }), ME = ({ children: l })=>y.jsx(y.Fragment, {
            children: l
        }), NE = ({ customDndBackend: l, customDndBackendOptions: r, children: i })=>{
        const [u, o] = E.useState(), [f, d] = E.useState(!1), [h, p] = E.useState(!1), { isCustomDndProviderSet: m } = E.useContext(wE);
        E.useEffect(()=>{
            p("ontouchstart" in window), d(!0), o(window);
        }, []);
        const b = m ? ME : v3;
        return f ? u ? y.jsx(b, Object.assign({
            backend: l || (h ? _E : oE),
            context: u,
            options: l ? r : void 0
        }, {
            children: i
        })) : y.jsx(y.Fragment, {
            children: i
        }) : null;
    };
    function jE({ boardContainer: l }) {
        const { boardWidth: r, chessPieces: i, id: u, snapToCursor: o, allowDragOutsideBoard: f } = wn(), d = U3((S)=>({
                item: S.getItem(),
                clientOffset: S.getClientOffset(),
                sourceClientOffset: S.getSourceClientOffset(),
                isDragging: S.isDragging()
            })), { isDragging: h, item: p, clientOffset: m, sourceClientOffset: b } = d, O = E.useCallback((S, T)=>{
            if (!S || !T) return {
                display: "none"
            };
            let { x: D, y: x } = o ? S : T;
            const w = r / 8 / 2;
            if (o && (D -= w, x -= w), !f) {
                const { left: k, top: V } = l, G = k - w, Q = V - w, X = k + r - w, ie = V + r - w;
                D = Math.max(G, Math.min(D, X)), x = Math.max(Q, Math.min(x, ie));
            }
            const M = `translate(${D}px, ${x}px)`;
            return {
                transform: M,
                WebkitTransform: M,
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
                style: O(m, b)
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
    const J0 = E.forwardRef((l, r)=>{
        const { customDndBackend: i, customDndBackendOptions: u, onBoardWidthChange: o } = l, f = H2(l, [
            "customDndBackend",
            "customDndBackendOptions",
            "onBoardWidthChange"
        ]), [d, h] = E.useState(l.boardWidth), p = E.useRef(null), m = E.useRef(null), [b, O] = E.useState({
            left: 0,
            top: 0
        }), S = E.useMemo(()=>{
            var T;
            return (T = p.current) === null || T === void 0 ? void 0 : T.getBoundingClientRect();
        }, [
            p.current
        ]);
        return E.useEffect(()=>{
            d && o?.(d);
        }, [
            d
        ]), E.useEffect(()=>{
            O({
                left: S?.left ? S?.left : 0,
                top: S?.top ? S?.top : 0
            });
        }, [
            S
        ]), E.useEffect(()=>{
            var T;
            if (l.boardWidth === void 0 && (!((T = p.current) === null || T === void 0) && T.offsetWidth)) {
                const D = new ResizeObserver(()=>{
                    var x;
                    h((x = p.current) === null || x === void 0 ? void 0 : x.offsetWidth);
                });
                return D.observe(p.current), ()=>{
                    D.disconnect();
                };
            }
        }, [
            p.current
        ]), y.jsx(vE, {
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
                    y.jsx(NE, Object.assign({
                        customDndBackend: i,
                        customDndBackendOptions: u
                    }, {
                        children: d && y.jsxs($2, Object.assign({
                            boardWidth: d
                        }, f, {
                            ref: r
                        }, {
                            children: [
                                y.jsx(jE, {
                                    boardContainer: b
                                }),
                                y.jsx(yE, {})
                            ]
                        }))
                    }))
                ]
            }))
        });
    }), PE = (l, r)=>l.flags.includes("c") ? "capture" : r.isCheckmate() ? "checkmate" : r.inCheck() ? "check" : "move", LE = (l)=>(l === "w" ? "Black" : "White") + " " + ot.CHECKMATE_MESSAGE, kE = (l)=>l.isCheckmate() ? {
            isGameOver: !0,
            gameResult: LE(l.turn())
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
        const l = ur(), { theme: r, enableSound: i } = Nt((m)=>m.settings), [u, o] = E.useState(!1), f = E.useRef(null), d = ()=>o((m)=>!m);
        E.useEffect(()=>{
            const m = (b)=>{
                f.current && !f.current.contains(b.target) && o(!1);
            };
            return document.addEventListener("mousedown", m), ()=>document.removeEventListener("mousedown", m);
        }, []);
        const h = (m)=>{
            l(Xy(m.target.value));
        }, p = (m)=>{
            l(Zy(m.target.checked));
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
    }, VE = ()=>{
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
    }, BE = ()=>y.jsxs("div", {
            className: "top-container",
            children: [
                y.jsx(VE, {}),
                y.jsx(W0, {})
            ]
        }), zE = ({ resetGameHandler: l, timerDuration: r, gameResult: i })=>y.jsx("div", {
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
        }), UE = ()=>{
        const l = ur(), { fen: r, moveHistory: i, lastMove: u, isGameOver: o, gameResult: f, timerDuration: d, isWhiteTurn: h } = Nt((S)=>S.game), { isFlipped: p, theme: m } = Nt((S)=>S.settings), b = E.useCallback(({ from: S, to: T })=>{
            if (o) return;
            const D = new Kl(r);
            try {
                const x = D.move({
                    from: S,
                    to: T,
                    promotion: "q"
                });
                if (!x) return;
                l(Yy({
                    from: S,
                    to: T,
                    promotionPiece: "q"
                })), Oc(PE(x, D));
                const { isGameOver: w, gameResult: M } = kE(D);
                w && l(bc(w, M));
            } catch (x) {
                console.error(x);
            }
        }, [
            o,
            l,
            r
        ]), O = (S)=>{
            l(e0(S));
        };
        return y.jsxs("div", {
            className: "main-container",
            children: [
                y.jsx(BE, {}),
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
                                        o && y.jsx(zE, {
                                            resetGameHandler: O,
                                            timerDuration: d,
                                            gameResult: f
                                        })
                                    ]
                                }),
                                y.jsx("div", {
                                    className: "right-panel",
                                    children: y.jsx(B2, {
                                        moveHistory: i
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, qE = (l)=>new Promise((r, i)=>{
            const u = new FileReader;
            u.onload = (o)=>{
                r(o.target.result);
            }, u.onerror = (o)=>{
                i(o);
            }, u.readAsText(l);
        }), $0 = ()=>{
        const l = ur(), r = (i)=>{
            const u = i.target.files[0];
            u && qE(u).then((o)=>{
                try {
                    const f = new Kl;
                    f.loadPgn(o);
                    const d = f.history(), h = [], p = f.header().Termination, m = f.header().Black || "-", b = f.header().White || "-", O = f.header().Result, S = [];
                    f.reset(), h.push(f.fen()), d.forEach((T)=>{
                        const D = f.move(T);
                        S.push({
                            from: D.from,
                            to: D.to
                        }), h.push(f.fen());
                    }), l(nb({
                        finalPos: h[h.length - 1],
                        moves: d,
                        fens: h,
                        fromToSquares: S,
                        termination: p,
                        result: O,
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
    $0.propTypes = {
        onLoadPGN: Ze.func.isRequired
    };
    const HE = ()=>{
        const l = ()=>{
            document.body.classList.toggle("dark-theme");
        };
        return y.jsx("button", {
            onClick: l,
            className: "theme-toggle-btn",
            children: "🌙"
        });
    }, QE = ()=>{
        const l = ur(), { isFlipped: r } = Nt((u)=>u.game), i = ()=>y.jsx("button", {
                onClick: ()=>l(a0()),
                className: "action-button",
                children: r ? "Unflip Board" : "Flip Board"
            });
        return y.jsxs("nav", {
            className: "top-bar",
            children: [
                y.jsx(i, {}),
                y.jsx($0, {}),
                y.jsx(W0, {}),
                y.jsx(HE, {})
            ]
        });
    }, GE = ()=>y.jsx("div", {
            className: "top-container",
            children: y.jsx(QE, {})
        }), e1 = ({ setPosition: l, handleMove: r })=>{
        const { fens: i } = Nt((m)=>m.pgn), { currentMoveIndex: u } = Nt((m)=>m.analysis), o = ur(), f = ()=>{
            Tc(), o(Wy()), l(i[0]), r();
        }, d = ()=>{
            u > 0 && (Oc("move"), o($y()), l(i[u - 1]), r());
        }, h = ()=>{
            u < i.length - 1 && (Oc("move"), o(eb()), l(i[u + 1]), r());
        }, p = ()=>{
            Tc(), o(tb()), l(i[i.length - 1]), r();
        };
        return y.jsxs("div", {
            className: "move-navigation",
            children: [
                y.jsxs("button", {
                    onClick: f,
                    disabled: u === 0,
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
                    onClick: d,
                    disabled: u === 0,
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
                    onClick: h,
                    disabled: u >= i.length - 1,
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
                    onClick: p,
                    disabled: u === i.length - 1,
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
    e1.propTypes = {
        setPosition: Ze.func.isRequired
    };
    const KE = ()=>{
        const l = E.useRef(null), { moves: r, termination: i } = Nt((h)=>h.pgn), { currentMoveIndex: u, fenLength: o } = Nt((h)=>h.analysis), f = ur();
        E.useEffect(()=>{
            l.current && (l.current.scrollTop = l.current.scrollHeight);
        }, [
            r
        ]), E.useEffect(()=>{
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
            Tc(), f(rb(h));
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
        }, p = ()=>f ? YE(i, d) : F0(u);
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
    const YE = (l, r)=>{
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
    }, gu = (l, r)=>String.fromCharCode(r + 97) + (8 - l), t1 = ({ isFlipped: l, evalScore: r })=>{
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
    }, IE = (l, r)=>r.split(" ")[1] === "w" ? l : -l, XE = (l, r, i, u)=>{
        if (typeof l == "string" && l.startsWith("info") && l.includes("score")) {
            const o = l.match(/score (cp|mate) (-?\d+)/);
            if (o) {
                const d = o[1], h = parseInt(o[2], 10);
                let p = 0;
                d === "cp" ? p = h / 100 : d === "mate" && (p = h > 0 ? 10 : -10);
                const m = IE(p, u);
                r(m);
            }
            const f = l.match(/ pv (.+)/);
            f && i(f[1]);
        }
    };
    function n1(l, r = "lite", i = 8e3) {
        const u = E.useRef(null), o = E.useRef(null), f = E.useRef(null), d = E.useRef(null), h = E.useRef(!1), p = E.useCallback(()=>{
            u.current && u.current.terminate(), r === "lite" ? u.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : u.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), u.current.postMessage("uci"), console.log("Intialising worker ..."), u.current.onmessage = (x)=>{
                const w = x.data;
                if (l && l(w), typeof w == "string" && w.startsWith("info") && w.includes("score")) {
                    const M = w.match(/score (cp|mate) (-?\d+)/);
                    if (M) {
                        const k = M[1], V = parseInt(M[2], 10), G = k === "cp" ? V / 100 : V > 0 ? 10 : -10;
                        o.current && (o.current(G), o.current = null);
                    }
                }
            }, u.current.onerror = (x)=>{
                console.error("Error with Stockfish worker:", x);
            };
        }, [
            l,
            r
        ]), m = E.useCallback((x)=>{
            u.current && u.current.postMessage(x);
        }, []), b = E.useCallback((x)=>{
            x.forEach((w)=>{
                m(`setoption name ${w.name} value ${w.value}`);
            });
        }, [
            m
        ]), O = E.useCallback((x, w = [])=>{
            let M = `position fen ${x}`;
            if (w.length > 0) {
                const k = w.join(" ");
                M += ` moves ${k}`;
            }
            m(M);
        }, [
            m
        ]), S = E.useCallback((x)=>{
            console.log("1. try stopSearch ...", x), u.current && (console.log("2. try stopSearch ...", x), h.current && (console.log("Interrupting current search...", x), m("stop"), h.current = !1, f.current && (clearTimeout(f.current), f.current = null)));
        }, [
            m
        ]), T = E.useCallback((x)=>{
            u.current && (clearTimeout(f.current), S("pre startSearch"), d.current && clearTimeout(d.current), d.current = setTimeout(()=>{
                h.current = !0, m(`position fen ${x}`), m("go infinite"), f.current = setTimeout(()=>{
                    S("startSearch timer expire");
                }, i);
            }, 50));
        }, [
            m,
            i,
            S
        ]), D = E.useCallback(()=>{
            u.current && (u.current.terminate(), u.current = null), h.current = !1, f.current && (clearTimeout(f.current), f.current = null);
        }, []);
        return E.useEffect(()=>()=>{
                D();
            }, []), {
            initEngine: p,
            setOptions: b,
            setFen: O,
            startSearch: T,
            stopSearch: S,
            terminateEngine: D
        };
    }
    const r1 = E.createContext(), ZE = ()=>E.useContext(r1), JE = ({ children: l })=>{
        const r = E.useRef(null), i = E.useCallback((f)=>{
            r.current && r.current(f);
        }, []), u = n1(i), o = E.useCallback((f)=>{
            r.current = f;
        }, []);
        return y.jsx(r1.Provider, {
            value: {
                ...u,
                setOnMessage: o
            },
            children: l
        });
    }, FE = ()=>{
        const { fens: l, fromToSquares: r, moves: i, blackPlayerName: u, whitePlayerName: o } = Nt((ve)=>ve.pgn), { currentMoveIndex: f } = Nt((ve)=>ve.analysis), { result: d } = Nt((ve)=>ve.pgn), [h, p] = E.useState(ot.START_FEN), m = E.useRef(h), { isFlipped: b, theme: O } = Nt((ve)=>ve.settings), [S, T] = E.useState(0), [D, x] = E.useState(""), w = E.useRef(1), M = [
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
        ], { initEngine: k, setOptions: V, startSearch: G, stopSearch: Q, setOnMessage: X } = ZE(), ie = E.useCallback((ve)=>{
            XE(ve, T, x, m.current);
        }, []);
        E.useEffect(()=>{
            m.current = h;
        }, [
            h
        ]), E.useEffect(()=>{
            k(), V(M), X(ie);
        }, []), E.useEffect(()=>{
            l && l.length > 0 && p(l[f]);
        }, [
            f,
            l,
            r
        ]);
        const ce = E.useCallback(({ from: ve, to: Ve })=>{
            console.log("handleMove", ve, Ve);
            const he = new Kl(h);
            try {
                if (!he.move({
                    from: ve,
                    to: Ve,
                    promotion: "q"
                })) return;
                p(he.fen()), Q("handleMove"), G(he.fen());
            } catch (Pe) {
                console.error(Pe);
            }
        }, [
            h
        ]), ae = E.useCallback(()=>{
            Q("navigateMove"), G(m.current);
        }, []);
        return console.log("rendred analsis game", w.current), w.current += 1, y.jsxs("div", {
            children: [
                y.jsx(GE, {}),
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
                                        S
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
                            className: `analysis-container ${O}-theme `,
                            children: [
                                y.jsxs("div", {
                                    className: "main-area",
                                    children: [
                                        y.jsx("div", {
                                            className: "top-name",
                                            children: y.jsx("div", {
                                                className: "player-names-wrapper",
                                                children: y.jsx("div", {
                                                    className: `player-name ${b ? "white-player-name" : "black-player-name"}`,
                                                    children: b ? o : u
                                                })
                                            })
                                        }),
                                        y.jsxs("div", {
                                            className: "evalbar-board-container",
                                            children: [
                                                y.jsx(t1, {
                                                    isFlipped: b,
                                                    evalScore: S
                                                }),
                                                y.jsx("div", {
                                                    className: "board-wrapper",
                                                    children: y.jsx(Zc, {
                                                        className: "board",
                                                        fen: h,
                                                        isFlipped: b,
                                                        lastMove: f > 0 && f < l.length - 1 && r ? r[f - 1] : null,
                                                        handleMove: ce,
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
                                                    className: `player-name ${b ? "black-player-name" : "white-player-name"}`,
                                                    children: b ? u : o
                                                })
                                            })
                                        })
                                    ]
                                }),
                                y.jsxs("div", {
                                    className: "sidebar right-panel",
                                    children: [
                                        y.jsx(KE, {
                                            moves: i
                                        }),
                                        y.jsx(e1, {
                                            setPosition: p,
                                            handleMove: ae
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, WE = E.createContext(), $E = ({ children: l })=>{
        const r = (b, O)=>{
            const S = localStorage.getItem(b);
            return S !== null ? JSON.parse(S) : O;
        }, [i, u] = E.useState(()=>r(ot.THEME_KEY, ot.THEME)), [o, f] = E.useState(()=>r(ot.ENABLE_SOUND_KEY, ot.ENABLE_SOUND)), [d, h] = E.useState(()=>r(ot.TIMER_DURATION_KEY, ot.TIMER_DURATION)), [p, m] = E.useState(()=>r(ot.IS_FLIPPED_KEY, ot.IS_FLIPPED));
        return E.useEffect(()=>localStorage.setItem(ot.THEME_KEY, JSON.stringify(i)), [
            i
        ]), E.useEffect(()=>localStorage.setItem(ot.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), E.useEffect(()=>localStorage.setItem(ot.TIMER_DURATION_KEY, JSON.stringify(d)), [
            d
        ]), E.useEffect(()=>localStorage.setItem(ot.IS_FLIPPED_KEY, JSON.stringify(p)), [
            p
        ]), y.jsx(WE.Provider, {
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
    }, e5 = ()=>{
        const [l, r] = E.useState("rn1qkbnr/pp3ppp/2p1p3/3p4/3P4/2N1PN2/PPP2PPP/R1BQKB1R w KQkq - 0 1"), [i, u] = E.useState(null), [o, f] = E.useState(null), [d, h] = E.useState(!1), p = E.useRef(null), { sendCommand: m } = n1((O)=>{
            if (typeof O == "string") {
                if (O.startsWith("info") && O.includes("score")) {
                    const S = O.match(/score (cp|mate) (-?\d+)/);
                    if (S) {
                        const T = S[1], D = parseInt(S[2], 10), x = T === "cp" ? `${(D / 100).toFixed(2)}` : `Mate in ${D}`;
                        p.current = x;
                    }
                }
                if (O.startsWith("bestmove")) {
                    const S = O.split(" ")[1];
                    u(S), f(p.current), h(!1);
                }
            }
        });
        E.useEffect(()=>{
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
                y.jsx(t1, {
                    isFlipped: !1,
                    evalScore: 0
                }),
                y.jsx("input", {
                    type: "text",
                    value: l,
                    onChange: (O)=>r(O.target.value),
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
    }, t5 = ()=>y.jsx($E, {
            children: y.jsxs(D2, {
                basename: "/chess-frontend",
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
                                children: "StockfishTest"
                            })
                        ]
                    }),
                    y.jsxs(t2, {
                        children: [
                            y.jsx(yu, {
                                path: "/",
                                element: y.jsx(JE, {
                                    children: y.jsx(FE, {})
                                })
                            }),
                            y.jsx(yu, {
                                path: "/analysis",
                                element: y.jsx(UE, {})
                            }),
                            y.jsx(yu, {
                                path: "/engine",
                                element: y.jsx(e5, {})
                            })
                        ]
                    })
                ]
            })
        });
    Ov.createRoot(document.getElementById("root")).render(y.jsx(zv, {
        store: kc,
        children: y.jsx(t5, {})
    }));
})();
