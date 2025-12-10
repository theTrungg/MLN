var Kf = e => {
    throw TypeError(e)
}
;
var cc = (e, t, n) => t.has(e) || Kf("Cannot " + n);
var R = (e, t, n) => (cc(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , ee = (e, t, n) => t.has(e) ? Kf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , G = (e, t, n, r) => (cc(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ie = (e, t, n) => (cc(e, t, "access private method"),
n);
var Bo = (e, t, n, r) => ({
    set _(s) {
        G(e, t, s, n)
    },
    get _() {
        return R(e, t, r)
    }
});
function Ab(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, s);
                    i && Object.defineProperty(e, s, i.get ? i : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
function m0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var g0 = {
    exports: {}
}
  , kl = {}
  , y0 = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To = Symbol.for("react.element")
  , Mb = Symbol.for("react.portal")
  , Lb = Symbol.for("react.fragment")
  , Db = Symbol.for("react.strict_mode")
  , Ob = Symbol.for("react.profiler")
  , Vb = Symbol.for("react.provider")
  , _b = Symbol.for("react.context")
  , Ib = Symbol.for("react.forward_ref")
  , Fb = Symbol.for("react.suspense")
  , zb = Symbol.for("react.memo")
  , Bb = Symbol.for("react.lazy")
  , qf = Symbol.iterator;
function $b(e) {
    return e === null || typeof e != "object" ? null : (e = qf && e[qf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var v0 = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , x0 = Object.assign
  , w0 = {};
function ti(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = w0,
    this.updater = n || v0
}
ti.prototype.isReactComponent = {};
ti.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ti.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function b0() {}
b0.prototype = ti.prototype;
function Fd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = w0,
    this.updater = n || v0
}
var zd = Fd.prototype = new b0;
zd.constructor = Fd;
x0(zd, ti.prototype);
zd.isPureReactComponent = !0;
var Gf = Array.isArray
  , S0 = Object.prototype.hasOwnProperty
  , Bd = {
    current: null
}
  , C0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function k0(e, t, n) {
    var r, s = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            S0.call(t, r) && !C0.hasOwnProperty(r) && (s[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        s.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            s[r] === void 0 && (s[r] = a[r]);
    return {
        $$typeof: To,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Bd.current
    }
}
function Hb(e, t) {
    return {
        $$typeof: To,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function $d(e) {
    return typeof e == "object" && e !== null && e.$$typeof === To
}
function Ub(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Qf = /\/+/g;
function uc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ub("" + e.key) : t.toString(36)
}
function ma(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case To:
            case Mb:
                o = !0
            }
        }
    if (o)
        return o = e,
        s = s(o),
        e = r === "" ? "." + uc(o, 0) : r,
        Gf(s) ? (n = "",
        e != null && (n = e.replace(Qf, "$&/") + "/"),
        ma(s, t, n, "", function(u) {
            return u
        })) : s != null && ($d(s) && (s = Hb(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Qf, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Gf(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + uc(i, a);
            o += ma(i, t, n, l, s)
        }
    else if (l = $b(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + uc(i, a++),
            o += ma(i, t, n, l, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function $o(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return ma(e, r, "", "", function(i) {
        return t.call(n, i, s++)
    }),
    r
}
function Wb(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ze = {
    current: null
}
  , ga = {
    transition: null
}
  , Kb = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: ga,
    ReactCurrentOwner: Bd
};
function T0() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: $o,
    forEach: function(e, t, n) {
        $o(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return $o(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return $o(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!$d(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = ti;
Y.Fragment = Lb;
Y.Profiler = Ob;
Y.PureComponent = Fd;
Y.StrictMode = Db;
Y.Suspense = Fb;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kb;
Y.act = T0;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = x0({}, e.props)
      , s = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Bd.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            S0.call(t, l) && !C0.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: To,
        type: e.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: _b,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Vb,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = k0;
Y.createFactory = function(e) {
    var t = k0.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: Ib,
        render: e
    }
}
;
Y.isValidElement = $d;
Y.lazy = function(e) {
    return {
        $$typeof: Bb,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Wb
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: zb,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = ga.transition;
    ga.transition = {};
    try {
        e()
    } finally {
        ga.transition = t
    }
}
;
Y.unstable_act = T0;
Y.useCallback = function(e, t) {
    return Ze.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return Ze.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return Ze.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return Ze.current.useEffect(e, t)
}
;
Y.useId = function() {
    return Ze.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return Ze.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return Ze.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return Ze.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return Ze.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return Ze.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return Ze.current.useRef(e)
}
;
Y.useState = function(e) {
    return Ze.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return Ze.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return Ze.current.useTransition()
}
;
Y.version = "18.3.1";
y0.exports = Y;
var m = y0.exports;
const O = m0(m)
  , N0 = Ab({
    __proto__: null,
    default: O
}, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qb = m
  , Gb = Symbol.for("react.element")
  , Qb = Symbol.for("react.fragment")
  , Xb = Object.prototype.hasOwnProperty
  , Yb = qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Zb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function j0(e, t, n) {
    var r, s = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Xb.call(t, r) && !Zb.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: Gb,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Yb.current
    }
}
kl.Fragment = Qb;
kl.jsx = j0;
kl.jsxs = j0;
g0.exports = kl;
var c = g0.exports
  , P0 = {
    exports: {}
}
  , pt = {}
  , E0 = {
    exports: {}
}
  , R0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, A) {
        var _ = j.length;
        j.push(A);
        e: for (; 0 < _; ) {
            var K = _ - 1 >>> 1
              , U = j[K];
            if (0 < s(U, A))
                j[K] = A,
                j[_] = U,
                _ = K;
            else
                break e
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0]
    }
    function r(j) {
        if (j.length === 0)
            return null;
        var A = j[0]
          , _ = j.pop();
        if (_ !== A) {
            j[0] = _;
            e: for (var K = 0, U = j.length, X = U >>> 1; K < X; ) {
                var Z = 2 * (K + 1) - 1
                  , Se = j[Z]
                  , _e = Z + 1
                  , te = j[_e];
                if (0 > s(Se, _))
                    _e < U && 0 > s(te, Se) ? (j[K] = te,
                    j[_e] = _,
                    K = _e) : (j[K] = Se,
                    j[Z] = _,
                    K = Z);
                else if (_e < U && 0 > s(te, _))
                    j[K] = te,
                    j[_e] = _,
                    K = _e;
                else
                    break e
            }
        }
        return A
    }
    function s(j, A) {
        var _ = j.sortIndex - A.sortIndex;
        return _ !== 0 ? _ : j.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , d = 1
      , h = null
      , f = 3
      , p = !1
      , w = !1
      , v = !1
      , b = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(j) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= j)
                r(u),
                A.sortIndex = A.expirationTime,
                t(l, A);
            else
                break;
            A = n(u)
        }
    }
    function S(j) {
        if (v = !1,
        x(j),
        !w)
            if (n(l) !== null)
                w = !0,
                B(C);
            else {
                var A = n(u);
                A !== null && z(S, A.startTime - j)
            }
    }
    function C(j, A) {
        w = !1,
        v && (v = !1,
        y(N),
        N = -1),
        p = !0;
        var _ = f;
        try {
            for (x(A),
            h = n(l); h !== null && (!(h.expirationTime > A) || j && !V()); ) {
                var K = h.callback;
                if (typeof K == "function") {
                    h.callback = null,
                    f = h.priorityLevel;
                    var U = K(h.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof U == "function" ? h.callback = U : h === n(l) && r(l),
                    x(A)
                } else
                    r(l);
                h = n(l)
            }
            if (h !== null)
                var X = !0;
            else {
                var Z = n(u);
                Z !== null && z(S, Z.startTime - A),
                X = !1
            }
            return X
        } finally {
            h = null,
            f = _,
            p = !1
        }
    }
    var k = !1
      , T = null
      , N = -1
      , P = 5
      , E = -1;
    function V() {
        return !(e.unstable_now() - E < P)
    }
    function L() {
        if (T !== null) {
            var j = e.unstable_now();
            E = j;
            var A = !0;
            try {
                A = T(!0, j)
            } finally {
                A ? I() : (k = !1,
                T = null)
            }
        } else
            k = !1
    }
    var I;
    if (typeof g == "function")
        I = function() {
            g(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , H = M.port2;
        M.port1.onmessage = L,
        I = function() {
            H.postMessage(null)
        }
    } else
        I = function() {
            b(L, 0)
        }
        ;
    function B(j) {
        T = j,
        k || (k = !0,
        I())
    }
    function z(j, A) {
        N = b(function() {
            j(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(j) {
        j.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || p || (w = !0,
        B(C))
    }
    ,
    e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < j ? Math.floor(1e3 / j) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(j) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = f
        }
        var _ = f;
        f = A;
        try {
            return j()
        } finally {
            f = _
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(j, A) {
        switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            j = 3
        }
        var _ = f;
        f = j;
        try {
            return A()
        } finally {
            f = _
        }
    }
    ,
    e.unstable_scheduleCallback = function(j, A, _) {
        var K = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay,
        _ = typeof _ == "number" && 0 < _ ? K + _ : K) : _ = K,
        j) {
        case 1:
            var U = -1;
            break;
        case 2:
            U = 250;
            break;
        case 5:
            U = 1073741823;
            break;
        case 4:
            U = 1e4;
            break;
        default:
            U = 5e3
        }
        return U = _ + U,
        j = {
            id: d++,
            callback: A,
            priorityLevel: j,
            startTime: _,
            expirationTime: U,
            sortIndex: -1
        },
        _ > K ? (j.sortIndex = _,
        t(u, j),
        n(l) === null && j === n(u) && (v ? (y(N),
        N = -1) : v = !0,
        z(S, _ - K))) : (j.sortIndex = U,
        t(l, j),
        w || p || (w = !0,
        B(C))),
        j
    }
    ,
    e.unstable_shouldYield = V,
    e.unstable_wrapCallback = function(j) {
        var A = f;
        return function() {
            var _ = f;
            f = A;
            try {
                return j.apply(this, arguments)
            } finally {
                f = _
            }
        }
    }
}
)(R0);
E0.exports = R0;
var Jb = E0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e2 = m
  , ft = Jb;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var A0 = new Set
  , Wi = {};
function Qr(e, t) {
    zs(e, t),
    zs(e + "Capture", t)
}
function zs(e, t) {
    for (Wi[e] = t,
    e = 0; e < t.length; e++)
        A0.add(t[e])
}
var yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , lu = Object.prototype.hasOwnProperty
  , t2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Xf = {}
  , Yf = {};
function n2(e) {
    return lu.call(Yf, e) ? !0 : lu.call(Xf, e) ? !1 : t2.test(e) ? Yf[e] = !0 : (Xf[e] = !0,
    !1)
}
function r2(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function s2(e, t, n, r) {
    if (t === null || typeof t > "u" || r2(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Je(e, t, n, r, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Je(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    De[t] = new Je(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Je(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Je(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Je(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Je(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Je(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Je(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Je(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Hd = /[\-:]([a-z])/g;
function Ud(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Hd, Ud);
    De[t] = new Je(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hd, Ud);
    De[t] = new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hd, Ud);
    De[t] = new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Je(e,1,!1,e.toLowerCase(),null,!1,!1)
});
De.xlinkHref = new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Je(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Wd(e, t, n, r) {
    var s = De.hasOwnProperty(t) ? De[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (s2(t, n, s, r) && (n = null),
    r || s === null ? n2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Nn = e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ho = Symbol.for("react.element")
  , os = Symbol.for("react.portal")
  , as = Symbol.for("react.fragment")
  , Kd = Symbol.for("react.strict_mode")
  , cu = Symbol.for("react.profiler")
  , M0 = Symbol.for("react.provider")
  , L0 = Symbol.for("react.context")
  , qd = Symbol.for("react.forward_ref")
  , uu = Symbol.for("react.suspense")
  , du = Symbol.for("react.suspense_list")
  , Gd = Symbol.for("react.memo")
  , In = Symbol.for("react.lazy")
  , D0 = Symbol.for("react.offscreen")
  , Zf = Symbol.iterator;
function pi(e) {
    return e === null || typeof e != "object" ? null : (e = Zf && e[Zf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var me = Object.assign, dc;
function Ni(e) {
    if (dc === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            dc = t && t[1] || ""
        }
    return `
` + dc + e
}
var hc = !1;
function fc(e, t) {
    if (!e || hc)
        return "";
    hc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, a = i.length - 1; 1 <= o && 0 <= a && s[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || s[o] !== i[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        hc = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ni(e) : ""
}
function i2(e) {
    switch (e.tag) {
    case 5:
        return Ni(e.type);
    case 16:
        return Ni("Lazy");
    case 13:
        return Ni("Suspense");
    case 19:
        return Ni("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = fc(e.type, !1),
        e;
    case 11:
        return e = fc(e.type.render, !1),
        e;
    case 1:
        return e = fc(e.type, !0),
        e;
    default:
        return ""
    }
}
function hu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case as:
        return "Fragment";
    case os:
        return "Portal";
    case cu:
        return "Profiler";
    case Kd:
        return "StrictMode";
    case uu:
        return "Suspense";
    case du:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case L0:
            return (e.displayName || "Context") + ".Consumer";
        case M0:
            return (e._context.displayName || "Context") + ".Provider";
        case qd:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Gd:
            return t = e.displayName || null,
            t !== null ? t : hu(e.type) || "Memo";
        case In:
            t = e._payload,
            e = e._init;
            try {
                return hu(e(t))
            } catch {}
        }
    return null
}
function o2(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return hu(t);
    case 8:
        return t === Kd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function or(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function O0(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function a2(e) {
    var t = O0(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Uo(e) {
    e._valueTracker || (e._valueTracker = a2(e))
}
function V0(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = O0(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Da(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function fu(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Jf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = or(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function _0(e, t) {
    t = t.checked,
    t != null && Wd(e, "checked", t, !1)
}
function pu(e, t) {
    _0(e, t);
    var n = or(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? mu(e, t.type, n) : t.hasOwnProperty("defaultValue") && mu(e, t.type, or(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ep(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function mu(e, t, n) {
    (t !== "number" || Da(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ji = Array.isArray;
function Cs(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + or(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function gu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function tp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (ji(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: or(n)
    }
}
function I0(e, t) {
    var n = or(t.value)
      , r = or(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function np(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function F0(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function yu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? F0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Wo, z0 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Wo = Wo || document.createElement("div"),
        Wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Wo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ki(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ai = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , l2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ai).forEach(function(e) {
    l2.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ai[t] = Ai[e]
    })
});
function B0(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ai.hasOwnProperty(e) && Ai[e] ? ("" + t).trim() : t + "px"
}
function $0(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = B0(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var c2 = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function vu(e, t) {
    if (t) {
        if (c2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function xu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
        return !0
    }
}
var wu = null;
function Qd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var bu = null
  , ks = null
  , Ts = null;
function rp(e) {
    if (e = Po(e)) {
        if (typeof bu != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = El(t),
        bu(e.stateNode, e.type, t))
    }
}
function H0(e) {
    ks ? Ts ? Ts.push(e) : Ts = [e] : ks = e
}
function U0() {
    if (ks) {
        var e = ks
          , t = Ts;
        if (Ts = ks = null,
        rp(e),
        t)
            for (e = 0; e < t.length; e++)
                rp(t[e])
    }
}
function W0(e, t) {
    return e(t)
}
function K0() {}
var pc = !1;
function q0(e, t, n) {
    if (pc)
        return e(t, n);
    pc = !0;
    try {
        return W0(e, t, n)
    } finally {
        pc = !1,
        (ks !== null || Ts !== null) && (K0(),
        U0())
    }
}
function qi(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = El(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(D(231, t, typeof n));
    return n
}
var Su = !1;
if (yn)
    try {
        var mi = {};
        Object.defineProperty(mi, "passive", {
            get: function() {
                Su = !0
            }
        }),
        window.addEventListener("test", mi, mi),
        window.removeEventListener("test", mi, mi)
    } catch {
        Su = !1
    }
function u2(e, t, n, r, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Mi = !1
  , Oa = null
  , Va = !1
  , Cu = null
  , d2 = {
    onError: function(e) {
        Mi = !0,
        Oa = e
    }
};
function h2(e, t, n, r, s, i, o, a, l) {
    Mi = !1,
    Oa = null,
    u2.apply(d2, arguments)
}
function f2(e, t, n, r, s, i, o, a, l) {
    if (h2.apply(this, arguments),
    Mi) {
        if (Mi) {
            var u = Oa;
            Mi = !1,
            Oa = null
        } else
            throw Error(D(198));
        Va || (Va = !0,
        Cu = u)
    }
}
function Xr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function G0(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function sp(e) {
    if (Xr(e) !== e)
        throw Error(D(188))
}
function p2(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Xr(e),
        t === null)
            throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n)
                    return sp(s),
                    e;
                if (i === r)
                    return sp(s),
                    t;
                i = i.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return)
            n = s,
            r = i;
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function Q0(e) {
    return e = p2(e),
    e !== null ? X0(e) : null
}
function X0(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = X0(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Y0 = ft.unstable_scheduleCallback
  , ip = ft.unstable_cancelCallback
  , m2 = ft.unstable_shouldYield
  , g2 = ft.unstable_requestPaint
  , we = ft.unstable_now
  , y2 = ft.unstable_getCurrentPriorityLevel
  , Xd = ft.unstable_ImmediatePriority
  , Z0 = ft.unstable_UserBlockingPriority
  , _a = ft.unstable_NormalPriority
  , v2 = ft.unstable_LowPriority
  , J0 = ft.unstable_IdlePriority
  , Tl = null
  , en = null;
function x2(e) {
    if (en && typeof en.onCommitFiberRoot == "function")
        try {
            en.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var $t = Math.clz32 ? Math.clz32 : S2
  , w2 = Math.log
  , b2 = Math.LN2;
function S2(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (w2(e) / b2 | 0) | 0
}
var Ko = 64
  , qo = 4194304;
function Pi(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ia(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? r = Pi(a) : (i &= o,
        i !== 0 && (r = Pi(i)))
    } else
        o = n & ~s,
        o !== 0 ? r = Pi(o) : i !== 0 && (r = Pi(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    i = t & -t,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - $t(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function C2(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function k2(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - $t(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & n) || a & r) && (s[o] = C2(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function ku(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ey() {
    var e = Ko;
    return Ko <<= 1,
    !(Ko & 4194240) && (Ko = 64),
    e
}
function mc(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function No(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - $t(t),
    e[t] = n
}
function T2(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - $t(n)
          , i = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~i
    }
}
function Yd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - $t(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var ne = 0;
function ty(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ny, Zd, ry, sy, iy, Tu = !1, Go = [], Yn = null, Zn = null, Jn = null, Gi = new Map, Qi = new Map, zn = [], N2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function op(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Yn = null;
        break;
    case "dragenter":
    case "dragleave":
        Zn = null;
        break;
    case "mouseover":
    case "mouseout":
        Jn = null;
        break;
    case "pointerover":
    case "pointerout":
        Gi.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Qi.delete(t.pointerId)
    }
}
function gi(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
    t !== null && (t = Po(t),
    t !== null && Zd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function j2(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return Yn = gi(Yn, e, t, n, r, s),
        !0;
    case "dragenter":
        return Zn = gi(Zn, e, t, n, r, s),
        !0;
    case "mouseover":
        return Jn = gi(Jn, e, t, n, r, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Gi.set(i, gi(Gi.get(i) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Qi.set(i, gi(Qi.get(i) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function oy(e) {
    var t = jr(e.target);
    if (t !== null) {
        var n = Xr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = G0(n),
                t !== null) {
                    e.blockedOn = t,
                    iy(e.priority, function() {
                        ry(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ya(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            wu = r,
            n.target.dispatchEvent(r),
            wu = null
        } else
            return t = Po(n),
            t !== null && Zd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ap(e, t, n) {
    ya(e) && n.delete(t)
}
function P2() {
    Tu = !1,
    Yn !== null && ya(Yn) && (Yn = null),
    Zn !== null && ya(Zn) && (Zn = null),
    Jn !== null && ya(Jn) && (Jn = null),
    Gi.forEach(ap),
    Qi.forEach(ap)
}
function yi(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Tu || (Tu = !0,
    ft.unstable_scheduleCallback(ft.unstable_NormalPriority, P2)))
}
function Xi(e) {
    function t(s) {
        return yi(s, e)
    }
    if (0 < Go.length) {
        yi(Go[0], e);
        for (var n = 1; n < Go.length; n++) {
            var r = Go[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Yn !== null && yi(Yn, e),
    Zn !== null && yi(Zn, e),
    Jn !== null && yi(Jn, e),
    Gi.forEach(t),
    Qi.forEach(t),
    n = 0; n < zn.length; n++)
        r = zn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < zn.length && (n = zn[0],
    n.blockedOn === null); )
        oy(n),
        n.blockedOn === null && zn.shift()
}
var Ns = Nn.ReactCurrentBatchConfig
  , Fa = !0;
function E2(e, t, n, r) {
    var s = ne
      , i = Ns.transition;
    Ns.transition = null;
    try {
        ne = 1,
        Jd(e, t, n, r)
    } finally {
        ne = s,
        Ns.transition = i
    }
}
function R2(e, t, n, r) {
    var s = ne
      , i = Ns.transition;
    Ns.transition = null;
    try {
        ne = 4,
        Jd(e, t, n, r)
    } finally {
        ne = s,
        Ns.transition = i
    }
}
function Jd(e, t, n, r) {
    if (Fa) {
        var s = Nu(e, t, n, r);
        if (s === null)
            Tc(e, t, r, za, n),
            op(e, r);
        else if (j2(s, e, t, n, r))
            r.stopPropagation();
        else if (op(e, r),
        t & 4 && -1 < N2.indexOf(e)) {
            for (; s !== null; ) {
                var i = Po(s);
                if (i !== null && ny(i),
                i = Nu(e, t, n, r),
                i === null && Tc(e, t, r, za, n),
                i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            Tc(e, t, r, null, n)
    }
}
var za = null;
function Nu(e, t, n, r) {
    if (za = null,
    e = Qd(r),
    e = jr(e),
    e !== null)
        if (t = Xr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = G0(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return za = e,
    null
}
function ay(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (y2()) {
        case Xd:
            return 1;
        case Z0:
            return 4;
        case _a:
        case v2:
            return 16;
        case J0:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var qn = null
  , eh = null
  , va = null;
function ly() {
    if (va)
        return va;
    var e, t = eh, n = t.length, r, s = "value"in qn ? qn.value : qn.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++)
        ;
    return va = s.slice(e, 1 < r ? 1 - r : void 0)
}
function xa(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Qo() {
    return !0
}
function lp() {
    return !1
}
function mt(e) {
    function t(n, r, s, i, o) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Qo : lp,
        this.isPropagationStopped = lp,
        this
    }
    return me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Qo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Qo)
        },
        persist: function() {},
        isPersistent: Qo
    }),
    t
}
var ni = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, th = mt(ni), jo = me({}, ni, {
    view: 0,
    detail: 0
}), A2 = mt(jo), gc, yc, vi, Nl = me({}, jo, {
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
    getModifierState: nh,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== vi && (vi && e.type === "mousemove" ? (gc = e.screenX - vi.screenX,
        yc = e.screenY - vi.screenY) : yc = gc = 0,
        vi = e),
        gc)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : yc
    }
}), cp = mt(Nl), M2 = me({}, Nl, {
    dataTransfer: 0
}), L2 = mt(M2), D2 = me({}, jo, {
    relatedTarget: 0
}), vc = mt(D2), O2 = me({}, ni, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), V2 = mt(O2), _2 = me({}, ni, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), I2 = mt(_2), F2 = me({}, ni, {
    data: 0
}), up = mt(F2), z2 = {
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
}, B2 = {
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
}, $2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function H2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $2[e]) ? !!t[e] : !1
}
function nh() {
    return H2
}
var U2 = me({}, jo, {
    key: function(e) {
        if (e.key) {
            var t = z2[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = xa(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? B2[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nh,
    charCode: function(e) {
        return e.type === "keypress" ? xa(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? xa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , W2 = mt(U2)
  , K2 = me({}, Nl, {
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
})
  , dp = mt(K2)
  , q2 = me({}, jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nh
})
  , G2 = mt(q2)
  , Q2 = me({}, ni, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , X2 = mt(Q2)
  , Y2 = me({}, Nl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Z2 = mt(Y2)
  , J2 = [9, 13, 27, 32]
  , rh = yn && "CompositionEvent"in window
  , Li = null;
yn && "documentMode"in document && (Li = document.documentMode);
var eS = yn && "TextEvent"in window && !Li
  , cy = yn && (!rh || Li && 8 < Li && 11 >= Li)
  , hp = " "
  , fp = !1;
function uy(e, t) {
    switch (e) {
    case "keyup":
        return J2.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function dy(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ls = !1;
function tS(e, t) {
    switch (e) {
    case "compositionend":
        return dy(t);
    case "keypress":
        return t.which !== 32 ? null : (fp = !0,
        hp);
    case "textInput":
        return e = t.data,
        e === hp && fp ? null : e;
    default:
        return null
    }
}
function nS(e, t) {
    if (ls)
        return e === "compositionend" || !rh && uy(e, t) ? (e = ly(),
        va = eh = qn = null,
        ls = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return cy && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var rS = {
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
function pp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rS[e.type] : t === "textarea"
}
function hy(e, t, n, r) {
    H0(r),
    t = Ba(t, "onChange"),
    0 < t.length && (n = new th("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Di = null
  , Yi = null;
function sS(e) {
    Cy(e, 0)
}
function jl(e) {
    var t = ds(e);
    if (V0(t))
        return e
}
function iS(e, t) {
    if (e === "change")
        return t
}
var fy = !1;
if (yn) {
    var xc;
    if (yn) {
        var wc = "oninput"in document;
        if (!wc) {
            var mp = document.createElement("div");
            mp.setAttribute("oninput", "return;"),
            wc = typeof mp.oninput == "function"
        }
        xc = wc
    } else
        xc = !1;
    fy = xc && (!document.documentMode || 9 < document.documentMode)
}
function gp() {
    Di && (Di.detachEvent("onpropertychange", py),
    Yi = Di = null)
}
function py(e) {
    if (e.propertyName === "value" && jl(Yi)) {
        var t = [];
        hy(t, Yi, e, Qd(e)),
        q0(sS, t)
    }
}
function oS(e, t, n) {
    e === "focusin" ? (gp(),
    Di = t,
    Yi = n,
    Di.attachEvent("onpropertychange", py)) : e === "focusout" && gp()
}
function aS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return jl(Yi)
}
function lS(e, t) {
    if (e === "click")
        return jl(t)
}
function cS(e, t) {
    if (e === "input" || e === "change")
        return jl(t)
}
function uS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ut = typeof Object.is == "function" ? Object.is : uS;
function Zi(e, t) {
    if (Ut(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!lu.call(t, s) || !Ut(e[s], t[s]))
            return !1
    }
    return !0
}
function yp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function vp(e, t) {
    var n = yp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = yp(n)
    }
}
function my(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? my(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function gy() {
    for (var e = window, t = Da(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Da(e.document)
    }
    return t
}
function sh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function dS(e) {
    var t = gy()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && my(n.ownerDocument.documentElement, n)) {
        if (r !== null && sh(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , i = Math.min(r.start, s);
                r = r.end === void 0 ? i : Math.min(r.end, s),
                !e.extend && i > r && (s = r,
                r = i,
                i = s),
                s = vp(n, i);
                var o = vp(n, r);
                s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var hS = yn && "documentMode"in document && 11 >= document.documentMode
  , cs = null
  , ju = null
  , Oi = null
  , Pu = !1;
function xp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pu || cs == null || cs !== Da(r) || (r = cs,
    "selectionStart"in r && sh(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Oi && Zi(Oi, r) || (Oi = r,
    r = Ba(ju, "onSelect"),
    0 < r.length && (t = new th("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = cs)))
}
function Xo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var us = {
    animationend: Xo("Animation", "AnimationEnd"),
    animationiteration: Xo("Animation", "AnimationIteration"),
    animationstart: Xo("Animation", "AnimationStart"),
    transitionend: Xo("Transition", "TransitionEnd")
}
  , bc = {}
  , yy = {};
yn && (yy = document.createElement("div").style,
"AnimationEvent"in window || (delete us.animationend.animation,
delete us.animationiteration.animation,
delete us.animationstart.animation),
"TransitionEvent"in window || delete us.transitionend.transition);
function Pl(e) {
    if (bc[e])
        return bc[e];
    if (!us[e])
        return e;
    var t = us[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in yy)
            return bc[e] = t[n];
    return e
}
var vy = Pl("animationend")
  , xy = Pl("animationiteration")
  , wy = Pl("animationstart")
  , by = Pl("transitionend")
  , Sy = new Map
  , wp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fr(e, t) {
    Sy.set(e, t),
    Qr(t, [e])
}
for (var Sc = 0; Sc < wp.length; Sc++) {
    var Cc = wp[Sc]
      , fS = Cc.toLowerCase()
      , pS = Cc[0].toUpperCase() + Cc.slice(1);
    fr(fS, "on" + pS)
}
fr(vy, "onAnimationEnd");
fr(xy, "onAnimationIteration");
fr(wy, "onAnimationStart");
fr("dblclick", "onDoubleClick");
fr("focusin", "onFocus");
fr("focusout", "onBlur");
fr(by, "onTransitionEnd");
zs("onMouseEnter", ["mouseout", "mouseover"]);
zs("onMouseLeave", ["mouseout", "mouseover"]);
zs("onPointerEnter", ["pointerout", "pointerover"]);
zs("onPointerLeave", ["pointerout", "pointerover"]);
Qr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , mS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));
function bp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    f2(r, t, void 0, e),
    e.currentTarget = null
}
function Cy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    bp(s, a, u),
                    i = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    bp(s, a, u),
                    i = l
                }
        }
    }
    if (Va)
        throw e = Cu,
        Va = !1,
        Cu = null,
        e
}
function ae(e, t) {
    var n = t[Lu];
    n === void 0 && (n = t[Lu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ky(t, e, 2, !1),
    n.add(r))
}
function kc(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ky(n, e, r, t)
}
var Yo = "_reactListening" + Math.random().toString(36).slice(2);
function Ji(e) {
    if (!e[Yo]) {
        e[Yo] = !0,
        A0.forEach(function(n) {
            n !== "selectionchange" && (mS.has(n) || kc(n, !1, e),
            kc(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Yo] || (t[Yo] = !0,
        kc("selectionchange", !1, t))
    }
}
function ky(e, t, n, r) {
    switch (ay(t)) {
    case 1:
        var s = E2;
        break;
    case 4:
        s = R2;
        break;
    default:
        s = Jd
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !Su || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function Tc(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = jr(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    q0(function() {
        var u = i
          , d = Qd(n)
          , h = [];
        e: {
            var f = Sy.get(e);
            if (f !== void 0) {
                var p = th
                  , w = e;
                switch (e) {
                case "keypress":
                    if (xa(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = W2;
                    break;
                case "focusin":
                    w = "focus",
                    p = vc;
                    break;
                case "focusout":
                    w = "blur",
                    p = vc;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = vc;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = cp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = L2;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = G2;
                    break;
                case vy:
                case xy:
                case wy:
                    p = V2;
                    break;
                case by:
                    p = X2;
                    break;
                case "scroll":
                    p = A2;
                    break;
                case "wheel":
                    p = Z2;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = I2;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = dp
                }
                var v = (t & 4) !== 0
                  , b = !v && e === "scroll"
                  , y = v ? f !== null ? f + "Capture" : null : f;
                v = [];
                for (var g = u, x; g !== null; ) {
                    x = g;
                    var S = x.stateNode;
                    if (x.tag === 5 && S !== null && (x = S,
                    y !== null && (S = qi(g, y),
                    S != null && v.push(eo(g, S, x)))),
                    b)
                        break;
                    g = g.return
                }
                0 < v.length && (f = new p(f,w,null,n,d),
                h.push({
                    event: f,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                f && n !== wu && (w = n.relatedTarget || n.fromElement) && (jr(w) || w[vn]))
                    break e;
                if ((p || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                p ? (w = n.relatedTarget || n.toElement,
                p = u,
                w = w ? jr(w) : null,
                w !== null && (b = Xr(w),
                w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (p = null,
                w = u),
                p !== w)) {
                    if (v = cp,
                    S = "onMouseLeave",
                    y = "onMouseEnter",
                    g = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = dp,
                    S = "onPointerLeave",
                    y = "onPointerEnter",
                    g = "pointer"),
                    b = p == null ? f : ds(p),
                    x = w == null ? f : ds(w),
                    f = new v(S,g + "leave",p,n,d),
                    f.target = b,
                    f.relatedTarget = x,
                    S = null,
                    jr(d) === u && (v = new v(y,g + "enter",w,n,d),
                    v.target = x,
                    v.relatedTarget = b,
                    S = v),
                    b = S,
                    p && w)
                        t: {
                            for (v = p,
                            y = w,
                            g = 0,
                            x = v; x; x = ss(x))
                                g++;
                            for (x = 0,
                            S = y; S; S = ss(S))
                                x++;
                            for (; 0 < g - x; )
                                v = ss(v),
                                g--;
                            for (; 0 < x - g; )
                                y = ss(y),
                                x--;
                            for (; g--; ) {
                                if (v === y || y !== null && v === y.alternate)
                                    break t;
                                v = ss(v),
                                y = ss(y)
                            }
                            v = null
                        }
                    else
                        v = null;
                    p !== null && Sp(h, f, p, v, !1),
                    w !== null && b !== null && Sp(h, b, w, v, !0)
                }
            }
            e: {
                if (f = u ? ds(u) : window,
                p = f.nodeName && f.nodeName.toLowerCase(),
                p === "select" || p === "input" && f.type === "file")
                    var C = iS;
                else if (pp(f))
                    if (fy)
                        C = cS;
                    else {
                        C = aS;
                        var k = oS
                    }
                else
                    (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = lS);
                if (C && (C = C(e, u))) {
                    hy(h, C, n, d);
                    break e
                }
                k && k(e, f, u),
                e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && mu(f, "number", f.value)
            }
            switch (k = u ? ds(u) : window,
            e) {
            case "focusin":
                (pp(k) || k.contentEditable === "true") && (cs = k,
                ju = u,
                Oi = null);
                break;
            case "focusout":
                Oi = ju = cs = null;
                break;
            case "mousedown":
                Pu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Pu = !1,
                xp(h, n, d);
                break;
            case "selectionchange":
                if (hS)
                    break;
            case "keydown":
            case "keyup":
                xp(h, n, d)
            }
            var T;
            if (rh)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                ls ? uy(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (cy && n.locale !== "ko" && (ls || N !== "onCompositionStart" ? N === "onCompositionEnd" && ls && (T = ly()) : (qn = d,
            eh = "value"in qn ? qn.value : qn.textContent,
            ls = !0)),
            k = Ba(u, N),
            0 < k.length && (N = new up(N,e,null,n,d),
            h.push({
                event: N,
                listeners: k
            }),
            T ? N.data = T : (T = dy(n),
            T !== null && (N.data = T)))),
            (T = eS ? tS(e, n) : nS(e, n)) && (u = Ba(u, "onBeforeInput"),
            0 < u.length && (d = new up("onBeforeInput","beforeinput",null,n,d),
            h.push({
                event: d,
                listeners: u
            }),
            d.data = T))
        }
        Cy(h, t)
    })
}
function eo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ba(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = qi(e, n),
        i != null && r.unshift(eo(e, i, s)),
        i = qi(e, t),
        i != null && r.push(eo(e, i, s))),
        e = e.return
    }
    return r
}
function ss(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Sp(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        s ? (l = qi(n, i),
        l != null && o.unshift(eo(n, l, a))) : s || (l = qi(n, i),
        l != null && o.push(eo(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var gS = /\r\n?/g
  , yS = /\u0000|\uFFFD/g;
function Cp(e) {
    return (typeof e == "string" ? e : "" + e).replace(gS, `
`).replace(yS, "")
}
function Zo(e, t, n) {
    if (t = Cp(t),
    Cp(e) !== t && n)
        throw Error(D(425))
}
function $a() {}
var Eu = null
  , Ru = null;
function Au(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Mu = typeof setTimeout == "function" ? setTimeout : void 0
  , vS = typeof clearTimeout == "function" ? clearTimeout : void 0
  , kp = typeof Promise == "function" ? Promise : void 0
  , xS = typeof queueMicrotask == "function" ? queueMicrotask : typeof kp < "u" ? function(e) {
    return kp.resolve(null).then(e).catch(wS)
}
: Mu;
function wS(e) {
    setTimeout(function() {
        throw e
    })
}
function Nc(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    Xi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Xi(t)
}
function er(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Tp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ri = Math.random().toString(36).slice(2)
  , Zt = "__reactFiber$" + ri
  , to = "__reactProps$" + ri
  , vn = "__reactContainer$" + ri
  , Lu = "__reactEvents$" + ri
  , bS = "__reactListeners$" + ri
  , SS = "__reactHandles$" + ri;
function jr(e) {
    var t = e[Zt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[vn] || n[Zt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Tp(e); e !== null; ) {
                    if (n = e[Zt])
                        return n;
                    e = Tp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Po(e) {
    return e = e[Zt] || e[vn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ds(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function El(e) {
    return e[to] || null
}
var Du = []
  , hs = -1;
function pr(e) {
    return {
        current: e
    }
}
function le(e) {
    0 > hs || (e.current = Du[hs],
    Du[hs] = null,
    hs--)
}
function ie(e, t) {
    hs++,
    Du[hs] = e.current,
    e.current = t
}
var ar = {}
  , Ue = pr(ar)
  , st = pr(!1)
  , $r = ar;
function Bs(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return ar;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n)
        s[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function it(e) {
    return e = e.childContextTypes,
    e != null
}
function Ha() {
    le(st),
    le(Ue)
}
function Np(e, t, n) {
    if (Ue.current !== ar)
        throw Error(D(168));
    ie(Ue, t),
    ie(st, n)
}
function Ty(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(D(108, o2(e) || "Unknown", s));
    return me({}, n, r)
}
function Ua(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ar,
    $r = Ue.current,
    ie(Ue, e),
    ie(st, st.current),
    !0
}
function jp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = Ty(e, t, $r),
    r.__reactInternalMemoizedMergedChildContext = e,
    le(st),
    le(Ue),
    ie(Ue, e)) : le(st),
    ie(st, n)
}
var hn = null
  , Rl = !1
  , jc = !1;
function Ny(e) {
    hn === null ? hn = [e] : hn.push(e)
}
function CS(e) {
    Rl = !0,
    Ny(e)
}
function mr() {
    if (!jc && hn !== null) {
        jc = !0;
        var e = 0
          , t = ne;
        try {
            var n = hn;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            hn = null,
            Rl = !1
        } catch (s) {
            throw hn !== null && (hn = hn.slice(e + 1)),
            Y0(Xd, mr),
            s
        } finally {
            ne = t,
            jc = !1
        }
    }
    return null
}
var fs = []
  , ps = 0
  , Wa = null
  , Ka = 0
  , xt = []
  , wt = 0
  , Hr = null
  , pn = 1
  , mn = "";
function kr(e, t) {
    fs[ps++] = Ka,
    fs[ps++] = Wa,
    Wa = e,
    Ka = t
}
function jy(e, t, n) {
    xt[wt++] = pn,
    xt[wt++] = mn,
    xt[wt++] = Hr,
    Hr = e;
    var r = pn;
    e = mn;
    var s = 32 - $t(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var i = 32 - $t(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        s -= o,
        pn = 1 << 32 - $t(t) + s | n << s | r,
        mn = i + e
    } else
        pn = 1 << i | n << s | r,
        mn = e
}
function ih(e) {
    e.return !== null && (kr(e, 1),
    jy(e, 1, 0))
}
function oh(e) {
    for (; e === Wa; )
        Wa = fs[--ps],
        fs[ps] = null,
        Ka = fs[--ps],
        fs[ps] = null;
    for (; e === Hr; )
        Hr = xt[--wt],
        xt[wt] = null,
        mn = xt[--wt],
        xt[wt] = null,
        pn = xt[--wt],
        xt[wt] = null
}
var dt = null
  , ut = null
  , ue = !1
  , Bt = null;
function Py(e, t) {
    var n = bt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Pp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        dt = e,
        ut = er(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        dt = e,
        ut = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Hr !== null ? {
            id: pn,
            overflow: mn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = bt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        dt = e,
        ut = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ou(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Vu(e) {
    if (ue) {
        var t = ut;
        if (t) {
            var n = t;
            if (!Pp(e, t)) {
                if (Ou(e))
                    throw Error(D(418));
                t = er(n.nextSibling);
                var r = dt;
                t && Pp(e, t) ? Py(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                dt = e)
            }
        } else {
            if (Ou(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            dt = e
        }
    }
}
function Ep(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    dt = e
}
function Jo(e) {
    if (e !== dt)
        return !1;
    if (!ue)
        return Ep(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Au(e.type, e.memoizedProps)),
    t && (t = ut)) {
        if (Ou(e))
            throw Ey(),
            Error(D(418));
        for (; t; )
            Py(e, t),
            t = er(t.nextSibling)
    }
    if (Ep(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ut = er(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ut = null
        }
    } else
        ut = dt ? er(e.stateNode.nextSibling) : null;
    return !0
}
function Ey() {
    for (var e = ut; e; )
        e = er(e.nextSibling)
}
function $s() {
    ut = dt = null,
    ue = !1
}
function ah(e) {
    Bt === null ? Bt = [e] : Bt.push(e)
}
var kS = Nn.ReactCurrentBatchConfig;
function xi(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var s = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = s.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function ea(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Rp(e) {
    var t = e._init;
    return t(e._payload)
}
function Ry(e) {
    function t(y, g) {
        if (e) {
            var x = y.deletions;
            x === null ? (y.deletions = [g],
            y.flags |= 16) : x.push(g)
        }
    }
    function n(y, g) {
        if (!e)
            return null;
        for (; g !== null; )
            t(y, g),
            g = g.sibling;
        return null
    }
    function r(y, g) {
        for (y = new Map; g !== null; )
            g.key !== null ? y.set(g.key, g) : y.set(g.index, g),
            g = g.sibling;
        return y
    }
    function s(y, g) {
        return y = sr(y, g),
        y.index = 0,
        y.sibling = null,
        y
    }
    function i(y, g, x) {
        return y.index = x,
        e ? (x = y.alternate,
        x !== null ? (x = x.index,
        x < g ? (y.flags |= 2,
        g) : x) : (y.flags |= 2,
        g)) : (y.flags |= 1048576,
        g)
    }
    function o(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function a(y, g, x, S) {
        return g === null || g.tag !== 6 ? (g = Dc(x, y.mode, S),
        g.return = y,
        g) : (g = s(g, x),
        g.return = y,
        g)
    }
    function l(y, g, x, S) {
        var C = x.type;
        return C === as ? d(y, g, x.props.children, S, x.key) : g !== null && (g.elementType === C || typeof C == "object" && C !== null && C.$$typeof === In && Rp(C) === g.type) ? (S = s(g, x.props),
        S.ref = xi(y, g, x),
        S.return = y,
        S) : (S = Na(x.type, x.key, x.props, null, y.mode, S),
        S.ref = xi(y, g, x),
        S.return = y,
        S)
    }
    function u(y, g, x, S) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation ? (g = Oc(x, y.mode, S),
        g.return = y,
        g) : (g = s(g, x.children || []),
        g.return = y,
        g)
    }
    function d(y, g, x, S, C) {
        return g === null || g.tag !== 7 ? (g = Fr(x, y.mode, S, C),
        g.return = y,
        g) : (g = s(g, x),
        g.return = y,
        g)
    }
    function h(y, g, x) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = Dc("" + g, y.mode, x),
            g.return = y,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ho:
                return x = Na(g.type, g.key, g.props, null, y.mode, x),
                x.ref = xi(y, null, g),
                x.return = y,
                x;
            case os:
                return g = Oc(g, y.mode, x),
                g.return = y,
                g;
            case In:
                var S = g._init;
                return h(y, S(g._payload), x)
            }
            if (ji(g) || pi(g))
                return g = Fr(g, y.mode, x, null),
                g.return = y,
                g;
            ea(y, g)
        }
        return null
    }
    function f(y, g, x, S) {
        var C = g !== null ? g.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return C !== null ? null : a(y, g, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ho:
                return x.key === C ? l(y, g, x, S) : null;
            case os:
                return x.key === C ? u(y, g, x, S) : null;
            case In:
                return C = x._init,
                f(y, g, C(x._payload), S)
            }
            if (ji(x) || pi(x))
                return C !== null ? null : d(y, g, x, S, null);
            ea(y, x)
        }
        return null
    }
    function p(y, g, x, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return y = y.get(x) || null,
            a(g, y, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Ho:
                return y = y.get(S.key === null ? x : S.key) || null,
                l(g, y, S, C);
            case os:
                return y = y.get(S.key === null ? x : S.key) || null,
                u(g, y, S, C);
            case In:
                var k = S._init;
                return p(y, g, x, k(S._payload), C)
            }
            if (ji(S) || pi(S))
                return y = y.get(x) || null,
                d(g, y, S, C, null);
            ea(g, S)
        }
        return null
    }
    function w(y, g, x, S) {
        for (var C = null, k = null, T = g, N = g = 0, P = null; T !== null && N < x.length; N++) {
            T.index > N ? (P = T,
            T = null) : P = T.sibling;
            var E = f(y, T, x[N], S);
            if (E === null) {
                T === null && (T = P);
                break
            }
            e && T && E.alternate === null && t(y, T),
            g = i(E, g, N),
            k === null ? C = E : k.sibling = E,
            k = E,
            T = P
        }
        if (N === x.length)
            return n(y, T),
            ue && kr(y, N),
            C;
        if (T === null) {
            for (; N < x.length; N++)
                T = h(y, x[N], S),
                T !== null && (g = i(T, g, N),
                k === null ? C = T : k.sibling = T,
                k = T);
            return ue && kr(y, N),
            C
        }
        for (T = r(y, T); N < x.length; N++)
            P = p(T, y, N, x[N], S),
            P !== null && (e && P.alternate !== null && T.delete(P.key === null ? N : P.key),
            g = i(P, g, N),
            k === null ? C = P : k.sibling = P,
            k = P);
        return e && T.forEach(function(V) {
            return t(y, V)
        }),
        ue && kr(y, N),
        C
    }
    function v(y, g, x, S) {
        var C = pi(x);
        if (typeof C != "function")
            throw Error(D(150));
        if (x = C.call(x),
        x == null)
            throw Error(D(151));
        for (var k = C = null, T = g, N = g = 0, P = null, E = x.next(); T !== null && !E.done; N++,
        E = x.next()) {
            T.index > N ? (P = T,
            T = null) : P = T.sibling;
            var V = f(y, T, E.value, S);
            if (V === null) {
                T === null && (T = P);
                break
            }
            e && T && V.alternate === null && t(y, T),
            g = i(V, g, N),
            k === null ? C = V : k.sibling = V,
            k = V,
            T = P
        }
        if (E.done)
            return n(y, T),
            ue && kr(y, N),
            C;
        if (T === null) {
            for (; !E.done; N++,
            E = x.next())
                E = h(y, E.value, S),
                E !== null && (g = i(E, g, N),
                k === null ? C = E : k.sibling = E,
                k = E);
            return ue && kr(y, N),
            C
        }
        for (T = r(y, T); !E.done; N++,
        E = x.next())
            E = p(T, y, N, E.value, S),
            E !== null && (e && E.alternate !== null && T.delete(E.key === null ? N : E.key),
            g = i(E, g, N),
            k === null ? C = E : k.sibling = E,
            k = E);
        return e && T.forEach(function(L) {
            return t(y, L)
        }),
        ue && kr(y, N),
        C
    }
    function b(y, g, x, S) {
        if (typeof x == "object" && x !== null && x.type === as && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ho:
                e: {
                    for (var C = x.key, k = g; k !== null; ) {
                        if (k.key === C) {
                            if (C = x.type,
                            C === as) {
                                if (k.tag === 7) {
                                    n(y, k.sibling),
                                    g = s(k, x.props.children),
                                    g.return = y,
                                    y = g;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === In && Rp(C) === k.type) {
                                n(y, k.sibling),
                                g = s(k, x.props),
                                g.ref = xi(y, k, x),
                                g.return = y,
                                y = g;
                                break e
                            }
                            n(y, k);
                            break
                        } else
                            t(y, k);
                        k = k.sibling
                    }
                    x.type === as ? (g = Fr(x.props.children, y.mode, S, x.key),
                    g.return = y,
                    y = g) : (S = Na(x.type, x.key, x.props, null, y.mode, S),
                    S.ref = xi(y, g, x),
                    S.return = y,
                    y = S)
                }
                return o(y);
            case os:
                e: {
                    for (k = x.key; g !== null; ) {
                        if (g.key === k)
                            if (g.tag === 4 && g.stateNode.containerInfo === x.containerInfo && g.stateNode.implementation === x.implementation) {
                                n(y, g.sibling),
                                g = s(g, x.children || []),
                                g.return = y,
                                y = g;
                                break e
                            } else {
                                n(y, g);
                                break
                            }
                        else
                            t(y, g);
                        g = g.sibling
                    }
                    g = Oc(x, y.mode, S),
                    g.return = y,
                    y = g
                }
                return o(y);
            case In:
                return k = x._init,
                b(y, g, k(x._payload), S)
            }
            if (ji(x))
                return w(y, g, x, S);
            if (pi(x))
                return v(y, g, x, S);
            ea(y, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        g !== null && g.tag === 6 ? (n(y, g.sibling),
        g = s(g, x),
        g.return = y,
        y = g) : (n(y, g),
        g = Dc(x, y.mode, S),
        g.return = y,
        y = g),
        o(y)) : n(y, g)
    }
    return b
}
var Hs = Ry(!0)
  , Ay = Ry(!1)
  , qa = pr(null)
  , Ga = null
  , ms = null
  , lh = null;
function ch() {
    lh = ms = Ga = null
}
function uh(e) {
    var t = qa.current;
    le(qa),
    e._currentValue = t
}
function _u(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function js(e, t) {
    Ga = e,
    lh = ms = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (nt = !0),
    e.firstContext = null)
}
function Tt(e) {
    var t = e._currentValue;
    if (lh !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ms === null) {
            if (Ga === null)
                throw Error(D(308));
            ms = e,
            Ga.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ms = ms.next = e;
    return t
}
var Pr = null;
function dh(e) {
    Pr === null ? Pr = [e] : Pr.push(e)
}
function My(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    dh(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    xn(e, r)
}
function xn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Fn = !1;
function hh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ly(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function gn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function tr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    J & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        xn(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    dh(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    xn(e, n)
}
function wa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Yd(e, n)
    }
}
function Ap(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? s = i = t : i = i.next = t
        } else
            s = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Qa(e, t, n, r) {
    var s = e.updateQueue;
    Fn = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? i = u : o.next = u,
        o = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== o && (a === null ? d.firstBaseUpdate = u : a.next = u,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var h = s.baseState;
        o = 0,
        d = u = l = null,
        a = i;
        do {
            var f = a.lane
              , p = a.eventTime;
            if ((r & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e
                      , v = a;
                    switch (f = t,
                    p = n,
                    v.tag) {
                    case 1:
                        if (w = v.payload,
                        typeof w == "function") {
                            h = w.call(p, h, f);
                            break e
                        }
                        h = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = v.payload,
                        f = typeof w == "function" ? w.call(p, h, f) : w,
                        f == null)
                            break e;
                        h = me({}, h, f);
                        break e;
                    case 2:
                        Fn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [a] : f.push(a))
            } else
                p = {
                    eventTime: p,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (u = d = p,
                l = h) : d = d.next = p,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
                s.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = h),
        s.baseState = l,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = d,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                o |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            i === null && (s.shared.lanes = 0);
        Wr |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function Mp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(D(191, s));
                s.call(r)
            }
        }
}
var Eo = {}
  , tn = pr(Eo)
  , no = pr(Eo)
  , ro = pr(Eo);
function Er(e) {
    if (e === Eo)
        throw Error(D(174));
    return e
}
function fh(e, t) {
    switch (ie(ro, t),
    ie(no, e),
    ie(tn, Eo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : yu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = yu(t, e)
    }
    le(tn),
    ie(tn, t)
}
function Us() {
    le(tn),
    le(no),
    le(ro)
}
function Dy(e) {
    Er(ro.current);
    var t = Er(tn.current)
      , n = yu(t, e.type);
    t !== n && (ie(no, e),
    ie(tn, n))
}
function ph(e) {
    no.current === e && (le(tn),
    le(no))
}
var he = pr(0);
function Xa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Pc = [];
function mh() {
    for (var e = 0; e < Pc.length; e++)
        Pc[e]._workInProgressVersionPrimary = null;
    Pc.length = 0
}
var ba = Nn.ReactCurrentDispatcher
  , Ec = Nn.ReactCurrentBatchConfig
  , Ur = 0
  , pe = null
  , Ne = null
  , Pe = null
  , Ya = !1
  , Vi = !1
  , so = 0
  , TS = 0;
function Fe() {
    throw Error(D(321))
}
function gh(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ut(e[n], t[n]))
            return !1;
    return !0
}
function yh(e, t, n, r, s, i) {
    if (Ur = i,
    pe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ba.current = e === null || e.memoizedState === null ? ES : RS,
    e = n(r, s),
    Vi) {
        i = 0;
        do {
            if (Vi = !1,
            so = 0,
            25 <= i)
                throw Error(D(301));
            i += 1,
            Pe = Ne = null,
            t.updateQueue = null,
            ba.current = AS,
            e = n(r, s)
        } while (Vi)
    }
    if (ba.current = Za,
    t = Ne !== null && Ne.next !== null,
    Ur = 0,
    Pe = Ne = pe = null,
    Ya = !1,
    t)
        throw Error(D(300));
    return e
}
function vh() {
    var e = so !== 0;
    return so = 0,
    e
}
function Gt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Pe === null ? pe.memoizedState = Pe = e : Pe = Pe.next = e,
    Pe
}
function Nt() {
    if (Ne === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ne.next;
    var t = Pe === null ? pe.memoizedState : Pe.next;
    if (t !== null)
        Pe = t,
        Ne = e;
    else {
        if (e === null)
            throw Error(D(310));
        Ne = e,
        e = {
            memoizedState: Ne.memoizedState,
            baseState: Ne.baseState,
            baseQueue: Ne.baseQueue,
            queue: Ne.queue,
            next: null
        },
        Pe === null ? pe.memoizedState = Pe = e : Pe = Pe.next = e
    }
    return Pe
}
function io(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Rc(e) {
    var t = Nt()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = Ne
      , s = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        r.baseQueue = s = i,
        n.pending = null
    }
    if (s !== null) {
        i = s.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = i;
        do {
            var d = u.lane;
            if ((Ur & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var h = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = h,
                o = r) : l = l.next = h,
                pe.lanes |= d,
                Wr |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? o = r : l.next = a,
        Ut(r, t.memoizedState) || (nt = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            i = s.lane,
            pe.lanes |= i,
            Wr |= i,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ac(e) {
    var t = Nt()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , i = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== s);
        Ut(i, t.memoizedState) || (nt = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Oy() {}
function Vy(e, t) {
    var n = pe
      , r = Nt()
      , s = t()
      , i = !Ut(r.memoizedState, s);
    if (i && (r.memoizedState = s,
    nt = !0),
    r = r.queue,
    xh(Fy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Pe !== null && Pe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        oo(9, Iy.bind(null, n, r, s, t), void 0, null),
        Ee === null)
            throw Error(D(349));
        Ur & 30 || _y(n, t, s)
    }
    return s
}
function _y(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Iy(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    zy(t) && By(e)
}
function Fy(e, t, n) {
    return n(function() {
        zy(t) && By(e)
    })
}
function zy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ut(e, n)
    } catch {
        return !0
    }
}
function By(e) {
    var t = xn(e, 1);
    t !== null && Ht(t, e, 1, -1)
}
function Lp(e) {
    var t = Gt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: io,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = PS.bind(null, pe, e),
    [t.memoizedState, e]
}
function oo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function $y() {
    return Nt().memoizedState
}
function Sa(e, t, n, r) {
    var s = Gt();
    pe.flags |= e,
    s.memoizedState = oo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Al(e, t, n, r) {
    var s = Nt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ne !== null) {
        var o = Ne.memoizedState;
        if (i = o.destroy,
        r !== null && gh(r, o.deps)) {
            s.memoizedState = oo(t, n, i, r);
            return
        }
    }
    pe.flags |= e,
    s.memoizedState = oo(1 | t, n, i, r)
}
function Dp(e, t) {
    return Sa(8390656, 8, e, t)
}
function xh(e, t) {
    return Al(2048, 8, e, t)
}
function Hy(e, t) {
    return Al(4, 2, e, t)
}
function Uy(e, t) {
    return Al(4, 4, e, t)
}
function Wy(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Ky(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Al(4, 4, Wy.bind(null, t, e), n)
}
function wh() {}
function qy(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gh(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Gy(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gh(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Qy(e, t, n) {
    return Ur & 21 ? (Ut(n, t) || (n = ey(),
    pe.lanes |= n,
    Wr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    nt = !0),
    e.memoizedState = n)
}
function NS(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ec.transition;
    Ec.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = n,
        Ec.transition = r
    }
}
function Xy() {
    return Nt().memoizedState
}
function jS(e, t, n) {
    var r = rr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Yy(e))
        Zy(t, n);
    else if (n = My(e, t, n, r),
    n !== null) {
        var s = Ye();
        Ht(n, e, r, s),
        Jy(n, t, r)
    }
}
function PS(e, t, n) {
    var r = rr(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Yy(e))
        Zy(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , a = i(o, n);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                Ut(a, o)) {
                    var l = t.interleaved;
                    l === null ? (s.next = s,
                    dh(t)) : (s.next = l.next,
                    l.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = My(e, t, s, r),
        n !== null && (s = Ye(),
        Ht(n, e, r, s),
        Jy(n, t, r))
    }
}
function Yy(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe
}
function Zy(e, t) {
    Vi = Ya = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Jy(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Yd(e, n)
    }
}
var Za = {
    readContext: Tt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1
}
  , ES = {
    readContext: Tt,
    useCallback: function(e, t) {
        return Gt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Tt,
    useEffect: Dp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Sa(4194308, 4, Wy.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Sa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Sa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Gt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Gt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = jS.bind(null, pe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Gt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Lp,
    useDebugValue: wh,
    useDeferredValue: function(e) {
        return Gt().memoizedState = e
    },
    useTransition: function() {
        var e = Lp(!1)
          , t = e[0];
        return e = NS.bind(null, e[1]),
        Gt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = pe
          , s = Gt();
        if (ue) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            Ee === null)
                throw Error(D(349));
            Ur & 30 || _y(r, t, n)
        }
        s.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return s.queue = i,
        Dp(Fy.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        oo(9, Iy.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Gt()
          , t = Ee.identifierPrefix;
        if (ue) {
            var n = mn
              , r = pn;
            n = (r & ~(1 << 32 - $t(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = so++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = TS++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , RS = {
    readContext: Tt,
    useCallback: qy,
    useContext: Tt,
    useEffect: xh,
    useImperativeHandle: Ky,
    useInsertionEffect: Hy,
    useLayoutEffect: Uy,
    useMemo: Gy,
    useReducer: Rc,
    useRef: $y,
    useState: function() {
        return Rc(io)
    },
    useDebugValue: wh,
    useDeferredValue: function(e) {
        var t = Nt();
        return Qy(t, Ne.memoizedState, e)
    },
    useTransition: function() {
        var e = Rc(io)[0]
          , t = Nt().memoizedState;
        return [e, t]
    },
    useMutableSource: Oy,
    useSyncExternalStore: Vy,
    useId: Xy,
    unstable_isNewReconciler: !1
}
  , AS = {
    readContext: Tt,
    useCallback: qy,
    useContext: Tt,
    useEffect: xh,
    useImperativeHandle: Ky,
    useInsertionEffect: Hy,
    useLayoutEffect: Uy,
    useMemo: Gy,
    useReducer: Ac,
    useRef: $y,
    useState: function() {
        return Ac(io)
    },
    useDebugValue: wh,
    useDeferredValue: function(e) {
        var t = Nt();
        return Ne === null ? t.memoizedState = e : Qy(t, Ne.memoizedState, e)
    },
    useTransition: function() {
        var e = Ac(io)[0]
          , t = Nt().memoizedState;
        return [e, t]
    },
    useMutableSource: Oy,
    useSyncExternalStore: Vy,
    useId: Xy,
    unstable_isNewReconciler: !1
};
function Vt(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Iu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : me({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ml = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Xr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ye()
          , s = rr(e)
          , i = gn(r, s);
        i.payload = t,
        n != null && (i.callback = n),
        t = tr(e, i, s),
        t !== null && (Ht(t, e, s, r),
        wa(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ye()
          , s = rr(e)
          , i = gn(r, s);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = tr(e, i, s),
        t !== null && (Ht(t, e, s, r),
        wa(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ye()
          , r = rr(e)
          , s = gn(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = tr(e, s, r),
        t !== null && (Ht(t, e, r, n),
        wa(t, e, r))
    }
};
function Op(e, t, n, r, s, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Zi(n, r) || !Zi(s, i) : !0
}
function ev(e, t, n) {
    var r = !1
      , s = ar
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Tt(i) : (s = it(t) ? $r : Ue.current,
    r = t.contextTypes,
    i = (r = r != null) ? Bs(e, s) : ar),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ml,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Vp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ml.enqueueReplaceState(t, t.state, null)
}
function Fu(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    hh(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = Tt(i) : (i = it(t) ? $r : Ue.current,
    s.context = Bs(e, i)),
    s.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Iu(e, t, i, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && Ml.enqueueReplaceState(s, s.state, null),
    Qa(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ws(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += i2(r),
            r = r.return;
        while (r);
        var s = n
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function Mc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function zu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var MS = typeof WeakMap == "function" ? WeakMap : Map;
function tv(e, t, n) {
    n = gn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        el || (el = !0,
        Xu = r),
        zu(e, t)
    }
    ,
    n
}
function nv(e, t, n) {
    n = gn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            zu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        zu(e, t),
        typeof r != "function" && (nr === null ? nr = new Set([this]) : nr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function _p(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new MS;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = KS.bind(null, e, t, n),
    t.then(e, e))
}
function Ip(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Fp(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gn(-1, 1),
    t.tag = 2,
    tr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var LS = Nn.ReactCurrentOwner
  , nt = !1;
function Ke(e, t, n, r) {
    t.child = e === null ? Ay(t, null, n, r) : Hs(t, e.child, n, r)
}
function zp(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return js(t, s),
    r = yh(e, t, n, r, i, s),
    n = vh(),
    e !== null && !nt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    wn(e, t, s)) : (ue && n && ih(t),
    t.flags |= 1,
    Ke(e, t, r, s),
    t.child)
}
function Bp(e, t, n, r, s) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Ph(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        rv(e, t, i, r, s)) : (e = Na(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Zi,
        n(o, r) && e.ref === t.ref)
            return wn(e, t, s)
    }
    return t.flags |= 1,
    e = sr(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function rv(e, t, n, r, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Zi(i, r) && e.ref === t.ref)
            if (nt = !1,
            t.pendingProps = r = i,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (nt = !0);
            else
                return t.lanes = e.lanes,
                wn(e, t, s)
    }
    return Bu(e, t, n, r, s)
}
function sv(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ie(ys, lt),
            lt |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ie(ys, lt),
                lt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ie(ys, lt),
            lt |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(ys, lt),
        lt |= r;
    return Ke(e, t, s, n),
    t.child
}
function iv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Bu(e, t, n, r, s) {
    var i = it(n) ? $r : Ue.current;
    return i = Bs(t, i),
    js(t, s),
    n = yh(e, t, n, r, i, s),
    r = vh(),
    e !== null && !nt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    wn(e, t, s)) : (ue && r && ih(t),
    t.flags |= 1,
    Ke(e, t, n, s),
    t.child)
}
function $p(e, t, n, r, s) {
    if (it(n)) {
        var i = !0;
        Ua(t)
    } else
        i = !1;
    if (js(t, s),
    t.stateNode === null)
        Ca(e, t),
        ev(t, n, r),
        Fu(t, n, r, s),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Tt(u) : (u = it(n) ? $r : Ue.current,
        u = Bs(t, u));
        var d = n.getDerivedStateFromProps
          , h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && Vp(t, o, r, u),
        Fn = !1;
        var f = t.memoizedState;
        o.state = f,
        Qa(t, r, o, s),
        l = t.memoizedState,
        a !== r || f !== l || st.current || Fn ? (typeof d == "function" && (Iu(t, n, d, r),
        l = t.memoizedState),
        (a = Fn || Op(t, n, a, r, f, l, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Ly(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Vt(t.type, a),
        o.props = u,
        h = t.pendingProps,
        f = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Tt(l) : (l = it(n) ? $r : Ue.current,
        l = Bs(t, l));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || f !== l) && Vp(t, o, r, l),
        Fn = !1,
        f = t.memoizedState,
        o.state = f,
        Qa(t, r, o, s);
        var w = t.memoizedState;
        a !== h || f !== w || st.current || Fn ? (typeof p == "function" && (Iu(t, n, p, r),
        w = t.memoizedState),
        (u = Fn || Op(t, n, u, r, f, w, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        o.props = r,
        o.state = w,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return $u(e, t, n, r, i, s)
}
function $u(e, t, n, r, s, i) {
    iv(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return s && jp(t, n, !1),
        wn(e, t, i);
    r = t.stateNode,
    LS.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Hs(t, e.child, null, i),
    t.child = Hs(t, null, a, i)) : Ke(e, t, a, i),
    t.memoizedState = r.state,
    s && jp(t, n, !0),
    t.child
}
function ov(e) {
    var t = e.stateNode;
    t.pendingContext ? Np(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Np(e, t.context, !1),
    fh(e, t.containerInfo)
}
function Hp(e, t, n, r, s) {
    return $s(),
    ah(s),
    t.flags |= 256,
    Ke(e, t, n, r),
    t.child
}
var Hu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Uu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function av(e, t, n) {
    var r = t.pendingProps, s = he.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    ie(he, s & 1),
    e === null)
        return Vu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Ol(o, r, 0, null),
        e = Fr(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Uu(n),
        t.memoizedState = Hu,
        e) : bh(t, o));
    if (s = e.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return DS(e, t, o, r, a, s, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        s = e.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = sr(s, l),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? i = sr(a, i) : (i = Fr(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Uu(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Hu,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = sr(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function bh(e, t) {
    return t = Ol({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ta(e, t, n, r) {
    return r !== null && ah(r),
    Hs(t, e.child, null, n),
    e = bh(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function DS(e, t, n, r, s, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Mc(Error(D(422))),
        ta(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        s = t.mode,
        r = Ol({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        i = Fr(i, s, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Hs(t, e.child, null, o),
        t.child.memoizedState = Uu(o),
        t.memoizedState = Hu,
        i);
    if (!(t.mode & 1))
        return ta(e, t, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(D(419)),
        r = Mc(i, r, void 0),
        ta(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    nt || a) {
        if (r = Ee,
        r !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            xn(e, s),
            Ht(r, e, s, -1))
        }
        return jh(),
        r = Mc(Error(D(421))),
        ta(e, t, o, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = qS.bind(null, e),
    s._reactRetry = t,
    null) : (e = i.treeContext,
    ut = er(s.nextSibling),
    dt = t,
    ue = !0,
    Bt = null,
    e !== null && (xt[wt++] = pn,
    xt[wt++] = mn,
    xt[wt++] = Hr,
    pn = e.id,
    mn = e.overflow,
    Hr = t),
    t = bh(t, r.children),
    t.flags |= 4096,
    t)
}
function Up(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    _u(e.return, t, n)
}
function Lc(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = s)
}
function lv(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , i = r.tail;
    if (Ke(e, t, r.children, n),
    r = he.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Up(e, n, t);
                else if (e.tag === 19)
                    Up(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ie(he, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && Xa(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            Lc(t, !1, s, n, i);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && Xa(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            Lc(t, !0, n, null, i);
            break;
        case "together":
            Lc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ca(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function wn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Wr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = sr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = sr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function OS(e, t, n) {
    switch (t.tag) {
    case 3:
        ov(t),
        $s();
        break;
    case 5:
        Dy(t);
        break;
    case 1:
        it(t.type) && Ua(t);
        break;
    case 4:
        fh(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        ie(qa, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(he, he.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? av(e, t, n) : (ie(he, he.current & 1),
            e = wn(e, t, n),
            e !== null ? e.sibling : null);
        ie(he, he.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return lv(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        ie(he, he.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        sv(e, t, n)
    }
    return wn(e, t, n)
}
var cv, Wu, uv, dv;
cv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Wu = function() {}
;
uv = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        Er(tn.current);
        var i = null;
        switch (n) {
        case "input":
            s = fu(e, s),
            r = fu(e, r),
            i = [];
            break;
        case "select":
            s = me({}, s, {
                value: void 0
            }),
            r = me({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = gu(e, s),
            r = gu(e, r),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $a)
        }
        vu(n, r);
        var o;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = s != null ? s[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wi.hasOwnProperty(u) ? (l != null && u === "onScroll" && ae("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
dv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function wi(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function VS(e, t, n) {
    var r = t.pendingProps;
    switch (oh(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ze(t),
        null;
    case 1:
        return it(t.type) && Ha(),
        ze(t),
        null;
    case 3:
        return r = t.stateNode,
        Us(),
        le(st),
        le(Ue),
        mh(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Jo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Bt !== null && (Ju(Bt),
        Bt = null))),
        Wu(e, t),
        ze(t),
        null;
    case 5:
        ph(t);
        var s = Er(ro.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            uv(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return ze(t),
                null
            }
            if (e = Er(tn.current),
            Jo(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Zt] = t,
                r[to] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ae("cancel", r),
                    ae("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ae("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < Ei.length; s++)
                        ae(Ei[s], r);
                    break;
                case "source":
                    ae("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ae("error", r),
                    ae("load", r);
                    break;
                case "details":
                    ae("toggle", r);
                    break;
                case "input":
                    Jf(r, i),
                    ae("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    ae("invalid", r);
                    break;
                case "textarea":
                    tp(r, i),
                    ae("invalid", r)
                }
                vu(n, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Zo(r.textContent, a, e),
                        s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Zo(r.textContent, a, e),
                        s = ["children", "" + a]) : Wi.hasOwnProperty(o) && a != null && o === "onScroll" && ae("scroll", r)
                    }
                switch (n) {
                case "input":
                    Uo(r),
                    ep(r, i, !0);
                    break;
                case "textarea":
                    Uo(r),
                    np(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = $a)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = F0(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Zt] = t,
                e[to] = r,
                cv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = xu(n, r),
                    n) {
                    case "dialog":
                        ae("cancel", e),
                        ae("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ae("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < Ei.length; s++)
                            ae(Ei[s], e);
                        s = r;
                        break;
                    case "source":
                        ae("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ae("error", e),
                        ae("load", e),
                        s = r;
                        break;
                    case "details":
                        ae("toggle", e),
                        s = r;
                        break;
                    case "input":
                        Jf(e, r),
                        s = fu(e, r),
                        ae("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = me({}, r, {
                            value: void 0
                        }),
                        ae("invalid", e);
                        break;
                    case "textarea":
                        tp(e, r),
                        s = gu(e, r),
                        ae("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    vu(n, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? $0(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && z0(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ki(e, l) : typeof l == "number" && Ki(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wi.hasOwnProperty(i) ? l != null && i === "onScroll" && ae("scroll", e) : l != null && Wd(e, i, l, o))
                        }
                    switch (n) {
                    case "input":
                        Uo(e),
                        ep(e, r, !1);
                        break;
                    case "textarea":
                        Uo(e),
                        np(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + or(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Cs(e, !!r.multiple, i, !1) : r.defaultValue != null && Cs(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = $a)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ze(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            dv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = Er(ro.current),
            Er(tn.current),
            Jo(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Zt] = t,
                (i = r.nodeValue !== n) && (e = dt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Zo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Zo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Zt] = t,
                t.stateNode = r
        }
        return ze(t),
        null;
    case 13:
        if (le(he),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && ut !== null && t.mode & 1 && !(t.flags & 128))
                Ey(),
                $s(),
                t.flags |= 98560,
                i = !1;
            else if (i = Jo(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(D(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(D(317));
                    i[Zt] = t
                } else
                    $s(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ze(t),
                i = !1
            } else
                Bt !== null && (Ju(Bt),
                Bt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || he.current & 1 ? je === 0 && (je = 3) : jh())),
        t.updateQueue !== null && (t.flags |= 4),
        ze(t),
        null);
    case 4:
        return Us(),
        Wu(e, t),
        e === null && Ji(t.stateNode.containerInfo),
        ze(t),
        null;
    case 10:
        return uh(t.type._context),
        ze(t),
        null;
    case 17:
        return it(t.type) && Ha(),
        ze(t),
        null;
    case 19:
        if (le(he),
        i = t.memoizedState,
        i === null)
            return ze(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                wi(i, !1);
            else {
                if (je !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Xa(e),
                        o !== null) {
                            for (t.flags |= 128,
                            wi(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ie(he, he.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && we() > Ks && (t.flags |= 128,
                r = !0,
                wi(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Xa(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    wi(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !ue)
                        return ze(t),
                        null
                } else
                    2 * we() - i.renderingStartTime > Ks && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    wi(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = we(),
        t.sibling = null,
        n = he.current,
        ie(he, r ? n & 1 | 2 : n & 1),
        t) : (ze(t),
        null);
    case 22:
    case 23:
        return Nh(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? lt & 1073741824 && (ze(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function _S(e, t) {
    switch (oh(t),
    t.tag) {
    case 1:
        return it(t.type) && Ha(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Us(),
        le(st),
        le(Ue),
        mh(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ph(t),
        null;
    case 13:
        if (le(he),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            $s()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return le(he),
        null;
    case 4:
        return Us(),
        null;
    case 10:
        return uh(t.type._context),
        null;
    case 22:
    case 23:
        return Nh(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var na = !1
  , $e = !1
  , IS = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function gs(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ve(e, t, r)
            }
        else
            n.current = null
}
function Ku(e, t, n) {
    try {
        n()
    } catch (r) {
        ve(e, t, r)
    }
}
var Wp = !1;
function FS(e, t) {
    if (Eu = Fa,
    e = gy(),
    sh(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , h = e
                      , f = null;
                    t: for (; ; ) {
                        for (var p; h !== n || s !== 0 && h.nodeType !== 3 || (a = o + s),
                        h !== i || r !== 0 && h.nodeType !== 3 || (l = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (p = h.firstChild) !== null; )
                            f = h,
                            h = p;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (f === n && ++u === s && (a = o),
                            f === i && ++d === r && (l = o),
                            (p = h.nextSibling) !== null)
                                break;
                            h = f,
                            f = h.parentNode
                        }
                        h = p
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ru = {
        focusedElem: e,
        selectionRange: n
    },
    Fa = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var v = w.memoizedProps
                                  , b = w.memoizedState
                                  , y = t.stateNode
                                  , g = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Vt(t.type, v), b);
                                y.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (S) {
                    ve(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return w = Wp,
    Wp = !1,
    w
}
function _i(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Ku(t, n, i)
            }
            s = s.next
        } while (s !== r)
    }
}
function Ll(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function qu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function hv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    hv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Zt],
    delete t[to],
    delete t[Lu],
    delete t[bS],
    delete t[SS])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function fv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Kp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || fv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = $a));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Gu(e, t, n),
        e = e.sibling; e !== null; )
            Gu(e, t, n),
            e = e.sibling
}
function Qu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Qu(e, t, n),
        e = e.sibling; e !== null; )
            Qu(e, t, n),
            e = e.sibling
}
var Re = null
  , zt = !1;
function Ln(e, t, n) {
    for (n = n.child; n !== null; )
        pv(e, t, n),
        n = n.sibling
}
function pv(e, t, n) {
    if (en && typeof en.onCommitFiberUnmount == "function")
        try {
            en.onCommitFiberUnmount(Tl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        $e || gs(n, t);
    case 6:
        var r = Re
          , s = zt;
        Re = null,
        Ln(e, t, n),
        Re = r,
        zt = s,
        Re !== null && (zt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
        break;
    case 18:
        Re !== null && (zt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? Nc(e.parentNode, n) : e.nodeType === 1 && Nc(e, n),
        Xi(e)) : Nc(Re, n.stateNode));
        break;
    case 4:
        r = Re,
        s = zt,
        Re = n.stateNode.containerInfo,
        zt = !0,
        Ln(e, t, n),
        Re = r,
        zt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!$e && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Ku(n, t, o),
                s = s.next
            } while (s !== r)
        }
        Ln(e, t, n);
        break;
    case 1:
        if (!$e && (gs(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ve(n, t, a)
            }
        Ln(e, t, n);
        break;
    case 21:
        Ln(e, t, n);
        break;
    case 22:
        n.mode & 1 ? ($e = (r = $e) || n.memoizedState !== null,
        Ln(e, t, n),
        $e = r) : Ln(e, t, n);
        break;
    default:
        Ln(e, t, n)
    }
}
function qp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new IS),
        t.forEach(function(r) {
            var s = GS.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function At(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Re = a.stateNode,
                        zt = !1;
                        break e;
                    case 3:
                        Re = a.stateNode.containerInfo,
                        zt = !0;
                        break e;
                    case 4:
                        Re = a.stateNode.containerInfo,
                        zt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Re === null)
                    throw Error(D(160));
                pv(i, o, s),
                Re = null,
                zt = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                ve(s, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            mv(t, e),
            t = t.sibling
}
function mv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (At(t, e),
        qt(e),
        r & 4) {
            try {
                _i(3, e, e.return),
                Ll(3, e)
            } catch (v) {
                ve(e, e.return, v)
            }
            try {
                _i(5, e, e.return)
            } catch (v) {
                ve(e, e.return, v)
            }
        }
        break;
    case 1:
        At(t, e),
        qt(e),
        r & 512 && n !== null && gs(n, n.return);
        break;
    case 5:
        if (At(t, e),
        qt(e),
        r & 512 && n !== null && gs(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                Ki(s, "")
            } catch (v) {
                ve(e, e.return, v)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && _0(s, i),
                    xu(a, o);
                    var u = xu(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o]
                          , h = l[o + 1];
                        d === "style" ? $0(s, h) : d === "dangerouslySetInnerHTML" ? z0(s, h) : d === "children" ? Ki(s, h) : Wd(s, d, h, u)
                    }
                    switch (a) {
                    case "input":
                        pu(s, i);
                        break;
                    case "textarea":
                        I0(s, i);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        p != null ? Cs(s, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? Cs(s, !!i.multiple, i.defaultValue, !0) : Cs(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[to] = i
                } catch (v) {
                    ve(e, e.return, v)
                }
        }
        break;
    case 6:
        if (At(t, e),
        qt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            s = e.stateNode,
            i = e.memoizedProps;
            try {
                s.nodeValue = i
            } catch (v) {
                ve(e, e.return, v)
            }
        }
        break;
    case 3:
        if (At(t, e),
        qt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Xi(t.containerInfo)
            } catch (v) {
                ve(e, e.return, v)
            }
        break;
    case 4:
        At(t, e),
        qt(e);
        break;
    case 13:
        At(t, e),
        qt(e),
        s = e.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (kh = we())),
        r & 4 && qp(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? ($e = (u = $e) || d,
        At(t, e),
        $e = u) : At(t, e),
        qt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (F = e,
                d = e.child; d !== null; ) {
                    for (h = F = d; F !== null; ) {
                        switch (f = F,
                        p = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            _i(4, f, f.return);
                            break;
                        case 1:
                            gs(f, f.return);
                            var w = f.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (v) {
                                    ve(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            gs(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Qp(h);
                                continue
                            }
                        }
                        p !== null ? (p.return = f,
                        F = p) : Qp(h)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (d === null) {
                        d = h;
                        try {
                            s = h.stateNode,
                            u ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = h.stateNode,
                            l = h.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = B0("display", o))
                        } catch (v) {
                            ve(e, e.return, v)
                        }
                    }
                } else if (h.tag === 6) {
                    if (d === null)
                        try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (v) {
                            ve(e, e.return, v)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    d === h && (d = null),
                    h = h.return
                }
                d === h && (d = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        At(t, e),
        qt(e),
        r & 4 && qp(e);
        break;
    case 21:
        break;
    default:
        At(t, e),
        qt(e)
    }
}
function qt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (fv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (Ki(s, ""),
                r.flags &= -33);
                var i = Kp(e);
                Qu(e, i, s);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Kp(e);
                Gu(e, a, o);
                break;
            default:
                throw Error(D(161))
            }
        } catch (l) {
            ve(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function zS(e, t, n) {
    F = e,
    gv(e)
}
function gv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var s = F
          , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || na;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || $e;
                a = na;
                var u = $e;
                if (na = o,
                ($e = l) && !u)
                    for (F = s; F !== null; )
                        o = F,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Xp(s) : l !== null ? (l.return = o,
                        F = l) : Xp(s);
                for (; i !== null; )
                    F = i,
                    gv(i),
                    i = i.sibling;
                F = s,
                na = a,
                $e = u
            }
            Gp(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            F = i) : Gp(e)
    }
}
function Gp(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        $e || Ll(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !$e)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : Vt(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Mp(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Mp(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && Xi(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(D(163))
                    }
                $e || t.flags & 512 && qu(t)
            } catch (f) {
                ve(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Qp(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Xp(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ll(4, t)
                } catch (l) {
                    ve(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ve(t, s, l)
                    }
                }
                var i = t.return;
                try {
                    qu(t)
                } catch (l) {
                    ve(t, i, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    qu(t)
                } catch (l) {
                    ve(t, o, l)
                }
            }
        } catch (l) {
            ve(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            F = a;
            break
        }
        F = t.return
    }
}
var BS = Math.ceil
  , Ja = Nn.ReactCurrentDispatcher
  , Sh = Nn.ReactCurrentOwner
  , Ct = Nn.ReactCurrentBatchConfig
  , J = 0
  , Ee = null
  , ke = null
  , Le = 0
  , lt = 0
  , ys = pr(0)
  , je = 0
  , ao = null
  , Wr = 0
  , Dl = 0
  , Ch = 0
  , Ii = null
  , tt = null
  , kh = 0
  , Ks = 1 / 0
  , dn = null
  , el = !1
  , Xu = null
  , nr = null
  , ra = !1
  , Gn = null
  , tl = 0
  , Fi = 0
  , Yu = null
  , ka = -1
  , Ta = 0;
function Ye() {
    return J & 6 ? we() : ka !== -1 ? ka : ka = we()
}
function rr(e) {
    return e.mode & 1 ? J & 2 && Le !== 0 ? Le & -Le : kS.transition !== null ? (Ta === 0 && (Ta = ey()),
    Ta) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ay(e.type)),
    e) : 1
}
function Ht(e, t, n, r) {
    if (50 < Fi)
        throw Fi = 0,
        Yu = null,
        Error(D(185));
    No(e, n, r),
    (!(J & 2) || e !== Ee) && (e === Ee && (!(J & 2) && (Dl |= n),
    je === 4 && Bn(e, Le)),
    ot(e, r),
    n === 1 && J === 0 && !(t.mode & 1) && (Ks = we() + 500,
    Rl && mr()))
}
function ot(e, t) {
    var n = e.callbackNode;
    k2(e, t);
    var r = Ia(e, e === Ee ? Le : 0);
    if (r === 0)
        n !== null && ip(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ip(n),
        t === 1)
            e.tag === 0 ? CS(Yp.bind(null, e)) : Ny(Yp.bind(null, e)),
            xS(function() {
                !(J & 6) && mr()
            }),
            n = null;
        else {
            switch (ty(r)) {
            case 1:
                n = Xd;
                break;
            case 4:
                n = Z0;
                break;
            case 16:
                n = _a;
                break;
            case 536870912:
                n = J0;
                break;
            default:
                n = _a
            }
            n = kv(n, yv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function yv(e, t) {
    if (ka = -1,
    Ta = 0,
    J & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (Ps() && e.callbackNode !== n)
        return null;
    var r = Ia(e, e === Ee ? Le : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = nl(e, r);
    else {
        t = r;
        var s = J;
        J |= 2;
        var i = xv();
        (Ee !== e || Le !== t) && (dn = null,
        Ks = we() + 500,
        Ir(e, t));
        do
            try {
                US();
                break
            } catch (a) {
                vv(e, a)
            }
        while (!0);
        ch(),
        Ja.current = i,
        J = s,
        ke !== null ? t = 0 : (Ee = null,
        Le = 0,
        t = je)
    }
    if (t !== 0) {
        if (t === 2 && (s = ku(e),
        s !== 0 && (r = s,
        t = Zu(e, s))),
        t === 1)
            throw n = ao,
            Ir(e, 0),
            Bn(e, r),
            ot(e, we()),
            n;
        if (t === 6)
            Bn(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !$S(s) && (t = nl(e, r),
            t === 2 && (i = ku(e),
            i !== 0 && (r = i,
            t = Zu(e, i))),
            t === 1))
                throw n = ao,
                Ir(e, 0),
                Bn(e, r),
                ot(e, we()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                Tr(e, tt, dn);
                break;
            case 3:
                if (Bn(e, r),
                (r & 130023424) === r && (t = kh + 500 - we(),
                10 < t)) {
                    if (Ia(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        Ye(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = Mu(Tr.bind(null, e, tt, dn), t);
                    break
                }
                Tr(e, tt, dn);
                break;
            case 4:
                if (Bn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var o = 31 - $t(r);
                    i = 1 << o,
                    o = t[o],
                    o > s && (s = o),
                    r &= ~i
                }
                if (r = s,
                r = we() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * BS(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Mu(Tr.bind(null, e, tt, dn), r);
                    break
                }
                Tr(e, tt, dn);
                break;
            case 5:
                Tr(e, tt, dn);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return ot(e, we()),
    e.callbackNode === n ? yv.bind(null, e) : null
}
function Zu(e, t) {
    var n = Ii;
    return e.current.memoizedState.isDehydrated && (Ir(e, t).flags |= 256),
    e = nl(e, t),
    e !== 2 && (t = tt,
    tt = n,
    t !== null && Ju(t)),
    e
}
function Ju(e) {
    tt === null ? tt = e : tt.push.apply(tt, e)
}
function $S(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ut(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Bn(e, t) {
    for (t &= ~Ch,
    t &= ~Dl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - $t(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Yp(e) {
    if (J & 6)
        throw Error(D(327));
    Ps();
    var t = Ia(e, 0);
    if (!(t & 1))
        return ot(e, we()),
        null;
    var n = nl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ku(e);
        r !== 0 && (t = r,
        n = Zu(e, r))
    }
    if (n === 1)
        throw n = ao,
        Ir(e, 0),
        Bn(e, t),
        ot(e, we()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Tr(e, tt, dn),
    ot(e, we()),
    null
}
function Th(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = n,
        J === 0 && (Ks = we() + 500,
        Rl && mr())
    }
}
function Kr(e) {
    Gn !== null && Gn.tag === 0 && !(J & 6) && Ps();
    var t = J;
    J |= 1;
    var n = Ct.transition
      , r = ne;
    try {
        if (Ct.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = r,
        Ct.transition = n,
        J = t,
        !(J & 6) && mr()
    }
}
function Nh() {
    lt = ys.current,
    le(ys)
}
function Ir(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    vS(n)),
    ke !== null)
        for (n = ke.return; n !== null; ) {
            var r = n;
            switch (oh(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ha();
                break;
            case 3:
                Us(),
                le(st),
                le(Ue),
                mh();
                break;
            case 5:
                ph(r);
                break;
            case 4:
                Us();
                break;
            case 13:
                le(he);
                break;
            case 19:
                le(he);
                break;
            case 10:
                uh(r.type._context);
                break;
            case 22:
            case 23:
                Nh()
            }
            n = n.return
        }
    if (Ee = e,
    ke = e = sr(e.current, null),
    Le = lt = t,
    je = 0,
    ao = null,
    Ch = Dl = Wr = 0,
    tt = Ii = null,
    Pr !== null) {
        for (t = 0; t < Pr.length; t++)
            if (n = Pr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    r.next = o
                }
                n.pending = r
            }
        Pr = null
    }
    return e
}
function vv(e, t) {
    do {
        var n = ke;
        try {
            if (ch(),
            ba.current = Za,
            Ya) {
                for (var r = pe.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Ya = !1
            }
            if (Ur = 0,
            Pe = Ne = pe = null,
            Vi = !1,
            so = 0,
            Sh.current = null,
            n === null || n.return === null) {
                je = 1,
                ao = t,
                ke = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = Le,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = a
                      , h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var p = Ip(o);
                    if (p !== null) {
                        p.flags &= -257,
                        Fp(p, o, a, i, t),
                        p.mode & 1 && _p(i, u, t),
                        t = p,
                        l = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            w.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            _p(i, u, t),
                            jh();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (ue && a.mode & 1) {
                    var b = Ip(o);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256),
                        Fp(b, o, a, i, t),
                        ah(Ws(l, a));
                        break e
                    }
                }
                i = l = Ws(l, a),
                je !== 4 && (je = 2),
                Ii === null ? Ii = [i] : Ii.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var y = tv(i, l, t);
                        Ap(i, y);
                        break e;
                    case 1:
                        a = l;
                        var g = i.type
                          , x = i.stateNode;
                        if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (nr === null || !nr.has(x)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = nv(i, a, t);
                            Ap(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            bv(n)
        } catch (C) {
            t = C,
            ke === n && n !== null && (ke = n = n.return);
            continue
        }
        break
    } while (!0)
}
function xv() {
    var e = Ja.current;
    return Ja.current = Za,
    e === null ? Za : e
}
function jh() {
    (je === 0 || je === 3 || je === 2) && (je = 4),
    Ee === null || !(Wr & 268435455) && !(Dl & 268435455) || Bn(Ee, Le)
}
function nl(e, t) {
    var n = J;
    J |= 2;
    var r = xv();
    (Ee !== e || Le !== t) && (dn = null,
    Ir(e, t));
    do
        try {
            HS();
            break
        } catch (s) {
            vv(e, s)
        }
    while (!0);
    if (ch(),
    J = n,
    Ja.current = r,
    ke !== null)
        throw Error(D(261));
    return Ee = null,
    Le = 0,
    je
}
function HS() {
    for (; ke !== null; )
        wv(ke)
}
function US() {
    for (; ke !== null && !m2(); )
        wv(ke)
}
function wv(e) {
    var t = Cv(e.alternate, e, lt);
    e.memoizedProps = e.pendingProps,
    t === null ? bv(e) : ke = t,
    Sh.current = null
}
function bv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = _S(n, t),
            n !== null) {
                n.flags &= 32767,
                ke = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                je = 6,
                ke = null;
                return
            }
        } else if (n = VS(n, t, lt),
        n !== null) {
            ke = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ke = t;
            return
        }
        ke = t = e
    } while (t !== null);
    je === 0 && (je = 5)
}
function Tr(e, t, n) {
    var r = ne
      , s = Ct.transition;
    try {
        Ct.transition = null,
        ne = 1,
        WS(e, t, n, r)
    } finally {
        Ct.transition = s,
        ne = r
    }
    return null
}
function WS(e, t, n, r) {
    do
        Ps();
    while (Gn !== null);
    if (J & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (T2(e, i),
    e === Ee && (ke = Ee = null,
    Le = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ra || (ra = !0,
    kv(_a, function() {
        return Ps(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Ct.transition,
        Ct.transition = null;
        var o = ne;
        ne = 1;
        var a = J;
        J |= 4,
        Sh.current = null,
        FS(e, n),
        mv(n, e),
        dS(Ru),
        Fa = !!Eu,
        Ru = Eu = null,
        e.current = n,
        zS(n),
        g2(),
        J = a,
        ne = o,
        Ct.transition = i
    } else
        e.current = n;
    if (ra && (ra = !1,
    Gn = e,
    tl = s),
    i = e.pendingLanes,
    i === 0 && (nr = null),
    x2(n.stateNode),
    ot(e, we()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (el)
        throw el = !1,
        e = Xu,
        Xu = null,
        e;
    return tl & 1 && e.tag !== 0 && Ps(),
    i = e.pendingLanes,
    i & 1 ? e === Yu ? Fi++ : (Fi = 0,
    Yu = e) : Fi = 0,
    mr(),
    null
}
function Ps() {
    if (Gn !== null) {
        var e = ty(tl)
          , t = Ct.transition
          , n = ne;
        try {
            if (Ct.transition = null,
            ne = 16 > e ? 16 : e,
            Gn === null)
                var r = !1;
            else {
                if (e = Gn,
                Gn = null,
                tl = 0,
                J & 6)
                    throw Error(D(331));
                var s = J;
                for (J |= 4,
                F = e.current; F !== null; ) {
                    var i = F
                      , o = i.child;
                    if (F.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (F = u; F !== null; ) {
                                    var d = F;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _i(8, d, i)
                                    }
                                    var h = d.child;
                                    if (h !== null)
                                        h.return = d,
                                        F = h;
                                    else
                                        for (; F !== null; ) {
                                            d = F;
                                            var f = d.sibling
                                              , p = d.return;
                                            if (hv(d),
                                            d === u) {
                                                F = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = p,
                                                F = f;
                                                break
                                            }
                                            F = p
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var v = w.child;
                                if (v !== null) {
                                    w.child = null;
                                    do {
                                        var b = v.sibling;
                                        v.sibling = null,
                                        v = b
                                    } while (v !== null)
                                }
                            }
                            F = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        F = o;
                    else
                        e: for (; F !== null; ) {
                            if (i = F,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    _i(9, i, i.return)
                                }
                            var y = i.sibling;
                            if (y !== null) {
                                y.return = i.return,
                                F = y;
                                break e
                            }
                            F = i.return
                        }
                }
                var g = e.current;
                for (F = g; F !== null; ) {
                    o = F;
                    var x = o.child;
                    if (o.subtreeFlags & 2064 && x !== null)
                        x.return = o,
                        F = x;
                    else
                        e: for (o = g; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ll(9, a)
                                    }
                                } catch (C) {
                                    ve(a, a.return, C)
                                }
                            if (a === o) {
                                F = null;
                                break e
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                S.return = a.return,
                                F = S;
                                break e
                            }
                            F = a.return
                        }
                }
                if (J = s,
                mr(),
                en && typeof en.onPostCommitFiberRoot == "function")
                    try {
                        en.onPostCommitFiberRoot(Tl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n,
            Ct.transition = t
        }
    }
    return !1
}
function Zp(e, t, n) {
    t = Ws(n, t),
    t = tv(e, t, 1),
    e = tr(e, t, 1),
    t = Ye(),
    e !== null && (No(e, 1, t),
    ot(e, t))
}
function ve(e, t, n) {
    if (e.tag === 3)
        Zp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Zp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nr === null || !nr.has(r))) {
                    e = Ws(n, e),
                    e = nv(t, e, 1),
                    t = tr(t, e, 1),
                    e = Ye(),
                    t !== null && (No(t, 1, e),
                    ot(t, e));
                    break
                }
            }
            t = t.return
        }
}
function KS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ye(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ee === e && (Le & n) === n && (je === 4 || je === 3 && (Le & 130023424) === Le && 500 > we() - kh ? Ir(e, 0) : Ch |= n),
    ot(e, t)
}
function Sv(e, t) {
    t === 0 && (e.mode & 1 ? (t = qo,
    qo <<= 1,
    !(qo & 130023424) && (qo = 4194304)) : t = 1);
    var n = Ye();
    e = xn(e, t),
    e !== null && (No(e, t, n),
    ot(e, n))
}
function qS(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Sv(e, n)
}
function GS(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    Sv(e, n)
}
var Cv;
Cv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || st.current)
            nt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return nt = !1,
                OS(e, t, n);
            nt = !!(e.flags & 131072)
        }
    else
        nt = !1,
        ue && t.flags & 1048576 && jy(t, Ka, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ca(e, t),
        e = t.pendingProps;
        var s = Bs(t, Ue.current);
        js(t, n),
        s = yh(null, t, r, e, s, n);
        var i = vh();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        it(r) ? (i = !0,
        Ua(t)) : i = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        hh(t),
        s.updater = Ml,
        t.stateNode = s,
        s._reactInternals = t,
        Fu(t, r, e, n),
        t = $u(null, t, r, !0, i, n)) : (t.tag = 0,
        ue && i && ih(t),
        Ke(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ca(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = XS(r),
            e = Vt(r, e),
            s) {
            case 0:
                t = Bu(null, t, r, e, n);
                break e;
            case 1:
                t = $p(null, t, r, e, n);
                break e;
            case 11:
                t = zp(null, t, r, e, n);
                break e;
            case 14:
                t = Bp(null, t, r, Vt(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Vt(r, s),
        Bu(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Vt(r, s),
        $p(e, t, r, s, n);
    case 3:
        e: {
            if (ov(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            i = t.memoizedState,
            s = i.element,
            Ly(e, t),
            Qa(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    s = Ws(Error(D(423)), t),
                    t = Hp(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = Ws(Error(D(424)), t),
                    t = Hp(e, t, r, n, s);
                    break e
                } else
                    for (ut = er(t.stateNode.containerInfo.firstChild),
                    dt = t,
                    ue = !0,
                    Bt = null,
                    n = Ay(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if ($s(),
                r === s) {
                    t = wn(e, t, n);
                    break e
                }
                Ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Dy(t),
        e === null && Vu(t),
        r = t.type,
        s = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = s.children,
        Au(r, s) ? o = null : i !== null && Au(r, i) && (t.flags |= 32),
        iv(e, t),
        Ke(e, t, o, n),
        t.child;
    case 6:
        return e === null && Vu(t),
        null;
    case 13:
        return av(e, t, n);
    case 4:
        return fh(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Hs(t, null, r, n) : Ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Vt(r, s),
        zp(e, t, r, s, n);
    case 7:
        return Ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            i = t.memoizedProps,
            o = s.value,
            ie(qa, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Ut(i.value, o)) {
                    if (i.children === s.children && !st.current) {
                        t = wn(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = gn(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    _u(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(D(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            _u(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Ke(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        js(t, n),
        s = Tt(s),
        r = r(s),
        t.flags |= 1,
        Ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = Vt(r, t.pendingProps),
        s = Vt(r.type, s),
        Bp(e, t, r, s, n);
    case 15:
        return rv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Vt(r, s),
        Ca(e, t),
        t.tag = 1,
        it(r) ? (e = !0,
        Ua(t)) : e = !1,
        js(t, n),
        ev(t, r, s),
        Fu(t, r, s, n),
        $u(null, t, r, !0, e, n);
    case 19:
        return lv(e, t, n);
    case 22:
        return sv(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function kv(e, t) {
    return Y0(e, t)
}
function QS(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function bt(e, t, n, r) {
    return new QS(e,t,n,r)
}
function Ph(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function XS(e) {
    if (typeof e == "function")
        return Ph(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === qd)
            return 11;
        if (e === Gd)
            return 14
    }
    return 2
}
function sr(e, t) {
    var n = e.alternate;
    return n === null ? (n = bt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Na(e, t, n, r, s, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Ph(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case as:
            return Fr(n.children, s, i, t);
        case Kd:
            o = 8,
            s |= 8;
            break;
        case cu:
            return e = bt(12, n, t, s | 2),
            e.elementType = cu,
            e.lanes = i,
            e;
        case uu:
            return e = bt(13, n, t, s),
            e.elementType = uu,
            e.lanes = i,
            e;
        case du:
            return e = bt(19, n, t, s),
            e.elementType = du,
            e.lanes = i,
            e;
        case D0:
            return Ol(n, s, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case M0:
                    o = 10;
                    break e;
                case L0:
                    o = 9;
                    break e;
                case qd:
                    o = 11;
                    break e;
                case Gd:
                    o = 14;
                    break e;
                case In:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = bt(o, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Fr(e, t, n, r) {
    return e = bt(7, e, r, t),
    e.lanes = n,
    e
}
function Ol(e, t, n, r) {
    return e = bt(22, e, r, t),
    e.elementType = D0,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Dc(e, t, n) {
    return e = bt(6, e, null, t),
    e.lanes = n,
    e
}
function Oc(e, t, n) {
    return t = bt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function YS(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = mc(0),
    this.expirationTimes = mc(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = mc(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Eh(e, t, n, r, s, i, o, a, l) {
    return e = new YS(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = bt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    hh(i),
    e
}
function ZS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: os,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Tv(e) {
    if (!e)
        return ar;
    e = e._reactInternals;
    e: {
        if (Xr(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (it(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (it(n))
            return Ty(e, n, t)
    }
    return t
}
function Nv(e, t, n, r, s, i, o, a, l) {
    return e = Eh(n, r, !0, e, s, i, o, a, l),
    e.context = Tv(null),
    n = e.current,
    r = Ye(),
    s = rr(n),
    i = gn(r, s),
    i.callback = t ?? null,
    tr(n, i, s),
    e.current.lanes = s,
    No(e, s, r),
    ot(e, r),
    e
}
function Vl(e, t, n, r) {
    var s = t.current
      , i = Ye()
      , o = rr(s);
    return n = Tv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = gn(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = tr(s, t, o),
    e !== null && (Ht(e, s, o, i),
    wa(e, s, o)),
    o
}
function rl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Jp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Rh(e, t) {
    Jp(e, t),
    (e = e.alternate) && Jp(e, t)
}
function JS() {
    return null
}
var jv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ah(e) {
    this._internalRoot = e
}
_l.prototype.render = Ah.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    Vl(e, t, null, null)
}
;
_l.prototype.unmount = Ah.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Kr(function() {
            Vl(null, e, null, null)
        }),
        t[vn] = null
    }
}
;
function _l(e) {
    this._internalRoot = e
}
_l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = sy();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++)
            ;
        zn.splice(n, 0, e),
        n === 0 && oy(e)
    }
}
;
function Mh(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Il(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function em() {}
function eC(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = rl(o);
                i.call(u)
            }
        }
        var o = Nv(t, r, e, 0, null, !1, !1, "", em);
        return e._reactRootContainer = o,
        e[vn] = o.current,
        Ji(e.nodeType === 8 ? e.parentNode : e),
        Kr(),
        o
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = rl(l);
            a.call(u)
        }
    }
    var l = Eh(e, 0, !1, null, null, !1, !1, "", em);
    return e._reactRootContainer = l,
    e[vn] = l.current,
    Ji(e.nodeType === 8 ? e.parentNode : e),
    Kr(function() {
        Vl(t, l, n, r)
    }),
    l
}
function Fl(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = rl(o);
                a.call(l)
            }
        }
        Vl(t, o, e, s)
    } else
        o = eC(n, t, e, s, r);
    return rl(o)
}
ny = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Pi(t.pendingLanes);
            n !== 0 && (Yd(t, n | 1),
            ot(t, we()),
            !(J & 6) && (Ks = we() + 500,
            mr()))
        }
        break;
    case 13:
        Kr(function() {
            var r = xn(e, 1);
            if (r !== null) {
                var s = Ye();
                Ht(r, e, 1, s)
            }
        }),
        Rh(e, 1)
    }
}
;
Zd = function(e) {
    if (e.tag === 13) {
        var t = xn(e, 134217728);
        if (t !== null) {
            var n = Ye();
            Ht(t, e, 134217728, n)
        }
        Rh(e, 134217728)
    }
}
;
ry = function(e) {
    if (e.tag === 13) {
        var t = rr(e)
          , n = xn(e, t);
        if (n !== null) {
            var r = Ye();
            Ht(n, e, t, r)
        }
        Rh(e, t)
    }
}
;
sy = function() {
    return ne
}
;
iy = function(e, t) {
    var n = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = n
    }
}
;
bu = function(e, t, n) {
    switch (t) {
    case "input":
        if (pu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = El(r);
                    if (!s)
                        throw Error(D(90));
                    V0(r),
                    pu(r, s)
                }
            }
        }
        break;
    case "textarea":
        I0(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Cs(e, !!n.multiple, t, !1)
    }
}
;
W0 = Th;
K0 = Kr;
var tC = {
    usingClientEntryPoint: !1,
    Events: [Po, ds, El, H0, U0, Th]
}
  , bi = {
    findFiberByHostInstance: jr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , nC = {
    bundleType: bi.bundleType,
    version: bi.version,
    rendererPackageName: bi.rendererPackageName,
    rendererConfig: bi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Q0(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: bi.findFiberByHostInstance || JS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sa.isDisabled && sa.supportsFiber)
        try {
            Tl = sa.inject(nC),
            en = sa
        } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tC;
pt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mh(t))
        throw Error(D(200));
    return ZS(e, t, null, n)
}
;
pt.createRoot = function(e, t) {
    if (!Mh(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , s = jv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Eh(e, 1, !1, null, null, n, !1, r, s),
    e[vn] = t.current,
    Ji(e.nodeType === 8 ? e.parentNode : e),
    new Ah(t)
}
;
pt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = Q0(t),
    e = e === null ? null : e.stateNode,
    e
}
;
pt.flushSync = function(e) {
    return Kr(e)
}
;
pt.hydrate = function(e, t, n) {
    if (!Il(t))
        throw Error(D(200));
    return Fl(null, e, t, !0, n)
}
;
pt.hydrateRoot = function(e, t, n) {
    if (!Mh(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , i = ""
      , o = jv;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Nv(t, null, e, 1, n ?? null, s, !1, i, o),
    e[vn] = t.current,
    Ji(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new _l(t)
}
;
pt.render = function(e, t, n) {
    if (!Il(t))
        throw Error(D(200));
    return Fl(null, e, t, !1, n)
}
;
pt.unmountComponentAtNode = function(e) {
    if (!Il(e))
        throw Error(D(40));
    return e._reactRootContainer ? (Kr(function() {
        Fl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[vn] = null
        })
    }),
    !0) : !1
}
;
pt.unstable_batchedUpdates = Th;
pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Il(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return Fl(e, t, n, !1, r)
}
;
pt.version = "18.3.1-next-f1338f8080-20240426";
function Pv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv)
        } catch (e) {
            console.error(e)
        }
}
Pv(),
P0.exports = pt;
var Ro = P0.exports;
const Ev = m0(Ro);
var Rv, tm = Ro;
Rv = tm.createRoot,
tm.hydrateRoot;
const rC = 1
  , sC = 1e6;
let Vc = 0;
function iC() {
    return Vc = (Vc + 1) % Number.MAX_SAFE_INTEGER,
    Vc.toString()
}
const _c = new Map
  , nm = e => {
    if (_c.has(e))
        return;
    const t = setTimeout( () => {
        _c.delete(e),
        zi({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , sC);
    _c.set(e, t)
}
  , oC = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, rC)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? nm(n) : e.toasts.forEach(r => {
                nm(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ja = [];
let Pa = {
    toasts: []
};
function zi(e) {
    Pa = oC(Pa, e),
    ja.forEach(t => {
        t(Pa)
    }
    )
}
function aC({...e}) {
    const t = iC()
      , n = s => zi({
        type: "UPDATE_TOAST",
        toast: {
            ...s,
            id: t
        }
    })
      , r = () => zi({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return zi({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: s => {
                s || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function lC() {
    const [e,t] = m.useState(Pa);
    return m.useEffect( () => (ja.push(t),
    () => {
        const n = ja.indexOf(t);
        n > -1 && ja.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: aC,
        dismiss: n => zi({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function se(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(s) {
        if (e == null || e(s),
        n === !1 || !s.defaultPrevented)
            return t == null ? void 0 : t(s)
    }
}
function rm(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Av(...e) {
    return t => {
        let n = !1;
        const r = e.map(s => {
            const i = rm(s, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const i = r[s];
                    typeof i == "function" ? i() : rm(e[s], null)
                }
            }
    }
}
function Oe(...e) {
    return m.useCallback(Av(...e), e)
}
function si(e, t=[]) {
    let n = [];
    function r(i, o) {
        const a = m.createContext(o)
          , l = n.length;
        n = [...n, o];
        const u = h => {
            var y;
            const {scope: f, children: p, ...w} = h
              , v = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a
              , b = m.useMemo( () => w, Object.values(w));
            return c.jsx(v.Provider, {
                value: b,
                children: p
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(h, f) {
            var v;
            const p = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a
              , w = m.useContext(p);
            if (w)
                return w;
            if (o !== void 0)
                return o;
            throw new Error(`\`${h}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const s = () => {
        const i = n.map(o => m.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return m.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [r, cC(s, ...t)]
}
function cC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(i) {
            const o = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const h = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...h
                }
            }
            , {});
            return m.useMemo( () => ({
                [`__scope${t.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function sl(e) {
    const t = dC(e)
      , n = m.forwardRef( (r, s) => {
        const {children: i, ...o} = r
          , a = m.Children.toArray(i)
          , l = a.find(fC);
        if (l) {
            const u = l.props.children
              , d = a.map(h => h === l ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : h);
            return c.jsx(t, {
                ...o,
                ref: s,
                children: m.isValidElement(u) ? m.cloneElement(u, void 0, d) : null
            })
        }
        return c.jsx(t, {
            ...o,
            ref: s,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var uC = sl("Slot");
function dC(e) {
    const t = m.forwardRef( (n, r) => {
        const {children: s, ...i} = n;
        if (m.isValidElement(s)) {
            const o = mC(s)
              , a = pC(i, s.props);
            return s.type !== m.Fragment && (a.ref = r ? Av(r, o) : o),
            m.cloneElement(s, a)
        }
        return m.Children.count(s) > 1 ? m.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Mv = Symbol("radix.slottable");
function hC(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Mv,
    t
}
function fC(e) {
    return m.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Mv
}
function pC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const s = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? s && i ? n[r] = (...a) => {
            const l = i(...a);
            return s(...a),
            l
        }
        : s && (n[r] = s) : r === "style" ? n[r] = {
            ...s,
            ...i
        } : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function mC(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function gC(e) {
    const t = e + "CollectionProvider"
      , [n,r] = si(t)
      , [s,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = v => {
        const {scope: b, children: y} = v
          , g = O.useRef(null)
          , x = O.useRef(new Map).current;
        return c.jsx(s, {
            scope: b,
            itemMap: x,
            collectionRef: g,
            children: y
        })
    }
    ;
    o.displayName = t;
    const a = e + "CollectionSlot"
      , l = sl(a)
      , u = O.forwardRef( (v, b) => {
        const {scope: y, children: g} = v
          , x = i(a, y)
          , S = Oe(b, x.collectionRef);
        return c.jsx(l, {
            ref: S,
            children: g
        })
    }
    );
    u.displayName = a;
    const d = e + "CollectionItemSlot"
      , h = "data-radix-collection-item"
      , f = sl(d)
      , p = O.forwardRef( (v, b) => {
        const {scope: y, children: g, ...x} = v
          , S = O.useRef(null)
          , C = Oe(b, S)
          , k = i(d, y);
        return O.useEffect( () => (k.itemMap.set(S, {
            ref: S,
            ...x
        }),
        () => void k.itemMap.delete(S))),
        c.jsx(f, {
            [h]: "",
            ref: C,
            children: g
        })
    }
    );
    p.displayName = d;
    function w(v) {
        const b = i(e + "CollectionConsumer", v);
        return O.useCallback( () => {
            const g = b.collectionRef.current;
            if (!g)
                return [];
            const x = Array.from(g.querySelectorAll(`[${h}]`));
            return Array.from(b.itemMap.values()).sort( (k, T) => x.indexOf(k.ref.current) - x.indexOf(T.ref.current))
        }
        , [b.collectionRef, b.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: p
    }, w, r]
}
var yC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , be = yC.reduce( (e, t) => {
    const n = sl(`Primitive.${t}`)
      , r = m.forwardRef( (s, i) => {
        const {asChild: o, ...a} = s
          , l = o ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Lv(e, t) {
    e && Ro.flushSync( () => e.dispatchEvent(t))
}
function Ge(e) {
    const t = m.useRef(e);
    return m.useEffect( () => {
        t.current = e
    }
    ),
    m.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function vC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ge(e);
    m.useEffect( () => {
        const r = s => {
            s.key === "Escape" && n(s)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var xC = "DismissableLayer", ed = "dismissableLayer.update", wC = "dismissableLayer.pointerDownOutside", bC = "dismissableLayer.focusOutside", sm, Dv = m.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Lh = m.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: s, onFocusOutside: i, onInteractOutside: o, onDismiss: a, ...l} = e
      , u = m.useContext(Dv)
      , [d,h] = m.useState(null)
      , f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = m.useState({})
      , w = Oe(t, T => h(T))
      , v = Array.from(u.layers)
      , [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = v.indexOf(b)
      , g = d ? v.indexOf(d) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = g >= y
      , C = CC(T => {
        const N = T.target
          , P = [...u.branches].some(E => E.contains(N));
        !S || P || (s == null || s(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f)
      , k = kC(T => {
        const N = T.target;
        [...u.branches].some(E => E.contains(N)) || (i == null || i(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f);
    return vC(T => {
        g === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && a && (T.preventDefault(),
        a()))
    }
    , f),
    m.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (sm = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            im(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = sm)
            }
    }
    , [d, f, n, u]),
    m.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        im())
    }
    , [d, u]),
    m.useEffect( () => {
        const T = () => p({});
        return document.addEventListener(ed, T),
        () => document.removeEventListener(ed, T)
    }
    , []),
    c.jsx(be.div, {
        ...l,
        ref: w,
        style: {
            pointerEvents: x ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: se(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Lh.displayName = xC;
var SC = "DismissableLayerBranch"
  , Ov = m.forwardRef( (e, t) => {
    const n = m.useContext(Dv)
      , r = m.useRef(null)
      , s = Oe(t, r);
    return m.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    c.jsx(be.div, {
        ...e,
        ref: s
    })
}
);
Ov.displayName = SC;
function CC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ge(e)
      , r = m.useRef(!1)
      , s = m.useRef( () => {}
    );
    return m.useEffect( () => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function() {
                    Vv(wC, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", s.current),
                s.current = l,
                t.addEventListener("click", s.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", s.current);
            r.current = !1
        }
          , o = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", s.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function kC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ge(e)
      , r = m.useRef(!1);
    return m.useEffect( () => {
        const s = i => {
            i.target && !r.current && Vv(bC, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function im() {
    const e = new CustomEvent(ed);
    document.dispatchEvent(e)
}
function Vv(e, t, n, {discrete: r}) {
    const s = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? Lv(s, i) : s.dispatchEvent(i)
}
var TC = Lh
  , NC = Ov
  , bn = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {}
  , jC = "Portal"
  , _v = m.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [s,i] = m.useState(!1);
    bn( () => i(!0), []);
    const o = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? Ev.createPortal(c.jsx(be.div, {
        ...r,
        ref: t
    }), o) : null
}
);
_v.displayName = jC;
function PC(e, t) {
    return m.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Yr = e => {
    const {present: t, children: n} = e
      , r = EC(t)
      , s = typeof n == "function" ? n({
        present: r.isPresent
    }) : m.Children.only(n)
      , i = Oe(r.ref, RC(s));
    return typeof n == "function" || r.isPresent ? m.cloneElement(s, {
        ref: i
    }) : null
}
;
Yr.displayName = "Presence";
function EC(e) {
    const [t,n] = m.useState()
      , r = m.useRef(null)
      , s = m.useRef(e)
      , i = m.useRef("none")
      , o = e ? "mounted" : "unmounted"
      , [a,l] = PC(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return m.useEffect( () => {
        const u = ia(r.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    bn( () => {
        const u = r.current
          , d = s.current;
        if (d !== e) {
            const f = i.current
              , p = ia(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = e
        }
    }
    , [e, l]),
    bn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , h = p => {
                const v = ia(r.current).includes(p.animationName);
                if (p.target === t && v && (l("ANIMATION_END"),
                !s.current)) {
                    const b = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b)
                    }
                    )
                }
            }
              , f = p => {
                p.target === t && (i.current = ia(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", h),
            t.addEventListener("animationend", h),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", h),
                t.removeEventListener("animationend", h)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: m.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ia(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function RC(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var AC = N0[" useInsertionEffect ".trim().toString()] || bn;
function MC({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [s,i,o] = LC({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : s;
    {
        const d = m.useRef(e !== void 0);
        m.useEffect( () => {
            const h = d.current;
            h !== a && console.warn(`${r} is changing from ${h ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = a
        }
        , [a, r])
    }
    const u = m.useCallback(d => {
        var h;
        if (a) {
            const f = DC(d) ? d(e) : d;
            f !== e && ((h = o.current) == null || h.call(o, f))
        } else
            i(d)
    }
    , [a, e, i, o]);
    return [l, u]
}
function LC({defaultProp: e, onChange: t}) {
    const [n,r] = m.useState(e)
      , s = m.useRef(n)
      , i = m.useRef(t);
    return AC( () => {
        i.current = t
    }
    , [t]),
    m.useEffect( () => {
        var o;
        s.current !== n && ((o = i.current) == null || o.call(i, n),
        s.current = n)
    }
    , [n, s]),
    [n, r, i]
}
function DC(e) {
    return typeof e == "function"
}
var OC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , VC = "VisuallyHidden"
  , zl = m.forwardRef( (e, t) => c.jsx(be.span, {
    ...e,
    ref: t,
    style: {
        ...OC,
        ...e.style
    }
}));
zl.displayName = VC;
var _C = zl
  , Dh = "ToastProvider"
  , [Oh,IC,FC] = gC("Toast")
  , [Iv,BA] = si("Toast", [FC])
  , [zC,Bl] = Iv(Dh)
  , Fv = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: s="right", swipeThreshold: i=50, children: o} = e
      , [a,l] = m.useState(null)
      , [u,d] = m.useState(0)
      , h = m.useRef(!1)
      , f = m.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Dh}\`. Expected non-empty \`string\`.`),
    c.jsx(Oh.Provider, {
        scope: t,
        children: c.jsx(zC, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: s,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: m.useCallback( () => d(p => p + 1), []),
            onToastRemove: m.useCallback( () => d(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: h,
            isClosePausedRef: f,
            children: o
        })
    })
}
;
Fv.displayName = Dh;
var zv = "ToastViewport"
  , BC = ["F8"]
  , td = "toast.viewportPause"
  , nd = "toast.viewportResume"
  , Bv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=BC, label: s="Notifications ({hotkey})", ...i} = e
      , o = Bl(zv, n)
      , a = IC(n)
      , l = m.useRef(null)
      , u = m.useRef(null)
      , d = m.useRef(null)
      , h = m.useRef(null)
      , f = Oe(t, h, o.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = o.toastCount > 0;
    m.useEffect( () => {
        const b = y => {
            var x;
            r.length !== 0 && r.every(S => y[S] || y.code === S) && ((x = h.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
    }
    , [r]),
    m.useEffect( () => {
        const b = l.current
          , y = h.current;
        if (w && b && y) {
            const g = () => {
                if (!o.isClosePausedRef.current) {
                    const k = new CustomEvent(td);
                    y.dispatchEvent(k),
                    o.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (o.isClosePausedRef.current) {
                    const k = new CustomEvent(nd);
                    y.dispatchEvent(k),
                    o.isClosePausedRef.current = !1
                }
            }
              , S = k => {
                !b.contains(k.relatedTarget) && x()
            }
              , C = () => {
                b.contains(document.activeElement) || x()
            }
            ;
            return b.addEventListener("focusin", g),
            b.addEventListener("focusout", S),
            b.addEventListener("pointermove", g),
            b.addEventListener("pointerleave", C),
            window.addEventListener("blur", g),
            window.addEventListener("focus", x),
            () => {
                b.removeEventListener("focusin", g),
                b.removeEventListener("focusout", S),
                b.removeEventListener("pointermove", g),
                b.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", g),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [w, o.isClosePausedRef]);
    const v = m.useCallback( ({tabbingDirection: b}) => {
        const g = a().map(x => {
            const S = x.ref.current
              , C = [S, ...ek(S)];
            return b === "forwards" ? C : C.reverse()
        }
        );
        return (b === "forwards" ? g.reverse() : g).flat()
    }
    , [a]);
    return m.useEffect( () => {
        const b = h.current;
        if (b) {
            const y = g => {
                var C, k, T;
                const x = g.altKey || g.ctrlKey || g.metaKey;
                if (g.key === "Tab" && !x) {
                    const N = document.activeElement
                      , P = g.shiftKey;
                    if (g.target === b && P) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const L = v({
                        tabbingDirection: P ? "backwards" : "forwards"
                    })
                      , I = L.findIndex(M => M === N);
                    Ic(L.slice(I + 1)) ? g.preventDefault() : P ? (k = u.current) == null || k.focus() : (T = d.current) == null || T.focus()
                }
            }
            ;
            return b.addEventListener("keydown", y),
            () => b.removeEventListener("keydown", y)
        }
    }
    , [a, v]),
    c.jsxs(NC, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && c.jsx(rd, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const b = v({
                    tabbingDirection: "forwards"
                });
                Ic(b)
            }
        }), c.jsx(Oh.Slot, {
            scope: n,
            children: c.jsx(be.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), w && c.jsx(rd, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const b = v({
                    tabbingDirection: "backwards"
                });
                Ic(b)
            }
        })]
    })
}
);
Bv.displayName = zv;
var $v = "ToastFocusProxy"
  , rd = m.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...s} = e
      , i = Bl($v, n);
    return c.jsx(zl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var u;
            const a = o.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
rd.displayName = $v;
var Ao = "Toast"
  , $C = "toast.swipeStart"
  , HC = "toast.swipeMove"
  , UC = "toast.swipeCancel"
  , WC = "toast.swipeEnd"
  , Hv = m.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: s, onOpenChange: i, ...o} = e
      , [a,l] = MC({
        prop: r,
        defaultProp: s ?? !0,
        onChange: i,
        caller: Ao
    });
    return c.jsx(Yr, {
        present: n || a,
        children: c.jsx(GC, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: Ge(e.onPause),
            onResume: Ge(e.onResume),
            onSwipeStart: se(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: se(e.onSwipeMove, u => {
                const {x: d, y: h} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${h}px`)
            }
            ),
            onSwipeCancel: se(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: se(e.onSwipeEnd, u => {
                const {x: d, y: h} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${h}px`),
                l(!1)
            }
            )
        })
    })
}
);
Hv.displayName = Ao;
var [KC,qC] = Iv(Ao, {
    onClose() {}
})
  , GC = m.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: s, open: i, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: h, onSwipeCancel: f, onSwipeEnd: p, ...w} = e
      , v = Bl(Ao, n)
      , [b,y] = m.useState(null)
      , g = Oe(t, M => y(M))
      , x = m.useRef(null)
      , S = m.useRef(null)
      , C = s || v.duration
      , k = m.useRef(0)
      , T = m.useRef(C)
      , N = m.useRef(0)
      , {onToastAdd: P, onToastRemove: E} = v
      , V = Ge( () => {
        var H;
        (b == null ? void 0 : b.contains(document.activeElement)) && ((H = v.viewport) == null || H.focus()),
        o()
    }
    )
      , L = m.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(N.current),
        k.current = new Date().getTime(),
        N.current = window.setTimeout(V, M))
    }
    , [V]);
    m.useEffect( () => {
        const M = v.viewport;
        if (M) {
            const H = () => {
                L(T.current),
                u == null || u()
            }
              , B = () => {
                const z = new Date().getTime() - k.current;
                T.current = T.current - z,
                window.clearTimeout(N.current),
                l == null || l()
            }
            ;
            return M.addEventListener(td, B),
            M.addEventListener(nd, H),
            () => {
                M.removeEventListener(td, B),
                M.removeEventListener(nd, H)
            }
        }
    }
    , [v.viewport, C, l, u, L]),
    m.useEffect( () => {
        i && !v.isClosePausedRef.current && L(C)
    }
    , [i, C, v.isClosePausedRef, L]),
    m.useEffect( () => (P(),
    () => E()), [P, E]);
    const I = m.useMemo( () => b ? Xv(b) : null, [b]);
    return v.viewport ? c.jsxs(c.Fragment, {
        children: [I && c.jsx(QC, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: I
        }), c.jsx(KC, {
            scope: n,
            onClose: V,
            children: Ro.createPortal(c.jsx(Oh.ItemSlot, {
                scope: n,
                children: c.jsx(TC, {
                    asChild: !0,
                    onEscapeKeyDown: se(a, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || V(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(be.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...w,
                        ref: g,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: se(e.onKeyDown, M => {
                            M.key === "Escape" && (a == null || a(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            V()))
                        }
                        ),
                        onPointerDown: se(e.onPointerDown, M => {
                            M.button === 0 && (x.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: se(e.onPointerMove, M => {
                            if (!x.current)
                                return;
                            const H = M.clientX - x.current.x
                              , B = M.clientY - x.current.y
                              , z = !!S.current
                              , j = ["left", "right"].includes(v.swipeDirection)
                              , A = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , _ = j ? A(0, H) : 0
                              , K = j ? 0 : A(0, B)
                              , U = M.pointerType === "touch" ? 10 : 2
                              , X = {
                                x: _,
                                y: K
                            }
                              , Z = {
                                originalEvent: M,
                                delta: X
                            };
                            z ? (S.current = X,
                            oa(HC, h, Z, {
                                discrete: !1
                            })) : om(X, v.swipeDirection, U) ? (S.current = X,
                            oa($C, d, Z, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(H) > U || Math.abs(B) > U) && (x.current = null)
                        }
                        ),
                        onPointerUp: se(e.onPointerUp, M => {
                            const H = S.current
                              , B = M.target;
                            if (B.hasPointerCapture(M.pointerId) && B.releasePointerCapture(M.pointerId),
                            S.current = null,
                            x.current = null,
                            H) {
                                const z = M.currentTarget
                                  , j = {
                                    originalEvent: M,
                                    delta: H
                                };
                                om(H, v.swipeDirection, v.swipeThreshold) ? oa(WC, p, j, {
                                    discrete: !0
                                }) : oa(UC, f, j, {
                                    discrete: !0
                                }),
                                z.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , QC = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , s = Bl(Ao, t)
      , [i,o] = m.useState(!1)
      , [a,l] = m.useState(!1);
    return ZC( () => o(!0)),
    m.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : c.jsx(_v, {
        asChild: !0,
        children: c.jsx(zl, {
            ...r,
            children: i && c.jsxs(c.Fragment, {
                children: [s.label, " ", n]
            })
        })
    })
}
  , XC = "ToastTitle"
  , Uv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(be.div, {
        ...r,
        ref: t
    })
}
);
Uv.displayName = XC;
var YC = "ToastDescription"
  , Wv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(be.div, {
        ...r,
        ref: t
    })
}
);
Wv.displayName = YC;
var Kv = "ToastAction"
  , qv = m.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(Qv, {
        altText: n,
        asChild: !0,
        children: c.jsx(Vh, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Kv}\`. Expected non-empty \`string\`.`),
    null)
}
);
qv.displayName = Kv;
var Gv = "ToastClose"
  , Vh = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , s = qC(Gv, n);
    return c.jsx(Qv, {
        asChild: !0,
        children: c.jsx(be.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: se(e.onClick, s.onClose)
        })
    })
}
);
Vh.displayName = Gv;
var Qv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...s} = e;
    return c.jsx(be.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...s,
        ref: t
    })
}
);
function Xv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        JC(r)) {
            const s = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (i) {
                    const o = r.dataset.radixToastAnnounceAlt;
                    o && t.push(o)
                } else
                    t.push(...Xv(r))
        }
    }
    ),
    t
}
function oa(e, t, n, {discrete: r}) {
    const s = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? Lv(s, i) : s.dispatchEvent(i)
}
var om = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , s = Math.abs(e.y)
      , i = r > s;
    return t === "left" || t === "right" ? i && r > n : !i && s > n
}
;
function ZC(e= () => {}
) {
    const t = Ge(e);
    bn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function JC(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function ek(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Ic(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var tk = Fv
  , Yv = Bv
  , Zv = Hv
  , Jv = Uv
  , ex = Wv
  , tx = qv
  , nx = Vh;
function rx(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++)
                e[t] && (n = rx(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function sx() {
    for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
        (e = arguments[n]) && (t = rx(e)) && (r && (r += " "),
        r += t);
    return r
}
const am = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , lm = sx
  , ix = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return lm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: s, defaultVariants: i} = t
      , o = Object.keys(s).map(u => {
        const d = n == null ? void 0 : n[u]
          , h = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const f = am(d) || am(h);
        return s[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, d) => {
        let[h,f] = d;
        return f === void 0 || (u[h] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: h, className: f, ...p} = d;
        return Object.entries(p).every(w => {
            let[v,b] = w;
            return Array.isArray(b) ? b.includes({
                ...i,
                ...a
            }[v]) : {
                ...i,
                ...a
            }[v] === b
        }
        ) ? [...u, h, f] : u
    }
    , []);
    return lm(e, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nk = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , ox = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rk = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = m.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: s="", children: i, iconNode: o, ...a}, l) => m.createElement("svg", {
    ref: l,
    ...rk,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: ox("lucide", s),
    ...a
}, [...o.map( ([u,d]) => m.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = (e, t) => {
    const n = m.forwardRef( ({className: r, ...s}, i) => m.createElement(sk, {
        ref: i,
        iconNode: t,
        className: ox(`lucide-${nk(e)}`, r),
        ...s
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = $("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = $("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ik = $("ArrowUp", [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = $("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = $("BookOpen", [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = $("Bot", [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = $("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = $("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = $("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = $("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = $("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = $("CircleHelp", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = $("CirclePlay", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polygon", {
    points: "10 8 16 12 10 16 10 8",
    key: "1cimsy"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = $("CircleX", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = $("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = $("Copyright", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M14.83 14.83a4 4 0 1 1 0-5.66",
    key: "1i56pz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = $("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = $("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = $("Filter", [["polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    key: "1yg77f"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = $("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = $("Gamepad2", [["line", {
    x1: "6",
    x2: "10",
    y1: "11",
    y2: "11",
    key: "1gktln"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "9",
    y2: "13",
    key: "qnk9ow"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "12",
    y2: "12",
    key: "krot7o"
}], ["line", {
    x1: "18",
    x2: "18.01",
    y1: "10",
    y2: "10",
    key: "1lcuu1"
}], ["path", {
    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    key: "mfqc10"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = $("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = $("HeartHandshake", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}], ["path", {
    d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
    key: "4oyue0"
}], ["path", {
    d: "m18 15-2-2",
    key: "60u0ii"
}], ["path", {
    d: "m15 18-2-2",
    key: "6p76be"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = $("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mk = $("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = $("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gk = $("Joystick", [["path", {
    d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
    key: "jg2n2t"
}], ["path", {
    d: "M6 15v-2",
    key: "gd6mvg"
}], ["path", {
    d: "M12 15V9",
    key: "8c7uyn"
}], ["circle", {
    cx: "12",
    cy: "6",
    r: "3",
    key: "1gm2ql"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yk = $("Library", [["path", {
    d: "m16 6 4 14",
    key: "ji33uf"
}], ["path", {
    d: "M12 6v14",
    key: "1n7gus"
}], ["path", {
    d: "M8 8v12",
    key: "1gg7y9"
}], ["path", {
    d: "M4 4v16",
    key: "6qkkli"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vk = $("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xk = $("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = $("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = $("MonitorPlay", [["path", {
    d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",
    key: "1pctta"
}], ["path", {
    d: "M12 17v4",
    key: "1riwvh"
}], ["path", {
    d: "M8 21h8",
    key: "1ev6f3"
}], ["rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2",
    key: "x3v2xh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wk = $("Newspaper", [["path", {
    d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
    key: "7pis2x"
}], ["path", {
    d: "M18 14h-8",
    key: "sponae"
}], ["path", {
    d: "M15 18h-5",
    key: "95g1m2"
}], ["path", {
    d: "M10 6h8v4h-8V6Z",
    key: "smlsk5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bk = $("QrCode", [["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
}], ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
}], ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
}], ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
}], ["path", {
    d: "M21 21v.01",
    key: "ents32"
}], ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
}], ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
}], ["path", {
    d: "M12 3h.01",
    key: "n36tog"
}], ["path", {
    d: "M12 16v.01",
    key: "133mhm"
}], ["path", {
    d: "M16 12h1",
    key: "1slzba"
}], ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
}], ["path", {
    d: "M12 21v-1",
    key: "1880an"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = $("Quote", [["path", {
    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "rib7q0"
}], ["path", {
    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "1ymkrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sk = $("RefreshCcw", [["path", {
    d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "14sxne"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
    key: "1hlbsb"
}], ["path", {
    d: "M16 16h5v5",
    key: "ccwih5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ck = $("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kk = $("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tk = $("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nk = $("Share2", [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = $("ShieldAlert", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "M12 8v4",
    key: "1got3b"
}], ["path", {
    d: "M12 16h.01",
    key: "1drbdi"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = $("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jk = $("Shuffle", [["path", {
    d: "m18 14 4 4-4 4",
    key: "10pe0f"
}], ["path", {
    d: "m18 2 4 4-4 4",
    key: "pucp1d"
}], ["path", {
    d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
    key: "1ailkh"
}], ["path", {
    d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
    key: "km57vx"
}], ["path", {
    d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
    key: "os18l9"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pk = $("Skull", [["path", {
    d: "m12.5 17-.5-1-.5 1h1z",
    key: "3me087"
}], ["path", {
    d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
    key: "1o5pge"
}], ["circle", {
    cx: "15",
    cy: "12",
    r: "1",
    key: "1tmaij"
}], ["circle", {
    cx: "9",
    cy: "12",
    r: "1",
    key: "1vctgf"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ek = $("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = $("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = $("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rk = $("Swords", [["polyline", {
    points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
    key: "1hfsw2"
}], ["line", {
    x1: "13",
    x2: "19",
    y1: "19",
    y2: "13",
    key: "1vrmhu"
}], ["line", {
    x1: "16",
    x2: "20",
    y1: "16",
    y2: "20",
    key: "1bron3"
}], ["line", {
    x1: "19",
    x2: "21",
    y1: "21",
    y2: "19",
    key: "13pww6"
}], ["polyline", {
    points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
    key: "hbey2j"
}], ["line", {
    x1: "5",
    x2: "9",
    y1: "14",
    y2: "18",
    key: "1hf58s"
}], ["line", {
    x1: "7",
    x2: "4",
    y1: "17",
    y2: "20",
    key: "pidxm4"
}], ["line", {
    x1: "3",
    x2: "5",
    y1: "19",
    y2: "21",
    key: "1pehsh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ak = $("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mk = $("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lk = $("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = $("Video", [["path", {
    d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
    key: "ftymec"
}], ["rect", {
    x: "2",
    y: "6",
    width: "14",
    height: "12",
    rx: "2",
    key: "158x01"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = $("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , zh = "-"
  , Dk = e => {
    const t = Vk(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: o => {
            const a = o.split(zh);
            return a[0] === "" && a.length !== 1 && a.shift(),
            mx(a, t) || Ok(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = n[o] || [];
            return a && r[o] ? [...l, ...r[o]] : l
        }
    }
}
  , mx = (e, t) => {
    var o;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , s = r ? mx(e.slice(1), r) : void 0;
    if (s)
        return s;
    if (t.validators.length === 0)
        return;
    const i = e.join(zh);
    return (o = t.validators.find( ({validator: a}) => a(i))) == null ? void 0 : o.classGroupId
}
  , hm = /^\[(.+)\]$/
  , Ok = e => {
    if (hm.test(e)) {
        const t = hm.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Vk = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Ik(Object.entries(e.classGroups), n).forEach( ([i,o]) => {
        ad(o, r, i, t)
    }
    ),
    r
}
  , ad = (e, t, n, r) => {
    e.forEach(s => {
        if (typeof s == "string") {
            const i = s === "" ? t : fm(t, s);
            i.classGroupId = n;
            return
        }
        if (typeof s == "function") {
            if (_k(s)) {
                ad(s(r), t, n, r);
                return
            }
            t.validators.push({
                validator: s,
                classGroupId: n
            });
            return
        }
        Object.entries(s).forEach( ([i,o]) => {
            ad(o, fm(t, i), n, r)
        }
        )
    }
    )
}
  , fm = (e, t) => {
    let n = e;
    return t.split(zh).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , _k = e => e.isThemeGetter
  , Ik = (e, t) => t ? e.map( ([n,r]) => {
    const s = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([o,a]) => [t + o, a])) : i);
    return [n, s]
}
) : e
  , Fk = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const s = (i, o) => {
        n.set(i, o),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let o = n.get(i);
            if (o !== void 0)
                return o;
            if ((o = r.get(i)) !== void 0)
                return s(i, o),
                o
        },
        set(i, o) {
            n.has(i) ? n.set(i, o) : s(i, o)
        }
    }
}
  , gx = "!"
  , zk = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , s = t[0]
      , i = t.length
      , o = a => {
        const l = [];
        let u = 0, d = 0, h;
        for (let b = 0; b < a.length; b++) {
            let y = a[b];
            if (u === 0) {
                if (y === s && (r || a.slice(b, b + i) === t)) {
                    l.push(a.slice(d, b)),
                    d = b + i;
                    continue
                }
                if (y === "/") {
                    h = b;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(d)
          , p = f.startsWith(gx)
          , w = p ? f.substring(1) : f
          , v = h && h > d ? h - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: w,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: o
    }) : o
}
  , Bk = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , $k = e => ({
    cache: Fk(e.cacheSize),
    parseClassName: zk(e),
    ...Dk(e)
})
  , Hk = /\s+/
  , Uk = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: s} = t
      , i = []
      , o = e.trim().split(Hk);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: d, hasImportantModifier: h, baseClassName: f, maybePostfixModifierPosition: p} = n(u);
        let w = !!p
          , v = r(w ? f.substring(0, p) : f);
        if (!v) {
            if (!w) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (v = r(f),
            !v) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            w = !1
        }
        const b = Bk(d).join(":")
          , y = h ? b + gx : b
          , g = y + v;
        if (i.includes(g))
            continue;
        i.push(g);
        const x = s(v, w);
        for (let S = 0; S < x.length; ++S) {
            const C = x[S];
            i.push(y + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function Wk() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = yx(t)) && (r && (r += " "),
        r += n);
    return r
}
const yx = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = yx(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Kk(e, ...t) {
    let n, r, s, i = o;
    function o(l) {
        const u = t.reduce( (d, h) => h(d), e());
        return n = $k(u),
        r = n.cache.get,
        s = n.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const d = Uk(l, n);
        return s(l, d),
        d
    }
    return function() {
        return i(Wk.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , vx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , qk = /^\d+\/\d+$/
  , Gk = new Set(["px", "full", "screen"])
  , Qk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Xk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Yk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Zk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Jk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , cn = e => Es(e) || Gk.has(e) || qk.test(e)
  , Dn = e => ii(e, "length", aT)
  , Es = e => !!e && !Number.isNaN(Number(e))
  , zc = e => ii(e, "number", Es)
  , Si = e => !!e && Number.isInteger(Number(e))
  , eT = e => e.endsWith("%") && Es(e.slice(0, -1))
  , Q = e => vx.test(e)
  , On = e => Qk.test(e)
  , tT = new Set(["length", "size", "percentage"])
  , nT = e => ii(e, tT, xx)
  , rT = e => ii(e, "position", xx)
  , sT = new Set(["image", "url"])
  , iT = e => ii(e, sT, cT)
  , oT = e => ii(e, "", lT)
  , Ci = () => !0
  , ii = (e, t, n) => {
    const r = vx.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , aT = e => Xk.test(e) && !Yk.test(e)
  , xx = () => !1
  , lT = e => Zk.test(e)
  , cT = e => Jk.test(e)
  , uT = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , r = oe("brightness")
      , s = oe("borderColor")
      , i = oe("borderRadius")
      , o = oe("borderSpacing")
      , a = oe("borderWidth")
      , l = oe("contrast")
      , u = oe("grayscale")
      , d = oe("hueRotate")
      , h = oe("invert")
      , f = oe("gap")
      , p = oe("gradientColorStops")
      , w = oe("gradientColorStopPositions")
      , v = oe("inset")
      , b = oe("margin")
      , y = oe("opacity")
      , g = oe("padding")
      , x = oe("saturate")
      , S = oe("scale")
      , C = oe("sepia")
      , k = oe("skew")
      , T = oe("space")
      , N = oe("translate")
      , P = () => ["auto", "contain", "none"]
      , E = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , V = () => ["auto", Q, t]
      , L = () => [Q, t]
      , I = () => ["", cn, Dn]
      , M = () => ["auto", Es, Q]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , B = () => ["solid", "dashed", "dotted", "double", "none"]
      , z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", Q]
      , _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = () => [Es, Q];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ci],
            spacing: [cn, Dn],
            blur: ["none", "", On, Q],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", On, Q],
            borderSpacing: L(),
            borderWidth: I(),
            contrast: K(),
            grayscale: A(),
            hueRotate: K(),
            invert: A(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [eT, Dn],
            inset: V(),
            margin: V(),
            opacity: K(),
            padding: L(),
            saturate: K(),
            scale: K(),
            sepia: A(),
            skew: K(),
            space: L(),
            translate: L()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Q]
            }],
            container: ["container"],
            columns: [{
                columns: [On]
            }],
            "break-after": [{
                "break-after": _()
            }],
            "break-before": [{
                "break-before": _()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), Q]
            }],
            overflow: [{
                overflow: E()
            }],
            "overflow-x": [{
                "overflow-x": E()
            }],
            "overflow-y": [{
                "overflow-y": E()
            }],
            overscroll: [{
                overscroll: P()
            }],
            "overscroll-x": [{
                "overscroll-x": P()
            }],
            "overscroll-y": [{
                "overscroll-y": P()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Si, Q]
            }],
            basis: [{
                basis: V()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Q]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", Si, Q]
            }],
            "grid-cols": [{
                "grid-cols": [Ci]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Si, Q]
                }, Q]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [Ci]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Si, Q]
                }, Q]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Q]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Q]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...j()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...j(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...j(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [g]
            }],
            px: [{
                px: [g]
            }],
            py: [{
                py: [g]
            }],
            ps: [{
                ps: [g]
            }],
            pe: [{
                pe: [g]
            }],
            pt: [{
                pt: [g]
            }],
            pr: [{
                pr: [g]
            }],
            pb: [{
                pb: [g]
            }],
            pl: [{
                pl: [g]
            }],
            m: [{
                m: [b]
            }],
            mx: [{
                mx: [b]
            }],
            my: [{
                my: [b]
            }],
            ms: [{
                ms: [b]
            }],
            me: [{
                me: [b]
            }],
            mt: [{
                mt: [b]
            }],
            mr: [{
                mr: [b]
            }],
            mb: [{
                mb: [b]
            }],
            ml: [{
                ml: [b]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
            }],
            "min-w": [{
                "min-w": [Q, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [On]
                }, On]
            }],
            h: [{
                h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Q, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", On, Dn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zc]
            }],
            "font-family": [{
                font: [Ci]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Es, zc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", cn, Q]
            }],
            "list-image": [{
                "list-image": ["none", Q]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Q]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...B(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", cn, Dn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", cn, Q]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Q]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), rT]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", nT]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, iT]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...B(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...B()]
            }],
            "outline-offset": [{
                "outline-offset": [cn, Q]
            }],
            "outline-w": [{
                outline: [cn, Dn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: I()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [cn, Dn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", On, oT]
            }],
            "shadow-color": [{
                shadow: [Ci]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...z(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": z()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", On, Q]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [h]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [h]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
            }],
            duration: [{
                duration: K()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Q]
            }],
            delay: [{
                delay: K()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Q]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [Si, Q]
            }],
            "translate-x": [{
                "translate-x": [N]
            }],
            "translate-y": [{
                "translate-y": [N]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Q]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [cn, Dn, zc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , dT = Kk(uT);
function Ve(...e) {
    return dT(sx(e))
}
const hT = tk
  , wx = m.forwardRef( ({className: e, ...t}, n) => c.jsx(Yv, {
    ref: n,
    className: Ve("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
wx.displayName = Yv.displayName;
const fT = ix("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , bx = m.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(Zv, {
    ref: r,
    className: Ve(fT({
        variant: t
    }), e),
    ...n
}));
bx.displayName = Zv.displayName;
const pT = m.forwardRef( ({className: e, ...t}, n) => c.jsx(tx, {
    ref: n,
    className: Ve("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
pT.displayName = tx.displayName;
const Sx = m.forwardRef( ({className: e, ...t}, n) => c.jsx(nx, {
    ref: n,
    className: Ve("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(Fh, {
        className: "h-4 w-4"
    })
}));
Sx.displayName = nx.displayName;
const Cx = m.forwardRef( ({className: e, ...t}, n) => c.jsx(Jv, {
    ref: n,
    className: Ve("text-sm font-semibold", e),
    ...t
}));
Cx.displayName = Jv.displayName;
const kx = m.forwardRef( ({className: e, ...t}, n) => c.jsx(ex, {
    ref: n,
    className: Ve("text-sm opacity-90", e),
    ...t
}));
kx.displayName = ex.displayName;
function mT() {
    const {toasts: e} = lC();
    return c.jsxs(hT, {
        children: [e.map(function({id: t, title: n, description: r, action: s, ...i}) {
            return c.jsxs(bx, {
                ...i,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(Cx, {
                        children: n
                    }), r && c.jsx(kx, {
                        children: r
                    })]
                }), s, c.jsx(Sx, {})]
            }, t)
        }), c.jsx(wx, {})]
    })
}
var pm = ["light", "dark"]
  , gT = "(prefers-color-scheme: dark)"
  , yT = m.createContext(void 0)
  , vT = {
    setTheme: e => {}
    ,
    themes: []
}
  , xT = () => {
    var e;
    return (e = m.useContext(yT)) != null ? e : vT
}
;
m.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: s, defaultTheme: i, value: o, attrs: a, nonce: l}) => {
    let u = i === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , h = s ? pm.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (w, v=!1, b=!0) => {
        let y = o ? o[w] : w
          , g = v ? w + "|| ''" : `'${y}'`
          , x = "";
        return s && b && !v && pm.includes(w) && (x += `d.style.colorScheme = '${w}';`),
        n === "class" ? v || y ? x += `c.add(${g})` : x += "null" : y && (x += `d[s](n,${g})`),
        x
    }
      , p = e ? `!function(){${d}${f(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${gT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${h}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${h}}catch(t){}}();`;
    return m.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var wT = e => {
    switch (e) {
    case "success":
        return CT;
    case "info":
        return TT;
    case "warning":
        return kT;
    case "error":
        return NT;
    default:
        return null
    }
}
  , bT = Array(12).fill(0)
  , ST = ({visible: e, className: t}) => O.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, bT.map( (n, r) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , CT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , kT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , TT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , NT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , jT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , PT = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , ld = 1
  , ET = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : ld++
              , i = this.toasts.find(a => a.id === s)
              , o = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i ? this.toasts = this.toasts.map(a => a.id === s ? (this.publish({
                ...a,
                ...e,
                id: s,
                title: n
            }),
            {
                ...a,
                ...e,
                id: s,
                dismissible: o,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: o,
                id: s
            }),
            s
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), s = n !== void 0, i, o = r.then(async l => {
                if (i = ["resolve", l],
                O.isValidElement(l))
                    s = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (AT(l) && !l.ok) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    s = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var l;
                s && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => o.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || ld++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , et = new ET
  , RT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || ld++;
    return et.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , AT = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , MT = RT
  , LT = () => et.toasts
  , DT = () => et.getActiveToasts();
Object.assign(MT, {
    success: et.success,
    info: et.info,
    warning: et.warning,
    error: et.error,
    custom: et.custom,
    message: et.message,
    promise: et.promise,
    dismiss: et.dismiss,
    loading: et.loading
}, {
    getHistory: LT,
    getToasts: DT
});
function OT(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
OT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function aa(e) {
    return e.label !== void 0
}
var VT = 3
  , _T = "32px"
  , IT = "16px"
  , mm = 4e3
  , FT = 356
  , zT = 14
  , BT = 20
  , $T = 200;
function Mt(...e) {
    return e.filter(Boolean).join(" ")
}
function HT(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var UT = e => {
    var t, n, r, s, i, o, a, l, u, d, h;
    let {invert: f, toast: p, unstyled: w, interacting: v, setHeights: b, visibleToasts: y, heights: g, index: x, toasts: S, expanded: C, removeToast: k, defaultRichColors: T, closeButton: N, style: P, cancelButtonStyle: E, actionButtonStyle: V, className: L="", descriptionClassName: I="", duration: M, position: H, gap: B, loadingIcon: z, expandByDefault: j, classNames: A, icons: _, closeButtonAriaLabel: K="Close toast", pauseWhenPageIsHidden: U} = e
      , [X,Z] = O.useState(null)
      , [Se,_e] = O.useState(null)
      , [te,Zr] = O.useState(!1)
      , [jn,wr] = O.useState(!1)
      , [Pn,Jr] = O.useState(!1)
      , [En,Io] = O.useState(!1)
      , [ic,Fo] = O.useState(!1)
      , [oc,hi] = O.useState(0)
      , [es,zf] = O.useState(0)
      , fi = O.useRef(p.duration || M || mm)
      , Bf = O.useRef(null)
      , br = O.useRef(null)
      , Sb = x === 0
      , Cb = x + 1 <= y
      , gt = p.type
      , ts = p.dismissible !== !1
      , kb = p.className || ""
      , Tb = p.descriptionClassName || ""
      , zo = O.useMemo( () => g.findIndex(q => q.toastId === p.id) || 0, [g, p.id])
      , Nb = O.useMemo( () => {
        var q;
        return (q = p.closeButton) != null ? q : N
    }
    , [p.closeButton, N])
      , $f = O.useMemo( () => p.duration || M || mm, [p.duration, M])
      , ac = O.useRef(0)
      , ns = O.useRef(0)
      , Hf = O.useRef(0)
      , rs = O.useRef(null)
      , [jb,Pb] = H.split("-")
      , Uf = O.useMemo( () => g.reduce( (q, re, ce) => ce >= zo ? q : q + re.height, 0), [g, zo])
      , Wf = PT()
      , Eb = p.invert || f
      , lc = gt === "loading";
    ns.current = O.useMemo( () => zo * B + Uf, [zo, Uf]),
    O.useEffect( () => {
        fi.current = $f
    }
    , [$f]),
    O.useEffect( () => {
        Zr(!0)
    }
    , []),
    O.useEffect( () => {
        let q = br.current;
        if (q) {
            let re = q.getBoundingClientRect().height;
            return zf(re),
            b(ce => [{
                toastId: p.id,
                height: re,
                position: p.position
            }, ...ce]),
            () => b(ce => ce.filter(Pt => Pt.toastId !== p.id))
        }
    }
    , [b, p.id]),
    O.useLayoutEffect( () => {
        if (!te)
            return;
        let q = br.current
          , re = q.style.height;
        q.style.height = "auto";
        let ce = q.getBoundingClientRect().height;
        q.style.height = re,
        zf(ce),
        b(Pt => Pt.find(Et => Et.toastId === p.id) ? Pt.map(Et => Et.toastId === p.id ? {
            ...Et,
            height: ce
        } : Et) : [{
            toastId: p.id,
            height: ce,
            position: p.position
        }, ...Pt])
    }
    , [te, p.title, p.description, b, p.id]);
    let Rn = O.useCallback( () => {
        wr(!0),
        hi(ns.current),
        b(q => q.filter(re => re.toastId !== p.id)),
        setTimeout( () => {
            k(p)
        }
        , $T)
    }
    , [p, k, b, ns]);
    O.useEffect( () => {
        if (p.promise && gt === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let q;
        return C || v || U && Wf ? ( () => {
            if (Hf.current < ac.current) {
                let re = new Date().getTime() - ac.current;
                fi.current = fi.current - re
            }
            Hf.current = new Date().getTime()
        }
        )() : fi.current !== 1 / 0 && (ac.current = new Date().getTime(),
        q = setTimeout( () => {
            var re;
            (re = p.onAutoClose) == null || re.call(p, p),
            Rn()
        }
        , fi.current)),
        () => clearTimeout(q)
    }
    , [C, v, p, gt, U, Wf, Rn]),
    O.useEffect( () => {
        p.delete && Rn()
    }
    , [Rn, p.delete]);
    function Rb() {
        var q, re, ce;
        return _ != null && _.loading ? O.createElement("div", {
            className: Mt(A == null ? void 0 : A.loader, (q = p == null ? void 0 : p.classNames) == null ? void 0 : q.loader, "sonner-loader"),
            "data-visible": gt === "loading"
        }, _.loading) : z ? O.createElement("div", {
            className: Mt(A == null ? void 0 : A.loader, (re = p == null ? void 0 : p.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": gt === "loading"
        }, z) : O.createElement(ST, {
            className: Mt(A == null ? void 0 : A.loader, (ce = p == null ? void 0 : p.classNames) == null ? void 0 : ce.loader),
            visible: gt === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: br,
        className: Mt(L, kb, A == null ? void 0 : A.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[gt], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[gt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : T,
        "data-styled": !(p.jsx || p.unstyled || w),
        "data-mounted": te,
        "data-promise": !!p.promise,
        "data-swiped": ic,
        "data-removed": jn,
        "data-visible": Cb,
        "data-y-position": jb,
        "data-x-position": Pb,
        "data-index": x,
        "data-front": Sb,
        "data-swiping": Pn,
        "data-dismissible": ts,
        "data-type": gt,
        "data-invert": Eb,
        "data-swipe-out": En,
        "data-swipe-direction": Se,
        "data-expanded": !!(C || j && te),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": S.length - x,
            "--offset": `${jn ? oc : ns.current}px`,
            "--initial-height": j ? "auto" : `${es}px`,
            ...P,
            ...p.style
        },
        onDragEnd: () => {
            Jr(!1),
            Z(null),
            rs.current = null
        }
        ,
        onPointerDown: q => {
            lc || !ts || (Bf.current = new Date,
            hi(ns.current),
            q.target.setPointerCapture(q.pointerId),
            q.target.tagName !== "BUTTON" && (Jr(!0),
            rs.current = {
                x: q.clientX,
                y: q.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var q, re, ce, Pt;
            if (En || !ts)
                return;
            rs.current = null;
            let Et = Number(((q = br.current) == null ? void 0 : q.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , An = Number(((re = br.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Sr = new Date().getTime() - ((ce = Bf.current) == null ? void 0 : ce.getTime())
              , Rt = X === "x" ? Et : An
              , Mn = Math.abs(Rt) / Sr;
            if (Math.abs(Rt) >= BT || Mn > .11) {
                hi(ns.current),
                (Pt = p.onDismiss) == null || Pt.call(p, p),
                _e(X === "x" ? Et > 0 ? "right" : "left" : An > 0 ? "down" : "up"),
                Rn(),
                Io(!0),
                Fo(!1);
                return
            }
            Jr(!1),
            Z(null)
        }
        ,
        onPointerMove: q => {
            var re, ce, Pt, Et;
            if (!rs.current || !ts || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let An = q.clientY - rs.current.y
              , Sr = q.clientX - rs.current.x
              , Rt = (ce = e.swipeDirections) != null ? ce : HT(H);
            !X && (Math.abs(Sr) > 1 || Math.abs(An) > 1) && Z(Math.abs(Sr) > Math.abs(An) ? "x" : "y");
            let Mn = {
                x: 0,
                y: 0
            };
            X === "y" ? (Rt.includes("top") || Rt.includes("bottom")) && (Rt.includes("top") && An < 0 || Rt.includes("bottom") && An > 0) && (Mn.y = An) : X === "x" && (Rt.includes("left") || Rt.includes("right")) && (Rt.includes("left") && Sr < 0 || Rt.includes("right") && Sr > 0) && (Mn.x = Sr),
            (Math.abs(Mn.x) > 0 || Math.abs(Mn.y) > 0) && Fo(!0),
            (Pt = br.current) == null || Pt.style.setProperty("--swipe-amount-x", `${Mn.x}px`),
            (Et = br.current) == null || Et.style.setProperty("--swipe-amount-y", `${Mn.y}px`)
        }
    }, Nb && !p.jsx ? O.createElement("button", {
        "aria-label": K,
        "data-disabled": lc,
        "data-close-button": !0,
        onClick: lc || !ts ? () => {}
        : () => {
            var q;
            Rn(),
            (q = p.onDismiss) == null || q.call(p, p)
        }
        ,
        className: Mt(A == null ? void 0 : A.closeButton, (s = p == null ? void 0 : p.classNames) == null ? void 0 : s.closeButton)
    }, (i = _ == null ? void 0 : _.close) != null ? i : jT) : null, p.jsx || m.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : O.createElement(O.Fragment, null, gt || p.icon || p.promise ? O.createElement("div", {
        "data-icon": "",
        className: Mt(A == null ? void 0 : A.icon, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || Rb() : null, p.type !== "loading" ? p.icon || (_ == null ? void 0 : _[gt]) || wT(gt) : null) : null, O.createElement("div", {
        "data-content": "",
        className: Mt(A == null ? void 0 : A.content, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.content)
    }, O.createElement("div", {
        "data-title": "",
        className: Mt(A == null ? void 0 : A.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? O.createElement("div", {
        "data-description": "",
        className: Mt(I, Tb, A == null ? void 0 : A.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), m.isValidElement(p.cancel) ? p.cancel : p.cancel && aa(p.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || E,
        onClick: q => {
            var re, ce;
            aa(p.cancel) && ts && ((ce = (re = p.cancel).onClick) == null || ce.call(re, q),
            Rn())
        }
        ,
        className: Mt(A == null ? void 0 : A.cancelButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.cancelButton)
    }, p.cancel.label) : null, m.isValidElement(p.action) ? p.action : p.action && aa(p.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || V,
        onClick: q => {
            var re, ce;
            aa(p.action) && ((ce = (re = p.action).onClick) == null || ce.call(re, q),
            !q.defaultPrevented && Rn())
        }
        ,
        className: Mt(A == null ? void 0 : A.actionButton, (h = p == null ? void 0 : p.classNames) == null ? void 0 : h.actionButton)
    }, p.action.label) : null))
}
;
function gm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function WT(e, t) {
    let n = {};
    return [e, t].forEach( (r, s) => {
        let i = s === 1
          , o = i ? "--mobile-offset" : "--offset"
          , a = i ? IT : _T;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${o}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${o}-${u}`] = a : n[`${o}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var KT = m.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: s=["altKey", "KeyT"], expand: i, closeButton: o, className: a, offset: l, mobileOffset: u, theme: d="light", richColors: h, duration: f, style: p, visibleToasts: w=VT, toastOptions: v, dir: b=gm(), gap: y=zT, loadingIcon: g, icons: x, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: C} = e
      , [k,T] = O.useState([])
      , N = O.useMemo( () => Array.from(new Set([r].concat(k.filter(U => U.position).map(U => U.position)))), [k, r])
      , [P,E] = O.useState([])
      , [V,L] = O.useState(!1)
      , [I,M] = O.useState(!1)
      , [H,B] = O.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , z = O.useRef(null)
      , j = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , A = O.useRef(null)
      , _ = O.useRef(!1)
      , K = O.useCallback(U => {
        T(X => {
            var Z;
            return (Z = X.find(Se => Se.id === U.id)) != null && Z.delete || et.dismiss(U.id),
            X.filter( ({id: Se}) => Se !== U.id)
        }
        )
    }
    , []);
    return O.useEffect( () => et.subscribe(U => {
        if (U.dismiss) {
            T(X => X.map(Z => Z.id === U.id ? {
                ...Z,
                delete: !0
            } : Z));
            return
        }
        setTimeout( () => {
            Ev.flushSync( () => {
                T(X => {
                    let Z = X.findIndex(Se => Se.id === U.id);
                    return Z !== -1 ? [...X.slice(0, Z), {
                        ...X[Z],
                        ...U
                    }, ...X.slice(Z + 1)] : [U, ...X]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (d !== "system") {
            B(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? B("dark") : B("light")),
        typeof window > "u")
            return;
        let U = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            U.addEventListener("change", ({matches: X}) => {
                B(X ? "dark" : "light")
            }
            )
        } catch {
            U.addListener( ({matches: Z}) => {
                try {
                    B(Z ? "dark" : "light")
                } catch (Se) {
                    console.error(Se)
                }
            }
            )
        }
    }
    , [d]),
    O.useEffect( () => {
        k.length <= 1 && L(!1)
    }
    , [k]),
    O.useEffect( () => {
        let U = X => {
            var Z, Se;
            s.every(_e => X[_e] || X.code === _e) && (L(!0),
            (Z = z.current) == null || Z.focus()),
            X.code === "Escape" && (document.activeElement === z.current || (Se = z.current) != null && Se.contains(document.activeElement)) && L(!1)
        }
        ;
        return document.addEventListener("keydown", U),
        () => document.removeEventListener("keydown", U)
    }
    , [s]),
    O.useEffect( () => {
        if (z.current)
            return () => {
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null,
                _.current = !1)
            }
    }
    , [z.current]),
    O.createElement("section", {
        ref: t,
        "aria-label": `${S} ${j}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, N.map( (U, X) => {
        var Z;
        let[Se,_e] = U.split("-");
        return k.length ? O.createElement("ol", {
            key: U,
            dir: b === "auto" ? gm() : b,
            tabIndex: -1,
            ref: z,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": Se,
            "data-lifted": V && k.length > 1 && !i,
            "data-x-position": _e,
            style: {
                "--front-toast-height": `${((Z = P[0]) == null ? void 0 : Z.height) || 0}px`,
                "--width": `${FT}px`,
                "--gap": `${y}px`,
                ...p,
                ...WT(l, u)
            },
            onBlur: te => {
                _.current && !te.currentTarget.contains(te.relatedTarget) && (_.current = !1,
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null))
            }
            ,
            onFocus: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || _.current || (_.current = !0,
                A.current = te.relatedTarget)
            }
            ,
            onMouseEnter: () => L(!0),
            onMouseMove: () => L(!0),
            onMouseLeave: () => {
                I || L(!1)
            }
            ,
            onDragEnd: () => L(!1),
            onPointerDown: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || M(!0)
            }
            ,
            onPointerUp: () => M(!1)
        }, k.filter(te => !te.position && X === 0 || te.position === U).map( (te, Zr) => {
            var jn, wr;
            return O.createElement(UT, {
                key: te.id,
                icons: x,
                index: Zr,
                toast: te,
                defaultRichColors: h,
                duration: (jn = v == null ? void 0 : v.duration) != null ? jn : f,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: w,
                closeButton: (wr = v == null ? void 0 : v.closeButton) != null ? wr : o,
                interacting: I,
                position: U,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: K,
                toasts: k.filter(Pn => Pn.position == te.position),
                heights: P.filter(Pn => Pn.position == te.position),
                setHeights: E,
                expandByDefault: i,
                gap: y,
                loadingIcon: g,
                expanded: V,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const qT = ({...e}) => {
    const {theme: t="system"} = xT();
    return c.jsx(KT, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , GT = ["top", "right", "bottom", "left"]
  , cr = Math.min
  , ct = Math.max
  , il = Math.round
  , la = Math.floor
  , nn = e => ({
    x: e,
    y: e
})
  , QT = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , XT = {
    start: "end",
    end: "start"
};
function cd(e, t, n) {
    return ct(e, cr(t, n))
}
function Sn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Cn(e) {
    return e.split("-")[0]
}
function oi(e) {
    return e.split("-")[1]
}
function Bh(e) {
    return e === "x" ? "y" : "x"
}
function $h(e) {
    return e === "y" ? "height" : "width"
}
const YT = new Set(["top", "bottom"]);
function Jt(e) {
    return YT.has(Cn(e)) ? "y" : "x"
}
function Hh(e) {
    return Bh(Jt(e))
}
function ZT(e, t, n) {
    n === void 0 && (n = !1);
    const r = oi(e)
      , s = Hh(e)
      , i = $h(s);
    let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (o = ol(o)),
    [o, ol(o)]
}
function JT(e) {
    const t = ol(e);
    return [ud(e), t, ud(t)]
}
function ud(e) {
    return e.replace(/start|end/g, t => XT[t])
}
const ym = ["left", "right"]
  , vm = ["right", "left"]
  , eN = ["top", "bottom"]
  , tN = ["bottom", "top"];
function nN(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? vm : ym : t ? ym : vm;
    case "left":
    case "right":
        return t ? eN : tN;
    default:
        return []
    }
}
function rN(e, t, n, r) {
    const s = oi(e);
    let i = nN(Cn(e), n === "start", r);
    return s && (i = i.map(o => o + "-" + s),
    t && (i = i.concat(i.map(ud)))),
    i
}
function ol(e) {
    return e.replace(/left|right|bottom|top/g, t => QT[t])
}
function sN(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Tx(e) {
    return typeof e != "number" ? sN(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function al(e) {
    const {x: t, y: n, width: r, height: s} = e;
    return {
        width: r,
        height: s,
        top: n,
        left: t,
        right: t + r,
        bottom: n + s,
        x: t,
        y: n
    }
}
function xm(e, t, n) {
    let {reference: r, floating: s} = e;
    const i = Jt(t)
      , o = Hh(t)
      , a = $h(o)
      , l = Cn(t)
      , u = i === "y"
      , d = r.x + r.width / 2 - s.width / 2
      , h = r.y + r.height / 2 - s.height / 2
      , f = r[a] / 2 - s[a] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: d,
            y: r.y - s.height
        };
        break;
    case "bottom":
        p = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: h
        };
        break;
    case "left":
        p = {
            x: r.x - s.width,
            y: h
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (oi(t)) {
    case "start":
        p[o] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        p[o] += f * (n && u ? -1 : 1);
        break
    }
    return p
}
const iN = async (e, t, n) => {
    const {placement: r="bottom", strategy: s="absolute", middleware: i=[], platform: o} = n
      , a = i.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let u = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: s
    })
      , {x: d, y: h} = xm(u, r, l)
      , f = r
      , p = {}
      , w = 0;
    for (let v = 0; v < a.length; v++) {
        const {name: b, fn: y} = a[v]
          , {x: g, y: x, data: S, reset: C} = await y({
            x: d,
            y: h,
            initialPlacement: r,
            placement: f,
            strategy: s,
            middlewareData: p,
            rects: u,
            platform: o,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = g ?? d,
        h = x ?? h,
        p = {
            ...p,
            [b]: {
                ...p[b],
                ...S
            }
        },
        C && w <= 50 && (w++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (u = C.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        }) : C.rects),
        {x: d, y: h} = xm(u, f, l)),
        v = -1)
    }
    return {
        x: d,
        y: h,
        placement: f,
        strategy: s,
        middlewareData: p
    }
}
;
async function uo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: s, platform: i, rects: o, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: h="floating", altBoundary: f=!1, padding: p=0} = Sn(t, e)
      , w = Tx(p)
      , b = a[f ? h === "floating" ? "reference" : "floating" : h]
      , y = al(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , g = h === "floating" ? {
        x: r,
        y: s,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = al(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: g,
        offsetParent: x,
        strategy: l
    }) : g);
    return {
        top: (y.top - C.top + w.top) / S.y,
        bottom: (C.bottom - y.bottom + w.bottom) / S.y,
        left: (y.left - C.left + w.left) / S.x,
        right: (C.right - y.right + w.right) / S.x
    }
}
const oN = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: s, rects: i, platform: o, elements: a, middlewareData: l} = t
          , {element: u, padding: d=0} = Sn(e, t) || {};
        if (u == null)
            return {};
        const h = Tx(d)
          , f = {
            x: n,
            y: r
        }
          , p = Hh(s)
          , w = $h(p)
          , v = await o.getDimensions(u)
          , b = p === "y"
          , y = b ? "top" : "left"
          , g = b ? "bottom" : "right"
          , x = b ? "clientHeight" : "clientWidth"
          , S = i.reference[w] + i.reference[p] - f[p] - i.floating[w]
          , C = f[p] - i.reference[p]
          , k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let T = k ? k[x] : 0;
        (!T || !await (o.isElement == null ? void 0 : o.isElement(k))) && (T = a.floating[x] || i.floating[w]);
        const N = S / 2 - C / 2
          , P = T / 2 - v[w] / 2 - 1
          , E = cr(h[y], P)
          , V = cr(h[g], P)
          , L = E
          , I = T - v[w] - V
          , M = T / 2 - v[w] / 2 + N
          , H = cd(L, M, I)
          , B = !l.arrow && oi(s) != null && M !== H && i.reference[w] / 2 - (M < L ? E : V) - v[w] / 2 < 0
          , z = B ? M < L ? M - L : M - I : 0;
        return {
            [p]: f[p] + z,
            data: {
                [p]: H,
                centerOffset: M - H - z,
                ...B && {
                    alignmentOffset: z
                }
            },
            reset: B
        }
    }
})
  , aN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, middlewareData: i, rects: o, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: h=!0, fallbackPlacements: f, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: v=!0, ...b} = Sn(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const y = Cn(s)
              , g = Jt(a)
              , x = Cn(a) === a
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = f || (x || !v ? [ol(a)] : JT(a))
              , k = w !== "none";
            !f && k && C.push(...rN(a, v, w, S));
            const T = [a, ...C]
              , N = await uo(t, b)
              , P = [];
            let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (d && P.push(N[y]),
            h) {
                const M = ZT(s, o, S);
                P.push(N[M[0]], N[M[1]])
            }
            if (E = [...E, {
                placement: s,
                overflows: P
            }],
            !P.every(M => M <= 0)) {
                var V, L;
                const M = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1
                  , H = T[M];
                if (H && (!(h === "alignment" ? g !== Jt(H) : !1) || E.every(j => j.overflows[0] > 0 && Jt(j.placement) === g)))
                    return {
                        data: {
                            index: M,
                            overflows: E
                        },
                        reset: {
                            placement: H
                        }
                    };
                let B = (L = E.filter(z => z.overflows[0] <= 0).sort( (z, j) => z.overflows[1] - j.overflows[1])[0]) == null ? void 0 : L.placement;
                if (!B)
                    switch (p) {
                    case "bestFit":
                        {
                            var I;
                            const z = (I = E.filter(j => {
                                if (k) {
                                    const A = Jt(j.placement);
                                    return A === g || A === "y"
                                }
                                return !0
                            }
                            ).map(j => [j.placement, j.overflows.filter(A => A > 0).reduce( (A, _) => A + _, 0)]).sort( (j, A) => j[1] - A[1])[0]) == null ? void 0 : I[0];
                            z && (B = z);
                            break
                        }
                    case "initialPlacement":
                        B = a;
                        break
                    }
                if (s !== B)
                    return {
                        reset: {
                            placement: B
                        }
                    }
            }
            return {}
        }
    }
};
function wm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function bm(e) {
    return GT.some(t => e[t] >= 0)
}
const lN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...s} = Sn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await uo(t, {
                        ...s,
                        elementContext: "reference"
                    })
                      , o = wm(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: bm(o)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await uo(t, {
                        ...s,
                        altBoundary: !0
                    })
                      , o = wm(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: bm(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Nx = new Set(["left", "top"]);
async function cN(e, t) {
    const {placement: n, platform: r, elements: s} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating))
      , o = Cn(n)
      , a = oi(n)
      , l = Jt(n) === "y"
      , u = Nx.has(o) ? -1 : 1
      , d = i && l ? -1 : 1
      , h = Sn(t, e);
    let {mainAxis: f, crossAxis: p, alignmentAxis: w} = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis
    };
    return a && typeof w == "number" && (p = a === "end" ? w * -1 : w),
    l ? {
        x: p * d,
        y: f * u
    } : {
        x: f * u,
        y: p * d
    }
}
const uN = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: s, y: i, placement: o, middlewareData: a} = t
              , l = await cN(t, e);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: s + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , dN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: s} = t
              , {mainAxis: i=!0, crossAxis: o=!1, limiter: a={
                fn: b => {
                    let {x: y, y: g} = b;
                    return {
                        x: y,
                        y: g
                    }
                }
            }, ...l} = Sn(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await uo(t, l)
              , h = Jt(Cn(s))
              , f = Bh(h);
            let p = u[f]
              , w = u[h];
            if (i) {
                const b = f === "y" ? "top" : "left"
                  , y = f === "y" ? "bottom" : "right"
                  , g = p + d[b]
                  , x = p - d[y];
                p = cd(g, p, x)
            }
            if (o) {
                const b = h === "y" ? "top" : "left"
                  , y = h === "y" ? "bottom" : "right"
                  , g = w + d[b]
                  , x = w - d[y];
                w = cd(g, w, x)
            }
            const v = a.fn({
                ...t,
                [f]: p,
                [h]: w
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                        [f]: i,
                        [h]: o
                    }
                }
            }
        }
    }
}
  , hN = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: s, rects: i, middlewareData: o} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = Sn(e, t)
              , d = {
                x: n,
                y: r
            }
              , h = Jt(s)
              , f = Bh(h);
            let p = d[f]
              , w = d[h];
            const v = Sn(a, t)
              , b = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (l) {
                const x = f === "y" ? "height" : "width"
                  , S = i.reference[f] - i.floating[x] + b.mainAxis
                  , C = i.reference[f] + i.reference[x] - b.mainAxis;
                p < S ? p = S : p > C && (p = C)
            }
            if (u) {
                var y, g;
                const x = f === "y" ? "width" : "height"
                  , S = Nx.has(Cn(s))
                  , C = i.reference[h] - i.floating[x] + (S && ((y = o.offset) == null ? void 0 : y[h]) || 0) + (S ? 0 : b.crossAxis)
                  , k = i.reference[h] + i.reference[x] + (S ? 0 : ((g = o.offset) == null ? void 0 : g[h]) || 0) - (S ? b.crossAxis : 0);
                w < C ? w = C : w > k && (w = k)
            }
            return {
                [f]: p,
                [h]: w
            }
        }
    }
}
  , fN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, rects: i, platform: o, elements: a} = t
              , {apply: l= () => {}
            , ...u} = Sn(e, t)
              , d = await uo(t, u)
              , h = Cn(s)
              , f = oi(s)
              , p = Jt(s) === "y"
              , {width: w, height: v} = i.floating;
            let b, y;
            h === "top" || h === "bottom" ? (b = h,
            y = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = h,
            b = f === "end" ? "top" : "bottom");
            const g = v - d.top - d.bottom
              , x = w - d.left - d.right
              , S = cr(v - d[b], g)
              , C = cr(w - d[y], x)
              , k = !t.middlewareData.shift;
            let T = S
              , N = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = g),
            k && !f) {
                const E = ct(d.left, 0)
                  , V = ct(d.right, 0)
                  , L = ct(d.top, 0)
                  , I = ct(d.bottom, 0);
                p ? N = w - 2 * (E !== 0 || V !== 0 ? E + V : ct(d.left, d.right)) : T = v - 2 * (L !== 0 || I !== 0 ? L + I : ct(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: N,
                availableHeight: T
            });
            const P = await o.getDimensions(a.floating);
            return w !== P.width || v !== P.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Hl() {
    return typeof window < "u"
}
function ai(e) {
    return jx(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function ht(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function an(e) {
    var t;
    return (t = (jx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function jx(e) {
    return Hl() ? e instanceof Node || e instanceof ht(e).Node : !1
}
function Wt(e) {
    return Hl() ? e instanceof Element || e instanceof ht(e).Element : !1
}
function on(e) {
    return Hl() ? e instanceof HTMLElement || e instanceof ht(e).HTMLElement : !1
}
function Sm(e) {
    return !Hl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ht(e).ShadowRoot
}
const pN = new Set(["inline", "contents"]);
function Mo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: s} = Kt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !pN.has(s)
}
const mN = new Set(["table", "td", "th"]);
function gN(e) {
    return mN.has(ai(e))
}
const yN = [":popover-open", ":modal"];
function Ul(e) {
    return yN.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const vN = ["transform", "translate", "scale", "rotate", "perspective"]
  , xN = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , wN = ["paint", "layout", "strict", "content"];
function Uh(e) {
    const t = Wh()
      , n = Wt(e) ? Kt(e) : e;
    return vN.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || xN.some(r => (n.willChange || "").includes(r)) || wN.some(r => (n.contain || "").includes(r))
}
function bN(e) {
    let t = ur(e);
    for (; on(t) && !Gs(t); ) {
        if (Uh(t))
            return t;
        if (Ul(t))
            return null;
        t = ur(t)
    }
    return null
}
function Wh() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const SN = new Set(["html", "body", "#document"]);
function Gs(e) {
    return SN.has(ai(e))
}
function Kt(e) {
    return ht(e).getComputedStyle(e)
}
function Wl(e) {
    return Wt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function ur(e) {
    if (ai(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Sm(e) && e.host || an(e);
    return Sm(t) ? t.host : t
}
function Px(e) {
    const t = ur(e);
    return Gs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : on(t) && Mo(t) ? t : Px(t)
}
function ho(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const s = Px(e)
      , i = s === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , o = ht(s);
    if (i) {
        const a = dd(o);
        return t.concat(o, o.visualViewport || [], Mo(s) ? s : [], a && n ? ho(a) : [])
    }
    return t.concat(s, ho(s, [], n))
}
function dd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Ex(e) {
    const t = Kt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const s = on(e)
      , i = s ? e.offsetWidth : n
      , o = s ? e.offsetHeight : r
      , a = il(n) !== i || il(r) !== o;
    return a && (n = i,
    r = o),
    {
        width: n,
        height: r,
        $: a
    }
}
function Kh(e) {
    return Wt(e) ? e : e.contextElement
}
function Rs(e) {
    const t = Kh(e);
    if (!on(t))
        return nn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: s, $: i} = Ex(t);
    let o = (i ? il(n.width) : n.width) / r
      , a = (i ? il(n.height) : n.height) / s;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const CN = nn(0);
function Rx(e) {
    const t = ht(e);
    return !Wh() || !t.visualViewport ? CN : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function kN(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== ht(e) ? !1 : t
}
function qr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , i = Kh(e);
    let o = nn(1);
    t && (r ? Wt(r) && (o = Rs(r)) : o = Rs(e));
    const a = kN(i, n, r) ? Rx(i) : nn(0);
    let l = (s.left + a.x) / o.x
      , u = (s.top + a.y) / o.y
      , d = s.width / o.x
      , h = s.height / o.y;
    if (i) {
        const f = ht(i)
          , p = r && Wt(r) ? ht(r) : r;
        let w = f
          , v = dd(w);
        for (; v && r && p !== w; ) {
            const b = Rs(v)
              , y = v.getBoundingClientRect()
              , g = Kt(v)
              , x = y.left + (v.clientLeft + parseFloat(g.paddingLeft)) * b.x
              , S = y.top + (v.clientTop + parseFloat(g.paddingTop)) * b.y;
            l *= b.x,
            u *= b.y,
            d *= b.x,
            h *= b.y,
            l += x,
            u += S,
            w = ht(v),
            v = dd(w)
        }
    }
    return al({
        width: d,
        height: h,
        x: l,
        y: u
    })
}
function qh(e, t) {
    const n = Wl(e).scrollLeft;
    return t ? t.left + n : qr(an(e)).left + n
}
function Ax(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , s = r.left + t.scrollLeft - (n ? 0 : qh(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: s,
        y: i
    }
}
function TN(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: s} = e;
    const i = s === "fixed"
      , o = an(r)
      , a = t ? Ul(t.floating) : !1;
    if (r === o || a && i)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = nn(1);
    const d = nn(0)
      , h = on(r);
    if ((h || !h && !i) && ((ai(r) !== "body" || Mo(o)) && (l = Wl(r)),
    on(r))) {
        const p = qr(r);
        u = Rs(r),
        d.x = p.x + r.clientLeft,
        d.y = p.y + r.clientTop
    }
    const f = o && !h && !i ? Ax(o, l, !0) : nn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
    }
}
function NN(e) {
    return Array.from(e.getClientRects())
}
function jN(e) {
    const t = an(e)
      , n = Wl(e)
      , r = e.ownerDocument.body
      , s = ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let o = -n.scrollLeft + qh(e);
    const a = -n.scrollTop;
    return Kt(r).direction === "rtl" && (o += ct(t.clientWidth, r.clientWidth) - s),
    {
        width: s,
        height: i,
        x: o,
        y: a
    }
}
function PN(e, t) {
    const n = ht(e)
      , r = an(e)
      , s = n.visualViewport;
    let i = r.clientWidth
      , o = r.clientHeight
      , a = 0
      , l = 0;
    if (s) {
        i = s.width,
        o = s.height;
        const u = Wh();
        (!u || u && t === "fixed") && (a = s.offsetLeft,
        l = s.offsetTop)
    }
    return {
        width: i,
        height: o,
        x: a,
        y: l
    }
}
const EN = new Set(["absolute", "fixed"]);
function RN(e, t) {
    const n = qr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , s = n.left + e.clientLeft
      , i = on(e) ? Rs(e) : nn(1)
      , o = e.clientWidth * i.x
      , a = e.clientHeight * i.y
      , l = s * i.x
      , u = r * i.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function Cm(e, t, n) {
    let r;
    if (t === "viewport")
        r = PN(e, n);
    else if (t === "document")
        r = jN(an(e));
    else if (Wt(t))
        r = RN(t, n);
    else {
        const s = Rx(e);
        r = {
            x: t.x - s.x,
            y: t.y - s.y,
            width: t.width,
            height: t.height
        }
    }
    return al(r)
}
function Mx(e, t) {
    const n = ur(e);
    return n === t || !Wt(n) || Gs(n) ? !1 : Kt(n).position === "fixed" || Mx(n, t)
}
function AN(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = ho(e, [], !1).filter(a => Wt(a) && ai(a) !== "body")
      , s = null;
    const i = Kt(e).position === "fixed";
    let o = i ? ur(e) : e;
    for (; Wt(o) && !Gs(o); ) {
        const a = Kt(o)
          , l = Uh(o);
        !l && a.position === "fixed" && (s = null),
        (i ? !l && !s : !l && a.position === "static" && !!s && EN.has(s.position) || Mo(o) && !l && Mx(e, o)) ? r = r.filter(d => d !== o) : s = a,
        o = ur(o)
    }
    return t.set(e, r),
    r
}
function MN(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: s} = e;
    const o = [...n === "clippingAncestors" ? Ul(t) ? [] : AN(t, this._c) : [].concat(n), r]
      , a = o[0]
      , l = o.reduce( (u, d) => {
        const h = Cm(t, d, s);
        return u.top = ct(h.top, u.top),
        u.right = cr(h.right, u.right),
        u.bottom = cr(h.bottom, u.bottom),
        u.left = ct(h.left, u.left),
        u
    }
    , Cm(t, a, s));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function LN(e) {
    const {width: t, height: n} = Ex(e);
    return {
        width: t,
        height: n
    }
}
function DN(e, t, n) {
    const r = on(t)
      , s = an(t)
      , i = n === "fixed"
      , o = qr(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = nn(0);
    function u() {
        l.x = qh(s)
    }
    if (r || !r && !i)
        if ((ai(t) !== "body" || Mo(s)) && (a = Wl(t)),
        r) {
            const p = qr(t, !0, i, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            s && u();
    i && !r && s && u();
    const d = s && !r && !i ? Ax(s, a) : nn(0)
      , h = o.left + a.scrollLeft - l.x - d.x
      , f = o.top + a.scrollTop - l.y - d.y;
    return {
        x: h,
        y: f,
        width: o.width,
        height: o.height
    }
}
function Bc(e) {
    return Kt(e).position === "static"
}
function km(e, t) {
    if (!on(e) || Kt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return an(e) === n && (n = n.ownerDocument.body),
    n
}
function Lx(e, t) {
    const n = ht(e);
    if (Ul(e))
        return n;
    if (!on(e)) {
        let s = ur(e);
        for (; s && !Gs(s); ) {
            if (Wt(s) && !Bc(s))
                return s;
            s = ur(s)
        }
        return n
    }
    let r = km(e, t);
    for (; r && gN(r) && Bc(r); )
        r = km(r, t);
    return r && Gs(r) && Bc(r) && !Uh(r) ? n : r || bN(e) || n
}
const ON = async function(e) {
    const t = this.getOffsetParent || Lx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: DN(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function VN(e) {
    return Kt(e).direction === "rtl"
}
const _N = {
    convertOffsetParentRelativeRectToViewportRelativeRect: TN,
    getDocumentElement: an,
    getClippingRect: MN,
    getOffsetParent: Lx,
    getElementRects: ON,
    getClientRects: NN,
    getDimensions: LN,
    getScale: Rs,
    isElement: Wt,
    isRTL: VN
};
function Dx(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function IN(e, t) {
    let n = null, r;
    const s = an(e);
    function i() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: d, top: h, width: f, height: p} = u;
        if (a || t(),
        !f || !p)
            return;
        const w = la(h)
          , v = la(s.clientWidth - (d + f))
          , b = la(s.clientHeight - (h + p))
          , y = la(d)
          , x = {
            rootMargin: -w + "px " + -v + "px " + -b + "px " + -y + "px",
            threshold: ct(0, cr(1, l)) || 1
        };
        let S = !0;
        function C(k) {
            const T = k[0].intersectionRatio;
            if (T !== l) {
                if (!S)
                    return o();
                T ? o(!1, T) : r = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            T === 1 && !Dx(u, e.getBoundingClientRect()) && o(),
            S = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...x,
                root: s.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,x)
        }
        n.observe(e)
    }
    return o(!0),
    i
}
function FN(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: s=!0, ancestorResize: i=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Kh(e)
      , d = s || i ? [...u ? ho(u) : [], ...ho(t)] : [];
    d.forEach(y => {
        s && y.addEventListener("scroll", n, {
            passive: !0
        }),
        i && y.addEventListener("resize", n)
    }
    );
    const h = u && a ? IN(u, n) : null;
    let f = -1
      , p = null;
    o && (p = new ResizeObserver(y => {
        let[g] = y;
        g && g.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var x;
            (x = p) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && p.observe(u),
    p.observe(t));
    let w, v = l ? qr(e) : null;
    l && b();
    function b() {
        const y = qr(e);
        v && !Dx(v, y) && n(),
        v = y,
        w = requestAnimationFrame(b)
    }
    return n(),
    () => {
        var y;
        d.forEach(g => {
            s && g.removeEventListener("scroll", n),
            i && g.removeEventListener("resize", n)
        }
        ),
        h == null || h(),
        (y = p) == null || y.disconnect(),
        p = null,
        l && cancelAnimationFrame(w)
    }
}
const zN = uN
  , BN = dN
  , $N = aN
  , HN = fN
  , UN = lN
  , Tm = oN
  , WN = hN
  , KN = (e, t, n) => {
    const r = new Map
      , s = {
        platform: _N,
        ...n
    }
      , i = {
        ...s.platform,
        _c: r
    };
    return iN(e, t, {
        ...s,
        platform: i
    })
}
;
var qN = typeof document < "u"
  , GN = function() {}
  , Ea = qN ? m.useLayoutEffect : GN;
function ll(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, s;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!ll(e[r], t[r]))
                    return !1;
            return !0
        }
        if (s = Object.keys(e),
        n = s.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, s[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = s[r];
            if (!(i === "_owner" && e.$$typeof) && !ll(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Ox(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Nm(e, t) {
    const n = Ox(e);
    return Math.round(t * n) / n
}
function $c(e) {
    const t = m.useRef(e);
    return Ea( () => {
        t.current = e
    }
    ),
    t
}
function QN(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: s, elements: {reference: i, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [d,h] = m.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,p] = m.useState(r);
    ll(f, r) || p(r);
    const [w,v] = m.useState(null)
      , [b,y] = m.useState(null)
      , g = m.useCallback(j => {
        j !== k.current && (k.current = j,
        v(j))
    }
    , [])
      , x = m.useCallback(j => {
        j !== T.current && (T.current = j,
        y(j))
    }
    , [])
      , S = i || w
      , C = o || b
      , k = m.useRef(null)
      , T = m.useRef(null)
      , N = m.useRef(d)
      , P = l != null
      , E = $c(l)
      , V = $c(s)
      , L = $c(u)
      , I = m.useCallback( () => {
        if (!k.current || !T.current)
            return;
        const j = {
            placement: t,
            strategy: n,
            middleware: f
        };
        V.current && (j.platform = V.current),
        KN(k.current, T.current, j).then(A => {
            const _ = {
                ...A,
                isPositioned: L.current !== !1
            };
            M.current && !ll(N.current, _) && (N.current = _,
            Ro.flushSync( () => {
                h(_)
            }
            ))
        }
        )
    }
    , [f, t, n, V, L]);
    Ea( () => {
        u === !1 && N.current.isPositioned && (N.current.isPositioned = !1,
        h(j => ({
            ...j,
            isPositioned: !1
        })))
    }
    , [u]);
    const M = m.useRef(!1);
    Ea( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    Ea( () => {
        if (S && (k.current = S),
        C && (T.current = C),
        S && C) {
            if (E.current)
                return E.current(S, C, I);
            I()
        }
    }
    , [S, C, I, E, P]);
    const H = m.useMemo( () => ({
        reference: k,
        floating: T,
        setReference: g,
        setFloating: x
    }), [g, x])
      , B = m.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , z = m.useMemo( () => {
        const j = {
            position: n,
            left: 0,
            top: 0
        };
        if (!B.floating)
            return j;
        const A = Nm(B.floating, d.x)
          , _ = Nm(B.floating, d.y);
        return a ? {
            ...j,
            transform: "translate(" + A + "px, " + _ + "px)",
            ...Ox(B.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: A,
            top: _
        }
    }
    , [n, a, B.floating, d.x, d.y]);
    return m.useMemo( () => ({
        ...d,
        update: I,
        refs: H,
        elements: B,
        floatingStyles: z
    }), [d, I, H, B, z])
}
const XN = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: s} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Tm({
                element: r.current,
                padding: s
            }).fn(n) : {} : r ? Tm({
                element: r,
                padding: s
            }).fn(n) : {}
        }
    }
}
  , YN = (e, t) => ({
    ...zN(e),
    options: [e, t]
})
  , ZN = (e, t) => ({
    ...BN(e),
    options: [e, t]
})
  , JN = (e, t) => ({
    ...WN(e),
    options: [e, t]
})
  , ej = (e, t) => ({
    ...$N(e),
    options: [e, t]
})
  , tj = (e, t) => ({
    ...HN(e),
    options: [e, t]
})
  , nj = (e, t) => ({
    ...UN(e),
    options: [e, t]
})
  , rj = (e, t) => ({
    ...XN(e),
    options: [e, t]
});
var sj = "Arrow"
  , Vx = m.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: s=5, ...i} = e;
    return c.jsx(be.svg, {
        ...i,
        ref: t,
        width: r,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Vx.displayName = sj;
var ij = Vx;
function oj(e) {
    const [t,n] = m.useState(void 0);
    return bn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(s => {
                if (!Array.isArray(s) || !s.length)
                    return;
                const i = s[0];
                let o, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: o,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var _x = "Popper"
  , [Ix,Fx] = si(_x)
  , [$A,zx] = Ix(_x)
  , Bx = "PopperAnchor"
  , $x = m.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...s} = e
      , i = zx(Bx, n)
      , o = m.useRef(null)
      , a = Oe(t, o);
    return m.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current)
    }
    ),
    r ? null : c.jsx(be.div, {
        ...s,
        ref: a
    })
}
);
$x.displayName = Bx;
var Gh = "PopperContent"
  , [aj,lj] = Ix(Gh)
  , Hx = m.forwardRef( (e, t) => {
    var te, Zr, jn, wr, Pn, Jr;
    const {__scopePopper: n, side: r="bottom", sideOffset: s=0, align: i="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: h="partial", hideWhenDetached: f=!1, updatePositionStrategy: p="optimized", onPlaced: w, ...v} = e
      , b = zx(Gh, n)
      , [y,g] = m.useState(null)
      , x = Oe(t, En => g(En))
      , [S,C] = m.useState(null)
      , k = oj(S)
      , T = (k == null ? void 0 : k.width) ?? 0
      , N = (k == null ? void 0 : k.height) ?? 0
      , P = r + (i !== "center" ? "-" + i : "")
      , E = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , V = Array.isArray(u) ? u : [u]
      , L = V.length > 0
      , I = {
        padding: E,
        boundary: V.filter(uj),
        altBoundary: L
    }
      , {refs: M, floatingStyles: H, placement: B, isPositioned: z, middlewareData: j} = QN({
        strategy: "fixed",
        placement: P,
        whileElementsMounted: (...En) => FN(...En, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: b.anchor
        },
        middleware: [YN({
            mainAxis: s + N,
            alignmentAxis: o
        }), l && ZN({
            mainAxis: !0,
            crossAxis: !1,
            limiter: h === "partial" ? JN() : void 0,
            ...I
        }), l && ej({
            ...I
        }), tj({
            ...I,
            apply: ({elements: En, rects: Io, availableWidth: ic, availableHeight: Fo}) => {
                const {width: oc, height: hi} = Io.reference
                  , es = En.floating.style;
                es.setProperty("--radix-popper-available-width", `${ic}px`),
                es.setProperty("--radix-popper-available-height", `${Fo}px`),
                es.setProperty("--radix-popper-anchor-width", `${oc}px`),
                es.setProperty("--radix-popper-anchor-height", `${hi}px`)
            }
        }), S && rj({
            element: S,
            padding: a
        }), dj({
            arrowWidth: T,
            arrowHeight: N
        }), f && nj({
            strategy: "referenceHidden",
            ...I
        })]
    })
      , [A,_] = Kx(B)
      , K = Ge(w);
    bn( () => {
        z && (K == null || K())
    }
    , [z, K]);
    const U = (te = j.arrow) == null ? void 0 : te.x
      , X = (Zr = j.arrow) == null ? void 0 : Zr.y
      , Z = ((jn = j.arrow) == null ? void 0 : jn.centerOffset) !== 0
      , [Se,_e] = m.useState();
    return bn( () => {
        y && _e(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    c.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: z ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Se,
            "--radix-popper-transform-origin": [(wr = j.transformOrigin) == null ? void 0 : wr.x, (Pn = j.transformOrigin) == null ? void 0 : Pn.y].join(" "),
            ...((Jr = j.hide) == null ? void 0 : Jr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(aj, {
            scope: n,
            placedSide: A,
            onArrowChange: C,
            arrowX: U,
            arrowY: X,
            shouldHideArrow: Z,
            children: c.jsx(be.div, {
                "data-side": A,
                "data-align": _,
                ...v,
                ref: x,
                style: {
                    ...v.style,
                    animation: z ? void 0 : "none"
                }
            })
        })
    })
}
);
Hx.displayName = Gh;
var Ux = "PopperArrow"
  , cj = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Wx = m.forwardRef(function(t, n) {
    const {__scopePopper: r, ...s} = t
      , i = lj(Ux, r)
      , o = cj[i.placedSide];
    return c.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(ij, {
            ...s,
            ref: n,
            style: {
                ...s.style,
                display: "block"
            }
        })
    })
});
Wx.displayName = Ux;
function uj(e) {
    return e !== null
}
var dj = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var b, y, g;
        const {placement: n, rects: r, middlewareData: s} = t
          , o = ((b = s.arrow) == null ? void 0 : b.centerOffset) !== 0
          , a = o ? 0 : e.arrowWidth
          , l = o ? 0 : e.arrowHeight
          , [u,d] = Kx(n)
          , h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , f = (((y = s.arrow) == null ? void 0 : y.x) ?? 0) + a / 2
          , p = (((g = s.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
        let w = ""
          , v = "";
        return u === "bottom" ? (w = o ? h : `${f}px`,
        v = `${-l}px`) : u === "top" ? (w = o ? h : `${f}px`,
        v = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`,
        v = o ? h : `${p}px`) : u === "left" && (w = `${r.floating.width + l}px`,
        v = o ? h : `${p}px`),
        {
            data: {
                x: w,
                y: v
            }
        }
    }
});
function Kx(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var hj = $x
  , fj = Hx
  , pj = Wx
  , [Kl,HA] = si("Tooltip", [Fx])
  , Qh = Fx()
  , qx = "TooltipProvider"
  , mj = 700
  , jm = "tooltip.open"
  , [gj,Gx] = Kl(qx)
  , Qx = e => {
    const {__scopeTooltip: t, delayDuration: n=mj, skipDelayDuration: r=300, disableHoverableContent: s=!1, children: i} = e
      , o = m.useRef(!0)
      , a = m.useRef(!1)
      , l = m.useRef(0);
    return m.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(gj, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: m.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: m.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: m.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: s,
        children: i
    })
}
;
Qx.displayName = qx;
var Xx = "Tooltip"
  , [UA,ql] = Kl(Xx)
  , hd = "TooltipTrigger"
  , yj = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = ql(hd, n)
      , i = Gx(hd, n)
      , o = Qh(n)
      , a = m.useRef(null)
      , l = Oe(t, a, s.onTriggerChange)
      , u = m.useRef(!1)
      , d = m.useRef(!1)
      , h = m.useCallback( () => u.current = !1, []);
    return m.useEffect( () => () => document.removeEventListener("pointerup", h), [h]),
    c.jsx(hj, {
        asChild: !0,
        ...o,
        children: c.jsx(be.button, {
            "aria-describedby": s.open ? s.contentId : void 0,
            "data-state": s.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: se(e.onPointerMove, f => {
                f.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (s.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: se(e.onPointerLeave, () => {
                s.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: se(e.onPointerDown, () => {
                s.open && s.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", h, {
                    once: !0
                })
            }
            ),
            onFocus: se(e.onFocus, () => {
                u.current || s.onOpen()
            }
            ),
            onBlur: se(e.onBlur, s.onClose),
            onClick: se(e.onClick, s.onClose)
        })
    })
}
);
yj.displayName = hd;
var vj = "TooltipPortal"
  , [WA,xj] = Kl(vj, {
    forceMount: void 0
})
  , Qs = "TooltipContent"
  , Yx = m.forwardRef( (e, t) => {
    const n = xj(Qs, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: s="top", ...i} = e
      , o = ql(Qs, e.__scopeTooltip);
    return c.jsx(Yr, {
        present: r || o.open,
        children: o.disableHoverableContent ? c.jsx(Zx, {
            side: s,
            ...i,
            ref: t
        }) : c.jsx(wj, {
            side: s,
            ...i,
            ref: t
        })
    })
}
)
  , wj = m.forwardRef( (e, t) => {
    const n = ql(Qs, e.__scopeTooltip)
      , r = Gx(Qs, e.__scopeTooltip)
      , s = m.useRef(null)
      , i = Oe(t, s)
      , [o,a] = m.useState(null)
      , {trigger: l, onClose: u} = n
      , d = s.current
      , {onPointerInTransitChange: h} = r
      , f = m.useCallback( () => {
        a(null),
        h(!1)
    }
    , [h])
      , p = m.useCallback( (w, v) => {
        const b = w.currentTarget
          , y = {
            x: w.clientX,
            y: w.clientY
        }
          , g = Tj(y, b.getBoundingClientRect())
          , x = Nj(y, g)
          , S = jj(v.getBoundingClientRect())
          , C = Ej([...x, ...S]);
        a(C),
        h(!0)
    }
    , [h]);
    return m.useEffect( () => () => f(), [f]),
    m.useEffect( () => {
        if (l && d) {
            const w = b => p(b, d)
              , v = b => p(b, l);
            return l.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", v),
            () => {
                l.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", v)
            }
        }
    }
    , [l, d, p, f]),
    m.useEffect( () => {
        if (o) {
            const w = v => {
                const b = v.target
                  , y = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , g = (l == null ? void 0 : l.contains(b)) || (d == null ? void 0 : d.contains(b))
                  , x = !Pj(y, o);
                g ? f() : x && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [l, d, o, u, f]),
    c.jsx(Zx, {
        ...e,
        ref: i
    })
}
)
  , [bj,Sj] = Kl(Xx, {
    isInside: !1
})
  , Cj = hC("TooltipContent")
  , Zx = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": s, onEscapeKeyDown: i, onPointerDownOutside: o, ...a} = e
      , l = ql(Qs, n)
      , u = Qh(n)
      , {onClose: d} = l;
    return m.useEffect( () => (document.addEventListener(jm, d),
    () => document.removeEventListener(jm, d)), [d]),
    m.useEffect( () => {
        if (l.trigger) {
            const h = f => {
                const p = f.target;
                p != null && p.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", h, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", h, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    c.jsx(Lh, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: h => h.preventDefault(),
        onDismiss: d,
        children: c.jsxs(fj, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(Cj, {
                children: r
            }), c.jsx(bj, {
                scope: n,
                isInside: !0,
                children: c.jsx(_C, {
                    id: l.contentId,
                    role: "tooltip",
                    children: s || r
                })
            })]
        })
    })
}
);
Yx.displayName = Qs;
var Jx = "TooltipArrow"
  , kj = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = Qh(n);
    return Sj(Jx, n).isInside ? null : c.jsx(pj, {
        ...s,
        ...r,
        ref: t
    })
}
);
kj.displayName = Jx;
function Tj(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , s = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, s, i)) {
    case i:
        return "left";
    case s:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Nj(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function jj(e) {
    const {top: t, right: n, bottom: r, left: s} = e;
    return [{
        x: s,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: s,
        y: r
    }]
}
function Pj(e, t) {
    const {x: n, y: r} = e;
    let s = !1;
    for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
        const a = t[i]
          , l = t[o]
          , u = a.x
          , d = a.y
          , h = l.x
          , f = l.y;
        d > r != f > r && n < (h - u) * (r - d) / (f - d) + u && (s = !s)
    }
    return s
}
function Ej(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Rj(t)
}
function Rj(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , o = t[t.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                t.pop();
            else
                break
        }
        t.push(s)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , o = n[n.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                n.pop();
            else
                break
        }
        n.push(s)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Aj = Qx
  , e1 = Yx;
const Mj = Aj
  , Lj = m.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(e1, {
    ref: r,
    sideOffset: t,
    className: Ve("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Lj.displayName = e1.displayName;
var Gl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ql = typeof window > "u" || "Deno"in globalThis;
function _t() {}
function Dj(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Oj(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Vj(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function fd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function _j(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Pm(e, t) {
    const {type: n="all", exact: r, fetchStatus: s, predicate: i, queryKey: o, stale: a} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Xh(o, t.options))
                return !1
        } else if (!po(t.queryKey, o))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || s && s !== t.state.fetchStatus || i && !i(t))
}
function Em(e, t) {
    const {exact: n, status: r, predicate: s, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (fo(t.options.mutationKey) !== fo(i))
                return !1
        } else if (!po(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || s && !s(t))
}
function Xh(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || fo)(e)
}
function fo(e) {
    return JSON.stringify(e, (t, n) => pd(n) ? Object.keys(n).sort().reduce( (r, s) => (r[s] = n[s],
    r), {}) : n)
}
function po(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => po(e[n], t[n])) : !1
}
function t1(e, t) {
    if (e === t)
        return e;
    const n = Rm(e) && Rm(t);
    if (n || pd(e) && pd(t)) {
        const r = n ? e : Object.keys(e)
          , s = r.length
          , i = n ? t : Object.keys(t)
          , o = i.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let d = 0; d < o; d++) {
            const h = n ? d : i[d];
            (!n && l.has(h) || n) && e[h] === void 0 && t[h] === void 0 ? (a[h] = void 0,
            u++) : (a[h] = t1(e[h], t[h]),
            a[h] === e[h] && e[h] !== void 0 && u++)
        }
        return s === o && u === s ? e : a
    }
    return t
}
function Rm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function pd(e) {
    if (!Am(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Am(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Am(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Ij(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Fj(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? t1(e, t) : t
}
function zj(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Bj(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Yh = Symbol();
function n1(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Yh ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Mr, $n, Ms, a0, $j = (a0 = class extends Gl {
    constructor() {
        super();
        ee(this, Mr);
        ee(this, $n);
        ee(this, Ms);
        G(this, Ms, t => {
            if (!Ql && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, $n) || this.setEventListener(R(this, Ms))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, $n)) == null || t.call(this),
        G(this, $n, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, Ms, t),
        (n = R(this, $n)) == null || n.call(this),
        G(this, $n, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        R(this, Mr) !== t && (G(this, Mr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof R(this, Mr) == "boolean" ? R(this, Mr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Mr = new WeakMap,
$n = new WeakMap,
Ms = new WeakMap,
a0), r1 = new $j, Ls, Hn, Ds, l0, Hj = (l0 = class extends Gl {
    constructor() {
        super();
        ee(this, Ls, !0);
        ee(this, Hn);
        ee(this, Ds);
        G(this, Ds, t => {
            if (!Ql && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, Hn) || this.setEventListener(R(this, Ds))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Hn)) == null || t.call(this),
        G(this, Hn, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, Ds, t),
        (n = R(this, Hn)) == null || n.call(this),
        G(this, Hn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        R(this, Ls) !== t && (G(this, Ls, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return R(this, Ls)
    }
}
,
Ls = new WeakMap,
Hn = new WeakMap,
Ds = new WeakMap,
l0), cl = new Hj;
function Uj() {
    let e, t;
    const n = new Promise( (s, i) => {
        e = s,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(s) {
        Object.assign(n, s),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = s => {
        r({
            status: "fulfilled",
            value: s
        }),
        e(s)
    }
    ,
    n.reject = s => {
        r({
            status: "rejected",
            reason: s
        }),
        t(s)
    }
    ,
    n
}
function Wj(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function s1(e) {
    return (e ?? "online") === "online" ? cl.isOnline() : !0
}
var i1 = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Hc(e) {
    return e instanceof i1
}
function o1(e) {
    let t = !1, n = 0, r = !1, s;
    const i = Uj()
      , o = v => {
        var b;
        r || (f(new i1(v)),
        (b = e.abort) == null || b.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => r1.isFocused() && (e.networkMode === "always" || cl.isOnline()) && e.canRun()
      , d = () => s1(e.networkMode) && e.canRun()
      , h = v => {
        var b;
        r || (r = !0,
        (b = e.onSuccess) == null || b.call(e, v),
        s == null || s(),
        i.resolve(v))
    }
      , f = v => {
        var b;
        r || (r = !0,
        (b = e.onError) == null || b.call(e, v),
        s == null || s(),
        i.reject(v))
    }
      , p = () => new Promise(v => {
        var b;
        s = y => {
            (r || u()) && v(y)
        }
        ,
        (b = e.onPause) == null || b.call(e)
    }
    ).then( () => {
        var v;
        s = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
      , w = () => {
        if (r)
            return;
        let v;
        const b = n === 0 ? e.initialPromise : void 0;
        try {
            v = b ?? e.fn()
        } catch (y) {
            v = Promise.reject(y)
        }
        Promise.resolve(v).then(h).catch(y => {
            var k;
            if (r)
                return;
            const g = e.retry ?? (Ql ? 0 : 3)
              , x = e.retryDelay ?? Wj
              , S = typeof x == "function" ? x(n, y) : x
              , C = g === !0 || typeof g == "number" && n < g || typeof g == "function" && g(n, y);
            if (t || !C) {
                f(y);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, y),
            Ij(S).then( () => u() ? void 0 : p()).then( () => {
                t ? f(y) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: o,
        continue: () => (s == null || s(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? w() : p().then(w),
        i)
    }
}
var Kj = e => setTimeout(e, 0);
function qj() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , s = Kj;
    const i = a => {
        t ? e.push(a) : s( () => {
            n(a)
        }
        )
    }
      , o = () => {
        const a = e;
        e = [],
        a.length && s( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            i( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            s = a
        }
    }
}
var qe = qj(), Lr, c0, a1 = (c0 = class {
    constructor() {
        ee(this, Lr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Oj(this.gcTime) && G(this, Lr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ql ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        R(this, Lr) && (clearTimeout(R(this, Lr)),
        G(this, Lr, void 0))
    }
}
,
Lr = new WeakMap,
c0), Os, Dr, vt, Or, Be, Co, Vr, It, un, u0, Gj = (u0 = class extends a1 {
    constructor(t) {
        super();
        ee(this, It);
        ee(this, Os);
        ee(this, Dr);
        ee(this, vt);
        ee(this, Or);
        ee(this, Be);
        ee(this, Co);
        ee(this, Vr);
        G(this, Vr, !1),
        G(this, Co, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        G(this, Or, t.client),
        G(this, vt, R(this, Or).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        G(this, Os, Xj(this.options)),
        this.state = t.state ?? R(this, Os),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = R(this, Be)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...R(this, Co),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && R(this, vt).remove(this)
    }
    setData(t, n) {
        const r = Fj(this.state.data, t, this.options);
        return Ie(this, It, un).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ie(this, It, un).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, s;
        const n = (r = R(this, Be)) == null ? void 0 : r.promise;
        return (s = R(this, Be)) == null || s.cancel(t),
        n ? n.then(_t).catch(_t) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(R(this, Os))
    }
    isActive() {
        return this.observers.some(t => _j(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Yh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => fd(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Vj(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Be)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Be)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        R(this, vt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (R(this, Be) && (R(this, Vr) ? R(this, Be).cancel({
            revert: !0
        }) : R(this, Be).cancelRetry()),
        this.scheduleGc()),
        R(this, vt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ie(this, It, un).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, h;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (R(this, Be))
                return R(this, Be).continueRetry(),
                R(this, Be).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(p => p.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , s = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (G(this, Vr, !0),
                r.signal)
            })
        }
          , i = () => {
            const f = n1(this.options, n)
              , w = ( () => {
                const v = {
                    client: R(this, Or),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(v),
                v
            }
            )();
            return G(this, Vr, !1),
            this.options.persister ? this.options.persister(f, w, this) : f(w)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: R(this, Or),
                state: this.state,
                fetchFn: i
            };
            return s(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        G(this, Dr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && Ie(this, It, un).call(this, {
            type: "fetch",
            meta: (h = a.fetchOptions) == null ? void 0 : h.meta
        });
        const l = f => {
            var p, w, v, b;
            Hc(f) && f.silent || Ie(this, It, un).call(this, {
                type: "error",
                error: f
            }),
            Hc(f) || ((w = (p = R(this, vt).config).onError) == null || w.call(p, f, this),
            (b = (v = R(this, vt).config).onSettled) == null || b.call(v, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return G(this, Be, o1({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var p, w, v, b;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (y) {
                    l(y);
                    return
                }
                (w = (p = R(this, vt).config).onSuccess) == null || w.call(p, f, this),
                (b = (v = R(this, vt).config).onSettled) == null || b.call(v, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, p) => {
                Ie(this, It, un).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: p
                })
            }
            ,
            onPause: () => {
                Ie(this, It, un).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ie(this, It, un).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        R(this, Be).start()
    }
}
,
Os = new WeakMap,
Dr = new WeakMap,
vt = new WeakMap,
Or = new WeakMap,
Be = new WeakMap,
Co = new WeakMap,
Vr = new WeakMap,
It = new WeakSet,
un = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Qj(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return G(this, Dr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const s = t.error;
            return Hc(s) && s.revert && R(this, Dr) ? {
                ...R(this, Dr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    qe.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        R(this, vt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
u0);
function Qj(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: s1(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Xj(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Qt, d0, Yj = (d0 = class extends Gl {
    constructor(t={}) {
        super();
        ee(this, Qt);
        this.config = t,
        G(this, Qt, new Map)
    }
    build(t, n, r) {
        const s = n.queryKey
          , i = n.queryHash ?? Xh(s, n);
        let o = this.get(i);
        return o || (o = new Gj({
            client: t,
            queryKey: s,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(s)
        }),
        this.add(o)),
        o
    }
    add(t) {
        R(this, Qt).has(t.queryHash) || (R(this, Qt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = R(this, Qt).get(t.queryHash);
        n && (t.destroy(),
        n === t && R(this, Qt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return R(this, Qt).get(t)
    }
    getAll() {
        return [...R(this, Qt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Pm(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Pm(t, r)) : n
    }
    notify(t) {
        qe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Qt = new WeakMap,
d0), Xt, We, _r, Yt, Vn, h0, Zj = (h0 = class extends a1 {
    constructor(t) {
        super();
        ee(this, Yt);
        ee(this, Xt);
        ee(this, We);
        ee(this, _r);
        this.mutationId = t.mutationId,
        G(this, We, t.mutationCache),
        G(this, Xt, []),
        this.state = t.state || Jj(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        R(this, Xt).includes(t) || (R(this, Xt).push(t),
        this.clearGcTimeout(),
        R(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        G(this, Xt, R(this, Xt).filter(n => n !== t)),
        this.scheduleGc(),
        R(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        R(this, Xt).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, We).remove(this))
    }
    continue() {
        var t;
        return ((t = R(this, _r)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, o, a, l, u, d, h, f, p, w, v, b, y, g, x, S, C, k, T, N;
        const n = () => {
            Ie(this, Yt, Vn).call(this, {
                type: "continue"
            })
        }
        ;
        G(this, _r, o1({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, E) => {
                Ie(this, Yt, Vn).call(this, {
                    type: "failed",
                    failureCount: P,
                    error: E
                })
            }
            ,
            onPause: () => {
                Ie(this, Yt, Vn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, We).canRun(this)
        }));
        const r = this.state.status === "pending"
          , s = !R(this, _r).canStart();
        try {
            if (r)
                n();
            else {
                Ie(this, Yt, Vn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: s
                }),
                await ((o = (i = R(this, We).config).onMutate) == null ? void 0 : o.call(i, t, this));
                const E = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                E !== this.state.context && Ie(this, Yt, Vn).call(this, {
                    type: "pending",
                    context: E,
                    variables: t,
                    isPaused: s
                })
            }
            const P = await R(this, _r).start();
            return await ((d = (u = R(this, We).config).onSuccess) == null ? void 0 : d.call(u, P, t, this.state.context, this)),
            await ((f = (h = this.options).onSuccess) == null ? void 0 : f.call(h, P, t, this.state.context)),
            await ((w = (p = R(this, We).config).onSettled) == null ? void 0 : w.call(p, P, null, this.state.variables, this.state.context, this)),
            await ((b = (v = this.options).onSettled) == null ? void 0 : b.call(v, P, null, t, this.state.context)),
            Ie(this, Yt, Vn).call(this, {
                type: "success",
                data: P
            }),
            P
        } catch (P) {
            try {
                throw await ((g = (y = R(this, We).config).onError) == null ? void 0 : g.call(y, P, t, this.state.context, this)),
                await ((S = (x = this.options).onError) == null ? void 0 : S.call(x, P, t, this.state.context)),
                await ((k = (C = R(this, We).config).onSettled) == null ? void 0 : k.call(C, void 0, P, this.state.variables, this.state.context, this)),
                await ((N = (T = this.options).onSettled) == null ? void 0 : N.call(T, void 0, P, t, this.state.context)),
                P
            } finally {
                Ie(this, Yt, Vn).call(this, {
                    type: "error",
                    error: P
                })
            }
        } finally {
            R(this, We).runNext(this)
        }
    }
}
,
Xt = new WeakMap,
We = new WeakMap,
_r = new WeakMap,
Yt = new WeakSet,
Vn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    qe.batch( () => {
        R(this, Xt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        R(this, We).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
h0);
function Jj() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var fn, Ft, ko, f0, eP = (f0 = class extends Gl {
    constructor(t={}) {
        super();
        ee(this, fn);
        ee(this, Ft);
        ee(this, ko);
        this.config = t,
        G(this, fn, new Set),
        G(this, Ft, new Map),
        G(this, ko, 0)
    }
    build(t, n, r) {
        const s = new Zj({
            mutationCache: this,
            mutationId: ++Bo(this, ko)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(s),
        s
    }
    add(t) {
        R(this, fn).add(t);
        const n = ca(t);
        if (typeof n == "string") {
            const r = R(this, Ft).get(n);
            r ? r.push(t) : R(this, Ft).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (R(this, fn).delete(t)) {
            const n = ca(t);
            if (typeof n == "string") {
                const r = R(this, Ft).get(n);
                if (r)
                    if (r.length > 1) {
                        const s = r.indexOf(t);
                        s !== -1 && r.splice(s, 1)
                    } else
                        r[0] === t && R(this, Ft).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ca(t);
        if (typeof n == "string") {
            const r = R(this, Ft).get(n)
              , s = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !s || s === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ca(t);
        if (typeof n == "string") {
            const s = (r = R(this, Ft).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        qe.batch( () => {
            R(this, fn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            R(this, fn).clear(),
            R(this, Ft).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, fn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Em(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Em(t, n))
    }
    notify(t) {
        qe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return qe.batch( () => Promise.all(t.map(n => n.continue().catch(_t))))
    }
}
,
fn = new WeakMap,
Ft = new WeakMap,
ko = new WeakMap,
f0);
function ca(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Mm(e) {
    return {
        onFetch: (t, n) => {
            var d, h, f, p, w;
            const r = t.options
              , s = (f = (h = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : f.direction
              , i = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , o = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let v = !1;
                const b = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = n1(t.options, t.fetchOptions)
                  , g = async (x, S, C) => {
                    if (v)
                        return Promise.reject();
                    if (S == null && x.pages.length)
                        return Promise.resolve(x);
                    const T = ( () => {
                        const V = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return b(V),
                        V
                    }
                    )()
                      , N = await y(T)
                      , {maxPages: P} = t.options
                      , E = C ? Bj : zj;
                    return {
                        pages: E(x.pages, N, P),
                        pageParams: E(x.pageParams, S, P)
                    }
                }
                ;
                if (s && i.length) {
                    const x = s === "backward"
                      , S = x ? tP : Lm
                      , C = {
                        pages: i,
                        pageParams: o
                    }
                      , k = S(r, C);
                    a = await g(C, k, x)
                } else {
                    const x = e ?? i.length;
                    do {
                        const S = l === 0 ? o[0] ?? r.initialPageParam : Lm(r, a);
                        if (l > 0 && S == null)
                            break;
                        a = await g(a, S),
                        l++
                    } while (l < x)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, b;
                return (b = (v = t.options).persister) == null ? void 0 : b.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Lm(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function tP(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ge, Un, Wn, Vs, _s, Kn, Is, Fs, p0, nP = (p0 = class {
    constructor(e={}) {
        ee(this, ge);
        ee(this, Un);
        ee(this, Wn);
        ee(this, Vs);
        ee(this, _s);
        ee(this, Kn);
        ee(this, Is);
        ee(this, Fs);
        G(this, ge, e.queryCache || new Yj),
        G(this, Un, e.mutationCache || new eP),
        G(this, Wn, e.defaultOptions || {}),
        G(this, Vs, new Map),
        G(this, _s, new Map),
        G(this, Kn, 0)
    }
    mount() {
        Bo(this, Kn)._++,
        R(this, Kn) === 1 && (G(this, Is, r1.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, ge).onFocus())
        }
        )),
        G(this, Fs, cl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, ge).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Bo(this, Kn)._--,
        R(this, Kn) === 0 && ((e = R(this, Is)) == null || e.call(this),
        G(this, Is, void 0),
        (t = R(this, Fs)) == null || t.call(this),
        G(this, Fs, void 0))
    }
    isFetching(e) {
        return R(this, ge).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return R(this, Un).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = R(this, ge).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(fd(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return R(this, ge).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , s = R(this, ge).get(r.queryHash)
          , i = s == null ? void 0 : s.state.data
          , o = Dj(t, i);
        if (o !== void 0)
            return R(this, ge).build(this, r).setData(o, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return qe.batch( () => R(this, ge).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = R(this, ge);
        qe.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = R(this, ge);
        return qe.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = qe.batch( () => R(this, ge).findAll(e).map(s => s.cancel(n)));
        return Promise.all(r).then(_t).catch(_t)
    }
    invalidateQueries(e, t={}) {
        return qe.batch( () => (R(this, ge).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = qe.batch( () => R(this, ge).findAll(e).filter(s => !s.isDisabled() && !s.isStatic()).map(s => {
            let i = s.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(_t)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(_t)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, ge).build(this, t);
        return n.isStaleByTime(fd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(_t).catch(_t)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Mm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(_t).catch(_t)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Mm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return cl.isOnline() ? R(this, Un).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, ge)
    }
    getMutationCache() {
        return R(this, Un)
    }
    getDefaultOptions() {
        return R(this, Wn)
    }
    setDefaultOptions(e) {
        G(this, Wn, e)
    }
    setQueryDefaults(e, t) {
        R(this, Vs).set(fo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...R(this, Vs).values()]
          , n = {};
        return t.forEach(r => {
            po(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        R(this, _s).set(fo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...R(this, _s).values()]
          , n = {};
        return t.forEach(r => {
            po(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...R(this, Wn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Xh(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Yh && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...R(this, Wn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        R(this, ge).clear(),
        R(this, Un).clear()
    }
}
,
ge = new WeakMap,
Un = new WeakMap,
Wn = new WeakMap,
Vs = new WeakMap,
_s = new WeakMap,
Kn = new WeakMap,
Is = new WeakMap,
Fs = new WeakMap,
p0), rP = m.createContext(void 0), sP = ({client: e, children: t}) => (m.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(rP.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function mo() {
    return mo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    mo.apply(this, arguments)
}
var Xn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Xn || (Xn = {}));
const Dm = "popstate";
function iP(e) {
    e === void 0 && (e = {});
    function t(r, s) {
        let {pathname: i, search: o, hash: a} = r.location;
        return md("", {
            pathname: i,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(r, s) {
        return typeof s == "string" ? s : ul(s)
    }
    return aP(t, n, null, e)
}
function xe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function l1(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function oP() {
    return Math.random().toString(36).substr(2, 8)
}
function Om(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function md(e, t, n, r) {
    return n === void 0 && (n = null),
    mo({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? li(t) : t, {
        state: n,
        key: t && t.key || r || oP()
    })
}
function ul(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function li(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function aP(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: s=document.defaultView, v5Compat: i=!1} = r
      , o = s.history
      , a = Xn.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    o.replaceState(mo({}, o.state, {
        idx: u
    }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        a = Xn.Pop;
        let b = d()
          , y = b == null ? null : b - u;
        u = b,
        l && l({
            action: a,
            location: v.location,
            delta: y
        })
    }
    function f(b, y) {
        a = Xn.Push;
        let g = md(v.location, b, y);
        u = d() + 1;
        let x = Om(g, u)
          , S = v.createHref(g);
        try {
            o.pushState(x, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            s.location.assign(S)
        }
        i && l && l({
            action: a,
            location: v.location,
            delta: 1
        })
    }
    function p(b, y) {
        a = Xn.Replace;
        let g = md(v.location, b, y);
        u = d();
        let x = Om(g, u)
          , S = v.createHref(g);
        o.replaceState(x, "", S),
        i && l && l({
            action: a,
            location: v.location,
            delta: 0
        })
    }
    function w(b) {
        let y = s.location.origin !== "null" ? s.location.origin : s.location.href
          , g = typeof b == "string" ? b : ul(b);
        return g = g.replace(/ $/, "%20"),
        xe(y, "No window.location.(origin|href) available to create URL for href: " + g),
        new URL(g,y)
    }
    let v = {
        get action() {
            return a
        },
        get location() {
            return e(s, o)
        },
        listen(b) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(Dm, h),
            l = b,
            () => {
                s.removeEventListener(Dm, h),
                l = null
            }
        },
        createHref(b) {
            return t(s, b)
        },
        createURL: w,
        encodeLocation(b) {
            let y = w(b);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: f,
        replace: p,
        go(b) {
            return o.go(b)
        }
    };
    return v
}
var Vm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Vm || (Vm = {}));
function lP(e, t, n) {
    return n === void 0 && (n = "/"),
    cP(e, t, n, !1)
}
function cP(e, t, n, r) {
    let s = typeof t == "string" ? li(t) : t
      , i = Xs(s.pathname || "/", n);
    if (i == null)
        return null;
    let o = c1(e);
    uP(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = bP(i);
        a = xP(o[l], u, r)
    }
    return a
}
function c1(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let s = (i, o, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        l.relativePath.startsWith("/") && (xe(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = ir([r, l.relativePath])
          , d = n.concat(l);
        i.children && i.children.length > 0 && (xe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        c1(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: yP(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            s(i, o);
        else
            for (let l of u1(i.path))
                s(i, o, l)
    }
    ),
    t
}
function u1(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , s = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [i, ""] : [i];
    let o = u1(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? i : [i, l].join("/"))),
    s && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function uP(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : vP(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const dP = /^:[\w-]+$/
  , hP = 3
  , fP = 2
  , pP = 1
  , mP = 10
  , gP = -2
  , _m = e => e === "*";
function yP(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(_m) && (r += gP),
    t && (r += fP),
    n.filter(s => !_m(s)).reduce( (s, i) => s + (dP.test(i) ? hP : i === "" ? pP : mP), r)
}
function vP(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function xP(e, t, n) {
    let {routesMeta: r} = e
      , s = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , h = dl({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , f = l.route;
        if (!h && u && n && !r[r.length - 1].route.index && (h = dl({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(s, h.params),
        o.push({
            params: s,
            pathname: ir([i, h.pathname]),
            pathnameBase: TP(ir([i, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (i = ir([i, h.pathnameBase]))
    }
    return o
}
function dl(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = wP(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let i = s[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: r.reduce( (u, d, h) => {
            let {paramName: f, isOptional: p} = d;
            if (f === "*") {
                let v = a[h] || "";
                o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const w = a[h];
            return p && !w ? u[f] = void 0 : u[f] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function wP(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    l1(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), r]
}
function bP(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return l1(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Xs(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function SP(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: s=""} = typeof e == "string" ? li(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : CP(n, t) : t,
        search: NP(r),
        hash: jP(s)
    }
}
function CP(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Uc(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function kP(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function d1(e, t) {
    let n = kP(e);
    return t ? n.map( (r, s) => s === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function h1(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string" ? s = li(e) : (s = mo({}, e),
    xe(!s.pathname || !s.pathname.includes("?"), Uc("?", "pathname", "search", s)),
    xe(!s.pathname || !s.pathname.includes("#"), Uc("#", "pathname", "hash", s)),
    xe(!s.search || !s.search.includes("#"), Uc("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "", o = i ? "/" : s.pathname, a;
    if (o == null)
        a = n;
    else {
        let h = t.length - 1;
        if (!r && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                h -= 1;
            s.pathname = f.join("/")
        }
        a = h >= 0 ? t[h] : "/"
    }
    let l = SP(s, a)
      , u = o && o !== "/" && o.endsWith("/")
      , d = (i || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"),
    l
}
const ir = e => e.join("/").replace(/\/\/+/g, "/")
  , TP = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , NP = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , jP = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function PP(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const f1 = ["post", "put", "patch", "delete"];
new Set(f1);
const EP = ["get", ...f1];
new Set(EP);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function go() {
    return go = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    go.apply(this, arguments)
}
const Xl = m.createContext(null)
  , p1 = m.createContext(null)
  , gr = m.createContext(null)
  , Yl = m.createContext(null)
  , yr = m.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , m1 = m.createContext(null);
function RP(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Lo() || xe(!1);
    let {basename: r, navigator: s} = m.useContext(gr)
      , {hash: i, pathname: o, search: a} = Zl(e, {
        relative: n
    })
      , l = o;
    return r !== "/" && (l = o === "/" ? r : ir([r, o])),
    s.createHref({
        pathname: l,
        search: a,
        hash: i
    })
}
function Lo() {
    return m.useContext(Yl) != null
}
function vr() {
    return Lo() || xe(!1),
    m.useContext(Yl).location
}
function g1(e) {
    m.useContext(gr).static || m.useLayoutEffect(e)
}
function y1() {
    let {isDataRoute: e} = m.useContext(yr);
    return e ? UP() : AP()
}
function AP() {
    Lo() || xe(!1);
    let e = m.useContext(Xl)
      , {basename: t, future: n, navigator: r} = m.useContext(gr)
      , {matches: s} = m.useContext(yr)
      , {pathname: i} = vr()
      , o = JSON.stringify(d1(s, n.v7_relativeSplatPath))
      , a = m.useRef(!1);
    return g1( () => {
        a.current = !0
    }
    ),
    m.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let h = h1(u, JSON.parse(o), i, d.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : ir([t, h.pathname])),
        (d.replace ? r.replace : r.push)(h, d.state, d)
    }, [t, r, o, i, e])
}
function MP() {
    let {matches: e} = m.useContext(yr)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Zl(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = m.useContext(gr)
      , {matches: s} = m.useContext(yr)
      , {pathname: i} = vr()
      , o = JSON.stringify(d1(s, r.v7_relativeSplatPath));
    return m.useMemo( () => h1(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}
function LP(e, t) {
    return DP(e, t)
}
function DP(e, t, n, r) {
    Lo() || xe(!1);
    let {navigator: s} = m.useContext(gr)
      , {matches: i} = m.useContext(yr)
      , o = i[i.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = vr(), d;
    if (t) {
        var h;
        let b = typeof t == "string" ? li(t) : t;
        l === "/" || (h = b.pathname) != null && h.startsWith(l) || xe(!1),
        d = b
    } else
        d = u;
    let f = d.pathname || "/"
      , p = f;
    if (l !== "/") {
        let b = l.replace(/^\//, "").split("/");
        p = "/" + f.replace(/^\//, "").split("/").slice(b.length).join("/")
    }
    let w = lP(e, {
        pathname: p
    })
      , v = FP(w && w.map(b => Object.assign({}, b, {
        params: Object.assign({}, a, b.params),
        pathname: ir([l, s.encodeLocation ? s.encodeLocation(b.pathname).pathname : b.pathname]),
        pathnameBase: b.pathnameBase === "/" ? l : ir([l, s.encodeLocation ? s.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
    })), i, n, r);
    return t && v ? m.createElement(Yl.Provider, {
        value: {
            location: go({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Xn.Pop
        }
    }, v) : v
}
function OP() {
    let e = HP()
      , t = PP(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? m.createElement("pre", {
        style: s
    }, n) : null, null)
}
const VP = m.createElement(OP, null);
class _P extends m.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? m.createElement(yr.Provider, {
            value: this.props.routeContext
        }, m.createElement(m1.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function IP(e) {
    let {routeContext: t, match: n, children: r} = e
      , s = m.useContext(Xl);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(yr.Provider, {
        value: t
    }, r)
}
function FP(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let d = o.findIndex(h => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
        d >= 0 || xe(!1),
        o = o.slice(0, Math.min(o.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let h = o[d];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = d),
            h.route.id) {
                let {loaderData: f, errors: p} = n
                  , w = h.route.loader && f[h.route.id] === void 0 && (!p || p[h.route.id] === void 0);
                if (h.route.lazy || w) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (d, h, f) => {
        let p, w = !1, v = null, b = null;
        n && (p = a && h.route.id ? a[h.route.id] : void 0,
        v = h.route.errorElement || VP,
        l && (u < 0 && f === 0 ? (w = !0,
        b = null) : u === f && (w = !0,
        b = h.route.hydrateFallbackElement || null)));
        let y = t.concat(o.slice(0, f + 1))
          , g = () => {
            let x;
            return p ? x = v : w ? x = b : h.route.Component ? x = m.createElement(h.route.Component, null) : h.route.element ? x = h.route.element : x = d,
            m.createElement(IP, {
                match: h,
                routeContext: {
                    outlet: d,
                    matches: y,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (h.route.ErrorBoundary || h.route.errorElement || f === 0) ? m.createElement(_P, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: p,
            children: g(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : g()
    }
    , null)
}
var v1 = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(v1 || {})
  , hl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(hl || {});
function zP(e) {
    let t = m.useContext(Xl);
    return t || xe(!1),
    t
}
function BP(e) {
    let t = m.useContext(p1);
    return t || xe(!1),
    t
}
function $P(e) {
    let t = m.useContext(yr);
    return t || xe(!1),
    t
}
function x1(e) {
    let t = $P()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || xe(!1),
    n.route.id
}
function HP() {
    var e;
    let t = m.useContext(m1)
      , n = BP(hl.UseRouteError)
      , r = x1(hl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function UP() {
    let {router: e} = zP(v1.UseNavigateStable)
      , t = x1(hl.UseNavigateStable)
      , n = m.useRef(!1);
    return g1( () => {
        n.current = !0
    }
    ),
    m.useCallback(function(s, i) {
        i === void 0 && (i = {}),
        n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, go({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function WP(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function at(e) {
    xe(!1)
}
function KP(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: s=Xn.Pop, navigator: i, static: o=!1, future: a} = e;
    Lo() && xe(!1);
    let l = t.replace(/^\/*/, "/")
      , u = m.useMemo( () => ({
        basename: l,
        navigator: i,
        static: o,
        future: go({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, o]);
    typeof r == "string" && (r = li(r));
    let {pathname: d="/", search: h="", hash: f="", state: p=null, key: w="default"} = r
      , v = m.useMemo( () => {
        let b = Xs(d, l);
        return b == null ? null : {
            location: {
                pathname: b,
                search: h,
                hash: f,
                state: p,
                key: w
            },
            navigationType: s
        }
    }
    , [l, d, h, f, p, w, s]);
    return v == null ? null : m.createElement(gr.Provider, {
        value: u
    }, m.createElement(Yl.Provider, {
        children: n,
        value: v
    }))
}
function qP(e) {
    let {children: t, location: n} = e;
    return LP(gd(t), n)
}
new Promise( () => {}
);
function gd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return m.Children.forEach(e, (r, s) => {
        if (!m.isValidElement(r))
            return;
        let i = [...t, s];
        if (r.type === m.Fragment) {
            n.push.apply(n, gd(r.props.children, i));
            return
        }
        r.type !== at && xe(!1),
        !r.props.index || !r.props.children || xe(!1);
        let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = gd(r.props.children, i)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fl() {
    return fl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fl.apply(this, arguments)
}
function w1(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), s, i;
    for (i = 0; i < r.length; i++)
        s = r[i],
        !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n
}
function GP(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function QP(e, t) {
    return e.button === 0 && (!t || t === "_self") && !GP(e)
}
const XP = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , YP = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"]
  , ZP = "6";
try {
    window.__reactRouterVersion = ZP
} catch {}
const JP = m.createContext({
    isTransitioning: !1
})
  , eE = "startTransition"
  , Im = N0[eE];
function tE(e) {
    let {basename: t, children: n, future: r, window: s} = e
      , i = m.useRef();
    i.current == null && (i.current = iP({
        window: s,
        v5Compat: !0
    }));
    let o = i.current
      , [a,l] = m.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = r || {}
      , d = m.useCallback(h => {
        u && Im ? Im( () => l(h)) : l(h)
    }
    , [l, u]);
    return m.useLayoutEffect( () => o.listen(d), [o, d]),
    m.useEffect( () => WP(r), [r]),
    m.createElement(KP, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const nE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , rE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Qe = m.forwardRef(function(t, n) {
    let {onClick: r, relative: s, reloadDocument: i, replace: o, state: a, target: l, to: u, preventScrollReset: d, viewTransition: h} = t, f = w1(t, XP), {basename: p} = m.useContext(gr), w, v = !1;
    if (typeof u == "string" && rE.test(u) && (w = u,
    nE))
        try {
            let x = new URL(window.location.href)
              , S = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u)
              , C = Xs(S.pathname, p);
            S.origin === x.origin && C != null ? u = C + S.search + S.hash : v = !0
        } catch {}
    let b = RP(u, {
        relative: s
    })
      , y = iE(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: s,
        viewTransition: h
    });
    function g(x) {
        r && r(x),
        x.defaultPrevented || y(x)
    }
    return m.createElement("a", fl({}, f, {
        href: w || b,
        onClick: v || i ? r : g,
        ref: n,
        target: l
    }))
})
  , Wc = m.forwardRef(function(t, n) {
    let {"aria-current": r="page", caseSensitive: s=!1, className: i="", end: o=!1, style: a, to: l, viewTransition: u, children: d} = t
      , h = w1(t, YP)
      , f = Zl(l, {
        relative: h.relative
    })
      , p = vr()
      , w = m.useContext(p1)
      , {navigator: v, basename: b} = m.useContext(gr)
      , y = w != null && oE(f) && u === !0
      , g = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname
      , x = p.pathname
      , S = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    s || (x = x.toLowerCase(),
    S = S ? S.toLowerCase() : null,
    g = g.toLowerCase()),
    S && b && (S = Xs(S, b) || S);
    const C = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let k = x === g || !o && x.startsWith(g) && x.charAt(C) === "/", T = S != null && (S === g || !o && S.startsWith(g) && S.charAt(g.length) === "/"), N = {
        isActive: k,
        isPending: T,
        isTransitioning: y
    }, P = k ? r : void 0, E;
    typeof i == "function" ? E = i(N) : E = [i, k ? "active" : null, T ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
    let V = typeof a == "function" ? a(N) : a;
    return m.createElement(Qe, fl({}, h, {
        "aria-current": P,
        className: E,
        ref: n,
        style: V,
        to: l,
        viewTransition: u
    }), typeof d == "function" ? d(N) : d)
});
var yd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(yd || (yd = {}));
var Fm;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Fm || (Fm = {}));
function sE(e) {
    let t = m.useContext(Xl);
    return t || xe(!1),
    t
}
function iE(e, t) {
    let {target: n, replace: r, state: s, preventScrollReset: i, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = y1()
      , u = vr()
      , d = Zl(e, {
        relative: o
    });
    return m.useCallback(h => {
        if (QP(h, n)) {
            h.preventDefault();
            let f = r !== void 0 ? r : ul(u) === ul(d);
            l(e, {
                replace: f,
                state: s,
                preventScrollReset: i,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [u, l, d, r, s, n, e, i, o, a])
}
function oE(e, t) {
    t === void 0 && (t = {});
    let n = m.useContext(JP);
    n == null && xe(!1);
    let {basename: r} = sE(yd.useViewTransitionState)
      , s = Zl(e, {
        relative: t.relative
    });
    if (!n.isTransitioning)
        return !1;
    let i = Xs(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , o = Xs(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return dl(s.pathname, o) != null || dl(s.pathname, i) != null
}
function aE() {
    const {pathname: e} = vr();
    return m.useEffect( () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    , [e]),
    null
}
const lE = () => {
    const e = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return c.jsxs("footer", {
        className: "relative mt-auto w-full",
        children: [c.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-orange-900 clip-path-slant"
        }), c.jsx("div", {
            className: "absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"
        }), c.jsxs("div", {
            className: "relative container mx-auto px-6 py-12 md:py-16 text-white",
            children: [c.jsxs("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12",
                children: [c.jsxs("div", {
                    className: "flex-1 text-center md:text-left space-y-4 max-w-2xl",
                    children: [c.jsx("div", {
                        className: "inline-block p-3 rounded-full bg-white/10 backdrop-blur-md mb-2",
                        children: c.jsx($l, {
                            size: 24,
                            className: "text-yellow-400 fill-yellow-400"
                        })
                    }), c.jsxs("h2", {
                        className: "text-2xl md:text-3xl font-serif font-bold leading-tight",
                        children: ['"Không có gì quý hơn ', c.jsx("br", {}), c.jsx("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500",
                            children: "Độc lập, Tự do"
                        }), '"']
                    }), c.jsx("p", {
                        className: "text-white/60 text-sm font-medium tracking-wide uppercase",
                        children: "— Hồ Chí Minh —"
                    })]
                }), c.jsx("div", {
                    className: "flex-shrink-0",
                    children: c.jsxs("div", {
                        className: "flex flex-col items-center md:items-end gap-4 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors",
                        children: [c.jsxs("div", {
                            className: "text-right",
                            children: [c.jsx("p", {
                                className: "text-xs text-yellow-500/80 font-bold uppercase tracking-widest mb-1",
                                children: "Dự án môn học"
                            }), c.jsxs("p", {
                                className: "text-xl font-bold text-white",
                                children: ["Nhóm 3 ", c.jsx("span", {
                                    className: "mx-2 text-white/40",
                                    children: "|"
                                }), " MLN131"]
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [c.jsx(Qe, {
                                to: "/gallery",
                                className: "text-xs text-white/70 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white",
                                children: "Xem Triển lãm"
                            }), c.jsx("span", {
                                className: "w-1 h-1 rounded-full bg-white/30"
                            }), c.jsx(Qe, {
                                to: "/mini-game",
                                className: "text-xs text-white/70 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white",
                                children: "Chơi Game"
                            })]
                        }), c.jsxs("button", {
                            onClick: e,
                            className: "mt-2 group flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500 text-red-900 text-sm font-bold shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 hover:scale-105 transition-all",
                            children: ["Lên đầu trang", c.jsx(ik, {
                                size: 16,
                                className: "group-hover:-translate-y-0.5 transition-transform"
                            })]
                        })]
                    })
                })]
            }), c.jsxs("div", {
                className: "mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium",
                children: [c.jsx("p", {
                    children: "© 2025 Đại học FPT. Designed for Education Purpose."
                }), c.jsxs("p", {
                    className: "flex items-center gap-2",
                    children: ["Made ", c.jsx(qs, {
                        size: 12,
                        className: "text-yellow-400"
                    }), " by Group 3"]
                })]
            })]
        })]
    })
}
  , cE = () => {
    const [e,t] = m.useState(!1)
      , [n,r] = m.useState(!1)
      , s = vr();
    m.useEffect( () => {
        const o = () => {
            r(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", o),
        () => window.removeEventListener("scroll", o)
    }
    , []),
    m.useEffect( () => {
        t(!1)
    }
    , [s]);
    const i = [{
        to: "/",
        label: "Trang chủ",
        icon: mk
    }, {
        to: "/bai-hoc",
        label: "Bài học",
        icon: lr
    }, {
        to: "/video",
        label: "Video",
        icon: co
    }, {
        to: "/gallery",
        label: "Triển lãm",
        icon: _h
    }];
    return c.jsxs(c.Fragment, {
        children: [c.jsx("nav", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n || e ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20 py-2" : "bg-transparent py-4"}`,
            children: c.jsx("div", {
                className: "container mx-auto px-4",
                children: c.jsxs("div", {
                    className: "flex items-center justify-between h-14",
                    children: [c.jsxs(Wc, {
                        to: "/",
                        className: "flex items-center gap-2 group",
                        children: [c.jsx("div", {
                            className: "relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 shadow-lg group-hover:shadow-red-500/30 transition-all duration-300",
                            children: c.jsx(Ih, {
                                className: "text-white w-6 h-6 fill-yellow-400 stroke-yellow-400"
                            })
                        }), c.jsxs("div", {
                            className: "flex flex-col",
                            children: [c.jsx("span", {
                                className: "font-bold text-lg leading-tight text-gray-900 group-hover:text-red-600 transition-colors",
                                children: "MLN131"
                            }), c.jsx("span", {
                                className: "text-[10px] font-semibold text-gray-500 uppercase tracking-widest",
                                children: "Con người XHCN"
                            })]
                        })]
                    }), c.jsx("div", {
                        className: "hidden xl:flex items-center gap-1 bg-white/40 backdrop-blur-md p-1.5 rounded-full border border-white/40 shadow-sm",
                        children: i.map(o => {
                            const a = o.icon;
                            return c.jsx(Wc, {
                                to: o.to,
                                end: o.to === "/",
                                className: ({isActive: l}) => `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${l ? "bg-white text-red-600 shadow-md shadow-orange-500/10 scale-105" : "text-gray-600 hover:text-gray-900 hover:bg-white/50"}`,
                                children: ({isActive: l}) => c.jsxs(c.Fragment, {
                                    children: [c.jsx(a, {
                                        className: `w-4 h-4 ${l ? "fill-current" : ""}`
                                    }), c.jsx("span", {
                                        children: o.label
                                    })]
                                })
                            }, o.to)
                        }
                        )
                    }), c.jsx("button", {
                        onClick: () => t(!e),
                        className: "xl:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none",
                        children: e ? c.jsx(Fh, {
                            size: 24
                        }) : c.jsx(xk, {
                            size: 24
                        })
                    })]
                })
            })
        }), c.jsxs("div", {
            className: `fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 xl:hidden flex flex-col pt-24 px-6 ${e ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`,
            children: [c.jsx("div", {
                className: "grid grid-cols-2 gap-4",
                children: i.map( (o, a) => {
                    const l = o.icon;
                    return c.jsxs(Wc, {
                        to: o.to,
                        className: ({isActive: u}) => `flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-300 ${u ? "bg-red-50 border-red-100 text-red-600 shadow-lg shadow-red-100" : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:border-gray-200 hover:shadow-md"}`,
                        style: {
                            transitionDelay: `${a * 50}ms`
                        },
                        children: [c.jsx(l, {
                            size: 28
                        }), c.jsx("span", {
                            className: "font-semibold",
                            children: o.label
                        })]
                    }, o.to)
                }
                )
            }), c.jsx("div", {
                className: "mt-auto mb-8 text-center",
                children: c.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "© 2024 Tư tưởng Hồ Chí Minh"
                })
            })]
        })]
    })
}
  , uE = ix("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-card border-2 border-border text-foreground hover:border-primary hover:bg-muted/50 hover:scale-105 transition-all shadow-soft",
            "hero-accent": "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-elevated hover:scale-105 transition-all font-semibold",
            "hero-secondary": "bg-secondary border-2 border-secondary text-secondary-foreground hover:border-primary hover:bg-secondary/80 hover:scale-105 transition-all"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Gr = m.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...s}, i) => {
    const o = r ? uC : "button";
    return c.jsx(o, {
        className: Ve(uE({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...s
    })
}
);
Gr.displayName = "Button";
const zm = "https://sqhx-hanoi.mediacdn.vn/91579363132710912/2025/8/23/photo-1755922991407-175592299220393783138.jpeg"
  , dE = () => {
    const e = y1()
      , t = [{
        label: "Khái niệm",
        icon: lr,
        path: "/khai-niem",
        variant: "hero"
    }, {
        label: "Điều kiện ra đời",
        icon: co,
        path: "/dieu-kien",
        variant: "hero"
    }, {
        label: "Những đặc trưng cơ bản",
        icon: _h,
        path: "/dac-trung",
        variant: "hero"
    }];
    return c.jsxs("div", {
        className: "min-h-screen bg-[#fdfbf6] font-sans",
        children: [c.jsxs("section", {
            className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32",
            children: [c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#FFF8E6] via-[#FFEBC7] to-[#FFD79C]"
            }), c.jsx("div", {
                className: "absolute inset-0 opacity-[0.045] mix-blend-overlay",
                style: {
                    backgroundImage: `url(${zm})`,
                    backgroundSize: "280px",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                    filter: "grayscale(100%) contrast(140%)"
                }
            }), c.jsx("div", {
                className: "relative z-10 container mx-auto px-5 pt-16",
                children: c.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [c.jsxs("div", {
                        className: "space-y-8 animate-fade-in-up",
                        children: [c.jsxs("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm shadow-sm border border-primary/20",
                            children: [c.jsx(qs, {
                                className: "w-4 h-4 text-primary"
                            }), c.jsx("span", {
                                className: "text-primary font-bold text-sm tracking-wide uppercase",
                                children: "MLN131, Nhóm 1"
                            })]
                        }), c.jsxs("h1", {
                            className: "text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight drop-shadow-sm",
                            children: ["Xây dựng", c.jsx("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600 block mt-2 italic pl-2",
                                children: "Con Người XHCN"
                            })]
                        }), c.jsx("p", {
                            className: "text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-medium",
                            children: "Chủ nghĩa xã hội (CNXH) là giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa — phong trào giải phóng nhân dân lao động, trào lưu tư tưởng và khoa học về sứ mệnh lịch sử của giai cấp công nhân."
                        }), c.jsx("div", {
                            className: "grid sm:grid-cols-2 gap-4 pt-6",
                            children: t.map(n => {
                                const r = n.icon;
                                return c.jsxs(Gr, {
                                    onClick: () => e(n.path),
                                    variant: n.variant,
                                    size: "lg",
                                    className: "w-full justify-start gap-3 text-lg py-6 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md bg-white/50 backdrop-blur-md border border-white/40",
                                    children: [c.jsx(r, {
                                        className: "w-6 h-6 flex-shrink-0"
                                    }), n.label]
                                }, n.path)
                            }
                            )
                        })]
                    }), c.jsx("div", {
                        className: "relative hidden lg:flex justify-center animate-float-slow",
                        children: c.jsxs("div", {
                            className: "relative w-full max-w-md",
                            children: [c.jsx("div", {
                                className: "absolute inset-0 rounded-[40px] bg-gradient-to-tr from-primary/30 to-orange-400/30 blur-3xl transform rotate-6 scale-105"
                            }), c.jsx("img", {
                                src: zm,
                                alt: "Chủ tịch Hồ Chí Minh",
                                className: "relative w-full rounded-[40px] border-4 border-white/30 shadow-2xl z-10"
                            })]
                        })
                    })]
                })
            }), c.jsx("div", {
                className: "absolute bottom-0 left-0 right-0 translate-y-1",
                children: c.jsx("svg", {
                    viewBox: "0 0 1440 120",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-full h-auto text-[#fffbf0]",
                    preserveAspectRatio: "none",
                    children: c.jsx("path", {
                        d: "M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z",
                        fill: "currentColor"
                    })
                })
            })]
        }), c.jsx("section", {
            className: "py-24 bg-[#fffbf0] relative z-10",
            children: c.jsxs("div", {
                className: "container mx-auto px-5",
                children: [c.jsxs("div", {
                    className: "text-center max-w-3xl mx-auto mb-16 animate-fade-in-up",
                    children: [c.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                        children: "Tại sao cần nghiên cứu chủ đề này?"
                    }), c.jsx("p", {
                        className: "text-lg text-gray-600",
                        children: "Tư tưởng Hồ Chí Minh về con người không chỉ là lý luận mà còn là kim chỉ nam cho việc rèn luyện và phát triển bản thân trong thời đại mới."
                    })]
                }), c.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 lg:gap-12 animate-fade-in-up delay-100",
                    children: [c.jsxs("div", {
                        className: "bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-orange-100/50 hover:-translate-y-2 transition-all duration-300",
                        children: [c.jsx("div", {
                            className: "w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6 shadow-sm",
                            children: c.jsx(Ak, {
                                size: 28
                            })
                        }), c.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-3",
                            children: "Định hướng Mục tiêu"
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Hiểu rõ mục tiêu của việc xây dựng con người XHCN: phát triển toàn diện về Đức - Trí - Thể - Mỹ."
                        })]
                    }), c.jsxs("div", {
                        className: "bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-orange-100/50 hover:-translate-y-2 transition-all duration-300",
                        children: [c.jsx("div", {
                            className: "w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-sm",
                            children: c.jsx(px, {
                                size: 28
                            })
                        }), c.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-3",
                            children: "Rèn luyện Bản lĩnh"
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Trang bị bản lĩnh chính trị vững vàng, kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội."
                        })]
                    }), c.jsxs("div", {
                        className: "bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-orange-100/50 hover:-translate-y-2 transition-all duration-300",
                        children: [c.jsx("div", {
                            className: "w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6 shadow-sm",
                            children: c.jsx(fk, {
                                size: 28
                            })
                        }), c.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-3",
                            children: "Hoàn thiện Nhân cách"
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: 'Tu dưỡng đạo đức cách mạng "Cần, kiệm, liêm, chính", sống có trách nhiệm với cộng đồng và xã hội.'
                        })]
                    })]
                })]
            })
        }), c.jsx("section", {
            className: "py-24 relative z-10",
            children: c.jsxs("div", {
                className: "container mx-auto px-5",
                children: [c.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-end mb-12 gap-4 animate-fade-in-up",
                    children: [c.jsxs("div", {
                        children: [c.jsx("span", {
                            className: "text-primary font-bold uppercase tracking-wider text-sm mb-2 block",
                            children: "Khám phá nhanh"
                        }), c.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900",
                            children: "Nội dung nổi bật"
                        })]
                    }), c.jsxs(Qe, {
                        to: "/bai-hoc",
                        className: "group flex items-center gap-2 text-primary font-semibold hover:underline",
                        children: ["Xem tất cả nội dung", c.jsx(Qn, {
                            className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-100",
                    children: [c.jsxs(Qe, {
                        to: "/bai-hoc",
                        className: "group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between min-h-[280px]",
                        children: [c.jsx("div", {
                            className: "absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"
                        }), c.jsxs("div", {
                            className: "relative z-10",
                            children: [c.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6",
                                children: c.jsx(lr, {
                                    size: 24
                                })
                            }), c.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors",
                                children: "Hệ thống Bài học"
                            }), c.jsx("p", {
                                className: "text-gray-600",
                                children: "3 bài học cốt lõi đi từ nền tảng lý luận đến vai trò thực tiễn và yêu cầu phẩm chất."
                            })]
                        }), c.jsx("div", {
                            className: "relative z-10 mt-6 flex justify-end",
                            children: c.jsx("span", {
                                className: "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all",
                                children: c.jsx(Qn, {
                                    size: 20
                                })
                            })
                        })]
                    }), c.jsxs(Qe, {
                        to: "/video",
                        className: "group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between min-h-[280px]",
                        children: [c.jsx("div", {
                            className: "absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"
                        }), c.jsxs("div", {
                            className: "relative z-10",
                            children: [c.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6",
                                children: c.jsx(co, {
                                    size: 24
                                })
                            }), c.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors",
                                children: "Kho Video Tư liệu"
                            }), c.jsx("p", {
                                className: "text-gray-600",
                                children: "Tuyển tập phim tài liệu và các bài nói chuyện chuyên đề của chuyên gia."
                            })]
                        }), c.jsx("div", {
                            className: "relative z-10 mt-6 flex justify-end",
                            children: c.jsx("span", {
                                className: "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all",
                                children: c.jsx(Qn, {
                                    size: 20
                                })
                            })
                        })]
                    }), c.jsxs(Qe, {
                        to: "/mini-game",
                        className: "group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between min-h-[280px]",
                        children: [c.jsx("div", {
                            className: "absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"
                        }), c.jsxs("div", {
                            className: "relative z-10",
                            children: [c.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6",
                                children: c.jsx(lo, {
                                    size: 24
                                })
                            }), c.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors",
                                children: "Học mà Chơi"
                            }), c.jsx("p", {
                                className: "text-gray-600",
                                children: "Kiểm tra kiến thức nhẹ nhàng qua các mini-game tương tác thú vị."
                            })]
                        }), c.jsx("div", {
                            className: "relative z-10 mt-6 flex justify-end",
                            children: c.jsx("span", {
                                className: "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-all",
                                children: c.jsx(Qn, {
                                    size: 20
                                })
                            })
                        })]
                    })]
                })]
            })
        })]
    })
}
  , Zh = m.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: Ve("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
Zh.displayName = "Card";
const b1 = m.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: Ve("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
b1.displayName = "CardHeader";
const S1 = m.forwardRef( ({className: e, ...t}, n) => c.jsx("h3", {
    ref: n,
    className: Ve("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
S1.displayName = "CardTitle";
const hE = m.forwardRef( ({className: e, ...t}, n) => c.jsx("p", {
    ref: n,
    className: Ve("text-sm text-muted-foreground", e),
    ...t
}));
hE.displayName = "CardDescription";
const Jh = m.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: Ve("p-6 pt-0", e),
    ...t
}));
Jh.displayName = "CardContent";
const fE = m.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: Ve("flex items-center p-6 pt-0", e),
    ...t
}));
fE.displayName = "CardFooter";
const Kc = [{
    id: 1,
    title: "Tư tưởng Hồ Chí Minh về con người xã hội chủ nghĩa",
    youtubeId: "lOas6NdUywU",
    duration: "15:20",
    author: "Báo Lao Động",
    desc: "Phân tích sâu sắc về nhân tố con người trong công cuộc xây dựng CNXH."
}, {
    id: 2,
    title: "Lý tưởng sống và vai trò thanh niên thời đại mới",
    youtubeId: "qG5hCyGhAno",
    duration: "12:45",
    author: "Truyền hình Thông tấn",
    desc: "Đối thoại cởi mở về trách nhiệm và khát vọng của thế hệ trẻ."
}, {
    id: 3,
    title: "Đạo đức cách mạng theo tư tưởng Hồ Chí Minh",
    youtubeId: "W7dM1aDRiIU",
    duration: "28:10",
    author: "Đảng với Dân",
    desc: "Những chuẩn mực đạo đức cần có của người cán bộ, đảng viên."
}, {
    id: 4,
    title: "Vai trò của con người trong xây dựng CNXH",
    youtubeId: "YvRBGm1h4HY",
    duration: "10:05",
    author: "Báo Nhân Dân",
    desc: "Con người vừa là mục tiêu, vừa là động lực của sự phát triển."
}, {
    id: 5,
    title: "Học tập và rèn luyện theo lời Bác Hồ",
    youtubeId: "-wMDf2Myojk",
    duration: "08:30",
    author: "Học tập & Làm theo",
    desc: "Các chuyên đề thực tiễn áp dụng vào đời sống hàng ngày."
}]
  , pE = () => {
    const [e,t] = m.useState(Kc[0]);
    return c.jsx("div", {
        className: "min-h-screen bg-slate-50/50 dark:bg-slate-950",
        children: c.jsx("main", {
            className: "pt-24 pb-16",
            children: c.jsxs("div", {
                className: "container mx-auto px-4 max-w-7xl",
                children: [c.jsxs("div", {
                    className: "mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6",
                    children: [c.jsxs("div", {
                        children: [c.jsxs("div", {
                            className: "inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm font-medium mb-3",
                            children: [c.jsx(lr, {
                                className: "w-4 h-4"
                            }), c.jsx("span", {
                                children: "Thư viện Chính trị"
                            })]
                        }), c.jsx("h1", {
                            className: "text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight",
                            children: "Tư tưởng Hồ Chí Minh"
                        }), c.jsx("p", {
                            className: "text-slate-500 dark:text-slate-400 mt-2 max-w-2xl",
                            children: "Tuyển tập video bài giảng chuyên sâu, giúp người học nắm vững nền tảng lý luận và thực tiễn."
                        })]
                    }), c.jsx("div", {
                        className: "flex gap-2",
                        children: c.jsxs("button", {
                            className: "flex items-center gap-2 px-4 py-2 bg-white border shadow-sm rounded-lg text-sm font-medium hover:bg-slate-50 transition",
                            children: [c.jsx(Nk, {
                                className: "w-4 h-4"
                            }), " Chia sẻ"]
                        })
                    })]
                }), c.jsxs("div", {
                    className: "grid lg:grid-cols-3 gap-8",
                    children: [c.jsxs("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [c.jsx("div", {
                            className: "relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10",
                            children: c.jsx("iframe", {
                                src: `https://www.youtube.com/embed/${e.youtubeId}?autoplay=1&rel=0`,
                                title: e.title,
                                className: "absolute inset-0 w-full h-full",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: !0
                            })
                        }), c.jsxs("div", {
                            className: "bg-white dark:bg-slate-900 rounded-xl p-6 border shadow-sm",
                            children: [c.jsx("h2", {
                                className: "text-2xl font-bold text-slate-900 dark:text-white mb-2",
                                children: e.title
                            }), c.jsxs("div", {
                                className: "flex items-center gap-4 text-sm text-slate-500 mb-4",
                                children: [c.jsxs("span", {
                                    className: "flex items-center gap-1",
                                    children: [c.jsx(co, {
                                        className: "w-4 h-4"
                                    }), " ", e.author]
                                }), c.jsx("span", {
                                    className: "w-1 h-1 bg-slate-300 rounded-full"
                                }), c.jsxs("span", {
                                    className: "flex items-center gap-1",
                                    children: [c.jsx(uk, {
                                        className: "w-4 h-4"
                                    }), " ", e.duration]
                                })]
                            }), c.jsx("p", {
                                className: "text-slate-600 dark:text-slate-300 leading-relaxed",
                                children: e.desc
                            })]
                        })]
                    }), c.jsx("div", {
                        className: "lg:col-span-1",
                        children: c.jsxs(Zh, {
                            className: "h-full border-none shadow-none bg-transparent lg:bg-white lg:dark:bg-slate-900 lg:border lg:shadow-sm",
                            children: [c.jsx(b1, {
                                className: "pb-3 px-0 lg:px-6",
                                children: c.jsxs(S1, {
                                    className: "text-lg flex items-center justify-between",
                                    children: [c.jsx("span", {
                                        children: "Danh sách bài học"
                                    }), c.jsxs("span", {
                                        className: "text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-full",
                                        children: [Kc.length, " video"]
                                    })]
                                })
                            }), c.jsx(Jh, {
                                className: "px-0 lg:px-4 pb-0",
                                children: c.jsx("div", {
                                    className: "space-y-3 lg:max-h-[600px] lg:overflow-y-auto pr-1 custom-scrollbar",
                                    children: Kc.map(n => {
                                        const r = e.id === n.id;
                                        return c.jsxs("div", {
                                            onClick: () => t(n),
                                            className: `
                            group flex gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border
                            ${r ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900/50" : "bg-white border-transparent hover:border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800"}
                          `,
                                            children: [c.jsxs("div", {
                                                className: "relative w-32 shrink-0 aspect-video rounded-lg overflow-hidden bg-slate-200",
                                                children: [c.jsx("img", {
                                                    src: `https://img.youtube.com/vi/${n.youtubeId}/mqdefault.jpg`,
                                                    alt: n.title,
                                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                }), r && c.jsx("div", {
                                                    className: "absolute inset-0 bg-black/40 flex items-center justify-center",
                                                    children: c.jsx("div", {
                                                        className: "loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    })
                                                }), c.jsx("span", {
                                                    className: "absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded",
                                                    children: n.duration
                                                })]
                                            }), c.jsxs("div", {
                                                className: "flex flex-col justify-center flex-1 min-w-0",
                                                children: [c.jsx("h3", {
                                                    className: `font-semibold text-sm line-clamp-2 mb-1 ${r ? "text-red-700 dark:text-red-400" : "text-slate-800 dark:text-slate-200"}`,
                                                    children: n.title
                                                }), c.jsx("p", {
                                                    className: "text-xs text-slate-500 truncate",
                                                    children: n.author
                                                }), r && c.jsxs("div", {
                                                    className: "mt-2 flex items-center gap-1 text-xs text-red-600 font-medium",
                                                    children: [c.jsx(ck, {
                                                        className: "w-3 h-3"
                                                    }), " Đang phát"]
                                                })]
                                            })]
                                        }, n.id)
                                    }
                                    )
                                })
                            })]
                        })
                    })]
                })]
            })
        })
    })
}
  , is = [{
    id: 1,
    question: "Theo tư tưởng Hồ Chí Minh, phẩm chất đạo đức nào là nền tảng, là gốc của người cách mạng?",
    options: ["Yêu thương con người", "Trung với nước, hiếu với dân", "Cần, Kiệm, Liêm, Chính", "Tinh thần quốc tế trong sáng"],
    correctAnswer: 1,
    explanation: "'Trung với nước, hiếu với dân' là phẩm chất quan trọng nhất, bao trùm nhất, chi phối các phẩm chất khác."
}, {
    id: 2,
    question: "Bác Hồ ví 'Người có đức mà không có tài' giống như điều gì?",
    options: ["Người làm việc gì cũng khó", "Người nguy hiểm", "Người vô dụng", "Ông bụt ngồi trong chùa"],
    correctAnswer: 3,
    explanation: "Bác ví: 'Có đức mà không có tài như ông bụt ngồi trong chùa, không hại ai nhưng cũng không lợi gì cho ai'."
}, {
    id: 3,
    question: "Trong mối quan hệ giữa 'Hồng' (Đạo đức) và 'Chuyên' (Tài năng), Bác Hồ nhấn mạnh điều gì?",
    options: ["Chuyên quan trọng hơn Hồng", "Hồng quan trọng hơn Chuyên", "Phải vừa hồng vừa chuyên", "Hồng là gốc, Chuyên là ngọn"],
    correctAnswer: 2,
    explanation: "Thanh niên phải phấn đấu rèn luyện để 'vừa hồng, vừa chuyên', trong đó đạo đức cách mạng là gốc, tài năng là quan trọng."
}, {
    id: 4,
    question: "Theo Bác, kẻ thù hung ác nhất của đạo đức cách mạng, là 'giặc nội xâm' nguy hiểm nhất là gì?",
    options: ["Chủ nghĩa thực dân", "Chủ nghĩa cá nhân", "Thói lười biếng", "Bệnh quan liêu"],
    correctAnswer: 1,
    explanation: "Chủ nghĩa cá nhân là kẻ thù hung ác nhất vì nó đẻ ra nhiều thói hư tật xấu, kìm hãm sự phát triển."
}, {
    id: 5,
    question: "Hoàn thành câu nói nổi tiếng: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải...'",
    options: ["Trồng người", "Xây dựng đất nước", "Phát triển kinh tế", "Giáo dục"],
    correctAnswer: 0,
    explanation: "Câu nói khẳng định vai trò chiến lược của con người: Muốn xây dựng CNXH, trước hết cần có những con người XHCN."
}, {
    id: 6,
    question: "Đức tính 'Liêm' trong 'Cần, Kiệm, Liêm, Chính' có nghĩa là gì?",
    options: ["Siêng năng, chăm chỉ", "Tiết kiệm, không hoang phí", "Trong sạch, không tham lam", "Thẳng thắn, đứng đắn"],
    correctAnswer: 2,
    explanation: "Liêm là trong sạch, không tham lam địa vị, tiền tài, sung sướng. Không tơ hào của công."
}, {
    id: 7,
    question: "Theo Bác, muốn 'trồng người' (xây dựng con người mới) thì biện pháp nào là quan trọng nhất?",
    options: ["Giáo dục và đào tạo", "Kỷ luật nghiêm minh", "Khen thưởng vật chất", "Tuyên truyền miệng"],
    correctAnswer: 0,
    explanation: "Giáo dục là biện pháp quan trọng nhất. Bác nói: 'Hiền dữ phải đâu là tính sẵn, phần nhiều do giáo dục mà nên'."
}, {
    id: 8,
    question: "Biểu hiện cụ thể của 'Cần' (Lao động cần cù) theo tư tưởng Hồ Chí Minh là gì?",
    options: ["Làm việc thật nhiều giờ trong ngày", "Làm việc siêng năng, có kế hoạch, sáng tạo, năng suất cao", "Làm cho xong việc được giao", "Chỉ làm những việc mình thích"],
    correctAnswer: 1,
    explanation: "Cần không chỉ là siêng năng tay chân mà còn phải có kế hoạch, sáng tạo để đạt năng suất cao nhất."
}, {
    id: 9,
    question: "Phong trào thi đua nào của thanh niên thời kháng chiến chống Mỹ thể hiện rõ nhất tinh thần 'Đâu cần thanh niên có'?",
    options: ["Ba sẵn sàng", "Đồng khởi", "Mùa hè xanh", "Thanh niên lập nghiệp"],
    correctAnswer: 0,
    explanation: "Phong trào 'Ba sẵn sàng' (Sẵn sàng chiến đấu, Sẵn sàng gia nhập lực lượng, Sẵn sàng đi bất cứ nơi đâu) là biểu tượng rực rỡ nhất."
}, {
    id: 10,
    question: "Câu nói 'Không có gì quý hơn độc lập, tự do' được Bác Hồ kêu gọi vào thời điểm nào?",
    options: ["Cách mạng tháng 8 (1945)", "Chiến thắng Điện Biên Phủ (1954)", "Kháng chiến chống Mỹ cứu nước (1966)", "Di chúc (1969)"],
    correctAnswer: 2,
    explanation: "Câu nói được trích trong Lời kêu gọi đồng bào và chiến sĩ cả nước ngày 17/7/1966."
}];
var ef = "Progress"
  , tf = 100
  , [mE,KA] = si(ef)
  , [gE,yE] = mE(ef)
  , C1 = m.forwardRef( (e, t) => {
    const {__scopeProgress: n, value: r=null, max: s, getValueLabel: i=vE, ...o} = e;
    (s || s === 0) && !Bm(s) && console.error(xE(`${s}`, "Progress"));
    const a = Bm(s) ? s : tf;
    r !== null && !$m(r, a) && console.error(wE(`${r}`, "Progress"));
    const l = $m(r, a) ? r : null
      , u = pl(l) ? i(l, a) : void 0;
    return c.jsx(gE, {
        scope: n,
        value: l,
        max: a,
        children: c.jsx(be.div, {
            "aria-valuemax": a,
            "aria-valuemin": 0,
            "aria-valuenow": pl(l) ? l : void 0,
            "aria-valuetext": u,
            role: "progressbar",
            "data-state": N1(l, a),
            "data-value": l ?? void 0,
            "data-max": a,
            ...o,
            ref: t
        })
    })
}
);
C1.displayName = ef;
var k1 = "ProgressIndicator"
  , T1 = m.forwardRef( (e, t) => {
    const {__scopeProgress: n, ...r} = e
      , s = yE(k1, n);
    return c.jsx(be.div, {
        "data-state": N1(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...r,
        ref: t
    })
}
);
T1.displayName = k1;
function vE(e, t) {
    return `${Math.round(e / t * 100)}%`
}
function N1(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}
function pl(e) {
    return typeof e == "number"
}
function Bm(e) {
    return pl(e) && !isNaN(e) && e > 0
}
function $m(e, t) {
    return pl(e) && !isNaN(e) && e <= t && e >= 0
}
function xE(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${tf}\`.`
}
function wE(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${tf} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var j1 = C1
  , bE = T1;
const P1 = m.forwardRef( ({className: e, value: t, ...n}, r) => c.jsx(j1, {
    ref: r,
    className: Ve("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: c.jsx(bE, {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
P1.displayName = j1.displayName;
const ua = 15
  , SE = () => {
    const [e,t] = m.useState(0)
      , [n,r] = m.useState(0)
      , [s,i] = m.useState(!1)
      , [o,a] = m.useState(null)
      , [l,u] = m.useState(!1)
      , [d,h] = m.useState(null)
      , [f,p] = m.useState(ua)
      , [w,v] = m.useState(0)
      , [b,y] = m.useState(0);
    m.useEffect( () => {
        if (s || l)
            return;
        const N = setInterval( () => {
            p(P => P <= 1 ? (g(),
            0) : P - 1)
        }
        , 1e3);
        return () => clearInterval(N)
    }
    , [e, s, l]);
    const g = () => {
        u(!0),
        h("wrong"),
        v(0),
        setTimeout(S, 2e3)
    }
      , x = N => {
        if (l)
            return;
        a(N),
        u(!0),
        N === is[e].correctAnswer ? (h("correct"),
        r(E => E + 10 + w * 2),
        v(E => {
            const V = E + 1;
            return V > b && y(V),
            V
        }
        )) : (h("wrong"),
        v(0)),
        setTimeout(S, 1500)
    }
      , S = () => {
        e < is.length - 1 ? (t(N => N + 1),
        p(ua),
        a(null),
        h(null),
        u(!1)) : i(!0)
    }
      , C = () => {
        t(0),
        r(0),
        v(0),
        y(0),
        p(ua),
        i(!1),
        u(!1),
        a(null),
        h(null)
    }
    ;
    if (s)
        return c.jsxs("div", {
            className: "min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center justify-center p-4",
            children: [c.jsx("div", {
                className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"
            }), c.jsxs(Zh, {
                className: "w-full max-w-lg bg-slate-800 border-slate-700 shadow-2xl animate-scale-in text-center overflow-hidden relative",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-transparent pointer-events-none"
                }), c.jsxs(Jh, {
                    className: "p-10 space-y-8 relative z-10",
                    children: [c.jsx("div", {
                        className: "w-24 h-24 bg-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.5)] animate-bounce-slow",
                        children: c.jsx(Mk, {
                            className: "w-12 h-12 text-white"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("h2", {
                            className: "text-3xl font-black text-white uppercase tracking-wider mb-2",
                            children: "Tổng Kết"
                        }), c.jsx("div", {
                            className: "text-6xl font-black text-yellow-400 mb-2",
                            children: n
                        }), c.jsx("p", {
                            className: "text-slate-400 font-medium",
                            children: "Điểm số đạt được"
                        })]
                    }), c.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [c.jsxs("div", {
                            className: "bg-slate-700/50 p-4 rounded-xl border border-slate-600",
                            children: [c.jsx("div", {
                                className: "text-sm text-slate-400",
                                children: "Chuỗi đúng nhất"
                            }), c.jsxs("div", {
                                className: "text-2xl font-bold text-orange-400 flex items-center justify-center gap-1",
                                children: [c.jsx(cm, {
                                    className: "w-5 h-5"
                                }), " ", b]
                            })]
                        }), c.jsxs("div", {
                            className: "bg-slate-700/50 p-4 rounded-xl border border-slate-600",
                            children: [c.jsx("div", {
                                className: "text-sm text-slate-400",
                                children: "Độ chính xác"
                            }), c.jsxs("div", {
                                className: "text-2xl font-bold text-green-400",
                                children: [Math.round(n / (is.length * 10) * 100), "%"]
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex gap-3 justify-center pt-4",
                        children: [c.jsxs(Gr, {
                            onClick: C,
                            size: "lg",
                            className: "bg-slate-600 hover:bg-slate-500",
                            children: [c.jsx(kk, {
                                className: "mr-2 w-4 h-4"
                            }), " Chơi lại"]
                        }), c.jsx(Gr, {
                            onClick: () => window.location.href = "/",
                            size: "lg",
                            className: "bg-red-600 hover:bg-red-700",
                            children: "Về trang chủ"
                        })]
                    })]
                })]
            })]
        });
    const k = is[e]
      , T = e / is.length * 100;
    return c.jsx("div", {
        className: "min-h-screen bg-slate-900 font-sans text-white overflow-hidden flex flex-col",
        children: c.jsxs("main", {
            className: "flex-1 container mx-auto px-4 pt-24 pb-8 max-w-4xl flex flex-col justify-center min-h-[600px]",
            children: [c.jsxs("div", {
                className: "flex justify-between items-end mb-6",
                children: [c.jsxs("div", {
                    className: "space-y-1",
                    children: [c.jsx("div", {
                        className: "text-xs font-bold text-slate-400 uppercase tracking-widest",
                        children: "Câu hỏi"
                    }), c.jsxs("div", {
                        className: "text-2xl font-black text-white",
                        children: [c.jsx("span", {
                            className: "text-red-500",
                            children: e + 1
                        }), c.jsxs("span", {
                            className: "text-slate-600 text-lg",
                            children: ["/", is.length]
                        })]
                    })]
                }), w > 1 && c.jsxs("div", {
                    className: "animate-bounce flex items-center gap-1 text-orange-500 font-black text-xl",
                    children: [c.jsx(cm, {
                        className: "w-6 h-6 fill-orange-500"
                    }), "COMBO x", w]
                }), c.jsxs("div", {
                    className: "space-y-1 text-right",
                    children: [c.jsx("div", {
                        className: "text-xs font-bold text-slate-400 uppercase tracking-widest",
                        children: "Điểm số"
                    }), c.jsx("div", {
                        className: "text-2xl font-black text-yellow-400",
                        children: n
                    })]
                })]
            }), c.jsx(P1, {
                value: T,
                className: "h-2 bg-slate-800 mb-10"
            }), c.jsx("div", {
                className: "relative w-full h-1 bg-slate-800 mb-8 rounded-full overflow-hidden",
                children: c.jsx("div", {
                    className: `absolute top-0 left-0 h-full transition-all duration-1000 ease-linear ${f < 5 ? "bg-red-500" : "bg-blue-500"}`,
                    style: {
                        width: `${f / ua * 100}%`
                    }
                })
            }), c.jsxs("div", {
                className: "relative",
                children: [c.jsx("h2", {
                    className: "text-2xl md:text-4xl font-black text-center mb-10 leading-tight drop-shadow-lg min-h-[100px] flex items-center justify-center",
                    children: k.question
                }), c.jsx("div", {
                    className: `
             absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center border-4 font-black text-2xl shadow-xl z-10 bg-slate-900
             ${f <= 5 ? "border-red-500 text-red-500 animate-pulse" : "border-slate-700 text-white"}
           `,
                    children: f
                }), c.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: k.options.map( (N, P) => {
                        const E = o === P
                          , V = P === k.correctAnswer;
                        let L = "bg-slate-800 border-slate-700 hover:bg-slate-700";
                        return l && (V ? L = "bg-green-600 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]" : E && !V ? L = "bg-red-600 border-red-500 opacity-50" : L = "bg-slate-800 border-slate-700 opacity-30"),
                        c.jsxs("button", {
                            disabled: l,
                            onClick: () => x(P),
                            className: `
                          relative p-6 rounded-2xl border-2 text-left transition-all duration-300 transform group
                          ${L}
                          ${!l && "hover:-translate-y-1 hover:shadow-lg"}
                       `,
                            children: [c.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [c.jsx("div", {
                                    className: `
                             w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-sm shrink-0
                             ${l && V ? "bg-white text-green-600 border-white" : "border-white/20 text-white/50 group-hover:border-white group-hover:text-white"}
                          `,
                                    children: String.fromCharCode(65 + P)
                                }), c.jsx("span", {
                                    className: "text-lg font-semibold",
                                    children: N
                                })]
                            }), l && V && c.jsx(sd, {
                                className: "absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 text-white"
                            }), l && E && !V && c.jsx(id, {
                                className: "absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 text-white"
                            })]
                        }, P)
                    }
                    )
                })]
            }), c.jsxs("div", {
                className: "h-16 mt-6 flex items-center justify-center",
                children: [d === "correct" && c.jsxs("div", {
                    className: "text-green-400 font-bold text-xl flex items-center gap-2 animate-bounce",
                    children: [c.jsx(sd, {}), " Chính xác! +", 10 + w * 2, " điểm"]
                }), d === "wrong" && c.jsxs("div", {
                    className: "text-red-500 font-bold text-xl flex items-center gap-2 animate-shake",
                    children: [c.jsx(id, {}), " Tiếc quá! Đáp án là", " ", k.options[k.correctAnswer]]
                })]
            })]
        })
    })
}
  , nf = m.createContext({});
function rf(e) {
    const t = m.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const sf = typeof window < "u"
  , E1 = sf ? m.useLayoutEffect : m.useEffect
  , Jl = m.createContext(null);
function of(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function af(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const kn = (e, t, n) => n > t ? t : n < e ? e : n;
let ml = () => {}
;
const Tn = {}
  , R1 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function A1(e) {
    return typeof e == "object" && e !== null
}
const M1 = e => /^0[^.\s]+$/u.test(e);
function lf(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const kt = e => e
  , CE = (e, t) => n => t(e(n))
  , Do = (...e) => e.reduce(CE)
  , yo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class cf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return of(this.subscriptions, t),
        () => af(this.subscriptions, t)
    }
    notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < s; i++) {
                    const o = this.subscriptions[i];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const rn = e => e * 1e3
  , St = e => e / 1e3;
function L1(e, t) {
    return t ? e * (1e3 / t) : 0
}
const D1 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , kE = 1e-7
  , TE = 12;
function NE(e, t, n, r, s) {
    let i, o, a = 0;
    do
        o = t + (n - t) / 2,
        i = D1(o, r, s) - e,
        i > 0 ? n = o : t = o;
    while (Math.abs(i) > kE && ++a < TE);
    return o
}
function Oo(e, t, n, r) {
    if (e === t && n === r)
        return kt;
    const s = i => NE(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : D1(s(i), t, r)
}
const O1 = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , V1 = e => t => 1 - e(1 - t)
  , _1 = Oo(.33, 1.53, .69, .99)
  , uf = V1(_1)
  , I1 = O1(uf)
  , F1 = e => (e *= 2) < 1 ? .5 * uf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , df = e => 1 - Math.sin(Math.acos(e))
  , z1 = V1(df)
  , B1 = O1(df)
  , jE = Oo(.42, 0, 1, 1)
  , PE = Oo(0, 0, .58, 1)
  , $1 = Oo(.42, 0, .58, 1)
  , EE = e => Array.isArray(e) && typeof e[0] != "number"
  , H1 = e => Array.isArray(e) && typeof e[0] == "number"
  , Hm = {
    linear: kt,
    easeIn: jE,
    easeInOut: $1,
    easeOut: PE,
    circIn: df,
    circInOut: B1,
    circOut: z1,
    backIn: uf,
    backInOut: I1,
    backOut: _1,
    anticipate: F1
}
  , RE = e => typeof e == "string"
  , Um = e => {
    if (H1(e)) {
        ml(e.length === 4);
        const [t,n,r,s] = e;
        return Oo(t, n, r, s)
    } else if (RE(e))
        return ml(Hm[e] !== void 0),
        Hm[e];
    return e
}
  , da = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Wm = {
    value: null,
    addProjectionMetrics: null
};
function AE(e, t) {
    let n = new Set
      , r = new Set
      , s = !1
      , i = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(h) {
        o.has(h) && (d.schedule(h),
        e()),
        l++,
        h(a)
    }
    const d = {
        schedule: (h, f=!1, p=!1) => {
            const v = p && s ? n : r;
            return f && o.add(h),
            v.has(h) || v.add(h),
            h
        }
        ,
        cancel: h => {
            r.delete(h),
            o.delete(h)
        }
        ,
        process: h => {
            if (a = h,
            s) {
                i = !0;
                return
            }
            s = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && Wm.value && Wm.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            s = !1,
            i && (i = !1,
            d.process(h))
        }
    };
    return d
}
const ME = 40;
function U1(e, t) {
    let n = !1
      , r = !0;
    const s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = () => n = !0
      , o = da.reduce( (x, S) => (x[S] = AE(i, t ? S : void 0),
    x), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: d, update: h, preRender: f, render: p, postRender: w} = o
      , v = () => {
        const x = Tn.useManualTiming ? s.timestamp : performance.now();
        n = !1,
        Tn.useManualTiming || (s.delta = r ? 1e3 / 60 : Math.max(Math.min(x - s.timestamp, ME), 1)),
        s.timestamp = x,
        s.isProcessing = !0,
        a.process(s),
        l.process(s),
        u.process(s),
        d.process(s),
        h.process(s),
        f.process(s),
        p.process(s),
        w.process(s),
        s.isProcessing = !1,
        n && t && (r = !1,
        e(v))
    }
      , b = () => {
        n = !0,
        r = !0,
        s.isProcessing || e(v)
    }
    ;
    return {
        schedule: da.reduce( (x, S) => {
            const C = o[S];
            return x[S] = (k, T=!1, N=!1) => (n || b(),
            C.schedule(k, T, N)),
            x
        }
        , {}),
        cancel: x => {
            for (let S = 0; S < da.length; S++)
                o[da[S]].cancel(x)
        }
        ,
        state: s,
        steps: o
    }
}
const {schedule: de, cancel: dr, state: Ae, steps: qc} = U1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : kt, !0);
let Ra;
function LE() {
    Ra = void 0
}
const rt = {
    now: () => (Ra === void 0 && rt.set(Ae.isProcessing || Tn.useManualTiming ? Ae.timestamp : performance.now()),
    Ra),
    set: e => {
        Ra = e,
        queueMicrotask(LE)
    }
}
  , W1 = e => t => typeof t == "string" && t.startsWith(e)
  , hf = W1("--")
  , DE = W1("var(--")
  , ff = e => DE(e) ? OE.test(e.split("/*")[0].trim()) : !1
  , OE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , ci = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , vo = {
    ...ci,
    transform: e => kn(0, 1, e)
}
  , ha = {
    ...ci,
    default: 1
}
  , Bi = e => Math.round(e * 1e5) / 1e5
  , pf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function VE(e) {
    return e == null
}
const _E = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , mf = (e, t) => n => !!(typeof n == "string" && _E.test(n) && n.startsWith(e) || t && !VE(n) && Object.prototype.hasOwnProperty.call(n, t))
  , K1 = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [s,i,o,a] = r.match(pf);
    return {
        [e]: parseFloat(s),
        [t]: parseFloat(i),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , IE = e => kn(0, 255, e)
  , Gc = {
    ...ci,
    transform: e => Math.round(IE(e))
}
  , Rr = {
    test: mf("rgb", "red"),
    parse: K1("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Gc.transform(e) + ", " + Gc.transform(t) + ", " + Gc.transform(n) + ", " + Bi(vo.transform(r)) + ")"
};
function FE(e) {
    let t = ""
      , n = ""
      , r = ""
      , s = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    s = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    s = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    s += s),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const vd = {
    test: mf("#"),
    parse: FE,
    transform: Rr.transform
}
  , Vo = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , _n = Vo("deg")
  , sn = Vo("%")
  , W = Vo("px")
  , zE = Vo("vh")
  , BE = Vo("vw")
  , Km = {
    ...sn,
    parse: e => sn.parse(e) / 100,
    transform: e => sn.transform(e * 100)
}
  , vs = {
    test: mf("hsl", "hue"),
    parse: K1("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + sn.transform(Bi(t)) + ", " + sn.transform(Bi(n)) + ", " + Bi(vo.transform(r)) + ")"
}
  , Ce = {
    test: e => Rr.test(e) || vd.test(e) || vs.test(e),
    parse: e => Rr.test(e) ? Rr.parse(e) : vs.test(e) ? vs.parse(e) : vd.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Rr.transform(e) : vs.transform(e),
    getAnimatableNone: e => {
        const t = Ce.parse(e);
        return t.alpha = 0,
        Ce.transform(t)
    }
}
  , $E = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function HE(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(pf)) == null ? void 0 : t.length) || 0) + (((n = e.match($E)) == null ? void 0 : n.length) || 0) > 0
}
const q1 = "number"
  , G1 = "color"
  , UE = "var"
  , WE = "var("
  , qm = "${}"
  , KE = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function xo(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , s = [];
    let i = 0;
    const a = t.replace(KE, l => (Ce.test(l) ? (r.color.push(i),
    s.push(G1),
    n.push(Ce.parse(l))) : l.startsWith(WE) ? (r.var.push(i),
    s.push(UE),
    n.push(l)) : (r.number.push(i),
    s.push(q1),
    n.push(parseFloat(l))),
    ++i,
    qm)).split(qm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: s
    }
}
function Q1(e) {
    return xo(e).values
}
function X1(e) {
    const {split: t, types: n} = xo(e)
      , r = t.length;
    return s => {
        let i = "";
        for (let o = 0; o < r; o++)
            if (i += t[o],
            s[o] !== void 0) {
                const a = n[o];
                a === q1 ? i += Bi(s[o]) : a === G1 ? i += Ce.transform(s[o]) : i += s[o]
            }
        return i
    }
}
const qE = e => typeof e == "number" ? 0 : Ce.test(e) ? Ce.getAnimatableNone(e) : e;
function GE(e) {
    const t = Q1(e);
    return X1(e)(t.map(qE))
}
const hr = {
    test: HE,
    parse: Q1,
    createTransformer: X1,
    getAnimatableNone: GE
};
function Qc(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function QE({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let s = 0
      , i = 0
      , o = 0;
    if (!t)
        s = i = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        s = Qc(l, a, e + 1 / 3),
        i = Qc(l, a, e),
        o = Qc(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(i * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function gl(e, t) {
    return n => n > 0 ? t : e
}
const fe = (e, t, n) => e + (t - e) * n
  , Xc = (e, t, n) => {
    const r = e * e
      , s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s)
}
  , XE = [vd, Rr, vs]
  , YE = e => XE.find(t => t.test(e));
function Gm(e) {
    const t = YE(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === vs && (n = QE(n)),
    n
}
const Qm = (e, t) => {
    const n = Gm(e)
      , r = Gm(t);
    if (!n || !r)
        return gl(e, t);
    const s = {
        ...n
    };
    return i => (s.red = Xc(n.red, r.red, i),
    s.green = Xc(n.green, r.green, i),
    s.blue = Xc(n.blue, r.blue, i),
    s.alpha = fe(n.alpha, r.alpha, i),
    Rr.transform(s))
}
  , xd = new Set(["none", "hidden"]);
function ZE(e, t) {
    return xd.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function JE(e, t) {
    return n => fe(e, t, n)
}
function gf(e) {
    return typeof e == "number" ? JE : typeof e == "string" ? ff(e) ? gl : Ce.test(e) ? Qm : n5 : Array.isArray(e) ? Y1 : typeof e == "object" ? Ce.test(e) ? Qm : e5 : gl
}
function Y1(e, t) {
    const n = [...e]
      , r = n.length
      , s = e.map( (i, o) => gf(i)(i, t[o]));
    return i => {
        for (let o = 0; o < r; o++)
            n[o] = s[o](i);
        return n
    }
}
function e5(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const s in n)
        e[s] !== void 0 && t[s] !== void 0 && (r[s] = gf(e[s])(e[s], t[s]));
    return s => {
        for (const i in r)
            n[i] = r[i](s);
        return n
    }
}
function t5(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let s = 0; s < t.values.length; s++) {
        const i = t.types[s]
          , o = e.indexes[i][r[i]]
          , a = e.values[o] ?? 0;
        n[s] = a,
        r[i]++
    }
    return n
}
const n5 = (e, t) => {
    const n = hr.createTransformer(t)
      , r = xo(e)
      , s = xo(t);
    return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? xd.has(e) && !s.values.length || xd.has(t) && !r.values.length ? ZE(e, t) : Do(Y1(t5(r, s), s.values), n) : gl(e, t)
}
;
function Z1(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : gf(e)(e, t)
}
const r5 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => de.update(t, n),
        stop: () => dr(t),
        now: () => Ae.isProcessing ? Ae.timestamp : rt.now()
    }
}
  , J1 = (e, t, n=10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++)
        r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , yl = 2e4;
function yf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < yl; )
        t += n,
        r = e.next(t);
    return t >= yl ? 1 / 0 : t
}
function s5(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , s = Math.min(yf(r), yl);
    return {
        type: "keyframes",
        ease: i => r.next(s * i).value / t,
        duration: St(s)
    }
}
const i5 = 5;
function ew(e, t, n) {
    const r = Math.max(t - i5, 0);
    return L1(n - e(r), t - r)
}
const ye = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Yc = .001;
function o5({duration: e=ye.duration, bounce: t=ye.bounce, velocity: n=ye.velocity, mass: r=ye.mass}) {
    let s, i, o = 1 - t;
    o = kn(ye.minDamping, ye.maxDamping, o),
    e = kn(ye.minDuration, ye.maxDuration, St(e)),
    o < 1 ? (s = u => {
        const d = u * o
          , h = d * e
          , f = d - n
          , p = wd(u, o)
          , w = Math.exp(-h);
        return Yc - f / p * w
    }
    ,
    i = u => {
        const h = u * o * e
          , f = h * n + n
          , p = Math.pow(o, 2) * Math.pow(u, 2) * e
          , w = Math.exp(-h)
          , v = wd(Math.pow(u, 2), o);
        return (-s(u) + Yc > 0 ? -1 : 1) * ((f - p) * w) / v
    }
    ) : (s = u => {
        const d = Math.exp(-u * e)
          , h = (u - n) * e + 1;
        return -Yc + d * h
    }
    ,
    i = u => {
        const d = Math.exp(-u * e)
          , h = (n - u) * (e * e);
        return d * h
    }
    );
    const a = 5 / e
      , l = l5(s, i, a);
    if (e = rn(e),
    isNaN(l))
        return {
            stiffness: ye.stiffness,
            damping: ye.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const a5 = 12;
function l5(e, t, n) {
    let r = n;
    for (let s = 1; s < a5; s++)
        r = r - e(r) / t(r);
    return r
}
function wd(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const c5 = ["duration", "bounce"]
  , u5 = ["stiffness", "damping", "mass"];
function Xm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function d5(e) {
    let t = {
        velocity: ye.velocity,
        stiffness: ye.stiffness,
        damping: ye.damping,
        mass: ye.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Xm(e, u5) && Xm(e, c5))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , s = r * r
              , i = 2 * kn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
            t = {
                ...t,
                mass: ye.mass,
                stiffness: s,
                damping: i
            }
        } else {
            const n = o5(e);
            t = {
                ...t,
                ...n,
                mass: ye.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function vl(e=ye.visualDuration, t=ye.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: s} = n;
    const i = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: u, mass: d, duration: h, velocity: f, isResolvedFromDuration: p} = d5({
        ...n,
        velocity: -St(n.velocity || 0)
    })
      , w = f || 0
      , v = u / (2 * Math.sqrt(l * d))
      , b = o - i
      , y = St(Math.sqrt(l / d))
      , g = Math.abs(b) < 5;
    r || (r = g ? ye.restSpeed.granular : ye.restSpeed.default),
    s || (s = g ? ye.restDelta.granular : ye.restDelta.default);
    let x;
    if (v < 1) {
        const C = wd(y, v);
        x = k => {
            const T = Math.exp(-v * y * k);
            return o - T * ((w + v * y * b) / C * Math.sin(C * k) + b * Math.cos(C * k))
        }
    } else if (v === 1)
        x = C => o - Math.exp(-y * C) * (b + (w + y * b) * C);
    else {
        const C = y * Math.sqrt(v * v - 1);
        x = k => {
            const T = Math.exp(-v * y * k)
              , N = Math.min(C * k, 300);
            return o - T * ((w + v * y * b) * Math.sinh(N) + C * b * Math.cosh(N)) / C
        }
    }
    const S = {
        calculatedDuration: p && h || null,
        next: C => {
            const k = x(C);
            if (p)
                a.done = C >= h;
            else {
                let T = C === 0 ? w : 0;
                v < 1 && (T = C === 0 ? rn(w) : ew(x, C, k));
                const N = Math.abs(T) <= r
                  , P = Math.abs(o - k) <= s;
                a.done = N && P
            }
            return a.value = a.done ? o : k,
            a
        }
        ,
        toString: () => {
            const C = Math.min(yf(S), yl)
              , k = J1(T => S.next(C * T).value, C, 30);
            return C + "ms " + k
        }
        ,
        toTransition: () => {}
    };
    return S
}
vl.applyToOptions = e => {
    const t = s5(e, 100, vl);
    return e.ease = t.ease,
    e.duration = rn(t.duration),
    e.type = "keyframes",
    e
}
;
function bd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: s=10, bounceStiffness: i=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: d}) {
    const h = e[0]
      , f = {
        done: !1,
        value: h
    }
      , p = N => a !== void 0 && N < a || l !== void 0 && N > l
      , w = N => a === void 0 ? l : l === void 0 || Math.abs(a - N) < Math.abs(l - N) ? a : l;
    let v = n * t;
    const b = h + v
      , y = o === void 0 ? b : o(b);
    y !== b && (v = y - h);
    const g = N => -v * Math.exp(-N / r)
      , x = N => y + g(N)
      , S = N => {
        const P = g(N)
          , E = x(N);
        f.done = Math.abs(P) <= u,
        f.value = f.done ? y : E
    }
    ;
    let C, k;
    const T = N => {
        p(f.value) && (C = N,
        k = vl({
            keyframes: [f.value, w(f.value)],
            velocity: ew(x, N, f.value),
            damping: s,
            stiffness: i,
            restDelta: u,
            restSpeed: d
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: N => {
            let P = !1;
            return !k && C === void 0 && (P = !0,
            S(N),
            T(N)),
            C !== void 0 && N >= C ? k.next(N - C) : (!P && S(N),
            f)
        }
    }
}
function h5(e, t, n) {
    const r = []
      , s = n || Tn.mix || Z1
      , i = e.length - 1;
    for (let o = 0; o < i; o++) {
        let a = s(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || kt : t;
            a = Do(l, a)
        }
        r.push(a)
    }
    return r
}
function f5(e, t, {clamp: n=!0, ease: r, mixer: s}={}) {
    const i = e.length;
    if (ml(i === t.length),
    i === 1)
        return () => t[0];
    if (i === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[i - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = h5(t, r, s)
      , l = a.length
      , u = d => {
        if (o && d < e[0])
            return t[0];
        let h = 0;
        if (l > 1)
            for (; h < e.length - 2 && !(d < e[h + 1]); h++)
                ;
        const f = yo(e[h], e[h + 1], d);
        return a[h](f)
    }
    ;
    return n ? d => u(kn(e[0], e[i - 1], d)) : u
}
function p5(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = yo(0, t, r);
        e.push(fe(n, 1, s))
    }
}
function m5(e) {
    const t = [0];
    return p5(t, e.length - 1),
    t
}
function g5(e, t) {
    return e.map(n => n * t)
}
function y5(e, t) {
    return e.map( () => t || $1).splice(0, e.length - 1)
}
function $i({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const s = EE(r) ? r.map(Um) : Um(r)
      , i = {
        done: !1,
        value: t[0]
    }
      , o = g5(n && n.length === t.length ? n : m5(t), e)
      , a = f5(o, t, {
        ease: Array.isArray(s) ? s : y5(t, s)
    });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l),
        i.done = l >= e,
        i)
    }
}
const v5 = e => e !== null;
function vf(e, {repeat: t, repeatType: n="loop"}, r, s=1) {
    const i = e.filter(v5)
      , a = s < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !a || r === void 0 ? i[a] : r
}
const x5 = {
    decay: bd,
    inertia: bd,
    tween: $i,
    keyframes: $i,
    spring: vl
};
function tw(e) {
    typeof e.type == "string" && (e.type = x5[e.type])
}
class xf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const w5 = e => e / 100;
class wf extends xf {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, s;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== rt.now() && this.tick(rt.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (s = (r = this.options).onStop) == null || s.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        tw(t);
        const {type: n=$i, repeat: r=0, repeatDelay: s=0, repeatType: i, velocity: o=0} = t;
        let {keyframes: a} = t;
        const l = n || $i;
        l !== $i && typeof a[0] != "number" && (this.mixKeyframes = Do(w5, Z1(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        i === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })),
        u.calculatedDuration === null && (u.calculatedDuration = yf(u));
        const {calculatedDuration: d} = u;
        this.calculatedDuration = d,
        this.resolvedDuration = d + s,
        this.totalDuration = this.resolvedDuration * (r + 1) - s,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: s, mixKeyframes: i, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: d, repeat: h, repeatType: f, repeatDelay: p, type: w, onUpdate: v, finalKeyframe: b} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , g = this.playbackSpeed >= 0 ? y < 0 : y > s;
        this.currentTime = Math.max(y, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = s);
        let x = this.currentTime
          , S = r;
        if (h) {
            const N = Math.min(this.currentTime, s) / a;
            let P = Math.floor(N)
              , E = N % 1;
            !E && N >= 1 && (E = 1),
            E === 1 && P--,
            P = Math.min(P, h + 1),
            !!(P % 2) && (f === "reverse" ? (E = 1 - E,
            p && (E -= p / a)) : f === "mirror" && (S = o)),
            x = kn(0, 1, E) * a
        }
        const C = g ? {
            done: !1,
            value: d[0]
        } : S.next(x);
        i && (C.value = i(C.value));
        let {done: k} = C;
        !g && l !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
        return T && w !== bd && (C.value = vf(d, this.options, b, this.speed)),
        v && v(C.value),
        T && this.finish(),
        C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return St(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + St(t)
    }
    get time() {
        return St(this.currentTime)
    }
    set time(t) {
        var n;
        t = rn(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(rt.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = St(this.currentTime))
    }
    play() {
        var s, i;
        if (this.isStopped)
            return;
        const {driver: t=r5, startTime: n} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        (i = (s = this.options).onPlay) == null || i.call(s);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(rt.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function b5(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Ar = e => e * 180 / Math.PI
  , Sd = e => {
    const t = Ar(Math.atan2(e[1], e[0]));
    return Cd(t)
}
  , S5 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Sd,
    rotateZ: Sd,
    skewX: e => Ar(Math.atan(e[1])),
    skewY: e => Ar(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , Cd = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , Ym = Sd
  , Zm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Jm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , C5 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Zm,
    scaleY: Jm,
    scale: e => (Zm(e) + Jm(e)) / 2,
    rotateX: e => Cd(Ar(Math.atan2(e[6], e[5]))),
    rotateY: e => Cd(Ar(Math.atan2(-e[2], e[0]))),
    rotateZ: Ym,
    rotate: Ym,
    skewX: e => Ar(Math.atan(e[4])),
    skewY: e => Ar(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function kd(e) {
    return e.includes("scale") ? 1 : 0
}
function Td(e, t) {
    if (!e || e === "none")
        return kd(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, s;
    if (n)
        r = C5,
        s = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = S5,
        s = a
    }
    if (!s)
        return kd(t);
    const i = r[t]
      , o = s[1].split(",").map(T5);
    return typeof i == "function" ? i(o) : o[i]
}
const k5 = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return Td(n, t)
}
;
function T5(e) {
    return parseFloat(e.trim())
}
const ui = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , di = new Set(ui)
  , eg = e => e === ci || e === W
  , N5 = new Set(["x", "y", "z"])
  , j5 = ui.filter(e => !N5.has(e));
function P5(e) {
    const t = [];
    return j5.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const zr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => Td(t, "x"),
    y: (e, {transform: t}) => Td(t, "y")
};
zr.translateX = zr.x;
zr.translateY = zr.y;
const Br = new Set;
let Nd = !1
  , jd = !1
  , Pd = !1;
function nw() {
    if (jd) {
        const e = Array.from(Br).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const s = P5(r);
            s.length && (n.set(r, s),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const s = n.get(r);
            s && s.forEach( ([i,o]) => {
                var a;
                (a = r.getValue(i)) == null || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    jd = !1,
    Nd = !1,
    Br.forEach(e => e.complete(Pd)),
    Br.clear()
}
function rw() {
    Br.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (jd = !0)
    }
    )
}
function E5() {
    Pd = !0,
    rw(),
    nw(),
    Pd = !1
}
class bf {
    constructor(t, n, r, s, i, o=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = s,
        this.element = i,
        this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Br.add(this),
        Nd || (Nd = !0,
        de.read(rw),
        de.resolveKeyframes(nw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: s} = this;
        if (t[0] === null) {
            const i = s == null ? void 0 : s.get()
              , o = t[t.length - 1];
            if (i !== void 0)
                t[0] = i;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o),
            s && i === void 0 && s.set(t[0])
        }
        b5(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Br.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Br.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const R5 = e => e.startsWith("--");
function A5(e, t, n) {
    R5(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const M5 = lf( () => window.ScrollTimeline !== void 0)
  , L5 = {};
function D5(e, t) {
    const n = lf(e);
    return () => L5[t] ?? n()
}
const sw = D5( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Ri = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , tg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ri([0, .65, .55, 1]),
    circOut: Ri([.55, 0, 1, .45]),
    backIn: Ri([.31, .01, .66, -.59]),
    backOut: Ri([.33, 1.53, .69, .99])
};
function iw(e, t) {
    if (e)
        return typeof e == "function" ? sw() ? J1(e, t) : "ease-out" : H1(e) ? Ri(e) : Array.isArray(e) ? e.map(n => iw(n, t) || tg.easeOut) : tg[e]
}
function O5(e, t, n, {delay: r=0, duration: s=300, repeat: i=0, repeatType: o="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const d = {
        [t]: n
    };
    l && (d.offset = l);
    const h = iw(a, s);
    Array.isArray(h) && (d.easing = h);
    const f = {
        delay: r,
        duration: s,
        easing: Array.isArray(h) ? "linear" : h,
        fill: "both",
        iterations: i + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(d, f)
}
function ow(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function V5({type: e, ...t}) {
    return ow(e) && sw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class _5 extends xf {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !t)
            return;
        const {element: n, name: r, keyframes: s, pseudoElement: i, allowFlatten: o=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!i,
        this.allowFlatten = o,
        this.options = t,
        ml(typeof t.type != "string");
        const u = V5(t);
        this.animation = O5(n, r, s, u, i),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !i) {
                const d = vf(s, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(d) : A5(n, r, d),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var t, n;
        this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return St(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + St(t)
    }
    get time() {
        return St(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.finishedTime = null,
        this.animation.currentTime = rn(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(t) {
        this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && M5() ? (this.animation.timeline = t,
        kt) : n(this)
    }
}
const aw = {
    anticipate: F1,
    backInOut: I1,
    circInOut: B1
};
function I5(e) {
    return e in aw
}
function F5(e) {
    typeof e.ease == "string" && I5(e.ease) && (e.ease = aw[e.ease])
}
const ng = 10;
class z5 extends _5 {
    constructor(t) {
        F5(t),
        tw(t),
        super(t),
        t.startTime && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: s, element: i, ...o} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new wf({
            ...o,
            autoplay: !1
        })
          , l = rn(this.finishedTime ?? this.time);
        n.setWithVelocity(a.sample(l - ng).value, a.sample(l).value, ng),
        a.stop()
    }
}
const rg = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (hr.test(e) || e === "0") && !e.startsWith("url("));
function B5(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function $5(e, t, n, r) {
    const s = e[0];
    if (s === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const i = e[e.length - 1]
      , o = rg(s, t)
      , a = rg(i, t);
    return !o || !a ? !1 : B5(e) || (n === "spring" || ow(n)) && r
}
function Ed(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const H5 = new Set(["opacity", "clipPath", "filter", "transform"])
  , U5 = lf( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function W5(e) {
    var d;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: s, damping: i, type: o} = e;
    if (!(((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return U5() && n && H5.has(n) && (n !== "transform" || !u) && !l && !r && s !== "mirror" && i !== 0 && o !== "inertia"
}
const K5 = 40;
class q5 extends xf {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: s=0, repeatDelay: i=0, repeatType: o="loop", keyframes: a, name: l, motionValue: u, element: d, ...h}) {
        var w;
        super(),
        this.stop = () => {
            var v, b;
            this._animation && (this._animation.stop(),
            (v = this.stopTimeline) == null || v.call(this)),
            (b = this.keyframeResolver) == null || b.cancel()
        }
        ,
        this.createdAt = rt.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: s,
            repeatDelay: i,
            repeatType: o,
            name: l,
            motionValue: u,
            element: d,
            ...h
        }
          , p = (d == null ? void 0 : d.KeyframeResolver) || bf;
        this.keyframeResolver = new p(a, (v, b, y) => this.onKeyframesResolved(v, b, f, !y),l,u,d),
        (w = this.keyframeResolver) == null || w.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, s) {
        this.keyframeResolver = void 0;
        const {name: i, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: d} = r;
        this.resolvedAt = rt.now(),
        $5(t, i, o, a) || ((Tn.instantAnimations || !l) && (d == null || d(vf(t, r, n))),
        t[0] = t[t.length - 1],
        Ed(r),
        r.repeat = 0);
        const f = {
            startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > K5 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , p = !u && W5(f) ? new z5({
            ...f,
            element: f.motionValue.owner.current
        }) : new wf(f);
        p.finished.then( () => this.notifyFinished()).catch(kt),
        this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = p
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        E5()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
const G5 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Q5(e) {
    const t = G5.exec(e);
    if (!t)
        return [, ];
    const [,n,r,s] = t;
    return [`--${n ?? r}`, s]
}
function lw(e, t, n=1) {
    const [r,s] = Q5(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const o = i.trim();
        return R1(o) ? parseFloat(o) : o
    }
    return ff(s) ? lw(s, t, n + 1) : s
}
function Sf(e, t) {
    return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const cw = new Set(["width", "height", "top", "left", "right", "bottom", ...ui])
  , X5 = {
    test: e => e === "auto",
    parse: e => e
}
  , uw = e => t => t.test(e)
  , dw = [ci, W, sn, _n, BE, zE, X5]
  , sg = e => dw.find(uw(e));
function Y5(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || M1(e) : !0
}
const Z5 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function J5(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(pf) || [];
    if (!r)
        return e;
    const s = n.replace(r, "");
    let i = Z5.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
    t + "(" + i + s + ")"
}
const e4 = /\b([a-z-]*)\(.*?\)/gu
  , Rd = {
    ...hr,
    getAnimatableNone: e => {
        const t = e.match(e4);
        return t ? t.map(J5).join(" ") : e
    }
}
  , ig = {
    ...ci,
    transform: Math.round
}
  , t4 = {
    rotate: _n,
    rotateX: _n,
    rotateY: _n,
    rotateZ: _n,
    scale: ha,
    scaleX: ha,
    scaleY: ha,
    scaleZ: ha,
    skew: _n,
    skewX: _n,
    skewY: _n,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: vo,
    originX: Km,
    originY: Km,
    originZ: W
}
  , Cf = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
    ...t4,
    zIndex: ig,
    fillOpacity: vo,
    strokeOpacity: vo,
    numOctaves: ig
}
  , n4 = {
    ...Cf,
    color: Ce,
    backgroundColor: Ce,
    outlineColor: Ce,
    fill: Ce,
    stroke: Ce,
    borderColor: Ce,
    borderTopColor: Ce,
    borderRightColor: Ce,
    borderBottomColor: Ce,
    borderLeftColor: Ce,
    filter: Rd,
    WebkitFilter: Rd
}
  , hw = e => n4[e];
function fw(e, t) {
    let n = hw(e);
    return n !== Rd && (n = hr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const r4 = new Set(["auto", "none", "0"]);
function s4(e, t, n) {
    let r = 0, s;
    for (; r < e.length && !s; ) {
        const i = e[r];
        typeof i == "string" && !r4.has(i) && xo(i).values.length && (s = e[r]),
        r++
    }
    if (s && n)
        for (const i of t)
            e[i] = fw(n, s)
}
class i4 extends bf {
    constructor(t, n, r, s, i) {
        super(t, n, r, s, i, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(),
            ff(u))) {
                const d = lw(u, n.current);
                d !== void 0 && (t[l] = d),
                l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !cw.has(r) || t.length !== 2)
            return;
        const [s,i] = t
          , o = sg(s)
          , a = sg(i);
        if (o !== a)
            if (eg(o) && eg(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                }
            else
                zr[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let s = 0; s < t.length; s++)
            (t[s] === null || Y5(t[s])) && r.push(s);
        r.length && s4(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = zr[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const s = t.getValue(n);
        s && s.jump(this.measuredOrigin, !1);
        const i = r.length - 1
          , o = r[i];
        r[i] = zr[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function o4(e, t, n) {
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const s = document.querySelectorAll(e);
        return s ? Array.from(s) : []
    }
    return Array.from(e)
}
const pw = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function mw(e) {
    return A1(e) && "offsetHeight"in e
}
const og = 30
  , a4 = e => !isNaN(parseFloat(e));
class l4 {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var i;
            const s = rt.now();
            if (this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current),
            this.dependents))
                for (const o of this.dependents)
                    o.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = rt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = a4(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new cf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            de.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = rt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > og)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, og);
        return L1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ys(e, t) {
    return new l4(e,t)
}
const {schedule: kf, cancel: qA} = U1(queueMicrotask, !1)
  , Ot = {
    x: !1,
    y: !1
};
function gw() {
    return Ot.x || Ot.y
}
function c4(e) {
    return e === "x" || e === "y" ? Ot[e] ? null : (Ot[e] = !0,
    () => {
        Ot[e] = !1
    }
    ) : Ot.x || Ot.y ? null : (Ot.x = Ot.y = !0,
    () => {
        Ot.x = Ot.y = !1
    }
    )
}
function yw(e, t) {
    const n = o4(e)
      , r = new AbortController
      , s = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, s, () => r.abort()]
}
function ag(e) {
    return !(e.pointerType === "touch" || gw())
}
function u4(e, t, n={}) {
    const [r,s,i] = yw(e, n)
      , o = a => {
        if (!ag(a))
            return;
        const {target: l} = a
          , u = t(l, a);
        if (typeof u != "function" || !l)
            return;
        const d = h => {
            ag(h) && (u(h),
            l.removeEventListener("pointerleave", d))
        }
        ;
        l.addEventListener("pointerleave", d, s)
    }
    ;
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, s)
    }
    ),
    i
}
const vw = (e, t) => t ? e === t ? !0 : vw(e, t.parentElement) : !1
  , Tf = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , d4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function h4(e) {
    return d4.has(e.tagName) || e.tabIndex !== -1
}
const Aa = new WeakSet;
function lg(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Zc(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const f4 = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = lg( () => {
        if (Aa.has(n))
            return;
        Zc(n, "down");
        const s = lg( () => {
            Zc(n, "up")
        }
        )
          , i = () => Zc(n, "cancel");
        n.addEventListener("keyup", s, t),
        n.addEventListener("blur", i, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function cg(e) {
    return Tf(e) && !gw()
}
function p4(e, t, n={}) {
    const [r,s,i] = yw(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!cg(a))
            return;
        Aa.add(l);
        const u = t(l, a)
          , d = (p, w) => {
            window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            Aa.has(l) && Aa.delete(l),
            cg(p) && typeof u == "function" && u(p, {
                success: w
            })
        }
          , h = p => {
            d(p, l === window || l === document || n.useGlobalTarget || vw(l, p.target))
        }
          , f = p => {
            d(p, !1)
        }
        ;
        window.addEventListener("pointerup", h, s),
        window.addEventListener("pointercancel", f, s)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        mw(a) && (a.addEventListener("focus", u => f4(u, s)),
        !h4(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    i
}
function xw(e) {
    return A1(e) && "ownerSVGElement"in e
}
function m4(e) {
    return xw(e) && e.tagName === "svg"
}
const He = e => !!(e && e.getVelocity)
  , g4 = [...dw, Ce, hr]
  , y4 = e => g4.find(uw(e))
  , Nf = m.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function ug(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function v4(...e) {
    return t => {
        let n = !1;
        const r = e.map(s => {
            const i = ug(s, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const i = r[s];
                    typeof i == "function" ? i() : ug(e[s], null)
                }
            }
    }
}
function x4(...e) {
    return m.useCallback(v4(...e), e)
}
class w4 extends m.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent
              , s = mw(r) && r.offsetWidth || 0
              , i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft,
            i.right = s - i.width - i.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function b4({children: e, isPresent: t, anchorX: n, root: r}) {
    const s = m.useId()
      , i = m.useRef(null)
      , o = m.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: a} = m.useContext(Nf)
      , l = x4(i, e == null ? void 0 : e.ref);
    return m.useInsertionEffect( () => {
        const {width: u, height: d, top: h, left: f, right: p} = o.current;
        if (t || !i.current || !u || !d)
            return;
        const w = n === "left" ? `left: ${f}` : `right: ${p}`;
        i.current.dataset.motionPopId = s;
        const v = document.createElement("style");
        a && (v.nonce = a);
        const b = r ?? document.head;
        return b.appendChild(v),
        v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            ${w}px !important;
            top: ${h}px !important;
          }
        `),
        () => {
            b.contains(v) && b.removeChild(v)
        }
    }
    , [t]),
    c.jsx(w4, {
        isPresent: t,
        childRef: i,
        sizeRef: o,
        children: m.cloneElement(e, {
            ref: l
        })
    })
}
const S4 = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: i, mode: o, anchorX: a, root: l}) => {
    const u = rf(C4)
      , d = m.useId();
    let h = !0
      , f = m.useMemo( () => (h = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: p => {
            u.set(p, !0);
            for (const w of u.values())
                if (!w)
                    return;
            r && r()
        }
        ,
        register: p => (u.set(p, !1),
        () => u.delete(p))
    }), [n, u, r]);
    return i && h && (f = {
        ...f
    }),
    m.useMemo( () => {
        u.forEach( (p, w) => u.set(w, !1))
    }
    , [n]),
    m.useEffect( () => {
        !n && !u.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = c.jsx(b4, {
        isPresent: n,
        anchorX: a,
        root: l,
        children: e
    })),
    c.jsx(Jl.Provider, {
        value: f,
        children: e
    })
}
;
function C4() {
    return new Map
}
function ww(e=!0) {
    const t = m.useContext(Jl);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: s} = t
      , i = m.useId();
    m.useEffect( () => {
        if (e)
            return s(i)
    }
    , [e]);
    const o = m.useCallback( () => e && r && r(i), [i, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const fa = e => e.key || "";
function dg(e) {
    const t = [];
    return m.Children.forEach(e, n => {
        m.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Zs = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: s=!0, mode: i="sync", propagate: o=!1, anchorX: a="left", root: l}) => {
    const [u,d] = ww(o)
      , h = m.useMemo( () => dg(e), [e])
      , f = o && !u ? [] : h.map(fa)
      , p = m.useRef(!0)
      , w = m.useRef(h)
      , v = rf( () => new Map)
      , [b,y] = m.useState(h)
      , [g,x] = m.useState(h);
    E1( () => {
        p.current = !1,
        w.current = h;
        for (let k = 0; k < g.length; k++) {
            const T = fa(g[k]);
            f.includes(T) ? v.delete(T) : v.get(T) !== !0 && v.set(T, !1)
        }
    }
    , [g, f.length, f.join("-")]);
    const S = [];
    if (h !== b) {
        let k = [...h];
        for (let T = 0; T < g.length; T++) {
            const N = g[T]
              , P = fa(N);
            f.includes(P) || (k.splice(T, 0, N),
            S.push(N))
        }
        return i === "wait" && S.length && (k = S),
        x(dg(k)),
        y(h),
        null
    }
    const {forceRender: C} = m.useContext(nf);
    return c.jsx(c.Fragment, {
        children: g.map(k => {
            const T = fa(k)
              , N = o && !u ? !1 : h === g || f.includes(T)
              , P = () => {
                if (v.has(T))
                    v.set(T, !0);
                else
                    return;
                let E = !0;
                v.forEach(V => {
                    V || (E = !1)
                }
                ),
                E && (C == null || C(),
                x(w.current),
                o && (d == null || d()),
                r && r())
            }
            ;
            return c.jsx(S4, {
                isPresent: N,
                initial: !p.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: s,
                mode: i,
                root: l,
                onExitComplete: N ? void 0 : P,
                anchorX: a,
                children: k
            }, T)
        }
        )
    })
}
  , bw = m.createContext({
    strict: !1
})
  , hg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Js = {};
for (const e in hg)
    Js[e] = {
        isEnabled: t => hg[e].some(n => !!t[n])
    };
function k4(e) {
    for (const t in e)
        Js[t] = {
            ...Js[t],
            ...e[t]
        }
}
const T4 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function xl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || T4.has(e)
}
let Sw = e => !xl(e);
function N4(e) {
    typeof e == "function" && (Sw = t => t.startsWith("on") ? !xl(t) : e(t))
}
try {
    N4(require("@emotion/is-prop-valid").default)
} catch {}
function j4(e, t, n) {
    const r = {};
    for (const s in e)
        s === "values" && typeof e.values == "object" || (Sw(s) || n === !0 && xl(s) || !t && !xl(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
    return r
}
const ec = m.createContext({});
function tc(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function wo(e) {
    return typeof e == "string" || Array.isArray(e)
}
const jf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Pf = ["initial", ...jf];
function nc(e) {
    return tc(e.animate) || Pf.some(t => wo(e[t]))
}
function Cw(e) {
    return !!(nc(e) || e.variants)
}
function P4(e, t) {
    if (nc(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || wo(n) ? n : void 0,
            animate: wo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function E4(e) {
    const {initial: t, animate: n} = P4(e, m.useContext(ec));
    return m.useMemo( () => ({
        initial: t,
        animate: n
    }), [fg(t), fg(n)])
}
function fg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const bo = {};
function R4(e) {
    for (const t in e)
        bo[t] = e[t],
        hf(t) && (bo[t].isCSSVariable = !0)
}
function kw(e, {layout: t, layoutId: n}) {
    return di.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!bo[e] || e === "opacity")
}
const A4 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , M4 = ui.length;
function L4(e, t, n) {
    let r = ""
      , s = !0;
    for (let i = 0; i < M4; i++) {
        const o = ui[i]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
        !l || n) {
            const u = pw(a, Cf[o]);
            if (!l) {
                s = !1;
                const d = A4[o] || o;
                r += `${d}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, s ? "" : r) : s && (r = "none"),
    r
}
function Ef(e, t, n) {
    const {style: r, vars: s, transformOrigin: i} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (di.has(l)) {
            o = !0;
            continue
        } else if (hf(l)) {
            s[l] = u;
            continue
        } else {
            const d = pw(u, Cf[l]);
            l.startsWith("origin") ? (a = !0,
            i[l] = d) : r[l] = d
        }
    }
    if (t.transform || (o || n ? r.transform = L4(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: d=0} = i;
        r.transformOrigin = `${l} ${u} ${d}`
    }
}
const Rf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Tw(e, t, n) {
    for (const r in t)
        !He(t[r]) && !kw(r, n) && (e[r] = t[r])
}
function D4({transformTemplate: e}, t) {
    return m.useMemo( () => {
        const n = Rf();
        return Ef(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function O4(e, t) {
    const n = e.style || {}
      , r = {};
    return Tw(r, n, e),
    Object.assign(r, D4(e, t)),
    r
}
function V4(e, t) {
    const n = {}
      , r = O4(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const _4 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , I4 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function F4(e, t, n=1, r=0, s=!0) {
    e.pathLength = 1;
    const i = s ? _4 : I4;
    e[i.offset] = W.transform(-r);
    const o = W.transform(t)
      , a = W.transform(n);
    e[i.array] = `${o} ${a}`
}
function Nw(e, {attrX: t, attrY: n, attrScale: r, pathLength: s, pathSpacing: i=1, pathOffset: o=0, ...a}, l, u, d) {
    if (Ef(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: f} = e;
    h.transform && (f.transform = h.transform,
    delete h.transform),
    (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%",
    delete h.transformOrigin),
    f.transform && (f.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box",
    delete h.transformBox),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && F4(h, s, i, o, !1)
}
const jw = () => ({
    ...Rf(),
    attrs: {}
})
  , Pw = e => typeof e == "string" && e.toLowerCase() === "svg";
function z4(e, t, n, r) {
    const s = m.useMemo( () => {
        const i = jw();
        return Nw(i, t, Pw(r), e.transformTemplate, e.style),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const i = {};
        Tw(i, e.style, e),
        s.style = {
            ...i,
            ...s.style
        }
    }
    return s
}
const B4 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Af(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(B4.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function $4(e, t, n, {latestValues: r}, s, i=!1) {
    const a = (Af(e) ? z4 : V4)(t, r, s, e)
      , l = j4(t, typeof e == "string", i)
      , u = e !== m.Fragment ? {
        ...l,
        ...a,
        ref: n
    } : {}
      , {children: d} = t
      , h = m.useMemo( () => He(d) ? d.get() : d, [d]);
    return m.createElement(e, {
        ...u,
        children: h
    })
}
function pg(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Mf(e, t, n, r) {
    if (typeof t == "function") {
        const [s,i] = pg(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [s,i] = pg(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    return t
}
function Ma(e) {
    return He(e) ? e.get() : e
}
function H4({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, s) {
    return {
        latestValues: U4(n, r, s, e),
        renderState: t()
    }
}
function U4(e, t, n, r) {
    const s = {}
      , i = r(e, {});
    for (const f in i)
        s[f] = Ma(i[f]);
    let {initial: o, animate: a} = e;
    const l = nc(e)
      , u = Cw(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const h = d ? a : o;
    if (h && typeof h != "boolean" && !tc(h)) {
        const f = Array.isArray(h) ? h : [h];
        for (let p = 0; p < f.length; p++) {
            const w = Mf(e, f[p]);
            if (w) {
                const {transitionEnd: v, transition: b, ...y} = w;
                for (const g in y) {
                    let x = y[g];
                    if (Array.isArray(x)) {
                        const S = d ? x.length - 1 : 0;
                        x = x[S]
                    }
                    x !== null && (s[g] = x)
                }
                for (const g in v)
                    s[g] = v[g]
            }
        }
    }
    return s
}
const Ew = e => (t, n) => {
    const r = m.useContext(ec)
      , s = m.useContext(Jl)
      , i = () => H4(e, t, r, s);
    return n ? i() : rf(i)
}
;
function Lf(e, t, n) {
    var i;
    const {style: r} = e
      , s = {};
    for (const o in r)
        (He(r[o]) || t.style && He(t.style[o]) || kw(o, e) || ((i = n == null ? void 0 : n.getValue(o)) == null ? void 0 : i.liveStyle) !== void 0) && (s[o] = r[o]);
    return s
}
const W4 = Ew({
    scrapeMotionValuesFromProps: Lf,
    createRenderState: Rf
});
function Rw(e, t, n) {
    const r = Lf(e, t, n);
    for (const s in e)
        if (He(e[s]) || He(t[s])) {
            const i = ui.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            r[i] = e[s]
        }
    return r
}
const K4 = Ew({
    scrapeMotionValuesFromProps: Rw,
    createRenderState: jw
})
  , q4 = Symbol.for("motionComponentSymbol");
function xs(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function G4(e, t, n) {
    return m.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : xs(n) && (n.current = r))
    }
    , [t])
}
const Df = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Q4 = "framerAppearId"
  , Aw = "data-" + Df(Q4)
  , Mw = m.createContext({});
function X4(e, t, n, r, s) {
    var v, b;
    const {visualElement: i} = m.useContext(ec)
      , o = m.useContext(bw)
      , a = m.useContext(Jl)
      , l = m.useContext(Nf).reducedMotion
      , u = m.useRef(null);
    r = r || o.renderer,
    !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const d = u.current
      , h = m.useContext(Mw);
    d && !d.projection && s && (d.type === "html" || d.type === "svg") && Y4(u.current, n, s, h);
    const f = m.useRef(!1);
    m.useInsertionEffect( () => {
        d && f.current && d.update(n, a)
    }
    );
    const p = n[Aw]
      , w = m.useRef(!!p && !((v = window.MotionHandoffIsComplete) != null && v.call(window, p)) && ((b = window.MotionHasOptimisedAnimation) == null ? void 0 : b.call(window, p)));
    return E1( () => {
        d && (f.current = !0,
        window.MotionIsMounted = !0,
        d.updateFeatures(),
        d.scheduleRenderMicrotask(),
        w.current && d.animationState && d.animationState.animateChanges())
    }
    ),
    m.useEffect( () => {
        d && (!w.current && d.animationState && d.animationState.animateChanges(),
        w.current && (queueMicrotask( () => {
            var y;
            (y = window.MotionHandoffMarkAsComplete) == null || y.call(window, p)
        }
        ),
        w.current = !1),
        d.enteringChildren = void 0)
    }
    ),
    d
}
function Y4(e, t, n, r) {
    const {layoutId: s, layout: i, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: d} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : Lw(e.parent)),
    e.projection.setOptions({
        layoutId: s,
        layout: i,
        alwaysMeasureLayout: !!o || a && xs(a),
        visualElement: e,
        animationType: typeof i == "string" ? i : "both",
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: l,
        layoutRoot: u
    })
}
function Lw(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : Lw(e.parent)
}
function Jc(e, {forwardMotionProps: t=!1}={}, n, r) {
    n && k4(n);
    const s = Af(e) ? K4 : W4;
    function i(a, l) {
        let u;
        const d = {
            ...m.useContext(Nf),
            ...a,
            layoutId: Z4(a)
        }
          , {isStatic: h} = d
          , f = E4(a)
          , p = s(a, h);
        if (!h && sf) {
            J4();
            const w = e3(d);
            u = w.MeasureLayout,
            f.visualElement = X4(e, p, d, r, w.ProjectionNode)
        }
        return c.jsxs(ec.Provider, {
            value: f,
            children: [u && f.visualElement ? c.jsx(u, {
                visualElement: f.visualElement,
                ...d
            }) : null, $4(e, a, G4(p, f.visualElement, l), p, h, t)]
        })
    }
    i.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const o = m.forwardRef(i);
    return o[q4] = e,
    o
}
function Z4({layoutId: e}) {
    const t = m.useContext(nf).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function J4(e, t) {
    m.useContext(bw).strict
}
function e3(e) {
    const {drag: t, layout: n} = Js;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
function t3(e, t) {
    if (typeof Proxy > "u")
        return Jc;
    const n = new Map
      , r = (i, o) => Jc(i, o, e, t)
      , s = (i, o) => r(i, o);
    return new Proxy(s,{
        get: (i, o) => o === "create" ? r : (n.has(o) || n.set(o, Jc(o, void 0, e, t)),
        n.get(o))
    })
}
function Dw({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function n3({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function r3(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function eu(e) {
    return e === void 0 || e === 1
}
function Ad({scale: e, scaleX: t, scaleY: n}) {
    return !eu(e) || !eu(t) || !eu(n)
}
function Nr(e) {
    return Ad(e) || Ow(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Ow(e) {
    return mg(e.x) || mg(e.y)
}
function mg(e) {
    return e && e !== "0%"
}
function wl(e, t, n) {
    const r = e - n
      , s = t * r;
    return n + s
}
function gg(e, t, n, r, s) {
    return s !== void 0 && (e = wl(e, s, r)),
    wl(e, n, r) + t
}
function Md(e, t=0, n=1, r, s) {
    e.min = gg(e.min, t, n, r, s),
    e.max = gg(e.max, t, n, r, s)
}
function Vw(e, {x: t, y: n}) {
    Md(e.x, t.translate, t.scale, t.originPoint),
    Md(e.y, n.translate, n.scale, n.originPoint)
}
const yg = .999999999999
  , vg = 1.0000000000001;
function s3(e, t, n, r=!1) {
    const s = n.length;
    if (!s)
        return;
    t.x = t.y = 1;
    let i, o;
    for (let a = 0; a < s; a++) {
        i = n[a],
        o = i.projectionDelta;
        const {visualElement: l} = i.options;
        l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && bs(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        Vw(e, o)),
        r && Nr(i.latestValues) && bs(e, i.latestValues))
    }
    t.x < vg && t.x > yg && (t.x = 1),
    t.y < vg && t.y > yg && (t.y = 1)
}
function ws(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function xg(e, t, n, r, s=.5) {
    const i = fe(e.min, e.max, s);
    Md(e, t, n, i, r)
}
function bs(e, t) {
    xg(e.x, t.x, t.scaleX, t.scale, t.originX),
    xg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function _w(e, t) {
    return Dw(r3(e.getBoundingClientRect(), t))
}
function i3(e, t, n) {
    const r = _w(e, n)
      , {scroll: s} = t;
    return s && (ws(r.x, s.offset.x),
    ws(r.y, s.offset.y)),
    r
}
const wg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ss = () => ({
    x: wg(),
    y: wg()
})
  , bg = () => ({
    min: 0,
    max: 0
})
  , Te = () => ({
    x: bg(),
    y: bg()
})
  , Ld = {
    current: null
}
  , Iw = {
    current: !1
};
function o3() {
    if (Iw.current = !0,
    !!sf)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Ld.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            Ld.current = !1
}
const a3 = new WeakMap;
function l3(e, t, n) {
    for (const r in t) {
        const s = t[r]
          , i = n[r];
        if (He(s))
            e.addValue(r, s);
        else if (He(i))
            e.addValue(r, Ys(s, {
                owner: e
            }));
        else if (i !== s)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Ys(o !== void 0 ? o : s, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Sg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class c3 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: i, visualState: o}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = bf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const f = rt.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f,
            de.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: u} = o;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = s,
        this.options = a,
        this.blockInitialAnimation = !!i,
        this.isControllingVariants = nc(n),
        this.isVariantNode = Cw(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...h} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in h) {
            const p = h[f];
            l[f] !== void 0 && He(p) && p.set(l[f])
        }
    }
    mount(t) {
        var n;
        this.current = t,
        a3.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, s) => this.bindToMotionValue(s, r)),
        Iw.current || o3(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ld.current,
        (n = this.parent) == null || n.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        dr(this.notifyUpdate),
        dr(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = di.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const s = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && de.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let i;
        window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            s(),
            i && i(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Js) {
            const n = Js[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: s} = n;
            if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)),
            this.features[t]) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(),
                i.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Te()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Sg.length; r++) {
            const s = Sg[r];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](),
            delete this.propEventSubscriptions[s]);
            const i = "on" + s
              , o = t[i];
            o && (this.propEventSubscriptions[s] = this.on(s, o))
        }
        this.prevMotionValues = l3(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Ys(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (R1(r) || M1(r)) ? r = parseFloat(r) : !y4(r) && hr.test(n) && (r = fw(t, n)),
        this.setBaseTarget(t, He(r) ? r.get() : r)),
        He(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var i;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = Mf(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0)
            return r;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !He(s) ? s : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new cf),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        kf.render(this.render)
    }
}
class Fw extends c3 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = i4
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        He(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function zw(e, {style: t, vars: n}, r, s) {
    const i = e.style;
    let o;
    for (o in t)
        i[o] = t[o];
    s == null || s.applyProjectionStyles(i, r);
    for (o in n)
        i.setProperty(o, n[o])
}
function u3(e) {
    return window.getComputedStyle(e)
}
class d3 extends Fw {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = zw
    }
    readValueFromInstance(t, n) {
        var r;
        if (di.has(n))
            return (r = this.projection) != null && r.isProjecting ? kd(n) : k5(t, n);
        {
            const s = u3(t)
              , i = (hf(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return _w(t, n)
    }
    build(t, n, r) {
        Ef(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Lf(t, n, r)
    }
}
const Bw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function h3(e, t, n, r) {
    zw(e, t, void 0, r);
    for (const s in t.attrs)
        e.setAttribute(Bw.has(s) ? s : Df(s), t.attrs[s])
}
class f3 extends Fw {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Te
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (di.has(n)) {
            const r = hw(n);
            return r && r.default || 0
        }
        return n = Bw.has(n) ? n : Df(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Rw(t, n, r)
    }
    build(t, n, r) {
        Nw(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, s) {
        h3(t, n, r, s)
    }
    mount(t) {
        this.isSVGTag = Pw(t.tagName),
        super.mount(t)
    }
}
const p3 = (e, t) => Af(e) ? new f3(t) : new d3(t,{
    allowProjection: e !== m.Fragment
});
function As(e, t, n) {
    const r = e.getProps();
    return Mf(r, t, n !== void 0 ? n : r.custom, e)
}
const Dd = e => Array.isArray(e);
function m3(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ys(n))
}
function g3(e) {
    return Dd(e) ? e[e.length - 1] || 0 : e
}
function y3(e, t) {
    const n = As(e, t);
    let {transitionEnd: r={}, transition: s={}, ...i} = n || {};
    i = {
        ...i,
        ...r
    };
    for (const o in i) {
        const a = g3(i[o]);
        m3(e, o, a)
    }
}
function v3(e) {
    return !!(He(e) && e.add)
}
function Od(e, t) {
    const n = e.getValue("willChange");
    if (v3(n))
        return n.add(t);
    if (!n && Tn.WillChange) {
        const r = new Tn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function $w(e) {
    return e.props[Aw]
}
const x3 = e => e !== null;
function w3(e, {repeat: t, repeatType: n="loop"}, r) {
    const s = e.filter(x3)
      , i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !i || r === void 0 ? s[i] : r
}
const b3 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , S3 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , C3 = {
    type: "keyframes",
    duration: .8
}
  , k3 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , T3 = (e, {keyframes: t}) => t.length > 2 ? C3 : di.has(e) ? e.startsWith("scale") ? S3(t[1]) : b3 : k3;
function N3({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...d}) {
    return !!Object.keys(d).length
}
const Of = (e, t, n, r={}, s, i) => o => {
    const a = Sf(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - rn(l);
    const d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: i ? void 0 : s
    };
    N3(a) || Object.assign(d, T3(e, d)),
    d.duration && (d.duration = rn(d.duration)),
    d.repeatDelay && (d.repeatDelay = rn(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
    let h = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (Ed(d),
    d.delay === 0 && (h = !0)),
    (Tn.instantAnimations || Tn.skipAnimations) && (h = !0,
    Ed(d),
    d.delay = 0),
    d.allowFlatten = !a.type && !a.ease,
    h && !i && t.get() !== void 0) {
        const f = w3(d.keyframes, a);
        if (f !== void 0) {
            de.update( () => {
                d.onUpdate(f),
                d.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new wf(d) : new q5(d)
}
;
function j3({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Hw(e, t, {delay: n=0, transitionOverride: r, type: s}={}) {
    let {transition: i=e.getDefaultTransition(), transitionEnd: o, ...a} = t;
    r && (i = r);
    const l = []
      , u = s && e.animationState && e.animationState.getState()[s];
    for (const d in a) {
        const h = e.getValue(d, e.latestValues[d] ?? null)
          , f = a[d];
        if (f === void 0 || u && j3(u, d))
            continue;
        const p = {
            delay: n,
            ...Sf(i || {}, d)
        }
          , w = h.get();
        if (w !== void 0 && !h.isAnimating && !Array.isArray(f) && f === w && !p.velocity)
            continue;
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const y = $w(e);
            if (y) {
                const g = window.MotionHandoffAnimation(y, d, de);
                g !== null && (p.startTime = g,
                v = !0)
            }
        }
        Od(e, d),
        h.start(Of(d, h, f, e.shouldReduceMotion && cw.has(d) ? {
            type: !1
        } : p, e, v));
        const b = h.animation;
        b && l.push(b)
    }
    return o && Promise.all(l).then( () => {
        de.update( () => {
            o && y3(e, o)
        }
        )
    }
    ),
    l
}
function Uw(e, t, n, r=0, s=1) {
    const i = Array.from(e).sort( (u, d) => u.sortNodePosition(d)).indexOf(t)
      , o = e.size
      , a = (o - 1) * r;
    return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r
}
function Vd(e, t, n={}) {
    var l;
    const r = As(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: s=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (s = n.transitionOverride);
    const i = r ? () => Promise.all(Hw(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: d=0, staggerChildren: h, staggerDirection: f} = s;
        return P3(e, t, u, d, h, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = s;
    if (a) {
        const [u,d] = a === "beforeChildren" ? [i, o] : [o, i];
        return u().then( () => d())
    } else
        return Promise.all([i(), o(n.delay)])
}
function P3(e, t, n=0, r=0, s=0, i=1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(Vd(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + Uw(e.variantChildren, l, r, s, i)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function E3(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const s = t.map(i => Vd(e, i, n));
        r = Promise.all(s)
    } else if (typeof t == "string")
        r = Vd(e, t, n);
    else {
        const s = typeof t == "function" ? As(e, t, n.custom) : t;
        r = Promise.all(Hw(e, s, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
function Ww(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const R3 = Pf.length;
function Kw(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Kw(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < R3; n++) {
        const r = Pf[n]
          , s = e.props[r];
        (wo(s) || s === !1) && (t[r] = s)
    }
    return t
}
const A3 = [...jf].reverse()
  , M3 = jf.length;
function L3(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => E3(e, n, r)))
}
function D3(e) {
    let t = L3(e)
      , n = Cg()
      , r = !0;
    const s = l => (u, d) => {
        var f;
        const h = As(e, d, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (h) {
            const {transition: p, transitionEnd: w, ...v} = h;
            u = {
                ...u,
                ...v,
                ...w
            }
        }
        return u
    }
    ;
    function i(l) {
        t = l(e)
    }
    function o(l) {
        const {props: u} = e
          , d = Kw(e.parent) || {}
          , h = []
          , f = new Set;
        let p = {}
          , w = 1 / 0;
        for (let b = 0; b < M3; b++) {
            const y = A3[b]
              , g = n[y]
              , x = u[y] !== void 0 ? u[y] : d[y]
              , S = wo(x)
              , C = y === l ? g.isActive : null;
            C === !1 && (w = b);
            let k = x === d[y] && x !== u[y] && S;
            if (k && r && e.manuallyAnimateOnMount && (k = !1),
            g.protectedKeys = {
                ...p
            },
            !g.isActive && C === null || !x && !g.prevProp || tc(x) || typeof x == "boolean")
                continue;
            const T = O3(g.prevProp, x);
            let N = T || y === l && g.isActive && !k && S || b > w && S
              , P = !1;
            const E = Array.isArray(x) ? x : [x];
            let V = E.reduce(s(y), {});
            C === !1 && (V = {});
            const {prevResolvedValues: L={}} = g
              , I = {
                ...L,
                ...V
            }
              , M = z => {
                N = !0,
                f.has(z) && (P = !0,
                f.delete(z)),
                g.needsAnimating[z] = !0;
                const j = e.getValue(z);
                j && (j.liveStyle = !1)
            }
            ;
            for (const z in I) {
                const j = V[z]
                  , A = L[z];
                if (p.hasOwnProperty(z))
                    continue;
                let _ = !1;
                Dd(j) && Dd(A) ? _ = !Ww(j, A) : _ = j !== A,
                _ ? j != null ? M(z) : f.add(z) : j !== void 0 && f.has(z) ? M(z) : g.protectedKeys[z] = !0
            }
            g.prevProp = x,
            g.prevResolvedValues = V,
            g.isActive && (p = {
                ...p,
                ...V
            }),
            r && e.blockInitialAnimation && (N = !1);
            const H = k && T;
            N && (!H || P) && h.push(...E.map(z => {
                const j = {
                    type: y
                };
                if (typeof z == "string" && r && !H && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: A} = e
                      , _ = As(A, z);
                    if (A.enteringChildren && _) {
                        const {delayChildren: K} = _.transition || {};
                        j.delay = Uw(A.enteringChildren, e, K)
                    }
                }
                return {
                    animation: z,
                    options: j
                }
            }
            ))
        }
        if (f.size) {
            const b = {};
            if (typeof u.initial != "boolean") {
                const y = As(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                y && y.transition && (b.transition = y.transition)
            }
            f.forEach(y => {
                const g = e.getBaseTarget(y)
                  , x = e.getValue(y);
                x && (x.liveStyle = !0),
                b[y] = g ?? null
            }
            ),
            h.push({
                animation: b
            })
        }
        let v = !!h.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1),
        r = !1,
        v ? t(h) : Promise.resolve()
    }
    function a(l, u) {
        var h;
        if (n[l].isActive === u)
            return Promise.resolve();
        (h = e.variantChildren) == null || h.forEach(f => {
            var p;
            return (p = f.animationState) == null ? void 0 : p.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const d = o(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n,
        reset: () => {
            n = Cg()
        }
    }
}
function O3(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ww(t, e) : !1
}
function Cr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Cg() {
    return {
        animate: Cr(!0),
        whileInView: Cr(),
        whileHover: Cr(),
        whileTap: Cr(),
        whileDrag: Cr(),
        whileFocus: Cr(),
        exit: Cr()
    }
}
class xr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class V3 extends xr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = D3(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        tc(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let _3 = 0;
class I3 extends xr {
    constructor() {
        super(...arguments),
        this.id = _3++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const s = this.node.animationState.setActive("exit", !t);
        n && !t && s.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const F3 = {
    animation: {
        Feature: V3
    },
    exit: {
        Feature: I3
    }
};
function So(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function _o(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const z3 = e => t => Tf(t) && e(t, _o(t));
function Hi(e, t, n, r) {
    return So(e, t, z3(n), r)
}
const qw = 1e-4
  , B3 = 1 - qw
  , $3 = 1 + qw
  , Gw = .01
  , H3 = 0 - Gw
  , U3 = 0 + Gw;
function Xe(e) {
    return e.max - e.min
}
function W3(e, t, n) {
    return Math.abs(e - t) <= n
}
function kg(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = fe(t.min, t.max, e.origin),
    e.scale = Xe(n) / Xe(t),
    e.translate = fe(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= B3 && e.scale <= $3 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= H3 && e.translate <= U3 || isNaN(e.translate)) && (e.translate = 0)
}
function Ui(e, t, n, r) {
    kg(e.x, t.x, n.x, r ? r.originX : void 0),
    kg(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Tg(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Xe(t)
}
function K3(e, t, n) {
    Tg(e.x, t.x, n.x),
    Tg(e.y, t.y, n.y)
}
function Ng(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Xe(t)
}
function bl(e, t, n) {
    Ng(e.x, t.x, n.x),
    Ng(e.y, t.y, n.y)
}
function yt(e) {
    return [e("x"), e("y")]
}
const Qw = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , jg = (e, t) => Math.abs(e - t);
function q3(e, t) {
    const n = jg(e.x, t.x)
      , r = jg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Xw {
    constructor(t, n, {transformPagePoint: r, contextWindow: s=window, dragSnapToOrigin: i=!1, distanceThreshold: o=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = nu(this.lastMoveEventInfo, this.history)
              , p = this.startEvent !== null
              , w = q3(f.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!p && !w)
                return;
            const {point: v} = f
              , {timestamp: b} = Ae;
            this.history.push({
                ...v,
                timestamp: b
            });
            const {onStart: y, onMove: g} = this.handlers;
            p || (y && y(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            g && g(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, p) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = tu(p, this.transformPagePoint),
            de.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, p) => {
            this.end();
            const {onEnd: w, onSessionEnd: v, resumeAnimation: b} = this.handlers;
            if (this.dragSnapToOrigin && b && b(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = nu(f.type === "pointercancel" ? this.lastMoveEventInfo : tu(p, this.transformPagePoint), this.history);
            this.startEvent && w && w(f, y),
            v && v(f, y)
        }
        ,
        !Tf(t))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = o,
        this.contextWindow = s || window;
        const a = _o(t)
          , l = tu(a, this.transformPagePoint)
          , {point: u} = l
          , {timestamp: d} = Ae;
        this.history = [{
            ...u,
            timestamp: d
        }];
        const {onSessionStart: h} = n;
        h && h(t, nu(l, this.history)),
        this.removeListeners = Do(Hi(this.contextWindow, "pointermove", this.handlePointerMove), Hi(this.contextWindow, "pointerup", this.handlePointerUp), Hi(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        dr(this.updatePoint)
    }
}
function tu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Pg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function nu({point: e}, t) {
    return {
        point: e,
        delta: Pg(e, Yw(t)),
        offset: Pg(e, G3(t)),
        velocity: Q3(t, .1)
    }
}
function G3(e) {
    return e[0]
}
function Yw(e) {
    return e[e.length - 1]
}
function Q3(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const s = Yw(e);
    for (; n >= 0 && (r = e[n],
    !(s.timestamp - r.timestamp > rn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = St(s.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (s.x - r.x) / i,
        y: (s.y - r.y) / i
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function X3(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
}
function Eg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function Y3(e, {top: t, left: n, bottom: r, right: s}) {
    return {
        x: Eg(e.x, n, s),
        y: Eg(e.y, t, r)
    }
}
function Rg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function Z3(e, t) {
    return {
        x: Rg(e.x, t.x),
        y: Rg(e.y, t.y)
    }
}
function J3(e, t) {
    let n = .5;
    const r = Xe(e)
      , s = Xe(t);
    return s > r ? n = yo(t.min, t.max - r, e.min) : r > s && (n = yo(e.min, e.max - s, t.min)),
    kn(0, 1, n)
}
function eR(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const _d = .35;
function tR(e=_d) {
    return e === !1 ? e = 0 : e === !0 && (e = _d),
    {
        x: Ag(e, "left", "right"),
        y: Ag(e, "top", "bottom")
    }
}
function Ag(e, t, n) {
    return {
        min: Mg(e, t),
        max: Mg(e, n)
    }
}
function Mg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const nR = new WeakMap;
class rR {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Te(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: s} = this.visualElement;
        if (s && s.isPresent === !1)
            return;
        const i = h => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(_o(h).point)
        }
          , o = (h, f) => {
            const {drag: p, dragPropagation: w, onDragStart: v} = this.getProps();
            if (p && !w && (this.openDragLock && this.openDragLock(),
            this.openDragLock = c4(p),
            !this.openDragLock))
                return;
            this.latestPointerEvent = h,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            yt(y => {
                let g = this.getAxisMotionValue(y).get() || 0;
                if (sn.test(g)) {
                    const {projection: x} = this.visualElement;
                    if (x && x.layout) {
                        const S = x.layout.layoutBox[y];
                        S && (g = Xe(S) * (parseFloat(g) / 100))
                    }
                }
                this.originPoint[y] = g
            }
            ),
            v && de.postRender( () => v(h, f)),
            Od(this.visualElement, "transform");
            const {animationState: b} = this.visualElement;
            b && b.setActive("whileDrag", !0)
        }
          , a = (h, f) => {
            this.latestPointerEvent = h,
            this.latestPanInfo = f;
            const {dragPropagation: p, dragDirectionLock: w, onDirectionLock: v, onDrag: b} = this.getProps();
            if (!p && !this.openDragLock)
                return;
            const {offset: y} = f;
            if (w && this.currentDirection === null) {
                this.currentDirection = sR(y),
                this.currentDirection !== null && v && v(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, y),
            this.updateAxis("y", f.point, y),
            this.visualElement.render(),
            b && b(h, f)
        }
          , l = (h, f) => {
            this.latestPointerEvent = h,
            this.latestPanInfo = f,
            this.stop(h, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => yt(h => {
            var f;
            return this.getAnimationState(h) === "paused" && ((f = this.getAxisMotionValue(h).animation) == null ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: d} = this.getProps();
        this.panSession = new Xw(t,{
            onSessionStart: i,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: d,
            distanceThreshold: r,
            contextWindow: Qw(this.visualElement)
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , s = n || this.latestPanInfo
          , i = this.isDragging;
        if (this.cancel(),
        !i || !s || !r)
            return;
        const {velocity: o} = s;
        this.startAnimation(o);
        const {onDragEnd: a} = this.getProps();
        a && de.postRender( () => a(r, s))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: s} = this.getProps();
        if (!r || !pa(t, s, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = X3(o, this.constraints[t], this.elastic[t])),
        i.set(o)
    }
    resolveConstraints() {
        var i;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout
          , s = this.constraints;
        t && xs(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Y3(r.layoutBox, t) : this.constraints = !1,
        this.elastic = tR(n),
        s !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && yt(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = eR(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !xs(t))
            return !1;
        const r = t.current
          , {projection: s} = this.visualElement;
        if (!s || !s.layout)
            return !1;
        const i = i3(r, s.root, this.visualElement.getTransformPagePoint());
        let o = Z3(s.layout.layoutBox, i);
        if (n) {
            const a = n(n3(o));
            this.hasMutatedConstraints = !!a,
            a && (o = Dw(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = yt(d => {
            if (!pa(d, n, this.currentDirection))
                return;
            let h = l && l[d] || {};
            o && (h = {
                min: 0,
                max: 0
            });
            const f = s ? 200 : 1e6
              , p = s ? 40 : 1e7
              , w = {
                type: "inertia",
                velocity: r ? t[d] : 0,
                bounceStiffness: f,
                bounceDamping: p,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...h
            };
            return this.startAxisValueAnimation(d, w)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Od(this.visualElement, t),
        r.start(Of(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        yt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        yt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , s = r[n];
        return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        yt(n => {
            const {drag: r} = this.getProps();
            if (!pa(n, r, this.currentDirection))
                return;
            const {projection: s} = this.visualElement
              , i = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const {min: o, max: a} = s.layout.layoutBox[n];
                i.set(t[n] - fe(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!xs(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const s = {
            x: 0,
            y: 0
        };
        yt(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                s[o] = J3({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        yt(o => {
            if (!pa(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: u} = this.constraints[o];
            a.set(fe(l, u, s[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        nR.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Hi(t, "pointerdown", l => {
            const {drag: u, dragListener: d=!0} = this.getProps();
            u && d && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            xs(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: s} = this.visualElement
          , i = s.addEventListener("measure", r);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        de.read(r);
        const o = So(window, "resize", () => this.scalePositionWithinConstraints())
          , a = s.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
            this.isDragging && u && (yt(d => {
                const h = this.getAxisMotionValue(d);
                h && (this.originPoint[d] += l[d].translate,
                h.set(h.get() + l[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            i(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: s=!1, dragConstraints: i=!1, dragElastic: o=_d, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function pa(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function sR(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class iR extends xr {
    constructor(t) {
        super(t),
        this.removeGroupControls = kt,
        this.removeListeners = kt,
        this.controls = new rR(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || kt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Lg = e => (t, n) => {
    e && de.postRender( () => e(t, n))
}
;
class oR extends xr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = kt
    }
    onPointerDown(t) {
        this.session = new Xw(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Qw(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s} = this.node.getProps();
        return {
            onSessionStart: Lg(t),
            onStart: Lg(n),
            onMove: r,
            onEnd: (i, o) => {
                delete this.session,
                s && de.postRender( () => s(i, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Hi(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const La = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Dg(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ki = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (W.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Dg(e, t.target.x)
          , r = Dg(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , aR = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , s = hr.parse(e);
        if (s.length > 5)
            return r;
        const i = hr.createTransformer(e)
          , o = typeof s[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        s[0 + o] /= a,
        s[1 + o] /= l;
        const u = fe(a, l, .5);
        return typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
    }
};
let ru = !1;
class lR extends m.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s} = this.props
          , {projection: i} = t;
        R4(cR),
        i && (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        ru && i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
        })),
        La.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: s, isPresent: i} = this.props
          , {projection: o} = r;
        return o && (o.isPresent = i,
        ru = !0,
        s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== i && (i ? o.promote() : o.relegate() || de.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        kf.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: s} = t;
        ru = !0,
        s && (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Zw(e) {
    const [t,n] = ww()
      , r = m.useContext(nf);
    return c.jsx(lR, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: m.useContext(Mw),
        isPresent: t,
        safeToRemove: n
    })
}
const cR = {
    borderRadius: {
        ...ki,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ki,
    borderTopRightRadius: ki,
    borderBottomLeftRadius: ki,
    borderBottomRightRadius: ki,
    boxShadow: aR
};
function uR(e, t, n) {
    const r = He(e) ? e : Ys(e);
    return r.start(Of("", r, t, n)),
    r.animation
}
const dR = (e, t) => e.depth - t.depth;
class hR {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        of(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        af(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(dR),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function fR(e, t) {
    const n = rt.now()
      , r = ({timestamp: s}) => {
        const i = s - n;
        i >= t && (dr(r),
        e(i - t))
    }
    ;
    return de.setup(r, !0),
    () => dr(r)
}
const Jw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , pR = Jw.length
  , Og = e => typeof e == "string" ? parseFloat(e) : e
  , Vg = e => typeof e == "number" || W.test(e);
function mR(e, t, n, r, s, i) {
    s ? (e.opacity = fe(0, n.opacity ?? 1, gR(r)),
    e.opacityExit = fe(t.opacity ?? 1, 0, yR(r))) : i && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < pR; o++) {
        const a = `border${Jw[o]}Radius`;
        let l = _g(t, a)
          , u = _g(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Vg(l) === Vg(u) ? (e[a] = Math.max(fe(Og(l), Og(u), r), 0),
        (sn.test(u) || sn.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r))
}
function _g(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const gR = eb(0, .5, z1)
  , yR = eb(.5, .95, kt);
function eb(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(yo(e, t, r))
}
function Ig(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Lt(e, t) {
    Ig(e.x, t.x),
    Ig(e.y, t.y)
}
function Fg(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function zg(e, t, n, r, s) {
    return e -= t,
    e = wl(e, 1 / n, r),
    s !== void 0 && (e = wl(e, 1 / s, r)),
    e
}
function vR(e, t=0, n=1, r=.5, s, i=e, o=e) {
    if (sn.test(t) && (t = parseFloat(t),
    t = fe(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = fe(i.min, i.max, r);
    e === i && (a -= t),
    e.min = zg(e.min, t, n, a, s),
    e.max = zg(e.max, t, n, a, s)
}
function Bg(e, t, [n,r,s], i, o) {
    vR(e, t[n], t[r], t[s], t.scale, i, o)
}
const xR = ["x", "scaleX", "originX"]
  , wR = ["y", "scaleY", "originY"];
function $g(e, t, n, r) {
    Bg(e.x, t, xR, n ? n.x : void 0, r ? r.x : void 0),
    Bg(e.y, t, wR, n ? n.y : void 0, r ? r.y : void 0)
}
function Hg(e) {
    return e.translate === 0 && e.scale === 1
}
function tb(e) {
    return Hg(e.x) && Hg(e.y)
}
function Ug(e, t) {
    return e.min === t.min && e.max === t.max
}
function bR(e, t) {
    return Ug(e.x, t.x) && Ug(e.y, t.y)
}
function Wg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function nb(e, t) {
    return Wg(e.x, t.x) && Wg(e.y, t.y)
}
function Kg(e) {
    return Xe(e.x) / Xe(e.y)
}
function qg(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class SR {
    constructor() {
        this.members = []
    }
    add(t) {
        of(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (af(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(s => t === s);
        if (n === 0)
            return !1;
        let r;
        for (let s = n; s >= 0; s--) {
            const i = this.members[s];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: s} = t.options;
            s === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function CR(e, t, n) {
    let r = "";
    const s = e.x.translate / t.x
      , i = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: d, rotateX: h, rotateY: f, skewX: p, skewY: w} = n;
        u && (r = `perspective(${u}px) ${r}`),
        d && (r += `rotate(${d}deg) `),
        h && (r += `rotateX(${h}deg) `),
        f && (r += `rotateY(${f}deg) `),
        p && (r += `skewX(${p}deg) `),
        w && (r += `skewY(${w}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const su = ["", "X", "Y", "Z"]
  , kR = 1e3;
let TR = 0;
function iu(e, t, n, r) {
    const {latestValues: s} = t;
    s[e] && (n[e] = s[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function rb(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = $w(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: s, layoutId: i} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", de, !(s || i))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && rb(r)
}
function sb({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = TR++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(PR),
                this.nodes.forEach(MR),
                this.nodes.forEach(LR),
                this.nodes.forEach(ER)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new hR)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new cf),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = xw(o) && !m4(o),
            this.instance = o;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let d, h = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                de.read( () => {
                    h = window.innerWidth
                }
                ),
                e(o, () => {
                    const p = window.innerWidth;
                    p !== h && (h = p,
                    this.root.updateBlockedByResize = !0,
                    d && d(),
                    d = fR(f, 250),
                    La.hasAnimatedSinceResize && (La.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Xg)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: p}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || u.getDefaultTransition() || IR
                  , {onLayoutAnimationStart: v, onLayoutAnimationComplete: b} = u.getProps()
                  , y = !this.targetLayout || !nb(this.targetLayout, p)
                  , g = !h && f;
                if (this.options.layoutRoot || this.resumeFrom || g || h && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const x = {
                        ...Sf(w, "layout"),
                        onPlay: v,
                        onComplete: b
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0,
                    x.type = !1),
                    this.startAnimation(x),
                    this.setAnimationOrigin(d, g)
                } else
                    h || Xg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            dr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(DR),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && rb(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const h = this.path[d];
                h.shouldResetTransform = !0,
                h.updateScroll("snapshot"),
                h.options.layoutRoot && h.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Gg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Qg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(AR),
            this.nodes.forEach(NR),
            this.nodes.forEach(jR)) : this.nodes.forEach(Qg),
            this.clearAllSnapshots();
            const a = rt.now();
            Ae.delta = kn(0, 1e3 / 60, a - Ae.timestamp),
            Ae.timestamp = a,
            Ae.isProcessing = !0,
            qc.update.process(Ae),
            qc.preRender.process(Ae),
            qc.render.process(Ae),
            Ae.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            kf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(RR),
            this.sharedNodes.forEach(OR)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            de.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            de.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Xe(this.snapshot.measuredBox.x) && !Xe(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Te(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!s)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !tb(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , d = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || Nr(this.latestValues) || d) && (s(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            FR(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: o} = this.options;
            if (!o)
                return Te();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(zR))) {
                const {scroll: d} = this.root;
                d && (ws(a.x, d.offset.x),
                ws(a.y, d.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = Te();
            if (Lt(a, o),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u]
                  , {scroll: h, options: f} = d;
                d !== this.root && h && f.layoutScroll && (h.wasRoot && Lt(a, o),
                ws(a.x, h.offset.x),
                ws(a.y, h.offset.y))
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = Te();
            Lt(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && bs(l, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                Nr(d.latestValues) && bs(l, d.latestValues)
            }
            return Nr(this.latestValues) && bs(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = Te();
            Lt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Nr(u.latestValues))
                    continue;
                Ad(u.latestValues) && u.updateSnapshot();
                const d = Te()
                  , h = u.measurePageBox();
                Lt(d, h),
                $g(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return Nr(this.latestValues) && $g(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var p;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: d, layoutId: h} = this.options;
            if (!this.layout || !(d || h))
                return;
            this.resolvedRelativeTargetAt = Ae.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Te(),
            this.targetWithTransforms = Te()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            K3(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Lt(this.target, this.layout.layoutBox),
            Vw(this.target, this.targetDelta)) : Lt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ad(this.parent.latestValues) || Ow(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(o, a, l) {
            this.relativeParent = o,
            this.linkedParentVersion = o.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Te(),
            this.relativeTargetOrigin = Te(),
            bl(this.relativeTargetOrigin, a, l),
            Lt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var w;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (w = this.parent) != null && w.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Ae.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: d} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || d))
                return;
            Lt(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
              , f = this.treeScale.y;
            s3(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox,
            o.targetWithTransforms = Te());
            const {target: p} = o;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Fg(this.prevProjectionDelta.x, this.projectionDelta.x),
            Fg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ui(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
            (this.treeScale.x !== h || this.treeScale.y !== f || !qg(this.projectionDelta.x, this.prevProjectionDelta.x) || !qg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", p))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ss(),
            this.projectionDelta = Ss(),
            this.projectionDeltaWithTransform = Ss()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , h = Ss();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Te()
              , p = l ? l.source : void 0
              , w = this.layout ? this.layout.source : void 0
              , v = p !== w
              , b = this.getStack()
              , y = !b || b.members.length <= 1
              , g = !!(v && !y && this.options.crossfade === !0 && !this.path.some(_R));
            this.animationProgress = 0;
            let x;
            this.mixTargetDelta = S => {
                const C = S / 1e3;
                Yg(h.x, o.x, C),
                Yg(h.y, o.y, C),
                this.setTargetDelta(h),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                VR(this.relativeTarget, this.relativeTargetOrigin, f, C),
                x && bR(this.relativeTarget, x) && (this.isProjectionDirty = !1),
                x || (x = Te()),
                Lt(x, this.relativeTarget)),
                v && (this.animationValues = d,
                mR(d, u, this.latestValues, C, g, y)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (dr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = de.update( () => {
                La.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Ys(0)),
                this.currentAnimation = uR(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        o.onUpdate && o.onUpdate(d)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(kR),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: d} = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && ib(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Te();
                    const h = Xe(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + h;
                    const f = Xe(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + f
                }
                Lt(a, l),
                bs(a, d),
                Ui(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new SR),
            this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && iu("z", o, u, this.animationValues);
            for (let d = 0; d < su.length; d++)
                iu(`rotate${su[d]}`, o, u, this.animationValues),
                iu(`skew${su[d]}`, o, u, this.animationValues);
            o.render();
            for (const d in u)
                o.setStaticValue(d, u[d]),
                this.animationValues && (this.animationValues[d] = u[d]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                o.visibility = "",
                o.opacity = "",
                o.pointerEvents = Ma(a == null ? void 0 : a.pointerEvents) || "",
                o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                o.pointerEvents = Ma(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !Nr(this.latestValues) && (o.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const d = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let h = CR(this.projectionDeltaWithTransform, this.treeScale, d);
            l && (h = l(d, h)),
            o.transform = h;
            const {x: f, y: p} = this.projectionDelta;
            o.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`,
            u.animationValues ? o.opacity = u === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : o.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const w in bo) {
                if (d[w] === void 0)
                    continue;
                const {correct: v, applyTo: b, isCSSVariable: y} = bo[w]
                  , g = h === "none" ? d[w] : v(d[w], u);
                if (b) {
                    const x = b.length;
                    for (let S = 0; S < x; S++)
                        o[b[S]] = g
                } else
                    y ? this.options.visualElement.renderState.vars[w] = g : o[w] = g
            }
            this.options.layoutId && (o.pointerEvents = u === this ? Ma(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Gg),
            this.root.sharedNodes.clear()
        }
    }
}
function NR(e) {
    e.updateLayout()
}
function jR(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: s} = e.layout
          , {animationType: i} = e.options
          , o = t.source !== e.layout.source;
        i === "size" ? yt(h => {
            const f = o ? t.measuredBox[h] : t.layoutBox[h]
              , p = Xe(f);
            f.min = r[h].min,
            f.max = f.min + p
        }
        ) : ib(i, t.layoutBox, r) && yt(h => {
            const f = o ? t.measuredBox[h] : t.layoutBox[h]
              , p = Xe(r[h]);
            f.max = f.min + p,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[h].max = e.relativeTarget[h].min + p)
        }
        );
        const a = Ss();
        Ui(a, r, t.layoutBox);
        const l = Ss();
        o ? Ui(l, e.applyTransform(s, !0), t.measuredBox) : Ui(l, r, t.layoutBox);
        const u = !tb(a);
        let d = !1;
        if (!e.resumeFrom) {
            const h = e.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {snapshot: f, layout: p} = h;
                if (f && p) {
                    const w = Te();
                    bl(w, t.layoutBox, f.layoutBox);
                    const v = Te();
                    bl(v, r, p.layoutBox),
                    nb(w, v) || (d = !0),
                    h.options.layoutRoot && (e.relativeTarget = v,
                    e.relativeTargetOrigin = w,
                    e.relativeParent = h)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function PR(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function ER(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function RR(e) {
    e.clearSnapshot()
}
function Gg(e) {
    e.clearMeasurements()
}
function Qg(e) {
    e.isLayoutDirty = !1
}
function AR(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Xg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function MR(e) {
    e.resolveTargetDelta()
}
function LR(e) {
    e.calcProjection()
}
function DR(e) {
    e.resetSkewAndRotation()
}
function OR(e) {
    e.removeLeadSnapshot()
}
function Yg(e, t, n) {
    e.translate = fe(t.translate, 0, n),
    e.scale = fe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Zg(e, t, n, r) {
    e.min = fe(t.min, n.min, r),
    e.max = fe(t.max, n.max, r)
}
function VR(e, t, n, r) {
    Zg(e.x, t.x, n.x, r),
    Zg(e.y, t.y, n.y, r)
}
function _R(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const IR = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Jg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , e0 = Jg("applewebkit/") && !Jg("chrome/") ? Math.round : kt;
function t0(e) {
    e.min = e0(e.min),
    e.max = e0(e.max)
}
function FR(e) {
    t0(e.x),
    t0(e.y)
}
function ib(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !W3(Kg(t), Kg(n), .2)
}
function zR(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const BR = sb({
    attachResizeListener: (e, t) => So(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , ou = {
    current: void 0
}
  , ob = sb({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!ou.current) {
            const e = new BR({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            ou.current = e
        }
        return ou.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , $R = {
    pan: {
        Feature: oR
    },
    drag: {
        Feature: iR,
        ProjectionNode: ob,
        MeasureLayout: Zw
    }
};
function n0(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const s = "onHover" + n
      , i = r[s];
    i && de.postRender( () => i(t, _o(t)))
}
class HR extends xr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = u4(t, (n, r) => (n0(this.node, r, "Start"),
        s => n0(this.node, s, "End"))))
    }
    unmount() {}
}
class UR extends xr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Do(So(this.node.current, "focus", () => this.onFocus()), So(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function r0(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const s = "onTap" + (n === "End" ? "" : n)
      , i = r[s];
    i && de.postRender( () => i(t, _o(t)))
}
class WR extends xr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = p4(t, (n, r) => (r0(this.node, r, "Start"),
        (s, {success: i}) => r0(this.node, s, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Id = new WeakMap
  , au = new WeakMap
  , KR = e => {
    const t = Id.get(e.target);
    t && t(e)
}
  , qR = e => {
    e.forEach(KR)
}
;
function GR({root: e, ...t}) {
    const n = e || document;
    au.has(n) || au.set(n, {});
    const r = au.get(n)
      , s = JSON.stringify(t);
    return r[s] || (r[s] = new IntersectionObserver(qR,{
        root: e,
        ...t
    })),
    r[s]
}
function QR(e, t, n) {
    const r = GR(t);
    return Id.set(e, n),
    r.observe(e),
    () => {
        Id.delete(e),
        r.unobserve(e)
    }
}
const XR = {
    some: 0,
    all: 1
};
class YR extends xr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: s="some", once: i} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof s == "number" ? s : XR[s]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            i && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: d, onViewportLeave: h} = this.node.getProps()
              , f = u ? d : h;
            f && f(l)
        }
        ;
        return QR(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(ZR(t, n)) && this.startObserver()
    }
    unmount() {}
}
function ZR({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const JR = {
    inView: {
        Feature: YR
    },
    tap: {
        Feature: WR
    },
    focus: {
        Feature: UR
    },
    hover: {
        Feature: HR
    }
}
  , eA = {
    layout: {
        ProjectionNode: ob,
        MeasureLayout: Zw
    }
}
  , tA = {
    ...F3,
    ...JR,
    ...$R,
    ...eA
}
  , Me = t3(tA, p3)
  , Ti = [{
    id: 1,
    name: "Bác Nguyễn Phú Trọng",
    title: "Tổng Bí thư",
    category: "Chính trị",
    description: "Người cộng sản kiên trung, tấm gương sáng ngời về đạo đức cách mạng",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nguyen_Phu_Trong_HN2023.jpg",
    detailedStory: `
Tổng Bí thư Nguyễn Phú Trọng (1944–2024) là nhà lãnh đạo lỗi lạc, trọn đời vì nước, vì dân. Ông là biểu tượng của sự kiên định, trí tuệ và bản lĩnh, người đã nâng tầm uy tín của Việt Nam trên trường quốc tế qua trường phái "Ngoại giao cây tre".

Đặc biệt, ông là tấm gương mẫu mực về tu dưỡng đạo đức cách mạng "Cần, kiệm, liêm, chính, chí công vô tư". Sự nghiệp "đốt lò" phòng chống tham nhũng của ông đã củng cố vững chắc niềm tin của nhân dân vào Đảng. Lối sống giản dị, liêm khiết của ông mãi là bài học lớn cho các thế hệ sau.
`,
    qualities: ["Cần Kiệm Liêm Chính", "Kiên trung", "Tận tụy vì dân"]
}, {
    id: 2,
    name: "Bác Võ Nguyên Giáp",
    title: "Đại tướng - Tổng Tư lệnh",
    category: "Quân sự",
    description: "Anh Văn của nhân dân, thiên tài quân sự lừng danh thế giới",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltRq9lL1oZRcJ0DlNrnWuvDZpZytrdjgqeg&s",
    detailedStory: `
Đại tướng Võ Nguyên Giáp (1911–2013) là người học trò xuất sắc của Chủ tịch Hồ Chí Minh, người Anh Cả của Quân đội Nhân dân Việt Nam.

Với chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu", ông được thế giới tôn vinh là một trong những danh tướng vĩ đại nhất lịch sử. Không chỉ tài ba trong quân sự, Đại tướng còn được kính trọng tuyệt đối bởi đức độ, sự khiêm cung và lòng yêu thương sâu sắc dành cho chiến sĩ, đồng bào.
`,
    qualities: ["Trí - Dũng - Nhân", "Yêu nước thương dân", "Thiên tài quân sự"]
}, {
    id: 3,
    name: "Võ Thị Sáu",
    title: "Anh hùng Lực lượng vũ trang",
    category: "Quân sự",
    description: "Nữ chiến sĩ Đất Đỏ kiên cường, bất khuất trước họng súng quân thù",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzl8H49skdsYpbymHN4GDzdDRwIvTSW6Cmw&s",
    detailedStory: `
Chị Võ Thị Sáu (1933–1952) tham gia cách mạng từ năm 14 tuổi. Dù tuổi đời còn rất trẻ, chị đã khiến thực dân Pháp khiếp sợ bởi sự dũng cảm và mưu trí.

Hy sinh hiên ngang tại Côn Đảo khi mới 19 tuổi, chị đã để lại huyền thoại bất tử về người con gái Đất Đỏ. Hình ảnh chị cài hoa lên mái tóc trước khi ra pháp trường đã trở thành biểu tượng đẹp đẽ nhất của chủ nghĩa anh hùng cách mạng Việt Nam.
`,
    qualities: ["Kiên cường", "Lý tưởng cao đẹp", "Hy sinh vì độc lập"]
}, {
    id: 4,
    name: "GS. Ngô Bảo Châu",
    title: "Nhà Toán học",
    category: "Khoa học",
    description: "Người Việt Nam đầu tiên giành giải thưởng Fields danh giá",
    image: "https://viasm.edu.vn/viasm/Kooboo-Resource/ResizeImage?url=%2FCms_Data%2FContents%2Fviasm%2FMedia%2Fnhanvien%2Fngobaochau2.jpg&width=624&height=840&preserverAspectRatio=True&quality=95",
    detailedStory: `
Giáo sư Ngô Bảo Châu (sinh năm 1972) là niềm tự hào của trí tuệ Việt Nam. Năm 2010, ông xuất sắc giành Huy chương Fields - giải thưởng được ví như Nobel của Toán học, đưa Việt Nam trở thành quốc gia thứ 2 tại Châu Á đạt được vinh dự này.

Thành công của ông là minh chứng cho thấy người Việt Nam hoàn toàn có thể chinh phục những đỉnh cao tri thức nhân loại nếu có đam mê và sự kiên trì.
`,
    qualities: ["Trí tuệ", "Sáng tạo", "Làm rạng danh Tổ quốc"]
}, {
    id: 5,
    name: "Nguyễn Ngọc Ký",
    title: "Nhà giáo Ưu tú",
    category: "Giáo dục",
    description: "Huyền thoại về nghị lực phi thường, viết đời mình bằng đôi chân",
    image: "https://image.congan.com.vn/thumbnail/CATP-474-2022-9-28/nguyen-ngoc-ky_1.jpg",
    detailedStory: `
Thầy Nguyễn Ngọc Ký (1947–2022) bị liệt hai tay từ năm 4 tuổi. Không đầu hàng số phận, cậu bé Ký đã tập viết bằng chân, vượt qua bao đau đớn để đến trường.

Ông trở thành người thầy giáo đầu tiên dạy học bằng chân, là tấm gương sáng ngời về tinh thần "Tàn nhưng không phế". Cuộc đời ông đã truyền cảm hứng mạnh mẽ cho nhiều thế hệ học sinh Việt Nam về ý chí vươn lên nghịch cảnh.
`,
    qualities: ["Nghị lực phi thường", "Hiếu học", "Lạc quan"]
}, {
    id: 6,
    name: "Nguyễn Văn Tuấn",
    title: "Thiếu úy Biên phòng",
    category: "Quân sự",
    description: "Lá chắn thép nơi biên cương, hy sinh hạnh phúc riêng vì bình yên đất nước",
    image: "https://bcp.cdnchinhphu.vn/334894974524682240/2022/6/22/nguyenanhtuan-1655877893330856043203.jpg",
    detailedStory: `
Trong cuộc chiến chống đại dịch COVID-19, Thiếu úy Nguyễn Văn Tuấn là đại diện cho hàng ngàn chiến sĩ biên phòng đã "ăn lán, ngủ rừng" suốt nhiều tháng ròng để giữ chặt biên giới.

Anh đã gác lại việc riêng, thậm chí không thể về chịu tang cha để hoàn thành nhiệm vụ. Sự hy sinh thầm lặng của anh và đồng đội là minh chứng rõ nét cho phẩm chất "Bộ đội Cụ Hồ" trong thời bình: Vì nhân dân quên mình.
`,
    qualities: ["Trách nhiệm", "Hy sinh thầm lặng", "Kỷ luật thép"]
}, {
    id: 7,
    name: "Đặng Văn Cương",
    title: "Hiệu trưởng trường Mường Lống",
    category: "Giáo dục",
    description: "Người cha của những đứa trẻ vùng cao, cõng chữ lên non",
    image: "https://storage.baoquangngai.vn/data/dataimages/202011/original/resize_images2326862_thay_cuong.jpg",
    detailedStory: `
Thầy Đặng Văn Cương đã dành cả tuổi thanh xuân để bám bản tại xã Mường Lống (Kỳ Sơn, Nghệ An). Không chỉ dạy chữ, thầy còn đi xin từng bữa ăn, cái áo ấm và nhận nuôi những học sinh mồ côi, cơ nhỡ.

Tình yêu thương của thầy đã giúp hàng trăm đứa trẻ người Mông không phải bỏ học. Thầy là hiện thân của lòng nhân ái và sự cống hiến không mệt mỏi cho sự nghiệp trồng người nơi gian khó.
`,
    qualities: ["Nhân ái", "Tận tụy", "Cống hiến"]
}, {
    id: 8,
    name: "Nguyễn Thị Ánh Tuyết",
    title: "Thủ khoa Đại học Y",
    category: "Khoa học",
    description: "Bông hoa xương rồng trên cát, vượt nghịch cảnh để chạm ước mơ",
    image: "https://cdn.eva.vn/upload/4-2024/images/phuocnt/nu-thu-khoa-nganh-hot-anh-au-bai-38-1734341877-658-width660height550.jpg",
    detailedStory: `
Mồ côi cha mẹ, sống nương nhờ bà ngoại trong căn nhà dột nát, nhưng Nguyễn Thị Ánh Tuyết chưa bao giờ từ bỏ giấc mơ blouse trắng. Vừa đi học, vừa đi làm thêm vất vả, em vẫn xuất sắc trở thành Thủ khoa.

Câu chuyện của Tuyết là minh chứng sống động cho tư tưởng: Hoàn cảnh không quyết định số phận, chính ý chí và sự nỗ lực không ngừng nghỉ mới là thước đo giá trị con người.
`,
    qualities: ["Tự lập", "Hiếu học", "Kiên cường"]
}]
  , nA = ({person: e, onClose: t, onPrev: n, onNext: r}) => (m.useEffect( () => {
    const s = i => {
        i.key === "Escape" && t(),
        i.key === "ArrowLeft" && n(),
        i.key === "ArrowRight" && r()
    }
    ;
    return window.addEventListener("keydown", s),
    () => window.removeEventListener("keydown", s)
}
, [t, n, r]),
e ? c.jsxs("div", {
    className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6",
    children: [c.jsx(Me.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: t,
        className: "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
    }), c.jsx("button", {
        onClick: s => {
            s.stopPropagation(),
            n()
        }
        ,
        className: "absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block",
        children: c.jsx(ak, {
            size: 48
        })
    }), c.jsx("button", {
        onClick: s => {
            s.stopPropagation(),
            r()
        }
        ,
        className: "absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block",
        children: c.jsx(ux, {
            size: 48
        })
    }), c.jsxs(Me.div, {
        layoutId: `card-${e.id}`,
        initial: {
            opacity: 0,
            scale: .9,
            y: 20
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: .95,
            y: 20
        },
        className: "relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row ring-1 ring-white/20",
        children: [c.jsx("button", {
            onClick: t,
            className: "absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-black/20 text-slate-800 hover:text-red-600 rounded-full backdrop-blur-md transition-colors",
            title: "Đóng (ESC)",
            children: c.jsx(Fh, {
                size: 24
            })
        }), c.jsxs("div", {
            className: "relative w-full md:w-[45%] h-64 md:h-full bg-slate-100 shrink-0",
            children: [c.jsx("img", {
                src: e.image,
                alt: e.name,
                className: "w-full h-full object-cover"
            }), c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"
            }), c.jsxs("div", {
                className: "absolute bottom-4 left-4 right-4 text-white md:hidden",
                children: [c.jsx("h2", {
                    className: "text-2xl font-bold drop-shadow-md",
                    children: e.name
                }), c.jsx("p", {
                    className: "opacity-90 text-sm",
                    children: e.title
                })]
            })]
        }), c.jsx("div", {
            className: "flex-1 h-full overflow-y-auto custom-scrollbar bg-white",
            children: c.jsxs("div", {
                className: "p-6 md:p-10 space-y-6 md:space-y-8",
                children: [c.jsxs("div", {
                    className: "hidden md:block",
                    children: [c.jsx("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: c.jsx("span", {
                            className: "px-3 py-1 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider rounded-full border border-red-100",
                            children: e.category
                        })
                    }), c.jsx("h2", {
                        className: "text-4xl font-black text-slate-900 mb-2 leading-tight",
                        children: e.name
                    }), c.jsx("p", {
                        className: "text-xl text-slate-500 font-medium border-b border-slate-100 pb-6",
                        children: e.title
                    })]
                }), c.jsxs("div", {
                    className: "relative pl-6 border-l-4 border-red-500 bg-slate-50/50 p-4 rounded-r-2xl italic text-lg text-slate-700 leading-relaxed",
                    children: [c.jsx($l, {
                        className: "absolute -top-3 -left-3 w-8 h-8 text-red-200 bg-white rounded-full p-1"
                    }), '"', e.description, '"']
                }), c.jsx("div", {
                    className: "prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line",
                    children: e.detailedStory
                }), c.jsxs("div", {
                    className: "pt-6 border-t border-slate-100",
                    children: [c.jsxs("h4", {
                        className: "flex items-center gap-2 text-sm font-bold text-slate-900 uppercase mb-4",
                        children: [c.jsx(lx, {
                            className: "w-4 h-4 text-amber-500"
                        }), " Phẩm chất tiêu biểu"]
                    }), c.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: e.qualities.map( (s, i) => c.jsxs("span", {
                            className: "px-4 py-2 bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-700 rounded-xl text-sm font-semibold border border-slate-200 transition-colors cursor-default",
                            children: ["#", s]
                        }, i))
                    })]
                })]
            })
        })]
    })]
}) : null)
  , rA = ["Tất cả", "Chính trị", "Quân sự", "Khoa học", "Văn hóa", "Thể thao"]
  , sA = () => {
    const [e,t] = m.useState(null)
      , [n,r] = m.useState("Tất cả")
      , [s,i] = m.useState("")
      , o = m.useMemo( () => Ti.filter(h => {
        const f = n === "Tất cả" || h.category === n
          , p = h.name.toLowerCase().includes(s.toLowerCase());
        return f && p
    }
    ), [n, s])
      , a = h => {
        const f = Ti.findIndex(p => p.id === h.id);
        t(f)
    }
      , l = () => t(null)
      , u = () => {
        e !== null && t((e + 1) % Ti.length)
    }
      , d = () => {
        e !== null && t(e === 0 ? Ti.length - 1 : e - 1)
    }
    ;
    return c.jsxs("div", {
        className: "min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900",
        style: {
            fontFamily: "'Be Vietnam Pro', sans-serif"
        },
        children: [c.jsxs("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: [c.jsx("div", {
                className: "absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
            }), c.jsx("div", {
                className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
            })]
        }), c.jsx("main", {
            className: "pt-28 pb-20 relative z-10",
            children: c.jsxs("div", {
                className: "container mx-auto px-4 max-w-7xl",
                children: [c.jsxs("div", {
                    className: "text-center mb-16 space-y-6 animate-fade-in-up",
                    children: [c.jsx("div", {
                        className: "inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-4",
                        children: c.jsx($l, {
                            className: "w-6 h-6 text-red-500 opacity-50"
                        })
                    }), c.jsxs("h1", {
                        className: "text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight",
                        children: ["Gương Sáng", " ", c.jsx("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500",
                            children: "Việt Nam"
                        })]
                    }), c.jsx("p", {
                        className: "text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed",
                        children: "Những con người bình dị nhưng phi thường. Những câu chuyện thắp lửa niềm tin và khát vọng cống hiến cho Tổ quốc."
                    }), c.jsxs("div", {
                        className: "flex flex-col md:flex-row gap-4 justify-center items-center mt-8",
                        children: [c.jsxs("div", {
                            className: "relative w-full md:w-80 group",
                            children: [c.jsx(Tk, {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-red-500 transition-colors"
                            }), c.jsx("input", {
                                type: "text",
                                placeholder: "Tìm kiếm nhân vật...",
                                className: "w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm",
                                value: s,
                                onChange: h => i(h.target.value)
                            })]
                        }), c.jsx("div", {
                            className: "flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto px-1 custom-scrollbar",
                            children: rA.map(h => c.jsx("button", {
                                onClick: () => r(h),
                                className: `
                      px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all
                      ${n === h ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"}
                    `,
                                children: h
                            }, h))
                        })]
                    })]
                }), c.jsx(Me.div, {
                    layout: !0,
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8",
                    children: c.jsx(Zs, {
                        children: o.map( (h, f) => c.jsx(Me.div, {
                            layout: !0,
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: .9
                            },
                            transition: {
                                duration: .4,
                                delay: f * .05
                            },
                            onClick: () => a(h),
                            className: "group cursor-pointer",
                            children: c.jsx("div", {
                                className: "relative h-full bg-white rounded-[2rem] p-3 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden",
                                children: c.jsxs("div", {
                                    className: "relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-slate-100",
                                    children: [c.jsx("img", {
                                        src: h.image,
                                        alt: h.name,
                                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform",
                                        loading: "lazy"
                                    }), c.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    }), c.jsxs("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
                                        children: [c.jsxs("span", {
                                            className: "inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100",
                                            children: [h.category || "Tiêu biểu", " "]
                                        }), c.jsx("h3", {
                                            className: "text-xl md:text-2xl font-bold text-white leading-tight mb-1 drop-shadow-md",
                                            children: h.name
                                        }), c.jsx("p", {
                                            className: "text-white/80 text-sm font-medium line-clamp-1 group-hover:text-white transition-colors",
                                            children: h.title
                                        })]
                                    })]
                                })
                            })
                        }, h.id))
                    })
                }), o.length === 0 && c.jsxs("div", {
                    className: "text-center py-20 opacity-50",
                    children: [c.jsx(hk, {
                        className: "w-16 h-16 mx-auto mb-4 text-slate-300"
                    }), c.jsx("p", {
                        className: "text-xl font-medium text-slate-500",
                        children: "Không tìm thấy nhân vật nào phù hợp."
                    }), c.jsx("button", {
                        onClick: () => {
                            i(""),
                            r("Tất cả")
                        }
                        ,
                        className: "mt-4 text-red-600 font-bold hover:underline",
                        children: "Xóa bộ lọc"
                    })]
                }), c.jsx(Zs, {
                    children: e !== null && c.jsx(nA, {
                        person: Ti[e],
                        onClose: l,
                        onPrev: d,
                        onNext: u
                    })
                })]
            })
        }), c.jsx("style", {
            children: `
        .custom-scrollbar::-webkit-scrollbar { height: 0px; }
      `
        })]
    })
}
;
var iA = m.createContext(void 0);
function oA(e) {
    const t = m.useContext(iA);
    return e || t || "ltr"
}
function aA(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
function lA(e, t) {
    return m.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Vf = "ScrollArea"
  , [ab,QA] = si(Vf)
  , [cA,jt] = ab(Vf)
  , lb = m.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, type: r="hover", dir: s, scrollHideDelay: i=600, ...o} = e
      , [a,l] = m.useState(null)
      , [u,d] = m.useState(null)
      , [h,f] = m.useState(null)
      , [p,w] = m.useState(null)
      , [v,b] = m.useState(null)
      , [y,g] = m.useState(0)
      , [x,S] = m.useState(0)
      , [C,k] = m.useState(!1)
      , [T,N] = m.useState(!1)
      , P = Oe(t, V => l(V))
      , E = oA(s);
    return c.jsx(cA, {
        scope: n,
        type: r,
        dir: E,
        scrollHideDelay: i,
        scrollArea: a,
        viewport: u,
        onViewportChange: d,
        content: h,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: w,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: k,
        scrollbarY: v,
        onScrollbarYChange: b,
        scrollbarYEnabled: T,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: g,
        onCornerHeightChange: S,
        children: c.jsx(be.div, {
            dir: E,
            ...o,
            ref: P,
            style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": x + "px",
                ...e.style
            }
        })
    })
}
);
lb.displayName = Vf;
var cb = "ScrollAreaViewport"
  , ub = m.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, children: r, nonce: s, ...i} = e
      , o = jt(cb, n)
      , a = m.useRef(null)
      , l = Oe(t, a, o.onViewportChange);
    return c.jsxs(c.Fragment, {
        children: [c.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: s
        }), c.jsx(be.div, {
            "data-radix-scroll-area-viewport": "",
            ...i,
            ref: l,
            style: {
                overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
            },
            children: c.jsx("div", {
                ref: o.onContentChange,
                style: {
                    minWidth: "100%",
                    display: "table"
                },
                children: r
            })
        })]
    })
}
);
ub.displayName = cb;
var ln = "ScrollAreaScrollbar"
  , _f = m.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , s = jt(ln, e.__scopeScrollArea)
      , {onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: o} = s
      , a = e.orientation === "horizontal";
    return m.useEffect( () => (a ? i(!0) : o(!0),
    () => {
        a ? i(!1) : o(!1)
    }
    ), [a, i, o]),
    s.type === "hover" ? c.jsx(uA, {
        ...r,
        ref: t,
        forceMount: n
    }) : s.type === "scroll" ? c.jsx(dA, {
        ...r,
        ref: t,
        forceMount: n
    }) : s.type === "auto" ? c.jsx(db, {
        ...r,
        ref: t,
        forceMount: n
    }) : s.type === "always" ? c.jsx(If, {
        ...r,
        ref: t
    }) : null
}
);
_f.displayName = ln;
var uA = m.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , s = jt(ln, e.__scopeScrollArea)
      , [i,o] = m.useState(!1);
    return m.useEffect( () => {
        const a = s.scrollArea;
        let l = 0;
        if (a) {
            const u = () => {
                window.clearTimeout(l),
                o(!0)
            }
              , d = () => {
                l = window.setTimeout( () => o(!1), s.scrollHideDelay)
            }
            ;
            return a.addEventListener("pointerenter", u),
            a.addEventListener("pointerleave", d),
            () => {
                window.clearTimeout(l),
                a.removeEventListener("pointerenter", u),
                a.removeEventListener("pointerleave", d)
            }
        }
    }
    , [s.scrollArea, s.scrollHideDelay]),
    c.jsx(Yr, {
        present: n || i,
        children: c.jsx(db, {
            "data-state": i ? "visible" : "hidden",
            ...r,
            ref: t
        })
    })
}
)
  , dA = m.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , s = jt(ln, e.__scopeScrollArea)
      , i = e.orientation === "horizontal"
      , o = sc( () => l("SCROLL_END"), 100)
      , [a,l] = lA("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    return m.useEffect( () => {
        if (a === "idle") {
            const u = window.setTimeout( () => l("HIDE"), s.scrollHideDelay);
            return () => window.clearTimeout(u)
        }
    }
    , [a, s.scrollHideDelay, l]),
    m.useEffect( () => {
        const u = s.viewport
          , d = i ? "scrollLeft" : "scrollTop";
        if (u) {
            let h = u[d];
            const f = () => {
                const p = u[d];
                h !== p && (l("SCROLL"),
                o()),
                h = p
            }
            ;
            return u.addEventListener("scroll", f),
            () => u.removeEventListener("scroll", f)
        }
    }
    , [s.viewport, i, l, o]),
    c.jsx(Yr, {
        present: n || a !== "hidden",
        children: c.jsx(If, {
            "data-state": a === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: se(e.onPointerEnter, () => l("POINTER_ENTER")),
            onPointerLeave: se(e.onPointerLeave, () => l("POINTER_LEAVE"))
        })
    })
}
)
  , db = m.forwardRef( (e, t) => {
    const n = jt(ln, e.__scopeScrollArea)
      , {forceMount: r, ...s} = e
      , [i,o] = m.useState(!1)
      , a = e.orientation === "horizontal"
      , l = sc( () => {
        if (n.viewport) {
            const u = n.viewport.offsetWidth < n.viewport.scrollWidth
              , d = n.viewport.offsetHeight < n.viewport.scrollHeight;
            o(a ? u : d)
        }
    }
    , 10);
    return ei(n.viewport, l),
    ei(n.content, l),
    c.jsx(Yr, {
        present: r || i,
        children: c.jsx(If, {
            "data-state": i ? "visible" : "hidden",
            ...s,
            ref: t
        })
    })
}
)
  , If = m.forwardRef( (e, t) => {
    const {orientation: n="vertical", ...r} = e
      , s = jt(ln, e.__scopeScrollArea)
      , i = m.useRef(null)
      , o = m.useRef(0)
      , [a,l] = m.useState({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    })
      , u = gb(a.viewport, a.content)
      , d = {
        ...r,
        sizes: a,
        onSizesChange: l,
        hasThumb: u > 0 && u < 1,
        onThumbChange: f => i.current = f,
        onThumbPointerUp: () => o.current = 0,
        onThumbPointerDown: f => o.current = f
    };
    function h(f, p) {
        return yA(f, o.current, a, p)
    }
    return n === "horizontal" ? c.jsx(hA, {
        ...d,
        ref: t,
        onThumbPositionChange: () => {
            if (s.viewport && i.current) {
                const f = s.viewport.scrollLeft
                  , p = s0(f, a, s.dir);
                i.current.style.transform = `translate3d(${p}px, 0, 0)`
            }
        }
        ,
        onWheelScroll: f => {
            s.viewport && (s.viewport.scrollLeft = f)
        }
        ,
        onDragScroll: f => {
            s.viewport && (s.viewport.scrollLeft = h(f, s.dir))
        }
    }) : n === "vertical" ? c.jsx(fA, {
        ...d,
        ref: t,
        onThumbPositionChange: () => {
            if (s.viewport && i.current) {
                const f = s.viewport.scrollTop
                  , p = s0(f, a);
                i.current.style.transform = `translate3d(0, ${p}px, 0)`
            }
        }
        ,
        onWheelScroll: f => {
            s.viewport && (s.viewport.scrollTop = f)
        }
        ,
        onDragScroll: f => {
            s.viewport && (s.viewport.scrollTop = h(f))
        }
    }) : null
}
)
  , hA = m.forwardRef( (e, t) => {
    const {sizes: n, onSizesChange: r, ...s} = e
      , i = jt(ln, e.__scopeScrollArea)
      , [o,a] = m.useState()
      , l = m.useRef(null)
      , u = Oe(t, l, i.onScrollbarXChange);
    return m.useEffect( () => {
        l.current && a(getComputedStyle(l.current))
    }
    , [l]),
    c.jsx(fb, {
        "data-orientation": "horizontal",
        ...s,
        ref: u,
        sizes: n,
        style: {
            bottom: 0,
            left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": rc(n) + "px",
            ...e.style
        },
        onThumbPointerDown: d => e.onThumbPointerDown(d.x),
        onDragScroll: d => e.onDragScroll(d.x),
        onWheelScroll: (d, h) => {
            if (i.viewport) {
                const f = i.viewport.scrollLeft + d.deltaX;
                e.onWheelScroll(f),
                vb(f, h) && d.preventDefault()
            }
        }
        ,
        onResize: () => {
            l.current && i.viewport && o && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                    size: l.current.clientWidth,
                    paddingStart: Cl(o.paddingLeft),
                    paddingEnd: Cl(o.paddingRight)
                }
            })
        }
    })
}
)
  , fA = m.forwardRef( (e, t) => {
    const {sizes: n, onSizesChange: r, ...s} = e
      , i = jt(ln, e.__scopeScrollArea)
      , [o,a] = m.useState()
      , l = m.useRef(null)
      , u = Oe(t, l, i.onScrollbarYChange);
    return m.useEffect( () => {
        l.current && a(getComputedStyle(l.current))
    }
    , [l]),
    c.jsx(fb, {
        "data-orientation": "vertical",
        ...s,
        ref: u,
        sizes: n,
        style: {
            top: 0,
            right: i.dir === "ltr" ? 0 : void 0,
            left: i.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": rc(n) + "px",
            ...e.style
        },
        onThumbPointerDown: d => e.onThumbPointerDown(d.y),
        onDragScroll: d => e.onDragScroll(d.y),
        onWheelScroll: (d, h) => {
            if (i.viewport) {
                const f = i.viewport.scrollTop + d.deltaY;
                e.onWheelScroll(f),
                vb(f, h) && d.preventDefault()
            }
        }
        ,
        onResize: () => {
            l.current && i.viewport && o && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                    size: l.current.clientHeight,
                    paddingStart: Cl(o.paddingTop),
                    paddingEnd: Cl(o.paddingBottom)
                }
            })
        }
    })
}
)
  , [pA,hb] = ab(ln)
  , fb = m.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, sizes: r, hasThumb: s, onThumbChange: i, onThumbPointerUp: o, onThumbPointerDown: a, onThumbPositionChange: l, onDragScroll: u, onWheelScroll: d, onResize: h, ...f} = e
      , p = jt(ln, n)
      , [w,v] = m.useState(null)
      , b = Oe(t, P => v(P))
      , y = m.useRef(null)
      , g = m.useRef("")
      , x = p.viewport
      , S = r.content - r.viewport
      , C = Ge(d)
      , k = Ge(l)
      , T = sc(h, 10);
    function N(P) {
        if (y.current) {
            const E = P.clientX - y.current.left
              , V = P.clientY - y.current.top;
            u({
                x: E,
                y: V
            })
        }
    }
    return m.useEffect( () => {
        const P = E => {
            const V = E.target;
            (w == null ? void 0 : w.contains(V)) && C(E, S)
        }
        ;
        return document.addEventListener("wheel", P, {
            passive: !1
        }),
        () => document.removeEventListener("wheel", P, {
            passive: !1
        })
    }
    , [x, w, S, C]),
    m.useEffect(k, [r, k]),
    ei(w, T),
    ei(p.content, T),
    c.jsx(pA, {
        scope: n,
        scrollbar: w,
        hasThumb: s,
        onThumbChange: Ge(i),
        onThumbPointerUp: Ge(o),
        onThumbPositionChange: k,
        onThumbPointerDown: Ge(a),
        children: c.jsx(be.div, {
            ...f,
            ref: b,
            style: {
                position: "absolute",
                ...f.style
            },
            onPointerDown: se(e.onPointerDown, P => {
                P.button === 0 && (P.target.setPointerCapture(P.pointerId),
                y.current = w.getBoundingClientRect(),
                g.current = document.body.style.webkitUserSelect,
                document.body.style.webkitUserSelect = "none",
                p.viewport && (p.viewport.style.scrollBehavior = "auto"),
                N(P))
            }
            ),
            onPointerMove: se(e.onPointerMove, N),
            onPointerUp: se(e.onPointerUp, P => {
                const E = P.target;
                E.hasPointerCapture(P.pointerId) && E.releasePointerCapture(P.pointerId),
                document.body.style.webkitUserSelect = g.current,
                p.viewport && (p.viewport.style.scrollBehavior = ""),
                y.current = null
            }
            )
        })
    })
}
)
  , Sl = "ScrollAreaThumb"
  , pb = m.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , s = hb(Sl, e.__scopeScrollArea);
    return c.jsx(Yr, {
        present: n || s.hasThumb,
        children: c.jsx(mA, {
            ref: t,
            ...r
        })
    })
}
)
  , mA = m.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, style: r, ...s} = e
      , i = jt(Sl, n)
      , o = hb(Sl, n)
      , {onThumbPositionChange: a} = o
      , l = Oe(t, h => o.onThumbChange(h))
      , u = m.useRef(void 0)
      , d = sc( () => {
        u.current && (u.current(),
        u.current = void 0)
    }
    , 100);
    return m.useEffect( () => {
        const h = i.viewport;
        if (h) {
            const f = () => {
                if (d(),
                !u.current) {
                    const p = vA(h, a);
                    u.current = p,
                    a()
                }
            }
            ;
            return a(),
            h.addEventListener("scroll", f),
            () => h.removeEventListener("scroll", f)
        }
    }
    , [i.viewport, d, a]),
    c.jsx(be.div, {
        "data-state": o.hasThumb ? "visible" : "hidden",
        ...s,
        ref: l,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...r
        },
        onPointerDownCapture: se(e.onPointerDownCapture, h => {
            const p = h.target.getBoundingClientRect()
              , w = h.clientX - p.left
              , v = h.clientY - p.top;
            o.onThumbPointerDown({
                x: w,
                y: v
            })
        }
        ),
        onPointerUp: se(e.onPointerUp, o.onThumbPointerUp)
    })
}
);
pb.displayName = Sl;
var Ff = "ScrollAreaCorner"
  , mb = m.forwardRef( (e, t) => {
    const n = jt(Ff, e.__scopeScrollArea)
      , r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? c.jsx(gA, {
        ...e,
        ref: t
    }) : null
}
);
mb.displayName = Ff;
var gA = m.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, ...r} = e
      , s = jt(Ff, n)
      , [i,o] = m.useState(0)
      , [a,l] = m.useState(0)
      , u = !!(i && a);
    return ei(s.scrollbarX, () => {
        var h;
        const d = ((h = s.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
        s.onCornerHeightChange(d),
        l(d)
    }
    ),
    ei(s.scrollbarY, () => {
        var h;
        const d = ((h = s.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
        s.onCornerWidthChange(d),
        o(d)
    }
    ),
    u ? c.jsx(be.div, {
        ...r,
        ref: t,
        style: {
            width: i,
            height: a,
            position: "absolute",
            right: s.dir === "ltr" ? 0 : void 0,
            left: s.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style
        }
    }) : null
}
);
function Cl(e) {
    return e ? parseInt(e, 10) : 0
}
function gb(e, t) {
    const n = e / t;
    return isNaN(n) ? 0 : n
}
function rc(e) {
    const t = gb(e.viewport, e.content)
      , n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd
      , r = (e.scrollbar.size - n) * t;
    return Math.max(r, 18)
}
function yA(e, t, n, r="ltr") {
    const s = rc(n)
      , i = s / 2
      , o = t || i
      , a = s - o
      , l = n.scrollbar.paddingStart + o
      , u = n.scrollbar.size - n.scrollbar.paddingEnd - a
      , d = n.content - n.viewport
      , h = r === "ltr" ? [0, d] : [d * -1, 0];
    return yb([l, u], h)(e)
}
function s0(e, t, n="ltr") {
    const r = rc(t)
      , s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd
      , i = t.scrollbar.size - s
      , o = t.content - t.viewport
      , a = i - r
      , l = n === "ltr" ? [0, o] : [o * -1, 0]
      , u = aA(e, l);
    return yb([0, o], [0, a])(u)
}
function yb(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1])
            return t[0];
        const r = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + r * (n - e[0])
    }
}
function vb(e, t) {
    return e > 0 && e < t
}
var vA = (e, t= () => {}
) => {
    let n = {
        left: e.scrollLeft,
        top: e.scrollTop
    }
      , r = 0;
    return function s() {
        const i = {
            left: e.scrollLeft,
            top: e.scrollTop
        }
          , o = n.left !== i.left
          , a = n.top !== i.top;
        (o || a) && t(),
        n = i,
        r = window.requestAnimationFrame(s)
    }(),
    () => window.cancelAnimationFrame(r)
}
;
function sc(e, t) {
    const n = Ge(e)
      , r = m.useRef(0);
    return m.useEffect( () => () => window.clearTimeout(r.current), []),
    m.useCallback( () => {
        window.clearTimeout(r.current),
        r.current = window.setTimeout(n, t)
    }
    , [n, t])
}
function ei(e, t) {
    const n = Ge(t);
    bn( () => {
        let r = 0;
        if (e) {
            const s = new ResizeObserver( () => {
                cancelAnimationFrame(r),
                r = window.requestAnimationFrame(n)
            }
            );
            return s.observe(e),
            () => {
                window.cancelAnimationFrame(r),
                s.unobserve(e)
            }
        }
    }
    , [e, n])
}
var xb = lb
  , xA = ub
  , wA = mb;
const wb = m.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(xb, {
    ref: r,
    className: Ve("relative overflow-hidden", e),
    ...n,
    children: [c.jsx(xA, {
        className: "h-full w-full rounded-[inherit]",
        children: t
    }), c.jsx(bb, {}), c.jsx(wA, {})]
}));
wb.displayName = xb.displayName;
const bb = m.forwardRef( ({className: e, orientation: t="vertical", ...n}, r) => c.jsx(_f, {
    ref: r,
    orientation: t,
    className: Ve("flex touch-none select-none transition-colors", t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", e),
    ...n,
    children: c.jsx(pb, {
        className: "relative flex-1 rounded-full bg-border"
    })
}));
bb.displayName = _f.displayName;
const bA = {
    "ly-tuong": [{
        quote: "Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.",
        analysis: "Đây là lời căn dặn của Bác trong Thư gửi học sinh nhân ngày khai trường đầu tiên (9/1945). Bác đặt trọn niềm tin vào thế hệ trẻ, xem tri thức là chìa khóa quyết định vận mệnh quốc gia.",
        application: "Lý tưởng yêu nước ngày nay là nỗ lực vươn lên đỉnh cao tri thức, làm chủ công nghệ và khẳng định vị thế Việt Nam trên trường quốc tế."
    }, {
        quote: "Không có gì quý hơn độc lập, tự do.",
        analysis: "Chân lý này không chỉ là khẩu hiệu mà là lẽ sống. Độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân.",
        application: "Giữ gìn sự 'độc lập' trong thời đại mới là giữ gìn bản sắc văn hóa và tự chủ về kinh tế trong hội nhập."
    }],
    "tu-hoc": [{
        quote: "Đường đời là một chiếc thang không có nấc chót. Việc học là một quyển vở không có trang cuối cùng.",
        analysis: "Bác Hồ là tấm gương sáng ngời về tinh thần tự học suốt đời. Bác quan niệm học tập không dừng lại ở trường lớp mà là quá trình tu dưỡng liên tục.",
        application: "Trong kỷ nguyên số, tinh thần 'tự học' giúp chúng ta không bị tụt hậu, luôn sẵn sàng thích nghi với những biến đổi của công nghệ."
    }],
    "dao-duc": [{
        quote: "Có tài mà không có đức là người vô dụng, có đức mà không có tài thì làm việc gì cũng khó.",
        analysis: "Bác luôn đặt 'Đức' và 'Tài' trong mối quan hệ biện chứng. Đức là gốc, Tài là năng lực. Tài năng mà tâm không sáng sẽ gây hại cho xã hội.",
        application: "Rèn luyện đạo đức là rèn tính trung thực, trách nhiệm. Đừng chỉ chạy theo thành tích mà quên mất việc tu dưỡng phẩm chất làm người."
    }],
    "trach-nhiem": [{
        quote: "Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại cho dân, ta phải hết sức tránh.",
        analysis: "Trách nhiệm không phải là khái niệm trừu tượng, mà đo lường bằng hiệu quả thực tế mang lại cho cộng đồng.",
        application: "Hãy bắt đầu từ việc nhỏ: giữ gìn vệ sinh chung, tuân thủ luật pháp và sẵn sàng hỗ trợ người yếu thế."
    }],
    "tinh-than-tap-the": [{
        quote: `Đoàn kết, đoàn kết, đại đoàn kết.
Thành công, thành công, đại thành công.`,
        analysis: "Sức mạnh tập thể luôn lớn hơn cá nhân. Chỉ có sự đồng lòng nhất trí mới tạo nên sức mạnh dời non lấp bể.",
        application: "Trong làm việc nhóm, hãy hạ cái 'Tôi' xuống vì mục tiêu chung. Tôn trọng ý kiến khác biệt là chìa khóa của đoàn kết hiện đại."
    }],
    "can-kiem-liem-chinh": [{
        quote: "Cần, Kiệm, Liêm, Chính là bốn đức tính cần có của con người, như đất có bốn phương, trời có bốn mùa.",
        analysis: "Thiếu một đức tính thì không thành người hoàn thiện. Cần là chăm chỉ; Kiệm là tiết kiệm; Liêm là trong sạch; Chính là đứng đắn.",
        application: "Sống tiết kiệm, không lãng phí thời gian, trung thực trong công việc chính là thực hành lời Bác dạy."
    }]
}
  , i0 = [{
    id: "ly-tuong",
    label: "Lý tưởng Cách mạng",
    icon: "🔥",
    color: "from-red-500 to-orange-500"
}, {
    id: "tu-hoc",
    label: "Tinh thần Tự học",
    icon: "📚",
    color: "from-blue-500 to-cyan-500"
}, {
    id: "dao-duc",
    label: "Đạo đức & Lối sống",
    icon: "❤️",
    color: "from-rose-500 to-pink-500"
}, {
    id: "trach-nhiem",
    label: "Trách nhiệm Xã hội",
    icon: "🛡️",
    color: "from-emerald-500 to-green-500"
}, {
    id: "tinh-than-tap-the",
    label: "Sức mạnh Đoàn kết",
    icon: "🤝",
    color: "from-violet-500 to-purple-500"
}, {
    id: "can-kiem-liem-chinh",
    label: "Cần Kiệm Liêm Chính",
    icon: "⭐",
    color: "from-yellow-400 to-amber-500"
}]
  , SA = ({text: e, onComplete: t}) => {
    const [n,r] = m.useState("")
      , s = m.useRef(0);
    return m.useEffect( () => {
        s.current = 0,
        r("");
        const i = setInterval( () => {
            r(o => o + e.charAt(s.current)),
            s.current++,
            s.current >= e.length && (clearInterval(i),
            t && t())
        }
        , 15);
        return () => clearInterval(i)
    }
    , [e]),
    c.jsx("span", {
        className: "whitespace-pre-wrap",
        children: n
    })
}
  , CA = () => {
    const [e,t] = m.useState([{
        id: 1,
        type: "assistant",
        content: `Xin chào đồng chí! Tôi là Trợ lý Tư tưởng Hồ Chí Minh.

Tôi sẵn sàng giải đáp và phân tích các giá trị tư tưởng của Bác. Mời bạn chọn chủ đề bên dưới.`
    }])
      , [n,r] = m.useState(!1)
      , [s,i] = m.useState(!1)
      , o = m.useRef(null);
    m.useEffect( () => {
        o.current && (o.current.scrollTop = o.current.scrollHeight)
    }
    , [e, n, s]);
    const a = l => {
        if (n)
            return;
        const u = i0.find(h => h.id === l);
        if (!u)
            return;
        s && i(!1);
        const d = {
            id: Date.now(),
            type: "user",
            content: `Tôi muốn hiểu sâu hơn về "${u.label}".`
        };
        t(h => [...h, d]),
        r(!0),
        setTimeout( () => {
            const h = bA[l]
              , f = h ? h[Math.floor(Math.random() * h.length)] : {
                quote: "Dữ liệu đang cập nhật...",
                analysis: "",
                application: ""
            };
            r(!1),
            i(!0);
            const p = {
                id: Date.now() + 1,
                type: "assistant",
                content: f
            };
            t(w => [...w, p])
        }
        , 1200)
    }
    ;
    return c.jsxs("div", {
        className: "min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900",
        style: {
            fontFamily: "'Be Vietnam Pro', sans-serif"
        },
        children: [c.jsx("style", {
            children: `
        @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
      `
        }), c.jsx("div", {
            className: "fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none"
        }), c.jsx("div", {
            className: "relative z-10 flex flex-col h-screen",
            children: c.jsxs("main", {
                className: "flex-1 container mx-auto px-4 pt-24 pb-6 max-w-5xl flex flex-col h-full",
                children: [c.jsxs("div", {
                    className: "text-center mb-6 animate-fade-in-down flex-shrink-0",
                    children: [c.jsxs("h1", {
                        className: "text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-2",
                        children: ["Trợ lý ảo ", c.jsx("span", {
                            className: "text-red-600",
                            children: "Hồ Chí Minh"
                        })]
                    }), c.jsx("p", {
                        className: "text-slate-500 font-medium",
                        children: "Hỏi đáp & Tra cứu Tư tưởng - Đạo đức - Phong cách"
                    })]
                }), c.jsxs("div", {
                    className: "flex-1 bg-white/85 backdrop-blur-xl border border-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative ring-1 ring-slate-200/60",
                    children: [c.jsxs("div", {
                        ref: o,
                        className: "flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth custom-scrollbar",
                        children: [c.jsx(Zs, {
                            initial: !1,
                            children: e.map( (l, u) => {
                                const d = l.type === "assistant"
                                  , h = u === e.length - 1;
                                return c.jsxs(Me.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: `flex gap-4 md:gap-5 ${d ? "justify-start" : "justify-end"}`,
                                    children: [d && c.jsx("div", {
                                        className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 shadow-lg shadow-red-200 flex items-center justify-center shrink-0 mt-1 border-2 border-white",
                                        children: c.jsx(Ih, {
                                            className: "w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400"
                                        })
                                    }), c.jsxs("div", {
                                        className: `relative max-w-[90%] md:max-w-[80%] ${d ? "mr-8" : "ml-8"}`,
                                        children: [c.jsx("div", {
                                            className: `text-[10px] md:text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider ${d ? "text-left pl-1" : "text-right pr-1"}`,
                                            children: d ? "Trợ lý AI" : "Bạn"
                                        }), c.jsxs("div", {
                                            className: `
                            p-5 md:p-7 rounded-3xl shadow-sm text-base leading-relaxed
                            ${d ? "bg-white border border-slate-100 rounded-tl-none text-slate-700 shadow-slate-200/50" : "bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-tr-none shadow-lg"}
                          `,
                                            children: [!d && l.content, d && c.jsx("div", {
                                                className: "space-y-5",
                                                children: typeof l.content == "string" ? c.jsx("p", {
                                                    children: l.content
                                                }) : c.jsxs(c.Fragment, {
                                                    children: [c.jsxs("div", {
                                                        className: "relative pl-5 border-l-4 border-red-500",
                                                        children: [c.jsx($l, {
                                                            className: "absolute -top-2 -left-3 w-5 h-5 bg-white text-red-500 fill-red-100 p-0.5"
                                                        }), c.jsx("div", {
                                                            className: "text-lg md:text-xl font-serif text-slate-800 italic font-medium",
                                                            children: h && s ? c.jsx(SA, {
                                                                text: `"${l.content.quote}"`,
                                                                onComplete: () => i(!1)
                                                            }) : `"${l.content.quote}"`
                                                        }), c.jsx("p", {
                                                            className: "text-sm font-bold text-red-600 mt-2",
                                                            children: "— Hồ Chí Minh"
                                                        })]
                                                    }), (!s || !h) && c.jsxs(Me.div, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        transition: {
                                                            duration: .5
                                                        },
                                                        children: [c.jsxs("div", {
                                                            className: "bg-slate-50 p-4 rounded-xl border border-slate-100 mt-4",
                                                            children: [c.jsxs("h4", {
                                                                className: "flex items-center gap-2 text-xs font-bold text-slate-900 uppercase mb-2",
                                                                children: [c.jsx(lr, {
                                                                    className: "w-4 h-4 text-blue-500"
                                                                }), " ", "Phân tích ý nghĩa"]
                                                            }), c.jsx("p", {
                                                                className: "text-slate-600 text-sm md:text-[15px] leading-relaxed",
                                                                children: l.content.analysis
                                                            })]
                                                        }), c.jsxs("div", {
                                                            className: "bg-green-50 p-4 rounded-xl border border-green-100 mt-3",
                                                            children: [c.jsxs("h4", {
                                                                className: "flex items-center gap-2 text-xs font-bold text-green-800 uppercase mb-2",
                                                                children: [c.jsx(qs, {
                                                                    className: "w-4 h-4 text-green-600"
                                                                }), " ", "Bài học vận dụng"]
                                                            }), c.jsx("p", {
                                                                className: "text-slate-700 text-sm md:text-[15px] leading-relaxed",
                                                                children: l.content.application
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                }, l.id)
                            }
                            )
                        }), n && c.jsxs(Me.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "flex gap-4",
                            children: [c.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100",
                                children: c.jsx(ok, {
                                    className: "w-6 h-6 text-red-400"
                                })
                            }), c.jsxs("div", {
                                className: "bg-white border border-slate-100 px-5 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2",
                                children: [c.jsx("span", {
                                    className: "text-sm font-medium text-slate-500",
                                    children: "Đang suy luận..."
                                }), c.jsxs("div", {
                                    className: "flex gap-1",
                                    children: [c.jsx("span", {
                                        className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                                    }), c.jsx("span", {
                                        className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"
                                    }), c.jsx("span", {
                                        className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"
                                    })]
                                })]
                            })]
                        }), c.jsx("div", {
                            className: "h-2"
                        })]
                    }), c.jsxs("div", {
                        className: "bg-white/90 backdrop-blur-md border-t border-slate-100 p-4 z-20",
                        children: [c.jsxs("p", {
                            className: "text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2",
                            children: [c.jsx(qs, {
                                className: "w-3 h-3 text-amber-500"
                            }), " Chọn chủ đề để thảo luận"]
                        }), c.jsx(wb, {
                            className: "w-full whitespace-nowrap",
                            children: c.jsx("div", {
                                className: "flex gap-3 pb-2",
                                children: i0.map(l => c.jsxs(Me.button, {
                                    onClick: () => a(l.id),
                                    whileHover: {
                                        scale: 1.02,
                                        y: -2
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    disabled: n,
                                    className: `
                        relative group flex items-center gap-3 px-4 py-3 rounded-2xl border bg-slate-50 hover:bg-white transition-all shadow-sm hover:shadow-md hover:border-red-200
                        disabled:opacity-50 disabled:cursor-not-allowed min-w-[180px]
                      `,
                                    children: [c.jsx("div", {
                                        className: `w-8 h-8 rounded-lg bg-gradient-to-br ${l.color} flex items-center justify-center text-lg shadow-sm text-white`,
                                        children: l.icon
                                    }), c.jsx("div", {
                                        className: "text-left",
                                        children: c.jsx("div", {
                                            className: "text-sm font-bold text-slate-700 group-hover:text-red-700",
                                            children: l.label
                                        })
                                    })]
                                }, l.id))
                            })
                        })]
                    })]
                })]
            })
        }), c.jsx("style", {
            children: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
      `
        })]
    })
}
  , kA = "https://image.baoquangngai.vn//data/082023/tuyenngon_20230831154549.jpg"
  , TA = "Bác Hồ đọc Tuyên ngôn Độc lập ngày 02/09/1945 tại Quảng trường Ba Đình."
  , NA = [{
    id: "n1",
    q: "Bác Hồ ra đi tìm đường cứu nước năm nào?",
    a: ["1911", "1930", "1945"],
    correct: 0
}, {
    id: "n2",
    q: "Tên thật thời niên thiếu của Bác là gì?",
    a: ["Nguyễn Sinh Cung", "Nguyễn Tất Thành", "Văn Ba"],
    correct: 0
}, {
    id: "n3",
    q: "Quê nội của Bác ở đâu?",
    a: ["Làng Sen (Kim Liên)", "Làng Chùa (Hoàng Trù)", "Làng Dương Nỗ"],
    correct: 0
}, {
    id: "n4",
    q: "Theo Bác, phẩm chất đạo đức cốt lõi của con người Việt Nam mới là gì?",
    a: ["Trung với nước, hiếu với dân", "Yêu thương con người", "Cần, Kiệm, Liêm, Chính"],
    correct: 2
}, {
    id: "n5",
    q: "Nhật ký trong tù được viết bằng chữ gì?",
    a: ["Chữ Nôm", "Chữ Hán", "Chữ Quốc ngữ"],
    correct: 1
}, {
    id: "n6",
    q: "Bác đọc Tuyên ngôn Độc lập tại đâu?",
    a: ["Quảng trường Ba Đình", "Nhà hát Lớn", "Bến Nhà Rồng"],
    correct: 0
}, {
    id: "n7",
    q: "Người sáng lập Đảng Cộng sản Việt Nam?",
    a: ["Hồ Chí Minh", "Trần Phú", "Lê Hồng Phong"],
    correct: 0
}, {
    id: "n8",
    q: "Hoàn thành câu nói: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải...'",
    a: ["Trồng người", "Giáo dục", "Xây dựng"],
    correct: 0
}, {
    id: "n9",
    q: "Theo tư tưởng Hồ Chí Minh, nòng cốt của đại đoàn kết dân tộc là?",
    a: ["Công - Nông - Trí thức", "Công nhân - Nông dân", "Sĩ - Nông - Công - Thương"],
    correct: 0
}, {
    id: "n10",
    q: "Lăng Bác được khánh thành năm nào?",
    a: ["1973", "1975", "1976"],
    correct: 1
}, {
    id: "n11",
    q: "Bác Hồ sinh ngày tháng năm nào?",
    a: ["19/05/1890", "02/09/1945", "03/02/1930"],
    correct: 0
}, {
    id: "n12",
    q: "Theo Bác, người có Tài mà không có Đức là người như thế nào?",
    a: ["Vô dụng", "Làm việc gì cũng khó", "Nguy hiểm"],
    correct: 0
}, {
    id: "n13",
    q: "Bến Nhà Rồng nằm ở đâu?",
    a: ["TP. Hồ Chí Minh", "Hà Nội", "Hải Phòng"],
    correct: 0
}, {
    id: "n14",
    q: "Bác Hồ về nước (Pác Bó) năm nào?",
    a: ["1930", "1941", "1945"],
    correct: 1
}, {
    id: "n15",
    q: "Tác phẩm 'Đường Kách mệnh' xuất bản năm nào?",
    a: ["1925", "1927", "1930"],
    correct: 1
}]
  , jA = [{
    id: "b1",
    q: "BOSS 1: Bác Hồ viết Tuyên ngôn Độc lập tại đâu?",
    a: ["48 Hàng Ngang", "Lán Nà Nừa", "Pác Bó"],
    correct: 0
}, {
    id: "b2",
    q: "BOSS 2: 'Không có gì quý hơn độc lập tự do' được Bác nói năm nào?",
    a: ["1945", "1966", "1969"],
    correct: 1
}, {
    id: "b3",
    q: "BOSS 3: Bác Hồ về nước ngày 28/1/1941 tại cột mốc biên giới số bao nhiêu?",
    a: ["108", "109", "110"],
    correct: 0
}, {
    id: "b4",
    q: "BOSS 1: Trong Di chúc, việc đầu tiên Bác dặn là về vấn đề gì?",
    a: ["Đảng", "Thanh niên", "Nhân dân"],
    correct: 0
}, {
    id: "b5",
    q: "BOSS 2: Bác Hồ mất năm bao nhiêu?",
    a: ["1969", "1979", "1954"],
    correct: 0
}, {
    id: "b6",
    q: "BOSS 3: Phong trào 'Ba sẵn sàng' xuất phát từ đâu?",
    a: ["Hà Nội", "Sài Gòn", "Huế"],
    correct: 0
}]
  , Dt = 4;
function PA() {
    const [e,t] = m.useState([])
      , [n,r] = m.useState(null)
      , [s,i] = m.useState(null)
      , [o,a] = m.useState(!1)
      , [l,u] = m.useState(!1)
      , [d,h] = m.useState(null)
      , [f,p] = m.useState([])
      , [w,v] = m.useState(0)
      , [b,y] = m.useState([])
      , g = m.useRef(new Set)
      , x = L => {
        const I = L ? jA : NA
          , M = I.filter(z => !g.current.has(z.id))
          , H = M.length > 0 ? M : I
          , B = H[Math.floor(Math.random() * H.length)];
        return g.current.add(B.id),
        B
    }
    ;
    m.useEffect( () => {
        S()
    }
    , []);
    const S = () => {
        g.current.clear(),
        v(0),
        u(!1),
        a(!1),
        t([]),
        r(null),
        i(null),
        h(null);
        const L = [0, 1, 2, 3, 5, 6, 7, 8].sort( () => .5 - Math.random()).slice(0, 4);
        y(L);
        const I = Array(9).fill(null).map( (M, H) => x(H === Dt));
        p(I)
    }
      , C = () => {
        u(!1),
        v(0),
        r(null);
        const L = x(!0);
        p(I => {
            const M = [...I];
            return M[Dt] = L,
            M
        }
        )
    }
      , k = L => {
        const I = x(!1);
        p(M => {
            const H = [...M];
            return H[L] = I,
            H
        }
        )
    }
      , T = e.length >= 8
      , N = L => {
        l || o || e.includes(L) || L === Dt && !T || (r(L),
        i(null),
        h(null))
    }
      , P = L => {
        if (n === null)
            return;
        const I = f[n];
        if (!I)
            return;
        L === I.correct ? E() : V()
    }
      , E = () => {
        if (i("correct"),
        n === Dt && w < 2) {
            setTimeout( () => {
                i(null),
                v(M => M + 1);
                const I = x(!0);
                p(M => {
                    const H = [...M];
                    return H[Dt] = I,
                    H
                }
                )
            }
            , 1e3);
            return
        }
        let L = "2 CÁI KẸO 🍬🍬";
        b.includes(n) && (L = "4 CÁI KẸO (MAY MẮN) 🎉"),
        n === Dt && (L = "1 BỊCH BÁNH + TRÀNG PHÁO TAY 🏆"),
        setTimeout( () => {
            h(L),
            setTimeout( () => {
                t(I => {
                    const M = [...I, n];
                    return M.includes(Dt) && a(!0),
                    M
                }
                ),
                r(null),
                i(null),
                h(null)
            }
            , 2500)
        }
        , 500)
    }
      , V = () => {
        if (i("wrong"),
        n === Dt) {
            setTimeout( () => {
                u(!0),
                r(null)
            }
            , 1e3);
            return
        }
        setTimeout( () => {
            i(null),
            k(n)
        }
        , 1500)
    }
    ;
    return c.jsx("div", {
        className: "min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-red-100 selection:text-red-900",
        children: c.jsxs("main", {
            className: "flex-1 flex flex-col items-center justify-center p-4 pt-24 pb-8 w-full max-w-7xl mx-auto",
            children: [c.jsxs("div", {
                className: "text-center mb-8 animate-fade-in-down",
                children: [c.jsxs("h1", {
                    className: "text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight",
                    children: ["Mảnh Ghép ", c.jsx("span", {
                        className: "text-red-600",
                        children: "Bí Ẩn"
                    })]
                }), c.jsx("p", {
                    className: "text-slate-500 font-medium",
                    children: "Trả lời đúng để nhận kẹo. Cẩn thận với Boss cuối!"
                })]
            }), c.jsxs("div", {
                className: "flex flex-col lg:flex-row gap-8 items-stretch w-full h-[600px] lg:h-[500px]",
                children: [c.jsxs("div", {
                    className: "w-full lg:w-2/3 h-full relative bg-slate-900 shadow-2xl overflow-hidden border-[8px] border-white ring-1 ring-slate-300 rounded-xl",
                    children: [c.jsx("img", {
                        src: kA,
                        className: `absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ease-in-out 
                    ${o ? "scale-100 blur-0 grayscale-0" : "scale-110 blur-3xl grayscale opacity-50"}`,
                        alt: "Hidden Puzzle"
                    }), c.jsx("div", {
                        className: "absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[2px] bg-transparent pointer-events-none",
                        children: Array.from({
                            length: 9
                        }).map( (L, I) => {
                            const M = I === Dt
                              , H = e.includes(I)
                              , B = M && !T;
                            return c.jsx("div", {
                                className: "relative w-full h-full overflow-hidden pointer-events-auto",
                                children: c.jsx(Zs, {
                                    children: !H && c.jsxs(Me.button, {
                                        initial: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0,
                                            rotate: 180
                                        },
                                        transition: {
                                            duration: .5,
                                            ease: "backIn"
                                        },
                                        onClick: () => N(I),
                                        className: `
                                                absolute inset-0 w-full h-full flex flex-col items-center justify-center
                                                transition-all duration-300 z-10 border border-slate-700/30
                                                ${n === I ? "bg-blue-600 z-20 shadow-inner" : ""}
                                                ${!n && !B && !M ? "bg-slate-800 hover:bg-slate-700" : ""}
                                                ${B ? "bg-slate-900 cursor-not-allowed" : ""}
                                                ${M && !B && n !== I ? "bg-red-600 hover:bg-red-500 animate-pulse" : ""}
                                            `,
                                        children: [c.jsx("div", {
                                            className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"
                                        }), B ? c.jsxs("div", {
                                            className: "text-slate-600 flex flex-col items-center",
                                            children: [c.jsx(vk, {
                                                className: "w-8 h-8 mb-1"
                                            }), c.jsx("span", {
                                                className: "text-[10px] font-bold uppercase tracking-widest",
                                                children: "Locked"
                                            })]
                                        }) : M ? c.jsxs("div", {
                                            className: "text-white flex flex-col items-center",
                                            children: [c.jsx(dm, {
                                                className: "w-8 h-8 mb-1 animate-bounce text-yellow-300"
                                            }), c.jsx("span", {
                                                className: "text-xs font-black uppercase text-yellow-300",
                                                children: "BOSS"
                                            })]
                                        }) : c.jsxs("div", {
                                            className: "text-slate-400 group-hover:text-white flex flex-col items-center transition-colors",
                                            children: [c.jsx(lk, {
                                                className: "w-6 h-6 mb-1"
                                            }), c.jsx("span", {
                                                className: "font-bold text-xl",
                                                children: I + 1
                                            })]
                                        })]
                                    })
                                })
                            }, I)
                        }
                        )
                    })]
                }), c.jsx("div", {
                    className: "w-full lg:w-1/3 h-full relative",
                    children: c.jsx(Zs, {
                        mode: "wait",
                        children: l ? c.jsxs(Me.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            className: "bg-red-50 p-8 rounded-3xl border border-red-200 h-full flex flex-col items-center justify-center text-center space-y-6",
                            children: [c.jsx("div", {
                                className: "w-24 h-24 bg-red-100 rounded-full flex items-center justify-center shadow-lg",
                                children: c.jsx(Pk, {
                                    className: "w-12 h-12 text-red-600"
                                })
                            }), c.jsxs("div", {
                                children: [c.jsx("h2", {
                                    className: "text-3xl font-black text-red-800 mb-2 uppercase",
                                    children: "THẤT BẠI!"
                                }), c.jsx("p", {
                                    className: "text-red-700 font-medium",
                                    children: "Bạn đã trả lời sai câu hỏi của Boss."
                                })]
                            }), c.jsxs(Gr, {
                                onClick: C,
                                size: "lg",
                                className: "bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg w-full",
                                children: [c.jsx(Rk, {
                                    className: "w-4 h-4 mr-2"
                                }), " Quyết đấu lại (Hiệp 1)"]
                            })]
                        }, "gameover") : o ? c.jsxs(Me.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            className: "bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl border border-green-200 h-full flex flex-col items-center justify-center text-center space-y-6",
                            children: [c.jsx("div", {
                                className: "w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shadow-green-200",
                                children: c.jsx(_h, {
                                    className: "w-12 h-12 text-green-600"
                                })
                            }), c.jsxs("div", {
                                children: [c.jsx("h2", {
                                    className: "text-3xl font-black text-green-800 mb-2 uppercase",
                                    children: "Hoàn thành!"
                                }), c.jsx("p", {
                                    className: "text-green-700 font-medium",
                                    children: TA
                                })]
                            }), c.jsxs(Gr, {
                                onClick: S,
                                size: "lg",
                                className: "bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg w-full",
                                children: [c.jsx(Sk, {
                                    className: "w-4 h-4 mr-2"
                                }), " Chơi lại từ đầu"]
                            })]
                        }, "won") : d ? c.jsxs(Me.div, {
                            initial: {
                                scale: .5,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 1.5,
                                opacity: 0
                            },
                            className: "absolute inset-0 bg-yellow-50 rounded-3xl border-4 border-yellow-300 flex flex-col items-center justify-center text-center p-6 z-50 shadow-2xl",
                            children: [c.jsx("div", {
                                className: "w-32 h-32 bg-yellow-200 rounded-full flex items-center justify-center mb-6 animate-bounce",
                                children: c.jsx(um, {
                                    className: "w-16 h-16 text-yellow-700"
                                })
                            }), c.jsx("h2", {
                                className: "text-2xl font-black text-yellow-800 mb-2",
                                children: "Chính xác!"
                            }), c.jsx("p", {
                                className: "text-slate-600 mb-4 font-medium",
                                children: "Phần thưởng:"
                            }), c.jsx("div", {
                                className: "bg-white px-8 py-4 rounded-2xl shadow-lg border border-yellow-200 transform scale-110",
                                children: c.jsx("p", {
                                    className: "text-2xl font-black text-red-600 animate-pulse",
                                    children: d
                                })
                            })]
                        }, "reward") : n !== null && f[n] ? c.jsxs(Me.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: -50
                            },
                            className: "bg-white p-8 rounded-3xl shadow-xl border border-slate-200 h-full flex flex-col justify-center relative overflow-hidden",
                            children: [c.jsxs("div", {
                                className: "mb-6 relative z-10",
                                children: [c.jsxs("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [c.jsxs("span", {
                                        className: "text-xs font-bold uppercase tracking-widest bg-slate-100 px-2 py-1 rounded text-slate-500",
                                        children: ["Câu hỏi số ", n + 1]
                                    }), n === Dt && c.jsxs("span", {
                                        className: "text-xs font-bold uppercase tracking-widest bg-red-100 px-2 py-1 rounded text-red-600 flex items-center gap-1 animate-pulse",
                                        children: [c.jsx(dm, {
                                            className: "w-3 h-3"
                                        }), " Hiệp", " ", w + 1, "/3"]
                                    }), b.includes(n) && c.jsxs("span", {
                                        className: "text-xs font-bold uppercase tracking-widest bg-purple-100 px-2 py-1 rounded text-purple-600 flex items-center gap-1",
                                        children: [c.jsx(qs, {
                                            className: "w-3 h-3"
                                        }), " May mắn"]
                                    })]
                                }), c.jsx("h3", {
                                    className: "text-xl font-bold text-slate-800 leading-relaxed min-h-[80px]",
                                    children: f[n].q
                                })]
                            }), c.jsx("div", {
                                className: "space-y-3 relative z-10",
                                children: f[n].a.map( (L, I) => c.jsxs("button", {
                                    onClick: () => P(I),
                                    disabled: s !== null,
                                    className: `
                                            w-full p-4 rounded-xl text-left border-2 font-medium transition-all duration-200 flex items-center justify-between
                                            ${s === null ? "border-slate-100 bg-slate-50 hover:border-blue-400 hover:bg-white hover:shadow-md hover:scale-[1.02]" : ""}
                                            ${s === "correct" && I === f[n].correct ? "border-green-500 bg-green-100 text-green-800 shadow-md" : ""}
                                            ${s === "wrong" && I === f[n].correct ? "border-green-500 bg-green-100 text-green-800" : ""} 
                                            ${s === "wrong" && I !== f[n].correct ? "opacity-30 grayscale" : ""}
                                        `,
                                    children: [c.jsx("span", {
                                        children: L
                                    }), s === "correct" && I === f[n].correct && c.jsx(sd, {
                                        className: "w-5 h-5 text-green-600"
                                    }), s === "wrong" && I !== f[n].correct && s !== null && c.jsx("span", {
                                        className: "w-5 h-5"
                                    })]
                                }, I))
                            }), s === "wrong" && c.jsxs(Me.div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-red-500 text-center mt-6 font-bold flex flex-col items-center gap-1",
                                children: [c.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [c.jsx(id, {
                                        className: "w-5 h-5"
                                    }), " Sai rồi!"]
                                }), c.jsx("div", {
                                    className: "text-xs font-normal text-red-400",
                                    children: n === Dt ? "Bạn đã thua cuộc!" : c.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [c.jsx(jk, {
                                            className: "w-3 h-3"
                                        }), " Đang đổi câu hỏi..."]
                                    })
                                })]
                            })]
                        }, "question") : c.jsxs(Me.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "bg-slate-100/50 p-8 rounded-3xl border-2 border-dashed border-slate-300 h-full flex flex-col items-center justify-center text-center text-slate-400",
                            children: [c.jsx(um, {
                                className: "w-16 h-16 mb-4 opacity-30"
                            }), c.jsx("h3", {
                                className: "text-xl font-bold text-slate-500",
                                children: "Mời chọn mảnh ghép"
                            }), c.jsxs("div", {
                                className: "mt-6 space-y-3 text-sm text-slate-600 bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-left w-full",
                                children: [c.jsxs("p", {
                                    className: "flex items-center justify-between",
                                    children: [c.jsx("span", {
                                        children: "🎁 Ô thường:"
                                    }), " ", c.jsx("span", {
                                        className: "font-bold text-slate-900",
                                        children: "2 Kẹo"
                                    })]
                                }), c.jsxs("p", {
                                    className: "flex items-center justify-between",
                                    children: [c.jsx("span", {
                                        children: "✨ Ô May mắn:"
                                    }), " ", c.jsx("span", {
                                        className: "font-bold text-purple-600",
                                        children: "4 Kẹo (4 Ô)"
                                    })]
                                }), c.jsxs("p", {
                                    className: "flex items-center justify-between",
                                    children: [c.jsx("span", {
                                        children: "🔥 BOSS (3 câu):"
                                    }), " ", c.jsx("span", {
                                        className: "font-bold text-red-600",
                                        children: "1 BỊCH BÁNH"
                                    })]
                                })]
                            })]
                        }, "idle")
                    })
                })]
            })]
        })
    })
}
const EA = () => {
    const e = [{
        title: "Tư tưởng Hồ Chí Minh về con người và xây dựng con người mới",
        source: "Tạp chí Cộng sản",
        desc: "Bài viết chuyên sâu phân tích quan điểm của Bác về vai trò của con người trong sự nghiệp cách mạng.",
        url: "https://www.tapchicongsan.org.vn/web/guest/hoc-tap-va-lam-theo-tu-tuong-ao-uc-phong-cach-ho-chi-minh1/-/2018/1048003/tu-tuong-ho-chi-minh-ve-con-nguoi-voi-viec-xay-dung-va-phat-huy-nhan-to-con-nguoi-de-phat-trien-dat-nuoc-phon-vinh%2C-hanh-phuc-trong-boi-canh-hoi-nhap-quoc-te-hien-nay.aspx",
        icon: wk,
        color: "text-red-600 bg-red-50"
    }, {
        title: "Vận dụng tư tưởng Hồ Chí Minh về phát huy nhân tố con người hiện nay",
        source: "Tạp chí Cộng sản",
        desc: "Bài nghiên cứu chuyên sâu về việc khơi dậy nguồn lực con người trong xây dựng và bảo vệ đất nước.",
        url: "https://tapchicongsan.org.vn/web/guest/hoc-tap-va-lam-theo-tu-tuong-ao-uc-phong-cach-ho-chi-minh1/-/2018/50239/van-dung-tu-tuong-ho-chi-minh-ve-phat-huy-nhan-to-con-nguoi-trong-xay-dung-va-bao-ve-dat-nuoc-hien-nay.aspx",
        icon: od,
        color: "text-blue-600 bg-blue-50"
    }, {
        title: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc Đại học)",
        source: "NXB Chính trị Quốc gia Sự thật",
        desc: "Tài liệu học tập chính thống của Bộ Giáo dục & Đào tạo. (Link mua/tham khảo sách gốc).",
        url: "https://sachquocgia.vn/giao-trinh-tu-tuong-ho-chi-minh-danh-cho-bac-dai-hoc-he-khong-chuyen-ly-luan-chinh-tri-b12468.html",
        icon: lr,
        color: "text-emerald-600 bg-emerald-50"
    }, {
        title: "Toàn văn Di chúc của Chủ tịch Hồ Chí Minh",
        source: "Báo Chính phủ",
        desc: "Bản di chúc lịch sử với những lời căn dặn tâm huyết về việc bồi dưỡng thế hệ cách mạng.",
        url: "https://baochinhphu.vn/toan-van-di-chuc-cua-chu-tich-ho-chi-minh-102169104.htm",
        icon: od,
        color: "text-purple-600 bg-purple-50"
    }]
      , t = [{
        title: "Phim tài liệu: Hồ Chí Minh - Chân dung một con người",
        channel: "Phim Tài Liệu (Nguồn VTV)",
        duration: "58 phút",
        url: "https://www.youtube.com/watch?v=e51E8mbMyyc",
        thumb: "bg-gradient-to-br from-gray-900 to-gray-800"
    }, {
        title: "GS. Hoàng Chí Bảo nói về Tư tưởng, Đạo đức Hồ Chí Minh",
        channel: "Kênh Tuyên Giáo",
        duration: "1 giờ 45 phút",
        url: "https://www.youtube.com/watch?v=4oqCmr3FtAI",
        thumb: "bg-gradient-to-br from-red-900 to-red-800"
    }, {
        title: "Chuyên đề: Chăm lo đời sống Nhân dân theo tư tưởng Bác",
        channel: "GS.TS Hoàng Chí Bảo",
        duration: "1 giờ 30 phút",
        url: "https://www.youtube.com/watch?v=orzJX1ffkeg",
        thumb: "bg-gradient-to-br from-blue-900 to-blue-800"
    }];
    return c.jsxs("div", {
        className: "min-h-screen relative font-sans",
        children: [c.jsxs("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden -z-10",
            children: [c.jsx("div", {
                className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]"
            }), c.jsx("div", {
                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px]"
            })]
        }), c.jsxs("main", {
            className: "container mx-auto px-4 pt-28 pb-20",
            children: [c.jsxs("div", {
                className: "text-center mb-16 animate-fade-in-up",
                children: [c.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6",
                    children: [c.jsx(yk, {
                        className: "w-4 h-4 text-primary"
                    }), c.jsx("span", {
                        className: "text-sm font-bold text-gra  y-700 uppercase tracking-wide",
                        children: "Thư viện số MLN131"
                    })]
                }), c.jsxs("h1", {
                    className: "text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight",
                    children: ["Nguồn Tài liệu & ", c.jsx("br", {}), c.jsx("span", {
                        className: "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500",
                        children: "Trích dẫn Uy tín"
                    })]
                }), c.jsx("p", {
                    className: "text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed",
                    children: "Tổng hợp các văn kiện, bài báo khoa học và tư liệu hình ảnh chính thống phục vụ cho việc nghiên cứu và học tập môn Tư tưởng Hồ Chí Minh."
                })]
            }), c.jsxs("div", {
                className: "mb-20",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [c.jsx("div", {
                        className: "p-2 bg-red-100 rounded-lg text-red-600",
                        children: c.jsx(lr, {
                            size: 24
                        })
                    }), c.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Văn kiện & Bài nghiên cứu"
                    })]
                }), c.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: e.map( (n, r) => {
                        const s = n.icon;
                        return c.jsx("a", {
                            href: n.url,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "group relative p-6 bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                            children: c.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [c.jsx("div", {
                                    className: `p-3 rounded-xl flex-shrink-0 ${n.color}`,
                                    children: c.jsx(s, {
                                        size: 24
                                    })
                                }), c.jsxs("div", {
                                    children: [c.jsx("h3", {
                                        className: "text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors",
                                        children: n.title
                                    }), c.jsxs("p", {
                                        className: "text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider",
                                        children: ["Nguồn: ", n.source]
                                    }), c.jsx("p", {
                                        className: "text-gray-600 text-sm leading-relaxed mb-4",
                                        children: n.desc
                                    }), c.jsxs("div", {
                                        className: "inline-flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary",
                                        children: ["Xem chi tiết ", c.jsx(dx, {
                                            size: 14,
                                            className: "ml-1"
                                        })]
                                    })]
                                })]
                            })
                        }, r)
                    }
                    )
                })]
            }), c.jsxs("div", {
                className: "mb-20",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [c.jsx("div", {
                        className: "p-2 bg-blue-100 rounded-lg text-blue-600",
                        children: c.jsx(fx, {
                            size: 24
                        })
                    }), c.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Video & Tư liệu hình ảnh"
                    })]
                }), c.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: t.map( (n, r) => c.jsxs("a", {
                        href: n.url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100",
                        children: [c.jsxs("div", {
                            className: `relative h-48 w-full ${n.thumb} flex items-center justify-center`,
                            children: [c.jsx("div", {
                                className: "w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform",
                                children: c.jsx(co, {
                                    className: "text-white fill-white",
                                    size: 20
                                })
                            }), c.jsx("div", {
                                className: "absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white font-mono",
                                children: n.duration
                            })]
                        }), c.jsxs("div", {
                            className: "p-5",
                            children: [c.jsx("p", {
                                className: "text-xs font-bold text-red-500 uppercase mb-2",
                                children: n.channel
                            }), c.jsx("h3", {
                                className: "font-bold text-gray-900 leading-tight mb-2 group-hover:text-red-600 transition-colors line-clamp-2",
                                children: n.title
                            }), c.jsxs("div", {
                                className: "flex items-center text-sm text-gray-400 gap-1 mt-4",
                                children: ["Xem trên YouTube ", c.jsx(Qn, {
                                    size: 14
                                })]
                            })]
                        })]
                    }, r))
                })]
            }), c.jsxs("div", {
                className: "relative rounded-3xl bg-gray-900 text-white p-8 md:p-12 overflow-hidden",
                children: [c.jsx("div", {
                    className: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                }), c.jsxs("div", {
                    className: "relative z-10 flex flex-col md:flex-row gap-8 items-start",
                    children: [c.jsx("div", {
                        className: "p-4 bg-white/10 rounded-2xl",
                        children: c.jsx(dk, {
                            size: 32,
                            className: "text-white"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: "Cam kết Bản quyền & Mục đích sử dụng"
                        }), c.jsxs("p", {
                            className: "text-gray-400 leading-relaxed mb-6 max-w-3xl",
                            children: ["Website này là sản phẩm bài tập môn học", " ", c.jsx("strong", {
                                children: "MLN131 (Tư tưởng Hồ Chí Minh)"
                            }), " tại Đại học FPT. Tất cả nội dung, hình ảnh, và video được sưu tầm từ các nguồn chính thống (Đảng Cộng sản Việt Nam, VTV, Tạp chí Cộng sản...) nhằm mục đích giáo dục và phi lợi nhuận."]
                        })]
                    })]
                })]
            })]
        })]
    })
}
  , RA = () => {
    const e = vr();
    return m.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), c.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), c.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , AA = [{
    id: 1,
    title: "Nền tảng chính trị – tư tưởng",
    subtitle: "Con người XHCN",
    description: "Kiên định mục tiêu độc lập dân tộc & CNXH. Giữ vững quyền làm chủ và chống suy thoái đạo đức.",
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
    icon: Ih
}, {
    id: 2,
    title: "Vai trò trong xây dựng xã hội",
    subtitle: "Nhiệm vụ thời kỳ quá độ",
    description: "Tham gia cải tạo và xây dựng trên 4 lĩnh vực then chốt: Chính trị, Kinh tế, Văn hóa và Xã hội.",
    color: "from-purple-500 to-pink-400",
    shadow: "shadow-purple-500/20",
    icon: lr
}, {
    id: 3,
    title: "Rèn luyện đạo đức & phẩm chất",
    subtitle: "Hoàn thiện nhân cách",
    description: "Thực hành đạo đức cách mạng, nâng cao năng lực trí tuệ và phát huy dân chủ trong thời đại mới.",
    color: "from-orange-500 to-amber-400",
    shadow: "shadow-orange-500/20",
    icon: qs
}]
  , MA = () => c.jsxs("div", {
    className: "min-h-screen relative bg-[#fdfbf6] font-sans selection:bg-primary/30",
    children: [c.jsxs("div", {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        children: [c.jsx("div", {
            className: "absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[100px]"
        }), c.jsx("div", {
            className: "absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px]"
        })]
    }), c.jsxs("main", {
        className: "relative container mx-auto px-4 pt-28 pb-20",
        children: [c.jsxs("div", {
            className: "text-center mb-16 space-y-4 animate-fade-in-up",
            children: [c.jsx("span", {
                className: "inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-wider uppercase",
                children: "Lộ trình học tập"
            }), c.jsxs("h1", {
                className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight",
                children: ["Nội dung", " ", c.jsx("span", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600",
                    children: "Bài Học"
                })]
            }), c.jsx("p", {
                className: "text-lg text-gray-600 max-w-2xl mx-auto",
                children: "Hành trình khám phá tư tưởng Hồ Chí Minh về con người xã hội chủ nghĩa qua 3 chủ điểm chính."
            })]
        }), c.jsxs("div", {
            className: "max-w-4xl mx-auto relative",
            children: [c.jsx("div", {
                className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden md:block"
            }), c.jsx("div", {
                className: "space-y-8 md:space-y-12",
                children: AA.map( (e, t) => {
                    const n = e.icon
                      , r = t % 2 === 0;
                    return c.jsx(Qe, {
                        to: `/bai-hoc/${e.id}`,
                        className: "group relative block",
                        children: c.jsxs("div", {
                            className: `flex flex-col md:flex-row items-center gap-8 ${r ? "md:flex-row" : "md:flex-row-reverse"}`,
                            children: [c.jsx("div", {
                                className: "flex-1 w-full md:w-auto",
                                children: c.jsxs("div", {
                                    className: `
                        relative bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl
                        transition-all duration-300 hover:-translate-y-2 hover:bg-white/80
                        ${e.shadow} hover:shadow-2xl
                      `,
                                    children: [c.jsx("div", {
                                        className: `
                          absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg
                          bg-gradient-to-br ${e.color} rotate-12 group-hover:rotate-0 transition-all duration-300
                        `,
                                        children: e.id
                                    }), c.jsxs("div", {
                                        className: "space-y-3",
                                        children: [c.jsx("div", {
                                            className: "w-fit p-2 rounded-lg bg-gray-50 text-gray-600",
                                            children: c.jsx(n, {
                                                size: 20
                                            })
                                        }), c.jsxs("div", {
                                            children: [c.jsx("h3", {
                                                className: "text-sm font-semibold text-gray-400 uppercase tracking-wider",
                                                children: e.subtitle
                                            }), c.jsx("h2", {
                                                className: "text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all",
                                                children: e.title
                                            })]
                                        }), c.jsx("p", {
                                            className: "text-gray-600 leading-relaxed",
                                            children: e.description
                                        })]
                                    }), c.jsxs("div", {
                                        className: "mt-6 flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors",
                                        children: ["Bắt đầu học", " ", c.jsx(Qn, {
                                            className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        })]
                                    })]
                                })
                            }), c.jsx("div", {
                                className: "absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-gray-100 z-10 shadow-sm group-hover:scale-125 group-hover:border-primary/20 transition-all duration-300",
                                children: c.jsx("div", {
                                    className: `w-2 h-2 rounded-full bg-gradient-to-r ${e.color}`
                                })
                            }), c.jsx("div", {
                                className: "flex-1 hidden md:block"
                            })]
                        })
                    }, e.id)
                }
                )
            })]
        })]
    })]
})
  , LA = [{
    id: 1,
    title: "Xây dựng nền tảng chính trị – tư tưởng của con người XHCN",
    blocks: [{
        title: "Kiên định mục tiêu cách mạng",
        content: ["Nhận thức rõ rằng tiến lên CNXH và CNCS là quá trình hợp quy luật.", 'Kiên định "nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội".', "Bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản Việt Nam."],
        image: "https://mia.vn/media/uploads/blog-du-lich/le-dieu-binh-304-1-1744792073.jpg"
    }, {
        title: "Thực hiện quyền làm chủ",
        content: ["Nhân dân là chủ và làm chủ.", "Phát huy dân chủ XHCN đi đôi với tăng cường pháp chế.", "Công dân có trách nhiệm tham gia quản lý nhà nước và xã hội."],
        image: "https://hdll.vn/FileUpload/Images/becaebcabc.jpg"
    }, {
        title: "Chống suy thoái tư tưởng – đạo đức",
        content: ["Xây dựng Đảng là nhiệm vụ then chốt.", "Đấu tranh chống suy thoái chính trị, đạo đức, lối sống.", '"Tự diễn biến", "tự chuyển hóa" cần được ngăn chặn.'],
        image: "https://media.anhp.vn/files/kimanh/bvtt4.png"
    }]
}, {
    id: 2,
    title: "Vai trò con người XHCN trong xây dựng xã hội",
    blocks: [{
        title: "Kinh tế",
        content: ["Con người xã hội chủ nghĩa phải tham gia cải tạo nền kinh tế cũ.", "Xây dựng nền kinh tế mới với công nghiệp và nông nghiệp hiện đại.", "Mỗi cá nhân góp phần xây dựng cơ sở vật chất cho đất nước, nâng cao đời sống nhân dân.", "Ví dụ: tham gia sản xuất, khởi nghiệp, ứng dụng khoa học – kỹ thuật vào nông nghiệp để tăng năng suất."],
        image: "https://bcp.cdnchinhphu.vn/zoom/600_315/334894974524682240/2024/2/20/kttt-1708420500569224559784-0-35-373-632-crop-17084206745111720348527.jpg"
    }, {
        title: "Văn hóa",
        content: ["Xóa bỏ những di tích và ảnh hưởng nô dịch của chế độ thuộc địa.", "Phát huy truyền thống văn hóa tốt đẹp của dân tộc.", "Hấp thụ tinh hoa văn hóa tiến bộ của nhân loại.", "Tham gia xóa mù chữ, phát triển giáo dục và thực hiện nếp sống mới, lành mạnh.", "Văn hóa trở thành động lực tinh thần của xã hội."],
        image: "https://www.quanlynhanuoc.vn/wp-content/uploads/2023/03/131907852416845906_page3-donghaweb.jpg"
    }, {
        title: "Xã hội",
        content: ["Góp phần thay đổi những quan hệ cũ và lối sống cũ.", "Xây dựng xã hội dân chủ, công bằng, văn minh.", "Tăng cường khối đại đoàn kết dân tộc.", "Nền tảng đoàn kết là liên minh công – nông – trí thức."],
        image: "https://thainguyen.dcs.vn/uploads/xay-dung-dang/2023_04/image-20230422094112-1.jpeg"
    }, {
        title: "Quốc tế",
        content: ["Đoàn kết và gắn bó với phong trào cách mạng thế giới.", "Tạo nên sức mạnh tổng hợp trong đấu tranh vì hòa bình và tiến bộ nhân loại.", "Đóng góp vào sự nghiệp độc lập, dân chủ và chủ nghĩa xã hội trên phạm vi toàn cầu."],
        image: "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3efdfc41bc764369360f987d1611d9ac36af866bc6a7d63a0dd20e1034652aae96763a899dc0d598a8828a44264337440e8/vlc-9427.jpg"
    }]
}, {
    id: 3,
    title: "Rèn luyện đạo đức và phẩm chất con người XHCN",
    blocks: [{
        title: "Đạo đức cách mạng",
        content: ["Lợi ích của dân là tối thượng.", '"Việc gì có lợi cho dân thì hết sức làm…"', "Rèn luyện cần, kiệm, liêm, chính; chí công vô tư."],
        image: "https://image.viettimes.vn/w800/Uploaded/2025/bpcpcwvo/2024_07_20/452099633-1025761722785095-865785060880384424-n-1369.jpg"
    }, {
        title: "Nâng cao trình độ & năng lực",
        content: ["Con người XHCN phải có trình độ văn hóa, khoa học – kỹ thuật.", "Học tập suốt đời.", "Làm chủ công nghệ trong thời đại 4.0."],
        image: "https://vietq.vn/Images/ngocxen/2025/11/18/thi-tay-nghe-the-gioi-ok.jpg"
    }, {
        title: "Phát huy vai trò chủ thể dân chủ",
        content: ["Tôn trọng, bảo vệ quyền con người.", "Thực hành dân chủ trực tiếp & đại diện.", "Tham gia vào hệ thống chính trị."],
        image: "https://cdn.nhandan.vn/images/d233c8299c7755bbf317d96e7a85fcf744f00574f1e76dfe1b78b9611d7f7927a922b1b8dbf016e7a1503be9f6d70311e3f0d8851bd64e94f130a81f09b01393/IMG_310-1621763285156.jpg"
    }, {
        title: "Hoàn thiện nhân cách",
        content: ["Tự giác rèn luyện.", "Kết hợp đạo đức, tri thức, lối sống văn minh."],
        image: "https://congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2022/11/18/img0010-2-1668756156364433168339.jpeg"
    }]
}]
  , DA = () => {
    const {id: e} = MP()
      , t = LA.find(n => n.id === Number(e));
    return m.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [e]),
    t ? c.jsxs("div", {
        className: "min-h-screen bg-[#fdfbf6] text-gray-800 font-sans",
        children: [c.jsx("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
            children: c.jsx("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-orange-50/80 to-transparent"
            })
        }), c.jsxs("main", {
            className: "relative z-10 container mx-auto px-4 pt-28 pb-20",
            children: [c.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-wide font-medium",
                children: [c.jsx(Qe, {
                    to: "/bai-hoc",
                    className: "hover:text-primary transition-colors",
                    children: "Bài Học"
                }), c.jsx(ux, {
                    size: 14
                }), c.jsxs("span", {
                    className: "text-gray-900",
                    children: ["Bài ", t.id]
                })]
            }), c.jsxs("div", {
                className: "max-w-4xl mx-auto text-center mb-20 animate-fade-in-up",
                children: [c.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6",
                    children: t.title
                }), c.jsx("div", {
                    className: "w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto"
                })]
            }), c.jsx("div", {
                className: "max-w-5xl mx-auto space-y-24",
                children: t.blocks.map( (n, r) => c.jsxs("div", {
                    className: `flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${r % 2 !== 0 ? "md:flex-row-reverse" : ""} group`,
                    children: [c.jsxs("div", {
                        className: "w-full md:w-1/2 relative",
                        children: [c.jsxs("div", {
                            className: "relative rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]",
                            children: [c.jsx("div", {
                                className: "absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"
                            }), c.jsx("img", {
                                src: n.image,
                                alt: n.title,
                                className: "w-full h-[350px] lg:h-[450px] object-cover"
                            })]
                        }), c.jsx("div", {
                            className: `absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl -z-10 ${r % 2 !== 0 ? "left-auto -right-10" : "-left-10 right-auto"}`
                        })]
                    }), c.jsxs("div", {
                        className: "w-full md:w-1/2 space-y-6",
                        children: [c.jsx("div", {
                            className: "flex items-baseline gap-4",
                            children: c.jsxs("span", {
                                className: "text-6xl font-black text-gray-100 font-serif -mb-8 select-none",
                                children: ["0", r + 1]
                            })
                        }), c.jsxs("h2", {
                            className: "text-3xl font-bold text-gray-900 relative inline-block",
                            children: [n.title, c.jsx("span", {
                                className: "absolute bottom-1 left-0 w-full h-3 bg-yellow-200/60 -z-10 transform -rotate-1"
                            })]
                        }), c.jsx("div", {
                            className: "space-y-4 pt-2",
                            children: n.content.map( (s, i) => c.jsxs("div", {
                                className: "flex gap-4 items-start",
                                children: [c.jsx("div", {
                                    className: "mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                                }), c.jsx("p", {
                                    className: "text-lg text-gray-600 leading-relaxed font-light",
                                    children: s
                                })]
                            }, i))
                        })]
                    })]
                }, r))
            }), c.jsx("div", {
                className: "max-w-4xl mx-auto mt-24 pt-10 border-t border-gray-200",
                children: c.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [t.id > 1 ? c.jsxs(Qe, {
                        to: `/bai-hoc/${t.id - 1}`,
                        className: "group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all",
                        children: [c.jsx("div", {
                            className: "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors",
                            children: c.jsx(ax, {
                                className: "w-5 h-5 text-gray-600 group-hover:text-primary"
                            })
                        }), c.jsxs("div", {
                            className: "text-left",
                            children: [c.jsx("p", {
                                className: "text-xs text-gray-400 font-semibold uppercase",
                                children: "Bài trước"
                            }), c.jsx("p", {
                                className: "font-bold text-gray-800",
                                children: "Quay lại"
                            })]
                        })]
                    }) : c.jsx("div", {}), t.id < 3 ? c.jsxs(Qe, {
                        to: `/bai-hoc/${t.id + 1}`,
                        className: "group flex flex-row-reverse items-center gap-3 px-6 py-4 rounded-2xl bg-gray-900 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all",
                        children: [c.jsx("div", {
                            className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",
                            children: c.jsx(Qn, {
                                className: "w-5 h-5"
                            })
                        }), c.jsxs("div", {
                            className: "text-right",
                            children: [c.jsx("p", {
                                className: "text-xs text-white/60 font-semibold uppercase",
                                children: "Bài tiếp theo"
                            }), c.jsx("p", {
                                className: "font-bold",
                                children: "Đọc tiếp"
                            })]
                        })]
                    }) : c.jsxs(Qe, {
                        to: "/ket-luan",
                        className: "group flex flex-row-reverse items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:scale-105 transition-all",
                        children: [c.jsx("div", {
                            className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse",
                            children: c.jsx(Qn, {
                                className: "w-5 h-5"
                            })
                        }), c.jsxs("div", {
                            className: "text-right",
                            children: [c.jsx("p", {
                                className: "text-xs text-white/80 font-semibold uppercase",
                                children: "Hoàn thành"
                            }), c.jsx("p", {
                                className: "font-bold text-lg",
                                children: "Xem Tổng Kết"
                            })]
                        })]
                    })]
                })
            })]
        })]
    }) : c.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-[#fdfbf6]",
        children: c.jsxs("div", {
            className: "text-center space-y-4",
            children: [c.jsx("h1", {
                className: "text-2xl font-bold text-gray-800",
                children: "Không tìm thấy bài học"
            }), c.jsx(Qe, {
                to: "/bai-hoc",
                className: "text-primary font-semibold hover:underline",
                children: "← Quay lại danh sách"
            })]
        })
    })
}
  , OA = () => c.jsx("div", {
    className: "min-h-screen bg-[#fdfbf6] font-sans",
    children: c.jsxs("main", {
        className: "container mx-auto px-4 pt-28 pb-20",
        children: [c.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16 animate-fade-in-up",
            children: [c.jsxs("div", {
                className: "inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6",
                children: [c.jsx(lx, {
                    className: "w-4 h-4"
                }), " Tổng kết chuyên đề"]
            }), c.jsxs("h1", {
                className: "text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight",
                children: ["Chân dung ", c.jsx("br", {}), c.jsx("span", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500",
                    children: "Con người XHCN"
                })]
            }), c.jsx("p", {
                className: "text-xl text-gray-600 leading-relaxed",
                children: "Sự kết hợp hài hòa giữa bản lĩnh chính trị vững vàng, năng lực xây dựng xã hội và phẩm chất đạo đức trong sáng."
            })]
        }), c.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",
            children: [c.jsxs("div", {
                className: "md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-500 flex flex-col",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"
                }), c.jsxs("div", {
                    className: "p-8 relative z-10 flex-1 flex flex-col",
                    children: [c.jsx("div", {
                        className: "w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                        children: c.jsx(px, {
                            size: 28
                        })
                    }), c.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "Bản lĩnh Chính trị"
                    }), c.jsxs("ul", {
                        className: "space-y-4 flex-1",
                        children: [c.jsxs("li", {
                            className: "flex gap-3 text-gray-600",
                            children: [c.jsx(Fc, {
                                className: "w-5 h-5 text-blue-500 flex-shrink-0"
                            }), c.jsx("span", {
                                children: "Kiên định độc lập dân tộc & CNXH"
                            })]
                        }), c.jsxs("li", {
                            className: "flex gap-3 text-gray-600",
                            children: [c.jsx(Fc, {
                                className: "w-5 h-5 text-blue-500 flex-shrink-0"
                            }), c.jsx("span", {
                                children: "Làm chủ đất nước, làm chủ xã hội"
                            })]
                        }), c.jsxs("li", {
                            className: "flex gap-3 text-gray-600",
                            children: [c.jsx(Fc, {
                                className: "w-5 h-5 text-blue-500 flex-shrink-0"
                            }), c.jsx("span", {
                                children: 'Chống suy thoái, "tự diễn biến"'
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "relative h-48 w-full",
                    children: [c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10"
                    }), c.jsx("img", {
                        src: "https://ussh.vnu.edu.vn/uploads/ussh/news/2020_02/28768622aa63433d1a72-20200203003248360.jpg",
                        className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700",
                        alt: "Chính trị"
                    })]
                })]
            }), c.jsxs("div", {
                className: "md:col-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl transition-all duration-500",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent opacity-50"
                }), c.jsxs("div", {
                    className: "p-8 relative z-10 flex flex-col md:flex-row gap-8 items-center h-full",
                    children: [c.jsxs("div", {
                        className: "flex-1",
                        children: [c.jsx("div", {
                            className: "w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                            children: c.jsx(Lk, {
                                size: 28
                            })
                        }), c.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-2",
                            children: "Vai trò Xã hội"
                        }), c.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "Trung tâm của sự phát triển, tham gia tích cực vào cải tạo và xây dựng trên 4 trụ cột: Kinh tế, Văn hóa, Xã hội và Hội nhập Quốc tế."
                        })]
                    }), c.jsxs("div", {
                        className: "w-full md:w-5/12 h-48 md:h-full rounded-2xl overflow-hidden relative",
                        children: [c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent z-10"
                        }), c.jsx("img", {
                            src: "https://dangcongsan.vn/upload/2006988/fck/phuongdt/doan-ket-4725.png",
                            className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700",
                            alt: "Xã hội"
                        })]
                    })]
                })]
            }), c.jsxs("div", {
                className: "md:col-span-1 relative group overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-red-900/5 hover:shadow-2xl transition-all duration-500 h-full min-h-[300px]",
                children: [c.jsxs("div", {
                    className: "absolute inset-0",
                    children: [c.jsx("img", {
                        src: "https://tulieuvankien.dangcongsan.vn/upload/3000006/20251024/346b26d723c9345ad1a7bd179162416eTRANH-CD-HTAP-BAC-HO-2015-250.jpg",
                        className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700",
                        alt: "Đạo đức"
                    }), c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/60 to-red-900/30 mix-blend-multiply"
                    }), c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-red-50/30 to-transparent"
                    })]
                }), c.jsxs("div", {
                    className: "p-8 relative z-20 h-full flex flex-col justify-between",
                    children: [c.jsxs("div", {
                        children: [c.jsx("div", {
                            className: "w-14 h-14 rounded-2xl bg-red-100/90 backdrop-blur-sm text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm",
                            children: c.jsx(pk, {
                                size: 28
                            })
                        }), c.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-4 drop-shadow-sm",
                            children: "Phẩm chất Đạo đức"
                        })]
                    }), c.jsx("p", {
                        className: "text-red-50/90 font-medium leading-relaxed drop-shadow-sm",
                        children: "Cần, kiệm, liêm, chính, chí công vô tư. Đặt lợi ích của nhân dân lên trên hết."
                    })]
                })]
            }), c.jsxs("div", {
                className: "md:col-span-1 flex flex-col justify-center items-center text-center p-8 rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl h-full min-h-[300px]",
                children: [c.jsx("h3", {
                    className: "text-2xl font-bold mb-2",
                    children: "Bạn đã sẵn sàng?"
                }), c.jsx("p", {
                    className: "text-gray-400 mb-8 text-sm",
                    children: "Cùng ôn tập lại kiến thức cùng chúng mình nào."
                }), c.jsx(Qe, {
                    to: "/on-tap",
                    className: "px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform w-full shadow-lg hover:shadow-white/20",
                    children: "Ôn tập ngay"
                }), c.jsxs(Qe, {
                    to: "/bai-hoc",
                    className: "mt-6 text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors group",
                    children: [c.jsx(ax, {
                        size: 16,
                        className: "group-hover:-translate-x-1 transition-transform"
                    }), " ", "Xem lại bài học"]
                })]
            })]
        })]
    })
})
  , o0 = "https://wayground.com/join?gc=39811066&source=liveDashboard"
  , VA = "3981 1066";
function _A() {
    const [e,t] = m.useState("lobby");
    return c.jsxs("div", {
        className: "min-h-screen bg-slate-900 flex flex-col font-sans selection:bg-purple-500 selection:text-white overflow-hidden",
        children: [c.jsx("div", {
            className: "fixed top-24 left-0 right-0 z-40 flex justify-center pointer-events-none",
            children: c.jsxs("div", {
                className: "bg-slate-800/90 backdrop-blur-md p-1.5 rounded-full border border-slate-700 shadow-2xl pointer-events-auto flex gap-1",
                children: [c.jsxs("button", {
                    onClick: () => t("lobby"),
                    className: `
                    flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all
                    ${e === "lobby" ? "bg-purple-600 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-white/5"}
                `,
                    children: [c.jsx(Ek, {
                        className: "w-4 h-4"
                    }), " Quét mã"]
                }), c.jsxs("button", {
                    onClick: () => t("embed"),
                    className: `
                    flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all
                    ${e === "embed" ? "bg-purple-600 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-white/5"}
                `,
                    children: [c.jsx(fx, {
                        className: "w-4 h-4"
                    }), " Chơi trên Web"]
                })]
            })
        }), c.jsx("main", {
            className: "flex-1 relative pt-20 h-screen w-full",
            children: c.jsx(Zs, {
                mode: "wait",
                children: e === "lobby" ? c.jsxs(Me.div, {
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 1.05
                    },
                    transition: {
                        duration: .4
                    },
                    className: "flex flex-col items-center justify-center h-full p-4 relative",
                    children: [c.jsx("div", {
                        className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"
                    }), c.jsx("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
                    }), c.jsxs("div", {
                        className: "relative z-10 max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center",
                        children: [c.jsxs("div", {
                            className: "text-left space-y-8 animate-fade-in-up",
                            children: [c.jsxs("div", {
                                children: [c.jsxs("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4",
                                    children: [c.jsx(lo, {
                                        className: "w-5 h-5 text-purple-400"
                                    }), c.jsx("span", {
                                        className: "text-purple-300 font-bold text-sm tracking-wider",
                                        children: "LIVE GAME SHOW"
                                    })]
                                }), c.jsxs("h1", {
                                    className: "text-5xl md:text-7xl font-black text-white leading-tight mb-4",
                                    children: ["Đấu trường ", c.jsx("br", {}), c.jsx("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
                                        children: "Tri Thức"
                                    })]
                                }), c.jsx("p", {
                                    className: "text-slate-400 text-lg max-w-lg",
                                    children: "Sử dụng điện thoại để quét mã bên cạnh. Cùng tranh tài kiến thức về Tư tưởng Hồ Chí Minh ngay bây giờ!"
                                })]
                            }), c.jsxs("div", {
                                className: "bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm w-fit",
                                children: [c.jsx("p", {
                                    className: "text-slate-400 text-xs uppercase tracking-widest mb-1",
                                    children: "Mã phòng (Game Code)"
                                }), c.jsx("p", {
                                    className: "text-4xl font-mono font-bold text-white tracking-widest",
                                    children: VA
                                })]
                            })]
                        }), c.jsx("div", {
                            className: "flex justify-center animate-fade-in-up delay-200",
                            children: c.jsxs("div", {
                                className: "bg-white p-6 rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group border-4 border-purple-500/20",
                                children: [c.jsxs("div", {
                                    className: "w-72 h-72 bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden",
                                    children: [c.jsx("img", {
                                        src: `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(o0)}`,
                                        alt: "QR Code",
                                        className: "w-full h-full object-contain mix-blend-multiply p-4"
                                    }), c.jsx("div", {
                                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                        children: c.jsx("div", {
                                            className: "w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md",
                                            children: c.jsx(lo, {
                                                className: "w-6 h-6 text-purple-600"
                                            })
                                        })
                                    })]
                                }), c.jsxs("div", {
                                    className: "mt-6 text-center space-y-1",
                                    children: [c.jsxs("p", {
                                        className: "font-black text-2xl text-slate-900 flex items-center justify-center gap-2",
                                        children: [c.jsx(bk, {
                                            className: "w-6 h-6 text-purple-600"
                                        }), " Quét ngay"]
                                    }), c.jsx("p", {
                                        className: "text-sm font-medium text-slate-500",
                                        children: "Tham gia bằng điện thoại"
                                    })]
                                })]
                            })
                        })]
                    })]
                }, "lobby") : c.jsx(Me.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 20
                    },
                    transition: {
                        duration: .4
                    },
                    className: "w-full h-full flex flex-col items-center justify-center pt-16 px-4 pb-4",
                    children: c.jsxs("div", {
                        className: "max-w-2xl w-full bg-slate-800/50 border border-slate-700 p-12 rounded-[3rem] text-center backdrop-blur-xl shadow-2xl",
                        children: [c.jsx("div", {
                            className: "w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-purple-900/50 animate-pulse",
                            children: c.jsx(Ck, {
                                className: "w-12 h-12 text-white"
                            })
                        }), c.jsx("h2", {
                            className: "text-3xl md:text-4xl font-black text-white mb-4",
                            children: "Sẵn sàng nhập cuộc?"
                        }), c.jsx("p", {
                            className: "text-slate-400 text-lg mb-8 leading-relaxed",
                            children: "Do chính sách bảo mật, trò chơi sẽ được mở trong một cửa sổ mới để đảm bảo trải nghiệm mượt mà nhất cho bạn."
                        }), c.jsxs(Gr, {
                            onClick: () => window.open(o0, "_blank"),
                            size: "lg",
                            className: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-8 rounded-2xl text-xl font-bold shadow-xl transition-all hover:scale-105 w-full md:w-auto",
                            children: [c.jsx(dx, {
                                className: "mr-3 w-6 h-6"
                            }), " Mở Game Ngay"]
                        }), c.jsx("p", {
                            className: "mt-6 text-sm text-slate-500",
                            children: "Sau khi chơi xong, hãy quay lại tab này nhé!"
                        })]
                    })
                }, "embed")
            })
        })]
    })
}
const IA = new nP
  , FA = () => c.jsx(sP, {
    client: IA,
    children: c.jsxs(Mj, {
        children: [c.jsx(mT, {}), c.jsx(qT, {}), c.jsxs(tE, {
            children: [c.jsx(aE, {}), c.jsxs("div", {
                className: "flex flex-col min-h-screen bg-[#fdfbf6]",
                children: [c.jsx(cE, {}), c.jsx("main", {
                    className: "flex-1 relative pt-20",
                    children: c.jsxs(qP, {
                        children: [c.jsx(at, {
                            path: "/",
                            element: c.jsx(dE, {})
                        }), c.jsx(at, {
                            path: "/video",
                            element: c.jsx(pE, {})
                        }), c.jsx(at, {
                            path: "/on-tap",
                            element: c.jsx(SE, {})
                        }), c.jsx(at, {
                            path: "/gallery",
                            element: c.jsx(sA, {})
                        }), c.jsx(at, {
                            path: "/tro-ly",
                            element: c.jsx(CA, {})
                        }), c.jsx(at, {
                            path: "/mini-game",
                            element: c.jsx(PA, {})
                        }), c.jsx(at, {
                            path: "/tai-lieu",
                            element: c.jsx(EA, {})
                        }), c.jsx(at, {
                            path: "/bai-hoc",
                            element: c.jsx(MA, {})
                        }), c.jsx(at, {
                            path: "/bai-hoc/:id",
                            element: c.jsx(DA, {})
                        }), c.jsx(at, {
                            path: "/ket-luan",
                            element: c.jsx(OA, {})
                        }), c.jsx(at, {
                            path: "/live",
                            element: c.jsx(_A, {})
                        }), c.jsx(at, {
                            path: "*",
                            element: c.jsx(RA, {})
                        })]
                    })
                }), c.jsx("footer", {
                    className: "bg-white/80 border-t border-white/20 py-6",
                    children: c.jsx("div", {
                        className: "container mx-auto px-4 text-center",
                        children: c.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "© 2025 MLN131, Nhóm 1 — Mọi quyền được bảo lưu."
                        })
                    })
                })]
            })]
        })]
    })
});
Rv(document.getElementById("root")).render(c.jsx(FA, {}));
