var baseAnimat = {
    flag: true,
    animate_fj: function () {//走进双色球页面动画
        $(".zsFj").animate({left: "370px", top: "79px"}, 1500, "linear", function () {
            $(".zsDb").fadeIn(1000).animate({left: "350px", top: "135px"}, 1500, "linear", function () {
                $(".zsFj").fadeOut(1000);
                var _this = $(this);
                var time_bj = setTimeout(function () {
                    clearTimeout(time_bj);
                    _this.animate({left: "250px", top: "150px"}, 1500, "linear", function () {
                        _this.animate({left: "100px", top: "220px"}, 2000, "linear", function () {
                            _this.animate({left: "60px", top: "280px"}, 1500, "linear", function () {
                                var time_zhcw = setTimeout(function () {
                                    clearTimeout(time_zhcw);
                                    _this.animate({left: "75px", top: "400px"}, 2000, "linear", function () {
                                        _this.animate({left: "200px", top: "490px"}, 2000, "linear", function () {
                                            var time_zs = setTimeout(function () {
                                                clearTimeout(time_zs);
                                                _this.animate({
                                                    left: "400px",
                                                    top: "520px"
                                                }, 2000, "linear", function () {
                                                    _this.animate({
                                                        left: "500px",
                                                        top: "500px"
                                                    }, 1500, "linear", function () {
                                                        _this.animate({
                                                            left: "600px",
                                                            top: "480px"
                                                        }, 1500, "linear", function () {
                                                            _this.fadeOut(1000,function(){
                                                                _this.css({left: "425px", top: "125px"});
                                                                $(".zsFj").fadeIn(1000).css({left: "558px", top: "-52px"});
                                                            });
                                                            var time_5 = setTimeout(function () {
                                                                baseAnimat.animate_fj();
                                                                clearTimeout(time_5);
                                                            }, 2000);
                                                        });
                                                    });
                                                });
                                            }, 2000);
                                        });
                                    });
                                }, 2000);
                            });
                        });
                    });
                }, 2000)
            });
        });
    },
    animate_fj_ggl: function () {//走进刮刮乐页面动画
        $(".zgFj").animate({left: "375px", top: "10px"}, 1500, "linear", function () {
            $(".zgDb").fadeIn(1000).animate({left: "320px", top: "170px"}, 1500, "linear", function () {
                $(".zgFj").fadeOut(1000);
                var _this = $(this);
                var time_1 = setTimeout(function () {
                    _this.animate({left: "150px", top: "250px"}, 2000, "linear", function () {
                        var time_2 = setTimeout(function () {
                            _this.animate({left: "150px", top: "290px"}, 500, "linear", function () {
                                var time_3 = setTimeout(function () {
                                    _this.animate({left: "160px", top: "450px"}, 1500, "linear", function () {
                                        var time_4 = setTimeout(function () {
                                            _this.animate({left: "350px", top: "560px"}, 1500, "linear", function () {
                                                var time_5 = setTimeout(function () {
                                                    _this.animate({
                                                        left: "550px",
                                                        top: "550px"
                                                    }, 1500, "linear", function () {
                                                        _this.fadeOut(1000,function(){
                                                            _this.css({left: "390px", top: "70px"});
                                                            $(".zgFj").fadeIn(1000).css({left: "270px", top: "-52px"});
                                                        });
                                                        var time_5 = setTimeout(function () {
                                                            baseAnimat.animate_fj_ggl();
                                                            clearTimeout(time_5);
                                                        }, 2000);
                                                    });
                                                    clearTimeout(time_5);
                                                }, 2000);
                                            });
                                            clearTimeout(time_4);
                                        }, 2000)
                                    });
                                    clearTimeout(time_3);
                                }, 2000)
                            });
                            clearTimeout(time_2);
                        }, 2000)
                    });
                    clearTimeout(time_1);
                }, 2000)

            });
        });
    },
    dropOut:function(){//福彩视频票投注流程
        _this = $(".lc div");
        _this.eq(0).animate({top:"0px"},500,"linear",function(){
            $(this).animate({opacity:"1"},800,function(){}).children().fadeIn(1000);
            _this.eq(1).animate({top:"40px"},500,"linear",function(){
                $(this).animate({opacity:"1"},800,function(){}).children().fadeIn(1000);
                _this.eq(2).animate({top:"156px"},500,"linear",function(){
                    $(this).animate({opacity:"1"},800,function(){}).children().fadeIn(1000);
                    _this.eq(3).animate({top:"269px"},500,"linear",function(){
                    $(this).animate({opacity:"1"},800,function(){}).children().fadeIn(1000);
                        _this.eq(4).animate({top:"320px"},500,"linear",function(){
                    $(this).animate({opacity:"1"},800,function(){}).children().fadeIn(1000);
                            _this.eq(5).animate({top:"498px"},500,"linear",function(){
                    $(this).animate({opacity:"1"},800,function(){}).children().fadeIn(1000);
                            });
                        });
                    });
                });
            });
        });
    },
    fileTree:function(){//福彩档案文件树
        var timeDownL = 0,timeDownR = 0;
        $.each($(".d1ZyL"), function(i, v){
            setTimeout(function(){
                $(v).animate({left: "9"}, 1500, "swing",function () {
                    $(this).animate({opacity: "1",}, 1000,"swing", function () {
                                    
                    });    
                });
            },timeDownL)
            timeDownL = timeDownL + 1000;
        });
        $.each($(".d1ZyR"), function(i, v){
            setTimeout(function(){
                $(v).animate({right: "9"}, 1500, "swing",function () {
                    $(this).animate({opacity: "1",}, 1000,"swing", function () {
                                    
                    });    
                });
            },timeDownR)
            timeDownR = timeDownR + 1300;
        });
    },
    fileYear:function(){
        var index,marginTop;
        var indexLi =  $(".sxW ul li").length;
        $(".text_box").html('').html($(".sxW .dq .text_box_none").html());
        $(".sxW li").unbind("click").bind("click",function(){
            $(".sxW li").removeClass("dq");
            $(this).addClass("dq");
            $(".text_box").html('').html($(".sxW .dq .text_box_none").html());
        });
        $(".jts").unbind("click").bind("click",function(){
            if ($(".sxW ul li").index($(".dq"))+1 > 1){
                $(".dq").removeClass("dq").prev().addClass("dq");
                index = $(".sxW ul li").index($(".dq"))+1;
                if(parseInt($(".sxW ul").css("marginTop")) != 0){
                    marginTop = parseInt($(".sxW ul").css("marginTop"))+30;
                    $(".sxW ul").css({"margin-top":marginTop});
                }
                $(".text_box").html('').html($(".sxW .dq .text_box_none").html());
            }
        });
        $(".jtx").unbind("click").bind("click",function(){
            if ($(".sxW ul li").index($(".dq"))+1 < indexLi){
                $(".dq").removeClass("dq").next().addClass("dq");
                index = $(".sxW ul li").index($(".dq"))+1;
                if(index > 10 && index <= indexLi){
                    marginTop = parseInt($(".sxW ul").css("marginTop"))-30;
                    if (marginTop >= parseInt(-((indexLi-10)*30))){
                        $(".sxW ul").css({"margin-top":marginTop});
                    }
                }
                $(".text_box").html('').html($(".sxW .dq .text_box_none").html());
            }
        });
    },
    isViewing: function (elm, callback,delayTime) {//检测元素是否存可视区域
        setTimeout(function () {
            $(window).scrollTop(0);
        }, 100);
        if ($(window).width() > 800) {
            setTimeout(function () {
                $(window).bind("scroll", function () {
                    var a = $('.' + elm + '').offset().top;
                    if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
                        $(window).unbind("scroll");
                        var time = setTimeout(function () {
                            callback();
                            clearTimeout(time);
                        }, delayTime == undefined ? 500 : delayTime);
                    }
                });
            }, 50);
        }

    }
}
jQuery.fn.slideLeftShow = function( speed, callback ) {
    this.animate({
        width : "show",
        paddingLeft : "show",
        paddingRight : "show",
        marginLeft : "show",
        marginRight : "show"
    }, speed, callback );
};
