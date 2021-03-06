function getComments() {
    $.getJSON("https://travels.toa.st/siteForms/EnrichmentOfOther/CommentsJSON/", function(t) {
        $.each(t, function(t, e) {
            "" == e[3] ? $(".enrichedComments").prepend('<div class="cmntHolder cmntNo' + e[0] + '" data-id=' + e[0] + '><p class="unnestedComment"><span class="enrichName sansBook">' + e[1] + '</span><span class="timePosted sansBook">' + e[4] + "</span><br>" + e[2] + '<br /><a href="#" class="sansBook reply">reply</a></div>') : $(".cmntNo" + e[3]).append('<p class="nestedComment"><span class="nestedName sansBook">' + e[1] + '</span><span class="timePosted">' + e[4] + "</span><br>" + e[2] + "</p>")
        }), replyToBind(), getReplyCount(), showReplies()
    })
}

function getReplyCount() {
    for (var t = 0; t < $(".cmntHolder").length; t++) $(".cmntHolder")[t].children.length > 1 && $($(".cmntHolder .unnestedComment")[t]).append('<a href="#" class="replies sansBook">' + ($(".cmntHolder")[t].children.length - 1) + " Replies</a>")
}

function replyToBind() {
    $(".reply").click(function(t) {
        t.preventDefault();
        var e = $(this).parent().parent()[0],
            n = $(e).attr("data-id"),
            i = $(document).width(),
            a = $(document).height();
        $(".commentLightbox").css("width", i), $(".commentLightbox").css("height", a);
        var s = $(window).scrollTop() + 120,
            o = $(window).scrollTop() - 100;
        $(window).width() < 768 ? ($(".commentLightboxInner").css("width", "100%"), $(".commentLightbox iframe").css("width", "100%"), $(".commentLightbox").show(), $(".commentLightboxInner").css("margin-top", o), $(".commentLightboxInner").append("<iframe src='https://travels.toa.st/siteForms/EnrichmentOfOther/index.php?replyID=" + n + "'></iframe>")) : (wwidth = $(window).width(), fwidth = .2 * wwidth, finalWidth = wwidth - fwidth, $(".commentLightboxInner").css("width", finalWidth), $(".commentLightbox").fadeIn(200), $(".commentLightboxInner").css("margin-top", s), $(".commentLightboxInner").append("<iframe src='https://travels.toa.st/siteForms/EnrichmentOfOther/index.php?replyID=" + n + "'></iframe>"))
    })
}

function showReplies() {
    $(".replies").click(function(t) {
        t.preventDefault(), $(this).parent().parent().children().show(), $(this).hide()
    })
}

function instagramSlider() {
    $.ajax({
        type: "GET",
        url: "https://api.instagram.com/v1/users/3351257/media/recent/?access_token=3351257.1677ed0.b27b02c841ca4128b3fcb97232c5f000",
        dataType: "jsonp",
        success: function(t) {
            var e = t.data;
            jQuery.each(e, function(t, e) {
                var n = "<a href='" + e.link + "' target='_blank'><div class='instagram-img-holder'><img src='" + e.images.standard_resolution.url + "' class='instagram-img' data-comments='" + e.comments.count + "' data-likes='" + e.likes.count + "' data-recent='" + e.created_time + "'/><div class='instagram-rollover'>" + e.caption.text + "</div></div></a>";
                $("#instagramInner").append($.parseHTML(n))
            })
        },
        async: !1
    });
    var t = 0,
        e = $(".instagram-img").length,
        n = Math.ceil(e / 6),
        i = !1;
    $("#instagramSlider .slide-right, #instagramSlider .slide-left").click(function() {
        if (n = $("#mediaChecker").css("content").match(/mobile/g) ? e : Math.ceil(e / 6), !1 === i) {
            i = !0;
            $(this).hasClass("slide-right") ? ("right", ++t > 3 && (t = 0, $("#instagramInner").animate({
                marginLeft: "-" + parseInt(t / 100) + "%"
            }, function() {
                i = !1
            }))) : -1 === --t && (t = 3, $("#instagramInner").animate({
                marginLeft: "-" + parseInt(100 * t) + "%"
            }, function() {
                i = !1
            })), $("#instagramInner").animate({
                marginLeft: "-" + parseInt(100 * t) + "%"
            }, function() {
                i = !1
            })
        }
    }), $(".instagram-filter").click(function() {
        var t = $(this).data("filter");
        $(".instagram-filter.selected-filter").removeClass("selected-filter"), $(this).addClass("selected-filter");
        var e = [];
        $(".instagram-img").each(function(t) {
            e[t] = {
                element: $(this),
                comments: $(this).data("comments"),
                likes: $(this).data("likes"),
                recent: $(this).data("recent")
            }
        }), e.sort(function(e, n) {
            return parseFloat(n[t]) - parseFloat(e[t])
        });
        for (var n = 0; n < e.length; n++) $("#instagramInner").append($(e[n].element).parent().parent());
        $("#instagramInner").removeClass("fadeIn"), setTimeout(function() {
            $("#instagramInner").addClass("fadeIn")
        }, 1)
    })
}

function onYouTubeIframeAPIReady() {
    function t() {
        var t = $(document).height();
        $("body").prepend($('<div class="lbYTplayer"></div>')), $(".lbYTplayer").height(t), $(".lbYTplayer").html($(".YThiddenContent").html()), $("#ytLightboxbg").append(vidDesc), $(".lbYTplayer").fadeIn(200, function() {
            if ($(document).width() < 768) {
                t = $(window).scrollTop() + 120;
                $("#ytLightboxbg").css("width", vidWidth), $("#ytLightBox iframe").css("width", "100%"), $("#ytLightboxbg").css("left", vidOffsetL).css("top", vidOffsetTp), $(".lbYTplayer").css("background-color", "rgba(255,255,255,0.9)")
            } else {
                var t = $(window).scrollTop() + 120;
                $("#ytLightboxbg").css("width", "80%"), $("#ytLightBox iframe").css("width", "100%");
                var e = ($(window).width() - $("#ytLightboxbg").width()) / 2;
                $("#ytLightboxbg").css("left", e).css("top", t)
            }
        })
    }
    $(".lbBtn").click(function(e) {
        function n(t, e) {
            t.target.playVideo(), player2 = new YT.Player("player2", {
                height: "390",
                width: "640",
                videoId: vidToPlay,
                autoplay: 1,
                events: {
                    onReady: n,
                    onStateChange: i
                }
            })
        }

        function i(t) {
            t.data == YT.PlayerState.ENDED && (player.stopVideo(), player.destroy(), $(".lbYTplayer").fadeOut(200))
        }
        vidOffsetTp = $(this).offset().top, vidOffsetL = $(this).offset().left, vidWidth = $(this).width(), imageClicked = $(this).attr("data-video-index"), vidDesc = vidDescs[imageClicked], vidClicked = parseInt(imageClicked), vidToPlay = vids[vidClicked], t(), $(".closeLBYT img").click(function() {
            $(".lbYTplayer").fadeOut(200), $(".lbYTplayer").remove()
        }), player = new YT.Player("player", {
            height: "390",
            width: "640",
            videoId: vidToPlay,
            playerVars: {
                autoplay: 1,
                controls: 1,
                showinfo: 0,
                modestbranding: !0
            },
            events: {
                onReady: n,
                onStateChange: i
            }
        })
    })
}

function formCompleted() {
    $(".commentLightbox").hide(), $(".commentLightbox iframe").remove(), getComments()
}
$(document).ready(function() {
    getComments(), instagramSlider(), $(".vidImgs img").hover(function() {
        $(this).css("cursor", "pointer")
    }), $(".commentHere").hover(function() {
        $(this).css("cursor", "pointer")
    })
}), $(".commentHere").click(function(t) {
    t.preventDefault();
    var e = $(this).parent().parent()[0],
        n = ($(e).attr("data-id"), $(document).width()),
        i = $(document).height();
    $(".commentLightbox").css("width", n), $(".commentLightbox").css("height", i);
    var a = $(window).scrollTop() + 120,
        s = $(window).scrollTop() - 100;
    $(window).width() < 768 ? ($(".commentLightboxInner").css("width", "95%"), $(".commentLightboxInner").css("margin", "2.5%"), $(".commentLightbox iframe").css("width", "100%"), $(".commentLightbox").show(), $(".commentLightboxInner").css("margin-top", s), $(".commentLightboxInner").append("<iframe src='https://travels.toa.st/siteForms/EnrichmentOfOther/index.php'></iframe>")) : (wwidth = $(window).width(), fwidth = .2 * wwidth, finalWidth = wwidth - fwidth, $(".commentLightboxInner").css("width", finalWidth), $(".commentLightbox").fadeIn(200), $(".commentLightboxInner").css("margin-top", a), $(".commentLightboxInner").append("<iframe src='https://travels.toa.st/siteForms/EnrichmentOfOther/index.php'></iframe>"))
}), $(".closeLb img").click(function() {
    $(".commentLightbox").hide(), $(".commentLightbox iframe").remove()
}), vidDescs = ['<h3 class="textBook">Bettany Hughes | Historian, Author & Broadcaster</h3><p class="textBook"></p>', '<h3 class="textBook">Dan Pearson | Garden Designer & Writer</h3><p class="textBook"></p>', '<h3 class="textBook">5 Authors, 10 Questions</h3><p class="textBook"></p>'], vidToPlay = 0;
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player, tVideo = "nuVVHxCJSQY",
    tVideo2 = "nuVVHxCJSQY",
    eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
    eventer = window[eventMethod],
    messageEvent = "attachEvent" == eventMethod ? "onmessage" : "message";
eventer(messageEvent, function(t) {
    "formComplete" == t[t.message ? "message" : "data"] && formCompleted()
}, !1);