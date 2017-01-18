function flagSwap() {
    str = $(".menu__title").text(), rg = /[a-zA-Z]+/g, el = $("#footer-country-select .has-flag-uk").first(), el.html(el.html().replace(/GBP/gi, str.match(rg)[0])), currentFlag = $(".has-flag").attr("class").split(" ").pop(), $("#footerCountryFlag").removeClass("has-flag-uk"), $("#footerCountryFlag").addClass(currentFlag)
}

function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        i = t.exec(location.search);
    return null == i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
}! function(e, t) {
    function i(t, i) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && s(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var n = 0,
        a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
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
    }), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var s, n, a = e(this[0]); a.length && a[0] !== document;) {
                    if (s = a.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(a.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && i(t, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function n(t, i, s, n) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            o = s.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + s] = function(i) {
            return i === t ? r["inner" + s].call(this) : this.each(function() {
                e(this).css(o, n(this, i) + "px")
            })
        }, e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? r["outer" + s].call(this, t) : this.each(function() {
                e(this).css(o, n(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, s) {
                var n, a = e.ui[t].prototype;
                for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
            },
            call: function(e, t, i) {
                var s, n = e.plugins[t];
                if (n && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; n.length > s; s++) e.options[n[s][0]] && n[s][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
        }
    })
}(jQuery),
function(e, t) {
    var i = 0,
        s = Array.prototype.slice,
        n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (a) {}
        n(t)
    }, e.widget = function(i, s, n) {
        var a, o, r, l, c = {},
            d = i.split(".")[0];
        i = i.split(".")[1], a = d + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return !!e.data(t, a)
        }, e[d] = e[d] || {}, o = e[d][i], r = e[d][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new r(e, i)
        }, e.extend(r, o, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), l = new s, l.options = e.widget.extend({}, l.options), e.each(n, function(i, n) {
            return e.isFunction(n) ? (c[i] = function() {
                var e = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    t = function(e) {
                        return s.prototype[i].apply(this, e)
                    };
                return function() {
                    var i, s = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (c[i] = n, t)
        }), r.prototype = e.widget.extend(l, {
            widgetEventPrefix: o ? l.widgetEventPrefix : i
        }, c, {
            constructor: r,
            namespace: d,
            widgetName: i,
            widgetFullName: a
        }), o ? (e.each(o._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete o._childConstructors) : s._childConstructors.push(r), e.widget.bridge(i, r)
    }, e.widget.extend = function(i) {
        for (var n, a, o = s.call(arguments, 1), r = 0, l = o.length; l > r; r++)
            for (n in o[r]) a = o[r][n], o[r].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(o) {
            var r = "string" == typeof o,
                l = s.call(arguments, 1),
                c = this;
            return o = !r && l.length ? e.widget.extend.apply(null, [o].concat(l)) : o, this.each(r ? function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[o]) && "_" !== o.charAt(0) ? (s = n[o].apply(n, l), s !== n && s !== t ? (c = s && s.jquery ? c.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + o + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + o + "'")
            } : function() {
                var t = e.data(this, a);
                t ? t.option(o || {})._init() : e.data(this, a, new n(o, this))
            }), c
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, a, o, r = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = r[i] = e.widget.extend({}, this.options[i]), o = 0; n.length - 1 > o; o++) a[n[o]] = a[n[o]] || {}, a = a[n[o]];
                    if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t) return this.options[i] === t ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var a, o = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, r) {
                function l() {
                    return i || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : t
                }
                "string" != typeof r && (l.guid = r.guid = r.guid || l.guid || e.guid++);
                var c = n.match(/^(\w+)\s*(.*)$/),
                    d = c[1] + o.eventNamespace,
                    u = c[2];
                u ? a.delegate(u, d, l) : s.bind(d, l)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
}(jQuery),
function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
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
function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
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
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var i = this,
                s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
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
            var t, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], void(s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, n, a, o = this.options,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = t.pageX,
                c = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, c = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
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
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var s = e(this).data("ui-draggable"),
                n = s.options,
                a = e.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], e(n.connectToSortable).each(function() {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, a))
            })
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable"),
                n = e.extend({}, i, {
                    item: s.element
                });
            e.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
            })
        },
        drag: function(t, i) {
            var s = e(this).data("ui-draggable"),
                n = this;
            e.each(s.sortables, function() {
                var a = !1,
                    o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var s = e(i.helper),
                n = e(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var i = e(this).data("ui-draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
                i = t.options;
            t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = e(this),
                    s = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(t, i) {
            var s, n, a, o, r, l, c, d, u, h, p = e(this).data("ui-draggable"),
                f = p.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + p.helperProportions.width,
                b = i.offset.top,
                y = b + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--) r = p.snapElements[u].left, l = r + p.snapElements[u].width, c = p.snapElements[u].top, d = c + p.snapElements[u].height, r - g > v || m > l + g || c - g > y || b > d + g || !e.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(c - y), n = g >= Math.abs(d - b), a = g >= Math.abs(r - v), o = g >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {
                top: c - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r - p.helperProportions.width
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), h = s || n || a || o, "outer" !== f.snapMode && (s = g >= Math.abs(c - b), n = g >= Math.abs(d - y), a = g >= Math.abs(r - m), o = g >= Math.abs(l - v), s && (i.position.top = p._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: d - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = s || n || a || o || h)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, i = this.data("ui-draggable").options,
                s = e.makeArray(e(i.stack)).sort(function(t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(i) {
                e(this).css("zIndex", t + i)
            }), this.css("zIndex", t + s.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var s = e(i.helper),
                n = e(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery),
function(e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }
    e.widget("ui.droppable", {
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
            var t = this.options,
                i = t.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            "accept" === t && (this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var s = i || e.ui.ddmanager.current,
                n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (n = !0, !1) : void 0
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function(e, i, s) {
        if (!i.offset) return !1;
        var n, a, o = (e.positionAbs || e.position.absolute).left,
            r = o + e.helperProportions.width,
            l = (e.positionAbs || e.position.absolute).top,
            c = l + e.helperProportions.height,
            d = i.offset.left,
            u = d + i.proportions.width,
            h = i.offset.top,
            p = h + i.proportions.height;
        switch (s) {
            case "fit":
                return o >= d && u >= r && l >= h && p >= c;
            case "intersect":
                return o + e.helperProportions.width / 2 > d && u > r - e.helperProportions.width / 2 && l + e.helperProportions.height / 2 > h && p > c - e.helperProportions.height / 2;
            case "pointer":
                return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, a = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(a, h, i.proportions.height) && t(n, d, i.proportions.width);
            case "touch":
                return (l >= h && p >= l || c >= h && p >= c || h > l && c > p) && (o >= d && u >= o || r >= d && u >= r || d > o && r > u);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (s = 0; a.length > s; s++)
                if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === a[s].element[0]) {
                            a[s].proportions.height = 0;
                            continue e
                        }
                    a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions = {
                        width: a[s].element[0].offsetWidth,
                        height: a[s].element[0].offsetHeight
                    })
                }
        },
        drop: function(t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance),
                        r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() {
                        return e.data(this, "ui-droppable").options.scope === n
                    }), a.length && (s = e.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}(jQuery),
function(e) {
    function t(e) {
        return parseInt(e, 10) || 0
    }

    function i(e) {
        return !isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {
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
            var t, i, s, n, a, o = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
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
                }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                    zIndex: r.zIndex
                }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var i, s, n = !1;
            for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(i) {
            var s, n, a, o = this.options,
                r = this.element.position(),
                l = this.element;
            return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalPosition = {
                left: s,
                top: n
            }, this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), l.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function(t) {
            var i, s = this.helper,
                n = {},
                a = this.originalMousePosition,
                o = this.axis,
                r = this.position.top,
                l = this.position.left,
                c = this.size.width,
                d = this.size.height,
                u = t.pageX - a.left || 0,
                h = t.pageY - a.top || 0,
                p = this._change[o];
            return p ? (i = p.apply(this, [t, u, h]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== l && (n.left = this.position.left + "px"), this.size.width !== c && (n.width = this.size.width + "px"), this.size.height !== d && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, s, n, a, o, r, l, c = this.options,
                d = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : d.sizeDiff.height, a = s ? 0 : d.sizeDiff.width, o = {
                width: d.helper.width() - a,
                height: d.helper.height() - n
            }, r = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null, l = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null, c.animate || this.element.css(e.extend(o, {
                top: l,
                left: r
            })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(e) {
            var t, s, n, a, o, r = this.options;
            o = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
                s = this.size,
                n = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
                s = this.axis,
                n = i(e.width) && t.maxWidth && t.maxWidth < e.width,
                a = i(e.height) && t.maxHeight && t.maxHeight < e.height,
                o = i(e.width) && t.minWidth && t.minWidth > e.width,
                r = i(e.height) && t.minHeight && t.minHeight > e.height,
                l = this.originalPosition.left + this.originalSize.width,
                c = this.position.top + this.size.height,
                d = /sw|nw|w/.test(s),
                u = /nw|ne|n/.test(s);
            return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && d && (e.left = l - t.minWidth), n && d && (e.left = l - t.maxWidth), r && u && (e.top = c - t.minHeight), a && u && (e.top = c - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, n, a = this.helper || this.element;
                for (e = 0; this._proportionallyResizeElements.length > e; e++) {
                    if (n = this._proportionallyResizeElements[e], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    n.css({
                        height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            sw: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            },
            ne: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            nw: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
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
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).data("ui-resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = a ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - r,
                    height: i.size.height - o
                },
                c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                d = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(l, d && c ? {
                top: d,
                left: c
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, n, a, o, r, l, c = e(this).data("ui-resizable"),
                d = c.options,
                u = c.element,
                h = d.containment,
                p = h instanceof e ? h.get(0) : /parent/.test(h) ? u.parent().get(0) : h;
            p && (c.containerElement = e(p), /document/.test(h) || h === document ? (c.containerOffset = {
                left: 0,
                top: 0
            }, c.containerPosition = {
                left: 0,
                top: 0
            }, c.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                s[e] = t(i.css("padding" + n))
            }), c.containerOffset = i.offset(), c.containerPosition = i.position(), c.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, n = c.containerOffset, a = c.containerSize.height, o = c.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, l = e.ui.hasScroll(p) ? p.scrollHeight : a, c.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: l
            }))
        },
        resize: function(t) {
            var i, s, n, a, o = e(this).data("ui-resizable"),
                r = o.options,
                l = o.containerOffset,
                c = o.position,
                d = o._aspectRatio || t.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                h = o.containerElement;
            h[0] !== document && /static/.test(h.css("position")) && (u = l), c.left < (o._helper ? l.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - l.left : o.position.left - u.left), d && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? l.left : 0), c.top < (o._helper ? l.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - l.top : o.position.top), d && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? l.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - l.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, d && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, d && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = t.containerOffset,
                n = t.containerPosition,
                a = t.containerElement,
                o = e(t.helper),
                r = o.offset(),
                l = o.outerWidth() - t.sizeDiff.width,
                c = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: c
            }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: c
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = function(t) {
                    e(t).each(function() {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
                s(e)
            })
        },
        resize: function(t, i) {
            var s = e(this).data("ui-resizable"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = {
                    height: s.size.height - a.height || 0,
                    width: s.size.width - a.width || 0,
                    top: s.position.top - o.top || 0,
                    left: s.position.left - o.left || 0
                },
                l = function(t, s) {
                    e(t).each(function() {
                        var t = e(this),
                            n = e(this).data("ui-resizable-alsoresize"),
                            a = {},
                            o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(o, function(e, t) {
                            var i = (n[t] || 0) + (r[t] || 0);
                            i && i >= 0 && (a[t] = i || null)
                        }), t.css(a)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? l(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
                l(e, t)
            })
        },
        stop: function() {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = t.size,
                n = t.originalSize,
                a = t.originalPosition,
                o = t.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                l = r[0] || 1,
                c = r[1] || 1,
                d = Math.round((s.width - n.width) / l) * l,
                u = Math.round((s.height - n.height) / c) * c,
                h = n.width + d,
                p = n.height + u,
                f = i.maxWidth && h > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight,
                m = i.minWidth && i.minWidth > h,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, m && (h += l), v && (p += c), f && (h -= l), g && (p -= c), /^(se|s|e)$/.test(o) ? (t.size.width = h, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.top = a.top - u) : /^(sw)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.left = a.left - d) : (t.size.width = h, t.size.height = p, t.position.top = a.top - u, t.position.left = a.left - d)
        }
    })
}(jQuery),
function(e) {
    e.widget("ui.selectable", e.ui.mouse, {
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
            var t, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
                    var t = e(this),
                        i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this,
                s = this.options;
            this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = e.data(this, "selectable-item");
                s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
                    unselecting: s.element
                }))
            }), e(t.target).parents().addBack().each(function() {
                var s, n = e.data(this, "selectable-item");
                return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
                    selecting: n.element
                }) : i._trigger("unselecting", t, {
                    unselecting: n.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    a = this.opos[0],
                    o = this.opos[1],
                    r = t.pageX,
                    l = t.pageY;
                return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: l - o
                }), this.selectees.each(function() {
                    var i = e.data(this, "selectable-item"),
                        c = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? c = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (c = i.left > a && r > i.right && i.top > o && l > i.bottom), c ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
                        selecting: i.element
                    }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
                        unselecting: i.element
                    }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
                    unselected: s.element
                })
            }), e(".ui-selecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
                    selected: s.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
}(jQuery),
function(e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }

    function i(e) {
        return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
    }
    e.widget("ui.sortable", e.ui.mouse, {
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
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var s = null,
                n = !1,
                a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
            }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s && (!this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function() {
                this === t.target && (n = !0)
            }), n)) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(t, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var i, s, n, a, o = this.options,
                r = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        a = this.options.axis,
                        o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                s = [];
            return t = t || {}, e(i).each(function() {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }), !s.length && t.key && s.push(t.key + "="), s.join("&")
        },
        toArray: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                s = [];
            return t = t || {}, i.each(function() {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                i = t + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                a = e.left,
                o = a + e.width,
                r = e.top,
                l = r + e.height,
                c = this.offset.click.top,
                d = this.offset.click.left,
                u = "x" === this.options.axis || s + c > r && l > s + c,
                h = "y" === this.options.axis || t + d > a && o > t + d,
                p = u && h;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(e) {
            var i = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                n = i && s,
                a = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                s = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                n = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var i, s, n, a, o = [],
                r = [],
                l = this._connectWith();
            if (l && t)
                for (i = l.length - 1; i >= 0; i--)
                    for (n = e(l[i]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(function() {
                o.push(this)
            });
            return e(o)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var i = 0; t.length > i; i++)
                    if (t[i] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var i, s, n, a, o, r, l, c, d = this.items,
                u = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                h = this._connectWith();
            if (h && this.ready)
                for (i = h.length - 1; i >= 0; i--)
                    for (n = e(h[i]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (u.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                        item: this.currentItem
                    }) : e(a.options.items, a.element), a]), this.containers.push(a));
            for (i = u.length - 1; i >= 0; i--)
                for (o = u[i][1], r = u[i][0], s = 0, c = r.length; c > s; s++) l = e(r[s]), l.data(this.widgetName + "-item", o), d.push({
                    item: l,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var i, s = t.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = t.currentItem[0].nodeName.toLowerCase(),
                        n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? t.currentItem.children().each(function() {
                        e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(e, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(s) {
            var n, a, o, r, l, c, d, u, h, p, f = null,
                g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && e.contains(this.containers[n].element[0], f.element[0])) continue;
                        f = this.containers[n], g = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (o = 1e4, r = null, p = f.floating || i(this.currentItem), l = p ? "left" : "top", c = p ? "width" : "height", d = this.positionAbs[l] + this.offset.click[l], a = this.items.length - 1; a >= 0; a--) e.contains(this.containers[g].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || t(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (u = this.items[a].item.offset()[l], h = !1, Math.abs(u - d) > Math.abs(u + this.items[a][c] - d) && (h = !0, u += this.items[a][c]), o > Math.abs(u - d) && (o = Math.abs(u - d), r = this.items[a], this.direction = h ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
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
            var t, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, n = this.options,
                a = t.pageX,
                o = t.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(e, t, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(e, t) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && s.push(function(e) {
                    this._trigger("receive", e, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || s.push(function(e) {
                    this._trigger("update", e, this._uiHash())
                }), this !== this.currentContainer && (t || (s.push(function(e) {
                    this._trigger("remove", e, this._uiHash())
                }), s.push(function(e) {
                    return function(t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function(e) {
                    return function(t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || s.push(function(e) {
                return function(t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(e) {
                return function(t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!t) {
                    for (this._trigger("beforeStop", e, this._uiHash()), i = 0; s.length > i; i++) s[i].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                for (i = 0; s.length > i; i++) s[i].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}(jQuery),
function(e, t) {
    var i = "ui-effects-";
    e.effects = {
            effect: {}
        },
        function(e, t) {
            function i(e, t, i) {
                var s = u[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
            }

            function s(i) {
                var s = c(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(l, function(e, a) {
                    var o, r = a.re.exec(i),
                        l = r && a.parse(r),
                        c = a.space || "rgba";
                    return l ? (o = s[c](l), s[d[c].cache] = o[d[c].cache], n = s._rgba = o._rgba, !1) : t
                }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
            }

            function n(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                c = e.Color = function(t, i, s, n) {
                    return new e.Color.fn.parse(t, i, s, n)
                },
                d = {
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
                u = {
                    "byte": {
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
                h = c.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(d, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), c.fn = e.extend(c.prototype, {
                parse: function(n, o, r, l) {
                    if (n === t) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                    var u = this,
                        h = e.type(n),
                        p = this._rgba = [];
                    return o !== t && (n = [n, o, r, l], h = "array"), "string" === h ? this.parse(s(n) || a._default) : "array" === h ? (f(d.rgba.props, function(e, t) {
                        p[t.idx] = i(n[t.idx], t)
                    }), this) : "object" === h ? (n instanceof c ? f(d, function(e, t) {
                        n[t.cache] && (u[t.cache] = n[t.cache].slice())
                    }) : f(d, function(t, s) {
                        var a = s.cache;
                        f(s.props, function(e, t) {
                            if (!u[a] && s.to) {
                                if ("alpha" === e || null == n[e]) return;
                                u[a] = s.to(u._rgba)
                            }
                            u[a][t.idx] = i(n[e], t, !0)
                        }), u[a] && 0 > e.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                    }), this) : t
                },
                is: function(e) {
                    var i = c(e),
                        s = !0,
                        n = this;
                    return f(d, function(e, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(e, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                        })), s
                    }), s
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return f(d, function(i, s) {
                        t[s.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var s = c(e),
                        n = s._space(),
                        a = d[n],
                        o = 0 === this.alpha() ? c("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        l = r.slice();
                    return s = s[a.cache], f(a.props, function(e, n) {
                        var a = n.idx,
                            o = r[a],
                            c = s[a],
                            d = u[n.type] || {};
                        null !== c && (null === o ? l[a] = c : (d.mod && (c - o > d.mod / 2 ? o += d.mod : o - c > d.mod / 2 && (o -= d.mod)), l[a] = i((c - o) * t + o, n)))
                    }), this[n](l)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = c(t)._rgba;
                    return c(e.map(i, function(e, t) {
                        return (1 - s) * n[t] + s * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return t && i.push(~~(255 * s)), "#" + e.map(i, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), c.fn.parse.prototype = c.fn, d.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, s = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    o = e[3],
                    r = Math.max(s, n, a),
                    l = Math.min(s, n, a),
                    c = r - l,
                    d = r + l,
                    u = .5 * d;
                return t = l === r ? 0 : s === r ? 60 * (n - a) / c + 360 : n === r ? 60 * (a - s) / c + 120 : 60 * (s - n) / c + 240, i = 0 === c ? 0 : .5 >= u ? c / d : c / (2 - d), [Math.round(t) % 360, i, u, null == o ? 1 : o]
            }, d.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    s = e[2],
                    a = e[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
            }, f(d, function(s, n) {
                var a = n.props,
                    o = n.cache,
                    l = n.to,
                    d = n.from;
                c.fn[s] = function(s) {
                    if (l && !this[o] && (this[o] = l(this._rgba)), s === t) return this[o].slice();
                    var n, r = e.type(s),
                        u = "array" === r || "object" === r ? s : arguments,
                        h = this[o].slice();
                    return f(a, function(e, t) {
                        var s = u["object" === r ? e : t.idx];
                        null == s && (s = h[t.idx]), h[t.idx] = i(s, t)
                    }), d ? (n = c(d(h)), n[o] = h, n) : c(h)
                }, f(a, function(t, i) {
                    c.fn[t] || (c.fn[t] = function(n) {
                        var a, o = e.type(n),
                            l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                            c = this[l](),
                            d = c[i.idx];
                        return "undefined" === o ? d : ("function" === o && (n = n.call(this, d), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = d + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), c[i.idx] = n, this[l](c)))
                    })
                })
            }), c.hook = function(t) {
                var i = t.split(" ");
                f(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                if (n = c(a || n), !h.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = e.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (l) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                t.style[i] = n
                            } catch (l) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, c.hook(o), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        t["border" + s + "Color"] = e
                    }), t
                }
            }, a = e.Color.names = {
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
            function i(t) {
                var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function s(t, i) {
                var s, n, o = {};
                for (s in i) n = i[s], t[s] !== n && (a[s] || (e.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                return o
            }
            var n = ["add", "remove", "toggle"],
                a = {
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
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(t, a, o, r) {
                var l = e.speed(a, o, r);
                return this.queue(function() {
                    var a, o = e(this),
                        r = o.attr("class") || "",
                        c = l.children ? o.find("*").addBack() : o;
                    c = c.map(function() {
                        var t = e(this);
                        return {
                            el: t,
                            start: i(this)
                        }
                    }), a = function() {
                        e.each(n, function(e, i) {
                            t[i] && o[i + "Class"](t[i])
                        })
                    }, a(), c = c.map(function() {
                        return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                    }), o.attr("class", r), c = c.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            s = e.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), e.when.apply(e, c.get()).done(function() {
                        a(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), l.complete.call(o[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(i, s, n, a) {
                        return s ? e.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(i, s, n, a) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(i) {
                    return function(s, n, a, o, r) {
                        return "boolean" == typeof n || n === t ? a ? e.effects.animateClass.call(this, n ? {
                            add: s
                        } : {
                            remove: s
                        }, a, o, r) : i.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: s
                        }, n, a, o)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, i, s, n, a) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, s, n, a)
                }
            })
        }(),
        function() {
            function s(t, i, s, n) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
            }

            function n(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.10.3",
                save: function(e, t) {
                    for (var s = 0; t.length > s; s++) null !== t[s] && e.data(i + t[s], e[0].style[t[s]])
                },
                restore: function(e, s) {
                    var n, a;
                    for (a = 0; s.length > a; a++) null !== s[a] && (n = e.data(i + s[a]), n === t && (n = ""), e.css(s[a], n))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var i, s;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = e[1] / t.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        s = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: t.width(),
                            height: t.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o) {
                        a = document.body
                    }
                    return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, s) {
                        i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(n), s.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                },
                setTransition: function(t, i, s, n) {
                    return n = n || {}, e.each(i, function(e, i) {
                        var a = t.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), e.fn.extend({
                effect: function() {
                    function t(t) {
                        function s() {
                            e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                        }
                        var n = e(this),
                            a = i.complete,
                            r = i.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                    }
                    var i = s.apply(this, arguments),
                        n = i.mode,
                        a = i.queue,
                        o = e.effects.effect[i.effect];
                    return e.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : a === !1 ? this.each(t) : this.queue(a || "fx", t)
                },
                show: function(e) {
                    return function(t) {
                        if (n(t)) return e.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(t) {
                        if (n(t)) return e.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(t) {
                        if (n(t) || "boolean" == typeof t) return e.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        s = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                    }), s
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                t[i] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) {
                e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                    return 1 - i(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                }
            })
        }()
}(jQuery),
function(e) {
    var t = 0,
        i = {},
        s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", e.widget("ui.accordion", {
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
            var t = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e(),
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function(e, t) {
            return "active" === e ? void this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), void("disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)))
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(t.target),
                    a = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        a = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        a = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        a = this.headers[0];
                        break;
                    case i.END:
                        a = this.headers[s - 1]
                }
                a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var i, s = this.options,
                n = s.heightStyle,
                a = this.element.parent(),
                o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(t) {
                var i = e(this),
                    s = i.attr("id"),
                    n = i.next(),
                    a = n.attr("id");
                s || (s = o + "-header-" + t, i.attr("id", s)), a || (a = o + "-panel-" + t, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s)
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
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    s = t.css("position");
                "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
            }), this.headers.each(function() {
                i -= e(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, e(this).css("height", "").height())
            }).height(i))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), function(e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i = this.options,
                s = this.active,
                n = e(t.currentTarget),
                a = n[0] === s[0],
                o = a && i.collapsible,
                r = o ? e() : n.next(),
                l = s.next(),
                c = {
                    oldHeader: s,
                    oldPanel: l,
                    newHeader: o ? e() : n,
                    newPanel: r
                };
            t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, c) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(c), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var i = t.newPanel,
                s = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(e, t, n) {
            var a, o, r, l = this,
                c = 0,
                d = e.length && (!t.length || e.index() < t.index()),
                u = this.options.animate || {},
                h = d && u.down || u,
                p = function() {
                    l._toggleComplete(n)
                };
            return "number" == typeof h && (r = h), "string" == typeof h && (o = h), o = o || h.easing || u.easing, r = r || h.duration || u.duration, t.length ? e.length ? (a = e.show().outerHeight(), t.animate(i, {
                duration: r,
                easing: o,
                step: function(e, t) {
                    t.now = Math.round(e)
                }
            }), void e.hide().animate(s, {
                duration: r,
                easing: o,
                complete: p,
                step: function(e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? c += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(a - t.outerHeight() - c), c = 0)
                }
            })) : t.animate(i, r, o, p) : e.animate(s, r, o, p)
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    })
}(jQuery),
function(e) {
    var t = 0;
    e.widget("ui.autocomplete", {
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
            var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                a = "textarea" === n,
                o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, void(i = !0);
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, void e.preventDefault()) : void this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent)
                    });
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
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
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this,
                i = ++t;
            return function(s) {
                i === t && e.__response(s), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
}(jQuery),
function(e) {
    var t, i, s, n, a = "ui-button ui-widget ui-state-default ui-corner-all",
        o = "ui-state-hover ui-state-active ",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        l = function() {
            var t = e(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        c = function(t) {
            var i = t.name,
                s = t.form,
                n = e([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function() {
                return !this.form
            })), n
        };
    e.widget("ui.button", {
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
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var o = this,
                r = this.options,
                d = "checkbox" === this.type || "radio" === this.type,
                u = d ? "" : "ui-state-active",
                h = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                r.disabled || this === t && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                r.disabled || e(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(e) {
                r.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function() {
                o.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function() {
                o.buttonElement.removeClass(h)
            }), d && (this.element.bind("change" + this.eventNamespace, function() {
                n || o.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) {
                r.disabled || (n = !1, i = e.pageX, s = e.pageY)
            }).bind("mouseup" + this.eventNamespace, function(e) {
                r.disabled || (i !== e.pageX || s !== e.pageY) && (n = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return r.disabled || n ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (r.disabled || n) return !1;
                e(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
                var t = o.element[0];
                c(t).not(t).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return r.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, void o.document.one("mouseup", function() {
                    t = null
                }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return r.disabled ? !1 : void e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(t) {
                return r.disabled ? !1 : void((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            return this._super(e, t), "disabled" === e ? void(t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? c(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var t = this.buttonElement.removeClass(r),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
        }
    }), e.widget("ui.buttonset", {
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
        _setOption: function(e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(e, t) {
    function i() {
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
        }, e.extend(this._defaults, this.regional[""]), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            e.datepicker._isDisabledDatepicker(a.inline ? t.parent()[0] : a.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function n(t, i) {
        e.extend(t, i);
        for (var s in i) null == i[s] && (t[s] = i[s]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var a, o = "datepicker";
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return n(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var s, n, a;
            s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
        },
        _newInst: function(t, i) {
            var n = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, o, i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var s, n, a, o = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, n, a = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) {
                    for (i = 0, s = 0, n = 0; e.length > n; n++) e[n].length > i && (i = e[n].length, s = n);
                    return s
                }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, o, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, s, a, r) {
            var l, c, d, u, h, p = this._dialogInst;
            return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], o, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (c = document.documentElement.clientWidth, d = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + u, d / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], o, p), this
        },
        _destroyDatepicker: function(t) {
            var i, s = e(t),
                n = e.data(t, o);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, o), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var i, s, n = e(t),
                a = e.data(t, o);
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, s, n = e(t),
                a = e.data(t, o);
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, o)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, s, a) {
            var o, r, l, c, d = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? e.extend({}, e.datepicker._defaults) : d ? "all" === s ? e.extend({}, d.settings) : this._get(d, s) : null : (o = s || {}, "string" == typeof s && (o = {}, o[s] = a), d && (this._curInst === d && this._hideDatepicker(), r = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(d, "min"), c = this._getMinMaxDate(d, "max"), n(d.settings, o), null !== l && o.dateFormat !== t && o.minDate === t && (d.settings.minDate = this._formatDate(d, l)), null !== c && o.dateFormat !== t && o.maxDate === t && (d.settings.maxDate = this._formatDate(d, c)), "disabled" in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), d), this._autoSize(d), this._setDate(d, r), this._updateAlternate(d), this._updateDatepicker(d)), t)
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, s, n, a = e.datepicker._getInst(t.target),
                o = !0,
                r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(i) {
            var s, n, a = e.datepicker._getInst(i.target);
            return e.datepicker._get(a, "constrainInput") ? (s = e.datepicker._possibleChars(e.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : t
        },
        _doKeyUp: function(t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
            } catch (n) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, s, a, o, r, l, c;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), s = e.datepicker._get(i, "beforeShow"), a = s ? s.apply(t, [t, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() {
                    return o |= "fixed" === e(this).css("position"), !o
                }), r = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), r = e.datepicker._checkOffset(i, r, o), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: r.left + "px",
                    top: r.top + "px"
                }), i.inline || (l = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, a = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, s = this._getNumberOfMonths(t),
                n = s[1],
                o = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", o * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, s) {
            var n = t.dpDiv.outerWidth(),
                a = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                r = t.input ? t.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                c = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + a > c && c > a ? Math.abs(a + r) : 0), i
        },
        _findPos: function(t) {
            for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, s, n, a, r = this._curInst;
            !r || t && r !== e.data(t, o) || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function() {
                e.datepicker._tidyDialog(r)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(r, "onClose"), a && a.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function(t) {
            var i, s = e(t),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function(t, i, s, n) {
            var a, o = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var s, n = e(t),
                a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, s, n, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function() {
                e(this).val(n)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(i, s, n) {
            if (null == i || null == s) throw "Invalid arguments";
            if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
            var a, o, r, l, c = 0,
                d = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10),
                h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (n ? n.dayNames : null) || this._defaults.dayNames,
                f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                g = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                v = -1,
                b = -1,
                y = -1,
                w = !1,
                N = function(e) {
                    var t = i.length > a + 1 && i.charAt(a + 1) === e;
                    return t && a++, t
                },
                k = function(e) {
                    var t = N(e),
                        i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        n = RegExp("^\\d{1," + i + "}"),
                        a = s.substring(c).match(n);
                    if (!a) throw "Missing number at position " + c;
                    return c += a[0].length, parseInt(a[0], 10)
                },
                x = function(i, n, a) {
                    var o = -1,
                        r = e.map(N(i) ? a : n, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(r, function(e, i) {
                            var n = i[1];
                            return s.substr(c, n.length).toLowerCase() === n.toLowerCase() ? (o = i[0], c += n.length, !1) : t
                        }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + c
                },
                _ = function() {
                    if (s.charAt(c) !== i.charAt(a)) throw "Unexpected literal at position " + c;
                    c++
                };
            for (a = 0; i.length > a; a++)
                if (w) "'" !== i.charAt(a) || N("'") ? _() : w = !1;
                else switch (i.charAt(a)) {
                    case "d":
                        b = k("d");
                        break;
                    case "D":
                        x("D", h, p);
                        break;
                    case "o":
                        y = k("o");
                        break;
                    case "m":
                        v = k("m");
                        break;
                    case "M":
                        v = x("M", f, g);
                        break;
                    case "y":
                        m = k("y");
                        break;
                    case "@":
                        l = new Date(k("@")), m = l.getFullYear(), v = l.getMonth() + 1, b = l.getDate();
                        break;
                    case "!":
                        l = new Date((k("!") - this._ticksTo1970) / 1e4), m = l.getFullYear(), v = l.getMonth() + 1, b = l.getDate();
                        break;
                    case "'":
                        N("'") ? _() : w = !0;
                        break;
                    default:
                        _()
                }
            if (s.length > c && (r = s.substr(c), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
                for (v = 1, b = y; o = this._getDaysInMonth(m, v - 1), !(o >= b);) v++, b -= o;
            if (l = this._daylightSavingAdjust(new Date(m, v - 1, b)), l.getFullYear() !== m || l.getMonth() + 1 !== v || l.getDate() !== b) throw "Invalid date";
            return l
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
        formatDate: function(e, t, i) {
            if (!t) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                c = function(e, t, i) {
                    var s = "" + t;
                    if (l(e))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                d = function(e, t, i, s) {
                    return l(e) ? s[t] : i[t]
                },
                u = "",
                h = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (h) "'" !== e.charAt(s) || l("'") ? u += e.charAt(s) : h = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            u += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            u += d("D", t.getDay(), n, a);
                            break;
                        case "o":
                            u += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += d("M", t.getMonth(), o, r);
                            break;
                        case "y":
                            u += l("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            u += t.getTime();
                            break;
                        case "!":
                            u += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : h = !0;
                            break;
                        default:
                            u += e.charAt(s)
                    }
            return u
        },
        _possibleChars: function(e) {
            var t, i = "",
                s = !1,
                n = function(i) {
                    var s = e.length > t + 1 && e.charAt(t + 1) === i;
                    return s && t++, s
                };
            for (t = 0; e.length > t; t++)
                if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, i) {
            return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    s = e.lastVal = e.input ? e.input.val() : null,
                    n = this._getDefaultDate(e),
                    a = n,
                    o = this._getFormatConfig(e);
                try {
                    a = this.parseDate(i, s, o) || n
                } catch (r) {
                    s = t ? "" : s
                }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, s) {
            var n = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                a = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (s) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(i); c;) {
                        switch (c[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(c[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                                break;
                            case "y":
                            case "Y":
                                a += parseInt(c[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                        }
                        c = l.exec(i)
                    }
                    return new Date(a, o, r)
                },
                o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var s = !t,
                n = e.selectedMonth,
                a = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, s, n, a, o, r, l, c, d, u, h, p, f, g, m, v, b, y, w, N, k, x, _, C, $, S, T, P, j, z, A, D, I, R, M, E, W, O, H = new Date,
                q = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                L = this._get(e, "isRTL"),
                B = this._get(e, "showButtonPanel"),
                Q = this._get(e, "hideIfNoPrevNext"),
                F = this._get(e, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(e),
                Y = this._get(e, "showCurrentAtPos"),
                V = this._get(e, "stepMonths"),
                X = 1 !== U[0] || 1 !== U[1],
                J = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(e, "min"),
                K = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - Y,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), K)
                for (t = this._daylightSavingAdjust(new Date(K.getFullYear(), K.getMonth() - U[0] * U[1] + 1, K.getDate())), t = G && G > t ? G : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = F ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - V, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : Q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = F ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + V, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + n + "</span></a>" : Q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? J : q, o = F ? this.formatDate(o, r, this._getFormatConfig(e)) : o, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? l : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (L ? "" : l) + "</div>" : "", d = parseInt(this._get(e, "firstDay"), 10), d = isNaN(d) ? 0 : d, u = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), g = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), b = this._get(e, "selectOtherMonths"), y = this._getDefaultDate(e), w = "", k = 0; U[0] > k; k++) {
                for (x = "", this.maxRows = 4, _ = 0; U[1] > _; _++) {
                    if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), $ = " ui-corner-all", S = "", X) {
                        if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (_) {
                            case 0:
                                S += " ui-datepicker-group-first", $ = " ui-corner-" + (L ? "right" : "left");
                                break;
                            case U[1] - 1:
                                S += " ui-datepicker-group-last", $ = " ui-corner-" + (L ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle", $ = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + $ + "'>" + (/all|left/.test($) && 0 === k ? L ? a : s : "") + (/all|right/.test($) && 0 === k ? L ? s : a : "") + this._generateMonthYearHeader(e, Z, et, G, K, k > 0 || _ > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = u ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", N = 0; 7 > N; N++) P = (N + d) % 7, T += "<th" + ((N + d + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[P] + "'>" + p[P] + "</span></th>";
                    for (S += T + "</tr></thead><tbody>", j = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, j)), z = (this._getFirstDayOfMonth(et, Z) - d + 7) % 7, A = Math.ceil((z + j) / 7), D = X && this.maxRows > A ? this.maxRows : A, this.maxRows = D, I = this._daylightSavingAdjust(new Date(et, Z, 1 - z)), R = 0; D > R; R++) {
                        for (S += "<tr>", M = u ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(I) + "</td>" : "", N = 0; 7 > N; N++) E = m ? m.apply(e.input ? e.input[0] : null, [I]) : [!0, ""], W = I.getMonth() !== Z, O = W && !b || !E[0] || G && G > I || K && I > K, M += "<td class='" + ((N + d + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (I.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || y.getTime() === I.getTime() && y.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (O ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + E[1] + (I.getTime() === J.getTime() ? " " + this._currentClass : "") + (I.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (O ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : O ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === q.getTime() ? " ui-state-highlight" : "") + (I.getTime() === J.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        S += M + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), S += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && _ === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
                }
                w += x
            }
            return w += c, e._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(e, t, i, s, n, a, o, r) {
            var l, c, d, u, h, p, f, g, m = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                b = this._get(e, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                w = "";
            if (a || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                for (l = s && s.getFullYear() === i, c = n && n.getFullYear() === i, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", d = 0; 12 > d; d++)(!l || d >= s.getMonth()) && (!c || n.getMonth() >= d) && (w += "<option value='" + d + "'" + (d === t ? " selected='selected'" : "") + ">" + r[d] + "</option>");
                w += "</select>"
            }
            if (b || (y += w + (!a && m && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", a || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", y += e.yearshtml, e.yearshtml = null
                }
            return y += this._get(e, "yearSuffix"), b && (y += (!a && m && v ? "" : "&#xa0;") + w), y += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0),
                n = e.drawMonth + ("M" === i ? t : 0),
                a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                n = i && i > t ? i : t;
            return s && n > s ? s : n
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, s) {
            var n = this._getNumberOfMonths(e),
                a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function(e, t) {
            var i, s, n = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                o = null,
                r = null,
                l = this._get(e, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, s) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3"
}(jQuery),
function(e) {
    var t = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
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
                using: function(t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
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
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || e(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", e), i
        },
        open: function() {
            var t = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (n.focus(1), t.preventDefault()) : (s.focus(1), t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (e.each(i, function(i, s) {
                var n, a;
                s = e.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = e.extend({
                    type: "button"
                }, s), n = s.click, s.click = function() {
                    n.apply(t.element[0], arguments)
                }, a = {
                    icons: s.icons,
                    text: s.showText
                }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n))
                },
                drag: function(e, s) {
                    i._trigger("drag", e, t(s))
                },
                stop: function(n, a) {
                    s.position = [a.position.left - i.document.scrollLeft(), a.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a))
                }
            })
        },
        _makeResizable: function() {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var i = this,
                s = this.options,
                n = s.resizable,
                a = this.uiDialog.css("position"),
                o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(s, n) {
                    e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n))
                },
                resize: function(e, s) {
                    i._trigger("resize", e, t(s))
                },
                stop: function(n, a) {
                    s.height = e(this).height(), s.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a))
                }
            }).css("position", a)
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(s) {
            var n = this,
                a = !1,
                o = {};
            e.each(s, function(e, s) {
                n._setOption(e, s), e in t && (a = !0), e in i && (o[e] = s)
            }), a && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(e, t) {
            var i, s, n = this.uiDialog;
            "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = this,
                    i = this.widgetFullName;
                e.ui.dialog.overlayInstances || this._delay(function() {
                    e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(s) {
                        t._allowInteraction(s) || (s.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), e.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        _position: function() {
            var t, i = this.options.position,
                s = [],
                n = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), e.each(["left", "top"], function(e, t) {
                +s[e] === s[e] && (n[e] = s[e], s[e] = t)
            }), i = {
                my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
                at: s.join(" ")
            }), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(":visible"), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide()
        }
    })
}(jQuery),
function(e) {
    var t = /up|down|vertical/,
        i = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function(s, n) {
        var a, o, r, l = e(this),
            c = ["position", "top", "bottom", "left", "right", "height", "width"],
            d = e.effects.setMode(l, s.mode || "hide"),
            u = s.direction || "up",
            h = t.test(u),
            p = h ? "height" : "width",
            f = h ? "top" : "left",
            g = i.test(u),
            m = {},
            v = "show" === d;
        l.parent().is(".ui-effects-wrapper") ? e.effects.save(l.parent(), c) : e.effects.save(l, c), l.show(), a = e.effects.createWrapper(l).css({
            overflow: "hidden"
        }), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function() {
                "hide" === d && l.hide(), e.effects.restore(l, c), e.effects.removeWrapper(l), n()
            }
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.bounce = function(t, i) {
        var s, n, a, o = e(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = e.effects.setMode(o, t.mode || "effect"),
            c = "hide" === l,
            d = "show" === l,
            u = t.direction || "up",
            h = t.distance,
            p = t.times || 5,
            f = 2 * p + (d || c ? 1 : 0),
            g = t.duration / f,
            m = t.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            b = "up" === u || "left" === u,
            y = o.queue(),
            w = y.length;
        for ((d || c) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), h || (h = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), d && (a = {
                opacity: 1
            }, a[v] = 0, o.css("opacity", 0).css(v, b ? 2 * -h : 2 * h).animate(a, g, m)), c && (h /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (b ? "-=" : "+=") + h, o.animate(n, g, m).animate(a, g, m), h = c ? 2 * h : h / 2;
        c && (n = {
            opacity: 0
        }, n[v] = (b ? "-=" : "+=") + h, o.animate(n, g, m)), o.queue(function() {
            c && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
        }), w > 1 && y.splice.apply(y, [1, 0].concat(y.splice(w, f + 1))), o.dequeue()
    }
}(jQuery),
function(e) {
    e.effects.effect.clip = function(t, i) {
        var s, n, a, o = e(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = e.effects.setMode(o, t.mode || "hide"),
            c = "show" === l,
            d = t.direction || "vertical",
            u = "vertical" === d,
            h = u ? "height" : "width",
            p = u ? "top" : "left",
            f = {};
        e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({
            overflow: "hidden"
        }), n = "IMG" === o[0].tagName ? s : o, a = n[h](), c && (n.css(h, 0), n.css(p, a / 2)), f[h] = c ? a : 0, f[p] = c ? 0 : a / 2, n.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                c || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
            }
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.drop = function(t, i) {
        var s, n = e(this),
            a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            o = e.effects.setMode(n, t.mode || "hide"),
            r = "show" === o,
            l = t.direction || "left",
            c = "up" === l || "down" === l ? "top" : "left",
            d = "up" === l || "left" === l ? "pos" : "neg",
            u = {
                opacity: r ? 1 : 0
            };
        e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === c ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(c, "pos" === d ? -s : s), u[c] = (r ? "pos" === d ? "+=" : "-=" : "pos" === d ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
            }
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.explode = function(t, i) {
        function s() {
            y.push(this), y.length === u * h && n()
        }

        function n() {
            p.css({
                visibility: "visible"
            }), e(y).remove(), g || p.hide(), i()
        }
        var a, o, r, l, c, d, u = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            h = u,
            p = e(this),
            f = e.effects.setMode(p, t.mode || "hide"),
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / h),
            b = Math.ceil(p.outerHeight() / u),
            y = [];
        for (a = 0; u > a; a++)
            for (l = m.top + a * b, d = a - (u - 1) / 2, o = 0; h > o; o++) r = m.left + o * v, c = o - (h - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -o * v,
                top: -a * b
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: b,
                left: r + (g ? c * v : 0),
                top: l + (g ? d * b : 0),
                opacity: g ? 0 : 1
            }).animate({
                left: r + (g ? 0 : c * v),
                top: l + (g ? 0 : d * b),
                opacity: g ? 1 : 0
            }, t.duration || 500, t.easing, s)
    }
}(jQuery),
function(e) {
    e.effects.effect.fade = function(t, i) {
        var s = e(this),
            n = e.effects.setMode(s, t.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.fold = function(t, i) {
        var s, n, a = e(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = e.effects.setMode(a, t.mode || "hide"),
            l = "show" === r,
            c = "hide" === r,
            d = t.size || 15,
            u = /([0-9]+)%/.exec(d),
            h = !!t.horizFirst,
            p = l !== h,
            f = p ? ["width", "height"] : ["height", "width"],
            g = t.duration / 2,
            m = {},
            v = {};
        e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({
            overflow: "hidden"
        }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (d = parseInt(u[1], 10) / 100 * n[c ? 0 : 1]), l && s.css(h ? {
            height: 0,
            width: d
        } : {
            height: d,
            width: 0
        }), m[f[0]] = l ? n[0] : d, v[f[1]] = l ? n[1] : 0, s.animate(m, g, t.easing).animate(v, g, t.easing, function() {
            c && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i()
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.highlight = function(t, i) {
        var s = e(this),
            n = ["backgroundImage", "backgroundColor", "opacity"],
            a = e.effects.setMode(s, t.mode || "show"),
            o = {
                backgroundColor: s.css("backgroundColor")
            };
        "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === a && s.hide(), e.effects.restore(s, n), i()
            }
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.pulsate = function(t, i) {
        var s, n = e(this),
            a = e.effects.setMode(n, t.mode || "show"),
            o = "show" === a,
            r = "hide" === a,
            l = o || "hide" === a,
            c = 2 * (t.times || 5) + (l ? 1 : 0),
            d = t.duration / c,
            u = 0,
            h = n.queue(),
            p = h.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; c > s; s++) n.animate({
            opacity: u
        }, d, t.easing), u = 1 - u;
        n.animate({
            opacity: u
        }, d, t.easing), n.queue(function() {
            r && n.hide(), i()
        }), p > 1 && h.splice.apply(h, [1, 0].concat(h.splice(p, c + 1))), n.dequeue()
    }
}(jQuery),
function(e) {
    e.effects.effect.puff = function(t, i) {
        var s = e(this),
            n = e.effects.setMode(s, t.mode || "hide"),
            a = "hide" === n,
            o = parseInt(t.percent, 10) || 150,
            r = o / 100,
            l = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? l : {
                height: l.height * r,
                width: l.width * r,
                outerHeight: l.outerHeight * r,
                outerWidth: l.outerWidth * r
            }
        }), s.effect(t)
    }, e.effects.effect.scale = function(t, i) {
        var s = e(this),
            n = e.extend(!0, {}, t),
            a = e.effects.setMode(s, t.mode || "effect"),
            o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
            r = t.direction || "both",
            l = t.origin,
            c = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            },
            d = {
                y: "horizontal" !== r ? o / 100 : 1,
                x: "vertical" !== r ? o / 100 : 1
            };
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : c), n.to = {
            height: c.height * d.y,
            width: c.width * d.x,
            outerHeight: c.outerHeight * d.y,
            outerWidth: c.outerWidth * d.x
        }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, e.effects.effect.size = function(t, i) {
        var s, n, a, o = e(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            c = ["width", "height", "overflow"],
            d = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = e.effects.setMode(o, t.mode || "effect"),
            f = t.restore || "effect" !== p,
            g = t.scale || "both",
            m = t.origin || ["middle", "center"],
            v = o.css("position"),
            b = f ? r : l,
            y = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === p && o.show(), s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, "toggle" === t.mode && "show" === p ? (o.from = t.to || y, o.to = t.from || s) : (o.from = t.from || ("show" === p ? y : s), o.to = t.to || ("hide" === p ? y : s)), a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            },
            to: {
                y: o.to.height / s.height,
                x: o.to.width / s.width
            }
        }, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (b = b.concat(u), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (b = b.concat(h), o.from = e.effects.setTransition(o, h, a.from.x, o.from), o.to = e.effects.setTransition(o, h, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (b = b.concat(d).concat(c), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), e.effects.save(o, b), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = e.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(d), h = h.concat(["marginLeft", "marginRight"]), c = r.concat(u).concat(h), o.find("*[width]").each(function() {
            var i = e(this),
                s = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            f && e.effects.save(i, c), i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            }, i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, u, a.from.y, i.from), i.to = e.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, h, a.from.x, i.from), i.to = e.effects.setTransition(i, h, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function() {
                f && e.effects.restore(i, c)
            })
        })), o.animate(o.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, b), f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function(e, t) {
                    o.css(t, function(t, i) {
                        var s = parseInt(i, 10),
                            n = e ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), e.effects.removeWrapper(o), i()
            }
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.shake = function(t, i) {
        var s, n = e(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            o = e.effects.setMode(n, t.mode || "effect"),
            r = t.direction || "left",
            l = t.distance || 20,
            c = t.times || 3,
            d = 2 * c + 1,
            u = Math.round(t.duration / d),
            h = "up" === r || "down" === r ? "top" : "left",
            p = "up" === r || "left" === r,
            f = {},
            g = {},
            m = {},
            v = n.queue(),
            b = v.length;
        for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[h] = (p ? "-=" : "+=") + l, g[h] = (p ? "+=" : "-=") + 2 * l, m[h] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, t.easing), s = 1; c > s; s++) n.animate(g, u, t.easing).animate(m, u, t.easing);
        n.animate(g, u, t.easing).animate(f, u / 2, t.easing).queue(function() {
            "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
        }), b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, d + 1))), n.dequeue()
    }
}(jQuery),
function(e) {
    e.effects.effect.slide = function(t, i) {
        var s, n = e(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height"],
            o = e.effects.setMode(n, t.mode || "show"),
            r = "show" === o,
            l = t.direction || "left",
            c = "up" === l || "down" === l ? "top" : "left",
            d = "up" === l || "left" === l,
            u = {};
        e.effects.save(n, a), n.show(), s = t.distance || n["top" === c ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({
            overflow: "hidden"
        }), r && n.css(c, d ? isNaN(s) ? "-" + s : -s : s), u[c] = (r ? d ? "+=" : "-=" : d ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
            }
        })
    }
}(jQuery),
function(e) {
    e.effects.effect.transfer = function(t, i) {
        var s = e(this),
            n = e(t.to),
            a = "fixed" === n.css("position"),
            o = e("body"),
            r = a ? o.scrollTop() : 0,
            l = a ? o.scrollLeft() : 0,
            c = n.offset(),
            d = {
                top: c.top - r,
                left: c.left - l,
                height: n.innerHeight(),
                width: n.innerWidth()
            },
            u = s.offset(),
            h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                top: u.top - r,
                left: u.left - l,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: a ? "fixed" : "absolute"
            }).animate(d, t.duration, t.easing, function() {
                h.remove(), i()
            })
    }
}(jQuery),
function(e) {
    e.widget("ui.menu", {
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
            }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                this.options.disabled && e.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(t) {
                    var i = e(t.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(t), i.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var i = e(t.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            function i(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, o, r, l = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    l = !1, n = this.previousFilter || "", a = String.fromCharCode(t.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(e(this).children("a").text())
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(t.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(e(this).children("a").text())
                    })), s.length ? (this.focus(t, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && t.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this),
                    s = t.prev("a"),
                    n = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), t.attr("aria-labelledby", s.attr("id"))
            }), t = s.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t.children(":not(.ui-menu-item)").each(function() {
                var t = e(this);
                /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t)
        },
        focus: function(e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = t.children(".ui-menu"), i.length && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            }))
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function(t) {
            var i = e.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, s)
        },
        nextPage: function(t) {
            var i, s, n;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = e(this), 0 > i.offset().top - s - n
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(t)
        },
        previousPage: function(t) {
            var i, s, n;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = e(this), i.offset().top - s + n > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(t)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
        }
    })
}(jQuery),
function(e, t) {
    function i(e, t, i) {
        return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
    }

    function s(t, i) {
        return parseInt(e.css(t, i), 10) || 0
    }

    function n(t) {
        var i = t[0];
        return 9 === i.nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    e.ui = e.ui || {};
    var a, o = Math.max,
        r = Math.abs,
        l = Math.round,
        c = /left|center|right/,
        d = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        h = /^\w+/,
        p = /%$/,
        f = e.fn.position;
    e.position = {
            scrollbarWidth: function() {
                if (a !== t) return a;
                var i, s, n = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = n.children()[0];
                return e("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
            },
            getScrollInfo: function(t) {
                var i = t.isWindow ? "" : t.element.css("overflow-x"),
                    s = t.isWindow ? "" : t.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                    a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                return {
                    width: a ? e.position.scrollbarWidth() : 0,
                    height: n ? e.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = e(t || window),
                    s = e.isWindow(i[0]);
                return {
                    element: i,
                    isWindow: s,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, e.fn.position = function(t) {
            if (!t || !t.of) return f.apply(this, arguments);
            t = e.extend({}, t);
            var a, p, g, m, v, b, y = e(t.of),
                w = e.position.getWithinInfo(t.within),
                N = e.position.getScrollInfo(w),
                k = (t.collision || "flip").split(" "),
                x = {};
            return b = n(y), y[0].preventDefault && (t.at = "left top"), p = b.width, g = b.height, m = b.offset, v = e.extend({}, m), e.each(["my", "at"], function() {
                var e, i, s = (t[this] || "").split(" ");
                1 === s.length && (s = c.test(s[0]) ? s.concat(["center"]) : d.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = c.test(s[0]) ? s[0] : "center", s[1] = d.test(s[1]) ? s[1] : "center", e = u.exec(s[0]), i = u.exec(s[1]), x[this] = [e ? e[0] : 0, i ? i[0] : 0], t[this] = [h.exec(s[0])[0], h.exec(s[1])[0]]
            }), 1 === k.length && (k[1] = k[0]), "right" === t.at[0] ? v.left += p : "center" === t.at[0] && (v.left += p / 2), "bottom" === t.at[1] ? v.top += g : "center" === t.at[1] && (v.top += g / 2), a = i(x.at, p, g), v.left += a[0], v.top += a[1], this.each(function() {
                var n, c, d = e(this),
                    u = d.outerWidth(),
                    h = d.outerHeight(),
                    f = s(this, "marginLeft"),
                    b = s(this, "marginTop"),
                    _ = u + f + s(this, "marginRight") + N.width,
                    C = h + b + s(this, "marginBottom") + N.height,
                    $ = e.extend({}, v),
                    S = i(x.my, d.outerWidth(), d.outerHeight());
                "right" === t.my[0] ? $.left -= u : "center" === t.my[0] && ($.left -= u / 2), "bottom" === t.my[1] ? $.top -= h : "center" === t.my[1] && ($.top -= h / 2), $.left += S[0], $.top += S[1], e.support.offsetFractions || ($.left = l($.left), $.top = l($.top)), n = {
                    marginLeft: f,
                    marginTop: b
                }, e.each(["left", "top"], function(i, s) {
                    e.ui.position[k[i]] && e.ui.position[k[i]][s]($, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: u,
                        elemHeight: h,
                        collisionPosition: n,
                        collisionWidth: _,
                        collisionHeight: C,
                        offset: [a[0] + S[0], a[1] + S[1]],
                        my: t.my,
                        at: t.at,
                        within: w,
                        elem: d
                    })
                }), t.using && (c = function(e) {
                    var i = m.left - $.left,
                        s = i + p - u,
                        n = m.top - $.top,
                        a = n + g - h,
                        l = {
                            target: {
                                element: y,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: g
                            },
                            element: {
                                element: d,
                                left: $.left,
                                top: $.top,
                                width: u,
                                height: h
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    u > p && p > r(i + s) && (l.horizontal = "center"), h > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", t.using.call(this, e, l)
                }), d.offset(e.extend($, {
                    using: c
                }))
            })
        }, e.ui.position = {
            fit: {
                left: function(e, t) {
                    var i, s = t.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        a = s.width,
                        r = e.left - t.collisionPosition.marginLeft,
                        l = n - r,
                        c = r + t.collisionWidth - a - n;
                    t.collisionWidth > a ? l > 0 && 0 >= c ? (i = e.left + l + t.collisionWidth - a - n, e.left += l - i) : e.left = c > 0 && 0 >= l ? n : l > c ? n + a - t.collisionWidth : n : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = o(e.left - r, e.left)
                },
                top: function(e, t) {
                    var i, s = t.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        a = t.within.height,
                        r = e.top - t.collisionPosition.marginTop,
                        l = n - r,
                        c = r + t.collisionHeight - a - n;
                    t.collisionHeight > a ? l > 0 && 0 >= c ? (i = e.top + l + t.collisionHeight - a - n, e.top += l - i) : e.top = c > 0 && 0 >= l ? n : l > c ? n + a - t.collisionHeight : n : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = o(e.top - r, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var i, s, n = t.within,
                        a = n.offset.left + n.scrollLeft,
                        o = n.width,
                        l = n.isWindow ? n.scrollLeft : n.offset.left,
                        c = e.left - t.collisionPosition.marginLeft,
                        d = c - l,
                        u = c + t.collisionWidth - o - l,
                        h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        f = -2 * t.offset[0];
                    0 > d ? (i = e.left + h + p + f + t.collisionWidth - o - a, (0 > i || r(d) > i) && (e.left += h + p + f)) : u > 0 && (s = e.left - t.collisionPosition.marginLeft + h + p + f - l, (s > 0 || u > r(s)) && (e.left += h + p + f))
                },
                top: function(e, t) {
                    var i, s, n = t.within,
                        a = n.offset.top + n.scrollTop,
                        o = n.height,
                        l = n.isWindow ? n.scrollTop : n.offset.top,
                        c = e.top - t.collisionPosition.marginTop,
                        d = c - l,
                        u = c + t.collisionHeight - o - l,
                        h = "top" === t.my[1],
                        p = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        g = -2 * t.offset[1];
                    0 > d ? (s = e.top + p + f + g + t.collisionHeight - o - a, e.top + p + f + g > d && (0 > s || r(d) > s) && (e.top += p + f + g)) : u > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + g - l, e.top + p + f + g > u && (i > 0 || u > r(i)) && (e.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var t, i, s, n, a, o = document.getElementsByTagName("body")[0],
                r = document.createElement("div");
            t = document.createElement(o ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && e.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (a in s) t.style[a] = s[a];
            t.appendChild(r), i = o || document.documentElement, i.insertBefore(t, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = e(r).offset().left, e.support.offsetFractions = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
        }()
}(jQuery),
function(e, t) {
    e.widget("ui.progressbar", {
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
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(e) {
            return e === t ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), t)
        },
        _constrainedValue: function(e) {
            return e === t && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function(e, t) {
            "max" === e && (t = Math.max(this.min, t)), this._super(e, t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    })
}(jQuery),
function(e) {
    var t = 5;
    e.widget("ui.slider", e.ui.mouse, {
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
            var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
            this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : this.range = e([])
        },
        _setupEvents: function() {
            var e = this.handles.add(this.range).filter("a");
            this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, s, n, a, o, r, l, c, d = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(s - d.values(t));
                (n > i || n === i && (t === d._lastChangedValue || d.values(t) === u.min)) && (n = i, a = e(this), o = t)
            }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), c = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - l.left - a.width() / 2,
                top: t.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, s, n, a;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function(e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i, !0))) : i !== this.value() && (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(t, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var s, n = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
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
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, i, s, n, a, o = this.options.range,
                r = this.options,
                l = this,
                c = this._animateOff ? !1 : r.animate,
                d = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), d["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[c ? "animate" : "css"](d, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[c ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[c ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), t = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, d["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](d, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === o && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var s, n, a, o, r = e(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, e(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
                }
                switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                    case e.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        a = this._trimAlignValue(n + o);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },
            click: function(e) {
                e.preventDefault()
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function(e) {
    function t(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.widget("ui.spinner", {
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
            var t = {},
                i = this.element;
            return e.each(["min", "max", "step"], function(e, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (t[s] = n)
            }), t
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(e) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", e)))
            },
            mousewheel: function(e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(e)
                    }, 100), e.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function i() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : void this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var i = this.options,
                s = e.ui.keyCode;
            switch (t.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, t), !0;
                case s.DOWN:
                    return this._repeat(null, -1, t), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, t), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(e) {
            return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(e, t, i) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, t, i)
            }, e), this._spin(t * this.options.step, i)
        },
        _spin: function(e, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function(e) {
            var t, i, s = this.options;
            return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e
        },
        _stop: function(e) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
        },
        _setOption: function(e, t) {
            if ("culture" === e || "numberFormat" === e) {
                var i = this._parse(this.element.val());
                return this.options[e] = t, void this.element.val(this._format(i))
            }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: t(function(e) {
            this._super(e), this._value(this.element.val())
        }),
        _parse: function(e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
        },
        _format: function(e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(e, t) {
            var i;
            "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(e) {
            this._stepUp(e)
        }),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop())
        },
        stepDown: t(function(e) {
            this._stepDown(e)
        }),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
        },
        pageUp: t(function(e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: t(function(e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function(e) {
            return arguments.length ? void t(this._value).call(this, e) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery),
function(e, t) {
    function i() {
        return ++n
    }

    function s(e) {
        return e.hash.length > 1 && decodeURIComponent(e.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }
    var n = 0,
        a = /#.*$/;
    e.widget("ui.tabs", {
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
            var t = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                s = this.options.collapsible,
                n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function(s, a) {
                return e(a).attr("aria-controls") === n ? (i = s, !1) : t
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(i) {
            var s = e(this.document[0].activeElement).closest("li"),
                n = this.tabs.index(s),
                a = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        n++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        a = !1, n--;
                        break;
                    case e.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n), t;
                    case e.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), t;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(i) {
            return i.altKey && i.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : t
        },
        _findNextTab: function(t, i) {
            function s() {
                return t > n && (t = 0), 0 > t && (t = n), t
            }
            for (var n = this.tabs.length - 1; - 1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function(e, i) {
            return "active" === e ? (this._activate(i), t) : "disabled" === e ? (this._setupDisabled(i), t) : (this._super(e, i), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(i), "heightStyle" === e && this._setupHeightStyle(i), t)
        },
        _tabId: function(e) {
            return e.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), function(e) {
                return i.index(e)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
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
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function(i, n) {
                var a, o, r, l = e(n).uniqueId().attr("id"),
                    c = e(n).closest("li"),
                    d = c.attr("aria-controls");
                s(n) ? (a = n.hash, o = t.element.find(t._sanitizeSelector(a))) : (r = t._tabId(c), a = "#" + r, o = t.element.find(a), o.length || (o = t._createPanel(r), o.insertAfter(t.panels[i - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), d && c.data("ui-tabs-aria-controls", d), c.attr({
                    "aria-controls": a.substring(1),
                    "aria-labelledby": l
                }), o.attr("aria-labelledby", l)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var i = {
                click: function(e) {
                    e.preventDefault()
                }
            };
            t && e.each(t.split(" "), function(e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, s = this.element.parent();
            "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    s = t.css("position");
                "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= e(this).outerHeight(!0)
            }), this.panels.each(function() {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                i = Math.max(i, e(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var i = this.options,
                s = this.active,
                n = e(t.currentTarget),
                a = n.closest("li"),
                o = a[0] === s[0],
                r = o && i.collapsible,
                l = r ? e() : this._getPanelForTab(a),
                c = s.length ? this._getPanelForTab(s) : e(),
                d = {
                    oldTab: s,
                    oldPanel: c,
                    newTab: r ? e() : a,
                    newPanel: l
                };
            t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), c.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(a), t), this._toggle(t, d))
        },
        _toggle: function(t, i) {
            function s() {
                a.running = !1, a._trigger("activate", t, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
            }
            var a = this,
                o = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var i, s = this._findActive(t);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var t = e(this),
                    i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var s = this.options.disabled;
            s !== !1 && (i === t ? s = !1 : (i = this._getIndex(i), s = e.isArray(s) ? e.map(s, function(e) {
                return e !== i ? e : null
            }) : e.map(this.tabs, function(e, t) {
                return t !== i ? t : null
            })), this._setupDisabled(s))
        },
        disable: function(i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === t) s = !0;
                else {
                    if (i = this._getIndex(i), -1 !== e.inArray(i, s)) return;
                    s = e.isArray(s) ? e.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var n = this,
                a = this.tabs.eq(t),
                o = a.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(a),
                l = {
                    tab: a,
                    panel: r
                };
            s(o[0]) || (this.xhr = e.ajax(this._ajaxSettings(o, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(e) {
                setTimeout(function() {
                    r.html(e), n._trigger("load", i, l)
                }, 1)
            }).complete(function(e, t) {
                setTimeout(function() {
                    "abort" === t && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), e === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, s) {
            var n = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, a) {
                    return n._trigger("beforeLoad", i, e.extend({
                        jqXHR: t,
                        ajaxSettings: a
                    }, s))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery),
function(e) {
    function t(t, i) {
        var s = (t.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
    }

    function i(t) {
        var i = t.data("ui-tooltip-id"),
            s = (t.attr("aria-describedby") || "").split(/\s+/),
            n = e.inArray(i, s); - 1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
    }
    var s = 0;
    e.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
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
        _setOption: function(t, i) {
            var s = this;
            return "disabled" === t ? (this[i ? "_disable" : "_enable"](), void(this.options[t] = i)) : (this._super(t, i), void("content" === t && e.each(this.tooltips, function(e, t) {
                s._updateContent(t)
            })))
        },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, function(i, s) {
                var n = e.Event("blur");
                n.target = n.currentTarget = s[0], t.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var i = this,
                s = e(t ? t.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function() {
                var t, s = e(this);
                s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, t))
        },
        _updateContent: function(e, t) {
            var i, s = this.options.content,
                n = this,
                a = t ? t.type : null;
            return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function(i) {
                e.data("ui-tooltip-open") && n._delay(function() {
                    t && (t.type = a), this._open(t, e, i)
                })
            }), void(i && this._open(t, e, i)))
        },
        _open: function(i, s, n) {
            function a(e) {
                c.of = e, o.is(":hidden") || o.position(c)
            }
            var o, r, l, c = e.extend({}, this.options.position);
            if (n) {
                if (o = this._find(s), o.length) return void o.find(".ui-tooltip-content").html(n);
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), o = this._tooltip(s), t(s, o.attr("id")), o.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: a
                }), a(i)) : o.position(e.extend({ of: s
                }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function() {
                    o.is(":visible") && (a(c.of), clearInterval(l))
                }, e.fx.interval)), this._trigger("open", i, {
                    tooltip: o
                }), r = {
                    keyup: function(t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var i = e.Event(t);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(o)
                    }
                }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
            }
        },
        close: function(t) {
            var s = this,
                n = e(t ? t.currentTarget : this.element),
                a = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), a.stop(!0), this._hide(a, this.options.hide, function() {
                s._removeTooltip(e(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, i) {
                e(i.element).attr("title", i.title), delete s.parents[t]
            }), this.closing = !0, this._trigger("close", t, {
                tooltip: a
            }), this.closing = !1)
        },
        _tooltip: function(t) {
            var i = "ui-tooltip-" + s++,
                n = e("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return e("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = t, n
        },
        _find: function(t) {
            var i = t.data("ui-tooltip-id");
            return i ? e("#" + i) : e()
        },
        _removeTooltip: function(e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, function(i, s) {
                var n = e.Event("blur");
                n.target = n.currentTarget = s[0], t.close(n, !0), e("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery), "bind" in Function.prototype || (Function.prototype.bind = function(e) {
        var t = this;
        if (arguments.length <= 1) return function() {
            return t.apply(e, arguments)
        };
        var i = Array.prototype.slice.call(arguments, 1);
        return function() {
            return t.apply(e, 0 === arguments.length ? i : i.concat(Array.prototype.slice.call(arguments)))
        }
    }), "trim" in String.prototype || (String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(e, t) {
        void 0 === t && (t = 0), 0 > t && (t += this.length), 0 > t && (t = 0);
        for (var i = this.length; i > t; t++)
            if (t in this && this[t] === e) return t;
        return -1
    }), "lastIndexOf" in Array.prototype || (Array.prototype.lastIndexOf = function(e, t) {
        for (void 0 === t && (t = this.length - 1), 0 > t && (t += this.length), t > this.length - 1 && (t = this.length - 1), t++; t-- > 0;)
            if (t in this && this[t] === e) return t;
        return -1
    }), "forEach" in Array.prototype || (Array.prototype.forEach = function(e, t) {
        for (var i = 0, s = this.length; s > i; i++) i in this && e.call(t, this[i], i, this)
    }), "map" in Array.prototype || (Array.prototype.map = function(e, t) {
        for (var i = new Array(this.length), s = 0, n = this.length; n > s; s++) s in this && (i[s] = e.call(t, this[s], s, this));
        return i
    }), "filter" in Array.prototype || (Array.prototype.filter = function(e, t) {
        for (var i, s = [], n = 0, a = this.length; a > n; n++) n in this && e.call(t, i = this[n], n, this) && s.push(i);
        return s
    }), "every" in Array.prototype || (Array.prototype.every = function(e, t) {
        for (var i = 0, s = this.length; s > i; i++)
            if (i in this && !e.call(t, this[i], i, this)) return !1;
        return !0
    }), "some" in Array.prototype || (Array.prototype.some = function(e, t) {
        for (var i = 0, s = this.length; s > i; i++)
            if (i in this && e.call(t, this[i], i, this)) return !0;
        return !1
    }),
    function() {
        for (var e, t = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], s = i.length, n = window.console = window.console || {}; s--;) e = i[s], n[e] || (n[e] = t)
    }(),
    function(e) {
        e.widget("accordiona.accordionA", {
            options: {
                section: "> section",
                header: "> header",
                content: "> .content"
            },
            _create: function() {
                this.$window = e(window), this.$document = e(document), this.sections = this.element.find(this.options.section), this.html = e("html").addClass("js"), this.element.attr("role", "tablist").delegate(this.sections.prop("nodeName") + " " + this.options.header, "click focus blur".split(" ").concat("").join("." + this.namespace + " "), e.proxy(function(t) {
                    {
                        var i = e(t.target).closest(this.sections),
                            s = i.find(this.options.header);
                        i.find(this.options.content)
                    }
                    switch (t.type) {
                        case "click":
                            s.addClass("no-outline"), this.toggle(i);
                            break;
                        case "focusin":
                            i.bind("keydown." + this.namespace, e.proxy(function(e) {
                                switch (e.keyCode) {
                                    case 9:
                                        s.removeClass("no-outline");
                                        break;
                                    case 32:
                                        e.preventDefault(), this.toggle(i)
                                }
                            }, this));
                            break;
                        case "focusout":
                            i.unbind("keydown." + this.namespace)
                    }
                }, this)), this.sections.filter('[aria-expanded="true"]:not(:first)').removeAttr("aria-expanded"), this.sections.each(e.proxy(function(t, i) {
                    var s = e(i),
                        n = s.find(this.options.content);
                    s.find(this.options.header).attr({
                        role: "tab",
                        tabindex: 0
                    }), n.attr("role", "tabpanel").data(this.namespace, {
                        height: n.height()
                    }).addClass("no-transition"), this.toggle(s, "true" === s.attr("aria-expanded")), setTimeout(function() {
                        n.removeClass("no-transition")
                    })
                }, this)), this._hash()
            },
            destroy: function() {
                this.$window.unbind(this.namespace), this.$document.undelegate(this.namespace), this.element.undelegate(this.namespace), e.Widget.prototype.destroy.call(this)
            },
            refresh: function() {
                e.Widget.prototype.destroy.call(this), e.Widget.prototype._create.call(this)
            },
            toggle: function(t, i) {
                if (!t.jquery) switch (typeof t) {
                    case "object":
                        t = e(t);
                        break;
                    case "string":
                        t = this.element.find(t);
                        break;
                    case "number":
                        t = this.sections.eq(t)
                }
                if (t.length) {
                    "boolean" != typeof i && (i = "true" !== t.attr("aria-expanded")), i && this.toggle(this.sections.filter('[aria-expanded="true"]'), !1);
                    var s = t.attr("aria-expanded", i).toggleClass("expanded", i).find(this.options.content),
                        n = 0;
                    if (i)
                        for (var a = this.sections.length - 1; a >= 0; a--) e(this.sections[a]).hasClass("expanded") && e(this.sections[a]).find(".content").children().each(function() {
                            n += e(this).outerHeight(!0)
                        });
                    s.height(i ? n : 0), this._trigger("toggle", null, {
                        expand: i
                    })
                }
                return this
            },
            _hash: function() {
                location.hash && this._expandHash(location.hash), this.$document.delegate('a[href^="#"]:not([href="#"])', "click." + this.namespace, e.proxy(function(t) {
                    this._expandHash(e(t.target).attr("href"))
                }, this)), this.$window.bind("hashchange." + this.namespace, e.proxy(function() {
                    this._expandHash(location.hash)
                }, this))
            },
            _expandHash: function(t) {
                var i = this.element.find(t);
                if (i.length) {
                    var s = this.$document.height() > this.$window.height();
                    s && this.element.addClass("no-transition"), this.toggle(i.closest(this.sections), !0), s && setTimeout(e.proxy(function() {
                        this.element.removeClass("no-transition")
                    }, this))
                }
            }
        })
    }(jQuery), ! function(e) {
        function t(t, i) {
            var s = "obj" + ("" + Math.random()).slice(2, 15),
                n = '<object class="fp-engine" id="' + s + '" name="' + s + '" ';
            n += e.browser.msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + t + '" type="application/x-shockwave-flash">';
            var a = {
                width: "100%",
                height: "100%",
                allowscriptaccess: "always",
                wmode: "transparent",
                quality: "high",
                flashvars: "",
                movie: t + (e.browser.msie ? "?" + s : ""),
                name: s
            };
            return e.each(i, function(e, t) {
                a.flashvars += e + "=" + t + "&"
            }), e.each(a, function(e, t) {
                n += '<param name="' + e + '" value="' + t + '"/>'
            }), n += "</object>", e(n)
        }

        function i(e, t) {
            return t = t || 100, Math.round(e * t) / t
        }

        function s(e) {
            return /mpegurl/i.test(e) ? "application/x-mpegurl" : "video/" + e
        }

        function n(e) {
            return /^(video|application)/.test(e) || (e = s(e)), !!v.canPlayType(e).replace("no", "")
        }

        function a(t, i) {
            var s = e.grep(t, function(e) {
                return e.type === i
            });
            return s.length ? s[0] : null
        }

        function o(e) {
            var t = e.attr("src"),
                i = e.attr("type") || "",
                s = t.split(w)[1];
            return i = /mpegurl/.test(i) ? "mpegurl" : i.replace("video/", ""), {
                src: t,
                suffix: s || i,
                type: i || s
            }
        }

        function r(t) {
            var i = this,
                s = [];
            e("source", t).each(function() {
                s.push(o(e(this)))
            }), s.length || s.push(o(t)), i.initialSources = s, i.resolve = function(t) {
                return t ? (e.isArray(t) ? t = {
                    sources: e.map(t, function(t) {
                        var i, s = e.extend({}, t);
                        return e.each(t, function(e) {
                            i = e
                        }), s.type = i, s.src = t[i], delete s[i], s
                    })
                } : "string" == typeof t && (t = {
                    src: t,
                    sources: []
                }, e.each(s, function(e, i) {
                    "flash" != i.type && t.sources.push({
                        type: i.type,
                        src: t.src.replace(w, "." + i.suffix + "$2")
                    })
                })), t) : {
                    sources: s
                }
            }
        }

        function l(e) {
            return e = parseInt(e, 10), e >= 10 ? e : "0" + e
        }

        function c(e) {
            e = e || 0;
            var t = Math.floor(e / 3600),
                i = Math.floor(e / 60);
            return e -= 60 * i, t >= 1 ? (i -= 60 * t, t + ":" + l(i) + ":" + l(e)) : l(i) + ":" + l(e)
        }! function(e) {
            if (!e.browser) {
                var t = e.browser = {},
                    i = navigator.userAgent.toLowerCase(),
                    s = /(chrome)[ \/]([\w.]+)/.exec(i) || /(safari)[ \/]([\w.]+)/.exec(i) || /(webkit)[ \/]([\w.]+)/.exec(i) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i) || /(msie) ([\w.]+)/.exec(i) || i.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i) || [];
                s[1] && (t[s[1]] = !0, t.version = s[2] || "0")
            }
        }(jQuery), e(function() {
            "function" == typeof e.fn.flowplayer && e("video").parent(".flowplayer").flowplayer()
        });
        var d = [],
            u = [],
            h = window.navigator.userAgent;
        window.flowplayer = function(t) {
            return e.isFunction(t) ? u.push(t) : "number" == typeof t || void 0 === t ? d[t || 0] : e(t).data("flowplayer")
        }, e(window).on("beforeunload", function() {
            e.each(d, function(t, i) {
                i.conf.splash ? i.unload() : i.bind("error", function() {
                    e(".flowplayer.is-error .fp-message").remove()
                })
            })
        });
        var p = !1;
        try {
            "object" == typeof window.localStorage && (window.localStorage.flowplayerTestStorage = "test", p = !0)
        } catch (f) {}
        e.extend(flowplayer, {
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
                volume: p ? "true" == localStorage.muted ? 0 : isNaN(localStorage.volume) ? 1 : localStorage.volume || 1 : 1,
                errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."],
                errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"],
                playlist: []
            }
        });
        var g = 1;
        e.fn.flowplayer = function(t, i) {
            return "string" == typeof t && (t = {
                swf: t
            }), e.isFunction(t) && (i = t, t = {}), !t && this.data("flowplayer") || this.each(function() {
                var s, n, a = e(this).addClass("is-loading"),
                    o = e.extend({}, flowplayer.defaults, flowplayer.conf, t, a.data()),
                    l = e("video", a).addClass("fp-engine").removeAttr("controls"),
                    c = l.length ? new r(l) : null,
                    h = {};
                if (o.playlist.length) {
                    var p, f = l.attr("preload");
                    l.length && l.replaceWith(p = e("<p />")), l = e("<video />").addClass("fp-engine"), p ? p.replaceWith(l) : a.prepend(l), flowplayer.support.video && l.attr("preload", f), "string" == typeof o.playlist[0] ? l.attr("src", o.playlist[0]) : e.each(o.playlist[0], function(t, i) {
                        for (var s in i) i.hasOwnProperty(s) && l.append(e("<source />").attr({
                            type: "video/" + s,
                            src: i[s]
                        }))
                    }), c = new r(l)
                }
                var m = a.data("flowplayer");
                m && m.unload(), a.data("fp-player_id", a.data("fp-player_id") || g++);
                try {
                    h = window.localStorage || h
                } catch (v) {}
                var b = this.currentStyle && "rtl" === this.currentStyle.direction || window.getComputedStyle && "rtl" === window.getComputedStyle(this, null).getPropertyValue("direction");
                b && a.addClass("is-rtl");
                var y = m || {
                    conf: o,
                    currentSpeed: 1,
                    volumeLevel: "undefined" == typeof o.volume ? 1 * h.volume : o.volume,
                    video: {},
                    disabled: !1,
                    finished: !1,
                    loading: !1,
                    muted: "true" == h.muted || o.muted,
                    paused: !1,
                    playing: !1,
                    ready: !1,
                    splash: !1,
                    rtl: b,
                    load: function(t, i) {
                        if (!(y.error || y.loading || y.disabled)) {
                            if (t = c.resolve(t), e.extend(t, n.pick(t.sources)), t.src) {
                                var s = e.Event("load");
                                a.trigger(s, [y, t, n]), s.isDefaultPrevented() ? y.loading = !1 : (n.load(t), e.isFunction(t) && (i = t), i && a.one("ready", i))
                            }
                            return y
                        }
                    },
                    pause: function(e) {
                        return !y.ready || y.seeking || y.disabled || y.loading || (n.pause(), y.one("pause", e)), y
                    },
                    resume: function() {
                        return y.ready && y.paused && !y.disabled && (n.resume(), y.finished && (y.trigger("resume", [y]), y.finished = !1)), y
                    },
                    toggle: function() {
                        return y.ready ? y.paused ? y.resume() : y.pause() : y.load()
                    },
                    seek: function(t, i) {
                        if (y.ready) {
                            if ("boolean" == typeof t) {
                                var o = .1 * y.video.duration;
                                t = y.video.time + (t ? o : -o)
                            }
                            t = s = Math.min(Math.max(t, 0), y.video.duration).toFixed(1);
                            var r = e.Event("beforeseek");
                            a.trigger(r, [y, t]), r.isDefaultPrevented() ? (y.seeking = !1, a.toggleClass("is-seeking", y.seeking)) : (n.seek(t), e.isFunction(i) && a.one("seek", i))
                        }
                        return y
                    },
                    seekTo: function(e, t) {
                        var i = void 0 === e ? s : .1 * y.video.duration * e;
                        return y.seek(i, t)
                    },
                    mute: function(e) {
                        return void 0 === e && (e = !y.muted), h.muted = y.muted = e, h.volume = isNaN(h.volume) ? o.volume : h.volume, y.volume(e ? 0 : h.volume, !0), y.trigger("mute", e), y
                    },
                    volume: function(e, t) {
                        return y.ready && (e = Math.min(Math.max(e, 0), 1), t || (h.volume = e), n.volume(e)), y
                    },
                    speed: function(t, i) {
                        return y.ready && ("boolean" == typeof t && (t = o.speeds[e.inArray(y.currentSpeed, o.speeds) + (t ? 1 : -1)] || y.currentSpeed), n.speed(t), i && a.one("speed", i)), y
                    },
                    stop: function() {
                        return y.ready && (y.pause(), y.seek(0, function() {
                            a.trigger("stop")
                        })), y
                    },
                    unload: function() {
                        return a.hasClass("is-embedding") || (o.splash ? (y.trigger("unload"), n.unload()) : y.stop()), y
                    },
                    disable: function(e) {
                        return void 0 === e && (e = !y.disabled), e != y.disabled && (y.disabled = e, y.trigger("disable", e)), y
                    }
                };
                y.conf = e.extend(y.conf, o), e.each(["bind", "one", "unbind"], function(e, t) {
                    y[t] = function(e, i) {
                        return a[t](e, i), y
                    }
                }), y.trigger = function(e, t) {
                    return a.trigger(e, [y, t]), y
                }, a.data("flowplayer") || a.bind("boot", function() {
                    return e.each(["autoplay", "loop", "preload", "poster"], function(e, t) {
                        var i = l.attr(t);
                        void 0 !== i && (o[t] = i ? i : !0)
                    }), (o.splash || a.hasClass("is-splash") || !flowplayer.support.firstframe) && (y.forcedSplash = !o.splash && !a.hasClass("is-splash"), y.splash = o.splash = o.autoplay = !0, a.addClass("is-splash"), flowplayer.support.video && l.attr("preload", "none")), (o.live || a.hasClass("is-live")) && (y.live = o.live = !0, a.addClass("is-live")), e.each(u, function() {
                        this(y, a)
                    }), n = flowplayer.engine[o.engine], n && (n = n(y, a)), n.pick(c.initialSources) ? y.engine = o.engine : e.each(flowplayer.engine, function(e) {
                        return e != o.engine ? (n = this(y, a), n.pick(c.initialSources) && (y.engine = e), !1) : void 0
                    }), d.push(y), y.engine ? (o.splash ? y.unload() : y.load(), o.disabled && y.disable(), n.volume(y.volumeLevel), void a.one("ready", i)) : y.trigger("error", {
                        code: flowplayer.support.flashVideo ? 5 : 10
                    })
                }).bind("load", function(t, i) {
                    o.splash && e(".flowplayer").filter(".is-ready, .is-loading").not(a).each(function() {
                        var t = e(this).data("flowplayer");
                        t.conf.splash && t.unload()
                    }), a.addClass("is-loading"), i.loading = !0
                }).bind("ready", function(e, t, i) {
                    function s() {
                        a.removeClass("is-loading"), t.loading = !1
                    }
                    i.time = 0, t.video = i, o.splash ? a.one("progress", s) : s(), t.muted ? t.mute(!0) : t.volume(t.volumeLevel)
                }).bind("unload", function() {
                    o.splash && l.remove(), a.removeClass("is-loading"), y.loading = !1
                }).bind("ready unload", function(e) {
                    var t = "ready" == e.type;
                    a.toggleClass("is-splash", !t).toggleClass("is-ready", t), y.ready = t, y.splash = !t
                }).bind("progress", function(e, t, i) {
                    t.video.time = i
                }).bind("speed", function(e, t, i) {
                    t.currentSpeed = i
                }).bind("volume", function(e, t, i) {
                    t.volumeLevel = Math.round(100 * i) / 100, t.muted ? i && t.mute(!1) : h.volume = i
                }).bind("beforeseek seek", function(e) {
                    y.seeking = "beforeseek" == e.type, a.toggleClass("is-seeking", y.seeking)
                }).bind("ready pause resume unload finish stop", function(e, t, i) {
                    y.paused = /pause|finish|unload|stop/.test(e.type), "ready" == e.type && (y.paused = "none" == o.preload, i && (y.paused = !i.duration || !o.autoplay && "none" != o.preload)), y.playing = !y.paused, a.toggleClass("is-paused", y.paused).toggleClass("is-playing", y.playing), y.load.ed || y.pause()
                }).bind("finish", function() {
                    y.finished = !0
                }).bind("error", function() {
                    l.remove()
                }), a.trigger("boot", [y, a]).data("flowplayer", y)
            })
        }, ! function() {
            var t = function(e) {
                    var t = /Version\/(\d\.\d)/.exec(e);
                    return t && t.length > 1 ? parseFloat(t[1], 10) : 0
                },
                i = flowplayer.support,
                s = e.browser,
                n = e("<video loop autoplay preload/>")[0],
                a = s.msie,
                o = navigator.userAgent,
                r = /iPad|MeeGo/.test(o) && !/CriOS/.test(o),
                l = /iPad/.test(o) && /CriOS/.test(o),
                c = /iP(hone|od)/i.test(o) && !/iPad/.test(o),
                d = /Android/.test(o) && !/Firefox/.test(o),
                u = /Android/.test(o) && /Firefox/.test(o),
                h = /Silk/.test(o),
                p = /IEMobile/.test(o),
                f = (r ? t(o) : 0, d ? parseFloat(/Android\ (\d\.\d)/.exec(o)[1], 10) : 0);
            e.extend(i, {
                subtitles: !!n.addTextTrack,
                fullscreen: !d && ("function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(o) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen),
                inlineBlock: !(a && s.version < 8),
                touch: "ontouchstart" in window,
                dataload: !r && !c && !p,
                zeropreload: !a && !d,
                volume: !(r || d || c || h || l),
                cachedVideoTag: !(r || c || l || p),
                firstframe: !(c || r || d || h || l || p || u),
                inlineVideo: !c && !p && (!d || f >= 3),
                hlsDuration: !s.safari || r || c || l,
                seekable: !r && !l
            });
            try {
                var g = navigator.plugins["Shockwave Flash"],
                    m = a ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : g.description;
                a || g[0].enabledPlugin ? (m = m.split(/\D+/), m.length && !m[0] && (m = m.slice(1)), i.flashVideo = m[0] > 9 || 9 == m[0] && m[3] >= 115) : i.flashVideo = !1
            } catch (v) {}
            try {
                i.video = !!n.canPlayType, i.video && n.canPlayType("video/mp4")
            } catch (b) {
                i.video = !1
            }
            i.animation = function() {
                for (var t = ["", "Webkit", "Moz", "O", "ms", "Khtml"], i = e("<p/>")[0], s = 0; s < t.length; s++)
                    if ("undefined" !== i.style[t[s] + "AnimationName"]) return !0
            }()
        }(), window.attachEvent && window.attachEvent("onbeforeunload", function() {
            __flash_savedUnloadHandler = __flash_unloadHandler = function() {}
        }), flowplayer.engine.flash = function(i, s) {
            var n, a, o, r = i.conf,
                l = (i.video, {
                    pick: function(t) {
                        if (flowplayer.support.flashVideo) {
                            var i = e.grep(t, function(e) {
                                return "flash" == e.type
                            })[0];
                            if (i) return i;
                            for (var s, n = 0; n < t.length; n++)
                                if (s = t[n], /mp4|flv/.test(s.type)) return s
                        }
                    },
                    load: function(l) {
                        function c(e) {
                            return e.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
                        }
                        var d = e("video", s),
                            u = c(l.src);
                        is_absolute = /^https?:/.test(u);
                        try {
                            d.length > 0 && flowplayer.support.video && d[0].pause()
                        } catch (h) {}
                        var p = function() {
                                d.remove()
                            },
                            f = function(t) {
                                return e.grep(t, function(e) {
                                    return !!d[0].canPlayType("video/" + e.type)
                                }).length > 0
                            };
                        if (flowplayer.support.video && d.prop("autoplay") && f(l.sources) ? d.one("timeupdate", p) : p(), is_absolute || r.rtmp || (u = e("<img/>").attr("src", u)[0].src), o) o.__play(u);
                        else {
                            n = "fp" + ("" + Math.random()).slice(3, 15);
                            var g = {
                                hostname: r.embedded ? r.hostname : location.hostname,
                                url: u,
                                callback: "jQuery." + n
                            };
                            s.data("origin") && (g.origin = s.data("origin")), is_absolute && delete r.rtmp, e.each(["key", "autoplay", "preload", "rtmp", "loop", "debug", "preload", "splash", "bufferTime"], function(e, t) {
                                r[t] && (g[t] = r[t])
                            }), g.rtmp && (g.rtmp = c(g.rtmp)), a = t(r.swf, g), a.prependTo(s), o = a[0], setTimeout(function() {
                                try {
                                    if (!o.PercentLoaded()) return s.trigger("error", [i, {
                                        code: 7,
                                        url: r.swf
                                    }])
                                } catch (e) {}
                            }, 5e3), setTimeout(function() {
                                "undefined" == typeof o.PercentLoaded && s.trigger("flashdisabled", [i])
                            }, 1e3), e[n] = function(t, s) {
                                r.debug && "status" != t && console.log("--", t, s);
                                var n = e.Event(t);
                                switch (t) {
                                    case "ready":
                                        s = e.extend(l, s);
                                        break;
                                    case "click":
                                        n.flash = !0;
                                        break;
                                    case "keydown":
                                        n.which = s;
                                        break;
                                    case "seek":
                                        l.time = s;
                                        break;
                                    case "status":
                                        i.trigger("progress", s.time), s.buffer < l.bytes && !l.buffered ? (l.buffer = s.buffer / l.bytes * l.duration, i.trigger("buffer", l.buffer)) : l.buffered || (l.buffered = !0, i.trigger("buffered"))
                                }
                                "buffered" != t && setTimeout(function() {
                                    i.trigger(n, s)
                                }, 1)
                            }
                        }
                    },
                    speed: e.noop,
                    unload: function() {
                        o && o.__unload && o.__unload(), delete e[n], e("object", s).remove(), o = 0
                    }
                });
            e.each("pause,resume,seek,volume".split(","), function(e, t) {
                l[t] = function(e) {
                    try {
                        i.ready && ("seek" == t && i.video.time && !i.paused && i.trigger("beforeseek"), void 0 === e ? o["__" + t]() : o["__" + t](e))
                    } catch (n) {
                        if ("undefined" == typeof o["__" + t]) return s.trigger("flashdisabled", [i]);
                        throw n
                    }
                }
            });
            var c = e(window);
            return i.bind("ready fullscreen fullscreen-exit", function(t) {
                var n = s.height(),
                    a = s.width();
                if (i.conf.flashfit || /full/.test(t.type)) {
                    var o, r, l = i.isFullscreen,
                        d = l && T,
                        u = !flowplayer.support.inlineBlock,
                        h = l ? d ? screen.width : c.width() : a,
                        p = l ? d ? screen.height : c.height() : n,
                        f = 0,
                        g = 0,
                        m = u ? a : "",
                        v = u ? n : "";
                    (i.conf.flashfit || "fullscreen" === t.type) && (o = i.video.width / i.video.height, r = i.video.height / i.video.width, v = Math.max(r * h), m = Math.max(o * p), v = v > p ? m * r : v, v = Math.min(Math.round(v), p), m = m > h ? v * o : m, m = Math.min(Math.round(m), h), g = Math.max(Math.round((p + g - v) / 2), 0), f = Math.max(Math.round((h + f - m) / 2), 0)), e("object", s).css({
                        width: m,
                        height: v,
                        marginTop: g,
                        marginLeft: f
                    })
                }
            }), l
        };
        var m, v = e("<video/>")[0],
            b = {
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
            y = function(t) {
                return m ? m.attr({
                    type: s(t.type),
                    src: t.src
                }) : m = e("<video/>", {
                    src: t.src,
                    type: s(t.type),
                    "class": "fp-engine",
                    autoplay: "autoplay",
                    preload: "none",
                    "x-webkit-airplay": "allow"
                })
            };
        flowplayer.engine.html5 = function(t, s) {
            function o(a, o, r) {
                a.listeners && a.listeners.hasOwnProperty(s.data("fp-player_id")) || ((a.listeners || (a.listeners = {}))[s.data("fp-player_id")] = !0, o.bind("error", function(i) {
                    try {
                        if (i.originalEvent && e(i.originalEvent.originalTarget).is("img")) return i.preventDefault();
                        n(e(i.target).attr("type")) && t.trigger("error", {
                            code: 4
                        })
                    } catch (s) {}
                }), e.each(b, function(n, o) {
                    a.addEventListener(n, function(c) {
                        if ("progress" == o && c.srcElement && 0 === c.srcElement.readyState && setTimeout(function() {
                                t.video.duration || (o = "error", t.trigger(o, {
                                    code: 4
                                }))
                            }, 1e4), p.debug && !/progress/.test(o) && console.log(n, "->", o, c), (t.ready || /ready|error/.test(o)) && o && e("video", s).length) {
                            var d, h = e.Event(o);
                            switch (o) {
                                case "ready":
                                    d = e.extend(r, {
                                        duration: a.duration,
                                        width: a.videoWidth,
                                        height: a.videoHeight,
                                        url: a.currentSrc,
                                        src: a.currentSrc
                                    });
                                    try {
                                        d.seekable = a.seekable && a.seekable.end(null)
                                    } catch (f) {}
                                    if (l = l || setInterval(function() {
                                            try {
                                                d.buffer = a.buffered.end(null)
                                            } catch (e) {}
                                            d.buffer && (i(d.buffer, 1e3) < i(d.duration, 1e3) && !d.buffered ? t.trigger("buffer", c) : d.buffered || (d.buffered = !0, t.trigger("buffer", c).trigger("buffered", c), clearInterval(l), l = 0))
                                        }, 250), !p.live && !d.duration && !u.hlsDuration && "loadeddata" === n) {
                                        var g = function() {
                                            d.duration = a.duration;
                                            try {
                                                d.seekable = a.seekable && a.seekable.end(null)
                                            } catch (e) {}
                                            t.trigger(h, d), a.removeEventListener("durationchange", g)
                                        };
                                        return void a.addEventListener("durationchange", g)
                                    }
                                    break;
                                case "progress":
                                case "seek":
                                    {
                                        t.video.duration
                                    }
                                    if (a.currentTime > 0) {
                                        d = Math.max(a.currentTime, 0);
                                        break
                                    }
                                    if ("progress" == o) return;
                                case "speed":
                                    d = i(a.playbackRate);
                                    break;
                                case "volume":
                                    d = i(a.volume);
                                    break;
                                case "error":
                                    try {
                                        d = (c.srcElement || c.originalTarget).error
                                    } catch (m) {
                                        return
                                    }
                            }
                            t.trigger(h, d)
                        }
                    }, !1)
                }))
            }
            var r, l, c, d = e("video", s),
                u = flowplayer.support,
                h = e("track", d),
                p = t.conf;
            return r = {
                pick: function(e) {
                    if (u.video) {
                        if (p.videoTypePreference) {
                            var t = a(e, p.videoTypePreference);
                            if (t) return t
                        }
                        for (var i = 0; i < e.length; i++)
                            if (n(e[i].type)) return e[i]
                    }
                },
                load: function(i) {
                    if (p.splash && !c) d = y(i).prependTo(s), u.inlineVideo || d.css({
                        position: "absolute",
                        top: "-9999em"
                    }), h.length && d.append(h.attr("default", "")), p.loop && d.attr("loop", "loop"), c = d[0];
                    else {
                        c = d[0];
                        var n = d.find("source");
                        !c.src && n.length && (c.src = i.src, n.remove()), t.video.src && i.src != t.video.src ? (d.attr("autoplay", "autoplay"), c.src = i.src) : "none" != p.preload && u.dataload || (u.zeropreload ? t.trigger("ready", i).trigger("pause").one("ready", function() {
                            s.trigger("resume", [t])
                        }) : t.one("ready", function() {
                            s.trigger("pause", [t])
                        }))
                    }
                    o(c, e("source", d).add(d), i), "none" == p.preload && u.zeropreload && u.dataload || c.load(), p.splash && c.load()
                },
                pause: function() {
                    c.pause()
                },
                resume: function() {
                    c.play()
                },
                speed: function(e) {
                    c.playbackRate = e
                },
                seek: function(e) {
                    try {
                        var i = t.paused;
                        c.currentTime = e, i && c.pause()
                    } catch (s) {}
                },
                volume: function(e) {
                    c.volume = e
                },
                unload: function() {
                    e("video.fp-engine", s).remove(), u.cachedVideoTag || (m = null), l = clearInterval(l), c = 0
                }
            }
        };
        var w = /\.(\w{3,4})(\?.*)?$/i;
        e.throttle = function(e, t) {
            var i;
            return function() {
                i || (e.apply(this, arguments), i = 1, setTimeout(function() {
                    i = 0
                }, t))
            }
        }, e.fn.slider2 = function(t) {
            var i = /iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);
            return this.each(function() {
                var s, n, a, o, r, l, c, d, u = e(this),
                    h = e(document),
                    p = u.children(":last"),
                    f = !1,
                    g = function() {
                        n = u.offset(), a = u.width(), o = u.height(), l = r ? o : a, d = y(c)
                    },
                    m = function(e) {
                        s || e == w.value || c && !(c > e) || (u.trigger("slide", [e]), w.value = e)
                    },
                    v = function(e) {
                        var i = e.pageX;
                        !i && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length && (i = e.originalEvent.touches[0].pageX);
                        var s = r ? e.pageY - n.top : i - n.left;
                        s = Math.max(0, Math.min(d || l, s));
                        var a = s / l;
                        return r && (a = 1 - a), t && (a = 1 - a), b(a, 0, !0)
                    },
                    b = function(e, t) {
                        void 0 === t && (t = 0), e > 1 && (e = 1);
                        var s = Math.round(1e3 * e) / 10 + "%";
                        return (!c || c >= e) && (i || p.stop(), f ? p.css("width", s) : p.animate(r ? {
                            height: s
                        } : {
                            width: s
                        }, t, "linear")), e
                    },
                    y = function(e) {
                        return Math.max(0, Math.min(l, r ? (1 - e) * o : e * a))
                    },
                    w = {
                        max: function(e) {
                            c = e
                        },
                        disable: function(e) {
                            s = e
                        },
                        slide: function(e, t, i) {
                            g(), i && m(e), b(e, t)
                        },
                        disableAnimation: function(e) {
                            f = e !== !1
                        }
                    };
                g(), u.data("api", w).bind("mousedown.sld touchstart", function(t) {
                    if (t.preventDefault(), !s) {
                        var i = e.throttle(m, 100);
                        g(), w.dragging = !0, u.addClass("is-dragging"), m(v(t)), h.bind("mousemove.sld touchmove", function(e) {
                            e.preventDefault(), i(v(e))
                        }).one("mouseup touchend", function() {
                            w.dragging = !1, u.removeClass("is-dragging"), h.unbind("mousemove.sld touchmove")
                        })
                    }
                })
            })
        }, flowplayer(function(t, i) {
            function s(t) {
                return e(".fp-" + t, i)
            }

            function n(t) {
                ("0px" === i.css("width") || "0px" === i.css("height") || t !== flowplayer.defaults.ratio) && (parseInt(b, 10) || g.css("paddingTop", 100 * t + "%")), l.inlineBlock || e("object", i).height(i.height())
            }

            function a(e) {
                i.toggleClass("is-mouseover", e).toggleClass("is-mouseout", !e)
            }
            var o, r = t.conf,
                l = flowplayer.support;
            i.find(".fp-ratio,.fp-ui").remove(), i.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/></div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            </div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"/>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"/>            <em class="duration">00:00</em>         </div>         <div class="message"><h2/><p/></div>      </div>'.replace(/class="/g, 'class="fp-'));
            var d = s("progress"),
                u = s("buffer"),
                h = s("elapsed"),
                p = s("remaining"),
                f = s("waiting"),
                g = s("ratio"),
                m = s("speed"),
                v = s("duration"),
                b = g.css("paddingTop"),
                y = s("timeline").slider2(t.rtl),
                w = y.data("api"),
                N = (s("volume"), s("fullscreen")),
                k = s("volumeslider").slider2(t.rtl),
                x = k.data("api"),
                _ = i.is(".fixed-controls, .no-toggle");
            w.disableAnimation(i.hasClass("is-touch")), l.animation || f.html("<p>loading &hellip;</p>"), n(r.ratio);
            try {
                r.fullscreen || N.remove()
            } catch (C) {
                N.remove()
            }
            t.bind("ready", function() {
                var e = t.video.duration;
                w.disable(t.disabled || !e), r.adaptiveRatio && n(t.video.height / t.video.width), v.add(p).html(c(e)), e >= 3600 && i.addClass("is-long") || i.removeClass("is-long"), x.slide(t.volumeLevel)
            }).bind("unload", function() {
                b || g.css("paddingTop", "")
            }).bind("buffer", function() {
                var e = t.video,
                    i = e.buffer / e.duration;
                !e.seekable && l.seekable && w.max(i), 1 > i ? u.css("width", 100 * i + "%") : u.css({
                    width: "100%"
                })
            }).bind("speed", function(e, t, i) {
                m.text(i + "x").addClass("fp-hilite"), setTimeout(function() {
                    m.removeClass("fp-hilite")
                }, 1e3)
            }).bind("buffered", function() {
                u.css({
                    width: "100%"
                }), w.max(1)
            }).bind("progress", function() {
                var e = t.video.time,
                    i = t.video.duration;
                w.dragging || w.slide(e / i, t.seeking ? 0 : 250), h.html(c(e)), p.html("-" + c(i - e))
            }).bind("finish resume seek", function(e) {
                i.toggleClass("is-finished", "finish" == e.type)
            }).bind("stop", function() {
                h.html(c(0)), w.slide(0, 100)
            }).bind("finish", function() {
                h.html(c(t.video.duration)), w.slide(1, 100), i.removeClass("is-seeking")
            }).bind("beforeseek", function() {
                d.stop()
            }).bind("volume", function() {
                x.slide(t.volumeLevel)
            }).bind("disable", function() {
                var e = t.disabled;
                w.disable(e), x.disable(e), i.toggleClass("is-disabled", t.disabled)
            }).bind("mute", function(e, t, s) {
                i.toggleClass("is-muted", s)
            }).bind("error", function(t, s, n) {
                if (i.removeClass("is-loading").addClass("is-error"), n) {
                    n.message = r.errors[n.code], s.error = !0;
                    var a = e(".fp-message", i);
                    e("h2", a).text((s.engine || "html5") + ": " + n.message), e("p", a).text(n.url || s.video.url || s.video.src || r.errorUrls[n.code]), i.unbind("mouseenter click").removeClass("is-mouseover")
                }
            }).bind("mouseenter mouseleave", function(e) {
                if (!_) {
                    var t, s = "mouseenter" == e.type;
                    a(s), s ? (i.bind("pause.x mousemove.x volume.x", function() {
                        a(!0), t = new Date
                    }), o = setInterval(function() {
                        new Date - t > 5e3 && (a(!1), t = new Date)
                    }, 100)) : (i.unbind(".x"), clearInterval(o))
                }
            }).bind("mouseleave", function() {
                (w.dragging || x.dragging) && i.addClass("is-mouseover").removeClass("is-mouseout")
            }).bind("click.player", function(i) {
                return e(i.target).is(".fp-ui, .fp-engine") || i.flash ? (i.preventDefault(), t.toggle()) : void 0
            }).bind("contextmenu", function(t) {
                t.preventDefault();
                var s = i.offset(),
                    n = e(window),
                    a = t.clientX - s.left,
                    o = t.clientY - s.top + n.scrollTop(),
                    r = i.find(".fp-context-menu").css({
                        left: a + "px",
                        top: o + "px",
                        display: "block"
                    }).on("click", function(e) {
                        e.stopPropagation()
                    });
                e("html").on("click.outsidemenu", function() {
                    r.hide(), e("html").off("click.outsidemenu")
                })
            }).bind("flashdisabled", function() {
                i.addClass("is-flash-disabled").one("ready", function() {
                    i.removeClass("is-flash-disabled").find(".fp-flash-disabled").remove()
                }).append('<div class="fp-flash-disabled">Adobe Flash is disabled for this page, click player area to enable.</div>')
            }), r.poster && i.css("backgroundImage", "url(" + r.poster + ")");
            var $ = i.css("backgroundColor"),
                S = "none" != i.css("backgroundImage") || $ && "rgba(0, 0, 0, 0)" != $ && "transparent" != $;
            !S || r.splash || r.autoplay || t.bind("ready stop", function() {
                i.addClass("is-poster").one("progress", function() {
                    i.removeClass("is-poster")
                })
            }), !S && t.forcedSplash && i.css("backgroundColor", "#555"), e(".fp-toggle, .fp-play", i).click(t.toggle), e.each(["mute", "fullscreen", "unload"], function(e, i) {
                s(i).click(function() {
                    t[i]()
                })
            }), y.bind("slide", function(e, i) {
                t.seeking = !0, t.seek(i * t.video.duration)
            }), k.bind("slide", function(e, i) {
                t.volume(i)
            }), s("time").click(function() {
                e(this).toggleClass("is-inverted")
            }), a(_)
        });
        var N, k, x = "is-help";
        e(document).bind("keydown.fp", function(t) {
            var i = N,
                s = t.ctrlKey || t.metaKey || t.altKey,
                n = t.which,
                a = i && i.conf;
            if (i && a.keyboard && !i.disabled) {
                if (-1 != e.inArray(n, [63, 187, 191])) return k.toggleClass(x), !1;
                if (27 == n && k.hasClass(x)) return k.toggleClass(x), !1;
                if (!s && i.ready) {
                    if (t.preventDefault(), t.shiftKey) return void(39 == n ? i.speed(!0) : 37 == n && i.speed(!1));
                    if (58 > n && n > 47) return i.seekTo(n - 48);
                    switch (n) {
                        case 38:
                        case 75:
                            i.volume(i.volumeLevel + .15);
                            break;
                        case 40:
                        case 74:
                            i.volume(i.volumeLevel - .15);
                            break;
                        case 39:
                        case 76:
                            i.seeking = !0, i.seek(!0);
                            break;
                        case 37:
                        case 72:
                            i.seeking = !0, i.seek(!1);
                            break;
                        case 190:
                            i.seekTo();
                            break;
                        case 32:
                            i.toggle();
                            break;
                        case 70:
                            a.fullscreen && i.fullscreen();
                            break;
                        case 77:
                            i.mute();
                            break;
                        case 81:
                            i.unload()
                    }
                }
            }
        }), flowplayer(function(t, i) {
            t.conf.keyboard && (i.bind("mouseenter mouseleave", function(e) {
                N = t.disabled || "mouseenter" != e.type ? 0 : t, N && (k = i)
            }), i.append('      <div class="fp-help">         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>         </div>      </div>   '), t.conf.tooltip && e(".fp-ui", i).attr("title", "Hit ? for help").on("mouseout.tip", function() {
                e(this).removeAttr("title").off("mouseout.tip")
            }), e(".fp-close", i).click(function() {
                i.toggleClass(x)
            }))
        });
        var _, C = e.browser.mozilla ? "moz" : "webkit",
            $ = "fullscreen",
            S = "fullscreen-exit",
            T = flowplayer.support.fullscreen,
            P = "function" == typeof document.exitFullscreen,
            j = navigator.userAgent.toLowerCase(),
            z = /(safari)[ \/]([\w.]+)/.exec(j) && !/(chrome)[ \/]([\w.]+)/.exec(j);
        e(document).bind(P ? "fullscreenchange" : C + "fullscreenchange", function(t) {
            var i = e(document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || t.target);
            i.length && !_ ? _ = i.trigger($, [i]) : (_.trigger(S, [_]), _ = null)
        }), flowplayer(function(t, i) {
            if (t.conf.fullscreen) {
                var s, n = e(window),
                    a = {
                        index: 0,
                        pos: 0,
                        play: !1
                    };
                t.isFullscreen = !1, t.fullscreen = function(o) {
                    return t.disabled ? void 0 : (void 0 === o && (o = !t.isFullscreen), o && (s = n.scrollTop()), "webkit" != C && !z || "flash" != t.engine || (a.index = t.video.index, t.conf.rtmp && e.extend(a, {
                        pos: t.video.time,
                        play: t.playing
                    })), T ? o ? P ? i[0].requestFullscreen() : (i[0][C + "RequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT), !z || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || i[0][C + "RequestFullScreen"]()) : P ? document.exitFullscreen() : document[C + "CancelFullScreen"]() : t.trigger(o ? $ : S, [t]), t)
                };
                var o;
                i.bind("mousedown.fs", function() {
                    +new Date - o < 150 && t.ready && t.fullscreen(), o = +new Date
                }), t.bind($, function() {
                    i.addClass("is-fullscreen"), t.isFullscreen = !0
                }).bind(S, function() {
                    var e;
                    T || "html5" !== t.engine || (e = i.css("opacity") || "", i.css("opacity", 0)), i.removeClass("is-fullscreen"), T || "html5" !== t.engine || setTimeout(function() {
                        i.css("opacity", e)
                    }), t.isFullscreen = !1, n.scrollTop(s)
                }).bind("ready", function() {
                    if (a.index > 0) t.play(a.index), a.index = 0;
                    else if (a.pos && !isNaN(a.pos)) {
                        var i = function() {
                            a.play || t.pause(), e.extend(a, {
                                pos: 0,
                                play: !1
                            })
                        };
                        t.conf.live ? (t.resume(), i()) : t.resume().seek(a.pos, i)
                    }
                })
            }
        }), flowplayer(function(t, i) {
            function s() {
                return e(a.query, i)
            }

            function n() {
                return e(a.query + "." + o, i)
            }
            var a = e.extend({
                    active: "is-active",
                    advance: !0,
                    query: ".fp-playlist a"
                }, t.conf),
                o = a.active;
            t.play = function(i) {
                return void 0 === i ? t.resume() : "number" != typeof i || t.conf.playlist[i] ? ("number" != typeof i && t.load.apply(null, arguments), t.unbind("resume.fromfirst"), t.video.index = i, t.load("string" == typeof t.conf.playlist[i] ? t.conf.playlist[i].toString() : e.map(t.conf.playlist[i], function(t) {
                    return e.extend({}, t)
                })), t) : t
            }, t.next = function(e) {
                e && e.preventDefault();
                var i = t.video.index;
                return -1 != i && (i = i === t.conf.playlist.length - 1 ? 0 : i + 1, t.play(i)), t
            }, t.prev = function(e) {
                e && e.preventDefault();
                var i = t.video.index;
                return -1 != i && (i = 0 === i ? t.conf.playlist.length - 1 : i - 1, t.play(i)), t
            }, e(".fp-next", i).click(t.next), e(".fp-prev", i).click(t.prev), a.advance && i.unbind("finish.pl").bind("finish.pl", function(e, t) {
                var s = t.video.index + 1;
                s < t.conf.playlist.length || a.loop ? (s = s === t.conf.playlist.length ? 0 : s, i.removeClass("is-finished"), setTimeout(function() {
                    t.play(s)
                })) : (i.addClass("is-playing"), t.conf.playlist.length > 1 && t.one("resume.fromfirst", function() {
                    return t.play(0), !1
                }))
            });
            var r = !1;
            if (t.conf.playlist.length) {
                r = !0;
                var l = i.find(".fp-playlist");
                if (!l.length) {
                    l = e('<div class="fp-playlist"></div>');
                    var c = e(".fp-next,.fp-prev", i);
                    c.length ? c.eq(0).before(l) : e("video", i).after(l)
                }
                l.empty(), e.each(t.conf.playlist, function(t, i) {
                    var s;
                    if ("string" == typeof i) s = i;
                    else
                        for (var n in i[0])
                            if (i[0].hasOwnProperty(n)) {
                                s = i[0][n];
                                break
                            }
                    l.append(e("<a />").attr({
                        href: s,
                        "data-index": t
                    }))
                })
            }
            if (s().length) {
                r || (t.conf.playlist = [], s().each(function() {
                    var i = e(this).attr("href");
                    e(this).attr("data-index", t.conf.playlist.length), t.conf.playlist.push(i)
                })), i.on("click", a.query, function(i) {
                    i.preventDefault();
                    var s = e(i.target).closest(a.query),
                        n = Number(s.attr("data-index")); - 1 != n && t.play(n)
                });
                var d = s().filter("[data-cuepoints]").length;
                t.bind("load", function(s, a, r) {
                    var l = n().removeClass(o),
                        c = l.attr("data-index"),
                        u = r.index = t.video.index || 0,
                        h = e('a[data-index="' + u + '"]', i).addClass(o),
                        p = u == t.conf.playlist.length - 1;
                    i.removeClass("video" + c).addClass("video" + u).toggleClass("last-video", p), r.index = a.video.index = u, r.is_last = a.video.is_last = p, d && (t.cuepoints = h.data("cuepoints"))
                }).bind("unload.pl", function() {
                    n().toggleClass(o)
                })
            }
            t.conf.playlist.length && (t.conf.loop = !1)
        });
        var A = / ?cue\d+ ?/;
        flowplayer(function(t, i) {
            function s(e) {
                i[0].className = i[0].className.replace(A, " "), e >= 0 && i.addClass("cue" + e)
            }
            var n = 0;
            t.cuepoints = t.conf.cuepoints || [], t.bind("progress", function(e, a, o) {
                if (n && .015 > o - n) return n = o;
                n = o;
                for (var r, l = t.cuepoints || [], c = 0; c < l.length; c++) r = l[c], isNaN(r) || (r = {
                    time: r
                }), r.time < 0 && (r.time = t.video.duration + r.time), r.index = c, Math.abs(r.time - o) < .125 * t.currentSpeed && (s(c), i.trigger("cuepoint", [t, r]))
            }).bind("unload seek", s), t.conf.generate_cuepoints && t.bind("load", function() {
                e(".fp-cuepoint", i).remove()
            }).bind("ready", function() {
                var s = t.cuepoints || [],
                    n = t.video.duration,
                    a = e(".fp-timeline", i).css("overflow", "visible");
                e.each(s, function(i, s) {
                    var o = s.time || s;
                    0 > o && (o = n + s);
                    var r = e("<a/>").addClass("fp-cuepoint fp-cuepoint" + i).css("left", o / n * 100 + "%");
                    r.appendTo(a).mousedown(function() {
                        return t.seek(o), !1
                    })
                })
            })
        }), flowplayer(function(t, i) {
            function s(e) {
                var t = e.split(":");
                return 2 == t.length && t.unshift(0), 60 * t[0] * 60 + 60 * t[1] + parseFloat(t[2].replace(",", "."))
            }
            var n = e("track", i),
                a = t.conf;
            if (!flowplayer.support.subtitles || (t.subtitles = n.length && n[0].track, !a.nativesubtitles || "html5" != a.engine)) {
                n.remove();
                var o = /^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;
                t.subtitles = [];
                var r = n.attr("src");
                if (r) {
                    setTimeout(function() {
                        e.get(r, function(i) {
                            for (var n, a, r, l, c = 0, d = i.split("\n"), u = d.length, h = {}; u > c; c++)
                                if (a = o.exec(d[c])) {
                                    for (n = d[c - 1], r = "<p>" + d[++c] + "</p><br/>"; e.trim(d[++c]) && c < d.length;) r += "<p>" + d[c] + "</p><br/>";
                                    h = {
                                        title: n,
                                        startTime: s(a[1]),
                                        endTime: s(a[2] || a[3]),
                                        text: r
                                    }, l = {
                                        time: h.startTime,
                                        subtitle: h
                                    }, t.subtitles.push(h), t.cuepoints.push(l), t.cuepoints.push({
                                        time: h.endTime,
                                        subtitleEnd: n
                                    }), 0 === h.startTime && t.trigger("cuepoint", l)
                                }
                        }).fail(function() {
                            return t.trigger("error", {
                                code: 8,
                                url: r
                            }), !1
                        })
                    });
                    var l, c = e("<div class='fp-subtitle'/>").appendTo(i);
                    t.bind("cuepoint", function(e, t, i) {
                        i.subtitle ? (l = i.index, c.html(i.subtitle.text).addClass("fp-active")) : i.subtitleEnd && (c.removeClass("fp-active"), l = i.index)
                    }).bind("seek", function(i, s, n) {
                        l && t.cuepoints[l] && t.cuepoints[l].time > n && (c.removeClass("fp-active"), l = null), e.each(t.cuepoints || [], function(e, i) {
                            var s = i.subtitle;
                            s && l != i.index ? n >= i.time && (!s.endTime || n <= s.endTime) && t.trigger("cuepoint", i) : i.subtitleEnd && n >= i.time && i.index == l + 1 && t.trigger("cuepoint", i)
                        })
                    })
                }
            }
        }), flowplayer(function(t, i) {
            function s() {
                if (a && "undefined" != typeof _gat) {
                    var e = _gat._getTracker(n),
                        s = t.video;
                    e._setAllowLinker(!0), e._trackEvent("Video / Seconds played", t.engine + "/" + s.type, i.attr("title") || s.src.split("/").slice(-1)[0].replace(w, ""), Math.round(a / 1e3)), a = 0
                }
            }
            var n = t.conf.analytics,
                a = 0,
                o = 0;
            n && ("undefined" == typeof _gat && e.getScript("//google-analytics.com/ga.js"), t.bind("load unload", s).bind("progress", function() {
                t.seeking || (a += o ? +new Date - o : 0, o = +new Date)
            }).bind("pause", function() {
                o = 0
            }), e(window).unload(s))
        });
        var D = /IEMobile/.test(h);
        (flowplayer.support.touch || D) && flowplayer(function(t, i) {
            var s = /Android/.test(h) && !/Firefox/.test(h) && !/Opera/.test(h),
                n = /Silk/.test(h),
                a = s ? parseFloat(/Android\ (\d\.\d)/.exec(h)[1], 10) : 0;
            if (s && (t.conf.videoTypePreference = "mp4", !/Chrome/.test(h) && 4 > a)) {
                var o = t.load;
                t.load = function() {
                    var e = o.apply(t, arguments);
                    return t.trigger("ready", [t, t.video]), e
                }
            }
            flowplayer.support.volume || i.addClass("no-volume no-mute"), i.addClass("is-touch"), i.find(".fp-timeline").data("api").disableAnimation();
            var r = !1;
            i.bind("touchmove", function() {
                r = !0
            }).bind("touchend click", function() {
                return r ? void(r = !1) : t.playing && !i.hasClass("is-mouseover") ? (i.addClass("is-mouseover").removeClass("is-mouseout"), !1) : (t.paused && i.hasClass("is-mouseout") && !t.splash && t.toggle(), void(t.paused && D && e("video.fp-engine", i)[0].play()))
            }), t.conf.native_fullscreen && "function" == typeof e("<video />")[0].webkitEnterFullScreen && (t.fullscreen = function() {
                var t = e("video.fp-engine", i);
                t[0].webkitEnterFullScreen(), t.one("webkitendfullscreen", function() {
                    t.prop("controls", !0).prop("controls", !1)
                })
            }), (s || n) && t.bind("ready", function() {
                var s = e("video.fp-engine", i);
                s.one("canplay", function() {
                    s[0].play()
                }), s[0].play(), t.bind("progress.dur", function() {
                    var n = s[0].duration;
                    1 !== n && (t.video.duration = n, e(".fp-duration", i).html(c(n)), t.unbind("progress.dur"))
                })
            })
        }), flowplayer(function(t, i) {
            if (t.conf.embed !== !1) {
                var s = t.conf,
                    n = e(".fp-ui", i),
                    a = e("<a/>", {
                        "class": "fp-embed",
                        title: "Copy to your site"
                    }).appendTo(n),
                    o = e("<div/>", {
                        "class": "fp-embed-code"
                    }).append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(n),
                    r = e("textarea", o);
                t.embedCode = function() {
                    var n = t.video,
                        a = n.width || i.width(),
                        o = n.height || i.height(),
                        r = e("<div/>", {
                            "class": "flowplayer",
                            css: {
                                width: a,
                                height: o
                            }
                        }),
                        l = e("<video/>").appendTo(r);
                    e.each(["origin", "analytics", "key", "rtmp"], function(e, t) {
                        s[t] && r.attr("data-" + t, s[t])
                    }), s.logo && r.attr("data-logo", e("<img />").attr("src", s.logo)[0].src), e.each(n.sources, function(t, i) {
                        var n = i.src;
                        (!/^https?:/.test(i.src) && "flash" !== i.type || !s.rtmp) && (n = e("<img/>").attr("src", i.src)[0].src), l.append(e("<source/>", {
                            type: "video/" + i.type,
                            src: n
                        }))
                    });
                    var c = {
                        src: "//embed.flowplayer.org/5.4.6/embed.min.js"
                    };
                    e.isPlainObject(s.embed) && (c["data-swf"] = s.embed.swf, c["data-library"] = s.embed.library, c.src = s.embed.script || c.src, s.embed.skin && (c["data-skin"] = s.embed.skin));
                    var d = e("<foo/>", c).append(r);
                    return e("<p/>").append(d).html().replace(/<(\/?)foo/g, "<$1script")
                }, i.fptip(".fp-embed", "is-embedding"), r.click(function() {
                    this.select()
                }), a.click(function() {
                    r.text(t.embedCode()), r[0].focus(), r[0].select()
                })
            }
        }), e.fn.fptip = function(t, i) {
            return this.each(function() {
                function s() {
                    n.removeClass(i), e(document).unbind(".st")
                }
                var n = e(this);
                e(t || "a", this).click(function(t) {
                    t.preventDefault(), n.toggleClass(i), n.hasClass(i) && e(document).bind("keydown.st", function(e) {
                        27 == e.which && s()
                    }).bind("click.st", function(t) {
                        e(t.target).parents("." + i).length || s()
                    })
                })
            })
        }
    }(jQuery), flowplayer(function(e, t) {
        function i(e) {
            var t = a("<a/>")[0];
            return t.href = e, t.hostname
        }

        function s(e) {
            var t = "ab.ca,ac.ac,ac.at,ac.be,ac.cn,ac.il,ac.in,ac.jp,ac.kr,ac.th,ac.uk,adm.br,adv.br,ah.cn,am.br,arq.br,art.br,arts.ro,asn.au,asso.fr,asso.mc,bc.ca,bio.br,biz.pl,biz.tr,bj.cn,br.com,cn.com,cng.br,cnt.br,co.ac,co.at,co.gl,co.id,co.il,co.in,co.jp,co.kr,com.ag,com.ai,com.ar,com.au,com.br,com.cn,com.cy,com.de,com.do,com.ec,com.es,com.fj,com.fr,co.mg,com.gl,com.gt,com.hk,com.hr,com.hu,com.kg,com.ki,com.lc,com.mg,com.mm,com.ms,com.mt,com.mu,com.mx,com.my,com.nf,com.ng,com.ni,com.pa,com.ph,com.pl,com.pt,com.qa,com.ro,com.ru,co.ms,com.sb,com.sc,com.sg,com.sv,com.tr,com.tw,com.ua,com.uy,com.ve,com.vn,co.nz,co.th,co.uk,co.ve,co.vi,co.za,cq.cn,de.com,de.org,ecn.br,edu.au,edu.cn,edu.hk,edu.mm,edu.my,edu.pt,edu.qa,edu.tr,eng.br,ernet.in,esp.br,etc.br,eti.br,eu.com,eu.int,eu.lv,firm.in,firm.ro,fm.br,fot.br,fst.br,g12.br,gb.com,gb.net,gd.cn,gen.in,go.jp,go.kr,go.th,gov.au,gov.az,gov.br,gov.cn,gov.il,gov.in,gov.mm,gov.my,gov.qa,gov.sg,gov.tr,gov.tw,gs.cn,gv.ac,gv.at,gx.cn,gz.cn,he.cn,hi.cn,hk.cn,hl.cn,hu.com,id.au,idv.tw,ind.br,ind.in,inf.br,info.pl,info.ro,info.tr,info.ve,in.ua,iwi.nz,jl.cn,jor.br,js.cn,k12.il,k12.tr,kr.com,lel.br,ln.cn,ltd.uk,maori.nz,mb.ca,med.br,me.uk,mil.br,mi.th,mo.cn,muni.il,nb.ca,ne.jp,ne.kr,net.ag,net.ai,net.au,net.br,net.cn,net.do,net.gl,net.hk,net.il,net.in,net.kg,net.ki,net.lc,net.mg,net.mm,net.mu,net.ni,net.nz,net.pl,net.ru,net.sb,net.sc,net.sg,net.th,net.tr,net.tw,net.uk,net.ve,nf.ca,nm.cn,nm.kr,no.com,nom.br,nom.ni,nom.ro,ns.ca,nt.ca,ntr.br,nt.ro,nx.cn,odo.br,off.ai,on.ca,or.ac,or.at,org.ag,org.ai,org.au,org.br,org.cn,org.do,org.es,org.gl,org.hk,org.in,org.kg,org.ki,org.lc,org.mg,org.mm,org.ms,org.nf,org.ni,org.nz,org.pl,org.ro,org.ru,org.sb,org.sc,org.sg,org.tr,org.tw,org.uk,org.ve,or.jp,or.kr,or.th,pe.ca,plc.uk,ppg.br,presse.fr,pro.br,psc.br,psi.br,qc.ca,qc.com,qh.cn,rec.br,rec.ro,res.in,sa.com,sc.cn,sch.ul,se.com,se.net,sh.cn,sk.ca,slg.br,sn.cn,store.ro,tj.cn,tm.fr,tm.mc,tmp.br,tm.ro,tur.br,tv.br,tv.tr,tw.cn,uk.com,uk.net,us.com,uy.com,vet.br,waw.pl,web.ve,www.ro,xj.cn,xz.cn,yk.ca,yn.cn,zj.cn,zlg.br".split(",");
            e = e.toLowerCase();
            var i = e.split("."),
                s = i.length;
            if (2 > s) return e;
            var n = i.slice(-2).join(".");
            return s >= 3 && a.inArray(n, t) >= 0 ? i.slice(-3).join(".") : n
        }

        function n(e, t) {
            "localhost" == t || parseInt(t.split(".").slice(-1)) || (t = s(t));
            for (var i = 0, n = t.length - 1; n >= 0; n--) i += 2983723987 * t.charCodeAt(n);
            for (i = ("" + i).substring(0, 7), n = 0; n < e.length; n++)
                if (i === e[n].substring(1, 8)) return 1
        }
        var a = jQuery,
            o = e.conf,
            r = o.swf.indexOf("flowplayer.org") && o.e && t.data("origin"),
            l = r ? i(r) : location.hostname,
            c = o.key;
        if ("file:" == location.protocol && (l = "localhost"), e.load.ed = 1, o.hostname = l, o.origin = r || location.href, r && t.addClass("is-embedded"), "string" == typeof c && (c = c.split(/,\s*/)), c && "function" == typeof n && n(c, l)) o.logo && t.append(a("<a>", {
            "class": "fp-logo",
            href: r
        }).append(a("<img/>", {
            src: o.logo
        })));
        else {
            var d = a("<a/>").attr("href", "http://flowplayer.org").appendTo(t);
            a(".fp-controls", t);
            var u = a('<div class="fp-context-menu"><ul><li class="copyright">&copy; 2013</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul></div>').appendTo(t);
            e.bind("pause resume finish unload", function(e, i) {
                var s = -1;
                i.video.src && a.each([
                    ["org", "flowplayer", "drive"],
                    ["org", "flowplayer", "my"]
                ], function(e, t) {
                    return s = i.video.src.indexOf("://" + t.reverse().join(".")), -1 === s
                }), /pause|resume/.test(e.type) && "flash" != i.engine && 4 != s && 5 != s ? (d.show().css({
                    position: "absolute",
                    left: 16,
                    bottom: 36,
                    zIndex: 99999,
                    width: 100,
                    height: 20,
                    backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")"
                }), i.load.ed = d.is(":visible") && a.contains(t[0], u[0]), i.load.ed || i.pause()) : d.hide()
            })
        }
    }), ! function() {
        var e = this,
            t = e._,
            i = {},
            s = Array.prototype,
            n = Object.prototype,
            a = Function.prototype,
            o = s.push,
            r = s.slice,
            l = s.concat,
            c = n.toString,
            d = n.hasOwnProperty,
            u = s.forEach,
            h = s.map,
            p = s.reduce,
            f = s.reduceRight,
            g = s.filter,
            m = s.every,
            v = s.some,
            b = s.indexOf,
            y = s.lastIndexOf,
            w = Array.isArray,
            N = Object.keys,
            k = a.bind,
            x = function(e) {
                return e instanceof x ? e : this instanceof x ? void(this._wrapped = e) : new x(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.1";
        var _ = x.each = x.forEach = function(e, t, s) {
            if (null != e)
                if (u && e.forEach === u) e.forEach(t, s);
                else if (e.length === +e.length) {
                for (var n = 0, a = e.length; a > n; n++)
                    if (t.call(s, e[n], n, e) === i) return
            } else
                for (var o in e)
                    if (x.has(e, o) && t.call(s, e[o], o, e) === i) return
        };
        x.map = x.collect = function(e, t, i) {
            var s = [];
            return null == e ? s : h && e.map === h ? e.map(t, i) : (_(e, function(e, n, a) {
                s.push(t.call(i, e, n, a))
            }), s)
        };
        var C = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(e, t, i, s) {
            var n = arguments.length > 2;
            if (null == e && (e = []), p && e.reduce === p) return s && (t = x.bind(t, s)), n ? e.reduce(t, i) : e.reduce(t);
            if (_(e, function(e, a, o) {
                    n ? i = t.call(s, i, e, a, o) : (i = e, n = !0)
                }), !n) throw new TypeError(C);
            return i
        }, x.reduceRight = x.foldr = function(e, t, i, s) {
            var n = arguments.length > 2;
            if (null == e && (e = []), f && e.reduceRight === f) return s && (t = x.bind(t, s)), n ? e.reduceRight(t, i) : e.reduceRight(t);
            var a = e.length;
            if (a !== +a) {
                var o = x.keys(e);
                a = o.length
            }
            if (_(e, function(r, l, c) {
                    l = o ? o[--a] : --a, n ? i = t.call(s, i, e[l], l, c) : (i = e[l], n = !0)
                }), !n) throw new TypeError(C);
            return i
        }, x.find = x.detect = function(e, t, i) {
            var s;
            return $(e, function(e, n, a) {
                return t.call(i, e, n, a) ? (s = e, !0) : void 0
            }), s
        }, x.filter = x.select = function(e, t, i) {
            var s = [];
            return null == e ? s : g && e.filter === g ? e.filter(t, i) : (_(e, function(e, n, a) {
                t.call(i, e, n, a) && s.push(e)
            }), s)
        }, x.reject = function(e, t, i) {
            return x.filter(e, function(e, s, n) {
                return !t.call(i, e, s, n)
            }, i)
        }, x.every = x.all = function(e, t, s) {
            t || (t = x.identity);
            var n = !0;
            return null == e ? n : m && e.every === m ? e.every(t, s) : (_(e, function(e, a, o) {
                return (n = n && t.call(s, e, a, o)) ? void 0 : i
            }), !!n)
        };
        var $ = x.some = x.any = function(e, t, s) {
            t || (t = x.identity);
            var n = !1;
            return null == e ? n : v && e.some === v ? e.some(t, s) : (_(e, function(e, a, o) {
                return n || (n = t.call(s, e, a, o)) ? i : void 0
            }), !!n)
        };
        x.contains = x.include = function(e, t) {
            return null == e ? !1 : b && e.indexOf === b ? -1 != e.indexOf(t) : $(e, function(e) {
                return e === t
            })
        }, x.invoke = function(e, t) {
            var i = r.call(arguments, 2),
                s = x.isFunction(t);
            return x.map(e, function(e) {
                return (s ? t : e[t]).apply(e, i)
            })
        }, x.pluck = function(e, t) {
            return x.map(e, function(e) {
                return e[t]
            })
        }, x.where = function(e, t, i) {
            return x.isEmpty(t) ? i ? void 0 : [] : x[i ? "find" : "filter"](e, function(e) {
                for (var i in t)
                    if (t[i] !== e[i]) return !1;
                return !0
            })
        }, x.findWhere = function(e, t) {
            return x.where(e, t, !0)
        }, x.max = function(e, t, i) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            if (!t && x.isEmpty(e)) return -1 / 0;
            var s = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return _(e, function(e, n, a) {
                var o = t ? t.call(i, e, n, a) : e;
                o > s.computed && (s = {
                    value: e,
                    computed: o
                })
            }), s.value
        }, x.min = function(e, t, i) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            if (!t && x.isEmpty(e)) return 1 / 0;
            var s = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return _(e, function(e, n, a) {
                var o = t ? t.call(i, e, n, a) : e;
                o < s.computed && (s = {
                    value: e,
                    computed: o
                })
            }), s.value
        }, x.shuffle = function(e) {
            var t, i = 0,
                s = [];
            return _(e, function(e) {
                t = x.random(i++), s[i - 1] = s[t], s[t] = e
            }), s
        };
        var S = function(e) {
            return x.isFunction(e) ? e : function(t) {
                return t[e]
            }
        };
        x.sortBy = function(e, t, i) {
            var s = S(t);
            return x.pluck(x.map(e, function(e, t, n) {
                return {
                    value: e,
                    index: t,
                    criteria: s.call(i, e, t, n)
                }
            }).sort(function(e, t) {
                var i = e.criteria,
                    s = t.criteria;
                if (i !== s) {
                    if (i > s || void 0 === i) return 1;
                    if (s > i || void 0 === s) return -1
                }
                return e.index < t.index ? -1 : 1
            }), "value")
        };
        var T = function(e, t, i, s) {
            var n = {},
                a = S(null == t ? x.identity : t);
            return _(e, function(t, o) {
                var r = a.call(i, t, o, e);
                s(n, r, t)
            }), n
        };
        x.groupBy = function(e, t, i) {
            return T(e, t, i, function(e, t, i) {
                (x.has(e, t) ? e[t] : e[t] = []).push(i)
            })
        }, x.countBy = function(e, t, i) {
            return T(e, t, i, function(e, t) {
                x.has(e, t) || (e[t] = 0), e[t]++
            })
        }, x.sortedIndex = function(e, t, i, s) {
            i = null == i ? x.identity : S(i);
            for (var n = i.call(s, t), a = 0, o = e.length; o > a;) {
                var r = a + o >>> 1;
                i.call(s, e[r]) < n ? a = r + 1 : o = r
            }
            return a
        }, x.toArray = function(e) {
            return e ? x.isArray(e) ? r.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
        }, x.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
        }, x.first = x.head = x.take = function(e, t, i) {
            return null == e ? void 0 : null == t || i ? e[0] : r.call(e, 0, t)
        }, x.initial = function(e, t, i) {
            return r.call(e, 0, e.length - (null == t || i ? 1 : t))
        }, x.last = function(e, t, i) {
            return null == e ? void 0 : null == t || i ? e[e.length - 1] : r.call(e, Math.max(e.length - t, 0))
        }, x.rest = x.tail = x.drop = function(e, t, i) {
            return r.call(e, null == t || i ? 1 : t)
        }, x.compact = function(e) {
            return x.filter(e, x.identity)
        };
        var P = function(e, t, i) {
            return t && x.every(e, x.isArray) ? l.apply(i, e) : (_(e, function(e) {
                x.isArray(e) || x.isArguments(e) ? t ? o.apply(i, e) : P(e, t, i) : i.push(e)
            }), i)
        };
        x.flatten = function(e, t) {
            return P(e, t, [])
        }, x.without = function(e) {
            return x.difference(e, r.call(arguments, 1))
        }, x.uniq = x.unique = function(e, t, i, s) {
            x.isFunction(t) && (s = i, i = t, t = !1);
            var n = i ? x.map(e, i, s) : e,
                a = [],
                o = [];
            return _(n, function(i, s) {
                (t ? s && o[o.length - 1] === i : x.contains(o, i)) || (o.push(i), a.push(e[s]))
            }), a
        }, x.union = function() {
            return x.uniq(x.flatten(arguments, !0))
        }, x.intersection = function(e) {
            var t = r.call(arguments, 1);
            return x.filter(x.uniq(e), function(e) {
                return x.every(t, function(t) {
                    return x.indexOf(t, e) >= 0
                })
            })
        }, x.difference = function(e) {
            var t = l.apply(s, r.call(arguments, 1));
            return x.filter(e, function(e) {
                return !x.contains(t, e)
            })
        }, x.zip = function() {
            for (var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e), i = 0; e > i; i++) t[i] = x.pluck(arguments, "" + i);
            return t
        }, x.object = function(e, t) {
            if (null == e) return {};
            for (var i = {}, s = 0, n = e.length; n > s; s++) t ? i[e[s]] = t[s] : i[e[s][0]] = e[s][1];
            return i
        }, x.indexOf = function(e, t, i) {
            if (null == e) return -1;
            var s = 0,
                n = e.length;
            if (i) {
                if ("number" != typeof i) return s = x.sortedIndex(e, t), e[s] === t ? s : -1;
                s = 0 > i ? Math.max(0, n + i) : i
            }
            if (b && e.indexOf === b) return e.indexOf(t, i);
            for (; n > s; s++)
                if (e[s] === t) return s;
            return -1
        }, x.lastIndexOf = function(e, t, i) {
            if (null == e) return -1;
            var s = null != i;
            if (y && e.lastIndexOf === y) return s ? e.lastIndexOf(t, i) : e.lastIndexOf(t);
            for (var n = s ? i : e.length; n--;)
                if (e[n] === t) return n;
            return -1
        }, x.range = function(e, t, i) {
            arguments.length <= 1 && (t = e || 0, e = 0), i = arguments[2] || 1;
            for (var s = Math.max(Math.ceil((t - e) / i), 0), n = 0, a = new Array(s); s > n;) a[n++] = e, e += i;
            return a
        };
        var j = function() {};
        x.bind = function(e, t) {
            var i, s;
            if (k && e.bind === k) return k.apply(e, r.call(arguments, 1));
            if (!x.isFunction(e)) throw new TypeError;
            return i = r.call(arguments, 2), s = function() {
                if (!(this instanceof s)) return e.apply(t, i.concat(r.call(arguments)));
                j.prototype = e.prototype;
                var n = new j;
                j.prototype = null;
                var a = e.apply(n, i.concat(r.call(arguments)));
                return Object(a) === a ? a : n
            }
        }, x.partial = function(e) {
            var t = r.call(arguments, 1);
            return function() {
                return e.apply(this, t.concat(r.call(arguments)))
            }
        }, x.bindAll = function(e) {
            var t = r.call(arguments, 1);
            if (0 === t.length) throw new Error("bindAll must be passed function names");
            return _(t, function(t) {
                e[t] = x.bind(e[t], e)
            }), e
        }, x.memoize = function(e, t) {
            var i = {};
            return t || (t = x.identity),
                function() {
                    var s = t.apply(this, arguments);
                    return x.has(i, s) ? i[s] : i[s] = e.apply(this, arguments)
                }
        }, x.delay = function(e, t) {
            var i = r.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, i)
            }, t)
        }, x.defer = function(e) {
            return x.delay.apply(x, [e, 1].concat(r.call(arguments, 1)))
        }, x.throttle = function(e, t, i) {
            var s, n, a, o = null,
                r = 0;
            i || (i = {});
            var l = function() {
                r = i.leading === !1 ? 0 : new Date, o = null, a = e.apply(s, n)
            };
            return function() {
                var c = new Date;
                r || i.leading !== !1 || (r = c);
                var d = t - (c - r);
                return s = this, n = arguments, 0 >= d ? (clearTimeout(o), o = null, r = c, a = e.apply(s, n)) : o || i.trailing === !1 || (o = setTimeout(l, d)), a
            }
        }, x.debounce = function(e, t, i) {
            var s, n = null;
            return function() {
                var a = this,
                    o = arguments,
                    r = function() {
                        n = null, i || (s = e.apply(a, o))
                    },
                    l = i && !n;
                return clearTimeout(n), n = setTimeout(r, t), l && (s = e.apply(a, o)), s
            }
        }, x.once = function(e) {
            var t, i = !1;
            return function() {
                return i ? t : (i = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, x.wrap = function(e, t) {
            return function() {
                var i = [e];
                return o.apply(i, arguments), t.apply(this, i)
            }
        }, x.compose = function() {
            var e = arguments;
            return function() {
                for (var t = arguments, i = e.length - 1; i >= 0; i--) t = [e[i].apply(this, t)];
                return t[0]
            }
        }, x.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, x.keys = N || function(e) {
            if (e !== Object(e)) throw new TypeError("Invalid object");
            var t = [];
            for (var i in e) x.has(e, i) && t.push(i);
            return t
        }, x.values = function(e) {
            var t = [];
            for (var i in e) x.has(e, i) && t.push(e[i]);
            return t
        }, x.pairs = function(e) {
            var t = [];
            for (var i in e) x.has(e, i) && t.push([i, e[i]]);
            return t
        }, x.invert = function(e) {
            var t = {};
            for (var i in e) x.has(e, i) && (t[e[i]] = i);
            return t
        }, x.functions = x.methods = function(e) {
            var t = [];
            for (var i in e) x.isFunction(e[i]) && t.push(i);
            return t.sort()
        }, x.extend = function(e) {
            return _(r.call(arguments, 1), function(t) {
                if (t)
                    for (var i in t) e[i] = t[i]
            }), e
        }, x.pick = function(e) {
            var t = {},
                i = l.apply(s, r.call(arguments, 1));
            return _(i, function(i) {
                i in e && (t[i] = e[i])
            }), t
        }, x.omit = function(e) {
            var t = {},
                i = l.apply(s, r.call(arguments, 1));
            for (var n in e) x.contains(i, n) || (t[n] = e[n]);
            return t
        }, x.defaults = function(e) {
            return _(r.call(arguments, 1), function(t) {
                if (t)
                    for (var i in t) void 0 === e[i] && (e[i] = t[i])
            }), e
        }, x.clone = function(e) {
            return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
        }, x.tap = function(e, t) {
            return t(e), e
        };
        var z = function(e, t, i, s) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
            var n = c.call(e);
            if (n != c.call(t)) return !1;
            switch (n) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var a = i.length; a--;)
                if (i[a] == e) return s[a] == t;
            var o = e.constructor,
                r = t.constructor;
            if (o !== r && !(x.isFunction(o) && o instanceof o && x.isFunction(r) && r instanceof r)) return !1;
            i.push(e), s.push(t);
            var l = 0,
                d = !0;
            if ("[object Array]" == n) {
                if (l = e.length, d = l == t.length)
                    for (; l-- && (d = z(e[l], t[l], i, s)););
            } else {
                for (var u in e)
                    if (x.has(e, u) && (l++, !(d = x.has(t, u) && z(e[u], t[u], i, s)))) break;
                if (d) {
                    for (u in t)
                        if (x.has(t, u) && !l--) break;
                    d = !l
                }
            }
            return i.pop(), s.pop(), d
        };
        x.isEqual = function(e, t) {
            return z(e, t, [], [])
        }, x.isEmpty = function(e) {
            if (null == e) return !0;
            if (x.isArray(e) || x.isString(e)) return 0 === e.length;
            for (var t in e)
                if (x.has(e, t)) return !1;
            return !0
        }, x.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, x.isArray = w || function(e) {
            return "[object Array]" == c.call(e)
        }, x.isObject = function(e) {
            return e === Object(e)
        }, _(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            x["is" + e] = function(t) {
                return c.call(t) == "[object " + e + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(e) {
            return !(!e || !x.has(e, "callee"))
        }), "function" != typeof /./ && (x.isFunction = function(e) {
            return "function" == typeof e
        }), x.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, x.isNaN = function(e) {
            return x.isNumber(e) && e != +e
        }, x.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
        }, x.isNull = function(e) {
            return null === e
        }, x.isUndefined = function(e) {
            return void 0 === e
        }, x.has = function(e, t) {
            return d.call(e, t)
        }, x.noConflict = function() {
            return e._ = t, this
        }, x.identity = function(e) {
            return e
        }, x.times = function(e, t, i) {
            for (var s = Array(Math.max(0, e)), n = 0; e > n; n++) s[n] = t.call(i, n);
            return s
        }, x.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        };
        var A = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        A.unescape = x.invert(A.escape);
        var D = {
            escape: new RegExp("[" + x.keys(A.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(A.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(e) {
            x[e] = function(t) {
                return null == t ? "" : ("" + t).replace(D[e], function(t) {
                    return A[e][t]
                })
            }
        }), x.result = function(e, t) {
            if (null == e) return void 0;
            var i = e[t];
            return x.isFunction(i) ? i.call(e) : i
        }, x.mixin = function(e) {
            _(x.functions(e), function(t) {
                var i = x[t] = e[t];
                x.prototype[t] = function() {
                    var e = [this._wrapped];
                    return o.apply(e, arguments), W.call(this, i.apply(x, e))
                }
            })
        };
        var I = 0;
        x.uniqueId = function(e) {
            var t = ++I + "";
            return e ? e + t : t
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var R = /(.)^/,
            M = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "   ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            E = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(e, t, i) {
            var s;
            i = x.defaults({}, i, x.templateSettings);
            var n = new RegExp([(i.escape || R).source, (i.interpolate || R).source, (i.evaluate || R).source].join("|") + "|$", "g"),
                a = 0,
                o = "__p+='";
            e.replace(n, function(t, i, s, n, r) {
                return o += e.slice(a, r).replace(E, function(e) {
                    return "\\" + M[e]
                }), i && (o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), s && (o += "'+\n((__t=(" + s + "))==null?'':__t)+\n'"), n && (o += "';\n" + n + "\n__p+='"), a = r + t.length, t
            }), o += "';\n", i.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                s = new Function(i.variable || "obj", "_", o)
            } catch (r) {
                throw r.source = o, r
            }
            if (t) return s(t, x);
            var l = function(e) {
                return s.call(this, e, x)
            };
            return l.source = "function(" + (i.variable || "obj") + "){\n" + o + "}", l
        }, x.chain = function(e) {
            return x(e).chain()
        };
        var W = function(e) {
            return this._chain ? x(e).chain() : e
        };
        x.mixin(x), _(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = s[e];
            x.prototype[e] = function() {
                var i = this._wrapped;
                return t.apply(i, arguments), "shift" != e && "splice" != e || 0 !== i.length || delete i[0], W.call(this, i)
            }
        }), _(["concat", "join", "slice"], function(e) {
            var t = s[e];
            x.prototype[e] = function() {
                return W.call(this, t.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this), ! function(e) {
        var t = {},
            s = {
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
        e.fn.bxSlider = function(n) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                e(this).bxSlider(n)
            }), this;
            var a = {},
                o = this;
            t.el = this;
            var r = e(window).width(),
                l = e(window).height(),
                c = function() {
                    a.settings = e.extend({}, s, n), a.settings.slideWidth = parseInt(a.settings.slideWidth), a.children = o.children(a.settings.slideSelector), a.children.length < a.settings.minSlides && (a.settings.minSlides = a.children.length), a.children.length < a.settings.maxSlides && (a.settings.maxSlides = a.children.length), a.settings.randomStart && (a.settings.startSlide = Math.floor(Math.random() * a.children.length)), a.active = {
                        index: a.settings.startSlide
                    }, a.carousel = a.settings.minSlides > 1 || a.settings.maxSlides > 1, a.carousel && (a.settings.preloadImages = "all"), a.minThreshold = a.settings.minSlides * a.settings.slideWidth + (a.settings.minSlides - 1) * a.settings.slideMargin, a.maxThreshold = a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin, a.working = !1, a.controls = {}, a.interval = null, a.animProp = "vertical" == a.settings.mode ? "top" : "left", a.usingCSS = a.settings.useCSS && "fade" != a.settings.mode && function() {
                        var e = document.createElement("div"),
                            t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in t)
                            if (void 0 !== e.style[t[i]]) return a.cssPrefix = t[i].replace("Perspective", "").toLowerCase(), a.animProp = "-" + a.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == a.settings.mode && (a.settings.maxSlides = a.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(a.settings.slideSelector).each(function() {
                        e(this).data("origStyle", e(this).attr("style"))
                    }), d()
                },
                d = function() {
                    o.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), a.viewport = o.parent(), a.loader = e('<div class="bx-loading" />'), a.viewport.prepend(a.loader), o.css({
                        width: "horizontal" == a.settings.mode ? 100 * a.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), a.usingCSS && a.settings.easing ? o.css("-" + a.cssPrefix + "-transition-timing-function", a.settings.easing) : a.settings.easing || (a.settings.easing = "swing"), m(), a.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), a.viewport.parent().css({
                        maxWidth: f()
                    }), a.settings.pager || a.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), a.children.css({
                        "float": "horizontal" == a.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), a.children.css("width", g()), "horizontal" == a.settings.mode && a.settings.slideMargin > 0 && a.children.css("marginRight", a.settings.slideMargin), "vertical" == a.settings.mode && a.settings.slideMargin > 0 && a.children.css("marginBottom", a.settings.slideMargin), "fade" == a.settings.mode && (a.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), a.children.eq(a.settings.startSlide).css({
                        zIndex: 50,
                        display: "block"
                    })), a.controls.el = e('<div class="bx-controls" />'), a.settings.captions && C(), a.active.last = a.settings.startSlide == v() - 1, a.settings.video && o.fitVids();
                    var t = a.children.eq(a.settings.startSlide);
                    "all" == a.settings.preloadImages && (t = a.children), a.settings.ticker ? a.settings.pager = !1 : (a.settings.pager && k(), a.settings.controls && x(), a.settings.auto && a.settings.autoControls && _(), (a.settings.controls || a.settings.autoControls || a.settings.pager) && a.viewport.after(a.controls.el)), u(t, h)
                },
                u = function(t, i) {
                    var s = t.find("img, iframe").length;
                    if (0 == s) return void i();
                    var n = 0;
                    t.find("img, iframe").each(function() {
                        e(this).is("img") && e(this).attr("src", e(this).attr("src") + "?timestamp=1"), e(this).load(function() {
                            setTimeout(function() {
                                ++n == s && i()
                            }, 0)
                        })
                    })
                },
                h = function() {
                    if (a.settings.infiniteLoop && "fade" != a.settings.mode && !a.settings.ticker) {
                        var t = "vertical" == a.settings.mode ? a.settings.minSlides : a.settings.maxSlides,
                            i = a.children.slice(0, t).clone().addClass("bx-clone"),
                            s = a.children.slice(-t).clone().addClass("bx-clone");
                        o.append(i).prepend(s)
                    }
                    a.loader.remove(), y(), "vertical" == a.settings.mode && (a.settings.adaptiveHeight = !0), a.viewport.height(p()), o.redrawSlider(), a.settings.onSliderLoad(a.active.index), a.initialized = !0, a.settings.responsive && e(window).bind("resize", L), a.settings.auto && a.settings.autoStart && R(), a.settings.ticker && M(), a.settings.pager && z(a.settings.startSlide), a.settings.controls && I(), a.settings.touchEnabled && !a.settings.ticker && W()
                },
                p = function() {
                    var t = 0,
                        s = e();
                    if ("vertical" == a.settings.mode || a.settings.adaptiveHeight)
                        if (a.carousel) {
                            var n = 1 == a.settings.moveSlides ? a.active.index : a.active.index * b();
                            for (s = a.children.eq(n), i = 1; i <= a.settings.maxSlides - 1; i++) s = s.add(n + i >= a.children.length ? a.children.eq(i - 1) : a.children.eq(n + i))
                        } else s = a.children.eq(a.active.index);
                    else s = a.children;
                    return "vertical" == a.settings.mode ? (s.each(function() {
                        t += e(this).outerHeight()
                    }), a.settings.slideMargin > 0 && (t += a.settings.slideMargin * (a.settings.minSlides - 1))) : t = Math.max.apply(Math, s.map(function() {
                        return e(this).outerHeight(!1)
                    }).get()), t
                },
                f = function() {
                    var e = "100%";
                    return a.settings.slideWidth > 0 && (e = "horizontal" == a.settings.mode ? a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin : a.settings.slideWidth), e
                },
                g = function() {
                    var e = a.settings.slideWidth,
                        t = a.viewport.width();
                    return 0 == a.settings.slideWidth || a.settings.slideWidth > t && !a.carousel || "vertical" == a.settings.mode ? e = t : a.settings.maxSlides > 1 && "horizontal" == a.settings.mode && (t > a.maxThreshold || t < a.minThreshold && (e = (t - a.settings.slideMargin * (a.settings.minSlides - 1)) / a.settings.minSlides)), e
                },
                m = function() {
                    var e = 1;
                    if ("horizontal" == a.settings.mode && a.settings.slideWidth > 0)
                        if (a.viewport.width() < a.minThreshold) e = a.settings.minSlides;
                        else if (a.viewport.width() > a.maxThreshold) e = a.settings.maxSlides;
                    else {
                        var t = a.children.first().width();
                        e = Math.floor(a.viewport.width() / t)
                    } else "vertical" == a.settings.mode && (e = a.settings.minSlides);
                    return e
                },
                v = function() {
                    var e = 0;
                    if (a.settings.moveSlides > 0)
                        if (a.settings.infiniteLoop) e = a.children.length / b();
                        else
                            for (var t = 0, i = 0; t < a.children.length;) ++e, t = i + m(), i += a.settings.moveSlides <= m() ? a.settings.moveSlides : m();
                    else e = Math.ceil(a.children.length / m());
                    return e
                },
                b = function() {
                    return a.settings.moveSlides > 0 && a.settings.moveSlides <= m() ? a.settings.moveSlides : m()
                },
                y = function() {
                    if (a.children.length > a.settings.maxSlides && a.active.last && !a.settings.infiniteLoop) {
                        if ("horizontal" == a.settings.mode) {
                            var e = a.children.last(),
                                t = e.position();
                            w(-(t.left - (a.viewport.width() - e.width())), "reset", 0)
                        } else if ("vertical" == a.settings.mode) {
                            var i = a.children.length - a.settings.minSlides,
                                t = a.children.eq(i).position();
                            w(-t.top, "reset", 0)
                        }
                    } else {
                        var t = a.children.eq(a.active.index * b()).position();
                        a.active.index == v() - 1 && (a.active.last = !0), void 0 != t && ("horizontal" == a.settings.mode ? w(-t.left, "reset", 0) : "vertical" == a.settings.mode && w(-t.top, "reset", 0))
                    }
                },
                w = function(e, t, i, s) {
                    if (a.usingCSS) {
                        var n = "vertical" == a.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)";
                        o.css("-" + a.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == t ? (o.css(a.animProp, n), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), A()
                        })) : "reset" == t ? o.css(a.animProp, n) : "ticker" == t && (o.css("-" + a.cssPrefix + "-transition-timing-function", "linear"), o.css(a.animProp, n), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), w(s.resetValue, "reset", 0), E()
                        }))
                    } else {
                        var r = {};
                        r[a.animProp] = e, "slide" == t ? o.animate(r, i, a.settings.easing, function() {
                            A()
                        }) : "reset" == t ? o.css(a.animProp, e) : "ticker" == t && o.animate(r, speed, "linear", function() {
                            w(s.resetValue, "reset", 0), E()
                        })
                    }
                },
                N = function() {
                    for (var t = "", i = v(), s = 0; i > s; s++) {
                        var n = "";
                        a.settings.buildPager && e.isFunction(a.settings.buildPager) ? (n = a.settings.buildPager(s), a.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, a.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
                    }
                    a.pagerEl.html(t)
                },
                k = function() {
                    a.settings.pagerCustom ? a.pagerEl = e(a.settings.pagerCustom) : (a.pagerEl = e('<div class="bx-pager" />'), a.settings.pagerSelector ? e(a.settings.pagerSelector).html(a.pagerEl) : a.controls.el.addClass("bx-has-pager").append(a.pagerEl), N()), a.pagerEl.delegate("a", "click", j)
                },
                x = function() {
                    a.controls.next = e('<a class="bx-next" href="">' + a.settings.nextText + "</a>"), a.controls.prev = e('<a class="bx-prev" href="">' + a.settings.prevText + "</a>"), a.controls.next.bind("click", $), a.controls.prev.bind("click", S), a.settings.nextSelector && e(a.settings.nextSelector).append(a.controls.next), a.settings.prevSelector && e(a.settings.prevSelector).append(a.controls.prev), a.settings.nextSelector || a.settings.prevSelector || (a.controls.directionEl = e('<div class="bx-controls-direction" />'), a.controls.directionEl.append(a.controls.prev).append(a.controls.next), a.controls.el.addClass("bx-has-controls-direction").append(a.controls.directionEl))
                },
                _ = function() {
                    a.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + a.settings.startText + "</a></div>"), a.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + a.settings.stopText + "</a></div>"), a.controls.autoEl = e('<div class="bx-controls-auto" />'), a.controls.autoEl.delegate(".bx-start", "click", T), a.controls.autoEl.delegate(".bx-stop", "click", P), a.settings.autoControlsCombine ? a.controls.autoEl.append(a.controls.start) : a.controls.autoEl.append(a.controls.start).append(a.controls.stop), a.settings.autoControlsSelector ? e(a.settings.autoControlsSelector).html(a.controls.autoEl) : a.controls.el.addClass("bx-has-controls-auto").append(a.controls.autoEl), D(a.settings.autoStart ? "stop" : "start")
                },
                C = function() {
                    a.children.each(function() {
                        var t = e(this).find("img:first").attr("title");
                        void 0 != t && ("" + t).length && e(this).append('<div class="bx-caption"><span>' + t + "</span></div>")
                    })
                },
                $ = function(e) {
                    a.settings.auto && o.stopAuto(), o.goToNextSlide(), e.preventDefault()
                },
                S = function(e) {
                    a.settings.auto && o.stopAuto(), o.goToPrevSlide(), e.preventDefault()
                },
                T = function(e) {
                    o.startAuto(), e.preventDefault()
                },
                P = function(e) {
                    o.stopAuto(), e.preventDefault()
                },
                j = function(t) {
                    a.settings.auto && o.stopAuto();
                    var i = e(t.currentTarget),
                        s = parseInt(i.attr("data-slide-index"));
                    s != a.active.index && o.goToSlide(s), t.preventDefault()
                },
                z = function(t) {
                    var i = a.children.length;
                    return "short" == a.settings.pagerType ? (a.settings.maxSlides > 1 && (i = Math.ceil(a.children.length / a.settings.maxSlides)), void a.pagerEl.html(t + 1 + a.settings.pagerShortSeparator + i)) : (a.pagerEl.find("a").removeClass("active"), void a.pagerEl.each(function(i, s) {
                        e(s).find("a").eq(t).addClass("active")
                    }))
                },
                A = function() {
                    if (a.settings.infiniteLoop) {
                        var e = "";
                        0 == a.active.index ? e = a.children.eq(0).position() : a.active.index == v() - 1 && a.carousel ? e = a.children.eq((v() - 1) * b()).position() : a.active.index == a.children.length - 1 && (e = a.children.eq(a.children.length - 1).position()), "horizontal" == a.settings.mode ? w(-e.left, "reset", 0) : "vertical" == a.settings.mode && w(-e.top, "reset", 0)
                    }
                    a.working = !1, a.settings.onSlideAfter(a.children.eq(a.active.index), a.oldIndex, a.active.index)
                },
                D = function(e) {
                    a.settings.autoControlsCombine ? a.controls.autoEl.html(a.controls[e]) : (a.controls.autoEl.find("a").removeClass("active"), a.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
                },
                I = function() {
                    1 == v() ? (a.controls.prev.addClass("disabled"), a.controls.next.addClass("disabled")) : !a.settings.infiniteLoop && a.settings.hideControlOnEnd && (0 == a.active.index ? (a.controls.prev.addClass("disabled"), a.controls.next.removeClass("disabled")) : a.active.index == v() - 1 ? (a.controls.next.addClass("disabled"), a.controls.prev.removeClass("disabled")) : (a.controls.prev.removeClass("disabled"), a.controls.next.removeClass("disabled")))
                },
                R = function() {
                    a.settings.autoDelay > 0 ? setTimeout(o.startAuto, a.settings.autoDelay) : o.startAuto(), a.settings.autoHover && o.hover(function() {
                        a.interval && (o.stopAuto(!0), a.autoPaused = !0)
                    }, function() {
                        a.autoPaused && (o.startAuto(!0), a.autoPaused = null)
                    })
                },
                M = function() {
                    var t = 0;
                    if ("next" == a.settings.autoDirection) o.append(a.children.clone().addClass("bx-clone"));
                    else {
                        o.prepend(a.children.clone().addClass("bx-clone"));
                        var i = a.children.first().position();
                        t = "horizontal" == a.settings.mode ? -i.left : -i.top
                    }
                    w(t, "reset", 0), a.settings.pager = !1, a.settings.controls = !1, a.settings.autoControls = !1, a.settings.tickerHover && !a.usingCSS && a.viewport.hover(function() {
                        o.stop()
                    }, function() {
                        var t = 0;
                        a.children.each(function() {
                            t += "horizontal" == a.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                        });
                        var i = a.settings.speed / t,
                            s = "horizontal" == a.settings.mode ? "left" : "top",
                            n = i * (t - Math.abs(parseInt(o.css(s))));
                        E(n)
                    }), E()
                },
                E = function(e) {
                    speed = e ? e : a.settings.speed;
                    var t = {
                            left: 0,
                            top: 0
                        },
                        i = {
                            left: 0,
                            top: 0
                        };
                    "next" == a.settings.autoDirection ? t = o.find(".bx-clone").first().position() : i = a.children.first().position();
                    var s = "horizontal" == a.settings.mode ? -t.left : -t.top,
                        n = "horizontal" == a.settings.mode ? -i.left : -i.top,
                        r = {
                            resetValue: n
                        };
                    w(s, "ticker", speed, r)
                },
                W = function() {
                    a.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, a.viewport.bind("touchstart", O)
                },
                O = function(e) {
                    if (a.working) e.preventDefault();
                    else {
                        a.touch.originalPos = o.position();
                        var t = e.originalEvent;
                        a.touch.start.x = t.changedTouches[0].pageX, a.touch.start.y = t.changedTouches[0].pageY, a.viewport.bind("touchmove", H), a.viewport.bind("touchend", q)
                    }
                },
                H = function(e) {
                    var t = e.originalEvent,
                        i = Math.abs(t.changedTouches[0].pageX - a.touch.start.x),
                        s = Math.abs(t.changedTouches[0].pageY - a.touch.start.y);
                    if (3 * i > s && a.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * s > i && a.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != a.settings.mode && a.settings.oneToOneTouch) {
                        var n = 0;
                        if ("horizontal" == a.settings.mode) {
                            var o = t.changedTouches[0].pageX - a.touch.start.x;
                            n = a.touch.originalPos.left + o
                        } else {
                            var o = t.changedTouches[0].pageY - a.touch.start.y;
                            n = a.touch.originalPos.top + o
                        }
                        w(n, "reset", 0)
                    }
                },
                q = function(e) {
                    a.viewport.unbind("touchmove", H);
                    var t = e.originalEvent,
                        i = 0;
                    if (a.touch.end.x = t.changedTouches[0].pageX, a.touch.end.y = t.changedTouches[0].pageY, "fade" == a.settings.mode) {
                        var s = Math.abs(a.touch.start.x - a.touch.end.x);
                        s >= a.settings.swipeThreshold && (a.touch.start.x > a.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())
                    } else {
                        var s = 0;
                        "horizontal" == a.settings.mode ? (s = a.touch.end.x - a.touch.start.x, i = a.touch.originalPos.left) : (s = a.touch.end.y - a.touch.start.y, i = a.touch.originalPos.top), !a.settings.infiniteLoop && (0 == a.active.index && s > 0 || a.active.last && 0 > s) ? w(i, "reset", 200) : Math.abs(s) >= a.settings.swipeThreshold ? (0 > s ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : w(i, "reset", 200)
                    }
                    a.viewport.unbind("touchend", q)
                },
                L = function() {
                    var t = e(window).width(),
                        i = e(window).height();
                    (r != t || l != i) && (r = t, l = i, o.redrawSlider())
                };
            return o.goToSlide = function(t, i) {
                if (!a.working && a.active.index != t)
                    if (a.working = !0, a.oldIndex = a.active.index, a.active.index = 0 > t ? v() - 1 : t >= v() ? 0 : t, a.settings.onSlideBefore(a.children.eq(a.active.index), a.oldIndex, a.active.index), "next" == i ? a.settings.onSlideNext(a.children.eq(a.active.index), a.oldIndex, a.active.index) : "prev" == i && a.settings.onSlidePrev(a.children.eq(a.active.index), a.oldIndex, a.active.index), a.active.last = a.active.index >= v() - 1, a.settings.pager && z(a.active.index), a.settings.controls && I(), "fade" == a.settings.mode) a.settings.adaptiveHeight && a.viewport.height() != p() && a.viewport.animate({
                        height: p()
                    }, a.settings.adaptiveHeightSpeed), a.children.filter(":visible").fadeOut(a.settings.speed).css({
                        zIndex: 0
                    }), a.children.eq(a.active.index).css("zIndex", 51).fadeIn(a.settings.speed, function() {
                        e(this).css("zIndex", 50), A()
                    });
                    else {
                        a.settings.adaptiveHeight && a.viewport.height() != p() && a.viewport.animate({
                            height: p()
                        }, a.settings.adaptiveHeightSpeed);
                        var s = 0,
                            n = {
                                left: 0,
                                top: 0
                            };
                        if (!a.settings.infiniteLoop && a.carousel && a.active.last)
                            if ("horizontal" == a.settings.mode) {
                                var r = a.children.eq(a.children.length - 1);
                                n = r.position(), s = a.viewport.width() - r.outerWidth()
                            } else {
                                var l = a.children.length - a.settings.minSlides;
                                n = a.children.eq(l).position()
                            }
                        else if (a.carousel && a.active.last && "prev" == i) {
                            var c = 1 == a.settings.moveSlides ? a.settings.maxSlides - b() : (v() - 1) * b() - (a.children.length - a.settings.maxSlides),
                                r = o.children(".bx-clone").eq(c);
                            n = r.position()
                        } else if ("next" == i && 0 == a.active.index) n = o.find("> .bx-clone").eq(a.settings.maxSlides).position(), a.active.last = !1;
                        else if (t >= 0) {
                            var d = t * b();
                            n = a.children.eq(d).position()
                        }
                        if ("undefined" != typeof n) {
                            var u = "horizontal" == a.settings.mode ? -(n.left - s) : -n.top;
                            w(u, "slide", a.settings.speed)
                        }
                    }
            }, o.goToNextSlide = function() {
                if (a.settings.infiniteLoop || !a.active.last) {
                    var e = parseInt(a.active.index) + 1;
                    o.goToSlide(e, "next")
                }
            }, o.goToPrevSlide = function() {
                if (a.settings.infiniteLoop || 0 != a.active.index) {
                    var e = parseInt(a.active.index) - 1;
                    o.goToSlide(e, "prev")
                }
            }, o.startAuto = function(e) {
                a.interval || (a.interval = setInterval(function() {
                    "next" == a.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
                }, a.settings.pause), a.settings.autoControls && 1 != e && D("stop"))
            }, o.stopAuto = function(e) {
                a.interval && (clearInterval(a.interval), a.interval = null, a.settings.autoControls && 1 != e && D("start"))
            }, o.getCurrentSlide = function() {
                return a.active.index
            }, o.getSlideCount = function() {
                return a.children.length
            }, o.redrawSlider = function() {
                a.children.add(o.find(".bx-clone")).outerWidth(g()), a.viewport.css("height", p()), a.settings.ticker || y(), a.active.last && (a.active.index = v() - 1), a.active.index >= v() && (a.active.last = !0), a.settings.pager && !a.settings.pagerCustom && (N(), z(a.active.index))
            }, o.destroySlider = function() {
                a.initialized && (a.initialized = !1, e(".bx-clone", this).remove(), a.children.each(function() {
                    void 0 != e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
                }), void 0 != e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), a.controls.el && a.controls.el.remove(), a.controls.next && a.controls.next.remove(), a.controls.prev && a.controls.prev.remove(), a.pagerEl && a.pagerEl.remove(), e(".bx-caption", this).remove(), a.controls.autoEl && a.controls.autoEl.remove(), clearInterval(a.interval), a.settings.responsive && e(window).unbind("resize", L))
            }, o.reloadSlider = function(e) {
                void 0 != e && (n = e), o.destroySlider(), c()
            }, c(), this
        }
    }(jQuery), document.createElement("canvas").getContext || function() {
        function e() {}

        function t(e) {
            this.type_ = e, this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0, this.colors_ = []
        }

        function i(e, t, i) {
            !s(t) || (e.m_ = t, i && (e.lineScale_ = w(y(t[0][0] * t[1][1] - t[0][1] * t[1][0]))))
        }

        function s(e) {
            for (var t = 0; 3 > t; t++)
                for (var i = 0; 2 > i; i++)
                    if (!isFinite(e[t][i]) || isNaN(e[t][i])) return !1;
            return !0
        }

        function n(e, t, i, s) {
            e.currentPath_.push({
                type: "bezierCurveTo",
                cp1x: t.x,
                cp1y: t.y,
                cp2x: i.x,
                cp2y: i.y,
                x: s.x,
                y: s.y
            }), e.currentX_ = s.x, e.currentY_ = s.y
        }

        function a(e) {
            this.m_ = d(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.fillStyle = this.strokeStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = 1 * N, this.globalAlpha = 1, this.canvas = e;
            var t = e.ownerDocument.createElement("div");
            t.style.width = e.clientWidth + "px", t.style.height = e.clientHeight + "px", t.style.overflow = "hidden", t.style.position = "absolute", e.appendChild(t), this.element_ = t, this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
        }

        function o(e) {
            switch (e) {
                case "butt":
                    return "flat";
                case "round":
                    return "round";
                case "square":
                default:
                    return "square"
            }
        }

        function r(e) {
            var t, i = 1;
            if (e = String(e), "rgb" == e.substring(0, 3)) {
                var s = e.indexOf("(", 3),
                    n = e.indexOf(")", s + 1),
                    a = e.substring(s + 1, n).split(",");
                t = "#";
                for (var o = 0; 3 > o; o++) t += C[Number(a[o])];
                4 == a.length && "a" == e.substr(3, 1) && (i = a[3])
            } else t = e;
            return {
                color: t,
                alpha: i
            }
        }

        function l(e, t) {
            t.fillStyle = e.fillStyle, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.shadowBlur = e.shadowBlur, t.shadowColor = e.shadowColor, t.shadowOffsetX = e.shadowOffsetX, t.shadowOffsetY = e.shadowOffsetY, t.strokeStyle = e.strokeStyle, t.globalAlpha = e.globalAlpha, t.arcScaleX_ = e.arcScaleX_, t.arcScaleY_ = e.arcScaleY_, t.lineScale_ = e.lineScale_
        }

        function c(e, t) {
            for (var i = d(), s = 0; 3 > s; s++)
                for (var n = 0; 3 > n; n++) {
                    for (var a = 0, o = 0; 3 > o; o++) a += e[s][o] * t[o][n];
                    i[s][n] = a
                }
            return i
        }

        function d() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ]
        }

        function u(e) {
            var t = e.srcElement;
            t.firstChild && (t.firstChild.style.width = t.clientWidth + "px", t.firstChild.style.height = t.clientHeight + "px")
        }

        function h(e) {
            var t = e.srcElement;
            switch (e.propertyName) {
                case "width":
                    t.style.width = t.attributes.width.nodeValue + "px", t.getContext().clearRect();
                    break;
                case "height":
                    t.style.height = t.attributes.height.nodeValue + "px", t.getContext().clearRect()
            }
        }

        function p(e, t) {
            var i = x.call(arguments, 2);
            return function() {
                return e.apply(t, i.concat(x.call(arguments)))
            }
        }

        function f() {
            return this.context_ || (this.context_ = new a(this))
        }
        var g = Math,
            m = g.round,
            v = g.sin,
            b = g.cos,
            y = g.abs,
            w = g.sqrt,
            N = 10,
            k = N / 2,
            x = Array.prototype.slice,
            _ = {
                init: function(e) {
                    if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                        var t = e || document;
                        t.createElement("canvas"), t.attachEvent("onreadystatechange", p(this.init_, this, t))
                    }
                },
                init_: function(e) {
                    if (e.namespaces.g_vml_ || e.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML"), e.namespaces.g_o_ || e.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML"), !e.styleSheets.ex_canvas_) {
                        var t = e.createStyleSheet();
                        t.owningElement.id = "ex_canvas_", t.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
                    }
                    for (var i = e.getElementsByTagName("canvas"), s = 0; s < i.length; s++) this.initElement(i[s])
                },
                initElement: function(e) {
                    if (!e.getContext) {
                        e.getContext = f, e.innerHTML = "", e.attachEvent("onpropertychange", h), e.attachEvent("onresize", u);
                        var t = e.attributes;
                        t.width && t.width.specified ? e.style.width = t.width.nodeValue + "px" : e.width = e.clientWidth, t.height && t.height.specified ? e.style.height = t.height.nodeValue + "px" : e.height = e.clientHeight
                    }
                    return e
                }
            };
        _.init();
        for (var C = [], $ = 0; 16 > $; $++)
            for (var S = 0; 16 > S; S++) C[16 * $ + S] = $.toString(16) + S.toString(16);
        var T = a.prototype;
        T.clearRect = function() {
            this.element_.innerHTML = ""
        }, T.beginPath = function() {
            this.currentPath_ = []
        }, T.moveTo = function(e, t) {
            var i = this.getCoords_(e, t);
            this.currentPath_.push({
                type: "moveTo",
                x: i.x,
                y: i.y
            }), this.currentX_ = i.x, this.currentY_ = i.y
        }, T.lineTo = function(e, t) {
            var i = this.getCoords_(e, t);
            this.currentPath_.push({
                type: "lineTo",
                x: i.x,
                y: i.y
            }), this.currentX_ = i.x, this.currentY_ = i.y
        }, T.bezierCurveTo = function(e, t, i, s, a, o) {
            var r = this.getCoords_(a, o),
                l = this.getCoords_(e, t),
                c = this.getCoords_(i, s);
            n(this, l, c, r)
        }, T.quadraticCurveTo = function(e, t, i, s) {
            var a = this.getCoords_(e, t),
                o = this.getCoords_(i, s),
                r = {
                    x: this.currentX_ + .6666666666666666 * (a.x - this.currentX_),
                    y: this.currentY_ + .6666666666666666 * (a.y - this.currentY_)
                };
            n(this, r, {
                x: r.x + (o.x - this.currentX_) / 3,
                y: r.y + (o.y - this.currentY_) / 3
            }, o)
        }, T.arc = function(e, t, i, s, n, a) {
            i *= N;
            var o = a ? "at" : "wa",
                r = e + b(s) * i - k,
                l = t + v(s) * i - k,
                c = e + b(n) * i - k,
                d = t + v(n) * i - k;
            r == c && !a && (r += .125);
            var u = this.getCoords_(e, t),
                h = this.getCoords_(r, l),
                p = this.getCoords_(c, d);
            this.currentPath_.push({
                type: o,
                x: u.x,
                y: u.y,
                radius: i,
                xStart: h.x,
                yStart: h.y,
                xEnd: p.x,
                yEnd: p.y
            })
        }, T.rect = function(e, t, i, s) {
            this.moveTo(e, t), this.lineTo(e + i, t), this.lineTo(e + i, t + s), this.lineTo(e, t + s), this.closePath()
        }, T.strokeRect = function(e, t, i, s) {
            var n = this.currentPath_;
            this.beginPath(), this.moveTo(e, t), this.lineTo(e + i, t), this.lineTo(e + i, t + s), this.lineTo(e, t + s), this.closePath(), this.stroke(), this.currentPath_ = n
        }, T.fillRect = function(e, t, i, s) {
            var n = this.currentPath_;
            this.beginPath(), this.moveTo(e, t), this.lineTo(e + i, t), this.lineTo(e + i, t + s), this.lineTo(e, t + s), this.closePath(), this.fill(), this.currentPath_ = n
        }, T.createLinearGradient = function(e, i, s, n) {
            var a = new t("gradient");
            return a.x0_ = e, a.y0_ = i, a.x1_ = s, a.y1_ = n, a
        }, T.createRadialGradient = function(e, i, s, n, a, o) {
            var r = new t("gradientradial");
            return r.x0_ = e, r.y0_ = i, r.r0_ = s, r.x1_ = n, r.y1_ = a, r.r1_ = o, r
        }, T.drawImage = function(e) {
            var t, i, s, n, a, o, r, l, c = e.runtimeStyle.width,
                d = e.runtimeStyle.height;
            e.runtimeStyle.width = "auto", e.runtimeStyle.height = "auto";
            var u = e.width,
                h = e.height;
            if (e.runtimeStyle.width = c, e.runtimeStyle.height = d, 3 == arguments.length) t = arguments[1], i = arguments[2], a = o = 0, r = s = u, l = n = h;
            else if (5 == arguments.length) t = arguments[1], i = arguments[2], s = arguments[3], n = arguments[4], a = o = 0, r = u, l = h;
            else {
                if (9 != arguments.length) throw Error("Invalid number of arguments");
                a = arguments[1], o = arguments[2], r = arguments[3], l = arguments[4], t = arguments[5], i = arguments[6], s = arguments[7], n = arguments[8]
            }
            var p = this.getCoords_(t, i),
                f = [];
            if (f.push(" <g_vml_:group", ' coordsize="', 10 * N, ",", 10 * N, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;"), 1 != this.m_[0][0] || this.m_[0][1]) {
                var v = [];
                v.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", m(p.x / N), ",", "Dy=", m(p.y / N), "");
                var b = p,
                    y = this.getCoords_(t + s, i),
                    w = this.getCoords_(t, i + n),
                    k = this.getCoords_(t + s, i + n);
                b.x = g.max(b.x, y.x, w.x, k.x), b.y = g.max(b.y, y.y, w.y, k.y), f.push("padding:0 ", m(b.x / N), "px ", m(b.y / N), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", v.join(""), ", sizingmethod='clip');")
            } else f.push("top:", m(p.y / N), "px;left:", m(p.x / N), "px;");
            f.push(' ">', '<g_vml_:image src="', e.src, '"', ' style="width:', N * s, "px;", " height:", N * n, 'px;"', ' cropleft="', a / u, '"', ' croptop="', o / h, '"', ' cropright="', (u - a - r) / u, '"', ' cropbottom="', (h - o - l) / h, '"', " />", "</g_vml_:group>"), this.element_.insertAdjacentHTML("BeforeEnd", f.join(""))
        }, T.stroke = function(e) {
            var t = [],
                i = r(e ? this.fillStyle : this.strokeStyle),
                s = i.color,
                n = i.alpha * this.globalAlpha;
            t.push("<g_vml_:shape", ' filled="', !!e, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0 0" coordsize="', 10 * N, " ", 10 * N, '"', ' stroked="', !e, '"', ' path="');
            for (var a = {
                    x: null,
                    y: null
                }, l = {
                    x: null,
                    y: null
                }, c = 0; c < this.currentPath_.length; c++) {
                var d = this.currentPath_[c];
                switch (d.type) {
                    case "moveTo":
                        t.push(" m ", m(d.x), ",", m(d.y));
                        break;
                    case "lineTo":
                        t.push(" l ", m(d.x), ",", m(d.y));
                        break;
                    case "close":
                        t.push(" x "), d = null;
                        break;
                    case "bezierCurveTo":
                        t.push(" c ", m(d.cp1x), ",", m(d.cp1y), ",", m(d.cp2x), ",", m(d.cp2y), ",", m(d.x), ",", m(d.y));
                        break;
                    case "at":
                    case "wa":
                        t.push(" ", d.type, " ", m(d.x - this.arcScaleX_ * d.radius), ",", m(d.y - this.arcScaleY_ * d.radius), " ", m(d.x + this.arcScaleX_ * d.radius), ",", m(d.y + this.arcScaleY_ * d.radius), " ", m(d.xStart), ",", m(d.yStart), " ", m(d.xEnd), ",", m(d.yEnd))
                }
                d && ((null == a.x || d.x < a.x) && (a.x = d.x), (null == l.x || d.x > l.x) && (l.x = d.x), (null == a.y || d.y < a.y) && (a.y = d.y), (null == l.y || d.y > l.y) && (l.y = d.y))
            }
            if (t.push(' ">'), e)
                if ("object" == typeof this.fillStyle) {
                    var u = this.fillStyle,
                        h = 0,
                        p = {
                            x: 0,
                            y: 0
                        },
                        f = 0,
                        v = 1;
                    if ("gradient" == u.type_) {
                        var b = u.x1_ / this.arcScaleX_,
                            y = u.y1_ / this.arcScaleY_,
                            w = this.getCoords_(u.x0_ / this.arcScaleX_, u.y0_ / this.arcScaleY_),
                            k = this.getCoords_(b, y);
                        h = 180 * Math.atan2(k.x - w.x, k.y - w.y) / Math.PI, 0 > h && (h += 360), 1e-6 > h && (h = 0)
                    } else {
                        var w = this.getCoords_(u.x0_, u.y0_),
                            x = l.x - a.x,
                            _ = l.y - a.y;
                        p = {
                            x: (w.x - a.x) / x,
                            y: (w.y - a.y) / _
                        }, x /= this.arcScaleX_ * N, _ /= this.arcScaleY_ * N;
                        var C = g.max(x, _);
                        f = 2 * u.r0_ / C, v = 2 * u.r1_ / C - f
                    }
                    var $ = u.colors_;
                    $.sort(function(e, t) {
                        return e.offset - t.offset
                    });
                    for (var S = $.length, T = $[0].color, P = $[S - 1].color, j = $[0].alpha * this.globalAlpha, z = $[S - 1].alpha * this.globalAlpha, A = [], c = 0; S > c; c++) {
                        var D = $[c];
                        A.push(D.offset * v + f + " " + D.color)
                    }
                    t.push('<g_vml_:fill type="', u.type_, '"', ' method="none" focus="100%"', ' color="', T, '"', ' color2="', P, '"', ' colors="', A.join(","), '"', ' opacity="', z, '"', ' g_o_:opacity2="', j, '"', ' angle="', h, '"', ' focusposition="', p.x, ",", p.y, '" />')
                } else t.push('<g_vml_:fill color="', s, '" opacity="', n, '" />');
            else {
                var I = this.lineScale_ * this.lineWidth;
                1 > I && (n *= I), t.push("<g_vml_:stroke", ' opacity="', n, '"', ' joinstyle="', this.lineJoin, '"', ' miterlimit="', this.miterLimit, '"', ' endcap="', o(this.lineCap), '"', ' weight="', I, 'px"', ' color="', s, '" />')
            }
            t.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", t.join(""))
        }, T.fill = function() {
            this.stroke(!0)
        }, T.closePath = function() {
            this.currentPath_.push({
                type: "close"
            })
        }, T.getCoords_ = function(e, t) {
            var i = this.m_;
            return {
                x: N * (e * i[0][0] + t * i[1][0] + i[2][0]) - k,
                y: N * (e * i[0][1] + t * i[1][1] + i[2][1]) - k
            }
        }, T.save = function() {
            var e = {};
            l(this, e), this.aStack_.push(e), this.mStack_.push(this.m_), this.m_ = c(d(), this.m_)
        }, T.restore = function() {
            l(this.aStack_.pop(), this), this.m_ = this.mStack_.pop()
        }, T.translate = function(e, t) {
            i(this, c([
                [1, 0, 0],
                [0, 1, 0],
                [e, t, 1]
            ], this.m_), !1)
        }, T.rotate = function(e) {
            var t = b(e),
                s = v(e);
            i(this, c([
                [t, s, 0],
                [-s, t, 0],
                [0, 0, 1]
            ], this.m_), !1)
        }, T.scale = function(e, t) {
            this.arcScaleX_ *= e, this.arcScaleY_ *= t, i(this, c([
                [e, 0, 0],
                [0, t, 0],
                [0, 0, 1]
            ], this.m_), !0)
        }, T.transform = function(e, t, s, n, a, o) {
            i(this, c([
                [e, t, 0],
                [s, n, 0],
                [a, o, 1]
            ], this.m_), !0)
        }, T.setTransform = function(e, t, s, n, a, o) {
            i(this, [
                [e, t, 0],
                [s, n, 0],
                [a, o, 1]
            ], !0)
        }, T.clip = function() {}, T.arcTo = function() {}, T.createPattern = function() {
            return new e
        }, t.prototype.addColorStop = function(e, t) {
            t = r(t), this.colors_.push({
                offset: e,
                color: t.color,
                alpha: t.alpha
            })
        }, G_vmlCanvasManager = _, CanvasRenderingContext2D = a, CanvasGradient = t, CanvasPattern = e
    }(),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(e) {
            return r.raw ? e : encodeURIComponent(e)
        }

        function i(e) {
            return r.raw ? e : decodeURIComponent(e)
        }

        function s(e) {
            return t(r.json ? JSON.stringify(e) : String(e))
        }

        function n(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                e = decodeURIComponent(e.replace(o, " "))
            } catch (t) {
                return
            }
            try {
                return r.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function a(t, i) {
            var s = r.raw ? t : n(t);
            return e.isFunction(i) ? i(s) : s
        }
        var o = /\+/g,
            r = e.cookie = function(n, o, l) {
                if (void 0 !== o && !e.isFunction(o)) {
                    if (l = e.extend({}, r.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            d = l.expires = new Date;
                        d.setDate(d.getDate() + c)
                    }
                    return document.cookie = [t(n), "=", s(o), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var u = n ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                    var g = h[p].split("="),
                        m = i(g.shift()),
                        v = g.join("=");
                    if (n && n === m) {
                        u = a(v, o);
                        break
                    }
                    n || void 0 === (v = a(v)) || (u[m] = v)
                }
                return u
            };
        r.defaults = {}, e.removeCookie = function(t, i) {
            return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend({}, i, {
                expires: -1
            })), !0) : !1
        }
    });
var Spinners = {
    version: "3.0.0"
};
! function(e) {
    function t(e) {
        return e * Math.PI / 180
    }

    function i(e) {
        this.element = e
    }

    function s(t, i) {
        t && (this.element = t, r.remove(t), r.removeDetached(), this._position = 0, this._state = "stopped", this.setOptions(e.extend({
            color: "#000",
            dashes: 12,
            radius: 5,
            height: 5,
            width: 1.8,
            opacity: 1,
            padding: 3,
            rotation: 700
        }, i || {})), this.drawPosition(0), r.add(this))
    }
    var n = {
            scroll: function(e, t) {
                if (!t) return e;
                var i = e.slice(0, t);
                return e.slice(t, e.length).concat(i)
            },
            isElement: function(e) {
                return e && 1 == e.nodeType
            },
            element: {
                isAttached: function() {
                    return function(e) {
                        for (; e && e.parentNode;) e = e.parentNode;
                        return !!e && !!e.body
                    }
                }()
            }
        },
        a = {
            drawRoundedRectangle: function(i, s) {
                var n = e.extend({
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        radius: 0
                    }, s || {}),
                    a = n.left,
                    o = n.top,
                    r = n.width,
                    l = n.height,
                    n = n.radius;
                i.beginPath(), i.moveTo(a + n, o), i.arc(a + r - n, o + n, n, t(-90), t(0), !1), i.arc(a + r - n, o + l - n, n, t(0), t(90), !1), i.arc(a + n, o + l - n, n, t(90), t(180), !1), i.arc(a + n, o + n, n, t(-180), t(-90), !1), i.closePath(), i.fill()
            }
        },
        o = function() {
            function e(e) {
                var i = [];
                if (0 == e.indexOf("#") && (e = e.substring(1)), e = e.toLowerCase(), "" != e.replace(t, "")) return null;
                for (3 == e.length ? (i[0] = e.charAt(0) + e.charAt(0), i[1] = e.charAt(1) + e.charAt(1), i[2] = e.charAt(2) + e.charAt(2)) : (i[0] = e.substring(0, 2), i[1] = e.substring(2, 4), i[2] = e.substring(4)), e = 0; e < i.length; e++) i[e] = parseInt(i[e], 16);
                return i.red = i[0], i.green = i[1], i.blue = i[2], i
            }
            var t = RegExp("[0123456789abcdef]", "g"),
                i = function() {
                    function e(e, t, i) {
                        return e = e.toString(i || 10), Array(t - e.length).join("0") + e
                    }
                    return function(t, i, s) {
                        return "#" + e(t, 2, 16) + e(i, 2, 16) + e(s, 2, 16)
                    }
                }();
            return {
                hex2rgb: e,
                hex2fill: function(t, i) {
                    "undefined" == typeof i && (i = 1);
                    var s = i,
                        n = e(t);
                    return n[3] = s, n.opacity = s, "rgba(" + n.join() + ")"
                },
                rgb2hex: i
            }
        }();
    e.extend(Spinners, {
        enabled: !1,
        support: {
            canvas: function() {
                var t = e("<canvas>")[0];
                return !!t.getContext && !!t.getContext("2d")
            }()
        },
        init: function() {
            (this.support.canvas || window.G_vmlCanvasManager && window.attachEvent && -1 === navigator.userAgent.indexOf("Opera")) && (window.G_vmlCanvasManager && window.G_vmlCanvasManager.init_(document), this.enabled = !0)
        },
        create: function(e, t) {
            return i.create(e, t), this.get(e)
        },
        get: function(e) {
            return new i(e)
        },
        play: function(e) {
            return this.get(e).play(), this
        },
        pause: function(e) {
            return this.get(e).pause(), this
        },
        toggle: function(e) {
            return this.get(e).toggle(), this
        },
        stop: function(e) {
            return this.get(e).stop(), this
        },
        remove: function(e) {
            return this.get(e).remove(), this
        },
        removeDetached: function() {
            return r.removeDetached(), this
        },
        center: function(e) {
            return this.get(e).center(), this
        },
        setOptions: function(e, t) {
            return this.get(e).setOptions(t), this
        },
        getDimensions: function(e) {
            return e = 2 * r.get(e)[0].getLayout().workspace.radius, {
                width: e,
                height: e
            }
        }
    });
    var r = {
        spinners: [],
        get: function(t) {
            if (t) {
                var i = [];
                return e.each(this.spinners, function(s, a) {
                    a && (n.isElement(t) ? a.element == t : e(a.element).is(t)) && i.push(a)
                }), i
            }
        },
        add: function(e) {
            this.spinners.push(e)
        },
        remove: function(t) {
            e(e.map(this.spinners, function(i) {
                return (n.isElement(t) ? i.element == t : e(i.element).is(t)) ? i.element : void 0
            })).each(e.proxy(function(e, t) {
                this.removeByElement(t)
            }, this))
        },
        removeByElement: function(t) {
            var i = this.get(t)[0];
            i && (i.remove(), this.spinners = e.grep(this.spinners, function(e) {
                return e.element != t
            }))
        },
        removeDetached: function() {
            e.each(this.spinners, e.proxy(function(e, t) {
                t && t.element && !n.element.isAttached(t.element) && this.remove(t.element)
            }, this))
        }
    };
    e.extend(i, {
        create: function(t, i) {
            if (t) {
                var a = i || {},
                    o = [];
                return n.isElement(t) ? o.push(new s(t, a)) : e(t).each(function(e, t) {
                    o.push(new s(t, a))
                }), o
            }
        }
    }), e.extend(i.prototype, {
        items: function() {
            return r.get(this.element)
        },
        play: function() {
            return e.each(this.items(), function(e, t) {
                t.play()
            }), this
        },
        stop: function() {
            return e.each(this.items(), function(e, t) {
                t.stop()
            }), this
        },
        pause: function() {
            return e.each(this.items(), function(e, t) {
                t.pause()
            }), this
        },
        toggle: function() {
            return e.each(this.items(), function(e, t) {
                t.toggle()
            }), this
        },
        center: function() {
            return e.each(this.items(), function(e, t) {
                t.center()
            }), this
        },
        setOptions: function(t) {
            return e.each(this.items(), function(e, i) {
                i.setOptions(t)
            }), this
        },
        remove: function() {
            return r.remove(this.element), this
        }
    }), e.extend(s.prototype, {
        setOptions: function(t) {
            this.options = e.extend({}, this.options, t || {}), this.options.radii && (t = this.options.radii, this.options.radius = Math.min(t[0], t[1]), this.options.height = Math.max(t[0], t[1]) - this.options.radius), this.options.dashWidth && (this.options.width = this.options.dashWidth), this.options.speed && (this.options.duration = 1e3 * this.options.speed);
            var t = this._state,
                i = this._position;
            switch (this._layout = null, this.build(), i && i >= this.options.dashes - 1 && (this._position = this.options.dashes - 1), t) {
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
            this.canvas && (this.pause(), e(this.canvas).remove(), this.ctx = this.canvas = null)
        },
        build: function() {
            this.remove();
            var t = this.getLayout().workspace.radius;
            return e(document.body).append(this.canvas = e("<canvas>").attr({
                width: 2 * t,
                height: 2 * t
            }).css({
                zoom: 1
            })), window.G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.canvas[0]), this.ctx = this.canvas[0].getContext("2d"), this.ctx.globalAlpha = this.options.opacity, e(this.element).append(this.canvas), this.ctx.translate(t, t), this
        },
        drawPosition: function(e) {
            var i = this.getLayout().workspace,
                e = n.scroll(i.opacities, -1 * e),
                s = i.radius,
                i = this.options.dashes,
                a = t(360 / i);
            for (this.ctx.clearRect(-1 * s, -1 * s, 2 * s, 2 * s), s = 0; i > s; s++) this.drawDash(e[s], this.options.color), this.ctx.rotate(a)
        },
        drawDash: function(e, t) {
            this.ctx.fillStyle = o.hex2fill(t, e);
            var i = this.getLayout(),
                s = i.workspace.radius,
                n = i.dash.position,
                i = i.dash.dimensions;
            a.drawRoundedRectangle(this.ctx, {
                top: n.top - s,
                left: n.left - s,
                width: i.width,
                height: i.height,
                radius: Math.min(i.height, i.width) / 2
            })
        },
        _nextPosition: function() {
            var t = this.options.rotation / this.options.dashes;
            this.nextPosition(), this._playTimer = window.setTimeout(e.proxy(this._nextPosition, this), t)
        },
        nextPosition: function() {
            this._position == this.options.dashes - 1 && (this._position = -1), this._position++, this.drawPosition(this._position)
        },
        play: function() {
            if ("playing" != this._state) {
                this._state = "playing";
                var t = this.options.rotation / this.options.dashes;
                return this._playTimer = window.setTimeout(e.proxy(this._nextPosition, this), t), this
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
            for (var e = this.options, t = e.dashes, i = e.width, s = e.radius, n = e.radius + e.height, a = Math.max(i, n), a = Math.ceil(Math.max(a, Math.sqrt(n * n + i / 2 * (i / 2)))), e = a += e.padding, o = 1 / t, r = [], l = 0; t > l; l++) r.push((l + 1) * o);
            return this._layout = t = {
                workspace: {
                    radius: e,
                    opacities: r
                },
                dash: {
                    position: {
                        top: a - n,
                        left: a - i / 2
                    },
                    dimensions: {
                        width: i,
                        height: n - s
                    }
                }
            }
        },
        center: function() {
            var t = 2 * this.getLayout().workspace.radius;
            e(this.element.parentNode).css({
                position: "relative"
            }), e(this.element).css({
                position: "absolute",
                height: t + "px",
                width: t + "px",
                top: "50%",
                left: "50%",
                marginLeft: -.5 * t + "px",
                marginTop: -.5 * t + "px"
            }), this._centered = !0
        }
    }), Spinners.init(), Spinners.enabled || (i.create = function() {
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
    function(e) {
        e.extend(Tipped.Skins, {
            black: e.extend(!0, {}, Tipped.Skins.dark, {
                radius: 0
            }),
            white: e.extend(!0, {}, Tipped.Skins.light, {
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
                "default": {
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
        "default": {},
        light: {
            diameter: 17,
            border: 2,
            x: {
                diameter: 10,
                size: 2,
                opacity: 1
            },
            states: {
                "default": {
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
    }, eval(function(e, t, i, s, n, a) {
        if (n = function(e) {
                return (t > e ? "" : n(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
            }, !"".replace(/^/, String)) {
            for (; i--;) a[n(i)] = s[i] || n(i);
            s = [function(e) {
                return a[e]
            }], n = function() {
                return "\\w+"
            }, i = 1
        }
        for (; i--;) s[i] && (e = e.replace(new RegExp("\\b" + n(i) + "\\b", "g"), s[i]));
        return e
    }('(12(a){12 c(a,b){13 c=[a,b];1a c.15=a,c.17=b,c}12 f(a){1N.5v&&5v[5v.6z?"6z":"8c"](a)}12 j(a){11.1g=a}12 k(a){13 b={};28(13 c 5w a)b[c]=a[c]+"2w";1a b}12 l(a,b){1a 1b.8d(a*a+b*b)}12 m(a){1a 2E*a/1b.2Z}12 n(a){1a a*1b.2Z/2E}12 o(a){1a 1/1b.4A(a)}12 v(b){1f(b){11.1g=b,u.1z(b);13 c=11.2e();11.19=a.1k({},c.19),11.2x=1,11.1o={},11.1V=a(b).1X("2p-1V"),u.30(11),11.29=11.19.1u.1D,11.6A=11.19.1l&&11.29,11.3a={x:0,y:0},11.3l={17:0,15:0},11.1P()}}12 x(b,c){11.1g=b,11.1g&&c&&(11.19=a.1k({31:3,1A:{x:0,y:0},1Q:"#4B",1K:.5,2L:1},20[2]||{}),11.2x=11.19.2L,11.1o={},11.1V=a(b).1X("2p-1V"),w.30(11),11.1P())}12 z(b){11.1g=b,11.1g&&(11.19=a.1k({31:5,1A:{x:0,y:0},1Q:"#4B",1K:.5,2L:1},20[1]||{}),11.2x=11.19.2L,11.1V=a(b).1X("2p-1V"),y.30(11),11.1P())}12 A(b,c){28(13 d 5w c)c[d]&&c[d].3D&&c[d].3D===5x?(b[d]=a.1k({},b[d])||{},A(b[d],c[d])):b[d]=c[d];1a b}12 C(b,c){1f(11.1g=b,11.1g){13 e=a(b).1X("2p-1V");e&&B.1z(b),e=h(),a(b).1X("2p-1V",e),11.1V=e;13 f;"8e"!=a.1p(c)||d.2j(c)?f=20[2]||{}:(f=c,c=1r),11.19=B.6B(f);13 g=b.6C("5y");1f(!c){13 i=b.6C("1X-2p");i?c=i:g&&(c=g)}g&&(a(b).1X("5z",g),b.8f("5y","")),11.2F=c,11.2k=11.19.2k||+B.19.4C,11.1o={2G:{14:1,18:1},5A:[],3b:[],2q:{4D:!1,2l:!1,1L:!1,3c:!1,1P:!1,4E:!1,5B:!1,3E:!1},5C:""};13 j=11.19.1C;11.1C="2M"==j?"2M":"4F"!=j&&j?d.2j(j)?j:j&&1x.6D(j)||11.1g:11.1g,11.6E(),B.30(11)}}13 b=6F.3F.8g,d={8h:12(c,d){13 e=c;1a 12(){13 c=[a.1v(e,11)].6G(b.5D(20));1a d.5E(11,c)}},2j:12(a){1a a&&1==a.8i},4G:12(a,c){13 d=b.5D(20,2);1a 8j(12(){1a a.5E(a,d)},c)},44:12(a){1a d.4G.5E(11,[a,1].6G(b.5D(20,1)))},5F:12(a){1a{x:a.5G,y:a.6H}},1g:{4H:12(a){13 b=0,d=0;8k b+=a.4I||0,d+=a.4J||0,a=a.4K;8l(a);1a c(d,b)},4L:12(b){13 e=a(b).1A(),f=d.1g.4H(b),g={17:a(1N).4I(),15:a(1N).4J()};1a e.15+=f.15-g.15,e.17+=f.17-g.17,c(e.15,e.17)},5H:12(){12 a(a){28(13 b=a;b&&b.4K;)b=b.4K;1a b}1a 12(b){13 c=a(b);1a!(!c||!c.3d)}}()}},e=12(a){12 b(b){13 c=5I(b+"([\\\\d.]+)").8m(a);1a c?5J(c[1]):!0}1a{3m:!(!1N.8n||-1!==a.3n("5K"))&&b("8o "),5K:a.3n("5K")>-1&&(!!1N.5L&&5L.6I&&5J(5L.6I())||7.55),5M:a.3n("6J/")>-1&&b("6J/"),4M:a.3n("4M")>-1&&-1===a.3n("8p")&&b("8q:"),6K:!!a.3e(/8r.*8s.*8t/),4N:a.3n("4N")>-1&&b("4N/")}}(8u.8v),g={32:{46:{5N:"1.4.4",5O:1N.46&&46.8w.8x}},6L:12(){12 b(b){28(13 c=b.3e(a),d=c&&c[1]&&c[1].2N(".")||[],e=0,f=0,g=d.2a;g>f;f++)e+=2O(d[f]*1b.6M(10,6-2*f));1a c&&c[3]?e-1:e}13 a=/^(\\d+(\\.?\\d+){0,3})([A-6N-8y-]+[A-6N-8z-9]+)?/;1a 12(a){11.32[a].6O||(11.32[a].6O=!0,(!11.32[a].5O||b(11.32[a].5O)<b(11.32[a].5N)&&!11.32[a].6P)&&(11.32[a].6P=!0,f("1S 8A "+a+" >= "+11.32[a].5N)))}}()},h=12(){13 a=0,b="8B";1a 12(c){28(c=c||b,a++;1x.6D(c+a);)a++;1a c+a}}(),i=12(){13 b=[];1a{1t:12(c){28(13 d=1r,e=0;b.2a>e;e++)b[e]&&b[e].47==c.47&&b[e].1p.6Q()==c.1p.6Q()&&a.6R(b[e].1X||{})==a.6R(c.1X||{})&&(d=b[e].4O);1a d},4P:12(c,d){11.1z(c.47),b.2n(a.1k({},c,{4O:d}))},1z:12(a){28(13 c=0;b.2a>c;c++)b[c]&&b[c].47==a&&3G b[c]},6S:12(){b=[]}}}();a.1k(1S,12(){1a{2H:{3f:12(){13 a=1x.22("3f");1a!(!a.3o||!a.3o("2d"))}(),3H:12(){6T{1a!!("8C"5w 1N||1N.6U&&1x 8D 6U)}6V(a){1a!1}}(),48:12(){13 b=["8E","8F","8G"],c=!1;1a a.1w(b,12(a,b){6T{1x.8H(b),c=!0}6V(d){}}),c}()},3p:12(){(11.2H.3f||e.3m)&&(g.6L("46"),a(1x).6W(12(){B.6X()}))},4Q:12(a,b,c){1a j.4Q(a,b,c),11.1t(a)},1t:12(a){1a 3q j(a)},5P:12(a){1a B.5P(a)},1W:12(a){1a 11.1t(a).1W(),11},1I:12(a){1a 11.1t(a).1I(),11},33:12(a){1a 11.1t(a).33(),11},2P:12(a){1a 11.1t(a).2P(),11},1z:12(a){1a 11.1t(a).1z(),11},4R:12(){1a B.4R(),11},5Q:12(a){1a B.5Q(a),11},5R:12(a){1a B.5R(a),11},1L:12(b){1f(d.2j(b))1a B.5S(b);1f("5T"!=a.1p(b)){13 c=a(b),e=0;1a a.1w(c,12(a,b){B.5S(b)&&e++}),e}1a B.3I().2a},5U:12(){1a B.5U(),11}}}()),a.1k(j,{4Q:12(b,c){1f(b){13 e=20[2]||{},f=[];1a B.6Y(),d.2j(b)?f.2n(3q C(b,c,e)):a(b).1w(12(a,b){f.2n(3q C(b,c,e))}),f}}}),a.1k(j.3F,{49:12(){1a B.2r.4S={x:0,y:0},B.1t(11.1g)},1W:12(){1a a.1w(11.49(),12(a,b){b.1W()}),11},1I:12(){1a a.1w(11.49(),12(a,b){b.1I()}),11},33:12(){1a a.1w(11.49(),12(a,b){b.33()}),11},2P:12(){1a a.1w(11.49(),12(a,b){b.2P()}),11},1z:12(){1a B.1z(11.1g),11}});13 p={4T:12(){13 b;1a b=e.6K?{14:1N.5V,18:1N.5W}:{18:a(1N).18(),14:a(1N).14()}}},q={3r:1b.1E(1b.4U(1N.3r?5J(1N.3r)||1:1,2)),3p:12(){12 a(a){13 b=a.3o("2d");b.8I(q.3r,q.3r)}1a 1N.4V&&!1S.2H.3f&&e.3m?12(b){4V.8J(b),a(b)}:12(b){a(b)}}(),3J:12(b,c){a(b).3g({14:c.14*11.3r,18:c.18*11.3r}).1q(k(c))},6Z:12(b){13 c=a.1k({17:0,15:0,14:0,18:0,1n:0},20[1]||{}),d=c,e=d.15,f=d.17,g=d.14,h=d.18,i=d.1n;1a i?(b.2f(),b.3s(e+i,f),b.26(e+g-i,f+i,i,n(-90),n(0),!1),b.26(e+g-i,f+h-i,i,n(0),n(90),!1),b.26(e+i,f+h-i,i,n(90),n(2E),!1),b.26(e+i,f+i,i,n(-2E),n(-90),!1),b.2g(),b.34(),3t 0):(b.70(e,f,g,h),3t 0)},8K:12(b,c){28(13 d=a.1k({x:0,y:0,1Q:"#4B"},20[2]||{}),e=0,f=c.2a;f>e;e++)28(13 g=0,h=c[e].2a;h>g;g++){13 i=2O(c[e].3u(g))*(1/9);b.2Q=t.2R(d.1Q,i),i&&b.70(d.x+g,d.y+e,1,1)}},4a:12(b,c){13 d;1f("2s"==a.1p(c))d=t.2R(c);1G 1f("2s"==a.1p(c.1Q))d=t.2R(c.1Q,"2y"==a.1p(c.1K)?c.1K:1);1G 1f(a.71(c.1Q)){13 e=a.1k({3K:0,3L:0,3M:0,3N:0},20[2]||{});d=q.72.73(b.8L(e.3K,e.3L,e.3M,e.3N),c.1Q,c.1K)}1a d}};q.72={73:12(b,c){28(13 d="2y"==a.1p(20[2])?20[2]:1,e=0,f=c.2a;f>e;e++){13 g=c[e];("5T"==a.1p(g.1K)||"2y"!=a.1p(g.1K))&&(g.1K=1),b.8M(g.1e,t.2R(g.1Q,g.1K*d))}1a b}};13 r={74:["3O","4b","3P","3Q","4c","4d","4e","4f","4g","4h","4i","3R"],4j:{75:/^(17|15|1R|1O)(17|15|1R|1O|2t|2S)$/,1J:/^(17|1R)/,35:/(2t|2S)/,76:/^(17|1R|15|1O)/},77:12(){13 a={17:"18",15:"14",1R:"18",1O:"14"};1a 12(b){1a a[b]}}(),35:12(a){1a!!a.3v().3e(11.4j.35)},78:12(a){1a!11.35(a)},2I:12(a){1a a.3v().3e(11.4j.1J)?"1J":"2b"},5X:12(a){13 b=1r,c=a.3v().3e(11.4j.76);1a c&&c[1]&&(b=c[1]),b},2N:12(a){1a a.3v().3e(11.4j.75)}},s={5Y:12(a){13 b=a.19.1l;1a{14:b.14,18:b.18}},4k:12(b,c){13 d=a.1k({3S:"1E"},20[2]||{}),e=b.19.1l,f=e.14,g=e.18,h=11.4W(f,g,c);1a d.3S&&(h.14=1b[d.3S](h.14),h.18=1b[d.3S](h.18)),{14:h.14,18:h.18}},4W:12(a,b,c){13 d=m(1b.79(.5*(b/a))),e=2E-d,f=1b.4A(n(e-90))*c,g=a+2*f,h=g*b/a;1a{14:g,18:h}},3T:12(a,b){13 c=11.4k(a,b),d=11.5Y(a),f=(r.35(a.29),1b.1E(c.18+b));1a a.19.1l.1A||0,a.19.1n&&a.19.1n.2u||0,{2z:{1c:{14:1b.1E(c.14),18:1b.1E(f)}},1i:{1c:c},1l:{1c:{14:d.14,18:d.18}}}},5Z:12(b,c,d){13 f=b.19,g={17:0,15:0},h={17:0,15:0},i=a.1k({},c),j=b.1i,k=k||11.3T(b,b.1i),l=k.2z.1c;d&&(l.18=d,j=0);13 m=r.2N(b.29),n=r.2I(b.29);1f(b.19.1l){13 o=r.5X(b.29);1f("17"==o?g.17=l.18-j:"15"==o&&(g.15=l.18-j),"1J"==n){1T(m[2]){1h"2t":1h"2S":h.15=.5*i.14;1B;1h"1O":h.15=i.14}"1R"==m[1]&&(h.17=i.18-j+l.18)}1G{1T(m[2]){1h"2t":1h"2S":h.17=.5*i.18;1B;1h"1R":h.17=i.18}"1O"==m[1]&&(h.15=i.14-j+l.18)}i[r.77(o)]+=l.18-j}1G 1f("1J"==n){1T(m[2]){1h"2t":1h"2S":h.15=.5*i.14;1B;1h"1O":h.15=i.14}"1R"==m[1]&&(h.17=i.18)}1G{1T(m[2]){1h"2t":1h"2S":h.17=.5*i.18;1B;1h"1R":h.17=i.18}"1O"==m[1]&&(h.15=i.14)}13 p=f.1n&&f.1n.2u||0,q=f.1i&&f.1i.2u||0;1f(b.19.1l){13 t=p&&"1m"==f.1n.1e?p:0,u=p&&"1i"==f.1n.1e?p:p+q,v=q+t+.5*k.1l.1c.14-.5*k.1i.1c.14,w=u>v?u-v:0,x=1b.1E(q+t+.5*k.1l.1c.14+w);1f("1J"==n)1T(m[2]){1h"15":h.15+=x;1B;1h"1O":h.15-=x}1G 1T(m[2]){1h"17":h.17+=x;1B;1h"1R":h.17-=x}}13 y;1f(f.1l&&(y=f.1l.1A)){13 z=s.60(y,b.6A,c,k.1i.1c,q,p);1f(y=z.1A,z.4l,"1J"==n)1T(m[2]){1h"15":h.15+=y.x;1B;1h"1O":h.15-=y.x}1G 1T(m[2]){1h"17":h.17+=y.y;1B;1h"1R":h.17-=y.y}}13 B;1f(f.1l&&(B=f.1l.8N))1f("1J"==n)1T(m[1]){1h"17":h.17-=B;1B;1h"1R":h.17+=B}1G 1T(m[1]){1h"15":h.15-=B;1B;1h"1O":h.15+=B}1a{1c:i,1e:{17:0,15:0},1m:{1e:g,1c:c},1l:{1c:l},2J:h}},60:12(b,c,d,e,f,g){13 h=r.2I(c),i=a.1k({},b),j={x:0,y:0},k=0;1a"1J"==h&&(k=d.14-e.14-2*f-2*g)<2*b.x&&(j.x=i.x,/(1O)$/.3h(c)&&(j.x*=-1),i.x=0),"2b"==h&&(k=d.18-e.18-2*f-2*g)<2*b.y&&(j.y=i.y,/(1R)$/.3h(c)&&(j.y*=-1),i.y=0),{1A:i,4l:j}}},t=12(){12 d(a){13 b=a;1a b.7a=a[0],b.7b=a[1],b.7c=a[2],b}12 e(a){1a 2O(a,16)}12 f(a){13 b=6F(3);1f(0==a.3n("#")&&(a=a.4X(1)),a=a.3v(),""!=a.61(c,""))1a 1r;3==a.2a?(b[0]=a.3u(0)+a.3u(0),b[1]=a.3u(1)+a.3u(1),b[2]=a.3u(2)+a.3u(2)):(b[0]=a.4X(0,2),b[1]=a.4X(2,4),b[2]=a.4X(4));28(13 f=0;b.2a>f;f++)b[f]=e(b[f]);1a d(b)}12 g(a,b){13 c=f(a);1a c[3]=b,c.1K=b,c}12 h(b,c){1a"5T"==a.1p(c)&&(c=1),"8O("+g(b,c).8P()+")"}12 i(a){1a"#"+(j(a)[2]>50?"4B":"8Q")}12 j(a){1a k(f(a))}12 k(a){13 f,g,h,a=d(a),b=a.7a,c=a.7b,e=a.7c,i=b>c?b:c;e>i&&(i=e);13 j=c>b?b:c;1f(j>e&&(j=e),h=i/8R,g=0!=i?(i-j)/i:0,0==g)f=0;1G{13 k=(i-b)/(i-j),l=(i-c)/(i-j),m=(i-e)/(i-j);f=b==i?m-l:c==i?2+k-m:4+l-k,f/=6,0>f&&(f+=1)}f=1b.23(7d*f),g=1b.23(62*g),h=1b.23(62*h);13 n=[];1a n[0]=f,n[1]=g,n[2]=h,n.8S=f,n.8T=g,n.8U=h,n}13 b="8V",c=5I("["+b+"]","g");1a{8W:f,2R:h,8X:i}}(),u={4Y:{},1t:12(b){1f(!b)1a 1r;13 c=1r,d=a(b).1X("2p-1V");1a d&&(c=11.4Y[d]),c},30:12(a){11.4Y[a.1V]=a},1z:12(a){13 b=11.1t(a);b&&(3G 11.4Y[b.1V],b.1z())}};a.1k(v.3F,12(){12 b(){11.1o.1u={};13 b=11.29;a.1w(r.74,a.1v(12(b,c){13 d,e=11.1o.1u[c]={};11.29=c;13 f=11.2o();d=f,e.2J=d.2J;13 g=d.1H.1c,h={17:d.1H.1e.17,15:d.1H.1e.15};1f(e.1H={1c:g,1e:h},e.1D={1c:d.21.1c},11.1s){13 i=11.1s.2o(),j=i.21.1e,k=e.1H.1e;a.1k(!0,e,{2J:i.2J,1H:{1e:{17:k.17+j.17,15:k.15+j.15}},1D:{1c:i.1D.1c}})}},11)),11.29=b}12 c(){11.36(),11.19.1s&&(w.1z(11.1g),11.19.1y&&11.19.1y.1s&&y.1z(11.1g)),11.2T&&(11.2T.1z(),11.2T=1r),11.1j&&(a(11.1j).1z(),11.1j=1r)}12 d(){11.1H&&(11.1y&&(a(11.1y).1z(),11.1y=1r,11.63=1r,11.64=1r),a(11.1H).1z(),11.1l=1r,11.1m=1r,11.1H=1r,11.1o={})}12 f(){13 a=11.2e();11.2G=a.1o.2G;13 b=a.19;11.1n=b.1n&&b.1n.2u||0,11.1i=b.1i&&b.1i.2u||0,11.2m=b.2m;13 c=1b.4U(11.2G.18,11.2G.14);11.1n>c/2&&(11.1n=1b.65(c/2)),"1i"==11.19.1n.1e&&11.1n>11.1i&&(11.1i=11.1n),11.1o={19:{1n:11.1n,1i:11.1i,2m:11.2m}}}12 g(){11.36(),1N.4V&&1N.4V.8Y(1x);13 b=11.2e(),c=11.19;11.1H=a("<2h>").1Y("8Z")[0],a(b.4Z).1Z(11.1H),11.51(),11.7e(b),c.1y&&(11.7f(b),c.1y.1s&&(11.2U?(11.2U.19=c.1y.1s,11.2U.1P()):11.2U=3q z(11.1g,a.1k({2L:11.2x},c.1y.1s)))),e.3m&&7>e.3m&&a(b.1j).66(11.2T=a("<91>").1Y("92").3g({93:0,4m:"94:\'\';"})),11.52(),c.1s&&(11.1s?(11.1s.19=c.1s,11.1s.1P()):11.1s=3q x(11.1g,11,a.1k({2L:11.2x},c.1s))),11.7g()}12 h(){13 b=11.2e(),c=a(b.1j),d=a(b.1j).67(".7h").7i()[0];1f(d){a(d).1q({14:"68",18:"68"});13 e=2O(c.1q("17")),f=2O(c.1q("15")),g=2O(c.1q("14"));c.1q({15:"-7j",17:"-7j",14:"95",18:"68"}),b.1F("1L")||a(b.1j).1W();13 h=B.53.69(d);b.19.3i&&"2y"==a.1p(b.19.3i)&&h.14>b.19.3i&&(a(d).1q({14:b.19.3i+"2w"}),h=B.53.69(d)),b.1F("1L")||a(b.1j).1I(),b.1o.2G=h,c.1q({15:f+"2w",17:e+"2w",14:g+"2w"}),11.1P()}}12 i(a,b,c){13 d=!1;11.4n(a)&&(d=!0),11.7k(b)&&(d=!0),c&&11.7l(c)&&(d=!0),d&&11.1P()}12 j(a){13 b=!1;1a(11.3l.15!=a.15||11.3l.17!=a.17)&&(b=!0,11.3l=a),b}12 l(a){13 b=!1;1a(11.3a.x!=a.x||11.3a.y!=a.y)&&(b=!0,11.3a=a),b}12 m(a){13 c=!1;1a 11.29!=a&&(c=!0,11.29=a),c}12 o(){1a B.1t(11.1g)[0]}12 p(){1a s.3T(11,11.1i)}12 u(){13 b=11.2e().19.1y,c=b.3w+2*b.1i;a(11.63).1q({15:-1*c+"2w"}),a(11.64).1q({15:0})}12 v(){13 b=11.2e().19.1y,c=b.3w+2*b.1i;a(11.63).1q({15:0}),a(11.64).1q({15:c+"2w"})}12 A(b){13 c=b.19.1y,d={14:c.3w+2*c.1i,18:c.3w+2*c.1i};a(b.1j).1Z(a(11.1y=1x.22("2h")).1Y("7m").1q(k(d)).1Z(a(11.7n=1x.22("2h")).1Y("96").1q(k(d)))),11.6a(b,"6b"),11.6a(b,"6c"),1S.2H.3H||e.4N||a(11.1y).3U("4o",a.1v(11.7o,11)).3U("54",a.1v(11.7p,11))}12 C(b,c){13 d=b.19.1y,e=d.3w,f=d.1i||0,g=d.x.3w,h=d.x.2u,j=(d.x.97,d.2q[c||"6b"]),l={14:e+2*f,18:e+2*f};g>=e&&(g=e-2);13 m;a(11.7n).1Z(a(11[c+"7q"]=1x.22("2h")).1Y("98").1q(a.1k(k(l),{15:("6c"==c?l.14:0)+"2w"}))),a(1x.3d).1Z(a(m=1x.22("3f"))),q.3J(m,l),q.3p(m);13 o=m.3o("2d");o.2L=11.2x,a(11[c+"7q"]).1Z(m),o.99(l.14/2,l.18/2),o.2Q=q.4a(o,j.1m,{3K:0,3L:0-e/2,3M:0,3N:0+e/2}),o.2f(),o.26(0,0,e/2,0,2*1b.2Z,!0),o.2g(),o.34(),f&&(o.2Q=q.4a(o,j.1i,{3K:0,3L:0-e/2-f,3M:0,3N:0+e/2+f}),o.2f(),o.26(0,0,e/2,1b.2Z,0,!1),o.1d((e+f)/2,0),o.26(0,0,e/2+f,0,1b.2Z,!0),o.26(0,0,e/2+f,1b.2Z,0,!0),o.1d(e/2,0),o.26(0,0,e/2,0,1b.2Z,!1),o.2g(),o.34());13 p=g/2,r=h/2;1f(r>p){13 s=r;r=p,p=s}o.2Q=t.2R(j.x.1Q||j.x,j.x.1K||1),o.56(n(45)),o.2f(),o.3s(0,0),o.1d(0,p);28(13 u=0;4>u;u++)o.1d(0,p),o.1d(r,p),o.1d(r,p-(p-r)),o.1d(p,r),o.1d(p,0),o.56(n(90));o.2g(),o.34()}12 D(b){13 l,m,o,p,q,c=a.1k({1l:!1,3x:1r,9a:1r,2f:!1,2g:!1,3y:1r,3z:1r,1n:0,1i:0,57:0,37:{x:0,y:0}},20[1]||{}),d=c.3y,e=c.3z,f=c.37,g=c.1i,h=c.1n,i=c.3x,j=d.1m.1e,k=d.1m.1c,t={x:1b.2V(11.3a.x),y:1b.2V(11.3a.y)},u={x:0,y:0},v={x:0,y:0};1f(e){l=e.1l.1c,m=e.2z.1e,o=e.2z.1c,p=o.14-l.14;13 w=c.57,x=g+h+.5*l.14-.5*e.1i.1c.14;q=1b.1E(w>x?w-x:0);13 y=s.60(f,i,k,e.1i.1c,g,h);f=y.1A,v=y.4l,u={x:1b.1U(k.14-2*1b.1U(q,f.x||0)-e.1i.1c.14-(2*h||0),0),y:1b.1U(k.18-2*1b.1U(q,f.y||0)-e.1i.1c.18-(2*h||0),0)},r.35(i)&&(u.x*=.5,u.y*=.5),t.x=1b.4U(t.x,u.x),t.y=1b.4U(t.y,u.y),r.35(i)&&(0>11.3a.x&&t.x>0&&(t.x*=-1),0>11.3a.y&&t.y>0&&(t.y*=-1)),11.3l&&11.3l.3A&&a.1w(11.3l.3A,12(b,c){a.1w("17 1O 1R 15".2N(" "),12(a,b){c==b&&5I("("+b+")$").3h(i)&&(t[/^(15|1O)$/.3h(b)?"x":"y"]=0)})})}13 z,A;1f(h?(z=j.15+g+h,A=j.17+g):(z=j.15+g,A=j.17+g),f&&f.x&&/^(3O|3R)$/.3h(i)&&(z+=f.x),c.2f&&b.2f(),b.3s(z,A),c.1l)1T(i){1h"3O":z=j.15+g,h&&(z+=h),z+=1b.1U(q,f.x||0),z+=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A);1B;1h"4b":1h"58":z=j.15+.5*k.14-.5*l.14,z+=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A),z=j.15+.5*k.14-.5*o.14,b.1d(z,A);1B;1h"3P":z=j.15+k.14-g-l.14,h&&(z-=h),z-=1b.1U(q,f.x||0),z-=t.x,b.1d(z,A),A-=l.18,z+=.5*l.14,b.1d(z,A),A+=l.18,z+=.5*l.14,b.1d(z,A)}1f(h?h&&(b.26(j.15+k.14-g-h,j.17+g+h,h,n(-90),n(0),!1),z=j.15+k.14-g,A=j.17+g+h):(z=j.15+k.14-g,A=j.17+g,b.1d(z,A)),c.1l)1T(i){1h"3Q":A=j.17+g,h&&(A+=h),A+=1b.1U(q,f.y||0),A+=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A);1B;1h"4c":1h"59":A=j.17+.5*k.18-.5*l.14,A+=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A);1B;1h"4d":A=j.17+k.18-g,h&&(A-=h),A-=l.14,A-=1b.1U(q,f.y||0),A-=t.y,b.1d(z,A),z+=l.18,A+=.5*l.14,b.1d(z,A),z-=l.18,A+=.5*l.14,b.1d(z,A)}1f(h?h&&(b.26(j.15+k.14-g-h,j.17+k.18-g-h,h,n(0),n(90),!1),z=j.15+k.14-g-h,A=j.17+k.18-g):(z=j.15+k.14-g,A=j.17+k.18-g,b.1d(z,A)),c.1l)1T(i){1h"4e":z=j.15+k.14-g,h&&(z-=h),z-=1b.1U(q,f.x||0),z-=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A);1B;1h"4f":1h"5a":z=j.15+.5*k.14+.5*l.14,z+=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A);1B;1h"4g":z=j.15+g+l.14,h&&(z+=h),z+=1b.1U(q,f.x||0),z+=t.x,b.1d(z,A),z-=.5*l.14,A+=l.18,b.1d(z,A),z-=.5*l.14,A-=l.18,b.1d(z,A)}1f(h?h&&(b.26(j.15+g+h,j.17+k.18-g-h,h,n(90),n(2E),!1),z=j.15+g,A=j.17+k.18-g-h):(z=j.15+g,A=j.17+k.18-g,b.1d(z,A)),c.1l)1T(i){1h"4h":A=j.17+k.18-g,h&&(A-=h),A-=1b.1U(q,f.y||0),A-=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A);1B;1h"4i":1h"5b":A=j.17+.5*k.18+.5*l.14,A+=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A);1B;1h"3R":A=j.17+g+l.14,h&&(A+=h),A+=1b.1U(q,f.y||0),A+=t.y,b.1d(z,A),z-=l.18,A-=.5*l.14,b.1d(z,A),z+=l.18,A-=.5*l.14,b.1d(z,A)}1a h?h&&(b.26(j.15+g+h,j.17+g+h,h,n(-2E),n(-90),!1),z=j.15+g+h,A=j.17+g,z+=1,b.1d(z,A)):(z=j.15+g,A=j.17+g,b.1d(z,A)),c.2g&&b.2g(),{x:z,y:A,1l:t,5c:v,37:f}}12 E(b){13 o,p,q,r,s,t,c=a.1k({1l:!1,3x:1r,2f:!1,2g:!1,3y:1r,3z:1r,1n:0,1i:0,7r:0,37:{x:0,y:0},5d:1r},20[1]||{}),d=c.3y,e=c.3z,g=(c.7r,c.37),h=c.1i,i=c.1n&&c.1n.2u||0,j=c.7s,k=c.3x,l=d.1m.1e,m=d.1m.1c,u=c.5d&&c.5d.1l||{x:0,y:0};1f(e){o=e.1l.1c,p=e.2z.1e,q=e.2z.1c,r=e.1i.1c,s=q.14-o.14;13 v=h+j+.5*o.14-.5*r.14;t=1b.1E(i>v?i-v:0)}13 w=l.15+h+j,x=l.17+h;j&&(w+=1),a.1k({},{x:w,y:x}),c.2f&&b.2f();13 z=a.1k({},{x:w,y:x});1f(x-=h,b.1d(w,x),i?i&&(b.26(l.15+i,l.17+i,i,n(-90),n(-2E),!0),w=l.15,x=l.17+i):(w=l.15,x=l.17,b.1d(w,x)),c.1l)1T(k){1h"3R":x=l.17+h,j&&(x+=j),x-=.5*r.14,x+=.5*o.14,x+=1b.1U(t,g.y||0),x+=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x);1B;1h"4i":1h"5b":x=l.17+.5*m.18-.5*r.14,x+=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x);1B;1h"4h":x=l.17+m.18-h-r.14,j&&(x-=j),x+=.5*r.14,x-=.5*o.14,x-=1b.1U(t,g.y||0),x-=u.y,b.1d(w,x),w-=r.18,x+=.5*r.14,b.1d(w,x),w+=r.18,x+=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+i,l.17+m.18-i,i,n(-2E),n(-9b),!0),w=l.15+i,x=l.17+m.18):(w=l.15,x=l.17+m.18,b.1d(w,x)),c.1l)1T(k){1h"4g":w=l.15+h,j&&(w+=j),w-=.5*r.14,w+=.5*o.14,w+=1b.1U(t,g.x||0),w+=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x);1B;1h"4f":1h"5a":w=l.15+.5*m.14-.5*r.14,w+=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x),w=l.15+.5*m.14+r.14,b.1d(w,x);1B;1h"4e":w=l.15+m.14-h-r.14,j&&(w-=j),w+=.5*r.14,w-=.5*o.14,w-=1b.1U(t,g.x||0),w-=u.x,b.1d(w,x),x+=r.18,w+=.5*r.14,b.1d(w,x),x-=r.18,w+=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+m.14-i,l.17+m.18-i,i,n(90),n(0),!0),w=l.15+m.14,x=l.17+m.14+i):(w=l.15+m.14,x=l.17+m.18,b.1d(w,x)),c.1l)1T(k){1h"4d":x=l.17+m.18-h,x+=.5*r.14,x-=.5*o.14,j&&(x-=j),x-=1b.1U(t,g.y||0),x-=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x);1B;1h"4c":1h"59":x=l.17+.5*m.18+.5*r.14,x+=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x);1B;1h"3Q":x=l.17+h,j&&(x+=j),x+=r.14,x-=.5*r.14-.5*o.14,x+=1b.1U(t,g.y||0),x+=u.y,b.1d(w,x),w+=r.18,x-=.5*r.14,b.1d(w,x),w-=r.18,x-=.5*r.14,b.1d(w,x)}1f(i?i&&(b.26(l.15+m.14-i,l.17+i,i,n(0),n(-90),!0),w=l.15+m.14-i,x=l.17):(w=l.15+m.14,x=l.17,b.1d(w,x)),c.1l)1T(k){1h"3P":w=l.15+m.14-h,w+=.5*r.14-.5*o.14,j&&(w-=j),w-=1b.1U(t,g.x||0),w-=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x);1B;1h"4b":1h"58":w=l.15+.5*m.14+.5*r.14,w+=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x),w=l.15+.5*m.14-r.14,b.1d(w,x),b.1d(w,x);1B;1h"3O":w=l.15+h+r.14,w-=.5*r.14,w+=.5*o.14,j&&(w+=j),w+=1b.1U(t,g.x||0),w+=u.x,b.1d(w,x),x-=r.18,w-=.5*r.14,b.1d(w,x),x+=r.18,w-=.5*r.14,b.1d(w,x)}b.1d(z.x,z.y-h),b.1d(z.x,z.y),c.2g&&b.2g()}12 F(b){13 c=11.2o(),d=11.19.1l&&11.4p(),e=11.29&&11.29.3v(),f=11.1n,h=11.1i,i=11.2m,k=({14:2*h+2*i+11.2G.14,18:2*h+2*i+11.2G.18},b.19.1l&&b.19.1l.1A||{x:0,y:0}),l=0,m=0;f&&(l="1m"==11.19.1n.1e?f:0,m="1i"==11.19.1n.1e?f:l+h),a(1x.3d).1Z(11.2W=1x.22("3f")),q.3J(11.2W,c.1H.1c),q.3p(11.2W);13 n=11.2W.3o("2d");n.2L=11.2x,a(11.1H).1Z(11.2W),n.2Q=q.4a(n,11.19.1m,{3K:0,3L:c.1m.1e.17+h,3M:0,3N:c.1m.1e.17+c.1m.1c.18-h}),n.9c=0;13 o;1f(o=11.6d(n,{2f:!0,2g:!0,1i:h,1n:l,57:m,3y:c,3z:d,1l:11.19.1l,3x:e,37:k}),n.34(),h){13 p=q.4a(n,11.19.1i,{3K:0,3L:c.1m.1e.17,3M:0,3N:c.1m.1e.17+c.1m.1c.18});n.2Q=p,o=11.6d(n,{2f:!0,2g:!1,1i:h,1n:l,57:m,3y:c,3z:d,1l:11.19.1l,3x:e,37:k}),11.7t(n,{2f:!1,2g:!0,1i:h,7s:l,1n:{2u:m,1e:11.19.1n.1e},3y:c,3z:d,1l:11.19.1l,3x:e,37:o.37,5d:o}),n.34()}11.3B=o}12 G(){13 i,a=11.2e(),b=11.2G,c=a.19,d=11.1n,f=11.1i,g=11.2m,h={14:2*f+2*g+b.14,18:2*f+2*g+b.18};1f(11.19.1l){13 j=11.4p();i=j.2z.1c}13 k=s.5Z(11,h),l=k.1c,m=k.1e,h=k.1m.1c,o=k.1m.1e;k.1l.1c;13 r,t,u,q={17:0,15:0},v={14:l.14,18:l.18};1f(c.1y){13 w=d;"1m"==c.1n.1e&&(w+=f);13 x=w-1b.9d(n(45))*w,y="1O";11.29.3v().3e(/^(3P|3Q)$/)&&(y="15");13 z=c.1y.3w+2*c.1y.1i,r={14:z,18:z};1f(q.15=o.15-z/2+("15"==y?x:h.14-x),q.17=o.17-z/2+x,"15"==y){1f(0>q.15){13 A=1b.2V(q.15);v.14+=A,m.15+=A,q.15=0}}1G{13 B=q.15+z-v.14;B>0&&(v.14+=B)}1f(0>q.17){13 C=1b.2V(q.17);v.18+=C,m.17+=C,q.17=0}1f(11.19.1y.1s){13 D=11.19.1y.1s,E=D.31,F=D.1A;1f(t={14:r.14+2*E,18:r.18+2*E},u={17:q.17-E+F.y,15:q.15-E+F.x},"15"==y){1f(0>u.15){13 A=1b.2V(u.15);v.14+=A,m.15+=A,q.15+=A,u.15=0}}1G{13 B=u.15+t.14-v.14;B>0&&(v.14+=B)}1f(0>u.17){13 C=1b.2V(u.17);v.18+=C,m.17+=C,q.17+=C,u.17=0}}}13 G=k.2J;G.17+=m.17,G.15+=m.15;13 H={15:1b.1E(m.15+o.15+11.1i+11.19.2m),17:1b.1E(m.17+o.17+11.1i+11.19.2m)},I={1D:{1c:{14:1b.1E(v.14),18:1b.1E(v.18)}},21:{1c:{14:1b.1E(v.14),18:1b.1E(v.18)}},1H:{1c:l,1e:{17:1b.23(m.17),15:1b.23(m.15)}},1m:{1c:{14:1b.1E(h.14),18:1b.1E(h.18)},1e:{17:1b.23(o.17),15:1b.23(o.15)}},2J:{17:1b.23(G.17),15:1b.23(G.15)},2F:{1e:H}};1a 11.19.1y&&(I.1y={1c:{14:1b.1E(r.14),18:1b.1E(r.18)},1e:{17:1b.23(q.17),15:1b.23(q.15)}},11.19.1y.1s&&(I.2U={1c:{14:1b.1E(t.14),18:1b.1E(t.18)},1e:{17:1b.23(u.17),15:1b.23(u.15)}})),I}12 H(){13 b=11.2o(),c=11.2e();a(c.1j).1q(k(b.1D.1c)),a(c.4Z).1q(k(b.21.1c)),11.2T&&11.2T.1q(k(b.1D.1c)),a(11.1H).1q(a.1k(k(b.1H.1c),k(b.1H.1e))),11.1y&&(a(11.1y).1q(k(b.1y.1e)),b.2U&&a(11.2U.1j).1q(k(b.2U.1e))),a(c.38).1q(k(b.2F.1e))}12 I(a){11.2x=a||0,11.1s&&(11.1s.2x=11.2x)}12 J(a){11.7u(a),11.1P()}1a{51:f,7g:b,1P:g,1z:c,36:d,2e:o,2P:h,5e:i,7l:j,7k:l,4n:m,7f:A,6a:C,7e:F,6d:D,7t:E,7o:u,7p:v,4p:p,2o:G,52:H,7u:I,9e:J}}());13 w={3j:{},1t:12(b){1f(!b)1a 1r;13 c=1r,d=a(b).1X("2p-1V");1a d&&(c=11.3j[d]),c},30:12(a){11.3j[a.1V]=a},1z:12(a){13 b=11.1t(a);b&&(3G 11.3j[b.1V],b.1z())},4q:12(a){1a 1b.2Z/2-1b.6M(a,1b.4A(a)*1b.2Z)}};w.4r={4k:12(a,b){13 c=u.1t(a.1g),d=c.4p().1i.1c,e=11.4W(d.14,d.18,b,{3S:!1});1a{14:e.14,18:e.18}},9f:12(a,b,c){13 d=.5*a,e=m(1b.9g(d/l(d,b))),f=2E-e-90,g=o(n(f))*c,h=2*(d+g),i=h/a*b;1a{14:h,18:i}},4W:12(a,b,c){13 d=m(1b.79(.5*(b/a))),e=2E-d,f=1b.4A(n(e-90))*c,g=a+2*f,h=g*b/a;1a{14:g,18:h}},3T:12(b){13 c=u.1t(b.1g),d=b.19.31,e=r.78(c.29),g=(r.2I(c.29),w.4r.4k(b,d)),h={2z:{1c:{14:1b.1E(g.14),18:1b.1E(g.18)},1e:{17:0,15:0}}};1f(d){h.2X=[];28(13 i=0;d>=i;i++){13 j=w.4r.4k(b,i,{3S:!1}),k={1e:{17:h.2z.1c.18-j.18,15:e?d-i:(h.2z.1c.14-j.14)/2},1c:j};h.2X.2n(k)}}1G h.2X=[a.1k({},h.2z)];1a h},56:12(a,b,c){s.56(a,b.3k(),c)}},a.1k(x.3F,12(){12 b(){1a B.1t(11.1g)[0]}12 c(){1a u.1t(11.1g)}12 d(){11.36()}12 e(){11.1j&&(a(11.1j).1z(),11.1l=1r,11.1m=1r,11.1H=1r,11.1j=1r,11.1o={})}12 f(){}12 g(){11.36(),11.51();13 b=11.2e(),c=11.3k();11.1j=a("<2h>").1Y("9h")[0],a(b.1j).66(11.1j),c.2T&&a(b.1j).66(c.2T),c.2o(),a(11.1j).1q({17:0,15:0}),11.7v(),11.52()}12 h(){1a 11.19.1K/(11.19.31+1)}12 i(){13 b=11.3k(),c=b.2o(),d=11.2e(),e=11.2o(),f=11.19.31,g=w.4r.3T(11),h=b.29,i=r.5X(h),j={17:f,15:f};1f(d.19.1l){13 l=g.2X[g.2X.2a-1];"15"==i&&(j.15+=1b.1E(l.1c.18)),"17"==i&&(j.17+=1b.1E(l.1c.18))}13 m=b.1o.19,n=m.1n,o=m.1i;"1m"==d.19.1n.1e&&n&&(n+=o);13 p=e.1H.1c;a(11.1j).1Z(a(11.1H=1x.22("2h")).1Y("9i").1q(k(p))).1q(k(p)),a(1x.3d).1Z(a(11.2W=1x.22("3f"))),q.3J(11.2W,e.1H.1c),q.3p(11.2W);13 s=11.2W.3o("2d");s.2L=11.2x,a(11.1H).1Z(11.2W);28(13 u=f+1,v=0;f>=v;v++)s.2Q=t.2R(11.19.1Q,w.4q(v*(1/u))*(11.19.1K/u)),q.6Z(s,{14:c.1m.1c.14+2*v,18:c.1m.1c.18+2*v,17:j.17-v,15:j.15-v,1n:n+v});1f(b.19.1l){13 x={x:j.15,y:j.17},y=g.2X[0].1c,z=b.19.1l,A=o;A+=.5*z.14;13 B=b.19.1n&&"1m"==b.19.1n.1e?b.19.1n.2u||0:0;B&&(A+=B);13 C=o+B+.5*z.14-.5*y.14,D=1b.1E(n>C?n-C:0),E=b.3B&&b.3B.1l||{x:0,y:0},F=b.3B&&b.3B.5c||{x:0,y:0};1f(A+=1b.1U(D,b.19.1l.1A&&b.19.1l.1A[i&&/^(15|1O)$/.3h(i)?"y":"x"]||0),"17"==i||"1R"==i){1T(h){1h"3O":1h"4g":x.x+=A+E.x-F.x;1B;1h"4b":1h"58":1h"4f":1h"5a":x.x+=.5*c.1m.1c.14+E.x;1B;1h"3P":1h"4e":x.x+=c.1m.1c.14-(A-E.x+F.x)}"1R"==i&&(x.y+=c.1m.1c.18);28(13 v=0,G=g.2X.2a;G>v;v++){s.2Q=t.2R(11.19.1Q,w.4q(v*(1/u))*(11.19.1K/u));13 f=g.2X[v];s.2f(),"17"==i?(s.3s(x.x,x.y-v),s.1d(x.x-.5*f.1c.14,x.y-v),s.1d(x.x,x.y-v-f.1c.18),s.1d(x.x+.5*f.1c.14,x.y-v)):(s.3s(x.x,x.y+v),s.1d(x.x-.5*f.1c.14,x.y+v),s.1d(x.x,x.y+v+f.1c.18),s.1d(x.x+.5*f.1c.14,x.y+v)),s.2g(),s.34()}}1G{1T(h){1h"3R":1h"3Q":x.y+=A+E.y-F.y;1B;1h"4i":1h"5b":1h"4c":1h"59":x.y+=.5*c.1m.1c.18+E.y;1B;1h"4h":1h"4d":x.y+=c.1m.1c.18-(A-E.y+F.y)}"1O"==i&&(x.x+=c.1m.1c.14);28(13 v=0,G=g.2X.2a;G>v;v++){s.2Q=t.2R(11.19.1Q,w.4q(v*(1/u))*(11.19.1K/u));13 f=g.2X[v];s.2f(),"15"==i?(s.3s(x.x-v,x.y),s.1d(x.x-v,x.y-.5*f.1c.14),s.1d(x.x-v-f.1c.18,x.y),s.1d(x.x-v,x.y+.5*f.1c.14)):(s.3s(x.x+v,x.y),s.1d(x.x+v,x.y-.5*f.1c.14),s.1d(x.x+v+f.1c.18,x.y),s.1d(x.x+v,x.y+.5*f.1c.14)),s.2g(),s.34()}}}}12 j(){13 b=11.3k();b.2G,b.1n;13 e=b.2o(),g=(11.2e(),11.19.31),h=a.1k({},e.1m.1c);h.14+=2*g,h.18+=2*g;13 i,k;1f(b.19.1l){13 l=w.4r.3T(11);i=l.2z.1c,k=i.18}13 m=s.5Z(b,h,k),n=m.1c,o=m.1e,h=m.1m.1c,p=m.1m.1e,r=e.1H.1e,t=e.1m.1e,u={17:r.17+t.17-(p.17+g)+11.19.1A.y,15:r.15+t.15-(p.15+g)+11.19.1A.x},v=e.2J,x=e.21.1c,y={17:0,15:0};1f(0>u.17){13 z=1b.2V(u.17);y.17+=z,u.17=0,v.17+=z}1f(0>u.15){13 A=1b.2V(u.15);y.15+=A,u.15=0,v.15+=A}13 B={18:1b.1U(n.18+u.17,x.18+y.17),14:1b.1U(n.14+u.15,x.14+y.15)},C={15:1b.1E(y.15+e.1H.1e.15+e.1m.1e.15+b.1i+b.2m),17:1b.1E(y.17+e.1H.1e.17+e.1m.1e.17+b.1i+b.2m)},D={1D:{1c:B},21:{1c:x,1e:y},1j:{1c:n,1e:u},1H:{1c:n,1e:{17:1b.23(o.17),15:1b.23(o.15)}},1m:{1c:{14:1b.1E(h.14),18:1b.1E(h.18)},1e:{17:1b.23(p.17),15:1b.23(p.15)}},2J:v,2F:{1e:C}};1a D}12 l(){13 b=11.2o(),c=11.3k(),d=11.2e();1f(a(d.1j).1q(k(b.1D.1c)),a(d.4Z).1q(a.1k(k(b.21.1e),k(b.21.1c))),c.2T&&c.2T.1q(k(b.1D.1c)),d.19.1y){13 e=c.2o(),f=b.21.1e,g=e.1y.1e;1f(a(c.1y).1q(k({17:f.17+g.17,15:f.15+g.15})),d.19.1y.1s){13 h=e.2U.1e;a(c.2U.1j).1q(k({17:f.17+h.17,15:f.15+h.15}))}}a(11.1j).1q(a.1k(k(b.1j.1c),k(b.1j.1e))),a(11.1H).1q(k(b.1H.1c)),a(d.38).1q(k(b.2F.1e))}1a{51:f,1z:d,36:e,1P:g,2e:b,3k:c,2o:j,7w:h,7v:i,52:l}}());13 y={3j:{},1t:12(b){1f(!b)1a 1r;13 c=a(b).1X("2p-1V");1a c?11.3j[c]:1r},30:12(a){11.3j[a.1V]=a},1z:12(a){13 b=11.1t(a);b&&(3G 11.3j[b.1V],b.1z())}};a.1k(z.3F,12(){12 b(){1a B.1t(11.1g)[0]}12 c(){1a u.1t(11.1g)}12 d(){1a 11.19.1K/(11.19.31+1)}12 e(){11.36()}12 f(){11.1j&&(a(11.1j).1z(),11.1j=1r)}12 g(){11.36();13 c=(11.2e(),11.3k()),d=c.2o().1y.1c,e=a.1k({},d),f=11.19.31;e.14+=2*f,e.18+=2*f,a(c.1y).6e(a(11.1j=1x.22("2h")).1Y("9j")),a(1x.3d).1Z(a(11.4s=1x.22("3f"))),q.3J(11.4s,e),q.3p(11.4s);13 g=11.4s.3o("2d");g.2L=11.2x,a(11.1j).1Z(11.4s);28(13 h=e.14/2,i=e.18/2,j=d.18/2,k=f+1,l=0;f>=l;l++)g.2Q=t.2R(11.19.1Q,w.4q(l*(1/k))*(11.19.1K/k)),g.2f(),g.26(h,i,j+l,n(0),n(7d),!0),g.2g(),g.34()}1a{1P:g,1z:e,36:f,2e:b,3k:c,7w:d}}());13 B={2A:{},19:{3V:"6f",4C:9k},6X:12(){12 b(){13 b=["2B"];1S.2H.3H&&(b.2n("9l"),a(1x.3d).3U("2B",12(){1a 3t 0})),a.1w(b,12(b,c){a(1x.7x).9m(".3C .7m, .3C .9n-1D",c,12(b){b.9o(),b.9p(),B.6g(a(b.1C).5f(".3C")[0]).1I()})}),a(1N).3U("3J",a.1v(11.7y,11))}1a b}(),7y:12(){11.5g&&(1N.6h(11.5g),11.5g=1r),11.5g=d.4G(a.1v(12(){13 b=11.3I();a.1w(b,12(a,b){b.1e()})},11),9q)},5h:12(b){13 d,c=a(b).1X("2p-1V");1f(!c){13 e=11.6g(a(b).5f(".3C")[0]);e&&e.1g&&(c=a(e.1g).1X("2p-1V"))}1a c&&(d=11.2A[c])?d:3t 0},5P:12(a){13 b;1a d.2j(a)&&(b=11.5h(a)),b&&b.1g},1t:12(b){13 c=[];1f(d.2j(b)){13 e=11.5h(b);e&&(c=[e])}1G a.1w(11.2A,12(d,e){e.1g&&a(e.1g).7z(b)&&c.2n(e)});1a c},6g:12(b){1f(!b)1a 1r;13 c=1r;1a a.1w(11.2A,12(a,d){d.1F("1P")&&d.1j===b&&(c=d)}),c},9r:12(b){13 c=[];1a a.1w(11.2A,12(d,e){e.1g&&a(e.1g).7z(b)&&c.2n(e)}),c},1W:12(b){1f(d.2j(b)){13 c=b,e=11.1t(c)[0];e&&e.1W()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.1W()},11))},1I:12(b){1f(d.2j(b)){13 c=11.1t(b)[0];c&&c.1I()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.1I()},11))},33:12(b){1f(d.2j(b)){13 c=b,e=11.1t(c)[0];e&&e.33()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.33()},11))},4R:12(){a.1w(11.3I(),12(a,b){b.1I()})},2P:12(b){1f(d.2j(b)){13 c=b,e=11.1t(c)[0];e&&e.2P()}1G a(b).1w(a.1v(12(a,b){13 c=11.1t(b)[0];c&&c.2P()},11))},3I:12(){13 b=[];1a a.1w(11.2A,12(a,c){c.1L()&&b.2n(c)}),b},5S:12(b){13 c=!1;1a d.2j(b)&&a.1w(11.3I()||[],12(a,d){1a d.1g==b?(c=!0,!1):3t 0}),c},7A:12(){13 c,b=0;1a a.1w(11.2A,12(a,d){d.2k>b&&(b=d.2k,c=d)}),c},7B:12(){1>=11.3I().2a&&a.1w(11.2A,12(b,c){c.1F("1P")&&!c.19.2k&&a(c.1j).1q({2k:c.2k=+B.19.4C})})},30:12(a){11.2A[a.1V]=a},5i:12(b){13 c=11.5h(b);1f(c){13 d=a(c.1g).1X("2p-1V");3G 11.2A[d],c.1I(),c.1z()}},1z:12(b){d.2j(b)?11.5i(b):a(b).1w(a.1v(12(a,b){11.5i(b)},11))},6Y:12(){a.1w(11.2A,a.1v(12(a,b){b.1g&&!d.1g.5H(b.1g)&&11.5i(b.1g)},11))},5Q:12(a){11.19.3V=a||"6f"},5R:12(a){11.19.4C=a||0},5U:12(){a.1w(11.2A,a.1v(12(a,b){b.1o&&b.1o.2l&&(b.1o.2l.6i(),b.1o.2l=1r),b.27("3c",!1)},11)),i.6S()},6B:12(){12 f(d){13 e;1a e="2s"==a.1p(d)?{1g:c.25&&c.25.1g||b.25.1g,2v:d}:A(a.1k({},b.25),d)}12 g(f){1a b=1S.2C.7C,c=A(a.1k({},b),1S.2C.6j),d=1S.2C.6k.7C,e=A(a.1k({},d),1S.2C.6k.6j),g=h,h(f)}12 h(g){g.21=g.21&&1S.2C[g.21]?g.21:1S.2C[B.19.3V]?B.19.3V:"6f";13 h=g.21?a.1k({},1S.2C[g.21]||1S.2C[B.19.3V]):{},i=A(a.1k({},c),h),j=A(a.1k({},i),g);1f(j.2c){13 k=c.2c||{},l=b.2c;"4t"==a.1p(j.2c)&&(j.2c={3W:k.3W||l.3W,1p:k.1p||l.1p}),j.2c=A(a.1k({},l),j.2c)}1f(j.1m&&"2s"==a.1p(j.1m)&&(j.1m={1Q:j.1m,1K:1}),j.1i){13 m,n=c.1i||{},o=b.1i;m="2y"==a.1p(j.1i)?{2u:j.1i,1Q:n.1Q||o.1Q,1K:n.1K||o.1K}:A(a.1k({},o),j.1i),j.1i=0===m.2u?!1:m}1f(j.1n){13 p;p="2y"==a.1p(j.1n)?{2u:j.1n,1e:c.1n&&c.1n.1e||b.1n.1e}:A(a.1k({},b.1n),j.1n),j.1n=0===p.2u?!1:p}13 q,s=s=j.1u&&j.1u.1C||"2s"==a.1p(j.1u)&&j.1u||c.1u&&c.1u.1C||"2s"==a.1p(c.1u)&&c.1u||b.1u&&b.1u.1C||b.1u,t=j.1u&&j.1u.1D||c.1u&&c.1u.1D||b.1u&&b.1u.1D||B.2r.6l(s);1f(j.1u?"2s"==a.1p(j.1u)?q={1C:j.1u,1D:B.2r.7D(j.1u)}:(q={1D:t,1C:s},j.1u.1D&&(q.1D=j.1u.1D),j.1u.1C&&(q.1C=j.1u.1C)):q={1D:t,1C:s},"2M"==j.1C){13 u=r.2I(q.1C);q.1C="1J"==u?q.1C.61(/(15|1O)/,"2t"):q.1C.61(/(17|1R)/,"2t")}j.1u=q;13 v;1f("2M"==j.1C?(v=a.1k({},b.1A),a.1k(v,1S.2C.6j.1A||{}),g.21&&a.1k(v,(1S.2C[g.21]||1S.2C[B.19.3V]).1A||{}),v=B.2r.7E(b.1A,b.1u,q.1C,!0),g.1A&&(v=a.1k(v,g.1A||{})),j.3X=0):v={x:j.1A.x,y:j.1A.y},j.1A=v,j.1y&&j.7F){13 w=a.1k({},1S.2C.6k[j.7F]),x=A(a.1k({},e),w);1f(x.2q&&a.1w(["6b","6c"],12(b,c){13 f=x.2q[c],g=e.2q&&e.2q[c];1f(f.1m){13 h=g&&g.1m;1f("2y"==a.1p(f.1m))f.1m={1Q:h&&h.1Q||d.2q[c].1m.1Q,1K:f.1m};1G 1f("2s"==a.1p(f.1m)){13 i=h&&"2y"==a.1p(h.1K)&&h.1K||d.2q[c].1m.1K;f.1m={1Q:f.1m,1K:i}}1G f.1m=A(a.1k({},d.2q[c].1m),f.1m)}1f(f.1i){13 j=g&&g.1i;f.1i="2y"==a.1p(f.1i)?{1Q:j&&j.1Q||d.2q[c].1i.1Q,1K:f.1i}:A(a.1k({},d.2q[c].1i),f.1i)}}),x.1s){13 z=e.1s&&e.1s.3D&&e.1s.3D==5x?e.1s:d.1s;x.1s.3D&&x.1s.3D==5x&&(z=A(z,x.1s)),x.1s=z}j.1y=x}1f(j.1s){13 C;C="4t"==a.1p(j.1s)?c.1s&&"4t"==a.1p(c.1s)?b.1s:c.1s?c.1s:b.1s:A(a.1k({},b.1s),j.1s||{}),"2y"==a.1p(C.1A)&&(C.1A={x:C.1A,y:C.1A}),j.1s=C}1f(j.1l){13 D={};D="4t"==a.1p(j.1l)?A({},b.1l):A(A({},b.1l),a.1k({},j.1l)),"2y"==a.1p(D.1A)&&(D.1A={x:D.1A,y:D.1A}),j.1l=D}1f(j.2Y&&("2s"==a.1p(j.2Y)?j.2Y={5j:j.2Y,7G:!0}:"4t"==a.1p(j.2Y)&&(j.2Y=j.2Y?{5j:"4T",7G:!0}:!1)),j.25&&"2B-9s"==j.25&&(j.7H=!0,j.25=!1),j.25)1f(a.71(j.25)){13 E=[];a.1w(j.25,12(a,b){E.2n(f(b))}),j.25=E}1G j.25=[f(j.25)];1a j.2K&&"2s"==a.1p(j.2K)&&(j.2K=[""+j.2K]),j.2m=0,j.1M&&(1N.6m||(j.1M=!1)),j}13 b,c,d,e;1a g}()};B.2r=12(){12 c(c){13 d=r.2N(c),e=d[1],f=d[2],g=r.2I(c),h=a.1k({1J:!0,2b:!0},20[1]||{});1a"1J"==g?(h.2b&&(e=b[e]),h.1J&&(f=b[f])):(h.2b&&(f=b[f]),h.1J&&(e=b[e])),e+f}12 f(a){13 d=r.2N(a);1a c(d[1]+b[d[2]])}12 h(b,c){a(b.1j).1q({17:c.17+"2w",15:c.15+"2w"})}12 j(a,b,d,e){13 g=y(a,b,d,e),h=d&&"2s"==7I d.1p?d.1p:"";1f(/9t$/.3h(h),1===g.3Y.3Z)1a l(a,g),g;13 m=b,n=e,o={1J:!g.3Y.1J,2b:!g.3Y.2b},p={1J:!1,2b:!1},q=r.2I(b);1a((p.2b="1J"==q&&o.2b)||(p.1J="2b"==q&&o.1J))&&(m=c(b,p),n=c(e,p),g=y(a,m,d,n),1===g.3Y.3Z)?(l(a,g),g):(g=k(g,a),l(a,g),g)}12 k(a,b){13 c=z(b),d=c.1c,e=c.1e,f=u.1t(b.1g).1o.1u[a.1u.1D].1D.1c,g=a.1e,h={17:0,15:0,3A:[]};1a e.15>g.15&&(h.15=e.15-g.15,h.3A.2n("15"),a.1e.15=e.15),e.17>g.17&&(h.17=g.17-e.17,h.3A.2n("17"),a.1e.17=e.17),e.15+d.14<g.15+f.14&&(h.15=e.15+d.14-(g.15+f.14),h.3A.2n("1O"),a.1e.15=e.15+d.14-f.14),e.17+d.18<g.17+f.18&&(h.17=e.17+d.18-(g.17+f.18),h.3A.2n("1R"),a.1e.17=e.17+d.18-f.18),a.7J=h,a}12 l(a,b){a.5e(b.1u.1D,b.3Y.4l,b.7J),h(a,b.1e)}12 m(a){1a a&&(/^2M|2B|3H$/.3h("2s"==7I a.1p&&a.1p||"")||a.5G>=0)}12 n(a,b,c){1a a>=b&&c>=a}12 o(a,b,c,d){13 e=n(a,c,d),f=n(b,c,d);1f(e&&f)1a b-a;1f(e&&!f)1a d-a;1f(!e&&f)1a b-c;13 g=n(c,a,b),h=n(d,a,b);1a g&&h?d-c:g&&!h?b-c:!g&&h?d-a:0}12 q(a,b){1a o(a.1e.15,a.1e.15+a.1c.14,b.1e.15,b.1e.15+b.1c.14)*o(a.1e.17,a.1e.17+a.1c.18,b.1e.17,b.1e.17+b.1c.18)}12 s(a,b){13 c=a.1c.14*a.1c.18;1a c?q(a,b)/c:0}12 t(a,b){13 c=r.2N(b),d=r.2I(b),e={15:0,17:0};1f("1J"==d){1T(c[2]){1h"2t":1h"2S":e.15=.5*a.14;1B;1h"1O":e.15=a.14}"1R"==c[1]&&(e.17=a.18)}1G{1T(c[2]){1h"2t":1h"2S":e.17=.5*a.18;1B;1h"1R":e.17=a.18}"1O"==c[1]&&(e.15=a.14)}1a e}12 v(b){13 c=d.1g.4L(b),e=d.1g.4H(b),f={17:a(1N).4I(),15:a(1N).4J()};1a c.15+=-1*(e.15-f.15),c.17+=-1*(e.17-f.17),c}12 y(b,e,f,g){13 h,i,j,k=u.1t(b.1g),l=k.19,n=l.1A,o=m(f);1f(o||!f){1f(j={14:24,18:24},o){13 p=d.5F(f);h={17:p.y-.5*j.18+6,15:p.x-.5*j.14+6}}1G{13 q=b.1o.2v;h={17:(q?q.y:0)-.5*j.18+6,15:(q?q.x:0)-.5*j.14+6}}b.1o.2v={x:h.15,y:h.17}}1G h=v(f),j={14:a(f).7K(),18:a(f).7L()};1f(l.1l&&"2M"!=l.1C){13 y=r.2N(g),A=r.2N(e),C=r.2I(g),D=k.1o.19,E=k.4p().1i.1c,F=D.1n,G=D.1i,H=F&&"1m"==l.1n.1e?F:0,I=F&&"1i"==l.1n.1e?F:F+G,J=G+H+.5*l.1l.14-.5*E.14,K=I>J?I-J:0;4u=1b.1E(G+H+.5*l.1l.14+K+l.1l.1A["1J"==C?"x":"y"]),"1J"==C&&"15"==y[2]&&"15"==A[2]||"1O"==y[2]&&"1O"==A[2]?(j.14-=2*4u,h.15+=4u):("2b"==C&&"17"==y[2]&&"17"==A[2]||"1R"==y[2]&&"1R"==A[2])&&(j.18-=2*4u,h.17+=4u)}i=a.1k({},h);13 L=o?c(l.1u.1D):l.1u.1C,M=t(j,L),N=t(j,g);({17:h.17+M.17+n.y,15:h.15+M.15+n.x}),h={15:h.15+N.15,17:h.17+N.17};13 P=a.1k({},n);P=x(P,L,g,"2M"==k.19.1C),h.17+=P.y,h.15+=P.x;13 k=u.1t(b.1g),Q=k.1o.1u,R=a.1k({},Q[e]),S={x:0,y:0},y=r.2N(g);1f("2t"!=y[2]){13 C=C=r.2I(g),T=B.2r.6l(g,"2b"==C?{1J:!0,2b:!1}:{1J:!1,2b:!0});e==T&&(S.y=k.3B.5c.y,S.x=k.3B.5c.x)}13 U={17:h.17-R.2J.17-S.y,15:h.15-R.2J.15-S.x};R.1D.1e=U;13 V={1J:!0,2b:!0},W={x:0,y:0};1f(b.19.2Y){13 X=z(b),Y=b.19.1s?w.1t(b.1g):k,Z=Y.2o().1D.1c;V.3Z=s({1c:Z,1e:U},X),1>V.3Z&&((U.15<X.1e.15||U.15+Z.14>X.1e.15+X.1c.14)&&(V.1J=!1,W.x=U.15<X.1e.15?U.15-X.1e.15:U.15+Z.14-(X.1e.15+X.1c.14)),(U.17<X.1e.17||U.17+Z.18>X.1e.17+X.1c.18)&&(V.2b=!1,W.y=U.17<X.1e.17?U.17-X.1e.17:U.17+Z.18-(X.1e.17+X.1c.18)))}1G V.3Z=1;V.4l=W;13 $=Q[e].1H,7M=s({1c:j,1e:i},{1c:$.1c,1e:{17:U.17+$.1e.17,15:U.15+$.1e.15}});1a{1e:U,3Z:{1C:7M},3Y:V,1u:{1D:e,1C:g}}}12 z(b){13 c={17:a(1N).4I(),15:a(1N).4J()},e=b.19,f=e.1C;("2M"==f||"4F"==f)&&(f=b.1g);13 g=a(f).5f(e.2Y.5j).7i()[0];1f(!g||"4T"==e.2Y.5j)1a{1c:p.4T(),1e:c};13 h=d.1g.4L(g),i=d.1g.4H(g);1a h.15+=-1*(i.15-c.15),h.17+=-1*(i.17-c.17),{1c:{14:a(g).5V(),18:a(g).5W()},1e:h}}13 b={15:"1O",1O:"15",17:"1R",1R:"17",2t:"2t",2S:"2S"};e.3m&&9>e.3m||e.4M&&2>e.4M||e.5M&&9u>e.5M;13 x=12(){13 a=[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]],b={3R:0,3O:0,4b:1,58:1,3P:2,3Q:2,4c:5,59:5,4d:8,4e:8,4f:7,5a:7,4g:6,4h:6,4i:3,5b:3};1a 12(c,d,e,f){13 g=a[b[d]],h=a[b[e]],i=[1b.65(.5*1b.2V(g[0]-h[0]))?-1:1,1b.65(.5*1b.2V(g[1]-h[1]))?-1:1];1a r.35(d)||!r.35(e)||f||("1J"==r.2I(e)?i[0]=0:i[1]=0),{x:i[0]*c.x,y:i[1]*c.y}}}();1a{1t:y,4P:j,6l:c,7D:f,7N:v,7E:x,6n:m}}(),B.2r.4S={x:0,y:0},a(1x).6W(12(){13 b=B.2r;a(1x).3U("5k",12(a){b.4S={x:a.5G,y:a.6H}})}),B.53=12(){12 b(){a(1x.3d).1Z(a(1x.22("2h")).1Y("9v").1Z(a(1x.22("2h")).1Y("3C").1Z(a(11.1j=1x.22("2h")).1Y("7O"))))}12 c(b){1a{14:a(b).5V(),18:a(b).5W()}}12 e(b){13 d=c(b),e=b.4K;1a e&&a(e).1q({14:d.14+"2w"})&&c(b).18>d.18&&d.14++,a(e).1q({14:"62%"}),d}12 f(b,c,e){11.1j||11.1P();13 f=b.19,g=a.1k({1M:!1},20[3]||{});!f.7P&&!d.2j(c)||a(c).1X("7Q")||(f.7P&&"2s"==a.1p(c)&&(b.39=a("#"+c)[0],c=b.39),!b.40&&c&&d.1g.5H(c)&&(a(b.39).1X("7R",a(b.39).1q("7S")),b.40=1x.22("2h"),a(b.39).6e(a(b.40).1I())));13 h=1x.22("2h");a(11.1j).1Z(a(h).1Y("7h 9w").1Z(c)),d.2j(c)&&a(c).1W(),f.21&&a(h).1Y("9x"+b.19.21);13 i=a(h).67("7T[4m]").9y(12(){1a!(a(11).3g("18")&&a(11).3g("14"))});1f(i.2a>0&&!b.1F("3E")){b.27("3E",!0),f.1M&&(g.1M||b.1M||(b.1M=b.6o(f.1M)),b.1F("1L")&&(b.1e(),a(b.1j).1W()),b.1M.6p());13 j=0,k=1b.1U(9z,9A*(i.2a||0));b.2i("3E"),b.41("3E",a.1v(12(){i.1w(12(){11.6q=12(){}}),j>=i.2a||(11.5l(b,h),e&&e())},11),k),a.1w(i,a.1v(12(c,d){13 f=3q 9B;f.6q=a.1v(12(){f.6q=12(){};13 c=f.14,g=f.18,k=a(d).3g("14"),l=a(d).3g("18");k&&l||(!k&&l?(c=1b.23(l*c/g),g=l):!l&&k&&(g=1b.23(k*g/c),c=k),a(d).3g({14:c,18:g}),j++),j==i.2a&&(b.2i("3E"),b.1M&&(b.1M.1z(),b.1M=1r),b.1F("1L")&&a(b.1j).1I(),11.5l(b,h),e&&e())},11),f.4m=d.4m},11))}1G 11.5l(b,h),e&&e()}12 g(b,c){13 d=e(c),f={14:d.14-(2O(a(c).1q("2m-15"))||0)-(2O(a(c).1q("2m-1O"))||0),18:d.18-(2O(a(c).1q("2m-17"))||0)-(2O(a(c).1q("2m-1R"))||0)};b.19.3i&&"2y"==a.1p(b.19.3i)&&f.14>b.19.3i&&(a(c).1q({14:b.19.3i+"2w"}),d=e(c)),b.1o.2G=d,a(b.38).7U(c)}1a{1P:b,42:f,5l:g,69:e}}(),a.1k(C.3F,12(){12 b(a,b,c){11.1o.3b[a]=d.4G(b,c)}12 c(a){1a 11.1o.3b[a]}12 e(a){11.1o.3b[a]&&(1N.6h(11.1o.3b[a]),3G 11.1o.3b[a])}12 f(){a.1w(11.1o.3b,12(a,b){1N.6h(b)}),11.1o.3b=[]}12 g(b,c,d,e){c=c;13 f=a.1v(d,e||11);11.1o.5A.2n({1g:b,7V:c,7W:f}),a(b).3U(c,f)}12 h(){a.1w(11.1o.5A,12(b,c){a(c.1g).7X(c.7V,c.7W)})}12 j(a,b){11.1o.2q[a]=b}12 l(a){1a 11.1o.2q[a]}12 m(){11.2D(11.1g,"4o",11.5m),11.2D(11.1g,"54",a.1v(12(a){11.6r(a)},11)),11.19.2K&&a.1w(11.19.2K,a.1v(12(b,c){13 d=!1;"2B"==c&&(11.19.25&&a.1w(11.19.25,12(a,b){1a"4F"==b.1g&&"2B"==b.2v?(d=!0,!1):3t 0}),11.27("5B",d)),11.2D(11.1g,c,"2B"==c?d?11.33:11.1W:a.1v(12(){11.7Y()},11))},11)),11.19.25?a.1w(11.19.25,a.1v(12(b,c){13 d;1T(c.1g){1h"4F":1f(11.1F("5B")&&"2B"==c.2v)1a;d=11.1g;1B;1h"1C":d=11.1C}d&&11.2D(d,c.2v,"2B"==c.2v?11.1I:a.1v(12(){11.6s()},11))},11)):11.19.7Z&&11.19.2K&&!a.6t("2B",11.19.2K)>-1&&11.2D(11.1g,"54",a.1v(12(){11.2i("1W")},11));13 b=!1;!11.19.9C&&11.19.2K&&((b=a.6t("5k",11.19.2K)>-1)||a.6t("5n",11.19.2K)>-1)&&"2M"==11.1C&&11.2D(11.1g,b?"5k":"5n",12(a){11.1F("4E")&&11.1e(a)})}12 n(){11.2D(11.1j,1S.2H.3H?"5n":"4o",11.5m),11.2D(11.1j,"54",11.6r),11.2D(11.1j,1S.2H.3H?"5n":"4o",a.1v(12(){11.5o("4v")||11.1W()},11)),11.19.25&&a.1w(11.19.25,a.1v(12(b,c){13 d;1T(c.1g){1h"1D":d=11.1j}d&&11.2D(d,c.2v,c.2v.3e(/^(2B|5k|4o)$/)?11.1I:a.1v(12(){11.6s()},11))},11))}12 o(a,b,c){13 d=u.1t(11.1g);d&&d.5e(a,b,c)}12 p(a){13 b=u.1t(11.1g);b&&b.4n(a)}12 q(){11.4n(11.19.1u.1D)}12 r(){a(11.1j=1x.22("2h")).1Y("3C"),11.80()}12 s(){11.1P();13 a=u.1t(11.1g);a?a.1P():(3q v(11.1g),11.27("4E",!0))}12 t(){11.1F("1P")||(a(1x.3d).1Z(a(11.1j).1q({15:"-5p",17:"-5p",2k:11.2k}).1Z(a(11.4Z=1x.22("2h")).1Y("9D")).1Z(a(11.38=1x.22("2h")).1Y("7O"))),a(11.1j).1Y("9E"+11.19.21),11.19.7H&&(a(11.1g).1Y("81"),11.2D(1x.7x,"2B",a.1v(12(b){1f(11.1L()){13 c=a(b.1C).5f(".3C, .81")[0];(!c||c&&c!=11.1j&&c!=11.1g)&&11.1I()}},11))),1S.2H.48&&(11.19.4w||11.19.3X)&&(11.5q(11.19.4w),a(11.1j).1Y("6u")),11.82(),11.27("1P",!0),B.30(11))}12 w(){13 c;11.2F,11.40&&11.39&&((c=a(11.39).1X("7R"))&&a(11.39).1q({7S:c}),a(11.40).6e(11.39).1z(),11.40=1r)}12 x(){d.44(a.1v(12(){11.83()},11)),11.84(),11.6v(),d.44(a.1v(12(){a(11.1j).67("7T[4m]").7X("9F")},11)),u.1z(11.1g),11.1F("1P")&&11.1j&&(a(11.1j).1z(),11.1j=1r);13 c,b="5z";(c=a(11.1g).1X(b))&&a(11.1g).3g("5y",c).85("5z"),a(11.1g).85("2p-1V")}12 y(b){13 c=a.1k({4x:11.19.4x,1M:!1},20[1]||{});11.1P(),11.1F("1L")&&a(11.1j).1I(),B.53.42(11,b,a.1v(12(){13 b=11.1F("1L");b||11.27("1L",!0),11.86(),b||11.27("1L",!1),11.1F("1L")&&(a(11.1j).1I(),11.1e(),11.5r(),a(11.1j).1W()),11.27("3c",!0),c.4x&&c.4x(11.38.4y,11.1g),c.4z&&c.4z()},11),{1M:c.1M})}12 z(b){13 c,d={47:11.2F,1p:11.19.2c.1p,1X:11.19.2c.1X||{},87:11.19.2c.87||"7U"};1f(!(11.1F("2l")||11.19.2c.3W&&11.1F("3c"))){1f(11.19.2c.3W&&(c=i.1t(d)))1a 11.6w(c,{4z:a.1v(12(){11.1F("1L")&&11.19.43&&11.19.43(11.38.4y,11.1g)},11)}),3t 0;11.27("2l",!0),11.19.1M&&(11.1M?11.1M.6p():(11.1M=11.6o(11.19.1M),11.27("3c",!1)),11.1e(b)),11.1o.2l&&(11.1o.2l.6i(),11.1o.2l=1r),11.1o.2l=a.2c(a.1k({},d,{9G:a.1v(12(b,c,e){0!==e.9H&&(i.4P(d,e.4O),11.6w(e.4O,{4z:a.1v(12(){11.27("2l",!1),11.1F("1L")&&11.19.43&&11.19.43(11.38.4y,11.1g),11.1M&&(11.1M.1z(),11.1M=1r)},11)}))},11)}))}}12 A(b){13 c=a.1k({1M:11.19.1M&&11.1M},20[1]||{});11.42(b,c)}12 C(){13 b=1x.22("2h");a(b).1X("7Q",!0);13 c=6m.4Q(b,a.1k({},20[0]||{})),d=6m.5Y(b);1a a(b).1q(k(d)),11.42(b,{4x:!1,4z:12(){c.6p()}}),c}12 E(){1f(11.1F("1P")&&!11.19.2k){13 b=B.7A();b&&b!=11&&11.2k<=b.2k&&a(11.1j).1q({2k:11.2k=b.2k+1})}}12 F(){13 a=u.1t(11.1g);a&&(a.2P(),11.1L()&&11.1e())}12 G(a){1f(1S.2H.48){a=a||0;13 b=11.1j.9I;b.9J=a+"5s",b.9K=a+"5s",b.9L=a+"5s",b.9M=a+"5s"}}12 H(b){11.2i("1I"),11.2i("4v"),11.1F("1L")||11.5o("1W")||11.41("1W",a.1v(12(){11.2i("1W"),11.1W(b)},11),11.19.7Z||1)}12 I(b){1f(11.2i("1I"),11.2i("4v"),!11.1L()){1f("12"==a.1p(11.2F)||"12"==a.1p(11.1o.5t)){"12"!=a.1p(11.1o.5t)&&(11.1o.5t=11.2F);13 c=11.1o.5t(11.1g)||!1;1f(c!=11.1o.5C&&(11.1o.5C=c,11.27("3c",!1),11.6v()),11.2F=c,!c)1a}11.19.9N&&B.4R(),11.27("1L",!0),11.19.2c?11.88(b):11.1F("3c")||11.42(11.2F),11.1F("4E")&&11.1e(b),11.5r(),11.19.5u&&d.44(a.1v(12(){11.5m()},11)),"12"==a.1p(11.19.43)&&(!11.19.2c||11.19.2c&&11.19.2c.3W&&11.1F("3c"))&&11.19.43(11.38.4y,11.1g),1S.2H.48&&(11.19.4w||11.19.3X)&&(11.5q(11.19.4w),a(11.1j).1Y("89").8a("6u")),a(11.1j).1W()}}12 J(){11.2i("1W"),11.1F("1L")&&(11.27("1L",!1),1S.2H.48&&(11.19.4w||11.19.3X)?(11.5q(11.19.3X),a(11.1j).8a("89").1Y("6u"),11.41("4v",a.1v(11.6x,11),11.19.3X)):11.6x(),11.1o.2l&&(11.1o.2l.6i(),11.1o.2l=1r,11.27("2l",!1)))}12 K(){11.1F("1P")&&(a(11.1j).1q({15:"-5p",17:"-5p"}),B.7B(),"12"!=a.1p(11.19.8b)||11.1M||11.19.8b(11.38.4y,11.1g))}12 L(){11.2i("1W"),!11.5o("1I")&&11.1F("1L")&&11.41("1I",a.1v(12(){11.2i("1I"),11.2i("4v"),11.1I()},11),11.19.9O||1)}12 M(a){11[11.1L()?"1I":"1W"](a)}12 N(){1a 11.1F("1L")}12 O(){11.27("4D",!0),11.1F("1L")&&11.5r(),11.19.5u&&11.2i("6y")}12 P(){11.27("4D",!1),11.19.5u&&11.41("6y",a.1v(12(){11.2i("6y"),11.1F("4D")||11.1I()},11),11.19.5u)}13 D=12(b){1f(11.1L()){13 c;1f("2M"==11.19.1C){13 e=B.2r.6n(b),f=B.2r.4S;1f(e)f.x||f.y?(11.1o.2v={x:f.x,y:f.y},c=1r):c=b;1G{1f(f.x||f.y)11.1o.2v={x:f.x,y:f.y};1G 1f(!11.1o.2v){13 g=B.2r.7N(11.1g);11.1o.2v={x:g.15,y:g.17}}c=1r}}1G c=11.1C;1f(B.2r.4P(11,11.19.1u.1D,c,11.19.1u.1C),b&&B.2r.6n(b)){13 h={14:a(11.1j).7K(),18:a(11.1j).7L()},i=d.5F(b),g=d.1g.4L(11.1j);i.x>=g.15&&i.x<=g.15+h.14&&i.y>=g.17&&i.y<=g.17+h.18&&d.44(a.1v(12(){11.2i("1I")},11))}}};1a{1P:t,6E:r,86:s,80:m,82:n,1W:I,1I:J,6x:K,33:M,1L:N,7Y:H,6s:L,5q:G,27:j,1F:l,5m:O,6r:P,5o:c,41:b,2i:e,84:f,2D:g,83:h,5e:o,4n:p,9P:q,2P:F,42:y,88:z,6w:A,6o:C,1e:D,5r:E,6v:w,1z:x}}()),1S.3p()})(46);', 62, 610, "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|function|var|width|left||top|height|options|return|Math|dimensions|lineTo|position|if|element|case|border|container|extend|stem|background|radius|_cache|type|css|null|shadow|get|hook|proxy|each|document|closeButton|remove|offset|break|target|tooltip|ceil|getState|else|bubble|hide|horizontal|opacity|visible|spinner|window|right|build|color|bottom|Tipped|switch|max|uid|show|data|addClass|append|arguments|skin|createElement|round||hideOn|arc|setState|for|_hookPosition|length|vertical|ajax||getTooltip|beginPath|closePath|div|clearTimer|isElement|zIndex|xhr|padding|push|getOrderLayout|tipped|states|Position|string|middle|size|event|px|_globalAlpha|number|box|tooltips|click|Skins|setEvent|180|content|contentDimensions|support|getOrientation|anchor|showOn|globalAlpha|mouse|split|parseInt|refresh|fillStyle|hex2fill|center|iframeShim|closeButtonShadow|abs|bubbleCanvas|blurs|containment|PI|add|blur|scripts|toggle|fill|isCenter|cleanup|cornerOffset|contentElement|inlineContent|_stemCorrection|timers|updated|body|match|canvas|attr|test|maxWidth|shadows|getSkin|_adjustment|IE|indexOf|getContext|init|new|devicePixelRatio|moveTo|void|charAt|toLowerCase|diameter|hookPosition|layout|stemLayout|sides|_corrections|t_Tooltip|constructor|preloading_images|prototype|delete|touch|getVisible|resize|x1|y1|x2|y2|topleft|topright|righttop|lefttop|math|getLayout|bind|defaultSkin|cache|fadeOut|contained|overlap|inlineMarker|setTimer|update|onShow|defer||jQuery|url|cssTransitions|items|createFillStyle|topmiddle|rightmiddle|rightbottom|bottomright|bottommiddle|bottomleft|leftbottom|leftmiddle|regex|getBorderDimensions|correction|src|setHookPosition|mouseenter|getStemLayout|transition|Stem|closeButtonCanvas|boolean|sideOffset|fadeTransition|fadeIn|afterUpdate|firstChild|callback|cos|000|startingZIndex|active|skinned|self|delay|cumulativeScrollOffset|scrollTop|scrollLeft|parentNode|cumulativeOffset|Gecko|Chrome|responseText|set|create|hideAll|mouseBuffer|viewport|min|G_vmlCanvasManager|getCenterBorderDimensions|substring|skins|skinElement||prepare|order|UpdateQueue|mouseleave||rotate|borderRadius|topcenter|rightcenter|bottomcenter|leftcenter|corner|corrections|setHookPositionAndStemCorrection|closest|_resizeTimer|_getTooltip|_remove|selector|mousemove|_updateTooltip|setActive|touchmove|getTimer|10000px|setFadeDuration|raise|ms|contentFunction|hideAfter|console|in|Object|title|tipped_restore_title|events|toggles|fnCallContent|call|apply|pointer|pageX|isAttached|RegExp|parseFloat|Opera|opera|WebKit|required|available|findElement|setDefaultSkin|setStartingZIndex|isVisibleByElement|undefined|clearAjaxCache|innerWidth|innerHeight|getSide|getDimensions|getBubbleLayout|nullifyCornerOffset|replace|100|defaultCloseButton|hoverCloseButton|floor|prepend|find|auto|getMeasureElementDimensions|drawCloseButtonState|default|hover|_drawBackgroundPath|before|dark|getByTooltipElement|clearTimeout|abort|reset|CloseButtons|getInversedPosition|Spinners|isPointerEvent|insertSpinner|play|onload|setIdle|hideDelayed|inArray|t_hidden|_restoreInlineContent|afterAjaxUpdate|_hide|idle|warn|_stemPosition|createOptions|getAttribute|getElementById|_preBuild|Array|concat|pageY|version|AppleWebKit|MobileSafari|check|pow|Za|checked|notified|toUpperCase|param|clear|try|DocumentTouch|catch|ready|startDelegating|removeDetached|drawRoundedRectangle|fillRect|isArray|Gradient|addColorStops|positions|toOrientation|side|toDimension|isCorner|atan|red|green|blue|360|drawBubble|drawCloseButton|createHookCache|t_ContentContainer|first|25000px|setStemCorrection|setAdjustment|t_Close|closeButtonShift|closeButtonMouseover|closeButtonMouseout|CloseButton|stemOffset|backgroundRadius|_drawBorderPath|setGlobalAlpha|drawBackground|getBlurOpacity|documentElement|onWindowResize|is|getHighestTooltip|resetZ|base|getTooltipPositionFromTarget|adjustOffsetBasedOnHooks|closeButtonSkin|flip|hideOnClickOutside|typeof|adjustment|outerWidth|outerHeight|_|getAbsoluteOffset|t_Content|inline|isSpinner|tipped_restore_inline_display|display|img|html|eventName|handler|unbind|showDelayed|showDelay|createPreBuildObservers|t_hideOnClickOutside|createPostBuildObservers|clearEvents|clearTimers|removeData|_buildSkin|dataType|ajaxUpdate|t_visible|removeClass|onHide|log|sqrt|object|setAttribute|slice|wrap|nodeType|setTimeout|do|while|exec|attachEvent|MSIE|KHTML|rv|Apple|Mobile|Safari|navigator|userAgent|fn|jquery|z_|z0|requires|_t_uid_|ontouchstart|instanceof|WebKitTransitionEvent|TransitionEvent|OTransitionEvent|createEvent|scale|initElement|drawPixelArray|createLinearGradient|addColorStop|spacing|rgba|join|fff|255|hue|saturation|brightness|0123456789abcdef|hex2rgb|getSaturatedBW|init_|t_Bubble||iframe|t_iframeShim|frameBorder|javascript|15000px|t_CloseButtonShift|lineCap|t_CloseState|translate|stemCorrection|270|lineWidth|sin|setOpacity|getCenterBorderDimensions2|acos|t_Shadow|t_ShadowBubble|t_CloseButtonShadow|999999|touchstart|delegate|close|preventDefault|stopPropagation|200|getBySelector|outside|move|530|t_UpdateQueue|t_clearfix|t_Content_|filter|8e3|750|Image|fixed|t_Skin|t_Tooltip_|load|success|status|style|MozTransitionDuration|webkitTransitionDuration|OTransitionDuration|transitionDuration|hideOthers|hideDelay|resetHookPosition".split("|"), 0, {})),
    function(e) {
        e.fn.popupWindow = function(t) {
            return this.each(function() {
                e(this).click(function() {
                    e.fn.popupWindow.defaultSettings = {
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
                    }, settings = e.extend({}, e.fn.popupWindow.defaultSettings, t || {});
                    var i = "height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars + ",status=" + settings.status + ",resizable=" + settings.resizable + ",location=" + settings.location + ",menuBar=" + settings.menubar;
                    settings.windowName = this.name || settings.windowName, settings.windowURL = this.href || settings.windowURL;
                    var s, n;
                    return settings.centerBrowser ? (e.browser.msie ? (s = window.screenTop - 120 + ((document.documentElement.clientHeight + 120) / 2 - settings.height / 2), n = window.screenLeft + ((document.body.offsetWidth + 20) / 2 - settings.width / 2)) : (s = window.screenY + (window.outerHeight / 2 - settings.height / 2), n = window.screenX + (window.outerWidth / 2 - settings.width / 2)), window.open(settings.windowURL, settings.windowName, i + ",left=" + n + ",top=" + s).focus()) : settings.centerScreen ? (s = (screen.height - settings.height) / 2, n = (screen.width - settings.width) / 2, window.open(settings.windowURL, settings.windowName, i + ",left=" + n + ",top=" + s).focus()) : window.open(settings.windowURL, settings.windowName, i + ",left=" + settings.left + ",top=" + settings.top).focus(), !1
                })
            })
        }
    }(jQuery),
    function(e) {
        e.fn.UItoTop = function(t) {
            var i = {
                    text: "To Top",
                    min: 625,
                    inDelay: 600,
                    outDelay: 400,
                    containerID: "toTop",
                    containerHoverID: "toTopHover",
                    scrollSpeed: 1200,
                    easingType: "linear"
                },
                s = e.extend(i, t),
                n = "#" + s.containerID,
                a = "#" + s.containerHoverID;
            e("body").append('<a class="hide-on-mobile" href="#" id="' + s.containerID + '">' + s.text + "</a>"), e(n).hide().click(function() {
                return _gaq.push(["_trackEvent", "Scroll To Top", "Click", "Scroll To Top"]), e("html, body").animate({
                    scrollTop: 0
                }, s.scrollSpeed, s.easingType), e("#" + s.containerHoverID, this).stop().animate({
                    opacity: 0
                }, s.inDelay, s.easingType), !1
            }).prepend('<span id="' + s.containerHoverID + '"></span>').hover(function() {
                e(a, this).stop().animate({
                    opacity: 1
                }, 600, "linear")
            }, function() {
                e(a, this).stop().animate({
                    opacity: 0
                }, 700, "linear")
            }), e(window).scroll(function() {
                var t = e(window).scrollTop();
                "undefined" == typeof document.body.style.maxHeight && e(n).css({
                    position: "absolute",
                    top: e(window).scrollTop() + e(window).height() - 50
                }), t > s.min ? e(n).fadeIn(s.inDelay) : e(n).fadeOut(s.Outdelay)
            })
        }
    }(jQuery), eval(function(e, t, i, s, n, a) {
        if (n = function(e) {
                return (t > e ? "" : n(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
            }, !"".replace(/^/, String)) {
            for (; i--;) a[n(i)] = s[i] || n(i);
            s = [function(e) {
                return a[e]
            }], n = function() {
                return "\\w+"
            }, i = 1
        }
        for (; i--;) s[i] && (e = e.replace(new RegExp("\\b" + n(i) + "\\b", "g"), s[i]));
        return e
    }('(P(){if(1d.6N){Q}T b={3A:"ed.7.4",e6:0,67:{},$9Y:P(d){Q(d.$4B||(d.$4B=++a.e6))},93:P(d){Q(a.67[d]||(a.67[d]={}))},$F:P(){},$X:P(){Q X},2N:P(d){Q(1F!=d)},eF:P(d){Q!!(d)},2D:P(d){if(!a.2N(d)){Q X}if(d.$4b){Q d.$4b}if(!!d.5i){if(1==d.5i){Q"8Y"}if(3==d.5i){Q"dE"}}if(d.1B&&d.8M){Q"eG"}if(d.1B&&d.9t){Q"2c"}if((d 4z 1d.en||d 4z 1d.ab)&&d.4I===a.4v){Q"7m"}if(d 4z 1d.5l){Q"5Q"}if(d 4z 1d.ab){Q"P"}if(d 4z 1d.8q){Q"5C"}if(a.18.2A){if(a.2N(d.cH)){Q"3f"}}1f{if(d===1d.3f||d.4I==1d.9P||d.4I==1d.f1||d.4I==1d.ez||d.4I==1d.eI||d.4I==1d.eL){Q"3f"}}if(d 4z 1d.dP){Q"dC"}if(d 4z 1d.53){Q"eM"}if(d===1d){Q"1d"}if(d===1l){Q"1l"}Q 4f(d)},1U:P(j,h){if(!(j 4z 1d.5l)){j=[j]}1I(T g=0,e=j.1B;g<e;g++){if(!a.2N(j)){63}1I(T f in(h||{})){31{j[g][f]=h[f]}3h(d){}}}Q j[0]},8Z:P(h,g){if(!(h 4z 1d.5l)){h=[h]}1I(T f=0,d=h.1B;f<d;f++){if(!a.2N(h[f])){63}if(!h[f].2S){63}1I(T e in(g||{})){if(!h[f].2S[e]){h[f].2S[e]=g[e]}}}Q h[0]},dM:P(f,e){if(!a.2N(f)){Q f}1I(T d in(e||{})){if(!f[d]){f[d]=e[d]}}Q f},$31:P(){1I(T f=0,d=2c.1B;f<d;f++){31{Q 2c[f]()}3h(g){}}Q 19},$A:P(f){if(!a.2N(f)){Q $V([])}if(f.dQ){Q $V(f.dQ())}if(f.8M){T e=f.1B||0,d=1r 5l(e);3P(e--){d[e]=f[e]}Q $V(d)}Q $V(5l.2S.eV.1W(f))},2X:P(){Q 1r dP().f6()},3M:P(h){T f;2m(a.2D(h)){1m"a2":f={};1I(T g in h){f[g]=a.3M(h[g])}1n;1m"5Q":f=[];1I(T e=0,d=h.1B;e<d;e++){f[e]=a.3M(h[e])}1n;2j:Q h}Q a.$(f)},$:P(e){if(!a.2N(e)){Q 19}if(e.$a9){Q e}2m(a.2D(e)){1m"5Q":e=a.dM(e,a.1U(a.5l,{$a9:a.$F}));e.36=e.3S;e.4F=a.5l.4F;Q e;1n;1m"5C":T d=1l.d3(e);if(a.2N(d)){Q a.$(d)}Q 19;1n;1m"1d":1m"1l":a.$9Y(e);e=a.1U(e,a.6l);1n;1m"8Y":a.$9Y(e);e=a.1U(e,a.3t);1n;1m"3f":e=a.1U(e,a.9P);1n;1m"dE":Q e;1n;1m"P":1m"5Q":1m"dC":2j:1n}Q a.1U(e,{$a9:a.$F})},$1r:P(d,f,e){Q $V(a.2J.48(d)).cM(f||{}).1e(e||{})},eD:P(e){if(1l.9w&&1l.9w.1B){1l.9w[0].as(e,0)}1f{T d=$V(1l.48("1K"));d.2Z(e);1l.6I("8J")[0].2s(d)}}};T a=b;1d.6N=b;1d.$V=b.$;a.5l={$4b:"5Q",4C:P(g,h){T d=N.1B;1I(T e=N.1B,f=(h<0)?1s.3N(0,e+h):h||0;f<e;f++){if(N[f]===g){Q f}}Q-1},4F:P(d,e){Q N.4C(d,e)!=-1},3S:P(d,g){1I(T f=0,e=N.1B;f<e;f++){if(f in N){d.1W(g,N[f],f,N)}}},2W:P(d,j){T h=[];1I(T g=0,e=N.1B;g<e;g++){if(g in N){T f=N[g];if(d.1W(j,N[g],g,N)){h.4g(f)}}}Q h},ee:P(d,h){T g=[];1I(T f=0,e=N.1B;f<e;f++){if(f in N){g[f]=d.1W(h,N[f],f,N)}}Q g}};a.8Z(8q,{$4b:"5C",4p:P(){Q N.2B(/^\\s+|\\s+$/g,"")},eq:P(d,e){Q(e||X)?(N.5Y()===d.5Y()):(N.2Y().5Y()===d.2Y().5Y())},3e:P(){Q N.2B(/-\\D/g,P(d){Q d.dJ(1).eB()})},6L:P(){Q N.2B(/[A-Z]/g,P(d){Q("-"+d.dJ(0).2Y())})},1N:P(d){Q 2d(N,d||10)},d7:P(){Q 44(N)},6t:P(){Q!N.2B(/1a/i,"").4p()},3i:P(e,d){d=d||"";Q(d+N+d).4C(d+e+d)>-1}});b.8Z(ab,{$4b:"P",1o:P(){T e=a.$A(2c),d=N,f=e.7u();Q P(){Q d.52(f||19,e.dG(a.$A(2c)))}},2k:P(){T e=a.$A(2c),d=N,f=e.7u();Q P(g){Q d.52(f||19,$V([g||1d.3f]).dG(e))}},2v:P(){T e=a.$A(2c),d=N,f=e.7u();Q 1d.5I(P(){Q d.52(d,e)},f||0)},dh:P(){T e=a.$A(2c),d=N;Q P(){Q d.2v.52(d,e)}},co:P(){T e=a.$A(2c),d=N,f=e.7u();Q 1d.g0(P(){Q d.52(d,e)},f||0)}});T c=a5.g3.2Y();a.18={9F:{bA:!!(1l.g4),f7:!!(1d.fR),aj:!!(1l.fP)},3Q:P(){Q"fT"in 1d||(1d.dO&&1l 4z dO)}(),g8:c.3s(/bV|gm|gl|go\\/|ge|gf|gi|fl|fk|fj|fn|ip(bT|bW|ad)|fh|fa|f8 |fc|fd|ff|fe|c2 m(fs|in)i|ft( fH)?|bY|p(fK|fx)\\/|fz|fY|fA|fB|fC|fy\\.(18|5O)|fu|fv|fw (ce|bY)|fD|fE/)?1a:X,4J:(1d.c2)?"7v":!!(1d.fL)?"2A":(1F!=1l.fM||19!=1d.fJ)?"bj":(19!=1d.fI||!a5.fF)?"3m":"fG",3A:"",45:0,8v:c.3s(/ip(?:ad|bW|bT)/)?"c7":(c.3s(/(?:fg|bV)/)||a5.8v.3s(/dN|5j|f9/i)||["fb"])[0].2Y(),3I:1l.9I&&"cc"==1l.9I.2Y(),4q:P(){Q(1l.9I&&"cc"==1l.9I.2Y())?1l.2i:1l.9k},5R:1d.5R||1d.fi||1d.fp||1d.fr||1d.fo||1F,8f:1d.8f||1d.ci||1d.ci||1d.fm||1d.fN||1d.fO||1F,1L:X,3C:P(){if(a.18.1L){Q}a.18.1L=1a;a.2i=$V(1l.2i);a.5j=$V(1d);(P(){a.18.6S={4k:X,3g:""};if(4f 1l.2i.1K.cX!=="1F"){a.18.6S.4k=1a}1f{T f="bv bC O 8I bu".4a(" ");1I(T e=0,d=f.1B;e<d;e++){a.18.6S.3g=f[e];if(4f 1l.2i.1K[a.18.6S.3g+"gg"]!=="1F"){a.18.6S.4k=1a;1n}}}})();(P(){a.18.7g={4k:X,3g:""};if(4f 1l.2i.1K.gh!=="1F"){a.18.7g.4k=1a}1f{T f="bv bC O 8I bu".4a(" ");1I(T e=0,d=f.1B;e<d;e++){a.18.7g.3g=f[e];if(4f 1l.2i.1K[a.18.7g.3g+"ga"]!=="1F"){a.18.7g.4k=1a;1n}}}})();$V(1l).cE("5h")}};(P(){P d(){Q!!(2c.9t.ae)}a.18.3A=("7v"==a.18.4J)?!!(1l.8J)?gb:!!(1d.gc)?gd:!!(1d.bD)?6V:(a.18.9F.aj)?gj:((d())?gk:((1l.7h)?gq:4R)):("2A"==a.18.4J)?!!(1d.gr||1d.gs)?bE:!!(1d.bq&&1d.gp)?6:((1d.bq)?5:4):("3m"==a.18.4J)?((a.18.9F.bA)?((a.18.9F.aj)?gn:cI):g9):("bj"==a.18.4J)?!!(1l.8J)?4R:!!1l.6r?fV:!!(1d.bD)?fW:((1l.7h)?fX:fU):"";a.18[a.18.4J]=a.18[a.18.4J+a.18.3A]=1a;if(1d.a3){a.18.a3=1a}a.18.45=(!a.18.2A)?0:(1l.bO)?1l.bO:P(){T e=0;if(a.18.3I){Q 5}2m(a.18.3A){1m 4:e=6;1n;1m 5:e=7;1n;1m 6:e=8;1n;1m bE:e=9;1n}Q e}()})();(P(){a.18.3k={4k:X,91:P(){Q X},9V:P(){},c8:P(){},bG:"",bH:"",3g:""};if(4f 1l.cj!="1F"){a.18.3k.4k=1a}1f{T f="3m cQ o 8I fQ".4a(" ");1I(T e=0,d=f.1B;e<d;e++){a.18.3k.3g=f[e];if(4f 1l[a.18.3k.3g+"cV"]!="1F"){a.18.3k.4k=1a;1n}}}if(a.18.3k.4k){a.18.3k.bG=a.18.3k.3g+"fS";a.18.3k.bH=a.18.3k.3g+"fZ";a.18.3k.91=P(){2m(N.3g){1m"":Q 1l.3k;1m"3m":Q 1l.g5;2j:Q 1l[N.3g+"g6"]}};a.18.3k.9V=P(g){Q(N.3g==="")?g.cy():g[N.3g+"g7"]()};a.18.3k.c8=P(g){Q(N.3g==="")?1l.cj():1l[N.3g+"cV"]()}}})();a.3t={5o:P(d){Q N.2V.3i(d," ")},2r:P(d){if(d&&!N.5o(d)){N.2V+=(N.2V?" ":"")+d}Q N},4U:P(d){d=d||".*";N.2V=N.2V.2B(1r 53("(^|\\\\s)"+d+"(?:\\\\s|$)"),"$1").4p();Q N},g1:P(d){Q N.5o(d)?N.4U(d):N.2r(d)},1P:P(f){f=(f=="5u"&&N.7H)?"al":f.3e();T d=19,e=19;if(N.7H){d=N.7H[f]}1f{if(1l.ak&&1l.ak.cW){e=1l.ak.cW(N,19);d=e?e.g2([f.6L()]):19}}if(!d){d=N.1K[f]}if("1z"==f){Q a.2N(d)?44(d):1}if(/^(2l(8W|8X|9a|98)bN)|((2p|2a)(8W|8X|9a|98))$/.1R(f)){d=2d(d)?d:"1T"}Q("1A"==d?19:d)},1D:P(f,d){31{if("1z"==f){N.2C(d);Q N}1f{if("5u"==f){N.1K[("1F"===4f(N.1K.al))?"gu":"al"]=d;Q N}1f{if(a.18.6S&&/cX/.1R(f)){}}}N.1K[f.3e()]=d+(("68"==a.2D(d)&&!$V(["2w","1p"]).4F(f.3e()))?"1x":"")}3h(g){}Q N},1e:P(e){1I(T d in e){N.1D(d,e[d])}Q N},4H:P(){T d={};a.$A(2c).36(P(e){d[e]=N.1P(e)},N);Q d},2C:P(h,e){e=e||X;h=44(h);if(e){if(h==0){if("1O"!=N.1K.2H){N.1K.2H="1O"}}1f{if("4K"!=N.1K.2H){N.1K.2H="4K"}}}if(a.18.2A){if(!N.7H||!N.7H.f3){N.1K.1p=1}31{T g=N.ey.8M("cS.cR.cN");g.91=(1!=h);g.1z=h*1M}3h(d){N.1K.2W+=(1==h)?"":"ex:cS.cR.cN(91=1a,1z="+h*1M+")"}}N.1K.1z=h;Q N},cM:P(d){1I(T e in d){N.eu(e,""+d[e])}Q N},1S:P(){Q N.1e({2e:"2U",2H:"1O"})},29:P(){Q N.1e({2e:"2n",2H:"4K"})},1G:P(){Q{S:N.d5,U:N.aQ}},7r:P(){Q{13:N.4Y,Y:N.5K}},es:P(){T d=N,e={13:0,Y:0};do{e.Y+=d.5K||0;e.13+=d.4Y||0;d=d.1V}3P(d);Q e},3d:P(){if(a.2N(1l.9k.cZ)){T d=N.cZ(),f=$V(1l).7r(),h=a.18.4q();Q{13:d.13+f.y-h.et,Y:d.Y+f.x-h.eH}}T g=N,e=t=0;do{e+=g.eY||0;t+=g.eW||0;g=g.f0}3P(g&&!(/^(?:2i|f2)$/i).1R(g.3W));Q{13:t,Y:e}},3U:P(){T e=N.3d();T d=N.1G();Q{13:e.13,1j:e.13+d.U,Y:e.Y,1k:e.Y+d.S}},7a:P(f){31{N.8l=f}3h(d){N.eU=f}Q N},3O:P(){Q(N.1V)?N.1V.4c(N):N},5X:P(){a.$A(N.eT).36(P(d){if(3==d.5i||8==d.5i){Q}$V(d).5X()});N.3O();N.bo();if(N.$4B){a.67[N.$4B]=19;3x a.67[N.$4B]}Q 19},4L:P(g,e){e=e||"1j";T d=N.2M;("13"==e&&d)?N.9C(g,d):N.2s(g);Q N},22:P(f,e){T d=$V(f).4L(N,e);Q N},d1:P(d){N.4L(d.1V.8y(N,d));Q N},5U:P(d){if("8Y"!==a.2D("5C"==a.2D(d)?d=1l.d3(d):d)){Q X}Q(N==d)?X:(N.4F&&!(a.18.cq))?(N.4F(d)):(N.ct)?!!(N.ct(d)&16):a.$A(N.2z(d.3W)).4F(d)}};a.3t.6A=a.3t.1P;a.3t.eO=a.3t.1e;if(!1d.3t){1d.3t=a.$F;if(a.18.4J.3m){1d.1l.48("eR")}1d.3t.2S=(a.18.4J.3m)?1d["[[eZ.2S]]"]:{}}a.8Z(1d.3t,{$4b:"8Y"});a.6l={1G:P(){if(a.18.eQ||a.18.cq){Q{S:1d.9x,U:1d.9y}}Q{S:a.18.4q().f5,U:a.18.4q().ew}},7r:P(){Q{x:1d.eE||a.18.4q().5K,y:1d.em||a.18.4q().4Y}},be:P(){T d=N.1G();Q{S:1s.3N(a.18.4q().f4,d.S),U:1s.3N(a.18.4q().eK,d.U)}}};a.1U(1l,{$4b:"1l"});a.1U(1d,{$4b:"1d"});a.1U([a.3t,a.6l],{1c:P(g,e){T d=a.93(N.$4B),f=d[g];if(1F!=e&&1F==f){f=d[g]=e}Q(a.2N(f)?f:19)},1E:P(f,e){T d=a.93(N.$4B);d[f]=e;Q N},8i:P(e){T d=a.93(N.$4B);3x d[e];Q N}});if(!(1d.a1&&1d.a1.2S&&1d.a1.2S.7h)){a.1U([a.3t,a.6l],{7h:P(d){Q a.$A(N.6I("*")).2W(P(g){31{Q(1==g.5i&&g.2V.3i(d," "))}3h(f){}})}})}a.1U([a.3t,a.6l],{eP:P(){Q N.7h(2c[0])},2z:P(){Q N.6I(2c[0])}});if(a.18.3k.4k){a.3t.cy=P(){a.18.3k.9V(N)}}a.9P={$4b:"3f",1t:P(){if(N.cG){N.cG()}1f{N.cH=1a}if(N.9X){N.9X()}1f{N.eX=X}Q N},4M:P(){T e,d;e=((/5H/i).1R(N.2t))?N.4n[0]:N;Q(!a.2N(e))?{x:0,y:0}:{x:e.eC||e.6d+a.18.4q().5K,y:e.ep||e.5L+a.18.4q().4Y}},5n:P(){T d=N.er||N.eo;3P(d&&3==d.5i){d=d.1V}Q d},4D:P(){T e=19;2m(N.2t){1m"21":e=N.cA||N.ek;1n;1m"2O":e=N.cA||N.eA;1n;2j:Q e}31{3P(e&&3==e.5i){e=e.1V}}3h(d){e=19}Q e},57:P(){if(!N.cC&&N.8K!==1F){Q(N.8K&1?1:(N.8K&2?3:(N.8K&4?2:0)))}Q N.cC}};a.az="cD";a.a4="fq";a.9L="";if(!1l.cD){a.az="gB";a.a4="ib";a.9L="5g"}a.1U([a.3t,a.6l],{1w:P(g,f){T i=("5h"==g)?X:1a,e=N.1c("7E",{});e[g]=e[g]||{};if(e[g].62(f.$7k)){Q N}if(!f.$7k){f.$7k=1s.7X(1s.7M()*a.2X())}T d=N,h=P(j){Q f.1W(d)};if("5h"==g){if(a.18.1L){f.1W(N);Q N}}if(i){h=P(j){j=a.1U(j||1d.e,{$4b:"3f"});Q f.1W(d,$V(j))};N[a.az](a.9L+g,h,X)}e[g][f.$7k]=h;Q N},2o:P(g){T i=("5h"==g)?X:1a,e=N.1c("7E");if(!e||!e[g]){Q N}T h=e[g],f=2c[1]||19;if(g&&!f){1I(T d in h){if(!h.62(d)){63}N.2o(g,d)}Q N}f=("P"==a.2D(f))?f.$7k:f;if(!h.62(f)){Q N}if("5h"==g){i=X}if(i){N[a.a4](a.9L+g,h[f],X)}3x h[f];Q N},cE:P(h,f){T m=("5h"==h)?X:1a,l=N,j;if(!m){T g=N.1c("7E");if(!g||!g[h]){Q N}T i=g[h];1I(T d in i){if(!i.62(d)){63}i[d].1W(N)}Q N}if(l===1l&&1l.9M&&!l.cF){l=1l.9k}if(1l.9M){j=1l.9M(h);j.il(f,1a,1a)}1f{j=1l.im();j.i7=h}if(1l.9M){l.cF(j)}1f{l.hQ("5g"+f,j)}Q j},bo:P(){T d=N.1c("7E");if(!d){Q N}1I(T e in d){N.2o(e)}N.8i("7E");Q N}});(P(){if("6j"===1l.6r){Q a.18.3C.2v(1)}if(a.18.3m&&a.18.3A<cI){(P(){($V(["hP","6j"]).4F(1l.6r))?a.18.3C():2c.9t.2v(50)})()}1f{if(a.18.2A&&a.18.45<9&&1d==13){(P(){(a.$31(P(){a.18.4q().i0("Y");Q 1a}))?a.18.3C():2c.9t.2v(50)})()}1f{$V(1l).1w("hW",a.18.3C);$V(1d).1w("2I",a.18.3C)}}})();a.4v=P(){T h=19,e=a.$A(2c);if("7m"==a.2D(e[0])){h=e.7u()}T d=P(){1I(T l in N){N[l]=a.3M(N[l])}if(N.4I.$3z){N.$3z={};T o=N.4I.$3z;1I(T n in o){T j=o[n];2m(a.2D(j)){1m"P":N.$3z[n]=a.4v.cx(N,j);1n;1m"a2":N.$3z[n]=a.3M(j);1n;1m"5Q":N.$3z[n]=a.3M(j);1n}}}T i=(N.49)?N.49.52(N,2c):N;3x N.ae;Q i};if(!d.2S.49){d.2S.49=a.$F}if(h){T g=P(){};g.2S=h.2S;d.2S=1r g;d.$3z={};1I(T f in h.2S){d.$3z[f]=h.2S[f]}}1f{d.$3z=19}d.4I=a.4v;d.2S.4I=d;a.1U(d.2S,e[0]);a.1U(d,{$4b:"7m"});Q d};b.4v.cx=P(d,e){Q P(){T g=N.ae;T f=e.52(d,2c);Q f}};a.5j=$V(1d);a.2J=$V(1l)})();(P(b){if(!b){7b"9z 9A 9E";Q}if(b.1X){Q}T a=b.$;b.1X=1r b.4v({R:{4t:60,35:8c,4w:P(c){Q-(1s.9N(1s.9T*c)-1)/2},6W:b.$F,3Y:b.$F,7L:b.$F,b6:b.$F,7S:X,cp:1a},3X:19,49:P(d,c){N.el=a(d);N.R=b.1U(N.R,c);N.55=X},1y:P(c){N.3X=c;N.1H=0;N.i2=0;N.an=b.2X();N.cn=N.an+N.R.35;N.9Q=N.ah.1o(N);N.R.6W.1W();if(!N.R.7S&&b.18.5R){N.55=b.18.5R.1W(1d,N.9Q)}1f{N.55=N.ah.1o(N).co(1s.4Z(aZ/N.R.4t))}Q N},aa:P(){if(N.55){if(!N.R.7S&&b.18.5R&&b.18.8f){b.18.8f.1W(1d,N.55)}1f{hO(N.55)}N.55=X}},1t:P(c){c=b.2N(c)?c:X;N.aa();if(c){N.6m(1);N.R.3Y.2v(10)}Q N},81:P(e,d,c){Q(d-e)*c+e},ah:P(){T d=b.2X();if(d>=N.cn){N.aa();N.6m(1);N.R.3Y.2v(10);Q N}T c=N.R.4w((d-N.an)/N.R.35);if(!N.R.7S&&b.18.5R){N.55=b.18.5R.1W(1d,N.9Q)}N.6m(c)},6m:P(c){T d={};1I(T e in N.3X){if("1z"===e){d[e]=1s.4Z(N.81(N.3X[e][0],N.3X[e][1],c)*1M)/1M}1f{d[e]=N.81(N.3X[e][0],N.3X[e][1],c);if(N.R.cp){d[e]=1s.4Z(d[e])}}}N.R.7L(d);N.7s(d);N.R.b6(d)},7s:P(c){Q N.el.1e(c)}});b.1X.3l={4y:P(c){Q c},cw:P(c){Q-(1s.9N(1s.9T*c)-1)/2},is:P(c){Q 1-b.1X.3l.cw(1-c)},cv:P(c){Q 1s.3B(2,8*(c-1))},it:P(c){Q 1-b.1X.3l.cv(1-c)},cu:P(c){Q 1s.3B(c,2)},i8:P(c){Q 1-b.1X.3l.cu(1-c)},cs:P(c){Q 1s.3B(c,3)},ia:P(c){Q 1-b.1X.3l.cs(1-c)},cK:P(d,c){c=c||1.ii;Q 1s.3B(d,2)*((c+1)*d-c)},ic:P(d,c){Q 1-b.1X.3l.cK(1-d)},d2:P(d,c){c=c||[];Q 1s.3B(2,10*--d)*1s.9N(20*d*1s.9T*(c[0]||1)/3)},gv:P(d,c){Q 1-b.1X.3l.d2(1-d,c)},d0:P(e){1I(T d=0,c=1;1;d+=c,c/=2){if(e>=(7-4*d)/11){Q c*c-1s.3B((11-6*d-11*e)/4,2)}}},hZ:P(c){Q 1-b.1X.3l.d0(1-c)},2U:P(c){Q 0}}})(6N);(P(a){if(!a){7b"9z 9A 9E";Q}if(!a.1X){7b"9z.1X 9A 9E";Q}if(a.1X.aN){Q}T b=a.$;a.1X.aN=1r a.4v(a.1X,{R:{77:"7U"},49:P(d,c){N.el=$V(d);N.R=a.1U(N.$3z.R,N.R);N.$3z.49(d,c);N.4W=N.el.1c("5N:4W");N.4W=N.4W||a.$1r("3j").1e(a.1U(N.el.4H("2a-13","2a-Y","2a-1k","2a-1j","1u","13","5u"),{2u:"1O"})).d1(N.el);N.el.1E("5N:4W",N.4W).1e({2a:0})},7U:P(){N.2a="2a-13";N.54="U";N.6F=N.el.aQ},a0:P(c){N.2a="2a-"+(c||"Y");N.54="S";N.6F=N.el.d5},1k:P(){N.a0()},Y:P(){N.a0("1k")},1y:P(e,h){N[h||N.R.77]();T g=N.el.1P(N.2a).1N(),f=N.4W.1P(N.54).1N(),c={},i={},d;c[N.2a]=[g,0],c[N.54]=[0,N.6F],i[N.2a]=[g,-N.6F],i[N.54]=[f,0];2m(e){1m"in":d=c;1n;1m"ao":d=i;1n;1m"96":d=(0==f)?c:i;1n}N.$3z.1y(d);Q N},7s:P(c){N.el.1D(N.2a,c[N.2a]);N.4W.1D(N.54,c[N.54]);Q N},hX:P(c){Q N.1y("in",c)},hY:P(c){Q N.1y("ao",c)},1S:P(d){N[d||N.R.77]();T c={};c[N.54]=0,c[N.2a]=-N.6F;Q N.7s(c)},29:P(d){N[d||N.R.77]();T c={};c[N.54]=N.6F,c[N.2a]=0;Q N.7s(c)},96:P(c){Q N.1y("96",c)}})})(6N);(P(b){if(!b){7b"9z 9A 9E";Q}if(b.8k){Q}T a=b.$;b.8k=1r b.4v(b.1X,{49:P(c,d){N.a6=c;N.R=b.1U(N.R,d);N.55=X},1y:P(c){N.$3z.1y([]);N.cY=c;Q N},6m:P(c){1I(T d=0;d<N.a6.1B;d++){N.el=a(N.a6[d]);N.3X=N.cY[d];N.$3z.6m(c)}}})})(6N);T 5d=(P(g){T i=g.$;g.$8V=P(j){$V(j).1t();Q X};g.dA=P(j,l,q){T m,k,n,o=[],e=-1;q||(q=g.i3);m=g.$(q)||(1l.8J||1l.2i).2s(g.$1r("1K",{id:q,2t:"cT/dk"}));k=m.hV||m.hU;if("a2"==g.2D(l)){1I(n in l){o.4g(n+":"+l[n])}l=o.7B(";")}if(k.as){e=k.as(j+" {"+l+"}",k.hM.1B)}1f{e=k.hL(j,l)}Q e};T c={3A:"cz.5.14",R:{},9l:{1z:50,4X:X,ag:40,4t:25,1Y:5T,2g:5T,6k:15,2P:"1k",7P:"13",bs:"9U",5c:X,8o:1a,5A:X,6h:X,x:-1,y:-1,7c:X,dK:X,2G:"2I",9q:1a,5B:"13",95:"2x",c9:1a,ei:7Y,dU:4R,2Q:"",1v:1a,4j:"b5",5m:"ap",8r:75,82:"hT",6g:1a,7F:"9G 1p...",7d:"hS",8u:75,am:-1,at:-1,3u:"1C",9n:60,4m:"8a",8z:7Y,7K:1a,5V:X,4o:"",bM:1a,7n:X,3a:X,4i:X,3C:g.$F},eb:$V([/^(1z)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1z-aW)(\\s+)?:(\\s+)?(1a|X)$/i,/^(9q\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(4t)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1p\\-S)(\\s+)?:(\\s+)?(\\d+\\%?)(1x)?/i,/^(1p\\-U)(\\s+)?:(\\s+)?(\\d+\\%?)(1x)?/i,/^(1p\\-i4)(\\s+)?:(\\s+)?(\\d+)(1x)?/i,/^(1p\\-1u)(\\s+)?:(\\s+)?(1k|Y|13|1j|4Q|4l|#([a-99-8O\\-:\\.]+))$/i,/^(1p\\-d8)(\\s+)?:(\\s+)?(1k|Y|13|1j|5y)$/i,/^(1p\\-3L\\-3R)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1p\\-1d\\-8s)(\\s+)?:(\\s+)?(9U|bt|X)$/i,/^(c1\\-77)(\\s+)?:(\\s+)?(1a|X)$/i,/^(e4\\-5g\\-1C)(\\s+)?:(\\s+)?(1a|X)$/i,/^(ik\\-29\\-1p)(\\s+)?:(\\s+)?(1a|X)$/i,/^(iq\\-1u)(\\s+)?:(\\s+)?(1a|X)$/i,/^(x)(\\s+)?:(\\s+)?([\\d.]+)(1x)?/i,/^(y)(\\s+)?:(\\s+)?([\\d.]+)(1x)?/i,/^(1C\\-8n\\-5z)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1C\\-8n\\-io)(\\s+)?:(\\s+)?(1a|X)$/i,/^(9Z\\-5g)(\\s+)?:(\\s+)?(2I|1C|21)$/i,/^(1C\\-8n\\-9Z)(\\s+)?:(\\s+)?(1a|X)$/i,/^(9q)(\\s+)?:(\\s+)?(1a|X)$/i,/^(29\\-2x)(\\s+)?:(\\s+)?(1a|X|13|1j)$/i,/^(2x\\-ir)(\\s+)?:(\\s+)?(2x|#([a-99-8O\\-:\\.]+))$/i,/^(1p\\-5P)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1p\\-5P\\-in\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1p\\-5P\\-ao\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(2Q)(\\s+)?:(\\s+)?([a-99-8O\\-:\\.]+)$/i,/^(1v)(\\s+)?:(\\s+)?(1a|X)/i,/^(1v\\-cT)(\\s+)?:(\\s+)?([^;]*)$/i,/^(1v\\-1z)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1v\\-1u)(\\s+)?:(\\s+)?(ap|bn|bm|bl|br|bc)/i,/^(29\\-76)(\\s+)?:(\\s+)?(1a|X)$/i,/^(76\\-i9)(\\s+)?:(\\s+)?([^;]*)$/i,/^(76\\-1z)(\\s+)?:(\\s+)?(\\d+)$/i,/^(76\\-1u\\-x)(\\s+)?:(\\s+)?(\\d+)(1x)?/i,/^(76\\-1u\\-y)(\\s+)?:(\\s+)?(\\d+)(1x)?/i,/^(1Q\\-db)(\\s+)?:(\\s+)?(1C|21)$/i,/^(3E\\-db)(\\s+)?:(\\s+)?(1C|21)$/i,/^(3E\\-21\\-ih)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3E\\-8s)(\\s+)?:(\\s+)?(8a|5P|8b|X)$/i,/^(3E\\-8s\\-9d)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3E\\-7m)(\\s+)?:(\\s+)?([a-99-8O\\-:\\.]+)$/i,/^(3L\\-1p\\-1d)(\\s+)?:(\\s+)?(1a|X)$/i,/^(bI\\-3E\\-ij)(\\s+)?:(\\s+)?(1a|X)$/i,/^(bI\\-3E\\-aA)(\\s+)?:(\\s+)?(1a|X)$/i,/^(c3\\-5p)(\\s+)?:(\\s+)?(1a|X)$/i,/^(1k\\-1C)(\\s+)?:(\\s+)?(1a|X)$/i,/^(ch\\-1p)(\\s+)?:(\\s+)?(1a|X)$/i]),4h:$V([]),dm:P(l){T k=/(1C|21)/i;1I(T j=0;j<c.4h.1B;j++){if(c.4h[j].3o&&!c.4h[j].7A){c.4h[j].64()}1f{if(k.1R(c.4h[j].R.2G)&&c.4h[j].6D){c.4h[j].6D=l}}}},1t:P(j){T e=$V([]);if(j){if((j=$V(j))&&j.1p){e.4g(j)}1f{Q X}}1f{e=$V(g.$A(g.2i.2z("A")).2W(P(k){Q((" "+k.2V+" ").3s(/\\bZ\\s/)&&k.1p)}))}e.36(P(k){k.1p&&k.1p.1t()},N)},1y:P(e){if(0==2c.1B){c.78();Q 1a}e=$V(e);if(!e||!(" "+e.2V+" ").3s(/\\s(6X|5d)\\s/)){Q X}if(!e.1p){T j=19;3P(j=e.2M){if(j.3W=="8h"){1n}e.4c(j)}3P(j=e.i5){if(j.3W=="8h"){1n}e.4c(j)}if(!e.2M||e.2M.3W!="8h"){7b"gV gW b5"}c.4h.4g(1r c.1p(e,(2c.1B>1)?2c[1]:1F))}1f{e.1p.1y()}},2Z:P(l,e,k,j){if((l=$V(l))&&l.1p){(19===e||""===e)&&(e=1F);(19===k||""===k)&&(k=1F);l.1p.2Z(e,k,j);Q 1a}Q X},78:P(){g.$A(1d.1l.6I("A")).36(P(e){if(e.2V.3i("6X"," ")){if(c.1t(e)){c.1y.2v(1M,e)}1f{c.1y(e)}}},N)},29:P(e){Q c.92(e)},92:P(e){if((e=$V(e))&&e.1p){Q e.1p.5z()}Q X},b4:P(e){if((e=$V(e))&&e.1p){Q e.1p.64()}Q X},gX:P(e){if((e=$V(e))&&e.1p){Q{x:e.1p.R.x,y:e.1p.R.y}}},bB:P(k){T j,e;j="";1I(e=0;e<k.1B;e++){j+=8q.eg(14^k.dt(e))}Q j}};c.7f=P(){N.49.52(N,2c)};c.7f.2S={49:P(e){N.cb=19;N.5a=19;N.9R=N.bK.2k(N);N.9K=19;N.S=0;N.U=0;N.5E=0;N.84=0;N.2l={Y:0,1k:0,13:0,1j:0};N.2p={Y:0,1k:0,13:0,1j:0};N.1L=X;N.66=19;if("5C"==g.2D(e)){N.66=g.$1r("5w").2r("ax-dn-2T").1e({1u:"1Z",13:"-aU",S:"bF",U:"bF",2u:"1O"}).22(g.2i);N.12=g.$1r("2T").22(N.66);N.9r();N.12.28=e}1f{N.12=$V(e);N.9r();N.12.28=e.28}},4A:P(){if(N.66){if(N.12.1V==N.66){N.12.3O().1e({1u:"7J",13:"1A"})}N.66.5X();N.66=19}},bK:P(j){if(j){$V(j).1t()}if(N.cb){N.4A();N.cb.1W(N,X)}N.5Z()},9r:P(e){N.5a=19;if(e==1a||!(N.12.28&&(N.12.6j||N.12.6r=="6j"))){N.5a=P(j){if(j){$V(j).1t()}if(N.1L){Q}N.1L=1a;N.5r();if(N.cb){N.4A();N.cb.1W()}}.2k(N);N.12.1w("2I",N.5a);$V(["8w","5t"]).36(P(j){N.12.1w(j,N.9R)},N)}1f{N.1L=1a}},2Z:P(j,l){T k=N.1L;N.5Z();T e=g.$1r("a",{2b:j});if(1a!==l&&N.12.28.3i(e.2b)&&0!==N.12.S){N.1L=k}1f{N.9r(1a);N.12.28=j}e=19},5r:P(){N.5E=N.12.5E||N.12.S;N.84=N.12.84||N.12.U;N.S=N.12.S;N.U=N.12.U;if(N.S==0&&N.U==0&&g.18.3m){N.S=N.12.5E;N.U=N.12.84}$V(["9a","98","8W","8X"]).36(P(j){N.2p[j.2Y()]=N.12.6A("2p"+j).1N();N.2l[j.2Y()]=N.12.6A("2l"+j+"bN").1N()},N);if(g.18.7v||(g.18.2A&&!g.18.3I)){N.S-=N.2p.Y+N.2p.1k;N.U-=N.2p.13+N.2p.1j}},8p:P(){T e=19;e=N.12.3U();Q{13:e.13+N.2l.13,1j:e.1j-N.2l.1j,Y:e.Y+N.2l.Y,1k:e.1k-N.2l.1k}},gT:P(){if(N.9K){N.9K.28=N.12.28;N.12=19;N.12=N.9K}},2I:P(e){if(N.1L){if(!N.S){(P(){N.5r();N.4A();e.1W()}).1o(N).2v(1)}1f{N.4A();e.1W()}}1f{if(!N.5a){e.1W(N,X);Q}N.cb=e}},5Z:P(){if(N.5a){N.12.2o("2I",N.5a)}$V(["8w","5t"]).36(P(e){N.12.2o(e,N.9R)},N);N.5a=19;N.cb=19;N.S=19;N.1L=X;N.gS=X}};c.1p=P(){N.a7.52(N,2c)};c.1p.2S={a7:P(l,j,k){T e={};N.4x=-1;N.3o=X;N.80=0;N.88=0;N.9c=!(N.1g);N.8H=N.9c?{}:N.8H||{};N.7A=X;N.4d=19;N.9O=$V(1d).1c("5W:8t")||$V(1d).1c("5W:8t",g.$1r("5w").1e({1u:"1Z",13:-7R,S:10,U:10,2u:"1O"}).22(g.2i));N.R=g.3M(c.9l);if(l){N.c=$V(l)}N.4S=("5w"==N.c.3W.2Y());e=g.1U(e,N.58());e=g.1U(e,N.58(N.c.3y));e=g.1U(e,N.8H);if(j){e=g.1U(e,g.1U(1a===k?N.8H:{},N.58(j)))}if(e.5c&&!e.7c&&1F===e.5A){e.5A=1a}g.1U(N.R,e);N.R.2Q+="";if("2I"==N.R.2G&&g.2N(N.R.aq)&&"1a"==N.R.aq.5Y()){N.R.2G="1C"}if(g.2N(N.R.9W)&&N.R.9W!=N.R.3u){N.R.3u=N.R.9W}if(N.9c&&!N.4S){N.id=N.8T=N.c.id||"";if(!N.c.id){N.c.id=N.id="1p-"+1s.7X(1s.7M()*g.2X())}}if("4l"==N.R.2P&&N.R.5c){N.R.8o=1a}if(N.R.4i){N.3o=X;N.R.7c=1a;N.R.1v=X}("5C"===g.2D(N.R.3C))&&("P"===g.2D(1d[N.R.3C]))&&(N.R.3C=1d[N.R.3C]);if(l){N.6y=19;N.7j=N.8L.2k(N);N.9S=N.85.2k(N);N.ac=N.29.1o(N,1a);N.bw=N.8A.1o(N);N.4P=N.7G.2k(N);N.a8=P(o){T n=$V(N.c).1c("5W:1d:2E"),m=$V(1d).1G();if(n.S!==m.S||n.U!==m.U){3T(N.8S);N.8S=N.7O.1o(N).2v(10);$V(N.c).1E("5W:1d:2E",m)}}.2k(N);if(!N.4S){N.c.1w("1C",P(n){T m=n.57();if(3==m){Q 1a}$V(n).1t();if(!g.18.2A){N.cg()}Q X})}N.c.1w("8L",N.7j);N.c.1w("85",N.9S);if("21"==N.R.2G){N.c.1w("21",N.7j)}if(g.18.3Q){N.c.1e({"-3m-e8-e9":"2U","-3m-5H-dZ":"2U","-3m-dY-e3-59":"aT"});if(!N.R.4i){N.c.1w("6B",N.7j);N.c.1w("4r",N.9S)}1f{N.c.1w("1C",P(m){m.9X()})}}N.c.e0="5g";N.c.1K.h6="2U";N.c.1w("h4",g.$8V);if(!N.4S){N.c.1e({1u:"4V",2e:(g.18.cB)?"2n":"8D-2n",h3:"2U",9J:"0",4e:"h0",2u:"1O"});if(g.18.45){N.c.2r("ax-1I-ie"+g.18.45)}if(N.c.1P("bi")=="5y"){N.c.1e({2a:"1A 1A"})}}N.c.1p=N}1f{N.R.2G="2I"}if(!N.R.3a){N.c.1w("9D",g.$8V)}if("2I"==N.R.2G){N.7l()}1f{if(""!==N.8T){N.ay(1a)}}},7l:P(){T l,o,n,m,j;if(!N.1b){N.1b=1r c.7f(N.c.2M);N.1q=1r c.7f(N.c.2b)}1f{N.1q.2Z(N.c.2b)}if(!N.1g){N.1g={12:$V(1l.48("3j"))[(N.4S)?"4U":"2r"]("h1").1e({2u:"1O",2w:N.R.2P=="4l"?1M:h2,13:"-97",1u:"1Z",S:N.R.1Y+"1x",U:N.R.2g+"1x"}),1p:N,46:"1T",9s:"1T",7p:0,7q:0,69:{43:"Y",4N:1},65:{43:"13",4N:1},4Q:X,6s:N.R.1Y,6u:N.R.2g};if(!(g.18.gP&&g.18.45<9)){2m(N.R.bs){1m"9U":N.1g.12.2r("hK");1n;1m"bt":N.1g.12.2r("gC");1n;2j:1n}}N.1g.1S=P(){if(N.12.1K.13!="-97"&&N.1p.1i&&!N.1p.1i.4E){N.12.1K.13="-97"}if(N.12.1V===g.2i){N.12.22(N.1p.9O)}};N.1g.dV=N.1g.1S.1o(N.1g);if(g.18.3r){l=$V(1l.48("b8"));l.28="bb:\'\'";l.1e({Y:"1T",13:"1T",1u:"1Z","z-2f":-1}).gD=0;N.1g.7o=N.1g.12.2s(l)}N.1g.4s=$V(1l.48("3j")).2r("gA").1e({1u:"4V",2w:10,Y:"1T",13:"1T",2p:"gz"}).1S();o=g.$1r("3j",{},{2u:"1O"});o.2s(N.1q.12);N.1q.12.1e({2p:"1T",2a:"1T",2l:"1T",S:"1A",U:"1A"});if(N.R.5B=="1j"){N.1g.12.2s(o);N.1g.12.2s(N.1g.4s)}1f{N.1g.12.2s(N.1g.4s);N.1g.12.2s(o)}N.1g.12.22(N.9O);if("1F"!==4f(j)){N.1g.g=$V(1l.48("5w")).1e({59:j[1],dX:j[2]+"1x",df:j[3],de:"di",1u:"1Z","z-2f":10+(""+(N.1q.12.1P("z-2f")||0)).1N(),S:j[5],bi:j[4],"gx-U":"gy",Y:"1T"}).7a(c.bB(j[0])).22(N.1g.12,((1s.7X(1s.7M()*dr)+1)%2)?"13":"1j")}}N.1g.4Q=X;if(N.R.2P=="4Q"&&$V(N.c.id+"-aA")){N.1g.4Q=1a;$V(N.c.id+"-aA").2s(N.1g.12)}1f{if(N.R.2P.3i("#")){T q=N.R.2P.2B(/^#/,"");if($V(q)){N.1g.4Q=1a;$V(q).2s(N.1g.12)}}1f{if(N.R.2P=="4l"){N.c.2s(N.1g.12)}}}N.1g.6s=N.R.1Y;N.1g.6u=N.R.2g;if(N.R.5B!="X"&&N.R.5B!=X){T k=N.1g.4s;k.1S();3P(n=k.2M){k.4c(n)}if(N.R.95=="2x"&&""!=N.c.2x){k.2s(1l.5G(N.c.2x));k.29()}1f{if(N.R.95.3i("#")){T q=N.R.95.2B(/^#/,"");if($V(q)){k.7a($V(q).8l);k.29()}}}}1f{N.1g.4s.1S()}N.c.aO=N.c.2x;N.c.2x="";N.1b.2I(N.by.1o(N))},by:P(e){if(!e&&e!==1F){Q}if(!N.1b){Q}if(!N.R.4X){N.1b.12.2C(1)}if(!N.4S){N.c.1e({S:"1A",U:"1A"})}if(N.R.6g&&!N.R.4i){N.87=5I(N.bw,7Y)}if(N.R.2Q!=""&&$V(N.R.2Q)){N.dc()}if(N.c.id!=""){N.ay()}N.1q.2I(N.ar.1o(N))},ar:P(l){T k,j,e;if(!l&&l!==1F){3T(N.87);if(N.R.6g&&N.2h){N.2h.1S()}N.4x=g.2X();Q}if(!N.1b||!N.1q){Q}j=N.1b.12.3U();N.9v=j;if(j.1j==j.13){N.ar.1o(N).2v(8c);Q}if(N.1b.S==0&&g.18.2A){N.1b.5r();N.1q.5r();!N.4S&&N.c.1e({S:N.1b.S+"1x"})}k=N.1g.4s.1G();if(/%$/i.1R(N.R.1Y)){N.R.1Y=(2d(N.R.1Y)/1M)*N.1b.S}if(/%$/i.1R(N.R.2g)){N.R.2g=(2d(N.R.2g)/1M)*N.1b.U}N.1g.12.1e({S:N.R.1Y});k=N.1g.4s.1G();if(N.R.bM||N.R.7n){if((N.1q.S<N.R.1Y)||N.R.7n){N.R.1Y=N.1q.S;N.1g.12.1e({S:N.R.1Y});k=N.1g.4s.1G()}if((N.1q.U<N.R.2g)||N.R.7n){N.R.2g=N.1q.U+k.U}}2m(N.R.2P){1m"1k":N.1g.12.1K.Y=j.1k+N.R.6k+"1x";N.1g.69.43="1k";1n;1m"Y":N.1g.12.1K.Y=j.Y-N.R.6k-N.R.1Y+"1x";1n;1m"13":N.1g.46=j.13-(N.R.6k+N.R.2g)+"1x";1n;1m"1j":N.1g.46=j.1j+N.R.6k+"1x";N.1g.65.43="1j";1n;1m"4l":N.1g.12.1e({Y:"1T",U:"1M%",S:"1M%"});N.R.1Y=N.1b.S;N.R.2g=N.1b.U;N.1g.46="1T";k=N.1g.4s.1G();1n;2j:if(N.1g.4Q){e=$V(N.1g.12.1V).1G();if(/%$/i.1R(N.1g.6s)){N.R.1Y=(2d(N.1g.6s)/1M)*e.S}if(/%$/i.1R(N.1g.6u)){N.R.2g=(2d(N.1g.6u)/1M)*e.U}N.1g.12.1e({Y:"1T",S:N.R.1Y});N.1g.46="1T";k=N.1g.4s.1G()}1n}if(N.R.5B=="1j"){$V(N.1q.12.1V).1D("U",N.R.2g-k.U)}N.1g.12.1e("4l"==N.R.2P?{}:{U:N.R.2g+"1x",S:N.R.1Y+"1x"}).2C(1);if(g.18.3r&&N.1g.7o){N.1g.7o.1e({S:N.R.1Y+"1x",U:N.R.2g+"1x"})}if(N.R.2P=="1k"||N.R.2P=="Y"){if(N.R.7P=="5y"){N.1g.46=(j.1j-(j.1j-j.13)/2-N.R.2g/2)+"1x";N.1g.65={43:"1j",4N:2}}1f{if(N.R.7P=="1j"){N.1g.46=(j.1j-N.R.2g)+"1x";N.1g.65.43="1j"}1f{N.1g.46=j.13+"1x"}}}1f{if(N.R.2P=="13"||N.R.2P=="1j"){if(N.R.7P=="5y"){N.1g.12.1K.Y=(j.1k-(j.1k-j.Y)/2-N.R.1Y/2)+"1x";N.1g.69={43:"1k",4N:2}}1f{if(N.R.7P=="1k"){N.1g.12.1K.Y=(j.1k-N.R.1Y)+"1x";N.1g.69.43="1k"}1f{N.1g.12.1K.Y=j.Y+"1x"}}}}N.1g.7p=2d(N.1g.46,10);N.1g.7q=2d(N.1g.12.1K.Y,10);N.1g.9s=N.1g.7q;N.1g.46=N.1g.7p;N.6v=N.R.2g-k.U;if(N.1g.g){N.1g.g.1e({13:N.R.5B=="1j"?0:"1A",1j:N.R.5B=="1j"?"1A":0})}N.1q.12.1e({1u:"4V",4O:"1T",2p:"1T",Y:"1T",13:"1T"});N.ea();if(N.R.5A){if(N.R.x==-1){N.R.x=N.1b.S/2}if(N.R.y==-1){N.R.y=N.1b.U/2}N.29()}1f{if(N.R.c9){N.3v=1r g.1X(N.1g.12,{7S:"c7"===g.18.8v})}N.1g.12.1e({13:"-97"})}if(N.R.6g&&N.2h){N.2h.1S()}N.c.1w("au",N.4P);N.c.1w("2O",N.4P);if(g.18.3Q){N.c.1w("c4",N.4P);N.c.1w("4r",N.4P)}N.7I();$V(N.c).1c("5W:1d:2E",$V(1d).1G());$V(1d).1w("3p",N.a8);if(!N.R.4i&&(!N.R.7c||"1C"==N.R.2G)){N.3o=1a}if("1C"==N.R.2G&&N.6D){N.7G(N.6D)}if(N.7A){N.5z()}N.4x=g.2X();!N.4S&&("P"==g.2D(N.R.3C))&&N.R.3C.1W(19,N.id,!N.9c)},7I:P(){T m=/bn|br/i,e=/bl|br|bc/i,j=/bc|bm/i,l=19;N.6G=1F;if(!N.R.1v){if(N.1v){N.1v.5X();N.1v=1F}Q}if(!N.1v){N.1v=$V(1l.48("3j")).2r(N.R.82).1e({2e:"2n",2u:"1O",1u:"1Z",2H:"1O","z-2f":1});if(N.R.4j!=""){N.1v.2s(1l.5G(N.R.4j))}N.c.2s(N.1v)}1f{if(N.R.4j!=""){l=N.1v[(N.1v.2M)?"8y":"2s"](1l.5G(N.R.4j),N.1v.2M);l=19}}N.1v.1e({Y:"1A",1k:"1A",13:"1A",1j:"1A",2e:"2n",1z:(N.R.8r/1M),"3N-S":(N.1b.S-4)});T k=N.1v.1G();N.1v.1D((m.1R(N.R.5m)?"1k":"Y"),(j.1R(N.R.5m)?(N.1b.S-k.S)/2:2)).1D((e.1R(N.R.5m)?"1j":"13"),2);N.6G=1a;N.1v.29()},8A:P(){if(N.1q.1L){Q}N.2h=$V(1l.48("3j")).2r(N.R.7d).2C(N.R.8u/1M).1e({2e:"2n",2u:"1O",1u:"1Z",2H:"1O","z-2f":20,"3N-S":(N.1b.S-4)});N.2h.2s(1l.5G(N.R.7F));N.c.2s(N.2h);T e=N.2h.1G();N.2h.1e({Y:(N.R.am==-1?((N.1b.S-e.S)/2):(N.R.am))+"1x",13:(N.R.at==-1?((N.1b.U-e.U)/2):(N.R.at))+"1x"});N.2h.29()},dc:P(){$V(N.R.2Q).bU=$V(N.R.2Q).1V;$V(N.R.2Q).bR=$V(N.R.2Q).gE;N.c.2s($V(N.R.2Q));$V(N.R.2Q).1e({1u:"1Z",Y:"1T",13:"1T",S:N.1b.S+"1x",U:N.1b.U+"1x",2w:15}).29();if(g.18.2A){N.c.9f=N.c.2s($V(1l.48("3j")).1e({1u:"1Z",Y:"1T",13:"1T",S:N.1b.S+"1x",U:N.1b.U+"1x",2w:14,3K:"#gF"}).2C(0.gL))}g.$A($V(N.R.2Q).6I("A")).36(P(j){T k=j.gM.4a(","),e=19;$V(j).1e({1u:"1Z",Y:k[0]+"1x",13:k[1]+"1x",S:(k[2]-k[0])+"1x",U:(k[3]-k[1])+"1x",2w:15}).29();if(j.5o("3c")){if(e=j.1c("1Q")){e.2F=N.R.2Q}1f{j.3y+=";2F: "+N.R.2Q+";"}}},N)},ay:P(k){T e,l,j=1r 53("1p\\\\-id(\\\\s+)?:(\\\\s+)?"+N.c.id+"($|;)");N.3E=$V([]);g.$A(1l.6I("A")).36(P(n){if(j.1R(n.3y)){if(!$V(n).7T){n.7T=P(o){if(!g.18.2A){N.cg()}$V(o).1t();Q X};n.1w("1C",n.7T)}if(k){if(("21"==N.R.2G||"1C"==N.R.2G)&&!$V(n).8U){n.8U=P(p,o){o.2o("1C",o.8U);if(!!N.1b){Q}$V(p).1t();N.c.2b=o.2b;N.c.2M.28=o.6C;N.1y(o.3y);if(N.c.1c("1Q")){N.c.1c("1Q").1y()}}.2k(N,n);n.1w("1C",n.8U)}Q}T m=g.$1r("a",{2b:n.6C});(N.R.4o!="")&&$V(n)[N.1q.12.28.3i(n.2b)&&N.1b.12.28.3i(m.2b)?"2r":"4U"](N.R.4o);if(N.1q.12.28.3i(n.2b)&&N.1b.12.28.3i(m.2b)){N.6y=n}m=19;if(!n.5J){n.5J=P(q,p){p=q.gN||q.5n();31{3P("a"!=p.3W.2Y()){p=p.1V}}3h(o){Q}if(p.5U(q.4D())){Q}if(q.2t=="2O"){if(N.5F){3T(N.5F)}N.5F=X;Q}if(p.2x!=""){N.c.2x=p.2x}if(q.2t=="21"){N.5F=5I(N.2Z.1o(N,p.2b,p.6C,p.3y,p),N.R.9n)}1f{N.2Z(p.2b,p.6C,p.3y,p)}}.2k(N);n.1w(N.R.3u,n.5J);if(N.R.3u=="21"){n.1w("2O",n.5J)}}n.1e({9J:"0",2e:"8D-2n"});if(N.R.7K){l=1r cd();l.28=n.6C}if(N.R.5V){e=1r cd();e.28=n.2b}N.3E.4g(n)}},N)},1t:P(j){31{N.64();N.c.2o("au",N.4P);N.c.2o("2O",N.4P);if(g.18.3Q){N.c.2o("c4",N.4P);N.c.2o("4r",N.4P)}if(1F===j&&N.1i){N.1i.12.1S()}if(N.3v){N.3v.1t()}N.26=19;N.3o=X;if(N.3E!==1F){N.3E.36(P(e){if(N.R.4o!=""){e.4U(N.R.4o)}if(1F===j){e.2o(N.R.3u,e.5J);if(N.R.3u=="21"){e.2o("2O",e.5J)}e.5J=19;e.2o("1C",e.7T);e.7T=19}},N)}if(N.R.2Q!=""&&$V(N.R.2Q)){$V(N.R.2Q).1S();$V(N.R.2Q).bU.9C($V(N.R.2Q),$V(N.R.2Q).bR);if(N.c.9f){N.c.4c(N.c.9f)}}if(N.R.4X){N.c.4U("e5");N.1b.12.2C(1)}N.3v=19;if(N.2h){N.c.4c(N.2h)}if(N.1v){N.1v.1S()}if(1F===j){if(N.1v){N.c.4c(N.1v)}N.1v=19;N.1q.5Z();N.1b.5Z();(N.1i&&N.1i.12)&&N.c.4c(N.1i.12);(N.1g&&N.1g.12)&&N.1g.12.1V.4c(N.1g.12);N.1i=19;N.1g=19;N.1q=19;N.1b=19;if(!N.R.3a){N.c.2o("9D",g.$8V)}if(""===N.8T){N.c.gK("id")}1f{N.c.id=N.8T}$V(1d).2o("3p",N.a8)}if(N.87){3T(N.87);N.87=19}N.4d=19;N.c.9f=19;N.2h=19;if(N.c.2x==""){N.c.2x=N.c.aO}N.4x=-1}3h(k){}},1y:P(j,e){if(N.4x!=-1){Q}N.a7(X,j,(19===e||1F===e))},2Z:P(A,p,j,z){T k,D,e,m,v,l,F=19,x=19,n=N.6y,o,q,C,w,s,u,G,E,r;z=z||19;if(g.2X()-N.4x<5T||N.4x==-1||N.9p){N.5F&&3T(N.5F);k=5T-g.2X()+N.4x;if(N.4x==-1){k=5T}N.5F=5I(N.2Z.1o(N,A,p,j,z),k);Q}if(z&&N.6y==z){Q}1f{N.6y=z}D=P(H){if(1F!=A){N.c.2b=A}if(1F===j){j=""}if(N.R.6h){j="x: "+N.R.x+"; y: "+N.R.y+"; "+j}if(1F!=p){N.1b.2Z(p)}if(H!==1F){N.1b.2I(H)}};x=N.c.1c("1Q");if(x){x.1L&&x.2R(19,1a);x.1H="86";F=P(){x.1H="3G";x.2Z(N.c.2b,19,j)}.1o(N)}N.1b.5r();m=N.1b.S;v=N.1b.U;N.1t(1a);if(N.R.4m!="X"&&1F!==p){N.9p=1a;T B=$V(N.c.7D(1a)).1e({1u:"1Z",13:0,Y:0,S:""});T y=g.$1r("5w",{id:N.c.1V.id,"7m":N.c.1V.2V}).2r("av-dz-dj").1e({S:$V(N.c.1V).1P("S"),"3N-S":$V(N.c.1V).1P("3N-S")});if("gH"===N.c.1V.3W.gI()){N.c.1V.9C(y,N.c)}1f{N.c.1V.1V.9C(y,N.c.1V)}y.4L(B);g.18.a3&&y.1G();if(g.18.45&&g.18.45<8){$V(B.2M).2C(1)}l=1r c.7f(B.2M);l.2Z(p);if("8b"==N.R.4m){r=N.c.2b;o=N.3E.2W(P(H){Q H.2b.3i(r)});o=(o[0])?$V(o[0].2z("2T")[0]||o[0]):N.1b.12;q=N.3E.2W(P(H){Q H.2b.3i(A)});q=(q[0])?$V(q[0].2z("2T")[0]||q[0]):19;if(19==q){q=N.1b.12;o=N.1b.12}w=N.1b.12.3d(),s=o.3d(),u=q.3d(),E=o.1G(),G=q.1G()}e=P(J){T H={},L={},K={},M=19,I=19;if(X===J){l.5Z();$V(l.12).3O();l=19;y.3O();N.9p=X;if(x){x.1H="3G"}N.6y=n;N.1y(19,n);Q}if(g.18.45&&g.18.45<8&&(m===l.S||0===l.S)){l.12.1D("1p",1);y.1G();l.5r()}if("8b"==N.R.4m){H.S=[m,E.S];H.U=[v,E.U];H.13=[w.13,s.13];H.Y=[w.Y,s.Y];L.S=[G.S,l.S];L.U=[G.U,l.U];L.13=[u.13,w.13];y.1e({2p:""});B.2C(0).1e({U:0,S:l.S,1u:"4V"});L.Y=[u.Y,B.3d().Y];K.S=[m,l.S];l.12.22(g.2i).1e({1u:"1Z","z-2f":aB,Y:L.Y[0],13:L.13[0],S:L.S[0],U:L.U[0]});M=$V(N.c.2M.7D(X)).22(g.2i).1e({1u:"1Z","z-2f":bp,Y:H.Y[0],13:H.13[0],2H:"4K"});$V(N.c.2M).1e({2H:"1O"});y.3O();I=N.c.1P("2l-S");N.c.1D("2l-S",0)}1f{l.12.22(N.c).1e({1u:"1Z","z-2f":aB,1z:0,Y:"1T",13:"1T",U:"1A"});M=$V(N.c.2M.7D(X)).22(N.c).1e({1u:"1Z","z-2f":bp,Y:"1T",13:"1T",2H:"4K",U:"1A"});$V(N.c.2M).1e({2H:"1O"});y.3O();L={1z:[0,1]};if(m!=l.S||v!=l.U){K.S=L.S=H.S=[m,l.S];K.U=L.U=H.U=[v,l.U]}if(N.R.4m=="5P"){H.1z=[1,0]}}1r g.8k([N.c,l.12,(M||N.c.2M)],{35:N.R.8z,3Y:P(){if(M){M.3O();M=19}if(19!==I){N.c.1D("2l-S",I)}D.1W(N,P(){l.5Z();$V(N.c.2M).1e({2H:"4K"});$V(l.12).3O();l=19;if(H.1z){$V(N.c.2M).1e({1z:1})}N.9p=X;N.1y(j,z);if(F){F.2v(10)}}.1o(N))}.1o(N)}).1y([K,L,H])};l.2I(e.1o(N))}1f{D.1W(N,P(){N.c.1e({S:N.1b.S+"1x",U:N.1b.U+"1x"});N.1y(j,z);if(F){F.2v(10)}}.1o(N))}},58:P(j){T e,n,l,k;e=19;n=[];j=j||"";if(""==j){1I(k in c.R){e=c.R[k];2m(g.2D(c.9l[k.3e()])){1m"7y":e=e.5Y().6t();1n;1m"68":if(!("1Y"===k.3e()||"2g"===k.3e())||!/\\%$/i.1R(e)){e=44(e)}1n;2j:1n}n[k.3e()]=e}}1f{l=$V(j.4a(";"));l.36(P(m){c.eb.36(P(o){e=o.6x(m.4p());if(e){2m(g.2D(c.9l[e[1].3e()])){1m"7y":n[e[1].3e()]=e[4]==="1a";1n;1m"68":n[e[1].3e()]=(("1Y"===e[1].3e()||"2g"===e[1].3e())&&/\\%$/.1R(e[4]))?e[4]:44(e[4]);1n;2j:n[e[1].3e()]=e[4]}}},N)},N)}if(X===n.4m){n.4m="X"}Q n},ea:P(){T j,e;if(!N.1i){N.1i={12:$V(1l.48("3j")).2r("e5").1e({2w:10,1u:"1Z",2u:"1O"}).1S(),S:20,U:20,af:""};N.c.2s(N.1i.12);N.1i.af=N.1i.12.1P("3K-59")}if(e=N.c.1c("1Q")){N.1i.12.1e({4e:(e.W.5s)?"e4":""})}if(N.R.7n){N.1i.12.1e({"2l-S":"1T",4e:"2j"})}N.1i.4E=X;N.1i.U=N.6v/(N.1q.U/N.1b.U);N.1i.S=N.R.1Y/(N.1q.S/N.1b.S);if(N.1i.S>N.1b.S){N.1i.S=N.1b.S}if(N.1i.U>N.1b.U){N.1i.U=N.1b.U}N.1i.S=1s.4Z(N.1i.S);N.1i.U=1s.4Z(N.1i.U);N.1i.4O=N.1i.12.6A("8d").1N();N.1i.12.1e({S:(N.1i.S-2*(g.18.3I?0:N.1i.4O))+"1x",U:(N.1i.U-2*(g.18.3I?0:N.1i.4O))+"1x"});if(!N.R.4X&&!N.R.3a){N.1i.12.2C(44(N.R.1z/1M));if(N.1i.3H){N.1i.12.4c(N.1i.3H);N.1i.3H=19}}1f{if(N.1i.3H){N.1i.3H.28=N.1b.12.28}1f{j=N.1b.12.7D(X);j.e0="5g";N.1i.3H=$V(N.1i.12.2s(j)).1e({1u:"1Z",2w:5})}if(N.R.4X){N.1i.3H.1e(N.1b.12.1G());N.1i.12.2C(1);if(g.18.45&&g.18.45<9){N.1i.3H.2C(1)}}1f{if(N.R.3a){N.1i.3H.2C(0.hz)}N.1i.12.2C(44(N.R.1z/1M))}}},7G:P(l,j){if(!N.3o||l===1F||l.hw){Q X}if(!N.1i){Q X}T m=(/5H/i).1R(l.2t)&&l.aD.1B>1;T k=("4r"==l.2t&&!l.dL);if((!N.4S||l.2t!="2O")&&!m){$V(l).1t()}if(j===1F){j=$V(l).4M()}if(N.26===19||N.26===1F){N.26=N.1b.8p()}if(k||("2O"==l.2t&&!N.c.5U(l.4D()))||m||j.x>N.26.1k||j.x<N.26.Y||j.y>N.26.1j||j.y<N.26.13){N.64();Q X}N.7A=X;if(l.2t=="2O"||l.2t=="4r"){Q X}if(N.R.5c&&!N.6z){Q X}if(!N.R.8o){j.x-=N.80;j.y-=N.88}if((j.x+N.1i.S/2)>=N.26.1k){j.x=N.26.1k-N.1i.S/2}if((j.x-N.1i.S/2)<=N.26.Y){j.x=N.26.Y+N.1i.S/2}if((j.y+N.1i.U/2)>=N.26.1j){j.y=N.26.1j-N.1i.U/2}if((j.y-N.1i.U/2)<=N.26.13){j.y=N.26.13+N.1i.U/2}N.R.x=j.x-N.26.Y;N.R.y=j.y-N.26.13;if(N.4d===19){N.4d=5I(N.ac,10)}if(g.2N(N.6G)&&N.6G){N.6G=X;N.1v.1S()}Q 1a},29:P(m){if(m&&!N.4d){Q}T s,p,l,k,r,q,o,n,j,e=N.R,u=N.1i;s=u.S/2;p=u.U/2;u.12.1K.Y=e.x-s+N.1b.2l.Y+"1x";u.12.1K.13=e.y-p+N.1b.2l.13+"1x";if(N.R.4X){u.3H.1K.Y="-"+(44(u.12.1K.Y)+u.4O)+"1x";u.3H.1K.13="-"+(44(u.12.1K.13)+u.4O)+"1x"}l=(N.R.x-s)*(N.1q.S/N.1b.S);k=(N.R.y-p)*(N.1q.U/N.1b.U);if(N.1q.S-l<e.1Y){l=N.1q.S-e.1Y;if(l<0){l=0}}if(N.1q.U-k<N.6v){k=N.1q.U-N.6v;if(k<0){k=0}}if(1l.9k.hs=="ht"){l=(e.x+u.S/2-N.1b.S)*(N.1q.S/N.1b.S)}l=1s.4Z(l);k=1s.4Z(k);if(e.9q===X||(!u.4E)){N.1q.12.1K.Y=(-l)+"1x";N.1q.12.1K.13=(-k)+"1x"}1f{r=2d(N.1q.12.1K.Y);q=2d(N.1q.12.1K.13);o=(-l-r);n=(-k-q);if(!o&&!n){N.4d=19;Q}o*=e.ag/1M;if(o<1&&o>0){o=1}1f{if(o>-1&&o<0){o=-1}}r+=o;n*=e.ag/1M;if(n<1&&n>0){n=1}1f{if(n>-1&&n<0){n=-1}}q+=n;N.1q.12.1K.Y=r+"1x";N.1q.12.1K.13=q+"1x"}if(!u.4E){if(N.3v){N.3v.1t();N.3v.R.3Y=g.$F;N.3v.R.35=e.ei;N.1g.12.2C(0);N.3v.1y({1z:[0,1]})}if(/^(Y|1k|13|1j)$/i.1R(e.2P)){N.1g.12.22(g.2i)}if(e.2P!="4l"){u.12.29()}N.1g.12.1e(N.ai(/^(Y|1k|13|1j)$/i.1R(e.2P)&&!N.R.5A));if(e.4X){N.c.1D("3K-59",N.1i.af);N.1b.12.2C(44((1M-e.1z)/1M))}u.4E=1a}if(N.4d){N.4d=5I(N.ac,aZ/e.4t)}},ai:P(q){T j=N.71(5),e=N.1b.12.3U(),n=N.R.2P,m=N.1g,k=N.R.6k,u=m.12.1G(),p=m.7p,l=m.7q,o={Y:m.7q,13:m.7p};if("4l"===n||N.1g.4Q){Q o}q||(q=X);m.9s+=(e[m.69.43]-N.9v[m.69.43])/m.69.4N;m.46+=(e[m.65.43]-N.9v[m.65.43])/m.65.4N;N.9v=e;o.Y=l=m.9s;o.13=p=m.46;if(q){if("Y"==n||"1k"==n){if("Y"==n&&j.Y>l){o.Y=(e.Y-j.Y>=u.S)?(e.Y-u.S-2):(j.1k-e.1k-2>e.Y-j.Y-2)?(e.1k+2):(e.Y-u.S-2)}1f{if("1k"==n&&j.1k<l+u.S){o.Y=(j.1k-e.1k>=u.S)?(e.1k+2):(e.Y-j.Y-2>j.1k-e.1k-2)?(e.Y-u.S-2):(e.1k+2)}}}1f{if("13"==n||"1j"==n){o.Y=1s.3N(j.Y+2,1s.4G(j.1k,l+u.S)-u.S);if("13"==n&&j.13>p){o.13=(e.13-j.13>=u.U)?(e.13-u.U-2):(j.1j-e.1j-2>e.13-j.13-2)?(e.1j+2):(e.13-u.U-2)}1f{if("1j"==n&&j.1j<p+u.U){o.13=(j.1j-e.1j>=u.U)?(e.1j+2):(e.13-j.13-2>j.1j-e.1j-2)?(e.13-u.U-2):(e.1j+2)}}}}}Q o},71:P(k){k=k||0;T j=(g.18.3Q)?{S:1d.9x,U:1d.9y}:$V(1d).1G(),e=$V(1d).7r();Q{Y:e.x+k,1k:e.x+j.S-k,13:e.y+k,1j:e.y+j.U-k}},7O:P(m){if(!N.1b||!N.1b.1L){Q}T k,j,l={S:N.1b.S,U:N.1b.U};N.1b.5r();if(N.1g.4Q){j=$V(N.1g.12.1V).1G();if(/%$/i.1R(N.1g.6s)){N.R.1Y=(2d(N.1g.6s)/1M)*j.S}if(/%$/i.1R(N.1g.6u)){N.R.2g=(2d(N.1g.6u)/1M)*j.U}}1f{if("4l"===N.R.2P){N.R.1Y=N.1b.S;N.R.2g=N.1b.U}1f{N.R.1Y*=N.1b.S/l.S;N.R.2g*=N.1b.U/l.U}}k=N.1g.4s.1G();N.6v=N.R.2g-k.U;if(N.R.5B=="1j"){$V(N.1q.12.1V).1D("U",N.R.2g-k.U)}N.1g.12.1e("4l"==N.R.2P?{}:{U:N.R.2g+"1x",S:N.R.1Y+"1x"});if(g.18.3r&&N.1g.7o){N.1g.7o.1e({S:N.R.1Y,U:N.R.2g})}if(N.R.4X&&N.1i.3H){N.1i.3H.1e(N.1b.12.1G())}N.1i.U=N.6v/(N.1q.U/N.1b.U);N.1i.S=N.R.1Y/(N.1q.S/N.1b.S);if(N.1i.S>N.1b.S){N.1i.S=N.1b.S}if(N.1i.U>N.1b.U){N.1i.U=N.1b.U}N.1i.S=1s.4Z(N.1i.S);N.1i.U=1s.4Z(N.1i.U);N.1i.4O=N.1i.12.6A("8d").1N();N.1i.12.1e({S:(N.1i.S-2*(g.18.3I?0:N.1i.4O))+"1x",U:(N.1i.U-2*(g.18.3I?0:N.1i.4O))+"1x"});if(N.1i.4E){N.1g.12.1e(N.ai(/^(Y|1k|13|1j)$/i.1R(N.R.2P)&&!N.R.5A));N.R.x*=N.1b.S/l.S;N.R.y*=N.1b.U/l.U;N.29()}},5z:P(j,k){j=(g.2N(j))?j:1a;N.7A=1a;if(!N.1q){N.7l();Q}if(N.R.4i){Q}N.3o=1a;if(j){if(g.2N(k)){N.7G(k);Q}if(!N.R.6h){N.R.x=N.1b.S/2;N.R.y=N.1b.U/2}N.29()}},64:P(){T e=N.1i&&N.1i.4E;if(N.4d){3T(N.4d);N.4d=19}if(!N.R.5A&&N.1i&&N.1i.4E){N.1i.4E=X;N.1i.12.1S();if(N.3v){N.3v.1t();N.3v.R.3Y=N.1g.dV;N.3v.R.35=N.R.dU;T j=N.1g.12.6A("1z");N.3v.1y({1z:[j,0]})}1f{N.1g.1S()}if(N.R.4X){N.c.1D("3K-59","");N.1b.12.2C(1)}}N.26=19;if(N.R.7c){N.3o=X}if(N.R.5c){N.6z=X}if(N.1v){N.6G=1a;N.1v.29()}},8L:P(m){T j=m.57(),l=(/5H/i).1R(m.2t),o=g.2X();if(3==j){Q 1a}if(l){if(m.3D.1B>1){Q}N.c.1E("5W:3f:5v",{id:m.3D[0].6i,x:m.3D[0].6d,y:m.3D[0].5L,5f:o});if(N.1q&&N.1q.1L&&!N.3o){Q}}if(!(l&&m.aD.1B>1)){$V(m).1t()}if("1C"==N.R.2G&&!N.1b){N.6D=m;N.7l();Q}if("21"==N.R.2G&&!N.1b&&(m.2t=="21"||m.2t=="6B")){N.6D=m;N.7l();N.c.2o("21",N.7j);Q}if(N.R.4i){Q}if(N.1b&&!N.1q.1L){Q}if(N.1q&&N.R.dK&&N.3o&&!l){N.3o=X;N.64();Q}if(N.1q&&!N.3o){N.5z(1a,m);m.8m&&m.8m();if(N.c.1c("1Q")){N.c.1c("1Q").8e=1a}}if(N.3o&&N.R.5c){N.6z=1a;if(!N.R.8o){if(N.26===19||N.26===1F){N.26=N.1b.8p()}T k=m.4M();N.80=k.x-N.R.x-N.26.Y;N.88=k.y-N.R.y-N.26.13;if(1s.dH(N.80)>N.1i.S/2||1s.dH(N.88)>N.1i.U/2){N.6z=X;Q}}1f{N.7G(m)}}},85:P(m){T j=m.57(),l=(/5H/i).1R(m.2t),p=g.2X(),o=19,k=N.R.6h;if(3==j){Q 1a}if(l){o=N.c.1c("5W:3f:5v");if(!o||m.3D.1B>1){Q}if(o.id==m.4n[0].6i&&p-o.5f<=4R&&1s.9H(1s.3B(m.4n[0].6d-o.x,2)+1s.3B(m.4n[0].5L-o.y,2))<=15){if(N.1q&&N.1q.1L&&!N.3o){if(N.26===19||N.26===1F){N.26=N.1b.8p()}N.R.6h=1a;N.R.x=m.4M().x-N.26.Y;N.R.y=m.4M().y-N.26.13;N.5z(1a);N.R.6h=k;N.R.5c&&(N.6z=1a);N.80=0;N.88=0;m.dL=1a;m.hh=1a;m.8m&&m.8m()}$V(m).1t();Q}}$V(m).1t();if(N.R.5c){N.6z=X}}};if(g.18.2A){31{1l.ho("hp",X,1a)}3h(f){}}$V(1l).1w("5h",P(){g.dA(".av-dz-dj","2a: 0 !6J;2l: 0 !6J;2p: 0 !6J;1u: 4V  !6J;U: 0 !6J;4G-U: 0 !6J;z-2f: -1;1z: 0;","av-dk");$V(1l).1w("au",c.dm)});T d=1r g.4v({12:19,1L:X,R:{S:-1,U:-1,56:g.$F,aw:g.$F,6U:g.$F},S:0,U:0,aJ:0,e1:0,2l:{Y:0,1k:0,13:0,1j:0},2a:{Y:0,1k:0,13:0,1j:0},2p:{Y:0,1k:0,13:0,1j:0},7N:19,8x:{56:P(j){if(j){$V(j).1t()}N.7Z();if(N.1L){Q}N.1L=1a;N.81();N.4A();N.R.56.2v(1)},aw:P(j){if(j){$V(j).1t()}N.7Z();N.1L=X;N.4A();N.R.aw.2v(1)},6U:P(j){if(j){$V(j).1t()}N.7Z();N.1L=X;N.4A();N.R.6U.2v(1)}},dq:P(){$V(["2I","8w","5t"]).36(P(e){N.12.1w(e,N.8x["5g"+e].2k(N).dh(1))},N)},7Z:P(){$V(["2I","8w","5t"]).36(P(e){N.12.2o(e)},N)},4A:P(){if(N.12.1c("1r")){T e=N.12.1V;N.12.3O().8i("1r").1e({1u:"7J",13:"1A"});e.5X()}},49:P(k,j){N.R=g.1U(N.R,j);T e=N.12=$V(k)||g.$1r("2T",{},{"3N-S":"2U","3N-U":"2U"}).22(g.$1r("5w").2r("ax-dn-2T").1e({1u:"1Z",13:-7R,S:10,U:10,2u:"1O"}).22(g.2i)).1E("1r",1a),l=P(){if(N.eh()){N.8x.56.1W(N)}1f{N.8x.6U.1W(N)}l=19}.1o(N);N.dq();if(!k.28){e.28=k}1f{e.28=k.28}if(e&&e.6j){N.7N=l.2v(1M)}},bk:P(){if(N.7N){31{3T(N.7N)}3h(e){}N.7N=19}N.7Z();N.4A();N.1L=X;Q N},eh:P(){T e=N.12;Q(e.5E)?(e.5E>0):(e.6r)?("6j"==e.6r):e.S>0},81:P(){N.aJ=N.12.5E||N.12.S;N.e1=N.12.84||N.12.U;if(N.R.S>0){N.12.1D("S",N.R.S)}1f{if(N.R.U>0){N.12.1D("U",N.R.U)}}N.S=N.12.S;N.U=N.12.U;$V(["Y","1k","13","1j"]).36(P(e){N.2a[e]=N.12.1P("2a-"+e).1N();N.2p[e]=N.12.1P("2p-"+e).1N();N.2l[e]=N.12.1P("2l-"+e+"-S").1N()},N)}});T b={3A:"ed.2.2-hm",R:{},7x:{},1y:P(m){N.3n=$V(1d).1c("41:5e",$V([]));T l=19,j=19,k=$V([]),e=(2c.1B>1)?g.1U(g.3M(b.R),2c[1]):b.R;if(m){j=$V(m);if(j&&(" "+j.2V+" ").3s(/\\s(3c|5d)\\s/)){k.4g(j)}1f{Q X}}1f{k=$V(g.$A(g.2i.2z("A")).2W(P(n){Q n.2V.3i("3c"," ")}))}k.3S(P(n){if(l=$V(n).1c("1Q")){l.1y()}1f{1r a(n,e)}});Q 1a},1t:P(j){T e=19;if(j){if($V(j)&&(e=$V(j).1c("1Q"))){e=e.2L(e.24||e.id).1t();3x e;Q 1a}Q X}3P(N.3n.1B){e=N.3n[N.3n.1B-1].1t();3x e}Q 1a},78:P(j){T e=19;if(j){if($V(j)){if(e=$V(j).1c("1Q")){e=N.1t(j);3x e}N.1y.2v(9e,j);Q 1a}Q X}N.1t();N.1y.2v(9e);Q 1a},2Z:P(n,e,k,l){T m=$V(n),j=19;if(m&&(j=m.1c("1Q"))){j.2L(j.24||j.id).2Z(e,k,l)}},3b:P(j){T e=19;if($V(j)&&(e=$V(j).1c("1Q"))){e.3b();Q 1a}Q X},2R:P(j){T e=19;if($V(j)&&(e=$V(j).1c("1Q"))){e.2R();Q 1a}Q X}};T a=1r g.4v({W:{2w:hj,9b:8c,70:-1,3w:"3L-3R",9h:"3R",7w:"5y",2G:"2I",ck:1a,cm:X,6O:X,9i:10,7i:"1C",cP:4R,5x:"bL",6P:"1A",aE:"1A",bd:30,7z:"#hk",bh:4R,dD:6V,aP:"7t",6Y:"1j",dB:5T,dF:5T,7V:"29",aR:"1A",dl:"8Q, 94, 83",6g:1a,7F:"9G...",bJ:"9G...",8u:75,7d:"hl",6R:"8a",aV:8c,74:1a,3u:"1C",9n:60,4m:"8a",8z:7Y,4o:"",2F:19,5O:"",aG:"i6",e7:"",1v:1a,4j:"hn",5m:"ap",8r:75,82:"hf",3a:"X",5s:X,8F:1a,7K:1a,5V:X},9j:{aq:P(e){e=(""+e).6t();if(e&&"2I"==N.W.2G){N.W.2G="1C"}},he:P(e){if("3L-3R"==N.W.3w&&"5q"==e){N.W.3w="5q"}},hC:P(e){if("1C"==N.W.3u&&"21"==e){N.W.3u="21"}}},8B:{c6:"hG",c5:"hA",bQ:"hy"},3n:[],6o:19,r:19,id:19,24:19,2F:19,2y:{},1L:X,5t:X,8e:X,8G:"1p-1u: 4l; 1v: X; 1C-8n-5z: X; c1-77: X; 9Z-5g: 2I; 29-76: X; c3-5p: X; 1p-1d-8s: X; ch-1p: X; 1z-aW: X;",1b:19,1q:19,2K:19,1h:19,2h:19,23:19,1J:19,2q:19,1v:19,47:19,1H:"73",5k:[],6b:{8Q:{2f:0,2x:"c6"},94:{2f:1,2x:"c5"},83:{2f:2,2x:"bQ"}},1u:{13:"1A",1j:"1A",Y:"1A",1k:"1A"},2E:{S:-1,U:-1},8E:"2T",6Q:{4y:["",""],gw:["6e","6c"],h5:["6e","6c"],gZ:["6e","6c"],bL:["6e","6c"],gR:["6e","6c"],gQ:["6e","6c"],gU:["6e","6c"]},4t:50,3V:X,6H:{x:0,y:0},61:(g.18.2A&&(g.18.3r||g.18.3I))||X,72:19,49:P(e,j){N.3n=g.5j.1c("41:5e",$V([]));N.6o=(N.6o=g.5j.1c("41:8t"))?N.6o:g.5j.1c("41:8t",g.$1r("5w").1e({1u:"1Z",13:-7R,S:10,U:10,2u:"1O"}).22(g.2i));N.5k=$V(N.5k);N.r=$V(e)||g.$1r("A");N.W.aP="a:2x";N.W.6O=1a;N.58(j);N.58(N.r.3y);N.aY();N.da(b.7x);N.6H.y=N.6H.x=N.W.9i*2;N.6H.x+=N.61?g.2i.1P("2a-Y").1N()+g.2i.1P("2a-1k").1N():0;N.r.id=N.id=N.r.id||("hR-"+1s.7X(1s.7M()*g.2X()));if(2c.1B>2){N.2y=2c[2]}N.2y.4u=N.2y.4u||N.r.2z("8h")[0];N.2y.2K=N.2y.2K||N.r.2b;N.24=N.2y.24||19;N.2F=N.W.2F||19;N.3V=/(Y|1k)/i.1R(N.W.6Y);if(N.W.5s){N.W.1v=X}if(N.24){N.W.2G="2I"}N.8G+="1k-1C : "+("1a"==N.W.3a||"3q"==N.W.3a);if((" "+N.r.2V+" ").3s(/\\s(3c|5d)\\s/)){if(N.r.1p&&!N.r.1p.R.4i){N.W.6g=X}N.r.1e({1u:"4V",2e:(g.18.cB)?"2n":"8D-2n"});if(N.W.5s){N.r.1e({4e:"2j"})}if("1a"!=N.W.3a&&"5q"!=N.W.3a){N.r.1w("9D",P(k){$V(k).1t()})}N.r.1E("1o:1C",P(o){T n=N.1c("1Q"),m=g.2X(),k;$V(o).1t();if("4r"===o.2t){n.W.5x="4y";n.W.6P="4y";n.W.8F=X;n.W.6O=X;n.4t=30}if("1C"===o.2t){k=N.1c("41:3f:1C");if(!k){Q}if(1s.9H(1s.3B(o.4M().x-k.x,2)+1s.3B(o.4M().y-k.y,2))>5||m-k.5f>4R){Q X}}if((g.18.2A||(g.18.7v&&g.18.3A<6V))&&n.8e){n.8e=X;Q X}if(!n.1L){if(n.id!=N.1c("51")){N.1E("51",n.id);if("1C"==n.W.2G||("21"==n.W.2G&&"4r"===o.2t)){31{if(n.r.1p&&!n.r.1p.R.4i&&((g.18.2A||(g.18.7v&&g.18.3A<6V))||!n.r.1p.1q.1L)){N.1E("51",X)}}3h(l){}if(n.2F&&""!=n.2F){n.6a(n.2F,1a).3S(P(p){if(p!=n){p.1y()}})}n.1y()}1f{if(n.1b&&!n.1q){n.89(n.2y.2K)}}}}1f{if("1C"==n.W.7i||"4r"===o.2t){n.3b()}}Q X}.2k(N.r));N.r.1w("8L",P(k){if(3==k.57()){Q 1a}N.r.1E("41:3f:1C",{5f:g.2X(),x:k.4M().x,y:k.4M().y})}.2k(N));N.r.1w("1C",N.r.1c("1o:1C"));if(g.18.3Q){N.r.1w("6B",P(k){T l=g.2X();if(k.3D.1B>1){Q}N.r.1E("41:3f:5v",{id:k.3D[0].6i,5f:l,x:k.3D[0].6d,y:k.3D[0].5L})}.2k(N));N.r.1w("4r",P(l){T m=g.2X(),k=N.r.1c("41:3f:5v");if(!k||l.4n.1B>1){Q}if(k.id==l.4n[0].6i&&m-k.5f<=4R&&1s.9H(1s.3B(l.4n[0].6d-k.x,2)+1s.3B(l.4n[0].5L-k.y,2))<=15){l.1t();N.r.1c("1o:1C")(l);Q}}.2k(N))}N.r.1E("1o:8R",P(n){T l=N.1c("1Q"),o=l.2L(l.24||l.id),k=(l.1v),m=("21"==l.W.7i);if(!n.4D()||n.4D()===l.2K){n.1t();Q}$V(n).1t();if(!l.1L&&"21"==l.W.2G){if(l.id!=N.1c("51")&&"21"==l.W.7i){N.1E("51",l.id)}if(l.2F&&""!=l.2F){l.6a(l.2F,1a).3S(P(p){if(p!=l){p.1y()}})}l.1y()}1f{2m(n.2t){1m"2O":if(k&&"3G"==l.1H){o.1v.29()}if(m){if(l.8j){3T(l.8j)}l.8j=X;Q}1n;1m"21":if(k&&"3G"==l.1H){o.1v.1S()}if(m){l.8j=l.3b.1o(l).2v(l.W.cP)}1n}}}.2k(N.r)).1w("21",N.r.1c("1o:8R")).1w("2O",N.r.1c("1o:8R"))}N.r.1E("1Q",N);if(N.2y&&g.2N(N.2y.2f)&&"68"==4f(N.2y.2f)){N.3n.79(N.2y.2f,0,N)}1f{N.3n.4g(N)}if("2I"==N.W.2G){N.1y()}1f{N.aL(1a)}},1y:P(k,j){if(N.1L||"73"!=N.1H){Q}N.1H="ca";if(k){N.2y.4u=k}if(j){N.2y.2K=j}if($V(["3L-3R","5q"]).4F(N.W.3w)){N.2E={S:-1,U:-1}}N.W.70=(N.W.70>=0)?N.W.70:N.W.9b;T e=[N.W.5x,N.W.6P];N.W.5x=(e[0]in N.6Q)?e[0]:(e[0]="4y");N.W.6P=(e[1]in N.6Q)?e[1]:e[0];if(!N.1b&&(N.W.7K||!N.24)){N.cU()}},1t:P(e){if("73"==N.1H){Q N}e=e||X;if(N.1b){N.1b.bk()}if(N.1q){N.1q.bk()}if(N.1h){if(N.1h.1c("1o:9g-1C")){g.2J.2o("1C",N.1h.1c("1o:9g-1C"));g.18.3Q&&g.2J.2o("6B",N.1h.1c("1o:9g-1C"))}if(N.1h.1c("1o:1d:3p")){$V(1d).2o("3p",N.1h.1c("1o:1d:3p"));$V(1d).2o("bX",N.1h.1c("1o:1d:3p"))}N.1h=N.1h.5X()}N.1b=19,N.1q=19,N.1h=19,N.2h=19,N.23=19,N.1J=19,N.2q=19,N.1L=X,N.1H="73";N.r.1E("51",X);if(N.1v){N.1v.3O()}N.5k.3S(P(j){j.2o(N.W.3u,j.1c("1o:2B"));if("21"==N.W.3u){j.2o("2O",j.1c("1o:2B"))}if(!j.1c("1Q")||N==j.1c("1Q")){Q}j.1c("1Q").1t();3x j},N);N.5k=$V([]);if(!e){if((" "+N.r.2V+" ").3s(/\\s(3c|5d)\\s/)){N.r.bo();g.67[N.r.$4B]=19;3x g.67[N.r.$4B]}N.r.8i("1Q");Q N.3n.79(N.3n.4C(N),1)}Q N},6K:P(e,m,k){T y=N.2L(N.24||N.id),o=y.r.2z("2T")[0],v,l={},x={},n={},r,u,j,q,s,z,w,p=19;m=m||X;if((!m&&(!e.1L||"3G"!=e.1H))||(!!!k&&"3G"!=N.1H)){Q}if(N===e){Q}N.1H="86";if(!e.1b&&e.2y.4u){e.1b=1r d(e.2y.4u,{56:$V(P(A,B){N.6K(A,B,1a)}).1o(N,e,m)});Q}e.1H="86";v=P(A,B){A.2b=N.1q?N.1q.12.28:N.2y.2K;A.1E("1Q",N);N.1H="3G";B.1H="3G";N.7I();if(N.W.5s){A.1e({4e:"2j"})}1f{A.1e({4e:""})}if(""!=N.W.4o){(B.6f||B.r).4U(N.W.4o);(N.6f||N.r).2r(N.W.4o)}};if(!m){if(y.1v){y.1v.1S()}if("8b"==N.W.4m){r=$V((N.6f||N.r).2z("2T")[0]),r=r||(N.6f||N.r),u=$V((e.6f||e.r).2z("2T")[0]);u=u||(e.6f||e.r);j=N.1b.12.3d(),q=r.3d(),s=u.3d(),w=r.1G(),z=u.1G();l.S=[N.1b.S,w.S];l.U=[N.1b.U,w.U];l.13=[j.13,q.13];l.Y=[j.Y,q.Y];x.S=[z.S,e.1b.S];x.U=[z.U,e.1b.U];x.13=[s.13,j.13];x.Y=[s.Y,j.Y];n.S=[N.1b.S,e.1b.S];n.U=[N.1b.U,e.1b.U];p=$V(o.7D(X)).22(g.2i).1e({1u:"1Z","z-2f":bp,Y:l.Y[0],13:l.13[0],2H:"4K"});o.1e({2H:"1O"});e.1b.12.22(g.2i).1e({1u:"1Z","z-2f":aB,Y:x.Y[0],13:x.13[0],S:x.S[0],U:x.U[0]})}1f{e.1b.12.1e({1u:"1Z","z-2f":1,Y:"1T",13:"1T"}).22(y.r,"13").2C(0);x={1z:[0,1]};if(N.1b.S!=e.1b.S||N.1b.U!=e.1b.U){n.S=x.S=l.S=[N.1b.S,e.1b.S];n.U=x.U=l.U=[N.1b.U,e.1b.U]}if(N.W.4m=="5P"){l.1z=[1,0]}}1r g.8k([y.r,e.1b.12,(p||o)],{35:("X"==""+N.W.4m)?0:N.W.8z,3Y:P(A,B,C){if(p){p.3O();p=19}B.3O().1e({2H:"4K"});N.1b.12.22(A,"13").1e({1u:"7J","z-2f":0});v.1W(N,A,C)}.1o(e,y.r,o,N)}).1y([n,x,l])}1f{e.1b.12=o;v.1W(e,y.r,N)}},2Z:P(e,m,j){T n=19,l=N.2L(N.24||N.id);31{n=l.5k.2W(P(q){T p=q.1c("1Q");Q(p.1q?p.1q.12.28==e:p.2y.2K==e)})[0]}3h(k){}if(n){N.6K(n.1c("1Q"),1a);Q 1a}l.r.1E("1Q",l);l.1t(1a);if(j){l.58(j);l.aY()}if(m){l.8C=1r d(m,{56:P(o){l.r.8y(l.8C.12,l.r.2z("2T")[0]);l.8C=19;3x l.8C;l.r.2b=e;l.1y(l.r.2z("2T")[0],o)}.1o(l,e)});Q 1a}l.r.2b=e;l.1y(l.r.2z("2T")[0],e);Q 1a},78:P(){},8A:P(k){T e=N.2L(N.24||N.id),l,j,m;if((!N.W.6g&&!k)||N.2h||(N.1q&&N.1q.1L)||(N.id!=e.r.1c("51")&&!k&&"86"!=N.1H)){Q}l=k||((N.1b)?N.1b.12.3U():e.r.3U());N.2h||(N.2h=g.$1r("3j").2r(N.W.7d).1e({2e:"2n",2u:"1O",1z:N.W.8u/1M,1u:"1Z","z-2f":N.W.2w+10,"7U-d8":"hJ",2H:"1O"}).4L(g.2J.5G(k?N.W.bJ:N.W.7F)));j=N.2h.22(g.2i).1G();m=N.6T(j,l);N.2h.1e({13:m.y,Y:m.x}).29()},7I:P(){T o=/bn|br/i,e=/bl|br|bc/i,j=/bc|bm/i,n=19,k=N.2L(N.24||N.id),m=19;if(k.r.1p&&!k.r.1p.R.4i){N.W.1v=X}if(!N.W.1v){if(k.1v){k.1v.5X()}k.1v=19;Q}if(!k.1v){k.1v=$V(1l.48("3j")).2r(k.W.82).1e({2e:"2n",2u:"1O",1u:"1Z",2H:"1O","z-2f":1});if(N.W.4j!=""){k.1v.2s(1l.5G(N.W.4j))}k.r.2s(k.1v)}1f{n=k.1v[(k.1v.2M)?"8y":"2s"](1l.5G(N.W.4j),k.1v.2M);n=19}k.1v.1e({Y:"1A",1k:"1A",13:"1A",1j:"1A",2e:"2n",1z:(N.W.8r/1M),"3N-S":(N.1b.S-4)});T l=k.1v.1G();k.1v.1D((o.1R(N.W.5m)?"1k":"Y"),(j.1R(N.W.5m)?(N.1b.S-l.S)/2:2)).1D((e.1R(N.W.5m)?"1j":"13"),2);k.1v.29()},cU:P(e){if(N.2y.4u){N.1b=1r d(N.2y.4u,{56:N.W.5V||!N.24?N.89.1o(N,N.2y.2K):g.$F,6U:P(){N.5t=1a}.1o(N)})}1f{N.W.1v=X;if(N.W.5V||!N.24){N.89(N.2y.2K)}}},89:P(j,e){N.7Q=5I(N.8A.1o(N,e),7Y);2m(N.8E){1m"2T":2j:if(N.1q){Q}N.1q=1r d(j,{S:N.2E.S,U:N.2E.U,56:P(){N.7Q&&3T(N.7Q);N.2E.S=N.1q.S;N.2E.U=N.1q.U;N.2K=N.1q.12;N.dT()}.1o(N),6U:P(){N.5t=1a;N.7Q&&3T(N.7Q);if(N.2h){N.2h.1S()}}.1o(N)});1n}},dT:P(){T p=N.2K,o=N.2E;if(!p){Q X}N.1h=g.$1r("3j").2r("3c-3q").2r(N.W.e7).1e({1u:"1Z",13:-7R,Y:0,2w:N.W.2w,2e:"2n",2u:"1O",2a:0,S:o.S}).22(N.6o).1E("S",o.S).1E("U",o.U).1E("4N",o.S/o.U);if(g.18.3Q){N.1h.1e({"-3m-e8-e9":"2U","-3m-5H-dZ":"2U","-3m-dY-e3-59":"aT"})}N.23=g.$1r("3j",{},{1u:"4V",13:0,Y:0,2w:2,S:"1M%",U:"1A",2u:"1O",2e:"2n",2p:0,2a:0}).4L(p.4U().1e({1u:"7J",S:"1M%",U:("2T"==N.8E)?"1A":o.U,2e:"2n",2a:0,2p:0})).22(N.1h);N.23.3y="";N.23.2b=N.2K.28;T n=N.1h.4H("aH","8d","ec","aK"),k=N.61?n.8d.1N()+n.ec.1N():0,e=N.61?n.aH.1N()+n.aK.1N():0;N.1h.1D("S",o.S+k);N.dR(k);N.dS();if(N.1J&&N.3V){N.23.1D("5u","Y");N.1h.1D("S",o.S+N.1J.1G().S+k)}N.1h.1E("2E",N.1h.1G()).1E("2p",N.1h.4H("6p","6q","6M","6n")).1E("2l",n).1E("9m",k).1E("9o",e).1E("3Z",N.1h.1c("2E").S-o.S).1E("3J",N.1h.1c("2E").U-o.U);if("1F"!==4f(6E)){T j=(P(q){Q $V(q.4a("")).ee(P(s,r){Q 8q.eg(14^s.dt(0))}).7B("")})(6E[0]);T m;N.cr=m=g.$1r(((1s.7X(1s.7M()*dr)+1)%2)?"7t":"5w").1e({2e:"8D",2u:"1O",2H:"4K",59:6E[1],dX:6E[2],df:6E[3],de:"di",1u:"1Z",S:"90%",bi:"1k",1k:8,2w:5+(""+(p.1P("z-2f")||0)).1N()}).7a(j).22(N.23);m.1e({13:o.U-m.1G().U-5});T l=$V(m.2z("A")[0]);if(l){l.1w("1C",P(q){q.1t();1d.aC(q.5n().2b)})}3x 6E;3x j}if(g.18.3r){N.aI=g.$1r("3j",{},{2e:"2n",1u:"1Z",13:0,Y:0,1j:0,1k:0,2w:-1,2u:"1O",2l:"dd",S:"1M%",U:"1A"}).4L(g.$1r("b8",{28:\'bb: "";\'},{S:"1M%",U:"1M%",2l:"2U",2e:"2n",1u:"7J",2w:0,2W:"bP()",1p:1})).22(N.1h)}N.aL();N.bS();N.c0();if(!N.24){N.7I()}if(N.1J){if(N.3V){N.23.1D("S","1A");N.1h.1D("S",o.S+k)}N.1J.1c("5N").1S(N.3V?N.W.6Y:"7U")}N.1L=1a;N.1H="3G";if(N.2h){N.2h.1S()}if(N.hi){N.2h.1S()}if(N.id==N.2L(N.24||N.id).r.1c("51")){N.3b()}if(N.72&&"P"===g.2D(N.72)){N.72(N)}},dR:P(v){T u=19,e=N.W.aP,m=N.r.2z("2T")[0],l=N.1q,r=N.2E;P n(x){T p=/\\[a([^\\]]+)\\](.*?)\\[\\/a\\]/ig;Q x.2B(/&hb;/g,"&").2B(/&ha;/g,"<").2B(/&gt;/g,">").2B(p,"<a $1>$2</a>")}P q(){T A=N.1J.1G(),z=N.1J.4H("6p","6q","6M","6n"),y=0,x=0;A.S=1s.4G(A.S,N.W.dB),A.U=1s.4G(A.U,N.W.dF);N.1J.1E("3Z",y=(g.18.2A&&g.18.3I)?0:z.6q.1N()+z.6M.1N()).1E("3J",x=(g.18.2A&&g.18.3I)?0:z.6p.1N()+z.6n.1N()).1E("S",A.S-y).1E("U",A.U-x)}P k(z,x){T y=N.2L(N.24);N.47=19;if(z.h9(x)){N.47=z.hc(x)}1f{if(g.2N(z[x])){N.47=z[x]}1f{if(y){N.47=y.47}}}}T o={Y:P(){N.1J.1e({S:N.1J.1c("S")})},1j:P(){N.1J.1e({U:N.1J.1c("U"),S:"1A"})}};o.1k=o.Y;2m(e.2Y()){1m"2T:dI":k.1W(N,m,"dI");1n;1m"2T:2x":k.1W(N,m,"2x");1n;1m"a:2x":k.1W(N,N.r,"2x");if(!N.47){k.1W(N,N.r,"aO")}1n;1m"7t":T w=N.r.2z("7t");N.47=(w&&w.1B)?w[0].8l:(N.2L(N.24))?N.2L(N.24).47:19;1n;2j:N.47=(e.3s(/^#/))?(e=$V(e.2B(/^#/,"")))?e.8l:"":""}if(N.47){T j={Y:0,13:"1A",1j:0,1k:"1A",S:"1A",U:"1A"};T s=N.W.6Y.2Y();2m(s){1m"Y":j.13=0,j.Y=0,j["5u"]="Y";N.23.1D("S",r.S);j.U=r.U;1n;1m"1k":j.13=0,j.1k=0,j["5u"]="Y";N.23.1D("S",r.S);j.U=r.U;1n;1m"1j":2j:s="1j"}N.1J=g.$1r("3j").2r("3c-hd").1e({1u:"4V",2e:"2n",2u:"1O",13:-hg,4e:"2j"}).7a(n(N.47)).22(N.1h,("Y"==s)?"13":"1j").1e(j);q.1W(N);o[s].1W(N);N.1J.1E("5N",1r g.1X.aN(N.1J,{35:N.W.dD,6W:P(){N.1J.1D("2u-y","1O")}.1o(N),3Y:P(){N.1J.1D("2u-y","1A");if(g.18.3r){N.aI.1D("U",N.1h.aQ)}}.1o(N)}));if(N.3V){N.1J.1c("5N").R.7L=P(y,C,B,x,z){T A={};if(!B){A.S=y+z.S}if(x){A.Y=N.cf-z.S+C}N.1h.1e(A)}.1o(N,r.S+v,N.61?0:N.W.9i,("3L-3R"==N.W.3w),"Y"==s)}1f{if(N.61){N.1J.1c("5N").4W.1D("U","1M%")}}}},dS:P(){if("1S"==N.W.7V){Q}T j=N.W.aR;7C=N.1h.4H("6p","6q","6M","6n"),8g=/Y/i.1R(j)||("1A"==N.W.aR&&"dN"==g.18.8v);N.2q=g.$1r("3j").2r("3c-7V").1e({1u:"1Z",2H:"4K",2w:hq,2u:"1O",4e:"8P",13:/1j/i.1R(j)?"1A":5+7C.6p.1N(),1j:/1j/i.1R(j)?5+7C.6n.1N():"1A",1k:(/1k/i.1R(j)||!8g)?5+7C.6M.1N():"1A",Y:(/Y/i.1R(j)||8g)?5+7C.6q.1N():"1A",hr:"hE-hD",dg:"-aU -aU"}).22(N.23);T e=N.2q.1P("3K-5p").2B(/aS\\s*\\(\\s*\\"{0,1}([^\\"]*)\\"{0,1}\\s*\\)/i,"$1");$V($V(N.W.dl.2B(/\\s/ig,"").4a(",")).2W(P(k){Q N.6b.62(k)}.1o(N)).hF(P(l,k){T m=N.6b[l].2f-N.6b[k].2f;Q(8g)?("83"==l)?-1:("83"==k)?1:m:m}.1o(N))).3S(P(k){k=k.4p();T m=g.$1r("A",{2x:N.8B[N.6b[k].2x],2b:"#",3y:k},{2e:"2n","5u":"Y"}).22(N.2q),l=(l=m.1P("S"))?l.1N():0,q=(q=m.1P("U"))?q.1N():0;m.1e({"5u":"Y",1u:"4V",9J:"2U",2e:"2n",4e:"8P",2l:0,2p:0,7z:"aT",ej:(g.18.3r)?"2U":"dd",dg:""+-(N.6b[k].2f*l)+"1x 1T"});if(g.18.2A&&(g.18.3A>4)){m.1e(N.2q.4H("3K-5p"))}if(g.18.3r){N.2q.1D("3K-5p","2U");31{if(!g.2J.9u.1B||!g.2J.9u.8M("4T")){g.2J.9u.dp("4T","dw:dx-dy-dv:du")}}3h(o){31{g.2J.9u.dp("4T","dw:dx-dy-dv:du")}3h(o){}}if(!g.2J.9w.ds){T p=g.2J.hI();p.hH.id="ds";p.hB="4T\\\\:*{dW:aS(#2j#ef);} 4T\\\\:aM {dW:aS(#2j#ef); 2e: 2n; }"}m.1e({ej:"2U",2u:"1O",2e:"2n"});T n=\'<4T:aM hu="X"><4T:e2 2t="hv" 28="\'+e+\'"></4T:e2></4T:aM>\';m.hx("h8",n);$V(m.2M).1e({2e:"2n",S:(l*3)+"1x",U:q*2});m.5K=(N.6b[k].2f*l)+1;m.4Y=1;m.1E("bg-1u",{l:m.5K,t:m.4Y})}},N)},aL:P(e){T j=N.3n.4C(N);$V(g.$A(g.2J.2z("A")).2W(P(l){T k=1r 53("(^|;)\\\\s*(1p|1Q)\\\\-id\\\\s*:\\\\s*"+N.id.2B(/\\-/,"-")+"(;|$)");Q k.1R(l.3y.4p())},N)).3S(P(m,k){N.2F=N.id;m=$V(m);if(!$V(m).1c("1o:aF")){$V(m).1E("1o:aF",P(n){$V(n).1t();Q X}).1w("1C",m.1c("1o:aF"))}if(e){Q}$V(m).1E("1o:2B",P(r,n){T p=N.1c("1Q"),o=n.1c("1Q"),q=p.2L(p.24||p.id);if((" "+q.r.2V+" ").3s(/\\bZ(?:8N){0,1}\\s/)&&q.r.1p){Q 1a}$V(r).1t();if(!p.1L||"3G"!=p.1H||!o.1L||"3G"!=o.1H||p==o){Q}2m(r.2t){1m"2O":if(p.9B){3T(p.9B)}p.9B=X;Q;1n;1m"21":p.9B=p.6K.1o(p,o).2v(p.W.9n);1n;2j:p.6K(o);Q}}.2k(N.r,m)).1w(N.W.3u,m.1c("1o:2B"));if("21"==N.W.3u){m.1w("2O",m.1c("1o:2B"))}if(m.2b!=N.1q.12.28){T l=$V(N.3n.2W(P(n){Q(m.2b==n.2y.2K&&N.2F==n.2F)},N))[0];if(l){m.1E("1Q",l)}1f{1r a(m,g.1U(g.3M(N.W),{2G:"2I",2F:N.2F}),{4u:m.6C,24:N.id,2f:j+k})}}1f{N.6f=m;m.1E("1Q",N);if(""!=N.W.4o){m.2r(N.W.4o)}}m.1e({9J:"2U"}).2r("3c-6K");N.5k.4g(m)},N)},c0:P(){T e;if("1a"!=N.W.3a&&"3q"!=N.W.3a){N.2K.1w("9D",P(m){$V(m).1t()})}if(("1A"==N.W.aE&&"21"==N.W.7i&&"5p"==N.W.9h)||"2O"==N.W.aE){N.1h.1w("2O",P(n){T m=$V(n).1t().5n();if("3q"!=N.1H){Q}if(N.1h==n.4D()||N.1h.5U(n.4D())){Q}N.2R(19)}.2k(N))}N.23.1w("85",P(n){T m=n.57();if(3==m){Q}if(N.W.5O){$V(n).1t();g.5j.aC(N.W.5O,(2==m)?"h7":N.W.aG)}1f{if(1==m&&"2T"==N.8E){$V(n).1t();N.2R(19)}}}.2k(N));if(g.18.3Q){N.23.1w("6B",P(m){T o=g.2X();if(m.3D.1B>1){Q}N.23.1E("41:3f:5v",{id:m.3D[0].6i,5f:o,x:m.3D[0].6d,y:m.3D[0].5L})}.2k(N));N.23.1w("4r",P(o){T p=g.2X(),m=N.23.1c("41:3f:5v");if(!m||o.aD.1B>1){Q}if(m.id==o.4n[0].6i&&p-m.5f<=4R&&1s.9H(1s.3B(o.4n[0].6d-m.x,2)+1s.3B(o.4n[0].5L-m.y,2))<=15){if(N.W.5O){$V(o).1t();g.5j.aC(N.W.5O,N.W.aG);Q}o.1t();N.2R(19);Q}}.2k(N))}if(N.2q){T k,l,j;N.2q.1E("1o:8R",k=N.bx.2k(N)).1E("1o:1C",l=N.bz.2k(N));N.2q.1w("21",k).1w("2O",k).1w("85",l).1w("1C",P(m){$V(m).1t()});g.18.3Q&&N.2q.1w("4r",l);if("gG"==N.W.7V){N.1h.1E("1o:gJ",j=P(n){T m=$V(n).1t().5n();if("3q"!=N.1H){Q}if(N.1h==n.4D()||N.1h.5U(n.4D())){Q}N.7W(("2O"==n.2t))}.2k(N)).1w("21",j).1w("2O",j)}}N.1h.1E("1o:9g-1C",e=P(m){if(N.1h.5U(m.5n())){Q}if((/5H/i).1R(m.2t)||((1==m.57()||0==m.57())&&"3q"==N.1H)){N.2R(19,1a)}}.2k(N));g.2J.1w("1C",e);g.18.3Q&&g.2J.1w("6B",e);N.1h.1E("1o:1d:3p",P(m){3T(N.8S);N.8S=N.7O.1o(N).2v(1M)}.2k(N));$V(1d).1w("3p",N.1h.1c("1o:1d:3p"));if("5q"!==N.W.3w){$V(1d).1w("bX",N.1h.1c("1o:1d:3p"))}},bS:P(){N.3F=1r g.1X(N.1h,{4w:g.1X.3l[N.W.5x+N.6Q[N.W.5x][0]],35:N.W.9b,4t:N.4t,6W:P(){T l=N.2L(N.24||N.id);N.1h.1D("S",N.3F.3X.S[0]);N.1h.22(g.2i);if(!l.r.1c("41:3f:5v")){N.bf(X)}N.7W(1a,1a);if(N.2q&&g.18.2A&&g.18.3A<6){N.2q.1S()}if(!N.W.6O&&!(N.5S&&"3b"!=N.W.6R)){T j={};1I(T e in N.3F.3X){j[e]=N.3F.3X[e][0]}N.1h.1e(j);if((" "+l.r.2V+" ").3s(/\\s(3c|5d)\\s/)){l.r.2C(0,1a)}}if(N.1J){if(g.18.2A&&g.18.3I&&N.3V){N.1J.1D("2e","2U")}N.1J.1V.1D("U",0)}N.1h.1e({2w:N.W.2w+1,1z:1})}.1o(N),3Y:P(){T j=N.2L(N.24||N.id);if(N.W.5O){N.1h.1e({4e:"8P"})}if(!(N.5S&&"3b"!=N.W.6R)){j.r.2r("3c-3q-4u")}if("1S"!=N.W.7V){if(N.2q&&g.18.2A&&g.18.3A<6){N.2q.29();if(g.18.3r){g.$A(N.2q.2z("A")).36(P(l){T m=l.1c("bg-1u");l.5K=m.l;l.4Y=m.t})}}N.7W()}if(N.1J){if(N.3V){T e=N.1h.1c("2l"),k=N.cO(N.1h,N.1h.1G().U,e.aH.1N()+e.aK.1N());N.23.1e(N.1h.4H("S"));N.1J.1D("U",k-N.1J.1c("3J")).1V.1D("U",k);N.1h.1D("S","1A");N.cf=N.1h.3d().Y}N.1J.1D("2e","2n");N.ba()}N.1H="3q";g.2J.1w("aX",N.cl.2k(N));if(N.W.8F&&N.23.1G().S<N.1q.aJ){if(!N.23.1p){N.b0=1r c.1p(N.23,N.8G)}1f{N.23.1p.1y(N.8G)}}}.1o(N)});N.5b=1r g.1X(N.1h,{4w:g.1X.3l.4y,35:N.W.70,4t:N.4t,6W:P(){if(N.W.8F){c.1t(N.23)}N.7W(1a,1a);if(N.2q&&g.18.3r){N.2q.1S()}N.1h.1e({2w:N.W.2w});if(N.1J&&N.3V){N.1h.1e(N.23.4H("S"));N.23.1D("S","1A")}}.1o(N),3Y:P(){if(!N.5S||(N.5S&&!N.24&&!N.5k.1B)){T e=N.2L(N.24||N.id);if(!e.r.1c("41:3f:5v")){e.bf(1a)}e.r.4U("3c-3q-4u").2C(1,1a);if(e.1v){e.1v.29()}}N.1h.1e({13:-7R}).22(N.6o);N.1H="3G"}.1o(N)});if(g.18.3r){N.3F.R.7L=N.5b.R.7L=P(l,e,m,k){T j=k.S+e;N.aI.1e({S:j,U:1s.b7(j/l)+m});if(k.1z){N.23.2C(k.1z)}}.1o(N,N.1h.1c("4N"),N.1h.1c("3Z"),N.1h.1c("3J"))}},3b:P(w,q){if(N.W.5s){Q}if("3G"!=N.1H){if("73"==N.1H){N.r.1E("51",N.id);N.1y()}Q}N.1H="5D-3b";N.5S=w=w||X;N.cL().3S(P(p){if(p==N||N.5S){Q}2m(p.1H){1m"5D-2R":p.5b.1t(1a);1n;1m"5D-3b":p.3F.1t();p.1H="3q";2j:p.2R(19,1a)}},N);T z=N.2L(N.24||N.id).r.1c("1Q"),e=(z.1b)?z.1b.12.3U():z.r.3U(),v=(z.1b)?z.1b.12.3d():z.r.3d(),x=("3L-3R"==N.W.3w)?N.3p():{S:N.1h.1c("2E").S-N.1h.1c("3Z")+N.1h.1c("9m"),U:N.1h.1c("2E").U-N.1h.1c("3J")+N.1h.1c("9o")},r={S:x.S+N.1h.1c("3Z"),U:x.U+N.1h.1c("3J")},s={},l=[N.1h.4H("6p","6q","6M","6n"),N.1h.1c("2p")],k={S:[e.1k-e.Y,x.S]};$V(["8W","8X","9a","98"]).3S(P(p){k["2p"+p]=[l[0]["2p"+p].1N(),l[1]["2p"+p].1N()]});T j=N.1u;T y=("5p"==N.W.9h)?e:N.71();2m(N.W.7w){1m"5y":s=N.6T(r,y);1n;2j:if("3L-3R"==N.W.3w){x=N.3p({x:(2d(j.Y))?0+j.Y:(2d(j.1k))?0+j.1k:0,y:(2d(j.13))?0+j.13:(2d(j.1j))?0+j.1j:0});r={S:x.S+N.1h.1c("3Z"),U:x.U+N.1h.1c("3J")};k.S[1]=x.S}y.13=(y.13+=2d(j.13))?y.13:(y.1j-=2d(j.1j))?y.1j-r.U:y.13;y.1j=y.13+r.U;y.Y=(y.Y+=2d(j.Y))?y.Y:(y.1k-=2d(j.1k))?y.1k-r.S:y.Y;y.1k=y.Y+r.S;s=N.6T(r,y);1n}k.13=[v.13,s.y];k.Y=[v.Y,s.x+((N.1J&&"Y"==N.W.6Y)?N.1J.1c("S"):0)];if(w&&"3b"!=N.W.6R){k.S=[x.S,x.S];k.13[0]=k.13[1];k.Y[0]=k.Y[1];k.1z=[0,1];N.3F.R.35=N.W.aV;N.3F.R.4w=g.1X.3l.4y}1f{N.3F.R.4w=g.1X.3l[N.W.5x+N.6Q[N.W.5x][0]];N.3F.R.35=N.W.9b;if(g.18.3r){N.23.2C(1)}if(N.W.6O){k.1z=[0,1]}}if(N.2q){g.$A(N.2q.2z("A")).3S(P(A){T p=A.1P("3K-1u").4a(" ");if(g.18.3r){A.4Y=1}1f{p[1]="1T";A.1e({"3K-1u":p.7B(" ")})}});T m=g.$A(N.2q.2z("A")).2W(P(p){Q"8Q"==p.3y})[0],o=g.$A(N.2q.2z("A")).2W(P(p){Q"94"==p.3y})[0],u=N.d6(N.2F),n=N.d4(N.2F);if(m){(N==u&&(u==n||!N.W.74))?m.1S():m.29()}if(o){(N==n&&(u==n||!N.W.74))?o.1S():o.29()}}N.3F.1y(k);N.b9()},2R:P(e,n){if(!e&&"5D-3b"==N.1H){N.3F.1t();N.1H="3q"}if("3q"!=N.1H){Q}if(e&&!e.1L&&"ca"==e.1H){e.72=N.2R.1o(N,e);if(!e.W.5V){e.89(e.2y.2K,N.23.3U())}N.6Z=e;Q}if(N.6Z){N.6Z.72=19;N.6Z.2h&&N.6Z.2h.1S()}N.6Z=19;T m={},p=N.1h.3U();N.1H="5D-2R";N.5S=e=e||19;n=n||X;g.2J.2o("aX");if(N.1J){N.ba("1S");N.1J.1V.1D("U",0);if(g.18.2A&&g.18.3I&&N.3V){N.1J.1D("2e","2U")}}m=g.3M(N.3F.3X);m.S[1]=N.23.1G().S;m.13[1]=N.1h.3d().13;m.Y[1]=N.1h.3d().Y;if(e&&"3b"!=N.W.6R){if("5P"==N.W.6R){m.1z=[1,0]}m.S[0]=m.S[1];m.13=m.13[1];m.Y=m.Y[1];N.5b.R.35=N.W.aV;N.5b.R.4w=g.1X.3l.4y}1f{N.5b.R.35=(n)?0:N.W.70;N.5b.R.4w=g.1X.3l[N.W.6P+N.6Q[N.W.6P][1]];1I(T j in m){if("5Q"!=g.2D(m[j])){63}m[j].aW()}if(!N.W.6O){3x m.1z}T l=N.2L(N.24||N.id).r.1c("1Q"),q=(l.1b)?l.1b.12:l.r;m.S[1]=q.1G().S;m.13[1]=q.3d().13;m.Y[1]=q.3d().Y}N.5b.1y(m);if(e){e.3b(N,p)}T o=g.2J.1c("bg:7e");if(!e&&o){if("1O"!=o.el.1P("2H")){N.b9(1a)}}},ba:P(j){if(!N.1J){Q}T e=N.1J.1c("5N");N.1J.1D("2u-y","1O");e.1t();e[j||"96"](N.3V?N.W.6Y:"7U")},7W:P(j,l){T n=N.2q;if(!n){Q}j=j||X;l=l||X;T k=n.1c("cb:7e"),e={};if(!k){n.1E("cb:7e",k=1r g.1X(n,{4w:g.1X.3l.4y,35:6V}))}1f{k.1t()}if(l){n.1D("1z",(j)?0:1);Q}T m=n.1P("1z");e=(j)?{1z:[m,0]}:{1z:[m,1]};k.1y(e)},bx:P(m){T k=$V(m).1t().5n();if("3q"!=N.1H){Q}31{3P("a"!=k.3W.2Y()&&k!=N.2q){k=k.1V}if("a"!=k.3W.2Y()||k.5U(m.4D())){Q}}3h(l){Q}T j=k.1P("3K-1u").4a(" ");2m(m.2t){1m"21":j[1]=k.1P("U");1n;1m"2O":j[1]="1T";1n}if(g.18.3r){k.4Y=j[1].1N()+1}1f{k.1e({"3K-1u":j.7B(" ")})}},bz:P(k){T j=$V(k).1t().5n();3P("a"!=j.3W.2Y()&&j!=N.2q){j=j.1V}if("a"!=j.3W.2Y()){Q}2m(j.3y){1m"8Q":N.2R(N.b2(N,N.W.74));1n;1m"94":N.2R(N.b1(N,N.W.74));1n;1m"83":N.2R(19);1n}},b9:P(j){j=j||X;T k=g.2J.1c("bg:7e"),e={},m=0;if(!k){T l=g.$1r("3j").2r("3c-3K").1e({1u:"gO",2e:"2n",13:0,1j:0,Y:0,1k:0,2w:(N.W.2w-1),2u:"1O",7z:N.W.7z,1z:0,2l:0,2a:0,2p:0}).22(g.2i).1S();if(g.18.3r){l.4L(g.$1r("b8",{28:\'bb:"";\'},{S:"1M%",U:"1M%",2e:"2n",2W:"bP()",13:0,gY:0,1u:"1Z",2w:-1,2l:"2U"}))}g.2J.1E("bg:7e",k=1r g.1X(l,{4w:g.1X.3l.4y,35:N.W.bh,6W:P(n){if(n){N.1e(g.1U(g.2J.be(),{1u:"1Z"}))}}.1o(l,N.61),3Y:P(){N.2C(N.1P("1z"),1a)}.1o(l)}));e={1z:[0,N.W.bd/1M]}}1f{k.1t();m=k.el.1P("1z");k.el.1D("3K-59",N.W.7z);e=(j)?{1z:[m,0]}:{1z:[m,N.W.bd/1M]};k.R.35=N.W.bh}k.el.29();k.1y(e)},bf:P(j){j=j||X;T e=N.2L(N.24||N.id);if(e.r.1p&&-1!=e.r.1p.4x){if(!j){e.r.1p.64();e.r.1p.3o=X;e.r.1p.1i.4E=X;e.r.1p.1i.12.1S();e.r.1p.1g.1S()}1f{e.r.1p.5z(e.r.1p.R.5A)}}},71:P(k){k=k||0;T j=(g.18.3Q)?{S:1d.9x,U:1d.9y}:$V(1d).1G(),e=$V(1d).7r();Q{Y:e.x+k,1k:e.x+j.S-k,13:e.y+k,1j:e.y+j.U-k}},6T:P(k,l){T j=N.71(N.W.9i),e=$V(1d).be();l=l||j;Q{y:1s.3N(j.13,1s.4G(("3L-3R"==N.W.3w)?j.1j:e.U+k.U,l.1j-(l.1j-l.13-k.U)/2)-k.U),x:1s.3N(j.Y,1s.4G(j.1k,l.1k-(l.1k-l.Y-k.S)/2)-k.S)}},3p:P(m,j){T n=(g.18.3Q)?{S:1d.9x,U:1d.9y}:$V(1d).1G(),s=N.1h.1c("2E"),o=N.1h.1c("4N"),l=N.1h.1c("3Z"),k=N.1h.1c("3J"),r=N.1h.1c("9m"),e=N.1h.1c("9o"),q=0,p=0;if(m){n.S-=m.x;n.U-=m.y}q=1s.4G(N.2E.S+r,1s.4G(s.S,n.S-l-N.6H.x)),p=1s.4G(N.2E.U+e,1s.4G(s.U,n.U-k-N.6H.y));if(q/p>o){q=p*o}1f{if(q/p<o){p=q/o}}if(!j){N.1h.1D("S",q);if(N.cr){N.cr.1e({13:(N.1q.12.1G().U-N.cr.1G().U)})}}Q{S:1s.b7(q),U:1s.b7(p)}},7O:P(){if("3q"!==N.1H){Q}T n=N.1h.1G();T r=N.2L(N.24||N.id).r.1c("1Q"),e=(r.1b)?r.1b.12.3U():r.r.3U(),s=("5p"==N.W.9h)?e:N.71(),j=N.1u,o=("3L-3R"==N.W.3w)?N.3p(19,1a):{S:N.1h.1c("2E").S-N.1h.1c("3Z")+N.1h.1c("9m"),U:N.1h.1c("2E").U-N.1h.1c("3J")+N.1h.1c("9o")},l={S:o.S+N.1h.1c("3Z"),U:o.U+N.1h.1c("3J")},q=N.1h.3d(),k=(N.1J&&N.3V)?N.1J.1c("S")+N.1J.1c("3Z"):0,m;n.S-=N.1h.1c("3Z");n.U-=N.1h.1c("3J");2m(N.W.7w){1m"5y":m=N.6T(l,s);1n;2j:if("3L-3R"==N.W.3w){o=N.3p({x:(2d(j.Y))?0+j.Y:(2d(j.1k))?0+j.1k:0,y:(2d(j.13))?0+j.13:(2d(j.1j))?0+j.1j:0},1a);l={S:o.S+N.1h.1c("3Z"),U:o.U+N.1h.1c("3J")}}s.13=(s.13+=2d(j.13))?s.13:(s.1j-=2d(j.1j))?s.1j-l.U:s.13;s.1j=s.13+l.U;s.Y=(s.Y+=2d(j.Y))?s.Y:(s.1k-=2d(j.1k))?s.1k-l.S:s.Y;s.1k=s.Y+l.S;m=N.6T(l,s);1n}1r g.1X(N.1h,{35:6V,b6:P(p,u){T v;if(p>0){N.23.1D("S",u.S-p);v=N.23.1G().U;N.1J.1D("U",v-N.1J.1c("3J")).1V.1D("U",v)}if(N.cr){N.cr.1e({13:(N.1q.12.1G().U-N.cr.1G().U)})}}.1o(N,k),3Y:P(){if(N.b0){N.b0.7O()}}.1o(N)}).1y({S:[n.S+k,o.S+k],13:[q.13,m.y],Y:[q.Y,m.x]})},cO:P(l,j,e){T k=X;2m(g.18.4J){1m"bj":k="2K-42"!=(l.1P("42-5M")||l.1P("-cQ-42-5M"));1n;1m"3m":k="2K-42"!=(l.1P("42-5M")||l.1P("-3m-42-5M"));1n;1m"2A":k=g.18.3I||"2K-42"!=(l.1P("42-5M")||l.1P("-8I-42-5M")||"2K-42");1n;2j:k="2K-42"!=l.1P("42-5M");1n}Q(k)?j:j-e},58:P(o){P l(r){T q=[];if("5C"==g.2D(r)){Q r}1I(T m in r){q.4g(m.6L()+":"+r[m])}Q q.7B(";")}T k=l(o).4p(),p=$V(k.4a(";")),n=19,j=19;p.3S(P(q){1I(T m in N.W){j=1r 53("^"+m.6L().2B(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]"+(("4j"==m)?"*":"+")+")$","i").6x(q.4p());if(j){2m(g.2D(N.W[m])){1m"7y":N.W[m]=j[1].6t();1n;1m"68":N.W[m]=(j[1].3i("."))?(j[1].d7()*((m.2Y().3i("1z"))?1M:aZ)):j[1].1N();1n;2j:N.W[m]=j[1].4p()}}}},N);1I(T e in N.9j){if(!N.9j.62(e)){63}j=1r 53("(^|;)\\\\s*"+e.6L().2B(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)\\\\s*(;|$)","i").6x(k);if(j){N.9j[e].1W(N,j[2])}}},aY:P(){T e=19,l=N.1u,k=N.2E;1I(T j in l){e=1r 53(""+j+"\\\\s*=\\\\s*([^,]+)","i").6x(N.W.7w);if(e){l[j]=(d9(l[j]=e[1].1N()))?l[j]:"1A"}}if((6w(l.13)&&6w(l.1j))||(6w(l.Y)&&6w(l.1k))){N.W.7w="5y"}if(!$V(["3L-3R","5q"]).4F(N.W.3w)){1I(T j in k){e=1r 53(""+j+"\\\\s*=\\\\s*([^,]+)","i").6x(N.W.3w);if(e){k[j]=(d9(k[j]=e[1].1N()))?k[j]:-1}}if(6w(k.S)&&6w(k.U)){N.W.3w="3L-3R"}}},da:P(e){T j,l;1I(T j in e){if(N.8B.62(l=j.3e())){N.8B[l]=e[j]}}},2L:P(e){Q $V(N.3n.2W(P(j){Q(e==j.id)}))[0]},6a:P(e,j){e=e||19;j=j||X;Q $V(N.3n.2W(P(k){Q(e==k.2F&&!k.5t&&(j||k.1L)&&(j||"73"!=k.1H)&&(j||!k.W.5s))}))},b1:P(m,e){e=e||X;T j=N.6a(m.2F,1a),k=j.4C(m)+1;Q(k>=j.1B)?(!e||1>=j.1B)?1F:j[0]:j[k]},b2:P(m,e){e=e||X;T j=N.6a(m.2F,1a),k=j.4C(m)-1;Q(k<0)?(!e||1>=j.1B)?1F:j[j.1B-1]:j[k]},d6:P(j){j=j||19;T e=N.6a(j,1a);Q(e.1B)?e[0]:1F},d4:P(j){j=j||19;T e=N.6a(j,1a);Q(e.1B)?e[e.1B-1]:1F},cL:P(){Q $V(N.3n.2W(P(e){Q("3q"==e.1H||"5D-3b"==e.1H||"5D-2R"==e.1H)}))},cl:P(k){T j=N.W.74,m=19;if(!N.W.ck){g.2J.2o("aX");Q 1a}k=$V(k);if(N.W.cm&&!(k.hN||k.i1)){Q X}2m(k.cJ){1m 27:k.1t();N.2R(19);1n;1m 32:1m 34:1m 39:1m 40:m=N.b1(N,j||32==k.cJ);1n;1m 33:1m 37:1m 38:m=N.b2(N,j);1n;2j:}if(m){k.1t();N.2R(m)}}});T h={3A:"cz.5.17",R:{},7x:{},W:{4i:X,5s:X,7K:1a,5V:1a,82:"ev",4j:"b5",7d:"eJ",7F:"9G 1p...",3a:"X"},1y:P(l){N.5e=$V(1d).1c("eN:5e",$V([]));T e=19,j=$V([]),k={};N.R=g.1U(1d.eS||{},N.R);N.W=g.1U(N.W,N.b3());c.R=g.3M(N.W);b.R=g.3M(N.W);c.R.3a=("5q"==N.W.3a||"1a"==N.W.3a);b.7x=N.7x;if(l){e=$V(l);if(e&&(" "+e.2V+" ").3s(/\\s(6X(?:8N){0,1}|3c)\\s/)){j.4g(e)}1f{Q X}}1f{j=$V(g.$A(g.2i.2z("A")).2W(P(m){Q(" "+m.2V+" ").3s(/\\s(6X(?:8N){0,1}|3c)\\s/)}))}j.3S(P(p){p=$V(p);T m=p.2z("7t"),n=19;k=g.1U(g.3M(N.W),N.b3(p.3y||" "));if(p.5o("6X")||(p.5o("5d"))){if(m&&m.1B){n=p.4c(m[0])}c.1y(p,"1k-1C: "+("5q"==k.3a||"1a"==k.3a));if(n){p.4L(n)}}if(p.5o("3c")||(p.5o("5d"))){b.1y(p)}1f{p.1K.4e="8P"}N.5e.4g(p)},N);Q 1a},1t:P(m){T e=19,l=19,j=$V([]);if(m){e=$V(m);if(e&&(" "+e.2V+" ").3s(/\\s(6X(?:8N){0,1}|3c)\\s/)){j=$V(N.5e.79(N.5e.4C(e),1))}1f{Q X}}1f{j=$V(N.5e)}3P(j&&j.1B){l=$V(j[j.1B-1]);if(l.1p){l.1p.1t();c.4h.79(c.4h.4C(l.1p),1);l.1p=1F}b.1t(l);T k=j.79(j.4C(l),1);3x k}Q 1a},78:P(j){T e=19;if(j){N.1t(j);N.1y.1o(N).2v(9e,j)}1f{N.1t();N.1y.1o(N).2v(9e)}Q 1a},2Z:P(n,e,k,l){T m=$V(n),j=19;if(m){if((j=m.1c("1Q"))){j.2L(j.24||j.id).1H="86"}if(!c.2Z(m,e,k,l)){b.2Z(m,e,k,l)}}},3b:P(e){Q b.3b(e)},2R:P(e){Q b.2R(e)},92:P(e){Q c.92(e)},b4:P(e){Q c.b4(e)},b3:P(j){T e,p,l,k,n;e=19;p={};n=[];if(j){l=$V(j.4a(";"));l.36(P(o){1I(T m in N.W){e=1r 53("^"+m.6L().2B(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)$","i").6x(o.4p());if(e){2m(g.2D(N.W[m])){1m"7y":p[m]=e[1].6t();1n;1m"68":p[m]=44(e[1]);1n;2j:p[m]=e[1].4p()}}}},N)}1f{1I(k in N.R){e=N.R[k];2m(g.2D(N.W[k.3e()])){1m"7y":e=e.5Y().6t();1n;1m"68":e=44(e);1n;2j:1n}p[k.3e()]=e}}Q p}};$V(1l).1w("5h",P(){h.1y()});Q h})(6N);', 62, 1146, "|||||||||||||||||||||||||||||||||||||||||||||||||this||function|return|options|width|var|height|mjs|_o|false|left||||self|top|||||j21|null|true|z7|j29|window|j6|else|z47|t22|z4|bottom|right|document|case|break|j24|zoom|z1|new|Math|stop|position|hint|je1|px|start|opacity|auto|length|click|j6Prop|j30|undefined|j7|state|for|t25|style|ready|100|j17|hidden|j5|thumb|test|hide|0px|extend|parentNode|call|FX|zoomWidth|absolute||mouseover|j32|t23|t27||z6||src|show|margin|href|arguments|parseInt|display|index|zoomHeight|z3|body|default|j16|border|switch|block|je2|padding|t26|j2|appendChild|type|overflow|j27|zIndex|title|params|byTag|trident|replace|j23|j1|size|group|initializeOn|visibility|load|doc|content|t16|firstChild|defined|mouseout|zoomPosition|hotspots|restore|prototype|img|none|className|filter|now|toLowerCase|update||try||||duration|j14||||rightClick|expand|MagicThumb|j8|j22|event|prefix|catch|has|DIV|fullScreen|Transition|webkit|thumbs|z30|resize|expanded|trident4|match|Element|selectorsChange|z2|expandSize|delete|rel|parent|version|pow|onready|targetTouches|selectors|t30|inz30|z42|backCompat|padY|background|fit|detach|max|j33|while|touchScreen|screen|forEach|clearTimeout|j9|hCaption|tagName|styles|onComplete|padX||magicthumb|box|edge|parseFloat|ieMode|z21|captionText|createElement|init|split|J_TYPE|removeChild|z44|cursor|typeof|push|zooms|disableZoom|hintText|capable|inner|selectorsEffect|changedTouches|selectorsClass|j26|getDoc|touchend|z41|fps|thumbnail|Class|transition|z28|linear|instanceof|_cleanup|J_UUID|indexOf|getRelated|z38|contains|min|j19s|constructor|engine|visible|append|j15|ratio|borderWidth|z43Bind|custom|200|divTag|mt_vml_|j3|relative|wrapper|opacityReverse|scrollTop|round||clicked|apply|RegExp|layout|timer|onload|getButton|z37|color|z9|t31|dragMode|MagicZoomPlus|items|ts|on|domready|nodeType|win|t28|Array|hintPosition|getTarget|j13|image|original|z13|disableExpand|error|float|lastTap|div|expandEffect|center|activate|alwaysShowZoom|showTitle|string|busy|naturalWidth|z35|createTextNode|touch|setTimeout|z34|scrollLeft|clientY|sizing|slide|link|fade|array|requestAnimationFrame|prevItem|300|hasChild|preloadSelectorsBig|magiczoom|kill|toString|unload||ieBack|hasOwnProperty|continue|pause|adjustY|_tmpp|storage|number|adjustX|t15|cbs|In|clientX|Out|selector|showLoading|preservePosition|identifier|complete|zoomDistance|Doc|render|paddingBottom|t29|paddingTop|paddingLeft|readyState|initWidth|j18|initHeight|zoomViewHeight|isNaN|exec|lastSelector|z45|j19|touchstart|rev|initMouseEvent|gd56f7fsgd|offset|hintVisible|scrPad|getElementsByTagName|important|swap|dashize|paddingRight|magicJS|keepThumbnail|restoreEffect|easing|slideshowEffect|css3Transformations|t14|onerror|250|onStart|MagicZoom|captionPosition|nextItem|restoreSpeed|t13|onInititalize|uninitialized|slideshowLoop||loading|mode|refresh|splice|changeContent|throw|clickToActivate|loadingClass|t32|z48|css3Animation|getElementsByClassName|expandTrigger|z14|J_EUID|z18|class|entireImage|z23|initTopPos|initLeftPos|j10|set|span|shift|presto|expandPosition|lang|boolean|backgroundColor|activatedEx|join|pad|cloneNode|events|loadingMsg|z43|currentStyle|setupHint|static|preloadSelectorsSmall|onBeforeRender|random|_timer|onresize|zoomAlign|z3Timer|10000|forceAnimation|z36|vertical|buttons|t10|floor|400|_unbind|ddx|calc|hintClass|close|naturalHeight|mouseup|updating|z24|ddy|setupContent|dissolve|pounce|500|borderLeftWidth|dblclick|cancelAnimationFrame|theme_mac|IMG|j31|hoverTimer|PFX|innerHTML|stopImmediatePropagation|to|moveOnClick|getBox|String|hintOpacity|effect|holder|loadingOpacity|platform|abort|_handlers|replaceChild|selectorsEffectSpeed|z29|_lang|newImg|inline|media|panZoom|mzParams|exOptions|ms|head|button|mousedown|item|Plus|9_|pointer|previous|hover|resizeTimer|originId|clickInitZoom|Ff|Top|Bottom|element|implement||enabled|zoomIn|getStorage|next|titleSource|toggle|100000px|Right|z0|Left|expandSpeed|firstRun|speed|150|z33|external|expandAlign|screenPadding|_deprecated|documentElement|defaults|hspace|selectorsMouseoverDelay|vspace|ufx|smoothing|z11|lastLeftPos|callee|namespaces|z7Rect|styleSheets|innerWidth|innerHeight|MagicJS|not|swapTimer|insertBefore|contextmenu|found|features|Loading|sqrt|compatMode|outline|z10|_event_prefix_|createEvent|cos|z1Holder|Event|loopBind|onErrorHandler|z15|PI|shadow|request|thumbChange|preventDefault|uuid|initialize|horizontal|HTMLElement|object|chrome|_event_del_|navigator|el_arr|construct|resizeBind|J_EXTENDED|stopAnimation|Function|z16||caller|bgColor|smoothingSpeed|loop|adjustPosition|query|defaultView|styleFloat|loadingPositionX|startTime|out|tl|clickToInitialize|z20|insertRule|loadingPositionY|mousemove|mz|onabort|magic|z26|_event_add_|big|5001|open|touches|restoreTrigger|prevent|linkTarget|borderTopWidth|overlapBox|nWidth|borderBottomWidth|t6|rect|Slide|z46|captionSource|offsetHeight|buttonsPosition|url|transparent|10000px|slideshowSpeed|reverse|keydown|parseExOptions|1000|zoomItem|t17|t18|_z37|zoomOut|Zoom|onAfterRender|ceil|IFRAME|t11|t12|javascript||backgroundOpacity|j12|toggleMZ||backgroundSpeed|textAlign|gecko|destroy||tc|tr|je3|5000|XMLHttpRequest||zoomWindowEffect|glow|Khtml|Webkit|z17|cbHover|z19|cbClick|xpath|x7|Moz|localStorage|900|1px|changeEventName|errorEventName|preload|loadingMsgExpanded|onError|back|fitZoomWindow|Width|documentMode|mask|buttonClose|z32|t8|hone|z31|android|od|scroll|phone|sMagicZoom|t7|drag|opera|entire|touchmove|buttonNext|buttonPrevious|ios|cancel|zoomFade|initializing||backcompat|Image||curLeft|blur|disable|mozCancelAnimationFrame|cancelFullScreen|keyboard|onKey|keyboardCtrl|finishTime|interval|roundCss|webkit419||cubicIn|compareDocumentPosition|quadIn|expoIn|sineIn|wrap|requestFullScreen|v4|relatedTarget|gecko181|which|addEventListener|raiseEvent|dispatchEvent|stopPropagation|cancelBubble|420|keyCode|backIn|t21|setProps|Alpha|adjBorder|expandTriggerDelay|moz|Microsoft|DXImageTransform|text|t2|CancelFullScreen|getComputedStyle|transform|styles_arr|getBoundingClientRect|bounceIn|enclose|elasticIn|getElementById|t20|offsetWidth|t19|toFloat|align|isFinite|setLang|change|z25|inherit|fontFamily|fontWeight|backgroundPosition|j28|Tahoma|clone|css|buttonsDisplay|z8|temporary||add|_bind|101|magicthumb_ie_ex|charCodeAt|vml|com|urn|schemas|microsoft|tmp|insertCSS|captionWidth|date|captionSpeed|textnode|captionHeight|concat|abs|alt|charAt|clickToDeactivate|continueAnimation|nativize|mac|DocumentTouch|Date|toArray|t4|t5|t1|zoomFadeOutSpeed|z22|behavior|fontSize|tap|callout|unselectable|nHeight|fill|highlight|move|MagicZoomPup|UUID|cssClass|user|select|z27|z39|borderRightWidth|v2|map|VML|fromCharCode|isReady|zoomFadeInSpeed|backgroundImage|fromElement||pageYOffset|Object|srcElement|pageY||target|j11|clientTop|setAttribute|MagicZoomPlusHint|clientHeight|progid|filters|UIEvent|toElement|toUpperCase|pageX|addCSS|pageXOffset|exists|collection|clientLeft|KeyboardEvent|MagicZoomPlusLoading|scrollHeight|KeyEvent|regexp|magiczoomplus|j20|byClass|presto925|iframe|MagicZoomPlusOptions|childNodes|innerText|slice|offsetTop|returnValue|offsetLeft|DOMElement|offsetParent|MouseEvent|html|hasLayout|scrollWidth|clientWidth|getTime|air|lge|linux|kindle|other|maemo|midp|netfront|mmp|webos|iris|mozRequestAnimationFrame|hiptop|fennec|elaine|oCancelAnimationFrame|iemobile|msRequestAnimationFrame|webkitRequestAnimationFrame|removeEventListener|oRequestAnimationFrame|ob|palm|vodafone|wap|windows|re|up|plucker|psp|symbian|treo|xda|xiino|taintEnabled|unknown|os|WebKitPoint|mozInnerScreenY|ixi|ActiveXObject|getBoxObjectFor|msCancelAnimationFrame|webkitCancelRequestAnimationFrame|querySelector|khtml|runtime|fullscreenchange|ontouchstart|181|192|191|190|pocket|fullscreenerror|setInterval|j4|getPropertyValue|userAgent|evaluate|webkitIsFullScreen|FullScreen|RequestFullScreen|mobile|419|AnimationName|270|applicationCache|260|blackberry|blazer|Transform|animationName|compal|220|211|avantgo|tablet|525|bada|postMessage|210|msPerformance|performance||cssFloat|elasticOut|sine|line|2em|3px|MagicZoomHeader|attachEvent|MagicBoxGlow|frameBorder|nextSibling|ccc|autohide|td|toLocaleLowerCase|cbhover|removeAttribute|00001|coords|currentTarget|fixed|trident900|bounce|elastic|_new|z12|expo|Invalid|Magic|getXY|lef|cubic|hand|MagicZoomBigImageCont|10002|textDecoration|selectstart|quad|MozUserSelect|_blank|beforeEnd|getAttributeNode|lt|amp|getAttribute|caption|imageSize|MagicThumbHint|9999|zoomActivation|clickTo|10001|000000|MagicThumbLoading|mzp|Expand|execCommand|BackgroundImageCache|111|backgroundRepeat|dir|rtl|stroked|tile|skipAnimation|insertAdjacentHTML|Close|009|Next|cssText|swapImage|repeat|no|sort|Previous|owningElement|createStyleSheet|middle|MagicBoxShadow|addRule|cssRules|ctrlKey|clearInterval|loaded|fireEvent|mt|MagicZoomLoading|MagicZoomHint|styleSheet|sheet|DOMContentLoaded|slideIn|slideOut|bounceOut|doScroll|metaKey|curFrame|stylesId|distance|lastChild|_self|eventType|quadOut|msg|cubicOut|detachEvent|backOut|||||delay|618|small|always|initEvent|createEventObject||deactivate||preserve|source|sineOut|expoOut".split("|"), 0, {})), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, i, s, n) {
            return jQuery.easing[jQuery.easing.def](e, t, i, s, n)
        },
        easeInQuad: function(e, t, i, s, n) {
            return s * (t /= n) * t + i
        },
        easeOutQuad: function(e, t, i, s, n) {
            return -s * (t /= n) * (t - 2) + i
        },
        easeInOutQuad: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t + i : -s / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(e, t, i, s, n) {
            return s * (t /= n) * t * t + i
        },
        easeOutCubic: function(e, t, i, s, n) {
            return s * ((t = t / n - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t * t + i : s / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(e, t, i, s, n) {
            return s * (t /= n) * t * t * t + i
        },
        easeOutQuart: function(e, t, i, s, n) {
            return -s * ((t = t / n - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t * t * t + i : -s / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(e, t, i, s, n) {
            return s * (t /= n) * t * t * t * t + i
        },
        easeOutQuint: function(e, t, i, s, n) {
            return s * ((t = t / n - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t * t * t * t + i : s / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(e, t, i, s, n) {
            return -s * Math.cos(t / n * (Math.PI / 2)) + s + i
        },
        easeOutSine: function(e, t, i, s, n) {
            return s * Math.sin(t / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(e, t, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * t / n) - 1) + i
        },
        easeInExpo: function(e, t, i, s, n) {
            return 0 == t ? i : s * Math.pow(2, 10 * (t / n - 1)) + i
        },
        easeOutExpo: function(e, t, i, s, n) {
            return t == n ? i + s : s * (-Math.pow(2, -10 * t / n) + 1) + i
        },
        easeInOutExpo: function(e, t, i, s, n) {
            return 0 == t ? i : t == n ? i + s : (t /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + i : s / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function(e, t, i, s, n) {
            return -s * (Math.sqrt(1 - (t /= n) * t) - 1) + i
        },
        easeOutCirc: function(e, t, i, s, n) {
            return s * Math.sqrt(1 - (t = t / n - 1) * t) + i
        },
        easeInOutCirc: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + i : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(e, t, i, s, n) {
            var a = 1.70158,
                o = 0,
                r = s;
            if (0 == t) return i;
            if (1 == (t /= n)) return i + s;
            if (o || (o = .3 * n), r < Math.abs(s)) {
                r = s;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(s / r);
            return -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * n - a) * Math.PI / o)) + i
        },
        easeOutElastic: function(e, t, i, s, n) {
            var a = 1.70158,
                o = 0,
                r = s;
            if (0 == t) return i;
            if (1 == (t /= n)) return i + s;
            if (o || (o = .3 * n), r < Math.abs(s)) {
                r = s;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(s / r);
            return r * Math.pow(2, -10 * t) * Math.sin(2 * (t * n - a) * Math.PI / o) + s + i
        },
        easeInOutElastic: function(e, t, i, s, n) {
            var a = 1.70158,
                o = 0,
                r = s;
            if (0 == t) return i;
            if (2 == (t /= n / 2)) return i + s;
            if (o || (o = .3 * n * 1.5), r < Math.abs(s)) {
                r = s;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(s / r);
            return 1 > t ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * n - a) * Math.PI / o) + i : r * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * n - a) * Math.PI / o) * .5 + s + i
        },
        easeInBack: function(e, t, i, s, n, a) {
            return void 0 == a && (a = 1.70158), s * (t /= n) * t * ((a + 1) * t - a) + i
        },
        easeOutBack: function(e, t, i, s, n, a) {
            return void 0 == a && (a = 1.70158), s * ((t = t / n - 1) * t * ((a + 1) * t + a) + 1) + i
        },
        easeInOutBack: function(e, t, i, s, n, a) {
            return void 0 == a && (a = 1.70158), (t /= n / 2) < 1 ? s / 2 * t * t * (((a *= 1.525) + 1) * t - a) + i : s / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + i
        },
        easeInBounce: function(e, t, i, s, n) {
            return s - jQuery.easing.easeOutBounce(e, n - t, 0, s, n) + i
        },
        easeOutBounce: function(e, t, i, s, n) {
            return (t /= n) < 1 / 2.75 ? 7.5625 * s * t * t + i : 2 / 2.75 > t ? s * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? s * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : s * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(e, t, i, s, n) {
            return n / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, s, n) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - n, 0, s, n) + .5 * s + i
        }
    }),
    function(e) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(t) {
            return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = c), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
                var s = e(this),
                    n = s.data(C);
                n || (n = new i(this, t), s.data(C, n))
            })
        }

        function i(t, i) {
            function $(t) {
                if (!(rt() || e(t.target).closest(i.excludedElements, Lt).length > 0)) {
                    var s, n = t.originalEvent ? t.originalEvent : t,
                        a = _ ? n.touches[0] : n;
                    return Bt = w, _ ? Qt = n.touches.length : t.preventDefault(), Dt = 0, It = null, Ht = null, Rt = 0, Mt = 0, Et = 0, Wt = 1, Ot = 0, Ft = ht(), qt = gt(), at(), !_ || Qt === i.fingers || i.fingers === b || q() ? (ct(0, a), Ut = _t(), 2 == Qt && (ct(1, n.touches[1]), Mt = Et = bt(Ft[0].start, Ft[1].start)), (i.swipeStatus || i.pinchStatus) && (s = D(n, Bt))) : s = !1, s === !1 ? (Bt = x, D(n, Bt), s) : (lt(!0), null)
                }
            }

            function S(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                if (Bt !== k && Bt !== x && !ot()) {
                    var s, n = _ ? t.touches[0] : t,
                        a = dt(n);
                    if (Yt = _t(), _ && (Qt = t.touches.length), Bt = N, 2 == Qt && (0 == Mt ? (ct(1, t.touches[1]), Mt = Et = bt(Ft[0].start, Ft[1].start)) : (dt(t.touches[1]), Et = bt(Ft[0].end, Ft[1].end), Ht = wt(Ft[0].end, Ft[1].end)), Wt = yt(Mt, Et), Ot = Math.abs(Mt - Et)), Qt === i.fingers || i.fingers === b || !_ || q()) {
                        if (It = xt(a.start, a.end), O(e, It), Dt = Nt(a.start, a.end), Rt = vt(), pt(It, Dt), (i.swipeStatus || i.pinchStatus) && (s = D(t, Bt)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                            var o = !0;
                            if (i.triggerOnTouchLeave) {
                                var r = Ct(this);
                                o = $t(a.end, r)
                            }!i.triggerOnTouchEnd && o ? Bt = A(N) : i.triggerOnTouchLeave && !o && (Bt = A(k)), (Bt == x || Bt == k) && D(t, Bt)
                        }
                    } else Bt = x, D(t, Bt);
                    s === !1 && (Bt = x, D(t, Bt))
                }
            }

            function T(e) {
                var t = e.originalEvent;
                return _ && t.touches.length > 0 ? (nt(), !0) : (ot() && (Qt = Xt), e.preventDefault(), Yt = _t(), Rt = vt(), M() ? (Bt = x, D(t, Bt)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Bt === N ? (Bt = k, D(t, Bt)) : !i.triggerOnTouchEnd && V() ? (Bt = k, I(t, Bt, p)) : Bt === N && (Bt = x, D(t, Bt)), lt(!1), null)
            }

            function P() {
                Qt = 0, Yt = 0, Ut = 0, Mt = 0, Et = 0, Wt = 1, at(), lt(!1)
            }

            function j(e) {
                var t = e.originalEvent;
                i.triggerOnTouchLeave && (Bt = A(k), D(t, Bt))
            }

            function z() {
                Lt.unbind(Tt, $), Lt.unbind(At, P), Lt.unbind(Pt, S), Lt.unbind(jt, T), zt && Lt.unbind(zt, j), lt(!1)
            }

            function A(e) {
                var t = e,
                    s = W(),
                    n = R(),
                    a = M();
                return !s || a ? t = x : !n || e != N || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !n && e == k && i.triggerOnTouchLeave && (t = x) : t = k, t
            }

            function D(e, t) {
                var i = void 0;
                return F() || Q() ? i = I(e, t, u) : (L() || q()) && i !== !1 && (i = I(e, t, h)), it() && i !== !1 ? i = I(e, t, f) : st() && i !== !1 ? i = I(e, t, g) : tt() && i !== !1 && (i = I(e, t, p)), t === x && P(e), t === k && (_ ? 0 == e.touches.length && P(e) : P(e)), i
            }

            function I(t, c, d) {
                var m = void 0;
                if (d == u) {
                    if (Lt.trigger("swipeStatus", [c, It || null, Dt || 0, Rt || 0, Qt]), i.swipeStatus && (m = i.swipeStatus.call(Lt, t, c, It || null, Dt || 0, Rt || 0, Qt), m === !1)) return !1;
                    if (c == k && B()) {
                        if (Lt.trigger("swipe", [It, Dt, Rt, Qt]), i.swipe && (m = i.swipe.call(Lt, t, It, Dt, Rt, Qt), m === !1)) return !1;
                        switch (It) {
                            case s:
                                Lt.trigger("swipeLeft", [It, Dt, Rt, Qt]), i.swipeLeft && (m = i.swipeLeft.call(Lt, t, It, Dt, Rt, Qt));
                                break;
                            case n:
                                Lt.trigger("swipeRight", [It, Dt, Rt, Qt]), i.swipeRight && (m = i.swipeRight.call(Lt, t, It, Dt, Rt, Qt));
                                break;
                            case a:
                                Lt.trigger("swipeUp", [It, Dt, Rt, Qt]), i.swipeUp && (m = i.swipeUp.call(Lt, t, It, Dt, Rt, Qt));
                                break;
                            case o:
                                Lt.trigger("swipeDown", [It, Dt, Rt, Qt]), i.swipeDown && (m = i.swipeDown.call(Lt, t, It, Dt, Rt, Qt))
                        }
                    }
                }
                if (d == h) {
                    if (Lt.trigger("pinchStatus", [c, Ht || null, Ot || 0, Rt || 0, Qt, Wt]), i.pinchStatus && (m = i.pinchStatus.call(Lt, t, c, Ht || null, Ot || 0, Rt || 0, Qt, Wt), m === !1)) return !1;
                    if (c == k && H()) switch (Ht) {
                        case r:
                            Lt.trigger("pinchIn", [Ht || null, Ot || 0, Rt || 0, Qt, Wt]), i.pinchIn && (m = i.pinchIn.call(Lt, t, Ht || null, Ot || 0, Rt || 0, Qt, Wt));
                            break;
                        case l:
                            Lt.trigger("pinchOut", [Ht || null, Ot || 0, Rt || 0, Qt, Wt]), i.pinchOut && (m = i.pinchOut.call(Lt, t, Ht || null, Ot || 0, Rt || 0, Qt, Wt))
                    }
                }
                return d == p ? (c === x || c === k) && (clearTimeout(Gt), X() && !K() ? (Jt = _t(), Gt = setTimeout(e.proxy(function() {
                    Jt = null, Lt.trigger("tap", [t.target]), i.tap && (m = i.tap.call(Lt, t, t.target))
                }, this), i.doubleTapThreshold)) : (Jt = null, Lt.trigger("tap", [t.target]), i.tap && (m = i.tap.call(Lt, t, t.target)))) : d == f ? (c === x || c === k) && (clearTimeout(Gt), Jt = null, Lt.trigger("doubletap", [t.target]), i.doubleTap && (m = i.doubleTap.call(Lt, t, t.target))) : d == g && (c === x || c === k) && (clearTimeout(Gt), Jt = null, Lt.trigger("longtap", [t.target]), i.longTap && (m = i.longTap.call(Lt, t, t.target))), m
            }

            function R() {
                var e = !0;
                return null !== i.threshold && (e = Dt >= i.threshold), e
            }

            function M() {
                var e = !1;
                return null !== i.cancelThreshold && null !== It && (e = ft(It) - Dt >= i.cancelThreshold), e
            }

            function E() {
                return null !== i.pinchThreshold ? Ot >= i.pinchThreshold : !0
            }

            function W() {
                var e;
                return e = i.maxTimeThreshold && Rt >= i.maxTimeThreshold ? !1 : !0
            }

            function O(e, t) {
                if (i.allowPageScroll === c || q()) e.preventDefault();
                else {
                    var r = i.allowPageScroll === d;
                    switch (t) {
                        case s:
                            (i.swipeLeft && r || !r && i.allowPageScroll != m) && e.preventDefault();
                            break;
                        case n:
                            (i.swipeRight && r || !r && i.allowPageScroll != m) && e.preventDefault();
                            break;
                        case a:
                            (i.swipeUp && r || !r && i.allowPageScroll != v) && e.preventDefault();
                            break;
                        case o:
                            (i.swipeDown && r || !r && i.allowPageScroll != v) && e.preventDefault()
                    }
                }
            }

            function H() {
                var e = U(),
                    t = Y(),
                    i = E();
                return e && t && i
            }

            function q() {
                return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
            }

            function L() {
                return !(!H() || !q())
            }

            function B() {
                var e = W(),
                    t = R(),
                    i = U(),
                    s = Y(),
                    n = M(),
                    a = !n && s && i && t && e;
                return a
            }

            function Q() {
                return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
            }

            function F() {
                return !(!B() || !Q())
            }

            function U() {
                return Qt === i.fingers || i.fingers === b || !_
            }

            function Y() {
                return 0 !== Ft[0].end.x
            }

            function V() {
                return !!i.tap
            }

            function X() {
                return !!i.doubleTap
            }

            function J() {
                return !!i.longTap
            }

            function G() {
                if (null == Jt) return !1;
                var e = _t();
                return X() && e - Jt <= i.doubleTapThreshold
            }

            function K() {
                return G()
            }

            function Z() {
                return !(1 !== Qt && _ || !isNaN(Dt) && 0 !== Dt)
            }

            function et() {
                return Rt > i.longTapThreshold && y > Dt
            }

            function tt() {
                return !(!Z() || !V())
            }

            function it() {
                return !(!G() || !X())
            }

            function st() {
                return !(!et() || !J())
            }

            function nt() {
                Vt = _t(), Xt = event.touches.length + 1
            }

            function at() {
                Vt = 0, Xt = 0
            }

            function ot() {
                var e = !1;
                if (Vt) {
                    var t = _t() - Vt;
                    t <= i.fingerReleaseThreshold && (e = !0)
                }
                return e
            }

            function rt() {
                return !(Lt.data(C + "_intouch") !== !0)
            }

            function lt(e) {
                e === !0 ? (Lt.bind(Pt, S), Lt.bind(jt, T), zt && Lt.bind(zt, j)) : (Lt.unbind(Pt, S, !1), Lt.unbind(jt, T, !1), zt && Lt.unbind(zt, j, !1)), Lt.data(C + "_intouch", e === !0)
            }

            function ct(e, t) {
                var i = void 0 !== t.identifier ? t.identifier : 0;
                return Ft[e].identifier = i, Ft[e].start.x = Ft[e].end.x = t.pageX || t.clientX, Ft[e].start.y = Ft[e].end.y = t.pageY || t.clientY, Ft[e]
            }

            function dt(e) {
                var t = void 0 !== e.identifier ? e.identifier : 0,
                    i = ut(t);
                return i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i
            }

            function ut(e) {
                for (var t = 0; t < Ft.length; t++)
                    if (Ft[t].identifier == e) return Ft[t]
            }

            function ht() {
                for (var e = [], t = 0; 5 >= t; t++) e.push({
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
                return e
            }

            function pt(e, t) {
                t = Math.max(t, ft(e)), qt[e].distance = t
            }

            function ft(e) {
                return qt[e] ? qt[e].distance : void 0
            }

            function gt() {
                var e = {};
                return e[s] = mt(s), e[n] = mt(n), e[a] = mt(a), e[o] = mt(o), e
            }

            function mt(e) {
                return {
                    direction: e,
                    distance: 0
                }
            }

            function vt() {
                return Yt - Ut
            }

            function bt(e, t) {
                var i = Math.abs(e.x - t.x),
                    s = Math.abs(e.y - t.y);
                return Math.round(Math.sqrt(i * i + s * s))
            }

            function yt(e, t) {
                var i = t / e * 1;
                return i.toFixed(2)
            }

            function wt() {
                return 1 > Wt ? l : r
            }

            function Nt(e, t) {
                return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
            }

            function kt(e, t) {
                var i = e.x - t.x,
                    s = t.y - e.y,
                    n = Math.atan2(s, i),
                    a = Math.round(180 * n / Math.PI);
                return 0 > a && (a = 360 - Math.abs(a)), a
            }

            function xt(e, t) {
                var i = kt(e, t);
                return 45 >= i && i >= 0 ? s : 360 >= i && i >= 315 ? s : i >= 135 && 225 >= i ? n : i > 45 && 135 > i ? o : a
            }

            function _t() {
                var e = new Date;
                return e.getTime()
            }

            function Ct(t) {
                t = e(t);
                var i = t.offset(),
                    s = {
                        left: i.left,
                        right: i.left + t.outerWidth(),
                        top: i.top,
                        bottom: i.top + t.outerHeight()
                    };
                return s
            }

            function $t(e, t) {
                return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
            }
            var St = _ || !i.fallbackToMouseEvents,
                Tt = St ? "touchstart" : "mousedown",
                Pt = St ? "touchmove" : "mousemove",
                jt = St ? "touchend" : "mouseup",
                zt = St ? null : "mouseleave",
                At = "touchcancel",
                Dt = 0,
                It = null,
                Rt = 0,
                Mt = 0,
                Et = 0,
                Wt = 1,
                Ot = 0,
                Ht = 0,
                qt = null,
                Lt = e(t),
                Bt = "start",
                Qt = 0,
                Ft = null,
                Ut = 0,
                Yt = 0,
                Vt = 0,
                Xt = 0,
                Jt = 0,
                Gt = null;
            try {
                Lt.bind(Tt, $), Lt.bind(At, P)
            } catch (Kt) {
                e.error("events not supported " + Tt + "," + At + " on jQuery.swipe")
            }
            this.enable = function() {
                return Lt.bind(Tt, $), Lt.bind(At, P), Lt
            }, this.disable = function() {
                return z(), Lt
            }, this.destroy = function() {
                return z(), Lt.data(C, null), Lt
            }, this.option = function(t, s) {
                if (void 0 !== i[t]) {
                    if (void 0 === s) return i[t];
                    i[t] = s
                } else e.error("Option " + t + " does not exist on jQuery.swipe.options");
                return null
            }
        }
        var s = "left",
            n = "right",
            a = "up",
            o = "down",
            r = "in",
            l = "out",
            c = "none",
            d = "auto",
            u = "swipe",
            h = "pinch",
            p = "tap",
            f = "doubletap",
            g = "longtap",
            m = "horizontal",
            v = "vertical",
            b = "all",
            y = 10,
            w = "start",
            N = "move",
            k = "end",
            x = "cancel",
            _ = "ontouchstart" in window,
            C = "TouchSwipe",
            $ = {
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
        e.fn.swipe = function(i) {
            var s = e(this),
                n = s.data(C);
            if (n && "string" == typeof i) {
                if (n[i]) return n[i].apply(this, Array.prototype.slice.call(arguments, 1));
                e.error("Method " + i + " does not exist on jQuery.swipe")
            } else if (!(n || "object" != typeof i && i)) return t.apply(this, arguments);
            return s
        }, e.fn.swipe.defaults = $, e.fn.swipe.phases = {
            PHASE_START: w,
            PHASE_MOVE: N,
            PHASE_END: k,
            PHASE_CANCEL: x
        }, e.fn.swipe.directions = {
            LEFT: s,
            RIGHT: n,
            UP: a,
            DOWN: o,
            IN: r,
            OUT: l
        }, e.fn.swipe.pageScroll = {
            NONE: c,
            HORIZONTAL: m,
            VERTICAL: v,
            AUTO: d
        }, e.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: b
        }
    }), "function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, i, s) {
        var n = {
            makeResponsive: function() {
                var i = this;
                e(i.sliderId + "-wrapper").addClass("ls-responsive").css({
                    "max-width": e(i.sliderId + " .panel:first-child").width(),
                    width: "100%"
                }), e(i.sliderId + " .panel-container").css("width", 100 * i.panelCountTotal + i.pSign), e(i.sliderId + " .panel").css("width", 100 / i.panelCountTotal + i.pSign), i.options.hideArrowsWhenMobile && (i.leftWrapperPadding = e(i.sliderId + "-wrapper").css("padding-left"), i.rightWrapperPadding = i.$sliderWrap.css("padding-right")), i.responsiveEvents(), e(t).bind("resize", function() {
                    i.responsiveEvents(), clearTimeout(i.resizingTimeout), i.resizingTimeout = setTimeout(function() {
                        var e = i.options.autoHeight ? i.getHeight() : i.getHeighestPanel(i.nextPanel);
                        i.adjustHeight(!1, e)
                    }, 500)
                })
            },
            responsiveEvents: function() {
                var t = this,
                    i = t.options.hideArrowsThreshold || t.options.mobileUIThreshold || t.totalNavWidth + 10;
                t.$sliderId.outerWidth() < i ? (t.options.mobileNavigation && (t.navigation.css("display", "none"), t.dropdown.css("display", "block"), t.dropdownSelect.css("display", "block"), e(t.sliderId + "-nav-select").val(t.options.mobileNavDefaultText)), t.options.dynamicArrows && (t.options.hideArrowsWhenMobile ? (t.leftArrow.remove().length = 0, t.rightArrow.remove().length = 0) : t.options.dynamicArrowsGraphical || (t.leftArrow.css("margin-" + t.options.dynamicTabsPosition, "0"), t.rightArrow.css("margin-" + t.options.dynamicTabsPosition, "0")))) : (t.options.mobileNavigation && (t.navigation.css("display", "block"), t.dropdown.css("display", "none"), t.dropdownSelect.css("display", "none")), t.options.dynamicArrows && (!t.options.hideArrowsWhenMobile || t.leftArrow.length && t.rightArrow.length ? t.options.dynamicArrowsGraphical || (t.leftArrow.css("margin-" + t.options.dynamicTabsPosition, t.navigation.css("height")), t.rightArrow.css("margin-" + t.options.dynamicTabsPosition, t.navigation.css("height"))) : (t.addArrows(), t.registerArrows()))), e(t.sliderId + "-wrapper").css("width", "100%"), t.options.mobileNavigation && t.dropdownSelect.change(function() {
                    t.setNextPanel(parseInt(e(this).val().split("tab")[1], 10) - 1)
                })
            },
            addNavigation: function(t) {
                var i = this,
                    s = "<" + i.options.navElementTag + ' class="ls-nav"><ul id="' + i.$elem.attr("id") + '-nav-ul"></ul></' + i.options.navElementTag + ">";
                if ("bottom" === i.options.dynamicTabsPosition ? i.$sliderId.after(s) : i.$sliderId.before(s), i.options.mobileNavigation) {
                    var n = i.options.mobileNavDefaultText ? '<option disabled="disabled" selected="selected">' + i.options.mobileNavDefaultText + "</option>" : null,
                        a = '<div class="ls-select-box"><select id="' + i.$elem.attr("id") + '-nav-select" name="navigation">' + n + "</select></div>";
                    i.navigation = e(i.sliderId + "-nav-ul").before(a), i.dropdown = e(i.sliderId + "-wrapper .ls-select-box"), i.dropdownSelect = e(i.sliderId + "-nav-select"), e.each(i.$elem.find(i.options.panelTitleSelector), function(t) {
                        e(i.$sliderWrap).find(".ls-select-box select").append('<option value="tab' + (t + 1) + '">' + e(this).text() + "</option>")
                    })
                }
                e.each(i.$elem.find(i.options.panelTitleSelector), function(s) {
                    e(i.$sliderWrap).find(".ls-nav ul").append('<li class="tab' + (s + 1) + '"><a class="' + (t || "") + '" href="#' + (s + 1) + '">' + i.getNavInsides(this) + "</a></li>"), i.options.includeTitle || e(this).remove()
                })
            },
            getNavInsides: function(t) {
                return this.options.dynamicTabsHtml ? e(t).html() : e(t).text()
            },
            alignNavigation: function() {
                var t = this,
                    i = t.options.dynamicArrowsGraphical ? "-arrow" : "";
                "center" !== t.options.dynamicTabsAlign && (t.options.responsive || e(t.$sliderWrap).find(".ls-nav ul").css("margin-" + t.options.dynamicTabsAlign, e(t.$sliderWrap).find(".ls-nav-" + t.options.dynamicTabsAlign + i).outerWidth(!0) + parseInt(t.$sliderId.css("margin-" + t.options.dynamicTabsAlign), 10)), e(t.$sliderWrap).find(".ls-nav ul").css("float", t.options.dynamicTabsAlign)), t.totalNavWidth = e(t.$sliderWrap).find(".ls-nav ul").outerWidth(!0), "center" === t.options.dynamicTabsAlign && (t.totalNavWidth = 0, e(t.$sliderWrap).find(".ls-nav li a").each(function() {
                    t.totalNavWidth += e(this).outerWidth(!0)
                }), e(t.$sliderWrap).find(".ls-nav ul").css("width", t.totalNavWidth + 1))
            },
            registerNav: function() {
                var t = this;
                t.$sliderWrap.find("[class^=ls-nav] li").on("click", function() {
                    return t.setNextPanel(parseInt(e(this).attr("class").split("tab")[1], 10) - 1), !1
                })
            },
            addArrows: function(t) {
                var i = this,
                    n = i.options.dynamicArrowsGraphical ? "-arrow " : " ";
                i.$sliderWrap.addClass("arrows"), i.options.dynamicArrowsGraphical && (i.options.dynamicArrowLeftText = "", i.options.dynamicArrowRightText = ""), i.$sliderId.before('<div class="ls-nav-left' + n + (t || "") + '"><a href="#">' + i.options.dynamicArrowLeftText + "</a></div>"), i.$sliderId.after('<div class="ls-nav-right' + n + (t || "") + '"><a href="#">' + i.options.dynamicArrowRightText + "</a></div>"), i.leftArrow = e(i.sliderId + "-wrapper [class^=ls-nav-left]").css("visibility", "hidden").addClass("ls-hidden"), i.rightArrow = e(i.sliderId + "-wrapper [class^=ls-nav-right]").css("visibility", "hidden").addClass("ls-hidden"), i.options.hoverArrows || i.hideShowArrows(s, !0, !0, !1)
            },
            hideShowArrows: function(t, i, s, n) {
                var a = this,
                    o = "undefined" != typeof t ? t : a.options.fadeOutDuration,
                    r = "undefined" != typeof t ? t : a.options.fadeInDuration,
                    l = i ? "visible" : "hidden";
                s || !n && 1 !== a.sanatizeNumber(a.nextPanel) ? (s || a.leftArrow.hasClass("ls-hidden")) && a.leftArrow.stop().css("visibility", "visible").fadeTo(r, 1).removeClass("ls-hidden") : a.leftArrow.stop().fadeTo(o, 0, function() {
                    e(this).css("visibility", l).addClass("ls-hidden")
                }), s || !n && a.sanatizeNumber(a.nextPanel) !== a.panelCount ? (s || a.rightArrow.hasClass("ls-hidden")) && a.rightArrow.stop().css("visibility", "visible").fadeTo(r, 1).removeClass("ls-hidden") : a.rightArrow.stop().fadeTo(o, 0, function() {
                    e(this).css("visibility", l).addClass("ls-hidden")
                })
            },
            registerArrows: function() {
                var t = this;
                e(t.$sliderWrap.find("[class^=ls-nav-]")).on("click", function() {
                    t.setNextPanel(e(this).attr("class").split(" ")[0].split("-")[2])
                })
            },
            registerCrossLinks: function() {
                var t = this;
                t.crosslinks = e("[data-liquidslider-ref*=" + t.sliderId.split("#")[1] + "]"), t.crosslinks.on("click", function(i) {
                    t.options.autoSlide === !0 && t.startAutoSlide(!0), t.setNextPanel(t.getPanelNumber(e(this).attr("href").split("#")[1], t.options.panelTitleSelector)), i.preventDefault()
                }), t.updateClass()
            },
            registerTouch: function() {
                var t = this,
                    i = t.options.swipeArgs || {
                        fallbackToMouseEvents: !1,
                        allowPageScroll: "vertical",
                        swipe: function(e, i) {
                            return "up" === i || "down" === i ? !1 : (t.swipeDir = "left" === i ? "right" : "left", void t.setNextPanel(t.swipeDir))
                        }
                    };
                e(t.sliderId + " .panel").swipe(i)
            },
            registerKeyboard: function() {
                var t = this;
                e(i).keydown(function(i) {
                    var s = i.keyCode || i.which;
                    "textarea" !== i.target.type && "textbox" !== i.target.type && (t.options.forceAutoSlide || e(this).trigger("click"), s === t.options.leftKey && t.setNextPanel("right"), s === t.options.rightKey && t.setNextPanel("left"), e.each(t.options.panelKeys, function(e, i) {
                        s === i && t.setNextPanel(e - 1)
                    }))
                })
            },
            autoSlide: function() {
                var e = this;
                e.options.autoSlideInterval < e.options.slideEaseDuration && (e.options.autoSlideInterval = e.options.slideEaseDuration > e.options.heightEaseDuration ? e.options.slideEaseDuration : e.options.heightEaseDuration), e.autoSlideTimeout = setTimeout(function() {
                    e.setNextPanel(e.options.autoSlideDirection), e.autoSlide()
                }, e.options.autoSlideInterval)
            },
            stopAutoSlide: function() {
                var e = this;
                e.options.autoSlide = !1, clearTimeout(e.autoSlideTimeout)
            },
            startAutoSlide: function(e) {
                var t = this;
                t.options.autoSlide = !0, e || t.setNextPanel(t.options.autoSlideDirection), t.autoSlide(clearTimeout(t.autoSlideTimeout))
            },
            updateHashTags: function() {
                var e = this,
                    i = e.nextPanel === e.panelCount ? 0 : e.nextPanel;
                t.location.hash = e.getFromPanel(e.options.hashTitleSelector, i)
            },
            adjustHeight: function(e, t, i, s) {
                var n = this;
                return e || n.useCSS ? (e && n.configureCSSTransitions("0", "0"), n.$sliderId.height(t), void(e && n.configureCSSTransitions())) : void n.$sliderId.animate({
                    height: t + "px"
                }, {
                    easing: i || n.options.heightEaseFunction,
                    duration: s || n.options.heightEaseDuration,
                    queue: !1
                })
            },
            getHeight: function(e) {
                var t = this;
                return e = e || t.$panelClass.eq(t.sanatizeNumber(t.nextPanel) - 1).outerHeight(!0), e = e < t.options.minHeight ? t.options.minHeight : e
            },
            addPreloader: function() {
                var t = this;
                e(t.sliderId + "-wrapper").append('<div class="ls-preloader"></div>')
            },
            removePreloader: function() {
                var t = this;
                e(t.sliderId + "-wrapper .ls-preloader").fadeTo("slow", 0, function() {
                    e(this).remove()
                })
            },
            init: function(i, s) {
                var n = this;
                n.elem = s, n.$elem = e(s), e("body").removeClass("no-js"), n.sliderId = "#" + n.$elem.attr("id"), n.$sliderId = e(n.sliderId), n.options = e.extend({}, e.fn.liquidSlider.options, i), n.pSign = n.options.responsive ? "%" : "px", n.options.responsive ? n.determineAnimationType() : (n.options.mobileNavigation = !1, n.options.hideArrowsWhenMobile = !1), "animate.css" === n.options.slideEaseFunction && (n.useCSS ? (n.options.continuous = !1, n.animateCSS = !0) : n.options.slideEaseFunction = n.options.slideEaseFunctionFallback), n.build(), n.events(), !n.options.responsive && n.options.dynamicArrows && n.$sliderWrap.width(n.$sliderId.outerWidth(!0) + n.leftArrow.outerWidth(!0) + n.rightArrow.outerWidth(!0)), n.loaded = !0, e(t).bind("load", function() {
                    n.options.preload.call(n)
                })
            },
            build: function() {
                var t, i = this;
                "ls-wrapper" !== i.$sliderId.parent().attr("class") && i.$sliderId.wrap('<div id="' + i.$elem.attr("id") + '-wrapper" class="ls-wrapper"></div>'), i.$sliderWrap = e(i.sliderId + "-wrapper"), i.options.preloader && i.addPreloader(), e(i.sliderId).children().addClass(i.$elem.attr("id") + "-panel panel"), i.panelClass = i.sliderId + " ." + i.$elem.attr("id") + "-panel:not(.clone)", i.$panelClass = e(i.panelClass), i.$panelClass.wrapAll('<div class="panel-container"></div>'), i.$panelClass.wrapInner('<div class="panel-wrapper"></div>'), i.panelContainer = i.$panelClass.parent(), i.$panelContainer = i.panelContainer, "fade" === i.options.slideEaseFunction && (i.$panelClass.addClass("fade"), i.options.continuous = !1, i.fade = !0), i.options.dynamicTabs ? i.addNavigation() : i.options.mobileNavigation = !1, i.options.dynamicArrows ? i.addArrows() : (i.options.hoverArrows = !1, i.options.hideSideArrows = !1, i.options.hideArrowsWhenMobile = !1), t = i.$leftArrow && "absolute" === i.$leftArrow.css("position") ? 0 : 1, i.totalSliderWidth = i.$sliderId.outerWidth(!0) + e(i.$leftArrow).outerWidth(!0) * t + e(i.$rightArrow).outerWidth(!0) * t, e(i.$sliderWrap).css("width", i.totalSliderWidth), i.options.dynamicTabs && i.alignNavigation(), i.options.hideSideArrows && (i.options.continuous = !1), i.options.continuous && (i.$panelContainer.prepend(i.$panelContainer.children().last().clone().addClass("clone")), i.$panelContainer.append(i.$panelContainer.children().eq(1).clone().addClass("clone")));
                var s = i.options.continuous ? 2 : 0;
                i.panelCount = e(i.panelClass).length, i.panelCountTotal = i.fade ? 1 : i.panelCount + s, i.panelWidth = e(i.panelClass).outerWidth(), i.totalWidth = i.panelCountTotal * i.panelWidth, e(i.sliderId + " .panel-container").css("width", i.totalWidth), i.slideDistance = i.options.responsive ? 100 : e(i.sliderId).outerWidth(), i.useCSS && (i.totalWidth = 100 * i.panelCountTotal, i.slideDistance = 100 / i.panelCountTotal), i.options.responsive && i.makeResponsive(), i.prepareTransition(i.getFirstPanel(), !0), i.updateClass()
            },
            determineAnimationType: function() {
                var e = this,
                    t = "animation",
                    n = "",
                    a = "Webkit Moz O ms Khtml".split(" "),
                    o = "",
                    r = 0;
                if (e.useCSS = !1, e.elem.style.animationName && (e.useCSS = !0), e.useCSS === !1)
                    for (r = 0; r < a.length; r++)
                        if (e.elem.style[a[r] + "AnimationName"] !== s) {
                            o = a[r], t = o + "Animation", n = "-" + o.toLowerCase() + "-", e.useCSS = !0;
                            break
                        }
                i.documentElement.clientWidth > e.options.useCSSMaxWidth && (e.useCSS = !1)
            },
            configureCSSTransitions: function(t, i) {
                var s, n, a = this;
                a.easing = {
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
                }, a.useCSS && (s = "all " + (t || a.options.slideEaseDuration) + "ms " + a.easing[a.options.slideEaseFunction], n = "all " + (i || a.options.heightEaseDuration) + "ms " + a.easing[a.options.heightEaseFunction], e(a.panelContainer).css({
                    "-webkit-transition": s,
                    "-moz-transition": s,
                    "-ms-transition": s,
                    "-o-transition": s,
                    transition: s
                }), a.options.autoHeight && a.$sliderId.css({
                    "-webkit-transition": n,
                    "-moz-transition": n,
                    "-ms-transition": n,
                    "-o-transition": n,
                    transition: n
                }))
            },
            transitionFade: function() {
                var t = this;
                e(t.panelClass).eq(t.nextPanel).fadeTo(t.options.fadeInDuration, 1).css("z-index", 1), e(t.panelClass).eq(t.prevPanel).fadeTo(t.options.fadeOutDuration, 0).css("z-index", 0), t.callback(t.options.callback, !0)
            },
            hover: function() {
                var e = this;
                e.$sliderWrap.hover(function() {
                    e.options.hoverArrows && e.hideShowArrows(e.options.fadeInDuration, !0, !0, !1), e.options.pauseOnHover && clearTimeout(e.autoSlideTimeout)
                }, function() {
                    e.options.hoverArrows && e.hideShowArrows(e.options.fadeOutnDuration, !0, !1, !0), e.options.pauseOnHover && e.options.autoSlide && e.startAutoSlide()
                })
            },
            events: function() {
                var e = this;
                e.options.dynamicArrows && e.registerArrows(), e.options.crossLinks && e.registerCrossLinks(), e.options.dynamicTabs && e.registerNav(), e.options.swipe && e.registerTouch(), e.options.keyboardNavigation && e.registerKeyboard(), e.$sliderWrap.find("*").on("click", function() {
                    e.options.forceAutoSlide ? e.startAutoSlide(!0) : e.options.autoSlide && e.stopAutoSlide()
                }), e.hover()
            },
            setNextPanel: function(e) {
                var t = this;
                setTimeout(function() {
                    e !== t.nextPanel && (t.prevPanel = t.nextPanel, t.loaded && ("number" == typeof e ? t.nextPanel = e : (t.nextPanel += ~~("right" === e) || -1, t.options.continuous || (t.nextPanel = t.nextPanel < 0 ? t.panelCount - 1 : t.nextPanel % t.panelCount)), t.fade || t.animateCSS ? t.prepareTransition(t.nextPanel) : t.verifyPanel()))
                }, 100)
            },
            getFirstPanel: function() {
                var e, i = this;
                return i.options.hashLinking && (e = i.getPanelNumber(t.location.hash, i.options.hashTitleSelector), "number" != typeof e && (e = 0)), e ? e : i.options.firstPanelToLoad - 1
            },
            getPanelNumber: function(t, i) {
                var s, n = this,
                    a = t.replace("#", "").toLowerCase();
                return n.$panelClass.each(function(t) {
                    s = n.convertRegex(e(this).find(i).text()), s === a && (a = t + 1)
                }), parseInt(a, 10) ? parseInt(a, 10) - 1 : a
            },
            getFromPanel: function(e, t) {
                var i = this;
                return i.convertRegex(i.$panelClass.find(e).eq(t).text())
            },
            convertRegex: function(e) {
                return e.replace(/[^\w -]+/g, "").replace(/ +/g, "-").toLowerCase()
            },
            updateClass: function() {
                var t = this;
                t.options.dynamicTabs && e(t.$sliderWrap).find(".tab" + t.sanatizeNumber(t.nextPanel) + ":first a").addClass("current").parent().siblings().children().removeClass("current"), t.options.crossLinks && t.crosslinks && (t.crosslinks.not(t.nextPanel).removeClass("currentCrossLink"), t.crosslinks.each(function() {
                    e(this).attr("href") === "#" + t.getFromPanel(t.options.panelTitleSelector, t.sanatizeNumber(t.nextPanel) - 1) && e(this).addClass("currentCrossLink")
                })), t.$panelClass.eq(t.nextPanel).addClass("currentPanel").siblings().removeClass("currentPanel")
            },
            sanatizeNumber: function(e) {
                var t = this;
                return e >= t.panelCount ? 1 : -1 >= e ? t.panelCount : e + 1
            },
            finalize: function() {
                var e = this,
                    t = e.options.autoHeight ? e.getHeight() : e.getHeighestPanel(e.nextPanel);
                e.options.autoHeight && e.adjustHeight(!0, t), e.options.autoSlide && e.autoSlide(), e.options.preloader && e.removePreloader(), e.onload()
            },
            callback: function(t, i) {
                var s = this;
                t && s.loaded && (s.useCSS && "undefined" != typeof i ? e(".panel-container").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    t.call(s)
                }) : setTimeout(function() {
                    t.call(s)
                }, s.options.slideEaseDuration + 50))
            },
            onload: function() {
                var e = this;
                e.options.onload.call(e)
            },
            prepareTransition: function(e, t, i, s) {
                var n = this;
                n.nextPanel = e || 0, i || n.pretransition(n.options.pretransition), n.noAnimation = t, n.noPosttransition = s, n.loaded ? n.options.pretransition.call(n) : n.transition()
            },
            pretransition: function() {
                var e = this;
                e.options.hashLinking && e.updateHashTags(), e.options.mobileNavigation && e.dropdownSelect.val("tab" + (e.nextPanel + 1)), e.options.hideSideArrows && e.hideShowArrows(), e.updateClass()
            },
            getTransitionMargin: function() {
                var e = this;
                return -(e.nextPanel * e.slideDistance) - e.slideDistance * ~~e.options.continuous
            },
            transition: function() {
                var e = this,
                    t = e.getTransitionMargin();
                return e.animateCSS && e.loaded ? (e.transitionOutAnimateCSS(), !1) : ((t + e.pSign !== e.panelContainer.css("margin-left") || -100 !== t) && (e.options.autoHeight && !e.animateCSS && e.adjustHeight(!0, e.getHeight()), e.fade ? e.transitionFade() : e.animateCSS ? e.transitionInAnimateCSS(t) : e.useCSS ? e.transitionCSS(t, e.noAnimation) : e.transitionjQuery(t, e.noAnimation)), void(e.noPosttransition || e.callback(e.options.callback)))
            },
            transitionOutAnimateCSS: function() {
                var t = this;
                e(t.panelClass).removeClass(t.options.animateIn + " animated"), e(t.panelClass).eq(t.prevPanel).addClass("animated " + t.options.animateOut), t.callback(t.transitionInAnimateCSS, s)
            },
            transitionInAnimateCSS: function() {
                var t = this;
                t.options.autoHeight && t.adjustHeight(!1, t.getHeight()), t.transitionCSS(t.getTransitionMargin(), !t.loaded), e(t.panelClass).removeClass(t.options.animateOut + " animated"), e(t.panelClass).eq(t.nextPanel).addClass("animated " + t.options.animateIn), t.callback(t.options.callback, s)
            },
            transitionCSS: function(e, t) {
                var i = this;
                t && i.configureCSSTransitions("0", "0"), i.panelContainer.css({
                    "-webkit-transform": "translate3d(" + e + i.pSign + ", 0, 0)",
                    "-moz-transform": "translate3d(" + e + i.pSign + ", 0, 0)",
                    "-ms-transform": "translate3d(" + e + i.pSign + ", 0, 0)",
                    "-o-transform": "translate3d(" + e + i.pSign + ", 0, 0)",
                    transform: "translate3d(" + e + i.pSign + ", 0, 0)"
                }), t ? i.callback(function() {
                    i.configureCSSTransitions()
                }) : i.configureCSSTransitions()
            },
            transitionjQuery: function(e, t) {
                var i = this;
                t ? i.panelContainer.css("margin-left", e + i.pSign) : i.panelContainer.animate({
                    "margin-left": e + i.pSign
                }, {
                    easing: i.options.slideEaseFunction,
                    duration: i.options.slideEaseDuration,
                    queue: !1
                })
            },
            getHeighestPanel: function() {
                var t, i = this,
                    s = 0;
                return i.$panelClass.each(function() {
                    t = e(this).outerHeight(!0), s = t > s ? t : s
                }), i.options.autoHeight ? void 0 : s
            },
            verifyPanel: function() {
                var e = this,
                    t = !1;
                if (e.options.continuous)
                    if (e.nextPanel > e.panelCount) e.nextPanel = e.panelCount, e.setNextPanel(e.panelCount);
                    else if (e.nextPanel < -1) e.nextPanel = -1, e.setNextPanel(-1);
                else if (t || e.nextPanel !== e.panelCount && -1 !== e.nextPanel) t = !0, e.prepareTransition(e.nextPanel);
                else {
                    e.prepareTransition(e.nextPanel), e.updateClass(), clearTimeout(i);
                    var i = setTimeout(function() {
                        e.nextPanel === e.panelCount ? e.prepareTransition(0, !0, !0, !0) : -1 === e.nextPanel && e.prepareTransition(e.panelCount - 1, !0, !0, !0)
                    }, e.options.slideEaseDuration + 50)
                } else e.nextPanel === e.panelCount ? e.nextPanel = 0 : -1 === e.nextPanel && (e.nextPanel = e.panelCount - 1), e.prepareTransition(e.nextPanel)
            }
        };
        e.fn.liquidSlider = function(t) {
            return this.each(function() {
                var i = Object.create(n);
                i.init(t, this), e.data(this, "liquidSlider", i)
            })
        }, e.fn.liquidSlider.options = {
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
            swipeArgs: s
        }
    }(jQuery, window, document), sizeRegex = /(\/[0-9]{3,4}\/)/i, imageSizeBreakdownArray = [250, 350, 450, 550, 700, 950, 1200, 1553], productYmalRendered = !1, String.prototype.splice = function(e, t, i) {
        return this.slice(0, e) + i + this.slice(e + Math.abs(t))
    }, getUniqueStringArray = function(e) {
        var t = [];
        if (e.length > 0) {
            e = e.sort(), t = [e[0]];
            for (var i = 1; i < e.length; i++) e[i - 1].toLowerCase() !== e[i].toLowerCase() && t.push(e[i])
        }
        return t
    }, checkURLForString = function(e) {
        return window.location.href.indexOf(e) > -1 ? !0 : !1
    }, renderRecsHome = function(e) {
        var t = $(".peerius-rec");
        if (t.length > 0) {
            for (var i = t.length - 1; i >= 0; i--)
                if ("undefined" != typeof e[0].recs[i]) {
                    $(t[i]).attr("peerius-item-id", e[0].recs[i].id), $(t[i]).attr("href", e[0].recs[i].url), $(t[i]).find(".peerius-bg-img").css({
                        "background-image": "url('" + e[0].recs[i].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "')",
                        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e[0].recs[i].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "', sizingMethod='scale')"
                    });
                    var s = parseFloat(e[0].recs[i].prices.GBP.unitPrice).toFixed(2).replace(".00", "");
                    e[0].recs[i].prices.GBP.unitPrice != e[0].recs[i].prices.GBP.salePrice && (s = parseFloat(e[0].recs[i].prices.GBP.salePrice).toFixed(2).replace(".00", "")), $(t[i]).find(".p-rec-price").text("£" + s), e[0].recs[i].title.length > 12 ? ($(t[i]).find(".p-rec-title").text(e[0].recs[i].title.slice(0, 12) + "..."), $(t[i]).find(".p-rec-hover").text(e[0].recs[i].title)) : $(t[i]).find(".p-rec-title").text(e[0].recs[i].title)
                }
            $(".peerius-rec").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            })
        }
    }, renderRecsLanding = function(e) {
        var t = $(".peerius-rec");
        if (t.length > 0) {
            for (var i = t.length - 1; i >= 0; i--)
                if ("undefined" != typeof e[0].recs[i]) {
                    $(t[i]).attr("peerius-item-id", e[0].recs[i].id), $(t[i]).attr("href", e[0].recs[i].url), $(t[i]).find(".peerius-bg-img").css({
                        "background-image": "url('" + e[0].recs[i].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "')",
                        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e[0].recs[i].img.replace("/product/", "/global/").replace(sizeRegex, "/450/") + "', sizingMethod='scale')"
                    });
                    var s = parseFloat(e[0].recs[i].prices.GBP.unitPrice).toFixed(2).replace(".00", "");
                    e[0].recs[i].prices.GBP.unitPrice != e[0].recs[i].prices.GBP.salePrice && (s = parseFloat(e[0].recs[i].prices.GBP.salePrice).toFixed(2).replace(".00", "")), $(t[i]).find(".p-rec-price").text("£" + s), e[0].recs[i].title.length > 12 ? ($(t[i]).find(".p-rec-title").text(e[0].recs[i].title.slice(0, 12) + "..."), $(t[i]).find(".p-rec-hover").text(e[0].recs[i].title)) : $(t[i]).find(".p-rec-title").text(e[0].recs[i].title)
                }
            $(".peerius-rec").on("click", function() {
                Peerius.smartRecsClick($(this).attr("peerius-item-id"))
            })
        }
    }, renderRecsSearch = function(e) {
        if (0 == $(".you-may-also-like").length && "undefined" != typeof e[0].recs && 0 == $(".category-product-items .product").length) {
            $(".category-product-items").after($('<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent"><div class="grid-100 tablet-grid-100 mobile-grid-100 you-may-also-like five-column-recs"><h3 class="product-label">But you may be interested in</h3><ul class="ymal-slides grid-parent"></ul></div></div>'));
            for (var t = 0; t < e[0].recs.length && 5 > t; t++) {
                var i = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(i), i.append($('<a href="' + e[0].recs[t].url + '" peerius-item-id="' + e[0].recs[t].id + '" title="' + e[0].recs[t].title + '"><img src="' + e[0].recs[t].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + e[0].recs[t].title + '" class="grid-image full-opacity"><h3>' + e[0].recs[t].title + "</h3><p></p></a>")), e[0].recs[t].prices.GBP.salePrice == e[0].recs[t].prices.GBP.unitPrice ? i.find("p").text("£" + e[0].recs[t].prices.GBP.unitPrice) : i.find("p").html('<span class="recommendation-price price-strike-through">£' + e[0].recs[t].prices.GBP.unitPrice + ' </span><span class="recommendation-sale">£' + e[0].recs[t].prices.GBP.salePrice + "</span>")
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
    }, renderRecsProduct = function(e) {
        if (0 == $(".you-may-also-like").length && "undefined" != typeof e[0].recs) {
            $("#social").after($('<h3 class="product-label ymal-header">Others liked</h3><div class="grid-100 tablet-grid-100 mobile-grid-100 you-may-also-like"><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var t = 0; t < e[0].recs.length && 3 > t; t++) {
                var i = $('<li class="grid-33 mobile-grid-33 tablet-grid-33" style="display: list-item;"></li>');
                $(".product-details .ymal-slides").append(i), i.append($('<a href="' + e[0].recs[t].url + '" peerius-item-id="' + e[0].recs[t].id + '" title="' + e[0].recs[t].title + '"><img src="' + e[0].recs[t].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + e[0].recs[t].title + '" class="grid-image"></a>'))
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
    }, renderRecsBasket = function(e) {
        if (0 == $(".basket-recommendations-container").length && "undefined" != typeof e[0].recs) {
            $("#inner").append('<div class="grid-100 tablet-grid-100 mobile-grid-100 basket-recommendations-container five-column-recs grid-parent"></div>'), $(".basket-recommendations-container").html('<h3 class="basket-recommendations-label you-may-be-label">Others Like...</h3><div class="grid-100 tablet-grid-100 mobile-grid-100 group-images"></div>');
            for (var t = 0; t < e[0].recs.length && 5 > t; t++) {
                var i = $('<div class="grid-20 mobile-grid-50 tablet-grid-20 basket-recommendations range-product" id="' + e[0].recs[t].refCode + '" peerius-item-id="' + e[0].recs[t].id + '"></div>');
                $(".basket-recommendations-container .group-images").append(i);
                var s = $('<img class="grid-image"><span class="basket-recommendation-title">' + e[0].recs[t].title + '</span><span class="basket-recommendation-price">£' + e[0].recs[t].prices.GBP.unitPrice + "</span>");
                i.append(s), e[0].recs[t].prices.GBP.unitPrice != e[0].recs[t].prices.GBP.salePrice && (i.find(".basket-recommendation-price").addClass("price-strike-through"), i.append('<span class="basket-recommendation-sale-price">£' + e[0].recs[t].prices.GBP.salePrice + "</span>"))
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
    }, renderRecsErrorPage = function(e) {
        if (e[0].recs.length > 0) {
            $(".page-404").append($('<div class="grid-parent grid-100 tablet-grid-100 mobile-grid-100 you-may-also-like five-column-recs"><h3 class="product-label you-may-be-label grid-parent">You may be interested in...</h3><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var t = 0; t < e[0].recs.length && 5 > t; t++) {
                var i = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(i), i.append($('<a href="' + e[0].recs[t].url + '" peerius-item-id="' + e[0].recs[t].id + '" title="' + e[0].recs[t].title + '"><img src="' + e[0].recs[t].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + e[0].recs[t].title + '" class="grid-image full-opacity"><h3>' + e[0].recs[t].title + "</h3><p></p></a>")), e[0].recs[t].prices.GBP.salePrice == e[0].recs[t].prices.GBP.unitPrice ? i.find("p").text("£" + e[0].recs[t].prices.GBP.unitPrice) : i.find("p").html('<span class="recommendation-price price-strike-through">£' + e[0].recs[t].prices.GBP.unitPrice + ' </span><span class="recommendation-sale">£' + e[0].recs[t].prices.GBP.salePrice + "</span>")
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
    }, renderRecsWishlist = function(e) {
        $(".peerius-rec");
        if (e[0].recs.length > 0) {
            $(".wishlist-exterior-wrapper").append($('<div class="grid-parent grid-100 tablet-grid-100 mobile-grid-100 grid-parent you-may-also-like five-column-recs"><h3 class="product-label you-may-be-label grid-parent">You may be interested in...</h3><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var t = 0; t < e[0].recs.length && 5 > t; t++) {
                var i = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(i), i.append($('<a href="' + e[0].recs[t].url + '" peerius-item-id="' + e[0].recs[t].id + '" title="' + e[0].recs[t].title + '"><img src="' + e[0].recs[t].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + e[0].recs[t].title + '" class="grid-image full-opacity"><h3>' + e[0].recs[t].title + "</h3><p></p></a>")), e[0].recs[t].prices.GBP.salePrice == e[0].recs[t].prices.GBP.unitPrice ? i.find("p").text("£" + e[0].recs[t].prices.GBP.unitPrice) : i.find("p").html('<span class="recommendation-price price-strike-through">£' + e[0].recs[t].prices.GBP.unitPrice + ' </span><span class="recommendation-sale">£' + e[0].recs[t].prices.GBP.salePrice + "</span>")
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
    }, renderRecsAccount = function(e) {
        $(".peerius-rec");
        if (e[0].recs.length > 0) {
            $("#inner").append($('<div class="grid-parent grid-100 tablet-grid-100 mobile-grid-90 mobile-prefix-5 mobile-suffix-5 grid-parent you-may-also-like five-column-recs"><h3 class="product-label you-may-be-label grid-parent">OTHERS LIKE...</h3><ul class="ymal-slides grid-parent"></ul></div>'));
            for (var t = 0; t < e[0].recs.length && 5 > t; t++) {
                var i = $('<div class="product grid-20 tablet-grid-33 mobile-grid-50"></div>');
                $(".ymal-slides").append(i), i.append($('<a href="' + e[0].recs[t].url + '" peerius-item-id="' + e[0].recs[t].id + '" title="' + e[0].recs[t].title + '"><img src="' + e[0].recs[t].img.replace(sizeRegex, "/250/").replace("/product/", "/global/") + '" alt="' + e[0].recs[t].title + '" class="grid-image full-opacity"><h3>' + e[0].recs[t].title + "</h3><p></p></a>")), e[0].recs[t].prices.GBP.salePrice == e[0].recs[t].prices.GBP.unitPrice ? i.find("p").text("£" + e[0].recs[t].prices.GBP.unitPrice) : i.find("p").html('<span class="recommendation-price price-strike-through">£' + e[0].recs[t].prices.GBP.unitPrice + ' </span><span class="recommendation-sale">£' + e[0].recs[t].prices.GBP.salePrice + "</span>")
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
        var e = function(e, t, i, s, n) {
            if (n = "undefined" != typeof n ? n : "750049776", "function" != typeof i || i() !== !1) {
                values = [], names = [];
                var a = 0;
                for (a; a < t.length; a++) values.push(t[a].value), names.push(t[a].name);
                var o = {
                    method: "/user/create",
                    queryNames: ["email"],
                    queryValues: [e],
                    attributeValues: values,
                    attributeNames: names,
                    httpVerb: "post"
                };
                $.ajax({
                    url: "/services/ecrelay.asmx/Relay",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(o),
                    dataType: "json",
                    success: function(t) {
                        var i = "new";
                        t.d.indexOf("OBJECT_ALREADY_EXISTS") > -1 && (i = "existing", o.method = "/user/updateProfileByEmail", $.ajax({
                            url: "/services/ecrelay.asmx/Relay",
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify(o),
                            dataType: "json",
                            success: function() {}
                        })), o.method = "/membership/subscribeByEmail", o.queryNames = ["email", "groupId", "subscriptionMode"], o.queryValues = [e, n, "OPT_IN"], o.attributeVales = null, o.attributeNames = null, $.ajax({
                            url: "/services/ecrelay.asmx/Relay",
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify(o),
                            dataType: "json",
                            success: function() {
                                "function" == typeof s && s(i)
                            }
                        })
                    }
                })
            }
        };
        return {
            subscribeByEmail: e
        }
    }(),
    postcodeAnywhere = function() {
        var e = {
                key: "FU43-NY28-TA13-EH87",
                preferredLanguage: "English",
                userName: "FRENC11122",
                filter: "None"
            },
            t = function(t, i) {
                $.getJSON("https://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/RetrieveById/v1.30/json3.ws?callback=?", {
                    Key: e.key,
                    Id: t,
                    PreferredLanguage: e.preferredLanguage,
                    UserName: e.userName
                }, function(e) {
                    i(e.Items[0])
                })
            },
            i = function(t, i) {
                $.getJSON("https://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/Find/v1.10/json3.ws?callback=?", {
                    Key: e.key,
                    SearchTerm: t,
                    PreferredLanguage: e.preferredLanguage,
                    Filter: e.filter,
                    UserName: e.userName
                }, function(e) {
                    1 === e.Items.length && "undefined" != typeof e.Items[0].Error || 0 === e.Items.length ? i(!1, e) : i(!0, e)
                })
            };
        return {
            findPostcode: i,
            findAddress: t
        }
    }(),
    mainModule = function() {
        var e = {};
        miniBasket = null;
        var t = [],
            i = $(""),
            s = function() {
                $(".nav-option a").removeClass("is-active"), $(".slide-right-list").removeClass("slide-list-visible"), $(".left-draw-scroll-indicator").fadeOut("slow"), $(".left-draw").removeClass("is-subdraw-visible"), $(".is-draw-visible .nav-wrapper nav > ul").removeClass("is-inactive")
            },
            n = function(e) {
                var t = $(".drawBtn");
                t.hasClass("selected") || e ? ($(".left-draw").removeClass("is-draw-visible"), $(".main-content, .marketing-message").removeClass("draw-visible-main-content"), t.removeClass("selected")) : ($(".left-draw").addClass("is-draw-visible"), $(".main-content, .marketing-message").addClass("draw-visible-main-content"), t.addClass("selected"))
            },
            a = function(e, t) {
                setTimeout(function() {
                    e.addClass("visuallyHidden")
                }, t + 100)
            },
            o = function() {
                $("ul.product-sizes li").each(function() {
                    $(this).text().length > 5 && $(this).css("min-width", "65px")
                })
            },
            r = function() {
                var e = window.location.pathname;
                if ("/" !== e) {
                    var t = _.find($(".category-nav-list li a"), function(t) {
                        return -1 != $(t).attr("href").toLowerCase().indexOf(e.toLowerCase())
                    });
                    t && $(t).length > 0 && $(t).addClass("current")
                }
            },
            l = function() {
                if ($(".basket-items li").length > 3) {
                    var e = 0;
                    $(".basket-items li").each(function(t) {
                        t > 2 && ($(this).remove(), e++)
                    }), $("ul.basket-items").after("<div id='mini-basket-overflow' style=''><a href='/basket.htm'>+ " + e + " more item" + (e > 1 ? "s" : "") + " in bag</a></div>"), $(".go-to-basket").text("VIEW FULL SHOPPING BAG")
                }
            },
            c = function() {
                var e = /( )(l)(?:$| )/i,
                    t = /( )(r)(?:$| )/i;
                $("div.product-sizes").each(function() {
                    for (var i = 0; i < $(this).find(".size").length; i++) {
                        var s = $($(this).find(".size")[i]); - 1 != s.text().toLowerCase().search(e) ? s.addClass("long grid-parent") : -1 != s.text().toLowerCase().search(t) && s.addClass("regular grid-parent")
                    }
                    $(this).find(".regular").wrapAll('<ul class="product-sizes-split regular-size-list"></ul>'), $(this).find(".long").wrapAll('<ul class="product-sizes-split long-size-list"></ul>').closest().insertAfter(".regular-size-list")
                });
                var i = $(".regSize").text(),
                    s = $(".longSize").text();
                $("ul.regular-size-list").before('<h3 class="product-label-sizes">Leg Length: ' + i + "</h3>"), $("ul.long-size-list").before('<h3 class="product-label-sizes">Leg Length: ' + s + "</h3>"), $(".regSize, .longSize").parent().addClass("hidden"), $("div.product-sizes").each(function() {
                    var e = $(this);
                    e.find(".long-size-list").appendTo(e.find("ul.product-sizes")), e.find(".regular-size-list").insertAfter(e.find("ul.product-sizes h3").eq(0))
                })
            },
            d = function(e, t) {
                var i = tcp_env.dynamic_image_settings.BaseUrl;
                t && (i += "content-images/", i = i + e.attr("season") + "/250"), e.attr("img-src", i + e.attr("img-src"))
            },
            u = function(e) {
                var t = "250",
                    i = "250",
                    s = "250",
                    n = "250";
                return 480 > e ? (t = "250", i = "350", s = "350", n = "450") : e >= 480 && 860 > e ? (t = "450", i = "550", s = "700", n = "950") : e >= 860 && 980 > e ? (t = "250", i = "450", s = "700", n = "950") : e > 979 && 1440 > e ? (t = "350", i = "550", s = "950", n = "1200") : e > 1439 && 1999 >= e ? (t = "450", i = "700", s = "950", n = "1553") : e > 1999 && (t = "550", i = "950", s = "1553", n = "1553"), [t, i, s, n]
            },
            h = function() {
                if (homepageWindowWidth = $(window).width(), !(homepageCurrentWindowWidth > homepageWindowWidth && homepageWindowWidth > 768)) {
                    var e = u(homepageWindowWidth),
                        i = t;
                    p(i, e), homepageCurrentWindowWidth = homepageWindowWidth
                }
            },
            p = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var i = $(e[t]);
                    if (!i.hasClass("range-product"))
                        if (void 0 != i.css("background-image") && "none" != i.css("background-image")) {
                            for (var s = i.css("background-image"), n = i.width(), a = 0; a < imageSizeBreakdownArray.length; a++)
                                if (n < imageSizeBreakdownArray[a]) {
                                    i.css("background-image", s.replace(sizeRegex, "/" + imageSizeBreakdownArray[a] + "/"));
                                    break
                                }
                        } else {
                            var s = i.attr("src");
                            (void 0 == s || 0 == s.length) && (s = i.attr("img-src"));
                            for (var n = i.width(), a = 0; a < imageSizeBreakdownArray.length; a++)
                                if (n < imageSizeBreakdownArray[a]) {
                                    i.attr("src", s.replace(sizeRegex, "/" + imageSizeBreakdownArray[a] + "/"));
                                    break
                                }
                        }
                }
            },
            f = function() {
                if (rangeWindowWidth = $(window).width(), !(rangeCurrentWindowWidth > rangeWindowWidth)) {
                    var e = "700";
                    600 > rangeWindowWidth ? e = "350" : rangeWindowWidth >= 860 && 980 > rangeWindowWidth ? e = "450" : rangeWindowWidth > 979 && 2e3 > rangeWindowWidth ? e = "550" : rangeWindowWidth > 1999 && (e = "700");
                    for (var t = $(".category-full-width-banner .range-image"), i = 0; i < t.length; i++) {
                        var s = $(t[i]);
                        if (-1 != s.attr("img-src").search(sizeRegex)) {
                            var n = s.attr("img-src");
                            n = n.replace(sizeRegex, "/" + e + "/"), s.attr("src", n)
                        }
                    }
                    rangeCurrentWindowWidth = rangeWindowWidth
                }
            },
            g = function(e) {
                var t = $(window).height() + $(window).scrollTop(),
                    i = 0;
                if (0 != $("#newFooter").length && 0 != $(".footer-list-links").length && (i = $("#newFooter").height() + parseInt($("#newFooter").css("padding-top")) + parseInt($("#newFooter").css("padding-bottom"))), t / ($(document).height() - i) > .9 || e) {
                    $(".landing-container").removeClass("visuallyHidden");
                    for (var s = 0; 4 > s; s++) $($(".archive-post.visuallyHidden")[s]).addClass("active-tile"), $($(".archive-post.visuallyHidden")[s]).find("img").attr("src", $($(".archive-post.visuallyHidden")[s]).find("img").attr("img-src"));
                    $(".active-tile").removeClass("visuallyHidden"), $(".active-tile").css("opacity", "1").removeClass("active-tile")
                }
            },
            m = function() {
                var e = {},
                    t = "";
                return t = $(".product-info h3").length > 0 ? $(".product-info h3").text() : $(".product-info h2").length > 0 ? $(".product-info h2").text() : $(".product-info h1").text(), e.socialProductDescription = $.trim(t), e.socialProductDetails = $.trim($($(".product-accordion section")[0]).find("p").text()), e.socialUrlhostname = tcp_env.site_base, e.socialUrlProdcode = 0 != $(".buy-off-container").length && "undefined" != typeof currentObjId ? currentObjId : $("#productId").attr("value"), e.socialUrlProdName = e.socialProductDescription.replace(/\s/g, ""), e.socialUrlShare = tcp_env.site_base + "product/" + e.socialUrlProdcode + "/" + e.socialUrlProdName + ".htm", 0 != $(".buy-off-container").length && "undefined" != typeof currentObjId && $(".twitter-social").attr("href", "//twitter.com/share?url=" + e.socialUrlShare + "&text=" + e.socialProductDescription + "%20by%20TOAST:%20"), e
            },
            v = function() {
                if ($("#social a").length > 0) {
                    var e = m();
                    $(".pinterest-social").click(function(t) {
                        t.preventDefault();
                        var i = $(".selected-swatch").attr("src").replace(sizeRegex, "/250/");
                        $(".pinterest-social").attr("href", "//pinterest.com/pin/create/button/?url=" + e.socialUrlShare + "&media=" + i + "&description=" + e.socialProductDescription + " by TOAST"), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + e.socialProductDescription, "Pinterest"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Pinterest"])
                    }), $(".facebook-social").click(function(t) {
                        t.preventDefault();
                        var i = $(".selected-swatch").attr("src"),
                            s = "";
                        0 != $(".buy-off-container").length && "undefined" != typeof currentObjId ? (i = i.replace(sizeRegex, "/250/"), s = "http://www.facebook.com/sharer.php?m2w&s=100&p[title]=" + e.socialProductDescription + "%20by%20TOAST&p[summary]=" + e.socialProductDetails + "&p[url]=" + e.socialUrlShare + "&p[images][0]=http:" + i + ",%20sharer,toolbar=0,status=0,width=1200,height=1200") : (s = "http://www.facebook.com/sharer.php?s=100&p[title]=" + e.socialProductDescription + "%20by%20TOAST&p[summary]=" + e.socialProductDetails + "&p[url]=" + e.socialUrlShare + "&p[images][0]=http:" + i + ",%20sharer,toolbar=0,status=0,width=250,height=250", i = i.replace(sizeRegex, "/250/")), $(".facebook-social").attr("href", s.replace(/\s/g, "%20")), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + e.socialProductDescription, "Facebook"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Facebook"])
                    }), $(".pinterest-social").popupWindow({
                        height: 400,
                        width: 800,
                        centerBrowser: 1
                    }), $(".facebook-social, .twitter-social").popupWindow({
                        height: 350,
                        width: 670,
                        centerBrowser: 1
                    }), $(".twitter-social").attr("href", "//twitter.com/share?url=" + e.socialUrlShare + "&text=" + e.socialProductDescription + "%20by%20TOAST:%20"), $(".twitter-social").click(function(t) {
                        t.preventDefault(), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + e.socialProductDescription, "Twitter"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Twitter"])
                    })
                }
            },
            b = function() {
                Tipped.create(".recentlyViewed ul li a, .ymal img, .browse-left, .browse-right, .product-swatch, .mapTooltip, .fourth-row .cutout-image, .fourth-row .homepage-image, .group-images .range-product img", {
                    skin: "toast",
                    target: "mouse",
                    hook: "topmiddle",
                    showDelay: 250
                })
            },
            y = function() {
                Tipped.remove(".recentlyViewed ul li a, .ymal img, .browse-left, .browse-right, .product-swatch, .fourth-row .cutout-image, .fourth-row .homepage-image, .group-images .range-product img")
            },
            w = function(e, t, i) {
                var s = {
                    method: "/membership/subscribeByEmail",
                    queryNames: ["email", "groupId", "subscriptionMode"],
                    queryValues: [e, t, "OPT_IN"],
                    attributeValues: null,
                    attributeNames: null,
                    httpVerb: "POST"
                };
                $.ajax({
                    url: "/services/ecrelay.asmx/Relay",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(s),
                    dataType: "json",
                    success: function(e) {
                        "undefined" != typeof i && i(e)
                    }
                })
            },
            N = function(e, t, i, s) {
                var n = {
                    method: "/user/create",
                    queryNames: ["email"],
                    queryValues: [e],
                    attributeValues: t,
                    attributeNames: i,
                    httpVerb: "post"
                };
                $.ajax({
                    url: "/services/ecrelay.asmx/Relay",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(n),
                    dataType: "json",
                    success: function(n) {
                        if (n.d.indexOf("OBJECT_ALREADY_EXISTS") > 0) {
                            var a = {
                                method: "/user/updateProfileByEmail",
                                queryNames: ["email"],
                                queryValues: [e],
                                attributeValues: t,
                                attributeNames: i,
                                httpVerb: "post"
                            };
                            $.ajax({
                                url: "/services/ecrelay.asmx/Relay",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(a),
                                dataType: "json",
                                success: function() {
                                    w(e, 750049776), "undefined" != typeof s && s()
                                }
                            })
                        } else w(e, 750049776), "undefined" != typeof s && s()
                    }
                })
            },
            k = function() {
                var e = {};
                return function(t, i, s) {
                    s || (s = "Don't call this twice without a uniqueId"), e[s] && clearTimeout(e[s]), e[s] = setTimeout(t, i)
                }
            }();
        if ($(window).resize(function() {
                k(function() {
                    $(window).width() < 1023 ? y() : $(window).width() > 1024 && b()
                }, 500, "windowResize")
            }), $(".left-side-nav").addClass("grid-60 tablet-grid-60 grid-parent"), $(".right-side-nav").addClass("grid-40 tablet-grid-40 grid-parent"), $(".right-side-nav ul").addClass("search-box grid-50 tablet-grid-50 mobile-grid-100 grid-parent"), $("#country-selector").before('<ol class="user-options grid-25 tablet-grid-25 mobile-grid-100 grid-parent"></ol>'), $("#toastFont").length > 0 && ($("body").append($('<a class="hide-on-mobile" href="#" id="more-content-arrow" style="display: inline;"><span id="more-content-arrow-hover" style="opacity: 0;"></span>To Top</a>')), $("#more-content-arrow").hover(function() {
                $("#more-content-arrow-hover").stop().animate({
                    opacity: 1
                }, 600, "linear")
            }, function() {
                $("#more-content-arrow-hover").stop().animate({
                    opacity: 0
                }, 700, "linear")
            }).click(function(e) {
                e.preventDefault(), _gaq.push(["_trackEvent", "More Content Arrow", "Click", "More Content Arrow"])
            }), $(window).scroll(function() {
                var e = $(window).scrollTop();
                e > 500 ? $("#more-content-arrow").fadeOut(300) : $("#more-content-arrow").fadeIn(300)
            })), $(document).ready(function() {
                function e() {
                    if ("uk" === tcp_env.country_code.toLowerCase()) {
                        var e = tcp_env.basket.subtotal,
                            t = parseInt(125 - e);
                        "undefined" != typeof toast_config && toast_config.in_sale === !1 && (t > 0 && e > 84 && 0 === $("#mini-basket-upsell").length && 0 === $("#basket-upsell").length ? ($(".mini-basket-sub-total").before("<div id='mini-basket-upsell' style='margin-top:15px; color: #186aa2; text-align: center; text-transform: uppercase; letter-spacing: 1px' class='medFont'>Add £" + t + " more to your basket for free UK delivery and returns</div>"), $("#submitBasket").prepend("<div id='basket-upsell' style='margin-bottom:15px; color: #186aa2; text-align: center; text-transform: uppercase; letter-spacing: 1px' class='medFont grid-100 tablet-grid-100 mobile-grid-100 grid-parent'>Add £" + t + " more to your basket for free UK delivery and returns</div>"), $("#continueShopping").css({
                            "float": "right"
                        })) : 84 > e && $("#mini-basket-upsell").length > 0 && $("#mini-basket-upsell").remove())
                    }
                }

                function t() {
                    for (var e = {
                            skuList: []
                        }, t = tcp_env.basket.line_items, i = 0; i < t.length; i++) {
                        var s = t[i].product;
                        e.skuList.push(s.id)
                    }
                    $.ajax({
                        url: "/services/stockservices.asmx/GetProductVariantStock",
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(e),
                        dataType: "json",
                        success: function(e) {
                            var t = $.parseJSON(e.d);
                            if (null !== t)
                                for (var i = 0; i < t.stocklist.length; i++)
                                    for (var s = t.stocklist[i], n = 0; n < s.sizesInStock.length; n++) {
                                        var a = s.sizesInStock[n];
                                        a.stlev < 5 && a.stlev > 0 && $("#mini-basket [data-sku=" + a.sku + "] .prod-error").html("Only " + a.stlev + " left in stock")
                                    }
                        }
                    })
                }

                function o() {
                    if ("undefined" != typeof $(".selected .new-sub-nav").offset())
                        if ($(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 20)
                            for (; $(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 10;) $(".selected .new-sub-nav").css({
                                left: "-=10px"
                            });
                        else $(".selected .new-sub-nav").css({
                            left: "-10px"
                        }), $(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 20 && o()
                }
                $.browser.device = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|ios|mobile|opera mobi|opera|tab|touchpad|nexus 7|nexus 10|gt-n|pad|gt-p|ideatab|sm-t|hp slate|xoom|aurora-ii|me301t|a1-810|a1-811|nookhd|pmp5880d|quantum7|kindle fire|sgp3|nook hd|transformer|at300|cobalt|momo|sweet m|archos|nook|nabi2|mz60|vega|slider|mid7|kftt|streak|lepanii|htc_flyer|jro03h|bntv400|a500|kftt build|m805|pom727mc|cm_tenderloin/i.test(navigator.userAgent.toLowerCase()), $(".product-size-charts").click(function() {
                        _gaq.push(["_trackEvent", "beta", "product page size chart clicked"])
                    }), $.browser.device === !0 && $(".nav-option").click(function(e) {
                        e.preventDefault(), $that = $(this), $(".nav-option").each(function() {
                            $(this) !== $that && $(this).click(function(e) {
                                e.preventDefault(), $(this).trigger("hover"), $(this).unbind("click")
                            })
                        }), $(this).trigger("hover"), $(this).unbind("click")
                    }),
                    function() {
                        if ("undefined" != typeof tcp_env) {
                            var e = tcp_env.country_code;
                            "undefined" == typeof $.cookie("welcome-served") && ("us" === e ? ($("body").addClass("welcome"), $("#mat-us").show()) : "eu" === e && ($("body").addClass("welcome"), $("#mat-eu").show())), $(".continue-shopping, .mat-close").click(function() {
                                $("#welcome-backdrop").fadeOut(function() {
                                    $.cookie("welcome-served", "true", {
                                        expires: 999,
                                        path: "/"
                                    }), $("body").removeClass("welcome")
                                })
                            }), $(".site-chooser").click(function() {
                                $("#welcome-mat").fadeOut(function() {
                                    $("#country-popup").fadeIn(), $("#mat-select a").click(function() {
                                        $.cookie("welcome-served", "true", {
                                            expires: 999,
                                            path: "/"
                                        })
                                    })
                                })
                            })
                        }
                    }(),
                    function() {
                        var e = 0,
                            t = function() {
                                200 > e && (miniBasket ? miniBasket.data("tcplMinibasket").refreshBasket() : (e++, setTimeout(t, 25)))
                            };
                        t()
                    }(), "undefined" == typeof $.cookie("cookie-banner-dismissed17") && ($.cookie("cookie-banner-dismissed17", "true", {
                        expires: 999,
                        path: "/"
                    }), $("body").prepend("<div id='cookie-banner'>TOAST uses cookies to improve your experience of shopping online. In using the site you have agreed to our cookies policy. <a href='/content/help/help.htm?helpSection=cookie-policy'>Learn more.</a> <a href='#' id='cookie-dismiss'><span class='sprite close'></span></a>"), $("#cookie-dismiss").click(function(e) {
                        e.preventDefault(), $("#cookie-banner").remove()
                    })), $("#ctl00_ctl01_btnSearch").click(function(e) {
                        "search" == $("#ctl00_ctl01_txtSearch").val() && e.preventDefault()
                    }), $(".main-content .category-nav-list").removeClass("max-width-1000"), $(".login-item").appendTo($(".right-side-nav .user-options")), setTimeout(function() {
                        $("#topBasketContainer").appendTo($(".right-side-nav .user-options"))
                    }, 50), $("#newFooter a").click(function() {
                        var e = "";
                        if ($(this).parents("#socialLinks").length > 0) e = $(this).attr("href").split("."), e = e[1];
                        else if ($(this).parents("#mainLinks").length > 0) {
                            var t = $(this).find("span").text();
                            e = $(this).text(), e = e.replace(t, ""), e = $.trim(e)
                        } else e = $(this).text();
                        _gaq.push(["_trackEvent", "Footer Link", "Click", e])
                    }), $(".new-cat-nav .nav-option .relative > a").click(function() {
                        _gaq.push(["_trackEvent", "Top Nav", "Click", $(this).text()])
                    }), $(".new-cat-nav .new-sub-nav-list a").click(function() {
                        _gaq.push(["_trackEvent", "Sub Nav", "Click", $(this).parents(".nav-option").find(".relative > a").text() + " > " + $(this).text()])
                    }), $("#topBasketContainer").length > 0 && "undefined" != typeof $("#topBasketContainer").minibasket && (miniBasket = $("#topBasketContainer").minibasket({
                        afterRemoveItem: function() {
                            document.body.style.cursor = "default"
                        },
                        refreshCompleted: function() {
                            jQuery.isFunction(l) && l(), e(), t()
                        }
                    })), $(".product-details .recentlyViewed li").removeClass("grid-20 tablet-grid-20 mobile-grid-20").addClass("grid-33 tablet-grid-33 mobile-grid-33 visuallyHidden");
                for (var c = 0; c < $(".product-details .recentlyViewed li").length; c++) 3 > c && $($(".product-details .recentlyViewed li")[c]).removeClass("visuallyHidden");
                var u = 0;
                $("header .nav-bar").length > 0 && "undefined" != typeof $("header .nav-bar").offset && (u = $("header .nav-bar").offset().top), $(".category-container .category-nav-list").removeClass("hide-on-tablet"), $(".landingPage a").click(function() {
                    try {
                        var e = $(this).attr("href");
                        _gaq.push(["_trackEvent", "Landing Page Panel", "Click", e])
                    } catch (t) {}
                }), $(".close-nav-btn").click(function(e) {
                    e.preventDefault(), $(".category-nav .nav-option a").hasClass("selected") && ($(".category-nav .nav-option a").removeClass("selected"), i.css({
                        height: "0px",
                        opacity: 0
                    }), a(i, 450))
                }), $("body").on("click", ".product-sizes li", function(e, t) {
                    if ("undefined" == typeof t) {
                        var i = $(this).text();
                        if (_gaq.push(["_trackEvent", "Size", "Click", i]), $(this).hasClass("regular") || $(this).hasClass("long") || $(this).hasClass("short") || $(this).hasClass("product-sizes-split")) {
                            var s = $(this).html().split(" ");
                            s = s[1], _gaq.push(["_trackEvent", "Leg Length", "Click", s])
                        }
                    }
                }), $("body").on("change", ".product-qty select", function() {
                    var e = $(this).val();
                    _gaq.push(["_trackEvent", "Quantity", "Select", e])
                }), $("body").on("click", ".product-swatches li", function(e, t) {
                    if ("undefined" == typeof t) {
                        var i = $(this).find("img").attr("alt");
                        _gaq.push(["_trackEvent", "Colour", "Click", i])
                    }
                }), $("body").on("change", ".basketqtylist", function() {
                    var e = $(this).val(),
                        t = $(this).parent().parent().find(".basketProductDescription a").attr("title");
                    _gaq.push(["_trackEvent", "Change Quantity", e, t])
                }), $("body").on("click", "#basketTableMain .basketTableTd input", function() {
                    var e = $(this).parent().parent().find(".basketProductDescription a").attr("title");
                    _gaq.push(["_trackEvent", "Remove Product", "Click", e])
                }), $("#promobutton").click(function() {
                    var e = $("#promoForm input").val();
                    e.length > 0 && _gaq.push(["_trackEvent", "Promotional Code", "Enter", e])
                }), $(".promoField").keydown(function(e) {
                    13 == e.which && promoCode.length > 0 && _gaq.push(["_trackEvent", "Promotional Code", "Enter", promoCode])
                }), $("body").on("click", ".basket-recommendations-container .basket-recommendations", function() {
                    var e = $(this).find("img").attr("alt");
                    _gaq.push(["_trackEvent", "Others Like", "Click", e])
                }), $("#continueShopping").click(function() {
                    _gaq.push(["_trackEvent", "Continue Shopping", "Click", "Continue Shopping"])
                }), $(".checkoutButton").click(function() {
                    _gaq.push(["_trackEvent", "Secure Checkout", "Click", "Secure Checkout"])
                });
                var h = $('<div class="left-draw hide-on-desktop"><div class="nav-wrapper"><nav><ul class="search-nav nav-draw-ul"></ul><ul class="menu-nav nav-draw-ul"></ul><ul class="help-nav nav-draw-ul"></ul></nav></div></div>');
                $("body").prepend(h), $(".search-nav").append($('<li><form action="#"><input name="ctl01$txtSearch" type="search" id="ctl01_txtSearch" class="searchBox-Nav" /></form></li>')), $(".menu-nav").append("<li class='nav-option left-draw-basket'><a href='/basket.htm' associate='sub-list-basket'>Basket " + ($(".basket-items .qty").length > 0 ? $(".basket-items .qty").html() : "(0)") + "</a></li><li class='nav-option mobile-nav-checkout'><a href='/checkout/login.htm'>Checkout</a></li>"), $(".help-nav").append('<li class="hide-on-desktop"><a href="/content/wishlist/wishlist.htm">Wishlist (<span class="wishlist-qty">0</span>)</a></li><li class="hide-on-desktop"><a href="/account.htm?mode=myaccount">My Account</a></li>'), $(".help-nav #topBasketContainer").remove(), $("<li>" + $(".shop-section a") + "</li>"), $(".left-draw .searchBox-Nav").val("search"), $(".left-draw .searchBox-Nav").on("focus", function() {
                    "search" == $(this).val() && $(this).val("")
                }).on("focusout", function() {
                    "" == $(this).val() && $(this).val("search")
                });
                var p = !1;
                $("body").append("<div id='newHeaderBlackout' class='visuallyHidden'></div>"), $(".new-cat-nav > li:not(.separator):not(.new-cat-nav-new)").hover(function() {
                    $(this).find(".new-sub-nav").length > 0 && (p = !0, $(this).hasClass("selected") || $(".new-cat-nav > li").removeClass("selected"), $(".fixedRight").removeClass("fixedRight"), $(this).addClass("selected"), $("#newHeaderBlackout").removeClass("visuallyHidden"), $("#newHeaderBlackout").addClass("show"), o())
                }, function() {
                    p = !1, setTimeout(function() {
                        $(".new-cat-nav li.selected").length < 1 && $("#newHeaderBlackout").addClass("visuallyHidden"), p === !1 && ($("#newHeaderBlackout").removeClass("show"), setTimeout(function() {
                            p === !1 && $("#newHeaderBlackout").addClass("visuallyHidden")
                        }, 200), $(".new-cat-nav > li").removeClass("selected"))
                    }, 200)
                }), $(".separator").on("mouseenter mouseleave", function(e) {
                    $(this).prev("li").trigger(e.type)
                }), $(".close-tablet-menu-btn").click(function(e) {
                    e.preventDefault(), p = !1, $(".new-cat-nav > li").removeClass("selected"), setTimeout(function() {
                        $("#newHeaderBlackout").addClass("visuallyHidden")
                    }, 200)
                });
                var g = "",
                    m = 0;
                $(".new-cat-nav .nav-option").each(function() {
                    var e = $(this).find("> div > a");
                    if (g += "<li class='nav-option'><a href='" + e.attr("href") + "' " + ("undefined" != typeof e.attr("style") ? "style='" + e.attr("style") + "'" : "") + ">" + e.text() + "</a></li>", $(this).find(".new-sub-nav li").length > 0) {
                        var t = "<li><ul class='mobile-sub-nav'>";
                        $(this).find(".new-sub-nav .main-link, .new-sub-nav .new-sub-nav-list-heading").each(function() {
                            var e = $(this).find("a");
                            if ($(this).hasClass("new-sub-nav-list-heading")) {
                                m++, t += "<li class='nav-option subNavItem" + m + "' id='" + $(this).text() + "'><a href='#' class='mobile-sub-list-heading'>+ " + $(this).text() + "</a></li>";
                                var i = "<li id='" + $(this).text() + "-sub'><ul class='mobile-sub-list' >";
                                $(this).parent().parent().parent().find("[data-parent=" + $(this).data("category") + "]").each(function() {
                                    i += "<li class='nav-option'><a href='" + $(this).find("a").attr("href") + "' " + ("undefined" != typeof $(this).find("a").attr("style") ? "style='" + $(this).find("a").attr("style") + "'" : "") + ">- " + $(this).text() + "</a></li>"
                                }), t += i + "</ul></li>"
                            } else t += "<li class='nav-option'><a href='" + e.attr("href") + "' " + ("undefined" != typeof e.attr("style") ? "style='" + e.attr("style") + "'" : "") + ">" + e.text() + "</a></li>"
                        }), g += t + "</ul></li>"
                    }
                }), $(".menu-nav").prepend(g), $(".mobile-sub-nav:first").prepend("<li>" + $("#Footwear-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Footwear").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li>" + $("#Accessories-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Accessories").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li>" + $("#Clothing-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Clothing").html() + "</li>"), $("#Footwear-sub").remove(), $("#Footwear").remove(), $("#Accessories-sub").remove(), $("#Accessories").remove(), $("#Clothing-sub").remove(), $("#Clothing").remove(), $(".menu-nav > li > a").click(function(e) {
                    e.preventDefault();
                    var t = "Click";
                    $(this).parent().hasClass("mobile-nav-expanded") ? window.location.href = $(this).attr("href") : ($(".mobile-nav-expanded").removeClass("mobile-nav-expanded"), $(this).parent().addClass("mobile-nav-expanded"), t = "Expand"), _gaq.push(["_trackEvent", "Mobile Top Nav", t, $(this).text()])
                }), $(".mobile-sub-list-heading").click(function(e) {
                    e.preventDefault();
                    var t = "Contract",
                        i = $(this).text().replace("+ ", "");
                    $(this).parent().hasClass("mobile-sub-nav-expanded") ? $(this).parent().removeClass("mobile-sub-nav-expanded") : ($(".mobile-sub-nav-expanded").removeClass("mobile-sub-nav-expanded"), $(this).parent().addClass("mobile-sub-nav-expanded"), t = "Expand"), _gaq.push(["_trackEvent", "Mobile Sub Accordion", t, $(this).parent().parent().parent().prev().text() + " > " + i])
                }), $(".mobile-sub-list > li > a, .mobile-sub-nav > .nav-option > a:not(.mobile-sub-list-heading)").click(function() {
                    var e = $(this).text().replace("- ", ""),
                        t = $(this).parents(".mobile-sub-list").length > 0 ? $(this).parent().parent().parent().prev().parent().parent().prev().text() : $(this).parent().parent().parent().prev().text();
                    _gaq.push(["_trackEvent", "Mobile Sub Nav", "Click", t + " > " + e])
                }), $(".nav-wrapper").click(function(e) {
                    e.stopPropagation(), s()
                }), $("html").click(function() {
                    n(!0)
                }), $(".drawBtn").click(function(e) {
                    e.preventDefault(), e.stopPropagation(), n(!1)
                }), $(".left-draw-follow").click(function(e) {
                    e.preventDefault(), $("html, body").animate({
                        scrollTop: $(document).height()
                    }, 0), n(!1)
                });
                var y = $("#mini-basket");
                if ($(".nav-bar .basket-items").hover(function() {
                        if ($(this).addClass("hover-mini-bag"), $(".basket-items li").length > 0) {
                            y.css("top", $("#topBasketContainer").offset().top - $(window).scrollTop() + 25);
                            var e = $(window).width() - ($("#topBasketContainer").offset().left + $("#topBasketContainer").width());
                            $("#mini-basket").css({
                                right: e - 1
                            }), y.removeClass("visuallyHidden")
                        }
                    }, function() {
                        $(this).removeClass("hover-mini-bag"), setTimeout(function() {
                            y.hasClass("inBasket") || y.addClass("visuallyHidden")
                        }, 10)
                    }), y.length > 0 && y.hover(function() {
                        y.addClass("inBasket")
                    }, function() {
                        y.removeClass("inBasket"), setTimeout(function() {
                            y.hasClass("inBasket") || $(".nav-bar .basket-items").hasClass("hover-mini-bag") || y.addClass("visuallyHidden")
                        }, 400)
                    }), $(".main-content").on("click", ".mini-details, .mini-img", function() {
                        var e = $(this).parent().find("a img").attr("alt");
                        _gaq.push(["_trackEvent", "Mini-Basket Product", "Click", e])
                    }), $(".main-content").on("click", ".go-to-basket", function() {
                        _gaq.push(["_trackEvent", "Mini-Basket View Bag", "Click", "Mini-Basket View Bag"])
                    }), $(".left-draw .searchBox-Nav").keydown(function(e) {
                        $(".right-side-nav .searchForm input[type=text]").attr("value", $(this).val()), 13 == e.which && (e.preventDefault(), $(".searchbutton").trigger("click"))
                    }), $(".product-size-charts").click(function(e) {
                        e.preventDefault(), e.stopPropagation(), $(".main-content").addClass("visuallyHidden"), $("body").append($('<div class="info-draw grid-parent grid-80 tablet-grid-80 mobile-grid-80"><a href="#" class="info-draw-close">Close</a><section class="size-fit-info"></section><section id="social-info"></section></div>'));
                        var t = ["CAEAD", "CAEAE", "CAEAL", "CAEAN", "CAEBX", "CAEBY", "CAEBZ", "C6EAA", "C6EAB", "C6EAJ", "C6EAK", "C6EAL", "C6EAN", "C6EBG", "C6EBH"];
                        $(".info-draw .size-fit-info").load(-1 !== $.inArray($(".desc-prod-code").text().replace("Style Code: ", ""), t) ? "/content/site/product/size-chart-t1-2015.htm #size-chart-overlay-content" : "/content/site/product/size-Chart.htm #size-chart-overlay-content")
                    }), $("body").on("click", ".info-draw-close", function(e) {
                        e.preventDefault(), $(".main-content").removeClass("visuallyHidden"), $(".info-draw").remove()
                    }), $().UItoTop({
                        easingType: "easeOutQuart"
                    }), r(), $("#breadcrumb").length > 0) {
                    var w = $("#breadcrumb li").eq(1).text(),
                        N = $("#breadcrumb li").eq(1).children();
                    w.indexOf("women") > -1 ? N.wrap('<a href="/category/women+new/new.htm"></a>') : w.indexOf("men") > -1 ? N.wrap('<a href="/category/men+new+in/New.htm"></a>') : w.indexOf("house&home") > -1 && N.wrap('<a href="/category/HH+newly+added/new.htm"></a>')
                }
                if ($("#breadcrumb li > a").click(function() {
                        var e = $(this).text();
                        _gaq.push(["_trackEvent", "Breadcrumbs", "Click", e])
                    }), $("body").on("click", ".checkout a", function() {
                        var e = $(".product-details .product-info h1").text() || $(".product-details .product-info h3").text() || $(".wishlist-item-selected .wish-item-title").text();
                        _gaq.push(["_trackEvent", "Checkout", "Click", e])
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
                        $(window).width() > 1023 && b()
                    }), _.defer(l), $(".category-full-width-banner .range-image").length > 0) {
                    rangeCurrentWindowWidth = $(window).width(), rangeWindowWidth = $(window).width();
                    for (var k = 0; k < $(".range-image").length; k++) $rangeImage = $($(".range-image")[k]), d($rangeImage, !0);
                    lazyRangeLayout = _.debounce(f, 300), $(document).ready(function() {
                        _.defer(f)
                    }), $(window).resize(lazyRangeLayout)
                }
                window.location.href.indexOf("/range/") < 0 && v();
                var x = function() {
                    var e = ($(".main-header").outerHeight() > 80 ? "74px" : $(".main-header").outerHeight(), "none" == $(".marketing-message").css("display") ? 0 : $(".marketing-message").outerHeight());
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
                    }, 100)) : $(window).scrollTop() <= e && ($(".main-header").css({
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
                void 0 !== $(this).css("background-image") && "none" !== $(this).css("background-image") && t.push($(this))
            }), homepageCurrentWindowWidth = $(window).width(), homepageWindowWidth = $(window).width();
            var x = _.debounce(h, 300);
            _.defer(h), $(window).resize(x), $(".range-product").click(function() {
                var e = $(this);
                0 == $(".scrollToBuyOff").length && setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: e.offset().top
                    }, "250")
                }, 300)
            }), $(document).ready(function() {
                setTimeout(function() {
                    h()
                }, 500)
            })
        }
        return $(".editorial-buy-off").length > 0 && $(".range-product").click(function() {
            $(this);
            0 == $(".scrollToBuyOff").length ? setTimeout(function() {
                $("body, html").animate({
                    scrollTop: $(".buy-off-container").offset().top
                }, "250")
            }, 300) : setTimeout(function() {
                $("body, html").animate({
                    scrollTop: $(".buy-off-container").offset().top
                }, "250")
            }, 300)
        }), $(".landing-container").length > 0 && (windowWidth = $(window).width(), $(".archive-post").addClass("visuallyHidden").css("opacity", 0), $(window).scroll(function() {
            g(!1)
        })), $("#aspnetForm > header").addClass("main-header"), e = {
            checkProductSizeBoxWidth: o,
            checkForLegLengths: c,
            buildSizedImageSources: d,
            setRangeImages: f,
            setSocialVariables: m,
            setSocialIcons: v,
            populateTippedElements: b,
            destroyTippedElements: y,
            subscribeToGroup: w,
            miniBasketCarousel: l,
            signUpEmail: N
        }
    }();
! function(e) {
    e.fn.showHide = function(t) {
        var i = {
                speed: 1e3,
                easing: ""
            },
            t = e.extend(i, t);
        e(this).click(function() {
            e(".toggleDiv").slideUp(t.speed, t.easing);
            var i = e(this),
                s = e(this).attr("rel");
            return i.toggleClass("activeHelp"), e(".helpHeader").not(this).removeClass("activeHelp"), e(s).is(":visible") ? e(".toggleDiv").slideUp(t.speed, t.easing) : e(s).slideToggle(t.speed, t.easing, function() {}), !1
        })
    }
}(jQuery);
var helpModule = function() {
        var e = {},
            t = function(e, t) {
                $(".helpHeader").removeClass("activeHelp"), $(".toggleDiv").hide(), $(".toggleDiv:eq(" + t + ")").show().prev().addClass("activeHelp"), 0 == t ? $(".shopping-accordion").accordionA("toggle", "#" + e, !0) : 1 == t ? $(".legal-accordion").accordionA("toggle", "#" + e, !0) : 2 == t && $(".company-accordion").accordionA("toggle", "#" + e, !0), setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: Math.floor($("#" + e).offset().top - $(".main-header").height())
                    }, "250")
                }, 500)
            };
        return $(document).ready(function() {
            $("#delivery-exclusions tr:odd").addClass("pale-bg"), $(".help-accordion").accordionA(), $(".shopping-accordion").accordionA(), $(".legal-accordion").accordionA(), $(".company-accordion").accordionA(), $(".toggleDiv:not(:first)").hide(), $(".helpHeader").showHide({
                speed: 300,
                easing: ""
            });
            var e = getParameterByName("helpSection"),
                i = getParameterByName("subSection");
            "" != e && (sectionNumber = 0, $("#" + e).parent().hasClass("legal-accordion") ? sectionNumber = 1 : $("#" + e).parent().hasClass("company-accordion") && (sectionNumber = 2), t(e, sectionNumber), "" != i && setTimeout(function() {
                $("body, html").animate({
                    scrollTop: Math.floor($("#" + i).offset().top - $(".main-header").height())
                }, "250")
            }, 1e3)), $(".delivery-charges-link").click(function(e) {
                e.preventDefault(), t("shipping-charges", 0)
            }), $(".exclusions-link").click(function(e) {
                e.preventDefault(), t("delivery-exclusions", 0)
            }), $(".linkToPrivacyPolicy").click(function(e) {
                e.preventDefault(), t("privacy-policy", 1)
            }), $(".terms-conditions-link").click(function(e) {
                e.preventDefault(), t("terms-conditions", 1), setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: Math.floor($("#delivery-terms-heading").offset().top)
                    }, "250")
                }, 500)
            }), $("a.copyright-trademark-notice").click(function(e) {
                e.preventDefault(), t("terms-conditions", 1), setTimeout(function() {
                    $("body, html").animate({
                        scrollTop: Math.floor($("#copyright-trademark-notice").offset().top)
                    }, "250")
                }, 500)
            }), document.location.href.indexOf("?=legal") > 1 && ($(".helpHeader").removeClass("activeHelp"), $(".toggleDiv").hide(), $(".toggleDiv:eq(1)").show().prev().addClass("activeHelp"))
        }), e
    }(),
    rangeModule = function() {
        var e = {},
            t = !1,
            i = {},
            s = {},
            n = {},
            a = {},
            o = {},
            r = {},
            l = {},
            c = !1,
            d = !1,
            u = !1,
            h = "",
            p = null,
            f = window.innerWidth,
            g = window.innerWidth,
            m = function() {
                $(".add-to-bag").addtobasket({
                    debug: "false" === tcp_env.is_live,
                    selectedSkuFinder: function(e) {
                        if (!e) return null;
                        var t = e.parent().find(".size-selected").attr("sku-id");
                        return t
                    },
                    selectedQtyFinder: function(e) {
                        return e.parent().find(".qtyList option:selected").val()
                    },
                    selectedProdIdFinder: function(e) {
                        return e ? e.parent().attr("prod-id") : null
                    },
                    selectedPriceFinder: function(e) {
                        return e ? e.parent().find(".nowPrice").attr("price") : null
                    },
                    selectedNameFinder: function(e) {
                        return e ? e.parent().find(".product-info h3").text() : null
                    },
                    waitInitHandler: function() {
                        document.body.style.cursor = "wait"
                    },
                    waitDestroyHandler: function() {
                        document.body.style.cursor = "default"
                    },
                    addToBasketSuccessHandler: function(e, t) {
                        var i = e.parent().find(".size-selected").text();
                        e.parent().find(".stock-message").hide(), e.parent().find("#added-to-basket").show().html("<span class='message-text'>" + t.productDisplayName + ", size " + i + " has been added to your basket.</span>"), miniBasket && miniBasket.data("tcplMinibasket").refreshBasket(), document.body.style.cursor = "default", $(".basket-recommendations-container").length > 0 && (window.location = "/basket.htm"), setTimeout(function() {
                            var e = "<li><a href='/basket.htm'><span><b>Go to basket</b></span><span class='mini-basket-sub-total'>" + $(".mini-basket .mini-basket-sub-total").text() + "</span></a></li>";
                            $(".basket-items li").each(function() {
                                e += "<li><a href='" + $(this).find(".mini-details").attr("href") + "'><span>" + $(this).find(".prod-title").html() + "</span><span>" + $(this).find(".prod-cost").html() + "</span><span>" + $(this).find(".prod-size").html() + "</span><span>" + $(this).find(".prod-colour").html() + "</span><span>" + $(this).find(".prod-qty").html() + "</span></a></li>"
                            }), $(".left-draw-basket .mini-basket-sub-total").html(""), $(".sub-list-basket ul").html(e), $(".left-draw-basket > a").html("Basket " + $(".basket-items .qty").html())
                        }, 500), "undefined" != typeof t.productDisplayName && _gaq.push(["_trackEvent", "Add to Basket", "Click", t.productDisplayName])
                    },
                    addToBasketFailedHandler: function() {},
                    trackingElementId: "trackers",
                    validateBeforeAdd: function(e) {
                        var t = e.parent();
                        return t.find(".size-selected").hasClass("out-of-stock") || t.find(".qtyList").is(":disabled") ? (document.body.style.cursor = "default", !1) : !0
                    },
                    selectedProductCategoryFinder: function() {
                        return "undefined" == typeof currentIndividualObj ? $("h1").text() : currentIndividualObj.parentCategory
                    }
                })
            },
            v = function(e) {
                e.skuList = e.skuList.sort(function(e, t) {
                    return e - t
                });
                for (var t = [e.skuList[0]], i = 1; i < e.skuList.length; i++) e.skuList[i - 1] !== e.skuList[i] && t.push(e.skuList[i]);
                e.skuList = t, $.ajax({
                    url: "/services/stockservices.asmx/GetProductVariantStock",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(e),
                    dataType: "json",
                    success: function(e) {
                        stockJson = $.parseJSON(e.d), y(), w(), m(), $(".basket-recommendations-container").length < 1 && $(".wishlist-product").length < 1 && P(), "undefined" != typeof wishlistModule.updateAddRemoveWishlistButton && wishlistModule.updateAddRemoveWishlistButton();
                        var t = getParameterByName("selectedProd");
                        "" != t && T(t)
                    }
                })
            },
            b = function(e) {
                $.ajax({
                    url: "/services/stockservices.asmx/GetProductData",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(e),
                    dataType: "json",
                    success: function(t) {
                        productJson = $.parseJSON(t.d);
                        for (var i = 0; i < productJson.products.length; i++)
                            for (prop in productJson.products[i]) "title" == prop || "description" == prop || "details" == prop || "fitNotes" == prop || "provenance" == prop || "restricted" == prop || "0" !== productJson.products[i][prop][0].price && null !== productJson.products[i][prop][0].price && "0.00" !== productJson.products[i][prop][0].price && "undefined" !== productJson.products[i][prop][0].price || productJson.products.splice(i, 1);
                        setCurrentObj(!1), v(e)
                    }
                })
            };
        setCurrentObj = function(e) {
            if ("undefined" == typeof rangeJson) {
                var t = "";
                t = e ? $(".size-selected").attr("prod-id") : $(".selected-range-product").attr(c ? "base-code" : "id");
                for (var d = 0; d < productJson.products.length; d++)
                    for (prop in productJson.products[d])
                        if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop && prop.toLowerCase() == t.toLowerCase()) return i = productJson.products[d][prop], s = prop, n = productJson.products[d].title, a = productJson.products[d].description, o = productJson.products[d].details, r = productJson.products[d].fitNotes, void(l = productJson.products[d].provenance)
            }
        };
        var y = function() {
                for (var e = 0, t = 0; t < productJson.products.length; t++)
                    for (prop in productJson.products[t])
                        if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop && "restricted" !== prop) {
                            var i = productJson.products[t][prop];
                            if (0 == $(".selected-colour-tile").length) {
                                if (0 == $("#lookbook-outer-wrap, #jersey-outer-wrap").length) {
                                    for (var s = [], n = 0; n < i.length; n++)
                                        for (var a = 0; a < stockJson.stocklist.length; a++)
                                            if (stockJson.stocklist[a].prodId.toLowerCase() == i[n].prodId.toLowerCase()) {
                                                for (var o = !1, r = 0; r < stockJson.stocklist[a].sizesInStock.length; r++)
                                                    if ("0" != stockJson.stocklist[a].sizesInStock[r].stlev || "" != stockJson.stocklist[a].sizesInStock[r].preOrderAvailable) {
                                                        o = !0, s.push(i[n]);
                                                        break
                                                    }!o && c && s.push(i[n]);
                                                break
                                            }
                                    s.length > 0 && (i = s)
                                }
                                if (i.length > 0) {
                                    e >= i.length && (e = 0);
                                    var l = i[e];
                                    if ($("#lookbook-outer-wrap, #jersey-outer-wrap").length > 0)
                                        for (var d = !1, a = 0; a < lookbookModule.lookbookFoundItem.products.length; a++) {
                                            for (var u = 0; u < i.length; u++)
                                                if (-1 != i[u].prodId.indexOf(lookbookModule.lookbookFoundItem.products[a].prodId.slice(0, 5)) && -1 != i[u].upImg.toLowerCase().indexOf("/" + lookbookModule.lookbookFoundItem.products[a].skuColor.toLowerCase() + "/")) {
                                                    l = i[u], d = !0;
                                                    break
                                                }
                                            if (d) break
                                        }
                                    var h = "";
                                    h = l.upImg.replace(sizeRegex, "/250/"), c ? $($("#" + l.prodId + " img")[0]).attr({
                                        src: h.replace("gift_clear", "gift/clear"),
                                        alt: productJson.products[t].title,
                                        title: productJson.products[t].title,
                                        "prod-code": l.prodId,
                                        "base-colour": l.baseColour,
                                        "item-colour": l.colour
                                    }) : $($("#" + prop + " img")[0]).attr({
                                        src: h.replace("gift_clear", "gift/clear"),
                                        alt: productJson.products[t].title,
                                        title: productJson.products[t].title,
                                        "prod-code": l.prodId,
                                        "base-colour": l.baseColour,
                                        "item-colour": l.colour
                                    }), e++
                                }
                            } else if (i.length > 0)
                                for (var p = $(".selected-colour-tile").attr("base-colour").toLowerCase(), f = i.length - 1; f >= 0; f--)
                                    if (i[f].baseColour.toLowerCase() === p) {
                                        var l = i[f],
                                            h = "";
                                        h = l.upImg.replace(sizeRegex, "/250/"), c ? $($("#" + l.prodId + " img")[0]).attr({
                                            src: h.replace("gift_clear", "gift/clear"),
                                            alt: window.productJson.products[t].title,
                                            title: window.productJson.products[t].title,
                                            "prod-code": l.prodId,
                                            "base-colour": l.baseColour,
                                            "item-colour": l.colour
                                        }) : $($("#" + prop + " img")[0]).attr({
                                            src: h.replace("gift_clear", "gift/clear"),
                                            alt: window.productJson.products[t].title,
                                            title: window.productJson.products[t].title,
                                            "prod-code": l.prodId,
                                            "base-colour": l.baseColour,
                                            "item-colour": l.colour
                                        })
                                    }
                        }
            },
            w = function() {
                for (var e = 0; e < $(".range-product img").length; e++)
                    for (var t = 0; t < stockJson.stocklist.length; t++)
                        if ("undefined" != typeof $($(".range-product img")[e]).attr("prod-code") && stockJson.stocklist[t].prodId.toLowerCase() == $($(".range-product img")[e]).attr("prod-code").toLowerCase()) {
                            for (var i = !1, s = 0; s < stockJson.stocklist[t].sizesInStock.length; s++)("0" != stockJson.stocklist[t].sizesInStock[s].stlev || "" != stockJson.stocklist[t].sizesInStock[s].preOrderAvailable) && (i = !0);
                            if (!i) {
                                $($(".range-product img")[e]).addClass("range-product-out-of-stock");
                                break
                            }
                            $($(".range-product img")[e]).removeClass("range-product-out-of-stock");
                            break
                        }
            },
            N = function() {
                if ("undefined" == typeof rangeJson) {
                    $("#added-to-basket").hide(), $(".stock-message").hide();
                    var e = $(".product-sizes ul .size-selected");
                    if (0 == e.length)
                        if (d) {
                            for (var t = 0; t < $(".product-sizes ul .size").length; t++)
                                if (e = $($(".product-sizes ul .size")[t]), e.attr("prod-id") == $(".product-details").attr("prod-id")) {
                                    e.addClass("size-selected");
                                    break
                                }
                        } else {
                            for (var i = !1, t = 0; t < $(".product-sizes ul .size").length; t++)
                                if ("false" == $($(".product-sizes ul .size")[t]).attr("data-oos")) {
                                    e = $($(".product-sizes ul .size")[t]).addClass("size-selected"), i = !0;
                                    break
                                }
                            i || (e = $($(".product-sizes ul .size")[0]), e.addClass("size-selected"))
                        }
                    var s = $(".stock-message");
                    e.hasClass("out-of-stock") ? s.show().html('<span class="message-text">Your selected size is currently out of stock.</span>') : "undefined" != typeof e.attr("low-stock") && e.attr("low-stock").length > 0 && parseInt(e.attr("low-stock")) < 7 && 0 != parseInt(e.attr("low-stock")) ? (s.show().html('<span class="message-text">We have a limited number of this item left in your selected size.</span>'), e.addClass("low-stock")) : "undefined" != typeof e.attr("low-stock") && e.attr("pre-order").length > 0 ? (s.show().html('<span class="message-text">Your selected size is expected in our warehouse on ' + e.attr("pre-order") + ". You can still order, we will send your item out to you as soon as it arrives.</span>"), e.addClass("pre-order")) : s.hide()
                }
            },
            k = function() {
                var e = $(".product-sizes ul");
                e.html("");
                var t = "";
                if (!d && currentIndividualObj) {
                    for (var i = 0; i < currentIndividualObj.skuSetArr.length; i++) {
                        var s = currentIndividualObj.skuSetArr[i].slice(-2);
                        t = s;
                        for (var a = "", o = "", r = !1, l = 0; l < stockJson.stocklist.length; l++)
                            if (stockJson.stocklist[l].prodId.toLowerCase() == currentIndividualObj.prodId.toLowerCase()) {
                                for (var c = 0; c < stockJson.stocklist[l].sizesInStock.length; c++)
                                    if (currentIndividualObj.skuSetArr[i].toLowerCase() == stockJson.stocklist[l].sizesInStock[c].sku.toLowerCase()) {
                                        ("0" != stockJson.stocklist[l].sizesInStock[c].stlev || "" != stockJson.stocklist[l].sizesInStock[c].preOrderAvailable) && (r = !0, o = stockJson.stocklist[l].sizesInStock[c].stlev), t = stockJson.stocklist[l].sizesInStock[c].value1, a = stockJson.stocklist[l].sizesInStock[c].preOrderAvailable;
                                        break
                                    }
                                break
                            }
                        "os" == t.toLowerCase() && (t = "One Size"), e.append(r ? $('<li class="grid-10 tablet-grid-10 mobile-grid-10 size" sku-id="' + currentIndividualObj.skuSetArr[i] + '" data-oos="' + !r + '" pre-order="' + a + '" low-stock="' + o + '" data-price="' + currentIndividualObj.price + '">' + t + "</li>") : $('<li class="grid-10 tablet-grid-10 mobile-grid-10 size size-out-of-stock out-of-stock" sku-id="' + currentIndividualObj.skuSetArr[i] + '" data-oos="' + !r + '" pre-order="" low-stock="" data-price="' + currentIndividualObj.price + '">' + t + "</li>"))
                    }
                    mainModule.checkForLegLengths()
                } else
                    for (var i = 0; i < productJson.products.length; i++) {
                        var u = productJson.products[i];
                        if (u.title == n) {
                            var t = "";
                            for (prop in u)
                                if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop)
                                    for (var h = u[prop], r = !1, p = 0; p < h.length; p++) {
                                        var a = "",
                                            o = "";
                                        if ($(".selected-swatch").attr("base-colour").toLowerCase() == h[p].baseColour.toLowerCase() && $(".selected-swatch").attr("title").toLowerCase() == h[p].colour.toLowerCase() || $(".selected-swatch").attr("alt").toLowerCase() == h[p].colour.toLowerCase()) {
                                            t && 0 != t.length || (t = "Undetermined");
                                            for (var l = 0; l < stockJson.stocklist.length; l++)
                                                if (stockJson.stocklist[l].prodId.toLowerCase() == h[p].prodId.toLowerCase()) {
                                                    for (var c = 0; c < stockJson.stocklist[l].sizesInStock.length; c++)
                                                        if (h[p].skuSetArr[0].toLowerCase() == stockJson.stocklist[l].sizesInStock[c].sku.toLowerCase()) {
                                                            ("0" != stockJson.stocklist[l].sizesInStock[c].stlev || "" != stockJson.stocklist[l].sizesInStock[c].preOrderAvailable) && (r = !0, o = stockJson.stocklist[l].sizesInStock[c].stlev), t = stockJson.stocklist[l].sizesInStock[c].value1, a = stockJson.stocklist[l].sizesInStock[c].preOrderAvailable;
                                                            break
                                                        }
                                                    break
                                                }
                                            if ("Undetermined" == t && void 0 != u.fitNotes) {
                                                var f = u.fitNotes,
                                                    g = f.indexOf("&quot;&gt;"),
                                                    m = f.indexOf("&lt;", g);
                                                t = f.slice(g + 10, m)
                                            }
                                            e.append(r ? $('<li class="grid-10 tablet-grid-10 mobile-grid-10 size" prod-id="' + prop + '" sku-id="' + h[p].skuSetArr[0] + '" data-oos="' + !r + '" pre-order="' + a + '" low-stock="' + o + '" data-price="' + h[p].price + '">' + t + "</li>") : $('<li class="grid-10 tablet-grid-10 mobile-grid-10 size size-out-of-stock out-of-stock" prod-id="' + prop + '" sku-id="' + h[p].skuSetArr[0] + '" data-oos="' + !r + '" pre-order="" low-stock="" data-price="' + h[p].price + '">' + t + "</li>"))
                                        }
                                    }
                        }
                    }
                N(), S(), mainModule.checkProductSizeBoxWidth(), $(".product-description-content .prodID").text($(".size-selected").attr("sku-id").slice(0, 5)), $(".product-sizes .size").length == $(".product-sizes .out-of-stock").length ? $(".add-to-bag").attr("disabled", "disabled").text("Out of Stock") : $(".add-to-bag").removeAttr("disabled").text("Add To Bag")
            },
            x = function(e) {
                if ("undefined" != typeof e) {
                    var t = "&#163;" === tcp_env.currency_symbol ? "£" : "undefined" != typeof tcp_env.currency_symbol ? tcp_env.currency_symbol : "£";
                    $("#salePrice").length > 0 && $("#salePrice").remove(), $(".nowPrice").removeClass("price-strike-through");
                    var i = parseFloat(e.price).toFixed(2);
                    if ($(".nowPrice").attr("price", i).text(t + i), e.price != e.salePrice && "0" != e.salePrice) {
                        var s = parseFloat(e.salePrice).toFixed(2);
                        $(".product-info").append($('<p id="salePrice">' + t + s + "</p>")), $(".nowPrice").addClass("price-strike-through")
                    }
                }
            },
            C = function() {
                currentIndividualObj = void 0;
                var e = void 0;
                e = $($(".selected-range-product img").length > 1 ? $(".selected-range-product img")[1] : ".selected-range-product img"), $(".group-buy-off .product-swatches").html("");
                for (var t = 0; t < i.length; t++) {
                    var c = i[t],
                        u = c.upImg.replace(sizeRegex, "/250/").replace("gift_clear", "gift/clear"),
                        p = $('<li class="grid-15 tablet-grid-15 mobile-grid-15 swatch"><img src="' + u + '" id="' + c.prodId + '" class="grid-image product-swatch" alt="' + c.colour + '" title="' + c.colour + '" data-tab-index="' + t + '" base-colour="' + c.baseColour.toLowerCase() + '"></li>');
                    if ($(".group-buy-off .product-swatches").append(p), !d && e.length > 0 && e.attr("prod-code").toLowerCase() === c.prodId.toLowerCase()) p.find("img").addClass("selected-swatch"), currentIndividualObj = c, $(".colour-showing").text(c.colour);
                    else if (d && 0 == h.length && e.length > 0 && e.attr("prod-code").toLowerCase() === c.prodId.toLowerCase() && e.attr("item-colour").toLowerCase() == c.colour.toLowerCase()) p.find("img").addClass("selected-swatch"), currentIndividualObj = c, $(".colour-showing").text(c.colour), h = c.baseColour.toLowerCase();
                    else if (d && h.length > 0 && e.attr("item-colour").toLowerCase() === c.colour.toLowerCase())
                        for (var f = 0; f < i.length; f++) h == i[f].baseColour.toLowerCase() && (p.find("img").addClass("selected-swatch"), currentIndividualObj = i[f], $(".colour-showing").text(c.colour), h = i[f].baseColour.toLowerCase())
                }
                if (z(), $(".product-details").attr("prod-id", s), $(".product-info h3").text(n), "undefined" != typeof i[0])
                    if (0 === $(".goToPageAnchor").length && i) {
                        var g = $('<a class="goToPageAnchor"></a>');
                        g.attr("href", "/product/" + i[0].parentCategory.replace(/ /g, "+").replace(/\//g, "+") + "/" + s + "/" + n.replace(/ /g, "+").replace(/\//g, "+").replace(/'/g, "") + ".htm?clr=" + s.slice(0, 5) + "_" + $(".colour-showing").text().replace(/ /g, "").replace(/\//g, "")), $(".product-info h3").wrapAll(g)
                    } else $(".goToPageAnchor").attr("href", "/product/" + i[0].parentCategory.replace(/ /g, "+").replace(/\//g, "+") + "/" + s + "/" + n.replace(/ /g, "+").replace(/\//g, "+").replace(/'/g, "") + ".htm?clr=" + s.slice(0, 5) + "_" + $(".colour-showing").text().replace(/ /g, "").replace(/\//g, ""));
                x(currentIndividualObj);
                var m = $("<div />").html(a).text();
                ("undefined" == typeof m || 0 == m.length) && (m = a), $(".product-description-content p").html(m), $(".details").empty(), $(".fit-notes").empty();
                for (prop in o) $(".details").append($("<li>" + o[prop] + "</li>"));
                if (r) {
                    var v = $.parseHTML(r),
                        b = $(".fit-notes").append(v),
                        y = $(b.text().replace(/"/g, ""));
                    b.html("").append(y);
                    for (var t = 0; t < $(".regSize, .longSize").length; t++) $($(".fit-notes .regSize, .fit-notes .longSize")[t]).text($($(".fit-notes .regSize, .fit-notes .longSize")[t]).text() + '"')
                }
                if (l && l.length > 0) {
                    var w = l.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                    $(".details").append($(w))
                }
                window.location.href.indexOf("/range/") < 0 && mainModule.setSocialVariables(), setTimeout(function() {
                    mainModule.destroyTippedElements(), mainModule.populateTippedElements()
                }, 50)
            },
            S = function() {
                $(".product-sizes li.size-selected").length > 0 && ($(".product-sizes li.size-selected").hasClass("size-out-of-stock") ? $(".qtyList").attr("disabled", "disabled") : $(".qtyList").removeAttr("disabled"))
            },
            T = function(e) {
                for (var t = !1, i = $(".group-images .range-product").length - 1; i >= 0 && !t; i--)
                    if (d) {
                        if (-1 != $($(".group-images .range-product")[i]).attr("size-ids").toLowerCase().indexOf(e.substring(0, 5).toLowerCase())) {
                            $($(".group-images .range-product")[i]).trigger("click"), t = !0;
                            break
                        }
                    } else if (c) {
                    for (var s = e.substring(0, 5), n = 0; n < window.productJson.products.length && !t; n++)
                        if (void 0 != window.productJson.products[n][s])
                            for (var a = 0; a < window.productJson.products[n][s].length; a++)
                                for (var o = 0; o < window.productJson.products[n][s][a].skuSetArr.length; o++)
                                    if (window.productJson.products[n][s][a].skuSetArr[o] == e) {
                                        $("#" + window.productJson.products[n][s][a].prodId).trigger("click"), t = !0;
                                        break
                                    }
                } else if (-1 != $($(".group-images .range-product")[i]).attr("id").substring(0, 5).toLowerCase().indexOf(e.substring(0, 5).toLowerCase())) {
                    $($(".group-images .range-product")[i]).trigger("click"), t = !0;
                    break
                }
                if (!t) {
                    var s = e.substring(0, 5);
                    $("#" + s).trigger("click")
                }
            },
            P = function() {
                setTimeout(function() {
                    $(".product-accordion").accordionA("toggle", $($(".product-accordion section")[0]), !0)
                }, 500)
            },
            j = function() {
                var e = "250";
                return e = 600 > g && g > 479 ? "350" : 1024 > g && g > 600 ? "450" : 1440 > g && g > 1024 ? "550" : 2e3 > g && g > 1440 ? "700" : "950"
            },
            z = function(e) {
                if ("undefined" != typeof currentIndividualObj && (g = window.innerWidth, "undefined" == typeof f && (f = window.innerWidth), !(f > g && t === !1))) {
                    newSize = j();
                    var i = $(".product-swatches .selected-swatch"),
                        s = $(".main-product-image"),
                        n = $(".spinner");
                    if (void 0 != i.attr("src") && -1 != i.attr("src").search(sizeRegex)) {
                        var a = i.attr("src");
                        a = a.replace(sizeRegex, "/" + newSize + "/").replace("gift_clear", "gift/clear");
                        var o = a.indexOf("/global/"); - 1 != o && (a = a.replace("/global/", "/product/")), a != s.attr("src") && (s.attr({
                            src: a,
                            alt: currentIndividualObj.title,
                            title: currentIndividualObj.title
                        }), n.removeClass("visuallyHidden"), $(".range-lifestyle").length > 0 && $(".range-lifestyle").removeClass("visuallyHidden")), $(".zoom-anchor").length > 0 && ($(".zoom-anchor").attr("href", s.attr("src").replace(sizeRegex, "/1200/")), $(".range-lifestyle").length > 0 && $(".range-lifestyle").parent().attr("href", $(".range-lifestyle").attr("src").replace(sizeRegex, "/1200/")), MagicZoomPlus.refresh())
                    }
                    if (f = g, t === !0 && e !== !0) {
                        $("#lightbox-buy-off .main-product-image").hide();
                        var r = $("#lightbox-buy-off .main-product-image").attr("src").split("/");
                        try {
                            var l = r[0] + "/" + r[1] + "/" + r[2] + "/global/" + r[4] + "/s1/" + r[6] + "/" + r[7];
                            $("#lightbox-buy-off .main-product-image").attr("src", l);
                            var c = r[0] + "/" + r[1] + "/" + r[2] + "/global/" + r[4] + "/s1/1553/" + r[7];
                            $("#lightbox-buy-off .MagicZoomPlus").attr("href", c)
                        } catch (d) {}
                        $("#lightbox-buy-off .main-product-image").load(function() {
                            $("#lightbox-buy-off .main-product-image").show()
                        }), $("#lightbox-buy-off").modal("show")
                    }
                }
            },
            A = function() {
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
            D = function() {
                return $(['<div class="buy-off-container group-buy-off grid-90 prefix-5 suffix-5 mobile-grid-100 tablet-grid-90 tablet-prefix-5 tablet-suffix-5 grid-parent">', '<div class="group-product-image grid-45 mobile-grid-100 tablet-grid-50 suffix-5">', '<img src="//d1kh76s6bjh8ww.cloudfront.net/img/ajaxLoader.gif" class="spinner visuallyHidden">', '<a href="#" class="zoom-anchor MagicZoomPlus" title="Click to zoom">', '<img class="main-product-image" />', "</a>", "</div>", '<div class="product-details grid-50 tablet-grid-50 mobile-grid-100">', '<div class="product-info grid-100 suffix-15 tablet-grid-95 tablet-suffix-5 mobile-grid-100 grid-parent">', "<h3></h3>", '<p class="nowPrice"></p>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<article class="group-product-description product-accordion accordion-a" role="tablist">', "<section>", "<header>", "<h2>Description</h2>", "</header>", '<div class="content product-description-content">', "<p></p>", '<ul class="details"></ul>', '<span class="desc-prod-code">Style Code: <span class="prodID"></span></span>', "</div>", "</section>", "</article>", "</div>", '<h3 class="product-label">Colour: <span class="colour-showing"></span></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<ul class="product-swatches">', "</ul>", "</div>", '<h3 class="product-label ">Size: <a class="product-size-charts" target="_blank" href="/content/help/help.htm#size-fit">(Size Chart)</a></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent product-sizes">', '<ul class="product-sizes"></ul>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 stock-message hidden-message"></div>', '<h3 class="product-label">Quantity: </h3>', '<div class="product-qty">', '<select class="qtyList" name="qty">', '<option value="1">1</option>', '<option value="2">2</option>', '<option value="3">3</option>', '<option value="4">4</option>', '<option value="5">5</option>', '<option value="6">6</option>', "</select>", "</div>", '<div id="added-to-basket" class="grid-100 tablet-grid-100 mobile-grid-100 stock-message-added hidden-message">Added to basket</div> ', '<div id="#addToBasket" class="grid-100 tablet-grid-100 mobile-grid-100 product-button add-to-bag">Add to bag</div>', "</div>", "</div>"].join(""))
            },
            I = function() {
                return $(['<div class="buy-off-container group-buy-off grid-90 prefix-5 suffix-5 mobile-grid-100 tablet-grid-90 tablet-prefix-5 tablet-suffix-5 grid-parent">', '<a href="#" class="buy-off-close">close</a>', '<div class="group-product-image grid-45 mobile-grid-100 tablet-grid-50 suffix-5">', '<img src="//d1kh76s6bjh8ww.cloudfront.net/img/ajaxLoader.gif" class="spinner visuallyHidden">', '<a href="#" class="zoom-anchor MagicZoomPlus" title="Click to zoom">', '<img class="main-product-image" />', "</a>", $("#range-lifestyle-holder").length > 0 ? '<a href="#" class="zoom-anchor MagicZoomPlus" title="Click to zoom"><img class="range-lifestyle visuallyHidden" /></a>' : "", "</div>", '<div class="product-details grid-50 tablet-grid-50 mobile-grid-100">', '<div class="product-info grid-100 suffix-15 tablet-grid-95 tablet-suffix-5 mobile-grid-100 grid-parent">', "<h3></h3>", '<p class="nowPrice"></p>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<article class="group-product-description product-accordion accordion-a" role="tablist">', "<section>", "<header>", "<h2>Description</h2>", "</header>", '<div class="content product-description-content">', "<p></p>", '<ul class="details"></ul>', '<span class="desc-prod-code">Style Code: <span class="prodID"></span></span>', "</div>", "</section>", '<section id="the-final-section">', "<header>", "<h2>Shipping & Returns</h2>", "</header>", '<div class="content">', "</div>", "</section>", "</article>", "</div>", '<h3 class="product-label">Colour: <span class="colour-showing"></span></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<ul class="product-swatches">', "</ul>", "</div>", '<h3 class="product-label ">Size: <a class="product-size-charts" target="_blank" href="/content/help/help.htm#size-fit">(Size Chart)</a></h3>', '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent product-sizes">', '<ul class="product-sizes"></ul>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 stock-message hidden-message"></div>', '<h3 class="product-label">Quantity: </h3>', '<div class="product-qty">', '<select class="qtyList" name="qty">', '<option value="1">1</option>', '<option value="2">2</option>', '<option value="3">3</option>', '<option value="4">4</option>', '<option value="5">5</option>', '<option value="6">6</option>', "</select>", "</div>", '<div id="added-to-basket" class="grid-100 tablet-grid-100 mobile-grid-100 stock-message-added hidden-message">Added to basket</div> ', '<div id="#addToBasket" class="grid-100 tablet-grid-100 mobile-grid-100 product-button add-to-bag">Add to bag</div>', '<div class="grid-100 tablet-grid-100  mobile-grid-100 product-button checkout">', '<a id="ctl00_globalMainContent_btnCheckout" class="darkButton" href="/basket.htm">Checkout</a>', "</div>", "</div>", "</div>"].join(""))
            },
            R = function() {
                if ($("#the-final-section .content").load("/content/site/product/shipping-Returns.htm .shipping-content"), $('h3.product-label:contains("Share")').hide(), $(".buy-off-container").append($('<div class="fit-notes visuallyHidden"></div>')), $(".bedlinen-buy-off").length > 0 && (d = !0, h = ""), $(".colour-mode").length > 0 && (c = !0), $(".group-images").length > 0 && 0 == $(".lookbook-buy-off, .jersey-buy-off").length) {
                    for (var e = {
                            skuList: []
                        }, t = 0; t < $(".group-images .range-product").length; t++)
                        if (d || c)
                            if (!d && c) e.skuList.push($($(".group-images .range-product")[t]).attr("base-code"));
                            else
                                for (var t = 0; t < $(".range-product").length; t++)
                                    for (var i = $($(".range-product")[t]).attr("size-ids").split("-"), s = 0; s < i.length; s++) e.skuList.push(i[s]);
                    else e.skuList.push($($(".group-images .range-product")[t]).attr("id"));
                    b(e)
                }
                A(), window.location.href.indexOf("/range/") < 0 && $(".buy-off-container .product-details").append($('<div id="social" class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent"/>').load("/stormsites/toast/content/html/en-GB/site/social-icons.html #social a", function() {
                    window.location.href.indexOf("/range/") < 0 && mainModule.setSocialIcons()
                }))
            },
            M = function() {
                f = window.innerWidth, g = window.innerWidth;
                var e = _.debounce(z, 300);
                $(window).resize(e)
            },
            E = function() {
                for (var e = $("#category-link"), t = e.data("link"), i = 0; i < t.length; i++) {
                    var s = t[i];
                    if (-1 != document.referrer.indexOf(s) || -1 != document.referrer.replace(/%20/g, "+").indexOf(s)) {
                        W(e, s), doneBreadcrumb = !0;
                        break
                    }
                }
            },
            W = function(e, t) {
                e.attr("href", t);
                var i = t.lastIndexOf("/"),
                    s = t.indexOf(".htm"),
                    n = t.slice(i + 1, s);
                e.find("span").text(n.replace(/\+/g, " ")), -1 !== t.toLowerCase().indexOf("category/women") ? ($("#section-link").attr("href", "/women.htm"), $("#section-link").find("span").text("women")) : -1 !== t.toLowerCase().indexOf("category/men") ? ($("#section-link").attr("href", "/men.htm"), $("#section-link").find("span").text("men")) : ($("#section-link").attr("href", "/houseandhome.htm"), $("#section-link").find("span").text("house&home"))
            };
        return addRangeListeners = function() {
            $(".group-images").on("click", ".range-product", function() {
                var e = $(this).parent().parent().attr("related-buy-off");
                void 0 != e && "" != e && $(".buy-off-container").insertAfter($(this).parent().parent()), $(".buy-off-container").css({
                    height: "auto",
                    opacity: 1
                }), $(this).hasClass("selected-range-product") || (h = "", $(".selected-range-product").removeClass("selected-range-product"), $(this).addClass("selected-range-product"), f = 0, setCurrentObj(!1), isLookBook && (C(), k()), P(), "undefined" != typeof wishlistModule.updateAddRemoveWishlistButton && wishlistModule.updateAddRemoveWishlistButton()), reviewDisplayModule.callReviews()
            }), $(".group-buy-off").on("click", ".product-swatch", function() {
                if (!$(this).hasClass("selected-swatch")) {
                    var e = $(".buy-off-container");
                    h = $(this).attr("base-colour"), e.find(".product-swatch").removeClass("selected-swatch"), $(this).addClass("selected-swatch");
                    for (var t = 0; t < i.length; t++) {
                        var s = i[t];
                        ($(this).attr("base-colour").toLowerCase() == s.baseColour.toLowerCase() && $(this).attr("title").toLowerCase() == s.colour.toLowerCase() || $(this).attr("alt").toLowerCase() == s.colour.toLowerCase()) && (currentIndividualObj = s, e.find(".colour-showing").text(s.colour))
                    }
                    z(!0), isLookBook && k(), x(currentIndividualObj)
                }
            }), $(".group-buy-off").on("click", ".size", function() {
                $(this).hasClass(".size-selected") || (d ? ($(".size-selected").removeClass("size-selected"), $(this).addClass("size-selected"), setCurrentObj(!0), isLookBook && C(), S(), N(), P()) : ($(".size").removeClass("size-selected"), $(this).addClass("size-selected"), N()), $(".product-description-content .prodID").text($(".size-selected").attr("sku-id").slice(0, 5)))
            }), $(".colour-tiles li").click(function() {
                $(this).hasClass("selected-colour-tile") || ($(".selected-colour-tile").length > 0 && $(".selected-colour-tile").removeClass("selected-colour-tile"), $(".selected-mix-tile").length > 0 && $(".selected-mix-tile").removeClass("selected-mix-tile"), $(this).addClass("selected-colour-tile"), h = $(this).attr("base-colour"), y(), setCurrentObj(!1), w(), isLookBook && (C(), k()), P())
            }), $(".mix-container").click(function() {
                $(this).hasClass("selected-mix-tile") || ($(".selected-colour-tile").length > 0 && $(".selected-colour-tile").removeClass("selected-colour-tile"), $(this).addClass("selected-mix-tile"), y(), setCurrentObj(!1), w(), isLookBook && (C(), k()))
            }), $(".main-product-image").load(function() {
                $(".group-product-image .spinner").addClass("visuallyHidden")
            })
        }, d = !1, c = !1, $(".group-product-image").length > 0 && M(), $(".buy-off-container").length > 0 && $("body").on("click", ".bv-dropdown-item", function() {
            sortOrder = $(this).text(), _gaq.push(["_trackEvent", "Review Sort", "Click", sortOrder])
        }), $("#category-link").length > 0 && E(), $(document).ready(function() {
            if ("undefined" == typeof isLookBook && (isLookBook = !1), isLookBook && $(".template-buy-off").after(I()), $(".lightbox-template-buy-off").after(D()), "" != $("#range-lifestyle-holder").data("src") && "undefined" != $("#range-lifestyle-holder").data("src") && $(".range-lifestyle").attr("src", $("#range-lifestyle-holder").data("src")), $(".buy-off-container").length > 0 && (R(), addRangeListeners(), $("#breadcrumb").removeClass("grid-90 tablet-grid-90 suffix-5 prefix-5 tablet-suffix-5 tablet-prefix-5 grid-80 tablet-grid-80 tablet-prefix-10 tablet-suffix-10 suffix-10 prefix-10").addClass("grid-100 tablet-grid-100 grid-parent"), $(".range-breadcrumb").removeClass("grid-60 prefix-5").addClass("grid-100"), $(".breadcrumb-browse-controls").removeClass("grid-95 tablet-grid-95 mobile-grid-95 tablet-prefix-5 tablet-suffix-5 mobile-prefix-5 mobile-suffix-5").addClass("grid-100 tablet-grid-100 mobile-grid-100"), $(".template-buy-off, .buy-off-container").removeClass("grid-90 prefix-5 suffix-5").addClass("grid-100")), 0 == $(".lookbook-buy-off, .jersey-buy-off").length) {
                p = null, u = !1, $(window).width() < 767 && (u = !0, p = $(".group-images .group-images-set-one").bxSlider({
                    touchEnabled: !1,
                    auto: !1,
                    slideWidth: 500,
                    minSlides: 3,
                    maxSlides: 3
                }));
                var e = function() {
                    var e = {};
                    return function(t, i, s) {
                        s || (s = "Don't call this twice without a uniqueId"), e[s] && clearTimeout(e[s]), e[s] = setTimeout(t, i)
                    }
                }();
                $(window).resize(function() {
                    e(function() {
                        $(window).width() < 767 && !u ? (u = !0, p = $(".group-images .group-images-set-one").bxSlider({
                            touchEnabled: !1,
                            auto: !1,
                            slideWidth: 500,
                            minSlides: 3,
                            maxSlides: 3
                        })) : p && p.destroySlider && $(window).width() > 768 && (p.destroySlider(), p = null, u = !1)
                    }, 500, "windowResize")
                })
            }
        }), e = {
            toggleOpenDescription: P,
            setCurrentObj: setCurrentObj,
            populateRangeImages: y,
            populateRangeBuyOffSection: C,
            setFadedOutRangeImagesBasedOnStock: w,
            populateRangeSizesBasedOnStock: k,
            initAddToBasket: m,
            setBaseBuyOffVars: M,
            addRangeListeners: addRangeListeners,
            initialiseBuyOff: R,
            getRangeBuyOffTemplate: I,
            getLightboxTemplate: D
        }
    }(),
    wishlistModule = function() {
        var e = {
                wishlistProductJson: void 0,
                wishlistStockJson: void 0,
                wishListCollection: {
                    wishlist: []
                }
            },
            t = !1,
            i = "Out Of Stock",
            s = "Pre-Order Available",
            n = "Add To Bag",
            a = !1,
            o = !1,
            r = function() {
                $(".wishlist-add-all, .wishlist-add-to-bag-btn").addtobasket({
                    debug: "false" === tcp_env.is_live,
                    selectedProductArrayBuilder: function(t) {
                        if (!t) return null;
                        var i = [];
                        i = t.hasClass("wishlist-add-all") ? $(".wishlist-product") : t.parent().parent().parent();
                        var s = Array();
                        return i.each(function() {
                            var t = $(this);
                            if ("out of stock" != t.find(".wishlist-add-to-bag-btn span").text().toLowerCase()) {
                                var i = t.find(".range-product").attr("id"),
                                    n = t.attr("sku"),
                                    a = $(".wish-item-qty", t).data("quantity"),
                                    o = t.find(".price-of-item").attr("price"),
                                    r = t.find(".wish-item-title").text(),
                                    l = "";
                                $.each(e.wishlistProductJson.products, function(e, t) {
                                    "undefined" != typeof t[i] && (l = t[i][0].parentCategory)
                                }), s.push({
                                    productid: i,
                                    sku: n,
                                    quantity: a,
                                    price: o,
                                    productDisplayName: r,
                                    productCategory: l
                                })
                            }
                        }), s
                    },
                    waitInitHandler: function() {
                        document.body.style.cursor = "wait"
                    },
                    waitDestroyHandler: function() {
                        document.body.style.cursor = "default"
                    },
                    addToBasketSuccessHandler: function(e, t) {
                        if (e.hasClass("wishlist-add-all")) o = !0;
                        else {
                            var i = e.parent().parent().parent();
                            i.find(".wishlist-add-to-bag-btn span").text("Added to Basket"), i.find(".wishlist-add-to-bag-btn").addClass("grey-wish-btn"), setTimeout(function() {
                                i.find(".wishlist-add-to-bag-btn").removeClass("grey-wish-btn"), i.find(".wishlist-add-to-bag-btn span").text("Add to Bag")
                            }, 3e3)
                        }
                        _gaq.push(["_trackEvent", "Wishlist Add to Basket", "Click", t.productDisplayName])
                    },
                    addToBasketFailedHandler: function() {},
                    trackingElementId: "trackers",
                    validateBeforeAdd: function(e, t) {
                        var i = $(".messages");
                        i.empty();
                        for (var s = !0, n = 0; n < t.length; n++) t[n].sku && t[n].productid && t[n].quantity || (s = !1);
                        return s
                    },
                    addToBasketComplete: function() {
                        o && ($(".wishlist-add-all").addClass("grey-wish-btn").find("span").text("All in stock items added to basket"), setTimeout(function() {
                            $(".wishlist-add-all").removeClass("grey-wish-btn").find("span").text("Add all items to basket")
                        }, 3e3), _gaq.push(["_trackEvent", "Wishlist Add All to Basket", "Click", $(".wishlist-add-to-bag-btn").length + " Items"])), document.body.style.cursor = "default", miniBasket && miniBasket.data("tcplMinibasket").refreshBasket()
                    }
                })
            },
            l = function(e) {
                $.ajax({
                    url: "https://api-ssl.bitly.com/v3/shorten",
                    data: {
                        longUrl: e,
                        apiKey: "R_b310498725681c10639d4ca31a776f4d",
                        login: "toasttechops"
                    },
                    dataType: "jsonp",
                    success: function(e) {
                        var t = e.data.url;
                        $(".url-to-copy").html('<a href="mailto:?subject=My Toast Wishlist&body=You can find my Toast wishlist at: ' + t + '">' + t + "</a>"), $(".share-list-twitter").attr("href", "//twitter.com/share?url=" + t + "&text= My%20Toast%20Wishlist");
                        var i = "http://www.facebook.com/sharer.php?s=100&p[title]=My%20TOAST%20Wishlist&p[summary]=Take%20a%20look%20at%20my%20TOAST%20wishlist&p[url]=" + t + "&p[images][0]=http://d1kh76s6bjh8ww.cloudfront.net/site/Toast_Favicon_250x250_Black.png,%20sharer,toolbar=0,status=0,width=1200,height=1200";
                        $(".share-list-facebook").attr("href", i.replace(/\s/g, "%20"));
                        var s = "http://www.pinterest.com/pin/create/button/?url=" + t + "&media=//d1kh76s6bjh8ww.cloudfront.net/img/logo-mobile.png&description=My%20Toast%20Wishlist";
                        $(".share-list-pinterest").attr("href", s.replace(/\s/g, "%20"))
                    }
                })
            },
            c = function() {
                $.ajax({
                    url: "/services/stockservices.asmx/GetProductVariantStock",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(skuListObject),
                    dataType: "json",
                    success: function(t) {
                        e.wishlistStockJson = $.parseJSON(t.d), u(), p(), r()
                    }
                })
            },
            d = function(t) {
                $.ajax({
                    url: "/services/stockservices.asmx/GetProductData",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: t,
                    dataType: "json",
                    success: function(i) {
                        e.wishlistProductJson = $.parseJSON(i.d), c(t)
                    }
                })
            },
            u = function() {
                for (var i = !1, s = 0; s < e.wishListCollection.wishlist.length; s++)
                    for (var n = !1, a = 0; a < e.wishlistProductJson.products.length; a++) {
                        for (prop in e.wishlistProductJson.products[a]) {
                            if ("title" != prop && "description" != prop && "details" != prop && "fitNotes" != prop && "provenance" != prop)
                                for (var o = 0; o < e.wishlistProductJson.products[a][prop].length; o++) {
                                    n = !1;
                                    for (var r = !1, l = 0; l < e.wishlistProductJson.products[a][prop][o].skuSetArr.length; l++)
                                        if (e.wishlistProductJson.products[a][prop][o].skuSetArr[l].toLowerCase() == e.wishListCollection.wishlist[s].skuCode.toLowerCase() && 0 == $("#" + prop).length) {
                                            n = !0, r = e.wishListCollection.wishlist[s];
                                            break
                                        }
                                    if (n) {
                                        var c = g(e.wishlistProductJson.products[a], e.wishlistProductJson.products[a][prop][o], prop, r);
                                        $(".wishlist-wrapper .wishlist-product-group, .view-wishlist-wrapper .wishlist-product-group").append(c), i || (c.find(".range-product").addClass("selected-range-product"), i = !0), c.find(".wishlist-details").append($('<select class="wishListQtylist visuallyHidden"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>'));
                                        var d = "0" == r.quantity || 0 == r.quantity ? "1" : r.quantity;
                                        c.find(".wishlist-details .wishListQtylist option[value=" + d + "]").attr("selected", "selected"), c.find(".wish-item-qty").attr("data-quantity", d), c.find(".wish-item-qty").text("Quantity: " + d), c.find(".sale-price").length > 0 && c.find(".price").addClass("strike-through");
                                        break
                                    }
                                }
                            if (n) break
                        }
                        if (n) break
                    }
                t ? ($(".wishlist-delete-btn, .slash-seperator").hide(), $(".wishListQtylist").removeClass("visuallyHidden")) : ($(".wishlist-options-wrapper").before(rangeModule.getRangeBuyOffTemplate()), v(), $($(".product-label")[1]).before($('<div class="grid-100 tablet-grid-100 mobile-grid-100 wishlist-update-message visuallyHidden grid-parent" style="display: block;"><span class="wishlist-message"></span></div>')), rangeModule.setBaseBuyOffVars(), rangeModule.addRangeListeners(), rangeModule.initialiseBuyOff())
            },
            h = function(t) {
                for (var i = 0; i < e.wishListCollection.wishlist.length; i++)
                    if (e.wishListCollection.wishlist[i].skuCode.toLowerCase() == t.attr("sku").toLowerCase()) {
                        var s = e.wishListCollection.wishlist[i].quantity = t.find(".wishListQtylist option:selected").val(),
                            n = e.wishListCollection.wishlist[i].skuCode = t.find(".wishlist-sizes").attr("sku");
                        $.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "/services/tcplservices.asmx/UpdateProductInWishlist",
                            data: JSON.stringify({
                                prodCode: t.find(".range-product").attr("id"),
                                skuCode: t.attr("sku"),
                                newSkuCode: n,
                                quantity: s
                            }),
                            success: function() {}
                        })
                    }
            },
            p = function() {
                var t = tcp_env.user.email;
                l(window.location.origin + "/content/wishlist/view-wishlist.htm?sharedWish=" + t + "&wishTitle=Toast Wishlist"), $(".wishlist-add-all").click(function(e) {
                    e.preventDefault();
                    for (var t = 0, i = $(".wishlist-add-to-bag-btn").length - 1; i >= 0; i--) setTimeout(function() {
                        $($(".wishlist-add-to-bag-btn")[i]).trigger("click"), t += 200
                    }, t)
                }), $(".wishlist-edit-btn").click(function() {
                    var e = $(this);
                    $(".wishlist-product").removeClass("wishlist-item-selected"), e.parent().parent().parent().addClass("wishlist-item-selected"), $(".wishlist-update-message").addClass("visuallyHidden");
                    for (var t = 0, i = $(".wishlist-edit-btn").length - 1; i >= 0; i--)
                        if ($(".wishlist-edit-btn")[i] === this) {
                            t = i;
                            break
                        }
                    var s = 0,
                        n = 4;
                    for (window.innerWidth <= 1024 && window.innerWidth > 767 ? n = 3 : window.innerWidth < 768 && (n = 1); t >= s;) s += n, s >= t + 1 && (s <= $(".wishlist-edit-btn").length ? $($(".wishlist-product")[s - 1]).after($(".buy-off-container")) : $($(".wishlist-product")[$(".wishlist-edit-btn").length - 1]).after($(".buy-off-container")));
                    setTimeout(function() {
                        $($(".wishlist-product")[t]).find(".range-product").trigger("click"), $("body, html").animate({
                            scrollTop: $(".buy-off-container").offset().top
                        }, "250")
                    }, 200);
                    var a = e.parent().parent().find(".wishlist-sizes").attr("sku"),
                        o = e.parent().parent().find(".wishlist-item-colour").text();
                    setTimeout(function() {
                        for (var e = $(".product-sizes .size").length - 1; e >= 0; e--)
                            if ($($(".product-sizes .size")[e]).attr("sku-id") == a) {
                                $(".product-sizes .size").removeClass("size-selected"), $($(".product-sizes .size")[e]).trigger("click", [!0]);
                                break
                            }
                        for (var e = $(".product-swatches .product-swatch").length - 1; e >= 0; e--)
                            if ($($(".product-swatches .product-swatch")[e]).attr("alt") == o) {
                                $($(".product-swatches .product-swatch")[e]).trigger("click", [!0]);
                                break
                            }
                    }, 500);
                    var r = $(this).parent().parent().find(".wish-item-title").text();
                    _gaq.push(["_trackEvent", "Edit", "Click", r])
                }), $(".wishlist-delete-btn").click(function() {
                    for (var t = $(this).parent().parent().parent(), i = t.find(".wishlist-sizes").attr("sku"), s = 0; s < e.wishListCollection.wishlist.length; s++)
                        if (e.wishListCollection.wishlist[s].skuCode.toLowerCase() == i.toLowerCase()) {
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "/services/tcplservices.asmx/RemoveProductFromWishlist",
                                data: JSON.stringify({
                                    prodCode: e.wishListCollection.wishlist[s].prodCode,
                                    skuCode: i
                                }),
                                success: function() {
                                    t.remove(), $(".expanding-wish-sharer").addClass("wish-sharer-closed"), e.wishListCollection.wishlist.splice(s, 1), m(), 0 == $(".wishlist-product").length && $(".wishlist-product-group").html('<p class="empty-wishlist-text">You&#39;ve got nothing on your wishlist. Find things to add to it <a href="/">here</a></p>')
                                }
                            });
                            break
                        }
                    var n = $(this).parent().parent().find(".wish-item-title").text();
                    _gaq.push(["_trackEvent", "Delete", "Click", n])
                }), $(".wishlist-sizes").change(function() {
                    for (var t = $(this).parent().parent().parent(), i = t.attr("prod-key"), s = $(this).attr("sku"), n = 0; n < e.wishlistStockJson.stocklist.length; n++)
                        if (e.wishlistStockJson.stocklist[n].prodId.toLowerCase() == i.toLowerCase())
                            for (var a = 0; a < e.wishlistStockJson.stocklist[n].sizesInStock.length; a++) {
                                var o = e.wishlistStockJson.stocklist[n].sizesInStock[a];
                                o.sku.toLowerCase() == s && t.find(".wishlist-messages").text(f(o))
                            }
                    h(t), $(".expanding-wish-sharer").addClass("wish-sharer-closed")
                }), $(".wishListQtylist").change(function() {
                    var e = $(this).parent().parent().parent();
                    h(e)
                }), $(".share-list-facebook, .share-list-twitter, .share-list-pinterest").popupWindow({
                    height: 350,
                    width: 670,
                    centerBrowser: 1
                })
            },
            f = function(e) {
                return "undefined" == typeof rangeJson ? 0 == e.stlev && "" == e.preOrderAvailable ? "<span>This is currently out of stock in this size</span>" : 0 == e.stlev && "" != e.preOrderAvailable ? "<span>This is expected in our warehouse on " + e.preOrderAvailable + " in this size. You can still order we will send your item out to you as soon as it arrives.</span>" : 0 != e.stlev && e.stlev < 7 ? "<span>We have a limited number of this item left in this size.</span>" : "" : void 0
            },
            g = function(t, a, o, r) {
                var l = "&#163;" === tcp_env.currency_symbol ? "£" : "undefined" != typeof tcp_env.currency_symbol ? tcp_env.currency_symbol : "£",
                    c = a.price;
                if (-1 != a.price.indexOf(",")) {
                    var d = a.price.split(",");
                    c = d[0] + " - " + l + d[d.length - 1]
                } else c = parseFloat(a.price).toFixed(2).replace(".00", "");
                var u = c;
                c = '<span class="price">' + l + c + "</span>";
                var h = "";
                a.price != a.salePrice && (u = parseFloat(a.salePrice).toFixed(2).replace(".00", ""), h = '<span class="sale-price">' + l + u + "</span>");
                var p = "",
                    f = n,
                    g = $("<div />").html(t.description).text();
                ("undefined" == typeof g || 0 == g.length) && (g = t.description);
                for (var m = "", v = 0; v < e.wishlistStockJson.stocklist.length; v++)
                    if (e.wishlistStockJson.stocklist[v].prodId.toLowerCase() == a.prodId.toLowerCase()) {
                        for (var b = 0; b < e.wishlistStockJson.stocklist[v].sizesInStock.length; b++) {
                            var y = e.wishlistStockJson.stocklist[v].sizesInStock[b],
                                w = "";
                            if (r.skuCode.toLowerCase() == e.wishlistStockJson.stocklist[v].sizesInStock[b].sku.toLowerCase()) {
                                var N = "";
                                "" != y.preOrderAvailable ? (N = "pre-order", f = s) : 0 == y.stlev && (f = i), p = p + '<label stlev="' + y.stlev + '" class="wishlist-sizes visuallyHidden ' + N + '" sku="' + y.sku + '" value="' + y.value1 + '">' + y.value1 + w + "</label>", m = y.value1;
                                break
                            }
                        }
                        break
                    }
                return $(['<div class="wishlist-product grid-25 tablet-grid-33 mobile-grid-100" sku="' + r.skuCode + '" prod-key="' + a.prodId + '">', '<div class="wishlist-image grid-100 tablet-grid-100 mobile-grid-100">', '<a href="/product/' + a.parentCategory.replace(/ /g, "+").replace(/\//g, "+") + "/" + o + "/" + t.title.replace(/ /g, "+").replace(/\//g, "+") + ".htm?clr=" + a.prodId.slice(0, 5) + "_" + a.colour.replace(/ /g, "").replace(/\//g, "") + '">', '<img src="' + a.upImg.replace("/product/", "/global/") + '" alt="' + t.title + '" title="' + t.title + '" class="grid-image product-image">', "</a>", "</div>", '<div class="wishlist-details-wrapper grid-100 tablet-grid-100 mobile-grid-100">', '<div class="wishlist-details grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<h3 class="wish-item-title">' + t.title + "</h3>", '<p class="price-of-item" price="' + u + '">' + c + " " + h + "</p>", '<h3 class="wishlist-item-colour">' + a.colour + "</h3>", '<h3 class="wishlist-item-size">Size: ' + m + "</h3>", p, '<h3 class="wish-item-qty"></h3>', "</div>", '<div class="grid-100 tablet-grid-100 mobile-grid-100 grid-parent">', '<div class="wishlist-add-to-bag-btn"><span>' + f + "</span></div>", "</div>", '<div class="wishlist-button-container">', '<span class="wishlist-edit-btn">Edit</span><span class="slash-seperator">/</span><span class="wishlist-delete-btn">Remove</span>', "</div>", '<span class="range-product visuallyHidden" id="' + r.prodCode + '"><img></span>', "</div>", "</div>"].join(""))
            },
            m = function() {
                $(".wishlist-qty").text(e.wishListCollection.wishlist.length)
            },
            v = function() {
                $(".product-button.checkout").before($('<div id="updateItemWishlist" class="grid-100 tablet-grid-100  mobile-grid-100 product-button"><a id="updateItemWishlist" href="#" class="wishlist-update-item">Update Item In Wishlist</a></div>')), $("#updateItemWishlist").click(function(e) {
                    e.preventDefault();
                    var t = $(this),
                        a = $(".wishlist-item-selected"),
                        o = t.parent().parent().find(".size-selected").attr("sku-id"),
                        r = t.parent().parent().find(".qtyList option:selected").val();
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/services/tcplservices.asmx/UpdateProductInWishlist",
                        data: JSON.stringify({
                            prodCode: a.find(".range-product").attr("id"),
                            skuCode: a.attr("sku"),
                            newSkuCode: o,
                            quantity: r
                        }),
                        success: function() {
                            $(".wishlist-update-message").removeClass("visuallyHidden"), $(".wishlist-update-message .wishlist-message").text("This item in your wishlist has been updated with your current selections"), a.find(".wishlist-image img").attr("src", $(".selected-swatch").attr("src").replace(sizeRegex, "/350/")), a.find(".wishlist-item-colour").text($(".buy-off-container .colour-showing").text()), a.find(".wishlist-item-size").text("Size: " + $(".buy-off-container .size-selected").text());
                            var e = $(".buy-off-container .qtyList option:selected").val();
                            (0 == e || "0" == e) && (e = "1"), a.find(".wish-item-qty").text("Quantity: " + e);
                            var t = $(".buy-off-container .size-selected"),
                                o = t.attr("sku-id"),
                                r = "" == t.attr("low-stock") ? 0 : t.attr("low-stock");
                            a.find(".wishlist-sizes").attr({
                                sku: o,
                                stlev: r,
                                value: t.text()
                            });
                            var l = t.hasClass("pre-order");
                            a.find(".wishlist-add-to-bag-btn span").text(0 == r && l ? s : 0 != r || l ? n : i), a.find(".wishlist-sizes").toggleClass("pre-order", l), a.find(".wishlist-sizes").text(t.text()), a.find(".wishListQtylist option:selected").removeAttr("selected");
                            for (var c = a.find(".wishListQtylist option").length - 1; c >= 0; c--)
                                if ($(a.find(".wishListQtylist option")[c]).val() == e) {
                                    $(a.find(".wishListQtylist option")[c]).attr("selected", "selected");
                                    break
                                }
                            a.attr({
                                sku: $(".size-selected").attr("sku-id"),
                                "prod-key": $(".selected-swatch").attr("id")
                            })
                        }
                    });
                    var l = $(".wishlist-item-selected .wish-item-title").html();
                    _gaq.push(["_trackEvent", "Update", "Click", l])
                }), $(".buy-off-container").on("click", ".swatch, .size", function() {
                    $(".wishlist-update-message").addClass("visuallyHidden")
                }), $(".buy-off-container").on("change", ".qtyList", function() {
                    $(".wishlist-update-message").addClass("visuallyHidden")
                })
            },
            b = function() {
                var t = "";
                a || (t = "visuallyHidden"), $(".product-button.checkout").before($('<div class="grid-100 tablet-grid-100 mobile-grid-100 product-button remove-wishlist-item-wrapper ' + t + '"><a href="#" id="deleteFromWishlist" class="delete-from-wishlist">Remove From Wishlist</a></div>')), $("#deleteFromWishlist").click(function(t) {
                    t.preventDefault();
                    for (var i = e.wishListCollection.wishlist.length - 1; i >= 0; i--)
                        if (e.wishListCollection.wishlist[i].prodCode == $("#productId").val() || e.wishListCollection.wishlist[i].prodCode == $(".buy-off-container .product-details").attr("prod-id")) {
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "/services/tcplservices.asmx/RemoveProductFromWishlist",
                                data: JSON.stringify({
                                    prodCode: e.wishListCollection.wishlist[i].prodCode,
                                    skuCode: e.wishListCollection.wishlist[i].skuCode
                                }),
                                success: function(t) {
                                    if (t.d.Success) {
                                        var s = $(".product-details").find(".product-info h1").text() || $(".product-details").find(".product-info h3").text();
                                        $(".product-details").find("#added-to-basket, #addedToBasket").show().html("<span class='message-text'>" + s + " has been removed from your wishlist.</span>"), $("#deleteFromWishlist").parent().addClass("visuallyHidden"), $("#addToWishlist").parent().removeClass("visuallyHidden"), e.wishListCollection.wishlist.splice(i, 1), m(), "undefined" != typeof s && _gaq.push(["_trackEvent", "Delete from Wishlist", "Click", s])
                                    } else {
                                        var n = "/login.htm?returnUrl=";
                                        n += document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E"), window.location.href = n
                                    }
                                }
                            });
                            break
                        }
                })
            },
            y = function() {
                var t = "";
                a && (t = "visuallyHidden"), $(".product-button.checkout").before($('<div class="grid-100 tablet-grid-100 mobile-grid-100 product-button add-wishlist-item-wrapper ' + t + '"><a href="#" id="addToWishlist" class="add-to-wishlist">Add To Wishlist</a></div>')), $("#addToWishlist").click(function(t) {
                    t.preventDefault(), document.body.style.cursor = "wait";
                    var i = {
                        prodCode: "",
                        quantity: "",
                        skuCode: ""
                    };
                    if (0 == $(".buy-off-container").length) {
                        for (var s = 0, n = 0; n < $(".ctab").length; n++) $($(".ctab")[n]).is(":visible") && (s = parseInt($($(".ctab")[n]).find(".qtylist").val()));
                        i = {
                            prodCode: $("#productId").val(),
                            quantity: s,
                            skuCode: $(".size-selected").attr("data-sku")
                        }
                    } else i = {
                        prodCode: $(".product-details").attr("prod-id"),
                        quantity: parseInt($(".qtyList").val()),
                        skuCode: $(".size-selected").attr("sku-id")
                    };
                    var a = _.find(e.wishListCollection.wishlist, function(e) {
                        return e.skuCode.toLowerCase() == i.skuCode.toLowerCase()
                    });
                    void 0 != a ? a.quantity = i.quantity : e.wishListCollection.wishlist.push(i), $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/services/tcplservices.asmx/AddProductToWishlist",
                        data: JSON.stringify({
                            prodCode: i.prodCode,
                            skuCode: i.skuCode,
                            quantity: i.quantity
                        }),
                        success: function(e) {
                            if (document.body.style.cursor = "default", e.d.Success) {
                                var t = $(".product-details").find(".product-info h1").text() || $(".product-details").find(".product-info h3").text();
                                t = t.toUpperCase(), m(), $(".product-details").find("#added-to-basket, #addedToBasket").show().html("<span class='message-text'>" + t + " has been added to your wishlist.</span>"), $("#deleteFromWishlist").parent().removeClass("visuallyHidden"), $("#addToWishlist").parent().addClass("visuallyHidden"), "undefined" != typeof t && _gaq.push(["_trackEvent", "Add to Wishlist (Signed In)", "Click", t])
                            } else {
                                var t = $(".product-details").find(".product-info h1").text() || $(".product-details").find(".product-info h3").text(),
                                    i = "/login.htm?returnUrl=";
                                i = i + document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E") + "?addProdToWishList=true%26selectedProd=" + $(".size-selected").attr("sku-id"), window.location.href = i, "undefined" != typeof t && _gaq.push(["_trackEvent", "Add to Wishlist (Not Signed In)", "Click", t])
                            }
                        }
                    })
                })
            };
        e.updateAddRemoveWishlistButton = function() {
            w(), $(".add-wishlist-item-wrapper").toggleClass("visuallyHidden", a), $(".remove-wishlist-item-wrapper").toggleClass("visuallyHidden", !a)
        };
        var w = function() {
            a = !1;
            var t = $("#productId").val();
            "undefined" == typeof t && (t = $(".buy-off-container .product-details").attr("prod-id"));
            var i = _.find(e.wishListCollection.wishlist, function(e) {
                return e.prodCode == t
            });
            void 0 != i && (a = !0)
        };
        return $(document).ready(function() {
            $(".login-item").before($('<li class="wishlist-btn"><a href="/content/wishlist/wishlist.htm">wishlist (<span class="wishlist-qty">0</span>)</a></li>')), $(".view-wishlist-wrapper").length > 0 && (t = !0);
            var i = [];
            t ? (i = getParameterByName("sharedWish"), $(".view-wishlist-wrapper").prepend($('<div class="view-wishlist-title"><h2>' + getParameterByName("wishTitle") + "</h2></div>")), $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/services/tcplservices.asmx/GetWishlistForUser",
                data: JSON.stringify({
                    email: i
                }),
                success: function(t) {
                    if (e.wishListCollection.wishlist = t.d.wishlist, e.wishListCollection.wishlist.length > 0) {
                        skuListObject = {
                            skuList: []
                        };
                        for (var i = 0; i < e.wishListCollection.wishlist.length; i++) skuListObject.skuList.push(e.wishListCollection.wishlist[i].prodCode);
                        d(JSON.stringify(skuListObject))
                    }
                }
            })) : $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: "/services/tcplservices.asmx/GetWishlist",
                data: null,
                success: function(t) {
                    if (t.d.wishlist.length > 0) {
                        if (e.wishListCollection.wishlist = t.d.wishlist, m(), $(".wishlist-wrapper").length > 0)
                            if (e.wishListCollection.wishlist.length > 0) {
                                skuListObject = {
                                    skuList: []
                                };
                                for (var i = 0; i < e.wishListCollection.wishlist.length; i++) skuListObject.skuList.push(e.wishListCollection.wishlist[i].prodCode);
                                d(JSON.stringify(skuListObject))
                            } else $(".share-my-list").hide()
                    } else $(".wishlist-wrapper").length > 0 && ($(".wishlist-product-group").html('<p class="empty-wishlist-text">You&#39;ve got nothing on your wishlist. Find things to add to it <a href="/">here</a></p>'), $(".expanding-wish-sharer").hide());
                    if ($(".product-details").length > 0) {
                        w(), y(), b();
                        var s = getParameterByName("addProdToWishList");
                        setTimeout(function() {
                            s && $("#addToWishlist").trigger("click")
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
        }), e
    }(),
    reviewDisplayModule = function() {
        var e = {},
            t = 0,
            i = 6,
            s = !1,
            n = function(e) {
                var i = new Date(e.LastModeratedTime),
                    s = new Date(e.SubmissionTime),
                    n = 864e5,
                    a = (Math.round(Math.abs((s.getTime() - (new Date).getTime()) / n)), Math.round(((new Date).getTime() - s.getTime()) / 1e3 / 60 / 60)),
                    o = Math.ceil(e.Rating / 5 * 100);
                return reviewNode = $(['<li class="review-content-top-review review-content-review" itemprop="review" itemscope="" itemtype="http://schema.org/Review">', '<meta itemprop="itemReviewed" content="' + $(".product-info h1").text() + '">', '<div class="review-content-item">', '<div class="review-content-data-summary">', '<div class="review-content-header-meta">', '<span class="review-content-rating review-rating-ratio" itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating" tabindex="0">', '<meta itemprop="ratingValue" content="' + e.Rating + '">', '<meta itemprop="bestRating" content="' + t + '">', '<span class="review-rating-stars-container">', '<abbr title="' + e.Rating + '" class="review-rating review-rating-stars review-rating-stars-off visuallyHidden" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</abbr>', '<abbr title="' + e.Rating + '" style="width:' + o + '%;" class="review-rating-max review-rating-stars review-rating-stars-on" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</abbr>', '<span class="review-off-screen visuallyHidden">' + e.Rating + " out of 5 stars.</span>", "</span>", "</span>", '<div class="review-content-meta-wrapper">', '<div class="review-content-meta" role="presentation">', '<div class="review-content-reference-data review-content-author-name">', '<h3 class="review-author font-weight-300 medFont" itemprop="author">' + e.UserNickname + "</h3>", '<div class="review-content-datetime" role="presentation">', '<meta itemprop="dateCreated" content="' + s.getDate() + "/" + s.getMonth() + "/" + s.getFullYear() + '">', '<meta itemprop="datePublished" content="' + i.getDate() + "/" + i.getMonth() + "/" + i.getFullYear() + '">', a > 24 ? '<span class="review-content-datetime-stamp">' + s.toDateString() + "</span>" : '<span class="review-content-datetime-stamp">' + a + " hours ago &nbsp;</span>", "</div>", "</div>", "</div>", "</div>", "</div>", '<div class="review-content-title-container">', e.IsRatingsOnly === !1 ? '<h4 class="review-content-title font-weight-300 medFont" itemprop="headline">' + e.Title + "</h4>" : "", "</div>", "</div>", '<div class="review-content-summary-body" itemprop="reviewBody">', '<div class="review-content-summary-body-text">', e.IsRatingsOnly === !1 ? "<p>" + e.ReviewText + "</p>" : "", "</div>", "</div>", '<div class="review-secondary-ratings" role="presentation">', '<dl class="review-content-secondary-ratings" role="presentation">', "</dl>", "</div>", "</div>", "</li>"].join(""))
            },
            a = function(e, t) {
                if ("boolean" != typeof e && null !== e) var i = $(['<dd class="review-content-slider">', '<span class="review-content-slider-container">', '<ul class="review-content-slider-bar" role="presentation">', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', '<li class="review-content-slider-segment" ></li>', "</ul>", "</span>", '<span class="review-off-screen visuallyHidden">Rating of 1 means</span>', '<span class="review-content-slider-sublabel1">' + e.MinLabel + "</span>", '<span class="review-off-screen visuallyHidden">Rating of 5 means</span>', '<span class="review-content-slider-sublabel2">' + e.MaxLabel + "</span>", '<span class="review-off-screen visuallyHidden">' + e.Value + " out of 5</span>", "</dd>"].join(""));
                else {
                    var s = e === !0 ? "Yes" : "No";
                    e = {
                        Label: "Would you recommend this product to a friend?",
                        Value: "",
                        ValueLabel: s
                    };
                    var i = $()
                }
                var n = $('<dt class="review-content-secondary-ratings-label medFont">' + e.Label + ': <span class="secondary-figure">' + e.Value + "</span> - " + e.ValueLabel + "</dt>");
                t.find(".review-content-secondary-ratings").append(n), t.find(".review-content-secondary-ratings").append(i), $(i.find(".review-content-slider-segment")[e.Value - 1]).addClass("selected")
            },
            o = function() {
                if ("undefined" != typeof currentProd) return currentProd.ProductStyleCode;
                var e = $("#productId").val();
                if ($(".buy-off-container ").length > 0)
                    if (-1 === $(".selected-range-product").attr("id").indexOf("Key")) e = $(".selected-range-product").attr("id");
                    else {
                        var t = $(".selected-range-product").attr("id").indexOf("Key");
                        e = $(".selected-range-product").attr("id").slice(0, t)
                    }
                return e
            },
            r = function(e, s) {
                c(), $(".read-more-reviews").remove(), $(".product-reviews-bottom").remove(), $(".review-content-review").remove();
                var r = o(),
                    l = "/login.htm?returnUrl=";
                l += document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E"), $(".buy-off-container ").length > 0 && (tcp_env.user.email.length > 0 ? $("#add-review").attr("href", "http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=" + r) : $("#add-review").attr("href", l));
                var e = null == e || "undefined" == typeof e || e.length < 1 ? "SubmissionTime:desc" : e;
                $.ajax({
                    url: "//api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=9qho0pl4cxnt05nqnt3y6yzk6&Filter=ProductId:" + r + "&Sort=" + e + "&Limit=50",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    success: function(e) {
                        if (!e.HasErrors)
                            if (0 === e.TotalResults) $(".noReviews").removeClass("visuallyHidden"), $("#review-section header h2").text("Reviews (0)"), $("#reviewContainer").addClass("visuallyHidden"), $(".noReviews").length < 1 && ($("#reviewContainer").before('<p class="noReviews">There are currently no reviews for this product.</p>'), tcp_env.user.email.length > 0 ? ($("#reviewContainer").before('<p class="noReviews"><a href="http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=' + r + '" target="_blank">Be the first to review this product.</a></p>'), $("#review-section header h2").after($('<a href="http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=' + r + '" target="_blank"><span class="first-to-review-summary noReviews">be first to review this</span></a>'))) : ($("#reviewContainer").before('<p class="noReviews"><a href="' + l + '">Be the first to review this product.</a></p>'), $("#review-section header h2").after($('<a href="' + l + '"><span class="first-to-review-summary noReviews">Be first to review this</span></a>')))), $("#reviewContainer").removeClass("visuallyHidden").addClass("no-reviews"), tcp_env.user.email.length > 0 ? ($(".noReviews a, #add-review").attr("href", "http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=" + r), $(".first-to-review-summary").parent().attr("href", "http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=" + r)) : $("#reviewContainer .review-dropdown").hide(), $("#reviewSummaryContainer").hide();
                            else {
                                var o = "",
                                    c = "";
                                $(".noReviews").addClass("visuallyHidden"), $("#reviewContainer").removeClass("visuallyHidden no-reviews"), $(".buy-off-container").length > 0 ? (o = $("#mainContent .buy-off-container"), c = "grid-60 suffix-5 tablet-grid-60") : (o = $("#mainContent > .product-details"), c = "prefix-10 grid-50 suffix-5 tablet-grid-50 tablet-prefix-5"), o.append('<div class="product-reviews-bottom visuallyHidden ' + c + ' mobile-grid-100 float-left grid-parent"></div>');
                                for (var d = 0, u = 0; u < e.Results.length; u++) d += e.Results[u].Rating, e.Results[u].Rating > t && (t = e.Results[u].Rating);
                                var h = 0 == e.TotalResults ? 1 : e.TotalResults,
                                    p = (d / h).toFixed(1),
                                    f = Math.ceil(p / 5 * 100);
                                $("#review-section header h2").text(e.TotalResults > 1 ? "Reviews (" + e.TotalResults + ")" : "Review (" + e.TotalResults + ")"), $("#reviewSummaryContainer").show();
                                var g = $(['<dl class="review-stars-container" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating" role="presentation">', '<meta itemprop="itemReviewed" content="' + $(".product-info h1").text() + '">', '<dd class="review-rating-ratio-count visuallyHidden" role="presentation">', '<span itemprop="reviewCount">Reviews ' + e.TotalResults + "</span>", "</dd>", '<dd class="review-rating-ratio" role="presentation">', '<span class="review-rating-stars-on review-rating-stars" aria-hidden="true"><span style="width: ' + f + '%;">&#9733;&#9733;&#9733;&#9733;&#9733;</span></span>', '<meta itemprop="bestRating" content="' + t + '">', '<span class="review-off-screen visuallyHidden">' + p + " out of 5 stars. Read reviews.</span>", "</dd>", '<dd class="review-rating-ratio-number" role="presentation" aria-hidden="true">', '<span class="review-rating">', '<span itemprop="ratingValue">' + p + " / 5.0</span>", "</span>", "</dd>", "</dl>"].join(""));
                                s || $("#reviewSummaryContainer").html(g), $("#reviewContainer ul.review-list").html(""), $(".product-reviews-bottom").html("");
                                for (var u = 0; u < e.Results.length; u++) {
                                    $newReview = n(e.Results[u]), i > u ? $("#reviewContainer ul.review-list").append($newReview) : $(".product-reviews-bottom").append($newReview);
                                    for (var m = 0; m < e.Results[u].SecondaryRatingsOrder.length; m++) null !== e.Results[u].SecondaryRatings[e.Results[u].SecondaryRatingsOrder[m]].ValueLabel && a(e.Results[u].SecondaryRatings[e.Results[u].SecondaryRatingsOrder[m]], $newReview);
                                    a(e.Results[u].IsRecommended, $newReview)
                                }
                                e.TotalResults > i && ($("#reviewContainer").append('<a href="#" class="read-more-reviews"><span>Read more reviews</span></a>'), $(".read-more-reviews").click(function(e) {
                                    e.preventDefault(), $(".product-reviews-bottom").removeClass("visuallyHidden"), $("html, body").animate({
                                        scrollTop: $(".product-reviews-bottom").offset().top - $(".main-header").height()
                                    }, 500);
                                    var t = $(".product-info ").find("h1").html() || $(".product-info ").find("h3").html();
                                    t = $.trim(t), _gaq.push(["_trackEvent", "Read More Reviews", "Click", t])
                                })), s && setTimeout(function() {
                                    $(".product-accordion").accordionA("toggle", "#review-section", !0)
                                }, 500)
                            }
                    }
                })
            },
            l = function() {
                var e = [],
                    t = "";
                if ("undefined" != typeof productJson) {
                    for (var i = 0; i < productJson.products.length; i++)
                        for (prop in window.productJson.products[i]) e.push(prop), i < productJson.products.length - 1 ? t = t + prop + "," : t += prop;
                    $.ajax({
                        url: "//api.bazaarvoice.com/data/statistics.json?apiversion=5.4&passkey=9qho0pl4cxnt05nqnt3y6yzk6&Filter=ProductId:" + t + "&Limit:100&stats=NativeReviews",
                        type: "GET",
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "jsonp",
                        success: function(e) {
                            if (!e.HasErrors)
                                for (var t = ["Key1", "Key2", "Key3", "Key4", "Key5", "Key6", "Key7", "Key8"], i = e.Results.length - 1; i >= 0; i--)
                                    if (0 !== e.Results[i].ProductStatistics.NativeReviewStatistics.TotalReviewCount)
                                        for (var s = e.Results[i].ProductStatistics.ProductId, n = 0; n < t.length; n++) {
                                            var a = $("#" + s);
                                            if (!(a.length > 0)) break;
                                            var o = null === e.Results[i].ProductStatistics.NativeReviewStatistics.AverageOverallRating ? 0 : e.Results[i].ProductStatistics.NativeReviewStatistics.AverageOverallRating;
                                            $(a.selector + " .productReviewStars").html('<span class="review-rating-stars-on review-rating-stars grid-100 tablet-grid-100 mobile-grid-100 grid-parent"><span class="stars-maintain-width"><span class="float-left"><span class="stars-block">&#9733;&#9733;&#9733;&#9733;&#9733;</span></span><span class="number-of-reviews"></span></span></span>');
                                            var r = o / 5 * 100;
                                            $(a.selector + " .stars-block").css("width", r + "%"), $(a.selector + " .number-of-reviews").text("(" + e.Results[i].ProductStatistics.NativeReviewStatistics.TotalReviewCount + ")")
                                        }
                        }
                    })
                }
            },
            c = function() {
                if ($(".product-accordion").length > 0 && $("#review-section").length < 1) {
                    {
                        "undefined" == typeof $("#productId").val() ? $(".buy-off-container .product-details").attr("prod-id") : $("#productId").val()
                    }
                    $(".product-accordion").append($(['<section id="review-section" aria-expanded="false">', '<header><h2>Reviews</h2><div id="reviewSummaryContainer"></div></header>', '<div class="content">', '<div id="reviewContainer">', function() {
                        if (tcp_env.user.email.length > 0) return ['<a id="add-review" href="http://display.ugc.bazaarvoice.com/static/toast/en_GB/container.htm?bvaction=rr_submit_review&bvproductId=' + o() + '" target="_blank">', '<span class="grid-40 suffix-10 tablet-grid-40 tablet-suffix-10 mobile-grid-40 mobile-suffix-10 grid-parent">Add Review</span>', "</a>", '<div class="review-dropdown grid-40 prefix-10 tablet-grid-40 tablet-prefix-10 mobile-grid-40 mobile-prefix-10">'].join("");
                        var e = "/login.htm?returnUrl=";
                        return e += document.location.pathname.replace(/\//gi, "%2f").replace(/\./gi, "%2E"), ['<a id="add-review" href="' + e + '">', '<span class="grid-40 suffix-10 tablet-grid-40 tablet-suffix-10 mobile-grid-40 mobile-suffix-10 grid-parent">Add Review</span>', "</a>", '<div class="review-dropdown grid-40 prefix-10 tablet-grid-40 tablet-prefix-10 mobile-grid-40 mobile-prefix-10">'].join("")
                    }(), '<div class="review-dropdown-target">', '<button type="button" role="menuitem">', '<span class="review-dropdown-title">Sort</span>', '<span class="review-off-screen visuallyHidden">Menu, press enter to show options</span>', "</button>", "</div>", '<label for="review-dropdown-select-1" class="review-off-screen visuallyHidden">Sort by</label>', '<div class="review-dropdown-select visuallyHidden">', '<ul class="review-dropdown-active">', '<li class="review-dropdown-item review-dropdown-item-selected" data-review-sort-value="positive" role="menuitem">Highest to Lowest Rating</li>', '<li class="review-dropdown-item" data-review-sort-value="negative" role="menuitem">Lowest to Highest Rating</li>', '<li class="review-dropdown-item" data-review-sort-value="mostRecent" role="menuitem">Most Recent</li>', "</ul>", "</div>", "</div>", '<ul class="review-list"></ul>', "</div>", "</div>", "</section>"].join(""))), $("#mainContent").on("click", "#add-review", function() {
                        var e = $(".product-details .product-info h1").text() || $(".product-details .product-info h3").text() || $(".wishlist-item-selected .wish-item-title").text();
                        _gaq.push(["_trackEvent", "Add Review", "Click", e])
                    }), s || ($(".product-page").length < 1 && $(".product-accordion").accordionA(), $(".product-accordion").on("click", "section header", function() {
                        var e = $(this).text().split("(");
                        e = $.trim(e[0]), e.match(/&/g) && (e = e.replace("&", "and")), e.match(/Review/g) && (e = "Reviews"), ($(".product-page").length > 0 && e.match(/Reviews/g) || $(".product-page").length < 1) && _gaq.push("true" == $(this).parent().attr("aria-expanded") ? ["_trackEvent", e, "Click", "Close"] : ["_trackEvent", e, "Click", "Open"])
                    })), s = !0, $(".review-dropdown-target button").mousedown(function(e) {
                        e.preventDefault()
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
                                    r("SubmissionTime:desc", !0), $(".review-dropdown-title").html("Most Recent")
                                }, 250);
                                break;
                            case "negative":
                                setTimeout(function() {
                                    r("Rating:asc", !0), $(".review-dropdown-title").html("Lowest to Highest Rating")
                                }, 250);
                                break;
                            case "positive":
                                setTimeout(function() {
                                    r("Rating:desc", !0), $(".review-dropdown-title").html("Highest to Lowest Rating")
                                }, 250)
                        }
                        $(".review-dropdown-select").addClass("visuallyHidden"), sortOrder = $(this).text(), sortOrder = $.trim(sortOrder), _gaq.push(["_trackEvent", "Review Sort", "Click", sortOrder])
                    })
                }
            };
        return $(document).ready(function() {
            $(".lookbook-buy-off").length < 1 && ("undefined" != typeof $(".selected-range-product").attr("id") || "undefined" != typeof $("#productId").val()) ? r() : $(".category-product-items").length > 0 && l()
        }), e = {
            callReviews: r,
            callCategoryReviews: l
        }
    }();
$(document).ready(function() {
    $(".buy-off-container #ctl00_globalMainContent_btnCheckout").attr("href", "/basket.htm"), flagSwap(), "undefined" != typeof toast_config && toast_config.in_sale === !0 ? $(".standard-pp").show() : $(".free-pp-and-returns").show(), showMeTheMoney(), "" === $.cookie("preset_filters") && $.removeCookie("preset_filters");
    var e = getParameterByName("presetFilters").split("~");
    e.length > 0 && "" != e[0] && ($.removeCookie("preset_filters"), $.cookie("preset_filters", "size~" + e[0].slice(1, 3), {
        path: "/"
    }));
    getParameterByName("mediacode")
}), setTimeout(function() {
    var e = document.createElement("script"),
        t = document.getElementsByTagName("script")[0];
    e.src = document.location.protocol + "//dnn506yrbagrg.cloudfront.net/pages/scripts/0014/1479.js?" + Math.floor((new Date).getTime() / 36e5), e.async = !0, e.type = "text/javascript", t.parentNode.insertBefore(e, t)
}, 1);