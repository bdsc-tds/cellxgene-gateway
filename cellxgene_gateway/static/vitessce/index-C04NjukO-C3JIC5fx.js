import { A as e, M as t, dt as n, ft as r, gt as i, ht as a, pt as o, st as s } from "./index-CDVgyDq2-Pif-GON1.js";
import { $a as c, $i as l, A as u, An as d, Ar as f, E as p, Fi as m, Ia as h, Ln as g, Lt as _, Qi as v, Ri as y, Rt as b, U as x, Wa as S, Zr as C, an as w, ar as T, do as E, eo as D, er as O, fr as k, in as A, ir as j, ka as ee, kr as te, nr as ne, on as re, or as M, pn as N, pr as ie, qt as P, rr as F, sr as ae, to as I, ua as L, ut as oe, x as R } from "./three.core-1aHSpGwp.js";
import { a as z, c as B, n as V, o as H, r as se, s as ce, t as U } from "./OrbitControls-YstXcWzv.js";
//#region node_modules/three-stdlib/_polyfill/constants.js
var W = /* @__PURE__ */ parseInt("185".replace(/\D+/g, "")), le = W >= 125 ? "uv1" : "uv2", ue = /* @__PURE__ */ new p(), de = /* @__PURE__ */ new D(), fe = class extends w {
	constructor() {
		super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry", this.setIndex([
			0,
			2,
			1,
			2,
			3,
			1,
			2,
			4,
			3,
			4,
			5,
			3,
			4,
			6,
			5,
			6,
			7,
			5
		]), this.setAttribute("position", new _([
			-1,
			2,
			0,
			1,
			2,
			0,
			-1,
			1,
			0,
			1,
			1,
			0,
			-1,
			0,
			0,
			1,
			0,
			0,
			-1,
			-1,
			0,
			1,
			-1,
			0
		], 3)), this.setAttribute("uv", new _([
			-1,
			2,
			1,
			2,
			-1,
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			-1,
			-2,
			1,
			-2
		], 2));
	}
	applyMatrix4(e) {
		let t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
		return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	setPositions(e) {
		let t;
		e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
		let n = new re(t, 6, 1);
		return this.setAttribute("instanceStart", new N(n, 3, 0)), this.setAttribute("instanceEnd", new N(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
	}
	setColors(e, t = 3) {
		let n;
		e instanceof Float32Array ? n = e : Array.isArray(e) && (n = new Float32Array(e));
		let r = new re(n, t * 2, 1);
		return this.setAttribute("instanceColorStart", new N(r, t, 0)), this.setAttribute("instanceColorEnd", new N(r, t, t)), this;
	}
	fromWireframeGeometry(e) {
		return this.setPositions(e.attributes.position.array), this;
	}
	fromEdgesGeometry(e) {
		return this.setPositions(e.attributes.position.array), this;
	}
	fromMesh(e) {
		return this.fromWireframeGeometry(new E(e.geometry)), this;
	}
	fromLineSegments(e) {
		let t = e.geometry;
		return this.setPositions(t.attributes.position.array), this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new p());
		let e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
		e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), ue.setFromBufferAttribute(t), this.boundingBox.union(ue));
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new L()), this.boundingBox === null && this.computeBoundingBox();
		let e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
		if (e !== void 0 && t !== void 0) {
			let n = this.boundingSphere.center;
			this.boundingBox.getCenter(n);
			let r = 0;
			for (let i = 0, a = e.count; i < a; i++) de.fromBufferAttribute(e, i), r = Math.max(r, n.distanceToSquared(de)), de.fromBufferAttribute(t, i), r = Math.max(r, n.distanceToSquared(de));
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
		}
	}
	toJSON() {}
	applyMatrix(e) {
		return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e);
	}
}, pe = class extends fe {
	constructor() {
		super(), this.isLineGeometry = !0, this.type = "LineGeometry";
	}
	setPositions(e) {
		let t = e.length - 3, n = new Float32Array(2 * t);
		for (let r = 0; r < t; r += 3) n[2 * r] = e[r], n[2 * r + 1] = e[r + 1], n[2 * r + 2] = e[r + 2], n[2 * r + 3] = e[r + 3], n[2 * r + 4] = e[r + 4], n[2 * r + 5] = e[r + 5];
		return super.setPositions(n), this;
	}
	setColors(e, t = 3) {
		let n = e.length - t, r = new Float32Array(2 * n);
		if (t === 3) for (let i = 0; i < n; i += t) r[2 * i] = e[i], r[2 * i + 1] = e[i + 1], r[2 * i + 2] = e[i + 2], r[2 * i + 3] = e[i + 3], r[2 * i + 4] = e[i + 4], r[2 * i + 5] = e[i + 5];
		else for (let i = 0; i < n; i += t) r[2 * i] = e[i], r[2 * i + 1] = e[i + 1], r[2 * i + 2] = e[i + 2], r[2 * i + 3] = e[i + 3], r[2 * i + 4] = e[i + 4], r[2 * i + 5] = e[i + 5], r[2 * i + 6] = e[i + 6], r[2 * i + 7] = e[i + 7];
		return super.setColors(r, t), this;
	}
	fromLine(e) {
		let t = e.geometry;
		return this.setPositions(t.attributes.position.array), this;
	}
}, me = class extends l {
	constructor(e) {
		super({
			type: "LineMaterial",
			uniforms: S.clone(S.merge([
				B.common,
				B.fog,
				{
					worldUnits: { value: 1 },
					linewidth: { value: 1 },
					resolution: { value: new c(1, 1) },
					dashOffset: { value: 0 },
					dashScale: { value: 1 },
					dashSize: { value: 1 },
					gapSize: { value: 1 }
				}
			])),
			vertexShader: "\n				#include <common>\n				#include <fog_pars_vertex>\n				#include <logdepthbuf_pars_vertex>\n				#include <clipping_planes_pars_vertex>\n\n				uniform float linewidth;\n				uniform vec2 resolution;\n\n				attribute vec3 instanceStart;\n				attribute vec3 instanceEnd;\n\n				#ifdef USE_COLOR\n					#ifdef USE_LINE_COLOR_ALPHA\n						varying vec4 vLineColor;\n						attribute vec4 instanceColorStart;\n						attribute vec4 instanceColorEnd;\n					#else\n						varying vec3 vLineColor;\n						attribute vec3 instanceColorStart;\n						attribute vec3 instanceColorEnd;\n					#endif\n				#endif\n\n				#ifdef WORLD_UNITS\n\n					varying vec4 worldPos;\n					varying vec3 worldStart;\n					varying vec3 worldEnd;\n\n					#ifdef USE_DASH\n\n						varying vec2 vUv;\n\n					#endif\n\n				#else\n\n					varying vec2 vUv;\n\n				#endif\n\n				#ifdef USE_DASH\n\n					uniform float dashScale;\n					attribute float instanceDistanceStart;\n					attribute float instanceDistanceEnd;\n					varying float vLineDistance;\n\n				#endif\n\n				void trimSegment( const in vec4 start, inout vec4 end ) {\n\n					// trim end segment so it terminates between the camera plane and the near plane\n\n					// conservative estimate of the near plane\n					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n					float nearEstimate = - 0.5 * b / a;\n\n					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n					end.xyz = mix( start.xyz, end.xyz, alpha );\n\n				}\n\n				void main() {\n\n					#ifdef USE_COLOR\n\n						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n					#endif\n\n					#ifdef USE_DASH\n\n						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n						vUv = uv;\n\n					#endif\n\n					float aspect = resolution.x / resolution.y;\n\n					// camera space\n					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n					#ifdef WORLD_UNITS\n\n						worldStart = start.xyz;\n						worldEnd = end.xyz;\n\n					#else\n\n						vUv = uv;\n\n					#endif\n\n					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n					// perhaps there is a more elegant solution -- WestLangley\n\n					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n					if ( perspective ) {\n\n						if ( start.z < 0.0 && end.z >= 0.0 ) {\n\n							trimSegment( start, end );\n\n						} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n							trimSegment( end, start );\n\n						}\n\n					}\n\n					// clip space\n					vec4 clipStart = projectionMatrix * start;\n					vec4 clipEnd = projectionMatrix * end;\n\n					// ndc space\n					vec3 ndcStart = clipStart.xyz / clipStart.w;\n					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;\n\n					// direction\n					vec2 dir = ndcEnd.xy - ndcStart.xy;\n\n					// account for clip-space aspect ratio\n					dir.x *= aspect;\n					dir = normalize( dir );\n\n					#ifdef WORLD_UNITS\n\n						// get the offset direction as perpendicular to the view vector\n						vec3 worldDir = normalize( end.xyz - start.xyz );\n						vec3 offset;\n						if ( position.y < 0.5 ) {\n\n							offset = normalize( cross( start.xyz, worldDir ) );\n\n						} else {\n\n							offset = normalize( cross( end.xyz, worldDir ) );\n\n						}\n\n						// sign flip\n						if ( position.x < 0.0 ) offset *= - 1.0;\n\n						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );\n\n						// don't extend the line if we're rendering dashes because we\n						// won't be rendering the endcaps\n						#ifndef USE_DASH\n\n							// extend the line bounds to encompass  endcaps\n							start.xyz += - worldDir * linewidth * 0.5;\n							end.xyz += worldDir * linewidth * 0.5;\n\n							// shift the position of the quad so it hugs the forward edge of the line\n							offset.xy -= dir * forwardOffset;\n							offset.z += 0.5;\n\n						#endif\n\n						// endcaps\n						if ( position.y > 1.0 || position.y < 0.0 ) {\n\n							offset.xy += dir * 2.0 * forwardOffset;\n\n						}\n\n						// adjust for linewidth\n						offset *= linewidth * 0.5;\n\n						// set the world position\n						worldPos = ( position.y < 0.5 ) ? start : end;\n						worldPos.xyz += offset;\n\n						// project the worldpos\n						vec4 clip = projectionMatrix * worldPos;\n\n						// shift the depth of the projected points so the line\n						// segments overlap neatly\n						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;\n						clip.z = clipPose.z * clip.w;\n\n					#else\n\n						vec2 offset = vec2( dir.y, - dir.x );\n						// undo aspect ratio adjustment\n						dir.x /= aspect;\n						offset.x /= aspect;\n\n						// sign flip\n						if ( position.x < 0.0 ) offset *= - 1.0;\n\n						// endcaps\n						if ( position.y < 0.0 ) {\n\n							offset += - dir;\n\n						} else if ( position.y > 1.0 ) {\n\n							offset += dir;\n\n						}\n\n						// adjust for linewidth\n						offset *= linewidth;\n\n						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n						offset /= resolution.y;\n\n						// select end\n						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n						// back to clip space\n						offset *= clip.w;\n\n						clip.xy += offset;\n\n					#endif\n\n					gl_Position = clip;\n\n					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n					#include <logdepthbuf_vertex>\n					#include <clipping_planes_vertex>\n					#include <fog_vertex>\n\n				}\n			",
			fragmentShader: `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${W >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,
			clipping: !0
		}), this.isLineMaterial = !0, this.onBeforeCompile = function() {
			this.transparent ? this.defines.USE_LINE_COLOR_ALPHA = "1" : delete this.defines.USE_LINE_COLOR_ALPHA;
		}, Object.defineProperties(this, {
			color: {
				enumerable: !0,
				get: function() {
					return this.uniforms.diffuse.value;
				},
				set: function(e) {
					this.uniforms.diffuse.value = e;
				}
			},
			worldUnits: {
				enumerable: !0,
				get: function() {
					return "WORLD_UNITS" in this.defines;
				},
				set: function(e) {
					e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
				}
			},
			linewidth: {
				enumerable: !0,
				get: function() {
					return this.uniforms.linewidth.value;
				},
				set: function(e) {
					this.uniforms.linewidth.value = e;
				}
			},
			dashed: {
				enumerable: !0,
				get: function() {
					return "USE_DASH" in this.defines;
				},
				set(e) {
					!!e != "USE_DASH" in this.defines && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
				}
			},
			dashScale: {
				enumerable: !0,
				get: function() {
					return this.uniforms.dashScale.value;
				},
				set: function(e) {
					this.uniforms.dashScale.value = e;
				}
			},
			dashSize: {
				enumerable: !0,
				get: function() {
					return this.uniforms.dashSize.value;
				},
				set: function(e) {
					this.uniforms.dashSize.value = e;
				}
			},
			dashOffset: {
				enumerable: !0,
				get: function() {
					return this.uniforms.dashOffset.value;
				},
				set: function(e) {
					this.uniforms.dashOffset.value = e;
				}
			},
			gapSize: {
				enumerable: !0,
				get: function() {
					return this.uniforms.gapSize.value;
				},
				set: function(e) {
					this.uniforms.gapSize.value = e;
				}
			},
			opacity: {
				enumerable: !0,
				get: function() {
					return this.uniforms.opacity.value;
				},
				set: function(e) {
					this.uniforms.opacity.value = e;
				}
			},
			resolution: {
				enumerable: !0,
				get: function() {
					return this.uniforms.resolution.value;
				},
				set: function(e) {
					this.uniforms.resolution.value.copy(e);
				}
			},
			alphaToCoverage: {
				enumerable: !0,
				get: function() {
					return "USE_ALPHA_TO_COVERAGE" in this.defines;
				},
				set: function(e) {
					!!e != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = !0), e === !0 ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1);
				}
			}
		}), this.setValues(e);
	}
}, he = /* @__PURE__ */ new I(), ge = /* @__PURE__ */ new D(), _e = /* @__PURE__ */ new D(), ve = /* @__PURE__ */ new I(), ye = /* @__PURE__ */ new I(), be = /* @__PURE__ */ new I(), xe = /* @__PURE__ */ new D(), Se = /* @__PURE__ */ new F(), G = /* @__PURE__ */ new d(), Ce = /* @__PURE__ */ new D(), we = /* @__PURE__ */ new p(), Te = /* @__PURE__ */ new L(), Ee = /* @__PURE__ */ new I(), De, Oe;
function ke(e, t, n) {
	return Ee.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix), Ee.multiplyScalar(1 / Ee.w), Ee.x = Oe / n.width, Ee.y = Oe / n.height, Ee.applyMatrix4(e.projectionMatrixInverse), Ee.multiplyScalar(1 / Ee.w), Math.abs(Math.max(Ee.x, Ee.y));
}
function Ae(e, t) {
	let n = e.matrixWorld, r = e.geometry, i = r.attributes.instanceStart, a = r.attributes.instanceEnd, o = Math.min(r.instanceCount, i.count);
	for (let r = 0, s = o; r < s; r++) {
		G.start.fromBufferAttribute(i, r), G.end.fromBufferAttribute(a, r), G.applyMatrix4(n);
		let o = new D(), s = new D();
		De.distanceSqToSegment(G.start, G.end, s, o), s.distanceTo(o) < Oe * .5 && t.push({
			point: s,
			pointOnLine: o,
			distance: De.origin.distanceTo(s),
			object: e,
			face: null,
			faceIndex: r,
			uv: null,
			[le]: null
		});
	}
}
function je(e, t, n) {
	let r = t.projectionMatrix, i = e.material.resolution, a = e.matrixWorld, o = e.geometry, s = o.attributes.instanceStart, c = o.attributes.instanceEnd, l = Math.min(o.instanceCount, s.count), u = -t.near;
	De.at(1, be), be.w = 1, be.applyMatrix4(t.matrixWorldInverse), be.applyMatrix4(r), be.multiplyScalar(1 / be.w), be.x *= i.x / 2, be.y *= i.y / 2, be.z = 0, xe.copy(be), Se.multiplyMatrices(t.matrixWorldInverse, a);
	for (let t = 0, o = l; t < o; t++) {
		if (ve.fromBufferAttribute(s, t), ye.fromBufferAttribute(c, t), ve.w = 1, ye.w = 1, ve.applyMatrix4(Se), ye.applyMatrix4(Se), ve.z > u && ye.z > u) continue;
		if (ve.z > u) {
			let e = ve.z - ye.z, t = (ve.z - u) / e;
			ve.lerp(ye, t);
		} else if (ye.z > u) {
			let e = ye.z - ve.z, t = (ye.z - u) / e;
			ye.lerp(ve, t);
		}
		ve.applyMatrix4(r), ye.applyMatrix4(r), ve.multiplyScalar(1 / ve.w), ye.multiplyScalar(1 / ye.w), ve.x *= i.x / 2, ve.y *= i.y / 2, ye.x *= i.x / 2, ye.y *= i.y / 2, G.start.copy(ve), G.start.z = 0, G.end.copy(ye), G.end.z = 0;
		let o = G.closestPointToPointParameter(xe, !0);
		G.at(o, Ce);
		let l = O.lerp(ve.z, ye.z, o), d = l >= -1 && l <= 1, f = xe.distanceTo(Ce) < Oe * .5;
		if (d && f) {
			G.start.fromBufferAttribute(s, t), G.end.fromBufferAttribute(c, t), G.start.applyMatrix4(a), G.end.applyMatrix4(a);
			let r = new D(), i = new D();
			De.distanceSqToSegment(G.start, G.end, i, r), n.push({
				point: i,
				pointOnLine: r,
				distance: De.origin.distanceTo(i),
				object: e,
				face: null,
				faceIndex: t,
				uv: null,
				[le]: null
			});
		}
	}
}
var Me = class extends j {
	constructor(e = new fe(), t = new me({ color: Math.random() * 16777215 })) {
		super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2";
	}
	computeLineDistances() {
		let e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, r = new Float32Array(2 * t.count);
		for (let e = 0, i = 0, a = t.count; e < a; e++, i += 2) ge.fromBufferAttribute(t, e), _e.fromBufferAttribute(n, e), r[i] = i === 0 ? 0 : r[i - 1], r[i + 1] = r[i] + ge.distanceTo(_e);
		let i = new re(r, 2, 1);
		return e.setAttribute("instanceDistanceStart", new N(i, 1, 0)), e.setAttribute("instanceDistanceEnd", new N(i, 1, 1)), this;
	}
	raycast(e, t) {
		let n = this.material.worldUnits, r = e.camera;
		r === null && !n && console.error("LineSegments2: \"Raycaster.camera\" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.");
		let i = e.params.Line2 === void 0 ? 0 : e.params.Line2.threshold || 0;
		De = e.ray;
		let a = this.matrixWorld, o = this.geometry, s = this.material;
		Oe = s.linewidth + i, o.boundingSphere === null && o.computeBoundingSphere(), Te.copy(o.boundingSphere).applyMatrix4(a);
		let c;
		if (c = n ? Oe * .5 : ke(r, Math.max(r.near, Te.distanceToPoint(De.origin)), s.resolution), Te.radius += c, De.intersectsSphere(Te) === !1) return;
		o.boundingBox === null && o.computeBoundingBox(), we.copy(o.boundingBox).applyMatrix4(a);
		let l;
		l = n ? Oe * .5 : ke(r, Math.max(r.near, we.distanceToPoint(De.origin)), s.resolution), we.expandByScalar(l), De.intersectsBox(we) !== !1 && (n ? Ae(this, t) : je(this, r, t));
	}
	onBeforeRender(e) {
		let t = this.material.uniforms;
		t && t.resolution && (e.getViewport(he), this.material.uniforms.resolution.value.set(he.z, he.w));
	}
}, Ne = class extends Me {
	constructor(e = new pe(), t = new me({ color: Math.random() * 16777215 })) {
		super(e, t), this.isLine2 = !0, this.type = "Line2";
	}
}, K = /* @__PURE__ */ i(n()), Pe = /* @__PURE__ */ K.forwardRef(function({ points: e, color: t = 16777215, vertexColors: n, linewidth: r, lineWidth: i, segments: a, dashed: o, ...s }, l) {
	var u;
	let d = z((e) => e.size), f = K.useMemo(() => a ? new Me() : new Ne(), [a]), [p] = K.useState(() => new me()), m = (n == null || (u = n[0]) == null ? void 0 : u.length) === 4 ? 4 : 3, h = K.useMemo(() => {
		let r = a ? new fe() : new pe(), i = e.map((e) => {
			let t = Array.isArray(e);
			return e instanceof D || e instanceof I ? [
				e.x,
				e.y,
				e.z
			] : e instanceof c ? [
				e.x,
				e.y,
				0
			] : t && e.length === 3 ? [
				e[0],
				e[1],
				e[2]
			] : t && e.length === 2 ? [
				e[0],
				e[1],
				0
			] : e;
		});
		if (r.setPositions(i.flat()), n) {
			t = 16777215;
			let e = n.map((e) => e instanceof x ? e.toArray() : e);
			r.setColors(e.flat(), m);
		}
		return r;
	}, [
		e,
		a,
		n,
		m
	]);
	return K.useLayoutEffect(() => {
		f.computeLineDistances();
	}, [e, f]), K.useLayoutEffect(() => {
		o ? p.defines.USE_DASH = "" : delete p.defines.USE_DASH, p.needsUpdate = !0;
	}, [o, p]), K.useEffect(() => () => {
		h.dispose(), p.dispose();
	}, [h]), /*#__PURE__*/ K.createElement("primitive", V({
		object: f,
		ref: l
	}, s), /*#__PURE__*/ K.createElement("primitive", {
		object: h,
		attach: "geometry"
	}), /*#__PURE__*/ K.createElement("primitive", V({
		object: p,
		attach: "material",
		color: t,
		vertexColors: !!n,
		resolution: [d.width, d.height],
		linewidth: r ?? i ?? 1,
		dashed: o,
		transparent: m === 4
	}, s)));
});
//#endregion
//#region node_modules/troika-worker-utils/dist/troika-worker-utils.esm.js
r();
function Fe() {
	var e = Object.create(null);
	function t(n, i) {
		var a = n.id, o = n.name, s = n.dependencies;
		s === void 0 && (s = []);
		var c = n.init;
		c === void 0 && (c = function() {});
		var l = n.getTransferables;
		if (l === void 0 && (l = null), !e[a]) try {
			s = s.map(function(n) {
				return n && n.isWorkerModule && (t(n, function(e) {
					if (e instanceof Error) throw e;
				}), n = e[n.id].value), n;
			}), c = r("<" + o + ">.init", c), l &&= r("<" + o + ">.getTransferables", l);
			var u = null;
			typeof c == "function" ? u = c.apply(void 0, s) : console.error("worker module init function failed to rehydrate"), e[a] = {
				id: a,
				value: u,
				getTransferables: l
			}, i(u);
		} catch (e) {
			e && e.noLog || console.error(e), i(e);
		}
	}
	function n(t, n) {
		var r, i = t.id, a = t.args;
		(!e[i] || typeof e[i].value != "function") && n(/* @__PURE__ */ Error("Worker module " + i + ": not found or its 'init' did not return a function"));
		try {
			var o = (r = e[i]).value.apply(r, a);
			o && typeof o.then == "function" ? o.then(s, function(e) {
				return n(e instanceof Error ? e : /* @__PURE__ */ Error("" + e));
			}) : s(o);
		} catch (e) {
			n(e);
		}
		function s(t) {
			try {
				var r = e[i].getTransferables && e[i].getTransferables(t);
				(!r || !Array.isArray(r) || !r.length) && (r = void 0), n(t, r);
			} catch (e) {
				console.error(e), n(e);
			}
		}
	}
	function r(e, t) {
		var n = void 0;
		self.troikaDefine = function(e) {
			return n = e;
		};
		var r = URL.createObjectURL(new Blob(["/** " + e.replace(/\*/g, "") + " **/\n\ntroikaDefine(\n" + t + "\n)"], { type: "application/javascript" }));
		try {
			importScripts(r);
		} catch (e) {
			console.error(e);
		}
		return URL.revokeObjectURL(r), delete self.troikaDefine, n;
	}
	self.addEventListener("message", function(e) {
		var r = e.data, i = r.messageId, a = r.action, o = r.data;
		try {
			a === "registerModule" && t(o, function(e) {
				e instanceof Error ? postMessage({
					messageId: i,
					success: !1,
					error: e.message
				}) : postMessage({
					messageId: i,
					success: !0,
					result: { isCallable: typeof e == "function" }
				});
			}), a === "callModule" && n(o, function(e, t) {
				e instanceof Error ? postMessage({
					messageId: i,
					success: !1,
					error: e.message
				}) : postMessage({
					messageId: i,
					success: !0,
					result: e
				}, t || void 0);
			});
		} catch (e) {
			postMessage({
				messageId: i,
				success: !1,
				error: e.stack
			});
		}
	});
}
function Ie(e) {
	var t = function() {
		for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
		return t._getInitResult().then(function(t) {
			if (typeof t == "function") return t.apply(void 0, e);
			throw Error("Worker module function was called but `init` did not return a callable function");
		});
	};
	return t._getInitResult = function() {
		var n = e.dependencies, r = e.init;
		n = Array.isArray(n) ? n.map(function(e) {
			return e && (e = e.onMainThread || e, e._getInitResult && (e = e._getInitResult())), e;
		}) : [];
		var i = Promise.all(n).then(function(e) {
			return r.apply(null, e);
		});
		return t._getInitResult = function() {
			return i;
		}, i;
	}, t;
}
var q = function() {
	var e = !1;
	if (typeof window < "u" && window.document !== void 0) try {
		new Worker(URL.createObjectURL(new Blob([""], { type: "application/javascript" }))).terminate(), e = !0;
	} catch (e) {
		o !== void 0 && o.env.NODE_ENV === "test" || console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + e.message + "]");
	}
	return q = function() {
		return e;
	}, e;
}, Le = 0, Re = 0, ze = !1, Be = Object.create(null), Ve = Object.create(null), He = Object.create(null);
function Ue(e) {
	if ((!e || typeof e.init != "function") && !ze) throw Error("requires `options.init` function");
	var t = e.dependencies, n = e.init, r = e.getTransferables, i = e.workerId, a = Ie(e);
	i ??= "#default";
	var o = "workerModule" + ++Le, s = e.name || o, c = null;
	t &&= t.map(function(e) {
		return typeof e == "function" && !e.workerModuleData && (ze = !0, e = Ue({
			workerId: i,
			name: "<" + s + "> function dependency: " + e.name,
			init: "function(){return (\n" + Ge(e) + "\n)}"
		}), ze = !1), e && e.workerModuleData && (e = e.workerModuleData), e;
	});
	function l() {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		if (!q()) return a.apply(void 0, e);
		if (!c) {
			c = qe(i, "registerModule", l.workerModuleData);
			var n = function() {
				c = null, Ve[i].delete(n);
			};
			(Ve[i] || (Ve[i] = /* @__PURE__ */ new Set())).add(n);
		}
		return c.then(function(t) {
			if (t.isCallable) return qe(i, "callModule", {
				id: o,
				args: e
			});
			throw Error("Worker module function was called but `init` did not return a callable function");
		});
	}
	return l.workerModuleData = {
		isWorkerModule: !0,
		id: o,
		name: s,
		dependencies: t,
		init: Ge(n),
		getTransferables: r && Ge(r)
	}, l.onMainThread = a, l;
}
function We(e) {
	Ve[e] && Ve[e].forEach(function(e) {
		e();
	}), Be[e] && (Be[e].terminate(), delete Be[e]);
}
function Ge(e) {
	var t = e.toString();
	return !/^function/.test(t) && /^\w+\s*\(/.test(t) && (t = "function " + t), t;
}
function Ke(e) {
	var t = Be[e];
	if (!t) {
		var n = Ge(Fe);
		t = Be[e] = new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: " + e.replace(/\*/g, "") + " **/\n\n;(" + n + ")()"], { type: "application/javascript" }))), t.onmessage = function(e) {
			var t = e.data, n = t.messageId, r = He[n];
			if (!r) throw Error("WorkerModule response with empty or unknown messageId");
			delete He[n], r(t);
		};
	}
	return t;
}
function qe(e, t, n) {
	return new Promise(function(r, i) {
		var a = ++Re;
		He[a] = function(e) {
			e.success ? r(e.result) : i(/* @__PURE__ */ Error("Error in worker " + t + " call: " + e.error));
		}, Ke(e).postMessage({
			messageId: a,
			action: t,
			data: n
		});
	});
}
//#endregion
//#region node_modules/webgl-sdf-generator/dist/webgl-sdf-generator.mjs
function Je() {
	return function(e) {
		function t(e, t, n, r, i, a, o, s) {
			var c = 1 - o;
			s.x = c * c * e + 2 * c * o * n + o * o * i, s.y = c * c * t + 2 * c * o * r + o * o * a;
		}
		function n(e, t, n, r, i, a, o, s, c, l) {
			var u = 1 - c;
			l.x = u * u * u * e + 3 * u * u * c * n + 3 * u * c * c * i + c * c * c * o, l.y = u * u * u * t + 3 * u * u * c * r + 3 * u * c * c * a + c * c * c * s;
		}
		function r(e, t) {
			for (var n = /([MLQCZ])([^MLQCZ]*)/g, r, i, a, o, s; r = n.exec(e);) {
				var c = r[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(e) {
					return parseFloat(e);
				});
				switch (r[1]) {
					case "M":
						o = i = c[0], s = a = c[1];
						break;
					case "L":
						(c[0] !== o || c[1] !== s) && t("L", o, s, o = c[0], s = c[1]);
						break;
					case "Q":
						t("Q", o, s, o = c[2], s = c[3], c[0], c[1]);
						break;
					case "C":
						t("C", o, s, o = c[4], s = c[5], c[0], c[1], c[2], c[3]);
						break;
					case "Z":
						(o !== i || s !== a) && t("L", o, s, i, a);
						break;
				}
			}
		}
		function i(e, i, a) {
			a === void 0 && (a = 16);
			var o = {
				x: 0,
				y: 0
			};
			r(e, function(e, r, s, c, l, u, d, f, p) {
				switch (e) {
					case "L":
						i(r, s, c, l);
						break;
					case "Q":
						for (var m = r, h = s, g = 1; g < a; g++) t(r, s, u, d, c, l, g / (a - 1), o), i(m, h, o.x, o.y), m = o.x, h = o.y;
						break;
					case "C":
						for (var _ = r, v = s, y = 1; y < a; y++) n(r, s, u, d, f, p, c, l, y / (a - 1), o), i(_, v, o.x, o.y), _ = o.x, v = o.y;
						break;
				}
			});
		}
		var a = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", o = /* @__PURE__ */ new WeakMap(), s = {
			premultipliedAlpha: !1,
			preserveDrawingBuffer: !0,
			antialias: !1,
			depth: !1
		};
		function c(e, t) {
			var n = e.getContext ? e.getContext("webgl", s) : e, r = o.get(n);
			if (!r) {
				var i = typeof WebGL2RenderingContext < "u" && n instanceof WebGL2RenderingContext, a = {}, c = {}, l = {}, u = -1, d = [];
				n.canvas.addEventListener("webglcontextlost", function(e) {
					m(), e.preventDefault();
				}, !1);
				function e(e) {
					var t = a[e];
					if (!t && (t = a[e] = n.getExtension(e), !t)) throw Error(e + " not supported");
					return t;
				}
				function t(e, t) {
					var r = n.createShader(t);
					return n.shaderSource(r, e), n.compileShader(r), r;
				}
				function s(r, a, o, s) {
					if (!c[r]) {
						var l = {}, u = {}, d = n.createProgram();
						n.attachShader(d, t(a, n.VERTEX_SHADER)), n.attachShader(d, t(o, n.FRAGMENT_SHADER)), n.linkProgram(d), c[r] = {
							program: d,
							transaction: function(t) {
								n.useProgram(d), t({
									setUniform: function(e, t) {
										for (var r = [], i = arguments.length - 2; i-- > 0;) r[i] = arguments[i + 2];
										var a = u[t] || (u[t] = n.getUniformLocation(d, t));
										n["uniform" + e].apply(n, [a].concat(r));
									},
									setAttribute: function(t, r, a, o, s) {
										var c = l[t];
										c ||= l[t] = {
											buf: n.createBuffer(),
											loc: n.getAttribLocation(d, t),
											data: null
										}, n.bindBuffer(n.ARRAY_BUFFER, c.buf), n.vertexAttribPointer(c.loc, r, n.FLOAT, !1, 0, 0), n.enableVertexAttribArray(c.loc), i ? n.vertexAttribDivisor(c.loc, o) : e("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c.loc, o), s !== c.data && (n.bufferData(n.ARRAY_BUFFER, s, a), c.data = s);
									}
								});
							}
						};
					}
					c[r].transaction(s);
				}
				function f(e, t) {
					u++;
					try {
						n.activeTexture(n.TEXTURE0 + u);
						var r = l[e];
						r || (r = l[e] = n.createTexture(), n.bindTexture(n.TEXTURE_2D, r), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST)), n.bindTexture(n.TEXTURE_2D, r), t(r, u);
					} finally {
						u--;
					}
				}
				function p(e, t, r) {
					var i = n.createFramebuffer();
					d.push(i), n.bindFramebuffer(n.FRAMEBUFFER, i), n.activeTexture(n.TEXTURE0 + t), n.bindTexture(n.TEXTURE_2D, e), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, e, 0);
					try {
						r(i);
					} finally {
						n.deleteFramebuffer(i), n.bindFramebuffer(n.FRAMEBUFFER, d[--d.length - 1] || null);
					}
				}
				function m() {
					a = {}, c = {}, l = {}, u = -1, d.length = 0;
				}
				o.set(n, r = {
					gl: n,
					isWebGL2: i,
					getExtension: e,
					withProgram: s,
					withTexture: f,
					withTextureFramebuffer: p,
					handleContextLoss: m
				});
			}
			t(r);
		}
		function l(e, t, n, r, i, o, s, l) {
			s === void 0 && (s = 15), l === void 0 && (l = null), c(e, function(e) {
				var c = e.gl, u = e.withProgram, d = e.withTexture;
				d("copy", function(e, d) {
					c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, i, o, 0, c.RGBA, c.UNSIGNED_BYTE, t), u("copy", a, "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", function(e) {
						var t = e.setUniform, a = e.setAttribute;
						a("aUV", 2, c.STATIC_DRAW, 0, new Float32Array([
							0,
							0,
							2,
							0,
							0,
							2
						])), t("1i", "image", d), c.bindFramebuffer(c.FRAMEBUFFER, l || null), c.disable(c.BLEND), c.colorMask(s & 8, s & 4, s & 2, s & 1), c.viewport(n, r, i, o), c.scissor(n, r, i, o), c.drawArrays(c.TRIANGLES, 0, 3);
					});
				});
			});
		}
		function u(e, t, n) {
			var r = e.width, i = e.height;
			c(e, function(a) {
				var o = a.gl, s = new Uint8Array(r * i * 4);
				o.readPixels(0, 0, r, i, o.RGBA, o.UNSIGNED_BYTE, s), e.width = t, e.height = n, l(o, s, 0, 0, r, i);
			});
		}
		var d = /*#__PURE__*/ Object.freeze({
			__proto__: null,
			withWebGLContext: c,
			renderImageData: l,
			resizeWebGLCanvasWithoutClearing: u
		});
		function f(e, t, n, r, a, o) {
			o === void 0 && (o = 1);
			var s = new Uint8Array(e * t), c = r[2] - r[0], l = r[3] - r[1], u = [];
			i(n, function(e, t, n, r) {
				u.push({
					x1: e,
					y1: t,
					x2: n,
					y2: r,
					minX: Math.min(e, n),
					minY: Math.min(t, r),
					maxX: Math.max(e, n),
					maxY: Math.max(t, r)
				});
			}), u.sort(function(e, t) {
				return e.maxX - t.maxX;
			});
			for (var d = 0; d < e; d++) for (var f = 0; f < t; f++) {
				var p = g(r[0] + c * (d + .5) / e, r[1] + l * (f + .5) / t), m = (1 - Math.abs(p) / a) ** o / 2;
				p < 0 && (m = 1 - m), m = Math.max(0, Math.min(255, Math.round(m * 255))), s[f * e + d] = m;
			}
			return s;
			function g(e, t) {
				for (var n = Infinity, r = Infinity, i = u.length; i--;) {
					var a = u[i];
					if (a.maxX + r <= e) break;
					if (e + r > a.minX && t - r < a.maxY && t + r > a.minY) {
						var o = h(e, t, a.x1, a.y1, a.x2, a.y2);
						o < n && (n = o, r = Math.sqrt(n));
					}
				}
				return _(e, t) && (r = -r), r;
			}
			function _(e, t) {
				for (var n = 0, r = u.length; r--;) {
					var i = u[r];
					if (i.maxX <= e) break;
					i.y1 > t != i.y2 > t && e < (i.x2 - i.x1) * (t - i.y1) / (i.y2 - i.y1) + i.x1 && (n += i.y1 < i.y2 ? 1 : -1);
				}
				return n !== 0;
			}
		}
		function p(e, t, n, r, i, a, o, s, c, l) {
			a === void 0 && (a = 1), s === void 0 && (s = 0), c === void 0 && (c = 0), l === void 0 && (l = 0), m(e, t, n, r, i, a, o, null, s, c, l);
		}
		function m(e, t, n, r, i, a, o, s, c, u, d) {
			a === void 0 && (a = 1), c === void 0 && (c = 0), u === void 0 && (u = 0), d === void 0 && (d = 0);
			for (var p = f(e, t, n, r, i, a), m = new Uint8Array(p.length * 4), h = 0; h < p.length; h++) m[h * 4 + d] = p[h];
			l(o, m, c, u, e, t, 1 << 3 - d, s);
		}
		function h(e, t, n, r, i, a) {
			var o = i - n, s = a - r, c = o * o + s * s, l = c ? Math.max(0, Math.min(1, ((e - n) * o + (t - r) * s) / c)) : 0, u = e - (n + l * o), d = t - (r + l * s);
			return u * u + d * d;
		}
		var g = /*#__PURE__*/ Object.freeze({
			__proto__: null,
			generate: f,
			generateIntoCanvas: p,
			generateIntoFramebuffer: m
		}), _ = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", v = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", y = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", b = new Float32Array([
			0,
			0,
			2,
			0,
			0,
			2
		]), x = null, S = !1, C = {}, w = /* @__PURE__ */ new WeakMap();
		function T(e) {
			if (!S && !k(e)) throw Error("WebGL generation not supported");
		}
		function E(e, t, n, r, i, a, o) {
			if (a === void 0 && (a = 1), o === void 0 && (o = null), !o && (o = x, !o)) {
				var s = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
				if (!s) throw Error("OffscreenCanvas or DOM canvas not supported");
				o = x = s.getContext("webgl", { depth: !1 });
			}
			T(o);
			var l = new Uint8Array(e * t * 4);
			c(o, function(o) {
				var s = o.gl, c = o.withTexture, u = o.withTextureFramebuffer;
				c("readable", function(o, c) {
					s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, e, t, 0, s.RGBA, s.UNSIGNED_BYTE, null), u(o, c, function(o) {
						O(e, t, n, r, i, a, s, o, 0, 0, 0), s.readPixels(0, 0, e, t, s.RGBA, s.UNSIGNED_BYTE, l);
					});
				});
			});
			for (var u = new Uint8Array(e * t), d = 0, f = 0; d < l.length; d += 4) u[f++] = l[d];
			return u;
		}
		function D(e, t, n, r, i, a, o, s, c, l) {
			a === void 0 && (a = 1), s === void 0 && (s = 0), c === void 0 && (c = 0), l === void 0 && (l = 0), O(e, t, n, r, i, a, o, null, s, c, l);
		}
		function O(e, t, n, r, o, s, l, u, d, f, p) {
			s === void 0 && (s = 1), d === void 0 && (d = 0), f === void 0 && (f = 0), p === void 0 && (p = 0), T(l);
			var m = [];
			i(n, function(e, t, n, r) {
				m.push(e, t, n, r);
			}), m = new Float32Array(m), c(l, function(n) {
				var i = n.gl, c = n.isWebGL2, l = n.getExtension, h = n.withProgram, g = n.withTexture, x = n.withTextureFramebuffer, S = n.handleContextLoss;
				if (g("rawDistances", function(n, g) {
					(e !== n._lastWidth || t !== n._lastHeight) && i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, n._lastWidth = e, n._lastHeight = t, 0, i.RGBA, i.UNSIGNED_BYTE, null), h("main", _, v, function(a) {
						var u = a.setAttribute, d = a.setUniform, f = !c && l("ANGLE_instanced_arrays"), p = !c && l("EXT_blend_minmax");
						u("aUV", 2, i.STATIC_DRAW, 0, b), u("aLineSegment", 4, i.DYNAMIC_DRAW, 1, m), d.apply(void 0, ["4f", "uGlyphBounds"].concat(r)), d("1f", "uMaxDistance", o), d("1f", "uExponent", s), x(n, g, function(n) {
							i.enable(i.BLEND), i.colorMask(!0, !0, !0, !0), i.viewport(0, 0, e, t), i.scissor(0, 0, e, t), i.blendFunc(i.ONE, i.ONE), i.blendEquationSeparate(i.FUNC_ADD, c ? i.MAX : p.MAX_EXT), i.clear(i.COLOR_BUFFER_BIT), c ? i.drawArraysInstanced(i.TRIANGLES, 0, 3, m.length / 4) : f.drawArraysInstancedANGLE(i.TRIANGLES, 0, 3, m.length / 4);
						});
					}), h("post", a, y, function(n) {
						n.setAttribute("aUV", 2, i.STATIC_DRAW, 0, b), n.setUniform("1i", "tex", g), i.bindFramebuffer(i.FRAMEBUFFER, u), i.disable(i.BLEND), i.colorMask(p === 0, p === 1, p === 2, p === 3), i.viewport(d, f, e, t), i.scissor(d, f, e, t), i.drawArrays(i.TRIANGLES, 0, 3);
					});
				}), i.isContextLost()) throw S(), Error("webgl context lost");
			});
		}
		function k(e) {
			var t = !e || e === x ? C : e.canvas || e, n = w.get(t);
			if (n === void 0) {
				S = !0;
				var r = null;
				try {
					var i = [
						97,
						106,
						97,
						61,
						99,
						137,
						118,
						80,
						80,
						118,
						137,
						99,
						61,
						97,
						106,
						97
					], a = E(4, 4, "M8,8L16,8L24,24L16,24Z", [
						0,
						0,
						32,
						32
					], 24, 1, e);
					n = a && i.length === a.length && a.every(function(e, t) {
						return e === i[t];
					}), n || (r = "bad trial run results", console.info(i, a));
				} catch (e) {
					n = !1, r = e.message;
				}
				r && console.warn("WebGL SDF generation not supported:", r), S = !1, w.set(t, n);
			}
			return n;
		}
		var A = /*#__PURE__*/ Object.freeze({
			__proto__: null,
			generate: E,
			generateIntoCanvas: D,
			generateIntoFramebuffer: O,
			isSupported: k
		});
		function j(e, t, n, r, i, a) {
			i === void 0 && (i = Math.max(r[2] - r[0], r[3] - r[1]) / 2), a === void 0 && (a = 1);
			try {
				return E.apply(A, arguments);
			} catch (e) {
				return console.info("WebGL SDF generation failed, falling back to JS", e), f.apply(g, arguments);
			}
		}
		function ee(e, t, n, r, i, a, o, s, c, l) {
			i === void 0 && (i = Math.max(r[2] - r[0], r[3] - r[1]) / 2), a === void 0 && (a = 1), s === void 0 && (s = 0), c === void 0 && (c = 0), l === void 0 && (l = 0);
			try {
				return D.apply(A, arguments);
			} catch (e) {
				return console.info("WebGL SDF generation failed, falling back to JS", e), p.apply(g, arguments);
			}
		}
		return e.forEachPathCommand = r, e.generate = j, e.generateIntoCanvas = ee, e.javascript = g, e.pathToLineSegments = i, e.webgl = A, e.webglUtils = d, Object.defineProperty(e, "__esModule", { value: !0 }), e;
	}({});
}
//#endregion
//#region node_modules/bidi-js/dist/bidi.mjs
function Ye() {
	return function(e) {
		var t = {
			R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
			EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
			ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
			ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
			AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
			CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
			B: "a,3,f+2,2v,690",
			S: "9,2,k",
			WS: "c,k,4f4,1vk+a,u,1j,335",
			ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
			BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
			NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
			AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
			LRO: "6ct",
			RLO: "6cu",
			LRE: "6cq",
			RLE: "6cr",
			PDF: "6cs",
			LRI: "6ee",
			RLI: "6ef",
			FSI: "6eg",
			PDI: "6eh"
		}, n = {}, r = {};
		n.L = 1, r[1] = "L", Object.keys(t).forEach(function(e, t) {
			n[e] = 1 << t + 1, r[n[e]] = e;
		}), Object.freeze(n);
		var i = n.LRI | n.RLI | n.FSI, a = n.L | n.R | n.AL, o = n.B | n.S | n.WS | n.ON | n.FSI | n.LRI | n.RLI | n.PDI, s = n.BN | n.RLE | n.LRE | n.RLO | n.LRO | n.PDF, c = n.S | n.WS | n.B | i | n.PDI | s, l = null;
		function u() {
			if (!l) {
				l = /* @__PURE__ */ new Map();
				var e = function(e) {
					if (t.hasOwnProperty(e)) {
						var r = 0;
						t[e].split(",").forEach(function(t) {
							var i = t.split("+"), a = i[0], o = i[1];
							a = parseInt(a, 36), o = o ? parseInt(o, 36) : 0, l.set(r += a, n[e]);
							for (var s = 0; s < o; s++) l.set(++r, n[e]);
						});
					}
				};
				for (var r in t) e(r);
			}
		}
		function d(e) {
			return u(), l.get(e.codePointAt(0)) || n.L;
		}
		function f(e) {
			return r[d(e)];
		}
		var p = {
			pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
			canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
		};
		function m(e, t) {
			var n = 0, r = /* @__PURE__ */ new Map(), i = t && /* @__PURE__ */ new Map(), a;
			return e.split(",").forEach(function e(o) {
				if (o.indexOf("+") !== -1) for (var s = +o; s--;) e(a);
				else {
					a = o;
					var c = o.split(">"), l = c[0], u = c[1];
					l = String.fromCodePoint(n += parseInt(l, 36)), u = String.fromCodePoint(n += parseInt(u, 36)), r.set(l, u), t && i.set(u, l);
				}
			}), {
				map: r,
				reverseMap: i
			};
		}
		var h, g, _;
		function v() {
			if (!h) {
				var e = m(p.pairs, !0), t = e.map, n = e.reverseMap;
				h = t, g = n, _ = m(p.canonical, !1).map;
			}
		}
		function y(e) {
			return v(), h.get(e) || null;
		}
		function b(e) {
			return v(), g.get(e) || null;
		}
		function x(e) {
			return v(), _.get(e) || null;
		}
		var S = n.L, C = n.R, w = n.EN, T = n.ES, E = n.ET, D = n.AN, O = n.CS, k = n.B, A = n.S, j = n.ON, ee = n.BN, te = n.NSM, ne = n.AL, re = n.LRO, M = n.RLO, N = n.LRE, ie = n.RLE, P = n.PDF, F = n.LRI, ae = n.RLI, I = n.FSI, L = n.PDI;
		function oe(e, t) {
			for (var n = 125, r = new Uint32Array(e.length), l = 0; l < e.length; l++) r[l] = d(e[l]);
			var u = /* @__PURE__ */ new Map();
			function f(e, t) {
				var n = r[e];
				r[e] = t, u.set(n, u.get(n) - 1), n & o && u.set(o, u.get(o) - 1), u.set(t, (u.get(t) || 0) + 1), t & o && u.set(o, (u.get(o) || 0) + 1);
			}
			for (var p = new Uint8Array(e.length), m = /* @__PURE__ */ new Map(), h = [], g = null, _ = 0; _ < e.length; _++) g || h.push(g = {
				start: _,
				end: e.length - 1,
				level: t === "rtl" ? 1 : t === "ltr" ? 0 : Kt(_, !1)
			}), r[_] & k && (g.end = _, g = null);
			for (var v = ie | N | M | re | i | L | P | k, oe = function(e) {
				return e + (e & 1 ? 1 : 2);
			}, R = function(e) {
				return e + (e & 1 ? 2 : 1);
			}, z = 0; z < h.length; z++) {
				g = h[z];
				var B = [{
					_level: g.level,
					_override: 0,
					_isolate: 0
				}], V = void 0, H = 0, se = 0, ce = 0;
				u.clear();
				for (var U = g.start; U <= g.end; U++) {
					var W = r[U];
					if (V = B[B.length - 1], u.set(W, (u.get(W) || 0) + 1), W & o && u.set(o, (u.get(o) || 0) + 1), W & v) if (W & (ie | N)) {
						p[U] = V._level;
						var le = (W === ie ? R : oe)(V._level);
						le <= n && !H && !se ? B.push({
							_level: le,
							_override: 0,
							_isolate: 0
						}) : H || se++;
					} else if (W & (M | re)) {
						p[U] = V._level;
						var ue = (W === M ? R : oe)(V._level);
						ue <= n && !H && !se ? B.push({
							_level: ue,
							_override: W & M ? C : S,
							_isolate: 0
						}) : H || se++;
					} else if (W & i) {
						W & I && (W = Kt(U + 1, !0) === 1 ? ae : F), p[U] = V._level, V._override && f(U, V._override);
						var de = (W === ae ? R : oe)(V._level);
						de <= n && H === 0 && se === 0 ? (ce++, B.push({
							_level: de,
							_override: 0,
							_isolate: 1,
							_isolInitIndex: U
						})) : H++;
					} else if (W & L) {
						if (H > 0) H--;
						else if (ce > 0) {
							for (se = 0; !B[B.length - 1]._isolate;) B.pop();
							var fe = B[B.length - 1]._isolInitIndex;
							fe != null && (m.set(fe, U), m.set(U, fe)), B.pop(), ce--;
						}
						V = B[B.length - 1], p[U] = V._level, V._override && f(U, V._override);
					} else W & P ? (H === 0 && (se > 0 ? se-- : !V._isolate && B.length > 1 && (B.pop(), V = B[B.length - 1])), p[U] = V._level) : W & k && (p[U] = g.level);
					else p[U] = V._level, V._override && W !== ee && f(U, V._override);
				}
				for (var pe = [], me = null, he = g.start; he <= g.end; he++) {
					var ge = r[he];
					if (!(ge & s)) {
						var _e = p[he], ve = ge & i, ye = ge === L;
						me && _e === me._level ? (me._end = he, me._endsWithIsolInit = ve) : pe.push(me = {
							_start: he,
							_end: he,
							_level: _e,
							_startsWithPDI: ye,
							_endsWithIsolInit: ve
						});
					}
				}
				for (var be = [], xe = 0; xe < pe.length; xe++) {
					var Se = pe[xe];
					if (!Se._startsWithPDI || Se._startsWithPDI && !m.has(Se._start)) {
						for (var G = [me = Se], Ce = void 0; me && me._endsWithIsolInit && (Ce = m.get(me._end)) != null;) for (var we = xe + 1; we < pe.length; we++) if (pe[we]._start === Ce) {
							G.push(me = pe[we]);
							break;
						}
						for (var Te = [], Ee = 0; Ee < G.length; Ee++) for (var De = G[Ee], Oe = De._start; Oe <= De._end; Oe++) Te.push(Oe);
						for (var ke = p[Te[0]], Ae = g.level, je = Te[0] - 1; je >= 0; je--) if (!(r[je] & s)) {
							Ae = p[je];
							break;
						}
						var Me = Te[Te.length - 1], Ne = p[Me], K = g.level;
						if (!(r[Me] & i)) {
							for (var Pe = Me + 1; Pe <= g.end; Pe++) if (!(r[Pe] & s)) {
								K = p[Pe];
								break;
							}
						}
						be.push({
							_seqIndices: Te,
							_sosType: Math.max(Ae, ke) % 2 ? C : S,
							_eosType: Math.max(K, Ne) % 2 ? C : S
						});
					}
				}
				for (var Fe = 0; Fe < be.length; Fe++) {
					var Ie = be[Fe], q = Ie._seqIndices, Le = Ie._sosType, Re = Ie._eosType, ze = p[q[0]] & 1 ? C : S;
					if (u.get(te)) for (var Be = 0; Be < q.length; Be++) {
						var Ve = q[Be];
						if (r[Ve] & te) {
							for (var He = Le, Ue = Be - 1; Ue >= 0; Ue--) if (!(r[q[Ue]] & s)) {
								He = r[q[Ue]];
								break;
							}
							f(Ve, He & (i | L) ? j : He);
						}
					}
					if (u.get(w)) for (var We = 0; We < q.length; We++) {
						var Ge = q[We];
						if (r[Ge] & w) for (var Ke = We - 1; Ke >= -1; Ke--) {
							var qe = Ke === -1 ? Le : r[q[Ke]];
							if (qe & a) {
								qe === ne && f(Ge, D);
								break;
							}
						}
					}
					if (u.get(ne)) for (var Je = 0; Je < q.length; Je++) {
						var Ye = q[Je];
						r[Ye] & ne && f(Ye, C);
					}
					if (u.get(T) || u.get(O)) for (var Xe = 1; Xe < q.length - 1; Xe++) {
						var Ze = q[Xe];
						if (r[Ze] & (T | O)) {
							for (var J = 0, Qe = 0, $e = Xe - 1; $e >= 0 && (J = r[q[$e]], J & s); $e--);
							for (var et = Xe + 1; et < q.length && (Qe = r[q[et]], Qe & s); et++);
							J === Qe && (r[Ze] === T ? J === w : J & (w | D)) && f(Ze, J);
						}
					}
					if (u.get(w)) {
						for (var tt = 0; tt < q.length; tt++) if (r[q[tt]] & w) {
							for (var nt = tt - 1; nt >= 0 && r[q[nt]] & (E | s); nt--) f(q[nt], w);
							for (tt++; tt < q.length && r[q[tt]] & (E | s | w); tt++) r[q[tt]] !== w && f(q[tt], w);
						}
					}
					if (u.get(E) || u.get(T) || u.get(O)) for (var rt = 0; rt < q.length; rt++) {
						var it = q[rt];
						if (r[it] & (E | T | O)) {
							f(it, j);
							for (var at = rt - 1; at >= 0 && r[q[at]] & s; at--) f(q[at], j);
							for (var ot = rt + 1; ot < q.length && r[q[ot]] & s; ot++) f(q[ot], j);
						}
					}
					if (u.get(w)) for (var st = 0, ct = Le; st < q.length; st++) {
						var lt = q[st], ut = r[lt];
						ut & w ? ct === S && f(lt, S) : ut & a && (ct = ut);
					}
					if (u.get(o)) {
						for (var dt = C | w | D, ft = dt | S, pt = [], mt = [], ht = 0; ht < q.length; ht++) if (r[q[ht]] & o) {
							var gt = e[q[ht]], _t = void 0;
							if (y(gt) !== null) if (mt.length < 63) mt.push({
								char: gt,
								seqIndex: ht
							});
							else break;
							else if ((_t = b(gt)) !== null) for (var vt = mt.length - 1; vt >= 0; vt--) {
								var yt = mt[vt].char;
								if (yt === _t || yt === b(x(gt)) || y(x(yt)) === gt) {
									pt.push([mt[vt].seqIndex, ht]), mt.length = vt;
									break;
								}
							}
						}
						pt.sort(function(e, t) {
							return e[0] - t[0];
						});
						for (var bt = 0; bt < pt.length; bt++) {
							for (var xt = pt[bt], St = xt[0], Ct = xt[1], wt = !1, Tt = 0, Et = St + 1; Et < Ct; Et++) {
								var Dt = q[Et];
								if (r[Dt] & ft) {
									wt = !0;
									var Ot = r[Dt] & dt ? C : S;
									if (Ot === ze) {
										Tt = Ot;
										break;
									}
								}
							}
							if (wt && !Tt) {
								Tt = Le;
								for (var kt = St - 1; kt >= 0; kt--) {
									var At = q[kt];
									if (r[At] & ft) {
										var jt = r[At] & dt ? C : S;
										Tt = jt === ze ? ze : jt;
										break;
									}
								}
							}
							if (Tt) {
								if (r[q[St]] = r[q[Ct]] = Tt, Tt !== ze) {
									for (var Mt = St + 1; Mt < q.length; Mt++) if (!(r[q[Mt]] & s)) {
										d(e[q[Mt]]) & te && (r[q[Mt]] = Tt);
										break;
									}
								}
								if (Tt !== ze) {
									for (var Nt = Ct + 1; Nt < q.length; Nt++) if (!(r[q[Nt]] & s)) {
										d(e[q[Nt]]) & te && (r[q[Nt]] = Tt);
										break;
									}
								}
							}
						}
						for (var Pt = 0; Pt < q.length; Pt++) if (r[q[Pt]] & o) {
							for (var Ft = Pt, It = Pt, Lt = Le, Rt = Pt - 1; Rt >= 0; Rt--) if (r[q[Rt]] & s) Ft = Rt;
							else {
								Lt = r[q[Rt]] & dt ? C : S;
								break;
							}
							for (var zt = Re, Bt = Pt + 1; Bt < q.length; Bt++) if (r[q[Bt]] & (o | s)) It = Bt;
							else {
								zt = r[q[Bt]] & dt ? C : S;
								break;
							}
							for (var Vt = Ft; Vt <= It; Vt++) r[q[Vt]] = Lt === zt ? Lt : ze;
							Pt = It;
						}
					}
				}
				for (var Ht = g.start; Ht <= g.end; Ht++) {
					var Ut = p[Ht], Wt = r[Ht];
					if (Ut & 1 ? Wt & (S | w | D) && p[Ht]++ : Wt & C ? p[Ht]++ : Wt & (D | w) && (p[Ht] += 2), Wt & s && (p[Ht] = Ht === 0 ? g.level : p[Ht - 1]), Ht === g.end || d(e[Ht]) & (A | k)) for (var Gt = Ht; Gt >= 0 && d(e[Gt]) & c; Gt--) p[Gt] = g.level;
				}
			}
			return {
				levels: p,
				paragraphs: h
			};
			function Kt(t, n) {
				for (var a = t; a < e.length; a++) {
					var o = r[a];
					if (o & (C | ne)) return 1;
					if (o & (k | S) || n && o === L) return 0;
					if (o & i) {
						var s = qt(a);
						a = s === -1 ? e.length : s;
					}
				}
				return 0;
			}
			function qt(t) {
				for (var n = 1, a = t + 1; a < e.length; a++) {
					var o = r[a];
					if (o & k) break;
					if (o & L) {
						if (--n === 0) return a;
					} else o & i && n++;
				}
				return -1;
			}
		}
		var R = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", z;
		function B() {
			if (!z) {
				var e = m(R, !0), t = e.map;
				e.reverseMap.forEach(function(e, n) {
					t.set(n, e);
				}), z = t;
			}
		}
		function V(e) {
			return B(), z.get(e) || null;
		}
		function H(e, t, n, r) {
			var i = e.length;
			n = Math.max(0, n == null ? 0 : +n), r = Math.min(i - 1, r == null ? i - 1 : +r);
			for (var a = /* @__PURE__ */ new Map(), o = n; o <= r; o++) if (t[o] & 1) {
				var s = V(e[o]);
				s !== null && a.set(o, s);
			}
			return a;
		}
		function se(e, t, n, r) {
			var i = e.length;
			n = Math.max(0, n == null ? 0 : +n), r = Math.min(i - 1, r == null ? i - 1 : +r);
			var a = [];
			return t.paragraphs.forEach(function(i) {
				var o = Math.max(n, i.start), s = Math.min(r, i.end);
				if (o < s) {
					for (var l = t.levels.slice(o, s + 1), u = s; u >= o && d(e[u]) & c; u--) l[u] = i.level;
					for (var f = i.level, p = Infinity, m = 0; m < l.length; m++) {
						var h = l[m];
						h > f && (f = h), h < p && (p = h | 1);
					}
					for (var g = f; g >= p; g--) for (var _ = 0; _ < l.length; _++) if (l[_] >= g) {
						for (var v = _; _ + 1 < l.length && l[_ + 1] >= g;) _++;
						_ > v && a.push([v + o, _ + o]);
					}
				}
			}), a;
		}
		function ce(e, t, n, r) {
			var i = U(e, t, n, r), a = [].concat(e);
			return i.forEach(function(n, r) {
				a[r] = (t.levels[n] & 1 ? V(e[n]) : null) || e[n];
			}), a.join("");
		}
		function U(e, t, n, r) {
			for (var i = se(e, t, n, r), a = [], o = 0; o < e.length; o++) a[o] = o;
			return i.forEach(function(e) {
				for (var t = e[0], n = e[1], r = a.slice(t, n + 1), i = r.length; i--;) a[n - i] = r[i];
			}), a;
		}
		return e.closingToOpeningBracket = b, e.getBidiCharType = d, e.getBidiCharTypeName = f, e.getCanonicalBracket = x, e.getEmbeddingLevels = oe, e.getMirroredCharacter = V, e.getMirroredCharactersMap = H, e.getReorderSegments = se, e.getReorderedIndices = U, e.getReorderedString = ce, e.openingToClosingBracket = y, Object.defineProperty(e, "__esModule", { value: !0 }), e;
	}({});
}
//#endregion
//#region node_modules/troika-three-utils/dist/troika-three-utils.esm.js
var Xe = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function Ze(e) {
	let t = /^[ \t]*#include +<([\w\d./]+)>/gm;
	function n(e, t) {
		let n = ce[t];
		return n ? Ze(n) : e;
	}
	return e.replace(t, n);
}
var J = [];
for (let e = 0; e < 256; e++) J[e] = (e < 16 ? "0" : "") + e.toString(16);
function Qe() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (J[e & 255] + J[e >> 8 & 255] + J[e >> 16 & 255] + J[e >> 24 & 255] + "-" + J[t & 255] + J[t >> 8 & 255] + "-" + J[t >> 16 & 15 | 64] + J[t >> 24 & 255] + "-" + J[n & 63 | 128] + J[n >> 8 & 255] + "-" + J[n >> 16 & 255] + J[n >> 24 & 255] + J[r & 255] + J[r >> 8 & 255] + J[r >> 16 & 255] + J[r >> 24 & 255]).toUpperCase();
}
var $e = Object.assign || function() {
	let e = arguments[0];
	for (let t = 1, n = arguments.length; t < n; t++) {
		let n = arguments[t];
		if (n) for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
	}
	return e;
}, et = Date.now(), tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new Map(), rt = 1e10;
function it(e, t) {
	let n = ut(t), r = tt.get(e);
	if (r || tt.set(e, r = Object.create(null)), r[n]) return new r[n]();
	let i = `_onBeforeCompile${n}`, a = function(r, a) {
		e.onBeforeCompile.call(this, r, a);
		let o = this.customProgramCacheKey() + "|" + r.vertexShader + "|" + r.fragmentShader, s = nt[o];
		s ||= nt[o] = at(this, r, t, n), r.vertexShader = s.vertexShader, r.fragmentShader = s.fragmentShader, $e(r.uniforms, this.uniforms), t.timeUniform && (r.uniforms[t.timeUniform] = { get value() {
			return Date.now() - et;
		} }), this[i] && this[i](r);
	}, o = function() {
		return s(t.chained ? e : e.clone());
	}, s = function(r) {
		let i = Object.create(r, c);
		return Object.defineProperty(i, "baseMaterial", { value: e }), Object.defineProperty(i, "id", { value: rt++ }), i.uuid = Qe(), i.uniforms = $e({}, r.uniforms, t.uniforms), i.defines = $e({}, r.defines, t.defines), i.defines[`TROIKA_DERIVED_MATERIAL_${n}`] = "", i.extensions = $e({}, r.extensions, t.extensions), i._listeners = void 0, i;
	}, c = {
		constructor: { value: o },
		isDerivedMaterial: { value: !0 },
		type: {
			get: () => e.type,
			set: (t) => {
				e.type = t;
			}
		},
		isDerivedFrom: {
			writable: !0,
			configurable: !0,
			value: function(e) {
				let t = this.baseMaterial;
				return e === t || t.isDerivedMaterial && t.isDerivedFrom(e) || !1;
			}
		},
		customProgramCacheKey: {
			writable: !0,
			configurable: !0,
			value: function() {
				return e.customProgramCacheKey() + "|" + n;
			}
		},
		onBeforeCompile: {
			get() {
				return a;
			},
			set(e) {
				this[i] = e;
			}
		},
		copy: {
			writable: !0,
			configurable: !0,
			value: function(t) {
				return e.copy.call(this, t), !e.isShaderMaterial && !e.isDerivedMaterial && ($e(this.extensions, t.extensions), $e(this.defines, t.defines), $e(this.uniforms, S.clone(t.uniforms))), this;
			}
		},
		clone: {
			writable: !0,
			configurable: !0,
			value: function() {
				let t = new e.constructor();
				return s(t).copy(this);
			}
		},
		getDepthMaterial: {
			writable: !0,
			configurable: !0,
			value: function() {
				let n = this._depthMaterial;
				return n || (n = this._depthMaterial = it(e.isDerivedMaterial ? e.getDepthMaterial() : new M({ depthPacking: C }), t), n.defines.IS_DEPTH_MATERIAL = "", n.uniforms = this.uniforms), n;
			}
		},
		getDistanceMaterial: {
			writable: !0,
			configurable: !0,
			value: function() {
				let n = this._distanceMaterial;
				return n || (n = this._distanceMaterial = it(e.isDerivedMaterial ? e.getDistanceMaterial() : new ae(), t), n.defines.IS_DISTANCE_MATERIAL = "", n.uniforms = this.uniforms), n;
			}
		},
		dispose: {
			writable: !0,
			configurable: !0,
			value() {
				let { _depthMaterial: t, _distanceMaterial: n } = this;
				t && t.dispose(), n && n.dispose(), e.dispose.call(this);
			}
		}
	};
	return r[n] = o, new o();
}
function at(e, { vertexShader: t, fragmentShader: n }, r, i) {
	let { vertexDefs: a, vertexMainIntro: o, vertexMainOutro: s, vertexTransform: c, fragmentDefs: l, fragmentMainIntro: u, fragmentMainOutro: d, fragmentColorTransform: f, customRewriter: p, timeUniform: m } = r;
	if (a ||= "", o ||= "", s ||= "", l ||= "", u ||= "", d ||= "", (c || p) && (t = Ze(t)), (f || p) && (n = n.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"), n = Ze(n)), p) {
		let e = p({
			vertexShader: t,
			fragmentShader: n
		});
		t = e.vertexShader, n = e.fragmentShader;
	}
	if (f) {
		let e = [];
		n = n.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (t) => (e.push(t), "")), d = `${f}\n${e.join("\n")}\n${d}`;
	}
	if (m) {
		let e = `\nuniform float ${m};\n`;
		a = e + a, l = e + l;
	}
	return c && (t = `vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${t}
`, a = `${a}
void troikaVertexTransform${i}() {
  vec3 position = troika_position_${i};
  vec3 normal = troika_normal_${i};
  vec2 uv = troika_uv_${i};
  ${c}
  troika_position_${i} = position;
  troika_normal_${i} = normal;
  troika_uv_${i} = uv;
}
`, o = `
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}();
${o}
`, t = t.replace(/\b(position|normal|uv)\b/g, (e, t, n, r) => /\battribute\s+vec[23]\s+$/.test(r.substr(0, n)) ? t : `troika_${t}_${i}`), e.map && e.map.channel > 0 || (t = t.replace(/\bMAP_UV\b/g, `troika_uv_${i}`))), t = ot(t, i, a, o, s), n = ot(n, i, l, u, d), {
		vertexShader: t,
		fragmentShader: n
	};
}
function ot(e, t, n, r, i) {
	return (r || i || n) && (e = e.replace(Xe, `
${n}
void troikaOrigMain${t}() {`), e += `
void main() {
  ${r}
  troikaOrigMain${t}();
  ${i}
}`), e;
}
function st(e, t) {
	return e === "uniforms" ? void 0 : typeof t == "function" ? t.toString() : t;
}
var ct = 0, lt = /* @__PURE__ */ new Map();
function ut(e) {
	let t = JSON.stringify(e, st), n = lt.get(t);
	return n ?? lt.set(t, n = ++ct), n;
}
//#endregion
//#region node_modules/troika-three-text/dist/troika-three-text.esm.js
function dt() {
	return typeof window > "u" && (self.window = self), function(e) {
		var t = {
			parse: function(e) {
				var n = t._bin, r = new Uint8Array(e);
				if (n.readASCII(r, 0, 4) == "ttcf") {
					var i = 4;
					n.readUshort(r, i), i += 2, n.readUshort(r, i), i += 2;
					var a = n.readUint(r, i);
					i += 4;
					for (var o = [], s = 0; s < a; s++) {
						var c = n.readUint(r, i);
						i += 4, o.push(t._readFont(r, c));
					}
					return o;
				}
				return [t._readFont(r, 0)];
			},
			_readFont: function(e, n) {
				var r = t._bin, i = n;
				r.readFixed(e, n), n += 4;
				var a = r.readUshort(e, n);
				n += 2, r.readUshort(e, n), n += 2, r.readUshort(e, n), n += 2, r.readUshort(e, n), n += 2;
				for (var o = [
					"cmap",
					"head",
					"hhea",
					"maxp",
					"hmtx",
					"name",
					"OS/2",
					"post",
					"loca",
					"glyf",
					"kern",
					"CFF ",
					"GDEF",
					"GPOS",
					"GSUB",
					"SVG "
				], s = {
					_data: e,
					_offset: i
				}, c = {}, l = 0; l < a; l++) {
					var u = r.readASCII(e, n, 4);
					n += 4, r.readUint(e, n), n += 4;
					var d = r.readUint(e, n);
					n += 4;
					var f = r.readUint(e, n);
					n += 4, c[u] = {
						offset: d,
						length: f
					};
				}
				for (l = 0; l < o.length; l++) {
					var p = o[l];
					c[p] && (s[p.trim()] = t[p.trim()].parse(e, c[p].offset, c[p].length, s));
				}
				return s;
			},
			_tabOffset: function(e, n, r) {
				for (var i = t._bin, a = i.readUshort(e, r + 4), o = r + 12, s = 0; s < a; s++) {
					var c = i.readASCII(e, o, 4);
					o += 4, i.readUint(e, o), o += 4;
					var l = i.readUint(e, o);
					if (o += 4, i.readUint(e, o), o += 4, c == n) return l;
				}
				return 0;
			}
		};
		t._bin = {
			readFixed: function(e, t) {
				return (e[t] << 8 | e[t + 1]) + (e[t + 2] << 8 | e[t + 3]) / 65540;
			},
			readF2dot14: function(e, n) {
				return t._bin.readShort(e, n) / 16384;
			},
			readInt: function(e, n) {
				return t._bin._view(e).getInt32(n);
			},
			readInt8: function(e, n) {
				return t._bin._view(e).getInt8(n);
			},
			readShort: function(e, n) {
				return t._bin._view(e).getInt16(n);
			},
			readUshort: function(e, n) {
				return t._bin._view(e).getUint16(n);
			},
			readUshorts: function(e, n, r) {
				for (var i = [], a = 0; a < r; a++) i.push(t._bin.readUshort(e, n + 2 * a));
				return i;
			},
			readUint: function(e, n) {
				return t._bin._view(e).getUint32(n);
			},
			readUint64: function(e, n) {
				return 4294967296 * t._bin.readUint(e, n) + t._bin.readUint(e, n + 4);
			},
			readASCII: function(e, t, n) {
				for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(e[t + i]);
				return r;
			},
			readUnicode: function(e, t, n) {
				for (var r = "", i = 0; i < n; i++) {
					var a = e[t++] << 8 | e[t++];
					r += String.fromCharCode(a);
				}
				return r;
			},
			_tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder() : null,
			readUTF8: function(e, n, r) {
				var i = t._bin._tdec;
				return i && n == 0 && r == e.length ? i.decode(e) : t._bin.readASCII(e, n, r);
			},
			readBytes: function(e, t, n) {
				for (var r = [], i = 0; i < n; i++) r.push(e[t + i]);
				return r;
			},
			readASCIIArray: function(e, t, n) {
				for (var r = [], i = 0; i < n; i++) r.push(String.fromCharCode(e[t + i]));
				return r;
			},
			_view: function(e) {
				return e._dataView ||= e.buffer ? new DataView(e.buffer, e.byteOffset, e.byteLength) : new DataView(new Uint8Array(e).buffer);
			}
		}, t._lctf = {}, t._lctf.parse = function(e, n, r, i, a) {
			var o = t._bin, s = {}, c = n;
			o.readFixed(e, n), n += 4;
			var l = o.readUshort(e, n);
			n += 2;
			var u = o.readUshort(e, n);
			n += 2;
			var d = o.readUshort(e, n);
			return n += 2, s.scriptList = t._lctf.readScriptList(e, c + l), s.featureList = t._lctf.readFeatureList(e, c + u), s.lookupList = t._lctf.readLookupList(e, c + d, a), s;
		}, t._lctf.readLookupList = function(e, n, r) {
			var i = t._bin, a = n, o = [], s = i.readUshort(e, n);
			n += 2;
			for (var c = 0; c < s; c++) {
				var l = i.readUshort(e, n);
				n += 2;
				var u = t._lctf.readLookupTable(e, a + l, r);
				o.push(u);
			}
			return o;
		}, t._lctf.readLookupTable = function(e, n, r) {
			var i = t._bin, a = n, o = { tabs: [] };
			o.ltype = i.readUshort(e, n), n += 2, o.flag = i.readUshort(e, n), n += 2;
			var s = i.readUshort(e, n);
			n += 2;
			for (var c = o.ltype, l = 0; l < s; l++) {
				var u = i.readUshort(e, n);
				n += 2;
				var d = r(e, c, a + u, o);
				o.tabs.push(d);
			}
			return o;
		}, t._lctf.numOfOnes = function(e) {
			for (var t = 0, n = 0; n < 32; n++) e >>> n & 1 && t++;
			return t;
		}, t._lctf.readClassDef = function(e, n) {
			var r = t._bin, i = [], a = r.readUshort(e, n);
			if (n += 2, a == 1) {
				var o = r.readUshort(e, n);
				n += 2;
				var s = r.readUshort(e, n);
				n += 2;
				for (var c = 0; c < s; c++) i.push(o + c), i.push(o + c), i.push(r.readUshort(e, n)), n += 2;
			}
			if (a == 2) {
				var l = r.readUshort(e, n);
				for (n += 2, c = 0; c < l; c++) i.push(r.readUshort(e, n)), n += 2, i.push(r.readUshort(e, n)), n += 2, i.push(r.readUshort(e, n)), n += 2;
			}
			return i;
		}, t._lctf.getInterval = function(e, t) {
			for (var n = 0; n < e.length; n += 3) {
				var r = e[n], i = e[n + 1];
				if (e[n + 2], r <= t && t <= i) return n;
			}
			return -1;
		}, t._lctf.readCoverage = function(e, n) {
			var r = t._bin, i = {};
			i.fmt = r.readUshort(e, n), n += 2;
			var a = r.readUshort(e, n);
			return n += 2, i.fmt == 1 && (i.tab = r.readUshorts(e, n, a)), i.fmt == 2 && (i.tab = r.readUshorts(e, n, 3 * a)), i;
		}, t._lctf.coverageIndex = function(e, n) {
			var r = e.tab;
			if (e.fmt == 1) return r.indexOf(n);
			if (e.fmt == 2) {
				var i = t._lctf.getInterval(r, n);
				if (i != -1) return r[i + 2] + (n - r[i]);
			}
			return -1;
		}, t._lctf.readFeatureList = function(e, n) {
			var r = t._bin, i = n, a = [], o = r.readUshort(e, n);
			n += 2;
			for (var s = 0; s < o; s++) {
				var c = r.readASCII(e, n, 4);
				n += 4;
				var l = r.readUshort(e, n);
				n += 2;
				var u = t._lctf.readFeatureTable(e, i + l);
				u.tag = c.trim(), a.push(u);
			}
			return a;
		}, t._lctf.readFeatureTable = function(e, n) {
			var r = t._bin, i = n, a = {}, o = r.readUshort(e, n);
			n += 2, o > 0 && (a.featureParams = i + o);
			var s = r.readUshort(e, n);
			n += 2, a.tab = [];
			for (var c = 0; c < s; c++) a.tab.push(r.readUshort(e, n + 2 * c));
			return a;
		}, t._lctf.readScriptList = function(e, n) {
			var r = t._bin, i = n, a = {}, o = r.readUshort(e, n);
			n += 2;
			for (var s = 0; s < o; s++) {
				var c = r.readASCII(e, n, 4);
				n += 4;
				var l = r.readUshort(e, n);
				n += 2, a[c.trim()] = t._lctf.readScriptTable(e, i + l);
			}
			return a;
		}, t._lctf.readScriptTable = function(e, n) {
			var r = t._bin, i = n, a = {}, o = r.readUshort(e, n);
			n += 2, o > 0 && (a.default = t._lctf.readLangSysTable(e, i + o));
			var s = r.readUshort(e, n);
			n += 2;
			for (var c = 0; c < s; c++) {
				var l = r.readASCII(e, n, 4);
				n += 4;
				var u = r.readUshort(e, n);
				n += 2, a[l.trim()] = t._lctf.readLangSysTable(e, i + u);
			}
			return a;
		}, t._lctf.readLangSysTable = function(e, n) {
			var r = t._bin, i = {};
			r.readUshort(e, n), n += 2, i.reqFeature = r.readUshort(e, n), n += 2;
			var a = r.readUshort(e, n);
			return n += 2, i.features = r.readUshorts(e, n, a), i;
		}, t.CFF = {}, t.CFF.parse = function(e, n, r) {
			var i = t._bin;
			(e = new Uint8Array(e.buffer, n, r))[n = 0], e[++n], e[++n], e[++n], n++;
			var a = [];
			n = t.CFF.readIndex(e, n, a);
			for (var o = [], s = 0; s < a.length - 1; s++) o.push(i.readASCII(e, n + a[s], a[s + 1] - a[s]));
			n += a[a.length - 1];
			var c = [];
			n = t.CFF.readIndex(e, n, c);
			var l = [];
			for (s = 0; s < c.length - 1; s++) l.push(t.CFF.readDict(e, n + c[s], n + c[s + 1]));
			n += c[c.length - 1];
			var u = l[0], d = [];
			n = t.CFF.readIndex(e, n, d);
			var f = [];
			for (s = 0; s < d.length - 1; s++) f.push(i.readASCII(e, n + d[s], d[s + 1] - d[s]));
			if (n += d[d.length - 1], t.CFF.readSubrs(e, n, u), u.CharStrings) {
				n = u.CharStrings, d = [], n = t.CFF.readIndex(e, n, d);
				var p = [];
				for (s = 0; s < d.length - 1; s++) p.push(i.readBytes(e, n + d[s], d[s + 1] - d[s]));
				u.CharStrings = p;
			}
			if (u.ROS) {
				n = u.FDArray;
				var m = [];
				for (n = t.CFF.readIndex(e, n, m), u.FDArray = [], s = 0; s < m.length - 1; s++) {
					var h = t.CFF.readDict(e, n + m[s], n + m[s + 1]);
					t.CFF._readFDict(e, h, f), u.FDArray.push(h);
				}
				n += m[m.length - 1], n = u.FDSelect, u.FDSelect = [];
				var g = e[n];
				if (n++, g != 3) throw g;
				var _ = i.readUshort(e, n);
				for (n += 2, s = 0; s < _ + 1; s++) u.FDSelect.push(i.readUshort(e, n), e[n + 2]), n += 3;
			}
			return u.Encoding &&= t.CFF.readEncoding(e, u.Encoding, u.CharStrings.length), u.charset &&= t.CFF.readCharset(e, u.charset, u.CharStrings.length), t.CFF._readFDict(e, u, f), u;
		}, t.CFF._readFDict = function(e, n, r) {
			var i;
			for (var a in n.Private && (i = n.Private[1], n.Private = t.CFF.readDict(e, i, i + n.Private[0]), n.Private.Subrs && t.CFF.readSubrs(e, i + n.Private.Subrs, n.Private)), n) [
				"FamilyName",
				"FontName",
				"FullName",
				"Notice",
				"version",
				"Copyright"
			].indexOf(a) != -1 && (n[a] = r[n[a] - 426 + 35]);
		}, t.CFF.readSubrs = function(e, n, r) {
			var i = t._bin, a = [];
			n = t.CFF.readIndex(e, n, a);
			var o, s = a.length;
			o = s < 1240 ? 107 : s < 33900 ? 1131 : 32768, r.Bias = o, r.Subrs = [];
			for (var c = 0; c < a.length - 1; c++) r.Subrs.push(i.readBytes(e, n + a[c], a[c + 1] - a[c]));
		}, t.CFF.tableSE = [
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
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59,
			60,
			61,
			62,
			63,
			64,
			65,
			66,
			67,
			68,
			69,
			70,
			71,
			72,
			73,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			82,
			83,
			84,
			85,
			86,
			87,
			88,
			89,
			90,
			91,
			92,
			93,
			94,
			95,
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
			96,
			97,
			98,
			99,
			100,
			101,
			102,
			103,
			104,
			105,
			106,
			107,
			108,
			109,
			110,
			0,
			111,
			112,
			113,
			114,
			0,
			115,
			116,
			117,
			118,
			119,
			120,
			121,
			122,
			0,
			123,
			0,
			124,
			125,
			126,
			127,
			128,
			129,
			130,
			131,
			0,
			132,
			133,
			0,
			134,
			135,
			136,
			137,
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
			0,
			0,
			0,
			0,
			138,
			0,
			139,
			0,
			0,
			0,
			0,
			140,
			141,
			142,
			143,
			0,
			0,
			0,
			0,
			0,
			144,
			0,
			0,
			0,
			145,
			0,
			0,
			146,
			147,
			148,
			149,
			0,
			0,
			0,
			0
		], t.CFF.glyphByUnicode = function(e, t) {
			for (var n = 0; n < e.charset.length; n++) if (e.charset[n] == t) return n;
			return -1;
		}, t.CFF.glyphBySE = function(e, n) {
			return n < 0 || n > 255 ? -1 : t.CFF.glyphByUnicode(e, t.CFF.tableSE[n]);
		}, t.CFF.readEncoding = function(e, n, r) {
			t._bin;
			var i = [".notdef"], a = e[n];
			if (n++, a != 0) throw "error: unknown encoding format: " + a;
			var o = e[n];
			n++;
			for (var s = 0; s < o; s++) i.push(e[n + s]);
			return i;
		}, t.CFF.readCharset = function(e, n, r) {
			var i = t._bin, a = [".notdef"], o = e[n];
			if (n++, o == 0) for (var s = 0; s < r; s++) {
				var c = i.readUshort(e, n);
				n += 2, a.push(c);
			}
			else {
				if (o != 1 && o != 2) throw "error: format: " + o;
				for (; a.length < r;) {
					c = i.readUshort(e, n), n += 2;
					var l = 0;
					for (o == 1 ? (l = e[n], n++) : (l = i.readUshort(e, n), n += 2), s = 0; s <= l; s++) a.push(c), c++;
				}
			}
			return a;
		}, t.CFF.readIndex = function(e, n, r) {
			var i = t._bin, a = i.readUshort(e, n) + 1, o = e[n += 2];
			if (n++, o == 1) for (var s = 0; s < a; s++) r.push(e[n + s]);
			else if (o == 2) for (s = 0; s < a; s++) r.push(i.readUshort(e, n + 2 * s));
			else if (o == 3) for (s = 0; s < a; s++) r.push(16777215 & i.readUint(e, n + 3 * s - 1));
			else if (a != 1) throw "unsupported offset size: " + o + ", count: " + a;
			return (n += a * o) - 1;
		}, t.CFF.getCharString = function(e, n, r) {
			var i = t._bin, a = e[n], o = e[n + 1];
			e[n + 2], e[n + 3], e[n + 4];
			var s = 1, c = null, l = null;
			a <= 20 && (c = a, s = 1), a == 12 && (c = 100 * a + o, s = 2), 21 <= a && a <= 27 && (c = a, s = 1), a == 28 && (l = i.readShort(e, n + 1), s = 3), 29 <= a && a <= 31 && (c = a, s = 1), 32 <= a && a <= 246 && (l = a - 139, s = 1), 247 <= a && a <= 250 && (l = 256 * (a - 247) + o + 108, s = 2), 251 <= a && a <= 254 && (l = 256 * -(a - 251) - o - 108, s = 2), a == 255 && (l = i.readInt(e, n + 1) / 65535, s = 5), r.val = l ?? "o" + c, r.size = s;
		}, t.CFF.readCharString = function(e, n, r) {
			for (var i = n + r, a = t._bin, o = []; n < i;) {
				var s = e[n], c = e[n + 1];
				e[n + 2], e[n + 3], e[n + 4];
				var l = 1, u = null, d = null;
				s <= 20 && (u = s, l = 1), s == 12 && (u = 100 * s + c, l = 2), s != 19 && s != 20 || (u = s, l = 2), 21 <= s && s <= 27 && (u = s, l = 1), s == 28 && (d = a.readShort(e, n + 1), l = 3), 29 <= s && s <= 31 && (u = s, l = 1), 32 <= s && s <= 246 && (d = s - 139, l = 1), 247 <= s && s <= 250 && (d = 256 * (s - 247) + c + 108, l = 2), 251 <= s && s <= 254 && (d = 256 * -(s - 251) - c - 108, l = 2), s == 255 && (d = a.readInt(e, n + 1) / 65535, l = 5), o.push(d ?? "o" + u), n += l;
			}
			return o;
		}, t.CFF.readDict = function(e, n, r) {
			for (var i = t._bin, a = {}, o = []; n < r;) {
				var s = e[n], c = e[n + 1];
				e[n + 2], e[n + 3], e[n + 4];
				var l = 1, u = null, d = null;
				if (s == 28 && (d = i.readShort(e, n + 1), l = 3), s == 29 && (d = i.readInt(e, n + 1), l = 5), 32 <= s && s <= 246 && (d = s - 139, l = 1), 247 <= s && s <= 250 && (d = 256 * (s - 247) + c + 108, l = 2), 251 <= s && s <= 254 && (d = 256 * -(s - 251) - c - 108, l = 2), s == 255) throw d = i.readInt(e, n + 1) / 65535, l = 5, "unknown number";
				if (s == 30) {
					var f = [];
					for (l = 1;;) {
						var p = e[n + l];
						l++;
						var m = p >> 4, h = 15 & p;
						if (m != 15 && f.push(m), h != 15 && f.push(h), h == 15) break;
					}
					for (var g = "", _ = [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						".",
						"e",
						"e-",
						"reserved",
						"-",
						"endOfNumber"
					], v = 0; v < f.length; v++) g += _[f[v]];
					d = parseFloat(g);
				}
				s <= 21 && (u = [
					"version",
					"Notice",
					"FullName",
					"FamilyName",
					"Weight",
					"FontBBox",
					"BlueValues",
					"OtherBlues",
					"FamilyBlues",
					"FamilyOtherBlues",
					"StdHW",
					"StdVW",
					"escape",
					"UniqueID",
					"XUID",
					"charset",
					"Encoding",
					"CharStrings",
					"Private",
					"Subrs",
					"defaultWidthX",
					"nominalWidthX"
				][s], l = 1, s == 12 && (u = [
					"Copyright",
					"isFixedPitch",
					"ItalicAngle",
					"UnderlinePosition",
					"UnderlineThickness",
					"PaintType",
					"CharstringType",
					"FontMatrix",
					"StrokeWidth",
					"BlueScale",
					"BlueShift",
					"BlueFuzz",
					"StemSnapH",
					"StemSnapV",
					"ForceBold",
					0,
					0,
					"LanguageGroup",
					"ExpansionFactor",
					"initialRandomSeed",
					"SyntheticBase",
					"PostScript",
					"BaseFontName",
					"BaseFontBlend",
					0,
					0,
					0,
					0,
					0,
					0,
					"ROS",
					"CIDFontVersion",
					"CIDFontRevision",
					"CIDFontType",
					"CIDCount",
					"UIDBase",
					"FDArray",
					"FDSelect",
					"FontName"
				][c], l = 2)), u == null ? o.push(d) : (a[u] = o.length == 1 ? o[0] : o, o = []), n += l;
			}
			return a;
		}, t.cmap = {}, t.cmap.parse = function(e, n, r) {
			e = new Uint8Array(e.buffer, n, r), n = 0;
			var i = t._bin, a = {};
			i.readUshort(e, n), n += 2;
			var o = i.readUshort(e, n);
			n += 2;
			var s = [];
			a.tables = [];
			for (var c = 0; c < o; c++) {
				var l = i.readUshort(e, n);
				n += 2;
				var u = i.readUshort(e, n);
				n += 2;
				var d = i.readUint(e, n);
				n += 4;
				var f = "p" + l + "e" + u, p = s.indexOf(d);
				if (p == -1) {
					var m;
					p = a.tables.length, s.push(d);
					var h = i.readUshort(e, d);
					h == 0 ? m = t.cmap.parse0(e, d) : h == 4 ? m = t.cmap.parse4(e, d) : h == 6 ? m = t.cmap.parse6(e, d) : h == 12 ? m = t.cmap.parse12(e, d) : console.debug("unknown format: " + h, l, u, d), a.tables.push(m);
				}
				if (a[f] != null) throw "multiple tables for one platform+encoding";
				a[f] = p;
			}
			return a;
		}, t.cmap.parse0 = function(e, n) {
			var r = t._bin, i = {};
			i.format = r.readUshort(e, n), n += 2;
			var a = r.readUshort(e, n);
			n += 2, r.readUshort(e, n), n += 2, i.map = [];
			for (var o = 0; o < a - 6; o++) i.map.push(e[n + o]);
			return i;
		}, t.cmap.parse4 = function(e, n) {
			var r = t._bin, i = n, a = {};
			a.format = r.readUshort(e, n), n += 2;
			var o = r.readUshort(e, n);
			n += 2, r.readUshort(e, n), n += 2;
			var s = r.readUshort(e, n);
			n += 2;
			var c = s / 2;
			a.searchRange = r.readUshort(e, n), n += 2, a.entrySelector = r.readUshort(e, n), n += 2, a.rangeShift = r.readUshort(e, n), n += 2, a.endCount = r.readUshorts(e, n, c), n += 2 * c, n += 2, a.startCount = r.readUshorts(e, n, c), n += 2 * c, a.idDelta = [];
			for (var l = 0; l < c; l++) a.idDelta.push(r.readShort(e, n)), n += 2;
			for (a.idRangeOffset = r.readUshorts(e, n, c), n += 2 * c, a.glyphIdArray = []; n < i + o;) a.glyphIdArray.push(r.readUshort(e, n)), n += 2;
			return a;
		}, t.cmap.parse6 = function(e, n) {
			var r = t._bin, i = {};
			i.format = r.readUshort(e, n), n += 2, r.readUshort(e, n), n += 2, r.readUshort(e, n), n += 2, i.firstCode = r.readUshort(e, n), n += 2;
			var a = r.readUshort(e, n);
			n += 2, i.glyphIdArray = [];
			for (var o = 0; o < a; o++) i.glyphIdArray.push(r.readUshort(e, n)), n += 2;
			return i;
		}, t.cmap.parse12 = function(e, n) {
			var r = t._bin, i = {};
			i.format = r.readUshort(e, n), n += 2, n += 2, r.readUint(e, n), n += 4, r.readUint(e, n), n += 4;
			var a = r.readUint(e, n);
			n += 4, i.groups = [];
			for (var o = 0; o < a; o++) {
				var s = n + 12 * o, c = r.readUint(e, s + 0), l = r.readUint(e, s + 4), u = r.readUint(e, s + 8);
				i.groups.push([
					c,
					l,
					u
				]);
			}
			return i;
		}, t.glyf = {}, t.glyf.parse = function(e, t, n, r) {
			for (var i = [], a = 0; a < r.maxp.numGlyphs; a++) i.push(null);
			return i;
		}, t.glyf._parseGlyf = function(e, n) {
			var r = t._bin, i = e._data, a = t._tabOffset(i, "glyf", e._offset) + e.loca[n];
			if (e.loca[n] == e.loca[n + 1]) return null;
			var o = {};
			if (o.noc = r.readShort(i, a), a += 2, o.xMin = r.readShort(i, a), a += 2, o.yMin = r.readShort(i, a), a += 2, o.xMax = r.readShort(i, a), a += 2, o.yMax = r.readShort(i, a), a += 2, o.xMin >= o.xMax || o.yMin >= o.yMax) return null;
			if (o.noc > 0) {
				o.endPts = [];
				for (var s = 0; s < o.noc; s++) o.endPts.push(r.readUshort(i, a)), a += 2;
				var c = r.readUshort(i, a);
				if (a += 2, i.length - a < c) return null;
				o.instructions = r.readBytes(i, a, c), a += c;
				var l = o.endPts[o.noc - 1] + 1;
				for (o.flags = [], s = 0; s < l; s++) {
					var u = i[a];
					if (a++, o.flags.push(u), 8 & u) {
						var d = i[a];
						a++;
						for (var f = 0; f < d; f++) o.flags.push(u), s++;
					}
				}
				for (o.xs = [], s = 0; s < l; s++) {
					var p = (2 & o.flags[s]) != 0, m = (16 & o.flags[s]) != 0;
					p ? (o.xs.push(m ? i[a] : -i[a]), a++) : m ? o.xs.push(0) : (o.xs.push(r.readShort(i, a)), a += 2);
				}
				for (o.ys = [], s = 0; s < l; s++) p = (4 & o.flags[s]) != 0, m = (32 & o.flags[s]) != 0, p ? (o.ys.push(m ? i[a] : -i[a]), a++) : m ? o.ys.push(0) : (o.ys.push(r.readShort(i, a)), a += 2);
				var h = 0, g = 0;
				for (s = 0; s < l; s++) h += o.xs[s], g += o.ys[s], o.xs[s] = h, o.ys[s] = g;
			} else {
				var _;
				o.parts = [];
				do {
					_ = r.readUshort(i, a), a += 2;
					var v = {
						m: {
							a: 1,
							b: 0,
							c: 0,
							d: 1,
							tx: 0,
							ty: 0
						},
						p1: -1,
						p2: -1
					};
					if (o.parts.push(v), v.glyphIndex = r.readUshort(i, a), a += 2, 1 & _) {
						var y = r.readShort(i, a);
						a += 2;
						var b = r.readShort(i, a);
						a += 2;
					} else y = r.readInt8(i, a), a++, b = r.readInt8(i, a), a++;
					2 & _ ? (v.m.tx = y, v.m.ty = b) : (v.p1 = y, v.p2 = b), 8 & _ ? (v.m.a = v.m.d = r.readF2dot14(i, a), a += 2) : 64 & _ ? (v.m.a = r.readF2dot14(i, a), a += 2, v.m.d = r.readF2dot14(i, a), a += 2) : 128 & _ && (v.m.a = r.readF2dot14(i, a), a += 2, v.m.b = r.readF2dot14(i, a), a += 2, v.m.c = r.readF2dot14(i, a), a += 2, v.m.d = r.readF2dot14(i, a), a += 2);
				} while (32 & _);
				if (256 & _) {
					var x = r.readUshort(i, a);
					for (a += 2, o.instr = [], s = 0; s < x; s++) o.instr.push(i[a]), a++;
				}
			}
			return o;
		}, t.GDEF = {}, t.GDEF.parse = function(e, n, r, i) {
			var a = n;
			n += 4;
			var o = t._bin.readUshort(e, n);
			return { glyphClassDef: o === 0 ? null : t._lctf.readClassDef(e, a + o) };
		}, t.GPOS = {}, t.GPOS.parse = function(e, n, r, i) {
			return t._lctf.parse(e, n, r, i, t.GPOS.subt);
		}, t.GPOS.subt = function(e, n, r, i) {
			var a = t._bin, o = r, s = {};
			if (s.fmt = a.readUshort(e, r), r += 2, n == 1 || n == 2 || n == 3 || n == 7 || n == 8 && s.fmt <= 2) {
				var c = a.readUshort(e, r);
				r += 2, s.coverage = t._lctf.readCoverage(e, c + o);
			}
			if (n == 1 && s.fmt == 1) {
				var l = a.readUshort(e, r);
				r += 2, l != 0 && (s.pos = t.GPOS.readValueRecord(e, r, l));
			} else if (n == 2 && s.fmt >= 1 && s.fmt <= 2) {
				l = a.readUshort(e, r), r += 2;
				var u = a.readUshort(e, r);
				r += 2;
				var d = t._lctf.numOfOnes(l), f = t._lctf.numOfOnes(u);
				if (s.fmt == 1) {
					s.pairsets = [];
					var p = a.readUshort(e, r);
					r += 2;
					for (var m = 0; m < p; m++) {
						var h = o + a.readUshort(e, r);
						r += 2;
						var g = a.readUshort(e, h);
						h += 2;
						for (var _ = [], v = 0; v < g; v++) {
							var y = a.readUshort(e, h);
							h += 2, l != 0 && (T = t.GPOS.readValueRecord(e, h, l), h += 2 * d), u != 0 && (E = t.GPOS.readValueRecord(e, h, u), h += 2 * f), _.push({
								gid2: y,
								val1: T,
								val2: E
							});
						}
						s.pairsets.push(_);
					}
				}
				if (s.fmt == 2) {
					var b = a.readUshort(e, r);
					r += 2;
					var x = a.readUshort(e, r);
					r += 2;
					var S = a.readUshort(e, r);
					r += 2;
					var C = a.readUshort(e, r);
					for (r += 2, s.classDef1 = t._lctf.readClassDef(e, o + b), s.classDef2 = t._lctf.readClassDef(e, o + x), s.matrix = [], m = 0; m < S; m++) {
						var w = [];
						for (v = 0; v < C; v++) {
							var T = null, E = null;
							l != 0 && (T = t.GPOS.readValueRecord(e, r, l), r += 2 * d), u != 0 && (E = t.GPOS.readValueRecord(e, r, u), r += 2 * f), w.push({
								val1: T,
								val2: E
							});
						}
						s.matrix.push(w);
					}
				}
			} else if (n == 4 && s.fmt == 1) s.markCoverage = t._lctf.readCoverage(e, a.readUshort(e, r) + o), s.baseCoverage = t._lctf.readCoverage(e, a.readUshort(e, r + 2) + o), s.markClassCount = a.readUshort(e, r + 4), s.markArray = t.GPOS.readMarkArray(e, a.readUshort(e, r + 6) + o), s.baseArray = t.GPOS.readBaseArray(e, a.readUshort(e, r + 8) + o, s.markClassCount);
			else if (n == 6 && s.fmt == 1) s.mark1Coverage = t._lctf.readCoverage(e, a.readUshort(e, r) + o), s.mark2Coverage = t._lctf.readCoverage(e, a.readUshort(e, r + 2) + o), s.markClassCount = a.readUshort(e, r + 4), s.mark1Array = t.GPOS.readMarkArray(e, a.readUshort(e, r + 6) + o), s.mark2Array = t.GPOS.readBaseArray(e, a.readUshort(e, r + 8) + o, s.markClassCount);
			else {
				if (n == 9 && s.fmt == 1) {
					var D = a.readUshort(e, r);
					r += 2;
					var O = a.readUint(e, r);
					if (r += 4, i.ltype == 9) i.ltype = D;
					else if (i.ltype != D) throw "invalid extension substitution";
					return t.GPOS.subt(e, i.ltype, o + O);
				}
				console.debug("unsupported GPOS table LookupType", n, "format", s.fmt);
			}
			return s;
		}, t.GPOS.readValueRecord = function(e, n, r) {
			var i = t._bin, a = [];
			return a.push(1 & r ? i.readShort(e, n) : 0), n += 1 & r ? 2 : 0, a.push(2 & r ? i.readShort(e, n) : 0), n += 2 & r ? 2 : 0, a.push(4 & r ? i.readShort(e, n) : 0), n += 4 & r ? 2 : 0, a.push(8 & r ? i.readShort(e, n) : 0), n += 8 & r ? 2 : 0, a;
		}, t.GPOS.readBaseArray = function(e, n, r) {
			var i = t._bin, a = [], o = n, s = i.readUshort(e, n);
			n += 2;
			for (var c = 0; c < s; c++) {
				for (var l = [], u = 0; u < r; u++) l.push(t.GPOS.readAnchorRecord(e, o + i.readUshort(e, n))), n += 2;
				a.push(l);
			}
			return a;
		}, t.GPOS.readMarkArray = function(e, n) {
			var r = t._bin, i = [], a = n, o = r.readUshort(e, n);
			n += 2;
			for (var s = 0; s < o; s++) {
				var c = t.GPOS.readAnchorRecord(e, r.readUshort(e, n + 2) + a);
				c.markClass = r.readUshort(e, n), i.push(c), n += 4;
			}
			return i;
		}, t.GPOS.readAnchorRecord = function(e, n) {
			var r = t._bin, i = {};
			return i.fmt = r.readUshort(e, n), i.x = r.readShort(e, n + 2), i.y = r.readShort(e, n + 4), i;
		}, t.GSUB = {}, t.GSUB.parse = function(e, n, r, i) {
			return t._lctf.parse(e, n, r, i, t.GSUB.subt);
		}, t.GSUB.subt = function(e, n, r, i) {
			var a = t._bin, o = r, s = {};
			if (s.fmt = a.readUshort(e, r), r += 2, n != 1 && n != 2 && n != 4 && n != 5 && n != 6) return null;
			if (n == 1 || n == 2 || n == 4 || n == 5 && s.fmt <= 2 || n == 6 && s.fmt <= 2) {
				var c = a.readUshort(e, r);
				r += 2, s.coverage = t._lctf.readCoverage(e, o + c);
			}
			if (n == 1 && s.fmt >= 1 && s.fmt <= 2) {
				if (s.fmt == 1) s.delta = a.readShort(e, r), r += 2;
				else if (s.fmt == 2) {
					var l = a.readUshort(e, r);
					r += 2, s.newg = a.readUshorts(e, r, l), r += 2 * s.newg.length;
				}
			} else if (n == 2 && s.fmt == 1) {
				l = a.readUshort(e, r), r += 2, s.seqs = [];
				for (var u = 0; u < l; u++) {
					var d = a.readUshort(e, r) + o;
					r += 2;
					var f = a.readUshort(e, d);
					s.seqs.push(a.readUshorts(e, d + 2, f));
				}
			} else if (n == 4) for (s.vals = [], l = a.readUshort(e, r), r += 2, u = 0; u < l; u++) {
				var p = a.readUshort(e, r);
				r += 2, s.vals.push(t.GSUB.readLigatureSet(e, o + p));
			}
			else if (n == 5 && s.fmt == 2) {
				if (s.fmt == 2) {
					var m = a.readUshort(e, r);
					r += 2, s.cDef = t._lctf.readClassDef(e, o + m), s.scset = [];
					var h = a.readUshort(e, r);
					for (r += 2, u = 0; u < h; u++) {
						var g = a.readUshort(e, r);
						r += 2, s.scset.push(g == 0 ? null : t.GSUB.readSubClassSet(e, o + g));
					}
				}
			} else if (n == 6 && s.fmt == 3) {
				if (s.fmt == 3) {
					for (u = 0; u < 3; u++) {
						l = a.readUshort(e, r), r += 2;
						for (var _ = [], v = 0; v < l; v++) _.push(t._lctf.readCoverage(e, o + a.readUshort(e, r + 2 * v)));
						r += 2 * l, u == 0 && (s.backCvg = _), u == 1 && (s.inptCvg = _), u == 2 && (s.ahedCvg = _);
					}
					l = a.readUshort(e, r), r += 2, s.lookupRec = t.GSUB.readSubstLookupRecords(e, r, l);
				}
			} else {
				if (n == 7 && s.fmt == 1) {
					var y = a.readUshort(e, r);
					r += 2;
					var b = a.readUint(e, r);
					if (r += 4, i.ltype == 9) i.ltype = y;
					else if (i.ltype != y) throw "invalid extension substitution";
					return t.GSUB.subt(e, i.ltype, o + b);
				}
				console.debug("unsupported GSUB table LookupType", n, "format", s.fmt);
			}
			return s;
		}, t.GSUB.readSubClassSet = function(e, n) {
			var r = t._bin.readUshort, i = n, a = [], o = r(e, n);
			n += 2;
			for (var s = 0; s < o; s++) {
				var c = r(e, n);
				n += 2, a.push(t.GSUB.readSubClassRule(e, i + c));
			}
			return a;
		}, t.GSUB.readSubClassRule = function(e, n) {
			var r = t._bin.readUshort, i = {}, a = r(e, n), o = r(e, n += 2);
			n += 2, i.input = [];
			for (var s = 0; s < a - 1; s++) i.input.push(r(e, n)), n += 2;
			return i.substLookupRecords = t.GSUB.readSubstLookupRecords(e, n, o), i;
		}, t.GSUB.readSubstLookupRecords = function(e, n, r) {
			for (var i = t._bin.readUshort, a = [], o = 0; o < r; o++) a.push(i(e, n), i(e, n + 2)), n += 4;
			return a;
		}, t.GSUB.readChainSubClassSet = function(e, n) {
			var r = t._bin, i = n, a = [], o = r.readUshort(e, n);
			n += 2;
			for (var s = 0; s < o; s++) {
				var c = r.readUshort(e, n);
				n += 2, a.push(t.GSUB.readChainSubClassRule(e, i + c));
			}
			return a;
		}, t.GSUB.readChainSubClassRule = function(e, n) {
			for (var r = t._bin, i = {}, a = [
				"backtrack",
				"input",
				"lookahead"
			], o = 0; o < a.length; o++) {
				var s = r.readUshort(e, n);
				n += 2, o == 1 && s--, i[a[o]] = r.readUshorts(e, n, s), n += 2 * i[a[o]].length;
			}
			return s = r.readUshort(e, n), n += 2, i.subst = r.readUshorts(e, n, 2 * s), n += 2 * i.subst.length, i;
		}, t.GSUB.readLigatureSet = function(e, n) {
			var r = t._bin, i = n, a = [], o = r.readUshort(e, n);
			n += 2;
			for (var s = 0; s < o; s++) {
				var c = r.readUshort(e, n);
				n += 2, a.push(t.GSUB.readLigature(e, i + c));
			}
			return a;
		}, t.GSUB.readLigature = function(e, n) {
			var r = t._bin, i = { chain: [] };
			i.nglyph = r.readUshort(e, n), n += 2;
			var a = r.readUshort(e, n);
			n += 2;
			for (var o = 0; o < a - 1; o++) i.chain.push(r.readUshort(e, n)), n += 2;
			return i;
		}, t.head = {}, t.head.parse = function(e, n, r) {
			var i = t._bin, a = {};
			return i.readFixed(e, n), n += 4, a.fontRevision = i.readFixed(e, n), n += 4, i.readUint(e, n), n += 4, i.readUint(e, n), n += 4, a.flags = i.readUshort(e, n), n += 2, a.unitsPerEm = i.readUshort(e, n), n += 2, a.created = i.readUint64(e, n), n += 8, a.modified = i.readUint64(e, n), n += 8, a.xMin = i.readShort(e, n), n += 2, a.yMin = i.readShort(e, n), n += 2, a.xMax = i.readShort(e, n), n += 2, a.yMax = i.readShort(e, n), n += 2, a.macStyle = i.readUshort(e, n), n += 2, a.lowestRecPPEM = i.readUshort(e, n), n += 2, a.fontDirectionHint = i.readShort(e, n), n += 2, a.indexToLocFormat = i.readShort(e, n), n += 2, a.glyphDataFormat = i.readShort(e, n), n += 2, a;
		}, t.hhea = {}, t.hhea.parse = function(e, n, r) {
			var i = t._bin, a = {};
			return i.readFixed(e, n), n += 4, a.ascender = i.readShort(e, n), n += 2, a.descender = i.readShort(e, n), n += 2, a.lineGap = i.readShort(e, n), n += 2, a.advanceWidthMax = i.readUshort(e, n), n += 2, a.minLeftSideBearing = i.readShort(e, n), n += 2, a.minRightSideBearing = i.readShort(e, n), n += 2, a.xMaxExtent = i.readShort(e, n), n += 2, a.caretSlopeRise = i.readShort(e, n), n += 2, a.caretSlopeRun = i.readShort(e, n), n += 2, a.caretOffset = i.readShort(e, n), n += 2, n += 8, a.metricDataFormat = i.readShort(e, n), n += 2, a.numberOfHMetrics = i.readUshort(e, n), n += 2, a;
		}, t.hmtx = {}, t.hmtx.parse = function(e, n, r, i) {
			for (var a = t._bin, o = {
				aWidth: [],
				lsBearing: []
			}, s = 0, c = 0, l = 0; l < i.maxp.numGlyphs; l++) l < i.hhea.numberOfHMetrics && (s = a.readUshort(e, n), n += 2, c = a.readShort(e, n), n += 2), o.aWidth.push(s), o.lsBearing.push(c);
			return o;
		}, t.kern = {}, t.kern.parse = function(e, n, r, i) {
			var a = t._bin, o = a.readUshort(e, n);
			if (n += 2, o == 1) return t.kern.parseV1(e, n - 2, r, i);
			var s = a.readUshort(e, n);
			n += 2;
			for (var c = {
				glyph1: [],
				rval: []
			}, l = 0; l < s; l++) {
				n += 2, r = a.readUshort(e, n), n += 2;
				var u = a.readUshort(e, n);
				n += 2;
				var d = u >>> 8;
				if ((d &= 15) != 0) throw "unknown kern table format: " + d;
				n = t.kern.readFormat0(e, n, c);
			}
			return c;
		}, t.kern.parseV1 = function(e, n, r, i) {
			var a = t._bin;
			a.readFixed(e, n), n += 4;
			var o = a.readUint(e, n);
			n += 4;
			for (var s = {
				glyph1: [],
				rval: []
			}, c = 0; c < o; c++) {
				a.readUint(e, n), n += 4;
				var l = a.readUshort(e, n);
				n += 2, a.readUshort(e, n), n += 2;
				var u = l >>> 8;
				if ((u &= 15) != 0) throw "unknown kern table format: " + u;
				n = t.kern.readFormat0(e, n, s);
			}
			return s;
		}, t.kern.readFormat0 = function(e, n, r) {
			var i = t._bin, a = -1, o = i.readUshort(e, n);
			n += 2, i.readUshort(e, n), n += 2, i.readUshort(e, n), n += 2, i.readUshort(e, n), n += 2;
			for (var s = 0; s < o; s++) {
				var c = i.readUshort(e, n);
				n += 2;
				var l = i.readUshort(e, n);
				n += 2;
				var u = i.readShort(e, n);
				n += 2, c != a && (r.glyph1.push(c), r.rval.push({
					glyph2: [],
					vals: []
				}));
				var d = r.rval[r.rval.length - 1];
				d.glyph2.push(l), d.vals.push(u), a = c;
			}
			return n;
		}, t.loca = {}, t.loca.parse = function(e, n, r, i) {
			var a = t._bin, o = [], s = i.head.indexToLocFormat, c = i.maxp.numGlyphs + 1;
			if (s == 0) for (var l = 0; l < c; l++) o.push(a.readUshort(e, n + (l << 1)) << 1);
			if (s == 1) for (l = 0; l < c; l++) o.push(a.readUint(e, n + (l << 2)));
			return o;
		}, t.maxp = {}, t.maxp.parse = function(e, n, r) {
			var i = t._bin, a = {}, o = i.readUint(e, n);
			return n += 4, a.numGlyphs = i.readUshort(e, n), n += 2, o == 65536 && (a.maxPoints = i.readUshort(e, n), n += 2, a.maxContours = i.readUshort(e, n), n += 2, a.maxCompositePoints = i.readUshort(e, n), n += 2, a.maxCompositeContours = i.readUshort(e, n), n += 2, a.maxZones = i.readUshort(e, n), n += 2, a.maxTwilightPoints = i.readUshort(e, n), n += 2, a.maxStorage = i.readUshort(e, n), n += 2, a.maxFunctionDefs = i.readUshort(e, n), n += 2, a.maxInstructionDefs = i.readUshort(e, n), n += 2, a.maxStackElements = i.readUshort(e, n), n += 2, a.maxSizeOfInstructions = i.readUshort(e, n), n += 2, a.maxComponentElements = i.readUshort(e, n), n += 2, a.maxComponentDepth = i.readUshort(e, n), n += 2), a;
		}, t.name = {}, t.name.parse = function(e, n, r) {
			var i = t._bin, a = {};
			i.readUshort(e, n), n += 2;
			var o = i.readUshort(e, n);
			n += 2, i.readUshort(e, n);
			for (var s, c = [
				"copyright",
				"fontFamily",
				"fontSubfamily",
				"ID",
				"fullName",
				"version",
				"postScriptName",
				"trademark",
				"manufacturer",
				"designer",
				"description",
				"urlVendor",
				"urlDesigner",
				"licence",
				"licenceURL",
				"---",
				"typoFamilyName",
				"typoSubfamilyName",
				"compatibleFull",
				"sampleText",
				"postScriptCID",
				"wwsFamilyName",
				"wwsSubfamilyName",
				"lightPalette",
				"darkPalette"
			], l = n += 2, u = 0; u < o; u++) {
				var d = i.readUshort(e, n);
				n += 2;
				var f = i.readUshort(e, n);
				n += 2;
				var p = i.readUshort(e, n);
				n += 2;
				var m = i.readUshort(e, n);
				n += 2;
				var h = i.readUshort(e, n);
				n += 2;
				var g = i.readUshort(e, n);
				n += 2;
				var _, v = c[m], y = l + 12 * o + g;
				if (d == 0) _ = i.readUnicode(e, y, h / 2);
				else if (d == 3 && f == 0) _ = i.readUnicode(e, y, h / 2);
				else if (f == 0) _ = i.readASCII(e, y, h);
				else if (f == 1) _ = i.readUnicode(e, y, h / 2);
				else if (f == 3) _ = i.readUnicode(e, y, h / 2);
				else {
					if (d != 1) throw "unknown encoding " + f + ", platformID: " + d;
					_ = i.readASCII(e, y, h), console.debug("reading unknown MAC encoding " + f + " as ASCII");
				}
				var b = "p" + d + "," + p.toString(16);
				a[b] ?? (a[b] = {}), a[b][v === void 0 ? m : v] = _, a[b]._lang = p;
			}
			for (var x in a) if (a[x].postScriptName != null && a[x]._lang == 1033) return a[x];
			for (var x in a) if (a[x].postScriptName != null && a[x]._lang == 0) return a[x];
			for (var x in a) if (a[x].postScriptName != null && a[x]._lang == 3084) return a[x];
			for (var x in a) if (a[x].postScriptName != null) return a[x];
			for (var x in a) {
				s = x;
				break;
			}
			return console.debug("returning name table with languageID " + a[s]._lang), a[s];
		}, t["OS/2"] = {}, t["OS/2"].parse = function(e, n, r) {
			var i = t._bin.readUshort(e, n);
			n += 2;
			var a = {};
			if (i == 0) t["OS/2"].version0(e, n, a);
			else if (i == 1) t["OS/2"].version1(e, n, a);
			else if (i == 2 || i == 3 || i == 4) t["OS/2"].version2(e, n, a);
			else {
				if (i != 5) throw "unknown OS/2 table version: " + i;
				t["OS/2"].version5(e, n, a);
			}
			return a;
		}, t["OS/2"].version0 = function(e, n, r) {
			var i = t._bin;
			return r.xAvgCharWidth = i.readShort(e, n), n += 2, r.usWeightClass = i.readUshort(e, n), n += 2, r.usWidthClass = i.readUshort(e, n), n += 2, r.fsType = i.readUshort(e, n), n += 2, r.ySubscriptXSize = i.readShort(e, n), n += 2, r.ySubscriptYSize = i.readShort(e, n), n += 2, r.ySubscriptXOffset = i.readShort(e, n), n += 2, r.ySubscriptYOffset = i.readShort(e, n), n += 2, r.ySuperscriptXSize = i.readShort(e, n), n += 2, r.ySuperscriptYSize = i.readShort(e, n), n += 2, r.ySuperscriptXOffset = i.readShort(e, n), n += 2, r.ySuperscriptYOffset = i.readShort(e, n), n += 2, r.yStrikeoutSize = i.readShort(e, n), n += 2, r.yStrikeoutPosition = i.readShort(e, n), n += 2, r.sFamilyClass = i.readShort(e, n), n += 2, r.panose = i.readBytes(e, n, 10), n += 10, r.ulUnicodeRange1 = i.readUint(e, n), n += 4, r.ulUnicodeRange2 = i.readUint(e, n), n += 4, r.ulUnicodeRange3 = i.readUint(e, n), n += 4, r.ulUnicodeRange4 = i.readUint(e, n), n += 4, r.achVendID = [
				i.readInt8(e, n),
				i.readInt8(e, n + 1),
				i.readInt8(e, n + 2),
				i.readInt8(e, n + 3)
			], n += 4, r.fsSelection = i.readUshort(e, n), n += 2, r.usFirstCharIndex = i.readUshort(e, n), n += 2, r.usLastCharIndex = i.readUshort(e, n), n += 2, r.sTypoAscender = i.readShort(e, n), n += 2, r.sTypoDescender = i.readShort(e, n), n += 2, r.sTypoLineGap = i.readShort(e, n), n += 2, r.usWinAscent = i.readUshort(e, n), n += 2, r.usWinDescent = i.readUshort(e, n), n += 2;
		}, t["OS/2"].version1 = function(e, n, r) {
			var i = t._bin;
			return n = t["OS/2"].version0(e, n, r), r.ulCodePageRange1 = i.readUint(e, n), n += 4, r.ulCodePageRange2 = i.readUint(e, n), n += 4;
		}, t["OS/2"].version2 = function(e, n, r) {
			var i = t._bin;
			return n = t["OS/2"].version1(e, n, r), r.sxHeight = i.readShort(e, n), n += 2, r.sCapHeight = i.readShort(e, n), n += 2, r.usDefault = i.readUshort(e, n), n += 2, r.usBreak = i.readUshort(e, n), n += 2, r.usMaxContext = i.readUshort(e, n), n += 2;
		}, t["OS/2"].version5 = function(e, n, r) {
			var i = t._bin;
			return n = t["OS/2"].version2(e, n, r), r.usLowerOpticalPointSize = i.readUshort(e, n), n += 2, r.usUpperOpticalPointSize = i.readUshort(e, n), n += 2;
		}, t.post = {}, t.post.parse = function(e, n, r) {
			var i = t._bin, a = {};
			return a.version = i.readFixed(e, n), n += 4, a.italicAngle = i.readFixed(e, n), n += 4, a.underlinePosition = i.readShort(e, n), n += 2, a.underlineThickness = i.readShort(e, n), n += 2, a;
		}, t ??= {}, t.U ??= {}, t.U.codeToGlyph = function(e, t) {
			var n = e.cmap, r = -1;
			if (n.p0e4 == null ? n.p3e1 == null ? n.p1e0 == null ? n.p0e3 != null && (r = n.p0e3) : r = n.p1e0 : r = n.p3e1 : r = n.p0e4, r == -1) throw "no familiar platform and encoding!";
			var i = n.tables[r];
			if (i.format == 0) return t >= i.map.length ? 0 : i.map[t];
			if (i.format == 4) {
				for (var a = -1, o = 0; o < i.endCount.length; o++) if (t <= i.endCount[o]) {
					a = o;
					break;
				}
				return a == -1 || i.startCount[a] > t ? 0 : 65535 & (i.idRangeOffset[a] == 0 ? t + i.idDelta[a] : i.glyphIdArray[t - i.startCount[a] + (i.idRangeOffset[a] >> 1) - (i.idRangeOffset.length - a)]);
			}
			if (i.format == 12) {
				if (t > i.groups[i.groups.length - 1][1]) return 0;
				for (o = 0; o < i.groups.length; o++) {
					var s = i.groups[o];
					if (s[0] <= t && t <= s[1]) return s[2] + (t - s[0]);
				}
				return 0;
			}
			throw "unknown cmap table format " + i.format;
		}, t.U.glyphToPath = function(e, n) {
			var r = {
				cmds: [],
				crds: []
			};
			if (e.SVG && e.SVG.entries[n]) {
				var i = e.SVG.entries[n];
				return i == null ? r : (typeof i == "string" && (i = t.SVG.toPath(i), e.SVG.entries[n] = i), i);
			}
			if (e.CFF) {
				var a = {
					x: 0,
					y: 0,
					stack: [],
					nStems: 0,
					haveWidth: !1,
					width: e.CFF.Private ? e.CFF.Private.defaultWidthX : 0,
					open: !1
				}, o = e.CFF, s = e.CFF.Private;
				if (o.ROS) {
					for (var c = 0; o.FDSelect[c + 2] <= n;) c += 2;
					s = o.FDArray[o.FDSelect[c + 1]].Private;
				}
				t.U._drawCFF(e.CFF.CharStrings[n], a, o, s, r);
			} else e.glyf && t.U._drawGlyf(n, e, r);
			return r;
		}, t.U._drawGlyf = function(e, n, r) {
			var i = n.glyf[e];
			i ??= n.glyf[e] = t.glyf._parseGlyf(n, e), i != null && (i.noc > -1 ? t.U._simpleGlyph(i, r) : t.U._compoGlyph(i, n, r));
		}, t.U._simpleGlyph = function(e, n) {
			for (var r = 0; r < e.noc; r++) {
				for (var i = r == 0 ? 0 : e.endPts[r - 1] + 1, a = e.endPts[r], o = i; o <= a; o++) {
					var s = o == i ? a : o - 1, c = o == a ? i : o + 1, l = 1 & e.flags[o], u = 1 & e.flags[s], d = 1 & e.flags[c], f = e.xs[o], p = e.ys[o];
					if (o == i) if (l) {
						if (!u) {
							t.U.P.moveTo(n, f, p);
							continue;
						}
						t.U.P.moveTo(n, e.xs[s], e.ys[s]);
					} else u ? t.U.P.moveTo(n, e.xs[s], e.ys[s]) : t.U.P.moveTo(n, (e.xs[s] + f) / 2, (e.ys[s] + p) / 2);
					l ? u && t.U.P.lineTo(n, f, p) : d ? t.U.P.qcurveTo(n, f, p, e.xs[c], e.ys[c]) : t.U.P.qcurveTo(n, f, p, (f + e.xs[c]) / 2, (p + e.ys[c]) / 2);
				}
				t.U.P.closePath(n);
			}
		}, t.U._compoGlyph = function(e, n, r) {
			for (var i = 0; i < e.parts.length; i++) {
				var a = {
					cmds: [],
					crds: []
				}, o = e.parts[i];
				t.U._drawGlyf(o.glyphIndex, n, a);
				for (var s = o.m, c = 0; c < a.crds.length; c += 2) {
					var l = a.crds[c], u = a.crds[c + 1];
					r.crds.push(l * s.a + u * s.b + s.tx), r.crds.push(l * s.c + u * s.d + s.ty);
				}
				for (c = 0; c < a.cmds.length; c++) r.cmds.push(a.cmds[c]);
			}
		}, t.U._getGlyphClass = function(e, n) {
			var r = t._lctf.getInterval(n, e);
			return r == -1 ? 0 : n[r + 2];
		}, t.U._applySubs = function(e, n, r, i) {
			for (var a = e.length - n - 1, o = 0; o < r.tabs.length; o++) if (r.tabs[o] != null) {
				var s, c = r.tabs[o];
				if (!c.coverage || (s = t._lctf.coverageIndex(c.coverage, e[n])) != -1) {
					if (r.ltype == 1) e[n], c.fmt == 1 ? e[n] = e[n] + c.delta : e[n] = c.newg[s];
					else if (r.ltype == 4) for (var l = c.vals[s], u = 0; u < l.length; u++) {
						var d = l[u], f = d.chain.length;
						if (!(f > a)) {
							for (var p = !0, m = 0, h = 0; h < f; h++) {
								for (; e[n + m + (1 + h)] == -1;) m++;
								d.chain[h] != e[n + m + (1 + h)] && (p = !1);
							}
							if (p) {
								for (e[n] = d.nglyph, h = 0; h < f + m; h++) e[n + h + 1] = -1;
								break;
							}
						}
					}
					else if (r.ltype == 5 && c.fmt == 2) for (var g = t._lctf.getInterval(c.cDef, e[n]), _ = c.cDef[g + 2], v = c.scset[_], y = 0; y < v.length; y++) {
						var b = v[y], x = b.input;
						if (!(x.length > a)) {
							for (p = !0, h = 0; h < x.length; h++) {
								var S = t._lctf.getInterval(c.cDef, e[n + 1 + h]);
								if (g == -1 && c.cDef[S + 2] != x[h]) {
									p = !1;
									break;
								}
							}
							if (p) {
								var C = b.substLookupRecords;
								for (u = 0; u < C.length; u += 2) C[u], C[u + 1];
							}
						}
					}
					else if (r.ltype == 6 && c.fmt == 3) {
						if (!t.U._glsCovered(e, c.backCvg, n - c.backCvg.length) || !t.U._glsCovered(e, c.inptCvg, n) || !t.U._glsCovered(e, c.ahedCvg, n + c.inptCvg.length)) continue;
						var w = c.lookupRec;
						for (y = 0; y < w.length; y += 2) {
							g = w[y];
							var T = i[w[y + 1]];
							t.U._applySubs(e, n + g, T, i);
						}
					}
				}
			}
		}, t.U._glsCovered = function(e, n, r) {
			for (var i = 0; i < n.length; i++) if (t._lctf.coverageIndex(n[i], e[r + i]) == -1) return !1;
			return !0;
		}, t.U.glyphsToPath = function(e, n, r) {
			for (var i = {
				cmds: [],
				crds: []
			}, a = 0, o = 0; o < n.length; o++) {
				var s = n[o];
				if (s != -1) {
					for (var c = o < n.length - 1 && n[o + 1] != -1 ? n[o + 1] : 0, l = t.U.glyphToPath(e, s), u = 0; u < l.crds.length; u += 2) i.crds.push(l.crds[u] + a), i.crds.push(l.crds[u + 1]);
					for (r && i.cmds.push(r), u = 0; u < l.cmds.length; u++) i.cmds.push(l.cmds[u]);
					r && i.cmds.push("X"), a += e.hmtx.aWidth[s], o < n.length - 1 && (a += t.U.getPairAdjustment(e, s, c));
				}
			}
			return i;
		}, t.U.P = {}, t.U.P.moveTo = function(e, t, n) {
			e.cmds.push("M"), e.crds.push(t, n);
		}, t.U.P.lineTo = function(e, t, n) {
			e.cmds.push("L"), e.crds.push(t, n);
		}, t.U.P.curveTo = function(e, t, n, r, i, a, o) {
			e.cmds.push("C"), e.crds.push(t, n, r, i, a, o);
		}, t.U.P.qcurveTo = function(e, t, n, r, i) {
			e.cmds.push("Q"), e.crds.push(t, n, r, i);
		}, t.U.P.closePath = function(e) {
			e.cmds.push("Z");
		}, t.U._drawCFF = function(e, n, r, i, a) {
			for (var o = n.stack, s = n.nStems, c = n.haveWidth, l = n.width, u = n.open, d = 0, f = n.x, p = n.y, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0, S = 0, C = 0, w = {
				val: 0,
				size: 0
			}; d < e.length;) {
				t.CFF.getCharString(e, d, w);
				var T = w.val;
				if (d += w.size, T == "o1" || T == "o18") o.length % 2 != 0 && !c && (l = o.shift() + i.nominalWidthX), s += o.length >> 1, o.length = 0, c = !0;
				else if (T == "o3" || T == "o23") o.length % 2 != 0 && !c && (l = o.shift() + i.nominalWidthX), s += o.length >> 1, o.length = 0, c = !0;
				else if (T == "o4") o.length > 1 && !c && (l = o.shift() + i.nominalWidthX, c = !0), u && t.U.P.closePath(a), p += o.pop(), t.U.P.moveTo(a, f, p), u = !0;
				else if (T == "o5") for (; o.length > 0;) f += o.shift(), p += o.shift(), t.U.P.lineTo(a, f, p);
				else if (T == "o6" || T == "o7") for (var E = o.length, D = T == "o6", O = 0; O < E; O++) {
					var k = o.shift();
					D ? f += k : p += k, D = !D, t.U.P.lineTo(a, f, p);
				}
				else if (T == "o8" || T == "o24") {
					E = o.length;
					for (var A = 0; A + 6 <= E;) m = f + o.shift(), h = p + o.shift(), g = m + o.shift(), _ = h + o.shift(), f = g + o.shift(), p = _ + o.shift(), t.U.P.curveTo(a, m, h, g, _, f, p), A += 6;
					T == "o24" && (f += o.shift(), p += o.shift(), t.U.P.lineTo(a, f, p));
				} else {
					if (T == "o11") break;
					if (T == "o1234" || T == "o1235" || T == "o1236" || T == "o1237") T == "o1234" && (h = p, g = (m = f + o.shift()) + o.shift(), C = _ = h + o.shift(), y = _, x = p, f = (b = (v = (S = g + o.shift()) + o.shift()) + o.shift()) + o.shift(), t.U.P.curveTo(a, m, h, g, _, S, C), t.U.P.curveTo(a, v, y, b, x, f, p)), T == "o1235" && (m = f + o.shift(), h = p + o.shift(), g = m + o.shift(), _ = h + o.shift(), S = g + o.shift(), C = _ + o.shift(), v = S + o.shift(), y = C + o.shift(), b = v + o.shift(), x = y + o.shift(), f = b + o.shift(), p = x + o.shift(), o.shift(), t.U.P.curveTo(a, m, h, g, _, S, C), t.U.P.curveTo(a, v, y, b, x, f, p)), T == "o1236" && (m = f + o.shift(), h = p + o.shift(), g = m + o.shift(), C = _ = h + o.shift(), y = _, b = (v = (S = g + o.shift()) + o.shift()) + o.shift(), x = y + o.shift(), f = b + o.shift(), t.U.P.curveTo(a, m, h, g, _, S, C), t.U.P.curveTo(a, v, y, b, x, f, p)), T == "o1237" && (m = f + o.shift(), h = p + o.shift(), g = m + o.shift(), _ = h + o.shift(), S = g + o.shift(), C = _ + o.shift(), v = S + o.shift(), y = C + o.shift(), b = v + o.shift(), x = y + o.shift(), Math.abs(b - f) > Math.abs(x - p) ? f = b + o.shift() : p = x + o.shift(), t.U.P.curveTo(a, m, h, g, _, S, C), t.U.P.curveTo(a, v, y, b, x, f, p));
					else if (T == "o14") {
						if (o.length > 0 && !c && (l = o.shift() + r.nominalWidthX, c = !0), o.length == 4) {
							var j = o.shift(), ee = o.shift(), te = o.shift(), ne = o.shift(), re = t.CFF.glyphBySE(r, te), M = t.CFF.glyphBySE(r, ne);
							t.U._drawCFF(r.CharStrings[re], n, r, i, a), n.x = j, n.y = ee, t.U._drawCFF(r.CharStrings[M], n, r, i, a);
						}
						u &&= (t.U.P.closePath(a), !1);
					} else if (T == "o19" || T == "o20") o.length % 2 != 0 && !c && (l = o.shift() + i.nominalWidthX), s += o.length >> 1, o.length = 0, c = !0, d += s + 7 >> 3;
					else if (T == "o21") o.length > 2 && !c && (l = o.shift() + i.nominalWidthX, c = !0), p += o.pop(), f += o.pop(), u && t.U.P.closePath(a), t.U.P.moveTo(a, f, p), u = !0;
					else if (T == "o22") o.length > 1 && !c && (l = o.shift() + i.nominalWidthX, c = !0), f += o.pop(), u && t.U.P.closePath(a), t.U.P.moveTo(a, f, p), u = !0;
					else if (T == "o25") {
						for (; o.length > 6;) f += o.shift(), p += o.shift(), t.U.P.lineTo(a, f, p);
						m = f + o.shift(), h = p + o.shift(), g = m + o.shift(), _ = h + o.shift(), f = g + o.shift(), p = _ + o.shift(), t.U.P.curveTo(a, m, h, g, _, f, p);
					} else if (T == "o26") for (o.length % 2 && (f += o.shift()); o.length > 0;) m = f, h = p + o.shift(), f = g = m + o.shift(), p = (_ = h + o.shift()) + o.shift(), t.U.P.curveTo(a, m, h, g, _, f, p);
					else if (T == "o27") for (o.length % 2 && (p += o.shift()); o.length > 0;) h = p, g = (m = f + o.shift()) + o.shift(), _ = h + o.shift(), f = g + o.shift(), p = _, t.U.P.curveTo(a, m, h, g, _, f, p);
					else if (T == "o10" || T == "o29") {
						var N = T == "o10" ? i : r;
						if (o.length == 0) console.debug("error: empty stack");
						else {
							var ie = o.pop(), P = N.Subrs[ie + N.Bias];
							n.x = f, n.y = p, n.nStems = s, n.haveWidth = c, n.width = l, n.open = u, t.U._drawCFF(P, n, r, i, a), f = n.x, p = n.y, s = n.nStems, c = n.haveWidth, l = n.width, u = n.open;
						}
					} else if (T == "o30" || T == "o31") {
						var F = o.length, ae = (A = 0, T == "o31");
						for (A += F - (E = -3 & F); A < E;) ae ? (h = p, g = (m = f + o.shift()) + o.shift(), p = (_ = h + o.shift()) + o.shift(), E - A == 5 ? (f = g + o.shift(), A++) : f = g, ae = !1) : (m = f, h = p + o.shift(), g = m + o.shift(), _ = h + o.shift(), f = g + o.shift(), E - A == 5 ? (p = _ + o.shift(), A++) : p = _, ae = !0), t.U.P.curveTo(a, m, h, g, _, f, p), A += 4;
					} else {
						if ((T + "").charAt(0) == "o") throw console.debug("Unknown operation: " + T, e), T;
						o.push(T);
					}
				}
			}
			n.x = f, n.y = p, n.nStems = s, n.haveWidth = c, n.width = l, n.open = u;
		};
		var n = t, r = { Typr: n };
		return e.Typr = n, e.default = r, Object.defineProperty(e, "__esModule", { value: !0 }), e;
	}({}).Typr;
}
function ft() {
	return function(e) {
		var t = Uint8Array, n = Uint16Array, r = Uint32Array, i = new t([
			0,
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
			2,
			2,
			2,
			2,
			3,
			3,
			3,
			3,
			4,
			4,
			4,
			4,
			5,
			5,
			5,
			5,
			0,
			0,
			0,
			0
		]), a = new t([
			0,
			0,
			0,
			0,
			1,
			1,
			2,
			2,
			3,
			3,
			4,
			4,
			5,
			5,
			6,
			6,
			7,
			7,
			8,
			8,
			9,
			9,
			10,
			10,
			11,
			11,
			12,
			12,
			13,
			13,
			0,
			0
		]), o = new t([
			16,
			17,
			18,
			0,
			8,
			7,
			9,
			6,
			10,
			5,
			11,
			4,
			12,
			3,
			13,
			2,
			14,
			1,
			15
		]), s = function(e, t) {
			for (var i = new n(31), a = 0; a < 31; ++a) i[a] = t += 1 << e[a - 1];
			var o = new r(i[30]);
			for (a = 1; a < 30; ++a) for (var s = i[a]; s < i[a + 1]; ++s) o[s] = s - i[a] << 5 | a;
			return [i, o];
		}, c = s(i, 2), l = c[0], u = c[1];
		l[28] = 258, u[258] = 28;
		for (var d = s(a, 0)[0], f = new n(32768), p = 0; p < 32768; ++p) {
			var m = (43690 & p) >>> 1 | (21845 & p) << 1;
			m = (61680 & (m = (52428 & m) >>> 2 | (13107 & m) << 2)) >>> 4 | (3855 & m) << 4, f[p] = ((65280 & m) >>> 8 | (255 & m) << 8) >>> 1;
		}
		var h = function(e, t, r) {
			for (var i = e.length, a = 0, o = new n(t); a < i; ++a) ++o[e[a] - 1];
			var s, c = new n(t);
			for (a = 0; a < t; ++a) c[a] = c[a - 1] + o[a - 1] << 1;
			if (r) {
				s = new n(1 << t);
				var l = 15 - t;
				for (a = 0; a < i; ++a) if (e[a]) for (var u = a << 4 | e[a], d = t - e[a], p = c[e[a] - 1]++ << d, m = p | (1 << d) - 1; p <= m; ++p) s[f[p] >>> l] = u;
			} else for (s = new n(i), a = 0; a < i; ++a) e[a] && (s[a] = f[c[e[a] - 1]++] >>> 15 - e[a]);
			return s;
		}, g = new t(288);
		for (p = 0; p < 144; ++p) g[p] = 8;
		for (p = 144; p < 256; ++p) g[p] = 9;
		for (p = 256; p < 280; ++p) g[p] = 7;
		for (p = 280; p < 288; ++p) g[p] = 8;
		var _ = new t(32);
		for (p = 0; p < 32; ++p) _[p] = 5;
		var v = h(g, 9, 1), y = h(_, 5, 1), b = function(e) {
			for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
			return t;
		}, x = function(e, t, n) {
			var r = t / 8 | 0;
			return (e[r] | e[r + 1] << 8) >> (7 & t) & n;
		}, S = function(e, t) {
			var n = t / 8 | 0;
			return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (7 & t);
		}, C = [
			"unexpected EOF",
			"invalid block type",
			"invalid length/literal",
			"invalid distance",
			"stream finished",
			"no stream handler",
			,
			"no callback",
			"invalid UTF-8 data",
			"extra field too long",
			"date not in range 1980-2099",
			"filename too long",
			"stream finishing",
			"invalid zip data"
		], w = function(e, t, n) {
			var r = Error(t || C[e]);
			if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, w), !n) throw r;
			return r;
		}, T = function(e, s, c) {
			var u = e.length;
			if (!u || c && !c.l && u < 5) return s || new t(0);
			var f = !s || c, p = !c || c.i;
			c ||= {}, s ||= new t(3 * u);
			var m, g = function(e) {
				var n = s.length;
				if (e > n) {
					var r = new t(Math.max(2 * n, e));
					r.set(s), s = r;
				}
			}, _ = c.f || 0, C = c.p || 0, T = c.b || 0, E = c.l, D = c.d, O = c.m, k = c.n, A = 8 * u;
			do {
				if (!E) {
					c.f = _ = x(e, C, 1);
					var j = x(e, C + 1, 3);
					if (C += 3, !j) {
						var ee = e[(L = ((m = C) / 8 | 0) + (7 & m && 1) + 4) - 4] | e[L - 3] << 8, te = L + ee;
						if (te > u) {
							p && w(0);
							break;
						}
						f && g(T + ee), s.set(e.subarray(L, te), T), c.b = T += ee, c.p = C = 8 * te;
						continue;
					}
					if (j == 1) E = v, D = y, O = 9, k = 5;
					else if (j == 2) {
						var ne = x(e, C, 31) + 257, re = x(e, C + 10, 15) + 4, M = ne + x(e, C + 5, 31) + 1;
						C += 14;
						for (var N = new t(M), ie = new t(19), P = 0; P < re; ++P) ie[o[P]] = x(e, C + 3 * P, 7);
						C += 3 * re;
						var F = b(ie), ae = (1 << F) - 1, I = h(ie, F, 1);
						for (P = 0; P < M;) {
							var L, oe = I[x(e, C, ae)];
							if (C += 15 & oe, (L = oe >>> 4) < 16) N[P++] = L;
							else {
								var R = 0, z = 0;
								for (L == 16 ? (z = 3 + x(e, C, 3), C += 2, R = N[P - 1]) : L == 17 ? (z = 3 + x(e, C, 7), C += 3) : L == 18 && (z = 11 + x(e, C, 127), C += 7); z--;) N[P++] = R;
							}
						}
						var B = N.subarray(0, ne), V = N.subarray(ne);
						O = b(B), k = b(V), E = h(B, O, 1), D = h(V, k, 1);
					} else w(1);
					if (C > A) {
						p && w(0);
						break;
					}
				}
				f && g(T + 131072);
				for (var H = (1 << O) - 1, se = (1 << k) - 1, ce = C;; ce = C) {
					var U = (R = E[S(e, C) & H]) >>> 4;
					if ((C += 15 & R) > A) {
						p && w(0);
						break;
					}
					if (R || w(2), U < 256) s[T++] = U;
					else {
						if (U == 256) {
							ce = C, E = null;
							break;
						}
						var W = U - 254;
						if (U > 264) {
							var le = i[P = U - 257];
							W = x(e, C, (1 << le) - 1) + l[P], C += le;
						}
						var ue = D[S(e, C) & se], de = ue >>> 4;
						if (ue || w(3), C += 15 & ue, V = d[de], de > 3 && (le = a[de], V += S(e, C) & (1 << le) - 1, C += le), C > A) {
							p && w(0);
							break;
						}
						f && g(T + 131072);
						for (var fe = T + W; T < fe; T += 4) s[T] = s[T - V], s[T + 1] = s[T + 1 - V], s[T + 2] = s[T + 2 - V], s[T + 3] = s[T + 3 - V];
						T = fe;
					}
				}
				c.l = E, c.p = ce, c.b = T, E && (_ = 1, c.m = O, c.d = D, c.n = k);
			} while (!_);
			return T == s.length ? s : function(e, i, a) {
				(i == null || i < 0) && (i = 0), (a == null || a > e.length) && (a = e.length);
				var o = new (e instanceof n ? n : e instanceof r ? r : t)(a - i);
				return o.set(e.subarray(i, a)), o;
			}(s, 0, T);
		}, E = new t(0), D = typeof TextDecoder < "u" && new TextDecoder();
		try {
			D.decode(E, { stream: !0 });
		} catch {}
		return e.convert_streams = function(e) {
			var t = new DataView(e), n = 0;
			function r() {
				var e = t.getUint16(n);
				return n += 2, e;
			}
			function i() {
				var e = t.getUint32(n);
				return n += 4, e;
			}
			function a(e) {
				_.setUint16(v, e), v += 2;
			}
			function o(e) {
				_.setUint32(v, e), v += 4;
			}
			for (var s = {
				signature: i(),
				flavor: i(),
				length: i(),
				numTables: r(),
				reserved: r(),
				totalSfntSize: i(),
				majorVersion: r(),
				minorVersion: r(),
				metaOffset: i(),
				metaLength: i(),
				metaOrigLength: i(),
				privOffset: i(),
				privLength: i()
			}, c = 0; 2 ** c <= s.numTables;) c++;
			c--;
			for (var l = 16 * 2 ** c, u = 16 * s.numTables - l, d = 12, f = [], p = 0; p < s.numTables; p++) f.push({
				tag: i(),
				offset: i(),
				compLength: i(),
				origLength: i(),
				origChecksum: i()
			}), d += 16;
			var m, h = new Uint8Array(12 + 16 * f.length + f.reduce((function(e, t) {
				return e + t.origLength + 4;
			}), 0)), g = h.buffer, _ = new DataView(g), v = 0;
			return o(s.flavor), a(s.numTables), a(l), a(c), a(u), f.forEach((function(e) {
				o(e.tag), o(e.origChecksum), o(d), o(e.origLength), e.outOffset = d, (d += e.origLength) % 4 != 0 && (d += 4 - d % 4);
			})), f.forEach((function(t) {
				var n, r = e.slice(t.offset, t.offset + t.compLength);
				if (t.compLength != t.origLength) {
					var i = new Uint8Array(t.origLength);
					n = new Uint8Array(r, 2), T(n, i);
				} else i = new Uint8Array(r);
				h.set(i, t.outOffset);
				var a = 0;
				(d = t.outOffset + t.origLength) % 4 != 0 && (a = 4 - d % 4), h.set(new Uint8Array(a).buffer, t.outOffset + t.origLength), m = d + a;
			})), g.slice(0, m);
		}, Object.defineProperty(e, "__esModule", { value: !0 }), e;
	}({}).convert_streams;
}
function pt(e, t) {
	let n = {
		M: 2,
		L: 2,
		Q: 4,
		C: 6,
		Z: 0
	}, r = {
		C: "18g,ca,368,1kz",
		D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",
		R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",
		L: "x9u,jff,a,fd,jv",
		T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"
	}, i;
	function a(e) {
		if (!i) {
			let e = {
				R: 2,
				L: 1,
				D: 4,
				C: 16,
				U: 32,
				T: 8
			};
			i = /* @__PURE__ */ new Map();
			for (let t in r) {
				let n = 0;
				r[t].split(",").forEach((r) => {
					let [a, o] = r.split("+");
					a = parseInt(a, 36), o = o ? parseInt(o, 36) : 0, i.set(n += a, e[t]);
					for (let r = o; r--;) i.set(++n, e[t]);
				});
			}
		}
		return i.get(e) || 32;
	}
	let o = [
		null,
		"isol",
		"init",
		"fina",
		"medi"
	];
	function s(e) {
		let t = new Uint8Array(e.length), n = 32, r = 1, i = -1;
		for (let o = 0; o < e.length; o++) {
			let s = e.codePointAt(o), c = a(s) | 0, l = 1;
			c & 8 || (n & 21 ? c & 22 ? (l = 3, (r === 1 || r === 3) && t[i]++) : c & 33 && (r === 2 || r === 4) && t[i]-- : n & 34 && (r === 2 || r === 4) && t[i]--, r = t[o] = l, n = c, i = o, s > 65535 && o++);
		}
		return t;
	}
	function c(t, n) {
		let r = [];
		for (let i = 0; i < n.length; i++) {
			let a = n.codePointAt(i);
			a > 65535 && i++, r.push(e.U.codeToGlyph(t, a));
		}
		let i = t.GSUB;
		if (i) {
			let { lookupList: t, featureList: a } = i, c, l = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, u = [];
			a.forEach((i) => {
				if (l.test(i.tag)) for (let a = 0; a < i.tab.length; a++) {
					if (u[i.tab[a]]) continue;
					u[i.tab[a]] = !0;
					let l = t[i.tab[a]], d = /^(isol|init|fina|medi)$/.test(i.tag);
					d && !c && (c = s(n));
					for (let n = 0; n < r.length; n++) (!c || !d || o[c[n]] === i.tag) && e.U._applySubs(r, n, l, t);
				}
			});
		}
		return r;
	}
	function l(t, n) {
		let r = new Int16Array(n.length * 3), i = 0;
		for (; i < n.length; i++) {
			let c = n[i];
			if (c === -1) continue;
			r[i * 3 + 2] = t.hmtx.aWidth[c];
			let l = t.GPOS;
			if (l) {
				let d = l.lookupList;
				for (let l = 0; l < d.length; l++) {
					let f = d[l];
					for (let l = 0; l < f.tabs.length; l++) {
						let d = f.tabs[l];
						if (f.ltype === 1) {
							if (e._lctf.coverageIndex(d.coverage, c) !== -1 && d.pos) {
								s(d.pos, i);
								break;
							}
						} else if (f.ltype === 2) {
							let t = null, r = a();
							if (r !== -1) {
								let a = e._lctf.coverageIndex(d.coverage, n[r]);
								if (a !== -1) {
									if (d.fmt === 1) {
										let e = d.pairsets[a];
										for (let n = 0; n < e.length; n++) e[n].gid2 === c && (t = e[n]);
									} else if (d.fmt === 2) {
										let i = e.U._getGlyphClass(n[r], d.classDef1), a = e.U._getGlyphClass(c, d.classDef2);
										t = d.matrix[i][a];
									}
									if (t) {
										t.val1 && s(t.val1, r), t.val2 && s(t.val2, i);
										break;
									}
								}
							}
						} else if (f.ltype === 4) {
							let t = e._lctf.coverageIndex(d.markCoverage, c);
							if (t !== -1) {
								let s = a(o), c = s === -1 ? -1 : e._lctf.coverageIndex(d.baseCoverage, n[s]);
								if (c !== -1) {
									let e = d.markArray[t], n = d.baseArray[c][e.markClass];
									r[i * 3] = n.x - e.x + r[s * 3] - r[s * 3 + 2], r[i * 3 + 1] = n.y - e.y + r[s * 3 + 1];
									break;
								}
							}
						} else if (f.ltype === 6) {
							let o = e._lctf.coverageIndex(d.mark1Coverage, c);
							if (o !== -1) {
								let s = a();
								if (s !== -1) {
									let a = n[s];
									if (u(t, a) === 3) {
										let t = e._lctf.coverageIndex(d.mark2Coverage, a);
										if (t !== -1) {
											let e = d.mark1Array[o], n = d.mark2Array[t][e.markClass];
											r[i * 3] = n.x - e.x + r[s * 3] - r[s * 3 + 2], r[i * 3 + 1] = n.y - e.y + r[s * 3 + 1];
											break;
										}
									}
								}
							}
						}
					}
				}
			} else if (t.kern && !t.cff) {
				let e = a();
				if (e !== -1) {
					let i = t.kern.glyph1.indexOf(n[e]);
					if (i !== -1) {
						let n = t.kern.rval[i].glyph2.indexOf(c);
						n !== -1 && (r[e * 3 + 2] += t.kern.rval[i].vals[n]);
					}
				}
			}
		}
		return r;
		function a(e) {
			for (let t = i - 1; t >= 0; t--) if (n[t] !== -1 && (!e || e(n[t]))) return t;
			return -1;
		}
		function o(e) {
			return u(t, e) === 1;
		}
		function s(e, t) {
			for (let n = 0; n < 3; n++) r[t * 3 + n] += e[n] || 0;
		}
	}
	function u(t, n) {
		let r = t.GDEF && t.GDEF.glyphClassDef;
		return r ? e.U._getGlyphClass(n, r) : 0;
	}
	function d(...e) {
		for (let t = 0; t < e.length; t++) if (typeof e[t] == "number") return e[t];
	}
	function f(t) {
		let r = Object.create(null), i = t["OS/2"], a = t.hhea, o = t.head.unitsPerEm, s = d(i && i.sTypoAscender, a && a.ascender, o), u = {
			unitsPerEm: o,
			ascender: s,
			descender: d(i && i.sTypoDescender, a && a.descender, 0),
			capHeight: d(i && i.sCapHeight, s),
			xHeight: d(i && i.sxHeight, s),
			lineGap: d(i && i.sTypoLineGap, a && a.lineGap),
			supportsCodePoint(n) {
				return e.U.codeToGlyph(t, n) > 0;
			},
			forEachGlyph(i, a, o, s) {
				let d = 0, f = 1 / u.unitsPerEm * a, p = c(t, i), m = 0, h = l(t, p);
				return p.forEach((c, l) => {
					if (c !== -1) {
						let i = r[c];
						if (!i) {
							let { cmds: a, crds: o } = e.U.glyphToPath(t, c), s = "", l = 0;
							for (let e = 0, t = a.length; e < t; e++) {
								let t = n[a[e]];
								s += a[e];
								for (let e = 1; e <= t; e++) s += (e > 1 ? "," : "") + o[l++];
							}
							let u, d, f, p;
							if (o.length) {
								u = d = Infinity, f = p = -Infinity;
								for (let e = 0, t = o.length; e < t; e += 2) {
									let t = o[e], n = o[e + 1];
									t < u && (u = t), n < d && (d = n), t > f && (f = t), n > p && (p = n);
								}
							} else u = f = d = p = 0;
							i = r[c] = {
								index: c,
								advanceWidth: t.hmtx.aWidth[c],
								xMin: u,
								yMin: d,
								xMax: f,
								yMax: p,
								path: s
							};
						}
						s.call(null, i, d + h[l * 3] * f, h[l * 3 + 1] * f, m), d += h[l * 3 + 2] * f, o && (d += o * a);
					}
					m += i.codePointAt(m) > 65535 ? 2 : 1;
				}), d;
			}
		};
		return u;
	}
	return function(n) {
		let r = new Uint8Array(n, 0, 4), i = e._bin.readASCII(r, 0, 4);
		if (i === "wOFF") n = t(n);
		else if (i === "wOF2") throw Error("woff2 fonts not supported");
		return f(e.parse(n)[0]);
	};
}
var mt = /*#__PURE__*/ Ue({
	name: "Typr Font Parser",
	dependencies: [
		dt,
		ft,
		pt
	],
	init(e, t, n) {
		return n(e(), t());
	}
});
function ht() {
	return function(e) {
		var t = function() {
			this.buckets = /* @__PURE__ */ new Map();
		};
		t.prototype.add = function(e) {
			var t = e >> 5;
			this.buckets.set(t, (this.buckets.get(t) || 0) | 1 << (31 & e));
		}, t.prototype.has = function(e) {
			var t = this.buckets.get(e >> 5);
			return t !== void 0 && (t & 1 << (31 & e)) != 0;
		}, t.prototype.serialize = function() {
			var e = [];
			return this.buckets.forEach((function(t, n) {
				e.push((+n).toString(36) + ":" + t.toString(36));
			})), e.join(",");
		}, t.prototype.deserialize = function(e) {
			var t = this;
			this.buckets.clear(), e.split(",").forEach((function(e) {
				var n = e.split(":");
				t.buckets.set(parseInt(n[0], 36), parseInt(n[1], 36));
			}));
		};
		var n = 2 ** 8, r = n - 1, i = ~r;
		function a(e) {
			var t = function(e) {
				return e & i;
			}(e).toString(16), r = function(e) {
				return (e & i) + n - 1;
			}(e).toString(16);
			return "codepoint-index/plane" + (e >> 16) + "/" + t + "-" + r + ".json";
		}
		function o(e, t) {
			var n = e & r, i = t.codePointAt(n / 6 | 0);
			return ((i = (i || 48) - 48) & 1 << n % 6) != 0;
		}
		function s(e, t) {
			var n;
			(n = e, n.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(e) {
				return e.split("-").map((function(e) {
					return parseInt(e.trim(), 16);
				}));
			}))).forEach((function(e) {
				var n = e[0], r = e[1];
				r === void 0 && (r = n), t(n, r);
			}));
		}
		function c(e, t) {
			s(e, (function(e, n) {
				for (var r = e; r <= n; r++) t(r);
			}));
		}
		var l = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
		function p(e) {
			var n = d.get(e);
			return n || (n = new t(), c(e.ranges, (function(e) {
				return n.add(e);
			})), d.set(e, n)), n;
		}
		var m, h = /* @__PURE__ */ new Map();
		function g(e, t, n) {
			return e[t] ? t : e[n] ? n : function(e) {
				for (var t in e) return t;
			}(e);
		}
		function _(e, t) {
			var n = t;
			if (!e.includes(n)) {
				n = Infinity;
				for (var r = 0; r < e.length; r++) Math.abs(e[r] - t) < Math.abs(n - t) && (n = e[r]);
			}
			return n;
		}
		function v(e) {
			return m || (m = /* @__PURE__ */ new Set(), c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(e) {
				m.add(e);
			}))), m.has(e);
		}
		return e.CodePointSet = t, e.clearCache = function() {
			l = {}, u = {};
		}, e.getFontsForString = function(e, t) {
			t === void 0 && (t = {});
			var n, r = t.lang;
			r === void 0 && (r = /\p{Script=Hangul}/u.test(n = e) ? "ko" : /\p{Script=Hiragana}|\p{Script=Katakana}/u.test(n) ? "ja" : "en");
			var i = t.category;
			i === void 0 && (i = "sans-serif");
			var s = t.style;
			s === void 0 && (s = "normal");
			var c = t.weight;
			c === void 0 && (c = 400);
			var d = (t.dataUrl || f).replace(/\/$/g, ""), m = /* @__PURE__ */ new Map(), y = new Uint8Array(e.length), b = {}, x = {}, S = Array(e.length), C = /* @__PURE__ */ new Map(), w = !1;
			function T(e) {
				var t = h.get(e);
				return t || (t = fetch(d + "/" + e).then((function(e) {
					if (!e.ok) throw Error(e.statusText);
					return e.json().then((function(e) {
						if (!Array.isArray(e) || e[0] !== 1) throw Error("Incorrect schema version; need 1, got " + e[0]);
						return e[1];
					}));
				})).catch((function(t) {
					if (d !== f) return w ||= (console.error("unicode-font-resolver: Failed loading from dataUrl \"" + d + "\", trying default CDN. " + t.message), !0), d = f, h.delete(e), T(e);
					throw t;
				})), h.set(e, t)), t;
			}
			for (var E = function(t) {
				var n = e.codePointAt(t), r = a(n);
				S[t] = r, l[r] || C.has(r) || C.set(r, T(r).then((function(e) {
					l[r] = e;
				}))), n > 65535 && (t++, D = t);
			}, D = 0; D < e.length; D++) E(D);
			return Promise.all(C.values()).then((function() {
				C.clear();
				for (var t = function(t) {
					var i = e.codePointAt(t), a = null, s = l[S[t]], c = void 0;
					for (var d in s) {
						var f = x[d];
						if (f === void 0 && (f = x[d] = new RegExp(d).test(r || "en")), f) {
							for (var p in c = d, s[d]) if (o(i, s[d][p])) {
								a = p;
								break;
							}
							break;
						}
					}
					if (!a) {
						t: for (var m in s) if (m !== c) {
							for (var h in s[m]) if (o(i, s[m][h])) {
								a = h;
								break t;
							}
						}
					}
					a ||= (console.debug("No font coverage for U+" + i.toString(16)), "latin"), S[t] = a, u[a] || C.has(a) || C.set(a, T("font-meta/" + a + ".json").then((function(e) {
						u[a] = e;
					}))), i > 65535 && (t++, n = t);
				}, n = 0; n < e.length; n++) t(n);
				return Promise.all(C.values());
			})).then((function() {
				for (var t = null, n = 0; n < e.length; n++) {
					var r = e.codePointAt(n);
					if (t && (v(r) || p(t).has(r))) y[n] = y[n - 1];
					else {
						t = u[S[n]];
						var a = b[t.id];
						if (!a) {
							var o = t.typeforms, l = g(o, i, "sans-serif"), f = g(o[l], s, "normal"), h = _(o[l]?.[f], c);
							a = b[t.id] = d + "/font-files/" + t.id + "/" + l + "." + f + "." + h + ".woff";
						}
						var x = m.get(a);
						x ?? (x = m.size, m.set(a, x)), y[n] = x;
					}
					r > 65535 && (n++, y[n] = y[n - 1]);
				}
				return {
					fontUrls: Array.from(m.keys()),
					chars: y
				};
			}));
		}, Object.defineProperty(e, "__esModule", { value: !0 }), e;
	}({});
}
function gt(e, t) {
	let n = Object.create(null), r = Object.create(null);
	function i(t, n) {
		let r = (e) => {
			console.error(`Failure loading font ${t}`, e);
		};
		try {
			let i = new XMLHttpRequest();
			i.open("get", t, !0), i.responseType = "arraybuffer", i.onload = function() {
				if (i.status >= 400) r(Error(i.statusText));
				else if (i.status > 0) try {
					let r = e(i.response);
					r.src = t, n(r);
				} catch (e) {
					r(e);
				}
			}, i.onerror = r, i.send();
		} catch (e) {
			r(e);
		}
	}
	function a(e, t) {
		let a = n[e];
		a ? t(a) : r[e] ? r[e].push(t) : (r[e] = [t], i(e, (t) => {
			t.src = e, n[e] = t, r[e].forEach((e) => e(t)), delete r[e];
		}));
	}
	return function(e, r, { lang: i, fonts: o = [], style: s = "normal", weight: c = "normal", unicodeFontsURL: l } = {}) {
		let u = new Uint8Array(e.length), d = [];
		e.length || h();
		let f = /* @__PURE__ */ new Map(), p = [];
		if (s !== "italic" && (s = "normal"), typeof c != "number" && (c = c === "bold" ? 700 : 400), o && !Array.isArray(o) && (o = [o]), o = o.slice().filter((e) => !e.lang || e.lang.test(i)).reverse(), o.length) {
			let t = 0;
			(function r(i = 0) {
				for (let s = i, c = e.length; s < c; s++) {
					let i = e.codePointAt(s);
					if (t === 1 && d[u[s - 1]].supportsCodePoint(i) || s > 0 && /\s/.test(e[s])) u[s] = u[s - 1], t === 2 && (p[p.length - 1][1] = s);
					else for (let e = u[s], c = o.length; e <= c; e++) if (e === c) {
						let e = t === 2 ? p[p.length - 1] : p[p.length] = [s, s];
						e[1] = s, t = 2;
					} else {
						u[s] = e;
						let { src: c, unicodeRange: l } = o[e];
						if (!l || g(i, l)) {
							let e = n[c];
							if (!e) {
								a(c, () => {
									r(s);
								});
								return;
							}
							if (e.supportsCodePoint(i)) {
								let n = f.get(e);
								typeof n != "number" && (n = d.length, d.push(e), f.set(e, n)), u[s] = n, t = 1;
								break;
							}
						}
					}
					i > 65535 && s + 1 < c && (u[s + 1] = u[s], s++, t === 2 && (p[p.length - 1][1] = s));
				}
				m();
			})();
		} else p.push([0, e.length - 1]), m();
		function m() {
			if (p.length) {
				let n = p.map((t) => e.substring(t[0], t[1] + 1)).join("\n");
				t.getFontsForString(n, {
					lang: i || void 0,
					style: s,
					weight: c,
					dataUrl: l
				}).then(({ fontUrls: e, chars: t }) => {
					let n = d.length, r = 0;
					p.forEach((e) => {
						for (let i = 0, a = e[1] - e[0]; i <= a; i++) u[e[0] + i] = t[r++] + n;
						r++;
					});
					let i = 0;
					e.forEach((t, r) => {
						a(t, (t) => {
							d[r + n] = t, ++i === e.length && h();
						});
					});
				});
			} else h();
		}
		function h() {
			r({
				chars: u,
				fonts: d
			});
		}
		function g(e, t) {
			for (let n = 0; n < t.length; n++) {
				let [r, i = r] = t[n];
				if (r <= e && e <= i) return !0;
			}
			return !1;
		}
	};
}
var _t = /*#__PURE__*/ Ue({
	name: "FontResolver",
	dependencies: [
		gt,
		mt,
		ht
	],
	init(e, t, n) {
		return e(t, n());
	}
});
function vt(e, t) {
	let n = Infinity, r = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, i = "[^\\S\\u00A0]", a = RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
	function o({ text: t, lang: n, fonts: r, style: i, weight: a, preResolvedFonts: o, unicodeFontsURL: s }, c) {
		let l = ({ chars: e, fonts: t }) => {
			let n, r, i = [];
			for (let a = 0; a < e.length; a++) e[a] === r ? n.end = a : (r = e[a], i.push(n = {
				start: a,
				end: a,
				fontObj: t[e[a]]
			}));
			c(i);
		};
		o ? l(o) : e(t, l, {
			lang: n,
			fonts: r,
			style: i,
			weight: a,
			unicodeFontsURL: s
		});
	}
	function s({ text: e = "", font: s, lang: c, sdfGlyphSize: p = 64, fontSize: m = 400, fontWeight: h = 1, fontStyle: g = "normal", letterSpacing: _ = 0, lineHeight: v = "normal", maxWidth: y = n, direction: b, textAlign: x = "left", textIndent: S = 0, whiteSpace: C = "normal", overflowWrap: w = "normal", anchorX: T = 0, anchorY: E = 0, metricsOnly: D = !1, unicodeFontsURL: O, preResolvedFonts: k = null, includeCaretPositions: A = !1, chunkedBoundsSize: j = 8192, colorRanges: ee = null }, te) {
		let ne = d(), re = {
			fontLoad: 0,
			typesetting: 0
		};
		e.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n")), m = +m, _ = +_, y = +y, v ||= "normal", S = +S, o({
			text: e,
			lang: c,
			style: g,
			weight: h,
			fonts: typeof s == "string" ? [{ src: s }] : s,
			unicodeFontsURL: O,
			preResolvedFonts: k
		}, (o) => {
			re.fontLoad = d() - ne;
			let s = isFinite(y), c = null, p = null, h = null, g = null, O = null, k = null, M = null, N = null, ie = 0, P = 0, F = C !== "nowrap", ae = /* @__PURE__ */ new Map(), I = d(), L = S, oe = 0, R = new f(), z = [R];
			o.forEach((t) => {
				let { fontObj: n } = t, { ascender: o, descender: c, unitsPerEm: l, lineGap: u, capHeight: d, xHeight: p } = n, h = ae.get(n);
				if (!h) {
					let e = m / l, t = v === "normal" ? (o - c + u) * e : v * m, r = (t - (o - c) * e) / 2, i = Math.min(t, (o - c) * e), a = (o + c) / 2 * e + i / 2;
					h = {
						index: ae.size,
						src: n.src,
						fontObj: n,
						fontSizeMult: e,
						unitsPerEm: l,
						ascender: o * e,
						descender: c * e,
						capHeight: d * e,
						xHeight: p * e,
						lineHeight: t,
						baseline: -r - o * e,
						caretTop: a,
						caretBottom: a - i
					}, ae.set(n, h);
				}
				let { fontSizeMult: g } = h, b = e.slice(t.start, t.end + 1), x, C;
				n.forEachGlyph(b, m, _, (n, o, c, l) => {
					o += oe, l += t.start, x = o, C = n;
					let u = e.charAt(l), d = n.advanceWidth * g, p = R.count, v;
					if ("isEmpty" in n || (n.isWhitespace = !!u && RegExp(i).test(u), n.canBreakAfter = !!u && a.test(u), n.isEmpty = n.xMin === n.xMax || n.yMin === n.yMax || r.test(u)), !n.isWhitespace && !n.isEmpty && P++, F && s && !n.isWhitespace && o + d + L > y && p) {
						if (R.glyphAt(p - 1).glyphObj.canBreakAfter) v = new f(), L = -o;
						else for (let e = p; e--;) if (e === 0 && w === "break-word") {
							v = new f(), L = -o;
							break;
						} else if (R.glyphAt(e).glyphObj.canBreakAfter) {
							v = R.splitAt(e + 1);
							let t = v.glyphAt(0).x;
							L -= t;
							for (let e = v.count; e--;) v.glyphAt(e).x -= t;
							break;
						}
						v && (R.isSoftWrapped = !0, R = v, z.push(R), ie = y);
					}
					let b = R.glyphAt(R.count);
					b.glyphObj = n, b.x = o + L, b.y = c, b.width = d, b.charIndex = l, b.fontData = h, u === "\n" && (R = new f(), z.push(R), L = -(o + d + _ * m) + S);
				}), oe = x + C.advanceWidth * g + _ * m;
			});
			let B = 0;
			z.forEach((e) => {
				let t = !0;
				for (let n = e.count; n--;) {
					let r = e.glyphAt(n);
					t && !r.glyphObj.isWhitespace && (e.width = r.x + r.width, e.width > ie && (ie = e.width), t = !1);
					let { lineHeight: i, capHeight: a, xHeight: o, baseline: s } = r.fontData;
					i > e.lineHeight && (e.lineHeight = i);
					let c = s - e.baseline;
					c < 0 && (e.baseline += c, e.cap += c, e.ex += c), e.cap = Math.max(e.cap, e.baseline + a), e.ex = Math.max(e.ex, e.baseline + o);
				}
				e.baseline -= B, e.cap -= B, e.ex -= B, B += e.lineHeight;
			});
			let V = 0, H = 0;
			if (T && (typeof T == "number" ? V = -T : typeof T == "string" && (V = -ie * (T === "left" ? 0 : T === "center" ? .5 : T === "right" ? 1 : l(T)))), E && (typeof E == "number" ? H = -E : typeof E == "string" && (H = E === "top" ? 0 : E === "top-baseline" ? -z[0].baseline : E === "top-cap" ? -z[0].cap : E === "top-ex" ? -z[0].ex : E === "middle" ? B / 2 : E === "bottom" ? B : E === "bottom-baseline" ? -z[z.length - 1].baseline : l(E) * B)), !D) {
				let r = t.getEmbeddingLevels(e, b);
				c = new Uint16Array(P), p = new Uint8Array(P), h = new Float32Array(P * 2), g = {}, M = [
					n,
					n,
					-Infinity,
					-Infinity
				], N = [], A && (k = new Float32Array(e.length * 4)), ee && (O = new Uint8Array(P * 3));
				let i = 0, a = -1, o = -1, s, l;
				if (z.forEach((d, f) => {
					let { count: m, width: _ } = d;
					if (m > 0) {
						let f = 0;
						for (let e = m; e-- && d.glyphAt(e).glyphObj.isWhitespace;) f++;
						let v = 0, y = 0;
						if (x === "center") v = (ie - _) / 2;
						else if (x === "right") v = ie - _;
						else if (x === "justify" && d.isSoftWrapped) {
							let e = 0;
							for (let t = m - f; t--;) d.glyphAt(t).glyphObj.isWhitespace && e++;
							y = (ie - _) / e;
						}
						if (y || v) {
							let e = 0;
							for (let t = 0; t < m; t++) {
								let n = d.glyphAt(t), r = n.glyphObj;
								n.x += v + e, y !== 0 && r.isWhitespace && t < m - f && (e += y, n.width += y);
							}
						}
						let b = t.getReorderSegments(e, r, d.glyphAt(0).charIndex, d.glyphAt(d.count - 1).charIndex);
						for (let e = 0; e < b.length; e++) {
							let [t, n] = b[e], r = Infinity, i = -Infinity;
							for (let e = 0; e < m; e++) if (d.glyphAt(e).charIndex >= t) {
								let t = e, a = e;
								for (; a < m; a++) {
									let e = d.glyphAt(a);
									if (e.charIndex > n) break;
									a < m - f && (r = Math.min(r, e.x), i = Math.max(i, e.x + e.width));
								}
								for (let e = t; e < a; e++) {
									let t = d.glyphAt(e);
									t.x = i - (t.x + t.width - r);
								}
								break;
							}
						}
						let S, C = (e) => S = e;
						for (let f = 0; f < m; f++) {
							let m = d.glyphAt(f);
							S = m.glyphObj;
							let _ = S.index, v = r.levels[m.charIndex] & 1;
							if (v) {
								let n = t.getMirroredCharacter(e[m.charIndex]);
								n && m.fontData.fontObj.forEachGlyph(n, 0, 0, C);
							}
							if (A) {
								let { charIndex: e, fontData: t } = m, n = m.x + V, r = m.x + m.width + V;
								k[e * 4] = v ? r : n, k[e * 4 + 1] = v ? n : r, k[e * 4 + 2] = d.baseline + t.caretBottom + H, k[e * 4 + 3] = d.baseline + t.caretTop + H;
								let i = e - a;
								i > 1 && u(k, a, i), a = e;
							}
							if (ee) {
								let { charIndex: e } = m;
								for (; e > o;) o++, ee.hasOwnProperty(o) && (l = ee[o]);
							}
							if (!S.isWhitespace && !S.isEmpty) {
								let e = i++, { fontSizeMult: t, src: r, index: a } = m.fontData, o = g[r] || (g[r] = {});
								o[_] || (o[_] = {
									path: S.path,
									pathBounds: [
										S.xMin,
										S.yMin,
										S.xMax,
										S.yMax
									]
								});
								let u = m.x + V, f = m.y + d.baseline + H;
								h[e * 2] = u, h[e * 2 + 1] = f;
								let v = u + S.xMin * t, y = f + S.yMin * t, b = u + S.xMax * t, x = f + S.yMax * t;
								v < M[0] && (M[0] = v), y < M[1] && (M[1] = y), b > M[2] && (M[2] = b), x > M[3] && (M[3] = x), e % j === 0 && (s = {
									start: e,
									end: e,
									rect: [
										n,
										n,
										-Infinity,
										-Infinity
									]
								}, N.push(s)), s.end++;
								let C = s.rect;
								if (v < C[0] && (C[0] = v), y < C[1] && (C[1] = y), b > C[2] && (C[2] = b), x > C[3] && (C[3] = x), c[e] = _, p[e] = a, ee) {
									let t = e * 3;
									O[t] = l >> 16 & 255, O[t + 1] = l >> 8 & 255, O[t + 2] = l & 255;
								}
							}
						}
					}
				}), k) {
					let t = e.length - a;
					t > 1 && u(k, a, t);
				}
			}
			let se = [];
			ae.forEach(({ index: e, src: t, unitsPerEm: n, ascender: r, descender: i, lineHeight: a, capHeight: o, xHeight: s }) => {
				se[e] = {
					src: t,
					unitsPerEm: n,
					ascender: r,
					descender: i,
					lineHeight: a,
					capHeight: o,
					xHeight: s
				};
			}), re.typesetting = d() - I, te({
				glyphIds: c,
				glyphFontIndices: p,
				glyphPositions: h,
				glyphData: g,
				fontData: se,
				caretPositions: k,
				glyphColors: O,
				chunkedBounds: N,
				fontSize: m,
				topBaseline: H + z[0].baseline,
				blockBounds: [
					V,
					H - B,
					V + ie,
					H
				],
				visibleBounds: M,
				timings: re
			});
		});
	}
	function c(e, t) {
		s({
			...e,
			metricsOnly: !0
		}, (e) => {
			let [n, r, i, a] = e.blockBounds;
			t({
				width: i - n,
				height: a - r
			});
		});
	}
	function l(e) {
		let t = e.match(/^([\d.]+)%$/), n = t ? parseFloat(t[1]) : NaN;
		return isNaN(n) ? 0 : n / 100;
	}
	function u(e, t, n) {
		let r = e[t * 4], i = e[t * 4 + 1], a = e[t * 4 + 2], o = e[t * 4 + 3], s = (i - r) / n;
		for (let i = 0; i < n; i++) {
			let n = (t + i) * 4;
			e[n] = r + s * i, e[n + 1] = r + s * (i + 1), e[n + 2] = a, e[n + 3] = o;
		}
	}
	function d() {
		return (self.performance || Date).now();
	}
	function f() {
		this.data = [];
	}
	let p = [
		"glyphObj",
		"x",
		"y",
		"width",
		"charIndex",
		"fontData"
	];
	return f.prototype = {
		width: 0,
		lineHeight: 0,
		baseline: 0,
		cap: 0,
		ex: 0,
		isSoftWrapped: !1,
		get count() {
			return Math.ceil(this.data.length / p.length);
		},
		glyphAt(e) {
			let t = f.flyweight;
			return t.data = this.data, t.index = e, t;
		},
		splitAt(e) {
			let t = new f();
			return t.data = this.data.splice(e * p.length), t;
		}
	}, f.flyweight = p.reduce((e, t, n, r) => (Object.defineProperty(e, t, {
		get() {
			return this.data[this.index * p.length + n];
		},
		set(e) {
			this.data[this.index * p.length + n] = e;
		}
	}), e), {
		data: null,
		index: 0
	}), {
		typeset: s,
		measure: c
	};
}
var yt = () => (self.performance || Date).now(), bt = /*#__PURE__*/ Je(), xt;
function St(e, t, n, r, i, a, o, s, c, l, u = !0) {
	return u ? Dt(e, t, n, r, i, a, o, s, c, l).then(null, (u) => (xt ||= (console.warn("WebGL SDF generation failed, falling back to JS", u), !0), Mt(e, t, n, r, i, a, o, s, c, l))) : Mt(e, t, n, r, i, a, o, s, c, l);
}
var Ct = [], wt = 5, Tt = 0;
function Et() {
	let e = yt();
	for (; Ct.length && yt() - e < wt;) Ct.shift()();
	Tt = Ct.length ? setTimeout(Et, 0) : 0;
}
var Dt = (...e) => new Promise((t, n) => {
	Ct.push(() => {
		let r = yt();
		try {
			bt.webgl.generateIntoCanvas(...e), t({ timing: yt() - r });
		} catch (e) {
			n(e);
		}
	}), Tt ||= setTimeout(Et, 0);
}), Ot = 4, kt = 2e3, At = {}, jt = 0;
function Mt(e, t, n, r, i, a, o, s, c, l) {
	let u = "TroikaTextSDFGenerator_JS_" + jt++ % Ot, d = At[u];
	return d ||= At[u] = {
		workerModule: Ue({
			name: u,
			workerId: u,
			dependencies: [Je, yt],
			init(e, t) {
				let n = e().javascript.generate;
				return function(...e) {
					let r = t();
					return {
						textureData: n(...e),
						timing: t() - r
					};
				};
			},
			getTransferables(e) {
				return [e.textureData.buffer];
			}
		}),
		requests: 0,
		idleTimer: null
	}, d.requests++, clearTimeout(d.idleTimer), d.workerModule(e, t, n, r, i, a).then(({ textureData: n, timing: r }) => {
		let i = yt(), a = new Uint8Array(n.length * 4);
		for (let e = 0; e < n.length; e++) a[e * 4 + l] = n[e];
		return bt.webglUtils.renderImageData(o, a, s, c, e, t, 1 << 3 - l), r += yt() - i, --d.requests === 0 && (d.idleTimer = setTimeout(() => {
			We(u);
		}, kt)), { timing: r };
	});
}
function Nt(e) {
	e._warm ||= (bt.webgl.isSupported(e), !0);
}
var Pt = bt.webglUtils.resizeWebGLCanvasWithoutClearing, Ft = {
	defaultFontURL: null,
	unicodeFontsURL: null,
	sdfGlyphSize: 64,
	sdfMargin: 1 / 16,
	sdfExponent: 9,
	textureWidth: 2048,
	useWorker: !0
}, It = /*#__PURE__*/ new x();
function Lt() {
	return (self.performance || Date).now();
}
var Rt = Object.create(null);
function zt(e, t) {
	e = Ut({}, e);
	let n = Lt(), { defaultFontURL: r } = Ft, i = [];
	if (r && i.push({
		label: "default",
		src: Gt(r)
	}), e.font && i.push({
		label: "user",
		src: Gt(e.font)
	}), e.font = i, e.text = "" + e.text, e.sdfGlyphSize = e.sdfGlyphSize || Ft.sdfGlyphSize, e.unicodeFontsURL = e.unicodeFontsURL || Ft.unicodeFontsURL, e.colorRanges != null) {
		let t = {};
		for (let n in e.colorRanges) if (e.colorRanges.hasOwnProperty(n)) {
			let r = e.colorRanges[n];
			typeof r != "number" && (r = It.set(r).getHex()), t[n] = r;
		}
		e.colorRanges = t;
	}
	Object.freeze(e);
	let { textureWidth: a, sdfExponent: o } = Ft, { sdfGlyphSize: s } = e, c = a / s * 4, l = Rt[s];
	if (!l) {
		let e = document.createElement("canvas");
		e.width = a, e.height = s * 256 / c, l = Rt[s] = {
			glyphCount: 0,
			sdfGlyphSize: s,
			sdfCanvas: e,
			sdfTexture: new ee(e, void 0, void 0, void 0, g, g),
			contextLost: !1,
			glyphsByFont: /* @__PURE__ */ new Map()
		}, l.sdfTexture.generateMipmaps = !1, Vt(l);
	}
	let { sdfTexture: u, sdfCanvas: d } = l;
	(Ft.useWorker ? qt : Jt)(e).then((r) => {
		let { glyphIds: i, glyphFontIndices: f, fontData: p, glyphPositions: m, fontSize: h, timings: g } = r, _ = [], v = new Float32Array(i.length * 4), y = 0, b = 0, x = Lt(), S = p.map((e) => {
			let t = l.glyphsByFont.get(e.src);
			return t || l.glyphsByFont.set(e.src, t = /* @__PURE__ */ new Map()), t;
		});
		i.forEach((e, t) => {
			let n = f[t], { src: a, unitsPerEm: o } = p[n], c = S[n].get(e);
			if (!c) {
				let { path: t, pathBounds: i } = r.glyphData[a][e], o = Math.max(i[2] - i[0], i[3] - i[1]) / s * (Ft.sdfMargin * s + .5), u = l.glyphCount++, d = [
					i[0] - o,
					i[1] - o,
					i[2] + o,
					i[3] + o
				];
				S[n].set(e, c = {
					path: t,
					atlasIndex: u,
					sdfViewBox: d
				}), _.push(c);
			}
			let { sdfViewBox: u } = c, d = m[b++], g = m[b++], x = h / o;
			v[y++] = d + u[0] * x, v[y++] = g + u[1] * x, v[y++] = d + u[2] * x, v[y++] = g + u[3] * x, i[t] = c.atlasIndex;
		}), g.quads = (g.quads || 0) + (Lt() - x);
		let C = Lt();
		g.sdf = {};
		let w = d.height, T = Math.ceil(l.glyphCount / c), E = 2 ** Math.ceil(Math.log2(T * s));
		E > w && (console.info(`Increasing SDF texture size ${w}->${E}`), Pt(d, a, E), u.dispose()), Promise.all(_.map((t) => Bt(t, l, e.gpuAccelerateSDF).then(({ timing: e }) => {
			g.sdf[t.atlasIndex] = e;
		}))).then(() => {
			_.length && !l.contextLost && (Kt(l), u.needsUpdate = !0), g.sdfTotal = Lt() - C, g.total = Lt() - n, t(Object.freeze({
				parameters: e,
				sdfTexture: u,
				sdfGlyphSize: s,
				sdfExponent: o,
				glyphBounds: v,
				glyphAtlasIndices: i,
				glyphColors: r.glyphColors,
				caretPositions: r.caretPositions,
				chunkedBounds: r.chunkedBounds,
				ascender: r.ascender,
				descender: r.descender,
				lineHeight: r.lineHeight,
				capHeight: r.capHeight,
				xHeight: r.xHeight,
				topBaseline: r.topBaseline,
				blockBounds: r.blockBounds,
				visibleBounds: r.visibleBounds,
				timings: r.timings
			}));
		});
	}), Promise.resolve().then(() => {
		l.contextLost || Nt(d);
	});
}
function Bt({ path: e, atlasIndex: t, sdfViewBox: n }, { sdfGlyphSize: r, sdfCanvas: i, contextLost: a }, o) {
	if (a) return Promise.resolve({ timing: -1 });
	let { textureWidth: s, sdfExponent: c } = Ft, l = Math.max(n[2] - n[0], n[3] - n[1]), u = Math.floor(t / 4);
	return St(r, r, e, n, l, c, i, u % (s / r) * r, Math.floor(u / (s / r)) * r, t % 4, o);
}
function Vt(e) {
	let t = e.sdfCanvas;
	t.addEventListener("webglcontextlost", (t) => {
		console.log("Context Lost", t), t.preventDefault(), e.contextLost = !0;
	}), t.addEventListener("webglcontextrestored", (t) => {
		console.log("Context Restored", t), e.contextLost = !1;
		let n = [];
		e.glyphsByFont.forEach((t) => {
			t.forEach((t) => {
				n.push(Bt(t, e, !0));
			});
		}), Promise.all(n).then(() => {
			Kt(e), e.sdfTexture.needsUpdate = !0;
		});
	});
}
function Ht({ font: e, characters: t, sdfGlyphSize: n }, r) {
	zt({
		font: e,
		sdfGlyphSize: n,
		text: Array.isArray(t) ? t.join("\n") : "" + t
	}, r);
}
function Ut(e, t) {
	for (let n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	return e;
}
var Wt;
function Gt(e) {
	return Wt ||= typeof document > "u" ? {} : document.createElement("a"), Wt.href = e, Wt.href;
}
function Kt(e) {
	if (typeof createImageBitmap != "function") {
		console.info("Safari<15: applying SDF canvas workaround");
		let { sdfCanvas: t, sdfTexture: n } = e, { width: r, height: i } = t, a = e.sdfCanvas.getContext("webgl"), o = n.image.data;
		(!o || o.length !== r * i * 4) && (o = new Uint8Array(r * i * 4), n.image = {
			width: r,
			height: i,
			data: o
		}, n.flipY = !1, n.isDataTexture = !0), a.readPixels(0, 0, r, i, a.RGBA, a.UNSIGNED_BYTE, o);
	}
}
var qt = /*#__PURE__*/ Ue({
	name: "Typesetter",
	dependencies: [/* @__PURE__ */ Ue({
		name: "Typesetter",
		dependencies: [
			vt,
			_t,
			Ye
		],
		init(e, t, n) {
			return e(t, n());
		}
	})],
	init(e) {
		return function(t) {
			return new Promise((n) => {
				e.typeset(t, n);
			});
		};
	},
	getTransferables(e) {
		let t = [];
		for (let n in e) e[n] && e[n].buffer && t.push(e[n].buffer);
		return t;
	}
}), Jt = qt.onMainThread, Yt = {};
function Xt(e) {
	let t = Yt[e];
	return t ||= Yt[e] = new f(1, 1, e, e).translate(.5, .5, 0), t;
}
var Zt = "aTroikaGlyphBounds", Qt = "aTroikaGlyphIndex", $t = "aTroikaGlyphColor", en = class extends w {
	constructor() {
		super(), this.detail = 1, this.curveRadius = 0, this.groups = [{
			start: 0,
			count: Infinity,
			materialIndex: 0
		}, {
			start: 0,
			count: Infinity,
			materialIndex: 1
		}], this.boundingSphere = new L(), this.boundingBox = new p();
	}
	computeBoundingSphere() {}
	computeBoundingBox() {}
	set detail(e) {
		if (e !== this._detail) {
			this._detail = e, (typeof e != "number" || e < 1) && (e = 1);
			let t = Xt(e);
			[
				"position",
				"normal",
				"uv"
			].forEach((e) => {
				this.attributes[e] = t.attributes[e].clone();
			}), this.setIndex(t.getIndex().clone());
		}
	}
	get detail() {
		return this._detail;
	}
	set curveRadius(e) {
		e !== this._curveRadius && (this._curveRadius = e, this._updateBounds());
	}
	get curveRadius() {
		return this._curveRadius;
	}
	updateGlyphs(e, t, n, r, i) {
		this.updateAttributeData(Zt, e, 4), this.updateAttributeData(Qt, t, 1), this.updateAttributeData($t, i, 3), this._blockBounds = n, this._chunkedBounds = r, this.instanceCount = t.length, this._updateBounds();
	}
	_updateBounds() {
		let e = this._blockBounds;
		if (e) {
			let { curveRadius: t, boundingBox: n } = this;
			if (t) {
				let { PI: r, floor: i, min: a, max: o, sin: s, cos: c } = Math, l = r / 2, u = r * 2, d = Math.abs(t), f = e[0] / d, p = e[2] / d, m = i((f + l) / u) === i((p + l) / u) ? a(s(f) * d, s(p) * d) : -d, h = i((f - l) / u) === i((p - l) / u) ? o(s(f) * d, s(p) * d) : d, g = i((f + r) / u) === i((p + r) / u) ? o(d - c(f) * d, d - c(p) * d) : d * 2;
				n.min.set(m, e[1], t < 0 ? -g : 0), n.max.set(h, e[3], t < 0 ? 0 : g);
			} else n.min.set(e[0], e[1], 0), n.max.set(e[2], e[3], 0);
			n.getBoundingSphere(this.boundingSphere);
		}
	}
	applyClipRect(e) {
		let t = this.getAttribute(Qt).count, n = this._chunkedBounds;
		if (n) for (let r = n.length; r--;) {
			t = n[r].end;
			let i = n[r].rect;
			if (i[1] < e.w && i[3] > e.y && i[0] < e.z && i[2] > e.x) break;
		}
		this.instanceCount = t;
	}
	updateAttributeData(e, t, n) {
		let r = this.getAttribute(e);
		t ? r && r.array.length === t.length ? (r.array.set(t), r.needsUpdate = !0) : (this.setAttribute(e, new A(t, n)), delete this._maxInstanceCount, this.dispose()) : r && this.deleteAttribute(e);
	}
}, tn = "\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform vec4 uTroikaTotalBounds;\nuniform vec4 uTroikaClipRect;\nuniform mat3 uTroikaOrient;\nuniform bool uTroikaUseGlyphColors;\nuniform float uTroikaEdgeOffset;\nuniform float uTroikaBlurRadius;\nuniform vec2 uTroikaPositionOffset;\nuniform float uTroikaCurveRadius;\nattribute vec4 aTroikaGlyphBounds;\nattribute float aTroikaGlyphIndex;\nattribute vec3 aTroikaGlyphColor;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec3 vTroikaGlyphColor;\nvarying vec2 vTroikaGlyphDimensions;\n", nn = "\nvec4 bounds = aTroikaGlyphBounds;\nbounds.xz += uTroikaPositionOffset.x;\nbounds.yw -= uTroikaPositionOffset.y;\n\nvec4 outlineBounds = vec4(\n  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,\n  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius\n);\nvec4 clippedBounds = vec4(\n  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),\n  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)\n);\n\nvec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);\n\nposition.xy = mix(bounds.xy, bounds.zw, clippedXY);\n\nuv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);\n\nfloat rad = uTroikaCurveRadius;\nif (rad != 0.0) {\n  float angle = position.x / rad;\n  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);\n  normal.xz = vec2(sin(angle), cos(angle));\n}\n  \nposition = uTroikaOrient * position;\nnormal = uTroikaOrient * normal;\n\nvTroikaGlyphUV = clippedXY.xy;\nvTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);\n\n\nfloat txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;\nvec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;\nvec2 txStartUV = txUvPerSquare * vec2(\n  mod(floor(aTroikaGlyphIndex / 4.0), txCols),\n  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)\n);\nvTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);\nvTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);\n", rn = "\nuniform sampler2D uTroikaSDFTexture;\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform float uTroikaSDFExponent;\nuniform float uTroikaEdgeOffset;\nuniform float uTroikaFillOpacity;\nuniform float uTroikaBlurRadius;\nuniform vec3 uTroikaStrokeColor;\nuniform float uTroikaStrokeWidth;\nuniform float uTroikaStrokeOpacity;\nuniform bool uTroikaSDFDebug;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec2 vTroikaGlyphDimensions;\n\nfloat troikaSdfValueToSignedDistance(float alpha) {\n  // Inverse of exponential encoding in webgl-sdf-generator\n  \n  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);\n  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;\n  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);\n  return signedDist;\n}\n\nfloat troikaGlyphUvToSdfValue(vec2 glyphUV) {\n  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);\n  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);\n  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1\n  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;\n}\n\nfloat troikaGlyphUvToDistance(vec2 uv) {\n  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));\n}\n\nfloat troikaGetAADist() {\n  \n  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300\n  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;\n  #else\n  return vTroikaGlyphDimensions.x / 64.0;\n  #endif\n}\n\nfloat troikaGetFragDistValue() {\n  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);\n  float distance = troikaGlyphUvToDistance(clampedGlyphUV);\n \n  // Extrapolate distance when outside bounds:\n  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : \n    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);\n\n  \n\n  return distance;\n}\n\nfloat troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {\n  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)\n  float alpha = step(-distanceOffset, -distance);\n  #else\n\n  float alpha = smoothstep(\n    distanceOffset + aaDist,\n    distanceOffset - aaDist,\n    distance\n  );\n  #endif\n\n  return alpha;\n}\n", an = "\nfloat aaDist = troikaGetAADist();\nfloat fragDistance = troikaGetFragDistValue();\nfloat edgeAlpha = uTroikaSDFDebug ?\n  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :\n  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));\n\n#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)\nvec4 fillRGBA = gl_FragColor;\nfillRGBA.a *= uTroikaFillOpacity;\nvec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);\nif (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;\ngl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(\n  -uTroikaStrokeWidth - aaDist,\n  -uTroikaStrokeWidth + aaDist,\n  fragDistance\n));\ngl_FragColor.a *= edgeAlpha;\n#endif\n\nif (edgeAlpha == 0.0) {\n  discard;\n}\n";
function on(e) {
	let t = it(e, {
		chained: !0,
		extensions: { derivatives: !0 },
		uniforms: {
			uTroikaSDFTexture: { value: null },
			uTroikaSDFTextureSize: { value: new c() },
			uTroikaSDFGlyphSize: { value: 0 },
			uTroikaSDFExponent: { value: 0 },
			uTroikaTotalBounds: { value: new I(0, 0, 0, 0) },
			uTroikaClipRect: { value: new I(0, 0, 0, 0) },
			uTroikaEdgeOffset: { value: 0 },
			uTroikaFillOpacity: { value: 1 },
			uTroikaPositionOffset: { value: new c() },
			uTroikaCurveRadius: { value: 0 },
			uTroikaBlurRadius: { value: 0 },
			uTroikaStrokeWidth: { value: 0 },
			uTroikaStrokeColor: { value: new x() },
			uTroikaStrokeOpacity: { value: 1 },
			uTroikaOrient: { value: new ne() },
			uTroikaUseGlyphColors: { value: !0 },
			uTroikaSDFDebug: { value: !1 }
		},
		vertexDefs: tn,
		vertexTransform: nn,
		fragmentDefs: rn,
		fragmentColorTransform: an,
		customRewriter({ vertexShader: e, fragmentShader: t }) {
			let n = /\buniform\s+vec3\s+diffuse\b/;
			return n.test(t) && (t = t.replace(n, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), n.test(e) || (e = e.replace(Xe, "uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n"))), {
				vertexShader: e,
				fragmentShader: t
			};
		}
	});
	return t.transparent = !0, t.forceSinglePass = !0, Object.defineProperties(t, {
		isTroikaTextMaterial: { value: !0 },
		shadowSide: {
			get() {
				return this.side;
			},
			set() {}
		}
	}), t;
}
var sn = /*#__PURE__*/ new T({
	color: 16777215,
	side: 2,
	transparent: !0
}), cn = 8421504, ln = /*#__PURE__*/ new F(), un = /*#__PURE__*/ new D(), dn = /*#__PURE__*/ new D(), fn = [], pn = /*#__PURE__*/ new D(), mn = "+x+y";
function hn(e) {
	return Array.isArray(e) ? e[0] : e;
}
var gn = () => {
	let e = new j(new f(1, 1), sn);
	return gn = () => e, e;
}, _n = () => {
	let e = new j(new f(1, 1, 32, 1), sn);
	return _n = () => e, e;
}, vn = { type: "syncstart" }, yn = { type: "synccomplete" }, bn = [
	"font",
	"fontSize",
	"fontStyle",
	"fontWeight",
	"lang",
	"letterSpacing",
	"lineHeight",
	"maxWidth",
	"overflowWrap",
	"text",
	"direction",
	"textAlign",
	"textIndent",
	"whiteSpace",
	"anchorX",
	"anchorY",
	"colorRanges",
	"sdfGlyphSize"
], xn = bn.concat("material", "color", "depthOffset", "clipRect", "curveRadius", "orientation", "glyphGeometryDetail"), Sn = class extends j {
	constructor() {
		let e = new en();
		super(e, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = .1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = Infinity, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = cn, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = mn, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
	}
	sync(e) {
		this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs ||= []).push(e) : (this._isSyncing = !0, this.dispatchEvent(vn), zt({
			text: this.text,
			font: this.font,
			lang: this.lang,
			fontSize: this.fontSize || .1,
			fontWeight: this.fontWeight || "normal",
			fontStyle: this.fontStyle || "normal",
			letterSpacing: this.letterSpacing || 0,
			lineHeight: this.lineHeight || "normal",
			maxWidth: this.maxWidth,
			direction: this.direction || "auto",
			textAlign: this.textAlign,
			textIndent: this.textIndent,
			whiteSpace: this.whiteSpace,
			overflowWrap: this.overflowWrap,
			anchorX: this.anchorX,
			anchorY: this.anchorY,
			colorRanges: this.colorRanges,
			includeCaretPositions: !0,
			sdfGlyphSize: this.sdfGlyphSize,
			gpuAccelerateSDF: this.gpuAccelerateSDF,
			unicodeFontsURL: this.unicodeFontsURL
		}, (t) => {
			this._isSyncing = !1, this._textRenderInfo = t, this.geometry.updateGlyphs(t.glyphBounds, t.glyphAtlasIndices, t.blockBounds, t.chunkedBounds, t.glyphColors);
			let n = this._queuedSyncs;
			n && (this._queuedSyncs = null, this._needsSync = !0, this.sync(() => {
				n.forEach((e) => e && e());
			})), this.dispatchEvent(yn), e && e();
		})));
	}
	onBeforeRender(e, t, n, r, i, a) {
		this.sync(), i.isTroikaTextMaterial && this._prepareForRender(i);
	}
	dispose() {
		this.geometry.dispose();
	}
	get textRenderInfo() {
		return this._textRenderInfo || null;
	}
	createDerivedMaterial(e) {
		return on(e);
	}
	get material() {
		let e = this._derivedMaterial, t = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = sn.clone());
		if ((!e || !e.isDerivedFrom(t)) && (e = this._derivedMaterial = this.createDerivedMaterial(t), t.addEventListener("dispose", function n() {
			t.removeEventListener("dispose", n), e.dispose();
		})), this.hasOutline()) {
			let t = e._outlineMtl;
			return t || (t = e._outlineMtl = Object.create(e, { id: { value: e.id + .1 } }), t.isTextOutlineMaterial = !0, t.depthWrite = !1, t.map = null, e.addEventListener("dispose", function n() {
				e.removeEventListener("dispose", n), t.dispose();
			})), [t, e];
		} else return e;
	}
	set material(e) {
		e && e.isTroikaTextMaterial ? (this._derivedMaterial = e, this._baseMaterial = e.baseMaterial) : this._baseMaterial = e;
	}
	hasOutline() {
		return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
	}
	get glyphGeometryDetail() {
		return this.geometry.detail;
	}
	set glyphGeometryDetail(e) {
		this.geometry.detail = e;
	}
	get curveRadius() {
		return this.geometry.curveRadius;
	}
	set curveRadius(e) {
		this.geometry.curveRadius = e;
	}
	get customDepthMaterial() {
		return hn(this.material).getDepthMaterial();
	}
	set customDepthMaterial(e) {}
	get customDistanceMaterial() {
		return hn(this.material).getDistanceMaterial();
	}
	set customDistanceMaterial(e) {}
	_prepareForRender(e) {
		let t = e.isTextOutlineMaterial, n = e.uniforms, r = this.textRenderInfo;
		if (r) {
			let { sdfTexture: e, blockBounds: i } = r;
			n.uTroikaSDFTexture.value = e, n.uTroikaSDFTextureSize.value.set(e.image.width, e.image.height), n.uTroikaSDFGlyphSize.value = r.sdfGlyphSize, n.uTroikaSDFExponent.value = r.sdfExponent, n.uTroikaTotalBounds.value.fromArray(i), n.uTroikaUseGlyphColors.value = !t && !!r.glyphColors;
			let a = 0, o = 0, s = 0, c, l, u, d = 0, f = 0;
			if (t) {
				let { outlineWidth: e, outlineOffsetX: t, outlineOffsetY: n, outlineBlur: r, outlineOpacity: i } = this;
				a = this._parsePercent(e) || 0, o = Math.max(0, this._parsePercent(r) || 0), c = i, d = this._parsePercent(t) || 0, f = this._parsePercent(n) || 0;
			} else s = Math.max(0, this._parsePercent(this.strokeWidth) || 0), s && (u = this.strokeColor, n.uTroikaStrokeColor.value.set(u ?? cn), l = this.strokeOpacity, l ??= 1), c = this.fillOpacity;
			n.uTroikaEdgeOffset.value = a, n.uTroikaPositionOffset.value.set(d, f), n.uTroikaBlurRadius.value = o, n.uTroikaStrokeWidth.value = s, n.uTroikaStrokeOpacity.value = l, n.uTroikaFillOpacity.value = c ?? 1, n.uTroikaCurveRadius.value = this.curveRadius || 0;
			let p = this.clipRect;
			if (p && Array.isArray(p) && p.length === 4) n.uTroikaClipRect.value.fromArray(p);
			else {
				let e = (this.fontSize || .1) * 100;
				n.uTroikaClipRect.value.set(i[0] - e, i[1] - e, i[2] + e, i[3] + e);
			}
			this.geometry.applyClipRect(n.uTroikaClipRect.value);
		}
		n.uTroikaSDFDebug.value = !!this.debugSDF, e.polygonOffset = !!this.depthOffset, e.polygonOffsetFactor = e.polygonOffsetUnits = this.depthOffset || 0;
		let i = t ? this.outlineColor || 0 : this.color;
		if (i == null) delete e.color;
		else {
			let t = e.hasOwnProperty("color") ? e.color : e.color = new x();
			(i !== t._input || typeof i == "object") && t.set(t._input = i);
		}
		let a = this.orientation || mn;
		if (a !== e._orientation) {
			let t = n.uTroikaOrient.value;
			a = a.replace(/[^-+xyz]/g, "");
			let r = a !== mn && a.match(/^([-+])([xyz])([-+])([xyz])$/);
			if (r) {
				let [, e, n, i, a] = r;
				un.set(0, 0, 0)[n] = e === "-" ? 1 : -1, dn.set(0, 0, 0)[a] = i === "-" ? -1 : 1, ln.lookAt(pn, un.cross(dn), dn), t.setFromMatrix4(ln);
			} else t.identity();
			e._orientation = a;
		}
	}
	_parsePercent(e) {
		if (typeof e == "string") {
			let t = e.match(/^(-?[\d.]+)%$/), n = t ? parseFloat(t[1]) : NaN;
			e = (isNaN(n) ? 0 : n / 100) * this.fontSize;
		}
		return e;
	}
	localPositionToTextCoords(e, t = new c()) {
		t.copy(e);
		let n = this.curveRadius;
		return n && (t.x = Math.atan2(e.x, Math.abs(n) - Math.abs(e.z)) * Math.abs(n)), t;
	}
	worldPositionToTextCoords(e, t = new c()) {
		return un.copy(e), this.localPositionToTextCoords(this.worldToLocal(un), t);
	}
	raycast(e, t) {
		let { textRenderInfo: n, curveRadius: r } = this;
		if (n) {
			let i = n.blockBounds, a = r ? _n() : gn(), o = a.geometry, { position: s, uv: c } = o.attributes;
			for (let e = 0; e < c.count; e++) {
				let t = i[0] + c.getX(e) * (i[2] - i[0]), n = i[1] + c.getY(e) * (i[3] - i[1]), a = 0;
				r && (a = r - Math.cos(t / r) * r, t = Math.sin(t / r) * r), s.setXYZ(e, t, n, a);
			}
			o.boundingSphere = this.geometry.boundingSphere, o.boundingBox = this.geometry.boundingBox, a.matrixWorld = this.matrixWorld, a.material.side = this.material.side, fn.length = 0, a.raycast(e, fn);
			for (let e = 0; e < fn.length; e++) fn[e].object = this, t.push(fn[e]);
		}
	}
	copy(e) {
		let t = this.geometry;
		return super.copy(e), this.geometry = t, xn.forEach((t) => {
			this[t] = e[t];
		}), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
bn.forEach((e) => {
	let t = "_private_" + e;
	Object.defineProperty(Sn.prototype, e, {
		get() {
			return this[t];
		},
		set(e) {
			e !== this[t] && (this[t] = e, this._needsSync = !0);
		}
	});
}), new p(), new x();
//#endregion
//#region node_modules/@react-three/drei/core/Text.js
var Cn = /* @__PURE__ */ K.forwardRef(({ sdfGlyphSize: e = 64, anchorX: t = "center", anchorY: n = "middle", font: r, fontSize: i = 1, children: a, characters: o, onSync: s, ...c }, l) => {
	let u = z(({ invalidate: e }) => e), [d] = K.useState(() => new Sn()), [f, p] = K.useMemo(() => {
		let e = [], t = "";
		return K.Children.forEach(a, (n) => {
			typeof n == "string" || typeof n == "number" ? t += n : e.push(n);
		}), [e, t];
	}, [a]);
	return H(() => new Promise((e) => Ht({
		font: r,
		characters: o
	}, e)), [
		"troika-text",
		r,
		o
	]), K.useLayoutEffect(() => void d.sync(() => {
		u(), s && s(d);
	})), K.useEffect(() => () => d.dispose(), [d]), /*#__PURE__*/ K.createElement("primitive", V({
		object: d,
		ref: l,
		font: r,
		text: p,
		anchorX: t,
		anchorY: n,
		fontSize: i,
		sdfGlyphSize: e
	}, c), f);
}), wn = 1.25, Tn = 65535, En = 2 ** -24, Dn = Symbol("SKIP_GENERATION");
//#endregion
//#region node_modules/three-mesh-bvh/src/core/build/geometryUtils.js
function On(e) {
	return e.index ? e.index.count : e.attributes.position.count;
}
function kn(e) {
	return On(e) / 3;
}
function An(e, t = ArrayBuffer) {
	return e > 65535 ? new Uint32Array(new t(4 * e)) : new Uint16Array(new t(2 * e));
}
function jn(e, t) {
	if (!e.index) {
		let n = e.attributes.position.count, r = An(n, t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer);
		e.setIndex(new u(r, 1));
		for (let e = 0; e < n; e++) r[e] = e;
	}
}
function Mn(e, t) {
	let n = kn(e), r = t || e.drawRange, i = r.start / 3, a = (r.start + r.count) / 3, o = Math.max(0, i), s = Math.min(n, a) - o;
	return [{
		offset: Math.floor(o),
		count: Math.floor(s)
	}];
}
function Nn(e, t) {
	if (!e.groups || !e.groups.length) return Mn(e, t);
	let n = [], r = /* @__PURE__ */ new Set(), i = t || e.drawRange, a = i.start / 3, o = (i.start + i.count) / 3;
	for (let t of e.groups) {
		let e = t.start / 3, n = (t.start + t.count) / 3;
		r.add(Math.max(a, e)), r.add(Math.min(o, n));
	}
	let s = Array.from(r.values()).sort((e, t) => e - t);
	for (let e = 0; e < s.length - 1; e++) {
		let t = s[e], r = s[e + 1];
		n.push({
			offset: Math.floor(t),
			count: Math.floor(r - t)
		});
	}
	return n;
}
function Pn(e, t) {
	let n = kn(e), r = Nn(e, t).sort((e, t) => e.offset - t.offset), i = r[r.length - 1];
	i.count = Math.min(n - i.offset, i.count);
	let a = 0;
	return r.forEach(({ count: e }) => a += e), n !== a;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/build/computeBoundsUtils.js
function Fn(e, t, n, r, i) {
	let a = Infinity, o = Infinity, s = Infinity, c = -Infinity, l = -Infinity, u = -Infinity, d = Infinity, f = Infinity, p = Infinity, m = -Infinity, h = -Infinity, g = -Infinity;
	for (let r = t * 6, i = (t + n) * 6; r < i; r += 6) {
		let t = e[r + 0], n = e[r + 1], i = t - n, _ = t + n;
		i < a && (a = i), _ > c && (c = _), t < d && (d = t), t > m && (m = t);
		let v = e[r + 2], y = e[r + 3], b = v - y, x = v + y;
		b < o && (o = b), x > l && (l = x), v < f && (f = v), v > h && (h = v);
		let S = e[r + 4], C = e[r + 5], w = S - C, T = S + C;
		w < s && (s = w), T > u && (u = T), S < p && (p = S), S > g && (g = S);
	}
	r[0] = a, r[1] = o, r[2] = s, r[3] = c, r[4] = l, r[5] = u, i[0] = d, i[1] = f, i[2] = p, i[3] = m, i[4] = h, i[5] = g;
}
function In(e, t = null, n = null, r = null) {
	let i = e.attributes.position, a = e.index ? e.index.array : null, o = kn(e), s = i.normalized, c;
	t === null ? (c = new Float32Array(o * 6), n = 0, r = o) : (c = t, n ||= 0, r ||= o);
	let l = i.array, u = i.offset || 0, d = 3;
	i.isInterleavedBufferAttribute && (d = i.data.stride);
	let f = [
		"getX",
		"getY",
		"getZ"
	];
	for (let e = n; e < n + r; e++) {
		let t = e * 3, n = e * 6, r = t + 0, o = t + 1, p = t + 2;
		a && (r = a[r], o = a[o], p = a[p]), s || (r = r * d + u, o = o * d + u, p = p * d + u);
		for (let e = 0; e < 3; e++) {
			let t, a, u;
			s ? (t = i[f[e]](r), a = i[f[e]](o), u = i[f[e]](p)) : (t = l[r + e], a = l[o + e], u = l[p + e]);
			let d = t;
			a < d && (d = a), u < d && (d = u);
			let m = t;
			a > m && (m = a), u > m && (m = u);
			let h = (m - d) / 2, g = e * 2;
			c[n + g + 0] = d + h, c[n + g + 1] = h + (Math.abs(d) + h) * En;
		}
	}
	return c;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/utils/ArrayBoxUtilities.js
function Y(e, t, n) {
	return n.min.x = t[e], n.min.y = t[e + 1], n.min.z = t[e + 2], n.max.x = t[e + 3], n.max.y = t[e + 4], n.max.z = t[e + 5], n;
}
function Ln(e) {
	let t = -1, n = -Infinity;
	for (let r = 0; r < 3; r++) {
		let i = e[r + 3] - e[r];
		i > n && (n = i, t = r);
	}
	return t;
}
function Rn(e, t) {
	t.set(e);
}
function zn(e, t, n) {
	let r, i;
	for (let a = 0; a < 3; a++) {
		let o = a + 3;
		r = e[a], i = t[a], n[a] = r < i ? r : i, r = e[o], i = t[o], n[o] = r > i ? r : i;
	}
}
function Bn(e, t, n) {
	for (let r = 0; r < 3; r++) {
		let i = t[e + 2 * r], a = t[e + 2 * r + 1], o = i - a, s = i + a;
		o < n[r] && (n[r] = o), s > n[r + 3] && (n[r + 3] = s);
	}
}
function Vn(e) {
	let t = e[3] - e[0], n = e[4] - e[1], r = e[5] - e[2];
	return 2 * (t * n + n * r + r * t);
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/build/splitUtils.js
var Hn = 32, Un = (e, t) => e.candidate - t.candidate, Wn = Array(Hn).fill().map(() => ({
	count: 0,
	bounds: /* @__PURE__ */ new Float32Array(6),
	rightCacheBounds: /* @__PURE__ */ new Float32Array(6),
	leftCacheBounds: /* @__PURE__ */ new Float32Array(6),
	candidate: 0
})), Gn = /* @__PURE__ */ new Float32Array(6);
function Kn(e, t, n, r, i, a) {
	let o = -1, s = 0;
	if (a === 0) o = Ln(t), o !== -1 && (s = (t[o] + t[o + 3]) / 2);
	else if (a === 1) o = Ln(e), o !== -1 && (s = qn(n, r, i, o));
	else if (a === 2) {
		let a = Vn(e), c = wn * i, l = r * 6, u = (r + i) * 6;
		for (let e = 0; e < 3; e++) {
			let r = t[e], d = (t[e + 3] - r) / Hn;
			if (i < Hn / 4) {
				let t = [...Wn];
				t.length = i;
				let r = 0;
				for (let i = l; i < u; i += 6, r++) {
					let a = t[r];
					a.candidate = n[i + 2 * e], a.count = 0;
					let { bounds: o, leftCacheBounds: s, rightCacheBounds: c } = a;
					for (let e = 0; e < 3; e++) c[e] = Infinity, c[e + 3] = -Infinity, s[e] = Infinity, s[e + 3] = -Infinity, o[e] = Infinity, o[e + 3] = -Infinity;
					Bn(i, n, o);
				}
				t.sort(Un);
				let d = i;
				for (let e = 0; e < d; e++) {
					let n = t[e];
					for (; e + 1 < d && t[e + 1].candidate === n.candidate;) t.splice(e + 1, 1), d--;
				}
				for (let r = l; r < u; r += 6) {
					let i = n[r + 2 * e];
					for (let e = 0; e < d; e++) {
						let a = t[e];
						i >= a.candidate ? Bn(r, n, a.rightCacheBounds) : (Bn(r, n, a.leftCacheBounds), a.count++);
					}
				}
				for (let n = 0; n < d; n++) {
					let r = t[n], l = r.count, u = i - r.count, d = r.leftCacheBounds, f = r.rightCacheBounds, p = 0;
					l !== 0 && (p = Vn(d) / a);
					let m = 0;
					u !== 0 && (m = Vn(f) / a);
					let h = 1 + wn * (p * l + m * u);
					h < c && (o = e, c = h, s = r.candidate);
				}
			} else {
				for (let e = 0; e < Hn; e++) {
					let t = Wn[e];
					t.count = 0, t.candidate = r + d + e * d;
					let n = t.bounds;
					for (let e = 0; e < 3; e++) n[e] = Infinity, n[e + 3] = -Infinity;
				}
				for (let t = l; t < u; t += 6) {
					let i = ~~((n[t + 2 * e] - r) / d);
					i >= Hn && (i = Hn - 1);
					let a = Wn[i];
					a.count++, Bn(t, n, a.bounds);
				}
				let t = Wn[Hn - 1];
				Rn(t.bounds, t.rightCacheBounds);
				for (let e = Hn - 2; e >= 0; e--) {
					let t = Wn[e], n = Wn[e + 1];
					zn(t.bounds, n.rightCacheBounds, t.rightCacheBounds);
				}
				let f = 0;
				for (let t = 0; t < Hn - 1; t++) {
					let n = Wn[t], r = n.count, l = n.bounds, u = Wn[t + 1].rightCacheBounds;
					r !== 0 && (f === 0 ? Rn(l, Gn) : zn(l, Gn, Gn)), f += r;
					let d = 0, p = 0;
					f !== 0 && (d = Vn(Gn) / a);
					let m = i - f;
					m !== 0 && (p = Vn(u) / a);
					let h = 1 + wn * (d * f + p * m);
					h < c && (o = e, c = h, s = n.candidate);
				}
			}
		}
	} else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);
	return {
		axis: o,
		pos: s
	};
}
function qn(e, t, n, r) {
	let i = 0;
	for (let a = t, o = t + n; a < o; a++) i += e[a * 6 + r * 2];
	return i / n;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/MeshBVHNode.js
var Jn = class {
	constructor() {
		this.boundingData = /* @__PURE__ */ new Float32Array(6);
	}
};
//#endregion
//#region node_modules/three-mesh-bvh/src/core/build/sortUtils.generated.js
function Yn(e, t, n, r, i, a) {
	let o = r, s = r + i - 1, c = a.pos, l = a.axis * 2;
	for (;;) {
		for (; o <= s && n[o * 6 + l] < c;) o++;
		for (; o <= s && n[s * 6 + l] >= c;) s--;
		if (o < s) {
			for (let e = 0; e < 3; e++) {
				let n = t[o * 3 + e];
				t[o * 3 + e] = t[s * 3 + e], t[s * 3 + e] = n;
			}
			for (let e = 0; e < 6; e++) {
				let t = n[o * 6 + e];
				n[o * 6 + e] = n[s * 6 + e], n[s * 6 + e] = t;
			}
			o++, s--;
		} else return o;
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/build/sortUtils_indirect.generated.js
function Xn(e, t, n, r, i, a) {
	let o = r, s = r + i - 1, c = a.pos, l = a.axis * 2;
	for (;;) {
		for (; o <= s && n[o * 6 + l] < c;) o++;
		for (; o <= s && n[s * 6 + l] >= c;) s--;
		if (o < s) {
			let t = e[o];
			e[o] = e[s], e[s] = t;
			for (let e = 0; e < 6; e++) {
				let t = n[o * 6 + e];
				n[o * 6 + e] = n[s * 6 + e], n[s * 6 + e] = t;
			}
			o++, s--;
		} else return o;
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/utils/nodeBufferUtils.js
function Zn(e, t) {
	return t[e + 15] === 65535;
}
function Qn(e, t) {
	return t[e + 6];
}
function $n(e, t) {
	return t[e + 14];
}
function er(e) {
	return e + 8;
}
function tr(e, t) {
	return t[e + 6];
}
function nr(e, t) {
	return t[e + 7];
}
function X(e) {
	return e;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/build/buildUtils.js
var rr, ir, ar, or, sr = 2 ** 32;
function cr(e) {
	return "count" in e ? 1 : 1 + cr(e.left) + cr(e.right);
}
function lr(e, t, n) {
	return rr = new Float32Array(n), ir = new Uint32Array(n), ar = new Uint16Array(n), or = new Uint8Array(n), ur(e, t);
}
function ur(e, t) {
	let n = e / 4, r = e / 2, i = "count" in t, a = t.boundingData;
	for (let e = 0; e < 6; e++) rr[n + e] = a[e];
	if (i) if (t.buffer) {
		let r = t.buffer;
		or.set(new Uint8Array(r), e);
		for (let t = e, i = e + r.byteLength; t < i; t += 32) Zn(t / 2, ar) || (ir[t / 4 + 6] += n);
		return e + r.byteLength;
	} else {
		let i = t.offset, a = t.count;
		return ir[n + 6] = i, ar[r + 14] = a, ar[r + 15] = Tn, e + 32;
	}
	else {
		let r = t.left, i = t.right, a = t.splitAxis, o;
		if (o = ur(e + 32, r), o / 4 > sr) throw Error("MeshBVH: Cannot store child pointer greater than 32 bits.");
		return ir[n + 6] = o / 4, o = ur(o, i), ir[n + 7] = a, o;
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/build/buildTree.js
function dr(e, t) {
	let n = (e.index ? e.index.count : e.attributes.position.count) / 3, r = n > 2 ** 16, i = r ? 4 : 2, a = t ? new SharedArrayBuffer(n * i) : new ArrayBuffer(n * i), o = r ? new Uint32Array(a) : new Uint16Array(a);
	for (let e = 0, t = o.length; e < t; e++) o[e] = e;
	return o;
}
function fr(e, t, n, r, i) {
	let { maxDepth: a, verbose: o, maxLeafTris: s, strategy: c, onProgress: l, indirect: u } = i, d = e._indirectBuffer, f = e.geometry, p = f.index ? f.index.array : null, m = u ? Xn : Yn, h = kn(f), g = /* @__PURE__ */ new Float32Array(6), _ = !1, v = new Jn();
	return Fn(t, n, r, v.boundingData, g), b(v, n, r, g), v;
	function y(e) {
		l && l(e / h);
	}
	function b(e, n, r, i = null, l = 0) {
		if (!_ && l >= a && (_ = !0, o && (console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`), console.warn(f))), r <= s || l >= a) return y(n + r), e.offset = n, e.count = r, e;
		let u = Kn(e.boundingData, i, t, n, r, c);
		if (u.axis === -1) return y(n + r), e.offset = n, e.count = r, e;
		let h = m(d, p, t, n, r, u);
		if (h === n || h === n + r) y(n + r), e.offset = n, e.count = r;
		else {
			e.splitAxis = u.axis;
			let i = new Jn(), a = n, o = h - n;
			e.left = i, Fn(t, a, o, i.boundingData, g), b(i, a, o, g, l + 1);
			let s = new Jn(), c = h, d = r - o;
			e.right = s, Fn(t, c, d, s.boundingData, g), b(s, c, d, g, l + 1);
		}
		return e;
	}
}
function pr(e, t) {
	let n = e.geometry;
	t.indirect && (e._indirectBuffer = dr(n, t.useSharedArrayBuffer), Pn(n, t.range) && !t.verbose && console.warn("MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the \"indirect\" option. BVH may incorrectly report intersections on unrendered portions of the geometry.")), e._indirectBuffer || jn(n, t);
	let r = t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, i = In(n);
	e._roots = (t.indirect ? Mn(n, t.range) : Nn(n, t.range)).map((n) => {
		let a = fr(e, i, n.offset, n.count, t), o = cr(a), s = new r(32 * o);
		return lr(0, a, s), s;
	});
}
//#endregion
//#region node_modules/three-mesh-bvh/src/math/SeparatingAxisBounds.js
var mr = class {
	constructor() {
		this.min = Infinity, this.max = -Infinity;
	}
	setFromPointsField(e, t) {
		let n = Infinity, r = -Infinity;
		for (let i = 0, a = e.length; i < a; i++) {
			let a = e[i][t];
			n = a < n ? a : n, r = a > r ? a : r;
		}
		this.min = n, this.max = r;
	}
	setFromPoints(e, t) {
		let n = Infinity, r = -Infinity;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i], o = e.dot(a);
			n = o < n ? o : n, r = o > r ? o : r;
		}
		this.min = n, this.max = r;
	}
	isSeparated(e) {
		return this.min > e.max || e.min > this.max;
	}
};
mr.prototype.setFromBox = (function() {
	let e = new D();
	return function(t, n) {
		let r = n.min, i = n.max, a = Infinity, o = -Infinity;
		for (let n = 0; n <= 1; n++) for (let s = 0; s <= 1; s++) for (let c = 0; c <= 1; c++) {
			e.x = r.x * n + i.x * (1 - n), e.y = r.y * s + i.y * (1 - s), e.z = r.z * c + i.z * (1 - c);
			let l = t.dot(e);
			a = Math.min(l, a), o = Math.max(l, o);
		}
		this.min = a, this.max = o;
	};
})(), (function() {
	let e = new mr();
	return function(t, n) {
		let r = t.points, i = t.satAxes, a = t.satBounds, o = n.points, s = n.satAxes, c = n.satBounds;
		for (let t = 0; t < 3; t++) {
			let n = a[t], r = i[t];
			if (e.setFromPoints(r, o), n.isSeparated(e)) return !1;
		}
		for (let t = 0; t < 3; t++) {
			let n = c[t], i = s[t];
			if (e.setFromPoints(i, r), n.isSeparated(e)) return !1;
		}
	};
})();
//#endregion
//#region node_modules/three-mesh-bvh/src/math/MathUtilities.js
var hr = (function() {
	let e = new D(), t = new D(), n = new D();
	return function(r, i, a) {
		let o = r.start, s = e, c = i.start, l = t;
		n.subVectors(o, c), e.subVectors(r.end, r.start), t.subVectors(i.end, i.start);
		let u = n.dot(l), d = l.dot(s), f = l.dot(l), p = n.dot(s), m = s.dot(s) * f - d * d, h, g;
		h = m === 0 ? 0 : (u * d - p * f) / m, g = (u + h * d) / f, a.x = h, a.y = g;
	};
})(), gr = (function() {
	let e = new c(), t = new D(), n = new D();
	return function(r, i, a, o) {
		hr(r, i, e);
		let s = e.x, c = e.y;
		if (s >= 0 && s <= 1 && c >= 0 && c <= 1) {
			r.at(s, a), i.at(c, o);
			return;
		} else if (s >= 0 && s <= 1) {
			c < 0 ? i.at(0, o) : i.at(1, o), r.closestPointToPoint(o, !0, a);
			return;
		} else if (c >= 0 && c <= 1) {
			s < 0 ? r.at(0, a) : r.at(1, a), i.closestPointToPoint(a, !0, o);
			return;
		} else {
			let e;
			e = s < 0 ? r.start : r.end;
			let l;
			l = c < 0 ? i.start : i.end;
			let u = t, d = n;
			if (r.closestPointToPoint(l, !0, t), i.closestPointToPoint(e, !0, n), u.distanceToSquared(l) <= d.distanceToSquared(e)) {
				a.copy(u), o.copy(l);
				return;
			} else {
				a.copy(e), o.copy(d);
				return;
			}
		}
	};
})(), _r = (function() {
	let e = new D(), t = new D(), n = new te(), r = new d();
	return function(i, a) {
		let { radius: o, center: s } = i, { a: c, b: l, c: u } = a;
		if (r.start = c, r.end = l, r.closestPointToPoint(s, !0, e).distanceTo(s) <= o || (r.start = c, r.end = u, r.closestPointToPoint(s, !0, e).distanceTo(s) <= o) || (r.start = l, r.end = u, r.closestPointToPoint(s, !0, e).distanceTo(s) <= o)) return !0;
		let d = a.getPlane(n);
		if (Math.abs(d.distanceToPoint(s)) <= o) {
			let e = d.projectPoint(s, t);
			if (a.containsPoint(e)) return !0;
		}
		return !1;
	};
})(), vr = 1e-15;
function yr(e) {
	return Math.abs(e) < vr;
}
var br = class extends h {
	constructor(...e) {
		super(...e), this.isExtendedTriangle = !0, this.satAxes = [
			,
			,
			,
			,
		].fill().map(() => new D()), this.satBounds = [
			,
			,
			,
			,
		].fill().map(() => new mr()), this.points = [
			this.a,
			this.b,
			this.c
		], this.sphere = new L(), this.plane = new te(), this.needsUpdate = !0;
	}
	intersectsSphere(e) {
		return _r(e, this);
	}
	update() {
		let e = this.a, t = this.b, n = this.c, r = this.points, i = this.satAxes, a = this.satBounds, o = i[0], s = a[0];
		this.getNormal(o), s.setFromPoints(o, r);
		let c = i[1], l = a[1];
		c.subVectors(e, t), l.setFromPoints(c, r);
		let u = i[2], d = a[2];
		u.subVectors(t, n), d.setFromPoints(u, r);
		let f = i[3], p = a[3];
		f.subVectors(n, e), p.setFromPoints(f, r), this.sphere.setFromPoints(this.points), this.plane.setFromNormalAndCoplanarPoint(o, e), this.needsUpdate = !1;
	}
};
br.prototype.closestPointToSegment = (function() {
	let e = new D(), t = new D(), n = new d();
	return function(r, i = null, a = null) {
		let { start: o, end: s } = r, c = this.points, l, u = Infinity;
		for (let o = 0; o < 3; o++) {
			let s = (o + 1) % 3;
			n.start.copy(c[o]), n.end.copy(c[s]), gr(n, r, e, t), l = e.distanceToSquared(t), l < u && (u = l, i && i.copy(e), a && a.copy(t));
		}
		return this.closestPointToPoint(o, e), l = o.distanceToSquared(e), l < u && (u = l, i && i.copy(e), a && a.copy(o)), this.closestPointToPoint(s, e), l = s.distanceToSquared(e), l < u && (u = l, i && i.copy(e), a && a.copy(s)), Math.sqrt(u);
	};
})(), br.prototype.intersectsTriangle = (function() {
	let e = new br(), t = [
		,
		,
		,
	], n = [
		,
		,
		,
	], r = new mr(), i = new mr(), a = new D(), o = new D(), s = new D(), c = new D(), l = new D(), u = new d(), f = new d(), p = new d(), m = new D();
	function h(e, t, n) {
		let r = e.points, i = 0, a = -1;
		for (let e = 0; e < 3; e++) {
			let { start: s, end: c } = u;
			s.copy(r[e]), c.copy(r[(e + 1) % 3]), u.delta(o);
			let l = yr(t.distanceToPoint(s));
			if (yr(t.normal.dot(o)) && l) {
				n.copy(u), i = 2;
				break;
			}
			let d = t.intersectLine(u, m);
			if (!d && l && m.copy(s), (d || l) && !yr(m.distanceTo(c))) {
				if (i <= 1) (i === 1 ? n.start : n.end).copy(m), l && (a = i);
				else if (i >= 2) {
					(a === 1 ? n.start : n.end).copy(m), i = 2;
					break;
				}
				if (i++, i === 2 && a === -1) break;
			}
		}
		return i;
	}
	return function(o, u = null, d = !1) {
		this.needsUpdate && this.update(), o.isExtendedTriangle ? o.needsUpdate && o.update() : (e.copy(o), e.update(), o = e);
		let m = this.plane, g = o.plane;
		if (Math.abs(m.normal.dot(g.normal)) > .9999999999) {
			let e = this.satBounds, s = this.satAxes;
			n[0] = o.a, n[1] = o.b, n[2] = o.c;
			for (let t = 0; t < 4; t++) {
				let i = e[t], a = s[t];
				if (r.setFromPoints(a, n), i.isSeparated(r)) return !1;
			}
			let c = o.satBounds, l = o.satAxes;
			t[0] = this.a, t[1] = this.b, t[2] = this.c;
			for (let e = 0; e < 4; e++) {
				let n = c[e], i = l[e];
				if (r.setFromPoints(i, t), n.isSeparated(r)) return !1;
			}
			for (let e = 0; e < 4; e++) {
				let o = s[e];
				for (let e = 0; e < 4; e++) {
					let s = l[e];
					if (a.crossVectors(o, s), r.setFromPoints(a, t), i.setFromPoints(a, n), r.isSeparated(i)) return !1;
				}
			}
			return u && (d || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), u.start.set(0, 0, 0), u.end.set(0, 0, 0)), !0;
		} else {
			let e = h(this, g, f);
			if (e === 1 && o.containsPoint(f.end)) return u && (u.start.copy(f.end), u.end.copy(f.end)), !0;
			if (e !== 2) return !1;
			let t = h(o, m, p);
			if (t === 1 && this.containsPoint(p.end)) return u && (u.start.copy(p.end), u.end.copy(p.end)), !0;
			if (t !== 2) return !1;
			if (f.delta(s), p.delta(c), s.dot(c) < 0) {
				let e = p.start;
				p.start = p.end, p.end = e;
			}
			let n = f.start.dot(s), r = f.end.dot(s), i = p.start.dot(s), a = p.end.dot(s);
			return n !== a && i !== r && r < i == n < a ? !1 : (u && (l.subVectors(f.start, p.start), l.dot(s) > 0 ? u.start.copy(f.start) : u.start.copy(p.start), l.subVectors(f.end, p.end), l.dot(s) < 0 ? u.end.copy(f.end) : u.end.copy(p.end)), !0);
		}
	};
})(), br.prototype.distanceToPoint = (function() {
	let e = new D();
	return function(t) {
		return this.closestPointToPoint(t, e), t.distanceTo(e);
	};
})(), br.prototype.distanceToTriangle = (function() {
	let e = new D(), t = new D(), n = [
		"a",
		"b",
		"c"
	], r = new d(), i = new d();
	return function(a, o = null, s = null) {
		let c = o || s ? r : null;
		if (this.intersectsTriangle(a, c)) return (o || s) && (o && c.getCenter(o), s && c.getCenter(s)), 0;
		let l = Infinity;
		for (let t = 0; t < 3; t++) {
			let r, i = n[t], c = a[i];
			this.closestPointToPoint(c, e), r = c.distanceToSquared(e), r < l && (l = r, o && o.copy(e), s && s.copy(c));
			let u = this[i];
			a.closestPointToPoint(u, e), r = u.distanceToSquared(e), r < l && (l = r, o && o.copy(u), s && s.copy(e));
		}
		for (let c = 0; c < 3; c++) {
			let u = n[c], d = n[(c + 1) % 3];
			r.set(this[u], this[d]);
			for (let c = 0; c < 3; c++) {
				let u = n[c], d = n[(c + 1) % 3];
				i.set(a[u], a[d]), gr(r, i, e, t);
				let f = e.distanceToSquared(t);
				f < l && (l = f, o && o.copy(e), s && s.copy(t));
			}
		}
		return Math.sqrt(l);
	};
})();
//#endregion
//#region node_modules/three-mesh-bvh/src/math/OrientedBox.js
var xr = class {
	constructor(e, t, n) {
		this.isOrientedBox = !0, this.min = new D(), this.max = new D(), this.matrix = new F(), this.invMatrix = new F(), this.points = Array(8).fill().map(() => new D()), this.satAxes = [
			,
			,
			,
		].fill().map(() => new D()), this.satBounds = [
			,
			,
			,
		].fill().map(() => new mr()), this.alignedSatBounds = [
			,
			,
			,
		].fill().map(() => new mr()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), n && this.matrix.copy(n);
	}
	set(e, t, n) {
		this.min.copy(e), this.max.copy(t), this.matrix.copy(n), this.needsUpdate = !0;
	}
	copy(e) {
		this.min.copy(e.min), this.max.copy(e.max), this.matrix.copy(e.matrix), this.needsUpdate = !0;
	}
};
xr.prototype.update = (function() {
	return function() {
		let e = this.matrix, t = this.min, n = this.max, r = this.points;
		for (let i = 0; i <= 1; i++) for (let a = 0; a <= 1; a++) for (let o = 0; o <= 1; o++) {
			let s = r[1 * i | 2 * a | 4 * o];
			s.x = i ? n.x : t.x, s.y = a ? n.y : t.y, s.z = o ? n.z : t.z, s.applyMatrix4(e);
		}
		let i = this.satBounds, a = this.satAxes, o = r[0];
		for (let e = 0; e < 3; e++) {
			let t = a[e], n = i[e], s = r[1 << e];
			t.subVectors(o, s), n.setFromPoints(t, r);
		}
		let s = this.alignedSatBounds;
		s[0].setFromPointsField(r, "x"), s[1].setFromPointsField(r, "y"), s[2].setFromPointsField(r, "z"), this.invMatrix.copy(this.matrix).invert(), this.needsUpdate = !1;
	};
})(), xr.prototype.intersectsBox = (function() {
	let e = new mr();
	return function(t) {
		this.needsUpdate && this.update();
		let n = t.min, r = t.max, i = this.satBounds, a = this.satAxes, o = this.alignedSatBounds;
		if (e.min = n.x, e.max = r.x, o[0].isSeparated(e) || (e.min = n.y, e.max = r.y, o[1].isSeparated(e)) || (e.min = n.z, e.max = r.z, o[2].isSeparated(e))) return !1;
		for (let n = 0; n < 3; n++) {
			let r = a[n], o = i[n];
			if (e.setFromBox(r, t), o.isSeparated(e)) return !1;
		}
		return !0;
	};
})(), xr.prototype.intersectsTriangle = (function() {
	let e = new br(), t = [
		,
		,
		,
	], n = new mr(), r = new mr(), i = new D();
	return function(a) {
		this.needsUpdate && this.update(), a.isExtendedTriangle ? a.needsUpdate && a.update() : (e.copy(a), e.update(), a = e);
		let o = this.satBounds, s = this.satAxes;
		t[0] = a.a, t[1] = a.b, t[2] = a.c;
		for (let e = 0; e < 3; e++) {
			let r = o[e], i = s[e];
			if (n.setFromPoints(i, t), r.isSeparated(n)) return !1;
		}
		let c = a.satBounds, l = a.satAxes, u = this.points;
		for (let e = 0; e < 3; e++) {
			let t = c[e], r = l[e];
			if (n.setFromPoints(r, u), t.isSeparated(n)) return !1;
		}
		for (let e = 0; e < 3; e++) {
			let a = s[e];
			for (let e = 0; e < 4; e++) {
				let o = l[e];
				if (i.crossVectors(a, o), n.setFromPoints(i, t), r.setFromPoints(i, u), n.isSeparated(r)) return !1;
			}
		}
		return !0;
	};
})(), xr.prototype.closestPointToPoint = (function() {
	return function(e, t) {
		return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
	};
})(), xr.prototype.distanceToPoint = (function() {
	let e = new D();
	return function(t) {
		return this.closestPointToPoint(t, e), t.distanceTo(e);
	};
})(), xr.prototype.distanceToBox = (function() {
	let e = [
		"x",
		"y",
		"z"
	], t = Array(12).fill().map(() => new d()), n = Array(12).fill().map(() => new d()), r = new D(), i = new D();
	return function(a, o = 0, s = null, c = null) {
		if (this.needsUpdate && this.update(), this.intersectsBox(a)) return (s || c) && (a.getCenter(i), this.closestPointToPoint(i, r), a.closestPointToPoint(r, i), s && s.copy(r), c && c.copy(i)), 0;
		let l = o * o, u = a.min, d = a.max, f = this.points, p = Infinity;
		for (let e = 0; e < 8; e++) {
			let t = f[e];
			i.copy(t).clamp(u, d);
			let n = t.distanceToSquared(i);
			if (n < p && (p = n, s && s.copy(t), c && c.copy(i), n < l)) return Math.sqrt(n);
		}
		let m = 0;
		for (let r = 0; r < 3; r++) for (let i = 0; i <= 1; i++) for (let a = 0; a <= 1; a++) {
			let o = (r + 1) % 3, s = (r + 2) % 3, c = i << o | a << s, l = 1 << r | i << o | a << s, p = f[c], h = f[l];
			t[m].set(p, h);
			let g = e[r], _ = e[o], v = e[s], y = n[m], b = y.start, x = y.end;
			b[g] = u[g], b[_] = i ? u[_] : d[_], b[v] = a ? u[v] : d[_], x[g] = d[g], x[_] = i ? u[_] : d[_], x[v] = a ? u[v] : d[_], m++;
		}
		for (let e = 0; e <= 1; e++) for (let t = 0; t <= 1; t++) for (let n = 0; n <= 1; n++) {
			i.x = e ? d.x : u.x, i.y = t ? d.y : u.y, i.z = n ? d.z : u.z, this.closestPointToPoint(i, r);
			let a = i.distanceToSquared(r);
			if (a < p && (p = a, s && s.copy(r), c && c.copy(i), a < l)) return Math.sqrt(a);
		}
		for (let e = 0; e < 12; e++) {
			let a = t[e];
			for (let e = 0; e < 12; e++) {
				let t = n[e];
				gr(a, t, r, i);
				let o = r.distanceToSquared(i);
				if (o < p && (p = o, s && s.copy(r), c && c.copy(i), o < l)) return Math.sqrt(o);
			}
		}
		return Math.sqrt(p);
	};
})();
//#endregion
//#region node_modules/three-mesh-bvh/src/utils/PrimitivePool.js
var Sr = class {
	constructor(e) {
		this._getNewPrimitive = e, this._primitives = [];
	}
	getPrimitive() {
		let e = this._primitives;
		return e.length === 0 ? this._getNewPrimitive() : e.pop();
	}
	releasePrimitive(e) {
		this._primitives.push(e);
	}
}, Cr = /* @__PURE__ */ new class extends Sr {
	constructor() {
		super(() => new br());
	}
}(), Z = new class {
	constructor() {
		this.float32Array = null, this.uint16Array = null, this.uint32Array = null;
		let e = [], t = null;
		this.setBuffer = (n) => {
			t && e.push(t), t = n, this.float32Array = new Float32Array(n), this.uint16Array = new Uint16Array(n), this.uint32Array = new Uint32Array(n);
		}, this.clearBuffer = () => {
			t = null, this.float32Array = null, this.uint16Array = null, this.uint32Array = null, e.length !== 0 && this.setBuffer(e.pop());
		};
	}
}(), wr, Tr, Er = [], Dr = /* @__PURE__ */ new Sr(() => new p());
function Or(e, t, n, r, i, a) {
	wr = Dr.getPrimitive(), Tr = Dr.getPrimitive(), Er.push(wr, Tr), Z.setBuffer(e._roots[t]);
	let o = kr(0, e.geometry, n, r, i, a);
	Z.clearBuffer(), Dr.releasePrimitive(wr), Dr.releasePrimitive(Tr), Er.pop(), Er.pop();
	let s = Er.length;
	return s > 0 && (Tr = Er[s - 1], wr = Er[s - 2]), o;
}
function kr(e, t, n, r, i = null, a = 0, o = 0) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = Z, u = e * 2;
	if (Zn(u, c)) {
		let t = Qn(e, l), n = $n(u, c);
		return Y(X(e), s, wr), r(t, n, !1, o, a + e, wr);
	} else {
		let u = er(e), d = tr(e, l), f = u, p = d, m, h, g, _;
		if (i && (g = wr, _ = Tr, Y(X(f), s, g), Y(X(p), s, _), m = i(g), h = i(_), h < m)) {
			f = d, p = u;
			let e = m;
			m = h, h = e, g = _;
		}
		g || (g = wr, Y(X(f), s, g));
		let v = Zn(f * 2, c), y = n(g, v, m, o + 1, a + f), b;
		if (y === 2) {
			let e = w(f);
			b = r(e, T(f) - e, !0, o + 1, a + f, g);
		} else b = y && kr(f, t, n, r, i, a, o + 1);
		if (b) return !0;
		_ = Tr, Y(X(p), s, _);
		let x = Zn(p * 2, c), S = n(_, x, h, o + 1, a + p), C;
		if (S === 2) {
			let e = w(p);
			C = r(e, T(p) - e, !0, o + 1, a + p, _);
		} else C = S && kr(p, t, n, r, i, a, o + 1);
		if (C) return !0;
		return !1;
		function w(e) {
			let { uint16Array: t, uint32Array: n } = Z, r = e * 2;
			for (; !Zn(r, t);) e = er(e), r = e * 2;
			return Qn(e, n);
		}
		function T(e) {
			let { uint16Array: t, uint32Array: n } = Z, r = e * 2;
			for (; !Zn(r, t);) e = tr(e, n), r = e * 2;
			return Qn(e, n) + $n(r, t);
		}
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/closestPointToPoint.js
var Ar = /* @__PURE__ */ new D(), jr = /* @__PURE__ */ new D();
function Mr(e, t, n = {}, r = 0, i = Infinity) {
	let a = r * r, o = i * i, s = Infinity, c = null;
	if (e.shapecast({
		boundsTraverseOrder: (e) => (Ar.copy(t).clamp(e.min, e.max), Ar.distanceToSquared(t)),
		intersectsBounds: (e, t, n) => n < s && n < o,
		intersectsTriangle: (e, n) => {
			e.closestPointToPoint(t, Ar);
			let r = t.distanceToSquared(Ar);
			return r < s && (jr.copy(Ar), s = r, c = n), r < a;
		}
	}), s === Infinity) return null;
	let l = Math.sqrt(s);
	return n.point ? n.point.copy(jr) : n.point = jr.clone(), n.distance = l, n.faceIndex = c, n;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/utils/ThreeRayIntersectUtilities.js
var Nr = !0, Pr = /* @__PURE__ */ new D(), Fr = /* @__PURE__ */ new D(), Ir = /* @__PURE__ */ new D(), Lr = /* @__PURE__ */ new c(), Rr = /* @__PURE__ */ new c(), zr = /* @__PURE__ */ new c(), Br = /* @__PURE__ */ new D(), Vr = /* @__PURE__ */ new D(), Hr = /* @__PURE__ */ new D(), Ur = /* @__PURE__ */ new D();
function Wr(e, t, n, r, i, a, o, s) {
	let c;
	if (c = a === 1 ? e.intersectTriangle(r, n, t, !0, i) : e.intersectTriangle(t, n, r, a !== 2, i), c === null) return null;
	let l = e.origin.distanceTo(i);
	return l < o || l > s ? null : {
		distance: l,
		point: i.clone()
	};
}
function Gr(e, t, n, r, i, a, o, s, l, u, d) {
	Pr.fromBufferAttribute(t, a), Fr.fromBufferAttribute(t, o), Ir.fromBufferAttribute(t, s);
	let f = Wr(e, Pr, Fr, Ir, Ur, l, u, d);
	if (f) {
		let t = new D();
		h.getBarycoord(Ur, Pr, Fr, Ir, t), r && (Lr.fromBufferAttribute(r, a), Rr.fromBufferAttribute(r, o), zr.fromBufferAttribute(r, s), f.uv = h.getInterpolation(Ur, Pr, Fr, Ir, Lr, Rr, zr, new c())), i && (Lr.fromBufferAttribute(i, a), Rr.fromBufferAttribute(i, o), zr.fromBufferAttribute(i, s), f.uv1 = h.getInterpolation(Ur, Pr, Fr, Ir, Lr, Rr, zr, new c())), n && (Br.fromBufferAttribute(n, a), Vr.fromBufferAttribute(n, o), Hr.fromBufferAttribute(n, s), f.normal = h.getInterpolation(Ur, Pr, Fr, Ir, Br, Vr, Hr, new D()), f.normal.dot(e.direction) > 0 && f.normal.multiplyScalar(-1));
		let l = {
			a,
			b: o,
			c: s,
			normal: new D(),
			materialIndex: 0
		};
		h.getNormal(Pr, Fr, Ir, l.normal), f.face = l, f.faceIndex = a, Nr && (f.barycoord = t);
	}
	return f;
}
function Kr(e, t, n, r, i, a, o) {
	let s = r * 3, c = s + 0, l = s + 1, u = s + 2, d = e.index;
	e.index && (c = d.getX(c), l = d.getX(l), u = d.getX(u));
	let { position: f, normal: p, uv: m, uv1: h } = e.attributes, g = Gr(n, f, p, m, h, c, l, u, t, a, o);
	return g ? (g.faceIndex = r, i && i.push(g), g) : null;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/utils/TriangleUtilities.js
function Q(e, t, n, r) {
	let i = e.a, a = e.b, o = e.c, s = t, c = t + 1, l = t + 2;
	n && (s = n.getX(s), c = n.getX(c), l = n.getX(l)), i.x = r.getX(s), i.y = r.getY(s), i.z = r.getZ(s), a.x = r.getX(c), a.y = r.getY(c), a.z = r.getZ(c), o.x = r.getX(l), o.y = r.getY(l), o.z = r.getZ(l);
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/utils/iterationUtils.generated.js
function qr(e, t, n, r, i, a, o, s) {
	let { geometry: c, _indirectBuffer: l } = e;
	for (let e = r, l = r + i; e < l; e++) Kr(c, t, n, e, a, o, s);
}
function Jr(e, t, n, r, i, a, o) {
	let { geometry: s, _indirectBuffer: c } = e, l = Infinity, u = null;
	for (let e = r, c = r + i; e < c; e++) {
		let r;
		r = Kr(s, t, n, e, null, a, o), r && r.distance < l && (u = r, l = r.distance);
	}
	return u;
}
function Yr(e, t, n, r, i, a, o) {
	let { geometry: s } = n, { index: c } = s, l = s.attributes.position;
	for (let n = e, s = t + e; n < s; n++) {
		let e;
		if (e = n, Q(o, e * 3, c, l), o.needsUpdate = !0, r(o, e, i, a)) return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/refit.generated.js
function Xr(e, t = null) {
	t && Array.isArray(t) && (t = new Set(t));
	let n = e.geometry, r = n.index ? n.index.array : null, i = n.attributes.position, a, o, s, c, l = 0, u = e._roots;
	for (let e = 0, t = u.length; e < t; e++) a = u[e], o = new Uint32Array(a), s = new Uint16Array(a), c = new Float32Array(a), d(0, l), l += a.byteLength;
	function d(e, n, a = !1) {
		let l = e * 2;
		if (s[l + 15] === 65535) {
			let t = o[e + 6], n = s[l + 14], a = Infinity, u = Infinity, d = Infinity, f = -Infinity, p = -Infinity, m = -Infinity;
			for (let e = 3 * t, o = 3 * (t + n); e < o; e++) {
				let t = r[e], n = i.getX(t), o = i.getY(t), s = i.getZ(t);
				n < a && (a = n), n > f && (f = n), o < u && (u = o), o > p && (p = o), s < d && (d = s), s > m && (m = s);
			}
			return c[e + 0] !== a || c[e + 1] !== u || c[e + 2] !== d || c[e + 3] !== f || c[e + 4] !== p || c[e + 5] !== m ? (c[e + 0] = a, c[e + 1] = u, c[e + 2] = d, c[e + 3] = f, c[e + 4] = p, c[e + 5] = m, !0) : !1;
		} else {
			let r = e + 8, i = o[e + 6], s = r + n, l = i + n, u = a, f = !1, p = !1;
			t ? u ||= (f = t.has(s), p = t.has(l), !f && !p) : (f = !0, p = !0);
			let m = u || f, h = u || p, g = !1;
			m && (g = d(r, n, u));
			let _ = !1;
			h && (_ = d(i, n, u));
			let v = g || _;
			if (v) for (let t = 0; t < 3; t++) {
				let n = r + t, a = i + t, o = c[n], s = c[n + 3], l = c[a], u = c[a + 3];
				c[e + t] = o < l ? o : l, c[e + t + 3] = s > u ? s : u;
			}
			return v;
		}
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/utils/intersectUtils.js
function Zr(e, t, n, r, i) {
	let a, o, s, c, l, u, d = 1 / n.direction.x, f = 1 / n.direction.y, p = 1 / n.direction.z, m = n.origin.x, h = n.origin.y, g = n.origin.z, _ = t[e], v = t[e + 3], y = t[e + 1], b = t[e + 3 + 1], x = t[e + 2], S = t[e + 3 + 2];
	return d >= 0 ? (a = (_ - m) * d, o = (v - m) * d) : (a = (v - m) * d, o = (_ - m) * d), f >= 0 ? (s = (y - h) * f, c = (b - h) * f) : (s = (b - h) * f, c = (y - h) * f), a > c || s > o || ((s > a || isNaN(a)) && (a = s), (c < o || isNaN(o)) && (o = c), p >= 0 ? (l = (x - g) * p, u = (S - g) * p) : (l = (S - g) * p, u = (x - g) * p), a > u || l > o) ? !1 : ((l > a || a !== a) && (a = l), (u < o || o !== o) && (o = u), a <= i && o >= r);
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/utils/iterationUtils_indirect.generated.js
function Qr(e, t, n, r, i, a, o, s) {
	let { geometry: c, _indirectBuffer: l } = e;
	for (let e = r, u = r + i; e < u; e++) Kr(c, t, n, l ? l[e] : e, a, o, s);
}
function $r(e, t, n, r, i, a, o) {
	let { geometry: s, _indirectBuffer: c } = e, l = Infinity, u = null;
	for (let e = r, d = r + i; e < d; e++) {
		let r;
		r = Kr(s, t, n, c ? c[e] : e, null, a, o), r && r.distance < l && (u = r, l = r.distance);
	}
	return u;
}
function ei(e, t, n, r, i, a, o) {
	let { geometry: s } = n, { index: c } = s, l = s.attributes.position;
	for (let s = e, u = t + e; s < u; s++) {
		let e;
		if (e = n.resolveTriangleIndex(s), Q(o, e * 3, c, l), o.needsUpdate = !0, r(o, e, i, a)) return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/raycast.generated.js
function ti(e, t, n, r, i, a, o) {
	Z.setBuffer(e._roots[t]), ni(0, e, n, r, i, a, o), Z.clearBuffer();
}
function ni(e, t, n, r, i, a, o) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = Z, u = e * 2;
	if (Zn(u, c)) qr(t, n, r, Qn(e, l), $n(u, c), i, a, o);
	else {
		let c = er(e);
		Zr(c, s, r, a, o) && ni(c, t, n, r, i, a, o);
		let u = tr(e, l);
		Zr(u, s, r, a, o) && ni(u, t, n, r, i, a, o);
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/raycastFirst.generated.js
var ri = [
	"x",
	"y",
	"z"
];
function ii(e, t, n, r, i, a) {
	Z.setBuffer(e._roots[t]);
	let o = ai(0, e, n, r, i, a);
	return Z.clearBuffer(), o;
}
function ai(e, t, n, r, i, a) {
	let { float32Array: o, uint16Array: s, uint32Array: c } = Z, l = e * 2;
	if (Zn(l, s)) return Jr(t, n, r, Qn(e, c), $n(l, s), i, a);
	{
		let s = nr(e, c), l = ri[s], u = r.direction[l] >= 0, d, f;
		u ? (d = er(e), f = tr(e, c)) : (d = tr(e, c), f = er(e));
		let p = Zr(d, o, r, i, a) ? ai(d, t, n, r, i, a) : null;
		if (p) {
			let e = p.point[l];
			if (u ? e <= o[f + s] : e >= o[f + s + 3]) return p;
		}
		let m = Zr(f, o, r, i, a) ? ai(f, t, n, r, i, a) : null;
		return p && m ? p.distance <= m.distance ? p : m : p || m || null;
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/intersectsGeometry.generated.js
var oi = /* @__PURE__ */ new p(), si = /* @__PURE__ */ new br(), ci = /* @__PURE__ */ new br(), li = /* @__PURE__ */ new F(), ui = /* @__PURE__ */ new xr(), di = /* @__PURE__ */ new xr();
function fi(e, t, n, r) {
	Z.setBuffer(e._roots[t]);
	let i = pi(0, e, n, r);
	return Z.clearBuffer(), i;
}
function pi(e, t, n, r, i = null) {
	let { float32Array: a, uint16Array: o, uint32Array: s } = Z, c = e * 2;
	if (i === null && (n.boundingBox || n.computeBoundingBox(), ui.set(n.boundingBox.min, n.boundingBox.max, r), i = ui), Zn(c, o)) {
		let i = t.geometry, l = i.index, u = i.attributes.position, d = n.index, f = n.attributes.position, p = Qn(e, s), m = $n(c, o);
		if (li.copy(r).invert(), n.boundsTree) return Y(X(e), a, di), di.matrix.copy(li), di.needsUpdate = !0, n.boundsTree.shapecast({
			intersectsBounds: (e) => di.intersectsBox(e),
			intersectsTriangle: (e) => {
				e.a.applyMatrix4(r), e.b.applyMatrix4(r), e.c.applyMatrix4(r), e.needsUpdate = !0;
				for (let t = p * 3, n = (m + p) * 3; t < n; t += 3) if (Q(ci, t, l, u), ci.needsUpdate = !0, e.intersectsTriangle(ci)) return !0;
				return !1;
			}
		});
		for (let e = p * 3, t = (m + p) * 3; e < t; e += 3) {
			Q(si, e, l, u), si.a.applyMatrix4(li), si.b.applyMatrix4(li), si.c.applyMatrix4(li), si.needsUpdate = !0;
			for (let e = 0, t = d.count; e < t; e += 3) if (Q(ci, e, d, f), ci.needsUpdate = !0, si.intersectsTriangle(ci)) return !0;
		}
	} else {
		let o = e + 8, c = s[e + 6];
		return Y(X(o), a, oi), !!(i.intersectsBox(oi) && pi(o, t, n, r, i) || (Y(X(c), a, oi), i.intersectsBox(oi) && pi(c, t, n, r, i)));
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/closestPointToGeometry.generated.js
var mi = /* @__PURE__ */ new F(), hi = /* @__PURE__ */ new xr(), gi = /* @__PURE__ */ new xr(), _i = /* @__PURE__ */ new D(), vi = /* @__PURE__ */ new D(), yi = /* @__PURE__ */ new D(), bi = /* @__PURE__ */ new D();
function xi(e, t, n, r = {}, i = {}, a = 0, o = Infinity) {
	t.boundingBox || t.computeBoundingBox(), hi.set(t.boundingBox.min, t.boundingBox.max, n), hi.needsUpdate = !0;
	let s = e.geometry, c = s.attributes.position, l = s.index, u = t.attributes.position, d = t.index, f = Cr.getPrimitive(), p = Cr.getPrimitive(), m = _i, h = vi, g = null, _ = null;
	i && (g = yi, _ = bi);
	let v = Infinity, y = null, b = null;
	return mi.copy(n).invert(), gi.matrix.copy(mi), e.shapecast({
		boundsTraverseOrder: (e) => hi.distanceToBox(e),
		intersectsBounds: (e, t, n) => n < v && n < o ? (t && (gi.min.copy(e.min), gi.max.copy(e.max), gi.needsUpdate = !0), !0) : !1,
		intersectsRange: (e, r) => {
			if (t.boundsTree) return t.boundsTree.shapecast({
				boundsTraverseOrder: (e) => gi.distanceToBox(e),
				intersectsBounds: (e, t, n) => n < v && n < o,
				intersectsRange: (t, i) => {
					for (let o = t, s = t + i; o < s; o++) {
						Q(p, 3 * o, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
						for (let t = e, n = e + r; t < n; t++) {
							Q(f, 3 * t, l, c), f.needsUpdate = !0;
							let e = f.distanceToTriangle(p, m, g);
							if (e < v && (h.copy(m), _ && _.copy(g), v = e, y = t, b = o), e < a) return !0;
						}
					}
				}
			});
			{
				let i = kn(t);
				for (let t = 0, o = i; t < o; t++) {
					Q(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
					for (let n = e, i = e + r; n < i; n++) {
						Q(f, 3 * n, l, c), f.needsUpdate = !0;
						let e = f.distanceToTriangle(p, m, g);
						if (e < v && (h.copy(m), _ && _.copy(g), v = e, y = n, b = t), e < a) return !0;
					}
				}
			}
		}
	}), Cr.releasePrimitive(f), Cr.releasePrimitive(p), v === Infinity ? null : (r.point ? r.point.copy(h) : r.point = h.clone(), r.distance = v, r.faceIndex = y, i && (i.point ? i.point.copy(_) : i.point = _.clone(), i.point.applyMatrix4(mi), h.applyMatrix4(mi), i.distance = h.sub(i.point).length(), i.faceIndex = b), r);
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/refit_indirect.generated.js
function Si(e, t = null) {
	t && Array.isArray(t) && (t = new Set(t));
	let n = e.geometry, r = n.index ? n.index.array : null, i = n.attributes.position, a, o, s, c, l = 0, u = e._roots;
	for (let e = 0, t = u.length; e < t; e++) a = u[e], o = new Uint32Array(a), s = new Uint16Array(a), c = new Float32Array(a), d(0, l), l += a.byteLength;
	function d(n, a, l = !1) {
		let u = n * 2;
		if (s[u + 15] === 65535) {
			let t = o[n + 6], a = s[u + 14], l = Infinity, d = Infinity, f = Infinity, p = -Infinity, m = -Infinity, h = -Infinity;
			for (let n = t, o = t + a; n < o; n++) {
				let t = 3 * e.resolveTriangleIndex(n);
				for (let e = 0; e < 3; e++) {
					let n = t + e;
					n = r ? r[n] : n;
					let a = i.getX(n), o = i.getY(n), s = i.getZ(n);
					a < l && (l = a), a > p && (p = a), o < d && (d = o), o > m && (m = o), s < f && (f = s), s > h && (h = s);
				}
			}
			return c[n + 0] !== l || c[n + 1] !== d || c[n + 2] !== f || c[n + 3] !== p || c[n + 4] !== m || c[n + 5] !== h ? (c[n + 0] = l, c[n + 1] = d, c[n + 2] = f, c[n + 3] = p, c[n + 4] = m, c[n + 5] = h, !0) : !1;
		} else {
			let e = n + 8, r = o[n + 6], i = e + a, s = r + a, u = l, f = !1, p = !1;
			t ? u ||= (f = t.has(i), p = t.has(s), !f && !p) : (f = !0, p = !0);
			let m = u || f, h = u || p, g = !1;
			m && (g = d(e, a, u));
			let _ = !1;
			h && (_ = d(r, a, u));
			let v = g || _;
			if (v) for (let t = 0; t < 3; t++) {
				let i = e + t, a = r + t, o = c[i], s = c[i + 3], l = c[a], u = c[a + 3];
				c[n + t] = o < l ? o : l, c[n + t + 3] = s > u ? s : u;
			}
			return v;
		}
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/raycast_indirect.generated.js
function Ci(e, t, n, r, i, a, o) {
	Z.setBuffer(e._roots[t]), wi(0, e, n, r, i, a, o), Z.clearBuffer();
}
function wi(e, t, n, r, i, a, o) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = Z, u = e * 2;
	if (Zn(u, c)) Qr(t, n, r, Qn(e, l), $n(u, c), i, a, o);
	else {
		let c = er(e);
		Zr(c, s, r, a, o) && wi(c, t, n, r, i, a, o);
		let u = tr(e, l);
		Zr(u, s, r, a, o) && wi(u, t, n, r, i, a, o);
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/raycastFirst_indirect.generated.js
var Ti = [
	"x",
	"y",
	"z"
];
function Ei(e, t, n, r, i, a) {
	Z.setBuffer(e._roots[t]);
	let o = Di(0, e, n, r, i, a);
	return Z.clearBuffer(), o;
}
function Di(e, t, n, r, i, a) {
	let { float32Array: o, uint16Array: s, uint32Array: c } = Z, l = e * 2;
	if (Zn(l, s)) return $r(t, n, r, Qn(e, c), $n(l, s), i, a);
	{
		let s = nr(e, c), l = Ti[s], u = r.direction[l] >= 0, d, f;
		u ? (d = er(e), f = tr(e, c)) : (d = tr(e, c), f = er(e));
		let p = Zr(d, o, r, i, a) ? Di(d, t, n, r, i, a) : null;
		if (p) {
			let e = p.point[l];
			if (u ? e <= o[f + s] : e >= o[f + s + 3]) return p;
		}
		let m = Zr(f, o, r, i, a) ? Di(f, t, n, r, i, a) : null;
		return p && m ? p.distance <= m.distance ? p : m : p || m || null;
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/intersectsGeometry_indirect.generated.js
var Oi = /* @__PURE__ */ new p(), ki = /* @__PURE__ */ new br(), Ai = /* @__PURE__ */ new br(), ji = /* @__PURE__ */ new F(), Mi = /* @__PURE__ */ new xr(), Ni = /* @__PURE__ */ new xr();
function Pi(e, t, n, r) {
	Z.setBuffer(e._roots[t]);
	let i = Fi(0, e, n, r);
	return Z.clearBuffer(), i;
}
function Fi(e, t, n, r, i = null) {
	let { float32Array: a, uint16Array: o, uint32Array: s } = Z, c = e * 2;
	if (i === null && (n.boundingBox || n.computeBoundingBox(), Mi.set(n.boundingBox.min, n.boundingBox.max, r), i = Mi), Zn(c, o)) {
		let i = t.geometry, l = i.index, u = i.attributes.position, d = n.index, f = n.attributes.position, p = Qn(e, s), m = $n(c, o);
		if (ji.copy(r).invert(), n.boundsTree) return Y(X(e), a, Ni), Ni.matrix.copy(ji), Ni.needsUpdate = !0, n.boundsTree.shapecast({
			intersectsBounds: (e) => Ni.intersectsBox(e),
			intersectsTriangle: (e) => {
				e.a.applyMatrix4(r), e.b.applyMatrix4(r), e.c.applyMatrix4(r), e.needsUpdate = !0;
				for (let n = p, r = m + p; n < r; n++) if (Q(Ai, 3 * t.resolveTriangleIndex(n), l, u), Ai.needsUpdate = !0, e.intersectsTriangle(Ai)) return !0;
				return !1;
			}
		});
		for (let e = p, n = m + p; e < n; e++) {
			Q(ki, 3 * t.resolveTriangleIndex(e), l, u), ki.a.applyMatrix4(ji), ki.b.applyMatrix4(ji), ki.c.applyMatrix4(ji), ki.needsUpdate = !0;
			for (let e = 0, t = d.count; e < t; e += 3) if (Q(Ai, e, d, f), Ai.needsUpdate = !0, ki.intersectsTriangle(Ai)) return !0;
		}
	} else {
		let o = e + 8, c = s[e + 6];
		return Y(X(o), a, Oi), !!(i.intersectsBox(Oi) && Fi(o, t, n, r, i) || (Y(X(c), a, Oi), i.intersectsBox(Oi) && Fi(c, t, n, r, i)));
	}
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/closestPointToGeometry_indirect.generated.js
var Ii = /* @__PURE__ */ new F(), Li = /* @__PURE__ */ new xr(), Ri = /* @__PURE__ */ new xr(), zi = /* @__PURE__ */ new D(), Bi = /* @__PURE__ */ new D(), Vi = /* @__PURE__ */ new D(), Hi = /* @__PURE__ */ new D();
function Ui(e, t, n, r = {}, i = {}, a = 0, o = Infinity) {
	t.boundingBox || t.computeBoundingBox(), Li.set(t.boundingBox.min, t.boundingBox.max, n), Li.needsUpdate = !0;
	let s = e.geometry, c = s.attributes.position, l = s.index, u = t.attributes.position, d = t.index, f = Cr.getPrimitive(), p = Cr.getPrimitive(), m = zi, h = Bi, g = null, _ = null;
	i && (g = Vi, _ = Hi);
	let v = Infinity, y = null, b = null;
	return Ii.copy(n).invert(), Ri.matrix.copy(Ii), e.shapecast({
		boundsTraverseOrder: (e) => Li.distanceToBox(e),
		intersectsBounds: (e, t, n) => n < v && n < o ? (t && (Ri.min.copy(e.min), Ri.max.copy(e.max), Ri.needsUpdate = !0), !0) : !1,
		intersectsRange: (r, i) => {
			if (t.boundsTree) {
				let s = t.boundsTree;
				return s.shapecast({
					boundsTraverseOrder: (e) => Ri.distanceToBox(e),
					intersectsBounds: (e, t, n) => n < v && n < o,
					intersectsRange: (t, o) => {
						for (let x = t, S = t + o; x < S; x++) {
							let t = s.resolveTriangleIndex(x);
							Q(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
							for (let t = r, n = r + i; t < n; t++) {
								let n = e.resolveTriangleIndex(t);
								Q(f, 3 * n, l, c), f.needsUpdate = !0;
								let r = f.distanceToTriangle(p, m, g);
								if (r < v && (h.copy(m), _ && _.copy(g), v = r, y = t, b = x), r < a) return !0;
							}
						}
					}
				});
			} else {
				let o = kn(t);
				for (let t = 0, s = o; t < s; t++) {
					Q(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
					for (let n = r, o = r + i; n < o; n++) {
						let r = e.resolveTriangleIndex(n);
						Q(f, 3 * r, l, c), f.needsUpdate = !0;
						let i = f.distanceToTriangle(p, m, g);
						if (i < v && (h.copy(m), _ && _.copy(g), v = i, y = n, b = t), i < a) return !0;
					}
				}
			}
		}
	}), Cr.releasePrimitive(f), Cr.releasePrimitive(p), v === Infinity ? null : (r.point ? r.point.copy(h) : r.point = h.clone(), r.distance = v, r.faceIndex = y, i && (i.point ? i.point.copy(_) : i.point = _.clone(), i.point.applyMatrix4(Ii), h.applyMatrix4(Ii), i.distance = h.sub(i.point).length(), i.faceIndex = b), r);
}
//#endregion
//#region node_modules/three-mesh-bvh/src/utils/BufferUtils.js
function Wi() {
	return typeof SharedArrayBuffer < "u";
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/cast/bvhcast.js
var Gi = new Z.constructor(), Ki = new Z.constructor(), qi = new Sr(() => new p()), Ji = new p(), Yi = new p(), Xi = new p(), Zi = new p(), Qi = !1;
function $i(e, t, n, r) {
	if (Qi) throw Error("MeshBVH: Recursive calls to bvhcast not supported.");
	Qi = !0;
	let i = e._roots, a = t._roots, o, s = 0, c = 0, l = new F().copy(n).invert();
	for (let e = 0, t = i.length; e < t; e++) {
		Gi.setBuffer(i[e]), c = 0;
		let t = qi.getPrimitive();
		Y(X(0), Gi.float32Array, t), t.applyMatrix4(l);
		for (let e = 0, i = a.length; e < i && (Ki.setBuffer(a[e]), o = ea(0, 0, n, l, r, s, c, 0, 0, t), Ki.clearBuffer(), c += a[e].length, !o); e++);
		if (qi.releasePrimitive(t), Gi.clearBuffer(), s += i[e].length, o) break;
	}
	return Qi = !1, o;
}
function ea(e, t, n, r, i, a = 0, o = 0, s = 0, c = 0, l = null, u = !1) {
	let d, f;
	u ? (d = Ki, f = Gi) : (d = Gi, f = Ki);
	let p = d.float32Array, m = d.uint32Array, h = d.uint16Array, g = f.float32Array, _ = f.uint32Array, v = f.uint16Array, y = e * 2, b = t * 2, x = Zn(y, h), S = Zn(b, v), C = !1;
	if (S && x) C = u ? i(Qn(t, _), $n(t * 2, v), Qn(e, m), $n(e * 2, h), c, o + t, s, a + e) : i(Qn(e, m), $n(e * 2, h), Qn(t, _), $n(t * 2, v), s, a + e, c, o + t);
	else if (S) {
		let l = qi.getPrimitive();
		Y(X(t), g, l), l.applyMatrix4(n);
		let d = er(e), f = tr(e, m);
		Y(X(d), p, Ji), Y(X(f), p, Yi);
		let h = l.intersectsBox(Ji), _ = l.intersectsBox(Yi);
		C = h && ea(t, d, r, n, i, o, a, c, s + 1, l, !u) || _ && ea(t, f, r, n, i, o, a, c, s + 1, l, !u), qi.releasePrimitive(l);
	} else {
		let d = er(t), f = tr(t, _);
		Y(X(d), g, Xi), Y(X(f), g, Zi);
		let h = l.intersectsBox(Xi), v = l.intersectsBox(Zi);
		if (h && v) C = ea(e, d, n, r, i, a, o, s, c + 1, l, u) || ea(e, f, n, r, i, a, o, s, c + 1, l, u);
		else if (h) if (x) C = ea(e, d, n, r, i, a, o, s, c + 1, l, u);
		else {
			let t = qi.getPrimitive();
			t.copy(Xi).applyMatrix4(n);
			let l = er(e), f = tr(e, m);
			Y(X(l), p, Ji), Y(X(f), p, Yi);
			let h = t.intersectsBox(Ji), g = t.intersectsBox(Yi);
			C = h && ea(d, l, r, n, i, o, a, c, s + 1, t, !u) || g && ea(d, f, r, n, i, o, a, c, s + 1, t, !u), qi.releasePrimitive(t);
		}
		else if (v) if (x) C = ea(e, f, n, r, i, a, o, s, c + 1, l, u);
		else {
			let t = qi.getPrimitive();
			t.copy(Zi).applyMatrix4(n);
			let l = er(e), d = tr(e, m);
			Y(X(l), p, Ji), Y(X(d), p, Yi);
			let h = t.intersectsBox(Ji), g = t.intersectsBox(Yi);
			C = h && ea(f, l, r, n, i, o, a, c, s + 1, t, !u) || g && ea(f, d, r, n, i, o, a, c, s + 1, t, !u), qi.releasePrimitive(t);
		}
	}
	return C;
}
//#endregion
//#region node_modules/three-mesh-bvh/src/core/MeshBVH.js
var ta = /* @__PURE__ */ new xr(), na = /* @__PURE__ */ new p(), ra = {
	strategy: 0,
	maxDepth: 40,
	maxLeafTris: 10,
	useSharedArrayBuffer: !1,
	setBoundingBox: !0,
	onProgress: null,
	indirect: !1,
	verbose: !0,
	range: null
}, ia = class e {
	static serialize(e, t = {}) {
		t = {
			cloneBuffers: !0,
			...t
		};
		let n = e.geometry, r = e._roots, i = e._indirectBuffer, a = n.getIndex(), o;
		return o = t.cloneBuffers ? {
			roots: r.map((e) => e.slice()),
			index: a ? a.array.slice() : null,
			indirectBuffer: i ? i.slice() : null
		} : {
			roots: r,
			index: a ? a.array : null,
			indirectBuffer: i
		}, o;
	}
	static deserialize(t, n, r = {}) {
		r = {
			setIndex: !0,
			indirect: !!t.indirectBuffer,
			...r
		};
		let { index: i, roots: a, indirectBuffer: o } = t, s = new e(n, {
			...r,
			[Dn]: !0
		});
		if (s._roots = a, s._indirectBuffer = o || null, r.setIndex) {
			let e = n.getIndex();
			if (e === null) {
				let e = new u(t.index, 1, !1);
				n.setIndex(e);
			} else e.array !== i && (e.array.set(i), e.needsUpdate = !0);
		}
		return s;
	}
	get indirect() {
		return !!this._indirectBuffer;
	}
	constructor(e, t = {}) {
		if (!e.isBufferGeometry) throw Error("MeshBVH: Only BufferGeometries are supported.");
		if (e.index && e.index.isInterleavedBufferAttribute) throw Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.");
		if (t = Object.assign({
			...ra,
			[Dn]: !1
		}, t), t.useSharedArrayBuffer && !Wi()) throw Error("MeshBVH: SharedArrayBuffer is not available.");
		this.geometry = e, this._roots = null, this._indirectBuffer = null, t[Dn] || (pr(this, t), !e.boundingBox && t.setBoundingBox && (e.boundingBox = this.getBoundingBox(new p()))), this.resolveTriangleIndex = t.indirect ? (e) => this._indirectBuffer[e] : (e) => e;
	}
	refit(e = null) {
		return (this.indirect ? Si : Xr)(this, e);
	}
	traverse(e, t = 0) {
		let n = this._roots[t], r = new Uint32Array(n), i = new Uint16Array(n);
		a(0);
		function a(t, o = 0) {
			let s = t * 2, c = i[s + 15] === Tn;
			if (c) {
				let a = r[t + 6], l = i[s + 14];
				e(o, c, new Float32Array(n, t * 4, 6), a, l);
			} else {
				let i = t + 32 / 4, s = r[t + 6], l = r[t + 7];
				e(o, c, new Float32Array(n, t * 4, 6), l) || (a(i, o + 1), a(s, o + 1));
			}
		}
	}
	raycast(e, t = 0, n = 0, r = Infinity) {
		let i = this._roots, a = this.geometry, o = [], s = t.isMaterial, c = Array.isArray(t), l = a.groups, u = s ? t.side : t, d = this.indirect ? Ci : ti;
		for (let a = 0, s = i.length; a < s; a++) {
			let i = c ? t[l[a].materialIndex].side : u, s = o.length;
			if (d(this, a, i, e, o, n, r), c) {
				let e = l[a].materialIndex;
				for (let t = s, n = o.length; t < n; t++) o[t].face.materialIndex = e;
			}
		}
		return o;
	}
	raycastFirst(e, t = 0, n = 0, r = Infinity) {
		let i = this._roots, a = this.geometry, o = t.isMaterial, s = Array.isArray(t), c = null, l = a.groups, u = o ? t.side : t, d = this.indirect ? Ei : ii;
		for (let a = 0, o = i.length; a < o; a++) {
			let i = s ? t[l[a].materialIndex].side : u, o = d(this, a, i, e, n, r);
			o != null && (c == null || o.distance < c.distance) && (c = o, s && (o.face.materialIndex = l[a].materialIndex));
		}
		return c;
	}
	intersectsGeometry(e, t) {
		let n = !1, r = this._roots, i = this.indirect ? Pi : fi;
		for (let a = 0, o = r.length; a < o && (n = i(this, a, e, t), !n); a++);
		return n;
	}
	shapecast(e) {
		let t = Cr.getPrimitive(), n = this.indirect ? ei : Yr, { boundsTraverseOrder: r, intersectsBounds: i, intersectsRange: a, intersectsTriangle: o } = e;
		if (a && o) {
			let e = a;
			a = (r, i, a, s, c) => e(r, i, a, s, c) ? !0 : n(r, i, this, o, a, s, t);
		} else a ||= o ? (e, r, i, a) => n(e, r, this, o, i, a, t) : (e, t, n) => n;
		let s = !1, c = 0, l = this._roots;
		for (let e = 0, t = l.length; e < t; e++) {
			let t = l[e];
			if (s = Or(this, e, i, a, r, c), s) break;
			c += t.byteLength;
		}
		return Cr.releasePrimitive(t), s;
	}
	bvhcast(e, t, n) {
		let { intersectsRanges: r, intersectsTriangles: i } = n, a = Cr.getPrimitive(), o = this.geometry.index, s = this.geometry.attributes.position, c = this.indirect ? (e) => {
			let t = this.resolveTriangleIndex(e);
			Q(a, t * 3, o, s);
		} : (e) => {
			Q(a, e * 3, o, s);
		}, l = Cr.getPrimitive(), u = e.geometry.index, d = e.geometry.attributes.position, f = e.indirect ? (t) => {
			let n = e.resolveTriangleIndex(t);
			Q(l, n * 3, u, d);
		} : (e) => {
			Q(l, e * 3, u, d);
		};
		if (i) {
			let e = (e, n, r, o, s, u, d, p) => {
				for (let m = r, h = r + o; m < h; m++) {
					f(m), l.a.applyMatrix4(t), l.b.applyMatrix4(t), l.c.applyMatrix4(t), l.needsUpdate = !0;
					for (let t = e, r = e + n; t < r; t++) if (c(t), a.needsUpdate = !0, i(a, l, t, m, s, u, d, p)) return !0;
				}
				return !1;
			};
			if (r) {
				let t = r;
				r = function(n, r, i, a, o, s, c, l) {
					return t(n, r, i, a, o, s, c, l) ? !0 : e(n, r, i, a, o, s, c, l);
				};
			} else r = e;
		}
		return $i(this, e, t, r);
	}
	intersectsBox(e, t) {
		return ta.set(e.min, e.max, t), ta.needsUpdate = !0, this.shapecast({
			intersectsBounds: (e) => ta.intersectsBox(e),
			intersectsTriangle: (e) => ta.intersectsTriangle(e)
		});
	}
	intersectsSphere(e) {
		return this.shapecast({
			intersectsBounds: (t) => e.intersectsBox(t),
			intersectsTriangle: (t) => t.intersectsSphere(e)
		});
	}
	closestPointToGeometry(e, t, n = {}, r = {}, i = 0, a = Infinity) {
		return (this.indirect ? Ui : xi)(this, e, t, n, r, i, a);
	}
	closestPointToPoint(e, t = {}, n = 0, r = Infinity) {
		return Mr(this, e, t, n, r);
	}
	getBoundingBox(e) {
		return e.makeEmpty(), this._roots.forEach((t) => {
			Y(0, new Float32Array(t), na), e.union(na);
		}), e;
	}
};
//#endregion
//#region node_modules/three-mesh-bvh/src/utils/GeometryRayIntersectUtilities.js
function aa(e, t, n) {
	return e === null ? null : (e.point.applyMatrix4(t.matrixWorld), e.distance = e.point.distanceTo(n.ray.origin), e.object = t, e);
}
//#endregion
//#region node_modules/three-mesh-bvh/src/utils/ExtensionUtilities.js
var oa = /* @__PURE__ */ new m(), sa = /* @__PURE__ */ new D(), ca = /* @__PURE__ */ new F(), la = j.prototype.raycast, ua = R.prototype.raycast, da = /* @__PURE__ */ new D(), fa = /* @__PURE__ */ new j(), pa = [];
function ma(e, t) {
	this.isBatchedMesh ? ha.call(this, e, t) : ga.call(this, e, t);
}
function ha(e, t) {
	if (this.boundsTrees) {
		let n = this.boundsTrees, r = this._drawInfo || this._instanceInfo, i = this._drawRanges || this._geometryInfo, a = this.matrixWorld;
		fa.material = this.material, fa.geometry = this.geometry;
		let o = fa.geometry.boundsTree, s = fa.geometry.drawRange;
		fa.geometry.boundingSphere === null && (fa.geometry.boundingSphere = new L());
		for (let o = 0, s = r.length; o < s; o++) {
			if (!this.getVisibleAt(o)) continue;
			let s = r[o].geometryIndex;
			if (fa.geometry.boundsTree = n[s], this.getMatrixAt(o, fa.matrixWorld).premultiply(a), !fa.geometry.boundsTree) {
				this.getBoundingBoxAt(s, fa.geometry.boundingBox), this.getBoundingSphereAt(s, fa.geometry.boundingSphere);
				let e = i[s];
				fa.geometry.setDrawRange(e.start, e.count);
			}
			fa.raycast(e, pa);
			for (let e = 0, n = pa.length; e < n; e++) {
				let n = pa[e];
				n.object = this, n.batchId = o, t.push(n);
			}
			pa.length = 0;
		}
		fa.geometry.boundsTree = o, fa.geometry.drawRange = s, fa.material = null, fa.geometry = null;
	} else ua.call(this, e, t);
}
function ga(e, t) {
	if (this.geometry.boundsTree) {
		if (this.material === void 0) return;
		ca.copy(this.matrixWorld).invert(), oa.copy(e.ray).applyMatrix4(ca), da.setFromMatrixScale(this.matrixWorld), sa.copy(oa.direction).multiply(da);
		let n = sa.length(), r = e.near / n, i = e.far / n, a = this.geometry.boundsTree;
		if (e.firstHitOnly === !0) {
			let n = aa(a.raycastFirst(oa, this.material, r, i), this, e);
			n && t.push(n);
		} else {
			let n = a.raycast(oa, this.material, r, i);
			for (let r = 0, i = n.length; r < i; r++) {
				let i = aa(n[r], this, e);
				i && t.push(i);
			}
		}
	} else la.call(this, e, t);
}
function _a(e = {}) {
	return this.boundsTree = new ia(this, e), this.boundsTree;
}
function va() {
	this.boundsTree = null;
}
//#endregion
//#region node_modules/@react-three/drei/core/Bvh.js
var ya = (e) => e.isMesh, ba = /* @__PURE__ */ K.forwardRef(({ enabled: e = !0, firstHitOnly: t = !1, children: n, strategy: r = 2, verbose: i = !1, setBoundingBox: a = !0, maxDepth: o = 40, maxLeafTris: s = 10, indirect: c = !1, ...l }, u) => {
	let d = K.useRef(null), f = z((e) => e.raycaster);
	return K.useImperativeHandle(u, () => d.current, []), K.useEffect(() => {
		if (e) {
			let e = {
				strategy: r,
				verbose: i,
				setBoundingBox: a,
				maxDepth: o,
				maxLeafTris: s,
				indirect: c
			}, n = d.current;
			return f.firstHitOnly = t, n.traverse((t) => {
				ya(t) && !t.geometry.boundsTree && t.raycast === j.prototype.raycast && (t.raycast = ma, t.geometry.computeBoundsTree = _a, t.geometry.disposeBoundsTree = va, t.geometry.computeBoundsTree(e));
			}), () => {
				delete f.firstHitOnly, n.traverse((e) => {
					ya(e) && e.geometry.boundsTree && (e.geometry.disposeBoundsTree(), e.raycast = j.prototype.raycast);
				});
			};
		}
	}, []), /*#__PURE__*/ K.createElement("group", V({ ref: d }, l), n);
}), xa = /* @__PURE__ */ K.forwardRef(function({ children: e, object: t, disable: n, disableX: r, disableY: i, disableZ: a, left: o, right: s, top: c, bottom: l, front: u, back: d, onCentered: f, precise: m = !0, cacheKey: h = 0, ...g }, _) {
	let v = K.useRef(null), y = K.useRef(null), b = K.useRef(null), [x] = K.useState(() => new p()), [S] = K.useState(() => new D()), [C] = K.useState(() => new L());
	return K.useLayoutEffect(() => {
		y.current.matrixWorld.identity(), x.setFromObject(t ?? b.current, m);
		let e = x.max.x - x.min.x, p = x.max.y - x.min.y, h = x.max.z - x.min.z;
		x.getCenter(S), x.getBoundingSphere(C);
		let g = c ? p / 2 : l ? -p / 2 : 0, _ = o ? -e / 2 : s ? e / 2 : 0, w = u ? h / 2 : d ? -h / 2 : 0;
		y.current.position.set(n || r ? 0 : -S.x + _, n || i ? 0 : -S.y + g, n || a ? 0 : -S.z + w), f?.({
			parent: v.current.parent,
			container: v.current,
			width: e,
			height: p,
			depth: h,
			boundingBox: x,
			boundingSphere: C,
			center: S,
			verticalAlignment: g,
			horizontalAlignment: _,
			depthAlignment: w
		});
	}, [
		h,
		f,
		c,
		o,
		u,
		n,
		r,
		i,
		a,
		t,
		m,
		s,
		l,
		d,
		x,
		S,
		C
	]), K.useImperativeHandle(_, () => v.current, []), /*#__PURE__*/ K.createElement("group", V({ ref: v }, g), /*#__PURE__*/ K.createElement("group", { ref: y }, /*#__PURE__*/ K.createElement("group", { ref: b }, e)));
}), Sa = /* @__PURE__ */ a({
	M: () => Ea,
	a: () => to,
	g: () => Za,
	i: () => Wa,
	s: () => Ua
}), $ = s(), Ca = Object.defineProperty, wa = (e, t, n) => t in e ? Ca(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ta = (e, t, n) => wa(e, typeof t == "symbol" ? t : t + "", n);
function Ea({ currentLine: e, scale: t }) {
	let n = (0, K.useRef)(null);
	return (0, $.jsxs)("group", { children: [(0, $.jsx)(xa, {
		bottom: !0,
		right: !0,
		position: [
			e.midPoint.x,
			e.midPoint.y,
			e.midPoint.z
		],
		rotation: [
			0,
			0,
			0
		],
		children: (0, $.jsx)(Cn, {
			color: "gray",
			scale: .05,
			ref: n,
			children: `${(e.startPoint.distanceTo(e.endPoint) * t).toFixed(2)} µm`
		})
	}), (0, $.jsx)(Pe, {
		points: [e.startPoint, e.endPoint],
		color: "white",
		lineWidth: 2,
		dashed: !1,
		segments: !0
	})] });
}
var Da = class {
	constructor(e, t, n, r, i) {
		if (Ta(this, "spacing", [
			1,
			1,
			1
		]), Ta(this, "offset", [
			0,
			0,
			0
		]), Ta(this, "matrix", new ne().identity()), Ta(this, "sliceList", []), Ta(this, "lowerThresholdValue", -Infinity), Ta(this, "upperThresholdValue", Infinity), Ta(this, "xLength", 1), Ta(this, "yLength", 1), Ta(this, "zLength", 1), Ta(this, "data"), Ta(this, "RASDimensions"), Ta(this, "inverseMatrix"), Ta(this, "min"), Ta(this, "max"), e !== void 0) {
			switch (this.xLength = Number(e) || 1, this.yLength = Number(t) || 1, this.zLength = Number(n) || 1, r) {
				case "Uint8":
				case "uint8":
				case "uchar":
				case "unsigned char":
				case "uint8_t":
					this.data = new Uint8Array(i);
					break;
				case "Int8":
				case "int8":
				case "signed char":
				case "int8_t":
					this.data = new Int8Array(i);
					break;
				case "Int16":
				case "int16":
				case "short":
				case "short int":
				case "signed short":
				case "signed short int":
				case "int16_t":
					this.data = new Int16Array(i);
					break;
				case "Uint16":
				case "uint16":
				case "ushort":
				case "unsigned short":
				case "unsigned short int":
				case "uint16_t":
					this.data = new Uint16Array(i);
					break;
				case "Int32":
				case "int32":
				case "int":
				case "signed int":
				case "int32_t":
					this.data = new Int32Array(i);
					break;
				case "Uint32":
				case "uint32":
				case "uint":
				case "unsigned int":
				case "uint32_t":
					this.data = new Uint32Array(i);
					break;
				case "longlong":
				case "long long":
				case "long long int":
				case "signed long long":
				case "signed long long int":
				case "int64":
				case "int64_t":
				case "ulonglong":
				case "unsigned long long":
				case "unsigned long long int":
				case "uint64":
				case "uint64_t": throw Error("uint64_t type is not supported in JavaScript");
				case "Float32":
				case "float32":
				case "float":
					this.data = new Float32Array(i);
					break;
				case "Float64":
				case "float64":
				case "double":
					this.data = new Float64Array(i);
					break;
				default: this.data = new Uint8Array(i);
			}
			if (this.data.length !== this.xLength * this.yLength * this.zLength) throw Error("lengths are not matching arrayBuffer size");
		}
	}
	get lowerThreshold() {
		return this.lowerThresholdValue;
	}
	set lowerThreshold(e) {
		this.lowerThresholdValue = e, this.sliceList.forEach((e) => {
			e.geometryNeedsUpdate = !0;
		});
	}
	get upperThreshold() {
		return this.upperThresholdValue;
	}
	set upperThreshold(e) {
		this.upperThresholdValue = e, this.sliceList.forEach((e) => {
			e.geometryNeedsUpdate = !0;
		});
	}
	getData(e, t, n) {
		return this.data[n * this.xLength * this.yLength + t * this.xLength + e];
	}
	access(e, t, n) {
		return n * this.xLength * this.yLength + t * this.xLength + e;
	}
	reverseAccess(e) {
		let t = Math.floor(e / (this.yLength * this.xLength)), n = Math.floor((e - t * this.yLength * this.xLength) / this.xLength);
		return [
			e - t * this.yLength * this.xLength - n * this.xLength,
			n,
			t
		];
	}
	map(e, t) {
		let { length: n } = this.data, r = t || this;
		for (let t = 0; t < n; t++) this.data[t] = e.call(r, this.data[t], t, this.data);
		return this;
	}
	extractPerpendicularPlane(e, t) {
		let n = new F().identity(), r = this, i, a, o, s, c = new D(), l = new D(), u = new D(), d = new D(this.xLength, this.yLength, this.zLength);
		switch (e) {
			case "x":
				c.set(1, 0, 0), l.set(0, 0, -1), u.set(0, -1, 0), i = this.spacing[2], a = this.spacing[1], s = new D(t, 0, 0), n.multiply(new F().makeRotationY(Math.PI / 2)), o = (r.RASDimensions[0] - 1) / 2, n.setPosition(new D(t - o, 0, 0));
				break;
			case "y":
				c.set(0, 1, 0), l.set(1, 0, 0), u.set(0, 0, 1), i = this.spacing[0], a = this.spacing[2], s = new D(0, t, 0), n.multiply(new F().makeRotationX(-Math.PI / 2)), o = (r.RASDimensions[1] - 1) / 2, n.setPosition(new D(0, t - o, 0));
				break;
			default:
				c.set(0, 0, 1), l.set(1, 0, 0), u.set(0, -1, 0), i = this.spacing[0], a = this.spacing[1], s = new D(0, 0, t), o = (r.RASDimensions[2] - 1) / 2, n.setPosition(new D(0, 0, t - o));
				break;
		}
		l.applyMatrix4(r.inverseMatrix).normalize(), l.argVar = "i", u.applyMatrix4(r.inverseMatrix).normalize(), u.argVar = "j", c.applyMatrix4(r.inverseMatrix).normalize();
		let f = Math.floor(Math.abs(l.dot(d))), p = Math.floor(Math.abs(u.dot(d))), m = Math.abs(f * i), h = Math.abs(p * a);
		s = Math.abs(Math.round(s.applyMatrix4(r.inverseMatrix).dot(c)));
		let g = [
			new D(1, 0, 0),
			new D(0, 1, 0),
			new D(0, 0, 1)
		], _ = [
			l,
			u,
			c
		].find((e) => Math.abs(e.dot(g[0])) > .9), v = [
			l,
			u,
			c
		].find((e) => Math.abs(e.dot(g[1])) > .9), y = [
			l,
			u,
			c
		].find((e) => Math.abs(e.dot(g[2])) > .9);
		function b(e, t) {
			let n = _ === c ? s : _.argVar === "i" ? e : t, i = v === c ? s : v.argVar === "i" ? e : t, a = y === c ? s : y.argVar === "i" ? e : t, o = _.dot(g[0]) > 0 ? n : r.xLength - 1 - n, l = v.dot(g[1]) > 0 ? i : r.yLength - 1 - i, u = y.dot(g[2]) > 0 ? a : r.zLength - 1 - a;
			return r.access(o, l, u);
		}
		return {
			iLength: f,
			jLength: p,
			sliceAccess: b,
			matrix: n,
			planeWidth: m,
			planeHeight: h
		};
	}
	computeMinMax() {
		let e = Infinity, t = -Infinity, n = this.data.length, r = 0;
		for (r = 0; r < n; r++) if (!Number.isNaN(this.data[r])) {
			let n = this.data[r];
			e = Math.min(e, n), t = Math.max(t, n);
		}
		return this.min = e, this.max = t, [e, t];
	}
}, Oa = {
	uniforms: {
		u_size: { value: new D(1, 1, 1) },
		u_renderstyle: { value: 0 },
		u_renderthreshold: { value: .5 },
		u_opacity: { value: .5 },
		u_clim: { value: new c(.2, .8) },
		u_clim2: { value: new c(.2, .8) },
		u_clim3: { value: new c(.2, .8) },
		u_clim4: { value: new c(.2, .8) },
		u_clim5: { value: new c(.2, .8) },
		u_clim6: { value: new c(.2, .8) },
		u_xClip: { value: new c(-1, 1e6) },
		u_yClip: { value: new c(-1, 1e6) },
		u_zClip: { value: new c(-1, 1e6) },
		u_data: { value: null },
		u_stop_geom: { value: null },
		u_geo_color: { value: null },
		u_window_size: { value: new c(1, 1) },
		u_vol_scale: { value: new D(1, 1, 1) },
		u_physical_Pixel: { value: .5 },
		volumeTex: { value: null },
		volumeTex2: { value: null },
		volumeTex3: { value: null },
		volumeTex4: { value: null },
		volumeTex5: { value: null },
		volumeTex6: { value: null },
		u_color: { value: new D(0, 0, 0) },
		u_color2: { value: new D(0, 0, 0) },
		u_color3: { value: new D(0, 0, 0) },
		u_color4: { value: new D(0, 0, 0) },
		u_color5: { value: new D(0, 0, 0) },
		u_color6: { value: new D(0, 0, 0) },
		u_cmdata: { value: null },
		near: { value: .1 },
		far: { value: 1e4 },
		alphaScale: { value: 0 },
		dtScale: { value: 1 },
		volumeCount: { value: 0 },
		finalGamma: { value: 0 },
		boxSize: { value: new D(1, 1, 1) }
	},
	vertexShader: [
		"out vec3 rayDirUnnorm;",
		"out vec3 cameraCorrected;",
		"uniform vec3 u_vol_scale;",
		"uniform vec3 u_size;",
		"varying vec3 worldSpaceCoords;",
		"varying vec2 vUv;",
		"varying vec4 glPosition;",
		"uniform highp vec3 boxSize;",
		"void main()",
		"{",
		"   worldSpaceCoords = position / boxSize + vec3(0.5, 0.5, 0.5); //move it from [-0.5;0.5] to [0,1]",
		"   cameraCorrected = (inverse(modelMatrix) * vec4(cameraPosition, 1.)).xyz;",
		"   rayDirUnnorm = position - cameraCorrected;",
		"   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
		"   glPosition = gl_Position;",
		"   vUv = uv;",
		"}"
	].join("\n"),
	fragmentShader: [
		"#include <packing>",
		"precision highp float;",
		" precision mediump sampler3D;",
		"in vec3 rayDirUnnorm;",
		"in vec3 cameraCorrected;",
		"uniform sampler3D volumeTex;",
		"uniform sampler3D volumeTex2;",
		"uniform sampler3D volumeTex3;",
		"uniform sampler3D volumeTex4;",
		"uniform sampler3D volumeTex5;",
		"uniform sampler3D volumeTex6;",
		"uniform vec2 u_clim;",
		"uniform vec2 u_clim2;",
		"uniform vec2 u_clim3;",
		"uniform vec2 u_clim4;",
		"uniform vec2 u_clim5;",
		"uniform vec2 u_clim6;",
		"uniform vec2 u_window_size;",
		"uniform vec2 u_xClip;",
		"uniform vec2 u_yClip;",
		"uniform vec2 u_zClip;",
		"uniform sampler2D u_cmdata;",
		"uniform sampler2D u_stop_geom;",
		"uniform sampler2D u_geo_color;",
		"uniform vec3 u_color;",
		"uniform vec3 u_color2;",
		"uniform vec3 u_color3;",
		"uniform vec3 u_color4;",
		"uniform vec3 u_color5;",
		"uniform vec3 u_color6;",
		"uniform float alphaScale;",
		"uniform float dtScale;",
		"uniform float finalGamma;",
		"uniform float volumeCount;",
		"uniform highp vec3 boxSize;",
		"uniform vec3 u_size;",
		"uniform int u_renderstyle;",
		"uniform float u_opacity;",
		"uniform vec3 u_vol_scale;",
		"uniform float near;",
		"uniform float u_physical_Pixel;",
		"varying vec2 vUv;",
		"varying vec4 glPosition;",
		"uniform float far;",
		"varying vec3 worldSpaceCoords;",
		"float linearize_z(float z) {",
		"        return near * far / (far + z * (near - far));",
		"}",
		"vec2 intersect_hit(vec3 orig, vec3 dir) {",
		"  vec3 boxMin = vec3(-0.5) * boxSize;",
		"  vec3 boxMax = vec3( 0.5) * boxSize;",
		"  if(u_xClip.x > -1.0){   boxMin.x = u_xClip.x-(boxSize.x/2.0);",
		"   if(u_xClip.y < boxSize.x)",
		"       boxMax.x = u_xClip.y-(boxSize.x/2.0);",
		"  }",
		"  if(u_yClip.x > -1.0){   boxMin.y = u_yClip.x-(boxSize.y/2.0);",
		"   if(u_yClip.y < boxSize.y)",
		"      boxMax.y = u_yClip.y-(boxSize.y/2.0);",
		"  }",
		"  if(u_zClip.x > -1.0){   boxMin.z = u_zClip.x-(boxSize.z/2.0);",
		"   if(u_zClip.y < boxSize.z)       boxMax.z = u_zClip.y-(boxSize.z/2.0);",
		"  }",
		"  vec3 invDir = 1.0 / dir;",
		"  vec3 tmin0 = (boxMin - orig) * invDir;",
		"  vec3 tmax0 = (boxMax - orig) * invDir;",
		"  vec3 tmin = min(tmin0, tmax0);",
		"  vec3 tmax = max(tmin0, tmax0);",
		"  float t0 = max(tmin.x, max(tmin.y, tmin.z));",
		"  float t1 = min(tmax.x, min(tmax.y, tmax.z));",
		"  return vec2(t0, t1);",
		"}",
		"   // Pseudo-random number gen from",
		"   // http://www.reedbeta.com/blog/quick-and-easy-gpu-random-numbers-in-d3d11/",
		"   // with some tweaks for the range of values",
		"       float wang_hash(int seed) {",
		"     seed = (seed ^ 61) ^ (seed >> 16);",
		"     seed *= 9;",
		"     seed = seed ^ (seed >> 4);",
		"     seed *= 0x27d4eb2d;",
		"     seed = seed ^ (seed >> 15);",
		"     return float(seed % 2147483647) / float(2147483647);",
		"     }",
		"float linear_to_srgb(float x) {",
		"   if (x <= 0.0031308f) {",
		"     return 12.92f * x;",
		"   }",
		"   return 1.055f * pow(x, 1.f / 2.4f) - 0.055f;",
		"}",
		"void main(void) {",
		"  //STEP 1: Normalize the view Ray",
		"  vec3 rayDir = normalize(rayDirUnnorm);",
		"  //STEP 2: Intersect the ray with the volume bounds to find the interval along the ray overlapped by the volume",
		"  vec2 t_hit = intersect_hit(cameraCorrected, rayDir);",
		"  if (t_hit.x >= t_hit.y) {",
		"    discard;",
		"  }",
		"  //No sample behind the eye",
		"  t_hit.x = max(t_hit.x, 0.0);",
		"  //STEP 3: Compute the step size to march through the volume grid",
		"  ivec3 volumeTexSize = textureSize(volumeTex, 0);",
		"  vec3 dt_vec = 1.0 / (vec3(volumeTexSize) * abs(rayDir));",
		"  float dt = min(dt_vec.x, min(dt_vec.y, dt_vec.z));",
		"  dt = max(1.0, dt);",
		"  // Ray starting point, in the real space where the box may not be a cube.",
		"  // Prevents a lost WebGL context.",
		" float offset = wang_hash(int(gl_FragCoord.x + 640.0 * gl_FragCoord.y));",
		" vec3 p = cameraCorrected + (t_hit.x + offset + dt) * rayDir;",
		"  // Most browsers do not need this initialization, but add it to be safe.",
		"  gl_FragColor = vec4(0.0);",
		"  p = p / boxSize + vec3(0.5);",
		"  vec3 step = (rayDir * dt) / boxSize;",
		"  // ",
		"  // Initialization of some variables.",
		"  float max_val = 0.0;",
		"  float max_val2 = 0.0;",
		"  float max_val3 = 0.0;",
		"  float max_val4 = 0.0;",
		"  float max_val5 = 0.0;",
		"  float max_val6 = 0.0;",
		"  vec3 rgbCombo = vec3(0.0);",
		"  float total = 0.0;",
		"  int max_i = 30000;",
		"  int i = 0;",
		"  float x = gl_FragCoord.x/u_window_size.x;",
		"  float y = gl_FragCoord.y/u_window_size.y;",
		"  vec3 meshPos = texture2D(u_stop_geom, vec2(x,y)).xyz;",
		"  float dist = 1000.0;",
		"  for (float t = t_hit.x; t < t_hit.y; t += dt) {",
		"       if(meshPos != vec3(0.0))           dist = distance(p,meshPos);",
		"      float val = texture(volumeTex, p.xyz).r;",
		"      val = max(0.0, (val - u_clim[0]) / (u_clim[1] - u_clim[0]));",
		"      rgbCombo += max(0.0, min(1.0, val)) * u_color;",
		"      total += val;",
		"      if(volumeCount > 1.0){           float val2 = texture(volumeTex2, p.xyz).r;",
		"           val2 = max(0.0,(val2 - u_clim2[0]) / (u_clim2[1] - u_clim2[0]));",
		"           rgbCombo += max(0.0, min(1.0, val2)) * u_color2;",
		"           total += val2;",
		"       }",
		"       if(volumeCount > 2.0){           float val3 = texture(volumeTex3, p.xyz).r;",
		"           val3 = max(0.0,(val3 - u_clim3[0]) / (u_clim3[1] - u_clim3[0]));",
		"           rgbCombo += max(0.0, min(1.0, val3)) * u_color3;",
		"           total += val3;",
		"       }",
		"       if(volumeCount > 3.0){           float val4 = texture(volumeTex4, p.xyz).r;",
		"           val4 = max(0.0,(val4 - u_clim4[0]) / (u_clim4[1] - u_clim4[0]));",
		"           rgbCombo += max(0.0, min(1.0, val4)) * u_color4;",
		"           total += val4;",
		"       }",
		"       if(volumeCount > 4.0){           float val5 = texture(volumeTex5, p.xyz).r;",
		"           val5 = max(0.0,(val5 - u_clim5[0]) / (u_clim5[1] - u_clim5[0]));",
		"           rgbCombo += max(0.0, min(1.0, val5)) * u_color5;",
		"           total += val5;",
		"        }",
		"        if(volumeCount > 5.0){           float val6 = texture(volumeTex6, p.xyz).r;",
		"           val6 = max(0.0,(val6 - u_clim6[0]) / (u_clim6[1] - u_clim6[0]));",
		"           rgbCombo += max(0.0, min(1.0, val6)) * u_color6;",
		"           total += val6;",
		"       }",
		"       if(total > 0.0 && dist < 0.1){",
		"           break;",
		"       }else if(dist < 0.1){           gl_FragColor = vec4(0.0,0.0,0.0,0.0);",
		"           break;",
		"       }",
		"       if(u_renderstyle == 0 && (max_val > u_clim[1] && max_val2 >= u_clim2[1] && max_val3 >= u_clim3[1] && max_val4 >= u_clim4[1] && max_val5 >= u_clim5[1] &&  max_val6 >= u_clim6[1])) break;",
		"       if(u_renderstyle == 2){           total = min(total, 1.0);",
		"           vec4 val_color = vec4(rgbCombo, total);",
		"           val_color.a = 1.0 - pow(1.0 - val_color.a, 1.0);",
		"           gl_FragColor.rgb += (1.0 - gl_FragColor.a) * val_color.a * val_color.rgb;",
		"           gl_FragColor.a += (1.0 - gl_FragColor.a) * val_color.a * dtScale;",
		"           if (gl_FragColor.a >= 0.95) {",
		"               break;",
		"           }",
		"       }",
		"       p += step;",
		"  }",
		"   gl_FragDepth = distance(worldSpaceCoords,p)*u_physical_Pixel;",
		"   if(u_renderstyle == 0 && (max_val <  u_clim[0] && max_val2 < u_clim2[0] && max_val3 < u_clim3[0] &&   max_val4 <  u_clim4[0] && max_val5 <  u_clim5[0] && max_val6 <  u_clim6[0])){",
		"        gl_FragColor = vec4(0,0,0,0);",
		"   }else if(u_renderstyle == 0){",
		"       max_val = (max_val - u_clim[0]) / (u_clim[1] - u_clim[0]);",
		"       max_val2 = (max_val2 - u_clim2[0]) / (u_clim2[1] - u_clim2[0]);",
		"       max_val3 = (max_val3 - u_clim3[0]) / (u_clim3[1] - u_clim3[0]);",
		"       max_val4 = (max_val4 - u_clim4[0]) / (u_clim4[1] - u_clim4[0]);",
		"       max_val5 = (max_val5 - u_clim5[0]) / (u_clim5[1] - u_clim5[0]);",
		"       max_val6 = (max_val6 - u_clim6[0]) / (u_clim6[1] - u_clim6[0]);",
		"       vec3 color = u_color * max_val;",
		"       if(volumeCount > 1.0) color = color +  u_color2 * max_val2;",
		"       if(volumeCount > 3.0) color = color +  u_color4 * max_val4;",
		"       if(volumeCount > 2.0) color = color +  u_color3 * max_val3;",
		"       if(volumeCount > 4.0) color = color +  u_color5 * max_val5;",
		"       if(volumeCount > 5.0) color = color +  u_color6 * max_val6;",
		"       vec3 colorCorrected = vec3(min(color[0], 1.0), min(color[1],1.0), min(color[2],1.0));",
		"        gl_FragColor = vec4(color,1.0);",
		"    }",
		"    gl_FragColor.r = linear_to_srgb(gl_FragColor.r);",
		"    gl_FragColor.g = linear_to_srgb(gl_FragColor.g);",
		"    gl_FragColor.b = linear_to_srgb(gl_FragColor.b);",
		"}"
	].join("\n")
}, ka = {
	maximumIntensityProjection: 0,
	minimumIntensityProjection: 1,
	additive: 2
};
function Aa(e, n, r, i, a, o) {
	let { spatialRenderingMode: s } = o, c = a?.image?.instance?.getData();
	if (!c) return {
		channelsVisible: null,
		resolution: null,
		data: null,
		colors: null,
		contrastLimits: null,
		allChannels: null,
		channelTargetC: null,
		is3dMode: !1,
		renderingMode: null,
		layerTransparency: 1,
		xSlice: null,
		ySlice: null,
		zSlice: null
	};
	let l = a.image.instance, u = s === "3D", d = n[t.PHOTOMETRIC_INTERPRETATION] === "RGB", f = ka[n[t.VOLUMETRIC_RENDERING_ALGORITHM]], p = n[t.SPATIAL_LAYER_VISIBLE], m = n[t.SPATIAL_LAYER_OPACITY];
	l.isInterleaved();
	let h = d ? [
		[
			255,
			0,
			0
		],
		[
			0,
			255,
			0
		],
		[
			0,
			0,
			255
		]
	] : r.map((e) => i[e][t.SPATIAL_CHANNEL_COLOR]), g = d ? [
		[0, 255],
		[0, 255],
		[0, 255]
	] : r.map((e) => i[e][t.SPATIAL_CHANNEL_WINDOW] || [0, 255]), _ = d ? [
		p && !0,
		p && !0,
		p && !0
	] : r.map((e) => p && i[e][t.SPATIAL_CHANNEL_VISIBLE]), v = d ? [
		p && !0,
		p && !0,
		p && !0
	] : r.map((e) => p && l.getChannelIndex(i[e][t.SPATIAL_TARGET_C])), y = l.getAutoTargetResolution(), b = n[t.SPATIAL_TARGET_RESOLUTION], x = b === null || Number.isNaN(b) ? y : b, S = a.image.loaders[0].channels ?? [], C = n[t.SPATIAL_SLICE_X], w = n[t.SPATIAL_SLICE_Y], T = n[t.SPATIAL_SLICE_Z];
	return C = C === null ? [-1, 1e5] : C, w = w === null ? [-1, 1e5] : w, T = T === null ? [-1, 1e5] : T, {
		channelsVisible: _,
		allChannels: S,
		channelTargetC: v,
		resolution: x,
		data: c,
		colors: h,
		contrastLimits: g,
		is3dMode: u,
		renderingMode: f,
		layerTransparency: m,
		xSlice: C,
		ySlice: w,
		zSlice: T
	};
}
function ja(e, t, n, r, i) {
	let { images: a = {}, imageLayerScopes: o, imageLayerCoordination: s, imageChannelScopesByLayer: c, imageChannelCoordination: l } = e, u = o[0], d = c[u], f = s[0][u], p = l[0][u], { channelsVisible: m, allChannels: h, channelTargetC: g, resolution: _, data: v, colors: y, contrastLimits: b, is3dMode: x, renderingMode: S, layerTransparency: C, xSlice: w, ySlice: T, zSlice: E } = Aa(u, f, d, p, a[u], e);
	return g !== null && (t.channelTargetC?.length !== 0 && (t.channelTargetC?.toString() !== g.toString() || t.resolution?.toString() !== _.toString()) ? r || i(!0) : (t.channelsVisible?.toString() !== m?.toString() || t.colors?.toString() !== y?.toString() || t.is3dMode !== x || t.contrastLimits?.toString() !== b?.toString() || t.renderingMode?.toString() !== S.toString() || t.layerTransparency.toString() !== C.toString() || t.xSlice?.toString() !== w.toString() || t.ySlice?.toString() !== T.toString() || t.zSlice?.toString() !== E.toString()) && (n({
		channelsVisible: m,
		allChannels: h,
		channelTargetC: g,
		resolution: _,
		data: v,
		colors: y,
		contrastLimits: b,
		is3dMode: x,
		renderingMode: S,
		layerTransparency: C,
		xSlice: w,
		ySlice: T,
		zSlice: E
	}), i(!1))), {
		images: a,
		layerScope: u,
		imageLayerScopes: o,
		imageLayerCoordination: s,
		imageChannelScopesByLayer: c,
		imageChannelCoordination: l,
		channelsVisible: m,
		allChannels: h,
		channelTargetC: g,
		resolution: _,
		data: v,
		colors: y,
		contrastLimits: b,
		is3dMode: x,
		renderingMode: S,
		layerTransparency: C,
		xSlice: w,
		ySlice: T,
		zSlice: E
	};
}
function Ma(e, t) {
	let [n, r] = t;
	return (e - n) / Math.sqrt(r ** 2 - n ** 2);
}
function Na(e, t, n, r, i, a, o, s, c, l, u, d, f) {
	e.boxSize.value.set(n.xLength, n.yLength, n.zLength), e.volumeTex.value = t.length > 0 ? t[0] : null, e.volumeTex2.value = t.length > 1 ? t[1] : null, e.volumeTex3.value = t.length > 2 ? t[2] : null, e.volumeTex4.value = t.length > 3 ? t[3] : null, e.volumeTex5.value = t.length > 4 ? t[4] : null, e.volumeTex6.value = t.length > 5 ? t[5] : null, e.near.value = .1, e.far.value = 3e3, e.alphaScale.value = 1, e.dtScale.value = s, e.finalGamma.value = 4.5, e.volumeCount.value = t.length, e.u_size.value.set(n.xLength, n.yLength, n.zLength), e.u_stop_geom.value = null, e.u_window_size.value.set(0, 0), e.u_vol_scale.value.set(1 / n.xLength, 1 / n.yLength, 1 / n.zLength * 2), e.u_renderstyle.value = i, e.u_clim.value.set(a.length > 0 ? a[0][0] : null, a.length > 0 ? a[0][1] : null), e.u_clim2.value.set(a.length > 1 ? a[1][0] : null, a.length > 1 ? a[1][1] : null), e.u_clim3.value.set(a.length > 2 ? a[2][0] : null, a.length > 2 ? a[2][1] : null), e.u_clim4.value.set(a.length > 3 ? a[3][0] : null, a.length > 3 ? a[3][1] : null), e.u_clim5.value.set(a.length > 4 ? a[4][0] : null, a.length > 4 ? a[4][1] : null), e.u_clim6.value.set(a.length > 5 ? a[5][0] : null, a.length > 5 ? a[5][1] : null), e.u_xClip.value.set(c[0] * (1 / d[0]) / f[0] * n.xLength, c[1] * (1 / d[0]) / f[0] * n.xLength), e.u_yClip.value.set(l[0] * (1 / d[1]) / f[1] * n.yLength, l[1] * (1 / d[1]) / f[1] * n.yLength), e.u_zClip.value.set(u[0] * (1 / d[2]) / f[2] * n.zLength, u[1] * (1 / d[1]) / f[2] * n.zLength), e.u_color.value.set(o.length > 0 ? o[0][0] : null, o.length > 0 ? o[0][1] : null, o.length > 0 ? o[0][2] : null), e.u_color2.value.set(o.length > 1 ? o[1][0] : null, o.length > 1 ? o[1][1] : null, o.length > 1 ? o[1][2] : null), e.u_color3.value.set(o.length > 2 ? o[2][0] : null, o.length > 2 ? o[2][1] : null, o.length > 2 ? o[2][2] : null), e.u_color4.value.set(o.length > 3 ? o[3][0] : null, o.length > 3 ? o[3][1] : null, o.length > 3 ? o[3][2] : null), e.u_color5.value.set(o.length > 4 ? o[4][0] : null, o.length > 4 ? o[4][1] : null, o.length > 4 ? o[4][2] : null), e.u_color6.value.set(o.length > 5 ? o[5][0] : null, o.length > 5 ? o[5][1] : null, o.length > 5 ? o[5][2] : null);
}
function Pa(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	let m = [], h = [], g = [], _ = null, v = s;
	if (v == null || !Array.isArray(v) || v.length < 3) v = [
		{ size: v?.[0]?.size ?? 1 },
		{ size: v?.[1]?.size ?? 1 },
		{ size: v?.[2]?.size ?? 1 }
	];
	else for (let e = 0; e < v.length; e++) (!v[e] || v[e].size === void 0 || v[e].size === null) && (v[e] = { size: 1 });
	if (t.forEach((t, s) => {
		n[s] && (_ = e.get(t), m.push(i.get(t)), h.push([
			r[s][0] / 255,
			r[s][1] / 255,
			r[s][2] / 255
		]), a[s][0] === 0 && a[s][1] === 255 ? g.push([Ma(o.get(t)[0], o.get(t)), Ma(o.get(t)[1], o.get(t))]) : g.push([Ma(a[s][0], o.get(t)), Ma(a[s][1], o.get(t))]));
	}), _ === null) return null;
	let y = _, b = {}, x = Oa, C = S.clone(x.uniforms);
	return Na(C, m, y, b, c, g, h, l, u, d, f, [
		v[0].size,
		v[1].size,
		v[2] ? v[2].size : 1
	], p), [
		C,
		x,
		[
			1,
			v[1].size / v[0].size,
			v[2] ? v[2].size / v[0].size : 1
		],
		[
			y.xLength,
			y.yLength,
			y.zLength
		],
		[
			1,
			y.yLength / y.xLength,
			y.zLength / y.xLength
		]
	];
}
var Fa = {
	Uint8: Uint8Array,
	Uint16: Uint16Array,
	Uint32: Uint32Array,
	Int8: Int8Array,
	Int16: Int16Array,
	Int32: Int32Array,
	Float32: Float32Array,
	Float64: Float64Array
};
async function Ia({ source: t, selection: n, onUpdate: r = () => {}, downsampleDepth: i = 1, signal: a }) {
	let { shape: o, labels: s, dtype: c } = t, { height: l, width: u } = e(t), d = o[s.indexOf("z")], f = Math.max(1, Math.floor(d / i)), p = l * u, m = Fa[c], h = new m(p * f);
	return await Promise.all(Array(f).fill(0).map(async (e, o) => {
		let s = {
			...n,
			z: o * i
		}, { data: c } = await t.getRaster({
			selection: s,
			signal: a
		}), l = 0;
		for (r({
			z: o,
			total: f,
			progress: .5
		}); l < p;) {
			let e = o * p + (p - l - 1), t = (u - l - 1) % u + u * Math.floor(l / u);
			h[e] = c[t], l += 1;
		}
		r({
			z: o,
			total: f,
			progress: 1
		});
	})), {
		data: h,
		height: l,
		width: u,
		depth: f
	};
}
function La(e, t, n) {
	return Ia({
		source: n[t],
		selection: {
			t: 0,
			c: e
		},
		downsampleDepth: 2 ** t
	});
}
function Ra(e) {
	let t = new Da();
	return t.xLength = e.width, t.yLength = e.height, t.zLength = e.depth, t.data = e.data, t;
}
function za(e) {
	let t = new oe(e.data, e.xLength, e.yLength, e.zLength);
	return t.format = y, t.type = b, t.generateMipmaps = !1, t.minFilter = g, t.magFilter = g, t.needsUpdate = !0, t;
}
function Ba(e) {
	let { x: t, y: n, z: r } = e?.meta?.physicalSizes ?? {};
	return [
		t ?? { size: 1 },
		n ?? { size: 1 },
		r ?? { size: 1 }
	];
}
function Va(e) {
	let [t, n] = e.computeMinMax(), r = new Float32Array(e.data.length);
	for (let i = 0; i < e.data.length; i++) r[i] = (e.data[i] - t) / Math.sqrt(n ** 2 - t ** 2);
	return r;
}
async function Ha(e, t, n, r, i, a, o) {
	let s = null, c = null, { shape: l, labels: u } = n[0], d = e.filter((e) => !r.has(e) || t !== o), f = await Promise.all(d.map((e) => La(e, t, n)));
	return d.forEach((e, o) => {
		let l = f[o];
		s = Ra(l);
		let u = s.computeMinMax();
		s.data = Va(s), r.set(e, s), i.set(e, za(s)), a.set(e, u), c = Ba(n[t]);
	}), [
		r,
		i,
		a,
		c,
		[
			l[u.indexOf("x")],
			l[u.indexOf("y")],
			l[u.indexOf("z")]
		]
	];
}
function Ua(e) {
	return `${e.startPoint.x},${e.startPoint.y},${e.startPoint.z};${e.endPoint.x},${e.endPoint.y},${e.endPoint.z}`;
}
function Wa(e) {
	return !Array.isArray(e) || e.length !== 3 ? !1 : e.every((e) => typeof e == "number" && Number.isFinite(e));
}
function Ga(e) {
	let { segmentationGroup: t, segmentationSettings: n, segmentationSceneScale: r, renderingSettings: i, materialRef: a, highlightEntity: o, setObsHighlight: s } = e, c = (0, K.useRef)(null), [l] = (0, K.useState)([]);
	return (0, $.jsxs)("group", { children: [(0, $.jsxs)("group", { children: [t?.visible ? (0, $.jsxs)("group", { children: [
		(0, $.jsx)("hemisphereLight", {
			color: 8421504,
			groundColor: 6316128
		}),
		(0, $.jsx)("directionalLight", {
			color: 16777215,
			position: [
				0,
				-800,
				0
			]
		}),
		(0, $.jsx)("directionalLight", {
			color: 16777215,
			position: [
				0,
				800,
				0
			]
		}),
		(0, $.jsx)(ba, {
			firstHitOnly: !0,
			children: (0, $.jsx)("primitive", {
				ref: c,
				object: t,
				position: [
					0,
					0,
					0
				],
				onClick: (e) => {
					e.object.parent?.userData.name === "finalPass" && o(e.object.name, e.object.userData.layerScope, e.object.userData.channelScope);
				},
				onPointerOver: (e) => {
					s(e.object.name);
				},
				onPointerOut: () => s(null)
			})
		})
	] }) : null, i.uniforms && i.shader && i.meshScale && i.geometrySize ? (0, $.jsx)("group", { children: (0, $.jsxs)("mesh", {
		scale: i.meshScale,
		ref: a,
		children: [(0, $.jsx)("boxGeometry", { args: i.geometrySize }), (0, $.jsx)("shaderMaterial", {
			customProgramCacheKey: () => "1",
			side: 0,
			uniforms: i.uniforms,
			needsUpdate: !0,
			transparent: !0,
			vertexShader: i.shader.vertexShader,
			fragmentShader: i.shader.fragmentShader
		})]
	}) }) : null] }), (0, $.jsx)("group", {
		name: "lines",
		children: l.map((e) => (0, $.jsx)(Ea, {
			currentLine: e,
			scale: 1
		}, Ua(e)))
	})] });
}
var Ka = K.lazy(() => import("./GeometryAndMeshXR-DhL415aR-DfDtENhU.js").catch(() => ({ default: Ga }))), qa = K.lazy(() => import("./XRSceneComponents-CpuAUm3S-ClQycQSm.js").catch(() => ({ default: () => null })));
function Ja(e) {
	let t = (0, K.useRef)(null), n = (0, K.useRef)(null), [r, i] = (0, K.useState)(!1), [a, o] = (0, K.useState)(!1), [s, c] = (0, K.useState)(null), [l, u] = (0, K.useState)([
		1,
		1,
		1
	]), [d, f] = (0, K.useState)({
		uniforms: null,
		shader: null,
		meshScale: null,
		geometrySize: null,
		boxSize: null
	}), [p, m] = (0, K.useState)({
		volumes: /* @__PURE__ */ new Map(),
		textures: /* @__PURE__ */ new Map(),
		volumeMinMax: /* @__PURE__ */ new Map(),
		scale: null,
		resolution: null,
		originalScale: null
	}), [h, g] = (0, K.useState)({
		channelsVisible: [],
		allChannels: [],
		channelTargetC: [],
		resolution: null,
		data: null,
		colors: [],
		contrastLimits: [],
		is3dMode: !1,
		renderingMode: null,
		layerTransparency: 1
	}), [_, y] = (0, K.useState)({
		visible: !0,
		color: [
			1,
			1,
			1
		],
		opacity: 1,
		multiVisible: "",
		multiOpacity: "",
		multiColor: "",
		data: null,
		obsSets: []
	}), { images: b, layerScope: x, channelsVisible: S, allChannels: C, channelTargetC: w, resolution: E, data: D, colors: O, contrastLimits: A, is3dMode: j, renderingMode: ee, layerTransparency: te, xSlice: ne, ySlice: re, zSlice: M } = ja(e, h, g, a, o), { obsSegmentations: N, onEntitySelected: F, segmentationLayerCoordination: ae, segmentationChannelCoordination: I, segmentationChannelScopesByLayer: L } = e, oe = () => {}, R = [];
	if (I[0][x] !== void 0) {
		let e = I[0][x][x];
		oe = I[1][x][x].setObsHighlight;
		let { additionalObsSets: t } = e;
		t !== null && e.obsSetSelection.forEach((n) => {
			let r = n[1];
			t.tree[0].children.forEach((t) => {
				t.name === r && t.set.forEach(([t]) => {
					let n = {
						name: "",
						id: "",
						color: [
							255,
							255,
							255
						]
					};
					n.name = r, n.id = t, e.obsSetColor.forEach((e) => {
						e.path[1] === r && (n.color = e.color);
					}), R.push(n);
				});
			});
		}), e.obsHighlight !== null && R.push({
			name: "",
			id: e.obsHighlight,
			color: [
				255,
				34,
				0
			]
		});
	}
	if (N?.[x]?.obsSegmentations && s == null) {
		let { scene: e, sceneOptions: t } = N[x].obsSegmentations;
		if (e?.children) {
			let n = new v(), r = new P();
			r.userData.name = "finalPass", e.children.forEach((e) => {
				let n = "material" in e ? e : e.children[0];
				(n.material instanceof k || n.material instanceof T) && (n.material = new ie());
				let i = n.material, a = n.name.replace("mesh_", "").replace("mesh", "").replace("glb", "").replace("_dec", "").replace("_Decobj", "").replace("obj", "").replace("_DEc", "").replace(".", "").replace("_Dec", "");
				a.includes("_") && (a = a.split("_")[0]), n.name = a, n.userData.name = a, n.userData.layerScope = x, i.transparent = !0, i.depthTest = !0, i.depthWrite = !0, i.needsUpdate = !0, i.side = +(t?.materialSide === "back");
				let o = n.clone();
				o.geometry = n.geometry.clone(), o.geometry.translate(t?.targetX ?? 0, t?.targetY ?? 0, t?.targetZ ?? 0), o.geometry.scale(t?.scaleX ?? 1, t?.scaleY ?? 1, t?.scaleZ ?? 1), o.geometry.rotateX(t?.rotationX ?? 0), o.geometry.rotateY(t?.rotationY ?? 0), o.geometry.rotateZ(t?.rotationZ ?? 0);
				let s = n.clone();
				s.material = i.clone(), s.geometry = o.geometry.clone(), r.add(s);
			}), n.add(r), n.scale.set(t?.sceneScaleX ?? 1, t?.sceneScaleY ?? 1, t?.sceneScaleZ ?? 1), u([
				t?.sceneScaleX ?? 1,
				t?.sceneScaleY ?? 1,
				t?.sceneScaleZ ?? 1
			]), n.rotateX(t?.sceneRotationX ?? 0), n.rotateY(t?.sceneRotationY ?? 0), n.rotateZ(t?.sceneRotationZ ?? 0), c(n);
		}
	}
	if (I[0] !== void 0 && I[0][x] !== void 0) {
		let e = I[0][x][x], t = "";
		R.forEach((e) => {
			t += `${e.id};${e.color.toString()};${e.name}`;
		});
		let n = "";
		if (_.obsSets.forEach((e) => {
			n += `${e.id};${e.color.toString()};${e.name}`;
		}), L[x].length > 1) {
			let t = "", n = "", r = "", i = !1, a = 0;
			L[x].forEach((e) => {
				let o = I[0][x][e];
				t += `${o.spatialChannelColor.toString()};`, n += `${o.spatialChannelOpacity};`, r += `${o.spatialChannelVisible};`, i ||= o.spatialChannelVisible, a += o.spatialChannelOpacity;
			}), (t !== _.multiColor || n !== _.multiOpacity || r !== _.multiVisible) && y({
				color: e.spatialChannelColor,
				opacity: a,
				visible: i,
				multiColor: t,
				multiVisible: r,
				multiOpacity: n,
				data: N ?? null,
				obsSets: R
			});
		} else (e.spatialChannelColor.toString() !== _.color.toString() || e.spatialChannelVisible !== _.visible || e.spatialChannelOpacity !== _.opacity || t !== n) && y({
			color: e.spatialChannelColor,
			opacity: e.spatialChannelOpacity,
			visible: e.spatialChannelVisible,
			multiColor: "",
			multiVisible: "",
			multiOpacity: "",
			data: N ?? null,
			obsSets: R
		});
	}
	if ((0, K.useEffect)(() => {
		if (s !== null) {
			let e = 0, t = 0;
			for (let n = 0; n < s.children.length; n++) s.children[n].userData.name === "finalPass" ? t = n : e = n;
			s.children[t].children.forEach((t, n) => {
				let r = t, { color: i } = _, a = r.userData.name;
				if (_.obsSets.forEach((e) => {
					e.id === a && (i = e.color);
				}), L[x].length > 1) L[x].forEach((t) => {
					let i = I[0][x][t];
					if (i.spatialTargetC === a) {
						r.material.color.r = i.spatialChannelColor[0] / 255, r.material.color.g = i.spatialChannelColor[1] / 255, r.material.color.b = i.spatialChannelColor[2] / 255, r.material.opacity = i.spatialChannelOpacity, r.visible = i.spatialChannelVisible, r.material.needsUpdate = !0, r.userData.layerScope = x, r.userData.channelScope = t;
						let a = s.children[e].children[n];
						a.material.needsUpdate = !0;
					}
				});
				else {
					r.material.color.r = i[0] / 255, r.material.color.g = i[1] / 255, r.material.color.b = i[2] / 255, r.material.opacity = _.opacity, r.material.visible = _.visible, r.material.needsUpdate = !0, r.userData.layerScope = x;
					let e = Object.keys(I[0][x])?.[0];
					r.userData.channelScope = e;
				}
			});
		}
	}, [_, s]), b[x]?.image?.instance?.getData() !== void 0 && !a && !r && A !== null && A[0][1] !== 255 && j && (o(!0), i(!0)), (0, K.useEffect)(() => {
		let e = async () => {
			let e = await Ha(w, E, D, p.volumes, p.textures, p.volumeMinMax, p.resolution);
			if (e[0] !== null) if (m({
				resolution: E,
				volumes: e[0],
				textures: e[1],
				volumeMinMax: e[2],
				scale: e[3] === null ? p.scale : e[3],
				originalScale: e[4]
			}), !d.uniforms || !d.shader) {
				let t = Pa(e[0], w, S, O, e[1], A, e[2], e[3], ee, te, ne, re, M, e[4]);
				t !== null && f({
					uniforms: t[0],
					shader: t[1],
					meshScale: t[2],
					geometrySize: t[3],
					boxSize: t[4]
				});
			} else g({
				channelsVisible: S,
				allChannels: C,
				channelTargetC: w,
				resolution: E,
				data: D,
				colors: O,
				contrastLimits: A,
				is3dMode: j,
				renderingMode: ee,
				layerTransparency: te,
				xSlice: ne,
				ySlice: re,
				zSlice: M
			});
		};
		a && (E !== h.resolution && t.current && (t.current.material.uniforms.volumeCount.value = 0, t.current.material.uniforms.volumeTex.value = null), e(), o(!1));
	}, [a]), (0, K.useEffect)(() => {
		if (d.uniforms && d.shader) {
			let e = Pa(p.volumes, h.channelTargetC, h.channelsVisible, h.colors, p.textures, h.contrastLimits, p.volumeMinMax, p.scale, h.renderingMode, h.layerTransparency, h.xSlice, h.ySlice, h.zSlice, p.originalScale);
			if (e !== null) {
				let n = 0;
				h.channelsVisible?.forEach((e) => {
					e && n++;
				}), o(!1), t?.current?.material?.uniforms && (t.current.material.uniforms.u_clim.value = e[0].u_clim.value, t.current.material.uniforms.u_clim2.value = e[0].u_clim2.value, t.current.material.uniforms.u_clim3.value = e[0].u_clim3.value, t.current.material.uniforms.u_clim4.value = e[0].u_clim4.value, t.current.material.uniforms.u_clim5.value = e[0].u_clim5.value, t.current.material.uniforms.u_clim6.value = e[0].u_clim6.value, t.current.material.uniforms.u_xClip.value = e[0].u_xClip.value, t.current.material.uniforms.u_yClip.value = e[0].u_yClip.value, t.current.material.uniforms.u_zClip.value = e[0].u_zClip.value, t.current.material.uniforms.u_color.value = e[0].u_color.value, t.current.material.uniforms.u_color2.value = e[0].u_color2.value, t.current.material.uniforms.u_color3.value = e[0].u_color3.value, t.current.material.uniforms.u_color4.value = e[0].u_color4.value, t.current.material.uniforms.u_color5.value = e[0].u_color5.value, t.current.material.uniforms.u_color6.value = e[0].u_color6.value, t.current.material.uniforms.volumeTex.value = e[0].volumeTex.value, t.current.material.uniforms.volumeTex2.value = e[0].volumeTex2.value, t.current.material.uniforms.volumeTex3.value = e[0].volumeTex3.value, t.current.material.uniforms.volumeTex4.value = e[0].volumeTex4.value, t.current.material.uniforms.volumeTex5.value = e[0].volumeTex5.value, t.current.material.uniforms.volumeTex6.value = e[0].volumeTex6.value, t.current.material.uniforms.volumeCount.value = n, t.current.material.uniforms.u_renderstyle.value = h.renderingMode, t.current.material.uniforms.dtScale.value = h.layerTransparency);
			} else t?.current?.material?.uniforms && (t.current.material.uniforms.volumeCount.value = 0, t.current.material.uniforms.volumeTex.value = null);
		}
	}, [h]), !h.is3dMode) return null;
	if (h.is3dMode && (!d.uniforms || !d.shader)) return (0, $.jsxs)("group", { children: [
		(0, $.jsx)("ambientLight", {}),
		(0, $.jsx)("pointLight", { position: [
			10,
			10,
			10
		] }),
		(0, $.jsx)(Cn, {
			color: "white",
			scale: 20,
			fontWeight: 1e3,
			children: "Loading ..."
		})
	] });
	let z = {
		segmentationGroup: s,
		segmentationSettings: _,
		segmentationSceneScale: l,
		renderingSettings: d,
		materialRef: t,
		highlightEntity: F,
		setObsHighlight: oe
	}, { xrEnabled: B } = e;
	return (0, $.jsxs)("group", { children: [B ? (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(K.Suspense, {
		fallback: null,
		children: (0, $.jsx)(qa, {})
	}), (0, $.jsx)(K.Suspense, {
		fallback: (0, $.jsx)(Ga, { ...z }),
		children: (0, $.jsx)(Ka, { ...z })
	})] }) : (0, $.jsx)(Ga, { ...z }), (0, $.jsx)(U, {
		ref: n,
		enableDamping: !1,
		dampingFactor: 0
	})] });
}
var Ya = null;
async function Xa() {
	return Ya = await import("./xr_vitessce-Bgjlwc6I.js"), Ya;
}
function Za() {
	if (!Ya) throw Error("@react-three/xr is not loaded; call loadXRModule() first.");
	return Ya;
}
var Qa = K.lazy(() => import("./XRWrapper-B9IIMYL--7bVCxvEa.js").catch(() => ({ default: ({ children: e }) => e }))), $a = K.lazy(() => import("./XREnterButton-CLRf7k6e-zrhNRWjb.js").catch(() => ({ default: () => null }))), eo = (0, K.forwardRef)((e, t) => {
	let [n, r] = (0, K.useState)(!1);
	return (0, K.useEffect)(() => {
		Xa().then(() => r(!0)).catch(() => {});
	}, []), (0, $.jsxs)("div", {
		style: {
			width: "100%",
			height: "100%"
		},
		children: [n && (0, $.jsx)(K.Suspense, {
			fallback: null,
			children: (0, $.jsx)($a, {})
		}), (0, $.jsx)(se, {
			style: {
				position: "absolute",
				top: 0,
				left: 0
			},
			camera: {
				fov: 50,
				up: [
					0,
					1,
					0
				],
				position: [
					0,
					0,
					800
				],
				near: .1,
				far: 3e3
			},
			gl: {
				antialias: !0,
				logarithmicDepthBuffer: !1
			},
			ref: t,
			children: n ? (0, $.jsx)(K.Suspense, {
				fallback: (0, $.jsx)(Ja, { ...e }),
				children: (0, $.jsx)(Qa, { children: (0, $.jsx)(Ja, {
					...e,
					xrEnabled: !0
				}) })
			}) : (0, $.jsx)(Ja, { ...e })
		})]
	});
}), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	SpatialWrapper: eo
}, Symbol.toStringTag, { value: "Module" }));
//#endregion
export { Ua as a, Za as i, Wa as n, ba as o, Sa as r, Ea as t };
