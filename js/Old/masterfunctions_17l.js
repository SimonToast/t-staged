function flagSwap() {
    str = $(".menu__title").text(), rg = /[a-zA-Z]+/g, el = $("#footer-country-select .has-flag-uk").first(), el.html(el.html().replace(/GBP/gi, str.match(rg)[0])), currentFlag = $(".has-flag").attr("class").split(" ").pop(), $("#footerCountryFlag").removeClass("has-flag-uk"), $("#footerCountryFlag").addClass(currentFlag)
}

function getParameterByName(a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
        c = b.exec(location.search);
    return null == c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
}
swatched = !1,
    function(a, b) {
        function c(b, c) {
            var e, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (!!(g = a("img[usemap=#" + f + "]")[0]) && d(g))) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
        }

        function d(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        var e = 0,
            f = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "1.10.3",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            focus: function(b) {
                return function(c, d) {
                    return "number" == typeof c ? this.each(function() {
                        var b = this;
                        setTimeout(function() {
                            a(b).focus(), d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            scrollParent: function() {
                var b;
                return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
            },
            zIndex: function(c) {
                if (c !== b) return this.css("zIndex", c);
                if (this.length)
                    for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                        if (("absolute" === (d = f.css("position")) || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                        f = f.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    f.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                return function(c) {
                    return !!a.data(c, b)
                }
            }) : function(b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function(b) {
                return c(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function(b) {
                var d = a.attr(b, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && c(b, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
            function e(b, c, d, e) {
                return a.each(f, function() {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }
            var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
                g = d.toLowerCase(),
                h = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + d] = function(c) {
                return c === b ? h["inner" + d].call(this) : this.each(function() {
                    a(this).css(g, e(this, c) + "px")
                })
            }, a.fn["outer" + d] = function(b, c) {
                return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                    a(this).css(g, e(this, b, !0, c) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
            return function(c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
            disableSelection: function() {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), a.extend(a.ui, {
            plugin: {
                add: function(b, c, d) {
                    var e, f = a.ui[b].prototype;
                    for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
                },
                call: function(a, b, c) {
                    var d, e = a.plugins[b];
                    if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                        for (d = 0; e.length > d; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
                }
            },
            hasScroll: function(b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    e = !1;
                return b[d] > 0 || (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            }
        })
    }(jQuery),
    function(a, b) {
        var c = 0,
            d = Array.prototype.slice,
            e = a.cleanData;
        a.cleanData = function(b) {
            for (var c, d = 0; null != (c = b[d]); d++) try {
                a(c).triggerHandler("remove")
            } catch (a) {}
            e(b)
        }, a.widget = function(c, d, e) {
            var f, g, h, i, j = {},
                k = c.split(".")[0];
            c = c.split(".")[1], f = k + "-" + c, e || (e = d, d = a.Widget), a.expr[":"][f.toLowerCase()] = function(b) {
                return !!a.data(b, f)
            }, a[k] = a[k] || {}, g = a[k][c], h = a[k][c] = function(a, c) {
                return this._createWidget ? (arguments.length && this._createWidget(a, c), b) : new h(a, c)
            }, a.extend(h, g, {
                version: e.version,
                _proto: a.extend({}, e),
                _childConstructors: []
            }), i = new d, i.options = a.widget.extend({}, i.options), a.each(e, function(c, e) {
                return a.isFunction(e) ? (j[c] = function() {
                    var a = function() {
                            return d.prototype[c].apply(this, arguments)
                        },
                        b = function(a) {
                            return d.prototype[c].apply(this, a)
                        };
                    return function() {
                        var c, d = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = b, c = e.apply(this, arguments), this._super = d, this._superApply = f, c
                    }
                }(), b) : (j[c] = e, b)
            }), h.prototype = a.widget.extend(i, {
                widgetEventPrefix: g ? i.widgetEventPrefix : c
            }, j, {
                constructor: h,
                namespace: k,
                widgetName: c,
                widgetFullName: f
            }), g ? (a.each(g._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, h, c._proto)
            }), delete g._childConstructors) : d._childConstructors.push(h), a.widget.bridge(c, h)
        }, a.widget.extend = function(c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)
                for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
            return c
        }, a.widget.bridge = function(c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function(g) {
                var h = "string" == typeof g,
                    i = d.call(arguments, 1),
                    j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, this.each(h ? function() {
                    var d, e = a.data(this, f);
                    return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : b) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                } : function() {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof c)
                    if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                        for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; e.length - 1 > g; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                        if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                        f[c] = d
                    } else {
                        if (d === b) return this.options[c] === b ? null : this.options[c];
                        h[c] = d
                    }
                return this._setOptions(h), this
            },
            _setOptions: function(a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(c, d, e) {
                var f, g = this;
                "boolean" != typeof c && (e = d, d = c, c = !1), e ? (d = f = a(d), this.bindings = this.bindings.add(d)) : (e = d, d = this.element, f = this.widget()), a.each(e, function(e, h) {
                    function i() {
                        return c || !0 !== g.options.disabled && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof h ? g[h] : h).apply(g, arguments) : b
                    }
                    "string" != typeof h && (i.guid = h.guid = h.guid || i.guid || a.guid++);
                    var j = e.match(/^(\w+)\s*(.*)$/),
                        k = j[1] + g.eventNamespace,
                        l = j[2];
                    l ? f.delegate(l, k, i) : d.bind(k, i)
                })
            },
            _off: function(a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function(a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && !1 === g.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? !0 === e || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        })
    }(jQuery),
    function(a) {
        var b = !1;
        a(document).mouseup(function() {
            b = !1
        }), a.widget("ui.mouse", {
            version: "1.10.3",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var b = this;
                this.element.bind("mousedown." + this.widgetName, function(a) {
                    return b._mouseDown(a)
                }).bind("click." + this.widgetName, function(c) {
                    return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(c) {
                if (!b) {
                    this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                    var d = this,
                        e = 1 === c.which,
                        f = !("string" != typeof this.options.cancel || !c.target.nodeName) && a(c.target).closest(this.options.cancel).length;
                    return !(e && !f && this._mouseCapture(c)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        d.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = !1 !== this._mouseStart(c), !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                        return d._mouseMove(a)
                    }, this._mouseUpDelegate = function(a) {
                        return d._mouseUp(a)
                    }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0))
                }
            },
            _mouseMove: function(b) {
                return a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
            },
            _mouseUp: function(b) {
                return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
            },
            _mouseDistanceMet: function(a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery),
    function(a) {
        a.widget("ui.draggable", a.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function(b) {
                var c = this.options;
                return !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), !!this.handle && (a(!0 === c.iframeFix ? "iframe" : c.iframeFix).each(function() {
                    a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(a(this).offset()).appendTo("body")
                }), !0))
            },
            _mouseStart: function(b) {
                var c = this.options;
                return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, a.extend(this.offset, {
                    click: {
                        left: b.pageX - this.offset.left,
                        top: b.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), !1 === this._trigger("start", b) ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
            },
            _mouseDrag: function(b, c) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                    var d = this._uiHash();
                    if (!1 === this._trigger("drag", b, d)) return this._mouseUp({}), !1;
                    this.position = d.position
                }
                return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
            },
            _mouseStop: function(b) {
                var c = this,
                    d = !1;
                return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), !("original" === this.options.helper && !a.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== c._trigger("stop", b) && c._clear()
                }) : !1 !== this._trigger("stop", b) && this._clear(), !1)
            },
            _mouseUp: function(b) {
                return a("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(b) {
                return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length
            },
            _createHelper: function(b) {
                var c = this.options,
                    d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
            },
            _adjustOffsetFromHelper: function(b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                var b = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.element.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var b, c, d, e = this.options;
                return e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), void((d = c[0]) && (b = "hidden" !== c.css("overflow"), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c))) : void(this.containment = null)
            },
            _convertPositionTo: function(b, c) {
                c || (c = this.position);
                var d = "absolute" === b ? 1 : -1,
                    e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
                return this.offset.scroll || (this.offset.scroll = {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }), {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * d
                }
            },
            _generatePosition: function(b) {
                var c, d, e, f, g = this.options,
                    h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    i = b.pageX,
                    j = b.pageY;
                return this.offset.scroll || (this.offset.scroll = {
                    top: h.scrollTop(),
                    left: h.scrollLeft()
                }), this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, b.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), b.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), b.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)), {
                    top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                    left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(b, c, d) {
                return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), a.ui.plugin.add("draggable", "connectToSortable", {
            start: function(b, c) {
                var d = a(this).data("ui-draggable"),
                    e = d.options,
                    f = a.extend({}, c, {
                        item: d.element
                    });
                d.sortables = [], a(e.connectToSortable).each(function() {
                    var c = a.data(this, "ui-sortable");
                    c && !c.options.disabled && (d.sortables.push({
                        instance: c,
                        shouldRevert: c.options.revert
                    }), c.refreshPositions(), c._trigger("activate", b, f))
                })
            },
            stop: function(b, c) {
                var d = a(this).data("ui-draggable"),
                    e = a.extend({}, c, {
                        item: d.element
                    });
                a.each(d.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
                })
            },
            drag: function(b, c) {
                var d = a(this).data("ui-draggable"),
                    e = this;
                a.each(d.sortables, function() {
                    var f = !1,
                        g = this;
                    this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, a.each(d.sortables, function() {
                        return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), f
                    })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return c.helper[0]
                    }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
                })
            }
        }), a.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var b = a("body"),
                    c = a(this).data("ui-draggable").options;
                b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
            },
            stop: function() {
                var b = a(this).data("ui-draggable").options;
                b._cursor && a("body").css("cursor", b._cursor)
            }
        }), a.ui.plugin.add("draggable", "opacity", {
            start: function(b, c) {
                var d = a(c.helper),
                    e = a(this).data("ui-draggable").options;
                d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
            },
            stop: function(b, c) {
                var d = a(this).data("ui-draggable").options;
                d._opacity && a(c.helper).css("opacity", d._opacity)
            }
        }), a.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var b = a(this).data("ui-draggable");
                b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
            },
            drag: function(b) {
                var c = a(this).data("ui-draggable"),
                    d = c.options,
                    e = !1;
                c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), !1 !== e && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
            }
        }), a.ui.plugin.add("draggable", "snap", {
            start: function() {
                var b = a(this).data("ui-draggable"),
                    c = b.options;
                b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function() {
                    var c = a(this),
                        d = c.offset();
                    this !== b.element[0] && b.snapElements.push({
                        item: this,
                        width: c.outerWidth(),
                        height: c.outerHeight(),
                        top: d.top,
                        left: d.left
                    })
                })
            },
            drag: function(b, c) {
                var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"),
                    o = n.options,
                    p = o.snapTolerance,
                    q = c.offset.left,
                    r = q + n.helperProportions.width,
                    s = c.offset.top,
                    t = s + n.helperProportions.height;
                for (l = n.snapElements.length - 1; l >= 0; l--) h = n.snapElements[l].left, i = h + n.snapElements[l].width, j = n.snapElements[l].top, k = j + n.snapElements[l].height, h - p > r || q > i + p || j - p > t || s > k + p || !a.contains(n.snapElements[l].item.ownerDocument, n.snapElements[l].item) ? (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {
                    snapItem: n.snapElements[l].item
                })), n.snapElements[l].snapping = !1) : ("inner" !== o.snapMode && (d = p >= Math.abs(j - t), e = p >= Math.abs(k - s), f = p >= Math.abs(h - r), g = p >= Math.abs(i - q), d && (c.position.top = n._convertPositionTo("relative", {
                    top: j - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i
                }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = p >= Math.abs(j - s), e = p >= Math.abs(k - t), f = p >= Math.abs(h - q), g = p >= Math.abs(i - r), d && (c.position.top = n._convertPositionTo("relative", {
                    top: j,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i - n.helperProportions.width
                }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {
                    snapItem: n.snapElements[l].item
                })), n.snapElements[l].snapping = d || e || f || g || m)
            }
        }), a.ui.plugin.add("draggable", "stack", {
            start: function() {
                var b, c = this.data("ui-draggable").options,
                    d = a.makeArray(a(c.stack)).sort(function(b, c) {
                        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                    });
                d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function(c) {
                    a(this).css("zIndex", b + c)
                }), this.css("zIndex", b + d.length))
            }
        }), a.ui.plugin.add("draggable", "zIndex", {
            start: function(b, c) {
                var d = a(c.helper),
                    e = a(this).data("ui-draggable").options;
                d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
            },
            stop: function(b, c) {
                var d = a(this).data("ui-draggable").options;
                d._zIndex && a(c.helper).css("zIndex", d._zIndex)
            }
        })
    }(jQuery),
    function(a) {
        function b(a, b, c) {
            return a > b && b + c > a
        }
        a.widget("ui.droppable", {
            version: "1.10.3",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var b = this.options,
                    c = b.accept;
                this.isover = !1, this.isout = !0, this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function() {
                for (var b = 0, c = a.ui.ddmanager.droppables[this.options.scope]; c.length > b; b++) c[b] === this && c.splice(b, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(b, c) {
                "accept" === b && (this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                }), a.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
            },
            _deactivate: function(b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
            },
            _over: function(b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
            },
            _out: function(b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
            },
            _drop: function(b, c) {
                var d = c || a.ui.ddmanager.current,
                    e = !1;
                return !(!d || (d.currentItem || d.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var b = a.data(this, "ui-droppable");
                    return b.options.greedy && !b.options.disabled && b.options.scope === d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                        offset: b.element.offset()
                    }), b.options.tolerance) ? (e = !0, !1) : void 0
                }), !e && (!!this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element)))
            },
            ui: function(a) {
                return {
                    draggable: a.currentItem || a.element,
                    helper: a.helper,
                    position: a.position,
                    offset: a.positionAbs
                }
            }
        }), a.ui.intersect = function(a, c, d) {
            if (!c.offset) return !1;
            var e, f, g = (a.positionAbs || a.position.absolute).left,
                h = g + a.helperProportions.width,
                i = (a.positionAbs || a.position.absolute).top,
                j = i + a.helperProportions.height,
                k = c.offset.left,
                l = k + c.proportions.width,
                m = c.offset.top,
                n = m + c.proportions.height;
            switch (d) {
                case "fit":
                    return g >= k && l >= h && i >= m && n >= j;
                case "intersect":
                    return g + a.helperProportions.width / 2 > k && l > h - a.helperProportions.width / 2 && i + a.helperProportions.height / 2 > m && n > j - a.helperProportions.height / 2;
                case "pointer":
                    return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, f = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, b(f, m, c.proportions.height) && b(e, k, c.proportions.width);
                case "touch":
                    return (i >= m && n >= i || j >= m && n >= j || m > i && j > n) && (g >= k && l >= g || h >= k && l >= h || k > g && h > l);
                default:
                    return !1
            }
        }, a.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function(b, c) {
                var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
                    g = c ? c.type : null,
                    h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
                a: for (d = 0; f.length > d; d++)
                    if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                        for (e = 0; h.length > e; e++)
                            if (h[e] === f[d].element[0]) {
                                f[d].proportions.height = 0;
                                continue a
                            }
                        f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions = {
                            width: f[d].element[0].offsetWidth,
                            height: f[d].element[0].offsetHeight
                        })
                    }
            },
            drop: function(b, c) {
                var d = !1;
                return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
                }), d
            },
            dragStart: function(b, c) {
                b.element.parentsUntil("body").bind("scroll.droppable", function() {
                    b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
                })
            },
            drag: function(b, c) {
                b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance),
                            h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                        h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                            return a.data(this, "ui-droppable").options.scope === e
                        }), f.length && (d = a.data(f[0], "ui-droppable"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                    }
                })
            },
            dragStop: function(b, c) {
                b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            }
        }
    }(jQuery),
    function(a) {
        function b(a) {
            return parseInt(a, 10) || 0
        }

        function c(a) {
            return !isNaN(parseInt(a, 10))
        }
        a.widget("ui.resizable", a.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var b, c, d, e, f, g = this,
                    h = this.options;
                if (this.element.addClass("ui-resizable"), a.extend(this, {
                        _aspectRatio: !!h.aspectRatio,
                        aspectRatio: h.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; b.length > c; c++) d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
                        zIndex: h.zIndex
                    }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
                this._renderAxis = function(b) {
                    var c, d, e, f;
                    b = b || this.element;
                    for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
                }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
                }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
                }).mouseleave(function() {
                    h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var b, c = function(b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
            },
            _mouseCapture: function(b) {
                var c, d, e = !1;
                for (c in this.handles)((d = a(this.handles[c])[0]) === b.target || a.contains(d, b.target)) && (e = !0);
                return !this.options.disabled && e
            },
            _mouseStart: function(c) {
                var d, e, f, g = this.options,
                    h = this.element.position(),
                    i = this.element;
                return this.resizing = !0, /absolute/.test(i.css("position")) ? i.css({
                    position: "absolute",
                    top: i.css("top"),
                    left: i.css("left")
                }) : i.is(".ui-draggable") && i.css({
                    position: "absolute",
                    top: h.top,
                    left: h.left
                }), this._renderProxy(), d = b(this.helper.css("left")), e = b(this.helper.css("top")), g.containment && (d += a(g.containment).scrollLeft() || 0, e += a(g.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: d,
                    top: e
                }, this.size = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.originalSize = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.originalPosition = {
                    left: d,
                    top: e
                }, this.sizeDiff = {
                    width: i.outerWidth() - i.width(),
                    height: i.outerHeight() - i.height()
                }, this.originalMousePosition = {
                    left: c.pageX,
                    top: c.pageY
                }, this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1, f = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === f ? this.axis + "-resize" : f), i.addClass("ui-resizable-resizing"), this._propagate("start", c), !0
            },
            _mouseDrag: function(b) {
                var c, d = this.helper,
                    e = {},
                    f = this.originalMousePosition,
                    g = this.axis,
                    h = this.position.top,
                    i = this.position.left,
                    j = this.size.width,
                    k = this.size.height,
                    l = b.pageX - f.left || 0,
                    m = b.pageY - f.top || 0,
                    n = this._change[g];
                return !!n && (c = n.apply(this, [b, l, m]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), this.position.top !== h && (e.top = this.position.top + "px"), this.position.left !== i && (e.left = this.position.left + "px"), this.size.width !== j && (e.width = this.size.width + "px"), this.size.height !== k && (e.height = this.size.height + "px"), d.css(e), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(e) || this._trigger("resize", b, this.ui()), !1)
            },
            _mouseStop: function(b) {
                this.resizing = !1;
                var c, d, e, f, g, h, i, j = this.options,
                    k = this;
                return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && a.ui.hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                    width: k.helper.width() - f,
                    height: k.helper.height() - e
                }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                    top: i,
                    left: h
                })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function(a) {
                var b, d, e, f, g, h = this.options;
                g = {
                    minWidth: c(h.minWidth) ? h.minWidth : 0,
                    maxWidth: c(h.maxWidth) ? h.maxWidth : 1 / 0,
                    minHeight: c(h.minHeight) ? h.minHeight : 0,
                    maxHeight: c(h.maxHeight) ? h.maxHeight : 1 / 0
                }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), g.maxWidth > d && (g.maxWidth = d), g.maxHeight > f && (g.maxHeight = f)), this._vBoundaries = g
            },
            _updateCache: function(a) {
                this.offset = this.helper.offset(), c(a.left) && (this.position.left = a.left), c(a.top) && (this.position.top = a.top), c(a.height) && (this.size.height = a.height), c(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function(a) {
                var b = this.position,
                    d = this.size,
                    e = this.axis;
                return c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio), "sw" === e && (a.left = b.left + (d.width - a.width), a.top = null), "nw" === e && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width)), a
            },
            _respectSize: function(a) {
                var b = this._vBoundaries,
                    d = this.axis,
                    e = c(a.width) && b.maxWidth && b.maxWidth < a.width,
                    f = c(a.height) && b.maxHeight && b.maxHeight < a.height,
                    g = c(a.width) && b.minWidth && b.minWidth > a.width,
                    h = c(a.height) && b.minHeight && b.minHeight > a.height,
                    i = this.originalPosition.left + this.originalSize.width,
                    j = this.position.top + this.size.height,
                    k = /sw|nw|w/.test(d),
                    l = /nw|ne|n/.test(d);
                return g && (a.width = b.minWidth), h && (a.height = b.minHeight), e && (a.width = b.maxWidth), f && (a.height = b.maxHeight), g && k && (a.left = i - b.minWidth), e && k && (a.left = i - b.maxWidth), h && l && (a.top = j - b.minHeight), f && l && (a.top = j - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    var a, b, c, d, e, f = this.helper || this.element;
                    for (a = 0; this._proportionallyResizeElements.length > a; a++) {
                        if (e = this._proportionallyResizeElements[a], !this.borderDif)
                            for (this.borderDif = [], c = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], d = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")], b = 0; c.length > b; b++) this.borderDif[b] = (parseInt(c[b], 10) || 0) + (parseInt(d[b], 10) || 0);
                        e.css({
                            height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var b = this.element,
                    c = this.options;
                this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(a, b) {
                    return {
                        width: this.originalSize.width + b
                    }
                },
                w: function(a, b) {
                    var c = this.originalSize;
                    return {
                        left: this.originalPosition.left + b,
                        width: c.width - b
                    }
                },
                n: function(a, b, c) {
                    var d = this.originalSize;
                    return {
                        top: this.originalPosition.top + c,
                        height: d.height - c
                    }
                },
                s: function(a, b, c) {
                    return {
                        height: this.originalSize.height + c
                    }
                },
                se: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                sw: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                },
                ne: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                nw: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }
            },
            _propagate: function(b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), a.ui.plugin.add("resizable", "animate", {
            stop: function(b) {
                var c = a(this).data("ui-resizable"),
                    d = c.options,
                    e = c._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                    h = f ? 0 : c.sizeDiff.width,
                    i = {
                        width: c.size.width - h,
                        height: c.size.height - g
                    },
                    j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                    k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(i, k && j ? {
                    top: k,
                    left: j
                } : {}), {
                    duration: d.animateDuration,
                    easing: d.animateEasing,
                    step: function() {
                        var d = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"), 10)
                        };
                        e && e.length && a(e[0]).css({
                            width: d.width,
                            height: d.height
                        }), c._updateCache(d), c._propagate("resize", b)
                    }
                })
            }
        }), a.ui.plugin.add("resizable", "containment", {
            start: function() {
                var c, d, e, f, g, h, i, j = a(this).data("ui-resizable"),
                    k = j.options,
                    l = j.element,
                    m = k.containment,
                    n = m instanceof a ? m.get(0) : /parent/.test(m) ? l.parent().get(0) : m;
                n && (j.containerElement = a(n), /document/.test(m) || m === document ? (j.containerOffset = {
                    left: 0,
                    top: 0
                }, j.containerPosition = {
                    left: 0,
                    top: 0
                }, j.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (c = a(n), d = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, e) {
                    d[a] = b(c.css("padding" + e))
                }), j.containerOffset = c.offset(), j.containerPosition = c.position(), j.containerSize = {
                    height: c.innerHeight() - d[3],
                    width: c.innerWidth() - d[1]
                }, e = j.containerOffset, f = j.containerSize.height, g = j.containerSize.width, h = a.ui.hasScroll(n, "left") ? n.scrollWidth : g, i = a.ui.hasScroll(n) ? n.scrollHeight : f, j.parentData = {
                    element: n,
                    left: e.left,
                    top: e.top,
                    width: h,
                    height: i
                }))
            },
            resize: function(b) {
                var c, d, e, f, g = a(this).data("ui-resizable"),
                    h = g.options,
                    i = g.containerOffset,
                    j = g.position,
                    k = g._aspectRatio || b.shiftKey,
                    l = {
                        top: 0,
                        left: 0
                    },
                    m = g.containerElement;
                m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? i.top : 0), g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top, c = Math.abs((g._helper, g.offset.left - l.left + g.sizeDiff.width)), d = Math.abs((g._helper ? g.offset.top - l.top : g.offset.top - i.top) + g.sizeDiff.height), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f && (c -= g.parentData.left), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio))
            },
            stop: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = b.containerOffset,
                    e = b.containerPosition,
                    f = b.containerElement,
                    g = a(b.helper),
                    h = g.offset(),
                    i = g.outerWidth() - b.sizeDiff.width,
                    j = g.outerHeight() - b.sizeDiff.height;
                b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                })
            }
        }), a.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = function(b) {
                        a(b).each(function() {
                            var b = a(this);
                            b.data("ui-resizable-alsoresize", {
                                width: parseInt(b.width(), 10),
                                height: parseInt(b.height(), 10),
                                left: parseInt(b.css("left"), 10),
                                top: parseInt(b.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function(a) {
                    d(a)
                })
            },
            resize: function(b, c) {
                var d = a(this).data("ui-resizable"),
                    e = d.options,
                    f = d.originalSize,
                    g = d.originalPosition,
                    h = {
                        height: d.size.height - f.height || 0,
                        width: d.size.width - f.width || 0,
                        top: d.position.top - g.top || 0,
                        left: d.position.left - g.left || 0
                    },
                    i = function(b, d) {
                        a(b).each(function() {
                            var b = a(this),
                                e = a(this).data("ui-resizable-alsoresize"),
                                f = {},
                                g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            a.each(g, function(a, b) {
                                var c = (e[b] || 0) + (h[b] || 0);
                                c && c >= 0 && (f[b] = c || null)
                            }), b.css(f)
                        })
                    };
                "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function(a, b) {
                    i(a, b)
                })
            },
            stop: function() {
                a(this).removeData("resizable-alsoresize")
            }
        }), a.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = b.size;
                b.ghost = b.originalElement.clone(), b.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
            },
            resize: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.ghost.css({
                    position: "relative",
                    height: b.size.height,
                    width: b.size.width
                })
            },
            stop: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        }), a.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    d = b.size,
                    e = b.originalSize,
                    f = b.originalPosition,
                    g = b.axis,
                    h = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid,
                    i = h[0] || 1,
                    j = h[1] || 1,
                    k = Math.round((d.width - e.width) / i) * i,
                    l = Math.round((d.height - e.height) / j) * j,
                    m = e.width + k,
                    n = e.height + l,
                    o = c.maxWidth && m > c.maxWidth,
                    p = c.maxHeight && n > c.maxHeight,
                    q = c.minWidth && c.minWidth > m,
                    r = c.minHeight && c.minHeight > n;
                c.grid = h, q && (m += i), r && (n += j), o && (m -= i), p && (n -= j), /^(se|s|e)$/.test(g) ? (b.size.width = m, b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.left = f.left - k) : (b.size.width = m, b.size.height = n, b.position.top = f.top - l, b.position.left = f.left - k)
            }
        })
    }(jQuery),
    function(a) {
        a.widget("ui.selectable", a.ui.mouse, {
            version: "1.10.3",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var b, c = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function() {
                        var b = a(this),
                            c = b.offset();
                        a.data(this, "selectable-item", {
                            element: this,
                            $element: b,
                            left: c.left,
                            top: c.top,
                            right: c.left + b.outerWidth(),
                            bottom: c.top + b.outerHeight(),
                            startselected: !1,
                            selected: b.hasClass("ui-selected"),
                            selecting: b.hasClass("ui-selecting"),
                            unselecting: b.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(b) {
                var c = this,
                    d = this.options;
                this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                    left: b.pageX,
                    top: b.pageY,
                    width: 0,
                    height: 0
                }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var d = a.data(this, "selectable-item");
                    d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                        unselecting: d.element
                    }))
                }), a(b.target).parents().addBack().each(function() {
                    var d, e = a.data(this, "selectable-item");
                    return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                        selecting: e.element
                    }) : c._trigger("unselecting", b, {
                        unselecting: e.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(b) {
                if (this.dragged = !0, !this.options.disabled) {
                    var c, d = this,
                        e = this.options,
                        f = this.opos[0],
                        g = this.opos[1],
                        h = b.pageX,
                        i = b.pageY;
                    return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                        left: f,
                        top: g,
                        width: h - f,
                        height: i - g
                    }), this.selectees.each(function() {
                        var c = a.data(this, "selectable-item"),
                            j = !1;
                        c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || f > c.right || c.top > i || g > c.bottom) : "fit" === e.tolerance && (j = c.left > f && h > c.right && c.top > g && i > c.bottom), j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {
                            selecting: c.element
                        }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {
                            unselecting: c.element
                        }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
                            unselecting: c.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(b) {
                var c = this;
                return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
                        unselected: d.element
                    })
                }), a(".ui-selecting", this.element[0]).each(function() {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                        selected: d.element
                    })
                }), this._trigger("stop", b), this.helper.remove(), !1
            }
        })
    }(jQuery),
    function(a) {
        function b(a, b, c) {
            return a > b && b + c > a
        }

        function c(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        }
        a.widget("ui.sortable", a.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var a = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === a.axis || c(this.items[0].item)), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(b, c) {
                "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(b, c) {
                var d = null,
                    e = !1,
                    f = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(b), a(b.target).parents().each(function() {
                    return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
                }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), !(!d || this.options.handle && !c && (a(this.options.handle, d).find("*").addBack().each(function() {
                    this === b.target && (e = !0)
                }), !e)) && (this.currentItem = d, this._removeCurrentsFromItems(), !0)))
            },
            _mouseStart: function(b, c, d) {
                var e, f, g = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, a.extend(this.offset, {
                        click: {
                            left: b.pageX - this.offset.left,
                            top: b.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                    for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
                return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
            },
            _mouseDrag: function(b) {
                var c, d, e, f, g = this.options,
                    h = !1;
                for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), !1 !== h && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                    if (d = this.items[c], e = d.item[0], (f = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" !== this.options.type || !a.contains(this.element[0], e))) {
                        if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                        this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                        break
                    }
                return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(b, c) {
                if (b) {
                    if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                        var d = this,
                            e = this.placeholder.offset(),
                            f = this.options.axis,
                            g = {};
                        f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                            d._clear(b)
                        })
                    } else this._clear(b, c);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(b) {
                var c = this._getItemsAsjQuery(b && b.connected),
                    d = [];
                return b = b || {}, a(c).each(function() {
                    var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                    c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
                }), !d.length && b.key && d.push(b.key + "="), d.join("&")
            },
            toArray: function(b) {
                var c = this._getItemsAsjQuery(b && b.connected),
                    d = [];
                return b = b || {}, c.each(function() {
                    d.push(a(b.item || this).attr(b.attribute || "id") || "")
                }), d
            },
            _intersectsWith: function(a) {
                var b = this.positionAbs.left,
                    c = b + this.helperProportions.width,
                    d = this.positionAbs.top,
                    e = d + this.helperProportions.height,
                    f = a.left,
                    g = f + a.width,
                    h = a.top,
                    i = h + a.height,
                    j = this.offset.click.top,
                    k = this.offset.click.left,
                    l = "x" === this.options.axis || d + j > h && i > d + j,
                    m = "y" === this.options.axis || b + k > f && g > b + k,
                    n = l && m;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && i > e - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(a) {
                var c = "x" === this.options.axis || b(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                    d = "y" === this.options.axis || b(this.positionAbs.left + this.offset.click.left, a.left, a.width),
                    e = c && d,
                    f = this._getDragVerticalDirection(),
                    g = this._getDragHorizontalDirection();
                return !!e && (this.floating ? g && "right" === g || "down" === f ? 2 : 1 : f && ("down" === f ? 2 : 1))
            },
            _intersectsWithSides: function(a) {
                var c = b(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                    d = b(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                    e = this._getDragVerticalDirection(),
                    f = this._getDragHorizontalDirection();
                return this.floating && f ? "right" === f && d || "left" === f && !d : e && ("down" === e && c || "up" === e && !c)
            },
            _getDragVerticalDirection: function() {
                var a = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== a && (a > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var a = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== a && (a > 0 ? "right" : "left")
            },
            refresh: function(a) {
                return this._refreshItems(a), this.refreshPositions(), this
            },
            _connectWith: function() {
                var a = this.options;
                return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
            },
            _getItemsAsjQuery: function(b) {
                var c, d, e, f, g = [],
                    h = [],
                    i = this._connectWith();
                if (i && b)
                    for (c = i.length - 1; c >= 0; c--)
                        for (e = a(i[c]), d = e.length - 1; d >= 0; d--)(f = a.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
                for (h.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), c = h.length - 1; c >= 0; c--) h[c][0].each(function() {
                    g.push(this)
                });
                return a(g)
            },
            _removeCurrentsFromItems: function() {
                var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = a.grep(this.items, function(a) {
                    for (var c = 0; b.length > c; c++)
                        if (b[c] === a.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(b) {
                this.items = [], this.containers = [this];
                var c, d, e, f, g, h, i, j, k = this.items,
                    l = [
                        [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                            item: this.currentItem
                        }) : a(this.options.items, this.element), this]
                    ],
                    m = this._connectWith();
                if (m && this.ready)
                    for (c = m.length - 1; c >= 0; c--)
                        for (e = a(m[c]), d = e.length - 1; d >= 0; d--)(f = a.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                            item: this.currentItem
                        }) : a(f.options.items, f.element), f]), this.containers.push(f));
                for (c = l.length - 1; c >= 0; c--)
                    for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                        item: i,
                        instance: g,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(b) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var c, d, e, f;
                for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
                return this
            },
            _createPlaceholder: function(b) {
                b = b || this;
                var c, d = b.options;
                d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                    element: function() {
                        var d = b.currentItem[0].nodeName.toLowerCase(),
                            e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === d ? b.currentItem.children().each(function() {
                            a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e)
                        }) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
                    },
                    update: function(a, e) {
                        (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
            },
            _contactContainers: function(d) {
                var e, f, g, h, i, j, k, l, m, n, o = null,
                    p = null;
                for (e = this.containers.length - 1; e >= 0; e--)
                    if (!a.contains(this.currentItem[0], this.containers[e].element[0]))
                        if (this._intersectsWith(this.containers[e].containerCache)) {
                            if (o && a.contains(this.containers[e].element[0], o.element[0])) continue;
                            o = this.containers[e], p = e
                        } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", d, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                if (o)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", d, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (g = 1e4, h = null, n = o.floating || c(this.currentItem), i = n ? "left" : "top", j = n ? "width" : "height", k = this.positionAbs[i] + this.offset.click[i], f = this.items.length - 1; f >= 0; f--) a.contains(this.containers[p].element[0], this.items[f].item[0]) && this.items[f].item[0] !== this.currentItem[0] && (!n || b(this.positionAbs.top + this.offset.click.top, this.items[f].top, this.items[f].height)) && (l = this.items[f].item.offset()[i], m = !1, Math.abs(l - k) > Math.abs(l + this.items[f][j] - k) && (m = !0, l += this.items[f][j]), g > Math.abs(l - k) && (g = Math.abs(l - k), h = this.items[f], this.direction = m ? "up" : "down"));
                        if (!h && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return;
                        h ? this._rearrange(d, h, null, !0) : this._rearrange(d, null, this.containers[p].element, !0), this._trigger("change", d, this._uiHash()), this.containers[p]._trigger("change", d, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", d, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(b) {
                var c = this.options,
                    d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
                return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
            },
            _adjustOffsetFromHelper: function(b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.currentItem.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var b, c, d, e = this.options;
                "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(b, c) {
                c || (c = this.position);
                var d = "absolute" === b ? 1 : -1,
                    e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(e[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                }
            },
            _generatePosition: function(b) {
                var c, d, e = this.options,
                    f = b.pageX,
                    g = b.pageY,
                    h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    i = /(html|body)/i.test(h[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                    top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
                }
            },
            _rearrange: function(a, b, c, d) {
                c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var e = this.counter;
                this._delay(function() {
                    e === this.counter && this.refreshPositions(!d)
                })
            },
            _clear: function(a, b) {
                this.reverting = !1;
                var c, d = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (c in this._storedCSS)("auto" === this._storedCSS[c] || "static" === this._storedCSS[c]) && (this._storedCSS[c] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !b && d.push(function(a) {
                        this._trigger("receive", a, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || d.push(function(a) {
                        this._trigger("update", a, this._uiHash())
                    }), this !== this.currentContainer && (b || (d.push(function(a) {
                        this._trigger("remove", a, this._uiHash())
                    }), d.push(function(a) {
                        return function(b) {
                            a._trigger("receive", b, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), d.push(function(a) {
                        return function(b) {
                            a._trigger("update", b, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), c = this.containers.length - 1; c >= 0; c--) b || d.push(function(a) {
                    return function(b) {
                        a._trigger("deactivate", b, this._uiHash(this))
                    }
                }.call(this, this.containers[c])), this.containers[c].containerCache.over && (d.push(function(a) {
                    return function(b) {
                        a._trigger("out", b, this._uiHash(this))
                    }
                }.call(this, this.containers[c])), this.containers[c].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!b) {
                        for (this._trigger("beforeStop", a, this._uiHash()), c = 0; d.length > c; c++) d[c].call(this, a);
                        this._trigger("stop", a, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !b) {
                    for (c = 0; d.length > c; c++) d[c].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(b) {
                var c = b || this;
                return {
                    helper: c.helper,
                    placeholder: c.placeholder || a([]),
                    position: c.position,
                    originalPosition: c.originalPosition,
                    offset: c.positionAbs,
                    item: c.currentItem,
                    sender: b ? b.element : null
                }
            }
        })
    }(jQuery),
    function(a, b) {
        var c = "ui-effects-";
        a.effects = {
                effect: {}
            },
            function(a, b) {
                function c(a, b, c) {
                    var d = l[b.type] || {};
                    return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
                }

                function d(c) {
                    var d = j(),
                        e = d._rgba = [];
                    return c = c.toLowerCase(), o(i, function(a, f) {
                        var g, h = f.re.exec(c),
                            i = h && f.parse(h),
                            j = f.space || "rgba";
                        return i ? (g = d[j](i), d[k[j].cache] = g[k[j].cache], e = d._rgba = g._rgba, !1) : b
                    }), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c]
                }

                function e(a, b, c) {
                    return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
                }
                var f, h = /^([\-+])=\s*(\d+\.?\d*)/,
                    i = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [a[1], a[2], a[3], a[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(a) {
                            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(a) {
                            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(a) {
                            return [a[1], a[2] / 100, a[3] / 100, a[4]]
                        }
                    }],
                    j = a.Color = function(b, c, d, e) {
                        return new a.Color.fn.parse(b, c, d, e)
                    },
                    k = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    l = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    m = j.support = {},
                    n = a("<p>")[0],
                    o = a.each;
                n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
                    b.cache = "_" + a, b.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), j.fn = a.extend(j.prototype, {
                    parse: function(e, g, h, i) {
                        if (e === b) return this._rgba = [null, null, null, null], this;
                        (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                        var l = this,
                            m = a.type(e),
                            n = this._rgba = [];
                        return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                            n[b.idx] = c(e[b.idx], b)
                        }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                            e[b.cache] && (l[b.cache] = e[b.cache].slice())
                        }) : o(k, function(b, d) {
                            var f = d.cache;
                            o(d.props, function(a, b) {
                                if (!l[f] && d.to) {
                                    if ("alpha" === a || null == e[a]) return;
                                    l[f] = d.to(l._rgba)
                                }
                                l[f][b.idx] = c(e[a], b, !0)
                            }), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                        }), this) : b
                    },
                    is: function(a) {
                        var c = j(a),
                            d = !0,
                            e = this;
                        return o(k, function(a, f) {
                            var g, h = c[f.cache];
                            return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], o(f.props, function(a, c) {
                                return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b
                            })), d
                        }), d
                    },
                    _space: function() {
                        var a = [],
                            b = this;
                        return o(k, function(c, d) {
                            b[d.cache] && a.push(c)
                        }), a.pop()
                    },
                    transition: function(a, b) {
                        var d = j(a),
                            e = d._space(),
                            f = k[e],
                            g = 0 === this.alpha() ? j("transparent") : this,
                            h = g[f.cache] || f.to(g._rgba),
                            i = h.slice();
                        return d = d[f.cache], o(f.props, function(a, e) {
                            var f = e.idx,
                                g = h[f],
                                j = d[f],
                                k = l[e.type] || {};
                            null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                        }), this[e](i)
                    },
                    blend: function(b) {
                        if (1 === this._rgba[3]) return this;
                        var c = this._rgba.slice(),
                            d = c.pop(),
                            e = j(b)._rgba;
                        return j(a.map(c, function(a, b) {
                            return (1 - d) * e[b] + d * a
                        }))
                    },
                    toRgbaString: function() {
                        var b = "rgba(",
                            c = a.map(this._rgba, function(a, b) {
                                return null == a ? b > 2 ? 1 : 0 : a
                            });
                        return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                    },
                    toHslaString: function() {
                        var b = "hsla(",
                            c = a.map(this.hsla(), function(a, b) {
                                return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                            });
                        return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                    },
                    toHexString: function(b) {
                        var c = this._rgba.slice(),
                            d = c.pop();
                        return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                            return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b, c, d = a[0] / 255,
                        e = a[1] / 255,
                        f = a[2] / 255,
                        g = a[3],
                        h = Math.max(d, e, f),
                        i = Math.min(d, e, f),
                        j = h - i,
                        k = h + i,
                        l = .5 * k;
                    return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
                }, k.hsla.from = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b = a[0] / 360,
                        c = a[1],
                        d = a[2],
                        f = a[3],
                        g = .5 >= d ? d * (1 + c) : d + c - d * c,
                        h = 2 * d - g;
                    return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
                }, o(k, function(d, e) {
                    var f = e.props,
                        g = e.cache,
                        i = e.to,
                        k = e.from;
                    j.fn[d] = function(d) {
                        if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                        var e, h = a.type(d),
                            l = "array" === h || "object" === h ? d : arguments,
                            m = this[g].slice();
                        return o(f, function(a, b) {
                            var d = l["object" === h ? a : b.idx];
                            null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                        }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                    }, o(f, function(b, c) {
                        j.fn[b] || (j.fn[b] = function(e) {
                            var f, g = a.type(e),
                                i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                                j = this[i](),
                                k = j[c.idx];
                            return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e)) && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1)), j[c.idx] = e, this[i](j)))
                        })
                    })
                }), j.hook = function(b) {
                    var c = b.split(" ");
                    o(c, function(b, c) {
                        a.cssHooks[c] = {
                            set: function(b, e) {
                                var f, g, h = "";
                                if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                    if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                        for (g = "backgroundColor" === c ? b.parentNode : b;
                                            ("" === h || "transparent" === h) && g && g.style;) try {
                                            h = a.css(g, "backgroundColor"), g = g.parentNode
                                        } catch (a) {}
                                        e = e.blend(h && "transparent" !== h ? h : "_default")
                                    }
                                    e = e.toRgbaString()
                                }
                                try {
                                    b.style[c] = e
                                } catch (a) {}
                            }
                        }, a.fx.step[c] = function(b) {
                            b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                        }
                    })
                }, j.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), a.cssHooks.borderColor = {
                    expand: function(a) {
                        var b = {};
                        return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
                            b["border" + d + "Color"] = a
                        }), b
                    }
                }, f = a.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                function c(b) {
                    var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                        f = {};
                    if (e && e.length && e[0] && e[e[0]])
                        for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                    else
                        for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
                    return f
                }

                function d(b, c) {
                    var d, e, g = {};
                    for (d in c) e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
                    return g
                }
                var e = ["add", "remove", "toggle"],
                    f = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
                    a.fx.step[c] = function(a) {
                        ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), a.setAttr = !0)
                    }
                }), a.fn.addBack || (a.fn.addBack = function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }), a.effects.animateClass = function(b, f, g, h) {
                    var i = a.speed(f, g, h);
                    return this.queue(function() {
                        var f, g = a(this),
                            h = g.attr("class") || "",
                            j = i.children ? g.find("*").addBack() : g;
                        j = j.map(function() {
                            return {
                                el: a(this),
                                start: c(this)
                            }
                        }), f = function() {
                            a.each(e, function(a, c) {
                                b[c] && g[c + "Class"](b[c])
                            })
                        }, f(), j = j.map(function() {
                            return this.end = c(this.el[0]), this.diff = d(this.start, this.end), this
                        }), g.attr("class", h), j = j.map(function() {
                            var b = this,
                                c = a.Deferred(),
                                d = a.extend({}, i, {
                                    queue: !1,
                                    complete: function() {
                                        c.resolve(b)
                                    }
                                });
                            return this.el.animate(this.diff, d), c.promise()
                        }), a.when.apply(a, j.get()).done(function() {
                            f(), a.each(arguments, function() {
                                var b = this.el;
                                a.each(this.diff, function(a) {
                                    b.css(a, "")
                                })
                            }), i.complete.call(g[0])
                        })
                    })
                }, a.fn.extend({
                    addClass: function(b) {
                        return function(c, d, e, f) {
                            return d ? a.effects.animateClass.call(this, {
                                add: c
                            }, d, e, f) : b.apply(this, arguments)
                        }
                    }(a.fn.addClass),
                    removeClass: function(b) {
                        return function(c, d, e, f) {
                            return arguments.length > 1 ? a.effects.animateClass.call(this, {
                                remove: c
                            }, d, e, f) : b.apply(this, arguments)
                        }
                    }(a.fn.removeClass),
                    toggleClass: function(c) {
                        return function(d, e, f, g, h) {
                            return "boolean" == typeof e || e === b ? f ? a.effects.animateClass.call(this, e ? {
                                add: d
                            } : {
                                remove: d
                            }, f, g, h) : c.apply(this, arguments) : a.effects.animateClass.call(this, {
                                toggle: d
                            }, e, f, g)
                        }
                    }(a.fn.toggleClass),
                    switchClass: function(b, c, d, e, f) {
                        return a.effects.animateClass.call(this, {
                            add: c,
                            remove: b
                        }, d, e, f)
                    }
                })
            }(),
            function() {
                function d(b, c, d, e) {
                    return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                        effect: b
                    }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
                }

                function e(b) {
                    return !(b && "number" != typeof b && !a.fx.speeds[b]) || ("string" == typeof b && !a.effects.effect[b] || (!!a.isFunction(b) || "object" == typeof b && !b.effect))
                }
                a.extend(a.effects, {
                    version: "1.10.3",
                    save: function(a, b) {
                        for (var d = 0; b.length > d; d++) null !== b[d] && a.data(c + b[d], a[0].style[b[d]])
                    },
                    restore: function(a, d) {
                        var e, f;
                        for (f = 0; d.length > f; f++) null !== d[f] && (e = a.data(c + d[f]), e === b && (e = ""), a.css(d[f], e))
                    },
                    setMode: function(a, b) {
                        return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                    },
                    getBaseline: function(a, b) {
                        var c, d;
                        switch (a[0]) {
                            case "top":
                                c = 0;
                                break;
                            case "middle":
                                c = .5;
                                break;
                            case "bottom":
                                c = 1;
                                break;
                            default:
                                c = a[0] / b.height
                        }
                        switch (a[1]) {
                            case "left":
                                d = 0;
                                break;
                            case "center":
                                d = .5;
                                break;
                            case "right":
                                d = 1;
                                break;
                            default:
                                d = a[1] / b.width
                        }
                        return {
                            x: d,
                            y: c
                        }
                    },
                    createWrapper: function(b) {
                        if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                        var c = {
                                width: b.outerWidth(!0),
                                height: b.outerHeight(!0),
                                float: b.css("float")
                            },
                            d = a("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            e = {
                                width: b.width(),
                                height: b.height()
                            },
                            f = document.activeElement;
                        try {
                            f.id
                        } catch (a) {
                            f = document.body
                        }
                        return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                            position: "relative"
                        }), b.css({
                            position: "relative"
                        })) : (a.extend(c, {
                            position: b.css("position"),
                            zIndex: b.css("z-index")
                        }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                            c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                        }), b.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), b.css(e), d.css(c).show()
                    },
                    removeWrapper: function(b) {
                        var c = document.activeElement;
                        return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                    },
                    setTransition: function(b, c, d, e) {
                        return e = e || {}, a.each(c, function(a, c) {
                            var f = b.cssUnit(c);
                            f[0] > 0 && (e[c] = f[0] * d + f[1])
                        }), e
                    }
                }), a.fn.extend({
                    effect: function() {
                        function b(b) {
                            function d() {
                                a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                            }
                            var e = a(this),
                                f = c.complete,
                                h = c.mode;
                            (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), d()) : g.call(e[0], c, d)
                        }
                        var c = d.apply(this, arguments),
                            e = c.mode,
                            f = c.queue,
                            g = a.effects.effect[c.effect];
                        return a.fx.off || !g ? e ? this[e](c.duration, c.complete) : this.each(function() {
                            c.complete && c.complete.call(this)
                        }) : !1 === f ? this.each(b) : this.queue(f || "fx", b)
                    },
                    show: function(a) {
                        return function(b) {
                            if (e(b)) return a.apply(this, arguments);
                            var c = d.apply(this, arguments);
                            return c.mode = "show", this.effect.call(this, c)
                        }
                    }(a.fn.show),
                    hide: function(a) {
                        return function(b) {
                            if (e(b)) return a.apply(this, arguments);
                            var c = d.apply(this, arguments);
                            return c.mode = "hide", this.effect.call(this, c)
                        }
                    }(a.fn.hide),
                    toggle: function(a) {
                        return function(b) {
                            if (e(b) || "boolean" == typeof b) return a.apply(this, arguments);
                            var c = d.apply(this, arguments);
                            return c.mode = "toggle", this.effect.call(this, c)
                        }
                    }(a.fn.toggle),
                    cssUnit: function(b) {
                        var c = this.css(b),
                            d = [];
                        return a.each(["em", "px", "%", "pt"], function(a, b) {
                            c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                        }), d
                    }
                })
            }(),
            function() {
                var b = {};
                a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                    b[c] = function(b) {
                        return Math.pow(b, a + 2)
                    }
                }), a.extend(b, {
                    Sine: function(a) {
                        return 1 - Math.cos(a * Math.PI / 2)
                    },
                    Circ: function(a) {
                        return 1 - Math.sqrt(1 - a * a)
                    },
                    Elastic: function(a) {
                        return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(a) {
                        return a * a * (3 * a - 2)
                    },
                    Bounce: function(a) {
                        for (var b, c = 4;
                            ((b = Math.pow(2, --c)) - 1) / 11 > a;);
                        return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                    }
                }), a.each(b, function(b, c) {
                    a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                        return 1 - c(1 - a)
                    }, a.easing["easeInOut" + b] = function(a) {
                        return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                    }
                })
            }()
    }(jQuery),
    function(a) {
        var b = 0,
            c = {},
            d = {};
        c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide", d.height = d.paddingTop = d.paddingBottom = d.borderTopWidth = d.borderBottomWidth = "show", a.widget("ui.accordion", {
            version: "1.10.3",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function() {
                var b = this.options;
                this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), b.collapsible || !1 !== b.active && null != b.active || (b.active = 0), this._processPanels(), 0 > b.active && (b.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : a(),
                    content: this.active.length ? this.active.next() : a()
                }
            },
            _createIcons: function() {
                var b = this.options.icons;
                b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var a;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && a.css("height", "")
            },
            _setOption: function(a, b) {
                return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || !1 !== this.options.active || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), void("disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b)))
            },
            _keydown: function(b) {
                if (!b.altKey && !b.ctrlKey) {
                    var c = a.ui.keyCode,
                        d = this.headers.length,
                        e = this.headers.index(b.target),
                        f = !1;
                    switch (b.keyCode) {
                        case c.RIGHT:
                        case c.DOWN:
                            f = this.headers[(e + 1) % d];
                            break;
                        case c.LEFT:
                        case c.UP:
                            f = this.headers[(e - 1 + d) % d];
                            break;
                        case c.SPACE:
                        case c.ENTER:
                            this._eventHandler(b);
                            break;
                        case c.HOME:
                            f = this.headers[0];
                            break;
                        case c.END:
                            f = this.headers[d - 1]
                    }
                    f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
                }
            },
            _panelKeyDown: function(b) {
                b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
            },
            refresh: function() {
                var b = this.options;
                this._processPanels(), !1 === b.active && !0 === b.collapsible || !this.headers.length ? (b.active = !1, this.active = a()) : !1 === b.active ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var c, d = this.options,
                    e = d.heightStyle,
                    f = this.element.parent(),
                    g = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
                this.active = this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(b) {
                    var c = a(this),
                        d = c.attr("id"),
                        e = c.next(),
                        f = e.attr("id");
                    d || (d = g + "-header-" + b, c.attr("id", d)), f || (f = g + "-panel-" + b, e.attr("id", f)), c.attr("aria-controls", f), e.attr("aria-labelledby", d)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(d.event), "fill" === e ? (c = f.height(), this.element.siblings(":visible").each(function() {
                    var b = a(this),
                        d = b.css("position");
                    "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                }), this.headers.each(function() {
                    c -= a(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (c = 0, this.headers.next().each(function() {
                    c = Math.max(c, a(this).css("height", "").height())
                }).height(c))
            },
            _activate: function(b) {
                var c = this._findActive(b)[0];
                c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return "number" == typeof b ? this.headers.eq(b) : a()
            },
            _setupEvents: function(b) {
                var c = {
                    keydown: "_keydown"
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(b) {
                var c = this.options,
                    d = this.active,
                    e = a(b.currentTarget),
                    f = e[0] === d[0],
                    g = f && c.collapsible,
                    h = g ? a() : e.next(),
                    i = d.next(),
                    j = {
                        oldHeader: d,
                        oldPanel: i,
                        newHeader: g ? a() : e,
                        newPanel: h
                    };
                b.preventDefault(), f && !c.collapsible || !1 === this._trigger("beforeActivate", b, j) || (c.active = !g && this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(b) {
                var c = b.newPanel,
                    d = this.prevShow.length ? this.prevShow : b.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), d.prev().attr("aria-selected", "false"), c.length && d.length ? d.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), c.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _animate: function(a, b, e) {
                var f, g, h, i = this,
                    j = 0,
                    k = a.length && (!b.length || a.index() < b.index()),
                    l = this.options.animate || {},
                    m = k && l.down || l,
                    n = function() {
                        i._toggleComplete(e)
                    };
                return "number" == typeof m && (h = m), "string" == typeof m && (g = m), g = g || m.easing || l.easing, h = h || m.duration || l.duration, b.length ? a.length ? (f = a.show().outerHeight(), b.animate(c, {
                    duration: h,
                    easing: g,
                    step: function(a, b) {
                        b.now = Math.round(a)
                    }
                }), void a.hide().animate(d, {
                    duration: h,
                    easing: g,
                    complete: n,
                    step: function(a, c) {
                        c.now = Math.round(a), "height" !== c.prop ? j += c.now : "content" !== i.options.heightStyle && (c.now = Math.round(f - b.outerHeight() - j), j = 0)
                    }
                })) : b.animate(c, h, g, n) : a.animate(d, h, g, n)
            },
            _toggleComplete: function(a) {
                var b = a.oldPanel;
                b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
            }
        })
    }(jQuery),
    function(a) {
        var b = 0;
        a.widget("ui.autocomplete", {
            version: "1.10.3",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                    f = "textarea" === e,
                    g = "input" === e;
                this.isMultiLine = !!f || !g && this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(e) {
                        if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
                        b = !1, d = !1, c = !1;
                        var f = a.ui.keyCode;
                        switch (e.keyCode) {
                            case f.PAGE_UP:
                                b = !0, this._move("previousPage", e);
                                break;
                            case f.PAGE_DOWN:
                                b = !0, this._move("nextPage", e);
                                break;
                            case f.UP:
                                b = !0, this._keyEvent("previous", e);
                                break;
                            case f.DOWN:
                                b = !0, this._keyEvent("next", e);
                                break;
                            case f.ENTER:
                            case f.NUMPAD_ENTER:
                                this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                c = !0, this._searchTimeout(e)
                        }
                    },
                    keypress: function(d) {
                        if (b) return b = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                        if (!c) {
                            var e = a.ui.keyCode;
                            switch (d.keyCode) {
                                case e.PAGE_UP:
                                    this._move("previousPage", d);
                                    break;
                                case e.PAGE_DOWN:
                                    this._move("nextPage", d);
                                    break;
                                case e.UP:
                                    this._keyEvent("previous", d);
                                    break;
                                case e.DOWN:
                                    this._keyEvent("next", d)
                            }
                        }
                    },
                    input: function(a) {
                        return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(a) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
                    }
                }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().data("ui-menu"), this._on(this.menu.element, {
                    mousedown: function(b) {
                        b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var c = this.menu.element[0];
                        a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                            var b = this;
                            this.document.one("mousedown", function(d) {
                                d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
                            })
                        })
                    },
                    menufocus: function(b, c) {
                        if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                            a(b.target).trigger(b.originalEvent)
                        });
                        var d = c.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", b, {
                            item: d
                        }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value)
                    },
                    menuselect: function(a, b) {
                        var c = b.item.data("ui-autocomplete-item"),
                            d = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                            this.previous = d, this.selectedItem = c
                        })), !1 !== this._trigger("select", a, {
                            item: c
                        }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
                    }
                }), this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(a, b) {
                this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var b = this.options.appendTo;
                return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
            },
            _initSource: function() {
                var b, c, d = this;
                a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                    d(a.ui.autocomplete.filter(b, c.term))
                }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                    d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                        url: c,
                        data: b,
                        dataType: "json",
                        success: function(a) {
                            e(a)
                        },
                        error: function() {
                            e([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(a) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                }, this.options.delay)
            },
            search: function(a, b) {
                return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : !1 !== this._trigger("search", b) ? this._search(a) : void 0
            },
            _search: function(a) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: a
                }, this._response())
            },
            _response: function() {
                var a = this,
                    c = ++b;
                return function(d) {
                    c === b && a.__response(d), --a.pending || a.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(a) {
                a && (a = this._normalize(a)), this._trigger("response", null, {
                    content: a
                }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
            },
            close: function(a) {
                this.cancelSearch = !0, this._close(a)
            },
            _close: function(a) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
            },
            _change: function(a) {
                this.previous !== this._value() && this._trigger("change", a, {
                    item: this.selectedItem
                })
            },
            _normalize: function(b) {
                return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                    return "string" == typeof b ? {
                        label: b,
                        value: b
                    } : a.extend({
                        label: b.label || b.value,
                        value: b.value || b.label
                    }, b)
                })
            },
            _suggest: function(b) {
                var c = this.menu.element.empty();
                this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(b, c) {
                var d = this;
                a.each(c, function(a, c) {
                    d._renderItemData(b, c)
                })
            },
            _renderItemData: function(a, b) {
                return this._renderItem(a, b).data("ui-autocomplete-item", b)
            },
            _renderItem: function(b, c) {
                return a("<li>").append(a("<a>").text(c.label)).appendTo(b)
            },
            _move: function(a, b) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(a, b) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
            }
        }), a.extend(a.ui.autocomplete, {
            escapeRegex: function(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(b, c) {
                var d = RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                return a.grep(b, function(a) {
                    return d.test(a.label || a.value || a)
                })
            }
        }), a.widget("ui.autocomplete", a.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(a) {
                        return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(a) {
                var b;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(b))
            }
        })
    }(jQuery),
    function(a) {
        var b, c, d, e, f = "ui-button ui-widget ui-state-default ui-corner-all",
            h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            i = function() {
                var b = a(this);
                setTimeout(function() {
                    b.find(":ui-button").button("refresh")
                }, 1)
            },
            j = function(b) {
                var c = b.name,
                    d = b.form,
                    e = a([]);
                return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function() {
                    return !this.form
                })), e
            };
        a.widget("ui.button", {
            version: "1.10.3",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, i), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var g = this,
                    h = this.options,
                    k = "checkbox" === this.type || "radio" === this.type,
                    l = k ? "" : "ui-state-active",
                    m = "ui-state-focus";
                null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    h.disabled || this === b && a(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    h.disabled || a(this).removeClass(l)
                }).bind("click" + this.eventNamespace, function(a) {
                    h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                }), this.element.bind("focus" + this.eventNamespace, function() {
                    g.buttonElement.addClass(m)
                }).bind("blur" + this.eventNamespace, function() {
                    g.buttonElement.removeClass(m)
                }), k && (this.element.bind("change" + this.eventNamespace, function() {
                    e || g.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(a) {
                    h.disabled || (e = !1, c = a.pageX, d = a.pageY)
                }).bind("mouseup" + this.eventNamespace, function(a) {
                    h.disabled || (c !== a.pageX || d !== a.pageY) && (e = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return !h.disabled && !e && void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (h.disabled || e) return !1;
                    a(this).addClass("ui-state-active"), g.buttonElement.attr("aria-pressed", "true");
                    var b = g.element[0];
                    j(b).not(b).map(function() {
                        return a(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return !h.disabled && (a(this).addClass("ui-state-active"), b = this, void g.document.one("mouseup", function() {
                        b = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function() {
                    return !h.disabled && void a(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(b) {
                    return !h.disabled && void((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                })), this._setOption("disabled", h.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var a, b, c;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " ui-state-hover ui-state-active  " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(a, b) {
                return this._super(a, b), "disabled" === a ? void(b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
            },
            refresh: function() {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? j(this.element[0]).each(function() {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var b = this.buttonElement.removeClass(h),
                    c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                    d = this.options.icons,
                    e = d.primary && d.secondary,
                    f = [];
                d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
            }
        }), a.widget("ui.buttonset", {
            version: "1.10.3",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(a, b) {
                "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
            },
            refresh: function() {
                var b = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery),
    function(a, b) {
        function c() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function d(b) {
            var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return b.delegate(c, "mouseout", function() {
                a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
            }).delegate(c, "mouseover", function() {
                a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function e(b, c) {
            a.extend(b, c);
            for (var d in c) null == c[d] && (b[d] = c[d]);
            return b
        }
        a.extend(a.ui, {
            datepicker: {
                version: "1.10.3"
            }
        });
        var f, g = "datepicker";
        a.extend(c.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(a) {
                return e(this._defaults, a || {}), this
            },
            _attachDatepicker: function(b, c) {
                var d, e, f;
                d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
            },
            _newInst: function(b, c) {
                return {
                    id: b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: b,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: c,
                    dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(b, c) {
                var d = a(b);
                c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b))
            },
            _attachments: function(b, c) {
                var d, e, f, g = this._get(c, "appendText"),
                    h = this._get(c, "isRTL");
                c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: e,
                    title: e
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                    src: f,
                    alt: e,
                    title: e
                }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                    return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
                }))
            },
            _autoSize: function(a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b, c, d, e, f = new Date(2009, 11, 20),
                        g = this._get(a, "dateFormat");
                    g.match(/[DM]/) && (b = function(a) {
                        for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e);
                        return d
                    }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
                }
            },
            _inlineDatepicker: function(b, c) {
                var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(b, c, d, f, h) {
                var i, j, k, l, m, n = this._dialogInst;
                return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, this._dialogInput.val(c), this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null, this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [j / 2 - 100 + l, k / 2 - 150 + m]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], g, n), this
            },
            _destroyDatepicker: function(b) {
                var c, d = a(b),
                    e = a.data(b, g);
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, g);
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === b ? null : a
                }))
            },
            _disableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, g);
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === b ? null : a
                }), this._disabledInputs[this._disabledInputs.length] = b)
            },
            _isDisabledDatepicker: function(a) {
                if (!a) return !1;
                for (var b = 0; this._disabledInputs.length > b; b++)
                    if (this._disabledInputs[b] === a) return !0;
                return !1
            },
            _getInst: function(b) {
                try {
                    return a.data(b, g)
                } catch (a) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(c, d, f) {
                var g, h, i, j, k = this._getInst(c);
                return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, "string" == typeof d && (g = {}, g[d] = f), k && (this._curInst === k && this._hideDatepicker(), h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), "disabled" in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), this._updateDatepicker(k)), b)
            },
            _changeDatepicker: function(a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function(a) {
                var b = this._getInst(a);
                b && this._updateDatepicker(b)
            },
            _setDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
            },
            _doKeyDown: function(b) {
                var c, d, e, f = a.datepicker._getInst(b.target),
                    g = !0,
                    h = f.dpDiv.is(".ui-datepicker-rtl");
                if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker(), g = !1;
                        break;
                    case 13:
                        return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 37:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    case 39:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    default:
                        g = !1
                } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
                g && (b.preventDefault(), b.stopPropagation())
            },
            _doKeyPress: function(c) {
                var d, e, f = a.datepicker._getInst(c.target);
                return a.datepicker._get(f, "constrainInput") ? (d = a.datepicker._possibleChars(a.datepicker._get(f, "dateFormat")), e = String.fromCharCode(null == c.charCode ? c.keyCode : c.charCode), c.ctrlKey || c.metaKey || " " > e || !d || d.indexOf(e) > -1) : b
            },
            _doKeyUp: function(b) {
                var d = a.datepicker._getInst(b.target);
                if (d.input.val() !== d.lastVal) try {
                    a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)) && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
                } catch (a) {}
                return !0
            },
            _showDatepicker: function(b) {
                if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                    var c, d, f, g, h, i, j;
                    c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), d = a.datepicker._get(c, "beforeShow"), !1 !== (f = d ? d.apply(b, [b, c]) : {}) && (e(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                        return !(g |= "fixed" === a(this).css("position"))
                    }), h = {
                        left: a.datepicker._pos[0],
                        top: a.datepicker._pos[1]
                    }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                        position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                        display: "none",
                        left: h.left + "px",
                        top: h.top + "px"
                    }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c))
                }
            },
            _updateDatepicker: function(b) {
                this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var c, d = this._getNumberOfMonths(b),
                    e = d[1];
                b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                    c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(a) {
                return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
            },
            _checkOffset: function(b, c, d) {
                var e = b.dpDiv.outerWidth(),
                    f = b.dpDiv.outerHeight(),
                    g = b.input ? b.input.outerWidth() : 0,
                    h = b.input ? b.input.outerHeight() : 0,
                    i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                    j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
                return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
            },
            _findPos: function(b) {
                for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
                return c = a(b).offset(), [c.left, c.top]
            },
            _hideDatepicker: function(b) {
                var c, d, e, f, h = this._curInst;
                !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function() {
                    a.datepicker._tidyDialog(h)
                }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [h.input ? h.input.val() : "", h]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(b) {
                if (a.datepicker._curInst) {
                    var c = a(b.target),
                        d = a.datepicker._getInst(c[0]);
                    (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(b, c, d) {
                var e = a(b),
                    f = this._getInst(e[0]);
                this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
            },
            _gotoToday: function(b) {
                var c, d = a(b),
                    e = this._getInst(d[0]);
                this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
            },
            _selectMonthYear: function(b, c, d) {
                var e = a(b),
                    f = this._getInst(e[0]);
                f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
            },
            _selectDay: function(b, c, d, e) {
                var f, g = a(b);
                a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(b) {
                var c = a(b);
                this._selectDate(c, "")
            },
            _selectDate: function(b, c) {
                var d, e = a(b),
                    f = this._getInst(e[0]);
                c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(b) {
                var c, d, e, f = this._get(b, "altField");
                f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
                    a(this).val(e)
                }))
            },
            noWeekends: function(a) {
                var b = a.getDay();
                return [b > 0 && 6 > b, ""]
            },
            iso8601Week: function(a) {
                var b, c = new Date(a.getTime());
                return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
            },
            parseDate: function(c, d, e) {
                if (null == c || null == d) throw "Invalid arguments";
                if ("" === (d = "object" == typeof d ? "" + d : d + "")) return null;
                var f, g, h, i, j = 0,
                    k = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    l = "string" != typeof k ? k : (new Date).getFullYear() % 100 + parseInt(k, 10),
                    m = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                    n = (e ? e.dayNames : null) || this._defaults.dayNames,
                    o = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (e ? e.monthNames : null) || this._defaults.monthNames,
                    q = -1,
                    r = -1,
                    s = -1,
                    t = -1,
                    u = !1,
                    v = function(a) {
                        var b = c.length > f + 1 && c.charAt(f + 1) === a;
                        return b && f++, b
                    },
                    w = function(a) {
                        var b = v(a),
                            c = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                            e = RegExp("^\\d{1," + c + "}"),
                            f = d.substring(j).match(e);
                        if (!f) throw "Missing number at position " + j;
                        return j += f[0].length, parseInt(f[0], 10)
                    },
                    x = function(c, e, f) {
                        var g = -1,
                            h = a.map(v(c) ? f : e, function(a, b) {
                                return [
                                    [b, a]
                                ]
                            }).sort(function(a, b) {
                                return -(a[1].length - b[1].length)
                            });
                        if (a.each(h, function(a, c) {
                                var e = c[1];
                                return d.substr(j, e.length).toLowerCase() === e.toLowerCase() ? (g = c[0], j += e.length, !1) : b
                            }), -1 !== g) return g + 1;
                        throw "Unknown name at position " + j
                    },
                    y = function() {
                        if (d.charAt(j) !== c.charAt(f)) throw "Unexpected literal at position " + j;
                        j++
                    };
                for (f = 0; c.length > f; f++)
                    if (u) "'" !== c.charAt(f) || v("'") ? y() : u = !1;
                    else switch (c.charAt(f)) {
                        case "d":
                            s = w("d");
                            break;
                        case "D":
                            x("D", m, n);
                            break;
                        case "o":
                            t = w("o");
                            break;
                        case "m":
                            r = w("m");
                            break;
                        case "M":
                            r = x("M", o, p);
                            break;
                        case "y":
                            q = w("y");
                            break;
                        case "@":
                            i = new Date(w("@")), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                            break;
                        case "!":
                            i = new Date((w("!") - this._ticksTo1970) / 1e4), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                            break;
                        case "'":
                            v("'") ? y() : u = !0;
                            break;
                        default:
                            y()
                    }
                if (d.length > j && (h = d.substr(j), !/^\s+/.test(h))) throw "Extra/unparsed characters found in date: " + h;
                if (-1 === q ? q = (new Date).getFullYear() : 100 > q && (q += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= q ? 0 : -100)), t > -1)
                    for (r = 1, s = t; !((g = this._getDaysInMonth(q, r - 1)) >= s);) r++, s -= g;
                if (i = this._daylightSavingAdjust(new Date(q, r - 1, s)), i.getFullYear() !== q || i.getMonth() + 1 !== r || i.getDate() !== s) throw "Invalid date";
                return i
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(a, b, c) {
                if (!b) return "";
                var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (c ? c.dayNames : null) || this._defaults.dayNames,
                    g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    h = (c ? c.monthNames : null) || this._defaults.monthNames,
                    i = function(b) {
                        var c = a.length > d + 1 && a.charAt(d + 1) === b;
                        return c && d++, c
                    },
                    j = function(a, b, c) {
                        var d = "" + b;
                        if (i(a))
                            for (; c > d.length;) d = "0" + d;
                        return d
                    },
                    k = function(a, b, c, d) {
                        return i(a) ? d[b] : c[b]
                    },
                    l = "",
                    m = !1;
                if (b)
                    for (d = 0; a.length > d; d++)
                        if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                        else switch (a.charAt(d)) {
                            case "d":
                                l += j("d", b.getDate(), 2);
                                break;
                            case "D":
                                l += k("D", b.getDay(), e, f);
                                break;
                            case "o":
                                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                l += j("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                l += k("M", b.getMonth(), g, h);
                                break;
                            case "y":
                                l += i("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                l += b.getTime();
                                break;
                            case "!":
                                l += 1e4 * b.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                i("'") ? l += "'" : m = !0;
                                break;
                            default:
                                l += a.charAt(d)
                        }
                return l
            },
            _possibleChars: function(a) {
                var b, c = "",
                    d = !1,
                    e = function(c) {
                        var d = a.length > b + 1 && a.charAt(b + 1) === c;
                        return d && b++, d
                    };
                for (b = 0; a.length > b; b++)
                    if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                    else switch (a.charAt(b)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            c += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            e("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += a.charAt(b)
                    }
                return c
            },
            _get: function(a, c) {
                return a.settings[c] !== b ? a.settings[c] : this._defaults[c]
            },
            _setDateFromField: function(a, b) {
                if (a.input.val() !== a.lastVal) {
                    var c = this._get(a, "dateFormat"),
                        d = a.lastVal = a.input ? a.input.val() : null,
                        e = this._getDefaultDate(a),
                        f = e,
                        g = this._getFormatConfig(a);
                    try {
                        f = this.parseDate(c, d, g) || e
                    } catch (a) {
                        d = b ? "" : d
                    }
                    a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function(a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function(b, c, d) {
                var e = function(a) {
                        var b = new Date;
                        return b.setDate(b.getDate() + a), b
                    },
                    f = function(c) {
                        try {
                            return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                        } catch (a) {}
                        for (var d = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(c); i;) {
                            switch (i[2] || "d") {
                                case "d":
                                case "D":
                                    g += parseInt(i[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    g += 7 * parseInt(i[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    f += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f));
                                    break;
                                case "y":
                                case "Y":
                                    e += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f))
                            }
                            i = h.exec(c)
                        }
                        return new Date(e, f, g)
                    },
                    g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
                return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
            },
            _daylightSavingAdjust: function(a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
            },
            _setDate: function(a, b, c) {
                var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear,
                    g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function(a) {
                return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
            },
            _attachHandlers: function(b) {
                var c = this._get(b, "stepMonths"),
                    d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function() {
                    var b = {
                        prev: function() {
                            a.datepicker._adjustDate(d, -c, "M")
                        },
                        next: function() {
                            a.datepicker._adjustDate(d, +c, "M")
                        },
                        hide: function() {
                            a.datepicker._hideDatepicker()
                        },
                        today: function() {
                            a.datepicker._gotoToday(d)
                        },
                        selectDay: function() {
                            return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return a.datepicker._selectMonthYear(d, this, "M"), !1
                        },
                        selectYear: function() {
                            return a.datepicker._selectMonthYear(d, this, "Y"), !1
                        }
                    };
                    a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                    P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                    Q = this._get(a, "isRTL"),
                    R = this._get(a, "showButtonPanel"),
                    S = this._get(a, "hideIfNoPrevNext"),
                    T = this._get(a, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(a),
                    V = this._get(a, "showCurrentAtPos"),
                    W = this._get(a, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    Z = this._getMinMaxDate(a, "min"),
                    $ = this._getMinMaxDate(a, "max"),
                    _ = a.drawMonth - V,
                    aa = a.drawYear;
                if (0 > _ && (_ += 12, aa--), $)
                    for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) 0 > --_ && (_ = 11, aa--);
                for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
                    for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
                        if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                            if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                                case 0:
                                    B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                                    break;
                                default:
                                    B += " ui-datepicker-group-middle", A = ""
                            }
                            B += "'>"
                        }
                        for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                        for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
                            for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                            B += K + "</tr>"
                        }
                        _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                    }
                    u += x
                }
                return u += j, a._keyEvent = !1, u
            },
            _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
                var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                    r = this._get(a, "changeYear"),
                    s = this._get(a, "showMonthAfterYear"),
                    t = "<div class='ui-datepicker-title'>",
                    u = "";
                if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
                else {
                    for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                    u += "</select>"
                }
                if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                    if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                    else {
                        for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
                                var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                                return isNaN(b) ? m : b
                            }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                        a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
                    }
                return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
            },
            _adjustInstDate: function(a, b, c) {
                var d = a.drawYear + ("Y" === c ? b : 0),
                    e = a.drawMonth + ("M" === c ? b : 0),
                    f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                    g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
            },
            _restrictMinMax: function(a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    e = c && c > b ? c : b;
                return d && e > d ? d : e
            },
            _notifyChange: function(a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function(a) {
                var b = this._get(a, "numberOfMonths");
                return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
            },
            _getMinMaxDate: function(a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function(a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function(a, b) {
                return new Date(a, b, 1).getDay()
            },
            _canAdjustMonth: function(a, b, c, d) {
                var e = this._getNumberOfMonths(a),
                    f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
                return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
            },
            _isInRange: function(a, b) {
                var c, d, e = this._getMinMaxDate(a, "min"),
                    f = this._getMinMaxDate(a, "max"),
                    g = null,
                    h = null,
                    i = this._get(a, "yearRange");
                return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
            },
            _getFormatConfig: function(a) {
                var b = this._get(a, "shortYearCutoff");
                return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function(a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
            }
        }), a.fn.datepicker = function(b) {
            if (!this.length) return this;
            a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
            var c = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
                "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
            }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
        }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.10.3"
    }(jQuery),
    function(a) {
        var b = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            c = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        a.widget("ui.dialog", {
            version: "1.10.3",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(b) {
                        var c = a(this).css(b).offset().top;
                        0 > c && a(this).css("top", b.top - c)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var b = this.options.appendTo;
                return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
            },
            _destroy: function() {
                var a, b = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: a.noop,
            enable: a.noop,
            close: function(b) {
                var c = this;
                this._isOpen && !1 !== this._trigger("beforeClose", b) && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                    c._trigger("close", b)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(a, b) {
                var c = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                return c && !b && this._trigger("focus", a), c
            },
            open: function() {
                var b = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                    b._focusTabbable(), b._trigger("focus")
                }), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var a = this.element.find("[autofocus]");
                a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).focus()
            },
            _keepFocus: function(b) {
                function c() {
                    var b = this.document[0].activeElement;
                    this.uiDialog[0] === b || a.contains(this.uiDialog[0], b) || this._focusTabbable()
                }
                b.preventDefault(), c.call(this), this._delay(c)
            },
            _createWrapper: function() {
                this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(b) {
                        if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), void this.close(b);
                        if (b.keyCode === a.ui.keyCode.TAB) {
                            var c = this.uiDialog.find(":tabbable"),
                                d = c.filter(":first"),
                                e = c.filter(":last");
                            b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (e.focus(1), b.preventDefault()) : (d.focus(1), b.preventDefault())
                        }
                    },
                    mousedown: function(a) {
                        this._moveToTop(a) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var b;
                this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function(b) {
                        a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = a("<button></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function(a) {
                        a.preventDefault(), this.close(a)
                    }
                }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(b), this.uiDialog.attr({
                    "aria-labelledby": b.attr("id")
                })
            },
            _title: function(a) {
                this.options.title || a.html("&#160;"), a.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var b = this,
                    c = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function(c, d) {
                    var e, f;
                    d = a.isFunction(d) ? {
                        click: d,
                        text: c
                    } : d, d = a.extend({
                        type: "button"
                    }, d), e = d.click, d.click = function() {
                        e.apply(b.element[0], arguments)
                    }, f = {
                        icons: d.icons,
                        text: d.showText
                    }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function b(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                }
                var c = this,
                    d = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(d, e) {
                        a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
                    },
                    drag: function(a, d) {
                        c._trigger("drag", a, b(d))
                    },
                    stop: function(e, f) {
                        d.position = [f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop()], a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
                    }
                })
            },
            _makeResizable: function() {
                function b(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }
                var c = this,
                    d = this.options,
                    e = d.resizable,
                    f = this.uiDialog.css("position"),
                    g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: d.maxWidth,
                    maxHeight: d.maxHeight,
                    minWidth: d.minWidth,
                    minHeight: this._minHeight(),
                    handles: g,
                    start: function(d, e) {
                        a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
                    },
                    resize: function(a, d) {
                        c._trigger("resize", a, b(d))
                    },
                    stop: function(e, f) {
                        d.height = a(this).height(), d.width = a(this).width(), a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
                    }
                }).css("position", f)
            },
            _minHeight: function() {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function() {
                var a = this.uiDialog.is(":visible");
                a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
            },
            _setOptions: function(d) {
                var e = this,
                    f = !1,
                    g = {};
                a.each(d, function(a, d) {
                    e._setOption(a, d), a in b && (f = !0), a in c && (g[a] = d)
                }), f && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
            },
            _setOption: function(a, b) {
                var c, d, e = this.uiDialog;
                "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                    label: "" + b
                }), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), d || !1 === b || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var a, b, c, d = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                    height: "auto",
                    width: d.width
                }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
                    minHeight: b,
                    maxHeight: c,
                    height: "auto"
                }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var b = a(this);
                    return a("<div>").css({
                        position: "absolute",
                        width: b.outerWidth(),
                        height: b.outerHeight()
                    }).appendTo(b.parent()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(b) {
                return !!a(b.target).closest(".ui-dialog").length || !!a(b.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var b = this,
                        c = this.widgetFullName;
                    a.ui.dialog.overlayInstances || this._delay(function() {
                        a.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(d) {
                            b._allowInteraction(d) || (d.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())
                        })
                    }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), a.ui.dialog.overlayInstances++
                }
            },
            _destroyOverlay: function() {
                this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
            }
        }), a.ui.dialog.overlayInstances = 0, !1 !== a.uiBackCompat && a.widget("ui.dialog", a.ui.dialog, {
            _position: function() {
                var b, c = this.options.position,
                    d = [],
                    e = [0, 0];
                c ? (("string" == typeof c || "object" == typeof c && "0" in c) && (d = c.split ? c.split(" ") : [c[0], c[1]], 1 === d.length && (d[1] = d[0]), a.each(["left", "top"], function(a, b) {
                    +d[a] === d[a] && (e[a] = d[a], d[a] = b)
                }), c = {
                    my: d[0] + (0 > e[0] ? e[0] : "+" + e[0]) + " " + d[1] + (0 > e[1] ? e[1] : "+" + e[1]),
                    at: d.join(" ")
                }), c = a.extend({}, a.ui.dialog.prototype.options.position, c)) : c = a.ui.dialog.prototype.options.position, b = this.uiDialog.is(":visible"), b || this.uiDialog.show(), this.uiDialog.position(c), b || this.uiDialog.hide()
            }
        })
    }(jQuery),
    function(a) {
        var b = /up|down|vertical/,
            c = /up|left|vertical|horizontal/;
        a.effects.effect.blind = function(d, e) {
            var f, g, h, i = a(this),
                j = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = a.effects.setMode(i, d.mode || "hide"),
                l = d.direction || "up",
                m = b.test(l),
                n = m ? "height" : "width",
                o = m ? "top" : "left",
                p = c.test(l),
                q = {},
                r = "show" === k;
            i.parent().is(".ui-effects-wrapper") ? a.effects.save(i.parent(), j) : a.effects.save(i, j), i.show(), f = a.effects.createWrapper(i).css({
                overflow: "hidden"
            }), g = f[n](), h = parseFloat(f.css(o)) || 0, q[n] = r ? g : 0, p || (i.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({
                position: "absolute"
            }), q[o] = r ? h : g + h), r && (f.css(n, 0), p || f.css(o, h + g)), f.animate(q, {
                duration: d.duration,
                easing: d.easing,
                queue: !1,
                complete: function() {
                    "hide" === k && i.hide(), a.effects.restore(i, j), a.effects.removeWrapper(i), e()
                }
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.bounce = function(b, c) {
            var d, e, f, g = a(this),
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                i = a.effects.setMode(g, b.mode || "effect"),
                j = "hide" === i,
                k = "show" === i,
                l = b.direction || "up",
                m = b.distance,
                n = b.times || 5,
                o = 2 * n + (k || j ? 1 : 0),
                p = b.duration / o,
                q = b.easing,
                r = "up" === l || "down" === l ? "top" : "left",
                s = "up" === l || "left" === l,
                t = g.queue(),
                u = t.length;
            for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {
                    opacity: 1
                }, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), f = {}, f[r] = 0, d = 0; n > d; d++) e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), m = j ? 2 * m : m / 2;
            j && (e = {
                opacity: 0
            }, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function() {
                j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
            }), u > 1 && t.splice.apply(t, [1, 0].concat(t.splice(u, o + 1))), g.dequeue()
        }
    }(jQuery),
    function(a) {
        a.effects.effect.clip = function(b, c) {
            var d, e, f, g = a(this),
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                i = a.effects.setMode(g, b.mode || "hide"),
                j = "show" === i,
                k = b.direction || "vertical",
                l = "vertical" === k,
                m = l ? "height" : "width",
                n = l ? "top" : "left",
                o = {};
            a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({
                overflow: "hidden"
            }), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
                }
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.drop = function(b, c) {
            var d, e = a(this),
                f = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                g = a.effects.setMode(e, b.mode || "hide"),
                h = "show" === g,
                i = b.direction || "left",
                j = "up" === i || "down" === i ? "top" : "left",
                k = "up" === i || "left" === i ? "pos" : "neg",
                l = {
                    opacity: h ? 1 : 0
                };
            a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, e.animate(l, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                }
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.explode = function(b, c) {
            function d() {
                t.push(this), t.length === l * m && e()
            }

            function e() {
                n.css({
                    visibility: "visible"
                }), a(t).remove(), p || n.hide(), c()
            }
            var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3,
                m = l,
                n = a(this),
                o = a.effects.setMode(n, b.mode || "hide"),
                p = "show" === o,
                q = n.show().css("visibility", "hidden").offset(),
                r = Math.ceil(n.outerWidth() / m),
                s = Math.ceil(n.outerHeight() / l),
                t = [];
            for (f = 0; l > f; f++)
                for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -g * r,
                    top: -f * s
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: r,
                    height: s,
                    left: h + (p ? j * r : 0),
                    top: i + (p ? k * s : 0),
                    opacity: p ? 0 : 1
                }).animate({
                    left: h + (p ? 0 : j * r),
                    top: i + (p ? 0 : k * s),
                    opacity: p ? 1 : 0
                }, b.duration || 500, b.easing, d)
        }
    }(jQuery),
    function(a) {
        a.effects.effect.fade = function(b, c) {
            var d = a(this),
                e = a.effects.setMode(d, b.mode || "toggle");
            d.animate({
                opacity: e
            }, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: c
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.fold = function(b, c) {
            var d, e, f = a(this),
                g = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = a.effects.setMode(f, b.mode || "hide"),
                i = "show" === h,
                j = "hide" === h,
                k = b.size || 15,
                l = /([0-9]+)%/.exec(k),
                m = !!b.horizFirst,
                n = i !== m,
                o = n ? ["width", "height"] : ["height", "width"],
                p = b.duration / 2,
                q = {},
                r = {};
            a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({
                overflow: "hidden"
            }), e = n ? [d.width(), d.height()] : [d.height(), d.width()], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), i && d.css(m ? {
                height: 0,
                width: k
            } : {
                height: k,
                width: 0
            }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function() {
                j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c()
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.highlight = function(b, c) {
            var d = a(this),
                e = ["backgroundImage", "backgroundColor", "opacity"],
                f = a.effects.setMode(d, b.mode || "show"),
                g = {
                    backgroundColor: d.css("backgroundColor")
                };
            "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
                backgroundImage: "none",
                backgroundColor: b.color || "#ffff99"
            }).animate(g, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    "hide" === f && d.hide(), a.effects.restore(d, e), c()
                }
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.pulsate = function(b, c) {
            var d, e = a(this),
                f = a.effects.setMode(e, b.mode || "show"),
                g = "show" === f,
                h = "hide" === f,
                i = g || "hide" === f,
                j = 2 * (b.times || 5) + (i ? 1 : 0),
                k = b.duration / j,
                l = 0,
                m = e.queue(),
                n = m.length;
            for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++) e.animate({
                opacity: l
            }, k, b.easing), l = 1 - l;
            e.animate({
                opacity: l
            }, k, b.easing), e.queue(function() {
                h && e.hide(), c()
            }), n > 1 && m.splice.apply(m, [1, 0].concat(m.splice(n, j + 1))), e.dequeue()
        }
    }(jQuery),
    function(a) {
        a.effects.effect.puff = function(b, c) {
            var d = a(this),
                e = a.effects.setMode(d, b.mode || "hide"),
                f = "hide" === e,
                g = parseInt(b.percent, 10) || 150,
                h = g / 100,
                i = {
                    height: d.height(),
                    width: d.width(),
                    outerHeight: d.outerHeight(),
                    outerWidth: d.outerWidth()
                };
            a.extend(b, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: e,
                complete: c,
                percent: f ? g : 100,
                from: f ? i : {
                    height: i.height * h,
                    width: i.width * h,
                    outerHeight: i.outerHeight * h,
                    outerWidth: i.outerWidth * h
                }
            }), d.effect(b)
        }, a.effects.effect.scale = function(b, c) {
            var d = a(this),
                e = a.extend(!0, {}, b),
                f = a.effects.setMode(d, b.mode || "effect"),
                g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100),
                h = b.direction || "both",
                i = b.origin,
                j = {
                    height: d.height(),
                    width: d.width(),
                    outerHeight: d.outerHeight(),
                    outerWidth: d.outerWidth()
                },
                k = {
                    y: "horizontal" !== h ? g / 100 : 1,
                    x: "vertical" !== h ? g / 100 : 1
                };
            e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || ["middle", "center"], e.restore = !0), e.from = b.from || ("show" === f ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : j), e.to = {
                height: j.height * k.y,
                width: j.width * k.x,
                outerHeight: j.outerHeight * k.y,
                outerWidth: j.outerWidth * k.x
            }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0)), d.effect(e)
        }, a.effects.effect.size = function(b, c) {
            var d, e, f, g = a(this),
                h = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                j = ["width", "height", "overflow"],
                k = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                n = a.effects.setMode(g, b.mode || "effect"),
                o = b.restore || "effect" !== n,
                p = b.scale || "both",
                q = b.origin || ["middle", "center"],
                r = g.css("position"),
                s = o ? h : i,
                t = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === n && g.show(), d = {
                height: g.height(),
                width: g.width(),
                outerHeight: g.outerHeight(),
                outerWidth: g.outerWidth()
            }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), g.to = b.to || ("hide" === n ? t : d)), f = {
                from: {
                    y: g.from.height / d.height,
                    x: g.from.width / d.width
                },
                to: {
                    y: g.to.height / d.height,
                    x: g.to.width / d.width
                }
            }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat(["marginTop", "marginBottom"]).concat(k), m = m.concat(["marginLeft", "marginRight"]), j = h.concat(l).concat(m), g.find("*[width]").each(function() {
                var c = a(this),
                    d = {
                        height: c.height(),
                        width: c.width(),
                        outerHeight: c.outerHeight(),
                        outerWidth: c.outerWidth()
                    };
                o && a.effects.save(c, j), c.from = {
                    height: d.height * f.from.y,
                    width: d.width * f.from.x,
                    outerHeight: d.outerHeight * f.from.y,
                    outerWidth: d.outerWidth * f.from.x
                }, c.to = {
                    height: d.height * f.to.y,
                    width: d.width * f.to.x,
                    outerHeight: d.height * f.to.y,
                    outerWidth: d.width * f.to.x
                }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function() {
                    o && a.effects.restore(c, j)
                })
            })), g.animate(g.to, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), a.effects.restore(g, s), o || ("static" === r ? g.css({
                        position: "relative",
                        top: g.to.top,
                        left: g.to.left
                    }) : a.each(["top", "left"], function(a, b) {
                        g.css(b, function(b, c) {
                            var d = parseInt(c, 10),
                                e = a ? g.to.left : g.to.top;
                            return "auto" === c ? e + "px" : d + e + "px"
                        })
                    })), a.effects.removeWrapper(g), c()
                }
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.shake = function(b, c) {
            var d, e = a(this),
                f = ["position", "top", "bottom", "left", "right", "height", "width"],
                g = a.effects.setMode(e, b.mode || "effect"),
                h = b.direction || "left",
                i = b.distance || 20,
                j = b.times || 3,
                k = 2 * j + 1,
                l = Math.round(b.duration / k),
                m = "up" === h || "down" === h ? "top" : "left",
                n = "up" === h || "left" === h,
                o = {},
                p = {},
                q = {},
                r = e.queue(),
                s = r.length;
            for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), d = 1; j > d; d++) e.animate(p, l, b.easing).animate(q, l, b.easing);
            e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function() {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }), s > 1 && r.splice.apply(r, [1, 0].concat(r.splice(s, k + 1))), e.dequeue()
        }
    }(jQuery),
    function(a) {
        a.effects.effect.slide = function(b, c) {
            var d, e = a(this),
                f = ["position", "top", "bottom", "left", "right", "width", "height"],
                g = a.effects.setMode(e, b.mode || "show"),
                h = "show" === g,
                i = b.direction || "left",
                j = "up" === i || "down" === i ? "top" : "left",
                k = "up" === i || "left" === i,
                l = {};
            a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({
                overflow: "hidden"
            }), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
                }
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.transfer = function(b, c) {
            var d = a(this),
                e = a(b.to),
                f = "fixed" === e.css("position"),
                g = a("body"),
                h = f ? g.scrollTop() : 0,
                i = f ? g.scrollLeft() : 0,
                j = e.offset(),
                k = {
                    top: j.top - h,
                    left: j.left - i,
                    height: e.innerHeight(),
                    width: e.innerWidth()
                },
                l = d.offset(),
                m = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
                    top: l.top - h,
                    left: l.left - i,
                    height: d.innerHeight(),
                    width: d.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(k, b.duration, b.easing, function() {
                    m.remove(), c()
                })
        }
    }(jQuery),
    function(a) {
        a.widget("ui.menu", {
            version: "1.10.3",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, a.proxy(function(a) {
                    this.options.disabled && a.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(b) {
                        var c = a(b.target).closest(".ui-menu-item");
                        !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(b), c.has(".ui-menu").length ? this.expand(b) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(b) {
                        var c = a(b.currentTarget);
                        c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(a, b) {
                        var c = this.active || this.element.children(".ui-menu-item").eq(0);
                        b || this.focus(a, c)
                    },
                    blur: function(b) {
                        this._delay(function() {
                            a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(b) {
                        a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var b = a(this);
                    b.data("ui-menu-submenu-carat") && b.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(b) {
                function c(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var d, e, f, g, h, i = !0;
                switch (b.keyCode) {
                    case a.ui.keyCode.PAGE_UP:
                        this.previousPage(b);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        this.nextPage(b);
                        break;
                    case a.ui.keyCode.HOME:
                        this._move("first", "first", b);
                        break;
                    case a.ui.keyCode.END:
                        this._move("last", "last", b);
                        break;
                    case a.ui.keyCode.UP:
                        this.previous(b);
                        break;
                    case a.ui.keyCode.DOWN:
                        this.next(b);
                        break;
                    case a.ui.keyCode.LEFT:
                        this.collapse(b);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                        break;
                    case a.ui.keyCode.ENTER:
                    case a.ui.keyCode.SPACE:
                        this._activate(b);
                        break;
                    case a.ui.keyCode.ESCAPE:
                        this.collapse(b);
                        break;
                    default:
                        i = !1, e = this.previousFilter || "", f = String.fromCharCode(b.keyCode), g = !1, clearTimeout(this.filterTimer), f === e ? g = !0 : f = e + f, h = RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return h.test(a(this).children("a").text())
                        }), d = g && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d, d.length || (f = String.fromCharCode(b.keyCode), h = RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return h.test(a(this).children("a").text())
                        })), d.length ? (this.focus(b, d), d.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                i && b.preventDefault()
            },
            _activate: function(a) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
            },
            refresh: function() {
                var b, c = this.options.icons.submenu,
                    d = this.element.find(this.options.menus);
                d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var b = a(this),
                        d = b.prev("a"),
                        e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                    d.attr("aria-haspopup", "true").prepend(e), b.attr("aria-labelledby", d.attr("id"))
                }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), b.children(":not(.ui-menu-item)").each(function() {
                    var b = a(this);
                    /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
                }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(a, b) {
                "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), this._super(a, b)
            },
            focus: function(a, b) {
                var c, d;
                this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), c = b.children(".ui-menu"), c.length && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                    item: b
                })
            },
            _scrollIntoView: function(b) {
                var c, d, e, f, g, h;
                this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.height(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
            },
            blur: function(a, b) {
                b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                    item: this.active
                }))
            },
            _startOpening: function(a) {
                clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(a)
                }, this.delay))
            },
            _open: function(b) {
                var c = a.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
            },
            collapseAll: function(b, c) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                    d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
                }, this.delay)
            },
            _close: function(a) {
                a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(a) {
                var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                b && b.length && (this._close(), this.focus(a, b))
            },
            expand: function(a) {
                var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                b && b.length && (this._open(b.parent()), this._delay(function() {
                    this.focus(a, b)
                }))
            },
            next: function(a) {
                this._move("next", "first", a)
            },
            previous: function(a) {
                this._move("prev", "last", a)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(a, b, c) {
                var d;
                this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), this.focus(c, d)
            },
            nextPage: function(b) {
                var c, d, e;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return c = a(this), 0 > c.offset().top - d - e
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(b)
            },
            previousPage: function(b) {
                var c, d, e;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return c = a(this), c.offset().top - d + e > 0
                }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(b)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(b) {
                this.active = this.active || a(b.target).closest(".ui-menu-item");
                var c = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
            }
        })
    }(jQuery),
    function(a, b) {
        function c(a, b, c) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }

        function d(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }

        function e(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: b.scrollTop(),
                    left: b.scrollLeft()
                }
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: c.pageY,
                    left: c.pageX
                }
            } : {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
            }
        }
        a.ui = a.ui || {};
        var f, g = Math.max,
            h = Math.abs,
            i = Math.round,
            j = /left|center|right/,
            k = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/,
            m = /^\w+/,
            n = /%$/,
            o = a.fn.position;
        a.position = {
                scrollbarWidth: function() {
                    if (f !== b) return f;
                    var c, d, e = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        g = e.children()[0];
                    return a("body").append(e), c = g.offsetWidth, e.css("overflow", "scroll"), d = g.offsetWidth, c === d && (d = e[0].clientWidth), e.remove(), f = c - d
                },
                getScrollInfo: function(b) {
                    var c = b.isWindow ? "" : b.element.css("overflow-x"),
                        d = b.isWindow ? "" : b.element.css("overflow-y"),
                        e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth;
                    return {
                        width: "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0,
                        height: e ? a.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(b) {
                    var c = a(b || window),
                        d = a.isWindow(c[0]);
                    return {
                        element: c,
                        isWindow: d,
                        offset: c.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: c.scrollLeft(),
                        scrollTop: c.scrollTop(),
                        width: d ? c.width() : c.outerWidth(),
                        height: d ? c.height() : c.outerHeight()
                    }
                }
            }, a.fn.position = function(b) {
                if (!b || !b.of) return o.apply(this, arguments);
                b = a.extend({}, b);
                var f, n, p, q, r, s, t = a(b.of),
                    u = a.position.getWithinInfo(b.within),
                    v = a.position.getScrollInfo(u),
                    w = (b.collision || "flip").split(" "),
                    x = {};
                return s = e(t), t[0].preventDefault && (b.at = "left top"), n = s.width, p = s.height, q = s.offset, r = a.extend({}, q), a.each(["my", "at"], function() {
                    var a, c, d = (b[this] || "").split(" ");
                    1 === d.length && (d = j.test(d[0]) ? d.concat(["center"]) : k.test(d[0]) ? ["center"].concat(d) : ["center", "center"]), d[0] = j.test(d[0]) ? d[0] : "center", d[1] = k.test(d[1]) ? d[1] : "center", a = l.exec(d[0]), c = l.exec(d[1]), x[this] = [a ? a[0] : 0, c ? c[0] : 0], b[this] = [m.exec(d[0])[0], m.exec(d[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += n : "center" === b.at[0] && (r.left += n / 2), "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), f = c(x.at, n, p), r.left += f[0], r.top += f[1], this.each(function() {
                    var e, j, k = a(this),
                        l = k.outerWidth(),
                        m = k.outerHeight(),
                        o = d(this, "marginLeft"),
                        s = d(this, "marginTop"),
                        y = l + o + d(this, "marginRight") + v.width,
                        z = m + s + d(this, "marginBottom") + v.height,
                        A = a.extend({}, r),
                        B = c(x.my, k.outerWidth(), k.outerHeight());
                    "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= m : "center" === b.my[1] && (A.top -= m / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = i(A.left), A.top = i(A.top)), e = {
                        marginLeft: o,
                        marginTop: s
                    }, a.each(["left", "top"], function(c, d) {
                        a.ui.position[w[c]] && a.ui.position[w[c]][d](A, {
                            targetWidth: n,
                            targetHeight: p,
                            elemWidth: l,
                            elemHeight: m,
                            collisionPosition: e,
                            collisionWidth: y,
                            collisionHeight: z,
                            offset: [f[0] + B[0], f[1] + B[1]],
                            my: b.my,
                            at: b.at,
                            within: u,
                            elem: k
                        })
                    }), b.using && (j = function(a) {
                        var c = q.left - A.left,
                            d = c + n - l,
                            e = q.top - A.top,
                            f = e + p - m,
                            i = {
                                target: {
                                    element: t,
                                    left: q.left,
                                    top: q.top,
                                    width: n,
                                    height: p
                                },
                                element: {
                                    element: k,
                                    left: A.left,
                                    top: A.top,
                                    width: l,
                                    height: m
                                },
                                horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                                vertical: 0 > f ? "top" : e > 0 ? "bottom" : "middle"
                            };
                        l > n && n > h(c + d) && (i.horizontal = "center"), m > p && p > h(e + f) && (i.vertical = "middle"), i.important = g(h(c), h(d)) > g(h(e), h(f)) ? "horizontal" : "vertical", b.using.call(this, a, i)
                    }), k.offset(a.extend(A, {
                        using: j
                    }))
                })
            }, a.ui.position = {
                fit: {
                    left: function(a, b) {
                        var c, d = b.within,
                            e = d.isWindow ? d.scrollLeft : d.offset.left,
                            f = d.width,
                            h = a.left - b.collisionPosition.marginLeft,
                            i = e - h,
                            j = h + b.collisionWidth - f - e;
                        b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
                    },
                    top: function(a, b) {
                        var c, d = b.within,
                            e = d.isWindow ? d.scrollTop : d.offset.top,
                            f = b.within.height,
                            h = a.top - b.collisionPosition.marginTop,
                            i = e - h,
                            j = h + b.collisionHeight - f - e;
                        b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
                    }
                },
                flip: {
                    left: function(a, b) {
                        var c, d, e = b.within,
                            f = e.offset.left + e.scrollLeft,
                            g = e.width,
                            i = e.isWindow ? e.scrollLeft : e.offset.left,
                            j = a.left - b.collisionPosition.marginLeft,
                            k = j - i,
                            l = j + b.collisionWidth - g - i,
                            m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                            n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                            o = -2 * b.offset[0];
                        0 > k ? (0 > (c = a.left + m + n + o + b.collisionWidth - g - f) || h(k) > c) && (a.left += m + n + o) : l > 0 && ((d = a.left - b.collisionPosition.marginLeft + m + n + o - i) > 0 || l > h(d)) && (a.left += m + n + o)
                    },
                    top: function(a, b) {
                        var c, d, e = b.within,
                            f = e.offset.top + e.scrollTop,
                            g = e.height,
                            i = e.isWindow ? e.scrollTop : e.offset.top,
                            j = a.top - b.collisionPosition.marginTop,
                            k = j - i,
                            l = j + b.collisionHeight - g - i,
                            m = "top" === b.my[1],
                            n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                            o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                            p = -2 * b.offset[1];
                        0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || h(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || l > h(c)) && (a.top += n + o + p))
                    }
                },
                flipfit: {
                    left: function() {
                        a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var b, c, d, e, f, g = document.getElementsByTagName("body")[0],
                    h = document.createElement("div");
                b = document.createElement(g ? "div" : "body"), d = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, g && a.extend(d, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (f in d) b.style[f] = d[f];
                b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
            }()
    }(jQuery),
    function(a, b) {
        a.widget("ui.progressbar", {
            version: "1.10.3",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function(a) {
                return a === b ? this.options.value : (this.options.value = this._constrainedValue(a), this._refreshValue(), b)
            },
            _constrainedValue: function(a) {
                return a === b && (a = this.options.value), this.indeterminate = !1 === a, "number" != typeof a && (a = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, a))
            },
            _setOptions: function(a) {
                var b = a.value;
                delete a.value, this._super(a), this.options.value = this._constrainedValue(b), this._refreshValue()
            },
            _setOption: function(a, b) {
                "max" === a && (b = Math.max(this.min, b)), this._super(a, b)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var b = this.options.value,
                    c = this._percentage();
                this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(c.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": b
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, this._trigger("change")), b === this.options.max && this._trigger("complete")
            }
        })
    }(jQuery),
    function(a) {
        var b = 5;
        a.widget("ui.slider", a.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var b, c, d = this.options,
                    e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    g = [];
                for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++) g.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
                this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(b) {
                    a(this).data("ui-slider-handle-index", b)
                })
            },
            _createRange: function() {
                var b = this.options,
                    c = "";
                b.range ? (!0 === b.range && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : this.range = a([])
            },
            _setupEvents: function() {
                var a = this.handles.add(this.range).filter("a");
                this._off(a), this._on(a, this._handleEvents), this._hoverable(a), this._focusable(a)
            },
            _destroy: function() {
                this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(b) {
                var c, d, e, f, g, i, j, k = this,
                    l = this.options;
                return !l.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), c = {
                    x: b.pageX,
                    y: b.pageY
                }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(b) {
                    var c = Math.abs(d - k.values(b));
                    (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b)
                }), !1 !== this._start(b, g) && (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? {
                    left: 0,
                    top: 0
                } : {
                    left: b.pageX - i.left - f.width() / 2,
                    top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(a) {
                var b = {
                        x: a.pageX,
                        y: a.pageY
                    },
                    c = this._normValueFromMouse(b);
                return this._slide(a, this._handleIndex, c), !1
            },
            _mouseStop: function(a) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(a) {
                var b, c, d, e, f;
                return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
            },
            _start: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
            },
            _slide: function(a, b, c) {
                var d, e, f;
                this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c,
                    values: e
                }), d = this.values(b ? 0 : 1), !1 !== f && this.values(b, c, !0))) : c !== this.value() && !1 !== (f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                })) && this.value(c)
            },
            _stop: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
            },
            _change: function(a, b) {
                if (!this._keySliding && !this._mouseSliding) {
                    var c = {
                        handle: this.handles[b],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c)
                }
            },
            value: function(a) {
                return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(b, c) {
                var d, e, f;
                if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b);
                if (!arguments.length) return this._values();
                if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
                for (d = this.options.values, e = arguments[0], f = 0; d.length > f; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                this._refreshValue()
            },
            _setOption: function(b, c) {
                var d, e = 0;
                switch ("range" === b && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), b) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) this._change(null, d);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function(a) {
                var b, c, d;
                if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
                if (this.options.values && this.options.values.length) {
                    for (c = this.options.values.slice(), d = 0; c.length > d; d += 1) c[d] = this._trimAlignValue(c[d]);
                    return c
                }
                return []
            },
            _trimAlignValue: function(a) {
                if (this._valueMin() >= a) return this._valueMin();
                if (a >= this._valueMax()) return this._valueMax();
                var b = this.options.step > 0 ? this.options.step : 1,
                    c = (a - this._valueMin()) % b,
                    d = a - c;
                return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var b, c, d, e, f, g = this.options.range,
                    h = this.options,
                    i = this,
                    j = !this._animateOff && h.animate,
                    k = {};
                this.options.values && this.options.values.length ? this.handles.each(function(d) {
                    c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), !0 === i.options.range && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                        left: c + "%"
                    }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                        width: c - b + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                        bottom: c + "%"
                    }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                        height: c - b + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    }))), b = c
                }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                    width: c + "%"
                }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                    width: 100 - c + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                    height: c + "%"
                }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                    height: 100 - c + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))
            },
            _handleEvents: {
                keydown: function(c) {
                    var e, f, g, h = a(c.target).data("ui-slider-handle-index");
                    switch (c.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (c.preventDefault(), !this._keySliding && (this._keySliding = !0, a(c.target).addClass("ui-state-active"), !1 === this._start(c, h))) return
                    }
                    switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), c.keyCode) {
                        case a.ui.keyCode.HOME:
                            f = this._valueMin();
                            break;
                        case a.ui.keyCode.END:
                            f = this._valueMax();
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / b);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / b);
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (e === this._valueMax()) return;
                            f = this._trimAlignValue(e + g);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (e === this._valueMin()) return;
                            f = this._trimAlignValue(e - g)
                    }
                    this._slide(c, h, f)
                },
                click: function(a) {
                    a.preventDefault()
                },
                keyup: function(b) {
                    var c = a(b.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
                }
            }
        })
    }(jQuery),
    function(a) {
        function b(a) {
            return function() {
                var b = this.element.val();
                a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change")
            }
        }
        a.widget("ui.spinner", {
            version: "1.10.3",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var b = {},
                    c = this.element;
                return a.each(["min", "max", "step"], function(a, d) {
                    var e = c.attr(d);
                    void 0 !== e && e.length && (b[d] = e)
                }), b
            },
            _events: {
                keydown: function(a) {
                    this._start(a) && this._keydown(a) && a.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(a) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", a)))
                },
                mousewheel: function(a, b) {
                    if (b) {
                        if (!this.spinning && !this._start(a)) return !1;
                        this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(a)
                        }, 100), a.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(b) {
                    function c() {
                        this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = d, this._delay(function() {
                            this.previous = d
                        }))
                    }
                    var d;
                    d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, c.call(this)
                    }), !1 !== this._start(b) && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(b) {
                    return a(b.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(b) && void this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * a.height()) && a.height() > 0 && a.height(a.height()), this.options.disabled && this.disable()
            },
            _keydown: function(b) {
                var c = this.options,
                    d = a.ui.keyCode;
                switch (b.keyCode) {
                    case d.UP:
                        return this._repeat(null, 1, b), !0;
                    case d.DOWN:
                        return this._repeat(null, -1, b), !0;
                    case d.PAGE_UP:
                        return this._repeat(null, c.page, b), !0;
                    case d.PAGE_DOWN:
                        return this._repeat(null, -c.page, b), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(a) {
                return !(!this.spinning && !1 === this._trigger("start", a)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function(a, b, c) {
                a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, b, c)
                }, a), this._spin(b * this.options.step, c)
            },
            _spin: function(a, b) {
                var c = this.value() || 0;
                this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", b, {
                    value: c
                }) || (this._value(c), this.counter++)
            },
            _increment: function(b) {
                var c = this.options.incremental;
                return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1
            },
            _precision: function() {
                var a = this._precisionOf(this.options.step);
                return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
            },
            _precisionOf: function(a) {
                var b = "" + a,
                    c = b.indexOf(".");
                return -1 === c ? 0 : b.length - c - 1
            },
            _adjustValue: function(a) {
                var b, c, d = this.options;
                return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && d.min > a ? d.min : a
            },
            _stop: function(a) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
            },
            _setOption: function(a, b) {
                if ("culture" === a || "numberFormat" === a) {
                    var c = this._parse(this.element.val());
                    return this.options[a] = b, void this.element.val(this._format(c))
                }("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)), this._super(a, b), "disabled" === a && (b ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: b(function(a) {
                this._super(a), this._value(this.element.val())
            }),
            _parse: function(a) {
                return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a
            },
            _format: function(a) {
                return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(a, b) {
                var c;
                "" !== a && null !== (c = this._parse(a)) && (b || (c = this._adjustValue(c)), a = this._format(c)), this.element.val(a), this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: b(function(a) {
                this._stepUp(a)
            }),
            _stepUp: function(a) {
                this._start() && (this._spin((a || 1) * this.options.step), this._stop())
            },
            stepDown: b(function(a) {
                this._stepDown(a)
            }),
            _stepDown: function(a) {
                this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
            },
            pageUp: b(function(a) {
                this._stepUp((a || 1) * this.options.page)
            }),
            pageDown: b(function(a) {
                this._stepDown((a || 1) * this.options.page)
            }),
            value: function(a) {
                return arguments.length ? void b(this._value).call(this, a) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    }(jQuery),
    function(a, b) {
        function c() {
            return ++e
        }

        function d(a) {
            return a.hash.length > 1 && decodeURIComponent(a.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
        }
        var e = 0,
            f = /#.*$/;
        a.widget("ui.tabs", {
            version: "1.10.3",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var b = this,
                    c = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                    return b.tabs.index(a)
                }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : a(), this._refresh(), this.active.length && this.load(c.active)
            },
            _initialActive: function() {
                var c = this.options.active,
                    d = this.options.collapsible,
                    e = location.hash.substring(1);
                return null === c && (e && this.tabs.each(function(d, f) {
                    return a(f).attr("aria-controls") === e ? (c = d, !1) : b
                }), null === c && (c = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === c || -1 === c) && (c = !!this.tabs.length && 0)), !1 !== c && -1 === (c = this.tabs.index(this.tabs.eq(c))) && (c = !d && 0), !d && !1 === c && this.anchors.length && (c = 0), c
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : a()
                }
            },
            _tabKeydown: function(c) {
                var d = a(this.document[0].activeElement).closest("li"),
                    e = this.tabs.index(d),
                    f = !0;
                if (!this._handlePageNav(c)) {
                    switch (c.keyCode) {
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                            e++;
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.LEFT:
                            f = !1, e--;
                            break;
                        case a.ui.keyCode.END:
                            e = this.anchors.length - 1;
                            break;
                        case a.ui.keyCode.HOME:
                            e = 0;
                            break;
                        case a.ui.keyCode.SPACE:
                            return c.preventDefault(), clearTimeout(this.activating), this._activate(e), b;
                        case a.ui.keyCode.ENTER:
                            return c.preventDefault(), clearTimeout(this.activating), this._activate(e !== this.options.active && e), b;
                        default:
                            return
                    }
                    c.preventDefault(), clearTimeout(this.activating), e = this._focusNextTab(e, f), c.ctrlKey || (d.attr("aria-selected", "false"), this.tabs.eq(e).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", e)
                    }, this.delay))
                }
            },
            _panelKeydown: function(b) {
                this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(c) {
                return c.altKey && c.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : c.altKey && c.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : b
            },
            _findNextTab: function(b, c) {
                function d() {
                    return b > e && (b = 0), 0 > b && (b = e), b
                }
                for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function(a, b) {
                return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
            },
            _setOption: function(a, c) {
                return "active" === a ? (this._activate(c), b) : "disabled" === a ? (this._setupDisabled(c), b) : (this._super(a, c), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", c), c || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(c), "heightStyle" === a && this._setupHeightStyle(c), b)
            },
            _tabId: function(a) {
                return a.attr("aria-controls") || "ui-tabs-" + c()
            },
            _sanitizeSelector: function(a) {
                return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var b = this.options,
                    c = this.tablist.children(":has(a[href])");
                b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                    return c.index(a)
                }), this._processTabs(), !1 !== b.active && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return a("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = a(), this.anchors.each(function(c, e) {
                    var f, g, h, i = a(e).uniqueId().attr("id"),
                        j = a(e).closest("li"),
                        k = j.attr("aria-controls");
                    d(e) ? (f = e.hash, g = b.element.find(b._sanitizeSelector(f))) : (h = b._tabId(j), f = "#" + h, g = b.element.find(f), g.length || (g = b._createPanel(h), g.insertAfter(b.panels[c - 1] || b.tablist)), g.attr("aria-live", "polite")), g.length && (b.panels = b.panels.add(g)), k && j.data("ui-tabs-aria-controls", k), j.attr({
                        "aria-controls": f.substring(1),
                        "aria-labelledby": i
                    }), g.attr("aria-labelledby", i)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                for (var c, d = 0; c = this.tabs[d]; d++) !0 === b || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function(b) {
                var c = {
                    click: function(a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, c), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(b) {
                var c, d = this.element.parent();
                "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var b = a(this),
                        d = b.css("position");
                    "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    c -= a(this).outerHeight(!0)
                }), this.panels.each(function() {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                    c = Math.max(c, a(this).height("").height())
                }).height(c))
            },
            _eventHandler: function(b) {
                var c = this.options,
                    d = this.active,
                    e = a(b.currentTarget),
                    f = e.closest("li"),
                    g = f[0] === d[0],
                    h = g && c.collapsible,
                    i = h ? a() : this._getPanelForTab(f),
                    j = d.length ? this._getPanelForTab(d) : a(),
                    k = {
                        oldTab: d,
                        oldPanel: j,
                        newTab: h ? a() : f,
                        newPanel: i
                    };
                b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || !1 === this._trigger("beforeActivate", b, k) || (c.active = !h && this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
            },
            _toggle: function(b, c) {
                function d() {
                    f.running = !1, f._trigger("activate", b, c)
                }

                function e() {
                    c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
                }
                var f = this,
                    g = c.newPanel,
                    h = c.oldPanel;
                this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), c.oldTab.attr("aria-selected", "false"), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), g.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), c.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(b) {
                var c, d = this._findActive(b);
                d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return !1 === b ? a() : this.tabs.eq(b)
            },
            _getIndex: function(a) {
                return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var b = a(this),
                        c = b.data("ui-tabs-aria-controls");
                    c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(c) {
                var d = this.options.disabled;
                !1 !== d && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function(a) {
                    return a !== c ? a : null
                }) : a.map(this.tabs, function(a, b) {
                    return b !== c ? b : null
                })), this._setupDisabled(d))
            },
            disable: function(c) {
                var d = this.options.disabled;
                if (!0 !== d) {
                    if (c === b) d = !0;
                    else {
                        if (c = this._getIndex(c), -1 !== a.inArray(c, d)) return;
                        d = a.isArray(d) ? a.merge([c], d).sort() : [c]
                    }
                    this._setupDisabled(d)
                }
            },
            load: function(b, c) {
                b = this._getIndex(b);
                var e = this,
                    f = this.tabs.eq(b),
                    g = f.find(".ui-tabs-anchor"),
                    h = this._getPanelForTab(f),
                    i = {
                        tab: f,
                        panel: h
                    };
                d(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, c, i)), this.xhr && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function(a) {
                    setTimeout(function() {
                        h.html(a), e._trigger("load", c, i)
                    }, 1)
                }).complete(function(a, b) {
                    setTimeout(function() {
                        "abort" === b && e.panels.stop(!1, !0), f.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), a === e.xhr && delete e.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(b, c, d) {
                var e = this;
                return {
                    url: b.attr("href"),
                    beforeSend: function(b, f) {
                        return e._trigger("beforeLoad", c, a.extend({
                            jqXHR: b,
                            ajaxSettings: f
                        }, d))
                    }
                }
            },
            _getPanelForTab: function(b) {
                var c = a(b).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + c))
            }
        })
    }(jQuery),
    function(a) {
        function b(b, c) {
            var d = (b.attr("aria-describedby") || "").split(/\s+/);
            d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
        }

        function c(b) {
            var c = b.data("ui-tooltip-id"),
                d = (b.attr("aria-describedby") || "").split(/\s+/),
                e = a.inArray(c, d); - 1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
        }
        var d = 0;
        a.widget("ui.tooltip", {
            version: "1.10.3",
            options: {
                content: function() {
                    var b = a(this).attr("title") || "";
                    return a("<a>").text(b).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            },
            _setOption: function(b, c) {
                var d = this;
                return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void(this.options[b] = c)) : (this._super(b, c), void("content" === b && a.each(this.tooltips, function(a, b) {
                    d._updateContent(b)
                })))
            },
            _disable: function() {
                var b = this;
                a.each(this.tooltips, function(c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var b = a(this);
                    b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var b = a(this);
                    b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
                })
            },
            open: function(b) {
                var c = this,
                    d = a(b ? b.target : this.element).closest(this.options.items);
                d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
                    var b, d = a(this);
                    d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                        element: this,
                        title: d.attr("title")
                    }, d.attr("title", ""))
                }), this._updateContent(d, b))
            },
            _updateContent: function(a, b) {
                var c, d = this.options.content,
                    e = this,
                    f = b ? b.type : null;
                return "string" == typeof d ? this._open(b, a, d) : void((c = d.call(a[0], function(c) {
                    a.data("ui-tooltip-open") && e._delay(function() {
                        b && (b.type = f), this._open(b, a, c)
                    })
                })) && this._open(b, a, c))
            },
            _open: function(c, d, e) {
                function f(a) {
                    j.of = a, g.is(":hidden") || g.position(j)
                }
                var g, h, i, j = a.extend({}, this.options.position);
                if (e) {
                    if (g = this._find(d), g.length) return void g.find(".ui-tooltip-content").html(e);
                    d.is("[title]") && (c && "mouseover" === c.type ? d.attr("title", "") : d.removeAttr("title")), g = this._tooltip(d), b(d, g.attr("id")), g.find(".ui-tooltip-content").html(e), this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {
                        mousemove: f
                    }), f(c)) : g.position(a.extend({ of: d
                    }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = this.delayedShow = setInterval(function() {
                        g.is(":visible") && (f(j.of), clearInterval(i))
                    }, a.fx.interval)), this._trigger("open", c, {
                        tooltip: g
                    }), h = {
                        keyup: function(b) {
                            if (b.keyCode === a.ui.keyCode.ESCAPE) {
                                var c = a.Event(b);
                                c.currentTarget = d[0], this.close(c, !0)
                            }
                        },
                        remove: function() {
                            this._removeTooltip(g)
                        }
                    }, c && "mouseover" !== c.type || (h.mouseleave = "close"), c && "focusin" !== c.type || (h.focusout = "close"), this._on(!0, d, h)
                }
            },
            close: function(b) {
                var d = this,
                    e = a(b ? b.currentTarget : this.element),
                    f = this._find(e);
                this.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")), c(e), f.stop(!0), this._hide(f, this.options.hide, function() {
                    d._removeTooltip(a(this))
                }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
                    a(c.element).attr("title", c.title), delete d.parents[b]
                }), this.closing = !0, this._trigger("close", b, {
                    tooltip: f
                }), this.closing = !1)
            },
            _tooltip: function(b) {
                var c = "ui-tooltip-" + d++,
                    e = a("<div>").attr({
                        id: c,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return a("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[c] = b, e
            },
            _find: function(b) {
                var c = b.data("ui-tooltip-id");
                return c ? a("#" + c) : a()
            },
            _removeTooltip: function(a) {
                a.remove(), delete this.tooltips[a.attr("id")]
            },
            _destroy: function() {
                var b = this;
                a.each(this.tooltips, function(c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0), a("#" + c).remove(), d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
                })
            }
        })
    }(jQuery), "bind" in Function.prototype || (Function.prototype.bind = function(a) {
        var b = this;
        if (arguments.length <= 1) return function() {
            return b.apply(a, arguments)
        };
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            return b.apply(a, 0 === arguments.length ? c : c.concat(Array.prototype.slice.call(arguments)))
        }
    }), "trim" in String.prototype || (String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(a, b) {
        void 0 === b && (b = 0), 0 > b && (b += this.length), 0 > b && (b = 0);
        for (var c = this.length; c > b; b++)
            if (b in this && this[b] === a) return b;
        return -1
    }), "lastIndexOf" in Array.prototype || (Array.prototype.lastIndexOf = function(a, b) {
        for (void 0 === b && (b = this.length - 1), 0 > b && (b += this.length), b > this.length - 1 && (b = this.length - 1), b++; b-- > 0;)
            if (b in this && this[b] === a) return b;
        return -1
    }), "forEach" in Array.prototype || (Array.prototype.forEach = function(a, b) {
        for (var c = 0, d = this.length; d > c; c++) c in this && a.call(b, this[c], c, this)
    }), "map" in Array.prototype || (Array.prototype.map = function(a, b) {
        for (var c = new Array(this.length), d = 0, e = this.length; e > d; d++) d in this && (c[d] = a.call(b, this[d], d, this));
        return c
    }), "filter" in Array.prototype || (Array.prototype.filter = function(a, b) {
        for (var c, d = [], e = 0, f = this.length; f > e; e++) e in this && a.call(b, c = this[e], e, this) && d.push(c);
        return d
    }), "every" in Array.prototype || (Array.prototype.every = function(a, b) {
        for (var c = 0, d = this.length; d > c; c++)
            if (c in this && !a.call(b, this[c], c, this)) return !1;
        return !0
    }), "some" in Array.prototype || (Array.prototype.some = function(a, b) {
        for (var c = 0, d = this.length; d > c; c++)
            if (c in this && a.call(b, this[c], c, this)) return !0;
        return !1
    }),
    function() {
        for (var a, b = function() {}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b)
    }(),
    function(a) {
        a.widget("accordiona.accordionA", {
            options: {
                section: "> section",
                header: "> header",
                content: "> .content"
            },
            _create: function() {
                this.$window = a(window), this.$document = a(document), this.sections = this.element.find(this.options.section), this.html = a("html").addClass("js"), this.element.attr("role", "tablist").delegate(this.sections.prop("nodeName") + " " + this.options.header, "click focus blur".split(" ").concat("").join("." + this.namespace + " "), a.proxy(function(b) {
                    var c = a(b.target).closest(this.sections),
                        d = c.find(this.options.header);
                    switch (c.find(this.options.content), b.type) {
                        case "click":
                            d.addClass("no-outline"), this.toggle(c);
                            break;
                        case "focusin":
                            c.bind("keydown." + this.namespace, a.proxy(function(a) {
                                switch (a.keyCode) {
                                    case 9:
                                        d.removeClass("no-outline");
                                        break;
                                    case 32:
                                        a.preventDefault(), this.toggle(c)
                                }
                            }, this));
                            break;
                        case "focusout":
                            c.unbind("keydown." + this.namespace)
                    }
                }, this)), this.sections.filter('[aria-expanded="true"]:not(:first)').removeAttr("aria-expanded"), this.sections.each(a.proxy(function(b, c) {
                    var d = a(c),
                        e = d.find(this.options.content);
                    d.find(this.options.header).attr({
                        role: "tab",
                        tabindex: 0
                    }), e.attr("role", "tabpanel").data(this.namespace, {
                        height: e.height()
                    }).addClass("no-transition"), this.toggle(d, "true" === d.attr("aria-expanded")), setTimeout(function() {
                        e.removeClass("no-transition")
                    })
                }, this)), this._hash()
            },
            destroy: function() {
                this.$window.unbind(this.namespace), this.$document.undelegate(this.namespace), this.element.undelegate(this.namespace), a.Widget.prototype.destroy.call(this)
            },
            refresh: function() {
                a.Widget.prototype.destroy.call(this), a.Widget.prototype._create.call(this)
            },
            toggle: function(b, c) {
                if (!b.jquery) switch (typeof b) {
                    case "object":
                        b = a(b);
                        break;
                    case "string":
                        b = this.element.find(b);
                        break;
                    case "number":
                        b = this.sections.eq(b)
                }
                if (b.length) {
                    "boolean" != typeof c && (c = "true" !== b.attr("aria-expanded")), c && this.toggle(this.sections.filter('[aria-expanded="true"]'), !1);
                    var d = b.attr("aria-expanded", c).toggleClass("expanded", c).find(this.options.content),
                        e = 0;
                    if (c)
                        for (var f = this.sections.length - 1; f >= 0; f--) a(this.sections[f]).hasClass("expanded") && a(this.sections[f]).find(".content").children().each(function() {
                            e += a(this).outerHeight(!0)
                        });
                    d.height(c ? e : 0), this._trigger("toggle", null, {
                        expand: c
                    })
                }
                return this
            },
            _hash: function() {
                location.hash && this._expandHash(location.hash), this.$document.delegate('a[href^="#"]:not([href="#"])', "click." + this.namespace, a.proxy(function(b) {
                    this._expandHash(a(b.target).attr("href"))
                }, this)), this.$window.bind("hashchange." + this.namespace, a.proxy(function() {
                    this._expandHash(location.hash)
                }, this))
            },
            _expandHash: function(b) {
                var c = this.element.find(b);
                if (c.length) {
                    var d = this.$document.height() > this.$window.height();
                    d && this.element.addClass("no-transition"), this.toggle(c.closest(this.sections), !0), d && setTimeout(a.proxy(function() {
                        this.element.removeClass("no-transition")
                    }, this))
                }
            }
        })
    }(jQuery),
    function(a) {
        function b(b, c) {
            var d = "obj" + ("" + Math.random()).slice(2, 15),
                e = '<object class="fp-engine" id="' + d + '" name="' + d + '" ';
            e += a.browser.msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + b + '" type="application/x-shockwave-flash">';
            var f = {
                width: "100%",
                height: "100%",
                allowscriptaccess: "always",
                wmode: "transparent",
                quality: "high",
                flashvars: "",
                movie: b + (a.browser.msie ? "?" + d : ""),
                name: d
            };
            return a.each(c, function(a, b) {
                f.flashvars += a + "=" + b + "&"
            }), a.each(f, function(a, b) {
                e += '<param name="' + a + '" value="' + b + '"/>'
            }), e += "</object>", a(e)
        }

        function c(a, b) {
            return b = b || 100, Math.round(a * b) / b
        }

        function d(a) {
            return /mpegurl/i.test(a) ? "application/x-mpegurl" : "video/" + a
        }

        function e(a) {
            return /^(video|application)/.test(a) || (a = d(a)), !!q.canPlayType(a).replace("no", "")
        }

        function f(b, c) {
            var d = a.grep(b, function(a) {
                return a.type === c
            });
            return d.length ? d[0] : null
        }

        function g(a) {
            var b = a.attr("src"),
                c = a.attr("type") || "",
                d = b.split(t)[1];
            return c = /mpegurl/.test(c) ? "mpegurl" : c.replace("video/", ""), {
                src: b,
                suffix: d || c,
                type: c || d
            }
        }

        function h(b) {
            var c = this,
                d = [];
            a("source", b).each(function() {
                d.push(g(a(this)))
            }), d.length || d.push(g(b)), c.initialSources = d, c.resolve = function(b) {
                return b ? (a.isArray(b) ? b = {
                    sources: a.map(b, function(b) {
                        var c, d = a.extend({}, b);
                        return a.each(b, function(a) {
                            c = a
                        }), d.type = c, d.src = b[c], delete d[c], d
                    })
                } : "string" == typeof b && (b = {
                    src: b,
                    sources: []
                }, a.each(d, function(a, c) {
                    "flash" != c.type && b.sources.push({
                        type: c.type,
                        src: b.src.replace(t, "." + c.suffix + "$2")
                    })
                })), b) : {
                    sources: d
                }
            }
        }

        function i(a) {
            return a = parseInt(a, 10), a >= 10 ? a : "0" + a
        }

        function j(a) {
            a = a || 0;
            var b = Math.floor(a / 3600),
                c = Math.floor(a / 60);
            return a -= 60 * c, b >= 1 ? (c -= 60 * b, b + ":" + i(c) + ":" + i(a)) : i(c) + ":" + i(a)
        }! function(a) {
            if (!a.browser) {
                var b = a.browser = {},
                    c = navigator.userAgent.toLowerCase(),
                    d = /(chrome)[ \/]([\w.]+)/.exec(c) || /(safari)[ \/]([\w.]+)/.exec(c) || /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || c.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c) || [];
                d[1] && (b[d[1]] = !0, b.version = d[2] || "0")
            }
        }(jQuery), a(function() {
            "function" == typeof a.fn.flowplayer && a("video").parent(".flowplayer").flowplayer()
        });
        var k = [],
            l = [],
            m = window.navigator.userAgent;
        window.flowplayer = function(b) {
            return a.isFunction(b) ? l.push(b) : "number" == typeof b || void 0 === b ? k[b || 0] : a(b).data("flowplayer")
        }, a(window).on("beforeunload", function() {
            a.each(k, function(b, c) {
                c.conf.splash ? c.unload() : c.bind("error", function() {
                    a(".flowplayer.is-error .fp-message").remove()
                })
            })
        });
        var n = !1;
        try {
            "object" == typeof window.localStorage && (window.localStorage.flowplayerTestStorage = "test", n = !0)
        } catch (a) {}
        a.extend(flowplayer, {
            version: "5.4.6",
            engine: {},
            conf: {},
            support: {},
            defaults: {
                debug: !1,
                disabled: !1,
                engine: "html5",
                fullscreen: window == window.top,
                keyboard: !0,
                ratio: 9 / 16,
                adaptiveRatio: !1,
                flashfit: !1,
                rtmp: 0,
                splash: !1,
                live: !1,
                swf: "//releases.flowplayer.org/5.4.6/commercial/flowplayer.swf",
                speeds: [.25, .5, 1, 1.5, 2],
                tooltip: !0,
                volume: n ? "true" == localStorage.muted ? 0 : isNaN(localStorage.volume) ? 1 : localStorage.volume || 1 : 1,
                errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."],
                errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"],
                playlist: []
            }
        });
        var o = 1;
        a.fn.flowplayer = function(b, c) {
                return "string" == typeof b && (b = {
                    swf: b
                }), a.isFunction(b) && (c = b, b = {}), !b && this.data("flowplayer") || this.each(function() {
                    var d, e, f = a(this).addClass("is-loading"),
                        g = a.extend({}, flowplayer.defaults, flowplayer.conf, b, f.data()),
                        i = a("video", f).addClass("fp-engine").removeAttr("controls"),
                        j = i.length ? new h(i) : null,
                        m = {};
                    if (g.playlist.length) {
                        var n, p = i.attr("preload");
                        i.length && i.replaceWith(n = a("<p />")), i = a("<video />").addClass("fp-engine"), n ? n.replaceWith(i) : f.prepend(i), flowplayer.support.video && i.attr("preload", p), "string" == typeof g.playlist[0] ? i.attr("src", g.playlist[0]) : a.each(g.playlist[0], function(b, c) {
                            for (var d in c) c.hasOwnProperty(d) && i.append(a("<source />").attr({
                                type: "video/" + d,
                                src: c[d]
                            }))
                        }), j = new h(i)
                    }
                    var q = f.data("flowplayer");
                    q && q.unload(), f.data("fp-player_id", f.data("fp-player_id") || o++);
                    try {
                        m = window.localStorage || m
                    } catch (a) {}
                    var r = this.currentStyle && "rtl" === this.currentStyle.direction || window.getComputedStyle && "rtl" === window.getComputedStyle(this, null).getPropertyValue("direction");
                    r && f.addClass("is-rtl");
                    var s = q || {
                        conf: g,
                        currentSpeed: 1,
                        volumeLevel: void 0 === g.volume ? 1 * m.volume : g.volume,
                        video: {},
                        disabled: !1,
                        finished: !1,
                        loading: !1,
                        muted: "true" == m.muted || g.muted,
                        paused: !1,
                        playing: !1,
                        ready: !1,
                        splash: !1,
                        rtl: r,
                        load: function(b, c) {
                            if (!(s.error || s.loading || s.disabled)) {
                                if (b = j.resolve(b), a.extend(b, e.pick(b.sources)), b.src) {
                                    var d = a.Event("load");
                                    f.trigger(d, [s, b, e]), d.isDefaultPrevented() ? s.loading = !1 : (e.load(b), a.isFunction(b) && (c = b), c && f.one("ready", c))
                                }
                                return s
                            }
                        },
                        pause: function(a) {
                            return !s.ready || s.seeking || s.disabled || s.loading || (e.pause(), s.one("pause", a)), s
                        },
                        resume: function() {
                            return s.ready && s.paused && !s.disabled && (e.resume(), s.finished && (s.trigger("resume", [s]), s.finished = !1)), s
                        },
                        toggle: function() {
                            return s.ready ? s.paused ? s.resume() : s.pause() : s.load()
                        },
                        seek: function(b, c) {
                            if (s.ready) {
                                if ("boolean" == typeof b) {
                                    var g = .1 * s.video.duration;
                                    b = s.video.time + (b ? g : -g)
                                }
                                b = d = Math.min(Math.max(b, 0), s.video.duration).toFixed(1);
                                var h = a.Event("beforeseek");
                                f.trigger(h, [s, b]), h.isDefaultPrevented() ? (s.seeking = !1, f.toggleClass("is-seeking", s.seeking)) : (e.seek(b), a.isFunction(c) && f.one("seek", c))
                            }
                            return s
                        },
                        seekTo: function(a, b) {
                            var c = void 0 === a ? d : .1 * s.video.duration * a;
                            return s.seek(c, b)
                        },
                        mute: function(a) {
                            return void 0 === a && (a = !s.muted), m.muted = s.muted = a, m.volume = isNaN(m.volume) ? g.volume : m.volume, s.volume(a ? 0 : m.volume, !0), s.trigger("mute", a), s
                        },
                        volume: function(a, b) {
                            return s.ready && (a = Math.min(Math.max(a, 0), 1), b || (m.volume = a), e.volume(a)), s
                        },
                        speed: function(b, c) {
                            return s.ready && ("boolean" == typeof b && (b = g.speeds[a.inArray(s.currentSpeed, g.speeds) + (b ? 1 : -1)] || s.currentSpeed), e.speed(b), c && f.one("speed", c)), s
                        },
                        stop: function() {
                            return s.ready && (s.pause(), s.seek(0, function() {
                                f.trigger("stop")
                            })), s
                        },
                        unload: function() {
                            return f.hasClass("is-embedding") || (g.splash ? (s.trigger("unload"), e.unload()) : s.stop()), s
                        },
                        disable: function(a) {
                            return void 0 === a && (a = !s.disabled), a != s.disabled && (s.disabled = a, s.trigger("disable", a)), s
                        }
                    };
                    s.conf = a.extend(s.conf, g), a.each(["bind", "one", "unbind"], function(a, b) {
                        s[b] = function(a, c) {
                            return f[b](a, c), s
                        }
                    }), s.trigger = function(a, b) {
                        return f.trigger(a, [s, b]), s
                    }, f.data("flowplayer") || f.bind("boot", function() {
                        return a.each(["autoplay", "loop", "preload", "poster"], function(a, b) {
                            var c = i.attr(b);
                            void 0 !== c && (g[b] = c || !0)
                        }), (g.splash || f.hasClass("is-splash") || !flowplayer.support.firstframe) && (s.forcedSplash = !g.splash && !f.hasClass("is-splash"), s.splash = g.splash = g.autoplay = !0, f.addClass("is-splash"), flowplayer.support.video && i.attr("preload", "none")), (g.live || f.hasClass("is-live")) && (s.live = g.live = !0, f.addClass("is-live")), a.each(l, function() {
                            this(s, f)
                        }), e = flowplayer.engine[g.engine], e && (e = e(s, f)), e.pick(j.initialSources) ? s.engine = g.engine : a.each(flowplayer.engine, function(a) {
                            return a != g.engine ? (e = this(s, f), e.pick(j.initialSources) && (s.engine = a), !1) : void 0
                        }), k.push(s), s.engine ? (g.splash ? s.unload() : s.load(), g.disabled && s.disable(), e.volume(s.volumeLevel), void f.one("ready", c)) : s.trigger("error", {
                            code: flowplayer.support.flashVideo ? 5 : 10
                        })
                    }).bind("load", function(b, c) {
                        g.splash && a(".flowplayer").filter(".is-ready, .is-loading").not(f).each(function() {
                            var b = a(this).data("flowplayer");
                            b.conf.splash && b.unload()
                        }), f.addClass("is-loading"), c.loading = !0
                    }).bind("ready", function(a, b, c) {
                        function d() {
                            f.removeClass("is-loading"), b.loading = !1
                        }
                        c.time = 0, b.video = c, g.splash ? f.one("progress", d) : d(), b.muted ? b.mute(!0) : b.volume(b.volumeLevel)
                    }).bind("unload", function() {
                        g.splash && i.remove(), f.removeClass("is-loading"), s.loading = !1
                    }).bind("ready unload", function(a) {
                        var b = "ready" == a.type;
                        f.toggleClass("is-splash", !b).toggleClass("is-ready", b), s.ready = b, s.splash = !b
                    }).bind("progress", function(a, b, c) {
                        b.video.time = c
                    }).bind("speed", function(a, b, c) {
                        b.currentSpeed = c
                    }).bind("volume", function(a, b, c) {
                        b.volumeLevel = Math.round(100 * c) / 100, b.muted ? c && b.mute(!1) : m.volume = c
                    }).bind("beforeseek seek", function(a) {
                        s.seeking = "beforeseek" == a.type, f.toggleClass("is-seeking", s.seeking)
                    }).bind("ready pause resume unload finish stop", function(a, b, c) {
                        s.paused = /pause|finish|unload|stop/.test(a.type), "ready" == a.type && (s.paused = "none" == g.preload, c && (s.paused = !c.duration || !g.autoplay && "none" != g.preload)), s.playing = !s.paused, f.toggleClass("is-paused", s.paused).toggleClass("is-playing", s.playing), s.load.ed || s.pause()
                    }).bind("finish", function() {
                        s.finished = !0
                    }).bind("error", function() {
                        i.remove()
                    }), f.trigger("boot", [s, f]).data("flowplayer", s)
                })
            },
            function() {
                var b = function(a) {
                        var b = /Version\/(\d\.\d)/.exec(a);
                        return b && b.length > 1 ? parseFloat(b[1], 10) : 0
                    },
                    c = flowplayer.support,
                    d = a.browser,
                    e = a("<video loop autoplay preload/>")[0],
                    f = d.msie,
                    g = navigator.userAgent,
                    h = /iPad|MeeGo/.test(g) && !/CriOS/.test(g),
                    i = /iPad/.test(g) && /CriOS/.test(g),
                    j = /iP(hone|od)/i.test(g) && !/iPad/.test(g),
                    k = /Android/.test(g) && !/Firefox/.test(g),
                    l = /Android/.test(g) && /Firefox/.test(g),
                    m = /Silk/.test(g),
                    n = /IEMobile/.test(g),
                    o = (h && b(g), k ? parseFloat(/Android\ (\d\.\d)/.exec(g)[1], 10) : 0);
                a.extend(c, {
                    subtitles: !!e.addTextTrack,
                    fullscreen: !k && ("function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(g) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen),
                    inlineBlock: !(f && d.version < 8),
                    touch: "ontouchstart" in window,
                    dataload: !h && !j && !n,
                    zeropreload: !f && !k,
                    volume: !(h || k || j || m || i),
                    cachedVideoTag: !(h || j || i || n),
                    firstframe: !(j || h || k || m || i || n || l),
                    inlineVideo: !j && !n && (!k || o >= 3),
                    hlsDuration: !d.safari || h || j || i,
                    seekable: !h && !i
                });
                try {
                    var p = navigator.plugins["Shockwave Flash"],
                        q = f ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : p.description;
                    f || p[0].enabledPlugin ? (q = q.split(/\D+/), q.length && !q[0] && (q = q.slice(1)), c.flashVideo = q[0] > 9 || 9 == q[0] && q[3] >= 115) : c.flashVideo = !1
                } catch (a) {}
                try {
                    c.video = !!e.canPlayType, c.video && e.canPlayType("video/mp4")
                } catch (a) {
                    c.video = !1
                }
                c.animation = function() {
                    for (var b = ["", "Webkit", "Moz", "O", "ms", "Khtml"], c = a("<p/>")[0], d = 0; d < b.length; d++)
                        if ("undefined" !== c.style[b[d] + "AnimationName"]) return !0
                }()
            }(), window.attachEvent && window.attachEvent("onbeforeunload", function() {
                __flash_savedUnloadHandler = __flash_unloadHandler = function() {}
            }), flowplayer.engine.flash = function(c, d) {
                var e, f, g, h = c.conf,
                    i = (c.video, {
                        pick: function(b) {
                            if (flowplayer.support.flashVideo) {
                                var c = a.grep(b, function(a) {
                                    return "flash" == a.type
                                })[0];
                                if (c) return c;
                                for (var d, e = 0; e < b.length; e++)
                                    if (d = b[e], /mp4|flv/.test(d.type)) return d
                            }
                        },
                        load: function(i) {
                            function j(a) {
                                return a.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
                            }
                            var k = a("video", d),
                                l = j(i.src);
                            is_absolute = /^https?:/.test(l);
                            try {
                                k.length > 0 && flowplayer.support.video && k[0].pause()
                            } catch (a) {}
                            var m = function() {
                                    k.remove()
                                },
                                n = function(b) {
                                    return a.grep(b, function(a) {
                                        return !!k[0].canPlayType("video/" + a.type)
                                    }).length > 0
                                };
                            if (flowplayer.support.video && k.prop("autoplay") && n(i.sources) ? k.one("timeupdate", m) : m(), is_absolute || h.rtmp || (l = a("<img/>").attr("src", l)[0].src), g) g.__play(l);
                            else {
                                e = "fp" + ("" + Math.random()).slice(3, 15);
                                var o = {
                                    hostname: h.embedded ? h.hostname : location.hostname,
                                    url: l,
                                    callback: "jQuery." + e
                                };
                                d.data("origin") && (o.origin = d.data("origin")), is_absolute && delete h.rtmp, a.each(["key", "autoplay", "preload", "rtmp", "loop", "debug", "preload", "splash", "bufferTime"], function(a, b) {
                                    h[b] && (o[b] = h[b])
                                }), o.rtmp && (o.rtmp = j(o.rtmp)), f = b(h.swf, o), f.prependTo(d), g = f[0], setTimeout(function() {
                                    try {
                                        if (!g.PercentLoaded()) return d.trigger("error", [c, {
                                            code: 7,
                                            url: h.swf
                                        }])
                                    } catch (a) {}
                                }, 5e3), setTimeout(function() {
                                    void 0 === g.PercentLoaded && d.trigger("flashdisabled", [c])
                                }, 1e3), a[e] = function(b, d) {
                                    h.debug && "status" != b && console.log("--", b, d);
                                    var e = a.Event(b);
                                    switch (b) {
                                        case "ready":
                                            d = a.extend(i, d);
                                            break;
                                        case "click":
                                            e.flash = !0;
                                            break;
                                        case "keydown":
                                            e.which = d;
                                            break;
                                        case "seek":
                                            i.time = d;
                                            break;
                                        case "status":
                                            c.trigger("progress", d.time), d.buffer < i.bytes && !i.buffered ? (i.buffer = d.buffer / i.bytes * i.duration, c.trigger("buffer", i.buffer)) : i.buffered || (i.buffered = !0, c.trigger("buffered"))
                                    }
                                    "buffered" != b && setTimeout(function() {
                                        c.trigger(e, d)
                                    }, 1)
                                }
                            }
                        },
                        speed: a.noop,
                        unload: function() {
                            g && g.__unload && g.__unload(), delete a[e], a("object", d).remove(), g = 0
                        }
                    });
                a.each("pause,resume,seek,volume".split(","), function(a, b) {
                    i[b] = function(a) {
                        try {
                            c.ready && ("seek" == b && c.video.time && !c.paused && c.trigger("beforeseek"), void 0 === a ? g["__" + b]() : g["__" + b](a))
                        } catch (a) {
                            if (void 0 === g["__" + b]) return d.trigger("flashdisabled", [c]);
                            throw a
                        }
                    }
                });
                var j = a(window);
                return c.bind("ready fullscreen fullscreen-exit", function(b) {
                    var e = d.height(),
                        f = d.width();
                    if (c.conf.flashfit || /full/.test(b.type)) {
                        var g, h, i = c.isFullscreen,
                            k = i && B,
                            l = !flowplayer.support.inlineBlock,
                            m = i ? k ? screen.width : j.width() : f,
                            n = i ? k ? screen.height : j.height() : e,
                            o = 0,
                            p = 0,
                            q = l ? f : "",
                            r = l ? e : "";
                        (c.conf.flashfit || "fullscreen" === b.type) && (g = c.video.width / c.video.height, h = c.video.height / c.video.width, r = Math.max(h * m), q = Math.max(g * n), r = r > n ? q * h : r, r = Math.min(Math.round(r), n), q = q > m ? r * g : q, q = Math.min(Math.round(q), m), p = Math.max(Math.round((n + p - r) / 2), 0), o = Math.max(Math.round((m + o - q) / 2), 0)), a("object", d).css({
                            width: q,
                            height: r,
                            marginTop: p,
                            marginLeft: o
                        })
                    }
                }), i
            };
        var p, q = a("<video/>")[0],
            r = {
                ended: "finish",
                pause: "pause",
                play: "resume",
                progress: "buffer",
                timeupdate: "progress",
                volumechange: "volume",
                ratechange: "speed",
                seeked: "seek",
                loadeddata: "ready",
                error: "error",
                dataunavailable: "error"
            },
            s = function(b) {
                return p ? p.attr({
                    type: d(b.type),
                    src: b.src
                }) : p = a("<video/>", {
                    src: b.src,
                    type: d(b.type),
                    class: "fp-engine",
                    autoplay: "autoplay",
                    preload: "none",
                    "x-webkit-airplay": "allow"
                })
            };
        flowplayer.engine.html5 = function(b, d) {
            function g(f, g, h) {
                f.listeners && f.listeners.hasOwnProperty(d.data("fp-player_id")) || ((f.listeners || (f.listeners = {}))[d.data("fp-player_id")] = !0, g.bind("error", function(c) {
                    try {
                        if (c.originalEvent && a(c.originalEvent.originalTarget).is("img")) return c.preventDefault();
                        e(a(c.target).attr("type")) && b.trigger("error", {
                            code: 4
                        })
                    } catch (a) {}
                }), a.each(r, function(e, g) {
                    f.addEventListener(e, function(j) {
                        if ("progress" == g && j.srcElement && 0 === j.srcElement.readyState && setTimeout(function() {
                                b.video.duration || (g = "error", b.trigger(g, {
                                    code: 4
                                }))
                            }, 1e4), n.debug && !/progress/.test(g) && console.log(e, "->", g, j), (b.ready || /ready|error/.test(g)) && g && a("video", d).length) {
                            var k, m = a.Event(g);
                            switch (g) {
                                case "ready":
                                    k = a.extend(h, {
                                        duration: f.duration,
                                        width: f.videoWidth,
                                        height: f.videoHeight,
                                        url: f.currentSrc,
                                        src: f.currentSrc
                                    });
                                    try {
                                        k.seekable = f.seekable && f.seekable.end(null)
                                    } catch (a) {}
                                    if (i = i || setInterval(function() {
                                            try {
                                                k.buffer = f.buffered.end(null)
                                            } catch (a) {}
                                            k.buffer && (c(k.buffer, 1e3) < c(k.duration, 1e3) && !k.buffered ? b.trigger("buffer", j) : k.buffered || (k.buffered = !0, b.trigger("buffer", j).trigger("buffered", j), clearInterval(i), i = 0))
                                        }, 250), !n.live && !k.duration && !l.hlsDuration && "loadeddata" === e) {
                                        var o = function() {
                                            k.duration = f.duration;
                                            try {
                                                k.seekable = f.seekable && f.seekable.end(null)
                                            } catch (a) {}
                                            b.trigger(m, k), f.removeEventListener("durationchange", o)
                                        };
                                        return void f.addEventListener("durationchange", o)
                                    }
                                    break;
                                case "progress":
                                case "seek":
                                    if (b.video.duration, f.currentTime > 0) {
                                        k = Math.max(f.currentTime, 0);
                                        break
                                    }
                                    if ("progress" == g) return;
                                case "speed":
                                    k = c(f.playbackRate);
                                    break;
                                case "volume":
                                    k = c(f.volume);
                                    break;
                                case "error":
                                    try {
                                        k = (j.srcElement || j.originalTarget).error
                                    } catch (a) {
                                        return
                                    }
                            }
                            b.trigger(m, k)
                        }
                    }, !1)
                }))
            }
            var i, j, k = a("video", d),
                l = flowplayer.support,
                m = a("track", k),
                n = b.conf;
            return {
                pick: function(a) {
                    if (l.video) {
                        if (n.videoTypePreference) {
                            var b = f(a, n.videoTypePreference);
                            if (b) return b
                        }
                        for (var c = 0; c < a.length; c++)
                            if (e(a[c].type)) return a[c]
                    }
                },
                load: function(c) {
                    if (n.splash && !j) k = s(c).prependTo(d), l.inlineVideo || k.css({
                        position: "absolute",
                        top: "-9999em"
                    }), m.length && k.append(m.attr("default", "")), n.loop && k.attr("loop", "loop"), j = k[0];
                    else {
                        j = k[0];
                        var e = k.find("source");
                        !j.src && e.length && (j.src = c.src, e.remove()), b.video.src && c.src != b.video.src ? (k.attr("autoplay", "autoplay"), j.src = c.src) : "none" != n.preload && l.dataload || (l.zeropreload ? b.trigger("ready", c).trigger("pause").one("ready", function() {
                            d.trigger("resume", [b])
                        }) : b.one("ready", function() {
                            d.trigger("pause", [b])
                        }))
                    }
                    g(j, a("source", k).add(k), c), "none" == n.preload && l.zeropreload && l.dataload || j.load(), n.splash && j.load()
                },
                pause: function() {
                    j.pause()
                },
                resume: function() {
                    j.play()
                },
                speed: function(a) {
                    j.playbackRate = a
                },
                seek: function(a) {
                    try {
                        var c = b.paused;
                        j.currentTime = a, c && j.pause()
                    } catch (a) {}
                },
                volume: function(a) {
                    j.volume = a
                },
                unload: function() {
                    a("video.fp-engine", d).remove(), l.cachedVideoTag || (p = null), i = clearInterval(i), j = 0
                }
            }
        };
        var t = /\.(\w{3,4})(\?.*)?$/i;
        a.throttle = function(a, b) {
            var c;
            return function() {
                c || (a.apply(this, arguments), c = 1, setTimeout(function() {
                    c = 0
                }, b))
            }
        }, a.fn.slider2 = function(b) {
            var c = /iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);
            return this.each(function() {
                var d, e, f, g, h, i, j, k, l = a(this),
                    m = a(document),
                    n = l.children(":last"),
                    o = !1,
                    p = function() {
                        e = l.offset(), f = l.width(), g = l.height(), i = h ? g : f, k = t(j)
                    },
                    q = function(a) {
                        d || a == u.value || j && !(j > a) || (l.trigger("slide", [a]), u.value = a)
                    },
                    r = function(a) {
                        var c = a.pageX;
                        !c && a.originalEvent && a.originalEvent.touches && a.originalEvent.touches.length && (c = a.originalEvent.touches[0].pageX);
                        var d = h ? a.pageY - e.top : c - e.left;
                        d = Math.max(0, Math.min(k || i, d));
                        var f = d / i;
                        return h && (f = 1 - f), b && (f = 1 - f), s(f, 0, !0)
                    },
                    s = function(a, b) {
                        void 0 === b && (b = 0), a > 1 && (a = 1);
                        var d = Math.round(1e3 * a) / 10 + "%";
                        return (!j || j >= a) && (c || n.stop(), o ? n.css("width", d) : n.animate(h ? {
                            height: d
                        } : {
                            width: d
                        }, b, "linear")), a
                    },
                    t = function(a) {
                        return Math.max(0, Math.min(i, h ? (1 - a) * g : a * f))
                    },
                    u = {
                        max: function(a) {
                            j = a
                        },
                        disable: function(a) {
                            d = a
                        },
                        slide: function(a, b, c) {
                            p(), c && q(a), s(a, b)
                        },
                        disableAnimation: function(a) {
                            o = !1 !== a
                        }
                    };
                p(), l.data("api", u).bind("mousedown.sld touchstart", function(b) {
                    if (b.preventDefault(), !d) {
                        var c = a.throttle(q, 100);
                        p(), u.dragging = !0, l.addClass("is-dragging"), q(r(b)), m.bind("mousemove.sld touchmove", function(a) {
                            a.preventDefault(), c(r(a))
                        }).one("mouseup touchend", function() {
                            u.dragging = !1, l.removeClass("is-dragging"), m.unbind("mousemove.sld touchmove")
                        })
                    }
                })
            })
        }, flowplayer(function(b, c) {
            function d(b) {
                return a(".fp-" + b, c)
            }

            function e(b) {
                ("0px" === c.css("width") || "0px" === c.css("height") || b !== flowplayer.defaults.ratio) && (parseInt(s, 10) || p.css("paddingTop", 100 * b + "%")), i.inlineBlock || a("object", c).height(c.height())
            }

            function f(a) {
                c.toggleClass("is-mouseover", a).toggleClass("is-mouseout", !a)
            }
            var g, h = b.conf,
                i = flowplayer.support;
            c.find(".fp-ratio,.fp-ui").remove(), c.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/></div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            </div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"/>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"/>            <em class="duration">00:00</em>         </div>         <div class="message"><h2/><p/></div>      </div>'.replace(/class="/g, 'class="fp-'));
            var k = d("progress"),
                l = d("buffer"),
                m = d("elapsed"),
                n = d("remaining"),
                o = d("waiting"),
                p = d("ratio"),
                q = d("speed"),
                r = d("duration"),
                s = p.css("paddingTop"),
                t = d("timeline").slider2(b.rtl),
                u = t.data("api"),
                v = (d("volume"), d("fullscreen")),
                w = d("volumeslider").slider2(b.rtl),
                x = w.data("api"),
                y = c.is(".fixed-controls, .no-toggle");
            u.disableAnimation(c.hasClass("is-touch")), i.animation || o.html("<p>loading &hellip;</p>"), e(h.ratio);
            try {
                h.fullscreen || v.remove()
            } catch (a) {
                v.remove()
            }
            b.bind("ready", function() {
                var a = b.video.duration;
                u.disable(b.disabled || !a), h.adaptiveRatio && e(b.video.height / b.video.width), r.add(n).html(j(a)), a >= 3600 && c.addClass("is-long") || c.removeClass("is-long"), x.slide(b.volumeLevel)
            }).bind("unload", function() {
                s || p.css("paddingTop", "")
            }).bind("buffer", function() {
                var a = b.video,
                    c = a.buffer / a.duration;
                !a.seekable && i.seekable && u.max(c), 1 > c ? l.css("width", 100 * c + "%") : l.css({
                    width: "100%"
                })
            }).bind("speed", function(a, b, c) {
                q.text(c + "x").addClass("fp-hilite"), setTimeout(function() {
                    q.removeClass("fp-hilite")
                }, 1e3)
            }).bind("buffered", function() {
                l.css({
                    width: "100%"
                }), u.max(1)
            }).bind("progress", function() {
                var a = b.video.time,
                    c = b.video.duration;
                u.dragging || u.slide(a / c, b.seeking ? 0 : 250), m.html(j(a)), n.html("-" + j(c - a))
            }).bind("finish resume seek", function(a) {
                c.toggleClass("is-finished", "finish" == a.type)
            }).bind("stop", function() {
                m.html(j(0)), u.slide(0, 100)
            }).bind("finish", function() {
                m.html(j(b.video.duration)), u.slide(1, 100), c.removeClass("is-seeking")
            }).bind("beforeseek", function() {
                k.stop()
            }).bind("volume", function() {
                x.slide(b.volumeLevel)
            }).bind("disable", function() {
                var a = b.disabled;
                u.disable(a), x.disable(a), c.toggleClass("is-disabled", b.disabled)
            }).bind("mute", function(a, b, d) {
                c.toggleClass("is-muted", d)
            }).bind("error", function(b, d, e) {
                if (c.removeClass("is-loading").addClass("is-error"), e) {
                    e.message = h.errors[e.code], d.error = !0;
                    var f = a(".fp-message", c);
                    a("h2", f).text((d.engine || "html5") + ": " + e.message), a("p", f).text(e.url || d.video.url || d.video.src || h.errorUrls[e.code]), c.unbind("mouseenter click").removeClass("is-mouseover")
                }
            }).bind("mouseenter mouseleave", function(a) {
                if (!y) {
                    var b, d = "mouseenter" == a.type;
                    f(d), d ? (c.bind("pause.x mousemove.x volume.x", function() {
                        f(!0), b = new Date
                    }), g = setInterval(function() {
                        new Date - b > 5e3 && (f(!1), b = new Date)
                    }, 100)) : (c.unbind(".x"), clearInterval(g))
                }
            }).bind("mouseleave", function() {
                (u.dragging || x.dragging) && c.addClass("is-mouseover").removeClass("is-mouseout")
            }).bind("click.player", function(c) {
                return a(c.target).is(".fp-ui, .fp-engine") || c.flash ? (c.preventDefault(), b.toggle()) : void 0
            }).bind("contextmenu", function(b) {
                b.preventDefault();
                var d = c.offset(),
                    e = a(window),
                    f = b.clientX - d.left,
                    g = b.clientY - d.top + e.scrollTop(),
                    h = c.find(".fp-context-menu").css({
                        left: f + "px",
                        top: g + "px",
                        display: "block"
                    }).on("click", function(a) {
                        a.stopPropagation()
                    });
                a("html").on("click.outsidemenu", function() {
                    h.hide(), a("html").off("click.outsidemenu")
                })
            }).bind("flashdisabled", function() {
                c.addClass("is-flash-disabled").one("ready", function() {
                    c.removeClass("is-flash-disabled").find(".fp-flash-disabled").remove()
                }).append('<div class="fp-flash-disabled">Adobe Flash is disabled for this page, click player area to enable.</div>')
            }), h.poster && c.css("backgroundImage", "url(" + h.poster + ")");
            var z = c.css("backgroundColor"),
                A = "none" != c.css("backgroundImage") || z && "rgba(0, 0, 0, 0)" != z && "transparent" != z;
            !A || h.splash || h.autoplay || b.bind("ready stop", function() {
                c.addClass("is-poster").one("progress", function() {
                    c.removeClass("is-poster")
                })
            }), !A && b.forcedSplash && c.css("backgroundColor", "#555"), a(".fp-toggle, .fp-play", c).click(b.toggle), a.each(["mute", "fullscreen", "unload"], function(a, c) {
                d(c).click(function() {
                    b[c]()
                })
            }), t.bind("slide", function(a, c) {
                b.seeking = !0, b.seek(c * b.video.duration)
            }), w.bind("slide", function(a, c) {
                b.volume(c)
            }), d("time").click(function() {
                a(this).toggleClass("is-inverted")
            }), f(y)
        });
        var u, v, w = "is-help";
        a(document).bind("keydown.fp", function(b) {
            var c = u,
                d = b.ctrlKey || b.metaKey || b.altKey,
                e = b.which,
                f = c && c.conf;
            if (c && f.keyboard && !c.disabled) {
                if (-1 != a.inArray(e, [63, 187, 191])) return v.toggleClass(w), !1;
                if (27 == e && v.hasClass(w)) return v.toggleClass(w), !1;
                if (!d && c.ready) {
                    if (b.preventDefault(), b.shiftKey) return void(39 == e ? c.speed(!0) : 37 == e && c.speed(!1));
                    if (58 > e && e > 47) return c.seekTo(e - 48);
                    switch (e) {
                        case 38:
                        case 75:
                            c.volume(c.volumeLevel + .15);
                            break;
                        case 40:
                        case 74:
                            c.volume(c.volumeLevel - .15);
                            break;
                        case 39:
                        case 76:
                            c.seeking = !0, c.seek(!0);
                            break;
                        case 37:
                        case 72:
                            c.seeking = !0, c.seek(!1);
                            break;
                        case 190:
                            c.seekTo();
                            break;
                        case 32:
                            c.toggle();
                            break;
                        case 70:
                            f.fullscreen && c.fullscreen();
                            break;
                        case 77:
                            c.mute();
                            break;
                        case 81:
                            c.unload()
                    }
                }
            }
        }), flowplayer(function(b, c) {
            b.conf.keyboard && (c.bind("mouseenter mouseleave", function(a) {
                (u = b.disabled || "mouseenter" != a.type ? 0 : b) && (v = c)
            }), c.append('      <div class="fp-help">         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>         </div>      </div>   '), b.conf.tooltip && a(".fp-ui", c).attr("title", "Hit ? for help").on("mouseout.tip", function() {
                a(this).removeAttr("title").off("mouseout.tip")
            }), a(".fp-close", c).click(function() {
                c.toggleClass(w)
            }))
        });
        var x, y = a.browser.mozilla ? "moz" : "webkit",
            z = "fullscreen",
            A = "fullscreen-exit",
            B = flowplayer.support.fullscreen,
            C = "function" == typeof document.exitFullscreen,
            D = navigator.userAgent.toLowerCase(),
            E = /(safari)[ \/]([\w.]+)/.exec(D) && !/(chrome)[ \/]([\w.]+)/.exec(D);
        a(document).bind(C ? "fullscreenchange" : y + "fullscreenchange", function(b) {
            var c = a(document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || b.target);
            c.length && !x ? x = c.trigger(z, [c]) : (x.trigger(A, [x]), x = null)
        }), flowplayer(function(b, c) {
            if (b.conf.fullscreen) {
                var d, e = a(window),
                    f = {
                        index: 0,
                        pos: 0,
                        play: !1
                    };
                b.isFullscreen = !1, b.fullscreen = function(g) {
                    return b.disabled ? void 0 : (void 0 === g && (g = !b.isFullscreen), g && (d = e.scrollTop()), "webkit" != y && !E || "flash" != b.engine || (f.index = b.video.index, b.conf.rtmp && a.extend(f, {
                        pos: b.video.time,
                        play: b.playing
                    })), B ? g ? C ? c[0].requestFullscreen() : (c[0][y + "RequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT), !E || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || c[0][y + "RequestFullScreen"]()) : C ? document.exitFullscreen() : document[y + "CancelFullScreen"]() : b.trigger(g ? z : A, [b]), b)
                };
                var g;
                c.bind("mousedown.fs", function() {
                    +new Date - g < 150 && b.ready && b.fullscreen(), g = +new Date
                }), b.bind(z, function() {
                    c.addClass("is-fullscreen"), b.isFullscreen = !0
                }).bind(A, function() {
                    var a;
                    B || "html5" !== b.engine || (a = c.css("opacity") || "", c.css("opacity", 0)), c.removeClass("is-fullscreen"), B || "html5" !== b.engine || setTimeout(function() {
                        c.css("opacity", a)
                    }), b.isFullscreen = !1, e.scrollTop(d)
                }).bind("ready", function() {
                    if (f.index > 0) b.play(f.index), f.index = 0;
                    else if (f.pos && !isNaN(f.pos)) {
                        var c = function() {
                            f.play || b.pause(), a.extend(f, {
                                pos: 0,
                                play: !1
                            })
                        };
                        b.conf.live ? (b.resume(), c()) : b.resume().seek(f.pos, c)
                    }
                })
            }
        }), flowplayer(function(b, c) {
            function d() {
                return a(f.query, c)
            }

            function e() {
                return a(f.query + "." + g, c)
            }
            var f = a.extend({
                    active: "is-active",
                    advance: !0,
                    query: ".fp-playlist a"
                }, b.conf),
                g = f.active;
            b.play = function(c) {
                return void 0 === c ? b.resume() : "number" != typeof c || b.conf.playlist[c] ? ("number" != typeof c && b.load.apply(null, arguments), b.unbind("resume.fromfirst"), b.video.index = c, b.load("string" == typeof b.conf.playlist[c] ? b.conf.playlist[c].toString() : a.map(b.conf.playlist[c], function(b) {
                    return a.extend({}, b)
                })), b) : b
            }, b.next = function(a) {
                a && a.preventDefault();
                var c = b.video.index;
                return -1 != c && (c = c === b.conf.playlist.length - 1 ? 0 : c + 1, b.play(c)), b
            }, b.prev = function(a) {
                a && a.preventDefault();
                var c = b.video.index;
                return -1 != c && (c = 0 === c ? b.conf.playlist.length - 1 : c - 1, b.play(c)), b
            }, a(".fp-next", c).click(b.next), a(".fp-prev", c).click(b.prev), f.advance && c.unbind("finish.pl").bind("finish.pl", function(a, b) {
                var d = b.video.index + 1;
                d < b.conf.playlist.length || f.loop ? (d = d === b.conf.playlist.length ? 0 : d, c.removeClass("is-finished"), setTimeout(function() {
                    b.play(d)
                })) : (c.addClass("is-playing"), b.conf.playlist.length > 1 && b.one("resume.fromfirst", function() {
                    return b.play(0), !1
                }))
            });
            var h = !1;
            if (b.conf.playlist.length) {
                h = !0;
                var i = c.find(".fp-playlist");
                if (!i.length) {
                    i = a('<div class="fp-playlist"></div>');
                    var j = a(".fp-next,.fp-prev", c);
                    j.length ? j.eq(0).before(i) : a("video", c).after(i)
                }
                i.empty(), a.each(b.conf.playlist, function(b, c) {
                    var d;
                    if ("string" == typeof c) d = c;
                    else
                        for (var e in c[0])
                            if (c[0].hasOwnProperty(e)) {
                                d = c[0][e];
                                break
                            }
                    i.append(a("<a />").attr({
                        href: d,
                        "data-index": b
                    }))
                })
            }
            if (d().length) {
                h || (b.conf.playlist = [], d().each(function() {
                    var c = a(this).attr("href");
                    a(this).attr("data-index", b.conf.playlist.length), b.conf.playlist.push(c)
                })), c.on("click", f.query, function(c) {
                    c.preventDefault();
                    var d = a(c.target).closest(f.query),
                        e = Number(d.attr("data-index")); - 1 != e && b.play(e)
                });
                var k = d().filter("[data-cuepoints]").length;
                b.bind("load", function(d, f, h) {
                    var i = e().removeClass(g),
                        j = i.attr("data-index"),
                        l = h.index = b.video.index || 0,
                        m = a('a[data-index="' + l + '"]', c).addClass(g),
                        n = l == b.conf.playlist.length - 1;
                    c.removeClass("video" + j).addClass("video" + l).toggleClass("last-video", n), h.index = f.video.index = l, h.is_last = f.video.is_last = n, k && (b.cuepoints = m.data("cuepoints"))
                }).bind("unload.pl", function() {
                    e().toggleClass(g)
                })
            }
            b.conf.playlist.length && (b.conf.loop = !1)
        });
        var F = / ?cue\d+ ?/;
        flowplayer(function(b, c) {
            function d(a) {
                c[0].className = c[0].className.replace(F, " "), a >= 0 && c.addClass("cue" + a)
            }
            var e = 0;
            b.cuepoints = b.conf.cuepoints || [], b.bind("progress", function(a, f, g) {
                if (e && .015 > g - e) return e = g;
                e = g;
                for (var h, i = b.cuepoints || [], j = 0; j < i.length; j++) h = i[j], isNaN(h) || (h = {
                    time: h
                }), h.time < 0 && (h.time = b.video.duration + h.time), h.index = j, Math.abs(h.time - g) < .125 * b.currentSpeed && (d(j), c.trigger("cuepoint", [b, h]))
            }).bind("unload seek", d), b.conf.generate_cuepoints && b.bind("load", function() {
                a(".fp-cuepoint", c).remove()
            }).bind("ready", function() {
                var d = b.cuepoints || [],
                    e = b.video.duration,
                    f = a(".fp-timeline", c).css("overflow", "visible");
                a.each(d, function(c, d) {
                    var g = d.time || d;
                    0 > g && (g = e + d), a("<a/>").addClass("fp-cuepoint fp-cuepoint" + c).css("left", g / e * 100 + "%").appendTo(f).mousedown(function() {
                        return b.seek(g), !1
                    })
                })
            })
        }), flowplayer(function(b, c) {
            function d(a) {
                var b = a.split(":");
                return 2 == b.length && b.unshift(0), 60 * b[0] * 60 + 60 * b[1] + parseFloat(b[2].replace(",", "."))
            }
            var e = a("track", c),
                f = b.conf;
            if (!flowplayer.support.subtitles || (b.subtitles = e.length && e[0].track, !f.nativesubtitles || "html5" != f.engine)) {
                e.remove();
                var g = /^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;
                b.subtitles = [];
                var h = e.attr("src");
                if (h) {
                    setTimeout(function() {
                        a.get(h, function(c) {
                            for (var e, f, h, i, j = 0, k = c.split("\n"), l = k.length, m = {}; l > j; j++)
                                if (f = g.exec(k[j])) {
                                    for (e = k[j - 1], h = "<p>" + k[++j] + "</p><br/>"; a.trim(k[++j]) && j < k.length;) h += "<p>" + k[j] + "</p><br/>";
                                    m = {
                                        title: e,
                                        startTime: d(f[1]),
                                        endTime: d(f[2] || f[3]),
                                        text: h
                                    }, i = {
                                        time: m.startTime,
                                        subtitle: m
                                    }, b.subtitles.push(m), b.cuepoints.push(i), b.cuepoints.push({
                                        time: m.endTime,
                                        subtitleEnd: e
                                    }), 0 === m.startTime && b.trigger("cuepoint", i)
                                }
                        }).fail(function() {
                            return b.trigger("error", {
                                code: 8,
                                url: h
                            }), !1
                        })
                    });
                    var i, j = a("<div class='fp-subtitle'/>").appendTo(c);
                    b.bind("cuepoint", function(a, b, c) {
                        c.subtitle ? (i = c.index, j.html(c.subtitle.text).addClass("fp-active")) : c.subtitleEnd && (j.removeClass("fp-active"), i = c.index)
                    }).bind("seek", function(c, d, e) {
                        i && b.cuepoints[i] && b.cuepoints[i].time > e && (j.removeClass("fp-active"), i = null), a.each(b.cuepoints || [], function(a, c) {
                            var d = c.subtitle;
                            d && i != c.index ? e >= c.time && (!d.endTime || e <= d.endTime) && b.trigger("cuepoint", c) : c.subtitleEnd && e >= c.time && c.index == i + 1 && b.trigger("cuepoint", c)
                        })
                    })
                }
            }
        }), flowplayer(function(b, c) {
            function d() {
                if (f && "undefined" != typeof _gat) {
                    var a = _gat._getTracker(e),
                        d = b.video;
                    a._setAllowLinker(!0), a._trackEvent("Video / Seconds played", b.engine + "/" + d.type, c.attr("title") || d.src.split("/").slice(-1)[0].replace(t, ""), Math.round(f / 1e3)), f = 0
                }
            }
            var e = b.conf.analytics,
                f = 0,
                g = 0;
            e && ("undefined" == typeof _gat && a.getScript("//google-analytics.com/ga.js"), b.bind("load unload", d).bind("progress", function() {
                b.seeking || (f += g ? +new Date - g : 0, g = +new Date)
            }).bind("pause", function() {
                g = 0
            }), a(window).unload(d))
        });
        var G = /IEMobile/.test(m);
        (flowplayer.support.touch || G) && flowplayer(function(b, c) {
            var d = /Android/.test(m) && !/Firefox/.test(m) && !/Opera/.test(m),
                e = /Silk/.test(m),
                f = d ? parseFloat(/Android\ (\d\.\d)/.exec(m)[1], 10) : 0;
            if (d && (b.conf.videoTypePreference = "mp4", !/Chrome/.test(m) && 4 > f)) {
                var g = b.load;
                b.load = function() {
                    var a = g.apply(b, arguments);
                    return b.trigger("ready", [b, b.video]), a
                }
            }
            flowplayer.support.volume || c.addClass("no-volume no-mute"), c.addClass("is-touch"), c.find(".fp-timeline").data("api").disableAnimation();
            var h = !1;
            c.bind("touchmove", function() {
                h = !0
            }).bind("touchend click", function() {
                return h ? void(h = !1) : b.playing && !c.hasClass("is-mouseover") ? (c.addClass("is-mouseover").removeClass("is-mouseout"), !1) : (b.paused && c.hasClass("is-mouseout") && !b.splash && b.toggle(), void(b.paused && G && a("video.fp-engine", c)[0].play()))
            }), b.conf.native_fullscreen && "function" == typeof a("<video />")[0].webkitEnterFullScreen && (b.fullscreen = function() {
                var b = a("video.fp-engine", c);
                b[0].webkitEnterFullScreen(), b.one("webkitendfullscreen", function() {
                    b.prop("controls", !0).prop("controls", !1)
                })
            }), (d || e) && b.bind("ready", function() {
                var d = a("video.fp-engine", c);
                d.one("canplay", function() {
                    d[0].play()
                }), d[0].play(), b.bind("progress.dur", function() {
                    var e = d[0].duration;
                    1 !== e && (b.video.duration = e, a(".fp-duration", c).html(j(e)), b.unbind("progress.dur"))
                })
            })
        }), flowplayer(function(b, c) {
            if (!1 !== b.conf.embed) {
                var d = b.conf,
                    e = a(".fp-ui", c),
                    f = a("<a/>", {
                        class: "fp-embed",
                        title: "Copy to your site"
                    }).appendTo(e),
                    g = a("<div/>", {
                        class: "fp-embed-code"
                    }).append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(e),
                    h = a("textarea", g);
                b.embedCode = function() {
                    var e = b.video,
                        f = e.width || c.width(),
                        g = e.height || c.height(),
                        h = a("<div/>", {
                            class: "flowplayer",
                            css: {
                                width: f,
                                height: g
                            }
                        }),
                        i = a("<video/>").appendTo(h);
                    a.each(["origin", "analytics", "key", "rtmp"], function(a, b) {
                        d[b] && h.attr("data-" + b, d[b])
                    }), d.logo && h.attr("data-logo", a("<img />").attr("src", d.logo)[0].src), a.each(e.sources, function(b, c) {
                        var e = c.src;
                        (!/^https?:/.test(c.src) && "flash" !== c.type || !d.rtmp) && (e = a("<img/>").attr("src", c.src)[0].src), i.append(a("<source/>", {
                            type: "video/" + c.type,
                            src: e
                        }))
                    });
                    var j = {
                        src: "//embed.flowplayer.org/5.4.6/embed.min.js"
                    };
                    a.isPlainObject(d.embed) && (j["data-swf"] = d.embed.swf, j["data-library"] = d.embed.library, j.src = d.embed.script || j.src, d.embed.skin && (j["data-skin"] = d.embed.skin));
                    var k = a("<foo/>", j).append(h);
                    return a("<p/>").append(k).html().replace(/<(\/?)foo/g, "<$1script")
                }, c.fptip(".fp-embed", "is-embedding"), h.click(function() {
                    this.select()
                }), f.click(function() {
                    h.text(b.embedCode()), h[0].focus(), h[0].select()
                })
            }
        }), a.fn.fptip = function(b, c) {
            return this.each(function() {
                function d() {
                    e.removeClass(c), a(document).unbind(".st")
                }
                var e = a(this);
                a(b || "a", this).click(function(b) {
                    b.preventDefault(), e.toggleClass(c), e.hasClass(c) && a(document).bind("keydown.st", function(a) {
                        27 == a.which && d()
                    }).bind("click.st", function(b) {
                        a(b.target).parents("." + c).length || d()
                    })
                })
            })
        }
    }(jQuery), flowplayer(function(a, b) {
        function c(a) {
            var b = f("<a/>")[0];
            return b.href = a, b.hostname
        }

        function d(a) {
            var b = "ab.ca,ac.ac,ac.at,ac.be,ac.cn,ac.il,ac.in,ac.jp,ac.kr,ac.th,ac.uk,adm.br,adv.br,ah.cn,am.br,arq.br,art.br,arts.ro,asn.au,asso.fr,asso.mc,bc.ca,bio.br,biz.pl,biz.tr,bj.cn,br.com,cn.com,cng.br,cnt.br,co.ac,co.at,co.gl,co.id,co.il,co.in,co.jp,co.kr,com.ag,com.ai,com.ar,com.au,com.br,com.cn,com.cy,com.de,com.do,com.ec,com.es,com.fj,com.fr,co.mg,com.gl,com.gt,com.hk,com.hr,com.hu,com.kg,com.ki,com.lc,com.mg,com.mm,com.ms,com.mt,com.mu,com.mx,com.my,com.nf,com.ng,com.ni,com.pa,com.ph,com.pl,com.pt,com.qa,com.ro,com.ru,co.ms,com.sb,com.sc,com.sg,com.sv,com.tr,com.tw,com.ua,com.uy,com.ve,com.vn,co.nz,co.th,co.uk,co.ve,co.vi,co.za,cq.cn,de.com,de.org,ecn.br,edu.au,edu.cn,edu.hk,edu.mm,edu.my,edu.pt,edu.qa,edu.tr,eng.br,ernet.in,esp.br,etc.br,eti.br,eu.com,eu.int,eu.lv,firm.in,firm.ro,fm.br,fot.br,fst.br,g12.br,gb.com,gb.net,gd.cn,gen.in,go.jp,go.kr,go.th,gov.au,gov.az,gov.br,gov.cn,gov.il,gov.in,gov.mm,gov.my,gov.qa,gov.sg,gov.tr,gov.tw,gs.cn,gv.ac,gv.at,gx.cn,gz.cn,he.cn,hi.cn,hk.cn,hl.cn,hu.com,id.au,idv.tw,ind.br,ind.in,inf.br,info.pl,info.ro,info.tr,info.ve,in.ua,iwi.nz,jl.cn,jor.br,js.cn,k12.il,k12.tr,kr.com,lel.br,ln.cn,ltd.uk,maori.nz,mb.ca,med.br,me.uk,mil.br,mi.th,mo.cn,muni.il,nb.ca,ne.jp,ne.kr,net.ag,net.ai,net.au,net.br,net.cn,net.do,net.gl,net.hk,net.il,net.in,net.kg,net.ki,net.lc,net.mg,net.mm,net.mu,net.ni,net.nz,net.pl,net.ru,net.sb,net.sc,net.sg,net.th,net.tr,net.tw,net.uk,net.ve,nf.ca,nm.cn,nm.kr,no.com,nom.br,nom.ni,nom.ro,ns.ca,nt.ca,ntr.br,nt.ro,nx.cn,odo.br,off.ai,on.ca,or.ac,or.at,org.ag,org.ai,org.au,org.br,org.cn,org.do,org.es,org.gl,org.hk,org.in,org.kg,org.ki,org.lc,org.mg,org.mm,org.ms,org.nf,org.ni,org.nz,org.pl,org.ro,org.ru,org.sb,org.sc,org.sg,org.tr,org.tw,org.uk,org.ve,or.jp,or.kr,or.th,pe.ca,plc.uk,ppg.br,presse.fr,pro.br,psc.br,psi.br,qc.ca,qc.com,qh.cn,rec.br,rec.ro,res.in,sa.com,sc.cn,sch.ul,se.com,se.net,sh.cn,sk.ca,slg.br,sn.cn,store.ro,tj.cn,tm.fr,tm.mc,tmp.br,tm.ro,tur.br,tv.br,tv.tr,tw.cn,uk.com,uk.net,us.com,uy.com,vet.br,waw.pl,web.ve,www.ro,xj.cn,xz.cn,yk.ca,yn.cn,zj.cn,zlg.br".split(",");
            a = a.toLowerCase();
            var c = a.split("."),
                d = c.length;
            if (2 > d) return a;
            var e = c.slice(-2).join(".");
            return d >= 3 && f.inArray(e, b) >= 0 ? c.slice(-3).join(".") : e
        }

        function e(a, b) {
            "localhost" == b || parseInt(b.split(".").slice(-1)) || (b = d(b));
            for (var c = 0, e = b.length - 1; e >= 0; e--) c += 2983723987 * b.charCodeAt(e);
            for (c = ("" + c).substring(0, 7), e = 0; e < a.length; e++)
                if (c === a[e].substring(1, 8)) return 1
        }
        var f = jQuery,
            g = a.conf,
            h = g.swf.indexOf("flowplayer.org") && g.e && b.data("origin"),
            i = h ? c(h) : location.hostname,
            j = g.key;
        if ("file:" == location.protocol && (i = "localhost"), a.load.ed = 1, g.hostname = i, g.origin = h || location.href, h && b.addClass("is-embedded"), "string" == typeof j && (j = j.split(/,\s*/)), j && "function" == typeof e && e(j, i)) g.logo && b.append(f("<a>", {
            class: "fp-logo",
            href: h
        }).append(f("<img/>", {
            src: g.logo
        })));
        else {
            var k = f("<a/>").attr("href", "http://flowplayer.org").appendTo(b);
            f(".fp-controls", b);
            var l = f('<div class="fp-context-menu"><ul><li class="copyright">&copy; 2013</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul></div>').appendTo(b);
            a.bind("pause resume finish unload", function(a, c) {
                var d = -1;
                c.video.src && f.each([
                    ["org", "flowplayer", "drive"],
                    ["org", "flowplayer", "my"]
                ], function(a, b) {
                    return -1 === (d = c.video.src.indexOf("://" + b.reverse().join(".")))
                }), /pause|resume/.test(a.type) && "flash" != c.engine && 4 != d && 5 != d ? (k.show().css({
                    position: "absolute",
                    left: 16,
                    bottom: 36,
                    zIndex: 99999,
                    width: 100,
                    height: 20,
                    backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")"
                }), c.load.ed = k.is(":visible") && f.contains(b[0], l[0]), c.load.ed || c.pause()) : k.hide()
            })
        }
    }),
    function() {
        var a = this,
            b = a._,
            c = {},
            d = Array.prototype,
            e = Object.prototype,
            f = Function.prototype,
            g = d.push,
            h = d.slice,
            i = d.concat,
            j = e.toString,
            k = e.hasOwnProperty,
            l = d.forEach,
            m = d.map,
            n = d.reduce,
            o = d.reduceRight,
            p = d.filter,
            q = d.every,
            r = d.some,
            s = d.indexOf,
            t = d.lastIndexOf,
            u = Array.isArray,
            v = Object.keys,
            w = f.bind,
            x = function(a) {
                return a instanceof x ? a : this instanceof x ? void(this._wrapped = a) : new x(a)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.5.1";
        var y = x.each = x.forEach = function(a, b, d) {
            if (null != a)
                if (l && a.forEach === l) a.forEach(b, d);
                else if (a.length === +a.length) {
                for (var e = 0, f = a.length; f > e; e++)
                    if (b.call(d, a[e], e, a) === c) return
            } else
                for (var g in a)
                    if (x.has(a, g) && b.call(d, a[g], g, a) === c) return
        };
        x.map = x.collect = function(a, b, c) {
            var d = [];
            return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
                d.push(b.call(c, a, e, f))
            }), d)
        };
        var z = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(a, b, c, d) {
            var e = arguments.length > 2;
            if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
            if (y(a, function(a, f, g) {
                    e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
                }), !e) throw new TypeError(z);
            return c
        }, x.reduceRight = x.foldr = function(a, b, c, d) {
            var e = arguments.length > 2;
            if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
            var f = a.length;
            if (f !== +f) {
                var g = x.keys(a);
                f = g.length
            }
            if (y(a, function(h, i, j) {
                    i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
                }), !e) throw new TypeError(z);
            return c
        }, x.find = x.detect = function(a, b, c) {
            var d;
            return A(a, function(a, e, f) {
                return b.call(c, a, e, f) ? (d = a, !0) : void 0
            }), d
        }, x.filter = x.select = function(a, b, c) {
            var d = [];
            return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
                b.call(c, a, e, f) && d.push(a)
            }), d)
        }, x.reject = function(a, b, c) {
            return x.filter(a, function(a, d, e) {
                return !b.call(c, a, d, e)
            }, c)
        }, x.every = x.all = function(a, b, d) {
            b || (b = x.identity);
            var e = !0;
            return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
                return (e = e && b.call(d, a, f, g)) ? void 0 : c
            }), !!e)
        };
        var A = x.some = x.any = function(a, b, d) {
            b || (b = x.identity);
            var e = !1;
            return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
                return e || (e = b.call(d, a, f, g)) ? c : void 0
            }), !!e)
        };
        x.contains = x.include = function(a, b) {
            return null != a && (s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
                return a === b
            }))
        }, x.invoke = function(a, b) {
            var c = h.call(arguments, 2),
                d = x.isFunction(b);
            return x.map(a, function(a) {
                return (d ? b : a[b]).apply(a, c)
            })
        }, x.pluck = function(a, b) {
            return x.map(a, function(a) {
                return a[b]
            })
        }, x.where = function(a, b, c) {
            return x.isEmpty(b) ? c ? void 0 : [] : x[c ? "find" : "filter"](a, function(a) {
                for (var c in b)
                    if (b[c] !== a[c]) return !1;
                return !0
            })
        }, x.findWhere = function(a, b) {
            return x.where(a, b, !0)
        }, x.max = function(a, b, c) {
            if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
            if (!b && x.isEmpty(a)) return -1 / 0;
            var d = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return y(a, function(a, e, f) {
                var g = b ? b.call(c, a, e, f) : a;
                g > d.computed && (d = {
                    value: a,
                    computed: g
                })
            }), d.value
        }, x.min = function(a, b, c) {
            if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
            if (!b && x.isEmpty(a)) return 1 / 0;
            var d = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return y(a, function(a, e, f) {
                var g = b ? b.call(c, a, e, f) : a;
                g < d.computed && (d = {
                    value: a,
                    computed: g
                })
            }), d.value
        }, x.shuffle = function(a) {
            var b, c = 0,
                d = [];
            return y(a, function(a) {
                b = x.random(c++), d[c - 1] = d[b], d[b] = a
            }), d
        };
        var B = function(a) {
            return x.isFunction(a) ? a : function(b) {
                return b[a]
            }
        };
        x.sortBy = function(a, b, c) {
            var d = B(b);
            return x.pluck(x.map(a, function(a, b, e) {
                return {
                    value: a,
                    index: b,
                    criteria: d.call(c, a, b, e)
                }
            }).sort(function(a, b) {
                var c = a.criteria,
                    d = b.criteria;
                if (c !== d) {
                    if (c > d || void 0 === c) return 1;
                    if (d > c || void 0 === d) return -1
                }
                return a.index < b.index ? -1 : 1
            }), "value")
        };
        var C = function(a, b, c, d) {
            var e = {},
                f = B(null == b ? x.identity : b);
            return y(a, function(b, g) {
                var h = f.call(c, b, g, a);
                d(e, h, b)
            }), e
        };
        x.groupBy = function(a, b, c) {
            return C(a, b, c, function(a, b, c) {
                (x.has(a, b) ? a[b] : a[b] = []).push(c)
            })
        }, x.countBy = function(a, b, c) {
            return C(a, b, c, function(a, b) {
                x.has(a, b) || (a[b] = 0), a[b]++
            })
        }, x.sortedIndex = function(a, b, c, d) {
            c = null == c ? x.identity : B(c);
            for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
                var h = f + g >>> 1;
                c.call(d, a[h]) < e ? f = h + 1 : g = h
            }
            return f
        }, x.toArray = function(a) {
            return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
        }, x.size = function(a) {
            return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
        }, x.first = x.head = x.take = function(a, b, c) {
            return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
        }, x.initial = function(a, b, c) {
            return h.call(a, 0, a.length - (null == b || c ? 1 : b))
        }, x.last = function(a, b, c) {
            return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
        }, x.rest = x.tail = x.drop = function(a, b, c) {
            return h.call(a, null == b || c ? 1 : b)
        }, x.compact = function(a) {
            return x.filter(a, x.identity)
        };
        var D = function(a, b, c) {
            return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function(a) {
                x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
            }), c)
        };
        x.flatten = function(a, b) {
            return D(a, b, [])
        }, x.without = function(a) {
            return x.difference(a, h.call(arguments, 1))
        }, x.uniq = x.unique = function(a, b, c, d) {
            x.isFunction(b) && (d = c, c = b, b = !1);
            var e = c ? x.map(a, c, d) : a,
                f = [],
                g = [];
            return y(e, function(c, d) {
                (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
            }), f
        }, x.union = function() {
            return x.uniq(x.flatten(arguments, !0))
        }, x.intersection = function(a) {
            var b = h.call(arguments, 1);
            return x.filter(x.uniq(a), function(a) {
                return x.every(b, function(b) {
                    return x.indexOf(b, a) >= 0
                })
            })
        }, x.difference = function(a) {
            var b = i.apply(d, h.call(arguments, 1));
            return x.filter(a, function(a) {
                return !x.contains(b, a)
            })
        }, x.zip = function() {
            for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++) b[c] = x.pluck(arguments, "" + c);
            return b
        }, x.object = function(a, b) {
            if (null == a) return {};
            for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
            return c
        }, x.indexOf = function(a, b, c) {
            if (null == a) return -1;
            var d = 0,
                e = a.length;
            if (c) {
                if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
                d = 0 > c ? Math.max(0, e + c) : c
            }
            if (s && a.indexOf === s) return a.indexOf(b, c);
            for (; e > d; d++)
                if (a[d] === b) return d;
            return -1
        }, x.lastIndexOf = function(a, b, c) {
            if (null == a) return -1;
            var d = null != c;
            if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
            for (var e = d ? c : a.length; e--;)
                if (a[e] === b) return e;
            return -1
        }, x.range = function(a, b, c) {
            arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
            for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a, a += c;
            return f
        };
        var E = function() {};
        x.bind = function(a, b) {
            var c, d;
            if (w && a.bind === w) return w.apply(a, h.call(arguments, 1));
            if (!x.isFunction(a)) throw new TypeError;
            return c = h.call(arguments, 2), d = function() {
                if (!(this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
                E.prototype = a.prototype;
                var e = new E;
                E.prototype = null;
                var f = a.apply(e, c.concat(h.call(arguments)));
                return Object(f) === f ? f : e
            }
        }, x.partial = function(a) {
            var b = h.call(arguments, 1);
            return function() {
                return a.apply(this, b.concat(h.call(arguments)))
            }
        }, x.bindAll = function(a) {
            var b = h.call(arguments, 1);
            if (0 === b.length) throw new Error("bindAll must be passed function names");
            return y(b, function(b) {
                a[b] = x.bind(a[b], a)
            }), a
        }, x.memoize = function(a, b) {
            var c = {};
            return b || (b = x.identity),
                function() {
                    var d = b.apply(this, arguments);
                    return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
                }
        }, x.delay = function(a, b) {
            var c = h.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(null, c)
            }, b)
        }, x.defer = function(a) {
            return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
        }, x.throttle = function(a, b, c) {
            var d, e, f, g = null,
                h = 0;
            c || (c = {});
            var i = function() {
                h = !1 === c.leading ? 0 : new Date, g = null, f = a.apply(d, e)
            };
            return function() {
                var j = new Date;
                h || !1 !== c.leading || (h = j);
                var k = b - (j - h);
                return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e)) : g || !1 === c.trailing || (g = setTimeout(i, k)), f
            }
        }, x.debounce = function(a, b, c) {
            var d, e = null;
            return function() {
                var f = this,
                    g = arguments,
                    h = function() {
                        e = null, c || (d = a.apply(f, g))
                    },
                    i = c && !e;
                return clearTimeout(e), e = setTimeout(h, b), i && (d = a.apply(f, g)), d
            }
        }, x.once = function(a) {
            var b, c = !1;
            return function() {
                return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
            }
        }, x.wrap = function(a, b) {
            return function() {
                var c = [a];
                return g.apply(c, arguments), b.apply(this, c)
            }
        }, x.compose = function() {
            var a = arguments;
            return function() {
                for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
                return b[0]
            }
        }, x.after = function(a, b) {
            return function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }, x.keys = v || function(a) {
            if (a !== Object(a)) throw new TypeError("Invalid object");
            var b = [];
            for (var c in a) x.has(a, c) && b.push(c);
            return b
        }, x.values = function(a) {
            var b = [];
            for (var c in a) x.has(a, c) && b.push(a[c]);
            return b
        }, x.pairs = function(a) {
            var b = [];
            for (var c in a) x.has(a, c) && b.push([c, a[c]]);
            return b
        }, x.invert = function(a) {
            var b = {};
            for (var c in a) x.has(a, c) && (b[a[c]] = c);
            return b
        }, x.functions = x.methods = function(a) {
            var b = [];
            for (var c in a) x.isFunction(a[c]) && b.push(c);
            return b.sort()
        }, x.extend = function(a) {
            return y(h.call(arguments, 1), function(b) {
                if (b)
                    for (var c in b) a[c] = b[c]
            }), a
        }, x.pick = function(a) {
            var b = {},
                c = i.apply(d, h.call(arguments, 1));
            return y(c, function(c) {
                c in a && (b[c] = a[c])
            }), b
        }, x.omit = function(a) {
            var b = {},
                c = i.apply(d, h.call(arguments, 1));
            for (var e in a) x.contains(c, e) || (b[e] = a[e]);
            return b
        }, x.defaults = function(a) {
            return y(h.call(arguments, 1), function(b) {
                if (b)
                    for (var c in b) void 0 === a[c] && (a[c] = b[c])
            }), a
        }, x.clone = function(a) {
            return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
        }, x.tap = function(a, b) {
            return b(a), a
        };
        var F = function(a, b, c, d) {
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            if (null == a || null == b) return a === b;
            a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
            var e = j.call(a);
            if (e != j.call(b)) return !1;
            switch (e) {
                case "[object String]":
                    return a == String(b);
                case "[object Number]":
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a == +b;
                case "[object RegExp]":
                    return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
            }
            if ("object" != typeof a || "object" != typeof b) return !1;
            for (var f = c.length; f--;)
                if (c[f] == a) return d[f] == b;
            var g = a.constructor,
                h = b.constructor;
            if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h)) return !1;
            c.push(a), d.push(b);
            var i = 0,
                k = !0;
            if ("[object Array]" == e) {
                if (i = a.length, k = i == b.length)
                    for (; i-- && (k = F(a[i], b[i], c, d)););
            } else {
                for (var l in a)
                    if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d)))) break;
                if (k) {
                    for (l in b)
                        if (x.has(b, l) && !i--) break;
                    k = !i
                }
            }
            return c.pop(), d.pop(), k
        };
        x.isEqual = function(a, b) {
            return F(a, b, [], [])
        }, x.isEmpty = function(a) {
            if (null == a) return !0;
            if (x.isArray(a) || x.isString(a)) return 0 === a.length;
            for (var b in a)
                if (x.has(a, b)) return !1;
            return !0
        }, x.isElement = function(a) {
            return !(!a || 1 !== a.nodeType)
        }, x.isArray = u || function(a) {
            return "[object Array]" == j.call(a)
        }, x.isObject = function(a) {
            return a === Object(a)
        }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
            x["is" + a] = function(b) {
                return j.call(b) == "[object " + a + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(a) {
            return !(!a || !x.has(a, "callee"))
        }), "function" != typeof /./ && (x.isFunction = function(a) {
            return "function" == typeof a
        }), x.isFinite = function(a) {
            return isFinite(a) && !isNaN(parseFloat(a))
        }, x.isNaN = function(a) {
            return x.isNumber(a) && a != +a
        }, x.isBoolean = function(a) {
            return !0 === a || !1 === a || "[object Boolean]" == j.call(a)
        }, x.isNull = function(a) {
            return null === a
        }, x.isUndefined = function(a) {
            return void 0 === a
        }, x.has = function(a, b) {
            return k.call(a, b)
        }, x.noConflict = function() {
            return a._ = b, this
        }, x.identity = function(a) {
            return a
        }, x.times = function(a, b, c) {
            for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
            return d
        }, x.random = function(a, b) {
            return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
        };
        var G = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        G.unescape = x.invert(G.escape);
        var H = {
            escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(a) {
            x[a] = function(b) {
                return null == b ? "" : ("" + b).replace(H[a], function(b) {
                    return G[a][b]
                })
            }
        }), x.result = function(a, b) {
            if (null != a) {
                var c = a[b];
                return x.isFunction(c) ? c.call(a) : c
            }
        }, x.mixin = function(a) {
            y(x.functions(a), function(b) {
                var c = x[b] = a[b];
                x.prototype[b] = function() {
                    var a = [this._wrapped];
                    return g.apply(a, arguments), M.call(this, c.apply(x, a))
                }
            })
        };
        var I = 0;
        x.uniqueId = function(a) {
            var b = ++I + "";
            return a ? a + b : b
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var J = /(.)^/,
            K = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "   ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(a, b, c) {
            var d;
            c = x.defaults({}, c, x.templateSettings);
            var e = new RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$", "g"),
                f = 0,
                g = "__p+='";
            a.replace(e, function(b, c, d, e, h) {
                return g += a.slice(f, h).replace(L, function(a) {
                    return "\\" + K[a]
                }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b
            }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
            try {
                d = new Function(c.variable || "obj", "_", g)
            } catch (a) {
                throw a.source = g, a
            }
            if (b) return d(b, x);
            var h = function(a) {
                return d.call(this, a, x)
            };
            return h.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", h
        }, x.chain = function(a) {
            return x(a).chain()
        };
        var M = function(a) {
            return this._chain ? x(a).chain() : a
        };
        x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
            var b = d[a];
            x.prototype[a] = function() {
                var c = this._wrapped;
                return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], M.call(this, c)
            }
        }), y(["concat", "join", "slice"], function(a) {
            var b = d[a];
            x.prototype[a] = function() {
                return M.call(this, b.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this),
    function(a) {
        var b = {},
            c = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {}
            };
        a.fn.bxSlider = function(d) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                a(this).bxSlider(d)
            }), this;
            var e = {},
                f = this;
            b.el = this;
            var g = a(window).width(),
                h = a(window).height(),
                j = function() {
                    e.settings = a.extend({}, c, d), e.settings.slideWidth = parseInt(e.settings.slideWidth), e.children = f.children(e.settings.slideSelector), e.children.length < e.settings.minSlides && (e.settings.minSlides = e.children.length), e.children.length < e.settings.maxSlides && (e.settings.maxSlides = e.children.length), e.settings.randomStart && (e.settings.startSlide = Math.floor(Math.random() * e.children.length)), e.active = {
                        index: e.settings.startSlide
                    }, e.carousel = e.settings.minSlides > 1 || e.settings.maxSlides > 1, e.carousel && (e.settings.preloadImages = "all"), e.minThreshold = e.settings.minSlides * e.settings.slideWidth + (e.settings.minSlides - 1) * e.settings.slideMargin, e.maxThreshold = e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin, e.working = !1, e.controls = {}, e.interval = null, e.animProp = "vertical" == e.settings.mode ? "top" : "left", e.usingCSS = e.settings.useCSS && "fade" != e.settings.mode && function() {
                        var a = document.createElement("div"),
                            b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var c in b)
                            if (void 0 !== a.style[b[c]]) return e.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), e.animProp = "-" + e.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == e.settings.mode && (e.settings.maxSlides = e.settings.minSlides), f.data("origStyle", f.attr("style")), f.children(e.settings.slideSelector).each(function() {
                        a(this).data("origStyle", a(this).attr("style"))
                    }), k()
                },
                k = function() {
                    f.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), e.viewport = f.parent(), e.loader = a('<div class="bx-loading" />'), e.viewport.prepend(e.loader), f.css({
                        width: "horizontal" == e.settings.mode ? 100 * e.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), e.usingCSS && e.settings.easing ? f.css("-" + e.cssPrefix + "-transition-timing-function", e.settings.easing) : e.settings.easing || (e.settings.easing = "swing"), q(), e.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), e.viewport.parent().css({
                        maxWidth: o()
                    }), e.settings.pager || e.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), e.children.css({
                        float: "horizontal" == e.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), e.children.css("width", p()), "horizontal" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginRight", e.settings.slideMargin), "vertical" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginBottom", e.settings.slideMargin), "fade" == e.settings.mode && (e.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), e.children.eq(e.settings.startSlide).css({
                        zIndex: 50,
                        display: "block"
                    })), e.controls.el = a('<div class="bx-controls" />'), e.settings.captions && z(), e.active.last = e.settings.startSlide == r() - 1, e.settings.video && f.fitVids();
                    var b = e.children.eq(e.settings.startSlide);
                    "all" == e.settings.preloadImages && (b = e.children), e.settings.ticker ? e.settings.pager = !1 : (e.settings.pager && w(), e.settings.controls && x(), e.settings.auto && e.settings.autoControls && y(), (e.settings.controls || e.settings.autoControls || e.settings.pager) && e.viewport.after(e.controls.el)), l(b, m)
                },
                l = function(b, c) {
                    var d = b.find("img, iframe").length;
                    if (0 == d) return void c();
                    var e = 0;
                    b.find("img, iframe").each(function() {
                        a(this).is("img") && a(this).attr("src", a(this).attr("src") + "?timestamp=1"), a(this).load(function() {
                            setTimeout(function() {
                                ++e == d && c()
                            }, 0)
                        })
                    })
                },
                m = function() {
                    if (e.settings.infiniteLoop && "fade" != e.settings.mode && !e.settings.ticker) {
                        var b = "vertical" == e.settings.mode ? e.settings.minSlides : e.settings.maxSlides,
                            c = e.children.slice(0, b).clone().addClass("bx-clone"),
                            d = e.children.slice(-b).clone().addClass("bx-clone");
                        f.append(c).prepend(d)
                    }
                    e.loader.remove(), t(), "vertical" == e.settings.mode && (e.settings.adaptiveHeight = !0), e.viewport.height(n()), f.redrawSlider(), e.settings.onSliderLoad(e.active.index), e.initialized = !0, e.settings.responsive && a(window).bind("resize", Q), e.settings.auto && e.settings.autoStart && J(), e.settings.ticker && K(), e.settings.pager && F(e.settings.startSlide), e.settings.controls && I(), e.settings.touchEnabled && !e.settings.ticker && M()
                },
                n = function() {
                    var b = 0,
                        c = a();
                    if ("vertical" == e.settings.mode || e.settings.adaptiveHeight)
                        if (e.carousel) {
                            var d = 1 == e.settings.moveSlides ? e.active.index : e.active.index * s();
                            for (c = e.children.eq(d), i = 1; i <= e.settings.maxSlides - 1; i++) c = c.add(e.children.eq(d + i >= e.children.length ? i - 1 : d + i))
                        } else c = e.children.eq(e.active.index);
                    else c = e.children;
                    return "vertical" == e.settings.mode ? (c.each(function() {
                        b += a(this).outerHeight()
                    }), e.settings.slideMargin > 0 && (b += e.settings.slideMargin * (e.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function() {
                        return a(this).outerHeight(!1)
                    }).get()), b
                },
                o = function() {
                    var a = "100%";
                    return e.settings.slideWidth > 0 && (a = "horizontal" == e.settings.mode ? e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin : e.settings.slideWidth), a
                },
                p = function() {
                    var a = e.settings.slideWidth,
                        b = e.viewport.width();
                    return 0 == e.settings.slideWidth || e.settings.slideWidth > b && !e.carousel || "vertical" == e.settings.mode ? a = b : e.settings.maxSlides > 1 && "horizontal" == e.settings.mode && (b > e.maxThreshold || b < e.minThreshold && (a = (b - e.settings.slideMargin * (e.settings.minSlides - 1)) / e.settings.minSlides)), a
                },
                q = function() {
                    var a = 1;
                    if ("horizontal" == e.settings.mode && e.settings.slideWidth > 0)
                        if (e.viewport.width() < e.minThreshold) a = e.settings.minSlides;
                        else if (e.viewport.width() > e.maxThreshold) a = e.settings.maxSlides;
                    else {
                        var b = e.children.first().width();
                        a = Math.floor(e.viewport.width() / b)
                    } else "vertical" == e.settings.mode && (a = e.settings.minSlides);
                    return a
                },
                r = function() {
                    var a = 0;
                    if (e.settings.moveSlides > 0)
                        if (e.settings.infiniteLoop) a = e.children.length / s();
                        else
                            for (var b = 0, c = 0; b < e.children.length;) ++a, b = c + q(), c += e.settings.moveSlides <= q() ? e.settings.moveSlides : q();
                    else a = Math.ceil(e.children.length / q());
                    return a
                },
                s = function() {
                    return e.settings.moveSlides > 0 && e.settings.moveSlides <= q() ? e.settings.moveSlides : q()
                },
                t = function() {
                    if (e.children.length > e.settings.maxSlides && e.active.last && !e.settings.infiniteLoop) {
                        if ("horizontal" == e.settings.mode) {
                            var a = e.children.last(),
                                b = a.position();
                            u(-(b.left - (e.viewport.width() - a.width())), "reset", 0)
                        } else if ("vertical" == e.settings.mode) {
                            var c = e.children.length - e.settings.minSlides,
                                b = e.children.eq(c).position();
                            u(-b.top, "reset", 0)
                        }
                    } else {
                        var b = e.children.eq(e.active.index * s()).position();
                        e.active.index == r() - 1 && (e.active.last = !0), void 0 != b && ("horizontal" == e.settings.mode ? u(-b.left, "reset", 0) : "vertical" == e.settings.mode && u(-b.top, "reset", 0))
                    }
                },
                u = function(a, b, c, d) {
                    if (e.usingCSS) {
                        var g = "vertical" == e.settings.mode ? "translate3d(0, " + a + "px, 0)" : "translate3d(" + a + "px, 0, 0)";
                        f.css("-" + e.cssPrefix + "-transition-duration", c / 1e3 + "s"), "slide" == b ? (f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), G()
                        })) : "reset" == b ? f.css(e.animProp, g) : "ticker" == b && (f.css("-" + e.cssPrefix + "-transition-timing-function", "linear"), f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), u(d.resetValue, "reset", 0), L()
                        }))
                    } else {
                        var h = {};
                        h[e.animProp] = a, "slide" == b ? f.animate(h, c, e.settings.easing, function() {
                            G()
                        }) : "reset" == b ? f.css(e.animProp, a) : "ticker" == b && f.animate(h, speed, "linear", function() {
                            u(d.resetValue, "reset", 0), L()
                        })
                    }
                },
                v = function() {
                    for (var b = "", c = r(), d = 0; c > d; d++) {
                        var f = "";
                        e.settings.buildPager && a.isFunction(e.settings.buildPager) ? (f = e.settings.buildPager(d), e.pagerEl.addClass("bx-custom-pager")) : (f = d + 1, e.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + d + '" class="bx-pager-link">' + f + "</a></div>"
                    }
                    e.pagerEl.html(b)
                },
                w = function() {
                    e.settings.pagerCustom ? e.pagerEl = a(e.settings.pagerCustom) : (e.pagerEl = a('<div class="bx-pager" />'), e.settings.pagerSelector ? a(e.settings.pagerSelector).html(e.pagerEl) : e.controls.el.addClass("bx-has-pager").append(e.pagerEl), v()), e.pagerEl.delegate("a", "click", E)
                },
                x = function() {
                    e.controls.next = a('<a class="bx-next" href="">' + e.settings.nextText + "</a>"), e.controls.prev = a('<a class="bx-prev" href="">' + e.settings.prevText + "</a>"), e.controls.next.bind("click", A), e.controls.prev.bind("click", B), e.settings.nextSelector && a(e.settings.nextSelector).append(e.controls.next), e.settings.prevSelector && a(e.settings.prevSelector).append(e.controls.prev), e.settings.nextSelector || e.settings.prevSelector || (e.controls.directionEl = a('<div class="bx-controls-direction" />'), e.controls.directionEl.append(e.controls.prev).append(e.controls.next), e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl))
                },
                y = function() {
                    e.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + e.settings.startText + "</a></div>"), e.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + e.settings.stopText + "</a></div>"), e.controls.autoEl = a('<div class="bx-controls-auto" />'), e.controls.autoEl.delegate(".bx-start", "click", C), e.controls.autoEl.delegate(".bx-stop", "click", D), e.settings.autoControlsCombine ? e.controls.autoEl.append(e.controls.start) : e.controls.autoEl.append(e.controls.start).append(e.controls.stop), e.settings.autoControlsSelector ? a(e.settings.autoControlsSelector).html(e.controls.autoEl) : e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl), H(e.settings.autoStart ? "stop" : "start")
                },
                z = function() {
                    e.children.each(function() {
                        var b = a(this).find("img:first").attr("title");
                        void 0 != b && ("" + b).length && a(this).append('<div class="bx-caption"><span>' + b + "</span></div>")
                    })
                },
                A = function(a) {
                    e.settings.auto && f.stopAuto(), f.goToNextSlide(), a.preventDefault()
                },
                B = function(a) {
                    e.settings.auto && f.stopAuto(), f.goToPrevSlide(), a.preventDefault()
                },
                C = function(a) {
                    f.startAuto(), a.preventDefault()
                },
                D = function(a) {
                    f.stopAuto(), a.preventDefault()
                },
                E = function(b) {
                    e.settings.auto && f.stopAuto();
                    var c = a(b.currentTarget),
                        d = parseInt(c.attr("data-slide-index"));
                    d != e.active.index && f.goToSlide(d), b.preventDefault()
                },
                F = function(b) {
                    var c = e.children.length;
                    return "short" == e.settings.pagerType ? (e.settings.maxSlides > 1 && (c = Math.ceil(e.children.length / e.settings.maxSlides)), void e.pagerEl.html(b + 1 + e.settings.pagerShortSeparator + c)) : (e.pagerEl.find("a").removeClass("active"), void e.pagerEl.each(function(c, d) {
                        a(d).find("a").eq(b).addClass("active")
                    }))
                },
                G = function() {
                    if (e.settings.infiniteLoop) {
                        var a = "";
                        0 == e.active.index ? a = e.children.eq(0).position() : e.active.index == r() - 1 && e.carousel ? a = e.children.eq((r() - 1) * s()).position() : e.active.index == e.children.length - 1 && (a = e.children.eq(e.children.length - 1).position()), "horizontal" == e.settings.mode ? u(-a.left, "reset", 0) : "vertical" == e.settings.mode && u(-a.top, "reset", 0)
                    }
                    e.working = !1, e.settings.onSlideAfter(e.children.eq(e.active.index), e.oldIndex, e.active.index)
                },
                H = function(a) {
                    e.settings.autoControlsCombine ? e.controls.autoEl.html(e.controls[a]) : (e.controls.autoEl.find("a").removeClass("active"), e.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"))
                },
                I = function() {
                    1 == r() ? (e.controls.prev.addClass("disabled"), e.controls.next.addClass("disabled")) : !e.settings.infiniteLoop && e.settings.hideControlOnEnd && (0 == e.active.index ? (e.controls.prev.addClass("disabled"), e.controls.next.removeClass("disabled")) : e.active.index == r() - 1 ? (e.controls.next.addClass("disabled"), e.controls.prev.removeClass("disabled")) : (e.controls.prev.removeClass("disabled"), e.controls.next.removeClass("disabled")))
                },
                J = function() {
                    e.settings.autoDelay > 0 ? setTimeout(f.startAuto, e.settings.autoDelay) : f.startAuto(), e.settings.autoHover && f.hover(function() {
                        e.interval && (f.stopAuto(!0), e.autoPaused = !0)
                    }, function() {
                        e.autoPaused && (f.startAuto(!0), e.autoPaused = null)
                    })
                },
                K = function() {
                    var b = 0;
                    if ("next" == e.settings.autoDirection) f.append(e.children.clone().addClass("bx-clone"));
                    else {
                        f.prepend(e.children.clone().addClass("bx-clone"));
                        var c = e.children.first().position();
                        b = "horizontal" == e.settings.mode ? -c.left : -c.top
                    }
                    u(b, "reset", 0), e.settings.pager = !1, e.settings.controls = !1, e.settings.autoControls = !1, e.settings.tickerHover && !e.usingCSS && e.viewport.hover(function() {
                        f.stop()
                    }, function() {
                        var b = 0;
                        e.children.each(function() {
                            b += "horizontal" == e.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                        });
                        var c = e.settings.speed / b,
                            d = "horizontal" == e.settings.mode ? "left" : "top",
                            g = c * (b - Math.abs(parseInt(f.css(d))));
                        L(g)
                    }), L()
                },
                L = function(a) {
                    speed = a || e.settings.speed;
                    var b = {
                            left: 0,
                            top: 0
                        },
                        c = {
                            left: 0,
                            top: 0
                        };
                    "next" == e.settings.autoDirection ? b = f.find(".bx-clone").first().position() : c = e.children.first().position();
                    var d = "horizontal" == e.settings.mode ? -b.left : -b.top,
                        g = "horizontal" == e.settings.mode ? -c.left : -c.top,
                        h = {
                            resetValue: g
                        };
                    u(d, "ticker", speed, h)
                },
                M = function() {
                    e.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, e.viewport.bind("touchstart", N)
                },
                N = function(a) {
                    if (e.working) a.preventDefault();
                    else {
                        e.touch.originalPos = f.position();
                        var b = a.originalEvent;
                        e.touch.start.x = b.changedTouches[0].pageX, e.touch.start.y = b.changedTouches[0].pageY, e.viewport.bind("touchmove", O), e.viewport.bind("touchend", P)
                    }
                },
                O = function(a) {
                    var b = a.originalEvent,
                        c = Math.abs(b.changedTouches[0].pageX - e.touch.start.x),
                        d = Math.abs(b.changedTouches[0].pageY - e.touch.start.y);
                    if (3 * c > d && e.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * d > c && e.settings.preventDefaultSwipeY && a.preventDefault(), "fade" != e.settings.mode && e.settings.oneToOneTouch) {
                        var f = 0;
                        if ("horizontal" == e.settings.mode) {
                            var g = b.changedTouches[0].pageX - e.touch.start.x;
                            f = e.touch.originalPos.left + g
                        } else {
                            var g = b.changedTouches[0].pageY - e.touch.start.y;
                            f = e.touch.originalPos.top + g
                        }
                        u(f, "reset", 0)
                    }
                },
                P = function(a) {
                    e.viewport.unbind("touchmove", O);
                    var b = a.originalEvent,
                        c = 0;
                    if (e.touch.end.x = b.changedTouches[0].pageX, e.touch.end.y = b.changedTouches[0].pageY, "fade" == e.settings.mode) {
                        var d = Math.abs(e.touch.start.x - e.touch.end.x);
                        d >= e.settings.swipeThreshold && (e.touch.start.x > e.touch.end.x ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto())
                    } else {
                        var d = 0;
                        "horizontal" == e.settings.mode ? (d = e.touch.end.x - e.touch.start.x, c = e.touch.originalPos.left) : (d = e.touch.end.y - e.touch.start.y, c = e.touch.originalPos.top), !e.settings.infiniteLoop && (0 == e.active.index && d > 0 || e.active.last && 0 > d) ? u(c, "reset", 200) : Math.abs(d) >= e.settings.swipeThreshold ? (0 > d ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto()) : u(c, "reset", 200)
                    }
                    e.viewport.unbind("touchend", P)
                },
                Q = function() {
                    var b = a(window).width(),
                        c = a(window).height();
                    (g != b || h != c) && (g = b, h = c, f.redrawSlider())
                };
            return f.goToSlide = function(b, c) {
                if (!e.working && e.active.index != b)
                    if (e.working = !0, e.oldIndex = e.active.index, e.active.index = 0 > b ? r() - 1 : b >= r() ? 0 : b, e.settings.onSlideBefore(e.children.eq(e.active.index), e.oldIndex, e.active.index), "next" == c ? e.settings.onSlideNext(e.children.eq(e.active.index), e.oldIndex, e.active.index) : "prev" == c && e.settings.onSlidePrev(e.children.eq(e.active.index), e.oldIndex, e.active.index), e.active.last = e.active.index >= r() - 1, e.settings.pager && F(e.active.index), e.settings.controls && I(), "fade" == e.settings.mode) e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({
                        height: n()
                    }, e.settings.adaptiveHeightSpeed), e.children.filter(":visible").fadeOut(e.settings.speed).css({
                        zIndex: 0
                    }), e.children.eq(e.active.index).css("zIndex", 51).fadeIn(e.settings.speed, function() {
                        a(this).css("zIndex", 50), G()
                    });
                    else {
                        e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({
                            height: n()
                        }, e.settings.adaptiveHeightSpeed);
                        var d = 0,
                            g = {
                                left: 0,
                                top: 0
                            };
                        if (!e.settings.infiniteLoop && e.carousel && e.active.last)
                            if ("horizontal" == e.settings.mode) {
                                var h = e.children.eq(e.children.length - 1);
                                g = h.position(), d = e.viewport.width() - h.outerWidth()
                            } else {
                                var i = e.children.length - e.settings.minSlides;
                                g = e.children.eq(i).position()
                            }
                        else if (e.carousel && e.active.last && "prev" == c) {
                            var j = 1 == e.settings.moveSlides ? e.settings.maxSlides - s() : (r() - 1) * s() - (e.children.length - e.settings.maxSlides),
                                h = f.children(".bx-clone").eq(j);
                            g = h.position()
                        } else if ("next" == c && 0 == e.active.index) g = f.find("> .bx-clone").eq(e.settings.maxSlides).position(), e.active.last = !1;
                        else if (b >= 0) {
                            var k = b * s();
                            g = e.children.eq(k).position()
                        }
                        if (void 0 !== g) {
                            var l = "horizontal" == e.settings.mode ? -(g.left - d) : -g.top;
                            u(l, "slide", e.settings.speed)
                        }
                    }
            }, f.goToNextSlide = function() {
                if (e.settings.infiniteLoop || !e.active.last) {
                    var a = parseInt(e.active.index) + 1;
                    f.goToSlide(a, "next")
                }
            }, f.goToPrevSlide = function() {
                if (e.settings.infiniteLoop || 0 != e.active.index) {
                    var a = parseInt(e.active.index) - 1;
                    f.goToSlide(a, "prev")
                }
            }, f.startAuto = function(a) {
                e.interval || (e.interval = setInterval(function() {
                    "next" == e.settings.autoDirection ? f.goToNextSlide() : f.goToPrevSlide()
                }, e.settings.pause), e.settings.autoControls && 1 != a && H("stop"))
            }, f.stopAuto = function(a) {
                e.interval && (clearInterval(e.interval), e.interval = null, e.settings.autoControls && 1 != a && H("start"))
            }, f.getCurrentSlide = function() {
                return e.active.index
            }, f.getSlideCount = function() {
                return e.children.length
            }, f.redrawSlider = function() {
                e.children.add(f.find(".bx-clone")).outerWidth(p()), e.viewport.css("height", n()), e.settings.ticker || t(), e.active.last && (e.active.index = r() - 1), e.active.index >= r() && (e.active.last = !0), e.settings.pager && !e.settings.pagerCustom && (v(), F(e.active.index))
            }, f.destroySlider = function() {
                e.initialized && (e.initialized = !1, a(".bx-clone", this).remove(), e.children.each(function() {
                    void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
                }), void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), e.controls.el && e.controls.el.remove(), e.controls.next && e.controls.next.remove(), e.controls.prev && e.controls.prev.remove(), e.pagerEl && e.pagerEl.remove(), a(".bx-caption", this).remove(), e.controls.autoEl && e.controls.autoEl.remove(), clearInterval(e.interval), e.settings.responsive && a(window).unbind("resize", Q))
            }, f.reloadSlider = function(a) {
                void 0 != a && (d = a), f.destroySlider(), j()
            }, j(), this
        }
    }(jQuery), document.createElement("canvas").getContext || function() {
        function a() {}

        function b(a) {
            this.type_ = a, this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0, this.colors_ = []
        }

        function c(a, b, c) {
            !d(b) || (a.m_ = b, c && (a.lineScale_ = u(t(b[0][0] * b[1][1] - b[0][1] * b[1][0]))))
        }

        function d(a) {
            for (var b = 0; 3 > b; b++)
                for (var c = 0; 2 > c; c++)
                    if (!isFinite(a[b][c]) || isNaN(a[b][c])) return !1;
            return !0
        }

        function e(a, b, c, d) {
            a.currentPath_.push({
                type: "bezierCurveTo",
                cp1x: b.x,
                cp1y: b.y,
                cp2x: c.x,
                cp2y: c.y,
                x: d.x,
                y: d.y
            }), a.currentX_ = d.x, a.currentY_ = d.y
        }

        function f(a) {
            this.m_ = k(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.fillStyle = this.strokeStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = 1 * v, this.globalAlpha = 1, this.canvas = a;
            var b = a.ownerDocument.createElement("div");
            b.style.width = a.clientWidth + "px", b.style.height = a.clientHeight + "px", b.style.overflow = "hidden", b.style.position = "absolute", a.appendChild(b), this.element_ = b, this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
        }

        function g(a) {
            switch (a) {
                case "butt":
                    return "flat";
                case "round":
                    return "round";
                case "square":
                default:
                    return "square"
            }
        }

        function h(a) {
            var b, c = 1;
            if (a = String(a), "rgb" == a.substring(0, 3)) {
                var d = a.indexOf("(", 3),
                    e = a.indexOf(")", d + 1),
                    f = a.substring(d + 1, e).split(",");
                b = "#";
                for (var g = 0; 3 > g; g++) b += z[Number(f[g])];
                4 == f.length && "a" == a.substr(3, 1) && (c = f[3])
            } else b = a;
            return {
                color: b,
                alpha: c
            }
        }

        function i(a, b) {
            b.fillStyle = a.fillStyle, b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.lineWidth = a.lineWidth, b.miterLimit = a.miterLimit, b.shadowBlur = a.shadowBlur, b.shadowColor = a.shadowColor, b.shadowOffsetX = a.shadowOffsetX, b.shadowOffsetY = a.shadowOffsetY, b.strokeStyle = a.strokeStyle, b.globalAlpha = a.globalAlpha, b.arcScaleX_ = a.arcScaleX_, b.arcScaleY_ = a.arcScaleY_, b.lineScale_ = a.lineScale_
        }

        function j(a, b) {
            for (var c = k(), d = 0; 3 > d; d++)
                for (var e = 0; 3 > e; e++) {
                    for (var f = 0, g = 0; 3 > g; g++) f += a[d][g] * b[g][e];
                    c[d][e] = f
                }
            return c
        }

        function k() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ]
        }

        function l(a) {
            var b = a.srcElement;
            b.firstChild && (b.firstChild.style.width = b.clientWidth + "px", b.firstChild.style.height = b.clientHeight + "px")
        }

        function m(a) {
            var b = a.srcElement;
            switch (a.propertyName) {
                case "width":
                    b.style.width = b.attributes.width.nodeValue + "px", b.getContext().clearRect();
                    break;
                case "height":
                    b.style.height = b.attributes.height.nodeValue + "px", b.getContext().clearRect()
            }
        }

        function n(a, b) {
            var c = x.call(arguments, 2);
            return function() {
                return a.apply(b, c.concat(x.call(arguments)))
            }
        }

        function o() {
            return this.context_ || (this.context_ = new f(this))
        }
        var p = Math,
            q = p.round,
            r = p.sin,
            s = p.cos,
            t = p.abs,
            u = p.sqrt,
            v = 10,
            w = v / 2,
            x = Array.prototype.slice,
            y = {
                init: function(a) {
                    if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                        var b = a || document;
                        b.createElement("canvas"), b.attachEvent("onreadystatechange", n(this.init_, this, b))
                    }
                },
                init_: function(a) {
                    if (a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML"), a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML"), !a.styleSheets.ex_canvas_) {
                        var b = a.createStyleSheet();
                        b.owningElement.id = "ex_canvas_", b.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
                    }
                    for (var c = a.getElementsByTagName("canvas"), d = 0; d < c.length; d++) this.initElement(c[d])
                },
                initElement: function(a) {
                    if (!a.getContext) {
                        a.getContext = o, a.innerHTML = "", a.attachEvent("onpropertychange", m), a.attachEvent("onresize", l);
                        var b = a.attributes;
                        b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth, b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
                    }
                    return a
                }
            };
        y.init();
        for (var z = [], A = 0; 16 > A; A++)
            for (var B = 0; 16 > B; B++) z[16 * A + B] = A.toString(16) + B.toString(16);
        var C = f.prototype;
        C.clearRect = function() {
            this.element_.innerHTML = ""
        }, C.beginPath = function() {
            this.currentPath_ = []
        }, C.moveTo = function(a, b) {
            var c = this.getCoords_(a, b);
            this.currentPath_.push({
                type: "moveTo",
                x: c.x,
                y: c.y
            }), this.currentX_ = c.x, this.currentY_ = c.y
        }, C.lineTo = function(a, b) {
            var c = this.getCoords_(a, b);
            this.currentPath_.push({
                type: "lineTo",
                x: c.x,
                y: c.y
            }), this.currentX_ = c.x, this.currentY_ = c.y
        }, C.bezierCurveTo = function(a, b, c, d, f, g) {
            var h = this.getCoords_(f, g);
            e(this, this.getCoords_(a, b), this.getCoords_(c, d), h)
        }, C.quadraticCurveTo = function(a, b, c, d) {
            var f = this.getCoords_(a, b),
                g = this.getCoords_(c, d),
                h = {
                    x: this.currentX_ + .6666666666666666 * (f.x - this.currentX_),
                    y: this.currentY_ + .6666666666666666 * (f.y - this.currentY_)
                };
            e(this, h, {
                x: h.x + (g.x - this.currentX_) / 3,
                y: h.y + (g.y - this.currentY_) / 3
            }, g)
        }, C.arc = function(a, b, c, d, e, f) {
            c *= v;
            var g = f ? "at" : "wa",
                h = a + s(d) * c - w,
                i = b + r(d) * c - w,
                j = a + s(e) * c - w,
                k = b + r(e) * c - w;
            h == j && !f && (h += .125);
            var l = this.getCoords_(a, b),
                m = this.getCoords_(h, i),
                n = this.getCoords_(j, k);
            this.currentPath_.push({
                type: g,
                x: l.x,
                y: l.y,
                radius: c,
                xStart: m.x,
                yStart: m.y,
                xEnd: n.x,
                yEnd: n.y
            })
        }, C.rect = function(a, b, c, d) {
            this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath()
        }, C.strokeRect = function(a, b, c, d) {
            var e = this.currentPath_;
            this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath(), this.stroke(), this.currentPath_ = e
        }, C.fillRect = function(a, b, c, d) {
            var e = this.currentPath_;
            this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath(), this.fill(), this.currentPath_ = e
        }, C.createLinearGradient = function(a, c, d, e) {
            var f = new b("gradient");
            return f.x0_ = a, f.y0_ = c, f.x1_ = d, f.y1_ = e, f
        }, C.createRadialGradient = function(a, c, d, e, f, g) {
            var h = new b("gradientradial");
            return h.x0_ = a, h.y0_ = c, h.r0_ = d, h.x1_ = e, h.y1_ = f, h.r1_ = g, h
        }, C.drawImage = function(a) {
            var b, c, d, e, f, g, h, i, j = a.runtimeStyle.width,
                k = a.runtimeStyle.height;
            a.runtimeStyle.width = "auto", a.runtimeStyle.height = "auto";
            var l = a.width,
                m = a.height;
            if (a.runtimeStyle.width = j, a.runtimeStyle.height = k, 3 == arguments.length) b = arguments[1], c = arguments[2], f = g = 0, h = d = l, i = e = m;
            else if (5 == arguments.length) b = arguments[1], c = arguments[2], d = arguments[3], e = arguments[4], f = g = 0, h = l, i = m;
            else {
                if (9 != arguments.length) throw Error("Invalid number of arguments");
                f = arguments[1], g = arguments[2], h = arguments[3], i = arguments[4], b = arguments[5], c = arguments[6], d = arguments[7], e = arguments[8]
            }
            var n = this.getCoords_(b, c),
                o = [];
            if (o.push(" <g_vml_:group", ' coordsize="', 10 * v, ",", 10 * v, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;"), 1 != this.m_[0][0] || this.m_[0][1]) {
                var r = [];
                r.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", q(n.x / v), ",", "Dy=", q(n.y / v), "");
                var s = n,
                    t = this.getCoords_(b + d, c),
                    u = this.getCoords_(b, c + e),
                    w = this.getCoords_(b + d, c + e);
                s.x = p.max(s.x, t.x, u.x, w.x), s.y = p.max(s.y, t.y, u.y, w.y), o.push("padding:0 ", q(s.x / v), "px ", q(s.y / v), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", r.join(""), ", sizingmethod='clip');")
            } else o.push("top:", q(n.y / v), "px;left:", q(n.x / v), "px;");
            o.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', v * d, "px;", " height:", v * e, 'px;"', ' cropleft="', f / l, '"', ' croptop="', g / m, '"', ' cropright="', (l - f - h) / l, '"', ' cropbottom="', (m - g - i) / m, '"', " />", "</g_vml_:group>"), this.element_.insertAdjacentHTML("BeforeEnd", o.join(""))
        }, C.stroke = function(a) {
            var b = [],
                c = h(a ? this.fillStyle : this.strokeStyle),
                d = c.color,
                e = c.alpha * this.globalAlpha;
            b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0 0" coordsize="', 10 * v, " ", 10 * v, '"', ' stroked="', !a, '"', ' path="');
            for (var f = {
                    x: null,
                    y: null
                }, i = {
                    x: null,
                    y: null
                }, j = 0; j < this.currentPath_.length; j++) {
                var k = this.currentPath_[j];
                switch (k.type) {
                    case "moveTo":
                        b.push(" m ", q(k.x), ",", q(k.y));
                        break;
                    case "lineTo":
                        b.push(" l ", q(k.x), ",", q(k.y));
                        break;
                    case "close":
                        b.push(" x "), k = null;
                        break;
                    case "bezierCurveTo":
                        b.push(" c ", q(k.cp1x), ",", q(k.cp1y), ",", q(k.cp2x), ",", q(k.cp2y), ",", q(k.x), ",", q(k.y));
                        break;
                    case "at":
                    case "wa":
                        b.push(" ", k.type, " ", q(k.x - this.arcScaleX_ * k.radius), ",", q(k.y - this.arcScaleY_ * k.radius), " ", q(k.x + this.arcScaleX_ * k.radius), ",", q(k.y + this.arcScaleY_ * k.radius), " ", q(k.xStart), ",", q(k.yStart), " ", q(k.xEnd), ",", q(k.yEnd))
                }
                k && ((null == f.x || k.x < f.x) && (f.x = k.x), (null == i.x || k.x > i.x) && (i.x = k.x), (null == f.y || k.y < f.y) && (f.y = k.y), (null == i.y || k.y > i.y) && (i.y = k.y))
            }
            if (b.push(' ">'), a)
                if ("object" == typeof this.fillStyle) {
                    var l = this.fillStyle,
                        m = 0,
                        n = {
                            x: 0,
                            y: 0
                        },
                        o = 0,
                        r = 1;
                    if ("gradient" == l.type_) {
                        var s = l.x1_ / this.arcScaleX_,
                            t = l.y1_ / this.arcScaleY_,
                            u = this.getCoords_(l.x0_ / this.arcScaleX_, l.y0_ / this.arcScaleY_),
                            w = this.getCoords_(s, t);
                        m = 180 * Math.atan2(w.x - u.x, w.y - u.y) / Math.PI, 0 > m && (m += 360), 1e-6 > m && (m = 0)
                    } else {
                        var u = this.getCoords_(l.x0_, l.y0_),
                            x = i.x - f.x,
                            y = i.y - f.y;
                        n = {
                            x: (u.x - f.x) / x,
                            y: (u.y - f.y) / y
                        }, x /= this.arcScaleX_ * v, y /= this.arcScaleY_ * v;
                        var z = p.max(x, y);
                        o = 2 * l.r0_ / z, r = 2 * l.r1_ / z - o
                    }
                    var A = l.colors_;
                    A.sort(function(a, b) {
                        return a.offset - b.offset
                    });
                    for (var B = A.length, C = A[0].color, D = A[B - 1].color, E = A[0].alpha * this.globalAlpha, F = A[B - 1].alpha * this.globalAlpha, G = [], j = 0; B > j; j++) {
                        var H = A[j];
                        G.push(H.offset * r + o + " " + H.color)
                    }
                    b.push('<g_vml_:fill type="', l.type_, '"', ' method="none" focus="100%"', ' color="', C, '"', ' color2="', D, '"', ' colors="', G.join(","), '"', ' opacity="', F, '"', ' g_o_:opacity2="', E, '"', ' angle="', m, '"', ' focusposition="', n.x, ",", n.y, '" />')
                } else b.push('<g_vml_:fill color="', d, '" opacity="', e, '" />');
            else {
                var I = this.lineScale_ * this.lineWidth;
                1 > I && (e *= I), b.push("<g_vml_:stroke", ' opacity="', e, '"', ' joinstyle="', this.lineJoin, '"', ' miterlimit="', this.miterLimit, '"', ' endcap="', g(this.lineCap), '"', ' weight="', I, 'px"', ' color="', d, '" />')
            }
            b.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
        }, C.fill = function() {
            this.stroke(!0)
        }, C.closePath = function() {
            this.currentPath_.push({
                type: "close"
            })
        }, C.getCoords_ = function(a, b) {
            var c = this.m_;
            return {
                x: v * (a * c[0][0] + b * c[1][0] + c[2][0]) - w,
                y: v * (a * c[0][1] + b * c[1][1] + c[2][1]) - w
            }
        }, C.save = function() {
            var a = {};
            i(this, a), this.aStack_.push(a), this.mStack_.push(this.m_), this.m_ = j(k(), this.m_)
        }, C.restore = function() {
            i(this.aStack_.pop(), this), this.m_ = this.mStack_.pop()
        }, C.translate = function(a, b) {
            c(this, j([
                [1, 0, 0],
                [0, 1, 0],
                [a, b, 1]
            ], this.m_), !1)
        }, C.rotate = function(a) {
            var b = s(a),
                d = r(a);
            c(this, j([
                [b, d, 0],
                [-d, b, 0],
                [0, 0, 1]
            ], this.m_), !1)
        }, C.scale = function(a, b) {
            this.arcScaleX_ *= a, this.arcScaleY_ *= b, c(this, j([
                [a, 0, 0],
                [0, b, 0],
                [0, 0, 1]
            ], this.m_), !0)
        }, C.transform = function(a, b, d, e, f, g) {
            c(this, j([
                [a, b, 0],
                [d, e, 0],
                [f, g, 1]
            ], this.m_), !0)
        }, C.setTransform = function(a, b, d, e, f, g) {
            c(this, [
                [a, b, 0],
                [d, e, 0],
                [f, g, 1]
            ], !0)
        }, C.clip = function() {}, C.arcTo = function() {}, C.createPattern = function() {
            return new a
        }, b.prototype.addColorStop = function(a, b) {
            b = h(b), this.colors_.push({
                offset: a,
                color: b.color,
                alpha: b.alpha
            })
        }, G_vmlCanvasManager = y, CanvasRenderingContext2D = f, CanvasGradient = b, CanvasPattern = a
    }(),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(a) {
            return h.raw ? a : encodeURIComponent(a)
        }

        function c(a) {
            return h.raw ? a : decodeURIComponent(a)
        }

        function d(a) {
            return b(h.json ? JSON.stringify(a) : String(a))
        }

        function e(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                a = decodeURIComponent(a.replace(g, " "))
            } catch (a) {
                return
            }
            try {
                return h.json ? JSON.parse(a) : a
            } catch (a) {}
        }

        function f(b, c) {
            var d = h.raw ? b : e(b);
            return a.isFunction(c) ? c(d) : d
        }
        var g = /\+/g,
            h = a.cookie = function(e, g, i) {
                if (void 0 !== g && !a.isFunction(g)) {
                    if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                        var j = i.expires,
                            k = i.expires = new Date;
                        k.setDate(k.getDate() + j)
                    }
                    return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                    var p = m[n].split("="),
                        q = c(p.shift()),
                        r = p.join("=");
                    if (e && e === q) {
                        l = f(r, g);
                        break
                    }
                    e || void 0 === (r = f(r)) || (l[q] = r)
                }
                return l
            };
        h.defaults = {}, a.removeCookie = function(b, c) {
            return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, c, {
                expires: -1
            })), !0)
        }
    });
var Spinners = {
    version: "3.0.0"
};
! function(a) {
    function b(a) {
        return a * Math.PI / 180
    }

    function c(a) {
        this.element = a
    }

    function d(b, c) {
        b && (this.element = b, h.remove(b), h.removeDetached(), this._position = 0, this._state = "stopped", this.setOptions(a.extend({
            color: "#000",
            dashes: 12,
            radius: 5,
            height: 5,
            width: 1.8,
            opacity: 1,
            padding: 3,
            rotation: 700
        }, c || {})), this.drawPosition(0), h.add(this))
    }
    var e = {
            scroll: function(a, b) {
                if (!b) return a;
                var c = a.slice(0, b);
                return a.slice(b, a.length).concat(c)
            },
            isElement: function(a) {
                return a && 1 == a.nodeType
            },
            element: {
                isAttached: function() {
                    return function(a) {
                        for (; a && a.parentNode;) a = a.parentNode;
                        return !!a && !!a.body
                    }
                }()
            }
        },
        f = {
            drawRoundedRectangle: function(c, d) {
                var e = a.extend({
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        radius: 0
                    }, d || {}),
                    f = e.left,
                    g = e.top,
                    h = e.width,
                    i = e.height,
                    e = e.radius;
                c.beginPath(), c.moveTo(f + e, g), c.arc(f + h - e, g + e, e, b(-90), b(0), !1), c.arc(f + h - e, g + i - e, e, b(0), b(90), !1), c.arc(f + e, g + i - e, e, b(90), b(180), !1), c.arc(f + e, g + e, e, b(-180), b(-90), !1), c.closePath(), c.fill()
            }
        },
        g = function() {
            function a(a) {
                var c = [];
                if (0 == a.indexOf("#") && (a = a.substring(1)), a = a.toLowerCase(), "" != a.replace(b, "")) return null;
                for (3 == a.length ? (c[0] = a.charAt(0) + a.charAt(0), c[1] = a.charAt(1) + a.charAt(1), c[2] = a.charAt(2) + a.charAt(2)) : (c[0] = a.substring(0, 2), c[1] = a.substring(2, 4), c[2] = a.substring(4)), a = 0; a < c.length; a++) c[a] = parseInt(c[a], 16);
                return c.red = c[0], c.green = c[1], c.blue = c[2], c
            }
            var b = RegExp("[0123456789abcdef]", "g"),
                c = function() {
                    function a(a, b, c) {
                        return a = a.toString(c || 10), Array(b - a.length).join("0") + a
                    }
                    return function(b, c, d) {
                        return "#" + a(b, 2, 16) + a(c, 2, 16) + a(d, 2, 16)
                    }
                }();
            return {
                hex2rgb: a,
                hex2fill: function(b, c) {
                    void 0 === c && (c = 1);
                    var d = c,
                        e = a(b);
                    return e[3] = d, e.opacity = d, "rgba(" + e.join() + ")"
                },
                rgb2hex: c
            }
        }();
    a.extend(Spinners, {
        enabled: !1,
        support: {
            canvas: function() {
                var b = a("<canvas>")[0];
                return !!b.getContext && !!b.getContext("2d")
            }()
        },
        init: function() {
            (this.support.canvas || window.G_vmlCanvasManager && window.attachEvent && -1 === navigator.userAgent.indexOf("Opera")) && (window.G_vmlCanvasManager && window.G_vmlCanvasManager.init_(document), this.enabled = !0)
        },
        create: function(a, b) {
            return c.create(a, b), this.get(a)
        },
        get: function(a) {
            return new c(a)
        },
        play: function(a) {
            return this.get(a).play(), this
        },
        pause: function(a) {
            return this.get(a).pause(), this
        },
        toggle: function(a) {
            return this.get(a).toggle(), this
        },
        stop: function(a) {
            return this.get(a).stop(), this
        },
        remove: function(a) {
            return this.get(a).remove(), this
        },
        removeDetached: function() {
            return h.removeDetached(), this
        },
        center: function(a) {
            return this.get(a).center(), this
        },
        setOptions: function(a, b) {
            return this.get(a).setOptions(b), this
        },
        getDimensions: function(a) {
            return a = 2 * h.get(a)[0].getLayout().workspace.radius, {
                width: a,
                height: a
            }
        }
    });
    var h = {
        spinners: [],
        get: function(b) {
            if (b) {
                var c = [];
                return a.each(this.spinners, function(d, f) {
                    f && (e.isElement(b) ? f.element == b : a(f.element).is(b)) && c.push(f)
                }), c
            }
        },
        add: function(a) {
            this.spinners.push(a)
        },
        remove: function(b) {
            a(a.map(this.spinners, function(c) {
                return (e.isElement(b) ? c.element == b : a(c.element).is(b)) ? c.element : void 0
            })).each(a.proxy(function(a, b) {
                this.removeByElement(b)
            }, this))
        },
        removeByElement: function(b) {
            var c = this.get(b)[0];
            c && (c.remove(), this.spinners = a.grep(this.spinners, function(a) {
                return a.element != b
            }))
        },
        removeDetached: function() {
            a.each(this.spinners, a.proxy(function(a, b) {
                b && b.element && !e.element.isAttached(b.element) && this.remove(b.element)
            }, this))
        }
    };
    a.extend(c, {
        create: function(b, c) {
            if (b) {
                var f = c || {},
                    g = [];
                return e.isElement(b) ? g.push(new d(b, f)) : a(b).each(function(a, b) {
                    g.push(new d(b, f))
                }), g
            }
        }
    }), a.extend(c.prototype, {
        items: function() {
            return h.get(this.element)
        },
        play: function() {
            return a.each(this.items(), function(a, b) {
                b.play()
            }), this
        },
        stop: function() {
            return a.each(this.items(), function(a, b) {
                b.stop()
            }), this
        },
        pause: function() {
            return a.each(this.items(), function(a, b) {
                b.pause()
            }), this
        },
        toggle: function() {
            return a.each(this.items(), function(a, b) {
                b.toggle()
            }), this
        },
        center: function() {
            return a.each(this.items(), function(a, b) {
                b.center()
            }), this
        },
        setOptions: function(b) {
            return a.each(this.items(), function(a, c) {
                c.setOptions(b)
            }), this
        },
        remove: function() {
            return h.remove(this.element), this
        }
    }), a.extend(d.prototype, {
        setOptions: function(b) {
            this.options = a.extend({}, this.options, b || {}), this.options.radii && (b = this.options.radii, this.options.radius = Math.min(b[0], b[1]), this.options.height = Math.max(b[0], b[1]) - this.options.radius), this.options.dashWidth && (this.options.width = this.options.dashWidth), this.options.speed && (this.options.duration = 1e3 * this.options.speed);
            var b = this._state,
                c = this._position;
            switch (this._layout = null, this.build(), c && c >= this.options.dashes - 1 && (this._position = this.options.dashes - 1), b) {
                case "playing":
                    this.play();
                    break;
                case "paused":
                case "stopped":
                    this.drawPosition(this._position)
            }
            this._centered && this.center()
        },
        remove: function() {
            this.canvas && (this.pause(), a(this.canvas).remove(), this.ctx = this.canvas = null)
        },
        build: function() {
            this.remove();
            var b = this.getLayout().workspace.radius;
            return a(document.body).append(this.canvas = a("<canvas>").attr({
                width: 2 * b,
                height: 2 * b
            }).css({
                zoom: 1
            })), window.G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.canvas[0]), this.ctx = this.canvas[0].getContext("2d"), this.ctx.globalAlpha = this.options.opacity, a(this.element).append(this.canvas), this.ctx.translate(b, b), this
        },
        drawPosition: function(a) {
            var c = this.getLayout().workspace,
                a = e.scroll(c.opacities, -1 * a),
                d = c.radius,
                c = this.options.dashes,
                f = b(360 / c);
            for (this.ctx.clearRect(-1 * d, -1 * d, 2 * d, 2 * d), d = 0; c > d; d++) this.drawDash(a[d], this.options.color), this.ctx.rotate(f)
        },
        drawDash: function(a, b) {
            this.ctx.fillStyle = g.hex2fill(b, a);
            var c = this.getLayout(),
                d = c.workspace.radius,
                e = c.dash.position,
                c = c.dash.dimensions;
            f.drawRoundedRectangle(this.ctx, {
                top: e.top - d,
                left: e.left - d,
                width: c.width,
                height: c.height,
                radius: Math.min(c.height, c.width) / 2
            })
        },
        _nextPosition: function() {
            var b = this.options.rotation / this.options.dashes;
            this.nextPosition(), this._playTimer = window.setTimeout(a.proxy(this._nextPosition, this), b)
        },
        nextPosition: function() {
            this._position == this.options.dashes - 1 && (this._position = -1), this._position++, this.drawPosition(this._position)
        },
        play: function() {
            if ("playing" != this._state) {
                this._state = "playing";
                var b = this.options.rotation / this.options.dashes;
                return this._playTimer = window.setTimeout(a.proxy(this._nextPosition, this), b), this
            }
        },
        pause: function() {
            return "paused" != this._state ? (this._pause(), this._state = "paused", this) : void 0
        },
        _pause: function() {
            this._playTimer && (window.clearTimeout(this._playTimer), this._playTimer = null)
        },
        stop: function() {
            return "stopped" != this._state ? (this._pause(), this._position = 0, this.drawPosition(0), this._state = "stopped", this) : void 0
        },
        toggle: function() {
            return this["playing" == this._state ? "pause" : "play"](), this
        },
        getLayout: function() {
            if (this._layout) return this._layout;
            for (var a = this.options, b = a.dashes, c = a.width, d = a.radius, e = a.radius + a.height, f = Math.max(c, e), f = Math.ceil(Math.max(f, Math.sqrt(e * e + c / 2 * (c / 2)))), a = f += a.padding, g = 1 / b, h = [], i = 0; b > i; i++) h.push((i + 1) * g);
            return this._layout = b = {
                workspace: {
                    radius: a,
                    opacities: h
                },
                dash: {
                    position: {
                        top: f - e,
                        left: f - c / 2
                    },
                    dimensions: {
                        width: c,
                        height: e - d
                    }
                }
            }
        },
        center: function() {
            var b = 2 * this.getLayout().workspace.radius;
            a(this.element.parentNode).css({
                position: "relative"
            }), a(this.element).css({
                position: "absolute",
                height: b + "px",
                width: b + "px",
                top: "50%",
                left: "50%",
                marginLeft: -.5 * b + "px",
                marginTop: -.5 * b + "px"
            }), this._centered = !0
        }
    }), Spinners.init(), Spinners.enabled || (c.create = function() {
        return []
    })
}(jQuery);
var Tipped = {
    version: "3.1.8"
};
Tipped.Skins = {
        base: {
            afterUpdate: !1,
            ajax: {
                cache: !0,
                type: "get"
            },
            background: {
                color: "#f2f2f2",
                opacity: 1
            },
            border: {
                size: 1,
                color: "#000",
                opacity: 1
            },
            closeButtonSkin: "default",
            containment: {
                selector: "viewport"
            },
            fadeIn: 180,
            fadeOut: 220,
            showDelay: 75,
            hideDelay: 25,
            radius: {
                size: 5,
                position: "background"
            },
            hideAfter: !1,
            hideOn: {
                element: "self",
                event: "mouseleave"
            },
            hideOthers: !1,
            hook: "topleft",
            inline: !1,
            offset: {
                x: 0,
                y: 0
            },
            onHide: !1,
            onShow: !1,
            shadow: {
                blur: 2,
                color: "#000",
                offset: {
                    x: 0,
                    y: 0
                },
                opacity: .12
            },
            showOn: "mousemove",
            spinner: !0,
            stem: {
                height: 9,
                width: 18,
                offset: {
                    x: 9,
                    y: 9
                },
                spacing: 2
            },
            target: "self"
        },
        reset: {
            ajax: !1,
            closeButton: !1,
            hideOn: [{
                element: "self",
                event: "mouseleave"
            }, {
                element: "tooltip",
                event: "mouseleave"
            }],
            hook: "topmiddle",
            stem: !0
        },
        dark: {
            background: {
                color: "#282828"
            },
            border: {
                color: "#9b9b9b",
                opacity: .4,
                size: 1
            },
            shadow: {
                opacity: .02
            },
            spinner: {
                color: "#fff"
            }
        },
        light: {
            background: {
                color: "#fff"
            },
            border: {
                color: "#646464",
                opacity: .4,
                size: 1
            },
            shadow: {
                opacity: .04
            }
        },
        gray: {
            background: {
                color: [{
                    position: 0,
                    color: "#8f8f8f"
                }, {
                    position: 1,
                    color: "#808080"
                }]
            },
            border: {
                color: "#131313",
                size: 1,
                opacity: .6
            }
        },
        tiny: {
            background: {
                color: "#161616"
            },
            border: {
                color: "#969696",
                opacity: .35,
                size: 1
            },
            fadeIn: 0,
            fadeOut: 0,
            radius: 4,
            stem: {
                width: 11,
                height: 6,
                offset: {
                    x: 6,
                    y: 6
                }
            },
            shadow: !1,
            spinner: {
                color: "#fff"
            }
        },
        yellow: {
            background: "#ffffaa",
            border: {
                size: 1,
                color: "#6d5208",
                opacity: .4
            }
        },
        red: {
            background: {
                color: [{
                    position: 0,
                    color: "#e13c37"
                }, {
                    position: 1,
                    color: "#e13c37"
                }]
            },
            border: {
                size: 1,
                color: "#150201",
                opacity: .6
            },
            spinner: {
                color: "#fff"
            }
        },
        green: {
            background: {
                color: [{
                    position: 0,
                    color: "#4bb638"
                }, {
                    position: 1,
                    color: "#4aab3a"
                }]
            },
            border: {
                size: 1,
                color: "#122703",
                opacity: .6
            },
            spinner: {
                color: "#fff"
            }
        },
        blue: {
            background: {
                color: [{
                    position: 0,
                    color: "#4588c8"
                }, {
                    position: 1,
                    color: "#3d7cb9"
                }]
            },
            border: {
                color: "#020b17",
                opacity: .6
            },
            spinner: {
                color: "#fff"
            }
        }
    },
    function(a) {
        a.extend(Tipped.Skins, {
            black: a.extend(!0, {}, Tipped.Skins.dark, {
                radius: 0
            }),
            white: a.extend(!0, {}, Tipped.Skins.light, {
                radius: 0
            })
        })
    }(jQuery), Tipped.Skins.CloseButtons = {
        base: {
            diameter: 17,
            border: 2,
            x: {
                diameter: 10,
                size: 2,
                opacity: 1
            },
            states: {
                default: {
                    background: {
                        color: [{
                            position: 0,
                            color: "#1a1a1a"
                        }, {
                            position: .46,
                            color: "#171717"
                        }, {
                            position: .53,
                            color: "#121212"
                        }, {
                            position: .54,
                            color: "#101010"
                        }, {
                            position: 1,
                            color: "#000"
                        }],
                        opacity: 1
                    },
                    x: {
                        color: "#fafafa",
                        opacity: 1
                    },
                    border: {
                        color: "#fff",
                        opacity: 1
                    }
                },
                hover: {
                    background: {
                        color: "#333",
                        opacity: 1
                    },
                    x: {
                        color: "#e6e6e6",
                        opacity: 1
                    },
                    border: {
                        color: "#fff",
                        opacity: 1
                    }
                }
            },
            shadow: {
                blur: 1,
                color: "#000",
                offset: {
                    x: 0,
                    y: 0
                },
                opacity: .5
            }
        },
        reset: {},
        default: {},
        light: {
            diameter: 17,
            border: 2,
            x: {
                diameter: 10,
                size: 2,
                opacity: 1
            },
            states: {
                default: {
                    background: {
                        color: [{
                            position: 0,
                            color: "#797979"
                        }, {
                            position: .48,
                            color: "#717171"
                        }, {
                            position: .52,
                            color: "#666"
                        }, {
                            position: 1,
                            color: "#666"
                        }],
                        opacity: 1
                    },
                    x: {
                        color: "#fff",
                        opacity: .95
                    },
                    border: {
                        color: "#676767",
                        opacity: 1
                    }
                },
                hover: {
                    background: {
                        color: [{
                            position: 0,
                            color: "#868686"
                        }, {
                            position: .48,
                            color: "#7f7f7f"
                        }, {
                            position: .52,
                            color: "#757575"
                        }, {
                            position: 1,
                            color: "#757575"
                        }],
                        opacity: 1
                    },
                    x: {
                        color: "#fff",
                        opacity: 1
                    },
                    border: {
                        color: "#767676",
                        opacity: 1
                    }
                }
            }
        }
    }, eval(function(a, b, c, d, e, f) {
        if (e = function(a) {
                return (b > a ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
            }, !"".replace(/^/, String)) {
            for (; c--;) f[e(c)] = d[c] || e(c);
            d = [function(a) {
                return f[a]
            }], e = function() {
                return "\\w+"
            }, c = 1
        }
        for (; c--;) d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
        return a
    }('(12(a){12 c(a,b){13 c=[a,b];1a c.15=a,c.17=b,c}12 f(a){1N.5v&&5v[5v.6z?"6z":"8c"](a)}12 j(a){11.1g=a}12 k(a){13 b={};28(13 c 5w a)b[c]=a[c]+"2w";1a b}12 l(a,b){1a 1b.8d(a*a+b*b)}12 m(a){1a 2E*a/1b.2Z}12 n(a){1a a*1b.2Z/2E}12 o(a){1a 1/1b.4A(a)}12 v(b){1f(b){11.1g=b,u.1z(b);13 c=11.2e();11.19=a.1k({},c.19),11.2x=1,11.1o={},11.1V=a(b).1X("2p-1V"),u.30(11),11.29=11.19.1u.1D,11.6A=11.19.1l&&11.29,11.3a={x:0,y:0},11.3l={17:0,15:0},11.1P()}}12 x(b,c){11.1g=b,11.1g&&c&&(11.19=a.1k({31:3,1A:{x:0,y:0},1Q:"#4B",1K:.5,2L:1},20[2]||{}),11.2x=11.19.2L,11.1o={},11.1V=a(b).1X("2p-1V"),w.30(11),11.1P())}12 z(b){11.1g=b,11.1g&&(11.19=a.1k({31:5,1A:{x:0,y:0},1Q:"#4B",1K:.5,2L:1},20[1]||{}),11.2x=11.19.2L,11.1V=a(b).1X("2p-1V"),y.30(11),11.1P())}12 A(b,c){28(13 d 5w c)c[d]&&c[d].3D&&c[d].3D===5x?(b[d]=a.1k({},b[d])||{},A(b[d],c[d])):b[d]=c[d];1a b}12 C(b,c){1f(11.1g=b,11.1g){13 e=a(b).1X("2p-1V");e&&B.1z(b),e=h(),a(b).1X("2p-1V",e),11.1V=e;13 f;"8e"!=a.1p(c)||d.2j(c)?f=20[2]||{}:(f=c,c=1r),11.19=B.6B(f);13 g=b.6C("5y");1f(!c){13 i=b.6C("1X-2p");i?c=i:g&&(c=g)}g&&(a(b).1X("5z",g),b.8f("5y","")),11.2F=c,11.2k=11.19.2k||+B.19.4C,11.1o={2G:{14:1,18:1},5A:[],3b:[],2q:{4D:!1,2l:!1,1L:!1,3c:!1,1P:!1,4E:!1,5B:!1,3E:!1},5C:""};13 j=11.19.1C;11.1C="2M"==j?"2M":"4F"!=j&&j?d.2j(j)?j:j&&1x.6D(j)||11.1g:11.1g,11.6E(),B.30(11)}}13 b=6F.3F.8g,d={8h:12(c,d){13 e=c;1a 12(){13 c=[a.1v(e,11)].6G(b.5D(20));1a d.5E(11,c)}},2j:12(a){1a a&&1==a.8i},4G:12(a,c){13 d=b.5D(20,2);1a 8j(12(){1a a.5E(a,d)},c)},44:12(a){1a d.4G.5E(11,[a,1].6G(b.5D(20,1)))},5F:12(a){1a{x:a.5G,y:a.6H}},1g:{4H:12(a){13 b=0,d=0;8k b+=a.4I||0,d+=a.4J||0,a=a.4K;8l(a);1a c(d,b)},4L:12(b){13 e=a(b).1A(),f=d.1g.4H(b),g={17:a(1N).4I(),15:a(1N).4J()};1a e.15+=f.15-g.15,e.17+=f.17-g.17,c(e.15,e.17)},5H:12(){12 a(a){28(13 b=a;b&&b.4K;)b=b.4K;1a b}1a 12(b){13 c=a(b);1a!(!c||!c.3d)}}()}},e=12(a){12 b(b){13 c=5I(b+"([\\\\d.]+)").8m(a);1a c?5J(c[1]):!0}1a{3m:!(!1N.8n||-1!==a.3n("5K"))&&b("8o "),5K:a.3n("5K")>-1&&(!!1N.5L&&5L.6I&&5J(5L.6I())||7.55),5M:a.3n("6J/")>-1&&b("6J/"),4M:a.3n("4M")>-1&&-1===a.3n("8p")&&b("8q:"),6K:!!a.3e(/8r.*8s.*8t/),4N:a.3n("4N")>-1&&b("4N/")}}(8u.8v),g={32:{46:{5N:"1.4.4",5O:1N.46&&46.8w.8x}},6L:12(){12 b(b){28(13 c=b.3e(a),d=c&&c[1]&&c[1].2N(".")||[],e=0,f=0,g=d.2a;g>f;f++)e+=2O(d[f]*1b.6M(10,6-2*f));1a c&&c[3]?e-1:e}13 a=/^(\\d+(\\.?\\d+){0,3})([A-6N-8y-]+[A-6N-8z-9]+)?/;1a 12(a){11.32[a].6O||(11.32[a].6O=!0,(!11.32[a].5O||b(11.32[a].5O)<b(11.32[a].5N)&&!11.32[a].6P)&&(11.32[a].6P=!0,f("1S 8A "+a+" >= "+11.32[a].5N)))}}()},h=12(){13 a=0,b="8B";1a 12(c){28(c=c||b,a++;1x.6D(c+a);)a++;1a c+a}}(),i=12(){13 b=[];1a{1t:12(c){28(13 d=1r,e=0;b.2a>e;e++)b[e]&&b[e].47==c.47&&b[e].1p.6Q()==c.1p.6Q()&&a.6R(b[e].1X||{})==a.6R(c.1X||{})&&(d=b[e].4O);1a d},4P:12(c,d){11.1z(c.47),b.2n(a.1k({},c,{4O:d}))},1z:12(a){28(13 c=0;b.2a>c;c++)b[c]&&b[c].47==a&&3G b[c]},6S:12(){b=[]}}}();a.1k(1S,12(){1a{2H:{3f:12(){13 a=1x.22("3f");1a!(!a.3o||!a.3o("2d"))}(),3H:12(){6T{1a!!("8C"5w 1N||1N.6U&&1x 8D 6U)}6V(a){1a!1}}(),48:12(){13 b=["8E","8F","8G"],c=!1;1a a.1w(b,12(a,b){6T{1x.8H(b),c=!0}6V(d){}}),c}()},3p:12(){(11.2H.3f||e.3m)&&(g.6L("46"),a(1x).6W(12(){B.6X()}))},4Q:12(a,b,c){1a j.4Q(a,b,c),11.1t(a)},1t:12(a){1a 3q j(a)},5P:12(a){1a B.5P(a)},1W:12(a){1a 11.1t(a).1W(),11},1I:12(a){1a 11.1t(a).1I(),11},33:12(a){1a 11.1t(a).33(),11},2P:12(a){1a 11.1t(a).2P(),11},1z:12(a){1a 11.1t(a).1z(),11},4R:12(){1a B.4R(),11},5Q:12(a){1a B.5Q(a),11},5R:12(a){1a B.5R(a),11},1L:12(b){1f(d.2j(b))1a B.5S(b);1f("5T"!=a.1p(b)){13 c=a(b),e=0;1a a.1w(c,12(a,b){B.5S(b)&&e++}),e}1a B.3I().2a},5U:12(){1a B.5U(),11}}}()),a.1k(j,{4Q:12(b,c){1f(b){13 e=20[2]||{},f=[];1a B.6Y(),d.2j(b)?f.2n(3q C(b,c,e)):a(b).1w(12(a,b){f.2n(3q C(b,c,e))}),f}}}),a.1k(j.3F,{49:12(){1a B.2r.4S={x:0,y:0},B.1t(11.1g)},1W:12(){1a a.1w(11.49(),12(a,b){b.1W()}),11},1I:12(){1a a.1w(11.49(),12(a,b){b.1I()}),11},33:12(){1a a.1w(11.49(),12(a,b){b.33()}),11},2P:12(){1a a.1w(11.49(),12(a,b){b.2P()}),11},1z:12(){1a B.1z(11.1g),11}});13 p={4T:12(){13 b;1a b=e.6K?{14:1N.5V,18:1N.5W}:{18:a(1N).18(),14:a(1N).14()}}},q={3r:1b.1E(1b.4U(1N.3r?5J(1N.3r)||1:1,2)),3p:12(){12 a(a){13 b=a.3o("2d");b.8I(q.3r,q.3r)}1a 1N.4V&&!1S.2H.3f&&e.3m?12(b){4V.8J(b),a(b)}:12(b){a(b)}}(),3J:12(b,c){a(b).3g({14:c.14*11.3r,18:c.18*11.3r}).1q(k(c))},6Z:12(b){13 c=a.1k({17:0,15:0,14:0,18:0,1n:0},20[1]||{}),d=c,e=d.15,f=d.17,g=d.14,h=d.18,i=d.1n;1a i?(b.2f(),b.3s(e+i,f),b.26(e+g-i,f+i,i,n(-90),n(0),!1),b.26(e+g-i,f+h-i,i,n(0),n(90),!1),b.26(e+i,f+h-i,i,n(90),n(2E),!1),b.26(e+i,f+i,i,n(-2E),n(-90),!1),b.2g(),b.34(),3t 0):(b.70(e,f,g,h),3t 0)},8K:12(b,c){28(13 d=a.1k({x:0,y:0,1Q:"#4B"},20[2]||{}),e=0,f=c.2a;f>e;e++)28(13 g=0,h=c[e].2a;h>g;g++){13 i=2O(c[e].3u(g))*(1/9);b.2Q=t.2R(d.1Q,i),i&&b.70(d.x+g,d.y+e,1,1)}},4a:12(b,c){13 d;1f("2s"==a.1p(c))d=t.2R(c);1G 1f("2s"==a.1p(c.1Q))d=t.2R(c.1Q,"2y"==a.1p(c.1K)?c.1K:1);1G 1f(a.71(c.1Q)){13 e=a.1k({3K:0,3L:0,3M:0,3N:0},20[2]||{});d=q.72.73(b.8L(e.3K,e.3L,e.3M,e.3N),c.1Q,c.1K)}1a d}};q.72={73:12(b,c){28(13 d="2y"==a.1p(20[2])?20[2]:1,e=0,f=c.2a;f>e;e++){13 g=c[e];("5T"==a.1p(g.1K)||"2y"!=a.1p(g.1K))&&(g.1K=1),b.8M(g.1e,t.2R(g.1Q,g.1K*d))}1a b}};13 r={74:["3O","4b","3P","3Q","4c","4d","4e","4f","4g","4h","4i","3R"],4j:{75:/^(17|15|1R|1O)(17|15|1R|1O|2t|2S)$/,1J:/^(17|1R)/,35:/(2t|2S)/,76:/^(17|1R|15|1O)/},77:12(){13 a={17:"18",15:"14",1R:"18",1O:"14"};1a 12(b){1a a[b]}}(),35:12(a){1a!!a.3v().3e(11.4j.35)},78:12(a){1a!11.35(a)},2I:12(a){1a a.3v().3e(11.4j.1J)?"1J":"2b"},5X:12(a){13 b=1r,c=a.3v().3e(11.4j.76);1a c&&c[1]&&(b=c[1]),b},2N:12(a){1a a.3v().3e(11.4j.75)}},s={5Y:12(a){13 b=a.19.1l;1a{14:b.14,18:b.18}},4k:12(b,c){13 d=a.1k({3S:"1E"},20[2]||{}),e=b.19.1l,f=e.14,g=e.18,h=11.4W(f,g,c);1a d.3S&&(h.14=1b[d.3S](h.14),h.18=1b[d.3S](h.18)),{14:h.14,18:h.18}},4W:12(a,b,c){13 d=m(1b.79(.5*(b/a))),e=2E-d,f=1b.4A(n(e-90))*c,g=a+2*f,h=g*b/a;1a{14:g,18:h}},3T:12(a,b){13 c=11.4k(a,b),d=11.5Y(a),f=(r.35(a.29),1b.1E(c.18+b));1a a.19.1l.1A||0,a.19.1n&&a.19.1n.2u||0,{2z:{1c:{14:1b.1E(c.14),18:1b.1E(f)}},1i:{1c:c},1l:{1c:{14:d.14,18:d.18}}}},5Z:12(b,c,d){13 f=b.19,g={17:0,15:0},h={17:0,15:0},i=a.1k({},c),j=b.1i,k=k||11.3T(b,b.1i),l=k.2z.1c;d&&(l.18=d,j=0);13 m=r.2N(b.29),n=r.2I(b.29);1f(b.19.1l){13 o=r.5X(b.29);1f("17"==o?g.17=l.18-j:"15"==o&&(g.15=l.18-j),"1J"==n){1T(m[2]){1h"2t":1h"2S":h.15=.5*i.14;1B;1h"1O":h.15=i.14}"1R"==m[1]&&(h.17=i.18-j+l.18)}1G{1T(m[2]){1h"2t":1h"2S":h.17=.5*i.18;1B;1h"1R":h.17=i.18}"1O"==m[1]&&(h.15=i.14-j+l.18)}i[r.77(o)]+=l.18-j}1G 1f("1J"==n){1T(m[2]){1h"2t":1h"2S":h.15=.5*i.14;1B;1h"1O":h.15=i.14}"1R"==m[1]&&(h.17=i.18)}1G{1T(m[2]){1h"2t":1h"2S":h.17=.5*i.18;1B;1h"1R":h.17=i.18}"1O"==m[1]&&(h.15=i.14)}13 p=f.1n&&f.1n.2u||0,q=f.1i&&f.1i.2u||0;1f(b.19.1l){13 t=p&&"1m"==f.1n.1e?p:0,u=p&&"1i"==f.1n.1e?p:p+q,v=q+t+.5*k.1l.1c.14-.5*k.1i.1c.14,w=u>v?u-v:0,x=1b.1E(q+t+.5*k.1l.1c.14+w);1f("1J"==n)1T(m[2]){1h"15":h.15+=x;1B;1h"1O":h.15-=x}1G 1T(m[2]){1h"17":h.17+=x;1B;1h"1R":h.17-=x}}13 y;1f(f.1l&&(y=f.1l.1A)){13 z=s.60(y,b.6A,c,k.1i.1c,q,p);1f(y=z.1A,z.4l,"1J"==n)1T(m[2]){1h"15":h.15+=y.x;1B;1h"1O":h.15-=y.x}1G 1T(m[2]){1h"17":h.17+=y.y;1B;1h"1R":h.17-=y.y}}13 B;1f(f.1l&&(B=f.1l.8N))1f("1J"==n)1T(m[1]){1h"17":h.17-=B;1B;1h"1R":h.17+=B}1G 1T(m[1]){1h"15":h.15-=B;1B;1h"1O":h.15+=B}1a{1c:i,1e:{17:0,15:0},1m:{1e:g,1c:c},1l:{1c:l},2J:h}},60:12(b,c,d,e,f,g){13 h=r.2I(c),i=a.1k({},b),j={x:0,y:0},k=0;1a"1J"==h&&(k=d.14-e.14-2*f-2*g)<2*b.x&&(j.x=i.x,/(1O)$/.3h(c)&&(j.x*=-1),i.x=0),"2b"==h&&(k=d.18-e.18-2*f-2*g)<2*b.y&&(j.y=i.y,/(1R)$/.3h(c)&&(j.y*=-1),i.y=0),{1A:i,4l:j}}},t=12(){12 d(a){13 b=a;1a b.7a=a[0],b.7b=a[1],b.7c=a[2],b}12 e(a){1a 2O(a,16)}12 f(a){13 b=6F(3);1f(0==a.3n("#")&&(a=a.4X(1)),a=a.3v(),""!=a.61(c,""))1a 1r;3==a.2a?(b[0]=a.3u(0)+a.3u(0),b[1]=a.3u(1)+a.3u(1),b[2]=a.3u(2)+a.3u(2)):(b[0]=a.4X(0,2),b[1]=a.4X(2,4),b[2]=a.4X(4));28(13 f=0;b.2a>f;f++)b[f]=e(b[f]);1a d(b)}12 g(a,b){13 c=f(a);1a c[3]=b,c.1K=b,c}12 h(b,c){1a"5T"==a.1p(c)&&(c=1),"8O("+g(b,c).8P()+")"}12 i(a){1a"#"+(j(a)[2]>50?"4B":"8Q")}12 j(a){1a k(f(a))}12 k(a){13 f,g,h,a=d(a),b=a.7a,c=a.7b,e=a.7c,i=b>c?b:c;e>i&&(i=e);13 j=c>b?b:c;1f(j>e&&(j=e),h=i/8R,g=0!=i?(i-j)/i:0,0==g)f=0;1G{13 k=(i-b)/(i-j),l=(i-c)/(i-j),m=(i-e)/(i-j);f=b==i?m-l:c==i?2+k-m:4+l-k,f/=6,0>f&&(f+=1)}f=1b.23(7d*f),g=1b.23(62*g),h=1b.23(62*h);13 n=[];1a n[0]=f,n[1]=g,n[2]=h,n.8S=f,n.8T=g,n.8U=h,n}13 b="8V",c=5I("["+b+"]","g");1a{8W:f,2R:h,8X:i}}(),u={4Y:{},1t:12(b){1f(!b)1a 1r;13 c=1r,d=a(b).1X("2p-1V");1a d&&(c=11.4Y[d]),c},30:12(a){11.4Y[a.1V]=a},1z:12(a){13 b=11.1t(a);b&&(3G 11.4Y[b.1V],b.1z())}};a.1k(v.3F,12(){12 b(){11.1o.1u={};13 b=11.29;a.1w(r.74,a.1v(12(b,c){13 d,e=11.1o.1u[c]={};11.29=c;13 f=11.2o();d=f,e.2J=d.2J;13 g=d.1H.1c,h={17:d.1H.1e.17,15:d.1H.1e.15};1f(e.1H={1c:g,1e:h},e.1D={1c:d.21.1c},11.1s){13 i=11.1s.2o(),j=i.21.1e,k=e.1H.1e;a.1k(!0,e,{2J:i.2J,1H:{1e:{17:k.17+j.17,15:k.15+j.15}},1D:{1c:i.1D.1c}})}},11)),11.29=b}12 c(){11.36(),11.19.1s&&(w.1z(11.1g),11.19.1y&&11.19.1y.1s&&y.1z(11.1g)),11.2T&&(11.2T.1z(),11.2T=1r),11.1j&&(a(11.1j).1z(),11.1j=1r)}12 d(){11.1H&&(11.1y&&(a(11.1y).1z(),11.1y=1r,11.63=1r,11.64=1r),a(11.1H).1z(),11.1l=1r,11.1m=1r,11.1H=1r,11.1o={})}12 f(){13 a=11.2e();11.2G=a.1o.2G;13 b=a.19;11.1n=b.1n&&b.1n.2u||0,11.1i=b.1i&&b.1i.2u||0,11.2m=b.2m;13 c=1b.4U(11.2G.18,11.2G.14);11.1n>c/2&&(11.1n=1b.65(c/2)),"1i"==11.19.1n.1e&&11.1n>11.1i&&(11.1i=11.1n),11.1o={19:{1n:11.1n,1i:11.1i,2m:11.2m}}}12 g(){11.36(),1N.4V&&1N.4V.8Y(1x);13 b=11.2e(),c=11.19;11.1H=a("<2h>").1Y("8Z")[0],a(b.4Z).1Z(11.1H),11.51(),11.7e(b),c.1y&&(11.7f(b),c.1y.1s&&(11.2U?(11.2U.19=c.1y.1s,11.2U.1P()):11.2U=3q z(11.1g,a.1k({2L:11.2x},c.1y.1s)))),e.3m&&7>e.3m&&a(b.1j).66(11.2T=a("<91>").1Y("92").3g({93:0,4m:"94:\'\';"})),11.52(),c.1s&&(11.1s?(11.1s.19=c.1s,11.1s.1P()):11.1s=3q x(11.1g,11,a.1k({2L:11.2x},c.1s))),11.7g()}12 h(){13 b=11.2e(),c=a(b.1j),d=a(b.1j).67(".7h").7i()[0];1f(d){a(d).1q({14:"68",18:"68"});13 e=2O(c.1q("17")),f=2O(c.1q("15")),g=2O(c.1q("14"));c.1q({15:"-7j",17:"-7j",14:"95",18:"68"}),b.1F("1L")||a(b.1j).1W();13 h=B.53.69(d);b.19.3i&&"2y"==a.1p(b.19.3i)&&h.14>b.19.3i&&(a(d).1q({14:b.19.3i+"2w"}),h=B.53.69(d)),b.1F("1L")||a(b.1j).1I(),b.1o.2G=h,c.1q({15:f+"2w",17:e+"2w",14:g+"2w"}),11.1P()}}12 i(a,b,c){13 d=!1;11.4n(a)&&(d=!0),11.7k(b)&&(d=!0),c&&11.7l(c)&&(d=!0),d&&11.1P()}12 j(a){13 b=!1;1a(11.3l.15!=a.15||11.3l.17!=a.17)&&(b=!0,11.3l=a),b}12 l(a){13 b=!1;1a(11.3a.x!=a.x||11.3a.y!=a.y)&&(b=!0,11.3a=a),b}12 m(a){13 c=!1;1a 11.29!=a&&(c=!0,11.29=a),c}12 o(){1a B.1t(11.1g)[0]}12 p(){1a s.3T(11,11.1i)}12 u(){13 b=11.2e().19.1y,c=b.3w+2*b.1i;a(11.63).1q({15:-1*c+"2w"}),a(11.64).1q({15:0})}12 v(){13 b=11.2e().19.1y,c=b.3w+2*b.1i;a(11.63).1q({15:0}),a(11.64).1q({15:c+"2w"})}12 A(b){13 c=b.19.1y,d={14:c.3w+2*c.1i,18:c.3w+2*c.1i};a(b.1j).1Z(a(11.1y=1x.22("2h")).1Y("7m").1q(k(d)).1Z(a(11.7n=1x.22("2h")).1Y("96").1q(k(d)))),11.6a(b,"6b"),11.6a(b,"6c"),1S.2H.3H||e.4N||a(11.1y).3U("4o",a.1v(11.7o,11)).3U("54",a.1v(11.7p,11))}12 C(b,c){13 d=b.19.1y,e=d.3w,f=d.1i||0,g=d.x.3w,h=d.x.2u,j=(d.x.97,d.2q[c||"6b"]),l={14:e+2*f,18:e+2*f};g>=e&&(g=e-2);13 m;a(11.7n).1Z(a(11[c+"7q"]=1x.22("2h")).1Y("98").1q(a.1k(k(l),{15:("6c"==c?l.14:0)+"2w"}))),a(1x.3d).1Z(a(m=1x.22("3f"))),q.3J(m,l),q.3p(m);13 o=m.3o("2d");o.2L=11.2x,a(11[c+"7q"]).1Z(m),o.99(l.14/2,l.18/2),o.2Q=q.4a(o,j.1m,{3K:0,3L:0-e/2,3M:0,3N:0+e/2}),o.2f(),o.26(0,0,e/2,0,2*1b.2Z,!0),o.2g(),o.34(),f&&(o.2Q=q.4a(o,j.1i,{3K:0,3L:0-e/2-f,3M:0,3N:0+e/2+f}),o.2f(),o.26(0,0,e/2,1b.2Z,0,!1),o.1d((e+f)/2,0),o.26(0,0,e/2+f,0,1b.2Z,!0),o.26(0,0,e/2+f,1b.2Z,0,!0),o.1d(e/2,0),o.26(0,0,e/2,0,1b.2Z,!1),o.2g(),o.34());13 p=g/2,r=h/2;1f(r>p){13 s=r;r=p,p=s}o.2Q=t.2R(j.x.1Q||j.x,j.x.1K||1),o.56(n(45)),o.2f(),o.3s(0,0),o.1d(0,p);28(13 u=0;4>u;u++)o.1d(0,p),o.1d(r,p),o.1d(r,p-(p-r)),o.1d(p,r),o.1d(p,0),o.56(n(90));o.2g(),o.34()}12 D(b){13 l,m,o,p,q,c=a.1k({1l:!1,3x:1r,9a:1r,2f:!1,2g:!1,3y:1r,3z:1r,1n:0,1i:0,57:0,37:{x:0,y:0}},20[1]||{}),d=c.3y,e=c.3z,f=c.37,g=c.1i,h=c.1n,i=c.3x,j=d.1m.1e,k=d.1m.1c,t={x:1b.2V(11.3a.x),y:1b.2V(11.3a.y)},u={x:0,y:0},v={x:0,y:0};1f(e){l=e.1l.1c,m=e.2z.1e,o=e.2z.1c,p=o.14-l.14;13 w=c.57,x=g+h+.5*l.14-.5*e.1i.1c.14;q=1b.1E(w>x?w-x:0);13 y=s.60(f,i,k,e.1i.1c,g,h);f=y.1A,v=y.4l,u={x:1b.1U(k.14-2*1b.1U(q,f.x||0)-e.1i.1c.14-(2*h||0),0),y:1b.1U(k.18-2*1b.1U(q,f.y||0)-e.1i.1c.18-(2*h||0),0)},r.35(i)&&(u.x*=.5,u.y*=.5),t.x=1b.4U(t.x,u.x),t.y=1b.4U(t.y,u.y),r.35(i)&&(0>11.3a.x&&t.x>0&&(t.x*=-1),0>11.3a.y&&t.y>0&&(t.y*=-1)),11.3l&&11.3l.3A&&a.1w(11.3l.3A,12(b,c){a.1w("17 1O 1R 15".2N(" "),12(a,b){c==b&&5I("("+b+")$").3h(i)&&(t[/^(15|1O)$/.3h(b)?"x":"y"]=0)})})}13 z,A;1f(h?(z=j.15+g+h,A=j.17+g):(z=j.15+g,A=j.17+g),f&&f.x&&/^(3O|3R)$/.3h(i)&&(z+=f.x),c.2f&&b.2f(),b.3s(z,A),c.1l)1T(i){1h"3O":z=j.15+g,h&&(z+=h),z+=1b.1U(q,f.x||0),z+=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A);1B;1h"4b":1h"58":z=j.15+.5*k.14-.5*l.14,z+=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A),z=j.15+.5*k.14-.5*o.14,b.1d(z,A);1B;1h"3P":z=j.15+k.14-g-l.14,h&&(z-=h),z-=1b.1U(q,f.x||0),z-=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A)}1f(h?h&&(b.26(j.15+k.14-g-h,j.17+g+h,h,n(-90),n(0),!1),z=j.15+k.14-g,A=j.17+g+h):(z=j.15+k.14-g,A=j.17+g,b.1d(z,A)),c.1l)1T(i){1h"3Q":A=j.17+g,h&&(A+=h),A+=1b.1U(q,f.y||0),A+=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A);1B;1h"4c":1h"59":A=j.17+.5*k.18-.5*l.14,A+=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A);1B;1h"4d":A=j.17+k.18-g,h&&(A-=h),A-=l.14,A-=1b.1U(q,f.y||0),A-=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A)}1f(h?h&&(b.26(j.15+k.14-g-h,j.17+k.18-g-h,h,n(0),n(90),!1),z=j.15+k.14-g-h,A=j.17+k.18-g):(z=j.15+k.14-g,A=j.17+k.18-g,b.1d(z,A)),c.1l)1T(i){1h"4e":z=j.15+k.14-g,h&&(z-=h),z-=1b.1U(q,f.x||0),z-=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A);1B;1h"4f":1h"5a":z=j.15+.5*k.14+.5*l.14,z+=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A);1B;1h"4g":z=j.15+g+l.14,h&&(z+=h),z+=1b.1U(q,f.x||0),z+=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A)}1f(h?h&&(b.26(j.15+g+h,j.17+k.18-g-h,h,n(90),n(2E),!1),z=j.15+g,A=j.17+k.18-g-h):(z=j.15+g,A=j.17+k.18-g,b.1d(z,A)),c.1l)1T(i){1h"4h":A=j.17+k.18-g,h&&(A-=h),A-=1b.1U(q,f.y||0),A-=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A);1B;1h"4i":1h"5b":A=j.17+.5*k.18+.5*l.14,A+=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A);1B;1h"3R":A=j.17+g+l.14,h&&(A+=h),A+=1b.1U(q,f.y||0),A+=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A)}1a h?h&&(b.26(j.15+g+h,j.17+g+h,h,n(-2E),n(-90),!1),z=j.15+g+h,A=j.17+g,z+=1,b.1d(z,A)):(z=j.15+g,A=j.17+g,b.1d(z,A)),c.2g&&b.2g(),{x:z,y:A,1l:t,5c:v,37:f}}12 E(b){13 o,p,q,r,s,t,c=a.1k({1l:!1,3x:1r,2f:!1,2g:!1,3y:1r,3z:1r,1n:0,1i:0,7r:0,37:{x:0,y:0},5d:1r},20[1]||{}),d=c.3y,e=c.3z,g=(c.7r,c.37),h=c.1i,i=c.1n&&c.1n.2u||0,j=c.7s,k=c.3x,l=d.1m.1e,m=d.1m.1c,u=c.5d&&c.5d.1l||{x:0,y:0};1f(e){o=e.1l.1c,p=e.2z.1e,q=e.2z.1c,r=e.1i.1c,s=q.14-o.14;13 v=h+j+.5*o.14-.5*r.14;t=1b.1E(i>v?i-v:0)}13 w=l.15+h+j,x=l.17+h;j&&(w+=1),a.1k({},{x:w,y:x}),c.2f&&b.2f();13 z=a.1k({},{x:w,y:x});1f(x-=h,b.1d(w,x),i?i&&(b.26(l.15+i,l.17+i,i,n(-90),n(-2E),!0),w=l.15,x=l.17+i):(w=l.15,x=l.17,b.1d(w,x)),c.1l)1T(k){1h"3R":x=l.17+h,j&&(x+=j),x-=.5*r.14,x+=.5*o.14,x+=1b.1U(t,g.y||0),x+=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x);1B;1h"4i":1h"5b":x=l.17+.5*m.18-.5*r.14,x+=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x);1B;1h"4h":x=l.17+m.18-h-r.14,j&&(x-=j),x+=.5*r.14,x-=.5*o.14,x-=1b.1U(t,g.y||0),x-=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+i,l.17+m.18-i,i,n(-2E),n(-9b),!0),w=l.15+i,x=l.17+m.18):(w=l.15,x=l.17+m.18,b.1d(w,x)),c.1l)1T(k){1h"4g":w=l.15+h,j&&(w+=j),w-=.5*r.14,w+=.5*o.14,w+=1b.1U(t,g.x||0),w+=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x);1B;1h"4f":1h"5a":w=l.15+.5*m.14-.5*r.14,w+=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x),w=l.15+.5*m.14+r.14,b.1d(w,x);1B;1h"4e":w=l.15+m.14-h-r.14,j&&(w-=j),w+=.5*r.14,w-=.5*o.14,w-=1b.1U(t,g.x||0),w-=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+m.14-i,l.17+m.18-i,i,n(90),n(0),!0),w=l.15+m.14,x=l.17+m.14+i):(w=l.15+m.14,x=l.17+m.18,b.1d(w,x)),c.1l)1T(k){1h"4d":x=l.17+m.18-h,x+=.5*r.14,x-=.5*o.14,j&&(x-=j),x-=1b.1U(t,g.y||0),x-=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x);1B;1h"4c":1h"59":x=l.17+.5*m.18+.5*r.14,x+=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x);1B;1h"3Q":x=l.17+h,j&&(x+=j),x+=r.14,x-=.5*r.14-.5*o.14,x+=1b.1U(t,g.y||0),x+=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+m.14-i,l.17+i,i,n(0),n(-90),!0),w=l.15+m.14-i,x=l.17):(w=l.15+m.14,x=l.17,b.1d(w,x)),c.1l)1T(k){1h"3P":w=l.15+m.14-h,w+=.5*r.14-.5*o.14,j&&(w-=j),w-=1b.1U(t,g.x||0),w-=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x);1B;1h"4b":1h"58":w=l.15+.5*m.14+.5*r.14,w+=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x),w=l.15+.5*m.14-r.14,b.1d(w,x),b.1d(w,x);1B;1h"3O":w=l.15+h+r.14,w-=.5*r.14,w+=.5*o.14,j&&(w+=j),w+=1b.1U(t,g.x||0),w+=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x)}b.1d(z.x,z.y-h),b.1d(z.x,z.y),c.2g&&b.2g()}12 F(b){13 c=11.2o(),d=11.19.1l&&11.4p(),e=11.29&&11.29.3v(),f=11.1n,h=11.1i,i=11.2m,k=({14:2*h+2*i+11.2G.14,18:2*h+2*i+11.2G.18},b.19.1l&&b.19.1l.1A||{x:0,y:0}),l=0,m=0;f&&(l="1m"==11.19.1n.1e?f:0,m="1i"==11.19.1n.1e?f:l+h),a(1x.3d).1Z(11.2W=1x.22("3f")),q.3J(11.2W,c.1H.1c),q.3p(11.2W);13 n=11.2W.3o("2d");n.2L=11.2x,a(11.1H).1Z(11.2W),n.2Q=q.4a(n,11.19.1m,{3K:0,3L:c.1m.1e.17+h,3M:0,3N:c.1m.1e.17+c.1m.1c.18-h}),n.9c=0;13 o;1f(o=11.6d(n,{2f:!0,2g:!0,1i:h,1n:l,57:m,3y:c,3z:d,1l:11.19.1l,3x:e,37:k}),n.34(),h){13 p=q.4a(n,11.19.1i,{3K:0,3L:c.1m.1e.17,3M:0,3N:c.1m.1e.17+c.1m.1c.18});n.2Q=p,o=11.6d(n,{2f:!0,2g:!1,1i:h,1n:l,57:m,3y:c,3z:d,1l:11.19.1l,3x:e,37:k}),11.7t(n,{2f:!1,2g:!0,1i:h,7s:l,1n:{2u:m,1e:11.19.1n.1e},3y:c,3z:d,1l:11.19.1l,3x:e,37:o.37,5d:o}),n.34()}11.3B=o}12 G(){13 i,a=11.2e(),b=11.2G,c=a.19,d=11.1n,f=11.1i,g=11.2m,h={14:2*f+2*g+b.14,18:2*f+2*g+b.18};1f(11.19.1l){13 j=11.4p();i=j.2z.1c}13 k=s.5Z(11,h),l=k.1c,m=k.1e,h=k.1m.1c,o=k.1m.1e;k.1l.1c;13 r,t,u,q={17:0,15:0},v={14:l.14,18:l.18};1f(c.1y){13 w=d;"1m"==c.1n.1e&&(w+=f);13 x=w-1b.9d(n(45))*w,y="1O";11.29.3v().3e(/^(3P|3Q)$/)&&(y="15");13 z=c.1y.3w+2*c.1y.1i,r={14:z,18:z};1f(q.15=o.15-z/2+("15"==y?x:h.14-x),q.17=o.17-z/2+x,"15"==y){1f(0>q.15){13 A=1b.2V(q.15);v.14+=A,m.15+=A,q.15=0}}1G{13 B=q.15+z-v.14;B>0&&(v.14+=B)}1f(0>q.17){13 C=1b.2V(q.17);v.18+=C,m.17+=C,q.17=0}1f(11.19.1y.1s){13 D=11.19.1y.1s,E=D.31,F=D.1A;1f(t={14:r.14+2*E,18:r.18+2*E},u={17:q.17-E+F.y,15:q.15-E+F.x},"15"==y){1f(0>u.15){13 A=1b.2V(u.15);v.14+=A,m.15+=A,q.15+=A,u.15=0}}1G{13 B=u.15+t.14-v.14;B>0&&(v.14+=B)}1f(0>u.17){13 C=1b.2V(u.17);v.18+=C,m.17+=C,q.17+=C,u.17=0}}}13 G=k.2J;G.17+=m.17,G.15+=m.15;13 H={15:1b.1E(m.15+o.15+11.1i+11.19.2m),17:1b.1E(m.17+o.17+11.1i+11.19.2m)},I={1D:{1c:{14:1b.1E(v.14),18:1b.1E(v.18)}},21:{1c:{14:1b.1E(v.14),18:1b.1E(v.18)}},1H:{1c:l,1e:{17:1b.23(m.17),15:1b.23(m.15)}},1m:{1c:{14:1b.1E(h.14),18:1b.1E(h.18)},1e:{17:1b.23(o.17),15:1b.23(o.15)}},2J:{17:1b.23(G.17),15:1b.23(G.15)},2F:{1e:H}};1a 11.19.1y&&(I.1y={1c:{14:1b.1E(r.14),18:1b.1E(r.18)},1e:{17:1b.23(q.17),15:1b.23(q.15)}},11.19.1y.1s&&(I.2U={1c:{14:1b.1E(t.14),18:1b.1E(t.18)},1e:{17:1b.23(u.17),15:1b.23(u.15)}})),I}12 H(){13 b=11.2o(),c=11.2e();a(c.1j).1q(k(b.1D.1c)),a(c.4Z).1q(k(b.21.1c)),11.2T&&11.2T.1q(k(b.1D.1c)),a(11.1H).1q(a.1k(k(b.1H.1c),k(b.1H.1e))),11.1y&&(a(11.1y).1q(k(b.1y.1e)),b.2U&&a(11.2U.1j).1q(k(b.2U.1e))),a(c.38).1q(k(b.2F.1e))}12 I(a){11.2x=a||0,11.1s&&(11.1s.2x=11.2x)}12 J(a){11.7u(a),11.1P()}1a{51:f,7g:b,1P:g,1z:c,36:d,2e:o,2P:h,5e:i,7l:j,7k:l,4n:m,7f:A,6a:C,7e:F,6d:D,7t:E,7o:u,7p:v,4p:p,2o:G,52:H,7u:I,9e:J}}());13 w={3j:{},1t:12(b){1f(!b)1a 1r;13 c=1r,d=a(b).1X("2p-1V");1a d&&(c=11.3j[d]),c},30:12(a){11.3j[a.1V]=a},1z:12(a){13 b=11.1t(a);b&&(3G 11.3j[b.1V],b.1z())},4q:12(a){1a 1b.2Z/2-1b.6M(a,1b.4A(a)*1b.2Z)}};w.4r={4k:12(a,b){13 c=u.1t(a.1g),d=c.4p().1i.1c,e=11.4W(d.14,d.18,b,{3S:!1});1a{14:e.14,18:e.18}},9f:12(a,b,c){13 d=.5*a,e=m(1b.9g(d/l(d,b))),f=2E-e-90,g=o(n(f))*c,h=2*(d+g),i=h/a*b;1a{14:h,18:i}},4W:12(a,b,c){13 d=m(1b.79(.5*(b/a))),e=2E-d,f=1b.4A(n(e-90))*c,g=a+2*f,h=g*b/a;1a{14:g,18:h}},3T:12(b){13 c=u.1t(b.1g),d=b.19.31,e=r.78(c.29),g=(r.2I(c.29),w.4r.4k(b,d)),h={2z:{1c:{14:1b.1E(g.14),18:1b.1E(g.18)},1e:{17:0,15:0}}};1f(d){h.2X=[];28(13 i=0;d>=i;i++){13 j=w.4r.4k(b,i,{3S:!1}),k={1e:{17:h.2z.1c.18-j.18,15:e?d-i:(h.2z.1c.14-j.14)/2},1c:j};h.2X.2n(k)}}1G h.2X=[a.1k({},h.2z)];1a h},56:12(a,b,c){s.56(a,b.3k(),c)}},a.1k(x.3F,12(){12 b(){1a B.1t(11.1g)[0]}12 c(){1a u.1t(11.1g)}12 d(){11.36()}12 e(){11.1j&&(a(11.1j).1z(),11.1l=1r,11.1m=1r,11.1H=1r,11.1j=1r,11.1o={})}12 f(){}12 g(){11.36(),11.51();13 b=11.2e(),c=11.3k();11.1j=a("<2h>").1Y("9h")[0],a(b.1j).66(11.1j),c.2T&&a(b.1j).66(c.2T),c.2o(),a(11.1j).1q({17:0,15:0}),11.7v(),11.52()}12 h(){1a 11.19.1K/(11.19.31+1)}12 i(){13 b=11.3k(),c=b.2o(),d=11.2e(),e=11.2o(),f=11.19.31,g=w.4r.3T(11),h=b.29,i=r.5X(h),j={17:f,15:f};1f(d.19.1l){13 l=g.2X[g.2X.2a-1];"15"==i&&(j.15+=1b.1E(l.1c.18)),"17"==i&&(j.17+=1b.1E(l.1c.18))}13 m=b.1o.19,n=m.1n,o=m.1i;"1m"==d.19.1n.1e&&n&&(n+=o);13 p=e.1H.1c;a(11.1j).1Z(a(11.1H=1x.22("2h")).1Y("9i").1q(k(p))).1q(k(p)),a(1x.3d).1Z(a(11.2W=1x.22("3f"))),q.3J(11.2W,e.1H.1c),q.3p(11.2W);13 s=11.2W.3o("2d");s.2L=11.2x,a(11.1H).1Z(11.2W);28(13 u=f+1,v=0;f>=v;v++)s.2Q=t.2R(11.19.1Q,w.4q(v*(1/u))*(11.19.1K/u)),q.6Z(s,{14:c.1m.1c.14+2*v,18:c.1m.1c.18+2*v,17:j.17-v,15:j.15-v,1n:n+v});1f(b.19.1l){13 x={x:j.15,y:j.17},y=g.2X[0].1c,z=b.19.1l,A=o;A+=.5*z.14;13 B=b.19.1n&&"1m"==b.19.1n.1e?b.19.1n.2u||0:0;B&&(A+=B);13 C=o+B+.5*z.14-.5*y.14,D=1b.1E(n>C?n-C:0),E=b.3B&&b.3B.1l||{x:0,y:0},F=b.3B&&b.3B.5c||{x:0,y:0};1f(A+=1b.1U(D,b.19.1l.1A&&b.19.1l.1A[i&&/^(15|1O)$/.3h(i)?"y":"x"]||0),"17"==i||"1R"==i){1T(h){1h"3O":1h"4g":x.x+=A+E.x-F.x;1B;1h"4b":1h"58":1h"4f":1h"5a":x.x+=.5*c.1m.1c.14+E.x;1B;1h"3P":1h"4e":x.x+=c.1m.1c.14-(A-E.x+F.x)}"1R"==i&&(x.y+=c.1m.1c.18);28(13 v=0,G=g.2X.2a;G>v;v++){s.2Q=t.2R(11.19.1Q,w.4q(v*(1/u))*(11.19.1K/u));13 f=g.2X[v];s.2f(),"17"==i?(s.3s(x.x,x.y-v),s.1d(x.x-.5*f.1c.14,x.y-v),s.1d(x.x,x.y-v-f.1c.18),s.1d(x.x+.5*f.1c.14,x.y-v)):(s.3s(x.x,x.y+v),s.1d(x.x-.5*f.1c.14,x.y+v),s.1d(x.x,x.y+v+f.1c.18),s.1d(x.x+.5*f.1c.14,x.y+v)),s.2g(),s.34()}}1G{1T(h){1h"3R":1h"3Q":x.y+=A+E.y-F.y;1B;1h"4i":1h"5b":1h"4c":1h"59":x.y+=.5*c.1m.1c.18+E.y;1B;1h"4h":1h"4d":x.y+=c.1m.1c.18-(A-E.y+F.y)}"1O"==i&&(x.x+=c.1m.1c.14);28(13 v=0,G=g.2X.2a;G>v;v++){s.2Q=t.2R(11.19.1Q,w.4q(v*(1/u))*(11.19.1K/u));13 f=g.2X[v];s.2f(),"15"==i?(s.3s(x.x-v,x.y),s.1d(x.x-v,x.y-.5*f.1c.14),s.1d(x.x-v-f.1c.18,x.y),s.1d(x.x-v,x.y+.5*f.1c.14)):(s.3s(x.x+v,x.y),s.1d(x.x+v,x.y-.5*f.1c.14),s.1d(x.x+v+f.1c.18,x.y),s.1d(x.x+v,x.y+.5*f.1c.14)),s.2g(),s.34()}}}}12 j(){13 b=11.3k();b.2G,b.1n;13 e=b.2o(),g=(11.2e(),11.19.31),h=a.1k({},e.1m.1c);h.14+=2*g,h.18+=2*g;13 i,k;1f(b.19.1l){13 l=w.4r.3T(11);i=l.2z.1c,k=i.18}13 m=s.5Z(b,h,k),n=m.1c,o=m.1e,h=m.1m.1c,p=m.1m.1e,r=e.1H.1e,t=e.1m.1e,u={17:r.17+t.17-(p.17+g)+11.19.1A.y,15:r.15+t.15-(p.15+g)+11.19.1A.x},v=e.2J,x=e.21.1c,y={17:0,15:0};1f(0>u.17){13 z=1b.2V(u.17);y.17+=z,u.17=0,v.17+=z}1f(0>u.15){13 A=1b.2V(u.15);y.15+=A,u.15=0,v.15+=A}13 B={18:1b.1U(n.18+u.17,x.18+y.17),14:1b.1U(n.14+u.15,x.14+y.15)},C={15:1b.1E(y.15+e.1H.1e.15+e.1m.1e.15+b.1i+b.2m),17:1b.1E(y.17+e.1H.1e.17+e.1m.1e.17+b.1i+b.2m)},D={1D:{1c:B},21:{1c:x,1e:y},1j:{1c:n,1e:u},1H:{1c:n,1e:{17:1b.23(o.17),15:1b.23(o.15)}},1m:{1c:{14:1b.1E(h.14),18:1b.1E(h.18)},1e:{17:1b.23(p.17),15:1b.23(p.15)}},2J:v,2F:{1e:C}};1a D}12 l(){13 b=11.2o(),c=11.3k(),d=11.2e();1f(a(d.1j).1q(k(b.1D.1c)),a(d.4Z).1q(a.1k(k(b.21.1e),k(b.21.1c))),c.2T&&c.2T.1q(k(b.1D.1c)),d.19.1y){13 e=c.2o(),f=b.21.1e,g=e.1y.1e;1f(a(c.1y).1q(k({17:f.17+g.17,15:f.15+g.15})),d.19.1y.1s){13 h=e.2U.1e;a(c.2U.1j).1q(k({17:f.17+h.17,15:f.15+h.15}))}}a(11.1j).1q(a.1k(k(b.1j.1c),k(b.1j.1e))),a(11.1H).1q(k(b.1H.1c)),a(d.38).1q(k(b.2F.1e))}1a{51:f,1z:d,36:e,1P:g,2e:b,3k:c,2o:j,7w:h,7v:i,52:l}}());13 y={3j:{},1t:12(b){1f(!b)1a 1r;13 c=a(b).1X("2p-1V");1a c?11.3j[c]:1r},30:12(a){11.3j[a.1V]=a},1z:12(a){13 b=11.1t(a);b&&(3G 11.3j[b.1V],b.1z())}};a.1k(z.3F,12(){12 b(){1a B.1t(11.1g)[0]}12 c(){1a u.1t(11.1g)}12 d(){1a 11.19.1K/(11.19.31+1)}12 e(){11.36()}12 f(){11.1j&&(a(11.1j).1z(),11.1j=1r)}12 g(){11.36();13 c=(11.2e(),11.3k()),d=c.2o().1y.1c,e=a.1k({},d),f=11.19.31;e.14+=2*f,e.18+=2*f,a(c.1y).6e(a(11.1j=1x.22("2h")).1Y("9j")),a(1x.3d).1Z(a(11.4s=1x.22("3f"))),q.3J(11.4s,e),q.3p(11.4s);13 g=11.4s.3o("2d");g.2L=11.2x,a(11.1j).1Z(11.4s);28(13 h=e.14/2,i=e.18/2,j=d.18/2,k=f+1,l=0;f>=l;l++)g.2Q=t.2R(11.19.1Q,w.4q(l*(1/k))*(11.19.1K/k)),g.2f(),g.26(h,i,j+l,n(0),n(7d),!0),g.2g(),g.34()}1a{1P:g,1z:e,36:f,2e:b,3k:c,7w:d}}());13 B={2A:{},19:{3V:"6f",4C:9k},6X:12(){12 b(){13 b=["2B"];1S.2H.3H&&(b.2n("9l"),a(1x.3d).3U("2B",12(){1a 3t 0})),a.1w(b,12(b,c){a(1x.7x).9m(".3C .7m, .3C .9n-1D",c,12(b){b.9o(),b.9p(),B.6g(a(b.1C).5f(".3C")[0]).1I()})}),a(1N).3U("3J",a.1v(11.7y,11))}1a b}(),7y:12(){11.5g&&(1N.6h(11.5g),11.5g=1r),11.5g=d.4G(a.1v(12(){13 b=11.3I();a.1w(b,12(a,b){b.1e()})},11),9q)},5h:12(b){13 d,c=a(b).1X("2p-1V");1f(!c){13 e=11.6g(a(b).5f(".3C")[0]);e&&e.1g&&(c=a(e.1g).1X("2p-1V"))}1a c&&(d=11.2A[c])?d:3t 0},5P:12(a){13 b;1a d.2j(a)&&(b=11.5h(a)),b&&b.1g},1t:12(b){13 c=[];1f(d.2j(b)){13 e=11.5h(b);e&&(c=[e])}1G a.1w(11.2A,12(d,e){e.1g&&a(e.1g).7z(b)&&c.2n(e)});1a c},6g:12(b){1f(!b)1a 1r;13 c=1r;1a a.1w(11.2A,12(a,d){d.1F("1P")&&d.1j===b&&(c=d)}),c},9r:12(b){13 c=[];1a a.1w(11.2A,12(d,e){e.1g&&a(e.1g).7z(b)&&c.2n(e)}),c},1W:12(b){1f(d.2j(b)){13 c=b,e=11.1t(c)[0];e&&e.1W()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.1W()},11))},1I:12(b){1f(d.2j(b)){13 c=11.1t(b)[0];c&&c.1I()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.1I()},11))},33:12(b){1f(d.2j(b)){13 c=b,e=11.1t(c)[0];e&&e.33()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.33()},11))},4R:12(){a.1w(11.3I(),12(a,b){b.1I()})},2P:12(b){1f(d.2j(b)){13 c=b,e=11.1t(c)[0];e&&e.2P()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.2P()},11))},3I:12(){13 b=[];1a a.1w(11.2A,12(a,c){c.1L()&&b.2n(c)}),b},5S:12(b){13 c=!1;1a d.2j(b)&&a.1w(11.3I()||[],12(a,d){1a d.1g==b?(c=!0,!1):3t 0}),c},7A:12(){13 c,b=0;1a a.1w(11.2A,12(a,d){d.2k>b&&(b=d.2k,c=d)}),c},7B:12(){1>=11.3I().2a&&a.1w(11.2A,12(b,c){c.1F("1P")&&!c.19.2k&&a(c.1j).1q({2k:c.2k=+B.19.4C})})},30:12(a){11.2A[a.1V]=a},5i:12(b){13 c=11.5h(b);1f(c){13 d=a(c.1g).1X("2p-1V");3G 11.2A[d],c.1I(),c.1z()}},1z:12(b){d.2j(b)?11.5i(b):a(b).1w(a.1v(12(a,b){11.5i(b)},11))},6Y:12(){a.1w(11.2A,a.1v(12(a,b){b.1g&&!d.1g.5H(b.1g)&&11.5i(b.1g)},11))},5Q:12(a){11.19.3V=a||"6f"},5R:12(a){11.19.4C=a||0},5U:12(){a.1w(11.2A,a.1v(12(a,b){b.1o&&b.1o.2l&&(b.1o.2l.6i(),b.1o.2l=1r),b.27("3c",!1)},11)),i.6S()},6B:12(){12 f(d){13 e;1a e="2s"==a.1p(d)?{1g:c.25&&c.25.1g||b.25.1g,2v:d}:A(a.1k({},b.25),d)}12 g(f){1a b=1S.2C.7C,c=A(a.1k({},b),1S.2C.6j),d=1S.2C.6k.7C,e=A(a.1k({},d),1S.2C.6k.6j),g=h,h(f)}12 h(g){g.21=g.21&&1S.2C[g.21]?g.21:1S.2C[B.19.3V]?B.19.3V:"6f";13 h=g.21?a.1k({},1S.2C[g.21]||1S.2C[B.19.3V]):{},i=A(a.1k({},c),h),j=A(a.1k({},i),g);1f(j.2c){13 k=c.2c||{},l=b.2c;"4t"==a.1p(j.2c)&&(j.2c={3W:k.3W||l.3W,1p:k.1p||l.1p}),j.2c=A(a.1k({},l),j.2c)}1f(j.1m&&"2s"==a.1p(j.1m)&&(j.1m={1Q:j.1m,1K:1}),j.1i){13 m,n=c.1i||{},o=b.1i;m="2y"==a.1p(j.1i)?{2u:j.1i,1Q:n.1Q||o.1Q,1K:n.1K||o.1K}:A(a.1k({},o),j.1i),j.1i=0===m.2u?!1:m}1f(j.1n){13 p;p="2y"==a.1p(j.1n)?{2u:j.1n,1e:c.1n&&c.1n.1e||b.1n.1e}:A(a.1k({},b.1n),j.1n),j.1n=0===p.2u?!1:p}13 q,s=s=j.1u&&j.1u.1C||"2s"==a.1p(j.1u)&&j.1u||c.1u&&c.1u.1C||"2s"==a.1p(c.1u)&&c.1u||b.1u&&b.1u.1C||b.1u,t=j.1u&&j.1u.1D||c.1u&&c.1u.1D||b.1u&&b.1u.1D||B.2r.6l(s);1f(j.1u?"2s"==a.1p(j.1u)?q={1C:j.1u,1D:B.2r.7D(j.1u)}:(q={1D:t,1C:s},j.1u.1D&&(q.1D=j.1u.1D),j.1u.1C&&(q.1C=j.1u.1C)):q={1D:t,1C:s},"2M"==j.1C){13 u=r.2I(q.1C);q.1C="1J"==u?q.1C.61(/(15|1O)/,"2t"):q.1C.61(/(17|1R)/,"2t")}j.1u=q;13 v;1f("2M"==j.1C?(v=a.1k({},b.1A),a.1k(v,1S.2C.6j.1A||{}),g.21&&a.1k(v,(1S.2C[g.21]||1S.2C[B.19.3V]).1A||{}),v=B.2r.7E(b.1A,b.1u,q.1C,!0),g.1A&&(v=a.1k(v,g.1A||{})),j.3X=0):v={x:j.1A.x,y:j.1A.y},j.1A=v,j.1y&&j.7F){13 w=a.1k({},1S.2C.6k[j.7F]),x=A(a.1k({},e),w);1f(x.2q&&a.1w(["6b","6c"],12(b,c){13 f=x.2q[c],g=e.2q&&e.2q[c];1f(f.1m){13 h=g&&g.1m;1f("2y"==a.1p(f.1m))f.1m={1Q:h&&h.1Q||d.2q[c].1m.1Q,1K:f.1m};1G 1f("2s"==a.1p(f.1m)){13 i=h&&"2y"==a.1p(h.1K)&&h.1K||d.2q[c].1m.1K;f.1m={1Q:f.1m,1K:i}}1G f.1m=A(a.1k({},d.2q[c].1m),f.1m)}1f(f.1i){13 j=g&&g.1i;f.1i="2y"==a.1p(f.1i)?{1Q:j&&j.1Q||d.2q[c].1i.1Q,1K:f.1i}:A(a.1k({},d.2q[c].1i),f.1i)}}),x.1s){13 z=e.1s&&e.1s.3D&&e.1s.3D==5x?e.1s:d.1s;x.1s.3D&&x.1s.3D==5x&&(z=A(z,x.1s)),x.1s=z}j.1y=x}1f(j.1s){13 C;C="4t"==a.1p(j.1s)?c.1s&&"4t"==a.1p(c.1s)?b.1s:c.1s?c.1s:b.1s:A(a.1k({},b.1s),j.1s||{}),"2y"==a.1p(C.1A)&&(C.1A={x:C.1A,y:C.1A}),j.1s=C}1f(j.1l){13 D={};D="4t"==a.1p(j.1l)?A({},b.1l):A(A({},b.1l),a.1k({},j.1l)),"2y"==a.1p(D.1A)&&(D.1A={x:D.1A,y:D.1A}),j.1l=D}1f(j.2Y&&("2s"==a.1p(j.2Y)?j.2Y={5j:j.2Y,7G:!0}:"4t"==a.1p(j.2Y)&&(j.2Y=j.2Y?{5j:"4T",7G:!0}:!1)),j.25&&"2B-9s"==j.25&&(j.7H=!0,j.25=!1),j.25)1f(a.71(j.25)){13 E=[];a.1w(j.25,12(a,b){E.2n(f(b))}),j.25=E}1G j.25=[f(j.25)];1a j.2K&&"2s"==a.1p(j.2K)&&(j.2K=[""+j.2K]),j.2m=0,j.1M&&(1N.6m||(j.1M=!1)),j}13 b,c,d,e;1a g}()};B.2r=12(){12 c(c){13 d=r.2N(c),e=d[1],f=d[2],g=r.2I(c),h=a.1k({1J:!0,2b:!0},20[1]||{});1a"1J"==g?(h.2b&&(e=b[e]),h.1J&&(f=b[f])):(h.2b&&(f=b[f]),h.1J&&(e=b[e])),e+f}12 f(a){13 d=r.2N(a);1a c(d[1]+b[d[2]])}12 h(b,c){a(b.1j).1q({17:c.17+"2w",15:c.15+"2w"})}12 j(a,b,d,e){13 g=y(a,b,d,e),h=d&&"2s"==7I d.1p?d.1p:"";1f(/9t$/.3h(h),1===g.3Y.3Z)1a l(a,g),g;13 m=b,n=e,o={1J:!g.3Y.1J,2b:!g.3Y.2b},p={1J:!1,2b:!1},q=r.2I(b);1a((p.2b="1J"==q&&o.2b)||(p.1J="2b"==q&&o.1J))&&(m=c(b,p),n=c(e,p),g=y(a,m,d,n),1===g.3Y.3Z)?(l(a,g),g):(g=k(g,a),l(a,g),g)}12 k(a,b){13 c=z(b),d=c.1c,e=c.1e,f=u.1t(b.1g).1o.1u[a.1u.1D].1D.1c,g=a.1e,h={17:0,15:0,3A:[]};1a e.15>g.15&&(h.15=e.15-g.15,h.3A.2n("15"),a.1e.15=e.15),e.17>g.17&&(h.17=g.17-e.17,h.3A.2n("17"),a.1e.17=e.17),e.15+d.14<g.15+f.14&&(h.15=e.15+d.14-(g.15+f.14),h.3A.2n("1O"),a.1e.15=e.15+d.14-f.14),e.17+d.18<g.17+f.18&&(h.17=e.17+d.18-(g.17+f.18),h.3A.2n("1R"),a.1e.17=e.17+d.18-f.18),a.7J=h,a}12 l(a,b){a.5e(b.1u.1D,b.3Y.4l,b.7J),h(a,b.1e)}12 m(a){1a a&&(/^2M|2B|3H$/.3h("2s"==7I a.1p&&a.1p||"")||a.5G>=0)}12 n(a,b,c){1a a>=b&&c>=a}12 o(a,b,c,d){13 e=n(a,c,d),f=n(b,c,d);1f(e&&f)1a b-a;1f(e&&!f)1a d-a;1f(!e&&f)1a b-c;13 g=n(c,a,b),h=n(d,a,b);1a g&&h?d-c:g&&!h?b-c:!g&&h?d-a:0}12 q(a,b){1a o(a.1e.15,a.1e.15+a.1c.14,b.1e.15,b.1e.15+b.1c.14)*o(a.1e.17,a.1e.17+a.1c.18,b.1e.17,b.1e.17+b.1c.18)}12 s(a,b){13 c=a.1c.14*a.1c.18;1a c?q(a,b)/c:0}12 t(a,b){13 c=r.2N(b),d=r.2I(b),e={15:0,17:0};1f("1J"==d){1T(c[2]){1h"2t":1h"2S":e.15=.5*a.14;1B;1h"1O":e.15=a.14}"1R"==c[1]&&(e.17=a.18)}1G{1T(c[2]){1h"2t":1h"2S":e.17=.5*a.18;1B;1h"1R":e.17=a.18}"1O"==c[1]&&(e.15=a.14)}1a e}12 v(b){13 c=d.1g.4L(b),e=d.1g.4H(b),f={17:a(1N).4I(),15:a(1N).4J()};1a c.15+=-1*(e.15-f.15),c.17+=-1*(e.17-f.17),c}12 y(b,e,f,g){13 h,i,j,k=u.1t(b.1g),l=k.19,n=l.1A,o=m(f);1f(o||!f){1f(j={14:24,18:24},o){13 p=d.5F(f);h={17:p.y-.5*j.18+6,15:p.x-.5*j.14+6}}1G{13 q=b.1o.2v;h={17:(q?q.y:0)-.5*j.18+6,15:(q?q.x:0)-.5*j.14+6}}b.1o.2v={x:h.15,y:h.17}}1G h=v(f),j={14:a(f).7K(),18:a(f).7L()};1f(l.1l&&"2M"!=l.1C){13 y=r.2N(g),A=r.2N(e),C=r.2I(g),D=k.1o.19,E=k.4p().1i.1c,F=D.1n,G=D.1i,H=F&&"1m"==l.1n.1e?F:0,I=F&&"1i"==l.1n.1e?F:F+G,J=G+H+.5*l.1l.14-.5*E.14,K=I>J?I-J:0;4u=1b.1E(G+H+.5*l.1l.14+K+l.1l.1A["1J"==C?"x":"y"]),"1J"==C&&"15"==y[2]&&"15"==A[2]||"1O"==y[2]&&"1O"==A[2]?(j.14-=2*4u,h.15+=4u):("2b"==C&&"17"==y[2]&&"17"==A[2]||"1R"==y[2]&&"1R"==A[2])&&(j.18-=2*4u,h.17+=4u)}i=a.1k({},h);13 L=o?c(l.1u.1D):l.1u.1C,M=t(j,L),N=t(j,g);({17:h.17+M.17+n.y,15:h.15+M.15+n.x}),h={15:h.15+N.15,17:h.17+N.17};13 P=a.1k({},n);P=x(P,L,g,"2M"==k.19.1C),h.17+=P.y,h.15+=P.x;13 k=u.1t(b.1g),Q=k.1o.1u,R=a.1k({},Q[e]),S={x:0,y:0},y=r.2N(g);1f("2t"!=y[2]){13 C=C=r.2I(g),T=B.2r.6l(g,"2b"==C?{1J:!0,2b:!1}:{1J:!1,2b:!0});e==T&&(S.y=k.3B.5c.y,S.x=k.3B.5c.x)}13 U={17:h.17-R.2J.17-S.y,15:h.15-R.2J.15-S.x};R.1D.1e=U;13 V={1J:!0,2b:!0},W={x:0,y:0};1f(b.19.2Y){13 X=z(b),Y=b.19.1s?w.1t(b.1g):k,Z=Y.2o().1D.1c;V.3Z=s({1c:Z,1e:U},X),1>V.3Z&&((U.15<X.1e.15||U.15+Z.14>X.1e.15+X.1c.14)&&(V.1J=!1,W.x=U.15<X.1e.15?U.15-X.1e.15:U.15+Z.14-(X.1e.15+X.1c.14)),(U.17<X.1e.17||U.17+Z.18>X.1e.17+X.1c.18)&&(V.2b=!1,W.y=U.17<X.1e.17?U.17-X.1e.17:U.17+Z.18-(X.1e.17+X.1c.18)))}1G V.3Z=1;V.4l=W;13 $=Q[e].1H,7M=s({1c:j,1e:i},{1c:$.1c,1e:{17:U.17+$.1e.17,15:U.15+$.1e.15}});1a{1e:U,3Z:{1C:7M},3Y:V,1u:{1D:e,1C:g}}}12 z(b){13 c={17:a(1N).4I(),15:a(1N).4J()},e=b.19,f=e.1C;("2M"==f||"4F"==f)&&(f=b.1g);13 g=a(f).5f(e.2Y.5j).7i()[0];1f(!g||"4T"==e.2Y.5j)1a{1c:p.4T(),1e:c};13 h=d.1g.4L(g),i=d.1g.4H(g);1a h.15+=-1*(i.15-c.15),h.17+=-1*(i.17-c.17),{1c:{14:a(g).5V(),18:a(g).5W()},1e:h}}13 b={15:"1O",1O:"15",17:"1R",1R:"17",2t:"2t",2S:"2S"};e.3m&&9>e.3m||e.4M&&2>e.4M||e.5M&&9u>e.5M;13 x=12(){13 a=[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]],b={3R:0,3O:0,4b:1,58:1,3P:2,3Q:2,4c:5,59:5,4d:8,4e:8,4f:7,5a:7,4g:6,4h:6,4i:3,5b:3};1a 12(c,d,e,f){13 g=a[b[d]],h=a[b[e]],i=[1b.65(.5*1b.2V(g[0]-h[0]))?-1:1,1b.65(.5*1b.2V(g[1]-h[1]))?-1:1];1a r.35(d)||!r.35(e)||f||("1J"==r.2I(e)?i[0]=0:i[1]=0),{x:i[0]*c.x,y:i[1]*c.y}}}();1a{1t:y,4P:j,6l:c,7D:f,7N:v,7E:x,6n:m}}(),B.2r.4S={x:0,y:0},a(1x).6W(12(){13 b=B.2r;a(1x).3U("5k",12(a){b.4S={x:a.5G,y:a.6H}})}),B.53=12(){12 b(){a(1x.3d).1Z(a(1x.22("2h")).1Y("9v").1Z(a(1x.22("2h")).1Y("3C").1Z(a(11.1j=1x.22("2h")).1Y("7O"))))}12 c(b){1a{14:a(b).5V(),18:a(b).5W()}}12 e(b){13 d=c(b),e=b.4K;1a e&&a(e).1q({14:d.14+"2w"})&&c(b).18>d.18&&d.14++,a(e).1q({14:"62%"}),d}12 f(b,c,e){11.1j||11.1P();13 f=b.19,g=a.1k({1M:!1},20[3]||{});!f.7P&&!d.2j(c)||a(c).1X("7Q")||(f.7P&&"2s"==a.1p(c)&&(b.39=a("#"+c)[0],c=b.39),!b.40&&c&&d.1g.5H(c)&&(a(b.39).1X("7R",a(b.39).1q("7S")),b.40=1x.22("2h"),a(b.39).6e(a(b.40).1I())));13 h=1x.22("2h");a(11.1j).1Z(a(h).1Y("7h 9w").1Z(c)),d.2j(c)&&a(c).1W(),f.21&&a(h).1Y("9x"+b.19.21);13 i=a(h).67("7T[4m]").9y(12(){1a!(a(11).3g("18")&&a(11).3g("14"))});1f(i.2a>0&&!b.1F("3E")){b.27("3E",!0),f.1M&&(g.1M||b.1M||(b.1M=b.6o(f.1M)),b.1F("1L")&&(b.1e(),a(b.1j).1W()),b.1M.6p());13 j=0,k=1b.1U(9z,9A*(i.2a||0));b.2i("3E"),b.41("3E",a.1v(12(){i.1w(12(){11.6q=12(){}}),j>=i.2a||(11.5l(b,h),e&&e())},11),k),a.1w(i,a.1v(12(c,d){13 f=3q 9B;f.6q=a.1v(12(){f.6q=12(){};13 c=f.14,g=f.18,k=a(d).3g("14"),l=a(d).3g("18");k&&l||(!k&&l?(c=1b.23(l*c/g),g=l):!l&&k&&(g=1b.23(k*g/c),c=k),a(d).3g({14:c,18:g}),j++),j==i.2a&&(b.2i("3E"),b.1M&&(b.1M.1z(),b.1M=1r),b.1F("1L")&&a(b.1j).1I(),11.5l(b,h),e&&e())},11),f.4m=d.4m},11))}1G 11.5l(b,h),e&&e()}12 g(b,c){13 d=e(c),f={14:d.14-(2O(a(c).1q("2m-15"))||0)-(2O(a(c).1q("2m-1O"))||0),18:d.18-(2O(a(c).1q("2m-17"))||0)-(2O(a(c).1q("2m-1R"))||0)};b.19.3i&&"2y"==a.1p(b.19.3i)&&f.14>b.19.3i&&(a(c).1q({14:b.19.3i+"2w"}),d=e(c)),b.1o.2G=d,a(b.38).7U(c)}1a{1P:b,42:f,5l:g,69:e}}(),a.1k(C.3F,12(){12 b(a,b,c){11.1o.3b[a]=d.4G(b,c)}12 c(a){1a 11.1o.3b[a]}12 e(a){11.1o.3b[a]&&(1N.6h(11.1o.3b[a]),3G 11.1o.3b[a])}12 f(){a.1w(11.1o.3b,12(a,b){1N.6h(b)}),11.1o.3b=[]}12 g(b,c,d,e){c=c;13 f=a.1v(d,e||11);11.1o.5A.2n({1g:b,7V:c,7W:f}),a(b).3U(c,f)}12 h(){a.1w(11.1o.5A,12(b,c){a(c.1g).7X(c.7V,c.7W)})}12 j(a,b){11.1o.2q[a]=b}12 l(a){1a 11.1o.2q[a]}12 m(){11.2D(11.1g,"4o",11.5m),11.2D(11.1g,"54",a.1v(12(a){11.6r(a)},11)),11.19.2K&&a.1w(11.19.2K,a.1v(12(b,c){13 d=!1;"2B"==c&&(11.19.25&&a.1w(11.19.25,12(a,b){1a"4F"==b.1g&&"2B"==b.2v?(d=!0,!1):3t 0}),11.27("5B",d)),11.2D(11.1g,c,"2B"==c?d?11.33:11.1W:a.1v(12(){11.7Y()},11))},11)),11.19.25?a.1w(11.19.25,a.1v(12(b,c){13 d;1T(c.1g){1h"4F":1f(11.1F("5B")&&"2B"==c.2v)1a;d=11.1g;1B;1h"1C":d=11.1C}d&&11.2D(d,c.2v,"2B"==c.2v?11.1I:a.1v(12(){11.6s()},11))},11)):11.19.7Z&&11.19.2K&&!a.6t("2B",11.19.2K)>-1&&11.2D(11.1g,"54",a.1v(12(){11.2i("1W")},11));13 b=!1;!11.19.9C&&11.19.2K&&((b=a.6t("5k",11.19.2K)>-1)||a.6t("5n",11.19.2K)>-1)&&"2M"==11.1C&&11.2D(11.1g,b?"5k":"5n",12(a){11.1F("4E")&&11.1e(a)})}12 n(){11.2D(11.1j,1S.2H.3H?"5n":"4o",11.5m),11.2D(11.1j,"54",11.6r),11.2D(11.1j,1S.2H.3H?"5n":"4o",a.1v(12(){11.5o("4v")||11.1W()},11)),11.19.25&&a.1w(11.19.25,a.1v(12(b,c){13 d;1T(c.1g){1h"1D":d=11.1j}d&&11.2D(d,c.2v,c.2v.3e(/^(2B|5k|4o)$/)?11.1I:a.1v(12(){11.6s()},11))},11))}12 o(a,b,c){13 d=u.1t(11.1g);d&&d.5e(a,b,c)}12 p(a){13 b=u.1t(11.1g);b&&b.4n(a)}12 q(){11.4n(11.19.1u.1D)}12 r(){a(11.1j=1x.22("2h")).1Y("3C"),11.80()}12 s(){11.1P();13 a=u.1t(11.1g);a?a.1P():(3q v(11.1g),11.27("4E",!0))}12 t(){11.1F("1P")||(a(1x.3d).1Z(a(11.1j).1q({15:"-5p",17:"-5p",2k:11.2k}).1Z(a(11.4Z=1x.22("2h")).1Y("9D")).1Z(a(11.38=1x.22("2h")).1Y("7O"))),a(11.1j).1Y("9E"+11.19.21),11.19.7H&&(a(11.1g).1Y("81"),11.2D(1x.7x,"2B",a.1v(12(b){1f(11.1L()){13 c=a(b.1C).5f(".3C, .81")[0];(!c||c&&c!=11.1j&&c!=11.1g)&&11.1I()}},11))),1S.2H.48&&(11.19.4w||11.19.3X)&&(11.5q(11.19.4w),a(11.1j).1Y("6u")),11.82(),11.27("1P",!0),B.30(11))}12 w(){13 c;11.2F,11.40&&11.39&&((c=a(11.39).1X("7R"))&&a(11.39).1q({7S:c}),a(11.40).6e(11.39).1z(),11.40=1r)}12 x(){d.44(a.1v(12(){11.83()},11)),11.84(),11.6v(),d.44(a.1v(12(){a(11.1j).67("7T[4m]").7X("9F")},11)),u.1z(11.1g),11.1F("1P")&&11.1j&&(a(11.1j).1z(),11.1j=1r);13 c,b="5z";(c=a(11.1g).1X(b))&&a(11.1g).3g("5y",c).85("5z"),a(11.1g).85("2p-1V")}12 y(b){13 c=a.1k({4x:11.19.4x,1M:!1},20[1]||{});11.1P(),11.1F("1L")&&a(11.1j).1I(),B.53.42(11,b,a.1v(12(){13 b=11.1F("1L");b||11.27("1L",!0),11.86(),b||11.27("1L",!1),11.1F("1L")&&(a(11.1j).1I(),11.1e(),11.5r(),a(11.1j).1W()),11.27("3c",!0),c.4x&&c.4x(11.38.4y,11.1g),c.4z&&c.4z()},11),{1M:c.1M})}12 z(b){13 c,d={47:11.2F,1p:11.19.2c.1p,1X:11.19.2c.1X||{},87:11.19.2c.87||"7U"};1f(!(11.1F("2l")||11.19.2c.3W&&11.1F("3c"))){1f(11.19.2c.3W&&(c=i.1t(d)))1a 11.6w(c,{4z:a.1v(12(){11.1F("1L")&&11.19.43&&11.19.43(11.38.4y,11.1g)},11)}),3t 0;11.27("2l",!0),11.19.1M&&(11.1M?11.1M.6p():(11.1M=11.6o(11.19.1M),11.27("3c",!1)),11.1e(b)),11.1o.2l&&(11.1o.2l.6i(),11.1o.2l=1r),11.1o.2l=a.2c(a.1k({},d,{9G:a.1v(12(b,c,e){0!==e.9H&&(i.4P(d,e.4O),11.6w(e.4O,{4z:a.1v(12(){11.27("2l",!1),11.1F("1L")&&11.19.43&&11.19.43(11.38.4y,11.1g),11.1M&&(11.1M.1z(),11.1M=1r)},11)}))},11)}))}}12 A(b){13 c=a.1k({1M:11.19.1M&&11.1M},20[1]||{});11.42(b,c)}12 C(){13 b=1x.22("2h");a(b).1X("7Q",!0);13 c=6m.4Q(b,a.1k({},20[0]||{})),d=6m.5Y(b);1a a(b).1q(k(d)),11.42(b,{4x:!1,4z:12(){c.6p()}}),c}12 E(){1f(11.1F("1P")&&!11.19.2k){13 b=B.7A();b&&b!=11&&11.2k<=b.2k&&a(11.1j).1q({2k:11.2k=b.2k+1})}}12 F(){13 a=u.1t(11.1g);a&&(a.2P(),11.1L()&&11.1e())}12 G(a){1f(1S.2H.48){a=a||0;13 b=11.1j.9I;b.9J=a+"5s",b.9K=a+"5s",b.9L=a+"5s",b.9M=a+"5s"}}12 H(b){11.2i("1I"),11.2i("4v"),11.1F("1L")||11.5o("1W")||11.41("1W",a.1v(12(){11.2i("1W"),11.1W(b)},11),11.19.7Z||1)}12 I(b){1f(11.2i("1I"),11.2i("4v"),!11.1L()){1f("12"==a.1p(11.2F)||"12"==a.1p(11.1o.5t)){"12"!=a.1p(11.1o.5t)&&(11.1o.5t=11.2F);13 c=11.1o.5t(11.1g)||!1;1f(c!=11.1o.5C&&(11.1o.5C=c,11.27("3c",!1),11.6v()),11.2F=c,!c)1a}11.19.9N&&B.4R(),11.27("1L",!0),11.19.2c?11.88(b):11.1F("3c")||11.42(11.2F),11.1F("4E")&&11.1e(b),11.5r(),11.19.5u&&d.44(a.1v(12(){11.5m()},11)),"12"==a.1p(11.19.43)&&(!11.19.2c||11.19.2c&&11.19.2c.3W&&11.1F("3c"))&&11.19.43(11.38.4y,11.1g),1S.2H.48&&(11.19.4w||11.19.3X)&&(11.5q(11.19.4w),a(11.1j).1Y("89").8a("6u")),a(11.1j).1W()}}12 J(){11.2i("1W"),11.1F("1L")&&(11.27("1L",!1),1S.2H.48&&(11.19.4w||11.19.3X)?(11.5q(11.19.3X),a(11.1j).8a("89").1Y("6u"),11.41("4v",a.1v(11.6x,11),11.19.3X)):11.6x(),11.1o.2l&&(11.1o.2l.6i(),11.1o.2l=1r,11.27("2l",!1)))}12 K(){11.1F("1P")&&(a(11.1j).1q({15:"-5p",17:"-5p"}),B.7B(),"12"!=a.1p(11.19.8b)||11.1M||11.19.8b(11.38.4y,11.1g))}12 L(){11.2i("1W"),!11.5o("1I")&&11.1F("1L")&&11.41("1I",a.1v(12(){11.2i("1I"),11.2i("4v"),11.1I()},11),11.19.9O||1)}12 M(a){11[11.1L()?"1I":"1W"](a)}12 N(){1a 11.1F("1L")}12 O(){11.27("4D",!0),11.1F("1L")&&11.5r(),11.19.5u&&11.2i("6y")}12 P(){11.27("4D",!1),11.19.5u&&11.41("6y",a.1v(12(){11.2i("6y"),11.1F("4D")||11.1I()},11),11.19.5u)}13 D=12(b){1f(11.1L()){13 c;1f("2M"==11.19.1C){13 e=B.2r.6n(b),f=B.2r.4S;1f(e)f.x||f.y?(11.1o.2v={x:f.x,y:f.y},c=1r):c=b;1G{1f(f.x||f.y)11.1o.2v={x:f.x,y:f.y};1G 1f(!11.1o.2v){13 g=B.2r.7N(11.1g);11.1o.2v={x:g.15,y:g.17}}c=1r}}1G c=11.1C;1f(B.2r.4P(11,11.19.1u.1D,c,11.19.1u.1C),b&&B.2r.6n(b)){13 h={14:a(11.1j).7K(),18:a(11.1j).7L()},i=d.5F(b),g=d.1g.4L(11.1j);i.x>=g.15&&i.x<=g.15+h.14&&i.y>=g.17&&i.y<=g.17+h.18&&d.44(a.1v(12(){11.2i("1I")},11))}}};1a{1P:t,6E:r,86:s,80:m,82:n,1W:I,1I:J,6x:K,33:M,1L:N,7Y:H,6s:L,5q:G,27:j,1F:l,5m:O,6r:P,5o:c,41:b,2i:e,84:f,2D:g,83:h,5e:o,4n:p,9P:q,2P:F,42:y,88:z,6w:A,6o:C,1e:D,5r:E,6v:w,1z:x}}()),1S.3p()})(46);', 62, 610, "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|function|var|width|left||top|height|options|return|Math|dimensions|lineTo|position|if|element|case|border|container|extend|stem|background|radius|_cache|type|css|null|shadow|get|hook|proxy|each|document|closeButton|remove|offset|break|target|tooltip|ceil|getState|else|bubble|hide|horizontal|opacity|visible|spinner|window|right|build|color|bottom|Tipped|switch|max|uid|show|data|addClass|append|arguments|skin|createElement|round||hideOn|arc|setState|for|_hookPosition|length|vertical|ajax||getTooltip|beginPath|closePath|div|clearTimer|isElement|zIndex|xhr|padding|push|getOrderLayout|tipped|states|Position|string|middle|size|event|px|_globalAlpha|number|box|tooltips|click|Skins|setEvent|180|content|contentDimensions|support|getOrientation|anchor|showOn|globalAlpha|mouse|split|parseInt|refresh|fillStyle|hex2fill|center|iframeShim|closeButtonShadow|abs|bubbleCanvas|blurs|containment|PI|add|blur|scripts|toggle|fill|isCenter|cleanup|cornerOffset|contentElement|inlineContent|_stemCorrection|timers|updated|body|match|canvas|attr|test|maxWidth|shadows|getSkin|_adjustment|IE|indexOf|getContext|init|new|devicePixelRatio|moveTo|void|charAt|toLowerCase|diameter|hookPosition|layout|stemLayout|sides|_corrections|t_Tooltip|constructor|preloading_images|prototype|delete|touch|getVisible|resize|x1|y1|x2|y2|topleft|topright|righttop|lefttop|math|getLayout|bind|defaultSkin|cache|fadeOut|contained|overlap|inlineMarker|setTimer|update|onShow|defer||jQuery|url|cssTransitions|items|createFillStyle|topmiddle|rightmiddle|rightbottom|bottomright|bottommiddle|bottomleft|leftbottom|leftmiddle|regex|getBorderDimensions|correction|src|setHookPosition|mouseenter|getStemLayout|transition|Stem|closeButtonCanvas|boolean|sideOffset|fadeTransition|fadeIn|afterUpdate|firstChild|callback|cos|000|startingZIndex|active|skinned|self|delay|cumulativeScrollOffset|scrollTop|scrollLeft|parentNode|cumulativeOffset|Gecko|Chrome|responseText|set|create|hideAll|mouseBuffer|viewport|min|G_vmlCanvasManager|getCenterBorderDimensions|substring|skins|skinElement||prepare|order|UpdateQueue|mouseleave||rotate|borderRadius|topcenter|rightcenter|bottomcenter|leftcenter|corner|corrections|setHookPositionAndStemCorrection|closest|_resizeTimer|_getTooltip|_remove|selector|mousemove|_updateTooltip|setActive|touchmove|getTimer|10000px|setFadeDuration|raise|ms|contentFunction|hideAfter|console|in|Object|title|tipped_restore_title|events|toggles|fnCallContent|call|apply|pointer|pageX|isAttached|RegExp|parseFloat|Opera|opera|WebKit|required|available|findElement|setDefaultSkin|setStartingZIndex|isVisibleByElement|undefined|clearAjaxCache|innerWidth|innerHeight|getSide|getDimensions|getBubbleLayout|nullifyCornerOffset|replace|100|defaultCloseButton|hoverCloseButton|floor|prepend|find|auto|getMeasureElementDimensions|drawCloseButtonState|default|hover|_drawBackgroundPath|before|dark|getByTooltipElement|clearTimeout|abort|reset|CloseButtons|getInversedPosition|Spinners|isPointerEvent|insertSpinner|play|onload|setIdle|hideDelayed|inArray|t_hidden|_restoreInlineContent|afterAjaxUpdate|_hide|idle|warn|_stemPosition|createOptions|getAttribute|getElementById|_preBuild|Array|concat|pageY|version|AppleWebKit|MobileSafari|check|pow|Za|checked|notified|toUpperCase|param|clear|try|DocumentTouch|catch|ready|startDelegating|removeDetached|drawRoundedRectangle|fillRect|isArray|Gradient|addColorStops|positions|toOrientation|side|toDimension|isCorner|atan|red|green|blue|360|drawBubble|drawCloseButton|createHookCache|t_ContentContainer|first|25000px|setStemCorrection|setAdjustment|t_Close|closeButtonShift|closeButtonMouseover|closeButtonMouseout|CloseButton|stemOffset|backgroundRadius|_drawBorderPath|setGlobalAlpha|drawBackground|getBlurOpacity|documentElement|onWindowResize|is|getHighestTooltip|resetZ|base|getTooltipPositionFromTarget|adjustOffsetBasedOnHooks|closeButtonSkin|flip|hideOnClickOutside|typeof|adjustment|outerWidth|outerHeight|_|getAbsoluteOffset|t_Content|inline|isSpinner|tipped_restore_inline_display|display|img|html|eventName|handler|unbind|showDelayed|showDelay|createPreBuildObservers|t_hideOnClickOutside|createPostBuildObservers|clearEvents|clearTimers|removeData|_buildSkin|dataType|ajaxUpdate|t_visible|removeClass|onHide|log|sqrt|object|setAttribute|slice|wrap|nodeType|setTimeout|do|while|exec|attachEvent|MSIE|KHTML|rv|Apple|Mobile|Safari|navigator|userAgent|fn|jquery|z_|z0|requires|_t_uid_|ontouchstart|instanceof|WebKitTransitionEvent|TransitionEvent|OTransitionEvent|createEvent|scale|initElement|drawPixelArray|createLinearGradient|addColorStop|spacing|rgba|join|fff|255|hue|saturation|brightness|0123456789abcdef|hex2rgb|getSaturatedBW|init_|t_Bubble||iframe|t_iframeShim|frameBorder|javascript|15000px|t_CloseButtonShift|lineCap|t_CloseState|translate|stemCorrection|270|lineWidth|sin|setOpacity|getCenterBorderDimensions2|acos|t_Shadow|t_ShadowBubble|t_CloseButtonShadow|999999|touchstart|delegate|close|preventDefault|stopPropagation|200|getBySelector|outside|move|530|t_UpdateQueue|t_clearfix|t_Content_|filter|8e3|750|Image|fixed|t_Skin|t_Tooltip_|load|success|status|style|MozTransitionDuration|webkitTransitionDuration|OTransitionDuration|transitionDuration|hideOthers|hideDelay|resetHookPosition".split("|"), 0, {})),
    function(a) {
        a.fn.popupWindow = function(b) {
            return this.each(function() {
                a(this).click(function() {
                    a.fn.popupWindow.defaultSettings = {
                        centerBrowser: 0,
                        centerScreen: 0,
                        height: 500,
                        left: 0,
                        location: 0,
                        menubar: 0,
                        resizable: 0,
                        scrollbars: 0,
                        status: 0,
                        width: 500,
                        windowName: null,
                        windowURL: null,
                        top: 0,
                        toolbar: 0
                    }, settings = a.extend({}, a.fn.popupWindow.defaultSettings, b || {});
                    var c = "height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars + ",status=" + settings.status + ",resizable=" + settings.resizable + ",location=" + settings.location + ",menuBar=" + settings.menubar;
                    settings.windowName = this.name || settings.windowName, settings.windowURL = this.href || settings.windowURL;
                    var d, e;
                    return settings.centerBrowser ? (a.browser.msie ? (d = window.screenTop - 120 + ((document.documentElement.clientHeight + 120) / 2 - settings.height / 2), e = window.screenLeft + ((document.body.offsetWidth + 20) / 2 - settings.width / 2)) : (d = window.screenY + (window.outerHeight / 2 - settings.height / 2), e = window.screenX + (window.outerWidth / 2 - settings.width / 2)), window.open(settings.windowURL, settings.windowName, c + ",left=" + e + ",top=" + d).focus()) : settings.centerScreen ? (d = (screen.height - settings.height) / 2, e = (screen.width - settings.width) / 2, window.open(settings.windowURL, settings.windowName, c + ",left=" + e + ",top=" + d).focus()) : window.open(settings.windowURL, settings.windowName, c + ",left=" + settings.left + ",top=" + settings.top).focus(), !1
                })
            })
        }
    }(jQuery),
    function(a) {
        a.fn.UItoTop = function(b) {
            var c = {
                    text: "To Top",
                    min: 625,
                    inDelay: 600,
                    outDelay: 400,
                    containerID: "toTop",
                    containerHoverID: "toTopHover",
                    scrollSpeed: 1200,
                    easingType: "linear"
                },
                d = a.extend(c, b),
                e = "#" + d.containerID,
                f = "#" + d.containerHoverID;
            a("body").append('<a class="hide-on-mobile" href="#" id="' + d.containerID + '">' + d.text + "</a>"), a(e).hide().click(function() {
                return _gaq.push(["_trackEvent", "Scroll To Top", "Click", "Scroll To Top"]), a("html, body").animate({
                    scrollTop: 0
                }, d.scrollSpeed, d.easingType), a("#" + d.containerHoverID, this).stop().animate({
                    opacity: 0
                }, d.inDelay, d.easingType), !1
            }).prepend('<span id="' + d.containerHoverID + '"></span>').hover(function() {
                a(f, this).stop().animate({
                    opacity: 1
                }, 600, "linear")
            }, function() {
                a(f, this).stop().animate({
                    opacity: 0
                }, 700, "linear")
            }), a(window).scroll(function() {
                var b = a(window).scrollTop();
                void 0 === document.body.style.maxHeight && a(e).css({
                    position: "absolute",
                    top: a(window).scrollTop() + a(window).height() - 50
                }), b > d.min ? a(e).fadeIn(d.inDelay) : a(e).fadeOut(d.Outdelay)
            })
        }
    }(jQuery), eval(function(a, b, c, d, e, f) {
        if (e = function(a) {
                return (b > a ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
            }, !"".replace(/^/, String)) {
            for (; c--;) f[e(c)] = d[c] || e(c);
            d = [function(a) {
                return f[a]
            }], e = function() {
                return "\\w+"
            }, c = 1
        }
        for (; c--;) d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
        return a
    }('(P(){if(1d.6N){Q}T b={3A:"ed.7.4",e6:0,67:{},$9Y:P(d){Q(d.$4B||(d.$4B=++a.e6))},93:P(d){Q(a.67[d]||(a.67[d]={}))},$F:P(){},$X:P(){Q X},2N:P(d){Q(1F!=d)},eF:P(d){Q!!(d)},2D:P(d){if(!a.2N(d)){Q X}if(d.$4b){Q d.$4b}if(!!d.5i){if(1==d.5i){Q"8Y"}if(3==d.5i){Q"dE"}}if(d.1B&&d.8M){Q"eG"}if(d.1B&&d.9t){Q"2c"}if((d 4z 1d.en||d 4z 1d.ab)&&d.4I===a.4v){Q"7m"}if(d 4z 1d.5l){Q"5Q"}if(d 4z 1d.ab){Q"P"}if(d 4z 1d.8q){Q"5C"}if(a.18.2A){if(a.2N(d.cH)){Q"3f"}}1f{if(d===1d.3f||d.4I==1d.9P||d.4I==1d.f1||d.4I==1d.ez||d.4I==1d.eI||d.4I==1d.eL){Q"3f"}}if(d 4z 1d.dP){Q"dC"}if(d 4z 1d.53){Q"eM"}if(d===1d){Q"1d"}if(d===1l){Q"1l"}Q 4f(d)},1U:P(j,h){if(!(j 4z 1d.5l)){j=[j]}1I(T g=0,e=j.1B;g<e;g++){if(!a.2N(j)){63}1I(T f in(h||{})){31{j[g][f]=h[f]}3h(d){}}}Q j[0]},8Z:P(h,g){if(!(h 4z 1d.5l)){h=[h]}1I(T f=0,d=h.1B;f<d;f++){if(!a.2N(h[f])){63}if(!h[f].2S){63}1I(T e in(g||{})){if(!h[f].2S[e]){h[f].2S[e]=g[e]}}}Q h[0]},dM:P(f,e){if(!a.2N(f)){Q f}1I(T d in(e||{})){if(!f[d]){f[d]=e[d]}}Q f},$31:P(){1I(T f=0,d=2c.1B;f<d;f++){31{Q 2c[f]()}3h(g){}}Q 19},$A:P(f){if(!a.2N(f)){Q $V([])}if(f.dQ){Q $V(f.dQ())}if(f.8M){T e=f.1B||0,d=1r 5l(e);3P(e--){d[e]=f[e]}Q $V(d)}Q $V(5l.2S.eV.1W(f))},2X:P(){Q 1r dP().f6()},3M:P(h){T f;2m(a.2D(h)){1m"a2":f={};1I(T g in h){f[g]=a.3M(h[g])}1n;1m"5Q":f=[];1I(T e=0,d=h.1B;e<d;e++){f[e]=a.3M(h[e])}1n;2j:Q h}Q a.$(f)},$:P(e){if(!a.2N(e)){Q 19}if(e.$a9){Q e}2m(a.2D(e)){1m"5Q":e=a.dM(e,a.1U(a.5l,{$a9:a.$F}));e.36=e.3S;e.4F=a.5l.4F;Q e;1n;1m"5C":T d=1l.d3(e);if(a.2N(d)){Q a.$(d)}Q 19;1n;1m"1d":1m"1l":a.$9Y(e);e=a.1U(e,a.6l);1n;1m"8Y":a.$9Y(e);e=a.1U(e,a.3t);1n;1m"3f":e=a.1U(e,a.9P);1n;1m"dE":Q e;1n;1m"P":1m"5Q":1m"dC":2j:1n}Q a.1U(e,{$a9:a.$F})},$1r:P(d,f,e){Q $V(a.2J.48(d)).cM(f||{}).1e(e||{})},eD:P(e){if(1l.9w&&1l.9w.1B){1l.9w[0].as(e,0)}1f{T d=$V(1l.48("1K"));d.2Z(e);1l.6I("8J")[0].2s(d)}}};T a=b;1d.6N=b;1d.$V=b.$;a.5l={$4b:"5Q",4C:P(g,h){T d=N.1B;1I(T e=N.1B,f=(h<0)?1s.3N(0,e+h):h||0;f<e;f++){if(N[f]===g){Q f}}Q-1},4F:P(d,e){Q N.4C(d,e)!=-1},3S:P(d,g){1I(T f=0,e=N.1B;f<e;f++){if(f in N){d.1W(g,N[f],f,N)}}},2W:P(d,j){T h=[];1I(T g=0,e=N.1B;g<e;g++){if(g in N){T f=N[g];if(d.1W(j,N[g],g,N)){h.4g(f)}}}Q h},ee:P(d,h){T g=[];1I(T f=0,e=N.1B;f<e;f++){if(f in N){g[f]=d.1W(h,N[f],f,N)}}Q g}};a.8Z(8q,{$4b:"5C",4p:P(){Q N.2B(/^\\s+|\\s+$/g,"")},eq:P(d,e){Q(e||X)?(N.5Y()===d.5Y()):(N.2Y().5Y()===d.2Y().5Y())},3e:P(){Q N.2B(/-\\D/g,P(d){Q d.dJ(1).eB()})},6L:P(){Q N.2B(/[A-Z]/g,P(d){Q("-"+d.dJ(0).2Y())})},1N:P(d){Q 2d(N,d||10)},d7:P(){Q 44(N)},6t:P(){Q!N.2B(/1a/i,"").4p()},3i:P(e,d){d=d||"";Q(d+N+d).4C(d+e+d)>-1}});b.8Z(ab,{$4b:"P",1o:P(){T e=a.$A(2c),d=N,f=e.7u();Q P(){Q d.52(f||19,e.dG(a.$A(2c)))}},2k:P(){T e=a.$A(2c),d=N,f=e.7u();Q P(g){Q d.52(f||19,$V([g||1d.3f]).dG(e))}},2v:P(){T e=a.$A(2c),d=N,f=e.7u();Q 1d.5I(P(){Q d.52(d,e)},f||0)},dh:P(){T e=a.$A(2c),d=N;Q P(){Q d.2v.52(d,e)}},co:P(){T e=a.$A(2c),d=N,f=e.7u();Q 1d.g0(P(){Q d.52(d,e)},f||0)}});T c=a5.g3.2Y();a.18={9F:{bA:!!(1l.g4),f7:!!(1d.fR),aj:!!(1l.fP)},3Q:P(){Q"fT"in 1d||(1d.dO&&1l 4z dO)}(),g8:c.3s(/bV|gm|gl|go\\/|ge|gf|gi|fl|fk|fj|fn|ip(bT|bW|ad)|fh|fa|f8 |fc|fd|ff|fe|c2 m(fs|in)i|ft( fH)?|bY|p(fK|fx)\\/|fz|fY|fA|fB|fC|fy\\.(18|5O)|fu|fv|fw (ce|bY)|fD|fE/)?1a:X,4J:(1d.c2)?"7v":!!(1d.fL)?"2A":(1F!=1l.fM||19!=1d.fJ)?"bj":(19!=1d.fI||!a5.fF)?"3m":"fG",3A:"",45:0,8v:c.3s(/ip(?:ad|bW|bT)/)?"c7":(c.3s(/(?:fg|bV)/)||a5.8v.3s(/dN|5j|f9/i)||["fb"])[0].2Y(),3I:1l.9I&&"cc"==1l.9I.2Y(),4q:P(){Q(1l.9I&&"cc"==1l.9I.2Y())?1l.2i:1l.9k},5R:1d.5R||1d.fi||1d.fp||1d.fr||1d.fo||1F,8f:1d.8f||1d.ci||1d.ci||1d.fm||1d.fN||1d.fO||1F,1L:X,3C:P(){if(a.18.1L){Q}a.18.1L=1a;a.2i=$V(1l.2i);a.5j=$V(1d);(P(){a.18.6S={4k:X,3g:""};if(4f 1l.2i.1K.cX!=="1F"){a.18.6S.4k=1a}1f{T f="bv bC O 8I bu".4a(" ");1I(T e=0,d=f.1B;e<d;e++){a.18.6S.3g=f[e];if(4f 1l.2i.1K[a.18.6S.3g+"gg"]!=="1F"){a.18.6S.4k=1a;1n}}}})();(P(){a.18.7g={4k:X,3g:""};if(4f 1l.2i.1K.gh!=="1F"){a.18.7g.4k=1a}1f{T f="bv bC O 8I bu".4a(" ");1I(T e=0,d=f.1B;e<d;e++){a.18.7g.3g=f[e];if(4f 1l.2i.1K[a.18.7g.3g+"ga"]!=="1F"){a.18.7g.4k=1a;1n}}}})();$V(1l).cE("5h")}};(P(){P d(){Q!!(2c.9t.ae)}a.18.3A=("7v"==a.18.4J)?!!(1l.8J)?gb:!!(1d.gc)?gd:!!(1d.bD)?6V:(a.18.9F.aj)?gj:((d())?gk:((1l.7h)?gq:4R)):("2A"==a.18.4J)?!!(1d.gr||1d.gs)?bE:!!(1d.bq&&1d.gp)?6:((1d.bq)?5:4):("3m"==a.18.4J)?((a.18.9F.bA)?((a.18.9F.aj)?gn:cI):g9):("bj"==a.18.4J)?!!(1l.8J)?4R:!!1l.6r?fV:!!(1d.bD)?fW:((1l.7h)?fX:fU):"";a.18[a.18.4J]=a.18[a.18.4J+a.18.3A]=1a;if(1d.a3){a.18.a3=1a}a.18.45=(!a.18.2A)?0:(1l.bO)?1l.bO:P(){T e=0;if(a.18.3I){Q 5}2m(a.18.3A){1m 4:e=6;1n;1m 5:e=7;1n;1m 6:e=8;1n;1m bE:e=9;1n}Q e}()})();(P(){a.18.3k={4k:X,91:P(){Q X},9V:P(){},c8:P(){},bG:"",bH:"",3g:""};if(4f 1l.cj!="1F"){a.18.3k.4k=1a}1f{T f="3m cQ o 8I fQ".4a(" ");1I(T e=0,d=f.1B;e<d;e++){a.18.3k.3g=f[e];if(4f 1l[a.18.3k.3g+"cV"]!="1F"){a.18.3k.4k=1a;1n}}}if(a.18.3k.4k){a.18.3k.bG=a.18.3k.3g+"fS";a.18.3k.bH=a.18.3k.3g+"fZ";a.18.3k.91=P(){2m(N.3g){1m"":Q 1l.3k;1m"3m":Q 1l.g5;2j:Q 1l[N.3g+"g6"]}};a.18.3k.9V=P(g){Q(N.3g==="")?g.cy():g[N.3g+"g7"]()};a.18.3k.c8=P(g){Q(N.3g==="")?1l.cj():1l[N.3g+"cV"]()}}})();a.3t={5o:P(d){Q N.2V.3i(d," ")},2r:P(d){if(d&&!N.5o(d)){N.2V+=(N.2V?" ":"")+d}Q N},4U:P(d){d=d||".*";N.2V=N.2V.2B(1r 53("(^|\\\\s)"+d+"(?:\\\\s|$)"),"$1").4p();Q N},g1:P(d){Q N.5o(d)?N.4U(d):N.2r(d)},1P:P(f){f=(f=="5u"&&N.7H)?"al":f.3e();T d=19,e=19;if(N.7H){d=N.7H[f]}1f{if(1l.ak&&1l.ak.cW){e=1l.ak.cW(N,19);d=e?e.g2([f.6L()]):19}}if(!d){d=N.1K[f]}if("1z"==f){Q a.2N(d)?44(d):1}if(/^(2l(8W|8X|9a|98)bN)|((2p|2a)(8W|8X|9a|98))$/.1R(f)){d=2d(d)?d:"1T"}Q("1A"==d?19:d)},1D:P(f,d){31{if("1z"==f){N.2C(d);Q N}1f{if("5u"==f){N.1K[("1F"===4f(N.1K.al))?"gu":"al"]=d;Q N}1f{if(a.18.6S&&/cX/.1R(f)){}}}N.1K[f.3e()]=d+(("68"==a.2D(d)&&!$V(["2w","1p"]).4F(f.3e()))?"1x":"")}3h(g){}Q N},1e:P(e){1I(T d in e){N.1D(d,e[d])}Q N},4H:P(){T d={};a.$A(2c).36(P(e){d[e]=N.1P(e)},N);Q d},2C:P(h,e){e=e||X;h=44(h);if(e){if(h==0){if("1O"!=N.1K.2H){N.1K.2H="1O"}}1f{if("4K"!=N.1K.2H){N.1K.2H="4K"}}}if(a.18.2A){if(!N.7H||!N.7H.f3){N.1K.1p=1}31{T g=N.ey.8M("cS.cR.cN");g.91=(1!=h);g.1z=h*1M}3h(d){N.1K.2W+=(1==h)?"":"ex:cS.cR.cN(91=1a,1z="+h*1M+")"}}N.1K.1z=h;Q N},cM:P(d){1I(T e in d){N.eu(e,""+d[e])}Q N},1S:P(){Q N.1e({2e:"2U",2H:"1O"})},29:P(){Q N.1e({2e:"2n",2H:"4K"})},1G:P(){Q{S:N.d5,U:N.aQ}},7r:P(){Q{13:N.4Y,Y:N.5K}},es:P(){T d=N,e={13:0,Y:0};do{e.Y+=d.5K||0;e.13+=d.4Y||0;d=d.1V}3P(d);Q e},3d:P(){if(a.2N(1l.9k.cZ)){T d=N.cZ(),f=$V(1l).7r(),h=a.18.4q();Q{13:d.13+f.y-h.et,Y:d.Y+f.x-h.eH}}T g=N,e=t=0;do{e+=g.eY||0;t+=g.eW||0;g=g.f0}3P(g&&!(/^(?:2i|f2)$/i).1R(g.3W));Q{13:t,Y:e}},3U:P(){T e=N.3d();T d=N.1G();Q{13:e.13,1j:e.13+d.U,Y:e.Y,1k:e.Y+d.S}},7a:P(f){31{N.8l=f}3h(d){N.eU=f}Q N},3O:P(){Q(N.1V)?N.1V.4c(N):N},5X:P(){a.$A(N.eT).36(P(d){if(3==d.5i||8==d.5i){Q}$V(d).5X()});N.3O();N.bo();if(N.$4B){a.67[N.$4B]=19;3x a.67[N.$4B]}Q 19},4L:P(g,e){e=e||"1j";T d=N.2M;("13"==e&&d)?N.9C(g,d):N.2s(g);Q N},22:P(f,e){T d=$V(f).4L(N,e);Q N},d1:P(d){N.4L(d.1V.8y(N,d));Q N},5U:P(d){if("8Y"!==a.2D("5C"==a.2D(d)?d=1l.d3(d):d)){Q X}Q(N==d)?X:(N.4F&&!(a.18.cq))?(N.4F(d)):(N.ct)?!!(N.ct(d)&16):a.$A(N.2z(d.3W)).4F(d)}};a.3t.6A=a.3t.1P;a.3t.eO=a.3t.1e;if(!1d.3t){1d.3t=a.$F;if(a.18.4J.3m){1d.1l.48("eR")}1d.3t.2S=(a.18.4J.3m)?1d["[[eZ.2S]]"]:{}}a.8Z(1d.3t,{$4b:"8Y"});a.6l={1G:P(){if(a.18.eQ||a.18.cq){Q{S:1d.9x,U:1d.9y}}Q{S:a.18.4q().f5,U:a.18.4q().ew}},7r:P(){Q{x:1d.eE||a.18.4q().5K,y:1d.em||a.18.4q().4Y}},be:P(){T d=N.1G();Q{S:1s.3N(a.18.4q().f4,d.S),U:1s.3N(a.18.4q().eK,d.U)}}};a.1U(1l,{$4b:"1l"});a.1U(1d,{$4b:"1d"});a.1U([a.3t,a.6l],{1c:P(g,e){T d=a.93(N.$4B),f=d[g];if(1F!=e&&1F==f){f=d[g]=e}Q(a.2N(f)?f:19)},1E:P(f,e){T d=a.93(N.$4B);d[f]=e;Q N},8i:P(e){T d=a.93(N.$4B);3x d[e];Q N}});if(!(1d.a1&&1d.a1.2S&&1d.a1.2S.7h)){a.1U([a.3t,a.6l],{7h:P(d){Q a.$A(N.6I("*")).2W(P(g){31{Q(1==g.5i&&g.2V.3i(d," "))}3h(f){}})}})}a.1U([a.3t,a.6l],{eP:P(){Q N.7h(2c[0])},2z:P(){Q N.6I(2c[0])}});if(a.18.3k.4k){a.3t.cy=P(){a.18.3k.9V(N)}}a.9P={$4b:"3f",1t:P(){if(N.cG){N.cG()}1f{N.cH=1a}if(N.9X){N.9X()}1f{N.eX=X}Q N},4M:P(){T e,d;e=((/5H/i).1R(N.2t))?N.4n[0]:N;Q(!a.2N(e))?{x:0,y:0}:{x:e.eC||e.6d+a.18.4q().5K,y:e.ep||e.5L+a.18.4q().4Y}},5n:P(){T d=N.er||N.eo;3P(d&&3==d.5i){d=d.1V}Q d},4D:P(){T e=19;2m(N.2t){1m"21":e=N.cA||N.ek;1n;1m"2O":e=N.cA||N.eA;1n;2j:Q e}31{3P(e&&3==e.5i){e=e.1V}}3h(d){e=19}Q e},57:P(){if(!N.cC&&N.8K!==1F){Q(N.8K&1?1:(N.8K&2?3:(N.8K&4?2:0)))}Q N.cC}};a.az="cD";a.a4="fq";a.9L="";if(!1l.cD){a.az="gB";a.a4="ib";a.9L="5g"}a.1U([a.3t,a.6l],{1w:P(g,f){T i=("5h"==g)?X:1a,e=N.1c("7E",{});e[g]=e[g]||{};if(e[g].62(f.$7k)){Q N}if(!f.$7k){f.$7k=1s.7X(1s.7M()*a.2X())}T d=N,h=P(j){Q f.1W(d)};if("5h"==g){if(a.18.1L){f.1W(N);Q N}}if(i){h=P(j){j=a.1U(j||1d.e,{$4b:"3f"});Q f.1W(d,$V(j))};N[a.az](a.9L+g,h,X)}e[g][f.$7k]=h;Q N},2o:P(g){T i=("5h"==g)?X:1a,e=N.1c("7E");if(!e||!e[g]){Q N}T h=e[g],f=2c[1]||19;if(g&&!f){1I(T d in h){if(!h.62(d)){63}N.2o(g,d)}Q N}f=("P"==a.2D(f))?f.$7k:f;if(!h.62(f)){Q N}if("5h"==g){i=X}if(i){N[a.a4](a.9L+g,h[f],X)}3x h[f];Q N},cE:P(h,f){T m=("5h"==h)?X:1a,l=N,j;if(!m){T g=N.1c("7E");if(!g||!g[h]){Q N}T i=g[h];1I(T d in i){if(!i.62(d)){63}i[d].1W(N)}Q N}if(l===1l&&1l.9M&&!l.cF){l=1l.9k}if(1l.9M){j=1l.9M(h);j.il(f,1a,1a)}1f{j=1l.im();j.i7=h}if(1l.9M){l.cF(j)}1f{l.hQ("5g"+f,j)}Q j},bo:P(){T d=N.1c("7E");if(!d){Q N}1I(T e in d){N.2o(e)}N.8i("7E");Q N}});(P(){if("6j"===1l.6r){Q a.18.3C.2v(1)}if(a.18.3m&&a.18.3A<cI){(P(){($V(["hP","6j"]).4F(1l.6r))?a.18.3C():2c.9t.2v(50)})()}1f{if(a.18.2A&&a.18.45<9&&1d==13){(P(){(a.$31(P(){a.18.4q().i0("Y");Q 1a}))?a.18.3C():2c.9t.2v(50)})()}1f{$V(1l).1w("hW",a.18.3C);$V(1d).1w("2I",a.18.3C)}}})();a.4v=P(){T h=19,e=a.$A(2c);if("7m"==a.2D(e[0])){h=e.7u()}T d=P(){1I(T l in N){N[l]=a.3M(N[l])}if(N.4I.$3z){N.$3z={};T o=N.4I.$3z;1I(T n in o){T j=o[n];2m(a.2D(j)){1m"P":N.$3z[n]=a.4v.cx(N,j);1n;1m"a2":N.$3z[n]=a.3M(j);1n;1m"5Q":N.$3z[n]=a.3M(j);1n}}}T i=(N.49)?N.49.52(N,2c):N;3x N.ae;Q i};if(!d.2S.49){d.2S.49=a.$F}if(h){T g=P(){};g.2S=h.2S;d.2S=1r g;d.$3z={};1I(T f in h.2S){d.$3z[f]=h.2S[f]}}1f{d.$3z=19}d.4I=a.4v;d.2S.4I=d;a.1U(d.2S,e[0]);a.1U(d,{$4b:"7m"});Q d};b.4v.cx=P(d,e){Q P(){T g=N.ae;T f=e.52(d,2c);Q f}};a.5j=$V(1d);a.2J=$V(1l)})();(P(b){if(!b){7b"9z 9A 9E";Q}if(b.1X){Q}T a=b.$;b.1X=1r b.4v({R:{4t:60,35:8c,4w:P(c){Q-(1s.9N(1s.9T*c)-1)/2},6W:b.$F,3Y:b.$F,7L:b.$F,b6:b.$F,7S:X,cp:1a},3X:19,49:P(d,c){N.el=a(d);N.R=b.1U(N.R,c);N.55=X},1y:P(c){N.3X=c;N.1H=0;N.i2=0;N.an=b.2X();N.cn=N.an+N.R.35;N.9Q=N.ah.1o(N);N.R.6W.1W();if(!N.R.7S&&b.18.5R){N.55=b.18.5R.1W(1d,N.9Q)}1f{N.55=N.ah.1o(N).co(1s.4Z(aZ/N.R.4t))}Q N},aa:P(){if(N.55){if(!N.R.7S&&b.18.5R&&b.18.8f){b.18.8f.1W(1d,N.55)}1f{hO(N.55)}N.55=X}},1t:P(c){c=b.2N(c)?c:X;N.aa();if(c){N.6m(1);N.R.3Y.2v(10)}Q N},81:P(e,d,c){Q(d-e)*c+e},ah:P(){T d=b.2X();if(d>=N.cn){N.aa();N.6m(1);N.R.3Y.2v(10);Q N}T c=N.R.4w((d-N.an)/N.R.35);if(!N.R.7S&&b.18.5R){N.55=b.18.5R.1W(1d,N.9Q)}N.6m(c)},6m:P(c){T d={};1I(T e in N.3X){if("1z"===e){d[e]=1s.4Z(N.81(N.3X[e][0],N.3X[e][1],c)*1M)/1M}1f{d[e]=N.81(N.3X[e][0],N.3X[e][1],c);if(N.R.cp){d[e]=1s.4Z(d[e])}}}N.R.7L(d);N.7s(d);N.R.b6(d)},7s:P(c){Q N.el.1e(c)}});b.1X.3l={4y:P(c){Q c},cw:P(c){Q-(1s.9N(1s.9T*c)-1)/2},is:P(c){Q 1-b.1X.3l.cw(1-c)},cv:P(c){Q 1s.3B(2,8*(c-1))},it:P(c){Q 1-b.1X.3l.cv(1-c)},cu:P(c){Q 1s.3B(c,2)},i8:P(c){Q 1-b.1X.3l.cu(1-c)},cs:P(c){Q 1s.3B(c,3)},ia:P(c){Q 1-b.1X.3l.cs(1-c)},cK:P(d,c){c=c||1.ii;Q 1s.3B(d,2)*((c+1)*d-c)},ic:P(d,c){Q 1-b.1X.3l.cK(1-d)},d2:P(d,c){c=c||[];Q 1s.3B(2,10*--d)*1s.9N(20*d*1s.9T*(c[0]||1)/3)},gv:P(d,c){Q 1-b.1X.3l.d2(1-d,c)},d0:P(e){1I(T d=0,c=1;1;d+=c,c/=2){if(e>=(7-4*d)/11){Q c*c-1s.3B((11-6*d-11*e)/4,2)}}},hZ:P(c){Q 1-b.1X.3l.d0(1-c)},2U:P(c){Q 0}}})(6N);(P(a){if(!a){7b"9z 9A 9E";Q}if(!a.1X){7b"9z.1X 9A 9E";Q}if(a.1X.aN){Q}T b=a.$;a.1X.aN=1r a.4v(a.1X,{R:{77:"7U"},49:P(d,c){N.el=$V(d);N.R=a.1U(N.$3z.R,N.R);N.$3z.49(d,c);N.4W=N.el.1c("5N:4W");N.4W=N.4W||a.$1r("3j").1e(a.1U(N.el.4H("2a-13","2a-Y","2a-1k","2a-1j","1u","13","5u"),{2u:"1O"})).d1(N.el);N.el.1E("5N:4W",N.4W).1e({2a:0})},7U:P(){N.2a="2a-13";N.54="U";N.6F=N.el.aQ},a0:P(c){N.2a="2a-"+(c||"Y");N.54="S";N.6F=N.el.d5},1k:P(){N.a0()},Y:P(){N.a0("1k")},1y:P(e,h){N[h||N.R.77]();T g=N.el.1P(N.2a).1N(),f=N.4W.1P(N.54).1N(),c={},i={},d;c[N.2a]=[g,0],c[N.54]=[0,N.6F],i[N.2a]=[g,-N.6F],i[N.54]=[f,0];2m(e){1m"in":d=c;1n;1m"ao":d=i;1n;1m"96":d=(0==f)?c:i;1n}N.$3z.1y(d);Q N},7s:P(c){N.el.1D(N.2a,c[N.2a]);N.4W.1D(N.54,c[N.54]);Q N},hX:P(c){Q N.1y("in",c)},hY:P(c){Q N.1y("ao",c)},1S:P(d){N[d||N.R.77]();T c={};c[N.54]=0,c[N.2a]=-N.6F;Q N.7s(c)},29:P(d){N[d||N.R.77]();T c={};c[N.54]=N.6F,c[N.2a]=0;Q N.7s(c)},96:P(c){Q N.1y("96",c)}})})(6N);(P(b){if(!b){7b"9z 9A 9E";Q}if(b.8k){Q}T a=b.$;b.8k=1r b.4v(b.1X,{49:P(c,d){N.a6=c;N.R=b.1U(N.R,d);N.55=X},1y:P(c){N.$3z.1y([]);N.cY=c;Q N},6m:P(c){1I(T d=0;d<N.a6.1B;d++){N.el=a(N.a6[d]);N.3X=N.cY[d];N.$3z.6m(c)}}})})(6N);T 5d=(P(g){T i=g.$;g.$8V=P(j){$V(j).1t();Q X};g.dA=P(j,l,q){T m,k,n,o=[],e=-1;q||(q=g.i3);m=g.$(q)||(1l.8J||1l.2i).2s(g.$1r("1K",{id:q,2t:"cT/dk"}));k=m.hV||m.hU;if("a2"==g.2D(l)){1I(n in l){o.4g(n+":"+l[n])}l=o.7B(";")}if(k.as){e=k.as(j+" {"+l+"}",k.hM.1B)}1f{e=k.hL(j,l)}Q e};T c={3A:"cz.5.14",R:{},9l:{1z:50,4X:X,ag:40,4t:25,1Y:5T,2g:5T,6k:15,2P:"1k",7P:"13",bs:"9U",5c:X,8o:1a,5A:X,6h:X,x:-1,y:-1,7c:X,dK:X,2G:"2I",9q:1a,5B:"13",95:"2x",c9:1a,ei:7Y,dU:4R,2Q:"",1v:1a,4j:"b5",5m:"ap",8r:75,82:"hT",6g:1a,7F:"9G 1p...",7d:"hS",8u:75,am:-1,at:-1,3u:"1C",9n:60,4m:"8a",8z:7Y,7K:1a,5V:X,4o:"",bM:1a,7n:X,3a:X,4i:X,3C:g.$F},eb:$V([/^(1z)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1z-aW)(\\s+)?:(\\s+)?(1a|X)$/i,/^(9q\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(4t)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1p\\-S)(\\s+)?:(\\s+)?(\\d+\\%?)(1x)?/i,/^(1p\\-U)(\\s+)?:(\\s+)?(\\d+\\%?)(1x)?/i,/^(1p\\-i4)(\\s+)?:(\\s+)?(\\d+)(1x)?/i,/^(1p\\-1u)(\\s+)?:(\\s+)?(1k|Y|13|1j|4Q|4l|#([a-99-8O\\-:\\.]+))$/i,/^(1p\\-d8)(\\s+)?:(\\s+)?(1k|Y|13|1j|5y)$/i,/^(1p\\-3L\\-3R)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1p\\-1d\\-8s)(\\s+)?:(\\s+)?(9U|bt|X)$/i,/^(c1\\-77)(\\s+)?:(\\s+)?(1a|X)$/i,/^(e4\\-5g\\-1C)(\\s+)?:(\\s+)?(1a|X)$/i,/^(ik\\-29\\-1p)(\\s+)?:(\\s+)?(1a|X)$/i,/^(iq\\-1u)(\\s+)?:(\\s+)?(1a|X)$/i,/^(x)(\\s+)?:(\\s+)?([\\d.]+)(1x)?/i,/^(y)(\\s+)?:(\\s+)?([\\d.]+)(1x)?/i,/^(1C\\-8n\\-5z)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1C\\-8n\\-io)(\\s+)?:(\\s+)?(1a|X)$/i,/^(9Z\\-5g)(\\s+)?:(\\s+)?(2I|1C|21)$/i,/^(1C\\-8n\\-9Z)(\\s+)?:(\\s+)?(1a|X)$/i,/^(9q)(\\s+)?:(\\s+)?(1a|X)$/i,/^(29\\-2x)(\\s+)?:(\\s+)?(1a|X|13|1j)$/i,/^(2x\\-ir)(\\s+)?:(\\s+)?(2x|#([a-99-8O\\-:\\.]+))$/i,/^(1p\\-5P)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1p\\-5P\\-in\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1p\\-5P\\-ao\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(2Q)(\\s+)?:(\\s+)?([a-99-8O\\-:\\.]+)$/i,/^(1v)(\\s+)?:(\\s+)?(1a|X)/i,/^(1v\\-cT)(\\s+)?:(\\s+)?([^;]*)$/i,/^(1v\\-1z)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1v\\-1u)(\\s+)?:(\\s+)?(ap|bn|bm|bl|br|bc)/i,/^(29\\-76)(\\s+)?:(\\s+)?(1a|X)$/i,/^(76\\-i9)(\\s+)?:(\\s+)?([^;]*)$/i,/^(76\\-1z)(\\s+)?:(\\s+)?(\\d+)$/i,/^(76\\-1u\\-x)(\\s+)?:(\\s+)?(\\d+)(1x)?/i,/^(76\\-1u\\-y)(\\s+)?:(\\s+)?(\\d+)(1x)?/i,/^(1Q\\-db)(\\s+)?:(\\s+)?(1C|21)$/i,/^(3E\\-db)(\\s+)?:(\\s+)?(1C|21)$/i,/^(3E\\-21\\-ih)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3E\\-8s)(\\s+)?:(\\s+)?(8a|5P|8b|X)$/i,/^(3E\\-8s\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3E\\-7m)(\\s+)?:(\\s+)?([a-99-8O\\-:\\.]+)$/i,/^(3L\\-1p\\-1d)(\\s+)?:(\\s+)?(1a|X)$/i,/^(bI\\-3E\\-ij)(\\s+)?:(\\s+)?(1a|X)$/i,/^(bI\\-3E\\-aA)(\\s+)?:(\\s+)?(1a|X)$/i,/^(c3\\-5p)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1k\\-1C)(\\s+)?:(\\s+)?(1a|X)$/i,/^(ch\\-1p)(\\s+)?:(\\s+)?(1a|X)$/i]),4h:$V([]),dm:P(l){T k=/(1C|21)/i;1I(T j=0;j<c.4h.1B;j++){if(c.4h[j].3o&&!c.4h[j].7A){c.4h[j].64()}1f{if(k.1R(c.4h[j].R.2G)&&c.4h[j].6D){c.4h[j].6D=l}}}},1t:P(j){T e=$V([]);if(j){if((j=$V(j))&&j.1p){e.4g(j)}1f{Q X}}1f{e=$V(g.$A(g.2i.2z("A")).2W(P(k){Q((" "+k.2V+" ").3s(/\\bZ\\s/)&&k.1p)}))}e.36(P(k){k.1p&&k.1p.1t()},N)},1y:P(e){if(0==2c.1B){c.78();Q 1a}e=$V(e);if(!e||!(" "+e.2V+" ").3s(/\\s(6X|5d)\\s/)){Q X}if(!e.1p){T j=19;3P(j=e.2M){if(j.3W=="8h"){1n}e.4c(j)}3P(j=e.i5){if(j.3W=="8h"){1n}e.4c(j)}if(!e.2M||e.2M.3W!="8h"){7b"gV gW b5"}c.4h.4g(1r c.1p(e,(2c.1B>1)?2c[1]:1F))}1f{e.1p.1y()}},2Z:P(l,e,k,j){if((l=$V(l))&&l.1p){(19===e||""===e)&&(e=1F);(19===k||""===k)&&(k=1F);l.1p.2Z(e,k,j);Q 1a}Q X},78:P(){g.$A(1d.1l.6I("A")).36(P(e){if(e.2V.3i("6X"," ")){if(c.1t(e)){c.1y.2v(1M,e)}1f{c.1y(e)}}},N)},29:P(e){Q c.92(e)},92:P(e){if((e=$V(e))&&e.1p){Q e.1p.5z()}Q X},b4:P(e){if((e=$V(e))&&e.1p){Q e.1p.64()}Q X},gX:P(e){if((e=$V(e))&&e.1p){Q{x:e.1p.R.x,y:e.1p.R.y}}},bB:P(k){T j,e;j="";1I(e=0;e<k.1B;e++){j+=8q.eg(14^k.dt(e))}Q j}};c.7f=P(){N.49.52(N,2c)};c.7f.2S={49:P(e){N.cb=19;N.5a=19;N.9R=N.bK.2k(N);N.9K=19;N.S=0;N.U=0;N.5E=0;N.84=0;N.2l={Y:0,1k:0,13:0,1j:0};N.2p={Y:0,1k:0,13:0,1j:0};N.1L=X;N.66=19;if("5C"==g.2D(e)){N.66=g.$1r("5w").2r("ax-dn-2T").1e({1u:"1Z",13:"-aU",S:"bF",U:"bF",2u:"1O"}).22(g.2i);N.12=g.$1r("2T").22(N.66);N.9r();N.12.28=e}1f{N.12=$V(e);N.9r();N.12.28=e.28}},4A:P(){if(N.66){if(N.12.1V==N.66){N.12.3O().1e({1u:"7J",13:"1A"})}N.66.5X();N.66=19}},bK:P(j){if(j){$V(j).1t()}if(N.cb){N.4A();N.cb.1W(N,X)}N.5Z()},9r:P(e){N.5a=19;if(e==1a||!(N.12.28&&(N.12.6j||N.12.6r=="6j"))){N.5a=P(j){if(j){$V(j).1t()}if(N.1L){Q}N.1L=1a;N.5r();if(N.cb){N.4A();N.cb.1W()}}.2k(N);N.12.1w("2I",N.5a);$V(["8w","5t"]).36(P(j){N.12.1w(j,N.9R)},N)}1f{N.1L=1a}},2Z:P(j,l){T k=N.1L;N.5Z();T e=g.$1r("a",{2b:j});if(1a!==l&&N.12.28.3i(e.2b)&&0!==N.12.S){N.1L=k}1f{N.9r(1a);N.12.28=j}e=19},5r:P(){N.5E=N.12.5E||N.12.S;N.84=N.12.84||N.12.U;N.S=N.12.S;N.U=N.12.U;if(N.S==0&&N.U==0&&g.18.3m){N.S=N.12.5E;N.U=N.12.84}$V(["9a","98","8W","8X"]).36(P(j){N.2p[j.2Y()]=N.12.6A("2p"+j).1N();N.2l[j.2Y()]=N.12.6A("2l"+j+"bN").1N()},N);if(g.18.7v||(g.18.2A&&!g.18.3I)){N.S-=N.2p.Y+N.2p.1k;N.U-=N.2p.13+N.2p.1j}},8p:P(){T e=19;e=N.12.3U();Q{13:e.13+N.2l.13,1j:e.1j-N.2l.1j,Y:e.Y+N.2l.Y,1k:e.1k-N.2l.1k}},gT:P(){if(N.9K){N.9K.28=N.12.28;N.12=19;N.12=N.9K}},2I:P(e){if(N.1L){if(!N.S){(P(){N.5r();N.4A();e.1W()}).1o(N).2v(1)}1f{N.4A();e.1W()}}1f{if(!N.5a){e.1W(N,X);Q}N.cb=e}},5Z:P(){if(N.5a){N.12.2o("2I",N.5a)}$V(["8w","5t"]).36(P(e){N.12.2o(e,N.9R)},N);N.5a=19;N.cb=19;N.S=19;N.1L=X;N.gS=X}};c.1p=P(){N.a7.52(N,2c)};c.1p.2S={a7:P(l,j,k){T e={};N.4x=-1;N.3o=X;N.80=0;N.88=0;N.9c=!(N.1g);N.8H=N.9c?{}:N.8H||{};N.7A=X;N.4d=19;N.9O=$V(1d).1c("5W:8t")||$V(1d).1c("5W:8t",g.$1r("5w").1e({1u:"1Z",13:-7R,S:10,U:10,2u:"1O"}).22(g.2i));N.R=g.3M(c.9l);if(l){N.c=$V(l)}N.4S=("5w"==N.c.3W.2Y());e=g.1U(e,N.58());e=g.1U(e,N.58(N.c.3y));e=g.1U(e,N.8H);if(j){e=g.1U(e,g.1U(1a===k?N.8H:{},N.58(j)))}if(e.5c&&!e.7c&&1F===e.5A){e.5A=1a}g.1U(N.R,e);N.R.2Q+="";if("2I"==N.R.2G&&g.2N(N.R.aq)&&"1a"==N.R.aq.5Y()){N.R.2G="1C"}if(g.2N(N.R.9W)&&N.R.9W!=N.R.3u){N.R.3u=N.R.9W}if(N.9c&&!N.4S){N.id=N.8T=N.c.id||"";if(!N.c.id){N.c.id=N.id="1p-"+1s.7X(1s.7M()*g.2X())}}if("4l"==N.R.2P&&N.R.5c){N.R.8o=1a}if(N.R.4i){N.3o=X;N.R.7c=1a;N.R.1v=X}("5C"===g.2D(N.R.3C))&&("P"===g.2D(1d[N.R.3C]))&&(N.R.3C=1d[N.R.3C]);if(l){N.6y=19;N.7j=N.8L.2k(N);N.9S=N.85.2k(N);N.ac=N.29.1o(N,1a);N.bw=N.8A.1o(N);N.4P=N.7G.2k(N);N.a8=P(o){T n=$V(N.c).1c("5W:1d:2E"),m=$V(1d).1G();if(n.S!==m.S||n.U!==m.U){3T(N.8S);N.8S=N.7O.1o(N).2v(10);$V(N.c).1E("5W:1d:2E",m)}}.2k(N);if(!N.4S){N.c.1w("1C",P(n){T m=n.57();if(3==m){Q 1a}$V(n).1t();if(!g.18.2A){N.cg()}Q X})}N.c.1w("8L",N.7j);N.c.1w("85",N.9S);if("21"==N.R.2G){N.c.1w("21",N.7j)}if(g.18.3Q){N.c.1e({"-3m-e8-e9":"2U","-3m-5H-dZ":"2U","-3m-dY-e3-59":"aT"});if(!N.R.4i){N.c.1w("6B",N.7j);N.c.1w("4r",N.9S)}1f{N.c.1w("1C",P(m){m.9X()})}}N.c.e0="5g";N.c.1K.h6="2U";N.c.1w("h4",g.$8V);if(!N.4S){N.c.1e({1u:"4V",2e:(g.18.cB)?"2n":"8D-2n",h3:"2U",9J:"0",4e:"h0",2u:"1O"});if(g.18.45){N.c.2r("ax-1I-ie"+g.18.45)}if(N.c.1P("bi")=="5y"){N.c.1e({2a:"1A 1A"})}}N.c.1p=N}1f{N.R.2G="2I"}if(!N.R.3a){N.c.1w("9D",g.$8V)}if("2I"==N.R.2G){N.7l()}1f{if(""!==N.8T){N.ay(1a)}}},7l:P(){T l,o,n,m,j;if(!N.1b){N.1b=1r c.7f(N.c.2M);N.1q=1r c.7f(N.c.2b)}1f{N.1q.2Z(N.c.2b)}if(!N.1g){N.1g={12:$V(1l.48("3j"))[(N.4S)?"4U":"2r"]("h1").1e({2u:"1O",2w:N.R.2P=="4l"?1M:h2,13:"-97",1u:"1Z",S:N.R.1Y+"1x",U:N.R.2g+"1x"}),1p:N,46:"1T",9s:"1T",7p:0,7q:0,69:{43:"Y",4N:1},65:{43:"13",4N:1},4Q:X,6s:N.R.1Y,6u:N.R.2g};if(!(g.18.gP&&g.18.45<9)){2m(N.R.bs){1m"9U":N.1g.12.2r("hK");1n;1m"bt":N.1g.12.2r("gC");1n;2j:1n}}N.1g.1S=P(){if(N.12.1K.13!="-97"&&N.1p.1i&&!N.1p.1i.4E){N.12.1K.13="-97"}if(N.12.1V===g.2i){N.12.22(N.1p.9O)}};N.1g.dV=N.1g.1S.1o(N.1g);if(g.18.3r){l=$V(1l.48("b8"));l.28="bb:\'\'";l.1e({Y:"1T",13:"1T",1u:"1Z","z-2f":-1}).gD=0;N.1g.7o=N.1g.12.2s(l)}N.1g.4s=$V(1l.48("3j")).2r("gA").1e({1u:"4V",2w:10,Y:"1T",13:"1T",2p:"gz"}).1S();o=g.$1r("3j",{},{2u:"1O"});o.2s(N.1q.12);N.1q.12.1e({2p:"1T",2a:"1T",2l:"1T",S:"1A",U:"1A"});if(N.R.5B=="1j"){N.1g.12.2s(o);N.1g.12.2s(N.1g.4s)}1f{N.1g.12.2s(N.1g.4s);N.1g.12.2s(o)}N.1g.12.22(N.9O);if("1F"!==4f(j)){N.1g.g=$V(1l.48("5w")).1e({59:j[1],dX:j[2]+"1x",df:j[3],de:"di",1u:"1Z","z-2f":10+(""+(N.1q.12.1P("z-2f")||0)).1N(),S:j[5],bi:j[4],"gx-U":"gy",Y:"1T"}).7a(c.bB(j[0])).22(N.1g.12,((1s.7X(1s.7M()*dr)+1)%2)?"13":"1j")}}N.1g.4Q=X;if(N.R.2P=="4Q"&&$V(N.c.id+"-aA")){N.1g.4Q=1a;$V(N.c.id+"-aA").2s(N.1g.12)}1f{if(N.R.2P.3i("#")){T q=N.R.2P.2B(/^#/,"");if($V(q)){N.1g.4Q=1a;$V(q).2s(N.1g.12)}}1f{if(N.R.2P=="4l"){N.c.2s(N.1g.12)}}}N.1g.6s=N.R.1Y;N.1g.6u=N.R.2g;if(N.R.5B!="X"&&N.R.5B!=X){T k=N.1g.4s;k.1S();3P(n=k.2M){k.4c(n)}if(N.R.95=="2x"&&""!=N.c.2x){k.2s(1l.5G(N.c.2x));k.29()}1f{if(N.R.95.3i("#")){T q=N.R.95.2B(/^#/,"");if($V(q)){k.7a($V(q).8l);k.29()}}}}1f{N.1g.4s.1S()}N.c.aO=N.c.2x;N.c.2x="";N.1b.2I(N.by.1o(N))},by:P(e){if(!e&&e!==1F){Q}if(!N.1b){Q}if(!N.R.4X){N.1b.12.2C(1)}if(!N.4S){N.c.1e({S:"1A",U:"1A"})}if(N.R.6g&&!N.R.4i){N.87=5I(N.bw,7Y)}if(N.R.2Q!=""&&$V(N.R.2Q)){N.dc()}if(N.c.id!=""){N.ay()}N.1q.2I(N.ar.1o(N))},ar:P(l){T k,j,e;if(!l&&l!==1F){3T(N.87);if(N.R.6g&&N.2h){N.2h.1S()}N.4x=g.2X();Q}if(!N.1b||!N.1q){Q}j=N.1b.12.3U();N.9v=j;if(j.1j==j.13){N.ar.1o(N).2v(8c);Q}if(N.1b.S==0&&g.18.2A){N.1b.5r();N.1q.5r();!N.4S&&N.c.1e({S:N.1b.S+"1x"})}k=N.1g.4s.1G();if(/%$/i.1R(N.R.1Y)){N.R.1Y=(2d(N.R.1Y)/1M)*N.1b.S}if(/%$/i.1R(N.R.2g)){N.R.2g=(2d(N.R.2g)/1M)*N.1b.U}N.1g.12.1e({S:N.R.1Y});k=N.1g.4s.1G();if(N.R.bM||N.R.7n){if((N.1q.S<N.R.1Y)||N.R.7n){N.R.1Y=N.1q.S;N.1g.12.1e({S:N.R.1Y});k=N.1g.4s.1G()}if((N.1q.U<N.R.2g)||N.R.7n){N.R.2g=N.1q.U+k.U}}2m(N.R.2P){1m"1k":N.1g.12.1K.Y=j.1k+N.R.6k+"1x";N.1g.69.43="1k";1n;1m"Y":N.1g.12.1K.Y=j.Y-N.R.6k-N.R.1Y+"1x";1n;1m"13":N.1g.46=j.13-(N.R.6k+N.R.2g)+"1x";1n;1m"1j":N.1g.46=j.1j+N.R.6k+"1x";N.1g.65.43="1j";1n;1m"4l":N.1g.12.1e({Y:"1T",U:"1M%",S:"1M%"});N.R.1Y=N.1b.S;N.R.2g=N.1b.U;N.1g.46="1T";k=N.1g.4s.1G();1n;2j:if(N.1g.4Q){e=$V(N.1g.12.1V).1G();if(/%$/i.1R(N.1g.6s)){N.R.1Y=(2d(N.1g.6s)/1M)*e.S}if(/%$/i.1R(N.1g.6u)){N.R.2g=(2d(N.1g.6u)/1M)*e.U}N.1g.12.1e({Y:"1T",S:N.R.1Y});N.1g.46="1T";k=N.1g.4s.1G()}1n}if(N.R.5B=="1j"){$V(N.1q.12.1V).1D("U",N.R.2g-k.U)}N.1g.12.1e("4l"==N.R.2P?{}:{U:N.R.2g+"1x",S:N.R.1Y+"1x"}).2C(1);if(g.18.3r&&N.1g.7o){N.1g.7o.1e({S:N.R.1Y+"1x",U:N.R.2g+"1x"})}if(N.R.2P=="1k"||N.R.2P=="Y"){if(N.R.7P=="5y"){N.1g.46=(j.1j-(j.1j-j.13)/2-N.R.2g/2)+"1x";N.1g.65={43:"1j",4N:2}}1f{if(N.R.7P=="1j"){N.1g.46=(j.1j-N.R.2g)+"1x";N.1g.65.43="1j"}1f{N.1g.46=j.13+"1x"}}}1f{if(N.R.2P=="13"||N.R.2P=="1j"){if(N.R.7P=="5y"){N.1g.12.1K.Y=(j.1k-(j.1k-j.Y)/2-N.R.1Y/2)+"1x";N.1g.69={43:"1k",4N:2}}1f{if(N.R.7P=="1k"){N.1g.12.1K.Y=(j.1k-N.R.1Y)+"1x";N.1g.69.43="1k"}1f{N.1g.12.1K.Y=j.Y+"1x"}}}}N.1g.7p=2d(N.1g.46,10);N.1g.7q=2d(N.1g.12.1K.Y,10);N.1g.9s=N.1g.7q;N.1g.46=N.1g.7p;N.6v=N.R.2g-k.U;if(N.1g.g){N.1g.g.1e({13:N.R.5B=="1j"?0:"1A",1j:N.R.5B=="1j"?"1A":0})}N.1q.12.1e({1u:"4V",4O:"1T",2p:"1T",Y:"1T",13:"1T"});N.ea();if(N.R.5A){if(N.R.x==-1){N.R.x=N.1b.S/2}if(N.R.y==-1){N.R.y=N.1b.U/2}N.29()}1f{if(N.R.c9){N.3v=1r g.1X(N.1g.12,{7S:"c7"===g.18.8v})}N.1g.12.1e({13:"-97"})}if(N.R.6g&&N.2h){N.2h.1S()}N.c.1w("au",N.4P);N.c.1w("2O",N.4P);if(g.18.3Q){N.c.1w("c4",N.4P);N.c.1w("4r",N.4P)}N.7I();$V(N.c).1c("5W:1d:2E",$V(1d).1G());$V(1d).1w("3p",N.a8);if(!N.R.4i&&(!N.R.7c||"1C"==N.R.2G)){N.3o=1a}if("1C"==N.R.2G&&N.6D){N.7G(N.6D)}if(N.7A){N.5z()}N.4x=g.2X();!N.4S&&("P"==g.2D(N.R.3C))&&N.R.3C.1W(19,N.id,!N.9c)},7I:P(){T m=/bn|br/i,e=/bl|br|bc/i,j=/bc|bm/i,l=19;N.6G=1F;if(!N.R.1v){if(N.1v){N.1v.5X();N.1v=1F}Q}if(!N.1v){N.1v=$V(1l.48("3j")).2r(N.R.82).1e({2e:"2n",2u:"1O",1u:"1Z",2H:"1O","z-2f":1});if(N.R.4j!=""){N.1v.2s(1l.5G(N.R.4j))}N.c.2s(N.1v)}1f{if(N.R.4j!=""){l=N.1v[(N.1v.2M)?"8y":"2s"](1l.5G(N.R.4j),N.1v.2M);l=19}}N.1v.1e({Y:"1A",1k:"1A",13:"1A",1j:"1A",2e:"2n",1z:(N.R.8r/1M),"3N-S":(N.1b.S-4)});T k=N.1v.1G();N.1v.1D((m.1R(N.R.5m)?"1k":"Y"),(j.1R(N.R.5m)?(N.1b.S-k.S)/2:2)).1D((e.1R(N.R.5m)?"1j":"13"),2);N.6G=1a;N.1v.29()},8A:P(){if(N.1q.1L){Q}N.2h=$V(1l.48("3j")).2r(N.R.7d).2C(N.R.8u/1M).1e({2e:"2n",2u:"1O",1u:"1Z",2H:"1O","z-2f":20,"3N-S":(N.1b.S-4)});N.2h.2s(1l.5G(N.R.7F));N.c.2s(N.2h);T e=N.2h.1G();N.2h.1e({Y:(N.R.am==-1?((N.1b.S-e.S)/2):(N.R.am))+"1x",13:(N.R.at==-1?((N.1b.U-e.U)/2):(N.R.at))+"1x"});N.2h.29()},dc:P(){$V(N.R.2Q).bU=$V(N.R.2Q).1V;$V(N.R.2Q).bR=$V(N.R.2Q).gE;N.c.2s($V(N.R.2Q));$V(N.R.2Q).1e({1u:"1Z",Y:"1T",13:"1T",S:N.1b.S+"1x",U:N.1b.U+"1x",2w:15}).29();if(g.18.2A){N.c.9f=N.c.2s($V(1l.48("3j")).1e({1u:"1Z",Y:"1T",13:"1T",S:N.1b.S+"1x",U:N.1b.U+"1x",2w:14,3K:"#gF"}).2C(0.gL))}g.$A($V(N.R.2Q).6I("A")).36(P(j){T k=j.gM.4a(","),e=19;$V(j).1e({1u:"1Z",Y:k[0]+"1x",13:k[1]+"1x",S:(k[2]-k[0])+"1x",U:(k[3]-k[1])+"1x",2w:15}).29();if(j.5o("3c")){if(e=j.1c("1Q")){e.2F=N.R.2Q}1f{j.3y+=";2F: "+N.R.2Q+";"}}},N)},ay:P(k){T e,l,j=1r 53("1p\\\\-id(\\\\s+)?:(\\\\s+)?"+N.c.id+"($|;)");N.3E=$V([]);g.$A(1l.6I("A")).36(P(n){if(j.1R(n.3y)){if(!$V(n).7T){n.7T=P(o){if(!g.18.2A){N.cg()}$V(o).1t();Q X};n.1w("1C",n.7T)}if(k){if(("21"==N.R.2G||"1C"==N.R.2G)&&!$V(n).8U){n.8U=P(p,o){o.2o("1C",o.8U);if(!!N.1b){Q}$V(p).1t();N.c.2b=o.2b;N.c.2M.28=o.6C;N.1y(o.3y);if(N.c.1c("1Q")){N.c.1c("1Q").1y()}}.2k(N,n);n.1w("1C",n.8U)}Q}T m=g.$1r("a",{2b:n.6C});(N.R.4o!="")&&$V(n)[N.1q.12.28.3i(n.2b)&&N.1b.12.28.3i(m.2b)?"2r":"4U"](N.R.4o);if(N.1q.12.28.3i(n.2b)&&N.1b.12.28.3i(m.2b)){N.6y=n}m=19;if(!n.5J){n.5J=P(q,p){p=q.gN||q.5n();31{3P("a"!=p.3W.2Y()){p=p.1V}}3h(o){Q}if(p.5U(q.4D())){Q}if(q.2t=="2O"){if(N.5F){3T(N.5F)}N.5F=X;Q}if(p.2x!=""){N.c.2x=p.2x}if(q.2t=="21"){N.5F=5I(N.2Z.1o(N,p.2b,p.6C,p.3y,p),N.R.9n)}1f{N.2Z(p.2b,p.6C,p.3y,p)}}.2k(N);n.1w(N.R.3u,n.5J);if(N.R.3u=="21"){n.1w("2O",n.5J)}}n.1e({9J:"0",2e:"8D-2n"});if(N.R.7K){l=1r cd();l.28=n.6C}if(N.R.5V){e=1r cd();e.28=n.2b}N.3E.4g(n)}},N)},1t:P(j){31{N.64();N.c.2o("au",N.4P);N.c.2o("2O",N.4P);if(g.18.3Q){N.c.2o("c4",N.4P);N.c.2o("4r",N.4P)}if(1F===j&&N.1i){N.1i.12.1S()}if(N.3v){N.3v.1t()}N.26=19;N.3o=X;if(N.3E!==1F){N.3E.36(P(e){if(N.R.4o!=""){e.4U(N.R.4o)}if(1F===j){e.2o(N.R.3u,e.5J);if(N.R.3u=="21"){e.2o("2O",e.5J)}e.5J=19;e.2o("1C",e.7T);e.7T=19}},N)}if(N.R.2Q!=""&&$V(N.R.2Q)){$V(N.R.2Q).1S();$V(N.R.2Q).bU.9C($V(N.R.2Q),$V(N.R.2Q).bR);if(N.c.9f){N.c.4c(N.c.9f)}}if(N.R.4X){N.c.4U("e5");N.1b.12.2C(1)}N.3v=19;if(N.2h){N.c.4c(N.2h)}if(N.1v){N.1v.1S()}if(1F===j){if(N.1v){N.c.4c(N.1v)}N.1v=19;N.1q.5Z();N.1b.5Z();(N.1i&&N.1i.12)&&N.c.4c(N.1i.12);(N.1g&&N.1g.12)&&N.1g.12.1V.4c(N.1g.12);N.1i=19;N.1g=19;N.1q=19;N.1b=19;if(!N.R.3a){N.c.2o("9D",g.$8V)}if(""===N.8T){N.c.gK("id")}1f{N.c.id=N.8T}$V(1d).2o("3p",N.a8)}if(N.87){3T(N.87);N.87=19}N.4d=19;N.c.9f=19;N.2h=19;if(N.c.2x==""){N.c.2x=N.c.aO}N.4x=-1}3h(k){}},1y:P(j,e){if(N.4x!=-1){Q}N.a7(X,j,(19===e||1F===e))},2Z:P(A,p,j,z){T k,D,e,m,v,l,F=19,x=19,n=N.6y,o,q,C,w,s,u,G,E,r;z=z||19;if(g.2X()-N.4x<5T||N.4x==-1||N.9p){N.5F&&3T(N.5F);k=5T-g.2X()+N.4x;if(N.4x==-1){k=5T}N.5F=5I(N.2Z.1o(N,A,p,j,z),k);Q}if(z&&N.6y==z){Q}1f{N.6y=z}D=P(H){if(1F!=A){N.c.2b=A}if(1F===j){j=""}if(N.R.6h){j="x: "+N.R.x+"; y: "+N.R.y+"; "+j}if(1F!=p){N.1b.2Z(p)}if(H!==1F){N.1b.2I(H)}};x=N.c.1c("1Q");if(x){x.1L&&x.2R(19,1a);x.1H="86";F=P(){x.1H="3G";x.2Z(N.c.2b,19,j)}.1o(N)}N.1b.5r();m=N.1b.S;v=N.1b.U;N.1t(1a);if(N.R.4m!="X"&&1F!==p){N.9p=1a;T B=$V(N.c.7D(1a)).1e({1u:"1Z",13:0,Y:0,S:""});T y=g.$1r("5w",{id:N.c.1V.id,"7m":N.c.1V.2V}).2r("av-dz-dj").1e({S:$V(N.c.1V).1P("S"),"3N-S":$V(N.c.1V).1P("3N-S")});if("gH"===N.c.1V.3W.gI()){N.c.1V.9C(y,N.c)}1f{N.c.1V.1V.9C(y,N.c.1V)}y.4L(B);g.18.a3&&y.1G();if(g.18.45&&g.18.45<8){$V(B.2M).2C(1)}l=1r c.7f(B.2M);l.2Z(p);if("8b"==N.R.4m){r=N.c.2b;o=N.3E.2W(P(H){Q H.2b.3i(r)});o=(o[0])?$V(o[0].2z("2T")[0]||o[0]):N.1b.12;q=N.3E.2W(P(H){Q H.2b.3i(A)});q=(q[0])?$V(q[0].2z("2T")[0]||q[0]):19;if(19==q){q=N.1b.12;o=N.1b.12}w=N.1b.12.3d(),s=o.3d(),u=q.3d(),E=o.1G(),G=q.1G()}e=P(J){T H={},L={},K={},M=19,I=19;if(X===J){l.5Z();$V(l.12).3O();l=19;y.3O();N.9p=X;if(x){x.1H="3G"}N.6y=n;N.1y(19,n);Q}if(g.18.45&&g.18.45<8&&(m===l.S||0===l.S)){l.12.1D("1p",1);y.1G();l.5r()}if("8b"==N.R.4m){H.S=[m,E.S];H.U=[v,E.U];H.13=[w.13,s.13];H.Y=[w.Y,s.Y];L.S=[G.S,l.S];L.U=[G.U,l.U];L.13=[u.13,w.13];y.1e({2p:""});B.2C(0).1e({U:0,S:l.S,1u:"4V"});L.Y=[u.Y,B.3d().Y];K.S=[m,l.S];l.12.22(g.2i).1e({1u:"1Z","z-2f":aB,Y:L.Y[0],13:L.13[0],S:L.S[0],U:L.U[0]});M=$V(N.c.2M.7D(X)).22(g.2i).1e({1u:"1Z","z-2f":bp,Y:H.Y[0],13:H.13[0],2H:"4K"});$V(N.c.2M).1e({2H:"1O"});y.3O();I=N.c.1P("2l-S");N.c.1D("2l-S",0)}1f{l.12.22(N.c).1e({1u:"1Z","z-2f":aB,1z:0,Y:"1T",13:"1T",U:"1A"});M=$V(N.c.2M.7D(X)).22(N.c).1e({1u:"1Z","z-2f":bp,Y:"1T",13:"1T",2H:"4K",U:"1A"});$V(N.c.2M).1e({2H:"1O"});y.3O();L={1z:[0,1]};if(m!=l.S||v!=l.U){K.S=L.S=H.S=[m,l.S];K.U=L.U=H.U=[v,l.U]}if(N.R.4m=="5P"){H.1z=[1,0]}}1r g.8k([N.c,l.12,(M||N.c.2M)],{35:N.R.8z,3Y:P(){if(M){M.3O();M=19}if(19!==I){N.c.1D("2l-S",I)}D.1W(N,P(){l.5Z();$V(N.c.2M).1e({2H:"4K"});$V(l.12).3O();l=19;if(H.1z){$V(N.c.2M).1e({1z:1})}N.9p=X;N.1y(j,z);if(F){F.2v(10)}}.1o(N))}.1o(N)}).1y([K,L,H])};l.2I(e.1o(N))}1f{D.1W(N,P(){N.c.1e({S:N.1b.S+"1x",U:N.1b.U+"1x"});N.1y(j,z);if(F){F.2v(10)}}.1o(N))}},58:P(j){T e,n,l,k;e=19;n=[];j=j||"";if(""==j){1I(k in c.R){e=c.R[k];2m(g.2D(c.9l[k.3e()])){1m"7y":e=e.5Y().6t();1n;1m"68":if(!("1Y"===k.3e()||"2g"===k.3e())||!/\\%$/i.1R(e)){e=44(e)}1n;2j:1n}n[k.3e()]=e}}1f{l=$V(j.4a(";"));l.36(P(m){c.eb.36(P(o){e=o.6x(m.4p());if(e){2m(g.2D(c.9l[e[1].3e()])){1m"7y":n[e[1].3e()]=e[4]==="1a";1n;1m"68":n[e[1].3e()]=(("1Y"===e[1].3e()||"2g"===e[1].3e())&&/\\%$/.1R(e[4]))?e[4]:44(e[4]);1n;2j:n[e[1].3e()]=e[4]}}},N)},N)}if(X===n.4m){n.4m="X"}Q n},ea:P(){T j,e;if(!N.1i){N.1i={12:$V(1l.48("3j")).2r("e5").1e({2w:10,1u:"1Z",2u:"1O"}).1S(),S:20,U:20,af:""};N.c.2s(N.1i.12);N.1i.af=N.1i.12.1P("3K-59")}if(e=N.c.1c("1Q")){N.1i.12.1e({4e:(e.W.5s)?"e4":""})}if(N.R.7n){N.1i.12.1e({"2l-S":"1T",4e:"2j"})}N.1i.4E=X;N.1i.U=N.6v/(N.1q.U/N.1b.U);N.1i.S=N.R.1Y/(N.1q.S/N.1b.S);if(N.1i.S>N.1b.S){N.1i.S=N.1b.S}if(N.1i.U>N.1b.U){N.1i.U=N.1b.U}N.1i.S=1s.4Z(N.1i.S);N.1i.U=1s.4Z(N.1i.U);N.1i.4O=N.1i.12.6A("8d").1N();N.1i.12.1e({S:(N.1i.S-2*(g.18.3I?0:N.1i.4O))+"1x",U:(N.1i.U-2*(g.18.3I?0:N.1i.4O))+"1x"});if(!N.R.4X&&!N.R.3a){N.1i.12.2C(44(N.R.1z/1M));if(N.1i.3H){N.1i.12.4c(N.1i.3H);N.1i.3H=19}}1f{if(N.1i.3H){N.1i.3H.28=N.1b.12.28}1f{j=N.1b.12.7D(X);j.e0="5g";N.1i.3H=$V(N.1i.12.2s(j)).1e({1u:"1Z",2w:5})}if(N.R.4X){N.1i.3H.1e(N.1b.12.1G());N.1i.12.2C(1);if(g.18.45&&g.18.45<9){N.1i.3H.2C(1)}}1f{if(N.R.3a){N.1i.3H.2C(0.hz)}N.1i.12.2C(44(N.R.1z/1M))}}},7G:P(l,j){if(!N.3o||l===1F||l.hw){Q X}if(!N.1i){Q X}T m=(/5H/i).1R(l.2t)&&l.aD.1B>1;T k=("4r"==l.2t&&!l.dL);if((!N.4S||l.2t!="2O")&&!m){$V(l).1t()}if(j===1F){j=$V(l).4M()}if(N.26===19||N.26===1F){N.26=N.1b.8p()}if(k||("2O"==l.2t&&!N.c.5U(l.4D()))||m||j.x>N.26.1k||j.x<N.26.Y||j.y>N.26.1j||j.y<N.26.13){N.64();Q X}N.7A=X;if(l.2t=="2O"||l.2t=="4r"){Q X}if(N.R.5c&&!N.6z){Q X}if(!N.R.8o){j.x-=N.80;j.y-=N.88}if((j.x+N.1i.S/2)>=N.26.1k){j.x=N.26.1k-N.1i.S/2}if((j.x-N.1i.S/2)<=N.26.Y){j.x=N.26.Y+N.1i.S/2}if((j.y+N.1i.U/2)>=N.26.1j){j.y=N.26.1j-N.1i.U/2}if((j.y-N.1i.U/2)<=N.26.13){j.y=N.26.13+N.1i.U/2}N.R.x=j.x-N.26.Y;N.R.y=j.y-N.26.13;if(N.4d===19){N.4d=5I(N.ac,10)}if(g.2N(N.6G)&&N.6G){N.6G=X;N.1v.1S()}Q 1a},29:P(m){if(m&&!N.4d){Q}T s,p,l,k,r,q,o,n,j,e=N.R,u=N.1i;s=u.S/2;p=u.U/2;u.12.1K.Y=e.x-s+N.1b.2l.Y+"1x";u.12.1K.13=e.y-p+N.1b.2l.13+"1x";if(N.R.4X){u.3H.1K.Y="-"+(44(u.12.1K.Y)+u.4O)+"1x";u.3H.1K.13="-"+(44(u.12.1K.13)+u.4O)+"1x"}l=(N.R.x-s)*(N.1q.S/N.1b.S);k=(N.R.y-p)*(N.1q.U/N.1b.U);if(N.1q.S-l<e.1Y){l=N.1q.S-e.1Y;if(l<0){l=0}}if(N.1q.U-k<N.6v){k=N.1q.U-N.6v;if(k<0){k=0}}if(1l.9k.hs=="ht"){l=(e.x+u.S/2-N.1b.S)*(N.1q.S/N.1b.S)}l=1s.4Z(l);k=1s.4Z(k);if(e.9q===X||(!u.4E)){N.1q.12.1K.Y=(-l)+"1x";N.1q.12.1K.13=(-k)+"1x"}1f{r=2d(N.1q.12.1K.Y);q=2d(N.1q.12.1K.13);o=(-l-r);n=(-k-q);if(!o&&!n){N.4d=19;Q}o*=e.ag/1M;if(o<1&&o>0){o=1}1f{if(o>-1&&o<0){o=-1}}r+=o;n*=e.ag/1M;if(n<1&&n>0){n=1}1f{if(n>-1&&n<0){n=-1}}q+=n;N.1q.12.1K.Y=r+"1x";N.1q.12.1K.13=q+"1x"}if(!u.4E){if(N.3v){N.3v.1t();N.3v.R.3Y=g.$F;N.3v.R.35=e.ei;N.1g.12.2C(0);N.3v.1y({1z:[0,1]})}if(/^(Y|1k|13|1j)$/i.1R(e.2P)){N.1g.12.22(g.2i)}if(e.2P!="4l"){u.12.29()}N.1g.12.1e(N.ai(/^(Y|1k|13|1j)$/i.1R(e.2P)&&!N.R.5A));if(e.4X){N.c.1D("3K-59",N.1i.af);N.1b.12.2C(44((1M-e.1z)/1M))}u.4E=1a}if(N.4d){N.4d=5I(N.ac,aZ/e.4t)}},ai:P(q){T j=N.71(5),e=N.1b.12.3U(),n=N.R.2P,m=N.1g,k=N.R.6k,u=m.12.1G(),p=m.7p,l=m.7q,o={Y:m.7q,13:m.7p};if("4l"===n||N.1g.4Q){Q o}q||(q=X);m.9s+=(e[m.69.43]-N.9v[m.69.43])/m.69.4N;m.46+=(e[m.65.43]-N.9v[m.65.43])/m.65.4N;N.9v=e;o.Y=l=m.9s;o.13=p=m.46;if(q){if("Y"==n||"1k"==n){if("Y"==n&&j.Y>l){o.Y=(e.Y-j.Y>=u.S)?(e.Y-u.S-2):(j.1k-e.1k-2>e.Y-j.Y-2)?(e.1k+2):(e.Y-u.S-2)}1f{if("1k"==n&&j.1k<l+u.S){o.Y=(j.1k-e.1k>=u.S)?(e.1k+2):(e.Y-j.Y-2>j.1k-e.1k-2)?(e.Y-u.S-2):(e.1k+2)}}}1f{if("13"==n||"1j"==n){o.Y=1s.3N(j.Y+2,1s.4G(j.1k,l+u.S)-u.S);if("13"==n&&j.13>p){o.13=(e.13-j.13>=u.U)?(e.13-u.U-2):(j.1j-e.1j-2>e.13-j.13-2)?(e.1j+2):(e.13-u.U-2)}1f{if("1j"==n&&j.1j<p+u.U){o.13=(j.1j-e.1j>=u.U)?(e.1j+2):(e.13-j.13-2>j.1j-e.1j-2)?(e.13-u.U-2):(e.1j+2)}}}}}Q o},71:P(k){k=k||0;T j=(g.18.3Q)?{S:1d.9x,U:1d.9y}:$V(1d).1G(),e=$V(1d).7r();Q{Y:e.x+k,1k:e.x+j.S-k,13:e.y+k,1j:e.y+j.U-k}},7O:P(m){if(!N.1b||!N.1b.1L){Q}T k,j,l={S:N.1b.S,U:N.1b.U};N.1b.5r();if(N.1g.4Q){j=$V(N.1g.12.1V).1G();if(/%$/i.1R(N.1g.6s)){N.R.1Y=(2d(N.1g.6s)/1M)*j.S}if(/%$/i.1R(N.1g.6u)){N.R.2g=(2d(N.1g.6u)/1M)*j.U}}1f{if("4l"===N.R.2P){N.R.1Y=N.1b.S;N.R.2g=N.1b.U}1f{N.R.1Y*=N.1b.S/l.S;N.R.2g*=N.1b.U/l.U}}k=N.1g.4s.1G();N.6v=N.R.2g-k.U;if(N.R.5B=="1j"){$V(N.1q.12.1V).1D("U",N.R.2g-k.U)}N.1g.12.1e("4l"==N.R.2P?{}:{U:N.R.2g+"1x",S:N.R.1Y+"1x"});if(g.18.3r&&N.1g.7o){N.1g.7o.1e({S:N.R.1Y,U:N.R.2g})}if(N.R.4X&&N.1i.3H){N.1i.3H.1e(N.1b.12.1G())}N.1i.U=N.6v/(N.1q.U/N.1b.U);N.1i.S=N.R.1Y/(N.1q.S/N.1b.S);if(N.1i.S>N.1b.S){N.1i.S=N.1b.S}if(N.1i.U>N.1b.U){N.1i.U=N.1b.U}N.1i.S=1s.4Z(N.1i.S);N.1i.U=1s.4Z(N.1i.U);N.1i.4O=N.1i.12.6A("8d").1N();N.1i.12.1e({S:(N.1i.S-2*(g.18.3I?0:N.1i.4O))+"1x",U:(N.1i.U-2*(g.18.3I?0:N.1i.4O))+"1x"});if(N.1i.4E){N.1g.12.1e(N.ai(/^(Y|1k|13|1j)$/i.1R(N.R.2P)&&!N.R.5A));N.R.x*=N.1b.S/l.S;N.R.y*=N.1b.U/l.U;N.29()}},5z:P(j,k){j=(g.2N(j))?j:1a;N.7A=1a;if(!N.1q){N.7l();Q}if(N.R.4i){Q}N.3o=1a;if(j){if(g.2N(k)){N.7G(k);Q}if(!N.R.6h){N.R.x=N.1b.S/2;N.R.y=N.1b.U/2}N.29()}},64:P(){T e=N.1i&&N.1i.4E;if(N.4d){3T(N.4d);N.4d=19}if(!N.R.5A&&N.1i&&N.1i.4E){N.1i.4E=X;N.1i.12.1S();if(N.3v){N.3v.1t();N.3v.R.3Y=N.1g.dV;N.3v.R.35=N.R.dU;T j=N.1g.12.6A("1z");N.3v.1y({1z:[j,0]})}1f{N.1g.1S()}if(N.R.4X){N.c.1D("3K-59","");N.1b.12.2C(1)}}N.26=19;if(N.R.7c){N.3o=X}if(N.R.5c){N.6z=X}if(N.1v){N.6G=1a;N.1v.29()}},8L:P(m){T j=m.57(),l=(/5H/i).1R(m.2t),o=g.2X();if(3==j){Q 1a}if(l){if(m.3D.1B>1){Q}N.c.1E("5W:3f:5v",{id:m.3D[0].6i,x:m.3D[0].6d,y:m.3D[0].5L,5f:o});if(N.1q&&N.1q.1L&&!N.3o){Q}}if(!(l&&m.aD.1B>1)){$V(m).1t()}if("1C"==N.R.2G&&!N.1b){N.6D=m;N.7l();Q}if("21"==N.R.2G&&!N.1b&&(m.2t=="21"||m.2t=="6B")){N.6D=m;N.7l();N.c.2o("21",N.7j);Q}if(N.R.4i){Q}if(N.1b&&!N.1q.1L){Q}if(N.1q&&N.R.dK&&N.3o&&!l){N.3o=X;N.64();Q}if(N.1q&&!N.3o){N.5z(1a,m);m.8m&&m.8m();if(N.c.1c("1Q")){N.c.1c("1Q").8e=1a}}if(N.3o&&N.R.5c){N.6z=1a;if(!N.R.8o){if(N.26===19||N.26===1F){N.26=N.1b.8p()}T k=m.4M();N.80=k.x-N.R.x-N.26.Y;N.88=k.y-N.R.y-N.26.13;if(1s.dH(N.80)>N.1i.S/2||1s.dH(N.88)>N.1i.U/2){N.6z=X;Q}}1f{N.7G(m)}}},85:P(m){T j=m.57(),l=(/5H/i).1R(m.2t),p=g.2X(),o=19,k=N.R.6h;if(3==j){Q 1a}if(l){o=N.c.1c("5W:3f:5v");if(!o||m.3D.1B>1){Q}if(o.id==m.4n[0].6i&&p-o.5f<=4R&&1s.9H(1s.3B(m.4n[0].6d-o.x,2)+1s.3B(m.4n[0].5L-o.y,2))<=15){if(N.1q&&N.1q.1L&&!N.3o){if(N.26===19||N.26===1F){N.26=N.1b.8p()}N.R.6h=1a;N.R.x=m.4M().x-N.26.Y;N.R.y=m.4M().y-N.26.13;N.5z(1a);N.R.6h=k;N.R.5c&&(N.6z=1a);N.80=0;N.88=0;m.dL=1a;m.hh=1a;m.8m&&m.8m()}$V(m).1t();Q}}$V(m).1t();if(N.R.5c){N.6z=X}}};if(g.18.2A){31{1l.ho("hp",X,1a)}3h(f){}}$V(1l).1w("5h",P(){g.dA(".av-dz-dj","2a: 0 !6J;2l: 0 !6J;2p: 0 !6J;1u: 4V  !6J;U: 0 !6J;4G-U: 0 !6J;z-2f: -1;1z: 0;","av-dk");$V(1l).1w("au",c.dm)});T d=1r g.4v({12:19,1L:X,R:{S:-1,U:-1,56:g.$F,aw:g.$F,6U:g.$F},S:0,U:0,aJ:0,e1:0,2l:{Y:0,1k:0,13:0,1j:0},2a:{Y:0,1k:0,13:0,1j:0},2p:{Y:0,1k:0,13:0,1j:0},7N:19,8x:{56:P(j){if(j){$V(j).1t()}N.7Z();if(N.1L){Q}N.1L=1a;N.81();N.4A();N.R.56.2v(1)},aw:P(j){if(j){$V(j).1t()}N.7Z();N.1L=X;N.4A();N.R.aw.2v(1)},6U:P(j){if(j){$V(j).1t()}N.7Z();N.1L=X;N.4A();N.R.6U.2v(1)}},dq:P(){$V(["2I","8w","5t"]).36(P(e){N.12.1w(e,N.8x["5g"+e].2k(N).dh(1))},N)},7Z:P(){$V(["2I","8w","5t"]).36(P(e){N.12.2o(e)},N)},4A:P(){if(N.12.1c("1r")){T e=N.12.1V;N.12.3O().8i("1r").1e({1u:"7J",13:"1A"});e.5X()}},49:P(k,j){N.R=g.1U(N.R,j);T e=N.12=$V(k)||g.$1r("2T",{},{"3N-S":"2U","3N-U":"2U"}).22(g.$1r("5w").2r("ax-dn-2T").1e({1u:"1Z",13:-7R,S:10,U:10,2u:"1O"}).22(g.2i)).1E("1r",1a),l=P(){if(N.eh()){N.8x.56.1W(N)}1f{N.8x.6U.1W(N)}l=19}.1o(N);N.dq();if(!k.28){e.28=k}1f{e.28=k.28}if(e&&e.6j){N.7N=l.2v(1M)}},bk:P(){if(N.7N){31{3T(N.7N)}3h(e){}N.7N=19}N.7Z();N.4A();N.1L=X;Q N},eh:P(){T e=N.12;Q(e.5E)?(e.5E>0):(e.6r)?("6j"==e.6r):e.S>0},81:P(){N.aJ=N.12.5E||N.12.S;N.e1=N.12.84||N.12.U;if(N.R.S>0){N.12.1D("S",N.R.S)}1f{if(N.R.U>0){N.12.1D("U",N.R.U)}}N.S=N.12.S;N.U=N.12.U;$V(["Y","1k","13","1j"]).36(P(e){N.2a[e]=N.12.1P("2a-"+e).1N();N.2p[e]=N.12.1P("2p-"+e).1N();N.2l[e]=N.12.1P("2l-"+e+"-S").1N()},N)}});T b={3A:"ed.2.2-hm",R:{},7x:{},1y:P(m){N.3n=$V(1d).1c("41:5e",$V([]));T l=19,j=19,k=$V([]),e=(2c.1B>1)?g.1U(g.3M(b.R),2c[1]):b.R;if(m){j=$V(m);if(j&&(" "+j.2V+" ").3s(/\\s(3c|5d)\\s/)){k.4g(j)}1f{Q X}}1f{k=$V(g.$A(g.2i.2z("A")).2W(P(n){Q n.2V.3i("3c"," ")}))}k.3S(P(n){if(l=$V(n).1c("1Q")){l.1y()}1f{1r a(n,e)}});Q 1a},1t:P(j){T e=19;if(j){if($V(j)&&(e=$V(j).1c("1Q"))){e=e.2L(e.24||e.id).1t();3x e;Q 1a}Q X}3P(N.3n.1B){e=N.3n[N.3n.1B-1].1t();3x e}Q 1a},78:P(j){T e=19;if(j){if($V(j)){if(e=$V(j).1c("1Q")){e=N.1t(j);3x e}N.1y.2v(9e,j);Q 1a}Q X}N.1t();N.1y.2v(9e);Q 1a},2Z:P(n,e,k,l){T m=$V(n),j=19;if(m&&(j=m.1c("1Q"))){j.2L(j.24||j.id).2Z(e,k,l)}},3b:P(j){T e=19;if($V(j)&&(e=$V(j).1c("1Q"))){e.3b();Q 1a}Q X},2R:P(j){T e=19;if($V(j)&&(e=$V(j).1c("1Q"))){e.2R();Q 1a}Q X}};T a=1r g.4v({W:{2w:hj,9b:8c,70:-1,3w:"3L-3R",9h:"3R",7w:"5y",2G:"2I",ck:1a,cm:X,6O:X,9i:10,7i:"1C",cP:4R,5x:"bL",6P:"1A",aE:"1A",bd:30,7z:"#hk",bh:4R,dD:6V,aP:"7t",6Y:"1j",dB:5T,dF:5T,7V:"29",aR:"1A",dl:"8Q, 94, 83",6g:1a,7F:"9G...",bJ:"9G...",8u:75,7d:"hl",6R:"8a",aV:8c,74:1a,3u:"1C",9n:60,4m:"8a",8z:7Y,4o:"",2F:19,5O:"",aG:"i6",e7:"",1v:1a,4j:"hn",5m:"ap",8r:75,82:"hf",3a:"X",5s:X,8F:1a,7K:1a,5V:X},9j:{aq:P(e){e=(""+e).6t();if(e&&"2I"==N.W.2G){N.W.2G="1C"}},he:P(e){if("3L-3R"==N.W.3w&&"5q"==e){N.W.3w="5q"}},hC:P(e){if("1C"==N.W.3u&&"21"==e){N.W.3u="21"}}},8B:{c6:"hG",c5:"hA",bQ:"hy"},3n:[],6o:19,r:19,id:19,24:19,2F:19,2y:{},1L:X,5t:X,8e:X,8G:"1p-1u: 4l; 1v: X; 1C-8n-5z: X; c1-77: X; 9Z-5g: 2I; 29-76: X; c3-5p: X; 1p-1d-8s: X; ch-1p: X; 1z-aW: X;",1b:19,1q:19,2K:19,1h:19,2h:19,23:19,1J:19,2q:19,1v:19,47:19,1H:"73",5k:[],6b:{8Q:{2f:0,2x:"c6"},94:{2f:1,2x:"c5"},83:{2f:2,2x:"bQ"}},1u:{13:"1A",1j:"1A",Y:"1A",1k:"1A"},2E:{S:-1,U:-1},8E:"2T",6Q:{4y:["",""],gw:["6e","6c"],h5:["6e","6c"],gZ:["6e","6c"],bL:["6e","6c"],gR:["6e","6c"],gQ:["6e","6c"],gU:["6e","6c"]},4t:50,3V:X,6H:{x:0,y:0},61:(g.18.2A&&(g.18.3r||g.18.3I))||X,72:19,49:P(e,j){N.3n=g.5j.1c("41:5e",$V([]));N.6o=(N.6o=g.5j.1c("41:8t"))?N.6o:g.5j.1c("41:8t",g.$1r("5w").1e({1u:"1Z",13:-7R,S:10,U:10,2u:"1O"}).22(g.2i));N.5k=$V(N.5k);N.r=$V(e)||g.$1r("A");N.W.aP="a:2x";N.W.6O=1a;N.58(j);N.58(N.r.3y);N.aY();N.da(b.7x);N.6H.y=N.6H.x=N.W.9i*2;N.6H.x+=N.61?g.2i.1P("2a-Y").1N()+g.2i.1P("2a-1k").1N():0;N.r.id=N.id=N.r.id||("hR-"+1s.7X(1s.7M()*g.2X()));if(2c.1B>2){N.2y=2c[2]}N.2y.4u=N.2y.4u||N.r.2z("8h")[0];N.2y.2K=N.2y.2K||N.r.2b;N.24=N.2y.24||19;N.2F=N.W.2F||19;N.3V=/(Y|1k)/i.1R(N.W.6Y);if(N.W.5s){N.W.1v=X}if(N.24){N.W.2G="2I"}N.8G+="1k-1C : "+("1a"==N.W.3a||"3q"==N.W.3a);if((" "+N.r.2V+" ").3s(/\\s(3c|5d)\\s/)){if(N.r.1p&&!N.r.1p.R.4i){N.W.6g=X}N.r.1e({1u:"4V",2e:(g.18.cB)?"2n":"8D-2n"});if(N.W.5s){N.r.1e({4e:"2j"})}if("1a"!=N.W.3a&&"5q"!=N.W.3a){N.r.1w("9D",P(k){$V(k).1t()})}N.r.1E("1o:1C",P(o){T n=N.1c("1Q"),m=g.2X(),k;$V(o).1t();if("4r"===o.2t){n.W.5x="4y";n.W.6P="4y";n.W.8F=X;n.W.6O=X;n.4t=30}if("1C"===o.2t){k=N.1c("41:3f:1C");if(!k){Q}if(1s.9H(1s.3B(o.4M().x-k.x,2)+1s.3B(o.4M().y-k.y,2))>5||m-k.5f>4R){Q X}}if((g.18.2A||(g.18.7v&&g.18.3A<6V))&&n.8e){n.8e=X;Q X}if(!n.1L){if(n.id!=N.1c("51")){N.1E("51",n.id);if("1C"==n.W.2G||("21"==n.W.2G&&"4r"===o.2t)){31{if(n.r.1p&&!n.r.1p.R.4i&&((g.18.2A||(g.18.7v&&g.18.3A<6V))||!n.r.1p.1q.1L)){N.1E("51",X)}}3h(l){}if(n.2F&&""!=n.2F){n.6a(n.2F,1a).3S(P(p){if(p!=n){p.1y()}})}n.1y()}1f{if(n.1b&&!n.1q){n.89(n.2y.2K)}}}}1f{if("1C"==n.W.7i||"4r"===o.2t){n.3b()}}Q X}.2k(N.r));N.r.1w("8L",P(k){if(3==k.57()){Q 1a}N.r.1E("41:3f:1C",{5f:g.2X(),x:k.4M().x,y:k.4M().y})}.2k(N));N.r.1w("1C",N.r.1c("1o:1C"));if(g.18.3Q){N.r.1w("6B",P(k){T l=g.2X();if(k.3D.1B>1){Q}N.r.1E("41:3f:5v",{id:k.3D[0].6i,5f:l,x:k.3D[0].6d,y:k.3D[0].5L})}.2k(N));N.r.1w("4r",P(l){T m=g.2X(),k=N.r.1c("41:3f:5v");if(!k||l.4n.1B>1){Q}if(k.id==l.4n[0].6i&&m-k.5f<=4R&&1s.9H(1s.3B(l.4n[0].6d-k.x,2)+1s.3B(l.4n[0].5L-k.y,2))<=15){l.1t();N.r.1c("1o:1C")(l);Q}}.2k(N))}N.r.1E("1o:8R",P(n){T l=N.1c("1Q"),o=l.2L(l.24||l.id),k=(l.1v),m=("21"==l.W.7i);if(!n.4D()||n.4D()===l.2K){n.1t();Q}$V(n).1t();if(!l.1L&&"21"==l.W.2G){if(l.id!=N.1c("51")&&"21"==l.W.7i){N.1E("51",l.id)}if(l.2F&&""!=l.2F){l.6a(l.2F,1a).3S(P(p){if(p!=l){p.1y()}})}l.1y()}1f{2m(n.2t){1m"2O":if(k&&"3G"==l.1H){o.1v.29()}if(m){if(l.8j){3T(l.8j)}l.8j=X;Q}1n;1m"21":if(k&&"3G"==l.1H){o.1v.1S()}if(m){l.8j=l.3b.1o(l).2v(l.W.cP)}1n}}}.2k(N.r)).1w("21",N.r.1c("1o:8R")).1w("2O",N.r.1c("1o:8R"))}N.r.1E("1Q",N);if(N.2y&&g.2N(N.2y.2f)&&"68"==4f(N.2y.2f)){N.3n.79(N.2y.2f,0,N)}1f{N.3n.4g(N)}if("2I"==N.W.2G){N.1y()}1f{N.aL(1a)}},1y:P(k,j){if(N.1L||"73"!=N.1H){Q}N.1H="ca";if(k){N.2y.4u=k}if(j){N.2y.2K=j}if($V(["3L-3R","5q"]).4F(N.W.3w)){N.2E={S:-1,U:-1}}N.W.70=(N.W.70>=0)?N.W.70:N.W.9b;T e=[N.W.5x,N.W.6P];N.W.5x=(e[0]in N.6Q)?e[0]:(e[0]="4y");N.W.6P=(e[1]in N.6Q)?e[1]:e[0];if(!N.1b&&(N.W.7K||!N.24)){N.cU()}},1t:P(e){if("73"==N.1H){Q N}e=e||X;if(N.1b){N.1b.bk()}if(N.1q){N.1q.bk()}if(N.1h){if(N.1h.1c("1o:9g-1C")){g.2J.2o("1C",N.1h.1c("1o:9g-1C"));g.18.3Q&&g.2J.2o("6B",N.1h.1c("1o:9g-1C"))}if(N.1h.1c("1o:1d:3p")){$V(1d).2o("3p",N.1h.1c("1o:1d:3p"));$V(1d).2o("bX",N.1h.1c("1o:1d:3p"))}N.1h=N.1h.5X()}N.1b=19,N.1q=19,N.1h=19,N.2h=19,N.23=19,N.1J=19,N.2q=19,N.1L=X,N.1H="73";N.r.1E("51",X);if(N.1v){N.1v.3O()}N.5k.3S(P(j){j.2o(N.W.3u,j.1c("1o:2B"));if("21"==N.W.3u){j.2o("2O",j.1c("1o:2B"))}if(!j.1c("1Q")||N==j.1c("1Q")){Q}j.1c("1Q").1t();3x j},N);N.5k=$V([]);if(!e){if((" "+N.r.2V+" ").3s(/\\s(3c|5d)\\s/)){N.r.bo();g.67[N.r.$4B]=19;3x g.67[N.r.$4B]}N.r.8i("1Q");Q N.3n.79(N.3n.4C(N),1)}Q N},6K:P(e,m,k){T y=N.2L(N.24||N.id),o=y.r.2z("2T")[0],v,l={},x={},n={},r,u,j,q,s,z,w,p=19;m=m||X;if((!m&&(!e.1L||"3G"!=e.1H))||(!!!k&&"3G"!=N.1H)){Q}if(N===e){Q}N.1H="86";if(!e.1b&&e.2y.4u){e.1b=1r d(e.2y.4u,{56:$V(P(A,B){N.6K(A,B,1a)}).1o(N,e,m)});Q}e.1H="86";v=P(A,B){A.2b=N.1q?N.1q.12.28:N.2y.2K;A.1E("1Q",N);N.1H="3G";B.1H="3G";N.7I();if(N.W.5s){A.1e({4e:"2j"})}1f{A.1e({4e:""})}if(""!=N.W.4o){(B.6f||B.r).4U(N.W.4o);(N.6f||N.r).2r(N.W.4o)}};if(!m){if(y.1v){y.1v.1S()}if("8b"==N.W.4m){r=$V((N.6f||N.r).2z("2T")[0]),r=r||(N.6f||N.r),u=$V((e.6f||e.r).2z("2T")[0]);u=u||(e.6f||e.r);j=N.1b.12.3d(),q=r.3d(),s=u.3d(),w=r.1G(),z=u.1G();l.S=[N.1b.S,w.S];l.U=[N.1b.U,w.U];l.13=[j.13,q.13];l.Y=[j.Y,q.Y];x.S=[z.S,e.1b.S];x.U=[z.U,e.1b.U];x.13=[s.13,j.13];x.Y=[s.Y,j.Y];n.S=[N.1b.S,e.1b.S];n.U=[N.1b.U,e.1b.U];p=$V(o.7D(X)).22(g.2i).1e({1u:"1Z","z-2f":bp,Y:l.Y[0],13:l.13[0],2H:"4K"});o.1e({2H:"1O"});e.1b.12.22(g.2i).1e({1u:"1Z","z-2f":aB,Y:x.Y[0],13:x.13[0],S:x.S[0],U:x.U[0]})}1f{e.1b.12.1e({1u:"1Z","z-2f":1,Y:"1T",13:"1T"}).22(y.r,"13").2C(0);x={1z:[0,1]};if(N.1b.S!=e.1b.S||N.1b.U!=e.1b.U){n.S=x.S=l.S=[N.1b.S,e.1b.S];n.U=x.U=l.U=[N.1b.U,e.1b.U]}if(N.W.4m=="5P"){l.1z=[1,0]}}1r g.8k([y.r,e.1b.12,(p||o)],{35:("X"==""+N.W.4m)?0:N.W.8z,3Y:P(A,B,C){if(p){p.3O();p=19}B.3O().1e({2H:"4K"});N.1b.12.22(A,"13").1e({1u:"7J","z-2f":0});v.1W(N,A,C)}.1o(e,y.r,o,N)}).1y([n,x,l])}1f{e.1b.12=o;v.1W(e,y.r,N)}},2Z:P(e,m,j){T n=19,l=N.2L(N.24||N.id);31{n=l.5k.2W(P(q){T p=q.1c("1Q");Q(p.1q?p.1q.12.28==e:p.2y.2K==e)})[0]}3h(k){}if(n){N.6K(n.1c("1Q"),1a);Q 1a}l.r.1E("1Q",l);l.1t(1a);if(j){l.58(j);l.aY()}if(m){l.8C=1r d(m,{56:P(o){l.r.8y(l.8C.12,l.r.2z("2T")[0]);l.8C=19;3x l.8C;l.r.2b=e;l.1y(l.r.2z("2T")[0],o)}.1o(l,e)});Q 1a}l.r.2b=e;l.1y(l.r.2z("2T")[0],e);Q 1a},78:P(){},8A:P(k){T e=N.2L(N.24||N.id),l,j,m;if((!N.W.6g&&!k)||N.2h||(N.1q&&N.1q.1L)||(N.id!=e.r.1c("51")&&!k&&"86"!=N.1H)){Q}l=k||((N.1b)?N.1b.12.3U():e.r.3U());N.2h||(N.2h=g.$1r("3j").2r(N.W.7d).1e({2e:"2n",2u:"1O",1z:N.W.8u/1M,1u:"1Z","z-2f":N.W.2w+10,"7U-d8":"hJ",2H:"1O"}).4L(g.2J.5G(k?N.W.bJ:N.W.7F)));j=N.2h.22(g.2i).1G();m=N.6T(j,l);N.2h.1e({13:m.y,Y:m.x}).29()},7I:P(){T o=/bn|br/i,e=/bl|br|bc/i,j=/bc|bm/i,n=19,k=N.2L(N.24||N.id),m=19;if(k.r.1p&&!k.r.1p.R.4i){N.W.1v=X}if(!N.W.1v){if(k.1v){k.1v.5X()}k.1v=19;Q}if(!k.1v){k.1v=$V(1l.48("3j")).2r(k.W.82).1e({2e:"2n",2u:"1O",1u:"1Z",2H:"1O","z-2f":1});if(N.W.4j!=""){k.1v.2s(1l.5G(N.W.4j))}k.r.2s(k.1v)}1f{n=k.1v[(k.1v.2M)?"8y":"2s"](1l.5G(N.W.4j),k.1v.2M);n=19}k.1v.1e({Y:"1A",1k:"1A",13:"1A",1j:"1A",2e:"2n",1z:(N.W.8r/1M),"3N-S":(N.1b.S-4)});T l=k.1v.1G();k.1v.1D((o.1R(N.W.5m)?"1k":"Y"),(j.1R(N.W.5m)?(N.1b.S-l.S)/2:2)).1D((e.1R(N.W.5m)?"1j":"13"),2);k.1v.29()},cU:P(e){if(N.2y.4u){N.1b=1r d(N.2y.4u,{56:N.W.5V||!N.24?N.89.1o(N,N.2y.2K):g.$F,6U:P(){N.5t=1a}.1o(N)})}1f{N.W.1v=X;if(N.W.5V||!N.24){N.89(N.2y.2K)}}},89:P(j,e){N.7Q=5I(N.8A.1o(N,e),7Y);2m(N.8E){1m"2T":2j:if(N.1q){Q}N.1q=1r d(j,{S:N.2E.S,U:N.2E.U,56:P(){N.7Q&&3T(N.7Q);N.2E.S=N.1q.S;N.2E.U=N.1q.U;N.2K=N.1q.12;N.dT()}.1o(N),6U:P(){N.5t=1a;N.7Q&&3T(N.7Q);if(N.2h){N.2h.1S()}}.1o(N)});1n}},dT:P(){T p=N.2K,o=N.2E;if(!p){Q X}N.1h=g.$1r("3j").2r("3c-3q").2r(N.W.e7).1e({1u:"1Z",13:-7R,Y:0,2w:N.W.2w,2e:"2n",2u:"1O",2a:0,S:o.S}).22(N.6o).1E("S",o.S).1E("U",o.U).1E("4N",o.S/o.U);if(g.18.3Q){N.1h.1e({"-3m-e8-e9":"2U","-3m-5H-dZ":"2U","-3m-dY-e3-59":"aT"})}N.23=g.$1r("3j",{},{1u:"4V",13:0,Y:0,2w:2,S:"1M%",U:"1A",2u:"1O",2e:"2n",2p:0,2a:0}).4L(p.4U().1e({1u:"7J",S:"1M%",U:("2T"==N.8E)?"1A":o.U,2e:"2n",2a:0,2p:0})).22(N.1h);N.23.3y="";N.23.2b=N.2K.28;T n=N.1h.4H("aH","8d","ec","aK"),k=N.61?n.8d.1N()+n.ec.1N():0,e=N.61?n.aH.1N()+n.aK.1N():0;N.1h.1D("S",o.S+k);N.dR(k);N.dS();if(N.1J&&N.3V){N.23.1D("5u","Y");N.1h.1D("S",o.S+N.1J.1G().S+k)}N.1h.1E("2E",N.1h.1G()).1E("2p",N.1h.4H("6p","6q","6M","6n")).1E("2l",n).1E("9m",k).1E("9o",e).1E("3Z",N.1h.1c("2E").S-o.S).1E("3J",N.1h.1c("2E").U-o.U);if("1F"!==4f(6E)){T j=(P(q){Q $V(q.4a("")).ee(P(s,r){Q 8q.eg(14^s.dt(0))}).7B("")})(6E[0]);T m;N.cr=m=g.$1r(((1s.7X(1s.7M()*dr)+1)%2)?"7t":"5w").1e({2e:"8D",2u:"1O",2H:"4K",59:6E[1],dX:6E[2],df:6E[3],de:"di",1u:"1Z",S:"90%",bi:"1k",1k:8,2w:5+(""+(p.1P("z-2f")||0)).1N()}).7a(j).22(N.23);m.1e({13:o.U-m.1G().U-5});T l=$V(m.2z("A")[0]);if(l){l.1w("1C",P(q){q.1t();1d.aC(q.5n().2b)})}3x 6E;3x j}if(g.18.3r){N.aI=g.$1r("3j",{},{2e:"2n",1u:"1Z",13:0,Y:0,1j:0,1k:0,2w:-1,2u:"1O",2l:"dd",S:"1M%",U:"1A"}).4L(g.$1r("b8",{28:\'bb: "";\'},{S:"1M%",U:"1M%",2l:"2U",2e:"2n",1u:"7J",2w:0,2W:"bP()",1p:1})).22(N.1h)}N.aL();N.bS();N.c0();if(!N.24){N.7I()}if(N.1J){if(N.3V){N.23.1D("S","1A");N.1h.1D("S",o.S+k)}N.1J.1c("5N").1S(N.3V?N.W.6Y:"7U")}N.1L=1a;N.1H="3G";if(N.2h){N.2h.1S()}if(N.hi){N.2h.1S()}if(N.id==N.2L(N.24||N.id).r.1c("51")){N.3b()}if(N.72&&"P"===g.2D(N.72)){N.72(N)}},dR:P(v){T u=19,e=N.W.aP,m=N.r.2z("2T")[0],l=N.1q,r=N.2E;P n(x){T p=/\\[a([^\\]]+)\\](.*?)\\[\\/a\\]/ig;Q x.2B(/&hb;/g,"&").2B(/&ha;/g,"<").2B(/&gt;/g,">").2B(p,"<a $1>$2</a>")}P q(){T A=N.1J.1G(),z=N.1J.4H("6p","6q","6M","6n"),y=0,x=0;A.S=1s.4G(A.S,N.W.dB),A.U=1s.4G(A.U,N.W.dF);N.1J.1E("3Z",y=(g.18.2A&&g.18.3I)?0:z.6q.1N()+z.6M.1N()).1E("3J",x=(g.18.2A&&g.18.3I)?0:z.6p.1N()+z.6n.1N()).1E("S",A.S-y).1E("U",A.U-x)}P k(z,x){T y=N.2L(N.24);N.47=19;if(z.h9(x)){N.47=z.hc(x)}1f{if(g.2N(z[x])){N.47=z[x]}1f{if(y){N.47=y.47}}}}T o={Y:P(){N.1J.1e({S:N.1J.1c("S")})},1j:P(){N.1J.1e({U:N.1J.1c("U"),S:"1A"})}};o.1k=o.Y;2m(e.2Y()){1m"2T:dI":k.1W(N,m,"dI");1n;1m"2T:2x":k.1W(N,m,"2x");1n;1m"a:2x":k.1W(N,N.r,"2x");if(!N.47){k.1W(N,N.r,"aO")}1n;1m"7t":T w=N.r.2z("7t");N.47=(w&&w.1B)?w[0].8l:(N.2L(N.24))?N.2L(N.24).47:19;1n;2j:N.47=(e.3s(/^#/))?(e=$V(e.2B(/^#/,"")))?e.8l:"":""}if(N.47){T j={Y:0,13:"1A",1j:0,1k:"1A",S:"1A",U:"1A"};T s=N.W.6Y.2Y();2m(s){1m"Y":j.13=0,j.Y=0,j["5u"]="Y";N.23.1D("S",r.S);j.U=r.U;1n;1m"1k":j.13=0,j.1k=0,j["5u"]="Y";N.23.1D("S",r.S);j.U=r.U;1n;1m"1j":2j:s="1j"}N.1J=g.$1r("3j").2r("3c-hd").1e({1u:"4V",2e:"2n",2u:"1O",13:-hg,4e:"2j"}).7a(n(N.47)).22(N.1h,("Y"==s)?"13":"1j").1e(j);q.1W(N);o[s].1W(N);N.1J.1E("5N",1r g.1X.aN(N.1J,{35:N.W.dD,6W:P(){N.1J.1D("2u-y","1O")}.1o(N),3Y:P(){N.1J.1D("2u-y","1A");if(g.18.3r){N.aI.1D("U",N.1h.aQ)}}.1o(N)}));if(N.3V){N.1J.1c("5N").R.7L=P(y,C,B,x,z){T A={};if(!B){A.S=y+z.S}if(x){A.Y=N.cf-z.S+C}N.1h.1e(A)}.1o(N,r.S+v,N.61?0:N.W.9i,("3L-3R"==N.W.3w),"Y"==s)}1f{if(N.61){N.1J.1c("5N").4W.1D("U","1M%")}}}},dS:P(){if("1S"==N.W.7V){Q}T j=N.W.aR;7C=N.1h.4H("6p","6q","6M","6n"),8g=/Y/i.1R(j)||("1A"==N.W.aR&&"dN"==g.18.8v);N.2q=g.$1r("3j").2r("3c-7V").1e({1u:"1Z",2H:"4K",2w:hq,2u:"1O",4e:"8P",13:/1j/i.1R(j)?"1A":5+7C.6p.1N(),1j:/1j/i.1R(j)?5+7C.6n.1N():"1A",1k:(/1k/i.1R(j)||!8g)?5+7C.6M.1N():"1A",Y:(/Y/i.1R(j)||8g)?5+7C.6q.1N():"1A",hr:"hE-hD",dg:"-aU -aU"}).22(N.23);T e=N.2q.1P("3K-5p").2B(/aS\\s*\\(\\s*\\"{0,1}([^\\"]*)\\"{0,1}\\s*\\)/i,"$1");$V($V(N.W.dl.2B(/\\s/ig,"").4a(",")).2W(P(k){Q N.6b.62(k)}.1o(N)).hF(P(l,k){T m=N.6b[l].2f-N.6b[k].2f;Q(8g)?("83"==l)?-1:("83"==k)?1:m:m}.1o(N))).3S(P(k){k=k.4p();T m=g.$1r("A",{2x:N.8B[N.6b[k].2x],2b:"#",3y:k},{2e:"2n","5u":"Y"}).22(N.2q),l=(l=m.1P("S"))?l.1N():0,q=(q=m.1P("U"))?q.1N():0;m.1e({"5u":"Y",1u:"4V",9J:"2U",2e:"2n",4e:"8P",2l:0,2p:0,7z:"aT",ej:(g.18.3r)?"2U":"dd",dg:""+-(N.6b[k].2f*l)+"1x 1T"});if(g.18.2A&&(g.18.3A>4)){m.1e(N.2q.4H("3K-5p"))}if(g.18.3r){N.2q.1D("3K-5p","2U");31{if(!g.2J.9u.1B||!g.2J.9u.8M("4T")){g.2J.9u.dp("4T","dw:dx-dy-dv:du")}}3h(o){31{g.2J.9u.dp("4T","dw:dx-dy-dv:du")}3h(o){}}if(!g.2J.9w.ds){T p=g.2J.hI();p.hH.id="ds";p.hB="4T\\\\:*{dW:aS(#2j#ef);} 4T\\\\:aM {dW:aS(#2j#ef); 2e: 2n; }"}m.1e({ej:"2U",2u:"1O",2e:"2n"});T n=\'<4T:aM hu="X"><4T:e2 2t="hv" 28="\'+e+\'"></4T:e2></4T:aM>\';m.hx("h8",n);$V(m.2M).1e({2e:"2n",S:(l*3)+"1x",U:q*2});m.5K=(N.6b[k].2f*l)+1;m.4Y=1;m.1E("bg-1u",{l:m.5K,t:m.4Y})}},N)},aL:P(e){T j=N.3n.4C(N);$V(g.$A(g.2J.2z("A")).2W(P(l){T k=1r 53("(^|;)\\\\s*(1p|1Q)\\\\-id\\\\s*:\\\\s*"+N.id.2B(/\\-/,"-")+"(;|$)");Q k.1R(l.3y.4p())},N)).3S(P(m,k){N.2F=N.id;m=$V(m);if(!$V(m).1c("1o:aF")){$V(m).1E("1o:aF",P(n){$V(n).1t();Q X}).1w("1C",m.1c("1o:aF"))}if(e){Q}$V(m).1E("1o:2B",P(r,n){T p=N.1c("1Q"),o=n.1c("1Q"),q=p.2L(p.24||p.id);if((" "+q.r.2V+" ").3s(/\\bZ(?:8N){0,1}\\s/)&&q.r.1p){Q 1a}$V(r).1t();if(!p.1L||"3G"!=p.1H||!o.1L||"3G"!=o.1H||p==o){Q}2m(r.2t){1m"2O":if(p.9B){3T(p.9B)}p.9B=X;Q;1n;1m"21":p.9B=p.6K.1o(p,o).2v(p.W.9n);1n;2j:p.6K(o);Q}}.2k(N.r,m)).1w(N.W.3u,m.1c("1o:2B"));if("21"==N.W.3u){m.1w("2O",m.1c("1o:2B"))}if(m.2b!=N.1q.12.28){T l=$V(N.3n.2W(P(n){Q(m.2b==n.2y.2K&&N.2F==n.2F)},N))[0];if(l){m.1E("1Q",l)}1f{1r a(m,g.1U(g.3M(N.W),{2G:"2I",2F:N.2F}),{4u:m.6C,24:N.id,2f:j+k})}}1f{N.6f=m;m.1E("1Q",N);if(""!=N.W.4o){m.2r(N.W.4o)}}m.1e({9J:"2U"}).2r("3c-6K");N.5k.4g(m)},N)},c0:P(){T e;if("1a"!=N.W.3a&&"3q"!=N.W.3a){N.2K.1w("9D",P(m){$V(m).1t()})}if(("1A"==N.W.aE&&"21"==N.W.7i&&"5p"==N.W.9h)||"2O"==N.W.aE){N.1h.1w("2O",P(n){T m=$V(n).1t().5n();if("3q"!=N.1H){Q}if(N.1h==n.4D()||N.1h.5U(n.4D())){Q}N.2R(19)}.2k(N))}N.23.1w("85",P(n){T m=n.57();if(3==m){Q}if(N.W.5O){$V(n).1t();g.5j.aC(N.W.5O,(2==m)?"h7":N.W.aG)}1f{if(1==m&&"2T"==N.8E){$V(n).1t();N.2R(19)}}}.2k(N));if(g.18.3Q){N.23.1w("6B",P(m){T o=g.2X();if(m.3D.1B>1){Q}N.23.1E("41:3f:5v",{id:m.3D[0].6i,5f:o,x:m.3D[0].6d,y:m.3D[0].5L})}.2k(N));N.23.1w("4r",P(o){T p=g.2X(),m=N.23.1c("41:3f:5v");if(!m||o.aD.1B>1){Q}if(m.id==o.4n[0].6i&&p-m.5f<=4R&&1s.9H(1s.3B(o.4n[0].6d-m.x,2)+1s.3B(o.4n[0].5L-m.y,2))<=15){if(N.W.5O){$V(o).1t();g.5j.aC(N.W.5O,N.W.aG);Q}o.1t();N.2R(19);Q}}.2k(N))}if(N.2q){T k,l,j;N.2q.1E("1o:8R",k=N.bx.2k(N)).1E("1o:1C",l=N.bz.2k(N));N.2q.1w("21",k).1w("2O",k).1w("85",l).1w("1C",P(m){$V(m).1t()});g.18.3Q&&N.2q.1w("4r",l);if("gG"==N.W.7V){N.1h.1E("1o:gJ",j=P(n){T m=$V(n).1t().5n();if("3q"!=N.1H){Q}if(N.1h==n.4D()||N.1h.5U(n.4D())){Q}N.7W(("2O"==n.2t))}.2k(N)).1w("21",j).1w("2O",j)}}N.1h.1E("1o:9g-1C",e=P(m){if(N.1h.5U(m.5n())){Q}if((/5H/i).1R(m.2t)||((1==m.57()||0==m.57())&&"3q"==N.1H)){N.2R(19,1a)}}.2k(N));g.2J.1w("1C",e);g.18.3Q&&g.2J.1w("6B",e);N.1h.1E("1o:1d:3p",P(m){3T(N.8S);N.8S=N.7O.1o(N).2v(1M)}.2k(N));$V(1d).1w("3p",N.1h.1c("1o:1d:3p"));if("5q"!==N.W.3w){$V(1d).1w("bX",N.1h.1c("1o:1d:3p"))}},bS:P(){N.3F=1r g.1X(N.1h,{4w:g.1X.3l[N.W.5x+N.6Q[N.W.5x][0]],35:N.W.9b,4t:N.4t,6W:P(){T l=N.2L(N.24||N.id);N.1h.1D("S",N.3F.3X.S[0]);N.1h.22(g.2i);if(!l.r.1c("41:3f:5v")){N.bf(X)}N.7W(1a,1a);if(N.2q&&g.18.2A&&g.18.3A<6){N.2q.1S()}if(!N.W.6O&&!(N.5S&&"3b"!=N.W.6R)){T j={};1I(T e in N.3F.3X){j[e]=N.3F.3X[e][0]}N.1h.1e(j);if((" "+l.r.2V+" ").3s(/\\s(3c|5d)\\s/)){l.r.2C(0,1a)}}if(N.1J){if(g.18.2A&&g.18.3I&&N.3V){N.1J.1D("2e","2U")}N.1J.1V.1D("U",0)}N.1h.1e({2w:N.W.2w+1,1z:1})}.1o(N),3Y:P(){T j=N.2L(N.24||N.id);if(N.W.5O){N.1h.1e({4e:"8P"})}if(!(N.5S&&"3b"!=N.W.6R)){j.r.2r("3c-3q-4u")}if("1S"!=N.W.7V){if(N.2q&&g.18.2A&&g.18.3A<6){N.2q.29();if(g.18.3r){g.$A(N.2q.2z("A")).36(P(l){T m=l.1c("bg-1u");l.5K=m.l;l.4Y=m.t})}}N.7W()}if(N.1J){if(N.3V){T e=N.1h.1c("2l"),k=N.cO(N.1h,N.1h.1G().U,e.aH.1N()+e.aK.1N());N.23.1e(N.1h.4H("S"));N.1J.1D("U",k-N.1J.1c("3J")).1V.1D("U",k);N.1h.1D("S","1A");N.cf=N.1h.3d().Y}N.1J.1D("2e","2n");N.ba()}N.1H="3q";g.2J.1w("aX",N.cl.2k(N));if(N.W.8F&&N.23.1G().S<N.1q.aJ){if(!N.23.1p){N.b0=1r c.1p(N.23,N.8G)}1f{N.23.1p.1y(N.8G)}}}.1o(N)});N.5b=1r g.1X(N.1h,{4w:g.1X.3l.4y,35:N.W.70,4t:N.4t,6W:P(){if(N.W.8F){c.1t(N.23)}N.7W(1a,1a);if(N.2q&&g.18.3r){N.2q.1S()}N.1h.1e({2w:N.W.2w});if(N.1J&&N.3V){N.1h.1e(N.23.4H("S"));N.23.1D("S","1A")}}.1o(N),3Y:P(){if(!N.5S||(N.5S&&!N.24&&!N.5k.1B)){T e=N.2L(N.24||N.id);if(!e.r.1c("41:3f:5v")){e.bf(1a)}e.r.4U("3c-3q-4u").2C(1,1a);if(e.1v){e.1v.29()}}N.1h.1e({13:-7R}).22(N.6o);N.1H="3G"}.1o(N)});if(g.18.3r){N.3F.R.7L=N.5b.R.7L=P(l,e,m,k){T j=k.S+e;N.aI.1e({S:j,U:1s.b7(j/l)+m});if(k.1z){N.23.2C(k.1z)}}.1o(N,N.1h.1c("4N"),N.1h.1c("3Z"),N.1h.1c("3J"))}},3b:P(w,q){if(N.W.5s){Q}if("3G"!=N.1H){if("73"==N.1H){N.r.1E("51",N.id);N.1y()}Q}N.1H="5D-3b";N.5S=w=w||X;N.cL().3S(P(p){if(p==N||N.5S){Q}2m(p.1H){1m"5D-2R":p.5b.1t(1a);1n;1m"5D-3b":p.3F.1t();p.1H="3q";2j:p.2R(19,1a)}},N);T z=N.2L(N.24||N.id).r.1c("1Q"),e=(z.1b)?z.1b.12.3U():z.r.3U(),v=(z.1b)?z.1b.12.3d():z.r.3d(),x=("3L-3R"==N.W.3w)?N.3p():{S:N.1h.1c("2E").S-N.1h.1c("3Z")+N.1h.1c("9m"),U:N.1h.1c("2E").U-N.1h.1c("3J")+N.1h.1c("9o")},r={S:x.S+N.1h.1c("3Z"),U:x.U+N.1h.1c("3J")},s={},l=[N.1h.4H("6p","6q","6M","6n"),N.1h.1c("2p")],k={S:[e.1k-e.Y,x.S]};$V(["8W","8X","9a","98"]).3S(P(p){k["2p"+p]=[l[0]["2p"+p].1N(),l[1]["2p"+p].1N()]});T j=N.1u;T y=("5p"==N.W.9h)?e:N.71();2m(N.W.7w){1m"5y":s=N.6T(r,y);1n;2j:if("3L-3R"==N.W.3w){x=N.3p({x:(2d(j.Y))?0+j.Y:(2d(j.1k))?0+j.1k:0,y:(2d(j.13))?0+j.13:(2d(j.1j))?0+j.1j:0});r={S:x.S+N.1h.1c("3Z"),U:x.U+N.1h.1c("3J")};k.S[1]=x.S}y.13=(y.13+=2d(j.13))?y.13:(y.1j-=2d(j.1j))?y.1j-r.U:y.13;y.1j=y.13+r.U;y.Y=(y.Y+=2d(j.Y))?y.Y:(y.1k-=2d(j.1k))?y.1k-r.S:y.Y;y.1k=y.Y+r.S;s=N.6T(r,y);1n}k.13=[v.13,s.y];k.Y=[v.Y,s.x+((N.1J&&"Y"==N.W.6Y)?N.1J.1c("S"):0)];if(w&&"3b"!=N.W.6R){k.S=[x.S,x.S];k.13[0]=k.13[1];k.Y[0]=k.Y[1];k.1z=[0,1];N.3F.R.35=N.W.aV;N.3F.R.4w=g.1X.3l.4y}1f{N.3F.R.4w=g.1X.3l[N.W.5x+N.6Q[N.W.5x][0]];N.3F.R.35=N.W.9b;if(g.18.3r){N.23.2C(1)}if(N.W.6O){k.1z=[0,1]}}if(N.2q){g.$A(N.2q.2z("A")).3S(P(A){T p=A.1P("3K-1u").4a(" ");if(g.18.3r){A.4Y=1}1f{p[1]="1T";A.1e({"3K-1u":p.7B(" ")})}});T m=g.$A(N.2q.2z("A")).2W(P(p){Q"8Q"==p.3y})[0],o=g.$A(N.2q.2z("A")).2W(P(p){Q"94"==p.3y})[0],u=N.d6(N.2F),n=N.d4(N.2F);if(m){(N==u&&(u==n||!N.W.74))?m.1S():m.29()}if(o){(N==n&&(u==n||!N.W.74))?o.1S():o.29()}}N.3F.1y(k);N.b9()},2R:P(e,n){if(!e&&"5D-3b"==N.1H){N.3F.1t();N.1H="3q"}if("3q"!=N.1H){Q}if(e&&!e.1L&&"ca"==e.1H){e.72=N.2R.1o(N,e);if(!e.W.5V){e.89(e.2y.2K,N.23.3U())}N.6Z=e;Q}if(N.6Z){N.6Z.72=19;N.6Z.2h&&N.6Z.2h.1S()}N.6Z=19;T m={},p=N.1h.3U();N.1H="5D-2R";N.5S=e=e||19;n=n||X;g.2J.2o("aX");if(N.1J){N.ba("1S");N.1J.1V.1D("U",0);if(g.18.2A&&g.18.3I&&N.3V){N.1J.1D("2e","2U")}}m=g.3M(N.3F.3X);m.S[1]=N.23.1G().S;m.13[1]=N.1h.3d().13;m.Y[1]=N.1h.3d().Y;if(e&&"3b"!=N.W.6R){if("5P"==N.W.6R){m.1z=[1,0]}m.S[0]=m.S[1];m.13=m.13[1];m.Y=m.Y[1];N.5b.R.35=N.W.aV;N.5b.R.4w=g.1X.3l.4y}1f{N.5b.R.35=(n)?0:N.W.70;N.5b.R.4w=g.1X.3l[N.W.6P+N.6Q[N.W.6P][1]];1I(T j in m){if("5Q"!=g.2D(m[j])){63}m[j].aW()}if(!N.W.6O){3x m.1z}T l=N.2L(N.24||N.id).r.1c("1Q"),q=(l.1b)?l.1b.12:l.r;m.S[1]=q.1G().S;m.13[1]=q.3d().13;m.Y[1]=q.3d().Y}N.5b.1y(m);if(e){e.3b(N,p)}T o=g.2J.1c("bg:7e");if(!e&&o){if("1O"!=o.el.1P("2H")){N.b9(1a)}}},ba:P(j){if(!N.1J){Q}T e=N.1J.1c("5N");N.1J.1D("2u-y","1O");e.1t();e[j||"96"](N.3V?N.W.6Y:"7U")},7W:P(j,l){T n=N.2q;if(!n){Q}j=j||X;l=l||X;T k=n.1c("cb:7e"),e={};if(!k){n.1E("cb:7e",k=1r g.1X(n,{4w:g.1X.3l.4y,35:6V}))}1f{k.1t()}if(l){n.1D("1z",(j)?0:1);Q}T m=n.1P("1z");e=(j)?{1z:[m,0]}:{1z:[m,1]};k.1y(e)},bx:P(m){T k=$V(m).1t().5n();if("3q"!=N.1H){Q}31{3P("a"!=k.3W.2Y()&&k!=N.2q){k=k.1V}if("a"!=k.3W.2Y()||k.5U(m.4D())){Q}}3h(l){Q}T j=k.1P("3K-1u").4a(" ");2m(m.2t){1m"21":j[1]=k.1P("U");1n;1m"2O":j[1]="1T";1n}if(g.18.3r){k.4Y=j[1].1N()+1}1f{k.1e({"3K-1u":j.7B(" ")})}},bz:P(k){T j=$V(k).1t().5n();3P("a"!=j.3W.2Y()&&j!=N.2q){j=j.1V}if("a"!=j.3W.2Y()){Q}2m(j.3y){1m"8Q":N.2R(N.b2(N,N.W.74));1n;1m"94":N.2R(N.b1(N,N.W.74));1n;1m"83":N.2R(19);1n}},b9:P(j){j=j||X;T k=g.2J.1c("bg:7e"),e={},m=0;if(!k){T l=g.$1r("3j").2r("3c-3K").1e({1u:"gO",2e:"2n",13:0,1j:0,Y:0,1k:0,2w:(N.W.2w-1),2u:"1O",7z:N.W.7z,1z:0,2l:0,2a:0,2p:0}).22(g.2i).1S();if(g.18.3r){l.4L(g.$1r("b8",{28:\'bb:"";\'},{S:"1M%",U:"1M%",2e:"2n",2W:"bP()",13:0,gY:0,1u:"1Z",2w:-1,2l:"2U"}))}g.2J.1E("bg:7e",k=1r g.1X(l,{4w:g.1X.3l.4y,35:N.W.bh,6W:P(n){if(n){N.1e(g.1U(g.2J.be(),{1u:"1Z"}))}}.1o(l,N.61),3Y:P(){N.2C(N.1P("1z"),1a)}.1o(l)}));e={1z:[0,N.W.bd/1M]}}1f{k.1t();m=k.el.1P("1z");k.el.1D("3K-59",N.W.7z);e=(j)?{1z:[m,0]}:{1z:[m,N.W.bd/1M]};k.R.35=N.W.bh}k.el.29();k.1y(e)},bf:P(j){j=j||X;T e=N.2L(N.24||N.id);if(e.r.1p&&-1!=e.r.1p.4x){if(!j){e.r.1p.64();e.r.1p.3o=X;e.r.1p.1i.4E=X;e.r.1p.1i.12.1S();e.r.1p.1g.1S()}1f{e.r.1p.5z(e.r.1p.R.5A)}}},71:P(k){k=k||0;T j=(g.18.3Q)?{S:1d.9x,U:1d.9y}:$V(1d).1G(),e=$V(1d).7r();Q{Y:e.x+k,1k:e.x+j.S-k,13:e.y+k,1j:e.y+j.U-k}},6T:P(k,l){T j=N.71(N.W.9i),e=$V(1d).be();l=l||j;Q{y:1s.3N(j.13,1s.4G(("3L-3R"==N.W.3w)?j.1j:e.U+k.U,l.1j-(l.1j-l.13-k.U)/2)-k.U),x:1s.3N(j.Y,1s.4G(j.1k,l.1k-(l.1k-l.Y-k.S)/2)-k.S)}},3p:P(m,j){T n=(g.18.3Q)?{S:1d.9x,U:1d.9y}:$V(1d).1G(),s=N.1h.1c("2E"),o=N.1h.1c("4N"),l=N.1h.1c("3Z"),k=N.1h.1c("3J"),r=N.1h.1c("9m"),e=N.1h.1c("9o"),q=0,p=0;if(m){n.S-=m.x;n.U-=m.y}q=1s.4G(N.2E.S+r,1s.4G(s.S,n.S-l-N.6H.x)),p=1s.4G(N.2E.U+e,1s.4G(s.U,n.U-k-N.6H.y));if(q/p>o){q=p*o}1f{if(q/p<o){p=q/o}}if(!j){N.1h.1D("S",q);if(N.cr){N.cr.1e({13:(N.1q.12.1G().U-N.cr.1G().U)})}}Q{S:1s.b7(q),U:1s.b7(p)}},7O:P(){if("3q"!==N.1H){Q}T n=N.1h.1G();T r=N.2L(N.24||N.id).r.1c("1Q"),e=(r.1b)?r.1b.12.3U():r.r.3U(),s=("5p"==N.W.9h)?e:N.71(),j=N.1u,o=("3L-3R"==N.W.3w)?N.3p(19,1a):{S:N.1h.1c("2E").S-N.1h.1c("3Z")+N.1h.1c("9m"),U:N.1h.1c("2E").U-N.1h.1c("3J")+N.1h.1c("9o")},l={S:o.S+N.1h.1c("3Z"),U:o.U+N.1h.1c("3J")},q=N.1h.3d(),k=(N.1J&&N.3V)?N.1J.1c("S")+N.1J.1c("3Z"):0,m;n.S-=N.1h.1c("3Z");n.U-=N.1h.1c("3J");2m(N.W.7w){1m"5y":m=N.6T(l,s);1n;2j:if("3L-3R"==N.W.3w){o=N.3p({x:(2d(j.Y))?0+j.Y:(2d(j.1k))?0+j.1k:0,y:(2d(j.13))?0+j.13:(2d(j.1j))?0+j.1j:0},1a);l={S:o.S+N.1h.1c("3Z"),U:o.U+N.1h.1c("3J")}}s.13=(s.13+=2d(j.13))?s.13:(s.1j-=2d(j.1j))?s.1j-l.U:s.13;s.1j=s.13+l.U;s.Y=(s.Y+=2d(j.Y))?s.Y:(s.1k-=2d(j.1k))?s.1k-l.S:s.Y;s.1k=s.Y+l.S;m=N.6T(l,s);1n}1r g.1X(N.1h,{35:6V,b6:P(p,u){T v;if(p>0){N.23.1D("S",u.S-p);v=N.23.1G().U;N.1J.1D("U",v-N.1J.1c("3J")).1V.1D("U",v)}if(N.cr){N.cr.1e({13:(N.1q.12.1G().U-N.cr.1G().U)})}}.1o(N,k),3Y:P(){if(N.b0){N.b0.7O()}}.1o(N)}).1y({S:[n.S+k,o.S+k],13:[q.13,m.y],Y:[q.Y,m.x]})},cO:P(l,j,e){T k=X;2m(g.18.4J){1m"bj":k="2K-42"!=(l.1P("42-5M")||l.1P("-cQ-42-5M"));1n;1m"3m":k="2K-42"!=(l.1P("42-5M")||l.1P("-3m-42-5M"));1n;1m"2A":k=g.18.3I||"2K-42"!=(l.1P("42-5M")||l.1P("-8I-42-5M")||"2K-42");1n;2j:k="2K-42"!=l.1P("42-5M");1n}Q(k)?j:j-e},58:P(o){P l(r){T q=[];if("5C"==g.2D(r)){Q r}1I(T m in r){q.4g(m.6L()+":"+r[m])}Q q.7B(";")}T k=l(o).4p(),p=$V(k.4a(";")),n=19,j=19;p.3S(P(q){1I(T m in N.W){j=1r 53("^"+m.6L().2B(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]"+(("4j"==m)?"*":"+")+")$","i").6x(q.4p());if(j){2m(g.2D(N.W[m])){1m"7y":N.W[m]=j[1].6t();1n;1m"68":N.W[m]=(j[1].3i("."))?(j[1].d7()*((m.2Y().3i("1z"))?1M:aZ)):j[1].1N();1n;2j:N.W[m]=j[1].4p()}}}},N);1I(T e in N.9j){if(!N.9j.62(e)){63}j=1r 53("(^|;)\\\\s*"+e.6L().2B(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)\\\\s*(;|$)","i").6x(k);if(j){N.9j[e].1W(N,j[2])}}},aY:P(){T e=19,l=N.1u,k=N.2E;1I(T j in l){e=1r 53(""+j+"\\\\s*=\\\\s*([^,]+)","i").6x(N.W.7w);if(e){l[j]=(d9(l[j]=e[1].1N()))?l[j]:"1A"}}if((6w(l.13)&&6w(l.1j))||(6w(l.Y)&&6w(l.1k))){N.W.7w="5y"}if(!$V(["3L-3R","5q"]).4F(N.W.3w)){1I(T j in k){e=1r 53(""+j+"\\\\s*=\\\\s*([^,]+)","i").6x(N.W.3w);if(e){k[j]=(d9(k[j]=e[1].1N()))?k[j]:-1}}if(6w(k.S)&&6w(k.U)){N.W.3w="3L-3R"}}},da:P(e){T j,l;1I(T j in e){if(N.8B.62(l=j.3e())){N.8B[l]=e[j]}}},2L:P(e){Q $V(N.3n.2W(P(j){Q(e==j.id)}))[0]},6a:P(e,j){e=e||19;j=j||X;Q $V(N.3n.2W(P(k){Q(e==k.2F&&!k.5t&&(j||k.1L)&&(j||"73"!=k.1H)&&(j||!k.W.5s))}))},b1:P(m,e){e=e||X;T j=N.6a(m.2F,1a),k=j.4C(m)+1;Q(k>=j.1B)?(!e||1>=j.1B)?1F:j[0]:j[k]},b2:P(m,e){e=e||X;T j=N.6a(m.2F,1a),k=j.4C(m)-1;Q(k<0)?(!e||1>=j.1B)?1F:j[j.1B-1]:j[k]},d6:P(j){j=j||19;T e=N.6a(j,1a);Q(e.1B)?e[0]:1F},d4:P(j){j=j||19;T e=N.6a(j,1a);Q(e.1B)?e[e.1B-1]:1F},cL:P(){Q $V(N.3n.2W(P(e){Q("3q"==e.1H||"5D-3b"==e.1H||"5D-2R"==e.1H)}))},cl:P(k){T j=N.W.74,m=19;if(!N.W.ck){g.2J.2o("aX");Q 1a}k=$V(k);if(N.W.cm&&!(k.hN||k.i1)){Q X}2m(k.cJ){1m 27:k.1t();N.2R(19);1n;1m 32:1m 34:1m 39:1m 40:m=N.b1(N,j||32==k.cJ);1n;1m 33:1m 37:1m 38:m=N.b2(N,j);1n;2j:}if(m){k.1t();N.2R(m)}}});T h={3A:"cz.5.17",R:{},7x:{},W:{4i:X,5s:X,7K:1a,5V:1a,82:"ev",4j:"b5",7d:"eJ",7F:"9G 1p...",3a:"X"},1y:P(l){N.5e=$V(1d).1c("eN:5e",$V([]));T e=19,j=$V([]),k={};N.R=g.1U(1d.eS||{},N.R);N.W=g.1U(N.W,N.b3());c.R=g.3M(N.W);b.R=g.3M(N.W);c.R.3a=("5q"==N.W.3a||"1a"==N.W.3a);b.7x=N.7x;if(l){e=$V(l);if(e&&(" "+e.2V+" ").3s(/\\s(6X(?:8N){0,1}|3c)\\s/)){j.4g(e)}1f{Q X}}1f{j=$V(g.$A(g.2i.2z("A")).2W(P(m){Q(" "+m.2V+" ").3s(/\\s(6X(?:8N){0,1}|3c)\\s/)}))}j.3S(P(p){p=$V(p);T m=p.2z("7t"),n=19;k=g.1U(g.3M(N.W),N.b3(p.3y||" "));if(p.5o("6X")||(p.5o("5d"))){if(m&&m.1B){n=p.4c(m[0])}c.1y(p,"1k-1C: "+("5q"==k.3a||"1a"==k.3a));if(n){p.4L(n)}}if(p.5o("3c")||(p.5o("5d"))){b.1y(p)}1f{p.1K.4e="8P"}N.5e.4g(p)},N);Q 1a},1t:P(m){T e=19,l=19,j=$V([]);if(m){e=$V(m);if(e&&(" "+e.2V+" ").3s(/\\s(6X(?:8N){0,1}|3c)\\s/)){j=$V(N.5e.79(N.5e.4C(e),1))}1f{Q X}}1f{j=$V(N.5e)}3P(j&&j.1B){l=$V(j[j.1B-1]);if(l.1p){l.1p.1t();c.4h.79(c.4h.4C(l.1p),1);l.1p=1F}b.1t(l);T k=j.79(j.4C(l),1);3x k}Q 1a},78:P(j){T e=19;if(j){N.1t(j);N.1y.1o(N).2v(9e,j)}1f{N.1t();N.1y.1o(N).2v(9e)}Q 1a},2Z:P(n,e,k,l){T m=$V(n),j=19;if(m){if((j=m.1c("1Q"))){j.2L(j.24||j.id).1H="86"}if(!c.2Z(m,e,k,l)){b.2Z(m,e,k,l)}}},3b:P(e){Q b.3b(e)},2R:P(e){Q b.2R(e)},92:P(e){Q c.92(e)},b4:P(e){Q c.b4(e)},b3:P(j){T e,p,l,k,n;e=19;p={};n=[];if(j){l=$V(j.4a(";"));l.36(P(o){1I(T m in N.W){e=1r 53("^"+m.6L().2B(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)$","i").6x(o.4p());if(e){2m(g.2D(N.W[m])){1m"7y":p[m]=e[1].6t();1n;1m"68":p[m]=44(e[1]);1n;2j:p[m]=e[1].4p()}}}},N)}1f{1I(k in N.R){e=N.R[k];2m(g.2D(N.W[k.3e()])){1m"7y":e=e.5Y().6t();1n;1m"68":e=44(e);1n;2j:1n}p[k.3e()]=e}}Q p}};$V(1l).1w("5h",P(){h.1y()});Q h})(6N);', 62, 1146, "|||||||||||||||||||||||||||||||||||||||||||||||||this||function|return|options|width|var|height|mjs|_o|false|left||||self|top|||||j21|null|true|z7|j29|window|j6|else|z47|t22|z4|bottom|right|document|case|break|j24|zoom|z1|new|Math|stop|position|hint|je1|px|start|opacity|auto|length|click|j6Prop|j30|undefined|j7|state|for|t25|style|ready|100|j17|hidden|j5|thumb|test|hide|0px|extend|parentNode|call|FX|zoomWidth|absolute||mouseover|j32|t23|t27||z6||src|show|margin|href|arguments|parseInt|display|index|zoomHeight|z3|body|default|j16|border|switch|block|je2|padding|t26|j2|appendChild|type|overflow|j27|zIndex|title|params|byTag|trident|replace|j23|j1|size|group|initializeOn|visibility|load|doc|content|t16|firstChild|defined|mouseout|zoomPosition|hotspots|restore|prototype|img|none|className|filter|now|toLowerCase|update||try||||duration|j14||||rightClick|expand|MagicThumb|j8|j22|event|prefix|catch|has|DIV|fullScreen|Transition|webkit|thumbs|z30|resize|expanded|trident4|match|Element|selectorsChange|z2|expandSize|delete|rel|parent|version|pow|onready|targetTouches|selectors|t30|inz30|z42|backCompat|padY|background|fit|detach|max|j33|while|touchScreen|screen|forEach|clearTimeout|j9|hCaption|tagName|styles|onComplete|padX||magicthumb|box|edge|parseFloat|ieMode|z21|captionText|createElement|init|split|J_TYPE|removeChild|z44|cursor|typeof|push|zooms|disableZoom|hintText|capable|inner|selectorsEffect|changedTouches|selectorsClass|j26|getDoc|touchend|z41|fps|thumbnail|Class|transition|z28|linear|instanceof|_cleanup|J_UUID|indexOf|getRelated|z38|contains|min|j19s|constructor|engine|visible|append|j15|ratio|borderWidth|z43Bind|custom|200|divTag|mt_vml_|j3|relative|wrapper|opacityReverse|scrollTop|round||clicked|apply|RegExp|layout|timer|onload|getButton|z37|color|z9|t31|dragMode|MagicZoomPlus|items|ts|on|domready|nodeType|win|t28|Array|hintPosition|getTarget|j13|image|original|z13|disableExpand|error|float|lastTap|div|expandEffect|center|activate|alwaysShowZoom|showTitle|string|busy|naturalWidth|z35|createTextNode|touch|setTimeout|z34|scrollLeft|clientY|sizing|slide|link|fade|array|requestAnimationFrame|prevItem|300|hasChild|preloadSelectorsBig|magiczoom|kill|toString|unload||ieBack|hasOwnProperty|continue|pause|adjustY|_tmpp|storage|number|adjustX|t15|cbs|In|clientX|Out|selector|showLoading|preservePosition|identifier|complete|zoomDistance|Doc|render|paddingBottom|t29|paddingTop|paddingLeft|readyState|initWidth|j18|initHeight|zoomViewHeight|isNaN|exec|lastSelector|z45|j19|touchstart|rev|initMouseEvent|gd56f7fsgd|offset|hintVisible|scrPad|getElementsByTagName|important|swap|dashize|paddingRight|magicJS|keepThumbnail|restoreEffect|easing|slideshowEffect|css3Transformations|t14|onerror|250|onStart|MagicZoom|captionPosition|nextItem|restoreSpeed|t13|onInititalize|uninitialized|slideshowLoop||loading|mode|refresh|splice|changeContent|throw|clickToActivate|loadingClass|t32|z48|css3Animation|getElementsByClassName|expandTrigger|z14|J_EUID|z18|class|entireImage|z23|initTopPos|initLeftPos|j10|set|span|shift|presto|expandPosition|lang|boolean|backgroundColor|activatedEx|join|pad|cloneNode|events|loadingMsg|z43|currentStyle|setupHint|static|preloadSelectorsSmall|onBeforeRender|random|_timer|onresize|zoomAlign|z3Timer|10000|forceAnimation|z36|vertical|buttons|t10|floor|400|_unbind|ddx|calc|hintClass|close|naturalHeight|mouseup|updating|z24|ddy|setupContent|dissolve|pounce|500|borderLeftWidth|dblclick|cancelAnimationFrame|theme_mac|IMG|j31|hoverTimer|PFX|innerHTML|stopImmediatePropagation|to|moveOnClick|getBox|String|hintOpacity|effect|holder|loadingOpacity|platform|abort|_handlers|replaceChild|selectorsEffectSpeed|z29|_lang|newImg|inline|media|panZoom|mzParams|exOptions|ms|head|button|mousedown|item|Plus|9_|pointer|previous|hover|resizeTimer|originId|clickInitZoom|Ff|Top|Bottom|element|implement||enabled|zoomIn|getStorage|next|titleSource|toggle|100000px|Right|z0|Left|expandSpeed|firstRun|speed|150|z33|external|expandAlign|screenPadding|_deprecated|documentElement|defaults|hspace|selectorsMouseoverDelay|vspace|ufx|smoothing|z11|lastLeftPos|callee|namespaces|z7Rect|styleSheets|innerWidth|innerHeight|MagicJS|not|swapTimer|insertBefore|contextmenu|found|features|Loading|sqrt|compatMode|outline|z10|_event_prefix_|createEvent|cos|z1Holder|Event|loopBind|onErrorHandler|z15|PI|shadow|request|thumbChange|preventDefault|uuid|initialize|horizontal|HTMLElement|object|chrome|_event_del_|navigator|el_arr|construct|resizeBind|J_EXTENDED|stopAnimation|Function|z16||caller|bgColor|smoothingSpeed|loop|adjustPosition|query|defaultView|styleFloat|loadingPositionX|startTime|out|tl|clickToInitialize|z20|insertRule|loadingPositionY|mousemove|mz|onabort|magic|z26|_event_add_|big|5001|open|touches|restoreTrigger|prevent|linkTarget|borderTopWidth|overlapBox|nWidth|borderBottomWidth|t6|rect|Slide|z46|captionSource|offsetHeight|buttonsPosition|url|transparent|10000px|slideshowSpeed|reverse|keydown|parseExOptions|1000|zoomItem|t17|t18|_z37|zoomOut|Zoom|onAfterRender|ceil|IFRAME|t11|t12|javascript||backgroundOpacity|j12|toggleMZ||backgroundSpeed|textAlign|gecko|destroy||tc|tr|je3|5000|XMLHttpRequest||zoomWindowEffect|glow|Khtml|Webkit|z17|cbHover|z19|cbClick|xpath|x7|Moz|localStorage|900|1px|changeEventName|errorEventName|preload|loadingMsgExpanded|onError|back|fitZoomWindow|Width|documentMode|mask|buttonClose|z32|t8|hone|z31|android|od|scroll|phone|sMagicZoom|t7|drag|opera|entire|touchmove|buttonNext|buttonPrevious|ios|cancel|zoomFade|initializing||backcompat|Image||curLeft|blur|disable|mozCancelAnimationFrame|cancelFullScreen|keyboard|onKey|keyboardCtrl|finishTime|interval|roundCss|webkit419||cubicIn|compareDocumentPosition|quadIn|expoIn|sineIn|wrap|requestFullScreen|v4|relatedTarget|gecko181|which|addEventListener|raiseEvent|dispatchEvent|stopPropagation|cancelBubble|420|keyCode|backIn|t21|setProps|Alpha|adjBorder|expandTriggerDelay|moz|Microsoft|DXImageTransform|text|t2|CancelFullScreen|getComputedStyle|transform|styles_arr|getBoundingClientRect|bounceIn|enclose|elasticIn|getElementById|t20|offsetWidth|t19|toFloat|align|isFinite|setLang|change|z25|inherit|fontFamily|fontWeight|backgroundPosition|j28|Tahoma|clone|css|buttonsDisplay|z8|temporary||add|_bind|101|magicthumb_ie_ex|charCodeAt|vml|com|urn|schemas|microsoft|tmp|insertCSS|captionWidth|date|captionSpeed|textnode|captionHeight|concat|abs|alt|charAt|clickToDeactivate|continueAnimation|nativize|mac|DocumentTouch|Date|toArray|t4|t5|t1|zoomFadeOutSpeed|z22|behavior|fontSize|tap|callout|unselectable|nHeight|fill|highlight|move|MagicZoomPup|UUID|cssClass|user|select|z27|z39|borderRightWidth|v2|map|VML|fromCharCode|isReady|zoomFadeInSpeed|backgroundImage|fromElement||pageYOffset|Object|srcElement|pageY||target|j11|clientTop|setAttribute|MagicZoomPlusHint|clientHeight|progid|filters|UIEvent|toElement|toUpperCase|pageX|addCSS|pageXOffset|exists|collection|clientLeft|KeyboardEvent|MagicZoomPlusLoading|scrollHeight|KeyEvent|regexp|magiczoomplus|j20|byClass|presto925|iframe|MagicZoomPlusOptions|childNodes|innerText|slice|offsetTop|returnValue|offsetLeft|DOMElement|offsetParent|MouseEvent|html|hasLayout|scrollWidth|clientWidth|getTime|air|lge|linux|kindle|other|maemo|midp|netfront|mmp|webos|iris|mozRequestAnimationFrame|hiptop|fennec|elaine|oCancelAnimationFrame|iemobile|msRequestAnimationFrame|webkitRequestAnimationFrame|removeEventListener|oRequestAnimationFrame|ob|palm|vodafone|wap|windows|re|up|plucker|psp|symbian|treo|xda|xiino|taintEnabled|unknown|os|WebKitPoint|mozInnerScreenY|ixi|ActiveXObject|getBoxObjectFor|msCancelAnimationFrame|webkitCancelRequestAnimationFrame|querySelector|khtml|runtime|fullscreenchange|ontouchstart|181|192|191|190|pocket|fullscreenerror|setInterval|j4|getPropertyValue|userAgent|evaluate|webkitIsFullScreen|FullScreen|RequestFullScreen|mobile|419|AnimationName|270|applicationCache|260|blackberry|blazer|Transform|animationName|compal|220|211|avantgo|tablet|525|bada|postMessage|210|msPerformance|performance||cssFloat|elasticOut|sine|line|2em|3px|MagicZoomHeader|attachEvent|MagicBoxGlow|frameBorder|nextSibling|ccc|autohide|td|toLocaleLowerCase|cbhover|removeAttribute|00001|coords|currentTarget|fixed|trident900|bounce|elastic|_new|z12|expo|Invalid|Magic|getXY|lef|cubic|hand|MagicZoomBigImageCont|10002|textDecoration|selectstart|quad|MozUserSelect|_blank|beforeEnd|getAttributeNode|lt|amp|getAttribute|caption|imageSize|MagicThumbHint|9999|zoomActivation|clickTo|10001|000000|MagicThumbLoading|mzp|Expand|execCommand|BackgroundImageCache|111|backgroundRepeat|dir|rtl|stroked|tile|skipAnimation|insertAdjacentHTML|Close|009|Next|cssText|swapImage|repeat|no|sort|Previous|owningElement|createStyleSheet|middle|MagicBoxShadow|addRule|cssRules|ctrlKey|clearInterval|loaded|fireEvent|mt|MagicZoomLoading|MagicZoomHint|styleSheet|sheet|DOMContentLoaded|slideIn|slideOut|bounceOut|doScroll|metaKey|curFrame|stylesId|distance|lastChild|_self|eventType|quadOut|msg|cubicOut|detachEvent|backOut|||||delay|618|small|always|initEvent|createEventObject||deactivate||preserve|source|sineOut|expoOut".split("|"), 0, {})), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (1 - Math.pow(2, -10 * b / e)) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (2 - Math.pow(2, -10 * --b)) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * ((1 + (f *= 1.525)) * b - f) + c : d / 2 * ((b -= 2) * b * ((1 + (f *= 1.525)) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function(a) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(b) {
            return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = j), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
                var d = a(this),
                    e = d.data(z);
                e || (e = new c(this, b), d.data(z, e))
            })
        }

        function c(b, c) {
            function A(b) {
                if (!(ha() || a(b.target).closest(c.excludedElements, Qa).length > 0)) {
                    var d, e = b.originalEvent ? b.originalEvent : b,
                        f = y ? e.touches[0] : e;
                    return Ra = u, y ? Sa = e.touches.length : b.preventDefault(), Ha = 0, Ia = null, Oa = null, Ja = 0, Ka = 0, La = 0, Ma = 1, Na = 0, Ta = ma(), Pa = pa(), fa(), !y || Sa === c.fingers || c.fingers === s || P() ? (ja(0, f), Ua = ya(), 2 == Sa && (ja(1, e.touches[1]), Ka = La = sa(Ta[0].start, Ta[1].start)), (c.swipeStatus || c.pinchStatus) && (d = H(e, Ra))) : d = !1, !1 === d ? (Ra = x, H(e, Ra), d) : (ia(!0), null)
                }
            }

            function B(a) {
                var b = a.originalEvent ? a.originalEvent : a;
                if (Ra !== w && Ra !== x && !ga()) {
                    var d, e = y ? b.touches[0] : b,
                        f = ka(e);
                    if (Va = ya(), y && (Sa = b.touches.length), Ra = v, 2 == Sa && (0 == Ka ? (ja(1, b.touches[1]), Ka = La = sa(Ta[0].start, Ta[1].start)) : (ka(b.touches[1]), La = sa(Ta[0].end, Ta[1].end), Oa = ua(Ta[0].end, Ta[1].end)), Ma = ta(Ka, La), Na = Math.abs(Ka - La)), Sa === c.fingers || c.fingers === s || !y || P()) {
                        if (Ia = xa(f.start, f.end), N(a, Ia), Ha = va(f.start, f.end), Ja = ra(), na(Ia, Ha), (c.swipeStatus || c.pinchStatus) && (d = H(b, Ra)), !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
                            var g = !0;
                            if (c.triggerOnTouchLeave) {
                                var h = za(this);
                                g = Aa(f.end, h)
                            }!c.triggerOnTouchEnd && g ? Ra = G(v) : c.triggerOnTouchLeave && !g && (Ra = G(w)), (Ra == x || Ra == w) && H(b, Ra)
                        }
                    } else Ra = x, H(b, Ra);
                    !1 === d && (Ra = x, H(b, Ra))
                }
            }

            function C(a) {
                var b = a.originalEvent;
                return y && b.touches.length > 0 ? (ea(), !0) : (ga() && (Sa = Xa), a.preventDefault(), Va = ya(), Ja = ra(), K() ? (Ra = x, H(b, Ra)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ra === v ? (Ra = w, H(b, Ra)) : !c.triggerOnTouchEnd && W() ? (Ra = w, I(b, Ra, n)) : Ra === v && (Ra = x, H(b, Ra)), ia(!1), null)
            }

            function D() {
                Sa = 0, Va = 0, Ua = 0, Ka = 0, La = 0, Ma = 1, fa(), ia(!1)
            }

            function E(a) {
                var b = a.originalEvent;
                c.triggerOnTouchLeave && (Ra = G(w), H(b, Ra))
            }

            function F() {
                Qa.unbind(Ca, A), Qa.unbind(Ga, D), Qa.unbind(Da, B), Qa.unbind(Ea, C), Fa && Qa.unbind(Fa, E), ia(!1)
            }

            function G(a) {
                var b = a,
                    d = M(),
                    e = J(),
                    f = K();
                return !d || f ? b = x : !e || a != v || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == w && c.triggerOnTouchLeave && (b = x) : b = w, b
            }

            function H(a, b) {
                var c = void 0;
                return T() || S() ? c = I(a, b, l) : (Q() || P()) && !1 !== c && (c = I(a, b, m)), ca() && !1 !== c ? c = I(a, b, o) : da() && !1 !== c ? c = I(a, b, p) : ba() && !1 !== c && (c = I(a, b, n)), b === x && D(a), b === w && (y ? 0 == a.touches.length && D(a) : D(a)), c
            }

            function I(b, j, k) {
                var q = void 0;
                if (k == l) {
                    if (Qa.trigger("swipeStatus", [j, Ia || null, Ha || 0, Ja || 0, Sa]), c.swipeStatus && !1 === (q = c.swipeStatus.call(Qa, b, j, Ia || null, Ha || 0, Ja || 0, Sa))) return !1;
                    if (j == w && R()) {
                        if (Qa.trigger("swipe", [Ia, Ha, Ja, Sa]), c.swipe && !1 === (q = c.swipe.call(Qa, b, Ia, Ha, Ja, Sa))) return !1;
                        switch (Ia) {
                            case d:
                                Qa.trigger("swipeLeft", [Ia, Ha, Ja, Sa]), c.swipeLeft && (q = c.swipeLeft.call(Qa, b, Ia, Ha, Ja, Sa));
                                break;
                            case e:
                                Qa.trigger("swipeRight", [Ia, Ha, Ja, Sa]), c.swipeRight && (q = c.swipeRight.call(Qa, b, Ia, Ha, Ja, Sa));
                                break;
                            case f:
                                Qa.trigger("swipeUp", [Ia, Ha, Ja, Sa]), c.swipeUp && (q = c.swipeUp.call(Qa, b, Ia, Ha, Ja, Sa));
                                break;
                            case g:
                                Qa.trigger("swipeDown", [Ia, Ha, Ja, Sa]), c.swipeDown && (q = c.swipeDown.call(Qa, b, Ia, Ha, Ja, Sa))
                        }
                    }
                }
                if (k == m) {
                    if (Qa.trigger("pinchStatus", [j, Oa || null, Na || 0, Ja || 0, Sa, Ma]), c.pinchStatus && !1 === (q = c.pinchStatus.call(Qa, b, j, Oa || null, Na || 0, Ja || 0, Sa, Ma))) return !1;
                    if (j == w && O()) switch (Oa) {
                        case h:
                            Qa.trigger("pinchIn", [Oa || null, Na || 0, Ja || 0, Sa, Ma]), c.pinchIn && (q = c.pinchIn.call(Qa, b, Oa || null, Na || 0, Ja || 0, Sa, Ma));
                            break;
                        case i:
                            Qa.trigger("pinchOut", [Oa || null, Na || 0, Ja || 0, Sa, Ma]), c.pinchOut && (q = c.pinchOut.call(Qa, b, Oa || null, Na || 0, Ja || 0, Sa, Ma))
                    }
                }
                return k == n ? (j === x || j === w) && (clearTimeout(Za), X() && !$() ? (Ya = ya(), Za = setTimeout(a.proxy(function() {
                    Ya = null, Qa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Qa, b, b.target))
                }, this), c.doubleTapThreshold)) : (Ya = null, Qa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Qa, b, b.target)))) : k == o ? (j === x || j === w) && (clearTimeout(Za), Ya = null, Qa.trigger("doubletap", [b.target]), c.doubleTap && (q = c.doubleTap.call(Qa, b, b.target))) : k == p && (j === x || j === w) && (clearTimeout(Za), Ya = null, Qa.trigger("longtap", [b.target]), c.longTap && (q = c.longTap.call(Qa, b, b.target))), q
            }

            function J() {
                var a = !0;
                return null !== c.threshold && (a = Ha >= c.threshold), a
            }

            function K() {
                var a = !1;
                return null !== c.cancelThreshold && null !== Ia && (a = oa(Ia) - Ha >= c.cancelThreshold), a
            }

            function L() {
                return null === c.pinchThreshold || Na >= c.pinchThreshold
            }

            function M() {
                return !(c.maxTimeThreshold && Ja >= c.maxTimeThreshold)
            }

            function N(a, b) {
                if (c.allowPageScroll === j || P()) a.preventDefault();
                else {
                    var h = c.allowPageScroll === k;
                    switch (b) {
                        case d:
                            (c.swipeLeft && h || !h && c.allowPageScroll != q) && a.preventDefault();
                            break;
                        case e:
                            (c.swipeRight && h || !h && c.allowPageScroll != q) && a.preventDefault();
                            break;
                        case f:
                            (c.swipeUp && h || !h && c.allowPageScroll != r) && a.preventDefault();
                            break;
                        case g:
                            (c.swipeDown && h || !h && c.allowPageScroll != r) && a.preventDefault()
                    }
                }
            }

            function O() {
                var a = U(),
                    b = V(),
                    c = L();
                return a && b && c
            }

            function P() {
                return !!(c.pinchStatus || c.pinchIn || c.pinchOut)
            }

            function Q() {
                return !(!O() || !P())
            }

            function R() {
                var a = M(),
                    b = J(),
                    c = U(),
                    d = V();
                return !K() && d && c && b && a
            }

            function S() {
                return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown)
            }

            function T() {
                return !(!R() || !S())
            }

            function U() {
                return Sa === c.fingers || c.fingers === s || !y
            }

            function V() {
                return 0 !== Ta[0].end.x
            }

            function W() {
                return !!c.tap
            }

            function X() {
                return !!c.doubleTap
            }

            function Y() {
                return !!c.longTap
            }

            function Z() {
                if (null == Ya) return !1;
                var a = ya();
                return X() && a - Ya <= c.doubleTapThreshold
            }

            function $() {
                return Z()
            }

            function _() {
                return !(1 !== Sa && y || !isNaN(Ha) && 0 !== Ha)
            }

            function aa() {
                return Ja > c.longTapThreshold && t > Ha
            }

            function ba() {
                return !(!_() || !W())
            }

            function ca() {
                return !(!Z() || !X())
            }

            function da() {
                return !(!aa() || !Y())
            }

            function ea() {
                Wa = ya(), Xa = event.touches.length + 1
            }

            function fa() {
                Wa = 0, Xa = 0
            }

            function ga() {
                var a = !1;
                if (Wa) {
                    ya() - Wa <= c.fingerReleaseThreshold && (a = !0)
                }
                return a
            }

            function ha() {
                return !(!0 !== Qa.data(z + "_intouch"))
            }

            function ia(a) {
                !0 === a ? (Qa.bind(Da, B), Qa.bind(Ea, C), Fa && Qa.bind(Fa, E)) : (Qa.unbind(Da, B, !1), Qa.unbind(Ea, C, !1), Fa && Qa.unbind(Fa, E, !1)), Qa.data(z + "_intouch", !0 === a)
            }

            function ja(a, b) {
                var c = void 0 !== b.identifier ? b.identifier : 0;
                return Ta[a].identifier = c, Ta[a].start.x = Ta[a].end.x = b.pageX || b.clientX, Ta[a].start.y = Ta[a].end.y = b.pageY || b.clientY, Ta[a]
            }

            function ka(a) {
                var b = void 0 !== a.identifier ? a.identifier : 0,
                    c = la(b);
                return c.end.x = a.pageX || a.clientX, c.end.y = a.pageY || a.clientY, c
            }

            function la(a) {
                for (var b = 0; b < Ta.length; b++)
                    if (Ta[b].identifier == a) return Ta[b]
            }

            function ma() {
                for (var a = [], b = 0; 5 >= b; b++) a.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return a
            }

            function na(a, b) {
                b = Math.max(b, oa(a)), Pa[a].distance = b
            }

            function oa(a) {
                return Pa[a] ? Pa[a].distance : void 0
            }

            function pa() {
                var a = {};
                return a[d] = qa(d), a[e] = qa(e), a[f] = qa(f), a[g] = qa(g), a
            }

            function qa(a) {
                return {
                    direction: a,
                    distance: 0
                }
            }

            function ra() {
                return Va - Ua
            }

            function sa(a, b) {
                var c = Math.abs(a.x - b.x),
                    d = Math.abs(a.y - b.y);
                return Math.round(Math.sqrt(c * c + d * d))
            }

            function ta(a, b) {
                return (b / a * 1).toFixed(2)
            }

            function ua() {
                return 1 > Ma ? i : h
            }

            function va(a, b) {
                return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
            }

            function wa(a, b) {
                var c = a.x - b.x,
                    d = b.y - a.y,
                    e = Math.atan2(d, c),
                    f = Math.round(180 * e / Math.PI);
                return 0 > f && (f = 360 - Math.abs(f)), f
            }

            function xa(a, b) {
                var c = wa(a, b);
                return 45 >= c && c >= 0 ? d : 360 >= c && c >= 315 ? d : c >= 135 && 225 >= c ? e : c > 45 && 135 > c ? g : f
            }

            function ya() {
                return (new Date).getTime()
            }

            function za(b) {
                b = a(b);
                var c = b.offset();
                return {
                    left: c.left,
                    right: c.left + b.outerWidth(),
                    top: c.top,
                    bottom: c.top + b.outerHeight()
                }
            }

            function Aa(a, b) {
                return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
            }
            var Ba = y || !c.fallbackToMouseEvents,
                Ca = Ba ? "touchstart" : "mousedown",
                Da = Ba ? "touchmove" : "mousemove",
                Ea = Ba ? "touchend" : "mouseup",
                Fa = Ba ? null : "mouseleave",
                Ga = "touchcancel",
                Ha = 0,
                Ia = null,
                Ja = 0,
                Ka = 0,
                La = 0,
                Ma = 1,
                Na = 0,
                Oa = 0,
                Pa = null,
                Qa = a(b),
                Ra = "start",
                Sa = 0,
                Ta = null,
                Ua = 0,
                Va = 0,
                Wa = 0,
                Xa = 0,
                Ya = 0,
                Za = null;
            try {
                Qa.bind(Ca, A), Qa.bind(Ga, D)
            } catch (b) {
                a.error("events not supported " + Ca + "," + Ga + " on jQuery.swipe")
            }
            this.enable = function() {
                return Qa.bind(Ca, A), Qa.bind(Ga, D), Qa
            }, this.disable = function() {
                return F(), Qa
            }, this.destroy = function() {
                return F(), Qa.data(z, null), Qa
            }, this.option = function(b, d) {
                if (void 0 !== c[b]) {
                    if (void 0 === d) return c[b];
                    c[b] = d
                } else a.error("Option " + b + " does not exist on jQuery.swipe.options");
                return null
            }
        }
        var d = "left",
            e = "right",
            f = "up",
            g = "down",
            h = "in",
            i = "out",
            j = "none",
            k = "auto",
            l = "swipe",
            m = "pinch",
            n = "tap",
            o = "doubletap",
            p = "longtap",
            q = "horizontal",
            r = "vertical",
            s = "all",
            t = 10,
            u = "start",
            v = "move",
            w = "end",
            x = "cancel",
            y = "ontouchstart" in window,
            z = "TouchSwipe",
            A = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe"
            };
        a.fn.swipe = function(c) {
            var d = a(this),
                e = d.data(z);
            if (e && "string" == typeof c) {
                if (e[c]) return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
                a.error("Method " + c + " does not exist on jQuery.swipe")
            } else if (!(e || "object" != typeof c && c)) return b.apply(this, arguments);
            return d
        }, a.fn.swipe.defaults = A, a.fn.swipe.phases = {
            PHASE_START: u,
            PHASE_MOVE: v,
            PHASE_END: w,
            PHASE_CANCEL: x
        }, a.fn.swipe.directions = {
            LEFT: d,
            RIGHT: e,
            UP: f,
            DOWN: g,
            IN: h,
            OUT: i
        }, a.fn.swipe.pageScroll = {
            NONE: j,
            HORIZONTAL: q,
            VERTICAL: r,
            AUTO: k
        }, a.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: s
        }
    }), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function(a, b, c, d) {
        var e = {
            makeResponsive: function() {
                var c = this;
                a(c.sliderId + "-wrapper").addClass("ls-responsive").css({
                    "max-width": a(c.sliderId + " .panel:first-child").width(),
                    width: "100%"
                }), a(c.sliderId + " .panel-container").css("width", 100 * c.panelCountTotal + c.pSign), a(c.sliderId + " .panel").css("width", 100 / c.panelCountTotal + c.pSign), c.options.hideArrowsWhenMobile && (c.leftWrapperPadding = a(c.sliderId + "-wrapper").css("padding-left"), c.rightWrapperPadding = c.$sliderWrap.css("padding-right")), c.responsiveEvents(), a(b).bind("resize", function() {
                    c.responsiveEvents(), clearTimeout(c.resizingTimeout), c.resizingTimeout = setTimeout(function() {
                        var a = c.options.autoHeight ? c.getHeight() : c.getHeighestPanel(c.nextPanel);
                        c.adjustHeight(!1, a)
                    }, 500)
                })
            },
            responsiveEvents: function() {
                var b = this,
                    c = b.options.hideArrowsThreshold || b.options.mobileUIThreshold || b.totalNavWidth + 10;
                b.$sliderId.outerWidth() < c ? (b.options.mobileNavigation && (b.navigation.css("display", "none"), b.dropdown.css("display", "block"), b.dropdownSelect.css("display", "block"), a(b.sliderId + "-nav-select").val(b.options.mobileNavDefaultText)), b.options.dynamicArrows && (b.options.hideArrowsWhenMobile ? (b.leftArrow.remove().length = 0, b.rightArrow.remove().length = 0) : b.options.dynamicArrowsGraphical || (b.leftArrow.css("margin-" + b.options.dynamicTabsPosition, "0"), b.rightArrow.css("margin-" + b.options.dynamicTabsPosition, "0")))) : (b.options.mobileNavigation && (b.navigation.css("display", "block"), b.dropdown.css("display", "none"), b.dropdownSelect.css("display", "none")), b.options.dynamicArrows && (!b.options.hideArrowsWhenMobile || b.leftArrow.length && b.rightArrow.length ? b.options.dynamicArrowsGraphical || (b.leftArrow.css("margin-" + b.options.dynamicTabsPosition, b.navigation.css("height")), b.rightArrow.css("margin-" + b.options.dynamicTabsPosition, b.navigation.css("height"))) : (b.addArrows(), b.registerArrows()))), a(b.sliderId + "-wrapper").css("width", "100%"), b.options.mobileNavigation && b.dropdownSelect.change(function() {
                    b.setNextPanel(parseInt(a(this).val().split("tab")[1], 10) - 1)
                })
            },
            addNavigation: function(b) {
                var c = this,
                    d = "<" + c.options.navElementTag + ' class="ls-nav"><ul id="' + c.$elem.attr("id") + '-nav-ul"></ul></' + c.options.navElementTag + ">";
                if ("bottom" === c.options.dynamicTabsPosition ? c.$sliderId.after(d) : c.$sliderId.before(d), c.options.mobileNavigation) {
                    var e = c.options.mobileNavDefaultText ? '<option disabled="disabled" selected="selected">' + c.options.mobileNavDefaultText + "</option>" : null,
                        f = '<div class="ls-select-box"><select id="' + c.$elem.attr("id") + '-nav-select" name="navigation">' + e + "</select></div>";
                    c.navigation = a(c.sliderId + "-nav-ul").before(f), c.dropdown = a(c.sliderId + "-wrapper .ls-select-box"), c.dropdownSelect = a(c.sliderId + "-nav-select"), a.each(c.$elem.find(c.options.panelTitleSelector), function(b) {
                        a(c.$sliderWrap).find(".ls-select-box select").append('<option value="tab' + (b + 1) + '">' + a(this).text() + "</option>")
                    })
                }
                a.each(c.$elem.find(c.options.panelTitleSelector), function(d) {
                    a(c.$sliderWrap).find(".ls-nav ul").append('<li class="tab' + (d + 1) + '"><a class="' + (b || "") + '" href="#' + (d + 1) + '">' + c.getNavInsides(this) + "</a></li>"), c.options.includeTitle || a(this).remove()
                })
            },
            getNavInsides: function(b) {
                return this.options.dynamicTabsHtml ? a(b).html() : a(b).text()
            },
            alignNavigation: function() {
                var b = this,
                    c = b.options.dynamicArrowsGraphical ? "-arrow" : "";
                "center" !== b.options.dynamicTabsAlign && (b.options.responsive || a(b.$sliderWrap).find(".ls-nav ul").css("margin-" + b.options.dynamicTabsAlign, a(b.$sliderWrap).find(".ls-nav-" + b.options.dynamicTabsAlign + c).outerWidth(!0) + parseInt(b.$sliderId.css("margin-" + b.options.dynamicTabsAlign), 10)), a(b.$sliderWrap).find(".ls-nav ul").css("float", b.options.dynamicTabsAlign)), b.totalNavWidth = a(b.$sliderWrap).find(".ls-nav ul").outerWidth(!0), "center" === b.options.dynamicTabsAlign && (b.totalNavWidth = 0, a(b.$sliderWrap).find(".ls-nav li a").each(function() {
                    b.totalNavWidth += a(this).outerWidth(!0)
                }), a(b.$sliderWrap).find(".ls-nav ul").css("width", b.totalNavWidth + 1))
            },
            registerNav: function() {
                var b = this;
                b.$sliderWrap.find("[class^=ls-nav] li").on("click", function() {
                    return b.setNextPanel(parseInt(a(this).attr("class").split("tab")[1], 10) - 1), !1
                })
            },
            addArrows: function(b) {
                var c = this,
                    e = c.options.dynamicArrowsGraphical ? "-arrow " : " ";
                c.$sliderWrap.addClass("arrows"), c.options.dynamicArrowsGraphical && (c.options.dynamicArrowLeftText = "", c.options.dynamicArrowRightText = ""), c.$sliderId.before('<div class="ls-nav-left' + e + (b || "") + '"><a href="#">' + c.options.dynamicArrowLeftText + "</a></div>"), c.$sliderId.after('<div class="ls-nav-right' + e + (b || "") + '"><a href="#">' + c.options.dynamicArrowRightText + "</a></div>"), c.leftArrow = a(c.sliderId + "-wrapper [class^=ls-nav-left]").css("visibility", "hidden").addClass("ls-hidden"), c.rightArrow = a(c.sliderId + "-wrapper [class^=ls-nav-right]").css("visibility", "hidden").addClass("ls-hidden"), c.options.hoverArrows || c.hideShowArrows(d, !0, !0, !1)
            },
            hideShowArrows: function(b, c, d, e) {
                var f = this,
                    g = void 0 !== b ? b : f.options.fadeOutDuration,
                    h = void 0 !== b ? b : f.options.fadeInDuration,
                    i = c ? "visible" : "hidden";
                d || !e && 1 !== f.sanatizeNumber(f.nextPanel) ? (d || f.leftArrow.hasClass("ls-hidden")) && f.leftArrow.stop().css("visibility", "visible").fadeTo(h, 1).removeClass("ls-hidden") : f.leftArrow.stop().fadeTo(g, 0, function() {
                    a(this).css("visibility", i).addClass("ls-hidden")
                }), d || !e && f.sanatizeNumber(f.nextPanel) !== f.panelCount ? (d || f.rightArrow.hasClass("ls-hidden")) && f.rightArrow.stop().css("visibility", "visible").fadeTo(h, 1).removeClass("ls-hidden") : f.rightArrow.stop().fadeTo(g, 0, function() {
                    a(this).css("visibility", i).addClass("ls-hidden")
                })
            },
            registerArrows: function() {
                var b = this;
                a(b.$sliderWrap.find("[class^=ls-nav-]")).on("click", function() {
                    b.setNextPanel(a(this).attr("class").split(" ")[0].split("-")[2])
                })
            },
            registerCrossLinks: function() {
                var b = this;
                b.crosslinks = a("[data-liquidslider-ref*=" + b.sliderId.split("#")[1] + "]"), b.crosslinks.on("click", function(c) {
                    !0 === b.options.autoSlide && b.startAutoSlide(!0), b.setNextPanel(b.getPanelNumber(a(this).attr("href").split("#")[1], b.options.panelTitleSelector)), c.preventDefault()
                }), b.updateClass()
            },
            registerTouch: function() {
                var b = this,
                    c = b.options.swipeArgs || {
                        fallbackToMouseEvents: !1,
                        allowPageScroll: "vertical",
                        swipe: function(a, c) {
                            return "up" !== c && "down" !== c && (b.swipeDir = "left" === c ? "right" : "left", void b.setNextPanel(b.swipeDir))
                        }
                    };
                a(b.sliderId + " .panel").swipe(c)
            },
            registerKeyboard: function() {
                var b = this;
                a(c).keydown(function(c) {
                    var d = c.keyCode || c.which;
                    "textarea" !== c.target.type && "textbox" !== c.target.type && (b.options.forceAutoSlide || a(this).trigger("click"), d === b.options.leftKey && b.setNextPanel("right"), d === b.options.rightKey && b.setNextPanel("left"), a.each(b.options.panelKeys, function(a, c) {
                        d === c && b.setNextPanel(a - 1)
                    }))
                })
            },
            autoSlide: function() {
                var a = this;
                a.options.autoSlideInterval < a.options.slideEaseDuration && (a.options.autoSlideInterval = a.options.slideEaseDuration > a.options.heightEaseDuration ? a.options.slideEaseDuration : a.options.heightEaseDuration), a.autoSlideTimeout = setTimeout(function() {
                    a.setNextPanel(a.options.autoSlideDirection), a.autoSlide()
                }, a.options.autoSlideInterval)
            },
            stopAutoSlide: function() {
                var a = this;
                a.options.autoSlide = !1, clearTimeout(a.autoSlideTimeout)
            },
            startAutoSlide: function(a) {
                var b = this;
                b.options.autoSlide = !0, a || b.setNextPanel(b.options.autoSlideDirection), b.autoSlide(clearTimeout(b.autoSlideTimeout))
            },
            updateHashTags: function() {
                var a = this,
                    c = a.nextPanel === a.panelCount ? 0 : a.nextPanel;
                b.location.hash = a.getFromPanel(a.options.hashTitleSelector, c)
            },
            adjustHeight: function(a, b, c, d) {
                var e = this;
                return a || e.useCSS ? (a && e.configureCSSTransitions("0", "0"), e.$sliderId.height(b), void(a && e.configureCSSTransitions())) : void e.$sliderId.animate({
                    height: b + "px"
                }, {
                    easing: c || e.options.heightEaseFunction,
                    duration: d || e.options.heightEaseDuration,
                    queue: !1
                })
            },
            getHeight: function(a) {
                var b = this;
                return a = a || b.$panelClass.eq(b.sanatizeNumber(b.nextPanel) - 1).outerHeight(!0), a = a < b.options.minHeight ? b.options.minHeight : a
            },
            addPreloader: function() {
                a(this.sliderId + "-wrapper").append('<div class="ls-preloader"></div>')
            },
            removePreloader: function() {
                a(this.sliderId + "-wrapper .ls-preloader").fadeTo("slow", 0, function() {
                    a(this).remove()
                })
            },
            init: function(c, d) {
                var e = this;
                e.elem = d, e.$elem = a(d), a("body").removeClass("no-js"), e.sliderId = "#" + e.$elem.attr("id"), e.$sliderId = a(e.sliderId), e.options = a.extend({}, a.fn.liquidSlider.options, c), e.pSign = e.options.responsive ? "%" : "px", e.options.responsive ? e.determineAnimationType() : (e.options.mobileNavigation = !1, e.options.hideArrowsWhenMobile = !1), "animate.css" === e.options.slideEaseFunction && (e.useCSS ? (e.options.continuous = !1, e.animateCSS = !0) : e.options.slideEaseFunction = e.options.slideEaseFunctionFallback), e.build(), e.events(), !e.options.responsive && e.options.dynamicArrows && e.$sliderWrap.width(e.$sliderId.outerWidth(!0) + e.leftArrow.outerWidth(!0) + e.rightArrow.outerWidth(!0)), e.loaded = !0, a(b).bind("load", function() {
                    e.options.preload.call(e)
                })
            },
            build: function() {
                var b, c = this;
                "ls-wrapper" !== c.$sliderId.parent().attr("class") && c.$sliderId.wrap('<div id="' + c.$elem.attr("id") + '-wrapper" class="ls-wrapper"></div>'), c.$sliderWrap = a(c.sliderId + "-wrapper"), c.options.preloader && c.addPreloader(), a(c.sliderId).children().addClass(c.$elem.attr("id") + "-panel panel"), c.panelClass = c.sliderId + " ." + c.$elem.attr("id") + "-panel:not(.clone)", c.$panelClass = a(c.panelClass), c.$panelClass.wrapAll('<div class="panel-container"></div>'), c.$panelClass.wrapInner('<div class="panel-wrapper"></div>'), c.panelContainer = c.$panelClass.parent(), c.$panelContainer = c.panelContainer, "fade" === c.options.slideEaseFunction && (c.$panelClass.addClass("fade"), c.options.continuous = !1, c.fade = !0), c.options.dynamicTabs ? c.addNavigation() : c.options.mobileNavigation = !1, c.options.dynamicArrows ? c.addArrows() : (c.options.hoverArrows = !1, c.options.hideSideArrows = !1, c.options.hideArrowsWhenMobile = !1), b = c.$leftArrow && "absolute" === c.$leftArrow.css("position") ? 0 : 1, c.totalSliderWidth = c.$sliderId.outerWidth(!0) + a(c.$leftArrow).outerWidth(!0) * b + a(c.$rightArrow).outerWidth(!0) * b, a(c.$sliderWrap).css("width", c.totalSliderWidth), c.options.dynamicTabs && c.alignNavigation(), c.options.hideSideArrows && (c.options.continuous = !1), c.options.continuous && (c.$panelContainer.prepend(c.$panelContainer.children().last().clone().addClass("clone")), c.$panelContainer.append(c.$panelContainer.children().eq(1).clone().addClass("clone")));
                var d = c.options.continuous ? 2 : 0;
                c.panelCount = a(c.panelClass).length, c.panelCountTotal = c.fade ? 1 : c.panelCount + d, c.panelWidth = a(c.panelClass).outerWidth(), c.totalWidth = c.panelCountTotal * c.panelWidth, a(c.sliderId + " .panel-container").css("width", c.totalWidth), c.slideDistance = c.options.responsive ? 100 : a(c.sliderId).outerWidth(), c.useCSS && (c.totalWidth = 100 * c.panelCountTotal, c.slideDistance = 100 / c.panelCountTotal), c.options.responsive && c.makeResponsive(), c.prepareTransition(c.getFirstPanel(), !0), c.updateClass()
            },
            determineAnimationType: function() {
                var a = this,
                    f = "Webkit Moz O ms Khtml".split(" "),
                    g = "",
                    h = 0;
                if (a.useCSS = !1, a.elem.style.animationName && (a.useCSS = !0), !1 === a.useCSS)
                    for (h = 0; h < f.length; h++)
                        if (a.elem.style[f[h] + "AnimationName"] !== d) {
                            g = f[h], g + "Animation", "-" + g.toLowerCase() + "-", a.useCSS = !0;
                            break
                        }
                c.documentElement.clientWidth > a.options.useCSSMaxWidth && (a.useCSS = !1)
            },
            configureCSSTransitions: function(b, c) {
                var d, e, f = this;
                f.easing = {
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175,.885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                }, f.useCSS && (d = "all " + (b || f.options.slideEaseDuration) + "ms " + f.easing[f.options.slideEaseFunction], e = "all " + (c || f.options.heightEaseDuration) + "ms " + f.easing[f.options.heightEaseFunction], a(f.panelContainer).css({
                    "-webkit-transition": d,
                    "-moz-transition": d,
                    "-ms-transition": d,
                    "-o-transition": d,
                    transition: d
                }), f.options.autoHeight && f.$sliderId.css({
                    "-webkit-transition": e,
                    "-moz-transition": e,
                    "-ms-transition": e,
                    "-o-transition": e,
                    transition: e
                }))
            },
            transitionFade: function() {
                var b = this;
                a(b.panelClass).eq(b.nextPanel).fadeTo(b.options.fadeInDuration, 1).css("z-index", 1), a(b.panelClass).eq(b.prevPanel).fadeTo(b.options.fadeOutDuration, 0).css("z-index", 0), b.callback(b.options.callback, !0)
            },
            hover: function() {
                var a = this;
                a.$sliderWrap.hover(function() {
                    a.options.hoverArrows && a.hideShowArrows(a.options.fadeInDuration, !0, !0, !1), a.options.pauseOnHover && clearTimeout(a.autoSlideTimeout)
                }, function() {
                    a.options.hoverArrows && a.hideShowArrows(a.options.fadeOutnDuration, !0, !1, !0), a.options.pauseOnHover && a.options.autoSlide && a.startAutoSlide()
                })
            },
            events: function() {
                var a = this;
                a.options.dynamicArrows && a.registerArrows(), a.options.crossLinks && a.registerCrossLinks(), a.options.dynamicTabs && a.registerNav(), a.options.swipe && a.registerTouch(), a.options.keyboardNavigation && a.registerKeyboard(), a.$sliderWrap.find("*").on("click", function() {
                    a.options.forceAutoSlide ? a.startAutoSlide(!0) : a.options.autoSlide && a.stopAutoSlide()
                }), a.hover()
            },
            setNextPanel: function(a) {
                var b = this;
                setTimeout(function() {
                    a !== b.nextPanel && (b.prevPanel = b.nextPanel, b.loaded && ("number" == typeof a ? b.nextPanel = a : (b.nextPanel += ~~("right" === a) || -1, b.options.continuous || (b.nextPanel = b.nextPanel < 0 ? b.panelCount - 1 : b.nextPanel % b.panelCount)), b.fade || b.animateCSS ? b.prepareTransition(b.nextPanel) : b.verifyPanel()))
                }, 100)
            },
            getFirstPanel: function() {
                var a, c = this;
                return c.options.hashLinking && "number" != typeof(a = c.getPanelNumber(b.location.hash, c.options.hashTitleSelector)) && (a = 0), a || c.options.firstPanelToLoad - 1
            },
            getPanelNumber: function(b, c) {
                var d, e = this,
                    f = b.replace("#", "").toLowerCase();
                return e.$panelClass.each(function(b) {
                    (d = e.convertRegex(a(this).find(c).text())) === f && (f = b + 1)
                }), parseInt(f, 10) ? parseInt(f, 10) - 1 : f
            },
            getFromPanel: function(a, b) {
                var c = this;
                return c.convertRegex(c.$panelClass.find(a).eq(b).text())
            },
            convertRegex: function(a) {
                return a.replace(/[^\w -]+/g, "").replace(/ +/g, "-").toLowerCase()
            },
            updateClass: function() {
                var b = this;
                b.options.dynamicTabs && a(b.$sliderWrap).find(".tab" + b.sanatizeNumber(b.nextPanel) + ":first a").addClass("current").parent().siblings().children().removeClass("current"), b.options.crossLinks && b.crosslinks && (b.crosslinks.not(b.nextPanel).removeClass("currentCrossLink"), b.crosslinks.each(function() {
                    a(this).attr("href") === "#" + b.getFromPanel(b.options.panelTitleSelector, b.sanatizeNumber(b.nextPanel) - 1) && a(this).addClass("currentCrossLink")
                })), b.$panelClass.eq(b.nextPanel).addClass("currentPanel").siblings().removeClass("currentPanel")
            },
            sanatizeNumber: function(a) {
                var b = this;
                return a >= b.panelCount ? 1 : -1 >= a ? b.panelCount : a + 1
            },
            finalize: function() {
                var a = this,
                    b = a.options.autoHeight ? a.getHeight() : a.getHeighestPanel(a.nextPanel);
                a.options.autoHeight && a.adjustHeight(!0, b), a.options.autoSlide && a.autoSlide(), a.options.preloader && a.removePreloader(), a.onload()
            },
            callback: function(b, c) {
                var d = this;
                b && d.loaded && (d.useCSS && void 0 !== c ? a(".panel-container").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    b.call(d)
                }) : setTimeout(function() {
                    b.call(d)
                }, d.options.slideEaseDuration + 50))
            },
            onload: function() {
                var a = this;
                a.options.onload.call(a)
            },
            prepareTransition: function(a, b, c, d) {
                var e = this;
                e.nextPanel = a || 0, c || e.pretransition(e.options.pretransition), e.noAnimation = b, e.noPosttransition = d, e.loaded ? e.options.pretransition.call(e) : e.transition()
            },
            pretransition: function() {
                var a = this;
                a.options.hashLinking && a.updateHashTags(), a.options.mobileNavigation && a.dropdownSelect.val("tab" + (a.nextPanel + 1)), a.options.hideSideArrows && a.hideShowArrows(), a.updateClass()
            },
            getTransitionMargin: function() {
                var a = this;
                return -a.nextPanel * a.slideDistance - a.slideDistance * ~~a.options.continuous
            },
            transition: function() {
                var a = this,
                    b = a.getTransitionMargin();
                return a.animateCSS && a.loaded ? (a.transitionOutAnimateCSS(), !1) : ((b + a.pSign !== a.panelContainer.css("margin-left") || -100 !== b) && (a.options.autoHeight && !a.animateCSS && a.adjustHeight(!0, a.getHeight()), a.fade ? a.transitionFade() : a.animateCSS ? a.transitionInAnimateCSS(b) : a.useCSS ? a.transitionCSS(b, a.noAnimation) : a.transitionjQuery(b, a.noAnimation)), void(a.noPosttransition || a.callback(a.options.callback)))
            },
            transitionOutAnimateCSS: function() {
                var b = this;
                a(b.panelClass).removeClass(b.options.animateIn + " animated"), a(b.panelClass).eq(b.prevPanel).addClass("animated " + b.options.animateOut), b.callback(b.transitionInAnimateCSS, d)
            },
            transitionInAnimateCSS: function() {
                var b = this;
                b.options.autoHeight && b.adjustHeight(!1, b.getHeight()), b.transitionCSS(b.getTransitionMargin(), !b.loaded), a(b.panelClass).removeClass(b.options.animateOut + " animated"), a(b.panelClass).eq(b.nextPanel).addClass("animated " + b.options.animateIn), b.callback(b.options.callback, d)
            },
            transitionCSS: function(a, b) {
                var c = this;
                b && c.configureCSSTransitions("0", "0"), c.panelContainer.css({
                    "-webkit-transform": "translate3d(" + a + c.pSign + ", 0, 0)",
                    "-moz-transform": "translate3d(" + a + c.pSign + ", 0, 0)",
                    "-ms-transform": "translate3d(" + a + c.pSign + ", 0, 0)",
                    "-o-transform": "translate3d(" + a + c.pSign + ", 0, 0)",
                    transform: "translate3d(" + a + c.pSign + ", 0, 0)"
                }), b ? c.callback(function() {
                    c.configureCSSTransitions()
                }) : c.configureCSSTransitions()
            },
            transitionjQuery: function(a, b) {
                var c = this;
                b ? c.panelContainer.css("margin-left", a + c.pSign) : c.panelContainer.animate({
                    "margin-left": a + c.pSign
                }, {
                    easing: c.options.slideEaseFunction,
                    duration: c.options.slideEaseDuration,
                    queue: !1
                })
            },
            getHeighestPanel: function() {
                var b, c = this,
                    d = 0;
                return c.$panelClass.each(function() {
                    b = a(this).outerHeight(!0), d = b > d ? b : d
                }), c.options.autoHeight ? void 0 : d
            },
            verifyPanel: function() {
                var a = this,
                    b = !1;
                if (a.options.continuous)
                    if (a.nextPanel > a.panelCount) a.nextPanel = a.panelCount, a.setNextPanel(a.panelCount);
                    else if (a.nextPanel < -1) a.nextPanel = -1, a.setNextPanel(-1);
                else if (b || a.nextPanel !== a.panelCount && -1 !== a.nextPanel) b = !0, a.prepareTransition(a.nextPanel);
                else {
                    a.prepareTransition(a.nextPanel), a.updateClass(), clearTimeout(c);
                    var c = setTimeout(function() {
                        a.nextPanel === a.panelCount ? a.prepareTransition(0, !0, !0, !0) : -1 === a.nextPanel && a.prepareTransition(a.panelCount - 1, !0, !0, !0)
                    }, a.options.slideEaseDuration + 50)
                } else a.nextPanel === a.panelCount ? a.nextPanel = 0 : -1 === a.nextPanel && (a.nextPanel = a.panelCount - 1), a.prepareTransition(a.nextPanel)
            }
        };
        a.fn.liquidSlider = function(b) {
            return this.each(function() {
                var c = Object.create(e);
                c.init(b, this), a.data(this, "liquidSlider", c)
            })
        }, a.fn.liquidSlider.options = {
            autoHeight: !0,
            minHeight: 0,
            heightEaseDuration: 1500,
            heightEaseFunction: "easeInOutExpo",
            slideEaseDuration: 1500,
            slideEaseFunction: "easeInOutExpo",
            slideEaseFunctionFallback: "easeInOutExpo",
            animateIn: "bounceInRight",
            animateOut: "bounceOutRight",
            continuous: !0,
            fadeInDuration: 500,
            fadeOutDuration: 500,
            autoSlide: !1,
            autoSlideDirection: "right",
            autoSlideInterval: 6e3,
            forceAutoSlide: !1,
            pauseOnHover: !1,
            dynamicArrows: !0,
            dynamicArrowsGraphical: !0,
            dynamicArrowLeftText: "&#171; left",
            dynamicArrowRightText: "right &#187;",
            hideSideArrows: !1,
            hideSideArrowsDuration: 750,
            hoverArrows: !0,
            hoverArrowDuration: 250,
            dynamicTabs: !0,
            dynamicTabsHtml: !0,
            includeTitle: !0,
            panelTitleSelector: ".title",
            dynamicTabsAlign: "left",
            dynamicTabsPosition: "top",
            navElementTag: "div",
            firstPanelToLoad: 1,
            crossLinks: !1,
            hashLinking: !1,
            hashTitleSelector: ".title",
            keyboardNavigation: !1,
            leftKey: 39,
            rightKey: 37,
            panelKeys: {
                1: 49,
                2: 50,
                3: 51,
                4: 52
            },
            responsive: !0,
            mobileNavigation: !0,
            mobileNavDefaultText: "Menu",
            mobileUIThreshold: 0,
            hideArrowsWhenMobile: !0,
            hideArrowsThreshold: 0,
            useCSSMaxWidth: 2200,
            preload: function() {
                this.finalize()
            },
            onload: function() {},
            pretransition: function() {
                this.transition()
            },
            callback: function() {},
            preloader: !1,
            swipe: !0,
            swipeArgs: d
        }
    }(jQuery, window, document), sizeRegex = /(\/[0-9]{3,4}\/)/i, imageSizeBreakdownArray = [250, 350, 450, 550, 700, 950, 1200, 1553], productYmalRendered = !1, String.prototype.splice = function(a, b, c) {
        return this.slice(0, a) + c + this.slice(a + Math.abs(b))
    }, getUniqueStringArray = function(a) {
        var b = [];
        if (a.length > 0) {
            a = a.sort(), b = [a[0]];
            for (var c = 1; c < a.length; c++) a[c - 1].toLowerCase() !== a[c].toLowerCase() && b.push(a[c])
        }
        return b
    }, checkURLForString = function(a) {
        return window.location.href.indexOf(a) > -1
    }, renderRecsHome = function(a) {
        var b = $(".peerius-rec");
        if (b.length > 0) {
            for (var c = b.length - 1; c >= 0; c--)
                if (void 0 !== a[0].recs[c]) {
                    $(b[c]).attr("peerius-item-id", a[0].recs[c].id), $(b[c]).attr("href", a[0].recs[c].url), $(b[c]).find(".peerius-bg-img").css({
                        "background-image": "url('" + a[0].recs[c].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "')",
                        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + a[0].recs[c].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "', sizingMethod='scale')"
                    });
                    var d = parseFloat(a[0].recs[c].prices.GBP.unitPrice).toFixed(2).replace(".00", "");
                    a[0].recs[c].prices.GBP.unitPrice != a[0].recs[c].prices.GBP.salePrice && (d = parseFloat(a[0].recs[c].prices.GBP.salePrice).toFixed(2).replace(".00", "")), $(b[c]).find(".p-rec-price").text(" £" + d), a[0].recs[c].title.length > 12 ? ($(b[c]).find(".p-rec-title").text(a[0].recs[c].title.slice(0, 12) + "..."), $(b[c]).find(".p-rec-hover").text(a[0].recs[c].title)) : $(b[c]).find(".p-rec-title").text(a[0].recs[c].title)
                }
            $(".peerius-rec").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            })
        }
    }, renderRecsLanding = function(a) {
        var b = $(".peerius-rec");
        if (b.length > 0) {
            for (var c = b.length - 1; c >= 0; c--)
                if (void 0 !== a[0].recs[c]) {
                    $(b[c]).attr("peerius-item-id", a[0].recs[c].id), $(b[c]).attr("href", a[0].recs[c].url), $(b[c]).find(".peerius-bg-img").css({
                        "background-image": "url('" + a[0].recs[c].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "')",
                        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + a[0].recs[c].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "', sizingMethod='scale')"
                    });
                    var d = parseFloat(a[0].recs[c].prices.GBP.unitPrice).toFixed(2).replace(".00", "");
                    a[0].recs[c].prices.GBP.unitPrice != a[0].recs[c].prices.GBP.salePrice && (d = parseFloat(a[0].recs[c].prices.GBP.salePrice).toFixed(2).replace(".00", "")), $(b[c]).find(".p-rec-price").text(" £" + d), a[0].recs[c].title.length > 12 ? ($(b[c]).find(".p-rec-title").text(a[0].recs[c].title.slice(0, 12) + "..."), $(b[c]).find(".p-rec-hover").text(a[0].recs[c].title)) : $(b[c]).find(".p-rec-title").text(a[0].recs[c].title)
                }
            $(".peerius-rec").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            })
        }
    }, renderRecsSearch = function(a) {
        if (0 == $(".you-may-also-like").length && void 0 !== a[0].recs && 0 == $(".category-product-items .product").length) {
            $(".category-product-items").after($('<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent"><div class="grid-100 tablet-grid-100 mobile-grid-100 you-may-also-like five-column-recs"><h3 class="product-label">But you may be interested in</h3><ul class="ymal-slides grid-parent"></ul></div></div>'));
            for (var b = 0; b < a[0].recs.length && 5 > b; b++) {
                var c = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(c), c.append($('<a href="' + a[0].recs[b].url + '" peerius-item-id="' + a[0].recs[b].id + '" title="' + a[0].recs[b].title + '"><img src="' + a[0].recs[b].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + a[0].recs[b].title + '" class="grid-image full-opacity"><h3>' + a[0].recs[b].title + "</h3><p></p></a>")), a[0].recs[b].prices.GBP.salePrice == a[0].recs[b].prices.GBP.unitPrice ? c.find("p").text(" £" + a[0].recs[b].prices.GBP.unitPrice) : c.find("p").html('<span class="recommendation-price price-strike-through"> £' + a[0].recs[b].prices.GBP.unitPrice + ' </span><span class="recommendation-sale"> £' + a[0].recs[b].prices.GBP.salePrice + "</span>")
            }
            $(".you-may-also-like a").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            }), Tipped.create(".ymal-slides a", {
                skin: "toast",
                target: "mouse",
                hook: "topmiddle",
                showDelay: 250
            }), $(".ymal-slides .product a").click(function() {
                _gaq.push(["_trackEvent", "Search You May Also Like", "Click", $(this).find("img").attr("alt")])
            }), categoryModule.setCategoryImages()
        }
    }, renderRecsProduct = function(a) {
        if (0 == $(".you-may-also-like").length && void 0 !== a[0].recs) {
            $("#social").after($('<h3 class="product-label ymal-header">Others liked</h3><div class="grid-100 tablet-grid-100 mobile-grid-100 you-may-also-like"><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var b = 0; b < a[0].recs.length && 3 > b; b++) {
                var c = $('<li class="grid-33 mobile-grid-33 tablet-grid-33" style="display: list-item;"></li>');
                $(".product-details .ymal-slides").append(c), c.append($('<a href="' + a[0].recs[b].url + '" peerius-item-id="' + a[0].recs[b].id + '" title="' + a[0].recs[b].title + '"><img src="' + a[0].recs[b].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + a[0].recs[b].title + '" class="grid-image"></a>'))
            }
            $(".you-may-also-like a").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            }), Tipped.create(".product-details .ymal-slides a", {
                skin: "toast",
                target: "mouse",
                hook: "topmiddle",
                showDelay: 250
            }), productYmalRendered = !0
        }
    }, renderRecsBasket = function(a) {
        if (0 == $(".basket-recommendations-container").length && void 0 !== a[0].recs) {
            $("#inner").append('<div class="grid-100 tablet-grid-100 mobile-grid-100 basket-recommendations-container five-column-recs grid-parent"></div>'), $(".basket-recommendations-container").html('<h3 class="basket-recommendations-label you-may-be-label">Others Like...</h3><div class="grid-100 tablet-grid-100 mobile-grid-100 group-images"></div>');
            for (var b = 0; b < a[0].recs.length && 5 > b; b++) {
                var c = $('<div class="grid-20 mobile-grid-50 tablet-grid-20 basket-recommendations range-product" id="' + a[0].recs[b].refCode + '" peerius-item-id="' + a[0].recs[b].id + '"></div>');
                $(".basket-recommendations-container .group-images").append(c);
                var d = $('<img class="grid-image"><span class="basket-recommendation-title">' + a[0].recs[b].title + '</span><span class="basket-recommendation-price"> £' + a[0].recs[b].prices.GBP.unitPrice + "</span>");
                c.append(d), a[0].recs[b].prices.GBP.unitPrice != a[0].recs[b].prices.GBP.salePrice && (c.find(".basket-recommendation-price").addClass("price-strike-through"), c.append('<span class="basket-recommendation-sale-price"> £' + a[0].recs[b].prices.GBP.salePrice + "</span>"))
            }
            $($(".basket-recommendations-container .range-product")[0]).addClass("selected-range-product"), $(".range-product").on("click", function() {
                Peerius.smartRecsSendClick($(this).attr("peerius-item-id"))
            }), Tipped.create(".basket-recommendations-container .range-product img", {
                skin: "toast",
                target: "mouse",
                hook: "topmiddle",
                showDelay: 250
            }), setTimeout(function() {
                $("#inner").append(rangeModule.getRangeBuyOffTemplate()), rangeModule.setBaseBuyOffVars(), rangeModule.addRangeListeners(), rangeModule.initialiseBuyOff()
            }, 100)
        }
    }, renderRecsErrorPage = function(a) {
        if (a[0].recs.length > 0) {
            $(".page-404").append($('<div class="grid-parent grid-100 tablet-grid-100 mobile-grid-100 you-may-also-like five-column-recs"><h3 class="product-label you-may-be-label grid-parent">You may be interested in...</h3><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var b = 0; b < a[0].recs.length && 5 > b; b++) {
                var c = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(c), c.append($('<a href="' + a[0].recs[b].url + '" peerius-item-id="' + a[0].recs[b].id + '" title="' + a[0].recs[b].title + '"><img src="' + a[0].recs[b].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + a[0].recs[b].title + '" class="grid-image full-opacity"><h3>' + a[0].recs[b].title + "</h3><p></p></a>")), a[0].recs[b].prices.GBP.salePrice == a[0].recs[b].prices.GBP.unitPrice ? c.find("p").text(" £" + a[0].recs[b].prices.GBP.unitPrice) : c.find("p").html('<span class="recommendation-price price-strike-through"> £' + a[0].recs[b].prices.GBP.unitPrice + ' </span><span class="recommendation-sale"> £' + a[0].recs[b].prices.GBP.salePrice + "</span>")
            }
            $(".you-may-also-like a").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            }), Tipped.create(".ymal-slides a", {
                skin: "toast",
                target: "mouse",
                hook: "topmiddle",
                showDelay: 250
            }), $(".ymal-slides .product a").click(function() {
                _gaq.push(["_trackEvent", "Search You May Also Like", "Click", $(this).find("img").attr("alt")])
            })
        }
    }, renderRecsWishlist = function(a) {
        if ($(".peerius-rec"), a[0].recs.length > 0) {
            $(".wishlist-exterior-wrapper").append($('<div class="grid-parent grid-100 tablet-grid-100 mobile-grid-100 grid-parent you-may-also-like five-column-recs"><h3 class="product-label you-may-be-label grid-parent">You may be interested in...</h3><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var b = 0; b < a[0].recs.length && 5 > b; b++) {
                var c = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(c), c.append($('<a href="' + a[0].recs[b].url + '" peerius-item-id="' + a[0].recs[b].id + '" title="' + a[0].recs[b].title + '"><img src="' + a[0].recs[b].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + a[0].recs[b].title + '" class="grid-image full-opacity"><h3>' + a[0].recs[b].title + "</h3><p></p></a>")), a[0].recs[b].prices.GBP.salePrice == a[0].recs[b].prices.GBP.unitPrice ? c.find("p").text(" £" + a[0].recs[b].prices.GBP.unitPrice) : c.find("p").html('<span class="recommendation-price price-strike-through"> £' + a[0].recs[b].prices.GBP.unitPrice + ' </span><span class="recommendation-sale"> £' + a[0].recs[b].prices.GBP.salePrice + "</span>")
            }
            $(".you-may-also-like a").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            }), Tipped.create(".ymal-slides a", {
                skin: "toast",
                target: "mouse",
                hook: "topmiddle",
                showDelay: 250
            }), $(".ymal-slides .product a").click(function() {
                _gaq.push(["_trackEvent", "Search You May Also Like", "Click", $(this).find("img").attr("alt")])
            })
        }
    }, renderRecsAccount = function(a) {
        if ($(".peerius-rec"), a[0].recs.length > 0) {
            $("#inner").append($('<div class="grid-parent grid-100 tablet-grid-100 mobile-grid-90 mobile-prefix-5 mobile-suffix-5 grid-parent you-may-also-like five-column-recs"><h3 class="product-label you-may-be-label grid-parent">OTHERS LIKE...</h3><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var b = 0; b < a[0].recs.length && 5 > b; b++) {
                var c = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(c), c.append($('<a href="' + a[0].recs[b].url + '" peerius-item-id="' + a[0].recs[b].id + '" title="' + a[0].recs[b].title + '"><img src="' + a[0].recs[b].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + a[0].recs[b].title + '" class="grid-image full-opacity"><h3>' + a[0].recs[b].title + "</h3><p></p></a>")), a[0].recs[b].prices.GBP.salePrice == a[0].recs[b].prices.GBP.unitPrice ? c.find("p").text(" £" + a[0].recs[b].prices.GBP.unitPrice) : c.find("p").html('<span class="recommendation-price price-strike-through"> £' + a[0].recs[b].prices.GBP.unitPrice + ' </span><span class="recommendation-sale"> £' + a[0].recs[b].prices.GBP.salePrice + "</span>")
            }
            $(".you-may-also-like a").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            }), Tipped.create(".ymal-slides a", {
                skin: "toast",
                target: "mouse",
                hook: "topmiddle",
                showDelay: 250
            }), $(".ymal-slides .product a").click(function() {
                _gaq.push(["_trackEvent", "Search You May Also Like", "Click", $(this).find("img").attr("alt")])
            })
        }
    }, showMeTheMoney = function() {
        $("#mainContent, #aspnetForm > header").css("visibility", "visible").hide().fadeIn(400)
    };
var teradata = function() {
        return {
            subscribeByEmail: function(a, b, c, d, e) {
                if (e = void 0 !== e ? e : "750049776", "function" != typeof c || !1 !== c()) {
                    values = [], names = [];
                    var f = 0;
                    for (f; f < b.length; f++) values.push(b[f].value), names.push(b[f].name);
                    var g = {
                        method: "/user/create",
                        queryNames: ["email"],
                        queryValues: [a],
                        attributeValues: values,
                        attributeNames: names,
                        httpVerb: "post"
                    };
                    $.ajax({
                        url: "/services/ecrelay.asmx/Relay",
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(g),
                        dataType: "json",
                        success: function(b) {
                            var c = "new";
                            b.d.indexOf("OBJECT_ALREADY_EXISTS") > -1 && (c = "existing", g.method = "/user/updateProfileByEmail", $.ajax({
                                url: "/services/ecrelay.asmx/Relay",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(g),
                                dataType: "json",
                                success: function() {}
                            })), g.method = "/membership/subscribeByEmail", g.queryNames = ["email", "groupId", "subscriptionMode"], g.queryValues = [a, e, "OPT_IN"], g.attributeVales = null, g.attributeNames = null, $.ajax({
                                url: "/services/ecrelay.asmx/Relay",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(g),
                                dataType: "json",
                                success: function() {
                                    "function" == typeof d && d(c)
                                }
                            })
                        }
                    })
                }
            }
        }
    }(),
    postcodeAnywhere = function() {
        var a = {
                key: "FU43-NY28-TA13-EH87",
                preferredLanguage: "English",
                userName: "FRENC11122",
                filter: "None"
            },
            b = function(b, c) {
                $.getJSON("https://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/RetrieveById/v1.30/json3.ws?callback=?", {
                    Key: a.key,
                    Id: b,
                    PreferredLanguage: a.preferredLanguage,
                    UserName: a.userName
                }, function(a) {
                    c(a.Items[0])
                })
            };
        return {
            findPostcode: function(b, c) {
                $.getJSON("https://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/Find/v1.10/json3.ws?callback=?", {
                    Key: a.key,
                    SearchTerm: b,
                    PreferredLanguage: a.preferredLanguage,
                    Filter: a.filter,
                    UserName: a.userName
                }, function(a) {
                    1 === a.Items.length && void 0 !== a.Items[0].Error || 0 === a.Items.length ? c(!1, a) : c(!0, a)
                })
            },
            findAddress: b
        }
    }(),
    mainModule = function() {
        miniBasket = null;
        var b = [],
            c = $(""),
            d = function() {
                $(".nav-option a").removeClass("is-active"), $(".slide-right-list").removeClass("slide-list-visible"), $(".left-draw-scroll-indicator").fadeOut("slow"), $(".left-draw").removeClass("is-subdraw-visible"), $(".is-draw-visible .nav-wrapper nav > ul").removeClass("is-inactive")
            },
            e = function(a) {
                var b = $(".drawBtn");
                b.hasClass("selected") || a ? ($(".left-draw").removeClass("is-draw-visible"), $(".main-content, .marketing-message").removeClass("draw-visible-main-content"), b.removeClass("selected")) : ($(".left-draw").addClass("is-draw-visible"), $(".main-content, .marketing-message").addClass("draw-visible-main-content"), b.addClass("selected"))
            },
            f = function(a, b) {
                setTimeout(function() {
                    a.addClass("visuallyHidden")
                }, b + 100)
            },
            g = function() {
                $("ul.product-sizes li").each(function() {
                    $(this).text().length > 5 && $(this).css("min-width", "65px")
                })
            },
            h = function() {
                var a = window.location.pathname;
                if ("/" !== a) {
                    var b = _.find($(".category-nav-list li a"), function(b) {
                        return -1 != $(b).attr("href").toLowerCase().indexOf(a.toLowerCase())
                    });
                    b && $(b).length > 0 && $(b).addClass("current")
                }
            },
            i = function() {
                if ($(".basket-items li").length > 3) {
                    var a = 0;
                    $(".basket-items li").each(function(b) {
                        b > 2 && ($(this).remove(), a++)
                    }), $("ul.basket-items").after("<div id='mini-basket-overflow' style=''><a href='/basket.htm'>+ " + a + " more item" + (a > 1 ? "s" : "") + " in bag</a></div>"), $(".go-to-basket").text("VIEW FULL SHOPPING BAG")
                }
            },
            j = function() {
                var a = /( )(l)(?:$| )/i,
                    b = /( )(r)(?:$| )/i;
                $("div.product-sizes").each(function() {
                    for (var c = 0; c < $(this).find(".size").length; c++) {
                        var d = $($(this).find(".size")[c]); - 1 != d.text().toLowerCase().search(a) ? d.addClass("long grid-parent") : -1 != d.text().toLowerCase().search(b) && d.addClass("regular grid-parent")
                    }
                    $(this).find(".regular").wrapAll('<ul class="product-sizes-split regular-size-list"></ul>'), $(this).find(".long").wrapAll('<ul class="product-sizes-split long-size-list"></ul>').closest().insertAfter(".regular-size-list")
                });
                var c = $(".regSize").text(),
                    d = $(".longSize").text();
                $("ul.regular-size-list").before('<h3 class="product-label-sizes">Leg Length: ' + c + "</h3>"), $("ul.long-size-list").before('<h3 class="product-label-sizes">Leg Length: ' + d + "</h3>"), $(".regSize, .longSize").parent().addClass("hidden"), $("div.product-sizes").each(function() {
                    var a = $(this);
                    a.find(".long-size-list").appendTo(a.find("ul.product-sizes")), a.find(".regular-size-list").insertAfter(a.find("ul.product-sizes h3").eq(0))
                })
            },
            k = function(a, b) {
                var c = tcp_env.dynamic_image_settings.BaseUrl;
                b && (c += "content-images/", c = c + a.attr("season") + "/250"), a.attr("img-src", c + a.attr("img-src"))
            },
            l = function(a) {
                var b = "250",
                    c = "250",
                    d = "250",
                    e = "250";
                return 480 > a ? (b = "250", c = "350", d = "350", e = "450") : a >= 480 && 860 > a ? (b = "450", c = "550", d = "700", e = "950") : a >= 860 && 980 > a ? (b = "250", c = "450", d = "700", e = "950") : a > 979 && 1440 > a ? (b = "350", c = "550", d = "950", e = "1200") : a > 1439 && 1999 >= a ? (b = "450", c = "700", d = "950", e = "1553") : a > 1999 && (b = "550", c = "950", d = "1553", e = "1553"), [b, c, d, e]
            },
            m = function() {
                if (homepageWindowWidth = $(window).width(), !(homepageCurrentWindowWidth > homepageWindowWidth && homepageWindowWidth > 768)) {
                    var a = l(homepageWindowWidth);
                    n(b, a), homepageCurrentWindowWidth = homepageWindowWidth
                }
            },
            n = function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = $(a[b]);
                    if (!c.hasClass("range-product"))
                        if (void 0 != c.css("background-image") && "none" != c.css("background-image")) {
                            for (var d = c.css("background-image"), e = c.width(), f = 0; f < imageSizeBreakdownArray.length; f++)
                                if (e < imageSizeBreakdownArray[f]) {
                                    c.css("background-image", d.replace(sizeRegex, "/" + imageSizeBreakdownArray[f] + "/"));
                                    break
                                }
                        } else {
                            var d = c.attr("src");
                            (void 0 == d || 0 == d.length) && (d = c.attr("img-src"));
                            for (var e = c.width(), f = 0; f < imageSizeBreakdownArray.length; f++)
                                if (e < imageSizeBreakdownArray[f]) {
                                    c.attr("src", d.replace(sizeRegex, "/" + imageSizeBreakdownArray[f] + "/"));
                                    break
                                }
                        }
                }
            },
            o = function() {
                if (rangeWindowWidth = $(window).width(), !(rangeCurrentWindowWidth > rangeWindowWidth)) {
                    var a = "700";
                    600 > rangeWindowWidth ? a = "350" : rangeWindowWidth >= 860 && 980 > rangeWindowWidth ? a = "450" : rangeWindowWidth > 979 && 2e3 > rangeWindowWidth ? a = "550" : rangeWindowWidth > 1999 && (a = "700");
                    for (var b = $(".category-full-width-banner .range-image"), c = 0; c < b.length; c++) {
                        var d = $(b[c]);
                        if (-1 != d.attr("img-src").search(sizeRegex)) {
                            var e = d.attr("img-src");
                            e = e.replace(sizeRegex, "/" + a + "/"), d.attr("src", e)
                        }
                    }
                    rangeCurrentWindowWidth = rangeWindowWidth
                }
            },
            p = function(a) {
                var b = $(window).height() + $(window).scrollTop(),
                    c = 0;
                if (0 != $("#newFooter").length && 0 != $(".footer-list-links").length && (c = $("#newFooter").height() + parseInt($("#newFooter").css("padding-top")) + parseInt($("#newFooter").css("padding-bottom"))), b / ($(document).height() - c) > .9 || a) {
                    $(".landing-container").removeClass("visuallyHidden");
                    for (var d = 0; 4 > d; d++) $($(".archive-post.visuallyHidden")[d]).addClass("active-tile"), $($(".archive-post.visuallyHidden")[d]).find("img").attr("src", $($(".archive-post.visuallyHidden")[d]).find("img").attr("img-src"));
                    $(".active-tile").removeClass("visuallyHidden"), $(".active-tile").css("opacity", "1").removeClass("active-tile")
                }
            },
            q = function() {
                var a = {},
                    b = "";
                return b = $(".product-info h3").length > 0 ? $(".product-info h3").text() : $(".product-info h2").length > 0 ? $(".product-info h2").text() : $(".product-info h1").text(), a.socialProductDescription = $.trim(b), a.socialProductDetails = $.trim($($(".product-accordion section")[0]).find("p").text()), a.socialUrlhostname = tcp_env.site_base, a.socialUrlProdcode = 0 != $(".buy-off-container").length && "undefined" != typeof currentObjId ? currentObjId : $("#productId").attr("value"), a.socialUrlProdName = a.socialProductDescription.replace(/\s/g, ""), a.socialUrlShare = tcp_env.site_base + "product/" + a.socialUrlProdcode + "/" + a.socialUrlProdName + ".htm", 0 != $(".buy-off-container").length && "undefined" != typeof currentObjId && $(".twitter-social").attr("href", "//twitter.com/share?url=" + a.socialUrlShare + "&text=" + a.socialProductDescription + "%20by%20TOAST:%20"), a
            },
            r = function() {
                if ($("#social a").length > 0) {
                    var a = q();
                    $(".pinterest-social").click(function(b) {
                        b.preventDefault();
                        var c = $(".selected-swatch").attr("src").replace(sizeRegex, "/250/");
                        $(".pinterest-social").attr("href", "//pinterest.com/pin/create/button/?url=" + a.socialUrlShare + "&media=" + c + "&description=" + a.socialProductDescription + " by TOAST"), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + a.socialProductDescription, "Pinterest"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Pinterest"])
                    }), $(".facebook-social").click(function(b) {
                        b.preventDefault();
                        var c = $(".selected-swatch").attr("src"),
                            d = "";
                        0 != $(".buy-off-container").length && "undefined" != typeof currentObjId ? (c = c.replace(sizeRegex, "/250/"), d = "http://www.facebook.com/sharer.php?m2w&s=100&p[title]=" + a.socialProductDescription + "%20by%20TOAST&p[summary]=" + a.socialProductDetails + "&p[url]=" + a.socialUrlShare + "&p[images][0]=http:" + c + ",%20sharer,toolbar=0,status=0,width=1200,height=1200") : (d = "http://www.facebook.com/sharer.php?s=100&p[title]=" + a.socialProductDescription + "%20by%20TOAST&p[summary]=" + a.socialProductDetails + "&p[url]=" + a.socialUrlShare + "&p[images][0]=http:" + c + ",%20sharer,toolbar=0,status=0,width=250,height=250", c = c.replace(sizeRegex, "/250/")), $(".facebook-social").attr("href", d.replace(/\s/g, "%20")), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + a.socialProductDescription, "Facebook"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Facebook"])
                    }), $(".pinterest-social").popupWindow({
                        height: 400,
                        width: 800,
                        centerBrowser: 1
                    }), $(".facebook-social, .twitter-social").popupWindow({
                        height: 350,
                        width: 670,
                        centerBrowser: 1
                    }), $(".twitter-social").attr("href", "//twitter.com/share?url=" + a.socialUrlShare + "&text=" + a.socialProductDescription + "%20by%20TOAST:%20"), $(".twitter-social").click(function(b) {
                        b.preventDefault(), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + a.socialProductDescription, "Twitter"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Twitter"])
                    })
                }
            },
            s = function() {
                Tipped.create(".recentlyViewed ul li a, .ymal img, .browse-left, .browse-right, .product-swatch, .mapTooltip, .fourth-row .cutout-image, .fourth-row .homepage-image, .group-images .range-product img", {
                    skin: "toast",
                    target: "mouse",
                    hook: "topmiddle",
                    showDelay: 250
                })
            },
            t = function() {
                Tipped.remove(".recentlyViewed ul li a, .ymal img, .browse-left, .browse-right, .product-swatch, .fourth-row .cutout-image, .fourth-row .homepage-image, .group-images .range-product img")
            },
            u = function(a, b, c) {
                var d = {
                    method: "/membership/subscribeByEmail",
                    queryNames: ["email", "groupId", "subscriptionMode"],
                    queryValues: [a, b, "OPT_IN"],
                    attributeValues: null,
                    attributeNames: null,
                    httpVerb: "POST"
                };
                $.ajax({
                    url: "/services/ecrelay.asmx/Relay",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(d),
                    dataType: "json",
                    success: function(a) {
                        void 0 !== c && c(a)
                    }
                })
            },
            v = function(a, b, c, d) {
                var e = {
                    method: "/user/create",
                    queryNames: ["email"],
                    queryValues: [a],
                    attributeValues: b,
                    attributeNames: c,
                    httpVerb: "post"
                };
                $.ajax({
                    url: "/services/ecrelay.asmx/Relay",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(e),
                    dataType: "json",
                    success: function(e) {
                        if (e.d.indexOf("OBJECT_ALREADY_EXISTS") > 0) {
                            var f = {
                                method: "/user/updateProfileByEmail",
                                queryNames: ["email"],
                                queryValues: [a],
                                attributeValues: b,
                                attributeNames: c,
                                httpVerb: "post"
                            };
                            $.ajax({
                                url: "/services/ecrelay.asmx/Relay",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(f),
                                dataType: "json",
                                success: function() {
                                    u(a, 750049776), void 0 !== d && d()
                                }
                            })
                        } else u(a, 750049776), void 0 !== d && d()
                    }
                })
            },
            w = function() {
                var a = {};
                return function(b, c, d) {
                    d || (d = "Don't call this twice without a uniqueId"), a[d] && clearTimeout(a[d]), a[d] = setTimeout(b, c)
                }
            }();
        if ($(window).resize(function() {
                w(function() {
                    $(window).width() < 1023 ? t() : $(window).width() > 1024 && s()
                }, 500, "windowResize")
            }), $(".left-side-nav").addClass("grid-60 tablet-grid-60 grid-parent"), $(".right-side-nav").addClass("grid-40 tablet-grid-40 grid-parent"), $(".right-side-nav ul").addClass("search-box grid-50 tablet-grid-50 mobile-grid-100 grid-parent"), $("#country-selector").before('<ol class="user-options grid-25 tablet-grid-25 mobile-grid-100 grid-parent"></ol>'), $("#toastFont").length > 0 && ($("body").append($('<a class="hide-on-mobile" href="#" id="more-content-arrow" style="display: inline;"><span id="more-content-arrow-hover" style="opacity: 0;"></span>To Top</a>')), $("#more-content-arrow").hover(function() {
                $("#more-content-arrow-hover").stop().animate({
                    opacity: 1
                }, 600, "linear")
            }, function() {
                $("#more-content-arrow-hover").stop().animate({
                    opacity: 0
                }, 700, "linear")
            }).click(function(a) {
                a.preventDefault(), _gaq.push(["_trackEvent", "More Content Arrow", "Click", "More Content Arrow"])
            }), $(window).scroll(function() {
                $(window).scrollTop() > 500 ? $("#more-content-arrow").fadeOut(300) : $("#more-content-arrow").fadeIn(300)
            })), $(document).ready(function() {
                function a() {
                    if ("uk" === tcp_env.country_code.toLowerCase()) {
                        var a = tcp_env.basket.subtotal,
                            b = parseInt(125 - a);
                        "undefined" != typeof toast_config && !1 === toast_config.in_sale && (b > 0 && a > 84 && 0 === $("#mini-basket-upsell").length && 0 === $("#basket-upsell").length ? ($(".mini-basket-sub-total").before("<div id='mini-basket-upsell' style='margin-top:15px; color: #186aa2; text-align: center; text-transform: uppercase; letter-spacing: 1px' class='medFont'>Add  £" + b + " more to your basket for free UK delivery and returns</div>"), $("#submitBasket").prepend("<div id='basket-upsell' style='margin-bottom:15px; color: #186aa2; text-align: center; text-transform: uppercase; letter-spacing: 1px' class='medFont grid-100 tablet-grid-100 mobile-grid-100 grid-parent'>Add  £" + b + " more to your basket for free UK delivery and returns</div>"), $("#continueShopping").css({
                            float: "right"
                        })) : 84 > a && $("#mini-basket-upsell").length > 0 && $("#mini-basket-upsell").remove())
                    }
                    $(".basketProductDescription").each(function() {
                        "6CHTANONEOS" == $(this).find("#Full_productid").html().trim() && $("#basket-upsell").hide()
                    })
                }

                function b() {
                    for (var a = {
                            skuList: []
                        }, b = tcp_env.basket.line_items, c = 0; c < b.length; c++) {
                        var d = b[c].product;
                        a.skuList.push(d.id)
                    }
                    $.ajax({
                        url: "/services/stockservices.asmx/GetProductVariantStock",
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(a),
                        dataType: "json",
                        success: function(a) {
                            var b = $.parseJSON(a.d);
                            if (null !== b)
                                for (var c = 0; c < b.stocklist.length; c++)
                                    for (var d = b.stocklist[c], e = 0; e < d.sizesInStock.length; e++) {
                                        var f = d.sizesInStock[e];
                                        f.stlev < 5 && f.stlev > 0 && $("#mini-basket [data-sku=" + f.sku + "] .prod-error").html("Only " + f.stlev + " left in stock")
                                    }
                        }
                    })
                }

                function g() {
                    if (void 0 !== $(".selected .new-sub-nav").offset())
                        if ($(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 20)
                            for (; $(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 10;) $(".selected .new-sub-nav").css({
                                left: "-=10px"
                            });
                        else $(".selected .new-sub-nav").css({
                            left: "-10px"
                        }), $(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 20 && g()
                }
                $.browser.device = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|ios|mobile|opera mobi|opera|tab|touchpad|nexus 7|nexus 10|gt-n|pad|gt-p|ideatab|sm-t|hp slate|xoom|aurora-ii|me301t|a1-810|a1-811|nookhd|pmp5880d|quantum7|kindle fire|sgp3|nook hd|transformer|at300|cobalt|momo|sweet m|archos|nook|nabi2|mz60|vega|slider|mid7|kftt|streak|lepanii|htc_flyer|jro03h|bntv400|a500|kftt build|m805|pom727mc|cm_tenderloin/i.test(navigator.userAgent.toLowerCase()), $(".product-size-charts").click(function() {
                        _gaq.push(["_trackEvent", "beta", "product page size chart clicked"])
                    }), !0 === $.browser.device && $(".nav-option").click(function(a) {
                        a.preventDefault(), $that = $(this), $(".nav-option").each(function() {
                            $(this) !== $that && $(this).click(function(a) {
                                a.preventDefault(), $(this).trigger("hover"), $(this).unbind("click")
                            })
                        }), $(this).trigger("hover"), $(this).unbind("click")
                    }),
                    function() {
                        var a = 0,
                            b = function() {
                                200 > a && (miniBasket ? miniBasket.data("tcplMinibasket").refreshBasket() : (a++, setTimeout(b, 25)))
                            };
                        b()
                    }(), void 0 === $.cookie("cookie-banner-dismissed17") && ($.cookie("cookie-banner-dismissed17", "true", {
                        expires: 999,
                        path: "/"
                    }), $("body").prepend("<div id='cookie-banner'>TOAST uses cookies to improve your experience of shopping online. In using the site you have agreed to our cookies policy. <a href='/content/help/help.htm?helpSection=cookie-policy'>Learn more.</a> <a href='#' id='cookie-dismiss'><span class='sprite close'></span></a>"), $("#cookie-dismiss").click(function(a) {
                        a.preventDefault(), $("#cookie-banner").remove()
                    })), $("#ctl00_ctl01_btnSearch").click(function(a) {
                        "search" == $("#ctl00_ctl01_txtSearch").val() && a.preventDefault()
                    }), $(".main-content .category-nav-list").removeClass("max-width-1000"), $(".login-item").appendTo($(".right-side-nav .user-options")), setTimeout(function() {
                        $("#topBasketContainer").appendTo($(".right-side-nav .user-options"))
                    }, 50), $("#newFooter a").click(function() {
                        var a = "";
                        if ($(this).parents("#socialLinks").length > 0) a = $(this).attr("href").split("."), a = a[1];
                        else if ($(this).parents("#mainLinks").length > 0) {
                            var b = $(this).find("span").text();
                            a = $(this).text(), a = a.replace(b, ""), a = $.trim(a)
                        } else a = $(this).text();
                        _gaq.push(["_trackEvent", "Footer Link", "Click", a])
                    }), $(".new-cat-nav .nav-option .relative > a").click(function() {
                        _gaq.push(["_trackEvent", "Top Nav", "Click", $(this).text()])
                    }), $(".new-cat-nav .new-sub-nav-list a").click(function() {
                        _gaq.push(["_trackEvent", "Sub Nav", "Click", $(this).parents(".nav-option").find(".relative > a").text() + " > " + $(this).text()])
                    }), $("#topBasketContainer").length > 0 && void 0 !== $("#topBasketContainer").minibasket && (miniBasket = $("#topBasketContainer").minibasket({
                        afterRemoveItem: function() {
                            document.body.style.cursor = "default"
                        },
                        refreshCompleted: function() {
                            jQuery.isFunction(i) && i(), a(), b()
                        }
                    })), $(".product-details .recentlyViewed li").removeClass("grid-20 tablet-grid-20 mobile-grid-20").addClass("grid-33 tablet-grid-33 mobile-grid-33 visuallyHidden");
                for (var j = 0; j < $(".product-details .recentlyViewed li").length; j++) 3 > j && $($(".product-details .recentlyViewed li")[j]).removeClass("visuallyHidden");
                $("header .nav-bar").length > 0 && void 0 !== $("header .nav-bar").offset && $("header .nav-bar").offset().top, $(".category-container .category-nav-list").removeClass("hide-on-tablet"), $(".landingPage a").click(function() {
                    try {
                        var a = $(this).attr("href");
                        _gaq.push(["_trackEvent", "Landing Page Panel", "Click", a])
                    } catch (a) {}
                }), $(".close-nav-btn").click(function(a) {
                    a.preventDefault(), $(".category-nav .nav-option a").hasClass("selected") && ($(".category-nav .nav-option a").removeClass("selected"), c.css({
                        height: "0px",
                        opacity: 0
                    }), f(c, 450))
                }), $("body").on("click", ".product-sizes li", function(a, b) {
                    if (void 0 === b) {
                        var c = $(this).text();
                        if (_gaq.push(["_trackEvent", "Size", "Click", c]), $(this).hasClass("regular") || $(this).hasClass("long") || $(this).hasClass("short") || $(this).hasClass("product-sizes-split")) {
                            var d = $(this).html().split(" ");
                            d = d[1], _gaq.push(["_trackEvent", "Leg Length", "Click", d])
                        }
                    }
                }), $("body").on("change", ".product-qty select", function() {
                    var a = $(this).val();
                    _gaq.push(["_trackEvent", "Quantity", "Select", a])
                }), $("body").on("click", ".product-swatches li", function(a, b) {
                    if (void 0 === b) {
                        var c = $(this).find("img").attr("alt");
                        _gaq.push(["_trackEvent", "Colour", "Click", c])
                    }
                }), $("body").on("change", ".basketqtylist", function() {
                    var a = $(this).val(),
                        b = $(this).parent().parent().find(".basketProductDescription a").attr("title");
                    _gaq.push(["_trackEvent", "Change Quantity", a, b])
                }), $("body").on("click", "#basketTableMain .basketTableTd input", function() {
                    var a = $(this).parent().parent().find(".basketProductDescription a").attr("title");
                    _gaq.push(["_trackEvent", "Remove Product", "Click", a])
                }), $("#promobutton").click(function() {
                    var a = $("#promoForm input").val();
                    a.length > 0 && _gaq.push(["_trackEvent", "Promotional Code", "Enter", a])
                }), $(".promoField").keydown(function(a) {
                    13 == a.which && promoCode.length > 0 && _gaq.push(["_trackEvent", "Promotional Code", "Enter", promoCode])
                }), $("body").on("click", ".basket-recommendations-container .basket-recommendations", function() {
                    var a = $(this).find("img").attr("alt");
                    _gaq.push(["_trackEvent", "Others Like", "Click", a])
                }), $("#continueShopping").click(function() {
                    _gaq.push(["_trackEvent", "Continue Shopping", "Click", "Continue Shopping"])
                }), $(".checkoutButton").click(function() {
                    _gaq.push(["_trackEvent", "Secure Checkout", "Click", "Secure Checkout"])
                });
                var m = $('<div class="left-draw hide-on-desktop"><div class="nav-wrapper"><nav><ul class="search-nav nav-draw-ul"></ul><ul class="menu-nav nav-draw-ul"></ul><ul class="help-nav nav-draw-ul"></ul></nav></div></div>');
                $("body").prepend(m), $(".search-nav").append($('<li><form action="#"><input name="ctl01$txtSearch" type="search" id="ctl01_txtSearch" class="searchBox-Nav" /></form></li>')), $(".menu-nav").append("<li class='nav-option left-draw-basket'><a href='/basket.htm' associate='sub-list-basket'>Basket " + ($(".basket-items .qty").length > 0 ? $(".basket-items .qty").html() : "(0)") + "</a></li><li class='nav-option mobile-nav-checkout'><a href='/checkout/login.htm'>Checkout</a></li>"), $(".help-nav").append('<li class="hide-on-desktop"><a href="/content/wishlist/wishlist.htm">Wishlist (<span class="wishlist-qty">0</span>)</a></li><li class="hide-on-desktop"><a href="/account.htm?mode=myaccount">My Account</a></li>'), $(".help-nav #topBasketContainer").remove(), $("<li>" + $(".shop-section a") + "</li>"), $(".left-draw .searchBox-Nav").val("search"), $(".left-draw .searchBox-Nav").on("focus", function() {
                    "search" == $(this).val() && $(this).val("")
                }).on("focusout", function() {
                    "" == $(this).val() && $(this).val("search")
                });
                var n = !1;
                $("body").append("<div id='newHeaderBlackout' class='visuallyHidden'></div>"), $(".new-cat-nav > li:not(.separator):not(.new-cat-nav-new)").hover(function() {
                    $(this).find(".new-sub-nav").length > 0 && (n = !0, $(this).hasClass("selected") || $(".new-cat-nav > li").removeClass("selected"), $(".fixedRight").removeClass("fixedRight"), $(this).addClass("selected"), $("#newHeaderBlackout").removeClass("visuallyHidden"), $("#newHeaderBlackout").addClass("show"), g())
                }, function() {
                    n = !1, setTimeout(function() {
                        $(".new-cat-nav li.selected").length < 1 && $("#newHeaderBlackout").addClass("visuallyHidden"), !1 === n && ($("#newHeaderBlackout").removeClass("show"), setTimeout(function() {
                            !1 === n && $("#newHeaderBlackout").addClass("visuallyHidden")
                        }, 200), $(".new-cat-nav > li").removeClass("selected"))
                    }, 200)
                }), $(".separator").on("mouseenter mouseleave", function(a) {
                    $(this).prev("li").trigger(a.type)
                }), $(".close-tablet-menu-btn").click(function(a) {
                    a.preventDefault(), n = !1, $(".new-cat-nav > li").removeClass("selected"), setTimeout(function() {
                        $("#newHeaderBlackout").addClass("visuallyHidden")
                    }, 200)
                });
                var p = "",
                    q = 0;
                $(".new-cat-nav .nav-option").each(function() {
                    var a = $(this).find("> div > a");
                    if (p += "<li class='nav-option'><a href='" + a.attr("href") + "' " + (void 0 !== a.attr("style") ? "style='" + a.attr("style") + "'" : "") + ">" + a.text() + "</a></li>", $(this).find(".new-sub-nav li").length > 0) {
                        var b = "<li><ul class='mobile-sub-nav'>";
                        $(this).find(".new-sub-nav .main-link, .new-sub-nav .new-sub-nav-list-heading").each(function() {
                            var a = $(this).find("a");
                            if ($(this).hasClass("new-sub-nav-list-heading")) {
                                q++, b += "<li class='nav-option subNavItem" + q + "' id='" + $(this).text() + "'><a href='#' class='mobile-sub-list-heading'>+ " + $(this).text() + "</a></li>";
                                var c = "<li id='" + $(this).text() + "-sub'><ul class='mobile-sub-list' >";
                                $(this).parent().parent().parent().find("[data-parent=" + $(this).data("category") + "]").each(function() {
                                    c += "<li class='nav-option'><a href='" + $(this).find("a").attr("href") + "' " + (void 0 !== $(this).find("a").attr("style") ? "style='" + $(this).find("a").attr("style") + "'" : "") + ">- " + $(this).text() + "</a></li>"
                                }), b += c + "</ul></li>"
                            } else b += "<li class='nav-option'><a href='" + a.attr("href") + "' " + (void 0 !== a.attr("style") ? "style='" + a.attr("style") + "'" : "") + ">" + a.text() + "</a></li>"
                        }), p += b + "</ul></li>"
                    }
                }), $(".menu-nav").prepend(p), $(".mobile-sub-nav:first").prepend("<li>" + $("#Footwear-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Footwear").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li>" + $("#Accessories-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Accessories").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li>" + $("#Clothing-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Clothing").html() + "</li>"), $("#Footwear-sub").remove(), $("#Footwear").remove(), $("#Accessories-sub").remove(), $("#Accessories").remove(), $("#Clothing-sub").remove(), $("#Clothing").remove(), $(".menu-nav > li > a").click(function(a) {
                    a.preventDefault();
                    var b = "Click";
                    $(this).parent().hasClass("mobile-nav-expanded") ? window.location.href = $(this).attr("href") : ($(".mobile-nav-expanded").removeClass("mobile-nav-expanded"), $(this).parent().addClass("mobile-nav-expanded"), b = "Expand"), _gaq.push(["_trackEvent", "Mobile Top Nav", b, $(this).text()])
                }), $(".mobile-sub-list-heading").click(function(a) {
                    a.preventDefault();
                    var b = "Contract",
                        c = $(this).text().replace("+ ", "");
                    $(this).parent().hasClass("mobile-sub-nav-expanded") ? $(this).parent().removeClass("mobile-sub-nav-expanded") : ($(".mobile-sub-nav-expanded").removeClass("mobile-sub-nav-expanded"), $(this).parent().addClass("mobile-sub-nav-expanded"), b = "Expand"), _gaq.push(["_trackEvent", "Mobile Sub Accordion", b, $(this).parent().parent().parent().prev().text() + " > " + c])
                }), $(".mobile-sub-list > li > a, .mobile-sub-nav > .nav-option > a:not(.mobile-sub-list-heading)").click(function() {
                    var a = $(this).text().replace("- ", ""),
                        b = $(this).parents(".mobile-sub-list").length > 0 ? $(this).parent().parent().parent().prev().parent().parent().prev().text() : $(this).parent().parent().parent().prev().text();
                    _gaq.push(["_trackEvent", "Mobile Sub Nav", "Click", b + " > " + a])
                }), $(".nav-wrapper").click(function(a) {
                    a.stopPropagation(), d()
                }), $("html").click(function() {
                    e(!0)
                }), $(".drawBtn").click(function(a) {
                    a.preventDefault(), a.stopPropagation(), e(!1)
                }), $(".left-draw-follow").click(function(a) {
                    a.preventDefault(), $("html, body").animate({
                        scrollTop: $(document).height()
                    }, 0), e(!1)
                });
                var t = $("#mini-basket");
                if ($(".nav-bar .basket-items").hover(function() {
                        if ($(this).addClass("hover-mini-bag"), $(".basket-items li").length > 0) {
                            t.css("top", $("#topBasketContainer").offset().top - $(window).scrollTop() + 25);
                            var a = $(window).width() - ($("#topBasketContainer").offset().left + $("#topBasketContainer").width());
                            $("#mini-basket").css({
                                right: a - 1
                            }), t.removeClass("visuallyHidden")
                        }
                    }, function() {
                        $(this).removeClass("hover-mini-bag"), setTimeout(function() {
                            t.hasClass("inBasket") || t.addClass("visuallyHidden")
                        }, 10)
                    }), t.length > 0 && t.hover(function() {
                        t.addClass("inBasket")
                    }, function() {
                        t.removeClass("inBasket"), setTimeout(function() {
                            t.hasClass("inBasket") || $(".nav-bar .basket-items").hasClass("hover-mini-bag") || t.addClass("visuallyHidden")
                        }, 400)
                    }), $(".main-content").on("click", ".mini-details, .mini-img", function() {
                        var a = $(this).parent().find("a img").attr("alt");
                        _gaq.push(["_trackEvent", "Mini-Basket Product", "Click", a])
                    }), $(".main-content").on("click", ".go-to-basket", function() {
                        _gaq.push(["_trackEvent", "Mini-Basket View Bag", "Click", "Mini-Basket View Bag"])
                    }), $(".left-draw .searchBox-Nav").keydown(function(a) {
                        $(".right-side-nav .searchForm input[type=text]").attr("value", $(this).val()), 13 == a.which && (a.preventDefault(), $(".searchbutton").trigger("click"))
                    }), $(".product-size-charts").click(function(a) {
                        a.preventDefault(), a.stopPropagation(), $(".main-content").addClass("visuallyHidden"), $("body").append($('<div class="info-draw grid-parent grid-80 tablet-grid-80 mobile-grid-80"><a href="#" class="info-draw-close">Close</a><section class="size-fit-info"></section><section id="social-info"></section></div>'));
                        var b = ["CAEAD", "CAEAE", "CAEAL", "CAEAN", "CAEBX", "CAEBY", "CAEBZ", "C6EAA", "C6EAB", "C6EAJ", "C6EAK", "C6EAL", "C6EAN", "C6EBG", "C6EBH"];
                        $(".info-draw .size-fit-info").load(-1 !== $.inArray($(".desc-prod-code").text().replace("Style Code: ", ""), b) ? "/content/site/product/size-chart-t1-2015.htm #size-chart-overlay-content" : "/content/site/product/size-Chart.htm #size-chart-overlay-content")
                    }), $("body").on("click", ".info-draw-close", function(a) {
                        a.preventDefault(), $(".main-content").removeClass("visuallyHidden"), $(".info-draw").remove()
                    }), $().UItoTop({
                        easingType: "easeOutQuart"
                    }), h(), $("#breadcrumb").length > 0) {
                    var u = $("#breadcrumb li").eq(1).text(),
                        v = $("#breadcrumb li").eq(1).children();
                    u.indexOf("women") > -1 ? v.wrap('<a href="/category/women+new/new.htm"></a>') : u.indexOf("men") > -1 ? v.wrap('<a href="/category/men+new+in/New.htm"></a>') : u.indexOf("house&home") > -1 && v.wrap('<a href="/category/HH+newly+added/new.htm"></a>')
                }
                if ($("#breadcrumb li > a").click(function() {
                        var a = $(this).text();
                        _gaq.push(["_trackEvent", "Breadcrumbs", "Click", a])
                    }), $("body").on("click", ".checkout a", function() {
                        var a = $(".product-details .product-info h1").text() || $(".product-details .product-info h3").text() || $(".wishlist-item-selected .wish-item-title").text();
                        _gaq.push(["_trackEvent", "Checkout", "Click", a])
                    }), $("html.lt-ie9").length > 0 && ($("#breadcrumb li, li.breadcrumb").last().css("background-image", "none"), $(".product-page").removeClass("prefix-10 suffix-5 grid-50").addClass("grid-60"), $(".product-details .product-details").removeClass("suffix-10 grid-50 grid-45").addClass("grid-35 prefix-5"), $(".product-info").removeClass("suffix-10 grid-25").addClass("grid-35 prefix-5"), $(".product-accordion, .ymal").parent().removeClass("grid-85").addClass("grid-100"), $(".category-product-items").length > 0 && ($(".category-product-items").removeClass("grid-80 prefix-10 suffix-10 grid-90 suffix-5 prefix-5").addClass("grid-100"), $(".category-product-items > .product").removeClass("grid-25").addClass("grid-33"), $(".filter-wrapper nav, div.filters, div.filter-options, div.results-info-wrapper").removeClass("grid-80 prefix-10 suffix-10 grid-90 prefix-5 suffix-5").addClass("grid-100")), $(".left-v-footer, .right-v-footer").removeClass("grid-30").addClass("grid-25"), $(".middle-v-footer").removeClass("grid-40").addClass("grid-50"), $("#basketTableMain thead .basketTableHeader th:eq(0), #basketTableMain thead .basketTableHeader th:eq(1)").css("text-align", "left"), $(".group-product-image").removeClass("grid-40 prefix-10 suffix-5").addClass("grid-50"), $(".buy-off-container > .product-details").removeClass("grid-35 suffix-10").addClass("grid-45 prefix-5"), $(".buy-off-container > .product-details > .product-info").removeClass("grid-100 suffix-15").addClass("grid-85 suffix-15"), $("#lookbook-outer-wrap .group-product-image").removeClass("grid-60 suffix-5 grid-85").addClass("grid-50"), $("#lookbook-outer-wrap .product-details").removeClass("grid-40 suffix-10").addClass("grid-45 prefix-5"), $("#lookbook-outer-wrap .product-details > .product-info").removeClass("grid-45 suffix-15 suffix-5 grid-85").addClass("grid-100"), $(".right-side-nav").addClass("remove-right-margin")), jQuery.extend(Tipped.Skins, {
                        toast: {
                            border: {
                                size: 0,
                                color: "#959fa9"
                            },
                            background: "#e9e9e9",
                            radius: {
                                size: 0,
                                position: "border"
                            },
                            shadow: !1,
                            closeButtonSkin: "light"
                        }
                    }), jQuery(window).load(function() {
                        $(window).width() > 1023 && s()
                    }), _.defer(i), $(".category-full-width-banner .range-image").length > 0) {
                    rangeCurrentWindowWidth = $(window).width(), rangeWindowWidth = $(window).width();
                    for (var w = 0; w < $(".range-image").length; w++) $rangeImage = $($(".range-image")[w]), k($rangeImage, !0);
                    lazyRangeLayout = _.debounce(o, 300), $(document).ready(function() {
                        _.defer(o)
                    }), $(window).resize(lazyRangeLayout)
                }
                window.location.href.indexOf("/range/") < 0 && r();
                var x = function() {
                    var a = ($(".main-header").outerHeight() > 80 || $(".main-header").outerHeight(), "none" == $(".marketing-message").css("display") ? 0 : $(".marketing-message").outerHeight());
                    (Modernizr.mq("(min-width: 1024px)") && 0 == $.browser.device || 1 == $.browser.device && Modernizr.mq("(min-width: 1025px)") || $(".lt-ie9").length > 0) && ($(window).scrollTop() > $(".main-header").offset().top + $(".main-header").outerHeight() && $("#generalContainerBasket").length < 1 ? ($(".main-header").css({
                        position: "fixed",
                        transition: "none",
                        transform: "translateY(-" + $(".main-header").outerHeight() + "px)"
                    }), $("#mainContent").css({
                        marginTop: $(".main-header").outerHeight() > 80 ? "74px" : $(".main-header").outerHeight()
                    }), setTimeout(function() {
                        $(".main-header").css({
                            transition: "0.15s",
                            transform: "translateY(0)",
                            boxShadow: "0 1px 8px 2px rgba(180,180,180,0.5)"
                        })
                    }, 100)) : $(window).scrollTop() <= a && ($(".main-header").css({
                        position: "relative",
                        transition: "none",
                        transform: "none",
                        boxShadow: "0 0 0 rgba(0,0,0,0)"
                    }), $("#mainContent").css({
                        marginTop: "0"
                    })))
                };
                x(), $(window).scroll(x), $(window).resize(x)
            }), $("#toastFont, .homepageContainer").length > 0) {
            $(".landing-tile-content").each(function() {
                void 0 !== $(this).css("background-image") && "none" !== $(this).css("background-image") && b.push($(this))
            }), homepageCurrentWindowWidth = $(window).width(), homepageWindowWidth = $(window).width();
            var x = _.debounce(m, 300);
            _.defer(m), $(window).resize(x), $(".range-product").click(function() {
                var a = $(this);
                0 == $(".scrollToBuyOff").length && setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: a.offset().top
                    }, "250")
                }, 300)
            }), $(document).ready(function() {
                setTimeout(function() {
                    m()
                }, 500)
            })
        }
        return $(".editorial-buy-off").length > 0 && $(".range-product").click(function() {
            $(this), $(".scrollToBuyOff").length, setTimeout(function() {
                $("body, html").animate({
                    scrollTop: $(".buy-off-container").offset().top
                }, "250")
            }, 300)
        }), $(".landing-container").length > 0 && (windowWidth = $(window).width(), $(".archive-post").addClass("visuallyHidden").css("opacity", 0), $(window).scroll(function() {
            p(!1)
        })), $("#aspnetForm > header").addClass("main-header"), {
            checkProductSizeBoxWidth: g,
            checkForLegLengths: j,
            buildSizedImageSources: k,
            setRangeImages: o,
            setSocialVariables: q,
            setSocialIcons: r,
            populateTippedElements: s,
            destroyTippedElements: t,
            subscribeToGroup: u,
            miniBasketCarousel: i,
            signUpEmail: v
        }
    }();
! function(a) {
    a.fn.showHide = function(b) {
        var c = {
                speed: 1e3,
                easing: ""
            },
            b = a.extend(c, b);
        a(this).click(function() {
            a(".toggleDiv").slideUp(b.speed, b.easing);
            var c = a(this),
                d = a(this).attr("rel");
            return c.toggleClass("activeHelp"), a(".helpHeader").not(this).removeClass("activeHelp"), a(d).is(":visible") ? a(".toggleDiv").slideUp(b.speed, b.easing) : a(d).slideToggle(b.speed, b.easing, function() {}), !1
        })
    }
}(jQuery);
var helpModule = function() {
        var a = {},
            b = function(a, b) {
                $(".helpHeader").removeClass("activeHelp"), $(".toggleDiv").hide(), $(".toggleDiv:eq(" + b + ")").show().prev().addClass("activeHelp"), 0 == b ? $(".shopping-accordion").accordionA("toggle", "#" + a, !0) : 1 == b ? $(".legal-accordion").accordionA("toggle", "#" + a, !0) : 2 == b && $(".company-accordion").accordionA("toggle", "#" + a, !0), setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: Math.floor($("#" + a).offset().top - $(".main-header").height())
                    }, "250")
                }, 500)
            };
        return $(document).ready(function() {
            $("#delivery-exclusions tr:odd").addClass("pale-bg"), $(".help-accordion").accordionA(), $(".shopping-accordion").accordionA(), $(".legal-accordion").accordionA(), $(".company-accordion").accordionA(), $(".toggleDiv:not(:first)").hide(), $(".helpHeader").showHide({
                speed: 300,
                easing: ""
            });
            var a = getParameterByName("helpSection"),
                c = getParameterByName("subSection");
            "" != a && (sectionNumber = 0, $("#" + a).parent().hasClass("legal-accordion") ? sectionNumber = 1 : $("#" + a).parent().hasClass("company-accordion") && (sectionNumber = 2), b(a, sectionNumber), "" != c && setTimeout(function() {
                $("body, html").animate({
                    scrollTop: Math.floor($("#" + c).offset().top - $(".main-header").height())
                }, "250")
            }, 1e3)), $(".delivery-charges-link").click(function(a) {
                a.preventDefault(), b("shipping-charges", 0)
            }), $(".exclusions-link").click(function(a) {
                a.preventDefault(), b("delivery-exclusions", 0)
            }), $(".linkToPrivacyPolicy").click(function(a) {
                a.preventDefault(), b("privacy-policy", 1)
            }), $(".terms-conditions-link").click(function(a) {
                a.preventDefault(), b("terms-conditions", 1), setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: Math.floor($("#delivery-terms-heading").offset().top)
                    }, "250")
                }, 500)
            }), $("a.copyright-trademark-notice").click(function(a) {
                a.preventDefault(), b("terms-conditions", 1), setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: Math.floor($("#copyright-trademark-notice").offset().top)
                    }, "250")
                }, 500)
            }), document.location.href.indexOf("?=legal") > 1 && ($(".helpHeader").removeClass("activeHelp"), $(".toggleDiv").hide(), $(".toggleDiv:eq(1)").show().prev().addClass("activeHelp"))
        }), a
    }(),
    rangeModule = function() {
        var b = !1,
            c = {},
            d = {},
            e = {},
            f = {},
            g = {},
            h = {},
            i = {},
            j = !1,
            k = !1,
            l = !1,
            m = "",
            n = null,
            o = window.innerWidth,
            p = window.innerWidth,
            q = function() {
                $(".add-to-bag:not(.disabled)").addtobasket({
                    debug: "false" === tcp_env.is_live,
                    selectedSkuFinder: function(a) {
                        return a ? a.parent().find(".size-selected").attr("sku-id") : null
                    },
                    selectedQtyFinder: function(a) {
                        return a.parent().find(".qtyList option:selected").val()
                    },
                    selectedProdIdFinder: function(a) {
                        return a ? a.parent().attr("prod-id") : null
                    },
                    selectedPriceFinder: function(a) {
                        return a ? a.parent().find(".nowPrice").attr("price") : null
                    },
                    selectedNameFinder: function(a) {
                        return a ? a.parent().find(".product-info h3").text() : null
                    },
                    waitInitHandler: function() {
                        document.body.style.cursor = "wait"
                    },
                    waitDestroyHandler: function() {
                        document.body.style.cursor = "default"
                    },
                    addToBasketSuccessHandler: function(a, b) {
                        var c = a.parent().find(".size-selected").text();
                        a.parent().find(".stock-message").hide(), a.parent().find("#added-to-basket").show().html("<span class='message-text'>" + b.productDisplayName + ", size " + c + " has been added to your basket.</span>"), miniBasket && miniBasket.data("tcplMinibasket").refreshBasket(), document.body.style.cursor = "default", $(".basket-recommendations-container").length > 0 && (window.location = "/basket.htm"), setTimeout(function() {
                            var a = "<li><a href='/basket.htm'><span><b>Go to basket</b></span><span class='mini-basket-sub-total'>" + $(".mini-basket .mini-basket-sub-total").text() + "</span></a></li>";
                            $(".basket-items li").each(function() {
                                a += "<li><a href='" + $(this).find(".mini-details").attr("href") + "'><span>" + $(this).find(".prod-title").html() + "</span><span>" + $(this).find(".prod-cost").html() + "</span><span>" + $(this).find(".prod-size").html() + "</span><span>" + $(this).find(".prod-colour").html() + "</span><span>" + $(this).find(".prod-qty").html() + "</span></a></li>"
                            }), $(".left-draw-basket .mini-basket-sub-total").html(""), $(".sub-list-basket ul").html(a), $(".left-draw-basket > a").html("Basket " + $(".basket-items .qty").html())
                        }, 500), void 0 !== b.productDisplayName && _gaq.push(["_trackEvent", "Add to Basket", "Click", b.productDisplayName])
                    },
                    addToBasketFailedHandler: function() {},
                    trackingElementId: "trackers",
                    validateBeforeAdd: function(a) {
                        var b = a.parent();
                        return !b.find(".size-selected").hasClass("out-of-stock") && !b.find(".qtyList").is(":disabled") || (document.body.style.cursor = "default", !1)
                    },
                    selectedProductCategoryFinder: function() {
                        return "undefined" == typeof currentIndividualObj ? $("h1").text() : currentIndividualObj.parentCategory
                    }
                })
            },
            r = function(a) {
                a.skuList = a.skuList.sort(function(a, b) {
                    return a - b
                });
                for (var b = [a.skuList[0]], c = 1; c < a.skuList.length; c++) a.skuList[c - 1] !== a.skuList[c] && b.push(a.skuList[c]);
                a.skuList = b, $.ajax({
                    url: "/services/stockservices.asmx/GetProductVariantStock",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(a),
                    dataType: "json",
                    success: function(a) {
                        stockJson = $.parseJSON(a.d), t(), u(), q(), $(".basket-recommendations-container").length < 1 && $(".wishlist-product").length < 1 && B(), void 0 !== wishlistModule.updateAddRemoveWishlistButton && wishlistModule.updateAddRemoveWishlistButton();
                        var b = getParameterByName("selectedProd");
                        "" != b && A(b)
                    }
                })
            },
            s = function(a) {
                $.ajax({
                    url: "/services/stockservices.asmx/GetProductData",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(a),
                    dataType: "json",
                    success: function(b) {
                        productJson = $.parseJSON(b.d);
                        for (var c = 0; c < productJson.products.length; c++)
                            for (prop in productJson.products[c]) "title" == prop || "description" == prop || "details" == prop || "fitNotes" == prop || "provenance" == prop || "restricted" == prop || "0" !== productJson.products[c][prop][0].price && null !== productJson.products[c][prop][0].price && "0.00" !== productJson.products[c][prop][0].price && "undefined" !== productJson.products[c][prop][0].price || productJson.products.splice(c, 1);
                        setCurrentObj(!1), r(a)
                    }
                })
            };
        setCurrentObj = function(a) {
            if ("undefined" == typeof rangeJson) {
                var b = "";
                b = a ? $(".size-selected").attr("prod-id") : $(".selected-range-product").attr(j ? "base-code" : "id");
                for (var k = 0; k < productJson.products.length; k++)
                    for (prop in productJson.products[k])
                        if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop && prop.toLowerCase() == b.toLowerCase()) return c = productJson.products[k][prop], d = prop, e = productJson.products[k].title, f = productJson.products[k].description, g = productJson.products[k].details, h = productJson.products[k].fitNotes, void(i = productJson.products[k].provenance)
            }
        };
        var t = function() {
                for (var a = 0, b = 0; b < productJson.products.length; b++)
                    for (prop in productJson.products[b])
                        if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop && "restricted" !== prop) {
                            var c = productJson.products[b][prop];
                            if (0 == $(".selected-colour-tile").length) {
                                if (0 == $("#lookbook-outer-wrap, #jersey-outer-wrap").length) {
                                    for (var d = [], e = 0; e < c.length; e++)
                                        for (var f = 0; f < stockJson.stocklist.length; f++)
                                            if (stockJson.stocklist[f].prodId.toLowerCase() == c[e].prodId.toLowerCase()) {
                                                for (var g = !1, h = 0; h < stockJson.stocklist[f].sizesInStock.length; h++)
                                                    if ("0" != stockJson.stocklist[f].sizesInStock[h].stlev || "" != stockJson.stocklist[f].sizesInStock[h].preOrderAvailable) {
                                                        g = !0, d.push(c[e]);
                                                        break
                                                    }!g && j && d.push(c[e]);
                                                break
                                            }
                                    d.length > 0 && (c = d)
                                }
                                if (c.length > 0) {
                                    a >= c.length && (a = 0);
                                    var i = c[a];
                                    if ($("#lookbook-outer-wrap, #jersey-outer-wrap").length > 0)
                                        for (var k = !1, f = 0; f < lookbookModule.lookbookFoundItem.products.length; f++) {
                                            for (var l = 0; l < c.length; l++)
                                                if (-1 != c[l].prodId.indexOf(lookbookModule.lookbookFoundItem.products[f].prodId.slice(0, 5)) && -1 != c[l].upImg.toLowerCase().indexOf("/" + lookbookModule.lookbookFoundItem.products[f].skuColor.toLowerCase() + "/")) {
                                                    i = c[l], k = !0;
                                                    break
                                                }
                                            if (k) break
                                        }
                                    var m = "";
                                    m = i.upImg.replace(sizeRegex, "/250/"), j ? $($("#" + i.prodId + " img")[0]).attr({
                                        src: m.replace("gift_clear", "gift/clear"),
                                        alt: productJson.products[b].title,
                                        title: productJson.products[b].title,
                                        "prod-code": i.prodId,
                                        "base-colour": i.baseColour,
                                        "item-colour": i.colour
                                    }) : $($("#" + prop + " img")[0]).attr({
                                        src: m.replace("gift_clear", "gift/clear"),
                                        alt: productJson.products[b].title,
                                        title: productJson.products[b].title,
                                        "prod-code": i.prodId,
                                        "base-colour": i.baseColour,
                                        "item-colour": i.colour
                                    }), a++
                                }
                            } else if (c.length > 0)
                                for (var n = $(".selected-colour-tile").attr("base-colour").toLowerCase(), o = c.length - 1; o >= 0; o--)
                                    if (c[o].baseColour.toLowerCase() === n) {
                                        var i = c[o],
                                            m = "";
                                        m = i.upImg.replace(sizeRegex, "/250/"), j ? $($("#" + i.prodId + " img")[0]).attr({
                                            src: m.replace("gift_clear", "gift/clear"),
                                            alt: window.productJson.products[b].title,
                                            title: window.productJson.products[b].title,
                                            "prod-code": i.prodId,
                                            "base-colour": i.baseColour,
                                            "item-colour": i.colour
                                        }) : $($("#" + prop + " img")[0]).attr({
                                            src: m.replace("gift_clear", "gift/clear"),
                                            alt: window.productJson.products[b].title,
                                            title: window.productJson.products[b].title,
                                            "prod-code": i.prodId,
                                            "base-colour": i.baseColour,
                                            "item-colour": i.colour
                                        })
                                    }
                        }
            },
            u = function() {
                for (var a = 0; a < $(".range-product img").length; a++)
                    for (var b = 0; b < stockJson.stocklist.length; b++)
                        if (void 0 !== $($(".range-product img")[a]).attr("prod-code") && stockJson.stocklist[b].prodId.toLowerCase() == $($(".range-product img")[a]).attr("prod-code").toLowerCase()) {
                            for (var c = !1, d = 0; d < stockJson.stocklist[b].sizesInStock.length; d++)("0" != stockJson.stocklist[b].sizesInStock[d].stlev || "" != stockJson.stocklist[b].sizesInStock[d].preOrderAvailable) && (c = !0);
                            if (!c) {
                                $($(".range-product img")[a]).addClass("range-product-out-of-stock");
                                break
                            }
                            $($(".range-product img")[a]).removeClass("range-product-out-of-stock");
                            break
                        }
            },
            v = function() {
                if ("undefined" == typeof rangeJson) {
                    $("#added-to-basket").hide(), $(".stock-message").hide();
                    var a = $(".product-sizes ul .size-selected");
                    if (0 == a.length)
                        if (k) {
                            for (var b = 0; b < $(".product-sizes ul .size").length; b++)
                                if (a = $($(".product-sizes ul .size")[b]), a.attr("prod-id") == $(".product-details").attr("prod-id")) {
                                    a.addClass("size-selected");
                                    break
                                }
                        } else {
                            for (var c = !1, b = 0; b < $(".product-sizes ul .size").length; b++)
                                if ("false" == $($(".product-sizes ul .size")[b]).attr("data-oos")) {
                                    a = $($(".product-sizes ul .size")[b]).addClass("size-selected"), c = !0;
                                    break
                                }
                            c || (a = $($(".product-sizes ul .size")[0]), a.addClass("size-selected"))
                        }
                    var d = $(".stock-message");
                    a.hasClass("out-of-stock") ? d.show().html('<span class="message-text">Your selected size is currently out of stock.</span>') : void 0 !== a.attr("low-stock") && a.attr("low-stock").length > 0 && parseInt(a.attr("low-stock")) < 7 && 0 != parseInt(a.attr("low-stock")) ? (d.show().html('<span class="message-text">We have a limited number of this item left in your selected size.</span>'), a.addClass("low-stock")) : void 0 !== a.attr("low-stock") && a.attr("pre-order").length > 0 ? (d.show().html('<span class="message-text">Your selected size is expected in our warehouse on ' + a.attr("pre-order") + ". You can still order, we will send your item out to you as soon as it arrives.</span>"), a.addClass("pre-order")) : d.hide()
                }
            },
            w = function() {
                var a = $(".product-sizes ul");
                a.html("");
                var b = "";
                if (!k && currentIndividualObj) {
                    for (var c = 0; c < currentIndividualObj.skuSetArr.length; c++) {
                        b = currentIndividualObj.skuSetArr[c].slice(-2);
                        for (var f = "", g = "", h = !1, i = 0; i < stockJson.stocklist.length; i++)
                            if (stockJson.stocklist[i].prodId.toLowerCase() == currentIndividualObj.prodId.toLowerCase()) {
                                for (var j = 0; j < stockJson.stocklist[i].sizesInStock.length; j++)
                                    if (currentIndividualObj.skuSetArr[c].toLowerCase() == stockJson.stocklist[i].sizesInStock[j].sku.toLowerCase()) {
                                        ("0" != stockJson.stocklist[i].sizesInStock[j].stlev || "" != stockJson.stocklist[i].sizesInStock[j].preOrderAvailable) && (h = !0, g = stockJson.stocklist[i].sizesInStock[j].stlev), b = stockJson.stocklist[i].sizesInStock[j].value1, f = stockJson.stocklist[i].sizesInStock[j].preOrderAvailable;
                                        break
                                    }
                                break
                            }
                        "os" == b.toLowerCase() && (b = "One Size"), a.append($(h ? '<li class="grid-10 tablet-grid-10 mobile-grid-10 size" sku-id="' + currentIndividualObj.skuSetArr[c] + '" data-oos="' + !h + '" pre-order="' + f + '" low-stock="' + g + '" data-price="' + currentIndividualObj.price + '">' + b + "</li>" : '<li class="grid-10 tablet-grid-10 mobile-grid-10 size size-out-of-stock out-of-stock" sku-id="' + currentIndividualObj.skuSetArr[c] + '" data-oos="' + !h + '" pre-order="" low-stock="" data-price="' + currentIndividualObj.price + '">' + b + "</li>"))
                    }
                    mainModule.checkForLegLengths()
                } else
                    for (var c = 0; c < productJson.products.length; c++) {
                        var l = productJson.products[c];
                        if (l.title == e) {
                            var b = "";
                            for (prop in l)
                                if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop)
                                    for (var m = l[prop], h = !1, n = 0; n < m.length; n++) {
                                        var f = "",
                                            g = "";
                                        if ($(".selected-swatch").attr("base-colour").toLowerCase() == m[n].baseColour.toLowerCase() && $(".selected-swatch").attr("title").toLowerCase() == m[n].colour.toLowerCase() || $(".selected-swatch").attr("alt").toLowerCase() == m[n].colour.toLowerCase()) {
                                            b && 0 != b.length || (b = "Undetermined");
                                            for (var i = 0; i < stockJson.stocklist.length; i++)
                                                if (stockJson.stocklist[i].prodId.toLowerCase() == m[n].prodId.toLowerCase()) {
                                                    for (var j = 0; j < stockJson.stocklist[i].sizesInStock.length; j++)
                                                        if (m[n].skuSetArr[0].toLowerCase() == stockJson.stocklist[i].sizesInStock[j].sku.toLowerCase()) {
                                                            ("0" != stockJson.stocklist[i].sizesInStock[j].stlev || "" != stockJson.stocklist[i].sizesInStock[j].preOrderAvailable) && (h = !0, g = stockJson.stocklist[i].sizesInStock[j].stlev), b = stockJson.stocklist[i].sizesInStock[j].value1, f = stockJson.stocklist[i].sizesInStock[j].preOrderAvailable;
                                                            break
                                                        }
                                                    break
                                                }
                                            if ("Undetermined" == b && void 0 != l.fitNotes) {
                                                var o = l.fitNotes,
                                                    p = o.indexOf("&quot;&gt;"),
                                                    q = o.indexOf("&lt;", p);
                                                b = o.slice(p + 10, q)
                                            }
                                            a.append($(h ? '<li class="grid-10 tablet-grid-10 mobile-grid-10 size" prod-id="' + prop + '" sku-id="' + m[n].skuSetArr[0] + '" data-oos="' + !h + '" pre-order="' + f + '" low-stock="' + g + '" data-price="' + m[n].price + '">' + b + "</li>" : '<li class="grid-10 tablet-grid-10 mobile-grid-10 size size-out-of-stock out-of-stock" prod-id="' + prop + '" sku-id="' + m[n].skuSetArr[0] + '" data-oos="' + !h + '" pre-order="" low-stock="" data-price="' + m[n].price + '">' + b + "</li>"))
                                        }
                                    }
                        }
                    }
                v(), z(), mainModule.checkProductSizeBoxWidth(), $(".product-description-content .prodID").text($(".size-selected").attr("sku-id").slice(0, 5)), $(".product-sizes .size").length == $(".product-sizes .out-of-stock").length ? $(".add-to-bag").attr("disabled", "disabled").text("Out of Stock") : $(".add-to-bag").removeAttr("disabled").text("Add To Bag")
            },
            x = function(a) {
                if (void 0 !== a) {
                    var b = "&#163;" === tcp_env.currency_symbol ? " £" : void 0 !== tcp_env.currency_symbol ? tcp_env.currency_symbol : " £";
                    $("#salePrice").length > 0 && $("#salePrice").remove(), $(".nowPrice").removeClass("price-strike-through");
                    var c = parseFloat(a.price).toFixed(2);
                    if ($(".nowPrice").attr("price", c).text(b + c), a.price != a.salePrice && "0" != a.salePrice) {
                        var d = parseFloat(a.salePrice).toFixed(2);
                        $(".product-info").append($('<p id="salePrice">' + b + d + "</p>")), $(".nowPrice").addClass("price-strike-through")
                    }
                }
            },
            y = function() {
                $(".group-buy-off .hiddenSwatches").length || $(".group-buy-off").prepend("<div class='hiddenSwatches'></div>"), currentIndividualObj = void 0;
                var a = void 0;
                a = $($(".selected-range-product img").length > 1 ? $(".selected-range-product img")[1] : ".selected-range-product img"), $(".group-buy-off .product-swatches").html("");
                for (var b = 0; b < c.length; b++) {
                    var j = c[b],
                        l = j.upImg.replace(sizeRegex, "/250/").replace("gift_clear", "gift/clear"),
                        n = $('<li class="swatch"><img src="' + l + '" id="' + j.prodId + '" class="grid-image product-swatch" alt="' + j.colour + '" title="' + j.colour + '" data-tab-index="' + b + '" base-colour="' + j.baseColour.toLowerCase() + '"></li>');
                    if ($(".group-buy-off .product-swatches").append(n), !k && a.length > 0 && a.attr("prod-code").toLowerCase() === j.prodId.toLowerCase()) n.find("img").addClass("selected-swatch"), currentIndividualObj = j, $(".colour-showing").text(j.colour);
                    else if (k && 0 == m.length && a.length > 0 && a.attr("prod-code").toLowerCase() === j.prodId.toLowerCase() && a.attr("item-colour").toLowerCase() == j.colour.toLowerCase()) n.find("img").addClass("selected-swatch"), currentIndividualObj = j, $(".colour-showing").text(j.colour), m = j.baseColour.toLowerCase();
                    else if (k && m.length > 0 && a.attr("item-colour").toLowerCase() === j.colour.toLowerCase())
                        for (var o = 0; o < c.length; o++) m == c[o].baseColour.toLowerCase() && (n.find("img").addClass("selected-swatch"), currentIndividualObj = c[o], $(".colour-showing").text(j.colour), m = c[o].baseColour.toLowerCase())
                }
                if (D(), $(".product-details").attr("prod-id", d), $(".product-info h3").text(e), void 0 !== c[0])
                    if (0 === $(".goToPageAnchor").length && c) {
                        var p = $('<a class="goToPageAnchor"></a>');
                        p.attr("href", "/product/" + c[0].parentCategory.replace(/ /g, "+").replace(/\//g, "+") + "/" + d + "/" + e.replace(/ /g, "+").replace(/\//g, "+").replace(/'/g, "") + ".htm?clr=" + d.slice(0, 5) + "_" + $(".colour-showing").text().replace(/ /g, "").replace(/\//g, "")), $(".product-info h3").wrapAll(p)
                    } else $(".goToPageAnchor").attr("href", "/product/" + c[0].parentCategory.replace(/ /g, "+").replace(/\//g, "+") + "/" + d + "/" + e.replace(/ /g, "+").replace(/\//g, "+").replace(/'/g, "") + ".htm?clr=" + d.slice(0, 5) + "_" + $(".colour-showing").text().replace(/ /g, "").replace(/\//g, ""));
                x(currentIndividualObj);
                var q = $("<div />").html(f).text();
                (void 0 === q || 0 == q.length) && (q = f), $(".product-description-content p").html(q), $(".details").empty(), $(".fit-notes").empty();
                for (prop in g) $(".details").append($("<li>" + g[prop] + "</li>"));
                if (h) {
                    var r = $.parseHTML(h),
                        s = $(".fit-notes").append(r),
                        t = $(s.text().replace(/"/g, ""));
                    s.html("").append(t);
                    for (var b = 0; b < $(".regSize, .longSize").length; b++) $($(".fit-notes .regSize, .fit-notes .longSize")[b]).text($($(".fit-notes .regSize, .fit-notes .longSize")[b]).text() + '"')
                }
                if (i && i.length > 0) {
                    var u = i.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                    $(".details").append($(u))
                }
                window.location.href.indexOf("/range/") < 0 && mainModule.setSocialVariables(), setTimeout(function() {
                    mainModule.destroyTippedElements(), mainModule.populateTippedElements()
                }, 50)
            },
            z = function() {
                $(".product-sizes li.size-selected").length > 0 && ($(".product-sizes li.size-selected").hasClass("size-out-of-stock") ? $(".qtyList").attr("disabled", "disabled") : $(".qtyList").removeAttr("disabled"))
            },
            A = function(a) {
                for (var b = !1, c = $(".group-images .range-product").length - 1; c >= 0 && !b; c--)
                    if (k) {
                        if (-1 != $($(".group-images .range-product")[c]).attr("size-ids").toLowerCase().indexOf(a.substring(0, 5).toLowerCase())) {
                            $($(".group-images .range-product")[c]).trigger("click"), b = !0;
                            break
                        }
                    } else if (j) {
                    for (var d = a.substring(0, 5), e = 0; e < window.productJson.products.length && !b; e++)
                        if (void 0 != window.productJson.products[e][d])
                            for (var f = 0; f < window.productJson.products[e][d].length; f++)
                                for (var g = 0; g < window.productJson.products[e][d][f].skuSetArr.length; g++)
                                    if (window.productJson.products[e][d][f].skuSetArr[g] == a) {
                                        $("#" + window.productJson.products[e][d][f].prodId).trigger("click"), b = !0;
                                        break
                                    }
                } else if (-1 != $($(".group-images .range-product")[c]).attr("id").substring(0, 5).toLowerCase().indexOf(a.substring(0, 5).toLowerCase())) {
                    $($(".group-images .range-product")[c]).trigger("click"), b = !0;
                    break
                }
                if (!b) {
                    var d = a.substring(0, 5);
                    $("#" + d).trigger("click")
                }
            },
            B = function() {
                setTimeout(function() {
                    $(".product-accordion").accordionA("toggle", $($(".product-accordion section")[0]), !0)
                }, 500)
            },
            C = function() {
                return 600 > p && p > 479 ? "350" : 1024 > p && p > 600 ? "450" : 1440 > p && p > 1024 ? "550" : 2e3 > p && p > 1440 ? "700" : "950"
            },
            D = function(a) {
                if ($(".product-swatches img").each(function() {
                        $(this).attr("src").indexOf("_sw") > 0 && (thisURL = $(this).attr("src").split("/"), newURL = "https://d117fiyhpld8f9.cloudfront.net/global/" + thisURL[4] + "/" + thisURL[5].slice(0, -3) + "/700/" + thisURL[7], $(this).attr("src", newURL))
                    }), "undefined" != typeof currentIndividualObj && (p = window.innerWidth, void 0 === o && (o = window.innerWidth), !(o > p && !1 === b))) {
                    newSize = C();
                    var c = $(".product-swatches .selected-swatch"),
                        d = $(".main-product-image"),
                        e = $(".spinner");
                    if (void 0 != c.attr("src") && -1 != c.attr("src").search(sizeRegex)) {
                        var f = c.attr("src");
                        f = f.replace(sizeRegex, "/" + newSize + "/").replace("gift_clear", "gift/clear"); - 1 != f.indexOf("/global/") && (f = f.replace("/global/", "/product/")), f != d.attr("src") && (d.attr({
                            src: f,
                            alt: currentIndividualObj.title,
                            title: currentIndividualObj.title
                        }), e.removeClass("visuallyHidden"), $(".range-lifestyle").length > 0 && $(".range-lifestyle").removeClass("visuallyHidden")), $(".zoom-anchor").length > 0 && ($(".zoom-anchor").attr("href", d.attr("src").replace(sizeRegex, "/1200/")), $(".range-lifestyle").length > 0 && $(".range-lifestyle").parent().attr("href", $(".range-lifestyle").attr("src").replace(sizeRegex, "/1200/")), MagicZoomPlus.refresh())
                    }
                    if (o = p, !0 === b && !0 !== a) {
                        $("#lightbox-buy-off .main-product-image").hide();
                        var h = $("#lightbox-buy-off .main-product-image").attr("src").split("/");
                        try {
                            var i = h[0] + "/" + h[1] + "/" + h[2] + "/global/" + h[4] + "/s1/" + h[6] + "/" + h[7];
                            $("#lightbox-buy-off .main-product-image").attr("src", i);
                            var j = h[0] + "/" + h[1] + "/" + h[2] + "/global/" + h[4] + "/s1/1553/" + h[7];
                            $("#lightbox-buy-off .MagicZoomPlus").attr("href", j)
                        } catch (a) {}
                        $("#lightbox-buy-off .main-product-image").load(function() {
                            $("#lightbox-buy-off .main-product-image").show()
                        }), $("#lightbox-buy-off").modal("show")
                    }
                    $(".product-swatches img").each(function() {
                        thisURL = $(this).attr("src").split("/"), newURL = "https://d117fiyhpld8f9.cloudfront.net/global/" + thisURL[4] + "/" + thisURL[5] + "_sw/250/" + thisURL[7] + ".jpg", $(this).attr("src", newURL), swatched = !0
                    })
                }
            },
            E = function() {
                MagicZoomPlus.options = {
                    "zoom-position": "inner",
                    "click-to-activate": !0,
                    "click-to-deactivate": !0,
                    "loading-msg": "Loading...",
                    "show-title": !1,
                    hint: !1,
                    opacity: 70,
                    "initialize-on": "click",
                    "background-color": "#ffffff",
                    "background-opacity": 60,
                    "zoom-window-effect": !0,
                    "disable-expand": !0,
                    "disable-zoom": !1
                }
            },
            F = function() {
                return $(['<div class="buy-off-container group-buy-off grid-90 prefix-5 suffix-5 mobile-grid-100 tablet-grid-90 tablet-prefix-5 tablet-suffix-5 grid-parent">', '<div class="group-product-image grid-45 mobile-grid-100 tablet-grid-50 suffix-5">', '<img src="//d1kh76s6bjh8ww.cloudfront.net/img/ajaxLoader.gif" class="spinner visuallyHidden">', '<a href="#" class="zoom-anchor MagicZoomPlus" title="Click to zoom">', '<img class="main-product-image" />', "</a>", "</div>", '<div class="product-details grid-50 tablet-grid-50 mobile-grid-100">', '<div class="product-info grid-100 suffix-15 tablet-grid-95 tablet-suffix-5 mobile-grid-100 grid-parent">', "<h3></h3>", '<p class="nowPrice"></p>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<article class="group-product-description product-accordion accordion-a" role="tablist">', "<section>", "<header>", "<h2>Description</h2>", "</header>", '<div class="content product-description-content">', "<p></p>", '<ul class="details"></ul>', '<span class="desc-prod-code">Style Code: <span class="prodID"></span></span>', "</div>", "</section>", "</article>", "</div>", '<h3 class="product-label">Colour: <span class="colour-showing"></span></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<ul class="product-swatches">', "</ul>", "</div>", '<h3 class="product-label ">Size: <a class="product-size-charts" target="_blank" href="/content/help/help.htm#size-fit">(Size Chart)</a></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent product-sizes">', '<ul class="product-sizes"></ul>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 stock-message hidden-message"></div>', '<h3 class="product-label">Quantity: </h3>', '<div class="product-qty">', '<select class="qtyList" name="qty">', '<option value="1">1</option>', '<option value="2">2</option>', '<option value="3">3</option>', '<option value="4">4</option>', '<option value="5">5</option>', '<option value="6">6</option>', "</select>", "</div>", '<div id="added-to-basket" class="grid-100 tablet-grid-100 mobile-grid-100 stock-message-added hidden-message">Added to basket</div> ', '<div id="#addToBasket" class="grid-100 tablet-grid-100 mobile-grid-100 product-button add-to-bag">Add to bag</div>', "</div>", "</div>"].join(""))
            },
            G = function() {
                return $(['<div class="buy-off-container group-buy-off grid-90 prefix-5 suffix-5 mobile-grid-100 tablet-grid-90 tablet-prefix-5 tablet-suffix-5 grid-parent">', '<a href="#" class="buy-off-close">close</a>', '<div class="group-product-image grid-45 mobile-grid-100 tablet-grid-50 suffix-5">', '<img src="//d1kh76s6bjh8ww.cloudfront.net/img/ajaxLoader.gif" class="spinner visuallyHidden">', '<a href="#" class="zoom-anchor MagicZoomPlus" title="Click to zoom">', '<img class="main-product-image" />', "</a>", $("#range-lifestyle-holder").length > 0 ? '<a href="#" class="zoom-anchor MagicZoomPlus" title="Click to zoom"><img class="range-lifestyle visuallyHidden" /></a>' : "", "</div>", '<div class="product-details grid-50 tablet-grid-50 mobile-grid-100">', '<div class="product-info grid-100 suffix-15 tablet-grid-95 tablet-suffix-5 mobile-grid-100 grid-parent">', "<h3></h3>", '<p class="nowPrice"></p>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<article class="group-product-description product-accordion accordion-a" role="tablist">', "<section>", "<header>", "<h2>Description</h2>", "</header>", '<div class="content product-description-content">', "<p></p>", '<ul class="details"></ul>', '<span class="desc-prod-code">Style Code: <span class="prodID"></span></span>', "</div>", "</section>", '<section id="the-final-section">', "<header>", "<h2>Shipping & Returns</h2>", "</header>", '<div class="content">', "</div>", "</section>", "</article>", "</div>", '<h3 class="product-label">Colour: <span class="colour-showing"></span></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<ul class="product-swatches">', "</ul>", "</div>", '<h3 class="product-label ">Size: <a class="product-size-charts" target="_blank" href="/content/help/help.htm#size-fit">(Size Chart)</a></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent product-sizes">', '<ul class="product-sizes"></ul>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 stock-message hidden-message"></div>', '<h3 class="product-label">Quantity: </h3>', '<div class="product-qty">', '<select class="qtyList" name="qty">', '<option value="1">1</option>', '<option value="2">2</option>', '<option value="3">3</option>', '<option value="4">4</option>', '<option value="5">5</option>', '<option value="6">6</option>', "</select>", "</div>", '<div id="added-to-basket" class="grid-100 tablet-grid-100 mobile-grid-100 stock-message-added hidden-message">Added to basket</div> ', '<div id="#addToBasket" class="grid-100 tablet-grid-100 mobile-grid-100 product-button add-to-bag">Add to bag</div>', '<div class="grid-100 tablet-grid-100  mobile-grid-100 product-button checkout">', '<a id="ctl00_globalMainContent_btnCheckout" class="darkButton" href="/basket.htm">Checkout</a>', "</div>", "</div>", "</div>"].join(""))
            },
            H = function() {
                if ($("#the-final-section .content").load("/content/site/product/shipping-Returns.htm .shipping-content"), $('h3.product-label:contains("Share")').hide(), $(".buy-off-container").append($('<div class="fit-notes visuallyHidden"></div>')), $(".bedlinen-buy-off").length > 0 && (k = !0, m = ""), $(".colour-mode").length > 0 && (j = !0), $(".group-images").length > 0 && 0 == $(".lookbook-buy-off, .jersey-buy-off").length) {
                    for (var a = {
                            skuList: []
                        }, b = 0; b < $(".group-images .range-product").length; b++)
                        if (k || j)
                            if (!k && j) a.skuList.push($($(".group-images .range-product")[b]).attr("base-code"));
                            else
                                for (var b = 0; b < $(".range-product").length; b++)
                                    for (var c = $($(".range-product")[b]).attr("size-ids").split("-"), d = 0; d < c.length; d++) a.skuList.push(c[d]);
                    else a.skuList.push($($(".group-images .range-product")[b]).attr("id"));
                    s(a)
                }
                E(), window.location.href.indexOf("/range/") < 0 && $(".buy-off-container .product-details").append($('<div id="social" class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent"/>').load("/stormsites/toast/content/html/en-GB/site/social-icons.html #social a", function() {
                    window.location.href.indexOf("/range/") < 0 && mainModule.setSocialIcons()
                }))
            },
            I = function() {
                o = window.innerWidth, p = window.innerWidth;
                var a = _.debounce(D, 300);
                $(window).resize(a)
            },
            J = function() {
                for (var a = $("#category-link"), b = a.data("link"), c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (-1 != document.referrer.indexOf(d) || -1 != document.referrer.replace(/%20/g, "+").indexOf(d)) {
                        K(a, d), doneBreadcrumb = !0;
                        break
                    }
                }
            },
            K = function(a, b) {
                a.attr("href", b);
                var c = b.lastIndexOf("/"),
                    d = b.indexOf(".htm"),
                    e = b.slice(c + 1, d);
                a.find("span").text(e.replace(/\+/g, " ")), -1 !== b.toLowerCase().indexOf("category/women") ? ($("#section-link").attr("href", "/women.htm"), $("#section-link").find("span").text("women")) : -1 !== b.toLowerCase().indexOf("category/men") ? ($("#section-link").attr("href", "/men.htm"), $("#section-link").find("span").text("men")) : ($("#section-link").attr("href", "/houseandhome.htm"), $("#section-link").find("span").text("house&home"))
            };
        return addRangeListeners = function() {
            $(".group-images").on("click", ".range-product", function() {
                var a = $(this).parent().parent().attr("related-buy-off");
                void 0 != a && "" != a && $(".buy-off-container").insertAfter($(this).parent().parent()), $(".buy-off-container").css({
                    height: "auto",
                    opacity: 1
                }), $(this).hasClass("selected-range-product") || (m = "", $(".selected-range-product").removeClass("selected-range-product"), $(this).addClass("selected-range-product"), o = 0, setCurrentObj(!1), isLookBook && (y(), w()), B(), void 0 !== wishlistModule.updateAddRemoveWishlistButton && wishlistModule.updateAddRemoveWishlistButton()), reviewDisplayModule.callReviews()
            }), $(".group-buy-off").on("click", ".product-swatch", function() {
                if (!$(this).hasClass("selected-swatch")) {
                    var a = $(".buy-off-container");
                    m = $(this).attr("base-colour"), a.find(".product-swatch").removeClass("selected-swatch"), $(this).addClass("selected-swatch");
                    for (var b = 0; b < c.length; b++) {
                        var d = c[b];
                        ($(this).attr("base-colour").toLowerCase() == d.baseColour.toLowerCase() && $(this).attr("title").toLowerCase() == d.colour.toLowerCase() || $(this).attr("alt").toLowerCase() == d.colour.toLowerCase()) && (currentIndividualObj = d, a.find(".colour-showing").text(d.colour))
                    }
                    D(!0), isLookBook && w(), x(currentIndividualObj)
                }
            }), $(".group-buy-off").on("click", ".size", function() {
                $(this).hasClass(".size-selected") || (k ? ($(".size-selected").removeClass("size-selected"), $(this).addClass("size-selected"), setCurrentObj(!0), isLookBook && y(), z(), v(), B()) : ($(".size").removeClass("size-selected"), $(this).addClass("size-selected"), v()), $(".product-description-content .prodID").text($(".size-selected").attr("sku-id").slice(0, 5)))
            }), $(".colour-tiles li").click(function() {
                $(this).hasClass("selected-colour-tile") || ($(".selected-colour-tile").length > 0 && $(".selected-colour-tile").removeClass("selected-colour-tile"), $(".selected-mix-tile").length > 0 && $(".selected-mix-tile").removeClass("selected-mix-tile"), $(this).addClass("selected-colour-tile"), m = $(this).attr("base-colour"), t(), setCurrentObj(!1), u(), isLookBook && (y(), w()), B())
            }), $(".mix-container").click(function() {
                $(this).hasClass("selected-mix-tile") || ($(".selected-colour-tile").length > 0 && $(".selected-colour-tile").removeClass("selected-colour-tile"), $(this).addClass("selected-mix-tile"), t(), setCurrentObj(!1), u(), isLookBook && (y(), w()))
            }), $(".main-product-image").load(function() {
                $(".group-product-image .spinner").addClass("visuallyHidden")
            })
        }, k = !1, j = !1, $(".group-product-image").length > 0 && I(), $(".buy-off-container").length > 0 && $("body").on("click", ".bv-dropdown-item", function() {
            sortOrder = $(this).text(), _gaq.push(["_trackEvent", "Review Sort", "Click", sortOrder])
        }), $("#category-link").length > 0 && J(), $(document).ready(function() {
            if ("undefined" == typeof isLookBook && (isLookBook = !1), isLookBook && $(".template-buy-off").after(G()), $(".lightbox-template-buy-off").after(F()), "" != $("#range-lifestyle-holder").data("src") && "undefined" != $("#range-lifestyle-holder").data("src") && $(".range-lifestyle").attr("src", $("#range-lifestyle-holder").data("src")), $(".buy-off-container").length > 0 && (H(), addRangeListeners(), $("#breadcrumb").removeClass("grid-90 tablet-grid-90 suffix-5 prefix-5 tablet-suffix-5 tablet-prefix-5 grid-80 tablet-grid-80 tablet-prefix-10 tablet-suffix-10 suffix-10 prefix-10").addClass("grid-100 tablet-grid-100 grid-parent"), $(".range-breadcrumb").removeClass("grid-60 prefix-5").addClass("grid-100"), $(".breadcrumb-browse-controls").removeClass("grid-95 tablet-grid-95 mobile-grid-95 tablet-prefix-5 tablet-suffix-5 mobile-prefix-5 mobile-suffix-5").addClass("grid-100 tablet-grid-100 mobile-grid-100"), $(".template-buy-off, .buy-off-container").removeClass("grid-90 prefix-5 suffix-5").addClass("grid-100")), 0 == $(".lookbook-buy-off, .jersey-buy-off").length) {
                n = null, l = !1, $(window).width() < 767 && (l = !0, n = $(".group-images .group-images-set-one").bxSlider({
                    touchEnabled: !1,
                    auto: !1,
                    slideWidth: 500,
                    minSlides: 2,
                    maxSlides: 2
                }));
                var a = function() {
                    var a = {};
                    return function(b, c, d) {
                        d || (d = "Don't call this twice without a uniqueId"), a[d] && clearTimeout(a[d]), a[d] = setTimeout(b, c)
                    }
                }();
                $(window).resize(function() {
                    a(function() {
                        $(window).width() < 767 && !l ? (l = !0, n = $(".group-images .group-images-set-one").bxSlider({
                            touchEnabled: !1,
                            auto: !1,
                            slideWidth: 500,
                            minSlides: 2,
                            maxSlides: 2
                        })) : n && n.destroySlider && $(window).width() > 768 && (n.destroySlider(), n = null, l = !1)
                    }, 500, "windowResize")
                })
            }
        }), {
            toggleOpenDescription: B,
            setCurrentObj: setCurrentObj,
            populateRangeImages: t,
            populateRangeBuyOffSection: y,
            setFadedOutRangeImagesBasedOnStock: u,
            populateRangeSizesBasedOnStock: w,
            initAddToBasket: q,
            setBaseBuyOffVars: I,
            addRangeListeners: addRangeListeners,
            initialiseBuyOff: H,
            getRangeBuyOffTemplate: G,
            getLightboxTemplate: F
        }
    }(),
    wishlistModule = function() {
        var a = {
                wishlistProductJson: void 0,
                wishlistStockJson: void 0,
                wishListCollection: {
                    wishlist: []
                }
            },
            b = !1,
            c = "Out Of Stock",
            d = "Pre-Order Available",
            e = "Add To Bag",
            f = !1,
            g = !1,
            h = function() {
                $(".wishlist-add-all, .wishlist-add-to-bag-btn").addtobasket({
                    debug: "false" === tcp_env.is_live,
                    selectedProductArrayBuilder: function(b) {
                        if (!b) return null;
                        var c = [];
                        c = b.hasClass("wishlist-add-all") ? $(".wishlist-product") : b.parent().parent().parent();
                        var d = Array();
                        return c.each(function() {
                            var b = $(this);
                            if ("out of stock" != b.find(".wishlist-add-to-bag-btn span").text().toLowerCase()) {
                                var c = b.find(".range-product").attr("id"),
                                    e = b.attr("sku"),
                                    f = $(".wish-item-qty", b).data("quantity"),
                                    g = b.find(".price-of-item").attr("price"),
                                    h = b.find(".wish-item-title").text(),
                                    i = "";
                                $.each(a.wishlistProductJson.products, function(a, b) {
                                    void 0 !== b[c] && (i = b[c][0].parentCategory)
                                }), d.push({
                                    productid: c,
                                    sku: e,
                                    quantity: f,
                                    price: g,
                                    productDisplayName: h,
                                    productCategory: i
                                })
                            }
                        }), d
                    },
                    waitInitHandler: function() {
                        document.body.style.cursor = "wait"
                    },
                    waitDestroyHandler: function() {
                        document.body.style.cursor = "default"
                    },
                    addToBasketSuccessHandler: function(a, b) {
                        if (a.hasClass("wishlist-add-all")) g = !0;
                        else {
                            var c = a.parent().parent().parent();
                            c.find(".wishlist-add-to-bag-btn span").text("Added to Basket"), c.find(".wishlist-add-to-bag-btn").addClass("grey-wish-btn"), setTimeout(function() {
                                c.find(".wishlist-add-to-bag-btn").removeClass("grey-wish-btn"), c.find(".wishlist-add-to-bag-btn span").text("Add to Bag")
                            }, 3e3)
                        }
                        _gaq.push(["_trackEvent", "Wishlist Add to Basket", "Click", b.productDisplayName])
                    },
                    addToBasketFailedHandler: function() {},
                    trackingElementId: "trackers",
                    validateBeforeAdd: function(a, b) {
                        $(".messages").empty();
                        for (var d = !0, e = 0; e < b.length; e++) b[e].sku && b[e].productid && b[e].quantity || (d = !1);
                        return d
                    },
                    addToBasketComplete: function() {
                        g && ($(".wishlist-add-all").addClass("grey-wish-btn").find("span").text("All in stock items added to basket"), setTimeout(function() {
                            $(".wishlist-add-all").removeClass("grey-wish-btn").find("span").text("Add all items to basket")
                        }, 3e3), _gaq.push(["_trackEvent", "Wishlist Add All to Basket", "Click", $(".wishlist-add-to-bag-btn").length + " Items"])), document.body.style.cursor = "default", miniBasket && miniBasket.data("tcplMinibasket").refreshBasket()
                    }
                })
            },
            i = function(a) {
                $.ajax({
                    url: "https://api-ssl.bitly.com/v3/shorten",
                    data: {
                        longUrl: a,
                        apiKey: "R_b310498725681c10639d4ca31a776f4d",
                        login: "toasttechops"
                    },
                    dataType: "jsonp",
                    success: function(a) {
                        var b = a.data.url;
                        $(".url-to-copy").html('<a href="mailto:?subject=My Toast Wishlist&body=You can find my Toast wishlist at: ' + b + '">' + b + "</a>"), $(".share-list-twitter").attr("href", "//twitter.com/share?url=" + b + "&text= My%20Toast%20Wishlist");
                        var c = "http://www.facebook.com/sharer.php?s=100&p[title]=My%20TOAST%20Wishlist&p[summary]=Take%20a%20look%20at%20my%20TOAST%20wishlist&p[url]=" + b + "&p[images][0]=http://d1kh76s6bjh8ww.cloudfront.net/site/Toast_Favicon_250x250_Black.png,%20sharer,toolbar=0,status=0,width=1200,height=1200";
                        $(".share-list-facebook").attr("href", c.replace(/\s/g, "%20"));
                        var d = "http://www.pinterest.com/pin/create/button/?url=" + b + "&media=//d1kh76s6bjh8ww.cloudfront.net/img/logo-mobile.png&description=My%20Toast%20Wishlist";
                        $(".share-list-pinterest").attr("href", d.replace(/\s/g, "%20"))
                    }
                })
            },
            j = function() {
                $.ajax({
                    url: "/services/stockservices.asmx/GetProductVariantStock",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(skuListObject),
                    dataType: "json",
                    success: function(b) {
                        a.wishlistStockJson = $.parseJSON(b.d), l(), n(), h()
                    }
                })
            },
            k = function(b) {
                $.ajax({
                    url: "/services/stockservices.asmx/GetProductData",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: b,
                    dataType: "json",
                    success: function(c) {
                        a.wishlistProductJson = $.parseJSON(c.d), j(b)
                    }
                })
            },
            l = function() {
                for (var c = !1, d = 0; d < a.wishListCollection.wishlist.length; d++)
                    for (var e = !1, f = 0; f < a.wishlistProductJson.products.length; f++) {
                        for (prop in a.wishlistProductJson.products[f]) {
                            if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop)
                                for (var g = 0; g < a.wishlistProductJson.products[f][prop].length; g++) {
                                    e = !1;
                                    for (var h = !1, i = 0; i < a.wishlistProductJson.products[f][prop][g].skuSetArr.length; i++)
                                        if (a.wishlistProductJson.products[f][prop][g].skuSetArr[i].toLowerCase() == a.wishListCollection.wishlist[d].skuCode.toLowerCase() && 0 == $("#" + prop).length) {
                                            e = !0, h = a.wishListCollection.wishlist[d];
                                            break
                                        }
                                    if (e) {
                                        var j = p(a.wishlistProductJson.products[f], a.wishlistProductJson.products[f][prop][g], prop, h);
                                        $(".wishlist-wrapper .wishlist-product-group, .view-wishlist-wrapper .wishlist-product-group").append(j), c || (j.find(".range-product").addClass("selected-range-product"), c = !0), j.find(".wishlist-details").append($('<select class="wishListQtylist visuallyHidden"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>'));
                                        var k = "0" == h.quantity || 0 == h.quantity ? "1" : h.quantity;
                                        j.find(".wishlist-details .wishListQtylist option[value=" + k + "]").attr("selected", "selected"), j.find(".wish-item-qty").attr("data-quantity", k), j.find(".wish-item-qty").text("Quantity: " + k), j.find(".sale-price").length > 0 && j.find(".price").addClass("strike-through");
                                        break
                                    }
                                }
                            if (e) break
                        }
                        if (e) break
                    }
                b ? ($(".wishlist-delete-btn, .slash-seperator").hide(), $(".wishListQtylist").removeClass("visuallyHidden")) : ($(".wishlist-options-wrapper").before(rangeModule.getRangeBuyOffTemplate()), r(), $($(".product-label")[1]).before($('<div class="grid-100 tablet-grid-100 mobile-grid-100 wishlist-update-message visuallyHidden grid-parent" style="display: block;"><span class="wishlist-message"></span></div>')), rangeModule.setBaseBuyOffVars(), rangeModule.addRangeListeners(), rangeModule.initialiseBuyOff())
            },
            m = function(b) {
                for (var c = 0; c < a.wishListCollection.wishlist.length; c++)
                    if (a.wishListCollection.wishlist[c].skuCode.toLowerCase() == b.attr("sku").toLowerCase()) {
                        var d = a.wishListCollection.wishlist[c].quantity = b.find(".wishListQtylist option:selected").val(),
                            e = a.wishListCollection.wishlist[c].skuCode = b.find(".wishlist-sizes").attr("sku");
                        $.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "/services/tcplservices.asmx/UpdateProductInWishlist",
                            data: JSON.stringify({
                                prodCode: b.find(".range-product").attr("id"),
                                skuCode: b.attr("sku"),
                                newSkuCode: e,
                                quantity: d
                            }),
                            success: function() {}
                        })
                    }
            },
            n = function() {
                var b = tcp_env.user.email;
                i(window.location.origin + "/content/wishlist/view-wishlist.htm?sharedWish=" + b + "&wishTitle=Toast Wishlist"), $(".wishlist-add-all").click(function(a) {
                    a.preventDefault();
                    for (var b = 0, c = $(".wishlist-add-to-bag-btn").length - 1; c >= 0; c--) setTimeout(function() {
                        $($(".wishlist-add-to-bag-btn")[c]).trigger("click"), b += 200
                    }, b)
                }), $(".wishlist-edit-btn").click(function() {
                    var a = $(this);
                    $(".wishlist-product").removeClass("wishlist-item-selected"), a.parent().parent().parent().addClass("wishlist-item-selected"), $(".wishlist-update-message").addClass("visuallyHidden");
                    for (var b = 0, c = $(".wishlist-edit-btn").length - 1; c >= 0; c--)
                        if ($(".wishlist-edit-btn")[c] === this) {
                            b = c;
                            break
                        }
                    var d = 0,
                        e = 4;
                    for (window.innerWidth <= 1024 && window.innerWidth > 767 ? e = 3 : window.innerWidth < 768 && (e = 1); b >= d;)(d += e) >= b + 1 && (d <= $(".wishlist-edit-btn").length ? $($(".wishlist-product")[d - 1]).after($(".buy-off-container")) : $($(".wishlist-product")[$(".wishlist-edit-btn").length - 1]).after($(".buy-off-container")));
                    setTimeout(function() {
                        $($(".wishlist-product")[b]).find(".range-product").trigger("click"), $("body, html").animate({
                            scrollTop: $(".buy-off-container").offset().top
                        }, "250")
                    }, 200);
                    var f = a.parent().parent().find(".wishlist-sizes").attr("sku"),
                        g = a.parent().parent().find(".wishlist-item-colour").text();
                    setTimeout(function() {
                        for (var a = $(".product-sizes .size").length - 1; a >= 0; a--)
                            if ($($(".product-sizes .size")[a]).attr("sku-id") == f) {
                                $(".product-sizes .size").removeClass("size-selected"), $($(".product-sizes .size")[a]).trigger("click", [!0]);
                                break
                            }
                        for (var a = $(".product-swatches .product-swatch").length - 1; a >= 0; a--)
                            if ($($(".product-swatches .product-swatch")[a]).attr("alt") == g) {
                                $($(".product-swatches .product-swatch")[a]).trigger("click", [!0]);
                                break
                            }
                    }, 500);
                    var h = $(this).parent().parent().find(".wish-item-title").text();
                    _gaq.push(["_trackEvent", "Edit", "Click", h])
                }), $(".wishlist-delete-btn").click(function() {
                    for (var b = $(this).parent().parent().parent(), c = b.find(".wishlist-sizes").attr("sku"), d = 0; d < a.wishListCollection.wishlist.length; d++)
                        if (a.wishListCollection.wishlist[d].skuCode.toLowerCase() == c.toLowerCase()) {
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "/services/tcplservices.asmx/RemoveProductFromWishlist",
                                data: JSON.stringify({
                                    prodCode: a.wishListCollection.wishlist[d].prodCode,
                                    skuCode: c
                                }),
                                success: function() {
                                    b.remove(), $(".expanding-wish-sharer").addClass("wish-sharer-closed"), a.wishListCollection.wishlist.splice(d, 1), q(), 0 == $(".wishlist-product").length && $(".wishlist-product-group").html('<p class="empty-wishlist-text">You&#39;ve got nothing on your wishlist. Find things to add to it <a href="/">here</a></p>')
                                }
                            });
                            break
                        }
                    var e = $(this).parent().parent().find(".wish-item-title").text();
                    _gaq.push(["_trackEvent", "Delete", "Click", e])
                }), $(".wishlist-sizes").change(function() {
                    for (var b = $(this).parent().parent().parent(), c = b.attr("prod-key"), d = $(this).attr("sku"), e = 0; e < a.wishlistStockJson.stocklist.length; e++)
                        if (a.wishlistStockJson.stocklist[e].prodId.toLowerCase() == c.toLowerCase())
                            for (var f = 0; f < a.wishlistStockJson.stocklist[e].sizesInStock.length; f++) {
                                var g = a.wishlistStockJson.stocklist[e].sizesInStock[f];
                                g.sku.toLowerCase() == d && b.find(".wishlist-messages").text(o(g))
                            }
                    m(b), $(".expanding-wish-sharer").addClass("wish-sharer-closed")
                }), $(".wishListQtylist").change(function() {
                    var a = $(this).parent().parent().parent();
                    m(a)
                }), $(".share-list-facebook, .share-list-twitter, .share-list-pinterest").popupWindow({
                    height: 350,
                    width: 670,
                    centerBrowser: 1
                })
            },
            o = function(a) {
                return "undefined" == typeof rangeJson ? 0 == a.stlev && "" == a.preOrderAvailable ? "<span>This is currently out of stock in this size</span>" : 0 == a.stlev && "" != a.preOrderAvailable ? "<span>This is expected in our warehouse on " + a.preOrderAvailable + " in this size. You can still order we will send your item out to you as soon as it arrives.</span>" : 0 != a.stlev && a.stlev < 7 ? "<span>We have a limited number of this item left in this size.</span>" : "" : void 0
            },
            p = function(b, f, g, h) {
                var i = "&#163;" === tcp_env.currency_symbol ? " £" : void 0 !== tcp_env.currency_symbol ? tcp_env.currency_symbol : " £",
                    j = f.price;
                if (-1 != f.price.indexOf(",")) {
                    var k = f.price.split(",");
                    j = k[0] + " - " + i + k[k.length - 1]
                } else j = parseFloat(f.price).toFixed(2).replace(".00", "");
                var l = j;
                j = '<span class="price">' + i + j + "</span>";
                var m = "";
                f.price != f.salePrice && (l = parseFloat(f.salePrice).toFixed(2).replace(".00", ""), m = '<span class="sale-price">' + i + l + "</span>");
                var n = "",
                    o = e,
                    p = $("<div />").html(b.description).text();
                (void 0 === p || 0 == p.length) && (p = b.description);
                for (var q = "", r = 0; r < a.wishlistStockJson.stocklist.length; r++)
                    if (a.wishlistStockJson.stocklist[r].prodId.toLowerCase() == f.prodId.toLowerCase()) {
                        for (var s = 0; s < a.wishlistStockJson.stocklist[r].sizesInStock.length; s++) {
                            var t = a.wishlistStockJson.stocklist[r].sizesInStock[s],
                                u = "";
                            if (h.skuCode.toLowerCase() == a.wishlistStockJson.stocklist[r].sizesInStock[s].sku.toLowerCase()) {
                                var v = "";
                                "" != t.preOrderAvailable ? (v = "pre-order", o = d) : 0 == t.stlev && (o = c), n = n + '<label stlev="' + t.stlev + '" class="wishlist-sizes visuallyHidden ' + v + '" sku="' + t.sku + '" value="' + t.value1 + '">' + t.value1 + u + "</label>", q = t.value1;
                                break
                            }
                        }
                        break
                    }
                return $(['<div class="wishlist-product grid-25 tablet-grid-33 mobile-grid-100" sku="' + h.skuCode + '" prod-key="' + f.prodId + '">', '<div class="wishlist-image grid-100 tablet-grid-100 mobile-grid-100">', '<a href="/product/' + f.parentCategory.replace(/ /g, "+").replace(/\//g, "+") + "/" + g + "/" + b.title.replace(/ /g, "+").replace(/\//g, "+") + ".htm?clr=" + f.prodId.slice(0, 5) + "_" + f.colour.replace(/ /g, "").replace(/\//g, "") + '">', '<img src="' + f.upImg.replace("/product/", "/global/") + '" alt="' + b.title + '" title="' + b.title + '" class="grid-image product-image">', "</a>", "</div>", '<div class="wishlist-details-wrapper grid-100 tablet-grid-100 mobile-grid-100">', '<div class="wishlist-details grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<h3 class="wish-item-title">' + b.title + "</h3>", '<p class="price-of-item" price="' + l + '">' + j + " " + m + "</p>", '<h3 class="wishlist-item-colour">' + f.colour + "</h3>", '<h3 class="wishlist-item-size">Size: ' + q + "</h3>", n, '<h3 class="wish-item-qty"></h3>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<div class="wishlist-add-to-bag-btn"><span>' + o + "</span></div>", "</div>", '<div class="wishlist-button-container">', '<span class="wishlist-edit-btn">Edit</span><span class="slash-seperator">/</span><span class="wishlist-delete-btn">Remove</span>', "</div>", '<span class="range-product visuallyHidden" id="' + h.prodCode + '"><img></span>', "</div>", "</div>"].join(""))
            },
            q = function() {
                $(".wishlist-qty").text(a.wishListCollection.wishlist.length)
            },
            r = function() {
                $(".product-button.checkout").before($('<div id="updateItemWishlist" class="grid-100 tablet-grid-100  mobile-grid-100 product-button"><a id="updateItemWishlist" href="#" class="wishlist-update-item">Update Item In Wishlist</a></div>')), $("#updateItemWishlist").click(function(a) {
                    a.preventDefault();
                    var b = $(this),
                        f = $(".wishlist-item-selected"),
                        g = b.parent().parent().find(".size-selected").attr("sku-id"),
                        h = b.parent().parent().find(".qtyList option:selected").val();
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/services/tcplservices.asmx/UpdateProductInWishlist",
                        data: JSON.stringify({
                            prodCode: f.find(".range-product").attr("id"),
                            skuCode: f.attr("sku"),
                            newSkuCode: g,
                            quantity: h
                        }),
                        success: function() {
                            $(".wishlist-update-message").removeClass("visuallyHidden"), $(".wishlist-update-message .wishlist-message").text("This item in your wishlist has been updated with your current selections"), f.find(".wishlist-image img").attr("src", $(".selected-swatch").attr("src").replace(sizeRegex, "/350/")), f.find(".wishlist-item-colour").text($(".buy-off-container .colour-showing").text()), f.find(".wishlist-item-size").text("Size: " + $(".buy-off-container .size-selected").text());
                            var a = $(".buy-off-container .qtyList option:selected").val();
                            (0 == a || "0" == a) && (a = "1"), f.find(".wish-item-qty").text("Quantity: " + a);
                            var b = $(".buy-off-container .size-selected"),
                                g = b.attr("sku-id"),
                                h = "" == b.attr("low-stock") ? 0 : b.attr("low-stock");
                            f.find(".wishlist-sizes").attr({
                                sku: g,
                                stlev: h,
                                value: b.text()
                            });
                            var i = b.hasClass("pre-order");
                            f.find(".wishlist-add-to-bag-btn span").text(0 == h && i ? d : 0 != h || i ? e : c), f.find(".wishlist-sizes").toggleClass("pre-order", i), f.find(".wishlist-sizes").text(b.text()), f.find(".wishListQtylist option:selected").removeAttr("selected");
                            for (var j = f.find(".wishListQtylist option").length - 1; j >= 0; j--)
                                if ($(f.find(".wishListQtylist option")[j]).val() == a) {
                                    $(f.find(".wishListQtylist option")[j]).attr("selected", "selected");
                                    break
                                }
                            f.attr({
                                sku: $(".size-selected").attr("sku-id"),
                                "prod-key": $(".selected-swatch").attr("id")
                            })
                        }
                    });
                    var i = $(".wishlist-item-selected .wish-item-title").html();
                    _gaq.push(["_trackEvent", "Update", "Click", i])
                }), $(".buy-off-container").on("click", ".swatch, .size", function() {
                    $(".wishlist-update-message").addClass("visuallyHidden")
                }), $(".buy-off-container").on("change", ".qtyList", function() {
                    $(".wishlist-update-message").addClass("visuallyHidden")
                })
            },
            s = function() {
                var b = "";
                f || (b = "visuallyHidden"), $(".product-button.checkout").before($('<div class="grid-100 tablet-grid-100 mobile-grid-100 product-button remove-wishlist-item-wrapper ' + b + '"><a href="#" id="deleteFromWishlist" class="delete-from-wishlist">Remove From Wishlist</a></div>')), $("#deleteFromWishlist").click(function(b) {
                    b.preventDefault();
                    for (var c = a.wishListCollection.wishlist.length - 1; c >= 0; c--)
                        if (a.wishListCollection.wishlist[c].prodCode == $("#productId").val() || a.wishListCollection.wishlist[c].prodCode == $(".buy-off-container .product-details").attr("prod-id")) {
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "/services/tcplservices.asmx/RemoveProductFromWishlist",
                                data: JSON.stringify({
                                    prodCode: a.wishListCollection.wishlist[c].prodCode,
                                    skuCode: a.wishListCollection.wishlist[c].skuCode
                                }),
                                success: function(b) {
                                    if (b.d.Success) {
                                        var d = $(".product-details").find(".product-info h1").text() || $(".product-details").find(".product-info h3").text();
                                        $(".product-details").find("#added-to-basket, #addedToBasket").show().html("<span class='message-text'>" + d + " has been removed from your wishlist.</span>"), $("#deleteFromWishlist").parent().addClass("visuallyHidden"), $("#addToWishlist").parent().removeClass("visuallyHidden"), a.wishListCollection.wishlist.splice(c, 1), q(), void 0 !== d && _gaq.push(["_trackEvent", "Delete from Wishlist", "Click", d])
                                    } else {
                                        var e = "/login.htm?returnUrl=";
                                        e += document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E"), window.location.href = e
                                    }
                                }
                            });
                            break
                        }
                })
            },
            t = function() {
                var b = "";
                f && (b = "visuallyHidden"), $(".product-button.checkout").before($('<div class="grid-100 tablet-grid-100 mobile-grid-100 product-button add-wishlist-item-wrapper ' + b + '"><a href="#" id="addToWishlist" class="add-to-wishlist">Add To Wishlist</a></div>')), $("#addToWishlist").click(function(b) {
                    b.preventDefault(), document.body.style.cursor = "wait";
                    var c = {
                        prodCode: "",
                        quantity: "",
                        skuCode: ""
                    };
                    if (0 == $(".buy-off-container").length) {
                        for (var d = 0, e = 0; e < $(".ctab").length; e++) $($(".ctab")[e]).is(":visible") && (d = parseInt($($(".ctab")[e]).find(".qtylist").val()));
                        c = {
                            prodCode: $("#productId").val(),
                            quantity: d,
                            skuCode: $(".size-selected").attr("data-sku")
                        }
                    } else c = {
                        prodCode: $(".product-details").attr("prod-id"),
                        quantity: parseInt($(".qtyList").val()),
                        skuCode: $(".size-selected").attr("sku-id")
                    };
                    var f = _.find(a.wishListCollection.wishlist, function(a) {
                        return a.skuCode.toLowerCase() == c.skuCode.toLowerCase()
                    });
                    void 0 != f ? f.quantity = c.quantity : a.wishListCollection.wishlist.push(c), $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/services/tcplservices.asmx/AddProductToWishlist",
                        data: JSON.stringify({
                            prodCode: c.prodCode,
                            skuCode: c.skuCode,
                            quantity: c.quantity
                        }),
                        success: function(a) {
                            if (document.body.style.cursor = "default", a.d.Success) {
                                var b = $(".product-details").find(".product-info h1").text() || $(".product-details").find(".product-info h3").text();
                                b = b.toUpperCase(), q(), $(".product-details").find("#added-to-basket, #addedToBasket").show().html("<span class='message-text'>" + b + " has been added to your wishlist.</span>"), $("#deleteFromWishlist").parent().removeClass("visuallyHidden"), $("#addToWishlist").parent().addClass("visuallyHidden"), void 0 !== b && _gaq.push(["_trackEvent", "Add to Wishlist (Signed In)", "Click", b])
                            } else {
                                var b = $(".product-details").find(".product-info h1").text() || $(".product-details").find(".product-info h3").text(),
                                    c = "/login.htm?returnUrl=";
                                c = c + document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E") + "?addProdToWishList=true%26selectedProd=" + $(".size-selected").attr("sku-id"), window.location.href = c, void 0 !== b && _gaq.push(["_trackEvent", "Add to Wishlist (Not Signed In)", "Click", b])
                            }
                        }
                    })
                })
            };
        a.updateAddRemoveWishlistButton = function() {
            u(), $(".add-wishlist-item-wrapper").toggleClass("visuallyHidden", f), $(".remove-wishlist-item-wrapper").toggleClass("visuallyHidden", !f)
        };
        var u = function() {
            f = !1;
            var b = $("#productId").val();
            void 0 === b && (b = $(".buy-off-container .product-details").attr("prod-id")), void 0 != _.find(a.wishListCollection.wishlist, function(a) {
                return a.prodCode == b
            }) && (f = !0)
        };
        return $(document).ready(function() {
            $(".login-item").before($('<li class="wishlist-btn"><a href="/content/wishlist/wishlist.htm">wishlist (<span class="wishlist-qty">0</span>)</a></li>')), $(".view-wishlist-wrapper").length > 0 && (b = !0);
            var c = [];
            b ? (c = getParameterByName("sharedWish"), $(".view-wishlist-wrapper").prepend($('<div class="view-wishlist-title"><h2>' + getParameterByName("wishTitle") + "</h2></div>")), $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/services/tcplservices.asmx/GetWishlistForUser",
                data: JSON.stringify({
                    email: c
                }),
                success: function(b) {
                    if (a.wishListCollection.wishlist = b.d.wishlist, a.wishListCollection.wishlist.length > 0) {
                        skuListObject = {
                            skuList: []
                        };
                        for (var c = 0; c < a.wishListCollection.wishlist.length; c++) skuListObject.skuList.push(a.wishListCollection.wishlist[c].prodCode);
                        k(JSON.stringify(skuListObject))
                    }
                }
            })) : $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: "/services/tcplservices.asmx/GetWishlist",
                data: null,
                success: function(b) {
                    if (b.d.wishlist.length > 0) {
                        if (a.wishListCollection.wishlist = b.d.wishlist, q(), $(".wishlist-wrapper").length > 0)
                            if (a.wishListCollection.wishlist.length > 0) {
                                skuListObject = {
                                    skuList: []
                                };
                                for (var c = 0; c < a.wishListCollection.wishlist.length; c++) skuListObject.skuList.push(a.wishListCollection.wishlist[c].prodCode);
                                k(JSON.stringify(skuListObject))
                            } else $(".share-my-list").hide()
                    } else $(".wishlist-wrapper").length > 0 && ($(".wishlist-product-group").html('<p class="empty-wishlist-text">You&#39;ve got nothing on your wishlist. Find things to add to it <a href="/">here</a></p>'), $(".expanding-wish-sharer").hide());
                    if ($(".product-details").length > 0) {
                        u(), t(), s();
                        var d = getParameterByName("addProdToWishList");
                        setTimeout(function() {
                            d && $("#addToWishlist").trigger("click")
                        }, 1e3)
                    }
                }
            }), $(".wishlist-wrapper").length > 0 && "" == tcp_env.user.email && (window.location.href = "/login.htm?returnUrl=%2fcontent/wishlist/wishlist.htm"), $(".share-list-facebook").click(function() {
                _gaq.push(["_trackEvent", "Social Sharing", "Click - Wishlist", "Facebook"])
            }), $(".share-list-twitter").click(function() {
                _gaq.push(["_trackEvent", "Social Sharing", "Click - Wishlist", "Twitter"])
            }), $(".share-list-pinterest").click(function() {
                _gaq.push(["_trackEvent", "Social Sharing", "Click - Wishlist", "Pinterest"])
            }), $("body").on("click", ".url-to-copy a", function() {
                _gaq.push(["_trackEvent", "Social Sharing", "Click - Wishlist", "Email"])
            })
        }), a
    }(),
    reviewDisplayModule = function() {
        var b = 0,
            c = 6,
            d = !1,
            e = function(a) {
                var c = new Date(a.LastModeratedTime),
                    d = new Date(a.SubmissionTime),
                    e = 864e5,
                    f = (Math.round(Math.abs((d.getTime() - (new Date).getTime()) / e)), Math.round(((new Date).getTime() - d.getTime()) / 1e3 / 60 / 60)),
                    g = Math.ceil(a.Rating / 5 * 100);
                return reviewNode = $(['<li class="review-content-top-review review-content-review" itemprop="review" itemscope="" itemtype="http://schema.org/Review">', '<meta itemprop="itemReviewed" content="' + $(".product-info h1").text() + '">', '<div class="review-content-item">', '<div class="review-content-data-summary">', '<div class="review-content-header-meta">', '<span class="review-content-rating review-rating-ratio" itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating" tabindex="0">', '<meta itemprop="ratingValue" content="' + a.Rating + '">', '<meta itemprop="bestRating" content="' + b + '">', '<span class="review-rating-stars-container">', '<abbr title="' + a.Rating + '" class="review-rating review-rating-stars review-rating-stars-off visuallyHidden" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</abbr>', '<abbr title="' + a.Rating + '" style="width:' + g + '%;" class="review-rating-max review-rating-stars review-rating-stars-on" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</abbr>', '<span class="review-off-screen visuallyHidden">' + a.Rating + " out of 5 stars.</span>", "</span>", "</span>", '<div class="review-content-meta-wrapper">', '<div class="review-content-meta" role="presentation">', '<div class="review-content-reference-data review-content-author-name">', '<h3 class="review-author font-weight-300 medFont" itemprop="author">' + a.UserNickname + "</h3>", '<div class="review-content-datetime" role="presentation">', '<meta itemprop="dateCreated" content="' + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + '">', '<meta itemprop="datePublished" content="' + c.getDate() + "/" + c.getMonth() + "/" + c.getFullYear() + '">', f > 24 ? '<span class="review-content-datetime-stamp">' + d.toDateString() + "</span>" : '<span class="review-content-datetime-stamp">' + f + " hours ago &nbsp;</span>", "</div>", "</div>", "</div>", "</div>", "</div>", '<div class="review-content-title-container">', !1 === a.IsRatingsOnly ? '<h4 class="review-content-title font-weight-300 medFont" itemprop="headline">' + a.Title + "</h4>" : "", "</div>", "</div>", '<div class="review-content-summary-body" itemprop="reviewBody">', '<div class="review-content-summary-body-text">', !1 === a.IsRatingsOnly ? "<p>" + a.ReviewText + "</p>" : "", "</div>", "</div>", '<div class="review-secondary-ratings" role="presentation">', '<dl class="review-content-secondary-ratings" role="presentation">', "</dl>", "</div>", "</div>", "<div id='reviewId-" + a.Id + "'></div></li>"].join(""))
            },
            f = function(a, b) {
                if ("boolean" != typeof a && null !== a) var c = $(['<dd class="review-content-slider">', '<span class="review-content-slider-container">', '<ul class="review-content-slider-bar" role="presentation">', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', "</ul>", "</span>", '<span class="review-off-screen visuallyHidden">Rating of 1 means</span>', '<span class="review-content-slider-sublabel1">' + a.MinLabel + "</span>", '<span class="review-off-screen visuallyHidden">Rating of 5 means</span>', '<span class="review-content-slider-sublabel2">' + a.MaxLabel + "</span>", '<span class="review-off-screen visuallyHidden">' + a.Value + " out of 5</span>", "</dd>"].join(""));
                else {
                    a = {
                        Label: "Would you recommend this product to a friend?",
                        Value: "",
                        ValueLabel: !0 === a ? "Yes" : "No"
                    };
                    var c = $()
                }
                var e = $('<dt class="review-content-secondary-ratings-label medFont">' + a.Label + ': <span class="secondary-figure">' + a.Value + "</span> - " + a.ValueLabel + "</dt>");
                b.find(".review-content-secondary-ratings").append(e), b.find(".review-content-secondary-ratings").append(c), $(c.find(".review-content-slider-segment")[a.Value - 1]).addClass("selected")
            },
            g = function() {
                if ("undefined" != typeof currentProd) return currentProd.ProductStyleCode;
                var a = $("#productId").val();
                if ($(".buy-off-container ").length > 0)
                    if (-1 === $(".selected-range-product").attr("id").indexOf("Key")) a = $(".selected-range-product").attr("id");
                    else {
                        var b = $(".selected-range-product").attr("id").indexOf("Key");
                        a = $(".selected-range-product").attr("id").slice(0, b)
                    }
                return a
            },
            h = function(a, d) {
                j(), $(".read-more-reviews").remove(), $(".product-reviews-bottom").remove(), $(".review-content-review").remove();
                var h = g(),
                    i = "/login.htm?returnUrl=";
                i += document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E"), $(".buy-off-container ").length > 0 && (tcp_env.user.email.length > 0 ? $("#add-review").attr("href", "http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=" + h) : $("#add-review").attr("href", i));
                var a = null == a || void 0 === a || a.length < 1 ? "SubmissionTime:desc" : a;
                $.ajax({
                    url: "//api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=9qho0pl4cxnt05nqnt3y6yzk6&Filter=ProductId:" + h + "&Sort=" + a + "&Limit=50",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    success: function(a) {
                        if (!a.HasErrors)
                            if (0 === a.TotalResults) $(".noReviews").removeClass("visuallyHidden"), $("#review-section header h2").text("Reviews (0)"), $("#reviewContainer").addClass("visuallyHidden"), $(".noReviews").length < 1 && ($("#reviewContainer").before('<p class="noReviews">There are currently no reviews for this product.</p>'), tcp_env.user.email.length > 0 ? ($("#reviewContainer").before('<p class="noReviews"><a href="http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=' + h + '" target="_blank">Be the first to review this product.</a></p>'), $("#review-section header h2").after($('<a href="http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=' + h + '" target="_blank"><span class="first-to-review-summary noReviews">be first to review this</span></a>'))) : ($("#reviewContainer").before('<p class="noReviews"><a href="' + i + '">Be the first to review this product.</a></p>'), $("#review-section header h2").after($('<a href="' + i + '"><span class="first-to-review-summary noReviews">Be first to review this</span></a>')))), $("#reviewContainer").removeClass("visuallyHidden").addClass("no-reviews"), tcp_env.user.email.length > 0 ? ($(".noReviews a, #add-review").attr("href", "http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=" + h), $(".first-to-review-summary").parent().attr("href", "http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=" + h)) : $("#reviewContainer .review-dropdown").hide(), $("#reviewSummaryContainer").hide();
                            else {
                                var g = "",
                                    j = "";
                                $(".noReviews").addClass("visuallyHidden"), $("#reviewContainer").removeClass("visuallyHidden no-reviews"), $(".buy-off-container").length > 0 ? (g = $("#mainContent .buy-off-container"), j = "grid-60 suffix-5 tablet-grid-60") : (g = $("#mainContent > .product-details"), j = "prefix-10 grid-50 suffix-5 tablet-grid-50 tablet-prefix-5"), g.append('<div class="product-reviews-bottom visuallyHidden ' + j + ' mobile-grid-100 float-left grid-parent"></div>');
                                for (var k = 0, l = 0; l < a.Results.length; l++) k += a.Results[l].Rating, a.Results[l].Rating > b && (b = a.Results[l].Rating);
                                var m = 0 == a.TotalResults ? 1 : a.TotalResults,
                                    n = (k / m).toFixed(1),
                                    o = Math.ceil(n / 5 * 100);
                                $("#review-section header h2").text(a.TotalResults > 1 ? "Reviews (" + a.TotalResults + ")" : "Review (" + a.TotalResults + ")"), $("#reviewSummaryContainer").show();
                                var p = $(['<dl class="review-stars-container" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating" role="presentation">', '<meta itemprop="itemReviewed" content="' + $(".product-info h1").text() + '">', '<dd class="review-rating-ratio-count visuallyHidden" role="presentation">', '<span itemprop="reviewCount">Reviews ' + a.TotalResults + "</span>", "</dd>", '<dd class="review-rating-ratio" role="presentation">', '<span class="review-rating-stars-on review-rating-stars" aria-hidden="true"><span style="width: ' + o + '%;">&#9733;&#9733;&#9733;&#9733;&#9733;</span></span>', '<meta itemprop="bestRating" content="' + b + '">', '<span class="review-off-screen visuallyHidden">' + n + " out of 5 stars. Read reviews.</span>", "</dd>", '<dd class="review-rating-ratio-number" role="presentation" aria-hidden="true">', '<span class="review-rating">', '<span itemprop="ratingValue">' + n + " / 5.0</span>", "</span>", "</dd>", "</dl>"].join(""));
                                d || $("#reviewSummaryContainer").html(p), $("#reviewContainer ul.review-list").html(""), $(".product-reviews-bottom").html("");
                                for (var l = 0; l < a.Results.length; l++) {
                                    $newReview = e(a.Results[l]), c > l ? $("#reviewContainer ul.review-list").append($newReview) : $(".product-reviews-bottom").append($newReview);
                                    for (var q = 0; q < a.Results[l].SecondaryRatingsOrder.length; q++) null !== a.Results[l].SecondaryRatings[a.Results[l].SecondaryRatingsOrder[q]].ValueLabel && f(a.Results[l].SecondaryRatings[a.Results[l].SecondaryRatingsOrder[q]], $newReview);
                                    f(a.Results[l].IsRecommended, $newReview)
                                }
                                a.TotalResults > c && ($("#reviewContainer").append('<a href="#" class="read-more-reviews"><span>Read more reviews</span></a><br><br><br>'), $(".read-more-reviews").click(function(a) {
                                    a.preventDefault(), $(".product-reviews-bottom").removeClass("visuallyHidden"), $("html, body").animate({
                                        scrollTop: $(".product-reviews-bottom").offset().top - $(".main-header").height()
                                    }, 500);
                                    var b = $(".product-info ").find("h1").html() || $(".product-info ").find("h3").html();
                                    b = $.trim(b), _gaq.push(["_trackEvent", "Read More Reviews", "Click", b])
                                })), d && setTimeout(function() {
                                    $(".product-accordion").accordionA("toggle", "#review-section", !0)
                                }, 500)
                            }
                        $.each(a.Results, function(a, b) {
                            b.ClientResponses.length > 0 && $("#reviewId-" + b.Id).html("<img src='//d2xfispw8k8nwr.cloudfront.net/images/review_pointer.gif' alt='Review response' style='vertical-align:bottom'/><div style='background-color:#e9e9e9; padding:16px; margin-bottom:16px'>" + b.ClientResponses[0].Response + "</div>")
                        })
                    }
                })
            },
            i = function() {
                var a = [],
                    b = "";
                if ("undefined" != typeof productJson) {
                    for (var c = 0; c < productJson.products.length; c++)
                        for (prop in window.productJson.products[c]) a.push(prop), c < productJson.products.length - 1 ? b = b + prop + "," : b += prop + ",";
                    $.ajax({
                        url: "//api.bazaarvoice.com/data/statistics.json?apiversion=5.4&passkey=9qho0pl4cxnt05nqnt3y6yzk6&Filter=ProductId:" + b + "&Limit:100&stats=NativeReviews",
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "jsonp",
                        success: function(a) {
                            if (!a.HasErrors)
                                for (var b = ["Key1", "Key2", "Key3", "Key4", "Key5", "Key6", "Key7", "Key8"], c = a.Results.length - 1; c >= 0; c--)
                                    if (0 !== a.Results[c].ProductStatistics.NativeReviewStatistics.TotalReviewCount)
                                        for (var d = a.Results[c].ProductStatistics.ProductId, e = 0; e < b.length; e++) {
                                            var f = $("#" + d.toUpperCase());
                                            if (!(f.length > 0)) break;
                                            var g = null === a.Results[c].ProductStatistics.NativeReviewStatistics.AverageOverallRating ? 0 : a.Results[c].ProductStatistics.NativeReviewStatistics.AverageOverallRating;
                                            returnedID = f.selector
                                            targetID = String(returnedID).substring(0, 6)
                                            $("[id="+targetID.substr(1)+"] .productReviewStars").html('<span class="review-rating-stars-on review-rating-stars grid-100 tablet-grid-100 mobile-grid-100 grid-parent"><span class="stars-maintain-width"><span class="float-left"><span class="stars-block">&#9733;&#9733;&#9733;&#9733;&#9733;</span></span><span class="number-of-reviews"></span></span></span>');
                                            var h = g / 5 * 100;
                                            $("[id="+targetID.substr(1)+"] .stars-block").css("width", h + "%")
                                            $("[id="+targetID.substr(1)+"] .number-of-reviews").text("(" + a.Results[c].ProductStatistics.NativeReviewStatistics.TotalReviewCount + ")")
                                        }
                        }
                    })
                }
            },
            j = function() {
                $(".product-accordion").length > 0 && $("#review-section").length < 1 && (void 0 === $("#productId").val() ? $(".buy-off-container .product-details").attr("prod-id") : $("#productId").val(), $(".product-accordion").append($(['<section id="review-section" aria-expanded="false">', '<header><h2>Reviews</h2><div id="reviewSummaryContainer"></div></header>', '<div class="content">', '<div id="reviewContainer">', function() {
                    if (tcp_env.user.email.length > 0) return ['<a id="add-review" href="http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=' + g() + '" target="_blank">', '<span class="grid-40 suffix-10 tablet-grid-40 tablet-suffix-10 mobile-grid-40 mobile-suffix-10 grid-parent">Add Review</span>', "</a>", '<div class="review-dropdown grid-40 prefix-10 tablet-grid-40 tablet-prefix-10 mobile-grid-40 mobile-prefix-10">'].join("");
                    var a = "/login.htm?returnUrl=";
                    return a += document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E"), ['<a id="add-review" href="' + a + '">', '<span class="grid-40 suffix-10 tablet-grid-40 tablet-suffix-10 mobile-grid-40 mobile-suffix-10 grid-parent">Add Review</span>', "</a>", '<div class="review-dropdown grid-40 prefix-10 tablet-grid-40 tablet-prefix-10 mobile-grid-40 mobile-prefix-10">'].join("")
                }(), '<div class="review-dropdown-target">', '<button type="button" role="menuitem">', '<span class="review-dropdown-title">Sort</span>', '<span class="review-off-screen visuallyHidden">Menu, press enter to show options</span>', "</button>", "</div>", '<label for="review-dropdown-select-1" class="review-off-screen visuallyHidden">Sort by</label>', '<div class="review-dropdown-select visuallyHidden">', '<ul class="review-dropdown-active">', '<li class="review-dropdown-item review-dropdown-item-selected" data-review-sort-value="positive" role="menuitem">Highest to Lowest Rating</li>', '<li class="review-dropdown-item" data-review-sort-value="negative" role="menuitem">Lowest to Highest Rating</li>', '<li class="review-dropdown-item" data-review-sort-value="mostRecent" role="menuitem">Most Recent</li>', "</ul>", "</div>", "</div>", '<ul class="review-list"></ul>', "</div>", "</div>", "</section>"].join(""))), $("#mainContent").on("click", "#add-review", function() {
                    var a = $(".product-details .product-info h1").text() || $(".product-details .product-info h3").text() || $(".wishlist-item-selected .wish-item-title").text();
                    _gaq.push(["_trackEvent", "Add Review", "Click", a])
                }), d || ($(".product-page").length < 1 && $(".product-accordion").accordionA(), $(".product-accordion").on("click", "section header", function() {
                    var a = $(this).text().split("(");
                    a = $.trim(a[0]), a.match(/&/g) && (a = a.replace("&", "and")), a.match(/Review/g) && (a = "Reviews"), ($(".product-page").length > 0 && a.match(/Reviews/g) || $(".product-page").length < 1) && _gaq.push("true" == $(this).parent().attr("aria-expanded") ? ["_trackEvent", a, "Click", "Close"] : ["_trackEvent", a, "Click", "Open"])
                })), d = !0, $(".review-dropdown-target button").mousedown(function(a) {
                    a.preventDefault()
                }), Modernizr.touch ? $(".review-dropdown-target button").click(function() {
                    $(".review-dropdown-select").toggleClass("visuallyHidden")
                }) : $(".review-dropdown-target button").hover(function() {
                    $(".review-dropdown-select").removeClass("visuallyHidden")
                }), $(".review-dropdown-select").hover(function() {}, function() {
                    $(".review-dropdown-select").addClass("visuallyHidden")
                }), $("#review-section").hover(function() {}, function() {
                    $(".review-dropdown-select").addClass("visuallyHidden")
                }), $("body").on("click", ".review-dropdown-item", function() {
                    switch ($(".product-accordion").accordionA("toggle", "#review-section", !1), $(this).data("review-sort-value")) {
                        case "mostRecent":
                            setTimeout(function() {
                                h("SubmissionTime:desc", !0), $(".review-dropdown-title").html("Most Recent")
                            }, 250);
                            break;
                        case "negative":
                            setTimeout(function() {
                                h("Rating:asc", !0), $(".review-dropdown-title").html("Lowest to Highest Rating")
                            }, 250);
                            break;
                        case "positive":
                            setTimeout(function() {
                                h("Rating:desc", !0), $(".review-dropdown-title").html("Highest to Lowest Rating")
                            }, 250)
                    }
                    $(".review-dropdown-select").addClass("visuallyHidden"), sortOrder = $(this).text(), sortOrder = $.trim(sortOrder), _gaq.push(["_trackEvent", "Review Sort", "Click", sortOrder])
                }))
            };
        return $(document).ready(function() {
            $(".lookbook-buy-off").length < 1 && (void 0 !== $(".selected-range-product").attr("id") || void 0 !== $("#productId").val()) ? h() : $(".category-product-items").length > 0 && i()
        }), {
            callReviews: h,
            callCategoryReviews: i
        }
    }();
$(document).ready(function() {
    $(".buy-off-container #ctl00_globalMainContent_btnCheckout").attr("href", "/basket.htm"), flagSwap(), "undefined" != typeof toast_config && !0 === toast_config.in_sale ? $(".standard-pp").show() : $(".free-pp-and-returns").show(), showMeTheMoney(), "" === $.cookie("preset_filters") && $.removeCookie("preset_filters");
    var a = getParameterByName("presetFilters").split("~");
    a.length > 0 && "" != a[0] && ($.removeCookie("preset_filters"), $.cookie("preset_filters", "size~" + a[0].slice(1, 3), {
        path: "/"
    })), getParameterByName("mediacode")
}), setTimeout(function() {
    var a = document.createElement("script"),
        b = document.getElementsByTagName("script")[0];
    a.src = document.location.protocol + "//dnn506yrbagrg.cloudfront.net/pages/scripts/0014/1479.js?" + Math.floor((new Date).getTime() / 36e5), a.async = !0, a.type = "text/javascript", b.parentNode.insertBefore(a, b)
}, 1);