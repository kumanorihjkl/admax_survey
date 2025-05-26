var __admax_render__ = function() {
		"use strict";
		var o, a, n, r, e, s, d, h, p;
		return void 0 !== window.__admax_render__ ? window.__admax_render__ : (v.prototype.init_default_browser = function() {
			var t = "/sync?callback=window.__admax_render__.render_sync";
			m(c(t += "&sc=" + l())), u();
			try {
				this.exists_overlay = y()
			} catch (t) {}
			try {
				this.in_iframe = parent.window != window
			} catch (t) {}
			this.in_cross_domain = function() {
				for (var t = window, i = 0; i < 10; i++) try {
					var e = t.parent;
					if (e === t) break;
					e.document.URL, t = e
				} catch (t) {
					return !0
				}
				return !1
			}();
			try {
				this.document_url = encodeURIComponent(document.URL)
			} catch (t) {}
			try {
				this.url = encodeURIComponent(parent.document.URL), this.referrer = encodeURIComponent(parent.document.referrer)
			} catch (t) {
				this.url = encodeURIComponent(document.referrer), this.referrer = ""
			}
		}, v.prototype.init_admax_net_browser = function() {
			this.in_iframe = !0;
			try {
				this.document_url = encodeURIComponent(document.URL)
			} catch (t) {}
			var i = parent.parent;
			try {
				this.url = encodeURIComponent(i.parent.document.URL), this.referrer = encodeURIComponent(i.parent.document.referrer)
			} catch (t) {
				this.url = encodeURIComponent(i.document.referrer), this.referrer = ""
			}
		}, o = new v, x.prototype.get = function(t) {
			return this.values[t]
		}, x.prototype.add = function(t, i) {
			var e = this.spot_ids.pop();
			if (e) return void 0 !== this.values[e] ? null : (t = {
				tag_id: t.tag_id,
				spot_id: e,
				width: t.width,
				height: t.height,
				action: t.action,
				element: i
			}, this.values[e] = t)
		}, x.prototype.create = function(t, i) {
			return {
				tag_id: t.tag_id,
				index: "0",
				width: t.width,
				height: t.height,
				element: i
			}
		}, a = new x, k.prototype.watch = function() {
			"iframe" == document.activeElement.tagName.toLowerCase() && this.click_capture()
		}, k.prototype.inject = function() {
			var i = this;
			i.watch_timer = null, clearInterval(i.watch_timer), i.parent.addEventListener("mouseover", function(t) {
				i.clicked || (i.watch_timer = setInterval(function(t) {
					i.watch()
				}, 200))
			}, !1), i.parent.addEventListener("mouseout", function(t) {
				clearInterval(i.watch_timer), i.watch_timer = null
			}, !1), i.parent.addEventListener("click", function(t) {
				i.click_capture()
			}, !1)
		}, k.prototype.click_capture = function() {
			this.clicked || (this.clicked = !0, clearInterval(this.watch_timer), this.watch_timer = null, (new Image).src = this.beacon_url)
		}, n = k, E.prototype.watch = function() {
			document.activeElement == this.parent && this.click_capture()
		}, E.prototype.inject = function() {
			var i = this;
			i.watch_timer = null, clearInterval(i.watch_timer), setTimeout(function(t) {
				document.activeElement !== i.parent && (i.watch_timer = setInterval(function(t) {
					i.watch()
				}, 1e3))
			}, 1e3), i.parent.contentWindow.document.addEventListener("click", function(t) {
				i.click_capture()
			}, !1)
		}, E.prototype.click_capture = function() {
			this.clicked || (this.clicked = !0, clearInterval(this.watch_timer), this.watch_timer = null, (new Image).src = this.beacon_url)
		}, r = E, L.prototype.render = function() {
			var t = I(this.spot.width, this.spot.height);
			z(t, this.spot.element, this.tag.tag_text), A(this.tag.imp_url), C(t, this.tag.click_url, this.tag.is_pc)
		}, e = L, P.prototype.render = function() {
			var t, i = this.spot.element,
				e = this.tag.width,
				n = (n = ((n = i).parentNode || n).getBoundingClientRect().width, t = Math.min(window.innerWidth, window.innerHeight), Math.min(n, t)),
				n = (t = e < n ? S(i, n / e, this.tag.width, this.tag.height) : (f(i, this.tag.width, this.tag.height), i), I(this.spot.width, this.spot.height));
			z(n, t, this.tag.tag_text), A(this.tag.imp_url), C(n, this.tag.click_url, this.tag.is_pc)
		}, s = P, j.prototype.change_layout = function() {
			this.wrapper.setAttribute("style", "min-height:100vh;height:100%;width:100%;margin:0;padding:0;"), this.main.setAttribute("style", "max-width:100%;width:auto;");
			var t = this.main.style;
			switch (this.position) {
				case "left":
					t.setProperty("margin-left", this.width + "px");
					break;
				case "right":
					t.setProperty("margin-right", this.width + "px");
					break;
				case "top":
					t.setProperty("margin-top", this.height + 20 + "px");
					break;
				case "bottom":
					t.setProperty("margin-bottom", this.height + 20 + "px")
			}
			for (; document.body.firstChild;) this.main.appendChild(document.body.firstChild);
			this.wrapper.appendChild(this.main), document.body.appendChild(this.wrapper)
		}, j.prototype.build_container = function() {
			var t = "admax-official-overlap-close",
				i = this.container.style,
				e = (i.setProperty("position", "fixed"), i.setProperty("height", this.height + "px"), document.createElement("style")),
				n = ("left" === this.position || "right" === this.position ? (i.setProperty("width", this.width + "px"), i.setProperty("text-align", "left"), "left" === this.position ? (i.setProperty("bottom", "0"), i.setProperty("left", "0")) : "right" === this.position && (i.setProperty("bottom", "0"), i.setProperty("right", "0")), e.textContent = "." + t + "{box-sizing:border-box;display:inline-block;background:rgba(255,255,255,.75);width:30px;height:30px;position:relative;border:1px solid rgba(0,0,0,.1);cursor:pointer;margin-top: -36px;}." + t + ":hover{opacity:.5;}." + t + " span::before,." + t + ' span::after{display:block;content:"";position:absolute;top:50%;left:50%;width:84%;height:2%;margin:-1% 0 0 -42%;background:rgb(0,0,0);}.' + t + " span::before{transform:rotate(-45deg);}." + t + " span::after{transform:rotate(45deg);}") : "top" !== this.position && "bottom" !== this.position || (i.setProperty("width", "100%"), i.setProperty("background", "rgba(0,0,0,.75)"), i.setProperty("left", "0"), i.setProperty("padding", "10px 0"), i.setProperty("text-align", "center"), "top" === this.position ? i.setProperty("top", "0") : "bottom" === this.position && i.setProperty("bottom", "0"), e.textContent = "." + t + "{box-sizing:border-box;display:block;background:rgba(0,0,0,.25);width:30px;height:30px;position:absolute;border:1px solid rgba(255,255,255,.5);cursor:pointer;top:10px;right:10px;}." + t + ":hover{opacity:.5;}." + t + " span::before,." + t + ' span::after{display:block;content:"";position:absolute;top:50%;left:50%;width:84%;height:2%;margin:-1% 0 0 -42%;background:rgb(255,255,255,.5);}.' + t + " span::before{transform:rotate(-45deg);}." + t + " span::after{transform:rotate(45deg);}"), document.head.appendChild(e), this.button.setAttribute("class", t), this),
				e = (this.button.addEventListener("click", function(t) {
					i.setProperty("display", "none"), n.main.style.setProperty("margin", "0")
				}, !1), document.createElement("span"));
			this.button.appendChild(e), this.container.appendChild(this.button), this.container.appendChild(this.spot.element)
		}, j.prototype.render = function() {
			this.change_layout(), this.build_container(), this.wrapper.appendChild(this.container);
			var t = I(this.width, this.height);
			z(t, this.spot.element, this.tag.tag_text), A(this.tag.imp_url), C(t, this.tag.click_url, this.tag.is_pc)
		}, d = j, R.prototype.request_impression_beacon = function() {
			var t = this.tag.imp_url;
			t && ((new Image).src = t)
		}, R.prototype.set_click_handler = function(t) {
			var i = this.tag.click_url;
			i && new(this.tag.is_pc ? n : r)(t, i).inject()
		}, R.prototype.create_ads = function(t) {
			var i = (i = (i = "") + "position:fixed;" + ("width:" + this.ads_width + "px;")) + ("height:" + this.ads_height + "px;");
			this.ads_div.setAttribute("style", i = (i = (i = i + "display:block;" + "z-index:2147483647;") + "left:50%;" + "opacity:1px;") + "overflow:hidden;" + "visible:hidden;"), document.body.appendChild(this.ads_div), this.inner_iframe.setAttribute("style", "width:100%;height:100%;"), this.inner_iframe.setAttribute("width", "100%"), this.inner_iframe.setAttribute("height", "100%"), this.inner_iframe.setAttribute("marginwidth", "0"), this.inner_iframe.setAttribute("hspace", "0"), this.inner_iframe.setAttribute("vspace", "0"), this.inner_iframe.setAttribute("frameborder", "0"), this.inner_iframe.setAttribute("border", "no"), this.inner_iframe.setAttribute("scrolling", "no"), this.inner_iframe.setAttribute("allowTransparency", "true"), z(this.inner_iframe, this.ads_div, t)
		}, R.prototype.set_fixed = function() {
			var t, i = this.ads_div.getBoundingClientRect().height,
				e = document.documentElement,
				n = !1;
			n = e.clientHeight !== e.scrollHeight && (t = window.pageYOffset + window.innerHeight, e.scrollHeight - i < t), this.ads_style.marginLeft = "-" + this.zoom * this.ads_width / 2 + "px", n ? (this.ads_style.top = "0px", this.ads_style.bottom = "") : (this.ads_style.top = "", e = this.ads_height - this.ads_height / this.zoom, this.ads_style.bottom = e + "0px")
		}, R.prototype.resize = function() {
			var t = window.innerWidth < window.innerHeight,
				t = (this.zoom = t ? window.innerWidth / this.ads_width : window.innerHeight / this.ads_width, "scale(" + this.zoom + "," + this.zoom + ")");
			this.ads_style.transform = t, this.ads_style.transformOrigin = "0 0", this.ads_style.MozTransform = t, this.ads_style.MozTransformOrigin = "0 0"
		}, R.prototype.init_event = function() {
			var i = this;
			window.addEventListener("scroll", function(t) {
				i.set_fixed()
			}, !1), window.addEventListener("resize", function(t) {
				i.resize(), i.set_fixed()
			}, !1)
		}, R.prototype.render = function() {
			this.create_ads(this.tag.tag_text), this.request_impression_beacon(), this.set_click_handler(this.inner_iframe), this.init_event(), this.resize(), this.set_fixed(), this.ads_style.visibility = "visible"
		}, h = R, H.prototype.request_impression_beacon = function() {
			var t = this.tag.imp_url;
			t && ((new Image).src = t)
		}, H.prototype.set_click_handler = function(t) {
			var i = this.tag.click_url;
			i && new(this.tag.is_pc ? n : r)(t, i).inject()
		}, H.prototype.show_ads = function() {
			switch (this.sticky_sidebar) {
				case "left":
					this.ads_style.left = this.show_postion + "px";
					break;
				case "right":
					this.ads_style.right = this.show_postion + "px"
			}
		}, H.prototype.hide_ads = function() {
			switch (this.sticky_sidebar) {
				case "left":
					this.ads_style.transition = "left 1s linear", this.ads_style.left = this.hide_postion + "px";
					break;
				case "right":
					this.ads_style.transition = "right 1s linear", this.ads_style.right = this.hide_postion + "px"
			}
		}, H.prototype.create_ads = function() {
			this.ads_style.position = "fixed", this.ads_style.width = this.ads_width + "px", this.ads_style.height = this.ads_height_with_margin + "px", this.ads_style.display = "block", this.ads_style.margin = "0px", this.ads_style.padding = "0px", this.ads_style.zIndex = "2147483647", this.ads_style.border = "none";
			var t = document.createElement("a"),
				i = t.style;
			switch (i.position = "absolute", this.sticky_sidebar) {
				case "left":
					i.right = "-25px";
					break;
				case "right":
					i.left = "-25px"
			}
			i.bottom = "-25px", i.width = "50px", i.height = "50px", i.padding = "5px", i.textDecoration = "none", i.fontSize = "40px", i.lineHeight = "50px", i.color = "#FFF", i.background = "#000", i.border = "1px solid #333", i.borderRadius = "56.25px", i.cursor = "pointer", i.textAlign = "center", i.boxSizing = "content-box", t.textContent = "X";
			var e = this;
			t.addEventListener("click", function(t) {
				e.ads_div.parentNode.removeChild(e.ads_div)
			}), this.ads_div.appendChild(t), document.body.appendChild(this.ads_div), this.inner_iframe.setAttribute("style", "width:100%;height:100%;border-radius:50px;background-color:#000;padding-top:50px;box-sizing:content-box;"), this.inner_iframe.setAttribute("width", "100%"), this.inner_iframe.setAttribute("height", "100%"), this.inner_iframe.setAttribute("marginwidth", "0"), this.inner_iframe.setAttribute("hspace", "0"), this.inner_iframe.setAttribute("vspace", "0"), this.inner_iframe.setAttribute("frameborder", "0"), this.inner_iframe.setAttribute("border", "no"), this.inner_iframe.setAttribute("scrolling", "no"), this.inner_iframe.setAttribute("allowTransparency", "true")
		}, H.prototype.render_ads = function() {
			this.rendered || (this.rendered = !0, z(this.inner_iframe, this.ads_div, this.tag.tag_text), this.request_impression_beacon(), this.set_click_handler(this.inner_iframe))
		}, H.prototype.set_fixed = function() {
			900 < this.scroll_trigger_point && window.scrollY < 600 ? this.hide_ads() : (this.show_ads(), this.render_ads())
		}, H.prototype.resize = function() {
			switch (i = window.innerWidth < window.innerHeight ? Math.max(window.innerWidth / 2, 180) : Math.max(window.innerHeight / 2, 180), this.zoom = i / this.ads_width, this.sticky_sidebar) {
				case "left":
					this.show_postion = 0, this.hide_postion = (this.ads_width + 40) * this.zoom * -1;
					var t = "0 0";
					break;
				case "right":
					this.show_postion = 0, this.hide_postion = (this.ads_width + 40) * this.zoom * -1;
					t = "top right"
			}
			var i = "scale(" + this.zoom + "," + this.zoom + ")",
				e = 165 - (this.ads_height_with_margin - this.ads_height_with_margin * this.zoom);
			this.ads_style.transform = i, this.ads_style.transformOrigin = t, this.ads_style.MozTransform = i, this.ads_style.MozTransformOrigin = t, this.ads_style.bottom = e + "px"
		}, H.prototype.init_event = function() {
			var i = this;
			window.addEventListener("scroll", function(t) {
				i.set_fixed()
			}, !1), window.addEventListener("resize", function(t) {
				i.resize(), i.set_fixed()
			}, !1)
		}, H.prototype.render = function() {
			this.create_ads(), this.init_event(), this.resize(), this.set_fixed()
		}, p = H, q.prototype.render_sync = function(t) {
			var i;
			(i = (t = t).img_urls) && i.forEach(function(t) {
				(new Image).src = t
			}), (i = t.script_urls) && i.forEach(function(t) {
				m(t)
			})
		}, q.prototype.request_async_tag = function(t, i, e) {
			var n, r;
			this.banner_elements = i, this.switch_elements = e, i = t, o.in_iframe, n = 0, r = [], i.forEach(function(t) {
				var i;
				!t.admax_id || 8 < n || (n++, i = t.type, r.push("tid=" + t.admax_id), r.push("t=" + i.substring(0, 1)))
			}), i = "", m((i += c("/t")) + ("?" + r.join("&")) + "&callback=__admax_render__.request&sc=" + l() + "&rand=" + Math.floor(99999999999 * Math.random()))
		}, q.prototype.get_element = function(t) {
			var i = null;
			return "b" === t.type ? i = this.banner_elements : "s" === t.type && (i = this.switch_elements), !i || void 0 === (i = i.pop(t.admax_id)) ? null : i
		}, q.prototype.request = function(t) {
			var e = this;
			t.forEach(function(t) {
				try {
					var i;
					"b" === t.type || "s" === t.type ? (i = e.get_element(t)) && ("s" === t.type && f(i, t.width, t.height), e.request_banner(t, i)) : "a" === t.type ? e.request_action(t) : "o" === t.type && e.request_overlay(t)
				} catch (t) {}
			})
		}, q.prototype.request_banner = function(t, i) {
			t = a.add(t, i);
			t && w(o, t)
		}, q.prototype.request_action = function(t) {
			var i, e, n, r = t.action;
			r && (i = void 0, "interstitial" === r ? (i = a.add(t)) && (r = i, g((e = o).in_iframe, e.test_mode)) && (window.ninja_interstitial_ads = !0, n = "", n = (n = (n = (n = (n = (n = (n = (n += c("/b/")) + r.tag_id) + ("?sid=" + r.spot_id)) + "&url=" + e.url) + "&referrer=" + e.referrer) + "&du=" + e.document_url) + "&if=" + e.in_iframe) + "&ic=" + e.in_cross_domain + "&olp=action&fv=false", e.browser_id && (n += "&bid=" + e.browser_id), e.chikayo_id && (n += "&cid=" + e.chikayo_id), e.imuid && (n += "&imuid=" + e.imuid), m(n = (n = (n = (n += "&callback=window.__admax_render__.render_interstitial") + ("&sc=" + l())) + ("&tm=" + e.test_mode)) + ("&rand=" + Math.floor(99999999999 * Math.random())))) : (r = M(t.width, t.height), (i = a.add(t, r)) && b(o, i)))
		}, q.prototype.request_overlay = function(t) {
			var i, e;
			t = t, (i = o).in_iframe || (e = "", e = (e = (e = (e = (e = (e += c("/ol/")) + t.tag_id) + ("?url=" + i.url)) + "&referrer=" + i.referrer) + "&du=" + i.document_url) + "&if=" + i.in_iframe, i.browser_id && (e += "&bid=" + i.browser_id), i.chikayo_id && (e += "&cid=" + i.chikayo_id), i.imuid && (e += "&imuid=" + i.imuid), m(e = (e = (e = (e += "&callback=window.__admax_render__.render_overlay") + ("&sc=" + l())) + ("&tm=" + i.test_mode)) + ("&rand=" + Math.floor(99999999999 * Math.random()))))
		}, q.prototype.request_adnet = function() {
			var t, i, e = _();
			e && (t = o, i = "", i = (i = (i = (i = (i = (i += c("/net/")) + e.tag_id) + ("?rid=" + e.request_id)) + "&url=" + t.url) + "&referrer=" + t.referrer) + "&du=" + t.document_url, t.browser_id && (i += "&bid=" + t.browser_id), t.chikayo_id && (i += "&cid=" + t.chikayo_id), i = (i = (i = (i += "&callback=window.__admax_render__.render_adnet") + "&sc=" + l()) + "&tm=" + t.test_mode) + "&rand=" + Math.floor(99999999999 * Math.random()), m(i))
		}, q.prototype.render_banner = function(t) {
			var i = a.get(t.spot_id);
			i && new(t.responsive ? s : e)(t, i).render()
		}, q.prototype.render_action = function(t) {
			var i, e = a.get(t.spot_id);
			e && e.action && "sticky" === (i = e.action.split(".", 2))[0] && new d(t, e, i[1]).render()
		}, q.prototype.render_interstitial = function(t) {
			var i, e;
			(t.is_pc || o.optimized_website) && (i = a.get(t.spot_id)) && i.action && (i = t, t = new URL(window.location.href).hostname, i = O(i), Array.prototype.slice.call(document.querySelectorAll("a")).filter(T(t)).forEach((e = i, function(t) {
				var i = t.href;
				t.addEventListener("click", function(t) {
					return t.preventDefault(), e(i), !1
				}, !1)
			})))
		}, q.prototype.render_overlay = function(t) {
			var i = t.sticky_sidebar;
			i ? o.in_iframe || void 0 !== window.ninja_sticky_sidebar_ads || (window.ninja_sticky_sidebar_ads = !0, new p(t, i).render()) : o.in_iframe || void 0 !== window.ninja_overlay_ads || (window.ninja_overlay_ads = !0, o.exists_overlay) || new h(t).render()
		}, q.prototype.render_adnet = function(t) {
			var i = _();
			i && (t.is_pc = !0, t.in_view = !1, i = a.create(t, i.element), new e(t, i).render())
		}, new q);

		function c(t) {
			return "https://adm.shinobi.jp" + t
		}

		function l() {
			return "https:" === document.location.protocol ? "1" : "0"
		}

		function t() {
			return "#adm_test_mode" === document.location.hash ? "1" : "0"
		}

		function m(t, i) {
			var e = document.createElement("script"),
				t = (e.type = "text/javascript", e.src = t, i && (e.onload = i), document.getElementsByTagName("head")[0]);
			t.insertBefore(e, t.firstChild)
		}

		function i() {
			try {
				var t;
				if ("localStorage" in window && null !== window.localStorage) return (t = window.localStorage.getItem("__adm_uid")) || (t = function() {
					for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""), i = 0, e = t.length; i < e; i++) switch (t[i]) {
						case "x":
							t[i] = Math.floor(16 * Math.random()).toString(16);
							break;
						case "y":
							t[i] = (Math.floor(4 * Math.random()) + 8).toString(16)
					}
					return t.join("")
				}(), window.localStorage.setItem("__adm_uid", t)), t
			} catch (t) {}
			return null
		}

		function u() {
			var r;
			r = "https://dmp.im-apps.net/sdk/im-uid.js", new Promise((t, i) => {
				var e = document.createElement("script"),
					n = (e.type = "text/javascript", e.src = r, e.async = !0, e.onload = () => t(e), e.onerror = () => i(new Error("Failed to load script: " + r)), document.getElementsByTagName("head")[0]);
				n.insertBefore(e, n.firstChild)
			}).then(() => {
				window.IMUIDRequest = window.IMUIDRequest || [], IMUIDRequest.push({
					customerId: 1021172,
					callback: t => {
						"localStorage" in window && null !== window.localStorage && (t.uid ? window.localStorage.setItem("__adm_imuid", t.uid) : window.localStorage.removeItem("__adm_imuid"))
					},
					callbackTimeout: 1e3
				})
			})
		}

		function _() {
			var t, i, e = document.getElementById("admax-net");
			return e && (t = e.getAttribute("data-admax-rid"), i = e.getAttribute("data-admax-id"), t) && i ? {
				request_id: t,
				tag_id: i,
				element: e
			} : null
		}

		function f(t, i, e) {
			t.style.width = i + "px", t.style.height = e + "px"
		}

		function g(t, i) {
			return !t && void 0 === window.ninja_interstitial_ads && ("1" === i || 2 !== ("; " + document.cookie).split("; ninja_adm_interstitial=").length)
		}

		function w(t, i) {
			var e = function(t) {
					try {
						for (var i = t, e = 0; e < 10; e++) {
							var n = window.getComputedStyle(i),
								r = n.position;
							if ("relative" == r) {
								if (0 != parseInt(n.top, 10) || 0 != parseInt(n.left, 10) || 0 != parseInt(n.bottom, 10) || 0 != parseInt(n.right, 10)) return r
							} else if ("absolute" == r || "fixed" == r) return r;
							i = i.parentNode
						}
					} catch (t) {}
					return ""
				}(i.element),
				n = function(t, i) {
					if (!i) try {
						var e = t.getBoundingClientRect(),
							n = document.body.getBoundingClientRect(),
							r = e.x - n.x,
							o = e.y - n.y,
							a = r + e.width,
							s = o + e.height;
						if (0 <= r && 0 <= o && a <= window.innerWidth && s <= window.innerHeight) return !0
					} catch (t) {}
					return !1
				}(i.element),
				r = "",
				r = (r = (r = (r = (r = (r = (r = (r = (r += c("/b/")) + i.tag_id) + ("?sid=" + i.spot_id)) + ("&url=" + t.url)) + ("&referrer=" + t.referrer)) + ("&du=" + t.document_url)) + ("&if=" + t.in_iframe)) + ("&ic=" + t.in_cross_domain)) + ("&olp=" + e) + ("&fv=" + n);
			t.browser_id && (r += "&bid=" + t.browser_id), t.chikayo_id && (r += "&cid=" + t.chikayo_id), t.imuid && (r += "&imuid=" + t.imuid), m(r = (r = (r = (r += "&callback=window.__admax_render__.render_banner") + ("&sc=" + l())) + ("&tm=" + t.test_mode)) + ("&rand=" + Math.floor(99999999999 * Math.random())))
		}

		function b(t, i) {
			var e;
			t.in_iframe || void 0 !== window.ninja_action_ads || (window.ninja_action_ads = !0, e = "", e = (e = (e = (e = (e = (e = (e = (e += c("/b/")) + i.tag_id) + ("?sid=" + i.spot_id)) + "&url=" + t.url) + "&referrer=" + t.referrer) + "&du=" + t.document_url) + "&if=" + t.in_iframe) + "&ic=" + t.in_cross_domain + "&olp=action&fv=false", t.browser_id && (e += "&bid=" + t.browser_id), t.chikayo_id && (e += "&cid=" + t.chikayo_id), t.imuid && (e += "&imuid=" + t.imuid), m(e = (e = (e = (e += "&callback=window.__admax_render__.render_action") + ("&sc=" + l())) + ("&tm=" + t.test_mode)) + ("&rand=" + Math.floor(99999999999 * Math.random()))))
		}

		function y() {
			if (function() {
					if (void 0 !== window.nend_params) try {
						if (2 === window.nend_params.type) return 1
					} catch (t) {}
				}()) return !0;
			if (function() {
					if (void 0 !== window.imobile_type) try {
						if ("overlay" === window.imobile_type) return 1
					} catch (t) {}
				}()) return !0;
			if (document.getElementById("ub_overlay")) return !0;
			var t, i = document.getElementsByTagName("script");
			for (t in i) {
				var e = i[t].src;
				if (void 0 !== e) {
					if (e.match(/i\.socdm\.com\/sdk\/js\/adg-script-loader\.js\?.*displayid=9/)) return !!1;
					if (e.match(/http:\/\/parts\.blog\.livedoor\.jp\/js\/*/)) return !!1
				}
			}
			return !1
		}

		function v() {
			this.in_iframe = !1, this.in_cross_domain = !1, this.browser_id = i(), this.chikayo_id = function() {
				try {
					if ("localStorage" in window && null !== window.localStorage) return window.localStorage.getItem("__limE_sodA_Value___")
				} catch (t) {}
				return null
			}(), this.imuid = function() {
				try {
					if ("localStorage" in window && null !== window.localStorage) return window.localStorage.getItem("__adm_imuid")
				} catch (t) {}
				return null
			}(), this.test_mode = t(), this.optimized_website = function() {
				try {
					var t;
					for (t of document.querySelector("meta[name='viewport']").getAttribute("content").split(",")) {
						var i = t.split("=", 2),
							e = i[0].trim(),
							n = i[1].trim();
						if ("width" === e && "device-width" === n) return !0;
						if ("initial-scale" === e && 1 == +n) return !0
					}
					return !1
				} catch (t) {
					return !1
				}
			}(), this.exists_overlay = !1, this.document_url = "", this.url = "", this.referrer = "", void 0 === window.admax_net_mode ? this.init_default_browser() : this.init_admax_net_browser()
		}

		function x() {
			this.values = {}, this.spot_ids = [];
			for (var t = 0; t < 8; t++) this.spot_ids.push(Math.random().toString(36).substr(2, 9))
		}

		function k(t, i) {
			this.parent = t, this.beacon_url = i, this.clicked = !1, this.watch_timer = null
		}

		function E(t, i) {
			this.parent = t, this.beacon_url = i, this.clicked = !1, this.watch_timer = null
		}

		function A(t) {
			t && ((new Image).src = t)
		}

		function C(t, i, e) {
			i && new(e ? n : r)(t, i).inject()
		}

		function z(t, i, e) {
			var n = "<!DOCTYPE html><html><head><title></title></head>",
				e = (n = (n += '<style type="text/css">html,body{width:100%;height:100%;margin:0;padding:0;}</style><body>') + e + "</body></html>", i.appendChild(t), t.contentWindow.document);
			e.open(), e.write(n), e.close()
		}

		function I(t, i) {
			var e = document.createElement("iframe");
			return e.setAttribute("width", t), e.setAttribute("height", i), e.setAttribute("scrolling", "no"), e.setAttribute("frameborder", "0"), e.setAttribute("allowTransparency", "true"), e.setAttribute("style", "display:inline-block;vertical-align: bottom;"), e
		}

		function M(t, i) {
			var e = document.createElement("div"),
				n = e.style;
			return n.setProperty("width", t + "px"), n.setProperty("height", i + "px"), n.setProperty("display", "inline-block"), e
		}

		function S(t, i, e, n) {
			var r = n * i,
				o = t.style,
				r = (o.width = e * i + "px", o.height = r + "px", o = i, e = M(r = e, i = n), (n = e.style).width = r + "px", n.height = i + "px", n.transform = "scale(" + o + "," + o + ")", n.transformOrigin = "0 0", e);
			return t.appendChild(r), r
		}

		function L(t, i) {
			this.tag = t, this.spot = i
		}

		function P(t, i) {
			this.tag = t, this.spot = i
		}

		function j(t, i, e) {
			this.tag = t, this.spot = i, this.width = i.width, this.height = i.height, this.position = e, this.wrapper = document.createElement("div"), this.main = document.createElement("div"), this.container = document.createElement("div"), this.button = document.createElement("div")
		}

		function T(r) {
			var o = !!document.querySelector('script[src^="https://parts.blog.livedoor.jp/js/lite2/main.js"]');
			return function(t) {
				try {
					var i, e = new URL(t.href);
					return r !== e.hostname ? !1 : !((i = t.target) && "_self" !== i || o && "title" === (n = t).dataset.gaClickcount && (n = n.parentNode) && "h1" === n.tagName.toLowerCase() && n.classList.contains("blog-title"))
				} catch (t) {
					return !1
				}
				var n
			}
		}

		function B(t, i) {
			var e;
			(e = document.createElement("iframe")).setAttribute("frameborder", "0"), e.setAttribute("width", "0"), e.setAttribute("height", "0"), e.setAttribute("scrolling", "no"), e.setAttribute("style", "display:block;height:0;overflow:hidden;"), z(e, i, '<link rel="prerender" href="' + t + '"><link rel="prefetch" href="' + t + '">')
		}

		function U(t) {
			return t * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100
		}

		function W(t) {
			return t * Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100
		}

		function N(i, e, n, r) {
			return function() {
				var t = window.innerWidth < window.innerHeight ? window.innerWidth * r * .01 / e : (window.innerHeight - (t = 16, Math.min(U(t), W(t)))) * r * .01 / n;
				i.style.setProperty("transform", "scale(" + t + "," + t + ")")
			}
		}

		function O(f) {
			return function(t) {
				m = f.width, u = f.height;
				var i, e, n, r, o, a, s, d, h, p, c, l = f.is_pc ? 1920 === m && 1080 === u ? {
						static: {
							container: {
								width: (l = 70) + "vw !important",
								max_width: "min(" + l + "vh / " + u + " * " + m + ", " + m + "px) !important",
								height: "calc(" + l + "vw / " + m + " * " + u + ") !important",
								max_height: "min(" + l + "vh, " + u + "px) !important"
							},
							ads: {
								width: m + "px !important",
								height: u + "px !important"
							}
						}
					} : {
						static: {
							container: {
								width: m + "px !important",
								height: u + "px !important"
							}
						}
					} : 300 === m && 250 === u || 320 === m && 480 === u || 1920 === m && 1080 === u ? {
						ratio: l = 1920 === m ? 100 : 95,
						responsive: {
							ads: {
								top: "calc(50% + 8vmin - " + u / 2 + "px) !important",
								left: "calc(50% - " + m / 2 + "px) !important",
								width: m + "px !important",
								height: u + "px !important"
							}
						}
					} : 1080 === m && 1920 === u ? {
						ratio: l = 95,
						headless: {
							container: {
								top: "calc(50% - " + u / 2 + "px) !important",
								left: "calc(50% - " + m / 2 + "px) !important",
								width: m + "px !important",
								height: u + "px !important"
							}
						}
					} : {
						static: {
							container: {
								width: m + "px !important",
								height: u + "px !important"
							}
						}
					},
					m = (l.static ? (_ = function(t) {
						var i, e = document.createElement("ins"),
							n = document.createElement("div"),
							r = document.createElement("div"),
							o = document.createElement("div"),
							a = (e.setAttribute("style", "display:flex !important;align-items:center !important;justify-content:center !important;position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;z-index:2147483647 !important;width:100% !important;height:100% !important;margin:0 !important;padding:0 !important;border:0 !important;background:rgba(52,58,65,.7) !important;-webkit-backdrop-filter:blur(15px) !important;backdrop-filter:blur(15px) !important;"), t.static.container),
							s = "display:block !important;position:relative !important;box-sizing:content-box !important;margin:0 !important;padding:60px 15px 15px !important;border:0 !important;border-radius:8px !important;background:#fff !important;";
						a.width && (s += "width:" + a.width + ";"), a.max_width && (s += "max-width:" + a.max_width + ";"), a.height && (s += "height:" + a.height + ";"), a.max_height && (s += "max-height:" + a.max_height + ";"), n.setAttribute("style", s), r.setAttribute("style", "display:block !important;position:absolute !important;top:0 !important;left:0 !important;box-sizing:border-box !important;width:100% !important;height:60px !important;margin:0 !important;padding:15px 0 !important;border:0 !important;color:#5f6368 !important;font:normal 18px/30px 'Roboto', arial, sans-serif !important;text-align:center !important;vertical-align:middle !important;"), r.innerText = "Ad", o.setAttribute("style", "display:block !important;position:absolute !important;top:15px !important;right:15px !important;width:30px !important;height:30px !important;margin:0 !important;padding:0 !important;border:0 !important;background:#424242 !important;cursor:pointer !important;"), o.innerHTML = '<svg viewBox="0 0 48 48" fill="#fff"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>', n.appendChild(r), n.appendChild(o);
						(a = document.createElement("div")).setAttribute("style", "display:block !important;overflow:hidden !important;width:100% !important;height:100% !important;margin:0 !important;padding:0 !important;border:0 !important;background:#fff;box-shadow:0px 7.5px 15px rgba(0,0,0,.7) !important;");
						var s = t.static.ads,
							t = void 0;
						return s ? (t = a, i = document.createElement("div"), s = "width:" + s.width + ";height:" + s.height + ";", i.setAttribute("style", s), t.appendChild(i), n.appendChild(t)) : n.appendChild(i = a), e.appendChild(n), {
							wrapper: e,
							container: n,
							sponsor: r,
							button: o,
							parent: t,
							ads: i
						}
					}(l)).parent && (d = _.parent, h = _.ads, p = f.width, e = function() {
						var t = d.getBoundingClientRect().width / p;
						h.style.setProperty("transform", "scale(" + t + "," + t + ")"), h.style.setProperty("transform-origin", "0 0")
					}) : l.responsive ? i = N((_ = function(t) {
						var i = document.createElement("ins"),
							e = document.createElement("div"),
							n = document.createElement("div"),
							r = document.createElement("div"),
							o = document.createElement("div");
						i.setAttribute("style", "display:block !important;position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;z-index:2147483647 !important;width:100% !important;height:100% !important;margin:0 !important;padding:0 !important;border:0 !important;background:rgba(52,58,65,.7) !important;-webkit-backdrop-filter:blur(15px) !important;backdrop-filter:blur(15px) !important;"), e.setAttribute("style", "display:block !important;position:absolute !important;top:0 !important;left:0 !important;box-sizing:border-box !important;width:100% !important;height:16vmin !important;margin:0 !important;padding:4vmin 0 !important;border:0 !important;background:#424242 !important;"), n.setAttribute("style", "display:block !important;width:100% !important;height:8vmin !important;margin:0 !important;padding:0 !important;border:0 !important;color:#fff !important;font:normal 5vmin/8vmin 'Roboto', arial, sans-serif !important;text-align:center !important;vertical-align:middle !important;"), n.innerText = "Ad", r.setAttribute("style", "display:block !important;position:absolute !important;top:4vmin !important;right:4vmin !important;width:8vmin !important;height:8vmin !important;margin:0 !important;padding:0 !important;border:0 !important;cursor:pointer !important;"), r.innerHTML = '<svg viewBox="0 0 48 48" fill="#fff"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>';
						t = "display:block !important;position:absolute !important;margin:0 !important;padding:0 !important;border:0 !important;box-shadow:0px 7.5px 15px rgba(0,0,0,.7) !important;background:#fff;top:" + (t = t.responsive.ads).top + ";left:" + t.left + ";width:" + t.width + ";height:" + t.height + ";";
						return o.setAttribute("style", t), e.appendChild(n), e.appendChild(r), i.appendChild(e), i.appendChild(o), {
							wrapper: i,
							container: e,
							sponsor: n,
							button: r,
							ads: o
						}
					}(l)).ads, f.width, f.height, l.ratio) : l.headless && (_ = function(t) {
						var i = document.createElement("ins"),
							e = document.createElement("div"),
							n = document.createElement("div"),
							r = document.createElement("div");
						i.setAttribute("style", "display:block !important;position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;z-index:2147483647 !important;width:100% !important;height:100% !important;margin:0 !important;padding:0 !important;border:0 !important;background:rgba(52,58,65,.7) !important;-webkit-backdrop-filter:blur(15px) !important;backdrop-filter:blur(15px) !important;");
						t = "display:block !important;position:absolute !important;margin:0 !important;padding:0 !important;border:0 !important;box-shadow:0px 7.5px 15px rgba(0,0,0,.7) !important;top:" + (t = t.headless.container).top + ";left:" + t.left + ";width:" + t.width + ";height:" + t.height + ";";
						return e.setAttribute("style", t), n.setAttribute("style", "display:block !important;position:absolute !important;top:2.5vmin !important;right:2.5vmin !important;width:30px !important;height:30px !important;margin:0 !important;padding:0 !important;border:0 !important;background:#424242 !important;cursor:pointer !important;transform-origin:100% 0% !important;"), n.innerHTML = '<svg viewBox="0 0 48 48" fill="#fff"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>', r.setAttribute("style", "display:block !important;width:100% !important;height:100% !important;margin:0 !important;padding:0 !important;border:0 !important;background:#fff;"), e.appendChild(n), e.appendChild(r), i.appendChild(e), {
							wrapper: i,
							container: e,
							button: n,
							ads: r
						}
					}(l), n = _.container, r = _.button, o = f.width, a = f.height, s = l.ratio, i = function() {
						var t = window.innerWidth < window.innerHeight ? window.innerWidth * s * .01 / o : window.innerHeight * s * .01 / a,
							i = 1 / t,
							i = "scale(" + i + "," + i + ")";
						n.style.setProperty("transform", "scale(" + t + "," + t + ")"), r.style.setProperty("transform", i)
					}), _.wrapper),
					u = _.button,
					_ = _.ads;
				u.addEventListener("click", (c = t, function(t) {
					window.location.href = c
				}), !1), i && (i(), window.addEventListener("resize", i, !1)), B(t, document.body);
				document.querySelector("html").insertAdjacentElement("beforeend", m), e && (e(), window.addEventListener("resize", e, !1));
				u = I(f.width, f.height);
				z(u, _, f.tag_text), A(f.imp_url), C(u, f.click_url, f.is_pc), document.cookie = "ninja_adm_interstitial=1; path=/; max-age=610"
			}
		}

		function R(t) {
			this.tag = t, this.ads_div = document.createElement("div"), this.ads_style = this.ads_div.style, this.inner_iframe = document.createElement("iframe"), this.ads_width = t.width, this.ads_height = t.height, this.zoom = 0
		}

		function H(t, i) {
			this.tag = t, this.sticky_sidebar = i, this.ads_div = document.createElement("div"), this.ads_style = this.ads_div.style, this.inner_iframe = document.createElement("iframe"), this.ads_width = t.width, this.ads_height = t.height, this.ads_height_with_margin = t.height + 40, this.rendered = !1, this.zoom = 0, this.hide_postion = 0, this.show_postion = 0, this.scroll_trigger_point = Math.max(document.body.clientHeight - window.innerHeight, 0)
		}

		function q() {
			this.banner_elements = null, this.switch_elements = null
		}
	}(),
	__admax_tag__ = function(n) {
		"use strict";
		var r;
		return void 0 !== window.__admax_tag__ ? window.__admax_tag__ : (t.prototype.pop = function(t) {
			var t = this.values[t];
			return void 0 === t || void 0 === (t = t.pop()) ? null : t
		}, r = t, new function() {
			var t, i, e = void 0 === window.admaxads || !(e = window.admaxads) instanceof Array ? null : e;
			e && (t = new r(o("admax-ads")), i = new r(o("admax-switch")), n.request_async_tag(e, t, i))
		});

		function o(t) {
			i = t, t = "div", e = [], document.getElementsByClassName ? (e = document.getElementsByClassName(i), e = Array.prototype.slice.call(e)) : document.getElementsByTagName(t).forEach(function(t) {
				t.className == i && e.push(t)
			});
			var i, e, n = {};
			return e.forEach(function(t) {
				var i = t.getAttribute("data-admax-id");
				i && (void 0 === n[i] && (n[i] = []), n[i].push(t))
			}), n
		}

		function t(t) {
			this.values = t
		}
	}(__admax_render__);