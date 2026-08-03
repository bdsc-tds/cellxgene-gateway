//#region node_modules/vitessce/dist/pako.esm-D68R8YXe.js
function e(e) {
	let t = e.length;
	for (; --t >= 0;) e[t] = 0;
}
var t = 29, n = 30;
e(Array(288 * 2)), e(Array(n * 2)), e(Array(512)), e(Array(256)), e(Array(t)), e(Array(n));
var r = (e, t, n, r) => {
	let i = e & 65535 | 0, a = e >>> 16 & 65535 | 0, o = 0;
	for (; n !== 0;) {
		o = n > 2e3 ? 2e3 : n, n -= o;
		do
			i = i + t[r++] | 0, a = a + i | 0;
		while (--o);
		i %= 65521, a %= 65521;
	}
	return i | a << 16 | 0;
}, i = new Uint32Array((() => {
	let e, t = [];
	for (var n = 0; n < 256; n++) {
		e = n;
		for (var r = 0; r < 8; r++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
		t[n] = e;
	}
	return t;
})()), a = (e, t, n, r) => {
	let a = i, o = r + n;
	e ^= -1;
	for (let n = r; n < o; n++) e = e >>> 8 ^ a[(e ^ t[n]) & 255];
	return e ^ -1;
}, o = {
	2: "need dictionary",
	1: "stream end",
	0: "",
	"-1": "file error",
	"-2": "stream error",
	"-3": "data error",
	"-4": "insufficient memory",
	"-5": "buffer error",
	"-6": "incompatible version"
}, s = {
	Z_NO_FLUSH: 0,
	Z_FINISH: 4,
	Z_BLOCK: 5,
	Z_TREES: 6,
	Z_OK: 0,
	Z_STREAM_END: 1,
	Z_NEED_DICT: 2,
	Z_STREAM_ERROR: -2,
	Z_DATA_ERROR: -3,
	Z_MEM_ERROR: -4,
	Z_BUF_ERROR: -5,
	Z_DEFLATED: 8
}, c = (e, t) => Object.prototype.hasOwnProperty.call(e, t), l = {
	assign: function(e) {
		let t = Array.prototype.slice.call(arguments, 1);
		for (; t.length;) {
			let n = t.shift();
			if (n) {
				if (typeof n != "object") throw TypeError(n + "must be non-object");
				for (let t in n) c(n, t) && (e[t] = n[t]);
			}
		}
		return e;
	},
	flattenChunks: (e) => {
		let t = 0;
		for (let n = 0, r = e.length; n < r; n++) t += e[n].length;
		let n = new Uint8Array(t);
		for (let t = 0, r = 0, i = e.length; t < i; t++) {
			let i = e[t];
			n.set(i, r), r += i.length;
		}
		return n;
	}
}, u = !0;
try {
	String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
} catch {
	u = !1;
}
var d = /* @__PURE__ */ new Uint8Array(256);
for (let e = 0; e < 256; e++) d[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
d[254] = d[254] = 1;
var f = (e) => {
	if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(e);
	let t, n, r, i, a, o = e.length, s = 0;
	for (i = 0; i < o; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
	for (t = new Uint8Array(s), a = 0, i = 0; a < s; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | n & 63) : n < 65536 ? (t[a++] = 224 | n >>> 12, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63) : (t[a++] = 240 | n >>> 18, t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63);
	return t;
}, p = (e, t) => {
	if (t < 65534 && e.subarray && u) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
	let n = "";
	for (let r = 0; r < t; r++) n += String.fromCharCode(e[r]);
	return n;
}, m = {
	string2buf: f,
	buf2string: (e, t) => {
		let n = t || e.length;
		if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(e.subarray(0, t));
		let r, i, a = Array(n * 2);
		for (i = 0, r = 0; r < n;) {
			let t = e[r++];
			if (t < 128) {
				a[i++] = t;
				continue;
			}
			let o = d[t];
			if (o > 4) {
				a[i++] = 65533, r += o - 1;
				continue;
			}
			for (t &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && r < n;) t = t << 6 | e[r++] & 63, o--;
			if (o > 1) {
				a[i++] = 65533;
				continue;
			}
			t < 65536 ? a[i++] = t : (t -= 65536, a[i++] = 55296 | t >> 10 & 1023, a[i++] = 56320 | t & 1023);
		}
		return p(a, i);
	},
	utf8border: (e, t) => {
		t ||= e.length, t > e.length && (t = e.length);
		let n = t - 1;
		for (; n >= 0 && (e[n] & 192) == 128;) n--;
		return n < 0 || n === 0 ? t : n + d[e[n]] > t ? n : t;
	}
};
function h() {
	this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var g = h, _ = 30, v = 12, y = function(e, t) {
	let n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, y, b, x, S, C, w, T, E, D, O = e.state;
	n = e.next_in, E = e.input, r = n + (e.avail_in - 5), i = e.next_out, D = e.output, a = i - (t - e.avail_out), o = i + (e.avail_out - 257), s = O.dmax, c = O.wsize, l = O.whave, u = O.wnext, d = O.window, f = O.hold, p = O.bits, m = O.lencode, h = O.distcode, g = (1 << O.lenbits) - 1, y = (1 << O.distbits) - 1;
	e: do {
		p < 15 && (f += E[n++] << p, p += 8, f += E[n++] << p, p += 8), b = m[f & g];
		t: for (;;) {
			if (x = b >>> 24, f >>>= x, p -= x, x = b >>> 16 & 255, x === 0) D[i++] = b & 65535;
			else if (x & 16) {
				S = b & 65535, x &= 15, x && (p < x && (f += E[n++] << p, p += 8), S += f & (1 << x) - 1, f >>>= x, p -= x), p < 15 && (f += E[n++] << p, p += 8, f += E[n++] << p, p += 8), b = h[f & y];
				i: for (;;) {
					if (x = b >>> 24, f >>>= x, p -= x, x = b >>> 16 & 255, x & 16) {
						if (C = b & 65535, x &= 15, p < x && (f += E[n++] << p, p += 8, p < x && (f += E[n++] << p, p += 8)), C += f & (1 << x) - 1, C > s) {
							e.msg = "invalid distance too far back", O.mode = _;
							break e;
						}
						if (f >>>= x, p -= x, x = i - a, C > x) {
							if (x = C - x, x > l && O.sane) {
								e.msg = "invalid distance too far back", O.mode = _;
								break e;
							}
							if (w = 0, T = d, u === 0) {
								if (w += c - x, x < S) {
									S -= x;
									do
										D[i++] = d[w++];
									while (--x);
									w = i - C, T = D;
								}
							} else if (u < x) {
								if (w += c + u - x, x -= u, x < S) {
									S -= x;
									do
										D[i++] = d[w++];
									while (--x);
									if (w = 0, u < S) {
										x = u, S -= x;
										do
											D[i++] = d[w++];
										while (--x);
										w = i - C, T = D;
									}
								}
							} else if (w += u - x, x < S) {
								S -= x;
								do
									D[i++] = d[w++];
								while (--x);
								w = i - C, T = D;
							}
							for (; S > 2;) D[i++] = T[w++], D[i++] = T[w++], D[i++] = T[w++], S -= 3;
							S && (D[i++] = T[w++], S > 1 && (D[i++] = T[w++]));
						} else {
							w = i - C;
							do
								D[i++] = D[w++], D[i++] = D[w++], D[i++] = D[w++], S -= 3;
							while (S > 2);
							S && (D[i++] = D[w++], S > 1 && (D[i++] = D[w++]));
						}
					} else if (x & 64) {
						e.msg = "invalid distance code", O.mode = _;
						break e;
					} else {
						b = h[(b & 65535) + (f & (1 << x) - 1)];
						continue i;
					}
					break;
				}
			} else if (!(x & 64)) {
				b = m[(b & 65535) + (f & (1 << x) - 1)];
				continue t;
			} else if (x & 32) {
				O.mode = v;
				break e;
			} else {
				e.msg = "invalid literal/length code", O.mode = _;
				break e;
			}
			break;
		}
	} while (n < r && i < o);
	S = p >> 3, n -= S, p -= S << 3, f &= (1 << p) - 1, e.next_in = n, e.next_out = i, e.avail_in = n < r ? 5 + (r - n) : 5 - (n - r), e.avail_out = i < o ? 257 + (o - i) : 257 - (i - o), O.hold = f, O.bits = p;
}, b = 15, x = 852, S = 592, C = 0, w = 1, T = 2, E = new Uint16Array([
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	13,
	15,
	17,
	19,
	23,
	27,
	31,
	35,
	43,
	51,
	59,
	67,
	83,
	99,
	115,
	131,
	163,
	195,
	227,
	258,
	0,
	0
]), D = new Uint8Array([
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	18,
	18,
	18,
	18,
	19,
	19,
	19,
	19,
	20,
	20,
	20,
	20,
	21,
	21,
	21,
	21,
	16,
	72,
	78
]), O = new Uint16Array([
	1,
	2,
	3,
	4,
	5,
	7,
	9,
	13,
	17,
	25,
	33,
	49,
	65,
	97,
	129,
	193,
	257,
	385,
	513,
	769,
	1025,
	1537,
	2049,
	3073,
	4097,
	6145,
	8193,
	12289,
	16385,
	24577,
	0,
	0
]), k = new Uint8Array([
	16,
	16,
	16,
	16,
	17,
	17,
	18,
	18,
	19,
	19,
	20,
	20,
	21,
	21,
	22,
	22,
	23,
	23,
	24,
	24,
	25,
	25,
	26,
	26,
	27,
	27,
	28,
	28,
	29,
	29,
	64,
	64
]), A = (e, t, n, r, i, a, o, s) => {
	let c = s.bits, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y, A, j, M, N, P = null, ee = 0, F, I = /* @__PURE__ */ new Uint16Array(16), L = /* @__PURE__ */ new Uint16Array(16), R = null, z = 0, B, V, H;
	for (l = 0; l <= b; l++) I[l] = 0;
	for (u = 0; u < r; u++) I[t[n + u]]++;
	for (p = c, f = b; f >= 1 && I[f] === 0; f--);
	if (p > f && (p = f), f === 0) return i[a++] = 20971520, i[a++] = 20971520, s.bits = 1, 0;
	for (d = 1; d < f && I[d] === 0; d++);
	for (p < d && (p = d), g = 1, l = 1; l <= b; l++) if (g <<= 1, g -= I[l], g < 0) return -1;
	if (g > 0 && (e === C || f !== 1)) return -1;
	for (L[1] = 0, l = 1; l < b; l++) L[l + 1] = L[l] + I[l];
	for (u = 0; u < r; u++) t[n + u] !== 0 && (o[L[t[n + u]]++] = u);
	if (e === C ? (P = R = o, F = 19) : e === w ? (P = E, ee -= 257, R = D, z -= 257, F = 256) : (P = O, R = k, F = -1), v = 0, u = 0, l = d, N = a, m = p, h = 0, j = -1, _ = 1 << p, M = _ - 1, e === w && _ > x || e === T && _ > S) return 1;
	for (;;) {
		B = l - h, o[u] < F ? (V = 0, H = o[u]) : o[u] > F ? (V = R[z + o[u]], H = P[ee + o[u]]) : (V = 96, H = 0), y = 1 << l - h, A = 1 << m, d = A;
		do
			A -= y, i[N + (v >> h) + A] = B << 24 | V << 16 | H | 0;
		while (A !== 0);
		for (y = 1 << l - 1; v & y;) y >>= 1;
		if (y === 0 ? v = 0 : (v &= y - 1, v += y), u++, --I[l] === 0) {
			if (l === f) break;
			l = t[n + o[u]];
		}
		if (l > p && (v & M) !== j) {
			for (h === 0 && (h = p), N += d, m = l - h, g = 1 << m; m + h < f && (g -= I[m + h], !(g <= 0));) m++, g <<= 1;
			if (_ += 1 << m, e === w && _ > x || e === T && _ > S) return 1;
			j = v & M, i[j] = p << 24 | m << 16 | N - a | 0;
		}
	}
	return v !== 0 && (i[N + v] = l - h << 24 | 4194304), s.bits = p, 0;
}, j = 0, M = 1, N = 2, { Z_FINISH: P, Z_BLOCK: ee, Z_TREES: F, Z_OK: I, Z_STREAM_END: L, Z_NEED_DICT: R, Z_STREAM_ERROR: z, Z_DATA_ERROR: B, Z_MEM_ERROR: V, Z_BUF_ERROR: H, Z_DEFLATED: te } = s, ne = 1, re = 2, ie = 3, ae = 4, oe = 5, se = 6, ce = 7, le = 8, ue = 9, de = 10, U = 11, W = 12, fe = 13, pe = 14, G = 15, me = 16, he = 17, ge = 18, _e = 19, K = 20, q = 21, ve = 22, ye = 23, be = 24, xe = 25, Se = 26, Ce = 27, we = 28, Te = 29, J = 30, Ee = 31, De = 32, Y = 852, Oe = 592, ke = 15, Ae = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function je() {
	this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = /* @__PURE__ */ new Uint16Array(320), this.work = /* @__PURE__ */ new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
var Me = (e) => {
	if (!e || !e.state) return z;
	let t = e.state;
	return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = t.wrap & 1), t.mode = ne, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(Y), t.distcode = t.distdyn = new Int32Array(Oe), t.sane = 1, t.back = -1, I;
}, Ne = (e) => {
	if (!e || !e.state) return z;
	let t = e.state;
	return t.wsize = 0, t.whave = 0, t.wnext = 0, Me(e);
}, Pe = (e, t) => {
	let n;
	if (!e || !e.state) return z;
	let r = e.state;
	return t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 1, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? z : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, Ne(e));
}, Fe = (e, t) => {
	if (!e) return z;
	let n = new je();
	e.state = n, n.window = null;
	let r = Pe(e, t);
	return r !== I && (e.state = null), r;
}, Ie = (e) => Fe(e, ke), Le = !0, Re, ze, Be = (e) => {
	if (Le) {
		Re = /* @__PURE__ */ new Int32Array(512), ze = /* @__PURE__ */ new Int32Array(32);
		let t = 0;
		for (; t < 144;) e.lens[t++] = 8;
		for (; t < 256;) e.lens[t++] = 9;
		for (; t < 280;) e.lens[t++] = 7;
		for (; t < 288;) e.lens[t++] = 8;
		for (A(M, e.lens, 0, 288, Re, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
		A(N, e.lens, 0, 32, ze, 0, e.work, { bits: 5 }), Le = !1;
	}
	e.lencode = Re, e.lenbits = 9, e.distcode = ze, e.distbits = 5;
}, Ve = (e, t, n, r) => {
	let i, a = e.state;
	return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), r >= a.wsize ? (a.window.set(t.subarray(n - a.wsize, n), 0), a.wnext = 0, a.whave = a.wsize) : (i = a.wsize - a.wnext, i > r && (i = r), a.window.set(t.subarray(n - r, n - r + i), a.wnext), r -= i, r ? (a.window.set(t.subarray(n - r, n), 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0;
}, X = {
	inflateReset: Ne,
	inflateReset2: Pe,
	inflateResetKeep: Me,
	inflateInit: Ie,
	inflateInit2: Fe,
	inflate: (e, t) => {
		let n, i, o, s, c, l, u, d, f, p, m, h, g, _, v = 0, b, x, S, C, w, T, E, D, O = /* @__PURE__ */ new Uint8Array(4), k, Y, Oe = new Uint8Array([
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
		]);
		if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return z;
		n = e.state, n.mode === W && (n.mode = fe), c = e.next_out, o = e.output, u = e.avail_out, s = e.next_in, i = e.input, l = e.avail_in, d = n.hold, f = n.bits, p = l, m = u, D = I;
		e: for (;;) switch (n.mode) {
			case ne:
				if (n.wrap === 0) {
					n.mode = fe;
					break;
				}
				for (; f < 16;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				if (n.wrap & 2 && d === 35615) {
					n.check = 0, O[0] = d & 255, O[1] = d >>> 8 & 255, n.check = a(n.check, O, 2, 0), d = 0, f = 0, n.mode = re;
					break;
				}
				if (n.flags = 0, n.head && (n.head.done = !1), !(n.wrap & 1) || (((d & 255) << 8) + (d >> 8)) % 31) {
					e.msg = "incorrect header check", n.mode = J;
					break;
				}
				if ((d & 15) !== te) {
					e.msg = "unknown compression method", n.mode = J;
					break;
				}
				if (d >>>= 4, f -= 4, E = (d & 15) + 8, n.wbits === 0) n.wbits = E;
				else if (E > n.wbits) {
					e.msg = "invalid window size", n.mode = J;
					break;
				}
				n.dmax = 1 << n.wbits, e.adler = n.check = 1, n.mode = d & 512 ? de : W, d = 0, f = 0;
				break;
			case re:
				for (; f < 16;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				if (n.flags = d, (n.flags & 255) !== te) {
					e.msg = "unknown compression method", n.mode = J;
					break;
				}
				if (n.flags & 57344) {
					e.msg = "unknown header flags set", n.mode = J;
					break;
				}
				n.head && (n.head.text = d >> 8 & 1), n.flags & 512 && (O[0] = d & 255, O[1] = d >>> 8 & 255, n.check = a(n.check, O, 2, 0)), d = 0, f = 0, n.mode = ie;
			case ie:
				for (; f < 32;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				n.head && (n.head.time = d), n.flags & 512 && (O[0] = d & 255, O[1] = d >>> 8 & 255, O[2] = d >>> 16 & 255, O[3] = d >>> 24 & 255, n.check = a(n.check, O, 4, 0)), d = 0, f = 0, n.mode = ae;
			case ae:
				for (; f < 16;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				n.head && (n.head.xflags = d & 255, n.head.os = d >> 8), n.flags & 512 && (O[0] = d & 255, O[1] = d >>> 8 & 255, n.check = a(n.check, O, 2, 0)), d = 0, f = 0, n.mode = oe;
			case oe:
				if (n.flags & 1024) {
					for (; f < 16;) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					n.length = d, n.head && (n.head.extra_len = d), n.flags & 512 && (O[0] = d & 255, O[1] = d >>> 8 & 255, n.check = a(n.check, O, 2, 0)), d = 0, f = 0;
				} else n.head && (n.head.extra = null);
				n.mode = se;
			case se:
				if (n.flags & 1024 && (h = n.length, h > l && (h = l), h && (n.head && (E = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(i.subarray(s, s + h), E)), n.flags & 512 && (n.check = a(n.check, i, h, s)), l -= h, s += h, n.length -= h), n.length)) break e;
				n.length = 0, n.mode = ce;
			case ce:
				if (n.flags & 2048) {
					if (l === 0) break e;
					h = 0;
					do
						E = i[s + h++], n.head && E && n.length < 65536 && (n.head.name += String.fromCharCode(E));
					while (E && h < l);
					if (n.flags & 512 && (n.check = a(n.check, i, h, s)), l -= h, s += h, E) break e;
				} else n.head && (n.head.name = null);
				n.length = 0, n.mode = le;
			case le:
				if (n.flags & 4096) {
					if (l === 0) break e;
					h = 0;
					do
						E = i[s + h++], n.head && E && n.length < 65536 && (n.head.comment += String.fromCharCode(E));
					while (E && h < l);
					if (n.flags & 512 && (n.check = a(n.check, i, h, s)), l -= h, s += h, E) break e;
				} else n.head && (n.head.comment = null);
				n.mode = ue;
			case ue:
				if (n.flags & 512) {
					for (; f < 16;) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					if (d !== (n.check & 65535)) {
						e.msg = "header crc mismatch", n.mode = J;
						break;
					}
					d = 0, f = 0;
				}
				n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = W;
				break;
			case de:
				for (; f < 32;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				e.adler = n.check = Ae(d), d = 0, f = 0, n.mode = U;
			case U:
				if (n.havedict === 0) return e.next_out = c, e.avail_out = u, e.next_in = s, e.avail_in = l, n.hold = d, n.bits = f, R;
				e.adler = n.check = 1, n.mode = W;
			case W: if (t === ee || t === F) break e;
			case fe:
				if (n.last) {
					d >>>= f & 7, f -= f & 7, n.mode = Ce;
					break;
				}
				for (; f < 3;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				switch (n.last = d & 1, d >>>= 1, --f, d & 3) {
					case 0:
						n.mode = pe;
						break;
					case 1:
						if (Be(n), n.mode = K, t === F) {
							d >>>= 2, f -= 2;
							break e;
						}
						break;
					case 2:
						n.mode = he;
						break;
					case 3: e.msg = "invalid block type", n.mode = J;
				}
				d >>>= 2, f -= 2;
				break;
			case pe:
				for (d >>>= f & 7, f -= f & 7; f < 32;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				if ((d & 65535) != (d >>> 16 ^ 65535)) {
					e.msg = "invalid stored block lengths", n.mode = J;
					break;
				}
				if (n.length = d & 65535, d = 0, f = 0, n.mode = G, t === F) break e;
			case G: n.mode = me;
			case me:
				if (h = n.length, h) {
					if (h > l && (h = l), h > u && (h = u), h === 0) break e;
					o.set(i.subarray(s, s + h), c), l -= h, s += h, u -= h, c += h, n.length -= h;
					break;
				}
				n.mode = W;
				break;
			case he:
				for (; f < 14;) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				if (n.nlen = (d & 31) + 257, d >>>= 5, f -= 5, n.ndist = (d & 31) + 1, d >>>= 5, f -= 5, n.ncode = (d & 15) + 4, d >>>= 4, f -= 4, n.nlen > 286 || n.ndist > 30) {
					e.msg = "too many length or distance symbols", n.mode = J;
					break;
				}
				n.have = 0, n.mode = ge;
			case ge:
				for (; n.have < n.ncode;) {
					for (; f < 3;) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					n.lens[Oe[n.have++]] = d & 7, d >>>= 3, f -= 3;
				}
				for (; n.have < 19;) n.lens[Oe[n.have++]] = 0;
				if (n.lencode = n.lendyn, n.lenbits = 7, k = { bits: n.lenbits }, D = A(j, n.lens, 0, 19, n.lencode, 0, n.work, k), n.lenbits = k.bits, D) {
					e.msg = "invalid code lengths set", n.mode = J;
					break;
				}
				n.have = 0, n.mode = _e;
			case _e:
				for (; n.have < n.nlen + n.ndist;) {
					for (; v = n.lencode[d & (1 << n.lenbits) - 1], b = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(b <= f);) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					if (S < 16) d >>>= b, f -= b, n.lens[n.have++] = S;
					else {
						if (S === 16) {
							for (Y = b + 2; f < Y;) {
								if (l === 0) break e;
								l--, d += i[s++] << f, f += 8;
							}
							if (d >>>= b, f -= b, n.have === 0) {
								e.msg = "invalid bit length repeat", n.mode = J;
								break;
							}
							E = n.lens[n.have - 1], h = 3 + (d & 3), d >>>= 2, f -= 2;
						} else if (S === 17) {
							for (Y = b + 3; f < Y;) {
								if (l === 0) break e;
								l--, d += i[s++] << f, f += 8;
							}
							d >>>= b, f -= b, E = 0, h = 3 + (d & 7), d >>>= 3, f -= 3;
						} else {
							for (Y = b + 7; f < Y;) {
								if (l === 0) break e;
								l--, d += i[s++] << f, f += 8;
							}
							d >>>= b, f -= b, E = 0, h = 11 + (d & 127), d >>>= 7, f -= 7;
						}
						if (n.have + h > n.nlen + n.ndist) {
							e.msg = "invalid bit length repeat", n.mode = J;
							break;
						}
						for (; h--;) n.lens[n.have++] = E;
					}
				}
				if (n.mode === J) break;
				if (n.lens[256] === 0) {
					e.msg = "invalid code -- missing end-of-block", n.mode = J;
					break;
				}
				if (n.lenbits = 9, k = { bits: n.lenbits }, D = A(M, n.lens, 0, n.nlen, n.lencode, 0, n.work, k), n.lenbits = k.bits, D) {
					e.msg = "invalid literal/lengths set", n.mode = J;
					break;
				}
				if (n.distbits = 6, n.distcode = n.distdyn, k = { bits: n.distbits }, D = A(N, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, k), n.distbits = k.bits, D) {
					e.msg = "invalid distances set", n.mode = J;
					break;
				}
				if (n.mode = K, t === F) break e;
			case K: n.mode = q;
			case q:
				if (l >= 6 && u >= 258) {
					e.next_out = c, e.avail_out = u, e.next_in = s, e.avail_in = l, n.hold = d, n.bits = f, y(e, m), c = e.next_out, o = e.output, u = e.avail_out, s = e.next_in, i = e.input, l = e.avail_in, d = n.hold, f = n.bits, n.mode === W && (n.back = -1);
					break;
				}
				for (n.back = 0; v = n.lencode[d & (1 << n.lenbits) - 1], b = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(b <= f);) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				if (x && !(x & 240)) {
					for (C = b, w = x, T = S; v = n.lencode[T + ((d & (1 << C + w) - 1) >> C)], b = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(C + b <= f);) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					d >>>= C, f -= C, n.back += C;
				}
				if (d >>>= b, f -= b, n.back += b, n.length = S, x === 0) {
					n.mode = Se;
					break;
				}
				if (x & 32) {
					n.back = -1, n.mode = W;
					break;
				}
				if (x & 64) {
					e.msg = "invalid literal/length code", n.mode = J;
					break;
				}
				n.extra = x & 15, n.mode = ve;
			case ve:
				if (n.extra) {
					for (Y = n.extra; f < Y;) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					n.length += d & (1 << n.extra) - 1, d >>>= n.extra, f -= n.extra, n.back += n.extra;
				}
				n.was = n.length, n.mode = ye;
			case ye:
				for (; v = n.distcode[d & (1 << n.distbits) - 1], b = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(b <= f);) {
					if (l === 0) break e;
					l--, d += i[s++] << f, f += 8;
				}
				if (!(x & 240)) {
					for (C = b, w = x, T = S; v = n.distcode[T + ((d & (1 << C + w) - 1) >> C)], b = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(C + b <= f);) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					d >>>= C, f -= C, n.back += C;
				}
				if (d >>>= b, f -= b, n.back += b, x & 64) {
					e.msg = "invalid distance code", n.mode = J;
					break;
				}
				n.offset = S, n.extra = x & 15, n.mode = be;
			case be:
				if (n.extra) {
					for (Y = n.extra; f < Y;) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					n.offset += d & (1 << n.extra) - 1, d >>>= n.extra, f -= n.extra, n.back += n.extra;
				}
				if (n.offset > n.dmax) {
					e.msg = "invalid distance too far back", n.mode = J;
					break;
				}
				n.mode = xe;
			case xe:
				if (u === 0) break e;
				if (h = m - u, n.offset > h) {
					if (h = n.offset - h, h > n.whave && n.sane) {
						e.msg = "invalid distance too far back", n.mode = J;
						break;
					}
					h > n.wnext ? (h -= n.wnext, g = n.wsize - h) : g = n.wnext - h, h > n.length && (h = n.length), _ = n.window;
				} else _ = o, g = c - n.offset, h = n.length;
				h > u && (h = u), u -= h, n.length -= h;
				do
					o[c++] = _[g++];
				while (--h);
				n.length === 0 && (n.mode = q);
				break;
			case Se:
				if (u === 0) break e;
				o[c++] = n.length, u--, n.mode = q;
				break;
			case Ce:
				if (n.wrap) {
					for (; f < 32;) {
						if (l === 0) break e;
						l--, d |= i[s++] << f, f += 8;
					}
					if (m -= u, e.total_out += m, n.total += m, m && (e.adler = n.check = n.flags ? a(n.check, o, m, c - m) : r(n.check, o, m, c - m)), m = u, (n.flags ? d : Ae(d)) !== n.check) {
						e.msg = "incorrect data check", n.mode = J;
						break;
					}
					d = 0, f = 0;
				}
				n.mode = we;
			case we:
				if (n.wrap && n.flags) {
					for (; f < 32;) {
						if (l === 0) break e;
						l--, d += i[s++] << f, f += 8;
					}
					if (d !== (n.total & 4294967295)) {
						e.msg = "incorrect length check", n.mode = J;
						break;
					}
					d = 0, f = 0;
				}
				n.mode = Te;
			case Te:
				D = L;
				break e;
			case J:
				D = B;
				break e;
			case Ee: return V;
			case De:
			default: return z;
		}
		return e.next_out = c, e.avail_out = u, e.next_in = s, e.avail_in = l, n.hold = d, n.bits = f, (n.wsize || m !== e.avail_out && n.mode < J && (n.mode < Ce || t !== P)) && Ve(e, e.output, e.next_out, m - e.avail_out), p -= e.avail_in, m -= e.avail_out, e.total_in += p, e.total_out += m, n.total += m, n.wrap && m && (e.adler = n.check = n.flags ? a(n.check, o, m, e.next_out - m) : r(n.check, o, m, e.next_out - m)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === W ? 128 : 0) + (n.mode === K || n.mode === G ? 256 : 0), (p === 0 && m === 0 || t === P) && D === I && (D = H), D;
	},
	inflateEnd: (e) => {
		if (!e || !e.state) return z;
		let t = e.state;
		return t.window &&= null, e.state = null, I;
	},
	inflateGetHeader: (e, t) => {
		if (!e || !e.state) return z;
		let n = e.state;
		return n.wrap & 2 ? (n.head = t, t.done = !1, I) : z;
	},
	inflateSetDictionary: (e, t) => {
		let n = t.length, i, a, o;
		return !e || !e.state || (i = e.state, i.wrap !== 0 && i.mode !== U) ? z : i.mode === U && (a = 1, a = r(a, t, n, 0), a !== i.check) ? B : (o = Ve(e, t, n, n), o ? (i.mode = Ee, V) : (i.havedict = 1, I));
	},
	inflateInfo: "pako inflate (from Nodeca project)"
};
function He() {
	this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var Ue = He, We = Object.prototype.toString, { Z_NO_FLUSH: Ge, Z_FINISH: Ke, Z_OK: Z, Z_STREAM_END: qe, Z_NEED_DICT: Q, Z_STREAM_ERROR: Je, Z_DATA_ERROR: Ye, Z_MEM_ERROR: Xe } = s;
function $(e) {
	this.options = l.assign({
		chunkSize: 1024 * 64,
		windowBits: 15,
		to: ""
	}, e || {});
	let t = this.options;
	t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && !(t.windowBits & 15) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new g(), this.strm.avail_out = 0;
	let n = X.inflateInit2(this.strm, t.windowBits);
	if (n !== Z || (this.header = new Ue(), X.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = m.string2buf(t.dictionary) : We.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = X.inflateSetDictionary(this.strm, t.dictionary), n !== Z)))) throw Error(o[n]);
}
$.prototype.push = function(e, t) {
	let n = this.strm, r = this.options.chunkSize, i = this.options.dictionary, a, o, s;
	if (this.ended) return !1;
	for (o = t === ~~t ? t : t === !0 ? Ke : Ge, We.call(e) === "[object ArrayBuffer]" ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length;;) {
		for (n.avail_out === 0 && (n.output = new Uint8Array(r), n.next_out = 0, n.avail_out = r), a = X.inflate(n, o), a === Q && i && (a = X.inflateSetDictionary(n, i), a === Z ? a = X.inflate(n, o) : a === Ye && (a = Q)); n.avail_in > 0 && a === qe && n.state.wrap > 0 && e[n.next_in] !== 0;) X.inflateReset(n), a = X.inflate(n, o);
		switch (a) {
			case Je:
			case Ye:
			case Q:
			case Xe: return this.onEnd(a), this.ended = !0, !1;
		}
		if (s = n.avail_out, n.next_out && (n.avail_out === 0 || a === qe)) if (this.options.to === "string") {
			let e = m.utf8border(n.output, n.next_out), t = n.next_out - e, i = m.buf2string(n.output, e);
			n.next_out = t, n.avail_out = r - t, t && n.output.set(n.output.subarray(e, e + t), 0), this.onData(i);
		} else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
		if (!(a === Z && s === 0)) {
			if (a === qe) return a = X.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
			if (n.avail_in === 0) break;
		}
	}
	return !0;
}, $.prototype.onData = function(e) {
	this.chunks.push(e);
}, $.prototype.onEnd = function(e) {
	e === Z && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = l.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function Ze(e, t) {
	let n = new $(t);
	if (n.push(e), n.err) throw n.msg || o[n.err];
	return n.result;
}
var { inflate: Qe } = { inflate: Ze }, $e = Qe;
//#endregion
export { $e as t };
