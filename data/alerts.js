// Supports alerts
// https://www.jquery-az.com/2-demos-of-displaying-bootstrap-alert-by-jquery-events/

! function(t, e, n, r) {
    "use strict";
    var s = function(e, r) {
            function s(t) {
                return "notice" === t ? "info" : "error" === t ? "danger" : t
            }

            function i(e) {
                return {
                    errs: t.grep(e, function(t) {
                        return "error" === t.priority || "danger" === t.priority
                    }),
                    warns: t.grep(e, function(t) {
                        return "warning" === t.priority
                    }),
                    infos: t.grep(e, function(t) {
                        return "notice" === t.priority || "info" === t.priority
                    }),
                    succs: t.grep(e, function(t) {
                        return "success" === t.priority
                    })
                }
            }
            var a, o = this;
            o.element = e, o.options = t.extend({}, t.fn.bsAlerts.defaults, r), t(n).on("add-alerts", function() {
                var t = Array.prototype.slice.call(arguments, 1);
                o.addAlerts(t)
            }), t(n).on("clear-alerts", function() {
                o.clearAlerts()
            }), t.each(this.options.ids.split(","), function(e, r) {
                var s = t.trim(r);
                if (s.length > 0) {
                    var i = "set-alert-id-" + s;
                    t(n).on(i, function() {
                        var t = Array.prototype.slice.call(arguments, 1);
                        o.addAlerts(t)
                    })
                }
            });
            var l = this.options.titles;
            t.each(Object.keys(l), function(t, e) {
                var n = l[e];
                delete l[e], l[s(e)] = n
            }), o.clearAlerts = function() {
                t(this.element).html("")
            }, o.addAlerts = function(t) {
                var e = i([].concat(t));
                o.addAlertsToContainer(e.errs), o.addAlertsToContainer(e.warns), o.addAlertsToContainer(e.infos), o.addAlertsToContainer(e.succs);
                var n = parseInt(o.options.fade, 10);
                !isNaN(n) && n > 0 && (clearTimeout(a), a = setTimeout(o.fade, n))
            }, o.fade = function() {
                t("[data-alerts-container]").fadeOut("slow", function() {
                    t(this).remove()
                })
            }, o.buildNoticeContainer = function(e) {
                if (e.length > 0) {
                    var n = s(e[0].priority),
                        r = t("<button/>", {
                            type: "button",
                            class: "close",
                            "data-dismiss": "alert",
                            "aria-hidden": !0,
                            "aria-label": "close"
                        }).html("&times;"),
                        i = t(this.options.usebullets ? "<ul/>" : "<p/>");
                    o.attachLIs(i, e, this.options.usebullets);
                    var a = t("<div/>", {
                        "data-alerts-container": n,
                        class: "alert alert-dismissable alert-" + n
                    });
                    if (a.append(r), n in this.options.titles) {
                        var l = this.options.titles[n];
                        l.length > 0 && a.append(t("<strong/>").html(l))
                    }
                    return a.append(i), a
                }
                return null
            }, o.addAlertsToContainer = function(e) {
                if (e.length > 0) {
                    var n = t(this.element),
                        r = s(e[0].priority),
                        i = t('[data-alerts-container="' + r + '"]', n);
                    if (i.length > 0) {
                        var a = o.options.usebullets ? i.find("ul") : i.find("p");
                        o.attachLIs(a, e)
                    } else i = o.buildNoticeContainer(e), n.append(i)
                }
            }, o.attachLIs = function(e, n) {
                t.each(n, function(n, r) {
                    o.options.usebullets ? e.append(t("<li/>").html(r.message)) : e.append(n > 0 || e[0].childNodes.length ? "<br /><br />" + r.message : r.message)
                })
            }
        },
        i = t.fn.bsAlerts;
    t.fn.bsAlerts = function(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bsAlerts"),
                i = "object" == typeof e && e;
            r || n.data("bsAlerts", r = new s(this, i)), "string" == typeof e && r[e]()
        })
    }, t.fn.bsAlerts.Constructor = s, t.fn.bsAlerts.defaults = {
        titles: {},
        ids: "",
        fade: "0",
        usebullets: !0
    }, t.fn.bsAlerts.noConflict = function() {
        return t.fn.bsAlerts = i, this
    }, t(n).ready(function() {
        t('[data-alerts="alerts"]').each(function() {
            var e = t(this);
            e.bsAlerts(e.data())
        })
    })
}(jQuery, window, document);
