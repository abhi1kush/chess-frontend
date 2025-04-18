const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-BJ_DBIuh.js","assets/soundUtils-BImTimMy.js","assets/soundUtils-DRJd2DQ5.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-BtFQvLni.js","assets/AnalysisGame-Tf-ih67V.css"])))=>i.map(i=>d[i]);
let wc, xE, wE, Ea, PE, CE, Dc, LE, XE, ht, Qc, Ay, YE, BE, qE, D, QE, HE, jE, UE, bE, zE, DE, S, kE, IE, jg, Db, KE, r0;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);
        new MutationObserver((s)=>{
            for (const f of s)if (f.type === "childList") for (const d of f.addedNodes)d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function i(s) {
            const f = {};
            return s.integrity && (f.integrity = s.integrity), s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? f.credentials = "include" : s.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
        }
        function o(s) {
            if (s.ep) return;
            s.ep = !0;
            const f = i(s);
            fetch(s.href, f);
        }
    })();
    function Tc(l) {
        return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
    }
    var Qs = {
        exports: {}
    }, xl = {};
    var Cp;
    function Wm() {
        if (Cp) return xl;
        Cp = 1;
        var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function i(o, s, f) {
            var d = null;
            if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
                f = {};
                for(var h in s)h !== "key" && (f[h] = s[h]);
            } else f = s;
            return s = f.ref, {
                $$typeof: l,
                type: o,
                key: d,
                ref: s !== void 0 ? s : null,
                props: f
            };
        }
        return xl.Fragment = r, xl.jsx = i, xl.jsxs = i, xl;
    }
    var xp;
    function Fm() {
        return xp || (xp = 1, Qs.exports = Wm()), Qs.exports;
    }
    let Ks, se;
    D = Fm();
    Ks = {
        exports: {}
    };
    se = {};
    var wp;
    function ev() {
        if (wp) return se;
        wp = 1;
        var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.iterator;
        function b(R) {
            return R === null || typeof R != "object" ? null : (R = E && R[E] || R["@@iterator"], typeof R == "function" ? R : null);
        }
        var O = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, _ = Object.assign, x = {};
        function P(R, Q, I) {
            this.props = R, this.context = Q, this.refs = x, this.updater = I || O;
        }
        P.prototype.isReactComponent = {}, P.prototype.setState = function(R, Q) {
            if (typeof R != "object" && typeof R != "function" && R != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, R, Q, "setState");
        }, P.prototype.forceUpdate = function(R) {
            this.updater.enqueueForceUpdate(this, R, "forceUpdate");
        };
        function A() {}
        A.prototype = P.prototype;
        function k(R, Q, I) {
            this.props = R, this.context = Q, this.refs = x, this.updater = I || O;
        }
        var B = k.prototype = new A;
        B.constructor = k, _(B, P.prototype), B.isPureReactComponent = !0;
        var G = Array.isArray, K = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, Z = Object.prototype.hasOwnProperty;
        function V(R, Q, I, X, F, me) {
            return I = me.ref, {
                $$typeof: l,
                type: R,
                key: Q,
                ref: I !== void 0 ? I : null,
                props: me
            };
        }
        function $(R, Q) {
            return V(R.type, Q, void 0, void 0, void 0, R.props);
        }
        function W(R) {
            return typeof R == "object" && R !== null && R.$$typeof === l;
        }
        function De(R) {
            var Q = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + R.replace(/[=:]/g, function(I) {
                return Q[I];
            });
        }
        var Pe = /\/+/g;
        function he(R, Q) {
            return typeof R == "object" && R !== null && R.key != null ? De("" + R.key) : Q.toString(36);
        }
        function He() {}
        function pt(R) {
            switch(R.status){
                case "fulfilled":
                    return R.value;
                case "rejected":
                    throw R.reason;
                default:
                    switch(typeof R.status == "string" ? R.then(He, He) : (R.status = "pending", R.then(function(Q) {
                        R.status === "pending" && (R.status = "fulfilled", R.value = Q);
                    }, function(Q) {
                        R.status === "pending" && (R.status = "rejected", R.reason = Q);
                    })), R.status){
                        case "fulfilled":
                            return R.value;
                        case "rejected":
                            throw R.reason;
                    }
            }
            throw R;
        }
        function Me(R, Q, I, X, F) {
            var me = typeof R;
            (me === "undefined" || me === "boolean") && (R = null);
            var re = !1;
            if (R === null) re = !0;
            else switch(me){
                case "bigint":
                case "string":
                case "number":
                    re = !0;
                    break;
                case "object":
                    switch(R.$$typeof){
                        case l:
                        case r:
                            re = !0;
                            break;
                        case y:
                            return re = R._init, Me(re(R._payload), Q, I, X, F);
                    }
            }
            if (re) return F = F(R), re = X === "" ? "." + he(R, 0) : X, G(F) ? (I = "", re != null && (I = re.replace(Pe, "$&/") + "/"), Me(F, Q, I, "", function(gt) {
                return gt;
            })) : F != null && (W(F) && (F = $(F, I + (F.key == null || R && R.key === F.key ? "" : ("" + F.key).replace(Pe, "$&/") + "/") + re)), Q.push(F)), 1;
            re = 0;
            var le = X === "" ? "." : X + ":";
            if (G(R)) for(var ve = 0; ve < R.length; ve++)X = R[ve], me = le + he(X, ve), re += Me(X, Q, I, me, F);
            else if (ve = b(R), typeof ve == "function") for(R = ve.call(R), ve = 0; !(X = R.next()).done;)X = X.value, me = le + he(X, ve++), re += Me(X, Q, I, me, F);
            else if (me === "object") {
                if (typeof R.then == "function") return Me(pt(R), Q, I, X, F);
                throw Q = String(R), Error("Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead.");
            }
            return re;
        }
        function z(R, Q, I) {
            if (R == null) return R;
            var X = [], F = 0;
            return Me(R, X, "", "", function(me) {
                return Q.call(I, me, F++);
            }), X;
        }
        function Y(R) {
            if (R._status === -1) {
                var Q = R._result;
                Q = Q(), Q.then(function(I) {
                    (R._status === 0 || R._status === -1) && (R._status = 1, R._result = I);
                }, function(I) {
                    (R._status === 0 || R._status === -1) && (R._status = 2, R._result = I);
                }), R._status === -1 && (R._status = 0, R._result = Q);
            }
            if (R._status === 1) return R._result.default;
            throw R._result;
        }
        var te = typeof reportError == "function" ? reportError : function(R) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var Q = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
                    error: R
                });
                if (!window.dispatchEvent(Q)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", R);
                return;
            }
            console.error(R);
        };
        function Se() {}
        return se.Children = {
            map: z,
            forEach: function(R, Q, I) {
                z(R, function() {
                    Q.apply(this, arguments);
                }, I);
            },
            count: function(R) {
                var Q = 0;
                return z(R, function() {
                    Q++;
                }), Q;
            },
            toArray: function(R) {
                return z(R, function(Q) {
                    return Q;
                }) || [];
            },
            only: function(R) {
                if (!W(R)) throw Error("React.Children.only expected to receive a single React element child.");
                return R;
            }
        }, se.Component = P, se.Fragment = i, se.Profiler = s, se.PureComponent = k, se.StrictMode = o, se.Suspense = g, se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, se.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(R) {
                return K.H.useMemoCache(R);
            }
        }, se.cache = function(R) {
            return function() {
                return R.apply(null, arguments);
            };
        }, se.cloneElement = function(R, Q, I) {
            if (R == null) throw Error("The argument must be a React element, but you passed " + R + ".");
            var X = _({}, R.props), F = R.key, me = void 0;
            if (Q != null) for(re in Q.ref !== void 0 && (me = void 0), Q.key !== void 0 && (F = "" + Q.key), Q)!Z.call(Q, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && Q.ref === void 0 || (X[re] = Q[re]);
            var re = arguments.length - 2;
            if (re === 1) X.children = I;
            else if (1 < re) {
                for(var le = Array(re), ve = 0; ve < re; ve++)le[ve] = arguments[ve + 2];
                X.children = le;
            }
            return V(R.type, F, void 0, void 0, me, X);
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
        }, se.createElement = function(R, Q, I) {
            var X, F = {}, me = null;
            if (Q != null) for(X in Q.key !== void 0 && (me = "" + Q.key), Q)Z.call(Q, X) && X !== "key" && X !== "__self" && X !== "__source" && (F[X] = Q[X]);
            var re = arguments.length - 2;
            if (re === 1) F.children = I;
            else if (1 < re) {
                for(var le = Array(re), ve = 0; ve < re; ve++)le[ve] = arguments[ve + 2];
                F.children = le;
            }
            if (R && R.defaultProps) for(X in re = R.defaultProps, re)F[X] === void 0 && (F[X] = re[X]);
            return V(R, me, void 0, void 0, null, F);
        }, se.createRef = function() {
            return {
                current: null
            };
        }, se.forwardRef = function(R) {
            return {
                $$typeof: h,
                render: R
            };
        }, se.isValidElement = W, se.lazy = function(R) {
            return {
                $$typeof: y,
                _payload: {
                    _status: -1,
                    _result: R
                },
                _init: Y
            };
        }, se.memo = function(R, Q) {
            return {
                $$typeof: m,
                type: R,
                compare: Q === void 0 ? null : Q
            };
        }, se.startTransition = function(R) {
            var Q = K.T, I = {};
            K.T = I;
            try {
                var X = R(), F = K.S;
                F !== null && F(I, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then(Se, te);
            } catch (me) {
                te(me);
            } finally{
                K.T = Q;
            }
        }, se.unstable_useCacheRefresh = function() {
            return K.H.useCacheRefresh();
        }, se.use = function(R) {
            return K.H.use(R);
        }, se.useActionState = function(R, Q, I) {
            return K.H.useActionState(R, Q, I);
        }, se.useCallback = function(R, Q) {
            return K.H.useCallback(R, Q);
        }, se.useContext = function(R) {
            return K.H.useContext(R);
        }, se.useDebugValue = function() {}, se.useDeferredValue = function(R, Q) {
            return K.H.useDeferredValue(R, Q);
        }, se.useEffect = function(R, Q, I) {
            var X = K.H;
            if (typeof I == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return X.useEffect(R, Q);
        }, se.useId = function() {
            return K.H.useId();
        }, se.useImperativeHandle = function(R, Q, I) {
            return K.H.useImperativeHandle(R, Q, I);
        }, se.useInsertionEffect = function(R, Q) {
            return K.H.useInsertionEffect(R, Q);
        }, se.useLayoutEffect = function(R, Q) {
            return K.H.useLayoutEffect(R, Q);
        }, se.useMemo = function(R, Q) {
            return K.H.useMemo(R, Q);
        }, se.useOptimistic = function(R, Q) {
            return K.H.useOptimistic(R, Q);
        }, se.useReducer = function(R, Q, I) {
            return K.H.useReducer(R, Q, I);
        }, se.useRef = function(R) {
            return K.H.useRef(R);
        }, se.useState = function(R) {
            return K.H.useState(R);
        }, se.useSyncExternalStore = function(R, Q, I) {
            return K.H.useSyncExternalStore(R, Q, I);
        }, se.useTransition = function() {
            return K.H.useTransition();
        }, se.version = "19.1.0", se;
    }
    var Mp;
    function Tu() {
        return Mp || (Mp = 1, Ks.exports = ev()), Ks.exports;
    }
    S = Tu();
    PE = Tc(S);
    var Gs = {
        exports: {}
    }, wl = {}, Ys = {
        exports: {}
    }, Xs = {};
    var Np;
    function tv() {
        return Np || (Np = 1, function(l) {
            function r(z, Y) {
                var te = z.length;
                z.push(Y);
                e: for(; 0 < te;){
                    var Se = te - 1 >>> 1, R = z[Se];
                    if (0 < s(R, Y)) z[Se] = Y, z[te] = R, te = Se;
                    else break e;
                }
            }
            function i(z) {
                return z.length === 0 ? null : z[0];
            }
            function o(z) {
                if (z.length === 0) return null;
                var Y = z[0], te = z.pop();
                if (te !== Y) {
                    z[0] = te;
                    e: for(var Se = 0, R = z.length, Q = R >>> 1; Se < Q;){
                        var I = 2 * (Se + 1) - 1, X = z[I], F = I + 1, me = z[F];
                        if (0 > s(X, te)) F < R && 0 > s(me, X) ? (z[Se] = me, z[F] = te, Se = F) : (z[Se] = X, z[I] = te, Se = I);
                        else if (F < R && 0 > s(me, te)) z[Se] = me, z[F] = te, Se = F;
                        else break e;
                    }
                }
                return Y;
            }
            function s(z, Y) {
                var te = z.sortIndex - Y.sortIndex;
                return te !== 0 ? te : z.id - Y.id;
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
            var g = [], m = [], y = 1, E = null, b = 3, O = !1, _ = !1, x = !1, P = !1, A = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
            function G(z) {
                for(var Y = i(m); Y !== null;){
                    if (Y.callback === null) o(m);
                    else if (Y.startTime <= z) o(m), Y.sortIndex = Y.expirationTime, r(g, Y);
                    else break;
                    Y = i(m);
                }
            }
            function K(z) {
                if (x = !1, G(z), !_) if (i(g) !== null) _ = !0, Z || (Z = !0, he());
                else {
                    var Y = i(m);
                    Y !== null && Me(K, Y.startTime - z);
                }
            }
            var Z = !1, V = -1, $ = 5, W = -1;
            function De() {
                return P ? !0 : !(l.unstable_now() - W < $);
            }
            function Pe() {
                if (P = !1, Z) {
                    var z = l.unstable_now();
                    W = z;
                    var Y = !0;
                    try {
                        e: {
                            _ = !1, x && (x = !1, k(V), V = -1), O = !0;
                            var te = b;
                            try {
                                t: {
                                    for(G(z), E = i(g); E !== null && !(E.expirationTime > z && De());){
                                        var Se = E.callback;
                                        if (typeof Se == "function") {
                                            E.callback = null, b = E.priorityLevel;
                                            var R = Se(E.expirationTime <= z);
                                            if (z = l.unstable_now(), typeof R == "function") {
                                                E.callback = R, G(z), Y = !0;
                                                break t;
                                            }
                                            E === i(g) && o(g), G(z);
                                        } else o(g);
                                        E = i(g);
                                    }
                                    if (E !== null) Y = !0;
                                    else {
                                        var Q = i(m);
                                        Q !== null && Me(K, Q.startTime - z), Y = !1;
                                    }
                                }
                                break e;
                            } finally{
                                E = null, b = te, O = !1;
                            }
                            Y = void 0;
                        }
                    } finally{
                        Y ? he() : Z = !1;
                    }
                }
            }
            var he;
            if (typeof B == "function") he = function() {
                B(Pe);
            };
            else if (typeof MessageChannel < "u") {
                var He = new MessageChannel, pt = He.port2;
                He.port1.onmessage = Pe, he = function() {
                    pt.postMessage(null);
                };
            } else he = function() {
                A(Pe, 0);
            };
            function Me(z, Y) {
                V = A(function() {
                    z(l.unstable_now());
                }, Y);
            }
            l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(z) {
                z.callback = null;
            }, l.unstable_forceFrameRate = function(z) {
                0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < z ? Math.floor(1e3 / z) : 5;
            }, l.unstable_getCurrentPriorityLevel = function() {
                return b;
            }, l.unstable_next = function(z) {
                switch(b){
                    case 1:
                    case 2:
                    case 3:
                        var Y = 3;
                        break;
                    default:
                        Y = b;
                }
                var te = b;
                b = Y;
                try {
                    return z();
                } finally{
                    b = te;
                }
            }, l.unstable_requestPaint = function() {
                P = !0;
            }, l.unstable_runWithPriority = function(z, Y) {
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
                var te = b;
                b = z;
                try {
                    return Y();
                } finally{
                    b = te;
                }
            }, l.unstable_scheduleCallback = function(z, Y, te) {
                var Se = l.unstable_now();
                switch(typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? Se + te : Se) : te = Se, z){
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
                return R = te + R, z = {
                    id: y++,
                    callback: Y,
                    priorityLevel: z,
                    startTime: te,
                    expirationTime: R,
                    sortIndex: -1
                }, te > Se ? (z.sortIndex = te, r(m, z), i(g) === null && z === i(m) && (x ? (k(V), V = -1) : x = !0, Me(K, te - Se))) : (z.sortIndex = R, r(g, z), _ || O || (_ = !0, Z || (Z = !0, he()))), z;
            }, l.unstable_shouldYield = De, l.unstable_wrapCallback = function(z) {
                var Y = b;
                return function() {
                    var te = b;
                    b = Y;
                    try {
                        return z.apply(this, arguments);
                    } finally{
                        b = te;
                    }
                };
            };
        }(Xs)), Xs;
    }
    var Ap;
    function nv() {
        return Ap || (Ap = 1, Ys.exports = tv()), Ys.exports;
    }
    var Is = {
        exports: {}
    }, ft = {};
    var Pp;
    function rv() {
        if (Pp) return ft;
        Pp = 1;
        var l = Tu();
        function r(g) {
            var m = "https://react.dev/errors/" + g;
            if (1 < arguments.length) {
                m += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var y = 2; y < arguments.length; y++)m += "&args[]=" + encodeURIComponent(arguments[y]);
            }
            return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function i() {}
        var o = {
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
        }, s = Symbol.for("react.portal");
        function f(g, m, y) {
            var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: s,
                key: E == null ? null : "" + E,
                children: g,
                containerInfo: m,
                implementation: y
            };
        }
        var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function h(g, m) {
            if (g === "font") return "";
            if (typeof m == "string") return m === "use-credentials" ? m : "";
        }
        return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ft.createPortal = function(g, m) {
            var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
            return f(g, m, null, y);
        }, ft.flushSync = function(g) {
            var m = d.T, y = o.p;
            try {
                if (d.T = null, o.p = 2, g) return g();
            } finally{
                d.T = m, o.p = y, o.d.f();
            }
        }, ft.preconnect = function(g, m) {
            typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(g, m));
        }, ft.prefetchDNS = function(g) {
            typeof g == "string" && o.d.D(g);
        }, ft.preinit = function(g, m) {
            if (typeof g == "string" && m && typeof m.as == "string") {
                var y = m.as, E = h(y, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, O = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
                y === "style" ? o.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
                    crossOrigin: E,
                    integrity: b,
                    fetchPriority: O
                }) : y === "script" && o.d.X(g, {
                    crossOrigin: E,
                    integrity: b,
                    fetchPriority: O,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0
                });
            }
        }, ft.preinitModule = function(g, m) {
            if (typeof g == "string") if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = h(m.as, m.crossOrigin);
                    o.d.M(g, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    });
                }
            } else m == null && o.d.M(g);
        }, ft.preload = function(g, m) {
            if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
                var y = m.as, E = h(y, m.crossOrigin);
                o.d.L(g, y, {
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
        }, ft.preloadModule = function(g, m) {
            if (typeof g == "string") if (m) {
                var y = h(m.as, m.crossOrigin);
                o.d.m(g, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                });
            } else o.d.m(g);
        }, ft.requestFormReset = function(g) {
            o.d.r(g);
        }, ft.unstable_batchedUpdates = function(g, m) {
            return g(m);
        }, ft.useFormState = function(g, m, y) {
            return d.H.useFormState(g, m, y);
        }, ft.useFormStatus = function() {
            return d.H.useHostTransitionStatus();
        }, ft.version = "19.1.0", ft;
    }
    var jp;
    function av() {
        if (jp) return Is.exports;
        jp = 1;
        function l() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (r) {
                console.error(r);
            }
        }
        return l(), Is.exports = rv(), Is.exports;
    }
    var Lp;
    function lv() {
        if (Lp) return wl;
        Lp = 1;
        var l = nv(), r = Tu(), i = av();
        function o(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var n = 2; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function s(e) {
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
            if (f(e) !== e) throw Error(o(188));
        }
        function g(e) {
            var t = e.alternate;
            if (!t) {
                if (t = f(e), t === null) throw Error(o(188));
                return t !== e ? null : e;
            }
            for(var n = e, a = t;;){
                var u = n.return;
                if (u === null) break;
                var c = u.alternate;
                if (c === null) {
                    if (a = u.return, a !== null) {
                        n = a;
                        continue;
                    }
                    break;
                }
                if (u.child === c.child) {
                    for(c = u.child; c;){
                        if (c === n) return h(u), e;
                        if (c === a) return h(u), t;
                        c = c.sibling;
                    }
                    throw Error(o(188));
                }
                if (n.return !== a.return) n = u, a = c;
                else {
                    for(var p = !1, v = u.child; v;){
                        if (v === n) {
                            p = !0, n = u, a = c;
                            break;
                        }
                        if (v === a) {
                            p = !0, a = u, n = c;
                            break;
                        }
                        v = v.sibling;
                    }
                    if (!p) {
                        for(v = c.child; v;){
                            if (v === n) {
                                p = !0, n = c, a = u;
                                break;
                            }
                            if (v === a) {
                                p = !0, a = c, n = u;
                                break;
                            }
                            v = v.sibling;
                        }
                        if (!p) throw Error(o(189));
                    }
                }
                if (n.alternate !== a) throw Error(o(190));
            }
            if (n.tag !== 3) throw Error(o(188));
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
        var y = Object.assign, E = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), k = Symbol.for("react.consumer"), B = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), De = Symbol.for("react.memo_cache_sentinel"), Pe = Symbol.iterator;
        function he(e) {
            return e === null || typeof e != "object" ? null : (e = Pe && e[Pe] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var He = Symbol.for("react.client.reference");
        function pt(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === He ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case _:
                    return "Fragment";
                case P:
                    return "Profiler";
                case x:
                    return "StrictMode";
                case K:
                    return "Suspense";
                case Z:
                    return "SuspenseList";
                case W:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case O:
                    return "Portal";
                case B:
                    return (e.displayName || "Context") + ".Provider";
                case k:
                    return (e._context.displayName || "Context") + ".Consumer";
                case G:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case V:
                    return t = e.displayName || null, t !== null ? t : pt(e.type) || "Memo";
                case $:
                    t = e._payload, e = e._init;
                    try {
                        return pt(e(t));
                    } catch  {}
            }
            return null;
        }
        var Me = Array.isArray, z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Se = [], R = -1;
        function Q(e) {
            return {
                current: e
            };
        }
        function I(e) {
            0 > R || (e.current = Se[R], Se[R] = null, R--);
        }
        function X(e, t) {
            R++, Se[R] = e.current, e.current = t;
        }
        var F = Q(null), me = Q(null), re = Q(null), le = Q(null);
        function ve(e, t) {
            switch(X(re, t), X(me, e), X(F, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? tp(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = tp(t), e = np(t, e);
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
            I(F), X(F, e);
        }
        function gt() {
            I(F), I(me), I(re);
        }
        function ln(e) {
            e.memoizedState !== null && X(le, e);
            var t = F.current, n = np(t, e.type);
            t !== n && (X(me, e), X(F, n));
        }
        function Ge(e) {
            me.current === e && (I(F), I(me)), le.current === e && (I(le), Tl._currentValue = te);
        }
        var ot = Object.prototype.hasOwnProperty, wn = l.unstable_scheduleCallback, _a = l.unstable_cancelCallback, Da = l.unstable_shouldYield, Mn = l.unstable_requestPaint, Nt = l.unstable_now, Ra = l.unstable_getCurrentPriorityLevel, Il = l.unstable_ImmediatePriority, Ca = l.unstable_UserBlockingPriority, wr = l.unstable_NormalPriority, xa = l.unstable_LowPriority, wa = l.unstable_IdlePriority, Ma = l.log, Zt = l.unstable_setDisableYieldValue, un = null, Ze = null;
        function $t(e) {
            if (typeof Ma == "function" && Zt(e), Ze && typeof Ze.setStrictMode == "function") try {
                Ze.setStrictMode(un, e);
            } catch  {}
        }
        var mt = Math.clz32 ? Math.clz32 : Na, Nu = Math.log, Mr = Math.LN2;
        function Na(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Nu(e) / Mr | 0) | 0;
        }
        var Nr = 256, on = 4194304;
        function At(e) {
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
        function Ar(e, t, n) {
            var a = e.pendingLanes;
            if (a === 0) return 0;
            var u = 0, c = e.suspendedLanes, p = e.pingedLanes;
            e = e.warmLanes;
            var v = a & 134217727;
            return v !== 0 ? (a = v & ~c, a !== 0 ? u = At(a) : (p &= v, p !== 0 ? u = At(p) : n || (n = v & ~e, n !== 0 && (u = At(n))))) : (v = a & ~c, v !== 0 ? u = At(v) : p !== 0 ? u = At(p) : n || (n = a & ~e, n !== 0 && (u = At(n)))), u === 0 ? 0 : t !== 0 && t !== u && (t & c) === 0 && (c = u & -u, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : u;
        }
        function lr(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function Au(e, t) {
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
        function Vl() {
            var e = Nr;
            return Nr <<= 1, (Nr & 4194048) === 0 && (Nr = 256), e;
        }
        function Pr() {
            var e = on;
            return on <<= 1, (on & 62914560) === 0 && (on = 4194304), e;
        }
        function Aa(e) {
            for(var t = [], n = 0; 31 > n; n++)t.push(e);
            return t;
        }
        function ir(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Pu(e, t, n, a, u, c) {
            var p = e.pendingLanes;
            e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
            var v = e.entanglements, T = e.expirationTimes, N = e.hiddenUpdates;
            for(n = p & ~n; 0 < n;){
                var U = 31 - mt(n), H = 1 << U;
                v[U] = 0, T[U] = -1;
                var j = N[U];
                if (j !== null) for(N[U] = null, U = 0; U < j.length; U++){
                    var L = j[U];
                    L !== null && (L.lane &= -536870913);
                }
                n &= ~H;
            }
            a !== 0 && Zl(e, a, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
        }
        function Zl(e, t, n) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var a = 31 - mt(t);
            e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 4194090;
        }
        function jr(e, t) {
            var n = e.entangledLanes |= t;
            for(e = e.entanglements; n;){
                var a = 31 - mt(n), u = 1 << a;
                u & t | e[a] & t && (e[a] |= t), n &= ~u;
            }
        }
        function Pa(e) {
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
        function Nn(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Lr() {
            var e = Y.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ep(e.type));
        }
        function ju(e, t) {
            var n = Y.p;
            try {
                return Y.p = e, t();
            } finally{
                Y.p = n;
            }
        }
        var Jt = Math.random().toString(36).slice(2), $e = "__reactFiber$" + Jt, st = "__reactProps$" + Jt, Ee = "__reactContainer$" + Jt, Ne = "__reactEvents$" + Jt, yt = "__reactListeners$" + Jt, Ye = "__reactHandles$" + Jt, Yt = "__reactResources$" + Jt, nt = "__reactMarker$" + Jt;
        function ja(e) {
            delete e[$e], delete e[st], delete e[Ne], delete e[yt], delete e[Ye];
        }
        function kr(e) {
            var t = e[$e];
            if (t) return t;
            for(var n = e.parentNode; n;){
                if (t = n[Ee] || n[$e]) {
                    if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = ip(e); e !== null;){
                        if (n = e[$e]) return n;
                        e = ip(e);
                    }
                    return t;
                }
                e = n, n = e.parentNode;
            }
            return null;
        }
        function Br(e) {
            if (e = e[$e] || e[Ee]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function La(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(o(33));
        }
        function zr(e) {
            var t = e[Yt];
            return t || (t = e[Yt] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Je(e) {
            e[nt] = !0;
        }
        var Kc = new Set, Gc = {};
        function ur(e, t) {
            Ur(e, t), Ur(e + "Capture", t);
        }
        function Ur(e, t) {
            for(Gc[e] = t, e = 0; e < t.length; e++)Kc.add(t[e]);
        }
        var G0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Yc = {}, Xc = {};
        function Y0(e) {
            return ot.call(Xc, e) ? !0 : ot.call(Yc, e) ? !1 : G0.test(e) ? Xc[e] = !0 : (Yc[e] = !0, !1);
        }
        function $l(e, t, n) {
            if (Y0(t)) if (n === null) e.removeAttribute(t);
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
        function Jl(e, t, n) {
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
        function sn(e, t, n, a) {
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
        var Lu, Ic;
        function qr(e) {
            if (Lu === void 0) try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                Lu = t && t[1] || "", Ic = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Lu + e + Ic;
        }
        var ku = !1;
        function Bu(e, t) {
            if (!e || ku) return "";
            ku = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var a = {
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
                                    } catch (L) {
                                        var j = L;
                                    }
                                    Reflect.construct(e, [], H);
                                } else {
                                    try {
                                        H.call();
                                    } catch (L) {
                                        j = L;
                                    }
                                    e.call(H.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (L) {
                                    j = L;
                                }
                                (H = e()) && typeof H.catch == "function" && H.catch(function() {});
                            }
                        } catch (L) {
                            if (L && j && typeof L.stack == "string") return [
                                L.stack,
                                j.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var c = a.DetermineComponentFrameRoot(), p = c[0], v = c[1];
                if (p && v) {
                    var T = p.split(`
`), N = v.split(`
`);
                    for(u = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot");)a++;
                    for(; u < N.length && !N[u].includes("DetermineComponentFrameRoot");)u++;
                    if (a === T.length || u === N.length) for(a = T.length - 1, u = N.length - 1; 1 <= a && 0 <= u && T[a] !== N[u];)u--;
                    for(; 1 <= a && 0 <= u; a--, u--)if (T[a] !== N[u]) {
                        if (a !== 1 || u !== 1) do if (a--, u--, 0 > u || T[a] !== N[u]) {
                            var U = `
` + T[a].replace(" at new ", " at ");
                            return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
                        }
                        while (1 <= a && 0 <= u);
                        break;
                    }
                }
            } finally{
                ku = !1, Error.prepareStackTrace = n;
            }
            return (n = e ? e.displayName || e.name : "") ? qr(n) : "";
        }
        function X0(e) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return qr(e.type);
                case 16:
                    return qr("Lazy");
                case 13:
                    return qr("Suspense");
                case 19:
                    return qr("SuspenseList");
                case 0:
                case 15:
                    return Bu(e.type, !1);
                case 11:
                    return Bu(e.type.render, !1);
                case 1:
                    return Bu(e.type, !0);
                case 31:
                    return qr("Activity");
                default:
                    return "";
            }
        }
        function Vc(e) {
            try {
                var t = "";
                do t += X0(e), e = e.return;
                while (e);
                return t;
            } catch (n) {
                return `
Error generating stack: ` + n.message + `
` + n.stack;
            }
        }
        function Pt(e) {
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
        function Zc(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function I0(e) {
            var t = Zc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
                var u = n.get, c = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return u.call(this);
                    },
                    set: function(p) {
                        a = "" + p, c.call(this, p);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(p) {
                        a = "" + p;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function Wl(e) {
            e._valueTracker || (e._valueTracker = I0(e));
        }
        function $c(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(), a = "";
            return e && (a = Zc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
        }
        function Fl(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var V0 = /[\n"\\]/g;
        function jt(e) {
            return e.replace(V0, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function zu(e, t, n, a, u, c, p, v) {
            e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Pt(t)) : e.value !== "" + Pt(t) && (e.value = "" + Pt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Uu(e, p, Pt(t)) : n != null ? Uu(e, p, Pt(n)) : a != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Pt(v) : e.removeAttribute("name");
        }
        function Jc(e, t, n, a, u, c, p, v) {
            if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
                if (!(c !== "submit" && c !== "reset" || t != null)) return;
                n = n != null ? "" + Pt(n) : "", t = t != null ? "" + Pt(t) : n, v || t === e.value || (e.value = t), e.defaultValue = t;
            }
            a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = v ? e.checked : !!a, e.defaultChecked = !!a, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p);
        }
        function Uu(e, t, n) {
            t === "number" && Fl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
        }
        function Hr(e, t, n, a) {
            if (e = e.options, t) {
                t = {};
                for(var u = 0; u < n.length; u++)t["$" + n[u]] = !0;
                for(n = 0; n < e.length; n++)u = t.hasOwnProperty("$" + e[n].value), e[n].selected !== u && (e[n].selected = u), u && a && (e[n].defaultSelected = !0);
            } else {
                for(n = "" + Pt(n), t = null, u = 0; u < e.length; u++){
                    if (e[u].value === n) {
                        e[u].selected = !0, a && (e[u].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[u].disabled || (t = e[u]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function Wc(e, t, n) {
            if (t != null && (t = "" + Pt(t), t !== e.value && (e.value = t), n == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = n != null ? "" + Pt(n) : "";
        }
        function Fc(e, t, n, a) {
            if (t == null) {
                if (a != null) {
                    if (n != null) throw Error(o(92));
                    if (Me(a)) {
                        if (1 < a.length) throw Error(o(93));
                        a = a[0];
                    }
                    n = a;
                }
                n == null && (n = ""), t = n;
            }
            n = Pt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a);
        }
        function Qr(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && n.nodeType === 3) {
                    n.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var Z0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function ef(e, t, n) {
            var a = t.indexOf("--") === 0;
            n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Z0.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
        }
        function tf(e, t, n) {
            if (t != null && typeof t != "object") throw Error(o(62));
            if (e = e.style, n != null) {
                for(var a in n)!n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
                for(var u in t)a = t[u], t.hasOwnProperty(u) && n[u] !== a && ef(e, u, a);
            } else for(var c in t)t.hasOwnProperty(c) && ef(e, c, t[c]);
        }
        function qu(e) {
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
        var $0 = new Map([
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
        ]), J0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function ei(e) {
            return J0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Hu = null;
        function Qu(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var Kr = null, Gr = null;
        function nf(e) {
            var t = Br(e);
            if (t && (e = t.stateNode)) {
                var n = e[st] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (zu(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                            for(n = e; n.parentNode;)n = n.parentNode;
                            for(n = n.querySelectorAll('input[name="' + jt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++){
                                var a = n[t];
                                if (a !== e && a.form === e.form) {
                                    var u = a[st] || null;
                                    if (!u) throw Error(o(90));
                                    zu(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                                }
                            }
                            for(t = 0; t < n.length; t++)a = n[t], a.form === e.form && $c(a);
                        }
                        break e;
                    case "textarea":
                        Wc(e, n.value, n.defaultValue);
                        break e;
                    case "select":
                        t = n.value, t != null && Hr(e, !!n.multiple, t, !1);
                }
            }
        }
        var Ku = !1;
        function rf(e, t, n) {
            if (Ku) return e(t, n);
            Ku = !0;
            try {
                var a = e(t);
                return a;
            } finally{
                if (Ku = !1, (Kr !== null || Gr !== null) && (Ui(), Kr && (t = Kr, e = Gr, Gr = Kr = null, nf(t), e))) for(t = 0; t < e.length; t++)nf(e[t]);
            }
        }
        function ka(e, t) {
            var n = e.stateNode;
            if (n === null) return null;
            var a = n[st] || null;
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
            if (n && typeof n != "function") throw Error(o(231, t, typeof n));
            return n;
        }
        var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gu = !1;
        if (cn) try {
            var Ba = {};
            Object.defineProperty(Ba, "passive", {
                get: function() {
                    Gu = !0;
                }
            }), window.addEventListener("test", Ba, Ba), window.removeEventListener("test", Ba, Ba);
        } catch  {
            Gu = !1;
        }
        var An = null, Yu = null, ti = null;
        function af() {
            if (ti) return ti;
            var e, t = Yu, n = t.length, a, u = "value" in An ? An.value : An.textContent, c = u.length;
            for(e = 0; e < n && t[e] === u[e]; e++);
            var p = n - e;
            for(a = 1; a <= p && t[n - a] === u[c - a]; a++);
            return ti = u.slice(e, 1 < a ? 1 - a : void 0);
        }
        function ni(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function ri() {
            return !0;
        }
        function lf() {
            return !1;
        }
        function bt(e) {
            function t(n, a, u, c, p) {
                this._reactName = n, this._targetInst = u, this.type = a, this.nativeEvent = c, this.target = p, this.currentTarget = null;
                for(var v in e)e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(c) : c[v]);
                return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? ri : lf, this.isPropagationStopped = lf, this;
            }
            return y(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ri);
                },
                stopPropagation: function() {
                    var n = this.nativeEvent;
                    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ri);
                },
                persist: function() {},
                isPersistent: ri
            }), t;
        }
        var or = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, ai = bt(or), za = y({}, or, {
            view: 0,
            detail: 0
        }), W0 = bt(za), Xu, Iu, Ua, li = y({}, za, {
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
            getModifierState: Zu,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ua && (Ua && e.type === "mousemove" ? (Xu = e.screenX - Ua.screenX, Iu = e.screenY - Ua.screenY) : Iu = Xu = 0, Ua = e), Xu);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Iu;
            }
        }), uf = bt(li), F0 = y({}, li, {
            dataTransfer: 0
        }), e1 = bt(F0), t1 = y({}, za, {
            relatedTarget: 0
        }), Vu = bt(t1), n1 = y({}, or, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), r1 = bt(n1), a1 = y({}, or, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), l1 = bt(a1), i1 = y({}, or, {
            data: 0
        }), of = bt(i1), u1 = {
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
        }, o1 = {
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
        }, s1 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function c1(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = s1[e]) ? !!t[e] : !1;
        }
        function Zu() {
            return c1;
        }
        var f1 = y({}, za, {
            key: function(e) {
                if (e.key) {
                    var t = u1[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? o1[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Zu,
            charCode: function(e) {
                return e.type === "keypress" ? ni(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), d1 = bt(f1), h1 = y({}, li, {
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
        }), sf = bt(h1), p1 = y({}, za, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Zu
        }), g1 = bt(p1), m1 = y({}, or, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), v1 = bt(m1), y1 = y({}, li, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), b1 = bt(y1), S1 = y({}, or, {
            newState: 0,
            oldState: 0
        }), E1 = bt(S1), O1 = [
            9,
            13,
            27,
            32
        ], $u = cn && "CompositionEvent" in window, qa = null;
        cn && "documentMode" in document && (qa = document.documentMode);
        var T1 = cn && "TextEvent" in window && !qa, cf = cn && (!$u || qa && 8 < qa && 11 >= qa), ff = " ", df = !1;
        function hf(e, t) {
            switch(e){
                case "keyup":
                    return O1.indexOf(t.keyCode) !== -1;
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
        function pf(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var Yr = !1;
        function _1(e, t) {
            switch(e){
                case "compositionend":
                    return pf(t);
                case "keypress":
                    return t.which !== 32 ? null : (df = !0, ff);
                case "textInput":
                    return e = t.data, e === ff && df ? null : e;
                default:
                    return null;
            }
        }
        function D1(e, t) {
            if (Yr) return e === "compositionend" || !$u && hf(e, t) ? (e = af(), ti = Yu = An = null, Yr = !1, e) : null;
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
                    return cf && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var R1 = {
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
        function gf(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!R1[e.type] : t === "textarea";
        }
        function mf(e, t, n, a) {
            Kr ? Gr ? Gr.push(a) : Gr = [
                a
            ] : Kr = a, t = Yi(t, "onChange"), 0 < t.length && (n = new ai("onChange", "change", null, n, a), e.push({
                event: n,
                listeners: t
            }));
        }
        var Ha = null, Qa = null;
        function C1(e) {
            $h(e, 0);
        }
        function ii(e) {
            var t = La(e);
            if ($c(t)) return e;
        }
        function vf(e, t) {
            if (e === "change") return t;
        }
        var yf = !1;
        if (cn) {
            var Ju;
            if (cn) {
                var Wu = "oninput" in document;
                if (!Wu) {
                    var bf = document.createElement("div");
                    bf.setAttribute("oninput", "return;"), Wu = typeof bf.oninput == "function";
                }
                Ju = Wu;
            } else Ju = !1;
            yf = Ju && (!document.documentMode || 9 < document.documentMode);
        }
        function Sf() {
            Ha && (Ha.detachEvent("onpropertychange", Ef), Qa = Ha = null);
        }
        function Ef(e) {
            if (e.propertyName === "value" && ii(Qa)) {
                var t = [];
                mf(t, Qa, e, Qu(e)), rf(C1, t);
            }
        }
        function x1(e, t, n) {
            e === "focusin" ? (Sf(), Ha = t, Qa = n, Ha.attachEvent("onpropertychange", Ef)) : e === "focusout" && Sf();
        }
        function w1(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return ii(Qa);
        }
        function M1(e, t) {
            if (e === "click") return ii(t);
        }
        function N1(e, t) {
            if (e === "input" || e === "change") return ii(t);
        }
        function A1(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var _t = typeof Object.is == "function" ? Object.is : A1;
        function Ka(e, t) {
            if (_t(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var n = Object.keys(e), a = Object.keys(t);
            if (n.length !== a.length) return !1;
            for(a = 0; a < n.length; a++){
                var u = n[a];
                if (!ot.call(t, u) || !_t(e[u], t[u])) return !1;
            }
            return !0;
        }
        function Of(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function Tf(e, t) {
            var n = Of(e);
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
                n = Of(n);
            }
        }
        function _f(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function Df(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = Fl(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var n = typeof t.contentWindow.location.href == "string";
                } catch  {
                    n = !1;
                }
                if (n) e = t.contentWindow;
                else break;
                t = Fl(e.document);
            }
            return t;
        }
        function Fu(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var P1 = cn && "documentMode" in document && 11 >= document.documentMode, Xr = null, eo = null, Ga = null, to = !1;
        function Rf(e, t, n) {
            var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
            to || Xr == null || Xr !== Fl(a) || (a = Xr, "selectionStart" in a && Fu(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset
            }), Ga && Ka(Ga, a) || (Ga = a, a = Yi(eo, "onSelect"), 0 < a.length && (t = new ai("onSelect", "select", null, t, n), e.push({
                event: t,
                listeners: a
            }), t.target = Xr)));
        }
        function sr(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
        }
        var Ir = {
            animationend: sr("Animation", "AnimationEnd"),
            animationiteration: sr("Animation", "AnimationIteration"),
            animationstart: sr("Animation", "AnimationStart"),
            transitionrun: sr("Transition", "TransitionRun"),
            transitionstart: sr("Transition", "TransitionStart"),
            transitioncancel: sr("Transition", "TransitionCancel"),
            transitionend: sr("Transition", "TransitionEnd")
        }, no = {}, Cf = {};
        cn && (Cf = document.createElement("div").style, "AnimationEvent" in window || (delete Ir.animationend.animation, delete Ir.animationiteration.animation, delete Ir.animationstart.animation), "TransitionEvent" in window || delete Ir.transitionend.transition);
        function cr(e) {
            if (no[e]) return no[e];
            if (!Ir[e]) return e;
            var t = Ir[e], n;
            for(n in t)if (t.hasOwnProperty(n) && n in Cf) return no[e] = t[n];
            return e;
        }
        var xf = cr("animationend"), wf = cr("animationiteration"), Mf = cr("animationstart"), j1 = cr("transitionrun"), L1 = cr("transitionstart"), k1 = cr("transitioncancel"), Nf = cr("transitionend"), Af = new Map, ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        ro.push("scrollEnd");
        function Xt(e, t) {
            Af.set(e, t), ur(t, [
                e
            ]);
        }
        var Pf = new WeakMap;
        function Lt(e, t) {
            if (typeof e == "object" && e !== null) {
                var n = Pf.get(e);
                return n !== void 0 ? n : (t = {
                    value: e,
                    source: t,
                    stack: Vc(t)
                }, Pf.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Vc(t)
            };
        }
        var kt = [], Vr = 0, ao = 0;
        function ui() {
            for(var e = Vr, t = ao = Vr = 0; t < e;){
                var n = kt[t];
                kt[t++] = null;
                var a = kt[t];
                kt[t++] = null;
                var u = kt[t];
                kt[t++] = null;
                var c = kt[t];
                if (kt[t++] = null, a !== null && u !== null) {
                    var p = a.pending;
                    p === null ? u.next = u : (u.next = p.next, p.next = u), a.pending = u;
                }
                c !== 0 && jf(n, u, c);
            }
        }
        function oi(e, t, n, a) {
            kt[Vr++] = e, kt[Vr++] = t, kt[Vr++] = n, kt[Vr++] = a, ao |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function lo(e, t, n, a) {
            return oi(e, t, n, a), si(e);
        }
        function Zr(e, t) {
            return oi(e, null, null, t), si(e);
        }
        function jf(e, t, n) {
            e.lanes |= n;
            var a = e.alternate;
            a !== null && (a.lanes |= n);
            for(var u = !1, c = e.return; c !== null;)c.childLanes |= n, a = c.alternate, a !== null && (a.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
            return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - mt(n), e = c.hiddenUpdates, a = e[u], a === null ? e[u] = [
                t
            ] : a.push(t), t.lane = n | 536870912), c) : null;
        }
        function si(e) {
            if (50 < gl) throw gl = 0, ds = null, Error(o(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var $r = {};
        function B1(e, t, n, a) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Dt(e, t, n, a) {
            return new B1(e, t, n, a);
        }
        function io(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function fn(e, t) {
            var n = e.alternate;
            return n === null ? (n = Dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
        }
        function Lf(e, t) {
            e.flags &= 65011714;
            var n = e.alternate;
            return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function ci(e, t, n, a, u, c) {
            var p = 0;
            if (a = e, typeof e == "function") io(e) && (p = 1);
            else if (typeof e == "string") p = Um(e, n, F.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case W:
                    return e = Dt(31, n, t, u), e.elementType = W, e.lanes = c, e;
                case _:
                    return fr(n.children, u, c, t);
                case x:
                    p = 8, u |= 24;
                    break;
                case P:
                    return e = Dt(12, n, t, u | 2), e.elementType = P, e.lanes = c, e;
                case K:
                    return e = Dt(13, n, t, u), e.elementType = K, e.lanes = c, e;
                case Z:
                    return e = Dt(19, n, t, u), e.elementType = Z, e.lanes = c, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case A:
                        case B:
                            p = 10;
                            break e;
                        case k:
                            p = 9;
                            break e;
                        case G:
                            p = 11;
                            break e;
                        case V:
                            p = 14;
                            break e;
                        case $:
                            p = 16, a = null;
                            break e;
                    }
                    p = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), a = null;
            }
            return t = Dt(p, n, t, u), t.elementType = e, t.type = a, t.lanes = c, t;
        }
        function fr(e, t, n, a) {
            return e = Dt(7, e, a, t), e.lanes = n, e;
        }
        function uo(e, t, n) {
            return e = Dt(6, e, null, t), e.lanes = n, e;
        }
        function oo(e, t, n) {
            return t = Dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Jr = [], Wr = 0, fi = null, di = 0, Bt = [], zt = 0, dr = null, dn = 1, hn = "";
        function hr(e, t) {
            Jr[Wr++] = di, Jr[Wr++] = fi, fi = e, di = t;
        }
        function kf(e, t, n) {
            Bt[zt++] = dn, Bt[zt++] = hn, Bt[zt++] = dr, dr = e;
            var a = dn;
            e = hn;
            var u = 32 - mt(a) - 1;
            a &= ~(1 << u), n += 1;
            var c = 32 - mt(t) + u;
            if (30 < c) {
                var p = u - u % 5;
                c = (a & (1 << p) - 1).toString(32), a >>= p, u -= p, dn = 1 << 32 - mt(t) + u | n << u | a, hn = c + e;
            } else dn = 1 << c | n << u | a, hn = e;
        }
        function so(e) {
            e.return !== null && (hr(e, 1), kf(e, 1, 0));
        }
        function co(e) {
            for(; e === fi;)fi = Jr[--Wr], Jr[Wr] = null, di = Jr[--Wr], Jr[Wr] = null;
            for(; e === dr;)dr = Bt[--zt], Bt[zt] = null, hn = Bt[--zt], Bt[zt] = null, dn = Bt[--zt], Bt[zt] = null;
        }
        var vt = null, Be = null, Oe = !1, pr = null, Wt = !1, fo = Error(o(519));
        function gr(e) {
            var t = Error(o(418, ""));
            throw Ia(Lt(t, e)), fo;
        }
        function Bf(e) {
            var t = e.stateNode, n = e.type, a = e.memoizedProps;
            switch(t[$e] = e, t[st] = a, n){
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
                    for(n = 0; n < vl.length; n++)ge(vl[n], t);
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
                    ge("invalid", t), Jc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Wl(t);
                    break;
                case "select":
                    ge("invalid", t);
                    break;
                case "textarea":
                    ge("invalid", t), Fc(t, a.value, a.defaultValue, a.children), Wl(t);
            }
            n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || ep(t.textContent, n) ? (a.popover != null && (ge("beforetoggle", t), ge("toggle", t)), a.onScroll != null && ge("scroll", t), a.onScrollEnd != null && ge("scrollend", t), a.onClick != null && (t.onclick = Xi), t = !0) : t = !1, t || gr(e);
        }
        function zf(e) {
            for(vt = e.return; vt;)switch(vt.tag){
                case 5:
                case 13:
                    Wt = !1;
                    return;
                case 27:
                case 3:
                    Wt = !0;
                    return;
                default:
                    vt = vt.return;
            }
        }
        function Ya(e) {
            if (e !== vt) return !1;
            if (!Oe) return zf(e), Oe = !0, !1;
            var t = e.tag, n;
            if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || xs(e.type, e.memoizedProps)), n = !n), n && Be && gr(e), zf(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (n = e.data, n === "/$") {
                            if (t === 0) {
                                Be = Vt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    Be = null;
                }
            } else t === 27 ? (t = Be, Vn(e.type) ? (e = As, As = null, Be = e) : Be = t) : Be = vt ? Vt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Xa() {
            Be = vt = null, Oe = !1;
        }
        function Uf() {
            var e = pr;
            return e !== null && (Ot === null ? Ot = e : Ot.push.apply(Ot, e), pr = null), e;
        }
        function Ia(e) {
            pr === null ? pr = [
                e
            ] : pr.push(e);
        }
        var ho = Q(null), mr = null, pn = null;
        function Pn(e, t, n) {
            X(ho, t._currentValue), t._currentValue = n;
        }
        function gn(e) {
            e._currentValue = ho.current, I(ho);
        }
        function po(e, t, n) {
            for(; e !== null;){
                var a = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
                e = e.return;
            }
        }
        function go(e, t, n, a) {
            var u = e.child;
            for(u !== null && (u.return = e); u !== null;){
                var c = u.dependencies;
                if (c !== null) {
                    var p = u.child;
                    c = c.firstContext;
                    e: for(; c !== null;){
                        var v = c;
                        c = u;
                        for(var T = 0; T < t.length; T++)if (v.context === t[T]) {
                            c.lanes |= n, v = c.alternate, v !== null && (v.lanes |= n), po(c.return, n, e), a || (p = null);
                            break e;
                        }
                        c = v.next;
                    }
                } else if (u.tag === 18) {
                    if (p = u.return, p === null) throw Error(o(341));
                    p.lanes |= n, c = p.alternate, c !== null && (c.lanes |= n), po(p, n, e), p = null;
                } else p = u.child;
                if (p !== null) p.return = u;
                else for(p = u; p !== null;){
                    if (p === e) {
                        p = null;
                        break;
                    }
                    if (u = p.sibling, u !== null) {
                        u.return = p.return, p = u;
                        break;
                    }
                    p = p.return;
                }
                u = p;
            }
        }
        function Va(e, t, n, a) {
            e = null;
            for(var u = t, c = !1; u !== null;){
                if (!c) {
                    if ((u.flags & 524288) !== 0) c = !0;
                    else if ((u.flags & 262144) !== 0) break;
                }
                if (u.tag === 10) {
                    var p = u.alternate;
                    if (p === null) throw Error(o(387));
                    if (p = p.memoizedProps, p !== null) {
                        var v = u.type;
                        _t(u.pendingProps.value, p.value) || (e !== null ? e.push(v) : e = [
                            v
                        ]);
                    }
                } else if (u === le.current) {
                    if (p = u.alternate, p === null) throw Error(o(387));
                    p.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Tl) : e = [
                        Tl
                    ]);
                }
                u = u.return;
            }
            e !== null && go(t, e, n, a), t.flags |= 262144;
        }
        function hi(e) {
            for(e = e.firstContext; e !== null;){
                if (!_t(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function vr(e) {
            mr = e, pn = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function ct(e) {
            return qf(mr, e);
        }
        function pi(e, t) {
            return mr === null && vr(e), qf(e, t);
        }
        function qf(e, t) {
            var n = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, pn === null) {
                if (e === null) throw Error(o(308));
                pn = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else pn = pn.next = t;
            return n;
        }
        var z1 = typeof AbortController < "u" ? AbortController : function() {
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
        }, U1 = l.unstable_scheduleCallback, q1 = l.unstable_NormalPriority, Xe = {
            $$typeof: B,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function mo() {
            return {
                controller: new z1,
                data: new Map,
                refCount: 0
            };
        }
        function Za(e) {
            e.refCount--, e.refCount === 0 && U1(q1, function() {
                e.controller.abort();
            });
        }
        var $a = null, vo = 0, Fr = 0, ea = null;
        function H1(e, t) {
            if ($a === null) {
                var n = $a = [];
                vo = 0, Fr = bs(), ea = {
                    status: "pending",
                    value: void 0,
                    then: function(a) {
                        n.push(a);
                    }
                };
            }
            return vo++, t.then(Hf, Hf), t;
        }
        function Hf() {
            if (--vo === 0 && $a !== null) {
                ea !== null && (ea.status = "fulfilled");
                var e = $a;
                $a = null, Fr = 0, ea = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function Q1(e, t) {
            var n = [], a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    n.push(u);
                }
            };
            return e.then(function() {
                a.status = "fulfilled", a.value = t;
                for(var u = 0; u < n.length; u++)(0, n[u])(t);
            }, function(u) {
                for(a.status = "rejected", a.reason = u, u = 0; u < n.length; u++)(0, n[u])(void 0);
            }), a;
        }
        var Qf = z.S;
        z.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && H1(e, t), Qf !== null && Qf(e, t);
        };
        var yr = Q(null);
        function yo() {
            var e = yr.current;
            return e !== null ? e : Ae.pooledCache;
        }
        function gi(e, t) {
            t === null ? X(yr, yr.current) : X(yr, t.pool);
        }
        function Kf() {
            var e = yo();
            return e === null ? null : {
                parent: Xe._currentValue,
                pool: e
            };
        }
        var Ja = Error(o(460)), Gf = Error(o(474)), mi = Error(o(542)), bo = {
            then: function() {}
        };
        function Yf(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function vi() {}
        function Xf(e, t, n) {
            switch(n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(vi, vi), t = n), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Vf(e), e;
                default:
                    if (typeof t.status == "string") t.then(vi, vi);
                    else {
                        if (e = Ae, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
                        e = t, e.status = "pending", e.then(function(a) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "fulfilled", u.value = a;
                            }
                        }, function(a) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "rejected", u.reason = a;
                            }
                        });
                    }
                    switch(t.status){
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw e = t.reason, Vf(e), e;
                    }
                    throw Wa = t, Ja;
            }
        }
        var Wa = null;
        function If() {
            if (Wa === null) throw Error(o(459));
            var e = Wa;
            return Wa = null, e;
        }
        function Vf(e) {
            if (e === Ja || e === mi) throw Error(o(483));
        }
        var jn = !1;
        function So(e) {
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
        function Eo(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function Ln(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function kn(e, t, n) {
            var a = e.updateQueue;
            if (a === null) return null;
            if (a = a.shared, (Te & 2) !== 0) {
                var u = a.pending;
                return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = si(e), jf(e, null, n), t;
            }
            return oi(e, a, t, n), si(e);
        }
        function Fa(e, t, n) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
                var a = t.lanes;
                a &= e.pendingLanes, n |= a, t.lanes = n, jr(e, n);
            }
        }
        function Oo(e, t) {
            var n = e.updateQueue, a = e.alternate;
            if (a !== null && (a = a.updateQueue, n === a)) {
                var u = null, c = null;
                if (n = n.firstBaseUpdate, n !== null) {
                    do {
                        var p = {
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: null,
                            next: null
                        };
                        c === null ? u = c = p : c = c.next = p, n = n.next;
                    }while (n !== null);
                    c === null ? u = c = t : c = c.next = t;
                } else u = c = t;
                n = {
                    baseState: a.baseState,
                    firstBaseUpdate: u,
                    lastBaseUpdate: c,
                    shared: a.shared,
                    callbacks: a.callbacks
                }, e.updateQueue = n;
                return;
            }
            e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
        }
        var To = !1;
        function el() {
            if (To) {
                var e = ea;
                if (e !== null) throw e;
            }
        }
        function tl(e, t, n, a) {
            To = !1;
            var u = e.updateQueue;
            jn = !1;
            var c = u.firstBaseUpdate, p = u.lastBaseUpdate, v = u.shared.pending;
            if (v !== null) {
                u.shared.pending = null;
                var T = v, N = T.next;
                T.next = null, p === null ? c = N : p.next = N, p = T;
                var U = e.alternate;
                U !== null && (U = U.updateQueue, v = U.lastBaseUpdate, v !== p && (v === null ? U.firstBaseUpdate = N : v.next = N, U.lastBaseUpdate = T));
            }
            if (c !== null) {
                var H = u.baseState;
                p = 0, U = N = T = null, v = c;
                do {
                    var j = v.lane & -536870913, L = j !== v.lane;
                    if (L ? (ye & j) === j : (a & j) === j) {
                        j !== 0 && j === Fr && (To = !0), U !== null && (U = U.next = {
                            lane: 0,
                            tag: v.tag,
                            payload: v.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ie = e, ne = v;
                            j = t;
                            var xe = n;
                            switch(ne.tag){
                                case 1:
                                    if (ie = ne.payload, typeof ie == "function") {
                                        H = ie.call(xe, H, j);
                                        break e;
                                    }
                                    H = ie;
                                    break e;
                                case 3:
                                    ie.flags = ie.flags & -65537 | 128;
                                case 0:
                                    if (ie = ne.payload, j = typeof ie == "function" ? ie.call(xe, H, j) : ie, j == null) break e;
                                    H = y({}, H, j);
                                    break e;
                                case 2:
                                    jn = !0;
                            }
                        }
                        j = v.callback, j !== null && (e.flags |= 64, L && (e.flags |= 8192), L = u.callbacks, L === null ? u.callbacks = [
                            j
                        ] : L.push(j));
                    } else L = {
                        lane: j,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    }, U === null ? (N = U = L, T = H) : U = U.next = L, p |= j;
                    if (v = v.next, v === null) {
                        if (v = u.shared.pending, v === null) break;
                        L = v, v = L.next, L.next = null, u.lastBaseUpdate = L, u.shared.pending = null;
                    }
                }while (!0);
                U === null && (T = H), u.baseState = T, u.firstBaseUpdate = N, u.lastBaseUpdate = U, c === null && (u.shared.lanes = 0), Gn |= p, e.lanes = p, e.memoizedState = H;
            }
        }
        function Zf(e, t) {
            if (typeof e != "function") throw Error(o(191, e));
            e.call(t);
        }
        function $f(e, t) {
            var n = e.callbacks;
            if (n !== null) for(e.callbacks = null, e = 0; e < n.length; e++)Zf(n[e], t);
        }
        var ta = Q(null), yi = Q(0);
        function Jf(e, t) {
            e = On, X(yi, e), X(ta, t), On = e | t.baseLanes;
        }
        function _o() {
            X(yi, On), X(ta, ta.current);
        }
        function Do() {
            On = yi.current, I(ta), I(yi);
        }
        var Bn = 0, fe = null, Re = null, Qe = null, bi = !1, na = !1, br = !1, Si = 0, nl = 0, ra = null, K1 = 0;
        function Ue() {
            throw Error(o(321));
        }
        function Ro(e, t) {
            if (t === null) return !1;
            for(var n = 0; n < t.length && n < e.length; n++)if (!_t(e[n], t[n])) return !1;
            return !0;
        }
        function Co(e, t, n, a, u, c) {
            return Bn = c, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? jd : Ld, br = !1, c = n(a, u), br = !1, na && (c = Ff(t, n, a, u)), Wf(e), c;
        }
        function Wf(e) {
            z.H = Ri;
            var t = Re !== null && Re.next !== null;
            if (Bn = 0, Qe = Re = fe = null, bi = !1, nl = 0, ra = null, t) throw Error(o(300));
            e === null || We || (e = e.dependencies, e !== null && hi(e) && (We = !0));
        }
        function Ff(e, t, n, a) {
            fe = e;
            var u = 0;
            do {
                if (na && (ra = null), nl = 0, na = !1, 25 <= u) throw Error(o(301));
                if (u += 1, Qe = Re = null, e.updateQueue != null) {
                    var c = e.updateQueue;
                    c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
                }
                z.H = $1, c = t(n, a);
            }while (na);
            return c;
        }
        function G1() {
            var e = z.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? rl(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (fe.flags |= 1024), t;
        }
        function xo() {
            var e = Si !== 0;
            return Si = 0, e;
        }
        function wo(e, t, n) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
        }
        function Mo(e) {
            if (bi) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                bi = !1;
            }
            Bn = 0, Qe = Re = fe = null, na = !1, nl = Si = 0, ra = null;
        }
        function St() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Qe === null ? fe.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
        }
        function Ke() {
            if (Re === null) {
                var e = fe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Re.next;
            var t = Qe === null ? fe.memoizedState : Qe.next;
            if (t !== null) Qe = t, Re = e;
            else {
                if (e === null) throw fe.alternate === null ? Error(o(467)) : Error(o(310));
                Re = e, e = {
                    memoizedState: Re.memoizedState,
                    baseState: Re.baseState,
                    baseQueue: Re.baseQueue,
                    queue: Re.queue,
                    next: null
                }, Qe === null ? fe.memoizedState = Qe = e : Qe = Qe.next = e;
            }
            return Qe;
        }
        function No() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function rl(e) {
            var t = nl;
            return nl += 1, ra === null && (ra = []), e = Xf(ra, e, t), t = fe, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? jd : Ld), e;
        }
        function Ei(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return rl(e);
                if (e.$$typeof === B) return ct(e);
            }
            throw Error(o(438, String(e)));
        }
        function Ao(e) {
            var t = null, n = fe.updateQueue;
            if (n !== null && (t = n.memoCache), t == null) {
                var a = fe.alternate;
                a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                    data: a.data.map(function(u) {
                        return u.slice();
                    }),
                    index: 0
                })));
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }), n === null && (n = No(), fe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for(n = t.data[t.index] = Array(e), a = 0; a < e; a++)n[a] = De;
            return t.index++, n;
        }
        function mn(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Oi(e) {
            var t = Ke();
            return Po(t, Re, e);
        }
        function Po(e, t, n) {
            var a = e.queue;
            if (a === null) throw Error(o(311));
            a.lastRenderedReducer = n;
            var u = e.baseQueue, c = a.pending;
            if (c !== null) {
                if (u !== null) {
                    var p = u.next;
                    u.next = c.next, c.next = p;
                }
                t.baseQueue = u = c, a.pending = null;
            }
            if (c = e.baseState, u === null) e.memoizedState = c;
            else {
                t = u.next;
                var v = p = null, T = null, N = t, U = !1;
                do {
                    var H = N.lane & -536870913;
                    if (H !== N.lane ? (ye & H) === H : (Bn & H) === H) {
                        var j = N.revertLane;
                        if (j === 0) T !== null && (T = T.next = {
                            lane: 0,
                            revertLane: 0,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }), H === Fr && (U = !0);
                        else if ((Bn & j) === j) {
                            N = N.next, j === Fr && (U = !0);
                            continue;
                        } else H = {
                            lane: 0,
                            revertLane: N.revertLane,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }, T === null ? (v = T = H, p = c) : T = T.next = H, fe.lanes |= j, Gn |= j;
                        H = N.action, br && n(c, H), c = N.hasEagerState ? N.eagerState : n(c, H);
                    } else j = {
                        lane: H,
                        revertLane: N.revertLane,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    }, T === null ? (v = T = j, p = c) : T = T.next = j, fe.lanes |= H, Gn |= H;
                    N = N.next;
                }while (N !== null && N !== t);
                if (T === null ? p = c : T.next = v, !_t(c, e.memoizedState) && (We = !0, U && (n = ea, n !== null))) throw n;
                e.memoizedState = c, e.baseState = p, e.baseQueue = T, a.lastRenderedState = c;
            }
            return u === null && (a.lanes = 0), [
                e.memoizedState,
                a.dispatch
            ];
        }
        function jo(e) {
            var t = Ke(), n = t.queue;
            if (n === null) throw Error(o(311));
            n.lastRenderedReducer = e;
            var a = n.dispatch, u = n.pending, c = t.memoizedState;
            if (u !== null) {
                n.pending = null;
                var p = u = u.next;
                do c = e(c, p.action), p = p.next;
                while (p !== u);
                _t(c, t.memoizedState) || (We = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
            }
            return [
                c,
                a
            ];
        }
        function ed(e, t, n) {
            var a = fe, u = Ke(), c = Oe;
            if (c) {
                if (n === void 0) throw Error(o(407));
                n = n();
            } else n = t();
            var p = !_t((Re || u).memoizedState, n);
            p && (u.memoizedState = n, We = !0), u = u.queue;
            var v = rd.bind(null, a, u, e);
            if (al(2048, 8, v, [
                e
            ]), u.getSnapshot !== t || p || Qe !== null && Qe.memoizedState.tag & 1) {
                if (a.flags |= 2048, aa(9, Ti(), nd.bind(null, a, u, n, t), null), Ae === null) throw Error(o(349));
                c || (Bn & 124) !== 0 || td(a, t, n);
            }
            return n;
        }
        function td(e, t, n) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: n
            }, t = fe.updateQueue, t === null ? (t = No(), fe.updateQueue = t, t.stores = [
                e
            ]) : (n = t.stores, n === null ? t.stores = [
                e
            ] : n.push(e));
        }
        function nd(e, t, n, a) {
            t.value = n, t.getSnapshot = a, ad(t) && ld(e);
        }
        function rd(e, t, n) {
            return n(function() {
                ad(t) && ld(e);
            });
        }
        function ad(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !_t(e, n);
            } catch  {
                return !0;
            }
        }
        function ld(e) {
            var t = Zr(e, 2);
            t !== null && Mt(t, e, 2);
        }
        function Lo(e) {
            var t = St();
            if (typeof e == "function") {
                var n = e;
                if (e = n(), br) {
                    $t(!0);
                    try {
                        n();
                    } finally{
                        $t(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: mn,
                lastRenderedState: e
            }, t;
        }
        function id(e, t, n, a) {
            return e.baseState = n, Po(e, Re, typeof a == "function" ? a : mn);
        }
        function Y1(e, t, n, a, u) {
            if (Di(e)) throw Error(o(485));
            if (e = t.action, e !== null) {
                var c = {
                    payload: u,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(p) {
                        c.listeners.push(p);
                    }
                };
                z.T !== null ? n(!0) : c.isTransition = !1, a(c), n = t.pending, n === null ? (c.next = t.pending = c, ud(t, c)) : (c.next = n.next, t.pending = n.next = c);
            }
        }
        function ud(e, t) {
            var n = t.action, a = t.payload, u = e.state;
            if (t.isTransition) {
                var c = z.T, p = {};
                z.T = p;
                try {
                    var v = n(u, a), T = z.S;
                    T !== null && T(p, v), od(e, t, v);
                } catch (N) {
                    ko(e, t, N);
                } finally{
                    z.T = c;
                }
            } else try {
                c = n(u, a), od(e, t, c);
            } catch (N) {
                ko(e, t, N);
            }
        }
        function od(e, t, n) {
            n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
                sd(e, t, a);
            }, function(a) {
                return ko(e, t, a);
            }) : sd(e, t, n);
        }
        function sd(e, t, n) {
            t.status = "fulfilled", t.value = n, cd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ud(e, n)));
        }
        function ko(e, t, n) {
            var a = e.pending;
            if (e.pending = null, a !== null) {
                a = a.next;
                do t.status = "rejected", t.reason = n, cd(t), t = t.next;
                while (t !== a);
            }
            e.action = null;
        }
        function cd(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function fd(e, t) {
            return t;
        }
        function dd(e, t) {
            if (Oe) {
                var n = Ae.formState;
                if (n !== null) {
                    e: {
                        var a = fe;
                        if (Oe) {
                            if (Be) {
                                t: {
                                    for(var u = Be, c = Wt; u.nodeType !== 8;){
                                        if (!c) {
                                            u = null;
                                            break t;
                                        }
                                        if (u = Vt(u.nextSibling), u === null) {
                                            u = null;
                                            break t;
                                        }
                                    }
                                    c = u.data, u = c === "F!" || c === "F" ? u : null;
                                }
                                if (u) {
                                    Be = Vt(u.nextSibling), a = u.data === "F!";
                                    break e;
                                }
                            }
                            gr(a);
                        }
                        a = !1;
                    }
                    a && (t = n[0]);
                }
            }
            return n = St(), n.memoizedState = n.baseState = t, a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fd,
                lastRenderedState: t
            }, n.queue = a, n = Nd.bind(null, fe, a), a.dispatch = n, a = Lo(!1), c = Ho.bind(null, fe, !1, a.queue), a = St(), u = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, a.queue = u, n = Y1.bind(null, fe, u, c, n), u.dispatch = n, a.memoizedState = e, [
                t,
                n,
                !1
            ];
        }
        function hd(e) {
            var t = Ke();
            return pd(t, Re, e);
        }
        function pd(e, t, n) {
            if (t = Po(e, t, fd)[0], e = Oi(mn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var a = rl(t);
            } catch (p) {
                throw p === Ja ? mi : p;
            }
            else a = t;
            t = Ke();
            var u = t.queue, c = u.dispatch;
            return n !== t.memoizedState && (fe.flags |= 2048, aa(9, Ti(), X1.bind(null, u, n), null)), [
                a,
                c,
                e
            ];
        }
        function X1(e, t) {
            e.action = t;
        }
        function gd(e) {
            var t = Ke(), n = Re;
            if (n !== null) return pd(t, n, e);
            Ke(), t = t.memoizedState, n = Ke();
            var a = n.queue.dispatch;
            return n.memoizedState = e, [
                t,
                a,
                !1
            ];
        }
        function aa(e, t, n, a) {
            return e = {
                tag: e,
                create: n,
                deps: a,
                inst: t,
                next: null
            }, t = fe.updateQueue, t === null && (t = No(), fe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
        }
        function Ti() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function md() {
            return Ke().memoizedState;
        }
        function _i(e, t, n, a) {
            var u = St();
            a = a === void 0 ? null : a, fe.flags |= e, u.memoizedState = aa(1 | t, Ti(), n, a);
        }
        function al(e, t, n, a) {
            var u = Ke();
            a = a === void 0 ? null : a;
            var c = u.memoizedState.inst;
            Re !== null && a !== null && Ro(a, Re.memoizedState.deps) ? u.memoizedState = aa(t, c, n, a) : (fe.flags |= e, u.memoizedState = aa(1 | t, c, n, a));
        }
        function vd(e, t) {
            _i(8390656, 8, e, t);
        }
        function yd(e, t) {
            al(2048, 8, e, t);
        }
        function bd(e, t) {
            return al(4, 2, e, t);
        }
        function Sd(e, t) {
            return al(4, 4, e, t);
        }
        function Ed(e, t) {
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
        function Od(e, t, n) {
            n = n != null ? n.concat([
                e
            ]) : null, al(4, 4, Ed.bind(null, t, e), n);
        }
        function Bo() {}
        function Td(e, t) {
            var n = Ke();
            t = t === void 0 ? null : t;
            var a = n.memoizedState;
            return t !== null && Ro(t, a[1]) ? a[0] : (n.memoizedState = [
                e,
                t
            ], e);
        }
        function _d(e, t) {
            var n = Ke();
            t = t === void 0 ? null : t;
            var a = n.memoizedState;
            if (t !== null && Ro(t, a[1])) return a[0];
            if (a = e(), br) {
                $t(!0);
                try {
                    e();
                } finally{
                    $t(!1);
                }
            }
            return n.memoizedState = [
                a,
                t
            ], a;
        }
        function zo(e, t, n) {
            return n === void 0 || (Bn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ch(), fe.lanes |= e, Gn |= e, n);
        }
        function Dd(e, t, n, a) {
            return _t(n, t) ? n : ta.current !== null ? (e = zo(e, n, a), _t(e, t) || (We = !0), e) : (Bn & 42) === 0 ? (We = !0, e.memoizedState = n) : (e = Ch(), fe.lanes |= e, Gn |= e, t);
        }
        function Rd(e, t, n, a, u) {
            var c = Y.p;
            Y.p = c !== 0 && 8 > c ? c : 8;
            var p = z.T, v = {};
            z.T = v, Ho(e, !1, t, n);
            try {
                var T = u(), N = z.S;
                if (N !== null && N(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
                    var U = Q1(T, a);
                    ll(e, t, U, wt(e));
                } else ll(e, t, a, wt(e));
            } catch (H) {
                ll(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: H
                }, wt());
            } finally{
                Y.p = c, z.T = p;
            }
        }
        function I1() {}
        function Uo(e, t, n, a) {
            if (e.tag !== 5) throw Error(o(476));
            var u = Cd(e).queue;
            Rd(e, u, t, te, n === null ? I1 : function() {
                return xd(e), n(a);
            });
        }
        function Cd(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: te,
                baseState: te,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: mn,
                    lastRenderedState: te
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
                    lastRenderedReducer: mn,
                    lastRenderedState: n
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function xd(e) {
            var t = Cd(e).next.queue;
            ll(e, t, {}, wt());
        }
        function qo() {
            return ct(Tl);
        }
        function wd() {
            return Ke().memoizedState;
        }
        function Md() {
            return Ke().memoizedState;
        }
        function V1(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var n = wt();
                        e = Ln(n);
                        var a = kn(t, e, n);
                        a !== null && (Mt(a, t, n), Fa(a, t, n)), t = {
                            cache: mo()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function Z1(e, t, n) {
            var a = wt();
            n = {
                lane: a,
                revertLane: 0,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Di(e) ? Ad(t, n) : (n = lo(e, t, n, a), n !== null && (Mt(n, e, a), Pd(n, t, a)));
        }
        function Nd(e, t, n) {
            var a = wt();
            ll(e, t, n, a);
        }
        function ll(e, t, n, a) {
            var u = {
                lane: a,
                revertLane: 0,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Di(e)) Ad(t, u);
            else {
                var c = e.alternate;
                if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                    var p = t.lastRenderedState, v = c(p, n);
                    if (u.hasEagerState = !0, u.eagerState = v, _t(v, p)) return oi(e, t, u, 0), Ae === null && ui(), !1;
                } catch  {} finally{}
                if (n = lo(e, t, u, a), n !== null) return Mt(n, e, a), Pd(n, t, a), !0;
            }
            return !1;
        }
        function Ho(e, t, n, a) {
            if (a = {
                lane: 2,
                revertLane: bs(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Di(e)) {
                if (t) throw Error(o(479));
            } else t = lo(e, n, a, 2), t !== null && Mt(t, e, 2);
        }
        function Di(e) {
            var t = e.alternate;
            return e === fe || t !== null && t === fe;
        }
        function Ad(e, t) {
            na = bi = !0;
            var n = e.pending;
            n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        }
        function Pd(e, t, n) {
            if ((n & 4194048) !== 0) {
                var a = t.lanes;
                a &= e.pendingLanes, n |= a, t.lanes = n, jr(e, n);
            }
        }
        var Ri = {
            readContext: ct,
            use: Ei,
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
        }, jd = {
            readContext: ct,
            use: Ei,
            useCallback: function(e, t) {
                return St().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: ct,
            useEffect: vd,
            useImperativeHandle: function(e, t, n) {
                n = n != null ? n.concat([
                    e
                ]) : null, _i(4194308, 4, Ed.bind(null, t, e), n);
            },
            useLayoutEffect: function(e, t) {
                return _i(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                _i(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var n = St();
                t = t === void 0 ? null : t;
                var a = e();
                if (br) {
                    $t(!0);
                    try {
                        e();
                    } finally{
                        $t(!1);
                    }
                }
                return n.memoizedState = [
                    a,
                    t
                ], a;
            },
            useReducer: function(e, t, n) {
                var a = St();
                if (n !== void 0) {
                    var u = n(t);
                    if (br) {
                        $t(!0);
                        try {
                            n(t);
                        } finally{
                            $t(!1);
                        }
                    }
                } else u = t;
                return a.memoizedState = a.baseState = u, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: u
                }, a.queue = e, e = e.dispatch = Z1.bind(null, fe, e), [
                    a.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = St();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = Lo(e);
                var t = e.queue, n = Nd.bind(null, fe, t);
                return t.dispatch = n, [
                    e.memoizedState,
                    n
                ];
            },
            useDebugValue: Bo,
            useDeferredValue: function(e, t) {
                var n = St();
                return zo(n, e, t);
            },
            useTransition: function() {
                var e = Lo(!1);
                return e = Rd.bind(null, fe, e.queue, !0, !1), St().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, n) {
                var a = fe, u = St();
                if (Oe) {
                    if (n === void 0) throw Error(o(407));
                    n = n();
                } else {
                    if (n = t(), Ae === null) throw Error(o(349));
                    (ye & 124) !== 0 || td(a, t, n);
                }
                u.memoizedState = n;
                var c = {
                    value: n,
                    getSnapshot: t
                };
                return u.queue = c, vd(rd.bind(null, a, c, e), [
                    e
                ]), a.flags |= 2048, aa(9, Ti(), nd.bind(null, a, c, n, t), null), n;
            },
            useId: function() {
                var e = St(), t = Ae.identifierPrefix;
                if (Oe) {
                    var n = hn, a = dn;
                    n = (a & ~(1 << 32 - mt(a) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Si++, 0 < n && (t += "H" + n.toString(32)), t += "»";
                } else n = K1++, t = "«" + t + "r" + n.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: qo,
            useFormState: dd,
            useActionState: dd,
            useOptimistic: function(e) {
                var t = St();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = Ho.bind(null, fe, !0, n), n.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Ao,
            useCacheRefresh: function() {
                return St().memoizedState = V1.bind(null, fe);
            }
        }, Ld = {
            readContext: ct,
            use: Ei,
            useCallback: Td,
            useContext: ct,
            useEffect: yd,
            useImperativeHandle: Od,
            useInsertionEffect: bd,
            useLayoutEffect: Sd,
            useMemo: _d,
            useReducer: Oi,
            useRef: md,
            useState: function() {
                return Oi(mn);
            },
            useDebugValue: Bo,
            useDeferredValue: function(e, t) {
                var n = Ke();
                return Dd(n, Re.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Oi(mn)[0], t = Ke().memoizedState;
                return [
                    typeof e == "boolean" ? e : rl(e),
                    t
                ];
            },
            useSyncExternalStore: ed,
            useId: wd,
            useHostTransitionStatus: qo,
            useFormState: hd,
            useActionState: hd,
            useOptimistic: function(e, t) {
                var n = Ke();
                return id(n, Re, e, t);
            },
            useMemoCache: Ao,
            useCacheRefresh: Md
        }, $1 = {
            readContext: ct,
            use: Ei,
            useCallback: Td,
            useContext: ct,
            useEffect: yd,
            useImperativeHandle: Od,
            useInsertionEffect: bd,
            useLayoutEffect: Sd,
            useMemo: _d,
            useReducer: jo,
            useRef: md,
            useState: function() {
                return jo(mn);
            },
            useDebugValue: Bo,
            useDeferredValue: function(e, t) {
                var n = Ke();
                return Re === null ? zo(n, e, t) : Dd(n, Re.memoizedState, e, t);
            },
            useTransition: function() {
                var e = jo(mn)[0], t = Ke().memoizedState;
                return [
                    typeof e == "boolean" ? e : rl(e),
                    t
                ];
            },
            useSyncExternalStore: ed,
            useId: wd,
            useHostTransitionStatus: qo,
            useFormState: gd,
            useActionState: gd,
            useOptimistic: function(e, t) {
                var n = Ke();
                return Re !== null ? id(n, Re, e, t) : (n.baseState = e, [
                    e,
                    n.queue.dispatch
                ]);
            },
            useMemoCache: Ao,
            useCacheRefresh: Md
        }, la = null, il = 0;
        function Ci(e) {
            var t = il;
            return il += 1, la === null && (la = []), Xf(la, e, t);
        }
        function ul(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function xi(e, t) {
            throw t.$$typeof === E ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function kd(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Bd(e) {
            function t(w, C) {
                if (e) {
                    var M = w.deletions;
                    M === null ? (w.deletions = [
                        C
                    ], w.flags |= 16) : M.push(C);
                }
            }
            function n(w, C) {
                if (!e) return null;
                for(; C !== null;)t(w, C), C = C.sibling;
                return null;
            }
            function a(w) {
                for(var C = new Map; w !== null;)w.key !== null ? C.set(w.key, w) : C.set(w.index, w), w = w.sibling;
                return C;
            }
            function u(w, C) {
                return w = fn(w, C), w.index = 0, w.sibling = null, w;
            }
            function c(w, C, M) {
                return w.index = M, e ? (M = w.alternate, M !== null ? (M = M.index, M < C ? (w.flags |= 67108866, C) : M) : (w.flags |= 67108866, C)) : (w.flags |= 1048576, C);
            }
            function p(w) {
                return e && w.alternate === null && (w.flags |= 67108866), w;
            }
            function v(w, C, M, q) {
                return C === null || C.tag !== 6 ? (C = uo(M, w.mode, q), C.return = w, C) : (C = u(C, M), C.return = w, C);
            }
            function T(w, C, M, q) {
                var J = M.type;
                return J === _ ? U(w, C, M.props.children, q, M.key) : C !== null && (C.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $ && kd(J) === C.type) ? (C = u(C, M.props), ul(C, M), C.return = w, C) : (C = ci(M.type, M.key, M.props, null, w.mode, q), ul(C, M), C.return = w, C);
            }
            function N(w, C, M, q) {
                return C === null || C.tag !== 4 || C.stateNode.containerInfo !== M.containerInfo || C.stateNode.implementation !== M.implementation ? (C = oo(M, w.mode, q), C.return = w, C) : (C = u(C, M.children || []), C.return = w, C);
            }
            function U(w, C, M, q, J) {
                return C === null || C.tag !== 7 ? (C = fr(M, w.mode, q, J), C.return = w, C) : (C = u(C, M), C.return = w, C);
            }
            function H(w, C, M) {
                if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return C = uo("" + C, w.mode, M), C.return = w, C;
                if (typeof C == "object" && C !== null) {
                    switch(C.$$typeof){
                        case b:
                            return M = ci(C.type, C.key, C.props, null, w.mode, M), ul(M, C), M.return = w, M;
                        case O:
                            return C = oo(C, w.mode, M), C.return = w, C;
                        case $:
                            var q = C._init;
                            return C = q(C._payload), H(w, C, M);
                    }
                    if (Me(C) || he(C)) return C = fr(C, w.mode, M, null), C.return = w, C;
                    if (typeof C.then == "function") return H(w, Ci(C), M);
                    if (C.$$typeof === B) return H(w, pi(w, C), M);
                    xi(w, C);
                }
                return null;
            }
            function j(w, C, M, q) {
                var J = C !== null ? C.key : null;
                if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return J !== null ? null : v(w, C, "" + M, q);
                if (typeof M == "object" && M !== null) {
                    switch(M.$$typeof){
                        case b:
                            return M.key === J ? T(w, C, M, q) : null;
                        case O:
                            return M.key === J ? N(w, C, M, q) : null;
                        case $:
                            return J = M._init, M = J(M._payload), j(w, C, M, q);
                    }
                    if (Me(M) || he(M)) return J !== null ? null : U(w, C, M, q, null);
                    if (typeof M.then == "function") return j(w, C, Ci(M), q);
                    if (M.$$typeof === B) return j(w, C, pi(w, M), q);
                    xi(w, M);
                }
                return null;
            }
            function L(w, C, M, q, J) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return w = w.get(M) || null, v(C, w, "" + q, J);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case b:
                            return w = w.get(q.key === null ? M : q.key) || null, T(C, w, q, J);
                        case O:
                            return w = w.get(q.key === null ? M : q.key) || null, N(C, w, q, J);
                        case $:
                            var de = q._init;
                            return q = de(q._payload), L(w, C, M, q, J);
                    }
                    if (Me(q) || he(q)) return w = w.get(M) || null, U(C, w, q, J, null);
                    if (typeof q.then == "function") return L(w, C, M, Ci(q), J);
                    if (q.$$typeof === B) return L(w, C, M, pi(C, q), J);
                    xi(C, q);
                }
                return null;
            }
            function ie(w, C, M, q) {
                for(var J = null, de = null, ee = C, ae = C = 0, et = null; ee !== null && ae < M.length; ae++){
                    ee.index > ae ? (et = ee, ee = null) : et = ee.sibling;
                    var be = j(w, ee, M[ae], q);
                    if (be === null) {
                        ee === null && (ee = et);
                        break;
                    }
                    e && ee && be.alternate === null && t(w, ee), C = c(be, C, ae), de === null ? J = be : de.sibling = be, de = be, ee = et;
                }
                if (ae === M.length) return n(w, ee), Oe && hr(w, ae), J;
                if (ee === null) {
                    for(; ae < M.length; ae++)ee = H(w, M[ae], q), ee !== null && (C = c(ee, C, ae), de === null ? J = ee : de.sibling = ee, de = ee);
                    return Oe && hr(w, ae), J;
                }
                for(ee = a(ee); ae < M.length; ae++)et = L(ee, w, ae, M[ae], q), et !== null && (e && et.alternate !== null && ee.delete(et.key === null ? ae : et.key), C = c(et, C, ae), de === null ? J = et : de.sibling = et, de = et);
                return e && ee.forEach(function(Fn) {
                    return t(w, Fn);
                }), Oe && hr(w, ae), J;
            }
            function ne(w, C, M, q) {
                if (M == null) throw Error(o(151));
                for(var J = null, de = null, ee = C, ae = C = 0, et = null, be = M.next(); ee !== null && !be.done; ae++, be = M.next()){
                    ee.index > ae ? (et = ee, ee = null) : et = ee.sibling;
                    var Fn = j(w, ee, be.value, q);
                    if (Fn === null) {
                        ee === null && (ee = et);
                        break;
                    }
                    e && ee && Fn.alternate === null && t(w, ee), C = c(Fn, C, ae), de === null ? J = Fn : de.sibling = Fn, de = Fn, ee = et;
                }
                if (be.done) return n(w, ee), Oe && hr(w, ae), J;
                if (ee === null) {
                    for(; !be.done; ae++, be = M.next())be = H(w, be.value, q), be !== null && (C = c(be, C, ae), de === null ? J = be : de.sibling = be, de = be);
                    return Oe && hr(w, ae), J;
                }
                for(ee = a(ee); !be.done; ae++, be = M.next())be = L(ee, w, ae, be.value, q), be !== null && (e && be.alternate !== null && ee.delete(be.key === null ? ae : be.key), C = c(be, C, ae), de === null ? J = be : de.sibling = be, de = be);
                return e && ee.forEach(function(Jm) {
                    return t(w, Jm);
                }), Oe && hr(w, ae), J;
            }
            function xe(w, C, M, q) {
                if (typeof M == "object" && M !== null && M.type === _ && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
                    switch(M.$$typeof){
                        case b:
                            e: {
                                for(var J = M.key; C !== null;){
                                    if (C.key === J) {
                                        if (J = M.type, J === _) {
                                            if (C.tag === 7) {
                                                n(w, C.sibling), q = u(C, M.props.children), q.return = w, w = q;
                                                break e;
                                            }
                                        } else if (C.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $ && kd(J) === C.type) {
                                            n(w, C.sibling), q = u(C, M.props), ul(q, M), q.return = w, w = q;
                                            break e;
                                        }
                                        n(w, C);
                                        break;
                                    } else t(w, C);
                                    C = C.sibling;
                                }
                                M.type === _ ? (q = fr(M.props.children, w.mode, q, M.key), q.return = w, w = q) : (q = ci(M.type, M.key, M.props, null, w.mode, q), ul(q, M), q.return = w, w = q);
                            }
                            return p(w);
                        case O:
                            e: {
                                for(J = M.key; C !== null;){
                                    if (C.key === J) if (C.tag === 4 && C.stateNode.containerInfo === M.containerInfo && C.stateNode.implementation === M.implementation) {
                                        n(w, C.sibling), q = u(C, M.children || []), q.return = w, w = q;
                                        break e;
                                    } else {
                                        n(w, C);
                                        break;
                                    }
                                    else t(w, C);
                                    C = C.sibling;
                                }
                                q = oo(M, w.mode, q), q.return = w, w = q;
                            }
                            return p(w);
                        case $:
                            return J = M._init, M = J(M._payload), xe(w, C, M, q);
                    }
                    if (Me(M)) return ie(w, C, M, q);
                    if (he(M)) {
                        if (J = he(M), typeof J != "function") throw Error(o(150));
                        return M = J.call(M), ne(w, C, M, q);
                    }
                    if (typeof M.then == "function") return xe(w, C, Ci(M), q);
                    if (M.$$typeof === B) return xe(w, C, pi(w, M), q);
                    xi(w, M);
                }
                return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, C !== null && C.tag === 6 ? (n(w, C.sibling), q = u(C, M), q.return = w, w = q) : (n(w, C), q = uo(M, w.mode, q), q.return = w, w = q), p(w)) : n(w, C);
            }
            return function(w, C, M, q) {
                try {
                    il = 0;
                    var J = xe(w, C, M, q);
                    return la = null, J;
                } catch (ee) {
                    if (ee === Ja || ee === mi) throw ee;
                    var de = Dt(29, ee, null, w.mode);
                    return de.lanes = q, de.return = w, de;
                } finally{}
            };
        }
        var ia = Bd(!0), zd = Bd(!1), Ut = Q(null), Ft = null;
        function zn(e) {
            var t = e.alternate;
            X(Ie, Ie.current & 1), X(Ut, e), Ft === null && (t === null || ta.current !== null || t.memoizedState !== null) && (Ft = e);
        }
        function Ud(e) {
            if (e.tag === 22) {
                if (X(Ie, Ie.current), X(Ut, e), Ft === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (Ft = e);
                }
            } else Un();
        }
        function Un() {
            X(Ie, Ie.current), X(Ut, Ut.current);
        }
        function vn(e) {
            I(Ut), Ft === e && (Ft = null), I(Ie);
        }
        var Ie = Q(0);
        function wi(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var n = t.memoizedState;
                    if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Ns(n))) return t;
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
        function Qo(e, t, n, a) {
            t = e.memoizedState, n = n(a, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
        }
        var Ko = {
            enqueueSetState: function(e, t, n) {
                e = e._reactInternals;
                var a = wt(), u = Ln(a);
                u.payload = t, n != null && (u.callback = n), t = kn(e, u, a), t !== null && (Mt(t, e, a), Fa(t, e, a));
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternals;
                var a = wt(), u = Ln(a);
                u.tag = 1, u.payload = t, n != null && (u.callback = n), t = kn(e, u, a), t !== null && (Mt(t, e, a), Fa(t, e, a));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var n = wt(), a = Ln(n);
                a.tag = 2, t != null && (a.callback = t), t = kn(e, a, n), t !== null && (Mt(t, e, n), Fa(t, e, n));
            }
        };
        function qd(e, t, n, a, u, c, p) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Ka(n, a) || !Ka(u, c) : !0;
        }
        function Hd(e, t, n, a) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ko.enqueueReplaceState(t, t.state, null);
        }
        function Sr(e, t) {
            var n = t;
            if ("ref" in t) {
                n = {};
                for(var a in t)a !== "ref" && (n[a] = t[a]);
            }
            if (e = e.defaultProps) {
                n === t && (n = y({}, n));
                for(var u in e)n[u] === void 0 && (n[u] = e[u]);
            }
            return n;
        }
        var Mi = typeof reportError == "function" ? reportError : function(e) {
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
        function Qd(e) {
            Mi(e);
        }
        function Kd(e) {
            console.error(e);
        }
        function Gd(e) {
            Mi(e);
        }
        function Ni(e, t) {
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
        function Yd(e, t, n) {
            try {
                var a = e.onCaughtError;
                a(n.value, {
                    componentStack: n.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                });
            } catch (u) {
                setTimeout(function() {
                    throw u;
                });
            }
        }
        function Go(e, t, n) {
            return n = Ln(n), n.tag = 3, n.payload = {
                element: null
            }, n.callback = function() {
                Ni(e, t);
            }, n;
        }
        function Xd(e) {
            return e = Ln(e), e.tag = 3, e;
        }
        function Id(e, t, n, a) {
            var u = n.type.getDerivedStateFromError;
            if (typeof u == "function") {
                var c = a.value;
                e.payload = function() {
                    return u(c);
                }, e.callback = function() {
                    Yd(t, n, a);
                };
            }
            var p = n.stateNode;
            p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
                Yd(t, n, a), typeof u != "function" && (Yn === null ? Yn = new Set([
                    this
                ]) : Yn.add(this));
                var v = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: v !== null ? v : ""
                });
            });
        }
        function J1(e, t, n, a, u) {
            if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (t = n.alternate, t !== null && Va(t, n, u, !0), n = Ut.current, n !== null) {
                    switch(n.tag){
                        case 13:
                            return Ft === null ? ps() : n.alternate === null && ze === 0 && (ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, a === bo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([
                                a
                            ]) : t.add(a), ms(e, a, u)), !1;
                        case 22:
                            return n.flags |= 65536, a === bo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    a
                                ])
                            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([
                                a
                            ]) : n.add(a)), ms(e, a, u)), !1;
                    }
                    throw Error(o(435, n.tag));
                }
                return ms(e, a, u), ps(), !1;
            }
            if (Oe) return t = Ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== fo && (e = Error(o(422), {
                cause: a
            }), Ia(Lt(e, n)))) : (a !== fo && (t = Error(o(423), {
                cause: a
            }), Ia(Lt(t, n))), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, a = Lt(a, n), u = Go(e.stateNode, a, u), Oo(e, u), ze !== 4 && (ze = 2)), !1;
            var c = Error(o(520), {
                cause: a
            });
            if (c = Lt(c, n), pl === null ? pl = [
                c
            ] : pl.push(c), ze !== 4 && (ze = 2), t === null) return !0;
            a = Lt(a, n), n = t;
            do {
                switch(n.tag){
                    case 3:
                        return n.flags |= 65536, e = u & -u, n.lanes |= e, e = Go(n.stateNode, a, e), Oo(n, e), !1;
                    case 1:
                        if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Yn === null || !Yn.has(c)))) return n.flags |= 65536, u &= -u, n.lanes |= u, u = Xd(u), Id(u, e, n, a), Oo(n, u), !1;
                }
                n = n.return;
            }while (n !== null);
            return !1;
        }
        var Vd = Error(o(461)), We = !1;
        function rt(e, t, n, a) {
            t.child = e === null ? zd(t, null, n, a) : ia(t, e.child, n, a);
        }
        function Zd(e, t, n, a, u) {
            n = n.render;
            var c = t.ref;
            if ("ref" in a) {
                var p = {};
                for(var v in a)v !== "ref" && (p[v] = a[v]);
            } else p = a;
            return vr(t), a = Co(e, t, n, p, c, u), v = xo(), e !== null && !We ? (wo(e, t, u), yn(e, t, u)) : (Oe && v && so(t), t.flags |= 1, rt(e, t, a, u), t.child);
        }
        function $d(e, t, n, a, u) {
            if (e === null) {
                var c = n.type;
                return typeof c == "function" && !io(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, Jd(e, t, c, a, u)) : (e = ci(n.type, null, a, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (c = e.child, !Wo(e, u)) {
                var p = c.memoizedProps;
                if (n = n.compare, n = n !== null ? n : Ka, n(p, a) && e.ref === t.ref) return yn(e, t, u);
            }
            return t.flags |= 1, e = fn(c, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Jd(e, t, n, a, u) {
            if (e !== null) {
                var c = e.memoizedProps;
                if (Ka(c, a) && e.ref === t.ref) if (We = !1, t.pendingProps = a = c, Wo(e, u)) (e.flags & 131072) !== 0 && (We = !0);
                else return t.lanes = e.lanes, yn(e, t, u);
            }
            return Yo(e, t, n, a, u);
        }
        function Wd(e, t, n) {
            var a = t.pendingProps, u = a.children, c = e !== null ? e.memoizedState : null;
            if (a.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (a = c !== null ? c.baseLanes | n : n, e !== null) {
                        for(u = t.child = e.child, c = 0; u !== null;)c = c | u.lanes | u.childLanes, u = u.sibling;
                        t.childLanes = c & ~a;
                    } else t.childLanes = 0, t.child = null;
                    return Fd(e, t, a, n);
                }
                if ((n & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && gi(t, c !== null ? c.cachePool : null), c !== null ? Jf(t, c) : _o(), Ud(t);
                else return t.lanes = t.childLanes = 536870912, Fd(e, t, c !== null ? c.baseLanes | n : n, n);
            } else c !== null ? (gi(t, c.cachePool), Jf(t, c), Un(), t.memoizedState = null) : (e !== null && gi(t, null), _o(), Un());
            return rt(e, t, u, n), t.child;
        }
        function Fd(e, t, n, a) {
            var u = yo();
            return u = u === null ? null : {
                parent: Xe._currentValue,
                pool: u
            }, t.memoizedState = {
                baseLanes: n,
                cachePool: u
            }, e !== null && gi(t, null), _o(), Ud(t), e !== null && Va(e, t, a, !0), null;
        }
        function Ai(e, t) {
            var n = t.ref;
            if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof n != "function" && typeof n != "object") throw Error(o(284));
                (e === null || e.ref !== n) && (t.flags |= 4194816);
            }
        }
        function Yo(e, t, n, a, u) {
            return vr(t), n = Co(e, t, n, a, void 0, u), a = xo(), e !== null && !We ? (wo(e, t, u), yn(e, t, u)) : (Oe && a && so(t), t.flags |= 1, rt(e, t, n, u), t.child);
        }
        function eh(e, t, n, a, u, c) {
            return vr(t), t.updateQueue = null, n = Ff(t, a, n, u), Wf(e), a = xo(), e !== null && !We ? (wo(e, t, c), yn(e, t, c)) : (Oe && a && so(t), t.flags |= 1, rt(e, t, n, c), t.child);
        }
        function th(e, t, n, a, u) {
            if (vr(t), t.stateNode === null) {
                var c = $r, p = n.contextType;
                typeof p == "object" && p !== null && (c = ct(p)), c = new n(a, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Ko, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = a, c.state = t.memoizedState, c.refs = {}, So(t), p = n.contextType, c.context = typeof p == "object" && p !== null ? ct(p) : $r, c.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Qo(t, n, p, a), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Ko.enqueueReplaceState(c, c.state, null), tl(t, a, c, u), el(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
            } else if (e === null) {
                c = t.stateNode;
                var v = t.memoizedProps, T = Sr(n, v);
                c.props = T;
                var N = c.context, U = n.contextType;
                p = $r, typeof U == "object" && U !== null && (p = ct(U));
                var H = n.getDerivedStateFromProps;
                U = typeof H == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, U || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || N !== p) && Hd(t, c, a, p), jn = !1;
                var j = t.memoizedState;
                c.state = j, tl(t, a, c, u), el(), N = t.memoizedState, v || j !== N || jn ? (typeof H == "function" && (Qo(t, n, H, a), N = t.memoizedState), (T = jn || qd(t, n, T, a, j, N, p)) ? (U || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), c.props = a, c.state = N, c.context = p, a = T) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
            } else {
                c = t.stateNode, Eo(e, t), p = t.memoizedProps, U = Sr(n, p), c.props = U, H = t.pendingProps, j = c.context, N = n.contextType, T = $r, typeof N == "object" && N !== null && (T = ct(N)), v = n.getDerivedStateFromProps, (N = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== H || j !== T) && Hd(t, c, a, T), jn = !1, j = t.memoizedState, c.state = j, tl(t, a, c, u), el();
                var L = t.memoizedState;
                p !== H || j !== L || jn || e !== null && e.dependencies !== null && hi(e.dependencies) ? (typeof v == "function" && (Qo(t, n, v, a), L = t.memoizedState), (U = jn || qd(t, n, U, a, j, L, T) || e !== null && e.dependencies !== null && hi(e.dependencies)) ? (N || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, L, T), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(a, L, T)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = L), c.props = a, c.state = L, c.context = T, a = U) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), a = !1);
            }
            return c = a, Ai(e, t), a = (t.flags & 128) !== 0, c || a ? (c = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && a ? (t.child = ia(t, e.child, null, u), t.child = ia(t, null, n, u)) : rt(e, t, n, u), t.memoizedState = c.state, e = t.child) : e = yn(e, t, u), e;
        }
        function nh(e, t, n, a) {
            return Xa(), t.flags |= 256, rt(e, t, n, a), t.child;
        }
        var Xo = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Io(e) {
            return {
                baseLanes: e,
                cachePool: Kf()
            };
        }
        function Vo(e, t, n) {
            return e = e !== null ? e.childLanes & ~n : 0, t && (e |= qt), e;
        }
        function rh(e, t, n) {
            var a = t.pendingProps, u = !1, c = (t.flags & 128) !== 0, p;
            if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0), p && (u = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (Oe) {
                    if (u ? zn(t) : Un(), Oe) {
                        var v = Be, T;
                        if (T = v) {
                            e: {
                                for(T = v, v = Wt; T.nodeType !== 8;){
                                    if (!v) {
                                        v = null;
                                        break e;
                                    }
                                    if (T = Vt(T.nextSibling), T === null) {
                                        v = null;
                                        break e;
                                    }
                                }
                                v = T;
                            }
                            v !== null ? (t.memoizedState = {
                                dehydrated: v,
                                treeContext: dr !== null ? {
                                    id: dn,
                                    overflow: hn
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, T = Dt(18, null, null, 0), T.stateNode = v, T.return = t, t.child = T, vt = t, Be = null, T = !0) : T = !1;
                        }
                        T || gr(t);
                    }
                    if (v = t.memoizedState, v !== null && (v = v.dehydrated, v !== null)) return Ns(v) ? t.lanes = 32 : t.lanes = 536870912, null;
                    vn(t);
                }
                return v = a.children, a = a.fallback, u ? (Un(), u = t.mode, v = Pi({
                    mode: "hidden",
                    children: v
                }, u), a = fr(a, u, n, null), v.return = t, a.return = t, v.sibling = a, t.child = v, u = t.child, u.memoizedState = Io(n), u.childLanes = Vo(e, p, n), t.memoizedState = Xo, a) : (zn(t), Zo(t, v));
            }
            if (T = e.memoizedState, T !== null && (v = T.dehydrated, v !== null)) {
                if (c) t.flags & 256 ? (zn(t), t.flags &= -257, t = $o(e, t, n)) : t.memoizedState !== null ? (Un(), t.child = e.child, t.flags |= 128, t = null) : (Un(), u = a.fallback, v = t.mode, a = Pi({
                    mode: "visible",
                    children: a.children
                }, v), u = fr(u, v, n, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, ia(t, e.child, null, n), a = t.child, a.memoizedState = Io(n), a.childLanes = Vo(e, p, n), t.memoizedState = Xo, t = u);
                else if (zn(t), Ns(v)) {
                    if (p = v.nextSibling && v.nextSibling.dataset, p) var N = p.dgst;
                    p = N, a = Error(o(419)), a.stack = "", a.digest = p, Ia({
                        value: a,
                        source: null,
                        stack: null
                    }), t = $o(e, t, n);
                } else if (We || Va(e, t, n, !1), p = (n & e.childLanes) !== 0, We || p) {
                    if (p = Ae, p !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : Pa(a), a = (a & (p.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== T.retryLane)) throw T.retryLane = a, Zr(e, a), Mt(p, e, a), Vd;
                    v.data === "$?" || ps(), t = $o(e, t, n);
                } else v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Be = Vt(v.nextSibling), vt = t, Oe = !0, pr = null, Wt = !1, e !== null && (Bt[zt++] = dn, Bt[zt++] = hn, Bt[zt++] = dr, dn = e.id, hn = e.overflow, dr = t), t = Zo(t, a.children), t.flags |= 4096);
                return t;
            }
            return u ? (Un(), u = a.fallback, v = t.mode, T = e.child, N = T.sibling, a = fn(T, {
                mode: "hidden",
                children: a.children
            }), a.subtreeFlags = T.subtreeFlags & 65011712, N !== null ? u = fn(N, u) : (u = fr(u, v, n, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, a = u, u = t.child, v = e.child.memoizedState, v === null ? v = Io(n) : (T = v.cachePool, T !== null ? (N = Xe._currentValue, T = T.parent !== N ? {
                parent: N,
                pool: N
            } : T) : T = Kf(), v = {
                baseLanes: v.baseLanes | n,
                cachePool: T
            }), u.memoizedState = v, u.childLanes = Vo(e, p, n), t.memoizedState = Xo, a) : (zn(t), n = e.child, e = n.sibling, n = fn(n, {
                mode: "visible",
                children: a.children
            }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [
                e
            ], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
        }
        function Zo(e, t) {
            return t = Pi({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Pi(e, t) {
            return e = Dt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function $o(e, t, n) {
            return ia(t, e.child, null, n), e = Zo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ah(e, t, n) {
            e.lanes |= t;
            var a = e.alternate;
            a !== null && (a.lanes |= t), po(e.return, t, n);
        }
        function Jo(e, t, n, a, u) {
            var c = e.memoizedState;
            c === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: n,
                tailMode: u
            } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = u);
        }
        function lh(e, t, n) {
            var a = t.pendingProps, u = a.revealOrder, c = a.tail;
            if (rt(e, t, a.children, n), a = Ie.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && ah(e, n, t);
                    else if (e.tag === 19) ah(e, n, t);
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
            switch(X(Ie, a), u){
                case "forwards":
                    for(n = t.child, u = null; n !== null;)e = n.alternate, e !== null && wi(e) === null && (u = n), n = n.sibling;
                    n = u, n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null), Jo(t, !1, u, n, c);
                    break;
                case "backwards":
                    for(n = null, u = t.child, t.child = null; u !== null;){
                        if (e = u.alternate, e !== null && wi(e) === null) {
                            t.child = u;
                            break;
                        }
                        e = u.sibling, u.sibling = n, n = u, u = e;
                    }
                    Jo(t, !0, n, null, c);
                    break;
                case "together":
                    Jo(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function yn(e, t, n) {
            if (e !== null && (t.dependencies = e.dependencies), Gn |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
                if (Va(e, t, n, !1), (n & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(o(153));
            if (t.child !== null) {
                for(e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = fn(e, e.pendingProps), n.return = t;
                n.sibling = null;
            }
            return t.child;
        }
        function Wo(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && hi(e)));
        }
        function W1(e, t, n) {
            switch(t.tag){
                case 3:
                    ve(t, t.stateNode.containerInfo), Pn(t, Xe, e.memoizedState.cache), Xa();
                    break;
                case 27:
                case 5:
                    ln(t);
                    break;
                case 4:
                    ve(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    Pn(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var a = t.memoizedState;
                    if (a !== null) return a.dehydrated !== null ? (zn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? rh(e, t, n) : (zn(t), e = yn(e, t, n), e !== null ? e.sibling : null);
                    zn(t);
                    break;
                case 19:
                    var u = (e.flags & 128) !== 0;
                    if (a = (n & t.childLanes) !== 0, a || (Va(e, t, n, !1), a = (n & t.childLanes) !== 0), u) {
                        if (a) return lh(e, t, n);
                        t.flags |= 128;
                    }
                    if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), X(Ie, Ie.current), a) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Wd(e, t, n);
                case 24:
                    Pn(t, Xe, e.memoizedState.cache);
            }
            return yn(e, t, n);
        }
        function ih(e, t, n) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) We = !0;
            else {
                if (!Wo(e, n) && (t.flags & 128) === 0) return We = !1, W1(e, t, n);
                We = (e.flags & 131072) !== 0;
            }
            else We = !1, Oe && (t.flags & 1048576) !== 0 && kf(t, di, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var a = t.elementType, u = a._init;
                        if (a = u(a._payload), t.type = a, typeof a == "function") io(a) ? (e = Sr(a, e), t.tag = 1, t = th(null, t, a, e, n)) : (t.tag = 0, t = Yo(null, t, a, e, n));
                        else {
                            if (a != null) {
                                if (u = a.$$typeof, u === G) {
                                    t.tag = 11, t = Zd(null, t, a, e, n);
                                    break e;
                                } else if (u === V) {
                                    t.tag = 14, t = $d(null, t, a, e, n);
                                    break e;
                                }
                            }
                            throw t = pt(a) || a, Error(o(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return Yo(e, t, t.type, t.pendingProps, n);
                case 1:
                    return a = t.type, u = Sr(a, t.pendingProps), th(e, t, a, u, n);
                case 3:
                    e: {
                        if (ve(t, t.stateNode.containerInfo), e === null) throw Error(o(387));
                        a = t.pendingProps;
                        var c = t.memoizedState;
                        u = c.element, Eo(e, t), tl(t, a, null, n);
                        var p = t.memoizedState;
                        if (a = p.cache, Pn(t, Xe, a), a !== c.cache && go(t, [
                            Xe
                        ], n, !0), el(), a = p.element, c.isDehydrated) if (c = {
                            element: a,
                            isDehydrated: !1,
                            cache: p.cache
                        }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                            t = nh(e, t, a, n);
                            break e;
                        } else if (a !== u) {
                            u = Lt(Error(o(424)), t), Ia(u), t = nh(e, t, a, n);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(Be = Vt(e.firstChild), vt = t, Oe = !0, pr = null, Wt = !0, n = zd(t, null, a, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                        }
                        else {
                            if (Xa(), a === u) {
                                t = yn(e, t, n);
                                break e;
                            }
                            rt(e, t, a, n);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Ai(e, t), e === null ? (n = cp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Oe || (n = t.type, e = t.pendingProps, a = Ii(re.current).createElement(n), a[$e] = t, a[st] = e, lt(a, n, e), Je(a), t.stateNode = a) : t.memoizedState = cp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return ln(t), e === null && Oe && (a = t.stateNode = up(t.type, t.pendingProps, re.current), vt = t, Wt = !0, u = Be, Vn(t.type) ? (As = u, Be = Vt(a.firstChild)) : Be = u), rt(e, t, t.pendingProps.children, n), Ai(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && Oe && ((u = a = Be) && (a = Rm(a, t.type, t.pendingProps, Wt), a !== null ? (t.stateNode = a, vt = t, Be = Vt(a.firstChild), Wt = !1, u = !0) : u = !1), u || gr(t)), ln(t), u = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, a = c.children, xs(u, c) ? a = null : p !== null && xs(u, p) && (t.flags |= 32), t.memoizedState !== null && (u = Co(e, t, G1, null, null, n), Tl._currentValue = u), Ai(e, t), rt(e, t, a, n), t.child;
                case 6:
                    return e === null && Oe && ((e = n = Be) && (n = Cm(n, t.pendingProps, Wt), n !== null ? (t.stateNode = n, vt = t, Be = null, e = !0) : e = !1), e || gr(t)), null;
                case 13:
                    return rh(e, t, n);
                case 4:
                    return ve(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ia(t, null, a, n) : rt(e, t, a, n), t.child;
                case 11:
                    return Zd(e, t, t.type, t.pendingProps, n);
                case 7:
                    return rt(e, t, t.pendingProps, n), t.child;
                case 8:
                    return rt(e, t, t.pendingProps.children, n), t.child;
                case 12:
                    return rt(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    return a = t.pendingProps, Pn(t, t.type, a.value), rt(e, t, a.children, n), t.child;
                case 9:
                    return u = t.type._context, a = t.pendingProps.children, vr(t), u = ct(u), a = a(u), t.flags |= 1, rt(e, t, a, n), t.child;
                case 14:
                    return $d(e, t, t.type, t.pendingProps, n);
                case 15:
                    return Jd(e, t, t.type, t.pendingProps, n);
                case 19:
                    return lh(e, t, n);
                case 31:
                    return a = t.pendingProps, n = t.mode, a = {
                        mode: a.mode,
                        children: a.children
                    }, e === null ? (n = Pi(a, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = fn(e.child, a), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
                case 22:
                    return Wd(e, t, n);
                case 24:
                    return vr(t), a = ct(Xe), e === null ? (u = yo(), u === null && (u = Ae, c = mo(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= n), u = c), t.memoizedState = {
                        parent: a,
                        cache: u
                    }, So(t), Pn(t, Xe, u)) : ((e.lanes & n) !== 0 && (Eo(e, t), tl(t, null, null, n), el()), u = e.memoizedState, c = t.memoizedState, u.parent !== a ? (u = {
                        parent: a,
                        cache: a
                    }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Pn(t, Xe, a)) : (a = c.cache, Pn(t, Xe, a), a !== u.cache && go(t, [
                        Xe
                    ], n, !0))), rt(e, t, t.pendingProps.children, n), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(o(156, t.tag));
        }
        function bn(e) {
            e.flags |= 4;
        }
        function uh(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !gp(t)) {
                if (t = Ut.current, t !== null && ((ye & 4194048) === ye ? Ft !== null : (ye & 62914560) !== ye && (ye & 536870912) === 0 || t !== Ft)) throw Wa = bo, Gf;
                e.flags |= 8192;
            }
        }
        function ji(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Pr() : 536870912, e.lanes |= t, ca |= t);
        }
        function ol(e, t) {
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
        function Le(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
            if (t) for(var u = e.child; u !== null;)n |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = e, u = u.sibling;
            else for(u = e.child; u !== null;)n |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = e, u = u.sibling;
            return e.subtreeFlags |= a, e.childLanes = n, t;
        }
        function F1(e, t, n) {
            var a = t.pendingProps;
            switch(co(t), t.tag){
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
                    return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), gn(Xe), gt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ya(t) ? bn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uf())), Le(t), null;
                case 26:
                    return n = t.memoizedState, e === null ? (bn(t), n !== null ? (Le(t), uh(t, n)) : (Le(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (bn(t), Le(t), uh(t, n)) : (Le(t), t.flags &= -16777217) : (e.memoizedProps !== a && bn(t), Le(t), t.flags &= -16777217), null;
                case 27:
                    Ge(t), n = re.current;
                    var u = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== a && bn(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(o(166));
                            return Le(t), null;
                        }
                        e = F.current, Ya(t) ? Bf(t) : (e = up(u, a, n), t.stateNode = e, bn(t));
                    }
                    return Le(t), null;
                case 5:
                    if (Ge(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && bn(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(o(166));
                            return Le(t), null;
                        }
                        if (e = F.current, Ya(t)) Bf(t);
                        else {
                            switch(u = Ii(re.current), e){
                                case 1:
                                    e = u.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case 2:
                                    e = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                default:
                                    switch(n){
                                        case "svg":
                                            e = u.createElementNS("http://www.w3.org/2000/svg", n);
                                            break;
                                        case "math":
                                            e = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                            break;
                                        case "script":
                                            e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                            break;
                                        case "select":
                                            e = typeof a.is == "string" ? u.createElement("select", {
                                                is: a.is
                                            }) : u.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                                            break;
                                        default:
                                            e = typeof a.is == "string" ? u.createElement(n, {
                                                is: a.is
                                            }) : u.createElement(n);
                                    }
                            }
                            e[$e] = t, e[st] = a;
                            e: for(u = t.child; u !== null;){
                                if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
                                else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                    u.child.return = u, u = u.child;
                                    continue;
                                }
                                if (u === t) break e;
                                for(; u.sibling === null;){
                                    if (u.return === null || u.return === t) break e;
                                    u = u.return;
                                }
                                u.sibling.return = u.return, u = u.sibling;
                            }
                            t.stateNode = e;
                            e: switch(lt(e, n, a), n){
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
                            e && bn(t);
                        }
                    }
                    return Le(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== a && bn(t);
                    else {
                        if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
                        if (e = re.current, Ya(t)) {
                            if (e = t.stateNode, n = t.memoizedProps, a = null, u = vt, u !== null) switch(u.tag){
                                case 27:
                                case 5:
                                    a = u.memoizedProps;
                            }
                            e[$e] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || ep(e.nodeValue, n)), e || gr(t);
                        } else e = Ii(e).createTextNode(a), e[$e] = t, t.stateNode = e;
                    }
                    return Le(t), null;
                case 13:
                    if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (u = Ya(t), a !== null && a.dehydrated !== null) {
                            if (e === null) {
                                if (!u) throw Error(o(318));
                                if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
                                u[$e] = t;
                            } else Xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Le(t), u = !1;
                        } else u = Uf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
                        if (!u) return t.flags & 256 ? (vn(t), t) : (vn(t), null);
                    }
                    if (vn(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                    if (n = a !== null, e = e !== null && e.memoizedState !== null, n) {
                        a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                        var c = null;
                        a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== u && (a.flags |= 2048);
                    }
                    return n !== e && n && (t.child.flags |= 8192), ji(t, t.updateQueue), Le(t), null;
                case 4:
                    return gt(), e === null && Ts(t.stateNode.containerInfo), Le(t), null;
                case 10:
                    return gn(t.type), Le(t), null;
                case 19:
                    if (I(Ie), u = t.memoizedState, u === null) return Le(t), null;
                    if (a = (t.flags & 128) !== 0, c = u.rendering, c === null) if (a) ol(u, !1);
                    else {
                        if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (c = wi(e), c !== null) {
                                for(t.flags |= 128, ol(u, !1), e = c.updateQueue, t.updateQueue = e, ji(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;)Lf(n, e), n = n.sibling;
                                return X(Ie, Ie.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        u.tail !== null && Nt() > Bi && (t.flags |= 128, a = !0, ol(u, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!a) if (e = wi(c), e !== null) {
                            if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ji(t, e), ol(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !Oe) return Le(t), null;
                        } else 2 * Nt() - u.renderingStartTime > Bi && n !== 536870912 && (t.flags |= 128, a = !0, ol(u, !1), t.lanes = 4194304);
                        u.isBackwards ? (c.sibling = t.child, t.child = c) : (e = u.last, e !== null ? e.sibling = c : t.child = c, u.last = c);
                    }
                    return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Nt(), t.sibling = null, e = Ie.current, X(Ie, a ? e & 1 | 2 : e & 1), t) : (Le(t), null);
                case 22:
                case 23:
                    return vn(t), Do(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), n = t.updateQueue, n !== null && ji(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && I(yr), null;
                case 24:
                    return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), gn(Xe), Le(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(o(156, t.tag));
        }
        function em(e, t) {
            switch(co(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return gn(Xe), gt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return Ge(t), null;
                case 13:
                    if (vn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(o(340));
                        Xa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return I(Ie), null;
                case 4:
                    return gt(), null;
                case 10:
                    return gn(t.type), null;
                case 22:
                case 23:
                    return vn(t), Do(), e !== null && I(yr), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return gn(Xe), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function oh(e, t) {
            switch(co(t), t.tag){
                case 3:
                    gn(Xe), gt();
                    break;
                case 26:
                case 27:
                case 5:
                    Ge(t);
                    break;
                case 4:
                    gt();
                    break;
                case 13:
                    vn(t);
                    break;
                case 19:
                    I(Ie);
                    break;
                case 10:
                    gn(t.type);
                    break;
                case 22:
                case 23:
                    vn(t), Do(), e !== null && I(yr);
                    break;
                case 24:
                    gn(Xe);
            }
        }
        function sl(e, t) {
            try {
                var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
                if (a !== null) {
                    var u = a.next;
                    n = u;
                    do {
                        if ((n.tag & e) === e) {
                            a = void 0;
                            var c = n.create, p = n.inst;
                            a = c(), p.destroy = a;
                        }
                        n = n.next;
                    }while (n !== u);
                }
            } catch (v) {
                we(t, t.return, v);
            }
        }
        function qn(e, t, n) {
            try {
                var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
                if (u !== null) {
                    var c = u.next;
                    a = c;
                    do {
                        if ((a.tag & e) === e) {
                            var p = a.inst, v = p.destroy;
                            if (v !== void 0) {
                                p.destroy = void 0, u = t;
                                var T = n, N = v;
                                try {
                                    N();
                                } catch (U) {
                                    we(u, T, U);
                                }
                            }
                        }
                        a = a.next;
                    }while (a !== c);
                }
            } catch (U) {
                we(t, t.return, U);
            }
        }
        function sh(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var n = e.stateNode;
                try {
                    $f(t, n);
                } catch (a) {
                    we(e, e.return, a);
                }
            }
        }
        function ch(e, t, n) {
            n.props = Sr(e.type, e.memoizedProps), n.state = e.memoizedState;
            try {
                n.componentWillUnmount();
            } catch (a) {
                we(e, t, a);
            }
        }
        function cl(e, t) {
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
            } catch (u) {
                we(e, t, u);
            }
        }
        function en(e, t) {
            var n = e.ref, a = e.refCleanup;
            if (n !== null) if (typeof a == "function") try {
                a();
            } catch (u) {
                we(e, t, u);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof n == "function") try {
                n(null);
            } catch (u) {
                we(e, t, u);
            }
            else n.current = null;
        }
        function fh(e) {
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
            } catch (u) {
                we(e, e.return, u);
            }
        }
        function Fo(e, t, n) {
            try {
                var a = e.stateNode;
                Em(a, e.type, n, t), a[st] = t;
            } catch (u) {
                we(e, e.return, u);
            }
        }
        function dh(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vn(e.type) || e.tag === 4;
        }
        function es(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || dh(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Vn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function ts(e, t, n) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xi));
            else if (a !== 4 && (a === 27 && Vn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for(ts(e, t, n), e = e.sibling; e !== null;)ts(e, t, n), e = e.sibling;
        }
        function Li(e, t, n) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (a !== 4 && (a === 27 && Vn(e.type) && (n = e.stateNode), e = e.child, e !== null)) for(Li(e, t, n), e = e.sibling; e !== null;)Li(e, t, n), e = e.sibling;
        }
        function hh(e) {
            var t = e.stateNode, n = e.memoizedProps;
            try {
                for(var a = e.type, u = t.attributes; u.length;)t.removeAttributeNode(u[0]);
                lt(t, a, n), t[$e] = e, t[st] = n;
            } catch (c) {
                we(e, e.return, c);
            }
        }
        var Sn = !1, qe = !1, ns = !1, ph = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
        function tm(e, t) {
            if (e = e.containerInfo, Rs = Fi, e = Df(e), Fu(e)) {
                if ("selectionStart" in e) var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var u = a.anchorOffset, c = a.focusNode;
                        a = a.focusOffset;
                        try {
                            n.nodeType, c.nodeType;
                        } catch  {
                            n = null;
                            break e;
                        }
                        var p = 0, v = -1, T = -1, N = 0, U = 0, H = e, j = null;
                        t: for(;;){
                            for(var L; H !== n || u !== 0 && H.nodeType !== 3 || (v = p + u), H !== c || a !== 0 && H.nodeType !== 3 || (T = p + a), H.nodeType === 3 && (p += H.nodeValue.length), (L = H.firstChild) !== null;)j = H, H = L;
                            for(;;){
                                if (H === e) break t;
                                if (j === n && ++N === u && (v = p), j === c && ++U === a && (T = p), (L = H.nextSibling) !== null) break;
                                H = j, j = H.parentNode;
                            }
                            H = L;
                        }
                        n = v === -1 || T === -1 ? null : {
                            start: v,
                            end: T
                        };
                    } else n = null;
                }
                n = n || {
                    start: 0,
                    end: 0
                };
            } else n = null;
            for(Cs = {
                focusedElem: e,
                selectionRange: n
            }, Fi = !1, Fe = t; Fe !== null;)if (t = Fe, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Fe = e;
            else for(; Fe !== null;){
                switch(t = Fe, c = t.alternate, e = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0, n = t, u = c.memoizedProps, c = c.memoizedState, a = n.stateNode;
                            try {
                                var ie = Sr(n.type, u, n.elementType === n.type);
                                e = a.getSnapshotBeforeUpdate(ie, c), a.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (ne) {
                                we(n, n.return, ne);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Ms(e);
                            else if (n === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Ms(e);
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
                        if ((e & 1024) !== 0) throw Error(o(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, Fe = e;
                    break;
                }
                Fe = t.return;
            }
        }
        function gh(e, t, n) {
            var a = n.flags;
            switch(n.tag){
                case 0:
                case 11:
                case 15:
                    Hn(e, n), a & 4 && sl(5, n);
                    break;
                case 1:
                    if (Hn(e, n), a & 4) if (e = n.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (p) {
                        we(n, n.return, p);
                    }
                    else {
                        var u = Sr(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (p) {
                            we(n, n.return, p);
                        }
                    }
                    a & 64 && sh(n), a & 512 && cl(n, n.return);
                    break;
                case 3:
                    if (Hn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
                        if (t = null, n.child !== null) switch(n.child.tag){
                            case 27:
                            case 5:
                                t = n.child.stateNode;
                                break;
                            case 1:
                                t = n.child.stateNode;
                        }
                        try {
                            $f(e, t);
                        } catch (p) {
                            we(n, n.return, p);
                        }
                    }
                    break;
                case 27:
                    t === null && a & 4 && hh(n);
                case 26:
                case 5:
                    Hn(e, n), t === null && a & 4 && fh(n), a & 512 && cl(n, n.return);
                    break;
                case 12:
                    Hn(e, n);
                    break;
                case 13:
                    Hn(e, n), a & 4 && yh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = cm.bind(null, n), xm(e, n))));
                    break;
                case 22:
                    if (a = n.memoizedState !== null || Sn, !a) {
                        t = t !== null && t.memoizedState !== null || qe, u = Sn;
                        var c = qe;
                        Sn = a, (qe = t) && !c ? Qn(e, n, (n.subtreeFlags & 8772) !== 0) : Hn(e, n), Sn = u, qe = c;
                    }
                    break;
                case 30:
                    break;
                default:
                    Hn(e, n);
            }
        }
        function mh(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, mh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ja(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var je = null, Et = !1;
        function En(e, t, n) {
            for(n = n.child; n !== null;)vh(e, t, n), n = n.sibling;
        }
        function vh(e, t, n) {
            if (Ze && typeof Ze.onCommitFiberUnmount == "function") try {
                Ze.onCommitFiberUnmount(un, n);
            } catch  {}
            switch(n.tag){
                case 26:
                    qe || en(n, t), En(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                    break;
                case 27:
                    qe || en(n, t);
                    var a = je, u = Et;
                    Vn(n.type) && (je = n.stateNode, Et = !1), En(e, t, n), bl(n.stateNode), je = a, Et = u;
                    break;
                case 5:
                    qe || en(n, t);
                case 6:
                    if (a = je, u = Et, je = null, En(e, t, n), je = a, Et = u, je !== null) if (Et) try {
                        (je.nodeType === 9 ? je.body : je.nodeName === "HTML" ? je.ownerDocument.body : je).removeChild(n.stateNode);
                    } catch (c) {
                        we(n, t, c);
                    }
                    else try {
                        je.removeChild(n.stateNode);
                    } catch (c) {
                        we(n, t, c);
                    }
                    break;
                case 18:
                    je !== null && (Et ? (e = je, lp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Cl(e)) : lp(je, n.stateNode));
                    break;
                case 4:
                    a = je, u = Et, je = n.stateNode.containerInfo, Et = !0, En(e, t, n), je = a, Et = u;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    qe || qn(2, n, t), qe || qn(4, n, t), En(e, t, n);
                    break;
                case 1:
                    qe || (en(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && ch(n, t, a)), En(e, t, n);
                    break;
                case 21:
                    En(e, t, n);
                    break;
                case 22:
                    qe = (a = qe) || n.memoizedState !== null, En(e, t, n), qe = a;
                    break;
                default:
                    En(e, t, n);
            }
        }
        function yh(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Cl(e);
            } catch (n) {
                we(t, t.return, n);
            }
        }
        function nm(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new ph), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ph), t;
                default:
                    throw Error(o(435, e.tag));
            }
        }
        function rs(e, t) {
            var n = nm(e);
            t.forEach(function(a) {
                var u = fm.bind(null, e, a);
                n.has(a) || (n.add(a), a.then(u, u));
            });
        }
        function Rt(e, t) {
            var n = t.deletions;
            if (n !== null) for(var a = 0; a < n.length; a++){
                var u = n[a], c = e, p = t, v = p;
                e: for(; v !== null;){
                    switch(v.tag){
                        case 27:
                            if (Vn(v.type)) {
                                je = v.stateNode, Et = !1;
                                break e;
                            }
                            break;
                        case 5:
                            je = v.stateNode, Et = !1;
                            break e;
                        case 3:
                        case 4:
                            je = v.stateNode.containerInfo, Et = !0;
                            break e;
                    }
                    v = v.return;
                }
                if (je === null) throw Error(o(160));
                vh(c, p, u), je = null, Et = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)bh(t, e), t = t.sibling;
        }
        var It = null;
        function bh(e, t) {
            var n = e.alternate, a = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    Rt(t, e), Ct(e), a & 4 && (qn(3, e, e.return), sl(3, e), qn(5, e, e.return));
                    break;
                case 1:
                    Rt(t, e), Ct(e), a & 512 && (qe || n === null || en(n, n.return)), a & 64 && Sn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
                    break;
                case 26:
                    var u = It;
                    if (Rt(t, e), Ct(e), a & 512 && (qe || n === null || en(n, n.return)), a & 4) {
                        var c = n !== null ? n.memoizedState : null;
                        if (a = e.memoizedState, n === null) if (a === null) if (e.stateNode === null) {
                            e: {
                                a = e.type, n = e.memoizedProps, u = u.ownerDocument || u;
                                t: switch(a){
                                    case "title":
                                        c = u.getElementsByTagName("title")[0], (!c || c[nt] || c[$e] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(a), u.head.insertBefore(c, u.querySelector("head > title"))), lt(c, a, n), c[$e] = e, Je(c), a = c;
                                        break e;
                                    case "link":
                                        var p = hp("link", "href", u).get(a + (n.href || ""));
                                        if (p) {
                                            for(var v = 0; v < p.length; v++)if (c = p[v], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                p.splice(v, 1);
                                                break t;
                                            }
                                        }
                                        c = u.createElement(a), lt(c, a, n), u.head.appendChild(c);
                                        break;
                                    case "meta":
                                        if (p = hp("meta", "content", u).get(a + (n.content || ""))) {
                                            for(v = 0; v < p.length; v++)if (c = p[v], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                p.splice(v, 1);
                                                break t;
                                            }
                                        }
                                        c = u.createElement(a), lt(c, a, n), u.head.appendChild(c);
                                        break;
                                    default:
                                        throw Error(o(468, a));
                                }
                                c[$e] = e, Je(c), a = c;
                            }
                            e.stateNode = a;
                        } else pp(u, e.type, e.stateNode);
                        else e.stateNode = dp(u, a, e.memoizedProps);
                        else c !== a ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, a === null ? pp(u, e.type, e.stateNode) : dp(u, a, e.memoizedProps)) : a === null && e.stateNode !== null && Fo(e, e.memoizedProps, n.memoizedProps);
                    }
                    break;
                case 27:
                    Rt(t, e), Ct(e), a & 512 && (qe || n === null || en(n, n.return)), n !== null && a & 4 && Fo(e, e.memoizedProps, n.memoizedProps);
                    break;
                case 5:
                    if (Rt(t, e), Ct(e), a & 512 && (qe || n === null || en(n, n.return)), e.flags & 32) {
                        u = e.stateNode;
                        try {
                            Qr(u, "");
                        } catch (L) {
                            we(e, e.return, L);
                        }
                    }
                    a & 4 && e.stateNode != null && (u = e.memoizedProps, Fo(e, u, n !== null ? n.memoizedProps : u)), a & 1024 && (ns = !0);
                    break;
                case 6:
                    if (Rt(t, e), Ct(e), a & 4) {
                        if (e.stateNode === null) throw Error(o(162));
                        a = e.memoizedProps, n = e.stateNode;
                        try {
                            n.nodeValue = a;
                        } catch (L) {
                            we(e, e.return, L);
                        }
                    }
                    break;
                case 3:
                    if ($i = null, u = It, It = Vi(t.containerInfo), Rt(t, e), It = u, Ct(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
                        Cl(t.containerInfo);
                    } catch (L) {
                        we(e, e.return, L);
                    }
                    ns && (ns = !1, Sh(e));
                    break;
                case 4:
                    a = It, It = Vi(e.stateNode.containerInfo), Rt(t, e), Ct(e), It = a;
                    break;
                case 12:
                    Rt(t, e), Ct(e);
                    break;
                case 13:
                    Rt(t, e), Ct(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ss = Nt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, rs(e, a)));
                    break;
                case 22:
                    u = e.memoizedState !== null;
                    var T = n !== null && n.memoizedState !== null, N = Sn, U = qe;
                    if (Sn = N || u, qe = U || T, Rt(t, e), qe = U, Sn = N, Ct(e), a & 8192) e: for(t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (n === null || T || Sn || qe || Er(e)), n = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (n === null) {
                                T = n = t;
                                try {
                                    if (c = T.stateNode, u) p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                                    else {
                                        v = T.stateNode;
                                        var H = T.memoizedProps.style, j = H != null && H.hasOwnProperty("display") ? H.display : null;
                                        v.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                                    }
                                } catch (L) {
                                    we(T, T.return, L);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (n === null) {
                                T = t;
                                try {
                                    T.stateNode.nodeValue = u ? "" : T.memoizedProps;
                                } catch (L) {
                                    we(T, T.return, L);
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
                    a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, rs(e, n))));
                    break;
                case 19:
                    Rt(t, e), Ct(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, rs(e, a)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    Rt(t, e), Ct(e);
            }
        }
        function Ct(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var n, a = e.return; a !== null;){
                        if (dh(a)) {
                            n = a;
                            break;
                        }
                        a = a.return;
                    }
                    if (n == null) throw Error(o(160));
                    switch(n.tag){
                        case 27:
                            var u = n.stateNode, c = es(e);
                            Li(e, c, u);
                            break;
                        case 5:
                            var p = n.stateNode;
                            n.flags & 32 && (Qr(p, ""), n.flags &= -33);
                            var v = es(e);
                            Li(e, v, p);
                            break;
                        case 3:
                        case 4:
                            var T = n.stateNode.containerInfo, N = es(e);
                            ts(e, N, T);
                            break;
                        default:
                            throw Error(o(161));
                    }
                } catch (U) {
                    we(e, e.return, U);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Sh(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Sh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function Hn(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)gh(e, t.alternate, t), t = t.sibling;
        }
        function Er(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        qn(4, t, t.return), Er(t);
                        break;
                    case 1:
                        en(t, t.return);
                        var n = t.stateNode;
                        typeof n.componentWillUnmount == "function" && ch(t, t.return, n), Er(t);
                        break;
                    case 27:
                        bl(t.stateNode);
                    case 26:
                    case 5:
                        en(t, t.return), Er(t);
                        break;
                    case 22:
                        t.memoizedState === null && Er(t);
                        break;
                    case 30:
                        Er(t);
                        break;
                    default:
                        Er(t);
                }
                e = e.sibling;
            }
        }
        function Qn(e, t, n) {
            for(n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var a = t.alternate, u = e, c = t, p = c.flags;
                switch(c.tag){
                    case 0:
                    case 11:
                    case 15:
                        Qn(u, c, n), sl(4, c);
                        break;
                    case 1:
                        if (Qn(u, c, n), a = c, u = a.stateNode, typeof u.componentDidMount == "function") try {
                            u.componentDidMount();
                        } catch (N) {
                            we(a, a.return, N);
                        }
                        if (a = c, u = a.updateQueue, u !== null) {
                            var v = a.stateNode;
                            try {
                                var T = u.shared.hiddenCallbacks;
                                if (T !== null) for(u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++)Zf(T[u], v);
                            } catch (N) {
                                we(a, a.return, N);
                            }
                        }
                        n && p & 64 && sh(c), cl(c, c.return);
                        break;
                    case 27:
                        hh(c);
                    case 26:
                    case 5:
                        Qn(u, c, n), n && a === null && p & 4 && fh(c), cl(c, c.return);
                        break;
                    case 12:
                        Qn(u, c, n);
                        break;
                    case 13:
                        Qn(u, c, n), n && p & 4 && yh(u, c);
                        break;
                    case 22:
                        c.memoizedState === null && Qn(u, c, n), cl(c, c.return);
                        break;
                    case 30:
                        break;
                    default:
                        Qn(u, c, n);
                }
                t = t.sibling;
            }
        }
        function as(e, t) {
            var n = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Za(n));
        }
        function ls(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Za(e));
        }
        function tn(e, t, n, a) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Eh(e, t, n, a), t = t.sibling;
        }
        function Eh(e, t, n, a) {
            var u = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    tn(e, t, n, a), u & 2048 && sl(9, t);
                    break;
                case 1:
                    tn(e, t, n, a);
                    break;
                case 3:
                    tn(e, t, n, a), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Za(e)));
                    break;
                case 12:
                    if (u & 2048) {
                        tn(e, t, n, a), e = t.stateNode;
                        try {
                            var c = t.memoizedProps, p = c.id, v = c.onPostCommit;
                            typeof v == "function" && v(p, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (T) {
                            we(t, t.return, T);
                        }
                    } else tn(e, t, n, a);
                    break;
                case 13:
                    tn(e, t, n, a);
                    break;
                case 23:
                    break;
                case 22:
                    c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? tn(e, t, n, a) : fl(e, t) : c._visibility & 2 ? tn(e, t, n, a) : (c._visibility |= 2, ua(e, t, n, a, (t.subtreeFlags & 10256) !== 0)), u & 2048 && as(p, t);
                    break;
                case 24:
                    tn(e, t, n, a), u & 2048 && ls(t.alternate, t);
                    break;
                default:
                    tn(e, t, n, a);
            }
        }
        function ua(e, t, n, a, u) {
            for(u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var c = e, p = t, v = n, T = a, N = p.flags;
                switch(p.tag){
                    case 0:
                    case 11:
                    case 15:
                        ua(c, p, v, T, u), sl(8, p);
                        break;
                    case 23:
                        break;
                    case 22:
                        var U = p.stateNode;
                        p.memoizedState !== null ? U._visibility & 2 ? ua(c, p, v, T, u) : fl(c, p) : (U._visibility |= 2, ua(c, p, v, T, u)), u && N & 2048 && as(p.alternate, p);
                        break;
                    case 24:
                        ua(c, p, v, T, u), u && N & 2048 && ls(p.alternate, p);
                        break;
                    default:
                        ua(c, p, v, T, u);
                }
                t = t.sibling;
            }
        }
        function fl(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var n = e, a = t, u = a.flags;
                switch(a.tag){
                    case 22:
                        fl(n, a), u & 2048 && as(a.alternate, a);
                        break;
                    case 24:
                        fl(n, a), u & 2048 && ls(a.alternate, a);
                        break;
                    default:
                        fl(n, a);
                }
                t = t.sibling;
            }
        }
        var dl = 8192;
        function oa(e) {
            if (e.subtreeFlags & dl) for(e = e.child; e !== null;)Oh(e), e = e.sibling;
        }
        function Oh(e) {
            switch(e.tag){
                case 26:
                    oa(e), e.flags & dl && e.memoizedState !== null && Hm(It, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    oa(e);
                    break;
                case 3:
                case 4:
                    var t = It;
                    It = Vi(e.stateNode.containerInfo), oa(e), It = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = dl, dl = 16777216, oa(e), dl = t) : oa(e));
                    break;
                default:
                    oa(e);
            }
        }
        function Th(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function hl(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var n = 0; n < t.length; n++){
                    var a = t[n];
                    Fe = a, Dh(a, e);
                }
                Th(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)_h(e), e = e.sibling;
        }
        function _h(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    hl(e), e.flags & 2048 && qn(9, e, e.return);
                    break;
                case 3:
                    hl(e);
                    break;
                case 12:
                    hl(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ki(e)) : hl(e);
                    break;
                default:
                    hl(e);
            }
        }
        function ki(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var n = 0; n < t.length; n++){
                    var a = t[n];
                    Fe = a, Dh(a, e);
                }
                Th(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        qn(8, t, t.return), ki(t);
                        break;
                    case 22:
                        n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, ki(t));
                        break;
                    default:
                        ki(t);
                }
                e = e.sibling;
            }
        }
        function Dh(e, t) {
            for(; Fe !== null;){
                var n = Fe;
                switch(n.tag){
                    case 0:
                    case 11:
                    case 15:
                        qn(8, n, t);
                        break;
                    case 23:
                    case 22:
                        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                            var a = n.memoizedState.cachePool.pool;
                            a != null && a.refCount++;
                        }
                        break;
                    case 24:
                        Za(n.memoizedState.cache);
                }
                if (a = n.child, a !== null) a.return = n, Fe = a;
                else e: for(n = e; Fe !== null;){
                    a = Fe;
                    var u = a.sibling, c = a.return;
                    if (mh(a), a === n) {
                        Fe = null;
                        break e;
                    }
                    if (u !== null) {
                        u.return = c, Fe = u;
                        break e;
                    }
                    Fe = c;
                }
            }
        }
        var rm = {
            getCacheForType: function(e) {
                var t = ct(Xe), n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n;
            }
        }, am = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Ae = null, pe = null, ye = 0, _e = 0, xt = null, Kn = !1, sa = !1, is = !1, On = 0, ze = 0, Gn = 0, Or = 0, us = 0, qt = 0, ca = 0, pl = null, Ot = null, os = !1, ss = 0, Bi = 1 / 0, zi = null, Yn = null, at = 0, Xn = null, fa = null, da = 0, cs = 0, fs = null, Rh = null, gl = 0, ds = null;
        function wt() {
            if ((Te & 2) !== 0 && ye !== 0) return ye & -ye;
            if (z.T !== null) {
                var e = Fr;
                return e !== 0 ? e : bs();
            }
            return Lr();
        }
        function Ch() {
            qt === 0 && (qt = (ye & 536870912) === 0 || Oe ? Vl() : 536870912);
            var e = Ut.current;
            return e !== null && (e.flags |= 32), qt;
        }
        function Mt(e, t, n) {
            (e === Ae && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) && (ha(e, 0), In(e, ye, qt, !1)), ir(e, n), ((Te & 2) === 0 || e !== Ae) && (e === Ae && ((Te & 2) === 0 && (Or |= n), ze === 4 && In(e, ye, qt, !1)), nn(e));
        }
        function xh(e, t, n) {
            if ((Te & 6) !== 0) throw Error(o(327));
            var a = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || lr(e, t), u = a ? um(e, t) : gs(e, t, !0), c = a;
            do {
                if (u === 0) {
                    sa && !a && In(e, t, 0, !1);
                    break;
                } else {
                    if (n = e.current.alternate, c && !lm(n)) {
                        u = gs(e, t, !1), c = !1;
                        continue;
                    }
                    if (u === 2) {
                        if (c = t, e.errorRecoveryDisabledLanes & c) var p = 0;
                        else p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
                        if (p !== 0) {
                            t = p;
                            e: {
                                var v = e;
                                u = pl;
                                var T = v.current.memoizedState.isDehydrated;
                                if (T && (ha(v, p).flags |= 256), p = gs(v, p, !1), p !== 2) {
                                    if (is && !T) {
                                        v.errorRecoveryDisabledLanes |= c, Or |= c, u = 4;
                                        break e;
                                    }
                                    c = Ot, Ot = u, c !== null && (Ot === null ? Ot = c : Ot.push.apply(Ot, c));
                                }
                                u = p;
                            }
                            if (c = !1, u !== 2) continue;
                        }
                    }
                    if (u === 1) {
                        ha(e, 0), In(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(a = e, c = u, c){
                            case 0:
                            case 1:
                                throw Error(o(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                In(a, t, qt, !Kn);
                                break e;
                            case 2:
                                Ot = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(o(329));
                        }
                        if ((t & 62914560) === t && (u = ss + 300 - Nt(), 10 < u)) {
                            if (In(a, t, qt, !Kn), Ar(a, 0, !0) !== 0) break e;
                            a.timeoutHandle = rp(wh.bind(null, a, n, Ot, zi, os, t, qt, Or, ca, Kn, c, 2, -0, 0), u);
                            break e;
                        }
                        wh(a, n, Ot, zi, os, t, qt, Or, ca, Kn, c, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            nn(e);
        }
        function wh(e, t, n, a, u, c, p, v, T, N, U, H, j, L) {
            if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (Ol = {
                stylesheets: null,
                count: 0,
                unsuspend: qm
            }, Oh(t), H = Qm(), H !== null)) {
                e.cancelPendingCommit = H(kh.bind(null, e, t, c, n, a, u, p, v, T, U, 1, j, L)), In(e, c, p, !N);
                return;
            }
            kh(e, t, c, n, a, u, p, v, T);
        }
        function lm(e) {
            for(var t = e;;){
                var n = t.tag;
                if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for(var a = 0; a < n.length; a++){
                    var u = n[a], c = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!_t(c(), u)) return !1;
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
        function In(e, t, n, a) {
            t &= ~us, t &= ~Or, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
            for(var u = t; 0 < u;){
                var c = 31 - mt(u), p = 1 << c;
                a[c] = -1, u &= ~p;
            }
            n !== 0 && Zl(e, n, t);
        }
        function Ui() {
            return (Te & 6) === 0 ? (ml(0), !1) : !0;
        }
        function hs() {
            if (pe !== null) {
                if (_e === 0) var e = pe.return;
                else e = pe, pn = mr = null, Mo(e), la = null, il = 0, e = pe;
                for(; e !== null;)oh(e.alternate, e), e = e.return;
                pe = null;
            }
        }
        function ha(e, t) {
            var n = e.timeoutHandle;
            n !== -1 && (e.timeoutHandle = -1, Tm(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), hs(), Ae = e, pe = n = fn(e.current, null), ye = t, _e = 0, xt = null, Kn = !1, sa = lr(e, t), is = !1, ca = qt = us = Or = Gn = ze = 0, Ot = pl = null, os = !1, (t & 8) !== 0 && (t |= t & 32);
            var a = e.entangledLanes;
            if (a !== 0) for(e = e.entanglements, a &= t; 0 < a;){
                var u = 31 - mt(a), c = 1 << u;
                t |= e[u], a &= ~c;
            }
            return On = t, ui(), n;
        }
        function Mh(e, t) {
            fe = null, z.H = Ri, t === Ja || t === mi ? (t = If(), _e = 3) : t === Gf ? (t = If(), _e = 4) : _e = t === Vd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, pe === null && (ze = 1, Ni(e, Lt(t, e.current)));
        }
        function Nh() {
            var e = z.H;
            return z.H = Ri, e === null ? Ri : e;
        }
        function Ah() {
            var e = z.A;
            return z.A = rm, e;
        }
        function ps() {
            ze = 4, Kn || (ye & 4194048) !== ye && Ut.current !== null || (sa = !0), (Gn & 134217727) === 0 && (Or & 134217727) === 0 || Ae === null || In(Ae, ye, qt, !1);
        }
        function gs(e, t, n) {
            var a = Te;
            Te |= 2;
            var u = Nh(), c = Ah();
            (Ae !== e || ye !== t) && (zi = null, ha(e, t)), t = !1;
            var p = ze;
            e: do try {
                if (_e !== 0 && pe !== null) {
                    var v = pe, T = xt;
                    switch(_e){
                        case 8:
                            hs(), p = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ut.current === null && (t = !0);
                            var N = _e;
                            if (_e = 0, xt = null, pa(e, v, T, N), n && sa) {
                                p = 0;
                                break e;
                            }
                            break;
                        default:
                            N = _e, _e = 0, xt = null, pa(e, v, T, N);
                    }
                }
                im(), p = ze;
                break;
            } catch (U) {
                Mh(e, U);
            }
            while (!0);
            return t && e.shellSuspendCounter++, pn = mr = null, Te = a, z.H = u, z.A = c, pe === null && (Ae = null, ye = 0, ui()), p;
        }
        function im() {
            for(; pe !== null;)Ph(pe);
        }
        function um(e, t) {
            var n = Te;
            Te |= 2;
            var a = Nh(), u = Ah();
            Ae !== e || ye !== t ? (zi = null, Bi = Nt() + 500, ha(e, t)) : sa = lr(e, t);
            e: do try {
                if (_e !== 0 && pe !== null) {
                    t = pe;
                    var c = xt;
                    t: switch(_e){
                        case 1:
                            _e = 0, xt = null, pa(e, t, c, 1);
                            break;
                        case 2:
                        case 9:
                            if (Yf(c)) {
                                _e = 0, xt = null, jh(t);
                                break;
                            }
                            t = function() {
                                _e !== 2 && _e !== 9 || Ae !== e || (_e = 7), nn(e);
                            }, c.then(t, t);
                            break e;
                        case 3:
                            _e = 7;
                            break e;
                        case 4:
                            _e = 5;
                            break e;
                        case 7:
                            Yf(c) ? (_e = 0, xt = null, jh(t)) : (_e = 0, xt = null, pa(e, t, c, 7));
                            break;
                        case 5:
                            var p = null;
                            switch(pe.tag){
                                case 26:
                                    p = pe.memoizedState;
                                case 5:
                                case 27:
                                    var v = pe;
                                    if (!p || gp(p)) {
                                        _e = 0, xt = null;
                                        var T = v.sibling;
                                        if (T !== null) pe = T;
                                        else {
                                            var N = v.return;
                                            N !== null ? (pe = N, qi(N)) : pe = null;
                                        }
                                        break t;
                                    }
                            }
                            _e = 0, xt = null, pa(e, t, c, 5);
                            break;
                        case 6:
                            _e = 0, xt = null, pa(e, t, c, 6);
                            break;
                        case 8:
                            hs(), ze = 6;
                            break e;
                        default:
                            throw Error(o(462));
                    }
                }
                om();
                break;
            } catch (U) {
                Mh(e, U);
            }
            while (!0);
            return pn = mr = null, z.H = a, z.A = u, Te = n, pe !== null ? 0 : (Ae = null, ye = 0, ui(), ze);
        }
        function om() {
            for(; pe !== null && !Da();)Ph(pe);
        }
        function Ph(e) {
            var t = ih(e.alternate, e, On);
            e.memoizedProps = e.pendingProps, t === null ? qi(e) : pe = t;
        }
        function jh(e) {
            var t = e, n = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = eh(n, t, t.pendingProps, t.type, void 0, ye);
                    break;
                case 11:
                    t = eh(n, t, t.pendingProps, t.type.render, t.ref, ye);
                    break;
                case 5:
                    Mo(t);
                default:
                    oh(n, t), t = pe = Lf(t, On), t = ih(n, t, On);
            }
            e.memoizedProps = e.pendingProps, t === null ? qi(e) : pe = t;
        }
        function pa(e, t, n, a) {
            pn = mr = null, Mo(t), la = null, il = 0;
            var u = t.return;
            try {
                if (J1(e, u, t, n, ye)) {
                    ze = 1, Ni(e, Lt(n, e.current)), pe = null;
                    return;
                }
            } catch (c) {
                if (u !== null) throw pe = u, c;
                ze = 1, Ni(e, Lt(n, e.current)), pe = null;
                return;
            }
            t.flags & 32768 ? (Oe || a === 1 ? e = !0 : sa || (ye & 536870912) !== 0 ? e = !1 : (Kn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ut.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Lh(t, e)) : qi(t);
        }
        function qi(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Lh(t, Kn);
                    return;
                }
                e = t.return;
                var n = F1(t.alternate, t, On);
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
        function Lh(e, t) {
            do {
                var n = em(e.alternate, e);
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
        function kh(e, t, n, a, u, c, p, v, T) {
            e.cancelPendingCommit = null;
            do Hi();
            while (at !== 0);
            if ((Te & 6) !== 0) throw Error(o(327));
            if (t !== null) {
                if (t === e.current) throw Error(o(177));
                if (c = t.lanes | t.childLanes, c |= ao, Pu(e, n, c, p, v, T), e === Ae && (pe = Ae = null, ye = 0), fa = t, Xn = e, da = n, cs = c, fs = u, Rh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, dm(wr, function() {
                    return Hh(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                    a = z.T, z.T = null, u = Y.p, Y.p = 2, p = Te, Te |= 4;
                    try {
                        tm(e, t, n);
                    } finally{
                        Te = p, Y.p = u, z.T = a;
                    }
                }
                at = 1, Bh(), zh(), Uh();
            }
        }
        function Bh() {
            if (at === 1) {
                at = 0;
                var e = Xn, t = fa, n = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || n) {
                    n = z.T, z.T = null;
                    var a = Y.p;
                    Y.p = 2;
                    var u = Te;
                    Te |= 4;
                    try {
                        bh(t, e);
                        var c = Cs, p = Df(e.containerInfo), v = c.focusedElem, T = c.selectionRange;
                        if (p !== v && v && v.ownerDocument && _f(v.ownerDocument.documentElement, v)) {
                            if (T !== null && Fu(v)) {
                                var N = T.start, U = T.end;
                                if (U === void 0 && (U = N), "selectionStart" in v) v.selectionStart = N, v.selectionEnd = Math.min(U, v.value.length);
                                else {
                                    var H = v.ownerDocument || document, j = H && H.defaultView || window;
                                    if (j.getSelection) {
                                        var L = j.getSelection(), ie = v.textContent.length, ne = Math.min(T.start, ie), xe = T.end === void 0 ? ne : Math.min(T.end, ie);
                                        !L.extend && ne > xe && (p = xe, xe = ne, ne = p);
                                        var w = Tf(v, ne), C = Tf(v, xe);
                                        if (w && C && (L.rangeCount !== 1 || L.anchorNode !== w.node || L.anchorOffset !== w.offset || L.focusNode !== C.node || L.focusOffset !== C.offset)) {
                                            var M = H.createRange();
                                            M.setStart(w.node, w.offset), L.removeAllRanges(), ne > xe ? (L.addRange(M), L.extend(C.node, C.offset)) : (M.setEnd(C.node, C.offset), L.addRange(M));
                                        }
                                    }
                                }
                            }
                            for(H = [], L = v; L = L.parentNode;)L.nodeType === 1 && H.push({
                                element: L,
                                left: L.scrollLeft,
                                top: L.scrollTop
                            });
                            for(typeof v.focus == "function" && v.focus(), v = 0; v < H.length; v++){
                                var q = H[v];
                                q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
                            }
                        }
                        Fi = !!Rs, Cs = Rs = null;
                    } finally{
                        Te = u, Y.p = a, z.T = n;
                    }
                }
                e.current = t, at = 2;
            }
        }
        function zh() {
            if (at === 2) {
                at = 0;
                var e = Xn, t = fa, n = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || n) {
                    n = z.T, z.T = null;
                    var a = Y.p;
                    Y.p = 2;
                    var u = Te;
                    Te |= 4;
                    try {
                        gh(e, t.alternate, t);
                    } finally{
                        Te = u, Y.p = a, z.T = n;
                    }
                }
                at = 3;
            }
        }
        function Uh() {
            if (at === 4 || at === 3) {
                at = 0, Mn();
                var e = Xn, t = fa, n = da, a = Rh;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, fa = Xn = null, qh(e, e.pendingLanes));
                var u = e.pendingLanes;
                if (u === 0 && (Yn = null), Nn(n), t = t.stateNode, Ze && typeof Ze.onCommitFiberRoot == "function") try {
                    Ze.onCommitFiberRoot(un, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (a !== null) {
                    t = z.T, u = Y.p, Y.p = 2, z.T = null;
                    try {
                        for(var c = e.onRecoverableError, p = 0; p < a.length; p++){
                            var v = a[p];
                            c(v.value, {
                                componentStack: v.stack
                            });
                        }
                    } finally{
                        z.T = t, Y.p = u;
                    }
                }
                (da & 3) !== 0 && Hi(), nn(e), u = e.pendingLanes, (n & 4194090) !== 0 && (u & 42) !== 0 ? e === ds ? gl++ : (gl = 0, ds = e) : gl = 0, ml(0);
            }
        }
        function qh(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Za(t)));
        }
        function Hi(e) {
            return Bh(), zh(), Uh(), Hh();
        }
        function Hh() {
            if (at !== 5) return !1;
            var e = Xn, t = cs;
            cs = 0;
            var n = Nn(da), a = z.T, u = Y.p;
            try {
                Y.p = 32 > n ? 32 : n, z.T = null, n = fs, fs = null;
                var c = Xn, p = da;
                if (at = 0, fa = Xn = null, da = 0, (Te & 6) !== 0) throw Error(o(331));
                var v = Te;
                if (Te |= 4, _h(c.current), Eh(c, c.current, p, n), Te = v, ml(0, !1), Ze && typeof Ze.onPostCommitFiberRoot == "function") try {
                    Ze.onPostCommitFiberRoot(un, c);
                } catch  {}
                return !0;
            } finally{
                Y.p = u, z.T = a, qh(e, t);
            }
        }
        function Qh(e, t, n) {
            t = Lt(n, t), t = Go(e.stateNode, t, 2), e = kn(e, t, 2), e !== null && (ir(e, 2), nn(e));
        }
        function we(e, t, n) {
            if (e.tag === 3) Qh(e, e, n);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Qh(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Yn === null || !Yn.has(a))) {
                        e = Lt(n, e), n = Xd(2), a = kn(t, n, 2), a !== null && (Id(n, a, t, e), ir(a, 2), nn(a));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function ms(e, t, n) {
            var a = e.pingCache;
            if (a === null) {
                a = e.pingCache = new am;
                var u = new Set;
                a.set(t, u);
            } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
            u.has(n) || (is = !0, u.add(n), e = sm.bind(null, e, t, n), t.then(e, e));
        }
        function sm(e, t, n) {
            var a = e.pingCache;
            a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ae === e && (ye & n) === n && (ze === 4 || ze === 3 && (ye & 62914560) === ye && 300 > Nt() - ss ? (Te & 2) === 0 && ha(e, 0) : us |= n, ca === ye && (ca = 0)), nn(e);
        }
        function Kh(e, t) {
            t === 0 && (t = Pr()), e = Zr(e, t), e !== null && (ir(e, t), nn(e));
        }
        function cm(e) {
            var t = e.memoizedState, n = 0;
            t !== null && (n = t.retryLane), Kh(e, n);
        }
        function fm(e, t) {
            var n = 0;
            switch(e.tag){
                case 13:
                    var a = e.stateNode, u = e.memoizedState;
                    u !== null && (n = u.retryLane);
                    break;
                case 19:
                    a = e.stateNode;
                    break;
                case 22:
                    a = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(o(314));
            }
            a !== null && a.delete(t), Kh(e, n);
        }
        function dm(e, t) {
            return wn(e, t);
        }
        var Qi = null, ga = null, vs = !1, Ki = !1, ys = !1, Tr = 0;
        function nn(e) {
            e !== ga && e.next === null && (ga === null ? Qi = ga = e : ga = ga.next = e), Ki = !0, vs || (vs = !0, pm());
        }
        function ml(e, t) {
            if (!ys && Ki) {
                ys = !0;
                do for(var n = !1, a = Qi; a !== null;){
                    if (e !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var c = 0;
                        else {
                            var p = a.suspendedLanes, v = a.pingedLanes;
                            c = (1 << 31 - mt(42 | e) + 1) - 1, c &= u & ~(p & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
                        }
                        c !== 0 && (n = !0, Ih(a, c));
                    } else c = ye, c = Ar(a, a === Ae ? c : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (c & 3) === 0 || lr(a, c) || (n = !0, Ih(a, c));
                    a = a.next;
                }
                while (n);
                ys = !1;
            }
        }
        function hm() {
            Gh();
        }
        function Gh() {
            Ki = vs = !1;
            var e = 0;
            Tr !== 0 && (Om() && (e = Tr), Tr = 0);
            for(var t = Nt(), n = null, a = Qi; a !== null;){
                var u = a.next, c = Yh(a, t);
                c === 0 ? (a.next = null, n === null ? Qi = u : n.next = u, u === null && (ga = n)) : (n = a, (e !== 0 || (c & 3) !== 0) && (Ki = !0)), a = u;
            }
            ml(e);
        }
        function Yh(e, t) {
            for(var n = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c;){
                var p = 31 - mt(c), v = 1 << p, T = u[p];
                T === -1 ? ((v & n) === 0 || (v & a) !== 0) && (u[p] = Au(v, t)) : T <= t && (e.expiredLanes |= v), c &= ~v;
            }
            if (t = Ae, n = ye, n = Ar(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && _a(a), e.callbackNode = null, e.callbackPriority = 0;
            if ((n & 3) === 0 || lr(e, n)) {
                if (t = n & -n, t === e.callbackPriority) return t;
                switch(a !== null && _a(a), Nn(n)){
                    case 2:
                    case 8:
                        n = Ca;
                        break;
                    case 32:
                        n = wr;
                        break;
                    case 268435456:
                        n = wa;
                        break;
                    default:
                        n = wr;
                }
                return a = Xh.bind(null, e), n = wn(n, a), e.callbackPriority = t, e.callbackNode = n, t;
            }
            return a !== null && a !== null && _a(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Xh(e, t) {
            if (at !== 0 && at !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var n = e.callbackNode;
            if (Hi() && e.callbackNode !== n) return null;
            var a = ye;
            return a = Ar(e, e === Ae ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (xh(e, a, t), Yh(e, Nt()), e.callbackNode != null && e.callbackNode === n ? Xh.bind(null, e) : null);
        }
        function Ih(e, t) {
            if (Hi()) return null;
            xh(e, t, !0);
        }
        function pm() {
            _m(function() {
                (Te & 6) !== 0 ? wn(Il, hm) : Gh();
            });
        }
        function bs() {
            return Tr === 0 && (Tr = Vl()), Tr;
        }
        function Vh(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ei("" + e);
        }
        function Zh(e, t) {
            var n = t.ownerDocument.createElement("input");
            return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
        }
        function gm(e, t, n, a, u) {
            if (t === "submit" && n && n.stateNode === u) {
                var c = Vh((u[st] || null).action), p = a.submitter;
                p && (t = (t = p[st] || null) ? Vh(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
                var v = new ai("action", "action", null, a, u);
                e.push({
                    event: v,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (a.defaultPrevented) {
                                    if (Tr !== 0) {
                                        var T = p ? Zh(u, p) : new FormData(u);
                                        Uo(n, {
                                            pending: !0,
                                            data: T,
                                            method: u.method,
                                            action: c
                                        }, null, T);
                                    }
                                } else typeof c == "function" && (v.preventDefault(), T = p ? Zh(u, p) : new FormData(u), Uo(n, {
                                    pending: !0,
                                    data: T,
                                    method: u.method,
                                    action: c
                                }, c, T));
                            },
                            currentTarget: u
                        }
                    ]
                });
            }
        }
        for(var Ss = 0; Ss < ro.length; Ss++){
            var Es = ro[Ss], mm = Es.toLowerCase(), vm = Es[0].toUpperCase() + Es.slice(1);
            Xt(mm, "on" + vm);
        }
        Xt(xf, "onAnimationEnd"), Xt(wf, "onAnimationIteration"), Xt(Mf, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(j1, "onTransitionRun"), Xt(L1, "onTransitionStart"), Xt(k1, "onTransitionCancel"), Xt(Nf, "onTransitionEnd"), Ur("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), Ur("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), Ur("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), Ur("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ur("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var vl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ym = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));
        function $h(e, t) {
            t = (t & 4) !== 0;
            for(var n = 0; n < e.length; n++){
                var a = e[n], u = a.event;
                a = a.listeners;
                e: {
                    var c = void 0;
                    if (t) for(var p = a.length - 1; 0 <= p; p--){
                        var v = a[p], T = v.instance, N = v.currentTarget;
                        if (v = v.listener, T !== c && u.isPropagationStopped()) break e;
                        c = v, u.currentTarget = N;
                        try {
                            c(u);
                        } catch (U) {
                            Mi(U);
                        }
                        u.currentTarget = null, c = T;
                    }
                    else for(p = 0; p < a.length; p++){
                        if (v = a[p], T = v.instance, N = v.currentTarget, v = v.listener, T !== c && u.isPropagationStopped()) break e;
                        c = v, u.currentTarget = N;
                        try {
                            c(u);
                        } catch (U) {
                            Mi(U);
                        }
                        u.currentTarget = null, c = T;
                    }
                }
            }
        }
        function ge(e, t) {
            var n = t[Ne];
            n === void 0 && (n = t[Ne] = new Set);
            var a = e + "__bubble";
            n.has(a) || (Jh(t, e, 2, !1), n.add(a));
        }
        function Os(e, t, n) {
            var a = 0;
            t && (a |= 4), Jh(n, e, a, t);
        }
        var Gi = "_reactListening" + Math.random().toString(36).slice(2);
        function Ts(e) {
            if (!e[Gi]) {
                e[Gi] = !0, Kc.forEach(function(n) {
                    n !== "selectionchange" && (ym.has(n) || Os(n, !1, e), Os(n, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Gi] || (t[Gi] = !0, Os("selectionchange", !1, t));
            }
        }
        function Jh(e, t, n, a) {
            switch(Ep(t)){
                case 2:
                    var u = Ym;
                    break;
                case 8:
                    u = Xm;
                    break;
                default:
                    u = Bs;
            }
            n = u.bind(null, t, n, e), u = void 0, !Gu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? e.addEventListener(t, n, {
                capture: !0,
                passive: u
            }) : e.addEventListener(t, n, !0) : u !== void 0 ? e.addEventListener(t, n, {
                passive: u
            }) : e.addEventListener(t, n, !1);
        }
        function _s(e, t, n, a, u) {
            var c = a;
            if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for(;;){
                if (a === null) return;
                var p = a.tag;
                if (p === 3 || p === 4) {
                    var v = a.stateNode.containerInfo;
                    if (v === u) break;
                    if (p === 4) for(p = a.return; p !== null;){
                        var T = p.tag;
                        if ((T === 3 || T === 4) && p.stateNode.containerInfo === u) return;
                        p = p.return;
                    }
                    for(; v !== null;){
                        if (p = kr(v), p === null) return;
                        if (T = p.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                            a = c = p;
                            continue e;
                        }
                        v = v.parentNode;
                    }
                }
                a = a.return;
            }
            rf(function() {
                var N = c, U = Qu(n), H = [];
                e: {
                    var j = Af.get(e);
                    if (j !== void 0) {
                        var L = ai, ie = e;
                        switch(e){
                            case "keypress":
                                if (ni(n) === 0) break e;
                            case "keydown":
                            case "keyup":
                                L = d1;
                                break;
                            case "focusin":
                                ie = "focus", L = Vu;
                                break;
                            case "focusout":
                                ie = "blur", L = Vu;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                L = Vu;
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
                                L = uf;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                L = e1;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                L = g1;
                                break;
                            case xf:
                            case wf:
                            case Mf:
                                L = r1;
                                break;
                            case Nf:
                                L = v1;
                                break;
                            case "scroll":
                            case "scrollend":
                                L = W0;
                                break;
                            case "wheel":
                                L = b1;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                L = l1;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                L = sf;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                L = E1;
                        }
                        var ne = (t & 4) !== 0, xe = !ne && (e === "scroll" || e === "scrollend"), w = ne ? j !== null ? j + "Capture" : null : j;
                        ne = [];
                        for(var C = N, M; C !== null;){
                            var q = C;
                            if (M = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || M === null || w === null || (q = ka(C, w), q != null && ne.push(yl(C, q, M))), xe) break;
                            C = C.return;
                        }
                        0 < ne.length && (j = new L(j, ie, null, n, U), H.push({
                            event: j,
                            listeners: ne
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (j = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", j && n !== Hu && (ie = n.relatedTarget || n.fromElement) && (kr(ie) || ie[Ee])) break e;
                        if ((L || j) && (j = U.window === U ? U : (j = U.ownerDocument) ? j.defaultView || j.parentWindow : window, L ? (ie = n.relatedTarget || n.toElement, L = N, ie = ie ? kr(ie) : null, ie !== null && (xe = f(ie), ne = ie.tag, ie !== xe || ne !== 5 && ne !== 27 && ne !== 6) && (ie = null)) : (L = null, ie = N), L !== ie)) {
                            if (ne = uf, q = "onMouseLeave", w = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (ne = sf, q = "onPointerLeave", w = "onPointerEnter", C = "pointer"), xe = L == null ? j : La(L), M = ie == null ? j : La(ie), j = new ne(q, C + "leave", L, n, U), j.target = xe, j.relatedTarget = M, q = null, kr(U) === N && (ne = new ne(w, C + "enter", ie, n, U), ne.target = M, ne.relatedTarget = xe, q = ne), xe = q, L && ie) t: {
                                for(ne = L, w = ie, C = 0, M = ne; M; M = ma(M))C++;
                                for(M = 0, q = w; q; q = ma(q))M++;
                                for(; 0 < C - M;)ne = ma(ne), C--;
                                for(; 0 < M - C;)w = ma(w), M--;
                                for(; C--;){
                                    if (ne === w || w !== null && ne === w.alternate) break t;
                                    ne = ma(ne), w = ma(w);
                                }
                                ne = null;
                            }
                            else ne = null;
                            L !== null && Wh(H, j, L, ne, !1), ie !== null && xe !== null && Wh(H, xe, ie, ne, !0);
                        }
                    }
                    e: {
                        if (j = N ? La(N) : window, L = j.nodeName && j.nodeName.toLowerCase(), L === "select" || L === "input" && j.type === "file") var J = vf;
                        else if (gf(j)) if (yf) J = N1;
                        else {
                            J = w1;
                            var de = x1;
                        }
                        else L = j.nodeName, !L || L.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? N && qu(N.elementType) && (J = vf) : J = M1;
                        if (J && (J = J(e, N))) {
                            mf(H, J, n, U);
                            break e;
                        }
                        de && de(e, j, N), e === "focusout" && N && j.type === "number" && N.memoizedProps.value != null && Uu(j, "number", j.value);
                    }
                    switch(de = N ? La(N) : window, e){
                        case "focusin":
                            (gf(de) || de.contentEditable === "true") && (Xr = de, eo = N, Ga = null);
                            break;
                        case "focusout":
                            Ga = eo = Xr = null;
                            break;
                        case "mousedown":
                            to = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            to = !1, Rf(H, n, U);
                            break;
                        case "selectionchange":
                            if (P1) break;
                        case "keydown":
                        case "keyup":
                            Rf(H, n, U);
                    }
                    var ee;
                    if ($u) e: {
                        switch(e){
                            case "compositionstart":
                                var ae = "onCompositionStart";
                                break e;
                            case "compositionend":
                                ae = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                ae = "onCompositionUpdate";
                                break e;
                        }
                        ae = void 0;
                    }
                    else Yr ? hf(e, n) && (ae = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ae = "onCompositionStart");
                    ae && (cf && n.locale !== "ko" && (Yr || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && Yr && (ee = af()) : (An = U, Yu = "value" in An ? An.value : An.textContent, Yr = !0)), de = Yi(N, ae), 0 < de.length && (ae = new of(ae, e, null, n, U), H.push({
                        event: ae,
                        listeners: de
                    }), ee ? ae.data = ee : (ee = pf(n), ee !== null && (ae.data = ee)))), (ee = T1 ? _1(e, n) : D1(e, n)) && (ae = Yi(N, "onBeforeInput"), 0 < ae.length && (de = new of("onBeforeInput", "beforeinput", null, n, U), H.push({
                        event: de,
                        listeners: ae
                    }), de.data = ee)), gm(H, e, N, n, U);
                }
                $h(H, t);
            });
        }
        function yl(e, t, n) {
            return {
                instance: e,
                listener: t,
                currentTarget: n
            };
        }
        function Yi(e, t) {
            for(var n = t + "Capture", a = []; e !== null;){
                var u = e, c = u.stateNode;
                if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = ka(e, n), u != null && a.unshift(yl(e, u, c)), u = ka(e, t), u != null && a.push(yl(e, u, c))), e.tag === 3) return a;
                e = e.return;
            }
            return [];
        }
        function ma(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function Wh(e, t, n, a, u) {
            for(var c = t._reactName, p = []; n !== null && n !== a;){
                var v = n, T = v.alternate, N = v.stateNode;
                if (v = v.tag, T !== null && T === a) break;
                v !== 5 && v !== 26 && v !== 27 || N === null || (T = N, u ? (N = ka(n, c), N != null && p.unshift(yl(n, N, T))) : u || (N = ka(n, c), N != null && p.push(yl(n, N, T)))), n = n.return;
            }
            p.length !== 0 && e.push({
                event: t,
                listeners: p
            });
        }
        var bm = /\r\n?/g, Sm = /\u0000|\uFFFD/g;
        function Fh(e) {
            return (typeof e == "string" ? e : "" + e).replace(bm, `
`).replace(Sm, "");
        }
        function ep(e, t) {
            return t = Fh(t), Fh(e) === t;
        }
        function Xi() {}
        function Ce(e, t, n, a, u, c) {
            switch(n){
                case "children":
                    typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Qr(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Qr(e, "" + a);
                    break;
                case "className":
                    Jl(e, "class", a);
                    break;
                case "tabIndex":
                    Jl(e, "tabindex", a);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    Jl(e, n, a);
                    break;
                case "style":
                    tf(e, a, c);
                    break;
                case "data":
                    if (t !== "object") {
                        Jl(e, "data", a);
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
                    a = ei("" + a), e.setAttribute(n, a);
                    break;
                case "action":
                case "formAction":
                    if (typeof a == "function") {
                        e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof c == "function" && (n === "formAction" ? (t !== "input" && Ce(e, t, "name", u.name, u, null), Ce(e, t, "formEncType", u.formEncType, u, null), Ce(e, t, "formMethod", u.formMethod, u, null), Ce(e, t, "formTarget", u.formTarget, u, null)) : (Ce(e, t, "encType", u.encType, u, null), Ce(e, t, "method", u.method, u, null), Ce(e, t, "target", u.target, u, null)));
                    if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                        e.removeAttribute(n);
                        break;
                    }
                    a = ei("" + a), e.setAttribute(n, a);
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
                        if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
                        if (n = a.__html, n != null) {
                            if (u.children != null) throw Error(o(60));
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
                    n = ei("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
                    ge("beforetoggle", e), ge("toggle", e), $l(e, "popover", a);
                    break;
                case "xlinkActuate":
                    sn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                    break;
                case "xlinkArcrole":
                    sn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                    break;
                case "xlinkRole":
                    sn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                    break;
                case "xlinkShow":
                    sn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                    break;
                case "xlinkTitle":
                    sn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                    break;
                case "xlinkType":
                    sn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                    break;
                case "xmlBase":
                    sn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                    break;
                case "xmlLang":
                    sn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                    break;
                case "xmlSpace":
                    sn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                    break;
                case "is":
                    $l(e, "is", a);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = $0.get(n) || n, $l(e, n, a));
            }
        }
        function Ds(e, t, n, a, u, c) {
            switch(n){
                case "style":
                    tf(e, a, c);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
                        if (n = a.__html, n != null) {
                            if (u.children != null) throw Error(o(60));
                            e.innerHTML = n;
                        }
                    }
                    break;
                case "children":
                    typeof a == "string" ? Qr(e, a) : (typeof a == "number" || typeof a == "bigint") && Qr(e, "" + a);
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
                    if (!Gc.hasOwnProperty(n)) e: {
                        if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), t = n.slice(2, u ? n.length - 7 : void 0), c = e[st] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof a == "function")) {
                            typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, u);
                            break e;
                        }
                        n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : $l(e, n, a);
                    }
            }
        }
        function lt(e, t, n) {
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
                    var a = !1, u = !1, c;
                    for(c in n)if (n.hasOwnProperty(c)) {
                        var p = n[c];
                        if (p != null) switch(c){
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, t));
                            default:
                                Ce(e, t, c, p, n, null);
                        }
                    }
                    u && Ce(e, t, "srcSet", n.srcSet, n, null), a && Ce(e, t, "src", n.src, n, null);
                    return;
                case "input":
                    ge("invalid", e);
                    var v = c = p = u = null, T = null, N = null;
                    for(a in n)if (n.hasOwnProperty(a)) {
                        var U = n[a];
                        if (U != null) switch(a){
                            case "name":
                                u = U;
                                break;
                            case "type":
                                p = U;
                                break;
                            case "checked":
                                T = U;
                                break;
                            case "defaultChecked":
                                N = U;
                                break;
                            case "value":
                                c = U;
                                break;
                            case "defaultValue":
                                v = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(o(137, t));
                                break;
                            default:
                                Ce(e, t, a, U, n, null);
                        }
                    }
                    Jc(e, c, v, T, N, p, u, !1), Wl(e);
                    return;
                case "select":
                    ge("invalid", e), a = p = c = null;
                    for(u in n)if (n.hasOwnProperty(u) && (v = n[u], v != null)) switch(u){
                        case "value":
                            c = v;
                            break;
                        case "defaultValue":
                            p = v;
                            break;
                        case "multiple":
                            a = v;
                        default:
                            Ce(e, t, u, v, n, null);
                    }
                    t = c, n = p, e.multiple = !!a, t != null ? Hr(e, !!a, t, !1) : n != null && Hr(e, !!a, n, !0);
                    return;
                case "textarea":
                    ge("invalid", e), c = u = a = null;
                    for(p in n)if (n.hasOwnProperty(p) && (v = n[p], v != null)) switch(p){
                        case "value":
                            a = v;
                            break;
                        case "defaultValue":
                            u = v;
                            break;
                        case "children":
                            c = v;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (v != null) throw Error(o(91));
                            break;
                        default:
                            Ce(e, t, p, v, n, null);
                    }
                    Fc(e, a, u, c), Wl(e);
                    return;
                case "option":
                    for(T in n)if (n.hasOwnProperty(T) && (a = n[T], a != null)) switch(T){
                        case "selected":
                            e.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            Ce(e, t, T, a, n, null);
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
                    for(a = 0; a < vl.length; a++)ge(vl[a], e);
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
                    for(N in n)if (n.hasOwnProperty(N) && (a = n[N], a != null)) switch(N){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Ce(e, t, N, a, n, null);
                    }
                    return;
                default:
                    if (qu(t)) {
                        for(U in n)n.hasOwnProperty(U) && (a = n[U], a !== void 0 && Ds(e, t, U, a, n, void 0));
                        return;
                    }
            }
            for(v in n)n.hasOwnProperty(v) && (a = n[v], a != null && Ce(e, t, v, a, n, null));
        }
        function Em(e, t, n, a) {
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
                    var u = null, c = null, p = null, v = null, T = null, N = null, U = null;
                    for(L in n){
                        var H = n[L];
                        if (n.hasOwnProperty(L) && H != null) switch(L){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                T = H;
                            default:
                                a.hasOwnProperty(L) || Ce(e, t, L, null, a, H);
                        }
                    }
                    for(var j in a){
                        var L = a[j];
                        if (H = n[j], a.hasOwnProperty(j) && (L != null || H != null)) switch(j){
                            case "type":
                                c = L;
                                break;
                            case "name":
                                u = L;
                                break;
                            case "checked":
                                N = L;
                                break;
                            case "defaultChecked":
                                U = L;
                                break;
                            case "value":
                                p = L;
                                break;
                            case "defaultValue":
                                v = L;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (L != null) throw Error(o(137, t));
                                break;
                            default:
                                L !== H && Ce(e, t, j, L, a, H);
                        }
                    }
                    zu(e, p, v, T, N, U, c, u);
                    return;
                case "select":
                    L = p = v = j = null;
                    for(c in n)if (T = n[c], n.hasOwnProperty(c) && T != null) switch(c){
                        case "value":
                            break;
                        case "multiple":
                            L = T;
                        default:
                            a.hasOwnProperty(c) || Ce(e, t, c, null, a, T);
                    }
                    for(u in a)if (c = a[u], T = n[u], a.hasOwnProperty(u) && (c != null || T != null)) switch(u){
                        case "value":
                            j = c;
                            break;
                        case "defaultValue":
                            v = c;
                            break;
                        case "multiple":
                            p = c;
                        default:
                            c !== T && Ce(e, t, u, c, a, T);
                    }
                    t = v, n = p, a = L, j != null ? Hr(e, !!n, j, !1) : !!a != !!n && (t != null ? Hr(e, !!n, t, !0) : Hr(e, !!n, n ? [] : "", !1));
                    return;
                case "textarea":
                    L = j = null;
                    for(v in n)if (u = n[v], n.hasOwnProperty(v) && u != null && !a.hasOwnProperty(v)) switch(v){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Ce(e, t, v, null, a, u);
                    }
                    for(p in a)if (u = a[p], c = n[p], a.hasOwnProperty(p) && (u != null || c != null)) switch(p){
                        case "value":
                            j = u;
                            break;
                        case "defaultValue":
                            L = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(o(91));
                            break;
                        default:
                            u !== c && Ce(e, t, p, u, a, c);
                    }
                    Wc(e, j, L);
                    return;
                case "option":
                    for(var ie in n)if (j = n[ie], n.hasOwnProperty(ie) && j != null && !a.hasOwnProperty(ie)) switch(ie){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Ce(e, t, ie, null, a, j);
                    }
                    for(T in a)if (j = a[T], L = n[T], a.hasOwnProperty(T) && j !== L && (j != null || L != null)) switch(T){
                        case "selected":
                            e.selected = j && typeof j != "function" && typeof j != "symbol";
                            break;
                        default:
                            Ce(e, t, T, j, a, L);
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
                    for(var ne in n)j = n[ne], n.hasOwnProperty(ne) && j != null && !a.hasOwnProperty(ne) && Ce(e, t, ne, null, a, j);
                    for(N in a)if (j = a[N], L = n[N], a.hasOwnProperty(N) && j !== L && (j != null || L != null)) switch(N){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (j != null) throw Error(o(137, t));
                            break;
                        default:
                            Ce(e, t, N, j, a, L);
                    }
                    return;
                default:
                    if (qu(t)) {
                        for(var xe in n)j = n[xe], n.hasOwnProperty(xe) && j !== void 0 && !a.hasOwnProperty(xe) && Ds(e, t, xe, void 0, a, j);
                        for(U in a)j = a[U], L = n[U], !a.hasOwnProperty(U) || j === L || j === void 0 && L === void 0 || Ds(e, t, U, j, a, L);
                        return;
                    }
            }
            for(var w in n)j = n[w], n.hasOwnProperty(w) && j != null && !a.hasOwnProperty(w) && Ce(e, t, w, null, a, j);
            for(H in a)j = a[H], L = n[H], !a.hasOwnProperty(H) || j === L || j == null && L == null || Ce(e, t, H, j, a, L);
        }
        var Rs = null, Cs = null;
        function Ii(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function tp(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function np(e, t) {
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
        function xs(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var ws = null;
        function Om() {
            var e = window.event;
            return e && e.type === "popstate" ? e === ws ? !1 : (ws = e, !0) : (ws = null, !1);
        }
        var rp = typeof setTimeout == "function" ? setTimeout : void 0, Tm = typeof clearTimeout == "function" ? clearTimeout : void 0, ap = typeof Promise == "function" ? Promise : void 0, _m = typeof queueMicrotask == "function" ? queueMicrotask : typeof ap < "u" ? function(e) {
            return ap.resolve(null).then(e).catch(Dm);
        } : rp;
        function Dm(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Vn(e) {
            return e === "head";
        }
        function lp(e, t) {
            var n = t, a = 0, u = 0;
            do {
                var c = n.nextSibling;
                if (e.removeChild(n), c && c.nodeType === 8) if (n = c.data, n === "/$") {
                    if (0 < a && 8 > a) {
                        n = a;
                        var p = e.ownerDocument;
                        if (n & 1 && bl(p.documentElement), n & 2 && bl(p.body), n & 4) for(n = p.head, bl(n), p = n.firstChild; p;){
                            var v = p.nextSibling, T = p.nodeName;
                            p[nt] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && p.rel.toLowerCase() === "stylesheet" || n.removeChild(p), p = v;
                        }
                    }
                    if (u === 0) {
                        e.removeChild(c), Cl(t);
                        return;
                    }
                    u--;
                } else n === "$" || n === "$?" || n === "$!" ? u++ : a = n.charCodeAt(0) - 48;
                else a = 0;
                n = c;
            }while (n);
            Cl(t);
        }
        function Ms(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var n = t;
                switch(t = t.nextSibling, n.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Ms(n), ja(n);
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
        function Rm(e, t, n, a) {
            for(; e.nodeType === 1;){
                var u = n;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (a) {
                    if (!e[nt]) switch(t){
                        case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                        case "link":
                            if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (c !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (c = e.getAttribute("src"), (c !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var c = u.name == null ? null : "" + u.name;
                    if (u.type === "hidden" && e.getAttribute("name") === c) return e;
                } else return e;
                if (e = Vt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function Cm(e, t, n) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Vt(e.nextSibling), e === null)) return null;
            return e;
        }
        function Ns(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function xm(e, t) {
            var n = e.ownerDocument;
            if (e.data !== "$?" || n.readyState === "complete") t();
            else {
                var a = function() {
                    t(), n.removeEventListener("DOMContentLoaded", a);
                };
                n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
            }
        }
        function Vt(e) {
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
        var As = null;
        function ip(e) {
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
        function up(e, t, n) {
            switch(t = Ii(n), e){
                case "html":
                    if (e = t.documentElement, !e) throw Error(o(452));
                    return e;
                case "head":
                    if (e = t.head, !e) throw Error(o(453));
                    return e;
                case "body":
                    if (e = t.body, !e) throw Error(o(454));
                    return e;
                default:
                    throw Error(o(451));
            }
        }
        function bl(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            ja(e);
        }
        var Ht = new Map, op = new Set;
        function Vi(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var Tn = Y.d;
        Y.d = {
            f: wm,
            r: Mm,
            D: Nm,
            C: Am,
            L: Pm,
            m: jm,
            X: km,
            S: Lm,
            M: Bm
        };
        function wm() {
            var e = Tn.f(), t = Ui();
            return e || t;
        }
        function Mm(e) {
            var t = Br(e);
            t !== null && t.tag === 5 && t.type === "form" ? xd(t) : Tn.r(e);
        }
        var va = typeof document > "u" ? null : document;
        function sp(e, t, n) {
            var a = va;
            if (a && typeof t == "string" && t) {
                var u = jt(t);
                u = 'link[rel="' + e + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), op.has(u) || (op.add(u), e = {
                    rel: e,
                    crossOrigin: n,
                    href: t
                }, a.querySelector(u) === null && (t = a.createElement("link"), lt(t, "link", e), Je(t), a.head.appendChild(t)));
            }
        }
        function Nm(e) {
            Tn.D(e), sp("dns-prefetch", e, null);
        }
        function Am(e, t) {
            Tn.C(e, t), sp("preconnect", e, t);
        }
        function Pm(e, t, n) {
            Tn.L(e, t, n);
            var a = va;
            if (a && e && t) {
                var u = 'link[rel="preload"][as="' + jt(t) + '"]';
                t === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + jt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + jt(n.imageSizes) + '"]')) : u += '[href="' + jt(e) + '"]';
                var c = u;
                switch(t){
                    case "style":
                        c = ya(e);
                        break;
                    case "script":
                        c = ba(e);
                }
                Ht.has(c) || (e = y({
                    rel: "preload",
                    href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                    as: t
                }, n), Ht.set(c, e), a.querySelector(u) !== null || t === "style" && a.querySelector(Sl(c)) || t === "script" && a.querySelector(El(c)) || (t = a.createElement("link"), lt(t, "link", e), Je(t), a.head.appendChild(t)));
            }
        }
        function jm(e, t) {
            Tn.m(e, t);
            var n = va;
            if (n && e) {
                var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]', c = u;
                switch(a){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        c = ba(e);
                }
                if (!Ht.has(c) && (e = y({
                    rel: "modulepreload",
                    href: e
                }, t), Ht.set(c, e), n.querySelector(u) === null)) {
                    switch(a){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (n.querySelector(El(c))) return;
                    }
                    a = n.createElement("link"), lt(a, "link", e), Je(a), n.head.appendChild(a);
                }
            }
        }
        function Lm(e, t, n) {
            Tn.S(e, t, n);
            var a = va;
            if (a && e) {
                var u = zr(a).hoistableStyles, c = ya(e);
                t = t || "default";
                var p = u.get(c);
                if (!p) {
                    var v = {
                        loading: 0,
                        preload: null
                    };
                    if (p = a.querySelector(Sl(c))) v.loading = 5;
                    else {
                        e = y({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, n), (n = Ht.get(c)) && Ps(e, n);
                        var T = p = a.createElement("link");
                        Je(T), lt(T, "link", e), T._p = new Promise(function(N, U) {
                            T.onload = N, T.onerror = U;
                        }), T.addEventListener("load", function() {
                            v.loading |= 1;
                        }), T.addEventListener("error", function() {
                            v.loading |= 2;
                        }), v.loading |= 4, Zi(p, t, a);
                    }
                    p = {
                        type: "stylesheet",
                        instance: p,
                        count: 1,
                        state: v
                    }, u.set(c, p);
                }
            }
        }
        function km(e, t) {
            Tn.X(e, t);
            var n = va;
            if (n && e) {
                var a = zr(n).hoistableScripts, u = ba(e), c = a.get(u);
                c || (c = n.querySelector(El(u)), c || (e = y({
                    src: e,
                    async: !0
                }, t), (t = Ht.get(u)) && js(e, t), c = n.createElement("script"), Je(c), lt(c, "link", e), n.head.appendChild(c)), c = {
                    type: "script",
                    instance: c,
                    count: 1,
                    state: null
                }, a.set(u, c));
            }
        }
        function Bm(e, t) {
            Tn.M(e, t);
            var n = va;
            if (n && e) {
                var a = zr(n).hoistableScripts, u = ba(e), c = a.get(u);
                c || (c = n.querySelector(El(u)), c || (e = y({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Ht.get(u)) && js(e, t), c = n.createElement("script"), Je(c), lt(c, "link", e), n.head.appendChild(c)), c = {
                    type: "script",
                    instance: c,
                    count: 1,
                    state: null
                }, a.set(u, c));
            }
        }
        function cp(e, t, n, a) {
            var u = (u = re.current) ? Vi(u) : null;
            if (!u) throw Error(o(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ya(n.href), n = zr(u).hoistableStyles, a = n.get(t), a || (a = {
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
                        e = ya(n.href);
                        var c = zr(u).hoistableStyles, p = c.get(e);
                        if (p || (u = u.ownerDocument || u, p = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, c.set(e, p), (c = u.querySelector(Sl(e))) && !c._p && (p.instance = c, p.state.loading = 5), Ht.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Ht.set(e, n), c || zm(u, e, n, p.state))), t && a === null) throw Error(o(528, ""));
                        return p;
                    }
                    if (t && a !== null) throw Error(o(529, ""));
                    return null;
                case "script":
                    return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ba(n), n = zr(u).hoistableScripts, a = n.get(t), a || (a = {
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
                    throw Error(o(444, e));
            }
        }
        function ya(e) {
            return 'href="' + jt(e) + '"';
        }
        function Sl(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function fp(e) {
            return y({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function zm(e, t, n, a) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
                return a.loading |= 1;
            }), t.addEventListener("error", function() {
                return a.loading |= 2;
            }), lt(t, "link", n), Je(t), e.head.appendChild(t));
        }
        function ba(e) {
            return '[src="' + jt(e) + '"]';
        }
        function El(e) {
            return "script[async]" + e;
        }
        function dp(e, t, n) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var a = e.querySelector('style[data-href~="' + jt(n.href) + '"]');
                    if (a) return t.instance = a, Je(a), a;
                    var u = y({}, n, {
                        "data-href": n.href,
                        "data-precedence": n.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (e.ownerDocument || e).createElement("style"), Je(a), lt(a, "style", u), Zi(a, n.precedence, e), t.instance = a;
                case "stylesheet":
                    u = ya(n.href);
                    var c = e.querySelector(Sl(u));
                    if (c) return t.state.loading |= 4, t.instance = c, Je(c), c;
                    a = fp(n), (u = Ht.get(u)) && Ps(a, u), c = (e.ownerDocument || e).createElement("link"), Je(c);
                    var p = c;
                    return p._p = new Promise(function(v, T) {
                        p.onload = v, p.onerror = T;
                    }), lt(c, "link", a), t.state.loading |= 4, Zi(c, n.precedence, e), t.instance = c;
                case "script":
                    return c = ba(n.src), (u = e.querySelector(El(c))) ? (t.instance = u, Je(u), u) : (a = n, (u = Ht.get(c)) && (a = y({}, n), js(a, u)), e = e.ownerDocument || e, u = e.createElement("script"), Je(u), lt(u, "link", a), e.head.appendChild(u), t.instance = u);
                case "void":
                    return null;
                default:
                    throw Error(o(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Zi(a, n.precedence, e));
            return t.instance;
        }
        function Zi(e, t, n) {
            for(var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, c = u, p = 0; p < a.length; p++){
                var v = a[p];
                if (v.dataset.precedence === t) c = v;
                else if (c !== u) break;
            }
            c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
        }
        function Ps(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function js(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var $i = null;
        function hp(e, t, n) {
            if ($i === null) {
                var a = new Map, u = $i = new Map;
                u.set(n, a);
            } else u = $i, a = u.get(n), a || (a = new Map, u.set(n, a));
            if (a.has(e)) return a;
            for(a.set(e, null), n = n.getElementsByTagName(e), u = 0; u < n.length; u++){
                var c = n[u];
                if (!(c[nt] || c[$e] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var p = c.getAttribute(t) || "";
                    p = e + p;
                    var v = a.get(p);
                    v ? v.push(c) : a.set(p, [
                        c
                    ]);
                }
            }
            return a;
        }
        function pp(e, t, n) {
            e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
        }
        function Um(e, t, n) {
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
        function gp(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var Ol = null;
        function qm() {}
        function Hm(e, t, n) {
            if (Ol === null) throw Error(o(475));
            var a = Ol;
            if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var u = ya(n.href), c = e.querySelector(Sl(u));
                    if (c) {
                        e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = Ji.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = c, Je(c);
                        return;
                    }
                    c = e.ownerDocument || e, n = fp(n), (u = Ht.get(u)) && Ps(n, u), c = c.createElement("link"), Je(c);
                    var p = c;
                    p._p = new Promise(function(v, T) {
                        p.onload = v, p.onerror = T;
                    }), lt(c, "link", n), t.instance = c;
                }
                a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Ji.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function Qm() {
            if (Ol === null) throw Error(o(475));
            var e = Ol;
            return e.stylesheets && e.count === 0 && Ls(e, e.stylesheets), 0 < e.count ? function(t) {
                var n = setTimeout(function() {
                    if (e.stylesheets && Ls(e, e.stylesheets), e.unsuspend) {
                        var a = e.unsuspend;
                        e.unsuspend = null, a();
                    }
                }, 6e4);
                return e.unsuspend = t, function() {
                    e.unsuspend = null, clearTimeout(n);
                };
            } : null;
        }
        function Ji() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Ls(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var Wi = null;
        function Ls(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, Wi = new Map, t.forEach(Km, e), Wi = null, Ji.call(e));
        }
        function Km(e, t) {
            if (!(t.state.loading & 4)) {
                var n = Wi.get(e);
                if (n) var a = n.get(null);
                else {
                    n = new Map, Wi.set(e, n);
                    for(var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < u.length; c++){
                        var p = u[c];
                        (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), a = p);
                    }
                    a && n.set(null, a);
                }
                u = t.instance, p = u.getAttribute("data-precedence"), c = n.get(p) || a, c === a && n.set(null, u), n.set(p, u), this.count++, a = Ji.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
            }
        }
        var Tl = {
            $$typeof: B,
            Provider: null,
            Consumer: null,
            _currentValue: te,
            _currentValue2: te,
            _threadCount: 0
        };
        function Gm(e, t, n, a, u, c, p, v) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Aa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Aa(0), this.hiddenUpdates = Aa(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = new Map;
        }
        function mp(e, t, n, a, u, c, p, v, T, N, U, H) {
            return e = new Gm(e, t, n, p, v, T, N, H), t = 1, c === !0 && (t |= 24), c = Dt(3, null, null, t), e.current = c, c.stateNode = e, t = mo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
                element: a,
                isDehydrated: n,
                cache: t
            }, So(c), e;
        }
        function vp(e) {
            return e ? (e = $r, e) : $r;
        }
        function yp(e, t, n, a, u, c) {
            u = vp(u), a.context === null ? a.context = u : a.pendingContext = u, a = Ln(t), a.payload = {
                element: n
            }, c = c === void 0 ? null : c, c !== null && (a.callback = c), n = kn(e, a, t), n !== null && (Mt(n, e, t), Fa(n, e, t));
        }
        function bp(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var n = e.retryLane;
                e.retryLane = n !== 0 && n < t ? n : t;
            }
        }
        function ks(e, t) {
            bp(e, t), (e = e.alternate) && bp(e, t);
        }
        function Sp(e) {
            if (e.tag === 13) {
                var t = Zr(e, 67108864);
                t !== null && Mt(t, e, 67108864), ks(e, 67108864);
            }
        }
        var Fi = !0;
        function Ym(e, t, n, a) {
            var u = z.T;
            z.T = null;
            var c = Y.p;
            try {
                Y.p = 2, Bs(e, t, n, a);
            } finally{
                Y.p = c, z.T = u;
            }
        }
        function Xm(e, t, n, a) {
            var u = z.T;
            z.T = null;
            var c = Y.p;
            try {
                Y.p = 8, Bs(e, t, n, a);
            } finally{
                Y.p = c, z.T = u;
            }
        }
        function Bs(e, t, n, a) {
            if (Fi) {
                var u = zs(a);
                if (u === null) _s(e, t, a, eu, n), Op(e, a);
                else if (Vm(u, e, t, n, a)) a.stopPropagation();
                else if (Op(e, a), t & 4 && -1 < Im.indexOf(e)) {
                    for(; u !== null;){
                        var c = Br(u);
                        if (c !== null) switch(c.tag){
                            case 3:
                                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                                    var p = At(c.pendingLanes);
                                    if (p !== 0) {
                                        var v = c;
                                        for(v.pendingLanes |= 2, v.entangledLanes |= 2; p;){
                                            var T = 1 << 31 - mt(p);
                                            v.entanglements[1] |= T, p &= ~T;
                                        }
                                        nn(c), (Te & 6) === 0 && (Bi = Nt() + 500, ml(0));
                                    }
                                }
                                break;
                            case 13:
                                v = Zr(c, 2), v !== null && Mt(v, c, 2), Ui(), ks(c, 2);
                        }
                        if (c = zs(a), c === null && _s(e, t, a, eu, n), c === u) break;
                        u = c;
                    }
                    u !== null && a.stopPropagation();
                } else _s(e, t, a, null, n);
            }
        }
        function zs(e) {
            return e = Qu(e), Us(e);
        }
        var eu = null;
        function Us(e) {
            if (eu = null, e = kr(e), e !== null) {
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
            return eu = e, null;
        }
        function Ep(e) {
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
                    switch(Ra()){
                        case Il:
                            return 2;
                        case Ca:
                            return 8;
                        case wr:
                        case xa:
                            return 32;
                        case wa:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var qs = !1, Zn = null, $n = null, Jn = null, _l = new Map, Dl = new Map, Wn = [], Im = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Op(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Zn = null;
                    break;
                case "dragenter":
                case "dragleave":
                    $n = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Jn = null;
                    break;
                case "pointerover":
                case "pointerout":
                    _l.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Dl.delete(t.pointerId);
            }
        }
        function Rl(e, t, n, a, u, c) {
            return e === null || e.nativeEvent !== c ? (e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: a,
                nativeEvent: c,
                targetContainers: [
                    u
                ]
            }, t !== null && (t = Br(t), t !== null && Sp(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
        }
        function Vm(e, t, n, a, u) {
            switch(t){
                case "focusin":
                    return Zn = Rl(Zn, e, t, n, a, u), !0;
                case "dragenter":
                    return $n = Rl($n, e, t, n, a, u), !0;
                case "mouseover":
                    return Jn = Rl(Jn, e, t, n, a, u), !0;
                case "pointerover":
                    var c = u.pointerId;
                    return _l.set(c, Rl(_l.get(c) || null, e, t, n, a, u)), !0;
                case "gotpointercapture":
                    return c = u.pointerId, Dl.set(c, Rl(Dl.get(c) || null, e, t, n, a, u)), !0;
            }
            return !1;
        }
        function Tp(e) {
            var t = kr(e.target);
            if (t !== null) {
                var n = f(t);
                if (n !== null) {
                    if (t = n.tag, t === 13) {
                        if (t = d(n), t !== null) {
                            e.blockedOn = t, ju(e.priority, function() {
                                if (n.tag === 13) {
                                    var a = wt();
                                    a = Pa(a);
                                    var u = Zr(n, a);
                                    u !== null && Mt(u, n, a), ks(n, a);
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
        function tu(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var n = zs(e.nativeEvent);
                if (n === null) {
                    n = e.nativeEvent;
                    var a = new n.constructor(n.type, n);
                    Hu = a, n.target.dispatchEvent(a), Hu = null;
                } else return t = Br(n), t !== null && Sp(t), e.blockedOn = n, !1;
                t.shift();
            }
            return !0;
        }
        function _p(e, t, n) {
            tu(e) && n.delete(t);
        }
        function Zm() {
            qs = !1, Zn !== null && tu(Zn) && (Zn = null), $n !== null && tu($n) && ($n = null), Jn !== null && tu(Jn) && (Jn = null), _l.forEach(_p), Dl.forEach(_p);
        }
        function nu(e, t) {
            e.blockedOn === t && (e.blockedOn = null, qs || (qs = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Zm)));
        }
        var ru = null;
        function Dp(e) {
            ru !== e && (ru = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
                ru === e && (ru = null);
                for(var t = 0; t < e.length; t += 3){
                    var n = e[t], a = e[t + 1], u = e[t + 2];
                    if (typeof a != "function") {
                        if (Us(a || n) === null) continue;
                        break;
                    }
                    var c = Br(n);
                    c !== null && (e.splice(t, 3), t -= 3, Uo(c, {
                        pending: !0,
                        data: u,
                        method: n.method,
                        action: a
                    }, a, u));
                }
            }));
        }
        function Cl(e) {
            function t(T) {
                return nu(T, e);
            }
            Zn !== null && nu(Zn, e), $n !== null && nu($n, e), Jn !== null && nu(Jn, e), _l.forEach(t), Dl.forEach(t);
            for(var n = 0; n < Wn.length; n++){
                var a = Wn[n];
                a.blockedOn === e && (a.blockedOn = null);
            }
            for(; 0 < Wn.length && (n = Wn[0], n.blockedOn === null);)Tp(n), n.blockedOn === null && Wn.shift();
            if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for(a = 0; a < n.length; a += 3){
                var u = n[a], c = n[a + 1], p = u[st] || null;
                if (typeof c == "function") p || Dp(n);
                else if (p) {
                    var v = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (u = c, p = c[st] || null) v = p.formAction;
                        else if (Us(u) !== null) continue;
                    } else v = p.action;
                    typeof v == "function" ? n[a + 1] = v : (n.splice(a, 3), a -= 3), Dp(n);
                }
            }
        }
        function Hs(e) {
            this._internalRoot = e;
        }
        au.prototype.render = Hs.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(o(409));
            var n = t.current, a = wt();
            yp(n, a, e, t, null, null);
        }, au.prototype.unmount = Hs.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                yp(e.current, 2, null, e, null, null), Ui(), t[Ee] = null;
            }
        };
        function au(e) {
            this._internalRoot = e;
        }
        au.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Lr();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++);
                Wn.splice(n, 0, e), n === 0 && Tp(e);
            }
        };
        var Rp = r.version;
        if (Rp !== "19.1.0") throw Error(o(527, Rp, "19.1.0"));
        Y.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
            return e = g(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var $m = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: z,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var lu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!lu.isDisabled && lu.supportsFiber) try {
                un = lu.inject($m), Ze = lu;
            } catch  {}
        }
        return wl.createRoot = function(e, t) {
            if (!s(e)) throw Error(o(299));
            var n = !1, a = "", u = Qd, c = Kd, p = Gd, v = null;
            return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = mp(e, 1, !1, null, null, n, a, u, c, p, v, null), e[Ee] = t.current, Ts(e), new Hs(t);
        }, wl.hydrateRoot = function(e, t, n) {
            if (!s(e)) throw Error(o(299));
            var a = !1, u = "", c = Qd, p = Kd, v = Gd, T = null, N = null;
            return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks), n.formState !== void 0 && (N = n.formState)), t = mp(e, 1, !0, t, n ?? null, a, u, c, p, v, T, N), t.context = vp(null), n = t.current, a = wt(), a = Pa(a), u = Ln(a), u.callback = null, kn(n, u, a), n = a, t.current.lanes = n, ir(t, n), nn(t), e[Ee] = t.current, Ts(e), new au(t);
        }, wl.version = "19.1.0", wl;
    }
    var kp;
    function iv() {
        if (kp) return Gs.exports;
        kp = 1;
        function l() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (r) {
                console.error(r);
            }
        }
        return l(), Gs.exports = lv(), Gs.exports;
    }
    var uv = iv(), Vs = {
        exports: {}
    }, Zs = {};
    var Bp;
    function ov() {
        if (Bp) return Zs;
        Bp = 1;
        var l = Tu();
        function r(g, m) {
            return g === m && (g !== 0 || 1 / g === 1 / m) || g !== g && m !== m;
        }
        var i = typeof Object.is == "function" ? Object.is : r, o = l.useSyncExternalStore, s = l.useRef, f = l.useEffect, d = l.useMemo, h = l.useDebugValue;
        return Zs.useSyncExternalStoreWithSelector = function(g, m, y, E, b) {
            var O = s(null);
            if (O.current === null) {
                var _ = {
                    hasValue: !1,
                    value: null
                };
                O.current = _;
            } else _ = O.current;
            O = d(function() {
                function P(K) {
                    if (!A) {
                        if (A = !0, k = K, K = E(K), b !== void 0 && _.hasValue) {
                            var Z = _.value;
                            if (b(Z, K)) return B = Z;
                        }
                        return B = K;
                    }
                    if (Z = B, i(k, K)) return Z;
                    var V = E(K);
                    return b !== void 0 && b(Z, V) ? (k = K, Z) : (k = K, B = V);
                }
                var A = !1, k, B, G = y === void 0 ? null : y;
                return [
                    function() {
                        return P(m());
                    },
                    G === null ? void 0 : function() {
                        return P(G());
                    }
                ];
            }, [
                m,
                y,
                E,
                b
            ]);
            var x = o(g, O[0], O[1]);
            return f(function() {
                _.hasValue = !0, _.value = x;
            }, [
                x
            ]), h(x), x;
        }, Zs;
    }
    var zp;
    function sv() {
        return zp || (zp = 1, Vs.exports = ov()), Vs.exports;
    }
    var cv = sv();
    function fv(l) {
        l();
    }
    function dv() {
        let l = null, r = null;
        return {
            clear () {
                l = null, r = null;
            },
            notify () {
                fv(()=>{
                    let i = l;
                    for(; i;)i.callback(), i = i.next;
                });
            },
            get () {
                const i = [];
                let o = l;
                for(; o;)i.push(o), o = o.next;
                return i;
            },
            subscribe (i) {
                let o = !0;
                const s = r = {
                    callback: i,
                    next: null,
                    prev: r
                };
                return s.prev ? s.prev.next = s : l = s, function() {
                    !o || l === null || (o = !1, s.next ? s.next.prev = s.prev : r = s.prev, s.prev ? s.prev.next = s.next : l = s.next);
                };
            }
        };
    }
    var Up = {
        notify () {},
        get: ()=>[]
    };
    function hv(l, r) {
        let i, o = Up, s = 0, f = !1;
        function d(x) {
            y();
            const P = o.subscribe(x);
            let A = !1;
            return ()=>{
                A || (A = !0, P(), E());
            };
        }
        function h() {
            o.notify();
        }
        function g() {
            _.onStateChange && _.onStateChange();
        }
        function m() {
            return f;
        }
        function y() {
            s++, i || (i = l.subscribe(g), o = dv());
        }
        function E() {
            s--, i && s === 0 && (i(), i = void 0, o.clear(), o = Up);
        }
        function b() {
            f || (f = !0, y());
        }
        function O() {
            f && (f = !1, E());
        }
        const _ = {
            addNestedSub: d,
            notifyNestedSubs: h,
            handleChangeWrapper: g,
            isSubscribed: m,
            trySubscribe: b,
            tryUnsubscribe: O,
            getListeners: ()=>o
        };
        return _;
    }
    var pv = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", gv = pv(), mv = ()=>typeof navigator < "u" && navigator.product === "ReactNative", vv = mv(), yv = ()=>gv || vv ? S.useLayoutEffect : S.useEffect, bv = yv(), Sv = Symbol.for("react-redux-context"), Ev = typeof globalThis < "u" ? globalThis : {};
    function Ov() {
        if (!S.createContext) return {};
        const l = Ev[Sv] ??= new Map;
        let r = l.get(S.createContext);
        return r || (r = S.createContext(null), l.set(S.createContext, r)), r;
    }
    var ar = Ov();
    function Tv(l) {
        const { children: r, context: i, serverState: o, store: s } = l, f = S.useMemo(()=>{
            const g = hv(s);
            return {
                store: s,
                subscription: g,
                getServerState: o ? ()=>o : void 0
            };
        }, [
            s,
            o
        ]), d = S.useMemo(()=>s.getState(), [
            s
        ]);
        bv(()=>{
            const { subscription: g } = f;
            return g.onStateChange = g.notifyNestedSubs, g.trySubscribe(), d !== s.getState() && g.notifyNestedSubs(), ()=>{
                g.tryUnsubscribe(), g.onStateChange = void 0;
            };
        }, [
            f,
            d
        ]);
        const h = i || ar;
        return S.createElement(h.Provider, {
            value: f
        }, r);
    }
    var _v = Tv;
    function _c(l = ar) {
        return function() {
            return S.useContext(l);
        };
    }
    var Ag = _c();
    function Pg(l = ar) {
        const r = l === ar ? Ag : _c(l), i = ()=>{
            const { store: o } = r();
            return o;
        };
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    var Dv = Pg();
    function Rv(l = ar) {
        const r = l === ar ? Dv : Pg(l), i = ()=>r().dispatch;
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    let Cv;
    jg = Rv();
    Cv = (l, r)=>l === r;
    function xv(l = ar) {
        const r = l === ar ? Ag : _c(l), i = (o, s = {})=>{
            const { equalityFn: f = Cv } = typeof s == "function" ? {
                equalityFn: s
            } : s, d = r(), { store: h, subscription: g, getServerState: m } = d;
            S.useRef(!0);
            const y = S.useCallback({
                [o.name] (b) {
                    return o(b);
                }
            }[o.name], [
                o
            ]), E = cv.useSyncExternalStoreWithSelector(g.addNestedSub, h.getState, m || h.getState, y, f);
            return S.useDebugValue(E), E;
        };
        return Object.assign(i, {
            withTypes: ()=>i
        }), i;
    }
    Dc = xv();
    function it(l) {
        return `Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
    }
    var wv = typeof Symbol == "function" && Symbol.observable || "@@observable", qp = wv, $s = ()=>Math.random().toString(36).substring(7).split("").join("."), Mv = {
        INIT: `@@redux/INIT${$s()}`,
        REPLACE: `@@redux/REPLACE${$s()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${$s()}`
    }, bu = Mv;
    function Lg(l) {
        if (typeof l != "object" || l === null) return !1;
        let r = l;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(l) === r || Object.getPrototypeOf(l) === null;
    }
    function Rc(l, r, i) {
        if (typeof l != "function") throw new Error(it(2));
        if (typeof r == "function" && typeof i == "function" || typeof i == "function" && typeof arguments[3] == "function") throw new Error(it(0));
        if (typeof r == "function" && typeof i > "u" && (i = r, r = void 0), typeof i < "u") {
            if (typeof i != "function") throw new Error(it(1));
            return i(Rc)(l, r);
        }
        let o = l, s = r, f = new Map, d = f, h = 0, g = !1;
        function m() {
            d === f && (d = new Map, f.forEach((P, A)=>{
                d.set(A, P);
            }));
        }
        function y() {
            if (g) throw new Error(it(3));
            return s;
        }
        function E(P) {
            if (typeof P != "function") throw new Error(it(4));
            if (g) throw new Error(it(5));
            let A = !0;
            m();
            const k = h++;
            return d.set(k, P), function() {
                if (A) {
                    if (g) throw new Error(it(6));
                    A = !1, m(), d.delete(k), f = null;
                }
            };
        }
        function b(P) {
            if (!Lg(P)) throw new Error(it(7));
            if (typeof P.type > "u") throw new Error(it(8));
            if (typeof P.type != "string") throw new Error(it(17));
            if (g) throw new Error(it(9));
            try {
                g = !0, s = o(s, P);
            } finally{
                g = !1;
            }
            return (f = d).forEach((k)=>{
                k();
            }), P;
        }
        function O(P) {
            if (typeof P != "function") throw new Error(it(10));
            o = P, b({
                type: bu.REPLACE
            });
        }
        function _() {
            const P = E;
            return {
                subscribe (A) {
                    if (typeof A != "object" || A === null) throw new Error(it(11));
                    function k() {
                        const G = A;
                        G.next && G.next(y());
                    }
                    return k(), {
                        unsubscribe: P(k)
                    };
                },
                [qp] () {
                    return this;
                }
            };
        }
        return b({
            type: bu.INIT
        }), {
            dispatch: b,
            subscribe: E,
            getState: y,
            replaceReducer: O,
            [qp]: _
        };
    }
    function Nv(l) {
        Object.keys(l).forEach((r)=>{
            const i = l[r];
            if (typeof i(void 0, {
                type: bu.INIT
            }) > "u") throw new Error(it(12));
            if (typeof i(void 0, {
                type: bu.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(it(13));
        });
    }
    function kg(l) {
        const r = Object.keys(l), i = {};
        for(let f = 0; f < r.length; f++){
            const d = r[f];
            typeof l[d] == "function" && (i[d] = l[d]);
        }
        const o = Object.keys(i);
        let s;
        try {
            Nv(i);
        } catch (f) {
            s = f;
        }
        return function(d = {}, h) {
            if (s) throw s;
            let g = !1;
            const m = {};
            for(let y = 0; y < o.length; y++){
                const E = o[y], b = i[E], O = d[E], _ = b(O, h);
                if (typeof _ > "u") throw h && h.type, new Error(it(14));
                m[E] = _, g = g || _ !== O;
            }
            return g = g || o.length !== Object.keys(d).length, g ? m : d;
        };
    }
    function Su(...l) {
        return l.length === 0 ? (r)=>r : l.length === 1 ? l[0] : l.reduce((r, i)=>(...o)=>r(i(...o)));
    }
    function Av(...l) {
        return (r)=>(i, o)=>{
                const s = r(i, o);
                let f = ()=>{
                    throw new Error(it(15));
                };
                const d = {
                    getState: s.getState,
                    dispatch: (g, ...m)=>f(g, ...m)
                }, h = l.map((g)=>g(d));
                return f = Su(...h)(s.dispatch), {
                    ...s,
                    dispatch: f
                };
            };
    }
    function Bg(l) {
        return ({ dispatch: i, getState: o })=>(s)=>(f)=>typeof f == "function" ? f(i, o, l) : s(f);
    }
    var Pv = Bg(), jv = Bg, Lv = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Su : Su.apply(null, arguments);
    }, zg = class Ll extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, Ll.prototype);
        }
        static get [Symbol.species]() {
            return Ll;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new Ll(...r[0].concat(this)) : new Ll(...r.concat(this));
        }
    };
    function kv(l) {
        return typeof l == "boolean";
    }
    var Bv = ()=>function(r) {
            const { thunk: i = !0, immutableCheck: o = !0, serializableCheck: s = !0, actionCreatorCheck: f = !0 } = r ?? {};
            let d = new zg;
            return i && (kv(i) ? d.push(Pv) : d.push(jv(i.extraArgument))), d;
        }, zv = "RTK_autoBatch", Hp = (l)=>(r)=>{
            setTimeout(r, l);
        }, Uv = (l = {
        type: "raf"
    })=>(r)=>(...i)=>{
                const o = r(...i);
                let s = !0, f = !1, d = !1;
                const h = new Set, g = l.type === "tick" ? queueMicrotask : l.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Hp(10) : l.type === "callback" ? l.queueNotification : Hp(l.timeout), m = ()=>{
                    d = !1, f && (f = !1, h.forEach((y)=>y()));
                };
                return Object.assign({}, o, {
                    subscribe (y) {
                        const E = ()=>s && y(), b = o.subscribe(E);
                        return h.add(y), ()=>{
                            b(), h.delete(y);
                        };
                    },
                    dispatch (y) {
                        try {
                            return s = !y?.meta?.[zv], f = !s, f && (d || (d = !0, g(m))), o.dispatch(y);
                        } finally{
                            s = !0;
                        }
                    }
                });
            }, qv = (l)=>function(i) {
            const { autoBatch: o = !0 } = i ?? {};
            let s = new zg(l);
            return o && s.push(Uv(typeof o == "object" ? o : void 0)), s;
        };
    function Hv(l) {
        const r = Bv(), { reducer: i = void 0, middleware: o, devTools: s = !0, preloadedState: f = void 0, enhancers: d = void 0 } = l || {};
        let h;
        if (typeof i == "function") h = i;
        else if (Lg(i)) h = kg(i);
        else throw new Error(Qv(1));
        let g;
        typeof o == "function" ? g = o(r) : g = r();
        let m = Su;
        s && (m = Lv({
            trace: !1,
            ...typeof s == "object" && s
        }));
        const y = Av(...g), E = qv(y);
        let b = typeof d == "function" ? d(E) : E();
        const O = m(...b);
        return Rc(h, f, O);
    }
    function Qv(l) {
        return `Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Cc = "persist:", Ug = "persist/FLUSH", xc = "persist/REHYDRATE", qg = "persist/PAUSE", Hg = "persist/PERSIST", Qg = "persist/PURGE", Kg = "persist/REGISTER", Kv = -1;
    function hu(l) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hu = function(i) {
            return typeof i;
        } : hu = function(i) {
            return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
        }, hu(l);
    }
    function Qp(l, r) {
        var i = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(l);
            r && (o = o.filter(function(s) {
                return Object.getOwnPropertyDescriptor(l, s).enumerable;
            })), i.push.apply(i, o);
        }
        return i;
    }
    function Gv(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Qp(i, !0).forEach(function(o) {
                Yv(l, o, i[o]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Qp(i).forEach(function(o) {
                Object.defineProperty(l, o, Object.getOwnPropertyDescriptor(i, o));
            });
        }
        return l;
    }
    function Yv(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function Xv(l, r, i, o) {
        o.debug;
        var s = Gv({}, i);
        return l && hu(l) === "object" && Object.keys(l).forEach(function(f) {
            f !== "_persist" && r[f] === i[f] && (s[f] = l[f]);
        }), s;
    }
    function Iv(l) {
        var r = l.blacklist || null, i = l.whitelist || null, o = l.transforms || [], s = l.throttle || 0, f = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : Cc).concat(l.key), d = l.storage, h;
        l.serialize === !1 ? h = function(K) {
            return K;
        } : typeof l.serialize == "function" ? h = l.serialize : h = Vv;
        var g = l.writeFailHandler || null, m = {}, y = {}, E = [], b = null, O = null, _ = function(K) {
            Object.keys(K).forEach(function(Z) {
                A(Z) && m[Z] !== K[Z] && E.indexOf(Z) === -1 && E.push(Z);
            }), Object.keys(m).forEach(function(Z) {
                K[Z] === void 0 && A(Z) && E.indexOf(Z) === -1 && m[Z] !== void 0 && E.push(Z);
            }), b === null && (b = setInterval(x, s)), m = K;
        };
        function x() {
            if (E.length === 0) {
                b && clearInterval(b), b = null;
                return;
            }
            var G = E.shift(), K = o.reduce(function(Z, V) {
                return V.in(Z, G, m);
            }, m[G]);
            if (K !== void 0) try {
                y[G] = h(K);
            } catch (Z) {
                console.error("redux-persist/createPersistoid: error serializing state", Z);
            }
            else delete y[G];
            E.length === 0 && P();
        }
        function P() {
            Object.keys(y).forEach(function(G) {
                m[G] === void 0 && delete y[G];
            }), O = d.setItem(f, h(y)).catch(k);
        }
        function A(G) {
            return !(i && i.indexOf(G) === -1 && G !== "_persist" || r && r.indexOf(G) !== -1);
        }
        function k(G) {
            g && g(G);
        }
        var B = function() {
            for(; E.length !== 0;)x();
            return O || Promise.resolve();
        };
        return {
            update: _,
            flush: B
        };
    }
    function Vv(l) {
        return JSON.stringify(l);
    }
    function Zv(l) {
        var r = l.transforms || [], i = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : Cc).concat(l.key), o = l.storage;
        l.debug;
        var s;
        return l.deserialize === !1 ? s = function(d) {
            return d;
        } : typeof l.deserialize == "function" ? s = l.deserialize : s = $v, o.getItem(i).then(function(f) {
            if (f) try {
                var d = {}, h = s(f);
                return Object.keys(h).forEach(function(g) {
                    d[g] = r.reduceRight(function(m, y) {
                        return y.out(m, g, h);
                    }, s(h[g]));
                }), d;
            } catch (g) {
                throw g;
            }
            else return;
        });
    }
    function $v(l) {
        return JSON.parse(l);
    }
    function Jv(l) {
        var r = l.storage, i = "".concat(l.keyPrefix !== void 0 ? l.keyPrefix : Cc).concat(l.key);
        return r.removeItem(i, Wv);
    }
    function Wv(l) {}
    function Kp(l, r) {
        var i = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(l);
            r && (o = o.filter(function(s) {
                return Object.getOwnPropertyDescriptor(l, s).enumerable;
            })), i.push.apply(i, o);
        }
        return i;
    }
    function _n(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Kp(i, !0).forEach(function(o) {
                Fv(l, o, i[o]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Kp(i).forEach(function(o) {
                Object.defineProperty(l, o, Object.getOwnPropertyDescriptor(i, o));
            });
        }
        return l;
    }
    function Fv(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function ey(l, r) {
        if (l == null) return {};
        var i = ty(l, r), o, s;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            for(s = 0; s < f.length; s++)o = f[s], !(r.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(l, o) && (i[o] = l[o]);
        }
        return i;
    }
    function ty(l, r) {
        if (l == null) return {};
        var i = {}, o = Object.keys(l), s, f;
        for(f = 0; f < o.length; f++)s = o[f], !(r.indexOf(s) >= 0) && (i[s] = l[s]);
        return i;
    }
    var ny = 5e3;
    function ry(l, r) {
        var i = l.version !== void 0 ? l.version : Kv;
        l.debug;
        var o = l.stateReconciler === void 0 ? Xv : l.stateReconciler, s = l.getStoredState || Zv, f = l.timeout !== void 0 ? l.timeout : ny, d = null, h = !1, g = !0, m = function(E) {
            return E._persist.rehydrated && d && !g && d.update(E), E;
        };
        return function(y, E) {
            var b = y || {}, O = b._persist, _ = ey(b, [
                "_persist"
            ]), x = _;
            if (E.type === Hg) {
                var P = !1, A = function($, W) {
                    P || (E.rehydrate(l.key, $, W), P = !0);
                };
                if (f && setTimeout(function() {
                    !P && A(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(l.key, '"')));
                }, f), g = !1, d || (d = Iv(l)), O) return _n({}, r(x, E), {
                    _persist: O
                });
                if (typeof E.rehydrate != "function" || typeof E.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return E.register(l.key), s(l).then(function(V) {
                    var $ = l.migrate || function(W, De) {
                        return Promise.resolve(W);
                    };
                    $(V, i).then(function(W) {
                        A(W);
                    }, function(W) {
                        A(void 0, W);
                    });
                }, function(V) {
                    A(void 0, V);
                }), _n({}, r(x, E), {
                    _persist: {
                        version: i,
                        rehydrated: !1
                    }
                });
            } else {
                if (E.type === Qg) return h = !0, E.result(Jv(l)), _n({}, r(x, E), {
                    _persist: O
                });
                if (E.type === Ug) return E.result(d && d.flush()), _n({}, r(x, E), {
                    _persist: O
                });
                if (E.type === qg) g = !0;
                else if (E.type === xc) {
                    if (h) return _n({}, x, {
                        _persist: _n({}, O, {
                            rehydrated: !0
                        })
                    });
                    if (E.key === l.key) {
                        var k = r(x, E), B = E.payload, G = o !== !1 && B !== void 0 ? o(B, y, k, l) : k, K = _n({}, G, {
                            _persist: _n({}, O, {
                                rehydrated: !0
                            })
                        });
                        return m(K);
                    }
                }
            }
            if (!O) return r(y, E);
            var Z = r(x, E);
            return Z === x ? y : m(_n({}, Z, {
                _persist: O
            }));
        };
    }
    function Gp(l) {
        return iy(l) || ly(l) || ay();
    }
    function ay() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function ly(l) {
        if (Symbol.iterator in Object(l) || Object.prototype.toString.call(l) === "[object Arguments]") return Array.from(l);
    }
    function iy(l) {
        if (Array.isArray(l)) {
            for(var r = 0, i = new Array(l.length); r < l.length; r++)i[r] = l[r];
            return i;
        }
    }
    function Yp(l, r) {
        var i = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(l);
            r && (o = o.filter(function(s) {
                return Object.getOwnPropertyDescriptor(l, s).enumerable;
            })), i.push.apply(i, o);
        }
        return i;
    }
    function dc(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Yp(i, !0).forEach(function(o) {
                uy(l, o, i[o]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : Yp(i).forEach(function(o) {
                Object.defineProperty(l, o, Object.getOwnPropertyDescriptor(i, o));
            });
        }
        return l;
    }
    function uy(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    var Gg = {
        registry: [],
        bootstrapped: !1
    }, oy = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gg, i = arguments.length > 1 ? arguments[1] : void 0;
        switch(i.type){
            case Kg:
                return dc({}, r, {
                    registry: [].concat(Gp(r.registry), [
                        i.key
                    ])
                });
            case xc:
                var o = r.registry.indexOf(i.key), s = Gp(r.registry);
                return s.splice(o, 1), dc({}, r, {
                    registry: s,
                    bootstrapped: s.length === 0
                });
            default:
                return r;
        }
    };
    function sy(l, r, i) {
        var o = Rc(oy, Gg, void 0), s = function(g) {
            o.dispatch({
                type: Kg,
                key: g
            });
        }, f = function(g, m, y) {
            var E = {
                type: xc,
                payload: m,
                err: y,
                key: g
            };
            l.dispatch(E), o.dispatch(E);
        }, d = dc({}, o, {
            purge: function() {
                var g = [];
                return l.dispatch({
                    type: Qg,
                    result: function(y) {
                        g.push(y);
                    }
                }), Promise.all(g);
            },
            flush: function() {
                var g = [];
                return l.dispatch({
                    type: Ug,
                    result: function(y) {
                        g.push(y);
                    }
                }), Promise.all(g);
            },
            pause: function() {
                l.dispatch({
                    type: qg
                });
            },
            persist: function() {
                l.dispatch({
                    type: Hg,
                    register: s,
                    rehydrate: f
                });
            }
        });
        return d.persist(), d;
    }
    var Ml = {}, iu = {}, uu = {}, Xp;
    function cy() {
        if (Xp) return uu;
        Xp = 1, uu.__esModule = !0, uu.default = s;
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
        function o(f) {
            if ((typeof self > "u" ? "undefined" : l(self)) !== "object" || !(f in self)) return !1;
            try {
                var d = self[f], h = "redux-persist ".concat(f, " test");
                d.setItem(h, "test"), d.getItem(h), d.removeItem(h);
            } catch  {
                return !1;
            }
            return !0;
        }
        function s(f) {
            var d = "".concat(f, "Storage");
            return o(d) ? self[d] : i;
        }
        return uu;
    }
    var Ip;
    function fy() {
        if (Ip) return iu;
        Ip = 1, iu.__esModule = !0, iu.default = i;
        var l = r(cy());
        function r(o) {
            return o && o.__esModule ? o : {
                default: o
            };
        }
        function i(o) {
            var s = (0, l.default)(o);
            return {
                getItem: function(d) {
                    return new Promise(function(h, g) {
                        h(s.getItem(d));
                    });
                },
                setItem: function(d, h) {
                    return new Promise(function(g, m) {
                        g(s.setItem(d, h));
                    });
                },
                removeItem: function(d) {
                    return new Promise(function(h, g) {
                        h(s.removeItem(d));
                    });
                }
            };
        }
        return iu;
    }
    var Vp;
    function dy() {
        if (Vp) return Ml;
        Vp = 1, Ml.__esModule = !0, Ml.default = void 0;
        var l = r(fy());
        function r(o) {
            return o && o.__esModule ? o : {
                default: o
            };
        }
        var i = (0, l.default)("local");
        return Ml.default = i, Ml;
    }
    var hy = dy();
    const py = Tc(hy);
    const dt = "w", Kt = "b", tt = "p", hc = "n", pu = "b", kl = "r", nr = "q", Ve = "k", Js = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class ou {
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
            const { color: o, piece: s, from: f, to: d, flags: h, captured: g, promotion: m } = i, y = ut(f), E = ut(d);
            this.color = o, this.piece = s, this.from = y, this.to = E, this.san = r._moveToSan(i, r._moves({
                legal: !0
            })), this.lan = y + E, this.before = r.fen(), r._makeMove(i), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const b in ce)ce[b] & h && (this.flags += _r[b]);
            g && (this.captured = g), m && (this.promotion = m, this.lan += m);
        }
        isCapture() {
            return this.flags.indexOf(_r.CAPTURE) > -1;
        }
        isPromotion() {
            return this.flags.indexOf(_r.PROMOTION) > -1;
        }
        isEnPassant() {
            return this.flags.indexOf(_r.EP_CAPTURE) > -1;
        }
        isKingsideCastle() {
            return this.flags.indexOf(_r.KSIDE_CASTLE) > -1;
        }
        isQueensideCastle() {
            return this.flags.indexOf(_r.QSIDE_CASTLE) > -1;
        }
        isBigPawn() {
            return this.flags.indexOf(_r.BIG_PAWN) > -1;
        }
    }
    const Tt = -1, _r = {
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
    }, pc = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, gy = {
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
    }, my = {
        ...pc,
        ...gy
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
    }, Ws = {
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
    }, Zp = {
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
    }, vy = [
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
    ], yy = [
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
    ], by = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, Sy = "pnbrqkPNBRQK", $p = [
        hc,
        pu,
        kl,
        nr
    ], Ey = 7, Oy = 6, Ty = 1, _y = 0, su = {
        [Ve]: ce.KSIDE_CASTLE,
        [nr]: ce.QSIDE_CASTLE
    }, er = {
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
    }, Dy = {
        b: Ty,
        w: Oy
    }, Ry = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function Dr(l) {
        return l >> 4;
    }
    function Hl(l) {
        return l & 15;
    }
    function Yg(l) {
        return "0123456789".indexOf(l) !== -1;
    }
    function ut(l) {
        const r = Hl(l), i = Dr(l);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(i, i + 1);
    }
    function Nl(l) {
        return l === dt ? Kt : dt;
    }
    function Cy(l) {
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
        const o = parseInt(r[4], 10);
        if (isNaN(o) || o < 0) return {
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
        const s = r[0].split("/");
        if (s.length !== 8) return {
            ok: !1,
            error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
        };
        for(let d = 0; d < s.length; d++){
            let h = 0, g = !1;
            for(let m = 0; m < s[d].length; m++)if (Yg(s[d][m])) {
                if (g) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                h += parseInt(s[d][m], 10), g = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(s[d][m])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                h += 1, g = !1;
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
        return Array.from(s[0] + s[7]).some((d)=>d.toUpperCase() === "P") ? {
            ok: !1,
            error: "Invalid FEN: some pawns are on the edge rows"
        } : {
            ok: !0
        };
    }
    function xy(l, r) {
        const i = l.from, o = l.to, s = l.piece;
        let f = 0, d = 0, h = 0;
        for(let g = 0, m = r.length; g < m; g++){
            const y = r[g].from, E = r[g].to, b = r[g].piece;
            s === b && i !== y && o === E && (f++, Dr(i) === Dr(y) && d++, Hl(i) === Hl(y) && h++);
        }
        return f > 0 ? d > 0 && h > 0 ? ut(i) : h > 0 ? ut(i).charAt(1) : ut(i).charAt(0) : "";
    }
    function tr(l, r, i, o, s, f = void 0, d = ce.NORMAL) {
        const h = Dr(o);
        if (s === tt && (h === Ey || h === _y)) for(let g = 0; g < $p.length; g++){
            const m = $p[g];
            l.push({
                color: r,
                from: i,
                to: o,
                piece: s,
                captured: f,
                promotion: m,
                flags: d | ce.PROMOTION
            });
        }
        else l.push({
            color: r,
            from: i,
            to: o,
            piece: s,
            captured: f,
            flags: d
        });
    }
    function Jp(l) {
        let r = l.charAt(0);
        return r >= "a" && r <= "h" ? l.match(/[a-h]\d.*[a-h]\d/) ? void 0 : tt : (r = r.toLowerCase(), r === "o" ? Ve : r);
    }
    function Fs(l) {
        return l.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function ec(l) {
        return l.split(" ").slice(0, 4).join(" ");
    }
    wc = class {
        _board = new Array(128);
        _turn = dt;
        _header = {};
        _kings = {
            w: Tt,
            b: Tt
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
        constructor(r = Js, { skipValidation: i = !1 } = {}){
            this.load(r, {
                skipValidation: i
            });
        }
        clear({ preserveHeaders: r = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: Tt,
                b: Tt
            }, this._turn = dt, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = Tt, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = r ? this._header : {
                ...my
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(r, { skipValidation: i = !1, preserveHeaders: o = !1 } = {}) {
            let s = r.split(/\s+/);
            if (s.length >= 2 && s.length < 6) {
                const h = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                r = s.concat(h.slice(-(6 - s.length))).join(" ");
            }
            if (s = r.split(/\s+/), !i) {
                const { ok: h, error: g } = Cy(r);
                if (!h) throw new Error(g);
            }
            const f = s[0];
            let d = 0;
            this.clear({
                preserveHeaders: o
            });
            for(let h = 0; h < f.length; h++){
                const g = f.charAt(h);
                if (g === "/") d += 8;
                else if (Yg(g)) d += parseInt(g, 10);
                else {
                    const m = g < "a" ? dt : Kt;
                    this._put({
                        type: g.toLowerCase(),
                        color: m
                    }, ut(d)), d++;
                }
            }
            this._turn = s[1], s[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), s[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), s[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), s[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = s[3] === "-" ? Tt : ue[s[3]], this._halfMoves = parseInt(s[4], 10), this._moveNumber = parseInt(s[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, i = "";
            for(let f = ue.a8; f <= ue.h1; f++){
                if (this._board[f]) {
                    r > 0 && (i += r, r = 0);
                    const { color: d, type: h } = this._board[f];
                    i += d === dt ? h.toUpperCase() : h.toLowerCase();
                } else r++;
                f + 1 & 136 && (r > 0 && (i += r), f !== ue.h1 && (i += "/"), r = 0, f += 8);
            }
            let o = "";
            this._castling[dt] & ce.KSIDE_CASTLE && (o += "K"), this._castling[dt] & ce.QSIDE_CASTLE && (o += "Q"), this._castling[Kt] & ce.KSIDE_CASTLE && (o += "k"), this._castling[Kt] & ce.QSIDE_CASTLE && (o += "q"), o = o || "-";
            let s = "-";
            if (this._epSquare !== Tt) {
                const f = this._epSquare + (this._turn === dt ? 16 : -16), d = [
                    f + 1,
                    f - 1
                ];
                for (const h of d){
                    if (h & 136) continue;
                    const g = this._turn;
                    if (this._board[h]?.color === g && this._board[h]?.type === tt) {
                        this._makeMove({
                            color: g,
                            from: h,
                            to: this._epSquare,
                            piece: tt,
                            captured: tt,
                            flags: ce.EP_CAPTURE
                        });
                        const m = !this._isKingAttacked(g);
                        if (this._undoMove(), m) {
                            s = ut(this._epSquare);
                            break;
                        }
                    }
                }
            }
            return [
                i,
                this._turn,
                o,
                s,
                this._halfMoves,
                this._moveNumber
            ].join(" ");
        }
        _updateSetup(r) {
            this._history.length > 0 || (r !== Js ? (this._header.SetUp = "1", this._header.FEN = r) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(Js);
        }
        get(r) {
            return this._board[ue[r]];
        }
        findPiece(r) {
            const i = [];
            for(let o = ue.a8; o <= ue.h1; o++){
                if (o & 136) {
                    o += 7;
                    continue;
                }
                !this._board[o] || this._board[o]?.color !== r.color || this._board[o].color === r.color && this._board[o].type === r.type && i.push(ut(o));
            }
            return i;
        }
        put({ type: r, color: i }, o) {
            return this._put({
                type: r,
                color: i
            }, o) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1;
        }
        _put({ type: r, color: i }, o) {
            if (Sy.indexOf(r.toLowerCase()) === -1 || !(o in ue)) return !1;
            const s = ue[o];
            if (r == Ve && !(this._kings[i] == Tt || this._kings[i] == s)) return !1;
            const f = this._board[s];
            return f && f.type === Ve && (this._kings[f.color] = Tt), this._board[s] = {
                type: r,
                color: i
            }, r === Ve && (this._kings[i] = s), !0;
        }
        remove(r) {
            const i = this.get(r);
            return delete this._board[ue[r]], i && i.type === Ve && (this._kings[i.color] = Tt), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), i;
        }
        _updateCastlingRights() {
            const r = this._board[ue.e1]?.type === Ve && this._board[ue.e1]?.color === dt, i = this._board[ue.e8]?.type === Ve && this._board[ue.e8]?.color === Kt;
            (!r || this._board[ue.a1]?.type !== kl || this._board[ue.a1]?.color !== dt) && (this._castling.w &= -65), (!r || this._board[ue.h1]?.type !== kl || this._board[ue.h1]?.color !== dt) && (this._castling.w &= -33), (!i || this._board[ue.a8]?.type !== kl || this._board[ue.a8]?.color !== Kt) && (this._castling.b &= -65), (!i || this._board[ue.h8]?.type !== kl || this._board[ue.h8]?.color !== Kt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === Tt) return;
            const r = this._epSquare + (this._turn === dt ? -16 : 16), i = this._epSquare + (this._turn === dt ? 16 : -16), o = [
                i + 1,
                i - 1
            ];
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[i]?.color !== Nl(this._turn) || this._board[i]?.type !== tt) {
                this._epSquare = Tt;
                return;
            }
            const s = (f)=>!(f & 136) && this._board[f]?.color === this._turn && this._board[f]?.type === tt;
            o.some(s) || (this._epSquare = Tt);
        }
        _attacked(r, i, o) {
            const s = [];
            for(let f = ue.a8; f <= ue.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                if (this._board[f] === void 0 || this._board[f].color !== r) continue;
                const d = this._board[f], h = f - i;
                if (h === 0) continue;
                const g = h + 119;
                if (vy[g] & by[d.type]) {
                    if (d.type === tt) {
                        if (h > 0 && d.color === dt || h <= 0 && d.color === Kt) if (o) s.push(ut(f));
                        else return !0;
                        continue;
                    }
                    if (d.type === "n" || d.type === "k") if (o) {
                        s.push(ut(f));
                        continue;
                    } else return !0;
                    const m = yy[g];
                    let y = f + m, E = !1;
                    for(; y !== i;){
                        if (this._board[y] != null) {
                            E = !0;
                            break;
                        }
                        y += m;
                    }
                    if (!E) if (o) {
                        s.push(ut(f));
                        continue;
                    } else return !0;
                }
            }
            return o ? s : !1;
        }
        attackers(r, i) {
            return i ? this._attacked(i, ue[r], !0) : this._attacked(this._turn, ue[r], !0);
        }
        _isKingAttacked(r) {
            const i = this._kings[r];
            return i === -1 ? !1 : this._attacked(Nl(r), i);
        }
        isAttacked(r, i) {
            return this._attacked(i, ue[r]);
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
            let o = 0, s = 0;
            for(let f = ue.a8; f <= ue.h1; f++){
                if (s = (s + 1) % 2, f & 136) {
                    f += 7;
                    continue;
                }
                const d = this._board[f];
                d && (r[d.type] = d.type in r ? r[d.type] + 1 : 1, d.type === pu && i.push(s), o++);
            }
            if (o === 2) return !0;
            if (o === 3 && (r[pu] === 1 || r[hc] === 1)) return !0;
            if (o === r[pu] + 2) {
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
        moves({ verbose: r = !1, square: i = void 0, piece: o = void 0 } = {}) {
            const s = this._moves({
                square: i,
                piece: o
            });
            return r ? s.map((f)=>new ou(this, f)) : s.map((f)=>this._moveToSan(f, s));
        }
        _moves({ legal: r = !0, piece: i = void 0, square: o = void 0 } = {}) {
            const s = o ? o.toLowerCase() : void 0, f = i?.toLowerCase(), d = [], h = this._turn, g = Nl(h);
            let m = ue.a8, y = ue.h1, E = !1;
            if (s) if (s in ue) m = y = ue[s], E = !0;
            else return [];
            for(let O = m; O <= y; O++){
                if (O & 136) {
                    O += 7;
                    continue;
                }
                if (!this._board[O] || this._board[O].color === g) continue;
                const { type: _ } = this._board[O];
                let x;
                if (_ === tt) {
                    if (f && f !== _) continue;
                    x = O + Ws[h][0], this._board[x] || (tr(d, h, O, x, tt), x = O + Ws[h][1], Dy[h] === Dr(O) && !this._board[x] && tr(d, h, O, x, tt, void 0, ce.BIG_PAWN));
                    for(let P = 2; P < 4; P++)x = O + Ws[h][P], !(x & 136) && (this._board[x]?.color === g ? tr(d, h, O, x, tt, this._board[x].type, ce.CAPTURE) : x === this._epSquare && tr(d, h, O, x, tt, tt, ce.EP_CAPTURE));
                } else {
                    if (f && f !== _) continue;
                    for(let P = 0, A = Zp[_].length; P < A; P++){
                        const k = Zp[_][P];
                        for(x = O; x += k, !(x & 136);){
                            if (!this._board[x]) tr(d, h, O, x, _);
                            else {
                                if (this._board[x].color === h) break;
                                tr(d, h, O, x, _, this._board[x].type, ce.CAPTURE);
                                break;
                            }
                            if (_ === hc || _ === Ve) break;
                        }
                    }
                }
            }
            if ((f === void 0 || f === Ve) && (!E || y === this._kings[h])) {
                if (this._castling[h] & ce.KSIDE_CASTLE) {
                    const O = this._kings[h], _ = O + 2;
                    !this._board[O + 1] && !this._board[_] && !this._attacked(g, this._kings[h]) && !this._attacked(g, O + 1) && !this._attacked(g, _) && tr(d, h, this._kings[h], _, Ve, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[h] & ce.QSIDE_CASTLE) {
                    const O = this._kings[h], _ = O - 2;
                    !this._board[O - 1] && !this._board[O - 2] && !this._board[O - 3] && !this._attacked(g, this._kings[h]) && !this._attacked(g, O - 1) && !this._attacked(g, _) && tr(d, h, this._kings[h], _, Ve, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[h] === -1) return d;
            const b = [];
            for(let O = 0, _ = d.length; O < _; O++)this._makeMove(d[O]), this._isKingAttacked(h) || b.push(d[O]), this._undoMove();
            return b;
        }
        move(r, { strict: i = !1 } = {}) {
            let o = null;
            if (typeof r == "string") o = this._moveFromSan(r, i);
            else if (typeof r == "object") {
                const f = this._moves();
                for(let d = 0, h = f.length; d < h; d++)if (r.from === ut(f[d].from) && r.to === ut(f[d].to) && (!("promotion" in f[d]) || r.promotion === f[d].promotion)) {
                    o = f[d];
                    break;
                }
            }
            if (!o) throw typeof r == "string" ? new Error(`Invalid move: ${r}`) : new Error(`Invalid move: ${JSON.stringify(r)}`);
            const s = new ou(this, o);
            return this._makeMove(o), this._incPositionCount(s.after), s;
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
            const i = this._turn, o = Nl(i);
            if (this._push(r), this._board[r.to] = this._board[r.from], delete this._board[r.from], r.flags & ce.EP_CAPTURE && (this._turn === Kt ? delete this._board[r.to - 16] : delete this._board[r.to + 16]), r.promotion && (this._board[r.to] = {
                type: r.promotion,
                color: i
            }), this._board[r.to].type === Ve) {
                if (this._kings[i] = r.to, r.flags & ce.KSIDE_CASTLE) {
                    const s = r.to - 1, f = r.to + 1;
                    this._board[s] = this._board[f], delete this._board[f];
                } else if (r.flags & ce.QSIDE_CASTLE) {
                    const s = r.to + 1, f = r.to - 2;
                    this._board[s] = this._board[f], delete this._board[f];
                }
                this._castling[i] = 0;
            }
            if (this._castling[i]) {
                for(let s = 0, f = er[i].length; s < f; s++)if (r.from === er[i][s].square && this._castling[i] & er[i][s].flag) {
                    this._castling[i] ^= er[i][s].flag;
                    break;
                }
            }
            if (this._castling[o]) {
                for(let s = 0, f = er[o].length; s < f; s++)if (r.to === er[o][s].square && this._castling[o] & er[o][s].flag) {
                    this._castling[o] ^= er[o][s].flag;
                    break;
                }
            }
            r.flags & ce.BIG_PAWN ? i === Kt ? this._epSquare = r.to - 16 : this._epSquare = r.to + 16 : this._epSquare = Tt, r.piece === tt ? this._halfMoves = 0 : r.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, i === Kt && this._moveNumber++, this._turn = o;
        }
        undo() {
            const r = this._undoMove();
            if (r) {
                const i = new ou(this, r);
                return this._decPositionCount(i.after), i;
            }
            return null;
        }
        _undoMove() {
            const r = this._history.pop();
            if (r === void 0) return null;
            const i = r.move;
            this._kings = r.kings, this._turn = r.turn, this._castling = r.castling, this._epSquare = r.epSquare, this._halfMoves = r.halfMoves, this._moveNumber = r.moveNumber;
            const o = this._turn, s = Nl(o);
            if (this._board[i.from] = this._board[i.to], this._board[i.from].type = i.piece, delete this._board[i.to], i.captured) if (i.flags & ce.EP_CAPTURE) {
                let f;
                o === Kt ? f = i.to - 16 : f = i.to + 16, this._board[f] = {
                    type: tt,
                    color: s
                };
            } else this._board[i.to] = {
                type: i.captured,
                color: s
            };
            if (i.flags & (ce.KSIDE_CASTLE | ce.QSIDE_CASTLE)) {
                let f, d;
                i.flags & ce.KSIDE_CASTLE ? (f = i.to + 1, d = i.to - 1) : (f = i.to - 2, d = i.to + 1), this._board[f] = this._board[d], delete this._board[d];
            }
            return i;
        }
        pgn({ newline: r = `
`, maxWidth: i = 0 } = {}) {
            const o = [];
            let s = !1;
            for(const b in this._header)this._header[b] && o.push(`[${b} "${this._header[b]}"]` + r), s = !0;
            s && this._history.length && o.push(r);
            const f = (b)=>{
                const O = this._comments[this.fen()];
                if (typeof O < "u") {
                    const _ = b.length > 0 ? " " : "";
                    b = `${b}${_}{${O}}`;
                }
                return b;
            }, d = [];
            for(; this._history.length > 0;)d.push(this._undoMove());
            const h = [];
            let g = "";
            for(d.length === 0 && h.push(f("")); d.length > 0;){
                g = f(g);
                const b = d.pop();
                if (!b) break;
                if (!this._history.length && b.color === "b") {
                    const O = `${this._moveNumber}. ...`;
                    g = g ? `${g} ${O}` : O;
                } else b.color === "w" && (g.length && h.push(g), g = this._moveNumber + ".");
                g = g + " " + this._moveToSan(b, this._moves({
                    legal: !0
                })), this._makeMove(b);
            }
            if (g.length && h.push(f(g)), h.push(this._header.Result || "*"), i === 0) return o.join("") + h.join(" ");
            const m = function() {
                return o.length > 0 && o[o.length - 1] === " " ? (o.pop(), !0) : !1;
            }, y = function(b, O) {
                for (const _ of O.split(" "))if (_) {
                    if (b + _.length > i) {
                        for(; m();)b--;
                        o.push(r), b = 0;
                    }
                    o.push(_), b += _.length, o.push(" "), b++;
                }
                return m() && b--, b;
            };
            let E = 0;
            for(let b = 0; b < h.length; b++){
                if (E + h[b].length > i && h[b].includes("{")) {
                    E = y(E, h[b]);
                    continue;
                }
                E + h[b].length > i && b !== 0 ? (o[o.length - 1] === " " && o.pop(), o.push(r), E = 0) : b !== 0 && (o.push(" "), E++), o.push(h[b]), E += h[b].length;
            }
            return o.join("");
        }
        header(...r) {
            for(let i = 0; i < r.length; i += 2)typeof r[i] == "string" && typeof r[i + 1] == "string" && (this._header[r[i]] = r[i + 1]);
            return this._header;
        }
        setHeader(r, i) {
            return this._header[r] = i ?? pc[r] ?? null, this.getHeaders();
        }
        removeHeader(r) {
            return r in this._header ? (this._header[r] = pc[r] || null, !0) : !1;
        }
        getHeaders() {
            const r = {};
            for (const [i, o] of Object.entries(this._header))o !== null && (r[i] = o);
            return r;
        }
        loadPgn(r, { strict: i = !1, newlineChar: o = `\r?
` } = {}) {
            function s(B) {
                return B.replace(/\\/g, "\\");
            }
            function f(B) {
                const G = {}, K = B.split(new RegExp(s(o)));
                let Z = "", V = "";
                for(let $ = 0; $ < K.length; $++){
                    const W = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    Z = K[$].replace(W, "$1"), V = K[$].replace(W, "$2"), Z.trim().length > 0 && (G[Z] = V);
                }
                return G;
            }
            r = r.trim();
            const h = new RegExp("^(\\[((?:" + s(o) + ")|.)*\\])((?:\\s*" + s(o) + "){2}|(?:\\s*" + s(o) + ")*$)").exec(r), g = h && h.length >= 2 ? h[1] : "";
            this.reset();
            const m = f(g);
            let y = "";
            for(const B in m)B.toLowerCase() === "fen" && (y = m[B]), this.header(B, m[B]);
            if (!i) y && this.load(y, {
                preserveHeaders: !0
            });
            else if (m.SetUp === "1") {
                if (!("FEN" in m)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(m.FEN, {
                    preserveHeaders: !0
                });
            }
            function E(B) {
                return Array.from(B).map(function(G) {
                    return G.charCodeAt(0) < 128 ? G.charCodeAt(0).toString(16) : encodeURIComponent(G).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function b(B) {
                return B.length == 0 ? "" : decodeURIComponent("%" + (B.match(/.{1,2}/g) || []).join("%"));
            }
            const O = function(B) {
                return B = B.replace(new RegExp(s(o), "g"), " "), `{${E(B.slice(1, B.length - 1))}}`;
            }, _ = function(B) {
                if (B.startsWith("{") && B.endsWith("}")) return b(B.slice(1, B.length - 1));
            };
            let x = r.replace(g, "").replace(new RegExp(`({[^}]*})+?|;([^${s(o)}]*)`, "g"), function(B, G, K) {
                return G !== void 0 ? O(G) : " " + O(`{${K.slice(1)}}`);
            }).replace(new RegExp(s(o), "g"), " ");
            const P = /(\([^()]+\))+?/g;
            for(; P.test(x);)x = x.replace(P, "");
            x = x.replace(/\d+\.(\.\.)?/g, ""), x = x.replace(/\.\.\./g, ""), x = x.replace(/\$\d+/g, "");
            let A = x.trim().split(new RegExp(/\s+/));
            A = A.filter((B)=>B !== "");
            let k = "";
            for(let B = 0; B < A.length; B++){
                const G = _(A[B]);
                if (G !== void 0) {
                    this._comments[this.fen()] = G;
                    continue;
                }
                const K = this._moveFromSan(A[B], i);
                if (K == null) if (Ry.indexOf(A[B]) > -1) k = A[B];
                else throw new Error(`Invalid move in PGN: ${A[B]}`);
                else k = "", this._makeMove(K), this._incPositionCount(this.fen());
            }
            k && Object.keys(this._header).length && this._header.Result !== k && this.setHeader("Result", k);
        }
        _moveToSan(r, i) {
            let o = "";
            if (r.flags & ce.KSIDE_CASTLE) o = "O-O";
            else if (r.flags & ce.QSIDE_CASTLE) o = "O-O-O";
            else {
                if (r.piece !== tt) {
                    const s = xy(r, i);
                    o += r.piece.toUpperCase() + s;
                }
                r.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (r.piece === tt && (o += ut(r.from)[0]), o += "x"), o += ut(r.to), r.promotion && (o += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? o += "#" : o += "+"), this._undoMove(), o;
        }
        _moveFromSan(r, i = !1) {
            const o = Fs(r);
            let s = Jp(o), f = this._moves({
                legal: !0,
                piece: s
            });
            for(let b = 0, O = f.length; b < O; b++)if (o === Fs(this._moveToSan(f[b], f))) return f[b];
            if (i) return null;
            let d, h, g, m, y, E = !1;
            if (h = o.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), h ? (d = h[1], g = h[2], m = h[3], y = h[4], g.length == 1 && (E = !0)) : (h = o.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), h && (d = h[1], g = h[2], m = h[3], y = h[4], g.length == 1 && (E = !0))), s = Jp(o), f = this._moves({
                legal: !0,
                piece: d || s
            }), !m) return null;
            for(let b = 0, O = f.length; b < O; b++)if (g) {
                if ((!d || d.toLowerCase() == f[b].piece) && ue[g] == f[b].from && ue[m] == f[b].to && (!y || y.toLowerCase() == f[b].promotion)) return f[b];
                if (E) {
                    const _ = ut(f[b].from);
                    if ((!d || d.toLowerCase() == f[b].piece) && ue[m] == f[b].to && (g == _[0] || g == _[1]) && (!y || y.toLowerCase() == f[b].promotion)) return f[b];
                }
            } else if (o === Fs(this._moveToSan(f[b], f)).replace("x", "")) return f[b];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let i = ue.a8; i <= ue.h1; i++){
                if (Hl(i) === 0 && (r += " " + "87654321"[Dr(i)] + " |"), this._board[i]) {
                    const o = this._board[i].type, f = this._board[i].color === dt ? o.toUpperCase() : o.toLowerCase();
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
            let o = 0;
            const s = this._turn;
            for(let f = 0, d = i.length; f < d; f++)this._makeMove(i[f]), this._isKingAttacked(s) || (r - 1 > 0 ? o += this.perft(r - 1) : o++), this._undoMove();
            return o;
        }
        turn() {
            return this._turn;
        }
        board() {
            const r = [];
            let i = [];
            for(let o = ue.a8; o <= ue.h1; o++)this._board[o] == null ? i.push(null) : i.push({
                square: ut(o),
                type: this._board[o].type,
                color: this._board[o].color
            }), o + 1 & 136 && (r.push(i), i = [], o += 8);
            return r;
        }
        squareColor(r) {
            if (r in ue) {
                const i = ue[r];
                return (Dr(i) + Hl(i)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: r = !1 } = {}) {
            const i = [], o = [];
            for(; this._history.length > 0;)i.push(this._undoMove());
            for(;;){
                const s = i.pop();
                if (!s) break;
                r ? o.push(new ou(this, s)) : o.push(this._moveToSan(s, this._moves())), this._makeMove(s);
            }
            return o;
        }
        _getPositionCount(r) {
            const i = ec(r);
            return this._positionCount[i] || 0;
        }
        _incPositionCount(r) {
            const i = ec(r);
            this._positionCount[i] === void 0 && (this._positionCount[i] = 0), this._positionCount[i] += 1;
        }
        _decPositionCount(r) {
            const i = ec(r);
            this._positionCount[i] === 1 ? delete this._positionCount[i] : this._positionCount[i] -= 1;
        }
        _pruneComments() {
            const r = [], i = {}, o = (s)=>{
                s in this._comments && (i[s] = this._comments[s]);
            };
            for(; this._history.length > 0;)r.push(this._undoMove());
            for(o(this.fen());;){
                const s = r.pop();
                if (!s) break;
                this._makeMove(s), o(this.fen());
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
            for (const s of [
                Ve,
                nr
            ])i[s] !== void 0 && (i[s] ? this._castling[r] |= su[s] : this._castling[r] &= ~su[s]);
            this._updateCastlingRights();
            const o = this.getCastlingRights(r);
            return (i[Ve] === void 0 || i[Ve] === o[Ve]) && (i[nr] === void 0 || i[nr] === o[nr]);
        }
        getCastlingRights(r) {
            return {
                [Ve]: (this._castling[r] & su[Ve]) !== 0,
                [nr]: (this._castling[r] & su[nr]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let Xg, Ig, wy, Vg, My, Wp, Ny, Zg, $g, Jg, Py, jy, Ly, ky, Wg, Fg, e0, t0, Mc, n0, By, zy, Uy, qy, Hy, Qy, Ky, Gy, Yy, Xy, Iy, Vy, Zy, $y, Jy;
    Xg = "MOVE_PIECE";
    Ig = "RESET_GAME";
    wy = "LOAD_GAME";
    Vg = "SET_GAME_OVER";
    My = "SET_TIMER_DURATION";
    jE = (l)=>({
            type: Xg,
            payload: l
        });
    LE = (l)=>({
            type: Ig,
            payload: l
        });
    kE = (l, r)=>({
            type: Vg,
            payload: {
                isGameOver: l,
                gameResult: r
            }
        });
    ht = {
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
    };
    Wp = {
        fen: ht.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: ht.TIMER_DURATION
    };
    Ny = (l = Wp, r)=>{
        switch(r.type){
            case Xg:
                try {
                    const i = new wc(l.fen), o = i.move({
                        from: r.payload.from,
                        to: r.payload.to,
                        promotion: r.payload.promotionPiece
                    });
                    if (!o) return l;
                    const s = [
                        ...l.moveHistory,
                        o.san
                    ];
                    return {
                        ...l,
                        fen: i.fen(),
                        isWhiteTurn: !l.isWhiteTurn,
                        moveHistory: s,
                        lastMove: {
                            from: r.payload.from,
                            to: r.payload.to
                        }
                    };
                } catch (i) {
                    return console.warn("Invalid move:", i), l;
                }
            case Ig:
                return {
                    ...Wp,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case wy:
                return {
                    ...l,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case Vg:
                return {
                    ...l,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case My:
                return {
                    ...l,
                    timerDuration: r.payload
                };
            default:
                return l;
        }
    };
    Zg = "FLIP_BOARD";
    $g = "SET_THEME";
    Jg = "SET_SOUND";
    Ay = ()=>({
            type: Zg
        });
    Py = (l)=>({
            type: $g,
            payload: l
        });
    jy = (l)=>({
            type: Jg,
            payload: l
        });
    Ly = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    ky = (l = Ly, r)=>{
        switch(r.type){
            case Zg:
                return {
                    ...l,
                    isFlipped: !l.isFlipped
                };
            case $g:
                return {
                    ...l,
                    theme: r.payload
                };
            case Jg:
                return {
                    ...l,
                    enableSound: r.payload
                };
            default:
                return l;
        }
    };
    Wg = "NEXT";
    Fg = "PREV";
    e0 = "START_POS";
    t0 = "FINAL_POS";
    Mc = "LOAD_PGN";
    n0 = "JUMP_TO_MOVE";
    By = "TOGGLE_ENGINE";
    zy = "DISABLE_ENGINE";
    BE = ()=>({
            type: e0
        });
    zE = ()=>({
            type: Fg
        });
    UE = ()=>({
            type: Wg
        });
    qE = ()=>({
            type: t0
        });
    HE = ({ finalPos: l, moves: r, fens: i, fromToSquares: o, termination: s, result: f, blackPlayerName: d, whitePlayerName: h })=>({
            type: Mc,
            payload: {
                finalPos: l,
                moves: r,
                fens: i,
                fromToSquares: o,
                termination: s,
                result: f,
                blackPlayerName: d,
                whitePlayerName: h
            }
        });
    QE = (l)=>({
            type: n0,
            payload: l
        });
    Uy = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    qy = (l = Uy, r)=>{
        switch(r.type){
            case Wg:
                return l.currentMoveIndex === l.fenLength - 1 ? l : {
                    ...l,
                    currentMoveIndex: l.currentMoveIndex + 1
                };
            case Fg:
                return l.currentMoveIndex === 0 ? l : {
                    ...l,
                    currentMoveIndex: l.currentMoveIndex - 1
                };
            case e0:
                return {
                    ...l,
                    currentMoveIndex: 0
                };
            case t0:
                return {
                    ...l,
                    currentMoveIndex: l.fenLength - 1
                };
            case n0:
                return {
                    ...l,
                    currentMoveIndex: r.payload
                };
            case Mc:
                return {
                    ...l,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case By:
                return {
                    ...l,
                    engineEnabled: !l.engineEnabled
                };
            case zy:
                return {
                    ...l,
                    engineEnabled: !1
                };
            default:
                return l;
        }
    };
    Hy = {
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
    Qy = (l = Hy, r)=>{
        switch(r.type){
            case Mc:
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
    };
    Ky = "TOGGLE_ENGINE";
    Gy = "SET_MULTIPV";
    Yy = "SET_MAX_DEPTH";
    Xy = "SET_AUTO_STOP_TIME";
    Iy = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    Vy = (l = Iy, r)=>{
        switch(r.type){
            case Ky:
                return {
                    ...l,
                    enabled: !l.enabled
                };
            case Gy:
                return {
                    ...l,
                    multiPV: r.payload
                };
            case Yy:
                return {
                    ...l,
                    maxDepth: r.payload
                };
            case Xy:
                return {
                    ...l,
                    autoStopTime: r.payload
                };
            default:
                return l;
        }
    };
    Zy = kg({
        game: Ny,
        settings: ky,
        analysis: qy,
        pgn: Qy,
        engine: Vy
    });
    $y = {
        key: "root",
        storage: py,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    Jy = ry($y, Zy);
    r0 = Hv({
        reducer: Jy,
        middleware: (l)=>l({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    sy(r0);
    const Wy = "modulepreload", Fy = function(l) {
        return "/chess-frontend/" + l;
    }, Fp = {}, a0 = function(r, i, o) {
        let s = Promise.resolve();
        if (i && i.length > 0) {
            document.getElementsByTagName("link");
            const d = document.querySelector("meta[property=csp-nonce]"), h = d?.nonce || d?.getAttribute("nonce");
            s = Promise.allSettled(i.map((g)=>{
                if (g = Fy(g), g in Fp) return;
                Fp[g] = !0;
                const m = g.endsWith(".css"), y = m ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${g}"]${y}`)) return;
                const E = document.createElement("link");
                if (E.rel = m ? "stylesheet" : Wy, m || (E.as = "script"), E.crossOrigin = "", E.href = g, h && E.setAttribute("nonce", h), document.head.appendChild(E), m) return new Promise((b, O)=>{
                    E.addEventListener("load", b), E.addEventListener("error", ()=>O(new Error(`Unable to preload CSS for ${g}`)));
                });
            }));
        }
        function f(d) {
            const h = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (h.payload = d, window.dispatchEvent(h), !h.defaultPrevented) throw d;
        }
        return s.then((d)=>{
            for (const h of d || [])h.status === "rejected" && f(h.reason);
            return r().catch(f);
        });
    };
    var Al = {}, eg;
    function e2() {
        if (eg) return Al;
        eg = 1, Object.defineProperty(Al, "__esModule", {
            value: !0
        }), Al.parse = d, Al.serialize = m;
        const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, s = Object.prototype.toString, f = (()=>{
            const b = function() {};
            return b.prototype = Object.create(null), b;
        })();
        function d(b, O) {
            const _ = new f, x = b.length;
            if (x < 2) return _;
            const P = O?.decode || y;
            let A = 0;
            do {
                const k = b.indexOf("=", A);
                if (k === -1) break;
                const B = b.indexOf(";", A), G = B === -1 ? x : B;
                if (k > G) {
                    A = b.lastIndexOf(";", k - 1) + 1;
                    continue;
                }
                const K = h(b, A, k), Z = g(b, k, K), V = b.slice(K, Z);
                if (_[V] === void 0) {
                    let $ = h(b, k + 1, G), W = g(b, G, $);
                    const De = P(b.slice($, W));
                    _[V] = De;
                }
                A = G + 1;
            }while (A < x);
            return _;
        }
        function h(b, O, _) {
            do {
                const x = b.charCodeAt(O);
                if (x !== 32 && x !== 9) return O;
            }while (++O < _);
            return _;
        }
        function g(b, O, _) {
            for(; O > _;){
                const x = b.charCodeAt(--O);
                if (x !== 32 && x !== 9) return O + 1;
            }
            return _;
        }
        function m(b, O, _) {
            const x = _?.encode || encodeURIComponent;
            if (!l.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
            const P = x(O);
            if (!r.test(P)) throw new TypeError(`argument val is invalid: ${O}`);
            let A = b + "=" + P;
            if (!_) return A;
            if (_.maxAge !== void 0) {
                if (!Number.isInteger(_.maxAge)) throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);
                A += "; Max-Age=" + _.maxAge;
            }
            if (_.domain) {
                if (!i.test(_.domain)) throw new TypeError(`option domain is invalid: ${_.domain}`);
                A += "; Domain=" + _.domain;
            }
            if (_.path) {
                if (!o.test(_.path)) throw new TypeError(`option path is invalid: ${_.path}`);
                A += "; Path=" + _.path;
            }
            if (_.expires) {
                if (!E(_.expires) || !Number.isFinite(_.expires.valueOf())) throw new TypeError(`option expires is invalid: ${_.expires}`);
                A += "; Expires=" + _.expires.toUTCString();
            }
            if (_.httpOnly && (A += "; HttpOnly"), _.secure && (A += "; Secure"), _.partitioned && (A += "; Partitioned"), _.priority) switch(typeof _.priority == "string" ? _.priority.toLowerCase() : void 0){
                case "low":
                    A += "; Priority=Low";
                    break;
                case "medium":
                    A += "; Priority=Medium";
                    break;
                case "high":
                    A += "; Priority=High";
                    break;
                default:
                    throw new TypeError(`option priority is invalid: ${_.priority}`);
            }
            if (_.sameSite) switch(typeof _.sameSite == "string" ? _.sameSite.toLowerCase() : _.sameSite){
                case !0:
                case "strict":
                    A += "; SameSite=Strict";
                    break;
                case "lax":
                    A += "; SameSite=Lax";
                    break;
                case "none":
                    A += "; SameSite=None";
                    break;
                default:
                    throw new TypeError(`option sameSite is invalid: ${_.sameSite}`);
            }
            return A;
        }
        function y(b) {
            if (b.indexOf("%") === -1) return b;
            try {
                return decodeURIComponent(b);
            } catch  {
                return b;
            }
        }
        function E(b) {
            return s.call(b) === "[object Date]";
        }
        return Al;
    }
    e2();
    var tg = "popstate";
    function t2(l = {}) {
        function r(o, s) {
            let { pathname: f, search: d, hash: h } = o.location;
            return gc("", {
                pathname: f,
                search: d,
                hash: h
            }, s.state && s.state.usr || null, s.state && s.state.key || "default");
        }
        function i(o, s) {
            return typeof s == "string" ? s : Ql(s);
        }
        return r2(r, i, null, l);
    }
    function ke(l, r) {
        if (l === !1 || l === null || typeof l > "u") throw new Error(r);
    }
    function rn(l, r) {
        if (!l) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function n2() {
        return Math.random().toString(36).substring(2, 10);
    }
    function ng(l, r) {
        return {
            usr: l.state,
            key: l.key,
            idx: r
        };
    }
    function gc(l, r, i = null, o) {
        return {
            pathname: typeof l == "string" ? l : l.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? Oa(r) : r,
            state: i,
            key: r && r.key || o || n2()
        };
    }
    function Ql({ pathname: l = "/", search: r = "", hash: i = "" }) {
        return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (l += i.charAt(0) === "#" ? i : "#" + i), l;
    }
    function Oa(l) {
        let r = {};
        if (l) {
            let i = l.indexOf("#");
            i >= 0 && (r.hash = l.substring(i), l = l.substring(0, i));
            let o = l.indexOf("?");
            o >= 0 && (r.search = l.substring(o), l = l.substring(0, o)), l && (r.pathname = l);
        }
        return r;
    }
    function r2(l, r, i, o = {}) {
        let { window: s = document.defaultView, v5Compat: f = !1 } = o, d = s.history, h = "POP", g = null, m = y();
        m == null && (m = 0, d.replaceState({
            ...d.state,
            idx: m
        }, ""));
        function y() {
            return (d.state || {
                idx: null
            }).idx;
        }
        function E() {
            h = "POP";
            let P = y(), A = P == null ? null : P - m;
            m = P, g && g({
                action: h,
                location: x.location,
                delta: A
            });
        }
        function b(P, A) {
            h = "PUSH";
            let k = gc(x.location, P, A);
            m = y() + 1;
            let B = ng(k, m), G = x.createHref(k);
            try {
                d.pushState(B, "", G);
            } catch (K) {
                if (K instanceof DOMException && K.name === "DataCloneError") throw K;
                s.location.assign(G);
            }
            f && g && g({
                action: h,
                location: x.location,
                delta: 1
            });
        }
        function O(P, A) {
            h = "REPLACE";
            let k = gc(x.location, P, A);
            m = y();
            let B = ng(k, m), G = x.createHref(k);
            d.replaceState(B, "", G), f && g && g({
                action: h,
                location: x.location,
                delta: 0
            });
        }
        function _(P) {
            let A = s.location.origin !== "null" ? s.location.origin : s.location.href, k = typeof P == "string" ? P : Ql(P);
            return k = k.replace(/ $/, "%20"), ke(A, `No window.location.(origin|href) available to create URL for href: ${k}`), new URL(k, A);
        }
        let x = {
            get action () {
                return h;
            },
            get location () {
                return l(s, d);
            },
            listen (P) {
                if (g) throw new Error("A history only accepts one active listener");
                return s.addEventListener(tg, E), g = P, ()=>{
                    s.removeEventListener(tg, E), g = null;
                };
            },
            createHref (P) {
                return r(s, P);
            },
            createURL: _,
            encodeLocation (P) {
                let A = _(P);
                return {
                    pathname: A.pathname,
                    search: A.search,
                    hash: A.hash
                };
            },
            push: b,
            replace: O,
            go (P) {
                return d.go(P);
            }
        };
        return x;
    }
    function l0(l, r, i = "/") {
        return a2(l, r, i, !1);
    }
    function a2(l, r, i, o) {
        let s = typeof r == "string" ? Oa(r) : r, f = Rn(s.pathname || "/", i);
        if (f == null) return null;
        let d = i0(l);
        l2(d);
        let h = null;
        for(let g = 0; h == null && g < d.length; ++g){
            let m = m2(f);
            h = p2(d[g], m, o);
        }
        return h;
    }
    function i0(l, r = [], i = [], o = "") {
        let s = (f, d, h)=>{
            let g = {
                relativePath: h === void 0 ? f.path || "" : h,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: d,
                route: f
            };
            g.relativePath.startsWith("/") && (ke(g.relativePath.startsWith(o), `Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), g.relativePath = g.relativePath.slice(o.length));
            let m = Dn([
                o,
                g.relativePath
            ]), y = i.concat(g);
            f.children && f.children.length > 0 && (ke(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`), i0(f.children, r, y, m)), !(f.path == null && !f.index) && r.push({
                path: m,
                score: d2(m, f.index),
                routesMeta: y
            });
        };
        return l.forEach((f, d)=>{
            if (f.path === "" || !f.path?.includes("?")) s(f, d);
            else for (let h of u0(f.path))s(f, d, h);
        }), r;
    }
    function u0(l) {
        let r = l.split("/");
        if (r.length === 0) return [];
        let [i, ...o] = r, s = i.endsWith("?"), f = i.replace(/\?$/, "");
        if (o.length === 0) return s ? [
            f,
            ""
        ] : [
            f
        ];
        let d = u0(o.join("/")), h = [];
        return h.push(...d.map((g)=>g === "" ? f : [
                f,
                g
            ].join("/"))), s && h.push(...d), h.map((g)=>l.startsWith("/") && g === "" ? "/" : g);
    }
    function l2(l) {
        l.sort((r, i)=>r.score !== i.score ? i.score - r.score : h2(r.routesMeta.map((o)=>o.childrenIndex), i.routesMeta.map((o)=>o.childrenIndex)));
    }
    var i2 = /^:[\w-]+$/, u2 = 3, o2 = 2, s2 = 1, c2 = 10, f2 = -2, rg = (l)=>l === "*";
    function d2(l, r) {
        let i = l.split("/"), o = i.length;
        return i.some(rg) && (o += f2), r && (o += o2), i.filter((s)=>!rg(s)).reduce((s, f)=>s + (i2.test(f) ? u2 : f === "" ? s2 : c2), o);
    }
    function h2(l, r) {
        return l.length === r.length && l.slice(0, -1).every((o, s)=>o === r[s]) ? l[l.length - 1] - r[r.length - 1] : 0;
    }
    function p2(l, r, i = !1) {
        let { routesMeta: o } = l, s = {}, f = "/", d = [];
        for(let h = 0; h < o.length; ++h){
            let g = o[h], m = h === o.length - 1, y = f === "/" ? r : r.slice(f.length) || "/", E = Eu({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: m
            }, y), b = g.route;
            if (!E && m && i && !o[o.length - 1].route.index && (E = Eu({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: !1
            }, y)), !E) return null;
            Object.assign(s, E.params), d.push({
                params: s,
                pathname: Dn([
                    f,
                    E.pathname
                ]),
                pathnameBase: S2(Dn([
                    f,
                    E.pathnameBase
                ])),
                route: b
            }), E.pathnameBase !== "/" && (f = Dn([
                f,
                E.pathnameBase
            ]));
        }
        return d;
    }
    function Eu(l, r) {
        typeof l == "string" && (l = {
            path: l,
            caseSensitive: !1,
            end: !0
        });
        let [i, o] = g2(l.path, l.caseSensitive, l.end), s = r.match(i);
        if (!s) return null;
        let f = s[0], d = f.replace(/(.)\/+$/, "$1"), h = s.slice(1);
        return {
            params: o.reduce((m, { paramName: y, isOptional: E }, b)=>{
                if (y === "*") {
                    let _ = h[b] || "";
                    d = f.slice(0, f.length - _.length).replace(/(.)\/+$/, "$1");
                }
                const O = h[b];
                return E && !O ? m[y] = void 0 : m[y] = (O || "").replace(/%2F/g, "/"), m;
            }, {}),
            pathname: f,
            pathnameBase: d,
            pattern: l
        };
    }
    function g2(l, r = !1, i = !0) {
        rn(l === "*" || !l.endsWith("*") || l.endsWith("/*"), `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`);
        let o = [], s = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, h, g)=>(o.push({
                paramName: h,
                isOptional: g != null
            }), g ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return l.endsWith("*") ? (o.push({
            paramName: "*"
        }), s += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? s += "\\/*$" : l !== "" && l !== "/" && (s += "(?:(?=\\/|$))"), [
            new RegExp(s, r ? void 0 : "i"),
            o
        ];
    }
    function m2(l) {
        try {
            return l.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return rn(!1, `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), l;
        }
    }
    function Rn(l, r) {
        if (r === "/") return l;
        if (!l.toLowerCase().startsWith(r.toLowerCase())) return null;
        let i = r.endsWith("/") ? r.length - 1 : r.length, o = l.charAt(i);
        return o && o !== "/" ? null : l.slice(i) || "/";
    }
    function v2(l, r = "/") {
        let { pathname: i, search: o = "", hash: s = "" } = typeof l == "string" ? Oa(l) : l;
        return {
            pathname: i ? i.startsWith("/") ? i : y2(i, r) : r,
            search: E2(o),
            hash: O2(s)
        };
    }
    function y2(l, r) {
        let i = r.replace(/\/+$/, "").split("/");
        return l.split("/").forEach((s)=>{
            s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
        }), i.length > 1 ? i.join("/") : "/";
    }
    function tc(l, r, i, o) {
        return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function b2(l) {
        return l.filter((r, i)=>i === 0 || r.route.path && r.route.path.length > 0);
    }
    function o0(l) {
        let r = b2(l);
        return r.map((i, o)=>o === r.length - 1 ? i.pathname : i.pathnameBase);
    }
    function s0(l, r, i, o = !1) {
        let s;
        typeof l == "string" ? s = Oa(l) : (s = {
            ...l
        }, ke(!s.pathname || !s.pathname.includes("?"), tc("?", "pathname", "search", s)), ke(!s.pathname || !s.pathname.includes("#"), tc("#", "pathname", "hash", s)), ke(!s.search || !s.search.includes("#"), tc("#", "search", "hash", s)));
        let f = l === "" || s.pathname === "", d = f ? "/" : s.pathname, h;
        if (d == null) h = i;
        else {
            let E = r.length - 1;
            if (!o && d.startsWith("..")) {
                let b = d.split("/");
                for(; b[0] === "..";)b.shift(), E -= 1;
                s.pathname = b.join("/");
            }
            h = E >= 0 ? r[E] : "/";
        }
        let g = v2(s, h), m = d && d !== "/" && d.endsWith("/"), y = (f || d === ".") && i.endsWith("/");
        return !g.pathname.endsWith("/") && (m || y) && (g.pathname += "/"), g;
    }
    var Dn = (l)=>l.join("/").replace(/\/\/+/g, "/"), S2 = (l)=>l.replace(/\/+$/, "").replace(/^\/*/, "/"), E2 = (l)=>!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, O2 = (l)=>!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l;
    function T2(l) {
        return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
    }
    var c0 = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(c0);
    var _2 = [
        "GET",
        ...c0
    ];
    new Set(_2);
    var Ta = S.createContext(null);
    Ta.displayName = "DataRouter";
    var _u = S.createContext(null);
    _u.displayName = "DataRouterState";
    var f0 = S.createContext({
        isTransitioning: !1
    });
    f0.displayName = "ViewTransition";
    var D2 = S.createContext(new Map);
    D2.displayName = "Fetchers";
    var R2 = S.createContext(null);
    R2.displayName = "Await";
    var an = S.createContext(null);
    an.displayName = "Navigation";
    var Gl = S.createContext(null);
    Gl.displayName = "Location";
    var Cn = S.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    Cn.displayName = "Route";
    var Nc = S.createContext(null);
    Nc.displayName = "RouteError";
    function C2(l, { relative: r } = {}) {
        ke(Yl(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: i, navigator: o } = S.useContext(an), { hash: s, pathname: f, search: d } = Xl(l, {
            relative: r
        }), h = f;
        return i !== "/" && (h = f === "/" ? i : Dn([
            i,
            f
        ])), o.createHref({
            pathname: h,
            search: d,
            hash: s
        });
    }
    function Yl() {
        return S.useContext(Gl) != null;
    }
    function Cr() {
        return ke(Yl(), "useLocation() may be used only in the context of a <Router> component."), S.useContext(Gl).location;
    }
    var d0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function h0(l) {
        S.useContext(an).static || S.useLayoutEffect(l);
    }
    function x2() {
        let { isDataRoute: l } = S.useContext(Cn);
        return l ? H2() : w2();
    }
    function w2() {
        ke(Yl(), "useNavigate() may be used only in the context of a <Router> component.");
        let l = S.useContext(Ta), { basename: r, navigator: i } = S.useContext(an), { matches: o } = S.useContext(Cn), { pathname: s } = Cr(), f = JSON.stringify(o0(o)), d = S.useRef(!1);
        return h0(()=>{
            d.current = !0;
        }), S.useCallback((g, m = {})=>{
            if (rn(d.current, d0), !d.current) return;
            if (typeof g == "number") {
                i.go(g);
                return;
            }
            let y = s0(g, JSON.parse(f), s, m.relative === "path");
            l == null && r !== "/" && (y.pathname = y.pathname === "/" ? r : Dn([
                r,
                y.pathname
            ])), (m.replace ? i.replace : i.push)(y, m.state, m);
        }, [
            r,
            i,
            f,
            s,
            l
        ]);
    }
    S.createContext(null);
    function Xl(l, { relative: r } = {}) {
        let { matches: i } = S.useContext(Cn), { pathname: o } = Cr(), s = JSON.stringify(o0(i));
        return S.useMemo(()=>s0(l, JSON.parse(s), o, r === "path"), [
            l,
            s,
            o,
            r
        ]);
    }
    function M2(l, r) {
        return p0(l, r);
    }
    function p0(l, r, i, o) {
        ke(Yl(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: s, static: f } = S.useContext(an), { matches: d } = S.useContext(Cn), h = d[d.length - 1], g = h ? h.params : {}, m = h ? h.pathname : "/", y = h ? h.pathnameBase : "/", E = h && h.route;
        {
            let k = E && E.path || "";
            g0(m, !E || k.endsWith("*") || k.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === "/" ? "*" : `${k}/*`}">.`);
        }
        let b = Cr(), O;
        if (r) {
            let k = typeof r == "string" ? Oa(r) : r;
            ke(y === "/" || k.pathname?.startsWith(y), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${k.pathname}" was given in the \`location\` prop.`), O = k;
        } else O = b;
        let _ = O.pathname || "/", x = _;
        if (y !== "/") {
            let k = y.replace(/^\//, "").split("/");
            x = "/" + _.replace(/^\//, "").split("/").slice(k.length).join("/");
        }
        let P = !f && i && i.matches && i.matches.length > 0 ? i.matches : l0(l, {
            pathname: x
        });
        rn(E || P != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `), rn(P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0, `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let A = L2(P && P.map((k)=>Object.assign({}, k, {
                params: Object.assign({}, g, k.params),
                pathname: Dn([
                    y,
                    s.encodeLocation ? s.encodeLocation(k.pathname).pathname : k.pathname
                ]),
                pathnameBase: k.pathnameBase === "/" ? y : Dn([
                    y,
                    s.encodeLocation ? s.encodeLocation(k.pathnameBase).pathname : k.pathnameBase
                ])
            })), d, i, o);
        return r && A ? S.createElement(Gl.Provider, {
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
        }, A) : A;
    }
    function N2() {
        let l = q2(), r = T2(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), i = l instanceof Error ? l.stack : null, o = "rgba(200,200,200, 0.5)", s = {
            padding: "0.5rem",
            backgroundColor: o
        }, f = {
            padding: "2px 4px",
            backgroundColor: o
        }, d = null;
        return console.error("Error handled by React Router default ErrorBoundary:", l), d = S.createElement(S.Fragment, null, S.createElement("p", null, "💿 Hey developer 👋"), S.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", S.createElement("code", {
            style: f
        }, "ErrorBoundary"), " or", " ", S.createElement("code", {
            style: f
        }, "errorElement"), " prop on your route.")), S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), i ? S.createElement("pre", {
            style: s
        }, i) : null, d);
    }
    var A2 = S.createElement(N2, null), P2 = class extends S.Component {
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
            return this.state.error !== void 0 ? S.createElement(Cn.Provider, {
                value: this.props.routeContext
            }, S.createElement(Nc.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function j2({ routeContext: l, match: r, children: i }) {
        let o = S.useContext(Ta);
        return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), S.createElement(Cn.Provider, {
            value: l
        }, i);
    }
    function L2(l, r = [], i = null, o = null) {
        if (l == null) {
            if (!i) return null;
            if (i.errors) l = i.matches;
            else if (r.length === 0 && !i.initialized && i.matches.length > 0) l = i.matches;
            else return null;
        }
        let s = l, f = i?.errors;
        if (f != null) {
            let g = s.findIndex((m)=>m.route.id && f?.[m.route.id] !== void 0);
            ke(g >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), s = s.slice(0, Math.min(s.length, g + 1));
        }
        let d = !1, h = -1;
        if (i) for(let g = 0; g < s.length; g++){
            let m = s[g];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = g), m.route.id) {
                let { loaderData: y, errors: E } = i, b = m.route.loader && !y.hasOwnProperty(m.route.id) && (!E || E[m.route.id] === void 0);
                if (m.route.lazy || b) {
                    d = !0, h >= 0 ? s = s.slice(0, h + 1) : s = [
                        s[0]
                    ];
                    break;
                }
            }
        }
        return s.reduceRight((g, m, y)=>{
            let E, b = !1, O = null, _ = null;
            i && (E = f && m.route.id ? f[m.route.id] : void 0, O = m.route.errorElement || A2, d && (h < 0 && y === 0 ? (g0("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, _ = null) : h === y && (b = !0, _ = m.route.hydrateFallbackElement || null)));
            let x = r.concat(s.slice(0, y + 1)), P = ()=>{
                let A;
                return E ? A = O : b ? A = _ : m.route.Component ? A = S.createElement(m.route.Component, null) : m.route.element ? A = m.route.element : A = g, S.createElement(j2, {
                    match: m,
                    routeContext: {
                        outlet: g,
                        matches: x,
                        isDataRoute: i != null
                    },
                    children: A
                });
            };
            return i && (m.route.ErrorBoundary || m.route.errorElement || y === 0) ? S.createElement(P2, {
                location: i.location,
                revalidation: i.revalidation,
                component: O,
                error: E,
                children: P(),
                routeContext: {
                    outlet: null,
                    matches: x,
                    isDataRoute: !0
                }
            }) : P();
        }, null);
    }
    function Ac(l) {
        return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function k2(l) {
        let r = S.useContext(Ta);
        return ke(r, Ac(l)), r;
    }
    function B2(l) {
        let r = S.useContext(_u);
        return ke(r, Ac(l)), r;
    }
    function z2(l) {
        let r = S.useContext(Cn);
        return ke(r, Ac(l)), r;
    }
    function Pc(l) {
        let r = z2(l), i = r.matches[r.matches.length - 1];
        return ke(i.route.id, `${l} can only be used on routes that contain a unique "id"`), i.route.id;
    }
    function U2() {
        return Pc("useRouteId");
    }
    function q2() {
        let l = S.useContext(Nc), r = B2("useRouteError"), i = Pc("useRouteError");
        return l !== void 0 ? l : r.errors?.[i];
    }
    function H2() {
        let { router: l } = k2("useNavigate"), r = Pc("useNavigate"), i = S.useRef(!1);
        return h0(()=>{
            i.current = !0;
        }), S.useCallback(async (s, f = {})=>{
            rn(i.current, d0), i.current && (typeof s == "number" ? l.navigate(s) : await l.navigate(s, {
                fromRouteId: r,
                ...f
            }));
        }, [
            l,
            r
        ]);
    }
    var ag = {};
    function g0(l, r, i) {
        !r && !ag[l] && (ag[l] = !0, rn(!1, i));
    }
    S.memo(Q2);
    function Q2({ routes: l, future: r, state: i }) {
        return p0(l, void 0, i, r);
    }
    function Bl(l) {
        ke(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function K2({ basename: l = "/", children: r = null, location: i, navigationType: o = "POP", navigator: s, static: f = !1 }) {
        ke(!Yl(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let d = l.replace(/^\/*/, "/"), h = S.useMemo(()=>({
                basename: d,
                navigator: s,
                static: f,
                future: {}
            }), [
            d,
            s,
            f
        ]);
        typeof i == "string" && (i = Oa(i));
        let { pathname: g = "/", search: m = "", hash: y = "", state: E = null, key: b = "default" } = i, O = S.useMemo(()=>{
            let _ = Rn(g, d);
            return _ == null ? null : {
                location: {
                    pathname: _,
                    search: m,
                    hash: y,
                    state: E,
                    key: b
                },
                navigationType: o
            };
        }, [
            d,
            g,
            m,
            y,
            E,
            b,
            o
        ]);
        return rn(O != null, `<Router basename="${d}"> is not able to match the URL "${g}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`), O == null ? null : S.createElement(an.Provider, {
            value: h
        }, S.createElement(Gl.Provider, {
            children: r,
            value: O
        }));
    }
    function G2({ children: l, location: r }) {
        return M2(mc(l), r);
    }
    function mc(l, r = []) {
        let i = [];
        return S.Children.forEach(l, (o, s)=>{
            if (!S.isValidElement(o)) return;
            let f = [
                ...r,
                s
            ];
            if (o.type === S.Fragment) {
                i.push.apply(i, mc(o.props.children, f));
                return;
            }
            ke(o.type === Bl, `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), ke(!o.props.index || !o.props.children, "An index route cannot have child routes.");
            let d = {
                id: o.props.id || f.join("-"),
                caseSensitive: o.props.caseSensitive,
                element: o.props.element,
                Component: o.props.Component,
                index: o.props.index,
                path: o.props.path,
                loader: o.props.loader,
                action: o.props.action,
                hydrateFallbackElement: o.props.hydrateFallbackElement,
                HydrateFallback: o.props.HydrateFallback,
                errorElement: o.props.errorElement,
                ErrorBoundary: o.props.ErrorBoundary,
                hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
                shouldRevalidate: o.props.shouldRevalidate,
                handle: o.props.handle,
                lazy: o.props.lazy
            };
            o.props.children && (d.children = mc(o.props.children, f)), i.push(d);
        }), i;
    }
    var gu = "get", mu = "application/x-www-form-urlencoded";
    function Du(l) {
        return l != null && typeof l.tagName == "string";
    }
    function Y2(l) {
        return Du(l) && l.tagName.toLowerCase() === "button";
    }
    function X2(l) {
        return Du(l) && l.tagName.toLowerCase() === "form";
    }
    function I2(l) {
        return Du(l) && l.tagName.toLowerCase() === "input";
    }
    function V2(l) {
        return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
    }
    function Z2(l, r) {
        return l.button === 0 && (!r || r === "_self") && !V2(l);
    }
    var cu = null;
    function $2() {
        if (cu === null) try {
            new FormData(document.createElement("form"), 0), cu = !1;
        } catch  {
            cu = !0;
        }
        return cu;
    }
    var J2 = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function nc(l) {
        return l != null && !J2.has(l) ? (rn(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`), null) : l;
    }
    function W2(l, r) {
        let i, o, s, f, d;
        if (X2(l)) {
            let h = l.getAttribute("action");
            o = h ? Rn(h, r) : null, i = l.getAttribute("method") || gu, s = nc(l.getAttribute("enctype")) || mu, f = new FormData(l);
        } else if (Y2(l) || I2(l) && (l.type === "submit" || l.type === "image")) {
            let h = l.form;
            if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let g = l.getAttribute("formaction") || h.getAttribute("action");
            if (o = g ? Rn(g, r) : null, i = l.getAttribute("formmethod") || h.getAttribute("method") || gu, s = nc(l.getAttribute("formenctype")) || nc(h.getAttribute("enctype")) || mu, f = new FormData(h, l), !$2()) {
                let { name: m, type: y, value: E } = l;
                if (y === "image") {
                    let b = m ? `${m}.` : "";
                    f.append(`${b}x`, "0"), f.append(`${b}y`, "0");
                } else m && f.append(m, E);
            }
        } else {
            if (Du(l)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            i = gu, o = null, s = mu, d = l;
        }
        return f && s === "text/plain" && (d = f, f = void 0), {
            action: o,
            method: i.toLowerCase(),
            encType: s,
            formData: f,
            body: d
        };
    }
    function jc(l, r) {
        if (l === !1 || l === null || typeof l > "u") throw new Error(r);
    }
    async function F2(l, r) {
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
    function eb(l) {
        return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
    }
    async function tb(l, r, i) {
        let o = await Promise.all(l.map(async (s)=>{
            let f = r.routes[s.route.id];
            if (f) {
                let d = await F2(f, i);
                return d.links ? d.links() : [];
            }
            return [];
        }));
        return lb(o.flat(1).filter(eb).filter((s)=>s.rel === "stylesheet" || s.rel === "preload").map((s)=>s.rel === "stylesheet" ? {
                ...s,
                rel: "prefetch",
                as: "style"
            } : {
                ...s,
                rel: "prefetch"
            }));
    }
    function lg(l, r, i, o, s, f) {
        let d = (g, m)=>i[m] ? g.route.id !== i[m].route.id : !0, h = (g, m)=>i[m].pathname !== g.pathname || i[m].route.path?.endsWith("*") && i[m].params["*"] !== g.params["*"];
        return f === "assets" ? r.filter((g, m)=>d(g, m) || h(g, m)) : f === "data" ? r.filter((g, m)=>{
            let y = o.routes[g.route.id];
            if (!y || !y.hasLoader) return !1;
            if (d(g, m) || h(g, m)) return !0;
            if (g.route.shouldRevalidate) {
                let E = g.route.shouldRevalidate({
                    currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
                    currentParams: i[0]?.params || {},
                    nextUrl: new URL(l, window.origin),
                    nextParams: g.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof E == "boolean") return E;
            }
            return !0;
        }) : [];
    }
    function nb(l, r, { includeHydrateFallback: i } = {}) {
        return rb(l.map((o)=>{
            let s = r.routes[o.route.id];
            if (!s) return [];
            let f = [
                s.module
            ];
            return s.clientActionModule && (f = f.concat(s.clientActionModule)), s.clientLoaderModule && (f = f.concat(s.clientLoaderModule)), i && s.hydrateFallbackModule && (f = f.concat(s.hydrateFallbackModule)), s.imports && (f = f.concat(s.imports)), f;
        }).flat(1));
    }
    function rb(l) {
        return [
            ...new Set(l)
        ];
    }
    function ab(l) {
        let r = {}, i = Object.keys(l).sort();
        for (let o of i)r[o] = l[o];
        return r;
    }
    function lb(l, r) {
        let i = new Set;
        return new Set(r), l.reduce((o, s)=>{
            let f = JSON.stringify(ab(s));
            return i.has(f) || (i.add(f), o.push({
                key: f,
                link: s
            })), o;
        }, []);
    }
    function ib(l, r) {
        let i = typeof l == "string" ? new URL(l, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : l;
        return i.pathname === "/" ? i.pathname = "_root.data" : r && Rn(i.pathname, r) === "/" ? i.pathname = `${r.replace(/\/$/, "")}/_root.data` : i.pathname = `${i.pathname.replace(/\/$/, "")}.data`, i;
    }
    function m0() {
        let l = S.useContext(Ta);
        return jc(l, "You must render this element inside a <DataRouterContext.Provider> element"), l;
    }
    function ub() {
        let l = S.useContext(_u);
        return jc(l, "You must render this element inside a <DataRouterStateContext.Provider> element"), l;
    }
    var Lc = S.createContext(void 0);
    Lc.displayName = "FrameworkContext";
    function v0() {
        let l = S.useContext(Lc);
        return jc(l, "You must render this element inside a <HydratedRouter> element"), l;
    }
    function ob(l, r) {
        let i = S.useContext(Lc), [o, s] = S.useState(!1), [f, d] = S.useState(!1), { onFocus: h, onBlur: g, onMouseEnter: m, onMouseLeave: y, onTouchStart: E } = r, b = S.useRef(null);
        S.useEffect(()=>{
            if (l === "render" && d(!0), l === "viewport") {
                let x = (A)=>{
                    A.forEach((k)=>{
                        d(k.isIntersecting);
                    });
                }, P = new IntersectionObserver(x, {
                    threshold: .5
                });
                return b.current && P.observe(b.current), ()=>{
                    P.disconnect();
                };
            }
        }, [
            l
        ]), S.useEffect(()=>{
            if (o) {
                let x = setTimeout(()=>{
                    d(!0);
                }, 100);
                return ()=>{
                    clearTimeout(x);
                };
            }
        }, [
            o
        ]);
        let O = ()=>{
            s(!0);
        }, _ = ()=>{
            s(!1), d(!1);
        };
        return i ? l !== "intent" ? [
            f,
            b,
            {}
        ] : [
            f,
            b,
            {
                onFocus: Pl(h, O),
                onBlur: Pl(g, _),
                onMouseEnter: Pl(m, O),
                onMouseLeave: Pl(y, _),
                onTouchStart: Pl(E, O)
            }
        ] : [
            !1,
            b,
            {}
        ];
    }
    function Pl(l, r) {
        return (i)=>{
            l && l(i), i.defaultPrevented || r(i);
        };
    }
    function sb({ page: l, ...r }) {
        let { router: i } = m0(), o = S.useMemo(()=>l0(i.routes, l, i.basename), [
            i.routes,
            l,
            i.basename
        ]);
        return o ? S.createElement(fb, {
            page: l,
            matches: o,
            ...r
        }) : null;
    }
    function cb(l) {
        let { manifest: r, routeModules: i } = v0(), [o, s] = S.useState([]);
        return S.useEffect(()=>{
            let f = !1;
            return tb(l, r, i).then((d)=>{
                f || s(d);
            }), ()=>{
                f = !0;
            };
        }, [
            l,
            r,
            i
        ]), o;
    }
    function fb({ page: l, matches: r, ...i }) {
        let o = Cr(), { manifest: s, routeModules: f } = v0(), { basename: d } = m0(), { loaderData: h, matches: g } = ub(), m = S.useMemo(()=>lg(l, r, g, s, o, "data"), [
            l,
            r,
            g,
            s,
            o
        ]), y = S.useMemo(()=>lg(l, r, g, s, o, "assets"), [
            l,
            r,
            g,
            s,
            o
        ]), E = S.useMemo(()=>{
            if (l === o.pathname + o.search + o.hash) return [];
            let _ = new Set, x = !1;
            if (r.forEach((A)=>{
                let k = s.routes[A.route.id];
                !k || !k.hasLoader || (!m.some((B)=>B.route.id === A.route.id) && A.route.id in h && f[A.route.id]?.shouldRevalidate || k.hasClientLoader ? x = !0 : _.add(A.route.id));
            }), _.size === 0) return [];
            let P = ib(l, d);
            return x && _.size > 0 && P.searchParams.set("_routes", r.filter((A)=>_.has(A.route.id)).map((A)=>A.route.id).join(",")), [
                P.pathname + P.search
            ];
        }, [
            d,
            h,
            o,
            s,
            m,
            r,
            l,
            f
        ]), b = S.useMemo(()=>nb(y, s), [
            y,
            s
        ]), O = cb(y);
        return S.createElement(S.Fragment, null, E.map((_)=>S.createElement("link", {
                key: _,
                rel: "prefetch",
                as: "fetch",
                href: _,
                ...i
            })), b.map((_)=>S.createElement("link", {
                key: _,
                rel: "modulepreload",
                href: _,
                ...i
            })), O.map(({ key: _, link: x })=>S.createElement("link", {
                key: _,
                ...x
            })));
    }
    function db(...l) {
        return (r)=>{
            l.forEach((i)=>{
                typeof i == "function" ? i(r) : i != null && (i.current = r);
            });
        };
    }
    var y0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        y0 && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function hb({ basename: l, children: r, window: i }) {
        let o = S.useRef();
        o.current == null && (o.current = t2({
            window: i,
            v5Compat: !0
        }));
        let s = o.current, [f, d] = S.useState({
            action: s.action,
            location: s.location
        }), h = S.useCallback((g)=>{
            S.startTransition(()=>d(g));
        }, [
            d
        ]);
        return S.useLayoutEffect(()=>s.listen(h), [
            s,
            h
        ]), S.createElement(K2, {
            basename: l,
            children: r,
            location: f.location,
            navigationType: f.action,
            navigator: s
        });
    }
    var b0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, zl = S.forwardRef(function({ onClick: r, discover: i = "render", prefetch: o = "none", relative: s, reloadDocument: f, replace: d, state: h, target: g, to: m, preventScrollReset: y, viewTransition: E, ...b }, O) {
        let { basename: _ } = S.useContext(an), x = typeof m == "string" && b0.test(m), P, A = !1;
        if (typeof m == "string" && x && (P = m, y0)) try {
            let W = new URL(window.location.href), De = m.startsWith("//") ? new URL(W.protocol + m) : new URL(m), Pe = Rn(De.pathname, _);
            De.origin === W.origin && Pe != null ? m = Pe + De.search + De.hash : A = !0;
        } catch  {
            rn(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let k = C2(m, {
            relative: s
        }), [B, G, K] = ob(o, b), Z = vb(m, {
            replace: d,
            state: h,
            target: g,
            preventScrollReset: y,
            relative: s,
            viewTransition: E
        });
        function V(W) {
            r && r(W), W.defaultPrevented || Z(W);
        }
        let $ = S.createElement("a", {
            ...b,
            ...K,
            href: P || k,
            onClick: A || f ? r : V,
            ref: db(O, G),
            target: g,
            "data-discover": !x && i === "render" ? "true" : void 0
        });
        return B && !x ? S.createElement(S.Fragment, null, $, S.createElement(sb, {
            page: k
        })) : $;
    });
    zl.displayName = "Link";
    var pb = S.forwardRef(function({ "aria-current": r = "page", caseSensitive: i = !1, className: o = "", end: s = !1, style: f, to: d, viewTransition: h, children: g, ...m }, y) {
        let E = Xl(d, {
            relative: m.relative
        }), b = Cr(), O = S.useContext(_u), { navigator: _, basename: x } = S.useContext(an), P = O != null && Ob(E) && h === !0, A = _.encodeLocation ? _.encodeLocation(E).pathname : E.pathname, k = b.pathname, B = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
        i || (k = k.toLowerCase(), B = B ? B.toLowerCase() : null, A = A.toLowerCase()), B && x && (B = Rn(B, x) || B);
        const G = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
        let K = k === A || !s && k.startsWith(A) && k.charAt(G) === "/", Z = B != null && (B === A || !s && B.startsWith(A) && B.charAt(A.length) === "/"), V = {
            isActive: K,
            isPending: Z,
            isTransitioning: P
        }, $ = K ? r : void 0, W;
        typeof o == "function" ? W = o(V) : W = [
            o,
            K ? "active" : null,
            Z ? "pending" : null,
            P ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let De = typeof f == "function" ? f(V) : f;
        return S.createElement(zl, {
            ...m,
            "aria-current": $,
            className: W,
            ref: y,
            style: De,
            to: d,
            viewTransition: h
        }, typeof g == "function" ? g(V) : g);
    });
    pb.displayName = "NavLink";
    var gb = S.forwardRef(({ discover: l = "render", fetcherKey: r, navigate: i, reloadDocument: o, replace: s, state: f, method: d = gu, action: h, onSubmit: g, relative: m, preventScrollReset: y, viewTransition: E, ...b }, O)=>{
        let _ = Sb(), x = Eb(h, {
            relative: m
        }), P = d.toLowerCase() === "get" ? "get" : "post", A = typeof h == "string" && b0.test(h), k = (B)=>{
            if (g && g(B), B.defaultPrevented) return;
            B.preventDefault();
            let G = B.nativeEvent.submitter, K = G?.getAttribute("formmethod") || d;
            _(G || B.currentTarget, {
                fetcherKey: r,
                method: K,
                navigate: i,
                replace: s,
                state: f,
                relative: m,
                preventScrollReset: y,
                viewTransition: E
            });
        };
        return S.createElement("form", {
            ref: O,
            method: P,
            action: x,
            onSubmit: o ? g : k,
            ...b,
            "data-discover": !A && l === "render" ? "true" : void 0
        });
    });
    gb.displayName = "Form";
    function mb(l) {
        return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function S0(l) {
        let r = S.useContext(Ta);
        return ke(r, mb(l)), r;
    }
    function vb(l, { target: r, replace: i, state: o, preventScrollReset: s, relative: f, viewTransition: d } = {}) {
        let h = x2(), g = Cr(), m = Xl(l, {
            relative: f
        });
        return S.useCallback((y)=>{
            if (Z2(y, r)) {
                y.preventDefault();
                let E = i !== void 0 ? i : Ql(g) === Ql(m);
                h(l, {
                    replace: E,
                    state: o,
                    preventScrollReset: s,
                    relative: f,
                    viewTransition: d
                });
            }
        }, [
            g,
            h,
            m,
            i,
            o,
            r,
            l,
            s,
            f,
            d
        ]);
    }
    var yb = 0, bb = ()=>`__${String(++yb)}__`;
    function Sb() {
        let { router: l } = S0("useSubmit"), { basename: r } = S.useContext(an), i = U2();
        return S.useCallback(async (o, s = {})=>{
            let { action: f, method: d, encType: h, formData: g, body: m } = W2(o, r);
            if (s.navigate === !1) {
                let y = s.fetcherKey || bb();
                await l.fetch(y, i, s.action || f, {
                    preventScrollReset: s.preventScrollReset,
                    formData: g,
                    body: m,
                    formMethod: s.method || d,
                    formEncType: s.encType || h,
                    flushSync: s.flushSync
                });
            } else await l.navigate(s.action || f, {
                preventScrollReset: s.preventScrollReset,
                formData: g,
                body: m,
                formMethod: s.method || d,
                formEncType: s.encType || h,
                replace: s.replace,
                state: s.state,
                fromRouteId: i,
                flushSync: s.flushSync,
                viewTransition: s.viewTransition
            });
        }, [
            l,
            r,
            i
        ]);
    }
    function Eb(l, { relative: r } = {}) {
        let { basename: i } = S.useContext(an), o = S.useContext(Cn);
        ke(o, "useFormAction must be used inside a RouteContext");
        let [s] = o.matches.slice(-1), f = {
            ...Xl(l || ".", {
                relative: r
            })
        }, d = Cr();
        if (l == null) {
            f.search = d.search;
            let h = new URLSearchParams(f.search), g = h.getAll("index");
            if (g.some((y)=>y === "")) {
                h.delete("index"), g.filter((E)=>E).forEach((E)=>h.append("index", E));
                let y = h.toString();
                f.search = y ? `?${y}` : "";
            }
        }
        return (!l || l === ".") && s.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Dn([
            i,
            f.pathname
        ])), Ql(f);
    }
    function Ob(l, r = {}) {
        let i = S.useContext(f0);
        ke(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: o } = S0("useViewTransitionState"), s = Xl(l, {
            relative: r.relative
        });
        if (!i.isTransitioning) return !1;
        let f = Rn(i.currentLocation.pathname, o) || i.currentLocation.pathname, d = Rn(i.nextLocation.pathname, o) || i.nextLocation.pathname;
        return Eu(s.pathname, d) != null || Eu(s.pathname, f) != null;
    }
    new TextEncoder;
    const Tb = S.createContext(), _b = ({ children: l })=>{
        const r = (y, E)=>{
            const b = localStorage.getItem(y);
            return b !== null ? JSON.parse(b) : E;
        }, [i, o] = S.useState(()=>r(ht.THEME_KEY, ht.THEME)), [s, f] = S.useState(()=>r(ht.ENABLE_SOUND_KEY, ht.ENABLE_SOUND)), [d, h] = S.useState(()=>r(ht.TIMER_DURATION_KEY, ht.TIMER_DURATION)), [g, m] = S.useState(()=>r(ht.IS_FLIPPED_KEY, ht.IS_FLIPPED));
        return S.useEffect(()=>localStorage.setItem(ht.THEME_KEY, JSON.stringify(i)), [
            i
        ]), S.useEffect(()=>localStorage.setItem(ht.ENABLE_SOUND_KEY, JSON.stringify(s)), [
            s
        ]), S.useEffect(()=>localStorage.setItem(ht.TIMER_DURATION_KEY, JSON.stringify(d)), [
            d
        ]), S.useEffect(()=>localStorage.setItem(ht.IS_FLIPPED_KEY, JSON.stringify(g)), [
            g
        ]), D.jsx(Tb.Provider, {
            value: {
                theme: i,
                setTheme: o,
                enableSound: s,
                setEnableSound: f,
                timerDuration: d,
                setTimerDuration: h,
                isFlipped: g,
                setIsFlipped: m
            },
            children: l
        });
    };
    Db = function(l, r = "lite", i = 8e3) {
        const o = S.useRef(null), s = S.useRef(null), f = S.useRef(null), d = S.useRef(null), h = S.useRef(!1), g = S.useRef([]), m = S.useRef(!0), y = S.useRef(!1), E = S.useRef(!1), b = S.useCallback(()=>{
            if (!(y.current || !o.current)) {
                for(y.current = !0; g.current.length > 0;){
                    const V = g.current.findIndex((W)=>W.type === "stop"), $ = V >= 0 ? g.current.splice(V, 1)[0] : g.current.shift();
                    $ && o.current.postMessage($.cmd);
                }
                y.current = !1;
            }
        }, []), O = S.useCallback((V, $)=>{
            g.current.push({
                type: V,
                cmd: $
            }), b();
        }, [
            b
        ]), _ = S.useCallback(()=>{
            o.current || (r === "lite" ? o.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : o.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), o.current.postMessage("uci"), console.log("Initializing worker ..."), o.current.onmessage = (V)=>{
                const $ = V.data;
                if (l && l($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) m.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const W = $.match(/score (cp|mate) (-?\d+)/);
                        if (W) {
                            const De = W[1], Pe = parseInt(W[2], 10), he = De === "cp" ? Pe / 100 : Pe > 0 ? 10 : -10;
                            s.current && (s.current(he), s.current = null);
                        }
                    }
                }
            }, o.current.onerror = (V)=>{
                console.error("Error with Stockfish worker:", V);
            });
        }, [
            l,
            r
        ]), x = S.useCallback(()=>{
            o.current && o.current.terminate(), r === "lite" ? o.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : o.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), o.current.postMessage("uci"), console.log("Intialising worker ..."), o.current.onmessage = (V)=>{
                const $ = V.data;
                if (l && l($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) m.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const W = $.match(/score (cp|mate) (-?\d+)/);
                        if (W) {
                            const De = W[1], Pe = parseInt(W[2], 10), he = De === "cp" ? Pe / 100 : Pe > 0 ? 10 : -10;
                            s.current && (s.current(he), s.current = null);
                        }
                    }
                }
            }, o.current.onerror = (V)=>{
                console.error("Error with Stockfish worker:", V);
            };
        }, [
            l,
            r
        ]), P = S.useCallback((V)=>{
            o.current && O("normal", V);
        }, []), A = S.useCallback((V)=>{
            V.forEach(($)=>{
                O("normal", `setoption name ${$.name} value ${$.value}`);
            });
        }, [
            P
        ]), k = S.useCallback((V, $ = [])=>{
            let W = `position fen ${V}`;
            if ($.length > 0) {
                const De = $.join(" ");
                W += ` moves ${De}`;
            }
            O("normal", W);
        }, [
            P
        ]), B = S.useCallback((V)=>{
            console.log("Attempt stopSearch..", V), o.current && (console.log("try stopSearch ...", V), h.current && (console.log("Interrupting current search...", V), O("stop", "stop"), h.current = !1, f.current && (clearTimeout(f.current), f.current = null)));
        }, []), G = S.useCallback((V)=>{
            if (!E.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            o.current || (console.log("Starting engine on demand..."), _()), clearTimeout(f.current), B("pre startSearch"), d.current && clearTimeout(d.current), d.current = setTimeout(()=>{
                h.current = !0, O("normal", `position fen ${V}`), O("normal", "go infinite"), f.current = setTimeout(()=>{
                    B("startSearch timer expire");
                }, i);
            }, 50);
        }, [
            i,
            B
        ]), K = S.useCallback(()=>{
            o.current && (o.current.terminate(), o.current = null), h.current = !1, m.current = !0, f.current && (clearTimeout(f.current), f.current = null);
        }, []), Z = S.useCallback((V)=>{
            V ? console.log("Permission granted: engine allowed to start if needed") : (console.log("Permission revoked: stopping engine"), B("permission revoked"), K());
        }, [
            B,
            K
        ]);
        return S.useEffect(()=>()=>{
                K();
            }, []), {
            initEngine: x,
            setOptions: A,
            setFen: k,
            startSearch: G,
            stopSearch: B,
            terminateEngine: K,
            syncEnabledState: Z
        };
    };
    let E0, Rb;
    E0 = S.createContext();
    KE = ()=>S.useContext(E0);
    Rb = ({ children: l })=>{
        const r = S.useRef(null), i = S.useCallback((f)=>{
            r.current && r.current(f);
        }, []), o = Db(i), s = S.useCallback((f)=>{
            r.current = f;
        }, []);
        return D.jsx(E0.Provider, {
            value: {
                ...o,
                setOnMessage: s
            },
            children: l
        });
    };
    function Cb(l, r) {
        var i = {};
        for(var o in l)Object.prototype.hasOwnProperty.call(l, o) && r.indexOf(o) < 0 && (i[o] = l[o]);
        if (l != null && typeof Object.getOwnPropertySymbols == "function") for(var s = 0, o = Object.getOwnPropertySymbols(l); s < o.length; s++)r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[s]) && (i[o[s]] = l[o[s]]);
        return i;
    }
    const Kl = "abcdefgh".split(""), vu = {
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
    }, xb = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7
    }, wb = {
        a: 7,
        b: 6,
        c: 5,
        d: 4,
        e: 3,
        f: 2,
        g: 1,
        h: 0
    }, Mb = [
        7,
        6,
        5,
        4,
        3,
        2,
        1,
        0
    ], Nb = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ], ig = {
        wP: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsx("path", {
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
        wR: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsx("path", {
                        d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 34,14 L 31,17 L 14,17 L 11,14"
                    }),
                    D.jsx("path", {
                        d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17",
                        style: {
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"
                    }),
                    D.jsx("path", {
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
        wN: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsx("path", {
                        d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
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
        wB: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsxs("g", Object.assign({
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000",
                            strokeLinecap: "butt"
                        }
                    }, {
                        children: [
                            D.jsx("path", {
                                d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"
                            }),
                            D.jsx("path", {
                                d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
                            }),
                            D.jsx("path", {
                                d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
                            })
                        ]
                    })),
                    D.jsx("path", {
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
        wQ: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
                style: {
                    fill: "#ffffff",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }
            }, {
                children: [
                    D.jsx("path", {
                        d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
                    }),
                    D.jsx("path", {
                        d: "M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
                    }),
                    D.jsx("path", {
                        d: "M 11.5,30 C 15,29 30,29 33.5,30",
                        style: {
                            fill: "none"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12,33.5 C 18,32.5 27,32.5 33,33.5",
                        style: {
                            fill: "none"
                        }
                    }),
                    D.jsx("circle", {
                        cx: "6",
                        cy: "12",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "14",
                        cy: "9",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "22.5",
                        cy: "8",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "31",
                        cy: "9",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "39",
                        cy: "12",
                        r: "2"
                    })
                ]
            }))
        })),
        wK: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsx("path", {
                        d: "M 22.5,11.63 L 22.5,6",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 20,8 L 25,8",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37",
                        style: {
                            fill: "#ffffff",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12.5,30 C 18,27 27,27 32.5,30",
                        style: {
                            fill: "none",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5",
                        style: {
                            fill: "none",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12.5,37 C 18,34 27,34 32.5,37",
                        style: {
                            fill: "none",
                            stroke: "#000000"
                        }
                    })
                ]
            }))
        })),
        bP: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsx("path", {
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
        bR: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsx("path", {
                        d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ",
                        style: {
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ",
                        style: {
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12,35.5 L 33,35.5 L 33,35.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 13,31.5 L 32,31.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 14,29.5 L 31,29.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 14,16.5 L 31,16.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
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
        bN: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsx("path", {
                        d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
                        style: {
                            fill: "#ffffff",
                            stroke: "#ffffff"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
                        transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
                        style: {
                            fill: "#ffffff",
                            stroke: "#ffffff"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ",
                        style: {
                            fill: "#ffffff",
                            stroke: "none"
                        }
                    })
                ]
            }))
        })),
        bB: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsxs("g", Object.assign({
                        style: {
                            fill: "#000000",
                            stroke: "#000000",
                            strokeLinecap: "butt"
                        }
                    }, {
                        children: [
                            D.jsx("path", {
                                d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"
                            }),
                            D.jsx("path", {
                                d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
                            }),
                            D.jsx("path", {
                                d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
                            })
                        ]
                    })),
                    D.jsx("path", {
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
        bQ: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
                style: {
                    fill: "#000000",
                    stroke: "#000000",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }
            }, {
                children: [
                    D.jsx("path", {
                        d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z",
                        style: {
                            strokeLinecap: "butt",
                            fill: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z"
                    }),
                    D.jsx("path", {
                        d: "M 11.5,30 C 15,29 30,29 33.5,30"
                    }),
                    D.jsx("path", {
                        d: "m 12,33.5 c 6,-1 15,-1 21,0"
                    }),
                    D.jsx("circle", {
                        cx: "6",
                        cy: "12",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "14",
                        cy: "9",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "22.5",
                        cy: "8",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "31",
                        cy: "9",
                        r: "2"
                    }),
                    D.jsx("circle", {
                        cx: "39",
                        cy: "12",
                        r: "2"
                    }),
                    D.jsx("path", {
                        d: "M 11,38.5 A 35,35 1 0 0 34,38.5",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "butt"
                        }
                    }),
                    D.jsxs("g", Object.assign({
                        style: {
                            fill: "none",
                            stroke: "#ffffff"
                        }
                    }, {
                        children: [
                            D.jsx("path", {
                                d: "M 11,29 A 35,35 1 0 1 34,29"
                            }),
                            D.jsx("path", {
                                d: "M 12.5,31.5 L 32.5,31.5"
                            }),
                            D.jsx("path", {
                                d: "M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
                            }),
                            D.jsx("path", {
                                d: "M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
                            })
                        ]
                    }))
                ]
            }))
        })),
        bK: D.jsx("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "45",
            height: "45"
        }, {
            children: D.jsxs("g", Object.assign({
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
                    D.jsx("path", {
                        d: "M 22.5,11.63 L 22.5,6",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        },
                        id: "path6570"
                    }),
                    D.jsx("path", {
                        d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",
                        style: {
                            fill: "#000000",
                            fillOpacity: "1",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37",
                        style: {
                            fill: "#000000",
                            stroke: "#000000"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 20,8 L 25,8",
                        style: {
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter"
                        }
                    }),
                    D.jsx("path", {
                        d: "M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5",
                        style: {
                            fill: "none",
                            stroke: "#ffffff"
                        }
                    }),
                    D.jsx("path", {
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
    function vc(l, r, i) {
        const o = r / 8, s = l === "white" ? xb : wb, f = l === "white" ? Mb : Nb, d = s[i[0]] * o + o / 2, h = f[parseInt(i[1], 10) - 1] * o + o / 2;
        return {
            x: d,
            y: h
        };
    }
    function ug(l) {
        let r = !1;
        return Object.keys(vu).forEach((i)=>{
            l[i] !== vu[i] && (r = !0);
        }), Object.keys(l).forEach((i)=>{
            vu[i] !== l[i] && (r = !0);
        }), r;
    }
    function Ab(l, r) {
        const i = {
            removed: {},
            added: {}
        };
        return Object.keys(l).forEach((o)=>{
            r[o] !== l[o] && (i.removed[o] = l[o]);
        }), Object.keys(r).forEach((o)=>{
            l[o] !== r[o] && (i.added[o] = r[o]);
        }), i;
    }
    function og(l) {
        return l === "start" ? vu : typeof l == "string" ? Pb(l) : l;
    }
    function Pb(l) {
        if (!jb(l)) return {};
        l = l.replace(/ .+$/, "");
        const r = l.split("/"), i = {};
        let o = 8;
        for(let s = 0; s < 8; s++){
            const f = r[s].split("");
            let d = 0;
            for(let h = 0; h < f.length; h++)if (f[h].search(/[1-8]/) !== -1) {
                const g = parseInt(f[h], 10);
                d = d + g;
            } else {
                const g = Kl[d] + o;
                i[g] = kb(f[h]), d = d + 1;
            }
            o = o - 1;
        }
        return i;
    }
    function jb(l) {
        l = l.replace(/ .+$/, ""), l = Lb(l);
        const r = l.split("/");
        if (r.length !== 8) return !1;
        for(let i = 0; i < 8; i++)if (r[i].length !== 8 || r[i].search(/[^kqrnbpKQRNBP1]/) !== -1) return !1;
        return !0;
    }
    function Lb(l) {
        return l.replace(/8/g, "11111111").replace(/7/g, "1111111").replace(/6/g, "111111").replace(/5/g, "11111").replace(/4/g, "1111").replace(/3/g, "111").replace(/2/g, "11");
    }
    function kb(l) {
        return l.toLowerCase() === l ? "b" + l.toUpperCase() : "w" + l.toUpperCase();
    }
    const Bb = (l, r = !0, i, o)=>{
        const [s, f] = S.useState([]), [d, h] = S.useState([]), [g, m] = S.useState();
        S.useEffect(()=>{
            Array.isArray(l) && (y(), f(l?.filter((_)=>_[0] !== _[1])));
        }, [
            l
        ]), S.useEffect(()=>{
            i?.(d);
        }, [
            d
        ]);
        function y() {
            h([]), m(void 0);
        }
        const E = (_, x)=>{
            r && m([
                _,
                x,
                o
            ]);
        }, b = [
            ...d,
            ...s
        ];
        return {
            arrows: b,
            newArrow: g,
            clearArrows: y,
            drawNewArrow: E,
            setArrows: h,
            onArrowDrawEnd: (_, x)=>{
                if (_ === x || !r) return;
                let P;
                const A = [
                    _,
                    x,
                    o
                ];
                b.every(([B, G])=>!(B === _ && G === x)) ? P = [
                    ...d,
                    A
                ] : P = d.filter(([B, G])=>!(B === _ && G === x)), m(void 0), h(P);
            }
        };
    }, O0 = S.createContext({}), xn = ()=>S.useContext(O0), zb = S.forwardRef(({ allowDragOutsideBoard: l = !0, animationDuration: r = 300, areArrowsAllowed: i = !0, arePiecesDraggable: o = !0, arePremovesAllowed: s = !1, autoPromoteToQueen: f = !1, boardOrientation: d = "white", boardWidth: h, children: g, clearPremovesOnRightClick: m = !0, customArrows: y, customArrowColor: E = "rgb(255,170,0)", customBoardStyle: b, customNotationStyle: O, customDarkSquareStyle: _ = {
        backgroundColor: "#B58863"
    }, customDropSquareStyle: x = {
        boxShadow: "inset 0 0 1px 6px rgba(255,255,255,0.75)"
    }, customLightSquareStyle: P = {
        backgroundColor: "#F0D9B5"
    }, customPieces: A, customPremoveDarkSquareStyle: k = {
        backgroundColor: "#A42323"
    }, customPremoveLightSquareStyle: B = {
        backgroundColor: "#BD2828"
    }, customSquare: G = "div", customSquareStyles: K, dropOffBoardAction: Z = "snapback", id: V = 0, isDraggablePiece: $ = ()=>!0, getPositionObject: W = ()=>{}, onArrowsChange: De = ()=>{}, onDragOverSquare: Pe = ()=>{}, onMouseOutSquare: he = ()=>{}, onMouseOverSquare: He = ()=>{}, onPieceClick: pt = ()=>{}, onPieceDragBegin: Me = ()=>{}, onPieceDragEnd: z = ()=>{}, onPieceDrop: Y = ()=>!0, onPieceDropOffBoard: te = ()=>{}, onPromotionCheck: Se = (Ge, ot, wn)=>(wn === "wP" && Ge[1] === "7" && ot[1] === "8" || wn === "bP" && Ge[1] === "2" && ot[1] === "1") && Math.abs(Ge.charCodeAt(0) - ot.charCodeAt(0)) <= 1, onPromotionPieceSelect: R = ()=>!0, onSparePieceDrop: Q = ()=>!0, onSquareClick: I = ()=>{}, onSquareRightClick: X = ()=>{}, position: F = "start", promotionDialogVariant: me = "default", promotionToSquare: re = null, showBoardNotation: le = !0, showPromotionDialog: ve = !1, snapToCursor: gt = !0 }, ln)=>{
        const [Ge, ot] = S.useState(og(F)), [wn, _a] = S.useState({
            removed: {},
            added: {}
        }), [Da, Mn] = S.useState(void 0), [Nt, Ra] = S.useState(ve && !f), [Il, Ca] = S.useState(null), [wr, xa] = S.useState(re), [wa, Ma] = S.useState([]), Zt = S.useRef(wa), [un, Ze] = S.useState(), [$t, mt] = S.useState(Object.assign(Object.assign({}, ig), A)), [Nu, Mr] = S.useState(!1), [Na, Nr] = S.useState(), [on, At] = S.useState(!1), [Ar, lr] = S.useState(null);
        S.useImperativeHandle(ln, ()=>({
                clearPremoves (Ee = !0) {
                    Nn(Ee);
                }
            })), S.useEffect(()=>{
            mt(Object.assign(Object.assign({}, ig), A));
        }, [
            A
        ]), S.useEffect(()=>{
            Ra(ve), xa(re);
        }, [
            re,
            ve
        ]), S.useEffect(()=>{
            var Ee, Ne, yt;
            Lr();
            const Ye = og(F), Yt = Ab(Ge, Ye), nt = ((Ee = Object.keys(Yt.added)) === null || Ee === void 0 ? void 0 : Ee.length) <= 2 ? (yt = (Ne = Object.entries(Yt.added)) === null || Ne === void 0 ? void 0 : Ne[0]) === null || yt === void 0 ? void 0 : yt[1][0] : void 0;
            if (on) ot(Ye), At(!1), s && jr(nt), Na && clearTimeout(Na);
            else if (Nu) ot(Ye), At(!1), s && jr(nt);
            else {
                ug(Ye) && Da !== void 0 ? Mn(nt) : ug(Ye) ? Mn(void 0) : Mn("b"), _a(Yt), At(!0);
                const ja = setTimeout(()=>{
                    ot(Ye), At(!1), s && jr(nt);
                }, r);
                Nr(ja);
            }
            return Mr(!1), W(Ye), Pr(), ()=>{
                clearTimeout(Na);
            };
        }, [
            F
        ]);
        const { arrows: Au, newArrow: Vl, clearArrows: Pr, drawNewArrow: Aa, onArrowDrawEnd: ir } = Bb(y, i, De, E);
        function Pu(Ee, Ne, yt, Ye) {
            if (Ee === Ne) return;
            if (Pr(), s && on || s && (Da === yt[0] || Zt.current.filter((nt)=>nt.piece[0] === yt[0]).length > 0)) {
                const nt = [
                    ...Zt.current
                ];
                nt.push({
                    sourceSq: Ee,
                    targetSq: Ne,
                    piece: yt
                }), Zt.current = nt, Ma([
                    ...nt
                ]), Lr();
                return;
            }
            if (!s && on) return;
            const Yt = Object.assign({}, Ge);
            Mr(!!Ye), Mn(yt[0]), Y.length ? Y(Ee, Ne, yt) || (Nn(), Mr(!1)) : (delete Yt[Ee], Yt[Ne] = yt, ot(Yt)), Lr(), W(Yt);
        }
        function Zl(Ee) {
            const Ne = Object.assign({}, Ge);
            delete Ne[Ee], ot(Ne), W(Ne);
        }
        function jr(Ee) {
            if (Zt.current.length === 0) return;
            const Ne = Zt.current[0];
            if (Ne.piece[0] !== void 0 && Ne.piece[0] !== Ee && Y.length) if (Mn(Ne.piece[0]), Mr(!0), Y(Ne.sourceSq, Ne.targetSq, Ne.piece)) {
                const Ye = [
                    ...Zt.current
                ];
                Ye.shift(), Zt.current = Ye, Ma([
                    ...Ye
                ]);
            } else Nn();
        }
        function Pa(Ee, Ne) {
            if (!Q(Ee, Ne)) return;
            const Ye = Object.assign({}, Ge);
            Ye[Ne] = Ee, ot(Ye), W(Ye);
        }
        function Nn(Ee = !0) {
            Ee && Mn(void 0), Zt.current = [], Ma([]);
        }
        function Lr() {
            Ca(null), xa(null), Ra(!1);
        }
        function ju(Ee) {
            Ze(Ee);
        }
        function Jt(Ee) {
            if (un) {
                if (un === Ee) {
                    Ze(void 0), m && Nn(!1), X(Ee);
                    return;
                }
            } else Ze(void 0);
        }
        function $e() {
            Ze(void 0);
        }
        const st = {
            allowDragOutsideBoard: l,
            animationDuration: r,
            arePiecesDraggable: o,
            arePremovesAllowed: s,
            arrows: Au,
            autoPromoteToQueen: f,
            boardOrientation: d,
            boardWidth: h,
            chessPieces: $t,
            clearArrows: Pr,
            clearCurrentRightClickDown: $e,
            currentPosition: Ge,
            currentRightClickDown: un,
            customArrowColor: E,
            customBoardStyle: b,
            customDarkSquareStyle: _,
            customDropSquareStyle: x,
            customLightSquareStyle: P,
            customNotationStyle: O,
            customPremoveDarkSquareStyle: k,
            customPremoveLightSquareStyle: B,
            customSquare: G,
            customSquareStyles: K,
            deletePieceFromSquare: Zl,
            drawNewArrow: Aa,
            dropOffBoardAction: Z,
            handleSetPosition: Pu,
            handleSparePieceDrop: Pa,
            id: V,
            isDraggablePiece: $,
            isWaitingForAnimation: on,
            lastPieceColour: Da,
            lastSquareDraggedOver: Ar,
            newArrow: Vl,
            onArrowDrawEnd: ir,
            onDragOverSquare: Pe,
            onMouseOutSquare: he,
            onMouseOverSquare: He,
            onPieceClick: pt,
            onPieceDragBegin: Me,
            onPieceDragEnd: z,
            onPieceDrop: Y,
            onPieceDropOffBoard: te,
            onPromotionCheck: Se,
            onPromotionPieceSelect: R,
            onRightClickDown: ju,
            onRightClickUp: Jt,
            onSparePieceDrop: Q,
            onSquareClick: I,
            positionDifferences: wn,
            premoves: wa,
            promoteFromSquare: Il,
            promoteToSquare: wr,
            promotionDialogVariant: me,
            setLastSquareDraggedOver: lr,
            setPromoteFromSquare: Ca,
            setPromoteToSquare: xa,
            setShowPromoteDialog: Ra,
            showBoardNotation: le,
            showPromoteDialog: Nt,
            snapToCursor: gt
        };
        return D.jsx(O0.Provider, Object.assign({
            value: st
        }, {
            children: g
        }));
    });
    function Ub({ row: l, col: r }) {
        const { boardOrientation: i, boardWidth: o, customDarkSquareStyle: s, customLightSquareStyle: f, customNotationStyle: d } = xn(), h = f.backgroundColor, g = s.backgroundColor, m = r === 0, y = l === 7, E = m && y;
        function b() {
            return i === "white" ? 8 - l : l + 1;
        }
        function O() {
            return i === "black" ? Kl[7 - r] : Kl[r];
        }
        function _() {
            return D.jsxs(D.Fragment, {
                children: [
                    D.jsx("div", Object.assign({
                        style: Object.assign(Object.assign({
                            zIndex: 3,
                            position: "absolute"
                        }, {
                            color: h
                        }), cg(o, d))
                    }, {
                        children: b()
                    })),
                    D.jsx("div", Object.assign({
                        style: Object.assign(Object.assign({
                            zIndex: 3,
                            position: "absolute"
                        }, {
                            color: h
                        }), sg(o, d))
                    }, {
                        children: O()
                    }))
                ]
            });
        }
        function x() {
            return D.jsx("div", Object.assign({
                style: Object.assign(Object.assign({
                    userSelect: "none",
                    zIndex: 3,
                    position: "absolute"
                }, {
                    color: r % 2 !== 0 ? g : h
                }), sg(o, d))
            }, {
                children: O()
            }));
        }
        function P() {
            return D.jsx("div", Object.assign({
                style: Object.assign(Object.assign({
                    userSelect: "none",
                    zIndex: 3,
                    position: "absolute"
                }, i === "black" ? {
                    color: l % 2 === 0 ? g : h
                } : {
                    color: l % 2 === 0 ? g : h
                }), cg(o, d))
            }, {
                children: b()
            }));
        }
        return E ? _() : y ? x() : m ? P() : null;
    }
    const sg = (l, r)=>Object.assign({
            alignSelf: "flex-end",
            paddingLeft: l / 8 - l / 48,
            fontSize: l / 48
        }, r), cg = (l, r)=>Object.assign({
            alignSelf: "flex-start",
            paddingRight: l / 8 - l / 48,
            fontSize: l / 48
        }, r), T0 = S.createContext({
        dragDropManager: void 0
    });
    function Qt(l) {
        return "Minified Redux error #" + l + "; visit https://redux.js.org/Errors?code=" + l + " for the full message or use the non-minified dev environment for full errors. ";
    }
    var fg = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable";
    }(), dg = function() {
        return Math.random().toString(36).substring(7).split("").join(".");
    }, hg = {
        INIT: "@@redux/INIT" + dg(),
        REPLACE: "@@redux/REPLACE" + dg()
    };
    function qb(l) {
        if (typeof l != "object" || l === null) return !1;
        for(var r = l; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(l) === r;
    }
    function _0(l, r, i) {
        var o;
        if (typeof r == "function" && typeof i == "function" || typeof i == "function" && typeof arguments[3] == "function") throw new Error(Qt(0));
        if (typeof r == "function" && typeof i > "u" && (i = r, r = void 0), typeof i < "u") {
            if (typeof i != "function") throw new Error(Qt(1));
            return i(_0)(l, r);
        }
        if (typeof l != "function") throw new Error(Qt(2));
        var s = l, f = r, d = [], h = d, g = !1;
        function m() {
            h === d && (h = d.slice());
        }
        function y() {
            if (g) throw new Error(Qt(3));
            return f;
        }
        function E(x) {
            if (typeof x != "function") throw new Error(Qt(4));
            if (g) throw new Error(Qt(5));
            var P = !0;
            return m(), h.push(x), function() {
                if (P) {
                    if (g) throw new Error(Qt(6));
                    P = !1, m();
                    var k = h.indexOf(x);
                    h.splice(k, 1), d = null;
                }
            };
        }
        function b(x) {
            if (!qb(x)) throw new Error(Qt(7));
            if (typeof x.type > "u") throw new Error(Qt(8));
            if (g) throw new Error(Qt(9));
            try {
                g = !0, f = s(f, x);
            } finally{
                g = !1;
            }
            for(var P = d = h, A = 0; A < P.length; A++){
                var k = P[A];
                k();
            }
            return x;
        }
        function O(x) {
            if (typeof x != "function") throw new Error(Qt(10));
            s = x, b({
                type: hg.REPLACE
            });
        }
        function _() {
            var x, P = E;
            return x = {
                subscribe: function(k) {
                    if (typeof k != "object" || k === null) throw new Error(Qt(11));
                    function B() {
                        k.next && k.next(y());
                    }
                    B();
                    var G = P(B);
                    return {
                        unsubscribe: G
                    };
                }
            }, x[fg] = function() {
                return this;
            }, x;
        }
        return b({
            type: hg.INIT
        }), o = {
            dispatch: b,
            subscribe: E,
            getState: y,
            replaceReducer: O
        }, o[fg] = _, o;
    }
    function oe(l, r, ...i) {
        if (Hb() && r === void 0) throw new Error("invariant requires an error message argument");
        if (!l) {
            let o;
            if (r === void 0) o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                let s = 0;
                o = new Error(r.replace(/%s/g, function() {
                    return i[s++];
                })), o.name = "Invariant Violation";
            }
            throw o.framesToPop = 1, o;
        }
    }
    function Hb() {
        return typeof process < "u" && !0;
    }
    function Qb(l, r, i) {
        return r.split(".").reduce((o, s)=>o && o[s] ? o[s] : i || null, l);
    }
    function Kb(l, r) {
        return l.filter((i)=>i !== r);
    }
    function D0(l) {
        return typeof l == "object";
    }
    function Gb(l, r) {
        const i = new Map, o = (f)=>{
            i.set(f, i.has(f) ? i.get(f) + 1 : 1);
        };
        l.forEach(o), r.forEach(o);
        const s = [];
        return i.forEach((f, d)=>{
            f === 1 && s.push(d);
        }), s;
    }
    function Yb(l, r) {
        return l.filter((i)=>r.indexOf(i) > -1);
    }
    const kc = "dnd-core/INIT_COORDS", Ru = "dnd-core/BEGIN_DRAG", Bc = "dnd-core/PUBLISH_DRAG_SOURCE", Cu = "dnd-core/HOVER", xu = "dnd-core/DROP", wu = "dnd-core/END_DRAG";
    function pg(l, r) {
        return {
            type: kc,
            payload: {
                sourceClientOffset: r || null,
                clientOffset: l || null
            }
        };
    }
    const Xb = {
        type: kc,
        payload: {
            clientOffset: null,
            sourceClientOffset: null
        }
    };
    function Ib(l) {
        return function(i = [], o = {
            publishSource: !0
        }) {
            const { publishSource: s = !0, clientOffset: f, getSourceClientOffset: d } = o, h = l.getMonitor(), g = l.getRegistry();
            l.dispatch(pg(f)), Vb(i, h, g);
            const m = Jb(i, h);
            if (m == null) {
                l.dispatch(Xb);
                return;
            }
            let y = null;
            if (f) {
                if (!d) throw new Error("getSourceClientOffset must be defined");
                Zb(d), y = d(m);
            }
            l.dispatch(pg(f, y));
            const b = g.getSource(m).beginDrag(h, m);
            if (b == null) return;
            $b(b), g.pinSource(m);
            const O = g.getSourceType(m);
            return {
                type: Ru,
                payload: {
                    itemType: O,
                    item: b,
                    sourceId: m,
                    clientOffset: f || null,
                    sourceClientOffset: y || null,
                    isSourcePublic: !!s
                }
            };
        };
    }
    function Vb(l, r, i) {
        oe(!r.isDragging(), "Cannot call beginDrag while dragging."), l.forEach(function(o) {
            oe(i.getSource(o), "Expected sourceIds to be registered.");
        });
    }
    function Zb(l) {
        oe(typeof l == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
    }
    function $b(l) {
        oe(D0(l), "Item must be an object.");
    }
    function Jb(l, r) {
        let i = null;
        for(let o = l.length - 1; o >= 0; o--)if (r.canDragSource(l[o])) {
            i = l[o];
            break;
        }
        return i;
    }
    function Wb(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function Fb(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, o = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            }))), o.forEach(function(s) {
                Wb(l, s, i[s]);
            });
        }
        return l;
    }
    function eS(l) {
        return function(i = {}) {
            const o = l.getMonitor(), s = l.getRegistry();
            tS(o), aS(o).forEach((d, h)=>{
                const g = nS(d, h, s, o), m = {
                    type: xu,
                    payload: {
                        dropResult: Fb({}, i, g)
                    }
                };
                l.dispatch(m);
            });
        };
    }
    function tS(l) {
        oe(l.isDragging(), "Cannot call drop while not dragging."), oe(!l.didDrop(), "Cannot call drop twice during one drag operation.");
    }
    function nS(l, r, i, o) {
        const s = i.getTarget(l);
        let f = s ? s.drop(o, l) : void 0;
        return rS(f), typeof f > "u" && (f = r === 0 ? {} : o.getDropResult()), f;
    }
    function rS(l) {
        oe(typeof l > "u" || D0(l), "Drop result must either be an object or undefined.");
    }
    function aS(l) {
        const r = l.getTargetIds().filter(l.canDropOnTarget, l);
        return r.reverse(), r;
    }
    function lS(l) {
        return function() {
            const i = l.getMonitor(), o = l.getRegistry();
            iS(i);
            const s = i.getSourceId();
            return s != null && (o.getSource(s, !0).endDrag(i, s), o.unpinSource()), {
                type: wu
            };
        };
    }
    function iS(l) {
        oe(l.isDragging(), "Cannot call endDrag while not dragging.");
    }
    function yc(l, r) {
        return r === null ? l === null : Array.isArray(l) ? l.some((i)=>i === r) : l === r;
    }
    function uS(l) {
        return function(i, { clientOffset: o } = {}) {
            oS(i);
            const s = i.slice(0), f = l.getMonitor(), d = l.getRegistry(), h = f.getItemType();
            return cS(s, d, h), sS(s, f, d), fS(s, f, d), {
                type: Cu,
                payload: {
                    targetIds: s,
                    clientOffset: o || null
                }
            };
        };
    }
    function oS(l) {
        oe(Array.isArray(l), "Expected targetIds to be an array.");
    }
    function sS(l, r, i) {
        oe(r.isDragging(), "Cannot call hover while not dragging."), oe(!r.didDrop(), "Cannot call hover after drop.");
        for(let o = 0; o < l.length; o++){
            const s = l[o];
            oe(l.lastIndexOf(s) === o, "Expected targetIds to be unique in the passed array.");
            const f = i.getTarget(s);
            oe(f, "Expected targetIds to be registered.");
        }
    }
    function cS(l, r, i) {
        for(let o = l.length - 1; o >= 0; o--){
            const s = l[o], f = r.getTargetType(s);
            yc(f, i) || l.splice(o, 1);
        }
    }
    function fS(l, r, i) {
        l.forEach(function(o) {
            i.getTarget(o).hover(r, o);
        });
    }
    function dS(l) {
        return function() {
            if (l.getMonitor().isDragging()) return {
                type: Bc
            };
        };
    }
    function hS(l) {
        return {
            beginDrag: Ib(l),
            publishDragSource: dS(l),
            hover: uS(l),
            drop: eS(l),
            endDrag: lS(l)
        };
    }
    class pS {
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
            function o(f) {
                return (...d)=>{
                    const h = f.apply(r, d);
                    typeof h < "u" && i(h);
                };
            }
            const s = hS(this);
            return Object.keys(s).reduce((f, d)=>{
                const h = s[d];
                return f[d] = o(h), f;
            }, {});
        }
        dispatch(r) {
            this.store.dispatch(r);
        }
        constructor(r, i){
            this.isSetUp = !1, this.handleRefCountChange = ()=>{
                const o = this.store.getState().refCount > 0;
                this.backend && (o && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !o && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
            }, this.store = r, this.monitor = i, r.subscribe(this.handleRefCountChange);
        }
    }
    function gS(l, r) {
        return {
            x: l.x + r.x,
            y: l.y + r.y
        };
    }
    function R0(l, r) {
        return {
            x: l.x - r.x,
            y: l.y - r.y
        };
    }
    function mS(l) {
        const { clientOffset: r, initialClientOffset: i, initialSourceClientOffset: o } = l;
        return !r || !i || !o ? null : R0(gS(r, o), i);
    }
    function vS(l) {
        const { clientOffset: r, initialClientOffset: i } = l;
        return !r || !i ? null : R0(r, i);
    }
    const Ul = [], zc = [];
    Ul.__IS_NONE__ = !0;
    zc.__IS_ALL__ = !0;
    function yS(l, r) {
        return l === Ul ? !1 : l === zc || typeof r > "u" ? !0 : Yb(r, l).length > 0;
    }
    class bS {
        subscribeToStateChange(r, i = {}) {
            const { handlerIds: o } = i;
            oe(typeof r == "function", "listener must be a function."), oe(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
            let s = this.store.getState().stateId;
            const f = ()=>{
                const d = this.store.getState(), h = d.stateId;
                try {
                    h === s || h === s + 1 && !yS(d.dirtyHandlerIds, o) || r();
                } finally{
                    s = h;
                }
            };
            return this.store.subscribe(f);
        }
        subscribeToOffsetChange(r) {
            oe(typeof r == "function", "listener must be a function.");
            let i = this.store.getState().dragOffset;
            const o = ()=>{
                const s = this.store.getState().dragOffset;
                s !== i && (i = s, r());
            };
            return this.store.subscribe(o);
        }
        canDragSource(r) {
            if (!r) return !1;
            const i = this.registry.getSource(r);
            return oe(i, `Expected to find a valid source. sourceId=${r}`), this.isDragging() ? !1 : i.canDrag(this, r);
        }
        canDropOnTarget(r) {
            if (!r) return !1;
            const i = this.registry.getTarget(r);
            if (oe(i, `Expected to find a valid target. targetId=${r}`), !this.isDragging() || this.didDrop()) return !1;
            const o = this.registry.getTargetType(r), s = this.getItemType();
            return yc(o, s) && i.canDrop(this, r);
        }
        isDragging() {
            return !!this.getItemType();
        }
        isDraggingSource(r) {
            if (!r) return !1;
            const i = this.registry.getSource(r, !0);
            if (oe(i, `Expected to find a valid source. sourceId=${r}`), !this.isDragging() || !this.isSourcePublic()) return !1;
            const o = this.registry.getSourceType(r), s = this.getItemType();
            return o !== s ? !1 : i.isDragging(this, r);
        }
        isOverTarget(r, i = {
            shallow: !1
        }) {
            if (!r) return !1;
            const { shallow: o } = i;
            if (!this.isDragging()) return !1;
            const s = this.registry.getTargetType(r), f = this.getItemType();
            if (f && !yc(s, f)) return !1;
            const d = this.getTargetIds();
            if (!d.length) return !1;
            const h = d.indexOf(r);
            return o ? h === d.length - 1 : h > -1;
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
            return mS(this.store.getState().dragOffset);
        }
        getDifferenceFromInitialOffset() {
            return vS(this.store.getState().dragOffset);
        }
        constructor(r, i){
            this.store = r, this.registry = i;
        }
    }
    const gg = typeof global < "u" ? global : self, C0 = gg.MutationObserver || gg.WebKitMutationObserver;
    function x0(l) {
        return function() {
            const i = setTimeout(s, 0), o = setInterval(s, 50);
            function s() {
                clearTimeout(i), clearInterval(o), l();
            }
        };
    }
    function SS(l) {
        let r = 1;
        const i = new C0(l), o = document.createTextNode("");
        return i.observe(o, {
            characterData: !0
        }), function() {
            r = -r, o.data = r;
        };
    }
    const ES = typeof C0 == "function" ? SS : x0;
    class OS {
        enqueueTask(r) {
            const { queue: i, requestFlush: o } = this;
            i.length || (o(), this.flushing = !0), i[i.length] = r;
        }
        constructor(){
            this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = ()=>{
                const { queue: r } = this;
                for(; this.index < r.length;){
                    const i = this.index;
                    if (this.index++, r[i].call(), this.index > this.capacity) {
                        for(let o = 0, s = r.length - this.index; o < s; o++)r[o] = r[o + this.index];
                        r.length -= this.index, this.index = 0;
                    }
                }
                r.length = 0, this.index = 0, this.flushing = !1;
            }, this.registerPendingError = (r)=>{
                this.pendingErrors.push(r), this.requestErrorThrow();
            }, this.requestFlush = ES(this.flush), this.requestErrorThrow = x0(()=>{
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
            });
        }
    }
    class TS {
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
    class _S {
        create(r) {
            const i = this.freeTasks, o = i.length ? i.pop() : new TS(this.onError, (s)=>i[i.length] = s);
            return o.task = r, o;
        }
        constructor(r){
            this.onError = r, this.freeTasks = [];
        }
    }
    const w0 = new OS, DS = new _S(w0.registerPendingError);
    function RS(l) {
        w0.enqueueTask(DS.create(l));
    }
    const Uc = "dnd-core/ADD_SOURCE", qc = "dnd-core/ADD_TARGET", Hc = "dnd-core/REMOVE_SOURCE", Mu = "dnd-core/REMOVE_TARGET";
    function CS(l) {
        return {
            type: Uc,
            payload: {
                sourceId: l
            }
        };
    }
    function xS(l) {
        return {
            type: qc,
            payload: {
                targetId: l
            }
        };
    }
    function wS(l) {
        return {
            type: Hc,
            payload: {
                sourceId: l
            }
        };
    }
    function MS(l) {
        return {
            type: Mu,
            payload: {
                targetId: l
            }
        };
    }
    function NS(l) {
        oe(typeof l.canDrag == "function", "Expected canDrag to be a function."), oe(typeof l.beginDrag == "function", "Expected beginDrag to be a function."), oe(typeof l.endDrag == "function", "Expected endDrag to be a function.");
    }
    function AS(l) {
        oe(typeof l.canDrop == "function", "Expected canDrop to be a function."), oe(typeof l.hover == "function", "Expected hover to be a function."), oe(typeof l.drop == "function", "Expected beginDrag to be a function.");
    }
    function bc(l, r) {
        if (r && Array.isArray(l)) {
            l.forEach((i)=>bc(i, !1));
            return;
        }
        oe(typeof l == "string" || typeof l == "symbol", r ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
    }
    var Gt;
    (function(l) {
        l.SOURCE = "SOURCE", l.TARGET = "TARGET";
    })(Gt || (Gt = {}));
    let PS = 0;
    function jS() {
        return PS++;
    }
    function LS(l) {
        const r = jS().toString();
        switch(l){
            case Gt.SOURCE:
                return `S${r}`;
            case Gt.TARGET:
                return `T${r}`;
            default:
                throw new Error(`Unknown Handler Role: ${l}`);
        }
    }
    function mg(l) {
        switch(l[0]){
            case "S":
                return Gt.SOURCE;
            case "T":
                return Gt.TARGET;
            default:
                throw new Error(`Cannot parse handler ID: ${l}`);
        }
    }
    function vg(l, r) {
        const i = l.entries();
        let o = !1;
        do {
            const { done: s, value: [, f] } = i.next();
            if (f === r) return !0;
            o = !!s;
        }while (!o);
        return !1;
    }
    class kS {
        addSource(r, i) {
            bc(r), NS(i);
            const o = this.addHandler(Gt.SOURCE, r, i);
            return this.store.dispatch(CS(o)), o;
        }
        addTarget(r, i) {
            bc(r, !0), AS(i);
            const o = this.addHandler(Gt.TARGET, r, i);
            return this.store.dispatch(xS(o)), o;
        }
        containsHandler(r) {
            return vg(this.dragSources, r) || vg(this.dropTargets, r);
        }
        getSource(r, i = !1) {
            return oe(this.isSourceId(r), "Expected a valid source ID."), i && r === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(r);
        }
        getTarget(r) {
            return oe(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
        }
        getSourceType(r) {
            return oe(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
        }
        getTargetType(r) {
            return oe(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
        }
        isSourceId(r) {
            return mg(r) === Gt.SOURCE;
        }
        isTargetId(r) {
            return mg(r) === Gt.TARGET;
        }
        removeSource(r) {
            oe(this.getSource(r), "Expected an existing source."), this.store.dispatch(wS(r)), RS(()=>{
                this.dragSources.delete(r), this.types.delete(r);
            });
        }
        removeTarget(r) {
            oe(this.getTarget(r), "Expected an existing target."), this.store.dispatch(MS(r)), this.dropTargets.delete(r), this.types.delete(r);
        }
        pinSource(r) {
            const i = this.getSource(r);
            oe(i, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = i;
        }
        unpinSource() {
            oe(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
        }
        addHandler(r, i, o) {
            const s = LS(r);
            return this.types.set(s, i), r === Gt.SOURCE ? this.dragSources.set(s, o) : r === Gt.TARGET && this.dropTargets.set(s, o), s;
        }
        constructor(r){
            this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = r;
        }
    }
    const BS = (l, r)=>l === r;
    function zS(l, r) {
        return !l && !r ? !0 : !l || !r ? !1 : l.x === r.x && l.y === r.y;
    }
    function US(l, r, i = BS) {
        if (l.length !== r.length) return !1;
        for(let o = 0; o < l.length; ++o)if (!i(l[o], r[o])) return !1;
        return !0;
    }
    function qS(l = Ul, r) {
        switch(r.type){
            case Cu:
                break;
            case Uc:
            case qc:
            case Mu:
            case Hc:
                return Ul;
            case Ru:
            case Bc:
            case wu:
            case xu:
            default:
                return zc;
        }
        const { targetIds: i = [], prevTargetIds: o = [] } = r.payload, s = Gb(i, o);
        if (!(s.length > 0 || !US(i, o))) return Ul;
        const d = o[o.length - 1], h = i[i.length - 1];
        return d !== h && (d && s.push(d), h && s.push(h)), s;
    }
    function HS(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function QS(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, o = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            }))), o.forEach(function(s) {
                HS(l, s, i[s]);
            });
        }
        return l;
    }
    const yg = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null
    };
    function KS(l = yg, r) {
        const { payload: i } = r;
        switch(r.type){
            case kc:
            case Ru:
                return {
                    initialSourceClientOffset: i.sourceClientOffset,
                    initialClientOffset: i.clientOffset,
                    clientOffset: i.clientOffset
                };
            case Cu:
                return zS(l.clientOffset, i.clientOffset) ? l : QS({}, l, {
                    clientOffset: i.clientOffset
                });
            case wu:
            case xu:
                return yg;
            default:
                return l;
        }
    }
    function GS(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function Sa(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, o = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            }))), o.forEach(function(s) {
                GS(l, s, i[s]);
            });
        }
        return l;
    }
    const YS = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null
    };
    function XS(l = YS, r) {
        const { payload: i } = r;
        switch(r.type){
            case Ru:
                return Sa({}, l, {
                    itemType: i.itemType,
                    item: i.item,
                    sourceId: i.sourceId,
                    isSourcePublic: i.isSourcePublic,
                    dropResult: null,
                    didDrop: !1
                });
            case Bc:
                return Sa({}, l, {
                    isSourcePublic: !0
                });
            case Cu:
                return Sa({}, l, {
                    targetIds: i.targetIds
                });
            case Mu:
                return l.targetIds.indexOf(i.targetId) === -1 ? l : Sa({}, l, {
                    targetIds: Kb(l.targetIds, i.targetId)
                });
            case xu:
                return Sa({}, l, {
                    dropResult: i.dropResult,
                    didDrop: !0,
                    targetIds: []
                });
            case wu:
                return Sa({}, l, {
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
    function IS(l = 0, r) {
        switch(r.type){
            case Uc:
            case qc:
                return l + 1;
            case Hc:
            case Mu:
                return l - 1;
            default:
                return l;
        }
    }
    function VS(l = 0) {
        return l + 1;
    }
    function ZS(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function $S(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, o = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            }))), o.forEach(function(s) {
                ZS(l, s, i[s]);
            });
        }
        return l;
    }
    function JS(l = {}, r) {
        return {
            dirtyHandlerIds: qS(l.dirtyHandlerIds, {
                type: r.type,
                payload: $S({}, r.payload, {
                    prevTargetIds: Qb(l, "dragOperation.targetIds", [])
                })
            }),
            dragOffset: KS(l.dragOffset, r),
            refCount: IS(l.refCount, r),
            dragOperation: XS(l.dragOperation, r),
            stateId: VS(l.stateId)
        };
    }
    function WS(l, r = void 0, i = {}, o = !1) {
        const s = FS(o), f = new bS(s, new kS(s)), d = new pS(s, f), h = l(d, r, i);
        return d.receiveBackend(h), d;
    }
    function FS(l) {
        const r = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
        return _0(JS, l && r && r({
            name: "dnd-core",
            instanceId: "dnd-core"
        }));
    }
    function e3(l, r) {
        if (l == null) return {};
        var i = t3(l, r), o, s;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            for(s = 0; s < f.length; s++)o = f[s], !(r.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(l, o) && (i[o] = l[o]);
        }
        return i;
    }
    function t3(l, r) {
        if (l == null) return {};
        var i = {}, o = Object.keys(l), s, f;
        for(f = 0; f < o.length; f++)s = o[f], !(r.indexOf(s) >= 0) && (i[s] = l[s]);
        return i;
    }
    let bg = 0;
    const yu = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
    var n3 = S.memo(function(r) {
        var { children: i } = r, o = e3(r, [
            "children"
        ]);
        const [s, f] = r3(o);
        return S.useEffect(()=>{
            if (f) {
                const d = M0();
                return ++bg, ()=>{
                    --bg === 0 && (d[yu] = null);
                };
            }
        }, []), D.jsx(T0.Provider, {
            value: s,
            children: i
        });
    });
    function r3(l) {
        if ("manager" in l) return [
            {
                dragDropManager: l.manager
            },
            !1
        ];
        const r = a3(l.backend, l.context, l.options, l.debugMode), i = !l.context;
        return [
            r,
            i
        ];
    }
    function a3(l, r = M0(), i, o) {
        const s = r;
        return s[yu] || (s[yu] = {
            dragDropManager: WS(l, r, i, o)
        }), s[yu];
    }
    function M0() {
        return typeof global < "u" ? global : window;
    }
    var l3 = function l(r, i) {
        if (r === i) return !0;
        if (r && i && typeof r == "object" && typeof i == "object") {
            if (r.constructor !== i.constructor) return !1;
            var o, s, f;
            if (Array.isArray(r)) {
                if (o = r.length, o != i.length) return !1;
                for(s = o; s-- !== 0;)if (!l(r[s], i[s])) return !1;
                return !0;
            }
            if (r.constructor === RegExp) return r.source === i.source && r.flags === i.flags;
            if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === i.valueOf();
            if (r.toString !== Object.prototype.toString) return r.toString() === i.toString();
            if (f = Object.keys(r), o = f.length, o !== Object.keys(i).length) return !1;
            for(s = o; s-- !== 0;)if (!Object.prototype.hasOwnProperty.call(i, f[s])) return !1;
            for(s = o; s-- !== 0;){
                var d = f[s];
                if (!l(r[d], i[d])) return !1;
            }
            return !0;
        }
        return r !== r && i !== i;
    };
    const Rr = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
    function N0(l, r, i) {
        const [o, s] = S.useState(()=>r(l)), f = S.useCallback(()=>{
            const d = r(l);
            l3(o, d) || (s(d), i && i());
        }, [
            o,
            l,
            i
        ]);
        return Rr(f), [
            o,
            f
        ];
    }
    function i3(l, r, i) {
        const [o, s] = N0(l, r, i);
        return Rr(function() {
            const d = l.getHandlerId();
            if (d != null) return l.subscribeToStateChange(s, {
                handlerIds: [
                    d
                ]
            });
        }, [
            l,
            s
        ]), o;
    }
    function A0(l, r, i) {
        return i3(r, l || (()=>({})), ()=>i.reconnect());
    }
    function P0(l, r) {
        const i = [
            ...r || []
        ];
        return r == null && typeof l != "function" && i.push(l), S.useMemo(()=>typeof l == "function" ? l() : l, i);
    }
    function u3(l) {
        return S.useMemo(()=>l.hooks.dragSource(), [
            l
        ]);
    }
    function o3(l) {
        return S.useMemo(()=>l.hooks.dragPreview(), [
            l
        ]);
    }
    let rc = !1, ac = !1;
    class s3 {
        receiveHandlerId(r) {
            this.sourceId = r;
        }
        getHandlerId() {
            return this.sourceId;
        }
        canDrag() {
            oe(!rc, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
            try {
                return rc = !0, this.internalMonitor.canDragSource(this.sourceId);
            } finally{
                rc = !1;
            }
        }
        isDragging() {
            if (!this.sourceId) return !1;
            oe(!ac, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
            try {
                return ac = !0, this.internalMonitor.isDraggingSource(this.sourceId);
            } finally{
                ac = !1;
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
    let lc = !1;
    class c3 {
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
            oe(!lc, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
            try {
                return lc = !0, this.internalMonitor.canDropOnTarget(this.targetId);
            } finally{
                lc = !1;
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
    function f3(l, r, i) {
        const o = i.getRegistry(), s = o.addTarget(l, r);
        return [
            s,
            ()=>o.removeTarget(s)
        ];
    }
    function d3(l, r, i) {
        const o = i.getRegistry(), s = o.addSource(l, r);
        return [
            s,
            ()=>o.removeSource(s)
        ];
    }
    function Sc(l, r, i, o) {
        let s;
        if (s !== void 0) return !!s;
        if (l === r) return !0;
        if (typeof l != "object" || !l || typeof r != "object" || !r) return !1;
        const f = Object.keys(l), d = Object.keys(r);
        if (f.length !== d.length) return !1;
        const h = Object.prototype.hasOwnProperty.bind(r);
        for(let g = 0; g < f.length; g++){
            const m = f[g];
            if (!h(m)) return !1;
            const y = l[m], E = r[m];
            if (s = void 0, s === !1 || s === void 0 && y !== E) return !1;
        }
        return !0;
    }
    function Ec(l) {
        return l !== null && typeof l == "object" && Object.prototype.hasOwnProperty.call(l, "current");
    }
    function h3(l) {
        if (typeof l.type == "string") return;
        const r = l.type.displayName || l.type.name || "the component";
        throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${r} into a <div>, or turn it into a drag source or a drop target itself.`);
    }
    function p3(l) {
        return (r = null, i = null)=>{
            if (!S.isValidElement(r)) {
                const f = r;
                return l(f, i), f;
            }
            const o = r;
            return h3(o), g3(o, i ? (f)=>l(f, i) : l);
        };
    }
    function j0(l) {
        const r = {};
        return Object.keys(l).forEach((i)=>{
            const o = l[i];
            if (i.endsWith("Ref")) r[i] = l[i];
            else {
                const s = p3(o);
                r[i] = ()=>s;
            }
        }), r;
    }
    function Sg(l, r) {
        typeof l == "function" ? l(r) : l.current = r;
    }
    function g3(l, r) {
        const i = l.ref;
        return oe(typeof i != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), i ? S.cloneElement(l, {
            ref: (o)=>{
                Sg(i, o), Sg(r, o);
            }
        }) : S.cloneElement(l, {
            ref: r
        });
    }
    class m3 {
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
            const i = this.dragPreview, o = r || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
            if (o && this.disconnectDragPreview(), !!this.handlerId) {
                if (!i) {
                    this.lastConnectedDragPreview = i;
                    return;
                }
                o && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = i, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, i, this.dragPreviewOptions));
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
            return !Sc(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
        }
        didDragPreviewOptionsChange() {
            return !Sc(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
            this.hooks = j0({
                dragSource: (i, o)=>{
                    this.clearDragSource(), this.dragSourceOptions = o || null, Ec(i) ? this.dragSourceRef = i : this.dragSourceNode = i, this.reconnectDragSource();
                },
                dragPreview: (i, o)=>{
                    this.clearDragPreview(), this.dragPreviewOptions = o || null, Ec(i) ? this.dragPreviewRef = i : this.dragPreviewNode = i, this.reconnectDragPreview();
                }
            }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = r;
        }
    }
    class v3 {
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
            return !Sc(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
            this.hooks = j0({
                dropTarget: (i, o)=>{
                    this.clearDropTarget(), this.dropTargetOptions = o, Ec(i) ? this.dropTargetRef = i : this.dropTargetNode = i, this.reconnect();
                }
            }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = r;
        }
    }
    function xr() {
        const { dragDropManager: l } = S.useContext(T0);
        return oe(l != null, "Expected drag drop context"), l;
    }
    function y3(l, r) {
        const i = xr(), o = S.useMemo(()=>new m3(i.getBackend()), [
            i
        ]);
        return Rr(()=>(o.dragSourceOptions = l || null, o.reconnect(), ()=>o.disconnectDragSource()), [
            o,
            l
        ]), Rr(()=>(o.dragPreviewOptions = r || null, o.reconnect(), ()=>o.disconnectDragPreview()), [
            o,
            r
        ]), o;
    }
    function b3() {
        const l = xr();
        return S.useMemo(()=>new s3(l), [
            l
        ]);
    }
    class S3 {
        beginDrag() {
            const r = this.spec, i = this.monitor;
            let o = null;
            return typeof r.item == "object" ? o = r.item : typeof r.item == "function" ? o = r.item(i) : o = {}, o ?? null;
        }
        canDrag() {
            const r = this.spec, i = this.monitor;
            return typeof r.canDrag == "boolean" ? r.canDrag : typeof r.canDrag == "function" ? r.canDrag(i) : !0;
        }
        isDragging(r, i) {
            const o = this.spec, s = this.monitor, { isDragging: f } = o;
            return f ? f(s) : i === r.getSourceId();
        }
        endDrag() {
            const r = this.spec, i = this.monitor, o = this.connector, { end: s } = r;
            s && s(i.getItem(), i), o.reconnect();
        }
        constructor(r, i, o){
            this.spec = r, this.monitor = i, this.connector = o;
        }
    }
    function E3(l, r, i) {
        const o = S.useMemo(()=>new S3(l, r, i), [
            r,
            i
        ]);
        return S.useEffect(()=>{
            o.spec = l;
        }, [
            l
        ]), o;
    }
    function O3(l) {
        return S.useMemo(()=>{
            const r = l.type;
            return oe(r != null, "spec.type must be defined"), r;
        }, [
            l
        ]);
    }
    function T3(l, r, i) {
        const o = xr(), s = E3(l, r, i), f = O3(l);
        Rr(function() {
            if (f != null) {
                const [h, g] = d3(f, s, o);
                return r.receiveHandlerId(h), i.receiveHandlerId(h), g;
            }
        }, [
            o,
            r,
            i,
            s,
            f
        ]);
    }
    function _3(l, r) {
        const i = P0(l, r);
        oe(!i.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
        const o = b3(), s = y3(i.options, i.previewOptions);
        return T3(i, o, s), [
            A0(i.collect, o, s),
            u3(s),
            o3(s)
        ];
    }
    function D3(l) {
        const i = xr().getMonitor(), [o, s] = N0(i, l);
        return S.useEffect(()=>i.subscribeToOffsetChange(s)), S.useEffect(()=>i.subscribeToStateChange(s)), o;
    }
    function R3(l) {
        return S.useMemo(()=>l.hooks.dropTarget(), [
            l
        ]);
    }
    function C3(l) {
        const r = xr(), i = S.useMemo(()=>new v3(r.getBackend()), [
            r
        ]);
        return Rr(()=>(i.dropTargetOptions = l || null, i.reconnect(), ()=>i.disconnectDropTarget()), [
            l
        ]), i;
    }
    function x3() {
        const l = xr();
        return S.useMemo(()=>new c3(l), [
            l
        ]);
    }
    function w3(l) {
        const { accept: r } = l;
        return S.useMemo(()=>(oe(l.accept != null, "accept must be defined"), Array.isArray(r) ? r : [
                r
            ]), [
            r
        ]);
    }
    class M3 {
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
    function N3(l, r) {
        const i = S.useMemo(()=>new M3(l, r), [
            r
        ]);
        return S.useEffect(()=>{
            i.spec = l;
        }, [
            l
        ]), i;
    }
    function A3(l, r, i) {
        const o = xr(), s = N3(l, r), f = w3(l);
        Rr(function() {
            const [h, g] = f3(f, s, o);
            return r.receiveHandlerId(h), i.receiveHandlerId(h), g;
        }, [
            o,
            r,
            s,
            i,
            f.map((d)=>d.toString()).join("|")
        ]);
    }
    function P3(l, r) {
        const i = P0(l, r), o = x3(), s = C3(i.options);
        return A3(i, o, s), [
            A0(i.collect, o, s),
            R3(s)
        ];
    }
    function L0(l) {
        let r = null;
        return ()=>(r == null && (r = l()), r);
    }
    function j3(l, r) {
        return l.filter((i)=>i !== r);
    }
    function L3(l, r) {
        const i = new Set, o = (f)=>i.add(f);
        l.forEach(o), r.forEach(o);
        const s = [];
        return i.forEach((f)=>s.push(f)), s;
    }
    class k3 {
        enter(r) {
            const i = this.entered.length, o = (s)=>this.isNodeInDocument(s) && (!s.contains || s.contains(r));
            return this.entered = L3(this.entered.filter(o), [
                r
            ]), i === 0 && this.entered.length > 0;
        }
        leave(r) {
            const i = this.entered.length;
            return this.entered = j3(this.entered.filter(this.isNodeInDocument), r), i > 0 && this.entered.length === 0;
        }
        reset() {
            this.entered = [];
        }
        constructor(r){
            this.entered = [], this.isNodeInDocument = r;
        }
    }
    class B3 {
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
                Object.keys(this.config.exposeProperties).forEach((o)=>{
                    const s = this.config.exposeProperties[o];
                    s != null && (i[o] = {
                        value: s(r, this.config.matchesTypes),
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
    const k0 = "__NATIVE_FILE__", B0 = "__NATIVE_URL__", z0 = "__NATIVE_TEXT__", U0 = "__NATIVE_HTML__";
    var Eg = Object.freeze({
        __proto__: null,
        FILE: k0,
        HTML: U0,
        TEXT: z0,
        URL: B0
    });
    function ic(l, r, i) {
        const o = r.reduce((s, f)=>s || l.getData(f), "");
        return o ?? i;
    }
    const Oc = {
        [k0]: {
            exposeProperties: {
                files: (l)=>Array.prototype.slice.call(l.files),
                items: (l)=>l.items,
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Files"
            ]
        },
        [U0]: {
            exposeProperties: {
                html: (l, r)=>ic(l, r, ""),
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Html",
                "text/html"
            ]
        },
        [B0]: {
            exposeProperties: {
                urls: (l, r)=>ic(l, r, "").split(`
`),
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Url",
                "text/uri-list"
            ]
        },
        [z0]: {
            exposeProperties: {
                text: (l, r)=>ic(l, r, ""),
                dataTransfer: (l)=>l
            },
            matchesTypes: [
                "Text",
                "text/plain"
            ]
        }
    };
    function z3(l, r) {
        const i = Oc[l];
        if (!i) throw new Error(`native type ${l} has no configuration`);
        const o = new B3(i);
        return o.loadDataTransfer(r), o;
    }
    function uc(l) {
        if (!l) return null;
        const r = Array.prototype.slice.call(l.types || []);
        return Object.keys(Oc).filter((i)=>{
            const o = Oc[i];
            return o?.matchesTypes ? o.matchesTypes.some((s)=>r.indexOf(s) > -1) : !1;
        })[0] || null;
    }
    const U3 = L0(()=>/firefox/i.test(navigator.userAgent)), q0 = L0(()=>!!window.safari);
    class Og {
        interpolate(r) {
            const { xs: i, ys: o, c1s: s, c2s: f, c3s: d } = this;
            let h = i.length - 1;
            if (r === i[h]) return o[h];
            let g = 0, m = d.length - 1, y;
            for(; g <= m;){
                y = Math.floor(.5 * (g + m));
                const O = i[y];
                if (O < r) g = y + 1;
                else if (O > r) m = y - 1;
                else return o[y];
            }
            h = Math.max(0, m);
            const E = r - i[h], b = E * E;
            return o[h] + s[h] * E + f[h] * b + d[h] * E * b;
        }
        constructor(r, i){
            const { length: o } = r, s = [];
            for(let O = 0; O < o; O++)s.push(O);
            s.sort((O, _)=>r[O] < r[_] ? -1 : 1);
            const f = [], d = [];
            let h, g;
            for(let O = 0; O < o - 1; O++)h = r[O + 1] - r[O], g = i[O + 1] - i[O], f.push(h), d.push(g / h);
            const m = [
                d[0]
            ];
            for(let O = 0; O < f.length - 1; O++){
                const _ = d[O], x = d[O + 1];
                if (_ * x <= 0) m.push(0);
                else {
                    h = f[O];
                    const P = f[O + 1], A = h + P;
                    m.push(3 * A / ((A + P) / _ + (A + h) / x));
                }
            }
            m.push(d[d.length - 1]);
            const y = [], E = [];
            let b;
            for(let O = 0; O < m.length - 1; O++){
                b = d[O];
                const _ = m[O], x = 1 / f[O], P = _ + m[O + 1] - b - b;
                y.push((b - _ - P) * x), E.push(P * x * x);
            }
            this.xs = r, this.ys = i, this.c1s = m, this.c2s = y, this.c3s = E;
        }
    }
    const q3 = 1;
    function H0(l) {
        const r = l.nodeType === q3 ? l : l.parentElement;
        if (!r) return null;
        const { top: i, left: o } = r.getBoundingClientRect();
        return {
            x: o,
            y: i
        };
    }
    function fu(l) {
        return {
            x: l.clientX,
            y: l.clientY
        };
    }
    function H3(l) {
        var r;
        return l.nodeName === "IMG" && (U3() || !(!((r = document.documentElement) === null || r === void 0) && r.contains(l)));
    }
    function Q3(l, r, i, o) {
        let s = l ? r.width : i, f = l ? r.height : o;
        return q0() && l && (f /= window.devicePixelRatio, s /= window.devicePixelRatio), {
            dragPreviewWidth: s,
            dragPreviewHeight: f
        };
    }
    function K3(l, r, i, o, s) {
        const f = H3(r), h = H0(f ? l : r), g = {
            x: i.x - h.x,
            y: i.y - h.y
        }, { offsetWidth: m, offsetHeight: y } = l, { anchorX: E, anchorY: b } = o, { dragPreviewWidth: O, dragPreviewHeight: _ } = Q3(f, r, m, y), x = ()=>{
            let Z = new Og([
                0,
                .5,
                1
            ], [
                g.y,
                g.y / y * _,
                g.y + _ - y
            ]).interpolate(b);
            return q0() && f && (Z += (window.devicePixelRatio - 1) * _), Z;
        }, P = ()=>new Og([
                0,
                .5,
                1
            ], [
                g.x,
                g.x / m * O,
                g.x + O - m
            ]).interpolate(E), { offsetX: A, offsetY: k } = s, B = A === 0 || A, G = k === 0 || k;
        return {
            x: B ? A : P(),
            y: G ? k : x()
        };
    }
    let G3 = class {
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
    function Y3(l, r, i) {
        return r in l ? Object.defineProperty(l, r, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[r] = i, l;
    }
    function Tg(l) {
        for(var r = 1; r < arguments.length; r++){
            var i = arguments[r] != null ? arguments[r] : {}, o = Object.keys(i);
            typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            }))), o.forEach(function(s) {
                Y3(l, s, i[s]);
            });
        }
        return l;
    }
    class X3 {
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
        connectDragPreview(r, i, o) {
            return this.sourcePreviewNodeOptions.set(r, o), this.sourcePreviewNodes.set(r, i), ()=>{
                this.sourcePreviewNodes.delete(r), this.sourcePreviewNodeOptions.delete(r);
            };
        }
        connectDragSource(r, i, o) {
            this.sourceNodes.set(r, i), this.sourceNodeOptions.set(r, o);
            const s = (d)=>this.handleDragStart(d, r), f = (d)=>this.handleSelectStart(d);
            return i.setAttribute("draggable", "true"), i.addEventListener("dragstart", s), i.addEventListener("selectstart", f), ()=>{
                this.sourceNodes.delete(r), this.sourceNodeOptions.delete(r), i.removeEventListener("dragstart", s), i.removeEventListener("selectstart", f), i.setAttribute("draggable", "false");
            };
        }
        connectDropTarget(r, i) {
            const o = (d)=>this.handleDragEnter(d, r), s = (d)=>this.handleDragOver(d, r), f = (d)=>this.handleDrop(d, r);
            return i.addEventListener("dragenter", o), i.addEventListener("dragover", s), i.addEventListener("drop", f), ()=>{
                i.removeEventListener("dragenter", o), i.removeEventListener("dragover", s), i.removeEventListener("drop", f);
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
            return Tg({
                dropEffect: this.altKeyPressed ? "copy" : "move"
            }, i || {});
        }
        getCurrentDropEffect() {
            return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
        }
        getCurrentSourcePreviewNodeOptions() {
            const r = this.monitor.getSourceId(), i = this.sourcePreviewNodeOptions.get(r);
            return Tg({
                anchorX: .5,
                anchorY: .5,
                captureDraggingState: !1
            }, i || {});
        }
        isDraggingNativeItem() {
            const r = this.monitor.getItemType();
            return Object.keys(Eg).some((i)=>Eg[i] === r);
        }
        beginDragNativeItem(r, i) {
            this.clearCurrentDragSourceNode(), this.currentNativeSource = z3(r, i), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([
                this.currentNativeHandle
            ]);
        }
        setCurrentDragSourceNode(r) {
            this.clearCurrentDragSourceNode(), this.currentDragSourceNode = r;
            const i = 1e3;
            this.mouseMoveTimeoutTimer = setTimeout(()=>{
                var o;
                return (o = this.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
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
        constructor(r, i, o){
            this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.sourceNodes = new Map, this.sourceNodeOptions = new Map, this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (s)=>{
                const f = this.sourceNodes.get(s);
                return f && H0(f) || null;
            }, this.endDragNativeItem = ()=>{
                this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
            }, this.isNodeInDocument = (s)=>!!(s && this.document && this.document.body && this.document.body.contains(s)), this.endDragIfSourceWasRemovedFromDOM = ()=>{
                const s = this.currentDragSourceNode;
                s == null || this.isNodeInDocument(s) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
            }, this.scheduleHover = (s)=>{
                this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(()=>{
                    this.monitor.isDragging() && this.actions.hover(s || [], {
                        clientOffset: this.lastClientOffset
                    }), this.hoverRafId = null;
                }));
            }, this.cancelHover = ()=>{
                this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
            }, this.handleTopDragStartCapture = ()=>{
                this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
            }, this.handleTopDragStart = (s)=>{
                if (s.defaultPrevented) return;
                const { dragStartSourceIds: f } = this;
                this.dragStartSourceIds = null;
                const d = fu(s);
                this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(f || [], {
                    publishSource: !1,
                    getSourceClientOffset: this.getSourceClientOffset,
                    clientOffset: d
                });
                const { dataTransfer: h } = s, g = uc(h);
                if (this.monitor.isDragging()) {
                    if (h && typeof h.setDragImage == "function") {
                        const y = this.monitor.getSourceId(), E = this.sourceNodes.get(y), b = this.sourcePreviewNodes.get(y) || E;
                        if (b) {
                            const { anchorX: O, anchorY: _, offsetX: x, offsetY: P } = this.getCurrentSourcePreviewNodeOptions(), B = K3(E, b, d, {
                                anchorX: O,
                                anchorY: _
                            }, {
                                offsetX: x,
                                offsetY: P
                            });
                            h.setDragImage(b, B.x, B.y);
                        }
                    }
                    try {
                        h?.setData("application/json", {});
                    } catch  {}
                    this.setCurrentDragSourceNode(s.target);
                    const { captureDraggingState: m } = this.getCurrentSourcePreviewNodeOptions();
                    m ? this.actions.publishDragSource() : setTimeout(()=>this.actions.publishDragSource(), 0);
                } else if (g) this.beginDragNativeItem(g);
                else {
                    if (h && !h.types && (s.target && !s.target.hasAttribute || !s.target.hasAttribute("draggable"))) return;
                    s.preventDefault();
                }
            }, this.handleTopDragEndCapture = ()=>{
                this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
            }, this.handleTopDragEnterCapture = (s)=>{
                if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
                    var f;
                    (f = this.currentNativeSource) === null || f === void 0 || f.loadDataTransfer(s.dataTransfer);
                }
                if (!this.enterLeaveCounter.enter(s.target) || this.monitor.isDragging()) return;
                const { dataTransfer: h } = s, g = uc(h);
                g && this.beginDragNativeItem(g, h);
            }, this.handleTopDragEnter = (s)=>{
                const { dragEnterTargetIds: f } = this;
                if (this.dragEnterTargetIds = [], !this.monitor.isDragging()) return;
                this.altKeyPressed = s.altKey, f.length > 0 && this.actions.hover(f, {
                    clientOffset: fu(s)
                }), f.some((h)=>this.monitor.canDropOnTarget(h)) && (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = this.getCurrentDropEffect()));
            }, this.handleTopDragOverCapture = (s)=>{
                if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
                    var f;
                    (f = this.currentNativeSource) === null || f === void 0 || f.loadDataTransfer(s.dataTransfer);
                }
            }, this.handleTopDragOver = (s)=>{
                const { dragOverTargetIds: f } = this;
                if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
                    s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "none");
                    return;
                }
                this.altKeyPressed = s.altKey, this.lastClientOffset = fu(s), this.scheduleHover(f), (f || []).some((h)=>this.monitor.canDropOnTarget(h)) ? (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? s.preventDefault() : (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "none"));
            }, this.handleTopDragLeaveCapture = (s)=>{
                this.isDraggingNativeItem() && s.preventDefault(), this.enterLeaveCounter.leave(s.target) && (this.isDraggingNativeItem() && setTimeout(()=>this.endDragNativeItem(), 0), this.cancelHover());
            }, this.handleTopDropCapture = (s)=>{
                if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
                    var f;
                    s.preventDefault(), (f = this.currentNativeSource) === null || f === void 0 || f.loadDataTransfer(s.dataTransfer);
                } else uc(s.dataTransfer) && s.preventDefault();
                this.enterLeaveCounter.reset();
            }, this.handleTopDrop = (s)=>{
                const { dropTargetIds: f } = this;
                this.dropTargetIds = [], this.actions.hover(f, {
                    clientOffset: fu(s)
                }), this.actions.drop({
                    dropEffect: this.getCurrentDropEffect()
                }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
            }, this.handleSelectStart = (s)=>{
                const f = s.target;
                typeof f.dragDrop == "function" && (f.tagName === "INPUT" || f.tagName === "SELECT" || f.tagName === "TEXTAREA" || f.isContentEditable || (s.preventDefault(), f.dragDrop()));
            }, this.options = new G3(i, o), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.registry = r.getRegistry(), this.enterLeaveCounter = new k3(this.isNodeInDocument);
        }
    }
    let du;
    function I3() {
        return du || (du = new Image, du.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), du;
    }
    const V3 = function(r, i, o) {
        return new X3(r, i, o);
    };
    function _g({ isPremovedPiece: l = !1, piece: r, square: i, squares: o }) {
        const { animationDuration: s, arePiecesDraggable: f, boardWidth: d, boardOrientation: h, chessPieces: g, currentPosition: m, deletePieceFromSquare: y, dropOffBoardAction: E, id: b, isDraggablePiece: O, isWaitingForAnimation: _, onPieceClick: x, onPieceDragBegin: P, onPieceDragEnd: A, onPieceDropOffBoard: k, onPromotionCheck: B, positionDifferences: G } = xn(), [K, Z] = S.useState({
            opacity: 1,
            zIndex: 5,
            touchAction: "none",
            cursor: f && O({
                piece: r,
                sourceSquare: i
            }) ? "-webkit-grab" : "default"
        }), [{ canDrag: V, isDragging: $ }, W, De] = _3(()=>({
                type: "piece",
                item: ()=>(P(r, i), {
                        piece: r,
                        square: i,
                        id: b
                    }),
                end: (he, He)=>{
                    A(r, i), !He.didDrop() && (E === "trash" && y(i), k?.(i, r));
                },
                collect: (he)=>({
                        canDrag: O({
                            piece: r,
                            sourceSquare: i
                        }),
                        isDragging: !!he.isDragging()
                    })
            }), [
            r,
            i,
            m,
            b
        ]);
        De(I3(), {
            captureDraggingState: !0
        }), S.useEffect(()=>{
            Z((he)=>Object.assign(Object.assign({}, he), {
                    opacity: $ ? 0 : 1
                }));
        }, [
            $
        ]), S.useEffect(()=>{
            var he;
            const He = (he = G.removed) === null || he === void 0 ? void 0 : he[i];
            if (!G.added || !He) return;
            const pt = Object.entries(G.added).find(([Me, z])=>z === He || B(i, Me, He));
            if (_ && He && pt && !l) {
                const Me = i, z = pt[0];
                if (Me && z) {
                    const Y = d / 8;
                    Z((te)=>Object.assign(Object.assign({}, te), {
                            transform: `translate(${(h === "black" ? -1 : 1) * (z.charCodeAt(0) - Me.charCodeAt(0)) * Y}px, ${(h === "black" ? -1 : 1) * (Number(Me[1]) - Number(z[1])) * Y}px)`,
                            transition: `transform ${s}ms`,
                            zIndex: 6
                        }));
                }
            }
        }, [
            G
        ]), S.useEffect(()=>{
            const { sourceSq: he } = Pe();
            he && Z((He)=>Object.assign(Object.assign({}, He), {
                    transform: "translate(0px, 0px)",
                    transition: "transform 0ms"
                }));
        }, [
            m
        ]), S.useEffect(()=>{
            Z((he)=>Object.assign(Object.assign({}, he), {
                    cursor: f && O({
                        piece: r,
                        sourceSquare: i
                    }) ? "-webkit-grab" : "default"
                }));
        }, [
            i,
            m,
            f
        ]);
        function Pe() {
            return {
                sourceSq: o[i]
            };
        }
        return D.jsx("div", Object.assign({
            ref: f && V ? W : null,
            onClick: ()=>x(r, i),
            "data-piece": r,
            style: K
        }, {
            children: typeof g[r] == "function" ? g[r]({
                squareWidth: d / 8,
                isDragging: $,
                square: i
            }) : D.jsx("svg", Object.assign({
                viewBox: "1 1 43 43",
                width: d / 8,
                height: d / 8,
                style: {
                    display: "block"
                }
            }, {
                children: D.jsx("g", {
                    children: g[r]
                })
            }))
        }));
    }
    function Z3({ square: l, squareColor: r, setSquares: i, squareHasPremove: o, children: s }) {
        const f = S.useRef(null), { autoPromoteToQueen: d, boardWidth: h, boardOrientation: g, clearArrows: m, currentPosition: y, currentRightClickDown: E, customBoardStyle: b, customDarkSquareStyle: O, customDropSquareStyle: _, customLightSquareStyle: x, customPremoveDarkSquareStyle: P, customPremoveLightSquareStyle: A, customSquare: k, customSquareStyles: B, drawNewArrow: G, handleSetPosition: K, handleSparePieceDrop: Z, isWaitingForAnimation: V, lastPieceColour: $, lastSquareDraggedOver: W, onArrowDrawEnd: De, onDragOverSquare: Pe, onMouseOutSquare: he, onMouseOverSquare: He, onPieceDrop: pt, onPromotionCheck: Me, onRightClickDown: z, onRightClickUp: Y, onSquareClick: te, setLastSquareDraggedOver: Se, setPromoteFromSquare: R, setPromoteToSquare: Q, setShowPromoteDialog: I } = xn(), [{ isOver: X }, F] = P3(()=>({
                accept: "piece",
                drop: me,
                collect: (le)=>({
                        isOver: !!le.isOver()
                    })
            }), [
            l,
            y,
            pt,
            V,
            $
        ]);
        function me(le) {
            if (le.isSpare) {
                Z(le.piece, l);
                return;
            }
            Me(le.square, l, le.piece) ? d ? K(le.square, l, le.piece[0] === "w" ? "wQ" : "bQ") : (R(le.square), Q(l), I(!0)) : K(le.square, l, le.piece, !0);
        }
        S.useEffect(()=>{
            if (f.current) {
                const { x: le, y: ve } = f.current.getBoundingClientRect();
                i((gt)=>Object.assign(Object.assign({}, gt), {
                        [l]: {
                            x: le,
                            y: ve
                        }
                    }));
            }
        }, [
            h,
            g
        ]);
        const re = Object.assign(Object.assign(Object.assign(Object.assign({}, $3(l, g, b)), r === "black" ? O : x), o && (r === "black" ? P : A)), X && _);
        return D.jsx("div", Object.assign({
            ref: F,
            style: re,
            "data-square-color": r,
            "data-square": l,
            onTouchMove: (le)=>{
                var ve;
                const gt = le.touches[0], ln = document.elementsFromPoint(gt.clientX, gt.clientY), Ge = (ve = ln?.find((ot)=>ot.getAttribute("data-square"))) === null || ve === void 0 ? void 0 : ve.getAttribute("data-square");
                Ge && Ge !== W && (Se(Ge), Pe(Ge));
            },
            onMouseOver: (le)=>{
                le.buttons === 2 && E && G(E, l), !(le.relatedTarget && le.currentTarget.contains(le.relatedTarget)) && He(l);
            },
            onMouseOut: (le)=>{
                le.relatedTarget && le.currentTarget.contains(le.relatedTarget) || he(l);
            },
            onMouseDown: (le)=>{
                le.button === 2 && z(l);
            },
            onMouseUp: (le)=>{
                le.button === 2 && (E && De(E, l), Y(l));
            },
            onDragEnter: ()=>Pe(l),
            onClick: ()=>{
                const le = y[l];
                te(l, le), m();
            },
            onContextMenu: (le)=>{
                le.preventDefault();
            }
        }, {
            children: typeof k == "string" ? D.jsx(k, Object.assign({
                ref: f,
                style: Object.assign(Object.assign(Object.assign({}, Rg(h)), Dg), !o && B?.[l])
            }, {
                children: s
            })) : D.jsx(k, Object.assign({
                ref: f,
                square: l,
                squareColor: r,
                style: Object.assign(Object.assign(Object.assign({}, Rg(h)), Dg), !o && B?.[l])
            }, {
                children: s
            }))
        }));
    }
    const Dg = {
        display: "flex",
        justifyContent: "center"
    }, Rg = (l)=>({
            width: l / 8,
            height: l / 8
        }), $3 = (l, r, i)=>i?.borderRadius ? l === "a1" ? r === "white" ? {
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
    function J3() {
        const [l, r] = S.useState({}), { arePremovesAllowed: i, boardOrientation: o, boardWidth: s, currentPosition: f, id: d, premoves: h, showBoardNotation: g } = xn(), m = S.useMemo(()=>{
            const y = [];
            return i ? (h.forEach((E, b)=>{
                const { sourceSq: O, targetSq: _, piece: x } = E, P = y.find((A)=>{
                    var k;
                    return A.piece === x && ((k = A.premovesRoute.at(-1)) === null || k === void 0 ? void 0 : k.targetSq) === O;
                });
                P ? P.premovesRoute.push({
                    sourceSq: O,
                    targetSq: _,
                    index: b
                }) : y.push({
                    piece: x,
                    premovesRoute: [
                        {
                            sourceSq: O,
                            targetSq: _,
                            index: b
                        }
                    ]
                });
            }), y) : [];
        }, [
            h
        ]);
        return D.jsx("div", Object.assign({
            "data-boardid": d
        }, {
            children: [
                ...Array(8)
            ].map((y, E)=>D.jsx("div", Object.assign({
                    style: {
                        display: "flex",
                        flexWrap: "nowrap",
                        width: s
                    }
                }, {
                    children: [
                        ...Array(8)
                    ].map((b, O)=>{
                        const _ = o === "black" ? Kl[7 - O] + (E + 1) : Kl[O] + (8 - E), x = O % 2 === E % 2 ? "white" : "black", P = h.find((k)=>k.sourceSq === _ || k.targetSq === _), A = m.filter(({ premovesRoute: k })=>{
                            var B;
                            return ((B = k.at(-1)) === null || B === void 0 ? void 0 : B.targetSq) === _;
                        }).sort((k, B)=>{
                            var G, K;
                            return ((G = B.premovesRoute.at(-1)) === null || G === void 0 ? void 0 : G.index) - ((K = k.premovesRoute.at(-1)) === null || K === void 0 ? void 0 : K.index);
                        }).at(0);
                        return D.jsxs(Z3, Object.assign({
                            square: _,
                            squareColor: x,
                            setSquares: r,
                            squareHasPremove: !!P
                        }, {
                            children: [
                                !P && f[_] && D.jsx(_g, {
                                    piece: f[_],
                                    square: _,
                                    squares: l
                                }),
                                A && D.jsx(_g, {
                                    isPremovedPiece: !0,
                                    piece: A.piece,
                                    square: _,
                                    squares: l
                                }),
                                g && D.jsx(Ub, {
                                    row: E,
                                    col: O
                                })
                            ]
                        }), `${O}${E}`);
                    })
                }), E.toString()))
        }));
    }
    const W3 = ()=>{
        const { arrows: l, newArrow: r, boardOrientation: i, boardWidth: o, customArrowColor: s } = xn(), f = [
            ...l,
            r
        ].filter(Boolean);
        return D.jsx("svg", Object.assign({
            width: o,
            height: o,
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                pointerEvents: "none",
                zIndex: "10"
            }
        }, {
            children: f.map((d, h)=>{
                const [g, m, y] = d;
                if (g === m) return null;
                const E = vc(i, o, g), b = vc(i, o, m);
                let O = o / 32;
                const _ = h === l.length;
                l.some((B)=>B[0] !== g && B[1] === m) && !_ && (O = o / 16);
                const x = b.x - E.x, P = b.y - E.y, A = Math.hypot(P, x), k = {
                    x: E.x + x * (A - O) / A,
                    y: E.y + P * (A - O) / A
                };
                return D.jsxs(S.Fragment, {
                    children: [
                        D.jsx("marker", Object.assign({
                            id: `arrowhead-${h}`,
                            markerWidth: "2",
                            markerHeight: "2.5",
                            refX: "1.25",
                            refY: "1.25",
                            orient: "auto"
                        }, {
                            children: D.jsx("polygon", {
                                points: "0.3 0, 2 1.25, 0.3 2.5",
                                fill: y ?? s
                            })
                        })),
                        D.jsx("line", {
                            x1: E.x,
                            y1: E.y,
                            x2: k.x,
                            y2: k.y,
                            opacity: _ ? "0.5" : "0.65",
                            stroke: y ?? s,
                            strokeWidth: _ ? .9 * o / 40 : o / 40,
                            markerEnd: `url(#arrowhead-${h})`
                        })
                    ]
                }, `${g}-${m}${_ ? "-active" : ""}`);
            })
        }));
    };
    function F3({ option: l }) {
        const [r, i] = S.useState(!1), { boardWidth: o, chessPieces: s, customDarkSquareStyle: f, customLightSquareStyle: d, handleSetPosition: h, onPromotionPieceSelect: g, promoteFromSquare: m, promoteToSquare: y, promotionDialogVariant: E } = xn(), b = ()=>{
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
        return D.jsx("div", Object.assign({
            onClick: ()=>{
                g(l, m ?? void 0, y ?? void 0) && h(m, y, l, !0);
            },
            onMouseOver: ()=>i(!0),
            onMouseOut: ()=>i(!1),
            "data-piece": l,
            style: {
                cursor: "pointer",
                backgroundColor: r ? b() : `${b()}aa`,
                borderRadius: "4px",
                transition: "all 0.1s ease-out"
            }
        }, {
            children: typeof s[l] == "function" ? D.jsx("div", Object.assign({
                style: {
                    transition: "all 0.1s ease-out",
                    transform: r ? "scale(1)" : "scale(0.85)"
                }
            }, {
                children: s[l]({
                    squareWidth: o / 8,
                    isDragging: !1
                })
            })) : D.jsx("svg", Object.assign({
                viewBox: "1 1 43 43",
                width: o / 8,
                height: o / 8,
                style: {
                    transition: "all 0.1s ease-out",
                    transform: r ? "scale(1)" : "scale(0.85)"
                }
            }, {
                children: D.jsx("g", {
                    children: s[l]
                })
            }))
        }));
    }
    function eE() {
        const { boardOrientation: l, boardWidth: r, promotionDialogVariant: i, promoteToSquare: o } = xn(), s = o?.[1] === "1" ? "b" : "w", f = [
            `${s ?? "w"}Q`,
            `${s ?? "w"}R`,
            `${s ?? "w"}N`,
            `${s ?? "w"}B`
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
        }, h = vc(l, r, o || "a8");
        return D.jsx("div", Object.assign({
            style: Object.assign({
                position: "absolute",
                top: `${h?.y}px`,
                left: `${h?.x}px`,
                zIndex: 1e3
            }, d[i]),
            title: "Choose promotion piece"
        }, {
            children: f.map((g)=>D.jsx(F3, {
                    option: g
                }, g))
        }));
    }
    const tE = {
        whiteKing: D.jsx("svg", Object.assign({
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
            children: D.jsx("g", {
                children: D.jsx("path", {
                    style: {
                        fill: "black",
                        fillRule: "nonzero"
                    },
                    d: "M2105 0c169,0 286,160 249,315l200 0c-172,266 -231,479 -256,792 315,-24 530,-86 792,-255l0 897c-265,-171 -479,-231 -792,-256 18,234 75,495 185,682l339 0c233,0 369,269 225,456l545 0 -595 1916c130,94 158,275 59,402 465,0 416,568 51,568l-334 0 465 2867 332 0c250,0 381,306 199,485 162,63 273,220 273,399l0 633 168 0 0 475c-1403,0 -2807,0 -4210,0l0 -475 167 0 0 -633c0,-179 112,-336 274,-399 -181,-178 -52,-485 199,-485l332 0 465 -2867 -335 0c-353,0 -418,-568 51,-568 -98,-127 -70,-308 59,-402l-594 -1916c181,0 363,0 545,0 -144,-187 -9,-456 225,-456l339 0c110,-187 167,-448 185,-682 -315,25 -530,87 -793,256l0 -897c266,171 480,231 793,255 -25,-315 -87,-529 -256,-792l199 0c-36,-155 81,-315 250,-315zm-1994 10012l0 253 3988 0 0 -253c-1330,0 -2659,0 -3988,0zm484 -1060c-174,0 -316,142 -316,316l0 633 3652 0 0 -633c0,-174 -142,-316 -316,-316 -1007,0 -2013,0 -3020,0zm45 -457c-230,0 -225,345 0,345l2930 0c230,0 225,-345 0,-345 -977,0 -1953,0 -2930,0zm2020 -2978l-1111 0 -465 2867 2041 0 -465 -2867zm-1558 -456c-229,0 -224,345 0,345 669,0 1337,0 2005,0 230,0 225,-345 0,-345 -668,0 -1336,0 -2005,0zm1730 -457l-1454 0c-229,0 -224,345 0,345l1454 0c229,0 224,-345 0,-345zm-2064 -1862l544 1751c529,0 1057,0 1586,0l544 -1751c-892,0 -1783,0 -2674,0zm1085 -567l504 0c-126,-247 -163,-526 -177,-800 273,15 553,52 800,177l0 -504c-247,126 -527,163 -800,177 14,-273 51,-552 177,-799 -168,0 -336,0 -504,0 125,247 162,526 177,799 -274,-14 -553,-51 -800,-177l0 504c247,-125 527,-162 800,-177 -15,274 -52,553 -177,800zm969 111l-1434 0c-230,0 -225,345 0,345l1434 0c230,0 225,-345 0,-345zm-717 -2175c-105,0 -175,109 -133,204l266 0c42,-96 -30,-205 -133,-204z"
                })
            })
        }))
    };
    function nE({ children: l }) {
        try {
            return D.jsx(D.Fragment, {
                children: l
            });
        } catch (r) {
            return console.log(r), D.jsx(Q0, {
                showError: !0
            });
        }
    }
    function Q0({ showError: l = !1 }) {
        return D.jsxs("div", Object.assign({
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }
        }, {
            children: [
                D.jsx("div", Object.assign({
                    style: {
                        width: 250,
                        height: 250,
                        transform: "rotate(90deg)"
                    }
                }, {
                    children: tE.whiteKing
                })),
                l && D.jsx("h1", {
                    children: "Something went wrong"
                })
            ]
        }));
    }
    function rE() {
        const l = S.useRef(null), { boardWidth: r, clearCurrentRightClickDown: i, onPromotionPieceSelect: o, setShowPromoteDialog: s, showPromoteDialog: f, customBoardStyle: d } = xn();
        return S.useEffect(()=>{
            function h(g) {
                l.current && !l.current.contains(g.target) && i();
            }
            return document.addEventListener("mouseup", h), ()=>{
                document.removeEventListener("mouseup", h);
            };
        }, []), r ? D.jsx("div", Object.assign({
            style: {
                perspective: "1000px"
            }
        }, {
            children: D.jsxs("div", Object.assign({
                ref: l,
                style: Object.assign(Object.assign({
                    position: "relative"
                }, aE(r)), d)
            }, {
                children: [
                    D.jsx(J3, {}),
                    D.jsx(W3, {}),
                    f && D.jsxs(D.Fragment, {
                        children: [
                            D.jsx("div", {
                                onClick: ()=>{
                                    s(!1), o?.();
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
                            D.jsx(eE, {})
                        ]
                    })
                ]
            }))
        })) : D.jsx(Q0, {});
    }
    const aE = (l)=>({
            cursor: "default",
            height: l,
            width: l
        });
    var rr;
    (function(l) {
        l.mouse = "mouse", l.touch = "touch", l.keyboard = "keyboard";
    })(rr || (rr = {}));
    class lE {
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
            var r, i, o, s;
            return (s = (o = (r = this.args) === null || r === void 0 ? void 0 : r.delayTouchStart) !== null && o !== void 0 ? o : (i = this.args) === null || i === void 0 ? void 0 : i.delay) !== null && s !== void 0 ? s : 0;
        }
        get delayMouseStart() {
            var r, i, o, s;
            return (s = (o = (r = this.args) === null || r === void 0 ? void 0 : r.delayMouseStart) !== null && o !== void 0 ? o : (i = this.args) === null || i === void 0 ? void 0 : i.delay) !== null && s !== void 0 ? s : 0;
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
    function iE(l, r, i, o) {
        return Math.sqrt(Math.pow(Math.abs(i - l), 2) + Math.pow(Math.abs(o - r), 2));
    }
    function uE(l, r, i, o, s) {
        if (!s) return !1;
        const f = Math.atan2(o - r, i - l) * 180 / Math.PI + 180;
        for(let d = 0; d < s.length; ++d){
            const h = s[d];
            if (h && (h.start == null || f >= h.start) && (h.end == null || f <= h.end)) return !0;
        }
        return !1;
    }
    const oE = {
        Left: 1
    }, sE = {
        Left: 0
    };
    function oc(l) {
        return l.button === void 0 || l.button === sE.Left;
    }
    function cE(l) {
        return l.buttons === void 0 || (l.buttons & oE.Left) === 0;
    }
    function K0(l) {
        return !!l.targetTouches;
    }
    const fE = 1;
    function dE(l) {
        const r = l.nodeType === fE ? l : l.parentElement;
        if (!r) return;
        const { top: i, left: o } = r.getBoundingClientRect();
        return {
            x: o,
            y: i
        };
    }
    function hE(l, r) {
        if (l.targetTouches.length === 1) return Ou(l.targetTouches[0]);
        if (r && l.touches.length === 1 && l.touches[0].target === r.target) return Ou(l.touches[0]);
    }
    function Ou(l, r) {
        return K0(l) ? hE(l, r) : {
            x: l.clientX,
            y: l.clientY
        };
    }
    const Cg = (()=>{
        let l = !1;
        try {
            addEventListener("test", ()=>{}, Object.defineProperty({}, "passive", {
                get () {
                    return l = !0, !0;
                }
            }));
        } catch  {}
        return l;
    })(), jl = {
        [rr.mouse]: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
            contextmenu: "contextmenu"
        },
        [rr.touch]: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend"
        },
        [rr.keyboard]: {
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
            r && (oe(!ql.isSetUp, "Cannot have two Touch backends at the same time."), ql.isSetUp = !0, this.addEventListener(r, "start", this.getTopMoveStartHandler()), this.addEventListener(r, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(r, "move", this.handleTopMove), this.addEventListener(r, "move", this.handleTopMoveCapture, !0), this.addEventListener(r, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(r, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(r, "keydown", this.handleCancelOnEscape, !0));
        }
        teardown() {
            const r = this.options.rootElement;
            r && (ql.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(r, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(r, "start", this.handleTopMoveStart), this.removeEventListener(r, "move", this.handleTopMoveCapture, !0), this.removeEventListener(r, "move", this.handleTopMove), this.removeEventListener(r, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(r, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(r, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver());
        }
        addEventListener(r, i, o, s = !1) {
            const f = Cg ? {
                capture: s,
                passive: !1
            } : s;
            this.listenerTypes.forEach(function(d) {
                const h = jl[d][i];
                h && r.addEventListener(h, o, f);
            });
        }
        removeEventListener(r, i, o, s = !1) {
            const f = Cg ? {
                capture: s,
                passive: !1
            } : s;
            this.listenerTypes.forEach(function(d) {
                const h = jl[d][i];
                h && r.removeEventListener(h, o, f);
            });
        }
        connectDragSource(r, i) {
            const o = this.handleMoveStart.bind(this, r);
            return this.sourceNodes.set(r, i), this.addEventListener(i, "start", o), ()=>{
                this.sourceNodes.delete(r), this.removeEventListener(i, "start", o);
            };
        }
        connectDragPreview(r, i, o) {
            return this.sourcePreviewNodeOptions.set(r, o), this.sourcePreviewNodes.set(r, i), ()=>{
                this.sourcePreviewNodes.delete(r), this.sourcePreviewNodeOptions.delete(r);
            };
        }
        connectDropTarget(r, i) {
            const o = this.options.rootElement;
            if (!this.document || !o) return ()=>{};
            const s = (f)=>{
                if (!this.document || !o || !this.monitor.isDragging()) return;
                let d;
                switch(f.type){
                    case jl.mouse.move:
                        d = {
                            x: f.clientX,
                            y: f.clientY
                        };
                        break;
                    case jl.touch.move:
                        var h, g;
                        d = {
                            x: ((h = f.touches[0]) === null || h === void 0 ? void 0 : h.clientX) || 0,
                            y: ((g = f.touches[0]) === null || g === void 0 ? void 0 : g.clientY) || 0
                        };
                        break;
                }
                const m = d != null ? this.document.elementFromPoint(d.x, d.y) : void 0, y = m && i.contains(m);
                if (m === i || y) return this.handleMove(f, r);
            };
            return this.addEventListener(this.document.body, "move", s), this.targetNodes.set(r, i), ()=>{
                this.document && (this.targetNodes.delete(r), this.removeEventListener(this.document.body, "move", s));
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
        constructor(r, i, o){
            this.getSourceClientOffset = (s)=>{
                const f = this.sourceNodes.get(s);
                return f && dE(f);
            }, this.handleTopMoveStartCapture = (s)=>{
                oc(s) && (this.moveStartSourceIds = []);
            }, this.handleMoveStart = (s)=>{
                Array.isArray(this.moveStartSourceIds) && this.moveStartSourceIds.unshift(s);
            }, this.handleTopMoveStart = (s)=>{
                if (!oc(s)) return;
                const f = Ou(s);
                f && (K0(s) && (this.lastTargetTouchFallback = s.targetTouches[0]), this._mouseClientOffset = f), this.waitingForDelay = !1;
            }, this.handleTopMoveStartDelay = (s)=>{
                if (!oc(s)) return;
                const f = s.type === jl.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart;
                this.timeout = setTimeout(this.handleTopMoveStart.bind(this, s), f), this.waitingForDelay = !0;
            }, this.handleTopMoveCapture = ()=>{
                this.dragOverTargetIds = [];
            }, this.handleMove = (s, f)=>{
                this.dragOverTargetIds && this.dragOverTargetIds.unshift(f);
            }, this.handleTopMove = (s)=>{
                if (this.timeout && clearTimeout(this.timeout), !this.document || this.waitingForDelay) return;
                const { moveStartSourceIds: f, dragOverTargetIds: d } = this, h = this.options.enableHoverOutsideTarget, g = Ou(s, this.lastTargetTouchFallback);
                if (!g) return;
                if (this._isScrolling || !this.monitor.isDragging() && uE(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, g.x, g.y, this.options.scrollAngleRanges)) {
                    this._isScrolling = !0;
                    return;
                }
                if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && f && iE(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, g.x, g.y) > (this.options.touchSlop ? this.options.touchSlop : 0) && (this.moveStartSourceIds = void 0, this.actions.beginDrag(f, {
                    clientOffset: this._mouseClientOffset,
                    getSourceClientOffset: this.getSourceClientOffset,
                    publishSource: !1
                })), !this.monitor.isDragging()) return;
                const m = this.sourceNodes.get(this.monitor.getSourceId());
                this.installSourceNodeRemovalObserver(m), this.actions.publishDragSource(), s.cancelable && s.preventDefault();
                const y = (d || []).map((_)=>this.targetNodes.get(_)).filter((_)=>!!_), E = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(g.x, g.y, y) : this.document.elementsFromPoint(g.x, g.y), b = [];
                for(const _ in E){
                    if (!E.hasOwnProperty(_)) continue;
                    let x = E[_];
                    for(x != null && b.push(x); x;)x = x.parentElement, x && b.indexOf(x) === -1 && b.push(x);
                }
                const O = b.filter((_)=>y.indexOf(_) > -1).map((_)=>this._getDropTargetId(_)).filter((_)=>!!_).filter((_, x, P)=>P.indexOf(_) === x);
                if (h) for(const _ in this.targetNodes){
                    const x = this.targetNodes.get(_);
                    if (m && x && x.contains(m) && O.indexOf(_) === -1) {
                        O.unshift(_);
                        break;
                    }
                }
                O.reverse(), this.actions.hover(O, {
                    clientOffset: g
                });
            }, this._getDropTargetId = (s)=>{
                const f = this.targetNodes.keys();
                let d = f.next();
                for(; d.done === !1;){
                    const h = d.value;
                    if (s === this.targetNodes.get(h)) return h;
                    d = f.next();
                }
            }, this.handleTopMoveEndCapture = (s)=>{
                if (this._isScrolling = !1, this.lastTargetTouchFallback = void 0, !!cE(s)) {
                    if (!this.monitor.isDragging() || this.monitor.didDrop()) {
                        this.moveStartSourceIds = void 0;
                        return;
                    }
                    s.cancelable && s.preventDefault(), this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag();
                }
            }, this.handleCancelOnEscape = (s)=>{
                s.key === "Escape" && this.monitor.isDragging() && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag());
            }, this.options = new lE(o, i), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(rr.mouse), this.options.enableTouchEvents && this.listenerTypes.push(rr.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(rr.keyboard);
        }
    }
    const pE = function(r, i = {}, o = {}) {
        return new ql(r, i, o);
    }, gE = S.createContext({
        isCustomDndProviderSet: !1
    }), mE = ({ children: l })=>D.jsx(D.Fragment, {
            children: l
        }), vE = ({ customDndBackend: l, customDndBackendOptions: r, children: i })=>{
        const [o, s] = S.useState(), [f, d] = S.useState(!1), [h, g] = S.useState(!1), { isCustomDndProviderSet: m } = S.useContext(gE);
        S.useEffect(()=>{
            g("ontouchstart" in window), d(!0), s(window);
        }, []);
        const y = m ? mE : n3;
        return f ? o ? D.jsx(y, Object.assign({
            backend: l || (h ? pE : V3),
            context: o,
            options: l ? r : void 0
        }, {
            children: i
        })) : D.jsx(D.Fragment, {
            children: i
        }) : null;
    };
    function yE({ boardContainer: l }) {
        const { boardWidth: r, chessPieces: i, id: o, snapToCursor: s, allowDragOutsideBoard: f } = xn(), d = D3((b)=>({
                item: b.getItem(),
                clientOffset: b.getClientOffset(),
                sourceClientOffset: b.getSourceClientOffset(),
                isDragging: b.isDragging()
            })), { isDragging: h, item: g, clientOffset: m, sourceClientOffset: y } = d, E = S.useCallback((b, O)=>{
            if (!b || !O) return {
                display: "none"
            };
            let { x: _, y: x } = s ? b : O;
            const P = r / 8 / 2;
            if (s && (_ -= P, x -= P), !f) {
                const { left: k, top: B } = l, G = k - P, K = B - P, Z = k + r - P, V = B + r - P;
                _ = Math.max(G, Math.min(_, Z)), x = Math.max(K, Math.min(x, V));
            }
            const A = `translate(${_}px, ${x}px)`;
            return {
                transform: A,
                WebkitTransform: A,
                touchAction: "none"
            };
        }, [
            r,
            f,
            s,
            l
        ]);
        return h && g.id === o ? D.jsx("div", Object.assign({
            style: {
                position: "fixed",
                pointerEvents: "none",
                zIndex: 10,
                left: 0,
                top: 0
            }
        }, {
            children: D.jsx("div", Object.assign({
                style: E(m, y)
            }, {
                children: typeof i[g.piece] == "function" ? i[g.piece]({
                    squareWidth: r / 8,
                    isDragging: !0
                }) : D.jsx("svg", Object.assign({
                    viewBox: "1 1 43 43",
                    width: r / 8,
                    height: r / 8
                }, {
                    children: D.jsx("g", {
                        children: i[g.piece]
                    })
                }))
            }))
        })) : null;
    }
    bE = S.forwardRef((l, r)=>{
        const { customDndBackend: i, customDndBackendOptions: o, onBoardWidthChange: s } = l, f = Cb(l, [
            "customDndBackend",
            "customDndBackendOptions",
            "onBoardWidthChange"
        ]), [d, h] = S.useState(l.boardWidth), g = S.useRef(null), m = S.useRef(null), [y, E] = S.useState({
            left: 0,
            top: 0
        }), b = S.useMemo(()=>{
            var O;
            return (O = g.current) === null || O === void 0 ? void 0 : O.getBoundingClientRect();
        }, [
            g.current
        ]);
        return S.useEffect(()=>{
            d && s?.(d);
        }, [
            d
        ]), S.useEffect(()=>{
            E({
                left: b?.left ? b?.left : 0,
                top: b?.top ? b?.top : 0
            });
        }, [
            b
        ]), S.useEffect(()=>{
            var O;
            if (l.boardWidth === void 0 && (!((O = g.current) === null || O === void 0) && O.offsetWidth)) {
                const _ = new ResizeObserver(()=>{
                    var x;
                    h((x = g.current) === null || x === void 0 ? void 0 : x.offsetWidth);
                });
                return _.observe(g.current), ()=>{
                    _.disconnect();
                };
            }
        }, [
            g.current
        ]), D.jsx(nE, {
            children: D.jsxs("div", Object.assign({
                ref: m,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%"
                }
            }, {
                children: [
                    D.jsx("div", {
                        ref: g,
                        style: {
                            width: "100%"
                        }
                    }),
                    D.jsx(vE, Object.assign({
                        customDndBackend: i,
                        customDndBackendOptions: o
                    }, {
                        children: d && D.jsxs(zb, Object.assign({
                            boardWidth: d
                        }, f, {
                            ref: r
                        }, {
                            children: [
                                D.jsx(yE, {
                                    boardContainer: y
                                }),
                                D.jsx(rE, {})
                            ]
                        }))
                    }))
                ]
            }))
        });
    });
    var sc = {
        exports: {}
    }, cc, xg;
    function SE() {
        if (xg) return cc;
        xg = 1;
        var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        return cc = l, cc;
    }
    var fc, wg;
    function EE() {
        if (wg) return fc;
        wg = 1;
        var l = SE();
        function r() {}
        function i() {}
        return i.resetWarningCache = r, fc = function() {
            function o(d, h, g, m, y, E) {
                if (E !== l) {
                    var b = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw b.name = "Invariant Violation", b;
                }
            }
            o.isRequired = o;
            function s() {
                return o;
            }
            var f = {
                array: o,
                bigint: o,
                bool: o,
                func: o,
                number: o,
                object: o,
                string: o,
                symbol: o,
                any: o,
                arrayOf: s,
                element: o,
                elementType: o,
                instanceOf: s,
                node: o,
                objectOf: s,
                oneOf: s,
                oneOfType: s,
                shape: s,
                exact: s,
                checkPropTypes: i,
                resetWarningCache: r
            };
            return f.PropTypes = f, f;
        }, fc;
    }
    var Mg;
    function OE() {
        return Mg || (Mg = 1, sc.exports = EE()()), sc.exports;
    }
    var TE = OE();
    let _E;
    Ea = Tc(TE);
    YE = (l, r)=>l.flags.includes("c") ? "capture" : r.isCheckmate() ? "checkmate" : r.inCheck() ? "check" : "move";
    _E = (l)=>(l === "w" ? "Black" : "White") + " " + ht.CHECKMATE_MESSAGE;
    XE = (l)=>l.isCheckmate() ? {
            isGameOver: !0,
            gameResult: _E(l.turn())
        } : l.isDraw() ? {
            isGameOver: !0,
            gameResult: "Game Drawn!"
        } : {
            isGameOver: !1,
            gameResult: ""
        };
    IE = (l, r)=>{
        for(let i = 0; i < 8; i++)for(let o = 0; o < 8; o++){
            const s = l[i][o];
            if (s && s.type === "k" && s.color === r) return {
                rank: i,
                file: o
            };
        }
        return null;
    };
    DE = (l)=>l ? {
            [l.from]: {
                backgroundColor: "var(--last-move-from)"
            },
            [l.to]: {
                backgroundColor: "var(--last-move-to)"
            }
        } : null;
    Qc = ({ className: l, handleMove: r, fen: i, lastMove: o, isFlipped: s })=>{
        const f = (d, h)=>{
            r({
                from: d,
                to: h
            });
        };
        return D.jsx("div", {
            className: l,
            children: D.jsx(bE, {
                position: i,
                onPieceDrop: f,
                boardOrientation: s ? "black" : "white",
                customSquareStyles: DE(o),
                customDarkSquareStyle: {
                    backgroundColor: "var(--dark-square)"
                },
                customLightSquareStyle: {
                    backgroundColor: "var(--light-square)"
                }
            })
        });
    };
    Qc.defaultProps = {
        isFinalMove: !1,
        result: ""
    };
    Qc.prototype = {
        isAnalysis: Ea.bool.isRequired,
        handleMove: Ea.func.isRequired,
        fen: Ea.string.isRequired,
        lastMove: Ea.object.isRequired,
        isFlipped: Ea.bool.isRequired,
        isFinalMove: Ea.bool.isFinalMove
    };
    let RE, Ng, ME, NE, AE;
    RE = ({ currentFen: l, onFenSubmit: r })=>{
        const [i, o] = S.useState(l), [s, f] = S.useState(!0);
        S.useEffect(()=>{
            o(l);
        }, [
            l
        ]);
        const d = (m)=>{
            const E = new wc().load(i);
            f(E), E && (console.log("Valid FEN:", i), o(m.target.value), f(null));
        }, h = (m)=>{
            m.preventDefault(), r && r(i);
        }, g = (m)=>{
            m.key === "Enter" && h();
        };
        return D.jsxs("div", {
            className: "fen-container",
            children: [
                D.jsx("label", {
                    htmlFor: "fen-input",
                    className: "fen-label",
                    children: "FEN:"
                }),
                D.jsx("input", {
                    type: "text",
                    id: "fen-input",
                    value: i,
                    onChange: d,
                    onKeyDown: g,
                    className: "fen-input",
                    placeholder: "Enter FEN string here"
                }),
                s ? D.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : D.jsx("div", {
                    className: "circle-cross",
                    children: "✖"
                }),
                D.jsx("button", {
                    className: "fen-button",
                    onClick: h,
                    children: "Submit"
                })
            ]
        });
    };
    CE = ()=>{
        const l = jg(), { theme: r, enableSound: i } = Dc((m)=>m.settings), [o, s] = S.useState(!1), f = S.useRef(null), d = ()=>s((m)=>!m);
        S.useEffect(()=>{
            const m = (y)=>{
                f.current && !f.current.contains(y.target) && s(!1);
            };
            return document.addEventListener("mousedown", m), ()=>document.removeEventListener("mousedown", m);
        }, []);
        const h = (m)=>{
            l(Py(m.target.value));
        }, g = (m)=>{
            l(jy(m.target.checked));
        };
        return D.jsxs("div", {
            className: "settings-container",
            ref: f,
            children: [
                D.jsx("button", {
                    id: "settings-button",
                    className: "action-button",
                    onClick: d,
                    children: "⚙️ Settings"
                }),
                o && D.jsxs("div", {
                    className: "settings-dropdown",
                    children: [
                        D.jsxs("div", {
                            className: "dropdown-item",
                            children: [
                                D.jsx("label", {
                                    htmlFor: "themeSelect",
                                    children: "Theme"
                                }),
                                D.jsxs("select", {
                                    id: "themeSelect",
                                    value: r,
                                    onChange: h,
                                    children: [
                                        D.jsx("option", {
                                            value: "default",
                                            children: "Default"
                                        }),
                                        D.jsx("option", {
                                            value: "classic",
                                            children: "Green"
                                        }),
                                        D.jsx("option", {
                                            value: "marble",
                                            children: "Marble"
                                        }),
                                        D.jsx("option", {
                                            value: "wood",
                                            children: "Wood"
                                        }),
                                        D.jsx("option", {
                                            value: "dark",
                                            children: "Dark"
                                        })
                                    ]
                                })
                            ]
                        }),
                        D.jsxs("div", {
                            className: "checkbox-item",
                            children: [
                                D.jsx("label", {
                                    htmlFor: "soundToggle",
                                    children: "Sound"
                                }),
                                D.jsx("input", {
                                    type: "checkbox",
                                    id: "soundToggle",
                                    checked: i,
                                    onChange: g
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    xE = ()=>{
        const [l, r] = S.useState(document.body.classList.contains("dark-theme")), i = ()=>{
            document.body.classList.toggle("dark-theme"), r(!l);
        }, o = ()=>{
            const f = new Date().getHours();
            return f < 6 || f > 18;
        };
        return S.useEffect(()=>{
            o() != l && i();
        }, []), D.jsx("button", {
            onClick: i,
            className: "theme-toggle-btn",
            children: l ? "☀️" : "🌙"
        });
    };
    wE = ()=>{
        const l = jg(), { isFlipped: r } = Dc((i)=>i.game);
        return D.jsx("button", {
            onClick: ()=>l(Ay()),
            className: "action-button",
            children: r ? "Unflip Board" : "Flip Board"
        });
    };
    Ng = ()=>{
        const [l, r] = S.useState(ht.START_FEN), { isFlipped: i, theme: o } = Dc((d)=>d.settings), s = S.useCallback(({ from: d, to: h })=>{
            const g = new wc(l);
            try {
                if (!g.move({
                    from: d,
                    to: h,
                    promotion: "q"
                })) return;
                r(g.fen());
            } catch (m) {
                console.error(m);
            }
        }, [
            l
        ]), f = (d)=>{
            r(d);
        };
        return D.jsxs("div", {
            className: "main-container",
            children: [
                D.jsx("div", {
                    className: "top-container",
                    children: D.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            D.jsx(wE, {}),
                            D.jsx(CE, {}),
                            D.jsx(xE, {})
                        ]
                    })
                }),
                D.jsxs("div", {
                    className: "middle-container",
                    children: [
                        D.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        D.jsxs("div", {
                            className: `chess-container ${o}-theme`,
                            children: [
                                D.jsx("div", {
                                    className: "left-panel"
                                }),
                                D.jsxs("div", {
                                    className: "centre-area",
                                    children: [
                                        D.jsx(RE, {
                                            currentFen: l,
                                            onFenSubmit: f
                                        }),
                                        D.jsx(Qc, {
                                            className: "chess-board",
                                            fen: l,
                                            handleMove: s,
                                            isFlipped: i
                                        })
                                    ]
                                }),
                                D.jsx("div", {
                                    className: "right-panel"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    ME = S.lazy(()=>a0(()=>import("./ChessGame-BJ_DBIuh.js"), __vite__mapDeps([0,1,2,3])));
    NE = S.lazy(()=>a0(()=>import("./AnalysisGame-BtFQvLni.js"), __vite__mapDeps([4,1,2,5])));
    AE = ()=>D.jsx(_b, {
            children: D.jsxs(hb, {
                basename: "/chess-frontend",
                children: [
                    D.jsxs("nav", {
                        className: "routes",
                        children: [
                            D.jsx(zl, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analysis"
                            }),
                            D.jsx(zl, {
                                to: "/gameplay",
                                className: "action-button no-decoration",
                                children: "Gameplay"
                            }),
                            D.jsx(zl, {
                                to: "/fenviewer",
                                className: "action-button no-decoration",
                                children: "FenViewer"
                            })
                        ]
                    }),
                    D.jsx(S.Suspense, {
                        fallback: D.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: D.jsxs(G2, {
                            children: [
                                D.jsx(Bl, {
                                    path: "/analysis",
                                    element: D.jsx(Rb, {
                                        children: D.jsx(NE, {})
                                    })
                                }),
                                D.jsx(Bl, {
                                    path: "/gameplay",
                                    element: D.jsx(ME, {})
                                }),
                                D.jsx(Bl, {
                                    path: "/fenviewer",
                                    element: D.jsx(Ng, {})
                                }),
                                D.jsx(Bl, {
                                    path: "*",
                                    element: D.jsx(Ng, {})
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        });
    uv.createRoot(document.getElementById("root")).render(D.jsx(_v, {
        store: r0,
        children: D.jsx(AE, {})
    }));
})();
export { wc as C, xE as D, wE as F, Ea as P, PE as R, CE as S, Dc as a, LE as b, XE as c, ht as d, Qc as e, Ay as f, YE as g, BE as h, qE as i, D as j, QE as k, HE as l, jE as m, UE as n, bE as o, zE as p, DE as q, S as r, kE as s, IE as t, jg as u, Db as v, KE as w, r0 as x, __tla };
