/*! For license information please see main.ac3fa029.js.LICENSE.txt */
(() => {
    var e = {
            508: (e, t, n) => {
                "use strict";
                var r = n(325),
                    i = n(195);

                function a() {
                    return a = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, a.apply(this, arguments)
                }

                function o(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }
                var s = n(322),
                    l = ["prefixCls", "className", "children", "mode", "visiable", "renderBar", "lineBar", "disable", "onDragEnd", "onDragging"];
                class c extends r.Component {
                    constructor(e) {
                        super(e), this.state = {
                            dragging: !1
                        }, this.warpper = void 0, this.paneNumber = void 0, this.startX = void 0, this.startY = void 0, this.move = void 0, this.target = void 0, this.boxWidth = void 0, this.boxHeight = void 0, this.preWidth = void 0, this.nextWidth = void 0, this.preHeight = void 0, this.nextHeight = void 0, this.preSize = void 0, this.nextSize = void 0, this.onDragEnd = this.onDragEnd.bind(this), this.onDragging = this.onDragging.bind(this)
                    }
                    componentWillUnmount() {
                        this.removeEvent()
                    }
                    removeEvent() {
                        window.removeEventListener("mousemove", this.onDragging, !1), window.removeEventListener("mouseup", this.onDragEnd, !1)
                    }
                    onMouseDown(e, t) {
                        if (t.target && this.warpper) {
                            this.paneNumber = e, this.startX = t.clientX, this.startY = t.clientY, this.move = !0, this.target = t.target.parentNode;
                            var n = this.target.previousElementSibling,
                                r = this.target.nextElementSibling;
                            this.boxWidth = this.warpper.clientWidth, this.boxHeight = this.warpper.clientHeight, n && (this.preWidth = n.clientWidth, this.preHeight = n.clientHeight), r && (this.nextWidth = r.clientWidth, this.nextHeight = r.clientHeight), window.addEventListener("mousemove", this.onDragging), window.addEventListener("mouseup", this.onDragEnd, !1), this.setState({
                                dragging: !0
                            })
                        }
                    }
                    onDragging(e) {
                        if (this.move) {
                            this.state.dragging || this.setState({
                                dragging: !0
                            });
                            var {
                                mode: t,
                                onDragging: n
                            } = this.props, r = this.target.nextElementSibling, i = this.target.previousElementSibling, a = e.clientX - this.startX, o = e.clientY - this.startY;
                            if (this.preSize = 0, this.nextSize = 0, "horizontal" === t) {
                                if (this.preSize = this.preWidth + a > -1 ? this.preWidth + a : 0, this.nextSize = this.nextWidth - a > -1 ? this.nextWidth - a : 0, 0 === this.preSize || 0 === this.nextSize) return;
                                this.preSize = 100 * (this.preSize / this.boxWidth >= 1 ? 1 : this.preSize / this.boxWidth), this.nextSize = 100 * (this.nextSize / this.boxWidth >= 1 ? 1 : this.nextSize / this.boxWidth), i && r && (i.style.width = this.preSize + "%", r.style.width = this.nextSize + "%")
                            }
                            if ("vertical" === t && this.preHeight + o > -1 && this.nextHeight - o > -1) {
                                if (this.preSize = this.preHeight + o > -1 ? this.preHeight + o : 0, this.nextSize = this.nextHeight - o > -1 ? this.nextHeight - o : 0, this.preSize = 100 * (this.preSize / this.boxHeight >= 1 ? 1 : this.preSize / this.boxHeight), this.nextSize = 100 * (this.nextSize / this.boxHeight >= 1 ? 1 : this.nextSize / this.boxHeight), 0 === this.preSize || 0 === this.nextSize) return;
                                i && r && (i.style.height = this.preSize + "%", r.style.height = this.nextSize + "%")
                            }
                            n && n(this.preSize, this.nextSize, this.paneNumber)
                        }
                    }
                    onDragEnd() {
                        var {
                            onDragEnd: e
                        } = this.props;
                        this.move = !1, e && e(this.preSize, this.nextSize, this.paneNumber), this.removeEvent(), this.setState({
                            dragging: !1
                        })
                    }
                    render() {
                        var e = this.props,
                            {
                                prefixCls: t,
                                className: n,
                                children: i,
                                mode: c,
                                visiable: u,
                                renderBar: h,
                                lineBar: d,
                                disable: f
                            } = e,
                            p = o(e, l),
                            {
                                dragging: v
                            } = this.state,
                            g = [t, n, t + "-" + c, v ? "dragging" : null].filter(Boolean).join(" ").trim(),
                            m = r.Children.toArray(i);
                        return (0, s.jsx)("div", a({
                            className: g
                        }, p, {
                            ref: e => this.warpper = e,
                            children: r.Children.map(m, ((e, n) => {
                                var i = Object.assign({}, e.props, {
                                        className: [t + "-pane", e.props.className].filter(Boolean).join(" ").trim(),
                                        style: a({}, e.props.style)
                                    }),
                                    o = !0 === u || u && u.includes(n + 1) || !1,
                                    l = {
                                        className: [t + "-bar", d ? t + "-line-bar" : null, d ? null : t + "-large-bar"].filter(Boolean).join(" ").trim()
                                    };
                                (!0 === f || f && f.includes(n + 1)) && (l.className = [l.className, f ? "disable" : null].filter(Boolean).join(" ").trim());
                                var c = null;
                                return 0 !== n && o && h ? c = h(a({}, l, {
                                    onMouseDown: this.onMouseDown.bind(this, n + 1)
                                })) : 0 !== n && o && (c = r.createElement("div", a({}, l), (0, s.jsx)("div", {
                                    onMouseDown: this.onMouseDown.bind(this, n + 1)
                                }))), (0, s.jsxs)(r.Fragment, {
                                    children: [c, r.cloneElement(e, a({}, i))]
                                }, n)
                            }))
                        }))
                    }
                }
                c.defaultProps = {
                    prefixCls: "w-split",
                    visiable: !0,
                    mode: "horizontal"
                };
                const u = document.createElement("template");
                u.innerHTML = '\n<style>\n:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n@keyframes octocat-wave {\n  0%, 100% { transform: rotate(0); }\n  20%, 60% { transform: rotate(-25deg); }\n  40%, 80% { transform: rotate(10deg); }\n}\n@media (max-width:500px) {\n  :host a:hover .octo-arm { animation: none; }\n  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n}\n:host svg {\n  z-index: 99;\n  position: fixed;\n  border: 0px;\n  top: 0px;\n}\n</style>\n<svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true">\n  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">\n    <g>\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>\n      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </g>\n  </a>\n</svg>\n';
                class h extends HTMLElement {
                    static get observedAttributes() {
                        return ["style", "z-index", "target", "height", "width", "href", "color", "fill", "position", "top", "left", "right", "bottom", "transform"]
                    }
                    constructor() {
                        super(), this.right = "0", this.shadow = this.attachShadow({
                            mode: "open"
                        }), this.shadow.appendChild(this.ownerDocument.importNode(u.content, !0)), this.update()
                    }
                    setAttr(e, t) {
                        const n = this.shadow.querySelector("svg");
                        /(href)/.test(e.toLocaleLowerCase()) ? n.lastElementChild.setAttribute("xlink:href", t) : /(color|fill)/.test(e.toLocaleLowerCase()) ? n.firstElementChild.style[e] = t : /(z-index|position|top|left|right|bottom|transform)/.test(e.toLocaleLowerCase()) ? n.style[e] = t : n.setAttribute(e, t)
                    }
                    update() {
                        [...this.getAttributeNames(), "right"].forEach((e => {
                            const t = this.getAttribute(e) || this[e] || "";
                            this.setAttr(e, t)
                        }))
                    }
                    attributeChangedCallback(e, t, n) {
                        t !== n && this.setAttr(e, n)
                    }
                }
                customElements.define("github-corners", h);
                var d = ["size", "fixed", "bottom", "zIndex", "className", "style", "bgColor", "color", "position"];

                function f(e) {
                    var {
                        size: t = 80,
                        fixed: n = !1,
                        bottom: r,
                        zIndex: i,
                        style: l,
                        bgColor: c = "#151513",
                        color: u = "#fff",
                        position: h = "right"
                    } = e, f = o(e, d), p = "left" === h ? {
                        left: 0,
                        right: "initial",
                        transform: "scale(-1, 1)"
                    } : {
                        right: 0,
                        left: "initial",
                        transform: "scale(1, 1)"
                    };
                    return r ? (p.bottom = 0, p.top = "initial", p.transform = "left" === h ? "scale(-1, -1)" : "scale(1, -1)") : (p.bottom = "initial", p.top = 0), (0, s.jsx)("github-corners", a({
                        target: "__blank",
                        width: t,
                        height: t,
                        href: e.href,
                        position: n ? "fixed" : "absolute",
                        "z-index": i,
                        style: l,
                        fill: c,
                        color: u
                    }, p, f))
                }
                var p = ["isArray", "start", "level", "className", "render"];

                function v(e) {
                    var {
                        isArray: t = !1,
                        start: n = !1,
                        level: r,
                        className: i,
                        render: l
                    } = e, c = o(e, p), u = t ? "[]" : "{}", h = "w-rjv-" + (t ? "brackets" : "curlybraces") + "-" + (n ? "start" : "end") + " " + (i || ""), d = "var(--w-rjv-" + (t ? "brackets" : "curlybraces") + "-color, #236a7c)";
                    if (l) {
                        var f = l(a({
                            isArray: t,
                            level: r,
                            className: h,
                            style: {
                                color: d
                            },
                            children: n ? u.charAt(0) : u.charAt(1)
                        }, c));
                        if (f) return f
                    }
                    return (0, s.jsx)(T, a({
                        color: d,
                        className: h
                    }, c, {
                        children: n ? u.charAt(0) : u.charAt(1)
                    }))
                }
                v.displayName = "JVR.Meta";
                var g = ["children", "style", "text", "onCopied", "render", "show"];

                function m(e) {
                    var {
                        style: t,
                        text: n = "",
                        onCopied: i,
                        render: l,
                        show: c
                    } = e, u = o(e, g);
                    if (!c) return null;
                    var [h, d] = (0, r.useState)(!1), f = a({}, t, {
                        cursor: "pointer",
                        verticalAlign: "middle",
                        marginLeft: 5
                    }), p = a({
                        height: "1em",
                        width: "1em",
                        fill: "var(--w-rjv-copied-color, currentColor)",
                        onClick: e => {
                            e.stopPropagation();
                            var t = JSON.stringify(n || "", ((e, t) => "bigint" === typeof t ? t.toString() : t), 2);
                            n === 1 / 0 && (t = 1 / 0), navigator.clipboard.writeText(t).then((() => {
                                i && i(t, n), d(!0);
                                var e = setTimeout((() => {
                                    d(!1), clearTimeout(e)
                                }), 3e3)
                            })).catch((e => {}))
                        },
                        style: f,
                        className: "w-rjv-copied"
                    }, u);
                    return l ? l(a({}, e, p)) : h ? (0, s.jsx)("svg", a({
                        viewBox: "0 0 32 36"
                    }, p, {
                        fill: "var(--w-rjv-copied-success-color, #28a745)",
                        children: (0, s.jsx)("path", {
                            d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,15.2249049 C29.1403264,13.8627542 29.9736597,13.1778155 30,13.1700887 C30,11.9705278 30,10.0804982 30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,26.1114493 L27.5,28.4926435 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M28.5589286,16 L32,19.6 L21.0160714,30.5382252 L13.5303571,24.2571429 L17.1303571,20.6571429 L21.0160714,24.5428571 L28.5589286,16 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"
                        })
                    })) : (0, s.jsx)("svg", a({
                        viewBox: "0 0 32 36"
                    }, p, {
                        children: (0, s.jsx)("path", {
                            d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,20 L30,20 L30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,29 L27.5,29 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M22.5,21.5 L22.5,16.5 L12.5,24 L22.5,31.5 L22.5,26.5 L32,26.5 L32,21.5 L22.5,21.5 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"
                        })
                    }))
                }
                m.displayName = "JVR.Copied";
                var y = ["children", "style"],
                    b = ["children", "length", "style"],
                    x = ["color", "style", "isURL", "href", "children"],
                    w = ["value", "parentValue", "setValue", "countInfo", "data", "keyName", "indentWidth", "isSet", "namespace", "renderKey", "components", "quotes", "level", "enableClipboard", "displayObjectSize", "displayDataTypes", "shortenTextAfterLength"],
                    j = ["children", "color", "fontSize", "opacity", "paddingRight", "style"],
                    S = e => (0, s.jsx)("div", a({}, e));
                S.displayName = "JVR.Line";
                var C = e => Number(e) === e && e % 1 !== 0 || isNaN(e),
                    L = {
                        string: {
                            color: "var(--w-rjv-type-string-color, #cb4b16)",
                            label: "string"
                        },
                        number: {
                            color: "var(--w-rjv-type-int-color, #268bd2)",
                            label: "int"
                        },
                        float: {
                            color: "var(--w-rjv-type-float-color, #859900)",
                            label: "float"
                        },
                        bigint: {
                            color: "var(--w-rjv-type-bigint-color, #268bd2)",
                            label: "bigint"
                        },
                        boolean: {
                            color: "var(--w-rjv-type-boolean-color, #2aa198)",
                            label: "bool"
                        },
                        date: {
                            color: "var(--w-rjv-type-date-color, #586e75)",
                            label: "date"
                        },
                        url: {
                            color: "var(--w-rjv-type-url-color, #0969da)",
                            label: "url"
                        },
                        null: {
                            color: "var(--w-rjv-type-null-color, #d33682)",
                            label: "null"
                        },
                        Set: {
                            color: "var(--w-rjv-type-set-color, #268bd2)",
                            label: "Set"
                        },
                        Map: {
                            color: "var(--w-rjv-type-map-color, #268bd2)",
                            label: "Map"
                        },
                        NaN: {
                            color: "var(--w-rjv-type-nan-color, #859900)",
                            label: "NaN"
                        },
                        undefined: {
                            color: "var(--w-rjv-type-undefined-color, #586e75)",
                            label: "undefined"
                        }
                    },
                    N = e => {
                        var {
                            children: t = ":",
                            style: n
                        } = e, r = o(e, y);
                        return (0, s.jsx)("span", a({
                            className: "w-rjv-colon",
                            style: a({
                                paddingRight: 3
                            }, n, {
                                color: "var(--w-rjv-colon-color, var(--w-rjv-color))"
                            })
                        }, r, {
                            children: t
                        }))
                    };
                N.displayName = "JVR.Colon";
                var k = e => {
                    var {
                        children: t,
                        length: n,
                        style: i
                    } = e, l = o(e, b), c = t, [u, h] = (0, r.useState)(n && c.length >= n);
                    (0, r.useEffect)((() => h(n && c.length >= n)), [n]);
                    var d = u ? c.slice(0, n) + "..." : c;
                    return (0, s.jsx)(A, a({}, l, {
                        style: a({}, i, {
                            cursor: "pointer"
                        }),
                        onClick: () => h(!u),
                        children: d
                    }))
                };
                k.displayName = "JVR.RenderShortenTextValue";
                var A = e => {
                    var {
                        color: t,
                        style: n,
                        isURL: r,
                        href: i,
                        children: l
                    } = e, c = o(e, x);
                    return (0, s.jsxs)(T, a({
                        color: t,
                        style: n
                    }, c, {
                        className: "w-rjv-value",
                        children: [r && (0, s.jsx)("a", {
                            href: i,
                            style: {
                                color: t
                            },
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: l
                        }), !r && l]
                    }))
                };

                function E(e) {
                    var t, n, {
                            value: i,
                            parentValue: l,
                            setValue: c,
                            countInfo: u,
                            data: h,
                            keyName: d,
                            indentWidth: f,
                            namespace: p,
                            renderKey: g,
                            components: y = {},
                            quotes: b,
                            enableClipboard: x,
                            displayDataTypes: j,
                            shortenTextAfterLength: E
                        } = e,
                        O = o(e, w),
                        _ = {},
                        {
                            type: M,
                            content: R
                        } = function(e) {
                            var t = typeof e,
                                n = "";
                            return "number" === typeof e && (t = C(e) ? "float" : "number", n = e.toString(), isNaN(e) && (t = "NaN", n = "NaN")), "boolean" === typeof e && (t = "boolean", n = e.toString()), "object" === typeof e && e instanceof Date && (t = "date", n = e.toString()), null === e && (t = "null", n = ("" + e).toLocaleUpperCase()), void 0 === e && (t = "undefined", n = String(e)), "bigint" === typeof e && (t = "bigint", n = e + "n"), e instanceof URL && (t = "url", n = '"' + e.href + '"'), "string" === typeof e && (n = '"' + e + '"'), {
                                type: t,
                                content: n
                            }
                        }(i),
                        W = (0, s.jsx)(z, {
                            type: M
                        });
                    null === i && (W = (0, s.jsx)(r.Fragment, {}), _ = {
                        fontWeight: "bold"
                    }), void 0 !== i && "nan" !== M.toLocaleLowerCase() && j || (W = (0, s.jsx)(r.Fragment, {}));
                    var V = i instanceof URL;
                    n = (null == (t = L[M]) ? void 0 : t.color) || "";
                    var [D, H] = (0, r.useState)(!1), I = (0, r.useMemo)((() => x && D && (0, s.jsx)(m, {
                        show: D,
                        text: i
                    })), [x, D, i]), P = {
                        className: "w-rjv-line",
                        style: {
                            paddingLeft: f
                        }
                    };
                    if (x && (P.onMouseEnter = () => H(!0), P.onMouseLeave = () => H(!1)), R && "string" === typeof R) {
                        var U = y.value && y.value({
                                className: "w-rjv-value",
                                style: a({
                                    color: n
                                }, _),
                                type: M,
                                value: i,
                                setValue: c,
                                data: h,
                                parentValue: l,
                                quotes: b,
                                keyName: d,
                                namespace: p,
                                visible: D,
                                content: R,
                                children: R
                            }),
                            B = E && "string" === M ? (0, s.jsx)(k, {
                                color: n,
                                href: V ? i.href : "",
                                style: _,
                                isURL: V,
                                length: E,
                                children: R
                            }) : (0, s.jsx)(A, {
                                color: n,
                                href: V ? i.href : "",
                                style: _,
                                isURL: V,
                                children: R
                            });
                        return (0, s.jsx)(S, a({}, P, {
                            children: (0, s.jsxs)(T, a({}, O, {
                                ref: null,
                                children: [g, (0, s.jsx)(N, {}), W, U || B, I]
                            }))
                        }))
                    }
                    var J = (0, s.jsxs)(r.Fragment, {
                        children: [(0, s.jsx)(v, {
                            render: y.braces,
                            start: !0,
                            isArray: Array.isArray(i)
                        }), (0, s.jsx)(v, {
                            render: y.braces,
                            isArray: Array.isArray(i)
                        }), u]
                    });
                    return (0, s.jsx)(S, a({}, P, {
                        children: (0, s.jsxs)(T, a({}, O, {
                            ref: null,
                            children: [g, (0, s.jsx)(N, {}), W, J, I]
                        }))
                    }))
                }
                A.displayName = "JVR.RenderStringValue", E.displayName = "JVR.ValueView";
                var T = (0, r.forwardRef)(((e, t) => {
                    var {
                        children: n,
                        color: r,
                        fontSize: i,
                        opacity: l,
                        paddingRight: c,
                        style: u
                    } = e, h = o(e, j);
                    return (0, s.jsx)("span", a({
                        style: a({
                            color: r,
                            fontSize: i,
                            opacity: l,
                            paddingRight: c
                        }, u)
                    }, h, {
                        ref: t,
                        children: n
                    }))
                }));
                T.displayName = "JVR.Label";
                var z = e => {
                    var t, n, {
                            type: r
                        } = e,
                        i = null == (t = L[r]) ? void 0 : t.color,
                        a = null == (n = L[r]) ? void 0 : n.label;
                    if (i && a) return (0, s.jsx)(T, {
                        color: i,
                        fontSize: 11,
                        opacity: .8,
                        paddingRight: 4,
                        className: "w-rjv-type",
                        "data-type": r,
                        children: a
                    })
                };
                z.displayName = "JVR.Type";
                var O = ["style"];

                function _(e) {
                    var {
                        style: t
                    } = e, n = o(e, O), r = a({
                        cursor: "pointer",
                        height: "1em",
                        width: "1em"
                    }, t);
                    return (0, s.jsx)("svg", a({
                        viewBox: "0 0 24 24",
                        fill: "var(--w-rjv-arrow-color, currentColor)",
                        style: r
                    }, n, {
                        children: (0, s.jsx)("path", {
                            d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        })
                    }))
                }
                _.displayName = "JVR.TriangleArrow";
                var M = {},
                    R = [],
                    W = {
                        collapse(e) {
                            M = a({}, M, {
                                [e]: !1
                            }), H()
                        },
                        expand(e) {
                            M = a({}, M, {
                                [e]: !0
                            }), H()
                        }
                    };

                function V() {
                    return M
                }

                function D(e) {
                    return R = [...R, e], () => {
                        R = R.filter((t => t !== e))
                    }
                }

                function H() {
                    for (var e of R) e()
                }
                var I = ["children", "render", "color", "value", "className", "keyName", "highlightUpdates", "quotes", "style", "namespace", "parentName"];

                function P(e) {
                    var {
                        value: t,
                        highlightUpdates: n,
                        highlightContainer: i
                    } = e, a = function(e) {
                        var t = (0, r.useRef)();
                        return (0, r.useEffect)((() => {
                            t.current = e
                        })), t.current
                    }(t), o = (0, r.useMemo)((() => !(!n || void 0 === a) && (typeof t !== typeof a || ("number" === typeof t ? (!isNaN(t) || !isNaN(a)) && t !== a : Array.isArray(t) !== Array.isArray(a) || "object" !== typeof t && "function" !== typeof t && t !== a))), [n, t]);
                    (0, r.useEffect)((() => {
                        i && i.current && o && "animate" in i.current && i.current.animate([{
                            backgroundColor: "var(--w-rjv-update-color, #ebcb8b)"
                        }, {
                            backgroundColor: ""
                        }], {
                            duration: 1e3,
                            easing: "ease-in"
                        })
                    }), [o, t, i])
                }
                var U = e => {
                    var {
                        render: t,
                        color: n,
                        value: i,
                        className: l = "w-rjv-object-key",
                        keyName: c,
                        highlightUpdates: u,
                        quotes: h,
                        style: d,
                        namespace: f,
                        parentName: p
                    } = e, v = o(e, I), g = (0, r.useRef)(null), m = "string" === typeof c ? "" + h + c + h : c;
                    return t ? t(a({
                        className: l
                    }, v, {
                        value: i,
                        namespace: f,
                        style: a({}, d, {
                            color: n
                        }),
                        parentName: p,
                        keyName: c,
                        quotes: h,
                        label: c,
                        children: m
                    })) : (P({
                        value: i,
                        highlightUpdates: u,
                        highlightContainer: g
                    }), (0, s.jsx)(T, a({
                        className: l,
                        color: n
                    }, v, {
                        ref: g,
                        children: m
                    })))
                };
                U.displayName = "JSR.Semicolon";
                var B = ["style", "render", "count", "level"],
                    J = e => {
                        var {
                            style: t,
                            render: n,
                            count: r,
                            level: i
                        } = e, l = o(e, B), c = a({
                            cursor: "pointer"
                        }, t), u = "w-rjv-ellipsis " + (l.className || "");
                        return n ? n(a({
                            style: c,
                            count: r,
                            level: i
                        }, l, {
                            className: u
                        })) : (0, s.jsx)("span", a({
                            className: u,
                            style: c
                        }, l, {
                            children: "..."
                        }))
                    };
                J.displayName = "JVR.Ellipsis";
                var K = ["value", "keyName", "className", "displayDataTypes", "components", "displayObjectSize", "enableClipboard", "highlightUpdates", "objectSortKeys", "indentWidth", "shortenTextAfterLength", "collapsed", "level", "keyid", "quotes", "namespace", "isSet", "isMap", "onCopied", "onExpand", "parentValue", "setParentValue"];
                var Z = e => {
                    var {
                        children: t
                    } = e;
                    return (0, s.jsxs)(T, {
                        style: {
                            paddingLeft: 4,
                            fontStyle: "italic"
                        },
                        color: "var(--w-rjv-info-color, #0000004d)",
                        className: "w-rjv-object-size",
                        children: [t, " items"]
                    })
                };
                Z.displayName = "JVR.CountInfo";
                var q = (0, r.forwardRef)(((e, t) => {
                    var n, {
                            value: i = {},
                            keyName: l,
                            className: c,
                            displayDataTypes: u = !0,
                            components: h = {},
                            displayObjectSize: d = !0,
                            enableClipboard: f = !0,
                            highlightUpdates: p = !0,
                            objectSortKeys: g = !1,
                            indentWidth: y = 15,
                            shortenTextAfterLength: b = 30,
                            collapsed: x,
                            level: w = 1,
                            keyid: j = "root",
                            quotes: C = '"',
                            namespace: k = [],
                            isSet: A = !1,
                            isMap: T = !1,
                            onCopied: O,
                            onExpand: M,
                            parentValue: R,
                            setParentValue: H
                        } = e,
                        I = o(e, K),
                        P = Array.isArray(i),
                        B = (0, r.useId)(),
                        F = null != (n = (0, r.useSyncExternalStore)(D, V)[j]) ? n : "boolean" === typeof x ? x : "number" !== typeof x || w <= x,
                        [Y, $] = (0, r.useState)(i),
                        X = {
                            components: h,
                            indentWidth: y,
                            displayDataTypes: u,
                            displayObjectSize: d,
                            enableClipboard: f,
                            highlightUpdates: p,
                            onCopied: O,
                            onExpand: M,
                            collapsed: x,
                            parentValue: i,
                            setParentValue: $,
                            quotes: C,
                            level: w + 1,
                            style: {
                                paddingLeft: y
                            }
                        },
                        G = {
                            displayDataTypes: u,
                            displayObjectSize: d,
                            enableClipboard: f,
                            shortenTextAfterLength: b,
                            level: w + 1,
                            parentValue: i,
                            indentWidth: y,
                            data: Y,
                            quotes: C,
                            setValue: $
                        },
                        Q = {
                            transform: "rotate(" + (F ? "0" : "-90") + "deg)",
                            transition: "all 0.3s"
                        },
                        ee = h.arrow ? (0, r.cloneElement)(h.arrow, {
                            style: Q,
                            "data-expand": F,
                            className: "w-rjv-arrow"
                        }) : (0, s.jsx)(_, {
                            style: Q,
                            className: "w-rjv-arrow"
                        }),
                        [te, ne] = (0, r.useState)(!1),
                        re = {};
                    f && (re.onMouseEnter = () => ne(!0), re.onMouseLeave = () => ne(!1)), (0, r.useEffect)((() => $(i)), [i]);
                    var ie = P ? Object.keys(Y).map((e => Number(e))) : Object.keys(Y),
                        ae = P ? Object.entries(Y).map((e => [Number(e[0]), e[1]])) : Object.entries(Y);
                    g && (ae = !0 === g ? ae.sort(((e, t) => {
                        var [n] = e, [r] = t;
                        return "string" === typeof n && "string" === typeof r ? n.localeCompare(r) : 0
                    })) : ae.sort(((e, t) => {
                        var [n] = e, [r] = t;
                        return "string" === typeof n && "string" === typeof r ? g(n, r) : 0
                    })));
                    var oe = (0, s.jsx)(Z, {
                        children: ie.length
                    });
                    h.countInfo && (oe = h.countInfo({
                        count: ie.length,
                        level: w,
                        visible: F
                    }) || oe), d || (oe = null);
                    var se = h.countInfoExtra && h.countInfoExtra({
                        count: ie.length,
                        level: w,
                        showTools: te,
                        keyName: l,
                        visible: F,
                        value: Y,
                        namespace: [...k],
                        parentValue: R,
                        setParentValue: H,
                        setValue: $
                    });
                    return (0, s.jsxs)("div", a({
                        ref: t
                    }, I, {
                        className: c + " w-rjv-inner"
                    }, re, {
                        children: [(0, s.jsxs)(S, {
                            style: {
                                display: "inline-flex",
                                alignItems: "center"
                            },
                            onClick: () => {
                                M && "function" === typeof M && M({
                                    expand: !F,
                                    keyid: j,
                                    keyName: l,
                                    value: i
                                }), F ? W.collapse(j) : W.expand(j)
                            },
                            children: [ee, ("string" === typeof l || "number" === typeof l) && (0, s.jsxs)(r.Fragment, {
                                children: [(0, s.jsx)(U, {
                                    value: Y,
                                    quotes: C,
                                    "data-keys": j,
                                    namespace: [...k],
                                    render: h.objectKey,
                                    keyName: l,
                                    parentName: l,
                                    color: "number" === typeof l ? L.number.color : ""
                                }), (0, s.jsx)(N, {})]
                            }), A && (0, s.jsx)(z, {
                                type: "Set"
                            }), T && (0, s.jsx)(z, {
                                type: "Map"
                            }), (0, s.jsx)(v, {
                                start: !0,
                                isArray: P,
                                level: w,
                                render: h.braces
                            }), !F && (0, s.jsx)(J, {
                                render: h.ellipsis,
                                count: ie.length,
                                level: w
                            }), !F && (0, s.jsx)(v, {
                                isArray: P,
                                level: w,
                                render: h.braces
                            }), oe, se, f && (0, s.jsx)(m, {
                                show: te,
                                text: Y,
                                onCopied: O,
                                render: null == h ? void 0 : h.copied
                            })]
                        }), F && (0, s.jsx)(S, {
                            className: "w-rjv-content",
                            style: {
                                borderLeft: "var(--w-rjv-border-left-width, 1px) var(--w-rjv-line-style, solid) var(--w-rjv-line-color, #ebebeb)",
                                marginLeft: 6
                            },
                            children: ae.length > 0 && [...ae].map(((e, t) => {
                                var [n, r] = e, i = r, o = i instanceof Set, c = i instanceof Map, u = o ? Array.from(i) : c ? Object.fromEntries(i) : i, d = Array.isArray(u) && 0 === u.length || "object" === typeof u && u && !(u instanceof Date) && 0 === Object.keys(u).length;
                                if ((Array.isArray(u) || o || c) && !d) {
                                    var f = P ? t : n;
                                    return (0, s.jsx)(S, {
                                        className: "w-rjv-wrap",
                                        children: (0, s.jsx)(q, a({
                                            value: u,
                                            isSet: o,
                                            isMap: c,
                                            namespace: [...k, f],
                                            keyName: f,
                                            keyid: j + B + f
                                        }, X))
                                    }, f + t)
                                }
                                if ("object" === typeof u && u && !(u instanceof Date) && !d) return (0, s.jsx)(S, {
                                    className: "w-rjv-wrap",
                                    children: (0, s.jsx)(q, a({
                                        value: u,
                                        namespace: [...k, n],
                                        keyName: n,
                                        keyid: j + B + n
                                    }, X))
                                }, n + "" + t);
                                if ("function" !== typeof u) {
                                    var v = (0, s.jsx)(U, {
                                            value: u,
                                            "data-keys": j,
                                            quotes: C,
                                            namespace: [...k, n],
                                            parentName: l,
                                            highlightUpdates: p,
                                            render: h.objectKey,
                                            color: "number" === typeof n ? L.number.color : "",
                                            keyName: n
                                        }),
                                        g = Array.isArray(u) ? u.length : function(e) {
                                            try {
                                                return Object.keys(e).length
                                            } catch (t) {
                                                return -1
                                            }
                                        }(u);
                                    return oe = (0, s.jsx)(Z, {
                                        children: g
                                    }), h.countInfo && (oe = h.countInfo({
                                        count: g,
                                        level: w,
                                        visible: F
                                    }) || oe), (0, s.jsx)(E, a({
                                        components: h,
                                        namespace: [...k, n]
                                    }, G, {
                                        countInfo: oe,
                                        renderKey: v,
                                        keyName: n,
                                        isSet: A,
                                        value: u
                                    }), t)
                                }
                            }))
                        }), F && (0, s.jsx)(S, {
                            style: {
                                paddingLeft: 2
                            },
                            children: (0, s.jsx)(v, {
                                render: h.braces,
                                isArray: P,
                                level: w,
                                style: {
                                    paddingLeft: 2,
                                    display: "inline-block"
                                }
                            })
                        })]
                    }))
                }));
                q.displayName = "JVR.RootNode";
                var F = ["value", "style", "className"],
                    Y = (0, r.forwardRef)(((e, t) => {
                        var {
                            value: n,
                            style: i,
                            className: l
                        } = e, c = o(e, F), u = a({
                            lineHeight: 1.4,
                            fontFamily: "var(--w-rjv-font-family, Menlo, monospace)",
                            color: "var(--w-rjv-color, #002b36)",
                            backgroundColor: "var(--w-rjv-background-color, #00000000)",
                            fontSize: 13
                        }, i), h = "w-json-view-container w-rjv " + (l || ""), d = (0, r.useId)();
                        return (0, s.jsx)(q, a({
                            className: h,
                            value: n
                        }, c, {
                            ref: t,
                            keyid: d,
                            style: u
                        }))
                    }));
                Y.displayName = "JVR.JsonView";
                const $ = Y;
                var X = n(267),
                    G = n(504),
                    Q = n(494),
                    ee = n(824),
                    te = n(426),
                    ne = n(221),
                    re = n(74),
                    ie = function(e) {
                        void 0 === e && (e = {});
                        var {
                            crosshairCursor: t = !1
                        } = e, n = [];
                        !1 !== e.closeBracketsKeymap && (n = n.concat(te.GA)), !1 !== e.defaultKeymap && (n = n.concat(Q.wQ)), !1 !== e.searchKeymap && (n = n.concat(ee.Lp)), !1 !== e.historyKeymap && (n = n.concat(Q.f$)), !1 !== e.foldKeymap && (n = n.concat(ne.e7)), !1 !== e.completionKeymap && (n = n.concat(te.B1)), !1 !== e.lintKeymap && (n = n.concat(re.Fv));
                        var r = [];
                        return !1 !== e.lineNumbers && r.push((0, G.Eu)()), !1 !== e.highlightActiveLineGutter && r.push((0, G.HQ)()), !1 !== e.highlightSpecialChars && r.push((0, G.AE)()), !1 !== e.history && r.push((0, Q.m8)()), !1 !== e.foldGutter && r.push((0, ne.mi)()), !1 !== e.drawSelection && r.push((0, G.Uw)()), !1 !== e.dropCursor && r.push((0, G.qr)()), !1 !== e.allowMultipleSelections && r.push(X.yy.allowMultipleSelections.of(!0)), !1 !== e.indentOnInput && r.push((0, ne.nY)()), !1 !== e.syntaxHighlighting && r.push((0, ne.nF)(ne.R_, {
                            fallback: !0
                        })), !1 !== e.bracketMatching && r.push((0, ne.n$)()), !1 !== e.closeBrackets && r.push((0, te.vQ)()), !1 !== e.autocompletion && r.push((0, te.ys)()), !1 !== e.rectangularSelection && r.push((0, G.Zs)()), !1 !== t && r.push((0, G.S2)()), !1 !== e.highlightActiveLine && r.push((0, G.ZO)()), !1 !== e.highlightSelectionMatches && r.push((0, ee.sW)()), e.tabSize && "number" === typeof e.tabSize && r.push(ne.c.of(" ".repeat(e.tabSize))), r.concat([G.$f.of(n.flat())]).filter(Boolean)
                    },
                    ae = n(783),
                    oe = G.tk.theme({
                        "&": {
                            backgroundColor: "#fff"
                        }
                    }, {
                        dark: !1
                    }),
                    se = X.q6.define(),
                    le = [];

                function ce(e) {
                    var {
                        value: t,
                        selection: n,
                        onChange: i,
                        onStatistics: a,
                        onCreateEditor: o,
                        onUpdate: s,
                        extensions: l = le,
                        autoFocus: c,
                        theme: u = "light",
                        height: h = null,
                        minHeight: d = null,
                        maxHeight: f = null,
                        width: p = null,
                        minWidth: v = null,
                        maxWidth: g = null,
                        placeholder: m = "",
                        editable: y = !0,
                        readOnly: b = !1,
                        indentWithTab: x = !0,
                        basicSetup: w = !0,
                        root: j,
                        initialState: S
                    } = e, [C, L] = (0, r.useState)(), [N, k] = (0, r.useState)(), [A, E] = (0, r.useState)(), T = G.tk.theme({
                        "&": {
                            height: h,
                            minHeight: d,
                            maxHeight: f,
                            width: p,
                            minWidth: v,
                            maxWidth: g
                        },
                        "& .cm-scroller": {
                            height: "100% !important"
                        }
                    }), z = G.tk.updateListener.of((e => {
                        if (e.docChanged && "function" === typeof i && !e.transactions.some((e => e.annotation(se)))) {
                            var t = e.state.doc.toString();
                            i(t, e)
                        }
                        a && a((e => ({
                            line: e.state.doc.lineAt(e.state.selection.main.from),
                            lineCount: e.state.doc.lines,
                            lineBreak: e.state.lineBreak,
                            length: e.state.doc.length,
                            readOnly: e.state.readOnly,
                            tabSize: e.state.tabSize,
                            selection: e.state.selection,
                            selectionAsSingle: e.state.selection.asSingle().main,
                            ranges: e.state.selection.ranges,
                            selectionCode: e.state.sliceDoc(e.state.selection.main.from, e.state.selection.main.to),
                            selections: e.state.selection.ranges.map((t => e.state.sliceDoc(t.from, t.to))),
                            selectedText: e.state.selection.ranges.some((e => !e.empty))
                        }))(e))
                    })), O = function(e) {
                        void 0 === e && (e = {});
                        var {
                            indentWithTab: t = !0,
                            editable: n = !0,
                            readOnly: r = !1,
                            theme: i = "light",
                            placeholder: a = "",
                            basicSetup: o = !0
                        } = e, s = [];
                        switch (t && s.unshift(G.$f.of([Q.oc])), o && ("boolean" === typeof o ? s.unshift(ie()) : s.unshift(ie(o))), a && s.unshift((0, G.W$)(a)), i) {
                            case "light":
                                s.push(oe);
                                break;
                            case "dark":
                                s.push(ae.vk);
                                break;
                            case "none":
                                break;
                            default:
                                s.push(i)
                        }
                        return !1 === n && s.push(G.tk.editable.of(!1)), r && s.push(X.yy.readOnly.of(!0)), [...s]
                    }({
                        theme: u,
                        editable: y,
                        readOnly: b,
                        placeholder: m,
                        indentWithTab: x,
                        basicSetup: w
                    }), _ = [z, T, ...O];
                    return s && "function" === typeof s && _.push(G.tk.updateListener.of(s)), _ = _.concat(l), (0, r.useEffect)((() => {
                        if (C && !A) {
                            var e = {
                                    doc: t,
                                    selection: n,
                                    extensions: _
                                },
                                r = S ? X.yy.fromJSON(S.json, e, S.fields) : X.yy.create(e);
                            if (E(r), !N) {
                                var i = new G.tk({
                                    state: r,
                                    parent: C,
                                    root: j
                                });
                                k(i), o && o(i, r)
                            }
                        }
                        return () => {
                            N && (E(void 0), k(void 0))
                        }
                    }), [C, A]), (0, r.useEffect)((() => L(e.container)), [e.container]), (0, r.useEffect)((() => () => {
                        N && (N.destroy(), k(void 0))
                    }), [N]), (0, r.useEffect)((() => {
                        c && N && N.focus()
                    }), [c, N]), (0, r.useEffect)((() => {
                        N && N.dispatch({
                            effects: X.Py.reconfigure.of(_)
                        })
                    }), [u, l, h, d, f, p, v, g, m, y, b, x, w, i, s]), (0, r.useEffect)((() => {
                        if (void 0 !== t) {
                            var e = N ? N.state.doc.toString() : "";
                            N && t !== e && N.dispatch({
                                changes: {
                                    from: 0,
                                    to: e.length,
                                    insert: t || ""
                                },
                                annotations: [se.of(!0)]
                            })
                        }
                    }), [t, N]), {
                        state: A,
                        setState: E,
                        view: N,
                        setView: k,
                        container: C,
                        setContainer: L
                    }
                }
                var ue = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
                    he = (0, r.forwardRef)(((e, t) => {
                        var {
                            className: n,
                            value: i = "",
                            selection: l,
                            extensions: c = [],
                            onChange: u,
                            onStatistics: h,
                            onCreateEditor: d,
                            onUpdate: f,
                            autoFocus: p,
                            theme: v = "light",
                            height: g,
                            minHeight: m,
                            maxHeight: y,
                            width: b,
                            minWidth: x,
                            maxWidth: w,
                            basicSetup: j,
                            placeholder: S,
                            indentWithTab: C,
                            editable: L,
                            readOnly: N,
                            root: k,
                            initialState: A
                        } = e, E = o(e, ue), T = (0, r.useRef)(null), {
                            state: z,
                            view: O,
                            container: _
                        } = ce({
                            container: T.current,
                            root: k,
                            value: i,
                            autoFocus: p,
                            theme: v,
                            height: g,
                            minHeight: m,
                            maxHeight: y,
                            width: b,
                            minWidth: x,
                            maxWidth: w,
                            basicSetup: j,
                            placeholder: S,
                            indentWithTab: C,
                            editable: L,
                            readOnly: N,
                            selection: l,
                            onChange: u,
                            onStatistics: h,
                            onCreateEditor: d,
                            onUpdate: f,
                            extensions: c,
                            initialState: A
                        });
                        if ((0, r.useImperativeHandle)(t, (() => ({
                                editor: T.current,
                                state: z,
                                view: O
                            })), [T, _, z, O]), "string" !== typeof i) throw new Error("value must be typeof string but got " + typeof i);
                        var M = "string" === typeof v ? "cm-theme-" + v : "cm-theme";
                        return (0, s.jsx)("div", a({
                            ref: T,
                            className: M + (n ? " " + n : "")
                        }, E))
                    }));
                he.displayName = "CodeMirror";
                const de = he;
                var fe, pe = n(906);
                ! function(e) {
                    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
                }(fe || (fe = {}));
                var ve = function(e) {
                    return e
                };
                var ge = "beforeunload",
                    me = "popstate";

                function ye(e) {
                    e.preventDefault(), e.returnValue = ""
                }

                function be() {
                    var e = [];
                    return {
                        get length() {
                            return e.length
                        },
                        push: function(t) {
                            return e.push(t),
                                function() {
                                    e = e.filter((function(e) {
                                        return e !== t
                                    }))
                                }
                        },
                        call: function(t) {
                            e.forEach((function(e) {
                                return e && e(t)
                            }))
                        }
                    }
                }

                function xe() {
                    return Math.random().toString(36).substr(2, 8)
                }

                function we(e) {
                    var t = e.pathname,
                        n = void 0 === t ? "/" : t,
                        r = e.search,
                        i = void 0 === r ? "" : r,
                        a = e.hash,
                        o = void 0 === a ? "" : a;
                    return i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i), o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o), n
                }

                function je(e) {
                    var t = {};
                    if (e) {
                        var n = e.indexOf("#");
                        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                        var r = e.indexOf("?");
                        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
                    }
                    return t
                }
                const Se = "App_app__gQuxZ",
                    Ce = "App_header__bttFW",
                    Le = "App_btn__uBKDa",
                    Ne = "App_message__KR8qm",
                    ke = "App_toolbar__V4jVm",
                    Ae = function(e) {
                        void 0 === e && (e = {});
                        var t = e.window,
                            n = void 0 === t ? document.defaultView : t,
                            r = n.history;

                        function i() {
                            var e = je(n.location.hash.substr(1)),
                                t = e.pathname,
                                i = void 0 === t ? "/" : t,
                                a = e.search,
                                o = void 0 === a ? "" : a,
                                s = e.hash,
                                l = void 0 === s ? "" : s,
                                c = r.state || {};
                            return [c.idx, ve({
                                pathname: i,
                                search: o,
                                hash: l,
                                state: c.usr || null,
                                key: c.key || "default"
                            })]
                        }
                        var o = null;

                        function s() {
                            if (o) f.call(o), o = null;
                            else {
                                var e = fe.Pop,
                                    t = i(),
                                    n = t[0],
                                    r = t[1];
                                if (f.length) {
                                    if (null != n) {
                                        var a = u - n;
                                        a && (o = {
                                            action: e,
                                            location: r,
                                            retry: function() {
                                                b(-1 * a)
                                            }
                                        }, b(a))
                                    }
                                } else y(e)
                            }
                        }
                        n.addEventListener(me, s), n.addEventListener("hashchange", (function() {
                            we(i()[1]) !== we(h) && s()
                        }));
                        var l = fe.Pop,
                            c = i(),
                            u = c[0],
                            h = c[1],
                            d = be(),
                            f = be();

                        function p(e) {
                            return function() {
                                var e = document.querySelector("base"),
                                    t = "";
                                if (e && e.getAttribute("href")) {
                                    var r = n.location.href,
                                        i = r.indexOf("#");
                                    t = -1 === i ? r : r.slice(0, i)
                                }
                                return t
                            }() + "#" + ("string" === typeof e ? e : we(e))
                        }

                        function v(e, t) {
                            return void 0 === t && (t = null), ve(a({
                                pathname: h.pathname,
                                hash: "",
                                search: ""
                            }, "string" === typeof e ? je(e) : e, {
                                state: t,
                                key: xe()
                            }))
                        }

                        function g(e, t) {
                            return [{
                                usr: e.state,
                                key: e.key,
                                idx: t
                            }, p(e)]
                        }

                        function m(e, t, n) {
                            return !f.length || (f.call({
                                action: e,
                                location: t,
                                retry: n
                            }), !1)
                        }

                        function y(e) {
                            l = e;
                            var t = i();
                            u = t[0], h = t[1], d.call({
                                action: l,
                                location: h
                            })
                        }

                        function b(e) {
                            r.go(e)
                        }
                        null == u && (u = 0, r.replaceState(a({}, r.state, {
                            idx: u
                        }), ""));
                        var x = {
                            get action() {
                                return l
                            },
                            get location() {
                                return h
                            },
                            createHref: p,
                            push: function e(t, i) {
                                var a = fe.Push,
                                    o = v(t, i);
                                if (m(a, o, (function() {
                                        e(t, i)
                                    }))) {
                                    var s = g(o, u + 1),
                                        l = s[0],
                                        c = s[1];
                                    try {
                                        r.pushState(l, "", c)
                                    } catch (h) {
                                        n.location.assign(c)
                                    }
                                    y(a)
                                }
                            },
                            replace: function e(t, n) {
                                var i = fe.Replace,
                                    a = v(t, n);
                                if (m(i, a, (function() {
                                        e(t, n)
                                    }))) {
                                    var o = g(a, u),
                                        s = o[0],
                                        l = o[1];
                                    r.replaceState(s, "", l), y(i)
                                }
                            },
                            go: b,
                            back: function() {
                                b(-1)
                            },
                            forward: function() {
                                b(1)
                            },
                            listen: function(e) {
                                return d.push(e)
                            },
                            block: function(e) {
                                var t = f.push(e);
                                return 1 === f.length && n.addEventListener(ge, ye),
                                    function() {
                                        t(), f.length || n.removeEventListener(ge, ye)
                                    }
                            }
                        };
                        return x
                    }(),
                    Ee = () => {
                        const e = (window.location.href.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(((e, t) => (e[t.slice(0, t.indexOf("="))] = t.slice(t.indexOf("=") + 1), e)), {});
                        const t = (0, r.useRef)(null);
                        e.json = e.json ? decodeURI(e.json) : void 0;
                        const [n, i] = r.useState(decodeURIComponent(e.json || "")), [a, o] = r.useState(), [l, u] = r.useState(""), [h, d] = r.useState(""), p = (0, r.useCallback)((() => {
                            u("");
                            try {
                                if (n) {
                                    const e = JSON.parse(n);
                                    o(e)
                                }
                            } catch (e) {
                                if (!(e instanceof Error)) throw e;
                                u(e.message), o(void 0)
                            }
                        }), [n]), v = (0, r.useCallback)((function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            u("");
                            try {
                                if (n) {
                                    const e = JSON.parse(n),
                                        r = JSON.stringify(e, null, t);
                                    i(r)
                                }
                            } catch (r) {
                                if (!(r instanceof Error)) throw r;
                                u(r.message), o(void 0)
                            }
                        }), [n]), g = () => {
                            var t;
                            e.json = encodeURI(n), Ae.push("".concat((t = e) ? Object.entries(t).reduce(((e, t, n) => {
                                let [r, i] = t;
                                const a = 0 === e.length ? "?" : "&";
                                return e + ("string" === typeof i ? "".concat(a).concat(r, "=").concat(i) : "")
                            }), "") : ""), {
                                some: "state"
                            })
                        };
                        (0, r.useEffect)((() => {
                            p()
                        }), [n, p]);
                        const m = (0, s.jsx)("div", {
                                style: {
                                    minWidth: 230,
                                    width: "editor" === e.view ? "100%" : "45%",
                                    position: "relative",
                                    backgroundColor: "rgb(245, 245, 245)"
                                },
                                children: (0, s.jsx)("div", {
                                    style: {
                                        overflow: "auto",
                                        height: "100%",
                                        boxSizing: "border-box"
                                    },
                                    children: (0, s.jsx)(de, {
                                        value: n,
                                        ref: t,
                                        height: "100%",
                                        style: {
                                            height: "100%"
                                        },
                                        extensions: [(0, pe.AV)()],
                                        onUpdate: t => {
                                            if ("1" === e.hidenheader) return;
                                            const {
                                                selection: n
                                            } = t.state, r = t.view.state.doc.lineAt(n.main.from);
                                            d("Line ".concat(r.number, "/").concat(t.state.doc.lines, ", Column ").concat(t.state.selection.main.head - r.from + 1));
                                            const i = t.state.sliceDoc(n.main.from, n.main.to);
                                            i && (n.ranges.length > 1 ? d("".concat(n.ranges.length, " selection regions")) : d("".concat(i.split("\n").length, " lines, ").concat(i.length, " characters selected")))
                                        },
                                        onChange: (e, t) => {
                                            i(e)
                                        }
                                    })
                                })
                            }),
                            y = (0, s.jsxs)("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 230,
                                    userSelect: "none",
                                    padding: 10,
                                    overflow: "auto"
                                },
                                children: [l && (0, s.jsx)("pre", {
                                    style: {
                                        padding: 0,
                                        margin: 0,
                                        color: "red"
                                    },
                                    children: l
                                }), a && "object" == typeof a && (0, s.jsx)($, {
                                    value: a,
                                    style: {},
                                    displayDataTypes: !1
                                })]
                            });
                        return (0, s.jsxs)("div", {
                            className: Se,
                            children: 
                            [!Number(e.corner) && (0, s.jsx)(f, {
                                fixed: !0,
                                zIndex: 999,
                                size: 43,
                                target: "__blank",
                                href: e.cornerhref ? e.cornerhref : "https://github.com/uiwjs/json-viewer"
                            }), (0, s.jsxs)(c, {
                                mode: "vertical",
                                visiable: !1,
                                children: ["1" !== e.hidenheader && (0, s.jsxs)("div", {
                                    className: Ce,
                                    style: {},
                                    children: [(0, s.jsx)("h1", {
                                        children: "JSON Viewer"
                                    }), (0, s.jsxs)("div", {
                                        className: ke,
                                        children: [(0, s.jsx)("button", {
                                            onClick: () => window.location.href = 'https://iwanttools.com',
                                            children: "IWANTTOOLS"
                                        }),
                                            (0, s.jsx)("div", {
                                            children: h && (0, s.jsxs)("span", {
                                                children: [" ", h, " "]
                                            })
                                        }), l && (0, s.jsx)("div", {
                                            className: Ne,
                                            children: l
                                        }), (0, s.jsxs)("div", {
                                            className: Le,
                                            children: [(0, s.jsx)("button", {
                                                onClick: v,
                                                children: "Format"
                                            }), (0, s.jsx)("button", {
                                                onClick: () => v(null, 0),
                                                children: "Compress"
                                            }), n && (0, s.jsx)("button", {
                                                onClick: () => g(),
                                                children: "Share"
                                            })]
                                        })]
                                    })]
                                }), (0, s.jsxs)(c, {
                                    style: {
                                        flex: 1,
                                        height: "1" !== e.hidenheader ? "calc(100% - 32px)" : "100%"
                                    },
                                    children: [!e.view && m, !e.view && y, "editor" === e.view && m, "preview" === e.view && y]
                                })]
                            })]
                        })
                    };
                i.render((0, s.jsx)(Ee, {}), document.getElementById("root"))
            },
            466: e => {
                var t, n, r = e.exports = {};

                function i() {
                    throw new Error("setTimeout has not been defined")
                }

                function a() {
                    throw new Error("clearTimeout has not been defined")
                }

                function o(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        t = "function" === typeof setTimeout ? setTimeout : i
                    } catch (e) {
                        t = i
                    }
                    try {
                        n = "function" === typeof clearTimeout ? clearTimeout : a
                    } catch (e) {
                        n = a
                    }
                }();
                var s, l = [],
                    c = !1,
                    u = -1;

                function h() {
                    c && s && (c = !1, s.length ? l = s.concat(l) : u = -1, l.length && d())
                }

                function d() {
                    if (!c) {
                        var e = o(h);
                        c = !0;
                        for (var t = l.length; t;) {
                            for (s = l, l = []; ++u < t;) s && s[u].run();
                            u = -1, t = l.length
                        }
                        s = null, c = !1,
                            function(e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    return n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function f(e, t) {
                    this.fun = e, this.array = t
                }

                function p() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    l.push(new f(e, t)), 1 !== l.length || c || o(d)
                }, f.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
                    return []
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }, r.cwd = function() {
                    return "/"
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }, r.umask = function() {
                    return 0
                }
            },
            883: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            i = e[r];
                        if (!(0 < a(i, t))) break e;
                        e[r] = t, e[n] = i, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function i(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
                            var s = 2 * (r + 1) - 1,
                                l = e[s],
                                c = s + 1,
                                u = e[c];
                            if (0 > a(l, n)) c < i && 0 > a(u, l) ? (e[r] = u, e[c] = n, r = c) : (e[r] = l, e[s] = n, r = s);
                            else {
                                if (!(c < i && 0 > a(u, n))) break e;
                                e[r] = u, e[c] = n, r = c
                            }
                        }
                    }
                    return t
                }

                function a(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var s = Date,
                        l = s.now();
                    t.unstable_now = function() {
                        return s.now() - l
                    }
                }
                var c = [],
                    u = [],
                    h = 1,
                    d = null,
                    f = 3,
                    p = !1,
                    v = !1,
                    g = !1,
                    m = "function" === typeof setTimeout ? setTimeout : null,
                    y = "function" === typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" !== typeof setImmediate ? setImmediate : null;

                function x(e) {
                    for (var t = r(u); null !== t;) {
                        if (null === t.callback) i(u);
                        else {
                            if (!(t.startTime <= e)) break;
                            i(u), t.sortIndex = t.expirationTime, n(c, t)
                        }
                        t = r(u)
                    }
                }

                function w(e) {
                    if (g = !1, x(e), !v)
                        if (null !== r(c)) v = !0, _(j);
                        else {
                            var t = r(u);
                            null !== t && M(w, t.startTime - e)
                        }
                }

                function j(e, n) {
                    v = !1, g && (g = !1, y(N), N = -1), p = !0;
                    var a = f;
                    try {
                        for (x(n), d = r(c); null !== d && (!(d.expirationTime > n) || e && !E());) {
                            var o = d.callback;
                            if ("function" === typeof o) {
                                d.callback = null, f = d.priorityLevel;
                                var s = o(d.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof s ? d.callback = s : d === r(c) && i(c), x(n)
                            } else i(c);
                            d = r(c)
                        }
                        if (null !== d) var l = !0;
                        else {
                            var h = r(u);
                            null !== h && M(w, h.startTime - n), l = !1
                        }
                        return l
                    } finally {
                        d = null, f = a, p = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var S, C = !1,
                    L = null,
                    N = -1,
                    k = 5,
                    A = -1;

                function E() {
                    return !(t.unstable_now() - A < k)
                }

                function T() {
                    if (null !== L) {
                        var e = t.unstable_now();
                        A = e;
                        var n = !0;
                        try {
                            n = L(!0, e)
                        } finally {
                            n ? S() : (C = !1, L = null)
                        }
                    } else C = !1
                }
                if ("function" === typeof b) S = function() {
                    b(T)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var z = new MessageChannel,
                        O = z.port2;
                    z.port1.onmessage = T, S = function() {
                        O.postMessage(null)
                    }
                } else S = function() {
                    m(T, 0)
                };

                function _(e) {
                    L = e, C || (C = !0, S())
                }

                function M(e, n) {
                    N = m((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    v || p || (v = !0, _(j))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return f
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(c)
                }, t.unstable_next = function(e) {
                    switch (f) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = f
                    }
                    var n = f;
                    f = t;
                    try {
                        return e()
                    } finally {
                        f = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = f;
                    f = e;
                    try {
                        return t()
                    } finally {
                        f = n
                    }
                }, t.unstable_scheduleCallback = function(e, i, a) {
                    var o = t.unstable_now();
                    switch ("object" === typeof a && null !== a ? a = "number" === typeof(a = a.delay) && 0 < a ? o + a : o : a = o, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: h++,
                        callback: i,
                        priorityLevel: e,
                        startTime: a,
                        expirationTime: s = a + s,
                        sortIndex: -1
                    }, a > o ? (e.sortIndex = a, n(u, e), null === r(c) && e === r(u) && (g ? (y(N), N = -1) : g = !0, M(w, a - o))) : (e.sortIndex = s, n(c, e), v || p || (v = !0, _(j))), e
                }, t.unstable_shouldYield = E, t.unstable_wrapCallback = function(e) {
                    var t = f;
                    return function() {
                        var n = f;
                        f = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            f = n
                        }
                    }
                }
            },
            312: (e, t, n) => {
                "use strict";
                e.exports = n(883)
            },
            569: (e, t, n) => {
                "use strict";

                function r() {
                    var e = arguments[0];
                    "string" == typeof e && (e = document.createElement(e));
                    var t = 1,
                        n = arguments[1];
                    if (n && "object" == typeof n && null == n.nodeType && !Array.isArray(n)) {
                        for (var r in n)
                            if (Object.prototype.hasOwnProperty.call(n, r)) {
                                var a = n[r];
                                "string" == typeof a ? e.setAttribute(r, a) : null != a && (e[r] = a)
                            } t++
                    }
                    for (; t < arguments.length; t++) i(e, arguments[t]);
                    return e
                }

                function i(e, t) {
                    if ("string" == typeof t) e.appendChild(document.createTextNode(t));
                    else if (null == t);
                    else if (null != t.nodeType) e.appendChild(t);
                    else {
                        if (!Array.isArray(t)) throw new RangeError("Unsupported child node: " + t);
                        for (var n = 0; n < t.length; n++) i(e, t[n])
                    }
                }
                n.d(t, {
                    Z: () => r
                })
            },
            605: (e, t, n) => {
                "use strict";
                n.d(t, {
                    V: () => o
                });
                const r = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
                    i = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
                    a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
                class o {
                    constructor(e, t) {
                        this.rules = [];
                        let {
                            finish: n
                        } = t || {};

                        function r(e) {
                            return /^@/.test(e) ? [e] : e.split(/,\s*/)
                        }

                        function i(e, t, a, o) {
                            let s = [],
                                l = /^@(\w+)\b/.exec(e[0]),
                                c = l && "keyframes" == l[1];
                            if (l && null == t) return a.push(e[0] + ";");
                            for (let n in t) {
                                let o = t[n];
                                if (/&/.test(n)) i(n.split(/,\s*/).map((t => e.map((e => t.replace(/&/, e))))).reduce(((e, t) => e.concat(t))), o, a);
                                else if (o && "object" == typeof o) {
                                    if (!l) throw new RangeError("The value of a property (" + n + ") should be a primitive value.");
                                    i(r(n), o, s, c)
                                } else null != o && s.push(n.replace(/_.*/, "").replace(/[A-Z]/g, (e => "-" + e.toLowerCase())) + ": " + o + ";")
                            }(s.length || c) && a.push((!n || l || o ? e : e.map(n)).join(", ") + " {" + s.join(" ") + "}")
                        }
                        for (let a in e) i(r(a), e[a], this.rules)
                    }
                    getRules() {
                        return this.rules.join("\n")
                    }
                    static newName() {
                        let e = a[r] || 1;
                        return a[r] = e + 1, "\u037c" + e.toString(36)
                    }
                    static mount(e, t, n) {
                        let r = e[i],
                            a = n && n.nonce;
                        r ? a && r.setNonce(a) : r = new l(e, a), r.mount(Array.isArray(t) ? t : [t])
                    }
                }
                let s = new Map;
                class l {
                    constructor(e, t) {
                        let n = e.ownerDocument || e,
                            r = n.defaultView;
                        if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
                            let t = s.get(n);
                            if (t) return e.adoptedStyleSheets = [t.sheet, ...e.adoptedStyleSheets], e[i] = t;
                            this.sheet = new r.CSSStyleSheet, e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], s.set(n, this)
                        } else {
                            this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
                            let r = e.head || e;
                            r.insertBefore(this.styleTag, r.firstChild)
                        }
                        this.modules = [], e[i] = this
                    }
                    mount(e) {
                        let t = this.sheet,
                            n = 0,
                            r = 0;
                        for (let i = 0; i < e.length; i++) {
                            let a = e[i],
                                o = this.modules.indexOf(a);
                            if (o < r && o > -1 && (this.modules.splice(o, 1), r--, o = -1), -1 == o) {
                                if (this.modules.splice(r++, 0, a), t)
                                    for (let e = 0; e < a.rules.length; e++) t.insertRule(a.rules[e], n++)
                            } else {
                                for (; r < o;) n += this.modules[r++].rules.length;
                                n += a.rules.length, r++
                            }
                        }
                        if (!t) {
                            let e = "";
                            for (let t = 0; t < this.modules.length; t++) e += this.modules[t].getRules() + "\n";
                            this.styleTag.textContent = e
                        }
                    }
                    setNonce(e) {
                        this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e)
                    }
                }
            },
            570: (e, t, n) => {
                "use strict";
                n.d(t, {
                    YG: () => c,
                    uY: () => i,
                    ue: () => r
                });
                for (var r = {
                        8: "Backspace",
                        9: "Tab",
                        10: "Enter",
                        12: "NumLock",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
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
                        44: "PrintScreen",
                        45: "Insert",
                        46: "Delete",
                        59: ";",
                        61: "=",
                        91: "Meta",
                        92: "Meta",
                        106: "*",
                        107: "+",
                        108: ",",
                        109: "-",
                        110: ".",
                        111: "/",
                        144: "NumLock",
                        145: "ScrollLock",
                        160: "Shift",
                        161: "Shift",
                        162: "Control",
                        163: "Control",
                        164: "Alt",
                        165: "Alt",
                        173: "-",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'"
                    }, i = {
                        48: ")",
                        49: "!",
                        50: "@",
                        51: "#",
                        52: "$",
                        53: "%",
                        54: "^",
                        55: "&",
                        56: "*",
                        57: "(",
                        59: ":",
                        61: "+",
                        173: "_",
                        186: ":",
                        187: "+",
                        188: "<",
                        189: "_",
                        190: ">",
                        191: "?",
                        192: "~",
                        219: "{",
                        220: "|",
                        221: "}",
                        222: '"'
                    }, a = "undefined" != typeof navigator && /Mac/.test(navigator.platform), o = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), s = 0; s < 10; s++) r[48 + s] = r[96 + s] = String(s);
                for (s = 1; s <= 24; s++) r[s + 111] = "F" + s;
                for (s = 65; s <= 90; s++) r[s] = String.fromCharCode(s + 32), i[s] = String.fromCharCode(s);
                for (var l in r) i.hasOwnProperty(l) || (i[l] = r[l]);

                function c(e) {
                    var t = !(a && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || o && e.shiftKey && e.key && 1 == e.key.length || "Unidentified" == e.key) && e.key || (e.shiftKey ? i : r)[e.keyCode] || e.key || "Unidentified";
                    return "Esc" == t && (t = "Escape"), "Del" == t && (t = "Delete"), "Left" == t && (t = "ArrowLeft"), "Up" == t && (t = "ArrowUp"), "Right" == t && (t = "ArrowRight"), "Down" == t && (t = "ArrowDown"), t
                }
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r](a, a.exports, n), a.exports
    }
    n.m = e, (() => {
        var e = [];
        n.O = (t, r, i, a) => {
            if (!r) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    r = e[u][0], i = e[u][1], a = e[u][2];
                    for (var s = !0, l = 0; l < r.length; l++)(!1 & a || o >= a) && Object.keys(n.O).every((e => n.O[e](r[l]))) ? r.splice(l--, 1) : (s = !1, a < o && (o = a));
                    if (s) {
                        e.splice(u--, 1);
                        var c = i();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [r, i, a]
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {
            179: 0
        };
        n.O.j = t => 0 === e[t];
        var t = (t, r) => {
                var i, a, o = r[0],
                    s = r[1],
                    l = r[2],
                    c = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (i in s) n.o(s, i) && (n.m[i] = s[i]);
                    if (l) var u = l(n)
                }
                for (t && t(r); c < o.length; c++) a = o[c], n.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return n.O(u)
            },
            r = self.webpackChunkjson_viewer = self.webpackChunkjson_viewer || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })();
    var r = n.O(void 0, [474, 264, 801], (() => n(508)));
    r = n.O(r)
})();
//# sourceMappingURL=main.ac3fa029.js.map