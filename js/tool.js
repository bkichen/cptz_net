/**
 * Created by zhizuo on 2017/10/18. liufuyu
 */
var ww = document.documentElement.clientWidth;
$(window).resize(function () {
  ww = document.documentElement.clientWidth;
});

/* 舌签 */
function tab0(l, t, c, lx) {
  (function () {
    $(l).each(function (i) {
      $(this).attr("data-xl", i);
      if (i == 0)$(this).addClass(c);
    });
    $(t).each(function (i) {
      $(this).attr("data-xl", i);
      if (i == 0)$(this).addClass(c);
    });
  })();
  if (lx == 1) {
    $(l).hover(function () {
      tabhx($(this))
    }, function () {
    });
    $(l).on("tap", function () {
      // console.log("6666");
      tabhx($(this))
    });
  }
  else {
    $(l).click(function () {
      tabhx($(this))
    });
  }
  function tabhx(e) {
    $(l).removeClass(c);
    $(t).removeClass(c);
    e.addClass(c);
    $(t + "[data-xl=" + e.attr("data-xl") + "]").addClass(c);
  }
}

/* 幻灯       父级  外框  内框  页签  箭头左 箭头右 时间 */
function hd_x1(fj, wk, nk, sq, jtl, jtr, sj) {
    var sl = $(nk).size();
    var dqL = 0;
    var fx = 1;
    var kg = true;
    var zdgd;

    // 页签
    $(sq).html("");
    $(sq).append('<li data-xl="0" class="dq"></li>');
    $(nk).eq(0).attr("data-xl", 0).addClass("dq");
    for (var sqi = 1; sqi < sl; sqi++) {
        $(sq).append('<li data-xl="' + sqi + '"></li>');
        $(nk).eq(sqi).attr("data-xl", sqi);
    }


    // 箭头显示隐藏
    $(fj).hover(
        function () {
            $(jtl + "," + jtr).removeClass("vh");
        },
        function () {
            $(jtl + "," + jtr).addClass("vh");
        }
    );

    // 页签变换幻灯
    $(sq + " li").hover(
        function () {
            if (kg && !$(this).hasClass("dq")) {
                var zqDq = parseInt($(sq + " li.dq").attr("data-xl"));
                var dqDq = parseInt($(this).attr("data-xl"));
                fx = (zqDq > dqDq) ? 1 : -1;
                gdgc(dqDq);
                $(sq + " li").removeClass("dq");
                $(this).addClass("dq");
            }
        },
        function () {
        }
    );

    if (sj) {
        zdgd = setInterval(function () {
            gdgc(dqL + 1);
        }, sj);

        $(fj).hover(function () {
                clearInterval(zdgd);
            },
            function () {
                zdgd = setInterval(function () {
                    gdgc(dqL + 1);
                }, sj);
            });
    }

    // 箭头变换幻灯
    $(jtl).click(function () {
        if (kg) {
            fx = -1;
            gdgc(dqL - 1);
        }
    });
    $(jtr).click(function () {
        if (kg) {
            fx = 1;
            gdgc(dqL + 1);
        }
    });


    // 向左滑动
    $(fj).on("swipeleft", function () {
        if (kg) {
            fx = 1;
            gdgc(dqL + 1);
        }
    });
    // 向右滑动
    $(fj).on("swiperight", function () {
        if (kg) {
            fx = -1;
            gdgc(dqL - 1);
        }
    });


    // 主动画
    function gdgc(mbL,lsfx) {
        // $(nk).stop();

        var zdwz;
        var tjl;
        lsfx = lsfx ? lsfx : fx;

        mbL = mbL < 0 ? sl - 1 : mbL;
        mbL = mbL > sl - 1 ? 0 : mbL;

        if (lsfx == 1 || fx == 1) {
            zdwz = "-100%";
            tjl = "zbL";
        }
        if (lsfx == -1 || fx == -1) {
            zdwz = "100%";
            tjl = "zbR";
        }
        $(nk + '[data-xl="' + mbL + '"]').addClass(tjl);

        dqL = parseInt(mbL);

        if (kg) {
            kg = false;
            $(wk + " .dq").animate({"left": zdwz}, 200, function () {
            });
            $(wk + " ." + tjl).animate({"left": 0}, 200, function () {
                $(wk + " .dq").removeClass("dq").attr("style", "");
                $(wk + " ." + tjl).addClass("dq").removeClass(tjl).attr("style", "");
                $(sq + " li").removeClass("dq");
                $(sq + ' li[data-xl="' + mbL + '"]').addClass("dq");
                kg = true;
            });
        }
    }
}



function hd(fj, wk, nk, sq, jtl, jtr, sj) {
  var sl = $(nk).size();
  var dqL = "-100%";
  var hdkg = true;
  var zdgd;
  var fx = -100;
  /* 幻灯初始化 */
  $(wk).width((sl + 2) * 100 + "%");
  var tmp1 = $(nk).last().html();
  $(wk).append("<div class='hdnk'>" + $(nk).first().html() + "</div>");
  $(wk).prepend("<div class='hdnk'>" + tmp1 + "</div>");
  $(nk).width((100 / (sl + 2)) + "%");
  $(wk).css("left", dqL);
  
  $(sq).html("");
  $(sq).append("<li class='dq' data-xl='0'></li>");
  for (var sqi = 1; sqi < sl; sqi++) {
    $(sq).append("<li data-xl='" + sqi + "'></li>");
  }
  /* 幻灯初始化 end */
  
  // 箭头显示隐藏
  $(fj).hover(
    function () {
      $(jtl + "," + jtr).removeClass("vh");
    },
    function () {
      $(jtl + "," + jtr).addClass("vh");
    }
  );
  
  // 页签变换幻灯
  $(sq + " li").hover(
    function () {
      dqL = (parseInt($(this).attr("data-xl")) + 1) * -100 + "%";
      dqL = dqL == "0%" ? "0" : dqL;
      gdgc(dqL);
    },
    function () {
    }
  );
  
  // 页签变换幻灯
  $(jtl).click(function () {
    fx = 100;
    dqL = parseInt(dqL) + fx + "%";
    gdgc(dqL);
  });
  $(jtr).click(function () {
    fx = -100;
    dqL = parseInt(dqL) + fx + "%";
    gdgc(dqL);
  });
  
  // 向左滑动
  $(fj).on("swipeleft", function () {
    dqL = parseInt(dqL) - 100 + "%";
    gdgc(dqL);
  });
  // 向右滑动
  $(fj).on("swiperight", function () {
    dqL = parseInt(dqL) + 100 + "%";
    gdgc(dqL);
  });
  
  if (sj) {
    zdgd = setInterval(function () {
      dqL = parseInt(dqL) + fx + "%";
      gdgc(dqL);
    }, sj);
    
    $(fj).hover(function () {
      clearInterval(zdgd);
    },
                function () {
                  zdgd = setInterval(function () {
                    dqL = parseInt(dqL) + fx + "%";
                    gdgc(dqL);
                  }, sj);
                });
  }
  
  
  function gdgc(mbL) {
    $(wk).stop();
    $(wk).animate({"left": mbL}, 150, function () {
      if (parseInt($(wk).css("left")) >= 0) {
        // console.log("0000000" + dqL);
        dqL = (sl) * -100 + "%";
        // console.log("0000000" + dqL);
        $(wk).css("left", dqL);
      }
      if (parseInt(dqL) <= (sl + 1) * -100) {
        dqL = "-100%";
        $(wk).css("left", dqL);
      }
      // console.log("+++++++");
      // console.log(dqL);
      $(sq + " li").removeClass("dq");
      $(sq + " li[data-xl=" + (parseInt(dqL) * -1 / 100 - 1) + "]").addClass("dq");
      // hdkg = true;
    });
    // }
  }
}

/* 幻灯主体 */
function hd09(hdt, att, lj, rj, obj) {
  var mbz0, lsz0;
  
  function hdcsh(fx) {
    $(hdt).each(function () {
      lsz0 = parseInt($(this).attr("data-xh"));
      if (fx) {
        mbz0 = (lsz0 == 0) ? 3 : lsz0 - 1;
      }
      else {
        mbz0 = (lsz0 == 3) ? 0 : lsz0 + 1;
      }
      $(this).attr(att, mbz0);
    });
    $(hdt + "[data-xh='" + 0 + "']").css("z-index", 14);
    $(hdt + "[data-xh='" + 1 + "']," + hdt + "[data-xh='" + 3 + "']").css("z-index", 7);
  }
  
  function gdzt0(hdt, att) {
    for (var i = 0; i < 4; $(hdt + "[data-xh='" + i + "']").animate(obj["hd0" + i], 300), i++);
  }
  
  $(lj).click(function () {
    hdcsh(true);
    gdzt0(hdt, att);
    //hdnr();
  });
  $(rj).click(function () {
    hdcsh(false);
    gdzt0(hdt, att);
    // hdnr();
  });
}

/* 下拉列表显示 2 */
function xllb2(dmb, kmb) {
  $(dmb).click(function (event) {
    var e = window.event || event;
    if (e && e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
    
    if ($(kmb).css("display") != "none") {
      $(dmb).removeClass("dq");
      $(kmb).css("display", "none");
    }
    else {
      $(dmb).addClass("dq");
      $(kmb).css("display", "block");
    }
  });
  $(kmb).click(function (event) {
    var e = window.event || event;
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  });
}
/* 点击空白关闭 */
function kbgb(gmb) {
  document.onclick = function () {
    $(gmb).css("display", "none");
    $(".zdy").removeClass("dq");
  };
};

/* 当前选项 */
function dqxx(mb, c) {
  $(mb).click(function () {
    
    $(mb).removeClass(c);
    $(this).addClass(c);
  });
}

/* 上下滚动 */
function sxgd(mbk, gdtN, yt, fzt, sd) {
  var ScrollTime;
  var nrH = parseInt($(yt).innerHeight());
  // console.log(nrH);
  $(fzt).html($(yt).html());
  
  function ScrollMarquee() {
    if (parseInt($(gdtN).css("top")) <= nrH * -1) {
      $(gdtN).css("top", 13);
    } else {
      $(gdtN).css("top", parseInt($(gdtN).css("top")) - 1);
    }
  }
  
  ScrollTime = setInterval(ScrollMarquee, sd);
  $(mbk).hover(function () {
    clearInterval(ScrollTime);
  },
               function () {
                 ScrollTime = setInterval(ScrollMarquee, sd);
               });
  
}