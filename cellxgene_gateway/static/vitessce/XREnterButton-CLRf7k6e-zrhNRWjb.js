import { dt as e, gt as t, st as n } from "./index-CDVgyDq2-Pif-GON1.js";
import { t as r } from "./xrStore-BC7o4upD-Bb65xjUO.js";
//#region node_modules/vitessce/dist/XREnterButton-CLRf7k6e.js
var i = n(), a = /* @__PURE__ */ t(e(), 1);
function o() {
	let [e, t] = (0, a.useState)(!1), [n, o] = (0, a.useState)(!1);
	return (0, a.useEffect)(() => {
		let e = !1;
		return navigator.xr && navigator.xr.isSessionSupported("immersive-ar").then((n) => {
			e || t(n);
		}).catch(() => {}), () => {
			e = !0;
		};
	}, []), (0, a.useEffect)(() => r.subscribe((e) => {
		o(e.session != null);
	}), []), e ? (0, i.jsx)("button", {
		type: "button",
		onClick: () => {
			if (n) {
				let { session: e } = r.getState();
				e && e.end();
			} else r.enterAR();
		},
		style: {
			border: "1px solid white",
			padding: "12px 24px",
			borderRadius: "4px",
			background: "rgba(0, 0, 0, 0.1)",
			color: "white",
			font: "normal 0.8125rem sans-serif",
			outline: "none",
			cursor: "pointer",
			zIndex: 1,
			position: "absolute"
		},
		children: n ? "Exit AR" : "Enter AR"
	}) : null;
}
//#endregion
export { o as default };
