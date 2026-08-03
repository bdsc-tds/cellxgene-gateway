import { dt as e, gt as t, st as n } from "./index-CDVgyDq2-Pif-GON1.js";
import { a as r, i } from "./OrbitControls-YstXcWzv.js";
import { i as a } from "./index-C04NjukO-C3JIC5fx.js";
//#region node_modules/vitessce/dist/XRSceneComponents-CpuAUm3S.js
var o = n(), s = /* @__PURE__ */ t(e(), 1), { useXRInputSourceState: c } = a();
function l(e, t) {
	return e.get(t);
}
function u() {
	let e = c("hand", "right"), t = c("hand", "left"), n = (0, s.useRef)(null), a = (0, s.useRef)(null), { gl: u } = r();
	return i((r, i, o) => {
		if (!o || !u.xr.isPresenting) return;
		let s = u.xr.getReferenceSpace();
		if (s) {
			if (e?.inputSource?.hand && n.current) {
				let t = l(e.inputSource.hand, "index-finger-tip");
				if (t) {
					let e = o.getJointPose?.(t, s);
					e && n.current.position.set(e.transform.position.x, e.transform.position.y, e.transform.position.z);
				}
			}
			if (t?.inputSource?.hand && a.current) {
				let e = l(t.inputSource.hand, "index-finger-tip");
				if (e) {
					let t = o.getJointPose?.(e, s);
					t && a.current.position.set(t.transform.position.x, t.transform.position.y, t.transform.position.z);
				}
			}
		}
	}), (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)("mesh", {
		name: "leftTipBbox",
		ref: a,
		children: [(0, o.jsx)("boxGeometry", { args: [
			.02,
			.02,
			.02
		] }), (0, o.jsx)("meshStandardMaterial", {
			color: "blue",
			transparent: !0,
			opacity: 0
		})]
	}), (0, o.jsxs)("mesh", {
		name: "rightTipBbox",
		ref: n,
		children: [(0, o.jsx)("boxGeometry", { args: [
			.02,
			.02,
			.02
		] }), (0, o.jsx)("meshStandardMaterial", {
			color: "orange",
			transparent: !0,
			opacity: 0
		})]
	})] });
}
var { useXR: d } = a();
function f() {
	let e = d((e) => e.session), { scene: t } = r();
	return i(() => {
		e && t.traverse((e) => {
			if (e.isMesh && e.material && e.userData?.xpiHand) {
				let t = e;
				t.material.transparent = !0, t.material.opacity = .5;
			}
		});
	}), null;
}
function p() {
	return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(u, {}), (0, o.jsx)(f, {})] });
}
//#endregion
export { p as default };
