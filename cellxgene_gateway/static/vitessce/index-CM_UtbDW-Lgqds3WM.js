import { F as e, L as t, M as n, P as r, dt as i, g as a, gt as o, st as s, t as c } from "./index-CDVgyDq2-Pif-GON1.js";
import { $a as l, $i as u, Ar as d, Er as f, Ga as p, Gt as m, Ln as h, Qi as g, Qr as _, Ri as v, Wa as y, Ya as b, co as ee, eo as x, gr as S, ir as C, to as w, ut as T, zi as E } from "./three.core-1aHSpGwp.js";
import { a as D, i as te, r as O, t as k } from "./OrbitControls-YstXcWzv.js";
//#region node_modules/vitessce/dist/index-CM_UtbDW.js
var A = s(), j = /* @__PURE__ */ o(i(), 1), M = 32, N = 64, P = 64, F = 4, I = N * P * F, L = N * M, R = P * M, z = F * M, B = {
	NOT_STARTED: "not_started",
	IN_PROGRESS: "in_progress",
	COMPLETE: "complete",
	FAILED: "failed"
};
function V(e) {
	c(t.DEBUG) && console.warn(`%cDM: ${e}`, "background: blue; color: white; padding: 2px; border-radius: 3px;");
}
function H(e) {
	return e.map((e) => {
		let { dims: t } = e;
		return [
			t.t,
			t.c,
			t.z,
			t.y,
			t.x
		];
	});
}
function U(e) {
	return e.map((e) => {
		let t = [
			e.depth,
			e.height,
			e.width
		];
		return [
			Math.ceil((t[0] || 1) / M),
			Math.ceil((t[1] || 1) / M),
			Math.ceil((t[2] || 1) / M)
		];
	});
}
function W(t, n) {
	e.debug("_initMRMCPT", t, n);
	let r = {
		channelOffsets: [
			[
				0,
				0,
				1
			],
			[
				0,
				1,
				0
			],
			[
				0,
				1,
				1
			],
			[
				1,
				0,
				0
			],
			[
				1,
				0,
				1
			],
			[
				1,
				1,
				0
			],
			[
				1,
				1,
				1
			]
		],
		anchors: [],
		offsets: [],
		xExtent: 0,
		yExtent: 0,
		zExtent: 0,
		z0Extent: 0,
		zTotal: 0
	};
	r.xExtent = 1, r.yExtent = 1, r.zExtent = 1;
	let i = t[0][0];
	r.z0Extent = i, r.lowestDataRes = t.length - 1;
	for (let e = t.length - 1; e > 0; e--) r.anchors.push([
		r.xExtent,
		r.yExtent,
		r.zExtent
	]), r.xExtent += t[e][2], r.yExtent += t[e][1], r.zExtent += t[e][0];
	r.anchors.push([
		0,
		0,
		r.zExtent
	]), r.anchors.reverse(), r.zTotal = r.zExtent + n * i;
	let a = new Uint8Array(L * R * z);
	a.fill(0);
	let o = new Uint32Array(r.xExtent * r.yExtent * r.zTotal);
	o.fill(0);
	let s = new T(a, L, R, z);
	s.format = v, s.type = p, s.internalFormat = "R8", s.minFilter = h, s.magFilter = h, s.generateMipmaps = !1, s.needsUpdate = !0;
	let c = new T(o, r.xExtent, r.yExtent, r.zTotal);
	return c.format = E, c.type = b, c.internalFormat = "R32UI", c.minFilter = S, c.magFilter = S, c.generateMipmaps = !1, c.needsUpdate = !0, e.debug("_initMRMCPT", r, c, s), {
		PT: r,
		ptTHREE: c,
		bcTHREE: s
	};
}
function G(e, t, n, r, i) {
	let a = (e) => Math.max(0, Math.min(127, Math.floor(e / 2)));
	return (-1073741824 | a(e) << 23 | a(t) << 16 | (n & 63) << 10 | (r & 63) << 4 | i & 15) >>> 0;
}
function K(e, t, n, r) {
	let { PT_zExtent: i, PT_z0Extent: a, PT_anchors: o } = r, s = -1, c = -1, l = -1, u = -1, d = -1;
	if (n >= i) c = 0, l = e, u = t, d = (n - i) % a, s = Math.floor((n - i) / a);
	else for (let r = 1; r < o.length; r++) if (!(e < o[r][0] && t < o[r][1] && n < o[r][2])) {
		c = r;
		let i = [
			0,
			0,
			0
		];
		e >= o[r][0] && (i[0] = 1), t >= o[r][1] && (i[1] = 1), n >= o[r][2] && (i[2] = 1);
		let a = i[0] << 2 | i[1] << 1 | i[2];
		s = Math.max(1, Math.min(7, a)) - 1;
		let f = i.map((e, t) => e * o[r][t]);
		l = e - f[0], u = t - f[1], d = n - f[2];
		break;
	}
	return {
		channel: s,
		resolution: c,
		x: l,
		y: u,
		z: d
	};
}
var ne = .25;
function q(t, n, r) {
	let i = /* @__PURE__ */ new Map(), { width: a, height: o, sigmaNormalized: s } = r, c = Number.isInteger(a) && Number.isInteger(o) && a > 0 && o > 0 && typeof s == "number";
	c || e.warn("_requestBufferToRequestObjects: proceeding without weighting");
	let l = Math.floor(t.length / 4);
	for (let e = 0; e < l; e += 1) {
		let n = e * 4, r = t[n], l = t[n + 1], u = t[n + 2], d = t[n + 3];
		if ((r | l | u | d) === 0) continue;
		let f = (r << 24 | l << 16 | u << 8 | d) >>> 0, p = 1;
		if (c) {
			let t = e % a, n = Math.floor(e / a), r = t - a / 2, i = n - o / 2, c = Math.sqrt(r * r / (a * a) + i * i / (o * o)) / s;
			p = Math.exp(-.5 * c * c);
		}
		i.set(f, (i.get(f) || 0) + p);
	}
	return {
		requests: Array.from(i.entries()).toSorted((e, t) => t[1] - e[1]).slice(0, n).map(([e]) => ({
			x: e >> 22 & 1023,
			y: e >> 12 & 1023,
			z: e & 4095
		})),
		origRequestCount: i.size
	};
}
var re = class {
	constructor(t) {
		V("CLASS INITIALIZING"), e.debug("VolumeDataManager constructor", {
			glParam: t,
			glParamContext: t.getContext?.()
		});
		let n = t.getContext?.() || t, r = t;
		n.domElement && n.getContext || n.isWebGLRenderer ? this.gl = n.getContext() : this.gl = n, this.renderer = r, (!this.gl || typeof this.gl.getParameter != "function") && (e.debug("Unable to get WebGL context, using mock context"), this.gl = {
			getParameter: (e) => ({
				MAX_TEXTURE_SIZE: 4096,
				MAX_3D_TEXTURE_SIZE: 256,
				MAX_RENDERBUFFER_SIZE: 4096,
				MAX_UNIFORM_BUFFER_BINDINGS: 16
			})[e] || 0,
			isContextLost: () => !1,
			MAX_TEXTURE_SIZE: "MAX_TEXTURE_SIZE",
			MAX_3D_TEXTURE_SIZE: "MAX_3D_TEXTURE_SIZE",
			MAX_RENDERBUFFER_SIZE: "MAX_RENDERBUFFER_SIZE",
			MAX_UNIFORM_BUFFER_BINDINGS: "MAX_UNIFORM_BUFFER_BINDINGS"
		}), this._originalGlParam = t, this._isContextLost = !1, this._contextRestoredCallbacks = [], this.gl && this.gl.canvas && (this.gl.canvas.addEventListener("webglcontextlost", this._handleContextLost.bind(this)), this.gl.canvas.addEventListener("webglcontextrestored", this._handleContextRestored.bind(this))), e.debug("GL CONSTANTS"), e.debug(this.gl), e.debug(this.gl.TEXTURE0), e.debug(this.gl.textures), e.debug("RENDERER"), e.debug(this.renderer), this.deviceLimits = {
			maxTextureSize: this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),
			max3DTextureSize: this.gl.getParameter(this.gl.MAX_3D_TEXTURE_SIZE),
			maxRenderbufferSize: this.gl.getParameter(this.gl.MAX_RENDERBUFFER_SIZE),
			maxUniformBufferBindings: this.gl.getParameter(this.gl.MAX_UNIFORM_BUFFER_BINDINGS)
		}, this.zarrStore = {
			resolutions: null,
			chunkSize: [],
			shapes: [],
			arrays: [],
			dtype: "",
			physicalSizeTotal: [],
			physicalSizeVoxel: [],
			brickLayout: [],
			channelCount: 1,
			scales: [],
			lowestDataRes: 0
		}, this.ptTHREE = null, this.bcTHREE = null, this.channels = {
			maxChannels: 7,
			zarrMappings: [],
			colorMappings: [],
			downsampleMin: [],
			downsampleMax: []
		}, this.PT = {
			channelOffsets: [
				[
					0,
					0,
					1
				],
				[
					0,
					1,
					0
				],
				[
					0,
					1,
					1
				],
				[
					1,
					0,
					0
				],
				[
					1,
					0,
					1
				],
				[
					1,
					1,
					0
				],
				[
					1,
					1,
					1
				]
			],
			anchors: [],
			offsets: [],
			xExtent: 0,
			yExtent: 0,
			zExtent: 0,
			z0Extent: 0,
			zTotal: 0
		}, this.bricksEverLoaded = /* @__PURE__ */ new Set(), this.isBusy = !1, this.BCTimeStamps = Array(I).fill(0), this.BCMinMax = Array(I).fill([0, 0]), this.BCFull = !1, this.BCUnusedIndex = 0, this.bc2pt = Array(I).fill(null), this.LRUStack = [], this.triggerUsage = !0, this.triggerRequest = !1, this.timeStamp = 0, this.k = 40, this.noNewRequests = !1, this.manuallyStopped = !1, this.needsBailout = !1, this.initStatus = B.NOT_STARTED, this.initError = null, this._lastChannelConfig = null, this.currentRequestCount = 0, this.totalBricksRequested = 0, V("VolumeDataManager constructor complete");
	}
	getLoadingProgress() {
		let e = this.bricksEverLoaded.size, t = !this.noNewRequests && this.currentRequestCount > 0, n = this.totalBricksRequested > 0 ? (this.totalBricksRequested - this.currentRequestCount) / this.totalBricksRequested * 100 : 0;
		return {
			bricksLoaded: e,
			currentRequestCount: this.currentRequestCount,
			totalBricksRequested: this.totalBricksRequested,
			isLoading: t,
			percentage: n,
			noNewRequests: this.noNewRequests
		};
	}
	stopLoading() {
		e.debug("Manually stopping data loading"), this.noNewRequests = !0, this.manuallyStopped = !0, this.needsBailout = !0, this.currentRequestCount = 0, this.totalBricksRequested = 0;
	}
	restartLoading() {
		e.debug("Manually restarting data loading"), this.noNewRequests = !1, this.manuallyStopped = !1, this.needsBailout = !1, this.triggerUsage = !0, this.currentRequestCount = 0, this.totalBricksRequested = 0;
	}
	_handleContextLost(t) {
		V("CONTEXT LOST"), e.warn("WebGL context lost, preventing default and setting flag"), t.preventDefault(), this._isContextLost = !0, this.channels && this.channels.zarrMappings && (this._lastChannelConfig = {
			zarrMappings: [...this.channels.zarrMappings],
			colorMappings: [...this.channels.colorMappings],
			downsampleMin: [...this.channels.downsampleMin],
			downsampleMax: [...this.channels.downsampleMax]
		});
	}
	_handleContextRestored(t) {
		if (V("CONTEXT RESTORED"), e.warn("WebGL context restored, reinitializing textures"), this._isContextLost = !1, this._originalGlParam && this._originalGlParam.getContext && (this.gl = this._originalGlParam.getContext()), this._lastChannelConfig && (this.channels.zarrMappings = [...this._lastChannelConfig.zarrMappings], this.channels.colorMappings = [...this._lastChannelConfig.colorMappings], this.channels.downsampleMin = [...this._lastChannelConfig.downsampleMin], this.channels.downsampleMax = [...this._lastChannelConfig.downsampleMax], e.debug("Restored channel configuration after context loss")), this.PT && this.zarrStore && this.zarrStore.brickLayout) try {
			this.initMRMCPT(), e.debug("Successfully reinitialized MRMCPT after context restoration");
		} catch (t) {
			e.error("Failed to reinitialize MRMCPT after context restoration:", t);
		}
		this._contextRestoredCallbacks.forEach((t) => {
			try {
				t();
			} catch (t) {
				e.error("Error in context restored callback:", t);
			}
		});
	}
	isContextLost() {
		return this._isContextLost ? !0 : this.gl && typeof this.gl.isContextLost == "function" ? this.gl.isContextLost() : !1;
	}
	onContextRestored(e) {
		typeof e == "function" && this._contextRestoredCallbacks.push(e);
	}
	initImages(e, t) {
		V("INIT IMAGES"), this.images = e, this.imageLayerScopes = t;
	}
	async init(t) {
		if (V("INIT()"), this.initStatus !== B.NOT_STARTED) return e.debug("VolumeDataManager init() was called more than once!"), this.initStatus === B.COMPLETE ? {
			success: !0,
			deviceLimits: this.deviceLimits,
			zarrStore: this.zarrStore,
			physicalSizeTotal: this.zarrStore.physicalSizeTotal,
			physicalSizeVoxel: this.zarrStore.physicalSizeVoxel,
			error: null
		} : this.initStatus === B.FAILED ? {
			success: !1,
			error: this.initError || "Unknown initialization error"
		} : {
			success: !1,
			pending: !0,
			error: "Initialization in progress"
		};
		this.initStatus = B.IN_PROGRESS, V("INIT() IN PROGRESS");
		try {
			let n = this.images?.[this.imageLayerScopes?.[0]]?.image?.instance;
			if (this.ngffMetadata = n.vivLoader.metadata, e.debug("ngffMetadata", this.ngffMetadata), !n || n.getType() !== "ome-zarr") throw Error("Invalid imageWrapper or not an OME-Zarr image");
			let i = n.getMultiResolutionStats(), a = H(i), o = i.length;
			this.zarrStore.resolutions = o;
			let s = n.getData();
			if (!Array.isArray(s) || s.length < 1) throw Error("Not a multiresolution loader");
			if (!r(s[0].labels, [
				"t",
				"c",
				"z",
				"y",
				"x"
			])) throw Error("Expected OME-Zarr data with dimensions [t, c, z, y, x]");
			e.debug("vivData", s);
			let c = s.map((e) => e._data), l = Array(o).fill(null);
			if (c.length > 0) {
				let r = c[0];
				if (this.zarrStore = {
					resolutions: o,
					chunkSize: r.chunks,
					shapes: a,
					arrays: c,
					dtype: r.dtype,
					physicalSizeTotal: [],
					physicalSizeVoxel: [],
					brickLayout: [],
					channelCount: a[0][1],
					scales: l
				}, this.channels.colorMappings = Array(Math.min(this.zarrStore.channelCount, 7)).fill(-1), this.channels.zarrMappings = Array(Math.min(this.zarrStore.channelCount, 7)).fill(void 0), this.channels.downsampleMin = Array(Math.min(this.zarrStore.channelCount, 7)).fill(void 0), this.channels.downsampleMax = Array(Math.min(this.zarrStore.channelCount, 7)).fill(void 0), r.meta && r.meta.physicalSizes) {
					let { x: e, y: t, z: n } = r.meta.physicalSizes, i = n?.size || 1, a = t?.size || 1, o = e?.size || 1;
					this.zarrStore.physicalSizeVoxel = [
						i,
						a,
						o
					], r.shape && r.shape.length >= 5 && (this.zarrStore.physicalSizeTotal = [
						(r.shape[2] || 1) * i,
						(r.shape[3] || 1) * a,
						(r.shape[4] || 1) * o
					]);
				} else this.zarrStore.physicalSizeVoxel = [
					1,
					1,
					1
				], this.zarrStore.physicalSizeTotal = [
					r.shape[2] || 1,
					r.shape[3] || 1,
					r.shape[4] || 1
				];
				let { multiscales: i } = this.ngffMetadata;
				if (!i) throw Error("Expected multiscales metadata in group.attrs");
				if (i?.[0]?.datasets?.[0]?.coordinateTransformations) {
					for (let e = 0; e < o; e++) if (i?.[0]?.datasets?.[e]?.coordinateTransformations?.[0]?.scale) {
						let { scale: t } = i[0].datasets[e].coordinateTransformations[0];
						l[e] = [
							t[4],
							t[3],
							t[2]
						];
					}
				} else {
					e.error("no coordinateTransformations available, assuming downsampling ratio of 2 per dimension");
					for (let e = 0; e < o; e++) {
						let t = 2 ** e;
						l[e] = [
							t,
							t,
							t
						];
					}
				}
				this.zarrStore.scales = l;
				let { coordinateTransformations: s } = this.ngffMetadata;
				if (s?.[0]?.scale) {
					let { scale: e } = s[0], t = e.length;
					if (t >= 3) {
						let n = e[t - 3], i = e[t - 2], a = e[t - 1];
						this.zarrStore.physicalSizeVoxel = [
							n,
							i,
							a
						], r.shape && r.shape.length >= 5 && (this.zarrStore.physicalSizeTotal = [
							(r.shape[2] || 1) * n,
							(r.shape[3] || 1) * i,
							(r.shape[4] || 1) * a
						]);
					}
				}
				this.zarrStore.brickLayout = U(n.getMultiResolutionStats()), e.debug("config", t);
				let { omero: u } = this.ngffMetadata || {};
				if (!u) throw Error("Expected omero metadata in ngffMetadata");
				e.debug("omero", u), Object.keys(t).forEach((e, n) => {
					let r = t[e].spatialTargetC;
					this.channels.zarrMappings[n] = r, this.channels.colorMappings[n] = n, this.channels.downsampleMin[n] = u?.channels?.[r]?.window?.min || 0, this.channels.downsampleMax[n] = u?.channels?.[r]?.window?.max || 65535;
				}), e.debug("zarrMappings after init", this.channels.zarrMappings), e.debug("colorMappings after init", this.channels.colorMappings), e.debug("downsampleMin after init", this.channels.downsampleMin), e.debug("downsampleMax after init", this.channels.downsampleMax), this.initMRMCPT();
			}
			return this.initStatus = B.COMPLETE, V("INIT() COMPLETE"), {
				success: !0,
				deviceLimits: this.deviceLimits,
				zarrStore: this.zarrStore,
				physicalSizeTotal: this.zarrStore.physicalSizeTotal,
				physicalSizeVoxel: this.zarrStore.physicalSizeVoxel,
				error: null
			};
		} catch (t) {
			return V("INIT() FAILED"), e.error("Error initializing VolumeDataManager:", t), this.initStatus = B.FAILED, this.initError = t.message || "Unknown error", {
				success: !1,
				error: this.initError
			};
		}
	}
	initMRMCPT() {
		V("initMRMCPT");
		let { PT: e, ptTHREE: t, bcTHREE: n } = W(this.zarrStore.brickLayout, this.channels.zarrMappings.length);
		this.PT = e, this.ptTHREE = t, this.bcTHREE = n, V("initMRMCPT() COMPLETE");
	}
	async initTexture() {
		V("initTexture - loading first brick"), await this.handleBrickRequests([{
			x: 0,
			y: 0,
			z: 1
		}]);
	}
	updateChannels(t) {
		if (V("updateChannels"), e.debug("channelProps", t), e.debug("this.channels.zarrMappings", this.channels.zarrMappings), e.debug("this.channels.colorMappings", this.channels.colorMappings), e.debug("this.channels.downsampleMin", this.channels.downsampleMin), e.debug("this.channels.downsampleMax", this.channels.downsampleMax), this.channels.zarrMappings.length === 0) {
			e.debug("channels not initialized yet");
			return;
		}
		let n = Object.values(t).map((e) => e.spatialTargetC).filter((e) => e !== void 0), r = this.channels.zarrMappings.filter((e) => e !== void 0), i = [...new Set(n)].sort((e, t) => e - t), a = [...new Set(r)].sort((e, t) => e - t);
		i.length === a.length && i.every((e, t) => e === a[t]) && e.debug("Channel mappings unchanged, skipping update"), e.debug("Channel mappings changed:", {
			current: a,
			requested: i
		}), Object.entries(t).forEach(([t, r]) => {
			let i = r.spatialTargetC;
			e.debug(`UI channel "${t}" wants zarr channel ${i}`);
			let a = this.channels.zarrMappings.indexOf(i);
			if (a === -1) {
				let t = this.channels.zarrMappings.findIndex((e) => e === void 0);
				if (t !== -1) this.channels.zarrMappings[t] = i, e.debug("channelData", r), e.debug("this.ngffMetadata?.omero?.channels", this.ngffMetadata?.omero?.channels), e.debug("targetZarrChannel", i), this.channels.downsampleMin[t] = this.ngffMetadata?.omero?.channels?.[i]?.window?.min || 0, this.channels.downsampleMax[t] = this.ngffMetadata?.omero?.channels?.[i]?.window?.max || 65535, e.debug(`Mapped zarr channel ${i} to slot ${t}`), e.debug("channels", this.channels);
				else {
					e.debug("No free slots found, looking for unused mapped channels");
					let t = this.channels.zarrMappings.filter((e) => e !== void 0), r = n, a = t.filter((e) => !r.includes(e));
					if (e.debug("Currently mapped:", t), e.debug("Still requested:", r), e.debug("Unused mapped channels:", a), a.length > 0) {
						let t = this.channels.zarrMappings.findIndex((e) => a.includes(e));
						if (t !== -1) {
							let n = this.channels.zarrMappings[t];
							this.channels.zarrMappings[t] = i, this.channels.downsampleMin[t] = this.ngffMetadata?.omero?.channels?.[i]?.window?.min || 0, this.channels.downsampleMax[t] = this.ngffMetadata?.omero?.channels?.[i]?.window?.max || 65535, e.debug(`Reused slot ${t}: ${n} -> ${i}`), this._purgeChannel(t);
						} else e.error("Could not find slot to reuse - this should not happen");
					} else e.error("All slots are full and all mapped channels are still in use");
				}
			} else e.debug(`Zarr channel ${i} already mapped to slot ${a}`);
		});
		let o = Object.values(t).map((e) => {
			let t = this.channels.zarrMappings.indexOf(e.spatialTargetC);
			return t === -1 ? -1 : t;
		});
		for (; o.length < 7;) o.push(-1);
		e.debug("newColorMappings", o), this.channels.colorMappings = o, e.debug("updatedChannels", this.channels), this._lastChannelConfig = {
			zarrMappings: [...this.channels.zarrMappings],
			colorMappings: [...this.channels.colorMappings],
			downsampleMin: [...this.channels.downsampleMin],
			downsampleMax: [...this.channels.downsampleMax]
		};
	}
	getPhysicalDimensionsXYZ() {
		e.debug("getPhysicalDimensionsXYZ"), e.debug("this.zarrStore.physicalSizeTotal", this.zarrStore.physicalSizeTotal);
		let t = [
			this.zarrStore.physicalSizeTotal[2],
			this.zarrStore.physicalSizeTotal[1],
			this.zarrStore.physicalSizeTotal[0]
		];
		return e.debug("out", t), t;
	}
	getMaxResolutionXYZ() {
		e.debug("getMaxResolutionXYZ"), e.debug("this.zarrStore.shapes", this.zarrStore.shapes);
		let t = [
			this.zarrStore.shapes[0][4],
			this.zarrStore.shapes[0][3],
			this.zarrStore.shapes[0][2]
		];
		return e.debug("out", t), t;
	}
	getOriginalScaleXYZ() {
		V("getOriginalScaleXYZ"), e.debug("this.zarrStore.physicalSizeVoxel", this.zarrStore.physicalSizeVoxel);
		let t = [
			this.zarrStore.physicalSizeVoxel[2],
			this.zarrStore.physicalSizeVoxel[1],
			this.zarrStore.physicalSizeVoxel[0]
		];
		return e.debug("out", t), t;
	}
	getNormalizedScaleXYZ() {
		e.debug("getNormalizedScaleXYZ");
		let t = [
			1,
			this.zarrStore.physicalSizeVoxel[1] / this.zarrStore.physicalSizeVoxel[2],
			this.zarrStore.physicalSizeVoxel[0] / this.zarrStore.physicalSizeVoxel[0]
		];
		return e.debug("out", t), t;
	}
	getBoxDimensionsXYZ() {
		e.debug("getBoxDimensionsXYZ"), e.debug("this.zarrStore.shapes", this.zarrStore.shapes);
		let t = [
			1,
			this.zarrStore.shapes[0][3] / this.zarrStore.shapes[0][4],
			this.zarrStore.shapes[0][2] / this.zarrStore.shapes[0][4]
		];
		return e.debug("out", t), t;
	}
	async loadZarrChunk(t = 0, n = 0, r, i, a, o) {
		if (!this.zarrStore || !this.zarrStore.arrays[o]) throw Error("Zarr store or resolution not initialized");
		e.debug("loadZarrChunk", {
			t,
			c: n,
			z: r,
			y: i,
			x: a,
			resolution: o
		});
		let s = await this.zarrStore.arrays[o].getChunk([
			t,
			n,
			r,
			i,
			a
		]);
		if (!s) throw Error(`No chunk found at coordinates [${t},${n},${r},${i},${a}]`);
		if (s.data.length !== M * M * M) throw Error(`Unexpected chunk size: ${s.data.length}`);
		return s.data;
	}
	async processRequestData(t, n) {
		if (this.initStatus !== B.COMPLETE) {
			e.debug("processRequestData: not yet initialized, skipping");
			return;
		}
		if (this.isBusy) {
			e.debug("processRequestData: already busy, skipping");
			return;
		}
		if (this.noNewRequests) {
			e.debug("processRequestData: loading stopped by user, skipping");
			return;
		}
		if (this.isContextLost()) {
			e.debug("processRequestData: WebGL context is lost, skipping");
			return;
		}
		this.isBusy = !0, this.triggerRequest = !1;
		let { requests: r, origRequestCount: i } = q(t, this.k, n);
		r.length === 0 && (this.noNewRequests = !0), e.debug(`processRequestData: handling ${r.length} requests of ${i}`), await this.handleBrickRequests(r), this.triggerUsage = !0, this.isBusy = !1;
	}
	async processUsageData(t) {
		if (this.isBusy) {
			e.debug("processUsageData: already busy, skipping"), this.needsBailout = !0;
			return;
		}
		if (this.isContextLost()) {
			e.debug("processUsageData: WebGL context is lost, skipping");
			return;
		}
		this.isBusy = !0, this.triggerUsage = !1;
		let n = ++this.timeStamp, r = /* @__PURE__ */ new Set();
		for (let e = 0; e < t.length; e += 4) {
			let n = t[e], i = t[e + 1], a = t[e + 2];
			if ((n | i | a) === 0) continue;
			let o = a * N * P + i * N + n;
			o < this.BCTimeStamps.length && r.add(o);
		}
		Array.from(r).forEach((e) => {
			this.BCTimeStamps[e] = n;
		}), this.BCFull && this._buildLRU(), this.triggerRequest = !0, this.isBusy = !1;
	}
	_evictBrick(e) {
		let t = this.bc2pt[e];
		if (!t) return;
		let [n, r] = this.BCMinMax[e] || [0, 0], i = (1073741824 | Math.min(127, n >> 1) << 23 | Math.min(127, r >> 1) << 16) >>> 0;
		this._updatePTEntry(t.x, t.y, t.z, i), this.bc2pt[e] = null;
	}
	_purgeChannel(t) {
		if (e.debug("purging channel", t), e.debug("corresponding zarr channel", this.channels.zarrMappings[t]), !this.ptTHREE) {
			e.error("pagetable texture not initialized");
			return;
		}
		if (this.isContextLost()) {
			e.warn("WebGL context is lost, skipping channel purge");
			return;
		}
		this.channels.downsampleMin[t] = void 0, this.channels.downsampleMax[t] = void 0, this.channels.zarrMappings[t] = void 0;
		let n = this.PT.channelOffsets[t];
		e.debug("channelMask", n), e.error("TODO: not tested yet");
		let { gl: r } = this, i = this.renderer.properties.get(this.ptTHREE).__webglTexture;
		r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_3D, i);
		for (let t = 0; t < this.zarrStore.resolutions; t++) {
			let i = [
				this.PT.anchors[t][2] * n[2],
				this.PT.anchors[t][1] * n[1],
				this.PT.anchors[t][0] * n[0]
			];
			e.debug("anchor", i);
			let a = this.zarrStore.brickLayout[t], o = a[0] * a[1] * a[2];
			e.debug("extents", a), e.debug("size", o), r.texSubImage3D(r.TEXTURE_3D, 0, i[0], i[1], i[2], a[0], a[1], a[2], r.RED_INTEGER, r.UNSIGNED_INT, new Uint32Array(o));
		}
		r.bindTexture(r.TEXTURE_3D, null);
	}
	_updatePTEntry(t, n, r, i) {
		if (!this.ptTHREE) return;
		if (this.isContextLost()) {
			e.warn("WebGL context is lost, skipping PT entry update");
			return;
		}
		let { gl: a } = this, o = this.renderer.properties.get(this.ptTHREE).__webglTexture;
		a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_3D, o), a.texSubImage3D(a.TEXTURE_3D, 0, t, n, r, 1, 1, 1, a.RED_INTEGER, a.UNSIGNED_INT, new Uint32Array([i])), a.bindTexture(a.TEXTURE_3D, null);
	}
	_allocateBCSlots(t) {
		let n = [], r = N * P * F;
		if (!this.BCFull && this.BCUnusedIndex + t > r && (this.BCFull = !0, e.debug("BRICK CACHE FULL")), this.BCFull) this.LRUStack.length < t && this._buildLRU(), n = this.LRUStack.splice(0, t).map((e) => {
			this._evictBrick(e);
			let t = Math.floor(e / (N * P)), n = e - t * N * P, r = Math.floor(n / N);
			return {
				bcIndex: e,
				x: n % N,
				y: r,
				z: t
			};
		});
		else {
			for (let e = 0; e < t; ++e) {
				let t = (this.BCUnusedIndex + e) % r, i = Math.floor(t / (N * P)), a = t - i * N * P, o = Math.floor(a / N), s = a % N;
				n.push({
					bcIndex: t,
					x: s,
					y: o,
					z: i
				});
			}
			this.BCUnusedIndex += t;
		}
		return n;
	}
	async _uploadBrick(t, n) {
		if (e.debug("uploading brick", t, n), this.isContextLost()) {
			e.warn("WebGL context is lost, skipping brick upload");
			return;
		}
		if (t.x >= this.PT.xExtent || t.y >= this.PT.yExtent || t.z >= this.PT.zTotal || t.x < 0 || t.y < 0 || t.z < 0) {
			e.error("this.PT", this.PT), e.error("ptCoord out of bounds", t);
			return;
		}
		let { channel: r, resolution: i, x: a, y: o, z: s } = K(t.x, t.y, t.z, {
			PT_zExtent: this.PT.zExtent,
			PT_z0Extent: this.PT.z0Extent,
			PT_anchors: this.PT.anchors
		});
		if (!this.channels || !this.channels.zarrMappings || this.channels.zarrMappings.length === 0) {
			e.error("Channel mappings not initialized, skipping brick upload");
			return;
		}
		if (r < 0 || r >= this.channels.zarrMappings.length) {
			e.error("Channel index out of bounds", {
				channel: r,
				mappingsLength: this.channels.zarrMappings.length
			});
			return;
		}
		let c = this.channels.zarrMappings[r];
		if (c === void 0 || c === -1) if (e.warn("zarrChannel is undefined or -1", {
			zarrChannel: c,
			channel: r,
			ptCoord: t,
			channelMappings: this.channels.zarrMappings,
			contextLost: this.isContextLost()
		}), this._lastChannelConfig && this._lastChannelConfig.zarrMappings[r] !== void 0) {
			e.warn("Attempting to use last known channel config"), this.channels.zarrMappings = [...this._lastChannelConfig.zarrMappings], this.channels.colorMappings = [...this._lastChannelConfig.colorMappings], this.channels.downsampleMin = [...this._lastChannelConfig.downsampleMin], this.channels.downsampleMax = [...this._lastChannelConfig.downsampleMax];
			let t = this.channels.zarrMappings[r];
			if (t !== void 0 && t !== -1) e.debug("Successfully restored channel mapping, continuing with upload");
			else {
				e.error("Could not restore valid channel mapping, aborting brick upload");
				return;
			}
		} else {
			e.error("No fallback channel config available, aborting brick upload");
			return;
		}
		e.debug("starting to load zarr chunk", {
			resolution: i,
			z: s,
			y: o,
			x: a,
			zarrChannel: c
		});
		let l = await this.loadZarrChunk(0, c, s, o, a, i);
		if (e.debug("chunk", l), l instanceof Uint16Array) {
			if (e.debug("chunk is Uint16Array, converting to Uint8Array"), this.channels.downsampleMin[r] === void 0) {
				let t = this.channels.zarrMappings[r];
				e.debug("channelId was not found in this.channels.downsampleMin[channel]", t), this.channels.downsampleMin[r] = this.ngffMetadata?.omero?.channels?.[t]?.window?.min || 0, this.channels.downsampleMax[r] = this.ngffMetadata?.omero?.channels?.[t]?.window?.max || 65535, e.debug("this.channels.downsampleMin[channel]", this.channels.downsampleMin[r]), e.debug("this.channels.downsampleMax[channel]", this.channels.downsampleMax[r]);
			}
			let t = new Uint16Array(l.buffer), n = new Uint8Array(l.length), i = this.channels.downsampleMin[r], a = this.channels.downsampleMax[r], o = a - i;
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				n[e] = (Math.max(i, Math.min(a, r)) - i) * 255 / o | 0;
			}
			l = n;
		}
		if (!(l instanceof Uint8Array)) throw Error(`Unsupported chunk type: ${l.constructor.name}. Expected Uint8Array.`);
		let u = 255, d = 0;
		for (let e = 0; e < l.length; ++e) {
			let t = l[e];
			t < u && (u = t), t > d && (d = t);
		}
		let { gl: f } = this, p = this.renderer.properties.get(this.bcTHREE).__webglTexture;
		f.activeTexture(f.TEXTURE2), f.bindTexture(f.TEXTURE_3D, p), f.pixelStorei(f.UNPACK_ALIGNMENT, 1), f.texSubImage3D(f.TEXTURE_3D, 0, n.x * M, n.y * M, n.z * M, M, M, M, f.RED, f.UNSIGNED_BYTE, l), f.pixelStorei(f.UNPACK_ALIGNMENT, 4), f.bindTexture(f.TEXTURE_3D, null);
		let m = f.getError();
		m !== f.NO_ERROR && e.error("WebGL error during brick upload:", m, l), r >= this.channels.zarrMappings.length && (e.debug("channel is out of bounds", r), u = 255, d = 255);
		let h = G(u, d, n.x, n.y, n.z), g = this.renderer.properties.get(this.ptTHREE).__webglTexture;
		f.activeTexture(f.TEXTURE0), f.bindTexture(f.TEXTURE_3D, g), f.texSubImage3D(f.TEXTURE_3D, 0, t.x, t.y, t.z, 1, 1, 1, f.RED_INTEGER, f.UNSIGNED_INT, new Uint32Array([h])), f.bindTexture(f.TEXTURE_3D, null);
		let _ = f.getError();
		_ !== f.NO_ERROR && e.error("WebGL error during pagetable upload:", _, l), this.BCTimeStamps[n.bcIndex] = this.timeStamp, this.BCMinMax[n.bcIndex] = [u, d], this.bc2pt[n.bcIndex] = t;
	}
	async handleBrickRequests(t) {
		if (t.length === 0) return;
		this.totalBricksRequested = t.length, this.currentRequestCount = t.length;
		let n = this._allocateBCSlots(t.length);
		e.debug("Handling brick requests:", {
			requestCount: t.length,
			slotCount: n.length
		}), e.debug("handleBrickRequests: starting for loop");
		for (let r = 0; r < t.length; ++r) {
			await this._uploadBrick(t[r], n[r]), this.currentRequestCount = t.length - r - 1;
			let i = this.bricksEverLoaded.size;
			if (this.bricksEverLoaded.add(`${t[r].x},${t[r].y},${t[r].z}`), i === this.bricksEverLoaded.size && e.debug("DUPLICATE BRICK LOADED", t[r]), this.needsBailout) {
				e.debug("Bailing out of handleBrickRequests early due to needsBailout flag"), this.needsBailout = !1, this.currentRequestCount = 0;
				break;
			}
		}
		this.currentRequestCount = 0, e.debug("this.bricksEverLoaded", this.bricksEverLoaded);
	}
	_buildLRU() {
		let e = this.BCTimeStamps.map((e, t) => ({
			index: t,
			time: e
		}));
		this.LRUStack = e.sort((e, t) => e.time - t.time).slice(0, this.k).map((e) => e.index);
	}
}, J = {
	uniforms: {
		u_size: { value: new x(1, 1, 1) },
		clim0: { value: new l(.2, .8) },
		clim1: { value: new l(.2, .8) },
		clim2: { value: new l(.2, .8) },
		clim3: { value: new l(.2, .8) },
		clim4: { value: new l(.2, .8) },
		clim5: { value: new l(.2, .8) },
		clim6: { value: new l(.2, .8) },
		clim7: { value: new l(.2, .8) },
		xClip: { value: new l(0, 1e6) },
		yClip: { value: new l(0, 1e6) },
		zClip: { value: new l(0, 1e6) },
		u_window_size: { value: new l(1, 1) },
		u_vol_scale: { value: new x(1, 1, 1) },
		u_renderstyle: { value: 2 },
		brickCacheTex: {
			type: "sampler3D",
			value: null
		},
		pageTableTex: {
			type: "usampler3D",
			value: null
		},
		color0: { value: new w(0, 0, 0) },
		color1: { value: new w(0, 0, 0) },
		color2: { value: new w(0, 0, 0) },
		color3: { value: new w(0, 0, 0) },
		color4: { value: new w(0, 0, 0) },
		color5: { value: new w(0, 0, 0) },
		color6: { value: new w(0, 0, 0) },
		channelMapping: { value: [
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1
		] },
		resGlobal: { value: new l(0, 9) },
		res0: { value: new l(0, 9) },
		res1: { value: new l(0, 9) },
		res2: { value: new l(0, 9) },
		res3: { value: new l(0, 9) },
		res4: { value: new l(0, 9) },
		res5: { value: new l(0, 9) },
		res6: { value: new l(0, 9) },
		maxChannels: { value: 0 },
		lodFactor: { value: 1 },
		near: { value: .1 },
		far: { value: 1e4 },
		opacity: { value: 1 },
		volumeCount: { value: 0 },
		boxSize: { value: new x(1, 1, 1) },
		renderRes: { value: 1e3 },
		voxelExtents: { value: new x(1, 1, 1) },
		anchor0: { value: new x(0, 0, 0) },
		anchor1: { value: new x(0, 0, 0) },
		anchor2: { value: new x(0, 0, 0) },
		anchor3: { value: new x(0, 0, 0) },
		anchor4: { value: new x(0, 0, 0) },
		anchor5: { value: new x(0, 0, 0) },
		anchor6: { value: new x(0, 0, 0) },
		anchor7: { value: new x(0, 0, 0) },
		anchor8: { value: new x(0, 0, 0) },
		anchor9: { value: new x(0, 0, 0) },
		scale0: { value: new x(1, 1, 1) },
		scale1: { value: new x(2, 2, 2) },
		scale2: { value: new x(4, 4, 4) },
		scale3: { value: new x(8, 8, 8) },
		scale4: { value: new x(16, 16, 16) },
		scale5: { value: new x(32, 32, 32) },
		scale6: { value: new x(64, 64, 64) },
		scale7: { value: new x(128, 128, 128) },
		scale8: { value: new x(256, 256, 256) },
		scale9: { value: new x(512, 512, 512) }
	},
	vertexShader: "//\n// Output: Unnormalized ray direction from camera to each vertex\n// Used by fragment shader for ray marching through the volume\nout vec3 rayDirUnnorm;\n\n// Output: Camera position transformed into volume's local coordinate system\n// Used to calculate ray origins in the fragment shader\nout vec3 cameraCorrected;\n\n// Volume scale uniform (likely for anisotropic voxels)\nuniform vec3 u_vol_scale;\n\n// Volume size uniform\nuniform vec3 u_size;\n\n// Output: Vertex positions normalized to [0,1] range within volume bounds\n// Standard coordinate system for volume sampling\nvarying vec3 worldSpaceCoords;\n\n// Output: Texture coordinates for sampling volume data\nvarying vec2 vUv;\n\n// Output: Final clip-space position (stored for fragment shader access)\nvarying vec4 glPosition;\n\n// Volume bounding box size uniform\nuniform highp vec3 boxSize;\n\nvoid main()\n{\n   // Transform vertex positions from [-0.5, 0.5] range to [0, 1] range\n   // This is the standard coordinate system for volume sampling\n   //\n   // Mathematical transformation:\n   // worldSpaceCoords = (position / boxSize) + 0.5\n   // \n   // Example:\n   // position = (-0.5, -0.5, -0.5) → worldSpaceCoords = (0, 0, 0)\n   // position = ( 0.0,  0.0,  0.0) → worldSpaceCoords = (0.5, 0.5, 0.5)\n   // position = ( 0.5,  0.5,  0.5) → worldSpaceCoords = (1, 1, 1)\n   worldSpaceCoords = position / boxSize + vec3(0.5, 0.5, 0.5); //move it from [-0.5;0.5] to [0,1]\n   \n   // Transform camera position into volume's local coordinate system\n   // This gives us the ray origin in volume space\n   cameraCorrected = (inverse(modelMatrix) * vec4(cameraPosition, 1.)).xyz;\n   \n   // Calculate unnormalized ray direction from camera to each vertex\n   // Used by fragment shader for ray marching through the volume\n   rayDirUnnorm = position - cameraCorrected;\n   \n   // Apply standard MVP transformation to get clip-space coordinates\n   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n   \n   // Store clip-space position for fragment shader access\n   glPosition = gl_Position;\n   \n   // Pass through texture coordinates for volume sampling\n   vUv = uv;\n}\n",
	fragmentShader: "//\n// #include <packing>\nprecision highp float;\nprecision highp int;\nprecision highp sampler3D;\nprecision highp usampler3D;\n\n// ========================================\n// INPUT VARIABLES (from vertex shader)\n// ========================================\n// Unnormalized ray direction from camera\nin vec3 rayDirUnnorm;\n// Camera position in world space\nin vec3 cameraCorrected;\n\n// ========================================\n// TEXTURE SAMPLERS\n// ========================================\n// 3D texture containing cached brick data (2048x2048x128)\n// (2048*2048*128)/(32*32*32) = 16,384 bricks can be stored?\nuniform sampler3D brickCacheTex;\n// 3D texture containing page table entries (brick metadata)\nuniform usampler3D pageTableTex;\n\n// ========================================\n// RENDERING PARAMETERS/CONSTANTS\n// ========================================\n// Rendering style: 0=MIP, 1=MinIP, 2=standard volume rendering, 3=DEBUG\nuniform int u_renderstyle;\n// Global opacity multiplier for volume rendering\nuniform float opacity;\n\n// ========================================\n// CONTRAST LIMITS (per channel)\n// per channel min/max values for value normalization\n// ========================================\nuniform vec2 clim0;\nuniform vec2 clim1;\nuniform vec2 clim2;\nuniform vec2 clim3;\nuniform vec2 clim4;\nuniform vec2 clim5;\nuniform vec2 clim6;\n\n// ========================================\n// CLIPPING PLANES\n// e.g., for X-axis clipping: (min_x, max_x) or (-1, -1) if disabled\n// ========================================\nuniform vec2 xClip;\nuniform vec2 yClip;\nuniform vec2 zClip;\n\n// ========================================\n// CHANNEL COLORS AND OPACITIES\n// rgb -- color values, a -- visibility (boolean)\n// ========================================\nuniform vec4 color0;\nuniform vec4 color1;\nuniform vec4 color2;\nuniform vec4 color3;\nuniform vec4 color4;\nuniform vec4 color5;\nuniform vec4 color6;\n\n// maps colors to physical spaces\nuniform int channelMapping[7];\n\n// ========================================\n// VOLUME AND RESOLUTION PARAMETERS\n// ========================================\n// Volume bounding box size in world space\nuniform highp vec3 boxSize;\n// Rendering resolution level (affects step size)\n// stepsize, correlates with resolution\nuniform int renderRes;\n// Volume dimensions in voxels (x, y, z)\n// resolution 0 voxel extents\nuniform uvec3 voxelExtents;\n// Global resolution range: (min_res, max_res)\n// global range of requested resolutions\nuniform ivec2 resGlobal;\n// Maximum number of active channels\n// max number of channels (relevant for the cache statistics)\n// between 1 and 7\nuniform int maxChannels;\n\n// ========================================\n// PER-CHANNEL RESOLUTION RANGES\n// per color channel resolution range\n// Each channel can have different available resolution levels\n// e.g., for Channel 0: (min_res, max_res)\n// ========================================\nuniform ivec2 res0;\nuniform ivec2 res1;\nuniform ivec2 res2;\nuniform ivec2 res3;\nuniform ivec2 res4;\nuniform ivec2 res5;\nuniform ivec2 res6;\n// Channel 7: unused\nuniform ivec2 res7;\n\n// ========================================\n// LEVEL-OF-DETAIL PARAMETERS\n// controls how fast we decrease the resolution\n// ========================================\n// LOD factor for distance-based resolution selection\nuniform float lodFactor;\n\n// ========================================\n// ANCHOR POINTS (per resolution level)\n// per resolution anchor point for pagetable\n// ========================================\n// Anchor points define the origin of page table for each resolution level\n// Resolution 0 anchor point (highest detail)\nuniform uvec3 anchor0;\nuniform uvec3 anchor1;\nuniform uvec3 anchor2;\nuniform uvec3 anchor3;\nuniform uvec3 anchor4;\nuniform uvec3 anchor5;\nuniform uvec3 anchor6;\nuniform uvec3 anchor7;\nuniform uvec3 anchor8;\nuniform uvec3 anchor9;\n// Resolution 9 anchor point (lowest detail)\n\n// ========================================\n// SCALE FACTORS (per resolution level)\n// per resolution downsample factor\n// ========================================\n// Scale factors determine voxel size at each resolution level\n// Resolution 0 scale factors (should be 1,1,1)\nuniform vec3 scale0;\nuniform vec3 scale1;\nuniform vec3 scale2;\nuniform vec3 scale3;\nuniform vec3 scale4;\nuniform vec3 scale5;\nuniform vec3 scale6;\nuniform vec3 scale7;\nuniform vec3 scale8;\nuniform vec3 scale9;\n// Resolution 9 scale factors\n\n// ========================================\n// VARYING VARIABLES (unused but required)\n// ========================================\n// Fragment position (unused)\nvarying vec4 glPosition;\n// World space coordinates (used for depth only)\nvarying vec3 worldSpaceCoords;\n\n// ========================================\n// OUTPUT VARIABLES (multiple render targets)\n// output buffers\n// ========================================\n// Final rendered color (sRGB)\nlayout(location = 0) out vec4 gColor;\n// Brick loading requests (packed coordinates)\nlayout(location = 1) out vec4 gRequest;\n// Brick usage tracking (for cache management)\nlayout(location = 2) out vec4 gUsage;\n\n// ========================================\n// CONSTANTS\n// ========================================\n// Size of each brick in voxels (32x32x32)\nconst float BRICK_SIZE = 32.0;\n// Brick cache texture width\nconst float BRICK_CACHE_SIZE_X = 2048.0;\n// Brick cache texture height\nconst float BRICK_CACHE_SIZE_Y = 2048.0;\n// Brick cache texture depth\nconst float BRICK_CACHE_SIZE_Z = 128.0;\n// Number of bricks in X (64)\nconst float BRICK_CACHE_BRICKS_X = BRICK_CACHE_SIZE_X / BRICK_SIZE;\n// Number of bricks in Y (64)\nconst float BRICK_CACHE_BRICKS_Y = BRICK_CACHE_SIZE_Y / BRICK_SIZE;\n// Number of bricks in Z (4)\nconst float BRICK_CACHE_BRICKS_Z = BRICK_CACHE_SIZE_Z / BRICK_SIZE;\n\n// ========================================\n// RAY-VOLUME INTERSECTION\n// calculating the intersection of the ray with the bounding box\n// ========================================\n// Calculates the intersection of a ray with the volume's bounding box\n// Returns (entry_time, exit_time) for the ray-box intersection\n// Handles clipping planes by adjusting the bounding box\n//\n// Parameters:\n//   orig - vec3: Ray origin point in world space\n//   dir - vec3: Ray direction vector (should be normalized)\n//\n// Returns:\n//   vec2: (entry_time, exit_time) where:\n//     - entry_time: Distance along ray to enter the volume\n//     - exit_time: Distance along ray to exit the volume\n//     - If no intersection: entry_time > exit_time\nvec2 intersect_hit(vec3 orig, vec3 dir) {\n    // Start with full volume bounds\n    vec3 boxMin = vec3(-0.5) * boxSize;\n    vec3 boxMax = vec3(0.5) * boxSize;\n    \n    // Apply clipping planes if they're active (xClip.x > -1.0 means active)\n    if (xClip.x > -1.0) {\n        boxMin.x = xClip.x - (boxSize.x / 2.0);\n        if (xClip.y < boxSize.x)\n        boxMax.x = xClip.y - (boxSize.x / 2.0);\n    }\n    if (yClip.x > -1.0) {\n        boxMin.y = yClip.x - (boxSize.y / 2.0);\n        if (yClip.y < boxSize.y)\n        boxMax.y = yClip.y - (boxSize.y / 2.0);\n    }\n    if (zClip.x > -1.0) {\n        boxMin.z = zClip.x - (boxSize.z / 2.0);\n        if (zClip.y < boxSize.z)\n        boxMax.z = zClip.y - (boxSize.z / 2.0);\n    }\n    \n    // Standard ray-box intersection algorithm\n    vec3 invDir = 1.0 / dir;\n    vec3 tmin0 = (boxMin - orig) * invDir;\n    vec3 tmax0 = (boxMax - orig) * invDir;\n    vec3 tmin = min(tmin0, tmax0);\n    vec3 tmax = max(tmin0, tmax0);\n    float t0 = max(tmin.x, max(tmin.y, tmin.z));  // Entry time\n    float t1 = min(tmax.x, min(tmax.y, tmax.z));  // Exit time\n    return vec2(t0, t1);\n}\n\n// ========================================\n// UTILITY FUNCTIONS\n// ========================================\n\n// Pseudo-random number generator for jittered sampling\n// random number generator based on the uv coordinate\n// Author @patriciogv - 2015\n// http://patriciogonzalezvivo.com\n//\n// Parameters:\n//   None (uses gl_FragCoord.xy as input)\n//\n// Returns:\n//   float: Random value between 0.0 and 1.0 based on fragment coordinates\nfloat random() {\n    return fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233)))* 43758.5453123);\n}\n\n// Convert from linear RGB to sRGB color space\n// Implements the standard sRGB transfer function for gamma correction\n//\n// Parameters:\n//   x - float: Linear RGB value between 0.0 and 1.0\n//\n// Returns:\n//   float: sRGB value between 0.0 and 1.0\nfloat linear_to_srgb(float x) {\n    if (x <= 0.0031308f) {\n        return 12.92f * x;\n    }\n    return 1.055f * pow(x, 1.f / 2.4f) - 0.055f;\n}\n\n// Convert from linear RGB to sRGB color space (vector version)\n// Applies sRGB conversion to each RGB component while preserving alpha\n//\n// Parameters:\n//   x - vec4: Linear RGBA color with components between 0.0 and 1.0\n//\n// Returns:\n//   vec4: sRGB RGBA color with components between 0.0 and 1.0\nvec4 linear_to_srgb(vec4 x) {\n    return vec4(linear_to_srgb(x.r), linear_to_srgb(x.g), linear_to_srgb(x.b), x.a);\n}\n\n// ========================================\n// PAGE TABLE COORDINATE PACKING\n// transform the pagetable coordinate into a RGBA8 value\n// ========================================\n// Packs 3D page table coordinates into RGBA8 texture format\n// Uses 10 bits for X, 10 bits for Y, 12 bits for Z\n//\n// Parameters:\n//   coord - uvec3: 3D coordinates to pack (X, Y, Z components)\n//     - X coordinate: 10-bit unsigned integer (0-1023)\n//     - Y coordinate: 10-bit unsigned integer (0-1023) \n//     - Z coordinate: 12-bit unsigned integer (0-4095)\n//\n// Returns:\n//   vec4: RGBA8 encoded coordinates with components between 0.0 and 1.0\n//     - R: Upper 8 bits of packed 32-bit value\n//     - G: Middle-upper 8 bits of packed 32-bit value\n//     - B: Middle-lower 8 bits of packed 32-bit value\n//     - A: Lower 8 bits of packed 32-bit value\nvec4 packPTCoordToRGBA8(uvec3 coord) {\n\n    uint x = coord.x & 0x3FFu; // 10 bits for X coordinate\n    uint y = coord.y & 0x3FFu; // 10 bits for Y coordinate\n    uint z = coord.z & 0xFFFu; // 12 bits for Z coordinate\n\n    // Pack into 32-bit integer\n    uint packed =\n        (x << 22u) |\n        (y << 12u) |\n        (z);\n\n    // Decompose into RGBA8 format\n    return vec4(\n        float((packed >> 24u) & 0xFFu) / 255.0,\n        float((packed >> 16u) & 0xFFu) / 255.0,\n        float((packed >> 8u) & 0xFFu) / 255.0,\n        float(packed & 0xFFu) / 255.0\n    );\n}\n\n// ========================================\n// RESOLUTION AND ANCHOR POINT ACCESSORS\n// ========================================\n\n// Get anchor point for a specific resolution level\n// Anchor points define the origin of the page table for each resolution\n//\n// Parameters:\n//   index - int: Resolution level index (0-9, where 0 is highest resolution)\n//\n// Returns:\n//   uvec3: 3D anchor point coordinates in the page table, or (-1, -1, -1) if invalid\nuvec3 getAnchorPoint(int index) {\n    if (index == 0) return anchor0;\n    if (index == 1) return anchor1;\n    if (index == 2) return anchor2;\n    if (index == 3) return anchor3;\n    if (index == 4) return anchor4;\n    if (index == 5) return anchor5;\n    if (index == 6) return anchor6;\n    if (index == 7) return anchor7;\n    if (index == 8) return anchor8;\n    if (index == 9) return anchor9;\n    return uvec3(-1, -1, -1);\n}\n\n// Find the lowest available resolution level\n// Returns the highest resolution index that has valid data\n//\n// Parameters:\n//   None\n//\n// Returns:\n//   int: Highest resolution level index (0-9) that has valid anchor point data\n//        Returns 9 if no valid resolution levels are found\nint getLowestRes() {\n    for (int i = 0; i < 10; i++) {\n        if (getAnchorPoint(i) == uvec3(0,0,0)) {\n            return i - 1;\n        }\n    }\n    return 9;\n}\n\n// Get the downsample factor for a resolution level\n// Scale factors determine the voxel size at each resolution\n//\n// Parameters:\n//   index - int: Resolution level index (0-9, where 0 is highest resolution)\n//\n// Returns:\n//   vec3: Scale factors (x, y, z) for the resolution level, or (-1, -1, -1) if invalid\n//         Higher scale factors indicate larger voxels (lower resolution)\nvec3 getScale(int index) {\n    if (index == 0) return scale0;\n    if (index == 1) return scale1;\n    if (index == 2) return scale2;\n    if (index == 3) return scale3;\n    if (index == 4) return scale4;\n    if (index == 5) return scale5;\n    if (index == 6) return scale6;\n    if (index == 7) return scale7;\n    if (index == 8) return scale8;\n    if (index == 9) return scale9;\n    return vec3(-1.0, -1.0, -1.0);\n}\n\n// Get the resolution range for a color channel\n// Returns (min_res, max_res) for the channel\n//\n// Parameters:\n//   index - int: Channel index (0-6)\n//\n// Returns:\n//   ivec2: Resolution range as (min_resolution_level, max_resolution_level)\n//          Returns (-1, -1) if channel index is invalid\nivec2 getRes(int index) {\n    if (index == 0) return res0;\n    if (index == 1) return res1;\n    if (index == 2) return res2;\n    if (index == 3) return res3;\n    if (index == 4) return res4;\n    if (index == 5) return res5;\n    if (index == 6) return res6;\n    return ivec2(-1, -1);\n}\n\n// Get the min/max values (contrast limits) for a color channel\n// Returns (min_value, max_value) for normalization\n//\n// Parameters:\n//   index - int: Channel index (0-6)\n//\n// Returns:\n//   vec2: Contrast limits as (min_value, max_value) for data normalization\n//         Returns (-1.0, -1.0) if channel index is invalid\nvec2 getClim(int index) {\n    if (index == 0) return clim0;\n    if (index == 1) return clim1;\n    if (index == 2) return clim2;\n    if (index == 3) return clim3;\n    if (index == 4) return clim4;\n    if (index == 5) return clim5;\n    if (index == 6) return clim6;\n    return vec2(-1.0, -1.0);\n}\n\n// ========================================\n// COORDINATE TRANSFORMATIONS\n// ========================================\n\n// Convert normalized coordinates (0-1) to voxel coordinates.\n// get the voxel coordinate in the specified resolution from the normalized coordinate\n//\n// Parameters:\n//   normalized - vec3: Normalized coordinates in range [0,1] for each axis\n//   res - int: Resolution level (0=highest detail, 9=lowest detail)\n//\n// Returns:\n//   vec3: Voxel coordinates in the volume space at the specified resolution\nvec3 getVoxelFromNormalized(vec3 normalized, int res) {\n    vec3 extents = (vec3(voxelExtents) / getScale(res)); // Voxel extents at this resolution\n    vec3 voxel = normalized * extents;\n    return voxel;\n}\n\n// Convert voxel coordinates to normalized coordinates (0-1)\n// get the normalized coordinate based on the voxel coordinate in the specified resolution\n//\n// Parameters:\n//   voxel - vec3: Voxel coordinates in the volume space\n//   res - int: Resolution level (0=highest detail, 9=lowest detail)\n//\n// Returns:\n//   vec3: Normalized coordinates in range [0,1] for each axis\nvec3 getNormalizedFromVoxel(vec3 voxel, int res) {\n    vec3 extents = (vec3(voxelExtents) / getScale(res)); // Voxel extents at this resolution\n    vec3 normalized = voxel / extents;\n    return normalized;\n}\n\n// Convert normalized coordinates to brick coordinates.\n// get the brick coordinate in the specified resolution based on the normalized coordinate\n// needed for pagetable calculations\n//\n// Parameters:\n//   normalized - vec3: Normalized coordinates in range [0,1] for each axis\n//   res - int: Resolution level (0=highest detail, 9=lowest detail)\n//\n// Returns:\n//   vec3: Brick coordinates (each brick is 32x32x32 voxels)\nvec3 getBrickFromNormalized(vec3 normalized, int res) {\n    vec3 voxel = getVoxelFromNormalized(normalized, res);\n    vec3 brick = floor(voxel / 32.0);  // Each brick is 32x32x32 voxels\n    return brick;\n}\n\n// Convert voxel coordinates to brick coordinates.\n// get the brick coordinate in the specified resolution based on the voxel coordinate\n//\n// Parameters:\n//   voxel - vec3: Voxel coordinates in the volume space\n//   res - int: Resolution level (0=highest detail, 9=lowest detail)\n//\n// Returns:\n//   vec3: Brick coordinates (each brick is 32x32x32 voxels)\nvec3 getBrickFromVoxel(vec3 voxel, int res) {\n    vec3 brick = floor(voxel / 32.0);  // Each brick is 32x32x32 voxels\n    return brick;\n}\n\n// ========================================\n// CHANNEL-SPECIFIC ACCESSORS\n// ========================================\n\n// Get channel offset in page table.\n// get the vector for the specified channel slot in the pagetable\n// Different channels are stored at different Z-offsets in the page table\n//\n// Parameters:\n//   index - int: Channel index (0-6)\n//\n// Returns:\n//   uvec3: 3D offset coordinates for the channel in the page table\nuvec3 getChannelOffset(int index) {\n    if (index == 0) return uvec3(0, 0, 1);\n    if (index == 1) return uvec3(0, 1, 0);\n    if (index == 2) return uvec3(0, 1, 1);\n    if (index == 3) return uvec3(1, 0, 0);\n    if (index == 4) return uvec3(1, 0, 1);\n    if (index == 5) return uvec3(1, 1, 0);\n    if (index == 6) return uvec3(1, 1, 1);\n    return uvec3(0, 0, 0);\n}\n\n// Get color for a channel.\n// get the color per color channel\n//\n// Parameters:\n//   index - int: Channel index (0-6)\n//\n// Returns:\n//   vec3: RGB color values for the specified channel\nvec3 getChannelColor(int index) {\n    if (index == 0) return color0.xyz;\n    if (index == 1) return color1.xyz;\n    if (index == 2) return color2.xyz;\n    if (index == 3) return color3.xyz;\n    if (index == 4) return color4.xyz;\n    if (index == 5) return color5.xyz;\n    if (index == 6) return color6.xyz;\n    return vec3(0.0, 0.0, 0.0);\n}\n\n// Get opacity for a channel\n// get the opacity (used as visibility) per color channel\n//\n// Parameters:\n//   index - int: Channel index (0-6)\n//\n// Returns:\n//   float: Opacity value (0.0-1.0) for the specified channel\nfloat getChannelOpacity(int index) {\n    if (index == 0) return color0.w;\n    if (index == 1) return color1.w;\n    if (index == 2) return color2.w;\n    if (index == 3) return color3.w;\n    if (index == 4) return color4.w;\n    if (index == 5) return color5.w;\n    if (index == 6) return color6.w;\n    return 0.0;\n}\n\n// ========================================\n// PAGE TABLE DECODING\n// ========================================\n\n/**\n * retrieving the brick based on:\n * location   -- normalized coordinate\n * targetRes  -- target resolution\n * channel    -- physical channel slot\n * rnd        -- random number for jittering requests \n * query      -- whether to query the brick (we dont query for interblock interpolation)\n * colorIndex -- color index for querying the min max values\n * \n * returns:\n * w >= 0 -- xyz contains brick cache coordinate, w stores resolution\n * w == -1 -- not resident in any resolution, should be treated as empty\n * w == -2 -- empty (with respect to current transfer function)\n * w == -3 -- constant full (with respect to current transfer function)\n * w == -4 -- constant value within range, x stores that value\n *\n * bit layout:\n * [1] 31    | 0 — flag resident\n * [1] 30    | 1 — flag init\n * [7] 23…29 | 2…8 — min → 128\n * [7] 16…22 | 9…15 — max → 128\n * [6] 10…15 | 16…21 — x offset in brick cache → max 64\n * [6] 4…9   | 22…27 — y offset in brick cache →  max 64\n * [4] 0…3   | 28…31 — z offset in brick cache → max 16, effectively 4\n*/\n\n/*\nPage table entry format (32 bits):\n[31]    | 0 — flag resident (1=loaded in cache)\n[30]    | 1 — flag init (1=initialized)\n[29:23] | 2…8 — min value (7 bits) → 128 levels\n[22:16] | 9…15 — max value (7 bits) → 128 levels  \n[15:10] | 16…21 — x offset in brick cache (6 bits) → 64 bricks\n[9:4]   | 22…27 — y offset in brick cache (6 bits) → 64 bricks\n[3:0]   | 28…31 — z offset in brick cache (4 bits) → 16 bricks\n*/\n\n// Query page table to find brick location and status\n// Searches for a brick at the specified location across multiple resolution levels\n// and returns its cache coordinates and status information\n//\n// Parameters:\n//   location - vec3: Normalized coordinates (0-1) within the volume\n//   targetRes - int: Target resolution level to start searching from\n//   channel - int: Channel index (0-6) to query\n//   rnd - float: Random value (0-1) used for brick loading request selection\n//   query - bool: Whether to allow brick loading requests (true) or just query (false)\n//   colorIndex - int\n//\n// Returns:\n//   ivec4: (x_offset, y_offset, z_offset, status) where:\n//     - x_offset, y_offset, z_offset: Brick cache coordinates if found\n//     - status: Resolution level (>=0) if found, or status code:\n//       * -1: Not found at any resolution level\n//       * -2: Empty brick (all values below threshold)\n//       * -3: Constant full brick (all values above threshold)\n//       * -4: Constant value brick (uniform value)\n// add maxres here\nivec4 getBrickLocation(vec3 location, int targetRes, int channel, float rnd, bool query, int colorIndex) {\n\n    // min max for current color \n    vec2 clim = getClim(colorIndex);\n\n    // resolution ranges, TODO: connect this back to color\n    int channelMin = getRes(channel).x;\n    int channelMax = getRes(channel).y;\n\n    // Clamp resolution to channel's available range\n    int currentRes = clamp(targetRes, channelMin, channelMax);\n    currentRes = clamp(currentRes, resGlobal.x, resGlobal.y);\n    int lowestRes = clamp(resGlobal.y, channelMin, channelMax);\n\n    // Determine if this channel should request brick loading.\n    // request the current channel based on probability\n    bool requestChannel = false;\n    if (int(floor(rnd * float(maxChannels))) == colorIndex) {\n        requestChannel = true;\n    }\n\n    // Try progressively lower resolutions until we find data.\n    // loop through resolutions\n    while (currentRes <= lowestRes) {\n\n        // Calculate page table coordinates for this brick\n        uvec3 anchorPoint = getAnchorPoint(currentRes);\n        vec3 brickLocation = getBrickFromNormalized(location, currentRes);\n        uvec3 channelOffset = getChannelOffset(channel);\n        vec3 coordinate = floor(vec3(anchorPoint * channelOffset)) + brickLocation;\n        \n        // Special handling for resolution 0 (highest detail)\n        if (currentRes == 0) {\n            int zExtent = int(ceil(float(voxelExtents.z) / 32.0));\n            coordinate = vec3(anchorPoint) + vec3(0.0, 0.0, zExtent * channel) + brickLocation;\n        }\n\n        // Query the page table.\n        // get PT entry\n        uint ptEntry = texelFetch(pageTableTex, ivec3(coordinate), 0).r;\n\n        // Check if brick is initialized.\n        // check if the PT entry is initialized\n        uint isInit = (ptEntry >> 30u) & 1u;\n        if (isInit == 0u) { \n            currentRes++; \n            // Request brick loading if needed\n            if (requestChannel == true && (gRequest.a + gRequest.b + gRequest.g + gRequest.r == 0.0) && query == true) {\n                gRequest = packPTCoordToRGBA8(uvec3(coordinate));\n            }\n            continue;\n        }\n        \n        // Extract min/max values from page table entry.\n        // get the min max values of the brick\n        uint umin = ((ptEntry >> 23u) & 0x7Fu);\n        uint umax = ((ptEntry >> 16u) & 0x7Fu);\n        float min = float(int(umin)) / 127.0;\n        float max = float(int(umax)) / 127.0;\n        \n        // Check if brick is empty (all values below threshold).\n        // exit early if brick is constant\n        if (float(max) <= clim.x) {\n            return ivec4(0,0,0,-2);\n            // EMPTY\n        } else if (float(min) >= clim.y) {\n            return ivec4(0,0,0,-3);  // CONSTANT FULL\n        } else if ((umax - umin) < 2u) {\n            return ivec4(min,0,0,-4);  // CONSTANT OTHER VALUE\n        }\n        \n        // Check if brick is resident in cache.\n        // return brick cache location if resident\n        // continue to next resolution if not resident\n        uint isResident = (ptEntry >> 31u) & 1u;\n        if (isResident == 0u) {\n            currentRes++;\n            // Request brick loading if needed\n            if (requestChannel == true && (gRequest.a + gRequest.b + gRequest.g + gRequest.r == 0.0) && query == true) {\n                gRequest = packPTCoordToRGBA8(uvec3(coordinate));\n            }\n            continue;\n        } else {\n            // Extract brick cache coordinates\n            uint xBrickCache = (ptEntry >> 10u) & 0x3Fu;\n            uint yBrickCache = (ptEntry >> 4u) & 0x3Fu;\n            uint zBrickCache = ptEntry & 0xFu;\n            uvec3 brickCacheCoord = uvec3(xBrickCache, yBrickCache, zBrickCache);\n\n            return ivec4(brickCacheCoord, currentRes);\n        }\n    }\n\n    // not resident in any resolution, should be treated as empty\n    return ivec4(0,0,0,-1);  // Not found\n}\n\n// Request brick loading for a specific location and resolution.\n// Initiates a request to load a brick from disk into the brick cache.\n// set the brick request for the specified slot channel\n//\n// Parameters:\n//   location - vec3: Normalized world space coordinates (0.0 to 1.0) where the brick is needed\n//   targetRes - int: Target resolution level (0-9, where 0 is highest resolution)\n//   channel - int: Channel index (0-6) for multi-channel datasets\n//   rnd - float: Random value between 0.0 and 1.0 used for load balancing across channels\n//\n// Returns:\n//   void: No return value, but sets gRequest output variable if conditions are met\nvoid setBrickRequest(vec3 location, int targetRes, int channel, float rnd) {\n    uvec3 anchorPoint = getAnchorPoint(targetRes);\n    vec3 brickLocation = getBrickFromNormalized(location, targetRes);\n    uvec3 channelOffset = getChannelOffset(channel);\n    vec3 coordinate = floor(vec3(anchorPoint * channelOffset)) + brickLocation;\n    \n    // Special handling for resolution 0\n    if (targetRes == 0) {\n        int zExtent = int(ceil(float(voxelExtents.z) / 32.0));\n        coordinate = vec3(anchorPoint) + vec3(0.0, 0.0, zExtent * channel) + brickLocation;\n    }\n    \n    // Pack coordinates and set request\n    if (int(floor(rnd * float(maxChannels))) == channel) {\n        gRequest = packPTCoordToRGBA8(uvec3(coordinate));\n    }\n}\n\n// Track brick usage for cache management.\n// Records which brick in the cache is being accessed for LRU (Least Recently Used) eviction.\n// set the usage for the specified brick\n//\n// Parameters:\n//   brickCacheOffset - ivec3: 3D coordinates of the brick within the brick cache texture\n//   t_hit_min_os - float: Ray entry time in object space (start of ray-volume intersection)\n//   t_hit_max_os - float: Ray exit time in object space (end of ray-volume intersection)\n//   t_os - float: Current sampling position along the ray in object space\n//   rnd - float: Random value between 0.0 and 1.0 used for probabilistic usage tracking\n//\n// Returns:\n//   void: No return value, but sets gUsage output variable to track cache access patterns\nvoid setUsage(ivec3 brickCacheOffset, float t_hit_min_os, float t_hit_max_os, float t_os, float rnd) {\n    float normalized_t_os = (t_os - t_hit_min_os) / (t_hit_max_os - t_hit_min_os); // Normalize to 0-1\n    if (normalized_t_os <= rnd || gUsage == vec4(0.0, 0.0, 0.0, 0.0)) {\n        gUsage = vec4(vec3(brickCacheOffset) / 255.0, 1.0);\n    }\n}\n\n// ========================================\n// UTILITY FUNCTIONS\n// ========================================\n\n// Get maximum component of a 3D vector.\n// get the max value of a vec3\n//\n// Parameters:\n//   v - vec3: Input 3D vector\n//\n// Returns:\n//   float: The maximum value among the x, y, and z components\nfloat vec3_max(vec3 v) {\n    return max(v.x, max(v.y, v.z));\n}\n\n// Get minimum component of a 3D vector.\n// get the min value of a vec3\n//\n// Parameters:\n//   v - vec3: Input 3D vector\n//\n// Returns:\n//   float: The minimum value among the x, y, and z components\nfloat vec3_min(vec3 v) {\n    return min(v.x, min(v.y, v.z));\n}\n\n// Calculate level-of-detail based on distance.\n// Uses logarithmic scaling to determine appropriate resolution level.\n// get the LOD based on the distance to the camera\n//\n// Parameters:\n//   distance - float: Distance from camera to sampling point\n//   highestRes - int: Highest available resolution level (typically 0)\n//   lowestRes - int: Lowest available resolution level (typically 9)\n//   lodFactor - float: Scaling factor that controls LOD sensitivity\n//\n// Returns:\n//   int: Resolution level index (0-9) where 0 is highest resolution\nint getLOD(float distance, int highestRes, int lowestRes, float lodFactor) {\n    int lod = int(log2(distance * lodFactor));\n    return clamp(lod, highestRes, lowestRes);\n}\n\n// Calculate step size for ray marching at a given resolution.\n// Determines optimal sampling step size based on voxel dimensions and ray direction.\n// get the voxel step in object space\n//\n// Parameters:\n//   res - int: Resolution level index (0-9, where 0 is highest resolution)\n//   osDir - vec3: Ray direction vector in object space (should be normalized)\n//\n// Returns:\n//   float: Optimal step size in object space units for stable ray marching\nfloat voxelStepOS(int res, vec3 osDir) {\n    vec3 voxelSize = getScale(res) / vec3(voxelExtents);\n    vec3 dt_vec = voxelSize / abs(osDir);\n    return min(dt_vec.x, min(dt_vec.y, dt_vec.z));\n}\n\n// ========================================\n// INTERPOLATION FUNCTIONS\n// ========================================\n\n// Linear interpolation between two values.\n// Performs smooth interpolation between two scalar values.\n//\n// Parameters:\n//   v0 - float: First value to interpolate from\n//   v1 - float: Second value to interpolate to\n//   fx - float: Interpolation factor between 0.0 and 1.0\n//\n// Returns:\n//   float: Interpolated value between v0 and v1 based on fx\nfloat lerp(float v0, float v1, float fx) {\n    return mix(v0, v1, fx); // (1-fx)·v0 + fx·v1\n}\n\n// Bilinear interpolation between four values\n// Performs 2D interpolation using four corner values arranged in a square\n//\n// Parameters:\n//   v00 - float: Bottom-left corner value\n//   v10 - float: Bottom-right corner value\n//   v01 - float: Top-left corner value\n//   v11 - float: Top-right corner value\n//   f - vec2: 2D interpolation factors (x, y) between 0.0 and 1.0\n//\n// Returns:\n//   float: Interpolated value from the four corner values\nfloat bilerp(float v00, float v10, float v01, float v11, vec2 f) {\n    float c0 = mix(v00, v10, f.x); // Interpolate in X on bottom row\n    float c1 = mix(v01, v11, f.x); // Interpolate in X on top row\n    return mix(c0, c1, f.y); // Now interpolate those in Y\n}\n\n// Trilinear interpolation between eight values\n// Performs 3D interpolation using eight corner values arranged in a cube\n//\n// Parameters:\n//   v000 - float: Bottom-left-back corner value\n//   v100 - float: Bottom-right-back corner value\n//   v010 - float: Bottom-left-front corner value\n//   v110 - float: Bottom-right-front corner value\n//   v001 - float: Top-left-back corner value\n//   v101 - float: Top-right-back corner value\n//   v011 - float: Top-left-front corner value\n//   v111 - float: Top-right-front corner value\n//   f - vec3: 3D interpolation factors (x, y, z) between 0.0 and 1.0\n//\n// Returns:\n//   float: Interpolated value from the eight corner values\nfloat trilerp(\n    float v000, float v100, float v010, float v110,\n    float v001, float v101, float v011, float v111,\n    vec3 f) { // f = fract(coord)\n    // Interpolate along X for each of the four bottom-face voxels\n    float c00 = mix(v000, v100, f.x);\n    float c10 = mix(v010, v110, f.x);\n    float c01 = mix(v001, v101, f.x);\n    float c11 = mix(v011, v111, f.x);\n\n    // Interpolate those along Y\n    float c0 = mix(c00, c10, f.y);\n    float c1 = mix(c01, c11, f.y);\n\n    // Final interpolation along Z\n    return mix(c0, c1, f.z);\n}\n\n// ========================================\n// BRICK CACHE SAMPLING\n// ========================================\n\n// Sample a value from the brick cache texture.\n// Converts brick coordinates and voxel position to texture coordinates for sampling.\n// sample the brick cache based on the brick cache coordinate and the in-brick coordinate\n//\n// Parameters:\n//   brickCacheCoord - vec3: 3D coordinates of the brick within the brick cache\n//   voxelInBrick - vec3: 3D coordinates of the voxel within the brick (0-31 in each dimension)\n//\n// Returns:\n//   float: Sampled voxel value from the brick cache texture (typically normalized 0.0-1.0)\nfloat sampleBrick(vec3 brickCacheCoord, vec3 voxelInBrick) {\n    vec3 brickCacheCoordNormalized = vec3(\n        (float(brickCacheCoord.x) * BRICK_SIZE + float(voxelInBrick.x)) / BRICK_CACHE_SIZE_X,\n        (float(brickCacheCoord.y) * BRICK_SIZE + float(voxelInBrick.y)) / BRICK_CACHE_SIZE_Y,\n        (float(brickCacheCoord.z) * BRICK_SIZE + float(voxelInBrick.z)) / BRICK_CACHE_SIZE_Z\n    );\n    return texture(brickCacheTex, brickCacheCoordNormalized).r;\n}\n\n/**\n * main renderloop\n*/\nvoid main(void) {\n\n    // ========================================\n    // INITIALIZATION\n    // ========================================\n    \n    // Initialize all render targets (multiple output textures)\n    gRequest = vec4(0,0,0,0);  // Brick loading requests\n    gUsage = vec4(0,0,0,0);    // Brick usage tracking\n    gColor = vec4(0.0, 0.0, 0.0, 0.0);  // Final color output\n\n    // out color sums up our accumulated value before writing it into the gColor buffer\n    vec4 outColor = vec4(0.0, 0.0, 0.0, 0.0);  // Accumulated color\n\n    // Generate random number for jittered sampling (reduces artifacts)\n    float rnd = random();\n\n    // Get the lowest available resolution level\n    int lowestDataRes = getLowestRes();\n\n    // ========================================\n    // RAY-VOLUME INTERSECTION\n    // ========================================\n    \n    // Normalize the view ray direction\n    vec3 ws_rayDir = normalize(rayDirUnnorm);\n    \n    // Calculate intersection with volume bounding box\n    // Returns (entry_time, exit_time) for the ray-box intersection\n    vec2 t_hit = intersect_hit(cameraCorrected, ws_rayDir);\n    if (t_hit.x >= t_hit.y) { discard; }  // Ray misses volume entirely\n    \n    t_hit.x = max(t_hit.x, 0.0); // Clamp entry to 0 (no negative distances)\n    float t = t_hit.x;\n    \n    // Calculate distance from camera for LOD selection\n    float distance = abs((cameraCorrected / boxSize).z + (ws_rayDir / boxSize).z * t );\n\n    // ========================================\n    // COORDINATE SPACE CONVERSION\n    // ========================================\n    \n    // Convert from world space to object space (normalized 0-1 coordinates)\n    float ws2os = length(ws_rayDir / boxSize);  // Scale factor for conversion\n    float t_hit_min_os = t_hit.x * ws2os;       // Entry point in object space\n    float t_hit_max_os = t_hit.y * ws2os;       // Exit point in object space\n    float t_os = t_hit_min_os;                  // Current position in object space\n\n    // Calculate effective LOD factor based on volume size.\n    // voxel edge is the max extent of the volume\n    float voxelEdge = float(max(voxelExtents.x, max(voxelExtents.y, voxelExtents.z)));\n\n    // calculate LOD factor based on the voxel edge\n    float lodFactorEffective = lodFactor * voxelEdge / 256.0;\n\n    // ========================================\n    // RESOLUTION AND SAMPLING SETUP\n    // ========================================\n    \n    // Determine target resolution based on distance (LOD)\n    int targetRes = getLOD(t, 0, 9, lodFactorEffective);\n    \n    // Set adaptive stepping resolution\n    int stepResAdaptive = renderRes;\n    int stepResEffective = clamp(stepResAdaptive, 0, lowestDataRes);\n\n    // Convert ray to object space coordinates\n    vec3 os_rayDir = normalize(ws_rayDir / boxSize);\n    vec3 os_rayOrigin = cameraCorrected / boxSize + vec3(0.5);\n    \n    // Calculate step size based on current resolution\n    float dt = voxelStepOS(stepResEffective, os_rayDir);\n\n    // ========================================\n    // SAMPLING POSITION INITIALIZATION\n    // ========================================\n    \n    // Convert to normalized sampling coordinates (0-1 range)\n    vec3 p = cameraCorrected + t_hit.x * ws_rayDir;\n    p = p / boxSize + vec3(0.5); // Transform to 0-1 range\n    \n    // Calculate step vector in normalized space\n    vec3 dp = (os_rayDir * dt);\n    \n    // Apply jittered sampling to reduce artifacts\n    p += dp * (rnd);\n    // Avoid boundary issues\n    p = clamp(p, 0.0 + 0.0000028, 1.0 - 0.0000028);\n\n    // ========================================\n    // RENDERING VARIABLES\n    // ========================================\n    \n    // Color accumulation for front-to-back compositing.\n    // color accumulation variables, are calculated per 'slice'\n    vec3 rgbCombo = vec3(0.0);\n    float total = 0.0;\n\n    // For alpha blending.\n    // alpha accumulation variable runs globally\n    float alphaMultiplicator = 1.0;\n\n    // Request tracking (for brick loading).\n    // if we have a request for a brick which not visible in lower\n    // resolutions, we can overwrite it once\n    bool overWrittenRequest = false;\n\n    // Current state tracking\n    vec3 currentTargetResPTCoord = vec3(0,0,0);\n    int currentLOD = targetRes;\n\n    // ========================================\n    // CHANNEL-SPECIFIC CONSTANTS\n    // ========================================\n    \n    // Pre-compute channel properties for efficiency.\n    // constants per color channel\n    vec3 [] c_color = vec3[7](getChannelColor(0), getChannelColor(1), getChannelColor(2), getChannelColor(3), getChannelColor(4), getChannelColor(5), getChannelColor(6));\n    float [] c_opacity = float[7](getChannelOpacity(0), getChannelOpacity(1), getChannelOpacity(2), getChannelOpacity(3), getChannelOpacity(4), getChannelOpacity(5), getChannelOpacity(6));\n    // resolution ranges (currently) per color channel\n    // TODO: figure out how to hook it up with frontend\n    int [] c_res_min = int[7](getRes(0).x, getRes(1).x, getRes(2).x, getRes(3).x, getRes(4).x, getRes(5).x, getRes(6).x);\n    int [] c_res_max = int[7](getRes(0).y, getRes(1).y, getRes(2).y, getRes(3).y, getRes(4).y, getRes(5).y, getRes(6).y);\n    vec3 [] res_color = vec3[10](\n        vec3(1.0, 0.0, 0.0), \n        vec3(0.0, 0.0, 1.0), \n        vec3(0.0, 1.0, 0.0), \n        vec3(1.0, 0.0, 1.0), \n        vec3(0.0, 1.0, 1.0),\n        vec3(1.0, 1.0, 0.0),\n        vec3(1.0, 0.5, 0.5), \n        vec3(0.5, 0.5, 1.0), \n        vec3(0.5, 1.0, 0.5), \n        vec3(0.5, 0.5, 0.5)\n    );\n\n    // ========================================\n    // PER-CHANNEL STATE ARRAYS\n    // ========================================\n    \n    // Current state for each channel.\n    // current state variables per color channel\n    \n    // current resolution\n    int []   c_res_current =             int[7](0,0,0,0,0,0,0);\n    // current value\n    float [] c_val_current =             float[7](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    // current brick cache coordinate\n    vec3 []  c_brickCacheCoord_current = vec3[7](vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n    // current voxel in current resolution\n    vec3 []  c_voxel_current =           vec3[7](vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n    // current pagetable coordinate\n    vec3 []  c_ptCoord_current =         vec3[7](vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n    // current render mode -- 0: empty (add 0), 1: constant (add current val), 2: voxel (query new voxel)\n    // upon change of PT we re-query anyways\n    int []   c_renderMode_current =      int[7](-1, -1, -1, -1, -1, -1, -1);\n    \n    // Adjacent brick caching for interpolation\n    // current pagetable coordinate of the adjacent bricks in X, Y, Z or diagonal direction\n    vec3 []  c_PT_X_adjacent =           vec3[7](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n    vec3 []  c_PT_Y_adjacent =           vec3[7](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n    vec3 []  c_PT_Z_adjacent =           vec3[7](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n    vec3 []  c_PT_XYZ_adjacent =         vec3[7](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n    // corresponding brick coordinates of the adjacent bricks in X, Y, Z or diagonal direction\n    vec4 []  c_brick_X_adjacent =        vec4[7](vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0));\n    vec4 []  c_brick_Y_adjacent =        vec4[7](vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0));\n    vec4 []  c_brick_Z_adjacent =        vec4[7](vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0));\n    vec4 []  c_brick_XYZ_adjacent =      vec4[7](vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0), vec4(-1.0));\n\n    // Min/max tracking for MIP/MinIP rendering.\n    // min and max values of the current color\n    // used for minimum/maximum intensity projection\n    float [] c_minVal = float[7](-1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0);\n    float [] c_maxVal = float[7](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n\n    // Per-resolution coordinate tracking\n    vec3 [] r_ptCoord = vec3[10](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n    vec3 [] r_voxel = vec3[10](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n    vec3 [] r_prevPTCoord = vec3[10](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n    vec3 [] r_prevVoxel = vec3[10](vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0), vec3(-1.0));\n\n    // resolution changed flag\n    bool resolutionChanged = false;\n    // number of repetitions (for debugging purposes)\n    int reps = 0;\n\n    // ========================================\n    // MAIN RAY-MARCHING LOOP\n    // ========================================\n    \n    // while we are 'in' the volume.\n    // Continue marching until we exit the volume or reach maximum opacity.\n    while (t_os < t_hit_max_os && t_os >= t_hit_min_os\n        && vec3_max(p) < 1.0 && vec3_min(p) >= 0.0\n    ) {\n\n        // Reset per-sample accumulation.\n        // initialize slice values\n        vec3 rgbCombo = vec3(0.0);\n        float total   = 0.0;\n\n        // Update target resolution based on current distance (with jitter).\n        // calculate target resolution based on distance and lod factor\n        targetRes = getLOD(t, 0, 9, lodFactorEffective * (0.999 + 0.002 * rnd));\n\n        // ========================================\n        // RESOLUTION CHANGE HANDLING\n        // ========================================\n        \n        // if target resolution changed, update the current resolution and stepsize\n        if (targetRes != currentLOD) {\n            currentLOD = targetRes;\n            stepResAdaptive++;\n            stepResEffective = clamp(stepResAdaptive, 0, lowestDataRes);\n            \n            // Adjust sampling position for new resolution\n            p -= dp * rnd;\n            dt = voxelStepOS(stepResEffective, os_rayDir);\n            dp = os_rayDir * dt;\n            p += dp * rnd;\n            resolutionChanged = true;\n\n            // Check bounds after resolution change\n            if (p.x < 0.0 || p.x >= 1.0 || p.y < 0.0 || p.y >= 1.0 || p.z < 0.0 || p.z >= 1.0) {\n                break;\n            }\n        } else {\n            resolutionChanged = false;\n        }\n\n        // ========================================\n        // UPDATE COORDINATES FOR ALL RESOLUTIONS\n        // ========================================\n        \n        // Calculate page table coordinates and voxel positions for all resolution levels\n        for (int r = 0; r < 10; r++) {\n            r_prevPTCoord[r] = r_ptCoord[r];\n            r_prevVoxel[r] = r_voxel[r];\n            r_ptCoord[r] = getBrickFromNormalized(p, r);\n            r_voxel[r] = getVoxelFromNormalized(p, r);\n        }\n\n        // ========================================\n        // RENDER MODE DEFINITIONS\n        // ========================================\n        // 0: empty brick (no data)\n        // 1: constant brick (uniform value)\n        // 2: voxel brick (variable data)\n\n        // initialize the per channel slice values\n        vec3 sliceColor = vec3(0.0);\n        float sliceAlpha = 0.0;\n\n        // ========================================\n        // MULTI-CHANNEL SAMPLING\n        // ========================================\n        \n        // Process each channel independently.\n        // iterate over up to 7 channels by color\n        for (int c = 0; c < 7; c++) {\n            // Skip channels with zero opacity.\n            // skip if opacity is 0 or if color is not mapped to a physical slot\n            if (c_opacity[c] <= 0.000001) {\n                continue;\n            } else if (channelMapping[c] == -1) {\n                continue;\n            }\n\n            // physical slot in pagetable\n            int slot = channelMapping[c];\n\n            // keep track of status\n            bool newBrick = false;\n            bool newVoxel = false;\n            // best possible resolution\n            int bestRes = clamp(targetRes, c_res_min[c], c_res_max[c]);\n\n            // Check if we need to load a new brick at a better resolution.\n            // check if any new better resolution could be available, if so, we need to re-query the brick\n            bool betterResChanged = false;\n            for (int r = bestRes; r <= c_res_current[c]; r++ ) {\n                if (r_ptCoord[r] != r_prevPTCoord[r]) {\n                    betterResChanged = true;\n                    break;\n                }\n            }\n\n            // Determine if we need to load new brick data.\n            // check if we need to re-query the brick / voxel or reuse past 'val'\n            if (r_ptCoord[bestRes] != r_prevPTCoord[bestRes]\n                || c_renderMode_current[c] == -1\n                || resolutionChanged == true\n                || betterResChanged\n                ) {\n                newBrick = true;\n                newVoxel = true;\n            } else if (c_renderMode_current[c] == 2) {\n                newVoxel = true;\n            } else if (c_renderMode_current[c] == 0) {\n                continue;  // Skip empty bricks\n            }\n\n            // ========================================\n            // BRICK LOADING AND CACHING\n            // ========================================\n            \n            // check if a new brick is available in the best possible resolution\n            if (newBrick) {\n                // Query page table for brick location and status\n                ivec4 brickCacheInfo = getBrickLocation(p, bestRes, slot, rnd, true, c);\n                // check information about the newly queried brick\n                // if the res is not at best res, possibly the same as previous brick\n                if (brickCacheInfo.w == -1 || brickCacheInfo.w == -2) {\n                    // Empty brick - no data available.\n                    // we can skip the rest of the loop\n                    c_val_current[c] = 0.0;\n                    c_renderMode_current[c] = 0;\n                    c_minVal[c] = 0.0;\n                    continue;\n                } else if (brickCacheInfo.w == -3) {\n                    // Solid brick - constant maximum value.\n                    // we set the value and do not need to query a voxel\n                    c_val_current[c] = 1.0;\n                    c_renderMode_current[c] = 1;\n                    c_maxVal[c] = 1.0;\n                    newVoxel = false;\n                } else if (brickCacheInfo.w == -4) {\n                    // Constant brick - uniform value.\n                    // static value -- we set the value and do not need to query a voxel\n                    float val = float(brickCacheInfo.x);\n                    c_val_current[c] = max(0.0, (val - getClim(c).x) / (getClim(c).y - getClim(c).x));\n                    c_renderMode_current[c] = 1;\n                    newVoxel = false;\n                } else if (brickCacheInfo.w >= 0) {\n                    // Voxel brick - variable data, load from cache.\n                    // new brick -- we set the coordinate and resolution and need to query a voxel\n                    c_res_current[c] = brickCacheInfo.w;\n                    c_ptCoord_current[c] = r_ptCoord[c_res_current[c]];\n                    c_brickCacheCoord_current[c] = vec3(brickCacheInfo.xyz);\n                    c_renderMode_current[c] = 2;\n                    newVoxel = true;\n                    \n                    // Track brick usage for cache management.\n                    // we set the usage of the brick based on the channel and the relative distance into the cube\n                    if (int(floor(rnd * float(maxChannels))) == c) {\n                        setUsage(brickCacheInfo.xyz, t_hit_min_os, t_hit_max_os, t_os, rnd);\n                    }\n                }\n            }\n            \n            // ========================================\n            // VOXEL SAMPLING WITH INTERPOLATION\n            // ========================================\n            \n            // we need to query a new voxel e.g. sample the brick cache\n            if (newVoxel) {\n                c_voxel_current[c] = r_voxel[c_res_current[c]];\n\n                // we clamp the coordinate to be inside the brick and sample the volume\n                reps++;\n                \n                // Calculate position within the brick (0-31 range)\n                vec3 voxelInBrick = mod(c_voxel_current[c], 32.0);\n                vec3 clampedVoxelInBrick = clamp(voxelInBrick, 0.5, 31.5);\n                // Sample the brick cache texture\n                float val = sampleBrick(c_brickCacheCoord_current[c].xyz, clampedVoxelInBrick);\n\n                // ========================================\n                // HIGH-QUALITY INTERPOLATION (renderRes == 0)\n                // ========================================\n                \n                // interblock interpolation\n                if (renderRes == 0) {\n                    // calculate what axis we need to interpolate\n                    \n                    // Check if we're near brick boundaries (need interpolation)\n                    bvec3 clampedMin = lessThan(voxelInBrick, clampedVoxelInBrick);\n                    bvec3 clampedMax = greaterThan(voxelInBrick, clampedVoxelInBrick);\n                    bvec3 clamped = bvec3(clampedMin.x || clampedMax.x, clampedMin.y || clampedMax.y, clampedMin.z || clampedMax.z);\n                    vec3 diff = voxelInBrick - clampedVoxelInBrick;\n                    \n                    if (any(clampedMin) || any(clampedMax)) {                       \n                        int boundaryAxes = int(clamped.x) + int(clamped.y) + int(clamped.z);\n                        float f = 0.0;\n                                                \n                        if (boundaryAxes == 1) {\n                            // Linear interpolation across one boundary\n                            vec3 otherGlobalVoxelPos = vec3(0,0,0);\n                            vec3 otherP = vec3(0,0,0);\n                            float otherVoxelVal = 0.0;\n\n                            // Determine which axis we're interpolating across\n                            if (clampedMin.x) {\n                                otherGlobalVoxelPos = c_voxel_current[c] - vec3(1.0, 0.0, 0.0);\n                                otherP = getNormalizedFromVoxel(otherGlobalVoxelPos, c_res_current[c]);\n                                f = abs(diff.x);\n                            } else if (clampedMax.x) {\n                                otherGlobalVoxelPos = c_voxel_current[c] + vec3(1.0, 0.0, 0.0);\n                                otherP = getNormalizedFromVoxel(otherGlobalVoxelPos, c_res_current[c]);\n                                f = abs(diff.x);\n                            } else if (clampedMin.y) {\n                                otherGlobalVoxelPos = c_voxel_current[c] - vec3(0.0, 1.0, 0.0);\n                                otherP = getNormalizedFromVoxel(otherGlobalVoxelPos, c_res_current[c]);\n                                f = abs(diff.y);\n                            } else if (clampedMax.y) {\n                                otherGlobalVoxelPos = c_voxel_current[c] + vec3(0.0, 1.0, 0.0);\n                                otherP = getNormalizedFromVoxel(otherGlobalVoxelPos, c_res_current[c]);\n                                f = abs(diff.y);\n                            } else if (clampedMin.z) {\n                                otherGlobalVoxelPos = c_voxel_current[c] - vec3(0.0, 0.0, 1.0);\n                                otherP = getNormalizedFromVoxel(otherGlobalVoxelPos, c_res_current[c]);\n                                f = abs(diff.z);\n                            } else if (clampedMax.z) {\n                                otherGlobalVoxelPos = c_voxel_current[c] + vec3(0.0, 0.0, 1.0); \n                                otherP = getNormalizedFromVoxel(otherGlobalVoxelPos, c_res_current[c]);\n                                f = abs(diff.z);\n                            }\n\n                            // Sample the neighboring voxel\n                            vec3 otherPTcoord = getBrickFromNormalized(otherP, c_res_current[c]);\n                            otherPTcoord = getBrickFromVoxel(otherGlobalVoxelPos, c_res_current[c]);\n                            vec3 otherVoxelInBrick = mod(otherGlobalVoxelPos, 32.0);\n                            otherVoxelInBrick -= diff;\n\n                            // Check if neighbor is outside volume bounds\n                            if (otherP.x < 0.0 || otherP.x >= 1.0 || otherP.y < 0.0 || otherP.y >= 1.0 || otherP.z < 0.0 || otherP.z >= 1.0) {\n                                otherVoxelVal = val;\n                            } else if (otherPTcoord == c_PT_XYZ_adjacent[c].xyz && c_brick_XYZ_adjacent[c].w >= 0.0) {\n                                // Use cached adjacent brick\n                                otherVoxelVal = sampleBrick(c_brick_XYZ_adjacent[c].xyz, otherVoxelInBrick);\n                            } else {\n                                // Load new adjacent brick\n                                ivec4 otherBrickCacheInfo = ivec4(-1);\n                                if (otherPTcoord == c_PT_XYZ_adjacent[c].xyz) {\n                                    otherBrickCacheInfo = ivec4(c_brick_XYZ_adjacent[c]);\n                                } else {\n                                    otherBrickCacheInfo = getBrickLocation(otherP, c_res_current[c], slot, rnd, false, c); \n                                }\n                                if (otherBrickCacheInfo.w == -1 || otherBrickCacheInfo.w == -2) {\n                                    otherVoxelVal = val;\n                                } else if (otherBrickCacheInfo.w == -3) {\n                                    otherVoxelVal = 1.0;\n                                } else if (otherBrickCacheInfo.w == -4) {\n                                    otherVoxelVal = float(otherBrickCacheInfo.x);\n                                } else {\n                                    // TODO: we do not recalculate the voxelInBrick based on the resolution\n                                    otherVoxelVal = sampleBrick(vec3(otherBrickCacheInfo.xyz), otherVoxelInBrick);\n                                }\n                                c_PT_XYZ_adjacent[c] = getBrickFromVoxel(otherGlobalVoxelPos, c_res_current[c]); \n                                c_brick_XYZ_adjacent[c] = vec4(otherBrickCacheInfo);\n                            }\n                            \n                            // Perform linear interpolation\n                            float originalVal = val;\n                            val = lerp(originalVal, otherVoxelVal, f);                            \n                        } else if (boundaryAxes == 2) {\n                            // Bilinear interpolation across two boundaries\n                            vec3 offA = vec3(0.0);\n                            vec3 offB = vec3(0.0);\n                            vec2 f = vec2(0.0);\n\n                            // Determine which two axes we're interpolating across\n                            if (clamped.x && clamped.y) {\n                                offA.x = clampedMin.x ? -1.0 : 1.0;\n                                offB.y = clampedMin.y ? -1.0 : 1.0;\n                                f = vec2(abs(diff.x), abs(diff.y));\n                            } else if (clamped.x && clamped.z) {\n                                offA.x = clampedMin.x ? -1.0 : 1.0;\n                                offB.z = clampedMin.z ? -1.0 : 1.0;\n                                f = vec2(abs(diff.x), abs(diff.z));\n                            } else if (clamped.y && clamped.z) {\n                                offA.y = clampedMin.y ? -1.0 : 1.0;\n                                offB.z = clampedMin.z ? -1.0 : 1.0;\n                                f = vec2(abs(diff.y), abs(diff.z));\n                            }\n\n                            // Macro for sampling at offset positions\n                            #define SAMPLE_AT_OFFSET(OFF, DEST)                                                                     {                                                                                                           vec3 otherGlobalVoxelPos = c_voxel_current[c] + (OFF);                                                  vec3 otherP              = getNormalizedFromVoxel(                                                                                   otherGlobalVoxelPos, c_res_current[c]);                                                                                                                                            if ( any(lessThan(otherP, vec3(0.0)))                                                                     || any(greaterThanEqual(otherP, vec3(1.0))) ) {                                                           DEST = val;                                                                                         } else {                                                                                                    vec3 otherPTcoord      = getBrickFromNormalized(                                                                                    otherP, c_res_current[c]);                                                 vec3 otherVoxelInBrick = mod(otherGlobalVoxelPos, 32.0) - diff;                                                                                                                                                 bool matched = false;                                                                                   if (otherPTcoord == c_PT_X_adjacent[c].xyz && c_brick_X_adjacent[c].w >= 0.0)   {                                                                 DEST = sampleBrick(c_brick_X_adjacent[c].xyz, otherVoxelInBrick);                                           matched = true;                                                                                     } else if (otherPTcoord == c_PT_Y_adjacent[c].xyz && c_brick_Y_adjacent[c].w >= 0.0) {                                                            DEST = sampleBrick(c_brick_Y_adjacent[c].xyz, otherVoxelInBrick);                                           matched = true;                                                                                     } else if (otherPTcoord == c_PT_Z_adjacent[c].xyz && c_brick_Z_adjacent[c].w >= 0.0) {                                                            DEST = sampleBrick(c_brick_Z_adjacent[c].xyz, otherVoxelInBrick);                                           matched = true;                                                                                     } else if (otherPTcoord == c_PT_XYZ_adjacent[c].xyz && c_brick_XYZ_adjacent[c].w >= 0.0) {                                                          DEST = sampleBrick(c_brick_XYZ_adjacent[c].xyz, otherVoxelInBrick);                                         matched = true;                                                                                     }                                                 ivec4 info = ivec4(-1);                                     if (otherPTcoord == c_PT_X_adjacent[c].xyz) { info = ivec4(c_brick_X_adjacent[c]); }                                     else if (otherPTcoord == c_PT_Y_adjacent[c].xyz) { info = ivec4(c_brick_Y_adjacent[c]); }                                     else if (otherPTcoord == c_PT_Z_adjacent[c].xyz) { info = ivec4(c_brick_Z_adjacent[c]); }                                     else if (otherPTcoord == c_PT_XYZ_adjacent[c].xyz) { info = ivec4(c_brick_XYZ_adjacent[c]); }                                     else { info = getBrickLocation(otherP, c_res_current[c], slot, rnd, false, c); }                                                                         if (!matched) {                                                                                             if (info.w == -1 || info.w == -2) {                                                                        DEST = val;                                                                                         } else if (info.w == -3) {                                                                                  DEST = 1.0;                                                                                         } else if (info.w == -4) {                                                                                  DEST = float(info.x);                                                                               } else {                                                                                                    DEST = sampleBrick(vec3(info.xyz), otherVoxelInBrick);                                              }                                                                                                       if (abs((OFF).x) > 0.5 && abs((OFF).y) < 0.5 && abs((OFF).z) < 0.5) {                                                         c_PT_X_adjacent[c]  = otherPTcoord;                                                                                 c_brick_X_adjacent[c] = vec4(info);                                                                         } else if (abs((OFF).y) > 0.5 && abs((OFF).x) < 0.5 && abs((OFF).z) < 0.5) {                                                  c_PT_Y_adjacent[c]  = otherPTcoord;                                                                                 c_brick_Y_adjacent[c] = vec4(info);                                                                         } else if (abs((OFF).z) > 0.5 && abs((OFF).x) < 0.5 && abs((OFF).y) < 0.5) {                                                  c_PT_Z_adjacent[c]  = otherPTcoord;                                                                                 c_brick_Z_adjacent[c] = vec4(info);                                                                         } else {                                                                                                              c_PT_XYZ_adjacent[c]     = otherPTcoord;                                                                    c_brick_XYZ_adjacent[c]  = vec4(info);                                                              }                                                                                                           }                                                                                                   }                                                                                                   }\n                            \n                            // Sample the four corners for bilinear interpolation\n                            float v00 = val;\n                            float v10; float v01; float v11;\n                            SAMPLE_AT_OFFSET(offA, v10);\n                            SAMPLE_AT_OFFSET(offB, v01);\n                            SAMPLE_AT_OFFSET(offA + offB, v11);\n\n                            val = bilerp(v00, v10, v01, v11, f);\n\n                            #undef SAMPLE_AT_OFFSET\n\n                        } else if (boundaryAxes == 3) {\n                            // Trilinear interpolation across all three boundaries\n                            \n                            vec3 offA = vec3(0.0);\n                            vec3 offB = vec3(0.0);\n                            vec3 offC = vec3(0.0);\n                            vec3 f = vec3(0.0);\n\n                            offA.x = clampedMin.x ? -1.0 : 1.0;\n                            offB.y = clampedMin.y ? -1.0 : 1.0;\n                            offC.z = clampedMin.z ? -1.0 : 1.0;\n\n                            f = vec3(abs(diff.x), abs(diff.y), abs(diff.z));\n\n                            // Macro for sampling at offset positions\n                            #define SAMPLE_AT_OFFSET(OFF, DEST)                                 {                                     vec3 otherGlobalVoxelPos = c_voxel_current[c] + (OFF);                                     vec3 otherP = getNormalizedFromVoxel(otherGlobalVoxelPos, c_res_current[c]);                                     if (any(lessThan(otherP, vec3(0.0))) || any(greaterThanEqual(otherP, vec3(1.0)))) {                                         DEST = val;                                     } else {                                         vec3 otherPTcoord      = getBrickFromNormalized(otherP, c_res_current[c]);                                                     vec3 otherVoxelInBrick = mod(otherGlobalVoxelPos, 32.0) - diff;                                             if (otherPTcoord == c_PT_X_adjacent[c] && c_brick_X_adjacent[c].w >= 0.0)   {                                                                     DEST = sampleBrick(c_brick_X_adjacent[c].xyz, otherVoxelInBrick);                                           } else if (otherPTcoord == c_PT_Y_adjacent[c].xyz && c_brick_Y_adjacent[c].w >= 0.0) {                                                                DEST = sampleBrick(c_brick_Y_adjacent[c].xyz, otherVoxelInBrick);                                           } else if (otherPTcoord == c_PT_Z_adjacent[c].xyz && c_brick_Z_adjacent[c].w >= 0.0) {                                                                DEST = sampleBrick(c_brick_Z_adjacent[c].xyz, otherVoxelInBrick);                                           } else if (otherPTcoord == c_PT_XYZ_adjacent[c].xyz && c_brick_XYZ_adjacent[c].w >= 0.0) {                                                              DEST = sampleBrick(c_brick_XYZ_adjacent[c].xyz, otherVoxelInBrick);                                         } else {                                                                                                           ivec4 otherBrickCacheInfo = getBrickLocation(otherP, c_res_current[c], slot, rnd, false, c);                                             vec3 otherVoxelInBrick = mod(otherGlobalVoxelPos, 32.0) - diff;                                             if (otherBrickCacheInfo.w == -1 || otherBrickCacheInfo.w == -2) {                                                 DEST = val;                                             } else if (otherBrickCacheInfo.w == -3) {                                                 DEST = 1.0;                                             } else if (otherBrickCacheInfo.w == -4) {                                                 DEST = float(otherBrickCacheInfo.x);                                             } else {                                                 DEST = sampleBrick(vec3(otherBrickCacheInfo.xyz), otherVoxelInBrick);                                             }                                         }                                     }                                 }\n                            \n                            // Sample all eight corners for trilinear interpolation\n                            float v000 = val;\n                            float v100; float v010; float v001; float v110; float v101; float v011; float v111;\n                            SAMPLE_AT_OFFSET(offA, v100);\n                            SAMPLE_AT_OFFSET(offB, v010);\n                            SAMPLE_AT_OFFSET(offC, v001);\n                            SAMPLE_AT_OFFSET(offA + offB, v110);\n                            SAMPLE_AT_OFFSET(offA + offC, v101);\n                            SAMPLE_AT_OFFSET(offB + offC, v011);\n                            SAMPLE_AT_OFFSET(offA + offB + offC, v111);\n\n                            val = trilerp(v000, v100, v010, v001, v110, v101, v011, v111, f);\n\n                            #undef SAMPLE_AT_OFFSET\n                            \n                        }\n\n                    } else {\n                        // No boundary interpolation needed - clear adjacent brick cache.\n                        // no adjacent bricks -> reset the adjacent trackers\n                        c_PT_X_adjacent[c] = c_PT_Y_adjacent[c] = c_PT_Z_adjacent[c] = c_PT_XYZ_adjacent[c] = vec3(-1.0);\n                        c_brick_X_adjacent[c] = c_brick_Y_adjacent[c] = c_brick_Z_adjacent[c] = c_brick_XYZ_adjacent[c] = vec4(-1.0);\n                    }\n                }\n\n                // ========================================\n                // VALUE NORMALIZATION AND TRACKING\n                // ========================================\n                \n                // Normalize value to 0-1 range using channel-specific contrast limits.\n                // we normalize the (accumulated) value to the range of the color channel\n                c_val_current[c] = max(0.0, (val - getClim(c).x) / (getClim(c).y - getClim(c).x));\n\n                // Track min/max values for MIP/MinIP rendering.\n                // update the min and max values for the min/max projection\n                if (c_minVal[c] == -1.0) {\n                    c_minVal[c] = c_val_current[c];\n                } else {\n                    c_minVal[c] = min(c_minVal[c], c_val_current[c]);\n                }\n                c_maxVal[c] = max(c_maxVal[c], c_val_current[c]);\n\n            }\n\n            // ========================================\n            // BRICK REQUEST GENERATION\n            // ========================================\n            \n            // Request higher resolution bricks if we're using lower resolution than optimal.\n            // potentially overwrite brick request\n            if (!overWrittenRequest \n                && c_res_current[c] != bestRes\n                && c_val_current[c] > 0.0\n                && c_renderMode_current[c] == 2\n                && int(floor(rnd * float(maxChannels))) == c) {\n                setBrickRequest(p, bestRes, slot, rnd);\n                overWrittenRequest = true;\n            }\n\n            // ========================================\n            // CHANNEL COMPOSITING\n            // ========================================\n            \n            // Accumulate this channel's contribution.\n            // sum up the values onto the slice values\n            total += c_val_current[c];\n            if (u_renderstyle == 3) {\n                rgbCombo += c_val_current[c] * res_color[targetRes];\n            } else if (u_renderstyle == 4) {\n                rgbCombo += c_val_current[c] * res_color[c_res_current[c]];\n            } else {\n                rgbCombo += c_val_current[c] * c_color[c];\n            }\n\n        }\n\n        // ========================================\n        // FRONT-TO-BACK COMPOSITING\n        // ========================================\n        \n        // Clamp total intensity and calculate alpha.\n        // add the calculated slice to the total color\n        total = clamp(total, 0.0, 1.0);\n        sliceAlpha = total * opacity * dt * 32.0;  // Scale by step size and brick size\n        sliceColor = rgbCombo;\n\n        // Front-to-back alpha blending\n        outColor.rgb += sliceAlpha * alphaMultiplicator * sliceColor;\n        outColor.a += sliceAlpha * alphaMultiplicator;\n        alphaMultiplicator *= (1.0 - sliceAlpha);\n\n        // Early termination for opaque regions (standard rendering only).\n        // check if we can exit early\n        if (outColor.a > 0.99 && u_renderstyle == 0) { break; }\n\n        // ========================================\n        // ADVANCE RAY POSITION\n        // ========================================\n        \n        // Move to next sample position\n        t += dt;\n        p += dp;\n        t_os += dt;\n    }\n\n    // ========================================\n    // RENDERING STYLE POST-PROCESSING\n    // ========================================\n    \n    if (u_renderstyle == 1) { \n        // Minimum Intensity Projection (MinIP)\n        // Shows the minimum value encountered along each ray\n        outColor = vec4(0.0);\n        for (int c = 0; c < 7; c++) {\n            if (c_color[c] != vec3(0.0, 0.0, 0.0)) {\n                outColor.rgb += c_minVal[c] * c_color[c];\n                outColor.a += c_minVal[c];\n            }\n        }\n    } else if (u_renderstyle == 0) { \n        // Maximum Intensity Projection (MIP)\n        // Shows the maximum value encountered along each ray\n        outColor = vec4(0.0);\n        for (int c = 0; c < 7; c++) {\n            if (c_color[c] != vec3(0.0, 0.0, 0.0)) {\n                outColor.rgb += c_maxVal[c] * c_color[c];\n            }\n        }\n        outColor.a = 1.0;\n    }\n\n    // ========================================\n    // FINAL OUTPUT\n    // ========================================\n    \n    // Convert from linear to sRGB color space and set all render targets\n    gColor = vec4(linear_to_srgb(outColor.r), \n                  linear_to_srgb(outColor.g), \n                  linear_to_srgb(outColor.b), \n                  outColor.a);\n    \n}\n"
};
function Y(e) {
	c(t.DEBUG) && console.warn(`%cRM: ${e}`, "background: orange; color: white; padding: 2px; border-radius: 3px;");
}
function X(e, t) {
	return e / t[1];
}
var ie = class {
	constructor() {
		Y("Initializing VolumeRenderManager"), this.uniforms = null, this.shader = null, this.meshScale = [
			1,
			1,
			1
		], this.geometrySize = [
			1,
			1,
			1
		], this.boxSize = [
			1,
			1,
			1
		], this.zarrInit = !1, this.channelsVisible = [], this.channelTargetC = [], this.zarrStoreNumResolutions = null, this.channelMaxResolutionIndex = [], this.colors = [], this.contrastLimits = [], this.layerTransparency = 1, this.xSlice = new l(-1, 1e5), this.ySlice = new l(-1, 1e5), this.zSlice = new l(-1, 1e5), this.originalScale = [
			1,
			1,
			1
		], this.physicalDimensions = [
			1,
			1,
			1
		], this.maxResolution = [
			1,
			1,
			1
		], this.maxRange = 255, this.maxRangeSet = !1, this.initializeShader();
	}
	initializeShader() {
		Y("Initializing shader"), this.shader = J, this.uniforms = y.clone(this.shader.uniforms);
	}
	extractRenderingSettingsFromProps(e) {
		let { images: t = {}, imageLayerScopes: r = [], imageLayerCoordination: i = [{}], imageChannelScopesByLayer: a = {}, imageChannelCoordination: o = [{}], spatialRenderingMode: s } = e, c = r[0];
		if (!c) return Y("Extracting rendering settings from props - no layer scope"), { valid: !1 };
		let u = a[c], d = i[0][c], f = o[0][c], p = t[c]?.image?.instance?.getData();
		if (!p) return Y("Extracting rendering settings from props - no image data"), { valid: !1 };
		if (!f[u?.[0]][n.SPATIAL_CHANNEL_WINDOW]) return Y("Extracting rendering settings from props - no channel window set"), { valid: !1 };
		let m = t[c].image.instance, h = s === "3D", g = d[n.PHOTOMETRIC_INTERPRETATION] === "RGB", _ = d[n.SPATIAL_LAYER_VISIBLE], v = d[n.SPATIAL_LAYER_OPACITY], y = g ? [
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
		] : u.map((e) => f[e][n.SPATIAL_CHANNEL_COLOR]), b = g ? [
			[0, 255],
			[0, 255],
			[0, 255]
		] : u.map((e) => f[e][n.SPATIAL_CHANNEL_WINDOW] || [0, 255]);
		this.maxRangeSet ||= (this.maxRange = Math.max(...b.map((e) => e[1])), !0);
		let ee = g ? [
			_ && !0,
			_ && !0,
			_ && !0
		] : u.map((e) => _ && f[e][n.SPATIAL_CHANNEL_VISIBLE]), x = g ? [
			_ && !0,
			_ && !0,
			_ && !0
		] : u.map((e) => _ && m.getChannelIndex(f[e][n.SPATIAL_TARGET_C])), S = g ? [
			_ && null,
			_ && null,
			_ && null
		] : u.map((e) => f[e][n.SPATIAL_MAX_RESOLUTION]), C = d[n.SPATIAL_SLICE_X], w = d[n.SPATIAL_SLICE_Y], T = d[n.SPATIAL_SLICE_Z], E = d[n.SPATIAL_LOD_FACTOR] ?? 1;
		C = C === null ? new l(-1, 1e5) : C, w = w === null ? new l(-1, 1e5) : w, T = T === null ? new l(-1, 1e5) : T;
		let D = t[c].image.loaders[0].channels;
		return Y("Extracting rendering settings from props - success"), {
			valid: !0,
			channelsVisible: ee,
			allChannels: D,
			channelTargetC: x,
			channelMaxResolutionIndex: S,
			data: p,
			colors: y,
			contrastLimits: b,
			is3dMode: h,
			layerTransparency: v,
			xSlice: C,
			ySlice: w,
			zSlice: T,
			lodFactor: E
		};
	}
	updateFromProps(e) {
		let t = this.extractRenderingSettingsFromProps(e);
		return t.valid ? (this.channelsVisible = t.channelsVisible, this.channelTargetC = t.channelTargetC, this.channelMaxResolutionIndex = t.channelMaxResolutionIndex, this.colors = t.colors, this.contrastLimits = t.contrastLimits, this.renderingMode = t.renderingMode, this.layerTransparency = t.layerTransparency, this.xSlice = t.xSlice, this.ySlice = t.ySlice, this.zSlice = t.zSlice, this.uniforms.lodFactor.value = t.lodFactor, Y(`lodFactor ${t.lodFactor}`), this.shader.uniforms.lodFactor.value = t.lodFactor, Y("Updating from props - success"), !0) : (Y("Updating from props - invalid settings"), !1);
	}
	updateRendering({ zarrStoreShapes: t, originalScaleXYZ: n, physicalDimensionsXYZ: r, maxResolutionXYZ: i, boxDimensionsXYZ: a, normalizedScaleXYZ: o, bcTHREE: s, ptTHREE: c }) {
		if (Y("Updating rendering"), this.channelTargetC.findIndex((e, t) => this.channelsVisible[t]), !Array.isArray(t) || t.length === 0) return null;
		let l = t[0], u = {
			xLength: l[4] || 1,
			yLength: l[3] || 1,
			zLength: l[2] || 1
		}, d = [], f = [], p = [];
		if (this.channelTargetC.forEach((t, n) => {
			this.channelsVisible[n];
			{
				let t = [0, this.maxRange ? this.maxRange : 255];
				f.push([
					this.colors[n][0] / 255,
					this.colors[n][1] / 255,
					this.colors[n][2] / 255,
					+!!this.channelsVisible[n]
				]), e.debug("colorsSave", f), this.contrastLimits[n][0] === 0 && this.contrastLimits[n][1] === 255 ? p.push([X(t[0], t), X(t[1], t)]) : p.push([X(this.contrastLimits[n][0], t), X(this.contrastLimits[n][1], t)]);
			}
		}), !this.zarrInit) {
			this.originalScale = n, this.physicalDimensions = r, this.maxResolution = i;
			let t = a;
			this.normalizedScale = o, this.meshScale = [
				this.originalScale[0] / this.originalScale[0],
				this.originalScale[1] / this.originalScale[0],
				this.originalScale[2] / this.originalScale[0]
			], this.geometrySize = t, this.boxSize = t, e.debug("this.boxSize", this.boxSize), e.debug("this.geometrySize", this.geometrySize), e.debug("this.meshScale", this.meshScale), e.debug("this.originalScale", this.originalScale), e.debug("this.physicalDimensions", this.physicalDimensions), e.debug("this.maxResolution", this.maxResolution), e.debug("scaledResolution", t), this.zarrInit = !0;
		}
		return this.updateUniforms(d, u, this.renderingMode, p, f, this.layerTransparency, this.xSlice, this.ySlice, this.zSlice, s, c), {
			uniforms: this.uniforms,
			shader: this.shader,
			meshScale: this.meshScale,
			geometrySize: this.geometrySize,
			boxSize: this.boxSize
		};
	}
	updateUniforms(e, t, n, r, i, a, o, s, c, l, u) {
		Y("Updating uniforms"), this.uniforms.boxSize.value.set(this.boxSize[0], this.boxSize[1], this.boxSize[2]), this.uniforms.brickCacheTex.value = l, this.uniforms.pageTableTex.value = u, this.uniforms.near.value = .1, this.uniforms.far.value = 3e3, this.uniforms.opacity.value = a, this.uniforms.volumeCount.value = e.length, this.uniforms.u_size.value.set(t.xLength, t.yLength, t.zLength), this.uniforms.u_window_size.value.set(0, 0), this.uniforms.u_vol_scale.value.set(1 / t.xLength, 1 / t.yLength, 1 / t.zLength * 2), this.uniforms.clim0.value.set(r.length > 0 ? r[0][0] : null, r.length > 0 ? r[0][1] : null), this.uniforms.clim1.value.set(r.length > 1 ? r[1][0] : null, r.length > 1 ? r[1][1] : null), this.uniforms.clim2.value.set(r.length > 2 ? r[2][0] : null, r.length > 2 ? r[2][1] : null), this.uniforms.clim3.value.set(r.length > 3 ? r[3][0] : null, r.length > 3 ? r[3][1] : null), this.uniforms.clim4.value.set(r.length > 4 ? r[4][0] : null, r.length > 4 ? r[4][1] : null), this.uniforms.clim5.value.set(r.length > 5 ? r[5][0] : null, r.length > 5 ? r[5][1] : null), this.uniforms.clim6.value.set(r.length > 6 ? r[6][0] : null, r.length > 6 ? r[6][1] : null), this.uniforms.xClip.value.set(o[0] * (1 / this.maxResolution[0]) * this.boxSize[0], o[1] * (1 / this.maxResolution[0]) * this.boxSize[0]), this.uniforms.yClip.value.set(s[0] * (1 / this.maxResolution[1]) * this.boxSize[1], s[1] * (1 / this.maxResolution[1]) * this.boxSize[1]), this.uniforms.zClip.value.set(c[0] * (1 / this.maxResolution[2]) * this.boxSize[2], c[1] * (1 / this.maxResolution[2]) * this.boxSize[2]), this.uniforms.color0.value.set(i.length > 0 ? i[0][0] : null, i.length > 0 ? i[0][1] : null, i.length > 0 ? i[0][2] : null, i.length > 0 ? i[0][3] : null), this.uniforms.color1.value.set(i.length > 1 ? i[1][0] : null, i.length > 1 ? i[1][1] : null, i.length > 1 ? i[1][2] : null, i.length > 1 ? i[1][3] : null), this.uniforms.color2.value.set(i.length > 2 ? i[2][0] : null, i.length > 2 ? i[2][1] : null, i.length > 2 ? i[2][2] : null, i.length > 2 ? i[2][3] : null), this.uniforms.color3.value.set(i.length > 3 ? i[3][0] : null, i.length > 3 ? i[3][1] : null, i.length > 3 ? i[3][2] : null, i.length > 3 ? i[3][3] : null), this.uniforms.color4.value.set(i.length > 4 ? i[4][0] : null, i.length > 4 ? i[4][1] : null, i.length > 4 ? i[4][2] : null, i.length > 4 ? i[4][3] : null), this.uniforms.color5.value.set(i.length > 5 ? i[5][0] : null, i.length > 5 ? i[5][1] : null, i.length > 5 ? i[5][2] : null, i.length > 5 ? i[5][3] : null), this.uniforms.color6.value.set(i.length > 6 ? i[6][0] : null, i.length > 6 ? i[6][1] : null, i.length > 6 ? i[6][2] : null, i.length > 6 ? i[6][3] : null);
		for (let e = 0; e < 7; e++) typeof this.channelMaxResolutionIndex[e] == "number" && this.uniforms[`res${e}`].value.set(Math.max(1, this.channelMaxResolutionIndex[e]), this.zarrStoreNumResolutions - 1);
	}
	setChannelMapping(t) {
		Y("setting channel mapping"), e.debug("channelMapping", t), this.uniforms.channelMapping.value = t;
	}
	setZarrUniforms(t, n) {
		Y("setting zarr uniforms"), e.debug("zarrStore", t), e.debug("PT", n);
		for (let r = 0; r <= 9; r++) n.anchors && n.anchors[r] ? this.uniforms[`anchor${r}`].value.set(n.anchors[r][0] || 0, n.anchors[r][1] || 0, n.anchors[r][2] || 0) : (e.debug("anchor", r, "does not exist"), this.uniforms[`anchor${r}`].value.set(0, 0, 0)), t.scales && t.scales[r] ? this.uniforms[`scale${r}`].value.set(t.scales[r][0] || 1, t.scales[r][1] || 1, t.scales[r][2] || 1) : e.debug("scale", r, "does not exist");
		e.debug("zarrStore.brickLayout", t.brickLayout), this.zarrStoreNumResolutions = t.brickLayout.length;
		for (let e = 0; e < 7; e++) this.uniforms[`res${e}`].value.set(1, t.brickLayout.length - 1);
		this.uniforms.resGlobal.value.set(1, t.brickLayout.length - 1), this.uniforms.voxelExtents.value.set(t.shapes[0][4], t.shapes[0][3], t.shapes[0][2]), this.uniforms.maxChannels.value = Math.min(t.channelCount, 7), e.debug("this.channelsVisible", this.channelsVisible), e.debug("zarrStore.shapes[0]", t.shapes[0]), e.debug("PT", n), e.debug("uniforms", this.uniforms);
	}
}, ae = "//\nvarying vec2 vUv;\nvoid main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n", oe = "//\n// Input texture to blur\nuniform sampler2D tDiffuse;\n// Resolution of the texture (width, height)\nuniform vec2 resolution;\n// Blur strength: 1=no blur, 2-3=3x3 kernel, 4-5=5x5 kernel, 6+=7x7 kernel\nuniform int gaussian;\n// Texture coordinates for current pixel\nvarying vec2 vUv;\n\n/**\n * No blur - returns the original pixel color\n */\nvec4 noGaussian() {\n    vec4 color = texture2D(tDiffuse, vUv);\n    return color;\n}\n\n/**\n * Applies 3x3 Gaussian blur kernel\n * Samples 9 pixels in a 3x3 grid around the current pixel\n * Weights are based on 2D Gaussian distribution\n */\nvec4 gaussian3(vec2 texel) {\n    vec4 color = vec4(0.0);\n\n    // Top row: weights [0.0625, 0.125, 0.0625]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0, -1.0)) * 0.0625;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0, -1.0)) * 0.125;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0, -1.0)) * 0.0625;\n\n    // Middle row: weights [0.125, 0.25, 0.125] (center pixel gets highest weight)\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  0.0)) * 0.125;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  0.0)) * 0.25;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  0.0)) * 0.125;\n\n    // Bottom row: weights [0.0625, 0.125, 0.0625]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  1.0)) * 0.0625;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  1.0)) * 0.125;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  1.0)) * 0.0625;\n\n    return color;\n}\n\n/**\n * Applies 5x5 Gaussian blur kernel\n * Samples 25 pixels in a 5x5 grid around the current pixel\n * Weights sum to 1.0 (273/273) for proper normalization\n */\nvec4 gaussian5(vec2 texel) {\n    vec4 color = vec4(0.0);\n\n    // Row 1: weights [1/273, 4/273, 7/273, 4/273, 1/273]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0, -2.0)) * 1.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0, -2.0)) * 4.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0, -2.0)) * 7.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0, -2.0)) * 4.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0, -2.0)) * 1.0/273.0;\n    \n    // Row 2: weights [4/273, 16/273, 26/273, 16/273, 4/273]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0, -1.0)) * 4.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0, -1.0)) * 16.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0, -1.0)) * 26.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0, -1.0)) * 16.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0, -1.0)) * 4.0/273.0;\n\n    // Row 3 (center): weights [7/273, 26/273, 41/273, 26/273, 7/273]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0,  0.0)) * 7.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  0.0)) * 26.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  0.0)) * 41.0/273.0; // Center pixel\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  0.0)) * 26.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0,  0.0)) * 7.0/273.0;\n    \n    // Row 4: weights [4/273, 16/273, 26/273, 16/273, 4/273]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0,  1.0)) * 4.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  1.0)) * 16.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  1.0)) * 26.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  1.0)) * 16.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0,  1.0)) * 4.0/273.0;\n    \n    // Row 5: weights [1/273, 4/273, 7/273, 4/273, 1/273]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0,  2.0)) * 1.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  2.0)) * 4.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  2.0)) * 7.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  2.0)) * 4.0/273.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0,  2.0)) * 1.0/273.0;\n\n    return color;\n}\n\n/**\n * Applies 7x7 Gaussian blur kernel\n * Samples 49 pixels in a 7x7 grid around the current pixel\n * Weights sum to 1.0 (1003/1003) for proper normalization\n * Creates the strongest blur effect\n */\nvec4 gaussian7(vec2 texel) {\n    vec4 color = vec4(0.0);\n\n    // Row 1: weights [0, 0, 1/1003, 2/1003, 1/1003, 0, 0]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0, -3.0)) * 1.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0, -3.0)) * 2.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0, -3.0)) * 1.0/1003.0;\n\n    // Row 2: weights [0, 3/1003, 13/1003, 22/1003, 13/1003, 3/1003, 0]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0, -2.0)) * 3.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0, -2.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0, -2.0)) * 22.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0, -2.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0, -2.0)) * 3.0/1003.0;\n\n    // Row 3: weights [1/1003, 13/1003, 59/1003, 97/1003, 59/1003, 13/1003, 1/1003]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-3.0, -1.0)) * 1.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0, -1.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0, -1.0)) * 59.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0, -1.0)) * 97.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0, -1.0)) * 59.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0, -1.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 3.0, -1.0)) * 1.0/1003.0;\n    \n    // Row 4 (center): weights [2/1003, 22/1003, 97/1003, 159/1003, 97/1003, 22/1003, 2/1003]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-3.0,  0.0)) * 2.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0,  0.0)) * 22.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  0.0)) * 97.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  0.0)) * 159.0/1003.0; // Center pixel\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  0.0)) * 97.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0,  0.0)) * 22.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 3.0,  0.0)) * 2.0/1003.0;\n    \n    // Row 5: weights [1/1003, 13/1003, 59/1003, 97/1003, 59/1003, 13/1003, 1/1003]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-3.0,  1.0)) * 1.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0,  1.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  1.0)) * 59.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  1.0)) * 97.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  1.0)) * 59.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0,  1.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 3.0,  1.0)) * 1.0/1003.0;\n    \n    // Row 6: weights [0, 3/1003, 13/1003, 22/1003, 13/1003, 3/1003, 0]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-2.0,  2.0)) * 3.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  2.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  2.0)) * 22.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  2.0)) * 13.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 2.0,  2.0)) * 3.0/1003.0;\n\n    // Row 7: weights [0, 0, 1/1003, 2/1003, 1/1003, 0, 0]\n    color += texture2D(tDiffuse, vUv + texel * vec2(-1.0,  3.0)) * 1.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 0.0,  3.0)) * 2.0/1003.0;\n    color += texture2D(tDiffuse, vUv + texel * vec2( 1.0,  3.0)) * 1.0/1003.0;\n\n    return color;\n}\n\n/**\n * Main fragment shader function\n * Determines which blur kernel to apply based on the 'gaussian' uniform\n */\nvoid main() {\n    // Calculate the size of one texel (pixel) in texture coordinates\n    vec2 texel = 1.0 / resolution;\n    \n    // Initialize output color (this line appears to be unused/debug code)\n    vec4 color = vec4(1.0, 0.0, 0.0, 0.0);\n\n    // TODO: remove these variables since not used\n    bool left = vUv.x < 0.5;\n    bool top = vUv.y < 0.5;\n\n    if (gaussian > 1 && gaussian <= 3) {\n        // Apply 3x3 Gaussian blur for values 2-3\n        color = gaussian3(texel);\n    } else if (gaussian > 3 && gaussian <= 5) {\n        // Apply 5x5 Gaussian blur for values 4-5\n        color = gaussian5(texel);\n    } else if (gaussian > 5) {\n        // Apply 7x7 Gaussian blur for values 6 and above\n        color = gaussian7(texel);\n    } else {\n        // No blur for value 1 or less\n        color = noGaussian();\n    }\n\n    // Output the final blurred color\n    gl_FragColor = color;\n}\n";
function Z(e, t) {
	let n = e.properties?.get(t);
	return n?.framebuffer || n?.__webglFramebuffer || t.__webglFramebuffer;
}
function Q(e) {
	c(t.DEBUG) && console.warn(`%cV: ${e}`, "background: deeppink; color: white; padding: 2px; border-radius: 3px;");
}
function se(e, t, n, { mrtRef: r }) {
	e.setRenderTarget(r.current), e.clear(!0, !0, !0), e.render(n, t);
}
function ce(e, { screenSceneRef: t, screenCameraRef: n }) {
	e.setRenderTarget(null), e.clear(!0, !0, !0), e.render(t.current, n.current);
}
function le(e, { frameRef: t, dataManager: n, mrtRef: r, bufRequest: i, bufUsage: a }) {
	let o = e.getContext(), s = t.current;
	n.noNewRequests === !0 && !n.manuallyStopped && s % 100 == 0 && s < 500 && (n.noNewRequests = !1), n.triggerRequest === !0 && n.noNewRequests === !1 ? (o.bindFramebuffer(o.READ_FRAMEBUFFER, Z(e, r.current)), o.readBuffer(o.COLOR_ATTACHMENT1), o.readPixels(0, 0, r.current.width, r.current.height, o.RGBA, o.UNSIGNED_BYTE, i.current), n.processRequestData(i.current, {
		width: r?.current?.width,
		height: r?.current?.height,
		sigmaNormalized: ne
	})) : n.triggerUsage === !0 && n.noNewRequests === !1 && (o.bindFramebuffer(o.READ_FRAMEBUFFER, Z(e, r.current)), o.readBuffer(o.COLOR_ATTACHMENT2), o.readPixels(0, 0, r.current.width, r.current.height, o.RGBA, o.UNSIGNED_BYTE, a.current), n.processUsageData(a.current));
}
function ue(t, n) {
	let { invalidate: r, isInteracting: i, dataManager: a, spatialRenderingModeChanging: o, meshRef: s, stillRef: c, screenQuadRef: l, lastSampleRef: u, frameRef: d, lastFrameCountRef: f } = n;
	if (l.current && (c.current ? l.current.material.uniforms.gaussian.value = 0 : l.current.material.uniforms.gaussian.value = 7), i) {
		a.manuallyStopped || (a.noNewRequests = !1, a.triggerUsage = !0);
		return;
	}
	if (o) return;
	let p = s.current?.material?.uniforms, m = p?.renderRes?.value ?? a?.PT?.lowestDataRes;
	if (a.noNewRequests) {
		m === 0 ? c.current || (e.debug("Adaptive Quality: No new requests and already at best quality. Setting stillRef to true."), c.current = !0, l.current.material.uniforms.gaussian.value = 0) : (p && (p.renderRes.value = 0), e.debug("Adaptive Quality: No new requests. Setting renderSpeed to 0 (best quality)."), c.current = !1, l.current.material.uniforms.gaussian.value = 7, r());
		return;
	}
	c.current && (c.current = !1, r());
	let h = t.getElapsedTime();
	if (h - u.current < 1) return;
	let g = h - u.current, _ = d.current - f.current, v = 0;
	g > 0 && (v = _ / g), u.current = h, f.current = d.current;
	let y = v > 100 && m > 0, b = v < 30 && m < a.PT.lowestDataRes;
	if (y || b) {
		let e = m + (b ? 1 : -1);
		p && (p.renderRes.value = e), r();
	}
}
function $(t) {
	let { images: n, imageLayerScopes: r, imageLayerCoordination: i, imageChannelScopesByLayer: o, imageChannelCoordination: s, spatialRenderingMode: c, spatialRenderingModeChanging: h, onVolumeLoadingUpdate: v } = t, { gl: y } = D(), b = D((e) => e.invalidate), x = (0, j.useRef)(null), w = (0, j.useRef)(null), T = (0, j.useRef)(null), E = (0, j.useRef)(null), O = (0, j.useRef)(null), [M, N] = (0, j.useState)({
		uniforms: null,
		shader: null,
		meshScale: [
			1,
			1,
			1
		],
		geometrySize: [
			1,
			1,
			1
		]
	}), P = c === "3D", [F, I] = (0, j.useState)(!1), L = (0, j.useRef)(null), R = (0, j.useRef)(null), z = (0, j.useRef)(null), [V, H] = (0, j.useState)(!1), U = (0, j.useRef)(null), W = (0, j.useRef)(!1), G = (0, j.useRef)(0), K = (0, j.useRef)(0), ne = (0, j.useRef)(0), q = (0, j.useMemo)(() => new re(y), [y]), J = (0, j.useMemo)(() => new ie(), []);
	(0, j.useEffect)(() => {
		Q("useEffect MRT target matching canvas");
		let { width: e, height: t } = y.domElement, n = new ee(e, t, { count: 3 }), r = n.textures;
		r.forEach((e) => {
			e.format = _, e.type = p, e.minFilter = S, e.magFilter = S, e.generateMipmaps = !1;
		});
		let i = new g(), a = new f(-1, 1, 1, -1, .1, 10);
		a.position.z = 1;
		let o = new u({
			uniforms: {
				tDiffuse: { value: r[0] },
				resolution: { value: new l(e, t) },
				gaussian: { value: 7 }
			},
			vertexShader: ae,
			fragmentShader: oe,
			transparent: !0
		}), s = new C(new d(2, 2), o);
		return i.add(s), L.current = i, R.current = a, z.current = s, T.current = new Uint8Array(e * t * 4), E.current = new Uint8Array(e * t * 4), O.current = n, () => {
			n.dispose(), o.dispose(), s.geometry.dispose();
		};
	}, [y]);
	let Y = r?.[0], X = n?.[Y];
	o?.[Y];
	let Z = s?.[0]?.[Y];
	(0, j.useEffect)(() => {
		Q("useEffect INIT");
		let t = !1;
		if (!q || !J) {
			e.debug("dataManager or renderManager not initialized yet");
			return;
		}
		if (!X) {
			e.debug("no first image layer yet");
			return;
		}
		if (!Z) {
			e.debug("no firstImageLayerChannelCoordination yet");
			return;
		}
		return (async () => {
			if (q.initStatus === B.COMPLETE) {
				e.debug("dataManager already initialized, skipping"), I(!0);
				return;
			}
			if (q.initImages(n, r), await q.init(Z), t) {
				e.debug("Initialization useEffect has rerun, aborting remaining initialization");
				return;
			}
			e.debug("dataManager initialized"), J.setZarrUniforms(q.zarrStore, q.PT), J.setChannelMapping(q.channels.colorMappings), e.debug("rm.uniforms", J.uniforms), I(!0), b();
		})(), () => {
			t = !0;
		};
	}, [
		q,
		J,
		n,
		r
	]), (0, j.useEffect)(() => {
		if (c === "3D" && q && J && F) {
			Q("useEffect spatialRenderingMode");
			let e = {
				images: n,
				imageLayerScopes: r,
				imageLayerCoordination: i,
				imageChannelScopesByLayer: o,
				imageChannelCoordination: s,
				spatialRenderingMode: c
			};
			if (J.updateFromProps(e)) {
				let { zarrInit: e } = J;
				e || (q.ptTHREE.needsUpdate = !1, q.bcTHREE.needsUpdate = !1, q.renderer.initTexture(q.bcTHREE), q.renderer.initTexture(q.ptTHREE), q.initTexture());
				let t = J.updateRendering({
					zarrStoreShapes: q.zarrStore.shapes,
					originalScaleXYZ: q.getOriginalScaleXYZ(),
					physicalDimensionsXYZ: q.getPhysicalDimensionsXYZ(),
					maxResolutionXYZ: q.getMaxResolutionXYZ(),
					boxDimensionsXYZ: q.getBoxDimensionsXYZ(),
					normalizedScaleXYZ: q.getNormalizedScaleXYZ(),
					bcTHREE: q.bcTHREE,
					ptTHREE: q.ptTHREE
				});
				t && N(t);
			}
		}
	}, [
		q,
		J,
		n,
		r,
		i,
		o,
		s,
		c,
		F
	]), te((e, t, n) => {
		if (!O.current || !q || !J || !M.shader) return;
		let { gl: r, camera: i, scene: a, clock: o } = e;
		W.current || se(r, i, a, { mrtRef: O }), ce(r, {
			screenSceneRef: L,
			screenCameraRef: R
		}), le(r, {
			frameRef: G,
			dataManager: q,
			mrtRef: O,
			bufRequest: T,
			bufUsage: E
		}), ue(o, {
			invalidate: b,
			isInteracting: V,
			dataManager: q,
			spatialRenderingModeChanging: h,
			meshRef: w,
			stillRef: W,
			screenQuadRef: z,
			lastSampleRef: K,
			frameRef: G,
			lastFrameCountRef: ne
		}), G.current += 1;
	}, 1);
	let $ = a((e) => {
		if (Q("invalidateOnInteraction callback"), H(e), e) {
			let e = w.current?.material?.uniforms;
			e && (e.renderRes.value = q.PT.lowestDataRes), W.current = !1, b();
		}
	}), de = a((e) => {
		$(!0);
	}), fe = a((e) => {
		clearTimeout(U.current), U.current = setTimeout(() => {
			$(!1);
		}, 300);
	});
	(0, j.useEffect)(() => {
		F && (Q("useEffect firstImageLayerChannelCoordination"), $(!0), e.debug("something about channels changed"), q.updateChannels(Z), J.setChannelMapping(q.channels.colorMappings), clearTimeout(U.current), U.current = setTimeout(() => {
			$(!1);
		}, 300));
	}, [
		q,
		Z,
		J,
		$,
		F
	]);
	let pe = a(() => {
		q && q.stopLoading();
	}), me = a(() => {
		q && q.restartLoading();
	}), he = a(() => q ? q.getLoadingProgress() : null);
	return (0, j.useEffect)(() => {
		if (!v) return;
		let e = setInterval(() => {
			let e = he();
			v({
				loadingProgress: e,
				stillRef: W,
				onStopLoading: pe,
				onRestartLoading: me
			});
		}, 1e3);
		return () => clearInterval(e);
	}, [v, W]), !P || !q || !J ? null : M.shader ? (0, A.jsxs)("group", { children: [(0, A.jsx)(k, {
		enableDamping: !1,
		onStart: de,
		onEnd: fe
	}), (0, A.jsxs)("mesh", {
		ref: w,
		scale: M.meshScale,
		children: [(0, A.jsx)("boxGeometry", { args: M.geometrySize }), (0, A.jsx)("shaderMaterial", {
			uniforms: M.uniforms,
			vertexShader: M.shader.vertexShader,
			fragmentShader: M.shader.fragmentShader,
			side: 1,
			transparent: !1,
			glslVersion: m
		})]
	})] }) : (0, A.jsxs)("group", { children: [(0, A.jsxs)("mesh", { children: [(0, A.jsx)("boxGeometry", { args: [
		1,
		1,
		1
	] }), (0, A.jsx)("meshBasicMaterial", {
		color: "#444",
		wireframe: !0
	})] }), (0, A.jsx)(k, { ref: x })] });
}
function de(e) {
	return (0, A.jsx)(O, {
		frameloop: "always",
		style: {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			padding: 0,
			margin: 0
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
				4
			],
			near: .01,
			far: 15
		},
		gl: {
			antialias: !0,
			logarithmicDepthBuffer: !1,
			preserveDrawingBuffer: !1,
			autoClear: !1
		},
		children: (0, A.jsx)(j.Suspense, {
			fallback: "Initializing Volume View...",
			children: (0, A.jsx)($, { ...e })
		})
	});
}
//#endregion
export { de as SpatialWrapper };
