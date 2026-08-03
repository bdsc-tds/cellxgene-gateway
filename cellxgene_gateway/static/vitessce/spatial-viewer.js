import { dt as e, ft as t, gt as n, i as r, mt as i, pt as a, st as o, ut as s } from "./index-CDVgyDq2-Pif-GON1.js";
import { t as c } from "./scheduler-CEWLphna.js";
//#region node_modules/react-dom/cjs/react-dom-client.production.js
var l = /* @__PURE__ */ i(((n) => {
	t();
	var r = c(), i = e(), o = s();
	function l(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function u(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function d(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function f(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function p(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function m(e) {
		if (d(e) !== e) throw Error(l(188));
	}
	function h(e) {
		var t = e.alternate;
		if (!t) {
			if (t = d(e), t === null) throw Error(l(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var i = n.return;
			if (i === null) break;
			var a = i.alternate;
			if (a === null) {
				if (r = i.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === a.child) {
				for (a = i.child; a;) {
					if (a === n) return m(i), e;
					if (a === r) return m(i), t;
					a = a.sibling;
				}
				throw Error(l(188));
			}
			if (n.return !== r.return) n = i, r = a;
			else {
				for (var o = !1, s = i.child; s;) {
					if (s === n) {
						o = !0, n = i, r = a;
						break;
					}
					if (s === r) {
						o = !0, r = i, n = a;
						break;
					}
					s = s.sibling;
				}
				if (!o) {
					for (s = a.child; s;) {
						if (s === n) {
							o = !0, n = a, r = i;
							break;
						}
						if (s === r) {
							o = !0, r = a, n = i;
							break;
						}
						s = s.sibling;
					}
					if (!o) throw Error(l(189));
				}
			}
			if (n.alternate !== r) throw Error(l(190));
		}
		if (n.tag !== 3) throw Error(l(188));
		return n.stateNode.current === n ? e : t;
	}
	function g(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = g(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var _ = Object.assign, v = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), ie = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), ue = Symbol.for("react.memo_cache_sentinel"), de = Symbol.iterator;
	function fe(e) {
		return typeof e != "object" || !e ? null : (e = de && e[de] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var pe = Symbol.for("react.client.reference");
	function me(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === pe ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case ee: return "Fragment";
			case ne: return "Profiler";
			case te: return "StrictMode";
			case oe: return "Suspense";
			case se: return "SuspenseList";
			case x: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case b: return "Portal";
			case ie: return e.displayName || "Context";
			case re: return (e._context.displayName || "Context") + ".Consumer";
			case ae:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ce: return t = e.displayName || null, t === null ? me(e.type) || "Memo" : t;
			case le:
				t = e._payload, e = e._init;
				try {
					return me(e(t));
				} catch {}
		}
		return null;
	}
	var he = Array.isArray, S = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, _e = [], ve = -1;
	function ye(e) {
		return { current: e };
	}
	function be(e) {
		0 > ve || (e.current = _e[ve], _e[ve] = null, ve--);
	}
	function w(e, t) {
		ve++, _e[ve] = e.current, e.current = t;
	}
	var xe = ye(null), Se = ye(null), Ce = ye(null), we = ye(null);
	function Te(e, t) {
		switch (w(Ce, t), w(Se, e), w(xe, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? of(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = of(t), e = sf(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		be(xe), w(xe, e);
	}
	function Ee() {
		be(xe), be(Se), be(Ce);
	}
	function T(e) {
		e.memoizedState !== null && w(we, e);
		var t = xe.current, n = sf(t, e.type);
		t !== n && (w(Se, e), w(xe, n));
	}
	function De(e) {
		Se.current === e && (be(xe), be(Se)), we.current === e && (be(we), pp._currentValue = ge);
	}
	var Oe, ke;
	function Ae(e) {
		if (Oe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Oe = t && t[1] || "", ke = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Oe + e + ke;
	}
	var je = !1;
	function Me(e, t) {
		if (!e || je) return "";
		je = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			je = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ae(n) : "";
	}
	function Ne(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ae(e.type);
			case 16: return Ae("Lazy");
			case 13: return e.child !== t && t !== null ? Ae("Suspense Fallback") : Ae("Suspense");
			case 19: return Ae("SuspenseList");
			case 0:
			case 15: return Me(e.type, !1);
			case 11: return Me(e.type.render, !1);
			case 1: return Me(e.type, !0);
			case 31: return Ae("Activity");
			default: return "";
		}
	}
	function Pe(e) {
		try {
			var t = "", n = null;
			do
				t += Ne(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Fe = Object.prototype.hasOwnProperty, Ie = r.unstable_scheduleCallback, Le = r.unstable_cancelCallback, Re = r.unstable_shouldYield, ze = r.unstable_requestPaint, Be = r.unstable_now, Ve = r.unstable_getCurrentPriorityLevel, He = r.unstable_ImmediatePriority, Ue = r.unstable_UserBlockingPriority, We = r.unstable_NormalPriority, Ge = r.unstable_LowPriority, Ke = r.unstable_IdlePriority, qe = r.log, Je = r.unstable_setDisableYieldValue, Ye = null, Xe = null;
	function Ze(e) {
		if (typeof qe == "function" && Je(e), Xe && typeof Xe.setStrictMode == "function") try {
			Xe.setStrictMode(Ye, e);
		} catch {}
	}
	var Qe = Math.clz32 ? Math.clz32 : tt, $e = Math.log, et = Math.LN2;
	function tt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - ($e(e) / et | 0) | 0;
	}
	var nt = 256, rt = 262144, it = 4194304;
	function at(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function ot(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = at(n))) : i = at(o) : i = at(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = at(n))) : i = at(o)) : i = at(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function st(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function ct(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
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
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function lt() {
		var e = it;
		return it <<= 1, !(it & 62914560) && (it = 4194304), e;
	}
	function ut(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function dt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function ft(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Qe(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && pt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function pt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Qe(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function mt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Qe(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function ht(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : gt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function gt(e) {
		switch (e) {
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
			default: e = 0;
		}
		return e;
	}
	function _t(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function vt() {
		var e = C.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : kp(e.type)) : e;
	}
	function yt(e, t) {
		var n = C.p;
		try {
			return C.p = e, t();
		} finally {
			C.p = n;
		}
	}
	var bt = Math.random().toString(36).slice(2), xt = "__reactFiber$" + bt, St = "__reactProps$" + bt, Ct = "__reactContainer$" + bt, wt = "__reactEvents$" + bt, Tt = "__reactListeners$" + bt, Et = "__reactHandles$" + bt, Dt = "__reactResources$" + bt, Ot = "__reactMarker$" + bt;
	function kt(e) {
		delete e[xt], delete e[St], delete e[wt], delete e[Tt], delete e[Et];
	}
	function At(e) {
		var t = e[xt];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Ct] || n[xt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = kf(e); e !== null;) {
					if (n = e[xt]) return n;
					e = kf(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function jt(e) {
		if (e = e[xt] || e[Ct]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Mt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(l(33));
	}
	function Nt(e) {
		var t = e[Dt];
		return t ||= e[Dt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Pt(e) {
		e[Ot] = !0;
	}
	var Ft = /* @__PURE__ */ new Set(), It = {};
	function Lt(e, t) {
		Rt(e, t), Rt(e + "Capture", t);
	}
	function Rt(e, t) {
		for (It[e] = t, e = 0; e < t.length; e++) Ft.add(t[e]);
	}
	var zt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Bt = {}, Vt = {};
	function Ht(e) {
		return Fe.call(Vt, e) ? !0 : Fe.call(Bt, e) ? !1 : zt.test(e) ? Vt[e] = !0 : (Bt[e] = !0, !1);
	}
	function Ut(e, t, n) {
		if (Ht(t)) if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
					e.removeAttribute(t);
					return;
				case "boolean":
					var r = t.toLowerCase().slice(0, 5);
					if (r !== "data-" && r !== "aria-") {
						e.removeAttribute(t);
						return;
					}
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Wt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
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
	function Gt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function Kt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function qt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Jt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Yt(e) {
		if (!e._valueTracker) {
			var t = qt(e) ? "checked" : "value";
			e._valueTracker = Jt(e, t, "" + e[t]);
		}
	}
	function Xt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = qt(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function Zt(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Qt = /[\n"\\]/g;
	function $t(e) {
		return e.replace(Qt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function en(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : nn(e, o, Kt(n)) : nn(e, o, Kt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Kt(s) : e.removeAttribute("name");
	}
	function tn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Yt(e);
				return;
			}
			n = n == null ? "" : "" + Kt(n), t = t == null ? n : "" + Kt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Yt(e);
	}
	function nn(e, t, n) {
		t === "number" && Zt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function rn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function an(e, t, n) {
		if (t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Kt(n);
	}
	function on(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(l(92));
				if (he(r)) {
					if (1 < r.length) throw Error(l(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Kt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Yt(e);
	}
	function sn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var cn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function ln(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || cn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function un(e, t, n) {
		if (t != null && typeof t != "object") throw Error(l(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && ln(e, i, r);
		} else for (var a in t) t.hasOwnProperty(a) && ln(e, a, t[a]);
	}
	function dn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var fn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), pn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function mn(e) {
		return pn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function hn() {}
	var gn = null;
	function _n(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var vn = null, yn = null;
	function bn(e) {
		var t = jt(e);
		if (t && (e = t.stateNode)) {
			var n = e[St] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (en(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + $t("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = r[St] || null;
								if (!i) throw Error(l(90));
								en(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Xt(r);
					}
					break a;
				case "textarea":
					an(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && rn(e, !!n.multiple, t, !1);
			}
		}
	}
	var xn = !1;
	function Sn(e, t, n) {
		if (xn) return e(t, n);
		xn = !0;
		try {
			return e(t);
		} finally {
			if (xn = !1, (vn !== null || yn !== null) && (Iu(), vn && (t = vn, e = yn, yn = vn = null, bn(t), e))) for (t = 0; t < e.length; t++) bn(e[t]);
		}
	}
	function Cn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[St] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
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
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(l(231, t, typeof n));
		return n;
	}
	var wn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), Tn = !1;
	if (wn) try {
		var En = {};
		Object.defineProperty(En, "passive", { get: function() {
			Tn = !0;
		} }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
	} catch {
		Tn = !1;
	}
	var Dn = null, On = null, kn = null;
	function An() {
		if (kn) return kn;
		var e, t = On, n = t.length, r, i = "value" in Dn ? Dn.value : Dn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return kn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function jn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Mn() {
		return !0;
	}
	function Nn() {
		return !1;
	}
	function Pn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Mn : Nn, this.isPropagationStopped = Nn, this;
		}
		return _(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Mn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Mn);
			},
			persist: function() {},
			isPersistent: Mn
		}), t;
	}
	var Fn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, In = Pn(Fn), Ln = _({}, Fn, {
		view: 0,
		detail: 0
	}), Rn = Pn(Ln), zn, Bn, Vn, Hn = _({}, Ln, {
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
		getModifierState: $n,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Vn && (Vn && e.type === "mousemove" ? (zn = e.screenX - Vn.screenX, Bn = e.screenY - Vn.screenY) : Bn = zn = 0, Vn = e), zn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Bn;
		}
	}), Un = Pn(Hn), Wn = Pn(_({}, Hn, { dataTransfer: 0 })), Gn = Pn(_({}, Ln, { relatedTarget: 0 })), Kn = Pn(_({}, Fn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), qn = Pn(_({}, Fn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Jn = Pn(_({}, Fn, { data: 0 })), Yn = {
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
	}, Xn = {
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
	}, Zn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Qn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Zn[e]) ? !!t[e] : !1;
	}
	function $n() {
		return Qn;
	}
	var er = Pn(_({}, Ln, {
		key: function(e) {
			if (e.key) {
				var t = Yn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = jn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: $n,
		charCode: function(e) {
			return e.type === "keypress" ? jn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? jn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), tr = Pn(_({}, Hn, {
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
	})), nr = Pn(_({}, Ln, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: $n
	})), rr = Pn(_({}, Fn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ir = Pn(_({}, Hn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ar = Pn(_({}, Fn, {
		newState: 0,
		oldState: 0
	})), or = [
		9,
		13,
		27,
		32
	], sr = wn && "CompositionEvent" in window, cr = null;
	wn && "documentMode" in document && (cr = document.documentMode);
	var lr = wn && "TextEvent" in window && !cr, ur = wn && (!sr || cr && 8 < cr && 11 >= cr), dr = " ", fr = !1;
	function pr(e, t) {
		switch (e) {
			case "keyup": return or.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function mr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var hr = !1;
	function gr(e, t) {
		switch (e) {
			case "compositionend": return mr(t);
			case "keypress": return t.which === 32 ? (fr = !0, dr) : null;
			case "textInput": return e = t.data, e === dr && fr ? null : e;
			default: return null;
		}
	}
	function _r(e, t) {
		if (hr) return e === "compositionend" || !sr && pr(e, t) ? (e = An(), kn = On = Dn = null, hr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return ur && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var vr = {
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
	function yr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!vr[e.type] : t === "textarea";
	}
	function br(e, t, n, r) {
		vn ? yn ? yn.push(r) : yn = [r] : vn = r, t = Ud(t, "onChange"), 0 < t.length && (n = new In("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var xr = null, Sr = null;
	function Cr(e) {
		Id(e, 0);
	}
	function wr(e) {
		if (Xt(Mt(e))) return e;
	}
	function Tr(e, t) {
		if (e === "change") return t;
	}
	var Er = !1;
	if (wn) {
		var Dr;
		if (wn) {
			var Or = "oninput" in document;
			if (!Or) {
				var kr = document.createElement("div");
				kr.setAttribute("oninput", "return;"), Or = typeof kr.oninput == "function";
			}
			Dr = Or;
		} else Dr = !1;
		Er = Dr && (!document.documentMode || 9 < document.documentMode);
	}
	function Ar() {
		xr && (xr.detachEvent("onpropertychange", jr), Sr = xr = null);
	}
	function jr(e) {
		if (e.propertyName === "value" && wr(Sr)) {
			var t = [];
			br(t, Sr, e, _n(e)), Sn(Cr, t);
		}
	}
	function Mr(e, t, n) {
		e === "focusin" ? (Ar(), xr = t, Sr = n, xr.attachEvent("onpropertychange", jr)) : e === "focusout" && Ar();
	}
	function Nr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return wr(Sr);
	}
	function Pr(e, t) {
		if (e === "click") return wr(t);
	}
	function Fr(e, t) {
		if (e === "input" || e === "change") return wr(t);
	}
	function Ir(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Lr = typeof Object.is == "function" ? Object.is : Ir;
	function Rr(e, t) {
		if (Lr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Fe.call(t, i) || !Lr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function zr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Br(e, t) {
		var n = zr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = zr(n);
		}
	}
	function Vr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Hr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Zt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Zt(e.document);
		}
		return t;
	}
	function Ur(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Wr = wn && "documentMode" in document && 11 >= document.documentMode, Gr = null, Kr = null, qr = null, Jr = !1;
	function Yr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Jr || Gr == null || Gr !== Zt(r) || (r = Gr, "selectionStart" in r && Ur(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), qr && Rr(qr, r) || (qr = r, r = Ud(Kr, "onSelect"), 0 < r.length && (t = new In("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Gr)));
	}
	function Xr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Zr = {
		animationend: Xr("Animation", "AnimationEnd"),
		animationiteration: Xr("Animation", "AnimationIteration"),
		animationstart: Xr("Animation", "AnimationStart"),
		transitionrun: Xr("Transition", "TransitionRun"),
		transitionstart: Xr("Transition", "TransitionStart"),
		transitioncancel: Xr("Transition", "TransitionCancel"),
		transitionend: Xr("Transition", "TransitionEnd")
	}, Qr = {}, $r = {};
	wn && ($r = document.createElement("div").style, "AnimationEvent" in window || (delete Zr.animationend.animation, delete Zr.animationiteration.animation, delete Zr.animationstart.animation), "TransitionEvent" in window || delete Zr.transitionend.transition);
	function ei(e) {
		if (Qr[e]) return Qr[e];
		if (!Zr[e]) return e;
		var t = Zr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in $r) return Qr[e] = t[n];
		return e;
	}
	var ti = ei("animationend"), ni = ei("animationiteration"), ri = ei("animationstart"), ii = ei("transitionrun"), ai = ei("transitionstart"), oi = ei("transitioncancel"), si = ei("transitionend"), ci = /* @__PURE__ */ new Map(), li = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	li.push("scrollEnd");
	function E(e, t) {
		ci.set(e, t), Lt(t, [e]);
	}
	var ui = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof a == "object" && typeof a.emit == "function") {
			a.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, di = [], fi = 0, pi = 0;
	function mi() {
		for (var e = fi, t = pi = fi = 0; t < e;) {
			var n = di[t];
			di[t++] = null;
			var r = di[t];
			di[t++] = null;
			var i = di[t];
			di[t++] = null;
			var a = di[t];
			if (di[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && vi(n, i, a);
		}
	}
	function hi(e, t, n, r) {
		di[fi++] = e, di[fi++] = t, di[fi++] = n, di[fi++] = r, pi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function gi(e, t, n, r) {
		return hi(e, t, n, r), yi(e);
	}
	function _i(e, t) {
		return hi(e, null, null, t), yi(e);
	}
	function vi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Qe(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function yi(e) {
		if (50 < Du) throw Du = 0, Ou = null, Error(l(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var bi = {};
	function xi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Si(e, t, n, r) {
		return new xi(e, t, n, r);
	}
	function Ci(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function wi(e, t) {
		var n = e.alternate;
		return n === null ? (n = Si(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ti(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Ei(e, t, n, r, i, a) {
		var o = 0;
		if (r = e, typeof e == "function") Ci(e) && (o = 1);
		else if (typeof e == "string") o = ip(e, n, xe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case x: return e = Si(31, n, t, i), e.elementType = x, e.lanes = a, e;
			case ee: return Di(n.children, i, a, t);
			case te:
				o = 8, i |= 24;
				break;
			case ne: return e = Si(12, n, t, i | 2), e.elementType = ne, e.lanes = a, e;
			case oe: return e = Si(13, n, t, i), e.elementType = oe, e.lanes = a, e;
			case se: return e = Si(19, n, t, i), e.elementType = se, e.lanes = a, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case ie:
						o = 10;
						break a;
					case re:
						o = 9;
						break a;
					case ae:
						o = 11;
						break a;
					case ce:
						o = 14;
						break a;
					case le:
						o = 16, r = null;
						break a;
				}
				o = 29, n = Error(l(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Si(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
	}
	function Di(e, t, n, r) {
		return e = Si(7, e, r, t), e.lanes = n, e;
	}
	function Oi(e, t, n) {
		return e = Si(6, e, null, t), e.lanes = n, e;
	}
	function ki(e) {
		var t = Si(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ai(e, t, n) {
		return t = Si(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var ji = /* @__PURE__ */ new WeakMap();
	function Mi(e, t) {
		if (typeof e == "object" && e) {
			var n = ji.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Pe(t)
			}, ji.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Pe(t)
		};
	}
	var Ni = [], Pi = 0, Fi = null, Ii = 0, Li = [], Ri = 0, zi = null, Bi = 1, Vi = "";
	function Hi(e, t) {
		Ni[Pi++] = Ii, Ni[Pi++] = Fi, Fi = e, Ii = t;
	}
	function Ui(e, t, n) {
		Li[Ri++] = Bi, Li[Ri++] = Vi, Li[Ri++] = zi, zi = e;
		var r = Bi;
		e = Vi;
		var i = 32 - Qe(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Qe(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Bi = 1 << 32 - Qe(t) + i | n << i | r, Vi = a + e;
		} else Bi = 1 << a | n << i | r, Vi = e;
	}
	function Wi(e) {
		e.return !== null && (Hi(e, 1), Ui(e, 1, 0));
	}
	function Gi(e) {
		for (; e === Fi;) Fi = Ni[--Pi], Ni[Pi] = null, Ii = Ni[--Pi], Ni[Pi] = null;
		for (; e === zi;) zi = Li[--Ri], Li[Ri] = null, Vi = Li[--Ri], Li[Ri] = null, Bi = Li[--Ri], Li[Ri] = null;
	}
	function Ki(e, t) {
		Li[Ri++] = Bi, Li[Ri++] = Vi, Li[Ri++] = zi, Bi = t.id, Vi = t.overflow, zi = e;
	}
	var qi = null, Ji = null, D = !1, Yi = null, Xi = !1, Zi = Error(l(519));
	function Qi(e) {
		throw ia(Mi(Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Zi;
	}
	function $i(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[xt] = e, t[St] = r, n) {
			case "dialog":
				L("cancel", t), L("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				L("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Pd.length; n++) L(Pd[n], t);
				break;
			case "source":
				L("error", t);
				break;
			case "img":
			case "image":
			case "link":
				L("error", t), L("load", t);
				break;
			case "details":
				L("toggle", t);
				break;
			case "input":
				L("invalid", t), tn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				L("invalid", t);
				break;
			case "textarea": L("invalid", t), on(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Yd(t.textContent, n) ? (r.popover != null && (L("beforetoggle", t), L("toggle", t)), r.onScroll != null && L("scroll", t), r.onScrollEnd != null && L("scrollend", t), r.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || Qi(e, !0);
	}
	function ea(e) {
		for (qi = e.return; qi;) switch (qi.tag) {
			case 5:
			case 31:
			case 13:
				Xi = !1;
				return;
			case 27:
			case 3:
				Xi = !0;
				return;
			default: qi = qi.return;
		}
	}
	function ta(e) {
		if (e !== qi) return !1;
		if (!D) return ea(e), D = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || cf(e.type, e.memoizedProps)), n = !n), n && Ji && Qi(e), ea(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(l(317));
			Ji = Of(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(l(317));
			Ji = Of(e);
		} else t === 27 ? (t = Ji, gf(e.type) ? (e = Df, Df = null, Ji = e) : Ji = t) : Ji = qi ? Ef(e.stateNode.nextSibling) : null;
		return !0;
	}
	function na() {
		Ji = qi = null, D = !1;
	}
	function ra() {
		var e = Yi;
		return e !== null && (pu === null ? pu = e : pu.push.apply(pu, e), Yi = null), e;
	}
	function ia(e) {
		Yi === null ? Yi = [e] : Yi.push(e);
	}
	var aa = ye(null), oa = null, sa = null;
	function ca(e, t, n) {
		w(aa, t._currentValue), t._currentValue = n;
	}
	function la(e) {
		e._currentValue = aa.current, be(aa);
	}
	function ua(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function da(e, t, n, r) {
		var i = e.child;
		for (i !== null && (i.return = e); i !== null;) {
			var a = i.dependencies;
			if (a !== null) {
				var o = i.child;
				a = a.firstContext;
				a: for (; a !== null;) {
					var s = a;
					a = i;
					for (var c = 0; c < t.length; c++) if (s.context === t[c]) {
						a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ua(a.return, n, e), r || (o = null);
						break a;
					}
					a = s.next;
				}
			} else if (i.tag === 18) {
				if (o = i.return, o === null) throw Error(l(341));
				o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ua(o, n, e), o = null;
			} else o = i.child;
			if (o !== null) o.return = i;
			else for (o = i; o !== null;) {
				if (o === e) {
					o = null;
					break;
				}
				if (i = o.sibling, i !== null) {
					i.return = o.return, o = i;
					break;
				}
				o = o.return;
			}
			i = o;
		}
	}
	function fa(e, t, n, r) {
		e = null;
		for (var i = t, a = !1; i !== null;) {
			if (!a) {
				if (i.flags & 524288) a = !0;
				else if (i.flags & 262144) break;
			}
			if (i.tag === 10) {
				var o = i.alternate;
				if (o === null) throw Error(l(387));
				if (o = o.memoizedProps, o !== null) {
					var s = i.type;
					Lr(i.pendingProps.value, o.value) || (e === null ? e = [s] : e.push(s));
				}
			} else if (i === we.current) {
				if (o = i.alternate, o === null) throw Error(l(387));
				o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [pp] : e.push(pp));
			}
			i = i.return;
		}
		e !== null && da(t, e, n, r), t.flags |= 262144;
	}
	function pa(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Lr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ma(e) {
		oa = e, sa = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function ha(e) {
		return _a(oa, e);
	}
	function ga(e, t) {
		return oa === null && ma(e), _a(e, t);
	}
	function _a(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, sa === null) {
			if (e === null) throw Error(l(308));
			sa = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else sa = sa.next = t;
		return n;
	}
	var va = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, ya = r.unstable_scheduleCallback, ba = r.unstable_NormalPriority, xa = {
		$$typeof: ie,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Sa() {
		return {
			controller: new va(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Ca(e) {
		e.refCount--, e.refCount === 0 && ya(ba, function() {
			e.controller.abort();
		});
	}
	var O = null, k = 0, wa = 0, Ta = null;
	function Ea(e, t) {
		if (O === null) {
			var n = O = [];
			k = 0, wa = Od(), Ta = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return k++, t.then(Da, Da), t;
	}
	function Da() {
		if (--k === 0 && O !== null) {
			Ta !== null && (Ta.status = "fulfilled");
			var e = O;
			O = null, wa = 0, Ta = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Oa(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var ka = S.S;
	S.S = function(e, t) {
		gu = Be(), typeof t == "object" && t && typeof t.then == "function" && Ea(e, t), ka !== null && ka(e, t);
	};
	var Aa = ye(null);
	function ja() {
		var e = Aa.current;
		return e === null ? eu.pooledCache : e;
	}
	function Ma(e, t) {
		t === null ? w(Aa, Aa.current) : w(Aa, t.pool);
	}
	function Na() {
		var e = ja();
		return e === null ? null : {
			parent: xa._currentValue,
			pool: e
		};
	}
	var Pa = Error(l(460)), Fa = Error(l(474)), A = Error(l(542)), Ia = { then: function() {} };
	function La(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Ra(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(hn, hn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Ha(e), e;
			default:
				if (typeof t.status == "string") t.then(hn, hn);
				else {
					if (e = eu, e !== null && 100 < e.shellSuspendCounter) throw Error(l(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Ha(e), e;
				}
				throw Ba = t, Pa;
		}
	}
	function za(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Ba = e, Pa) : e;
		}
	}
	var Ba = null;
	function Va() {
		if (Ba === null) throw Error(l(459));
		var e = Ba;
		return Ba = null, e;
	}
	function Ha(e) {
		if (e === Pa || e === A) throw Error(l(483));
	}
	var Ua = null, Wa = 0;
	function Ga(e) {
		var t = Wa;
		return Wa += 1, Ua === null && (Ua = []), Ra(Ua, e, t);
	}
	function Ka(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function qa(e, t) {
		throw t.$$typeof === v ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Ja(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function i(e, t) {
			return e = wi(e, t), e.index = 0, e.sibling = null, e;
		}
		function a(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function o(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function s(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Oi(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function c(e, t, n, r) {
			var a = n.type;
			return a === ee ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === a || typeof a == "object" && a && a.$$typeof === le && za(a) === t.type) ? (t = i(t, n.props), Ka(t, n), t.return = e, t) : (t = Ei(n.type, n.key, n.props, null, e.mode, r), Ka(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ai(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, a) {
			return t === null || t.tag !== 7 ? (t = Di(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Oi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case y: return n = Ei(t.type, t.key, t.props, null, e.mode, n), Ka(n, t), n.return = e, n;
					case b: return t = Ai(t, e.mode, n), t.return = e, t;
					case le: return t = za(t), f(e, t, n);
				}
				if (he(t) || fe(t)) return t = Di(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, Ga(t), n);
				if (t.$$typeof === ie) return f(e, ga(e, t), n);
				qa(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? s(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case y: return n.key === i ? c(e, t, n, r) : null;
					case b: return n.key === i ? u(e, t, n, r) : null;
					case le: return n = za(n), p(e, t, n, r);
				}
				if (he(n) || fe(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, Ga(n), r);
				if (n.$$typeof === ie) return p(e, t, ga(e, n), r);
				qa(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, s(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case y: return e = e.get(r.key === null ? n : r.key) || null, c(t, e, r, i);
					case b: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case le: return r = za(r), m(e, t, n, r, i);
				}
				if (he(r) || fe(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, Ga(r), i);
				if (r.$$typeof === ie) return m(e, t, n, ga(t, r), i);
				qa(t, r);
			}
			return null;
		}
		function h(i, o, s, c) {
			for (var l = null, u = null, d = o, h = o = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), o = a(_, o, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), D && Hi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (o = a(d, o, h), u === null ? l = d : u.sibling = d, u = d);
				return D && Hi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), o = a(g, o, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), D && Hi(i, h), l;
		}
		function g(i, o, s, c) {
			if (s == null) throw Error(l(151));
			for (var u = null, d = null, h = o, g = o = 0, _ = null, v = s.next(); h !== null && !v.done; g++, v = s.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(i, h, v.value, c);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(i, h), o = a(y, o, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(i, h), D && Hi(i, g), u;
			if (h === null) {
				for (; !v.done; g++, v = s.next()) v = f(i, v.value, c), v !== null && (o = a(v, o, g), d === null ? u = v : d.sibling = v, d = v);
				return D && Hi(i, g), u;
			}
			for (h = r(h); !v.done; g++, v = s.next()) v = m(h, i, g, v.value, c), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), o = a(v, o, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(i, e);
			}), D && Hi(i, g), u;
		}
		function _(e, r, a, s) {
			if (typeof a == "object" && a && a.type === ee && a.key === null && (a = a.props.children), typeof a == "object" && a) {
				switch (a.$$typeof) {
					case y:
						a: {
							for (var c = a.key; r !== null;) {
								if (r.key === c) {
									if (c = a.type, c === ee) {
										if (r.tag === 7) {
											n(e, r.sibling), s = i(r, a.props.children), s.return = e, e = s;
											break a;
										}
									} else if (r.elementType === c || typeof c == "object" && c && c.$$typeof === le && za(c) === r.type) {
										n(e, r.sibling), s = i(r, a.props), Ka(s, a), s.return = e, e = s;
										break a;
									}
									n(e, r);
									break;
								} else t(e, r);
								r = r.sibling;
							}
							a.type === ee ? (s = Di(a.props.children, e.mode, s, a.key), s.return = e, e = s) : (s = Ei(a.type, a.key, a.props, null, e.mode, s), Ka(s, a), s.return = e, e = s);
						}
						return o(e);
					case b:
						a: {
							for (c = a.key; r !== null;) {
								if (r.key === c) if (r.tag === 4 && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
									n(e, r.sibling), s = i(r, a.children || []), s.return = e, e = s;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							s = Ai(a, e.mode, s), s.return = e, e = s;
						}
						return o(e);
					case le: return a = za(a), _(e, r, a, s);
				}
				if (he(a)) return h(e, r, a, s);
				if (fe(a)) {
					if (c = fe(a), typeof c != "function") throw Error(l(150));
					return a = c.call(a), g(e, r, a, s);
				}
				if (typeof a.then == "function") return _(e, r, Ga(a), s);
				if (a.$$typeof === ie) return _(e, r, ga(e, a), s);
				qa(e, a);
			}
			return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (a = "" + a, r !== null && r.tag === 6 ? (n(e, r.sibling), s = i(r, a), s.return = e, e = s) : (n(e, r), s = Oi(a, e.mode, s), s.return = e, e = s), o(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				Wa = 0;
				var i = _(e, t, n, r);
				return Ua = null, i;
			} catch (t) {
				if (t === Pa || t === A) throw t;
				var a = Si(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Ya = Ja(!0), Xa = Ja(!1), Za = !1;
	function Qa(e) {
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
	function $a(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function eo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function to(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, N & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = yi(e), vi(e, null, n), t;
		}
		return hi(e, r, t, n), yi(e);
	}
	function no(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, mt(e, n);
		}
	}
	function ro(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var io = !1;
	function ao() {
		if (io) {
			var e = Ta;
			if (e !== null) throw e;
		}
	}
	function oo(e, t, n, r) {
		io = !1;
		var i = e.updateQueue;
		Za = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (F & f) === f : (r & f) === f) {
					f !== 0 && f === wa && (io = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = _({}, d, f);
								break a;
							case 2: Za = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), cu |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function so(e, t) {
		if (typeof e != "function") throw Error(l(191, e));
		e.call(t);
	}
	function co(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) so(n[e], t);
	}
	var lo = ye(null), uo = ye(0);
	function fo(e, t) {
		e = ou, w(uo, e), w(lo, t), ou = e | t.baseLanes;
	}
	function po() {
		w(uo, ou), w(lo, lo.current);
	}
	function mo() {
		ou = uo.current, be(lo), be(uo);
	}
	var ho = ye(null), go = null;
	function _o(e) {
		var t = e.alternate;
		w(So, So.current & 1), w(ho, e), go === null && (t === null || lo.current !== null || t.memoizedState !== null) && (go = e);
	}
	function vo(e) {
		w(So, So.current), w(ho, e), go === null && (go = e);
	}
	function yo(e) {
		e.tag === 22 ? (w(So, So.current), w(ho, e), go === null && (go = e)) : bo(e);
	}
	function bo() {
		w(So, So.current), w(ho, ho.current);
	}
	function xo(e) {
		be(ho), go === e && (go = null), be(So);
	}
	var So = ye(0);
	function Co(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || Cf(n) || wf(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var wo = 0, j = null, To = null, Eo = null, Do = !1, Oo = !1, ko = !1, Ao = 0, jo = 0, Mo = null, No = 0;
	function Po() {
		throw Error(l(321));
	}
	function Fo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Lr(e[n], t[n])) return !1;
		return !0;
	}
	function Io(e, t, n, r, i, a) {
		return wo = a, j = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = e === null || e.memoizedState === null ? $s : ec, ko = !1, a = n(r, i), ko = !1, Oo && (a = Ro(t, n, r, i)), Lo(e), a;
	}
	function Lo(e) {
		S.H = Qs;
		var t = To !== null && To.next !== null;
		if (wo = 0, Eo = To = j = null, Do = !1, jo = 0, Mo = null, t) throw Error(l(300));
		e === null || _c || (e = e.dependencies, e !== null && pa(e) && (_c = !0));
	}
	function Ro(e, t, n, r) {
		j = e;
		var i = 0;
		do {
			if (Oo && (Mo = null), jo = 0, Oo = !1, 25 <= i) throw Error(l(301));
			if (i += 1, Eo = To = null, e.updateQueue != null) {
				var a = e.updateQueue;
				a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
			}
			S.H = tc, a = t(n, r);
		} while (Oo);
		return a;
	}
	function zo() {
		var e = S.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? Ko(t) : t, e = e.useState()[0], (To === null ? null : To.memoizedState) !== e && (j.flags |= 1024), t;
	}
	function Bo() {
		var e = Ao !== 0;
		return Ao = 0, e;
	}
	function Vo(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Ho(e) {
		if (Do) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Do = !1;
		}
		wo = 0, Eo = To = j = null, Oo = !1, jo = Ao = 0, Mo = null;
	}
	function Uo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Eo === null ? j.memoizedState = Eo = e : Eo = Eo.next = e, Eo;
	}
	function Wo() {
		if (To === null) {
			var e = j.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = To.next;
		var t = Eo === null ? j.memoizedState : Eo.next;
		if (t !== null) Eo = t, To = e;
		else {
			if (e === null) throw j.alternate === null ? Error(l(467)) : Error(l(310));
			To = e, e = {
				memoizedState: To.memoizedState,
				baseState: To.baseState,
				baseQueue: To.baseQueue,
				queue: To.queue,
				next: null
			}, Eo === null ? j.memoizedState = Eo = e : Eo = Eo.next = e;
		}
		return Eo;
	}
	function Go() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function Ko(e) {
		var t = jo;
		return jo += 1, Mo === null && (Mo = []), e = Ra(Mo, e, t), t = j, (Eo === null ? t.memoizedState : Eo.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? $s : ec), e;
	}
	function qo(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return Ko(e);
			if (e.$$typeof === ie) return ha(e);
		}
		throw Error(l(438, String(e)));
	}
	function Jo(e) {
		var t = null, n = j.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = j.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Go(), j.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ue;
		return t.index++, n;
	}
	function Yo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Xo(e) {
		return Zo(Wo(), To, e);
	}
	function Zo(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(l(311));
		r.lastRenderedReducer = n;
		var i = e.baseQueue, a = r.pending;
		if (a !== null) {
			if (i !== null) {
				var o = i.next;
				i.next = a.next, a.next = o;
			}
			t.baseQueue = i = a, r.pending = null;
		}
		if (a = e.baseState, i === null) e.memoizedState = a;
		else {
			t = i.next;
			var s = o = null, c = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (wo & f) === f : (F & f) === f) {
					var p = u.revertLane;
					if (p === 0) c !== null && (c = c.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === wa && (d = !0);
					else if ((wo & p) === p) {
						u = u.next, p === wa && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, c === null ? (s = c = f, o = a) : c = c.next = f, j.lanes |= p, cu |= p;
					f = u.action, ko && n(a, f), a = u.hasEagerState ? u.eagerState : n(a, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, c === null ? (s = c = p, o = a) : c = c.next = p, j.lanes |= f, cu |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (c === null ? o = a : c.next = s, !Lr(a, e.memoizedState) && (_c = !0, d && (n = Ta, n !== null))) throw n;
			e.memoizedState = a, e.baseState = o, e.baseQueue = c, r.lastRenderedState = a;
		}
		return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function Qo(e) {
		var t = Wo(), n = t.queue;
		if (n === null) throw Error(l(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, i = n.pending, a = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var o = i = i.next;
			do
				a = e(a, o.action), o = o.next;
			while (o !== i);
			Lr(a, t.memoizedState) || (_c = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
		}
		return [a, r];
	}
	function $o(e, t, n) {
		var r = j, i = Wo(), a = D;
		if (a) {
			if (n === void 0) throw Error(l(407));
			n = n();
		} else n = t();
		var o = !Lr((To || i).memoizedState, n);
		if (o && (i.memoizedState = n, _c = !0), i = i.queue, ws(ns.bind(null, r, i, e), [e]), i.getSnapshot !== t || o || Eo !== null && Eo.memoizedState.tag & 1) {
			if (r.flags |= 2048, ys(9, { destroy: void 0 }, ts.bind(null, r, i, n, t), null), eu === null) throw Error(l(349));
			a || wo & 127 || es(r, t, n);
		}
		return n;
	}
	function es(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = j.updateQueue, t === null ? (t = Go(), j.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function ts(e, t, n, r) {
		t.value = n, t.getSnapshot = r, rs(t) && is(e);
	}
	function ns(e, t, n) {
		return n(function() {
			rs(t) && is(e);
		});
	}
	function rs(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Lr(e, n);
		} catch {
			return !0;
		}
	}
	function is(e) {
		var t = _i(e, 2);
		t !== null && ju(t, e, 2);
	}
	function as(e) {
		var t = Uo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), ko) {
				Ze(!0);
				try {
					n();
				} finally {
					Ze(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Yo,
			lastRenderedState: e
		}, t;
	}
	function os(e, t, n, r) {
		return e.baseState = n, Zo(e, To, typeof r == "function" ? r : Yo);
	}
	function ss(e, t, n, r, i) {
		if (Ys(e)) throw Error(l(485));
		if (e = t.action, e !== null) {
			var a = {
				payload: i,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					a.listeners.push(e);
				}
			};
			S.T === null ? a.isTransition = !1 : n(!0), r(a), n = t.pending, n === null ? (a.next = t.pending = a, cs(t, a)) : (a.next = n.next, t.pending = n.next = a);
		}
	}
	function cs(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = S.T, o = {};
			S.T = o;
			try {
				var s = n(i, r), c = S.S;
				c !== null && c(o, s), ls(e, t, s);
			} catch (n) {
				ds(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), S.T = a;
			}
		} else try {
			a = n(i, r), ls(e, t, a);
		} catch (n) {
			ds(e, t, n);
		}
	}
	function ls(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			us(e, t, n);
		}, function(n) {
			return ds(e, t, n);
		}) : us(e, t, n);
	}
	function us(e, t, n) {
		t.status = "fulfilled", t.value = n, fs(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, cs(e, n)));
	}
	function ds(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, fs(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function fs(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function ps(e, t) {
		return t;
	}
	function ms(e, t) {
		if (D) {
			var n = eu.formState;
			if (n !== null) {
				a: {
					var r = j;
					if (D) {
						if (Ji) {
							b: {
								for (var i = Ji, a = Xi; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = Ef(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								Ji = Ef(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						Qi(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = Uo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ps,
			lastRenderedState: t
		}, n.queue = r, n = Ks.bind(null, j, r), r.dispatch = n, r = as(!1), a = Js.bind(null, j, !1, r.queue), r = Uo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = ss.bind(null, j, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function hs(e) {
		return gs(Wo(), To, e);
	}
	function gs(e, t, n) {
		if (t = Zo(e, t, ps)[0], e = Xo(Yo)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = Ko(t);
		} catch (e) {
			throw e === Pa ? A : e;
		}
		else r = t;
		t = Wo();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (j.flags |= 2048, ys(9, { destroy: void 0 }, _s.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function _s(e, t) {
		e.action = t;
	}
	function vs(e) {
		var t = Wo(), n = To;
		if (n !== null) return gs(t, n, e);
		Wo(), t = t.memoizedState, n = Wo();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function ys(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = j.updateQueue, t === null && (t = Go(), j.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function bs() {
		return Wo().memoizedState;
	}
	function xs(e, t, n, r) {
		var i = Uo();
		j.flags |= e, i.memoizedState = ys(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Ss(e, t, n, r) {
		var i = Wo();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		To !== null && r !== null && Fo(r, To.memoizedState.deps) ? i.memoizedState = ys(t, a, n, r) : (j.flags |= e, i.memoizedState = ys(1 | t, a, n, r));
	}
	function Cs(e, t) {
		xs(8390656, 8, e, t);
	}
	function ws(e, t) {
		Ss(2048, 8, e, t);
	}
	function Ts(e) {
		j.flags |= 4;
		var t = j.updateQueue;
		if (t === null) t = Go(), j.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Es(e) {
		var t = Wo().memoizedState;
		return Ts({
			ref: t,
			nextImpl: e
		}), function() {
			if (N & 2) throw Error(l(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Ds(e, t) {
		return Ss(4, 2, e, t);
	}
	function Os(e, t) {
		return Ss(4, 4, e, t);
	}
	function ks(e, t) {
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
	function As(e, t, n) {
		n = n == null ? null : n.concat([e]), Ss(4, 4, ks.bind(null, t, e), n);
	}
	function js() {}
	function Ms(e, t) {
		var n = Wo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Fo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ns(e, t) {
		var n = Wo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Fo(t, r[1])) return r[0];
		if (r = e(), ko) {
			Ze(!0);
			try {
				e();
			} finally {
				Ze(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Ps(e, t, n) {
		return n === void 0 || wo & 1073741824 && !(F & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Au(), j.lanes |= e, cu |= e, n);
	}
	function Fs(e, t, n, r) {
		return Lr(n, t) ? n : lo.current === null ? !(wo & 42) || wo & 1073741824 && !(F & 261930) ? (_c = !0, e.memoizedState = n) : (e = Au(), j.lanes |= e, cu |= e, t) : (e = Ps(e, n, r), Lr(e, t) || (_c = !0), e);
	}
	function Is(e, t, n, r, i) {
		var a = C.p;
		C.p = a !== 0 && 8 > a ? a : 8;
		var o = S.T, s = {};
		S.T = s, Js(e, !1, t, n);
		try {
			var c = i(), l = S.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? qs(e, t, Oa(c, r), ku(e)) : qs(e, t, r, ku(e));
		} catch (n) {
			qs(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, ku());
		} finally {
			C.p = a, o !== null && s.types !== null && (o.types = s.types), S.T = o;
		}
	}
	function Ls() {}
	function Rs(e, t, n, r) {
		if (e.tag !== 5) throw Error(l(476));
		var i = zs(e).queue;
		Is(e, i, t, ge, n === null ? Ls : function() {
			return Bs(e), n(r);
		});
	}
	function zs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ge,
			baseState: ge,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Yo,
				lastRenderedState: ge
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
				lastRenderedReducer: Yo,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Bs(e) {
		var t = zs(e);
		t.next === null && (t = e.alternate.memoizedState), qs(e, t.next.queue, {}, ku());
	}
	function Vs() {
		return ha(pp);
	}
	function Hs() {
		return Wo().memoizedState;
	}
	function Us() {
		return Wo().memoizedState;
	}
	function Ws(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = ku();
					e = eo(n);
					var r = to(t, e, n);
					r !== null && (ju(r, t, n), no(r, t, n)), t = { cache: Sa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Gs(e, t, n) {
		var r = ku();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ys(e) ? Xs(t, n) : (n = gi(e, t, n, r), n !== null && (ju(n, e, r), Zs(n, t, r)));
	}
	function Ks(e, t, n) {
		qs(e, t, n, ku());
	}
	function qs(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Ys(e)) Xs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Lr(s, o)) return hi(e, t, i, 0), eu === null && mi(), !1;
			} catch {}
			if (n = gi(e, t, i, r), n !== null) return ju(n, e, r), Zs(n, t, r), !0;
		}
		return !1;
	}
	function Js(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Od(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ys(e)) {
			if (t) throw Error(l(479));
		} else t = gi(e, n, r, 2), t !== null && ju(t, e, 2);
	}
	function Ys(e) {
		var t = e.alternate;
		return e === j || t !== null && t === j;
	}
	function Xs(e, t) {
		Oo = Do = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Zs(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, mt(e, n);
		}
	}
	var Qs = {
		readContext: ha,
		use: qo,
		useCallback: Po,
		useContext: Po,
		useEffect: Po,
		useImperativeHandle: Po,
		useLayoutEffect: Po,
		useInsertionEffect: Po,
		useMemo: Po,
		useReducer: Po,
		useRef: Po,
		useState: Po,
		useDebugValue: Po,
		useDeferredValue: Po,
		useTransition: Po,
		useSyncExternalStore: Po,
		useId: Po,
		useHostTransitionStatus: Po,
		useFormState: Po,
		useActionState: Po,
		useOptimistic: Po,
		useMemoCache: Po,
		useCacheRefresh: Po
	};
	Qs.useEffectEvent = Po;
	var $s = {
		readContext: ha,
		use: qo,
		useCallback: function(e, t) {
			return Uo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: ha,
		useEffect: Cs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), xs(4194308, 4, ks.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return xs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			xs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Uo();
			t = t === void 0 ? null : t;
			var r = e();
			if (ko) {
				Ze(!0);
				try {
					e();
				} finally {
					Ze(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Uo();
			if (n !== void 0) {
				var i = n(t);
				if (ko) {
					Ze(!0);
					try {
						n(t);
					} finally {
						Ze(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Gs.bind(null, j, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Uo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = as(e);
			var t = e.queue, n = Ks.bind(null, j, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: js,
		useDeferredValue: function(e, t) {
			return Ps(Uo(), e, t);
		},
		useTransition: function() {
			var e = as(!1);
			return e = Is.bind(null, j, e.queue, !0, !1), Uo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = j, i = Uo();
			if (D) {
				if (n === void 0) throw Error(l(407));
				n = n();
			} else {
				if (n = t(), eu === null) throw Error(l(349));
				F & 127 || es(r, t, n);
			}
			i.memoizedState = n;
			var a = {
				value: n,
				getSnapshot: t
			};
			return i.queue = a, Cs(ns.bind(null, r, a, e), [e]), r.flags |= 2048, ys(9, { destroy: void 0 }, ts.bind(null, r, a, n, t), null), n;
		},
		useId: function() {
			var e = Uo(), t = eu.identifierPrefix;
			if (D) {
				var n = Vi, r = Bi;
				n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ao++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = No++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Vs,
		useFormState: ms,
		useActionState: ms,
		useOptimistic: function(e) {
			var t = Uo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Js.bind(null, j, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Jo,
		useCacheRefresh: function() {
			return Uo().memoizedState = Ws.bind(null, j);
		},
		useEffectEvent: function(e) {
			var t = Uo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (N & 2) throw Error(l(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, ec = {
		readContext: ha,
		use: qo,
		useCallback: Ms,
		useContext: ha,
		useEffect: ws,
		useImperativeHandle: As,
		useInsertionEffect: Ds,
		useLayoutEffect: Os,
		useMemo: Ns,
		useReducer: Xo,
		useRef: bs,
		useState: function() {
			return Xo(Yo);
		},
		useDebugValue: js,
		useDeferredValue: function(e, t) {
			return Fs(Wo(), To.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Xo(Yo)[0], t = Wo().memoizedState;
			return [typeof e == "boolean" ? e : Ko(e), t];
		},
		useSyncExternalStore: $o,
		useId: Hs,
		useHostTransitionStatus: Vs,
		useFormState: hs,
		useActionState: hs,
		useOptimistic: function(e, t) {
			return os(Wo(), To, e, t);
		},
		useMemoCache: Jo,
		useCacheRefresh: Us
	};
	ec.useEffectEvent = Es;
	var tc = {
		readContext: ha,
		use: qo,
		useCallback: Ms,
		useContext: ha,
		useEffect: ws,
		useImperativeHandle: As,
		useInsertionEffect: Ds,
		useLayoutEffect: Os,
		useMemo: Ns,
		useReducer: Qo,
		useRef: bs,
		useState: function() {
			return Qo(Yo);
		},
		useDebugValue: js,
		useDeferredValue: function(e, t) {
			var n = Wo();
			return To === null ? Ps(n, e, t) : Fs(n, To.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Qo(Yo)[0], t = Wo().memoizedState;
			return [typeof e == "boolean" ? e : Ko(e), t];
		},
		useSyncExternalStore: $o,
		useId: Hs,
		useHostTransitionStatus: Vs,
		useFormState: vs,
		useActionState: vs,
		useOptimistic: function(e, t) {
			var n = Wo();
			return To === null ? (n.baseState = e, [e, n.queue.dispatch]) : os(n, To, e, t);
		},
		useMemoCache: Jo,
		useCacheRefresh: Us
	};
	tc.useEffectEvent = Es;
	function nc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var rc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ku(), i = eo(r);
			i.payload = t, n != null && (i.callback = n), t = to(e, i, r), t !== null && (ju(t, e, r), no(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ku(), i = eo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = to(e, i, r), t !== null && (ju(t, e, r), no(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ku(), r = eo(n);
			r.tag = 2, t != null && (r.callback = t), t = to(e, r, n), t !== null && (ju(t, e, n), no(t, e, n));
		}
	};
	function ic(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(i, a) : !0;
	}
	function ac(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rc.enqueueReplaceState(t, t.state, null);
	}
	function oc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = _({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function sc(e) {
		ui(e);
	}
	function cc(e) {
		console.error(e);
	}
	function lc(e) {
		ui(e);
	}
	function uc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function dc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function fc(e, t, n) {
		return n = eo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			uc(e, t);
		}, n;
	}
	function pc(e) {
		return e = eo(e), e.tag = 3, e;
	}
	function mc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				dc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			dc(t, n, r), typeof i != "function" && (yu === null ? yu = /* @__PURE__ */ new Set([this]) : yu.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function hc(e, t, n, r, i) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && fa(t, n, i, !0), n = ho.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return go === null ? Uu() : n.alternate === null && su === 0 && (su = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === Ia ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), cd(e, r, i)), !1;
					case 22: return n.flags |= 65536, r === Ia ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), cd(e, r, i)), !1;
				}
				throw Error(l(435, n.tag));
			}
			return cd(e, r, i), Uu(), !1;
		}
		if (D) return t = ho.current, t === null ? (r !== Zi && (t = Error(l(423), { cause: r }), ia(Mi(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = Mi(r, n), i = fc(e.stateNode, r, i), ro(e, i), su !== 4 && (su = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== Zi && (e = Error(l(422), { cause: r }), ia(Mi(e, n)))), !1;
		var a = Error(l(520), { cause: r });
		if (a = Mi(a, n), fu === null ? fu = [a] : fu.push(a), su !== 4 && (su = 2), t === null) return !0;
		r = Mi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = fc(n.stateNode, r, e), ro(n, e), !1;
				case 1: if (t = n.type, a = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (yu === null || !yu.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = pc(i), mc(i, e, n, r), ro(n, i), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var gc = Error(l(461)), _c = !1;
	function vc(e, t, n, r) {
		t.child = e === null ? Xa(t, null, n, r) : Ya(t, e.child, n, r);
	}
	function yc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ma(t), r = Io(e, t, n, o, a, i), s = Bo(), e !== null && !_c ? (Vo(e, t, i), Uc(e, t, i)) : (D && s && Wi(t), t.flags |= 1, vc(e, t, r, i), t.child);
	}
	function bc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ci(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, xc(e, t, a, r, i)) : (e = Ei(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !Wc(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Rr : n, n(o, r) && e.ref === t.ref) return Uc(e, t, i);
		}
		return t.flags |= 1, e = wi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function xc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Rr(a, r) && e.ref === t.ref) if (_c = !1, t.pendingProps = r = a, Wc(e, i)) e.flags & 131072 && (_c = !0);
			else return t.lanes = e.lanes, Uc(e, t, i);
		}
		return kc(e, t, n, r, i);
	}
	function Sc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return wc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ma(t, a === null ? null : a.cachePool), a === null ? po() : fo(t, a), yo(t);
			else return r = t.lanes = 536870912, wc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ma(t, null), po(), bo(t)) : (Ma(t, a.cachePool), fo(t, a), bo(t), t.memoizedState = null);
		return vc(e, t, i, n), t.child;
	}
	function Cc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function wc(e, t, n, r, i) {
		var a = ja();
		return a = a === null ? null : {
			parent: xa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ma(t, null), po(), yo(t), e !== null && fa(e, t, r, !0), t.childLanes = i, null;
	}
	function Tc(e, t) {
		return t = Rc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Ec(e, t, n) {
		return Ya(t, e.child, null, n), e = Tc(t, t.pendingProps), e.flags |= 2, xo(t), t.memoizedState = null, e;
	}
	function Dc(e, t, n) {
		var r = t.pendingProps, i = (t.flags & 128) != 0;
		if (t.flags &= -129, e === null) {
			if (D) {
				if (r.mode === "hidden") return e = Tc(t, r), t.lanes = 536870912, Cc(null, e);
				if (vo(t), (e = Ji) ? (e = Sf(e, Xi), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: zi === null ? null : {
						id: Bi,
						overflow: Vi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ki(e), n.return = t, t.child = n, qi = t, Ji = null)) : e = null, e === null) throw Qi(t);
				return t.lanes = 536870912, null;
			}
			return Tc(t, r);
		}
		var a = e.memoizedState;
		if (a !== null) {
			var o = a.dehydrated;
			if (vo(t), i) if (t.flags & 256) t.flags &= -257, t = Ec(e, t, n);
			else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(l(558));
			else if (_c || fa(e, t, n, !1), i = (n & e.childLanes) !== 0, _c || i) {
				if (r = eu, r !== null && (o = ht(r, n), o !== 0 && o !== a.retryLane)) throw a.retryLane = o, _i(e, o), ju(r, e, o), gc;
				Uu(), t = Ec(e, t, n);
			} else e = a.treeContext, Ji = Ef(o.nextSibling), qi = t, D = !0, Yi = null, Xi = !1, e !== null && Ki(t, e), t = Tc(t, r), t.flags |= 4096;
			return t;
		}
		return e = wi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Oc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(l(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function kc(e, t, n, r, i) {
		return ma(t), n = Io(e, t, n, r, void 0, i), r = Bo(), e !== null && !_c ? (Vo(e, t, i), Uc(e, t, i)) : (D && r && Wi(t), t.flags |= 1, vc(e, t, n, i), t.child);
	}
	function Ac(e, t, n, r, i, a) {
		return ma(t), t.updateQueue = null, n = Ro(t, r, n, i), Lo(e), r = Bo(), e !== null && !_c ? (Vo(e, t, a), Uc(e, t, a)) : (D && r && Wi(t), t.flags |= 1, vc(e, t, n, a), t.child);
	}
	function jc(e, t, n, r, i) {
		if (ma(t), t.stateNode === null) {
			var a = bi, o = n.contextType;
			typeof o == "object" && o && (a = ha(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = rc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Qa(t), o = n.contextType, a.context = typeof o == "object" && o ? ha(o) : bi, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (nc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && rc.enqueueReplaceState(a, a.state, null), oo(t, r, a, i), ao(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = oc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = bi, typeof u == "object" && u && (o = ha(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && ac(t, a, r, o), Za = !1;
			var f = t.memoizedState;
			a.state = f, oo(t, r, a, i), ao(), l = t.memoizedState, s || f !== l || Za ? (typeof d == "function" && (nc(t, n, d, r), l = t.memoizedState), (c = Za || ic(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, $a(e, t), o = t.memoizedProps, u = oc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = bi, typeof l == "object" && l && (c = ha(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && ac(t, a, r, c), Za = !1, f = t.memoizedState, a.state = f, oo(t, r, a, i), ao();
			var p = t.memoizedState;
			o !== d || f !== p || Za || e !== null && e.dependencies !== null && pa(e.dependencies) ? (typeof s == "function" && (nc(t, n, s, r), p = t.memoizedState), (u = Za || ic(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && pa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Oc(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Ya(t, e.child, null, i), t.child = Ya(t, null, n, i)) : vc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Uc(e, t, i), e;
	}
	function Mc(e, t, n, r) {
		return na(), t.flags |= 256, vc(e, t, n, r), t.child;
	}
	var Nc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Pc(e) {
		return {
			baseLanes: e,
			cachePool: Na()
		};
	}
	function Fc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= du), e;
	}
	function Ic(e, t, n) {
		var r = t.pendingProps, i = !1, a = (t.flags & 128) != 0, o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (So.current & 2) != 0), o && (i = !0, t.flags &= -129), o = (t.flags & 32) != 0, t.flags &= -33, e === null) {
			if (D) {
				if (i ? _o(t) : bo(t), (e = Ji) ? (e = Sf(e, Xi), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: zi === null ? null : {
						id: Bi,
						overflow: Vi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ki(e), n.return = t, t.child = n, qi = t, Ji = null)) : e = null, e === null) throw Qi(t);
				return wf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var s = r.children;
			return r = r.fallback, i ? (bo(t), i = t.mode, s = Rc({
				mode: "hidden",
				children: s
			}, i), r = Di(r, i, n, null), s.return = t, r.return = t, s.sibling = r, t.child = s, r = t.child, r.memoizedState = Pc(n), r.childLanes = Fc(e, o, n), t.memoizedState = Nc, Cc(null, r)) : (_o(t), Lc(t, s));
		}
		var c = e.memoizedState;
		if (c !== null && (s = c.dehydrated, s !== null)) {
			if (a) t.flags & 256 ? (_o(t), t.flags &= -257, t = zc(e, t, n)) : t.memoizedState === null ? (bo(t), s = r.fallback, i = t.mode, r = Rc({
				mode: "visible",
				children: r.children
			}, i), s = Di(s, i, n, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, Ya(t, e.child, null, n), r = t.child, r.memoizedState = Pc(n), r.childLanes = Fc(e, o, n), t.memoizedState = Nc, t = Cc(null, r)) : (bo(t), t.child = e.child, t.flags |= 128, t = null);
			else if (_o(t), wf(s)) {
				if (o = s.nextSibling && s.nextSibling.dataset, o) var u = o.dgst;
				o = u, r = Error(l(419)), r.stack = "", r.digest = o, ia({
					value: r,
					source: null,
					stack: null
				}), t = zc(e, t, n);
			} else if (_c || fa(e, t, n, !1), o = (n & e.childLanes) !== 0, _c || o) {
				if (o = eu, o !== null && (r = ht(o, n), r !== 0 && r !== c.retryLane)) throw c.retryLane = r, _i(e, r), ju(o, e, r), gc;
				Cf(s) || Uu(), t = zc(e, t, n);
			} else Cf(s) ? (t.flags |= 192, t.child = e.child, t = null) : (e = c.treeContext, Ji = Ef(s.nextSibling), qi = t, D = !0, Yi = null, Xi = !1, e !== null && Ki(t, e), t = Lc(t, r.children), t.flags |= 4096);
			return t;
		}
		return i ? (bo(t), s = r.fallback, i = t.mode, c = e.child, u = c.sibling, r = wi(c, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = c.subtreeFlags & 65011712, u === null ? (s = Di(s, i, n, null), s.flags |= 2) : s = wi(u, s), s.return = t, r.return = t, r.sibling = s, t.child = r, Cc(null, r), r = t.child, s = e.child.memoizedState, s === null ? s = Pc(n) : (i = s.cachePool, i === null ? i = Na() : (c = xa._currentValue, i = i.parent === c ? i : {
			parent: c,
			pool: c
		}), s = {
			baseLanes: s.baseLanes | n,
			cachePool: i
		}), r.memoizedState = s, r.childLanes = Fc(e, o, n), t.memoizedState = Nc, Cc(e.child, r)) : (_o(t), n = e.child, e = n.sibling, n = wi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Lc(e, t) {
		return t = Rc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Rc(e, t) {
		return e = Si(22, e, null, t), e.lanes = 0, e;
	}
	function zc(e, t, n) {
		return Ya(t, e.child, null, n), e = Lc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Bc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ua(e.return, t, n);
	}
	function Vc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Hc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = So.current, s = (o & 2) != 0;
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, w(So, o), vc(e, t, r, n), r = D ? Ii : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Bc(e, n, t);
			else if (e.tag === 19) Bc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Co(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Vc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Co(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Vc(t, !0, n, null, a, r);
				break;
			case "together":
				Vc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function Uc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), cu |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
			if (fa(e, t, n, !1), (n & t.childLanes) === 0) return null;
		} else return null;
		if (e !== null && t.child !== e.child) throw Error(l(153));
		if (t.child !== null) {
			for (e = t.child, n = wi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = wi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function Wc(e, t) {
		return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && pa(e))) : !0;
	}
	function Gc(e, t, n) {
		switch (t.tag) {
			case 3:
				Te(t, t.stateNode.containerInfo), ca(t, xa, e.memoizedState.cache), na();
				break;
			case 27:
			case 5:
				T(t);
				break;
			case 4:
				Te(t, t.stateNode.containerInfo);
				break;
			case 10:
				ca(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, vo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (_o(t), e = Uc(e, t, n), e === null ? null : e.sibling) : Ic(e, t, n) : (_o(t), t.flags |= 128, null);
				_o(t);
				break;
			case 19:
				var i = (e.flags & 128) != 0;
				if (r = (n & t.childLanes) !== 0, r ||= (fa(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Hc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), w(So, So.current), r) break;
				return null;
			case 22: return t.lanes = 0, Sc(e, t, n, t.pendingProps);
			case 24: ca(t, xa, e.memoizedState.cache);
		}
		return Uc(e, t, n);
	}
	function Kc(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps) _c = !0;
		else {
			if (!Wc(e, n) && !(t.flags & 128)) return _c = !1, Gc(e, t, n);
			_c = !!(e.flags & 131072);
		}
		else _c = !1, D && t.flags & 1048576 && Ui(t, Ii, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = za(t.elementType), t.type = e, typeof e == "function") Ci(e) ? (r = oc(e, r), t.tag = 1, t = jc(null, t, e, r, n)) : (t.tag = 0, t = kc(null, t, e, r, n));
					else {
						if (e != null) {
							var i = e.$$typeof;
							if (i === ae) {
								t.tag = 11, t = yc(null, t, e, r, n);
								break a;
							} else if (i === ce) {
								t.tag = 14, t = bc(null, t, e, r, n);
								break a;
							}
						}
						throw t = me(e) || e, Error(l(306, t, ""));
					}
				}
				return t;
			case 0: return kc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, i = oc(r, t.pendingProps), jc(e, t, r, i, n);
			case 3:
				a: {
					if (Te(t, t.stateNode.containerInfo), e === null) throw Error(l(387));
					r = t.pendingProps;
					var a = t.memoizedState;
					i = a.element, $a(e, t), oo(t, r, null, n);
					var o = t.memoizedState;
					if (r = o.cache, ca(t, xa, r), r !== a.cache && da(t, [xa], n, !0), ao(), r = o.element, a.isDehydrated) if (a = {
						element: r,
						isDehydrated: !1,
						cache: o.cache
					}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
						t = Mc(e, t, r, n);
						break a;
					} else if (r !== i) {
						i = Mi(Error(l(424)), t), ia(i), t = Mc(e, t, r, n);
						break a;
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (Ji = Ef(e.firstChild), qi = t, D = !0, Yi = null, Xi = !0, n = Xa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					}
					else {
						if (na(), r === i) {
							t = Uc(e, t, n);
							break a;
						}
						vc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Oc(e, t), e === null ? (n = Kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : D || (n = t.type, e = t.pendingProps, r = af(Ce.current).createElement(n), r[xt] = t, r[St] = e, Qd(r, n, e), Pt(r), t.stateNode = r) : t.memoizedState = Kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return T(t), e === null && D && (r = t.stateNode = Af(t.type, t.pendingProps, Ce.current), qi = t, Xi = !0, i = Ji, gf(t.type) ? (Df = i, Ji = Ef(r.firstChild)) : Ji = i), vc(e, t, t.pendingProps.children, n), Oc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && D && ((i = r = Ji) && (r = bf(r, t.type, t.pendingProps, Xi), r === null ? i = !1 : (t.stateNode = r, qi = t, Ji = Ef(r.firstChild), Xi = !1, i = !0)), i || Qi(t)), T(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, r = a.children, cf(i, a) ? r = null : o !== null && cf(i, o) && (t.flags |= 32), t.memoizedState !== null && (i = Io(e, t, zo, null, null, n), pp._currentValue = i), Oc(e, t), vc(e, t, r, n), t.child;
			case 6: return e === null && D && ((e = n = Ji) && (n = xf(n, t.pendingProps, Xi), n === null ? e = !1 : (t.stateNode = n, qi = t, Ji = null, e = !0)), e || Qi(t)), null;
			case 13: return Ic(e, t, n);
			case 4: return Te(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ya(t, null, r, n) : vc(e, t, r, n), t.child;
			case 11: return yc(e, t, t.type, t.pendingProps, n);
			case 7: return vc(e, t, t.pendingProps, n), t.child;
			case 8: return vc(e, t, t.pendingProps.children, n), t.child;
			case 12: return vc(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, ca(t, t.type, r.value), vc(e, t, r.children, n), t.child;
			case 9: return i = t.type._context, r = t.pendingProps.children, ma(t), i = ha(i), r = r(i), t.flags |= 1, vc(e, t, r, n), t.child;
			case 14: return bc(e, t, t.type, t.pendingProps, n);
			case 15: return xc(e, t, t.type, t.pendingProps, n);
			case 19: return Hc(e, t, n);
			case 31: return Dc(e, t, n);
			case 22: return Sc(e, t, n, t.pendingProps);
			case 24: return ma(t), r = ha(xa), e === null ? (i = ja(), i === null && (i = eu, a = Sa(), i.pooledCache = a, a.refCount++, a !== null && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
				parent: r,
				cache: i
			}, Qa(t), ca(t, xa, i)) : ((e.lanes & n) !== 0 && ($a(e, t), oo(t, null, null, n), ao()), i = e.memoizedState, a = t.memoizedState, i.parent === r ? (r = a.cache, ca(t, xa, r), r !== i.cache && da(t, [xa], n, !0)) : (i = {
				parent: r,
				cache: r
			}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), ca(t, xa, r))), vc(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(l(156, t.tag));
	}
	function qc(e) {
		e.flags |= 4;
	}
	function Jc(e, t, n, r, i) {
		if ((t = (e.mode & 32) != 0) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
			else if (Bu()) e.flags |= 8192;
			else throw Ba = Ia, Fa;
		} else e.flags &= -16777217;
	}
	function Yc(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !ap(t)) if (Bu()) e.flags |= 8192;
		else throw Ba = Ia, Fa;
	}
	function Xc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : lt(), e.lanes |= t, I |= t);
	}
	function Zc(e, t) {
		if (!D) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function Qc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function $c(e, t, n) {
		var r = t.pendingProps;
		switch (Gi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return Qc(t), null;
			case 1: return Qc(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), la(xa), Ee(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ta(t) ? qc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ra())), Qc(t), null;
			case 26:
				var i = t.type, a = t.memoizedState;
				return e === null ? (qc(t), a === null ? (Qc(t), Jc(t, i, null, r, n)) : (Qc(t), Yc(t, a))) : a ? a === e.memoizedState ? (Qc(t), t.flags &= -16777217) : (qc(t), Qc(t), Yc(t, a)) : (e = e.memoizedProps, e !== r && qc(t), Qc(t), Jc(t, i, e, r, n)), null;
			case 27:
				if (De(t), n = Ce.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && qc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(l(166));
						return Qc(t), null;
					}
					e = xe.current, ta(t) ? $i(t, e) : (e = Af(i, r, n), t.stateNode = e, qc(t));
				}
				return Qc(t), null;
			case 5:
				if (De(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && qc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(l(166));
						return Qc(t), null;
					}
					if (a = xe.current, ta(t)) $i(t, a);
					else {
						var o = af(Ce.current);
						switch (a) {
							case 1:
								a = o.createElementNS("http://www.w3.org/2000/svg", i);
								break;
							case 2:
								a = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
								break;
							default: switch (i) {
								case "svg":
									a = o.createElementNS("http://www.w3.org/2000/svg", i);
									break;
								case "math":
									a = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
									break;
								case "script":
									a = o.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
									break;
								case "select":
									a = typeof r.is == "string" ? o.createElement("select", { is: r.is }) : o.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
									break;
								default: a = typeof r.is == "string" ? o.createElement(i, { is: r.is }) : o.createElement(i);
							}
						}
						a[xt] = t, a[St] = r;
						a: for (o = t.child; o !== null;) {
							if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
							else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
								o.child.return = o, o = o.child;
								continue;
							}
							if (o === t) break a;
							for (; o.sibling === null;) {
								if (o.return === null || o.return === t) break a;
								o = o.return;
							}
							o.sibling.return = o.return, o = o.sibling;
						}
						t.stateNode = a;
						a: switch (Qd(a, i, r), i) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && qc(t);
					}
				}
				return Qc(t), Jc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && qc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
					if (e = Ce.current, ta(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, i = qi, i !== null) switch (i.tag) {
							case 27:
							case 5: r = i.memoizedProps;
						}
						e[xt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Yd(e.nodeValue, n)), e || Qi(t, !0);
					} else e = af(e).createTextNode(r), e[xt] = t, t.stateNode = e;
				}
				return Qc(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ta(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(l(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(l(557));
							e[xt] = t;
						} else na(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Qc(t), e = !1;
					} else n = ra(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (xo(t), t) : (xo(t), null);
					if (t.flags & 128) throw Error(l(558));
				}
				return Qc(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (i = ta(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!i) throw Error(l(318));
							if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i) throw Error(l(317));
							i[xt] = t;
						} else na(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Qc(t), i = !1;
					} else i = ra(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
					if (!i) return t.flags & 256 ? (xo(t), t) : (xo(t), null);
				}
				return xo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), a = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Xc(t, t.updateQueue), Qc(t), null);
			case 4: return Ee(), e === null && zd(t.stateNode.containerInfo), Qc(t), null;
			case 10: return la(t.type), Qc(t), null;
			case 19:
				if (be(So), r = t.memoizedState, r === null) return Qc(t), null;
				if (i = (t.flags & 128) != 0, a = r.rendering, a === null) if (i) Zc(r, !1);
				else {
					if (su !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (a = Co(e), a !== null) {
							for (t.flags |= 128, Zc(r, !1), e = a.updateQueue, t.updateQueue = e, Xc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ti(n, e), n = n.sibling;
							return w(So, So.current & 1 | 2), D && Hi(t, r.treeForkCount), t.child;
						}
						e = e.sibling;
					}
					r.tail !== null && Be() > _u && (t.flags |= 128, i = !0, Zc(r, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = Co(a), e !== null) {
						if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Xc(t, e), Zc(r, !0), r.tail === null && r.tailMode === "hidden" && !a.alternate && !D) return Qc(t), null;
					} else 2 * Be() - r.renderingStartTime > _u && n !== 536870912 && (t.flags |= 128, i = !0, Zc(r, !1), t.lanes = 4194304);
					r.isBackwards ? (a.sibling = t.child, t.child = a) : (e = r.last, e === null ? t.child = a : e.sibling = a, r.last = a);
				}
				return r.tail === null ? (Qc(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Be(), e.sibling = null, n = So.current, w(So, i ? n & 1 | 2 : n & 1), D && Hi(t, r.treeForkCount), e);
			case 22:
			case 23: return xo(t), mo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Qc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qc(t), n = t.updateQueue, n !== null && Xc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && be(Aa), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), la(xa), Qc(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(l(156, t.tag));
	}
	function el(e, t) {
		switch (Gi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return la(xa), Ee(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return De(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (xo(t), t.alternate === null) throw Error(l(340));
					na();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (xo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(l(340));
					na();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return be(So), null;
			case 4: return Ee(), null;
			case 10: return la(t.type), null;
			case 22:
			case 23: return xo(t), mo(), e !== null && be(Aa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return la(xa), null;
			case 25: return null;
			default: return null;
		}
	}
	function tl(e, t) {
		switch (Gi(t), t.tag) {
			case 3:
				la(xa), Ee();
				break;
			case 26:
			case 27:
			case 5:
				De(t);
				break;
			case 4:
				Ee();
				break;
			case 31:
				t.memoizedState !== null && xo(t);
				break;
			case 13:
				xo(t);
				break;
			case 19:
				be(So);
				break;
			case 10:
				la(t.type);
				break;
			case 22:
			case 23:
				xo(t), mo(), e !== null && be(Aa);
				break;
			case 24: la(xa);
		}
	}
	function nl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			sd(t, t.return, e);
		}
	}
	function rl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								sd(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			sd(t, t.return, e);
		}
	}
	function il(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				co(t, n);
			} catch (t) {
				sd(e, e.return, t);
			}
		}
	}
	function al(e, t, n) {
		n.props = oc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			sd(e, t, n);
		}
	}
	function ol(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			sd(e, t, n);
		}
	}
	function sl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) if (typeof r == "function") try {
			r();
		} catch (n) {
			sd(e, t, n);
		} finally {
			e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
		}
		else if (typeof n == "function") try {
			n(null);
		} catch (n) {
			sd(e, t, n);
		}
		else n.current = null;
	}
	function cl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			sd(e, e.return, t);
		}
	}
	function ll(e, t, n) {
		try {
			var r = e.stateNode;
			$d(r, e.type, n, t), r[St] = t;
		} catch (t) {
			sd(e, e.return, t);
		}
	}
	function ul(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && gf(e.type) || e.tag === 4;
	}
	function dl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || ul(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && gf(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function fl(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hn));
		else if (r !== 4 && (r === 27 && gf(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (fl(e, t, n), e = e.sibling; e !== null;) fl(e, t, n), e = e.sibling;
	}
	function pl(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && gf(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (pl(e, t, n), e = e.sibling; e !== null;) pl(e, t, n), e = e.sibling;
	}
	function ml(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Qd(t, r, n), t[xt] = e, t[St] = n;
		} catch (t) {
			sd(e, e.return, t);
		}
	}
	var hl = !1, gl = !1, _l = !1, vl = typeof WeakSet == "function" ? WeakSet : Set, yl = null;
	function bl(e, t) {
		if (e = e.containerInfo, nf = Sp, e = Hr(e), Ur(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset, a = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, a.nodeType;
					} catch {
						n = null;
						break a;
					}
					var o = 0, s = -1, c = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (s = o + i), f !== a || r !== 0 && f.nodeType !== 3 || (c = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === i && (s = o), p === a && ++d === r && (c = o), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = s === -1 || c === -1 ? null : {
						start: s,
						end: c
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (rf = {
			focusedElem: e,
			selectionRange: n
		}, Sp = !1, yl = t; yl !== null;) if (t = yl, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, yl = e;
		else for (; yl !== null;) {
			switch (t = yl, a = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) i = e[n], i.ref.impl = i.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && a !== null) {
						e = void 0, n = t, i = a.memoizedProps, a = a.memoizedState, r = n.stateNode;
						try {
							var h = oc(n.type, i);
							e = r.getSnapshotBeforeUpdate(h, a), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							sd(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) yf(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								yf(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(l(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, yl = e;
				break;
			}
			yl = t.return;
		}
	}
	function xl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Il(e, n), r & 4 && nl(5, n);
				break;
			case 1:
				if (Il(e, n), r & 4) if (e = n.stateNode, t === null) try {
					e.componentDidMount();
				} catch (e) {
					sd(n, n.return, e);
				}
				else {
					var i = oc(n.type, t.memoizedProps);
					t = t.memoizedState;
					try {
						e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
					} catch (e) {
						sd(n, n.return, e);
					}
				}
				r & 64 && il(n), r & 512 && ol(n, n.return);
				break;
			case 3:
				if (Il(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						co(e, t);
					} catch (e) {
						sd(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && ml(n);
			case 26:
			case 5:
				Il(e, n), t === null && r & 4 && cl(n), r & 512 && ol(n, n.return);
				break;
			case 12:
				Il(e, n);
				break;
			case 31:
				Il(e, n), r & 4 && Dl(e, n);
				break;
			case 13:
				Il(e, n), r & 4 && Ol(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = dd.bind(null, n), Tf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || hl, !r) {
					t = t !== null && t.memoizedState !== null || gl, i = hl;
					var a = gl;
					hl = r, (gl = t) && !a ? Rl(e, n, (n.subtreeFlags & 8772) != 0) : Il(e, n), hl = i, gl = a;
				}
				break;
			case 30: break;
			default: Il(e, n);
		}
	}
	function Sl(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, Sl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && kt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var Cl = null, wl = !1;
	function Tl(e, t, n) {
		for (n = n.child; n !== null;) El(e, t, n), n = n.sibling;
	}
	function El(e, t, n) {
		if (Xe && typeof Xe.onCommitFiberUnmount == "function") try {
			Xe.onCommitFiberUnmount(Ye, n);
		} catch {}
		switch (n.tag) {
			case 26:
				gl || sl(n, t), Tl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				gl || sl(n, t);
				var r = Cl, i = wl;
				gf(n.type) && (Cl = n.stateNode, wl = !1), Tl(e, t, n), jf(n.stateNode), Cl = r, wl = i;
				break;
			case 5: gl || sl(n, t);
			case 6:
				if (r = Cl, i = wl, Cl = null, Tl(e, t, n), Cl = r, wl = i, Cl !== null) if (wl) try {
					(Cl.nodeType === 9 ? Cl.body : Cl.nodeName === "HTML" ? Cl.ownerDocument.body : Cl).removeChild(n.stateNode);
				} catch (e) {
					sd(n, t, e);
				}
				else try {
					Cl.removeChild(n.stateNode);
				} catch (e) {
					sd(n, t, e);
				}
				break;
			case 18:
				Cl !== null && (wl ? (e = Cl, _f(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Jp(e)) : _f(Cl, n.stateNode));
				break;
			case 4:
				r = Cl, i = wl, Cl = n.stateNode.containerInfo, wl = !0, Tl(e, t, n), Cl = r, wl = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				rl(2, n, t), gl || rl(4, n, t), Tl(e, t, n);
				break;
			case 1:
				gl || (sl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && al(n, t, r)), Tl(e, t, n);
				break;
			case 21:
				Tl(e, t, n);
				break;
			case 22:
				gl = (r = gl) || n.memoizedState !== null, Tl(e, t, n), gl = r;
				break;
			default: Tl(e, t, n);
		}
	}
	function Dl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Jp(e);
			} catch (e) {
				sd(t, t.return, e);
			}
		}
	}
	function Ol(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Jp(e);
		} catch (e) {
			sd(t, t.return, e);
		}
	}
	function kl(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new vl()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new vl()), t;
			default: throw Error(l(435, e.tag));
		}
	}
	function Al(e, t) {
		var n = kl(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = fd.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function jl(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r], a = e, o = t, s = o;
			a: for (; s !== null;) {
				switch (s.tag) {
					case 27:
						if (gf(s.type)) {
							Cl = s.stateNode, wl = !1;
							break a;
						}
						break;
					case 5:
						Cl = s.stateNode, wl = !1;
						break a;
					case 3:
					case 4:
						Cl = s.stateNode.containerInfo, wl = !0;
						break a;
				}
				s = s.return;
			}
			if (Cl === null) throw Error(l(160));
			El(a, o, i), Cl = null, wl = !1, a = i.alternate, a !== null && (a.return = null), i.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Nl(t, e), t = t.sibling;
	}
	var Ml = null;
	function Nl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				jl(t, e), Pl(e), r & 4 && (rl(3, e, e.return), nl(3, e), rl(5, e, e.return));
				break;
			case 1:
				jl(t, e), Pl(e), r & 512 && (gl || n === null || sl(n, n.return)), r & 64 && hl && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var i = Ml;
				if (jl(t, e), Pl(e), r & 512 && (gl || n === null || sl(n, n.return)), r & 4) {
					var a = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
						a: {
							r = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
							b: switch (r) {
								case "title":
									a = i.getElementsByTagName("title")[0], (!a || a[Ot] || a[xt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = i.createElement(r), i.head.insertBefore(a, i.querySelector("head > title"))), Qd(a, r, n), a[xt] = e, Pt(a), r = a;
									break a;
								case "link":
									var o = np("link", "href", i).get(r + (n.href || ""));
									if (o) {
										for (var s = 0; s < o.length; s++) if (a = o[s], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
											o.splice(s, 1);
											break b;
										}
									}
									a = i.createElement(r), Qd(a, r, n), i.head.appendChild(a);
									break;
								case "meta":
									if (o = np("meta", "content", i).get(r + (n.content || ""))) {
										for (s = 0; s < o.length; s++) if (a = o[s], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
											o.splice(s, 1);
											break b;
										}
									}
									a = i.createElement(r), Qd(a, r, n), i.head.appendChild(a);
									break;
								default: throw Error(l(468, r));
							}
							a[xt] = e, Pt(a), r = a;
						}
						e.stateNode = r;
					} else rp(i, e.type, e.stateNode);
					else e.stateNode = Zf(i, r, e.memoizedProps);
					else a === r ? r === null && e.stateNode !== null && ll(e, e.memoizedProps, n.memoizedProps) : (a === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : a.count--, r === null ? rp(i, e.type, e.stateNode) : Zf(i, r, e.memoizedProps));
				}
				break;
			case 27:
				jl(t, e), Pl(e), r & 512 && (gl || n === null || sl(n, n.return)), n !== null && r & 4 && ll(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (jl(t, e), Pl(e), r & 512 && (gl || n === null || sl(n, n.return)), e.flags & 32) {
					i = e.stateNode;
					try {
						sn(i, "");
					} catch (t) {
						sd(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (i = e.memoizedProps, ll(e, i, n === null ? i : n.memoizedProps)), r & 1024 && (_l = !0);
				break;
			case 6:
				if (jl(t, e), Pl(e), r & 4) {
					if (e.stateNode === null) throw Error(l(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						sd(e, e.return, t);
					}
				}
				break;
			case 3:
				if (tp = null, i = Ml, Ml = Nf(t.containerInfo), jl(t, e), Ml = i, Pl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Jp(t.containerInfo);
				} catch (t) {
					sd(e, e.return, t);
				}
				_l && (_l = !1, Fl(e));
				break;
			case 4:
				r = Ml, Ml = Nf(e.stateNode.containerInfo), jl(t, e), Pl(e), Ml = r;
				break;
			case 12:
				jl(t, e), Pl(e);
				break;
			case 31:
				jl(t, e), Pl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Al(e, r)));
				break;
			case 13:
				jl(t, e), Pl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (hu = Be()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Al(e, r)));
				break;
			case 22:
				i = e.memoizedState !== null;
				var c = n !== null && n.memoizedState !== null, u = hl, d = gl;
				if (hl = u || i, gl = d || c, jl(t, e), gl = d, hl = u, Pl(e), r & 8192) a: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || c || hl || gl || Ll(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							c = n = t;
							try {
								if (a = c.stateNode, i) o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
								else {
									s = c.stateNode;
									var f = c.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									s.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								sd(c, c.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							c = t;
							try {
								c.stateNode.nodeValue = i ? "" : c.memoizedProps;
							} catch (e) {
								sd(c, c.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							c = t;
							try {
								var m = c.stateNode;
								i ? vf(m, !0) : vf(c.stateNode, !1);
							} catch (e) {
								sd(c, c.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, Al(e, n))));
				break;
			case 19:
				jl(t, e), Pl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Al(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: jl(t, e), Pl(e);
		}
	}
	function Pl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (ul(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(l(160));
				switch (n.tag) {
					case 27:
						var i = n.stateNode;
						pl(e, dl(e), i);
						break;
					case 5:
						var a = n.stateNode;
						n.flags & 32 && (sn(a, ""), n.flags &= -33), pl(e, dl(e), a);
						break;
					case 3:
					case 4:
						var o = n.stateNode.containerInfo;
						fl(e, dl(e), o);
						break;
					default: throw Error(l(161));
				}
			} catch (t) {
				sd(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Fl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Fl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function Il(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) xl(e, t.alternate, t), t = t.sibling;
	}
	function Ll(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					rl(4, t, t.return), Ll(t);
					break;
				case 1:
					sl(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && al(t, t.return, n), Ll(t);
					break;
				case 27: jf(t.stateNode);
				case 26:
				case 5:
					sl(t, t.return), Ll(t);
					break;
				case 22:
					t.memoizedState === null && Ll(t);
					break;
				case 30:
					Ll(t);
					break;
				default: Ll(t);
			}
			e = e.sibling;
		}
	}
	function Rl(e, t, n) {
		for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Rl(i, a, n), nl(4, a);
					break;
				case 1:
					if (Rl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						sd(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) so(c[i], s);
						} catch (e) {
							sd(r, r.return, e);
						}
					}
					n && o & 64 && il(a), ol(a, a.return);
					break;
				case 27: ml(a);
				case 26:
				case 5:
					Rl(i, a, n), n && r === null && o & 4 && cl(a), ol(a, a.return);
					break;
				case 12:
					Rl(i, a, n);
					break;
				case 31:
					Rl(i, a, n), n && o & 4 && Dl(i, a);
					break;
				case 13:
					Rl(i, a, n), n && o & 4 && Ol(i, a);
					break;
				case 22:
					a.memoizedState === null && Rl(i, a, n), ol(a, a.return);
					break;
				case 30: break;
				default: Rl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function zl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ca(n));
	}
	function Bl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ca(e));
	}
	function Vl(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) M(e, t, n, r), t = t.sibling;
	}
	function M(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Vl(e, t, n, r), i & 2048 && nl(9, t);
				break;
			case 1:
				Vl(e, t, n, r);
				break;
			case 3:
				Vl(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ca(e)));
				break;
			case 12:
				if (i & 2048) {
					Vl(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						sd(t, t.return, e);
					}
				} else Vl(e, t, n, r);
				break;
			case 31:
				Vl(e, t, n, r);
				break;
			case 13:
				Vl(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? Vl(e, t, n, r) : (a._visibility |= 2, Hl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? Vl(e, t, n, r) : Ul(e, t), i & 2048 && zl(o, t);
				break;
			case 24:
				Vl(e, t, n, r), i & 2048 && Bl(t.alternate, t);
				break;
			default: Vl(e, t, n, r);
		}
	}
	function Hl(e, t, n, r, i) {
		for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Hl(a, o, s, c, i), nl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Hl(a, o, s, c, i)) : u._visibility & 2 ? Hl(a, o, s, c, i) : Ul(a, o), i && l & 2048 && zl(o.alternate, o);
					break;
				case 24:
					Hl(a, o, s, c, i), i && l & 2048 && Bl(o.alternate, o);
					break;
				default: Hl(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Ul(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Ul(n, r), i & 2048 && zl(r.alternate, r);
					break;
				case 24:
					Ul(n, r), i & 2048 && Bl(r.alternate, r);
					break;
				default: Ul(n, r);
			}
			t = t.sibling;
		}
	}
	var Wl = 8192;
	function Gl(e, t, n) {
		if (e.subtreeFlags & Wl) for (e = e.child; e !== null;) Kl(e, t, n), e = e.sibling;
	}
	function Kl(e, t, n) {
		switch (e.tag) {
			case 26:
				Gl(e, t, n), e.flags & Wl && e.memoizedState !== null && op(n, Ml, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Gl(e, t, n);
				break;
			case 3:
			case 4:
				var r = Ml;
				Ml = Nf(e.stateNode.containerInfo), Gl(e, t, n), Ml = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wl, Wl = 16777216, Gl(e, t, n), Wl = r) : Gl(e, t, n));
				break;
			default: Gl(e, t, n);
		}
	}
	function ql(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Jl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				yl = r, Zl(r, e);
			}
			ql(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Yl(e), e = e.sibling;
	}
	function Yl(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Jl(e), e.flags & 2048 && rl(9, e, e.return);
				break;
			case 3:
				Jl(e);
				break;
			case 12:
				Jl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xl(e)) : Jl(e);
				break;
			default: Jl(e);
		}
	}
	function Xl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				yl = r, Zl(r, e);
			}
			ql(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					rl(8, t, t.return), Xl(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xl(t));
					break;
				default: Xl(t);
			}
			e = e.sibling;
		}
	}
	function Zl(e, t) {
		for (; yl !== null;) {
			var n = yl;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					rl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Ca(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, yl = r;
			else a: for (n = e; yl !== null;) {
				r = yl;
				var i = r.sibling, a = r.return;
				if (Sl(r), r === n) {
					yl = null;
					break a;
				}
				if (i !== null) {
					i.return = a, yl = i;
					break a;
				}
				yl = a;
			}
		}
	}
	var Ql = {
		getCacheForType: function(e) {
			var t = ha(xa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return ha(xa).controller.signal;
		}
	}, $l = typeof WeakMap == "function" ? WeakMap : Map, N = 0, eu = null, P = null, F = 0, tu = 0, nu = null, ru = !1, iu = !1, au = !1, ou = 0, su = 0, cu = 0, lu = 0, uu = 0, du = 0, I = 0, fu = null, pu = null, mu = !1, hu = 0, gu = 0, _u = Infinity, vu = null, yu = null, bu = 0, xu = null, Su = null, Cu = 0, wu = 0, Tu = null, Eu = null, Du = 0, Ou = null;
	function ku() {
		return N & 2 && F !== 0 ? F & -F : S.T === null ? vt() : Od();
	}
	function Au() {
		if (du === 0) if (!(F & 536870912) || D) {
			var e = rt;
			rt <<= 1, !(rt & 3932160) && (rt = 262144), du = e;
		} else du = 536870912;
		return e = ho.current, e !== null && (e.flags |= 32), du;
	}
	function ju(e, t, n) {
		(e === eu && (tu === 2 || tu === 9) || e.cancelPendingCommit !== null) && (Ru(e, 0), Fu(e, F, du, !1)), dt(e, n), (!(N & 2) || e !== eu) && (e === eu && (!(N & 2) && (lu |= n), su === 4 && Fu(e, F, du, !1)), bd(e));
	}
	function Mu(e, t, n) {
		if (N & 6) throw Error(l(327));
		var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || st(e, t), i = r ? Ku(e, t) : Wu(e, t, !0), a = r;
		do {
			if (i === 0) {
				iu && !r && Fu(e, t, 0, !1);
				break;
			} else {
				if (n = e.current.alternate, a && !Pu(n)) {
					i = Wu(e, t, !1), a = !1;
					continue;
				}
				if (i === 2) {
					if (a = t, e.errorRecoveryDisabledLanes & a) var o = 0;
					else o = e.pendingLanes & -536870913, o = o === 0 ? o & 536870912 ? 536870912 : 0 : o;
					if (o !== 0) {
						t = o;
						a: {
							var s = e;
							i = fu;
							var c = s.current.memoizedState.isDehydrated;
							if (c && (Ru(s, o).flags |= 256), o = Wu(s, o, !1), o !== 2) {
								if (au && !c) {
									s.errorRecoveryDisabledLanes |= a, lu |= a, i = 4;
									break a;
								}
								a = pu, pu = i, a !== null && (pu === null ? pu = a : pu.push.apply(pu, a));
							}
							i = o;
						}
						if (a = !1, i !== 2) continue;
					}
				}
				if (i === 1) {
					Ru(e, 0), Fu(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, a = i, a) {
						case 0:
						case 1: throw Error(l(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							Fu(r, t, du, !ru);
							break a;
						case 2:
							pu = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(l(329));
					}
					if ((t & 62914560) === t && (i = hu + 300 - Be(), 10 < i)) {
						if (Fu(r, t, du, !ru), ot(r, 0, !0) !== 0) break a;
						Cu = t, r.timeoutHandle = df(Nu.bind(null, r, n, pu, vu, mu, t, du, lu, I, ru, a, "Throttled", -0, 0), i);
						break a;
					}
					Nu(r, n, pu, vu, mu, t, du, lu, I, ru, a, null, -0, 0);
				}
			}
			break;
		} while (1);
		bd(e);
	}
	function Nu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: hn
			}, Kl(t, a, d);
			var m = (a & 62914560) === a ? hu - Be() : (a & 4194048) === a ? gu - Be() : 0;
			if (m = cp(d, m), m !== null) {
				Cu = a, e.cancelPendingCommit = m($u.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), Fu(e, a, o, !l);
				return;
			}
		}
		$u(e, t, a, n, r, i, o, s, c);
	}
	function Pu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Lr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Fu(e, t, n, r) {
		t &= ~uu, t &= ~lu, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Qe(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && pt(e, n, t);
	}
	function Iu() {
		return N & 6 ? !0 : (xd(0, !1), !1);
	}
	function Lu() {
		if (P !== null) {
			if (tu === 0) var e = P.return;
			else e = P, sa = oa = null, Ho(e), Ua = null, Wa = 0, e = P;
			for (; e !== null;) tl(e.alternate, e), e = e.return;
			P = null;
		}
	}
	function Ru(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, ff(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Cu = 0, Lu(), eu = e, P = n = wi(e.current, null), F = t, tu = 0, nu = null, ru = !1, iu = st(e, t), au = !1, I = du = uu = lu = cu = su = 0, pu = fu = null, mu = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - Qe(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return ou = t, mi(), n;
	}
	function zu(e, t) {
		j = null, S.H = Qs, t === Pa || t === A ? (t = Va(), tu = 3) : t === Fa ? (t = Va(), tu = 4) : tu = t === gc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, nu = t, P === null && (su = 1, uc(e, Mi(t, e.current)));
	}
	function Bu() {
		var e = ho.current;
		return e === null ? !0 : (F & 4194048) === F ? go === null : (F & 62914560) === F || F & 536870912 ? e === go : !1;
	}
	function Vu() {
		var e = S.H;
		return S.H = Qs, e === null ? Qs : e;
	}
	function Hu() {
		var e = S.A;
		return S.A = Ql, e;
	}
	function Uu() {
		su = 4, ru || (F & 4194048) !== F && ho.current !== null || (iu = !0), !(cu & 134217727) && !(lu & 134217727) || eu === null || Fu(eu, F, du, !1);
	}
	function Wu(e, t, n) {
		var r = N;
		N |= 2;
		var i = Vu(), a = Hu();
		(eu !== e || F !== t) && (vu = null, Ru(e, t)), t = !1;
		var o = su;
		a: do
			try {
				if (tu !== 0 && P !== null) {
					var s = P, c = nu;
					switch (tu) {
						case 8:
							Lu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							ho.current === null && (t = !0);
							var l = tu;
							if (tu = 0, nu = null, Xu(e, s, c, l), n && iu) {
								o = 0;
								break a;
							}
							break;
						default: l = tu, tu = 0, nu = null, Xu(e, s, c, l);
					}
				}
				Gu(), o = su;
				break;
			} catch (t) {
				zu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, sa = oa = null, N = r, S.H = i, S.A = a, P === null && (eu = null, F = 0, mi()), o;
	}
	function Gu() {
		for (; P !== null;) Ju(P);
	}
	function Ku(e, t) {
		var n = N;
		N |= 2;
		var r = Vu(), i = Hu();
		eu !== e || F !== t ? (vu = null, _u = Be() + 500, Ru(e, t)) : iu = st(e, t);
		a: do
			try {
				if (tu !== 0 && P !== null) {
					t = P;
					var a = nu;
					b: switch (tu) {
						case 1:
							tu = 0, nu = null, Xu(e, t, a, 1);
							break;
						case 2:
						case 9:
							if (La(a)) {
								tu = 0, nu = null, Yu(t);
								break;
							}
							t = function() {
								tu !== 2 && tu !== 9 || eu !== e || (tu = 7), bd(e);
							}, a.then(t, t);
							break a;
						case 3:
							tu = 7;
							break a;
						case 4:
							tu = 5;
							break a;
						case 7:
							La(a) ? (tu = 0, nu = null, Yu(t)) : (tu = 0, nu = null, Xu(e, t, a, 7));
							break;
						case 5:
							var o = null;
							switch (P.tag) {
								case 26: o = P.memoizedState;
								case 5:
								case 27:
									var s = P;
									if (o ? ap(o) : s.stateNode.complete) {
										tu = 0, nu = null;
										var c = s.sibling;
										if (c !== null) P = c;
										else {
											var u = s.return;
											u === null ? P = null : (P = u, Zu(u));
										}
										break b;
									}
							}
							tu = 0, nu = null, Xu(e, t, a, 5);
							break;
						case 6:
							tu = 0, nu = null, Xu(e, t, a, 6);
							break;
						case 8:
							Lu(), su = 6;
							break a;
						default: throw Error(l(462));
					}
				}
				qu();
				break;
			} catch (t) {
				zu(e, t);
			}
		while (1);
		return sa = oa = null, S.H = r, S.A = i, N = n, P === null ? (eu = null, F = 0, mi(), su) : 0;
	}
	function qu() {
		for (; P !== null && !Re();) Ju(P);
	}
	function Ju(e) {
		var t = Kc(e.alternate, e, ou);
		e.memoizedProps = e.pendingProps, t === null ? Zu(e) : P = t;
	}
	function Yu(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Ac(n, t, t.pendingProps, t.type, void 0, F);
				break;
			case 11:
				t = Ac(n, t, t.pendingProps, t.type.render, t.ref, F);
				break;
			case 5: Ho(t);
			default: tl(n, t), t = P = Ti(t, ou), t = Kc(n, t, ou);
		}
		e.memoizedProps = e.pendingProps, t === null ? Zu(e) : P = t;
	}
	function Xu(e, t, n, r) {
		sa = oa = null, Ho(t), Ua = null, Wa = 0;
		var i = t.return;
		try {
			if (hc(e, i, t, n, F)) {
				su = 1, uc(e, Mi(n, e.current)), P = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw P = i, t;
			su = 1, uc(e, Mi(n, e.current)), P = null;
			return;
		}
		t.flags & 32768 ? (D || r === 1 ? e = !0 : iu || F & 536870912 ? e = !1 : (ru = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = ho.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Qu(t, e)) : Zu(t);
	}
	function Zu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Qu(t, ru);
				return;
			}
			e = t.return;
			var n = $c(t.alternate, t, ou);
			if (n !== null) {
				P = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				P = t;
				return;
			}
			P = t = e;
		} while (t !== null);
		su === 0 && (su = 5);
	}
	function Qu(e, t) {
		do {
			var n = el(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, P = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				P = e;
				return;
			}
			P = e = n;
		} while (e !== null);
		su = 6, P = null;
	}
	function $u(e, t, n, r, i, a, o, s, c) {
		e.cancelPendingCommit = null;
		do
			id();
		while (bu !== 0);
		if (N & 6) throw Error(l(327));
		if (t !== null) {
			if (t === e.current) throw Error(l(177));
			if (a = t.lanes | t.childLanes, a |= pi, ft(e, n, a, o, s, c), e === eu && (P = eu = null, F = 0), Su = t, xu = e, Cu = n, wu = a, Tu = i, Eu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, pd(We, function() {
				return ad(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
				r = S.T, S.T = null, i = C.p, C.p = 2, o = N, N |= 4;
				try {
					bl(e, t, n);
				} finally {
					N = o, C.p = i, S.T = r;
				}
			}
			bu = 1, ed(), td(), nd();
		}
	}
	function ed() {
		if (bu === 1) {
			bu = 0;
			var e = xu, t = Su, n = (t.flags & 13878) != 0;
			if (t.subtreeFlags & 13878 || n) {
				n = S.T, S.T = null;
				var r = C.p;
				C.p = 2;
				var i = N;
				N |= 4;
				try {
					Nl(t, e);
					var a = rf, o = Hr(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && Vr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Ur(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Br(s, h), v = Br(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					Sp = !!nf, rf = nf = null;
				} finally {
					N = i, C.p = r, S.T = n;
				}
			}
			e.current = t, bu = 2;
		}
	}
	function td() {
		if (bu === 2) {
			bu = 0;
			var e = xu, t = Su, n = (t.flags & 8772) != 0;
			if (t.subtreeFlags & 8772 || n) {
				n = S.T, S.T = null;
				var r = C.p;
				C.p = 2;
				var i = N;
				N |= 4;
				try {
					xl(e, t.alternate, t);
				} finally {
					N = i, C.p = r, S.T = n;
				}
			}
			bu = 3;
		}
	}
	function nd() {
		if (bu === 4 || bu === 3) {
			bu = 0, ze();
			var e = xu, t = Su, n = Cu, r = Eu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? bu = 5 : (bu = 0, Su = xu = null, rd(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (yu = null), _t(n), t = t.stateNode, Xe && typeof Xe.onCommitFiberRoot == "function") try {
				Xe.onCommitFiberRoot(Ye, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = S.T, i = C.p, C.p = 2, S.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					S.T = t, C.p = i;
				}
			}
			Cu & 3 && id(), bd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === Ou ? Du++ : (Du = 0, Ou = e) : Du = 0, xd(0, !1);
		}
	}
	function rd(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ca(t)));
	}
	function id() {
		return ed(), td(), nd(), ad();
	}
	function ad() {
		if (bu !== 5) return !1;
		var e = xu, t = wu;
		wu = 0;
		var n = _t(Cu), r = S.T, i = C.p;
		try {
			C.p = 32 > n ? 32 : n, S.T = null, n = Tu, Tu = null;
			var a = xu, o = Cu;
			if (bu = 0, Su = xu = null, Cu = 0, N & 6) throw Error(l(331));
			var s = N;
			if (N |= 4, Yl(a.current), M(a, a.current, o, n), N = s, xd(0, !1), Xe && typeof Xe.onPostCommitFiberRoot == "function") try {
				Xe.onPostCommitFiberRoot(Ye, a);
			} catch {}
			return !0;
		} finally {
			C.p = i, S.T = r, rd(e, t);
		}
	}
	function od(e, t, n) {
		t = Mi(n, t), t = fc(e.stateNode, t, 2), e = to(e, t, 2), e !== null && (dt(e, 2), bd(e));
	}
	function sd(e, t, n) {
		if (e.tag === 3) od(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				od(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yu === null || !yu.has(r))) {
					e = Mi(n, e), n = pc(2), r = to(t, n, 2), r !== null && (mc(n, r, t, e), dt(r, 2), bd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function cd(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $l();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (au = !0, i.add(n), e = ld.bind(null, e, t, n), t.then(e, e));
	}
	function ld(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, eu === e && (F & n) === n && (su === 4 || su === 3 && (F & 62914560) === F && 300 > Be() - hu ? !(N & 2) && Ru(e, 0) : uu |= n, I === F && (I = 0)), bd(e);
	}
	function ud(e, t) {
		t === 0 && (t = lt()), e = _i(e, t), e !== null && (dt(e, t), bd(e));
	}
	function dd(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), ud(e, n);
	}
	function fd(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(l(314));
		}
		r !== null && r.delete(t), ud(e, n);
	}
	function pd(e, t) {
		return Ie(e, t);
	}
	var md = null, hd = null, gd = !1, _d = !1, vd = !1, yd = 0;
	function bd(e) {
		e !== hd && e.next === null && (hd === null ? md = hd = e : hd = hd.next = e), _d = !0, gd || (gd = !0, Dd());
	}
	function xd(e, t) {
		if (!vd && _d) {
			vd = !0;
			do
				for (var n = !1, r = md; r !== null;) {
					if (!t) if (e !== 0) {
						var i = r.pendingLanes;
						if (i === 0) var a = 0;
						else {
							var o = r.suspendedLanes, s = r.pingedLanes;
							a = (1 << 31 - Qe(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
						}
						a !== 0 && (n = !0, Ed(r, a));
					} else a = F, a = ot(r, r === eu ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || st(r, a) || (n = !0, Ed(r, a));
					r = r.next;
				}
			while (n);
			vd = !1;
		}
	}
	function Sd() {
		Cd();
	}
	function Cd() {
		_d = gd = !1;
		var e = 0;
		yd !== 0 && uf() && (e = yd);
		for (var t = Be(), n = null, r = md; r !== null;) {
			var i = r.next, a = wd(r, t);
			a === 0 ? (r.next = null, n === null ? md = i : n.next = i, i === null && (hd = n)) : (n = r, (e !== 0 || a & 3) && (_d = !0)), r = i;
		}
		bu !== 0 && bu !== 5 || xd(e, !1), yd !== 0 && (yd = 0);
	}
	function wd(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Qe(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = ct(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = eu, n = F, n = ot(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (tu === 2 || tu === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Le(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || st(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Le(r), _t(n)) {
				case 2:
				case 8:
					n = Ue;
					break;
				case 32:
					n = We;
					break;
				case 268435456:
					n = Ke;
					break;
				default: n = We;
			}
			return r = Td.bind(null, e), n = Ie(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Le(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function Td(e, t) {
		if (bu !== 0 && bu !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (id() && e.callbackNode !== n) return null;
		var r = F;
		return r = ot(e, e === eu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Mu(e, r, t), wd(e, Be()), e.callbackNode != null && e.callbackNode === n ? Td.bind(null, e) : null);
	}
	function Ed(e, t) {
		if (id()) return null;
		Mu(e, t, !0);
	}
	function Dd() {
		mf(function() {
			N & 6 ? Ie(He, Sd) : Cd();
		});
	}
	function Od() {
		if (yd === 0) {
			var e = wa;
			e === 0 && (e = nt, nt <<= 1, !(nt & 261888) && (nt = 256)), yd = e;
		}
		return yd;
	}
	function kd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mn("" + e);
	}
	function Ad(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function jd(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = kd((i[St] || null).action), o = r.submitter;
			o && (t = (t = o[St] || null) ? kd(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new In("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (yd !== 0) {
								var e = o ? Ad(i, o) : new FormData(i);
								Rs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? Ad(i, o) : new FormData(i), Rs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Md = 0; Md < li.length; Md++) {
		var Nd = li[Md];
		E(Nd.toLowerCase(), "on" + (Nd[0].toUpperCase() + Nd.slice(1)));
	}
	E(ti, "onAnimationEnd"), E(ni, "onAnimationIteration"), E(ri, "onAnimationStart"), E("dblclick", "onDoubleClick"), E("focusin", "onFocus"), E("focusout", "onBlur"), E(ii, "onTransitionRun"), E(ai, "onTransitionStart"), E(oi, "onTransitionCancel"), E(si, "onTransitionEnd"), Rt("onMouseEnter", ["mouseout", "mouseover"]), Rt("onMouseLeave", ["mouseout", "mouseover"]), Rt("onPointerEnter", ["pointerout", "pointerover"]), Rt("onPointerLeave", ["pointerout", "pointerover"]), Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Lt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Pd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pd));
	function Id(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ui(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ui(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function L(e, t) {
		var n = t[wt];
		n === void 0 && (n = t[wt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Bd(t, e, 2, !1), n.add(r));
	}
	function Ld(e, t, n) {
		var r = 0;
		t && (r |= 4), Bd(n, e, r, t);
	}
	var Rd = "_reactListening" + Math.random().toString(36).slice(2);
	function zd(e) {
		if (!e[Rd]) {
			e[Rd] = !0, Ft.forEach(function(t) {
				t !== "selectionchange" && (Fd.has(t) || Ld(t, !1, e), Ld(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Rd] || (t[Rd] = !0, Ld("selectionchange", !1, t));
		}
	}
	function Bd(e, t, n, r) {
		switch (kp(t)) {
			case 2:
				var i = Cp;
				break;
			case 8:
				i = wp;
				break;
			default: i = Tp;
		}
		n = i.bind(null, t, n, e), i = void 0, !Tn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Vd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var c = o.tag;
					if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = At(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		Sn(function() {
			var r = a, i = _n(n), o = [];
			a: {
				var s = ci.get(e);
				if (s !== void 0) {
					var c = In, l = e;
					switch (e) {
						case "keypress": if (jn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = er;
							break;
						case "focusin":
							l = "focus", c = Gn;
							break;
						case "focusout":
							l = "blur", c = Gn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Gn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							c = Un;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Wn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = nr;
							break;
						case ti:
						case ni:
						case ri:
							c = Kn;
							break;
						case si:
							c = rr;
							break;
						case "scroll":
						case "scrollend":
							c = Rn;
							break;
						case "wheel":
							c = ir;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = qn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							c = tr;
							break;
						case "toggle":
						case "beforetoggle": c = ar;
					}
					var u = (t & 4) != 0, f = !u && (e === "scroll" || e === "scrollend"), p = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Cn(m, p), g != null && u.push(Hd(m, g, h))), f) break;
						m = m.return;
					}
					0 < u.length && (s = new c(s, l, null, n, i), o.push({
						event: s,
						listeners: u
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== gn && (l = n.relatedTarget || n.fromElement) && (At(l) || l[Ct])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? At(l) : null, l !== null && (f = d(l), u = l.tag, l !== f || u !== 5 && u !== 27 && u !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = Un, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (u = tr, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? s : Mt(c), h = l == null ? s : Mt(l), s = new u(g, m + "leave", c, n, i), s.target = f, s.relatedTarget = h, g = null, At(i) === r && (u = new u(p, m + "enter", l, n, i), u.target = h, u.relatedTarget = f, g = u), f = g, c && l) b: {
							for (u = Wd, p = c, m = l, h = 0, g = p; g; g = u(g)) h++;
							g = 0;
							for (var _ = m; _; _ = u(_)) g++;
							for (; 0 < h - g;) p = u(p), h--;
							for (; 0 < g - h;) m = u(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									u = p;
									break b;
								}
								p = u(p), m = u(m);
							}
							u = null;
						}
						else u = null;
						c !== null && Gd(o, s, c, u, !1), l !== null && f !== null && Gd(o, f, l, u, !0);
					}
				}
				a: {
					if (s = r ? Mt(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var v = Tr;
					else if (yr(s)) if (Er) v = Fr;
					else {
						v = Nr;
						var y = Mr;
					}
					else c = s.nodeName, !c || c.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && dn(r.elementType) && (v = Tr) : v = Pr;
					if (v &&= v(e, r)) {
						br(o, v, n, i);
						break a;
					}
					y && y(e, s, r), e === "focusout" && r && s.type === "number" && r.memoizedProps.value != null && nn(s, "number", s.value);
				}
				switch (y = r ? Mt(r) : window, e) {
					case "focusin":
						(yr(y) || y.contentEditable === "true") && (Gr = y, Kr = r, qr = null);
						break;
					case "focusout":
						qr = Kr = Gr = null;
						break;
					case "mousedown":
						Jr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Jr = !1, Yr(o, n, i);
						break;
					case "selectionchange": if (Wr) break;
					case "keydown":
					case "keyup": Yr(o, n, i);
				}
				var b;
				if (sr) b: {
					switch (e) {
						case "compositionstart":
							var ee = "onCompositionStart";
							break b;
						case "compositionend":
							ee = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ee = "onCompositionUpdate";
							break b;
					}
					ee = void 0;
				}
				else hr ? pr(e, n) && (ee = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ee = "onCompositionStart");
				ee && (ur && n.locale !== "ko" && (hr || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && hr && (b = An()) : (Dn = i, On = "value" in Dn ? Dn.value : Dn.textContent, hr = !0)), y = Ud(r, ee), 0 < y.length && (ee = new Jn(ee, e, null, n, i), o.push({
					event: ee,
					listeners: y
				}), b ? ee.data = b : (b = mr(n), b !== null && (ee.data = b)))), (b = lr ? gr(e, n) : _r(e, n)) && (ee = Ud(r, "onBeforeInput"), 0 < ee.length && (y = new Jn("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: y,
					listeners: ee
				}), y.data = b)), jd(o, e, r, n, i);
			}
			Id(o, t);
		});
	}
	function Hd(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Ud(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Cn(e, n), i != null && r.unshift(Hd(e, i, a)), i = Cn(e, t), i != null && r.push(Hd(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Wd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Gd(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Cn(n, a), l != null && o.unshift(Hd(n, l, c))) : i || (l = Cn(n, a), l != null && o.push(Hd(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Kd = /\r\n?/g, qd = /\u0000|\uFFFD/g;
	function Jd(e) {
		return (typeof e == "string" ? e : "" + e).replace(Kd, "\n").replace(qd, "");
	}
	function Yd(e, t) {
		return t = Jd(t), Jd(e) === t;
	}
	function Xd(e, t, n, r, i, a) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || sn(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && sn(e, "" + r);
				break;
			case "className":
				Wt(e, "class", r);
				break;
			case "tabIndex":
				Wt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Wt(e, n, r);
				break;
			case "style":
				un(e, r, a);
				break;
			case "data": if (t !== "object") {
				Wt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = mn("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else typeof a == "function" && (n === "formAction" ? (t !== "input" && Xd(e, t, "name", i.name, i, null), Xd(e, t, "formEncType", i.formEncType, i, null), Xd(e, t, "formMethod", i.formMethod, i, null), Xd(e, t, "formTarget", i.formTarget, i, null)) : (Xd(e, t, "encType", i.encType, i, null), Xd(e, t, "method", i.method, i, null), Xd(e, t, "target", i.target, i, null)));
				if (r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = mn("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = hn);
				break;
			case "onScroll":
				r != null && L("scroll", e);
				break;
			case "onScrollEnd":
				r != null && L("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(l(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(l(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = mn("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
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
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				L("beforetoggle", e), L("toggle", e), Ut(e, "popover", r);
				break;
			case "xlinkActuate":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Ut(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = fn.get(n) || n, Ut(e, n, r));
		}
	}
	function Zd(e, t, n, r, i, a) {
		switch (n) {
			case "style":
				un(e, r, a);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(l(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(l(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? sn(e, r) : (typeof r == "number" || typeof r == "bigint") && sn(e, "" + r);
				break;
			case "onScroll":
				r != null && L("scroll", e);
				break;
			case "onScrollEnd":
				r != null && L("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = hn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!It.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), a = e[St] || null, a = a == null ? null : a[n], typeof a == "function" && e.removeEventListener(t, a, i), typeof r == "function")) {
					typeof a != "function" && a !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Ut(e, n, r);
			}
		}
	}
	function Qd(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				L("error", e), L("load", e);
				var r = !1, i = !1, a;
				for (a in n) if (n.hasOwnProperty(a)) {
					var o = n[a];
					if (o != null) switch (a) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							i = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(l(137, t));
						default: Xd(e, t, a, o, n, null);
					}
				}
				i && Xd(e, t, "srcSet", n.srcSet, n, null), r && Xd(e, t, "src", n.src, n, null);
				return;
			case "input":
				L("invalid", e);
				var s = a = o = i = null, c = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							i = d;
							break;
						case "type":
							o = d;
							break;
						case "checked":
							c = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							a = d;
							break;
						case "defaultValue":
							s = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(l(137, t));
							break;
						default: Xd(e, t, r, d, n, null);
					}
				}
				tn(e, a, s, c, u, o, i, !1);
				return;
			case "select":
				for (i in L("invalid", e), r = o = a = null, n) if (n.hasOwnProperty(i) && (s = n[i], s != null)) switch (i) {
					case "value":
						a = s;
						break;
					case "defaultValue":
						o = s;
						break;
					case "multiple": r = s;
					default: Xd(e, t, i, s, n, null);
				}
				t = a, n = o, e.multiple = !!r, t == null ? n != null && rn(e, !!r, n, !0) : rn(e, !!r, t, !1);
				return;
			case "textarea":
				for (o in L("invalid", e), a = i = r = null, n) if (n.hasOwnProperty(o) && (s = n[o], s != null)) switch (o) {
					case "value":
						r = s;
						break;
					case "defaultValue":
						i = s;
						break;
					case "children":
						a = s;
						break;
					case "dangerouslySetInnerHTML":
						if (s != null) throw Error(l(91));
						break;
					default: Xd(e, t, o, s, n, null);
				}
				on(e, r, i, a);
				return;
			case "option":
				for (c in n) if (n.hasOwnProperty(c) && (r = n[c], r != null)) switch (c) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: Xd(e, t, c, r, n, null);
				}
				return;
			case "dialog":
				L("beforetoggle", e), L("toggle", e), L("cancel", e), L("close", e);
				break;
			case "iframe":
			case "object":
				L("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Pd.length; r++) L(Pd[r], e);
				break;
			case "image":
				L("error", e), L("load", e);
				break;
			case "details":
				L("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": L("error", e), L("load", e);
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
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(l(137, t));
					default: Xd(e, t, u, r, n, null);
				}
				return;
			default: if (dn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Zd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (s in n) n.hasOwnProperty(s) && (r = n[s], r != null && Xd(e, t, s, r, n, null));
	}
	function $d(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var i = null, a = null, o = null, s = null, c = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": c = f;
						default: r.hasOwnProperty(m) || Xd(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							a = m;
							break;
						case "name":
							i = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							o = m;
							break;
						case "defaultValue":
							s = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(l(137, t));
							break;
						default: m !== f && Xd(e, t, p, m, r, f);
					}
				}
				en(e, o, s, c, u, d, a, i);
				return;
			case "select":
				for (a in m = o = s = p = null, n) if (c = n[a], n.hasOwnProperty(a) && c != null) switch (a) {
					case "value": break;
					case "multiple": m = c;
					default: r.hasOwnProperty(a) || Xd(e, t, a, null, r, c);
				}
				for (i in r) if (a = r[i], c = n[i], r.hasOwnProperty(i) && (a != null || c != null)) switch (i) {
					case "value":
						p = a;
						break;
					case "defaultValue":
						s = a;
						break;
					case "multiple": o = a;
					default: a !== c && Xd(e, t, i, a, r, c);
				}
				t = s, n = o, r = m, p == null ? !!r != !!n && (t == null ? rn(e, !!n, n ? [] : "", !1) : rn(e, !!n, t, !0)) : rn(e, !!n, p, !1);
				return;
			case "textarea":
				for (s in m = p = null, n) if (i = n[s], n.hasOwnProperty(s) && i != null && !r.hasOwnProperty(s)) switch (s) {
					case "value": break;
					case "children": break;
					default: Xd(e, t, s, null, r, i);
				}
				for (o in r) if (i = r[o], a = n[o], r.hasOwnProperty(o) && (i != null || a != null)) switch (o) {
					case "value":
						p = i;
						break;
					case "defaultValue":
						m = i;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (i != null) throw Error(l(91));
						break;
					default: i !== a && Xd(e, t, o, i, r, a);
				}
				an(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: Xd(e, t, h, null, r, p);
				}
				for (c in r) if (p = r[c], m = n[c], r.hasOwnProperty(c) && p !== m && (p != null || m != null)) switch (c) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: Xd(e, t, c, p, r, m);
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
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Xd(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(l(137, t));
						break;
					default: Xd(e, t, u, p, r, m);
				}
				return;
			default: if (dn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Zd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Zd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Xd(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || Xd(e, t, f, p, r, m);
	}
	function ef(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function tf() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ef(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ef(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var nf = null, rf = null;
	function af(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function of(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function sf(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function cf(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var lf = null;
	function uf() {
		var e = window.event;
		return e && e.type === "popstate" ? e === lf ? !1 : (lf = e, !0) : (lf = null, !1);
	}
	var df = typeof setTimeout == "function" ? setTimeout : void 0, ff = typeof clearTimeout == "function" ? clearTimeout : void 0, pf = typeof Promise == "function" ? Promise : void 0, mf = typeof queueMicrotask == "function" ? queueMicrotask : pf === void 0 ? df : function(e) {
		return pf.resolve(null).then(e).catch(hf);
	};
	function hf(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function gf(e) {
		return e === "head";
	}
	function _f(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$" || n === "/&") {
				if (r === 0) {
					e.removeChild(i), Jp(t);
					return;
				}
				r--;
			} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
			else if (n === "html") jf(e.ownerDocument.documentElement);
			else if (n === "head") {
				n = e.ownerDocument.head, jf(n);
				for (var a = n.firstChild; a;) {
					var o = a.nextSibling, s = a.nodeName;
					a[Ot] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
				}
			} else n === "body" && jf(e.ownerDocument.body);
			n = i;
		} while (n);
		Jp(t);
	}
	function vf(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === "/$") {
				if (e === 0) break;
				e--;
			} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			n = r;
		} while (n);
	}
	function yf(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					yf(n), kt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function bf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) if (t === "input" && e.type === "hidden") {
				var a = i.name == null ? null : "" + i.name;
				if (i.type === "hidden" && e.getAttribute("name") === a) return e;
			} else return e;
			else if (!e[Ot]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = Ef(e.nextSibling), e === null) break;
		}
		return null;
	}
	function xf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ef(e.nextSibling), e === null)) return null;
		return e;
	}
	function Sf(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ef(e.nextSibling), e === null)) return null;
		return e;
	}
	function Cf(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function wf(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function Tf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function Ef(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var Df = null;
	function Of(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return Ef(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function kf(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function Af(e, t, n) {
		switch (t = af(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(l(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(l(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(l(454));
				return e;
			default: throw Error(l(451));
		}
	}
	function jf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		kt(e);
	}
	var Mf = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set();
	function Nf(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var Pf = C.d;
	C.d = {
		f: Ff,
		r: If,
		D: zf,
		C: Bf,
		L: Vf,
		m: Hf,
		X: Wf,
		S: Uf,
		M: Gf
	};
	function Ff() {
		var e = Pf.f(), t = Iu();
		return e || t;
	}
	function If(e) {
		var t = jt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Bs(t) : Pf.r(e);
	}
	var Lf = typeof document > "u" ? null : document;
	function Rf(e, t, n) {
		var r = Lf;
		if (r && typeof t == "string" && t) {
			var i = $t(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), R.has(i) || (R.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Qd(t, "link", e), Pt(t), r.head.appendChild(t)));
		}
	}
	function zf(e) {
		Pf.D(e), Rf("dns-prefetch", e, null);
	}
	function Bf(e, t) {
		Pf.C(e, t), Rf("preconnect", e, t);
	}
	function Vf(e, t, n) {
		Pf.L(e, t, n);
		var r = Lf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + $t(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + $t(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + $t(n.imageSizes) + "\"]")) : i += "[href=\"" + $t(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = qf(e);
					break;
				case "script": a = z(e);
			}
			Mf.has(a) || (e = _({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), Mf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Jf(a)) || t === "script" && r.querySelector(B(a)) || (t = r.createElement("link"), Qd(t, "link", e), Pt(t), r.head.appendChild(t)));
		}
	}
	function Hf(e, t) {
		Pf.m(e, t);
		var n = Lf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + $t(r) + "\"][href=\"" + $t(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = z(e);
			}
			if (!Mf.has(a) && (e = _({
				rel: "modulepreload",
				href: e
			}, t), Mf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(B(a))) return;
				}
				r = n.createElement("link"), Qd(r, "link", e), Pt(r), n.head.appendChild(r);
			}
		}
	}
	function Uf(e, t, n) {
		Pf.S(e, t, n);
		var r = Lf;
		if (r && e) {
			var i = Nt(r).hoistableStyles, a = qf(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Jf(a))) s.loading = 5;
				else {
					e = _({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = Mf.get(a)) && $f(e, n);
					var c = o = r.createElement("link");
					Pt(c), Qd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Qf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Wf(e, t) {
		Pf.X(e, t);
		var n = Lf;
		if (n && e) {
			var r = Nt(n).hoistableScripts, i = z(e), a = r.get(i);
			a || (a = n.querySelector(B(i)), a || (e = _({
				src: e,
				async: !0
			}, t), (t = Mf.get(i)) && ep(e, t), a = n.createElement("script"), Pt(a), Qd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Gf(e, t) {
		Pf.M(e, t);
		var n = Lf;
		if (n && e) {
			var r = Nt(n).hoistableScripts, i = z(e), a = r.get(i);
			a || (a = n.querySelector(B(i)), a || (e = _({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = Mf.get(i)) && ep(e, t), a = n.createElement("script"), Pt(a), Qd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Kf(e, t, n, r) {
		var i = (i = Ce.current) ? Nf(i) : null;
		if (!i) throw Error(l(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = qf(n.href), n = Nt(i).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = qf(n.href);
					var a = Nt(i).hoistableStyles, o = a.get(e);
					if (o || (i = i.ownerDocument || i, o = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, a.set(e, o), (a = i.querySelector(Jf(e))) && !a._p && (o.instance = a, o.state.loading = 5), Mf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, Mf.set(e, n), a || Xf(i, e, n, o.state))), t && r === null) throw Error(l(528, ""));
					return o;
				}
				if (t && r !== null) throw Error(l(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = z(n), n = Nt(i).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(l(444, e));
		}
	}
	function qf(e) {
		return "href=\"" + $t(e) + "\"";
	}
	function Jf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Yf(e) {
		return _({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Xf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Qd(t, "link", n), Pt(t), e.head.appendChild(t));
	}
	function z(e) {
		return "[src=\"" + $t(e) + "\"]";
	}
	function B(e) {
		return "script[async]" + e;
	}
	function Zf(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + $t(n.href) + "\"]");
				if (r) return t.instance = r, Pt(r), r;
				var i = _({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Pt(r), Qd(r, "style", i), Qf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				i = qf(n.href);
				var a = e.querySelector(Jf(i));
				if (a) return t.state.loading |= 4, t.instance = a, Pt(a), a;
				r = Yf(n), (i = Mf.get(i)) && $f(r, i), a = (e.ownerDocument || e).createElement("link"), Pt(a);
				var o = a;
				return o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Qd(a, "link", r), t.state.loading |= 4, Qf(a, n.precedence, e), t.instance = a;
			case "script": return a = z(n.src), (i = e.querySelector(B(a))) ? (t.instance = i, Pt(i), i) : (r = n, (i = Mf.get(a)) && (r = _({}, n), ep(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), Pt(i), Qd(i, "link", r), e.head.appendChild(i), t.instance = i);
			case "void": return null;
			default: throw Error(l(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Qf(r, n.precedence, e));
		return t.instance;
	}
	function Qf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function $f(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function ep(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var tp = null;
	function np(e, t, n) {
		if (tp === null) {
			var r = /* @__PURE__ */ new Map(), i = tp = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = tp, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Ot] || a[xt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function rp(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function ip(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function ap(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function op(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = qf(r.href), a = t.querySelector(Jf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = lp.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Pt(a);
					return;
				}
				a = t.ownerDocument || t, r = Yf(r), (i = Mf.get(i)) && $f(r, i), a = a.createElement("link"), Pt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Qd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = lp.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var sp = 0;
	function cp(e, t) {
		return e.stylesheets && e.count === 0 && dp(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && dp(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && sp === 0 && (sp = 62500 * tf());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && dp(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > sp ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function lp() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) dp(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var up = null;
	function dp(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, up = /* @__PURE__ */ new Map(), t.forEach(fp, e), up = null, lp.call(e));
	}
	function fp(e, t) {
		if (!(t.state.loading & 4)) {
			var n = up.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), up.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = lp.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var pp = {
		$$typeof: ie,
		Provider: null,
		Consumer: null,
		_currentValue: ge,
		_currentValue2: ge,
		_threadCount: 0
	};
	function mp(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ut(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ut(0), this.hiddenUpdates = ut(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function hp(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new mp(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Si(3, null, null, t), e.current = a, a.stateNode = e, t = Sa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Qa(a), e;
	}
	function gp(e) {
		return e ? (e = bi, e) : bi;
	}
	function _p(e, t, n, r, i, a) {
		i = gp(i), r.context === null ? r.context = i : r.pendingContext = i, r = eo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = to(e, r, t), n !== null && (ju(n, e, t), no(n, e, t));
	}
	function vp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function yp(e, t) {
		vp(e, t), (e = e.alternate) && vp(e, t);
	}
	function bp(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = _i(e, 67108864);
			t !== null && ju(t, e, 67108864), yp(e, 67108864);
		}
	}
	function xp(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = ku();
			t = gt(t);
			var n = _i(e, t);
			n !== null && ju(n, e, t), yp(e, t);
		}
	}
	var Sp = !0;
	function Cp(e, t, n, r) {
		var i = S.T;
		S.T = null;
		var a = C.p;
		try {
			C.p = 2, Tp(e, t, n, r);
		} finally {
			C.p = a, S.T = i;
		}
	}
	function wp(e, t, n, r) {
		var i = S.T;
		S.T = null;
		var a = C.p;
		try {
			C.p = 8, Tp(e, t, n, r);
		} finally {
			C.p = a, S.T = i;
		}
	}
	function Tp(e, t, n, r) {
		if (Sp) {
			var i = Ep(r);
			if (i === null) Vd(e, t, r, Dp, n), Rp(e, r);
			else if (Bp(i, e, t, n, r)) r.stopPropagation();
			else if (Rp(e, r), t & 4 && -1 < Lp.indexOf(e)) {
				for (; i !== null;) {
					var a = jt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = at(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Qe(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									bd(a), !(N & 6) && (_u = Be() + 500, xd(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = _i(a, 2), s !== null && ju(s, a, 2), Iu(), yp(a, 2);
					}
					if (a = Ep(r), a === null && Vd(e, t, r, Dp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Vd(e, t, r, null, n);
		}
	}
	function Ep(e) {
		return e = _n(e), Op(e);
	}
	var Dp = null;
	function Op(e) {
		if (Dp = null, e = At(e), e !== null) {
			var t = d(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = f(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = p(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return Dp = e, null;
	}
	function kp(e) {
		switch (e) {
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
			case "selectstart": return 2;
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
			case "pointerleave": return 8;
			case "message": switch (Ve()) {
				case He: return 2;
				case Ue: return 8;
				case We:
				case Ge: return 32;
				case Ke: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var Ap = !1, jp = null, Mp = null, Np = null, Pp = /* @__PURE__ */ new Map(), Fp = /* @__PURE__ */ new Map(), Ip = [], Lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Rp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				jp = null;
				break;
			case "dragenter":
			case "dragleave":
				Mp = null;
				break;
			case "mouseover":
			case "mouseout":
				Np = null;
				break;
			case "pointerover":
			case "pointerout":
				Pp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Fp.delete(t.pointerId);
		}
	}
	function zp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = jt(t), t !== null && bp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Bp(e, t, n, r, i) {
		switch (t) {
			case "focusin": return jp = zp(jp, e, t, n, r, i), !0;
			case "dragenter": return Mp = zp(Mp, e, t, n, r, i), !0;
			case "mouseover": return Np = zp(Np, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Pp.set(a, zp(Pp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, Fp.set(a, zp(Fp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Vp(e) {
		var t = At(e.target);
		if (t !== null) {
			var n = d(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = f(n), t !== null) {
						e.blockedOn = t, yt(e.priority, function() {
							xp(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = p(n), t !== null) {
						e.blockedOn = t, yt(e.priority, function() {
							xp(n);
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
	function Hp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = Ep(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				gn = r, n.target.dispatchEvent(r), gn = null;
			} else return t = jt(n), t !== null && bp(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Up(e, t, n) {
		Hp(e) && n.delete(t);
	}
	function Wp() {
		Ap = !1, jp !== null && Hp(jp) && (jp = null), Mp !== null && Hp(Mp) && (Mp = null), Np !== null && Hp(Np) && (Np = null), Pp.forEach(Up), Fp.forEach(Up);
	}
	function Gp(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Ap || (Ap = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Wp)));
	}
	var Kp = null;
	function qp(e) {
		Kp !== e && (Kp = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
			Kp === e && (Kp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Op(r || n) === null) continue;
					break;
				}
				var a = jt(n);
				a !== null && (e.splice(t, 3), t -= 3, Rs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Jp(e) {
		function t(t) {
			return Gp(t, e);
		}
		jp !== null && Gp(jp, e), Mp !== null && Gp(Mp, e), Np !== null && Gp(Np, e), Pp.forEach(t), Fp.forEach(t);
		for (var n = 0; n < Ip.length; n++) {
			var r = Ip[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ip.length && (n = Ip[0], n.blockedOn === null);) Vp(n), n.blockedOn === null && Ip.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[St] || null;
			if (typeof a == "function") o || qp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[St] || null) s = o.formAction;
					else if (Op(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), qp(n);
			}
		}
	}
	function Yp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Xp(e) {
		this._internalRoot = e;
	}
	Zp.prototype.render = Xp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(l(409));
		var n = t.current;
		_p(n, ku(), e, t, null, null);
	}, Zp.prototype.unmount = Xp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			_p(e.current, 2, null, e, null, null), Iu(), t[Ct] = null;
		}
	};
	function Zp(e) {
		this._internalRoot = e;
	}
	Zp.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = vt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ip.length && t !== 0 && t < Ip[n].priority; n++);
			Ip.splice(n, 0, e), n === 0 && Vp(e);
		}
	};
	var Qp = i.version;
	if (Qp !== "19.2.8") throw Error(l(527, Qp, "19.2.8"));
	C.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
		return e = h(t), e = e === null ? null : g(e), e = e === null ? null : e.stateNode, e;
	};
	var $p = {
		bundleType: 0,
		version: "19.2.8",
		rendererPackageName: "react-dom",
		currentDispatcherRef: S,
		reconcilerVersion: "19.2.8"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var em = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!em.isDisabled && em.supportsFiber) try {
			Ye = em.inject($p), Xe = em;
		} catch {}
	}
	n.createRoot = function(e, t) {
		if (!u(e)) throw Error(l(299));
		var n = !1, r = "", i = sc, a = cc, o = lc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (a = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = hp(e, 1, !1, null, null, n, r, null, i, a, o, Yp), e[Ct] = t.current, zd(e), new Xp(t);
	}, n.hydrateRoot = function(e, t, n) {
		if (!u(e)) throw Error(l(299));
		var r = !1, i = "", a = sc, o = cc, s = lc, c = null;
		return n != null && (!0 === n.unstable_strictMode && (r = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (a = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError), n.formState !== void 0 && (c = n.formState)), t = hp(e, 1, !0, t, n ?? null, r, i, c, a, o, s, Yp), t.context = gp(null), n = t.current, r = ku(), r = gt(r), i = eo(r), i.callback = null, to(n, i, r), n = r, t.current.lanes = n, dt(t, n), bd(t), e[Ct] = t.current, zd(e), new Zp(t);
	}, n.version = "19.2.8";
})), u = /* @__PURE__ */ i(((n) => {
	t(), a.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			for (e = e.memoizedState; e !== null && 0 < t;) e = e.next, t--;
			return e;
		}
		function r(e, t, n, i) {
			if (n >= t.length) return i;
			var a = t[n], o = Xf(e) ? e.slice() : R({}, e);
			return o[a] = r(e[a], t, n + 1, i), o;
		}
		function i(e, t, n) {
			if (t.length !== n.length) console.warn("copyWithRename() expects paths of the same length");
			else {
				for (var r = 0; r < n.length - 1; r++) if (t[r] !== n[r]) {
					console.warn("copyWithRename() expects paths to be the same except for the deepest key");
					return;
				}
				return o(e, t, n, 0);
			}
		}
		function o(e, t, n, r) {
			var i = t[r], a = Xf(e) ? e.slice() : R({}, e);
			return r + 1 === t.length ? (a[n[r]] = a[i], Xf(a) ? a.splice(i, 1) : delete a[i]) : a[i] = o(e[i], t, n, r + 1), a;
		}
		function l(e, t, n) {
			var r = t[n], i = Xf(e) ? e.slice() : R({}, e);
			return n + 1 === t.length ? (Xf(i) ? i.splice(r, 1) : delete i[r], i) : (i[r] = l(e[r], t, n + 1), i);
		}
		function u() {
			return !1;
		}
		function d() {
			return null;
		}
		function f() {
			console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
		}
		function p() {
			console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
		}
		function m() {}
		function h() {}
		function g(e) {
			var t = [];
			return e.forEach(function(e) {
				t.push(e);
			}), t.sort().join(", ");
		}
		function _(e, t, n, r) {
			return new Dr(e, t, n, r);
		}
		function v(e, t) {
			e.context === Ig && (rf(e.current, 2, t, e, null, null), pl());
		}
		function y(e, t) {
			if (Lg !== null) {
				var n = t.staleFamilies;
				t = t.updatedFamilies, zl(), Er(e.current, t, n), pl();
			}
		}
		function b(e) {
			Lg = e;
		}
		function ee(e) {
			return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
		}
		function te(e) {
			var t = e, n = e;
			if (e.alternate) for (; t.return;) t = t.return;
			else {
				e = t;
				do
					t = e, t.flags & 4098 && (n = t.return), e = t.return;
				while (e);
			}
			return t.tag === 3 ? n : null;
		}
		function ne(e) {
			if (e.tag === 13) {
				var t = e.memoizedState;
				if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
			}
			return null;
		}
		function re(e) {
			if (e.tag === 31) {
				var t = e.memoizedState;
				if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
			}
			return null;
		}
		function ie(e) {
			if (te(e) !== e) throw Error("Unable to find node on an unmounted component.");
		}
		function ae(e) {
			var t = e.alternate;
			if (!t) {
				if (t = te(e), t === null) throw Error("Unable to find node on an unmounted component.");
				return t === e ? e : null;
			}
			for (var n = e, r = t;;) {
				var i = n.return;
				if (i === null) break;
				var a = i.alternate;
				if (a === null) {
					if (r = i.return, r !== null) {
						n = r;
						continue;
					}
					break;
				}
				if (i.child === a.child) {
					for (a = i.child; a;) {
						if (a === n) return ie(i), e;
						if (a === r) return ie(i), t;
						a = a.sibling;
					}
					throw Error("Unable to find node on an unmounted component.");
				}
				if (n.return !== r.return) n = i, r = a;
				else {
					for (var o = !1, s = i.child; s;) {
						if (s === n) {
							o = !0, n = i, r = a;
							break;
						}
						if (s === r) {
							o = !0, r = i, n = a;
							break;
						}
						s = s.sibling;
					}
					if (!o) {
						for (s = a.child; s;) {
							if (s === n) {
								o = !0, n = a, r = i;
								break;
							}
							if (s === r) {
								o = !0, r = a, n = i;
								break;
							}
							s = s.sibling;
						}
						if (!o) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
					}
				}
				if (n.alternate !== r) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
			}
			if (n.tag !== 3) throw Error("Unable to find node on an unmounted component.");
			return n.stateNode.current === n ? e : t;
		}
		function oe(e) {
			var t = e.tag;
			if (t === 5 || t === 26 || t === 27 || t === 6) return e;
			for (e = e.child; e !== null;) {
				if (t = oe(e), t !== null) return t;
				e = e.sibling;
			}
			return null;
		}
		function se(e) {
			return typeof e != "object" || !e ? null : (e = Jf && e[Jf] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function ce(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === Yf ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case If: return "Fragment";
				case Rf: return "Profiler";
				case Lf: return "StrictMode";
				case Hf: return "Suspense";
				case Uf: return "SuspenseList";
				case Kf: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case Ff: return "Portal";
				case Bf: return e.displayName || "Context";
				case zf: return (e._context.displayName || "Context") + ".Consumer";
				case Vf:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case Wf: return t = e.displayName || null, t === null ? ce(e.type) || "Memo" : t;
				case Gf:
					t = e._payload, e = e._init;
					try {
						return ce(e(t));
					} catch {}
			}
			return null;
		}
		function le(e) {
			return typeof e.tag == "number" ? x(e) : typeof e.name == "string" ? e.name : null;
		}
		function x(e) {
			var t = e.type;
			switch (e.tag) {
				case 31: return "Activity";
				case 24: return "Cache";
				case 9: return (t._context.displayName || "Context") + ".Consumer";
				case 10: return t.displayName || "Context";
				case 18: return "DehydratedFragment";
				case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e === "" ? "ForwardRef" : "ForwardRef(" + e + ")");
				case 7: return "Fragment";
				case 26:
				case 27:
				case 5: return t;
				case 4: return "Portal";
				case 3: return "Root";
				case 6: return "Text";
				case 16: return ce(t);
				case 8: return t === Lf ? "StrictMode" : "Mode";
				case 22: return "Offscreen";
				case 12: return "Profiler";
				case 21: return "Scope";
				case 13: return "Suspense";
				case 19: return "SuspenseList";
				case 25: return "TracingMarker";
				case 1:
				case 0:
				case 14:
				case 15:
					if (typeof t == "function") return t.displayName || t.name || null;
					if (typeof t == "string") return t;
					break;
				case 29:
					if (t = e._debugInfo, t != null) {
						for (var n = t.length - 1; 0 <= n; n--) if (typeof t[n].name == "string") return t[n].name;
					}
					if (e.return !== null) return x(e.return);
			}
			return null;
		}
		function ue(e) {
			return { current: e };
		}
		function de(e, t) {
			0 > ep ? console.error("Unexpected pop.") : (t !== $f[ep] && console.error("Unexpected Fiber popped."), e.current = Qf[ep], Qf[ep] = null, $f[ep] = null, ep--);
		}
		function fe(e, t, n) {
			ep++, Qf[ep] = e.current, $f[ep] = n, e.current = t;
		}
		function pe(e) {
			return e === null && console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."), e;
		}
		function me(e, t) {
			fe(rp, t, e), fe(np, e, e), fe(tp, null, e);
			var n = t.nodeType;
			switch (n) {
				case 9:
				case 11:
					n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Wu(t) : WS;
					break;
				default: if (n = t.tagName, t = t.namespaceURI) t = Wu(t), t = Gu(t, n);
				else switch (n) {
					case "svg":
						t = GS;
						break;
					case "math":
						t = KS;
						break;
					default: t = WS;
				}
			}
			n = n.toLowerCase(), n = Yt(null, n), n = {
				context: t,
				ancestorInfo: n
			}, de(tp, e), fe(tp, n, e);
		}
		function he(e) {
			de(tp, e), de(np, e), de(rp, e);
		}
		function S() {
			return pe(tp.current);
		}
		function C(e) {
			e.memoizedState !== null && fe(ip, e, e);
			var t = pe(tp.current), n = e.type, r = Gu(t.context, n);
			n = Yt(t.ancestorInfo, n), r = {
				context: r,
				ancestorInfo: n
			}, t !== r && (fe(np, e, e), fe(tp, r, e));
		}
		function ge(e) {
			np.current === e && (de(tp, e), de(np, e)), ip.current === e && (de(ip, e), xC._currentValue = bC);
		}
		function _e() {}
		function ve() {
			if (ap === 0) {
				op = console.log, sp = console.info, cp = console.warn, lp = console.error, up = console.group, dp = console.groupCollapsed, fp = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: _e,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			ap++;
		}
		function ye() {
			if (ap--, ap === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: R({}, e, { value: op }),
					info: R({}, e, { value: sp }),
					warn: R({}, e, { value: cp }),
					error: R({}, e, { value: lp }),
					group: R({}, e, { value: up }),
					groupCollapsed: R({}, e, { value: dp }),
					groupEnd: R({}, e, { value: fp })
				});
			}
			0 > ap && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		function be(e) {
			var t = Error.prepareStackTrace;
			if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith("Error: react-stack-top-frame\n") && (e = e.slice(29)), t = e.indexOf("\n"), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf("\n", t)), t !== -1) e = e.slice(0, t);
			else return "";
			return e;
		}
		function w(e) {
			if (pp === void 0) try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				pp = t && t[1] || "", mp = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
			}
			return "\n" + pp + e + mp;
		}
		function xe(e, t) {
			if (!e || hp) return "";
			var n = gp.get(e);
			if (n !== void 0) return n;
			hp = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
			var r = null;
			r = z.H, z.H = null, ve();
			try {
				var i = { DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var n = function() {
								throw Error();
							};
							if (Object.defineProperty(n.prototype, "props", { set: function() {
								throw Error();
							} }), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(n, []);
								} catch (e) {
									var r = e;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (e) {
									r = e;
								}
								e.call(n.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (e) {
								r = e;
							}
							(n = e()) && typeof n.catch == "function" && n.catch(function() {});
						}
					} catch (e) {
						if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
					}
					return [null, null];
				} };
				i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
				var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
				a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
				var o = i.DetermineComponentFrameRoot(), s = o[0], c = o[1];
				if (s && c) {
					var l = s.split("\n"), u = c.split("\n");
					for (o = a = 0; a < l.length && !l[a].includes("DetermineComponentFrameRoot");) a++;
					for (; o < u.length && !u[o].includes("DetermineComponentFrameRoot");) o++;
					if (a === l.length || o === u.length) for (a = l.length - 1, o = u.length - 1; 1 <= a && 0 <= o && l[a] !== u[o];) o--;
					for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== u[o]) {
						if (a !== 1 || o !== 1) do
							if (a--, o--, 0 > o || l[a] !== u[o]) {
								var d = "\n" + l[a].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && gp.set(e, d), d;
							}
						while (1 <= a && 0 <= o);
						break;
					}
				}
			} finally {
				hp = !1, z.H = r, ye(), Error.prepareStackTrace = n;
			}
			return l = (l = e ? e.displayName || e.name : "") ? w(l) : "", typeof e == "function" && gp.set(e, l), l;
		}
		function Se(e, t) {
			switch (e.tag) {
				case 26:
				case 27:
				case 5: return w(e.type);
				case 16: return w("Lazy");
				case 13: return e.child !== t && t !== null ? w("Suspense Fallback") : w("Suspense");
				case 19: return w("SuspenseList");
				case 0:
				case 15: return xe(e.type, !1);
				case 11: return xe(e.type.render, !1);
				case 1: return xe(e.type, !0);
				case 31: return w("Activity");
				default: return "";
			}
		}
		function Ce(e) {
			try {
				var t = "", n = null;
				do {
					t += Se(e, n);
					var r = e._debugInfo;
					if (r) for (var i = r.length - 1; 0 <= i; i--) {
						var a = r[i];
						if (typeof a.name == "string") {
							var o = t;
							a: {
								var s = a.name, c = a.env, l = a.debugLocation;
								if (l != null) {
									var u = be(l), d = u.lastIndexOf("\n"), f = d === -1 ? u : u.slice(d + 1);
									if (f.indexOf(s) !== -1) {
										var p = "\n" + f;
										break a;
									}
								}
								p = w(s + (c ? " [" + c + "]" : ""));
							}
							t = o + p;
						}
					}
					n = e, e = e.return;
				} while (e);
				return t;
			} catch (e) {
				return "\nError generating stack: " + e.message + "\n" + e.stack;
			}
		}
		function we(e) {
			return (e = e ? e.displayName || e.name : "") ? w(e) : "";
		}
		function Te() {
			if (_p === null) return null;
			var e = _p._debugOwner;
			return e == null ? null : le(e);
		}
		function Ee() {
			if (_p === null) return "";
			var e = _p;
			try {
				var t = "";
				switch (e.tag === 6 && (e = e.return), e.tag) {
					case 26:
					case 27:
					case 5:
						t += w(e.type);
						break;
					case 13:
						t += w("Suspense");
						break;
					case 19:
						t += w("SuspenseList");
						break;
					case 31:
						t += w("Activity");
						break;
					case 30:
					case 0:
					case 15:
					case 1:
						e._debugOwner || t !== "" || (t += we(e.type));
						break;
					case 11: e._debugOwner || t !== "" || (t += we(e.type.render));
				}
				for (; e;) if (typeof e.tag == "number") {
					var n = e;
					e = n._debugOwner;
					var r = n._debugStack;
					if (e && r) {
						var i = be(r);
						i !== "" && (t += "\n" + i);
					}
				} else if (e.debugStack != null) {
					var a = e.debugStack;
					(e = e.owner) && a && (t += "\n" + be(a));
				} else break;
				var o = t;
			} catch (e) {
				o = "\nError generating stack: " + e.message + "\n" + e.stack;
			}
			return o;
		}
		function T(e, t, n, r, i, a, o) {
			var s = _p;
			De(e);
			try {
				return e !== null && e._debugTask ? e._debugTask.run(t.bind(null, n, r, i, a, o)) : t(n, r, i, a, o);
			} finally {
				De(s);
			}
			throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.");
		}
		function De(e) {
			z.getCurrentStack = e === null ? null : Ee, vp = !1, _p = e;
		}
		function Oe(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function ke(e) {
			try {
				return Ae(e), !1;
			} catch {
				return !0;
			}
		}
		function Ae(e) {
			return "" + e;
		}
		function je(e, t) {
			if (ke(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, Oe(e)), Ae(e);
		}
		function Me(e, t) {
			if (ke(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, Oe(e)), Ae(e);
		}
		function Ne(e) {
			if (ke(e)) return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.", Oe(e)), Ae(e);
		}
		function Pe(e) {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
			var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (t.isDisabled) return !0;
			if (!t.supportsFiber) return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"), !0;
			try {
				Np = t.inject(e), Pp = t;
			} catch (e) {
				console.error("React instrumentation encountered an error: %o.", e);
			}
			return !!t.checkDCE;
		}
		function Fe(e) {
			if (typeof jp == "function" && Mp(e), Pp && typeof Pp.setStrictMode == "function") try {
				Pp.setStrictMode(Np, e);
			} catch (e) {
				Fp || (Fp = !0, console.error("React instrumentation encountered an error: %o", e));
			}
		}
		function Ie(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (Rp(e) / zp | 0) | 0;
		}
		function Le(e) {
			var t = e & 42;
			if (t !== 0) return t;
			switch (e & -e) {
				case 1: return 1;
				case 2: return 2;
				case 4: return 4;
				case 8: return 8;
				case 16: return 16;
				case 32: return 32;
				case 64: return 64;
				case 128: return 128;
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072: return e & 261888;
				case 262144:
				case 524288:
				case 1048576:
				case 2097152: return e & 3932160;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432: return e & 62914560;
				case 67108864: return 67108864;
				case 134217728: return 134217728;
				case 268435456: return 268435456;
				case 536870912: return 536870912;
				case 1073741824: return 0;
				default: return console.error("Should have found matching lanes. This is a bug in React."), e;
			}
		}
		function Re(e, t, n) {
			var r = e.pendingLanes;
			if (r === 0) return 0;
			var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
			e = e.warmLanes;
			var s = r & 134217727;
			return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Le(n))) : i = Le(o) : i = Le(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Le(n))) : i = Le(o)) : i = Le(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
		}
		function ze(e, t) {
			return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
		}
		function Be(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 4:
				case 8:
				case 64: return t + 250;
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
				case 2097152: return t + 5e3;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432: return -1;
				case 67108864:
				case 134217728:
				case 268435456:
				case 536870912:
				case 1073741824: return -1;
				default: return console.error("Should have found matching lanes. This is a bug in React."), -1;
			}
		}
		function Ve() {
			var e = Hp;
			return Hp <<= 1, !(Hp & 62914560) && (Hp = 4194304), e;
		}
		function He(e) {
			for (var t = [], n = 0; 31 > n; n++) t.push(e);
			return t;
		}
		function Ue(e, t) {
			e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
		}
		function We(e, t, n, r, i, a) {
			var o = e.pendingLanes;
			e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
			var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
			for (n = o & ~n; 0 < n;) {
				var u = 31 - Lp(n), d = 1 << u;
				s[u] = 0, c[u] = -1;
				var f = l[u];
				if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
					var p = f[u];
					p !== null && (p.lane &= -536870913);
				}
				n &= ~d;
			}
			r !== 0 && Ge(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
		}
		function Ge(e, t, n) {
			e.pendingLanes |= t, e.suspendedLanes &= ~t;
			var r = 31 - Lp(t);
			e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
		}
		function Ke(e, t) {
			var n = e.entangledLanes |= t;
			for (e = e.entanglements; n;) {
				var r = 31 - Lp(n), i = 1 << r;
				i & t | e[r] & t && (e[r] |= t), n &= ~i;
			}
		}
		function qe(e, t) {
			var n = t & -t;
			return n = n & 42 ? 1 : Je(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
		}
		function Je(e) {
			switch (e) {
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
				default: e = 0;
			}
			return e;
		}
		function Ye(e, t, n) {
			if (Ip) for (e = e.pendingUpdatersLaneMap; 0 < n;) {
				var r = 31 - Lp(n), i = 1 << r;
				e[r].add(t), n &= ~i;
			}
		}
		function Xe(e, t) {
			if (Ip) for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; 0 < t;) {
				var i = 31 - Lp(t);
				e = 1 << i, i = n[i], 0 < i.size && (i.forEach(function(e) {
					var t = e.alternate;
					t !== null && r.has(t) || r.add(e);
				}), i.clear()), t &= ~e;
			}
		}
		function Ze(e) {
			return e &= -e, Up !== 0 && Up < e ? Wp !== 0 && Wp < e ? e & 134217727 ? Gp : Kp : Wp : Up;
		}
		function Qe() {
			var e = B.p;
			return e === 0 ? (e = window.event, e === void 0 ? Gp : hf(e.type)) : e;
		}
		function $e(e, t) {
			var n = B.p;
			try {
				return B.p = e, t();
			} finally {
				B.p = n;
			}
		}
		function et(e) {
			delete e[Jp], delete e[Yp], delete e[Zp], delete e[Qp], delete e[$p];
		}
		function tt(e) {
			var t = e[Jp];
			if (t) return t;
			for (var n = e.parentNode; n;) {
				if (t = n[Xp] || n[Jp]) {
					if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Td(e); e !== null;) {
						if (n = e[Jp]) return n;
						e = Td(e);
					}
					return t;
				}
				e = n, n = e.parentNode;
			}
			return null;
		}
		function nt(e) {
			if (e = e[Jp] || e[Xp]) {
				var t = e.tag;
				if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
			}
			return null;
		}
		function rt(e) {
			var t = e.tag;
			if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
			throw Error("getNodeFromInstance: Invalid argument.");
		}
		function it(e) {
			var t = e[em];
			return t ||= e[em] = {
				hoistableStyles: /* @__PURE__ */ new Map(),
				hoistableScripts: /* @__PURE__ */ new Map()
			}, t;
		}
		function at(e) {
			e[tm] = !0;
		}
		function ot(e, t) {
			st(e, t), st(e + "Capture", t);
		}
		function st(e, t) {
			rm[e] && console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), rm[e] = t;
			var n = e.toLowerCase();
			for (im[n] = e, e === "onDoubleClick" && (im.ondblclick = e), e = 0; e < t.length; e++) nm.add(t[e]);
		}
		function ct(e, t) {
			am[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
		}
		function lt(e) {
			return yp.call(cm, e) ? !0 : yp.call(sm, e) ? !1 : om.test(e) ? cm[e] = !0 : (sm[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
		}
		function ut(e, t, n) {
			if (lt(t)) {
				if (!e.hasAttribute(t)) {
					switch (typeof n) {
						case "symbol":
						case "object": return n;
						case "function": return n;
						case "boolean": if (!1 === n) return n;
					}
					return n === void 0 ? void 0 : null;
				}
				return e = e.getAttribute(t), e === "" && !0 === n ? !0 : (je(n, t), e === "" + n ? n : e);
			}
		}
		function dt(e, t, n) {
			if (lt(t)) if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				je(n, t), e.setAttribute(t, "" + n);
			}
		}
		function ft(e, t, n) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
					case "boolean":
						e.removeAttribute(t);
						return;
				}
				je(n, t), e.setAttribute(t, "" + n);
			}
		}
		function pt(e, t, n, r) {
			if (r === null) e.removeAttribute(n);
			else {
				switch (typeof r) {
					case "undefined":
					case "function":
					case "symbol":
					case "boolean":
						e.removeAttribute(n);
						return;
				}
				je(r, n), e.setAttributeNS(t, n, "" + r);
			}
		}
		function mt(e) {
			switch (typeof e) {
				case "bigint":
				case "boolean":
				case "number":
				case "string":
				case "undefined": return e;
				case "object": return Ne(e), e;
				default: return "";
			}
		}
		function ht(e) {
			var t = e.type;
			return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
		}
		function gt(e, t, n) {
			var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
			if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
				var i = r.get, a = r.set;
				return Object.defineProperty(e, t, {
					configurable: !0,
					get: function() {
						return i.call(this);
					},
					set: function(e) {
						Ne(e), n = "" + e, a.call(this, e);
					}
				}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
					getValue: function() {
						return n;
					},
					setValue: function(e) {
						Ne(e), n = "" + e;
					},
					stopTracking: function() {
						e._valueTracker = null, delete e[t];
					}
				};
			}
		}
		function _t(e) {
			if (!e._valueTracker) {
				var t = ht(e) ? "checked" : "value";
				e._valueTracker = gt(e, t, "" + e[t]);
			}
		}
		function vt(e) {
			if (!e) return !1;
			var t = e._valueTracker;
			if (!t) return !0;
			var n = t.getValue(), r = "";
			return e && (r = ht(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
		}
		function yt(e) {
			if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
			try {
				return e.activeElement || e.body;
			} catch {
				return e.body;
			}
		}
		function bt(e) {
			return e.replace(lm, function(e) {
				return "\\" + e.charCodeAt(0).toString(16) + " ";
			});
		}
		function xt(e, t) {
			t.checked === void 0 || t.defaultChecked === void 0 || dm || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", Te() || "A component", t.type), dm = !0), t.value === void 0 || t.defaultValue === void 0 || um || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", Te() || "A component", t.type), um = !0);
		}
		function St(e, t, n, r, i, a, o, s) {
			e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? (je(o, "type"), e.type = o) : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + mt(t)) : e.value !== "" + mt(t) && (e.value = "" + mt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : wt(e, o, mt(n)) : wt(e, o, mt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? (je(s, "name"), e.name = "" + mt(s)) : e.removeAttribute("name");
		}
		function Ct(e, t, n, r, i, a, o, s) {
			if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (je(a, "type"), e.type = a), t != null || n != null) {
				if (!(a !== "submit" && a !== "reset" || t != null)) {
					_t(e);
					return;
				}
				n = n == null ? "" : "" + mt(n), t = t == null ? n : "" + mt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
			}
			r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (je(o, "name"), e.name = o), _t(e);
		}
		function wt(e, t, n) {
			t === "number" && yt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
		}
		function Tt(e, t) {
			t.value ?? (typeof t.children == "object" && t.children !== null ? jf.Children.forEach(t.children, function(e) {
				e == null || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || pm || (pm = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."));
			}) : t.dangerouslySetInnerHTML == null || mm || (mm = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), t.selected == null || fm || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), fm = !0);
		}
		function Et() {
			var e = Te();
			return e ? "\n\nCheck the render method of `" + e + "`." : "";
		}
		function Dt(e, t, n, r) {
			if (e = e.options, t) {
				t = {};
				for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
				for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
			} else {
				for (n = "" + mt(n), t = null, i = 0; i < e.length; i++) {
					if (e[i].value === n) {
						e[i].selected = !0, r && (e[i].defaultSelected = !0);
						return;
					}
					t !== null || e[i].disabled || (t = e[i]);
				}
				t !== null && (t.selected = !0);
			}
		}
		function Ot(e, t) {
			for (e = 0; e < gm.length; e++) {
				var n = gm[e];
				if (t[n] != null) {
					var r = Xf(t[n]);
					t.multiple && !r ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Et()) : !t.multiple && r && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Et());
				}
			}
			t.value === void 0 || t.defaultValue === void 0 || hm || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), hm = !0);
		}
		function kt(e, t) {
			t.value === void 0 || t.defaultValue === void 0 || _m || (console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components", Te() || "A component"), _m = !0), t.children != null && t.value == null && console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
		}
		function At(e, t, n) {
			if (t != null && (t = "" + mt(t), t !== e.value && (e.value = t), n == null)) {
				e.defaultValue !== t && (e.defaultValue = t);
				return;
			}
			e.defaultValue = n == null ? "" : "" + mt(n);
		}
		function jt(e, t, n, r) {
			if (t == null) {
				if (r != null) {
					if (n != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
					if (Xf(r)) {
						if (1 < r.length) throw Error("<textarea> can only have at most one child.");
						r = r[0];
					}
					n = r;
				}
				n ??= "", t = n;
			}
			n = mt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), _t(e);
		}
		function Mt(e, t) {
			return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Mt(e.children[0], t) : e;
		}
		function Nt(e) {
			return "  " + "  ".repeat(e);
		}
		function Pt(e) {
			return "+ " + "  ".repeat(e);
		}
		function Ft(e) {
			return "- " + "  ".repeat(e);
		}
		function It(e) {
			switch (e.tag) {
				case 26:
				case 27:
				case 5: return e.type;
				case 16: return "Lazy";
				case 31: return "Activity";
				case 13: return "Suspense";
				case 19: return "SuspenseList";
				case 0:
				case 15: return e = e.type, e.displayName || e.name || null;
				case 11: return e = e.type.render, e.displayName || e.name || null;
				case 1: return e = e.type, e.displayName || e.name || null;
				default: return null;
			}
		}
		function Lt(e, t) {
			return vm.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? "{\"...\"}" : "{" + e.slice(0, t - 7) + "...\"}" : "{" + e + "}") : e.length > t ? 5 > t ? "{\"...\"}" : e.slice(0, t - 3) + "..." : e;
		}
		function Rt(e, t, n) {
			var r = 120 - 2 * n;
			if (t === null) return Pt(n) + Lt(e, r) + "\n";
			if (typeof t == "string") {
				for (var i = 0; i < t.length && i < e.length && t.charCodeAt(i) === e.charCodeAt(i); i++);
				return i > r - 8 && 10 < i && (e = "..." + e.slice(i - 8), t = "..." + t.slice(i - 8)), Pt(n) + Lt(e, r) + "\n" + Ft(n) + Lt(t, r) + "\n";
			}
			return Nt(n) + Lt(e, r) + "\n";
		}
		function zt(e) {
			return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(e, t) {
				return t;
			});
		}
		function Bt(e, t) {
			switch (typeof e) {
				case "string": return e = JSON.stringify(e), e.length > t ? 5 > t ? "\"...\"" : e.slice(0, t - 4) + "...\"" : e;
				case "object":
					if (e === null) return "null";
					if (Xf(e)) return "[...]";
					if (e.$$typeof === Pf) return (t = ce(e.type)) ? "<" + t + ">" : "<...>";
					var n = zt(e);
					if (n === "Object") {
						for (var r in n = "", t -= 2, e) if (e.hasOwnProperty(r)) {
							var i = JSON.stringify(r);
							if (i !== "\"" + r + "\"" && (r = i), t -= r.length - 2, i = Bt(e[r], 15 > t ? t : 15), t -= i.length, 0 > t) {
								n += n === "" ? "..." : ", ...";
								break;
							}
							n += (n === "" ? "" : ",") + r + ":" + i;
						}
						return "{" + n + "}";
					}
					return n;
				case "function": return (t = e.displayName || e.name) ? "function " + t : "function";
				default: return String(e);
			}
		}
		function Vt(e, t) {
			return typeof e != "string" || vm.test(e) ? "{" + Bt(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? "\"...\"" : "\"" + e.slice(0, t - 5) + "...\"" : "\"" + e + "\"";
		}
		function Ht(e, t, n) {
			var r = 120 - n.length - e.length, i = [], a;
			for (a in t) if (t.hasOwnProperty(a) && a !== "children") {
				var o = Vt(t[a], 120 - n.length - a.length - 1);
				r -= a.length + o.length + 2, i.push(a + "=" + o);
			}
			return i.length === 0 ? n + "<" + e + ">\n" : 0 < r ? n + "<" + e + " " + i.join(" ") + ">\n" : n + "<" + e + "\n" + n + "  " + i.join("\n" + n + "  ") + "\n" + n + ">\n";
		}
		function Ut(e, t, n) {
			var r = "", i = R({}, t), a;
			for (a in e) if (e.hasOwnProperty(a)) {
				delete i[a];
				var o = 120 - 2 * n - a.length - 2, s = Bt(e[a], o);
				t.hasOwnProperty(a) ? (o = Bt(t[a], o), r += Pt(n) + a + ": " + s + "\n", r += Ft(n) + a + ": " + o + "\n") : r += Pt(n) + a + ": " + s + "\n";
			}
			for (var c in i) i.hasOwnProperty(c) && (e = Bt(i[c], 120 - 2 * n - c.length - 2), r += Ft(n) + c + ": " + e + "\n");
			return r;
		}
		function Wt(e, t, n, r) {
			var i = "", a = /* @__PURE__ */ new Map();
			for (l in n) n.hasOwnProperty(l) && a.set(l.toLowerCase(), l);
			if (a.size === 1 && a.has("children")) i += Ht(e, t, Nt(r));
			else {
				for (var o in t) if (t.hasOwnProperty(o) && o !== "children") {
					var s = 120 - 2 * (r + 1) - o.length - 1, c = a.get(o.toLowerCase());
					if (c !== void 0) {
						a.delete(o.toLowerCase());
						var l = t[o];
						c = n[c];
						var u = Vt(l, s);
						s = Vt(c, s), typeof l == "object" && l && typeof c == "object" && c && zt(l) === "Object" && zt(c) === "Object" && (2 < Object.keys(l).length || 2 < Object.keys(c).length || -1 < u.indexOf("...") || -1 < s.indexOf("...")) ? i += Nt(r + 1) + o + "={{\n" + Ut(l, c, r + 2) + Nt(r + 1) + "}}\n" : (i += Pt(r + 1) + o + "=" + u + "\n", i += Ft(r + 1) + o + "=" + s + "\n");
					} else i += Nt(r + 1) + o + "=" + Vt(t[o], s) + "\n";
				}
				a.forEach(function(e) {
					if (e !== "children") {
						var t = 120 - 2 * (r + 1) - e.length - 1;
						i += Ft(r + 1) + e + "=" + Vt(n[e], t) + "\n";
					}
				}), i = i === "" ? Nt(r) + "<" + e + ">\n" : Nt(r) + "<" + e + "\n" + i + Nt(r) + ">\n";
			}
			return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (a = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (a = "" + t), i += Rt(a, "" + e, r + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (i = e == null ? i + Rt("" + t, null, r + 1) : i + Rt("" + t, void 0, r + 1)), i;
		}
		function Gt(e, t) {
			var n = It(e);
			if (n === null) {
				for (n = "", e = e.child; e;) n += Gt(e, t), e = e.sibling;
				return n;
			}
			return Nt(t) + "<" + n + ">\n";
		}
		function Kt(e, t) {
			var n = Mt(e, t);
			if (n !== e && (e.children.length !== 1 || e.children[0] !== n)) return Nt(t) + "...\n" + Kt(n, t + 1);
			n = "";
			var r = e.fiber._debugInfo;
			if (r) for (var i = 0; i < r.length; i++) {
				var a = r[i].name;
				typeof a == "string" && (n += Nt(t) + "<" + a + ">\n", t++);
			}
			if (r = "", i = e.fiber.pendingProps, e.fiber.tag === 6) r = Rt(i, e.serverProps, t), t++;
			else if (a = It(e.fiber), a !== null) if (e.serverProps === void 0) {
				r = t;
				var o = 120 - 2 * r - a.length - 2, s = "";
				for (l in i) if (i.hasOwnProperty(l) && l !== "children") {
					var c = Vt(i[l], 15);
					if (o -= l.length + c.length + 2, 0 > o) {
						s += " ...";
						break;
					}
					s += " " + l + "=" + c;
				}
				r = Nt(r) + "<" + a + s + ">\n", t++;
			} else e.serverProps === null ? (r = Ht(a, i, Pt(t)), t++) : typeof e.serverProps == "string" ? console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React.") : (r = Wt(a, i, e.serverProps, t), t++);
			var l = "";
			for (i = e.fiber.child, a = 0; i && a < e.children.length;) o = e.children[a], o.fiber === i ? (l += Kt(o, t), a++) : l += Gt(i, t), i = i.sibling;
			for (i && 0 < e.children.length && (l += Nt(t) + "...\n"), i = e.serverTail, e.serverProps === null && t--, e = 0; e < i.length; e++) a = i[e], l = typeof a == "string" ? l + (Ft(t) + Lt(a, 120 - 2 * t) + "\n") : l + Ht(a.type, a.props, Ft(t));
			return n + r + l;
		}
		function qt(e) {
			try {
				return "\n\n" + Kt(e, 0);
			} catch {
				return "";
			}
		}
		function Jt(e, t, n) {
			for (var r = t, i = null, a = 0; r;) r === e && (a = 0), i = {
				fiber: r,
				children: i === null ? [] : [i],
				serverProps: r === t ? n : r === e ? null : void 0,
				serverTail: [],
				distanceFromLeaf: a
			}, a++, r = r.return;
			return i === null ? "" : qt(i).replaceAll(/^[+-]/gm, ">");
		}
		function Yt(e, t) {
			var n = R({}, e || Cm), r = { tag: t };
			return bm.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), xm.indexOf(t) !== -1 && (n.pTagInButtonScope = null), ym.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), t === "#document" || t === "html" ? n.containerTagInScope = null : n.containerTagInScope ||= r, e !== null || t !== "#document" && t !== "html" && t !== "body" ? !0 === n.implicitRootScope && (n.implicitRootScope = !1) : n.implicitRootScope = !0, n;
		}
		function Xt(e, t, n) {
			switch (t) {
				case "select": return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
				case "optgroup": return e === "option" || e === "#text";
				case "option": return e === "#text";
				case "tr": return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
				case "tbody":
				case "thead":
				case "tfoot": return e === "tr" || e === "style" || e === "script" || e === "template";
				case "colgroup": return e === "col" || e === "template";
				case "table": return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
				case "head": return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
				case "html":
					if (n) break;
					return e === "head" || e === "body" || e === "frameset";
				case "frameset": return e === "frame";
				case "#document": if (!n) return e === "html";
			}
			switch (e) {
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6": return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
				case "rp":
				case "rt": return Sm.indexOf(t) === -1;
				case "caption":
				case "col":
				case "colgroup":
				case "frameset":
				case "frame":
				case "tbody":
				case "td":
				case "tfoot":
				case "th":
				case "thead":
				case "tr": return t == null;
				case "head": return n || t === null;
				case "html": return n && t === "#document" || t === null;
				case "body": return n && (t === "#document" || t === "html") || t === null;
			}
			return !0;
		}
		function Zt(e, t) {
			switch (e) {
				case "address":
				case "article":
				case "aside":
				case "blockquote":
				case "center":
				case "details":
				case "dialog":
				case "dir":
				case "div":
				case "dl":
				case "fieldset":
				case "figcaption":
				case "figure":
				case "footer":
				case "header":
				case "hgroup":
				case "main":
				case "menu":
				case "nav":
				case "ol":
				case "p":
				case "section":
				case "summary":
				case "ul":
				case "pre":
				case "listing":
				case "table":
				case "hr":
				case "xmp":
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6": return t.pTagInButtonScope;
				case "form": return t.formTag || t.pTagInButtonScope;
				case "li": return t.listItemTagAutoclosing;
				case "dd":
				case "dt": return t.dlItemTagAutoclosing;
				case "button": return t.buttonTagInScope;
				case "a": return t.aTagInScope;
				case "nobr": return t.nobrTagInScope;
			}
			return null;
		}
		function Qt(e, t) {
			for (; e;) {
				switch (e.tag) {
					case 5:
					case 26:
					case 27: if (e.type === t) return e;
				}
				e = e.return;
			}
			return null;
		}
		function $t(e, t) {
			t ||= Cm;
			var n = t.current;
			if (t = (n = Xt(e, n && n.tag, t.implicitRootScope) ? null : n) ? null : Zt(e, t), t = n || t, !t) return !0;
			var r = t.tag;
			if (t = String(!!n) + "|" + e + "|" + r, wm[t]) return !1;
			wm[t] = !0;
			var i = (t = _p) ? Qt(t.return, r) : null, a = t !== null && i !== null ? Jt(i, t, null) : "", o = "<" + e + ">";
			return n ? (n = "", r === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error("In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s", o, r, n, a)) : console.error("In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s", o, r, a), t && (e = t.return, i === null || e === null || i === e && e._debugOwner === t._debugOwner || T(i, function() {
				console.error("<%s> cannot contain a nested %s.\nSee this log for the ancestor stack trace.", r, o);
			})), !1;
		}
		function en(e, t, n) {
			if (n || Xt("#text", t, !1)) return !0;
			if (n = "#text|" + t, wm[n]) return !1;
			wm[n] = !0;
			var r = (n = _p) ? Qt(n, t) : null;
			return n = n !== null && r !== null ? Jt(r, n, n.tag === 6 ? null : { children: null }) : "", /\S/.test(e) ? console.error("In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.%s", t, n) : console.error("In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.%s", t, n), !1;
		}
		function tn(e, t) {
			if (t) {
				var n = e.firstChild;
				if (n && n === e.lastChild && n.nodeType === 3) {
					n.nodeValue = t;
					return;
				}
			}
			e.textContent = t;
		}
		function nn(e) {
			return e.replace(Am, function(e, t) {
				return t.toUpperCase();
			});
		}
		function rn(e, t, n) {
			var r = t.indexOf("--") === 0;
			r || (-1 < t.indexOf("-") ? Mm.hasOwnProperty(t) && Mm[t] || (Mm[t] = !0, console.error("Unsupported style property %s. Did you mean %s?", t, nn(t.replace(km, "ms-")))) : Om.test(t) ? Mm.hasOwnProperty(t) && Mm[t] || (Mm[t] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1))) : !jm.test(n) || Nm.hasOwnProperty(n) && Nm[n] || (Nm[n] = !0, console.error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", t, n.replace(jm, ""))), typeof n == "number" && (isNaN(n) ? Pm || (Pm = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", t)) : isFinite(n) || Fm || (Fm = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", t)))), n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Im.has(t) ? t === "float" ? e.cssFloat = n : (Me(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
		}
		function an(e, t, n) {
			if (t != null && typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			if (t && Object.freeze(t), e = e.style, n != null) {
				if (t) {
					var r = {};
					if (n) {
						for (var i in n) if (n.hasOwnProperty(i) && !t.hasOwnProperty(i)) for (var a = Tm[i] || [i], o = 0; o < a.length; o++) r[a[o]] = i;
					}
					for (var s in t) if (t.hasOwnProperty(s) && (!n || n[s] !== t[s])) for (i = Tm[s] || [s], a = 0; a < i.length; a++) r[i[a]] = s;
					for (var c in s = {}, t) for (i = Tm[c] || [c], a = 0; a < i.length; a++) s[i[a]] = c;
					for (var l in c = {}, r) if (i = r[l], (a = s[l]) && i !== a && (o = i + "," + a, !c[o])) {
						c[o] = !0, o = console;
						var u = t[i];
						o.error.call(o, "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", u == null || typeof u == "boolean" || u === "" ? "Removing" : "Updating", i, a);
					}
				}
				for (var d in n) !n.hasOwnProperty(d) || t != null && t.hasOwnProperty(d) || (d.indexOf("--") === 0 ? e.setProperty(d, "") : d === "float" ? e.cssFloat = "" : e[d] = "");
				for (var f in t) l = t[f], t.hasOwnProperty(f) && n[f] !== l && rn(e, f, l);
			} else for (r in t) t.hasOwnProperty(r) && rn(e, r, t[r]);
		}
		function on(e) {
			if (e.indexOf("-") === -1) return !1;
			switch (e) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": return !1;
				default: return !0;
			}
		}
		function sn(e) {
			return zm.get(e) || e;
		}
		function cn(e, t) {
			if (yp.call(Hm, t) && Hm[t]) return !0;
			if (Wm.test(t)) {
				if (e = "aria-" + t.slice(4).toLowerCase(), e = Vm.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Hm[t] = !0;
				if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), Hm[t] = !0;
			}
			if (Um.test(t)) {
				if (e = t.toLowerCase(), e = Vm.hasOwnProperty(e) ? e : null, e == null) return Hm[t] = !0, !1;
				t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), Hm[t] = !0);
			}
			return !0;
		}
		function ln(e, t) {
			var n = [], r;
			for (r in t) cn(e, r) || n.push(r);
			t = n.map(function(e) {
				return "`" + e + "`";
			}).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
		}
		function un(e, t, n, r) {
			if (yp.call(Km, t) && Km[t]) return !0;
			var i = t.toLowerCase();
			if (i === "onfocusin" || i === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Km[t] = !0;
			if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return !0;
			if (r != null) {
				if (e = r.possibleRegistrationNames, r.registrationNameDependencies.hasOwnProperty(t)) return !0;
				if (r = e.hasOwnProperty(i) ? e[i] : null, r != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, r), Km[t] = !0;
				if (qm.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), Km[t] = !0;
			} else if (qm.test(t)) return Jm.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Km[t] = !0;
			if (Ym.test(t) || Xm.test(t)) return !0;
			if (i === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Km[t] = !0;
			if (i === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Km[t] = !0;
			if (i === "is" && n != null && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Km[t] = !0;
			if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Km[t] = !0;
			if (Bm.hasOwnProperty(i)) {
				if (i = Bm[i], i !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, i), Km[t] = !0;
			} else if (t !== i) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), Km[t] = !0;
			switch (t) {
				case "dangerouslySetInnerHTML":
				case "children":
				case "style":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": return !0;
				case "innerText":
				case "textContent": return !0;
			}
			switch (typeof n) {
				case "boolean": switch (t) {
					case "autoFocus":
					case "checked":
					case "multiple":
					case "muted":
					case "selected":
					case "contentEditable":
					case "spellCheck":
					case "draggable":
					case "value":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
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
					case "capture":
					case "download":
					case "inert": return !0;
					default: return i = t.toLowerCase().slice(0, 5), i === "data-" || i === "aria-" ? !0 : (n ? console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), Km[t] = !0);
				}
				case "function":
				case "symbol": return Km[t] = !0, !1;
				case "string": if (n === "false" || n === "true") {
					switch (t) {
						case "checked":
						case "selected":
						case "multiple":
						case "muted":
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
						case "inert": break;
						default: return !0;
					}
					console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), Km[t] = !0;
				}
			}
			return !0;
		}
		function dn(e, t, n) {
			var r = [], i;
			for (i in t) un(e, i, t[i], n) || r.push(i);
			t = r.map(function(e) {
				return "`" + e + "`";
			}).join(", "), r.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < r.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
		}
		function fn(e) {
			return Zm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
		}
		function pn() {}
		function mn(e) {
			return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
		}
		function hn(e) {
			var t = nt(e);
			if (t && (e = t.stateNode)) {
				var n = e[Yp] || null;
				a: switch (e = t.stateNode, t.type) {
					case "input":
						if (St(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
							for (n = e; n.parentNode;) n = n.parentNode;
							for (je(t, "name"), n = n.querySelectorAll("input[name=\"" + bt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
								var r = n[t];
								if (r !== e && r.form === e.form) {
									var i = r[Yp] || null;
									if (!i) throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
									St(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
								}
							}
							for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && vt(r);
						}
						break a;
					case "textarea":
						At(e, n.value, n.defaultValue);
						break a;
					case "select": t = n.value, t != null && Dt(e, !!n.multiple, t, !1);
				}
			}
		}
		function gn(e, t, n) {
			if (th) return e(t, n);
			th = !0;
			try {
				return e(t);
			} finally {
				if (th = !1, ($m !== null || eh !== null) && (pl(), $m && (t = $m, e = eh, eh = $m = null, hn(t), e))) for (t = 0; t < e.length; t++) hn(e[t]);
			}
		}
		function _n(e, t) {
			var n = e.stateNode;
			if (n === null) return null;
			var r = n[Yp] || null;
			if (r === null) return null;
			n = r[t];
			a: switch (t) {
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
					(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
					break a;
				default: e = !1;
			}
			if (e) return null;
			if (n && typeof n != "function") throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type.");
			return n;
		}
		function vn() {
			if (sh) return sh;
			var e, t = oh, n = t.length, r, i = "value" in ah ? ah.value : ah.textContent, a = i.length;
			for (e = 0; e < n && t[e] === i[e]; e++);
			var o = n - e;
			for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
			return sh = i.slice(e, 1 < r ? 1 - r : void 0);
		}
		function yn(e) {
			var t = e.keyCode;
			return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
		}
		function bn() {
			return !0;
		}
		function xn() {
			return !1;
		}
		function Sn(e) {
			function t(t, n, r, i, a) {
				for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
				return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? bn : xn, this.isPropagationStopped = xn, this;
			}
			return R(t.prototype, {
				preventDefault: function() {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = bn);
				},
				stopPropagation: function() {
					var e = this.nativeEvent;
					e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = bn);
				},
				persist: function() {},
				isPersistent: bn
			}), t;
		}
		function Cn(e) {
			var t = this.nativeEvent;
			return t.getModifierState ? t.getModifierState(e) : (e = Th[e]) ? !!t[e] : !1;
		}
		function wn() {
			return Cn;
		}
		function Tn(e, t) {
			switch (e) {
				case "keyup": return Mh.indexOf(t.keyCode) !== -1;
				case "keydown": return t.keyCode !== Nh;
				case "keypress":
				case "mousedown":
				case "focusout": return !0;
				default: return !1;
			}
		}
		function En(e) {
			return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
		}
		function Dn(e, t) {
			switch (e) {
				case "compositionend": return En(t);
				case "keypress": return t.which === Rh ? (Bh = !0, zh) : null;
				case "textInput": return e = t.data, e === zh && Bh ? null : e;
				default: return null;
			}
		}
		function On(e, t) {
			if (Vh) return e === "compositionend" || !Ph && Tn(e, t) ? (e = vn(), sh = oh = ah = null, Vh = !1, e) : null;
			switch (e) {
				case "paste": return null;
				case "keypress":
					if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
						if (t.char && 1 < t.char.length) return t.char;
						if (t.which) return String.fromCharCode(t.which);
					}
					return null;
				case "compositionend": return Lh && t.locale !== "ko" ? null : t.data;
				default: return null;
			}
		}
		function kn(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t === "input" ? !!Hh[e.type] : t === "textarea";
		}
		function An(e) {
			if (!nh) return !1;
			e = "on" + e;
			var t = e in document;
			return t ||= (t = document.createElement("div"), t.setAttribute(e, "return;"), typeof t[e] == "function"), t;
		}
		function jn(e, t, n, r) {
			$m ? eh ? eh.push(r) : eh = [r] : $m = r, t = _u(t, "onChange"), 0 < t.length && (n = new lh("onChange", "change", null, n, r), e.push({
				event: n,
				listeners: t
			}));
		}
		function Mn(e) {
			du(e, 0);
		}
		function Nn(e) {
			if (vt(rt(e))) return e;
		}
		function Pn(e, t) {
			if (e === "change") return t;
		}
		function Fn() {
			Uh && (Uh.detachEvent("onpropertychange", In), Wh = Uh = null);
		}
		function In(e) {
			if (e.propertyName === "value" && Nn(Wh)) {
				var t = [];
				jn(t, Wh, e, mn(e)), gn(Mn, t);
			}
		}
		function Ln(e, t, n) {
			e === "focusin" ? (Fn(), Uh = t, Wh = n, Uh.attachEvent("onpropertychange", In)) : e === "focusout" && Fn();
		}
		function Rn(e) {
			if (e === "selectionchange" || e === "keyup" || e === "keydown") return Nn(Wh);
		}
		function zn(e, t) {
			if (e === "click") return Nn(t);
		}
		function Bn(e, t) {
			if (e === "input" || e === "change") return Nn(t);
		}
		function Vn(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function Hn(e, t) {
			if (Kh(e, t)) return !0;
			if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
			var n = Object.keys(e), r = Object.keys(t);
			if (n.length !== r.length) return !1;
			for (r = 0; r < n.length; r++) {
				var i = n[r];
				if (!yp.call(t, i) || !Kh(e[i], t[i])) return !1;
			}
			return !0;
		}
		function Un(e) {
			for (; e && e.firstChild;) e = e.firstChild;
			return e;
		}
		function Wn(e, t) {
			var n = Un(e);
			e = 0;
			for (var r; n;) {
				if (n.nodeType === 3) {
					if (r = e + n.textContent.length, e <= t && r >= t) return {
						node: n,
						offset: t - e
					};
					e = r;
				}
				a: {
					for (; n;) {
						if (n.nextSibling) {
							n = n.nextSibling;
							break a;
						}
						n = n.parentNode;
					}
					n = void 0;
				}
				n = Un(n);
			}
		}
		function Gn(e, t) {
			return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gn(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
		}
		function Kn(e) {
			e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
			for (var t = yt(e.document); t instanceof e.HTMLIFrameElement;) {
				try {
					var n = typeof t.contentWindow.location.href == "string";
				} catch {
					n = !1;
				}
				if (n) e = t.contentWindow;
				else break;
				t = yt(e.document);
			}
			return t;
		}
		function qn(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
		}
		function Jn(e, t, n) {
			var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
			Zh || Jh == null || Jh !== yt(r) || (r = Jh, "selectionStart" in r && qn(r) ? r = {
				start: r.selectionStart,
				end: r.selectionEnd
			} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
				anchorNode: r.anchorNode,
				anchorOffset: r.anchorOffset,
				focusNode: r.focusNode,
				focusOffset: r.focusOffset
			}), Xh && Hn(Xh, r) || (Xh = r, r = _u(Yh, "onSelect"), 0 < r.length && (t = new lh("onSelect", "select", null, t, n), e.push({
				event: t,
				listeners: r
			}), t.target = Jh)));
		}
		function Yn(e, t) {
			var n = {};
			return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
		}
		function Xn(e) {
			if ($h[e]) return $h[e];
			if (!Qh[e]) return e;
			var t = Qh[e], n;
			for (n in t) if (t.hasOwnProperty(n) && n in eg) return $h[e] = t[n];
			return e;
		}
		function Zn(e, t) {
			cg.set(e, t), ot(t, [e]);
		}
		function Qn(e) {
			for (var t = gg, n = 0; n < e.length; n++) {
				var r = e[n];
				if (typeof r == "object" && r) if (Xf(r) && r.length === 2 && typeof r[0] == "string") {
					if (t !== gg && t !== yg) return _g;
					t = yg;
				} else return _g;
				else {
					if (typeof r == "function" || typeof r == "string" && 50 < r.length || t !== gg && t !== vg) return _g;
					t = vg;
				}
			}
			return t;
		}
		function $n(e, t, n, r) {
			for (var i in e) yp.call(e, i) && i[0] !== "_" && er(i, e[i], t, n, r);
		}
		function er(e, t, n, r, i) {
			switch (typeof t) {
				case "object": if (t === null) {
					t = "null";
					break;
				} else {
					if (t.$$typeof === Pf) {
						var a = ce(t.type) || "…", o = t.key;
						t = t.props;
						var s = Object.keys(t), c = s.length;
						if (o == null && c === 0) {
							t = "<" + a + " />";
							break;
						}
						if (3 > r || c === 1 && s[0] === "children" && o == null) {
							t = "<" + a + " … />";
							break;
						}
						for (var l in n.push([i + "\xA0\xA0".repeat(r) + e, "<" + a]), o !== null && er("key", o, n, r + 1, i), e = !1, t) l === "children" ? t.children != null && (!Xf(t.children) || 0 < t.children.length) && (e = !0) : yp.call(t, l) && l[0] !== "_" && er(l, t[l], n, r + 1, i);
						n.push(["", e ? ">…</" + a + ">" : "/>"]);
						return;
					}
					if (a = Object.prototype.toString.call(t), a = a.slice(8, a.length - 1), a === "Array") {
						if (l = Qn(t), l === vg || l === gg) {
							t = JSON.stringify(t);
							break;
						} else if (l === yg) {
							for (n.push([i + "\xA0\xA0".repeat(r) + e, ""]), e = 0; e < t.length; e++) a = t[e], er(a[0], a[1], n, r + 1, i);
							return;
						}
					}
					if (a === "Promise") {
						if (t.status === "fulfilled") {
							if (a = n.length, er(e, t.value, n, r, i), n.length > a) {
								n = n[a], n[1] = "Promise<" + (n[1] || "Object") + ">";
								return;
							}
						} else if (t.status === "rejected" && (a = n.length, er(e, t.reason, n, r, i), n.length > a)) {
							n = n[a], n[1] = "Rejected Promise<" + n[1] + ">";
							return;
						}
						n.push(["\xA0\xA0".repeat(r) + e, "Promise"]);
						return;
					}
					a === "Object" && (l = Object.getPrototypeOf(t)) && typeof l.constructor == "function" && (a = l.constructor.name), n.push([i + "\xA0\xA0".repeat(r) + e, a === "Object" ? 3 > r ? "" : "…" : a]), 3 > r && $n(t, n, r + 1, i);
					return;
				}
				case "function":
					t = t.name === "" ? "() => {}" : t.name + "() {}";
					break;
				case "string":
					t = t === hg ? "…" : JSON.stringify(t);
					break;
				case "undefined":
					t = "undefined";
					break;
				case "boolean":
					t = t ? "true" : "false";
					break;
				default: t = String(t);
			}
			n.push([i + "\xA0\xA0".repeat(r) + e, t]);
		}
		function tr(e, t, n, r) {
			var i = !0;
			for (o in e) o in t || (n.push([bg + "\xA0\xA0".repeat(r) + o, "…"]), i = !1);
			for (var a in t) if (a in e) {
				var o = e[a], s = t[a];
				if (o !== s) {
					if (r === 0 && a === "children") i = "\xA0\xA0".repeat(r) + a, n.push([bg + i, "…"], [xg + i, "…"]);
					else {
						if (!(3 <= r)) {
							if (typeof o == "object" && typeof s == "object" && o !== null && s !== null && o.$$typeof === s.$$typeof) if (s.$$typeof === Pf) {
								if (o.type === s.type && o.key === s.key) {
									o = ce(s.type) || "…", i = "\xA0\xA0".repeat(r) + a, o = "<" + o + " … />", n.push([bg + i, o], [xg + i, o]), i = !1;
									continue;
								}
							} else {
								var c = Object.prototype.toString.call(o), l = Object.prototype.toString.call(s);
								if (c === l && (l === "[object Object]" || l === "[object Array]")) {
									c = [Sg + "\xA0\xA0".repeat(r) + a, l === "[object Array]" ? "Array" : ""], n.push(c), l = n.length, tr(o, s, n, r + 1) ? l === n.length && (c[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : i = !1;
									continue;
								}
							}
							else if (typeof o == "function" && typeof s == "function" && o.name === s.name && o.length === s.length && (c = Function.prototype.toString.call(o), l = Function.prototype.toString.call(s), c === l)) {
								o = s.name === "" ? "() => {}" : s.name + "() {}", n.push([Sg + "\xA0\xA0".repeat(r) + a, o + " Referentially unequal function closure. Consider memoization."]);
								continue;
							}
						}
						er(a, o, n, r, bg), er(a, s, n, r, xg);
					}
					i = !1;
				}
			} else n.push([xg + "\xA0\xA0".repeat(r) + a, "…"]), i = !1;
			return i;
		}
		function nr(e) {
			H = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
		}
		function rr(e, t, n, r) {
			Cg && (Dg.start = t, Dg.end = n, Eg.color = "warning", Eg.tooltipText = r, Eg.properties = null, (e = e._debugTask) ? e.run(performance.measure.bind(performance, r, Dg)) : performance.measure(r, Dg));
		}
		function ir(e, t, n) {
			rr(e, t, n, "Reconnect");
		}
		function ar(e, t, n, r, i) {
			var a = x(e);
			if (a !== null && Cg) {
				var o = e.alternate, s = e.actualDuration;
				if (o === null || o.child !== e.child) for (var c = e.child; c !== null; c = c.sibling) s -= c.actualDuration;
				r = .5 > s ? r ? "tertiary-light" : "primary-light" : 10 > s ? r ? "tertiary" : "primary" : 100 > s ? r ? "tertiary-dark" : "primary-dark" : "error";
				var l = e.memoizedProps;
				s = e._debugTask, l !== null && o !== null && o.memoizedProps !== l ? (c = [Og], l = tr(o.memoizedProps, l, c, 0), 1 < c.length && (l && !Tg && (o.lanes & i) === 0 && 100 < e.actualDuration ? (Tg = !0, c[0] = Ag, Eg.color = "warning", Eg.tooltipText = kg) : (Eg.color = r, Eg.tooltipText = a), Eg.properties = c, Dg.start = t, Dg.end = n, s == null ? performance.measure("​" + a, Dg) : s.run(performance.measure.bind(performance, "​" + a, Dg)))) : s == null ? console.timeStamp(a, t, n, wg, void 0, r) : s.run(console.timeStamp.bind(console, a, t, n, wg, void 0, r));
			}
		}
		function or(e, t, n, r) {
			if (Cg) {
				var i = x(e);
				if (i !== null) {
					for (var a = null, o = [], s = 0; s < r.length; s++) {
						var c = r[s];
						a == null && c.source !== null && (a = c.source._debugTask), c = c.value, o.push(["Error", typeof c == "object" && c && typeof c.message == "string" ? String(c.message) : String(c)]);
					}
					e.key !== null && er("key", e.key, o, 0, ""), e.memoizedProps !== null && $n(e.memoizedProps, o, 0, ""), a ??= e._debugTask, e = {
						start: t,
						end: n,
						detail: { devtools: {
							color: "error",
							track: wg,
							tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
							properties: o
						} }
					}, a ? a.run(performance.measure.bind(performance, "​" + i, e)) : performance.measure("​" + i, e);
				}
			}
		}
		function sr(e, t, n, r, i) {
			if (i !== null) {
				if (Cg) {
					var a = x(e);
					if (a !== null) {
						r = [];
						for (var o = 0; o < i.length; o++) {
							var s = i[o].value;
							r.push(["Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
						}
						e.key !== null && er("key", e.key, r, 0, ""), e.memoizedProps !== null && $n(e.memoizedProps, r, 0, ""), t = {
							start: t,
							end: n,
							detail: { devtools: {
								color: "error",
								track: wg,
								tooltipText: "A lifecycle or effect errored",
								properties: r
							} }
						}, (e = e._debugTask) ? e.run(performance.measure.bind(performance, "​" + a, t)) : performance.measure("​" + a, t);
					}
				}
			} else a = x(e), a !== null && Cg && (i = 1 > r ? "secondary-light" : 100 > r ? "secondary" : 500 > r ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(console.timeStamp.bind(console, a, t, n, wg, void 0, i)) : console.timeStamp(a, t, n, wg, void 0, i));
		}
		function cr(e, t, n, r) {
			if (Cg && !(t <= e)) {
				var i = (n & 738197653) === n ? "tertiary-dark" : "primary-dark";
				n = (n & 536870912) === n ? "Prepared" : (n & 201326741) === n ? "Hydrated" : "Render", r ? r.run(console.timeStamp.bind(console, n, e, t, H, V, i)) : console.timeStamp(n, e, t, H, V, i);
			}
		}
		function lr(e, t, n, r) {
			!Cg || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", r ? r.run(console.timeStamp.bind(console, "Prewarm", e, t, H, V, n)) : console.timeStamp("Prewarm", e, t, H, V, n));
		}
		function ur(e, t, n, r) {
			!Cg || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", r ? r.run(console.timeStamp.bind(console, "Suspended", e, t, H, V, n)) : console.timeStamp("Suspended", e, t, H, V, n));
		}
		function dr(e, t, n, r, i, a) {
			if (Cg && !(t <= e)) {
				n = [];
				for (var o = 0; o < r.length; o++) {
					var s = r[o].value;
					n.push(["Recoverable Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
				}
				e = {
					start: e,
					end: t,
					detail: { devtools: {
						color: "primary-dark",
						track: H,
						trackGroup: V,
						tooltipText: i ? "Hydration Failed" : "Recovered after Error",
						properties: n
					} }
				}, a ? a.run(performance.measure.bind(performance, "Recovered", e)) : performance.measure("Recovered", e);
			}
		}
		function fr(e, t, n, r) {
			!Cg || t <= e || (r ? r.run(console.timeStamp.bind(console, "Errored", e, t, H, V, "error")) : console.timeStamp("Errored", e, t, H, V, "error"));
		}
		function pr(e, t, n, r) {
			!Cg || t <= e || (r ? r.run(console.timeStamp.bind(console, n, e, t, H, V, "secondary-light")) : console.timeStamp(n, e, t, H, V, "secondary-light"));
		}
		function mr(e, t, n, r, i) {
			if (Cg && !(t <= e)) {
				for (var a = [], o = 0; o < n.length; o++) {
					var s = n[o].value;
					a.push(["Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
				}
				e = {
					start: e,
					end: t,
					detail: { devtools: {
						color: "error",
						track: H,
						trackGroup: V,
						tooltipText: r ? "Remaining Effects Errored" : "Commit Errored",
						properties: a
					} }
				}, i ? i.run(performance.measure.bind(performance, "Errored", e)) : performance.measure("Errored", e);
			}
		}
		function hr(e, t, n) {
			!Cg || t <= e || (n ? n.run(console.timeStamp.bind(console, "Animating", e, t, H, V, "secondary-dark")) : console.timeStamp("Animating", e, t, H, V, "secondary-dark"));
		}
		function gr() {
			for (var e = Pg, t = Fg = Pg = 0; t < e;) {
				var n = Ng[t];
				Ng[t++] = null;
				var r = Ng[t];
				Ng[t++] = null;
				var i = Ng[t];
				Ng[t++] = null;
				var a = Ng[t];
				if (Ng[t++] = null, r !== null && i !== null) {
					var o = r.pending;
					o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
				}
				a !== 0 && br(n, i, a);
			}
		}
		function _r(e, t, n, r) {
			Ng[Pg++] = e, Ng[Pg++] = t, Ng[Pg++] = n, Ng[Pg++] = r, Fg |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
		}
		function vr(e, t, n, r) {
			return _r(e, t, n, r), xr(e);
		}
		function yr(e, t) {
			return _r(e, null, null, t), xr(e);
		}
		function br(e, t, n) {
			e.lanes |= n;
			var r = e.alternate;
			r !== null && (r.lanes |= n);
			for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & jg || (i = !0)), e = a, a = a.return;
			return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Lp(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
		}
		function xr(e) {
			if (qx > Kx) throw Qx = qx = 0, $x = Jx = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
			Qx > Zx && (Qx = 0, $x = null, console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")), e.alternate === null && e.flags & 4098 && Xl(e);
			for (var t = e, n = t.return; n !== null;) t.alternate === null && t.flags & 4098 && Xl(e), t = n, n = t.return;
			return t.tag === 3 ? t.stateNode : null;
		}
		function Sr(e) {
			if (Lg === null) return e;
			var t = Lg(e);
			return t === void 0 ? e : t.current;
		}
		function Cr(e) {
			if (Lg === null) return e;
			var t = Lg(e);
			return t === void 0 ? e != null && typeof e.render == "function" && (t = Sr(e.render), e.render !== t) ? (t = {
				$$typeof: Vf,
				render: t
			}, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
		}
		function wr(e, t) {
			if (Lg === null) return !1;
			var n = e.elementType;
			t = t.type;
			var r = !1, i = typeof t == "object" && t ? t.$$typeof : null;
			switch (e.tag) {
				case 1:
					typeof t == "function" && (r = !0);
					break;
				case 0:
					(typeof t == "function" || i === Gf) && (r = !0);
					break;
				case 11:
					(i === Vf || i === Gf) && (r = !0);
					break;
				case 14:
				case 15:
					(i === Wf || i === Gf) && (r = !0);
					break;
				default: return !1;
			}
			return !!(r && (e = Lg(n), e !== void 0 && e === Lg(t)));
		}
		function Tr(e) {
			Lg !== null && typeof WeakSet == "function" && (Rg === null && (Rg = /* @__PURE__ */ new WeakSet()), Rg.add(e));
		}
		function Er(e, t, n) {
			do {
				var r = e, i = r.alternate, a = r.child, o = r.sibling, s = r.tag;
				r = r.type;
				var c = null;
				switch (s) {
					case 0:
					case 15:
					case 1:
						c = r;
						break;
					case 11: c = r.render;
				}
				if (Lg === null) throw Error("Expected resolveFamily to be set during hot reload.");
				var l = !1;
				if (r = !1, c !== null && (c = Lg(c), c !== void 0 && (n.has(c) ? r = !0 : t.has(c) && (s === 1 ? r = !0 : l = !0))), Rg !== null && (Rg.has(e) || i !== null && Rg.has(i)) && (r = !0), r && (e._debugNeedsRemount = !0), (r || l) && (i = yr(e, 2), i !== null && cl(i, e, 2)), a === null || r || Er(a, t, n), o === null) break;
				e = o;
			} while (1);
		}
		function Dr(e, t, n, r) {
			this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Ug || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
		}
		function Or(e) {
			return e = e.prototype, !(!e || !e.isReactComponent);
		}
		function kr(e, t) {
			var n = e.alternate;
			switch (n === null ? (n = _(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugStack = e._debugStack, n._debugTask = e._debugTask, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
				lanes: t.lanes,
				firstContext: t.firstContext,
				_debugThenableState: t._debugThenableState
			}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
				case 0:
				case 15:
					n.type = Sr(e.type);
					break;
				case 1:
					n.type = Sr(e.type);
					break;
				case 11: n.type = Cr(e.type);
			}
			return n;
		}
		function Ar(e, t) {
			e.flags &= 65011714;
			var n = e.alternate;
			return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
				lanes: t.lanes,
				firstContext: t.firstContext,
				_debugThenableState: t._debugThenableState
			}, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
		}
		function jr(e, t, n, r, i, a) {
			var o = 0, s = e;
			if (typeof e == "function") Or(e) && (o = 1), s = Sr(s);
			else if (typeof e == "string") o = S(), o = qd(e, n, o) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
			else a: switch (e) {
				case Kf: return t = _(31, n, t, i), t.elementType = Kf, t.lanes = a, t;
				case If: return Nr(n.children, i, a, t);
				case Lf:
					o = 8, i |= Bg, i |= Vg;
					break;
				case Rf: return e = n, r = i, typeof e.id != "string" && console.error("Profiler must specify an \"id\" of type `string` as a prop. Received the type `%s` instead.", typeof e.id), t = _(12, e, t, r | W), t.elementType = Rf, t.lanes = a, t.stateNode = {
					effectDuration: 0,
					passiveEffectDuration: 0
				}, t;
				case Hf: return t = _(13, n, t, i), t.elementType = Hf, t.lanes = a, t;
				case Uf: return t = _(19, n, t, i), t.elementType = Uf, t.lanes = a, t;
				default:
					if (typeof e == "object" && e) switch (e.$$typeof) {
						case Bf:
							o = 10;
							break a;
						case zf:
							o = 9;
							break a;
						case Vf:
							o = 11, s = Cr(s);
							break a;
						case Wf:
							o = 14;
							break a;
						case Gf:
							o = 16, s = null;
							break a;
					}
					s = "", (e === void 0 || typeof e == "object" && e && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : Xf(e) ? n = "array" : e !== void 0 && e.$$typeof === Pf ? (n = "<" + (ce(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, (o = r ? le(r) : null) && (s += "\n\nCheck the render method of `" + o + "`."), o = 29, n = Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (n + "." + s)), s = null;
			}
			return t = _(o, n, t, i), t.elementType = e, t.type = s, t.lanes = a, t._debugOwner = r, t;
		}
		function Mr(e, t, n) {
			return t = jr(e.type, e.key, e.props, e._owner, t, n), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
		}
		function Nr(e, t, n, r) {
			return e = _(7, e, r, t), e.lanes = n, e;
		}
		function Pr(e, t, n) {
			return e = _(6, e, null, t), e.lanes = n, e;
		}
		function Fr(e) {
			var t = _(18, null, null, U);
			return t.stateNode = e, t;
		}
		function Ir(e, t, n) {
			return t = _(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation
			}, t;
		}
		function Lr(e, t) {
			if (typeof e == "object" && e) {
				var n = Wg.get(e);
				return n === void 0 ? (t = {
					value: e,
					source: t,
					stack: Ce(t)
				}, Wg.set(e, t), t) : n;
			}
			return {
				value: e,
				source: t,
				stack: Ce(t)
			};
		}
		function Rr(e, t) {
			Wr(), Gg[Kg++] = Jg, Gg[Kg++] = qg, qg = e, Jg = t;
		}
		function zr(e, t, n) {
			Wr(), Yg[Xg++] = Qg, Yg[Xg++] = $g, Yg[Xg++] = Zg, Zg = e;
			var r = Qg;
			e = $g;
			var i = 32 - Lp(r) - 1;
			r &= ~(1 << i), n += 1;
			var a = 32 - Lp(t) + i;
			if (30 < a) {
				var o = i - i % 5;
				a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Qg = 1 << 32 - Lp(t) + i | n << i | r, $g = a + e;
			} else Qg = 1 << a | n << i | r, $g = e;
		}
		function Br(e) {
			Wr(), e.return !== null && (Rr(e, 1), zr(e, 1, 0));
		}
		function Vr(e) {
			for (; e === qg;) qg = Gg[--Kg], Gg[Kg] = null, Jg = Gg[--Kg], Gg[Kg] = null;
			for (; e === Zg;) Zg = Yg[--Xg], Yg[Xg] = null, $g = Yg[--Xg], Yg[Xg] = null, Qg = Yg[--Xg], Yg[Xg] = null;
		}
		function Hr() {
			return Wr(), Zg === null ? null : {
				id: Qg,
				overflow: $g
			};
		}
		function Ur(e, t) {
			Wr(), Yg[Xg++] = Qg, Yg[Xg++] = $g, Yg[Xg++] = Zg, Qg = t.id, $g = t.overflow, Zg = e;
		}
		function Wr() {
			G || console.error("Expected to be hydrating. This is a bug in React. Please file an issue.");
		}
		function Gr(e, t) {
			if (e.return === null) {
				if (r_ === null) r_ = {
					fiber: e,
					children: [],
					serverProps: void 0,
					serverTail: [],
					distanceFromLeaf: t
				};
				else {
					if (r_.fiber !== e) throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");
					r_.distanceFromLeaf > t && (r_.distanceFromLeaf = t);
				}
				return r_;
			}
			var n = Gr(e.return, t + 1).children;
			return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = {
				fiber: e,
				children: [],
				serverProps: void 0,
				serverTail: [],
				distanceFromLeaf: t
			}, n.push(t), t);
		}
		function Kr() {
			G && console.error("We should not be hydrating here. This is a bug in React. Please file a bug.");
		}
		function qr(e, t) {
			n_ || (e = Gr(e, 0), e.serverProps = null, t !== null && (t = Sd(t), e.serverTail.push(t)));
		}
		function Jr(e) {
			var t = 1 < arguments.length && arguments[1] !== void 0 && arguments[1], n = "", r = r_;
			throw r !== null && (r_ = null, n = qt(r)), ei(Lr(Error("Hydration failed because the server rendered " + (t ? "text" : "HTML") + " didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\nhttps://react.dev/link/hydration-mismatch" + n), e)), o_;
		}
		function Yr(e) {
			var t = e.stateNode, n = e.type, r = e.memoizedProps;
			switch (t[Jp] = e, t[Yp] = r, bu(n, r), n) {
				case "dialog":
					I("cancel", t), I("close", t);
					break;
				case "iframe":
				case "object":
				case "embed":
					I("load", t);
					break;
				case "video":
				case "audio":
					for (n = 0; n < pS.length; n++) I(pS[n], t);
					break;
				case "source":
					I("error", t);
					break;
				case "img":
				case "image":
				case "link":
					I("error", t), I("load", t);
					break;
				case "details":
					I("toggle", t);
					break;
				case "input":
					ct("input", r), I("invalid", t), xt(t, r), Ct(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
					break;
				case "option":
					Tt(t, r);
					break;
				case "select":
					ct("select", r), I("invalid", t), Ot(t, r);
					break;
				case "textarea": ct("textarea", r), I("invalid", t), kt(t, r), jt(t, r.value, r.defaultValue, r.children);
			}
			n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Eu(t.textContent, n) ? (r.popover != null && (I("beforetoggle", t), I("toggle", t)), r.onScroll != null && I("scroll", t), r.onScrollEnd != null && I("scrollend", t), r.onClick != null && (t.onclick = pn), t = !0) : t = !1, t || Jr(e, !0);
		}
		function Xr(e) {
			for (e_ = e.return; e_;) switch (e_.tag) {
				case 5:
				case 31:
				case 13:
					a_ = !1;
					return;
				case 27:
				case 3:
					a_ = !0;
					return;
				default: e_ = e_.return;
			}
		}
		function Zr(e) {
			if (e !== e_) return !1;
			if (!G) return Xr(e), G = !0, !1;
			var t = e.tag, n;
			if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ku(e.type, e.memoizedProps)), n = !n), n && t_) {
				for (n = t_; n;) {
					var r = Gr(e, 0), i = Sd(n);
					r.serverTail.push(i), n = i.type === "Suspense" ? wd(n) : xd(n.nextSibling);
				}
				Jr(e);
			}
			if (Xr(e), t === 13) {
				if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
				t_ = wd(e);
			} else if (t === 31) {
				if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
				t_ = wd(e);
			} else t === 27 ? (t = t_, rd(e.type) ? (e = rC, rC = null, t_ = e) : t_ = t) : t_ = e_ ? xd(e.stateNode.nextSibling) : null;
			return !0;
		}
		function Qr() {
			t_ = e_ = null, n_ = G = !1;
		}
		function $r() {
			var e = i_;
			return e !== null && (hx === null ? hx = e : hx.push.apply(hx, e), i_ = null), e;
		}
		function ei(e) {
			i_ === null ? i_ = [e] : i_.push(e);
		}
		function ti() {
			var e = r_;
			if (e !== null) {
				r_ = null;
				for (var t = qt(e); 0 < e.children.length;) e = e.children[0];
				T(e.fiber, function() {
					console.error("A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\n%s%s", "https://react.dev/link/hydration-mismatch", t);
				});
			}
		}
		function ni() {
			d_ = u_ = null, f_ = !1;
		}
		function ri(e, t, n) {
			fe(s_, t._currentValue, e), t._currentValue = n, fe(c_, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== l_ && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = l_;
		}
		function ii(e, t) {
			e._currentValue = s_.current;
			var n = c_.current;
			de(c_, t), e._currentRenderer = n, de(s_, t);
		}
		function ai(e, t, n) {
			for (; e !== null;) {
				var r = e.alternate;
				if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
				e = e.return;
			}
			e !== n && console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
		}
		function oi(e, t, n, r) {
			var i = e.child;
			for (i !== null && (i.return = e); i !== null;) {
				var a = i.dependencies;
				if (a !== null) {
					var o = i.child;
					a = a.firstContext;
					a: for (; a !== null;) {
						var s = a;
						a = i;
						for (var c = 0; c < t.length; c++) if (s.context === t[c]) {
							a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ai(a.return, n, e), r || (o = null);
							break a;
						}
						a = s.next;
					}
				} else if (i.tag === 18) {
					if (o = i.return, o === null) throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
					o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ai(o, n, e), o = null;
				} else o = i.child;
				if (o !== null) o.return = i;
				else for (o = i; o !== null;) {
					if (o === e) {
						o = null;
						break;
					}
					if (i = o.sibling, i !== null) {
						i.return = o.return, o = i;
						break;
					}
					o = o.return;
				}
				i = o;
			}
		}
		function si(e, t, n, r) {
			e = null;
			for (var i = t, a = !1; i !== null;) {
				if (!a) {
					if (i.flags & 524288) a = !0;
					else if (i.flags & 262144) break;
				}
				if (i.tag === 10) {
					var o = i.alternate;
					if (o === null) throw Error("Should have a current fiber. This is a bug in React.");
					if (o = o.memoizedProps, o !== null) {
						var s = i.type;
						Kh(i.pendingProps.value, o.value) || (e === null ? e = [s] : e.push(s));
					}
				} else if (i === ip.current) {
					if (o = i.alternate, o === null) throw Error("Should have a current fiber. This is a bug in React.");
					o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [xC] : e.push(xC));
				}
				i = i.return;
			}
			e !== null && oi(t, e, n, r), t.flags |= 262144;
		}
		function ci(e) {
			for (e = e.firstContext; e !== null;) {
				if (!Kh(e.context._currentValue, e.memoizedValue)) return !0;
				e = e.next;
			}
			return !1;
		}
		function li(e) {
			u_ = e, d_ = null, e = e.dependencies, e !== null && (e.firstContext = null);
		}
		function E(e) {
			return f_ && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), di(u_, e);
		}
		function ui(e, t) {
			return u_ === null && li(e), di(e, t);
		}
		function di(e, t) {
			var n = t._currentValue;
			if (t = {
				context: t,
				memoizedValue: n,
				next: null
			}, d_ === null) {
				if (e === null) throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
				d_ = t, e.dependencies = {
					lanes: 0,
					firstContext: t,
					_debugThenableState: null
				}, e.flags |= 524288;
			} else d_ = d_.next = t;
			return n;
		}
		function fi() {
			return {
				controller: new p_(),
				data: /* @__PURE__ */ new Map(),
				refCount: 0
			};
		}
		function pi(e) {
			e.controller.signal.aborted && console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."), e.refCount++;
		}
		function mi(e) {
			e.refCount--, 0 > e.refCount && console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."), e.refCount === 0 && m_(h_, function() {
				e.controller.abort();
			});
		}
		function hi(e, t, n) {
			e & 127 ? 0 > j_ && (j_ = __(), M_ = v_(t), P_ = t, n != null && (F_ = x(n)), (Z & (Ib | Lb)) !== Fb && (k_ = !0, N_ = y_), e = Yu(), t = Ju(), e !== R_ || t !== L_ ? R_ = -1.1 : t !== null && (N_ = y_), I_ = e, L_ = t) : e & 4194048 && 0 > H_ && (H_ = __(), W_ = v_(t), G_ = t, n != null && (K_ = x(n)), 0 > V_) && (e = Yu(), t = Ju(), (e !== Y_ || t !== J_) && (Y_ = -1.1), q_ = e, J_ = t);
		}
		function gi(e) {
			if (0 > j_) {
				j_ = __(), M_ = e._debugTask == null ? null : e._debugTask, (Z & (Ib | Lb)) !== Fb && (N_ = y_);
				var t = Yu(), n = Ju();
				t !== R_ || n !== L_ ? R_ = -1.1 : n !== null && (N_ = y_), I_ = t, L_ = n;
			}
			0 > H_ && (H_ = __(), W_ = e._debugTask == null ? null : e._debugTask, 0 > V_) && (e = Yu(), t = Ju(), (e !== Y_ || t !== J_) && (Y_ = -1.1), q_ = e, J_ = t);
		}
		function _i() {
			var e = E_;
			return E_ = 0, e;
		}
		function vi(e) {
			var t = E_;
			return E_ = e, t;
		}
		function yi(e) {
			var t = E_;
			return E_ += e, t;
		}
		function bi() {
			q = K = -1.1;
		}
		function xi() {
			var e = K;
			return K = -1.1, e;
		}
		function Si(e) {
			0 <= e && (K = e);
		}
		function Ci() {
			var e = D_;
			return D_ = -0, e;
		}
		function wi(e) {
			0 <= e && (D_ = e);
		}
		function Ti() {
			var e = O_;
			return O_ = null, e;
		}
		function Ei() {
			var e = k_;
			return k_ = !1, e;
		}
		function Di(e) {
			T_ = __(), 0 > e.actualStartTime && (e.actualStartTime = T_);
		}
		function Oi(e) {
			if (0 <= T_) {
				var t = __() - T_;
				e.actualDuration += t, e.selfBaseDuration = t, T_ = -1;
			}
		}
		function ki(e) {
			if (0 <= T_) {
				var t = __() - T_;
				e.actualDuration += t, T_ = -1;
			}
		}
		function Ai() {
			if (0 <= T_) {
				var e = __(), t = e - T_;
				T_ = -1, E_ += t, D_ += t, q = e;
			}
		}
		function ji(e) {
			O_ === null && (O_ = []), O_.push(e), w_ === null && (w_ = []), w_.push(e);
		}
		function Mi() {
			T_ = __(), 0 > K && (K = T_);
		}
		function Ni(e) {
			for (var t = e.child; t;) e.actualDuration += t.actualDuration, t = t.sibling;
		}
		function Pi(e, t) {
			if (av === null) {
				var n = av = [];
				ov = 0, sv = ou(), cv = {
					status: "pending",
					value: void 0,
					then: function(e) {
						n.push(e);
					}
				};
			}
			return ov++, t.then(Fi, Fi), t;
		}
		function Fi() {
			if (--ov === 0 && (-1 < H_ || (V_ = -1.1), av !== null)) {
				cv !== null && (cv.status = "fulfilled");
				var e = av;
				av = null, sv = 0, cv = null;
				for (var t = 0; t < e.length; t++) (0, e[t])();
			}
		}
		function Ii(e, t) {
			var n = [], r = {
				status: "pending",
				value: null,
				reason: null,
				then: function(e) {
					n.push(e);
				}
			};
			return e.then(function() {
				r.status = "fulfilled", r.value = t;
				for (var e = 0; e < n.length; e++) (0, n[e])(t);
			}, function(e) {
				for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
			}), r;
		}
		function Li() {
			var e = uv.current;
			return e === null ? Gb.pooledCache : e;
		}
		function Ri(e, t) {
			t === null ? fe(uv, uv.current, e) : fe(uv, t.pool, e);
		}
		function zi() {
			var e = Li();
			return e === null ? null : {
				parent: g_._currentValue,
				pool: e
			};
		}
		function Bi() {
			return {
				didWarnAboutUncachedPromise: !1,
				thenables: []
			};
		}
		function Vi(e) {
			return e = e.status, e === "fulfilled" || e === "rejected";
		}
		function Hi(e, t, n) {
			z.actQueue !== null && (z.didUsePromise = !0);
			var r = e.thenables;
			if (n = r[n], n === void 0 ? r.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")), t.then(pn, pn), t = n), t._debugInfo === void 0) {
				e = performance.now(), r = t.displayName;
				var i = {
					name: typeof r == "string" ? r : "Promise",
					start: e,
					end: e,
					value: t
				};
				t._debugInfo = [{ awaited: i }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
					i.end = performance.now();
				}, t.then(e, e));
			}
			switch (t.status) {
				case "fulfilled": return t.value;
				case "rejected": throw e = t.reason, Gi(e), e;
				default:
					if (typeof t.status == "string") t.then(pn, pn);
					else {
						if (e = Gb, e !== null && 100 < e.shellSuspendCounter) throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
						e = t, e.status = "pending", e.then(function(e) {
							if (t.status === "pending") {
								var n = t;
								n.status = "fulfilled", n.value = e;
							}
						}, function(e) {
							if (t.status === "pending") {
								var n = t;
								n.status = "rejected", n.reason = e;
							}
						});
					}
					switch (t.status) {
						case "fulfilled": return t.value;
						case "rejected": throw e = t.reason, Gi(e), e;
					}
					throw Uv = t, Wv = !0, zv;
			}
		}
		function Ui(e) {
			try {
				return Rv(e);
			} catch (e) {
				throw typeof e == "object" && e && typeof e.then == "function" ? (Uv = e, Wv = !0, zv) : e;
			}
		}
		function Wi() {
			if (Uv === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
			var e = Uv;
			return Uv = null, Wv = !1, e;
		}
		function Gi(e) {
			if (e === zv || e === Vv) throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
		}
		function Ki(e) {
			var t = J;
			return e != null && (J = t === null ? e : t.concat(e)), t;
		}
		function qi() {
			var e = J;
			if (e != null) {
				for (var t = e.length - 1; 0 <= t; t--) if (e[t].name != null) {
					var n = e[t].debugTask;
					if (n != null) return n;
				}
			}
			return null;
		}
		function Ji(e, t, n) {
			for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
				var a = r[i];
				if (a !== "children" && a !== "key") {
					t === null && (t = Mr(e, n.mode, 0), t._debugInfo = J, t.return = n), T(t, function(e) {
						console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", e);
					}, a);
					break;
				}
			}
		}
		function D(e) {
			var t = Kv;
			return Kv += 1, Gv === null && (Gv = Bi()), Hi(Gv, e, t);
		}
		function Yi(e, t) {
			t = t.props.ref, e.ref = t === void 0 ? null : t;
		}
		function Xi(e, t) {
			throw t.$$typeof === Nf ? Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.") : (e = Object.prototype.toString.call(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."));
		}
		function Zi(e, t) {
			var n = qi();
			n === null ? Xi(e, t) : n.run(Xi.bind(null, e, t));
		}
		function Qi(e, t) {
			var n = x(e) || "Component";
			Xv[n] || (Xv[n] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  root.render(%s)", t, t, t) : console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  <%s>{%s}</%s>", t, t, n, t, n));
		}
		function $i(e, t) {
			var n = qi();
			n === null ? Qi(e, t) : n.run(Qi.bind(null, e, t));
		}
		function ea(e, t) {
			var n = x(e) || "Component";
			Zv[n] || (Zv[n] = !0, t = String(t), e.tag === 3 ? console.error("Symbols are not valid as a React child.\n  root.render(%s)", t) : console.error("Symbols are not valid as a React child.\n  <%s>%s</%s>", n, t, n));
		}
		function ta(e, t) {
			var n = qi();
			n === null ? ea(e, t) : n.run(ea.bind(null, e, t));
		}
		function na(e) {
			function t(t, n) {
				if (e) {
					var r = t.deletions;
					r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
				}
			}
			function n(n, r) {
				if (!e) return null;
				for (; r !== null;) t(n, r), r = r.sibling;
				return null;
			}
			function r(e) {
				for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
				return t;
			}
			function i(e, t) {
				return e = kr(e, t), e.index = 0, e.sibling = null, e;
			}
			function a(t, n, r) {
				return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
			}
			function o(t) {
				return e && t.alternate === null && (t.flags |= 67108866), t;
			}
			function s(e, t, n, r) {
				return t === null || t.tag !== 6 ? (t = Pr(n, e.mode, r), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = J, t) : (t = i(t, n), t.return = e, t._debugInfo = J, t);
			}
			function c(e, t, n, r) {
				var a = n.type;
				return a === If ? (t = u(e, t, n.props.children, r, n.key), Ji(n, t, e), t) : t !== null && (t.elementType === a || wr(t, n) || typeof a == "object" && a && a.$$typeof === Gf && Ui(a) === t.type) ? (t = i(t, n.props), Yi(t, n), t.return = e, t._debugOwner = n._owner, t._debugInfo = J, t) : (t = Mr(n, e.mode, r), Yi(t, n), t.return = e, t._debugInfo = J, t);
			}
			function l(e, t, n, r) {
				return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ir(n, e.mode, r), t.return = e, t._debugInfo = J, t) : (t = i(t, n.children || []), t.return = e, t._debugInfo = J, t);
			}
			function u(e, t, n, r, a) {
				return t === null || t.tag !== 7 ? (t = Nr(n, e.mode, r, a), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = J, t) : (t = i(t, n), t.return = e, t._debugInfo = J, t);
			}
			function d(e, t, n) {
				if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Pr("" + t, e.mode, n), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = J, t;
				if (typeof t == "object" && t) {
					switch (t.$$typeof) {
						case Pf: return n = Mr(t, e.mode, n), Yi(n, t), n.return = e, e = Ki(t._debugInfo), n._debugInfo = J, J = e, n;
						case Ff: return t = Ir(t, e.mode, n), t.return = e, t._debugInfo = J, t;
						case Gf:
							var r = Ki(t._debugInfo);
							return t = Ui(t), e = d(e, t, n), J = r, e;
					}
					if (Xf(t) || se(t)) return n = Nr(t, e.mode, n, null), n.return = e, n._debugOwner = e, n._debugTask = e._debugTask, e = Ki(t._debugInfo), n._debugInfo = J, J = e, n;
					if (typeof t.then == "function") return r = Ki(t._debugInfo), e = d(e, D(t), n), J = r, e;
					if (t.$$typeof === Bf) return d(e, ui(e, t), n);
					Zi(e, t);
				}
				return typeof t == "function" && $i(e, t), typeof t == "symbol" && ta(e, t), null;
			}
			function f(e, t, n, r) {
				var i = t === null ? null : t.key;
				if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? s(e, t, "" + n, r) : null;
				if (typeof n == "object" && n) {
					switch (n.$$typeof) {
						case Pf: return n.key === i ? (i = Ki(n._debugInfo), e = c(e, t, n, r), J = i, e) : null;
						case Ff: return n.key === i ? l(e, t, n, r) : null;
						case Gf: return i = Ki(n._debugInfo), n = Ui(n), e = f(e, t, n, r), J = i, e;
					}
					if (Xf(n) || se(n)) return i === null ? (i = Ki(n._debugInfo), e = u(e, t, n, r, null), J = i, e) : null;
					if (typeof n.then == "function") return i = Ki(n._debugInfo), e = f(e, t, D(n), r), J = i, e;
					if (n.$$typeof === Bf) return f(e, t, ui(e, n), r);
					Zi(e, n);
				}
				return typeof n == "function" && $i(e, n), typeof n == "symbol" && ta(e, n), null;
			}
			function p(e, t, n, r, i) {
				if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, s(t, e, "" + r, i);
				if (typeof r == "object" && r) {
					switch (r.$$typeof) {
						case Pf: return n = e.get(r.key === null ? n : r.key) || null, e = Ki(r._debugInfo), t = c(t, n, r, i), J = e, t;
						case Ff: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
						case Gf:
							var a = Ki(r._debugInfo);
							return r = Ui(r), t = p(e, t, n, r, i), J = a, t;
					}
					if (Xf(r) || se(r)) return n = e.get(n) || null, e = Ki(r._debugInfo), t = u(t, n, r, i, null), J = e, t;
					if (typeof r.then == "function") return a = Ki(r._debugInfo), t = p(e, t, n, D(r), i), J = a, t;
					if (r.$$typeof === Bf) return p(e, t, n, ui(t, r), i);
					Zi(t, r);
				}
				return typeof r == "function" && $i(t, r), typeof r == "symbol" && ta(t, r), null;
			}
			function m(e, t, n, r) {
				if (typeof n != "object" || !n) return r;
				switch (n.$$typeof) {
					case Pf:
					case Ff:
						h(e, t, n);
						var i = n.key;
						if (typeof i != "string") break;
						if (r === null) {
							r = /* @__PURE__ */ new Set(), r.add(i);
							break;
						}
						if (!r.has(i)) {
							r.add(i);
							break;
						}
						T(t, function() {
							console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", i);
						});
						break;
					case Gf: n = Ui(n), m(e, t, n, r);
				}
				return r;
			}
			function g(i, o, s, c) {
				for (var l = null, u = null, h = null, g = o, _ = o = 0, v = null; g !== null && _ < s.length; _++) {
					g.index > _ ? (v = g, g = null) : v = g.sibling;
					var y = f(i, g, s[_], c);
					if (y === null) {
						g === null && (g = v);
						break;
					}
					l = m(i, y, s[_], l), e && g && y.alternate === null && t(i, g), o = a(y, o, _), h === null ? u = y : h.sibling = y, h = y, g = v;
				}
				if (_ === s.length) return n(i, g), G && Rr(i, _), u;
				if (g === null) {
					for (; _ < s.length; _++) g = d(i, s[_], c), g !== null && (l = m(i, g, s[_], l), o = a(g, o, _), h === null ? u = g : h.sibling = g, h = g);
					return G && Rr(i, _), u;
				}
				for (g = r(g); _ < s.length; _++) v = p(g, i, _, s[_], c), v !== null && (l = m(i, v, s[_], l), e && v.alternate !== null && g.delete(v.key === null ? _ : v.key), o = a(v, o, _), h === null ? u = v : h.sibling = v, h = v);
				return e && g.forEach(function(e) {
					return t(i, e);
				}), G && Rr(i, _), u;
			}
			function v(i, o, s, c) {
				if (s == null) throw Error("An iterable object provided no iterator.");
				for (var l = null, u = null, h = o, g = o = 0, _ = null, v = null, y = s.next(); h !== null && !y.done; g++, y = s.next()) {
					h.index > g ? (_ = h, h = null) : _ = h.sibling;
					var b = f(i, h, y.value, c);
					if (b === null) {
						h === null && (h = _);
						break;
					}
					v = m(i, b, y.value, v), e && h && b.alternate === null && t(i, h), o = a(b, o, g), u === null ? l = b : u.sibling = b, u = b, h = _;
				}
				if (y.done) return n(i, h), G && Rr(i, g), l;
				if (h === null) {
					for (; !y.done; g++, y = s.next()) h = d(i, y.value, c), h !== null && (v = m(i, h, y.value, v), o = a(h, o, g), u === null ? l = h : u.sibling = h, u = h);
					return G && Rr(i, g), l;
				}
				for (h = r(h); !y.done; g++, y = s.next()) _ = p(h, i, g, y.value, c), _ !== null && (v = m(i, _, y.value, v), e && _.alternate !== null && h.delete(_.key === null ? g : _.key), o = a(_, o, g), u === null ? l = _ : u.sibling = _, u = _);
				return e && h.forEach(function(e) {
					return t(i, e);
				}), G && Rr(i, g), l;
			}
			function y(e, r, a, s) {
				if (typeof a == "object" && a && a.type === If && a.key === null && (Ji(a, null, e), a = a.props.children), typeof a == "object" && a) {
					switch (a.$$typeof) {
						case Pf:
							var c = Ki(a._debugInfo);
							a: {
								for (var l = a.key; r !== null;) {
									if (r.key === l) {
										if (l = a.type, l === If) {
											if (r.tag === 7) {
												n(e, r.sibling), s = i(r, a.props.children), s.return = e, s._debugOwner = a._owner, s._debugInfo = J, Ji(a, s, e), e = s;
												break a;
											}
										} else if (r.elementType === l || wr(r, a) || typeof l == "object" && l && l.$$typeof === Gf && Ui(l) === r.type) {
											n(e, r.sibling), s = i(r, a.props), Yi(s, a), s.return = e, s._debugOwner = a._owner, s._debugInfo = J, e = s;
											break a;
										}
										n(e, r);
										break;
									} else t(e, r);
									r = r.sibling;
								}
								a.type === If ? (s = Nr(a.props.children, e.mode, s, a.key), s.return = e, s._debugOwner = e, s._debugTask = e._debugTask, s._debugInfo = J, Ji(a, s, e), e = s) : (s = Mr(a, e.mode, s), Yi(s, a), s.return = e, s._debugInfo = J, e = s);
							}
							return e = o(e), J = c, e;
						case Ff:
							a: {
								for (c = a, a = c.key; r !== null;) {
									if (r.key === a) if (r.tag === 4 && r.stateNode.containerInfo === c.containerInfo && r.stateNode.implementation === c.implementation) {
										n(e, r.sibling), s = i(r, c.children || []), s.return = e, e = s;
										break a;
									} else {
										n(e, r);
										break;
									}
									else t(e, r);
									r = r.sibling;
								}
								s = Ir(c, e.mode, s), s.return = e, e = s;
							}
							return o(e);
						case Gf: return c = Ki(a._debugInfo), a = Ui(a), e = y(e, r, a, s), J = c, e;
					}
					if (Xf(a)) return c = Ki(a._debugInfo), e = g(e, r, a, s), J = c, e;
					if (se(a)) {
						if (c = Ki(a._debugInfo), l = se(a), typeof l != "function") throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
						var u = l.call(a);
						return u === a ? (e.tag !== 0 || Object.prototype.toString.call(e.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(u) !== "[object Generator]") && (Jv || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), Jv = !0) : a.entries !== l || qv || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qv = !0), e = v(e, r, u, s), J = c, e;
					}
					if (typeof a.then == "function") return c = Ki(a._debugInfo), e = y(e, r, D(a), s), J = c, e;
					if (a.$$typeof === Bf) return y(e, r, ui(e, a), s);
					Zi(e, a);
				}
				return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (c = "" + a, r !== null && r.tag === 6 ? (n(e, r.sibling), s = i(r, c), s.return = e, e = s) : (n(e, r), s = Pr(c, e.mode, s), s.return = e, s._debugOwner = e, s._debugTask = e._debugTask, s._debugInfo = J, e = s), o(e)) : (typeof a == "function" && $i(e, a), typeof a == "symbol" && ta(e, a), n(e, r));
			}
			return function(e, t, n, r) {
				var i = J;
				J = null;
				try {
					Kv = 0;
					var a = y(e, t, n, r);
					return Gv = null, a;
				} catch (t) {
					if (t === zv || t === Vv) throw t;
					var o = _(29, t, null, e.mode);
					o.lanes = r, o.return = e;
					var s = o._debugInfo = J;
					if (o._debugOwner = e._debugOwner, o._debugTask = e._debugTask, s != null) {
						for (var c = s.length - 1; 0 <= c; c--) if (typeof s[c].stack == "string") {
							o._debugOwner = s[c], o._debugTask = s[c].debugTask;
							break;
						}
					}
					return o;
				} finally {
					J = i;
				}
			};
		}
		function ra(e, t) {
			var n = Xf(e);
			return e = !n && typeof se(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", n, t, n), !1) : !0;
		}
		function ia(e) {
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
		function aa(e, t) {
			e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				callbacks: null
			});
		}
		function oa(e) {
			return {
				lane: e,
				tag: ey,
				payload: null,
				callback: null,
				next: null
			};
		}
		function sa(e, t, n) {
			var r = e.updateQueue;
			if (r === null) return null;
			if (r = r.shared, oy === r && !ay) {
				var i = x(e);
				console.error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.\n\nPlease update the following component: %s", i), ay = !0;
			}
			return (Z & Ib) === Fb ? (_r(e, r, t, n), xr(e)) : (i = r.pending, i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = xr(e), br(e, null, n), t);
		}
		function ca(e, t, n) {
			if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, Ke(e, n);
			}
		}
		function la(e, t) {
			var n = e.updateQueue, r = e.alternate;
			if (r !== null && (r = r.updateQueue, n === r)) {
				var i = null, a = null;
				if (n = n.firstBaseUpdate, n !== null) {
					do {
						var o = {
							lane: n.lane,
							tag: n.tag,
							payload: n.payload,
							callback: null,
							next: null
						};
						a === null ? i = a = o : a = a.next = o, n = n.next;
					} while (n !== null);
					a === null ? i = a = t : a = a.next = t;
				} else i = a = t;
				n = {
					baseState: r.baseState,
					firstBaseUpdate: i,
					lastBaseUpdate: a,
					shared: r.shared,
					callbacks: r.callbacks
				}, e.updateQueue = n;
				return;
			}
			e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
		}
		function ua() {
			if (sy) {
				var e = cv;
				if (e !== null) throw e;
			}
		}
		function da(e, t, n, r) {
			sy = !1;
			var i = e.updateQueue;
			iy = !1, oy = i.shared;
			var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
			if (s !== null) {
				i.shared.pending = null;
				var c = s, l = c.next;
				c.next = null, o === null ? a = l : o.next = l, o = c;
				var u = e.alternate;
				u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
			}
			if (a !== null) {
				var d = i.baseState;
				o = 0, u = l = c = null, s = a;
				do {
					var f = s.lane & -536870913, p = f !== s.lane;
					if (p ? ($ & f) === f : (r & f) === f) {
						f !== 0 && f === sv && (sy = !0), u !== null && (u = u.next = {
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: null,
							next: null
						});
						a: {
							f = e;
							var m = s, h = t, g = n;
							switch (m.tag) {
								case ty:
									if (m = m.payload, typeof m == "function") {
										f_ = !0;
										var _ = m.call(g, d, h);
										if (f.mode & Bg) {
											Fe(!0);
											try {
												m.call(g, d, h);
											} finally {
												Fe(!1);
											}
										}
										f_ = !1, d = _;
										break a;
									}
									d = m;
									break a;
								case ry: f.flags = f.flags & -65537 | 128;
								case ey:
									if (_ = m.payload, typeof _ == "function") {
										if (f_ = !0, m = _.call(g, d, h), f.mode & Bg) {
											Fe(!0);
											try {
												_.call(g, d, h);
											} finally {
												Fe(!1);
											}
										}
										f_ = !1;
									} else m = _;
									if (m == null) break a;
									d = R({}, d, m);
									break a;
								case ny: iy = !0;
							}
						}
						f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
					} else p = {
						lane: f,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null
					}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
					if (s = s.next, s === null) {
						if (s = i.shared.pending, s === null) break;
						p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
					}
				} while (1);
				u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), lx |= o, e.lanes = o, e.memoizedState = d;
			}
			oy = null;
		}
		function fa(e, t) {
			if (typeof e != "function") throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
			e.call(t);
		}
		function pa(e, t) {
			var n = e.shared.hiddenCallbacks;
			if (n !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++) fa(n[e], t);
		}
		function ma(e, t) {
			var n = e.callbacks;
			if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) fa(n[e], t);
		}
		function ha(e, t) {
			var n = sx;
			fe(ly, n, e), fe(cy, t, e), sx = n | t.baseLanes;
		}
		function ga(e) {
			fe(ly, sx, e), fe(cy, cy.current, e);
		}
		function _a(e) {
			sx = ly.current, de(cy, e), de(ly, e);
		}
		function va(e) {
			var t = e.alternate;
			fe(my, my.current & fy, e), fe(uy, e, e), dy === null && (t === null || cy.current !== null || t.memoizedState !== null) && (dy = e);
		}
		function ya(e) {
			fe(my, my.current, e), fe(uy, e, e), dy === null && (dy = e);
		}
		function ba(e) {
			e.tag === 22 ? (fe(my, my.current, e), fe(uy, e, e), dy === null && (dy = e)) : xa(e);
		}
		function xa(e) {
			fe(my, my.current, e), fe(uy, uy.current, e);
		}
		function Sa(e) {
			de(uy, e), dy === e && (dy = null), de(my, e);
		}
		function Ca(e) {
			for (var t = e; t !== null;) {
				if (t.tag === 13) {
					var n = t.memoizedState;
					if (n !== null && (n = n.dehydrated, n === null || vd(n) || yd(n))) return t;
				} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
					if (t.flags & 128) return t;
				} else if (t.child !== null) {
					t.child.return = t, t = t.child;
					continue;
				}
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return null;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
			return null;
		}
		function O() {
			var e = X;
			Iy === null ? Iy = [e] : Iy.push(e);
		}
		function k() {
			var e = X;
			if (Iy !== null && (Ly++, Iy[Ly] !== e)) {
				var t = x(Y);
				if (!xy.has(t) && (xy.add(t), Iy !== null)) {
					for (var n = "", r = 0; r <= Ly; r++) {
						var i = Iy[r], a = r === Ly ? e : i;
						for (i = r + 1 + ". " + i; 30 > i.length;) i += " ";
						i += a + "\n", n += i;
					}
					console.error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", t, n);
				}
			}
		}
		function wa(e) {
			e == null || Xf(e) || console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", X, typeof e);
		}
		function Ta() {
			var e = x(Y);
			wy.has(e) || (wy.add(e), console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.", e));
		}
		function Ea() {
			throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
		}
		function Da(e, t) {
			if (Ry) return !1;
			if (t === null) return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", X), !1;
			e.length !== t.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", X, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
			for (var n = 0; n < t.length && n < e.length; n++) if (!Kh(e[n], t[n])) return !1;
			return !0;
		}
		function Oa(e, t, n, r, i, a) {
			Ty = a, Y = t, Iy = e === null ? null : e._debugHookTypes, Ly = -1, Ry = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (a = x(Y), Cy.has(a) || (Cy.add(a), console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.", a === null ? "An unknown Component" : "<" + a + ">"))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e !== null && e.memoizedState !== null ? Hy : Iy === null ? By : Vy, Ay = a = (t.mode & Bg) !== U;
			var o = Sv(n, r, i);
			if (Ay = !1, ky && (o = Aa(t, n, r, i)), a) {
				Fe(!0);
				try {
					o = Aa(t, n, r, i);
				} finally {
					Fe(!1);
				}
			}
			return ka(e, t), o;
		}
		function ka(e, t) {
			t._debugHookTypes = Iy, t.dependencies === null ? Ny !== null && (t.dependencies = {
				lanes: 0,
				firstContext: null,
				_debugThenableState: Ny
			}) : t.dependencies._debugThenableState = Ny, z.H = zy;
			var n = Ey !== null && Ey.next !== null;
			if (Ty = 0, Iy = X = Dy = Ey = Y = null, Ly = -1, e !== null && (e.flags & 65011712) != (t.flags & 65011712) && console.error("Internal React error: Expected static flag was missing. Please notify the React team."), Oy = !1, My = 0, Ny = null, n) throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
			e === null || cb || (e = e.dependencies, e !== null && ci(e) && (cb = !0)), Wv ? (Wv = !1, e = !0) : e = !1, e && (t = x(t) || "Unknown", Sy.has(t) || Cy.has(t) || (Sy.add(t), console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")));
		}
		function Aa(e, t, n, r) {
			Y = e;
			var i = 0;
			do {
				if (ky && (Ny = null), My = 0, ky = !1, i >= Fy) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
				if (i += 1, Ry = !1, Dy = Ey = null, e.updateQueue != null) {
					var a = e.updateQueue;
					a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
				}
				Ly = -1, z.H = Uy, a = Sv(t, n, r);
			} while (ky);
			return a;
		}
		function ja() {
			var e = z.H, t = e.useState()[0];
			return t = typeof t.then == "function" ? La(t) : t, e = e.useState()[0], (Ey === null ? null : Ey.memoizedState) !== e && (Y.flags |= 1024), t;
		}
		function Ma() {
			var e = jy !== 0;
			return jy = 0, e;
		}
		function Na(e, t, n) {
			t.updateQueue = e.updateQueue, t.flags = (t.mode & Vg) === U ? t.flags & -2053 : t.flags & -402655237, e.lanes &= ~n;
		}
		function Pa(e) {
			if (Oy) {
				for (e = e.memoizedState; e !== null;) {
					var t = e.queue;
					t !== null && (t.pending = null), e = e.next;
				}
				Oy = !1;
			}
			Ty = 0, Iy = Dy = Ey = Y = null, Ly = -1, X = null, ky = !1, My = jy = 0, Ny = null;
		}
		function Fa() {
			var e = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			return Dy === null ? Y.memoizedState = Dy = e : Dy = Dy.next = e, Dy;
		}
		function A() {
			if (Ey === null) {
				var e = Y.alternate;
				e = e === null ? null : e.memoizedState;
			} else e = Ey.next;
			var t = Dy === null ? Y.memoizedState : Dy.next;
			if (t !== null) Dy = t, Ey = e;
			else {
				if (e === null) throw Y.alternate === null ? Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.") : Error("Rendered more hooks than during the previous render.");
				Ey = e, e = {
					memoizedState: Ey.memoizedState,
					baseState: Ey.baseState,
					baseQueue: Ey.baseQueue,
					queue: Ey.queue,
					next: null
				}, Dy === null ? Y.memoizedState = Dy = e : Dy = Dy.next = e;
			}
			return Dy;
		}
		function Ia() {
			return {
				lastEffect: null,
				events: null,
				stores: null,
				memoCache: null
			};
		}
		function La(e) {
			var t = My;
			return My += 1, Ny === null && (Ny = Bi()), e = Hi(Ny, e, t), t = Y, (Dy === null ? t.memoizedState : Dy.next) === null && (t = t.alternate, z.H = t !== null && t.memoizedState !== null ? Hy : By), e;
		}
		function Ra(e) {
			if (typeof e == "object" && e) {
				if (typeof e.then == "function") return La(e);
				if (e.$$typeof === Bf) return E(e);
			}
			throw Error("An unsupported type was passed to use(): " + String(e));
		}
		function za(e) {
			var t = null, n = Y.updateQueue;
			if (n !== null && (t = n.memoCache), t == null) {
				var r = Y.alternate;
				r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
					data: r.data.map(function(e) {
						return e.slice();
					}),
					index: 0
				})));
			}
			if (t ??= {
				data: [],
				index: 0
			}, n === null && (n = Ia(), Y.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || Ry) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = qf;
			else n.length !== e && console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.", n.length, e);
			return t.index++, n;
		}
		function Ba(e, t) {
			return typeof t == "function" ? t(e) : t;
		}
		function Va(e, t, n) {
			var r = Fa();
			if (n !== void 0) {
				var i = n(t);
				if (Ay) {
					Fe(!0);
					try {
						n(t);
					} finally {
						Fe(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Yo.bind(null, Y, e), [r.memoizedState, e];
		}
		function Ha(e) {
			return Ua(A(), Ey, e);
		}
		function Ua(e, t, n) {
			var r = e.queue;
			if (r === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
			r.lastRenderedReducer = n;
			var i = e.baseQueue, a = r.pending;
			if (a !== null) {
				if (i !== null) {
					var o = i.next;
					i.next = a.next, a.next = o;
				}
				t.baseQueue !== i && console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), t.baseQueue = i = a, r.pending = null;
			}
			if (a = e.baseState, i === null) e.memoizedState = a;
			else {
				t = i.next;
				var s = o = null, c = null, l = t, u = !1;
				do {
					var d = l.lane & -536870913;
					if (d === l.lane ? (Ty & d) === d : ($ & d) === d) {
						var f = l.revertLane;
						if (f === 0) c !== null && (c = c.next = {
							lane: 0,
							revertLane: 0,
							gesture: null,
							action: l.action,
							hasEagerState: l.hasEagerState,
							eagerState: l.eagerState,
							next: null
						}), d === sv && (u = !0);
						else if ((Ty & f) === f) {
							l = l.next, f === sv && (u = !0);
							continue;
						} else d = {
							lane: 0,
							revertLane: l.revertLane,
							gesture: null,
							action: l.action,
							hasEagerState: l.hasEagerState,
							eagerState: l.eagerState,
							next: null
						}, c === null ? (s = c = d, o = a) : c = c.next = d, Y.lanes |= f, lx |= f;
						d = l.action, Ay && n(a, d), a = l.hasEagerState ? l.eagerState : n(a, d);
					} else f = {
						lane: d,
						revertLane: l.revertLane,
						gesture: l.gesture,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					}, c === null ? (s = c = f, o = a) : c = c.next = f, Y.lanes |= d, lx |= d;
					l = l.next;
				} while (l !== null && l !== t);
				if (c === null ? o = a : c.next = s, !Kh(a, e.memoizedState) && (cb = !0, u && (n = cv, n !== null))) throw n;
				e.memoizedState = a, e.baseState = o, e.baseQueue = c, r.lastRenderedState = a;
			}
			return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
		}
		function Wa(e) {
			var t = A(), n = t.queue;
			if (n === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
			n.lastRenderedReducer = e;
			var r = n.dispatch, i = n.pending, a = t.memoizedState;
			if (i !== null) {
				n.pending = null;
				var o = i = i.next;
				do
					a = e(a, o.action), o = o.next;
				while (o !== i);
				Kh(a, t.memoizedState) || (cb = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
			}
			return [a, r];
		}
		function Ga(e, t, n) {
			var r = Y, i = Fa();
			if (G) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				var a = n();
				by || a === n() || (console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"), by = !0);
			} else {
				if (a = t(), by || (n = t(), Kh(a, n) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), by = !0)), Gb === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				$ & 127 || qa(r, t, a);
			}
			return i.memoizedState = a, n = {
				value: a,
				getSnapshot: t
			}, i.queue = n, xo(Ya.bind(null, r, n, e), [e]), r.flags |= 2048, _o(gy | yy, { destroy: void 0 }, Ja.bind(null, r, n, a, t), null), a;
		}
		function Ka(e, t, n) {
			var r = Y, i = A(), a = G;
			if (a) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				n = n();
			} else if (n = t(), !by) {
				var o = t();
				Kh(n, o) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), by = !0);
			}
			if ((o = !Kh((Ey || i).memoizedState, n)) && (i.memoizedState = n, cb = !0), i = i.queue, bo(2048, yy, Ya.bind(null, r, i, e), [e]), i.getSnapshot !== t || o || Dy !== null && Dy.memoizedState.tag & gy) {
				if (r.flags |= 2048, _o(gy | yy, { destroy: void 0 }, Ja.bind(null, r, i, n, t), null), Gb === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				a || Ty & 127 || qa(r, t, n);
			}
			return n;
		}
		function qa(e, t, n) {
			e.flags |= 16384, e = {
				getSnapshot: t,
				value: n
			}, t = Y.updateQueue, t === null ? (t = Ia(), Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
		}
		function Ja(e, t, n, r) {
			t.value = n, t.getSnapshot = r, Xa(t) && Za(e);
		}
		function Ya(e, t, n) {
			return n(function() {
				Xa(t) && (hi(2, "updateSyncExternalStore()", e), Za(e));
			});
		}
		function Xa(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !Kh(e, n);
			} catch {
				return !0;
			}
		}
		function Za(e) {
			var t = yr(e, 2);
			t !== null && cl(t, e, 2);
		}
		function Qa(e) {
			var t = Fa();
			if (typeof e == "function") {
				var n = e;
				if (e = n(), Ay) {
					Fe(!0);
					try {
						n();
					} finally {
						Fe(!1);
					}
				}
			}
			return t.memoizedState = t.baseState = e, t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ba,
				lastRenderedState: e
			}, t;
		}
		function $a(e) {
			e = Qa(e);
			var t = e.queue, n = Xo.bind(null, Y, t);
			return t.dispatch = n, [e.memoizedState, n];
		}
		function eo(e) {
			var t = Fa();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Qo.bind(null, Y, !0, n), n.dispatch = t, [e, t];
		}
		function to(e, t) {
			return no(A(), Ey, e, t);
		}
		function no(e, t, n, r) {
			return e.baseState = n, Ua(e, Ey, typeof r == "function" ? r : Ba);
		}
		function ro(e, t) {
			var n = A();
			return Ey === null ? (n.baseState = e, [e, n.queue.dispatch]) : no(n, Ey, e, t);
		}
		function io(e, t, n, r, i) {
			if ($o(e)) throw Error("Cannot update form state while rendering.");
			if (e = t.action, e !== null) {
				var a = {
					payload: i,
					action: e,
					next: null,
					isTransition: !0,
					status: "pending",
					value: null,
					reason: null,
					listeners: [],
					then: function(e) {
						a.listeners.push(e);
					}
				};
				z.T === null ? a.isTransition = !1 : n(!0), r(a), n = t.pending, n === null ? (a.next = t.pending = a, ao(t, a)) : (a.next = n.next, t.pending = n.next = a);
			}
		}
		function ao(e, t) {
			var n = t.action, r = t.payload, i = e.state;
			if (t.isTransition) {
				var a = z.T, o = {};
				o._updatedFibers = /* @__PURE__ */ new Set(), z.T = o;
				try {
					var s = n(i, r), c = z.S;
					c !== null && c(o, s), oo(e, t, s);
				} catch (n) {
					co(e, t, n);
				} finally {
					a !== null && o.types !== null && (a.types !== null && a.types !== o.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), a.types = o.types), z.T = a, a === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
				}
			} else try {
				o = n(i, r), oo(e, t, o);
			} catch (n) {
				co(e, t, n);
			}
		}
		function oo(e, t, n) {
			typeof n == "object" && n && typeof n.then == "function" ? (z.asyncTransitions++, n.then(Lo, Lo), n.then(function(n) {
				so(e, t, n);
			}, function(n) {
				return co(e, t, n);
			}), t.isTransition || console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")) : so(e, t, n);
		}
		function so(e, t, n) {
			t.status = "fulfilled", t.value = n, lo(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ao(e, n)));
		}
		function co(e, t, n) {
			var r = e.pending;
			if (e.pending = null, r !== null) {
				r = r.next;
				do
					t.status = "rejected", t.reason = n, lo(t), t = t.next;
				while (t !== r);
			}
			e.action = null;
		}
		function lo(e) {
			e = e.listeners;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
		function uo(e, t) {
			return t;
		}
		function fo(e, t) {
			if (G) {
				var n = Gb.formState;
				if (n !== null) {
					a: {
						var r = Y;
						if (G) {
							if (t_) {
								b: {
									for (var i = t_, a = a_; i.nodeType !== 8;) {
										if (!a) {
											i = null;
											break b;
										}
										if (i = xd(i.nextSibling), i === null) {
											i = null;
											break b;
										}
									}
									a = i.data, i = a === BS || a === VS ? i : null;
								}
								if (i) {
									t_ = xd(i.nextSibling), r = i.data === BS;
									break a;
								}
							}
							Jr(r);
						}
						r = !1;
					}
					r && (t = n[0]);
				}
			}
			return n = Fa(), n.memoizedState = n.baseState = t, r = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: uo,
				lastRenderedState: t
			}, n.queue = r, n = Xo.bind(null, Y, r), r.dispatch = n, r = Qa(!1), a = Qo.bind(null, Y, !1, r.queue), r = Fa(), i = {
				state: t,
				dispatch: null,
				action: e,
				pending: null
			}, r.queue = i, n = io.bind(null, Y, i, a, n), i.dispatch = n, r.memoizedState = e, [
				t,
				n,
				!1
			];
		}
		function po(e) {
			return mo(A(), Ey, e);
		}
		function mo(e, t, n) {
			if (t = Ua(e, t, uo)[0], e = Ha(Ba)[0], typeof t == "object" && t && typeof t.then == "function") try {
				var r = La(t);
			} catch (e) {
				throw e === zv ? Vv : e;
			}
			else r = t;
			t = A();
			var i = t.queue, a = i.dispatch;
			return n !== t.memoizedState && (Y.flags |= 2048, _o(gy | yy, { destroy: void 0 }, ho.bind(null, i, n), null)), [
				r,
				a,
				e
			];
		}
		function ho(e, t) {
			e.action = t;
		}
		function go(e) {
			var t = A(), n = Ey;
			if (n !== null) return mo(t, n, e);
			A(), t = t.memoizedState, n = A();
			var r = n.queue.dispatch;
			return n.memoizedState = e, [
				t,
				r,
				!1
			];
		}
		function _o(e, t, n, r) {
			return e = {
				tag: e,
				create: n,
				deps: r,
				inst: t,
				next: null
			}, t = Y.updateQueue, t === null && (t = Ia(), Y.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
		}
		function vo(e) {
			var t = Fa();
			return e = { current: e }, t.memoizedState = e;
		}
		function yo(e, t, n, r) {
			var i = Fa();
			Y.flags |= e, i.memoizedState = _o(gy | t, { destroy: void 0 }, n, r === void 0 ? null : r);
		}
		function bo(e, t, n, r) {
			var i = A();
			r = r === void 0 ? null : r;
			var a = i.memoizedState.inst;
			Ey !== null && r !== null && Da(r, Ey.memoizedState.deps) ? i.memoizedState = _o(t, a, n, r) : (Y.flags |= e, i.memoizedState = _o(gy | t, a, n, r));
		}
		function xo(e, t) {
			(Y.mode & Vg) === U ? yo(8390656, yy, e, t) : yo(276826112, yy, e, t);
		}
		function So(e) {
			Y.flags |= 4;
			var t = Y.updateQueue;
			if (t === null) t = Ia(), Y.updateQueue = t, t.events = [e];
			else {
				var n = t.events;
				n === null ? t.events = [e] : n.push(e);
			}
		}
		function Co(e) {
			var t = Fa(), n = { impl: e };
			return t.memoizedState = n, function() {
				if ((Z & Ib) !== Fb) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
				return n.impl.apply(void 0, arguments);
			};
		}
		function wo(e) {
			var t = A().memoizedState;
			return So({
				ref: t,
				nextImpl: e
			}), function() {
				if ((Z & Ib) !== Fb) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
				return t.impl.apply(void 0, arguments);
			};
		}
		function j(e, t) {
			var n = 4194308;
			return (Y.mode & Vg) !== U && (n |= 134217728), yo(n, vy, e, t);
		}
		function To(e, t) {
			if (typeof t == "function") {
				e = e();
				var n = t(e);
				return function() {
					typeof n == "function" ? n() : t(null);
				};
			}
			if (t != null) return t.hasOwnProperty("current") || console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(t).join(", ") + "}"), e = e(), t.current = e, function() {
				t.current = null;
			};
		}
		function Eo(e, t, n) {
			typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t === null ? "null" : typeof t), n = n == null ? null : n.concat([e]);
			var r = 4194308;
			(Y.mode & Vg) !== U && (r |= 134217728), yo(r, vy, To.bind(null, t, e), n);
		}
		function Do(e, t, n) {
			typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t === null ? "null" : typeof t), n = n == null ? null : n.concat([e]), bo(4, vy, To.bind(null, t, e), n);
		}
		function Oo(e, t) {
			return Fa().memoizedState = [e, t === void 0 ? null : t], e;
		}
		function ko(e, t) {
			var n = A();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			return t !== null && Da(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
		}
		function Ao(e, t) {
			var n = Fa();
			t = t === void 0 ? null : t;
			var r = e();
			if (Ay) {
				Fe(!0);
				try {
					e();
				} finally {
					Fe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		}
		function jo(e, t) {
			var n = A();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			if (t !== null && Da(t, r[1])) return r[0];
			if (r = e(), Ay) {
				Fe(!0);
				try {
					e();
				} finally {
					Fe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		}
		function Mo(e, t) {
			return Fo(Fa(), e, t);
		}
		function No(e, t) {
			return Io(A(), Ey.memoizedState, e, t);
		}
		function Po(e, t) {
			var n = A();
			return Ey === null ? Fo(n, e, t) : Io(n, Ey.memoizedState, e, t);
		}
		function Fo(e, t, n) {
			return n === void 0 || Ty & 1073741824 && !($ & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = sl(), Y.lanes |= e, lx |= e, n);
		}
		function Io(e, t, n, r) {
			return Kh(n, t) ? n : cy.current === null ? !(Ty & 42) || Ty & 1073741824 && !($ & 261930) ? (cb = !0, e.memoizedState = n) : (e = sl(), Y.lanes |= e, lx |= e, t) : (e = Fo(e, n, r), Kh(e, t) || (cb = !0), e);
		}
		function Lo() {
			z.asyncTransitions--;
		}
		function Ro(e, t, n, r, i) {
			var a = B.p;
			B.p = a !== 0 && a < Wp ? a : Wp;
			var o = z.T, s = {};
			s._updatedFibers = /* @__PURE__ */ new Set(), z.T = s, Qo(e, !1, t, n);
			try {
				var c = i(), l = z.S;
				if (l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function") {
					z.asyncTransitions++, c.then(Lo, Lo);
					var u = Ii(c, r);
					Zo(e, t, u, ol(e));
				} else Zo(e, t, r, ol(e));
			} catch (n) {
				Zo(e, t, {
					then: function() {},
					status: "rejected",
					reason: n
				}, ol(e));
			} finally {
				B.p = a, o !== null && s.types !== null && (o.types !== null && o.types !== s.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), o.types = s.types), z.T = o, o === null && s._updatedFibers && (e = s._updatedFibers.size, s._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
			}
		}
		function zo(e, t, n, r) {
			if (e.tag !== 5) throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");
			var i = Bo(e).queue;
			gi(e), Ro(e, i, t, bC, n === null ? m : function() {
				return Vo(e), n(r);
			});
		}
		function Bo(e) {
			var t = e.memoizedState;
			if (t !== null) return t;
			t = {
				memoizedState: bC,
				baseState: bC,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ba,
					lastRenderedState: bC
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
					lastRenderedReducer: Ba,
					lastRenderedState: n
				},
				next: null
			}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
		}
		function Vo(e) {
			z.T === null && console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");
			var t = Bo(e);
			t.next === null && (t = e.alternate.memoizedState), Zo(e, t.next.queue, {}, ol(e));
		}
		function Ho() {
			var e = Qa(!1);
			return e = Ro.bind(null, Y, e.queue, !0, !1), Fa().memoizedState = e, [!1, e];
		}
		function Uo() {
			var e = Ha(Ba)[0], t = A().memoizedState;
			return [typeof e == "boolean" ? e : La(e), t];
		}
		function Wo() {
			var e = Wa(Ba)[0], t = A().memoizedState;
			return [typeof e == "boolean" ? e : La(e), t];
		}
		function Go() {
			return E(xC);
		}
		function Ko() {
			var e = Fa(), t = Gb.identifierPrefix;
			if (G) {
				var n = $g, r = Qg;
				n = (r & ~(1 << 32 - Lp(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = jy++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Py++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		}
		function qo() {
			return Fa().memoizedState = Jo.bind(null, Y);
		}
		function Jo(e, t) {
			for (var n = e.return; n !== null;) {
				switch (n.tag) {
					case 24:
					case 3:
						var r = ol(n), i = oa(r), a = sa(n, i, r);
						a !== null && (hi(r, "refresh()", e), cl(a, n, r), ca(a, n, r)), e = fi(), t != null && a !== null && console.error("The seed argument is not enabled outside experimental channels."), i.payload = { cache: e };
						return;
				}
				n = n.return;
			}
		}
		function Yo(e, t, n) {
			var r = arguments;
			typeof r[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), r = ol(e);
			var i = {
				lane: r,
				revertLane: 0,
				gesture: null,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			$o(e) ? es(t, i) : (i = vr(e, t, i, r), i !== null && (hi(r, "dispatch()", e), cl(i, e, r), ts(i, t, r)));
		}
		function Xo(e, t, n) {
			var r = arguments;
			typeof r[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), r = ol(e), Zo(e, t, n, r) && hi(r, "setState()", e);
		}
		function Zo(e, t, n, r) {
			var i = {
				lane: r,
				revertLane: 0,
				gesture: null,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			if ($o(e)) es(t, i);
			else {
				var a = e.alternate;
				if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) {
					var o = z.H;
					z.H = Gy;
					try {
						var s = t.lastRenderedState, c = a(s, n);
						if (i.hasEagerState = !0, i.eagerState = c, Kh(c, s)) return _r(e, t, i, 0), Gb === null && gr(), !1;
					} catch {} finally {
						z.H = o;
					}
				}
				if (n = vr(e, t, i, r), n !== null) return cl(n, e, r), ts(n, t, r), !0;
			}
			return !1;
		}
		function Qo(e, t, n, r) {
			if (z.T === null && sv === 0 && console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."), r = {
				lane: 2,
				revertLane: ou(),
				gesture: null,
				action: r,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, $o(e)) {
				if (t) throw Error("Cannot update optimistic state while rendering.");
				console.error("Cannot call startTransition while rendering.");
			} else t = vr(e, n, r, 2), t !== null && (hi(2, "setOptimistic()", e), cl(t, e, 2));
		}
		function $o(e) {
			var t = e.alternate;
			return e === Y || t !== null && t === Y;
		}
		function es(e, t) {
			ky = Oy = !0;
			var n = e.pending;
			n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
		}
		function ts(e, t, n) {
			if (n & 4194048) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, Ke(e, n);
			}
		}
		function ns(e) {
			if (e !== null && typeof e != "function") {
				var t = String(e);
				rb.has(t) || (rb.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
			}
		}
		function rs(e, t, n, r) {
			var i = e.memoizedState, a = n(r, i);
			if (e.mode & Bg) {
				Fe(!0);
				try {
					a = n(r, i);
				} finally {
					Fe(!1);
				}
			}
			a === void 0 && (t = ce(t) || "Component", $y.has(t) || ($y.add(t), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t))), i = a == null ? i : R({}, i, a), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
		}
		function is(e, t, n, r, i, a, o) {
			var s = e.stateNode;
			if (typeof s.shouldComponentUpdate == "function") {
				if (n = s.shouldComponentUpdate(r, a, o), e.mode & Bg) {
					Fe(!0);
					try {
						n = s.shouldComponentUpdate(r, a, o);
					} finally {
						Fe(!1);
					}
				}
				return n === void 0 && console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ce(t) || "Component"), n;
			}
			return t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(i, a) : !0;
		}
		function as(e, t, n, r) {
			var i = t.state;
			typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== i && (e = x(e) || "Component", Jy.has(e) || (Jy.add(e), console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", e)), ib.enqueueReplaceState(t, t.state, null));
		}
		function os(e, t) {
			var n = t;
			if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
			if (e = e.defaultProps) for (var i in n === t && (n = R({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
			return n;
		}
		function ss(e) {
			mg(e), console.warn("%s\n\n%s\n", ab ? "An error occurred in the <" + ab + "> component." : "An error occurred in one of your React components.", "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://react.dev/link/error-boundaries to learn more about error boundaries.");
		}
		function cs(e) {
			var t = ab ? "The above error occurred in the <" + ab + "> component." : "The above error occurred in one of your React components.", n = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((ob || "Anonymous") + ".");
			if (typeof e == "object" && e && typeof e.environmentName == "string") {
				var r = e.environmentName;
				e = [
					"%o\n\n%s\n\n%s\n",
					e,
					t,
					n
				].slice(0), typeof e[0] == "string" ? e.splice(0, 1, SC + " " + e[0], CC, TC + r + TC, wC) : e.splice(0, 0, SC, CC, TC + r + TC, wC), e.unshift(console), r = EC.apply(console.error, e), r();
			} else console.error("%o\n\n%s\n\n%s\n", e, t, n);
		}
		function ls(e) {
			mg(e);
		}
		function us(e, t) {
			try {
				ab = t.source ? x(t.source) : null, ob = null;
				var n = t.value;
				if (z.actQueue !== null) z.thrownErrors.push(n);
				else {
					var r = e.onUncaughtError;
					r(n, { componentStack: t.stack });
				}
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		function ds(e, t, n) {
			try {
				ab = n.source ? x(n.source) : null, ob = x(t);
				var r = e.onCaughtError;
				r(n.value, {
					componentStack: n.stack,
					errorBoundary: t.tag === 1 ? t.stateNode : null
				});
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		function fs(e, t, n) {
			return n = oa(n), n.tag = ry, n.payload = { element: null }, n.callback = function() {
				T(t.source, us, e, t);
			}, n;
		}
		function ps(e) {
			return e = oa(e), e.tag = ry, e;
		}
		function ms(e, t, n, r) {
			var i = n.type.getDerivedStateFromError;
			if (typeof i == "function") {
				var a = r.value;
				e.payload = function() {
					return i(a);
				}, e.callback = function() {
					Tr(n), T(r.source, ds, t, n, r);
				};
			}
			var o = n.stateNode;
			o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
				Tr(n), T(r.source, ds, t, n, r), typeof i != "function" && (wx === null ? wx = /* @__PURE__ */ new Set([this]) : wx.add(this)), Av(this, r), typeof i == "function" || !(n.lanes & 2) && console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", x(n) || "Unknown");
			});
		}
		function hs(e, t, n, r, i) {
			if (n.flags |= 32768, Ip && Zl(e, i), typeof r == "object" && r && typeof r.then == "function") {
				if (t = n.alternate, t !== null && si(t, n, i, !0), G && (n_ = !0), n = uy.current, n !== null) {
					switch (n.tag) {
						case 31:
						case 13: return dy === null ? Sl() : n.alternate === null && cx === Rb && (cx = Vb), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === Hv ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Hl(e, r, i)), !1;
						case 22: return n.flags |= 65536, r === Hv ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
							transitions: null,
							markerInstances: null,
							retryQueue: /* @__PURE__ */ new Set([r])
						}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Hl(e, r, i)), !1;
					}
					throw Error("Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React.");
				}
				return Hl(e, r, i), Sl(), !1;
			}
			if (G) return n_ = !0, t = uy.current, t === null ? (r !== o_ && ei(Lr(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.", { cause: r }), n)), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = Lr(r, n), i = fs(e.stateNode, r, i), la(e, i), cx !== Hb && (cx = Bb)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== o_ && ei(Lr(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.", { cause: r }), n))), !1;
			var a = Lr(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", { cause: r }), n);
			if (mx === null ? mx = [a] : mx.push(a), cx !== Hb && (cx = Bb), t === null) return !0;
			r = Lr(r, n), n = t;
			do {
				switch (n.tag) {
					case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = fs(n.stateNode, r, e), la(n, e), !1;
					case 1: if (t = n.type, a = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (wx === null || !wx.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = ps(i), ms(i, e, n, r), la(n, i), !1;
				}
				n = n.return;
			} while (n !== null);
			return !1;
		}
		function gs(e, t, n, r) {
			t.child = e === null ? $v(t, null, n, r) : Qv(t, e.child, n, r);
		}
		function _s(e, t, n, r, i) {
			n = n.render;
			var a = t.ref;
			if ("ref" in r) {
				var o = {};
				for (var s in r) s !== "ref" && (o[s] = r[s]);
			} else o = r;
			return li(t), r = Oa(e, t, n, o, a, i), s = Ma(), e !== null && !cb ? (Na(e, t, i), Vs(e, t, i)) : (G && s && Br(t), t.flags |= 1, gs(e, t, r, i), t.child);
		}
		function vs(e, t, n, r, i) {
			if (e === null) {
				var a = n.type;
				return typeof a == "function" && !Or(a) && a.defaultProps === void 0 && n.compare === null ? (n = Sr(a), t.tag = 15, t.type = n, js(t, a), ys(e, t, n, r, i)) : (e = jr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
			}
			if (a = e.child, !Hs(e, i)) {
				var o = a.memoizedProps;
				if (n = n.compare, n = n === null ? Hn : n, n(o, r) && e.ref === t.ref) return Vs(e, t, i);
			}
			return t.flags |= 1, e = kr(a, r), e.ref = t.ref, e.return = t, t.child = e;
		}
		function ys(e, t, n, r, i) {
			if (e !== null) {
				var a = e.memoizedProps;
				if (Hn(a, r) && e.ref === t.ref && t.type === e.type) if (cb = !1, t.pendingProps = r = a, Hs(e, i)) e.flags & 131072 && (cb = !0);
				else return t.lanes = e.lanes, Vs(e, t, i);
			}
			return Ds(e, t, n, r, i);
		}
		function bs(e, t, n, r) {
			var i = r.children, a = e === null ? null : e.memoizedState;
			if (e === null && t.stateNode === null && (t.stateNode = {
				_visibility: jg,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), r.mode === "hidden") {
				if (t.flags & 128) {
					if (a = a === null ? n : a.baseLanes | n, e !== null) {
						for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
						r = i & ~a;
					} else r = 0, t.child = null;
					return Ss(e, t, a, n, r);
				}
				if (n & 536870912) t.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, e !== null && Ri(t, a === null ? null : a.cachePool), a === null ? ga(t) : ha(t, a), ba(t);
				else return r = t.lanes = 536870912, Ss(e, t, a === null ? n : a.baseLanes | n, n, r);
			} else a === null ? (e !== null && Ri(t, null), ga(t), xa(t)) : (Ri(t, a.cachePool), ha(t, a), xa(t), t.memoizedState = null);
			return gs(e, t, i, n), t.child;
		}
		function xs(e, t) {
			return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
				_visibility: jg,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), t.sibling;
		}
		function Ss(e, t, n, r, i) {
			var a = Li();
			return a = a === null ? null : {
				parent: g_._currentValue,
				pool: a
			}, t.memoizedState = {
				baseLanes: n,
				cachePool: a
			}, e !== null && Ri(t, null), ga(t), ba(t), e !== null && si(e, t, r, !0), t.childLanes = i, null;
		}
		function Cs(e, t) {
			var n = t.hidden;
			return n !== void 0 && console.error("<Activity> doesn't accept a hidden prop. Use mode=\"hidden\" instead.\n- <Activity %s>\n+ <Activity %s>", !0 === n ? "hidden" : !1 === n ? "hidden={false}" : "hidden={...}", n ? "mode=\"hidden\"" : "mode=\"visible\""), t = Is({
				mode: t.mode,
				children: t.children
			}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
		}
		function ws(e, t, n) {
			return Qv(t, e.child, null, n), e = Cs(t, t.pendingProps), e.flags |= 2, Sa(t), t.memoizedState = null, e;
		}
		function Ts(e, t, n) {
			var r = t.pendingProps, i = (t.flags & 128) != 0;
			if (t.flags &= -129, e === null) {
				if (G) {
					if (r.mode === "hidden") return e = Cs(t, r), t.lanes = 536870912, xs(null, e);
					if (ya(t), (e = t_) ? (n = _d(e, a_), n = n !== null && n.data === AS ? n : null, n !== null && (r = {
						dehydrated: n,
						treeContext: Hr(),
						retryLane: 536870912,
						hydrationErrors: null
					}, t.memoizedState = r, r = Fr(n), r.return = t, t.child = r, e_ = t, t_ = null)) : n = null, n === null) throw qr(t, e), Jr(t);
					return t.lanes = 536870912, null;
				}
				return Cs(t, r);
			}
			var a = e.memoizedState;
			if (a !== null) {
				var o = a.dehydrated;
				if (ya(t), i) if (t.flags & 256) t.flags &= -257, t = ws(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
				else if (Kr(), n & 536870912 && xl(t), cb || si(e, t, n, !1), i = (n & e.childLanes) !== 0, cb || i) {
					if (r = Gb, r !== null && (o = qe(r, n), o !== 0 && o !== a.retryLane)) throw a.retryLane = o, yr(e, o), cl(r, e, o), sb;
					Sl(), t = ws(e, t, n);
				} else e = a.treeContext, t_ = xd(o.nextSibling), e_ = t, G = !0, i_ = null, n_ = !1, r_ = null, a_ = !1, e !== null && Ur(t, e), t = Cs(t, r), t.flags |= 4096;
				return t;
			}
			return a = e.child, r = {
				mode: r.mode,
				children: r.children
			}, n & 536870912 && (n & e.lanes) !== 0 && xl(t), e = kr(a, r), e.ref = t.ref, t.child = e, e.return = t, e;
		}
		function Es(e, t) {
			var n = t.ref;
			if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
			else {
				if (typeof n != "function" && typeof n != "object") throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
				(e === null || e.ref !== n) && (t.flags |= 4194816);
			}
		}
		function Ds(e, t, n, r, i) {
			if (n.prototype && typeof n.prototype.render == "function") {
				var a = ce(n) || "Unknown";
				lb[a] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", a, a), lb[a] = !0);
			}
			return t.mode & Bg && dv.recordLegacyContextWarning(t, null), e === null && (js(t, t.type), n.contextTypes && (a = ce(n) || "Unknown", db[a] || (db[a] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", a)))), li(t), n = Oa(e, t, n, r, void 0, i), r = Ma(), e !== null && !cb ? (Na(e, t, i), Vs(e, t, i)) : (G && r && Br(t), t.flags |= 1, gs(e, t, n, i), t.child);
		}
		function Os(e, t, n, r, i, a) {
			return li(t), Ly = -1, Ry = e !== null && e.type !== t.type, t.updateQueue = null, n = Aa(t, r, n, i), ka(e, t), r = Ma(), e !== null && !cb ? (Na(e, t, a), Vs(e, t, a)) : (G && r && Br(t), t.flags |= 1, gs(e, t, n, a), t.child);
		}
		function ks(e, t, n, r, i) {
			switch (d(t)) {
				case !1:
					var a = t.stateNode, o = new t.type(t.memoizedProps, a.context).state;
					a.updater.enqueueSetState(a, o, null);
					break;
				case !0:
					t.flags |= 128, t.flags |= 65536, a = Error("Simulated error coming from DevTools");
					var s = i & -i;
					if (t.lanes |= s, o = Gb, o === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
					s = ps(s), ms(s, o, t, Lr(a, t)), la(t, s);
			}
			if (li(t), t.stateNode === null) {
				if (o = Ig, a = n.contextType, "contextType" in n && a !== null && (a === void 0 || a.$$typeof !== Bf) && !nb.has(n) && (nb.add(n), s = a === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof a == "object" ? a.$$typeof === zf ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(a).join(", ") + "}." : " However, it is set to a " + typeof a + ".", console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ce(n) || "Component", s)), typeof a == "object" && a && (o = E(a)), a = new n(r, o), t.mode & Bg) {
					Fe(!0);
					try {
						a = new n(r, o);
					} finally {
						Fe(!1);
					}
				}
				if (o = t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = ib, t.stateNode = a, a._reactInternals = t, a._reactInternalInstance = qy, typeof n.getDerivedStateFromProps == "function" && o === null && (o = ce(n) || "Component", Yy.has(o) || (Yy.add(o), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, a.state === null ? "null" : "undefined", o))), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function") {
					var c = s = o = null;
					if (typeof a.componentWillMount == "function" && !0 !== a.componentWillMount.__suppressDeprecationWarning ? o = "componentWillMount" : typeof a.UNSAFE_componentWillMount == "function" && (o = "UNSAFE_componentWillMount"), typeof a.componentWillReceiveProps == "function" && !0 !== a.componentWillReceiveProps.__suppressDeprecationWarning ? s = "componentWillReceiveProps" : typeof a.UNSAFE_componentWillReceiveProps == "function" && (s = "UNSAFE_componentWillReceiveProps"), typeof a.componentWillUpdate == "function" && !0 !== a.componentWillUpdate.__suppressDeprecationWarning ? c = "componentWillUpdate" : typeof a.UNSAFE_componentWillUpdate == "function" && (c = "UNSAFE_componentWillUpdate"), o !== null || s !== null || c !== null) {
						a = ce(n) || "Component";
						var l = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						Zy.has(a) || (Zy.add(a), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", a, l, o === null ? "" : "\n  " + o, s === null ? "" : "\n  " + s, c === null ? "" : "\n  " + c));
					}
				}
				a = t.stateNode, o = ce(n) || "Component", a.render || (n.prototype && typeof n.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", o) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", o)), !a.getInitialState || a.getInitialState.isReactClassApproved || a.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), a.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), n.childContextTypes && !tb.has(n) && (tb.add(n), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", o)), n.contextTypes && !eb.has(n) && (eb.add(n), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", o)), typeof a.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), n.prototype && n.prototype.isPureReactComponent && a.shouldComponentUpdate !== void 0 && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ce(n) || "A pure component"), typeof a.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof a.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof a.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof a.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o), s = a.props !== r, a.props !== void 0 && s && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o), a.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof a.getSnapshotBeforeUpdate != "function" || typeof a.componentDidUpdate == "function" || Xy.has(n) || (Xy.add(n), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ce(n))), typeof a.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof a.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof n.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o), (s = a.state) && (typeof s != "object" || Xf(s)) && console.error("%s.state: must be set to an object or null", o), typeof a.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o), a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, ia(t), o = n.contextType, a.context = typeof o == "object" && o ? E(o) : Ig, a.state === r && (o = ce(n) || "Component", Qy.has(o) || (Qy.add(o), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", o))), t.mode & Bg && dv.recordLegacyContextWarning(t, a), dv.recordUnsafeLifecycleWarnings(t, a), a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (rs(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", x(t) || "Component"), ib.enqueueReplaceState(a, a.state, null)), da(t, r, a, i), ua(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Vg) !== U && (t.flags |= 134217728), a = !0;
			} else if (e === null) {
				a = t.stateNode;
				var u = t.memoizedProps;
				s = os(n, u), a.props = s;
				var f = a.context;
				c = n.contextType, o = Ig, typeof c == "object" && c && (o = E(c)), l = n.getDerivedStateFromProps, c = typeof l == "function" || typeof a.getSnapshotBeforeUpdate == "function", u = t.pendingProps !== u, c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u || f !== o) && as(t, a, r, o), iy = !1;
				var p = t.memoizedState;
				a.state = p, da(t, r, a, i), ua(), f = t.memoizedState, u || p !== f || iy ? (typeof l == "function" && (rs(t, n, l, r), f = t.memoizedState), (s = iy || is(t, n, s, r, p, f, o)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Vg) !== U && (t.flags |= 134217728)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Vg) !== U && (t.flags |= 134217728), t.memoizedProps = r, t.memoizedState = f), a.props = r, a.state = f, a.context = o, a = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Vg) !== U && (t.flags |= 134217728), a = !1);
			} else {
				a = t.stateNode, aa(e, t), o = t.memoizedProps, c = os(n, o), a.props = c, l = t.pendingProps, p = a.context, f = n.contextType, s = Ig, typeof f == "object" && f && (s = E(f)), u = n.getDerivedStateFromProps, (f = typeof u == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== l || p !== s) && as(t, a, r, s), iy = !1, p = t.memoizedState, a.state = p, da(t, r, a, i), ua();
				var m = t.memoizedState;
				o !== l || p !== m || iy || e !== null && e.dependencies !== null && ci(e.dependencies) ? (typeof u == "function" && (rs(t, n, u, r), m = t.memoizedState), (c = iy || is(t, n, c, r, p, m, s) || e !== null && e.dependencies !== null && ci(e.dependencies)) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, m, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, m, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), a.props = r, a.state = m, a.context = s, a = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), a = !1);
			}
			if (s = a, Es(e, t), o = (t.flags & 128) != 0, s || o) {
				if (s = t.stateNode, De(t), o && typeof n.getDerivedStateFromError != "function") n = null, T_ = -1;
				else if (n = wv(s), t.mode & Bg) {
					Fe(!0);
					try {
						wv(s);
					} finally {
						Fe(!1);
					}
				}
				t.flags |= 1, e !== null && o ? (t.child = Qv(t, e.child, null, i), t.child = Qv(t, null, n, i)) : gs(e, t, n, i), t.memoizedState = s.state, e = t.child;
			} else e = Vs(e, t, i);
			return i = t.stateNode, a && i.props !== r && (pb || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", x(t) || "a component"), pb = !0), e;
		}
		function As(e, t, n, r) {
			return Qr(), t.flags |= 256, gs(e, t, n, r), t.child;
		}
		function js(e, t) {
			t && t.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function" && (e = ce(t) || "Unknown", fb[e] || (console.error("%s: Function components do not support getDerivedStateFromProps.", e), fb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = ce(t) || "Unknown", ub[t] || (console.error("%s: Function components do not support contextType.", t), ub[t] = !0));
		}
		function Ms(e) {
			return {
				baseLanes: e,
				cachePool: zi()
			};
		}
		function Ns(e, t, n) {
			return e = e === null ? 0 : e.childLanes & ~n, t && (e |= fx), e;
		}
		function Ps(e, t, n) {
			var r, i = t.pendingProps;
			u(t) && (t.flags |= 128);
			var a = !1, o = (t.flags & 128) != 0;
			if ((r = o) || (r = e !== null && e.memoizedState === null ? !1 : (my.current & py) !== 0), r && (a = !0, t.flags &= -129), r = (t.flags & 32) != 0, t.flags &= -33, e === null) {
				if (G) {
					if (a ? va(t) : xa(t), (e = t_) ? (n = _d(e, a_), n = n !== null && n.data !== AS ? n : null, n !== null && (r = {
						dehydrated: n,
						treeContext: Hr(),
						retryLane: 536870912,
						hydrationErrors: null
					}, t.memoizedState = r, r = Fr(n), r.return = t, t.child = r, e_ = t, t_ = null)) : n = null, n === null) throw qr(t, e), Jr(t);
					return yd(n) ? t.lanes = 32 : t.lanes = 536870912, null;
				}
				var s = i.children;
				if (i = i.fallback, a) {
					xa(t);
					var c = t.mode;
					return s = Is({
						mode: "hidden",
						children: s
					}, c), i = Nr(i, c, n, null), s.return = t, i.return = t, s.sibling = i, t.child = s, i = t.child, i.memoizedState = Ms(n), i.childLanes = Ns(e, r, n), t.memoizedState = gb, xs(null, i);
				}
				return va(t), Fs(t, s);
			}
			var l = e.memoizedState;
			if (l !== null) {
				var d = l.dehydrated;
				if (d !== null) {
					if (o) t.flags & 256 ? (va(t), t.flags &= -257, t = Ls(e, t, n)) : t.memoizedState === null ? (xa(t), s = i.fallback, c = t.mode, i = Is({
						mode: "visible",
						children: i.children
					}, c), s = Nr(s, c, n, null), s.flags |= 2, i.return = t, s.return = t, i.sibling = s, t.child = i, Qv(t, e.child, null, n), i = t.child, i.memoizedState = Ms(n), i.childLanes = Ns(e, r, n), t.memoizedState = gb, t = xs(null, i)) : (xa(t), t.child = e.child, t.flags |= 128, t = null);
					else if (va(t), Kr(), n & 536870912 && xl(t), yd(d)) {
						if (r = d.nextSibling && d.nextSibling.dataset, r) {
							s = r.dgst;
							var f = r.msg;
							c = r.stck;
							var p = r.cstck;
						}
						a = f, r = s, i = c, d = p, s = a, c = d, s = Error(s || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), s.stack = i || "", s.digest = r, r = c === void 0 ? null : c, i = {
							value: s,
							source: null,
							stack: r
						}, typeof r == "string" && Wg.set(s, i), ei(i), t = Ls(e, t, n);
					} else if (cb || si(e, t, n, !1), r = (n & e.childLanes) !== 0, cb || r) {
						if (r = Gb, r !== null && (i = qe(r, n), i !== 0 && i !== l.retryLane)) throw l.retryLane = i, yr(e, i), cl(r, e, i), sb;
						vd(d) || Sl(), t = Ls(e, t, n);
					} else vd(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, t_ = xd(d.nextSibling), e_ = t, G = !0, i_ = null, n_ = !1, r_ = null, a_ = !1, e !== null && Ur(t, e), t = Fs(t, i.children), t.flags |= 4096);
					return t;
				}
			}
			return a ? (xa(t), s = i.fallback, c = t.mode, p = e.child, d = p.sibling, i = kr(p, {
				mode: "hidden",
				children: i.children
			}), i.subtreeFlags = p.subtreeFlags & 65011712, d === null ? (s = Nr(s, c, n, null), s.flags |= 2) : s = kr(d, s), s.return = t, i.return = t, i.sibling = s, t.child = i, xs(null, i), i = t.child, s = e.child.memoizedState, s === null ? s = Ms(n) : (c = s.cachePool, c === null ? c = zi() : (p = g_._currentValue, c = c.parent === p ? c : {
				parent: p,
				pool: p
			}), s = {
				baseLanes: s.baseLanes | n,
				cachePool: c
			}), i.memoizedState = s, i.childLanes = Ns(e, r, n), t.memoizedState = gb, xs(e.child, i)) : (l !== null && (n & 62914560) === n && (n & e.lanes) !== 0 && xl(t), va(t), n = e.child, e = n.sibling, n = kr(n, {
				mode: "visible",
				children: i.children
			}), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n);
		}
		function Fs(e, t) {
			return t = Is({
				mode: "visible",
				children: t
			}, e.mode), t.return = e, e.child = t;
		}
		function Is(e, t) {
			return e = _(22, e, null, t), e.lanes = 0, e;
		}
		function Ls(e, t, n) {
			return Qv(t, e.child, null, n), e = Fs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
		}
		function Rs(e, t, n) {
			e.lanes |= t;
			var r = e.alternate;
			r !== null && (r.lanes |= t), ai(e.return, t, n);
		}
		function zs(e, t, n, r, i, a) {
			var o = e.memoizedState;
			o === null ? e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
				treeForkCount: a
			} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
		}
		function Bs(e, t, n) {
			var r = t.pendingProps, i = r.revealOrder, a = r.tail, o = r.children, s = my.current;
			if ((r = (s & py) !== 0) ? (s = s & fy | py, t.flags |= 128) : s &= fy, fe(my, s, t), s = i ?? "null", i !== "forwards" && i !== "unstable_legacy-backwards" && i !== "together" && i !== "independent" && !mb[s]) if (mb[s] = !0, i == null) console.error("The default for the <SuspenseList revealOrder=\"...\"> prop is changing. To be future compatible you must explictly specify either \"independent\" (the current default), \"together\", \"forwards\" or \"legacy_unstable-backwards\".");
			else if (i === "backwards") console.error("The rendering order of <SuspenseList revealOrder=\"backwards\"> is changing. To be future compatible you must specify revealOrder=\"legacy_unstable-backwards\" instead.");
			else if (typeof i == "string") switch (i.toLowerCase()) {
				case "together":
				case "forwards":
				case "backwards":
				case "independent":
					console.error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. Use lowercase \"%s\" instead.", i, i.toLowerCase());
					break;
				case "forward":
				case "backward":
					console.error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use \"%ss\" instead.", i, i.toLowerCase());
					break;
				default: console.error("\"%s\" is not a supported revealOrder on <SuspenseList />. Did you mean \"independent\", \"together\", \"forwards\" or \"backwards\"?", i);
			}
			else console.error("%s is not a supported value for revealOrder on <SuspenseList />. Did you mean \"independent\", \"together\", \"forwards\" or \"backwards\"?", i);
			s = a ?? "null", hb[s] || (a == null ? (i === "forwards" || i === "backwards" || i === "unstable_legacy-backwards") && (hb[s] = !0, console.error("The default for the <SuspenseList tail=\"...\"> prop is changing. To be future compatible you must explictly specify either \"visible\" (the current default), \"collapsed\" or \"hidden\".")) : a !== "visible" && a !== "collapsed" && a !== "hidden" ? (hb[s] = !0, console.error("\"%s\" is not a supported value for tail on <SuspenseList />. Did you mean \"visible\", \"collapsed\" or \"hidden\"?", a)) : i !== "forwards" && i !== "backwards" && i !== "unstable_legacy-backwards" && (hb[s] = !0, console.error("<SuspenseList tail=\"%s\" /> is only valid if revealOrder is \"forwards\" or \"backwards\". Did you mean to specify revealOrder=\"forwards\"?", a)));
			a: if ((i === "forwards" || i === "backwards" || i === "unstable_legacy-backwards") && o != null && !1 !== o) if (Xf(o)) {
				for (s = 0; s < o.length; s++) if (!ra(o[s], s)) break a;
			} else if (s = se(o), typeof s == "function") {
				if (s = s.call(o)) for (var c = s.next(), l = 0; !c.done; c = s.next()) {
					if (!ra(c.value, l)) break a;
					l++;
				}
			} else console.error("A single row was passed to a <SuspenseList revealOrder=\"%s\" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?", i);
			if (gs(e, t, o, n), G ? (Wr(), o = Jg) : o = 0, !r && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
				else if (e.tag === 19) Rs(e, n, t);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue;
				}
				if (e === t) break a;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break a;
					e = e.return;
				}
				e.sibling.return = e.return, e = e.sibling;
			}
			switch (i) {
				case "forwards":
					for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Ca(e) === null && (i = n), n = n.sibling;
					n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), zs(t, !1, i, n, a, o);
					break;
				case "backwards":
				case "unstable_legacy-backwards":
					for (n = null, i = t.child, t.child = null; i !== null;) {
						if (e = i.alternate, e !== null && Ca(e) === null) {
							t.child = i;
							break;
						}
						e = i.sibling, i.sibling = n, n = i, i = e;
					}
					zs(t, !0, n, null, a, o);
					break;
				case "together":
					zs(t, !1, null, null, void 0, o);
					break;
				default: t.memoizedState = null;
			}
			return t.child;
		}
		function Vs(e, t, n) {
			if (e !== null && (t.dependencies = e.dependencies), T_ = -1, lx |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
				if (si(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
			if (e !== null && t.child !== e.child) throw Error("Resuming work not yet implemented.");
			if (t.child !== null) {
				for (e = t.child, n = kr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = kr(e, e.pendingProps), n.return = t;
				n.sibling = null;
			}
			return t.child;
		}
		function Hs(e, t) {
			return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && ci(e))) : !0;
		}
		function Us(e, t, n) {
			switch (t.tag) {
				case 3:
					me(t, t.stateNode.containerInfo), ri(t, g_, e.memoizedState.cache), Qr();
					break;
				case 27:
				case 5:
					C(t);
					break;
				case 4:
					me(t, t.stateNode.containerInfo);
					break;
				case 10:
					ri(t, t.type, t.memoizedProps.value);
					break;
				case 12:
					(n & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
					var r = t.stateNode;
					r.effectDuration = -0, r.passiveEffectDuration = -0;
					break;
				case 31:
					if (t.memoizedState !== null) return t.flags |= 128, ya(t), null;
					break;
				case 13:
					if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (va(t), e = Vs(e, t, n), e === null ? null : e.sibling) : Ps(e, t, n) : (va(t), t.flags |= 128, null);
					va(t);
					break;
				case 19:
					var i = (e.flags & 128) != 0;
					if (r = (n & t.childLanes) !== 0, r ||= (si(e, t, n, !1), (n & t.childLanes) !== 0), i) {
						if (r) return Bs(e, t, n);
						t.flags |= 128;
					}
					if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), fe(my, my.current, t), r) break;
					return null;
				case 22: return t.lanes = 0, bs(e, t, n, t.pendingProps);
				case 24: ri(t, g_, e.memoizedState.cache);
			}
			return Vs(e, t, n);
		}
		function Ws(e, t, n) {
			if (t._debugNeedsRemount && e !== null) {
				n = jr(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes), n._debugStack = t._debugStack, n._debugTask = t._debugTask;
				var r = t.return;
				if (r === null) throw Error("Cannot swap the root fiber.");
				if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === r.child) r.child = n;
				else {
					var i = r.child;
					if (i === null) throw Error("Expected parent to have a child.");
					for (; i.sibling !== t;) if (i = i.sibling, i === null) throw Error("Expected to find the previous sibling.");
					i.sibling = n;
				}
				return t = r.deletions, t === null ? (r.deletions = [e], r.flags |= 16) : t.push(e), n.flags |= 2, n;
			}
			if (e !== null) if (e.memoizedProps !== t.pendingProps || t.type !== e.type) cb = !0;
			else {
				if (!Hs(e, n) && !(t.flags & 128)) return cb = !1, Us(e, t, n);
				cb = !!(e.flags & 131072);
			}
			else cb = !1, (r = G) && (Wr(), r = (t.flags & 1048576) != 0), r && (r = t.index, Wr(), zr(t, Jg, r));
			switch (t.lanes = 0, t.tag) {
				case 16:
					a: if (r = t.pendingProps, e = Ui(t.elementType), t.type = e, typeof e == "function") Or(e) ? (r = os(e, r), t.tag = 1, t.type = e = Sr(e), t = ks(null, t, e, r, n)) : (t.tag = 0, js(t, e), t.type = e = Sr(e), t = Ds(null, t, e, r, n));
					else {
						if (e != null) {
							if (i = e.$$typeof, i === Vf) {
								t.tag = 11, t.type = e = Cr(e), t = _s(null, t, e, r, n);
								break a;
							} else if (i === Wf) {
								t.tag = 14, t = vs(null, t, e, r, n);
								break a;
							}
						}
						throw t = "", typeof e == "object" && e && e.$$typeof === Gf && (t = " Did you wrap a component in React.lazy() more than once?"), n = ce(e) || e, Error("Element type is invalid. Received a promise that resolves to: " + n + ". Lazy element type must resolve to a class or function." + t);
					}
					return t;
				case 0: return Ds(e, t, t.type, t.pendingProps, n);
				case 1: return r = t.type, i = os(r, t.pendingProps), ks(e, t, r, i, n);
				case 3:
					a: {
						if (me(t, t.stateNode.containerInfo), e === null) throw Error("Should have a current fiber. This is a bug in React.");
						r = t.pendingProps;
						var a = t.memoizedState;
						i = a.element, aa(e, t), da(t, r, null, n);
						var o = t.memoizedState;
						if (r = o.cache, ri(t, g_, r), r !== a.cache && oi(t, [g_], n, !0), ua(), r = o.element, a.isDehydrated) if (a = {
							element: r,
							isDehydrated: !1,
							cache: o.cache
						}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
							t = As(e, t, r, n);
							break a;
						} else if (r !== i) {
							i = Lr(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t), ei(i), t = As(e, t, r, n);
							break a;
						} else {
							switch (e = t.stateNode.containerInfo, e.nodeType) {
								case 9:
									e = e.body;
									break;
								default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
							}
							for (t_ = xd(e.firstChild), e_ = t, G = !0, i_ = null, n_ = !1, r_ = null, a_ = !0, n = $v(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
						}
						else {
							if (Qr(), r === i) {
								t = Vs(e, t, n);
								break a;
							}
							gs(e, t, r, n);
						}
						t = t.child;
					}
					return t;
				case 26: return Es(e, t), e === null ? (n = Pd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : G || (n = t.type, e = t.pendingProps, r = pe(rp.current), r = Uu(r).createElement(n), r[Jp] = t, r[Yp] = e, ku(r, n, e), at(r), t.stateNode = r) : t.memoizedState = Pd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
				case 27: return C(t), e === null && G && (r = pe(rp.current), i = S(), r = t.stateNode = kd(t.type, t.pendingProps, r, i, !1), n_ || (i = zu(r, t.type, t.pendingProps, i), i !== null && (Gr(t, 0).serverProps = i)), e_ = t, a_ = !0, i = t_, rd(t.type) ? (rC = i, t_ = xd(r.firstChild)) : t_ = i), gs(e, t, t.pendingProps.children, n), Es(e, t), e === null && (t.flags |= 4194304), t.child;
				case 5: return e === null && G && (a = S(), r = $t(t.type, a.ancestorInfo), i = t_, (o = !i) || (o = hd(i, t.type, t.pendingProps, a_), o === null ? a = !1 : (t.stateNode = o, n_ || (a = zu(o, t.type, t.pendingProps, a), a !== null && (Gr(t, 0).serverProps = a)), e_ = t, t_ = xd(o.firstChild), a_ = !1, a = !0), o = !a), o && (r && qr(t, i), Jr(t))), C(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, r = a.children, Ku(i, a) ? r = null : o !== null && Ku(i, o) && (t.flags |= 32), t.memoizedState !== null && (i = Oa(e, t, ja, null, null, n), xC._currentValue = i), Es(e, t), gs(e, t, r, n), t.child;
				case 6: return e === null && G && (n = t.pendingProps, e = S(), r = e.ancestorInfo.current, n = r == null || en(n, r.tag, e.ancestorInfo.implicitRootScope), e = t_, (r = !e) || (r = gd(e, t.pendingProps, a_), r === null ? r = !1 : (t.stateNode = r, e_ = t, t_ = null, r = !0), r = !r), r && (n && qr(t, e), Jr(t))), null;
				case 13: return Ps(e, t, n);
				case 4: return me(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qv(t, null, r, n) : gs(e, t, r, n), t.child;
				case 11: return _s(e, t, t.type, t.pendingProps, n);
				case 7: return gs(e, t, t.pendingProps, n), t.child;
				case 8: return gs(e, t, t.pendingProps.children, n), t.child;
				case 12: return t.flags |= 4, t.flags |= 2048, r = t.stateNode, r.effectDuration = -0, r.passiveEffectDuration = -0, gs(e, t, t.pendingProps.children, n), t.child;
				case 10: return r = t.type, i = t.pendingProps, a = i.value, "value" in i || _b || (_b = !0, console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")), ri(t, r, a), gs(e, t, i.children, n), t.child;
				case 9: return i = t.type._context, r = t.pendingProps.children, typeof r != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), li(t), i = E(i), r = Sv(r, i, void 0), t.flags |= 1, gs(e, t, r, n), t.child;
				case 14: return vs(e, t, t.type, t.pendingProps, n);
				case 15: return ys(e, t, t.type, t.pendingProps, n);
				case 19: return Bs(e, t, n);
				case 31: return Ts(e, t, n);
				case 22: return bs(e, t, n, t.pendingProps);
				case 24: return li(t), r = E(g_), e === null ? (i = Li(), i === null && (i = Gb, a = fi(), i.pooledCache = a, pi(a), a !== null && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
					parent: r,
					cache: i
				}, ia(t), ri(t, g_, i)) : ((e.lanes & n) !== 0 && (aa(e, t), da(t, null, null, n), ua()), i = e.memoizedState, a = t.memoizedState, i.parent === r ? (r = a.cache, ri(t, g_, r), r !== i.cache && oi(t, [g_], n, !0)) : (i = {
					parent: r,
					cache: r
				}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), ri(t, g_, r))), gs(e, t, t.pendingProps.children, n), t.child;
				case 29: throw t.pendingProps;
			}
			throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
		}
		function Gs(e) {
			e.flags |= 4;
		}
		function Ks(e, t, n, r, i) {
			if ((t = (e.mode & Hg) !== U) && (t = !1), t) {
				if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
				else if (vl()) e.flags |= 8192;
				else throw Uv = Hv, Bv;
			} else e.flags &= -16777217;
		}
		function qs(e, t) {
			if (t.type !== "stylesheet" || (t.state.loading & cC) !== iC) e.flags &= -16777217;
			else if (e.flags |= 16777216, !Jd(t)) if (vl()) e.flags |= 8192;
			else throw Uv = Hv, Bv;
		}
		function Js(e, t) {
			t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : Ve(), e.lanes |= t, px |= t);
		}
		function Ys(e, t) {
			if (!G) switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
					n === null ? e.tail = null : n.sibling = null;
					break;
				case "collapsed":
					n = e.tail;
					for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
					r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
			}
		}
		function Xs(e) {
			var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
			if (t) if ((e.mode & W) !== U) {
				for (var i = e.selfBaseDuration, a = e.child; a !== null;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 65011712, r |= a.flags & 65011712, i += a.treeBaseDuration, a = a.sibling;
				e.treeBaseDuration = i;
			} else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
			else if ((e.mode & W) !== U) {
				i = e.actualDuration, a = e.selfBaseDuration;
				for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, i += o.actualDuration, a += o.treeBaseDuration, o = o.sibling;
				e.actualDuration = i, e.treeBaseDuration = a;
			} else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
			return e.subtreeFlags |= r, e.childLanes = n, t;
		}
		function Zs(e, t, n) {
			var r = t.pendingProps;
			switch (Vr(t), t.tag) {
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14: return Xs(t), null;
				case 1: return Xs(t), null;
				case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ii(g_, t), he(t), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? (ti(), Gs(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $r())), Xs(t), null;
				case 26:
					var i = t.type, a = t.memoizedState;
					return e === null ? (Gs(t), a === null ? (Xs(t), Ks(t, i, null, r, n)) : (Xs(t), qs(t, a))) : a ? a === e.memoizedState ? (Xs(t), t.flags &= -16777217) : (Gs(t), Xs(t), qs(t, a)) : (e = e.memoizedProps, e !== r && Gs(t), Xs(t), Ks(t, i, e, r, n)), null;
				case 27:
					if (ge(t), n = pe(rp.current), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Gs(t);
					else {
						if (!r) {
							if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
							return Xs(t), null;
						}
						e = S(), Zr(t) ? Yr(t, e) : (e = kd(i, r, n, e, !0), t.stateNode = e, Gs(t));
					}
					return Xs(t), null;
				case 5:
					if (ge(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Gs(t);
					else {
						if (!r) {
							if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
							return Xs(t), null;
						}
						var o = S();
						if (Zr(t)) Yr(t, o);
						else {
							switch (a = pe(rp.current), $t(i, o.ancestorInfo), o = o.context, a = Uu(a), o) {
								case GS:
									a = a.createElementNS(Rm, i);
									break;
								case KS:
									a = a.createElementNS(Lm, i);
									break;
								default: switch (i) {
									case "svg":
										a = a.createElementNS(Rm, i);
										break;
									case "math":
										a = a.createElementNS(Lm, i);
										break;
									case "script":
										a = a.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
										break;
									case "select":
										a = typeof r.is == "string" ? a.createElement("select", { is: r.is }) : a.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
										break;
									default: a = typeof r.is == "string" ? a.createElement(i, { is: r.is }) : a.createElement(i), i.indexOf("-") === -1 && (i !== i.toLowerCase() && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", i), Object.prototype.toString.call(a) !== "[object HTMLUnknownElement]" || yp.call(YS, i) || (YS[i] = !0, console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", i)));
								}
							}
							a[Jp] = t, a[Yp] = r;
							a: for (o = t.child; o !== null;) {
								if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
								else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
									o.child.return = o, o = o.child;
									continue;
								}
								if (o === t) break a;
								for (; o.sibling === null;) {
									if (o.return === null || o.return === t) break a;
									o = o.return;
								}
								o.sibling.return = o.return, o = o.sibling;
							}
							t.stateNode = a;
							a: switch (ku(a, i, r), i) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									r = !!r.autoFocus;
									break a;
								case "img":
									r = !0;
									break a;
								default: r = !1;
							}
							r && Gs(t);
						}
					}
					return Xs(t), Ks(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
				case 6:
					if (e && t.stateNode != null) e.memoizedProps !== r && Gs(t);
					else {
						if (typeof r != "string" && t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
						if (e = pe(rp.current), n = S(), Zr(t)) {
							if (e = t.stateNode, n = t.memoizedProps, i = !n_, r = null, a = e_, a !== null) switch (a.tag) {
								case 3:
									i && (i = Cd(e, n, r), i !== null && (Gr(t, 0).serverProps = i));
									break;
								case 27:
								case 5: r = a.memoizedProps, i && (i = Cd(e, n, r), i !== null && (Gr(t, 0).serverProps = i));
							}
							e[Jp] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Eu(e.nodeValue, n)), e || Jr(t, !0);
						} else i = n.ancestorInfo.current, i != null && en(r, i.tag, n.ancestorInfo.implicitRootScope), e = Uu(e).createTextNode(r), e[Jp] = t, t.stateNode = e;
					}
					return Xs(t), null;
				case 31:
					if (n = t.memoizedState, e === null || e.memoizedState !== null) {
						if (r = Zr(t), n !== null) {
							if (e === null) {
								if (!r) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
								if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");
								e[Jp] = t, Xs(t), (t.mode & W) !== U && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
							} else ti(), Qr(), !(t.flags & 128) && (n = t.memoizedState = null), t.flags |= 4, Xs(t), (t.mode & W) !== U && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
							e = !1;
						} else n = $r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
						if (!e) return t.flags & 256 ? (Sa(t), t) : (Sa(t), null);
						if (t.flags & 128) throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
					}
					return Xs(t), null;
				case 13:
					if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
						if (i = r, a = Zr(t), i !== null && i.dehydrated !== null) {
							if (e === null) {
								if (!a) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
								if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
								a[Jp] = t, Xs(t), (t.mode & W) !== U && i !== null && (i = t.child, i !== null && (t.treeBaseDuration -= i.treeBaseDuration));
							} else ti(), Qr(), !(t.flags & 128) && (i = t.memoizedState = null), t.flags |= 4, Xs(t), (t.mode & W) !== U && i !== null && (i = t.child, i !== null && (t.treeBaseDuration -= i.treeBaseDuration));
							i = !1;
						} else i = $r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
						if (!i) return t.flags & 256 ? (Sa(t), t) : (Sa(t), null);
					}
					return Sa(t), t.flags & 128 ? (t.lanes = n, (t.mode & W) !== U && Ni(t), t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), a = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Js(t, t.updateQueue), Xs(t), (t.mode & W) !== U && n && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
				case 4: return he(t), e === null && pu(t.stateNode.containerInfo), Xs(t), null;
				case 10: return ii(t.type, t), Xs(t), null;
				case 19:
					if (de(my, t), r = t.memoizedState, r === null) return Xs(t), null;
					if (i = (t.flags & 128) != 0, a = r.rendering, a === null) if (i) Ys(r, !1);
					else {
						if (cx !== Rb || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (a = Ca(e), a !== null) {
								for (t.flags |= 128, Ys(r, !1), e = a.updateQueue, t.updateQueue = e, Js(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ar(n, e), n = n.sibling;
								return fe(my, my.current & fy | py, t), G && Rr(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && wp() > bx && (t.flags |= 128, i = !0, Ys(r, !1), t.lanes = 4194304);
					}
					else {
						if (!i) if (e = Ca(a), e !== null) {
							if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Js(t, e), Ys(r, !0), r.tail === null && r.tailMode === "hidden" && !a.alternate && !G) return Xs(t), null;
						} else 2 * wp() - r.renderingStartTime > bx && n !== 536870912 && (t.flags |= 128, i = !0, Ys(r, !1), t.lanes = 4194304);
						r.isBackwards ? (a.sibling = t.child, t.child = a) : (e = r.last, e === null ? t.child = a : e.sibling = a, r.last = a);
					}
					return r.tail === null ? (Xs(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = wp(), e.sibling = null, n = my.current, n = i ? n & fy | py : n & fy, fe(my, n, t), G && Rr(t, r.treeForkCount), e);
				case 22:
				case 23: return Sa(t), _a(t), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Xs(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xs(t), n = t.updateQueue, n !== null && Js(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && de(uv, t), null;
				case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ii(g_, t), Xs(t), null;
				case 25: return null;
				case 30: return null;
			}
			throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
		}
		function Qs(e, t) {
			switch (Vr(t), t.tag) {
				case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Ni(t), t) : null;
				case 3: return ii(g_, t), he(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
				case 26:
				case 27:
				case 5: return ge(t), null;
				case 31:
					if (t.memoizedState !== null) {
						if (Sa(t), t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
						Qr();
					}
					return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Ni(t), t) : null;
				case 13:
					if (Sa(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
						if (t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
						Qr();
					}
					return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Ni(t), t) : null;
				case 19: return de(my, t), null;
				case 4: return he(t), null;
				case 10: return ii(t.type, t), null;
				case 22:
				case 23: return Sa(t), _a(t), e !== null && de(uv, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Ni(t), t) : null;
				case 24: return ii(g_, t), null;
				case 25: return null;
				default: return null;
			}
		}
		function $s(e, t) {
			switch (Vr(t), t.tag) {
				case 3:
					ii(g_, t), he(t);
					break;
				case 26:
				case 27:
				case 5:
					ge(t);
					break;
				case 4:
					he(t);
					break;
				case 31:
					t.memoizedState !== null && Sa(t);
					break;
				case 13:
					Sa(t);
					break;
				case 19:
					de(my, t);
					break;
				case 10:
					ii(t.type, t);
					break;
				case 22:
				case 23:
					Sa(t), _a(t), e !== null && de(uv, t);
					break;
				case 24: ii(g_, t);
			}
		}
		function ec(e) {
			return (e.mode & W) !== U;
		}
		function tc(e, t) {
			ec(e) ? (Mi(), rc(t, e), Ai()) : rc(t, e);
		}
		function nc(e, t, n) {
			ec(e) ? (Mi(), ic(n, e, t), Ai()) : ic(n, e, t);
		}
		function rc(e, t) {
			try {
				var n = t.updateQueue, r = n === null ? null : n.lastEffect;
				if (r !== null) {
					var i = r.next;
					n = i;
					do {
						if ((n.tag & e) === e && (r = void 0, (e & _y) !== hy && (eS = !0), r = T(t, Pv, n), (e & _y) !== hy && (eS = !1), r !== void 0 && typeof r != "function")) {
							var a = void 0;
							a = (n.tag & vy) === 0 ? (n.tag & _y) === 0 ? "useEffect" : "useInsertionEffect" : "useLayoutEffect";
							var o = void 0;
							o = r === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof r.then == "function" ? "\n\nIt looks like you wrote " + a + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + a + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching" : " You returned: " + r, T(t, function(e, t) {
								console.error("%s must not return anything besides a function, which is used for clean-up.%s", e, t);
							}, a, o);
						}
						n = n.next;
					} while (n !== i);
				}
			} catch (e) {
				M(t, t.return, e);
			}
		}
		function ic(e, t, n) {
			try {
				var r = t.updateQueue, i = r === null ? null : r.lastEffect;
				if (i !== null) {
					var a = i.next;
					r = a;
					do {
						if ((r.tag & e) === e) {
							var o = r.inst, s = o.destroy;
							s !== void 0 && (o.destroy = void 0, (e & _y) !== hy && (eS = !0), i = t, T(i, Iv, i, n, s), (e & _y) !== hy && (eS = !1));
						}
						r = r.next;
					} while (r !== a);
				}
			} catch (e) {
				M(t, t.return, e);
			}
		}
		function ac(e, t) {
			ec(e) ? (Mi(), rc(t, e), Ai()) : rc(t, e);
		}
		function oc(e, t, n) {
			ec(e) ? (Mi(), ic(n, e, t), Ai()) : ic(n, e, t);
		}
		function sc(e) {
			var t = e.updateQueue;
			if (t !== null) {
				var n = e.stateNode;
				e.type.defaultProps || "ref" in e.memoizedProps || pb || (n.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", x(e) || "instance"), n.state !== e.memoizedState && console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", x(e) || "instance"));
				try {
					T(e, ma, t, n);
				} catch (t) {
					M(e, e.return, t);
				}
			}
		}
		function cc(e, t, n) {
			return e.getSnapshotBeforeUpdate(t, n);
		}
		function lc(e, t) {
			var n = t.memoizedProps, r = t.memoizedState;
			t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || pb || (t.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", x(e) || "instance"), t.state !== e.memoizedState && console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", x(e) || "instance"));
			try {
				var i = os(e.type, n), a = T(e, cc, t, i, r);
				n = vb, a !== void 0 || n.has(e.type) || (n.add(e.type), T(e, function() {
					console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", x(e));
				})), t.__reactInternalSnapshotBeforeUpdate = a;
			} catch (t) {
				M(e, e.return, t);
			}
		}
		function uc(e, t, n) {
			n.props = os(e.type, e.memoizedProps), n.state = e.memoizedState, ec(e) ? (Mi(), T(e, Mv, e, t, n), Ai()) : T(e, Mv, e, t, n);
		}
		function dc(e) {
			var t = e.ref;
			if (t !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var n = e.stateNode;
						break;
					case 30:
						n = e.stateNode;
						break;
					default: n = e.stateNode;
				}
				if (typeof t == "function") if (ec(e)) try {
					Mi(), e.refCleanup = t(n);
				} finally {
					Ai();
				}
				else e.refCleanup = t(n);
				else typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", x(e)), t.current = n;
			}
		}
		function fc(e, t) {
			try {
				T(e, dc, e);
			} catch (n) {
				M(e, t, n);
			}
		}
		function pc(e, t) {
			var n = e.ref, r = e.refCleanup;
			if (n !== null) if (typeof r == "function") try {
				if (ec(e)) try {
					Mi(), T(e, r);
				} finally {
					Ai(e);
				}
				else T(e, r);
			} catch (n) {
				M(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				if (ec(e)) try {
					Mi(), T(e, n, null);
				} finally {
					Ai(e);
				}
				else T(e, n, null);
			} catch (n) {
				M(e, t, n);
			}
			else n.current = null;
		}
		function mc(e, t, n, r) {
			var i = e.memoizedProps, a = i.id, o = i.onCommit;
			i = i.onRender, t = t === null ? "mount" : "update", rv && (t = "nested-update"), typeof i == "function" && i(a, t, e.actualDuration, e.treeBaseDuration, e.actualStartTime, n), typeof o == "function" && o(a, t, r, n);
		}
		function hc(e, t, n, r) {
			var i = e.memoizedProps;
			e = i.id, i = i.onPostCommit, t = t === null ? "mount" : "update", rv && (t = "nested-update"), typeof i == "function" && i(e, t, r, n);
		}
		function gc(e) {
			var t = e.type, n = e.memoizedProps, r = e.stateNode;
			try {
				T(e, Zu, r, t, n, e);
			} catch (t) {
				M(e, e.return, t);
			}
		}
		function _c(e, t, n) {
			try {
				T(e, $u, e.stateNode, e.type, n, t, e);
			} catch (t) {
				M(e, e.return, t);
			}
		}
		function vc(e) {
			return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && rd(e.type) || e.tag === 4;
		}
		function yc(e) {
			a: for (;;) {
				for (; e.sibling === null;) {
					if (e.return === null || vc(e.return)) return null;
					e = e.return;
				}
				for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
					if (e.tag === 27 && rd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
					e.child.return = e, e = e.child;
				}
				if (!(e.flags & 2)) return e.stateNode;
			}
		}
		function bc(e, t, n) {
			var r = e.tag;
			if (r === 5 || r === 6) e = e.stateNode, t ? (nd(n), (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t)) : (nd(n), t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = pn));
			else if (r !== 4 && (r === 27 && rd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (bc(e, t, n), e = e.sibling; e !== null;) bc(e, t, n), e = e.sibling;
		}
		function xc(e, t, n) {
			var r = e.tag;
			if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
			else if (r !== 4 && (r === 27 && rd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (xc(e, t, n), e = e.sibling; e !== null;) xc(e, t, n), e = e.sibling;
		}
		function Sc(e) {
			for (var t, n = e.return; n !== null;) {
				if (vc(n)) {
					t = n;
					break;
				}
				n = n.return;
			}
			if (t == null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
			switch (t.tag) {
				case 27:
					t = t.stateNode, n = yc(e), xc(e, n, t);
					break;
				case 5:
					n = t.stateNode, t.flags & 32 && (ed(n), t.flags &= -33), t = yc(e), xc(e, t, n);
					break;
				case 3:
				case 4:
					t = t.stateNode.containerInfo, n = yc(e), bc(e, n, t);
					break;
				default: throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
			}
		}
		function Cc(e) {
			var t = e.stateNode, n = e.memoizedProps;
			try {
				T(e, Ad, e.type, n, t, e);
			} catch (t) {
				M(e, e.return, t);
			}
		}
		function wc(e, t) {
			return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 && e.memoizedState.isDehydrated && (t.flags & 256) == 0;
		}
		function Tc(e, t) {
			if (e = e.containerInfo, qS = RC, e = Kn(e), qn(e)) {
				if ("selectionStart" in e) var n = {
					start: e.selectionStart,
					end: e.selectionEnd
				};
				else a: {
					n = (n = e.ownerDocument) && n.defaultView || window;
					var r = n.getSelection && n.getSelection();
					if (r && r.rangeCount !== 0) {
						n = r.anchorNode;
						var i = r.anchorOffset, a = r.focusNode;
						r = r.focusOffset;
						try {
							n.nodeType, a.nodeType;
						} catch {
							n = null;
							break a;
						}
						var o = 0, s = -1, c = -1, l = 0, u = 0, d = e, f = null;
						b: for (;;) {
							for (var p; d !== n || i !== 0 && d.nodeType !== 3 || (s = o + i), d !== a || r !== 0 && d.nodeType !== 3 || (c = o + r), d.nodeType === 3 && (o += d.nodeValue.length), (p = d.firstChild) !== null;) f = d, d = p;
							for (;;) {
								if (d === e) break b;
								if (f === n && ++l === i && (s = o), f === a && ++u === r && (c = o), (p = d.nextSibling) !== null) break;
								d = f, f = d.parentNode;
							}
							d = p;
						}
						n = s === -1 || c === -1 ? null : {
							start: s,
							end: c
						};
					} else n = null;
				}
				n ||= {
					start: 0,
					end: 0
				};
			} else n = null;
			for (JS = {
				focusedElem: e,
				selectionRange: n
			}, RC = !1, Cb = t; Cb !== null;) if (t = Cb, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, Cb = e;
			else for (; Cb !== null;) {
				switch (e = t = Cb, n = e.alternate, i = e.flags, e.tag) {
					case 0:
						if (i & 4 && (e = e.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) i = e[n], i.ref.impl = i.nextImpl;
						break;
					case 11:
					case 15: break;
					case 1:
						i & 1024 && n !== null && lc(e, n);
						break;
					case 3:
						if (i & 1024) {
							if (e = e.stateNode.containerInfo, n = e.nodeType, n === 9) md(e);
							else if (n === 1) switch (e.nodeName) {
								case "HEAD":
								case "HTML":
								case "BODY":
									md(e);
									break;
								default: e.textContent = "";
							}
						}
						break;
					case 5:
					case 26:
					case 27:
					case 6:
					case 4:
					case 17: break;
					default: if (i & 1024) throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, Cb = e;
					break;
				}
				Cb = t.return;
			}
		}
		function Ec(e, t, n) {
			var r = xi(), i = Ci(), a = Ti(), o = Ei(), s = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Rc(e, n), s & 4 && tc(n, vy | gy);
					break;
				case 1:
					if (Rc(e, n), s & 4) if (e = n.stateNode, t === null) n.type.defaultProps || "ref" in n.memoizedProps || pb || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", x(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", x(n) || "instance")), ec(n) ? (Mi(), T(n, Ev, n, e), Ai()) : T(n, Ev, n, e);
					else {
						var c = os(n.type, t.memoizedProps);
						t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || pb || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", x(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", x(n) || "instance")), ec(n) ? (Mi(), T(n, Ov, n, e, c, t, e.__reactInternalSnapshotBeforeUpdate), Ai()) : T(n, Ov, n, e, c, t, e.__reactInternalSnapshotBeforeUpdate);
					}
					s & 64 && sc(n), s & 512 && fc(n, n.return);
					break;
				case 3:
					if (t = _i(), Rc(e, n), s & 64 && (s = n.updateQueue, s !== null)) {
						if (c = null, n.child !== null) switch (n.child.tag) {
							case 27:
							case 5:
								c = n.child.stateNode;
								break;
							case 1: c = n.child.stateNode;
						}
						try {
							T(n, ma, s, c);
						} catch (e) {
							M(n, n.return, e);
						}
					}
					e.effectDuration += vi(t);
					break;
				case 27: t === null && s & 4 && Cc(n);
				case 26:
				case 5:
					if (Rc(e, n), t === null) {
						if (s & 4) gc(n);
						else if (s & 64) {
							e = n.type, t = n.memoizedProps, c = n.stateNode;
							try {
								T(n, Qu, c, e, t, n);
							} catch (e) {
								M(n, n.return, e);
							}
						}
					}
					s & 512 && fc(n, n.return);
					break;
				case 12:
					if (s & 4) {
						s = _i(), Rc(e, n), e = n.stateNode, e.effectDuration += yi(s);
						try {
							T(n, mc, n, t, S_, e.effectDuration);
						} catch (e) {
							M(n, n.return, e);
						}
					} else Rc(e, n);
					break;
				case 31:
					Rc(e, n), s & 4 && Ac(e, n);
					break;
				case 13:
					Rc(e, n), s & 4 && jc(e, n), s & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (s = Gl.bind(null, n), bd(e, s))));
					break;
				case 22:
					if (s = n.memoizedState !== null || yb, !s) {
						t = t !== null && t.memoizedState !== null || bb, c = yb;
						var l = bb;
						yb = s, (bb = t) && !l ? (Hc(e, n, (n.subtreeFlags & 8772) != 0), (n.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && ir(n, K, q)) : Rc(e, n), yb = c, bb = l;
					}
					break;
				case 30: break;
				default: Rc(e, n);
			}
			(n.mode & W) !== U && 0 <= K && 0 <= q && ((k_ || .05 < D_) && sr(n, K, q, D_, O_), n.alternate === null && n.return !== null && n.return.alternate !== null && .05 < q - K && (wc(n.return.alternate, n.return) || rr(n, K, q, "Mount"))), Si(r), wi(i), O_ = a, k_ = o;
		}
		function Dc(e) {
			var t = e.alternate;
			t !== null && (e.alternate = null, Dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && et(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
		}
		function Oc(e, t, n) {
			for (n = n.child; n !== null;) kc(e, t, n), n = n.sibling;
		}
		function kc(e, t, n) {
			if (Pp && typeof Pp.onCommitFiberUnmount == "function") try {
				Pp.onCommitFiberUnmount(Np, n);
			} catch (e) {
				Fp || (Fp = !0, console.error("React instrumentation encountered an error: %o", e));
			}
			var r = xi(), i = Ci(), a = Ti(), o = Ei();
			switch (n.tag) {
				case 26:
					bb || pc(n, t), Oc(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (e = n.stateNode, e.parentNode.removeChild(e));
					break;
				case 27:
					bb || pc(n, t);
					var s = Eb, c = Db;
					rd(n.type) && (Eb = n.stateNode, Db = !1), Oc(e, t, n), T(n, jd, n.stateNode), Eb = s, Db = c;
					break;
				case 5: bb || pc(n, t);
				case 6:
					if (s = Eb, c = Db, Eb = null, Oc(e, t, n), Eb = s, Db = c, Eb !== null) if (Db) try {
						T(n, ad, Eb, n.stateNode);
					} catch (e) {
						M(n, t, e);
					}
					else try {
						T(n, id, Eb, n.stateNode);
					} catch (e) {
						M(n, t, e);
					}
					break;
				case 18:
					Eb !== null && (Db ? (e = Eb, od(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Tf(e)) : od(Eb, n.stateNode));
					break;
				case 4:
					s = Eb, c = Db, Eb = n.stateNode.containerInfo, Db = !0, Oc(e, t, n), Eb = s, Db = c;
					break;
				case 0:
				case 11:
				case 14:
				case 15:
					ic(_y, n, t), bb || nc(n, t, vy), Oc(e, t, n);
					break;
				case 1:
					bb || (pc(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function" && uc(n, t, s)), Oc(e, t, n);
					break;
				case 21:
					Oc(e, t, n);
					break;
				case 22:
					bb = (s = bb) || n.memoizedState !== null, Oc(e, t, n), bb = s;
					break;
				default: Oc(e, t, n);
			}
			(n.mode & W) !== U && 0 <= K && 0 <= q && (k_ || .05 < D_) && sr(n, K, q, D_, O_), Si(r), wi(i), O_ = a, k_ = o;
		}
		function Ac(e, t) {
			if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
				e = e.dehydrated;
				try {
					T(t, Dd, e);
				} catch (e) {
					M(t, t.return, e);
				}
			}
		}
		function jc(e, t) {
			if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
				T(t, Od, e);
			} catch (e) {
				M(t, t.return, e);
			}
		}
		function Mc(e) {
			switch (e.tag) {
				case 31:
				case 13:
				case 19:
					var t = e.stateNode;
					return t === null && (t = e.stateNode = new Sb()), t;
				case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Sb()), t;
				default: throw Error("Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React.");
			}
		}
		function Nc(e, t) {
			var n = Mc(e);
			t.forEach(function(t) {
				if (!n.has(t)) {
					if (n.add(t), Ip) if (wb !== null && Tb !== null) Zl(Tb, wb);
					else throw Error("Expected finished root and lanes to be set. This is a bug in React.");
					var r = Kl.bind(null, e, t);
					t.then(r, r);
				}
			});
		}
		function Pc(e, t) {
			var n = t.deletions;
			if (n !== null) for (var r = 0; r < n.length; r++) {
				var i = e, a = t, o = n[r], s = xi(), c = a;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 27:
							if (rd(c.type)) {
								Eb = c.stateNode, Db = !1;
								break a;
							}
							break;
						case 5:
							Eb = c.stateNode, Db = !1;
							break a;
						case 3:
						case 4:
							Eb = c.stateNode.containerInfo, Db = !0;
							break a;
					}
					c = c.return;
				}
				if (Eb === null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
				kc(i, a, o), Eb = null, Db = !1, (o.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && rr(o, K, q, "Unmount"), Si(s), i = o, a = i.alternate, a !== null && (a.return = null), i.return = null;
			}
			if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Fc(t, e), t = t.sibling;
		}
		function Fc(e, t) {
			var n = xi(), r = Ci(), i = Ti(), a = Ei(), o = e.alternate, s = e.flags;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Pc(t, e), Ic(e), s & 4 && (ic(_y | gy, e, e.return), rc(_y | gy, e), nc(e, e.return, vy | gy));
					break;
				case 1:
					if (Pc(t, e), Ic(e), s & 512 && (bb || o === null || pc(o, o.return)), s & 64 && yb && (s = e.updateQueue, s !== null && (o = s.callbacks, o !== null))) {
						var c = s.shared.hiddenCallbacks;
						s.shared.hiddenCallbacks = c === null ? o : c.concat(o);
					}
					break;
				case 26:
					if (c = Ob, Pc(t, e), Ic(e), s & 512 && (bb || o === null || pc(o, o.return)), s & 4) {
						var l = o === null ? null : o.memoizedState;
						if (s = e.memoizedState, o === null) if (s === null) if (e.stateNode === null) {
							a: {
								s = e.type, o = e.memoizedProps, c = c.ownerDocument || c;
								b: switch (s) {
									case "title":
										l = c.getElementsByTagName("title")[0], (!l || l[tm] || l[Jp] || l.namespaceURI === Rm || l.hasAttribute("itemprop")) && (l = c.createElement(s), c.head.insertBefore(l, c.querySelector("head > title"))), ku(l, s, o), l[Jp] = e, at(l), s = l;
										break a;
									case "link":
										var u = Gd("link", "href", c).get(s + (o.href || ""));
										if (u) {
											for (var d = 0; d < u.length; d++) if (l = u[d], l.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && l.getAttribute("rel") === (o.rel == null ? null : o.rel) && l.getAttribute("title") === (o.title == null ? null : o.title) && l.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
												u.splice(d, 1);
												break b;
											}
										}
										l = c.createElement(s), ku(l, s, o), c.head.appendChild(l);
										break;
									case "meta":
										if (u = Gd("meta", "content", c).get(s + (o.content || ""))) {
											for (d = 0; d < u.length; d++) if (l = u[d], je(o.content, "content"), l.getAttribute("content") === (o.content == null ? null : "" + o.content) && l.getAttribute("name") === (o.name == null ? null : o.name) && l.getAttribute("property") === (o.property == null ? null : o.property) && l.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && l.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
												u.splice(d, 1);
												break b;
											}
										}
										l = c.createElement(s), ku(l, s, o), c.head.appendChild(l);
										break;
									default: throw Error("getNodesForType encountered a type it did not expect: \"" + s + "\". This is a bug in React.");
								}
								l[Jp] = e, at(l), s = l;
							}
							e.stateNode = s;
						} else Kd(c, e.type, e.stateNode);
						else e.stateNode = Vd(c, s, e.memoizedProps);
						else l === s ? s === null && e.stateNode !== null && _c(e, e.memoizedProps, o.memoizedProps) : (l === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : l.count--, s === null ? Kd(c, e.type, e.stateNode) : Vd(c, s, e.memoizedProps));
					}
					break;
				case 27:
					Pc(t, e), Ic(e), s & 512 && (bb || o === null || pc(o, o.return)), o !== null && s & 4 && _c(e, e.memoizedProps, o.memoizedProps);
					break;
				case 5:
					if (Pc(t, e), Ic(e), s & 512 && (bb || o === null || pc(o, o.return)), e.flags & 32) {
						c = e.stateNode;
						try {
							T(e, ed, c);
						} catch (t) {
							M(e, e.return, t);
						}
					}
					s & 4 && e.stateNode != null && (c = e.memoizedProps, _c(e, c, o === null ? c : o.memoizedProps)), s & 1024 && (xb = !0, e.type !== "form" && console.error("Unexpected host component type. Expected a form. This is a bug in React."));
					break;
				case 6:
					if (Pc(t, e), Ic(e), s & 4) {
						if (e.stateNode === null) throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
						s = e.memoizedProps, o = o === null ? s : o.memoizedProps, c = e.stateNode;
						try {
							T(e, td, c, o, s);
						} catch (t) {
							M(e, e.return, t);
						}
					}
					break;
				case 3:
					if (c = _i(), pC = null, l = Ob, Ob = Md(t.containerInfo), Pc(t, e), Ob = l, Ic(e), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
						T(e, Ed, t.containerInfo);
					} catch (t) {
						M(e, e.return, t);
					}
					xb && (xb = !1, Lc(e)), t.effectDuration += vi(c);
					break;
				case 4:
					s = Ob, Ob = Md(e.stateNode.containerInfo), Pc(t, e), Ic(e), Ob = s;
					break;
				case 12:
					s = _i(), Pc(t, e), Ic(e), e.stateNode.effectDuration += yi(s);
					break;
				case 31:
					Pc(t, e), Ic(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Nc(e, s)));
					break;
				case 13:
					Pc(t, e), Ic(e), e.child.flags & 8192 && e.memoizedState !== null != (o !== null && o.memoizedState !== null) && (_x = wp()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Nc(e, s)));
					break;
				case 22:
					c = e.memoizedState !== null;
					var f = o !== null && o.memoizedState !== null, p = yb, m = bb;
					if (yb = p || c, bb = m || f, Pc(t, e), bb = m, yb = p, f && !c && !p && !m && (e.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && ir(e, K, q), Ic(e), s & 8192) a: for (t = e.stateNode, t._visibility = c ? t._visibility & ~jg : t._visibility | jg, !c || o === null || f || yb || bb || (Bc(e), (e.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && rr(e, K, q, "Disconnect")), o = null, t = e;;) {
						if (t.tag === 5 || t.tag === 26) {
							if (o === null) {
								f = o = t;
								try {
									l = f.stateNode, c ? T(f, ld, l) : T(f, fd, f.stateNode, f.memoizedProps);
								} catch (e) {
									M(f, f.return, e);
								}
							}
						} else if (t.tag === 6) {
							if (o === null) {
								f = t;
								try {
									u = f.stateNode, c ? T(f, ud, u) : T(f, pd, u, f.memoizedProps);
								} catch (e) {
									M(f, f.return, e);
								}
							}
						} else if (t.tag === 18) {
							if (o === null) {
								f = t;
								try {
									d = f.stateNode, c ? T(f, cd, d) : T(f, dd, f.stateNode);
								} catch (e) {
									M(f, f.return, e);
								}
							}
						} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
							t.child.return = t, t = t.child;
							continue;
						}
						if (t === e) break a;
						for (; t.sibling === null;) {
							if (t.return === null || t.return === e) break a;
							o === t && (o = null), t = t.return;
						}
						o === t && (o = null), t.sibling.return = t.return, t = t.sibling;
					}
					s & 4 && (s = e.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, Nc(e, o))));
					break;
				case 19:
					Pc(t, e), Ic(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Nc(e, s)));
					break;
				case 30: break;
				case 21: break;
				default: Pc(t, e), Ic(e);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && ((k_ || .05 < D_) && sr(e, K, q, D_, O_), e.alternate === null && e.return !== null && e.return.alternate !== null && .05 < q - K && (wc(e.return.alternate, e.return) || rr(e, K, q, "Mount"))), Si(n), wi(r), O_ = i, k_ = a;
		}
		function Ic(e) {
			var t = e.flags;
			if (t & 2) {
				try {
					T(e, Sc, e);
				} catch (t) {
					M(e, e.return, t);
				}
				e.flags &= -3;
			}
			t & 4096 && (e.flags &= -4097);
		}
		function Lc(e) {
			if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
				var t = e;
				Lc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
			}
		}
		function Rc(e, t) {
			if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) Ec(e, t.alternate, t), t = t.sibling;
		}
		function zc(e) {
			var t = xi(), n = Ci(), r = Ti(), i = Ei();
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					nc(e, e.return, vy), Bc(e);
					break;
				case 1:
					pc(e, e.return);
					var a = e.stateNode;
					typeof a.componentWillUnmount == "function" && uc(e, e.return, a), Bc(e);
					break;
				case 27: T(e, jd, e.stateNode);
				case 26:
				case 5:
					pc(e, e.return), Bc(e);
					break;
				case 22:
					e.memoizedState === null && Bc(e);
					break;
				case 30:
					Bc(e);
					break;
				default: Bc(e);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && (k_ || .05 < D_) && sr(e, K, q, D_, O_), Si(t), wi(n), O_ = r, k_ = i;
		}
		function Bc(e) {
			for (e = e.child; e !== null;) zc(e), e = e.sibling;
		}
		function Vc(e, t, n, r) {
			var i = xi(), a = Ci(), o = Ti(), s = Ei(), c = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Hc(e, n, r), tc(n, vy);
					break;
				case 1:
					if (Hc(e, n, r), t = n.stateNode, typeof t.componentDidMount == "function" && T(n, Ev, n, t), t = n.updateQueue, t !== null) {
						e = n.stateNode;
						try {
							T(n, pa, t, e);
						} catch (e) {
							M(n, n.return, e);
						}
					}
					r && c & 64 && sc(n), fc(n, n.return);
					break;
				case 27: Cc(n);
				case 26:
				case 5:
					Hc(e, n, r), r && t === null && c & 4 && gc(n), fc(n, n.return);
					break;
				case 12:
					if (r && c & 4) {
						c = _i(), Hc(e, n, r), r = n.stateNode, r.effectDuration += yi(c);
						try {
							T(n, mc, n, t, S_, r.effectDuration);
						} catch (e) {
							M(n, n.return, e);
						}
					} else Hc(e, n, r);
					break;
				case 31:
					Hc(e, n, r), r && c & 4 && Ac(e, n);
					break;
				case 13:
					Hc(e, n, r), r && c & 4 && jc(e, n);
					break;
				case 22:
					n.memoizedState === null && Hc(e, n, r), fc(n, n.return);
					break;
				case 30: break;
				default: Hc(e, n, r);
			}
			(n.mode & W) !== U && 0 <= K && 0 <= q && (k_ || .05 < D_) && sr(n, K, q, D_, O_), Si(i), wi(a), O_ = o, k_ = s;
		}
		function Hc(e, t, n) {
			for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) Vc(e, t.alternate, t, n), t = t.sibling;
		}
		function Uc(e, t) {
			var n = null;
			e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && pi(e), n != null && mi(n));
		}
		function Wc(e, t) {
			e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (pi(t), e != null && mi(e));
		}
		function Gc(e, t, n, r, i) {
			if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (t = t.child; t !== null;) {
				var a = t.sibling;
				Kc(e, t, n, r, a === null ? i : a.actualStartTime), t = a;
			}
		}
		function Kc(e, t, n, r, i) {
			var a = xi(), o = Ci(), s = Ti(), c = Ei(), l = Tg, u = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					(t.mode & W) !== U && 0 < t.actualStartTime && t.flags & 1 && ar(t, t.actualStartTime, i, kb, n), Gc(e, t, n, r, i), u & 2048 && ac(t, yy | gy);
					break;
				case 1:
					(t.mode & W) !== U && 0 < t.actualStartTime && (t.flags & 128 ? or(t, t.actualStartTime, i, []) : t.flags & 1 && ar(t, t.actualStartTime, i, kb, n)), Gc(e, t, n, r, i);
					break;
				case 3:
					var d = _i(), f = kb;
					kb = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) == 0, Gc(e, t, n, r, i), kb = f, u & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), r = t.memoizedState.cache, r !== n && (pi(r), n != null && mi(n))), e.passiveEffectDuration += vi(d);
					break;
				case 12:
					if (u & 2048) {
						u = _i(), Gc(e, t, n, r, i), e = t.stateNode, e.passiveEffectDuration += yi(u);
						try {
							T(t, hc, t, t.alternate, S_, e.passiveEffectDuration);
						} catch (e) {
							M(t, t.return, e);
						}
					} else Gc(e, t, n, r, i);
					break;
				case 31:
					u = kb, d = t.alternate === null ? null : t.alternate.memoizedState, f = t.memoizedState, d !== null && f === null ? (f = t.deletions, f !== null && 0 < f.length && f[0].tag === 18 ? (kb = !1, d = d.hydrationErrors, d !== null && or(t, t.actualStartTime, i, d)) : kb = !0) : kb = !1, Gc(e, t, n, r, i), kb = u;
					break;
				case 13:
					u = kb, d = t.alternate === null ? null : t.alternate.memoizedState, f = t.memoizedState, d === null || d.dehydrated === null || f !== null && f.dehydrated !== null ? kb = !1 : (f = t.deletions, f !== null && 0 < f.length && f[0].tag === 18 ? (kb = !1, d = d.hydrationErrors, d !== null && or(t, t.actualStartTime, i, d)) : kb = !0), Gc(e, t, n, r, i), kb = u;
					break;
				case 23: break;
				case 22:
					f = t.stateNode, d = t.alternate, t.memoizedState === null ? f._visibility & Mg ? Gc(e, t, n, r, i) : (f._visibility |= Mg, qc(e, t, n, r, (t.subtreeFlags & 10256) != 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child), i), (t.mode & W) === U || kb || (e = t.actualStartTime, 0 <= e && .05 < i - e && ir(t, e, i), 0 <= K && 0 <= q && .05 < q - K && ir(t, K, q))) : f._visibility & Mg ? Gc(e, t, n, r, i) : Yc(e, t, n, r, i), u & 2048 && Uc(d, t);
					break;
				case 24:
					Gc(e, t, n, r, i), u & 2048 && Wc(t.alternate, t);
					break;
				default: Gc(e, t, n, r, i);
			}
			(t.mode & W) !== U && ((e = !kb && t.alternate === null && t.return !== null && t.return.alternate !== null) && (n = t.actualStartTime, 0 <= n && .05 < i - n && rr(t, n, i, "Mount")), 0 <= K && 0 <= q && ((k_ || .05 < D_) && sr(t, K, q, D_, O_), e && .05 < q - K && rr(t, K, q, "Mount"))), Si(a), wi(o), O_ = s, k_ = c, Tg = l;
		}
		function qc(e, t, n, r, i, a) {
			for (i &&= (t.subtreeFlags & 10256) != 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child), t = t.child; t !== null;) {
				var o = t.sibling;
				Jc(e, t, n, r, i, o === null ? a : o.actualStartTime), t = o;
			}
		}
		function Jc(e, t, n, r, i, a) {
			var o = xi(), s = Ci(), c = Ti(), l = Ei(), u = Tg;
			i && (t.mode & W) !== U && 0 < t.actualStartTime && t.flags & 1 && ar(t, t.actualStartTime, a, kb, n);
			var d = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					qc(e, t, n, r, i, a), ac(t, yy);
					break;
				case 23: break;
				case 22:
					var f = t.stateNode;
					t.memoizedState === null ? (f._visibility |= Mg, qc(e, t, n, r, i, a)) : f._visibility & Mg ? qc(e, t, n, r, i, a) : Yc(e, t, n, r, a), i && d & 2048 && Uc(t.alternate, t);
					break;
				case 24:
					qc(e, t, n, r, i, a), i && d & 2048 && Wc(t.alternate, t);
					break;
				default: qc(e, t, n, r, i, a);
			}
			(t.mode & W) !== U && 0 <= K && 0 <= q && (k_ || .05 < D_) && sr(t, K, q, D_, O_), Si(o), wi(s), O_ = c, k_ = l, Tg = u;
		}
		function Yc(e, t, n, r, i) {
			if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (var a = t.child; a !== null;) {
				t = a.sibling;
				var o = e, s = n, c = r, l = t === null ? i : t.actualStartTime, u = Tg;
				(a.mode & W) !== U && 0 < a.actualStartTime && a.flags & 1 && ar(a, a.actualStartTime, l, kb, s);
				var d = a.flags;
				switch (a.tag) {
					case 22:
						Yc(o, a, s, c, l), d & 2048 && Uc(a.alternate, a);
						break;
					case 24:
						Yc(o, a, s, c, l), d & 2048 && Wc(a.alternate, a);
						break;
					default: Yc(o, a, s, c, l);
				}
				Tg = u, a = t;
			}
		}
		function Xc(e, t, n) {
			if (e.subtreeFlags & Ab) for (e = e.child; e !== null;) Zc(e, t, n), e = e.sibling;
		}
		function Zc(e, t, n) {
			switch (e.tag) {
				case 26:
					Xc(e, t, n), e.flags & Ab && e.memoizedState !== null && Yd(n, Ob, e.memoizedState, e.memoizedProps);
					break;
				case 5:
					Xc(e, t, n);
					break;
				case 3:
				case 4:
					var r = Ob;
					Ob = Md(e.stateNode.containerInfo), Xc(e, t, n), Ob = r;
					break;
				case 22:
					e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Ab, Ab = 16777216, Xc(e, t, n), Ab = r) : Xc(e, t, n));
					break;
				default: Xc(e, t, n);
			}
		}
		function Qc(e) {
			var t = e.alternate;
			if (t !== null && (e = t.child, e !== null)) {
				t.child = null;
				do
					t = e.sibling, e.sibling = null, e = t;
				while (e !== null);
			}
		}
		function $c(e) {
			var t = e.deletions;
			if (e.flags & 16) {
				if (t !== null) for (var n = 0; n < t.length; n++) {
					var r = t[n], i = xi();
					Cb = r, rl(r, e), (r.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && rr(r, K, q, "Unmount"), Si(i);
				}
				Qc(e);
			}
			if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) el(e), e = e.sibling;
		}
		function el(e) {
			var t = xi(), n = Ci(), r = Ti(), i = Ei();
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					$c(e), e.flags & 2048 && oc(e, e.return, yy | gy);
					break;
				case 3:
					var a = _i();
					$c(e), e.stateNode.passiveEffectDuration += vi(a);
					break;
				case 12:
					a = _i(), $c(e), e.stateNode.passiveEffectDuration += yi(a);
					break;
				case 22:
					a = e.stateNode, e.memoizedState !== null && a._visibility & Mg && (e.return === null || e.return.tag !== 13) ? (a._visibility &= ~Mg, tl(e), (e.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && rr(e, K, q, "Disconnect")) : $c(e);
					break;
				default: $c(e);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && (k_ || .05 < D_) && sr(e, K, q, D_, O_), Si(t), wi(n), k_ = i, O_ = r;
		}
		function tl(e) {
			var t = e.deletions;
			if (e.flags & 16) {
				if (t !== null) for (var n = 0; n < t.length; n++) {
					var r = t[n], i = xi();
					Cb = r, rl(r, e), (r.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && rr(r, K, q, "Unmount"), Si(i);
				}
				Qc(e);
			}
			for (e = e.child; e !== null;) nl(e), e = e.sibling;
		}
		function nl(e) {
			var t = xi(), n = Ci(), r = Ti(), i = Ei();
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					oc(e, e.return, yy), tl(e);
					break;
				case 22:
					var a = e.stateNode;
					a._visibility & Mg && (a._visibility &= ~Mg, tl(e));
					break;
				default: tl(e);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && (k_ || .05 < D_) && sr(e, K, q, D_, O_), Si(t), wi(n), k_ = i, O_ = r;
		}
		function rl(e, t) {
			for (; Cb !== null;) {
				var n = Cb, r = n, i = t, a = xi(), o = Ci(), s = Ti(), c = Ei();
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						oc(r, i, yy);
						break;
					case 23:
					case 22:
						r.memoizedState !== null && r.memoizedState.cachePool !== null && (i = r.memoizedState.cachePool.pool, i != null && pi(i));
						break;
					case 24: mi(r.memoizedState.cache);
				}
				if ((r.mode & W) !== U && 0 <= K && 0 <= q && (k_ || .05 < D_) && sr(r, K, q, D_, O_), Si(a), wi(o), k_ = c, O_ = s, r = n.child, r !== null) r.return = n, Cb = r;
				else a: for (n = e; Cb !== null;) {
					if (r = Cb, a = r.sibling, o = r.return, Dc(r), r === n) {
						Cb = null;
						break a;
					}
					if (a !== null) {
						a.return = o, Cb = a;
						break a;
					}
					Cb = o;
				}
			}
		}
		function il() {
			Nb.forEach(function(e) {
				return e();
			});
		}
		function al() {
			var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
			return e || z.actQueue === null || console.error("The current testing environment is not configured to support act(...)"), e;
		}
		function ol(e) {
			if ((Z & Ib) !== Fb && $ !== 0) return $ & -$;
			var t = z.T;
			return t === null ? Qe() : (t._updatedFibers ||= /* @__PURE__ */ new Set(), t._updatedFibers.add(e), ou());
		}
		function sl() {
			if (fx === 0) if (!($ & 536870912) || G) {
				var e = Vp;
				Vp <<= 1, !(Vp & 3932160) && (Vp = 262144), fx = e;
			} else fx = 536870912;
			return e = uy.current, e !== null && (e.flags |= 32), fx;
		}
		function cl(e, t, n) {
			if (eS && console.error("useInsertionEffect must not schedule updates."), Yx && (Xx = !0), (e === Gb && (nx === Jb || nx === tx) || e.cancelPendingCommit !== null) && (gl(e, 0), fl(e, $, fx, !1)), Ue(e, n), (Z & Ib) !== Fb && e === Gb) {
				if (vp) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						e = Q && x(Q) || "Unknown", rS.has(e) || (rS.add(e), t = x(t) || "Unknown", console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render", t, e, e));
						break;
					case 1: nS ||= (console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), !0);
				}
			} else Ip && Ye(e, t, n), $l(t), e === Gb && ((Z & Ib) === Fb && (ux |= n), cx === Hb && fl(e, $, fx, !1)), N(e);
		}
		function ll(e, t, n) {
			if ((Z & (Ib | Lb)) !== Fb) throw Error("Should not already be working.");
			if ($ !== 0 && Q !== null) {
				var r = Q, i = wp();
				switch (tv) {
					case Yb:
					case Jb:
						var a = nv;
						Cg && ((r = r._debugTask) ? r.run(console.timeStamp.bind(console, "Suspended", a, i, wg, void 0, "primary-light")) : console.timeStamp("Suspended", a, i, wg, void 0, "primary-light"));
						break;
					case tx:
						a = nv, Cg && ((r = r._debugTask) ? r.run(console.timeStamp.bind(console, "Action", a, i, wg, void 0, "primary-light")) : console.timeStamp("Action", a, i, wg, void 0, "primary-light"));
						break;
					default: Cg && (r = i - nv, 3 > r || console.timeStamp("Blocked", nv, i, wg, void 0, 5 > r ? "primary-light" : 10 > r ? "primary" : 100 > r ? "primary-dark" : "error"));
				}
			}
			a = (n = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || ze(e, t)) ? Tl(e, t) : Cl(e, t, !0);
			var o = n;
			do {
				if (a === Rb) {
					ax && !n && fl(e, t, 0, !1), t = nx, nv = __(), tv = t;
					break;
				} else {
					if (r = wp(), i = e.current.alternate, o && !dl(i)) {
						nr(t), i = x_, a = r, !Cg || a <= i || (Cx ? Cx.run(console.timeStamp.bind(console, "Teared Render", i, a, H, V, "error")) : console.timeStamp("Teared Render", i, a, H, V, "error")), hl(t, r), a = Cl(e, t, !1), o = !1;
						continue;
					}
					if (a === Bb) {
						if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
						else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
						if (s !== 0) {
							nr(t), fr(x_, r, t, Cx), hl(t, r), t = s;
							a: {
								r = e, a = o, o = mx;
								var c = r.current.memoizedState.isDehydrated;
								if (c && (gl(r, s).flags |= 256), s = Cl(r, s, !1), s !== Bb) {
									if (ox && !c) {
										r.errorRecoveryDisabledLanes |= a, ux |= a, a = Hb;
										break a;
									}
									r = hx, hx = o, r !== null && (hx === null ? hx = r : hx.push.apply(hx, r));
								}
								a = s;
							}
							if (o = !1, a !== Bb) continue;
							r = wp();
						}
					}
					if (a === zb) {
						nr(t), fr(x_, r, t, Cx), hl(t, r), gl(e, 0), fl(e, t, 0, !0);
						break;
					}
					a: {
						switch (n = e, a) {
							case Rb:
							case zb: throw Error("Root did not complete. This is a bug in React.");
							case Hb: if ((t & 4194048) !== t) break;
							case Ub:
								nr(t), lr(x_, r, t, Cx), hl(t, r), i = t, i & 127 ? z_ = r : i & 4194048 && (X_ = r), fl(n, t, fx, !ix);
								break a;
							case Bb:
								hx = null;
								break;
							case Vb:
							case Wb: break;
							default: throw Error("Unknown root exit status.");
						}
						if (z.actQueue !== null) Nl(n, i, t, hx, Sx, gx, fx, ux, px, a, null, null, x_, r);
						else {
							if ((t & 62914560) === t && (o = _x + yx - wp(), 10 < o)) {
								if (fl(n, t, fx, !ix), Re(n, 0, !0) !== 0) break a;
								Rx = t, n.timeoutHandle = QS(ul.bind(null, n, i, hx, Sx, gx, t, fx, ux, px, ix, a, "Throttled", x_, r), o);
								break a;
							}
							ul(n, i, hx, Sx, gx, t, fx, ux, px, ix, a, null, x_, r);
						}
					}
				}
				break;
			} while (1);
			N(e);
		}
		function ul(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
			e.timeoutHandle = eC;
			var m = t.subtreeFlags, h = null;
			if ((m & 8192 || (m & 16785408) == 16785408) && (h = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: pn
			}, Zc(t, a, h), m = (a & 62914560) === a ? _x - wp() : (a & 4194048) === a ? vx - wp() : 0, m = Xd(h, m), m !== null)) {
				Rx = a, e.cancelPendingCommit = m(Nl.bind(null, e, t, a, n, r, i, o, s, c, u, h, h.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < h.count ? 0 < h.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : h.imgCount === 1 ? "Suspended on an Image" : 0 < h.imgCount ? "Suspended on Images" : null, f, p)), fl(e, a, o, !l);
				return;
			}
			Nl(e, t, a, n, r, i, o, s, c, u, h, d, f, p);
		}
		function dl(e) {
			for (var t = e;;) {
				var n = t.tag;
				if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
					var i = n[r], a = i.getSnapshot;
					i = i.value;
					try {
						if (!Kh(a(), i)) return !1;
					} catch {
						return !1;
					}
				}
				if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
				else {
					if (t === e) break;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) return !0;
						t = t.return;
					}
					t.sibling.return = t.return, t = t.sibling;
				}
			}
			return !0;
		}
		function fl(e, t, n, r) {
			t &= ~dx, t &= ~ux, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
			for (var i = t; 0 < i;) {
				var a = 31 - Lp(i), o = 1 << a;
				r[a] = -1, i &= ~o;
			}
			n !== 0 && Ge(e, n, t);
		}
		function pl() {
			return (Z & (Ib | Lb)) === Fb ? (eu(0, !1), !1) : !0;
		}
		function ml() {
			if (Q !== null) {
				if (nx === Kb) var e = Q.return;
				else e = Q, ni(), Pa(e), Gv = null, Kv = 0, e = Q;
				for (; e !== null;) $s(e.alternate, e), e = e.return;
				Q = null;
			}
		}
		function hl(e, t) {
			e & 127 && (A_ = t), e & 4194048 && (B_ = t), e & 62914560 && (Z_ = t), e & 2080374784 && (Q_ = t);
		}
		function gl(e, t) {
			Cg && (console.timeStamp("Blocking Track", .003, .003, "Blocking", V, "primary-light"), console.timeStamp("Transition Track", .003, .003, "Transition", V, "primary-light"), console.timeStamp("Suspense Track", .003, .003, "Suspense", V, "primary-light"), console.timeStamp("Idle Track", .003, .003, "Idle", V, "primary-light"));
			var n = x_;
			if (x_ = __(), $ !== 0 && 0 < n) {
				if (nr($), cx === Vb || cx === Hb) lr(n, x_, t, Cx);
				else {
					var r = x_, i = Cx;
					if (Cg && !(r <= n)) {
						var a = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", o = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
						i ? i.run(console.timeStamp.bind(console, o, n, r, H, V, a)) : console.timeStamp(o, n, r, H, V, a);
					}
				}
				hl($, x_);
			}
			if (n = Cx, Cx = null, t & 127) {
				Cx = M_, i = 0 <= j_ && j_ < A_ ? A_ : j_, r = 0 <= I_ && I_ < A_ ? A_ : I_, a = 0 <= r ? r : 0 <= i ? i : x_, 0 <= z_ ? (nr(2), ur(z_, a, t, n)) : $_ & 127 && (nr(2), hr(A_, a, ev)), n = i;
				var s = r, c = L_, l = 0 < R_, u = N_ === y_, d = N_ === b_;
				if (i = x_, r = M_, a = P_, o = F_, Cg) {
					if (H = "Blocking", 0 < n ? n > i && (n = i) : n = i, 0 < s ? s > n && (s = n) : s = n, c !== null && n > s) {
						var f = l ? "secondary-light" : "warning";
						r ? r.run(console.timeStamp.bind(console, l ? "Consecutive" : "Event: " + c, s, n, H, V, f)) : console.timeStamp(l ? "Consecutive" : "Event: " + c, s, n, H, V, f);
					}
					i > n && (s = u ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", u = d ? "Promise Resolved" : u ? "Cascading Update" : 5 < i - n ? "Update Blocked" : "Update", d = [], o != null && d.push(["Component name", o]), a != null && d.push(["Method name", a]), n = {
						start: n,
						end: i,
						detail: { devtools: {
							properties: d,
							track: H,
							trackGroup: V,
							color: s
						} }
					}, r ? r.run(performance.measure.bind(performance, u, n)) : performance.measure(u, n));
				}
				j_ = -1.1, N_ = 0, F_ = P_ = null, z_ = -1.1, R_ = I_, I_ = -1.1, A_ = __();
			}
			if (t & 4194048 && (Cx = W_, i = 0 <= V_ && V_ < B_ ? B_ : V_, n = 0 <= H_ && H_ < B_ ? B_ : H_, r = 0 <= q_ && q_ < B_ ? B_ : q_, a = 0 <= r ? r : 0 <= n ? n : x_, 0 <= X_ ? (nr(256), ur(X_, a, t, Cx)) : $_ & 4194048 && (nr(256), hr(B_, a, ev)), d = r, s = J_, c = 0 < Y_, l = U_ === b_, a = x_, r = W_, o = G_, u = K_, Cg && (H = "Transition", 0 < n ? n > a && (n = a) : n = a, 0 < i ? i > n && (i = n) : i = n, 0 < d ? d > i && (d = i) : d = i, i > d && s !== null && (f = c ? "secondary-light" : "warning", r ? r.run(console.timeStamp.bind(console, c ? "Consecutive" : "Event: " + s, d, i, H, V, f)) : console.timeStamp(c ? "Consecutive" : "Event: " + s, d, i, H, V, f)), n > i && (r ? r.run(console.timeStamp.bind(console, "Action", i, n, H, V, "primary-dark")) : console.timeStamp("Action", i, n, H, V, "primary-dark")), a > n && (i = l ? "Promise Resolved" : 5 < a - n ? "Update Blocked" : "Update", d = [], u != null && d.push(["Component name", u]), o != null && d.push(["Method name", o]), n = {
				start: n,
				end: a,
				detail: { devtools: {
					properties: d,
					track: H,
					trackGroup: V,
					color: "primary-light"
				} }
			}, r ? r.run(performance.measure.bind(performance, i, n)) : performance.measure(i, n))), H_ = V_ = -1.1, U_ = 0, X_ = -1.1, Y_ = q_, q_ = -1.1, B_ = __()), t & 62914560 && $_ & 62914560 && (nr(4194304), hr(Z_, x_, ev)), t & 2080374784 && $_ & 2080374784 && (nr(268435456), hr(Q_, x_, ev)), n = e.timeoutHandle, n !== eC && (e.timeoutHandle = eC, $S(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Rx = 0, ml(), Gb = e, Q = n = kr(e.current, null), $ = t, nx = Kb, rx = null, ix = !1, ax = ze(e, t), ox = !1, cx = Rb, px = fx = dx = ux = lx = 0, hx = mx = null, gx = !1, t & 8 && (t |= t & 32), r = e.entangledLanes, r !== 0) for (e = e.entanglements, r &= t; 0 < r;) i = 31 - Lp(r), a = 1 << i, t |= e[i], r &= ~a;
			return sx = t, gr(), e = fg(), 1e3 < e - ug && (z.recentlyCreatedOwnerStacks = 0, ug = e), dv.discardPendingWarnings(), n;
		}
		function _l(e, t) {
			Y = null, z.H = zy, z.getCurrentStack = null, vp = !1, _p = null, t === zv || t === Vv ? (t = Wi(), nx = Yb) : t === Bv ? (t = Wi(), nx = Xb) : nx = t === sb ? ex : typeof t == "object" && t && typeof t.then == "function" ? Qb : qb, rx = t;
			var n = Q;
			n === null ? (cx = zb, us(e, Lr(t, e.current))) : n.mode & W && Oi(n);
		}
		function vl() {
			var e = uy.current;
			return e === null ? !0 : ($ & 4194048) === $ ? dy === null : ($ & 62914560) === $ || $ & 536870912 ? e === dy : !1;
		}
		function yl() {
			var e = z.H;
			return z.H = zy, e === null ? zy : e;
		}
		function bl() {
			var e = z.A;
			return z.A = jb, e;
		}
		function xl(e) {
			Cx === null && (Cx = e._debugTask == null ? null : e._debugTask);
		}
		function Sl() {
			cx = Hb, ix || ($ & 4194048) !== $ && uy.current !== null || (ax = !0), !(lx & 134217727) && !(ux & 134217727) || Gb === null || fl(Gb, $, fx, !1);
		}
		function Cl(e, t, n) {
			var r = Z;
			Z |= Ib;
			var i = yl(), a = bl();
			if (Gb !== e || $ !== t) {
				if (Ip) {
					var o = e.memoizedUpdaters;
					0 < o.size && (Zl(e, $), o.clear()), Xe(e, t);
				}
				Sx = null, gl(e, t);
			}
			t = !1, o = cx;
			a: do
				try {
					if (nx !== Kb && Q !== null) {
						var s = Q, c = rx;
						switch (nx) {
							case ex:
								ml(), o = Ub;
								break a;
							case Yb:
							case Jb:
							case tx:
							case Qb:
								uy.current === null && (t = !0);
								var l = nx;
								if (nx = Kb, rx = null, Al(e, s, c, l), n && ax) {
									o = Rb;
									break a;
								}
								break;
							default: l = nx, nx = Kb, rx = null, Al(e, s, c, l);
						}
					}
					wl(), o = cx;
					break;
				} catch (t) {
					_l(e, t);
				}
			while (1);
			return t && e.shellSuspendCounter++, ni(), Z = r, z.H = i, z.A = a, Q === null && (Gb = null, $ = 0, gr()), o;
		}
		function wl() {
			for (; Q !== null;) Dl(Q);
		}
		function Tl(e, t) {
			var n = Z;
			Z |= Ib;
			var r = yl(), i = bl();
			if (Gb !== e || $ !== t) {
				if (Ip) {
					var a = e.memoizedUpdaters;
					0 < a.size && (Zl(e, $), a.clear()), Xe(e, t);
				}
				Sx = null, bx = wp() + xx, gl(e, t);
			} else ax = ze(e, t);
			a: do
				try {
					if (nx !== Kb && Q !== null) b: switch (t = Q, a = rx, nx) {
						case qb:
							nx = Kb, rx = null, Al(e, t, a, qb);
							break;
						case Jb:
						case tx:
							if (Vi(a)) {
								nx = Kb, rx = null, Ol(t);
								break;
							}
							t = function() {
								nx !== Jb && nx !== tx || Gb !== e || (nx = $b), N(e);
							}, a.then(t, t);
							break a;
						case Yb:
							nx = $b;
							break a;
						case Xb:
							nx = Zb;
							break a;
						case $b:
							Vi(a) ? (nx = Kb, rx = null, Ol(t)) : (nx = Kb, rx = null, Al(e, t, a, $b));
							break;
						case Zb:
							var o = null;
							switch (Q.tag) {
								case 26: o = Q.memoizedState;
								case 5:
								case 27:
									var s = Q;
									if (o ? Jd(o) : s.stateNode.complete) {
										nx = Kb, rx = null;
										var c = s.sibling;
										if (c !== null) Q = c;
										else {
											var l = s.return;
											l === null ? Q = null : (Q = l, jl(l));
										}
										break b;
									}
									break;
								default: console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.");
							}
							nx = Kb, rx = null, Al(e, t, a, Zb);
							break;
						case Qb:
							nx = Kb, rx = null, Al(e, t, a, Qb);
							break;
						case ex:
							ml(), cx = Ub;
							break a;
						default: throw Error("Unexpected SuspendedReason. This is a bug in React.");
					}
					z.actQueue === null ? El() : wl();
					break;
				} catch (t) {
					_l(e, t);
				}
			while (1);
			return ni(), z.H = r, z.A = i, Z = n, Q === null ? (Gb = null, $ = 0, gr(), cx) : Rb;
		}
		function El() {
			for (; Q !== null && !Sp();) Dl(Q);
		}
		function Dl(e) {
			var t = e.alternate;
			(e.mode & W) === U ? t = T(e, Ws, t, e, sx) : (Di(e), t = T(e, Ws, t, e, sx), Oi(e)), e.memoizedProps = e.pendingProps, t === null ? jl(e) : Q = t;
		}
		function Ol(e) {
			var t = T(e, kl, e);
			e.memoizedProps = e.pendingProps, t === null ? jl(e) : Q = t;
		}
		function kl(e) {
			var t = e.alternate, n = (e.mode & W) !== U;
			switch (n && Di(e), e.tag) {
				case 15:
				case 0:
					t = Os(t, e, e.pendingProps, e.type, void 0, $);
					break;
				case 11:
					t = Os(t, e, e.pendingProps, e.type.render, e.ref, $);
					break;
				case 5: Pa(e);
				default: $s(t, e), e = Q = Ar(e, sx), t = Ws(t, e, sx);
			}
			return n && Oi(e), t;
		}
		function Al(e, t, n, r) {
			ni(), Pa(t), Gv = null, Kv = 0;
			var i = t.return;
			try {
				if (hs(e, i, t, n, $)) {
					cx = zb, us(e, Lr(n, e.current)), Q = null;
					return;
				}
			} catch (t) {
				if (i !== null) throw Q = i, t;
				cx = zb, us(e, Lr(n, e.current)), Q = null;
				return;
			}
			t.flags & 32768 ? (G || r === qb ? e = !0 : ax || $ & 536870912 ? e = !1 : (ix = e = !0, (r === Jb || r === tx || r === Yb || r === Qb) && (r = uy.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Ml(t, e)) : jl(t);
		}
		function jl(e) {
			var t = e;
			do {
				if (t.flags & 32768) {
					Ml(t, ix);
					return;
				}
				var n = t.alternate;
				if (e = t.return, Di(t), n = T(t, Zs, n, t, sx), (t.mode & W) !== U && ki(t), n !== null) {
					Q = n;
					return;
				}
				if (t = t.sibling, t !== null) {
					Q = t;
					return;
				}
				Q = t = e;
			} while (t !== null);
			cx === Rb && (cx = Wb);
		}
		function Ml(e, t) {
			do {
				var n = Qs(e.alternate, e);
				if (n !== null) {
					n.flags &= 32767, Q = n;
					return;
				}
				if ((e.mode & W) !== U) {
					ki(e), n = e.actualDuration;
					for (var r = e.child; r !== null;) n += r.actualDuration, r = r.sibling;
					e.actualDuration = n;
				}
				if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
					Q = e;
					return;
				}
				Q = e = n;
			} while (e !== null);
			cx = Ub, Q = null;
		}
		function Nl(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
			e.cancelPendingCommit = null;
			do
				zl();
			while (Fx !== kx);
			if (dv.flushLegacyContextWarning(), dv.flushPendingUnsafeLifecycleWarnings(), (Z & (Ib | Lb)) !== Fb) throw Error("Should not already be working.");
			if (nr(n), l === Bb ? fr(f, p, n, Cx) : r === null ? cr(f, p, n, Cx) : dr(f, p, n, r, t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) != 0, Cx), t !== null) {
				if (n === 0 && console.error("finishedLanes should not be empty during a commit. This is a bug in React."), t === e.current) throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
				if (a = t.lanes | t.childLanes, a |= Fg, We(e, n, a, o, s, c), e === Gb && (Q = Gb = null, $ = 0), Lx = t, Ix = e, Rx = n, zx = a, Vx = i, Hx = r, Bx = p, Ux = d, Wx = Tx, Gx = null, t.actualDuration !== 0 || t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Ql(Op, function() {
					return ZS = window.event, Wx === Tx && (Wx = Dx), Bl(), null;
				})) : (e.callbackNode = null, e.callbackPriority = 0), w_ = null, S_ = __(), d !== null && pr(p, S_, d, Cx), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
					r = z.T, z.T = null, i = B.p, B.p = Up, o = Z, Z |= Lb;
					try {
						Tc(e, t, n);
					} finally {
						Z = o, B.p = i, z.T = r;
					}
				}
				Fx = Ax, Pl(), Fl(), Il();
			}
		}
		function Pl() {
			if (Fx === Ax) {
				Fx = kx;
				var e = Ix, t = Lx, n = Rx, r = (t.flags & 13878) != 0;
				if (t.subtreeFlags & 13878 || r) {
					r = z.T, z.T = null;
					var i = B.p;
					B.p = Up;
					var a = Z;
					Z |= Lb;
					try {
						wb = n, Tb = e, bi(), Fc(t, e), Tb = wb = null, n = JS;
						var o = Kn(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
						if (o !== s && s && s.ownerDocument && Gn(s.ownerDocument.documentElement, s)) {
							if (c !== null && qn(s)) {
								var l = c.start, u = c.end;
								if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
								else {
									var d = s.ownerDocument || document, f = d && d.defaultView || window;
									if (f.getSelection) {
										var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
										!p.extend && h > g && (o = g, g = h, h = o);
										var _ = Wn(s, h), v = Wn(s, g);
										if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
											var y = d.createRange();
											y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
										}
									}
								}
							}
							for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
								element: p,
								left: p.scrollLeft,
								top: p.scrollTop
							});
							for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
								var b = d[s];
								b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
							}
						}
						RC = !!qS, JS = qS = null;
					} finally {
						Z = a, B.p = i, z.T = r;
					}
				}
				e.current = t, Fx = jx;
			}
		}
		function Fl() {
			if (Fx === jx) {
				Fx = kx;
				var e = Gx;
				if (e !== null) {
					S_ = __();
					var t = C_, n = S_;
					!Cg || n <= t || (ev ? ev.run(console.timeStamp.bind(console, e, t, n, H, V, "secondary-light")) : console.timeStamp(e, t, n, H, V, "secondary-light"));
				}
				e = Ix, t = Lx, n = Rx;
				var r = (t.flags & 8772) != 0;
				if (t.subtreeFlags & 8772 || r) {
					r = z.T, z.T = null;
					var i = B.p;
					B.p = Up;
					var a = Z;
					Z |= Lb;
					try {
						wb = n, Tb = e, bi(), Ec(e, t.alternate, t), Tb = wb = null;
					} finally {
						Z = a, B.p = i, z.T = r;
					}
				}
				e = Bx, t = Ux, C_ = __(), e = t === null ? e : S_, t = C_, n = Wx === Ex, r = Cx, w_ === null ? !Cg || t <= e || (r ? r.run(console.timeStamp.bind(console, n ? "Commit Interrupted View Transition" : "Commit", e, t, H, V, n ? "error" : "secondary-dark")) : console.timeStamp(n ? "Commit Interrupted View Transition" : "Commit", e, t, H, V, n ? "error" : "secondary-dark")) : mr(e, t, w_, !1, r), Fx = Mx;
			}
		}
		function Il() {
			if (Fx === Nx || Fx === Mx) {
				if (Fx === Nx) {
					var e = C_;
					C_ = __();
					var t = C_, n = Wx === Ex;
					!Cg || t <= e || (ev ? ev.run(console.timeStamp.bind(console, n ? "Interrupted View Transition" : "Starting Animation", e, t, H, V, n ? "error" : "secondary-light")) : console.timeStamp(n ? "Interrupted View Transition" : "Starting Animation", e, t, H, V, n ? " error" : "secondary-light")), Wx !== Ex && (Wx = Ox);
				}
				Fx = kx, Cp(), e = Ix;
				var r = Lx;
				t = Rx, n = Hx;
				var i = r.actualDuration !== 0 || (r.subtreeFlags & 10256) != 0 || (r.flags & 10256) != 0;
				i ? Fx = Px : (Fx = kx, Lx = Ix = null, Rl(e, e.pendingLanes), Qx = 0, $x = null);
				var a = e.pendingLanes;
				if (a === 0 && (wx = null), i || Yl(e), a = Ze(t), r = r.stateNode, Pp && typeof Pp.onCommitFiberRoot == "function") try {
					var o = (r.current.flags & 128) == 128;
					switch (a) {
						case Up:
							var s = Ep;
							break;
						case Wp:
							s = Dp;
							break;
						case Gp:
							s = Op;
							break;
						case Kp:
							s = Ap;
							break;
						default: s = Op;
					}
					Pp.onCommitFiberRoot(Np, r, s, o);
				} catch (e) {
					Fp || (Fp = !0, console.error("React instrumentation encountered an error: %o", e));
				}
				if (Ip && e.memoizedUpdaters.clear(), il(), n !== null) {
					o = z.T, s = B.p, B.p = Up, z.T = null;
					try {
						var c = e.onRecoverableError;
						for (r = 0; r < n.length; r++) {
							var l = n[r], u = Ll(l.stack);
							T(l.source, c, l.value, u);
						}
					} finally {
						z.T = o, B.p = s;
					}
				}
				Rx & 3 && zl(), N(e), a = e.pendingLanes, t & 261930 && a & 42 ? (iv = !0, e === Jx ? qx++ : (qx = 0, Jx = e)) : qx = 0, i || hl(t, C_), eu(0, !1);
			}
		}
		function Ll(e) {
			return e = { componentStack: e }, Object.defineProperty(e, "digest", { get: function() {
				console.error("You are accessing \"digest\" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.");
			} }), e;
		}
		function Rl(e, t) {
			(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, mi(t)));
		}
		function zl() {
			return Pl(), Fl(), Il(), Bl();
		}
		function Bl() {
			if (Fx !== Px) return !1;
			var e = Ix, t = zx;
			zx = 0;
			var n = Ze(Rx), r = Gp === 0 || Gp > n ? Gp : n;
			n = z.T;
			var i = B.p;
			try {
				B.p = r, z.T = null;
				var a = Vx;
				Vx = null, r = Ix;
				var o = Rx;
				if (Fx = kx, Lx = Ix = null, Rx = 0, (Z & (Ib | Lb)) !== Fb) throw Error("Cannot flush passive effects while already rendering.");
				nr(o), Yx = !0, Xx = !1;
				var s = 0;
				if (w_ = null, s = wp(), Wx === Ox) hr(C_, s, ev);
				else {
					var c = C_, l = s, u = Wx === Dx;
					!Cg || l <= c || (Cx ? Cx.run(console.timeStamp.bind(console, u ? "Waiting for Paint" : "Waiting", c, l, H, V, "secondary-light")) : console.timeStamp(u ? "Waiting for Paint" : "Waiting", c, l, H, V, "secondary-light"));
				}
				c = Z, Z |= Lb;
				var d = r.current;
				bi(), el(d);
				var f = r.current;
				d = Bx, bi(), Kc(r, f, o, a, d), Yl(r), Z = c;
				var p = wp();
				if (f = s, d = Cx, w_ === null ? !Cg || p <= f || (d ? d.run(console.timeStamp.bind(console, "Remaining Effects", f, p, H, V, "secondary-dark")) : console.timeStamp("Remaining Effects", f, p, H, V, "secondary-dark")) : mr(f, p, w_, !0, d), hl(o, p), eu(0, !1), Xx ? r === $x ? Qx++ : (Qx = 0, $x = r) : Qx = 0, Xx = Yx = !1, Pp && typeof Pp.onPostCommitFiberRoot == "function") try {
					Pp.onPostCommitFiberRoot(Np, r);
				} catch (e) {
					Fp || (Fp = !0, console.error("React instrumentation encountered an error: %o", e));
				}
				var m = r.current.stateNode;
				return m.effectDuration = 0, m.passiveEffectDuration = 0, !0;
			} finally {
				B.p = i, z.T = n, Rl(e, t);
			}
		}
		function Vl(e, t, n) {
			t = Lr(n, t), ji(t), t = fs(e.stateNode, t, 2), e = sa(e, t, 2), e !== null && (Ue(e, 2), N(e));
		}
		function M(e, t, n) {
			if (eS = !1, e.tag === 3) Vl(e, e, n);
			else {
				for (; t !== null;) {
					if (t.tag === 3) {
						Vl(t, e, n);
						return;
					}
					if (t.tag === 1) {
						var r = t.stateNode;
						if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wx === null || !wx.has(r))) {
							e = Lr(n, e), ji(e), n = ps(2), r = sa(t, n, 2), r !== null && (ms(n, r, t, e), Ue(r, 2), N(r));
							return;
						}
					}
					t = t.return;
				}
				console.error("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s", n);
			}
		}
		function Hl(e, t, n) {
			var r = e.pingCache;
			if (r === null) {
				r = e.pingCache = new Pb();
				var i = /* @__PURE__ */ new Set();
				r.set(t, i);
			} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
			i.has(n) || (ox = !0, i.add(n), r = Ul.bind(null, e, t, n), Ip && Zl(e, n), t.then(r, r));
		}
		function Ul(e, t, n) {
			var r = e.pingCache;
			r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, n & 127 ? 0 > j_ && (A_ = j_ = __(), M_ = v_("Promise Resolved"), N_ = b_) : n & 4194048 && 0 > H_ && (B_ = H_ = __(), W_ = v_("Promise Resolved"), U_ = b_), al() && z.actQueue === null && console.error("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act"), Gb === e && ($ & n) === n && (cx === Hb || cx === Vb && ($ & 62914560) === $ && wp() - _x < yx ? (Z & Ib) === Fb && gl(e, 0) : dx |= n, px === $ && (px = 0)), N(e);
		}
		function Wl(e, t) {
			t === 0 && (t = Ve()), e = yr(e, t), e !== null && (Ue(e, t), N(e));
		}
		function Gl(e) {
			var t = e.memoizedState, n = 0;
			t !== null && (n = t.retryLane), Wl(e, n);
		}
		function Kl(e, t) {
			var n = 0;
			switch (e.tag) {
				case 31:
				case 13:
					var r = e.stateNode, i = e.memoizedState;
					i !== null && (n = i.retryLane);
					break;
				case 19:
					r = e.stateNode;
					break;
				case 22:
					r = e.stateNode._retryCache;
					break;
				default: throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
			}
			r !== null && r.delete(t), Wl(e, n);
		}
		function ql(e, t, n) {
			if (t.subtreeFlags & 67117056) for (t = t.child; t !== null;) {
				var r = e, i = t, a = i.type === Lf;
				a = n || a, i.tag === 22 ? i.memoizedState === null && (a && i.flags & 8192 ? T(i, Jl, r, i) : i.subtreeFlags & 67108864 && T(i, ql, r, i, a)) : i.flags & 67108864 ? a && T(i, Jl, r, i) : ql(r, i, a), t = t.sibling;
			}
		}
		function Jl(e, t) {
			Fe(!0);
			try {
				zc(t), nl(t), Vc(e, t.alternate, t, !1), Jc(e, t, 0, null, !1, 0);
			} finally {
				Fe(!1);
			}
		}
		function Yl(e) {
			var t = !0;
			e.current.mode & (Bg | Vg) || (t = !1), ql(e, e.current, t);
		}
		function Xl(e) {
			if ((Z & Ib) === Fb) {
				var t = e.tag;
				if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
					if (t = x(e) || "ReactComponent", tS !== null) {
						if (tS.has(t)) return;
						tS.add(t);
					} else tS = /* @__PURE__ */ new Set([t]);
					T(e, function() {
						console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.");
					});
				}
			}
		}
		function Zl(e, t) {
			Ip && e.memoizedUpdaters.forEach(function(n) {
				Ye(e, n, t);
			});
		}
		function Ql(e, t) {
			var n = z.actQueue;
			return n === null ? bp(e, t) : (n.push(t), iS);
		}
		function $l(e) {
			al() && z.actQueue === null && T(e, function() {
				console.error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act", x(e));
			});
		}
		function N(e) {
			e !== oS && e.next === null && (oS === null ? aS = oS = e : oS = oS.next = e), lS = !0, z.actQueue === null ? sS || (sS = !0, au()) : cS || (cS = !0, au());
		}
		function eu(e, t) {
			if (!uS && lS) {
				uS = !0;
				do
					for (var n = !1, r = aS; r !== null;) {
						if (!t) if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Lp(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, ru(r, a));
						} else a = $, a = Re(r, r === Gb ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== eC), !(a & 3) || ze(r, a) || (n = !0, ru(r, a));
						r = r.next;
					}
				while (n);
				uS = !1;
			}
		}
		function P() {
			ZS = window.event, F();
		}
		function F() {
			lS = cS = sS = !1;
			var e = 0;
			dS !== 0 && qu() && (e = dS);
			for (var t = wp(), n = null, r = aS; r !== null;) {
				var i = r.next, a = tu(r, t);
				a === 0 ? (r.next = null, n === null ? aS = i : n.next = i, i === null && (oS = n)) : (n = r, (e !== 0 || a & 3) && (lS = !0)), r = i;
			}
			Fx !== kx && Fx !== Px || eu(e, !1), dS !== 0 && (dS = 0);
		}
		function tu(e, t) {
			for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
				var o = 31 - Lp(a), s = 1 << o, c = i[o];
				c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Be(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
			}
			if (t = Gb, n = $, n = Re(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== eC), r = e.callbackNode, n === 0 || e === t && (nx === Jb || nx === tx) || e.cancelPendingCommit !== null) return r !== null && iu(r), e.callbackNode = null, e.callbackPriority = 0;
			if (!(n & 3) || ze(e, n)) {
				if (t = n & -n, t !== e.callbackPriority || z.actQueue !== null && r !== fS) iu(r);
				else return t;
				switch (Ze(n)) {
					case Up:
					case Wp:
						n = Dp;
						break;
					case Gp:
						n = Op;
						break;
					case Kp:
						n = Ap;
						break;
					default: n = Op;
				}
				return r = nu.bind(null, e), z.actQueue === null ? n = bp(n, r) : (z.actQueue.push(r), n = fS), e.callbackPriority = t, e.callbackNode = n, t;
			}
			return r !== null && iu(r), e.callbackPriority = 2, e.callbackNode = null, 2;
		}
		function nu(e, t) {
			if (iv = rv = !1, ZS = window.event, Fx !== kx && Fx !== Px) return e.callbackNode = null, e.callbackPriority = 0, null;
			var n = e.callbackNode;
			if (Wx === Tx && (Wx = Dx), zl() && e.callbackNode !== n) return null;
			var r = $;
			return r = Re(e, e === Gb ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== eC), r === 0 ? null : (ll(e, r, t), tu(e, wp()), e.callbackNode != null && e.callbackNode === n ? nu.bind(null, e) : null);
		}
		function ru(e, t) {
			if (zl()) return null;
			rv = iv, iv = !1, ll(e, t, !0);
		}
		function iu(e) {
			e !== fS && e !== null && xp(e);
		}
		function au() {
			z.actQueue !== null && z.actQueue.push(function() {
				return F(), null;
			}), nC(function() {
				(Z & (Ib | Lb)) === Fb ? F() : bp(Ep, P);
			});
		}
		function ou() {
			if (dS === 0) {
				var e = sv;
				e === 0 && (e = Bp, Bp <<= 1, !(Bp & 261888) && (Bp = 256)), dS = e;
			}
			return dS;
		}
		function su(e) {
			return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (je(e, "action"), fn("" + e));
		}
		function cu(e, t) {
			var n = t.ownerDocument.createElement("input");
			return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
		}
		function lu(e, t, n, r, i) {
			if (t === "submit" && n && n.stateNode === i) {
				var a = su((i[Yp] || null).action), o = r.submitter;
				o && (t = (t = o[Yp] || null) ? su(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
				var s = new lh("action", "action", null, r, i);
				e.push({
					event: s,
					listeners: [{
						instance: null,
						listener: function() {
							if (r.defaultPrevented) {
								if (dS !== 0) {
									var e = o ? cu(i, o) : new FormData(i), t = {
										pending: !0,
										data: e,
										method: i.method,
										action: a
									};
									Object.freeze(t), zo(n, t, null, e);
								}
							} else typeof a == "function" && (s.preventDefault(), e = o ? cu(i, o) : new FormData(i), t = {
								pending: !0,
								data: e,
								method: i.method,
								action: a
							}, Object.freeze(t), zo(n, t, a, e));
						},
						currentTarget: i
					}]
				});
			}
		}
		function uu(e, t, n) {
			e.currentTarget = n;
			try {
				t(e);
			} catch (e) {
				mg(e);
			}
			e.currentTarget = null;
		}
		function du(e, t) {
			t = (t & 4) != 0;
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				a: {
					var i = void 0, a = r.event;
					if (r = r.listeners, t) for (var o = r.length - 1; 0 <= o; o--) {
						var s = r[o], c = s.instance, l = s.currentTarget;
						if (s = s.listener, c !== i && a.isPropagationStopped()) break a;
						c === null ? uu(a, s, l) : T(c, uu, a, s, l), i = c;
					}
					else for (o = 0; o < r.length; o++) {
						if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== i && a.isPropagationStopped()) break a;
						c === null ? uu(a, s, l) : T(c, uu, a, s, l), i = c;
					}
				}
			}
		}
		function I(e, t) {
			mS.has(e) || console.error("Did not expect a listenToNonDelegatedEvent() call for \"%s\". This is a bug in React. Please file an issue.", e);
			var n = t[Zp];
			n === void 0 && (n = t[Zp] = /* @__PURE__ */ new Set());
			var r = e + "__bubble";
			n.has(r) || (mu(t, e, 2, !1), n.add(r));
		}
		function fu(e, t, n) {
			mS.has(e) && !t && console.error("Did not expect a listenToNativeEvent() call for \"%s\" in the bubble phase. This is a bug in React. Please file an issue.", e);
			var r = 0;
			t && (r |= 4), mu(n, e, r, t);
		}
		function pu(e) {
			if (!e[hS]) {
				e[hS] = !0, nm.forEach(function(t) {
					t !== "selectionchange" && (mS.has(t) || fu(t, !1, e), fu(t, !0, e));
				});
				var t = e.nodeType === 9 ? e : e.ownerDocument;
				t === null || t[hS] || (t[hS] = !0, fu("selectionchange", !1, t));
			}
		}
		function mu(e, t, n, r) {
			switch (hf(t)) {
				case Up:
					var i = uf;
					break;
				case Wp:
					i = df;
					break;
				default: i = ff;
			}
			n = i.bind(null, t, n, e), i = void 0, !rh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
				capture: !0,
				passive: i
			}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
		}
		function hu(e, t, n, r, i) {
			var a = r;
			if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
				if (r === null) return;
				var o = r.tag;
				if (o === 3 || o === 4) {
					var s = r.stateNode.containerInfo;
					if (s === i) break;
					if (o === 4) for (o = r.return; o !== null;) {
						var c = o.tag;
						if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
						o = o.return;
					}
					for (; s !== null;) {
						if (o = tt(s), o === null) return;
						if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
							r = a = o;
							continue a;
						}
						s = s.parentNode;
					}
				}
				r = r.return;
			}
			gn(function() {
				var r = a, i = mn(n), o = [];
				a: {
					var s = cg.get(e);
					if (s !== void 0) {
						var c = lh, l = e;
						switch (e) {
							case "keypress": if (yn(n) === 0) break a;
							case "keydown":
							case "keyup":
								c = Eh;
								break;
							case "focusin":
								l = "focus", c = vh;
								break;
							case "focusout":
								l = "blur", c = vh;
								break;
							case "beforeblur":
							case "afterblur":
								c = vh;
								break;
							case "click": if (n.button === 2) break a;
							case "auxclick":
							case "dblclick":
							case "mousedown":
							case "mousemove":
							case "mouseup":
							case "mouseout":
							case "mouseover":
							case "contextmenu":
								c = gh;
								break;
							case "drag":
							case "dragend":
							case "dragenter":
							case "dragexit":
							case "dragleave":
							case "dragover":
							case "dragstart":
							case "drop":
								c = _h;
								break;
							case "touchcancel":
							case "touchend":
							case "touchmove":
							case "touchstart":
								c = Oh;
								break;
							case tg:
							case ng:
							case rg:
								c = yh;
								break;
							case sg:
								c = kh;
								break;
							case "scroll":
							case "scrollend":
								c = dh;
								break;
							case "wheel":
								c = Ah;
								break;
							case "copy":
							case "cut":
							case "paste":
								c = bh;
								break;
							case "gotpointercapture":
							case "lostpointercapture":
							case "pointercancel":
							case "pointerdown":
							case "pointermove":
							case "pointerout":
							case "pointerover":
							case "pointerup":
								c = Dh;
								break;
							case "toggle":
							case "beforetoggle": c = jh;
						}
						var u = (t & 4) != 0, d = !u && (e === "scroll" || e === "scrollend"), f = u ? s === null ? null : s + "Capture" : s;
						u = [];
						for (var p = r, m; p !== null;) {
							var h = p;
							if (m = h.stateNode, h = h.tag, h !== 5 && h !== 26 && h !== 27 || m === null || f === null || (h = _n(p, f), h != null && u.push(gu(p, h, m))), d) break;
							p = p.return;
						}
						0 < u.length && (s = new c(s, l, null, n, i), o.push({
							event: s,
							listeners: u
						}));
					}
				}
				if (!(t & 7)) {
					a: {
						if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Qm && (l = n.relatedTarget || n.fromElement) && (tt(l) || l[Xp])) break a;
						if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? tt(l) : null, l !== null && (d = te(l), u = l.tag, l !== d || u !== 5 && u !== 27 && u !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
							if (u = gh, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Dh, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : rt(c), m = l == null ? s : rt(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, tt(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
								for (u = vu, f = c, p = l, m = 0, h = f; h; h = u(h)) m++;
								h = 0;
								for (var g = p; g; g = u(g)) h++;
								for (; 0 < m - h;) f = u(f), m--;
								for (; 0 < h - m;) p = u(p), h--;
								for (; m--;) {
									if (f === p || p !== null && f === p.alternate) {
										u = f;
										break b;
									}
									f = u(f), p = u(p);
								}
								u = null;
							}
							else u = null;
							c !== null && yu(o, s, c, u, !1), l !== null && d !== null && yu(o, d, l, u, !0);
						}
					}
					a: {
						if (s = r ? rt(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var _ = Pn;
						else if (kn(s)) if (Gh) _ = Bn;
						else {
							_ = Rn;
							var v = Ln;
						}
						else c = s.nodeName, !c || c.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && on(r.elementType) && (_ = Pn) : _ = zn;
						if (_ &&= _(e, r)) {
							jn(o, _, n, i);
							break a;
						}
						v && v(e, s, r), e === "focusout" && r && s.type === "number" && r.memoizedProps.value != null && wt(s, "number", s.value);
					}
					switch (v = r ? rt(r) : window, e) {
						case "focusin":
							(kn(v) || v.contentEditable === "true") && (Jh = v, Yh = r, Xh = null);
							break;
						case "focusout":
							Xh = Yh = Jh = null;
							break;
						case "mousedown":
							Zh = !0;
							break;
						case "contextmenu":
						case "mouseup":
						case "dragend":
							Zh = !1, Jn(o, n, i);
							break;
						case "selectionchange": if (qh) break;
						case "keydown":
						case "keyup": Jn(o, n, i);
					}
					var y;
					if (Ph) b: {
						switch (e) {
							case "compositionstart":
								var b = "onCompositionStart";
								break b;
							case "compositionend":
								b = "onCompositionEnd";
								break b;
							case "compositionupdate":
								b = "onCompositionUpdate";
								break b;
						}
						b = void 0;
					}
					else Vh ? Tn(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === Nh && (b = "onCompositionStart");
					b && (Lh && n.locale !== "ko" && (Vh || b !== "onCompositionStart" ? b === "onCompositionEnd" && Vh && (y = vn()) : (ah = i, oh = "value" in ah ? ah.value : ah.textContent, Vh = !0)), v = _u(r, b), 0 < v.length && (b = new xh(b, e, null, n, i), o.push({
						event: b,
						listeners: v
					}), y ? b.data = y : (y = En(n), y !== null && (b.data = y)))), (y = Ih ? Dn(e, n) : On(e, n)) && (b = _u(r, "onBeforeInput"), 0 < b.length && (v = new Sh("onBeforeInput", "beforeinput", null, n, i), o.push({
						event: v,
						listeners: b
					}), v.data = y)), lu(o, e, r, n, i);
				}
				du(o, t);
			});
		}
		function gu(e, t, n) {
			return {
				instance: e,
				listener: t,
				currentTarget: n
			};
		}
		function _u(e, t) {
			for (var n = t + "Capture", r = []; e !== null;) {
				var i = e, a = i.stateNode;
				if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = _n(e, n), i != null && r.unshift(gu(e, i, a)), i = _n(e, t), i != null && r.push(gu(e, i, a))), e.tag === 3) return r;
				e = e.return;
			}
			return [];
		}
		function vu(e) {
			if (e === null) return null;
			do
				e = e.return;
			while (e && e.tag !== 5 && e.tag !== 27);
			return e || null;
		}
		function yu(e, t, n, r, i) {
			for (var a = t._reactName, o = []; n !== null && n !== r;) {
				var s = n, c = s.alternate, l = s.stateNode;
				if (s = s.tag, c !== null && c === r) break;
				s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = _n(n, a), l != null && o.unshift(gu(n, l, c))) : i || (l = _n(n, a), l != null && o.push(gu(n, l, c)))), n = n.return;
			}
			o.length !== 0 && e.push({
				event: t,
				listeners: o
			});
		}
		function bu(e, t) {
			ln(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Gm || (Gm = !0, e === "select" && t.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
			var n = {
				registrationNameDependencies: rm,
				possibleRegistrationNames: im
			};
			on(e) || typeof t.is == "string" || dn(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
		}
		function xu(e, t, n, r) {
			t !== n && (n = Tu(n), Tu(t) !== n && (r[e] = t));
		}
		function Su(e, t, n) {
			t.forEach(function(t) {
				n[ju(t)] = t === "style" ? Mu(e) : e.getAttribute(t);
			});
		}
		function Cu(e, t) {
			!1 === t ? console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
		}
		function wu(e, t) {
			return e = e.namespaceURI === Lm || e.namespaceURI === Rm ? e.ownerDocument.createElementNS(e.namespaceURI, e.tagName) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
		}
		function Tu(e) {
			return ke(e) && (console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", Oe(e)), Ae(e)), (typeof e == "string" ? e : "" + e).replace(wS, "\n").replace(TS, "");
		}
		function Eu(e, t) {
			return t = Tu(t), Tu(e) === t;
		}
		function Du(e, t, n, r, i, a) {
			switch (n) {
				case "children":
					typeof r == "string" ? (en(r, t, !1), t === "body" || t === "textarea" && r === "" || tn(e, r)) : (typeof r == "number" || typeof r == "bigint") && (en("" + r, t, !1), t !== "body" && tn(e, "" + r));
					break;
				case "className":
					ft(e, "class", r);
					break;
				case "tabIndex":
					ft(e, "tabindex", r);
					break;
				case "dir":
				case "role":
				case "viewBox":
				case "width":
				case "height":
					ft(e, n, r);
					break;
				case "style":
					an(e, r, a);
					break;
				case "data": if (t !== "object") {
					ft(e, "data", r);
					break;
				}
				case "src":
				case "href":
					if (r === "" && (t !== "a" || n !== "href")) {
						console.error(n === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", n, n), e.removeAttribute(n);
						break;
					}
					if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break;
					}
					je(r, n), r = fn("" + r), e.setAttribute(n, r);
					break;
				case "action":
				case "formAction":
					if (r != null && (t === "form" ? n === "formAction" ? console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.") : typeof r == "function" && (i.encType == null && i.method == null || xS || (xS = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), i.target == null || bS || (bS = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))) : t === "input" || t === "button" ? n === "action" ? console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.") : t !== "input" || i.type === "submit" || i.type === "image" || vS ? t !== "button" || i.type == null || i.type === "submit" || vS ? typeof r == "function" && (i.name == null || yS || (yS = !0, console.error("Cannot specify a \"name\" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.")), i.formEncType == null && i.formMethod == null || xS || (xS = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), i.formTarget == null || bS || (bS = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))) : (vS = !0, console.error("A button can only specify a formAction along with type=\"submit\" or no type.")) : (vS = !0, console.error("An input can only specify a formAction along with type=\"submit\" or type=\"image\".")) : console.error(n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>.")), typeof r == "function") {
						e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
						break;
					} else typeof a == "function" && (n === "formAction" ? (t !== "input" && Du(e, t, "name", i.name, i, null), Du(e, t, "formEncType", i.formEncType, i, null), Du(e, t, "formMethod", i.formMethod, i, null), Du(e, t, "formTarget", i.formTarget, i, null)) : (Du(e, t, "encType", i.encType, i, null), Du(e, t, "method", i.method, i, null), Du(e, t, "target", i.target, i, null)));
					if (r == null || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break;
					}
					je(r, n), r = fn("" + r), e.setAttribute(n, r);
					break;
				case "onClick":
					r != null && (typeof r != "function" && Cu(n, r), e.onclick = pn);
					break;
				case "onScroll":
					r != null && (typeof r != "function" && Cu(n, r), I("scroll", e));
					break;
				case "onScrollEnd":
					r != null && (typeof r != "function" && Cu(n, r), I("scrollend", e));
					break;
				case "dangerouslySetInnerHTML":
					if (r != null) {
						if (typeof r != "object" || !("__html" in r)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						if (n = r.__html, n != null) {
							if (i.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
							e.innerHTML = n;
						}
					}
					break;
				case "multiple":
					e.multiple = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "muted":
					e.muted = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": break;
				case "autoFocus": break;
				case "xlinkHref":
					if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
						e.removeAttribute("xlink:href");
						break;
					}
					je(r, n), n = fn("" + r), e.setAttributeNS(ES, "xlink:href", n);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					r != null && typeof r != "function" && typeof r != "symbol" ? (je(r, n), e.setAttribute(n, "" + r)) : e.removeAttribute(n);
					break;
				case "inert": r !== "" || CS[n] || (CS[n] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", n));
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
					r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
					break;
				case "capture":
				case "download":
					!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? (je(r, n), e.setAttribute(n, r)) : e.removeAttribute(n);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? (je(r, n), e.setAttribute(n, r)) : e.removeAttribute(n);
					break;
				case "rowSpan":
				case "start":
					r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : (je(r, n), e.setAttribute(n, r));
					break;
				case "popover":
					I("beforetoggle", e), I("toggle", e), dt(e, "popover", r);
					break;
				case "xlinkActuate":
					pt(e, ES, "xlink:actuate", r);
					break;
				case "xlinkArcrole":
					pt(e, ES, "xlink:arcrole", r);
					break;
				case "xlinkRole":
					pt(e, ES, "xlink:role", r);
					break;
				case "xlinkShow":
					pt(e, ES, "xlink:show", r);
					break;
				case "xlinkTitle":
					pt(e, ES, "xlink:title", r);
					break;
				case "xlinkType":
					pt(e, ES, "xlink:type", r);
					break;
				case "xmlBase":
					pt(e, DS, "xml:base", r);
					break;
				case "xmlLang":
					pt(e, DS, "xml:lang", r);
					break;
				case "xmlSpace":
					pt(e, DS, "xml:space", r);
					break;
				case "is":
					a != null && console.error("Cannot update the \"is\" prop after it has been initialized."), dt(e, "is", r);
					break;
				case "innerText":
				case "textContent": break;
				case "popoverTarget": SS || typeof r != "object" || !r || (SS = !0, console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.", r));
				default: !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N" ? (n = sn(n), dt(e, n, r)) : rm.hasOwnProperty(n) && r != null && typeof r != "function" && Cu(n, r);
			}
		}
		function Ou(e, t, n, r, i, a) {
			switch (n) {
				case "style":
					an(e, r, a);
					break;
				case "dangerouslySetInnerHTML":
					if (r != null) {
						if (typeof r != "object" || !("__html" in r)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						if (n = r.__html, n != null) {
							if (i.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
							e.innerHTML = n;
						}
					}
					break;
				case "children":
					typeof r == "string" ? tn(e, r) : (typeof r == "number" || typeof r == "bigint") && tn(e, "" + r);
					break;
				case "onScroll":
					r != null && (typeof r != "function" && Cu(n, r), I("scroll", e));
					break;
				case "onScrollEnd":
					r != null && (typeof r != "function" && Cu(n, r), I("scrollend", e));
					break;
				case "onClick":
					r != null && (typeof r != "function" && Cu(n, r), e.onclick = pn);
					break;
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "innerHTML":
				case "ref": break;
				case "innerText":
				case "textContent": break;
				default: if (rm.hasOwnProperty(n)) r != null && typeof r != "function" && Cu(n, r);
				else a: {
					if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), a = e[Yp] || null, a = a == null ? null : a[n], typeof a == "function" && e.removeEventListener(t, a, i), typeof r == "function")) {
						typeof a != "function" && a !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
						break a;
					}
					n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : dt(e, n, r);
				}
			}
		}
		function ku(e, t, n) {
			switch (bu(t, n), t) {
				case "div":
				case "span":
				case "svg":
				case "path":
				case "a":
				case "g":
				case "p":
				case "li": break;
				case "img":
					I("error", e), I("load", e);
					var r = !1, i = !1, a;
					for (a in n) if (n.hasOwnProperty(a)) {
						var o = n[a];
						if (o != null) switch (a) {
							case "src":
								r = !0;
								break;
							case "srcSet":
								i = !0;
								break;
							case "children":
							case "dangerouslySetInnerHTML": throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							default: Du(e, t, a, o, n, null);
						}
					}
					i && Du(e, t, "srcSet", n.srcSet, n, null), r && Du(e, t, "src", n.src, n, null);
					return;
				case "input":
					ct("input", n), I("invalid", e);
					var s = a = o = i = null, c = null, l = null;
					for (r in n) if (n.hasOwnProperty(r)) {
						var u = n[r];
						if (u != null) switch (r) {
							case "name":
								i = u;
								break;
							case "type":
								o = u;
								break;
							case "checked":
								c = u;
								break;
							case "defaultChecked":
								l = u;
								break;
							case "value":
								a = u;
								break;
							case "defaultValue":
								s = u;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
								break;
							default: Du(e, t, r, u, n, null);
						}
					}
					xt(e, n), Ct(e, a, s, c, l, o, i, !1);
					return;
				case "select":
					for (i in ct("select", n), I("invalid", e), r = o = a = null, n) if (n.hasOwnProperty(i) && (s = n[i], s != null)) switch (i) {
						case "value":
							a = s;
							break;
						case "defaultValue":
							o = s;
							break;
						case "multiple": r = s;
						default: Du(e, t, i, s, n, null);
					}
					Ot(e, n), t = a, n = o, e.multiple = !!r, t == null ? n != null && Dt(e, !!r, n, !0) : Dt(e, !!r, t, !1);
					return;
				case "textarea":
					for (o in ct("textarea", n), I("invalid", e), a = i = r = null, n) if (n.hasOwnProperty(o) && (s = n[o], s != null)) switch (o) {
						case "value":
							r = s;
							break;
						case "defaultValue":
							i = s;
							break;
						case "children":
							a = s;
							break;
						case "dangerouslySetInnerHTML":
							if (s != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							break;
						default: Du(e, t, o, s, n, null);
					}
					kt(e, n), jt(e, r, i, a);
					return;
				case "option":
					for (c in Tt(e, n), n) if (n.hasOwnProperty(c) && (r = n[c], r != null)) switch (c) {
						case "selected":
							e.selected = r && typeof r != "function" && typeof r != "symbol";
							break;
						default: Du(e, t, c, r, n, null);
					}
					return;
				case "dialog":
					I("beforetoggle", e), I("toggle", e), I("cancel", e), I("close", e);
					break;
				case "iframe":
				case "object":
					I("load", e);
					break;
				case "video":
				case "audio":
					for (r = 0; r < pS.length; r++) I(pS[r], e);
					break;
				case "image":
					I("error", e), I("load", e);
					break;
				case "details":
					I("toggle", e);
					break;
				case "embed":
				case "source":
				case "link": I("error", e), I("load", e);
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
					for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
						default: Du(e, t, l, r, n, null);
					}
					return;
				default: if (on(t)) {
					for (u in n) n.hasOwnProperty(u) && (r = n[u], r !== void 0 && Ou(e, t, u, r, n, void 0));
					return;
				}
			}
			for (s in n) n.hasOwnProperty(s) && (r = n[s], r != null && Du(e, t, s, r, n, null));
		}
		function Au(e, t, n, r) {
			switch (bu(t, r), t) {
				case "div":
				case "span":
				case "svg":
				case "path":
				case "a":
				case "g":
				case "p":
				case "li": break;
				case "input":
					var i = null, a = null, o = null, s = null, c = null, l = null, u = null;
					for (p in n) {
						var d = n[p];
						if (n.hasOwnProperty(p) && d != null) switch (p) {
							case "checked": break;
							case "value": break;
							case "defaultValue": c = d;
							default: r.hasOwnProperty(p) || Du(e, t, p, null, r, d);
						}
					}
					for (var f in r) {
						var p = r[f];
						if (d = n[f], r.hasOwnProperty(f) && (p != null || d != null)) switch (f) {
							case "type":
								a = p;
								break;
							case "name":
								i = p;
								break;
							case "checked":
								l = p;
								break;
							case "defaultChecked":
								u = p;
								break;
							case "value":
								o = p;
								break;
							case "defaultValue":
								s = p;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (p != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
								break;
							default: p !== d && Du(e, t, f, p, r, d);
						}
					}
					t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, r = r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null, t || !r || _S || (console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), _S = !0), !t || r || gS || (console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), gS = !0), St(e, o, s, c, l, u, a, i);
					return;
				case "select":
					for (a in p = o = s = f = null, n) if (c = n[a], n.hasOwnProperty(a) && c != null) switch (a) {
						case "value": break;
						case "multiple": p = c;
						default: r.hasOwnProperty(a) || Du(e, t, a, null, r, c);
					}
					for (i in r) if (a = r[i], c = n[i], r.hasOwnProperty(i) && (a != null || c != null)) switch (i) {
						case "value":
							f = a;
							break;
						case "defaultValue":
							s = a;
							break;
						case "multiple": o = a;
						default: a !== c && Du(e, t, i, a, r, c);
					}
					r = s, t = o, n = p, f == null ? !!n != !!t && (r == null ? Dt(e, !!t, t ? [] : "", !1) : Dt(e, !!t, r, !0)) : Dt(e, !!t, f, !1);
					return;
				case "textarea":
					for (s in p = f = null, n) if (i = n[s], n.hasOwnProperty(s) && i != null && !r.hasOwnProperty(s)) switch (s) {
						case "value": break;
						case "children": break;
						default: Du(e, t, s, null, r, i);
					}
					for (o in r) if (i = r[o], a = n[o], r.hasOwnProperty(o) && (i != null || a != null)) switch (o) {
						case "value":
							f = i;
							break;
						case "defaultValue":
							p = i;
							break;
						case "children": break;
						case "dangerouslySetInnerHTML":
							if (i != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							break;
						default: i !== a && Du(e, t, o, i, r, a);
					}
					At(e, f, p);
					return;
				case "option":
					for (var m in n) if (f = n[m], n.hasOwnProperty(m) && f != null && !r.hasOwnProperty(m)) switch (m) {
						case "selected":
							e.selected = !1;
							break;
						default: Du(e, t, m, null, r, f);
					}
					for (c in r) if (f = r[c], p = n[c], r.hasOwnProperty(c) && f !== p && (f != null || p != null)) switch (c) {
						case "selected":
							e.selected = f && typeof f != "function" && typeof f != "symbol";
							break;
						default: Du(e, t, c, f, r, p);
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
					for (var h in n) f = n[h], n.hasOwnProperty(h) && f != null && !r.hasOwnProperty(h) && Du(e, t, h, null, r, f);
					for (l in r) if (f = r[l], p = n[l], r.hasOwnProperty(l) && f !== p && (f != null || p != null)) switch (l) {
						case "children":
						case "dangerouslySetInnerHTML":
							if (f != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							break;
						default: Du(e, t, l, f, r, p);
					}
					return;
				default: if (on(t)) {
					for (var g in n) f = n[g], n.hasOwnProperty(g) && f !== void 0 && !r.hasOwnProperty(g) && Ou(e, t, g, void 0, r, f);
					for (u in r) f = r[u], p = n[u], !r.hasOwnProperty(u) || f === p || f === void 0 && p === void 0 || Ou(e, t, u, f, r, p);
					return;
				}
			}
			for (var _ in n) f = n[_], n.hasOwnProperty(_) && f != null && !r.hasOwnProperty(_) && Du(e, t, _, null, r, f);
			for (d in r) f = r[d], p = n[d], !r.hasOwnProperty(d) || f === p || f == null && p == null || Du(e, t, d, f, r, p);
		}
		function ju(e) {
			switch (e) {
				case "class": return "className";
				case "for": return "htmlFor";
				default: return e;
			}
		}
		function Mu(e) {
			var t = {};
			e = e.style;
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				t[r] = e.getPropertyValue(r);
			}
			return t;
		}
		function Nu(e, t, n) {
			if (t != null && typeof t != "object") console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			else {
				var r, i = r = "", a;
				for (a in t) if (t.hasOwnProperty(a)) {
					var o = t[a];
					o != null && typeof o != "boolean" && o !== "" && (a.indexOf("--") === 0 ? (Me(o, a), r += i + a + ":" + ("" + o).trim()) : typeof o != "number" || o === 0 || Im.has(a) ? (Me(o, a), r += i + a.replace(Em, "-$1").toLowerCase().replace(Dm, "-ms-") + ":" + ("" + o).trim()) : r += i + a.replace(Em, "-$1").toLowerCase().replace(Dm, "-ms-") + ":" + o + "px", i = ";");
				}
				r ||= null, t = e.getAttribute("style"), t !== r && (r = Tu(r), Tu(t) !== r && (n.style = Mu(e)));
			}
		}
		function Pu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (je(r, t), e === "" + r) return;
			}
			xu(t, e, r, a);
		}
		function Fu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) {
				switch (typeof r) {
					case "function":
					case "symbol": return;
				}
				if (!r) return;
			} else switch (typeof r) {
				case "function":
				case "symbol": break;
				default: if (r) return;
			}
			xu(t, e, r, a);
		}
		function Iu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol": break;
				default: if (je(r, n), e === "" + r) return;
			}
			xu(t, e, r, a);
		}
		function Lu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
				default: if (isNaN(r)) return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (!isNaN(r) && (je(r, t), e === "" + r)) return;
			}
			xu(t, e, r, a);
		}
		function Ru(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (je(r, t), n = fn("" + r), e === n) return;
			}
			xu(t, e, r, a);
		}
		function zu(e, t, n, r) {
			for (var i = {}, a = /* @__PURE__ */ new Set(), o = e.attributes, s = 0; s < o.length; s++) switch (o[s].name.toLowerCase()) {
				case "value": break;
				case "checked": break;
				case "selected": break;
				default: a.add(o[s].name);
			}
			if (on(t)) {
				for (var c in n) if (n.hasOwnProperty(c)) {
					var l = n[c];
					if (l != null) {
						if (rm.hasOwnProperty(c)) typeof l != "function" && Cu(c, l);
						else if (!0 !== n.suppressHydrationWarning) switch (c) {
							case "children":
								typeof l != "string" && typeof l != "number" || xu("children", e.textContent, l, i);
								continue;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "defaultValue":
							case "defaultChecked":
							case "innerHTML":
							case "ref": continue;
							case "dangerouslySetInnerHTML":
								o = e.innerHTML, l = l ? l.__html : void 0, l != null && (l = wu(e, l), xu(c, o, l, i));
								continue;
							case "style":
								a.delete(c), Nu(e, l, i);
								continue;
							case "offsetParent":
							case "offsetTop":
							case "offsetLeft":
							case "offsetWidth":
							case "offsetHeight":
							case "isContentEditable":
							case "outerText":
							case "outerHTML":
								a.delete(c.toLowerCase()), console.error("Assignment to read-only property will result in a no-op: `%s`", c);
								continue;
							case "className":
								a.delete("class"), o = ut(e, "class", l), xu("className", o, l, i);
								continue;
							default: r.context === WS && t !== "svg" && t !== "math" ? a.delete(c.toLowerCase()) : a.delete(c), o = ut(e, c, l), xu(c, o, l, i);
						}
					}
				}
			} else for (l in n) if (n.hasOwnProperty(l) && (c = n[l], c != null)) {
				if (rm.hasOwnProperty(l)) typeof c != "function" && Cu(l, c);
				else if (!0 !== n.suppressHydrationWarning) switch (l) {
					case "children":
						typeof c != "string" && typeof c != "number" || xu("children", e.textContent, c, i);
						continue;
					case "suppressContentEditableWarning":
					case "suppressHydrationWarning":
					case "value":
					case "checked":
					case "selected":
					case "defaultValue":
					case "defaultChecked":
					case "innerHTML":
					case "ref": continue;
					case "dangerouslySetInnerHTML":
						o = e.innerHTML, c = c ? c.__html : void 0, c != null && (c = wu(e, c), o !== c && (i[l] = { __html: o }));
						continue;
					case "className":
						Pu(e, l, "class", c, a, i);
						continue;
					case "tabIndex":
						Pu(e, l, "tabindex", c, a, i);
						continue;
					case "style":
						a.delete(l), Nu(e, c, i);
						continue;
					case "multiple":
						a.delete(l), xu(l, e.multiple, c, i);
						continue;
					case "muted":
						a.delete(l), xu(l, e.muted, c, i);
						continue;
					case "autoFocus":
						a.delete("autofocus"), xu(l, e.autofocus, c, i);
						continue;
					case "data": if (t !== "object") {
						a.delete(l), o = e.getAttribute("data"), xu(l, o, c, i);
						continue;
					}
					case "src":
					case "href":
						if (!(c !== "" || t === "a" && l === "href" || t === "object" && l === "data")) {
							console.error(l === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", l, l);
							continue;
						}
						Ru(e, l, l, c, a, i);
						continue;
					case "action":
					case "formAction":
						if (o = e.getAttribute(l), typeof c == "function") {
							a.delete(l.toLowerCase()), l === "formAction" ? (a.delete("name"), a.delete("formenctype"), a.delete("formmethod"), a.delete("formtarget")) : (a.delete("enctype"), a.delete("method"), a.delete("target"));
							continue;
						} else if (o === OS) {
							a.delete(l.toLowerCase()), xu(l, "function", c, i);
							continue;
						}
						Ru(e, l, l.toLowerCase(), c, a, i);
						continue;
					case "xlinkHref":
						Ru(e, l, "xlink:href", c, a, i);
						continue;
					case "contentEditable":
						Iu(e, l, "contenteditable", c, a, i);
						continue;
					case "spellCheck":
						Iu(e, l, "spellcheck", c, a, i);
						continue;
					case "draggable":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
						Iu(e, l, l, c, a, i);
						continue;
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
						Fu(e, l, l.toLowerCase(), c, a, i);
						continue;
					case "capture":
					case "download":
						a: {
							s = e;
							var u = o = l, d = i;
							if (a.delete(u), s = s.getAttribute(u), s === null) switch (typeof c) {
								case "undefined":
								case "function":
								case "symbol": break a;
								default: if (!1 === c) break a;
							}
							else if (c != null) switch (typeof c) {
								case "function":
								case "symbol": break;
								case "boolean":
									if (!0 === c && s === "") break a;
									break;
								default: if (je(c, o), s === "" + c) break a;
							}
							xu(o, s, c, d);
						}
						continue;
					case "cols":
					case "rows":
					case "size":
					case "span":
						a: {
							if (s = e, u = o = l, d = i, a.delete(u), s = s.getAttribute(u), s === null) switch (typeof c) {
								case "undefined":
								case "function":
								case "symbol":
								case "boolean": break a;
								default: if (isNaN(c) || 1 > c) break a;
							}
							else if (c != null) switch (typeof c) {
								case "function":
								case "symbol":
								case "boolean": break;
								default: if (!(isNaN(c) || 1 > c) && (je(c, o), s === "" + c)) break a;
							}
							xu(o, s, c, d);
						}
						continue;
					case "rowSpan":
						Lu(e, l, "rowspan", c, a, i);
						continue;
					case "start":
						Lu(e, l, l, c, a, i);
						continue;
					case "xHeight":
						Pu(e, l, "x-height", c, a, i);
						continue;
					case "xlinkActuate":
						Pu(e, l, "xlink:actuate", c, a, i);
						continue;
					case "xlinkArcrole":
						Pu(e, l, "xlink:arcrole", c, a, i);
						continue;
					case "xlinkRole":
						Pu(e, l, "xlink:role", c, a, i);
						continue;
					case "xlinkShow":
						Pu(e, l, "xlink:show", c, a, i);
						continue;
					case "xlinkTitle":
						Pu(e, l, "xlink:title", c, a, i);
						continue;
					case "xlinkType":
						Pu(e, l, "xlink:type", c, a, i);
						continue;
					case "xmlBase":
						Pu(e, l, "xml:base", c, a, i);
						continue;
					case "xmlLang":
						Pu(e, l, "xml:lang", c, a, i);
						continue;
					case "xmlSpace":
						Pu(e, l, "xml:space", c, a, i);
						continue;
					case "inert":
						c !== "" || CS[l] || (CS[l] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", l)), Fu(e, l, l, c, a, i);
						continue;
					default: if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") {
						s = sn(l), o = !1, r.context === WS && t !== "svg" && t !== "math" ? a.delete(s.toLowerCase()) : (u = l.toLowerCase(), u = Bm.hasOwnProperty(u) && Bm[u] || null, u !== null && u !== l && (o = !0, a.delete(u)), a.delete(s));
						a: if (u = e, d = s, s = c, lt(d)) if (u.hasAttribute(d)) u = u.getAttribute(d), je(s, d), s = u === "" + s ? s : u;
						else {
							switch (typeof s) {
								case "function":
								case "symbol": break a;
								case "boolean": if (u = d.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") break a;
							}
							s = s === void 0 ? void 0 : null;
						}
						else s = void 0;
						o || xu(l, s, c, i);
					}
				}
			}
			return 0 < a.size && !0 !== n.suppressHydrationWarning && Su(e, a, i), Object.keys(i).length === 0 ? null : i;
		}
		function Bu(e, t) {
			switch (e.length) {
				case 0: return "";
				case 1: return e[0];
				case 2: return e[0] + " " + t + " " + e[1];
				default: return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
			}
		}
		function Vu(e) {
			switch (e) {
				case "css":
				case "script":
				case "font":
				case "img":
				case "image":
				case "input":
				case "link": return !0;
				default: return !1;
			}
		}
		function Hu() {
			if (typeof performance.getEntriesByType == "function") {
				for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
					var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
					if (a && s && Vu(o)) {
						for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
							var c = n[r], l = c.startTime;
							if (l > s) break;
							var u = c.transferSize, d = c.initiatorType;
							u && Vu(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
						}
						if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
					}
				}
				if (0 < e) return t / e / 1e6;
			}
			return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
		}
		function Uu(e) {
			return e.nodeType === 9 ? e : e.ownerDocument;
		}
		function Wu(e) {
			switch (e) {
				case Rm: return GS;
				case Lm: return KS;
				default: return WS;
			}
		}
		function Gu(e, t) {
			if (e === WS) switch (t) {
				case "svg": return GS;
				case "math": return KS;
				default: return WS;
			}
			return e === GS && t === "foreignObject" ? WS : e;
		}
		function Ku(e, t) {
			return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
		}
		function qu() {
			var e = window.event;
			return e && e.type === "popstate" ? e === XS ? !1 : (XS = e, !0) : (XS = null, !1);
		}
		function Ju() {
			var e = window.event;
			return e && e !== ZS ? e.type : null;
		}
		function Yu() {
			var e = window.event;
			return e && e !== ZS ? e.timeStamp : -1.1;
		}
		function Xu(e) {
			setTimeout(function() {
				throw e;
			});
		}
		function Zu(e, t, n) {
			switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && e.focus();
					break;
				case "img": n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
			}
		}
		function Qu() {}
		function $u(e, t, n, r) {
			Au(e, t, n, r), e[Yp] = r;
		}
		function ed(e) {
			tn(e, "");
		}
		function td(e, t, n) {
			e.nodeValue = n;
		}
		function nd(e) {
			if (!e.__reactWarnedAboutChildrenConflict) {
				var t = e[Yp] || null;
				if (t !== null) {
					var n = nt(e);
					n !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, T(n, function() {
						console.error("Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets \"children\" text content using React. It should be a leaf with no children. Otherwise it's ambiguous which children should be used.");
					})) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, T(n, function() {
						console.error("Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets \"dangerouslySetInnerHTML\" using React. It should be a leaf with no children. Otherwise it's ambiguous which children should be used.");
					})));
				}
			}
		}
		function rd(e) {
			return e === "head";
		}
		function id(e, t) {
			e.removeChild(t);
		}
		function ad(e, t) {
			(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
		}
		function od(e, t) {
			var n = t, r = 0;
			do {
				var i = n.nextSibling;
				if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === NS || n === jS) {
					if (r === 0) {
						e.removeChild(i), Tf(t);
						return;
					}
					r--;
				} else if (n === MS || n === PS || n === FS || n === IS || n === AS) r++;
				else if (n === LS) jd(e.ownerDocument.documentElement);
				else if (n === zS) {
					n = e.ownerDocument.head, jd(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[tm] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === RS && jd(e.ownerDocument.body);
				n = i;
			} while (n);
			Tf(t);
		}
		function sd(e, t) {
			var n = e;
			e = 0;
			do {
				var r = n.nextSibling;
				if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === NS) {
					if (e === 0) break;
					e--;
				} else n !== MS && n !== PS && n !== FS && n !== IS || e++;
				n = r;
			} while (n);
		}
		function cd(e) {
			sd(e, !0);
		}
		function ld(e) {
			e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
		}
		function ud(e) {
			e.nodeValue = "";
		}
		function dd(e) {
			sd(e, !1);
		}
		function fd(e, t) {
			t = t[US], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
		}
		function pd(e, t) {
			e.nodeValue = t;
		}
		function md(e) {
			var t = e.firstChild;
			for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
				var n = t;
				switch (t = t.nextSibling, n.nodeName) {
					case "HTML":
					case "HEAD":
					case "BODY":
						md(n), et(n);
						continue;
					case "SCRIPT":
					case "STYLE": continue;
					case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
				}
				e.removeChild(n);
			}
		}
		function hd(e, t, n, r) {
			for (; e.nodeType === 1;) {
				var i = n;
				if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
					if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
				} else if (!r) if (t === "input" && e.type === "hidden") {
					je(i.name, "name");
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
				else if (!e[tm]) switch (t) {
					case "meta":
						if (!e.hasAttribute("itemprop")) break;
						return e;
					case "link":
						if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
						return e;
					case "style":
						if (e.hasAttribute("data-precedence")) break;
						return e;
					case "script":
						if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
						return e;
					default: return e;
				}
				if (e = xd(e.nextSibling), e === null) break;
			}
			return null;
		}
		function gd(e, t, n) {
			if (t === "") return null;
			for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = xd(e.nextSibling), e === null)) return null;
			return e;
		}
		function _d(e, t) {
			for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = xd(e.nextSibling), e === null)) return null;
			return e;
		}
		function vd(e) {
			return e.data === PS || e.data === FS;
		}
		function yd(e) {
			return e.data === IS || e.data === PS && e.ownerDocument.readyState !== HS;
		}
		function bd(e, t) {
			var n = e.ownerDocument;
			if (e.data === FS) e._reactRetry = t;
			else if (e.data !== PS || n.readyState !== HS) t();
			else {
				var r = function() {
					t(), n.removeEventListener("DOMContentLoaded", r);
				};
				n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
			}
		}
		function xd(e) {
			for (; e != null; e = e.nextSibling) {
				var t = e.nodeType;
				if (t === 1 || t === 3) break;
				if (t === 8) {
					if (t = e.data, t === MS || t === IS || t === PS || t === FS || t === AS || t === BS || t === VS) break;
					if (t === NS || t === jS) return null;
				}
			}
			return e;
		}
		function Sd(e) {
			if (e.nodeType === 1) {
				for (var t = e.nodeName.toLowerCase(), n = {}, r = e.attributes, i = 0; i < r.length; i++) {
					var a = r[i];
					n[ju(a.name)] = a.name.toLowerCase() === "style" ? Mu(e) : a.value;
				}
				return {
					type: t,
					props: n
				};
			}
			return e.nodeType === 8 ? e.data === AS ? {
				type: "Activity",
				props: {}
			} : {
				type: "Suspense",
				props: {}
			} : e.nodeValue;
		}
		function Cd(e, t, n) {
			return n === null || !0 !== n[kS] ? (e.nodeValue === t ? e = null : (t = Tu(t), e = Tu(e.nodeValue) === t ? null : e.nodeValue), e) : null;
		}
		function wd(e) {
			e = e.nextSibling;
			for (var t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === NS || n === jS) {
						if (t === 0) return xd(e.nextSibling);
						t--;
					} else n !== MS && n !== IS && n !== PS && n !== FS && n !== AS || t++;
				}
				e = e.nextSibling;
			}
			return null;
		}
		function Td(e) {
			e = e.previousSibling;
			for (var t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === MS || n === IS || n === PS || n === FS || n === AS) {
						if (t === 0) return e;
						t--;
					} else n !== NS && n !== jS || t++;
				}
				e = e.previousSibling;
			}
			return null;
		}
		function Ed(e) {
			Tf(e);
		}
		function Dd(e) {
			Tf(e);
		}
		function Od(e) {
			Tf(e);
		}
		function kd(e, t, n, r, i) {
			switch (i && $t(e, r.ancestorInfo), t = Uu(n), e) {
				case "html":
					if (e = t.documentElement, !e) throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				case "head":
					if (e = t.head, !e) throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				case "body":
					if (e = t.body, !e) throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				default: throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.");
			}
		}
		function Ad(e, t, n, r) {
			if (!n[Xp] && nt(n)) {
				var i = n.tagName.toLowerCase();
				console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.", i, i, i);
			}
			switch (e) {
				case "html":
				case "head":
				case "body": break;
				default: console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.");
			}
			for (i = n.attributes; i.length;) n.removeAttributeNode(i[0]);
			ku(n, e, t), n[Jp] = r, n[Yp] = t;
		}
		function jd(e) {
			for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
			et(e);
		}
		function Md(e) {
			return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
		}
		function Nd(e, t, n) {
			var r = fC;
			if (r && typeof t == "string" && t) {
				var i = bt(t);
				i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), uC.has(i) || (uC.add(i), e = {
					rel: e,
					crossOrigin: n,
					href: t
				}, r.querySelector(i) === null && (t = r.createElement("link"), ku(t, "link", e), at(t), r.head.appendChild(t)));
			}
		}
		function Pd(e, t, n, r) {
			var i = (i = rp.current) ? Md(i) : null;
			if (!i) throw Error("\"resourceRoot\" was expected to exist. This is a bug in React.");
			switch (e) {
				case "meta":
				case "title": return null;
				case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Id(n.href), t = it(i).hoistableStyles, r = t.get(n), r || (r = {
					type: "style",
					instance: null,
					count: 0,
					state: null
				}, t.set(n, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
				case "link":
					if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
						e = Id(n.href);
						var a = it(i).hoistableStyles, o = a.get(e);
						if (!o && (i = i.ownerDocument || i, o = {
							type: "stylesheet",
							instance: null,
							count: 0,
							state: {
								loading: iC,
								preload: null
							}
						}, a.set(e, o), (a = i.querySelector(L(e))) && !a._p && (o.instance = a, o.state.loading = aC | cC), !lC.has(e))) {
							var s = {
								rel: "preload",
								as: "style",
								href: n.href,
								crossOrigin: n.crossOrigin,
								integrity: n.integrity,
								media: n.media,
								hrefLang: n.hrefLang,
								referrerPolicy: n.referrerPolicy
							};
							lC.set(e, s), a || Rd(i, e, s, o.state);
						}
						if (t && r === null) throw n = "\n\n  - " + Fd(t) + "\n  + " + Fd(n), Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
						return o;
					}
					if (t && r !== null) throw n = "\n\n  - " + Fd(t) + "\n  + " + Fd(n), Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
					return null;
				case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = zd(n), t = it(i).hoistableScripts, r = t.get(n), r || (r = {
					type: "script",
					instance: null,
					count: 0,
					state: null
				}, t.set(n, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
				default: throw Error("getResource encountered a type it did not expect: \"" + e + "\". this is a bug in React.");
			}
		}
		function Fd(e) {
			var t = 0, n = "<link";
			return typeof e.rel == "string" ? (t++, n += " rel=\"" + e.rel + "\"") : yp.call(e, "rel") && (t++, n += " rel=\"" + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + "\""), typeof e.href == "string" ? (t++, n += " href=\"" + e.href + "\"") : yp.call(e, "href") && (t++, n += " href=\"" + (e.href === null ? "null" : "invalid type " + typeof e.href) + "\""), typeof e.precedence == "string" ? (t++, n += " precedence=\"" + e.precedence + "\"") : yp.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
		}
		function Id(e) {
			return "href=\"" + bt(e) + "\"";
		}
		function L(e) {
			return "link[rel=\"stylesheet\"][" + e + "]";
		}
		function Ld(e) {
			return R({}, e, {
				"data-precedence": e.precedence,
				precedence: null
			});
		}
		function Rd(e, t, n, r) {
			e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = aC : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
				return r.loading |= aC;
			}), t.addEventListener("error", function() {
				return r.loading |= oC;
			}), ku(t, "link", n), at(t), e.head.appendChild(t));
		}
		function zd(e) {
			return "[src=\"" + bt(e) + "\"]";
		}
		function Bd(e) {
			return "script[async]" + e;
		}
		function Vd(e, t, n) {
			if (t.count++, t.instance === null) switch (t.type) {
				case "style":
					var r = e.querySelector("style[data-href~=\"" + bt(n.href) + "\"]");
					if (r) return t.instance = r, at(r), r;
					var i = R({}, n, {
						"data-href": n.href,
						"data-precedence": n.precedence,
						href: null,
						precedence: null
					});
					return r = (e.ownerDocument || e).createElement("style"), at(r), ku(r, "style", i), Hd(r, n.precedence, e), t.instance = r;
				case "stylesheet":
					i = Id(n.href);
					var a = e.querySelector(L(i));
					if (a) return t.state.loading |= cC, t.instance = a, at(a), a;
					r = Ld(n), (i = lC.get(i)) && Ud(r, i), a = (e.ownerDocument || e).createElement("link"), at(a);
					var o = a;
					return o._p = new Promise(function(e, t) {
						o.onload = e, o.onerror = t;
					}), ku(a, "link", r), t.state.loading |= cC, Hd(a, n.precedence, e), t.instance = a;
				case "script": return a = zd(n.src), (i = e.querySelector(Bd(a))) ? (t.instance = i, at(i), i) : (r = n, (i = lC.get(a)) && (r = R({}, n), Wd(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), at(i), ku(i, "link", r), e.head.appendChild(i), t.instance = i);
				case "void": return null;
				default: throw Error("acquireResource encountered a resource type it did not expect: \"" + t.type + "\". this is a bug in React.");
			}
			else t.type === "stylesheet" && (t.state.loading & cC) === iC && (r = t.instance, t.state.loading |= cC, Hd(r, n.precedence, e));
			return t.instance;
		}
		function Hd(e, t, n) {
			for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
				var s = r[o];
				if (s.dataset.precedence === t) a = s;
				else if (a !== i) break;
			}
			a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
		}
		function Ud(e, t) {
			e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
		}
		function Wd(e, t) {
			e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
		}
		function Gd(e, t, n) {
			if (pC === null) {
				var r = /* @__PURE__ */ new Map(), i = pC = /* @__PURE__ */ new Map();
				i.set(n, r);
			} else i = pC, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
			if (r.has(e)) return r;
			for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
				var a = n[i];
				if (!(a[tm] || a[Jp] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== Rm) {
					var o = a.getAttribute(t) || "";
					o = e + o;
					var s = r.get(o);
					s ? s.push(a) : r.set(o, [a]);
				}
			}
			return r;
		}
		function Kd(e, t, n) {
			e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
		}
		function qd(e, t, n) {
			var r = !n.ancestorInfo.containerTagInScope;
			if (n.context === GS || t.itemProp != null) return !r || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.", e, e), !1;
			switch (e) {
				case "meta":
				case "title": return !0;
				case "style":
					if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
						r && console.error("Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel=\"stylesheet\" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence=\"default\"` and `href=\"some unique resource identifier\"`.");
						break;
					}
					return !0;
				case "link":
					if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
						if (t.rel === "stylesheet" && typeof t.precedence == "string") {
							e = t.href;
							var i = t.onError, a = t.disabled;
							n = [], t.onLoad && n.push("`onLoad`"), i && n.push("`onError`"), a != null && n.push("`disabled`"), i = Bu(n, "and"), i += n.length === 1 ? " prop" : " props", a = n.length === 1 ? "an " + i : "the " + i, n.length && console.error("React encountered a <link rel=\"stylesheet\" href=\"%s\" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.", e, a, i);
						}
						r && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag") : (t.onError || t.onLoad) && console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));
						break;
					}
					switch (t.rel) {
						case "stylesheet": return e = t.precedence, t = t.disabled, typeof e != "string" && r && console.error("Cannot render a <link rel=\"stylesheet\" /> outside the main document without knowing its precedence. Consider adding precedence=\"default\" or moving it into the root <head> tag."), typeof e == "string" && t == null;
						default: return !0;
					}
				case "script":
					if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
						r && (e ? t.onLoad || t.onError ? console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.") : console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>.") : console.error("Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async=\"\" or moving it into the root <head> tag."));
						break;
					}
					return !0;
				case "noscript":
				case "template": r && console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.", e);
			}
			return !1;
		}
		function Jd(e) {
			return !(e.type === "stylesheet" && (e.state.loading & sC) === iC);
		}
		function Yd(e, t, n, r) {
			if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && (n.state.loading & cC) === iC) {
				if (n.instance === null) {
					var i = Id(r.href), a = t.querySelector(L(i));
					if (a) {
						t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Zd.bind(e), t.then(e, e)), n.state.loading |= cC, n.instance = a, at(a);
						return;
					}
					a = t.ownerDocument || t, r = Ld(r), (i = lC.get(i)) && Ud(r, i), a = a.createElement("link"), at(a);
					var o = a;
					o._p = new Promise(function(e, t) {
						o.onload = e, o.onerror = t;
					}), ku(a, "link", r), n.instance = a;
				}
				e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & sC) === iC && (e.count++, n = Zd.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
			}
		}
		function Xd(e, t) {
			return e.stylesheets && e.count === 0 && Qd(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
				var r = setTimeout(function() {
					if (e.stylesheets && Qd(e, e.stylesheets), e.unsuspend) {
						var t = e.unsuspend;
						e.unsuspend = null, t();
					}
				}, mC + t);
				0 < e.imgBytes && _C === 0 && (_C = 125 * Hu() * gC);
				var i = setTimeout(function() {
					if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Qd(e, e.stylesheets), e.unsuspend)) {
						var t = e.unsuspend;
						e.unsuspend = null, t();
					}
				}, (e.imgBytes > _C ? 50 : hC) + t);
				return e.unsuspend = n, function() {
					e.unsuspend = null, clearTimeout(r), clearTimeout(i);
				};
			} : null;
		}
		function Zd() {
			if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
				if (this.stylesheets) Qd(this, this.stylesheets);
				else if (this.unsuspend) {
					var e = this.unsuspend;
					this.unsuspend = null, e();
				}
			}
		}
		function Qd(e, t) {
			e.stylesheets = null, e.unsuspend !== null && (e.count++, yC = /* @__PURE__ */ new Map(), t.forEach($d, e), yC = null, Zd.call(e));
		}
		function $d(e, t) {
			if (!(t.state.loading & cC)) {
				var n = yC.get(e);
				if (n) var r = n.get(vC);
				else {
					n = /* @__PURE__ */ new Map(), yC.set(e, n);
					for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
						var o = i[a];
						(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
					}
					r && n.set(vC, r);
				}
				i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(vC, i), n.set(o, i), this.count++, r = Zd.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= cC;
			}
		}
		function ef(e, t, n, r, i, a, o, s, c) {
			for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = eC, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = He(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = He(0), this.hiddenUpdates = He(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
			this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
		}
		function tf(e, t, n, r, i, a, o, s, c, l, u, d) {
			return e = new ef(e, t, n, o, c, l, u, d, s), t = zg, !0 === a && (t |= Bg | Vg), t |= W, a = _(3, null, null, t), e.current = a, a.stateNode = e, t = fi(), pi(t), e.pooledCache = t, pi(t), a.memoizedState = {
				element: r,
				isDehydrated: n,
				cache: t
			}, ia(a), e;
		}
		function nf(e) {
			return e ? (e = Ig, e) : Ig;
		}
		function rf(e, t, n, r, i, a) {
			if (Pp && typeof Pp.onScheduleFiberRoot == "function") try {
				Pp.onScheduleFiberRoot(Np, r, n);
			} catch (e) {
				Fp || (Fp = !0, console.error("React instrumentation encountered an error: %o", e));
			}
			i = nf(i), r.context === null ? r.context = i : r.pendingContext = i, vp && _p !== null && !DC && (DC = !0, console.error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", x(_p) || "Unknown")), r = oa(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", a), r.callback = a), n = sa(e, r, t), n !== null && (hi(t, "root.render()", null), cl(n, e, t), ca(n, e, t));
		}
		function af(e, t) {
			if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
				var n = e.retryLane;
				e.retryLane = n !== 0 && n < t ? n : t;
			}
		}
		function of(e, t) {
			af(e, t), (e = e.alternate) && af(e, t);
		}
		function sf(e) {
			if (e.tag === 13 || e.tag === 31) {
				var t = yr(e, 67108864);
				t !== null && cl(t, e, 67108864), of(e, 67108864);
			}
		}
		function cf(e) {
			if (e.tag === 13 || e.tag === 31) {
				var t = ol(e);
				t = Je(t);
				var n = yr(e, t);
				n !== null && cl(n, e, t), of(e, t);
			}
		}
		function lf() {
			return _p;
		}
		function uf(e, t, n, r) {
			var i = z.T;
			z.T = null;
			var a = B.p;
			try {
				B.p = Up, ff(e, t, n, r);
			} finally {
				B.p = a, z.T = i;
			}
		}
		function df(e, t, n, r) {
			var i = z.T;
			z.T = null;
			var a = B.p;
			try {
				B.p = Wp, ff(e, t, n, r);
			} finally {
				B.p = a, z.T = i;
			}
		}
		function ff(e, t, n, r) {
			if (RC) {
				var i = pf(r);
				if (i === null) hu(e, t, r, zC, n), gf(e, r);
				else if (vf(i, e, t, n, r)) r.stopPropagation();
				else if (gf(e, r), t & 4 && -1 < qC.indexOf(e)) {
					for (; i !== null;) {
						var a = nt(i);
						if (a !== null) switch (a.tag) {
							case 3:
								if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
									var o = Le(a.pendingLanes);
									if (o !== 0) {
										var s = a;
										for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
											var c = 1 << 31 - Lp(o);
											s.entanglements[1] |= c, o &= ~c;
										}
										N(a), (Z & (Ib | Lb)) === Fb && (bx = wp() + xx, eu(0, !1));
									}
								}
								break;
							case 31:
							case 13: s = yr(a, 2), s !== null && cl(s, a, 2), pl(), of(a, 2);
						}
						if (a = pf(r), a === null && hu(e, t, r, zC, n), a === i) break;
						i = a;
					}
					i !== null && r.stopPropagation();
				} else hu(e, t, r, null, n);
			}
		}
		function pf(e) {
			return e = mn(e), mf(e);
		}
		function mf(e) {
			if (zC = null, e = tt(e), e !== null) {
				var t = te(e);
				if (t === null) e = null;
				else {
					var n = t.tag;
					if (n === 13) {
						if (e = ne(t), e !== null) return e;
						e = null;
					} else if (n === 31) {
						if (e = re(t), e !== null) return e;
						e = null;
					} else if (n === 3) {
						if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
						e = null;
					} else t !== e && (e = null);
				}
			}
			return zC = e, null;
		}
		function hf(e) {
			switch (e) {
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
				case "selectstart": return Up;
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
				case "pointerleave": return Wp;
				case "message": switch (Tp()) {
					case Ep: return Up;
					case Dp: return Wp;
					case Op:
					case kp: return Gp;
					case Ap: return Kp;
					default: return Gp;
				}
				default: return Gp;
			}
		}
		function gf(e, t) {
			switch (e) {
				case "focusin":
				case "focusout":
					VC = null;
					break;
				case "dragenter":
				case "dragleave":
					HC = null;
					break;
				case "mouseover":
				case "mouseout":
					UC = null;
					break;
				case "pointerover":
				case "pointerout":
					WC.delete(t.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture": GC.delete(t.pointerId);
			}
		}
		function _f(e, t, n, r, i, a) {
			return e === null || e.nativeEvent !== a ? (e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: a,
				targetContainers: [i]
			}, t !== null && (t = nt(t), t !== null && sf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
		}
		function vf(e, t, n, r, i) {
			switch (t) {
				case "focusin": return VC = _f(VC, e, t, n, r, i), !0;
				case "dragenter": return HC = _f(HC, e, t, n, r, i), !0;
				case "mouseover": return UC = _f(UC, e, t, n, r, i), !0;
				case "pointerover":
					var a = i.pointerId;
					return WC.set(a, _f(WC.get(a) || null, e, t, n, r, i)), !0;
				case "gotpointercapture": return a = i.pointerId, GC.set(a, _f(GC.get(a) || null, e, t, n, r, i)), !0;
			}
			return !1;
		}
		function yf(e) {
			var t = tt(e.target);
			if (t !== null) {
				var n = te(t);
				if (n !== null) {
					if (t = n.tag, t === 13) {
						if (t = ne(n), t !== null) {
							e.blockedOn = t, $e(e.priority, function() {
								cf(n);
							});
							return;
						}
					} else if (t === 31) {
						if (t = re(n), t !== null) {
							e.blockedOn = t, $e(e.priority, function() {
								cf(n);
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
		function bf(e) {
			if (e.blockedOn !== null) return !1;
			for (var t = e.targetContainers; 0 < t.length;) {
				var n = pf(e.nativeEvent);
				if (n === null) {
					n = e.nativeEvent;
					var r = new n.constructor(n.type, n), i = r;
					Qm !== null && console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Qm = i, n.target.dispatchEvent(r), Qm === null && console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Qm = null;
				} else return t = nt(n), t !== null && sf(t), e.blockedOn = n, !1;
				t.shift();
			}
			return !0;
		}
		function xf(e, t, n) {
			bf(e) && n.delete(t);
		}
		function Sf() {
			BC = !1, VC !== null && bf(VC) && (VC = null), HC !== null && bf(HC) && (HC = null), UC !== null && bf(UC) && (UC = null), WC.forEach(xf), GC.forEach(xf);
		}
		function Cf(e, t) {
			e.blockedOn === t && (e.blockedOn = null, BC || (BC = !0, Af.unstable_scheduleCallback(Af.unstable_NormalPriority, Sf)));
		}
		function wf(e) {
			JC !== e && (JC = e, Af.unstable_scheduleCallback(Af.unstable_NormalPriority, function() {
				JC === e && (JC = null);
				for (var t = 0; t < e.length; t += 3) {
					var n = e[t], r = e[t + 1], i = e[t + 2];
					if (typeof r != "function") {
						if (mf(r || n) === null) continue;
						break;
					}
					var a = nt(n);
					a !== null && (e.splice(t, 3), t -= 3, n = {
						pending: !0,
						data: i,
						method: n.method,
						action: r
					}, Object.freeze(n), zo(a, n, r, i));
				}
			}));
		}
		function Tf(e) {
			function t(t) {
				return Cf(t, e);
			}
			VC !== null && Cf(VC, e), HC !== null && Cf(HC, e), UC !== null && Cf(UC, e), WC.forEach(t), GC.forEach(t);
			for (var n = 0; n < KC.length; n++) {
				var r = KC[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
			for (; 0 < KC.length && (n = KC[0], n.blockedOn === null);) yf(n), n.blockedOn === null && KC.shift();
			if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
				var i = n[r], a = n[r + 1], o = i[Yp] || null;
				if (typeof a == "function") o || wf(n);
				else if (o) {
					var s = null;
					if (a && a.hasAttribute("formAction")) {
						if (i = a, o = a[Yp] || null) s = o.formAction;
						else if (mf(i) !== null) continue;
					} else s = o.action;
					typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), wf(n);
				}
			}
		}
		function Ef() {
			function e(e) {
				e.canIntercept && e.info === "react-transition" && e.intercept({
					handler: function() {
						return new Promise(function(e) {
							return i = e;
						});
					},
					focusReset: "manual",
					scroll: "manual"
				});
			}
			function t() {
				i !== null && (i(), i = null), r || setTimeout(n, 20);
			}
			function n() {
				if (!r && !navigation.transition) {
					var e = navigation.currentEntry;
					e && e.url != null && navigation.navigate(e.url, {
						state: e.getState(),
						info: "react-transition",
						history: "replace"
					});
				}
			}
			if (typeof navigation == "object") {
				var r = !1, i = null;
				return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
					r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
				};
			}
		}
		function Df(e) {
			this._internalRoot = e;
		}
		function Of(e) {
			this._internalRoot = e;
		}
		function kf(e) {
			e[Xp] && (e._reactRootContainer ? console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var Af = c(), jf = e(), Mf = s(), R = Object.assign, Nf = Symbol.for("react.element"), Pf = Symbol.for("react.transitional.element"), Ff = Symbol.for("react.portal"), If = Symbol.for("react.fragment"), Lf = Symbol.for("react.strict_mode"), Rf = Symbol.for("react.profiler"), zf = Symbol.for("react.consumer"), Bf = Symbol.for("react.context"), Vf = Symbol.for("react.forward_ref"), Hf = Symbol.for("react.suspense"), Uf = Symbol.for("react.suspense_list"), Wf = Symbol.for("react.memo"), Gf = Symbol.for("react.lazy"), Kf = Symbol.for("react.activity"), qf = Symbol.for("react.memo_cache_sentinel"), Jf = Symbol.iterator, Yf = Symbol.for("react.client.reference"), Xf = Array.isArray, z = jf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Mf.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Zf = Object.freeze({
			pending: !1,
			data: null,
			method: null,
			action: null
		}), Qf = [], $f = [], ep = -1, tp = ue(null), np = ue(null), rp = ue(null), ip = ue(null), ap = 0, op, sp, cp, lp, up, dp, fp;
		_e.__reactDisabledLog = !0;
		var pp, mp, hp = !1, gp = new (typeof WeakMap == "function" ? WeakMap : Map)(), _p = null, vp = !1, yp = Object.prototype.hasOwnProperty, bp = Af.unstable_scheduleCallback, xp = Af.unstable_cancelCallback, Sp = Af.unstable_shouldYield, Cp = Af.unstable_requestPaint, wp = Af.unstable_now, Tp = Af.unstable_getCurrentPriorityLevel, Ep = Af.unstable_ImmediatePriority, Dp = Af.unstable_UserBlockingPriority, Op = Af.unstable_NormalPriority, kp = Af.unstable_LowPriority, Ap = Af.unstable_IdlePriority, jp = Af.log, Mp = Af.unstable_setDisableYieldValue, Np = null, Pp = null, Fp = !1, Ip = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Lp = Math.clz32 ? Math.clz32 : Ie, Rp = Math.log, zp = Math.LN2, Bp = 256, Vp = 262144, Hp = 4194304, Up = 2, Wp = 8, Gp = 32, Kp = 268435456, qp = Math.random().toString(36).slice(2), Jp = "__reactFiber$" + qp, Yp = "__reactProps$" + qp, Xp = "__reactContainer$" + qp, Zp = "__reactEvents$" + qp, Qp = "__reactListeners$" + qp, $p = "__reactHandles$" + qp, em = "__reactResources$" + qp, tm = "__reactMarker$" + qp, nm = /* @__PURE__ */ new Set(), rm = {}, im = {}, am = {
			button: !0,
			checkbox: !0,
			image: !0,
			hidden: !0,
			radio: !0,
			reset: !0,
			submit: !0
		}, om = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), sm = {}, cm = {}, lm = /[\n"\\]/g, um = !1, dm = !1, fm = !1, pm = !1, mm = !1, hm = !1, gm = ["value", "defaultValue"], _m = !1, vm = /["'&<>\n\t]|^\s|\s$/, ym = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "), bm = "applet caption html table td th marquee object template foreignObject desc title".split(" "), xm = bm.concat(["button"]), Sm = "dd dt li option optgroup p rp rt".split(" "), Cm = {
			current: null,
			formTag: null,
			aTagInScope: null,
			buttonTagInScope: null,
			nobrTagInScope: null,
			pTagInButtonScope: null,
			listItemTagAutoclosing: null,
			dlItemTagAutoclosing: null,
			containerTagInScope: null,
			implicitRootScope: !1
		}, wm = {}, Tm = {
			animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),
			background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),
			backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
			border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),
			borderBlockEnd: [
				"borderBlockEndColor",
				"borderBlockEndStyle",
				"borderBlockEndWidth"
			],
			borderBlockStart: [
				"borderBlockStartColor",
				"borderBlockStartStyle",
				"borderBlockStartWidth"
			],
			borderBottom: [
				"borderBottomColor",
				"borderBottomStyle",
				"borderBottomWidth"
			],
			borderColor: [
				"borderBottomColor",
				"borderLeftColor",
				"borderRightColor",
				"borderTopColor"
			],
			borderImage: [
				"borderImageOutset",
				"borderImageRepeat",
				"borderImageSlice",
				"borderImageSource",
				"borderImageWidth"
			],
			borderInlineEnd: [
				"borderInlineEndColor",
				"borderInlineEndStyle",
				"borderInlineEndWidth"
			],
			borderInlineStart: [
				"borderInlineStartColor",
				"borderInlineStartStyle",
				"borderInlineStartWidth"
			],
			borderLeft: [
				"borderLeftColor",
				"borderLeftStyle",
				"borderLeftWidth"
			],
			borderRadius: [
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
				"borderTopLeftRadius",
				"borderTopRightRadius"
			],
			borderRight: [
				"borderRightColor",
				"borderRightStyle",
				"borderRightWidth"
			],
			borderStyle: [
				"borderBottomStyle",
				"borderLeftStyle",
				"borderRightStyle",
				"borderTopStyle"
			],
			borderTop: [
				"borderTopColor",
				"borderTopStyle",
				"borderTopWidth"
			],
			borderWidth: [
				"borderBottomWidth",
				"borderLeftWidth",
				"borderRightWidth",
				"borderTopWidth"
			],
			columnRule: [
				"columnRuleColor",
				"columnRuleStyle",
				"columnRuleWidth"
			],
			columns: ["columnCount", "columnWidth"],
			flex: [
				"flexBasis",
				"flexGrow",
				"flexShrink"
			],
			flexFlow: ["flexDirection", "flexWrap"],
			font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),
			fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),
			gap: ["columnGap", "rowGap"],
			grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),
			gridArea: [
				"gridColumnEnd",
				"gridColumnStart",
				"gridRowEnd",
				"gridRowStart"
			],
			gridColumn: ["gridColumnEnd", "gridColumnStart"],
			gridColumnGap: ["columnGap"],
			gridGap: ["columnGap", "rowGap"],
			gridRow: ["gridRowEnd", "gridRowStart"],
			gridRowGap: ["rowGap"],
			gridTemplate: [
				"gridTemplateAreas",
				"gridTemplateColumns",
				"gridTemplateRows"
			],
			listStyle: [
				"listStyleImage",
				"listStylePosition",
				"listStyleType"
			],
			margin: [
				"marginBottom",
				"marginLeft",
				"marginRight",
				"marginTop"
			],
			marker: [
				"markerEnd",
				"markerMid",
				"markerStart"
			],
			mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),
			maskPosition: ["maskPositionX", "maskPositionY"],
			outline: [
				"outlineColor",
				"outlineStyle",
				"outlineWidth"
			],
			overflow: ["overflowX", "overflowY"],
			padding: [
				"paddingBottom",
				"paddingLeft",
				"paddingRight",
				"paddingTop"
			],
			placeContent: ["alignContent", "justifyContent"],
			placeItems: ["alignItems", "justifyItems"],
			placeSelf: ["alignSelf", "justifySelf"],
			textDecoration: [
				"textDecorationColor",
				"textDecorationLine",
				"textDecorationStyle"
			],
			textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
			transition: [
				"transitionDelay",
				"transitionDuration",
				"transitionProperty",
				"transitionTimingFunction"
			],
			wordWrap: ["overflowWrap"]
		}, Em = /([A-Z])/g, Dm = /^ms-/, Om = /^(?:webkit|moz|o)[A-Z]/, km = /^-ms-/, Am = /-(.)/g, jm = /;\s*$/, Mm = {}, Nm = {}, Pm = !1, Fm = !1, Im = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), Lm = "http://www.w3.org/1998/Math/MathML", Rm = "http://www.w3.org/2000/svg", zm = /* @__PURE__ */ new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]), Bm = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			fetchpriority: "fetchPriority",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			inert: "inert",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			popover: "popover",
			popovertarget: "popoverTarget",
			popovertargetaction: "popoverTargetAction",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			transformorigin: "transformOrigin",
			"transform-origin": "transformOrigin",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		}, Vm = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0,
			"aria-braillelabel": 0,
			"aria-brailleroledescription": 0,
			"aria-colindextext": 0,
			"aria-rowindextext": 0
		}, Hm = {}, Um = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wm = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Gm = !1, Km = {}, qm = /^on./, Jm = /^on[^A-Z]/, Ym = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Xm = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Qm = null, $m = null, eh = null, th = !1, nh = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), rh = !1;
		if (nh) try {
			var ih = {};
			Object.defineProperty(ih, "passive", { get: function() {
				rh = !0;
			} }), window.addEventListener("test", ih, ih), window.removeEventListener("test", ih, ih);
		} catch {
			rh = !1;
		}
		var ah = null, oh = null, sh = null, ch = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0
		}, lh = Sn(ch), uh = R({}, ch, {
			view: 0,
			detail: 0
		}), dh = Sn(uh), fh, ph, mh, hh = R({}, uh, {
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
			getModifierState: wn,
			button: 0,
			buttons: 0,
			relatedTarget: function(e) {
				return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
			},
			movementX: function(e) {
				return "movementX" in e ? e.movementX : (e !== mh && (mh && e.type === "mousemove" ? (fh = e.screenX - mh.screenX, ph = e.screenY - mh.screenY) : ph = fh = 0, mh = e), fh);
			},
			movementY: function(e) {
				return "movementY" in e ? e.movementY : ph;
			}
		}), gh = Sn(hh), _h = Sn(R({}, hh, { dataTransfer: 0 })), vh = Sn(R({}, uh, { relatedTarget: 0 })), yh = Sn(R({}, ch, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), bh = Sn(R({}, ch, { clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		} })), xh = Sn(R({}, ch, { data: 0 })), Sh = xh, Ch = {
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
		}, wh = {
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
		}, Th = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		}, Eh = Sn(R({}, uh, {
			key: function(e) {
				if (e.key) {
					var t = Ch[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress" ? (e = yn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wh[e.keyCode] || "Unidentified" : "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: wn,
			charCode: function(e) {
				return e.type === "keypress" ? yn(e) : 0;
			},
			keyCode: function(e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			},
			which: function(e) {
				return e.type === "keypress" ? yn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			}
		})), Dh = Sn(R({}, hh, {
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
		})), Oh = Sn(R({}, uh, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: wn
		})), kh = Sn(R({}, ch, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), Ah = Sn(R({}, hh, {
			deltaX: function(e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
			},
			deltaY: function(e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0
		})), jh = Sn(R({}, ch, {
			newState: 0,
			oldState: 0
		})), Mh = [
			9,
			13,
			27,
			32
		], Nh = 229, Ph = nh && "CompositionEvent" in window, Fh = null;
		nh && "documentMode" in document && (Fh = document.documentMode);
		var Ih = nh && "TextEvent" in window && !Fh, Lh = nh && (!Ph || Fh && 8 < Fh && 11 >= Fh), Rh = 32, zh = String.fromCharCode(Rh), Bh = !1, Vh = !1, Hh = {
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
		}, Uh = null, Wh = null, Gh = !1;
		nh && (Gh = An("input") && (!document.documentMode || 9 < document.documentMode));
		var Kh = typeof Object.is == "function" ? Object.is : Vn, qh = nh && "documentMode" in document && 11 >= document.documentMode, Jh = null, Yh = null, Xh = null, Zh = !1, Qh = {
			animationend: Yn("Animation", "AnimationEnd"),
			animationiteration: Yn("Animation", "AnimationIteration"),
			animationstart: Yn("Animation", "AnimationStart"),
			transitionrun: Yn("Transition", "TransitionRun"),
			transitionstart: Yn("Transition", "TransitionStart"),
			transitioncancel: Yn("Transition", "TransitionCancel"),
			transitionend: Yn("Transition", "TransitionEnd")
		}, $h = {}, eg = {};
		nh && (eg = document.createElement("div").style, "AnimationEvent" in window || (delete Qh.animationend.animation, delete Qh.animationiteration.animation, delete Qh.animationstart.animation), "TransitionEvent" in window || delete Qh.transitionend.transition);
		var tg = Xn("animationend"), ng = Xn("animationiteration"), rg = Xn("animationstart"), ig = Xn("transitionrun"), ag = Xn("transitionstart"), og = Xn("transitioncancel"), sg = Xn("transitionend"), cg = /* @__PURE__ */ new Map(), lg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		lg.push("scrollEnd");
		var ug = 0;
		if (typeof performance == "object" && typeof performance.now == "function") var dg = performance, fg = function() {
			return dg.now();
		};
		else {
			var pg = Date;
			fg = function() {
				return pg.now();
			};
		}
		var mg = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var t = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(t)) return;
			} else if (typeof a == "object" && typeof a.emit == "function") {
				a.emit("uncaughtException", e);
				return;
			}
			console.error(e);
		}, hg = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", gg = 0, _g = 1, vg = 2, yg = 3, bg = "–\xA0", xg = "+\xA0", Sg = " \xA0", Cg = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", wg = "Components ⚛", V = "Scheduler ⚛", H = "Blocking", Tg = !1, Eg = {
			color: "primary",
			properties: null,
			tooltipText: "",
			track: wg
		}, Dg = {
			start: -0,
			end: -0,
			detail: { devtools: Eg }
		}, Og = ["Changed Props", ""], kg = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", Ag = ["Changed Props", kg], jg = 1, Mg = 2, Ng = [], Pg = 0, Fg = 0, Ig = {};
		Object.freeze(Ig);
		var Lg = null, Rg = null, U = 0, zg = 1, W = 2, Bg = 8, Vg = 16, Hg = 32, Ug = !1;
		try {
			Object.preventExtensions({});
		} catch {
			Ug = !0;
		}
		var Wg = /* @__PURE__ */ new WeakMap(), Gg = [], Kg = 0, qg = null, Jg = 0, Yg = [], Xg = 0, Zg = null, Qg = 1, $g = "", e_ = null, t_ = null, G = !1, n_ = !1, r_ = null, i_ = null, a_ = !1, o_ = Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), s_ = ue(null), c_ = ue(null), l_ = {}, u_ = null, d_ = null, f_ = !1, p_ = typeof AbortController < "u" ? AbortController : function() {
			var e = [], t = this.signal = {
				aborted: !1,
				addEventListener: function(t, n) {
					e.push(n);
				}
			};
			this.abort = function() {
				t.aborted = !0, e.forEach(function(e) {
					return e();
				});
			};
		}, m_ = Af.unstable_scheduleCallback, h_ = Af.unstable_NormalPriority, g_ = {
			$$typeof: Bf,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
			_currentRenderer: null,
			_currentRenderer2: null
		}, __ = Af.unstable_now, v_ = console.createTask ? console.createTask : function() {
			return null;
		}, y_ = 1, b_ = 2, x_ = -0, S_ = -0, C_ = -0, w_ = null, T_ = -1.1, E_ = -0, D_ = -0, K = -1.1, q = -1.1, O_ = null, k_ = !1, A_ = -0, j_ = -1.1, M_ = null, N_ = 0, P_ = null, F_ = null, I_ = -1.1, L_ = null, R_ = -1.1, z_ = -1.1, B_ = -0, V_ = -1.1, H_ = -1.1, U_ = 0, W_ = null, G_ = null, K_ = null, q_ = -1.1, J_ = null, Y_ = -1.1, X_ = -1.1, Z_ = -0, Q_ = -0, $_ = 0, ev = null, tv = 0, nv = -1.1, rv = !1, iv = !1, av = null, ov = 0, sv = 0, cv = null, lv = z.S;
		z.S = function(e, t) {
			if (vx = wp(), typeof t == "object" && t && typeof t.then == "function") {
				if (0 > V_ && 0 > H_) {
					V_ = __();
					var n = Yu(), r = Ju();
					(n !== Y_ || r !== J_) && (Y_ = -1.1), q_ = n, J_ = r;
				}
				Pi(e, t);
			}
			lv !== null && lv(e, t);
		};
		var uv = ue(null), dv = {
			recordUnsafeLifecycleWarnings: function() {},
			flushPendingUnsafeLifecycleWarnings: function() {},
			recordLegacyContextWarning: function() {},
			flushLegacyContextWarning: function() {},
			discardPendingWarnings: function() {}
		}, fv = [], pv = [], mv = [], hv = [], gv = [], _v = [], vv = /* @__PURE__ */ new Set();
		dv.recordUnsafeLifecycleWarnings = function(e, t) {
			vv.has(e.type) || (typeof t.componentWillMount == "function" && !0 !== t.componentWillMount.__suppressDeprecationWarning && fv.push(e), e.mode & Bg && typeof t.UNSAFE_componentWillMount == "function" && pv.push(e), typeof t.componentWillReceiveProps == "function" && !0 !== t.componentWillReceiveProps.__suppressDeprecationWarning && mv.push(e), e.mode & Bg && typeof t.UNSAFE_componentWillReceiveProps == "function" && hv.push(e), typeof t.componentWillUpdate == "function" && !0 !== t.componentWillUpdate.__suppressDeprecationWarning && gv.push(e), e.mode & Bg && typeof t.UNSAFE_componentWillUpdate == "function" && _v.push(e));
		}, dv.flushPendingUnsafeLifecycleWarnings = function() {
			var e = /* @__PURE__ */ new Set();
			0 < fv.length && (fv.forEach(function(t) {
				e.add(x(t) || "Component"), vv.add(t.type);
			}), fv = []);
			var t = /* @__PURE__ */ new Set();
			0 < pv.length && (pv.forEach(function(e) {
				t.add(x(e) || "Component"), vv.add(e.type);
			}), pv = []);
			var n = /* @__PURE__ */ new Set();
			0 < mv.length && (mv.forEach(function(e) {
				n.add(x(e) || "Component"), vv.add(e.type);
			}), mv = []);
			var r = /* @__PURE__ */ new Set();
			0 < hv.length && (hv.forEach(function(e) {
				r.add(x(e) || "Component"), vv.add(e.type);
			}), hv = []);
			var i = /* @__PURE__ */ new Set();
			0 < gv.length && (gv.forEach(function(e) {
				i.add(x(e) || "Component"), vv.add(e.type);
			}), gv = []);
			var a = /* @__PURE__ */ new Set();
			if (0 < _v.length && (_v.forEach(function(e) {
				a.add(x(e) || "Component"), vv.add(e.type);
			}), _v = []), 0 < t.size) {
				var o = g(t);
				console.error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", o);
			}
			0 < r.size && (o = g(r), console.error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n\nPlease update the following components: %s", o)), 0 < a.size && (o = g(a), console.error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", o)), 0 < e.size && (o = g(e), console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o)), 0 < n.size && (o = g(n), console.warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o)), 0 < i.size && (o = g(i), console.warn("componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o));
		};
		var yv = /* @__PURE__ */ new Map(), bv = /* @__PURE__ */ new Set();
		dv.recordLegacyContextWarning = function(e, t) {
			for (var n = null, r = e; r !== null;) r.mode & Bg && (n = r), r = r.return;
			n === null ? console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.") : !bv.has(e.type) && (r = yv.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], yv.set(n, r)), r.push(e));
		}, dv.flushLegacyContextWarning = function() {
			yv.forEach(function(e) {
				if (e.length !== 0) {
					var t = e[0], n = /* @__PURE__ */ new Set();
					e.forEach(function(e) {
						n.add(x(e) || "Component"), bv.add(e.type);
					});
					var r = g(n);
					T(t, function() {
						console.error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://react.dev/link/legacy-context", r);
					});
				}
			});
		}, dv.discardPendingWarnings = function() {
			fv = [], pv = [], mv = [], hv = [], gv = [], _v = [], yv = /* @__PURE__ */ new Map();
		};
		var xv = { react_stack_bottom_frame: function(e, t, n) {
			var r = vp;
			vp = !0;
			try {
				return e(t, n);
			} finally {
				vp = r;
			}
		} }, Sv = xv.react_stack_bottom_frame.bind(xv), Cv = { react_stack_bottom_frame: function(e) {
			var t = vp;
			vp = !0;
			try {
				return e.render();
			} finally {
				vp = t;
			}
		} }, wv = Cv.react_stack_bottom_frame.bind(Cv), Tv = { react_stack_bottom_frame: function(e, t) {
			try {
				t.componentDidMount();
			} catch (t) {
				M(e, e.return, t);
			}
		} }, Ev = Tv.react_stack_bottom_frame.bind(Tv), Dv = { react_stack_bottom_frame: function(e, t, n, r, i) {
			try {
				t.componentDidUpdate(n, r, i);
			} catch (t) {
				M(e, e.return, t);
			}
		} }, Ov = Dv.react_stack_bottom_frame.bind(Dv), kv = { react_stack_bottom_frame: function(e, t) {
			var n = t.stack;
			e.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		} }, Av = kv.react_stack_bottom_frame.bind(kv), jv = { react_stack_bottom_frame: function(e, t, n) {
			try {
				n.componentWillUnmount();
			} catch (n) {
				M(e, t, n);
			}
		} }, Mv = jv.react_stack_bottom_frame.bind(jv), Nv = { react_stack_bottom_frame: function(e) {
			var t = e.create;
			return e = e.inst, t = t(), e.destroy = t;
		} }, Pv = Nv.react_stack_bottom_frame.bind(Nv), Fv = { react_stack_bottom_frame: function(e, t, n) {
			try {
				n();
			} catch (n) {
				M(e, t, n);
			}
		} }, Iv = Fv.react_stack_bottom_frame.bind(Fv), Lv = { react_stack_bottom_frame: function(e) {
			var t = e._init;
			return t(e._payload);
		} }, Rv = Lv.react_stack_bottom_frame.bind(Lv), zv = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), Bv = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), Vv = Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."), Hv = { then: function() {
			console.error("Internal React error: A listener was unexpectedly attached to a \"noop\" thenable. This is a bug in React. Please file an issue.");
		} }, Uv = null, Wv = !1, Gv = null, Kv = 0, J = null, qv, Jv = qv = !1, Yv = {}, Xv = {}, Zv = {};
		h = function(e, t, n) {
			if (typeof n == "object" && n && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
				if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				n._store.validated = 1;
				var r = x(e), i = r || "null";
				if (!Yv[i]) {
					Yv[i] = !0, n = n._owner, e = e._debugOwner;
					var a = "";
					e && typeof e.tag == "number" && (i = x(e)) && (a = "\n\nCheck the render method of `" + i + "`."), a || r && (a = "\n\nCheck the top-level render call using <" + r + ">.");
					var o = "";
					n != null && e !== n && (r = null, typeof n.tag == "number" ? r = x(n) : typeof n.name == "string" && (r = n.name), r && (o = " It was passed a child from " + r + ".")), T(t, function() {
						console.error("Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.", a, o);
					});
				}
			}
		};
		var Qv = na(!0), $v = na(!1), ey = 0, ty = 1, ny = 2, ry = 3, iy = !1, ay = !1, oy = null, sy = !1, cy = ue(null), ly = ue(0), uy = ue(null), dy = null, fy = 1, py = 2, my = ue(0), hy = 0, gy = 1, _y = 2, vy = 4, yy = 8, by, xy = /* @__PURE__ */ new Set(), Sy = /* @__PURE__ */ new Set(), Cy = /* @__PURE__ */ new Set(), wy = /* @__PURE__ */ new Set(), Ty = 0, Y = null, Ey = null, Dy = null, Oy = !1, ky = !1, Ay = !1, jy = 0, My = 0, Ny = null, Py = 0, Fy = 25, X = null, Iy = null, Ly = -1, Ry = !1, zy = {
			readContext: E,
			use: Ra,
			useCallback: Ea,
			useContext: Ea,
			useEffect: Ea,
			useImperativeHandle: Ea,
			useLayoutEffect: Ea,
			useInsertionEffect: Ea,
			useMemo: Ea,
			useReducer: Ea,
			useRef: Ea,
			useState: Ea,
			useDebugValue: Ea,
			useDeferredValue: Ea,
			useTransition: Ea,
			useSyncExternalStore: Ea,
			useId: Ea,
			useHostTransitionStatus: Ea,
			useFormState: Ea,
			useActionState: Ea,
			useOptimistic: Ea,
			useMemoCache: Ea,
			useCacheRefresh: Ea
		};
		zy.useEffectEvent = Ea;
		var By = null, Vy = null, Hy = null, Uy = null, Wy = null, Gy = null, Ky = null;
		By = {
			readContext: function(e) {
				return E(e);
			},
			use: Ra,
			useCallback: function(e, t) {
				return X = "useCallback", O(), wa(t), Oo(e, t);
			},
			useContext: function(e) {
				return X = "useContext", O(), E(e);
			},
			useEffect: function(e, t) {
				return X = "useEffect", O(), wa(t), xo(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", O(), wa(n), Eo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				X = "useInsertionEffect", O(), wa(t), yo(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", O(), wa(t), j(e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", O(), wa(t);
				var n = z.H;
				z.H = Wy;
				try {
					return Ao(e, t);
				} finally {
					z.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", O();
				var r = z.H;
				z.H = Wy;
				try {
					return Va(e, t, n);
				} finally {
					z.H = r;
				}
			},
			useRef: function(e) {
				return X = "useRef", O(), vo(e);
			},
			useState: function(e) {
				X = "useState", O();
				var t = z.H;
				z.H = Wy;
				try {
					return $a(e);
				} finally {
					z.H = t;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", O();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", O(), Mo(e, t);
			},
			useTransition: function() {
				return X = "useTransition", O(), Ho();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", O(), Ga(e, t, n);
			},
			useId: function() {
				return X = "useId", O(), Ko();
			},
			useFormState: function(e, t) {
				return X = "useFormState", O(), Ta(), fo(e, t);
			},
			useActionState: function(e, t) {
				return X = "useActionState", O(), fo(e, t);
			},
			useOptimistic: function(e) {
				return X = "useOptimistic", O(), eo(e);
			},
			useHostTransitionStatus: Go,
			useMemoCache: za,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", O(), qo();
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", O(), Co(e);
			}
		}, Vy = {
			readContext: function(e) {
				return E(e);
			},
			use: Ra,
			useCallback: function(e, t) {
				return X = "useCallback", k(), Oo(e, t);
			},
			useContext: function(e) {
				return X = "useContext", k(), E(e);
			},
			useEffect: function(e, t) {
				return X = "useEffect", k(), xo(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", k(), Eo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				X = "useInsertionEffect", k(), yo(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", k(), j(e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", k();
				var n = z.H;
				z.H = Wy;
				try {
					return Ao(e, t);
				} finally {
					z.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", k();
				var r = z.H;
				z.H = Wy;
				try {
					return Va(e, t, n);
				} finally {
					z.H = r;
				}
			},
			useRef: function(e) {
				return X = "useRef", k(), vo(e);
			},
			useState: function(e) {
				X = "useState", k();
				var t = z.H;
				z.H = Wy;
				try {
					return $a(e);
				} finally {
					z.H = t;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", k();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", k(), Mo(e, t);
			},
			useTransition: function() {
				return X = "useTransition", k(), Ho();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", k(), Ga(e, t, n);
			},
			useId: function() {
				return X = "useId", k(), Ko();
			},
			useActionState: function(e, t) {
				return X = "useActionState", k(), fo(e, t);
			},
			useFormState: function(e, t) {
				return X = "useFormState", k(), Ta(), fo(e, t);
			},
			useOptimistic: function(e) {
				return X = "useOptimistic", k(), eo(e);
			},
			useHostTransitionStatus: Go,
			useMemoCache: za,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", k(), qo();
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", k(), Co(e);
			}
		}, Hy = {
			readContext: function(e) {
				return E(e);
			},
			use: Ra,
			useCallback: function(e, t) {
				return X = "useCallback", k(), ko(e, t);
			},
			useContext: function(e) {
				return X = "useContext", k(), E(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", k(), bo(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", k(), Do(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", k(), bo(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", k(), bo(4, vy, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", k();
				var n = z.H;
				z.H = Gy;
				try {
					return jo(e, t);
				} finally {
					z.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", k();
				var r = z.H;
				z.H = Gy;
				try {
					return Ha(e, t, n);
				} finally {
					z.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", k(), A().memoizedState;
			},
			useState: function() {
				X = "useState", k();
				var e = z.H;
				z.H = Gy;
				try {
					return Ha(Ba);
				} finally {
					z.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", k();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", k(), No(e, t);
			},
			useTransition: function() {
				return X = "useTransition", k(), Uo();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", k(), Ka(e, t, n);
			},
			useId: function() {
				return X = "useId", k(), A().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", k(), Ta(), po(e);
			},
			useActionState: function(e) {
				return X = "useActionState", k(), po(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", k(), to(e, t);
			},
			useHostTransitionStatus: Go,
			useMemoCache: za,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", k(), A().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", k(), wo(e);
			}
		}, Uy = {
			readContext: function(e) {
				return E(e);
			},
			use: Ra,
			useCallback: function(e, t) {
				return X = "useCallback", k(), ko(e, t);
			},
			useContext: function(e) {
				return X = "useContext", k(), E(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", k(), bo(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", k(), Do(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", k(), bo(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", k(), bo(4, vy, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", k();
				var n = z.H;
				z.H = Ky;
				try {
					return jo(e, t);
				} finally {
					z.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", k();
				var r = z.H;
				z.H = Ky;
				try {
					return Wa(e, t, n);
				} finally {
					z.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", k(), A().memoizedState;
			},
			useState: function() {
				X = "useState", k();
				var e = z.H;
				z.H = Ky;
				try {
					return Wa(Ba);
				} finally {
					z.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", k();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", k(), Po(e, t);
			},
			useTransition: function() {
				return X = "useTransition", k(), Wo();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", k(), Ka(e, t, n);
			},
			useId: function() {
				return X = "useId", k(), A().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", k(), Ta(), go(e);
			},
			useActionState: function(e) {
				return X = "useActionState", k(), go(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", k(), ro(e, t);
			},
			useHostTransitionStatus: Go,
			useMemoCache: za,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", k(), A().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", k(), wo(e);
			}
		}, Wy = {
			readContext: function(e) {
				return p(), E(e);
			},
			use: function(e) {
				return f(), Ra(e);
			},
			useCallback: function(e, t) {
				return X = "useCallback", f(), O(), Oo(e, t);
			},
			useContext: function(e) {
				return X = "useContext", f(), O(), E(e);
			},
			useEffect: function(e, t) {
				return X = "useEffect", f(), O(), xo(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", f(), O(), Eo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				X = "useInsertionEffect", f(), O(), yo(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", f(), O(), j(e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", f(), O();
				var n = z.H;
				z.H = Wy;
				try {
					return Ao(e, t);
				} finally {
					z.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", f(), O();
				var r = z.H;
				z.H = Wy;
				try {
					return Va(e, t, n);
				} finally {
					z.H = r;
				}
			},
			useRef: function(e) {
				return X = "useRef", f(), O(), vo(e);
			},
			useState: function(e) {
				X = "useState", f(), O();
				var t = z.H;
				z.H = Wy;
				try {
					return $a(e);
				} finally {
					z.H = t;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", f(), O();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", f(), O(), Mo(e, t);
			},
			useTransition: function() {
				return X = "useTransition", f(), O(), Ho();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", f(), O(), Ga(e, t, n);
			},
			useId: function() {
				return X = "useId", f(), O(), Ko();
			},
			useFormState: function(e, t) {
				return X = "useFormState", f(), O(), fo(e, t);
			},
			useActionState: function(e, t) {
				return X = "useActionState", f(), O(), fo(e, t);
			},
			useOptimistic: function(e) {
				return X = "useOptimistic", f(), O(), eo(e);
			},
			useMemoCache: function(e) {
				return f(), za(e);
			},
			useHostTransitionStatus: Go,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", O(), qo();
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", f(), O(), Co(e);
			}
		}, Gy = {
			readContext: function(e) {
				return p(), E(e);
			},
			use: function(e) {
				return f(), Ra(e);
			},
			useCallback: function(e, t) {
				return X = "useCallback", f(), k(), ko(e, t);
			},
			useContext: function(e) {
				return X = "useContext", f(), k(), E(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", f(), k(), bo(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", f(), k(), Do(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", f(), k(), bo(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", f(), k(), bo(4, vy, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", f(), k();
				var n = z.H;
				z.H = Gy;
				try {
					return jo(e, t);
				} finally {
					z.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", f(), k();
				var r = z.H;
				z.H = Gy;
				try {
					return Ha(e, t, n);
				} finally {
					z.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", f(), k(), A().memoizedState;
			},
			useState: function() {
				X = "useState", f(), k();
				var e = z.H;
				z.H = Gy;
				try {
					return Ha(Ba);
				} finally {
					z.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", f(), k();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", f(), k(), No(e, t);
			},
			useTransition: function() {
				return X = "useTransition", f(), k(), Uo();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", f(), k(), Ka(e, t, n);
			},
			useId: function() {
				return X = "useId", f(), k(), A().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", f(), k(), po(e);
			},
			useActionState: function(e) {
				return X = "useActionState", f(), k(), po(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", f(), k(), to(e, t);
			},
			useMemoCache: function(e) {
				return f(), za(e);
			},
			useHostTransitionStatus: Go,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", k(), A().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", f(), k(), wo(e);
			}
		}, Ky = {
			readContext: function(e) {
				return p(), E(e);
			},
			use: function(e) {
				return f(), Ra(e);
			},
			useCallback: function(e, t) {
				return X = "useCallback", f(), k(), ko(e, t);
			},
			useContext: function(e) {
				return X = "useContext", f(), k(), E(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", f(), k(), bo(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", f(), k(), Do(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", f(), k(), bo(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", f(), k(), bo(4, vy, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", f(), k();
				var n = z.H;
				z.H = Gy;
				try {
					return jo(e, t);
				} finally {
					z.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", f(), k();
				var r = z.H;
				z.H = Gy;
				try {
					return Wa(e, t, n);
				} finally {
					z.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", f(), k(), A().memoizedState;
			},
			useState: function() {
				X = "useState", f(), k();
				var e = z.H;
				z.H = Gy;
				try {
					return Wa(Ba);
				} finally {
					z.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", f(), k();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", f(), k(), Po(e, t);
			},
			useTransition: function() {
				return X = "useTransition", f(), k(), Wo();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", f(), k(), Ka(e, t, n);
			},
			useId: function() {
				return X = "useId", f(), k(), A().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", f(), k(), go(e);
			},
			useActionState: function(e) {
				return X = "useActionState", f(), k(), go(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", f(), k(), ro(e, t);
			},
			useMemoCache: function(e) {
				return f(), za(e);
			},
			useHostTransitionStatus: Go,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", k(), A().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", f(), k(), wo(e);
			}
		};
		var qy = {}, Jy = /* @__PURE__ */ new Set(), Yy = /* @__PURE__ */ new Set(), Xy = /* @__PURE__ */ new Set(), Zy = /* @__PURE__ */ new Set(), Qy = /* @__PURE__ */ new Set(), $y = /* @__PURE__ */ new Set(), eb = /* @__PURE__ */ new Set(), tb = /* @__PURE__ */ new Set(), nb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Set();
		Object.freeze(qy);
		var ib = {
			enqueueSetState: function(e, t, n) {
				e = e._reactInternals;
				var r = ol(e), i = oa(r);
				i.payload = t, n != null && (ns(n), i.callback = n), t = sa(e, i, r), t !== null && (hi(r, "this.setState()", e), cl(t, e, r), ca(t, e, r));
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals;
				var r = ol(e), i = oa(r);
				i.tag = ty, i.payload = t, n != null && (ns(n), i.callback = n), t = sa(e, i, r), t !== null && (hi(r, "this.replaceState()", e), cl(t, e, r), ca(t, e, r));
			},
			enqueueForceUpdate: function(e, t) {
				e = e._reactInternals;
				var n = ol(e), r = oa(n);
				r.tag = ny, t != null && (ns(t), r.callback = t), t = sa(e, r, n), t !== null && (hi(n, "this.forceUpdate()", e), cl(t, e, n), ca(t, e, n));
			}
		}, ab = null, ob = null, sb = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."), cb = !1, lb = {}, ub = {}, db = {}, fb = {}, pb = !1, mb = {}, hb = {}, gb = {
			dehydrated: null,
			treeContext: null,
			retryLane: 0,
			hydrationErrors: null
		}, _b = !1, vb = null;
		vb = /* @__PURE__ */ new Set();
		var yb = !1, bb = !1, xb = !1, Sb = typeof WeakSet == "function" ? WeakSet : Set, Cb = null, wb = null, Tb = null, Eb = null, Db = !1, Ob = null, kb = !1, Ab = 8192, jb = {
			getCacheForType: function(e) {
				var t = E(g_), n = t.data.get(e);
				return n === void 0 && (n = e(), t.data.set(e, n)), n;
			},
			cacheSignal: function() {
				return E(g_).controller.signal;
			},
			getOwner: function() {
				return _p;
			}
		};
		if (typeof Symbol == "function" && Symbol.for) {
			var Mb = Symbol.for;
			Mb("selector.component"), Mb("selector.has_pseudo_class"), Mb("selector.role"), Mb("selector.test_id"), Mb("selector.text");
		}
		var Nb = [], Pb = typeof WeakMap == "function" ? WeakMap : Map, Fb = 0, Ib = 2, Lb = 4, Rb = 0, zb = 1, Bb = 2, Vb = 3, Hb = 4, Ub = 6, Wb = 5, Z = Fb, Gb = null, Q = null, $ = 0, Kb = 0, qb = 1, Jb = 2, Yb = 3, Xb = 4, Zb = 5, Qb = 6, $b = 7, ex = 8, tx = 9, nx = Kb, rx = null, ix = !1, ax = !1, ox = !1, sx = 0, cx = Rb, lx = 0, ux = 0, dx = 0, fx = 0, px = 0, mx = null, hx = null, gx = !1, _x = 0, vx = 0, yx = 300, bx = Infinity, xx = 500, Sx = null, Cx = null, wx = null, Tx = 0, Ex = 1, Dx = 2, Ox = 3, kx = 0, Ax = 1, jx = 2, Mx = 3, Nx = 4, Px = 5, Fx = 0, Ix = null, Lx = null, Rx = 0, zx = 0, Bx = -0, Vx = null, Hx = null, Ux = null, Wx = Tx, Gx = null, Kx = 50, qx = 0, Jx = null, Yx = !1, Xx = !1, Zx = 50, Qx = 0, $x = null, eS = !1, tS = null, nS = !1, rS = /* @__PURE__ */ new Set(), iS = {}, aS = null, oS = null, sS = !1, cS = !1, lS = !1, uS = !1, dS = 0, fS = {};
		(function() {
			for (var e = 0; e < lg.length; e++) {
				var t = lg[e], n = t.toLowerCase();
				t = t[0].toUpperCase() + t.slice(1), Zn(n, "on" + t);
			}
			Zn(tg, "onAnimationEnd"), Zn(ng, "onAnimationIteration"), Zn(rg, "onAnimationStart"), Zn("dblclick", "onDoubleClick"), Zn("focusin", "onFocus"), Zn("focusout", "onBlur"), Zn(ig, "onTransitionRun"), Zn(ag, "onTransitionStart"), Zn(og, "onTransitionCancel"), Zn(sg, "onTransitionEnd");
		})(), st("onMouseEnter", ["mouseout", "mouseover"]), st("onMouseLeave", ["mouseout", "mouseover"]), st("onPointerEnter", ["pointerout", "pointerover"]), st("onPointerLeave", ["pointerout", "pointerover"]), ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ot("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste"
		]), ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
		var pS = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mS = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pS)), hS = "_reactListening" + Math.random().toString(36).slice(2), gS = !1, _S = !1, vS = !1, yS = !1, bS = !1, xS = !1, SS = !1, CS = {}, wS = /\r\n?/g, TS = /\u0000|\uFFFD/g, ES = "http://www.w3.org/1999/xlink", DS = "http://www.w3.org/XML/1998/namespace", OS = "javascript:throw new Error('React form unexpectedly submitted.')", kS = "suppressHydrationWarning", AS = "&", jS = "/&", MS = "$", NS = "/$", PS = "$?", FS = "$~", IS = "$!", LS = "html", RS = "body", zS = "head", BS = "F!", VS = "F", HS = "loading", US = "style", WS = 0, GS = 1, KS = 2, qS = null, JS = null, YS = {
			dialog: !0,
			webview: !0
		}, XS = null, ZS = void 0, QS = typeof setTimeout == "function" ? setTimeout : void 0, $S = typeof clearTimeout == "function" ? clearTimeout : void 0, eC = -1, tC = typeof Promise == "function" ? Promise : void 0, nC = typeof queueMicrotask == "function" ? queueMicrotask : tC === void 0 ? QS : function(e) {
			return tC.resolve(null).then(e).catch(Xu);
		}, rC = null, iC = 0, aC = 1, oC = 2, sC = 3, cC = 4, lC = /* @__PURE__ */ new Map(), uC = /* @__PURE__ */ new Set(), dC = B.d;
		B.d = {
			f: function() {
				var e = dC.f(), t = pl();
				return e || t;
			},
			r: function(e) {
				var t = nt(e);
				t !== null && t.tag === 5 && t.type === "form" ? Vo(t) : dC.r(e);
			},
			D: function(e) {
				dC.D(e), Nd("dns-prefetch", e, null);
			},
			C: function(e, t) {
				dC.C(e, t), Nd("preconnect", e, t);
			},
			L: function(e, t, n) {
				dC.L(e, t, n);
				var r = fC;
				if (r && e && t) {
					var i = "link[rel=\"preload\"][as=\"" + bt(t) + "\"]";
					t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + bt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + bt(n.imageSizes) + "\"]")) : i += "[href=\"" + bt(e) + "\"]";
					var a = i;
					switch (t) {
						case "style":
							a = Id(e);
							break;
						case "script": a = zd(e);
					}
					lC.has(a) || (e = R({
						rel: "preload",
						href: t === "image" && n && n.imageSrcSet ? void 0 : e,
						as: t
					}, n), lC.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(L(a)) || t === "script" && r.querySelector(Bd(a)) || (t = r.createElement("link"), ku(t, "link", e), at(t), r.head.appendChild(t)));
				}
			},
			m: function(e, t) {
				dC.m(e, t);
				var n = fC;
				if (n && e) {
					var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + bt(r) + "\"][href=\"" + bt(e) + "\"]", a = i;
					switch (r) {
						case "audioworklet":
						case "paintworklet":
						case "serviceworker":
						case "sharedworker":
						case "worker":
						case "script": a = zd(e);
					}
					if (!lC.has(a) && (e = R({
						rel: "modulepreload",
						href: e
					}, t), lC.set(a, e), n.querySelector(i) === null)) {
						switch (r) {
							case "audioworklet":
							case "paintworklet":
							case "serviceworker":
							case "sharedworker":
							case "worker":
							case "script": if (n.querySelector(Bd(a))) return;
						}
						r = n.createElement("link"), ku(r, "link", e), at(r), n.head.appendChild(r);
					}
				}
			},
			X: function(e, t) {
				dC.X(e, t);
				var n = fC;
				if (n && e) {
					var r = it(n).hoistableScripts, i = zd(e), a = r.get(i);
					a || (a = n.querySelector(Bd(i)), a || (e = R({
						src: e,
						async: !0
					}, t), (t = lC.get(i)) && Wd(e, t), a = n.createElement("script"), at(a), ku(a, "link", e), n.head.appendChild(a)), a = {
						type: "script",
						instance: a,
						count: 1,
						state: null
					}, r.set(i, a));
				}
			},
			S: function(e, t, n) {
				dC.S(e, t, n);
				var r = fC;
				if (r && e) {
					var i = it(r).hoistableStyles, a = Id(e);
					t ||= "default";
					var o = i.get(a);
					if (!o) {
						var s = {
							loading: iC,
							preload: null
						};
						if (o = r.querySelector(L(a))) s.loading = aC | cC;
						else {
							e = R({
								rel: "stylesheet",
								href: e,
								"data-precedence": t
							}, n), (n = lC.get(a)) && Ud(e, n);
							var c = o = r.createElement("link");
							at(c), ku(c, "link", e), c._p = new Promise(function(e, t) {
								c.onload = e, c.onerror = t;
							}), c.addEventListener("load", function() {
								s.loading |= aC;
							}), c.addEventListener("error", function() {
								s.loading |= oC;
							}), s.loading |= cC, Hd(o, t, r);
						}
						o = {
							type: "stylesheet",
							instance: o,
							count: 1,
							state: s
						}, i.set(a, o);
					}
				}
			},
			M: function(e, t) {
				dC.M(e, t);
				var n = fC;
				if (n && e) {
					var r = it(n).hoistableScripts, i = zd(e), a = r.get(i);
					a || (a = n.querySelector(Bd(i)), a || (e = R({
						src: e,
						async: !0,
						type: "module"
					}, t), (t = lC.get(i)) && Wd(e, t), a = n.createElement("script"), at(a), ku(a, "link", e), n.head.appendChild(a)), a = {
						type: "script",
						instance: a,
						count: 1,
						state: null
					}, r.set(i, a));
				}
			}
		};
		var fC = typeof document > "u" ? null : document, pC = null, mC = 6e4, hC = 800, gC = 500, _C = 0, vC = null, yC = null, bC = Zf, xC = {
			$$typeof: Bf,
			Provider: null,
			Consumer: null,
			_currentValue: bC,
			_currentValue2: bC,
			_threadCount: 0
		}, SC = "%c%s%c", CC = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", wC = "", TC = " ", EC = Function.prototype.bind, DC = !1, OC = null, kC = null, AC = null, jC = null, MC = null, NC = null, PC = null, FC = null, IC = null, LC = null;
		OC = function(e, n, i, a) {
			n = t(e, n), n !== null && (i = r(n.memoizedState, i, 0, a), n.memoizedState = i, n.baseState = i, e.memoizedProps = R({}, e.memoizedProps), i = yr(e, 2), i !== null && cl(i, e, 2));
		}, kC = function(e, n, r) {
			n = t(e, n), n !== null && (r = l(n.memoizedState, r, 0), n.memoizedState = r, n.baseState = r, e.memoizedProps = R({}, e.memoizedProps), r = yr(e, 2), r !== null && cl(r, e, 2));
		}, AC = function(e, n, r, a) {
			n = t(e, n), n !== null && (r = i(n.memoizedState, r, a), n.memoizedState = r, n.baseState = r, e.memoizedProps = R({}, e.memoizedProps), r = yr(e, 2), r !== null && cl(r, e, 2));
		}, jC = function(e, t, n) {
			e.pendingProps = r(e.memoizedProps, t, 0, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = yr(e, 2), t !== null && cl(t, e, 2);
		}, MC = function(e, t) {
			e.pendingProps = l(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = yr(e, 2), t !== null && cl(t, e, 2);
		}, NC = function(e, t, n) {
			e.pendingProps = i(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = yr(e, 2), t !== null && cl(t, e, 2);
		}, PC = function(e) {
			var t = yr(e, 2);
			t !== null && cl(t, e, 2);
		}, FC = function(e) {
			var t = Ve(), n = yr(e, t);
			n !== null && cl(n, e, t);
		}, IC = function(e) {
			d = e;
		}, LC = function(e) {
			u = e;
		};
		var RC = !0, zC = null, BC = !1, VC = null, HC = null, UC = null, WC = /* @__PURE__ */ new Map(), GC = /* @__PURE__ */ new Map(), KC = [], qC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "), JC = null;
		if (Of.prototype.render = Df.prototype.render = function(e) {
			var t = this._internalRoot;
			if (t === null) throw Error("Cannot update an unmounted root.");
			var n = arguments;
			typeof n[1] == "function" ? console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ee(n[1]) ? console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : n[1] !== void 0 && console.error("You passed a second argument to root.render(...) but it only accepts one argument."), n = e;
			var r = t.current;
			rf(r, ol(r), n, t, null, null);
		}, Of.prototype.unmount = Df.prototype.unmount = function() {
			var e = arguments;
			if (typeof e[0] == "function" && console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."), e = this._internalRoot, e !== null) {
				this._internalRoot = null;
				var t = e.containerInfo;
				(Z & (Ib | Lb)) !== Fb && console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), rf(e.current, 2, null, e, null, null), pl(), t[Xp] = null;
			}
		}, Of.prototype.unstable_scheduleHydration = function(e) {
			if (e) {
				var t = Qe();
				e = {
					blockedOn: null,
					target: e,
					priority: t
				};
				for (var n = 0; n < KC.length && t !== 0 && t < KC[n].priority; n++);
				KC.splice(n, 0, e), n === 0 && yf(e);
			}
		}, (function() {
			var e = jf.version;
			if (e !== "19.2.8") throw Error("Incompatible React versions: The \"react\" and \"react-dom\" packages must have the exact same version. Instead got:\n  - react:      " + (e + "\n  - react-dom:  19.2.8\nLearn more: https://react.dev/warnings/version-mismatch"));
		})(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"), B.findDOMNode = function(e) {
			var t = e._reactInternals;
			if (t === void 0) throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error("Argument appears to not be a ReactComponent. Keys: " + e));
			return e = ae(t), e = e === null ? null : oe(e), e = e === null ? null : e.stateNode, e;
		}, !(function() {
			var e = {
				bundleType: 1,
				version: "19.2.8",
				rendererPackageName: "react-dom",
				currentDispatcherRef: z,
				reconcilerVersion: "19.2.8"
			};
			return e.overrideHookState = OC, e.overrideHookStateDeletePath = kC, e.overrideHookStateRenamePath = AC, e.overrideProps = jC, e.overridePropsDeletePath = MC, e.overridePropsRenamePath = NC, e.scheduleUpdate = PC, e.scheduleRetry = FC, e.setErrorHandler = IC, e.setSuspenseHandler = LC, e.scheduleRefresh = y, e.scheduleRoot = v, e.setRefreshHandler = b, e.getCurrentFiber = lf, Pe(e);
		})() && nh && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
			var YC = window.location.protocol;
			/^(https?|file):$/.test(YC) && console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (YC === "file:" ? "\nYou might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq" : ""), "font-weight:bold");
		}
		n.createRoot = function(e, t) {
			if (!ee(e)) throw Error("Target container is not a DOM element.");
			kf(e);
			var n = !1, r = "", i = ss, a = cs, o = ls;
			return t != null && (t.hydrate ? console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t && t.$$typeof === Pf && console.error("You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);"), !0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (a = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = tf(e, 1, !1, null, null, n, r, null, i, a, o, Ef), e[Xp] = t.current, pu(e), new Df(t);
		}, n.hydrateRoot = function(e, t, n) {
			if (!ee(e)) throw Error("Target container is not a DOM element.");
			kf(e), t === void 0 && console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
			var r = !1, i = "", a = ss, o = cs, s = ls, c = null;
			return n != null && (!0 === n.unstable_strictMode && (r = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (a = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError), n.formState !== void 0 && (c = n.formState)), t = tf(e, 1, !0, t, n ?? null, r, i, c, a, o, s, Ef), t.context = nf(null), n = t.current, r = ol(n), r = Je(r), i = oa(r), i.callback = null, sa(n, i, r), hi(r, "hydrateRoot()", null), n = r, t.current.lanes = n, Ue(t, n), N(t), e[Xp] = t.current, pu(e), new Of(t);
		}, n.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), d = /* @__PURE__ */ n((/* @__PURE__ */ i(((e, n) => {
	t();
	function r() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
			if (a.env.NODE_ENV !== "production") throw Error("^_^");
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
			} catch (e) {
				console.error(e);
			}
		}
	}
	a.env.NODE_ENV === "production" ? (r(), n.exports = l()) : n.exports = u();
})))(), 1);
o();
var f = /* @__PURE__ */ n(e(), 1), p = new URLSearchParams(window.location.search).get("config") || "", m = (0, d.createRoot)(document.getElementById("root"));
function h(e) {
	m.render(f.createElement("div", { id: "message" }, e));
}
function g(e) {
	if (Array.isArray(e)) e.forEach(g);
	else if (e && typeof e == "object") for (let t of Object.keys(e)) {
		let n = e[t];
		t === "url" && typeof n == "string" && n.startsWith("/") ? e[t] = window.location.origin + n : g(n);
	}
}
async function _() {
	if (!p) {
		h("No config specified. Use ?config=<url>.");
		return;
	}
	try {
		let e = await fetch(p);
		if (!e.ok) throw Error(`${e.status} ${e.statusText}`);
		let t = await e.json();
		g(t), m.render(f.createElement(r, {
			config: t,
			theme: "light",
			height: window.innerHeight
		}));
	} catch (e) {
		h(`Failed to load config from ${p}: ${e}`);
	}
}
_();
//#endregion
