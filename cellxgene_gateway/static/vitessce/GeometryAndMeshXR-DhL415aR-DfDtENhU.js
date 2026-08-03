import { dt as e, gt as t, st as n } from "./index-CDVgyDq2-Pif-GON1.js";
import { E as r, eo as i, rr as a } from "./three.core-1aHSpGwp.js";
import { a as o, i as s } from "./OrbitControls-YstXcWzv.js";
import { a as c, i as l, n as u, o as d, t as f } from "./index-C04NjukO-C3JIC5fx.js";
//#region node_modules/vitessce/dist/GeometryAndMeshXR-DhL415aR.js
var p = n(), m = /* @__PURE__ */ t(e(), 1), { useXR: h, useXRInputSourceState: g } = l();
function _(e, t) {
	return e.get(t);
}
function v(e, t, n, r) {
	if (!e?.inputSource?.hand) return null;
	let a = _(e.inputSource.hand, t);
	if (!a) return null;
	let o = n.getJointPose?.(a, r);
	return o ? new i(o.transform.position.x, o.transform.position.y, o.transform.position.z) : null;
}
function y(e, t, n, r = .02) {
	let i = v(e, "thumb-tip", t, n), a = v(e, "index-finger-tip", t, n);
	return !i || !a ? !1 : i.distanceTo(a) < r;
}
function b(e) {
	let { segmentationGroup: t, segmentationSettings: n, segmentationSceneScale: l, renderingSettings: _, materialRef: b, highlightEntity: x, setObsHighlight: S } = e, C = (0, m.useRef)(null), w = (0, m.useRef)(null), T = (0, m.useRef)(null), E = (0, m.useRef)(null);
	(0, m.useRef)(new a());
	let D = (0, m.useRef)(null), O = (0, m.useRef)(null), k = (0, m.useRef)(0), A = (0, m.useRef)(/* @__PURE__ */ new Map()), j = h((e) => e.session) != null;
	(0, m.useEffect)(() => {
		b?.current?.material?.uniforms?.u_physical_Pixel && (b.current.material.uniforms.u_physical_Pixel.value = j ? .2 : 2.5);
	}, [j, b]);
	let { scene: M, gl: N } = o(), P = g("hand", "right"), F = g("hand", "left"), [I, L] = (0, m.useState)(!1), [R, z] = (0, m.useState)(!1), [B, V] = (0, m.useState)(!1), [H, U] = (0, m.useState)({
		startPoint: new i(),
		midPoint: new i(),
		endPoint: new i(),
		setStartPoint: !1,
		setEndPoint: !1
	}), [W, G] = (0, m.useState)([]), [K, q] = (0, m.useState)(0), J = (0, m.useRef)(I);
	J.current = I;
	let Y = (0, m.useRef)(R);
	Y.current = R;
	let X = (0, m.useRef)(H);
	X.current = H;
	let Z = (0, m.useRef)(W);
	Z.current = W;
	let Q = (0, m.useRef)(K);
	return Q.current = K, s((e, t, n) => {
		if (!j || !n) return;
		let a = N.xr.getReferenceSpace();
		if (!a) return;
		let o = M.getObjectByName("rightTipBbox"), s = M.getObjectByName("leftTipBbox");
		if (!o || !s) return;
		let c = new r().setFromObject(s), l = new r().setFromObject(o), u = !1;
		q((e) => e - 1), c.intersectsBox(l) && c.max.x !== -l.min.x && (L(!0), V(!0), U({
			startPoint: new i(),
			midPoint: new i(),
			endPoint: new i(),
			setStartPoint: !1,
			setEndPoint: !1
		}));
		let d = J.current, f = X.current;
		if (d) {
			let e = v(F, "index-finger-tip", n, a), t = v(P, "index-finger-tip", n, a);
			if (!e || !t) return;
			T.current && (e = e.applyMatrix4(T.current.matrixWorld.clone().invert()), t = t.applyMatrix4(T.current.matrixWorld.clone().invert()));
			let r = e.clone(), o = t.clone();
			f.setStartPoint && (r = f.startPoint), f.setEndPoint && (o = f.endPoint), U({
				startPoint: r,
				midPoint: new i().addVectors(r, o).multiplyScalar(.5),
				endPoint: o,
				setStartPoint: f.setStartPoint,
				setEndPoint: f.setEndPoint
			}), y(P, n, a) && U((e) => ({
				...e,
				setEndPoint: !0
			})), y(F, n, a) && U((e) => ({
				...e,
				setStartPoint: !0
			})), f.setStartPoint && f.setEndPoint && (G((e) => [...e, f]), V(!1), L(!1), q(8));
		} else if (Q.current <= 0 && C.current && j) {
			let e = C.current;
			e.children[0].children.forEach((t, i) => {
				let o = e.children[0].children[i], s = new r().setFromObject(o), d = c.intersectsBox(s), f = l.intersectsBox(s);
				(d || f) && (u = !0, S(o.name), z(!0), d && y(F, n, a) && (q(10), u = !1), f && y(P, n, a) && (q(10), u = !1));
			}), !u && Y.current && (S(null), z(!1));
		}
	}), j ? (0, p.jsxs)("group", { children: [
		(0, p.jsxs)("group", {
			ref: T,
			onPointerDown: (e) => {
				if (j) {
					if (e.stopPropagation(), e.target.setPointerCapture(e.pointerId), E.current === null) E.current = e.pointerId, A.current.set(e.pointerId, e.point.clone()), T.current && (D.current = T.current.scale.clone());
					else if (O.current === null && e.pointerId !== E.current) {
						O.current = e.pointerId, A.current.set(e.pointerId, e.point.clone());
						let t = A.current.get(E.current), n = e.point;
						t && (k.current = t.distanceTo(n)), T.current && (D.current = T.current.scale.clone());
					}
				}
			},
			onPointerUp: (e) => {
				e.target.releasePointerCapture(e.pointerId), A.current.delete(e.pointerId), E.current === e.pointerId && (E.current = null, D.current = null), O.current === e.pointerId && (O.current = null, k.current = 0);
			},
			onPointerMove: (e) => {
				if (!T.current || !e.point) return;
				let t = E.current === e.pointerId, n = O.current === e.pointerId;
				if (!t && !n) return;
				let r = A.current.get(e.pointerId);
				if (A.current.set(e.pointerId, e.point.clone()), O.current !== null && k.current > 0 && D.current) {
					let e = A.current.get(E.current), t = A.current.get(O.current);
					if (e && t) {
						let n = e.distanceTo(t) / k.current;
						T.current.scale.copy(D.current).multiplyScalar(n);
					}
				} else if (t && r) {
					let t = e.point.clone().sub(r);
					T.current.position.add(t);
				}
			},
			children: [t?.visible ? (0, p.jsxs)("group", { children: [
				(0, p.jsx)("hemisphereLight", {
					color: 8421504,
					groundColor: 6316128
				}),
				(0, p.jsx)("directionalLight", {
					color: 16777215,
					position: [
						0,
						-800,
						0
					]
				}),
				(0, p.jsx)("primitive", {
					ref: C,
					object: t,
					position: [
						-.18,
						1.13,
						-1
					],
					scale: [
						.002 * l[0],
						.002 * l[1],
						.002 * l[2]
					]
				})
			] }) : null, _.uniforms && _.shader && _.meshScale ? (0, p.jsx)("group", { children: (0, p.jsxs)("mesh", {
				name: "cube",
				position: [
					-.18,
					1.13,
					-1
				],
				rotation: [
					0,
					0,
					0
				],
				scale: [
					.002 * _.meshScale[0],
					.002 * _.meshScale[1],
					.002 * _.meshScale[2]
				],
				ref: b,
				children: [u(_.geometrySize) && (0, p.jsx)("boxGeometry", { args: _.geometrySize }), (0, p.jsx)("shaderMaterial", {
					customProgramCacheKey: () => "1",
					side: 0,
					uniforms: _.uniforms,
					needsUpdate: !0,
					transparent: !0,
					vertexShader: _.shader.vertexShader,
					fragmentShader: _.shader.fragmentShader
				})]
			}) }) : null]
		}),
		(0, p.jsx)("group", {
			name: "currentLine",
			ref: w,
			children: B ? (0, p.jsx)(f, {
				currentLine: H,
				scale: 1 / .002 * .4
			}) : null
		}),
		(0, p.jsx)("group", {
			name: "lines",
			children: W.map((e) => (0, p.jsx)(f, {
				currentLine: e,
				scale: 1 / .002 * .4
			}, c(e)))
		})
	] }) : (0, p.jsxs)("group", { children: [(0, p.jsxs)("group", { children: [t?.visible ? (0, p.jsxs)("group", { children: [
		(0, p.jsx)("hemisphereLight", {
			color: 8421504,
			groundColor: 6316128
		}),
		(0, p.jsx)("directionalLight", {
			color: 16777215,
			position: [
				0,
				-800,
				0
			]
		}),
		(0, p.jsx)("directionalLight", {
			color: 16777215,
			position: [
				0,
				800,
				0
			]
		}),
		(0, p.jsx)(d, {
			firstHitOnly: !0,
			children: (0, p.jsx)("primitive", {
				ref: C,
				object: t,
				position: [
					0,
					0,
					0
				],
				onClick: (e) => {
					e.object.parent?.userData.name === "finalPass" && x(e.object.name, e.object.userData.layerScope, e.object.userData.channelScope);
				},
				onPointerOver: (e) => {
					S(e.object.name);
				},
				onPointerOut: () => S(null)
			})
		})
	] }) : null, _.uniforms && _.shader && _.meshScale && _.geometrySize ? (0, p.jsx)("group", { children: (0, p.jsxs)("mesh", {
		scale: _.meshScale,
		ref: b,
		children: [(0, p.jsx)("boxGeometry", { args: _.geometrySize }), (0, p.jsx)("shaderMaterial", {
			customProgramCacheKey: () => "1",
			side: 0,
			uniforms: _.uniforms,
			needsUpdate: !0,
			transparent: !0,
			vertexShader: _.shader.vertexShader,
			fragmentShader: _.shader.fragmentShader
		})]
	}) }) : null] }), (0, p.jsx)("group", {
		name: "lines",
		children: W.map((e) => (0, p.jsx)(f, {
			currentLine: e,
			scale: 1
		}, c(e)))
	})] });
}
//#endregion
export { b as default };
